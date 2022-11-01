var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/assertThisInitialized"));

var _set2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/set"));

var _get2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

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

window.fgui = window.fgui || {}, window.fairygui = window.fgui || {}, function(t) {
    var e = /* */ function() {
        function e() {
            (0, _classCallCheck2.default)(this, e);
            this._asset = Laya.loader;
        }
        (0, _createClass2.default)(e, [ {
            key: "getRes",
            value: function getRes(t) {
                return this._asset.getRes(t);
            }
        }, {
            key: "load",
            value: function load(t, e, i, s, h, r) {
                this._asset.load(t, e, i, s, h, r);
            }
        }, {
            key: "setAsset",
            value: function setAsset(t) {
                this._asset = t;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                return e._inst || (e._inst = new e()), e._inst;
            }
        } ]);
        return e;
    }();
    t.AssetProxy = e;
    t.AsyncOperation = /* */ function() {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
            this._itemList = new Array(), this._objectPool = [];
        }
        (0, _createClass2.default)(_class, [ {
            key: "createObject",
            value: function createObject(e, i) {
                var s = t.UIPackage.getByName(e);
                if (!s) throw new Error("package not found: " + e);
                var h = s.getItemByName(i);
                if (!h) throw new Error("resource not found: " + i);
                this.internalCreateObject(h);
            }
        }, {
            key: "createObjectFromURL",
            value: function createObjectFromURL(e) {
                var i = t.UIPackage.getItemByURL(e);
                if (!i) throw new Error("resource not found: " + e);
                this.internalCreateObject(i);
            }
        }, {
            key: "cancel",
            value: function cancel() {
                if (Laya.timer.clear(this, this.run), this._itemList.length = 0, this._objectPool.length > 0) {
                    for (var t = this._objectPool.length, e = 0; e < t; e++) {
                        this._objectPool[e].dispose();
                    }
                    this._objectPool.length = 0;
                }
            }
        }, {
            key: "internalCreateObject",
            value: function internalCreateObject(t) {
                this._itemList.length = 0, this._objectPool.length = 0;
                var e = {
                    pi: t,
                    type: t.objectType
                };
                e.childCount = this.collectComponentChildren(t), this._itemList.push(e), this._index = 0, 
                Laya.timer.frameLoop(1, this, this.run);
            }
        }, {
            key: "collectComponentChildren",
            value: function collectComponentChildren(e) {
                var i, s, h, r, a, n, o = e.rawData;
                o.seek(0, 2);
                var l = o.getInt16();
                for (h = 0; h < l; h++) {
                    r = o.getInt16(), a = o.pos, o.seek(a, 0);
                    var _ = o.readByte(), d = o.readS(), c = o.readS();
                    o.pos = a, null != d ? (i = {
                        pi: s = (n = null != c ? t.UIPackage.getById(c) : e.owner) ? n.getItemById(d) : null,
                        type: _
                    }, s && s.type == t.PackageItemType.Component && (i.childCount = this.collectComponentChildren(s))) : (i = {
                        type: _
                    }, _ == t.ObjectType.List && (i.listItemCount = this.collectListChildren(o))), this._itemList.push(i), 
                    o.pos = a + r;
                }
                return l;
            }
        }, {
            key: "collectListChildren",
            value: function collectListChildren(e) {
                e.seek(e.pos, 8);
                var i, s, h, r, a, n = 0, o = e.readS(), l = e.getInt16();
                for (i = 0; i < l; i++) {
                    s = e.getInt16(), s += e.pos, null == (h = e.readS()) && (h = o), h && (r = t.UIPackage.getItemByURL(h)) && (a = {
                        pi: r,
                        type: r.objectType
                    }, r.type == t.PackageItemType.Component && (a.childCount = this.collectComponentChildren(r)), 
                    this._itemList.push(a), n++), e.pos = s;
                }
                return n;
            }
        }, {
            key: "run",
            value: function run() {
                for (var e, i, s, h, r = Laya.Browser.now(), a = t.UIConfig.frameTimeForAsyncUIConstruction, n = this._itemList.length; this._index < n; ) {
                    if ((i = this._itemList[this._index]).pi) e = t.UIObjectFactory.newObject(i.pi), 
                    this._objectPool.push(e), t.UIPackage._constructing++, i.pi.type == t.PackageItemType.Component ? (s = this._objectPool.length - i.childCount - 1, 
                    e.constructFromResource2(this._objectPool, s), this._objectPool.splice(s, i.childCount)) : e.constructFromResource(), 
                    t.UIPackage._constructing--; else if (e = t.UIObjectFactory.newObject(i.type), this._objectPool.push(e), 
                    i.type == t.ObjectType.List && i.listItemCount > 0) {
                        for (s = this._objectPool.length - i.listItemCount - 1, h = 0; h < i.listItemCount; h++) {
                            e.itemPool.returnObject(this._objectPool[h + s]);
                        }
                        this._objectPool.splice(s, i.listItemCount);
                    }
                    if (this._index++, this._index % 5 == 0 && Laya.Browser.now() - r >= a) return;
                }
                Laya.timer.clear(this, this.run);
                var o = this._objectPool[0];
                this._itemList.length = 0, this._objectPool.length = 0, null != this.callback && this.callback.runWith(o);
            }
        } ]);
        return _class;
    }();
    var i = 0;
    t.Controller = /* */ function(_Laya$EventDispatcher) {
        (0, _inherits2.default)(_class2, _Laya$EventDispatcher);
        var _super = _createSuper(_class2);
        function _class2() {
            var _this;
            (0, _classCallCheck2.default)(this, _class2);
            _this = _super.call(this), _this._pageIds = [], _this._pageNames = [], _this._selectedIndex = -1, 
            _this._previousIndex = -1;
            return _this;
        }
        (0, _createClass2.default)(_class2, [ {
            key: "dispose",
            value: function dispose() {
                this.offAll();
            }
        }, {
            key: "setSelectedIndex",
            value: function setSelectedIndex(t) {
                if (this._selectedIndex != t) {
                    if (t > this._pageIds.length - 1) throw "index out of bounds: " + t;
                    this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = t, 
                    this.parent.applyController(this), this.changing = !1;
                }
            }
        }, {
            key: "setSelectedPage",
            value: function setSelectedPage(t) {
                var e = this._pageNames.indexOf(t);
                -1 == e && (e = 0), this.setSelectedIndex(e);
            }
        }, {
            key: "getPageName",
            value: function getPageName(t) {
                return this._pageNames[t];
            }
        }, {
            key: "addPage",
            value: function addPage(t) {
                this.addPageAt(t, this._pageIds.length);
            }
        }, {
            key: "addPageAt",
            value: function addPageAt(t, e) {
                var s = "" + i++;
                e == this._pageIds.length ? (this._pageIds.push(s), this._pageNames.push(t)) : (this._pageIds.splice(e, 0, s), 
                this._pageNames.splice(e, 0, t));
            }
        }, {
            key: "removePage",
            value: function removePage(t) {
                var e = this._pageNames.indexOf(t);
                -1 != e && (this._pageIds.splice(e, 1), this._pageNames.splice(e, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this));
            }
        }, {
            key: "removePageAt",
            value: function removePageAt(t) {
                this._pageIds.splice(t, 1), this._pageNames.splice(t, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this);
            }
        }, {
            key: "clearPages",
            value: function clearPages() {
                this._pageIds.length = 0, this._pageNames.length = 0, -1 != this._selectedIndex ? this.selectedIndex = -1 : this.parent.applyController(this);
            }
        }, {
            key: "hasPage",
            value: function hasPage(t) {
                return -1 != this._pageNames.indexOf(t);
            }
        }, {
            key: "getPageIndexById",
            value: function getPageIndexById(t) {
                return this._pageIds.indexOf(t);
            }
        }, {
            key: "getPageIdByName",
            value: function getPageIdByName(t) {
                var e = this._pageNames.indexOf(t);
                return -1 != e ? this._pageIds[e] : null;
            }
        }, {
            key: "getPageNameById",
            value: function getPageNameById(t) {
                var e = this._pageIds.indexOf(t);
                return -1 != e ? this._pageNames[e] : null;
            }
        }, {
            key: "getPageId",
            value: function getPageId(t) {
                return this._pageIds[t];
            }
        }, {
            key: "runActions",
            value: function runActions() {
                if (this._actions) for (var t = this._actions.length, e = 0; e < t; e++) {
                    this._actions[e].run(this, this.previousPageId, this.selectedPageId);
                }
            }
        }, {
            key: "setup",
            value: function setup(e) {
                var i, s, h = e.pos;
                e.seek(h, 0), this.name = e.readS(), e.readBool() && (this.autoRadioGroupDepth = !0), 
                e.seek(h, 1);
                var r = e.getInt16();
                for (i = 0; i < r; i++) {
                    this._pageIds.push(e.readS()), this._pageNames.push(e.readS());
                }
                var a = 0;
                if (e.version >= 2) switch (e.getByte()) {
                  case 1:
                    a = e.getInt16();
                    break;

                  case 2:
                    -1 == (a = this._pageNames.indexOf(t.UIPackage.branch)) && (a = 0);
                    break;

                  case 3:
                    -1 == (a = this._pageNames.indexOf(t.UIPackage.getVar(e.readS()))) && (a = 0);
                }
                if (e.seek(h, 2), (r = e.getInt16()) > 0) for (this._actions || (this._actions = []), 
                i = 0; i < r; i++) {
                    s = e.getInt16(), s += e.pos;
                    var n = t.ControllerAction.createAction(e.readByte());
                    n.setup(e), this._actions.push(n), e.pos = s;
                }
                this.parent && this._pageIds.length > 0 ? this._selectedIndex = a : this._selectedIndex = -1;
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                return this._selectedIndex;
            },
            set: function set(e) {
                if (this._selectedIndex != e) {
                    if (e > this._pageIds.length - 1) throw "index out of bounds: " + e;
                    this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = e, 
                    this.parent.applyController(this), this.event(t.Events.STATE_CHANGED, this), this.changing = !1;
                }
            }
        }, {
            key: "previsousIndex",
            get: function get() {
                return this._previousIndex;
            }
        }, {
            key: "selectedPage",
            get: function get() {
                return -1 == this._selectedIndex ? null : this._pageNames[this._selectedIndex];
            },
            set: function set(t) {
                var e = this._pageNames.indexOf(t);
                -1 == e && (e = 0), this.selectedIndex = e;
            }
        }, {
            key: "previousPage",
            get: function get() {
                return -1 == this._previousIndex ? null : this._pageNames[this._previousIndex];
            }
        }, {
            key: "pageCount",
            get: function get() {
                return this._pageIds.length;
            }
        }, {
            key: "selectedPageId",
            get: function get() {
                return -1 == this._selectedIndex ? null : this._pageIds[this._selectedIndex];
            },
            set: function set(t) {
                var e = this._pageIds.indexOf(t);
                this.selectedIndex = e;
            }
        }, {
            key: "oppositePageId",
            set: function set(t) {
                this._pageIds.indexOf(t) > 0 ? this.selectedIndex = 0 : this._pageIds.length > 1 && (this.selectedIndex = 1);
            }
        }, {
            key: "previousPageId",
            get: function get() {
                return -1 == this._previousIndex ? null : this._pageIds[this._previousIndex];
            }
        } ]);
        return _class2;
    }(Laya.EventDispatcher);
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
            this._agent = new t.GLoader(), this._agent.draggable = !0, this._agent.touchable = !1, 
            this._agent.setSize(100, 100), this._agent.setPivot(.5, .5, !0), this._agent.align = "center", 
            this._agent.verticalAlign = "middle", this._agent.sortingOrder = 1e6, this._agent.on(t.Events.DRAG_END, this, this.__dragEnd);
        }
        (0, _createClass2.default)(s, [ {
            key: "startDrag",
            value: function startDrag(e, i, s, h) {
                if (!this._agent.parent) {
                    this._sourceData = s, this._agent.url = i, t.GRoot.inst.addChild(this._agent);
                    var r = t.GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                    this._agent.setXY(r.x, r.y), this._agent.startDrag(h);
                }
            }
        }, {
            key: "cancel",
            value: function cancel() {
                this._agent.parent && (this._agent.stopDrag(), t.GRoot.inst.removeChild(this._agent), 
                this._sourceData = null);
            }
        }, {
            key: "__dragEnd",
            value: function __dragEnd(e) {
                if (this._agent.parent) {
                    t.GRoot.inst.removeChild(this._agent);
                    var i = this._sourceData;
                    this._sourceData = null;
                    for (var s = t.GObject.cast(e.target); s; ) {
                        if (s.displayObject.hasListener(t.Events.DROP)) return s.requestFocus(), void s.displayObject.event(t.Events.DROP, [ i, t.Events.createEvent(t.Events.DROP, s.displayObject, e) ]);
                        s = s.parent;
                    }
                }
            }
        }, {
            key: "dragAgent",
            get: function get() {
                return this._agent;
            }
        }, {
            key: "dragging",
            get: function get() {
                return null != this._agent.parent;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                return s._inst || (s._inst = new s()), s._inst;
            }
        } ]);
        return s;
    }();
    t.DragDropManager = s;
    var h = /* */ function() {
        function h() {
            (0, _classCallCheck2.default)(this, h);
        }
        (0, _createClass2.default)(h, null, [ {
            key: "createEvent",
            value: function createEvent(t, e, i) {
                return this.$event.setTo(t, e, i && i.target || e), this.$event.touchId = i && i.touchId || 0, 
                this.$event.nativeEvent = i, this.$event._stoped = !1, this.$event;
            }
        }, {
            key: "dispatch",
            value: function dispatch(t, e, i) {
                e.event(t, this.createEvent(t, e, i));
            }
        } ]);
        return h;
    }();
    var r, a, n, o, l, _, d, c, u, g, p, y, f, m, v, w, C, b, S, x, I, T;
    h.STATE_CHANGED = "fui_state_changed", h.XY_CHANGED = "fui_xy_changed", h.SIZE_CHANGED = "fui_size_changed", 
    h.SIZE_DELAY_CHANGE = "fui_size_delay_change", h.CLICK_ITEM = "fui_click_item", 
    h.SCROLL = "fui_scroll", h.SCROLL_END = "fui_scroll_end", h.DROP = "fui_drop", h.DRAG_START = "fui_drag_start", 
    h.DRAG_MOVE = "fui_drag_move", h.DRAG_END = "fui_drag_end", h.PULL_DOWN_RELEASE = "fui_pull_down_release", 
    h.PULL_UP_RELEASE = "fui_pull_up_release", h.GEAR_STOP = "fui_gear_stop", h.$event = new Laya.Event(), 
    t.Events = h, function(t) {
        t[t.Common = 0] = "Common", t[t.Check = 1] = "Check", t[t.Radio = 2] = "Radio";
    }(r = t.ButtonMode || (t.ButtonMode = {})), function(t) {
        t[t.None = 0] = "None", t[t.Both = 1] = "Both", t[t.Height = 2] = "Height";
    }(a = t.AutoSizeType || (t.AutoSizeType = {})), function(t) {
        t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right";
    }(n = t.AlignType || (t.AlignType = {})), function(t) {
        t[t.Top = 0] = "Top", t[t.Middle = 1] = "Middle", t[t.Bottom = 2] = "Bottom";
    }(o = t.VertAlignType || (t.VertAlignType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Scale = 1] = "Scale", t[t.ScaleMatchHeight = 2] = "ScaleMatchHeight", 
        t[t.ScaleMatchWidth = 3] = "ScaleMatchWidth", t[t.ScaleFree = 4] = "ScaleFree", 
        t[t.ScaleNoBorder = 5] = "ScaleNoBorder";
    }(l = t.LoaderFillType || (t.LoaderFillType = {})), function(t) {
        t[t.SingleColumn = 0] = "SingleColumn", t[t.SingleRow = 1] = "SingleRow", t[t.FlowHorizontal = 2] = "FlowHorizontal", 
        t[t.FlowVertical = 3] = "FlowVertical", t[t.Pagination = 4] = "Pagination";
    }(_ = t.ListLayoutType || (t.ListLayoutType = {})), function(t) {
        t[t.Single = 0] = "Single", t[t.Multiple = 1] = "Multiple", t[t.Multiple_SingleClick = 2] = "Multiple_SingleClick", 
        t[t.None = 3] = "None";
    }(d = t.ListSelectionMode || (t.ListSelectionMode = {})), function(t) {
        t[t.Visible = 0] = "Visible", t[t.Hidden = 1] = "Hidden", t[t.Scroll = 2] = "Scroll";
    }(c = t.OverflowType || (t.OverflowType = {})), function(t) {
        t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Sound = 2] = "Sound", 
        t[t.Component = 3] = "Component", t[t.Atlas = 4] = "Atlas", t[t.Font = 5] = "Font", 
        t[t.Swf = 6] = "Swf", t[t.Misc = 7] = "Misc", t[t.Unknown = 8] = "Unknown", t[t.Spine = 9] = "Spine", 
        t[t.DragonBones = 10] = "DragonBones";
    }(u = t.PackageItemType || (t.PackageItemType = {})), function(t) {
        t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Swf = 2] = "Swf", 
        t[t.Graph = 3] = "Graph", t[t.Loader = 4] = "Loader", t[t.Group = 5] = "Group", 
        t[t.Text = 6] = "Text", t[t.RichText = 7] = "RichText", t[t.InputText = 8] = "InputText", 
        t[t.Component = 9] = "Component", t[t.List = 10] = "List", t[t.Label = 11] = "Label", 
        t[t.Button = 12] = "Button", t[t.ComboBox = 13] = "ComboBox", t[t.ProgressBar = 14] = "ProgressBar", 
        t[t.Slider = 15] = "Slider", t[t.ScrollBar = 16] = "ScrollBar", t[t.Tree = 17] = "Tree", 
        t[t.Loader3D = 18] = "Loader3D";
    }(g = t.ObjectType || (t.ObjectType = {})), function(t) {
        t[t.Percent = 0] = "Percent", t[t.ValueAndMax = 1] = "ValueAndMax", t[t.Value = 2] = "Value", 
        t[t.Max = 3] = "Max";
    }(p = t.ProgressTitleType || (t.ProgressTitleType = {})), function(t) {
        t[t.Default = 0] = "Default", t[t.Visible = 1] = "Visible", t[t.Auto = 2] = "Auto", 
        t[t.Hidden = 3] = "Hidden";
    }(y = t.ScrollBarDisplayType || (t.ScrollBarDisplayType = {})), function(t) {
        t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical", t[t.Both = 2] = "Both";
    }(f = t.ScrollType || (t.ScrollType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", 
        t[t.Both = 3] = "Both";
    }(m = t.FlipType || (t.FlipType = {})), function(t) {
        t[t.Ascent = 0] = "Ascent", t[t.Descent = 1] = "Descent", t[t.Arch = 2] = "Arch";
    }(v = t.ChildrenRenderOrder || (t.ChildrenRenderOrder = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
    }(w = t.GroupLayoutType || (t.GroupLayoutType = {})), function(t) {
        t[t.Auto = 0] = "Auto", t[t.Up = 1] = "Up", t[t.Down = 2] = "Down";
    }(C = t.PopupDirection || (t.PopupDirection = {})), function(t) {
        t[t.Left_Left = 0] = "Left_Left", t[t.Left_Center = 1] = "Left_Center", t[t.Left_Right = 2] = "Left_Right", 
        t[t.Center_Center = 3] = "Center_Center", t[t.Right_Left = 4] = "Right_Left", t[t.Right_Center = 5] = "Right_Center", 
        t[t.Right_Right = 6] = "Right_Right", t[t.Top_Top = 7] = "Top_Top", t[t.Top_Middle = 8] = "Top_Middle", 
        t[t.Top_Bottom = 9] = "Top_Bottom", t[t.Middle_Middle = 10] = "Middle_Middle", t[t.Bottom_Top = 11] = "Bottom_Top", 
        t[t.Bottom_Middle = 12] = "Bottom_Middle", t[t.Bottom_Bottom = 13] = "Bottom_Bottom", 
        t[t.Width = 14] = "Width", t[t.Height = 15] = "Height", t[t.LeftExt_Left = 16] = "LeftExt_Left", 
        t[t.LeftExt_Right = 17] = "LeftExt_Right", t[t.RightExt_Left = 18] = "RightExt_Left", 
        t[t.RightExt_Right = 19] = "RightExt_Right", t[t.TopExt_Top = 20] = "TopExt_Top", 
        t[t.TopExt_Bottom = 21] = "TopExt_Bottom", t[t.BottomExt_Top = 22] = "BottomExt_Top", 
        t[t.BottomExt_Bottom = 23] = "BottomExt_Bottom", t[t.Size = 24] = "Size";
    }(b = t.RelationType || (t.RelationType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", 
        t[t.Radial90 = 3] = "Radial90", t[t.Radial180 = 4] = "Radial180", t[t.Radial360 = 5] = "Radial360";
    }(S = t.FillMethod || (t.FillMethod = {})), function(t) {
        t[t.Top = 0] = "Top", t[t.Bottom = 1] = "Bottom", t[t.Left = 2] = "Left", t[t.Right = 3] = "Right", 
        t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.BottomLeft = 2] = "BottomLeft", 
        t[t.BottomRight = 3] = "BottomRight";
    }(x = t.FillOrigin || (t.FillOrigin = {})), function(t) {
        t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.BottomLeft = 2] = "BottomLeft", 
        t[t.BottomRight = 3] = "BottomRight";
    }(I = t.FillOrigin90 || (t.FillOrigin90 = {})), function(t) {
        t[t.Text = 0] = "Text", t[t.Icon = 1] = "Icon", t[t.Color = 2] = "Color", t[t.OutlineColor = 3] = "OutlineColor", 
        t[t.Playing = 4] = "Playing", t[t.Frame = 5] = "Frame", t[t.DeltaTime = 6] = "DeltaTime", 
        t[t.TimeScale = 7] = "TimeScale", t[t.FontSize = 8] = "FontSize", t[t.Selected = 9] = "Selected";
    }(T = t.ObjectPropID || (t.ObjectPropID = {}));
    var P = /* */ function() {
        function P() {
            (0, _classCallCheck2.default)(this, P);
            this._x = 0, this._y = 0, this._alpha = 1, this._rotation = 0, this._visible = !0, 
            this._touchable = !0, this._scaleX = 1, this._scaleY = 1, this._skewX = 0, this._skewY = 0, 
            this._pivotX = 0, this._pivotY = 0, this._pivotOffsetX = 0, this._pivotOffsetY = 0, 
            this._sortingOrder = 0, this._internalVisible = !0, this._yOffset = 0, this.minWidth = 0, 
            this.minHeight = 0, this.maxWidth = 0, this.maxHeight = 0, this.sourceWidth = 0, 
            this.sourceHeight = 0, this.initWidth = 0, this.initHeight = 0, this._width = 0, 
            this._height = 0, this._rawWidth = 0, this._rawHeight = 0, this._sizePercentInGroup = 0, 
            this._id = "" + k++, this._name = "", this.createDisplayObject(), this._relations = new t.Relations(this), 
            this._gears = new Array(10);
        }
        (0, _createClass2.default)(P, [ {
            key: "setXY",
            value: function setXY(e, i) {
                if (this._x != e || this._y != i) {
                    var s = e - this._x, h = i - this._y;
                    this._x = e, this._y = i, this.handleXYChanged(), this instanceof t.GGroup && this.moveChildren(s, h), 
                    this.updateGear(1), !this._parent || this._parent instanceof t.GList || (this._parent.setBoundsChangedFlag(), 
                    this._group && this._group.setBoundsChangedFlag(!0), this.displayObject.event(t.Events.XY_CHANGED)), 
                    P.draggingObject != this || L || this.localToGlobalRect(0, 0, this.width, this.height, z);
                }
            }
        }, {
            key: "center",
            value: function center(e) {
                var i;
                i = this._parent ? this.parent : this.root, this.setXY((i.width - this.width) / 2, (i.height - this.height) / 2), 
                e && (this.addRelation(i, t.RelationType.Center_Center), this.addRelation(i, t.RelationType.Middle_Middle));
            }
        }, {
            key: "setSize",
            value: function setSize(e, i, s) {
                if (this._rawWidth != e || this._rawHeight != i) {
                    this._rawWidth = e, this._rawHeight = i, e < this.minWidth && (e = this.minWidth), 
                    i < this.minHeight && (i = this.minHeight), this.maxWidth > 0 && e > this.maxWidth && (e = this.maxWidth), 
                    this.maxHeight > 0 && i > this.maxHeight && (i = this.maxHeight);
                    var h = e - this._width, r = i - this._height;
                    this._width = e, this._height = i, this.handleSizeChanged(), 0 == this._pivotX && 0 == this._pivotY || (this._pivotAsAnchor ? this.applyPivot() : (s || this.setXY(this.x - this._pivotX * h, this.y - this._pivotY * r), 
                    this.updatePivotOffset())), this instanceof t.GGroup && this.resizeChildren(h, r), 
                    this.updateGear(2), this._parent && (this._relations.onOwnerSizeChanged(h, r, this._pivotAsAnchor || !s), 
                    this._parent.setBoundsChangedFlag(), this._group && this._group.setBoundsChangedFlag()), 
                    this.displayObject.event(t.Events.SIZE_CHANGED);
                }
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {}
        }, {
            key: "makeFullScreen",
            value: function makeFullScreen() {
                this.setSize(t.GRoot.inst.width, t.GRoot.inst.height);
            }
        }, {
            key: "setScale",
            value: function setScale(t, e) {
                this._scaleX == t && this._scaleY == e || (this._scaleX = t, this._scaleY = e, this.handleScaleChanged(), 
                this.applyPivot(), this.updateGear(2));
            }
        }, {
            key: "setSkew",
            value: function setSkew(t, e) {
                this._skewX == t && this._skewY == e || (this._skewX = t, this._skewY = e, this._displayObject && (this._displayObject.skew(-t, e), 
                this.applyPivot()));
            }
        }, {
            key: "setPivot",
            value: function setPivot(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 ? arguments[2] : undefined;
                this._pivotX == t && this._pivotY == e && this._pivotAsAnchor == i || (this._pivotX = t, 
                this._pivotY = e, this._pivotAsAnchor = i, this.updatePivotOffset(), this.handleXYChanged());
            }
        }, {
            key: "internalSetPivot",
            value: function internalSetPivot(t, e, i) {
                this._pivotX = t, this._pivotY = e, this._pivotAsAnchor = i, this._pivotAsAnchor && this.handleXYChanged();
            }
        }, {
            key: "updatePivotOffset",
            value: function updatePivotOffset() {
                if (this._displayObject) if (!this._displayObject.transform || 0 == this._pivotX && 0 == this._pivotY) this._pivotOffsetX = 0, 
                this._pivotOffsetY = 0; else {
                    j.x = this._pivotX * this._width, j.y = this._pivotY * this._height;
                    var t = this._displayObject.transform.transformPoint(j);
                    this._pivotOffsetX = this._pivotX * this._width - t.x, this._pivotOffsetY = this._pivotY * this._height - t.y;
                }
            }
        }, {
            key: "applyPivot",
            value: function applyPivot() {
                0 == this._pivotX && 0 == this._pivotY || (this.updatePivotOffset(), this.handleXYChanged());
            }
        }, {
            key: "requestFocus",
            value: function requestFocus() {
                this.root.focus = this;
            }
        }, {
            key: "__rollOver",
            value: function __rollOver(t) {
                Laya.timer.once(100, this, this.__doShowTooltips);
            }
        }, {
            key: "__doShowTooltips",
            value: function __doShowTooltips() {
                this.root && this.root.showTooltips(this._tooltips);
            }
        }, {
            key: "__rollOut",
            value: function __rollOut(t) {
                Laya.timer.clear(this, this.__doShowTooltips), this.root.hideTooltips();
            }
        }, {
            key: "getGear",
            value: function getGear(e) {
                var i = this._gears[e];
                return i || (this._gears[e] = i = t.GearBase.create(this, e)), i;
            }
        }, {
            key: "updateGear",
            value: function updateGear(t) {
                if (!this._underConstruct && !this._gearLocked) {
                    var e = this._gears[t];
                    e && e.controller && e.updateState();
                }
            }
        }, {
            key: "checkGearController",
            value: function checkGearController(t, e) {
                return this._gears[t] && this._gears[t].controller == e;
            }
        }, {
            key: "updateGearFromRelations",
            value: function updateGearFromRelations(t, e, i) {
                this._gears[t] && this._gears[t].updateFromRelations(e, i);
            }
        }, {
            key: "addDisplayLock",
            value: function addDisplayLock() {
                var t = this._gears[0];
                if (t && t.controller) {
                    var e = t.addLock();
                    return this.checkGearDisplay(), e;
                }
                return 0;
            }
        }, {
            key: "releaseDisplayLock",
            value: function releaseDisplayLock(t) {
                var e = this._gears[0];
                e && e.controller && (e.releaseLock(t), this.checkGearDisplay());
            }
        }, {
            key: "checkGearDisplay",
            value: function checkGearDisplay() {
                if (!this._handlingController) {
                    var t = !this._gears[0] || this._gears[0].connected;
                    this._gears[8] && (t = this._gears[8].evaluate(t)), t != this._internalVisible && (this._internalVisible = t, 
                    this._parent && (this._parent.childStateChanged(this), this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag()));
                }
            }
        }, {
            key: "addRelation",
            value: function addRelation(t, e, i) {
                this._relations.add(t, e, i);
            }
        }, {
            key: "removeRelation",
            value: function removeRelation(t, e) {
                this._relations.remove(t, e);
            }
        }, {
            key: "removeFromParent",
            value: function removeFromParent() {
                this._parent && this._parent.removeChild(this);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.removeFromParent(), this._relations.dispose(), this._displayObject.destroy(), 
                this._displayObject = null;
                for (var t = 0; t < 10; t++) {
                    var e = this._gears[t];
                    e && e.dispose();
                }
            }
        }, {
            key: "onClick",
            value: function onClick(t, e, i) {
                this.on(Laya.Event.CLICK, t, e, i);
            }
        }, {
            key: "offClick",
            value: function offClick(t, e) {
                this.off(Laya.Event.CLICK, t, e);
            }
        }, {
            key: "hasClickListener",
            value: function hasClickListener() {
                return this._displayObject.hasListener(Laya.Event.CLICK);
            }
        }, {
            key: "on",
            value: function on(t, e, i, s) {
                this._displayObject.on(t, e, i, s);
            }
        }, {
            key: "off",
            value: function off(t, e, i) {
                this._displayObject.off(t, e, i);
            }
        }, {
            key: "startDrag",
            value: function startDrag(t) {
                null != this._displayObject.stage && this.dragBegin(t);
            }
        }, {
            key: "stopDrag",
            value: function stopDrag() {
                this.dragEnd();
            }
        }, {
            key: "localToGlobal",
            value: function localToGlobal(t, e, i) {
                return t = t || 0, e = e || 0, this._pivotAsAnchor && (t += this._pivotX * this._width, 
                e += this._pivotY * this._height), (i = i || new Laya.Point()).x = t, i.y = e, this._displayObject.localToGlobal(i, !1);
            }
        }, {
            key: "globalToLocal",
            value: function globalToLocal(t, e, i) {
                return t = t || 0, e = e || 0, (i = i || new Laya.Point()).x = t, i.y = e, i = this._displayObject.globalToLocal(i, !1), 
                this._pivotAsAnchor && (i.x -= this._pivotX * this._width, i.y -= this._pivotY * this._height), 
                i;
            }
        }, {
            key: "localToGlobalRect",
            value: function localToGlobalRect(t, e, i, s, h) {
                t = t || 0, e = e || 0, i = i || 0, s = s || 0, h = h || new Laya.Rectangle();
                var r = this.localToGlobal(t, e);
                return h.x = r.x, h.y = r.y, r = this.localToGlobal(t + i, e + s), h.width = r.x - h.x, 
                h.height = r.y - h.y, h;
            }
        }, {
            key: "globalToLocalRect",
            value: function globalToLocalRect(t, e, i, s, h) {
                t = t || 0, e = e || 0, i = i || 0, s = s || 0, h = h || new Laya.Rectangle();
                var r = this.globalToLocal(t, e);
                return h.x = r.x, h.y = r.y, r = this.globalToLocal(t + i, e + s), h.width = r.x - h.x, 
                h.height = r.y - h.y, h;
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(t) {
                this._handlingController = !0;
                for (var e = 0; e < 10; e++) {
                    var i = this._gears[e];
                    i && i.controller == t && i.apply();
                }
                this._handlingController = !1, this.checkGearDisplay();
            }
        }, {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = new Laya.Sprite(), this._displayObject.$owner = this;
            }
        }, {
            key: "handleXYChanged",
            value: function handleXYChanged() {
                var t = this._x, e = this._y + this._yOffset;
                this._pivotAsAnchor && (t -= this._pivotX * this._width, e -= this._pivotY * this._height), 
                this._pixelSnapping && (t = Math.round(t), e = Math.round(e)), this._displayObject.pos(t + this._pivotOffsetX, e + this._pivotOffsetY);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._displayObject.size(this._width, this._height);
            }
        }, {
            key: "handleScaleChanged",
            value: function handleScaleChanged() {
                this._displayObject.scale(this._scaleX, this._scaleY, !0);
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                t.ToolSet.setColorFilter(this._displayObject, this._grayed);
            }
        }, {
            key: "handleAlphaChanged",
            value: function handleAlphaChanged() {
                this._displayObject.alpha = this._alpha;
            }
        }, {
            key: "handleVisibleChanged",
            value: function handleVisibleChanged() {
                this._displayObject.visible = this.internalVisible2;
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Text:
                    return this.text;

                  case t.ObjectPropID.Icon:
                    return this.icon;

                  case t.ObjectPropID.Color:
                  case t.ObjectPropID.OutlineColor:
                    return null;

                  case t.ObjectPropID.Playing:
                    return !1;

                  case t.ObjectPropID.Frame:
                  case t.ObjectPropID.DeltaTime:
                    return 0;

                  case t.ObjectPropID.TimeScale:
                    return 1;

                  case t.ObjectPropID.FontSize:
                    return 0;

                  case t.ObjectPropID.Selected:
                    return !1;

                  default:
                    return;
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Text:
                    this.text = i;
                    break;

                  case t.ObjectPropID.Icon:
                    this.icon = i;
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {}
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(e, i) {
                var s, h;
                e.seek(i, 0), e.skip(5), this._id = e.readS(), this._name = e.readS(), s = e.getInt32(), 
                h = e.getInt32(), this.setXY(s, h), e.readBool() && (this.initWidth = e.getInt32(), 
                this.initHeight = e.getInt32(), this.setSize(this.initWidth, this.initHeight, !0)), 
                e.readBool() && (this.minWidth = e.getInt32(), this.maxWidth = e.getInt32(), this.minHeight = e.getInt32(), 
                this.maxHeight = e.getInt32()), e.readBool() && (s = e.getFloat32(), h = e.getFloat32(), 
                this.setScale(s, h)), e.readBool() && (s = e.getFloat32(), h = e.getFloat32(), this.setSkew(s, h)), 
                e.readBool() && (s = e.getFloat32(), h = e.getFloat32(), this.setPivot(s, h, e.readBool())), 
                1 != (s = e.getFloat32()) && (this.alpha = s), 0 != (s = e.getFloat32()) && (this.rotation = s), 
                e.readBool() || (this.visible = !1), e.readBool() || (this.touchable = !1), e.readBool() && (this.grayed = !0);
                var r = e.readByte();
                t.BlendMode[r] && (this.blendMode = t.BlendMode[r]), 1 == e.readByte() && t.ToolSet.setColorFilter(this._displayObject, [ e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32() ]);
                var a = e.readS();
                null != a && (this.data = a);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                t.seek(e, 1);
                var i = t.readS();
                null != i && (this.tooltips = i);
                var s = t.getInt16();
                s >= 0 && (this.group = this.parent.getChildAt(s)), t.seek(e, 2);
                for (var h = t.getInt16(), r = 0; r < h; r++) {
                    var a = t.getInt16();
                    a += t.pos, this.getGear(t.readByte()).setup(t), t.pos = a;
                }
            }
        }, {
            key: "initDrag",
            value: function initDrag() {
                this._draggable ? this.on(Laya.Event.MOUSE_DOWN, this, this.__begin) : this.off(Laya.Event.MOUSE_DOWN, this, this.__begin);
            }
        }, {
            key: "dragBegin",
            value: function dragBegin(e) {
                if (P.draggingObject) {
                    var _i = P.draggingObject;
                    _i.stopDrag(), P.draggingObject = null, t.Events.dispatch(t.Events.DRAG_END, _i._displayObject, {
                        touchId: e
                    });
                }
                B.x = Laya.stage.mouseX, B.y = Laya.stage.mouseY, this.localToGlobalRect(0, 0, this.width, this.height, z), 
                this._dragTesting = !0, P.draggingObject = this, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "dragEnd",
            value: function dragEnd() {
                P.draggingObject == this && (this.reset(), this._dragTesting = !1, P.draggingObject = null), 
                O = !1;
            }
        }, {
            key: "reset",
            value: function reset() {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__moving), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__begin",
            value: function __begin() {
                this._dragStartPos || (this._dragStartPos = new Laya.Point()), this._dragStartPos.x = Laya.stage.mouseX, 
                this._dragStartPos.y = Laya.stage.mouseY, this._dragTesting = !0, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__moving",
            value: function __moving(e) {
                if (P.draggingObject != this && this._draggable && this._dragTesting) {
                    var i = t.UIConfig.touchDragSensitivity;
                    if (this._dragStartPos && Math.abs(this._dragStartPos.x - Laya.stage.mouseX) < i && Math.abs(this._dragStartPos.y - Laya.stage.mouseY) < i) return;
                    this._dragTesting = !1, O = !0, t.Events.dispatch(t.Events.DRAG_START, this._displayObject, e), 
                    O && this.dragBegin();
                }
                if (P.draggingObject == this) {
                    var s = Laya.stage.mouseX - B.x + z.x, h = Laya.stage.mouseY - B.y + z.y;
                    if (this._dragBounds) {
                        var r = t.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, M);
                        s < r.x ? s = r.x : s + z.width > r.right && (s = r.right - z.width) < r.x && (s = r.x), 
                        h < r.y ? h = r.y : h + z.height > r.bottom && (h = r.bottom - z.height) < r.y && (h = r.y);
                    }
                    L = !0;
                    var a = this.parent.globalToLocal(s, h, j);
                    this.setXY(Math.round(a.x), Math.round(a.y)), L = !1, t.Events.dispatch(t.Events.DRAG_MOVE, this._displayObject, e);
                }
            }
        }, {
            key: "__end",
            value: function __end(e) {
                P.draggingObject == this ? (P.draggingObject = null, this.reset(), t.Events.dispatch(t.Events.DRAG_END, this._displayObject, e)) : this._dragTesting && (this._dragTesting = !1, 
                this.reset());
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "name",
            get: function get() {
                return this._name;
            },
            set: function set(t) {
                this._name = t;
            }
        }, {
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(t) {
                this.setXY(t, this._y);
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(t) {
                this.setXY(this._x, t);
            }
        }, {
            key: "xMin",
            get: function get() {
                return this._pivotAsAnchor ? this._x - this._width * this._pivotX : this._x;
            },
            set: function set(t) {
                this._pivotAsAnchor ? this.setXY(t + this._width * this._pivotX, this._y) : this.setXY(t, this._y);
            }
        }, {
            key: "yMin",
            get: function get() {
                return this._pivotAsAnchor ? this._y - this._height * this._pivotY : this._y;
            },
            set: function set(t) {
                this._pivotAsAnchor ? this.setXY(this._x, t + this._height * this._pivotY) : this.setXY(this._x, t);
            }
        }, {
            key: "pixelSnapping",
            get: function get() {
                return this._pixelSnapping;
            },
            set: function set(t) {
                this._pixelSnapping != t && (this._pixelSnapping = t, this.handleXYChanged());
            }
        }, {
            key: "width",
            get: function get() {
                return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), 
                this._width;
            },
            set: function set(t) {
                this.setSize(t, this._rawHeight);
            }
        }, {
            key: "height",
            get: function get() {
                return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), 
                this._height;
            },
            set: function set(t) {
                this.setSize(this._rawWidth, t);
            }
        }, {
            key: "actualWidth",
            get: function get() {
                return this.width * Math.abs(this._scaleX);
            }
        }, {
            key: "actualHeight",
            get: function get() {
                return this.height * Math.abs(this._scaleY);
            }
        }, {
            key: "scaleX",
            get: function get() {
                return this._scaleX;
            },
            set: function set(t) {
                this.setScale(t, this._scaleY);
            }
        }, {
            key: "scaleY",
            get: function get() {
                return this._scaleY;
            },
            set: function set(t) {
                this.setScale(this._scaleX, t);
            }
        }, {
            key: "skewX",
            get: function get() {
                return this._skewX;
            },
            set: function set(t) {
                this.setSkew(t, this._skewY);
            }
        }, {
            key: "skewY",
            get: function get() {
                return this._skewY;
            },
            set: function set(t) {
                this.setSkew(this._skewX, t);
            }
        }, {
            key: "pivotX",
            get: function get() {
                return this._pivotX;
            },
            set: function set(t) {
                this.setPivot(t, this._pivotY);
            }
        }, {
            key: "pivotY",
            get: function get() {
                return this._pivotY;
            },
            set: function set(t) {
                this.setPivot(this._pivotX, t);
            }
        }, {
            key: "pivotAsAnchor",
            get: function get() {
                return this._pivotAsAnchor;
            }
        }, {
            key: "touchable",
            get: function get() {
                return this._touchable;
            },
            set: function set(e) {
                if (this._touchable != e) {
                    if (this._touchable = e, this.updateGear(3), this instanceof t.GImage || this instanceof t.GMovieClip || this instanceof t.GTextField && !(this instanceof t.GTextInput) && !(this instanceof t.GRichTextField)) return;
                    this._displayObject && (this._displayObject.mouseEnabled = this._touchable);
                }
            }
        }, {
            key: "grayed",
            get: function get() {
                return this._grayed;
            },
            set: function set(t) {
                this._grayed != t && (this._grayed = t, this.handleGrayedChanged(), this.updateGear(3));
            }
        }, {
            key: "enabled",
            get: function get() {
                return !this._grayed && this._touchable;
            },
            set: function set(t) {
                this.grayed = !t, this.touchable = t;
            }
        }, {
            key: "rotation",
            get: function get() {
                return this._rotation;
            },
            set: function set(t) {
                this._rotation != t && (this._rotation = t, this._displayObject && (this._displayObject.rotation = this.normalizeRotation, 
                this.applyPivot()), this.updateGear(3));
            }
        }, {
            key: "normalizeRotation",
            get: function get() {
                var t = this._rotation % 360;
                return t > 180 ? t -= 360 : t < -180 && (t = 360 + t), t;
            }
        }, {
            key: "alpha",
            get: function get() {
                return this._alpha;
            },
            set: function set(t) {
                this._alpha != t && (this._alpha = t, this.handleAlphaChanged(), this.updateGear(3));
            }
        }, {
            key: "visible",
            get: function get() {
                return this._visible;
            },
            set: function set(t) {
                this._visible != t && (this._visible = t, this.handleVisibleChanged(), this._parent && this._parent.setBoundsChangedFlag(), 
                this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag());
            }
        }, {
            key: "internalVisible",
            get: function get() {
                return this._internalVisible && (!this._group || this._group.internalVisible) && !this._displayObject._cacheStyle.maskParent;
            }
        }, {
            key: "internalVisible2",
            get: function get() {
                return this._visible && (!this._group || this._group.internalVisible2);
            }
        }, {
            key: "internalVisible3",
            get: function get() {
                return this._internalVisible && this._visible;
            }
        }, {
            key: "sortingOrder",
            get: function get() {
                return this._sortingOrder;
            },
            set: function set(t) {
                if (t < 0 && (t = 0), this._sortingOrder != t) {
                    var e = this._sortingOrder;
                    this._sortingOrder = t, this._parent && this._parent.childSortingOrderChanged(this, e, this._sortingOrder);
                }
            }
        }, {
            key: "focused",
            get: function get() {
                return this.root.focus == this;
            }
        }, {
            key: "tooltips",
            get: function get() {
                return this._tooltips;
            },
            set: function set(t) {
                this._tooltips && (this.off(Laya.Event.ROLL_OVER, this, this.__rollOver), this.off(Laya.Event.ROLL_OUT, this, this.__rollOut)), 
                this._tooltips = t, this._tooltips && (this.on(Laya.Event.ROLL_OVER, this, this.__rollOver), 
                this.on(Laya.Event.ROLL_OUT, this, this.__rollOut));
            }
        }, {
            key: "blendMode",
            get: function get() {
                return this._displayObject.blendMode;
            },
            set: function set(t) {
                this._displayObject.blendMode = t;
            }
        }, {
            key: "filters",
            get: function get() {
                return this._displayObject.filters;
            },
            set: function set(t) {
                this._displayObject.filters = t;
            }
        }, {
            key: "inContainer",
            get: function get() {
                return null != this._displayObject && null != this._displayObject.parent;
            }
        }, {
            key: "onStage",
            get: function get() {
                return null != this._displayObject && null != this._displayObject.stage;
            }
        }, {
            key: "resourceURL",
            get: function get() {
                return this.packageItem ? "ui://" + this.packageItem.owner.id + this.packageItem.id : null;
            }
        }, {
            key: "group",
            set: function set(t) {
                this._group != t && (this._group && this._group.setBoundsChangedFlag(), this._group = t, 
                this._group && this._group.setBoundsChangedFlag());
            },
            get: function get() {
                return this._group;
            }
        }, {
            key: "relations",
            get: function get() {
                return this._relations;
            }
        }, {
            key: "displayObject",
            get: function get() {
                return this._displayObject;
            }
        }, {
            key: "parent",
            get: function get() {
                return this._parent;
            },
            set: function set(t) {
                this._parent = t;
            }
        }, {
            key: "root",
            get: function get() {
                if (this instanceof t.GRoot) return this;
                for (var e = this._parent; e; ) {
                    if (e instanceof t.GRoot) return e;
                    e = e.parent;
                }
                return t.GRoot.inst;
            }
        }, {
            key: "asCom",
            get: function get() {
                return this;
            }
        }, {
            key: "asButton",
            get: function get() {
                return this;
            }
        }, {
            key: "asLabel",
            get: function get() {
                return this;
            }
        }, {
            key: "asProgress",
            get: function get() {
                return this;
            }
        }, {
            key: "asTextField",
            get: function get() {
                return this;
            }
        }, {
            key: "asRichTextField",
            get: function get() {
                return this;
            }
        }, {
            key: "asTextInput",
            get: function get() {
                return this;
            }
        }, {
            key: "asLoader",
            get: function get() {
                return this;
            }
        }, {
            key: "asList",
            get: function get() {
                return this;
            }
        }, {
            key: "asTree",
            get: function get() {
                return this;
            }
        }, {
            key: "asGraph",
            get: function get() {
                return this;
            }
        }, {
            key: "asGroup",
            get: function get() {
                return this;
            }
        }, {
            key: "asSlider",
            get: function get() {
                return this;
            }
        }, {
            key: "asComboBox",
            get: function get() {
                return this;
            }
        }, {
            key: "asImage",
            get: function get() {
                return this;
            }
        }, {
            key: "asMovieClip",
            get: function get() {
                return this;
            }
        }, {
            key: "text",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "icon",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "treeNode",
            get: function get() {
                return this._treeNode;
            }
        }, {
            key: "isDisposed",
            get: function get() {
                return null == this._displayObject;
            }
        }, {
            key: "draggable",
            get: function get() {
                return this._draggable;
            },
            set: function set(t) {
                this._draggable != t && (this._draggable = t, this.initDrag());
            }
        }, {
            key: "dragBounds",
            get: function get() {
                return this._dragBounds;
            },
            set: function set(t) {
                this._dragBounds = t;
            }
        }, {
            key: "dragging",
            get: function get() {
                return P.draggingObject == this;
            }
        } ], [ {
            key: "cast",
            value: function cast(t) {
                return t.$owner;
            }
        } ]);
        return P;
    }();
    t.GObject = P, t.BlendMode = {
        2: Laya.BlendMode.LIGHTER,
        3: Laya.BlendMode.MULTIPLY,
        4: Laya.BlendMode.SCREEN
    };
    var L, O, k = 0, B = new Laya.Point(), z = new Laya.Rectangle(), j = new Laya.Point(), M = new Laya.Rectangle();
    t.GTextField = /* */ function(_t$GObject) {
        (0, _inherits2.default)(_class3, _t$GObject);
        var _super2 = _createSuper(_class3);
        function _class3() {
            (0, _classCallCheck2.default)(this, _class3);
            return _super2.call(this);
        }
        (0, _createClass2.default)(_class3, [ {
            key: "updateAutoSize",
            value: function updateAutoSize() {}
        }, {
            key: "parseTemplate",
            value: function parseTemplate(t) {
                for (var e, i, s, h, r = 0, a = ""; -1 != (e = t.indexOf("{", r)); ) {
                    if (e > 0 && 92 == t.charCodeAt(e - 1)) a += t.substring(r, e - 1), a += "{", r = e + 1; else {
                        if (a += t.substring(r, e), r = e, -1 == (e = t.indexOf("}", r))) break;
                        e != r + 1 ? (-1 != (i = (s = t.substring(r + 1, e)).indexOf("=")) ? a += null == (h = this._templateVars[s.substring(0, i)]) ? s.substring(i + 1) : h : null != (h = this._templateVars[s]) && (a += h), 
                        r = e + 1) : (a += t.substr(r, 2), r = e + 1);
                    }
                }
                return r < t.length && (a += t.substr(r)), a;
            }
        }, {
            key: "setVar",
            value: function setVar(t, e) {
                return this._templateVars || (this._templateVars = {}), this._templateVars[t] = e, 
                this;
            }
        }, {
            key: "flushVars",
            value: function flushVars() {
                this.text = this._text;
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.color;

                  case t.ObjectPropID.OutlineColor:
                    return this.strokeColor;

                  case t.ObjectPropID.FontSize:
                    return this.fontSize;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(_class3.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.color = i;
                    break;

                  case t.ObjectPropID.OutlineColor:
                    this.strokeColor = i;
                    break;

                  case t.ObjectPropID.FontSize:
                    this.fontSize = i;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(_class3.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                var i;
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class3.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this.font = t.readS(), this.fontSize = t.getInt16(), this.color = t.readColorS(), 
                i = t.readByte(), this.align = 0 == i ? "left" : 1 == i ? "center" : "right", i = t.readByte(), 
                this.valign = 0 == i ? "top" : 1 == i ? "middle" : "bottom", this.leading = t.getInt16(), 
                this.letterSpacing = t.getInt16(), this.ubbEnabled = t.readBool(), this.autoSize = t.readByte(), 
                this.underline = t.readBool(), this.italic = t.readBool(), this.bold = t.readBool(), 
                this.singleLine = t.readBool(), t.readBool() && (this.strokeColor = t.readColorS(), 
                this.stroke = t.getFloat32() + 1), t.readBool() && t.skip(12), t.readBool() && (this._templateVars = {});
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class3.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6);
                var i = t.readS();
                null != i && (this.text = i);
            }
        }, {
            key: "font",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "fontSize",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        }, {
            key: "color",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "align",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "valign",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "leading",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        }, {
            key: "letterSpacing",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        }, {
            key: "bold",
            get: function get() {
                return !1;
            },
            set: function set(t) {}
        }, {
            key: "italic",
            get: function get() {
                return !1;
            },
            set: function set(t) {}
        }, {
            key: "underline",
            get: function get() {
                return !1;
            },
            set: function set(t) {}
        }, {
            key: "singleLine",
            get: function get() {
                return !1;
            },
            set: function set(t) {}
        }, {
            key: "stroke",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        }, {
            key: "strokeColor",
            get: function get() {
                return null;
            },
            set: function set(t) {}
        }, {
            key: "ubbEnabled",
            set: function set(t) {
                this._ubbEnabled = t;
            },
            get: function get() {
                return this._ubbEnabled;
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(e) {
                this._autoSize != e && (this._autoSize = e, this._widthAutoSize = this._autoSize == t.AutoSizeType.Both, 
                this._heightAutoSize = this._autoSize == t.AutoSizeType.Both || this._autoSize == t.AutoSizeType.Height, 
                this.updateAutoSize());
            }
        }, {
            key: "textWidth",
            get: function get() {
                return 0;
            }
        }, {
            key: "templateVars",
            get: function get() {
                return this._templateVars;
            },
            set: function set(t) {
                (this._templateVars || t) && (this._templateVars = t, this.flushVars());
            }
        } ]);
        return _class3;
    }(t.GObject);
    t.GBasicTextField = /* */ function(_t$GTextField) {
        (0, _inherits2.default)(_class4, _t$GTextField);
        var _super3 = _createSuper(_class4);
        function _class4() {
            var _this2;
            (0, _classCallCheck2.default)(this, _class4);
            _this2 = _super3.call(this), _this2._letterSpacing = 0, _this2._textWidth = 0, _this2._textHeight = 0, 
            _this2._text = "", _this2._color = "#000000", _this2._textField.align = "left", 
            _this2._textField.font = t.UIConfig.defaultFont, _this2._autoSize = t.AutoSizeType.Both, 
            _this2._widthAutoSize = _this2._heightAutoSize = !0, _this2._textField._sizeDirty = !1;
            return _this2;
        }
        (0, _createClass2.default)(_class4, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._textField = new A(this), this._displayObject.$owner = this, 
                this._displayObject.mouseEnabled = !1;
            }
        }, {
            key: "updateAutoSize",
            value: function updateAutoSize() {
                this._textField.wordWrap = !this._widthAutoSize && !this._singleLine, this._underConstruct || (this._heightAutoSize ? this._widthAutoSize || (this._textField.width = this.width) : this._textField.size(this.width, this.height));
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {
                !this._underConstruct && this._textField._isChanged && this._textField.typeset();
            }
        }, {
            key: "typeset",
            value: function typeset() {
                this._bitmapFont ? this.renderWithBitmapFont() : (this._widthAutoSize || this._heightAutoSize) && this.updateSize();
            }
        }, {
            key: "updateSize",
            value: function updateSize() {
                this._textWidth = Math.ceil(this._textField.textWidth), this._textHeight = Math.ceil(this._textField.textHeight);
                var t, e = 0;
                this._widthAutoSize ? (t = this._textWidth, this._textField.width != t && (this._textField.width = t, 
                "left" != this._textField.align && this._textField.baseTypeset())) : t = this.width, 
                this._heightAutoSize ? (e = this._textHeight, this._widthAutoSize || this._textField.height != this._textHeight && (this._textField.height = this._textHeight)) : (e = this.height, 
                this._textHeight > e && (this._textHeight = e), this._textField.height != this._textHeight && (this._textField.height = this._textHeight)), 
                this._updatingSize = !0, this.setSize(t, e), this._updatingSize = !1;
            }
        }, {
            key: "renderWithBitmapFont",
            value: function renderWithBitmapFont() {
                var e = this._displayObject.graphics;
                e.clear(), this._lines ? function(t) {
                    for (var e = t.length, i = 0; i < e; i++) {
                        var s = t[i];
                        E.push(s);
                    }
                    t.length = 0;
                }(this._lines) : this._lines = new Array();
                var i, s = this.leading - 1, h = this.width - 2 * F, r = 0, a = 0, n = 0, o = 0, l = 0, _ = 0, d = 0, c = 0, u = 0, g = "", p = R, y = !this._widthAutoSize && !this._singleLine, f = this.fontSize, m = this._bitmapFont.resizable ? f / this._bitmapFont.size : 1;
                this._textWidth = 0, this._textHeight = 0;
                var v = this._text;
                this._templateVars && (v = this.parseTemplate(v));
                for (var w = v.length, C = 0; C < w; ++C) {
                    var b = v.charAt(C), S = b.charCodeAt(0);
                    if (10 != S) {
                        if (S >= 65 && S <= 90 || S >= 97 && S <= 122 ? (0 == _ && (d = r), _++) : (_ > 0 && (c = r), 
                        _ = 0), 32 == S) o = Math.ceil(f / 2), l = f; else {
                            var x = this._bitmapFont.glyphs[b];
                            x ? (o = Math.ceil(x.advance * m), l = Math.ceil(x.lineHeight * m)) : (o = 0, l = 0);
                        }
                        if (l > n && (n = l), l > a && (a = l), 0 != r && (r += this._letterSpacing), r += o, 
                        !y || r <= h) g += b; else {
                            if ((i = borrow()).height = a, i.textHeight = n, 0 == g.length) i.text = b; else if (_ > 0 && c > 0) {
                                var I = (g += b).length - _;
                                i.text = t.ToolSet.trimRight(g.substr(0, I)), i.width = c, g = g.substr(I), r -= d;
                            } else i.text = g, i.width = r - (o + this._letterSpacing), g = b, r = o, a = l, 
                            n = l;
                            i.y = p, p += i.height + s, i.width > this._textWidth && (this._textWidth = i.width), 
                            _ = 0, d = 0, c = 0, this._lines.push(i);
                        }
                    } else g += b, (i = borrow()).width = r, 0 == n && (0 == u && (u = f), 0 == a && (a = u), 
                    n = a), i.height = a, u = a, i.textHeight = n, i.text = g, i.y = p, p += i.height + s, 
                    i.width > this._textWidth && (this._textWidth = i.width), this._lines.push(i), g = "", 
                    r = 0, a = 0, n = 0, _ = 0, d = 0, c = 0;
                }
                g.length > 0 && ((i = borrow()).width = r, 0 == a && (a = u), 0 == n && (n = a), 
                i.height = a, i.textHeight = n, i.text = g, i.y = p, i.width > this._textWidth && (this._textWidth = i.width), 
                this._lines.push(i)), this._textWidth > 0 && (this._textWidth += 2 * F), 0 == this._lines.length ? this._textHeight = 0 : (i = this._lines[this._lines.length - 1], 
                this._textHeight = i.y + i.height + R);
                var T, P = 0;
                if (T = this._widthAutoSize ? 0 == this._textWidth ? 0 : this._textWidth : this.width, 
                P = this._heightAutoSize ? 0 == this._textHeight ? 0 : this._textHeight : this.height, 
                this._updatingSize = !0, this.setSize(T, P), this._updatingSize = !1, this.doAlign(), 
                0 != T && 0 != P) {
                    var L = F, O = 0, k = 0;
                    h = this.width - 2 * F;
                    for (var B = this._lines.length, z = this._bitmapFont.tint ? this._color : null, j = 0; j < B; j++) {
                        i = this._lines[j], L = F, O = "center" == this.align ? (h - i.width) / 2 : "right" == this.align ? h - i.width : 0, 
                        w = i.text.length;
                        for (var M = 0; M < w; M++) {
                            10 != (S = (b = i.text.charAt(M)).charCodeAt(0)) && (32 != S ? (x = this._bitmapFont.glyphs[b]) ? (k = (i.height + i.textHeight) / 2 - Math.ceil(x.lineHeight * m), 
                            x.texture && e.drawTexture(x.texture, L + O + Math.ceil(x.x * m), i.y + k + Math.ceil(x.y * m), x.width * m, x.height * m, null, 1, z), 
                            L += this._letterSpacing + Math.ceil(x.advance * m)) : L += this._letterSpacing : L += this._letterSpacing + Math.ceil(f / 2));
                        }
                    }
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._updatingSize || (this._underConstruct ? this._textField.size(this._width, this._height) : this._bitmapFont ? this._widthAutoSize ? this.doAlign() : this._textField.setChanged() : this._widthAutoSize || (this._heightAutoSize ? this._textField.width = this._width : this._textField.size(this._width, this._height)));
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class4.prototype), "handleGrayedChanged", this).call(this), 
                this.grayed ? this._textField.color = "#AAAAAA" : this._textField.color = this._color;
            }
        }, {
            key: "doAlign",
            value: function doAlign() {
                if ("top" == this.valign || 0 == this._textHeight) this._yOffset = R; else {
                    var t = this.height - this._textHeight;
                    t < 0 && (t = 0), "middle" == this.valign ? this._yOffset = Math.floor(t / 2) : this._yOffset = Math.floor(t);
                }
                this.handleXYChanged();
            }
        }, {
            key: "flushVars",
            value: function flushVars() {
                this.text = this._text;
            }
        }, {
            key: "nativeText",
            get: function get() {
                return this._textField;
            }
        }, {
            key: "text",
            set: function set(e) {
                if (this._text = e, null == this._text && (this._text = ""), null == this._bitmapFont) {
                    this._widthAutoSize && (this._textField.width = 1e4);
                    var i = this._text;
                    this._templateVars && (i = this.parseTemplate(i)), this._ubbEnabled ? this._textField.text = t.UBBParser.inst.parse(i, !0) : this._textField.text = i;
                } else this._textField.text = "", this._textField.setChanged();
                !this.parent || !this.parent._underConstruct || Laya.ILaya.Browser.onIOS && "qq_" == zs.platform.config.platformMark || this._textField.typeset();
            },
            get: function get() {
                return this._text;
            }
        }, {
            key: "font",
            get: function get() {
                return this._textField.font;
            },
            set: function set(e) {
                this._font = e, t.ToolSet.startsWith(this._font, "ui://") ? this._bitmapFont = t.UIPackage.getItemAssetByURL(this._font) : delete this._bitmapFont, 
                this._bitmapFont ? this._textField.setChanged() : this._font ? this._textField.font = this._font : this._textField.font = t.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._textField.fontSize;
            },
            set: function set(t) {
                this._textField.fontSize = t;
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this._color != t && (this._color = t, this.updateGear(4), this.grayed ? this._textField.color = "#AAAAAA" : this._textField.color = this._color);
            }
        }, {
            key: "align",
            get: function get() {
                return this._textField.align;
            },
            set: function set(t) {
                this._textField.align = t;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._textField.valign;
            },
            set: function set(t) {
                this._textField.valign = t;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._textField.leading;
            },
            set: function set(t) {
                this._textField.leading = t;
            }
        }, {
            key: "letterSpacing",
            get: function get() {
                return this._letterSpacing;
            },
            set: function set(t) {
                this._letterSpacing = t;
            }
        }, {
            key: "bold",
            get: function get() {
                return this._textField.bold;
            },
            set: function set(t) {
                this._textField.bold = t;
            }
        }, {
            key: "italic",
            get: function get() {
                return this._textField.italic;
            },
            set: function set(t) {
                this._textField.italic = t;
            }
        }, {
            key: "underline",
            get: function get() {
                return this._textField.underline;
            },
            set: function set(t) {
                this._textField.underline = t;
            }
        }, {
            key: "singleLine",
            get: function get() {
                return this._singleLine;
            },
            set: function set(t) {
                this._singleLine = t, this._textField.wordWrap = !this._widthAutoSize && !this._singleLine;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._textField.stroke;
            },
            set: function set(t) {
                this._textField.stroke = t;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._textField.strokeColor;
            },
            set: function set(t) {
                this._textField.strokeColor != t && (this._textField.strokeColor = t, this.updateGear(4));
            }
        }, {
            key: "textWidth",
            get: function get() {
                return this._textField._isChanged && this._textField.typeset(), this._textWidth;
            }
        } ]);
        return _class4;
    }(t.GTextField);
    var A = /* */ function(_Laya$Text) {
        (0, _inherits2.default)(A, _Laya$Text);
        var _super4 = _createSuper(A);
        function A(t) {
            var _this3;
            (0, _classCallCheck2.default)(this, A);
            _this3 = _super4.call(this), _this3._owner = t;
            return _this3;
        }
        (0, _createClass2.default)(A, [ {
            key: "baseTypeset",
            value: function baseTypeset() {
                this._lock = !0, this.typeset(), this._lock = !1;
            }
        }, {
            key: "typeset",
            value: function typeset() {
                this._sizeDirty = !0, (0, _get2.default)((0, _getPrototypeOf2.default)(A.prototype), "typeset", this).call(this), 
                this._lock || this._owner.typeset(), this._isChanged && (Laya.timer.clear(this, this.typeset), 
                this._isChanged = !1), this._sizeDirty = !1;
            }
        }, {
            key: "setChanged",
            value: function setChanged() {
                this.isChanged = !0;
            }
        }, {
            key: "isChanged",
            set: function set(e) {
                e && !this._sizeDirty && this._owner.autoSize != t.AutoSizeType.None && this._owner.parent && (this._sizeDirty = !0, 
                this.event(t.Events.SIZE_DELAY_CHANGE)), (0, _set2.default)((0, _getPrototypeOf2.default)(A.prototype), "isChanged", e, this, true);
            }
        } ]);
        return A;
    }(Laya.Text);
    var E = [];
    function borrow() {
        if (E.length) {
            var t = E.pop();
            return t.width = 0, t.height = 0, t.textHeight = 0, t.text = null, t.y = 0, t;
        }
        return {
            width: 0,
            height: 0,
            textHeight: 0,
            text: null,
            y: 0
        };
    }
    var F = 2, R = 2;
    t.Margin = /* */ function() {
        function _class5() {
            (0, _classCallCheck2.default)(this, _class5);
            this.left = 0, this.right = 0, this.top = 0, this.bottom = 0;
        }
        (0, _createClass2.default)(_class5, [ {
            key: "copy",
            value: function copy(t) {
                this.top = t.top, this.bottom = t.bottom, this.left = t.left, this.right = t.right;
            }
        } ]);
        return _class5;
    }();
    var G = /* */ function(_t$GObject2) {
        (0, _inherits2.default)(G, _t$GObject2);
        var _super5 = _createSuper(G);
        function G() {
            var _this4;
            (0, _classCallCheck2.default)(this, G);
            _this4 = _super5.call(this), _this4._sortingChildCount = 0, _this4._children = [], 
            _this4._controllers = [], _this4._transitions = [], _this4._margin = new t.Margin(), 
            _this4._alignOffset = new Laya.Point(), _this4._opaque = !1, _this4._childrenRenderOrder = 0, 
            _this4._apexIndex = 0;
            return _this4;
        }
        (0, _createClass2.default)(G, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(G.prototype), "createDisplayObject", this).call(this), 
                this._displayObject.mouseEnabled = !0, this._displayObject.mouseThrough = !0, this._container = this._displayObject;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                var t, e;
                for (e = this._transitions.length, t = 0; t < e; ++t) {
                    this._transitions[t].dispose();
                }
                for (e = this._controllers.length, t = 0; t < e; ++t) {
                    this._controllers[t].dispose();
                }
                for (this.scrollPane && this.scrollPane.dispose(), t = (e = this._children.length) - 1; t >= 0; --t) {
                    var i = this._children[t];
                    i.parent = null, i.dispose();
                }
                this._boundsChanged = !1, (0, _get2.default)((0, _getPrototypeOf2.default)(G.prototype), "dispose", this).call(this);
            }
        }, {
            key: "addChild",
            value: function addChild(t) {
                return this.addChildAt(t, this._children.length), t;
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(t, e) {
                if (!t) throw "child is null";
                if (e >= 0 && e <= this._children.length) {
                    if (t.parent == this) this.setChildIndex(t, e); else {
                        t.removeFromParent(), t.parent = this;
                        var i = this._children.length;
                        0 != t.sortingOrder ? (this._sortingChildCount++, e = this.getInsertPosForSortingChild(t)) : this._sortingChildCount > 0 && e > i - this._sortingChildCount && (e = i - this._sortingChildCount), 
                        e == i ? this._children.push(t) : this._children.splice(e, 0, t), this.childStateChanged(t), 
                        this.setBoundsChangedFlag();
                    }
                    return t;
                }
                throw "Invalid child index";
            }
        }, {
            key: "getInsertPosForSortingChild",
            value: function getInsertPosForSortingChild(t) {
                var e = this._children.length, i = 0;
                for (i = 0; i < e; i++) {
                    var s = this._children[i];
                    if (s != t && t.sortingOrder < s.sortingOrder) break;
                }
                return i;
            }
        }, {
            key: "removeChild",
            value: function removeChild(t, e) {
                var i = this._children.indexOf(t);
                return -1 != i && this.removeChildAt(i, e), t;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(e, i) {
                if (e >= 0 && e < this._children.length) {
                    var s = this._children[e];
                    return s.parent = null, 0 != s.sortingOrder && this._sortingChildCount--, this._children.splice(e, 1), 
                    s.group = null, s.inContainer && (this._container.removeChild(s.displayObject), 
                    this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && Laya.timer.callLater(this, this.buildNativeDisplayList)), 
                    i && s.dispose(), this.setBoundsChangedFlag(), s;
                }
                throw "Invalid child index";
            }
        }, {
            key: "removeChildren",
            value: function removeChildren(t, e, i) {
                null == t && (t = 0), null == e && (e = -1), (e < 0 || e >= this._children.length) && (e = this._children.length - 1);
                for (var s = t; s <= e; ++s) {
                    this.removeChildAt(t, i);
                }
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(t) {
                if (t >= 0 && t < this._children.length) return this._children[t];
                throw "Invalid child index";
            }
        }, {
            key: "getChild",
            value: function getChild(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) {
                    if (this._children[i].name == t) return this._children[i];
                }
                return null;
            }
        }, {
            key: "getChildByPath",
            value: function getChildByPath(t) {
                for (var e, i = t.split("."), s = i.length, h = this, r = 0; r < s && (e = h.getChild(i[r])); ++r) {
                    if (r != s - 1) {
                        if (!(e instanceof G)) {
                            e = null;
                            break;
                        }
                        h = e;
                    }
                }
                return e;
            }
        }, {
            key: "getVisibleChild",
            value: function getVisibleChild(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) {
                    var s = this._children[i];
                    if (s.internalVisible && s.internalVisible2 && s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "getChildInGroup",
            value: function getChildInGroup(t, e) {
                for (var i = this._children.length, s = 0; s < i; ++s) {
                    var h = this._children[s];
                    if (h.group == e && h.name == t) return h;
                }
                return null;
            }
        }, {
            key: "getChildById",
            value: function getChildById(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) {
                    if (this._children[i]._id == t) return this._children[i];
                }
                return null;
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(t, e) {
                var i = this._children.indexOf(t);
                if (-1 == i) throw "Not a child of this container";
                if (0 == t.sortingOrder) {
                    var s = this._children.length;
                    this._sortingChildCount > 0 && e > s - this._sortingChildCount - 1 && (e = s - this._sortingChildCount - 1), 
                    this._setChildIndex(t, i, e);
                }
            }
        }, {
            key: "setChildIndexBefore",
            value: function setChildIndexBefore(t, e) {
                var i = this._children.indexOf(t);
                if (-1 == i) throw "Not a child of this container";
                if (0 != t.sortingOrder) return i;
                var s = this._children.length;
                return this._sortingChildCount > 0 && e > s - this._sortingChildCount - 1 && (e = s - this._sortingChildCount - 1), 
                i < e ? this._setChildIndex(t, i, e - 1) : this._setChildIndex(t, i, e);
            }
        }, {
            key: "_setChildIndex",
            value: function _setChildIndex(e, i, s) {
                var h = this._children.length;
                if (s > h && (s = h), i == s) return i;
                if (this._children.splice(i, 1), this._children.splice(s, 0, e), e.inContainer) {
                    var r, a = 0;
                    if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                        for (r = 0; r < s; r++) {
                            this._children[r].inContainer && a++;
                        }
                        a == this._container.numChildren && a--, this._container.setChildIndex(e.displayObject, a);
                    } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                        for (r = h - 1; r > s; r--) {
                            this._children[r].inContainer && a++;
                        }
                        a == this._container.numChildren && a--, this._container.setChildIndex(e.displayObject, a);
                    } else Laya.timer.callLater(this, this.buildNativeDisplayList);
                    this.setBoundsChangedFlag();
                }
                return s;
            }
        }, {
            key: "swapChildren",
            value: function swapChildren(t, e) {
                var i = this._children.indexOf(t), s = this._children.indexOf(e);
                if (-1 == i || -1 == s) throw "Not a child of this container";
                this.swapChildrenAt(i, s);
            }
        }, {
            key: "swapChildrenAt",
            value: function swapChildrenAt(t, e) {
                var i = this._children[t], s = this._children[e];
                this.setChildIndex(i, e), this.setChildIndex(s, t);
            }
        }, {
            key: "isAncestorOf",
            value: function isAncestorOf(t) {
                if (!t) return !1;
                for (var e = t.parent; e; ) {
                    if (e == this) return !0;
                    e = e.parent;
                }
                return !1;
            }
        }, {
            key: "addController",
            value: function addController(t) {
                this._controllers.push(t), t.parent = this, this.applyController(t);
            }
        }, {
            key: "getControllerAt",
            value: function getControllerAt(t) {
                return this._controllers[t];
            }
        }, {
            key: "getController",
            value: function getController(t) {
                for (var e = this._controllers.length, i = 0; i < e; ++i) {
                    var s = this._controllers[i];
                    if (s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "removeController",
            value: function removeController(t) {
                var e = this._controllers.indexOf(t);
                if (-1 == e) throw new Error("controller not exists");
                t.parent = null, this._controllers.splice(e, 1);
                for (var i = this._children.length, s = 0; s < i; s++) {
                    this._children[s].handleControllerChanged(t);
                }
            }
        }, {
            key: "childStateChanged",
            value: function childStateChanged(e) {
                if (!this._buildingDisplayList) {
                    var i = this._children.length;
                    if (e instanceof t.GGroup) for (var s = 0; s < i; s++) {
                        var h = this._children[s];
                        h.group == e && this.childStateChanged(h);
                    } else if (e.displayObject) if (e.internalVisible && e.displayObject != this._displayObject.mask) {
                        if (!e.displayObject.parent) {
                            var r = 0;
                            if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                                for (s = 0; s < i && (h = this._children[s]) != e; s++) {
                                    h.displayObject && h.displayObject.parent && r++;
                                }
                                this._container.addChildAt(e.displayObject, r);
                            } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                                for (s = i - 1; s >= 0 && (h = this._children[s]) != e; s--) {
                                    h.displayObject && h.displayObject.parent && r++;
                                }
                                this._container.addChildAt(e.displayObject, r);
                            } else this._container.addChild(e.displayObject), Laya.timer.callLater(this, this.buildNativeDisplayList);
                        }
                    } else e.displayObject.parent && (this._container.removeChild(e.displayObject), 
                    this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && Laya.timer.callLater(this, this.buildNativeDisplayList));
                }
            }
        }, {
            key: "buildNativeDisplayList",
            value: function buildNativeDisplayList() {
                if (this._displayObject) {
                    var e, i, s = this._children.length;
                    if (0 != s) switch (this._childrenRenderOrder) {
                      case t.ChildrenRenderOrder.Ascent:
                        for (e = 0; e < s; e++) {
                            (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        }
                        break;

                      case t.ChildrenRenderOrder.Descent:
                        for (e = s - 1; e >= 0; e--) {
                            (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        }
                        break;

                      case t.ChildrenRenderOrder.Arch:
                        var h = t.ToolSet.clamp(this._apexIndex, 0, s);
                        for (e = 0; e < h; e++) {
                            (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        }
                        for (e = s - 1; e >= h; e--) {
                            (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        }
                    }
                }
            }
        }, {
            key: "applyController",
            value: function applyController(t) {
                this._applyingController = t;
                for (var e = this._children.length, i = 0; i < e; i++) {
                    this._children[i].handleControllerChanged(t);
                }
                this._applyingController = null, t.runActions();
            }
        }, {
            key: "applyAllControllers",
            value: function applyAllControllers() {
                for (var t = this._controllers.length, e = 0; e < t; ++e) {
                    this.applyController(this._controllers[e]);
                }
            }
        }, {
            key: "adjustRadioGroupDepth",
            value: function adjustRadioGroupDepth(e, i) {
                var s, h, r = this._children.length, a = -1, n = -1;
                for (s = 0; s < r; s++) {
                    (h = this._children[s]) == e ? a = s : h instanceof t.GButton && h.relatedController == i && s > n && (n = s);
                }
                a < n && (this._applyingController && this._children[n].handleControllerChanged(this._applyingController), 
                this.swapChildrenAt(a, n));
            }
        }, {
            key: "getTransitionAt",
            value: function getTransitionAt(t) {
                return this._transitions[t];
            }
        }, {
            key: "getTransition",
            value: function getTransition(t) {
                for (var e = this._transitions.length, i = 0; i < e; ++i) {
                    var s = this._transitions[i];
                    if (s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "isChildInView",
            value: function isChildInView(t) {
                return this._displayObject.scrollRect ? t.x + t.width >= 0 && t.x <= this.width && t.y + t.height >= 0 && t.y <= this.height : !this._scrollPane || this._scrollPane.isChildInView(t);
            }
        }, {
            key: "getFirstChildInView",
            value: function getFirstChildInView() {
                for (var t = this._children.length, e = 0; e < t; ++e) {
                    var i = this._children[e];
                    if (this.isChildInView(i)) return e;
                }
                return -1;
            }
        }, {
            key: "setMask",
            value: function setMask(e, i) {
                if (this._mask && this._mask != e && "destination-out" == this._mask.blendMode && (this._mask.blendMode = null), 
                this._mask = e, !this._mask) return this._displayObject.mask = null, void (this._displayObject.hitArea instanceof t.ChildHitArea && (this._displayObject.hitArea = null));
                this._mask.hitArea && (this._displayObject.hitArea = new t.ChildHitArea(this._mask, i), 
                this._displayObject.mouseThrough = !1, this._displayObject.hitTestPrior = !0), i ? (this._displayObject.mask = null, 
                this._displayObject.cacheAs = "bitmap", this._mask.blendMode = "destination-out") : this._displayObject.mask = this._mask;
            }
        }, {
            key: "updateHitArea",
            value: function updateHitArea() {
                if (this._displayObject.hitArea instanceof t.PixelHitTest) {
                    var e = this._displayObject.hitArea;
                    0 != this.sourceWidth && (e.scaleX = this._width / this.sourceWidth), 0 != this.sourceHeight && (e.scaleY = this._height / this.sourceHeight);
                } else this._displayObject.hitArea instanceof Laya.Rectangle && this._displayObject.hitArea.setTo(0, 0, this._width, this._height);
            }
        }, {
            key: "updateMask",
            value: function updateMask() {
                var t = this._displayObject.scrollRect;
                t || (t = new Laya.Rectangle()), t.x = this._margin.left, t.y = this._margin.top, 
                t.width = this._width - this._margin.right, t.height = this._height - this._margin.bottom, 
                this._displayObject.scrollRect = t;
            }
        }, {
            key: "setupScroll",
            value: function setupScroll(e) {
                this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this._scrollPane = new t.ScrollPane(this), 
                this._scrollPane.setup(e);
            }
        }, {
            key: "setupOverflow",
            value: function setupOverflow(e) {
                e == t.OverflowType.Hidden ? (this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this.updateMask(), this._container.pos(this._margin.left, this._margin.top)) : 0 == this._margin.left && 0 == this._margin.top || (this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this._container.pos(this._margin.left, this._margin.top));
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(G.prototype), "handleSizeChanged", this).call(this), 
                this._scrollPane ? this._scrollPane.onOwnerSizeChanged() : this._displayObject.scrollRect && this.updateMask(), 
                this._displayObject.hitArea && this.updateHitArea();
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                var t = this.getController("grayed");
                if (t) t.selectedIndex = this.grayed ? 1 : 0; else for (var e = this.grayed, i = this._children.length, s = 0; s < i; ++s) {
                    this._children[s].grayed = e;
                }
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(G.prototype), "handleControllerChanged", this).call(this, t), 
                this._scrollPane && this._scrollPane.handleControllerChanged(t);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function setBoundsChangedFlag() {
                (this._scrollPane || this._trackBounds) && (this._boundsChanged || (this._boundsChanged = !0, 
                Laya.timer.callLater(this, this.__render)));
            }
        }, {
            key: "__render",
            value: function __render() {
                if (this._boundsChanged) {
                    var t = 0, e = this._children.length;
                    for (t = 0; t < e; t++) {
                        this._children[t].ensureSizeCorrect();
                    }
                    this.updateBounds();
                }
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function ensureBoundsCorrect() {
                var t = 0, e = this._children.length;
                for (t = 0; t < e; t++) {
                    this._children[t].ensureSizeCorrect();
                }
                this._boundsChanged && this.updateBounds();
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                var t = 0, e = 0, i = 0, s = 0, h = this._children.length;
                if (h > 0) {
                    t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
                    var r = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY, n = 0, o = 0;
                    for (o = 0; o < h; o++) {
                        var l = this._children[o];
                        (n = l.x) < t && (t = n), (n = l.y) < e && (e = n), (n = l.x + l.actualWidth) > r && (r = n), 
                        (n = l.y + l.actualHeight) > a && (a = n);
                    }
                    i = r - t, s = a - e;
                }
                this.setBounds(t, e, i, s);
            }
        }, {
            key: "setBounds",
            value: function setBounds(t, e, i, s) {
                this._boundsChanged = !1, this._scrollPane && this._scrollPane.setContentSize(Math.round(t + i), Math.round(e + s));
            }
        }, {
            key: "getSnappingPosition",
            value: function getSnappingPosition(t, e, i) {
                return this.getSnappingPositionWithDir(t, e, 0, 0, i);
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function getSnappingPositionWithDir(t, e, i, s, h) {
                h || (h = new Laya.Point());
                var r = this._children.length;
                if (0 == r) return h.x = 0, h.y = 0, h;
                this.ensureBoundsCorrect();
                var a = null, n = null, o = 0;
                if (0 != e) {
                    for (;o < r; o++) {
                        if (e < (a = this._children[o]).y) {
                            if (0 == o) {
                                e = 0;
                                break;
                            }
                            e = e < (n = this._children[o - 1]).y + n.actualHeight / 2 ? n.y : a.y;
                            break;
                        }
                    }
                    o == r && (e = a.y);
                }
                if (0 != t) {
                    for (o > 0 && o--; o < r; o++) {
                        if (t < (a = this._children[o]).x) {
                            if (0 == o) {
                                t = 0;
                                break;
                            }
                            t = t < (n = this._children[o - 1]).x + n.actualWidth / 2 ? n.x : a.x;
                            break;
                        }
                    }
                    o == r && (t = a.x);
                }
                return h.x = t, h.y = e, h;
            }
        }, {
            key: "childSortingOrderChanged",
            value: function childSortingOrderChanged(t, e, i) {
                if (0 == i) this._sortingChildCount--, this.setChildIndex(t, this._children.length); else {
                    0 == e && this._sortingChildCount++;
                    var s = this._children.indexOf(t), h = this.getInsertPosForSortingChild(t);
                    s < h ? this._setChildIndex(t, s, h - 1) : this._setChildIndex(t, s, h);
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                this.constructFromResource2(null, 0);
            }
        }, {
            key: "constructFromResource2",
            value: function constructFromResource2(e, i) {
                var s, h, r, a, n, o, l, _, d = this.packageItem.getBranch();
                d.decoded || (d.decoded = !0, t.TranslationHelper.translateComponent(d));
                var c = d.rawData;
                c.seek(0, 0), this._underConstruct = !0, this.sourceWidth = c.getInt32(), this.sourceHeight = c.getInt32(), 
                this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), 
                c.readBool() && (this.minWidth = c.getInt32(), this.maxWidth = c.getInt32(), this.minHeight = c.getInt32(), 
                this.maxHeight = c.getInt32()), c.readBool() && (n = c.getFloat32(), o = c.getFloat32(), 
                this.internalSetPivot(n, o, c.readBool())), c.readBool() && (this._margin.top = c.getInt32(), 
                this._margin.bottom = c.getInt32(), this._margin.left = c.getInt32(), this._margin.right = c.getInt32());
                var u = c.readByte();
                if (u == t.OverflowType.Scroll) {
                    var g = c.pos;
                    c.seek(0, 7), this.setupScroll(c), c.pos = g;
                } else this.setupOverflow(u);
                c.readBool() && c.skip(8), this._buildingDisplayList = !0, c.seek(0, 1);
                var p, y = c.getInt16();
                for (s = 0; s < y; s++) {
                    a = c.getInt16(), a += c.pos;
                    var f = new t.Controller();
                    this._controllers.push(f), f.parent = this, f.setup(c), c.pos = a;
                }
                c.seek(0, 2);
                var m = c.getInt16();
                for (s = 0; s < m; s++) {
                    if (h = c.getInt16(), r = c.pos, e) p = e[i + s]; else {
                        c.seek(r, 0);
                        var v, w = c.readByte(), C = c.readS(), b = c.readS(), S = null;
                        if (null != C) S = (v = null != b ? t.UIPackage.getById(b) : d.owner) ? v.getItemById(C) : null;
                        S ? (p = t.UIObjectFactory.newObject(S)).constructFromResource() : p = t.UIObjectFactory.newObject(w);
                    }
                    p._underConstruct = !0, p.setup_beforeAdd(c, r), p.parent = this, this._children.push(p), 
                    c.pos = r + h;
                }
                for (c.seek(0, 3), this.relations.setup(c, !0), c.seek(0, 2), c.skip(2), s = 0; s < m; s++) {
                    a = c.getInt16(), a += c.pos, c.seek(c.pos, 3), this._children[s].relations.setup(c, !1), 
                    c.pos = a;
                }
                for (c.seek(0, 2), c.skip(2), s = 0; s < m; s++) {
                    a = c.getInt16(), a += c.pos, (p = this._children[s]).setup_afterAdd(c, c.pos), 
                    p._underConstruct = !1, c.pos = a;
                }
                c.seek(0, 4), c.skip(2), this.opaque = c.readBool();
                var x = c.getInt16();
                -1 != x && this.setMask(this.getChildAt(x).displayObject, c.readBool());
                var I, T = c.readS();
                l = c.getInt32(), _ = c.getInt32(), T ? (S = d.owner.getItemById(T)) && S.pixelHitTestData && (I = new t.PixelHitTest(S.pixelHitTestData, l, _)) : 0 != l && -1 != _ && (I = new t.ChildHitArea(this.getChildAt(_).displayObject)), 
                I && (this._displayObject.hitArea = I, this._displayObject.mouseThrough = !1, this._displayObject.hitTestPrior = !0), 
                c.seek(0, 5);
                var P = c.getInt16();
                for (s = 0; s < P; s++) {
                    a = c.getInt16(), a += c.pos;
                    var L = new t.Transition(this);
                    L.setup(c), this._transitions.push(L), c.pos = a;
                }
                this._transitions.length > 0 && (this.displayObject.on(Laya.Event.DISPLAY, this, this.___added), 
                this.displayObject.on(Laya.Event.UNDISPLAY, this, this.___removed)), this.applyAllControllers(), 
                this._buildingDisplayList = !1, this._underConstruct = !1, this.buildNativeDisplayList(), 
                this.setBoundsChangedFlag(), d.objectType != t.ObjectType.Component && this.constructExtension(c), 
                this.onConstruct();
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(t) {}
        }, {
            key: "onConstruct",
            value: function onConstruct() {
                this.constructFromXML(null);
            }
        }, {
            key: "constructFromXML",
            value: function constructFromXML(t) {}
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(G.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 4);
                var i, s, h = t.getInt16();
                for (-1 != h && this._scrollPane && (this._scrollPane.pageController = this._parent.getControllerAt(h)), 
                i = t.getInt16(), s = 0; s < i; s++) {
                    var r = this.getController(t.readS()), a = t.readS();
                    r && (r.selectedPageId = a);
                }
                if (t.version >= 2) for (i = t.getInt16(), s = 0; s < i; s++) {
                    var n = t.readS(), o = t.getInt16(), l = t.readS(), _ = this.getChildByPath(n);
                    _ && _.setProp(o, l);
                }
            }
        }, {
            key: "___added",
            value: function ___added() {
                for (var t = this._transitions.length, e = 0; e < t; ++e) {
                    this._transitions[e].onOwnerAddedToStage();
                }
            }
        }, {
            key: "___removed",
            value: function ___removed() {
                for (var t = this._transitions.length, e = 0; e < t; ++e) {
                    this._transitions[e].onOwnerRemovedFromStage();
                }
            }
        }, {
            key: "displayListContainer",
            get: function get() {
                return this._container;
            }
        }, {
            key: "numChildren",
            get: function get() {
                return this._children.length;
            }
        }, {
            key: "controllers",
            get: function get() {
                return this._controllers;
            }
        }, {
            key: "scrollPane",
            get: function get() {
                return this._scrollPane;
            }
        }, {
            key: "opaque",
            get: function get() {
                return this._opaque;
            },
            set: function set(t) {
                this._opaque != t && (this._opaque = t, this._opaque ? (this._displayObject.hitArea || (this._displayObject.hitArea = new Laya.Rectangle()), 
                this._displayObject.hitArea instanceof Laya.Rectangle && this._displayObject.hitArea.setTo(0, 0, this._width, this._height), 
                this._displayObject.mouseThrough = !1) : (this._displayObject.hitArea instanceof Laya.Rectangle && (this._displayObject.hitArea = null), 
                this._displayObject.mouseThrough = !0));
            }
        }, {
            key: "margin",
            get: function get() {
                return this._margin;
            },
            set: function set(t) {
                this._margin.copy(t), this._displayObject.scrollRect && this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y), 
                this.handleSizeChanged();
            }
        }, {
            key: "childrenRenderOrder",
            get: function get() {
                return this._childrenRenderOrder;
            },
            set: function set(t) {
                this._childrenRenderOrder != t && (this._childrenRenderOrder = t, this.buildNativeDisplayList());
            }
        }, {
            key: "apexIndex",
            get: function get() {
                return this._apexIndex;
            },
            set: function set(e) {
                this._apexIndex != e && (this._apexIndex = e, this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && this.buildNativeDisplayList());
            }
        }, {
            key: "mask",
            get: function get() {
                return this._mask;
            },
            set: function set(t) {
                this.setMask(t, !1);
            }
        }, {
            key: "baseUserData",
            get: function get() {
                var t = this.packageItem.rawData;
                return t.seek(0, 4), t.readS();
            }
        }, {
            key: "viewWidth",
            get: function get() {
                return this._scrollPane ? this._scrollPane.viewWidth : this.width - this._margin.left - this._margin.right;
            },
            set: function set(t) {
                this._scrollPane ? this._scrollPane.viewWidth = t : this.width = t + this._margin.left + this._margin.right;
            }
        }, {
            key: "viewHeight",
            get: function get() {
                return this._scrollPane ? this._scrollPane.viewHeight : this.height - this._margin.top - this._margin.bottom;
            },
            set: function set(t) {
                this._scrollPane ? this._scrollPane.viewHeight = t : this.height = t + this._margin.top + this._margin.bottom;
            }
        } ]);
        return G;
    }(t.GObject);
    t.GComponent = G;
    var D = /* */ function(_t$GComponent) {
        (0, _inherits2.default)(D, _t$GComponent);
        var _super6 = _createSuper(D);
        function D() {
            var _this5;
            (0, _classCallCheck2.default)(this, D);
            _this5 = _super6.call(this), _this5._soundVolumeScale = 0, _this5._downEffect = 0, 
            _this5._mode = t.ButtonMode.Common, _this5._title = "", _this5._icon = "", _this5._sound = t.UIConfig.buttonSound, 
            _this5._soundVolumeScale = t.UIConfig.buttonSoundVolumeScale, _this5._changeStateOnClick = !0, 
            _this5._downEffectValue = .8;
            return _this5;
        }
        (0, _createClass2.default)(D, [ {
            key: "getTextField",
            value: function getTextField() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel || this._titleObject instanceof D ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "fireClick",
            value: function fireClick(e) {
                null == e && (e = !0), e && this._mode == t.ButtonMode.Common && (this.setState(D.OVER), 
                Laya.timer.once(100, this, this.setState, [ D.DOWN ], !1), Laya.timer.once(200, this, this.setState, [ D.UP ], !1)), 
                this.__click(t.Events.createEvent(Laya.Event.CLICK, this.displayObject));
            }
        }, {
            key: "setState",
            value: function setState(e) {
                if (this._buttonController && (this._buttonController.selectedPage = e), 1 == this._downEffect) {
                    var i = this.numChildren;
                    if (e == D.DOWN || e == D.SELECTED_OVER || e == D.SELECTED_DISABLED) for (var s = 255 * this._downEffectValue, h = Laya.Utils.toHexColor((s << 16) + (s << 8) + s), r = 0; r < i; r++) {
                        var a = this.getChildAt(r);
                        a instanceof t.GTextField || a.setProp(t.ObjectPropID.Color, h);
                    } else for (r = 0; r < i; r++) {
                        (a = this.getChildAt(r)) instanceof t.GTextField || a.setProp(t.ObjectPropID.Color, "#FFFFFF");
                    }
                } else 2 == this._downEffect && (e == D.DOWN || e == D.SELECTED_OVER || e == D.SELECTED_DISABLED ? this._downScaled || (this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue), 
                this._downScaled = !0) : this._downScaled && (this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue), 
                this._downScaled = !1));
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(D.prototype), "handleControllerChanged", this).call(this, t), 
                this._relatedController == t && (this.selected = this._relatedPageId == t.selectedPageId);
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                this._buttonController && this._buttonController.hasPage(D.DISABLED) ? this.grayed ? this._selected && this._buttonController.hasPage(D.SELECTED_DISABLED) ? this.setState(D.SELECTED_DISABLED) : this.setState(D.DISABLED) : this._selected ? this.setState(D.DOWN) : this.setState(D.UP) : (0, 
                _get2.default)((0, _getPrototypeOf2.default)(D.prototype), "handleGrayedChanged", this).call(this);
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.titleColor;

                  case t.ObjectPropID.OutlineColor:
                    var i = this.getTextField();
                    return i ? i.strokeColor : 0;

                  case t.ObjectPropID.FontSize:
                    return this.titleFontSize;

                  case t.ObjectPropID.Selected:
                    return this.selected;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(D.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.titleColor = i;
                    break;

                  case t.ObjectPropID.OutlineColor:
                    var s = this.getTextField();
                    s && (s.strokeColor = i);
                    break;

                  case t.ObjectPropID.FontSize:
                    this.titleFontSize = i;
                    break;

                  case t.ObjectPropID.Selected:
                    this.selected = i;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(D.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(e) {
                e.seek(0, 6), this._mode = e.readByte();
                var i = e.readS();
                i && (this._sound = i), this._soundVolumeScale = e.getFloat32(), this._downEffect = e.readByte(), 
                this._downEffectValue = e.getFloat32(), 2 == this._downEffect && this.setPivot(.5, .5, this.pivotAsAnchor), 
                this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), 
                this._iconObject = this.getChild("icon"), this._titleObject && (this._title = this._titleObject.text), 
                this._iconObject && (this._icon = this._iconObject.icon), this._mode == t.ButtonMode.Common && this.setState(D.UP), 
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover), this.on(Laya.Event.ROLL_OUT, this, this.__rollout), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown), this.on(Laya.Event.CLICK, this, this.__click);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                var i, s;
                ((0, _get2.default)((0, _getPrototypeOf2.default)(D.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6)) && t.readByte() == this.packageItem.objectType && (null != (i = t.readS()) && (this.title = i), 
                null != (i = t.readS()) && (this.selectedTitle = i), null != (i = t.readS()) && (this.icon = i), 
                null != (i = t.readS()) && (this.selectedIcon = i), t.readBool() && (this.titleColor = t.readColorS()), 
                0 != (s = t.getInt32()) && (this.titleFontSize = s), (s = t.getInt16()) >= 0 && (this._relatedController = this.parent.getControllerAt(s)), 
                this._relatedPageId = t.readS(), null != (i = t.readS()) && (this._sound = i), t.readBool() && (this._soundVolumeScale = t.getFloat32()), 
                this.selected = t.readBool());
            }
        }, {
            key: "__rollover",
            value: function __rollover() {
                this._buttonController && this._buttonController.hasPage(D.OVER) && (this._over = !0, 
                this._down || this.grayed && this._buttonController.hasPage(D.DISABLED) || this.setState(this._selected ? D.SELECTED_OVER : D.OVER));
            }
        }, {
            key: "__rollout",
            value: function __rollout() {
                this._buttonController && this._buttonController.hasPage(D.OVER) && (this._over = !1, 
                this._down || this.grayed && this._buttonController.hasPage(D.DISABLED) || this.setState(this._selected ? D.DOWN : D.UP));
            }
        }, {
            key: "__mousedown",
            value: function __mousedown(e) {
                this._down = !0, t.GRoot.inst.checkPopups(e.target), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup), 
                this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(D.DISABLED) ? this.setState(D.SELECTED_DISABLED) : this.setState(D.DOWN)), 
                this._linkedPopup && (this._linkedPopup instanceof t.Window ? this._linkedPopup.toggleStatus() : this.root.togglePopup(this._linkedPopup, this));
            }
        }, {
            key: "__mouseup",
            value: function __mouseup() {
                if (this._down) {
                    if (Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup), this._down = !1, 
                    null == this._displayObject) return;
                    this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(D.DISABLED) ? this.setState(D.DISABLED) : this._over ? this.setState(D.OVER) : this.setState(D.UP));
                }
            }
        }, {
            key: "__click",
            value: function __click(e) {
                if (this._sound) {
                    var i = t.UIPackage.getItemByURL(this._sound);
                    i ? t.GRoot.inst.playOneShotSound(i.file) : t.GRoot.inst.playOneShotSound(this._sound);
                }
                this._mode == t.ButtonMode.Check ? this._changeStateOnClick && (this.selected = !this._selected, 
                t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, e)) : this._mode == t.ButtonMode.Radio ? this._changeStateOnClick && !this._selected && (this.selected = !0, 
                t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, e)) : this._relatedController && (this._relatedController.selectedPageId = this._relatedPageId);
            }
        }, {
            key: "icon",
            get: function get() {
                return this._icon;
            },
            set: function set(t) {
                this._icon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, 
                this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "selectedIcon",
            get: function get() {
                return this._selectedIcon;
            },
            set: function set(t) {
                this._selectedIcon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, 
                this._iconObject && (this._iconObject.icon = t);
            }
        }, {
            key: "title",
            get: function get() {
                return this._title;
            },
            set: function set(t) {
                this._title = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title), 
                this.updateGear(6);
            }
        }, {
            key: "text",
            get: function get() {
                return this.title;
            },
            set: function set(t) {
                this.title = t;
            }
        }, {
            key: "selectedTitle",
            get: function get() {
                return this._selectedTitle;
            },
            set: function set(t) {
                this._selectedTitle = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title);
            }
        }, {
            key: "titleColor",
            get: function get() {
                var t = this.getTextField();
                return t ? t.color : "#000000";
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var t = this.getTextField();
                return t ? t.fontSize : 0;
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.fontSize = t);
            }
        }, {
            key: "sound",
            get: function get() {
                return this._sound;
            },
            set: function set(t) {
                this._sound = t;
            }
        }, {
            key: "soundVolumeScale",
            get: function get() {
                return this._soundVolumeScale;
            },
            set: function set(t) {
                this._soundVolumeScale = t;
            }
        }, {
            key: "selected",
            set: function set(e) {
                if (this._mode != t.ButtonMode.Common && this._selected != e) {
                    if (this._selected = e, this.grayed && this._buttonController && this._buttonController.hasPage(D.DISABLED) ? this._selected ? this.setState(D.SELECTED_DISABLED) : this.setState(D.DISABLED) : this._selected ? this.setState(this._over ? D.SELECTED_OVER : D.DOWN) : this.setState(this._over ? D.OVER : D.UP), 
                    this._selectedTitle && this._titleObject && (this._titleObject.text = this._selected ? this._selectedTitle : this._title), 
                    this._selectedIcon) {
                        var i = this._selected ? this._selectedIcon : this._icon;
                        this._iconObject && (this._iconObject.icon = i);
                    }
                    this._relatedController && this._parent && !this._parent._buildingDisplayList && (this._selected ? (this._relatedController.selectedPageId = this._relatedPageId, 
                    this._relatedController.autoRadioGroupDepth && this._parent.adjustRadioGroupDepth(this, this._relatedController)) : this._mode == t.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId && (this._relatedController.oppositePageId = this._relatedPageId));
                }
            },
            get: function get() {
                return this._selected;
            }
        }, {
            key: "mode",
            get: function get() {
                return this._mode;
            },
            set: function set(e) {
                this._mode != e && (e == t.ButtonMode.Common && (this.selected = !1), this._mode = e);
            }
        }, {
            key: "relatedController",
            get: function get() {
                return this._relatedController;
            },
            set: function set(t) {
                t != this._relatedController && (this._relatedController = t, this._relatedPageId = null);
            }
        }, {
            key: "relatedPageId",
            get: function get() {
                return this._relatedPageId;
            },
            set: function set(t) {
                this._relatedPageId = t;
            }
        }, {
            key: "changeStateOnClick",
            get: function get() {
                return this._changeStateOnClick;
            },
            set: function set(t) {
                this._changeStateOnClick = t;
            }
        }, {
            key: "linkedPopup",
            get: function get() {
                return this._linkedPopup;
            },
            set: function set(t) {
                this._linkedPopup = t;
            }
        } ]);
        return D;
    }(t.GComponent);
    D.UP = "up", D.DOWN = "down", D.OVER = "over", D.SELECTED_OVER = "selectedOver", 
    D.DISABLED = "disabled", D.SELECTED_DISABLED = "selectedDisabled", t.GButton = D;
    t.GComboBox = /* */ function(_t$GComponent2) {
        (0, _inherits2.default)(_class6, _t$GComponent2);
        var _super7 = _createSuper(_class6);
        function _class6() {
            var _this6;
            (0, _classCallCheck2.default)(this, _class6);
            _this6 = _super7.call(this), _this6._visibleItemCount = t.UIConfig.defaultComboBoxVisibleItemCount, 
            _this6._itemsUpdated = !0, _this6._selectedIndex = -1, _this6._popupDirection = 0, 
            _this6._items = [], _this6._values = [];
            return _this6;
        }
        (0, _createClass2.default)(_class6, [ {
            key: "getTextField",
            value: function getTextField() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel || this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "setState",
            value: function setState(t) {
                this._buttonController && (this._buttonController.selectedPage = t);
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class6.prototype), "handleControllerChanged", this).call(this, t), 
                this._selectionController == t && (this.selectedIndex = t.selectedIndex);
            }
        }, {
            key: "updateSelectionController",
            value: function updateSelectionController() {
                if (this._selectionController && !this._selectionController.changing && this._selectedIndex < this._selectionController.pageCount) {
                    var t = this._selectionController;
                    this._selectionController = null, t.selectedIndex = this._selectedIndex, this._selectionController = t;
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.dropdown && (this.dropdown.dispose(), this.dropdown = null), this._selectionController = null, 
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class6.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.titleColor;

                  case t.ObjectPropID.OutlineColor:
                    var i = this.getTextField();
                    return i ? i.strokeColor : 0;

                  case t.ObjectPropID.FontSize:
                    return (i = this.getTextField()) ? i.fontSize : 0;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(_class6.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.titleColor = i;
                    break;

                  case t.ObjectPropID.OutlineColor:
                    var s = this.getTextField();
                    s && (s.strokeColor = i);
                    break;

                  case t.ObjectPropID.FontSize:
                    (s = this.getTextField()) && (s.fontSize = i);
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(_class6.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(e) {
                var i;
                if (this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), 
                this._iconObject = this.getChild("icon"), i = e.readS()) {
                    if (this.dropdown = t.UIPackage.createObjectFromURL(i), !this.dropdown) return void Laya.Log.print("下拉框必须为元件");
                    if (this.dropdown.name = "this._dropdownObject", this._list = this.dropdown.getChild("list"), 
                    !this._list) return void Laya.Log.print(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                    this._list.on(t.Events.CLICK_ITEM, this, this.__clickItem), this._list.addRelation(this.dropdown, t.RelationType.Width), 
                    this._list.removeRelation(this.dropdown, t.RelationType.Height), this.dropdown.addRelation(this._list, t.RelationType.Height), 
                    this.dropdown.removeRelation(this._list, t.RelationType.Width), this.dropdown.displayObject.on(Laya.Event.UNDISPLAY, this, this.__popupWinClosed);
                }
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover), this.on(Laya.Event.ROLL_OUT, this, this.__rollout), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                if ((0, _get2.default)((0, _getPrototypeOf2.default)(_class6.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType) {
                    var i, s, h, r, a = t.getInt16();
                    for (i = 0; i < a; i++) {
                        h = t.getInt16(), h += t.pos, this._items[i] = t.readS(), this._values[i] = t.readS(), 
                        null != (r = t.readS()) && (this._icons || (this._icons = []), this._icons[i] = r), 
                        t.pos = h;
                    }
                    null != (r = t.readS()) ? (this.text = r, this._selectedIndex = this._items.indexOf(r)) : this._items.length > 0 ? (this._selectedIndex = 0, 
                    this.text = this._items[0]) : this._selectedIndex = -1, null != (r = t.readS()) && (this.icon = r), 
                    t.readBool() && (this.titleColor = t.readColorS()), (s = t.getInt32()) > 0 && (this._visibleItemCount = s), 
                    this._popupDirection = t.readByte(), (s = t.getInt16()) >= 0 && (this._selectionController = this.parent.getControllerAt(s));
                }
            }
        }, {
            key: "showDropdown",
            value: function showDropdown() {
                if (this._itemsUpdated) {
                    this._itemsUpdated = !1, this._list.removeChildrenToPool();
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var s = this._list.addItemFromPool();
                        s.name = i < this._values.length ? this._values[i] : "", s.text = this._items[i], 
                        s.icon = this._icons && i < this._icons.length ? this._icons[i] : null;
                    }
                    this._list.resizeToFit(this._visibleItemCount);
                }
                this._list.selectedIndex = -1, this.dropdown.width = this.width, this._list.ensureBoundsCorrect();
                var h = null;
                this._popupDirection == t.PopupDirection.Down ? h = !0 : this._popupDirection == t.PopupDirection.Up && (h = !1), 
                this.root.togglePopup(this.dropdown, this, h), this.dropdown.parent && this.setState(t.GButton.DOWN);
            }
        }, {
            key: "__popupWinClosed",
            value: function __popupWinClosed() {
                this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP);
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(t, e) {
                Laya.timer.callLater(this, this.__clickItem2, [ this._list.getChildIndex(t), e ]);
            }
        }, {
            key: "__clickItem2",
            value: function __clickItem2(e, i) {
                this.dropdown.parent instanceof t.GRoot && this.dropdown.parent.hidePopup(), this._selectedIndex = -1, 
                this.selectedIndex = e, t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, i);
            }
        }, {
            key: "__rollover",
            value: function __rollover() {
                this._over = !0, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.OVER);
            }
        }, {
            key: "__rollout",
            value: function __rollout() {
                this._over = !1, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.UP);
            }
        }, {
            key: "__mousedown",
            value: function __mousedown(e) {
                e.target instanceof Laya.Input || (this._down = !0, t.GRoot.inst.checkPopups(e.target), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup), this.dropdown && this.showDropdown());
            }
        }, {
            key: "__mouseup",
            value: function __mouseup() {
                this._down && (this._down = !1, Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup), 
                this.dropdown && !this.dropdown.parent && (this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP)));
            }
        }, {
            key: "text",
            get: function get() {
                return this._titleObject ? this._titleObject.text : null;
            },
            set: function set(t) {
                this._titleObject && (this._titleObject.text = t), this.updateGear(6);
            }
        }, {
            key: "titleColor",
            get: function get() {
                var t = this.getTextField();
                return t ? t.color : "#000000";
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var t = this.getTextField();
                return t ? t.fontSize : 0;
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.fontSize = t);
            }
        }, {
            key: "icon",
            get: function get() {
                return this._iconObject ? this._iconObject.icon : null;
            },
            set: function set(t) {
                this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "visibleItemCount",
            get: function get() {
                return this._visibleItemCount;
            },
            set: function set(t) {
                this._visibleItemCount = t;
            }
        }, {
            key: "popupDirection",
            get: function get() {
                return this._popupDirection;
            },
            set: function set(t) {
                this._popupDirection = t;
            }
        }, {
            key: "items",
            get: function get() {
                return this._items;
            },
            set: function set(t) {
                t ? this._items = t.concat() : this._items.length = 0, this._items.length > 0 ? (this._selectedIndex >= this._items.length ? this._selectedIndex = this._items.length - 1 : -1 == this._selectedIndex && (this._selectedIndex = 0), 
                this.text = this._items[this._selectedIndex], this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", 
                this._icons && (this.icon = null), this._selectedIndex = -1), this._itemsUpdated = !0;
            }
        }, {
            key: "icons",
            get: function get() {
                return this._icons;
            },
            set: function set(t) {
                this._icons = t, this._icons && -1 != this._selectedIndex && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex]);
            }
        }, {
            key: "values",
            get: function get() {
                return this._values;
            },
            set: function set(t) {
                t ? this._values = t.concat() : this._values.length = 0;
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                return this._selectedIndex;
            },
            set: function set(t) {
                this._selectedIndex != t && (this._selectedIndex = t, this._selectedIndex >= 0 && this._selectedIndex < this._items.length ? (this.text = this._items[this._selectedIndex], 
                this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", 
                this._icons && (this.icon = null)), this.updateSelectionController());
            }
        }, {
            key: "value",
            get: function get() {
                return this._values[this._selectedIndex];
            },
            set: function set(t) {
                var e = this._values.indexOf(t);
                -1 == e && null == t && (e = this._values.indexOf("")), this.selectedIndex = e;
            }
        }, {
            key: "selectionController",
            get: function get() {
                return this._selectionController;
            },
            set: function set(t) {
                this._selectionController = t;
            }
        } ]);
        return _class6;
    }(t.GComponent);
    t.GGraph = /* */ function(_t$GObject3) {
        (0, _inherits2.default)(_class7, _t$GObject3);
        var _super8 = _createSuper(_class7);
        function _class7() {
            var _this7;
            (0, _classCallCheck2.default)(this, _class7);
            _this7 = _super8.call(this), _this7._type = 0, _this7._lineSize = 1, _this7._lineColor = "#000000", 
            _this7._fillColor = "#FFFFFF";
            return _this7;
        }
        (0, _createClass2.default)(_class7, [ {
            key: "drawRect",
            value: function drawRect(t, e, i, s) {
                this._type = 1, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._cornerRadius = s, 
                this.updateGraph();
            }
        }, {
            key: "drawEllipse",
            value: function drawEllipse(t, e, i) {
                this._type = 2, this._lineSize = t, this._lineColor = e, this._fillColor = i, this.updateGraph();
            }
        }, {
            key: "drawRegularPolygon",
            value: function drawRegularPolygon(t, e, i, s, h, r) {
                this._type = 4, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._sides = s, 
                this._startAngle = h || 0, this._distances = r, this.updateGraph();
            }
        }, {
            key: "drawPolygon",
            value: function drawPolygon(t, e, i, s) {
                this._type = 3, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._polygonPoints = s, 
                this.updateGraph();
            }
        }, {
            key: "updateGraph",
            value: function updateGraph() {
                this._displayObject.mouseEnabled = this.touchable;
                var e = this._displayObject.graphics;
                e.clear();
                var i = this.width, s = this.height;
                if (0 != i && 0 != s) {
                    var h = this._fillColor, r = this._lineColor;
                    if (t.ToolSet.startsWith(h, "rgba")) {
                        var a = h.substring(5, h.lastIndexOf(")")).split(","), n = parseFloat(a[3]);
                        0 == n ? h = null : (h = Laya.Utils.toHexColor((parseInt(a[0]) << 16) + (parseInt(a[1]) << 8) + parseInt(a[2])), 
                        this.alpha = n);
                    }
                    if (1 == this._type) {
                        if (this._cornerRadius) {
                            var o = [ [ "moveTo", this._cornerRadius[0], 0 ], [ "lineTo", i - this._cornerRadius[1], 0 ], [ "arcTo", i, 0, i, this._cornerRadius[1], this._cornerRadius[1] ], [ "lineTo", i, s - this._cornerRadius[3] ], [ "arcTo", i, s, i - this._cornerRadius[3], s, this._cornerRadius[3] ], [ "lineTo", this._cornerRadius[2], s ], [ "arcTo", 0, s, 0, s - this._cornerRadius[2], this._cornerRadius[2] ], [ "lineTo", 0, this._cornerRadius[0] ], [ "arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0] ], [ "closePath" ] ];
                            e.drawPath(0, 0, o, h ? {
                                fillStyle: h
                            } : null, this._lineSize > 0 ? {
                                strokeStyle: r,
                                lineWidth: this._lineSize
                            } : null);
                        } else e.drawRect(0, 0, i, s, h, this._lineSize > 0 ? r : null, this._lineSize);
                    } else if (2 == this._type) e.drawCircle(i / 2, s / 2, i / 2, h, this._lineSize > 0 ? r : null, this._lineSize); else if (3 == this._type) e.drawPoly(0, 0, this._polygonPoints, h, this._lineSize > 0 ? r : null, this._lineSize); else if (4 == this._type) {
                        this._polygonPoints || (this._polygonPoints = []);
                        var l = Math.min(this._width, this._height) / 2;
                        this._polygonPoints.length = 0;
                        for (var _, d = Laya.Utils.toRadian(this._startAngle), c = 2 * Math.PI / this._sides, u = 0; u < this._sides; u++) {
                            this._distances ? (_ = this._distances[u], isNaN(_) && (_ = 1)) : _ = 1;
                            var g = l + l * _ * Math.cos(d), p = l + l * _ * Math.sin(d);
                            this._polygonPoints.push(g, p), d += c;
                        }
                        e.drawPoly(0, 0, this._polygonPoints, h, this._lineSize > 0 ? r : null, this._lineSize);
                    }
                    this._displayObject.repaint();
                }
            }
        }, {
            key: "replaceMe",
            value: function replaceMe(t) {
                if (!this._parent) throw "parent not set";
                t.name = this.name, t.alpha = this.alpha, t.rotation = this.rotation, t.visible = this.visible, 
                t.touchable = this.touchable, t.grayed = this.grayed, t.setXY(this.x, this.y), t.setSize(this.width, this.height);
                var e = this._parent.getChildIndex(this);
                this._parent.addChildAt(t, e), t.relations.copyFrom(this.relations), this._parent.removeChild(this, !0);
            }
        }, {
            key: "addBeforeMe",
            value: function addBeforeMe(t) {
                if (!this._parent) throw "parent not set";
                var e = this._parent.getChildIndex(this);
                this._parent.addChildAt(t, e);
            }
        }, {
            key: "addAfterMe",
            value: function addAfterMe(t) {
                if (!this._parent) throw "parent not set";
                var e = this._parent.getChildIndex(this);
                e++, this._parent.addChildAt(t, e);
            }
        }, {
            key: "setNativeObject",
            value: function setNativeObject(t) {
                this._type = 0, this._displayObject.mouseEnabled = this.touchable, this._displayObject.graphics.clear(), 
                this._displayObject.addChild(t);
            }
        }, {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class7.prototype), "createDisplayObject", this).call(this), 
                this._displayObject.mouseEnabled = !1, this._hitArea = new Laya.HitArea(), this._hitArea.hit = this._displayObject.graphics, 
                this._displayObject.hitArea = this._hitArea;
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                return e == t.ObjectPropID.Color ? this.color : (0, _get2.default)((0, _getPrototypeOf2.default)(_class7.prototype), "getProp", this).call(this, e);
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                e == t.ObjectPropID.Color ? this.color = i : (0, _get2.default)((0, _getPrototypeOf2.default)(_class7.prototype), "setProp", this).call(this, e, i);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class7.prototype), "handleSizeChanged", this).call(this), 
                0 != this._type && this.updateGraph();
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                if ((0, _get2.default)((0, _getPrototypeOf2.default)(_class7.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._type = t.readByte(), 0 != this._type) {
                    var i, s;
                    if (this._lineSize = t.getInt32(), this._lineColor = t.readColorS(!0), this._fillColor = t.readColorS(!0), 
                    t.readBool()) for (this._cornerRadius = [], i = 0; i < 4; i++) {
                        this._cornerRadius[i] = t.getFloat32();
                    }
                    if (3 == this._type) for (s = t.getInt16(), this._polygonPoints = [], this._polygonPoints.length = s, 
                    i = 0; i < s; i++) {
                        this._polygonPoints[i] = t.getFloat32();
                    } else if (4 == this._type && (this._sides = t.getInt16(), this._startAngle = t.getFloat32(), 
                    (s = t.getInt16()) > 0)) for (this._distances = [], i = 0; i < s; i++) {
                        this._distances[i] = t.getFloat32();
                    }
                    this.updateGraph();
                }
            }
        }, {
            key: "distances",
            get: function get() {
                return this._distances;
            },
            set: function set(t) {
                this._distances = t, 3 == this._type && this.updateGraph();
            }
        }, {
            key: "color",
            get: function get() {
                return this._fillColor;
            },
            set: function set(t) {
                this._fillColor = t, this.updateGear(4), 0 != this._type && this.updateGraph();
            }
        } ]);
        return _class7;
    }(t.GObject);
    t.GGroup = /* */ function(_t$GObject4) {
        (0, _inherits2.default)(_class8, _t$GObject4);
        var _super9 = _createSuper(_class8);
        function _class8() {
            var _this8;
            (0, _classCallCheck2.default)(this, _class8);
            _this8 = _super9.call(this), _this8._layout = 0, _this8._lineGap = 0, _this8._columnGap = 0, 
            _this8._mainGridIndex = -1, _this8._mainGridMinSize = 50, _this8._mainChildIndex = -1, 
            _this8._totalSize = 0, _this8._numChildren = 0, _this8._updating = 0;
            return _this8;
        }
        (0, _createClass2.default)(_class8, [ {
            key: "dispose",
            value: function dispose() {
                this._boundsChanged = !1, (0, _get2.default)((0, _getPrototypeOf2.default)(_class8.prototype), "dispose", this).call(this);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function setBoundsChangedFlag(e) {
                0 == this._updating && this._parent && (e || (this._percentReady = !1), this._boundsChanged || (this._boundsChanged = !0, 
                this._layout != t.GroupLayoutType.None && Laya.timer.callLater(this, this.ensureBoundsCorrect)));
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {
                this._parent && this._boundsChanged && 0 != this._layout && (this._boundsChanged = !1, 
                this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), this.updateBounds()));
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function ensureBoundsCorrect() {
                this._parent && this._boundsChanged && (this._boundsChanged = !1, 0 == this._layout ? this.updateBounds() : this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), 
                this.updateBounds()));
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                Laya.timer.clear(this, this.ensureBoundsCorrect);
                var t, e, i, s = this._parent.numChildren, h = Number.POSITIVE_INFINITY, r = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, n = Number.NEGATIVE_INFINITY, o = !0;
                for (t = 0; t < s; t++) {
                    (e = this._parent.getChildAt(t)).group != this || this._excludeInvisibles && !e.internalVisible3 || ((i = e.xMin) < h && (h = i), 
                    (i = e.yMin) < r && (r = i), (i = e.xMin + e.width) > a && (a = i), (i = e.yMin + e.height) > n && (n = i), 
                    o = !1);
                }
                var l = 0, _ = 0;
                o || (this._updating |= 1, this.setXY(h, r), this._updating &= 2, l = a - h, _ = n - r), 
                0 == (2 & this._updating) ? (this._updating |= 2, this.setSize(l, _), this._updating &= 1) : (this._updating &= 1, 
                this.resizeChildren(this._width - l, this._height - _));
            }
        }, {
            key: "handleLayout",
            value: function handleLayout() {
                var e, i, s;
                if (this._updating |= 1, this._layout == t.GroupLayoutType.Horizontal) {
                    var h = this.x;
                    for (s = this._parent.numChildren, i = 0; i < s; i++) {
                        (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.xMin = h, 
                        0 != e.width && (h += e.width + this._columnGap)));
                    }
                } else if (this._layout == t.GroupLayoutType.Vertical) {
                    var r = this.y;
                    for (s = this._parent.numChildren, i = 0; i < s; i++) {
                        (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.yMin = r, 
                        0 != e.height && (r += e.height + this._lineGap)));
                    }
                }
                this._updating &= 2;
            }
        }, {
            key: "moveChildren",
            value: function moveChildren(t, e) {
                if (0 == (1 & this._updating) && this._parent) {
                    this._updating |= 1;
                    var i, s, h = this._parent.numChildren;
                    for (i = 0; i < h; i++) {
                        (s = this._parent.getChildAt(i)).group == this && s.setXY(s.x + t, s.y + e);
                    }
                    this._updating &= 2;
                }
            }
        }, {
            key: "resizeChildren",
            value: function resizeChildren(e, i) {
                if (this._layout != t.GroupLayoutType.None && 0 == (2 & this._updating) && this._parent) if (this._updating |= 2, 
                !this._boundsChanged || (this._boundsChanged = !1, this._autoSizeDisabled)) {
                    var s, h, r = this._parent.numChildren;
                    if (!this._percentReady) {
                        this._percentReady = !0, this._numChildren = 0, this._totalSize = 0, this._mainChildIndex = -1;
                        var a = 0;
                        for (s = 0; s < r; s++) {
                            (h = this._parent.getChildAt(s)).group == this && (this._excludeInvisibles && !h.internalVisible3 || (a == this._mainGridIndex && (this._mainChildIndex = s), 
                            this._numChildren++, 1 == this._layout ? this._totalSize += h.width : this._totalSize += h.height), 
                            a++);
                        }
                        for (-1 != this._mainChildIndex && (1 == this._layout ? (h = this._parent.getChildAt(this._mainChildIndex), 
                        this._totalSize += this._mainGridMinSize - h.width, h._sizePercentInGroup = this._mainGridMinSize / this._totalSize) : (h = this._parent.getChildAt(this._mainChildIndex), 
                        this._totalSize += this._mainGridMinSize - h.height, h._sizePercentInGroup = this._mainGridMinSize / this._totalSize)), 
                        s = 0; s < r; s++) {
                            (h = this._parent.getChildAt(s)).group == this && s != this._mainChildIndex && (this._totalSize > 0 ? h._sizePercentInGroup = (1 == this._layout ? h.width : h.height) / this._totalSize : h._sizePercentInGroup = 0);
                        }
                    }
                    var n = 0, o = 1, l = !1;
                    if (1 == this._layout) {
                        n = this.width - (this._numChildren - 1) * this._columnGap, -1 != this._mainChildIndex && n >= this._totalSize && ((h = this._parent.getChildAt(this._mainChildIndex)).setSize(n - (this._totalSize - this._mainGridMinSize), h._rawHeight + i, !0), 
                        n -= h.width, o -= h._sizePercentInGroup, l = !0);
                        var _ = this.x;
                        for (s = 0; s < r; s++) {
                            (h = this._parent.getChildAt(s)).group == this && (!this._excludeInvisibles || h.internalVisible3 ? (l && s == this._mainChildIndex || (h.setSize(Math.round(h._sizePercentInGroup / o * n), h._rawHeight + i, !0), 
                            o -= h._sizePercentInGroup, n -= h.width), h.xMin = _, 0 != h.width && (_ += h.width + this._columnGap)) : h.setSize(h._rawWidth, h._rawHeight + i, !0));
                        }
                    } else {
                        n = this.height - (this._numChildren - 1) * this._lineGap, -1 != this._mainChildIndex && n >= this._totalSize && ((h = this._parent.getChildAt(this._mainChildIndex)).setSize(h._rawWidth + e, n - (this._totalSize - this._mainGridMinSize), !0), 
                        n -= h.height, o -= h._sizePercentInGroup, l = !0);
                        var d = this.y;
                        for (s = 0; s < r; s++) {
                            (h = this._parent.getChildAt(s)).group == this && (!this._excludeInvisibles || h.internalVisible3 ? (l && s == this._mainChildIndex || (h.setSize(h._rawWidth + e, Math.round(h._sizePercentInGroup / o * n), !0), 
                            o -= h._sizePercentInGroup, n -= h.height), h.yMin = d, 0 != h.height && (d += h.height + this._lineGap)) : h.setSize(h._rawWidth + e, h._rawHeight, !0));
                        }
                    }
                    this._updating &= 1;
                } else this.updateBounds();
            }
        }, {
            key: "handleAlphaChanged",
            value: function handleAlphaChanged() {
                if (!this._underConstruct) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
                    var i = this._parent.getChildAt(e);
                    i.group == this && (i.alpha = this.alpha);
                }
            }
        }, {
            key: "handleVisibleChanged",
            value: function handleVisibleChanged() {
                if (this._parent) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
                    var i = this._parent.getChildAt(e);
                    i.group == this && i.handleVisibleChanged();
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class8.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._layout = t.readByte(), this._lineGap = t.getInt32(), this._columnGap = t.getInt32(), 
                t.version >= 2 && (this._excludeInvisibles = t.readBool(), this._autoSizeDisabled = t.readBool(), 
                this._mainGridIndex = t.getInt16());
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class8.prototype), "setup_afterAdd", this).call(this, t, e), 
                this.visible || this.handleVisibleChanged();
            }
        }, {
            key: "layout",
            get: function get() {
                return this._layout;
            },
            set: function set(t) {
                this._layout != t && (this._layout = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "lineGap",
            get: function get() {
                return this._lineGap;
            },
            set: function set(t) {
                this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(!0));
            }
        }, {
            key: "columnGap",
            get: function get() {
                return this._columnGap;
            },
            set: function set(t) {
                this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(!0));
            }
        }, {
            key: "excludeInvisibles",
            get: function get() {
                return this._excludeInvisibles;
            },
            set: function set(t) {
                this._excludeInvisibles != t && (this._excludeInvisibles = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "autoSizeDisabled",
            get: function get() {
                return this._autoSizeDisabled;
            },
            set: function set(t) {
                this._autoSizeDisabled = t;
            }
        }, {
            key: "mainGridMinSize",
            get: function get() {
                return this._mainGridMinSize;
            },
            set: function set(t) {
                this._mainGridMinSize != t && (this._mainGridMinSize = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "mainGridIndex",
            get: function get() {
                return this._mainGridIndex;
            },
            set: function set(t) {
                this._mainGridIndex != t && (this._mainGridIndex = t, this.setBoundsChangedFlag());
            }
        } ]);
        return _class8;
    }(t.GObject);
    t.GImage = /* */ function(_t$GObject5) {
        (0, _inherits2.default)(_class9, _t$GObject5);
        var _super10 = _createSuper(_class9);
        function _class9() {
            var _this9;
            (0, _classCallCheck2.default)(this, _class9);
            _this9 = _super10.call(this), _this9._flip = 0;
            return _this9;
        }
        (0, _createClass2.default)(_class9, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._image = new t.Image(), this.image.mouseEnabled = !1, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                this._contentItem = this.packageItem.getBranch(), this.sourceWidth = this._contentItem.width, 
                this.sourceHeight = this._contentItem.height, this.initWidth = this.sourceWidth, 
                this.initHeight = this.sourceHeight, this._contentItem = this._contentItem.getHighResolution(), 
                this._contentItem.load(), this.image.scale9Grid = this._contentItem.scale9Grid, 
                this.image.scaleByTile = this._contentItem.scaleByTile, this.image.tileGridIndice = this._contentItem.tileGridIndice, 
                this.image.texture = this._contentItem.texture, this.setSize(this.sourceWidth, this.sourceHeight);
            }
        }, {
            key: "handleXYChanged",
            value: function handleXYChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class9.prototype), "handleXYChanged", this).call(this), 
                this._flip != t.FlipType.None && (-1 == this.scaleX && (this.image.x += this.width), 
                -1 == this.scaleY && (this.image.y += this.height));
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                return e == t.ObjectPropID.Color ? this.color : (0, _get2.default)((0, _getPrototypeOf2.default)(_class9.prototype), "getProp", this).call(this, e);
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                e == t.ObjectPropID.Color ? this.color = i : (0, _get2.default)((0, _getPrototypeOf2.default)(_class9.prototype), "setProp", this).call(this, e, i);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class9.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), t.readBool() && (this.color = t.readColorS()), this.flip = t.readByte(), 
                this.image.fillMethod = t.readByte(), 0 != this.image.fillMethod && (this.image.fillOrigin = t.readByte(), 
                this.image.fillClockwise = t.readBool(), this.image.fillAmount = t.getFloat32());
            }
        }, {
            key: "image",
            get: function get() {
                return this._image;
            }
        }, {
            key: "color",
            get: function get() {
                return this.image.color;
            },
            set: function set(t) {
                this.image.color != t && (this.image.color = t, this.updateGear(4));
            }
        }, {
            key: "flip",
            get: function get() {
                return this._flip;
            },
            set: function set(e) {
                if (this._flip != e) {
                    this._flip = e;
                    var i = 1, s = 1;
                    this._flip != t.FlipType.Horizontal && this._flip != t.FlipType.Both || (i = -1), 
                    this._flip != t.FlipType.Vertical && this._flip != t.FlipType.Both || (s = -1), 
                    this.setScale(i, s), this.handleXYChanged();
                }
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this.image.fillMethod;
            },
            set: function set(t) {
                this.image.fillMethod = t;
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this.image.fillOrigin;
            },
            set: function set(t) {
                this.image.fillOrigin = t;
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this.image.fillClockwise;
            },
            set: function set(t) {
                this.image.fillClockwise = t;
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this.image.fillAmount;
            },
            set: function set(t) {
                this.image.fillAmount = t;
            }
        } ]);
        return _class9;
    }(t.GObject);
    var V = /* */ function(_t$GComponent3) {
        (0, _inherits2.default)(V, _t$GComponent3);
        var _super11 = _createSuper(V);
        function V() {
            (0, _classCallCheck2.default)(this, V);
            return _super11.call(this);
        }
        (0, _createClass2.default)(V, [ {
            key: "getTextField",
            value: function getTextField() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof V || this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.titleColor;

                  case t.ObjectPropID.OutlineColor:
                    var i = this.getTextField();
                    return i ? i.strokeColor : 0;

                  case t.ObjectPropID.FontSize:
                    return this.titleFontSize;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(V.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.titleColor = i;
                    break;

                  case t.ObjectPropID.OutlineColor:
                    var s = this.getTextField();
                    s && (s.strokeColor = i);
                    break;

                  case t.ObjectPropID.FontSize:
                    this.titleFontSize = i;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(V.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(t) {
                this._titleObject = this.getChild("title"), this._iconObject = this.getChild("icon");
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(e, i) {
                if ((0, _get2.default)((0, _getPrototypeOf2.default)(V.prototype), "setup_afterAdd", this).call(this, e, i), 
                e.seek(i, 6) && e.readByte() == this.packageItem.objectType) {
                    var s;
                    null != (s = e.readS()) && (this.title = s), null != (s = e.readS()) && (this.icon = s), 
                    e.readBool() && (this.titleColor = e.readColorS());
                    var h = e.getInt32();
                    if (0 != h && (this.titleFontSize = h), e.readBool()) {
                        var r = this.getTextField();
                        r instanceof t.GTextInput ? (null != (s = e.readS()) && (r.promptText = s), null != (s = e.readS()) && (r.restrict = s), 
                        0 != (h = e.getInt32()) && (r.maxLength = h), 0 != (h = e.getInt32()) && (4 == h ? r.keyboardType = Laya.Input.TYPE_NUMBER : 3 == h && (r.keyboardType = Laya.Input.TYPE_URL)), 
                        e.readBool() && (r.password = !0)) : e.skip(13);
                    }
                }
            }
        }, {
            key: "icon",
            get: function get() {
                return this._iconObject ? this._iconObject.icon : null;
            },
            set: function set(t) {
                this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "title",
            get: function get() {
                return this._titleObject ? this._titleObject.text : null;
            },
            set: function set(t) {
                this._titleObject && (this._titleObject.text = t), this.updateGear(6);
            }
        }, {
            key: "text",
            get: function get() {
                return this.title;
            },
            set: function set(t) {
                this.title = t;
            }
        }, {
            key: "titleColor",
            get: function get() {
                var t = this.getTextField();
                return t ? t.color : "#000000";
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var t = this.getTextField();
                return t ? t.fontSize : 0;
            },
            set: function set(t) {
                var e = this.getTextField();
                e && (e.fontSize = t);
            }
        }, {
            key: "color",
            get: function get() {
                return this.titleColor;
            },
            set: function set(t) {
                this.titleColor = t;
            }
        }, {
            key: "editable",
            set: function set(t) {
                this._titleObject && (this._titleObject.asTextInput.editable = t);
            },
            get: function get() {
                return this._titleObject instanceof t.GTextInput && this._titleObject.asTextInput.editable;
            }
        } ]);
        return V;
    }(t.GComponent);
    t.GLabel = V;
    t.GList = /* */ function(_t$GComponent4) {
        (0, _inherits2.default)(_class10, _t$GComponent4);
        var _super12 = _createSuper(_class10);
        function _class10() {
            var _this10;
            (0, _classCallCheck2.default)(this, _class10);
            _this10 = _super12.call(this), _this10._lineCount = 0, _this10._columnCount = 0, 
            _this10._lineGap = 0, _this10._columnGap = 0, _this10._lastSelectedIndex = 0, _this10._numItems = 0, 
            _this10._firstIndex = 0, _this10._curLineItemCount = 0, _this10._virtualListChanged = 0, 
            _this10.itemInfoVer = 0, _this10._trackBounds = !0, _this10._pool = new t.GObjectPool(), 
            _this10._layout = t.ListLayoutType.SingleColumn, _this10._autoResizeItem = !0, _this10._lastSelectedIndex = -1, 
            _this10._selectionMode = t.ListSelectionMode.Single, _this10.opaque = !0, _this10.scrollItemToViewOnClick = !0, 
            _this10._align = "left", _this10._verticalAlign = "top", _this10._container = new Laya.Sprite(), 
            _this10._displayObject.addChild(_this10._container);
            return _this10;
        }
        (0, _createClass2.default)(_class10, [ {
            key: "dispose",
            value: function dispose() {
                this._pool.clear(), (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getFromPool",
            value: function getFromPool(t) {
                t || (t = this._defaultItem);
                var e = this._pool.getObject(t);
                return e && (e.visible = !0), e;
            }
        }, {
            key: "returnToPool",
            value: function returnToPool(t) {
                t.displayObject.cacheAs = "none", this._pool.returnObject(t);
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(e, i) {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "addChildAt", this).call(this, e, i), 
                e instanceof t.GButton && (e.selected = !1, e.changeStateOnClick = !1), e.on(Laya.Event.CLICK, this, this.__clickItem), 
                e;
            }
        }, {
            key: "addItem",
            value: function addItem(e) {
                return e || (e = this._defaultItem), this.addChild(t.UIPackage.createObjectFromURL(e));
            }
        }, {
            key: "addItemFromPool",
            value: function addItemFromPool(t) {
                return this.addChild(this.getFromPool(t));
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(t, e) {
                var i = (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "removeChildAt", this).call(this, t);
                return e ? i.dispose() : i.off(Laya.Event.CLICK, this, this.__clickItem), i;
            }
        }, {
            key: "removeChildToPoolAt",
            value: function removeChildToPoolAt(t) {
                var e = (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "removeChildAt", this).call(this, t);
                this.returnToPool(e);
            }
        }, {
            key: "removeChildToPool",
            value: function removeChildToPool(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "removeChild", this).call(this, t), 
                this.returnToPool(t);
            }
        }, {
            key: "removeChildrenToPool",
            value: function removeChildrenToPool(t, e) {
                null == t && (t = 0), null == e && (e = -1), (e < 0 || e >= this._children.length) && (e = this._children.length - 1);
                for (var i = t; i <= e; ++i) {
                    this.removeChildToPoolAt(t);
                }
            }
        }, {
            key: "getSelection",
            value: function getSelection(e) {
                var i;
                if (e || (e = new Array()), this._virtual) for (i = 0; i < this._realNumItems; i++) {
                    var s = this._virtualItems[i];
                    if (s.obj instanceof t.GButton && s.obj.selected || null == s.obj && s.selected) {
                        var h = i;
                        if (this._loop && (h = i % this._numItems, -1 != e.indexOf(h))) continue;
                        e.push(h);
                    }
                } else {
                    var r = this._children.length;
                    for (i = 0; i < r; i++) {
                        var a = this._children[i];
                        a instanceof t.GButton && a.selected && e.push(i);
                    }
                }
                return e;
            }
        }, {
            key: "addSelection",
            value: function addSelection(e, i) {
                if (this._selectionMode != t.ListSelectionMode.None) {
                    var s;
                    if (this.checkVirtualList(), this._selectionMode == t.ListSelectionMode.Single && this.clearSelection(), 
                    i && this.scrollToView(e), this._lastSelectedIndex = e, this._virtual) {
                        var h = this._virtualItems[e];
                        h.obj && (s = h.obj), h.selected = !0;
                    } else s = this.getChildAt(e);
                    s instanceof t.GButton && !s.selected && (s.selected = !0, this.updateSelectionController(e));
                }
            }
        }, {
            key: "removeSelection",
            value: function removeSelection(e) {
                if (this._selectionMode != t.ListSelectionMode.None) {
                    var i;
                    if (this._virtual) {
                        var s = this._virtualItems[e];
                        s.obj && (i = s.obj), s.selected = !1;
                    } else i = this.getChildAt(e);
                    i instanceof t.GButton && (i.selected = !1);
                }
            }
        }, {
            key: "clearSelection",
            value: function clearSelection() {
                var e;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var i = this._virtualItems[e];
                    i.obj instanceof t.GButton && (i.obj.selected = !1), i.selected = !1;
                } else {
                    var s = this._children.length;
                    for (e = 0; e < s; e++) {
                        var h = this._children[e];
                        h instanceof t.GButton && (h.selected = !1);
                    }
                }
            }
        }, {
            key: "clearSelectionExcept",
            value: function clearSelectionExcept(e) {
                var i;
                if (this._virtual) for (i = 0; i < this._realNumItems; i++) {
                    var s = this._virtualItems[i];
                    s.obj != e && (s.obj instanceof t.GButton && (s.obj.selected = !1), s.selected = !1);
                } else {
                    var h = this._children.length;
                    for (i = 0; i < h; i++) {
                        var r = this._children[i];
                        r instanceof t.GButton && r != e && (r.selected = !1);
                    }
                }
            }
        }, {
            key: "selectAll",
            value: function selectAll() {
                this.checkVirtualList();
                var e, i = -1;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var s = this._virtualItems[e];
                    s.obj instanceof t.GButton && !s.obj.selected && (s.obj.selected = !0, i = e), s.selected = !0;
                } else {
                    var h = this._children.length;
                    for (e = 0; e < h; e++) {
                        var r = this._children[e];
                        r instanceof t.GButton && !r.selected && (r.selected = !0, i = e);
                    }
                }
                -1 != i && this.updateSelectionController(i);
            }
        }, {
            key: "selectNone",
            value: function selectNone() {
                this.clearSelection();
            }
        }, {
            key: "selectReverse",
            value: function selectReverse() {
                this.checkVirtualList();
                var e, i = -1;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var s = this._virtualItems[e];
                    s.obj instanceof t.GButton && (s.obj.selected = !s.obj.selected, s.obj.selected && (i = e)), 
                    s.selected = !s.selected;
                } else {
                    var h = this._children.length;
                    for (e = 0; e < h; e++) {
                        var r = this._children[e];
                        r instanceof t.GButton && (r.selected = !r.selected, r.selected && (i = e));
                    }
                }
                -1 != i && this.updateSelectionController(i);
            }
        }, {
            key: "handleArrowKey",
            value: function handleArrowKey(e) {
                var i = this.selectedIndex;
                if (-1 != i) switch (e) {
                  case 1:
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) --i >= 0 && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
                        for (var s = this._children[i], h = 0, r = i - 1; r >= 0; r--) {
                            var a = this._children[r];
                            if (a.y != s.y) {
                                s = a;
                                break;
                            }
                            h++;
                        }
                        for (;r >= 0; r--) {
                            if ((a = this._children[r]).y != s.y) {
                                this.clearSelection(), this.addSelection(r + h + 1, !0);
                                break;
                            }
                        }
                    }
                    break;

                  case 3:
                    if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) ++i < this.numItems && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                        s = this._children[i], h = 0;
                        var n = this._children.length;
                        for (r = i + 1; r < n; r++) {
                            if ((a = this._children[r]).x != s.x) {
                                s = a;
                                break;
                            }
                            h++;
                        }
                        for (;r < n; r++) {
                            if ((a = this._children[r]).x != s.x) {
                                this.clearSelection(), this.addSelection(r - h - 1, !0);
                                break;
                            }
                        }
                    }
                    break;

                  case 5:
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) ++i < this.numItems && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
                        for (s = this._children[i], h = 0, n = this._children.length, r = i + 1; r < n; r++) {
                            if ((a = this._children[r]).y != s.y) {
                                s = a;
                                break;
                            }
                            h++;
                        }
                        for (;r < n; r++) {
                            if ((a = this._children[r]).y != s.y) {
                                this.clearSelection(), this.addSelection(r - h - 1, !0);
                                break;
                            }
                        }
                    }
                    break;

                  case 7:
                    if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) --i >= 0 && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                        for (s = this._children[i], h = 0, r = i - 1; r >= 0; r--) {
                            if ((a = this._children[r]).x != s.x) {
                                s = a;
                                break;
                            }
                            h++;
                        }
                        for (;r >= 0; r--) {
                            if ((a = this._children[r]).x != s.x) {
                                this.clearSelection(), this.addSelection(r + h + 1, !0);
                                break;
                            }
                        }
                    }
                }
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(e) {
                if (!this._scrollPane || !this._scrollPane.isDragged) {
                    var i = t.GObject.cast(e.currentTarget);
                    this.setSelectionOnEvent(i, e), this._scrollPane && this.scrollItemToViewOnClick && this._scrollPane.scrollToView(i, !0), 
                    this.dispatchItemEvent(i, t.Events.createEvent(t.Events.CLICK_ITEM, this.displayObject, e));
                }
            }
        }, {
            key: "dispatchItemEvent",
            value: function dispatchItemEvent(e, i) {
                this.displayObject.event(t.Events.CLICK_ITEM, [ e, i ]);
            }
        }, {
            key: "setSelectionOnEvent",
            value: function setSelectionOnEvent(e, i) {
                if (e instanceof t.GButton && this._selectionMode != t.ListSelectionMode.None) {
                    var s = !1, h = this.childIndexToItemIndex(this.getChildIndex(e));
                    if (this._selectionMode == t.ListSelectionMode.Single) e.selected || (this.clearSelectionExcept(e), 
                    e.selected = !0); else if (i.shiftKey) {
                        if (!e.selected) if (-1 != this._lastSelectedIndex) {
                            var r, a = Math.min(this._lastSelectedIndex, h), n = Math.max(this._lastSelectedIndex, h);
                            if (n = Math.min(n, this.numItems - 1), this._virtual) for (r = a; r <= n; r++) {
                                var o = this._virtualItems[r];
                                o.obj instanceof t.GButton && (o.obj.selected = !0), o.selected = !0;
                            } else for (r = a; r <= n; r++) {
                                var l = this.getChildAt(r);
                                l instanceof t.GButton && (l.selected = !0);
                            }
                            s = !0;
                        } else e.selected = !0;
                    } else i.ctrlKey || this._selectionMode == t.ListSelectionMode.Multiple_SingleClick ? e.selected = !e.selected : e.selected ? this.clearSelectionExcept(e) : (this.clearSelectionExcept(e), 
                    e.selected = !0);
                    s || (this._lastSelectedIndex = h), e.selected && this.updateSelectionController(h);
                }
            }
        }, {
            key: "resizeToFit",
            value: function resizeToFit(e, i) {
                null == e && (e = 1e5), i = i || 0, this.ensureBoundsCorrect();
                var s = this.numItems;
                if (e > s && (e = s), this._virtual) {
                    var h = Math.ceil(e / this._curLineItemCount);
                    this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = h * this._itemSize.y + Math.max(0, h - 1) * this._lineGap : this.viewWidth = h * this._itemSize.x + Math.max(0, h - 1) * this._columnGap;
                } else if (0 == e) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                    for (var r = e - 1, a = null; r >= 0 && (a = this.getChildAt(r), this.foldInvisibleItems && !a.visible); ) {
                        r--;
                    }
                    if (r < 0) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                        var n = 0;
                        this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? ((n = a.y + a.height) < i && (n = i), 
                        this.viewHeight = n) : ((n = a.x + a.width) < i && (n = i), this.viewWidth = n);
                    }
                }
            }
        }, {
            key: "getMaxItemWidth",
            value: function getMaxItemWidth() {
                for (var t = this._children.length, e = 0, i = 0; i < t; i++) {
                    var s = this.getChildAt(i);
                    s.width > e && (e = s.width);
                }
                return e;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "handleSizeChanged", this).call(this), 
                this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0);
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "handleControllerChanged", this).call(this, t), 
                this._selectionController == t && (this.selectedIndex = t.selectedIndex);
            }
        }, {
            key: "updateSelectionController",
            value: function updateSelectionController(t) {
                if (this._selectionController && !this._selectionController.changing && t < this._selectionController.pageCount) {
                    var e = this._selectionController;
                    this._selectionController = null, e.selectedIndex = t, this._selectionController = e;
                }
            }
        }, {
            key: "shouldSnapToNext",
            value: function shouldSnapToNext(e, i, s) {
                return e < 0 && i > t.UIConfig.defaultScrollSnappingThreshold * s || e > 0 && i > (1 - t.UIConfig.defaultScrollSnappingThreshold) * s || 0 == e && i > s / 2;
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function getSnappingPositionWithDir(e, i, s, h, r) {
                var a, n, o;
                return this._virtual ? (r || (r = new Laya.Point()), this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (a = i, 
                W = i, n = this.getIndexOnPos1(!1), i = W, n < this._virtualItems.length && n < this._realNumItems && (o = this._virtualItems[n].height, 
                this.shouldSnapToNext(h, a - i, o) && (i += o + this._lineGap))) : this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical ? (a = e, 
                W = e, n = this.getIndexOnPos2(!1), e = W, n < this._virtualItems.length && n < this._realNumItems && (o = this._virtualItems[n].width, 
                this.shouldSnapToNext(s, a - e, o) && (e += o + this._columnGap))) : (a = e, W = e, 
                n = this.getIndexOnPos3(!1), e = W, n < this._virtualItems.length && n < this._realNumItems && (o = this._virtualItems[n].width, 
                this.shouldSnapToNext(s, a - e, o) && (e += o + this._columnGap))), r.x = e, r.y = i, 
                r) : (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "getSnappingPositionWithDir", this).call(this, e, i, s, h, r);
            }
        }, {
            key: "scrollToView",
            value: function scrollToView(e, i, s) {
                if (this._virtual) {
                    if (0 == this._numItems) return;
                    if (this.checkVirtualList(), e >= this._virtualItems.length) throw new Error("Invalid child index: " + e + ">" + this._virtualItems.length);
                    var h;
                    this._loop && (e = Math.floor(this._firstIndex / this._numItems) * this._numItems + e);
                    var r, a = this._virtualItems[e], n = 0;
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                        for (r = this._curLineItemCount - 1; r < e; r += this._curLineItemCount) {
                            n += this._virtualItems[r].height + this._lineGap;
                        }
                        h = new Laya.Rectangle(0, n, this._itemSize.x, a.height);
                    } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                        for (r = this._curLineItemCount - 1; r < e; r += this._curLineItemCount) {
                            n += this._virtualItems[r].width + this._columnGap;
                        }
                        h = new Laya.Rectangle(n, 0, a.width, this._itemSize.y);
                    } else {
                        var o = e / (this._curLineItemCount * this._curLineItemCount2);
                        h = new Laya.Rectangle(o * this.viewWidth + e % this._curLineItemCount * (a.width + this._columnGap), e / this._curLineItemCount % this._curLineItemCount2 * (a.height + this._lineGap), a.width, a.height);
                    }
                    this._scrollPane && this._scrollPane.scrollToView(h, i, s);
                } else {
                    var l = this.getChildAt(e);
                    this._scrollPane ? this._scrollPane.scrollToView(l, i, s) : this._parent && this._parent.scrollPane && this._parent.scrollPane.scrollToView(l, i, s);
                }
            }
        }, {
            key: "getFirstChildInView",
            value: function getFirstChildInView() {
                return this.childIndexToItemIndex((0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "getFirstChildInView", this).call(this));
            }
        }, {
            key: "childIndexToItemIndex",
            value: function childIndexToItemIndex(e) {
                if (!this._virtual) return e;
                if (this._layout == t.ListLayoutType.Pagination) {
                    for (var i = this._firstIndex; i < this._realNumItems; i++) {
                        if (this._virtualItems[i].obj && --e < 0) return i;
                    }
                    return e;
                }
                return e += this._firstIndex, this._loop && this._numItems > 0 && (e %= this._numItems), 
                e;
            }
        }, {
            key: "itemIndexToChildIndex",
            value: function itemIndexToChildIndex(e) {
                if (!this._virtual) return e;
                if (this._layout == t.ListLayoutType.Pagination) return this.getChildIndex(this._virtualItems[e].obj);
                if (this._loop && this._numItems > 0) {
                    var i = this._firstIndex % this._numItems;
                    e >= i ? e -= i : e = this._numItems - i + e;
                } else e -= this._firstIndex;
                return e;
            }
        }, {
            key: "setVirtual",
            value: function setVirtual() {
                this._setVirtual(!1);
            }
        }, {
            key: "setVirtualAndLoop",
            value: function setVirtualAndLoop() {
                this._setVirtual(!0);
            }
        }, {
            key: "_setVirtual",
            value: function _setVirtual(e) {
                if (!this._virtual) {
                    if (null == this._scrollPane) throw new Error("Virtual list must be scrollable!");
                    if (e) {
                        if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.FlowVertical) throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
                        this._scrollPane.bouncebackEffect = !1;
                    }
                    if (this._virtual = !0, this._loop = e, this._virtualItems = new Array(), this.removeChildrenToPool(), 
                    null == this._itemSize) {
                        this._itemSize = new Laya.Point();
                        var i = this.getFromPool(null);
                        if (null == i) throw new Error("Virtual List must have a default list item resource.");
                        this._itemSize.x = i.width, this._itemSize.y = i.height, this.returnToPool(i);
                    }
                    this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (this._scrollPane.scrollStep = this._itemSize.y, 
                    this._loop && (this._scrollPane._loop = 2)) : (this._scrollPane.scrollStep = this._itemSize.x, 
                    this._loop && (this._scrollPane._loop = 1)), this.on(t.Events.SCROLL, this, this.__scrolled), 
                    this.setVirtualListChangedFlag(!0);
                }
            }
        }, {
            key: "refreshVirtualList",
            value: function refreshVirtualList() {
                this.setVirtualListChangedFlag(!1);
            }
        }, {
            key: "checkVirtualList",
            value: function checkVirtualList() {
                0 != this._virtualListChanged && (this._refreshVirtualList(), Laya.timer.clear(this, this._refreshVirtualList));
            }
        }, {
            key: "setVirtualListChangedFlag",
            value: function setVirtualListChangedFlag(t) {
                t ? this._virtualListChanged = 2 : 0 == this._virtualListChanged && (this._virtualListChanged = 1), 
                Laya.timer.callLater(this, this._refreshVirtualList);
            }
        }, {
            key: "_refreshVirtualList",
            value: function _refreshVirtualList() {
                if (this._displayObject) {
                    var e = 2 == this._virtualListChanged;
                    this._virtualListChanged = 0, this._eventLocked = !0, e && (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.SingleRow ? this._curLineItemCount = 1 : this._layout == t.ListLayoutType.FlowHorizontal ? this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : this._layout == t.ListLayoutType.FlowVertical ? this._lineCount > 0 ? this._curLineItemCount = this._lineCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : (this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)), this._lineCount > 0 ? this._curLineItemCount2 = this._lineCount : (this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap)), 
                    this._curLineItemCount2 <= 0 && (this._curLineItemCount2 = 1))));
                    var i = 0, s = 0;
                    if (this._realNumItems > 0) {
                        var h, r = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount, a = Math.min(this._curLineItemCount, this._realNumItems);
                        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                            for (h = 0; h < r; h += this._curLineItemCount) {
                                i += this._virtualItems[h].height + this._lineGap;
                            }
                            if (i > 0 && (i -= this._lineGap), this._autoResizeItem) s = this._scrollPane.viewWidth; else {
                                for (h = 0; h < a; h++) {
                                    s += this._virtualItems[h].width + this._columnGap;
                                }
                                s > 0 && (s -= this._columnGap);
                            }
                        } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                            for (h = 0; h < r; h += this._curLineItemCount) {
                                s += this._virtualItems[h].width + this._columnGap;
                            }
                            if (s > 0 && (s -= this._columnGap), this._autoResizeItem) i = this._scrollPane.viewHeight; else {
                                for (h = 0; h < a; h++) {
                                    i += this._virtualItems[h].height + this._lineGap;
                                }
                                i > 0 && (i -= this._lineGap);
                            }
                        } else s = Math.ceil(r / (this._curLineItemCount * this._curLineItemCount2)) * this.viewWidth, 
                        i = this.viewHeight;
                    }
                    this.handleAlign(s, i), this._scrollPane.setContentSize(s, i), this._eventLocked = !1, 
                    this.handleScroll(!0);
                }
            }
        }, {
            key: "__scrolled",
            value: function __scrolled(t) {
                this.handleScroll(!1);
            }
        }, {
            key: "getIndexOnPos1",
            value: function getIndexOnPos1(t) {
                if (this._realNumItems < this._curLineItemCount) return W = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).y) > W) {
                        for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) {
                            if ((i -= this._virtualItems[e].height + this._lineGap) <= W) return W = i, e;
                        }
                        return W = 0, 0;
                    }
                    for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((s = i + this._virtualItems[e].height + this._lineGap) > W) return W = i, e;
                        i = s;
                    }
                    return W = i, this._realNumItems - this._curLineItemCount;
                }
                for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                    if ((s = i + this._virtualItems[e].height + this._lineGap) > W) return W = i, e;
                    i = s;
                }
                return W = i, this._realNumItems - this._curLineItemCount;
            }
        }, {
            key: "getIndexOnPos2",
            value: function getIndexOnPos2(t) {
                if (this._realNumItems < this._curLineItemCount) return W = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).x) > W) {
                        for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) {
                            if ((i -= this._virtualItems[e].width + this._columnGap) <= W) return W = i, e;
                        }
                        return W = 0, 0;
                    }
                    for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((s = i + this._virtualItems[e].width + this._columnGap) > W) return W = i, e;
                        i = s;
                    }
                    return W = i, this._realNumItems - this._curLineItemCount;
                }
                for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                    if ((s = i + this._virtualItems[e].width + this._columnGap) > W) return W = i, e;
                    i = s;
                }
                return W = i, this._realNumItems - this._curLineItemCount;
            }
        }, {
            key: "getIndexOnPos3",
            value: function getIndexOnPos3(t) {
                if (this._realNumItems < this._curLineItemCount) return W = 0, 0;
                var e, i, s = this.viewWidth, h = Math.floor(W / s), r = h * (this._curLineItemCount * this._curLineItemCount2), a = h * s;
                for (e = 0; e < this._curLineItemCount; e++) {
                    if ((i = a + this._virtualItems[r + e].width + this._columnGap) > W) return W = a, 
                    r + e;
                    a = i;
                }
                return W = a, r + this._curLineItemCount - 1;
            }
        }, {
            key: "handleScroll",
            value: function handleScroll(e) {
                if (!this._eventLocked) {
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                        for (var i = 0; this.handleScroll1(e); ) {
                            if (e = !1, ++i > 20) {
                                console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                                break;
                            }
                        }
                        this.handleArchOrder1();
                    } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                        for (i = 0; this.handleScroll2(e); ) {
                            if (e = !1, ++i > 20) {
                                console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                                break;
                            }
                        }
                        this.handleArchOrder2();
                    } else this.handleScroll3(e);
                    this._boundsChanged = !1;
                }
            }
        }, {
            key: "handleScroll1",
            value: function handleScroll1(e) {
                var i = this._scrollPane.scrollingPosY, s = i + this._scrollPane.viewHeight, h = s == this._scrollPane.contentHeight;
                W = i;
                var r = this.getIndexOnPos1(e);
                if (i = W, r == this._firstIndex && !e) return !1;
                var a = this._firstIndex;
                this._firstIndex = r;
                var n, o, l, _, d, c = r, u = a > r, g = this.numChildren, p = a + g - 1, y = u ? p : a, f = 0, m = i, v = 0, w = 0, C = this._defaultItem, b = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                for (this.itemInfoVer++; c < this._realNumItems && (h || m < s); ) {
                    if ((null == (o = this._virtualItems[c]).obj || e) && (null != this.itemProvider && (null == (C = this.itemProvider.runWith(c % this._numItems)) && (C = this._defaultItem), 
                    C = t.UIPackage.normalizeURL(C)), o.obj && o.obj.resourceURL != C && (o.obj instanceof t.GButton && (o.selected = o.obj.selected), 
                    this.removeChildToPool(o.obj), o.obj = null)), null == o.obj) {
                        if (u) {
                            for (d = y; d >= a; d--) {
                                if ((l = this._virtualItems[d]).obj && l.updateFlag != this.itemInfoVer && l.obj.resourceURL == C) {
                                    l.obj instanceof t.GButton && (l.selected = l.obj.selected), o.obj = l.obj, l.obj = null, 
                                    d == y && y--;
                                    break;
                                }
                            }
                        } else for (d = y; d <= p; d++) {
                            if ((l = this._virtualItems[d]).obj && l.updateFlag != this.itemInfoVer && l.obj.resourceURL == C) {
                                l.obj instanceof t.GButton && (l.selected = l.obj.selected), o.obj = l.obj, l.obj = null, 
                                d == y && y++;
                                break;
                            }
                        }
                        o.obj ? this.setChildIndex(o.obj, u ? c - r : this.numChildren) : (o.obj = this._pool.getObject(C), 
                        u ? this.addChildAt(o.obj, c - r) : this.addChild(o.obj)), o.obj instanceof t.GButton && (o.obj.selected = o.selected), 
                        n = !0;
                    } else n = e;
                    n && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleColumn || this._columnCount > 0) && o.obj.setSize(b, o.obj.height, !0), 
                    this.itemRenderer.runWith([ c % this._numItems, o.obj ]), c % this._curLineItemCount == 0 && (v += Math.ceil(o.obj.height) - o.height, 
                    c == r && a > r && (w = Math.ceil(o.obj.height) - o.height)), o.width = Math.ceil(o.obj.width), 
                    o.height = Math.ceil(o.obj.height)), o.updateFlag = this.itemInfoVer, o.obj.setXY(f, m), 
                    c == r && (s += o.height), f += o.width + this._columnGap, c % this._curLineItemCount == this._curLineItemCount - 1 && (f = 0, 
                    m += o.height + this._lineGap), c++;
                }
                for (_ = 0; _ < g; _++) {
                    (o = this._virtualItems[a + _]).updateFlag != this.itemInfoVer && o.obj && (o.obj instanceof t.GButton && (o.selected = o.obj.selected), 
                    this.removeChildToPool(o.obj), o.obj = null);
                }
                for (g = this._children.length, _ = 0; _ < g; _++) {
                    var S = this._virtualItems[r + _].obj;
                    this._children[_] != S && this.setChildIndex(S, _);
                }
                return 0 == v && 0 == w || this._scrollPane.changeContentSizeOnScrolling(0, v, 0, w), 
                c > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y;
            }
        }, {
            key: "handleScroll2",
            value: function handleScroll2(e) {
                var i = this._scrollPane.scrollingPosX, s = i + this._scrollPane.viewWidth, h = i == this._scrollPane.contentWidth;
                W = i;
                var r = this.getIndexOnPos2(e);
                if (i = W, r == this._firstIndex && !e) return !1;
                var a = this._firstIndex;
                this._firstIndex = r;
                var n, o, l, _, d, c = r, u = a > r, g = this.numChildren, p = a + g - 1, y = u ? p : a, f = i, m = 0, v = 0, w = 0, C = this._defaultItem, b = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                for (this.itemInfoVer++; c < this._realNumItems && (h || f < s); ) {
                    if ((null == (o = this._virtualItems[c]).obj || e) && (null != this.itemProvider && (null == (C = this.itemProvider.runWith(c % this._numItems)) && (C = this._defaultItem), 
                    C = t.UIPackage.normalizeURL(C)), o.obj && o.obj.resourceURL != C && (o.obj instanceof t.GButton && (o.selected = o.obj.selected), 
                    this.removeChildToPool(o.obj), o.obj = null)), null == o.obj) {
                        if (u) {
                            for (d = y; d >= a; d--) {
                                if ((l = this._virtualItems[d]).obj && l.updateFlag != this.itemInfoVer && l.obj.resourceURL == C) {
                                    l.obj instanceof t.GButton && (l.selected = l.obj.selected), o.obj = l.obj, l.obj = null, 
                                    d == y && y--;
                                    break;
                                }
                            }
                        } else for (d = y; d <= p; d++) {
                            if ((l = this._virtualItems[d]).obj && l.updateFlag != this.itemInfoVer && l.obj.resourceURL == C) {
                                l.obj instanceof t.GButton && (l.selected = l.obj.selected), o.obj = l.obj, l.obj = null, 
                                d == y && y++;
                                break;
                            }
                        }
                        o.obj ? this.setChildIndex(o.obj, u ? c - r : this.numChildren) : (o.obj = this._pool.getObject(C), 
                        u ? this.addChildAt(o.obj, c - r) : this.addChild(o.obj)), o.obj instanceof t.GButton && (o.obj.selected = o.selected), 
                        n = !0;
                    } else n = e;
                    n && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleRow || this._lineCount > 0) && o.obj.setSize(o.obj.width, b, !0), 
                    this.itemRenderer.runWith([ c % this._numItems, o.obj ]), c % this._curLineItemCount == 0 && (v += Math.ceil(o.obj.width) - o.width, 
                    c == r && a > r && (w = Math.ceil(o.obj.width) - o.width)), o.width = Math.ceil(o.obj.width), 
                    o.height = Math.ceil(o.obj.height)), o.updateFlag = this.itemInfoVer, o.obj.setXY(f, m), 
                    c == r && (s += o.width), m += o.height + this._lineGap, c % this._curLineItemCount == this._curLineItemCount - 1 && (m = 0, 
                    f += o.width + this._columnGap), c++;
                }
                for (_ = 0; _ < g; _++) {
                    (o = this._virtualItems[a + _]).updateFlag != this.itemInfoVer && o.obj && (o.obj instanceof t.GButton && (o.selected = o.obj.selected), 
                    this.removeChildToPool(o.obj), o.obj = null);
                }
                for (g = this._children.length, _ = 0; _ < g; _++) {
                    var S = this._virtualItems[r + _].obj;
                    this._children[_] != S && this.setChildIndex(S, _);
                }
                return 0 == v && 0 == w || this._scrollPane.changeContentSizeOnScrolling(v, 0, w, 0), 
                c > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x;
            }
        }, {
            key: "handleScroll3",
            value: function handleScroll3(e) {
                var i = this._scrollPane.scrollingPosX;
                W = i;
                var s = this.getIndexOnPos3(e);
                if (i = W, s != this._firstIndex || e) {
                    var h = this._firstIndex;
                    this._firstIndex = s;
                    var r, a, n, o, l, _ = h, d = this._virtualItems.length, c = this._curLineItemCount * this._curLineItemCount2, u = s % this._curLineItemCount, g = this.viewWidth, p = Math.floor(s / c) * c, y = p + 2 * c, f = this._defaultItem, m = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount, v = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
                    for (this.itemInfoVer++, a = p; a < y; a++) {
                        if (!(a >= this._realNumItems)) {
                            if (l = a % this._curLineItemCount, a - p < c) {
                                if (l < u) continue;
                            } else if (l > u) continue;
                            (n = this._virtualItems[a]).updateFlag = this.itemInfoVer;
                        }
                    }
                    var w = null, C = 0;
                    for (a = p; a < y; a++) {
                        if (!(a >= this._realNumItems) && (n = this._virtualItems[a]).updateFlag == this.itemInfoVer) {
                            if (null == n.obj) {
                                for (;_ < d; ) {
                                    if ((o = this._virtualItems[_]).obj && o.updateFlag != this.itemInfoVer) {
                                        o.obj instanceof t.GButton && (o.selected = o.obj.selected), n.obj = o.obj, o.obj = null;
                                        break;
                                    }
                                    _++;
                                }
                                -1 == C && (C = this.getChildIndex(w) + 1), null == n.obj ? (null != this.itemProvider && (null == (f = this.itemProvider.runWith(a % this._numItems)) && (f = this._defaultItem), 
                                f = t.UIPackage.normalizeURL(f)), n.obj = this._pool.getObject(f), this.addChildAt(n.obj, C)) : C = this.setChildIndexBefore(n.obj, C), 
                                C++, n.obj instanceof t.GButton && (n.obj.selected = n.selected), r = !0;
                            } else r = e, C = -1, w = n.obj;
                            r && (this._autoResizeItem && (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount ? n.obj.setSize(m, v, !0) : this._curLineItemCount == this._columnCount ? n.obj.setSize(m, n.obj.height, !0) : this._curLineItemCount2 == this._lineCount && n.obj.setSize(n.obj.width, v, !0)), 
                            this.itemRenderer.runWith([ a % this._numItems, n.obj ]), n.width = Math.ceil(n.obj.width), 
                            n.height = Math.ceil(n.obj.height));
                        }
                    }
                    var b = p / c * g, S = b, x = 0, I = 0;
                    for (a = p; a < y; a++) {
                        a >= this._realNumItems || ((n = this._virtualItems[a]).updateFlag == this.itemInfoVer && n.obj.setXY(S, x), 
                        n.height > I && (I = n.height), a % this._curLineItemCount == this._curLineItemCount - 1 ? (S = b, 
                        x += I + this._lineGap, I = 0, a == p + c - 1 && (S = b += g, x = 0)) : S += n.width + this._columnGap);
                    }
                    for (a = _; a < d; a++) {
                        (n = this._virtualItems[a]).updateFlag != this.itemInfoVer && n.obj && (n.obj instanceof t.GButton && (n.selected = n.obj.selected), 
                        this.removeChildToPool(n.obj), n.obj = null);
                    }
                }
            }
        }, {
            key: "handleArchOrder1",
            value: function handleArchOrder1() {
                if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                    for (var e = this._scrollPane.posY + this.viewHeight / 2, i = Number.POSITIVE_INFINITY, s = 0, h = 0, r = this.numChildren, a = 0; a < r; a++) {
                        var n = this.getChildAt(a);
                        this.foldInvisibleItems && !n.visible || (s = Math.abs(e - n.y - n.height / 2)) < i && (i = s, 
                        h = a);
                    }
                    this.apexIndex = h;
                }
            }
        }, {
            key: "handleArchOrder2",
            value: function handleArchOrder2() {
                if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                    for (var e = this._scrollPane.posX + this.viewWidth / 2, i = Number.POSITIVE_INFINITY, s = 0, h = 0, r = this.numChildren, a = 0; a < r; a++) {
                        var n = this.getChildAt(a);
                        this.foldInvisibleItems && !n.visible || (s = Math.abs(e - n.x - n.width / 2)) < i && (i = s, 
                        h = a);
                    }
                    this.apexIndex = h;
                }
            }
        }, {
            key: "handleAlign",
            value: function handleAlign(t, e) {
                var i = 0, s = 0;
                e < this.viewHeight && ("middle" == this._verticalAlign ? s = Math.floor((this.viewHeight - e) / 2) : "bottom" == this._verticalAlign && (s = this.viewHeight - e)), 
                t < this.viewWidth && ("center" == this._align ? i = Math.floor((this.viewWidth - t) / 2) : "right" == this._align && (i = this.viewWidth - t)), 
                i == this._alignOffset.x && s == this._alignOffset.y || (this._alignOffset.setTo(i, s), 
                this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y));
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                if (!this._virtual) {
                    var e, i, s, h, r, a = 0, n = 0, o = 0, l = 0, _ = 0, d = 0, c = 0, u = this._children.length, g = this.viewWidth, p = this.viewHeight, y = 0, f = 0;
                    if (this._layout == t.ListLayoutType.SingleColumn) {
                        for (e = 0; e < u; e++) {
                            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != n && (n += this._lineGap), 
                            i.y = n, this._autoResizeItem && i.setSize(g, i.height, !0), n += Math.ceil(i.height), 
                            i.width > o && (o = i.width));
                        }
                        if ((h = n) <= p && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) for (g += this._scrollPane.vtScrollBar.width, 
                        e = 0; e < u; e++) {
                            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(g, i.height, !0), 
                            i.width > o && (o = i.width));
                        }
                        s = Math.ceil(o);
                    } else if (this._layout == t.ListLayoutType.SingleRow) {
                        for (e = 0; e < u; e++) {
                            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                            i.x = a, this._autoResizeItem && i.setSize(i.width, p, !0), a += Math.ceil(i.width), 
                            i.height > l && (l = i.height));
                        }
                        if ((s = a) <= g && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) for (p += this._scrollPane.hzScrollBar.height, 
                        e = 0; e < u; e++) {
                            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(i.width, p, !0), 
                            i.height > l && (l = i.height));
                        }
                        h = Math.ceil(l);
                    } else if (this._layout == t.ListLayoutType.FlowHorizontal) {
                        if (this._autoResizeItem && this._columnCount > 0) {
                            for (e = 0; e < u; e++) {
                                if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (y += i.sourceWidth, 
                                ++_ == this._columnCount || e == u - 1)) {
                                    for (r = (g - y - (_ - 1) * this._columnGap) / y, a = 0, _ = f; _ <= e; _++) {
                                        i = this.getChildAt(_), this.foldInvisibleItems && !i.visible || (i.setXY(a, n), 
                                        _ < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * r), i.height, !0), 
                                        a += Math.ceil(i.width) + this._columnGap) : i.setSize(g - a, i.height, !0), i.height > l && (l = i.height));
                                    }
                                    n += Math.ceil(l) + this._lineGap, l = 0, _ = 0, f = e + 1, y = 0;
                                }
                            }
                            h = n + Math.ceil(l), s = g;
                        } else {
                            for (e = 0; e < u; e++) {
                                i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                                (0 != this._columnCount && _ >= this._columnCount || 0 == this._columnCount && a + i.width > g && 0 != l) && (a = 0, 
                                n += Math.ceil(l) + this._lineGap, l = 0, _ = 0), i.setXY(a, n), (a += Math.ceil(i.width)) > o && (o = a), 
                                i.height > l && (l = i.height), _++);
                            }
                            h = n + Math.ceil(l), s = Math.ceil(o);
                        }
                    } else if (this._layout == t.ListLayoutType.FlowVertical) {
                        if (this._autoResizeItem && this._lineCount > 0) {
                            for (e = 0; e < u; e++) {
                                if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (y += i.sourceHeight, 
                                ++_ == this._lineCount || e == u - 1)) {
                                    for (r = (p - y - (_ - 1) * this._lineGap) / y, n = 0, _ = f; _ <= e; _++) {
                                        i = this.getChildAt(_), this.foldInvisibleItems && !i.visible || (i.setXY(a, n), 
                                        _ < e ? (i.setSize(i.width, i.sourceHeight + Math.round(i.sourceHeight * r), !0), 
                                        n += Math.ceil(i.height) + this._lineGap) : i.setSize(i.width, p - n, !0), i.width > o && (o = i.width));
                                    }
                                    a += Math.ceil(o) + this._columnGap, o = 0, _ = 0, f = e + 1, y = 0;
                                }
                            }
                            s = a + Math.ceil(o), h = p;
                        } else {
                            for (e = 0; e < u; e++) {
                                i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != n && (n += this._lineGap), 
                                (0 != this._lineCount && _ >= this._lineCount || 0 == this._lineCount && n + i.height > p && 0 != o) && (n = 0, 
                                a += Math.ceil(o) + this._columnGap, o = 0, _ = 0), i.setXY(a, n), (n += Math.ceil(i.height)) > l && (l = n), 
                                i.width > o && (o = i.width), _++);
                            }
                            s = a + Math.ceil(o), h = Math.ceil(l);
                        }
                    } else {
                        var m;
                        if (this._autoResizeItem && this._lineCount > 0 && (m = Math.floor((p - (this._lineCount - 1) * this._lineGap) / this._lineCount)), 
                        this._autoResizeItem && this._columnCount > 0) {
                            for (e = 0; e < u; e++) {
                                if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (0 == _ && (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && n + i.height > p) && (d++, 
                                n = 0, c = 0), y += i.sourceWidth, ++_ == this._columnCount || e == u - 1)) {
                                    for (r = (g - y - (_ - 1) * this._columnGap) / y, a = 0, _ = f; _ <= e; _++) {
                                        i = this.getChildAt(_), this.foldInvisibleItems && !i.visible || (i.setXY(d * g + a, n), 
                                        _ < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * r), this._lineCount > 0 ? m : i.height, !0), 
                                        a += Math.ceil(i.width) + this._columnGap) : i.setSize(g - a, this._lineCount > 0 ? m : i.height, !0), 
                                        i.height > l && (l = i.height));
                                    }
                                    n += Math.ceil(l) + this._lineGap, l = 0, _ = 0, f = e + 1, y = 0, c++;
                                }
                            }
                        } else for (e = 0; e < u; e++) {
                            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                            this._autoResizeItem && this._lineCount > 0 && i.setSize(i.width, m, !0), (0 != this._columnCount && _ >= this._columnCount || 0 == this._columnCount && a + i.width > g && 0 != l) && (a = 0, 
                            n += Math.ceil(l) + this._lineGap, l = 0, _ = 0, c++, (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && n + i.height > p && 0 != o) && (d++, 
                            n = 0, c = 0)), i.setXY(d * g + a, n), (a += Math.ceil(i.width)) > o && (o = a), 
                            i.height > l && (l = i.height), _++);
                        }
                        h = d > 0 ? p : n + Math.ceil(l), s = (d + 1) * g;
                    }
                    this.handleAlign(s, h), this.setBounds(0, 0, s, h);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(e, i) {
                var s;
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "setup_beforeAdd", this).call(this, e, i), 
                e.seek(i, 5), this._layout = e.readByte(), this._selectionMode = e.readByte(), s = e.readByte(), 
                this._align = 0 == s ? "left" : 1 == s ? "center" : "right", s = e.readByte(), this._verticalAlign = 0 == s ? "top" : 1 == s ? "middle" : "bottom", 
                this._lineGap = e.getInt16(), this._columnGap = e.getInt16(), this._lineCount = e.getInt16(), 
                this._columnCount = e.getInt16(), this._autoResizeItem = e.readBool(), this._childrenRenderOrder = e.readByte(), 
                this._apexIndex = e.getInt16(), e.readBool() && (this._margin.top = e.getInt32(), 
                this._margin.bottom = e.getInt32(), this._margin.left = e.getInt32(), this._margin.right = e.getInt32());
                var h = e.readByte();
                if (h == t.OverflowType.Scroll) {
                    var r = e.pos;
                    e.seek(i, 7), this.setupScroll(e), e.pos = r;
                } else this.setupOverflow(h);
                e.readBool() && e.skip(8), e.version >= 2 && (this.scrollItemToViewOnClick = e.readBool(), 
                this.foldInvisibleItems = e.readBool()), e.seek(i, 8), this._defaultItem = e.readS(), 
                this.readItems(e);
            }
        }, {
            key: "readItems",
            value: function readItems(t) {
                var e, i, s, h;
                for (e = t.getInt16(), i = 0; i < e; i++) {
                    if (s = t.getInt16(), s += t.pos, null != (h = t.readS()) || (h = this._defaultItem)) {
                        var r = this.getFromPool(h);
                        r && (this.addChild(r), this.setupItem(t, r)), t.pos = s;
                    } else t.pos = s;
                }
            }
        }, {
            key: "setupItem",
            value: function setupItem(e, i) {
                var s, h, r;
                if (null != (s = e.readS()) && (i.text = s), null != (s = e.readS()) && i instanceof t.GButton && (i.selectedTitle = s), 
                null != (s = e.readS()) && (i.icon = s), null != (s = e.readS()) && i instanceof t.GButton && (i.selectedIcon = s), 
                null != (s = e.readS()) && (i.name = s), i instanceof t.GComponent) {
                    for (h = e.getInt16(), r = 0; r < h; r++) {
                        var a = i.getController(e.readS());
                        s = e.readS(), a && (a.selectedPageId = s);
                    }
                    if (e.version >= 2) for (h = e.getInt16(), r = 0; r < h; r++) {
                        var n = e.readS(), o = e.getInt16(), l = e.readS(), _ = i.getChildByPath(n);
                        _ && _.setProp(o, l);
                    }
                }
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class10.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6);
                var i = t.getInt16();
                -1 != i && (this._selectionController = this._parent.getControllerAt(i));
            }
        }, {
            key: "layout",
            get: function get() {
                return this._layout;
            },
            set: function set(t) {
                this._layout != t && (this._layout = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "lineCount",
            get: function get() {
                return this._lineCount;
            },
            set: function set(e) {
                this._lineCount != e && (this._lineCount = e, this._layout != t.ListLayoutType.FlowVertical && this._layout != t.ListLayoutType.Pagination || (this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0)));
            }
        }, {
            key: "columnCount",
            get: function get() {
                return this._columnCount;
            },
            set: function set(e) {
                this._columnCount != e && (this._columnCount = e, this._layout != t.ListLayoutType.FlowHorizontal && this._layout != t.ListLayoutType.Pagination || (this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0)));
            }
        }, {
            key: "lineGap",
            get: function get() {
                return this._lineGap;
            },
            set: function set(t) {
                this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "columnGap",
            get: function get() {
                return this._columnGap;
            },
            set: function set(t) {
                this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(t) {
                this._align != t && (this._align = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._verticalAlign;
            },
            set: function set(t) {
                this._verticalAlign != t && (this._verticalAlign = t, this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "virtualItemSize",
            get: function get() {
                return this._itemSize;
            },
            set: function set(t) {
                this._virtual && (null == this._itemSize && (this._itemSize = new Laya.Point()), 
                this._itemSize.setTo(t.x, t.y), this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "defaultItem",
            get: function get() {
                return this._defaultItem;
            },
            set: function set(e) {
                this._defaultItem = t.UIPackage.normalizeURL(e);
            }
        }, {
            key: "autoResizeItem",
            get: function get() {
                return this._autoResizeItem;
            },
            set: function set(t) {
                this._autoResizeItem != t && (this._autoResizeItem = t, this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "selectionMode",
            get: function get() {
                return this._selectionMode;
            },
            set: function set(t) {
                this._selectionMode = t;
            }
        }, {
            key: "selectionController",
            get: function get() {
                return this._selectionController;
            },
            set: function set(t) {
                this._selectionController = t;
            }
        }, {
            key: "itemPool",
            get: function get() {
                return this._pool;
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                var e;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var i = this._virtualItems[e];
                    if (i.obj instanceof t.GButton && i.obj.selected || null == i.obj && i.selected) return this._loop ? e % this._numItems : e;
                } else {
                    var s = this._children.length;
                    for (e = 0; e < s; e++) {
                        var h = this._children[e];
                        if (h instanceof t.GButton && h.selected) return e;
                    }
                }
                return -1;
            },
            set: function set(e) {
                e >= 0 && e < this.numItems ? (this._selectionMode != t.ListSelectionMode.Single && this.clearSelection(), 
                this.addSelection(e)) : this.clearSelection();
            }
        }, {
            key: "numItems",
            get: function get() {
                return this._virtual ? this._numItems : this._children.length;
            },
            set: function set(t) {
                var e;
                if (this._virtual) {
                    if (null == this.itemRenderer) throw new Error("set itemRenderer first!");
                    this._numItems = t, this._loop ? this._realNumItems = 6 * this._numItems : this._realNumItems = this._numItems;
                    var i = this._virtualItems.length;
                    if (this._realNumItems > i) for (e = i; e < this._realNumItems; e++) {
                        var s = {
                            width: this._itemSize.x,
                            height: this._itemSize.y,
                            updateFlag: 0
                        };
                        this._virtualItems.push(s);
                    } else for (e = this._realNumItems; e < i; e++) {
                        this._virtualItems[e].selected = !1;
                    }
                    0 != this._virtualListChanged && Laya.timer.clear(this, this._refreshVirtualList), 
                    this._refreshVirtualList();
                } else {
                    var h = this._children.length;
                    if (t > h) for (e = h; e < t; e++) {
                        null == this.itemProvider ? this.addItemFromPool() : this.addItemFromPool(this.itemProvider.runWith(e));
                    } else this.removeChildrenToPool(t, h);
                    if (null != this.itemRenderer) for (e = 0; e < t; e++) {
                        this.itemRenderer.runWith([ e, this.getChildAt(e) ]);
                    }
                }
            }
        } ]);
        return _class10;
    }(t.GComponent);
    var W = 0;
    t.GObjectPool = /* */ function() {
        function _class11() {
            (0, _classCallCheck2.default)(this, _class11);
            this._count = 0, this._pool = {};
        }
        (0, _createClass2.default)(_class11, [ {
            key: "clear",
            value: function clear() {
                for (var t in this._pool) {
                    for (var e = this._pool[t], i = e.length, s = 0; s < i; s++) {
                        e[s].dispose();
                    }
                }
                this._pool = {}, this._count = 0;
            }
        }, {
            key: "getObject",
            value: function getObject(e) {
                if (null == (e = t.UIPackage.normalizeURL(e))) return null;
                var i = this._pool[e];
                return i && i.length > 0 ? (this._count--, i.shift()) : t.UIPackage.createObjectFromURL(e);
            }
        }, {
            key: "returnObject",
            value: function returnObject(t) {
                var e = t.resourceURL;
                if (e) {
                    var i = this._pool[e];
                    null == i && (i = [], this._pool[e] = i), this._count++, i.push(t);
                }
            }
        }, {
            key: "count",
            get: function get() {
                return this._count;
            }
        } ]);
        return _class11;
    }();
    var H = /* */ function(_t$GObject6) {
        (0, _inherits2.default)(H, _t$GObject6);
        var _super13 = _createSuper(H);
        function H() {
            var _this11;
            (0, _classCallCheck2.default)(this, H);
            _this11 = _super13.call(this), _this11._url = "", _this11._fill = t.LoaderFillType.None, 
            _this11._align = "left", _this11._valign = "top", _this11._showErrorSign = !0;
            return _this11;
        }
        (0, _createClass2.default)(H, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "createDisplayObject", this).call(this), 
                this._content = new t.MovieClip(), this._displayObject.addChild(this._content), 
                this._displayObject.mouseEnabled = !0;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                !this._contentItem && this._content.texture && this.freeExternal(this._content.texture), 
                this._content2 && this._content2.dispose(), (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "dispose", this).call(this);
            }
        }, {
            key: "loadContent",
            value: function loadContent() {
                this.clearContent(), this._url && (t.ToolSet.startsWith(this._url, "ui://") ? this.loadFromPackage(this._url) : this.loadExternal());
            }
        }, {
            key: "loadFromPackage",
            value: function loadFromPackage(e) {
                if (this._contentItem = t.UIPackage.getItemByURL(e), this._contentItem) {
                    if (this._contentItem = this._contentItem.getBranch(), this.sourceWidth = this._contentItem.width, 
                    this.sourceHeight = this._contentItem.height, this._contentItem = this._contentItem.getHighResolution(), 
                    this._contentItem.load(), this._autoSize && this.setSize(this.sourceWidth, this.sourceHeight), 
                    this._contentItem.type == t.PackageItemType.Image) this._contentItem.texture ? (this._content.texture = this._contentItem.texture, 
                    this._content.scale9Grid = this._contentItem.scale9Grid, this._content.scaleByTile = this._contentItem.scaleByTile, 
                    this._content.tileGridIndice = this._contentItem.tileGridIndice, this.sourceWidth = this._contentItem.width, 
                    this.sourceHeight = this._contentItem.height, this.updateLayout()) : this.setErrorState(); else if (this._contentItem.type == t.PackageItemType.MovieClip) this.sourceWidth = this._contentItem.width, 
                    this.sourceHeight = this._contentItem.height, this._content.interval = this._contentItem.interval, 
                    this._content.swing = this._contentItem.swing, this._content.repeatDelay = this._contentItem.repeatDelay, 
                    this._content.frames = this._contentItem.frames, this.updateLayout(); else if (this._contentItem.type == t.PackageItemType.Component) {
                        var i = t.UIPackage.createObjectFromURL(e);
                        i ? i instanceof t.GComponent ? (this._content2 = i.asCom, this._displayObject.addChild(this._content2.displayObject), 
                        this.updateLayout()) : (i.dispose(), this.setErrorState()) : this.setErrorState();
                    } else this.setErrorState();
                } else this.setErrorState();
            }
        }, {
            key: "loadExternal",
            value: function loadExternal() {
                t.AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
            }
        }, {
            key: "freeExternal",
            value: function freeExternal(t) {}
        }, {
            key: "onExternalLoadSuccess",
            value: function onExternalLoadSuccess(t) {
                this._content.texture = t, this._content.scale9Grid = null, this._content.scaleByTile = !1, 
                this.sourceWidth = t.width, this.sourceHeight = t.height, this.updateLayout();
            }
        }, {
            key: "onExternalLoadFailed",
            value: function onExternalLoadFailed() {
                this.setErrorState();
            }
        }, {
            key: "__getResCompleted",
            value: function __getResCompleted(t) {
                null != t ? this.onExternalLoadSuccess(t) : this.onExternalLoadFailed();
            }
        }, {
            key: "setErrorState",
            value: function setErrorState() {
                this._showErrorSign && (this._errorSign || null != t.UIConfig.loaderErrorSign && (this._errorSign = H._errorSignPool.getObject(t.UIConfig.loaderErrorSign)), 
                this._errorSign && (this._errorSign.setSize(this.width, this.height), this._displayObject.addChild(this._errorSign.displayObject)));
            }
        }, {
            key: "clearErrorState",
            value: function clearErrorState() {
                this._errorSign && (this._displayObject.removeChild(this._errorSign.displayObject), 
                H._errorSignPool.returnObject(this._errorSign), this._errorSign = null);
            }
        }, {
            key: "updateLayout",
            value: function updateLayout() {
                if (!this._content2 && !this._content.texture && !this._content.frames) return void (this._autoSize && (this._updatingLayout = !0, 
                this.setSize(50, 30), this._updatingLayout = !1));
                var e = this.sourceWidth, i = this.sourceHeight;
                if (this._autoSize && (this._updatingLayout = !0, 0 == e && (e = 50), 0 == i && (i = 30), 
                this.setSize(e, i), this._updatingLayout = !1, e == this._width && i == this._height)) this._content2 ? (this._content2.setXY(0, 0), 
                this._content2.setScale(1, 1)) : (this._content.size(e, i), this._content.pos(0, 0)); else {
                    var s, h, r = 1, a = 1;
                    this._fill != t.LoaderFillType.None && (r = this.width / this.sourceWidth, a = this.height / this.sourceHeight, 
                    1 == r && 1 == a || (this._fill == t.LoaderFillType.ScaleMatchHeight ? r = a : this._fill == t.LoaderFillType.ScaleMatchWidth ? a = r : this._fill == t.LoaderFillType.Scale ? r > a ? r = a : a = r : this._fill == t.LoaderFillType.ScaleNoBorder && (r > a ? a = r : r = a), 
                    this._shrinkOnly && (r > 1 && (r = 1), a > 1 && (a = 1)), e = this.sourceWidth * r, 
                    i = this.sourceHeight * a)), this._content2 ? this._content2.setScale(r, a) : this._content.size(e, i), 
                    s = "center" == this._align ? Math.floor((this.width - e) / 2) : "right" == this._align ? this.width - e : 0, 
                    h = "middle" == this._valign ? Math.floor((this.height - i) / 2) : "bottom" == this._valign ? this.height - i : 0, 
                    this._content2 ? this._content2.setXY(s, h) : this._content.pos(s, h);
                }
            }
        }, {
            key: "clearContent",
            value: function clearContent() {
                this.clearErrorState(), !this._contentItem && this._content.texture && this.freeExternal(this._content.texture), 
                this._content.texture = null, this._content.frames = null, this._content2 && (this._content2.dispose(), 
                this._content2 = null), this._contentItem = null;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "handleSizeChanged", this).call(this), 
                this._updatingLayout || this.updateLayout();
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.color;

                  case t.ObjectPropID.Playing:
                    return this.playing;

                  case t.ObjectPropID.Frame:
                    return this.frame;

                  case t.ObjectPropID.TimeScale:
                    return this._content.timeScale;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.color = i;
                    break;

                  case t.ObjectPropID.Playing:
                    this.playing = i;
                    break;

                  case t.ObjectPropID.Frame:
                    this.frame = i;
                    break;

                  case t.ObjectPropID.TimeScale:
                    this._content.timeScale = i;
                    break;

                  case t.ObjectPropID.DeltaTime:
                    this._content.advance(i);
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                var i;
                (0, _get2.default)((0, _getPrototypeOf2.default)(H.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._url = t.readS(), i = t.readByte(), this._align = 0 == i ? "left" : 1 == i ? "center" : "right", 
                i = t.readByte(), this._valign = 0 == i ? "top" : 1 == i ? "middle" : "bottom", 
                this._fill = t.readByte(), this._shrinkOnly = t.readBool(), this._autoSize = t.readBool(), 
                this._showErrorSign = t.readBool(), this._content.playing = t.readBool(), this._content.frame = t.getInt32(), 
                t.readBool() && (this.color = t.readColorS()), this._content.fillMethod = t.readByte(), 
                0 != this._content.fillMethod && (this._content.fillOrigin = t.readByte(), this._content.fillClockwise = t.readBool(), 
                this._content.fillAmount = t.getFloat32()), this._url && this.loadContent();
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            },
            set: function set(t) {
                this._url != t && (this._url = t, this.loadContent(), this.updateGear(7));
            }
        }, {
            key: "icon",
            get: function get() {
                return this._url;
            },
            set: function set(t) {
                this.url = t;
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(t) {
                this._align != t && (this._align = t, this.updateLayout());
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._valign;
            },
            set: function set(t) {
                this._valign != t && (this._valign = t, this.updateLayout());
            }
        }, {
            key: "fill",
            get: function get() {
                return this._fill;
            },
            set: function set(t) {
                this._fill != t && (this._fill = t, this.updateLayout());
            }
        }, {
            key: "shrinkOnly",
            get: function get() {
                return this._shrinkOnly;
            },
            set: function set(t) {
                this._shrinkOnly != t && (this._shrinkOnly = t, this.updateLayout());
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(t) {
                this._autoSize != t && (this._autoSize = t, this.updateLayout());
            }
        }, {
            key: "playing",
            get: function get() {
                return this._content.playing;
            },
            set: function set(t) {
                this._content.playing != t && (this._content.playing = t, this.updateGear(5));
            }
        }, {
            key: "frame",
            get: function get() {
                return this._content.frame;
            },
            set: function set(t) {
                this._content.frame != t && (this._content.frame = t, this.updateGear(5));
            }
        }, {
            key: "color",
            get: function get() {
                return this._content.color;
            },
            set: function set(t) {
                this._content.color != t && (this._content.color = t, this.updateGear(4));
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this._content.fillMethod;
            },
            set: function set(t) {
                this._content.fillMethod = t;
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this._content.fillOrigin;
            },
            set: function set(t) {
                this._content.fillOrigin = t;
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this._content.fillClockwise;
            },
            set: function set(t) {
                this._content.fillClockwise = t;
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this._content.fillAmount;
            },
            set: function set(t) {
                this._content.fillAmount = t;
            }
        }, {
            key: "showErrorSign",
            get: function get() {
                return this._showErrorSign;
            },
            set: function set(t) {
                this._showErrorSign = t;
            }
        }, {
            key: "content",
            get: function get() {
                return this._content;
            }
        }, {
            key: "component",
            get: function get() {
                return this._content2;
            }
        } ]);
        return H;
    }(t.GObject);
    H._errorSignPool = new t.GObjectPool(), t.GLoader = H;
    t.GLoader3D = /* */ function(_t$GObject7) {
        (0, _inherits2.default)(_class12, _t$GObject7);
        var _super14 = _createSuper(_class12);
        function _class12() {
            var _this12;
            (0, _classCallCheck2.default)(this, _class12);
            _this12 = _super14.call(this), _this12._frame = 0, _this12._playing = !0, _this12._url = "", 
            _this12._fill = t.LoaderFillType.None, _this12._align = t.AlignType.Left, _this12._verticalAlign = t.VertAlignType.Top, 
            _this12._color = "#FFFFFF";
            return _this12;
        }
        (0, _createClass2.default)(_class12, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "createDisplayObject", this).call(this), 
                this._container = new Laya.Sprite(), this._displayObject.addChild(this._container);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "dispose", this).call(this);
            }
        }, {
            key: "loadContent",
            value: function loadContent() {
                this.clearContent(), this._url && (t.ToolSet.startsWith(this._url, "ui://") ? this.loadFromPackage(this._url) : this.loadExternal());
            }
        }, {
            key: "loadFromPackage",
            value: function loadFromPackage(e) {
                this._contentItem = t.UIPackage.getItemByURL(e), this._contentItem && (this._contentItem = this._contentItem.getBranch(), 
                this.sourceWidth = this._contentItem.width, this.sourceHeight = this._contentItem.height, 
                this._contentItem = this._contentItem.getHighResolution(), this._autoSize && this.setSize(this.sourceWidth, this.sourceHeight), 
                this._contentItem.type != t.PackageItemType.Spine && this._contentItem.type != t.PackageItemType.DragonBones || this._contentItem.owner.getItemAssetAsync(this._contentItem, this.onLoaded.bind(this)));
            }
        }, {
            key: "onLoaded",
            value: function onLoaded(t, e) {
                this._contentItem == e && (t && console.warn(t), this._contentItem.templet && this.setSkeleton(this._contentItem.templet.buildArmature(1), this._contentItem.skeletonAnchor));
            }
        }, {
            key: "setSkeleton",
            value: function setSkeleton(e, i) {
                this.url = null, this._content = e, this._container.addChild(this._content), this._content.pos(i.x, i.y), 
                t.ToolSet.setColorFilter(this._content, this._color), this.onChange(), this.updateLayout();
            }
        }, {
            key: "onChange",
            value: function onChange() {
                this._content && (this._animationName ? this._playing ? this._content.play(this._animationName, this._loop) : this._content.play(this._animationName, !1, !0, this._frame, this._frame) : this._content.stop(), 
                this._skinName ? this._content.showSkinByName(this._skinName) : this._content.showSkinByIndex(0));
            }
        }, {
            key: "loadExternal",
            value: function loadExternal() {}
        }, {
            key: "updateLayout",
            value: function updateLayout() {
                var e = this.sourceWidth, i = this.sourceHeight;
                if (this._autoSize && (this._updatingLayout = !0, 0 == e && (e = 50), 0 == i && (i = 30), 
                this.setSize(e, i), this._updatingLayout = !1, e == this._width && i == this._height)) return this._container.scale(1, 1), 
                void this._container.pos(0, 0);
                var s, h, r = 1, a = 1;
                this._fill != t.LoaderFillType.None && (r = this.width / this.sourceWidth, a = this.height / this.sourceHeight, 
                1 == r && 1 == a || (this._fill == t.LoaderFillType.ScaleMatchHeight ? r = a : this._fill == t.LoaderFillType.ScaleMatchWidth ? a = r : this._fill == t.LoaderFillType.Scale ? r > a ? r = a : a = r : this._fill == t.LoaderFillType.ScaleNoBorder && (r > a ? a = r : r = a), 
                this._shrinkOnly && (r > 1 && (r = 1), a > 1 && (a = 1)), e = this.sourceWidth * r, 
                i = this.sourceHeight * a)), this._container.scale(r, a), s = this._align == t.AlignType.Center ? Math.floor((this.width - e) / 2) : this._align == t.AlignType.Right ? this.width - e : 0, 
                h = this._verticalAlign == t.VertAlignType.Middle ? Math.floor((this.height - i) / 2) : this._verticalAlign == t.VertAlignType.Bottom ? this.height - i : 0, 
                this._container.pos(s, h);
            }
        }, {
            key: "clearContent",
            value: function clearContent() {
                this._contentItem = null, this._content && (this._container.removeChild(this._content), 
                this._content.destroy(), this._content = null);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "handleSizeChanged", this).call(this), 
                this._updatingLayout || this.updateLayout();
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {}
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.color;

                  case t.ObjectPropID.Playing:
                    return this.playing;

                  case t.ObjectPropID.Frame:
                    return this.frame;

                  case t.ObjectPropID.TimeScale:
                    return 1;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.color = i;
                    break;

                  case t.ObjectPropID.Playing:
                    this.playing = i;
                    break;

                  case t.ObjectPropID.Frame:
                    this.frame = i;
                    break;

                  case t.ObjectPropID.TimeScale:
                  case t.ObjectPropID.DeltaTime:
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class12.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._url = t.readS(), this._align = t.readByte(), this._verticalAlign = t.readByte(), 
                this._fill = t.readByte(), this._shrinkOnly = t.readBool(), this._autoSize = t.readBool(), 
                this._animationName = t.readS(), this._skinName = t.readS(), this._playing = t.readBool(), 
                this._frame = t.getInt32(), this._loop = t.readBool(), t.readBool() && (this.color = t.readColorS()), 
                this._url && this.loadContent();
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            },
            set: function set(t) {
                this._url != t && (this._url = t, this.loadContent(), this.updateGear(7));
            }
        }, {
            key: "icon",
            get: function get() {
                return this._url;
            },
            set: function set(t) {
                this.url = t;
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(t) {
                this._align != t && (this._align = t, this.updateLayout());
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._verticalAlign;
            },
            set: function set(t) {
                this._verticalAlign != t && (this._verticalAlign = t, this.updateLayout());
            }
        }, {
            key: "fill",
            get: function get() {
                return this._fill;
            },
            set: function set(t) {
                this._fill != t && (this._fill = t, this.updateLayout());
            }
        }, {
            key: "shrinkOnly",
            get: function get() {
                return this._shrinkOnly;
            },
            set: function set(t) {
                this._shrinkOnly != t && (this._shrinkOnly = t, this.updateLayout());
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(t) {
                this._autoSize != t && (this._autoSize = t, this.updateLayout());
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            },
            set: function set(t) {
                this._playing != t && (this._playing = t, this.updateGear(5), this.onChange());
            }
        }, {
            key: "frame",
            get: function get() {
                return this._frame;
            },
            set: function set(t) {
                this._frame != t && (this._frame = t, this.updateGear(5), this.onChange());
            }
        }, {
            key: "animationName",
            get: function get() {
                return this._animationName;
            },
            set: function set(t) {
                this._animationName != t && (this._animationName = t, this.onChange());
            }
        }, {
            key: "skinName",
            get: function get() {
                return this._skinName;
            },
            set: function set(t) {
                this._skinName != t && (this._skinName = t, this.onChange());
            }
        }, {
            key: "loop",
            get: function get() {
                return this._loop;
            },
            set: function set(t) {
                this._loop != t && (this._loop = t, this.onChange());
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(e) {
                this._color != e && (this._color = e, this.updateGear(4), this._content && t.ToolSet.setColorFilter(this._content, this._color));
            }
        }, {
            key: "content",
            get: function get() {}
        } ]);
        return _class12;
    }(t.GObject);
    t.GMovieClip = /* */ function(_t$GObject8) {
        (0, _inherits2.default)(_class13, _t$GObject8);
        var _super15 = _createSuper(_class13);
        function _class13() {
            (0, _classCallCheck2.default)(this, _class13);
            return _super15.call(this);
        }
        (0, _createClass2.default)(_class13, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._movieClip = new t.MovieClip(), this._movieClip.mouseEnabled = !1, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "rewind",
            value: function rewind() {
                this._movieClip.rewind();
            }
        }, {
            key: "syncStatus",
            value: function syncStatus(t) {
                this._movieClip.syncStatus(t._movieClip);
            }
        }, {
            key: "advance",
            value: function advance(t) {
                this._movieClip.advance(t);
            }
        }, {
            key: "setPlaySettings",
            value: function setPlaySettings(t, e, i, s, h) {
                this._movieClip.setPlaySettings(t, e, i, s, h);
            }
        }, {
            key: "getProp",
            value: function getProp(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.color;

                  case t.ObjectPropID.Playing:
                    return this.playing;

                  case t.ObjectPropID.Frame:
                    return this.frame;

                  case t.ObjectPropID.TimeScale:
                    return this.timeScale;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(_class13.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(e, i) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    this.color = i;
                    break;

                  case t.ObjectPropID.Playing:
                    this.playing = i;
                    break;

                  case t.ObjectPropID.Frame:
                    this.frame = i;
                    break;

                  case t.ObjectPropID.TimeScale:
                    this.timeScale = i;
                    break;

                  case t.ObjectPropID.DeltaTime:
                    this.advance(i);
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(_class13.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                var t = this.packageItem.getBranch();
                this.sourceWidth = t.width, this.sourceHeight = t.height, this.initWidth = this.sourceWidth, 
                this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), 
                (t = t.getHighResolution()).load(), this._movieClip.interval = t.interval, this._movieClip.swing = t.swing, 
                this._movieClip.repeatDelay = t.repeatDelay, this._movieClip.frames = t.frames;
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class13.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), t.readBool() && (this.color = t.readColorS()), t.readByte(), this._movieClip.frame = t.getInt32(), 
                this._movieClip.playing = t.readBool();
            }
        }, {
            key: "color",
            get: function get() {
                return this._movieClip.color;
            },
            set: function set(t) {
                this._movieClip.color = t;
            }
        }, {
            key: "playing",
            get: function get() {
                return this._movieClip.playing;
            },
            set: function set(t) {
                this._movieClip.playing != t && (this._movieClip.playing = t, this.updateGear(5));
            }
        }, {
            key: "frame",
            get: function get() {
                return this._movieClip.frame;
            },
            set: function set(t) {
                this._movieClip.frame != t && (this._movieClip.frame = t, this.updateGear(5));
            }
        }, {
            key: "timeScale",
            get: function get() {
                return this._movieClip.timeScale;
            },
            set: function set(t) {
                this._movieClip.timeScale = t;
            }
        } ]);
        return _class13;
    }(t.GObject);
    t.GProgressBar = /* */ function(_t$GComponent5) {
        (0, _inherits2.default)(_class14, _t$GComponent5);
        var _super16 = _createSuper(_class14);
        function _class14() {
            var _this13;
            (0, _classCallCheck2.default)(this, _class14);
            _this13 = _super16.call(this), _this13._min = 0, _this13._max = 0, _this13._value = 0, 
            _this13._barMaxWidth = 0, _this13._barMaxHeight = 0, _this13._barMaxWidthDelta = 0, 
            _this13._barMaxHeightDelta = 0, _this13._barStartX = 0, _this13._barStartY = 0, 
            _this13._titleType = t.ProgressTitleType.Percent, _this13._value = 50, _this13._max = 100;
            return _this13;
        }
        (0, _createClass2.default)(_class14, [ {
            key: "tweenValue",
            value: function tweenValue(e, i) {
                var s, h = t.GTween.getTween(this, this.update);
                return h ? (s = h.value.x, h.kill()) : s = this._value, this._value = e, t.GTween.to(s, this._value, i).setTarget(this, this.update).setEase(t.EaseType.Linear);
            }
        }, {
            key: "update",
            value: function update(e) {
                var i = t.ToolSet.clamp01((e - this._min) / (this._max - this._min));
                if (this._titleObject) switch (this._titleType) {
                  case t.ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(100 * i) + "%";
                    break;

                  case t.ProgressTitleType.ValueAndMax:
                    this._titleObject.text = Math.floor(e) + "/" + Math.floor(this._max);
                    break;

                  case t.ProgressTitleType.Value:
                    this._titleObject.text = "" + Math.floor(e);
                    break;

                  case t.ProgressTitleType.Max:
                    this._titleObject.text = "" + Math.floor(this._max);
                }
                var s = this.width - this._barMaxWidthDelta, h = this.height - this._barMaxHeightDelta;
                this._reverse ? (this._barObjectH && (this.setFillAmount(this._barObjectH, 1 - i) || (this._barObjectH.width = Math.round(s * i), 
                this._barObjectH.x = this._barStartX + (s - this._barObjectH.width))), this._barObjectV && (this.setFillAmount(this._barObjectV, 1 - i) || (this._barObjectV.height = Math.round(h * i), 
                this._barObjectV.y = this._barStartY + (h - this._barObjectV.height)))) : (this._barObjectH && (this.setFillAmount(this._barObjectH, i) || (this._barObjectH.width = Math.round(s * i))), 
                this._barObjectV && (this.setFillAmount(this._barObjectV, i) || (this._barObjectV.height = Math.round(h * i)))), 
                this._aniObject && this._aniObject.setProp(t.ObjectPropID.Frame, Math.floor(100 * i));
            }
        }, {
            key: "setFillAmount",
            value: function setFillAmount(e, i) {
                return (e instanceof t.GImage || e instanceof t.GLoader) && e.fillMethod != t.FillMethod.None && (e.fillAmount = i, 
                !0);
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(t) {
                t.seek(0, 6), this._titleType = t.readByte(), this._reverse = t.readBool(), this._titleObject = this.getChild("title"), 
                this._barObjectH = this.getChild("bar"), this._barObjectV = this.getChild("bar_v"), 
                this._aniObject = this.getChild("ani"), this._barObjectH && (this._barMaxWidth = this._barObjectH.width, 
                this._barMaxWidthDelta = this.width - this._barMaxWidth, this._barStartX = this._barObjectH.x), 
                this._barObjectV && (this._barMaxHeight = this._barObjectV.height, this._barMaxHeightDelta = this.height - this._barMaxHeight, 
                this._barStartY = this._barObjectV.y);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class14.prototype), "handleSizeChanged", this).call(this), 
                this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                this._underConstruct || this.update(this._value);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class14.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.getInt32(), 
                this._max = t.getInt32(), t.version >= 2 && (this._min = t.getInt32()), this.update(this._value)) : this.update(this._value);
            }
        }, {
            key: "titleType",
            get: function get() {
                return this._titleType;
            },
            set: function set(t) {
                this._titleType != t && (this._titleType = t, this.update(t));
            }
        }, {
            key: "min",
            get: function get() {
                return this._min;
            },
            set: function set(t) {
                this._min != t && (this._min = t, this.update(this._value));
            }
        }, {
            key: "max",
            get: function get() {
                return this._max;
            },
            set: function set(t) {
                this._max != t && (this._max = t, this.update(this._value));
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(e) {
                this._value != e && (t.GTween.kill(this, !1, this.update), this._value = e, this.update(e));
            }
        } ]);
        return _class14;
    }(t.GComponent);
    t.GRichTextField = /* */ function(_t$GTextField2) {
        (0, _inherits2.default)(_class15, _t$GTextField2);
        var _super17 = _createSuper(_class15);
        function _class15() {
            var _this14;
            (0, _classCallCheck2.default)(this, _class15);
            _this14 = _super17.call(this), _this14._text = "";
            return _this14;
        }
        (0, _createClass2.default)(_class15, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._div = new Laya.HTMLDivElement(), this._displayObject.mouseEnabled = !0, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "refresh",
            value: function refresh() {
                this._text.length > 0 && this._div._refresh && this._div._refresh();
            }
        }, {
            key: "updateAutoSize",
            value: function updateAutoSize() {
                this._div.style.wordWrap = !this._widthAutoSize;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._updatingSize || (this._div.size(this._width, this._height), this._div.style.width = this._width, 
                this._div.style.height = this._height);
            }
        }, {
            key: "div",
            get: function get() {
                return this._div;
            }
        }, {
            key: "text",
            set: function set(e) {
                this._text = e;
                var i = this._text;
                this._templateVars && (i = this.parseTemplate(i));
                try {
                    if (this._div.size(this._width, this._height), this._ubbEnabled ? this._div.innerHTML = t.UBBParser.inst.parse(i) : this._div.innerHTML = i, 
                    this._widthAutoSize || this._heightAutoSize) {
                        var s, h = 0;
                        this._widthAutoSize ? (s = this._div.contextWidth) > 0 && (s += 8) : s = this._width, 
                        h = this._heightAutoSize ? this._div.contextHeight : this._height, this._updatingSize = !0, 
                        this.setSize(s, h), this._updatingSize = !1;
                    }
                } catch (t) {
                    console.log("laya reports html error:" + t);
                }
            },
            get: function get() {
                return this._text;
            }
        }, {
            key: "font",
            get: function get() {
                return this._div.style.font;
            },
            set: function set(e) {
                this._div.style.font = e || t.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._div.style.fontSize;
            },
            set: function set(t) {
                this._div.style.fontSize = t;
            }
        }, {
            key: "color",
            get: function get() {
                return this._div.style.color;
            },
            set: function set(t) {
                this._div.style.color != t && (this._div.style.color = t, this.refresh(), this.updateGear(4));
            }
        }, {
            key: "align",
            get: function get() {
                return this._div.style.align;
            },
            set: function set(t) {
                this._div.style.align != t && (this._div.style.align = t, this.refresh());
            }
        }, {
            key: "valign",
            get: function get() {
                return this._div.style.valign;
            },
            set: function set(t) {
                this._div.style.valign != t && (this._div.style.valign = t, this.refresh());
            }
        }, {
            key: "leading",
            get: function get() {
                return this._div.style.leading;
            },
            set: function set(t) {
                this._div.style.leading != t && (this._div.style.leading = t, this.refresh());
            }
        }, {
            key: "bold",
            get: function get() {
                return this._div.style.bold;
            },
            set: function set(t) {
                this._div.style.bold != t && (this._div.style.bold = t, this.refresh());
            }
        }, {
            key: "italic",
            get: function get() {
                return this._div.style.italic;
            },
            set: function set(t) {
                this._div.style.italic != t && (this._div.style.italic = t, this.refresh());
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._div.style.stroke;
            },
            set: function set(t) {
                this._div.style.stroke != t && (this._div.style.stroke = t, this.refresh());
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._div.style.strokeColor;
            },
            set: function set(t) {
                this._div.style.strokeColor != t && (this._div.style.strokeColor = t, this.refresh(), 
                this.updateGear(4));
            }
        }, {
            key: "ubbEnabled",
            set: function set(t) {
                this._ubbEnabled = t;
            },
            get: function get() {
                return this._ubbEnabled;
            }
        }, {
            key: "textWidth",
            get: function get() {
                var t = this._div.contextWidth;
                return t > 0 && (t += 8), t;
            }
        } ]);
        return _class15;
    }(t.GTextField);
    var U = /* */ function(_t$GComponent6) {
        (0, _inherits2.default)(U, _t$GComponent6);
        var _super18 = _createSuper(U);
        function U() {
            var _this15;
            (0, _classCallCheck2.default)(this, U);
            _this15 = _super18.call(this), U._inst || (U._inst = (0, _assertThisInitialized2.default)(_this15)), 
            _this15.opaque = !1, _this15._popupStack = [], _this15._justClosedPopups = [], _this15.displayObject.once(Laya.Event.DISPLAY, (0, 
            _assertThisInitialized2.default)(_this15), _this15.__addedToStage);
            return _this15;
        }
        (0, _createClass2.default)(U, [ {
            key: "showWindow",
            value: function showWindow(t) {
                this.addChild(t), t.requestFocus(), t.x > this.width ? t.x = this.width - t.width : t.x + t.width < 0 && (t.x = 0), 
                t.y > this.height ? t.y = this.height - t.height : t.y + t.height < 0 && (t.y = 0), 
                this.adjustModalLayer();
            }
        }, {
            key: "hideWindow",
            value: function hideWindow(t) {
                t.hide();
            }
        }, {
            key: "hideWindowImmediately",
            value: function hideWindowImmediately(t) {
                t.parent == this && this.removeChild(t), this.adjustModalLayer();
            }
        }, {
            key: "bringToFront",
            value: function bringToFront(e) {
                var i, s = this.numChildren;
                for (i = this._modalLayer.parent && !e.modal ? this.getChildIndex(this._modalLayer) - 1 : s - 1; i >= 0; i--) {
                    var h = this.getChildAt(i);
                    if (h == e) return;
                    if (h instanceof t.Window) break;
                }
                i >= 0 && this.setChildIndex(e, i);
            }
        }, {
            key: "showModalWait",
            value: function showModalWait(e) {
                null != t.UIConfig.globalModalWaiting && (null == this._modalWaitPane && (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.globalModalWaiting)), 
                this._modalWaitPane.setSize(this.width, this.height), this._modalWaitPane.addRelation(this, t.RelationType.Size), 
                this.addChild(this._modalWaitPane), this._modalWaitPane.text = e);
            }
        }, {
            key: "closeModalWait",
            value: function closeModalWait() {
                this._modalWaitPane && this._modalWaitPane.parent && this.removeChild(this._modalWaitPane);
            }
        }, {
            key: "closeAllExceptModals",
            value: function closeAllExceptModals() {
                for (var e = this._children.slice(), i = e.length, s = 0; s < i; s++) {
                    var h = e[s];
                    h instanceof t.Window && !h.modal && h.hide();
                }
            }
        }, {
            key: "closeAllWindows",
            value: function closeAllWindows() {
                for (var e = this._children.slice(), i = e.length, s = 0; s < i; s++) {
                    var h = e[s];
                    h instanceof t.Window && h.hide();
                }
            }
        }, {
            key: "getTopWindow",
            value: function getTopWindow() {
                for (var e = this.numChildren - 1; e >= 0; e--) {
                    var i = this.getChildAt(e);
                    if (i instanceof t.Window) return i;
                }
                return null;
            }
        }, {
            key: "showPopup",
            value: function showPopup(e, i, s) {
                if (this._popupStack.length > 0) {
                    var h = this._popupStack.indexOf(e);
                    if (-1 != h) for (var r = this._popupStack.length - 1; r >= h; r--) {
                        this.removeChild(this._popupStack.pop());
                    }
                }
                if (this._popupStack.push(e), i) for (var a = i; a; ) {
                    if (a.parent == this) {
                        e.sortingOrder < a.sortingOrder && (e.sortingOrder = a.sortingOrder);
                        break;
                    }
                    a = a.parent;
                }
                var n;
                this.addChild(e), this.adjustModalLayer();
                var o, l, _ = 0, d = 0;
                i ? (n = i.localToGlobal(), _ = i.width, d = i.height) : n = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY), 
                (o = n.x) + e.width > this.width && (o = o + _ - e.width), l = n.y + d, ((void 0 === s || s === t.PopupDirection.Auto) && n.y + e.height > this.height || !1 === s || s === t.PopupDirection.Up) && (l = n.y - e.height - 1) < 0 && (l = 0, 
                o += _ / 2), e.x = o, e.y = l;
            }
        }, {
            key: "togglePopup",
            value: function togglePopup(t, e, i) {
                -1 == this._justClosedPopups.indexOf(t) && this.showPopup(t, e, i);
            }
        }, {
            key: "hidePopup",
            value: function hidePopup(t) {
                if (t) {
                    var e = this._popupStack.indexOf(t);
                    if (-1 != e) for (var i = this._popupStack.length - 1; i >= e; i--) {
                        this.closePopup(this._popupStack.pop());
                    }
                } else {
                    for (i = this._popupStack.length - 1; i >= 0; i--) {
                        this.closePopup(this._popupStack[i]);
                    }
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "closePopup",
            value: function closePopup(e) {
                e.parent && (e instanceof t.Window ? e.hide() : this.removeChild(e));
            }
        }, {
            key: "showTooltips",
            value: function showTooltips(e) {
                if (null == this._defaultTooltipWin) {
                    var i = t.UIConfig.tooltipsWin;
                    if (!i) return void Laya.Log.print("UIConfig.tooltipsWin not defined");
                    this._defaultTooltipWin = t.UIPackage.createObjectFromURL(i);
                }
                this._defaultTooltipWin.text = e, this.showTooltipsWin(this._defaultTooltipWin);
            }
        }, {
            key: "showTooltipsWin",
            value: function showTooltipsWin(t, e) {
                this.hideTooltips(), this._tooltipWin = t;
                var i = 0, s = 0;
                null == e ? (i = Laya.stage.mouseX + 10, s = Laya.stage.mouseY + 20) : (i = e.x, 
                s = e.y);
                var h = this.globalToLocal(i, s);
                i = h.x, s = h.y, i + this._tooltipWin.width > this.width && (i = i - this._tooltipWin.width - 1) < 0 && (i = 10), 
                s + this._tooltipWin.height > this.height && (s = s - this._tooltipWin.height - 1, 
                i - this._tooltipWin.width - 1 > 0 && (i = i - this._tooltipWin.width - 1), s < 0 && (s = 10)), 
                this._tooltipWin.x = i, this._tooltipWin.y = s, this.addChild(this._tooltipWin);
            }
        }, {
            key: "hideTooltips",
            value: function hideTooltips() {
                this._tooltipWin && (this._tooltipWin.parent && this.removeChild(this._tooltipWin), 
                this._tooltipWin = null);
            }
        }, {
            key: "setFocus",
            value: function setFocus(t) {}
        }, {
            key: "playOneShotSound",
            value: function playOneShotSound(e, i) {
                t.ToolSet.startsWith(e, "ui://") || Laya.SoundManager.playSound(e);
            }
        }, {
            key: "adjustModalLayer",
            value: function adjustModalLayer() {
                var e = this.numChildren;
                null != this._modalWaitPane && null != this._modalWaitPane.parent && this.setChildIndex(this._modalWaitPane, e - 1);
                for (var i = e - 1; i >= 0; i--) {
                    var s = this.getChildAt(i);
                    if (s instanceof t.Window && s.modal) return void (null == this._modalLayer.parent ? this.addChildAt(this._modalLayer, i) : this.setChildIndexBefore(this._modalLayer, i));
                }
                this._modalLayer.parent && this.removeChild(this._modalLayer);
            }
        }, {
            key: "__addedToStage",
            value: function __addedToStage() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.__stageMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__stageMouseUp), 
                this._modalLayer = new t.GGraph(), this._modalLayer.setSize(this.width, this.height), 
                this._modalLayer.drawRect(0, null, t.UIConfig.modalLayerColor), this._modalLayer.addRelation(this, t.RelationType.Size), 
                this.displayObject.stage.on(Laya.Event.RESIZE, this, this.__winResize), this.__winResize();
            }
        }, {
            key: "checkPopups",
            value: function checkPopups(t) {
                if (!this._checkPopups && (this._checkPopups = !0, this._justClosedPopups.length = 0, 
                this._popupStack.length > 0)) {
                    for (var e = t; e != this.displayObject.stage && e; ) {
                        if (e.$owner) {
                            var i = this._popupStack.indexOf(e.$owner);
                            if (-1 != i) {
                                for (var s = this._popupStack.length - 1; s > i; s--) {
                                    var h = this._popupStack.pop();
                                    this.closePopup(h), this._justClosedPopups.push(h);
                                }
                                return;
                            }
                        }
                        e = e.parent;
                    }
                    for (s = this._popupStack.length - 1; s >= 0; s--) {
                        h = this._popupStack[s], this.closePopup(h), this._justClosedPopups.push(h);
                    }
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "__stageMouseDown",
            value: function __stageMouseDown(t) {
                this._tooltipWin && this.hideTooltips(), this.checkPopups(t.target);
            }
        }, {
            key: "__stageMouseUp",
            value: function __stageMouseUp() {
                this._checkPopups = !1;
            }
        }, {
            key: "__winResize",
            value: function __winResize() {
                this.setSize(Laya.stage.width, Laya.stage.height), this.updateContentScaleLevel();
            }
        }, {
            key: "updateContentScaleLevel",
            value: function updateContentScaleLevel() {
                var t = Laya.stage._canvasTransform, e = Math.max(t.getScaleX(), t.getScaleY());
                U.contentScaleLevel = e >= 3.5 ? 3 : e >= 2.5 ? 2 : e >= 1.5 ? 1 : 0;
            }
        }, {
            key: "modalLayer",
            get: function get() {
                return this._modalLayer;
            }
        }, {
            key: "hasModalWindow",
            get: function get() {
                return null != this._modalLayer.parent;
            }
        }, {
            key: "modalWaiting",
            get: function get() {
                return this._modalWaitPane && this._modalWaitPane.inContainer;
            }
        }, {
            key: "hasAnyPopup",
            get: function get() {
                return 0 != this._popupStack.length;
            }
        }, {
            key: "focus",
            get: function get() {
                return null;
            },
            set: function set(t) {
                this.setFocus(t);
            }
        }, {
            key: "volumeScale",
            get: function get() {
                return Laya.SoundManager.soundVolume;
            },
            set: function set(t) {
                Laya.SoundManager.soundVolume = t;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                return U._inst || new U(), U._inst;
            }
        } ]);
        return U;
    }(t.GComponent);
    U.contentScaleLevel = 0, t.GRoot = U;
    t.GScrollBar = /* */ function(_t$GComponent7) {
        (0, _inherits2.default)(_class16, _t$GComponent7);
        var _super19 = _createSuper(_class16);
        function _class16() {
            var _this16;
            (0, _classCallCheck2.default)(this, _class16);
            _this16 = _super19.call(this), _this16._dragOffset = new Laya.Point(), _this16._scrollPerc = 0;
            return _this16;
        }
        (0, _createClass2.default)(_class16, [ {
            key: "setScrollPane",
            value: function setScrollPane(t, e) {
                this._target = t, this._vertical = e;
            }
        }, {
            key: "setDisplayPerc",
            value: function setDisplayPerc(t) {
                this._vertical ? (this._fixedGripSize || (this._grip.height = Math.floor(t * this._bar.height)), 
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc) : (this._fixedGripSize || (this._grip.width = Math.floor(t * this._bar.width)), 
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc), 
                this._grip.visible = 0 != t && 1 != t;
            }
        }, {
            key: "setScrollPerc",
            value: function setScrollPerc(t) {
                this._scrollPerc = t, this._vertical ? this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc : this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(t) {
                t.seek(0, 6), this._fixedGripSize = t.readBool(), this._grip = this.getChild("grip"), 
                this._grip ? (this._bar = this.getChild("bar"), this._bar ? (this._arrowButton1 = this.getChild("arrow1"), 
                this._arrowButton2 = this.getChild("arrow2"), this._grip.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown), 
                this._arrowButton1 && this._arrowButton1.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton1Click), 
                this._arrowButton2 && this._arrowButton2.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton2Click), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown)) : Laya.Log.print("需要定义bar")) : Laya.Log.print("需要定义grip");
            }
        }, {
            key: "__gripMouseDown",
            value: function __gripMouseDown(t) {
                t.stopPropagation(), this._gripDragging = !0, this._target.updateScrollBarVisible(), 
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp), 
                this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, this._dragOffset), this._dragOffset.x -= this._grip.x, 
                this._dragOffset.y -= this._grip.y;
            }
        }, {
            key: "__gripMouseMove",
            value: function __gripMouseMove() {
                if (this.onStage) {
                    var t = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, N);
                    if (this._vertical) {
                        var e = t.y - this._dragOffset.y;
                        this._target.setPercY((e - this._bar.y) / (this._bar.height - this._grip.height), !1);
                    } else {
                        var i = t.x - this._dragOffset.x;
                        this._target.setPercX((i - this._bar.x) / (this._bar.width - this._grip.width), !1);
                    }
                }
            }
        }, {
            key: "__gripMouseUp",
            value: function __gripMouseUp(t) {
                this.onStage && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), 
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp), this._gripDragging = !1, 
                this._target.updateScrollBarVisible());
            }
        }, {
            key: "__arrowButton1Click",
            value: function __arrowButton1Click(t) {
                t.stopPropagation(), this._vertical ? this._target.scrollUp() : this._target.scrollLeft();
            }
        }, {
            key: "__arrowButton2Click",
            value: function __arrowButton2Click(t) {
                t.stopPropagation(), this._vertical ? this._target.scrollDown() : this._target.scrollRight();
            }
        }, {
            key: "__barMouseDown",
            value: function __barMouseDown(t) {
                var e = this._grip.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, N);
                this._vertical ? e.y < 0 ? this._target.scrollUp(4) : this._target.scrollDown(4) : e.x < 0 ? this._target.scrollLeft(4) : this._target.scrollRight(4);
            }
        }, {
            key: "minSize",
            get: function get() {
                return this._vertical ? (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0) : (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
            }
        }, {
            key: "gripDragging",
            get: function get() {
                return this._gripDragging;
            }
        } ]);
        return _class16;
    }(t.GComponent);
    var N = new Laya.Point();
    t.GSlider = /* */ function(_t$GComponent8) {
        (0, _inherits2.default)(_class17, _t$GComponent8);
        var _super20 = _createSuper(_class17);
        function _class17() {
            var _this17;
            (0, _classCallCheck2.default)(this, _class17);
            _this17 = _super20.call(this), _this17._min = 0, _this17._max = 0, _this17._value = 0, 
            _this17._barMaxWidth = 0, _this17._barMaxHeight = 0, _this17._barMaxWidthDelta = 0, 
            _this17._barMaxHeightDelta = 0, _this17._clickPercent = 0, _this17._barStartX = 0, 
            _this17._barStartY = 0, _this17.changeOnClick = !0, _this17.canDrag = !0, _this17._titleType = t.ProgressTitleType.Percent, 
            _this17._value = 50, _this17._max = 100, _this17._clickPos = new Laya.Point();
            return _this17;
        }
        (0, _createClass2.default)(_class17, [ {
            key: "update",
            value: function update() {
                this.updateWithPercent((this._value - this._min) / (this._max - this._min));
            }
        }, {
            key: "updateWithPercent",
            value: function updateWithPercent(e, i) {
                if (e = t.ToolSet.clamp01(e), i) {
                    var s = t.ToolSet.clamp(this._min + (this._max - this._min) * e, this._min, this._max);
                    this._wholeNumbers && (s = Math.round(s), e = t.ToolSet.clamp01((s - this._min) / (this._max - this._min))), 
                    s != this._value && (this._value = s, t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, i));
                }
                if (this._titleObject) switch (this._titleType) {
                  case t.ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(100 * e) + "%";
                    break;

                  case t.ProgressTitleType.ValueAndMax:
                    this._titleObject.text = this._value + "/" + this._max;
                    break;

                  case t.ProgressTitleType.Value:
                    this._titleObject.text = "" + this._value;
                    break;

                  case t.ProgressTitleType.Max:
                    this._titleObject.text = "" + this._max;
                }
                var h = this.width - this._barMaxWidthDelta, r = this.height - this._barMaxHeightDelta;
                this._reverse ? (this._barObjectH && (this._barObjectH.width = Math.round(h * e), 
                this._barObjectH.x = this._barStartX + (h - this._barObjectH.width)), this._barObjectV && (this._barObjectV.height = Math.round(r * e), 
                this._barObjectV.y = this._barStartY + (r - this._barObjectV.height))) : (this._barObjectH && (this._barObjectH.width = Math.round(h * e)), 
                this._barObjectV && (this._barObjectV.height = Math.round(r * e)));
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(t) {
                t.seek(0, 6), this._titleType = t.readByte(), this._reverse = t.readBool(), t.version >= 2 && (this._wholeNumbers = t.readBool(), 
                this.changeOnClick = t.readBool()), this._titleObject = this.getChild("title"), 
                this._barObjectH = this.getChild("bar"), this._barObjectV = this.getChild("bar_v"), 
                this._gripObject = this.getChild("grip"), this._barObjectH && (this._barMaxWidth = this._barObjectH.width, 
                this._barMaxWidthDelta = this.width - this._barMaxWidth, this._barStartX = this._barObjectH.x), 
                this._barObjectV && (this._barMaxHeight = this._barObjectV.height, this._barMaxHeightDelta = this.height - this._barMaxHeight, 
                this._barStartY = this._barObjectV.y), this._gripObject && this._gripObject.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown), 
                this.displayObject.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class17.prototype), "handleSizeChanged", this).call(this), 
                this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                this._underConstruct || this.update();
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class17.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.getInt32(), 
                this._max = t.getInt32(), t.version >= 2 && (this._min = t.getInt32()), this.update()) : this.update();
            }
        }, {
            key: "__gripMouseDown",
            value: function __gripMouseDown(e) {
                this.canDrag = !0, e.stopPropagation(), this._clickPos = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY), 
                this._clickPercent = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min)), 
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__gripMouseMove",
            value: function __gripMouseMove(t) {
                if (this.canDrag) {
                    var e, i = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, N), s = i.x - this._clickPos.x, h = i.y - this._clickPos.y;
                    this._reverse && (s = -s, h = -h), e = this._barObjectH ? this._clickPercent + s / this._barMaxWidth : this._clickPercent + h / this._barMaxHeight, 
                    this.updateWithPercent(e, t);
                }
            }
        }, {
            key: "__gripMouseUp",
            value: function __gripMouseUp(t) {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__barMouseDown",
            value: function __barMouseDown(e) {
                if (this.changeOnClick) {
                    var i, s = this._gripObject.globalToLocal(e.stageX, e.stageY, N), h = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
                    this._barObjectH && (i = s.x / this._barMaxWidth), this._barObjectV && (i = s.y / this._barMaxHeight), 
                    this._reverse ? h -= i : h += i, this.updateWithPercent(h, e);
                }
            }
        }, {
            key: "titleType",
            get: function get() {
                return this._titleType;
            },
            set: function set(t) {
                this._titleType = t;
            }
        }, {
            key: "wholeNumbers",
            get: function get() {
                return this._wholeNumbers;
            },
            set: function set(t) {
                this._wholeNumbers != t && (this._wholeNumbers = t, this.update());
            }
        }, {
            key: "min",
            get: function get() {
                return this._min;
            },
            set: function set(t) {
                this._min != t && (this._min = t, this.update());
            }
        }, {
            key: "max",
            get: function get() {
                return this._max;
            },
            set: function set(t) {
                this._max != t && (this._max = t, this.update());
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(t) {
                this._value != t && (this._value = t, this.update());
            }
        } ]);
        return _class17;
    }(t.GComponent);
    N = new Laya.Point();
    t.GTextInput = /* */ function(_t$GTextField3) {
        (0, _inherits2.default)(_class18, _t$GTextField3);
        var _super21 = _createSuper(_class18);
        function _class18() {
            (0, _classCallCheck2.default)(this, _class18);
            return _super21.call(this);
        }
        (0, _createClass2.default)(_class18, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._input = new Laya.Input(), this._displayObject.mouseEnabled = !0, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "requestFocus",
            value: function requestFocus() {
                this._input.focus = !0, (0, _get2.default)((0, _getPrototypeOf2.default)(_class18.prototype), "requestFocus", this).call(this);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._input.size(this._width, this._height);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class18.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 4);
                var i = t.readS();
                null != i && (this.promptText = i), null != (i = t.readS()) && (this._input.restrict = i);
                var s = t.getInt32();
                0 != s && (this._input.maxChars = s), 0 != (s = t.getInt32()) && (4 == s ? this.keyboardType = Laya.Input.TYPE_NUMBER : 3 == s && (this.keyboardType = Laya.Input.TYPE_URL)), 
                t.readBool() && (this.password = !0);
            }
        }, {
            key: "nativeInput",
            get: function get() {
                return this._input;
            }
        }, {
            key: "text",
            set: function set(t) {
                this._input.text = t;
            },
            get: function get() {
                return this._input.text;
            }
        }, {
            key: "font",
            get: function get() {
                return this._input.font;
            },
            set: function set(e) {
                this._input.font = e || t.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._input.fontSize;
            },
            set: function set(t) {
                this._input.fontSize = t;
            }
        }, {
            key: "color",
            get: function get() {
                return this._input.color;
            },
            set: function set(t) {
                this._input.color = t;
            }
        }, {
            key: "align",
            get: function get() {
                return this._input.align;
            },
            set: function set(t) {
                this._input.align = t;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._input.valign;
            },
            set: function set(t) {
                this._input.valign = t;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._input.leading;
            },
            set: function set(t) {
                this._input.leading = t;
            }
        }, {
            key: "bold",
            get: function get() {
                return this._input.bold;
            },
            set: function set(t) {
                this._input.bold = t;
            }
        }, {
            key: "italic",
            get: function get() {
                return this._input.italic;
            },
            set: function set(t) {
                this._input.italic = t;
            }
        }, {
            key: "singleLine",
            get: function get() {
                return !this._input.multiline;
            },
            set: function set(t) {
                this._input.multiline = !t;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._input.stroke;
            },
            set: function set(t) {
                this._input.stroke = t;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._input.strokeColor;
            },
            set: function set(t) {
                this._input.strokeColor = t, this.updateGear(4);
            }
        }, {
            key: "password",
            get: function get() {
                return "password" == this._input.type;
            },
            set: function set(t) {
                this._input.type = t ? "password" : "text";
            }
        }, {
            key: "keyboardType",
            get: function get() {
                return this._input.type;
            },
            set: function set(t) {
                this._input.type = t;
            }
        }, {
            key: "editable",
            set: function set(t) {
                this._input.editable = t;
            },
            get: function get() {
                return this._input.editable;
            }
        }, {
            key: "maxLength",
            set: function set(t) {
                this._input.maxChars = t;
            },
            get: function get() {
                return this._input.maxChars;
            }
        }, {
            key: "promptText",
            set: function set(e) {
                this._prompt = e;
                var i = t.UBBParser.inst.parse(e, !0);
                this._input.prompt = i, t.UBBParser.inst.lastColor && (this._input.promptColor = t.UBBParser.inst.lastColor);
            },
            get: function get() {
                return this._prompt;
            }
        }, {
            key: "restrict",
            set: function set(t) {
                this._input.restrict = t;
            },
            get: function get() {
                return this._input.restrict;
            }
        }, {
            key: "textWidth",
            get: function get() {
                return this._input.textWidth;
            }
        } ]);
        return _class18;
    }(t.GTextField);
    t.GTree = /* */ function(_t$GList) {
        (0, _inherits2.default)(_class19, _t$GList);
        var _super22 = _createSuper(_class19);
        function _class19() {
            var _this18;
            (0, _classCallCheck2.default)(this, _class19);
            _this18 = _super22.call(this), _this18._indent = 15, _this18._rootNode = new t.GTreeNode(!0), 
            _this18._rootNode._setTree((0, _assertThisInitialized2.default)(_this18)), _this18._rootNode.expanded = !0;
            return _this18;
        }
        (0, _createClass2.default)(_class19, [ {
            key: "getSelectedNode",
            value: function getSelectedNode() {
                return -1 != this.selectedIndex ? this.getChildAt(this.selectedIndex)._treeNode : null;
            }
        }, {
            key: "getSelectedNodes",
            value: function getSelectedNodes(t) {
                t || (t = new Array()), Y.length = 0, (0, _get2.default)((0, _getPrototypeOf2.default)(_class19.prototype), "getSelection", this).call(this, Y);
                for (var e = Y.length, i = new Array(), s = 0; s < e; s++) {
                    var h = this.getChildAt(Y[s])._treeNode;
                    i.push(h);
                }
                return i;
            }
        }, {
            key: "selectNode",
            value: function selectNode(t, e) {
                for (var i = t.parent; i && i != this._rootNode; ) {
                    i.expanded = !0, i = i.parent;
                }
                t._cell && this.addSelection(this.getChildIndex(t._cell), e);
            }
        }, {
            key: "unselectNode",
            value: function unselectNode(t) {
                t._cell && this.removeSelection(this.getChildIndex(t._cell));
            }
        }, {
            key: "expandAll",
            value: function expandAll(t) {
                t || (t = this._rootNode), t.expanded = !0;
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s.isFolder && this.expandAll(s);
                }
            }
        }, {
            key: "collapseAll",
            value: function collapseAll(t) {
                t || (t = this._rootNode), t != this._rootNode && (t.expanded = !1);
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s.isFolder && this.collapseAll(s);
                }
            }
        }, {
            key: "createCell",
            value: function createCell(e) {
                var i = this.getFromPool(e._resURL ? e._resURL : this.defaultItem);
                if (!i) throw new Error("cannot create tree node object.");
                i._treeNode = e, e._cell = i;
                var s, h = i.getChild("indent");
                h && (h.width = (e.level - 1) * this._indent), (s = i.getController("expanded")) && (s.on(t.Events.STATE_CHANGED, this, this.__expandedStateChanged), 
                s.selectedIndex = e.expanded ? 1 : 0), (s = i.getController("leaf")) && (s.selectedIndex = e.isFolder ? 0 : 1), 
                e.isFolder && i.on(Laya.Event.MOUSE_DOWN, this, this.__cellMouseDown), this.treeNodeRender && this.treeNodeRender.runWith([ e, i ]);
            }
        }, {
            key: "_afterInserted",
            value: function _afterInserted(t) {
                t._cell || this.createCell(t);
                var e = this.getInsertIndexForNode(t);
                this.addChildAt(t._cell, e), this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]), 
                t.isFolder && t.expanded && this.checkChildren(t, e);
            }
        }, {
            key: "getInsertIndexForNode",
            value: function getInsertIndexForNode(t) {
                var e = t.getPrevSibling();
                e || (e = t.parent);
                for (var i = this.getChildIndex(e._cell) + 1, s = t.level, h = this.numChildren, r = i; r < h && !(this.getChildAt(r)._treeNode.level <= s); r++) {
                    i++;
                }
                return i;
            }
        }, {
            key: "_afterRemoved",
            value: function _afterRemoved(t) {
                this.removeNode(t);
            }
        }, {
            key: "_afterExpanded",
            value: function _afterExpanded(t) {
                if (t != this._rootNode) {
                    if (null != this.treeNodeWillExpand && this.treeNodeWillExpand.runWith([ t, !0 ]), 
                    t._cell) {
                        this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]);
                        var e = t._cell.getController("expanded");
                        e && (e.selectedIndex = 1), t._cell.parent && this.checkChildren(t, this.getChildIndex(t._cell));
                    }
                } else this.checkChildren(this._rootNode, 0);
            }
        }, {
            key: "_afterCollapsed",
            value: function _afterCollapsed(t) {
                if (t != this._rootNode) {
                    if (this.treeNodeWillExpand && this.treeNodeWillExpand.runWith([ t, !1 ]), t._cell) {
                        this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]);
                        var e = t._cell.getController("expanded");
                        e && (e.selectedIndex = 0), t._cell.parent && this.hideFolderNode(t);
                    }
                } else this.checkChildren(this._rootNode, 0);
            }
        }, {
            key: "_afterMoved",
            value: function _afterMoved(t) {
                var e, i = this.getChildIndex(t._cell);
                e = t.isFolder ? this.getFolderEndIndex(i, t.level) : i + 1;
                var s, h, r = this.getInsertIndexForNode(t), a = e - i;
                if (r < i) for (s = 0; s < a; s++) {
                    h = this.getChildAt(i + s), this.setChildIndex(h, r + s);
                } else for (s = 0; s < a; s++) {
                    h = this.getChildAt(i), this.setChildIndex(h, r);
                }
            }
        }, {
            key: "getFolderEndIndex",
            value: function getFolderEndIndex(t, e) {
                for (var i = this.numChildren, s = t + 1; s < i; s++) {
                    if (this.getChildAt(s)._treeNode.level <= e) return s;
                }
                return i;
            }
        }, {
            key: "checkChildren",
            value: function checkChildren(t, e) {
                for (var i = t.numChildren, s = 0; s < i; s++) {
                    e++;
                    var h = t.getChildAt(s);
                    h._cell || this.createCell(h), h._cell.parent || this.addChildAt(h._cell, e), h.isFolder && h.expanded && (e = this.checkChildren(h, e));
                }
                return e;
            }
        }, {
            key: "hideFolderNode",
            value: function hideFolderNode(t) {
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s._cell && this.removeChild(s._cell), s.isFolder && s.expanded && this.hideFolderNode(s);
                }
            }
        }, {
            key: "removeNode",
            value: function removeNode(t) {
                if (t._cell && (t._cell.parent && this.removeChild(t._cell), this.returnToPool(t._cell), 
                t._cell._treeNode = null, t._cell = null), t.isFolder) for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    this.removeNode(s);
                }
            }
        }, {
            key: "__cellMouseDown",
            value: function __cellMouseDown(e) {
                var i = t.GObject.cast(e.currentTarget)._treeNode;
                this._expandedStatusInEvt = i.expanded;
            }
        }, {
            key: "__expandedStateChanged",
            value: function __expandedStateChanged(t) {
                t.parent._treeNode.expanded = 1 == t.selectedIndex;
            }
        }, {
            key: "dispatchItemEvent",
            value: function dispatchItemEvent(t, e) {
                if (0 != this._clickToExpand) {
                    var i = t._treeNode;
                    i && i.isFolder && this._expandedStatusInEvt == i.expanded && (2 == this._clickToExpand || (i.expanded = !i.expanded));
                }
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class19.prototype), "dispatchItemEvent", this).call(this, t, e);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(t, e) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class19.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 9), this._indent = t.getInt32(), this._clickToExpand = t.getUint8();
            }
        }, {
            key: "readItems",
            value: function readItems(e) {
                var i, s, h, r, a, n, o, l = 0;
                for (i = e.getInt16(), s = 0; s < i; s++) {
                    if (h = e.getInt16(), h += e.pos, null != (r = e.readS()) || (r = this.defaultItem)) {
                        a = e.readBool(), o = e.getUint8();
                        var _ = new t.GTreeNode(a, r);
                        if (_.expanded = !0, 0 == s) this._rootNode.addChild(_); else if (o > l) n.addChild(_); else if (o < l) {
                            for (var d = o; d <= l; d++) {
                                n = n.parent;
                            }
                            n.addChild(_);
                        } else n.parent.addChild(_);
                        n = _, l = o, this.setupItem(e, _.cell), e.pos = h;
                    } else e.pos = h;
                }
            }
        }, {
            key: "rootNode",
            get: function get() {
                return this._rootNode;
            }
        }, {
            key: "indent",
            get: function get() {
                return this._indent;
            },
            set: function set(t) {
                this._indent = t;
            }
        }, {
            key: "clickToExpand",
            get: function get() {
                return this._clickToExpand;
            },
            set: function set(t) {
                this._clickToExpand = t;
            }
        } ]);
        return _class19;
    }(t.GList);
    var Y = new Array();
    t.GTreeNode = /* */ function() {
        function _class20(t, e) {
            (0, _classCallCheck2.default)(this, _class20);
            this._level = 0, this._resURL = e, t && (this._children = new Array());
        }
        (0, _createClass2.default)(_class20, [ {
            key: "_setLevel",
            value: function _setLevel(t) {
                this._level = t;
            }
        }, {
            key: "addChild",
            value: function addChild(t) {
                return this.addChildAt(t, this._children.length), t;
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(t, e) {
                if (!t) throw new Error("child is null");
                var i = this._children.length;
                if (e >= 0 && e <= i) return t._parent == this ? this.setChildIndex(t, e) : (t._parent && t._parent.removeChild(t), 
                e == this._children.length ? this._children.push(t) : this._children.splice(e, 0, t), 
                t._parent = this, t._level = this._level + 1, t._setTree(this._tree), (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) && this._tree._afterInserted(t)), 
                t;
                throw new RangeError("Invalid child index");
            }
        }, {
            key: "removeChild",
            value: function removeChild(t) {
                var e = this._children.indexOf(t);
                return -1 != e && this.removeChildAt(e), t;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(t) {
                if (t >= 0 && t < this.numChildren) {
                    var e = this._children[t];
                    return this._children.splice(t, 1), e._parent = null, this._tree && (e._setTree(null), 
                    this._tree._afterRemoved(e)), e;
                }
                throw "Invalid child index";
            }
        }, {
            key: "removeChildren",
            value: function removeChildren(t, e) {
                t = t || 0, null == e && (e = -1), (e < 0 || e >= this.numChildren) && (e = this.numChildren - 1);
                for (var i = t; i <= e; ++i) {
                    this.removeChildAt(t);
                }
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(t) {
                if (t >= 0 && t < this.numChildren) return this._children[t];
                throw "Invalid child index";
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "getPrevSibling",
            value: function getPrevSibling() {
                if (null == this._parent) return null;
                var t = this._parent._children.indexOf(this);
                return t <= 0 ? null : this._parent._children[t - 1];
            }
        }, {
            key: "getNextSibling",
            value: function getNextSibling() {
                if (null == this._parent) return null;
                var t = this._parent._children.indexOf(this);
                return t < 0 || t >= this._parent._children.length - 1 ? null : this._parent._children[t + 1];
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(t, e) {
                var i = this._children.indexOf(t);
                if (-1 == i) throw "Not a child of this container";
                var s = this._children.length;
                e < 0 ? e = 0 : e > s && (e = s), i != e && (this._children.splice(i, 1), this._children.splice(e, 0, t), 
                (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) && this._tree._afterMoved(t));
            }
        }, {
            key: "swapChildren",
            value: function swapChildren(t, e) {
                var i = this._children.indexOf(t), s = this._children.indexOf(e);
                if (-1 == i || -1 == s) throw "Not a child of this container";
                this.swapChildrenAt(i, s);
            }
        }, {
            key: "swapChildrenAt",
            value: function swapChildrenAt(t, e) {
                var i = this._children[t], s = this._children[e];
                this.setChildIndex(i, e), this.setChildIndex(s, t);
            }
        }, {
            key: "expandToRoot",
            value: function expandToRoot() {
                for (var t = this; t; ) {
                    t.expanded = !0, t = t.parent;
                }
            }
        }, {
            key: "_setTree",
            value: function _setTree(t) {
                if (this._tree = t, this._tree && this._tree.treeNodeWillExpand && this._expanded && this._tree.treeNodeWillExpand.runWith([ this, !0 ]), 
                this._children) for (var e = this._children.length, i = 0; i < e; i++) {
                    var s = this._children[i];
                    s._level = this._level + 1, s._setTree(t);
                }
            }
        }, {
            key: "expanded",
            set: function set(t) {
                null != this._children && this._expanded != t && (this._expanded = t, this._tree && (this._expanded ? this._tree._afterExpanded(this) : this._tree._afterCollapsed(this)));
            },
            get: function get() {
                return this._expanded;
            }
        }, {
            key: "isFolder",
            get: function get() {
                return null != this._children;
            }
        }, {
            key: "parent",
            get: function get() {
                return this._parent;
            }
        }, {
            key: "text",
            get: function get() {
                return this._cell ? this._cell.text : null;
            },
            set: function set(t) {
                this._cell && (this._cell.text = t);
            }
        }, {
            key: "icon",
            get: function get() {
                return this._cell ? this._cell.icon : null;
            },
            set: function set(t) {
                this._cell && (this._cell.icon = t);
            }
        }, {
            key: "cell",
            get: function get() {
                return this._cell;
            }
        }, {
            key: "level",
            get: function get() {
                return this._level;
            }
        }, {
            key: "numChildren",
            get: function get() {
                return this._children.length;
            }
        }, {
            key: "tree",
            get: function get() {
                return this._tree;
            }
        } ]);
        return _class20;
    }();
    t.PackageItem = /* */ function() {
        function _class21() {
            (0, _classCallCheck2.default)(this, _class21);
            this.width = 0, this.height = 0;
        }
        (0, _createClass2.default)(_class21, [ {
            key: "load",
            value: function load() {
                return this.owner.getItemAsset(this);
            }
        }, {
            key: "getBranch",
            value: function getBranch() {
                if (this.branches && -1 != this.owner._branchIndex) {
                    var t = this.branches[this.owner._branchIndex];
                    if (t) return this.owner.getItemById(t);
                }
                return this;
            }
        }, {
            key: "getHighResolution",
            value: function getHighResolution() {
                if (this.highResolution && t.GRoot.contentScaleLevel > 0) {
                    var e = this.highResolution[t.GRoot.contentScaleLevel - 1];
                    if (e) return this.owner.getItemById(e);
                }
                return this;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.name;
            }
        } ]);
        return _class21;
    }();
    t.PopupMenu = /* */ function() {
        function _class22(e) {
            (0, _classCallCheck2.default)(this, _class22);
            if (!e && !(e = t.UIConfig.popupMenu)) throw "UIConfig.popupMenu not defined";
            this._contentPane = t.UIPackage.createObjectFromURL(e).asCom, this._contentPane.on(Laya.Event.DISPLAY, this, this.__addedToStage), 
            this._list = this._contentPane.getChild("list"), this._list.removeChildrenToPool(), 
            this._list.addRelation(this._contentPane, t.RelationType.Width), this._list.removeRelation(this._contentPane, t.RelationType.Height), 
            this._contentPane.addRelation(this._list, t.RelationType.Height), this._list.on(t.Events.CLICK_ITEM, this, this.__clickItem);
        }
        (0, _createClass2.default)(_class22, [ {
            key: "dispose",
            value: function dispose() {
                this._contentPane.dispose();
            }
        }, {
            key: "addItem",
            value: function addItem(t, e) {
                var i = this._list.addItemFromPool().asButton;
                i.title = t, i.data = e, i.grayed = !1;
                var s = i.getController("checked");
                return s && (s.selectedIndex = 0), i;
            }
        }, {
            key: "addItemAt",
            value: function addItemAt(t, e, i) {
                var s = this._list.getFromPool().asButton;
                this._list.addChildAt(s, e), s.title = t, s.data = i, s.grayed = !1;
                var h = s.getController("checked");
                return h && (h.selectedIndex = 0), s;
            }
        }, {
            key: "addSeperator",
            value: function addSeperator() {
                if (null == t.UIConfig.popupMenu_seperator) throw "UIConfig.popupMenu_seperator not defined";
                this.list.addItemFromPool(t.UIConfig.popupMenu_seperator);
            }
        }, {
            key: "getItemName",
            value: function getItemName(t) {
                return this._list.getChildAt(t).name;
            }
        }, {
            key: "setItemText",
            value: function setItemText(t, e) {
                this._list.getChild(t).asButton.title = e;
            }
        }, {
            key: "setItemVisible",
            value: function setItemVisible(t, e) {
                var i = this._list.getChild(t).asButton;
                i.visible != e && (i.visible = e, this._list.setBoundsChangedFlag());
            }
        }, {
            key: "setItemGrayed",
            value: function setItemGrayed(t, e) {
                this._list.getChild(t).asButton.grayed = e;
            }
        }, {
            key: "setItemCheckable",
            value: function setItemCheckable(t, e) {
                var i = this._list.getChild(t).asButton.getController("checked");
                i && (e ? 0 == i.selectedIndex && (i.selectedIndex = 1) : i.selectedIndex = 0);
            }
        }, {
            key: "setItemChecked",
            value: function setItemChecked(t, e) {
                var i = this._list.getChild(t).asButton.getController("checked");
                i && (i.selectedIndex = e ? 2 : 1);
            }
        }, {
            key: "isItemChecked",
            value: function isItemChecked(t) {
                var e = this._list.getChild(t).asButton.getController("checked");
                return !!e && 2 == e.selectedIndex;
            }
        }, {
            key: "removeItem",
            value: function removeItem(t) {
                var e = this._list.getChild(t);
                if (e) {
                    var i = this._list.getChildIndex(e);
                    return this._list.removeChildToPoolAt(i), !0;
                }
                return !1;
            }
        }, {
            key: "clearItems",
            value: function clearItems() {
                this._list.removeChildrenToPool();
            }
        }, {
            key: "show",
            value: function show() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var i = arguments.length > 1 ? arguments[1] : undefined;
                (null != e ? e.root : t.GRoot.inst).showPopup(this.contentPane, e instanceof t.GRoot ? null : e, i);
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(t) {
                Laya.timer.once(100, this, this.__clickItem2, [ t ]);
            }
        }, {
            key: "__clickItem2",
            value: function __clickItem2(e) {
                if (e instanceof t.GButton) if (e.grayed) this._list.selectedIndex = -1; else {
                    var i = e.asCom.getController("checked");
                    i && 0 != i.selectedIndex && (1 == i.selectedIndex ? i.selectedIndex = 2 : i.selectedIndex = 1), 
                    this._contentPane.parent.hidePopup(this.contentPane), null != e.data && e.data.run();
                }
            }
        }, {
            key: "__addedToStage",
            value: function __addedToStage() {
                this._list.selectedIndex = -1, this._list.resizeToFit(1e5, 10);
            }
        }, {
            key: "itemCount",
            get: function get() {
                return this._list.numChildren;
            }
        }, {
            key: "contentPane",
            get: function get() {
                return this._contentPane;
            }
        }, {
            key: "list",
            get: function get() {
                return this._list;
            }
        } ]);
        return _class22;
    }();
    t.RelationItem = /* */ function() {
        function _class23(t) {
            (0, _classCallCheck2.default)(this, _class23);
            this._owner = t, this._defs = new Array();
        }
        (0, _createClass2.default)(_class23, [ {
            key: "add",
            value: function add(e, i) {
                if (e == t.RelationType.Size) return this.add(t.RelationType.Width, i), void this.add(t.RelationType.Height, i);
                for (var s = this._defs.length, h = 0; h < s; h++) {
                    if (this._defs[h].type == e) return;
                }
                this.internalAdd(e, i);
            }
        }, {
            key: "internalAdd",
            value: function internalAdd(e, i) {
                if (e == t.RelationType.Size) return this.internalAdd(t.RelationType.Width, i), 
                void this.internalAdd(t.RelationType.Height, i);
                var s = new X();
                s.percent = i, s.type = e, s.axis = e <= t.RelationType.Right_Right || e == t.RelationType.Width || e >= t.RelationType.LeftExt_Left && e <= t.RelationType.RightExt_Right ? 0 : 1, 
                this._defs.push(s);
            }
        }, {
            key: "remove",
            value: function remove(e) {
                if (e == t.RelationType.Size) return this.remove(t.RelationType.Width), void this.remove(t.RelationType.Height);
                for (var i = this._defs.length, s = 0; s < i; s++) {
                    if (this._defs[s].type == e) {
                        this._defs.splice(s, 1);
                        break;
                    }
                }
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(t) {
                this._target = t.target, this._defs.length = 0;
                for (var e = t._defs.length, i = 0; i < e; i++) {
                    var s = t._defs[i], h = new X();
                    h.copyFrom(s), this._defs.push(h);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this._target && (this.releaseRefTarget(), this._target = null);
            }
        }, {
            key: "applyOnSelfResized",
            value: function applyOnSelfResized(e, i, s) {
                var h = this._defs.length;
                if (0 != h) {
                    for (var r = this._owner.x, a = this._owner.y, n = 0; n < h; n++) {
                        switch (this._defs[n].type) {
                          case t.RelationType.Center_Center:
                            this._owner.x -= (.5 - (s ? this._owner.pivotX : 0)) * e;
                            break;

                          case t.RelationType.Right_Center:
                          case t.RelationType.Right_Left:
                          case t.RelationType.Right_Right:
                            this._owner.x -= (1 - (s ? this._owner.pivotX : 0)) * e;
                            break;

                          case t.RelationType.Middle_Middle:
                            this._owner.y -= (.5 - (s ? this._owner.pivotY : 0)) * i;
                            break;

                          case t.RelationType.Bottom_Middle:
                          case t.RelationType.Bottom_Top:
                          case t.RelationType.Bottom_Bottom:
                            this._owner.y -= (1 - (s ? this._owner.pivotY : 0)) * i;
                        }
                    }
                    if ((r != this._owner.x || a != this._owner.y) && (r = this._owner.x - r, a = this._owner.y - a, 
                    this._owner.updateGearFromRelations(1, r, a), this._owner.parent && this._owner.parent._transitions.length > 0)) {
                        h = this._owner.parent._transitions.length;
                        for (var o = 0; o < h; o++) {
                            this._owner.parent._transitions[o].updateFromRelations(this._owner.id, r, a);
                        }
                    }
                }
            }
        }, {
            key: "applyOnXYChanged",
            value: function applyOnXYChanged(e, i, s) {
                var h;
                switch (e.type) {
                  case t.RelationType.Left_Left:
                  case t.RelationType.Left_Center:
                  case t.RelationType.Left_Right:
                  case t.RelationType.Center_Center:
                  case t.RelationType.Right_Left:
                  case t.RelationType.Right_Center:
                  case t.RelationType.Right_Right:
                    this._owner.x += i;
                    break;

                  case t.RelationType.Top_Top:
                  case t.RelationType.Top_Middle:
                  case t.RelationType.Top_Bottom:
                  case t.RelationType.Middle_Middle:
                  case t.RelationType.Bottom_Top:
                  case t.RelationType.Bottom_Middle:
                  case t.RelationType.Bottom_Bottom:
                    this._owner.y += s;
                    break;

                  case t.RelationType.Width:
                  case t.RelationType.Height:
                    break;

                  case t.RelationType.LeftExt_Left:
                  case t.RelationType.LeftExt_Right:
                    this._owner != this._target.parent ? (h = this._owner.xMin, this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = h + i) : this._owner.width = this._owner._rawWidth - i;
                    break;

                  case t.RelationType.RightExt_Left:
                  case t.RelationType.RightExt_Right:
                    this._owner != this._target.parent ? (h = this._owner.xMin, this._owner.width = this._owner._rawWidth + i, 
                    this._owner.xMin = h) : this._owner.width = this._owner._rawWidth + i;
                    break;

                  case t.RelationType.TopExt_Top:
                  case t.RelationType.TopExt_Bottom:
                    this._owner != this._target.parent ? (h = this._owner.yMin, this._owner.height = this._owner._rawHeight - s, 
                    this._owner.yMin = h + s) : this._owner.height = this._owner._rawHeight - s;
                    break;

                  case t.RelationType.BottomExt_Top:
                  case t.RelationType.BottomExt_Bottom:
                    this._owner != this._target.parent ? (h = this._owner.yMin, this._owner.height = this._owner._rawHeight + s, 
                    this._owner.yMin = h) : this._owner.height = this._owner._rawHeight + s;
                }
            }
        }, {
            key: "applyOnSizeChanged",
            value: function applyOnSizeChanged(e) {
                var i, s, h = 0, r = 0, a = 0;
                switch (0 == e.axis ? (this._target != this._owner.parent && (h = this._target.x, 
                this._target.pivotAsAnchor && (r = this._target.pivotX)), e.percent ? 0 != this._targetWidth && (a = this._target._width / this._targetWidth) : a = this._target._width - this._targetWidth) : (this._target != this._owner.parent && (h = this._target.y, 
                this._target.pivotAsAnchor && (r = this._target.pivotY)), e.percent ? 0 != this._targetHeight && (a = this._target._height / this._targetHeight) : a = this._target._height - this._targetHeight), 
                e.type) {
                  case t.RelationType.Left_Left:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin - h) * a : 0 != r && (this._owner.x += a * -r);
                    break;

                  case t.RelationType.Left_Center:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin - h) * a : this._owner.x += a * (.5 - r);
                    break;

                  case t.RelationType.Left_Right:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin - h) * a : this._owner.x += a * (1 - r);
                    break;

                  case t.RelationType.Center_Center:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin + .5 * this._owner._rawWidth - h) * a - .5 * this._owner._rawWidth : this._owner.x += a * (.5 - r);
                    break;

                  case t.RelationType.Right_Left:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin + this._owner._rawWidth - h) * a - this._owner._rawWidth : 0 != r && (this._owner.x += a * -r);
                    break;

                  case t.RelationType.Right_Center:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin + this._owner._rawWidth - h) * a - this._owner._rawWidth : this._owner.x += a * (.5 - r);
                    break;

                  case t.RelationType.Right_Right:
                    e.percent ? this._owner.xMin = h + (this._owner.xMin + this._owner._rawWidth - h) * a - this._owner._rawWidth : this._owner.x += a * (1 - r);
                    break;

                  case t.RelationType.Top_Top:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin - h) * a : 0 != r && (this._owner.y += a * -r);
                    break;

                  case t.RelationType.Top_Middle:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin - h) * a : this._owner.y += a * (.5 - r);
                    break;

                  case t.RelationType.Top_Bottom:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin - h) * a : this._owner.y += a * (1 - r);
                    break;

                  case t.RelationType.Middle_Middle:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin + .5 * this._owner._rawHeight - h) * a - .5 * this._owner._rawHeight : this._owner.y += a * (.5 - r);
                    break;

                  case t.RelationType.Bottom_Top:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin + this._owner._rawHeight - h) * a - this._owner._rawHeight : 0 != r && (this._owner.y += a * -r);
                    break;

                  case t.RelationType.Bottom_Middle:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin + this._owner._rawHeight - h) * a - this._owner._rawHeight : this._owner.y += a * (.5 - r);
                    break;

                  case t.RelationType.Bottom_Bottom:
                    e.percent ? this._owner.yMin = h + (this._owner.yMin + this._owner._rawHeight - h) * a - this._owner._rawHeight : this._owner.y += a * (1 - r);
                    break;

                  case t.RelationType.Width:
                    i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceWidth - this._target.initWidth : this._owner._rawWidth - this._targetWidth, 
                    e.percent && (i *= a), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (s = this._owner.xMin, 
                    this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0), this._owner.xMin = s) : this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0) : this._owner.width = this._target._width + i;
                    break;

                  case t.RelationType.Height:
                    i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceHeight - this._target.initHeight : this._owner._rawHeight - this._targetHeight, 
                    e.percent && (i *= a), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (s = this._owner.yMin, 
                    this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0), this._owner.yMin = s) : this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0) : this._owner.height = this._target._height + i;
                    break;

                  case t.RelationType.LeftExt_Left:
                    s = this._owner.xMin, i = e.percent ? h + (s - h) * a - s : a * -r, this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = s + i;
                    break;

                  case t.RelationType.LeftExt_Right:
                    s = this._owner.xMin, i = e.percent ? h + (s - h) * a - s : a * (1 - r), this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = s + i;
                    break;

                  case t.RelationType.RightExt_Left:
                    s = this._owner.xMin, i = e.percent ? h + (s + this._owner._rawWidth - h) * a - (s + this._owner._rawWidth) : a * -r, 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s;
                    break;

                  case t.RelationType.RightExt_Right:
                    s = this._owner.xMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = h + this._target._width - this._target._width * r + (this._owner.sourceWidth - h - this._target.initWidth + this._target.initWidth * r) * a : this._owner.width = h + (this._owner._rawWidth - h) * a : (i = h + (s + this._owner._rawWidth - h) * a - (s + this._owner._rawWidth), 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - r) : this._owner.width = this._owner._rawWidth + a * (1 - r) : (i = a * (1 - r), 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s);
                    break;

                  case t.RelationType.TopExt_Top:
                    s = this._owner.yMin, i = e.percent ? h + (s - h) * a - s : a * -r, this._owner.height = this._owner._rawHeight - i, 
                    this._owner.yMin = s + i;
                    break;

                  case t.RelationType.TopExt_Bottom:
                    s = this._owner.yMin, i = e.percent ? h + (s - h) * a - s : a * (1 - r), this._owner.height = this._owner._rawHeight - i, 
                    this._owner.yMin = s + i;
                    break;

                  case t.RelationType.BottomExt_Top:
                    s = this._owner.yMin, i = e.percent ? h + (s + this._owner._rawHeight - h) * a - (s + this._owner._rawHeight) : a * -r, 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s;
                    break;

                  case t.RelationType.BottomExt_Bottom:
                    s = this._owner.yMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = h + this._target._height - this._target._height * r + (this._owner.sourceHeight - h - this._target.initHeight + this._target.initHeight * r) * a : this._owner.height = h + (this._owner._rawHeight - h) * a : (i = h + (s + this._owner._rawHeight - h) * a - (s + this._owner._rawHeight), 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - r) : this._owner.height = this._owner._rawHeight + a * (1 - r) : (i = a * (1 - r), 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s);
                }
            }
        }, {
            key: "addRefTarget",
            value: function addRefTarget() {
                this._target != this._owner.parent && this._target.on(t.Events.XY_CHANGED, this, this.__targetXYChanged), 
                this._target.on(t.Events.SIZE_CHANGED, this, this.__targetSizeChanged), this._target.on(t.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange), 
                this._targetX = this._target.x, this._targetY = this._target.y, this._targetWidth = this._target._width, 
                this._targetHeight = this._target._height;
            }
        }, {
            key: "releaseRefTarget",
            value: function releaseRefTarget() {
                null != this._target.displayObject && (this._target.off(t.Events.XY_CHANGED, this, this.__targetXYChanged), 
                this._target.off(t.Events.SIZE_CHANGED, this, this.__targetSizeChanged), this._target.off(t.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange));
            }
        }, {
            key: "__targetXYChanged",
            value: function __targetXYChanged() {
                if (null != this._owner.relations.handling || null != this._owner.group && this._owner.group._updating) return this._targetX = this._target.x, 
                void (this._targetY = this._target.y);
                this._owner.relations.handling = this._target;
                for (var t = this._owner.x, e = this._owner.y, i = this._target.x - this._targetX, s = this._target.y - this._targetY, h = this._defs.length, r = 0; r < h; r++) {
                    this.applyOnXYChanged(this._defs[r], i, s);
                }
                if (this._targetX = this._target.x, this._targetY = this._target.y, (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, 
                e = this._owner.y - e, this._owner.updateGearFromRelations(1, t, e), this._owner.parent && this._owner.parent._transitions.length > 0)) {
                    h = this._owner.parent._transitions.length;
                    for (var a = 0; a < h; a++) {
                        this._owner.parent._transitions[a].updateFromRelations(this._owner.id, t, e);
                    }
                }
                this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeChanged",
            value: function __targetSizeChanged() {
                if (this._owner.relations.sizeDirty && this._owner.relations.ensureRelationsSizeCorrect(), 
                null != this._owner.relations.handling) return this._targetWidth = this._target._width, 
                void (this._targetHeight = this._target._height);
                this._owner.relations.handling = this._target;
                for (var t = this._owner.x, e = this._owner.y, i = this._owner._rawWidth, s = this._owner._rawHeight, h = this._defs.length, r = 0; r < h; r++) {
                    this.applyOnSizeChanged(this._defs[r]);
                }
                if (this._targetWidth = this._target._width, this._targetHeight = this._target._height, 
                (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, e = this._owner.y - e, 
                this._owner.updateGearFromRelations(1, t, e), this._owner.parent && this._owner.parent._transitions.length > 0)) {
                    h = this._owner.parent._transitions.length;
                    for (var a = 0; a < h; a++) {
                        this._owner.parent._transitions[a].updateFromRelations(this._owner.id, t, e);
                    }
                }
                i == this._owner._rawWidth && s == this._owner._rawHeight || (i = this._owner._rawWidth - i, 
                s = this._owner._rawHeight - s, this._owner.updateGearFromRelations(2, i, s)), this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeWillChange",
            value: function __targetSizeWillChange() {
                this._owner.relations.sizeDirty = !0;
            }
        }, {
            key: "owner",
            get: function get() {
                return this._owner;
            }
        }, {
            key: "target",
            set: function set(t) {
                this._target != t && (this._target && this.releaseRefTarget(), this._target = t, 
                this._target && this.addRefTarget());
            },
            get: function get() {
                return this._target;
            }
        }, {
            key: "isEmpty",
            get: function get() {
                return 0 == this._defs.length;
            }
        } ]);
        return _class23;
    }();
    var X = /* */ function() {
        function X() {
            (0, _classCallCheck2.default)(this, X);
        }
        (0, _createClass2.default)(X, [ {
            key: "copyFrom",
            value: function copyFrom(t) {
                this.percent = t.percent, this.type = t.type, this.axis = t.axis;
            }
        } ]);
        return X;
    }();
    t.Relations = /* */ function() {
        function _class24(t) {
            (0, _classCallCheck2.default)(this, _class24);
            this._owner = t, this._items = [];
        }
        (0, _createClass2.default)(_class24, [ {
            key: "add",
            value: function add(e, i, s) {
                for (var h = this._items.length, r = 0; r < h; r++) {
                    var a = this._items[r];
                    if (a.target == e) return void a.add(i, s);
                }
                var n = new t.RelationItem(this._owner);
                n.target = e, n.add(i, s), this._items.push(n);
            }
        }, {
            key: "remove",
            value: function remove(t, e) {
                e = e || 0;
                for (var i = this._items.length, s = 0; s < i; ) {
                    var h = this._items[s];
                    h.target == t ? (h.remove(e), h.isEmpty ? (h.dispose(), this._items.splice(s, 1), 
                    i--) : s++) : s++;
                }
            }
        }, {
            key: "contains",
            value: function contains(t) {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    if (this._items[i].target == t) return !0;
                }
                return !1;
            }
        }, {
            key: "clearFor",
            value: function clearFor(t) {
                for (var e = this._items.length, i = 0; i < e; ) {
                    var s = this._items[i];
                    s.target == t ? (s.dispose(), this._items.splice(i, 1), e--) : i++;
                }
            }
        }, {
            key: "clearAll",
            value: function clearAll() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    this._items[e].dispose();
                }
                this._items.length = 0;
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(e) {
                this.clearAll();
                for (var i = e._items, s = i.length, h = 0; h < s; h++) {
                    var r = i[h], a = new t.RelationItem(this._owner);
                    a.copyFrom(r), this._items.push(a);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.clearAll();
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function onOwnerSizeChanged(t, e, i) {
                if (0 != this._items.length) for (var s = this._items.length, h = 0; h < s; h++) {
                    this._items[h].applyOnSelfResized(t, e, i);
                }
            }
        }, {
            key: "ensureRelationsSizeCorrect",
            value: function ensureRelationsSizeCorrect() {
                if (0 != this._items.length) {
                    this.sizeDirty = !1;
                    for (var t = this._items.length, e = 0; e < t; e++) {
                        this._items[e].target.ensureSizeCorrect();
                    }
                }
            }
        }, {
            key: "setup",
            value: function setup(e, i) {
                for (var s, h = e.readByte(), r = 0; r < h; r++) {
                    var a = e.getInt16();
                    s = -1 == a ? this._owner.parent : i ? this._owner.getChildAt(a) : this._owner.parent.getChildAt(a);
                    var n = new t.RelationItem(this._owner);
                    n.target = s, this._items.push(n);
                    for (var o = e.readByte(), l = 0; l < o; l++) {
                        var _ = e.readByte(), d = e.readBool();
                        n.internalAdd(_, d);
                    }
                }
            }
        }, {
            key: "empty",
            get: function get() {
                return 0 == this._items.length;
            }
        } ]);
        return _class24;
    }();
    var q = /* */ function() {
        function q(e) {
            (0, _classCallCheck2.default)(this, q);
            this._owner = e, this._maskContainer = new Laya.Sprite(), this._owner.displayObject.addChild(this._maskContainer), 
            this._container = this._owner._container, this._container.pos(0, 0), this._maskContainer.addChild(this._container), 
            this._mouseWheelEnabled = !0, this._xPos = 0, this._yPos = 0, this._aniFlag = 0, 
            this._tweening = 0, this._loop = 0, this._footerLockedSize = 0, this._headerLockedSize = 0, 
            this._scrollBarMargin = new t.Margin(), this._viewSize = new Laya.Point(), this._contentSize = new Laya.Point(), 
            this._pageSize = new Laya.Point(1, 1), this._overlapSize = new Laya.Point(), this._tweenTime = new Laya.Point(), 
            this._tweenStart = new Laya.Point(), this._tweenDuration = new Laya.Point(), this._tweenChange = new Laya.Point(), 
            this._velocity = new Laya.Point(), this._containerPos = new Laya.Point(), this._beginTouchPos = new Laya.Point(), 
            this._lastTouchPos = new Laya.Point(), this._lastTouchGlobalPos = new Laya.Point(), 
            this._scrollStep = t.UIConfig.defaultScrollStep, this._mouseWheelStep = 2 * this._scrollStep, 
            this._decelerationRate = t.UIConfig.defaultScrollDecelerationRate, this._owner.on(Laya.Event.MOUSE_DOWN, this, this.__mouseDown), 
            this._owner.on(Laya.Event.MOUSE_WHEEL, this, this.__mouseWheel);
        }
        (0, _createClass2.default)(q, [ {
            key: "setup",
            value: function setup(e) {
                this._scrollType = e.readByte();
                var i = e.readByte(), s = e.getInt32();
                e.readBool() && (this._scrollBarMargin.top = e.getInt32(), this._scrollBarMargin.bottom = e.getInt32(), 
                this._scrollBarMargin.left = e.getInt32(), this._scrollBarMargin.right = e.getInt32());
                var h = e.readS(), r = e.readS(), a = e.readS(), n = e.readS();
                if (0 != (1 & s) && (this._displayOnLeft = !0), 0 != (2 & s) && (this._snapToItem = !0), 
                0 != (4 & s) && (this._displayInDemand = !0), 0 != (8 & s) && (this._pageMode = !0), 
                this._touchEffect = !!(16 & s) || !(32 & s) && t.UIConfig.defaultScrollTouchEffect, 
                this._bouncebackEffect = !!(64 & s) || !(128 & s) && t.UIConfig.defaultScrollBounceEffect, 
                0 != (256 & s) && (this._inertiaDisabled = !0), 0 == (512 & s) && (this._maskContainer.scrollRect = new Laya.Rectangle()), 
                0 != (1024 & s) && (this._floating = !0), 0 != (2048 & s) && (this._dontClipMargin = !0), 
                i == t.ScrollBarDisplayType.Default && (i = t.UIConfig.defaultScrollBarDisplay), 
                i != t.ScrollBarDisplayType.Hidden) {
                    if (this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical) {
                        var o = h || t.UIConfig.verticalScrollBar;
                        if (o) {
                            if (this._vtScrollBar = t.UIPackage.createObjectFromURL(o), !this._vtScrollBar) throw "cannot create scrollbar from " + o;
                            this._vtScrollBar.setScrollPane(this, !0), this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
                        }
                    }
                    if ((this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Horizontal) && (o = r || t.UIConfig.horizontalScrollBar)) {
                        if (this._hzScrollBar = t.UIPackage.createObjectFromURL(o), !this._hzScrollBar) throw "cannot create scrollbar from " + o;
                        this._hzScrollBar.setScrollPane(this, !1), this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
                    }
                    i == t.ScrollBarDisplayType.Auto && (this._scrollBarDisplayAuto = !0), this._scrollBarDisplayAuto && (this._vtScrollBar && (this._vtScrollBar.displayObject.visible = !1), 
                    this._hzScrollBar && (this._hzScrollBar.displayObject.visible = !1));
                } else this._mouseWheelEnabled = !1;
                if (a && (this._header = t.UIPackage.createObjectFromURL(a), !this._header)) throw new Error("FairyGUI: cannot create scrollPane this.header from " + a);
                if (n && (this._footer = t.UIPackage.createObjectFromURL(n), !this._footer)) throw new Error("FairyGUI: cannot create scrollPane this.footer from " + n);
                (this._header || this._footer) && (this._refreshBarAxis = this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical ? "y" : "x"), 
                this.setSize(this.owner.width, this.owner.height);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                q.draggingPane == this && (q.draggingPane = null), 0 != this._tweening && Laya.timer.clear(this, this.tweenUpdate), 
                this._pageController = null, this._hzScrollBar && this._hzScrollBar.dispose(), this._vtScrollBar && this._vtScrollBar.dispose(), 
                this._header && this._header.dispose(), this._footer && this._footer.dispose();
            }
        }, {
            key: "setPercX",
            value: function setPercX(e, i) {
                this._owner.ensureBoundsCorrect(), this.setPosX(this._overlapSize.x * t.ToolSet.clamp01(e), i);
            }
        }, {
            key: "setPercY",
            value: function setPercY(e, i) {
                this._owner.ensureBoundsCorrect(), this.setPosY(this._overlapSize.y * t.ToolSet.clamp01(e), i);
            }
        }, {
            key: "setPosX",
            value: function setPosX(e, i) {
                this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "x")), 
                (e = t.ToolSet.clamp(e, 0, this._overlapSize.x)) != this._xPos && (this._xPos = e, 
                this.posChanged(i));
            }
        }, {
            key: "setPosY",
            value: function setPosY(e, i) {
                this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "y")), 
                (e = t.ToolSet.clamp(e, 0, this._overlapSize.y)) != this._yPos && (this._yPos = e, 
                this.posChanged(i));
            }
        }, {
            key: "setCurrentPageX",
            value: function setCurrentPageX(t, e) {
                this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.x > 0 && this.setPosX(t * this._pageSize.x, e));
            }
        }, {
            key: "setCurrentPageY",
            value: function setCurrentPageY(t, e) {
                this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.y > 0 && this.setPosY(t * this._pageSize.y, e));
            }
        }, {
            key: "scrollTop",
            value: function scrollTop(t) {
                this.setPercY(0, t);
            }
        }, {
            key: "scrollBottom",
            value: function scrollBottom(t) {
                this.setPercY(1, t);
            }
        }, {
            key: "scrollUp",
            value: function scrollUp(t, e) {
                t = t || 1, this._pageMode ? this.setPosY(this._yPos - this._pageSize.y * t, e) : this.setPosY(this._yPos - this._scrollStep * t, e);
            }
        }, {
            key: "scrollDown",
            value: function scrollDown(t, e) {
                t = t || 1, this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * t, e) : this.setPosY(this._yPos + this._scrollStep * t, e);
            }
        }, {
            key: "scrollLeft",
            value: function scrollLeft(t, e) {
                t = t || 1, this._pageMode ? this.setPosX(this._xPos - this._pageSize.x * t, e) : this.setPosX(this._xPos - this._scrollStep * t, e);
            }
        }, {
            key: "scrollRight",
            value: function scrollRight(t, e) {
                t = t || 1, this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * t, e) : this.setPosX(this._xPos + this._scrollStep * t, e);
            }
        }, {
            key: "scrollToView",
            value: function scrollToView(e, i, s) {
                var h;
                if (this._owner.ensureBoundsCorrect(), this._needRefresh && this.refresh(), e instanceof t.GObject ? e.parent != this._owner ? (e.parent.localToGlobalRect(e.x, e.y, e.width, e.height, J), 
                h = this._owner.globalToLocalRect(J.x, J.y, J.width, J.height, J)) : (h = J).setTo(e.x, e.y, e.width, e.height) : h = e, 
                this._overlapSize.y > 0) {
                    var r = this._yPos + this._viewSize.y;
                    s || h.y <= this._yPos || h.height >= this._viewSize.y ? this._pageMode ? this.setPosY(Math.floor(h.y / this._pageSize.y) * this._pageSize.y, i) : this.setPosY(h.y, i) : h.y + h.height > r && (this._pageMode ? this.setPosY(Math.floor(h.y / this._pageSize.y) * this._pageSize.y, i) : h.height <= this._viewSize.y / 2 ? this.setPosY(h.y + 2 * h.height - this._viewSize.y, i) : this.setPosY(h.y + h.height - this._viewSize.y, i));
                }
                if (this._overlapSize.x > 0) {
                    var a = this._xPos + this._viewSize.x;
                    s || h.x <= this._xPos || h.width >= this._viewSize.x ? this._pageMode ? this.setPosX(Math.floor(h.x / this._pageSize.x) * this._pageSize.x, i) : this.setPosX(h.x, i) : h.x + h.width > a && (this._pageMode ? this.setPosX(Math.floor(h.x / this._pageSize.x) * this._pageSize.x, i) : h.width <= this._viewSize.x / 2 ? this.setPosX(h.x + 2 * h.width - this._viewSize.x, i) : this.setPosX(h.x + h.width - this._viewSize.x, i));
                }
                !i && this._needRefresh && this.refresh();
            }
        }, {
            key: "isChildInView",
            value: function isChildInView(t) {
                if (this._overlapSize.y > 0) {
                    var e = t.y + this._container.y;
                    if (e < -t.height || e > this._viewSize.y) return !1;
                }
                return !(this._overlapSize.x > 0 && ((e = t.x + this._container.x) < -t.width || e > this._viewSize.x));
            }
        }, {
            key: "cancelDragging",
            value: function cancelDragging() {
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp), 
                this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), q.draggingPane == this && (q.draggingPane = null), 
                K = 0, this._dragged = !1, this._maskContainer.mouseEnabled = !0;
            }
        }, {
            key: "lockHeader",
            value: function lockHeader(t) {
                this._headerLockedSize != t && (this._headerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0 && (this._tweenStart.setTo(this._container.x, this._container.y), 
                this._tweenChange.setTo(0, 0), this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis], 
                this._tweenDuration.setTo(Q, Q), this.startTween(2)));
            }
        }, {
            key: "lockFooter",
            value: function lockFooter(t) {
                if (this._footerLockedSize != t && (this._footerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis])) {
                    this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(0, 0);
                    var e = this._overlapSize[this._refreshBarAxis];
                    0 == e ? e = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : e += this._footerLockedSize, 
                    this._tweenChange[this._refreshBarAxis] = -e - this._tweenStart[this._refreshBarAxis], 
                    this._tweenDuration.setTo(Q, Q), this.startTween(2);
                }
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function onOwnerSizeChanged() {
                this.setSize(this._owner.width, this._owner.height), this.posChanged(!1);
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(e) {
                this._pageController == e && (this._scrollType == t.ScrollType.Horizontal ? this.setCurrentPageX(e.selectedIndex, !0) : this.setCurrentPageY(e.selectedIndex, !0));
            }
        }, {
            key: "updatePageController",
            value: function updatePageController() {
                var e;
                if (null != this._pageController && !this._pageController.changing && (e = this._scrollType == t.ScrollType.Horizontal ? this.currentPageX : this.currentPageY) < this._pageController.pageCount) {
                    var i = this._pageController;
                    this._pageController = null, i.selectedIndex = e, this._pageController = i;
                }
            }
        }, {
            key: "adjustMaskContainer",
            value: function adjustMaskContainer() {
                var t = 0, e = 0;
                this._dontClipMargin ? this._displayOnLeft && this._vtScrollBar && !this._floating && (t = this._vtScrollBar.width) : (t = this._displayOnLeft && this._vtScrollBar && !this._floating ? this._owner.margin.left + this._vtScrollBar.width : this._owner.margin.left, 
                e = this._owner.margin.top), this._maskContainer.pos(t, e), t = this._owner._alignOffset.x, 
                e = this._owner._alignOffset.y, (0 != t || 0 != e || this._dontClipMargin) && (this._alignContainer || (this._alignContainer = new Laya.Sprite(), 
                this._maskContainer.addChild(this._alignContainer), this._alignContainer.addChild(this._container))), 
                this._alignContainer && (this._dontClipMargin && (t += this._owner.margin.left, 
                e += this._owner.margin.top), this._alignContainer.pos(t, e));
            }
        }, {
            key: "setSize",
            value: function setSize(t, e) {
                this.adjustMaskContainer(), this._hzScrollBar && (this._hzScrollBar.y = e - this._hzScrollBar.height, 
                this._vtScrollBar ? (this._hzScrollBar.width = t - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right, 
                this._displayOnLeft ? this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width : this._hzScrollBar.x = this._scrollBarMargin.left) : (this._hzScrollBar.width = t - this._scrollBarMargin.left - this._scrollBarMargin.right, 
                this._hzScrollBar.x = this._scrollBarMargin.left)), this._vtScrollBar && (this._displayOnLeft || (this._vtScrollBar.x = t - this._vtScrollBar.width), 
                this._hzScrollBar ? this._vtScrollBar.height = e - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom : this._vtScrollBar.height = e - this._scrollBarMargin.top - this._scrollBarMargin.bottom, 
                this._vtScrollBar.y = this._scrollBarMargin.top), this._viewSize.x = t, this._viewSize.y = e, 
                this._hzScrollBar && !this._floating && (this._viewSize.y -= this._hzScrollBar.height), 
                this._vtScrollBar && !this._floating && (this._viewSize.x -= this._vtScrollBar.width), 
                this._viewSize.x -= this._owner.margin.left + this._owner.margin.right, this._viewSize.y -= this._owner.margin.top + this._owner.margin.bottom, 
                this._viewSize.x = Math.max(1, this._viewSize.x), this._viewSize.y = Math.max(1, this._viewSize.y), 
                this._pageSize.x = this._viewSize.x, this._pageSize.y = this._viewSize.y, this.handleSizeChanged();
            }
        }, {
            key: "setContentSize",
            value: function setContentSize(t, e) {
                this._contentSize.x == t && this._contentSize.y == e || (this._contentSize.x = t, 
                this._contentSize.y = e, this.handleSizeChanged());
            }
        }, {
            key: "changeContentSizeOnScrolling",
            value: function changeContentSizeOnScrolling(t, e, i, s) {
                var h = this._xPos == this._overlapSize.x, r = this._yPos == this._overlapSize.y;
                this._contentSize.x += t, this._contentSize.y += e, this.handleSizeChanged(), 1 == this._tweening ? (0 != t && h && this._tweenChange.x < 0 && (this._xPos = this._overlapSize.x, 
                this._tweenChange.x = -this._xPos - this._tweenStart.x), 0 != e && r && this._tweenChange.y < 0 && (this._yPos = this._overlapSize.y, 
                this._tweenChange.y = -this._yPos - this._tweenStart.y)) : 2 == this._tweening ? (0 != i && (this._container.x -= i, 
                this._tweenStart.x -= i, this._xPos = -this._container.x), 0 != s && (this._container.y -= s, 
                this._tweenStart.y -= s, this._yPos = -this._container.y)) : this._dragged ? (0 != i && (this._container.x -= i, 
                this._containerPos.x -= i, this._xPos = -this._container.x), 0 != s && (this._container.y -= s, 
                this._containerPos.y -= s, this._yPos = -this._container.y)) : (0 != t && h && (this._xPos = this._overlapSize.x, 
                this._container.x = -this._xPos), 0 != e && r && (this._yPos = this._overlapSize.y, 
                this._container.y = -this._yPos)), this._pageMode && this.updatePageController();
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._displayInDemand && (this._vScrollNone = this._contentSize.y <= this._viewSize.y, 
                this._hScrollNone = this._contentSize.x <= this._viewSize.x), this._vtScrollBar && (0 == this._contentSize.y ? this._vtScrollBar.setDisplayPerc(0) : this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y))), 
                this._hzScrollBar && (0 == this._contentSize.x ? this._hzScrollBar.setDisplayPerc(0) : this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x))), 
                this.updateScrollBarVisible();
                var e = this._maskContainer.scrollRect;
                if (e && (e.width = this._viewSize.x, e.height = this._viewSize.y, this._vScrollNone && this._vtScrollBar && (e.width += this._vtScrollBar.width), 
                this._hScrollNone && this._hzScrollBar && (e.height += this._hzScrollBar.height), 
                this._dontClipMargin && (e.width += this._owner.margin.left + this._owner.margin.right, 
                e.height += this._owner.margin.top + this._owner.margin.bottom), this._maskContainer.scrollRect = e), 
                this._scrollType == t.ScrollType.Horizontal || this._scrollType == t.ScrollType.Both ? this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x)) : this._overlapSize.x = 0, 
                this._scrollType == t.ScrollType.Vertical || this._scrollType == t.ScrollType.Both ? this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y)) : this._overlapSize.y = 0, 
                this._xPos = t.ToolSet.clamp(this._xPos, 0, this._overlapSize.x), this._yPos = t.ToolSet.clamp(this._yPos, 0, this._overlapSize.y), 
                null != this._refreshBarAxis) {
                    var i = this._overlapSize[this._refreshBarAxis];
                    0 == i ? i = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : i += this._footerLockedSize, 
                    "x" == this._refreshBarAxis ? this._container.pos(t.ToolSet.clamp(this._container.x, -i, this._headerLockedSize), t.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0)) : this._container.pos(t.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), t.ToolSet.clamp(this._container.y, -i, this._headerLockedSize)), 
                    this._header && ("x" == this._refreshBarAxis ? this._header.height = this._viewSize.y : this._header.width = this._viewSize.x), 
                    this._footer && ("y" == this._refreshBarAxis ? this._footer.height = this._viewSize.y : this._footer.width = this._viewSize.x);
                } else this._container.pos(t.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), t.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
                this.updateScrollBarPos(), this._pageMode && this.updatePageController();
            }
        }, {
            key: "posChanged",
            value: function posChanged(t) {
                0 == this._aniFlag ? this._aniFlag = t ? 1 : -1 : 1 != this._aniFlag || t || (this._aniFlag = -1), 
                this._needRefresh = !0, Laya.timer.callLater(this, this.refresh);
            }
        }, {
            key: "refresh",
            value: function refresh() {
                this._owner.displayObject && (this._needRefresh = !1, Laya.timer.clear(this, this.refresh), 
                (this._pageMode || this._snapToItem) && (tt.setTo(-this._xPos, -this._yPos), this.alignPosition(tt, !1), 
                this._xPos = -tt.x, this._yPos = -tt.y), this.refresh2(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject), 
                this._needRefresh && (this._needRefresh = !1, Laya.timer.clear(this, this.refresh), 
                this.refresh2()), this.updateScrollBarPos(), this._aniFlag = 0);
            }
        }, {
            key: "refresh2",
            value: function refresh2() {
                var t, e;
                1 != this._aniFlag || this._dragged ? (0 != this._tweening && this.killTween(), 
                this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos)), this.loopCheckingCurrent()) : (this._overlapSize.x > 0 ? t = -Math.floor(this._xPos) : (0 != this._container.x && (this._container.x = 0), 
                t = 0), this._overlapSize.y > 0 ? e = -Math.floor(this._yPos) : (0 != this._container.y && (this._container.y = 0), 
                e = 0), t != this._container.x || e != this._container.y ? (this._tweenDuration.setTo($, $), 
                this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(t - this._tweenStart.x, e - this._tweenStart.y), 
                this.startTween(1)) : 0 != this._tweening && this.killTween());
                this._pageMode && this.updatePageController();
            }
        }, {
            key: "__mouseDown",
            value: function __mouseDown() {
                if (this._touchEffect) {
                    0 != this._tweening ? (this.killTween(), this._dragged = !0) : this._dragged = !1;
                    var e = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, N);
                    this._containerPos.setTo(this._container.x, this._container.y), this._beginTouchPos.setTo(e.x, e.y), 
                    this._lastTouchPos.setTo(e.x, e.y), this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY), 
                    this._isHoldAreaDone = !1, this._velocity.setTo(0, 0), this._velocityScale = 1, 
                    this._lastMoveTime = Laya.timer.currTimer / 1e3, this._owner.displayObject.stage.on(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                    this._owner.displayObject.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseUp), this._owner.displayObject.stage.on(Laya.Event.CLICK, this, this.__click), 
                    t.Events.dispatch(t.Events.DRAG_START, this._owner.displayObject);
                }
            }
        }, {
            key: "__mouseMove",
            value: function __mouseMove() {
                if (this._touchEffect && !this.owner.isDisposed && !(q.draggingPane && q.draggingPane != this || t.GObject.draggingObject)) {
                    var e, i, s, h = t.UIConfig.touchScrollSensitivity, r = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, N);
                    if (this._scrollType == t.ScrollType.Vertical) {
                        if (!this._isHoldAreaDone) {
                            if (K |= 1, (e = Math.abs(this._beginTouchPos.y - r.y)) < h) return;
                            if (0 != (2 & K) && e < Math.abs(this._beginTouchPos.x - r.x)) return;
                        }
                        i = !0;
                    } else if (this._scrollType == t.ScrollType.Horizontal) {
                        if (!this._isHoldAreaDone) {
                            if (K |= 2, (e = Math.abs(this._beginTouchPos.x - r.x)) < h) return;
                            if (0 != (1 & K) && e < Math.abs(this._beginTouchPos.y - r.y)) return;
                        }
                        s = !0;
                    } else {
                        if (K = 3, !this._isHoldAreaDone && (e = Math.abs(this._beginTouchPos.y - r.y)) < h && (e = Math.abs(this._beginTouchPos.x - r.x)) < h) return;
                        i = s = !0;
                    }
                    var a = Math.floor(this._containerPos.x + r.x - this._beginTouchPos.x), n = Math.floor(this._containerPos.y + r.y - this._beginTouchPos.y);
                    i && (n > 0 ? this._bouncebackEffect ? this._header && 0 != this._header.maxHeight ? this._container.y = Math.floor(Math.min(.5 * n, this._header.maxHeight)) : this._container.y = Math.floor(Math.min(.5 * n, this._viewSize.y * Z)) : this._container.y = 0 : n < -this._overlapSize.y ? this._bouncebackEffect ? this._footer && this._footer.maxHeight > 0 ? this._container.y = Math.floor(Math.max(.5 * (n + this._overlapSize.y), -this._footer.maxHeight) - this._overlapSize.y) : this._container.y = Math.floor(Math.max(.5 * (n + this._overlapSize.y), -this._viewSize.y * Z) - this._overlapSize.y) : this._container.y = -this._overlapSize.y : this._container.y = n), 
                    s && (a > 0 ? this._bouncebackEffect ? this._header && 0 != this._header.maxWidth ? this._container.x = Math.floor(Math.min(.5 * a, this._header.maxWidth)) : this._container.x = Math.floor(Math.min(.5 * a, this._viewSize.x * Z)) : this._container.x = 0 : a < 0 - this._overlapSize.x ? this._bouncebackEffect ? this._footer && this._footer.maxWidth > 0 ? this._container.x = Math.floor(Math.max(.5 * (a + this._overlapSize.x), -this._footer.maxWidth) - this._overlapSize.x) : this._container.x = Math.floor(Math.max(.5 * (a + this._overlapSize.x), -this._viewSize.x * Z) - this._overlapSize.x) : this._container.x = -this._overlapSize.x : this._container.x = a);
                    var o = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, l = Laya.timer.currTimer / 1e3, _ = Math.max(l - this._lastMoveTime, 1 / o), d = r.x - this._lastTouchPos.x, c = r.y - this._lastTouchPos.y;
                    if (s || (d = 0), i || (c = 0), 0 != _) {
                        var u = _ * o - 1;
                        if (u > 1) {
                            var g = Math.pow(.833, u);
                            this._velocity.x = this._velocity.x * g, this._velocity.y = this._velocity.y * g;
                        }
                        this._velocity.x = t.ToolSet.lerp(this._velocity.x, 60 * d / o / _, 10 * _), this._velocity.y = t.ToolSet.lerp(this._velocity.y, 60 * c / o / _, 10 * _);
                    }
                    var p = this._lastTouchGlobalPos.x - Laya.stage.mouseX, y = this._lastTouchGlobalPos.y - Laya.stage.mouseY;
                    0 != d ? this._velocityScale = Math.abs(p / d) : 0 != c && (this._velocityScale = Math.abs(y / c)), 
                    this._lastTouchPos.setTo(r.x, r.y), this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY), 
                    this._lastMoveTime = l, this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x)), 
                    this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y)), 
                    0 != this._loop && (a = this._container.x, n = this._container.y, this.loopCheckingCurrent() && (this._containerPos.x += this._container.x - a, 
                    this._containerPos.y += this._container.y - n)), q.draggingPane = this, this._isHoldAreaDone = !0, 
                    this._dragged = !0, this._maskContainer.mouseEnabled = !1, this.updateScrollBarPos(), 
                    this.updateScrollBarVisible(), this._pageMode && this.updatePageController(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject);
                }
            }
        }, {
            key: "__mouseUp",
            value: function __mouseUp() {
                if (!this._owner.isDisposed) {
                    if (this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                    this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp), 
                    this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), t.Events.dispatch(t.Events.DRAG_END, this._owner.displayObject), 
                    q.draggingPane == this && (q.draggingPane = null), K = 0, !this._dragged || !this._touchEffect) return this._dragged = !1, 
                    void (this._maskContainer.mouseEnabled = !0);
                    this._dragged = !1, this._maskContainer.mouseEnabled = !0, this._tweenStart.setTo(this._container.x, this._container.y), 
                    tt.setTo(this._tweenStart.x, this._tweenStart.y);
                    var e = !1;
                    if (this._container.x > 0 ? (tt.x = 0, e = !0) : this._container.x < -this._overlapSize.x && (tt.x = -this._overlapSize.x, 
                    e = !0), this._container.y > 0 ? (tt.y = 0, e = !0) : this._container.y < -this._overlapSize.y && (tt.y = -this._overlapSize.y, 
                    e = !0), e) {
                        if (this._tweenChange.setTo(tt.x - this._tweenStart.x, tt.y - this._tweenStart.y), 
                        this._tweenChange.x < -t.UIConfig.touchDragSensitivity || this._tweenChange.y < -t.UIConfig.touchDragSensitivity ? (this._refreshEventDispatching = !0, 
                        t.Events.dispatch(t.Events.PULL_DOWN_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1) : (this._tweenChange.x > t.UIConfig.touchDragSensitivity || this._tweenChange.y > t.UIConfig.touchDragSensitivity) && (this._refreshEventDispatching = !0, 
                        t.Events.dispatch(t.Events.PULL_UP_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1), 
                        this._headerLockedSize > 0 && 0 == tt[this._refreshBarAxis]) tt[this._refreshBarAxis] = this._headerLockedSize, 
                        this._tweenChange.x = tt.x - this._tweenStart.x, this._tweenChange.y = tt.y - this._tweenStart.y; else if (this._footerLockedSize > 0 && tt[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                            var i = this._overlapSize[this._refreshBarAxis];
                            0 == i ? i = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : i += this._footerLockedSize, 
                            tt[this._refreshBarAxis] = -i, this._tweenChange.x = tt.x - this._tweenStart.x, 
                            this._tweenChange.y = tt.y - this._tweenStart.y;
                        }
                        this._tweenDuration.setTo(Q, Q);
                    } else {
                        if (this._inertiaDisabled) this._tweenDuration.setTo(Q, Q); else {
                            var s = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, h = (Laya.timer.currTimer / 1e3 - this._lastMoveTime) * s - 1;
                            if (h > 1) {
                                var r = Math.pow(.833, h);
                                this._velocity.x = this._velocity.x * r, this._velocity.y = this._velocity.y * r;
                            }
                            this.updateTargetAndDuration(this._tweenStart, tt);
                        }
                        if (et.setTo(tt.x - this._tweenStart.x, tt.y - this._tweenStart.y), this.loopCheckingTarget(tt), 
                        (this._pageMode || this._snapToItem) && this.alignPosition(tt, !0), this._tweenChange.x = tt.x - this._tweenStart.x, 
                        this._tweenChange.y = tt.y - this._tweenStart.y, 0 == this._tweenChange.x && 0 == this._tweenChange.y) return void this.updateScrollBarVisible();
                        (this._pageMode || this._snapToItem) && (this.fixDuration("x", et.x), this.fixDuration("y", et.y));
                    }
                    this.startTween(2);
                }
            }
        }, {
            key: "__click",
            value: function __click() {
                this._dragged = !1;
            }
        }, {
            key: "__mouseWheel",
            value: function __mouseWheel(t) {
                if (this._mouseWheelEnabled) {
                    var e = t.delta;
                    e = e > 0 ? -1 : e < 0 ? 1 : 0, this._overlapSize.x > 0 && 0 == this._overlapSize.y ? this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * e, !1) : this.setPosX(this._xPos + this._mouseWheelStep * e, !1) : this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * e, !1) : this.setPosY(this._yPos + this._mouseWheelStep * e, !1);
                }
            }
        }, {
            key: "updateScrollBarPos",
            value: function updateScrollBarPos() {
                this._vtScrollBar && this._vtScrollBar.setScrollPerc(0 == this._overlapSize.y ? 0 : t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y), 
                this._hzScrollBar && this._hzScrollBar.setScrollPerc(0 == this._overlapSize.x ? 0 : t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x), 
                this.checkRefreshBar();
            }
        }, {
            key: "updateScrollBarVisible",
            value: function updateScrollBarVisible() {
                this._vtScrollBar && (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone ? this._vtScrollBar.displayObject.visible = !1 : this.updateScrollBarVisible2(this._vtScrollBar)), 
                this._hzScrollBar && (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone ? this._hzScrollBar.displayObject.visible = !1 : this.updateScrollBarVisible2(this._hzScrollBar));
            }
        }, {
            key: "updateScrollBarVisible2",
            value: function updateScrollBarVisible2(e) {
                this._scrollBarDisplayAuto && t.GTween.kill(e, !1, "alpha"), !this._scrollBarDisplayAuto || 0 != this._tweening || this._dragged || e.gripDragging ? (e.alpha = 1, 
                e.displayObject.visible = !0) : e.displayObject.visible && t.GTween.to(1, 0, .5).setDelay(.5).onComplete(this.__barTweenComplete, this).setTarget(e, "alpha");
            }
        }, {
            key: "__barTweenComplete",
            value: function __barTweenComplete(t) {
                var e = t.target;
                e.alpha = 1, e.displayObject.visible = !1;
            }
        }, {
            key: "getLoopPartSize",
            value: function getLoopPartSize(t, e) {
                return (this._contentSize[e] + ("x" == e ? this._owner.columnGap : this._owner.lineGap)) / t;
            }
        }, {
            key: "loopCheckingCurrent",
            value: function loopCheckingCurrent() {
                var t = !1;
                return 1 == this._loop && this._overlapSize.x > 0 ? this._xPos < .001 ? (this._xPos += this.getLoopPartSize(2, "x"), 
                t = !0) : this._xPos >= this._overlapSize.x && (this._xPos -= this.getLoopPartSize(2, "x"), 
                t = !0) : 2 == this._loop && this._overlapSize.y > 0 && (this._yPos < .001 ? (this._yPos += this.getLoopPartSize(2, "y"), 
                t = !0) : this._yPos >= this._overlapSize.y && (this._yPos -= this.getLoopPartSize(2, "y"), 
                t = !0)), t && this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos)), 
                t;
            }
        }, {
            key: "loopCheckingTarget",
            value: function loopCheckingTarget(t) {
                1 == this._loop && this.loopCheckingTarget2(t, "x"), 2 == this._loop && this.loopCheckingTarget2(t, "y");
            }
        }, {
            key: "loopCheckingTarget2",
            value: function loopCheckingTarget2(t, e) {
                var i, s;
                t[e] > 0 ? (i = this.getLoopPartSize(2, e), (s = this._tweenStart[e] - i) <= 0 && s >= -this._overlapSize[e] && (t[e] -= i, 
                this._tweenStart[e] = s)) : t[e] < -this._overlapSize[e] && (i = this.getLoopPartSize(2, e), 
                (s = this._tweenStart[e] + i) <= 0 && s >= -this._overlapSize[e] && (t[e] += i, 
                this._tweenStart[e] = s));
            }
        }, {
            key: "loopCheckingNewPos",
            value: function loopCheckingNewPos(e, i) {
                if (0 == this._overlapSize[i]) return e;
                var s, h = "x" == i ? this._xPos : this._yPos, r = !1;
                return e < .001 ? (e += this.getLoopPartSize(2, i)) > h && (s = this.getLoopPartSize(6, i), 
                s = Math.ceil((e - h) / s) * s, h = t.ToolSet.clamp(h + s, 0, this._overlapSize[i]), 
                r = !0) : e >= this._overlapSize[i] && (e -= this.getLoopPartSize(2, i)) < h && (s = this.getLoopPartSize(6, i), 
                s = Math.ceil((h - e) / s) * s, h = t.ToolSet.clamp(h - s, 0, this._overlapSize[i]), 
                r = !0), r && ("x" == i ? this._container.x = -Math.floor(h) : this._container.y = -Math.floor(h)), 
                e;
            }
        }, {
            key: "alignPosition",
            value: function alignPosition(t, e) {
                if (this._pageMode) t.x = this.alignByPage(t.x, "x", e), t.y = this.alignByPage(t.y, "y", e); else if (this._snapToItem) {
                    var i = 0, s = 0;
                    e && (i = t.x - this._containerPos.x, s = t.y - this._containerPos.y);
                    var h = this._owner.getSnappingPositionWithDir(-t.x, -t.y, i, s, N);
                    t.x < 0 && t.x > -this._overlapSize.x && (t.x = -h.x), t.y < 0 && t.y > -this._overlapSize.y && (t.y = -h.y);
                }
            }
        }, {
            key: "alignByPage",
            value: function alignByPage(e, i, s) {
                var h;
                if (e > 0) h = 0; else if (e < -this._overlapSize[i]) h = Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1; else {
                    h = Math.floor(-e / this._pageSize[i]);
                    var r = s ? e - this._containerPos[i] : e - this._container[i], a = Math.min(this._pageSize[i], this._contentSize[i] - (h + 1) * this._pageSize[i]), n = -e - h * this._pageSize[i];
                    Math.abs(r) > this._pageSize[i] ? n > .5 * a && h++ : n > a * (r < 0 ? t.UIConfig.defaultScrollPagingThreshold : 1 - t.UIConfig.defaultScrollPagingThreshold) && h++, 
                    (e = -h * this._pageSize[i]) < -this._overlapSize[i] && (e = -this._overlapSize[i]);
                }
                if (s) {
                    var o, l = this._tweenStart[i];
                    o = l > 0 ? 0 : l < -this._overlapSize[i] ? Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1 : Math.floor(-l / this._pageSize[i]);
                    var _ = Math.floor(-this._containerPos[i] / this._pageSize[i]);
                    Math.abs(h - _) > 1 && Math.abs(o - _) <= 1 && (e = -(h = h > _ ? _ + 1 : _ - 1) * this._pageSize[i]);
                }
                return e;
            }
        }, {
            key: "updateTargetAndDuration",
            value: function updateTargetAndDuration(t, e) {
                e.x = this.updateTargetAndDuration2(t.x, "x"), e.y = this.updateTargetAndDuration2(t.y, "y");
            }
        }, {
            key: "updateTargetAndDuration2",
            value: function updateTargetAndDuration2(t, e) {
                var i = this._velocity[e], s = 0;
                if (t > 0) t = 0; else if (t < -this._overlapSize[e]) t = -this._overlapSize[e]; else {
                    var h = Math.abs(i) * this._velocityScale;
                    Laya.Browser.onMobile && (h *= 1136 / Math.max(Laya.stage.width, Laya.stage.height));
                    var r = 0;
                    if (this._pageMode || !Laya.Browser.onMobile ? h > 500 && (r = Math.pow((h - 500) / 500, 2)) : h > 1e3 && (r = Math.pow((h - 1e3) / 1e3, 2)), 
                    0 != r) r > 1 && (r = 1), h *= r, i *= r, this._velocity[e] = i, s = Math.log(60 / h) / Math.log(this._decelerationRate) / 60, 
                    t += Math.floor(i * s * .4);
                }
                return s < Q && (s = Q), this._tweenDuration[e] = s, t;
            }
        }, {
            key: "fixDuration",
            value: function fixDuration(t, e) {
                if (!(0 == this._tweenChange[t] || Math.abs(this._tweenChange[t]) >= Math.abs(e))) {
                    var i = Math.abs(this._tweenChange[t] / e) * this._tweenDuration[t];
                    i < Q && (i = Q), this._tweenDuration[t] = i;
                }
            }
        }, {
            key: "startTween",
            value: function startTween(t) {
                this._tweenTime.setTo(0, 0), this._tweening = t, Laya.timer.frameLoop(1, this, this.tweenUpdate), 
                this.updateScrollBarVisible();
            }
        }, {
            key: "killTween",
            value: function killTween() {
                1 == this._tweening && (this._container.pos(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y), 
                t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject)), this._tweening = 0, 
                Laya.timer.clear(this, this.tweenUpdate), this.updateScrollBarVisible(), t.Events.dispatch(t.Events.SCROLL_END, this._owner.displayObject);
            }
        }, {
            key: "checkRefreshBar",
            value: function checkRefreshBar() {
                if (this._header || this._footer) {
                    var t = this._container[this._refreshBarAxis];
                    if (this._header) if (t > 0) {
                        this._header.displayObject.parent || this._maskContainer.addChildAt(this._header.displayObject, 0);
                        var e = N;
                        e.setTo(this._header.width, this._header.height), e[this._refreshBarAxis] = t, this._header.setSize(e.x, e.y);
                    } else this._header.displayObject.parent && this._maskContainer.removeChild(this._header.displayObject);
                    if (this._footer) {
                        var i = this._overlapSize[this._refreshBarAxis];
                        t < -i || 0 == i && this._footerLockedSize > 0 ? (this._footer.displayObject.parent || this._maskContainer.addChildAt(this._footer.displayObject, 0), 
                        (e = N).setTo(this._footer.x, this._footer.y), e[this._refreshBarAxis] = i > 0 ? t + this._contentSize[this._refreshBarAxis] : Math.max(Math.min(t + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]), 
                        this._footer.setXY(e.x, e.y), e.setTo(this._footer.width, this._footer.height), 
                        e[this._refreshBarAxis] = i > 0 ? -i - t : this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis], 
                        this._footer.setSize(e.x, e.y)) : this._footer.displayObject.parent && this._maskContainer.removeChild(this._footer.displayObject);
                    }
                }
            }
        }, {
            key: "tweenUpdate",
            value: function tweenUpdate() {
                var e = this.runTween("x"), i = this.runTween("y");
                this._container.pos(e, i), 2 == this._tweening && (this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-e, 0, this._overlapSize.x)), 
                this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(-i, 0, this._overlapSize.y)), 
                this._pageMode && this.updatePageController()), 0 == this._tweenChange.x && 0 == this._tweenChange.y ? (this._tweening = 0, 
                Laya.timer.clear(this, this.tweenUpdate), this.loopCheckingCurrent(), this.updateScrollBarPos(), 
                this.updateScrollBarVisible(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject), 
                t.Events.dispatch(t.Events.SCROLL_END, this._owner.displayObject)) : (this.updateScrollBarPos(), 
                t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject));
            }
        }, {
            key: "runTween",
            value: function runTween(t) {
                var e, i, s;
                if (0 != this._tweenChange[t]) {
                    if (this._tweenTime[t] += Laya.timer.delta / 1e3, this._tweenTime[t] >= this._tweenDuration[t]) e = this._tweenStart[t] + this._tweenChange[t], 
                    this._tweenChange[t] = 0; else {
                        var h = (i = this._tweenTime[t], s = this._tweenDuration[t], (i = i / s - 1) * i * i + 1);
                        e = this._tweenStart[t] + Math.floor(this._tweenChange[t] * h);
                    }
                    var r = 0, a = -this._overlapSize[t];
                    if (this._headerLockedSize > 0 && this._refreshBarAxis == t && (r = this._headerLockedSize), 
                    this._footerLockedSize > 0 && this._refreshBarAxis == t) {
                        var n = this._overlapSize[this._refreshBarAxis];
                        0 == n ? n = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : n += this._footerLockedSize, 
                        a = -n;
                    }
                    2 == this._tweening && this._bouncebackEffect ? e > 20 + r && this._tweenChange[t] > 0 || e > r && 0 == this._tweenChange[t] ? (this._tweenTime[t] = 0, 
                    this._tweenDuration[t] = Q, this._tweenChange[t] = -e + r, this._tweenStart[t] = e) : (e < a - 20 && this._tweenChange[t] < 0 || e < a && 0 == this._tweenChange[t]) && (this._tweenTime[t] = 0, 
                    this._tweenDuration[t] = Q, this._tweenChange[t] = a - e, this._tweenStart[t] = e) : e > r ? (e = r, 
                    this._tweenChange[t] = 0) : e < a && (e = a, this._tweenChange[t] = 0);
                } else e = this._container[t];
                return e;
            }
        }, {
            key: "owner",
            get: function get() {
                return this._owner;
            }
        }, {
            key: "hzScrollBar",
            get: function get() {
                return this._hzScrollBar;
            }
        }, {
            key: "vtScrollBar",
            get: function get() {
                return this._vtScrollBar;
            }
        }, {
            key: "header",
            get: function get() {
                return this._header;
            }
        }, {
            key: "footer",
            get: function get() {
                return this._footer;
            }
        }, {
            key: "bouncebackEffect",
            get: function get() {
                return this._bouncebackEffect;
            },
            set: function set(t) {
                this._bouncebackEffect = t;
            }
        }, {
            key: "touchEffect",
            get: function get() {
                return this._touchEffect;
            },
            set: function set(t) {
                this._touchEffect = t;
            }
        }, {
            key: "scrollStep",
            set: function set(e) {
                this._scrollStep = e, 0 == this._scrollStep && (this._scrollStep = t.UIConfig.defaultScrollStep), 
                this._mouseWheelStep = 2 * this._scrollStep;
            },
            get: function get() {
                return this._scrollStep;
            }
        }, {
            key: "snapToItem",
            get: function get() {
                return this._snapToItem;
            },
            set: function set(t) {
                this._snapToItem = t;
            }
        }, {
            key: "mouseWheelEnabled",
            get: function get() {
                return this._mouseWheelEnabled;
            },
            set: function set(t) {
                this._mouseWheelEnabled = t;
            }
        }, {
            key: "decelerationRate",
            get: function get() {
                return this._decelerationRate;
            },
            set: function set(t) {
                this._decelerationRate = t;
            }
        }, {
            key: "isDragged",
            get: function get() {
                return this._dragged;
            }
        }, {
            key: "percX",
            get: function get() {
                return 0 == this._overlapSize.x ? 0 : this._xPos / this._overlapSize.x;
            },
            set: function set(t) {
                this.setPercX(t, !1);
            }
        }, {
            key: "percY",
            get: function get() {
                return 0 == this._overlapSize.y ? 0 : this._yPos / this._overlapSize.y;
            },
            set: function set(t) {
                this.setPercY(t, !1);
            }
        }, {
            key: "posX",
            get: function get() {
                return this._xPos;
            },
            set: function set(t) {
                this.setPosX(t, !1);
            }
        }, {
            key: "posY",
            get: function get() {
                return this._yPos;
            },
            set: function set(t) {
                this.setPosY(t, !1);
            }
        }, {
            key: "contentWidth",
            get: function get() {
                return this._contentSize.x;
            }
        }, {
            key: "contentHeight",
            get: function get() {
                return this._contentSize.y;
            }
        }, {
            key: "viewWidth",
            get: function get() {
                return this._viewSize.x;
            },
            set: function set(t) {
                t = t + this._owner.margin.left + this._owner.margin.right, this._vtScrollBar && !this._floating && (t += this._vtScrollBar.width), 
                this._owner.width = t;
            }
        }, {
            key: "viewHeight",
            get: function get() {
                return this._viewSize.y;
            },
            set: function set(t) {
                t = t + this._owner.margin.top + this._owner.margin.bottom, this._hzScrollBar && !this._floating && (t += this._hzScrollBar.height), 
                this._owner.height = t;
            }
        }, {
            key: "currentPageX",
            get: function get() {
                if (!this._pageMode) return 0;
                var t = Math.floor(this._xPos / this._pageSize.x);
                return this._xPos - t * this._pageSize.x > .5 * this._pageSize.x && t++, t;
            },
            set: function set(t) {
                this.setCurrentPageX(t, !1);
            }
        }, {
            key: "currentPageY",
            get: function get() {
                if (!this._pageMode) return 0;
                var t = Math.floor(this._yPos / this._pageSize.y);
                return this._yPos - t * this._pageSize.y > .5 * this._pageSize.y && t++, t;
            },
            set: function set(t) {
                this.setCurrentPageY(t, !1);
            }
        }, {
            key: "isBottomMost",
            get: function get() {
                return this._yPos == this._overlapSize.y || 0 == this._overlapSize.y;
            }
        }, {
            key: "isRightMost",
            get: function get() {
                return this._xPos == this._overlapSize.x || 0 == this._overlapSize.x;
            }
        }, {
            key: "pageController",
            get: function get() {
                return this._pageController;
            },
            set: function set(t) {
                this._pageController = t;
            }
        }, {
            key: "scrollingPosX",
            get: function get() {
                return t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
            }
        }, {
            key: "scrollingPosY",
            get: function get() {
                return t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
            }
        } ]);
        return q;
    }();
    t.ScrollPane = q;
    var K = 0;
    var $ = .5, Q = .3, Z = .5;
    N = new Laya.Point();
    var J = new Laya.Rectangle(), tt = new Laya.Point(), et = new Laya.Point();
    t.Transition = /* */ function() {
        function _class25(t) {
            (0, _classCallCheck2.default)(this, _class25);
            this._owner = t, this._items = new Array(), this._totalDuration = 0, this._autoPlayTimes = 1, 
            this._autoPlayDelay = 0, this._timeScale = 1, this._startTime = 0, this._endTime = 0;
        }
        (0, _createClass2.default)(_class25, [ {
            key: "play",
            value: function play(t, e, i, s, h) {
                this._play(t, e, i, s, h, !1);
            }
        }, {
            key: "playReverse",
            value: function playReverse(t, e, i, s, h) {
                this._play(t, 1, i, s, h, !0);
            }
        }, {
            key: "changePlayTimes",
            value: function changePlayTimes(t) {
                this._totalTimes = t;
            }
        }, {
            key: "setAutoPlay",
            value: function setAutoPlay(t, e, i) {
                null == e && (e = -1), null == i && (i = 0), this._autoPlay != t && (this._autoPlay = t, 
                this._autoPlayTimes = e, this._autoPlayDelay = i, this._autoPlay ? this._owner.onStage && this.play(null, null, this._autoPlayTimes, this._autoPlayDelay) : this._owner.onStage || this.stop(!1, !0));
            }
        }, {
            key: "_play",
            value: function _play(e, i, s, h, r, a) {
                null == i && (i = 1), null == s && (s = 0), null == h && (h = 0), null == r && (r = -1), 
                this.stop(!0, !0), this._totalTimes = i, this._reversed = a, this._startTime = h, 
                this._endTime = r, this._playing = !0, this._paused = !1, this._onComplete = e;
                for (var n = this._items.length, o = 0; o < n; o++) {
                    var l = this._items[o];
                    if (null == l.target ? l.targetId ? l.target = this._owner.getChildById(l.targetId) : l.target = this._owner : l.target != this._owner && l.target.parent != this._owner && (l.target = null), 
                    l.target && l.type == it.Transition) {
                        var _ = l.target.getTransition(l.value.transName);
                        if (_ == this && (_ = null), _) if (0 == l.value.playTimes) {
                            var d;
                            for (d = o - 1; d >= 0; d--) {
                                var c = this._items[d];
                                if (c.type == it.Transition && c.value.trans == _) {
                                    c.value.stopTime = l.time - c.time;
                                    break;
                                }
                            }
                            d < 0 ? l.value.stopTime = 0 : _ = null;
                        } else l.value.stopTime = -1;
                        l.value.trans = _;
                    }
                }
                0 == s ? this.onDelayedPlay() : t.GTween.delayedCall(s).setTarget(this).onComplete(this.onDelayedPlay, this);
            }
        }, {
            key: "stop",
            value: function stop(e, i) {
                if (this._playing) {
                    null == e && (e = !0), this._playing = !1, this._totalTasks = 0, this._totalTimes = 0;
                    var s = this._onComplete;
                    this._onComplete = null, t.GTween.kill(this);
                    var h = this._items.length;
                    if (this._reversed) for (var r = h - 1; r >= 0; r--) {
                        var a = this._items[r];
                        null != a.target && this.stopItem(a, e);
                    } else for (r = 0; r < h; r++) {
                        null != (a = this._items[r]).target && this.stopItem(a, e);
                    }
                    i && s && s.run();
                }
            }
        }, {
            key: "stopItem",
            value: function stopItem(t, e) {
                if (0 != t.displayLockToken && (t.target.releaseDisplayLock(t.displayLockToken), 
                t.displayLockToken = 0), t.tweener && (t.tweener.kill(e), t.tweener = null, t.type != it.Shake || e || (t.target._gearLocked = !0, 
                t.target.setXY(t.target.x - t.value.lastOffsetX, t.target.y - t.value.lastOffsetY), 
                t.target._gearLocked = !1)), t.type == it.Transition) {
                    var i = t.value.trans;
                    i && i.stop(e, !1);
                }
            }
        }, {
            key: "setPaused",
            value: function setPaused(e) {
                if (this._playing && this._paused != e) {
                    this._paused = e;
                    var i = t.GTween.getTween(this);
                    i && i.setPaused(e);
                    for (var s = this._items.length, h = 0; h < s; h++) {
                        var r = this._items[h];
                        null != r.target && (r.type == it.Transition ? r.value.trans && r.value.trans.setPaused(e) : r.type == it.Animation && (e ? (r.value.flag = r.target.getProp(t.ObjectPropID.Playing), 
                        r.target.setProp(t.ObjectPropID.Playing, !1)) : r.target.setProp(t.ObjectPropID.Playing, r.value.flag)), 
                        r.tweener && r.tweener.setPaused(e));
                    }
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this._playing && t.GTween.kill(this);
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    s.tweener && (s.tweener.kill(), s.tweener = null), s.target = null, s.hook = null, 
                    s.tweenConfig && (s.tweenConfig.endHook = null);
                }
                this._items.length = 0, this._playing = !1, this._onComplete = null;
            }
        }, {
            key: "setValue",
            value: function setValue(t) {
                for (var i, s = this._items.length, h = !1, r = 0; r < s; r++) {
                    var a = this._items[r];
                    if (a.label == t) i = a.tweenConfig ? a.tweenConfig.startValue : a.value, h = !0; else {
                        if (!a.tweenConfig || a.tweenConfig.endLabel != t) continue;
                        i = a.tweenConfig.endValue, h = !0;
                    }
                    switch (a.type) {
                      case it.XY:
                      case it.Size:
                      case it.Pivot:
                      case it.Scale:
                      case it.Skew:
                        i.b1 = !0, i.b2 = !0, i.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]), 
                        i.f2 = parseFloat(arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case it.Alpha:
                      case it.Rotation:
                      case it.Color:
                        i.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        break;

                      case it.Animation:
                        i.frame = parseInt(arguments.length <= 1 ? undefined : arguments[1]), (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (i.playing = arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case it.Visible:
                        i.visible = arguments.length <= 1 ? undefined : arguments[1];
                        break;

                      case it.Sound:
                        i.sound = arguments.length <= 1 ? undefined : arguments[1], (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (i.volume = parseFloat(arguments.length <= 2 ? undefined : arguments[2]));
                        break;

                      case it.Transition:
                        i.transName = arguments.length <= 1 ? undefined : arguments[1], (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (i.playTimes = parseInt(arguments.length <= 2 ? undefined : arguments[2]));
                        break;

                      case it.Shake:
                        i.amplitude = parseFloat(arguments.length <= 1 ? undefined : arguments[1]), (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (i.duration = parseFloat(arguments.length <= 2 ? undefined : arguments[2]));
                        break;

                      case it.ColorFilter:
                        i.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]), i.f2 = parseFloat(arguments.length <= 2 ? undefined : arguments[2]), 
                        i.f3 = parseFloat(arguments.length <= 3 ? undefined : arguments[3]), i.f4 = parseFloat(arguments.length <= 4 ? undefined : arguments[4]);
                        break;

                      case it.Text:
                      case it.Icon:
                        i.text = arguments.length <= 1 ? undefined : arguments[1];
                    }
                }
                if (!h) throw new Error("this.label not exists");
            }
        }, {
            key: "setHook",
            value: function setHook(t, e) {
                for (var i = this._items.length, s = !1, h = 0; h < i; h++) {
                    var r = this._items[h];
                    if (r.label == t) {
                        r.hook = e, s = !0;
                        break;
                    }
                    if (r.tweenConfig && r.tweenConfig.endLabel == t) {
                        r.tweenConfig.endHook = e, s = !0;
                        break;
                    }
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "clearHooks",
            value: function clearHooks() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    var i = this._items[e];
                    i.hook = null, i.tweenConfig && (i.tweenConfig.endHook = null);
                }
            }
        }, {
            key: "setTarget",
            value: function setTarget(t, e) {
                for (var i = this._items.length, s = !1, h = 0; h < i; h++) {
                    var r = this._items[h];
                    r.label == t && (r.targetId = e == this._owner || null == e ? "" : e.id, this._playing ? r.targetId.length > 0 ? r.target = this._owner.getChildById(r.targetId) : r.target = this._owner : r.target = null, 
                    s = !0);
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "setDuration",
            value: function setDuration(t, e) {
                for (var i = this._items.length, s = !1, h = 0; h < i; h++) {
                    var r = this._items[h];
                    r.tweenConfig && r.label == t && (r.tweenConfig.duration = e, s = !0);
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "getLabelTime",
            value: function getLabelTime(t) {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    if (s.label == t) return s.time;
                    if (s.tweenConfig && s.tweenConfig.endLabel == t) return s.time + s.tweenConfig.duration;
                }
                return NaN;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(t, e, i) {
                var s = this._items.length;
                if (0 != s) for (var h = 0; h < s; h++) {
                    var r = this._items[h];
                    r.type == it.XY && r.targetId == t && (r.tweenConfig ? (r.tweenConfig.startValue.b3 || (r.tweenConfig.startValue.f1 += e, 
                    r.tweenConfig.startValue.f2 += i), r.tweenConfig.endValue.b3 || (r.tweenConfig.endValue.f1 += e, 
                    r.tweenConfig.endValue.f2 += i)) : r.value.b3 || (r.value.f1 += e, r.value.f2 += i));
                }
            }
        }, {
            key: "onOwnerAddedToStage",
            value: function onOwnerAddedToStage() {
                this._autoPlay && !this._playing && this.play(null, this._autoPlayTimes, this._autoPlayDelay);
            }
        }, {
            key: "onOwnerRemovedFromStage",
            value: function onOwnerRemovedFromStage() {
                0 == (this._options & at) && this.stop(0 != (this._options & nt), !1);
            }
        }, {
            key: "onDelayedPlay",
            value: function onDelayedPlay() {
                if (this.internalPlay(), this._playing = this._totalTasks > 0, this._playing) {
                    if (0 != (this._options & rt)) for (var t = this._items.length, e = 0; e < t; e++) {
                        var i = this._items[e];
                        i.target && i.target != this._owner && (i.displayLockToken = i.target.addDisplayLock());
                    }
                } else if (this._onComplete) {
                    var s = this._onComplete;
                    this._onComplete = null, s.run();
                }
            }
        }, {
            key: "internalPlay",
            value: function internalPlay() {
                this._ownerBaseX = this._owner.x, this._ownerBaseY = this._owner.y, this._totalTasks = 1;
                var t, e = this._items.length, i = !1;
                if (this._reversed) for (s = e - 1; s >= 0; s--) {
                    null != (t = this._items[s]).target && this.playItem(t);
                } else for (var s = 0; s < e; s++) {
                    null != (t = this._items[s]).target && (t.type == it.Animation && 0 != this._startTime && t.time <= this._startTime ? (i = !0, 
                    t.value.flag = !1) : this.playItem(t));
                }
                i && this.skipAnimations(), this._totalTasks--;
            }
        }, {
            key: "playItem",
            value: function playItem(e) {
                var i;
                if (e.tweenConfig) {
                    if (i = this._reversed ? this._totalDuration - e.time - e.tweenConfig.duration : e.time, 
                    -1 == this._endTime || i <= this._endTime) {
                        var s, h;
                        switch (this._reversed ? (s = e.tweenConfig.endValue, h = e.tweenConfig.startValue) : (s = e.tweenConfig.startValue, 
                        h = e.tweenConfig.endValue), e.value.b1 = s.b1 || h.b1, e.value.b2 = s.b2 || h.b2, 
                        e.type) {
                          case it.XY:
                          case it.Size:
                          case it.Scale:
                          case it.Skew:
                            e.tweener = t.GTween.to2(s.f1, s.f2, h.f1, h.f2, e.tweenConfig.duration);
                            break;

                          case it.Alpha:
                          case it.Rotation:
                            e.tweener = t.GTween.to(s.f1, h.f1, e.tweenConfig.duration);
                            break;

                          case it.Color:
                            e.tweener = t.GTween.toColor(s.f1, h.f1, e.tweenConfig.duration);
                            break;

                          case it.ColorFilter:
                            e.tweener = t.GTween.to4(s.f1, s.f2, s.f3, s.f4, h.f1, h.f2, h.f3, h.f4, e.tweenConfig.duration);
                        }
                        e.tweener.setDelay(i).setEase(e.tweenConfig.easeType).setRepeat(e.tweenConfig.repeat, e.tweenConfig.yoyo).setTimeScale(this._timeScale).setTarget(e).onStart(this.onTweenStart, this).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                        this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - i), this._totalTasks++;
                    }
                } else e.type == it.Shake ? (i = this._reversed ? this._totalDuration - e.time - e.value.duration : e.time, 
                e.value.offsetX = e.value.offsetY = 0, e.value.lastOffsetX = e.value.lastOffsetY = 0, 
                e.tweener = t.GTween.shake(0, 0, e.value.amplitude, e.value.duration).setDelay(i).setTimeScale(this._timeScale).setTarget(e).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - e.time), this._totalTasks++) : (i = this._reversed ? this._totalDuration - e.time : e.time) <= this._startTime ? (this.applyValue(e), 
                this.callHook(e, !1)) : (-1 == this._endTime || i <= this._endTime) && (this._totalTasks++, 
                e.tweener = t.GTween.delayedCall(i).setTimeScale(this._timeScale).setTarget(e).onComplete(this.onDelayedPlayItem, this));
                e.tweener && e.tweener.seek(this._startTime);
            }
        }, {
            key: "skipAnimations",
            value: function skipAnimations() {
                for (var e, i, s, h, r, a, n = this._items.length, o = 0; o < n; o++) {
                    if (!((a = this._items[o]).type != it.Animation || a.time > this._startTime || (h = a.value).flag)) {
                        e = (r = a.target).getProp(t.ObjectPropID.Frame), i = r.getProp(t.ObjectPropID.Playing) ? 0 : -1, 
                        s = 0;
                        for (var l = o; l < n; l++) {
                            (a = this._items[l]).type != it.Animation || a.target != r || a.time > this._startTime || ((h = a.value).flag = !0, 
                            -1 != h.frame ? (e = h.frame, i = h.playing ? a.time : -1, s = 0) : h.playing ? i < 0 && (i = a.time) : (i >= 0 && (s += a.time - i), 
                            i = -1), this.callHook(a, !1));
                        }
                        i >= 0 && (s += this._startTime - i), r.setProp(t.ObjectPropID.Playing, i >= 0), 
                        r.setProp(t.ObjectPropID.Frame, e), s > 0 && r.setProp(t.ObjectPropID.DeltaTime, 1e3 * s);
                    }
                }
            }
        }, {
            key: "onDelayedPlayItem",
            value: function onDelayedPlayItem(t) {
                var e = t.target;
                e.tweener = null, this._totalTasks--, this.applyValue(e), this.callHook(e, !1), 
                this.checkAllComplete();
            }
        }, {
            key: "onTweenStart",
            value: function onTweenStart(t) {
                var e, i, s = t.target;
                s.type != it.XY && s.type != it.Size || (this._reversed ? (e = s.tweenConfig.endValue, 
                i = s.tweenConfig.startValue) : (e = s.tweenConfig.startValue, i = s.tweenConfig.endValue), 
                s.type == it.XY ? s.target != this._owner ? (e.b1 ? e.b3 && (t.startValue.x = e.f1 * this._owner.width) : t.startValue.x = s.target.x, 
                e.b2 ? e.b3 && (t.startValue.y = e.f2 * this._owner.height) : t.startValue.y = s.target.y, 
                i.b1 ? i.b3 && (t.endValue.x = i.f1 * this._owner.width) : t.endValue.x = t.startValue.x, 
                i.b2 ? i.b3 && (t.endValue.y = i.f2 * this._owner.height) : t.endValue.y = t.startValue.y) : (e.b1 || (t.startValue.x = s.target.x - this._ownerBaseX), 
                e.b2 || (t.startValue.y = s.target.y - this._ownerBaseY), i.b1 || (t.endValue.x = t.startValue.x), 
                i.b2 || (t.endValue.y = t.startValue.y)) : (e.b1 || (t.startValue.x = s.target.width), 
                e.b2 || (t.startValue.y = s.target.height), i.b1 || (t.endValue.x = t.startValue.x), 
                i.b2 || (t.endValue.y = t.startValue.y)), s.tweenConfig.path && (s.value.b1 = s.value.b2 = !0, 
                t.setPath(s.tweenConfig.path))), this.callHook(s, !1);
            }
        }, {
            key: "onTweenUpdate",
            value: function onTweenUpdate(t) {
                var e = t.target;
                switch (e.type) {
                  case it.XY:
                  case it.Size:
                  case it.Scale:
                  case it.Skew:
                    e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.tweenConfig.path && (e.value.f1 += t.startValue.x, 
                    e.value.f2 += t.startValue.y);
                    break;

                  case it.Alpha:
                  case it.Rotation:
                    e.value.f1 = t.value.x;
                    break;

                  case it.Color:
                    e.value.f1 = t.value.color;
                    break;

                  case it.ColorFilter:
                    e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.value.f3 = t.value.z, e.value.f4 = t.value.w;
                    break;

                  case it.Shake:
                    e.value.offsetX = t.deltaValue.x, e.value.offsetY = t.deltaValue.y;
                }
                this.applyValue(e);
            }
        }, {
            key: "onTweenComplete",
            value: function onTweenComplete(t) {
                var e = t.target;
                e.tweener = null, this._totalTasks--, t.allCompleted && this.callHook(e, !0), this.checkAllComplete();
            }
        }, {
            key: "onPlayTransCompleted",
            value: function onPlayTransCompleted(t) {
                this._totalTasks--, this.checkAllComplete();
            }
        }, {
            key: "callHook",
            value: function callHook(t, e) {
                e ? t.tweenConfig && t.tweenConfig.endHook && t.tweenConfig.endHook.run() : t.time >= this._startTime && t.hook && t.hook.run();
            }
        }, {
            key: "checkAllComplete",
            value: function checkAllComplete() {
                if (this._playing && 0 == this._totalTasks) if (this._totalTimes < 0) this.internalPlay(), 
                0 == this._totalTasks && t.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this); else if (this._totalTimes--, 
                this._totalTimes > 0) this.internalPlay(), 0 == this._totalTasks && t.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this); else {
                    this._playing = !1;
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var s = this._items[i];
                        s.target && 0 != s.displayLockToken && (s.target.releaseDisplayLock(s.displayLockToken), 
                        s.displayLockToken = 0);
                    }
                    if (this._onComplete) {
                        var h = this._onComplete;
                        this._onComplete = null, h.run();
                    }
                }
            }
        }, {
            key: "applyValue",
            value: function applyValue(e) {
                e.target._gearLocked = !0;
                var i = e.value;
                switch (e.type) {
                  case it.XY:
                    e.target == this._owner ? i.b1 && i.b2 ? e.target.setXY(i.f1 + this._ownerBaseX, i.f2 + this._ownerBaseY) : i.b1 ? e.target.x = i.f1 + this._ownerBaseX : e.target.y = i.f2 + this._ownerBaseY : i.b3 ? i.b1 && i.b2 ? e.target.setXY(i.f1 * this._owner.width, i.f2 * this._owner.height) : i.b1 ? e.target.x = i.f1 * this._owner.width : i.b2 && (e.target.y = i.f2 * this._owner.height) : i.b1 && i.b2 ? e.target.setXY(i.f1, i.f2) : i.b1 ? e.target.x = i.f1 : i.b2 && (e.target.y = i.f2);
                    break;

                  case it.Size:
                    i.b1 || (i.f1 = e.target.width), i.b2 || (i.f2 = e.target.height), e.target.setSize(i.f1, i.f2);
                    break;

                  case it.Pivot:
                    e.target.setPivot(i.f1, i.f2, e.target.pivotAsAnchor);
                    break;

                  case it.Alpha:
                    e.target.alpha = i.f1;
                    break;

                  case it.Rotation:
                    e.target.rotation = i.f1;
                    break;

                  case it.Scale:
                    e.target.setScale(i.f1, i.f2);
                    break;

                  case it.Skew:
                    e.target.setSkew(i.f1, i.f2);
                    break;

                  case it.Color:
                    e.target.setProp(t.ObjectPropID.Color, t.ToolSet.convertToHtmlColor(i.f1, !1));
                    break;

                  case it.Animation:
                    i.frame >= 0 && e.target.setProp(t.ObjectPropID.Frame, i.frame), e.target.setProp(t.ObjectPropID.Playing, i.playing), 
                    e.target.setProp(t.ObjectPropID.TimeScale, this._timeScale);
                    break;

                  case it.Visible:
                    e.target.visible = i.visible;
                    break;

                  case it.Transition:
                    if (this._playing) {
                        var s = i.trans;
                        if (s) {
                            this._totalTasks++;
                            var h = this._startTime > e.time ? this._startTime - e.time : 0, r = this._endTime >= 0 ? this._endTime - e.time : -1;
                            i.stopTime >= 0 && (r < 0 || r > i.stopTime) && (r = i.stopTime), s.timeScale = this._timeScale, 
                            s._play(Laya.Handler.create(this, this.onPlayTransCompleted, [ e ]), i.playTimes, 0, h, r, this._reversed);
                        }
                    }
                    break;

                  case it.Sound:
                    if (this._playing && e.time >= this._startTime) {
                        if (null == i.audioClip) {
                            var a = t.UIPackage.getItemByURL(i.sound);
                            i.audioClip = a ? a.file : i.sound;
                        }
                        i.audioClip && t.GRoot.inst.playOneShotSound(i.audioClip, i.volume);
                    }
                    break;

                  case it.Shake:
                    e.target.setXY(e.target.x - i.lastOffsetX + i.offsetX, e.target.y - i.lastOffsetY + i.offsetY), 
                    i.lastOffsetX = i.offsetX, i.lastOffsetY = i.offsetY;
                    break;

                  case it.ColorFilter:
                    t.ToolSet.setColorFilter(e.target.displayObject, [ i.f1, i.f2, i.f3, i.f4 ]);
                    break;

                  case it.Text:
                    e.target.text = i.text;
                    break;

                  case it.Icon:
                    e.target.icon = i.text;
                }
                e.target._gearLocked = !1;
            }
        }, {
            key: "setup",
            value: function setup(e) {
                this.name = e.readS(), this._options = e.getInt32(), this._autoPlay = e.readBool(), 
                this._autoPlayTimes = e.getInt32(), this._autoPlayDelay = e.getFloat32();
                for (var i = e.getInt16(), s = 0; s < i; s++) {
                    var h = e.getInt16(), r = e.pos;
                    e.seek(r, 0);
                    var a = new st(e.readByte());
                    this._items[s] = a, a.time = e.getFloat32();
                    var n = e.getInt16();
                    if (a.targetId = n < 0 ? "" : this._owner.getChildAt(n).id, a.label = e.readS(), 
                    e.readBool()) {
                        if (e.seek(r, 1), a.tweenConfig = new ht(), a.tweenConfig.duration = e.getFloat32(), 
                        a.time + a.tweenConfig.duration > this._totalDuration && (this._totalDuration = a.time + a.tweenConfig.duration), 
                        a.tweenConfig.easeType = e.readByte(), a.tweenConfig.repeat = e.getInt32(), a.tweenConfig.yoyo = e.readBool(), 
                        a.tweenConfig.endLabel = e.readS(), e.seek(r, 2), this.decodeValue(a, e, a.tweenConfig.startValue), 
                        e.seek(r, 3), this.decodeValue(a, e, a.tweenConfig.endValue), e.version >= 2) {
                            var o = e.getInt32();
                            if (o > 0) {
                                a.tweenConfig.path = new t.GPath();
                                for (var l = new Array(), _ = 0; _ < o; _++) {
                                    var d = e.getUint8();
                                    switch (d) {
                                      case t.CurveType.Bezier:
                                        l.push(t.GPathPoint.newBezierPoint(e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32()));
                                        break;

                                      case t.CurveType.CubicBezier:
                                        l.push(t.GPathPoint.newCubicBezierPoint(e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32()));
                                        break;

                                      default:
                                        l.push(t.GPathPoint.newPoint(e.getFloat32(), e.getFloat32(), d));
                                    }
                                }
                                a.tweenConfig.path.create(l);
                            }
                        }
                    } else a.time > this._totalDuration && (this._totalDuration = a.time), e.seek(r, 2), 
                    this.decodeValue(a, e, a.value);
                    e.pos = r + h;
                }
            }
        }, {
            key: "decodeValue",
            value: function decodeValue(t, e, i) {
                switch (t.type) {
                  case it.XY:
                  case it.Size:
                  case it.Pivot:
                  case it.Skew:
                    i.b1 = e.readBool(), i.b2 = e.readBool(), i.f1 = e.getFloat32(), i.f2 = e.getFloat32(), 
                    e.version >= 2 && t.type == it.XY && (i.b3 = e.readBool());
                    break;

                  case it.Alpha:
                  case it.Rotation:
                    i.f1 = e.getFloat32();
                    break;

                  case it.Scale:
                    i.f1 = e.getFloat32(), i.f2 = e.getFloat32();
                    break;

                  case it.Color:
                    i.f1 = e.readColor();
                    break;

                  case it.Animation:
                    i.playing = e.readBool(), i.frame = e.getInt32();
                    break;

                  case it.Visible:
                    i.visible = e.readBool();
                    break;

                  case it.Sound:
                    i.sound = e.readS(), i.volume = e.getFloat32();
                    break;

                  case it.Transition:
                    i.transName = e.readS(), i.playTimes = e.getInt32();
                    break;

                  case it.Shake:
                    i.amplitude = e.getFloat32(), i.duration = e.getFloat32();
                    break;

                  case it.ColorFilter:
                    i.f1 = e.getFloat32(), i.f2 = e.getFloat32(), i.f3 = e.getFloat32(), i.f4 = e.getFloat32();
                    break;

                  case it.Text:
                  case it.Icon:
                    i.text = e.readS();
                }
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            }
        }, {
            key: "timeScale",
            get: function get() {
                return this._timeScale;
            },
            set: function set(e) {
                if (this._timeScale != e && (this._timeScale = e, this._playing)) for (var i = this._items.length, s = 0; s < i; s++) {
                    var h = this._items[s];
                    h.tweener ? h.tweener.setTimeScale(e) : h.type == it.Transition ? h.value.trans && (h.value.trans.timeScale = e) : h.type == it.Animation && h.target && h.target.setProp(t.ObjectPropID.TimeScale, e);
                }
            }
        } ]);
        return _class25;
    }();
    var it = function it() {
        (0, _classCallCheck2.default)(this, it);
    };
    it.XY = 0, it.Size = 1, it.Scale = 2, it.Pivot = 3, it.Alpha = 4, it.Rotation = 5, 
    it.Color = 6, it.Animation = 7, it.Visible = 8, it.Sound = 9, it.Transition = 10, 
    it.Shake = 11, it.ColorFilter = 12, it.Skew = 13, it.Text = 14, it.Icon = 15, it.Unknown = 16;
    var st = function st(t) {
        (0, _classCallCheck2.default)(this, st);
        this.type = t, this.value = {}, this.displayLockToken = 0;
    };
    var ht = function ht() {
        (0, _classCallCheck2.default)(this, ht);
        this.easeType = t.EaseType.QuadOut, this.startValue = {
            b1: !0,
            b2: !0
        }, this.endValue = {
            b1: !0,
            b2: !0
        };
    };
    var rt = 1, at = 2, nt = 4;
    var ot = /* */ function() {
        function ot() {
            (0, _classCallCheck2.default)(this, ot);
        }
        (0, _createClass2.default)(ot, null, [ {
            key: "loadFromXML",
            value: function loadFromXML(t) {
                var e = {};
                ot.strings = e;
                for (var i = function(t, e) {
                    var i = t.childNodes, s = i.length;
                    if (s > 0) for (var h = 0; h < s; h++) {
                        var r = i[h];
                        if (r.nodeName == e) return r;
                    }
                    return null;
                }(Laya.Utils.parseXMLFromString(t), "resources").childNodes, s = i.length, h = 0; h < s; h++) {
                    var r = i[h];
                    if ("string" == r.nodeName) {
                        var a = r.getAttribute("name"), n = r.textContent, o = a.indexOf("-");
                        if (-1 == o) continue;
                        var l = a.substr(0, o), _ = a.substr(o + 1), d = e[l];
                        d || (d = {}, e[l] = d), d[_] = n;
                    }
                }
            }
        }, {
            key: "translateComponent",
            value: function translateComponent(e) {
                if (null != ot.strings) {
                    var i = ot.strings[e.owner.id + e.id];
                    if (null != i) {
                        var s, h, r, a, n, o, l, _, d, c = e.rawData;
                        c.seek(0, 2);
                        var u = c.getInt16();
                        for (n = 0; n < u; n++) {
                            l = c.getInt16(), _ = c.pos, c.seek(_, 0);
                            var g = c.readByte(), p = g;
                            c.skip(4), s = c.readS(), p == t.ObjectType.Component && c.seek(_, 6) && (p = c.readByte()), 
                            c.seek(_, 1), null != (h = i[s + "-tips"]) && c.writeS(h), c.seek(_, 2);
                            var y = c.getInt16();
                            for (o = 0; o < y; o++) {
                                if (r = c.getInt16(), r += c.pos, 6 == c.readByte()) {
                                    for (c.skip(2), d = c.getInt16(), m = 0; m < d; m++) {
                                        null != c.readS() && (null != (h = i[s + "-texts_" + m]) ? c.writeS(h) : c.skip(2));
                                    }
                                    c.readBool() && null != (h = i[s + "-texts_def"]) && c.writeS(h);
                                }
                                c.pos = r;
                            }
                            if (g == t.ObjectType.Component && c.version >= 2) {
                                c.seek(_, 4), c.skip(2), c.skip(4 * c.getUint16());
                                for (var f = c.getUint16(), m = 0; m < f; m++) {
                                    var v = c.readS();
                                    0 == c.getUint16() && null != (h = i[s + "-cp-" + v]) ? c.writeS(h) : c.skip(2);
                                }
                            }
                            switch (p) {
                              case t.ObjectType.Text:
                              case t.ObjectType.RichText:
                              case t.ObjectType.InputText:
                                null != (h = i[s]) && (c.seek(_, 6), c.writeS(h)), null != (h = i[s + "-prompt"]) && (c.seek(_, 4), 
                                c.writeS(h));
                                break;

                              case t.ObjectType.List:
                              case t.ObjectType.Tree:
                                for (c.seek(_, 8), c.skip(2), a = c.getUint16(), o = 0; o < a; o++) {
                                    if (r = c.getUint16(), r += c.pos, c.skip(2), p == t.ObjectType.Tree && c.skip(2), 
                                    null != (h = i[s + "-" + o]) ? c.writeS(h) : c.skip(2), null != (h = i[s + "-" + o + "-0"]) ? c.writeS(h) : c.skip(2), 
                                    c.version >= 2) {
                                        c.skip(6), c.skip(4 * c.getUint16());
                                        for (f = c.getUint16(), m = 0; m < f; m++) {
                                            v = c.readS();
                                            0 == c.getUint16() && null != (h = i[s + "-" + o + "-" + v]) ? c.writeS(h) : c.skip(2);
                                        }
                                    }
                                    c.pos = r;
                                }
                                break;

                              case t.ObjectType.Label:
                                c.seek(_, 6) && c.readByte() == p && (null != (h = i[s]) ? c.writeS(h) : c.skip(2), 
                                c.skip(2), c.readBool() && c.skip(4), c.skip(4), c.readBool() && null != (h = i[s + "-prompt"]) && c.writeS(h));
                                break;

                              case t.ObjectType.Button:
                                c.seek(_, 6) && c.readByte() == p && (null != (h = i[s]) ? c.writeS(h) : c.skip(2), 
                                null != (h = i[s + "-0"]) && c.writeS(h));
                                break;

                              case t.ObjectType.ComboBox:
                                if (c.seek(_, 6) && c.readByte() == p) {
                                    for (a = c.getInt16(), o = 0; o < a; o++) {
                                        r = c.getInt16(), r += c.pos, null != (h = i[s + "-" + o]) && c.writeS(h), c.pos = r;
                                    }
                                    null != (h = i[s]) && c.writeS(h);
                                }
                            }
                            c.pos = _ + l;
                        }
                    }
                }
            }
        } ]);
        return ot;
    }();
    t.TranslationHelper = ot;
    var lt = function lt() {
        (0, _classCallCheck2.default)(this, lt);
    };
    lt.defaultFont = "SimSun", lt.modalLayerColor = "rgba(33,33,33,0.2)", lt.buttonSoundVolumeScale = 1, 
    lt.defaultScrollStep = 25, lt.defaultScrollDecelerationRate = .967, lt.defaultScrollBarDisplay = t.ScrollBarDisplayType.Visible, 
    lt.defaultScrollTouchEffect = !0, lt.defaultScrollBounceEffect = !0, lt.defaultScrollSnappingThreshold = .1, 
    lt.defaultScrollPagingThreshold = .3, lt.defaultComboBoxVisibleItemCount = 10, lt.touchScrollSensitivity = 20, 
    lt.touchDragSensitivity = 10, lt.clickDragSensitivity = 2, lt.bringWindowToFrontOnClick = !0, 
    lt.frameTimeForAsyncUIConstruction = 2, lt.textureLinearSampling = !0, lt.packageFileExtension = "fui", 
    t.UIConfig = lt;
    var _t = /* */ function() {
        function _t() {
            (0, _classCallCheck2.default)(this, _t);
        }
        (0, _createClass2.default)(_t, null, [ {
            key: "setExtension",
            value: function setExtension(e, i) {
                if (null == e) throw "Invaild url: " + e;
                var s = t.UIPackage.getItemByURL(e);
                s && (s.extensionType = i), _t.extensions[e] = i;
            }
        }, {
            key: "setPackageItemExtension",
            value: function setPackageItemExtension(t, e) {
                _t.setExtension(t, e);
            }
        }, {
            key: "setLoaderExtension",
            value: function setLoaderExtension(t) {
                _t.loaderType = t;
            }
        }, {
            key: "resolvePackageItemExtension",
            value: function resolvePackageItemExtension(t) {
                var e = _t.extensions["ui://" + t.owner.id + t.id];
                e || (e = _t.extensions["ui://" + t.owner.name + "/" + t.name]), e && (t.extensionType = e);
            }
        }, {
            key: "newObject",
            value: function newObject(e, i) {
                var s;
                if ("number" == typeof e) switch (e) {
                  case t.ObjectType.Image:
                    return new t.GImage();

                  case t.ObjectType.MovieClip:
                    return new t.GMovieClip();

                  case t.ObjectType.Component:
                    return new t.GComponent();

                  case t.ObjectType.Text:
                    return new t.GBasicTextField();

                  case t.ObjectType.RichText:
                    return new t.GRichTextField();

                  case t.ObjectType.InputText:
                    return new t.GTextInput();

                  case t.ObjectType.Group:
                    return new t.GGroup();

                  case t.ObjectType.List:
                    return new t.GList();

                  case t.ObjectType.Graph:
                    return new t.GGraph();

                  case t.ObjectType.Loader:
                    return _t.loaderType ? new _t.loaderType() : new t.GLoader();

                  case t.ObjectType.Button:
                    return new t.GButton();

                  case t.ObjectType.Label:
                    return new t.GLabel();

                  case t.ObjectType.ProgressBar:
                    return new t.GProgressBar();

                  case t.ObjectType.Slider:
                    return new t.GSlider();

                  case t.ObjectType.ScrollBar:
                    return new t.GScrollBar();

                  case t.ObjectType.ComboBox:
                    return new t.GComboBox();

                  case t.ObjectType.Tree:
                    return new t.GTree();

                  case t.ObjectType.Loader3D:
                    return new t.GLoader3D();

                  default:
                    return null;
                } else (s = e.type == t.PackageItemType.Component ? i ? new i() : e.extensionType ? new e.extensionType() : _t.newObject(e.objectType) : _t.newObject(e.objectType)) && (s.packageItem = e);
                return s;
            }
        } ]);
        return _t;
    }();
    _t.extensions = {}, t.UIObjectFactory = _t;
    var dt = /* */ function() {
        function dt() {
            (0, _classCallCheck2.default)(this, dt);
            this._items = [], this._itemsById = {}, this._itemsByName = {}, this._sprites = {}, 
            this._dependencies = [], this._branches = [], this._branchIndex = -1;
        }
        (0, _createClass2.default)(dt, [ {
            key: "loadPackage",
            value: function loadPackage(e) {
                if (1179080009 != e.getUint32()) throw new Error("FairyGUI: old package format found in '" + this._resKey + "'");
                e.version = e.getInt32();
                var i = e.readBool();
                if (this._id = e.readUTFString(), this._name = e.readUTFString(), e.skip(20), i) {
                    var s = new Uint8Array(e.buffer, e.pos, e.length - e.pos);
                    s = new Zlib.RawInflate(s).decompress();
                    var _i2 = new t.ByteBuffer(s);
                    _i2.version = e.version, e = _i2;
                }
                var h, r, a, n, o, l = e.version >= 2, _ = e.pos;
                e.seek(_, 4), h = e.getInt32();
                var d, c = [];
                for (r = 0; r < h; r++) {
                    c[r] = e.readUTFString();
                }
                for (e.stringTable = c, e.seek(_, 0), h = e.getInt16(), r = 0; r < h; r++) {
                    this._dependencies.push({
                        id: e.readS(),
                        name: e.readS()
                    });
                }
                l && ((h = e.getInt16()) > 0 && (this._branches = e.readSArray(h), dt._branch && (this._branchIndex = this._branches.indexOf(dt._branch))), 
                o = h > 0), e.seek(_, 1);
                var u = this._resKey;
                var g = u.lastIndexOf("/"), p = -1 == g ? "" : u.substr(0, g + 1);
                for (u += "_", h = e.getUint16(), r = 0; r < h; r++) {
                    switch (a = e.getInt32(), a += e.pos, (d = new t.PackageItem()).owner = this, d.type = e.readByte(), 
                    d.id = e.readS(), d.name = e.readS(), e.readS(), (n = e.readS()) && (d.file = n), 
                    e.readBool(), d.width = e.getInt32(), d.height = e.getInt32(), d.type) {
                      case t.PackageItemType.Image:
                        d.objectType = t.ObjectType.Image;
                        var y = e.readByte();
                        1 == y ? (d.scale9Grid = new Laya.Rectangle(), d.scale9Grid.x = e.getInt32(), d.scale9Grid.y = e.getInt32(), 
                        d.scale9Grid.width = e.getInt32(), d.scale9Grid.height = e.getInt32(), d.tileGridIndice = e.getInt32()) : 2 == y && (d.scaleByTile = !0), 
                        d.smoothing = e.readBool();
                        break;

                      case t.PackageItemType.MovieClip:
                        d.smoothing = e.readBool(), d.objectType = t.ObjectType.MovieClip, d.rawData = e.readBuffer();
                        break;

                      case t.PackageItemType.Font:
                        d.rawData = e.readBuffer();
                        break;

                      case t.PackageItemType.Component:
                        var f = e.readByte();
                        d.objectType = f > 0 ? f : t.ObjectType.Component, d.rawData = e.readBuffer(), t.UIObjectFactory.resolvePackageItemExtension(d);
                        break;

                      case t.PackageItemType.Atlas:
                      case t.PackageItemType.Sound:
                      case t.PackageItemType.Misc:
                        d.file = u + d.file;
                        break;

                      case t.PackageItemType.Spine:
                      case t.PackageItemType.DragonBones:
                        d.file = p + d.file, d.skeletonAnchor = new Laya.Point(), d.skeletonAnchor.x = e.getFloat32(), 
                        d.skeletonAnchor.y = e.getFloat32();
                    }
                    if (l) {
                        (n = e.readS()) && (d.name = n + "/" + d.name);
                        var m = e.getUint8();
                        m > 0 && (o ? d.branches = e.readSArray(m) : this._itemsById[e.readS()] = d);
                        var v = e.getUint8();
                        v > 0 && (d.highResolution = e.readSArray(v));
                    }
                    this._items.push(d), this._itemsById[d.id] = d, null != d.name && (this._itemsByName[d.name] = d), 
                    e.pos = a;
                }
                for (e.seek(_, 2), h = e.getUint16(), r = 0; r < h; r++) {
                    a = e.getUint16(), a += e.pos;
                    var w = e.readS();
                    var _t2 = {
                        atlas: d = this._itemsById[e.readS()],
                        rect: new Laya.Rectangle(),
                        offset: new Laya.Point(),
                        originalSize: new Laya.Point()
                    };
                    _t2.atlas = d, _t2.rect.x = e.getInt32(), _t2.rect.y = e.getInt32(), _t2.rect.width = e.getInt32(), 
                    _t2.rect.height = e.getInt32(), _t2.rotated = e.readBool(), l && e.readBool() ? (_t2.offset.x = e.getInt32(), 
                    _t2.offset.y = e.getInt32(), _t2.originalSize.x = e.getInt32(), _t2.originalSize.y = e.getInt32()) : (_t2.originalSize.x = _t2.rect.width, 
                    _t2.originalSize.y = _t2.rect.height), this._sprites[w] = _t2, e.pos = a;
                }
                if (e.seek(_, 3)) for (h = e.getUint16(), r = 0; r < h; r++) {
                    a = e.getInt32(), a += e.pos, (d = this._itemsById[e.readS()]) && d.type == t.PackageItemType.Image && (d.pixelHitTestData = new t.PixelHitTestData(), 
                    d.pixelHitTestData.load(e)), e.pos = a;
                }
            }
        }, {
            key: "loadAllAssets",
            value: function loadAllAssets() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    var i = this._items[e];
                    this.getItemAsset(i);
                }
            }
        }, {
            key: "unloadAssets",
            value: function unloadAssets() {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    s.type == t.PackageItemType.Atlas && s.texture && Laya.loader.clearTextureRes(s.texture.url);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    s.type == t.PackageItemType.Atlas ? s.texture && (s.texture.destroy(), s.texture = null) : s.type == t.PackageItemType.Sound ? Laya.SoundManager.destroySound(s.file) : s.templet && s.templet.destroy();
                }
            }
        }, {
            key: "createObject",
            value: function createObject(t, e) {
                var i = this._itemsByName[t];
                return i ? this.internalCreateObject(i, e) : null;
            }
        }, {
            key: "internalCreateObject",
            value: function internalCreateObject(e, i) {
                var s = t.UIObjectFactory.newObject(e, i);
                return null == s ? null : (dt._constructing++, s.constructFromResource(), dt._constructing--, 
                s);
            }
        }, {
            key: "getItemById",
            value: function getItemById(t) {
                return this._itemsById[t];
            }
        }, {
            key: "getItemByName",
            value: function getItemByName(t) {
                return this._itemsByName[t];
            }
        }, {
            key: "getItemAssetByName",
            value: function getItemAssetByName(t) {
                var e = this._itemsByName[t];
                if (null == e) throw "Resource not found -" + t;
                return this.getItemAsset(e);
            }
        }, {
            key: "getItemAsset",
            value: function getItemAsset(e) {
                switch (e.type) {
                  case t.PackageItemType.Image:
                    if (!e.decoded) {
                        e.decoded = !0;
                        var i = this._sprites[e.id];
                        if (i) {
                            var s = this.getItemAsset(i.atlas);
                            e.texture = s ? Laya.Texture.create(s, i.rect.x, i.rect.y, i.rect.width, i.rect.height, i.offset.x, i.offset.y, i.originalSize.x, i.originalSize.y) : null;
                        } else e.texture = null;
                    }
                    return e.texture;

                  case t.PackageItemType.Atlas:
                    return e.decoded || (e.decoded = !0, e.texture = t.AssetProxy.inst.getRes(e.file)), 
                    e.texture;

                  case t.PackageItemType.Font:
                    return e.decoded || (e.decoded = !0, this.loadFont(e)), e.bitmapFont;

                  case t.PackageItemType.MovieClip:
                    return e.decoded || (e.decoded = !0, this.loadMovieClip(e)), e.frames;

                  case t.PackageItemType.Component:
                    return e.rawData;

                  case t.PackageItemType.Misc:
                    return e.file ? t.AssetProxy.inst.getRes(e.file) : null;

                  default:
                    return null;
                }
            }
        }, {
            key: "getItemAssetAsync",
            value: function getItemAssetAsync(e, i) {
                if (e.decoded) i(null, e); else if (e.loading) e.loading.push(i); else switch (e.type) {
                  case t.PackageItemType.Spine:
                  case t.PackageItemType.DragonBones:
                    e.loading = [ i ], e.templet = new Laya.Templet(), e.templet.on(Laya.Event.COMPLETE, this, function() {
                        var t = e.loading;
                        delete e.loading, t.forEach(function(t) {
                            return t(null, e);
                        });
                    }), e.templet.on(Laya.Event.ERROR, this, function() {
                        var t = e.loading;
                        delete e.loading, delete e.templet, t.forEach(function(t) {
                            return t("parse error", e);
                        });
                    });
                    var _s = e.file.lastIndexOf("."), _h = e.file.substring(0, _s + 1).replace("_ske", "") + "sk";
                    e.templet.loadAni(_h);
                    break;

                  default:
                    this.getItemAsset(e), i(null, e);
                }
            }
        }, {
            key: "loadMovieClip",
            value: function loadMovieClip(t) {
                var e = t.rawData;
                e.seek(0, 0), t.interval = e.getInt32(), t.swing = e.readBool(), t.repeatDelay = e.getInt32(), 
                e.seek(0, 1);
                var i, s, h, r, a = e.getInt16();
                t.frames = [];
                for (var n = 0; n < a; n++) {
                    var o = e.getInt16();
                    o += e.pos, h = e.getInt32(), r = e.getInt32(), e.getInt32(), e.getInt32();
                    var _a = {
                        addDelay: e.getInt32()
                    };
                    if (null != (i = e.readS()) && null != (s = this._sprites[i])) {
                        var l = this.getItemAsset(s.atlas);
                        _a.texture = Laya.Texture.create(l, s.rect.x, s.rect.y, s.rect.width, s.rect.height, h, r, t.width, t.height);
                    }
                    t.frames[n] = _a, e.pos = o;
                }
            }
        }, {
            key: "loadFont",
            value: function loadFont(e) {
                e = e.getBranch();
                var i = new t.BitmapFont();
                e.bitmapFont = i;
                var s = e.rawData;
                s.seek(0, 0), i.ttf = s.readBool(), i.tint = s.readBool(), i.resizable = s.readBool(), 
                s.readBool(), i.size = s.getInt32();
                var h = s.getInt32(), r = s.getInt32(), a = null, n = this._sprites[e.id];
                n && (a = this.getItemAsset(n.atlas)), s.seek(0, 1);
                for (var o = null, l = s.getInt32(), _ = 0; _ < l; _++) {
                    var d = s.getInt16();
                    d += s.pos, o = {};
                    var c = s.readChar();
                    i.glyphs[c] = o;
                    var u = s.readS(), g = s.getInt32(), p = s.getInt32();
                    if (o.x = s.getInt32(), o.y = s.getInt32(), o.width = s.getInt32(), o.height = s.getInt32(), 
                    o.advance = s.getInt32(), o.channel = s.readByte(), 1 == o.channel ? o.channel = 3 : 2 == o.channel ? o.channel = 2 : 3 == o.channel && (o.channel = 1), 
                    i.ttf) o.texture = Laya.Texture.create(a, g + n.rect.x, p + n.rect.y, o.width, o.height), 
                    o.lineHeight = r; else {
                        var y = this._itemsById[u];
                        y && (y = y.getBranch(), o.width = y.width, o.height = y.height, y = y.getHighResolution(), 
                        this.getItemAsset(y), o.texture = y.texture), 0 == o.advance && (o.advance = 0 == h ? o.x + o.width : h), 
                        o.lineHeight = o.y < 0 ? o.height : o.y + o.height, o.lineHeight < i.size && (o.lineHeight = i.size);
                    }
                    s.pos = d;
                }
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "name",
            get: function get() {
                return this._name;
            }
        }, {
            key: "customId",
            get: function get() {
                return this._customId;
            },
            set: function set(t) {
                this._customId && delete dt._instById[this._customId], this._customId = t, this._customId && (dt._instById[this._customId] = this);
            }
        } ], [ {
            key: "getVar",
            value: function getVar(t) {
                return dt._vars[t];
            }
        }, {
            key: "setVar",
            value: function setVar(t, e) {
                dt._vars[t] = e;
            }
        }, {
            key: "getById",
            value: function getById(t) {
                return dt._instById[t];
            }
        }, {
            key: "getByName",
            value: function getByName(t) {
                return dt._instByName[t];
            }
        }, {
            key: "addPackage",
            value: function addPackage(e, i) {
                if (!(i || (i = t.AssetProxy.inst.getRes(e + "." + t.UIConfig.packageFileExtension)) && 0 != i.byteLength)) throw new Error("resource '" + e + "' not found");
                var s = new t.ByteBuffer(i), h = new dt();
                return h._resKey = e, h.loadPackage(s), dt._instById[h.id] = h, dt._instByName[h.name] = h, 
                dt._instById[e] = h, h;
            }
        }, {
            key: "loadPackage",
            value: function loadPackage(e, i, s) {
                var h, r = [], a = [];
                if (Array.isArray(e)) for (h = 0; h < e.length; h++) {
                    r.push({
                        url: e[h] + "." + t.UIConfig.packageFileExtension,
                        type: Laya.Loader.BUFFER
                    }), a.push(e[h]);
                } else r = [ {
                    url: e + "." + t.UIConfig.packageFileExtension,
                    type: Laya.Loader.BUFFER
                } ], a = [ e ];
                var n, o = [];
                for (h = 0; h < r.length; h++) {
                    (n = dt._instById[a[h]]) && (o.push(n), r.splice(h, 1), a.splice(h, 1), h--);
                }
                if (0 != r.length) {
                    var l = Laya.Handler.create(this, function() {
                        var e, n = [];
                        for (h = 0; h < r.length; h++) {
                            var _i3 = t.AssetProxy.inst.getRes(r[h].url);
                            if (_i3) {
                                e = new dt(), o.push(e), e._resKey = a[h], e.loadPackage(new t.ByteBuffer(_i3));
                                var _s2 = e._items.length;
                                for (var _i4 = 0; _i4 < _s2; _i4++) {
                                    var _s3 = e._items[_i4];
                                    _s3.type == t.PackageItemType.Atlas ? n.push({
                                        url: _s3.file,
                                        type: Laya.Loader.IMAGE
                                    }) : _s3.type == t.PackageItemType.Sound && n.push({
                                        url: _s3.file,
                                        type: Laya.Loader.SOUND
                                    });
                                }
                            }
                        }
                        if (n.length > 0) t.AssetProxy.inst.load(n, Laya.Handler.create(this, function() {
                            for (h = 0; h < o.length; h++) {
                                e = o[h], dt._instById[e.id] || (dt._instById[e.id] = e, dt._instByName[e.name] = e, 
                                dt._instById[e._resKey] = e);
                            }
                            i.runWith([ o ]);
                        }, null, !0), s); else {
                            for (h = 0; h < o.length; h++) {
                                e = o[h], dt._instById[e.id] || (dt._instById[e.id] = e, dt._instByName[e.name] = e, 
                                dt._instById[e._resKey] = e);
                            }
                            i.runWith([ o ]);
                        }
                    }, null, !0);
                    t.AssetProxy.inst.load(r, l, null, Laya.Loader.BUFFER);
                } else i.runWith([ o ]);
            }
        }, {
            key: "removePackage",
            value: function removePackage(t) {
                var e = dt._instById[t];
                if (e || (e = dt._instByName[t]), !e) throw new Error("unknown package: " + t);
                e.dispose(), delete dt._instById[e.id], delete dt._instByName[e.name], delete dt._instById[e._resKey], 
                e._customId && delete dt._instById[e._customId];
            }
        }, {
            key: "createObject",
            value: function createObject(t, e, i) {
                var s = dt.getByName(t);
                return s ? s.createObject(e, i) : null;
            }
        }, {
            key: "createObjectFromURL",
            value: function createObjectFromURL(t, e) {
                var i = dt.getItemByURL(t);
                return i ? i.owner.internalCreateObject(i, e) : null;
            }
        }, {
            key: "getItemURL",
            value: function getItemURL(t, e) {
                var i = dt.getByName(t);
                if (!i) return null;
                var s = i._itemsByName[e];
                return s ? "ui://" + i.id + s.id : null;
            }
        }, {
            key: "getItemByURL",
            value: function getItemByURL(t) {
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var i = t.indexOf("/", e + 2);
                if (-1 == i) {
                    if (t.length > 13) {
                        var s = t.substr(5, 8), h = dt.getById(s);
                        if (h) {
                            var r = t.substr(13);
                            return h.getItemById(r);
                        }
                    }
                } else {
                    var a = t.substr(e + 2, i - e - 2);
                    if (h = dt.getByName(a)) {
                        var n = t.substr(i + 1);
                        return h.getItemByName(n);
                    }
                }
                return null;
            }
        }, {
            key: "getItemAssetByURL",
            value: function getItemAssetByURL(t) {
                var e = dt.getItemByURL(t);
                return null == e ? null : e.owner.getItemAsset(e);
            }
        }, {
            key: "normalizeURL",
            value: function normalizeURL(t) {
                if (null == t) return null;
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var i = t.indexOf("/", e + 2);
                if (-1 == i) return t;
                var s = t.substr(e + 2, i - e - 2), h = t.substr(i + 1);
                return dt.getItemURL(s, h);
            }
        }, {
            key: "setStringsSource",
            value: function setStringsSource(e) {
                t.TranslationHelper.loadFromXML(e);
            }
        }, {
            key: "branch",
            get: function get() {
                return dt._branch;
            },
            set: function set(t) {
                for (var e in dt._branch = t, dt._instById) {
                    var i = dt._instById[e];
                    i._branches && (i._branchIndex = i._branches.indexOf(t));
                }
            }
        } ]);
        return dt;
    }();
    dt._constructing = 0, dt._instById = {}, dt._instByName = {}, dt._branch = "", dt._vars = {}, 
    t.UIPackage = dt;
    t.Window = /* */ function(_t$GComponent9) {
        (0, _inherits2.default)(_class26, _t$GComponent9);
        var _super23 = _createSuper(_class26);
        function _class26() {
            var _this19;
            (0, _classCallCheck2.default)(this, _class26);
            _this19 = _super23.call(this), _this19._requestingCmd = 0, _this19._uiSources = [], 
            _this19.bringToFontOnClick = t.UIConfig.bringWindowToFrontOnClick, _this19.displayObject.on(Laya.Event.DISPLAY, (0, 
            _assertThisInitialized2.default)(_this19), _this19.__onShown), _this19.displayObject.on(Laya.Event.UNDISPLAY, (0, 
            _assertThisInitialized2.default)(_this19), _this19.__onHidden), _this19.displayObject.on(Laya.Event.MOUSE_DOWN, (0, 
            _assertThisInitialized2.default)(_this19), _this19.__mouseDown);
            return _this19;
        }
        (0, _createClass2.default)(_class26, [ {
            key: "addUISource",
            value: function addUISource(t) {
                this._uiSources.push(t);
            }
        }, {
            key: "show",
            value: function show() {
                t.GRoot.inst.showWindow(this);
            }
        }, {
            key: "showOn",
            value: function showOn(t) {
                t.showWindow(this);
            }
        }, {
            key: "hide",
            value: function hide() {
                this.isShowing && this.doHideAnimation();
            }
        }, {
            key: "hideImmediately",
            value: function hideImmediately() {
                var e = this.parent instanceof t.GRoot ? this.parent : null;
                e || (e = t.GRoot.inst), e.hideWindowImmediately(this);
            }
        }, {
            key: "centerOn",
            value: function centerOn(e, i) {
                this.setXY(Math.round((e.width - this.width) / 2), Math.round((e.height - this.height) / 2)), 
                i && (this.addRelation(e, t.RelationType.Center_Center), this.addRelation(e, t.RelationType.Middle_Middle));
            }
        }, {
            key: "toggleStatus",
            value: function toggleStatus() {
                this.isTop ? this.hide() : this.show();
            }
        }, {
            key: "bringToFront",
            value: function bringToFront() {
                this.root.bringToFront(this);
            }
        }, {
            key: "showModalWait",
            value: function showModalWait(e) {
                null != e && (this._requestingCmd = e), t.UIConfig.windowModalWaiting && (this._modalWaitPane || (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.windowModalWaiting)), 
                this.layoutModalWaitPane(), this.addChild(this._modalWaitPane));
            }
        }, {
            key: "layoutModalWaitPane",
            value: function layoutModalWaitPane() {
                if (this._contentArea) {
                    var t = this._frame.localToGlobal();
                    t = this.globalToLocal(t.x, t.y, t), this._modalWaitPane.setXY(t.x + this._contentArea.x, t.y + this._contentArea.y), 
                    this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
                } else this._modalWaitPane.setSize(this.width, this.height);
            }
        }, {
            key: "closeModalWait",
            value: function closeModalWait(t) {
                return (null == t || this._requestingCmd == t) && (this._requestingCmd = 0, this._modalWaitPane && null != this._modalWaitPane.parent && this.removeChild(this._modalWaitPane), 
                !0);
            }
        }, {
            key: "init",
            value: function init() {
                if (!this._inited && !this._loading) if (this._uiSources.length > 0) {
                    this._loading = !1;
                    for (var t = this._uiSources.length, e = 0; e < t; e++) {
                        var i = this._uiSources[e];
                        i.loaded || (i.load(this.__uiLoadComplete, this), this._loading = !0);
                    }
                    this._loading || this._init();
                } else this._init();
            }
        }, {
            key: "onInit",
            value: function onInit() {}
        }, {
            key: "onShown",
            value: function onShown() {}
        }, {
            key: "onHide",
            value: function onHide() {}
        }, {
            key: "doShowAnimation",
            value: function doShowAnimation() {
                this.onShown();
            }
        }, {
            key: "doHideAnimation",
            value: function doHideAnimation() {
                this.hideImmediately();
            }
        }, {
            key: "__uiLoadComplete",
            value: function __uiLoadComplete() {
                for (var t = this._uiSources.length, e = 0; e < t; e++) {
                    if (!this._uiSources[e].loaded) return;
                }
                this._loading = !1, this._init();
            }
        }, {
            key: "_init",
            value: function _init() {
                this._inited = !0, this.onInit(), this.isShowing && this.doShowAnimation();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.parent && this.hideImmediately(), (0, _get2.default)((0, _getPrototypeOf2.default)(_class26.prototype), "dispose", this).call(this);
            }
        }, {
            key: "closeEventHandler",
            value: function closeEventHandler() {
                this.hide();
            }
        }, {
            key: "__onShown",
            value: function __onShown() {
                this._inited ? this.doShowAnimation() : this.init();
            }
        }, {
            key: "__onHidden",
            value: function __onHidden() {
                this.closeModalWait(), this.onHide();
            }
        }, {
            key: "__mouseDown",
            value: function __mouseDown() {
                this.isShowing && this.bringToFontOnClick && this.bringToFront();
            }
        }, {
            key: "__dragStart",
            value: function __dragStart(e) {
                t.GObject.cast(e.currentTarget).stopDrag(), this.startDrag();
            }
        }, {
            key: "contentPane",
            set: function set(e) {
                this._contentPane != e && (this._contentPane && this.removeChild(this._contentPane), 
                this._contentPane = e, this._contentPane && (this.addChild(this._contentPane), this.setSize(this._contentPane.width, this._contentPane.height), 
                this._contentPane.addRelation(this, t.RelationType.Size), this._frame = this._contentPane.getChild("frame"), 
                this._frame && (this.closeButton = this._frame.getChild("closeButton"), this.dragArea = this._frame.getChild("dragArea"), 
                this.contentArea = this._frame.getChild("contentArea"))));
            },
            get: function get() {
                return this._contentPane;
            }
        }, {
            key: "frame",
            get: function get() {
                return this._frame;
            }
        }, {
            key: "closeButton",
            get: function get() {
                return this._closeButton;
            },
            set: function set(t) {
                this._closeButton && this._closeButton.offClick(this, this.closeEventHandler), this._closeButton = t, 
                this._closeButton && this._closeButton.onClick(this, this.closeEventHandler);
            }
        }, {
            key: "dragArea",
            get: function get() {
                return this._dragArea;
            },
            set: function set(e) {
                this._dragArea != e && (this._dragArea && (this._dragArea.draggable = !1, this._dragArea.off(t.Events.DRAG_START, this, this.__dragStart)), 
                this._dragArea = e, this._dragArea && (this._dragArea instanceof t.GGraph && this._dragArea.asGraph.drawRect(0, null, null), 
                this._dragArea.draggable = !0, this._dragArea.on(t.Events.DRAG_START, this, this.__dragStart)));
            }
        }, {
            key: "contentArea",
            get: function get() {
                return this._contentArea;
            },
            set: function set(t) {
                this._contentArea = t;
            }
        }, {
            key: "isShowing",
            get: function get() {
                return null != this.parent;
            }
        }, {
            key: "isTop",
            get: function get() {
                return null != this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
            }
        }, {
            key: "modal",
            get: function get() {
                return this._modal;
            },
            set: function set(t) {
                this._modal = t;
            }
        }, {
            key: "modalWaiting",
            get: function get() {
                return this._modalWaitPane && null != this._modalWaitPane.parent;
            }
        } ]);
        return _class26;
    }(t.GComponent);
    t.ControllerAction = /* */ function() {
        function _class27() {
            (0, _classCallCheck2.default)(this, _class27);
        }
        (0, _createClass2.default)(_class27, [ {
            key: "run",
            value: function run(t, e, i) {
                null != this.fromPage && 0 != this.fromPage.length && -1 == this.fromPage.indexOf(e) || null != this.toPage && 0 != this.toPage.length && -1 == this.toPage.indexOf(i) ? this.leave(t) : this.enter(t);
            }
        }, {
            key: "enter",
            value: function enter(t) {}
        }, {
            key: "leave",
            value: function leave(t) {}
        }, {
            key: "setup",
            value: function setup(t) {
                var e, i;
                for (e = t.getInt16(), this.fromPage = [], i = 0; i < e; i++) {
                    this.fromPage[i] = t.readS();
                }
                for (e = t.getInt16(), this.toPage = [], i = 0; i < e; i++) {
                    this.toPage[i] = t.readS();
                }
            }
        } ], [ {
            key: "createAction",
            value: function createAction(e) {
                switch (e) {
                  case 0:
                    return new t.PlayTransitionAction();

                  case 1:
                    return new t.ChangePageAction();
                }
                return null;
            }
        } ]);
        return _class27;
    }();
    t.ChangePageAction = /* */ function(_t$ControllerAction) {
        (0, _inherits2.default)(_class28, _t$ControllerAction);
        var _super24 = _createSuper(_class28);
        function _class28() {
            (0, _classCallCheck2.default)(this, _class28);
            return _super24.call(this);
        }
        (0, _createClass2.default)(_class28, [ {
            key: "enter",
            value: function enter(t) {
                var e;
                if (this.controllerName && (e = this.objectId ? t.parent.getChildById(this.objectId) : t.parent)) {
                    var i = e.getController(this.controllerName);
                    i && i != t && !i.changing && ("~1" == this.targetPage ? t.selectedIndex < i.pageCount && (i.selectedIndex = t.selectedIndex) : "~2" == this.targetPage ? i.selectedPage = t.selectedPage : i.selectedPageId = this.targetPage);
                }
            }
        }, {
            key: "setup",
            value: function setup(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class28.prototype), "setup", this).call(this, t), 
                this.objectId = t.readS(), this.controllerName = t.readS(), this.targetPage = t.readS();
            }
        } ]);
        return _class28;
    }(t.ControllerAction);
    t.PlayTransitionAction = /* */ function(_t$ControllerAction2) {
        (0, _inherits2.default)(_class29, _t$ControllerAction2);
        var _super25 = _createSuper(_class29);
        function _class29() {
            (0, _classCallCheck2.default)(this, _class29);
            return _super25.call(this);
        }
        (0, _createClass2.default)(_class29, [ {
            key: "enter",
            value: function enter(t) {
                var e = t.parent.getTransition(this.transitionName);
                e && (this._currentTransition && this._currentTransition.playing ? e.changePlayTimes(this.playTimes) : e.play(null, this.playTimes, this.delay), 
                this._currentTransition = e);
            }
        }, {
            key: "leave",
            value: function leave(t) {
                this.stopOnExit && this._currentTransition && (this._currentTransition.stop(), this._currentTransition = null);
            }
        }, {
            key: "setup",
            value: function setup(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class29.prototype), "setup", this).call(this, t), 
                this.transitionName = t.readS(), this.playTimes = t.getInt32(), this.delay = t.getFloat32(), 
                this.stopOnExit = t.readBool();
            }
        } ]);
        return _class29;
    }(t.ControllerAction);
    function fillRadial90(e, i, s, h, r) {
        var a, n, o;
        switch ((!h || s != t.FillOrigin.TopRight && s != t.FillOrigin.BottomLeft) && (h || s != t.FillOrigin.TopLeft && s != t.FillOrigin.BottomRight) || (r = 1 - r), 
        a = ((n = e * Math.tan(Math.PI / 2 * r)) - i) / n, s) {
          case t.FillOrigin.TopLeft:
            o = h ? n <= i ? [ 0, 0, e, n, e, 0 ] : [ 0, 0, e * (1 - a), i, e, i, e, 0 ] : n <= i ? [ 0, 0, e, n, e, i, 0, i ] : [ 0, 0, e * (1 - a), i, 0, i ];
            break;

          case t.FillOrigin.TopRight:
            o = h ? n <= i ? [ e, 0, 0, n, 0, i, e, i ] : [ e, 0, e * a, i, e, i ] : n <= i ? [ e, 0, 0, n, 0, 0 ] : [ e, 0, e * a, i, 0, i, 0, 0 ];
            break;

          case t.FillOrigin.BottomLeft:
            o = h ? n <= i ? [ 0, i, e, i - n, e, 0, 0, 0 ] : [ 0, i, e * (1 - a), 0, 0, 0 ] : n <= i ? [ 0, i, e, i - n, e, i ] : [ 0, i, e * (1 - a), 0, e, 0, e, i ];
            break;

          case t.FillOrigin.BottomRight:
            o = h ? n <= i ? [ e, i, 0, i - n, 0, i ] : [ e, i, e * a, 0, 0, 0, 0, i ] : n <= i ? [ e, i, 0, i - n, 0, 0, e, 0 ] : [ e, i, e * a, 0, e, 0 ];
        }
        return o;
    }
    function movePoints(t, e, i) {
        for (var s = t.length, h = 0; h < s; h += 2) {
            t[h] += e, t[h + 1] += i;
        }
    }
    function fillRadial180(e, i, s, h, r) {
        var a;
        switch (s) {
          case t.FillOrigin.Top:
            r <= .5 ? (r /= .5, a = fillRadial90(e / 2, i, h ? t.FillOrigin.TopLeft : t.FillOrigin.TopRight, h, r), 
            h && movePoints(a, e / 2, 0)) : (r = (r - .5) / .5, a = fillRadial90(e / 2, i, h ? t.FillOrigin.TopRight : t.FillOrigin.TopLeft, h, r), 
            h ? a.push(e, i, e, 0) : (movePoints(a, e / 2, 0), a.push(0, i, 0, 0)));
            break;

          case t.FillOrigin.Bottom:
            r <= .5 ? (r /= .5, a = fillRadial90(e / 2, i, h ? t.FillOrigin.BottomRight : t.FillOrigin.BottomLeft, h, r), 
            h || movePoints(a, e / 2, 0)) : (r = (r - .5) / .5, a = fillRadial90(e / 2, i, h ? t.FillOrigin.BottomLeft : t.FillOrigin.BottomRight, h, r), 
            h ? (movePoints(a, e / 2, 0), a.push(0, 0, 0, i)) : a.push(e, 0, e, i));
            break;

          case t.FillOrigin.Left:
            r <= .5 ? (r /= .5, a = fillRadial90(e, i / 2, h ? t.FillOrigin.BottomLeft : t.FillOrigin.TopLeft, h, r), 
            h || movePoints(a, 0, i / 2)) : (r = (r - .5) / .5, a = fillRadial90(e, i / 2, h ? t.FillOrigin.TopLeft : t.FillOrigin.BottomLeft, h, r), 
            h ? (movePoints(a, 0, i / 2), a.push(e, 0, 0, 0)) : a.push(e, i, 0, i));
            break;

          case t.FillOrigin.Right:
            r <= .5 ? (r /= .5, a = fillRadial90(e, i / 2, h ? t.FillOrigin.TopRight : t.FillOrigin.BottomRight, h, r), 
            h && movePoints(a, 0, i / 2)) : (r = (r - .5) / .5, a = fillRadial90(e, i / 2, h ? t.FillOrigin.BottomRight : t.FillOrigin.TopRight, h, r), 
            h ? a.push(0, i, e, i) : (movePoints(a, 0, i / 2), a.push(0, 0, e, 0)));
        }
        return a;
    }
    t.BitmapFont = /* */ function() {
        function _class30() {
            (0, _classCallCheck2.default)(this, _class30);
            this.size = 0, this.glyphs = {};
        }
        return _class30;
    }(), t.fillImage = function(e, i, s, h, r, a) {
        if (a <= 0) return null;
        if (a >= .9999) return [ 0, 0, e, 0, e, i, 0, i ];
        var n;
        switch (s) {
          case t.FillMethod.Horizontal:
            n = function(e, i, s, h) {
                var r = e * h;
                return s == t.FillOrigin.Left || s == t.FillOrigin.Top ? [ 0, 0, r, 0, r, i, 0, i ] : [ e, 0, e, i, e - r, i, e - r, 0 ];
            }(e, i, h, a);
            break;

          case t.FillMethod.Vertical:
            n = function(e, i, s, h) {
                var r = i * h;
                return s == t.FillOrigin.Left || s == t.FillOrigin.Top ? [ 0, 0, 0, r, e, r, e, 0 ] : [ 0, i, e, i, e, i - r, 0, i - r ];
            }(e, i, h, a);
            break;

          case t.FillMethod.Radial90:
            n = fillRadial90(e, i, h, r, a);
            break;

          case t.FillMethod.Radial180:
            n = fillRadial180(e, i, h, r, a);
            break;

          case t.FillMethod.Radial360:
            n = function(e, i, s, h, r) {
                var a;
                switch (s) {
                  case t.FillOrigin.Top:
                    r <= .5 ? (r /= .5, a = fillRadial180(e / 2, i, h ? t.FillOrigin.Left : t.FillOrigin.Right, h, r), 
                    h && movePoints(a, e / 2, 0)) : (r = (r - .5) / .5, a = fillRadial180(e / 2, i, h ? t.FillOrigin.Right : t.FillOrigin.Left, h, r), 
                    h ? a.push(e, i, e, 0, e / 2, 0) : (movePoints(a, e / 2, 0), a.push(0, i, 0, 0, e / 2, 0)));
                    break;

                  case t.FillOrigin.Bottom:
                    r <= .5 ? (r /= .5, a = fillRadial180(e / 2, i, h ? t.FillOrigin.Right : t.FillOrigin.Left, h, r), 
                    h || movePoints(a, e / 2, 0)) : (r = (r - .5) / .5, a = fillRadial180(e / 2, i, h ? t.FillOrigin.Left : t.FillOrigin.Right, h, r), 
                    h ? (movePoints(a, e / 2, 0), a.push(0, 0, 0, i, e / 2, i)) : a.push(e, 0, e, i, e / 2, i));
                    break;

                  case t.FillOrigin.Left:
                    r <= .5 ? (r /= .5, a = fillRadial180(e, i / 2, h ? t.FillOrigin.Bottom : t.FillOrigin.Top, h, r), 
                    h || movePoints(a, 0, i / 2)) : (r = (r - .5) / .5, a = fillRadial180(e, i / 2, h ? t.FillOrigin.Top : t.FillOrigin.Bottom, h, r), 
                    h ? (movePoints(a, 0, i / 2), a.push(e, 0, 0, 0, 0, i / 2)) : a.push(e, i, 0, i, 0, i / 2));
                    break;

                  case t.FillOrigin.Right:
                    r <= .5 ? (r /= .5, a = fillRadial180(e, i / 2, h ? t.FillOrigin.Top : t.FillOrigin.Bottom, h, r), 
                    h && movePoints(a, 0, i / 2)) : (r = (r - .5) / .5, a = fillRadial180(e, i / 2, h ? t.FillOrigin.Bottom : t.FillOrigin.Top, h, r), 
                    h ? a.push(0, i, e, i, e, i / 2) : (movePoints(a, 0, i / 2), a.push(0, 0, e, 0, e, i / 2)));
                }
                return a;
            }(e, i, h, r, a);
        }
        return n;
    };
    t.Image = /* */ function(_Laya$Sprite) {
        (0, _inherits2.default)(_class31, _Laya$Sprite);
        var _super26 = _createSuper(_class31);
        function _class31() {
            var _this20;
            (0, _classCallCheck2.default)(this, _class31);
            _this20 = _super26.call(this), _this20._tileGridIndice = 0, _this20._needRebuild = 0, 
            _this20._fillMethod = 0, _this20._fillOrigin = 0, _this20._fillAmount = 0, _this20.mouseEnabled = !1, 
            _this20._color = "#FFFFFF";
            return _this20;
        }
        (0, _createClass2.default)(_class31, [ {
            key: "markChanged",
            value: function markChanged(t) {
                this._needRebuild ? this._needRebuild |= t : (this._needRebuild = t, Laya.timer.callLater(this, this.rebuild));
            }
        }, {
            key: "rebuild",
            value: function rebuild() {
                0 != (1 & this._needRebuild) && this.doDraw(), 0 != (2 & this._needRebuild) && 0 != this._fillMethod && this.doFill(), 
                this._needRebuild = 0;
            }
        }, {
            key: "doDraw",
            value: function doDraw() {
                var t = this._width, e = this._height, i = this.graphics, s = this._source;
                if (i.clear(), null != s && 0 != t && 0 != e) if (this._scaleByTile) i.fillTexture(s, 0, 0, t, e); else if (this._scale9Grid) {
                    if (!this._sizeGrid) {
                        var h = s.width, r = s.height, a = this._scale9Grid.x, n = Math.max(h - this._scale9Grid.right, 0), o = this._scale9Grid.y, l = Math.max(r - this._scale9Grid.bottom, 0);
                        this._sizeGrid = [ o, n, l, a, this._tileGridIndice ];
                    }
                    i.draw9Grid(s, 0, 0, t, e, this._sizeGrid);
                } else i.drawImage(s, 0, 0, t, e);
            }
        }, {
            key: "doFill",
            value: function doFill() {
                var e = this._width, i = this._height, s = this._mask.graphics;
                if (s.clear(), 0 != e && 0 != i) {
                    var h = t.fillImage(e, i, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
                    if (null == h) return this.mask = null, void (this.mask = this._mask);
                    s.drawPoly(0, 0, h, "#FFFFFF");
                }
            }
        }, {
            key: "width",
            set: function set(t) {
                this._width !== t && ((0, _get2.default)((0, _getPrototypeOf2.default)(_class31.prototype), "set_width", this).call(this, t), 
                this.markChanged(1));
            }
        }, {
            key: "height",
            set: function set(t) {
                this._height !== t && ((0, _get2.default)((0, _getPrototypeOf2.default)(_class31.prototype), "set_height", this).call(this, t), 
                this.markChanged(1));
            }
        }, {
            key: "texture",
            get: function get() {
                return this._source;
            },
            set: function set(t) {
                this._source != t && (this._source = t, 0 == this._width && (this._source ? this.size(this._source.width, this._source.height) : this.size(0, 0)), 
                this.repaint(), this.markChanged(1));
            }
        }, {
            key: "scale9Grid",
            get: function get() {
                return this._scale9Grid;
            },
            set: function set(t) {
                this._scale9Grid = t, this._sizeGrid = null, this.markChanged(1);
            }
        }, {
            key: "scaleByTile",
            get: function get() {
                return this._scaleByTile;
            },
            set: function set(t) {
                this._scaleByTile != t && (this._scaleByTile = t, this.markChanged(1));
            }
        }, {
            key: "tileGridIndice",
            get: function get() {
                return this._tileGridIndice;
            },
            set: function set(t) {
                this._tileGridIndice != t && (this._tileGridIndice = t, this.markChanged(1));
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this._fillMethod;
            },
            set: function set(t) {
                this._fillMethod != t && (this._fillMethod = t, 0 != this._fillMethod ? (this._mask || (this._mask = new Laya.Sprite(), 
                this._mask.mouseEnabled = !1), this.mask = this._mask, this.markChanged(2)) : this.mask && (this._mask.graphics.clear(), 
                this.mask = null));
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this._fillOrigin;
            },
            set: function set(t) {
                this._fillOrigin != t && (this._fillOrigin = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this._fillClockwise;
            },
            set: function set(t) {
                this._fillClockwise != t && (this._fillClockwise = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this._fillAmount;
            },
            set: function set(t) {
                this._fillAmount != t && (this._fillAmount = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(e) {
                this._color != e && (this._color = e, t.ToolSet.setColorFilter(this, e));
            }
        } ]);
        return _class31;
    }(Laya.Sprite);
    t.MovieClip = /* */ function(_t$Image) {
        (0, _inherits2.default)(_class32, _t$Image);
        var _super27 = _createSuper(_class32);
        function _class32() {
            var _this21;
            (0, _classCallCheck2.default)(this, _class32);
            _this21 = _super27.call(this), _this21.interval = 0, _this21.repeatDelay = 0, _this21.timeScale = 1, 
            _this21._playing = !0, _this21._frameCount = 0, _this21._frame = 0, _this21._start = 0, 
            _this21._end = 0, _this21._times = 0, _this21._endAt = 0, _this21._status = 0, _this21._frameElapsed = 0, 
            _this21._repeatedCount = 0, _this21.mouseEnabled = !1, _this21.setPlaySettings(), 
            _this21.on(Laya.Event.DISPLAY, (0, _assertThisInitialized2.default)(_this21), _this21.__addToStage), 
            _this21.on(Laya.Event.UNDISPLAY, (0, _assertThisInitialized2.default)(_this21), _this21.__removeFromStage);
            return _this21;
        }
        (0, _createClass2.default)(_class32, [ {
            key: "rewind",
            value: function rewind() {
                this._frame = 0, this._frameElapsed = 0, this._reversed = !1, this._repeatedCount = 0, 
                this.drawFrame();
            }
        }, {
            key: "syncStatus",
            value: function syncStatus(t) {
                this._frame = t._frame, this._frameElapsed = t._frameElapsed, this._reversed = t._reversed, 
                this._repeatedCount = t._repeatedCount, this.drawFrame();
            }
        }, {
            key: "advance",
            value: function advance(t) {
                for (var e = this._frame, i = this._reversed, s = t; ;) {
                    var h = this.interval + this._frames[this._frame].addDelay;
                    if (0 == this._frame && this._repeatedCount > 0 && (h += this.repeatDelay), t < h) {
                        this._frameElapsed = 0;
                        break;
                    }
                    if (t -= h, this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, 
                    this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), 
                    this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, 
                    this._repeatedCount++)), this._frame == e && this._reversed == i) {
                        var r = s - t;
                        t -= Math.floor(t / r) * r;
                    }
                }
                this.drawFrame();
            }
        }, {
            key: "setPlaySettings",
            value: function setPlaySettings(t, e, i, s, h) {
                null == t && (t = 0), null == e && (e = -1), null == i && (i = 0), null == s && (s = -1), 
                this._start = t, this._end = e, (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), 
                this._times = i, this._endAt = s, -1 == this._endAt && (this._endAt = this._end), 
                this._status = 0, this._endHandler = h, this.frame = t;
            }
        }, {
            key: "update",
            value: function update() {
                if (this._playing && 0 != this._frameCount && 3 != this._status) {
                    var t = Laya.timer.delta;
                    t > 100 && (t = 100), 1 != this.timeScale && (t *= this.timeScale), this._frameElapsed += t;
                    var e = this.interval + this._frames[this._frame].addDelay;
                    if (0 == this._frame && this._repeatedCount > 0 && (e += this.repeatDelay), !(this._frameElapsed < e)) {
                        if (this._frameElapsed -= e, this._frameElapsed > this.interval && (this._frameElapsed = this.interval), 
                        this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, 
                        this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), 
                        this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, 
                        this._repeatedCount++)), 1 == this._status) this._frame = this._start, this._frameElapsed = 0, 
                        this._status = 0; else if (2 == this._status) {
                            if (this._frame = this._endAt, this._frameElapsed = 0, this._status = 3, this._endHandler) {
                                var i = this._endHandler;
                                this._endHandler = null, i.run();
                            }
                        } else this._frame == this._end && (this._times > 0 ? (this._times--, 0 == this._times ? this._status = 2 : this._status = 1) : this._status = 1);
                        this.drawFrame();
                    }
                }
            }
        }, {
            key: "drawFrame",
            value: function drawFrame() {
                if (this._frameCount > 0 && this._frame < this._frames.length) {
                    var t = this._frames[this._frame];
                    this.texture = t.texture;
                } else this.texture = null;
                this.rebuild();
            }
        }, {
            key: "checkTimer",
            value: function checkTimer() {
                this._playing && this._frameCount > 0 && null != this.stage ? Laya.timer.frameLoop(1, this, this.update) : Laya.timer.clear(this, this.update);
            }
        }, {
            key: "__addToStage",
            value: function __addToStage() {
                this._playing && this._frameCount > 0 && Laya.timer.frameLoop(1, this, this.update);
            }
        }, {
            key: "__removeFromStage",
            value: function __removeFromStage() {
                Laya.timer.clear(this, this.update);
            }
        }, {
            key: "frames",
            get: function get() {
                return this._frames;
            },
            set: function set(t) {
                this._frames = t, this._scaleByTile = !1, this._scale9Grid = null, this._frames ? (this._frameCount = this._frames.length, 
                (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), 
                (-1 == this._endAt || this._endAt > this._frameCount - 1) && (this._endAt = this._frameCount - 1), 
                (this._frame < 0 || this._frame > this._frameCount - 1) && (this._frame = this._frameCount - 1), 
                this._frameElapsed = 0, this._repeatedCount = 0, this._reversed = !1) : this._frameCount = 0, 
                this.drawFrame(), this.checkTimer();
            }
        }, {
            key: "frameCount",
            get: function get() {
                return this._frameCount;
            }
        }, {
            key: "frame",
            get: function get() {
                return this._frame;
            },
            set: function set(t) {
                this._frame != t && (this._frames && t >= this._frameCount && (t = this._frameCount - 1), 
                this._frame = t, this._frameElapsed = 0, this.drawFrame());
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            },
            set: function set(t) {
                this._playing != t && (this._playing = t, this.checkTimer());
            }
        } ]);
        return _class32;
    }(t.Image);
    var ct;
    t.GearBase = /* */ function() {
        function _class33(t) {
            (0, _classCallCheck2.default)(this, _class33);
            this._owner = t;
        }
        (0, _createClass2.default)(_class33, [ {
            key: "dispose",
            value: function dispose() {
                this._tweenConfig && this._tweenConfig._tweener && (this._tweenConfig._tweener.kill(), 
                this._tweenConfig._tweener = null);
            }
        }, {
            key: "setup",
            value: function setup(e) {
                var i, s;
                this._controller = this._owner.parent.getControllerAt(e.getInt16()), this.init();
                var h = e.getInt16();
                if (this instanceof t.GearDisplay) this.pages = e.readSArray(h); else if (this instanceof t.GearDisplay2) this.pages = e.readSArray(h); else {
                    for (i = 0; i < h; i++) {
                        null != (s = e.readS()) && this.addStatus(s, e);
                    }
                    e.readBool() && this.addStatus(null, e);
                }
                if (e.readBool() && (this._tweenConfig = new ut(), this._tweenConfig.easeType = e.readByte(), 
                this._tweenConfig.duration = e.getFloat32(), this._tweenConfig.delay = e.getFloat32()), 
                e.version >= 2) if (this instanceof t.GearXY) {
                    if (e.readBool()) {
                        for (this.positionsInPercent = !0, i = 0; i < h; i++) {
                            null != (s = e.readS()) && this.addExtStatus(s, e);
                        }
                        e.readBool() && this.addExtStatus(null, e);
                    }
                } else this instanceof t.GearDisplay2 && (this.condition = e.readByte());
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(t, e) {}
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {}
        }, {
            key: "init",
            value: function init() {}
        }, {
            key: "apply",
            value: function apply() {}
        }, {
            key: "updateState",
            value: function updateState() {}
        }, {
            key: "controller",
            get: function get() {
                return this._controller;
            },
            set: function set(t) {
                t != this._controller && (this._controller = t, this._controller && this.init());
            }
        }, {
            key: "tweenConfig",
            get: function get() {
                return this._tweenConfig || (this._tweenConfig = new ut()), this._tweenConfig;
            }
        } ], [ {
            key: "create",
            value: function create(e, i) {
                return ct || (ct = [ t.GearDisplay, t.GearXY, t.GearSize, t.GearLook, t.GearColor, t.GearAnimation, t.GearText, t.GearIcon, t.GearDisplay2, t.GearFontSize ]), 
                new ct[i](e);
            }
        } ]);
        return _class33;
    }();
    var ut = function ut() {
        (0, _classCallCheck2.default)(this, ut);
        this.tween = !0, this.easeType = t.EaseType.QuadOut, this.duration = .3, this.delay = 0;
    };
    t.GearTweenConfig = ut;
    t.GearAnimation = /* */ function(_t$GearBase) {
        (0, _inherits2.default)(_class34, _t$GearBase);
        var _super28 = _createSuper(_class34);
        function _class34(t) {
            (0, _classCallCheck2.default)(this, _class34);
            return _super28.call(this, t);
        }
        (0, _createClass2.default)(_class34, [ {
            key: "init",
            value: function init() {
                this._default = {
                    playing: this._owner.getProp(t.ObjectPropID.Playing),
                    frame: this._owner.getProp(t.ObjectPropID.Frame)
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                var i;
                null == t ? i = this._default : this._storage[t] = i = {}, i.playing = e.readBool(), 
                i.frame = e.getInt32();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                e || (e = this._default), this._owner.setProp(t.ObjectPropID.Playing, e.playing), 
                this._owner.setProp(t.ObjectPropID.Frame, e.frame), this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var e = this._storage[this._controller.selectedPageId];
                e || (this._storage[this._controller.selectedPageId] = e = {}), e.playing = this._owner.getProp(t.ObjectPropID.Playing), 
                e.frame = this._owner.getProp(t.ObjectPropID.Frame);
            }
        } ]);
        return _class34;
    }(t.GearBase);
    t.GearColor = /* */ function(_t$GearBase2) {
        (0, _inherits2.default)(_class35, _t$GearBase2);
        var _super29 = _createSuper(_class35);
        function _class35(t) {
            (0, _classCallCheck2.default)(this, _class35);
            return _super29.call(this, t);
        }
        (0, _createClass2.default)(_class35, [ {
            key: "init",
            value: function init() {
                this._default = {
                    color: this._owner.getProp(t.ObjectPropID.Color),
                    strokeColor: this._owner.getProp(t.ObjectPropID.OutlineColor)
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                var i;
                null == t ? i = this._default : this._storage[t] = i = {}, i.color = e.readColorS(), 
                i.strokeColor = e.readColorS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                e || (e = this._default), this._owner.setProp(t.ObjectPropID.Color, e.color), this._owner.setProp(t.ObjectPropID.OutlineColor, e.strokeColor), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var e = this._storage[this._controller.selectedPageId];
                e || (this._storage[this._controller.selectedPageId] = e = {}), e.color = this._owner.getProp(t.ObjectPropID.Color), 
                e.strokeColor = this._owner.getProp(t.ObjectPropID.OutlineColor);
            }
        } ]);
        return _class35;
    }(t.GearBase);
    t.GearDisplay = /* */ function(_t$GearBase3) {
        (0, _inherits2.default)(_class36, _t$GearBase3);
        var _super30 = _createSuper(_class36);
        function _class36(t) {
            var _this22;
            (0, _classCallCheck2.default)(this, _class36);
            _this22 = _super30.call(this, t), _this22._displayLockToken = 1, _this22._visible = 0;
            return _this22;
        }
        (0, _createClass2.default)(_class36, [ {
            key: "init",
            value: function init() {
                this.pages = null;
            }
        }, {
            key: "apply",
            value: function apply() {
                this._displayLockToken++, 0 == this._displayLockToken && (this._displayLockToken = 1), 
                null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
            }
        }, {
            key: "addLock",
            value: function addLock() {
                return this._visible++, this._displayLockToken;
            }
        }, {
            key: "releaseLock",
            value: function releaseLock(t) {
                t == this._displayLockToken && this._visible--;
            }
        }, {
            key: "connected",
            get: function get() {
                return null == this._controller || this._visible > 0;
            }
        } ]);
        return _class36;
    }(t.GearBase);
    t.GearDisplay2 = /* */ function(_t$GearBase4) {
        (0, _inherits2.default)(_class37, _t$GearBase4);
        var _super31 = _createSuper(_class37);
        function _class37(t) {
            var _this23;
            (0, _classCallCheck2.default)(this, _class37);
            _this23 = _super31.call(this, t), _this23._visible = 0;
            return _this23;
        }
        (0, _createClass2.default)(_class37, [ {
            key: "init",
            value: function init() {
                this.pages = null;
            }
        }, {
            key: "apply",
            value: function apply() {
                null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
            }
        }, {
            key: "evaluate",
            value: function evaluate(t) {
                var e = null == this._controller || this._visible > 0;
                return e = 0 == this.condition ? e && t : e || t;
            }
        } ]);
        return _class37;
    }(t.GearBase);
    t.GearFontSize = /* */ function(_t$GearBase5) {
        (0, _inherits2.default)(_class38, _t$GearBase5);
        var _super32 = _createSuper(_class38);
        function _class38(t) {
            var _this24;
            (0, _classCallCheck2.default)(this, _class38);
            _this24 = _super32.call(this, t), _this24._default = 0;
            return _this24;
        }
        (0, _createClass2.default)(_class38, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.getProp(t.ObjectPropID.FontSize), this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                null == t ? this._default = e.getInt32() : this._storage[t] = e.getInt32();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                null != e ? this._owner.setProp(t.ObjectPropID.FontSize, e) : this._owner.setProp(t.ObjectPropID.FontSize, this._default), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.getProp(t.ObjectPropID.FontSize);
            }
        } ]);
        return _class38;
    }(t.GearBase);
    t.GearIcon = /* */ function(_t$GearBase6) {
        (0, _inherits2.default)(_class39, _t$GearBase6);
        var _super33 = _createSuper(_class39);
        function _class39(t) {
            (0, _classCallCheck2.default)(this, _class39);
            return _super33.call(this, t);
        }
        (0, _createClass2.default)(_class39, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.icon, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                null == t ? this._default = e.readS() : this._storage[t] = e.readS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = !0;
                var t = this._storage[this._controller.selectedPageId];
                this._owner.icon = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.icon;
            }
        } ]);
        return _class39;
    }(t.GearBase);
    t.GearLook = /* */ function(_t$GearBase7) {
        (0, _inherits2.default)(_class40, _t$GearBase7);
        var _super34 = _createSuper(_class40);
        function _class40(t) {
            (0, _classCallCheck2.default)(this, _class40);
            return _super34.call(this, t);
        }
        (0, _createClass2.default)(_class40, [ {
            key: "init",
            value: function init() {
                this._default = {
                    alpha: this._owner.alpha,
                    rotation: this._owner.rotation,
                    grayed: this._owner.grayed,
                    touchable: this._owner.touchable
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                var i;
                null == t ? i = this._default : this._storage[t] = i = {}, i.alpha = e.getFloat32(), 
                i.rotation = e.getFloat32(), i.grayed = e.readBool(), i.touchable = e.readBool();
            }
        }, {
            key: "apply",
            value: function apply() {
                var e = this._storage[this._controller.selectedPageId];
                if (e || (e = this._default), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
                    if (this._owner._gearLocked = !0, this._owner.grayed = e.grayed, this._owner.touchable = e.touchable, 
                    this._owner._gearLocked = !1, this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e.alpha && this._tweenConfig._tweener.endValue.y == e.rotation) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var i = e.alpha != this._owner.alpha, s = e.rotation != this._owner.rotation;
                    (i || s) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to2(this._owner.alpha, this._owner.rotation, e.alpha, e.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (s ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                } else this._owner._gearLocked = !0, this._owner.grayed = e.grayed, this._owner.touchable = e.touchable, 
                this._owner.alpha = e.alpha, this._owner.rotation = e.rotation, this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(t) {
                var e = t.userData;
                this._owner._gearLocked = !0, 0 != (1 & e) && (this._owner.alpha = t.value.x), 0 != (2 & e) && (this._owner.rotation = t.value.y), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var t = this._storage[this._controller.selectedPageId];
                t || (this._storage[this._controller.selectedPageId] = t = {}), t.alpha = this._owner.alpha, 
                t.rotation = this._owner.rotation, t.grayed = this._owner.grayed, t.touchable = this._owner.touchable;
            }
        } ]);
        return _class40;
    }(t.GearBase);
    t.GearSize = /* */ function(_t$GearBase8) {
        (0, _inherits2.default)(_class41, _t$GearBase8);
        var _super35 = _createSuper(_class41);
        function _class41(t) {
            (0, _classCallCheck2.default)(this, _class41);
            return _super35.call(this, t);
        }
        (0, _createClass2.default)(_class41, [ {
            key: "init",
            value: function init() {
                this._default = {
                    width: this._owner.width,
                    height: this._owner.height,
                    scaleX: this._owner.scaleX,
                    scaleY: this._owner.scaleY
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                var i;
                null == t ? i = this._default : this._storage[t] = i = {}, i.width = e.getInt32(), 
                i.height = e.getInt32(), i.scaleX = e.getFloat32(), i.scaleY = e.getFloat32();
            }
        }, {
            key: "apply",
            value: function apply() {
                var e = this._storage[this._controller.selectedPageId];
                if (e || (e = this._default), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
                    if (this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e.width && this._tweenConfig._tweener.endValue.y == e.height && this._tweenConfig._tweener.endValue.z == e.scaleX && this._tweenConfig._tweener.endValue.w == e.scaleY) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var i = e.width != this._owner.width || e.height != this._owner.height, s = e.scaleX != this._owner.scaleX || e.scaleY != this._owner.scaleY;
                    (i || s) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, e.width, e.height, e.scaleX, e.scaleY, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (s ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                } else this._owner._gearLocked = !0, this._owner.setSize(e.width, e.height, this._owner.getGear(1).controller == this._controller), 
                this._owner.setScale(e.scaleX, e.scaleY), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(t) {
                var e = t.userData;
                this._owner._gearLocked = !0, 0 != (1 & e) && this._owner.setSize(t.value.x, t.value.y, this._owner.checkGearController(1, this._controller)), 
                0 != (2 & e) && this._owner.setScale(t.value.z, t.value.w), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var t = this._storage[this._controller.selectedPageId];
                t || (this._storage[this._controller.selectedPageId] = t = {}), t.width = this._owner.width, 
                t.height = this._owner.height, t.scaleX = this._owner.scaleX, t.scaleY = this._owner.scaleY;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(t, e) {
                if (null != this._controller && null != this._storage) {
                    for (var i in this._storage) {
                        var s = this._storage[i];
                        s.width += t, s.height += e;
                    }
                    this._default.width += t, this._default.height += e, this.updateState();
                }
            }
        } ]);
        return _class41;
    }(t.GearBase);
    t.GearText = /* */ function(_t$GearBase9) {
        (0, _inherits2.default)(_class42, _t$GearBase9);
        var _super36 = _createSuper(_class42);
        function _class42(t) {
            (0, _classCallCheck2.default)(this, _class42);
            return _super36.call(this, t);
        }
        (0, _createClass2.default)(_class42, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.text, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                null == t ? this._default = e.readS() : this._storage[t] = e.readS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = !0;
                var t = this._storage[this._controller.selectedPageId];
                this._owner.text = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.text;
            }
        } ]);
        return _class42;
    }(t.GearBase);
    t.GearXY = /* */ function(_t$GearBase10) {
        (0, _inherits2.default)(_class43, _t$GearBase10);
        var _super37 = _createSuper(_class43);
        function _class43(t) {
            (0, _classCallCheck2.default)(this, _class43);
            return _super37.call(this, t);
        }
        (0, _createClass2.default)(_class43, [ {
            key: "init",
            value: function init() {
                this._default = {
                    x: this._owner.x,
                    y: this._owner.y,
                    px: this._owner.x / this._owner.parent.width,
                    py: this._owner.y / this._owner.parent.height
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(t, e) {
                var i;
                null == t ? i = this._default : this._storage[t] = i = {}, i.x = e.getInt32(), i.y = e.getInt32();
            }
        }, {
            key: "addExtStatus",
            value: function addExtStatus(t, e) {
                var i;
                (i = null == t ? this._default : this._storage[t]).px = e.getFloat32(), i.py = e.getFloat32();
            }
        }, {
            key: "apply",
            value: function apply() {
                var e, i, s = this._storage[this._controller.selectedPageId];
                if (s || (s = this._default), this.positionsInPercent && this._owner.parent ? (e = s.px * this._owner.parent.width, 
                i = s.py * this._owner.parent.height) : (e = s.x, i = s.y), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
                    if (this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e && this._tweenConfig._tweener.endValue.y == i) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var h = this._owner.x, r = this._owner.y;
                    h == e && r == i || (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to2(h, r, e, i, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                } else this._owner._gearLocked = !0, this._owner.setXY(e, i), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(t) {
                this._owner._gearLocked = !0, this._owner.setXY(t.value.x, t.value.y), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var t = this._storage[this._controller.selectedPageId];
                t || (this._storage[this._controller.selectedPageId] = t = {}), t.x = this._owner.x, 
                t.y = this._owner.y, t.px = this._owner.x / this._owner.parent.width, t.py = this._owner.y / this._owner.parent.height;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(t, e) {
                if (null != this._controller && null != this._storage && !this.positionsInPercent) {
                    for (var i in this._storage) {
                        var s = this._storage[i];
                        s.x += t, s.y += e;
                    }
                    this._default.x += t, this._default.y += e, this.updateState();
                }
            }
        } ]);
        return _class43;
    }(t.GearBase);
    var gt = .5 * Math.PI, pt = 2 * Math.PI;
    function bounce_easeIn(t, e) {
        return 1 - bounce_easeOut(e - t, e);
    }
    function bounce_easeOut(t, e) {
        return (t /= e) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }
    t.evaluateEase = function(e, i, s, h, r) {
        switch (e) {
          case t.EaseType.Linear:
            return i / s;

          case t.EaseType.SineIn:
            return 1 - Math.cos(i / s * gt);

          case t.EaseType.SineOut:
            return Math.sin(i / s * gt);

          case t.EaseType.SineInOut:
            return -.5 * (Math.cos(Math.PI * i / s) - 1);

          case t.EaseType.QuadIn:
            return (i /= s) * i;

          case t.EaseType.QuadOut:
            return -(i /= s) * (i - 2);

          case t.EaseType.QuadInOut:
            return (i /= .5 * s) < 1 ? .5 * i * i : -.5 * (--i * (i - 2) - 1);

          case t.EaseType.CubicIn:
            return (i /= s) * i * i;

          case t.EaseType.CubicOut:
            return (i = i / s - 1) * i * i + 1;

          case t.EaseType.CubicInOut:
            return (i /= .5 * s) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2);

          case t.EaseType.QuartIn:
            return (i /= s) * i * i * i;

          case t.EaseType.QuartOut:
            return -((i = i / s - 1) * i * i * i - 1);

          case t.EaseType.QuartInOut:
            return (i /= .5 * s) < 1 ? .5 * i * i * i * i : -.5 * ((i -= 2) * i * i * i - 2);

          case t.EaseType.QuintIn:
            return (i /= s) * i * i * i * i;

          case t.EaseType.QuintOut:
            return (i = i / s - 1) * i * i * i * i + 1;

          case t.EaseType.QuintInOut:
            return (i /= .5 * s) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2);

          case t.EaseType.ExpoIn:
            return 0 == i ? 0 : Math.pow(2, 10 * (i / s - 1));

          case t.EaseType.ExpoOut:
            return i == s ? 1 : 1 - Math.pow(2, -10 * i / s);

          case t.EaseType.ExpoInOut:
            return 0 == i ? 0 : i == s ? 1 : (i /= .5 * s) < 1 ? .5 * Math.pow(2, 10 * (i - 1)) : .5 * (2 - Math.pow(2, -10 * --i));

          case t.EaseType.CircIn:
            return -(Math.sqrt(1 - (i /= s) * i) - 1);

          case t.EaseType.CircOut:
            return Math.sqrt(1 - (i = i / s - 1) * i);

          case t.EaseType.CircInOut:
            return (i /= .5 * s) < 1 ? -.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1);

          case t.EaseType.ElasticIn:
            var a;
            return 0 == i ? 0 : 1 == (i /= s) ? 1 : (0 == r && (r = .3 * s), h < 1 ? (h = 1, 
            a = r / 4) : a = r / pt * Math.asin(1 / h), -h * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * s - a) * pt / r));

          case t.EaseType.ElasticOut:
            var n;
            return 0 == i ? 0 : 1 == (i /= s) ? 1 : (0 == r && (r = .3 * s), h < 1 ? (h = 1, 
            n = r / 4) : n = r / pt * Math.asin(1 / h), h * Math.pow(2, -10 * i) * Math.sin((i * s - n) * pt / r) + 1);

          case t.EaseType.ElasticInOut:
            var o;
            return 0 == i ? 0 : 2 == (i /= .5 * s) ? 1 : (0 == r && (r = s * (.3 * 1.5)), h < 1 ? (h = 1, 
            o = r / 4) : o = r / pt * Math.asin(1 / h), i < 1 ? h * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * s - o) * pt / r) * -.5 : h * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * s - o) * pt / r) * .5 + 1);

          case t.EaseType.BackIn:
            return (i /= s) * i * ((h + 1) * i - h);

          case t.EaseType.BackOut:
            return (i = i / s - 1) * i * ((h + 1) * i + h) + 1;

          case t.EaseType.BackInOut:
            return (i /= .5 * s) < 1 ? i * i * ((1 + (h *= 1.525)) * i - h) * .5 : .5 * ((i -= 2) * i * ((1 + (h *= 1.525)) * i + h) + 2);

          case t.EaseType.BounceIn:
            return bounce_easeIn(i, s);

          case t.EaseType.BounceOut:
            return bounce_easeOut(i, s);

          case t.EaseType.BounceInOut:
            return function(t, e) {
                return t < .5 * e ? .5 * bounce_easeIn(2 * t, e) : .5 * bounce_easeOut(2 * t - e, e) + .5;
            }(i, s);

          default:
            return -(i /= s) * (i - 2);
        }
    };
    var yt = function yt() {
        (0, _classCallCheck2.default)(this, yt);
    };
    yt.Linear = 0, yt.SineIn = 1, yt.SineOut = 2, yt.SineInOut = 3, yt.QuadIn = 4, yt.QuadOut = 5, 
    yt.QuadInOut = 6, yt.CubicIn = 7, yt.CubicOut = 8, yt.CubicInOut = 9, yt.QuartIn = 10, 
    yt.QuartOut = 11, yt.QuartInOut = 12, yt.QuintIn = 13, yt.QuintOut = 14, yt.QuintInOut = 15, 
    yt.ExpoIn = 16, yt.ExpoOut = 17, yt.ExpoInOut = 18, yt.CircIn = 19, yt.CircOut = 20, 
    yt.CircInOut = 21, yt.ElasticIn = 22, yt.ElasticOut = 23, yt.ElasticInOut = 24, 
    yt.BackIn = 25, yt.BackOut = 26, yt.BackInOut = 27, yt.BounceIn = 28, yt.BounceOut = 29, 
    yt.BounceInOut = 30, yt.Custom = 31, t.EaseType = yt;
    t.GPath = /* */ function() {
        function _class44() {
            (0, _classCallCheck2.default)(this, _class44);
            this._segments = new Array(), this._points = new Array();
        }
        (0, _createClass2.default)(_class44, [ {
            key: "create",
            value: function create(e, i, s, h) {
                var r;
                Array.isArray(e) ? r = e : ((r = new Array()).push(e), r.push(i), s && r.push(s), 
                h && r.push(h)), this._segments.length = 0, this._points.length = 0, this._fullLength = 0;
                var a = r.length;
                if (0 != a) {
                    var n = ft;
                    n.length = 0;
                    var o = r[0];
                    o.curveType == t.CurveType.CRSpline && n.push(new Laya.Point(o.x, o.y));
                    for (var l = 1; l < a; l++) {
                        var _ = r[l];
                        if (o.curveType != t.CurveType.CRSpline) {
                            var d = {};
                            d.type = o.curveType, d.ptStart = this._points.length, o.curveType == t.CurveType.Straight ? (d.ptCount = 2, 
                            this._points.push(new Laya.Point(o.x, o.y)), this._points.push(new Laya.Point(_.x, _.y))) : o.curveType == t.CurveType.Bezier ? (d.ptCount = 3, 
                            this._points.push(new Laya.Point(o.x, o.y)), this._points.push(new Laya.Point(_.x, _.y)), 
                            this._points.push(new Laya.Point(o.control1_x, o.control1_y))) : o.curveType == t.CurveType.CubicBezier && (d.ptCount = 4, 
                            this._points.push(new Laya.Point(o.x, o.y)), this._points.push(new Laya.Point(_.x, _.y)), 
                            this._points.push(new Laya.Point(o.control1_x, o.control1_y)), this._points.push(new Laya.Point(o.control2_x, o.control2_y))), 
                            d.length = t.ToolSet.distance(o.x, o.y, _.x, _.y), this._fullLength += d.length, 
                            this._segments.push(d);
                        }
                        _.curveType != t.CurveType.CRSpline ? n.length > 0 && (n.push(new Laya.Point(_.x, _.y)), 
                        this.createSplineSegment()) : n.push(new Laya.Point(_.x, _.y)), o = _;
                    }
                    n.length > 1 && this.createSplineSegment();
                }
            }
        }, {
            key: "createSplineSegment",
            value: function createSplineSegment() {
                var e = ft, i = e.length;
                e.splice(0, 0, e[0]), e.push(e[i]), e.push(e[i]), i += 3;
                var s = {};
                s.type = t.CurveType.CRSpline, s.ptStart = this._points.length, s.ptCount = i, this._points = this._points.concat(e), 
                s.length = 0;
                for (var h = 1; h < i; h++) {
                    s.length += t.ToolSet.distance(e[h - 1].x, e[h - 1].y, e[h].x, e[h].y);
                }
                this._fullLength += s.length, this._segments.push(s), e.length = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._segments.length = 0, this._points.length = 0;
            }
        }, {
            key: "getPointAt",
            value: function getPointAt(e, i) {
                i ? i.x = i.y = 0 : i = new Laya.Point(), e = t.ToolSet.clamp01(e);
                var s, h = this._segments.length;
                if (0 == h) return i;
                if (1 == e) return (s = this._segments[h - 1]).type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[s.ptStart].x, this._points[s.ptStart + 1].x, e), 
                i.y = t.ToolSet.lerp(this._points[s.ptStart].y, this._points[s.ptStart + 1].y, e), 
                i) : s.type == t.CurveType.Bezier || s.type == t.CurveType.CubicBezier ? this.onBezierCurve(s.ptStart, s.ptCount, e, i) : this.onCRSplineCurve(s.ptStart, s.ptCount, e, i);
                for (var r = e * this._fullLength, a = 0; a < h; a++) {
                    if ((r -= (s = this._segments[a]).length) < 0) {
                        e = 1 + r / s.length, s.type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[s.ptStart].x, this._points[s.ptStart + 1].x, e), 
                        i.y = t.ToolSet.lerp(this._points[s.ptStart].y, this._points[s.ptStart + 1].y, e)) : i = s.type == t.CurveType.Bezier || s.type == t.CurveType.CubicBezier ? this.onBezierCurve(s.ptStart, s.ptCount, e, i) : this.onCRSplineCurve(s.ptStart, s.ptCount, e, i);
                        break;
                    }
                }
                return i;
            }
        }, {
            key: "getAnchorsInSegment",
            value: function getAnchorsInSegment(t, e) {
                null == e && (e = new Array());
                for (var i = this._segments[t], s = 0; s < i.ptCount; s++) {
                    e.push(new Laya.Point(this._points[i.ptStart + s].x, this._points[i.ptStart + s].y));
                }
                return e;
            }
        }, {
            key: "getPointsInSegment",
            value: function getPointsInSegment(e, i, s, h, r, a) {
                null == h && (h = new Array()), a && !isNaN(a) || (a = .1), r && r.push(i);
                var n = this._segments[e];
                if (n.type == t.CurveType.Straight) h.push(new Laya.Point(t.ToolSet.lerp(this._points[n.ptStart].x, this._points[n.ptStart + 1].x, i), t.ToolSet.lerp(this._points[n.ptStart].y, this._points[n.ptStart + 1].y, i))), 
                h.push(new Laya.Point(t.ToolSet.lerp(this._points[n.ptStart].x, this._points[n.ptStart + 1].x, s), t.ToolSet.lerp(this._points[n.ptStart].y, this._points[n.ptStart + 1].y, s))); else {
                    var o;
                    o = n.type == t.CurveType.Bezier || n.type == t.CurveType.CubicBezier ? this.onBezierCurve : this.onCRSplineCurve, 
                    h.push(o.call(this, n.ptStart, n.ptCount, i, new Laya.Point()));
                    for (var l = Math.min(n.length * a, 50), _ = 0; _ <= l; _++) {
                        var d = _ / l;
                        d > i && d < s && (h.push(o.call(this, n.ptStart, n.ptCount, d, new Laya.Point())), 
                        r && r.push(d));
                    }
                    h.push(o.call(this, n.ptStart, n.ptCount, s, new Laya.Point()));
                }
                return r && r.push(s), h;
            }
        }, {
            key: "getAllPoints",
            value: function getAllPoints(t, e, i) {
                null == t && (t = new Array()), i && !isNaN(i) || (i = .1);
                for (var s = this._segments.length, h = 0; h < s; h++) {
                    this.getPointsInSegment(h, 0, 1, t, e, i);
                }
                return t;
            }
        }, {
            key: "onCRSplineCurve",
            value: function onCRSplineCurve(e, i, s, h) {
                var r = Math.floor(s * (i - 4)) + e, a = this._points[r].x, n = this._points[r].y, o = this._points[r + 1].x, l = this._points[r + 1].y, _ = this._points[r + 2].x, d = this._points[r + 2].y, c = this._points[r + 3].x, u = this._points[r + 3].y, g = 1 == s ? 1 : t.ToolSet.repeat(s * (i - 4), 1), p = ((2 - g) * g - 1) * g * .5, y = .5 * ((3 * g - 5) * g * g + 2), f = ((-3 * g + 4) * g + 1) * g * .5, m = (g - 1) * g * g * .5;
                return h.x = a * p + o * y + _ * f + c * m, h.y = n * p + l * y + d * f + u * m, 
                h;
            }
        }, {
            key: "onBezierCurve",
            value: function onBezierCurve(t, e, i, s) {
                var h = 1 - i, r = this._points[t].x, a = this._points[t].y, n = this._points[t + 1].x, o = this._points[t + 1].y, l = this._points[t + 2].x, _ = this._points[t + 2].y;
                if (4 == e) {
                    var d = this._points[t + 3].x, c = this._points[t + 3].y;
                    s.x = h * h * h * r + 3 * h * h * i * l + 3 * h * i * i * d + i * i * i * n, s.y = h * h * h * a + 3 * h * h * i * _ + 3 * h * i * i * c + i * i * i * o;
                } else s.x = h * h * r + 2 * h * i * l + i * i * n, s.y = h * h * a + 2 * h * i * _ + i * i * o;
                return s;
            }
        }, {
            key: "length",
            get: function get() {
                return this._fullLength;
            }
        }, {
            key: "segmentCount",
            get: function get() {
                return this._segments.length;
            }
        } ]);
        return _class44;
    }();
    var ft = new Array();
    var mt;
    !function(t) {
        t[t.CRSpline = 0] = "CRSpline", t[t.Bezier = 1] = "Bezier", t[t.CubicBezier = 2] = "CubicBezier", 
        t[t.Straight = 3] = "Straight";
    }(mt = t.CurveType || (t.CurveType = {}));
    var vt = /* */ function() {
        function vt() {
            (0, _classCallCheck2.default)(this, vt);
            this.x = 0, this.y = 0, this.control1_x = 0, this.control1_y = 0, this.control2_x = 0, 
            this.control2_y = 0, this.curveType = 0;
        }
        (0, _createClass2.default)(vt, [ {
            key: "clone",
            value: function clone() {
                var t = new vt();
                return t.x = this.x, t.y = this.y, t.control1_x = this.control1_x, t.control1_y = this.control1_y, 
                t.control2_x = this.control2_x, t.control2_y = this.control2_y, t.curveType = this.curveType, 
                t;
            }
        } ], [ {
            key: "newPoint",
            value: function newPoint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = new vt();
                return s.x = t, s.y = e, s.control1_x = 0, s.control1_y = 0, s.control2_x = 0, s.control2_y = 0, 
                s.curveType = i, s;
            }
        }, {
            key: "newBezierPoint",
            value: function newBezierPoint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var h = new vt();
                return h.x = t, h.y = e, h.control1_x = i, h.control1_y = s, h.control2_x = 0, h.control2_y = 0, 
                h.curveType = mt.Bezier, h;
            }
        }, {
            key: "newCubicBezierPoint",
            value: function newCubicBezierPoint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var h = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var a = new vt();
                return a.x = t, a.y = e, a.control1_x = i, a.control1_y = s, a.control2_x = h, a.control2_y = r, 
                a.curveType = mt.CubicBezier, a;
            }
        } ]);
        return vt;
    }();
    t.GPathPoint = vt;
    var wt = /* */ function() {
        function wt() {
            (0, _classCallCheck2.default)(this, wt);
        }
        (0, _createClass2.default)(wt, null, [ {
            key: "to",
            value: function to(e, i, s) {
                return t.TweenManager.createTween()._to(e, i, s);
            }
        }, {
            key: "to2",
            value: function to2(e, i, s, h, r) {
                return t.TweenManager.createTween()._to2(e, i, s, h, r);
            }
        }, {
            key: "to3",
            value: function to3(e, i, s, h, r, a, n) {
                return t.TweenManager.createTween()._to3(e, i, s, h, r, a, n);
            }
        }, {
            key: "to4",
            value: function to4(e, i, s, h, r, a, n, o, l) {
                return t.TweenManager.createTween()._to4(e, i, s, h, r, a, n, o, l);
            }
        }, {
            key: "toColor",
            value: function toColor(e, i, s) {
                return t.TweenManager.createTween()._toColor(e, i, s);
            }
        }, {
            key: "delayedCall",
            value: function delayedCall(e) {
                return t.TweenManager.createTween().setDelay(e);
            }
        }, {
            key: "shake",
            value: function shake(e, i, s, h) {
                return t.TweenManager.createTween()._shake(e, i, s, h);
            }
        }, {
            key: "isTweening",
            value: function isTweening(e, i) {
                return t.TweenManager.isTweening(e, i);
            }
        }, {
            key: "kill",
            value: function kill(e, i, s) {
                t.TweenManager.killTweens(e, i, s);
            }
        }, {
            key: "getTween",
            value: function getTween(e, i) {
                return t.TweenManager.getTween(e, i);
            }
        } ]);
        return wt;
    }();
    wt.catchCallbackExceptions = !0, t.GTween = wt;
    t.GTweener = /* */ function() {
        function _class45() {
            (0, _classCallCheck2.default)(this, _class45);
            this._startValue = new t.TweenValue(), this._endValue = new t.TweenValue(), this._value = new t.TweenValue(), 
            this._deltaValue = new t.TweenValue(), this._reset();
        }
        (0, _createClass2.default)(_class45, [ {
            key: "setDelay",
            value: function setDelay(t) {
                return this._delay = t, this;
            }
        }, {
            key: "setDuration",
            value: function setDuration(t) {
                return this._duration = t, this;
            }
        }, {
            key: "setBreakpoint",
            value: function setBreakpoint(t) {
                return this._breakpoint = t, this;
            }
        }, {
            key: "setEase",
            value: function setEase(t) {
                return this._easeType = t, this;
            }
        }, {
            key: "setEasePeriod",
            value: function setEasePeriod(t) {
                return this._easePeriod = t, this;
            }
        }, {
            key: "setEaseOvershootOrAmplitude",
            value: function setEaseOvershootOrAmplitude(t) {
                return this._easeOvershootOrAmplitude = t, this;
            }
        }, {
            key: "setRepeat",
            value: function setRepeat(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                return this._repeat = t, this._yoyo = e, this;
            }
        }, {
            key: "setTimeScale",
            value: function setTimeScale(t) {
                return this._timeScale = t, this;
            }
        }, {
            key: "setSnapping",
            value: function setSnapping(t) {
                return this._snapping = t, this;
            }
        }, {
            key: "setTarget",
            value: function setTarget(t, e) {
                return this._target = t, this._propType = e, this;
            }
        }, {
            key: "setPath",
            value: function setPath(t) {
                return this._path = t, this;
            }
        }, {
            key: "setUserData",
            value: function setUserData(t) {
                return this._userData = t, this;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate(t, e) {
                return this._onUpdate = t, this._onUpdateCaller = e, this;
            }
        }, {
            key: "onStart",
            value: function onStart(t, e) {
                return this._onStart = t, this._onStartCaller = e, this;
            }
        }, {
            key: "onComplete",
            value: function onComplete(t, e) {
                return this._onComplete = t, this._onCompleteCaller = e, this;
            }
        }, {
            key: "setPaused",
            value: function setPaused(t) {
                return this._paused = t, this;
            }
        }, {
            key: "seek",
            value: function seek(t) {
                if (!this._killed) {
                    if (this._elapsedTime = t, this._elapsedTime < this._delay) {
                        if (!this._started) return;
                        this._elapsedTime = this._delay;
                    }
                    this.update();
                }
            }
        }, {
            key: "kill",
            value: function kill(t) {
                this._killed || (t && (0 == this._ended && (this._breakpoint >= 0 ? this._elapsedTime = this._delay + this._breakpoint : this._repeat >= 0 ? this._elapsedTime = this._delay + this._duration * (this._repeat + 1) : this._elapsedTime = this._delay + 2 * this._duration, 
                this.update()), this.callCompleteCallback()), this._killed = !0);
            }
        }, {
            key: "_to",
            value: function _to(t, e, i) {
                return this._valueSize = 1, this._startValue.x = t, this._endValue.x = e, this._value.x = t, 
                this._duration = i, this;
            }
        }, {
            key: "_to2",
            value: function _to2(t, e, i, s, h) {
                return this._valueSize = 2, this._startValue.x = t, this._endValue.x = i, this._startValue.y = e, 
                this._endValue.y = s, this._value.x = t, this._value.y = e, this._duration = h, 
                this;
            }
        }, {
            key: "_to3",
            value: function _to3(t, e, i, s, h, r, a) {
                return this._valueSize = 3, this._startValue.x = t, this._endValue.x = s, this._startValue.y = e, 
                this._endValue.y = h, this._startValue.z = i, this._endValue.z = r, this._value.x = t, 
                this._value.y = e, this._value.z = i, this._duration = a, this;
            }
        }, {
            key: "_to4",
            value: function _to4(t, e, i, s, h, r, a, n, o) {
                return this._valueSize = 4, this._startValue.x = t, this._endValue.x = h, this._startValue.y = e, 
                this._endValue.y = r, this._startValue.z = i, this._endValue.z = a, this._startValue.w = s, 
                this._endValue.w = n, this._value.x = t, this._value.y = e, this._value.z = i, this._value.w = s, 
                this._duration = o, this;
            }
        }, {
            key: "_toColor",
            value: function _toColor(t, e, i) {
                return this._valueSize = 5, this._startValue.color = t, this._endValue.color = e, 
                this._value.color = t, this._duration = i, this;
            }
        }, {
            key: "_shake",
            value: function _shake(t, e, i, s) {
                return this._valueSize = 6, this._startValue.x = t, this._startValue.y = e, this._startValue.w = i, 
                this._duration = s, this;
            }
        }, {
            key: "_init",
            value: function _init() {
                this._delay = 0, this._duration = 0, this._breakpoint = -1, this._easeType = t.EaseType.QuadOut, 
                this._timeScale = 1, this._easePeriod = 0, this._easeOvershootOrAmplitude = 1.70158, 
                this._snapping = !1, this._repeat = 0, this._yoyo = !1, this._valueSize = 0, this._started = !1, 
                this._paused = !1, this._killed = !1, this._elapsedTime = 0, this._normalizedTime = 0, 
                this._ended = 0;
            }
        }, {
            key: "_reset",
            value: function _reset() {
                this._target = null, this._propType = null, this._userData = null, this._path = null, 
                this._onStart = this._onUpdate = this._onComplete = null, this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
            }
        }, {
            key: "_update",
            value: function _update(t) {
                if (1 != this._timeScale && (t *= this._timeScale), 0 != t) {
                    if (0 != this._ended) return this.callCompleteCallback(), void (this._killed = !0);
                    this._elapsedTime += t, this.update(), 0 != this._ended && (this._killed || (this.callCompleteCallback(), 
                    this._killed = !0));
                }
            }
        }, {
            key: "update",
            value: function update() {
                if (this._ended = 0, 0 != this._valueSize) {
                    if (!this._started) {
                        if (this._elapsedTime < this._delay) return;
                        if (this._started = !0, this.callStartCallback(), this._killed) return;
                    }
                    var e = !1, i = this._elapsedTime - this._delay;
                    if (this._breakpoint >= 0 && i >= this._breakpoint && (i = this._breakpoint, this._ended = 2), 
                    0 != this._repeat) {
                        var s = Math.floor(i / this._duration);
                        i -= this._duration * s, this._yoyo && (e = s % 2 == 1), this._repeat > 0 && this._repeat - s < 0 && (this._yoyo && (e = this._repeat % 2 == 1), 
                        i = this._duration, this._ended = 1);
                    } else i >= this._duration && (i = this._duration, this._ended = 1);
                    if (this._normalizedTime = t.evaluateEase(this._easeType, e ? this._duration - i : i, this._duration, this._easeOvershootOrAmplitude, this._easePeriod), 
                    this._value.setZero(), this._deltaValue.setZero(), 6 == this._valueSize) {
                        if (0 == this._ended) {
                            var h = this._startValue.w * (1 - this._normalizedTime), r = h * (Math.random() > .5 ? 1 : -1), a = h * (Math.random() > .5 ? 1 : -1);
                            this._deltaValue.x = r, this._deltaValue.y = a, this._value.x = this._startValue.x + r, 
                            this._value.y = this._startValue.y + a;
                        } else this._value.x = this._startValue.x, this._value.y = this._startValue.y;
                    } else if (this._path) {
                        var n = N;
                        this._path.getPointAt(this._normalizedTime, n), this._snapping && (n.x = Math.round(n.x), 
                        n.y = Math.round(n.y)), this._deltaValue.x = n.x - this._value.x, this._deltaValue.y = n.y - this._value.y, 
                        this._value.x = n.x, this._value.y = n.y;
                    } else for (var o = 0; o < this._valueSize; o++) {
                        var l = this._startValue.getField(o), _ = l + (this._endValue.getField(o) - l) * this._normalizedTime;
                        this._snapping && (_ = Math.round(_)), this._deltaValue.setField(o, _ - this._value.getField(o)), 
                        this._value.setField(o, _);
                    }
                    if (this._target && this._propType) if (this._propType instanceof Function) switch (this._valueSize) {
                      case 1:
                        this._propType.call(this._target, this._value.x);
                        break;

                      case 2:
                        this._propType.call(this._target, this._value.x, this._value.y);
                        break;

                      case 3:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z);
                        break;

                      case 4:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);
                        break;

                      case 5:
                        this._propType.call(this._target, this._value.color);
                        break;

                      case 6:
                        this._propType.call(this._target, this._value.x, this._value.y);
                    } else 5 == this._valueSize ? this._target[this._propType] = this._value.color : this._target[this._propType] = this._value.x;
                    this.callUpdateCallback();
                } else this._elapsedTime >= this._delay + this._duration && (this._ended = 1);
            }
        }, {
            key: "callStartCallback",
            value: function callStartCallback() {
                if (null != this._onStart) try {
                    this._onStart.call(this._onStartCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in start callback > " + t);
                }
            }
        }, {
            key: "callUpdateCallback",
            value: function callUpdateCallback() {
                if (null != this._onUpdate) try {
                    this._onUpdate.call(this._onUpdateCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in update callback > " + t);
                }
            }
        }, {
            key: "callCompleteCallback",
            value: function callCompleteCallback() {
                if (null != this._onComplete) try {
                    this._onComplete.call(this._onCompleteCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in complete callback > " + t);
                }
            }
        }, {
            key: "delay",
            get: function get() {
                return this._delay;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._duration;
            }
        }, {
            key: "repeat",
            get: function get() {
                return this._repeat;
            }
        }, {
            key: "target",
            get: function get() {
                return this._target;
            }
        }, {
            key: "userData",
            get: function get() {
                return this._userData;
            }
        }, {
            key: "startValue",
            get: function get() {
                return this._startValue;
            }
        }, {
            key: "endValue",
            get: function get() {
                return this._endValue;
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            }
        }, {
            key: "deltaValue",
            get: function get() {
                return this._deltaValue;
            }
        }, {
            key: "normalizedTime",
            get: function get() {
                return this._normalizedTime;
            }
        }, {
            key: "completed",
            get: function get() {
                return 0 != this._ended;
            }
        }, {
            key: "allCompleted",
            get: function get() {
                return 1 == this._ended;
            }
        } ]);
        return _class45;
    }();
    N = new Laya.Point();
    var Ct = /* */ function() {
        function Ct() {
            (0, _classCallCheck2.default)(this, Ct);
        }
        (0, _createClass2.default)(Ct, null, [ {
            key: "createTween",
            value: function createTween() {
                var e;
                return It || (Laya.timer.frameLoop(1, null, Ct.update), It = !0), (e = St.length > 0 ? St.pop() : new t.GTweener())._init(), 
                bt[xt++] = e, e;
            }
        }, {
            key: "isTweening",
            value: function isTweening(t, e) {
                if (null == t) return !1;
                for (var i = !e, s = 0; s < xt; s++) {
                    var h = bt[s];
                    if (h && h.target == t && !h._killed && (i || h._propType == e)) return !0;
                }
                return !1;
            }
        }, {
            key: "killTweens",
            value: function killTweens(t, e, i) {
                if (null == t) return !1;
                for (var s = !1, h = xt, r = !i, a = 0; a < h; a++) {
                    var n = bt[a];
                    !n || n.target != t || n._killed || !r && n._propType != i || (n.kill(e), s = !0);
                }
                return s;
            }
        }, {
            key: "getTween",
            value: function getTween(t, e) {
                if (null == t) return null;
                for (var i = xt, s = !e, h = 0; h < i; h++) {
                    var r = bt[h];
                    if (r && r.target == t && !r._killed && (s || r._propType == e)) return r;
                }
                return null;
            }
        }, {
            key: "update",
            value: function update() {
                for (var e = Laya.timer.delta / 1e3, i = xt, s = -1, h = 0; h < i; h++) {
                    var r = bt[h];
                    null == r ? -1 == s && (s = h) : r._killed ? (r._reset(), St.push(r), bt[h] = null, 
                    -1 == s && (s = h)) : (r._target instanceof t.GObject && r._target.isDisposed ? r._killed = !0 : r._paused || r._update(e), 
                    -1 != s && (bt[s] = r, bt[h] = null, s++));
                }
                if (s >= 0) {
                    if (xt != i) {
                        var a = i;
                        for (i = xt - i, h = 0; h < i; h++) {
                            bt[s++] = bt[a++];
                        }
                    }
                    xt = s;
                }
            }
        } ]);
        return Ct;
    }();
    t.TweenManager = Ct;
    var bt = [], St = [], xt = 0, It = !1;
    t.TweenValue = /* */ function() {
        function _class46() {
            (0, _classCallCheck2.default)(this, _class46);
            this.x = this.y = this.z = this.w = 0;
        }
        (0, _createClass2.default)(_class46, [ {
            key: "getField",
            value: function getField(t) {
                switch (t) {
                  case 0:
                    return this.x;

                  case 1:
                    return this.y;

                  case 2:
                    return this.z;

                  case 3:
                    return this.w;

                  default:
                    throw new Error("Index out of bounds: " + t);
                }
            }
        }, {
            key: "setField",
            value: function setField(t, e) {
                switch (t) {
                  case 0:
                    this.x = e;
                    break;

                  case 1:
                    this.y = e;
                    break;

                  case 2:
                    this.z = e;
                    break;

                  case 3:
                    this.w = e;
                    break;

                  default:
                    throw new Error("Index out of bounds: " + t);
                }
            }
        }, {
            key: "setZero",
            value: function setZero() {
                this.x = this.y = this.z = this.w = 0;
            }
        }, {
            key: "color",
            get: function get() {
                return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
            },
            set: function set(t) {
                this.x = (16711680 & t) >> 16, this.y = (65280 & t) >> 8, this.z = 255 & t, this.w = (4278190080 & t) >> 24;
            }
        } ]);
        return _class46;
    }();
    var Tt = /* */ function(_Laya$Byte) {
        (0, _inherits2.default)(Tt, _Laya$Byte);
        var _super38 = _createSuper(Tt);
        function Tt(t, e, i) {
            var _this25;
            (0, _classCallCheck2.default)(this, Tt);
            e = e || 0, null != i && -1 != i || (i = t.byteLength - e), 0 == e && i == t.byteLength ? _this25 = _super38.call(this, t) : (_this25 = _super38.call(this), 
            _this25._u8d_ = new Uint8Array(t, e, i), _this25._d_ = new DataView(_this25._u8d_.buffer, e, i), 
            _this25._length = i), _this25.endian = Laya.Byte.BIG_ENDIAN;
            return (0, _possibleConstructorReturn2.default)(_this25);
        }
        (0, _createClass2.default)(Tt, [ {
            key: "skip",
            value: function skip(t) {
                this.pos += t;
            }
        }, {
            key: "readBool",
            value: function readBool() {
                return 1 == this.getUint8();
            }
        }, {
            key: "readS",
            value: function readS() {
                var t = this.getUint16();
                return 65534 == t ? null : 65533 == t ? "" : this.stringTable[t];
            }
        }, {
            key: "readSArray",
            value: function readSArray(t) {
                for (var e = new Array(t), i = 0; i < t; i++) {
                    e[i] = this.readS();
                }
                return e;
            }
        }, {
            key: "writeS",
            value: function writeS(t) {
                var e = this.getUint16();
                65534 != e && 65533 != e && (this.stringTable[e] = t);
            }
        }, {
            key: "readColor",
            value: function readColor(t) {
                var e = this.getUint8(), i = this.getUint8(), s = this.getUint8(), h = this.getUint8();
                return (t ? h << 24 : 0) + (e << 16) + (i << 8) + s;
            }
        }, {
            key: "readColorS",
            value: function readColorS(t) {
                var e = this.getUint8(), i = this.getUint8(), s = this.getUint8(), h = this.getUint8();
                if (t && 255 != h) return "rgba(" + e + "," + i + "," + s + "," + h / 255 + ")";
                var r = e.toString(16), a = i.toString(16), n = s.toString(16);
                return 1 == r.length && (r = "0" + r), 1 == a.length && (a = "0" + a), 1 == n.length && (n = "0" + n), 
                "#" + r + a + n;
            }
        }, {
            key: "readChar",
            value: function readChar() {
                var t = this.getUint16();
                return String.fromCharCode(t);
            }
        }, {
            key: "readBuffer",
            value: function readBuffer() {
                var t = this.getUint32(), e = new Tt(this.buffer, this._pos_, t);
                return this.pos += t, e.stringTable = this.stringTable, e.version = this.version, 
                e;
            }
        }, {
            key: "seek",
            value: function seek(t, e) {
                var i, s = this._pos_;
                return this.pos = t, e < this.getUint8() ? (1 == this.getUint8() ? (this.pos += 2 * e, 
                i = this.getUint16()) : (this.pos += 4 * e, i = this.getUint32()), i > 0 ? (this.pos = t + i, 
                !0) : (this.pos = s, !1)) : (this.pos = s, !1);
            }
        } ]);
        return Tt;
    }(Laya.Byte);
    t.ByteBuffer = Tt;
    var Pt = Laya.HitArea._isHitGraphic;
    t.ChildHitArea = /* */ function(_Laya$HitArea) {
        (0, _inherits2.default)(_class47, _Laya$HitArea);
        var _super39 = _createSuper(_class47);
        function _class47(t, e) {
            var _this26;
            (0, _classCallCheck2.default)(this, _class47);
            _this26 = _super39.call(this), _this26._child = t, _this26._reversed = e, _this26._reversed ? _this26.unHit = t.hitArea.hit : _this26.hit = t.hitArea.hit;
            return _this26;
        }
        (0, _createClass2.default)(_class47, [ {
            key: "contains",
            value: function contains(t, e) {
                var i;
                return (i = Laya.Point.TEMP).setTo(0, 0), i = this._child.toParentPoint(i), this._reversed ? !Pt(t - i.x, e - i.y, this.unHit) : Pt(t - i.x, e - i.y, this.hit);
            }
        } ]);
        return _class47;
    }(Laya.HitArea);
    var Lt = /* */ function() {
        function Lt(t, e, i, s) {
            (0, _classCallCheck2.default)(this, Lt);
            this.matrix = new Array(kt), this.reset(), void 0 === t && void 0 === e && void 0 === i && void 0 === s || this.adjustColor(t, e, i, s);
        }
        (0, _createClass2.default)(Lt, [ {
            key: "reset",
            value: function reset() {
                for (var t = 0; t < kt; t++) {
                    this.matrix[t] = Ot[t];
                }
            }
        }, {
            key: "invert",
            value: function invert() {
                this.multiplyMatrix([ -1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustColor",
            value: function adjustColor(t, e, i, s) {
                this.adjustHue(s || 0), this.adjustContrast(e || 0), this.adjustBrightness(t || 0), 
                this.adjustSaturation(i || 0);
            }
        }, {
            key: "adjustBrightness",
            value: function adjustBrightness(t) {
                t = 255 * this.cleanValue(t, 1), this.multiplyMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustContrast",
            value: function adjustContrast(t) {
                var e = (t = this.cleanValue(t, 1)) + 1, i = 128 * (1 - e);
                this.multiplyMatrix([ e, 0, 0, 0, i, 0, e, 0, 0, i, 0, 0, e, 0, i, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustSaturation",
            value: function adjustSaturation(t) {
                t = this.cleanValue(t, 1);
                var e = 1 - (t += 1), i = e * Bt, s = e * zt, h = e * jt;
                this.multiplyMatrix([ i + t, s, h, 0, 0, i, s + t, h, 0, 0, i, s, h + t, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustHue",
            value: function adjustHue(t) {
                t = this.cleanValue(t, 1), t *= Math.PI;
                var e = Math.cos(t), i = Math.sin(t);
                this.multiplyMatrix([ Bt + e * (1 - Bt) + i * -Bt, zt + e * -zt + i * -zt, jt + e * -jt + i * (1 - jt), 0, 0, Bt + e * -Bt + .143 * i, zt + e * (1 - zt) + .14 * i, jt + e * -jt + -.283 * i, 0, 0, Bt + e * -Bt + i * -(1 - Bt), zt + e * -zt + i * zt, jt + e * (1 - jt) + i * jt, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "concat",
            value: function concat(t) {
                t.length == kt && this.multiplyMatrix(t);
            }
        }, {
            key: "clone",
            value: function clone() {
                var t = new Lt();
                return t.copyMatrix(this.matrix), t;
            }
        }, {
            key: "copyMatrix",
            value: function copyMatrix(t) {
                for (var e = kt, i = 0; i < e; i++) {
                    this.matrix[i] = t[i];
                }
            }
        }, {
            key: "multiplyMatrix",
            value: function multiplyMatrix(t) {
                for (var e = [], i = 0, s = 0; s < 4; ++s) {
                    for (var h = 0; h < 5; ++h) {
                        e[i + h] = t[i] * this.matrix[h] + t[i + 1] * this.matrix[h + 5] + t[i + 2] * this.matrix[h + 10] + t[i + 3] * this.matrix[h + 15] + (4 == h ? t[i + 4] : 0);
                    }
                    i += 5;
                }
                this.copyMatrix(e);
            }
        }, {
            key: "cleanValue",
            value: function cleanValue(t, e) {
                return Math.min(e, Math.max(-e, t));
            }
        } ]);
        return Lt;
    }();
    t.ColorMatrix = Lt;
    var Ot = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], kt = Ot.length, Bt = .299, zt = .587, jt = .114;
    t.PixelHitTest = /* */ function(_Laya$HitArea2) {
        (0, _inherits2.default)(_class48, _Laya$HitArea2);
        var _super40 = _createSuper(_class48);
        function _class48(t, e, i) {
            var _this27;
            (0, _classCallCheck2.default)(this, _class48);
            _this27 = _super40.call(this), _this27._data = t, _this27.offsetX = e, _this27.offsetY = i, 
            _this27.scaleX = 1, _this27.scaleY = 1;
            return _this27;
        }
        (0, _createClass2.default)(_class48, [ {
            key: "contains",
            value: function contains(t, e) {
                if (t = Math.floor((t / this.scaleX - this.offsetX) * this._data.scale), e = Math.floor((e / this.scaleY - this.offsetY) * this._data.scale), 
                t < 0 || e < 0 || t >= this._data.pixelWidth) return !1;
                var i = e * this._data.pixelWidth + t, s = Math.floor(i / 8), h = i % 8;
                return s >= 0 && s < this._data.pixels.length && 1 == (this._data.pixels[s] >> h & 1);
            }
        } ]);
        return _class48;
    }(Laya.HitArea);
    t.PixelHitTestData = /* */ function() {
        function _class49() {
            (0, _classCallCheck2.default)(this, _class49);
        }
        (0, _createClass2.default)(_class49, [ {
            key: "load",
            value: function load(t) {
                t.getInt32(), this.pixelWidth = t.getInt32(), this.scale = 1 / t.readByte();
                var e = t.getInt32();
                this.pixels = [];
                for (var i = 0; i < e; i++) {
                    var s = t.readByte();
                    s < 0 && (s += 256), this.pixels[i] = s;
                }
            }
        } ]);
        return _class49;
    }();
    var Mt = /* */ function() {
        function Mt() {
            (0, _classCallCheck2.default)(this, Mt);
            this._readPos = 0, this.defaultImgWidth = 0, this.defaultImgHeight = 0, this._handlers = {}, 
            this._handlers.url = this.onTag_URL, this._handlers.img = this.onTag_IMG, this._handlers.b = this.onTag_B, 
            this._handlers.i = this.onTag_I, this._handlers.u = this.onTag_U, this._handlers.sup = this.onTag_Simple, 
            this._handlers.sub = this.onTag_Simple, this._handlers.color = this.onTag_COLOR, 
            this._handlers.font = this.onTag_FONT, this._handlers.size = this.onTag_SIZE;
        }
        (0, _createClass2.default)(Mt, [ {
            key: "onTag_URL",
            value: function onTag_URL(t, e, i) {
                return e ? "</a>" : null != i ? '<a href="' + i + '" target="_blank">' : '<a href="' + this.getTagText() + '" target="_blank">';
            }
        }, {
            key: "onTag_IMG",
            value: function onTag_IMG(t, e, i) {
                if (e) return null;
                var s = this.getTagText(!0);
                return s ? this.defaultImgWidth ? '<img src="' + s + '" width="' + this.defaultImgWidth + '" height="' + this.defaultImgHeight + '"/>' : '<img src="' + s + '"/>' : null;
            }
        }, {
            key: "onTag_B",
            value: function onTag_B(t, e, i) {
                return e ? "</span>" : "<span style='font-weight:bold'>";
            }
        }, {
            key: "onTag_I",
            value: function onTag_I(t, e, i) {
                return e ? "</span>" : "<span style='font-style:italic'>";
            }
        }, {
            key: "onTag_U",
            value: function onTag_U(t, e, i) {
                return e ? "</span>" : "<span style='text-decoration:underline'>";
            }
        }, {
            key: "onTag_Simple",
            value: function onTag_Simple(t, e, i) {
                return e ? "</" + t + ">" : "<" + t + ">";
            }
        }, {
            key: "onTag_COLOR",
            value: function onTag_COLOR(t, e, i) {
                return e ? "</span>" : (this.lastColor = i, '<span style="color:' + i + '">');
            }
        }, {
            key: "onTag_FONT",
            value: function onTag_FONT(t, e, i) {
                return e ? "</span>" : '<span style="font-family:' + i + '">';
            }
        }, {
            key: "onTag_SIZE",
            value: function onTag_SIZE(t, e, i) {
                return e ? "</span>" : (this.lastSize = i, '<span style="font-size:' + i + '">');
            }
        }, {
            key: "getTagText",
            value: function getTagText(t) {
                for (var e, i = this._readPos, s = ""; -1 != (e = this._text.indexOf("[", i)); ) {
                    if (92 != this._text.charCodeAt(e - 1)) {
                        s += this._text.substring(i, e);
                        break;
                    }
                    s += this._text.substring(i, e - 1), s += "[", i = e + 1;
                }
                return -1 == e ? null : (t && (this._readPos = e), s);
            }
        }, {
            key: "parse",
            value: function parse(t, e) {
                this._text = t, this.lastColor = null, this.lastSize = null;
                for (var i, s, h, r, a, n, o, l = 0, _ = ""; -1 != (i = this._text.indexOf("[", l)); ) {
                    if (i > 0 && 92 == this._text.charCodeAt(i - 1)) _ += this._text.substring(l, i - 1), 
                    _ += "[", l = i + 1; else {
                        if (_ += this._text.substring(l, i), l = i, -1 == (i = this._text.indexOf("]", l))) break;
                        h = "/" == this._text.charAt(l + 1), r = this._text.substring(h ? l + 2 : l + 1, i), 
                        this._readPos = i + 1, a = null, n = null, -1 != (s = r.indexOf("=")) && (a = r.substring(s + 1), 
                        r = r.substring(0, s)), r = r.toLowerCase(), null != (o = this._handlers[r]) ? e || null != (n = o.call(this, r, h, a)) && (_ += n) : _ += this._text.substring(l, this._readPos), 
                        l = this._readPos;
                    }
                }
                return l < this._text.length && (_ += this._text.substr(l)), this._text = null, 
                _;
            }
        } ]);
        return Mt;
    }();
    Mt.inst = new Mt(), t.UBBParser = Mt;
    t.ToolSet = /* */ function() {
        function _class50() {
            (0, _classCallCheck2.default)(this, _class50);
        }
        (0, _createClass2.default)(_class50, null, [ {
            key: "startsWith",
            value: function startsWith(t, e, i) {
                return !(!t || t.length < e.length || (t = t.substring(0, e.length), i ? t.toLowerCase() != e.toLowerCase() : t != e));
            }
        }, {
            key: "endsWith",
            value: function endsWith(t, e, i) {
                return !(!t || t.length < e.length || (t = t.substring(t.length - e.length), i ? t.toLowerCase() != e.toLowerCase() : t != e));
            }
        }, {
            key: "trimRight",
            value: function trimRight(t) {
                for (var e = "", i = t.length - 1; i >= 0 && (" " == (e = t.charAt(i)) || "\n" == e || "\r" == e); i--) {}
                return t.substring(0, i + 1);
            }
        }, {
            key: "convertToHtmlColor",
            value: function convertToHtmlColor(t, e) {
                var i;
                i = e ? (t >> 24 & 255).toString(16) : "";
                var s = (t >> 16 & 255).toString(16), h = (t >> 8 & 255).toString(16), r = (255 & t).toString(16);
                return 1 == i.length && (i = "0" + i), 1 == s.length && (s = "0" + s), 1 == h.length && (h = "0" + h), 
                1 == r.length && (r = "0" + r), "#" + i + s + h + r;
            }
        }, {
            key: "convertFromHtmlColor",
            value: function convertFromHtmlColor(t, e) {
                return t.length < 1 ? 0 : ("#" == t.charAt(0) && (t = t.substr(1)), 8 == t.length ? (parseInt(t.substr(0, 2), 16) << 24) + parseInt(t.substr(2), 16) : e ? 4278190080 + parseInt(t, 16) : parseInt(t, 16));
            }
        }, {
            key: "displayObjectToGObject",
            value: function displayObjectToGObject(t) {
                for (;t && !(t instanceof Laya.Stage); ) {
                    if (t.$owner) return t.$owner;
                    t = t.parent;
                }
                return null;
            }
        }, {
            key: "encodeHTML",
            value: function encodeHTML(t) {
                return t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;") : "";
            }
        }, {
            key: "clamp",
            value: function clamp(t, e, i) {
                return t < e ? t = e : t > i && (t = i), t;
            }
        }, {
            key: "clamp01",
            value: function clamp01(t) {
                return isNaN(t) ? t = 0 : t > 1 ? t = 1 : t < 0 && (t = 0), t;
            }
        }, {
            key: "lerp",
            value: function lerp(t, e, i) {
                return t + i * (e - t);
            }
        }, {
            key: "repeat",
            value: function repeat(t, e) {
                return t - Math.floor(t / e) * e;
            }
        }, {
            key: "distance",
            value: function distance(t, e, i, s) {
                return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - s, 2));
            }
        }, {
            key: "setColorFilter",
            value: function setColorFilter(e, i) {
                var s, h, r, a, n, o, l, _ = e.$_colorFilter_, d = e.filters, c = (0, _typeof2.default)(i);
                if ("boolean" == c) s = _ ? _.$_color_ : null, h = i; else {
                    if ("string" == c) {
                        var u = Laya.ColorUtils.create(i).arrColor;
                        i = 1 == u[0] && 1 == u[1] && 1 == u[2] ? null : [ u[0], 0, 0, 0, 0, 0, u[1], 0, 0, 0, 0, 0, u[2], 0, 0, 0, 0, 0, 1, 0 ];
                    }
                    s = i, h = !!_ && _.$_grayed_;
                }
                if (s || 0 == s || h) _ || (_ = new Laya.ColorFilter(), e.$_colorFilter_ = _), d ? -1 == d.indexOf(_) && d.push(_) : d = [ _ ], 
                e.filters = d, _.$_color_ = s, _.$_grayed_ = h, _.reset(), h ? _.gray() : 20 == s.length ? _.setByMatrix(s) : _.setByMatrix((r = s[0], 
                a = s[1], n = s[2], o = s[3], l = l || new Array(t.ColorMatrix.length), At.reset(), 
                At.adjustColor(r, a, n, o), At.matrix.forEach(function(t, e) {
                    return l[e] = t;
                }), l)); else if (d && _) {
                    var _t3 = d.indexOf(_);
                    -1 != _t3 && (d.splice(_t3, 1), d.length > 0 ? e.filters = d : e.filters = null);
                }
            }
        } ]);
        return _class50;
    }();
    var At = new t.ColorMatrix();
}(window.fairygui = window.fgui || {});