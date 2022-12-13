function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function set(t, e, i, s) {
    return (set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(t, e, i, s) {
        var n, a = _superPropBase(t, e);
        if (a) {
            if ((n = Object.getOwnPropertyDescriptor(a, e)).set) return n.set.call(s, i), !0;
            if (!n.writable) return !1;
        }
        if (n = Object.getOwnPropertyDescriptor(s, e)) {
            if (!n.writable) return !1;
            n.value = i, Object.defineProperty(s, e, n);
        } else _defineProperty(s, e, i);
        return !0;
    })(t, e, i, s);
}

function _set(t, e, i, s, n) {
    if (!set(t, e, i, s || t) && n) throw new Error("failed to set property");
    return i;
}

function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function _get(t, e, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
        var s = _superPropBase(t, e);
        if (s) {
            var n = Object.getOwnPropertyDescriptor(s, e);
            return n.get ? n.get.call(i) : n.value;
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

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(t, s.key, s);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}

window.fgui = {}, window.fairygui = window.fgui, function(t) {
    var e = function() {
        function AssetProxy() {
            _classCallCheck(this, AssetProxy), this._asset = Laya.loader;
        }
        return _createClass(AssetProxy, [ {
            key: "getRes",
            value: function(t) {
                return this._asset.getRes(t);
            }
        }, {
            key: "load",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                this._asset.load(t, e, i, s, n, a);
            }
        }, {
            key: "setAsset",
            value: function(t) {
                this._asset = t;
            }
        } ], [ {
            key: "inst",
            get: function() {
                return null == AssetProxy._inst && (AssetProxy._inst = new AssetProxy()), AssetProxy._inst;
            }
        } ]), AssetProxy;
    }();
    t.AssetProxy = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function AsyncOperation() {
            _classCallCheck(this, AsyncOperation), this._itemList = new Array(), this._objectPool = [];
        }
        return _createClass(AsyncOperation, [ {
            key: "createObject",
            value: function(e, i) {
                var s = t.UIPackage.getByName(e);
                if (!s) throw new Error("namespace sunnyboxs found: " + e);
                var n = s.getItemByName(i);
                if (!n) throw new Error("resource not found: " + i);
                this.internalCreateObject(n);
            }
        }, {
            key: "createObjectFromURL",
            value: function(e) {
                var i = t.UIPackage.getItemByURL(e);
                if (!i) throw new Error("resource not found: " + e);
                this.internalCreateObject(i);
            }
        }, {
            key: "cancel",
            value: function() {
                if (Laya.timer.clear(this, this.run), this._itemList.length = 0, this._objectPool.length > 0) {
                    for (var t = this._objectPool.length, e = 0; e < t; e++) this._objectPool[e].dispose();
                    this._objectPool.length = 0;
                }
            }
        }, {
            key: "internalCreateObject",
            value: function(e) {
                this._itemList.length = 0, this._objectPool.length = 0;
                var s = new i(e, t.ObjectType.Component);
                s.childCount = this.collectComponentChildren(e), this._itemList.push(s), this._index = 0, 
                Laya.timer.frameLoop(1, this, this.run);
            }
        }, {
            key: "collectComponentChildren",
            value: function(e) {
                var s, n, a, o, r, l, h = e.rawData;
                h.seek(0, 2);
                var u = h.getInt16();
                for (a = 0; a < u; a++) {
                    o = h.getInt16(), r = h.pos, h.seek(r, 0);
                    var _ = h.readByte(), c = h.readS(), d = h.readS();
                    h.pos = r, null != c ? (n = null != (l = null != d ? t.UIPackage.getById(d) : e.owner) ? l.getItemById(c) : null, 
                    s = new i(n, _), null != n && n.type == t.PackageItemType.Component && (s.childCount = this.collectComponentChildren(n))) : (s = new i(null, _), 
                    _ == t.ObjectType.List && (s.listItemCount = this.collectListChildren(h))), this._itemList.push(s), 
                    h.pos = r + o;
                }
                return u;
            }
        }, {
            key: "collectListChildren",
            value: function(e) {
                e.seek(e.pos, 8);
                var s, n, a, o, r, l = 0, h = e.readS(), u = e.getInt16();
                for (s = 0; s < u; s++) n = e.getInt16(), n += e.pos, null == (a = e.readS()) && (a = h), 
                a && null != (o = t.UIPackage.getItemByURL(a)) && (r = new i(o, o.objectType), o.type == t.PackageItemType.Component && (r.childCount = this.collectComponentChildren(o)), 
                this._itemList.push(r), l++), e.pos = n;
                return l;
            }
        }, {
            key: "run",
            value: function() {
                for (var e, i, s, n, a = Laya.Browser.now(), o = t.UIConfig.frameTimeForAsyncUIConstruction, r = this._itemList.length; this._index < r; ) {
                    if (null != (i = this._itemList[this._index]).packageItem) (e = t.UIObjectFactory.newObject(i.packageItem)).packageItem = i.packageItem, 
                    this._objectPool.push(e), t.UIPackage._constructing++, i.packageItem.type == t.PackageItemType.Component ? (s = this._objectPool.length - i.childCount - 1, 
                    e.constructFromResource2(this._objectPool, s), this._objectPool.splice(s, i.childCount)) : e.constructFromResource(), 
                    t.UIPackage._constructing--; else if (e = t.UIObjectFactory.newObject2(i.type), 
                    this._objectPool.push(e), i.type == t.ObjectType.List && i.listItemCount > 0) {
                        for (s = this._objectPool.length - i.listItemCount - 1, n = 0; n < i.listItemCount; n++) e.itemPool.returnObject(this._objectPool[n + s]);
                        this._objectPool.splice(s, i.listItemCount);
                    }
                    if (this._index++, this._index % 5 == 0 && Laya.Browser.now() - a >= o) return;
                }
                Laya.timer.clear(this, this.run);
                var l = this._objectPool[0];
                this._itemList.length = 0, this._objectPool.length = 0, null != this.callback && this.callback.runWith(l);
            }
        } ]), AsyncOperation;
    }();
    t.AsyncOperation = e;
    var i = function DisplayListItem(t, e) {
        _classCallCheck(this, DisplayListItem), this.packageItem = t, this.type = e;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function Controller() {
            var t;
            return _classCallCheck(this, Controller), (t = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this)))._selectedIndex = 0, 
            t._previousIndex = 0, t.changing = !1, t._pageIds = [], t._pageNames = [], t._selectedIndex = -1, 
            t._previousIndex = -1, t;
        }
        return _inherits(Controller, Laya.EventDispatcher), _createClass(Controller, [ {
            key: "dispose",
            value: function() {
                this.offAll();
            }
        }, {
            key: "setSelectedIndex",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this._selectedIndex != t) {
                    if (t > this._pageIds.length - 1) throw "index out of bounds: " + t;
                    this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = t, 
                    this.parent.applyController(this), this.changing = !1;
                }
            }
        }, {
            key: "setSelectedPage",
            value: function(t) {
                var e = this._pageNames.indexOf(t);
                -1 == e && (e = 0), this.setSelectedIndex(e);
            }
        }, {
            key: "getPageName",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this._pageNames[t];
            }
        }, {
            key: "addPage",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.addPageAt(this.name, this._pageIds.length);
            }
        }, {
            key: "addPageAt",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = "" + Controller._nextPageId++;
                e == this._pageIds.length ? (this._pageIds.push(i), this._pageNames.push(this.name)) : (this._pageIds.splice(e, 0, i), 
                this._pageNames.splice(e, 0, this.name));
            }
        }, {
            key: "removePage",
            value: function(t) {
                var e = this._pageNames.indexOf(this.name);
                -1 != e && (this._pageIds.splice(e, 1), this._pageNames.splice(e, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this));
            }
        }, {
            key: "removePageAt",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this._pageIds.splice(t, 1), this._pageNames.splice(t, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this);
            }
        }, {
            key: "clearPages",
            value: function() {
                this._pageIds.length = 0, this._pageNames.length = 0, -1 != this._selectedIndex ? this.selectedIndex = -1 : this.parent.applyController(this);
            }
        }, {
            key: "hasPage",
            value: function(t) {
                return -1 != this._pageNames.indexOf(t);
            }
        }, {
            key: "getPageIndexById",
            value: function(t) {
                return this._pageIds.indexOf(t);
            }
        }, {
            key: "getPageIdByName",
            value: function(t) {
                var e = this._pageNames.indexOf(t);
                return -1 != e ? this._pageIds[e] : null;
            }
        }, {
            key: "getPageNameById",
            value: function(t) {
                var e = this._pageIds.indexOf(t);
                return -1 != e ? this._pageNames[e] : null;
            }
        }, {
            key: "getPageId",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this._pageIds[t];
            }
        }, {
            key: "runActions",
            value: function() {
                if (this._actions) for (var t = this._actions.length, e = 0; e < t; e++) this._actions[e].run(this, this.previousPageId, this.selectedPageId);
            }
        }, {
            key: "setup",
            value: function(e) {
                var i, s, n = e.pos;
                e.seek(n, 0), this.name = e.readS(), this.autoRadioGroupDepth = e.readBool(), e.seek(n, 1);
                var a = e.getInt16();
                for (i = 0; i < a; i++) this._pageIds.push(e.readS()), this._pageNames.push(e.readS());
                var o = 0;
                if (e.version >= 2) switch (e.getByte()) {
                  case 1:
                    o = e.getInt16();
                    break;

                  case 2:
                    -1 == (o = this._pageNames.indexOf(t.UIPackage.branch)) && (o = 0);
                    break;

                  case 3:
                    -1 == (o = this._pageNames.indexOf(t.UIPackage.getVar(e.readS()))) && (o = 0);
                }
                if (e.seek(n, 2), (a = e.getInt16()) > 0) for (null == this._actions && (this._actions = []), 
                i = 0; i < a; i++) {
                    s = e.getInt16(), s += e.pos;
                    var r = t.ControllerAction.createAction(e.readByte());
                    r.setup(e), this._actions.push(r), e.pos = s;
                }
                null != this.parent && this._pageIds.length > 0 ? this._selectedIndex = o : this._selectedIndex = -1;
            }
        }, {
            key: "selectedIndex",
            get: function() {
                return this._selectedIndex;
            },
            set: function(e) {
                if (this._selectedIndex != e) {
                    if (e > this._pageIds.length - 1) throw "index out of bounds: " + e;
                    this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = e, 
                    this.parent.applyController(this), this.event(t.Events.STATE_CHANGED, this), this.changing = !1;
                }
            }
        }, {
            key: "previsousIndex",
            get: function() {
                return this._previousIndex;
            }
        }, {
            key: "selectedPage",
            get: function() {
                return -1 == this._selectedIndex ? null : this._pageNames[this._selectedIndex];
            },
            set: function(t) {
                var e = this._pageNames.indexOf(t);
                -1 == e && (e = 0), this.selectedIndex = e;
            }
        }, {
            key: "previousPage",
            get: function() {
                return -1 == this._previousIndex ? null : this._pageNames[this._previousIndex];
            }
        }, {
            key: "pageCount",
            get: function() {
                return this._pageIds.length;
            }
        }, {
            key: "selectedPageId",
            get: function() {
                return -1 == this._selectedIndex ? null : this._pageIds[this._selectedIndex];
            },
            set: function(t) {
                var e = this._pageIds.indexOf(t);
                this.selectedIndex = e;
            }
        }, {
            key: "oppositePageId",
            set: function(t) {
                this._pageIds.indexOf(t) > 0 ? this.selectedIndex = 0 : this._pageIds.length > 1 && (this.selectedIndex = 1);
            }
        }, {
            key: "previousPageId",
            get: function() {
                return -1 == this._previousIndex ? null : this._pageIds[this._previousIndex];
            }
        } ]), Controller;
    }();
    e._nextPageId = 0, t.Controller = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function DragDropManager() {
            _classCallCheck(this, DragDropManager), this._agent = new t.GLoader(), this._agent.draggable = !0, 
            this._agent.touchable = !1, this._agent.setSize(100, 100), this._agent.setPivot(.5, .5, !0), 
            this._agent.align = "center", this._agent.verticalAlign = "middle", this._agent.sortingOrder = 1e6, 
            this._agent.on(t.Events.DRAG_END, this, this.__dragEnd);
        }
        return _createClass(DragDropManager, [ {
            key: "startDrag",
            value: function(e, i, s) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                if (null == this._agent.parent) {
                    this._sourceData = s, this._agent.url = i, t.GRoot.inst.addChild(this._agent);
                    var a = t.GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                    this._agent.setXY(a.x, a.y), this._agent.startDrag(n);
                }
            }
        }, {
            key: "cancel",
            value: function() {
                null != this._agent.parent && (this._agent.stopDrag(), t.GRoot.inst.removeChild(this._agent), 
                this._sourceData = null);
            }
        }, {
            key: "__dragEnd",
            value: function(e) {
                if (null != this._agent.parent) {
                    t.GRoot.inst.removeChild(this._agent);
                    var i = this._sourceData;
                    this._sourceData = null;
                    for (var s = t.GObject.cast(e.target); null != s; ) {
                        if (s.displayObject.hasListener(t.Events.DROP)) return s.requestFocus(), void s.displayObject.event(t.Events.DROP, [ i, t.Events.createEvent(t.Events.DROP, s.displayObject, e) ]);
                        s = s.parent;
                    }
                }
            }
        }, {
            key: "dragAgent",
            get: function() {
                return this._agent;
            }
        }, {
            key: "dragging",
            get: function() {
                return null != this._agent.parent;
            }
        } ], [ {
            key: "inst",
            get: function() {
                return null == DragDropManager._inst && (DragDropManager._inst = new DragDropManager()), 
                DragDropManager._inst;
            }
        } ]), DragDropManager;
    }();
    t.DragDropManager = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function Events() {
            _classCallCheck(this, Events);
        }
        return _createClass(Events, null, [ {
            key: "createEvent",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return Events.$event.setTo(t, e, i ? i.target : e), i ? (Events.$event.touchId = i.touchId, 
                Events.$event.nativeEvent = i.nativeEvent) : Events.$event.nativeEvent = null, Events.$event._stoped = !1, 
                Events.$event;
            }
        }, {
            key: "dispatch",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                e.event(t, Events.createEvent(t, e, i));
            }
        } ]), Events;
    }();
    e.STATE_CHANGED = "fui_state_changed", e.XY_CHANGED = "fui_xy_changed", e.SIZE_CHANGED = "fui_size_changed", 
    e.SIZE_DELAY_CHANGE = "fui_size_delay_change", e.CLICK_ITEM = "fui_click_item", 
    e.SCROLL = "fui_scroll", e.SCROLL_END = "fui_scroll_end", e.DROP = "fui_drop", e.FOCUS_CHANGED = "fui_focus_changed", 
    e.DRAG_START = "fui_drag_start", e.DRAG_MOVE = "fui_drag_move", e.DRAG_END = "fui_drag_end", 
    e.PULL_DOWN_RELEASE = "fui_pull_down_release", e.PULL_UP_RELEASE = "fui_pull_up_release", 
    e.GEAR_STOP = "fui_gear_stop", e.$event = new Laya.Event(), t.Events = e;
}(fgui || (fgui = {})), function(t) {
    !function(t) {
        t[t.Common = 0] = "Common", t[t.Check = 1] = "Check", t[t.Radio = 2] = "Radio";
    }(t.ButtonMode || (t.ButtonMode = {})), function(t) {
        t[t.None = 0] = "None", t[t.Both = 1] = "Both", t[t.Height = 2] = "Height";
    }(t.AutoSizeType || (t.AutoSizeType = {})), function(t) {
        t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right";
    }(t.AlignType || (t.AlignType = {})), function(t) {
        t[t.Top = 0] = "Top", t[t.Middle = 1] = "Middle", t[t.Bottom = 2] = "Bottom";
    }(t.VertAlignType || (t.VertAlignType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Scale = 1] = "Scale", t[t.ScaleMatchHeight = 2] = "ScaleMatchHeight", 
        t[t.ScaleMatchWidth = 3] = "ScaleMatchWidth", t[t.ScaleFree = 4] = "ScaleFree", 
        t[t.ScaleNoBorder = 5] = "ScaleNoBorder";
    }(t.LoaderFillType || (t.LoaderFillType = {})), function(t) {
        t[t.SingleColumn = 0] = "SingleColumn", t[t.SingleRow = 1] = "SingleRow", t[t.FlowHorizontal = 2] = "FlowHorizontal", 
        t[t.FlowVertical = 3] = "FlowVertical", t[t.Pagination = 4] = "Pagination";
    }(t.ListLayoutType || (t.ListLayoutType = {})), function(t) {
        t[t.Single = 0] = "Single", t[t.Multiple = 1] = "Multiple", t[t.Multiple_SingleClick = 2] = "Multiple_SingleClick", 
        t[t.None = 3] = "None";
    }(t.ListSelectionMode || (t.ListSelectionMode = {})), function(t) {
        t[t.Visible = 0] = "Visible", t[t.Hidden = 1] = "Hidden", t[t.Scroll = 2] = "Scroll";
    }(t.OverflowType || (t.OverflowType = {})), function(t) {
        t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Sound = 2] = "Sound", 
        t[t.Component = 3] = "Component", t[t.Atlas = 4] = "Atlas", t[t.Font = 5] = "Font", 
        t[t.Swf = 6] = "Swf", t[t.Misc = 7] = "Misc", t[t.Unknown = 8] = "Unknown";
    }(t.PackageItemType || (t.PackageItemType = {})), function(t) {
        t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Swf = 2] = "Swf", 
        t[t.Graph = 3] = "Graph", t[t.Loader = 4] = "Loader", t[t.Group = 5] = "Group", 
        t[t.Text = 6] = "Text", t[t.RichText = 7] = "RichText", t[t.InputText = 8] = "InputText", 
        t[t.Component = 9] = "Component", t[t.List = 10] = "List", t[t.Label = 11] = "Label", 
        t[t.Button = 12] = "Button", t[t.ComboBox = 13] = "ComboBox", t[t.ProgressBar = 14] = "ProgressBar", 
        t[t.Slider = 15] = "Slider", t[t.ScrollBar = 16] = "ScrollBar", t[t.Tree = 17] = "Tree";
    }(t.ObjectType || (t.ObjectType = {})), function(t) {
        t[t.Percent = 0] = "Percent", t[t.ValueAndMax = 1] = "ValueAndMax", t[t.Value = 2] = "Value", 
        t[t.Max = 3] = "Max";
    }(t.ProgressTitleType || (t.ProgressTitleType = {})), function(t) {
        t[t.Default = 0] = "Default", t[t.Visible = 1] = "Visible", t[t.Auto = 2] = "Auto", 
        t[t.Hidden = 3] = "Hidden";
    }(t.ScrollBarDisplayType || (t.ScrollBarDisplayType = {})), function(t) {
        t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical", t[t.Both = 2] = "Both";
    }(t.ScrollType || (t.ScrollType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", 
        t[t.Both = 3] = "Both";
    }(t.FlipType || (t.FlipType = {})), function(t) {
        t[t.Ascent = 0] = "Ascent", t[t.Descent = 1] = "Descent", t[t.Arch = 2] = "Arch";
    }(t.ChildrenRenderOrder || (t.ChildrenRenderOrder = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
    }(t.GroupLayoutType || (t.GroupLayoutType = {})), function(t) {
        t[t.Auto = 0] = "Auto", t[t.Up = 1] = "Up", t[t.Down = 2] = "Down";
    }(t.PopupDirection || (t.PopupDirection = {})), function(t) {
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
    }(t.RelationType || (t.RelationType = {})), function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", 
        t[t.Radial90 = 3] = "Radial90", t[t.Radial180 = 4] = "Radial180", t[t.Radial360 = 5] = "Radial360";
    }(t.FillMethod || (t.FillMethod = {})), function(t) {
        t[t.Top = 0] = "Top", t[t.Bottom = 1] = "Bottom", t[t.Left = 2] = "Left", t[t.Right = 3] = "Right", 
        t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.BottomLeft = 2] = "BottomLeft", 
        t[t.BottomRight = 3] = "BottomRight";
    }(t.FillOrigin || (t.FillOrigin = {})), function(t) {
        t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.BottomLeft = 2] = "BottomLeft", 
        t[t.BottomRight = 3] = "BottomRight";
    }(t.FillOrigin90 || (t.FillOrigin90 = {})), function(t) {
        t[t.Text = 0] = "Text", t[t.Icon = 1] = "Icon", t[t.Color = 2] = "Color", t[t.OutlineColor = 3] = "OutlineColor", 
        t[t.Playing = 4] = "Playing", t[t.Frame = 5] = "Frame", t[t.DeltaTime = 6] = "DeltaTime", 
        t[t.TimeScale = 7] = "TimeScale", t[t.FontSize = 8] = "FontSize", t[t.Selected = 9] = "Selected";
    }(t.ObjectPropID || (t.ObjectPropID = {}));
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GObject() {
            _classCallCheck(this, GObject), this._x = 0, this._y = 0, this._alpha = 1, this._rotation = 0, 
            this._visible = !0, this._touchable = !0, this._grayed = !1, this._draggable = !1, 
            this._scaleX = 1, this._scaleY = 1, this._skewX = 0, this._skewY = 0, this._pivotX = 0, 
            this._pivotY = 0, this._pivotAsAnchor = !1, this._pivotOffsetX = 0, this._pivotOffsetY = 0, 
            this._sortingOrder = 0, this._internalVisible = !0, this._handlingController = !1, 
            this._focusable = !1, this._pixelSnapping = !1, this._yOffset = 0, this.minWidth = 0, 
            this.minHeight = 0, this.maxWidth = 0, this.maxHeight = 0, this.sourceWidth = 0, 
            this.sourceHeight = 0, this.initWidth = 0, this.initHeight = 0, this._width = 0, 
            this._height = 0, this._rawWidth = 0, this._rawHeight = 0, this._sizePercentInGroup = 0, 
            this._id = "" + GObject._gInstanceCounter++, this._name = "", this.createDisplayObject(), 
            this._relations = new t.Relations(this), this._gears = new Array(10);
        }
        return _createClass(GObject, [ {
            key: "setXY",
            value: function(e, i) {
                if (this._x != e || this._y != i) {
                    var s = e - this._x, n = i - this._y;
                    this._x = e, this._y = i, this.handleXYChanged(), this instanceof t.GGroup && this.moveChildren(s, n), 
                    this.updateGear(1), !this._parent || this._parent instanceof t.GList || (this._parent.setBoundsChangedFlag(), 
                    null != this._group && this._group.setBoundsChangedFlag(!0), this.displayObject.event(t.Events.XY_CHANGED)), 
                    GObject.draggingObject != this || GObject.sUpdateInDragging || this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
                }
            }
        }, {
            key: "center",
            value: function() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e = null != this._parent ? this.parent : this.root, this.setXY((e.width - this.width) / 2, (e.height - this.height) / 2), 
                i && (this.addRelation(e, t.RelationType.Center_Center), this.addRelation(e, t.RelationType.Middle_Middle));
            }
        }, {
            key: "setSize",
            value: function(e, i) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this._rawWidth != e || this._rawHeight != i) {
                    this._rawWidth = e, this._rawHeight = i, e < this.minWidth && (e = this.minWidth), 
                    i < this.minHeight && (i = this.minHeight), this.maxWidth > 0 && e > this.maxWidth && (e = this.maxWidth), 
                    this.maxHeight > 0 && i > this.maxHeight && (i = this.maxHeight);
                    var n = e - this._width, a = i - this._height;
                    this._width = e, this._height = i, this.handleSizeChanged(), 0 == this._pivotX && 0 == this._pivotY || (this._pivotAsAnchor ? this.applyPivot() : (s || this.setXY(this.x - this._pivotX * n, this.y - this._pivotY * a), 
                    this.updatePivotOffset())), this instanceof t.GGroup && this.resizeChildren(n, a), 
                    this.updateGear(2), this._parent && (this._relations.onOwnerSizeChanged(n, a, this._pivotAsAnchor || !s), 
                    this._parent.setBoundsChangedFlag(), null != this._group && this._group.setBoundsChangedFlag()), 
                    this.displayObject.event(t.Events.SIZE_CHANGED);
                }
            }
        }, {
            key: "ensureSizeCorrect",
            value: function() {}
        }, {
            key: "makeFullScreen",
            value: function() {
                this.setSize(t.GRoot.inst.width, t.GRoot.inst.height);
            }
        }, {
            key: "setScale",
            value: function(t, e) {
                this._scaleX == t && this._scaleY == e || (this._scaleX = t, this._scaleY = e, this.handleScaleChanged(), 
                this.applyPivot(), this.updateGear(2));
            }
        }, {
            key: "setSkew",
            value: function(t, e) {
                this._skewX == t && this._skewY == e || (this._skewX = t, this._skewY = e, null != this._displayObject && (this._displayObject.skew(-t, e), 
                this.applyPivot()));
            }
        }, {
            key: "setPivot",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this._pivotX == t && this._pivotY == e && this._pivotAsAnchor == i || (this._pivotX = t, 
                this._pivotY = e, this._pivotAsAnchor = i, this.updatePivotOffset(), this.handleXYChanged());
            }
        }, {
            key: "internalSetPivot",
            value: function(t, e, i) {
                this._pivotX = t, this._pivotY = e, this._pivotAsAnchor = i, this._pivotAsAnchor && this.handleXYChanged();
            }
        }, {
            key: "updatePivotOffset",
            value: function() {
                if (null != this._displayObject) if (!this._displayObject.transform || 0 == this._pivotX && 0 == this._pivotY) this._pivotOffsetX = 0, 
                this._pivotOffsetY = 0; else {
                    GObject.sHelperPoint.x = this._pivotX * this._width, GObject.sHelperPoint.y = this._pivotY * this._height;
                    var t = this._displayObject.transform.transformPoint(GObject.sHelperPoint);
                    this._pivotOffsetX = this._pivotX * this._width - t.x, this._pivotOffsetY = this._pivotY * this._height - t.y;
                }
            }
        }, {
            key: "applyPivot",
            value: function() {
                0 == this._pivotX && 0 == this._pivotY || (this.updatePivotOffset(), this.handleXYChanged());
            }
        }, {
            key: "requestFocus",
            value: function() {
                for (var t = this; t && !t._focusable; ) t = t.parent;
                null != t && (this.root.focus = t);
            }
        }, {
            key: "__rollOver",
            value: function(t) {
                Laya.timer.once(100, this, this.__doShowTooltips);
            }
        }, {
            key: "__doShowTooltips",
            value: function() {
                this.root && this.root.showTooltips(this._tooltips);
            }
        }, {
            key: "__rollOut",
            value: function(t) {
                Laya.timer.clear(this, this.__doShowTooltips), this.root.hideTooltips();
            }
        }, {
            key: "getGear",
            value: function(e) {
                var i = this._gears[e];
                return null == i && (this._gears[e] = i = t.GearBase.create(this, e)), i;
            }
        }, {
            key: "updateGear",
            value: function(t) {
                if (!this._underConstruct && !this._gearLocked) {
                    var e = this._gears[t];
                    null != e && null != e.controller && e.updateState();
                }
            }
        }, {
            key: "checkGearController",
            value: function(t, e) {
                return null != this._gears[t] && this._gears[t].controller == e;
            }
        }, {
            key: "updateGearFromRelations",
            value: function(t, e, i) {
                null != this._gears[t] && this._gears[t].updateFromRelations(e, i);
            }
        }, {
            key: "addDisplayLock",
            value: function() {
                var t = this._gears[0];
                if (t && t.controller) {
                    var e = t.addLock();
                    return this.checkGearDisplay(), e;
                }
                return 0;
            }
        }, {
            key: "releaseDisplayLock",
            value: function(t) {
                var e = this._gears[0];
                e && e.controller && (e.releaseLock(t), this.checkGearDisplay());
            }
        }, {
            key: "checkGearDisplay",
            value: function() {
                if (!this._handlingController) {
                    var t = null == this._gears[0] || this._gears[0].connected;
                    this._gears[8] && (t = this._gears[8].evaluate(t)), t != this._internalVisible && (this._internalVisible = t, 
                    this._parent && (this._parent.childStateChanged(this), this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag()));
                }
            }
        }, {
            key: "addRelation",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this._relations.add(t, e, i);
            }
        }, {
            key: "removeRelation",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this._relations.remove(t, e);
            }
        }, {
            key: "removeFromParent",
            value: function() {
                this._parent && this._parent.removeChild(this);
            }
        }, {
            key: "dispose",
            value: function() {
                this.removeFromParent(), this._relations.dispose(), this._displayObject.destroy(), 
                this._displayObject = null;
                for (var t = 0; t < 10; t++) {
                    var e = this._gears[t];
                    null != e && e.dispose();
                }
            }
        }, {
            key: "onClick",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.on(Laya.Event.CLICK, t, e, i);
            }
        }, {
            key: "offClick",
            value: function(t, e) {
                this.off(Laya.Event.CLICK, t, e);
            }
        }, {
            key: "hasClickListener",
            value: function() {
                return this._displayObject.hasListener(Laya.Event.CLICK);
            }
        }, {
            key: "on",
            value: function(t, e, i) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                this._displayObject.on(t, e, i, s);
            }
        }, {
            key: "off",
            value: function(t, e, i) {
                this._displayObject.off(t, e, i);
            }
        }, {
            key: "startDrag",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                null != this._displayObject.stage && this.dragBegin();
            }
        }, {
            key: "stopDrag",
            value: function() {
                this.dragEnd();
            }
        }, {
            key: "localToGlobal",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this._pivotAsAnchor && (t += this._pivotX * this._width, e += this._pivotY * this._height), 
                i ? (i.x = t, i.y = e, this._displayObject.localToGlobal(i, !1)) : ((i = GObject.sHelperPoint).x = t, 
                i.y = e, this._displayObject.localToGlobal(i, !0));
            }
        }, {
            key: "globalToLocal",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return i ? (i.x = t, i.y = e, this._displayObject.globalToLocal(i, !1)) : ((i = GObject.sHelperPoint).x = t, 
                i.y = e, i = this._displayObject.globalToLocal(i, !0)), this._pivotAsAnchor && (i.x -= this._pivotX * this._width, 
                i.y -= this._pivotY * this._height), i;
            }
        }, {
            key: "localToGlobalRect",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                null == n && (n = new Laya.Rectangle());
                var a = this.localToGlobal(t, e);
                return n.x = a.x, n.y = a.y, a = this.localToGlobal(t + i, e + s), n.width = a.x - n.x, 
                n.height = a.y - n.y, n;
            }
        }, {
            key: "globalToLocalRect",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                null == n && (n = new Laya.Rectangle());
                var a = this.globalToLocal(t, e);
                return n.x = a.x, n.y = a.y, a = this.globalToLocal(t + i, e + s), n.width = a.x - n.x, 
                n.height = a.y - n.y, n;
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                this._handlingController = !0;
                for (var e = 0; e < 10; e++) {
                    var i = this._gears[e];
                    null != i && i.controller == t && i.apply();
                }
                this._handlingController = !1, this.checkGearDisplay();
            }
        }, {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = new Laya.Sprite(), this._displayObject.$owner = this;
            }
        }, {
            key: "handleXYChanged",
            value: function() {
                var t = this._x, e = this._y + this._yOffset;
                this._pivotAsAnchor && (t -= this._pivotX * this._width, e -= this._pivotY * this._height), 
                this._pixelSnapping && (t = Math.round(t), e = Math.round(e)), this._displayObject.pos(t + this._pivotOffsetX, e + this._pivotOffsetY);
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                this._displayObject.size(this._width, this._height);
            }
        }, {
            key: "handleScaleChanged",
            value: function() {
                this._displayObject.scale(this._scaleX, this._scaleY, !0);
            }
        }, {
            key: "handleGrayedChanged",
            value: function() {
                t.ToolSet.setColorFilter(this._displayObject, this._grayed);
            }
        }, {
            key: "handleAlphaChanged",
            value: function() {
                this._displayObject.alpha = this._alpha;
            }
        }, {
            key: "handleVisibleChanged",
            value: function() {
                this._displayObject.visible = this.internalVisible2;
            }
        }, {
            key: "getProp",
            value: function(e) {
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
            value: function(e, i) {
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
            value: function() {}
        }, {
            key: "setup_beforeAdd",
            value: function(e, i) {
                var s, n;
                e.seek(i, 0), e.skip(5), this._id = e.readS(), this._name = e.readS(), s = e.getInt32(), 
                n = e.getInt32(), this.setXY(s, n), e.readBool() && (this.initWidth = e.getInt32(), 
                this.initHeight = e.getInt32(), this.setSize(this.initWidth, this.initHeight, !0)), 
                e.readBool() && (this.minWidth = e.getInt32(), this.maxWidth = e.getInt32(), this.minHeight = e.getInt32(), 
                this.maxHeight = e.getInt32()), e.readBool() && (s = e.getFloat32(), n = e.getFloat32(), 
                this.setScale(s, n)), e.readBool() && (s = e.getFloat32(), n = e.getFloat32(), this.setSkew(s, n)), 
                e.readBool() && (s = e.getFloat32(), n = e.getFloat32(), this.setPivot(s, n, e.readBool())), 
                1 != (s = e.getFloat32()) && (this.alpha = s), 0 != (s = e.getFloat32()) && (this.rotation = s), 
                e.readBool() || (this.visible = !1), e.readBool() || (this.touchable = !1), e.readBool() && (this.grayed = !0), 
                2 == e.readByte() && (this.blendMode = "lighter"), 1 == e.readByte() && t.ToolSet.setColorFilter(this._displayObject, [ e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32() ]);
                var a = e.readS();
                null != a && (this.data = a);
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                t.seek(e, 1);
                var i = t.readS();
                null != i && (this.tooltips = i);
                var s = t.getInt16();
                s >= 0 && (this.group = this.parent.getChildAt(s)), t.seek(e, 2);
                for (var n = t.getInt16(), a = 0; a < n; a++) {
                    var o = t.getInt16();
                    o += t.pos, this.getGear(t.readByte()).setup(t), t.pos = o;
                }
            }
        }, {
            key: "initDrag",
            value: function() {
                this._draggable ? this.on(Laya.Event.MOUSE_DOWN, this, this.__begin) : this.off(Laya.Event.MOUSE_DOWN, this, this.__begin);
            }
        }, {
            key: "dragBegin",
            value: function() {
                null != GObject.draggingObject && GObject.draggingObject.stopDrag(), GObject.sGlobalDragStart.x = Laya.stage.mouseX, 
                GObject.sGlobalDragStart.y = Laya.stage.mouseY, this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect), 
                GObject.draggingObject = this, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving2), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end2);
            }
        }, {
            key: "dragEnd",
            value: function() {
                GObject.draggingObject == this && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__moving2), 
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__end2), GObject.draggingObject = null), 
                GObject.sDraggingQuery = !1;
            }
        }, {
            key: "reset",
            value: function() {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__moving), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__begin",
            value: function() {
                null == this._touchDownPoint && (this._touchDownPoint = new Laya.Point()), this._touchDownPoint.x = Laya.stage.mouseX, 
                this._touchDownPoint.y = Laya.stage.mouseY, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__end",
            value: function() {
                this.reset();
            }
        }, {
            key: "__moving",
            value: function(e) {
                var i = t.UIConfig.touchDragSensitivity;
                null != this._touchDownPoint && Math.abs(this._touchDownPoint.x - Laya.stage.mouseX) < i && Math.abs(this._touchDownPoint.y - Laya.stage.mouseY) < i || (this.reset(), 
                GObject.sDraggingQuery = !0, t.Events.dispatch(t.Events.DRAG_START, this._displayObject, e), 
                GObject.sDraggingQuery && this.dragBegin());
            }
        }, {
            key: "__moving2",
            value: function(e) {
                var i = Laya.stage.mouseX - GObject.sGlobalDragStart.x + GObject.sGlobalRect.x, s = Laya.stage.mouseY - GObject.sGlobalDragStart.y + GObject.sGlobalRect.y;
                if (null != this._dragBounds) {
                    var n = t.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, GObject.sDragHelperRect);
                    i < n.x ? i = n.x : i + GObject.sGlobalRect.width > n.right && (i = n.right - GObject.sGlobalRect.width) < n.x && (i = n.x), 
                    s < n.y ? s = n.y : s + GObject.sGlobalRect.height > n.bottom && (s = n.bottom - GObject.sGlobalRect.height) < n.y && (s = n.y);
                }
                GObject.sUpdateInDragging = !0;
                var a = this.parent.globalToLocal(i, s, GObject.sHelperPoint);
                this.setXY(Math.round(a.x), Math.round(a.y)), GObject.sUpdateInDragging = !1, t.Events.dispatch(t.Events.DRAG_MOVE, this._displayObject, e);
            }
        }, {
            key: "__end2",
            value: function(e) {
                GObject.draggingObject == this && (this.stopDrag(), t.Events.dispatch(t.Events.DRAG_END, this._displayObject, e));
            }
        }, {
            key: "id",
            get: function() {
                return this._id;
            }
        }, {
            key: "name",
            get: function() {
                return this._name;
            },
            set: function(t) {
                this._name = t;
            }
        }, {
            key: "x",
            get: function() {
                return this._x;
            },
            set: function(t) {
                this.setXY(t, this._y);
            }
        }, {
            key: "y",
            get: function() {
                return this._y;
            },
            set: function(t) {
                this.setXY(this._x, t);
            }
        }, {
            key: "xMin",
            get: function() {
                return this._pivotAsAnchor ? this._x - this._width * this._pivotX : this._x;
            },
            set: function(t) {
                this._pivotAsAnchor ? this.setXY(t + this._width * this._pivotX, this._y) : this.setXY(t, this._y);
            }
        }, {
            key: "yMin",
            get: function() {
                return this._pivotAsAnchor ? this._y - this._height * this._pivotY : this._y;
            },
            set: function(t) {
                this._pivotAsAnchor ? this.setXY(this._x, t + this._height * this._pivotY) : this.setXY(this._x, t);
            }
        }, {
            key: "pixelSnapping",
            get: function() {
                return this._pixelSnapping;
            },
            set: function(t) {
                this._pixelSnapping != t && (this._pixelSnapping = t, this.handleXYChanged());
            }
        }, {
            key: "width",
            get: function() {
                return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), 
                this._width;
            },
            set: function(t) {
                this.setSize(t, this._rawHeight);
            }
        }, {
            key: "height",
            get: function() {
                return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), 
                this._height;
            },
            set: function(t) {
                this.setSize(this._rawWidth, t);
            }
        }, {
            key: "actualWidth",
            get: function() {
                return this.width * Math.abs(this._scaleX);
            }
        }, {
            key: "actualHeight",
            get: function() {
                return this.height * Math.abs(this._scaleY);
            }
        }, {
            key: "scaleX",
            get: function() {
                return this._scaleX;
            },
            set: function(t) {
                this.setScale(t, this._scaleY);
            }
        }, {
            key: "scaleY",
            get: function() {
                return this._scaleY;
            },
            set: function(t) {
                this.setScale(this._scaleX, t);
            }
        }, {
            key: "skewX",
            get: function() {
                return this._skewX;
            },
            set: function(t) {
                this.setSkew(t, this._skewY);
            }
        }, {
            key: "skewY",
            get: function() {
                return this._skewY;
            },
            set: function(t) {
                this.setSkew(this._skewX, t);
            }
        }, {
            key: "pivotX",
            get: function() {
                return this._pivotX;
            },
            set: function(t) {
                this.setPivot(t, this._pivotY);
            }
        }, {
            key: "pivotY",
            get: function() {
                return this._pivotY;
            },
            set: function(t) {
                this.setPivot(this._pivotX, t);
            }
        }, {
            key: "pivotAsAnchor",
            get: function() {
                return this._pivotAsAnchor;
            }
        }, {
            key: "touchable",
            get: function() {
                return this._touchable;
            },
            set: function(e) {
                if (this._touchable != e) {
                    if (this._touchable = e, this.updateGear(3), this instanceof t.GImage || this instanceof t.GMovieClip || this instanceof t.GTextField && !(this instanceof t.GTextInput) && !(this instanceof t.GRichTextField)) return;
                    null != this._displayObject && (this._displayObject.mouseEnabled = this._touchable);
                }
            }
        }, {
            key: "grayed",
            get: function() {
                return this._grayed;
            },
            set: function(t) {
                this._grayed != t && (this._grayed = t, this.handleGrayedChanged(), this.updateGear(3));
            }
        }, {
            key: "enabled",
            get: function() {
                return !this._grayed && this._touchable;
            },
            set: function(t) {
                this.grayed = !t, this.touchable = t;
            }
        }, {
            key: "rotation",
            get: function() {
                return this._rotation;
            },
            set: function(t) {
                this._rotation != t && (this._rotation = t, null != this._displayObject && (this._displayObject.rotation = this.normalizeRotation, 
                this.applyPivot()), this.updateGear(3));
            }
        }, {
            key: "normalizeRotation",
            get: function() {
                var t = this._rotation % 360;
                return t > 180 ? t -= 360 : t < -180 && (t = 360 + t), t;
            }
        }, {
            key: "alpha",
            get: function() {
                return this._alpha;
            },
            set: function(t) {
                this._alpha != t && (this._alpha = t, this.handleAlphaChanged(), this.updateGear(3));
            }
        }, {
            key: "visible",
            get: function() {
                return this._visible;
            },
            set: function(t) {
                this._visible != t && (this._visible = t, this.handleVisibleChanged(), this._parent && this._parent.setBoundsChangedFlag(), 
                this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag());
            }
        }, {
            key: "internalVisible",
            get: function() {
                return this._internalVisible && (!this._group || this._group.internalVisible) && !this._displayObject._cacheStyle.maskParent;
            }
        }, {
            key: "internalVisible2",
            get: function() {
                return this._visible && (!this._group || this._group.internalVisible2);
            }
        }, {
            key: "internalVisible3",
            get: function() {
                return this._internalVisible && this._visible;
            }
        }, {
            key: "sortingOrder",
            get: function() {
                return this._sortingOrder;
            },
            set: function(t) {
                if (t < 0 && (t = 0), this._sortingOrder != t) {
                    var e = this._sortingOrder;
                    this._sortingOrder = t, null != this._parent && this._parent.childSortingOrderChanged(this, e, this._sortingOrder);
                }
            }
        }, {
            key: "focusable",
            get: function() {
                return this._focusable;
            },
            set: function(t) {
                this._focusable = t;
            }
        }, {
            key: "focused",
            get: function() {
                return this.root.focus == this;
            }
        }, {
            key: "tooltips",
            get: function() {
                return this._tooltips;
            },
            set: function(t) {
                this._tooltips && (this.off(Laya.Event.ROLL_OVER, this, this.__rollOver), this.off(Laya.Event.ROLL_OUT, this, this.__rollOut)), 
                this._tooltips = t, this._tooltips && (this.on(Laya.Event.ROLL_OVER, this, this.__rollOver), 
                this.on(Laya.Event.ROLL_OUT, this, this.__rollOut));
            }
        }, {
            key: "blendMode",
            get: function() {
                return this._displayObject.blendMode;
            },
            set: function(t) {
                this._displayObject.blendMode = t;
            }
        }, {
            key: "filters",
            get: function() {
                return this._displayObject.filters;
            },
            set: function(t) {
                this._displayObject.filters = t;
            }
        }, {
            key: "inContainer",
            get: function() {
                return null != this._displayObject && null != this._displayObject.parent;
            }
        }, {
            key: "onStage",
            get: function() {
                return null != this._displayObject && null != this._displayObject.stage;
            }
        }, {
            key: "resourceURL",
            get: function() {
                return null != this.packageItem ? "ui://" + this.packageItem.owner.id + this.packageItem.id : null;
            }
        }, {
            key: "group",
            set: function(t) {
                this._group != t && (null != this._group && this._group.setBoundsChangedFlag(), 
                this._group = t, null != this._group && this._group.setBoundsChangedFlag());
            },
            get: function() {
                return this._group;
            }
        }, {
            key: "relations",
            get: function() {
                return this._relations;
            }
        }, {
            key: "displayObject",
            get: function() {
                return this._displayObject;
            }
        }, {
            key: "parent",
            get: function() {
                return this._parent;
            },
            set: function(t) {
                this._parent = t;
            }
        }, {
            key: "root",
            get: function() {
                if (this instanceof t.GRoot) return this;
                for (var e = this._parent; e; ) {
                    if (e instanceof t.GRoot) return e;
                    e = e.parent;
                }
                return t.GRoot.inst;
            }
        }, {
            key: "asCom",
            get: function() {
                return this;
            }
        }, {
            key: "asButton",
            get: function() {
                return this;
            }
        }, {
            key: "asLabel",
            get: function() {
                return this;
            }
        }, {
            key: "asProgress",
            get: function() {
                return this;
            }
        }, {
            key: "asTextField",
            get: function() {
                return this;
            }
        }, {
            key: "asRichTextField",
            get: function() {
                return this;
            }
        }, {
            key: "asTextInput",
            get: function() {
                return this;
            }
        }, {
            key: "asLoader",
            get: function() {
                return this;
            }
        }, {
            key: "asList",
            get: function() {
                return this;
            }
        }, {
            key: "asTree",
            get: function() {
                return this;
            }
        }, {
            key: "asGraph",
            get: function() {
                return this;
            }
        }, {
            key: "asGroup",
            get: function() {
                return this;
            }
        }, {
            key: "asSlider",
            get: function() {
                return this;
            }
        }, {
            key: "asComboBox",
            get: function() {
                return this;
            }
        }, {
            key: "asImage",
            get: function() {
                return this;
            }
        }, {
            key: "asMovieClip",
            get: function() {
                return this;
            }
        }, {
            key: "text",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "icon",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "treeNode",
            get: function() {
                return this._treeNode;
            }
        }, {
            key: "isDisposed",
            get: function() {
                return null == this._displayObject;
            }
        }, {
            key: "draggable",
            get: function() {
                return this._draggable;
            },
            set: function(t) {
                this._draggable != t && (this._draggable = t, this.initDrag());
            }
        }, {
            key: "dragBounds",
            get: function() {
                return this._dragBounds;
            },
            set: function(t) {
                this._dragBounds = t;
            }
        }, {
            key: "dragging",
            get: function() {
                return GObject.draggingObject == this;
            }
        } ], [ {
            key: "cast",
            value: function(t) {
                return t.$owner;
            }
        } ]), GObject;
    }();
    e._gInstanceCounter = 0, e.sGlobalDragStart = new Laya.Point(), e.sGlobalRect = new Laya.Rectangle(), 
    e.sHelperPoint = new Laya.Point(), e.sDragHelperRect = new Laya.Rectangle(), t.GObject = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GTextField() {
            var e;
            return _classCallCheck(this, GTextField), (e = _possibleConstructorReturn(this, _getPrototypeOf(GTextField).call(this)))._gearColor = new t.GearColor(_assertThisInitialized(e)), 
            e;
        }
        return _inherits(GTextField, t.GObject), _createClass(GTextField, [ {
            key: "updateAutoSize",
            value: function() {}
        }, {
            key: "parseTemplate",
            value: function(t) {
                for (var e, i, s, n, a = 0, o = ""; -1 != (e = t.indexOf("{", a)); ) if (e > 0 && 92 == t.charCodeAt(e - 1)) o += t.substring(a, e - 1), 
                o += "{", a = e + 1; else {
                    if (o += t.substring(a, e), a = e, -1 == (e = t.indexOf("}", a))) break;
                    e != a + 1 ? (-1 != (i = (s = t.substring(a + 1, e)).indexOf("=")) ? o += null == (n = this._templateVars[s.substring(0, i)]) ? s.substring(i + 1) : n : null != (n = this._templateVars[s]) && (o += n), 
                    a = e + 1) : (o += t.substr(a, 2), a = e + 1);
                }
                return a < t.length && (o += t.substr(a)), o;
            }
        }, {
            key: "setVar",
            value: function(t, e) {
                return this._templateVars || (this._templateVars = {}), this._templateVars[t] = e, 
                this;
            }
        }, {
            key: "flushVars",
            value: function() {
                this.text = this._text;
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                _get(_getPrototypeOf(GTextField.prototype), "handleControllerChanged", this).call(this, t), 
                this._gearColor.controller == t && this._gearColor.apply();
            }
        }, {
            key: "getProp",
            value: function(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.color;

                  case t.ObjectPropID.OutlineColor:
                    return this.strokeColor;

                  case t.ObjectPropID.FontSize:
                    return this.fontSize;

                  default:
                    return _get(_getPrototypeOf(GTextField.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GTextField.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                var i;
                _get(_getPrototypeOf(GTextField.prototype), "setup_beforeAdd", this).call(this, t, e), 
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
            value: function(t, e) {
                _get(_getPrototypeOf(GTextField.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6);
                var i = t.readS();
                null != i && (this.text = i);
            }
        }, {
            key: "font",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "fontSize",
            get: function() {
                return 0;
            },
            set: function(t) {}
        }, {
            key: "color",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "align",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "valign",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "leading",
            get: function() {
                return 0;
            },
            set: function(t) {}
        }, {
            key: "letterSpacing",
            get: function() {
                return 0;
            },
            set: function(t) {}
        }, {
            key: "bold",
            get: function() {
                return !1;
            },
            set: function(t) {}
        }, {
            key: "italic",
            get: function() {
                return !1;
            },
            set: function(t) {}
        }, {
            key: "underline",
            get: function() {
                return !1;
            },
            set: function(t) {}
        }, {
            key: "singleLine",
            get: function() {
                return !1;
            },
            set: function(t) {}
        }, {
            key: "stroke",
            get: function() {
                return 0;
            },
            set: function(t) {}
        }, {
            key: "strokeColor",
            get: function() {
                return null;
            },
            set: function(t) {}
        }, {
            key: "ubbEnabled",
            set: function(t) {
                this._ubbEnabled = t;
            },
            get: function() {
                return this._ubbEnabled;
            }
        }, {
            key: "autoSize",
            get: function() {
                return this._autoSize;
            },
            set: function(e) {
                this._autoSize != e && (this._autoSize = e, this._widthAutoSize = this._autoSize == t.AutoSizeType.Both, 
                this._heightAutoSize = this._autoSize == t.AutoSizeType.Both || this._autoSize == t.AutoSizeType.Height, 
                this.updateAutoSize());
            }
        }, {
            key: "textWidth",
            get: function() {
                return 0;
            }
        }, {
            key: "templateVars",
            get: function() {
                return this._templateVars;
            },
            set: function(t) {
                null == this._templateVars && null == t || (this._templateVars = t, this.flushVars());
            }
        } ]), GTextField;
    }();
    t.GTextField = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GBasicTextField() {
            var e;
            return _classCallCheck(this, GBasicTextField), (e = _possibleConstructorReturn(this, _getPrototypeOf(GBasicTextField).call(this)))._letterSpacing = 0, 
            e._textWidth = 0, e._textHeight = 0, e._text = "", e._color = "#000000", e._textField.align = "left", 
            e._textField.font = t.UIConfig.defaultFont, e._autoSize = t.AutoSizeType.Both, e._widthAutoSize = e._heightAutoSize = !0, 
            e._textField._sizeDirty = !1, e;
        }
        return _inherits(GBasicTextField, t.GTextField), _createClass(GBasicTextField, [ {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = this._textField = new s(this), this._displayObject.$owner = this, 
                this._displayObject.mouseEnabled = !1;
            }
        }, {
            key: "updateAutoSize",
            value: function() {
                this._textField.wordWrap = !this._widthAutoSize && !this._singleLine, this._underConstruct || (this._heightAutoSize ? this._widthAutoSize || (this._textField.width = this.width) : this._textField.size(this.width, this.height));
            }
        }, {
            key: "ensureSizeCorrect",
            value: function() {
                !this._underConstruct && this._textField._isChanged && this._textField.typeset();
            }
        }, {
            key: "typeset",
            value: function() {
                null != this._bitmapFont ? this.renderWithBitmapFont() : (this._widthAutoSize || this._heightAutoSize) && this.updateSize();
            }
        }, {
            key: "updateSize",
            value: function() {
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
            value: function() {
                var e = this._displayObject.graphics;
                e.clear(), this._lines ? i.returnList(this._lines) : this._lines = new Array();
                var s, n = this.leading - 1, a = this.width - 2 * GBasicTextField.GUTTER_X, o = 0, r = 0, l = 0, h = 0, u = 0, _ = 0, c = 0, d = 0, g = 0, p = "", f = GBasicTextField.GUTTER_Y, y = !this._widthAutoSize && !this._singleLine, v = this.fontSize, m = this._bitmapFont.resizable ? v / this._bitmapFont.size : 1;
                this._textWidth = 0, this._textHeight = 0;
                var C = this._text;
                null != this._templateVars && (C = this.parseTemplate(C));
                for (var k = C.length, w = 0; w < k; ++w) {
                    var b = C.charAt(w), S = b.charCodeAt(0);
                    if (10 != S) {
                        if (S >= 65 && S <= 90 || S >= 97 && S <= 122 ? (0 == _ && (c = o), _++) : (_ > 0 && (d = o), 
                        _ = 0), 32 == S) h = Math.ceil(v / 2), u = v; else {
                            var x = this._bitmapFont.glyphs[b];
                            x ? (h = Math.ceil(x.advance * m), u = Math.ceil(x.lineHeight * m)) : (h = 0, u = 0);
                        }
                        if (u > l && (l = u), u > r && (r = u), 0 != o && (o += this._letterSpacing), o += h, 
                        !y || o <= a) p += b; else {
                            if ((s = i.borrow()).height = r, s.textHeight = l, 0 == p.length) s.text = b; else if (_ > 0 && d > 0) {
                                var I = (p += b).length - _;
                                s.text = t.ToolSet.trimRight(p.substr(0, I)), s.width = d, p = p.substr(I), o -= c;
                            } else s.text = p, s.width = o - (h + this._letterSpacing), p = b, o = h, r = u, 
                            l = u;
                            s.y = f, f += s.height + n, s.width > this._textWidth && (this._textWidth = s.width), 
                            _ = 0, c = 0, d = 0, this._lines.push(s);
                        }
                    } else p += b, (s = i.borrow()).width = o, 0 == l && (0 == g && (g = v), 0 == r && (r = g), 
                    l = r), s.height = r, g = r, s.textHeight = l, s.text = p, s.y = f, f += s.height + n, 
                    s.width > this._textWidth && (this._textWidth = s.width), this._lines.push(s), p = "", 
                    o = 0, r = 0, l = 0, _ = 0, c = 0, d = 0;
                }
                p.length > 0 && ((s = i.borrow()).width = o, 0 == r && (r = g), 0 == l && (l = r), 
                s.height = r, s.textHeight = l, s.text = p, s.y = f, s.width > this._textWidth && (this._textWidth = s.width), 
                this._lines.push(s)), this._textWidth > 0 && (this._textWidth += 2 * GBasicTextField.GUTTER_X), 
                0 == this._lines.length ? this._textHeight = 0 : (s = this._lines[this._lines.length - 1], 
                this._textHeight = s.y + s.height + GBasicTextField.GUTTER_Y);
                var T, P = 0;
                if (T = this._widthAutoSize ? 0 == this._textWidth ? 0 : this._textWidth : this.width, 
                P = this._heightAutoSize ? 0 == this._textHeight ? 0 : this._textHeight : this.height, 
                this._updatingSize = !0, this.setSize(T, P), this._updatingSize = !1, this.doAlign(), 
                0 != T && 0 != P) {
                    var O = GBasicTextField.GUTTER_X, L = 0, G = 0;
                    a = this.width - 2 * GBasicTextField.GUTTER_X;
                    for (var B = this._lines.length, M = this._bitmapFont.tint ? this._color : null, j = 0; j < B; j++) {
                        s = this._lines[j], O = GBasicTextField.GUTTER_X, L = "center" == this.align ? (a - s.width) / 2 : "right" == this.align ? a - s.width : 0, 
                        k = s.text.length;
                        for (var E = 0; E < k; E++) 10 != (S = (b = s.text.charAt(E)).charCodeAt(0)) && (32 != S ? null != (x = this._bitmapFont.glyphs[b]) ? (G = (s.height + s.textHeight) / 2 - Math.ceil(x.lineHeight * m), 
                        x.texture && e.drawTexture(x.texture, O + L + Math.ceil(x.x * m), s.y + G + Math.ceil(x.y * m), x.xMax * m, x.yMax * m, null, 1, M), 
                        O += this._letterSpacing + Math.ceil(x.advance * m)) : O += this._letterSpacing : O += this._letterSpacing + Math.ceil(v / 2));
                    }
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                this._updatingSize || (this._underConstruct ? this._textField.size(this._width, this._height) : null != this._bitmapFont ? this._widthAutoSize ? this.doAlign() : this._textField.setChanged() : this._widthAutoSize || (this._heightAutoSize ? this._textField.width = this._width : this._textField.size(this._width, this._height)));
            }
        }, {
            key: "handleGrayedChanged",
            value: function() {
                _get(_getPrototypeOf(GBasicTextField.prototype), "handleGrayedChanged", this).call(this), 
                this.grayed ? this._textField.color = "#AAAAAA" : this._textField.color = this._color;
            }
        }, {
            key: "doAlign",
            value: function() {
                if ("top" == this.valign || 0 == this._textHeight) this._yOffset = GBasicTextField.GUTTER_Y; else {
                    var t = this.height - this._textHeight;
                    t < 0 && (t = 0), "middle" == this.valign ? this._yOffset = Math.floor(t / 2) : this._yOffset = Math.floor(t);
                }
                this.handleXYChanged();
            }
        }, {
            key: "flushVars",
            value: function() {
                this.text = this._text;
            }
        }, {
            key: "nativeText",
            get: function() {
                return this._textField;
            }
        }, {
            key: "text",
            set: function(e) {
                if (this._text = e, null == this._text && (this._text = ""), null == this._bitmapFont) {
                    this._widthAutoSize && (this._textField.width = 1e4);
                    var i = this._text;
                    null != this._templateVars && (i = this.parseTemplate(i)), this._ubbEnabled ? this._textField.text = t.ToolSet.removeUBB(t.ToolSet.encodeHTML(i)) : this._textField.text = i;
                } else this._textField.text = "", this._textField.setChanged();
                this.parent && this.parent._underConstruct && this._textField.typeset();
            },
            get: function() {
                return this._text;
            }
        }, {
            key: "font",
            get: function() {
                return this._textField.font;
            },
            set: function(e) {
                this._font = e, t.ToolSet.startsWith(this._font, "ui://") ? this._bitmapFont = t.UIPackage.getItemAssetByURL(this._font) : this._bitmapFont = null, 
                null != this._bitmapFont ? this._textField.setChanged() : this._font ? this._textField.font = this._font : this._textField.font = t.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function() {
                return this._textField.fontSize;
            },
            set: function(t) {
                this._textField.fontSize = t;
            }
        }, {
            key: "color",
            get: function() {
                return this._color;
            },
            set: function(t) {
                this._color != t && (this._color = t, this._gearColor.controller && this._gearColor.updateState(), 
                this.grayed ? this._textField.color = "#AAAAAA" : this._textField.color = this._color);
            }
        }, {
            key: "align",
            get: function() {
                return this._textField.align;
            },
            set: function(t) {
                this._textField.align = t;
            }
        }, {
            key: "valign",
            get: function() {
                return this._textField.valign;
            },
            set: function(t) {
                this._textField.valign = t;
            }
        }, {
            key: "leading",
            get: function() {
                return this._textField.leading;
            },
            set: function(t) {
                this._textField.leading = t;
            }
        }, {
            key: "letterSpacing",
            get: function() {
                return this._letterSpacing;
            },
            set: function(t) {
                this._letterSpacing = t;
            }
        }, {
            key: "bold",
            get: function() {
                return this._textField.bold;
            },
            set: function(t) {
                this._textField.bold = t;
            }
        }, {
            key: "italic",
            get: function() {
                return this._textField.italic;
            },
            set: function(t) {
                this._textField.italic = t;
            }
        }, {
            key: "underline",
            get: function() {
                return this._textField.underline;
            },
            set: function(t) {
                this._textField.underline = t;
            }
        }, {
            key: "singleLine",
            get: function() {
                return this._singleLine;
            },
            set: function(t) {
                this._singleLine = t, this._textField.wordWrap = !this._widthAutoSize && !this._singleLine;
            }
        }, {
            key: "stroke",
            get: function() {
                return this._textField.stroke;
            },
            set: function(t) {
                this._textField.stroke = t;
            }
        }, {
            key: "strokeColor",
            get: function() {
                return this._textField.strokeColor;
            },
            set: function(t) {
                this._textField.strokeColor = t, this.updateGear(4);
            }
        }, {
            key: "textWidth",
            get: function() {
                return this._textField._isChanged && this._textField.typeset(), this._textWidth;
            }
        } ]), GBasicTextField;
    }();
    e.GUTTER_X = 2, e.GUTTER_Y = 2, t.GBasicTextField = e;
    var i = function() {
        function LineInfo() {
            _classCallCheck(this, LineInfo), this.width = 0, this.height = 0, this.textHeight = 0, 
            this.y = 0;
        }
        return _createClass(LineInfo, null, [ {
            key: "borrow",
            value: function() {
                if (LineInfo.pool.length) {
                    var t = LineInfo.pool.pop();
                    return t.width = 0, t.height = 0, t.textHeight = 0, t.text = null, t.y = 0, t;
                }
                return new LineInfo();
            }
        }, {
            key: "returns",
            value: function(t) {
                LineInfo.pool.push(t);
            }
        }, {
            key: "returnList",
            value: function(t) {
                for (var e = t.length, i = 0; i < e; i++) {
                    var s = t[i];
                    LineInfo.pool.push(s);
                }
                t.length = 0;
            }
        } ]), LineInfo;
    }();
    i.pool = [];
    var s = function(e) {
        function TextExt(t) {
            var e;
            return _classCallCheck(this, TextExt), (e = _possibleConstructorReturn(this, _getPrototypeOf(TextExt).call(this)))._owner = t, 
            e;
        }
        return _inherits(TextExt, Laya.Text), _createClass(TextExt, [ {
            key: "baseTypeset",
            value: function() {
                this._lock = !0, this.typeset(), this._lock = !1;
            }
        }, {
            key: "typeset",
            value: function() {
                this._sizeDirty = !0, _get(_getPrototypeOf(TextExt.prototype), "typeset", this).call(this), 
                this._lock || this._owner.typeset(), this._isChanged && (Laya.timer.clear(this, this.typeset), 
                this._isChanged = !1), this._sizeDirty = !1;
            }
        }, {
            key: "setChanged",
            value: function() {
                this.isChanged = !0;
            }
        }, {
            key: "isChanged",
            set: function(e) {
                e && !this._sizeDirty && this._owner.autoSize != t.AutoSizeType.None && this._owner.parent && (this._sizeDirty = !0, 
                this.event(t.Events.SIZE_DELAY_CHANGE)), _set(_getPrototypeOf(TextExt.prototype), "isChanged", e, this, !0);
            }
        } ]), TextExt;
    }();
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function Margin() {
            _classCallCheck(this, Margin), this.left = 0, this.right = 0, this.top = 0, this.bottom = 0;
        }
        return _createClass(Margin, [ {
            key: "copy",
            value: function(t) {
                this.top = t.top, this.bottom = t.bottom, this.left = t.left, this.right = t.right;
            }
        } ]), Margin;
    }();
    t.Margin = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GComponent() {
            var e;
            return _classCallCheck(this, GComponent), (e = _possibleConstructorReturn(this, _getPrototypeOf(GComponent).call(this)))._sortingChildCount = 0, 
            e._mask = null, e._children = [], e._controllers = [], e._transitions = [], e._margin = new t.Margin(), 
            e._alignOffset = new Laya.Point(), e._opaque = !1, e._childrenRenderOrder = 0, e._apexIndex = 0, 
            e;
        }
        return _inherits(GComponent, t.GObject), _createClass(GComponent, [ {
            key: "createDisplayObject",
            value: function() {
                _get(_getPrototypeOf(GComponent.prototype), "createDisplayObject", this).call(this), 
                this._displayObject.mouseEnabled = !0, this._displayObject.mouseThrough = !0, this._container = this._displayObject;
            }
        }, {
            key: "dispose",
            value: function() {
                var t, e;
                for (e = this._transitions.length, t = 0; t < e; ++t) {
                    this._transitions[t].dispose();
                }
                for (e = this._controllers.length, t = 0; t < e; ++t) {
                    this._controllers[t].dispose();
                }
                for (null != this.scrollPane && this.scrollPane.dispose(), t = (e = this._children.length) - 1; t >= 0; --t) {
                    var i = this._children[t];
                    i.parent = null, i.dispose();
                }
                this._boundsChanged = !1, this._mask = null, _get(_getPrototypeOf(GComponent.prototype), "dispose", this).call(this);
            }
        }, {
            key: "addChild",
            value: function(t) {
                return this.addChildAt(t, this._children.length), t;
            }
        }, {
            key: "addChildAt",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
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
            value: function(t) {
                var e = this._children.length, i = 0;
                for (i = 0; i < e; i++) {
                    var s = this._children[i];
                    if (s != t && t.sortingOrder < s.sortingOrder) break;
                }
                return i;
            }
        }, {
            key: "removeChild",
            value: function(t, e) {
                var i = this._children.indexOf(t);
                return -1 != i && this.removeChildAt(i, e), t;
            }
        }, {
            key: "removeChildAt",
            value: function(e, i) {
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
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments.length > 2 ? arguments[2] : void 0;
                (e < 0 || e >= this._children.length) && (e = this._children.length - 1);
                for (var s = t; s <= e; ++s) this.removeChildAt(t, i);
            }
        }, {
            key: "getChildAt",
            value: function(t) {
                if (t >= 0 && t < this._children.length) return this._children[t];
                throw "Invalid child index";
            }
        }, {
            key: "getChild",
            value: function(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) if (this._children[i].name == t) return this._children[i];
                return null;
            }
        }, {
            key: "getChildByPath",
            value: function(t) {
                for (var e, i = t.split("."), s = i.length, n = this, a = 0; a < s && (e = n.getChild(i[a])); ++a) if (a != s - 1) {
                    if (!(n instanceof GComponent)) {
                        e = null;
                        break;
                    }
                    n = e;
                }
                return e;
            }
        }, {
            key: "getVisibleChild",
            value: function(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) {
                    var s = this._children[i];
                    if (s.internalVisible && s.internalVisible2 && s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "getChildInGroup",
            value: function(t, e) {
                for (var i = this._children.length, s = 0; s < i; ++s) {
                    var n = this._children[s];
                    if (n.group == e && n.name == t) return n;
                }
                return null;
            }
        }, {
            key: "getChildById",
            value: function(t) {
                for (var e = this._children.length, i = 0; i < e; ++i) if (this._children[i]._id == t) return this._children[i];
                return null;
            }
        }, {
            key: "getChildIndex",
            value: function(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "setChildIndex",
            value: function(t, e) {
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
            value: function(t, e) {
                var i = this._children.indexOf(t);
                if (-1 == i) throw "Not a child of this container";
                if (0 != t.sortingOrder) return i;
                var s = this._children.length;
                return this._sortingChildCount > 0 && e > s - this._sortingChildCount - 1 && (e = s - this._sortingChildCount - 1), 
                i < e ? this._setChildIndex(t, i, e - 1) : this._setChildIndex(t, i, e);
            }
        }, {
            key: "_setChildIndex",
            value: function(e, i, s) {
                var n = this._children.length;
                if (s > n && (s = n), i == s) return i;
                if (this._children.splice(i, 1), this._children.splice(s, 0, e), e.inContainer) {
                    var a, o = 0;
                    if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                        for (a = 0; a < s; a++) this._children[a].inContainer && o++;
                        o == this._container.numChildren && o--, this._container.setChildIndex(e.displayObject, o);
                    } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                        for (a = n - 1; a > s; a--) this._children[a].inContainer && o++;
                        o == this._container.numChildren && o--, this._container.setChildIndex(e.displayObject, o);
                    } else Laya.timer.callLater(this, this.buildNativeDisplayList);
                    this.setBoundsChangedFlag();
                }
                return s;
            }
        }, {
            key: "swapChildren",
            value: function(t, e) {
                var i = this._children.indexOf(t), s = this._children.indexOf(e);
                if (-1 == i || -1 == s) throw "Not a child of this container";
                this.swapChildrenAt(i, s);
            }
        }, {
            key: "swapChildrenAt",
            value: function(t, e) {
                var i = this._children[t], s = this._children[e];
                this.setChildIndex(i, e), this.setChildIndex(s, t);
            }
        }, {
            key: "isAncestorOf",
            value: function(t) {
                if (null == t) return !1;
                for (var e = t.parent; e; ) {
                    if (e == this) return !0;
                    e = e.parent;
                }
                return !1;
            }
        }, {
            key: "addController",
            value: function(t) {
                this._controllers.push(t), t.parent = this, this.applyController(t);
            }
        }, {
            key: "getControllerAt",
            value: function(t) {
                return this._controllers[t];
            }
        }, {
            key: "getController",
            value: function(t) {
                for (var e = this._controllers.length, i = 0; i < e; ++i) {
                    var s = this._controllers[i];
                    if (s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "removeController",
            value: function(t) {
                var e = this._controllers.indexOf(t);
                if (-1 == e) throw new Error("controller not exists");
                t.parent = null, this._controllers.splice(e, 1);
                for (var i = this._children.length, s = 0; s < i; s++) {
                    this._children[s].handleControllerChanged(t);
                }
            }
        }, {
            key: "childStateChanged",
            value: function(e) {
                if (!this._buildingDisplayList) {
                    var i = this._children.length;
                    if (e instanceof t.GGroup) for (var s = 0; s < i; s++) {
                        var n = this._children[s];
                        n.group == e && this.childStateChanged(n);
                    } else if (e.displayObject) if (e.internalVisible && e.displayObject != this._displayObject.mask) {
                        if (!e.displayObject.parent) {
                            var a = 0;
                            if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                                for (s = 0; s < i && (n = this._children[s]) != e; s++) null != n.displayObject && null != n.displayObject.parent && a++;
                                this._container.addChildAt(e.displayObject, a);
                            } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                                for (s = i - 1; s >= 0 && (n = this._children[s]) != e; s--) null != n.displayObject && null != n.displayObject.parent && a++;
                                this._container.addChildAt(e.displayObject, a);
                            } else this._container.addChild(e.displayObject), Laya.timer.callLater(this, this.buildNativeDisplayList);
                        }
                    } else e.displayObject.parent && (this._container.removeChild(e.displayObject), 
                    this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && Laya.timer.callLater(this, this.buildNativeDisplayList));
                }
            }
        }, {
            key: "buildNativeDisplayList",
            value: function() {
                if (this._displayObject) {
                    var e, i, s = this._children.length;
                    if (0 != s) switch (this._childrenRenderOrder) {
                      case t.ChildrenRenderOrder.Ascent:
                        for (e = 0; e < s; e++) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        break;

                      case t.ChildrenRenderOrder.Descent:
                        for (e = s - 1; e >= 0; e--) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        break;

                      case t.ChildrenRenderOrder.Arch:
                        var n = t.ToolSet.clamp(this._apexIndex, 0, s);
                        for (e = 0; e < n; e++) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                        for (e = s - 1; e >= n; e--) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                    }
                }
            }
        }, {
            key: "applyController",
            value: function(t) {
                this._applyingController = t;
                for (var e = this._children.length, i = 0; i < e; i++) this._children[i].handleControllerChanged(t);
                this._applyingController = null, t.runActions();
            }
        }, {
            key: "applyAllControllers",
            value: function() {
                for (var t = this._controllers.length, e = 0; e < t; ++e) this.applyController(this._controllers[e]);
            }
        }, {
            key: "adjustRadioGroupDepth",
            value: function(e, i) {
                var s, n, a = this._children.length, o = -1, r = -1;
                for (s = 0; s < a; s++) (n = this._children[s]) == e ? o = s : n instanceof t.GButton && n.relatedController == i && s > r && (r = s);
                o < r && (null != this._applyingController && this._children[r].handleControllerChanged(this._applyingController), 
                this.swapChildrenAt(o, r));
            }
        }, {
            key: "getTransitionAt",
            value: function(t) {
                return this._transitions[t];
            }
        }, {
            key: "getTransition",
            value: function(t) {
                for (var e = this._transitions.length, i = 0; i < e; ++i) {
                    var s = this._transitions[i];
                    if (s.name == t) return s;
                }
                return null;
            }
        }, {
            key: "isChildInView",
            value: function(t) {
                return null != this._displayObject.scrollRect ? t.x + t.width >= 0 && t.x <= this.width && t.y + t.height >= 0 && t.y <= this.height : null == this._scrollPane || this._scrollPane.isChildInView(t);
            }
        }, {
            key: "getFirstChildInView",
            value: function() {
                for (var t = this._children.length, e = 0; e < t; ++e) {
                    var i = this._children[e];
                    if (this.isChildInView(i)) return e;
                }
                return -1;
            }
        }, {
            key: "setMask",
            value: function(e, i) {
                if (this._mask && this._mask != e && "destination-out" == this._mask.blendMode && (this._mask.blendMode = null), 
                this._mask = e, !this._mask) return this._displayObject.mask = null, void (this._displayObject.hitArea instanceof t.ChildHitArea && (this._displayObject.hitArea = null));
                this._mask.hitArea && (this._displayObject.hitArea = new t.ChildHitArea(this._mask, i), 
                this._displayObject.mouseThrough = !1, this._displayObject.hitTestPrior = !0), i ? (this._displayObject.mask = null, 
                this._displayObject.cacheAs = "bitmap", this._mask.blendMode = "destination-out") : this._displayObject.mask = this._mask;
            }
        }, {
            key: "updateHitArea",
            value: function() {
                if (this._displayObject.hitArea instanceof t.PixelHitTest) {
                    var e = this._displayObject.hitArea;
                    0 != this.sourceWidth && (e.scaleX = this._width / this.sourceWidth), 0 != this.sourceHeight && (e.scaleY = this._height / this.sourceHeight);
                } else this._displayObject.hitArea instanceof Laya.Rectangle && this._displayObject.hitArea.setTo(0, 0, this._width, this._height);
            }
        }, {
            key: "updateMask",
            value: function() {
                var t = this._displayObject.scrollRect;
                null == t && (t = new Laya.Rectangle()), t.x = this._margin.left, t.y = this._margin.top, 
                t.width = this._width - this._margin.right, t.height = this._height - this._margin.bottom, 
                this._displayObject.scrollRect = t;
            }
        }, {
            key: "setupScroll",
            value: function(e) {
                this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this._scrollPane = new t.ScrollPane(this), 
                this._scrollPane.setup(e);
            }
        }, {
            key: "setupOverflow",
            value: function(e) {
                e == t.OverflowType.Hidden ? (this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this.updateMask(), this._container.pos(this._margin.left, this._margin.top)) : 0 == this._margin.left && 0 == this._margin.top || (this._displayObject == this._container && (this._container = new Laya.Sprite(), 
                this._displayObject.addChild(this._container)), this._container.pos(this._margin.left, this._margin.top));
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                _get(_getPrototypeOf(GComponent.prototype), "handleSizeChanged", this).call(this), 
                this._scrollPane ? this._scrollPane.onOwnerSizeChanged() : null != this._displayObject.scrollRect && this.updateMask(), 
                null != this._displayObject.hitArea && this.updateHitArea();
            }
        }, {
            key: "handleGrayedChanged",
            value: function() {
                var t = this.getController("grayed");
                if (null == t) for (var e = this.grayed, i = this._children.length, s = 0; s < i; ++s) this._children[s].grayed = e; else t.selectedIndex = this.grayed ? 1 : 0;
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                _get(_getPrototypeOf(GComponent.prototype), "handleControllerChanged", this).call(this, t), 
                null != this._scrollPane && this._scrollPane.handleControllerChanged(t);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function() {
                (this._scrollPane || this._trackBounds) && (this._boundsChanged || (this._boundsChanged = !0, 
                Laya.timer.callLater(this, this.__render)));
            }
        }, {
            key: "__render",
            value: function() {
                if (this._boundsChanged) {
                    var t = 0, e = this._children.length;
                    for (t = 0; t < e; t++) this._children[t].ensureSizeCorrect();
                    this.updateBounds();
                }
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function() {
                var t = 0, e = this._children.length;
                for (t = 0; t < e; t++) this._children[t].ensureSizeCorrect();
                this._boundsChanged && this.updateBounds();
            }
        }, {
            key: "updateBounds",
            value: function() {
                var t = 0, e = 0, i = 0, s = 0, n = this._children.length;
                if (n > 0) {
                    t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
                    var a = Number.NEGATIVE_INFINITY, o = Number.NEGATIVE_INFINITY, r = 0, l = 0;
                    for (l = 0; l < n; l++) {
                        var h = this._children[l];
                        (r = h.x) < t && (t = r), (r = h.y) < e && (e = r), (r = h.x + h.actualWidth) > a && (a = r), 
                        (r = h.y + h.actualHeight) > o && (o = r);
                    }
                    i = a - t, s = o - e;
                }
                this.setBounds(t, e, i, s);
            }
        }, {
            key: "setBounds",
            value: function(t, e, i, s) {
                this._boundsChanged = !1, this._scrollPane && this._scrollPane.setContentSize(Math.round(t + i), Math.round(e + s));
            }
        }, {
            key: "getSnappingPosition",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this.getSnappingPositionWithDir(t, e, 0, 0, i);
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function(t, e, i, s) {
                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                n || (n = new Laya.Point());
                var a = this._children.length;
                if (0 == a) return n.x = 0, n.y = 0, n;
                this.ensureBoundsCorrect();
                var o = null, r = null, l = 0;
                if (0 != e) {
                    for (;l < a; l++) if (e < (o = this._children[l]).y) {
                        if (0 == l) {
                            e = 0;
                            break;
                        }
                        e = e < (r = this._children[l - 1]).y + r.actualHeight / 2 ? r.y : o.y;
                        break;
                    }
                    l == a && (e = o.y);
                }
                if (0 != t) {
                    for (l > 0 && l--; l < a; l++) if (t < (o = this._children[l]).x) {
                        if (0 == l) {
                            t = 0;
                            break;
                        }
                        t = t < (r = this._children[l - 1]).x + r.actualWidth / 2 ? r.x : o.x;
                        break;
                    }
                    l == a && (t = o.x);
                }
                return n.x = t, n.y = e, n;
            }
        }, {
            key: "childSortingOrderChanged",
            value: function(t, e) {
                if (0 == (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)) this._sortingChildCount--, 
                this.setChildIndex(t, this._children.length); else {
                    0 == e && this._sortingChildCount++;
                    var i = this._children.indexOf(t), s = this.getInsertPosForSortingChild(t);
                    i < s ? this._setChildIndex(t, i, s - 1) : this._setChildIndex(t, i, s);
                }
            }
        }, {
            key: "constructFromResource",
            value: function() {
                this.constructFromResource2(null, 0);
            }
        }, {
            key: "constructFromResource2",
            value: function(e, i) {
                var s, n, a, o, r, l, h, u;
                this.packageItem.decoded || (this.packageItem.decoded = !0, t.TranslationHelper.translateComponent(this.packageItem));
                var _ = this.packageItem.rawData;
                _.seek(0, 0), this._underConstruct = !0, this.sourceWidth = _.getInt32(), this.sourceHeight = _.getInt32(), 
                this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), 
                _.readBool() && (this.minWidth = _.getInt32(), this.maxWidth = _.getInt32(), this.minHeight = _.getInt32(), 
                this.maxHeight = _.getInt32()), _.readBool() && (r = _.getFloat32(), l = _.getFloat32(), 
                this.internalSetPivot(r, l, _.readBool())), _.readBool() && (this._margin.top = _.getInt32(), 
                this._margin.bottom = _.getInt32(), this._margin.left = _.getInt32(), this._margin.right = _.getInt32());
                var c = _.readByte();
                if (c == t.OverflowType.Scroll) {
                    var d = _.pos;
                    _.seek(0, 7), this.setupScroll(_), _.pos = d;
                } else this.setupOverflow(c);
                _.readBool() && _.skip(8), this._buildingDisplayList = !0, _.seek(0, 1);
                var g, p = _.getInt16();
                for (s = 0; s < p; s++) {
                    o = _.getInt16(), o += _.pos;
                    var f = new t.Controller();
                    this._controllers.push(f), f.parent = this, f.setup(_), _.pos = o;
                }
                _.seek(0, 2);
                var y = _.getInt16();
                for (s = 0; s < y; s++) {
                    if (n = _.getInt16(), a = _.pos, null != e) g = e[i + s]; else {
                        _.seek(a, 0);
                        var v, m = _.readByte(), C = _.readS(), k = _.readS(), w = null;
                        if (null != C) w = null != (v = null != k ? t.UIPackage.getById(k) : this.packageItem.owner) ? v.getItemById(C) : null;
                        null != w ? ((g = t.UIObjectFactory.newObject(w)).packageItem = w, g.constructFromResource()) : g = t.UIObjectFactory.newObject2(m);
                    }
                    g._underConstruct = !0, g.setup_beforeAdd(_, a), g.parent = this, this._children.push(g), 
                    _.pos = a + n;
                }
                for (_.seek(0, 3), this.relations.setup(_, !0), _.seek(0, 2), _.skip(2), s = 0; s < y; s++) o = _.getInt16(), 
                o += _.pos, _.seek(_.pos, 3), this._children[s].relations.setup(_, !1), _.pos = o;
                for (_.seek(0, 2), _.skip(2), s = 0; s < y; s++) o = _.getInt16(), o += _.pos, (g = this._children[s]).setup_afterAdd(_, _.pos), 
                g._underConstruct = !1, _.pos = o;
                _.seek(0, 4), _.skip(2), this.opaque = _.readBool();
                var b = _.getInt16();
                -1 != b && this.setMask(this.getChildAt(b).displayObject, _.readBool());
                var S, x = _.readS();
                h = _.getInt32(), u = _.getInt32(), x ? (w = this.packageItem.owner.getItemById(x)) && w.pixelHitTestData && (S = new t.PixelHitTest(w.pixelHitTestData, h, u)) : 0 != h && -1 != u && (S = new t.ChildHitArea(this.getChildAt(u).displayObject)), 
                S && (this._displayObject.hitArea = S, this._displayObject.mouseThrough = !1, this._displayObject.hitTestPrior = !0), 
                _.seek(0, 5);
                var I = _.getInt16();
                for (s = 0; s < I; s++) {
                    o = _.getInt16(), o += _.pos;
                    var T = new t.Transition(this);
                    T.setup(_), this._transitions.push(T), _.pos = o;
                }
                this._transitions.length > 0 && (this.displayObject.on(Laya.Event.DISPLAY, this, this.___added), 
                this.displayObject.on(Laya.Event.UNDISPLAY, this, this.___removed)), this.applyAllControllers(), 
                this._buildingDisplayList = !1, this._underConstruct = !1, this.buildNativeDisplayList(), 
                this.setBoundsChangedFlag(), this.packageItem.objectType != t.ObjectType.Component && this.constructExtension(_), 
                this.onConstruct();
            }
        }, {
            key: "constructExtension",
            value: function(t) {}
        }, {
            key: "onConstruct",
            value: function() {
                this.constructFromXML(null);
            }
        }, {
            key: "constructFromXML",
            value: function(t) {}
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GComponent.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 4);
                var i, s, n = t.getInt16();
                for (-1 != n && null != this._scrollPane && (this._scrollPane.pageController = this._parent.getControllerAt(n)), 
                i = t.getInt16(), s = 0; s < i; s++) {
                    var a = this.getController(t.readS()), o = t.readS();
                    a && (a.selectedPageId = o);
                }
                if (t.version >= 2) for (i = t.getInt16(), s = 0; s < i; s++) {
                    var r = t.readS(), l = t.getInt16(), h = t.readS(), u = this.getChildByPath(r);
                    u && u.setProp(l, h);
                }
            }
        }, {
            key: "___added",
            value: function() {
                for (var t = this._transitions.length, e = 0; e < t; ++e) this._transitions[e].onOwnerAddedToStage();
            }
        }, {
            key: "___removed",
            value: function() {
                for (var t = this._transitions.length, e = 0; e < t; ++e) this._transitions[e].onOwnerRemovedFromStage();
            }
        }, {
            key: "displayListContainer",
            get: function() {
                return this._container;
            }
        }, {
            key: "numChildren",
            get: function() {
                return this._children.length;
            }
        }, {
            key: "controllers",
            get: function() {
                return this._controllers;
            }
        }, {
            key: "scrollPane",
            get: function() {
                return this._scrollPane;
            }
        }, {
            key: "opaque",
            get: function() {
                return this._opaque;
            },
            set: function(t) {
                this._opaque != t && (this._opaque = t, this._opaque ? (null == this._displayObject.hitArea && (this._displayObject.hitArea = new Laya.Rectangle()), 
                this._displayObject.hitArea instanceof Laya.Rectangle && this._displayObject.hitArea.setTo(0, 0, this._width, this._height), 
                this._displayObject.mouseThrough = !1) : (this._displayObject.hitArea instanceof Laya.Rectangle && (this._displayObject.hitArea = null), 
                this._displayObject.mouseThrough = !0));
            }
        }, {
            key: "margin",
            get: function() {
                return this._margin;
            },
            set: function(t) {
                this._margin.copy(t), null != this._displayObject.scrollRect && this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y), 
                this.handleSizeChanged();
            }
        }, {
            key: "childrenRenderOrder",
            get: function() {
                return this._childrenRenderOrder;
            },
            set: function(t) {
                this._childrenRenderOrder != t && (this._childrenRenderOrder = t, this.buildNativeDisplayList());
            }
        }, {
            key: "apexIndex",
            get: function() {
                return this._apexIndex;
            },
            set: function(e) {
                this._apexIndex != e && (this._apexIndex = e, this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && this.buildNativeDisplayList());
            }
        }, {
            key: "mask",
            get: function() {
                return this._mask;
            },
            set: function(t) {
                this.setMask(t, !1);
            }
        }, {
            key: "baseUserData",
            get: function() {
                var t = this.packageItem.rawData;
                return t.seek(0, 4), t.readS();
            }
        }, {
            key: "viewWidth",
            get: function() {
                return null != this._scrollPane ? this._scrollPane.viewWidth : this.width - this._margin.left - this._margin.right;
            },
            set: function(t) {
                null != this._scrollPane ? this._scrollPane.viewWidth = t : this.width = t + this._margin.left + this._margin.right;
            }
        }, {
            key: "viewHeight",
            get: function() {
                return null != this._scrollPane ? this._scrollPane.viewHeight : this.height - this._margin.top - this._margin.bottom;
            },
            set: function(t) {
                null != this._scrollPane ? this._scrollPane.viewHeight = t : this.height = t + this._margin.top + this._margin.bottom;
            }
        } ]), GComponent;
    }();
    t.GComponent = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GButton() {
            var e;
            return _classCallCheck(this, GButton), (e = _possibleConstructorReturn(this, _getPrototypeOf(GButton).call(this)))._soundVolumeScale = 0, 
            e._downEffect = 0, e._downEffectValue = 0, e._downScaled = !1, e._mode = t.ButtonMode.Common, 
            e._title = "", e._icon = "", e._sound = t.UIConfig.buttonSound, e._soundVolumeScale = t.UIConfig.buttonSoundVolumeScale, 
            e._changeStateOnClick = !0, e._downEffectValue = .8, e;
        }
        return _inherits(GButton, t.GComponent), _createClass(GButton, [ {
            key: "getTextField",
            value: function() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel ? this._titleObject.getTextField() : this._titleObject instanceof GButton ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "fireClick",
            value: function() {
                (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && this._mode == t.ButtonMode.Common && (this.setState(GButton.OVER), 
                Laya.timer.once(100, this, this.setState, [ GButton.DOWN ], !1), Laya.timer.once(200, this, this.setState, [ GButton.UP ], !1)), 
                this.__click(t.Events.createEvent(Laya.Event.CLICK, this.displayObject));
            }
        }, {
            key: "setState",
            value: function(e) {
                if (this._buttonController && (this._buttonController.selectedPage = e), 1 == this._downEffect) {
                    var i = this.numChildren;
                    if (e == GButton.DOWN || e == GButton.SELECTED_OVER || e == GButton.SELECTED_DISABLED) for (var s = 255 * this._downEffectValue, n = Laya.Utils.toHexColor((s << 16) + (s << 8) + s), a = 0; a < i; a++) {
                        var o = this.getChildAt(a);
                        o instanceof t.GTextField || o.setProp(t.ObjectPropID.Color, n);
                    } else for (a = 0; a < i; a++) (o = this.getChildAt(a)) instanceof t.GTextField || o.setProp(t.ObjectPropID.Color, "#FFFFFF");
                } else 2 == this._downEffect && (e == GButton.DOWN || e == GButton.SELECTED_OVER || e == GButton.SELECTED_DISABLED ? this._downScaled || (this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue), 
                this._downScaled = !0) : this._downScaled && (this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue), 
                this._downScaled = !1));
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                _get(_getPrototypeOf(GButton.prototype), "handleControllerChanged", this).call(this, t), 
                this._relatedController == t && (this.selected = this._relatedPageId == t.selectedPageId);
            }
        }, {
            key: "handleGrayedChanged",
            value: function() {
                this._buttonController && this._buttonController.hasPage(GButton.DISABLED) ? this.grayed ? this._selected && this._buttonController.hasPage(GButton.SELECTED_DISABLED) ? this.setState(GButton.SELECTED_DISABLED) : this.setState(GButton.DISABLED) : this._selected ? this.setState(GButton.DOWN) : this.setState(GButton.UP) : _get(_getPrototypeOf(GButton.prototype), "handleGrayedChanged", this).call(this);
            }
        }, {
            key: "getProp",
            value: function(e) {
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
                    return _get(_getPrototypeOf(GButton.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GButton.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function(e) {
                e.seek(0, 6), this._mode = e.readByte();
                var i = e.readS();
                i && (this._sound = i), this._soundVolumeScale = e.getFloat32(), this._downEffect = e.readByte(), 
                this._downEffectValue = e.getFloat32(), 2 == this._downEffect && this.setPivot(.5, .5, this.pivotAsAnchor), 
                this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), 
                this._iconObject = this.getChild("icon"), null != this._titleObject && (this._title = this._titleObject.text), 
                null != this._iconObject && (this._icon = this._iconObject.icon), this._mode == t.ButtonMode.Common && this.setState(GButton.UP), 
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover), this.on(Laya.Event.ROLL_OUT, this, this.__rollout), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown), this.on(Laya.Event.CLICK, this, this.__click);
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                var i, s;
                (_get(_getPrototypeOf(GButton.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6)) && (t.readByte() == this.packageItem.objectType && (null != (i = t.readS()) && (this.title = i), 
                null != (i = t.readS()) && (this.selectedTitle = i), null != (i = t.readS()) && (this.icon = i), 
                null != (i = t.readS()) && (this.selectedIcon = i), t.readBool() && (this.titleColor = t.readColorS()), 
                0 != (s = t.getInt32()) && (this.titleFontSize = s), (s = t.getInt16()) >= 0 && (this._relatedController = this.parent.getControllerAt(s)), 
                this._relatedPageId = t.readS(), null != (i = t.readS()) && (this._sound = i), t.readBool() && (this._soundVolumeScale = t.getFloat32()), 
                this.selected = t.readBool()));
            }
        }, {
            key: "__rollover",
            value: function() {
                this._buttonController && this._buttonController.hasPage(GButton.OVER) && (this._over = !0, 
                this._down || this.grayed && this._buttonController.hasPage(GButton.DISABLED) || this.setState(this._selected ? GButton.SELECTED_OVER : GButton.OVER));
            }
        }, {
            key: "__rollout",
            value: function() {
                this._buttonController && this._buttonController.hasPage(GButton.OVER) && (this._over = !1, 
                this._down || this.grayed && this._buttonController.hasPage(GButton.DISABLED) || this.setState(this._selected ? GButton.DOWN : GButton.UP));
            }
        }, {
            key: "__mousedown",
            value: function(e) {
                this._down = !0, t.GRoot.inst.checkPopups(e.target), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup), 
                this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED) ? this.setState(GButton.SELECTED_DISABLED) : this.setState(GButton.DOWN)), 
                null != this._linkedPopup && (this._linkedPopup instanceof t.Window ? this._linkedPopup.toggleStatus() : this.root.togglePopup(this._linkedPopup, this));
            }
        }, {
            key: "__mouseup",
            value: function() {
                if (this._down) {
                    if (Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup), this._down = !1, 
                    null == this._displayObject) return;
                    this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED) ? this.setState(GButton.DISABLED) : this._over ? this.setState(GButton.OVER) : this.setState(GButton.UP));
                }
            }
        }, {
            key: "__click",
            value: function(e) {
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
            get: function() {
                return this._icon;
            },
            set: function(t) {
                this._icon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, 
                null != this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "selectedIcon",
            get: function() {
                return this._selectedIcon;
            },
            set: function(t) {
                this._selectedIcon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, 
                null != this._iconObject && (this._iconObject.icon = t);
            }
        }, {
            key: "title",
            get: function() {
                return this._title;
            },
            set: function(t) {
                this._title = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title), 
                this.updateGear(6);
            }
        }, {
            key: "text",
            get: function() {
                return this.title;
            },
            set: function(t) {
                this.title = t;
            }
        }, {
            key: "selectedTitle",
            get: function() {
                return this._selectedTitle;
            },
            set: function(t) {
                this._selectedTitle = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title);
            }
        }, {
            key: "titleColor",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.color : "#000000";
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.fontSize : 0;
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.fontSize = t);
            }
        }, {
            key: "sound",
            get: function() {
                return this._sound;
            },
            set: function(t) {
                this._sound = t;
            }
        }, {
            key: "soundVolumeScale",
            get: function() {
                return this._soundVolumeScale;
            },
            set: function(t) {
                this._soundVolumeScale = t;
            }
        }, {
            key: "selected",
            set: function(e) {
                if (this._mode != t.ButtonMode.Common && this._selected != e) {
                    if (this._selected = e, this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED) ? this._selected ? this.setState(GButton.SELECTED_DISABLED) : this.setState(GButton.DISABLED) : this._selected ? this.setState(this._over ? GButton.SELECTED_OVER : GButton.DOWN) : this.setState(this._over ? GButton.OVER : GButton.UP), 
                    this._selectedTitle && this._titleObject && (this._titleObject.text = this._selected ? this._selectedTitle : this._title), 
                    this._selectedIcon) {
                        var i = this._selected ? this._selectedIcon : this._icon;
                        null != this._iconObject && (this._iconObject.icon = i);
                    }
                    this._relatedController && this._parent && !this._parent._buildingDisplayList && (this._selected ? (this._relatedController.selectedPageId = this._relatedPageId, 
                    this._relatedController.autoRadioGroupDepth && this._parent.adjustRadioGroupDepth(this, this._relatedController)) : this._mode == t.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId && (this._relatedController.oppositePageId = this._relatedPageId));
                }
            },
            get: function() {
                return this._selected;
            }
        }, {
            key: "mode",
            get: function() {
                return this._mode;
            },
            set: function(e) {
                this._mode != e && (e == t.ButtonMode.Common && (this.selected = !1), this._mode = e);
            }
        }, {
            key: "relatedController",
            get: function() {
                return this._relatedController;
            },
            set: function(t) {
                t != this._relatedController && (this._relatedController = t, this._relatedPageId = null);
            }
        }, {
            key: "relatedPageId",
            get: function() {
                return this._relatedPageId;
            },
            set: function(t) {
                this._relatedPageId = t;
            }
        }, {
            key: "changeStateOnClick",
            get: function() {
                return this._changeStateOnClick;
            },
            set: function(t) {
                this._changeStateOnClick = t;
            }
        }, {
            key: "linkedPopup",
            get: function() {
                return this._linkedPopup;
            },
            set: function(t) {
                this._linkedPopup = t;
            }
        } ]), GButton;
    }();
    e.UP = "up", e.DOWN = "down", e.OVER = "over", e.SELECTED_OVER = "selectedOver", 
    e.DISABLED = "disabled", e.SELECTED_DISABLED = "selectedDisabled", t.GButton = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GComboBox() {
            var e;
            return _classCallCheck(this, GComboBox), (e = _possibleConstructorReturn(this, _getPrototypeOf(GComboBox).call(this)))._visibleItemCount = t.UIConfig.defaultComboBoxVisibleItemCount, 
            e._itemsUpdated = !0, e._selectedIndex = -1, e._popupDirection = 0, e._items = [], 
            e._values = [], e;
        }
        return _inherits(GComboBox, t.GComponent), _createClass(GComboBox, [ {
            key: "getTextField",
            value: function() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel ? this._titleObject.getTextField() : this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "setState",
            value: function(t) {
                this._buttonController && (this._buttonController.selectedPage = t);
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                _get(_getPrototypeOf(GComboBox.prototype), "handleControllerChanged", this).call(this, t), 
                this._selectionController == t && (this.selectedIndex = t.selectedIndex);
            }
        }, {
            key: "updateSelectionController",
            value: function() {
                if (null != this._selectionController && !this._selectionController.changing && this._selectedIndex < this._selectionController.pageCount) {
                    var t = this._selectionController;
                    this._selectionController = null, t.selectedIndex = this._selectedIndex, this._selectionController = t;
                }
            }
        }, {
            key: "dispose",
            value: function() {
                this.dropdown && (this.dropdown.dispose(), this.dropdown = null), this._selectionController = null, 
                _get(_getPrototypeOf(GComboBox.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getProp",
            value: function(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.titleColor;

                  case t.ObjectPropID.OutlineColor:
                    var i = this.getTextField();
                    return i ? i.strokeColor : 0;

                  case t.ObjectPropID.FontSize:
                    return (i = this.getTextField()) ? i.fontSize : 0;

                  default:
                    return _get(_getPrototypeOf(GComboBox.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GComboBox.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function(e) {
                var i;
                if (this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), 
                this._iconObject = this.getChild("icon"), i = e.readS()) {
                    if (this.dropdown = t.UIPackage.createObjectFromURL(i), !this.dropdown) return void Laya.Log.print("下拉框必须为元件");
                    if (this.dropdown.name = "this._dropdownObject", this._list = this.dropdown.getChild("list").asList, 
                    null == this._list) return void Laya.Log.print(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                    this._list.on(t.Events.CLICK_ITEM, this, this.__clickItem), this._list.addRelation(this.dropdown, t.RelationType.Width), 
                    this._list.removeRelation(this.dropdown, t.RelationType.Height), this.dropdown.addRelation(this._list, t.RelationType.Height), 
                    this.dropdown.removeRelation(this._list, t.RelationType.Width), this.dropdown.displayObject.on(Laya.Event.UNDISPLAY, this, this.__popupWinClosed);
                }
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover), this.on(Laya.Event.ROLL_OUT, this, this.__rollout), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown);
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                if (_get(_getPrototypeOf(GComboBox.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType) {
                    var i, s, n, a, o = t.getInt16();
                    for (i = 0; i < o; i++) n = t.getInt16(), n += t.pos, this._items[i] = t.readS(), 
                    this._values[i] = t.readS(), null != (a = t.readS()) && (null == this._icons && (this._icons = []), 
                    this._icons[i] = a), t.pos = n;
                    null != (a = t.readS()) ? (this.text = a, this._selectedIndex = this._items.indexOf(a)) : this._items.length > 0 ? (this._selectedIndex = 0, 
                    this.text = this._items[0]) : this._selectedIndex = -1, null != (a = t.readS()) && (this.icon = a), 
                    t.readBool() && (this.titleColor = t.readColorS()), (s = t.getInt32()) > 0 && (this._visibleItemCount = s), 
                    this._popupDirection = t.readByte(), (s = t.getInt16()) >= 0 && (this._selectionController = this.parent.getControllerAt(s));
                }
            }
        }, {
            key: "showDropdown",
            value: function() {
                if (this._itemsUpdated) {
                    this._itemsUpdated = !1, this._list.removeChildrenToPool();
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var s = this._list.addItemFromPool();
                        s.name = i < this._values.length ? this._values[i] : "", s.text = this._items[i], 
                        s.icon = null != this._icons && i < this._icons.length ? this._icons[i] : null;
                    }
                    this._list.resizeToFit(this._visibleItemCount);
                }
                this._list.selectedIndex = -1, this.dropdown.width = this.width, this._list.ensureBoundsCorrect();
                var n = null;
                this._popupDirection == t.PopupDirection.Down ? n = !0 : this._popupDirection == t.PopupDirection.Up && (n = !1), 
                this.root.togglePopup(this.dropdown, this, n), this.dropdown.parent && this.setState(t.GButton.DOWN);
            }
        }, {
            key: "__popupWinClosed",
            value: function() {
                this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP);
            }
        }, {
            key: "__clickItem",
            value: function(t, e) {
                Laya.timer.callLater(this, this.__clickItem2, [ this._list.getChildIndex(t), e ]);
            }
        }, {
            key: "__clickItem2",
            value: function(e, i) {
                this.dropdown.parent instanceof t.GRoot && this.dropdown.parent.hidePopup(), this._selectedIndex = -1, 
                this.selectedIndex = e, t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, i);
            }
        }, {
            key: "__rollover",
            value: function() {
                this._over = !0, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.OVER);
            }
        }, {
            key: "__rollout",
            value: function() {
                this._over = !1, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.UP);
            }
        }, {
            key: "__mousedown",
            value: function(e) {
                e.target instanceof Laya.Input || (this._down = !0, t.GRoot.inst.checkPopups(e.target), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup), this.dropdown && this.showDropdown());
            }
        }, {
            key: "__mouseup",
            value: function() {
                this._down && (this._down = !1, Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup), 
                this.dropdown && !this.dropdown.parent && (this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP)));
            }
        }, {
            key: "text",
            get: function() {
                return this._titleObject ? this._titleObject.text : null;
            },
            set: function(t) {
                this._titleObject && (this._titleObject.text = t), this.updateGear(6);
            }
        }, {
            key: "titleColor",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.color : "#000000";
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.fontSize : 0;
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.fontSize = t);
            }
        }, {
            key: "icon",
            get: function() {
                return this._iconObject ? this._iconObject.icon : null;
            },
            set: function(t) {
                this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "visibleItemCount",
            get: function() {
                return this._visibleItemCount;
            },
            set: function(t) {
                this._visibleItemCount = t;
            }
        }, {
            key: "popupDirection",
            get: function() {
                return this._popupDirection;
            },
            set: function(t) {
                this._popupDirection = t;
            }
        }, {
            key: "items",
            get: function() {
                return this._items;
            },
            set: function(t) {
                t ? this._items = t.concat() : this._items.length = 0, this._items.length > 0 ? (this._selectedIndex >= this._items.length ? this._selectedIndex = this._items.length - 1 : -1 == this._selectedIndex && (this._selectedIndex = 0), 
                this.text = this._items[this._selectedIndex], null != this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", 
                null != this._icons && (this.icon = null), this._selectedIndex = -1), this._itemsUpdated = !0;
            }
        }, {
            key: "icons",
            get: function() {
                return this._icons;
            },
            set: function(t) {
                this._icons = t, null != this._icons && -1 != this._selectedIndex && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex]);
            }
        }, {
            key: "values",
            get: function() {
                return this._values;
            },
            set: function(t) {
                t ? this._values = t.concat() : this._values.length = 0;
            }
        }, {
            key: "selectedIndex",
            get: function() {
                return this._selectedIndex;
            },
            set: function(t) {
                this._selectedIndex != t && (this._selectedIndex = t, this._selectedIndex >= 0 && this._selectedIndex < this._items.length ? (this.text = this._items[this._selectedIndex], 
                null != this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", 
                null != this._icons && (this.icon = null)), this.updateSelectionController());
            }
        }, {
            key: "value",
            get: function() {
                return this._values[this._selectedIndex];
            },
            set: function(t) {
                var e = this._values.indexOf(t);
                -1 == e && null == t && (e = this._values.indexOf("")), this.selectedIndex = e;
            }
        }, {
            key: "selectionController",
            get: function() {
                return this._selectionController;
            },
            set: function(t) {
                this._selectionController = t;
            }
        } ]), GComboBox;
    }();
    t.GComboBox = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GGraph() {
            var t;
            return _classCallCheck(this, GGraph), (t = _possibleConstructorReturn(this, _getPrototypeOf(GGraph).call(this)))._type = 0, 
            t._lineSize = 1, t._lineColor = "#000000", t._fillColor = "#FFFFFF", t._cornerRadius = null, 
            t._sides = 3, t._startAngle = 0, t;
        }
        return _inherits(GGraph, t.GObject), _createClass(GGraph, [ {
            key: "drawRect",
            value: function(t, e, i) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                this._type = 1, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._cornerRadius = s, 
                this.updateGraph();
            }
        }, {
            key: "drawEllipse",
            value: function(t, e, i) {
                this._type = 2, this._lineSize = t, this._lineColor = e, this._fillColor = i, this.updateGraph();
            }
        }, {
            key: "drawRegularPolygon",
            value: function(t, e, i, s) {
                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                this._type = 3, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._sides = s, 
                this._startAngle = n, this._distances = a, this.updateGraph();
            }
        }, {
            key: "drawPolygon",
            value: function(t, e, i, s) {
                this._type = 4, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._polygonPoints = s, 
                this.updateGraph();
            }
        }, {
            key: "updateGraph",
            value: function() {
                this._displayObject.mouseEnabled = this.touchable;
                var e = this._displayObject.graphics;
                e.clear();
                var i = this.width, s = this.height;
                if (0 != i && 0 != s) {
                    var n = this._fillColor, a = this._lineColor;
                    if (t.ToolSet.startsWith(n, "rgba")) {
                        var o = n.substring(5, n.lastIndexOf(")")).split(","), r = parseFloat(o[3]);
                        0 == r ? n = null : (n = Laya.Utils.toHexColor((parseInt(o[0]) << 16) + (parseInt(o[1]) << 8) + parseInt(o[2])), 
                        this.alpha = r);
                    }
                    if (1 == this._type) if (null != this._cornerRadius) {
                        var l = [ [ "moveTo", this._cornerRadius[0], 0 ], [ "lineTo", i - this._cornerRadius[1], 0 ], [ "arcTo", i, 0, i, this._cornerRadius[1], this._cornerRadius[1] ], [ "lineTo", i, s - this._cornerRadius[3] ], [ "arcTo", i, s, i - this._cornerRadius[3], s, this._cornerRadius[3] ], [ "lineTo", this._cornerRadius[2], s ], [ "arcTo", 0, s, 0, s - this._cornerRadius[2], this._cornerRadius[2] ], [ "lineTo", 0, this._cornerRadius[0] ], [ "arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0] ], [ "closePath" ] ];
                        e.drawPath(0, 0, l, {
                            fillStyle: n
                        }, this._lineSize > 0 ? {
                            strokeStyle: a,
                            lineWidth: this._lineSize
                        } : null);
                    } else e.drawRect(0, 0, i, s, n, this._lineSize > 0 ? a : null, this._lineSize); else if (2 == this._type) e.drawCircle(i / 2, s / 2, i / 2, n, this._lineSize > 0 ? a : null, this._lineSize); else if (3 == this._type) e.drawPoly(0, 0, this._polygonPoints, n, this._lineSize > 0 ? a : null, this._lineSize); else if (4 == this._type) {
                        this._polygonPoints || (this._polygonPoints = []);
                        var h = Math.min(this._width, this._height) / 2;
                        this._polygonPoints.length = 0;
                        for (var u, _ = Laya.Utils.toRadian(this._startAngle), c = 2 * Math.PI / this._sides, d = 0; d < this._sides; d++) {
                            this._distances ? (u = this._distances[d], isNaN(u) && (u = 1)) : u = 1;
                            var g = h + h * u * Math.cos(_), p = h + h * u * Math.sin(_);
                            this._polygonPoints.push(g, p), _ += c;
                        }
                        e.drawPoly(0, 0, this._polygonPoints, n, this._lineSize > 0 ? a : null, this._lineSize);
                    }
                    this._displayObject.repaint();
                }
            }
        }, {
            key: "replaceMe",
            value: function(t) {
                if (!this._parent) throw "parent not set";
                t.name = this.name, t.alpha = this.alpha, t.rotation = this.rotation, t.visible = this.visible, 
                t.touchable = this.touchable, t.grayed = this.grayed, t.setXY(this.x, this.y), t.setSize(this.width, this.height);
                var e = this._parent.getChildIndex(this);
                this._parent.addChildAt(t, e), t.relations.copyFrom(this.relations), this._parent.removeChild(this, !0);
            }
        }, {
            key: "addBeforeMe",
            value: function(t) {
                if (null == this._parent) throw "parent not set";
                var e = this._parent.getChildIndex(this);
                this._parent.addChildAt(t, e);
            }
        }, {
            key: "addAfterMe",
            value: function(t) {
                if (null == this._parent) throw "parent not set";
                var e = this._parent.getChildIndex(this);
                e++, this._parent.addChildAt(t, e);
            }
        }, {
            key: "setNativeObject",
            value: function(t) {
                this._type = 0, this._displayObject.mouseEnabled = this.touchable, this._displayObject.graphics.clear(), 
                this._displayObject.addChild(t);
            }
        }, {
            key: "createDisplayObject",
            value: function() {
                _get(_getPrototypeOf(GGraph.prototype), "createDisplayObject", this).call(this), 
                this._displayObject.mouseEnabled = !1, this._hitArea = new Laya.HitArea(), this._hitArea.hit = this._displayObject.graphics, 
                this._displayObject.hitArea = this._hitArea;
            }
        }, {
            key: "getProp",
            value: function(e) {
                return e == t.ObjectPropID.Color ? this.color : _get(_getPrototypeOf(GGraph.prototype), "getProp", this).call(this, e);
            }
        }, {
            key: "setProp",
            value: function(e, i) {
                e == t.ObjectPropID.Color ? this.color = i : _get(_getPrototypeOf(GGraph.prototype), "setProp", this).call(this, e, i);
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                _get(_getPrototypeOf(GGraph.prototype), "handleSizeChanged", this).call(this), 0 != this._type && this.updateGraph();
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                if (_get(_getPrototypeOf(GGraph.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._type = t.readByte(), 0 != this._type) {
                    var i, s;
                    if (this._lineSize = t.getInt32(), this._lineColor = t.readColorS(!0), this._fillColor = t.readColorS(!0), 
                    t.readBool()) for (this._cornerRadius = [], i = 0; i < 4; i++) this._cornerRadius[i] = t.getFloat32();
                    if (3 == this._type) for (s = t.getInt16(), this._polygonPoints = [], this._polygonPoints.length = s, 
                    i = 0; i < s; i++) this._polygonPoints[i] = t.getFloat32(); else if (4 == this._type && (this._sides = t.getInt16(), 
                    this._startAngle = t.getFloat32(), (s = t.getInt16()) > 0)) for (this._distances = [], 
                    i = 0; i < s; i++) this._distances[i] = t.getFloat32();
                    this.updateGraph();
                }
            }
        }, {
            key: "distances",
            get: function() {
                return this._distances;
            },
            set: function(t) {
                this._distances = t, 3 == this._type && this.updateGraph();
            }
        }, {
            key: "color",
            get: function() {
                return this._fillColor;
            },
            set: function(t) {
                this._fillColor = t, 0 != this._type && this.updateGraph();
            }
        } ]), GGraph;
    }();
    t.GGraph = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GGroup() {
            var t;
            return _classCallCheck(this, GGroup), (t = _possibleConstructorReturn(this, _getPrototypeOf(GGroup).call(this)))._layout = 0, 
            t._lineGap = 0, t._columnGap = 0, t._mainGridIndex = -1, t._mainGridMinSize = 50, 
            t._mainChildIndex = -1, t._totalSize = 0, t._numChildren = 0, t._updating = 0, t;
        }
        return _inherits(GGroup, t.GObject), _createClass(GGroup, [ {
            key: "dispose",
            value: function() {
                this._boundsChanged = !1, _get(_getPrototypeOf(GGroup.prototype), "dispose", this).call(this);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                0 == this._updating && null != this._parent && (e || (this._percentReady = !1), 
                this._boundsChanged || (this._boundsChanged = !0, this._layout != t.GroupLayoutType.None && Laya.timer.callLater(this, this.ensureBoundsCorrect)));
            }
        }, {
            key: "ensureSizeCorrect",
            value: function() {
                null != this._parent && this._boundsChanged && 0 != this._layout && (this._boundsChanged = !1, 
                this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), this.updateBounds()));
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function() {
                null != this._parent && this._boundsChanged && (this._boundsChanged = !1, 0 == this._layout ? this.updateBounds() : this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), 
                this.updateBounds()));
            }
        }, {
            key: "updateBounds",
            value: function() {
                Laya.timer.clear(this, this.ensureBoundsCorrect);
                var t, e, i, s = this._parent.numChildren, n = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, r = Number.NEGATIVE_INFINITY, l = !0;
                for (t = 0; t < s; t++) (e = this._parent.getChildAt(t)).group != this || this._excludeInvisibles && !e.internalVisible3 || ((i = e.xMin) < n && (n = i), 
                (i = e.yMin) < a && (a = i), (i = e.xMin + e.width) > o && (o = i), (i = e.yMin + e.height) > r && (r = i), 
                l = !1);
                var h = 0, u = 0;
                l || (this._updating |= 1, this.setXY(n, a), this._updating &= 2, h = o - n, u = r - a), 
                0 == (2 & this._updating) ? (this._updating |= 2, this.setSize(h, u), this._updating &= 1) : (this._updating &= 1, 
                this.resizeChildren(this._width - h, this._height - u));
            }
        }, {
            key: "handleLayout",
            value: function() {
                var e, i, s;
                if (this._updating |= 1, this._layout == t.GroupLayoutType.Horizontal) {
                    var n = this.x;
                    for (s = this._parent.numChildren, i = 0; i < s; i++) (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.xMin = n, 
                    0 != e.width && (n += e.width + this._columnGap)));
                } else if (this._layout == t.GroupLayoutType.Vertical) {
                    var a = this.y;
                    for (s = this._parent.numChildren, i = 0; i < s; i++) (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.yMin = a, 
                    0 != e.height && (a += e.height + this._lineGap)));
                }
                this._updating &= 2;
            }
        }, {
            key: "moveChildren",
            value: function(t, e) {
                if (0 == (1 & this._updating) && null != this._parent) {
                    this._updating |= 1;
                    var i, s, n = this._parent.numChildren;
                    for (i = 0; i < n; i++) (s = this._parent.getChildAt(i)).group == this && s.setXY(s.x + t, s.y + e);
                    this._updating &= 2;
                }
            }
        }, {
            key: "resizeChildren",
            value: function(e, i) {
                if (this._layout != t.GroupLayoutType.None && 0 == (2 & this._updating) && null != this._parent) if (this._updating |= 2, 
                !this._boundsChanged || (this._boundsChanged = !1, this._autoSizeDisabled)) {
                    var s, n, a = this._parent.numChildren;
                    if (!this._percentReady) {
                        this._percentReady = !0, this._numChildren = 0, this._totalSize = 0, this._mainChildIndex = -1;
                        var o = 0;
                        for (s = 0; s < a; s++) (n = this._parent.getChildAt(s)).group == this && (this._excludeInvisibles && !n.internalVisible3 || (o == this._mainGridIndex && (this._mainChildIndex = s), 
                        this._numChildren++, 1 == this._layout ? this._totalSize += n.width : this._totalSize += n.height), 
                        o++);
                        for (-1 != this._mainChildIndex && (1 == this._layout ? (n = this._parent.getChildAt(this._mainChildIndex), 
                        this._totalSize += this._mainGridMinSize - n.width, n._sizePercentInGroup = this._mainGridMinSize / this._totalSize) : (n = this._parent.getChildAt(this._mainChildIndex), 
                        this._totalSize += this._mainGridMinSize - n.height, n._sizePercentInGroup = this._mainGridMinSize / this._totalSize)), 
                        s = 0; s < a; s++) (n = this._parent.getChildAt(s)).group == this && s != this._mainChildIndex && (this._totalSize > 0 ? n._sizePercentInGroup = (1 == this._layout ? n.width : n.height) / this._totalSize : n._sizePercentInGroup = 0);
                    }
                    var r = 0, l = 1, h = !1;
                    if (1 == this._layout) {
                        r = this.width - (this._numChildren - 1) * this._columnGap, -1 != this._mainChildIndex && r >= this._totalSize && ((n = this._parent.getChildAt(this._mainChildIndex)).setSize(r - (this._totalSize - this._mainGridMinSize), n._rawHeight + i, !0), 
                        r -= n.width, l -= n._sizePercentInGroup, h = !0);
                        var u = this.x;
                        for (s = 0; s < a; s++) (n = this._parent.getChildAt(s)).group == this && (!this._excludeInvisibles || n.internalVisible3 ? (h && s == this._mainChildIndex || (n.setSize(Math.round(n._sizePercentInGroup / l * r), n._rawHeight + i, !0), 
                        l -= n._sizePercentInGroup, r -= n.width), n.xMin = u, 0 != n.width && (u += n.width + this._columnGap)) : n.setSize(n._rawWidth, n._rawHeight + i, !0));
                    } else {
                        r = this.height - (this._numChildren - 1) * this._lineGap, -1 != this._mainChildIndex && r >= this._totalSize && ((n = this._parent.getChildAt(this._mainChildIndex)).setSize(n._rawWidth + e, r - (this._totalSize - this._mainGridMinSize), !0), 
                        r -= n.height, l -= n._sizePercentInGroup, h = !0);
                        var _ = this.y;
                        for (s = 0; s < a; s++) (n = this._parent.getChildAt(s)).group == this && (!this._excludeInvisibles || n.internalVisible3 ? (h && s == this._mainChildIndex || (n.setSize(n._rawWidth + e, Math.round(n._sizePercentInGroup / l * r), !0), 
                        l -= n._sizePercentInGroup, r -= n.height), n.yMin = _, 0 != n.height && (_ += n.height + this._lineGap)) : n.setSize(n._rawWidth + e, n._rawHeight, !0));
                    }
                    this._updating &= 1;
                } else this.updateBounds();
            }
        }, {
            key: "handleAlphaChanged",
            value: function() {
                if (!this._underConstruct) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
                    var i = this._parent.getChildAt(e);
                    i.group == this && (i.alpha = this.alpha);
                }
            }
        }, {
            key: "handleVisibleChanged",
            value: function() {
                if (this._parent) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
                    var i = this._parent.getChildAt(e);
                    i.group == this && i.handleVisibleChanged();
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GGroup.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), this._layout = t.readByte(), this._lineGap = t.getInt32(), this._columnGap = t.getInt32(), 
                t.version >= 2 && (this._excludeInvisibles = t.readBool(), this._autoSizeDisabled = t.readBool(), 
                this._mainChildIndex = t.getInt16());
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GGroup.prototype), "setup_afterAdd", this).call(this, t, e), 
                this.visible || this.handleVisibleChanged();
            }
        }, {
            key: "layout",
            get: function() {
                return this._layout;
            },
            set: function(t) {
                this._layout != t && (this._layout = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "lineGap",
            get: function() {
                return this._lineGap;
            },
            set: function(t) {
                this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(!0));
            }
        }, {
            key: "columnGap",
            get: function() {
                return this._columnGap;
            },
            set: function(t) {
                this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(!0));
            }
        }, {
            key: "excludeInvisibles",
            get: function() {
                return this._excludeInvisibles;
            },
            set: function(t) {
                this._excludeInvisibles != t && (this._excludeInvisibles = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "autoSizeDisabled",
            get: function() {
                return this._autoSizeDisabled;
            },
            set: function(t) {
                this._autoSizeDisabled = t;
            }
        }, {
            key: "mainGridMinSize",
            get: function() {
                return this._mainGridMinSize;
            },
            set: function(t) {
                this._mainGridMinSize != t && (this._mainGridMinSize = t, this.setBoundsChangedFlag());
            }
        }, {
            key: "mainGridIndex",
            get: function() {
                return this._mainGridIndex;
            },
            set: function(t) {
                this._mainGridIndex != t && (this._mainGridIndex = t, this.setBoundsChangedFlag());
            }
        } ]), GGroup;
    }();
    t.GGroup = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GImage() {
            var t;
            return _classCallCheck(this, GImage), (t = _possibleConstructorReturn(this, _getPrototypeOf(GImage).call(this)))._flip = 0, 
            t;
        }
        return _inherits(GImage, t.GObject), _createClass(GImage, [ {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = this._image = new t.Image(), this.image.mouseEnabled = !1, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "constructFromResource",
            value: function() {
                this._contentItem = this.packageItem.getBranch(), this.sourceWidth = this._contentItem.width, 
                this.sourceHeight = this._contentItem.height, this.initWidth = this.sourceWidth, 
                this.initHeight = this.sourceHeight, this._contentItem = this._contentItem.getHighResolution(), 
                this._contentItem.load(), this.image.scale9Grid = this._contentItem.scale9Grid, 
                this.image.scaleByTile = this._contentItem.scaleByTile, this.image.tileGridIndice = this._contentItem.tileGridIndice, 
                this.image.texture = this._contentItem.texture, this.setSize(this.sourceWidth, this.sourceHeight);
            }
        }, {
            key: "handleXYChanged",
            value: function() {
                _get(_getPrototypeOf(GImage.prototype), "handleXYChanged", this).call(this), this._flip != t.FlipType.None && (-1 == this.scaleX && (this.image.x += this.width), 
                -1 == this.scaleY && (this.image.y += this.height));
            }
        }, {
            key: "getProp",
            value: function(e) {
                return e == t.ObjectPropID.Color ? this.color : _get(_getPrototypeOf(GImage.prototype), "getProp", this).call(this, e);
            }
        }, {
            key: "setProp",
            value: function(e, i) {
                e == t.ObjectPropID.Color ? this.color = i : _get(_getPrototypeOf(GImage.prototype), "setProp", this).call(this, e, i);
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GImage.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), t.readBool() && (this.color = t.readColorS()), this.flip = t.readByte(), 
                this.image.fillMethod = t.readByte(), 0 != this.image.fillMethod && (this.image.fillOrigin = t.readByte(), 
                this.image.fillClockwise = t.readBool(), this.image.fillAmount = t.getFloat32());
            }
        }, {
            key: "image",
            get: function() {
                return this._image;
            }
        }, {
            key: "color",
            get: function() {
                return this.image.color;
            },
            set: function(t) {
                this.image.color != t && (this.image.color = t, this.updateGear(4));
            }
        }, {
            key: "flip",
            get: function() {
                return this._flip;
            },
            set: function(e) {
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
            get: function() {
                return this.image.fillMethod;
            },
            set: function(t) {
                this.image.fillMethod = t;
            }
        }, {
            key: "fillOrigin",
            get: function() {
                return this.image.fillOrigin;
            },
            set: function(t) {
                this.image.fillOrigin = t;
            }
        }, {
            key: "fillClockwise",
            get: function() {
                return this.image.fillClockwise;
            },
            set: function(t) {
                this.image.fillClockwise = t;
            }
        }, {
            key: "fillAmount",
            get: function() {
                return this.image.fillAmount;
            },
            set: function(t) {
                this.image.fillAmount = t;
            }
        } ]), GImage;
    }();
    t.GImage = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GLabel() {
            return _classCallCheck(this, GLabel), _possibleConstructorReturn(this, _getPrototypeOf(GLabel).call(this));
        }
        return _inherits(GLabel, t.GComponent), _createClass(GLabel, [ {
            key: "getTextField",
            value: function() {
                return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof GLabel ? this._titleObject.getTextField() : this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
            }
        }, {
            key: "getProp",
            value: function(e) {
                switch (e) {
                  case t.ObjectPropID.Color:
                    return this.titleColor;

                  case t.ObjectPropID.OutlineColor:
                    var i = this.getTextField();
                    return i ? i.strokeColor : 0;

                  case t.ObjectPropID.FontSize:
                    return this.titleFontSize;

                  default:
                    return _get(_getPrototypeOf(GLabel.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GLabel.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructExtension",
            value: function(t) {
                this._titleObject = this.getChild("title"), this._iconObject = this.getChild("icon");
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                if (_get(_getPrototypeOf(GLabel.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType) {
                    var i;
                    null != (i = t.readS()) && (this.title = i), null != (i = t.readS()) && (this.icon = i), 
                    t.readBool() && (this.titleColor = t.readColorS());
                    var s = t.getInt32();
                    if (0 != s && (this.titleFontSize = s), t.readBool()) {
                        var n = this.getTextField();
                        null != n ? (null != (i = t.readS()) && (n.promptText = i), null != (i = t.readS()) && (n.restrict = i), 
                        0 != (s = t.getInt32()) && (n.maxLength = s), 0 != (s = t.getInt32()) && (4 == s ? n.keyboardType = Laya.Input.TYPE_NUMBER : 3 == s && (n.keyboardType = Laya.Input.TYPE_URL)), 
                        t.readBool() && (n.password = !0)) : t.skip(13);
                    }
                }
            }
        }, {
            key: "icon",
            get: function() {
                return null != this._iconObject ? this._iconObject.icon : null;
            },
            set: function(t) {
                null != this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
            }
        }, {
            key: "title",
            get: function() {
                return this._titleObject ? this._titleObject.text : null;
            },
            set: function(t) {
                this._titleObject && (this._titleObject.text = t), this.updateGear(6);
            }
        }, {
            key: "text",
            get: function() {
                return this.title;
            },
            set: function(t) {
                this.title = t;
            }
        }, {
            key: "titleColor",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.color : "#000000";
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.color = t), this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function() {
                var t = this.getTextField();
                return null != t ? t.fontSize : 0;
            },
            set: function(t) {
                var e = this.getTextField();
                null != e && (e.fontSize = t);
            }
        }, {
            key: "color",
            get: function() {
                return this.titleColor;
            },
            set: function(t) {
                this.titleColor = t;
            }
        }, {
            key: "editable",
            set: function(t) {
                this._titleObject && (this._titleObject.asTextInput.editable = t);
            },
            get: function() {
                return !!(this._titleObject && this._titleObject instanceof t.GTextInput) && this._titleObject.asTextInput.editable;
            }
        } ]), GLabel;
    }();
    t.GLabel = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GList() {
            var e;
            return _classCallCheck(this, GList), (e = _possibleConstructorReturn(this, _getPrototypeOf(GList).call(this)))._lineCount = 0, 
            e._columnCount = 0, e._lineGap = 0, e._columnGap = 0, e._lastSelectedIndex = 0, 
            e._numItems = 0, e._firstIndex = 0, e._curLineItemCount = 0, e._virtualListChanged = 0, 
            e.itemInfoVer = 0, e._trackBounds = !0, e._pool = new t.GObjectPool(), e._layout = t.ListLayoutType.SingleColumn, 
            e._autoResizeItem = !0, e._lastSelectedIndex = -1, e._selectionMode = t.ListSelectionMode.Single, 
            e.opaque = !0, e.scrollItemToViewOnClick = !0, e._align = "left", e._verticalAlign = "top", 
            e._container = new Laya.Sprite(), e._displayObject.addChild(e._container), e;
        }
        return _inherits(GList, t.GComponent), _createClass(GList, [ {
            key: "dispose",
            value: function() {
                this._pool.clear(), _get(_getPrototypeOf(GList.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getFromPool",
            value: function(t) {
                t || (t = this._defaultItem);
                var e = this._pool.getObject(t);
                return null != e && (e.visible = !0), e;
            }
        }, {
            key: "returnToPool",
            value: function(t) {
                t.displayObject.cacheAs = "none", this._pool.returnObject(t);
            }
        }, {
            key: "addChildAt",
            value: function(e, i) {
                if (_get(_getPrototypeOf(GList.prototype), "addChildAt", this).call(this, e, i), 
                e instanceof t.GButton) {
                    var s = e;
                    s.selected = !1, s.changeStateOnClick = !1;
                }
                return e.on(Laya.Event.CLICK, this, this.__clickItem), e;
            }
        }, {
            key: "addItem",
            value: function(e) {
                return e || (e = this._defaultItem), this.addChild(t.UIPackage.createObjectFromURL(e));
            }
        }, {
            key: "addItemFromPool",
            value: function(t) {
                return this.addChild(this.getFromPool(t));
            }
        }, {
            key: "removeChildAt",
            value: function(t, e) {
                var i = _get(_getPrototypeOf(GList.prototype), "removeChildAt", this).call(this, t);
                return e ? i.dispose() : i.off(Laya.Event.CLICK, this, this.__clickItem), i;
            }
        }, {
            key: "removeChildToPoolAt",
            value: function(t) {
                var e = _get(_getPrototypeOf(GList.prototype), "removeChildAt", this).call(this, t);
                this.returnToPool(e);
            }
        }, {
            key: "removeChildToPool",
            value: function(t) {
                _get(_getPrototypeOf(GList.prototype), "removeChild", this).call(this, t), this.returnToPool(t);
            }
        }, {
            key: "removeChildrenToPool",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                (e < 0 || e >= this._children.length) && (e = this._children.length - 1);
                for (var i = t; i <= e; ++i) this.removeChildToPoolAt(t);
            }
        }, {
            key: "getSelection",
            value: function(e) {
                var i;
                if (e || (e = new Array()), this._virtual) for (i = 0; i < this._realNumItems; i++) {
                    var s = this._virtualItems[i];
                    if (s.obj instanceof t.GButton && s.obj.selected || null == s.obj && s.selected) {
                        var n = i;
                        if (this._loop && (n = i % this._numItems, -1 != e.indexOf(n))) continue;
                        e.push(n);
                    }
                } else {
                    var a = this._children.length;
                    for (i = 0; i < a; i++) {
                        var o = this._children[i].asButton;
                        null != o && o.selected && e.push(i);
                    }
                }
                return e;
            }
        }, {
            key: "addSelection",
            value: function(e, i) {
                if (this._selectionMode != t.ListSelectionMode.None) {
                    this.checkVirtualList(), this._selectionMode == t.ListSelectionMode.Single && this.clearSelection(), 
                    i && this.scrollToView(e), this._lastSelectedIndex = e;
                    var s = null;
                    if (this._virtual) {
                        var n = this._virtualItems[e];
                        null != n.obj && (s = n.obj.asButton), n.selected = !0;
                    } else s = this.getChildAt(e).asButton;
                    null == s || s.selected || (s.selected = !0, this.updateSelectionController(e));
                }
            }
        }, {
            key: "removeSelection",
            value: function(e) {
                if (this._selectionMode != t.ListSelectionMode.None) {
                    var i = null;
                    if (this._virtual) {
                        var s = this._virtualItems[e];
                        null != s.obj && (i = s.obj.asButton), s.selected = !1;
                    } else i = this.getChildAt(e).asButton;
                    null != i && (i.selected = !1);
                }
            }
        }, {
            key: "clearSelection",
            value: function() {
                var e;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var i = this._virtualItems[e];
                    i.obj instanceof t.GButton && (i.obj.selected = !1), i.selected = !1;
                } else {
                    var s = this._children.length;
                    for (e = 0; e < s; e++) {
                        var n = this._children[e].asButton;
                        null != n && (n.selected = !1);
                    }
                }
            }
        }, {
            key: "clearSelectionExcept",
            value: function(e) {
                var i;
                if (this._virtual) for (i = 0; i < this._realNumItems; i++) {
                    var s = this._virtualItems[i];
                    s.obj != e && (s.obj instanceof t.GButton && (s.obj.selected = !1), s.selected = !1);
                } else {
                    var n = this._children.length;
                    for (i = 0; i < n; i++) {
                        var a = this._children[i].asButton;
                        null != a && a != e && (a.selected = !1);
                    }
                }
            }
        }, {
            key: "selectAll",
            value: function() {
                this.checkVirtualList();
                var e, i = -1;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var s = this._virtualItems[e];
                    s.obj instanceof t.GButton && !s.obj.selected && (s.obj.selected = !0, i = e), s.selected = !0;
                } else {
                    var n = this._children.length;
                    for (e = 0; e < n; e++) {
                        var a = this._children[e].asButton;
                        null == a || a.selected || (a.selected = !0, i = e);
                    }
                }
                -1 != i && this.updateSelectionController(i);
            }
        }, {
            key: "selectNone",
            value: function() {
                this.clearSelection();
            }
        }, {
            key: "selectReverse",
            value: function() {
                this.checkVirtualList();
                var e, i = -1;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var s = this._virtualItems[e];
                    s.obj instanceof t.GButton && (s.obj.selected = !s.obj.selected, s.obj.selected && (i = e)), 
                    s.selected = !s.selected;
                } else {
                    var n = this._children.length;
                    for (e = 0; e < n; e++) {
                        var a = this._children[e].asButton;
                        null != a && (a.selected = !a.selected, a.selected && (i = e));
                    }
                }
                -1 != i && this.updateSelectionController(i);
            }
        }, {
            key: "handleArrowKey",
            value: function(e) {
                var i = this.selectedIndex;
                if (-1 != i) switch (e) {
                  case 1:
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) --i >= 0 && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
                        for (var s = this._children[i], n = 0, a = i - 1; a >= 0; a--) {
                            var o = this._children[a];
                            if (o.y != s.y) {
                                s = o;
                                break;
                            }
                            n++;
                        }
                        for (;a >= 0; a--) if ((o = this._children[a]).y != s.y) {
                            this.clearSelection(), this.addSelection(a + n + 1, !0);
                            break;
                        }
                    }
                    break;

                  case 3:
                    if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) ++i < this.numItems && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                        s = this._children[i], n = 0;
                        var r = this._children.length;
                        for (a = i + 1; a < r; a++) {
                            if ((o = this._children[a]).x != s.x) {
                                s = o;
                                break;
                            }
                            n++;
                        }
                        for (;a < r; a++) if ((o = this._children[a]).x != s.x) {
                            this.clearSelection(), this.addSelection(a - n - 1, !0);
                            break;
                        }
                    }
                    break;

                  case 5:
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) ++i < this.numItems && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
                        for (s = this._children[i], n = 0, r = this._children.length, a = i + 1; a < r; a++) {
                            if ((o = this._children[a]).y != s.y) {
                                s = o;
                                break;
                            }
                            n++;
                        }
                        for (;a < r; a++) if ((o = this._children[a]).y != s.y) {
                            this.clearSelection(), this.addSelection(a - n - 1, !0);
                            break;
                        }
                    }
                    break;

                  case 7:
                    if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) --i >= 0 && (this.clearSelection(), 
                    this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                        for (s = this._children[i], n = 0, a = i - 1; a >= 0; a--) {
                            if ((o = this._children[a]).x != s.x) {
                                s = o;
                                break;
                            }
                            n++;
                        }
                        for (;a >= 0; a--) if ((o = this._children[a]).x != s.x) {
                            this.clearSelection(), this.addSelection(a + n + 1, !0);
                            break;
                        }
                    }
                }
            }
        }, {
            key: "__clickItem",
            value: function(e) {
                if (null == this._scrollPane || !this._scrollPane.isDragged) {
                    var i = t.GObject.cast(e.currentTarget);
                    this.setSelectionOnEvent(i, e), this._scrollPane && this.scrollItemToViewOnClick && this._scrollPane.scrollToView(i, !0), 
                    this.dispatchItemEvent(i, t.Events.createEvent(t.Events.CLICK_ITEM, this.displayObject, e));
                }
            }
        }, {
            key: "dispatchItemEvent",
            value: function(e, i) {
                this.displayObject.event(t.Events.CLICK_ITEM, [ e, i ]);
            }
        }, {
            key: "setSelectionOnEvent",
            value: function(e, i) {
                if (e instanceof t.GButton && this._selectionMode != t.ListSelectionMode.None) {
                    var s = !1, n = e, a = this.childIndexToItemIndex(this.getChildIndex(e));
                    if (this._selectionMode == t.ListSelectionMode.Single) n.selected || (this.clearSelectionExcept(n), 
                    n.selected = !0); else if (i.shiftKey) {
                        if (!n.selected) if (-1 != this._lastSelectedIndex) {
                            var o, r = Math.min(this._lastSelectedIndex, a), l = Math.max(this._lastSelectedIndex, a);
                            if (l = Math.min(l, this.numItems - 1), this._virtual) for (o = r; o <= l; o++) {
                                var h = this._virtualItems[o];
                                h.obj instanceof t.GButton && (h.obj.selected = !0), h.selected = !0;
                            } else for (o = r; o <= l; o++) {
                                var u = this.getChildAt(o).asButton;
                                null != u && (u.selected = !0);
                            }
                            s = !0;
                        } else n.selected = !0;
                    } else i.ctrlKey || this._selectionMode == t.ListSelectionMode.Multiple_SingleClick ? n.selected = !n.selected : n.selected ? this.clearSelectionExcept(n) : (this.clearSelectionExcept(n), 
                    n.selected = !0);
                    s || (this._lastSelectedIndex = a), n.selected && this.updateSelectionController(a);
                }
            }
        }, {
            key: "resizeToFit",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e6, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.ensureBoundsCorrect();
                var s = this.numItems;
                if (e > s && (e = s), this._virtual) {
                    Math.ceil(e / this._curLineItemCount);
                    this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = this.lineCount * this._itemSize.y + Math.max(0, this.lineCount - 1) * this._lineGap : this.viewWidth = this.lineCount * this._itemSize.x + Math.max(0, this.lineCount - 1) * this._columnGap;
                } else if (0 == e) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                    for (var n = e - 1, a = null; n >= 0 && (a = this.getChildAt(n), this.foldInvisibleItems && !a.visible); ) n--;
                    if (n < 0) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                        var o = 0;
                        this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? ((o = a.y + a.height) < i && (o = i), 
                        this.viewHeight = o) : ((o = a.x + a.width) < i && (o = i), this.viewWidth = o);
                    }
                }
            }
        }, {
            key: "getMaxItemWidth",
            value: function() {
                for (var t = this._children.length, e = 0, i = 0; i < t; i++) {
                    var s = this.getChildAt(i);
                    s.width > e && (e = s.width);
                }
                return e;
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                _get(_getPrototypeOf(GList.prototype), "handleSizeChanged", this).call(this), this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0);
            }
        }, {
            key: "handleControllerChanged",
            value: function(t) {
                _get(_getPrototypeOf(GList.prototype), "handleControllerChanged", this).call(this, t), 
                this._selectionController == t && (this.selectedIndex = t.selectedIndex);
            }
        }, {
            key: "updateSelectionController",
            value: function(t) {
                if (null != this._selectionController && !this._selectionController.changing && t < this._selectionController.pageCount) {
                    var e = this._selectionController;
                    this._selectionController = null, e.selectedIndex = t, this._selectionController = e;
                }
            }
        }, {
            key: "shouldSnapToNext",
            value: function(e, i, s) {
                return e < 0 && i > t.UIConfig.defaultScrollSnappingThreshold * s || e > 0 && i > (1 - t.UIConfig.defaultScrollSnappingThreshold) * s || 0 == e && i > s / 2;
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function(e, i, s, n) {
                var a, o, r, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return this._virtual ? (l || (l = new Laya.Point()), this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (a = i, 
                GList.pos_param = i, o = this.getIndexOnPos1(!1), i = GList.pos_param, o < this._virtualItems.length && o < this._realNumItems && (r = this._virtualItems[o].height, 
                this.shouldSnapToNext(n, a - i, r) && (i += r + this._lineGap))) : this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical ? (a = e, 
                GList.pos_param = e, o = this.getIndexOnPos2(!1), e = GList.pos_param, o < this._virtualItems.length && o < this._realNumItems && (r = this._virtualItems[o].width, 
                this.shouldSnapToNext(s, a - e, r) && (e += r + this._columnGap))) : (a = e, GList.pos_param = e, 
                o = this.getIndexOnPos3(!1), e = GList.pos_param, o < this._virtualItems.length && o < this._realNumItems && (r = this._virtualItems[o].width, 
                this.shouldSnapToNext(s, a - e, r) && (e += r + this._columnGap))), l.x = e, l.y = i, 
                l) : _get(_getPrototypeOf(GList.prototype), "getSnappingPositionWithDir", this).call(this, e, i, s, n, l);
            }
        }, {
            key: "scrollToView",
            value: function(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this._virtual) {
                    if (0 == this._numItems) return;
                    if (this.checkVirtualList(), e >= this._virtualItems.length) throw new Error("Invalid child index: " + e + ">" + this._virtualItems.length);
                    var n;
                    this._loop && (e = Math.floor(this._firstIndex / this._numItems) * this._numItems + e);
                    var a, o = this._virtualItems[e], r = 0;
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                        for (a = this._curLineItemCount - 1; a < e; a += this._curLineItemCount) r += this._virtualItems[a].height + this._lineGap;
                        n = new Laya.Rectangle(0, r, this._itemSize.x, o.height);
                    } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                        for (a = this._curLineItemCount - 1; a < e; a += this._curLineItemCount) r += this._virtualItems[a].width + this._columnGap;
                        n = new Laya.Rectangle(r, 0, o.width, this._itemSize.y);
                    } else {
                        var l = e / (this._curLineItemCount * this._curLineItemCount2);
                        n = new Laya.Rectangle(l * this.viewWidth + e % this._curLineItemCount * (o.width + this._columnGap), e / this._curLineItemCount % this._curLineItemCount2 * (o.height + this._lineGap), o.width, o.height);
                    }
                    s = !0, null != this._scrollPane && this._scrollPane.scrollToView(n, i, s);
                } else {
                    var h = this.getChildAt(e);
                    null != this._scrollPane ? this._scrollPane.scrollToView(h, i, s) : null != this._parent && null != this._parent.scrollPane && this._parent.scrollPane.scrollToView(h, i, s);
                }
            }
        }, {
            key: "getFirstChildInView",
            value: function() {
                return this.childIndexToItemIndex(_get(_getPrototypeOf(GList.prototype), "getFirstChildInView", this).call(this));
            }
        }, {
            key: "childIndexToItemIndex",
            value: function(e) {
                if (!this._virtual) return e;
                if (this._layout == t.ListLayoutType.Pagination) {
                    for (var i = this._firstIndex; i < this._realNumItems; i++) if (null != this._virtualItems[i].obj && --e < 0) return i;
                    return e;
                }
                return e += this._firstIndex, this._loop && this._numItems > 0 && (e %= this._numItems), 
                e;
            }
        }, {
            key: "itemIndexToChildIndex",
            value: function(e) {
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
            value: function() {
                this._setVirtual(!1);
            }
        }, {
            key: "setVirtualAndLoop",
            value: function() {
                this._setVirtual(!0);
            }
        }, {
            key: "_setVirtual",
            value: function(e) {
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
            value: function() {
                this.setVirtualListChangedFlag(!1);
            }
        }, {
            key: "checkVirtualList",
            value: function() {
                0 != this._virtualListChanged && (this._refreshVirtualList(), Laya.timer.clear(this, this._refreshVirtualList));
            }
        }, {
            key: "setVirtualListChangedFlag",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._virtualListChanged = 2 : 0 == this._virtualListChanged && (this._virtualListChanged = 1), 
                Laya.timer.callLater(this, this._refreshVirtualList);
            }
        }, {
            key: "_refreshVirtualList",
            value: function() {
                if (this._displayObject) {
                    var e = 2 == this._virtualListChanged;
                    this._virtualListChanged = 0, this._eventLocked = !0, e && (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.SingleRow ? this._curLineItemCount = 1 : this._layout == t.ListLayoutType.FlowHorizontal ? this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : this._layout == t.ListLayoutType.FlowVertical ? this._lineCount > 0 ? this._curLineItemCount = this._lineCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : (this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap)), 
                    this._curLineItemCount <= 0 && (this._curLineItemCount = 1)), this._lineCount > 0 ? this._curLineItemCount2 = this._lineCount : (this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap)), 
                    this._curLineItemCount2 <= 0 && (this._curLineItemCount2 = 1))));
                    var i = 0, s = 0;
                    if (this._realNumItems > 0) {
                        var n, a = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount, o = Math.min(this._curLineItemCount, this._realNumItems);
                        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                            for (n = 0; n < a; n += this._curLineItemCount) i += this._virtualItems[n].height + this._lineGap;
                            if (i > 0 && (i -= this._lineGap), this._autoResizeItem) s = this._scrollPane.viewWidth; else {
                                for (n = 0; n < o; n++) s += this._virtualItems[n].width + this._columnGap;
                                s > 0 && (s -= this._columnGap);
                            }
                        } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                            for (n = 0; n < a; n += this._curLineItemCount) s += this._virtualItems[n].width + this._columnGap;
                            if (s > 0 && (s -= this._columnGap), this._autoResizeItem) i = this._scrollPane.viewHeight; else {
                                for (n = 0; n < o; n++) i += this._virtualItems[n].height + this._lineGap;
                                i > 0 && (i -= this._lineGap);
                            }
                        } else {
                            s = Math.ceil(a / (this._curLineItemCount * this._curLineItemCount2)) * this.viewWidth, 
                            i = this.viewHeight;
                        }
                    }
                    this.handleAlign(s, i), this._scrollPane.setContentSize(s, i), this._eventLocked = !1, 
                    this.handleScroll(!0);
                }
            }
        }, {
            key: "__scrolled",
            value: function(t) {
                this.handleScroll(!1);
            }
        }, {
            key: "getIndexOnPos1",
            value: function(t) {
                if (this._realNumItems < this._curLineItemCount) return GList.pos_param = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).y) > GList.pos_param) {
                        for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) if ((i -= this._virtualItems[e].height + this._lineGap) <= GList.pos_param) return GList.pos_param = i, 
                        e;
                        return GList.pos_param = 0, 0;
                    }
                    for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((s = i + this._virtualItems[e].height + this._lineGap) > GList.pos_param) return GList.pos_param = i, 
                        e;
                        i = s;
                    }
                    return GList.pos_param = i, this._realNumItems - this._curLineItemCount;
                }
                for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                    if ((s = i + this._virtualItems[e].height + this._lineGap) > GList.pos_param) return GList.pos_param = i, 
                    e;
                    i = s;
                }
                return GList.pos_param = i, this._realNumItems - this._curLineItemCount;
            }
        }, {
            key: "getIndexOnPos2",
            value: function(t) {
                if (this._realNumItems < this._curLineItemCount) return GList.pos_param = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).x) > GList.pos_param) {
                        for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) if ((i -= this._virtualItems[e].width + this._columnGap) <= GList.pos_param) return GList.pos_param = i, 
                        e;
                        return GList.pos_param = 0, 0;
                    }
                    for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((s = i + this._virtualItems[e].width + this._columnGap) > GList.pos_param) return GList.pos_param = i, 
                        e;
                        i = s;
                    }
                    return GList.pos_param = i, this._realNumItems - this._curLineItemCount;
                }
                for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                    if ((s = i + this._virtualItems[e].width + this._columnGap) > GList.pos_param) return GList.pos_param = i, 
                    e;
                    i = s;
                }
                return GList.pos_param = i, this._realNumItems - this._curLineItemCount;
            }
        }, {
            key: "getIndexOnPos3",
            value: function(t) {
                if (this._realNumItems < this._curLineItemCount) return GList.pos_param = 0, 0;
                var e, i, s = this.viewWidth, n = Math.floor(GList.pos_param / s), a = n * (this._curLineItemCount * this._curLineItemCount2), o = n * s;
                for (e = 0; e < this._curLineItemCount; e++) {
                    if ((i = o + this._virtualItems[a + e].width + this._columnGap) > GList.pos_param) return GList.pos_param = o, 
                    a + e;
                    o = i;
                }
                return GList.pos_param = o, a + this._curLineItemCount - 1;
            }
        }, {
            key: "handleScroll",
            value: function(e) {
                if (!this._eventLocked) {
                    if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                        for (var i = 0; this.handleScroll1(e); ) if (e = !1, ++i > 20) {
                            console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            break;
                        }
                        this.handleArchOrder1();
                    } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                        for (i = 0; this.handleScroll2(e); ) if (e = !1, ++i > 20) {
                            console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            break;
                        }
                        this.handleArchOrder2();
                    } else this.handleScroll3(e);
                    this._boundsChanged = !1;
                }
            }
        }, {
            key: "handleScroll1",
            value: function(e) {
                var i = this._scrollPane.scrollingPosY, s = i + this._scrollPane.viewHeight, n = s == this._scrollPane.contentHeight;
                GList.pos_param = i;
                var a = this.getIndexOnPos1(e);
                if (i = GList.pos_param, a == this._firstIndex && !e) return !1;
                var o = this._firstIndex;
                this._firstIndex = a;
                var r, l, h, u, _, c = a, d = o > a, g = this.numChildren, p = o + g - 1, f = d ? p : o, y = 0, v = i, m = 0, C = 0, k = this.defaultItem, w = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                for (this.itemInfoVer++; c < this._realNumItems && (n || v < s); ) {
                    if ((null == (l = this._virtualItems[c]).obj || e) && (null != this.itemProvider && (null == (k = this.itemProvider.runWith(c % this._numItems)) && (k = this._defaultItem), 
                    k = t.UIPackage.normalizeURL(k)), null != l.obj && l.obj.resourceURL != k && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                    this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                        if (d) {
                            for (_ = f; _ >= o; _--) if (null != (h = this._virtualItems[_]).obj && h.updateFlag != this.itemInfoVer && h.obj.resourceURL == k) {
                                h.obj instanceof t.GButton && (h.selected = h.obj.selected), l.obj = h.obj, h.obj = null, 
                                _ == f && f--;
                                break;
                            }
                        } else for (_ = f; _ <= p; _++) if (null != (h = this._virtualItems[_]).obj && h.updateFlag != this.itemInfoVer && h.obj.resourceURL == k) {
                            h.obj instanceof t.GButton && (h.selected = h.obj.selected), l.obj = h.obj, h.obj = null, 
                            _ == f && f++;
                            break;
                        }
                        null != l.obj ? this.setChildIndex(l.obj, d ? c - a : this.numChildren) : (l.obj = this._pool.getObject(k), 
                        d ? this.addChildAt(l.obj, c - a) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), 
                        r = !0;
                    } else r = e;
                    r && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleColumn || this._columnCount > 0) && l.obj.setSize(w, l.obj.height, !0), 
                    this.itemRenderer.runWith([ c % this._numItems, l.obj ]), c % this._curLineItemCount == 0 && (m += Math.ceil(l.obj.height) - l.height, 
                    c == a && o > a && (C = Math.ceil(l.obj.height) - l.height)), l.width = Math.ceil(l.obj.width), 
                    l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setXY(y, v), 
                    c == a && (s += l.height), y += l.width + this._columnGap, c % this._curLineItemCount == this._curLineItemCount - 1 && (y = 0, 
                    v += l.height + this._lineGap), c++;
                }
                for (u = 0; u < g; u++) (l = this._virtualItems[o + u]).updateFlag != this.itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                this.removeChildToPool(l.obj), l.obj = null);
                for (g = this._children.length, u = 0; u < g; u++) {
                    var b = this._virtualItems[a + u].obj;
                    this._children[u] != b && this.setChildIndex(b, u);
                }
                return 0 == m && 0 == C || this._scrollPane.changeContentSizeOnScrolling(0, m, 0, C), 
                c > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y;
            }
        }, {
            key: "handleScroll2",
            value: function(e) {
                var i = this._scrollPane.scrollingPosX, s = i + this._scrollPane.viewWidth, n = i == this._scrollPane.contentWidth;
                GList.pos_param = i;
                var a = this.getIndexOnPos2(e);
                if (i = GList.pos_param, a == this._firstIndex && !e) return !1;
                var o = this._firstIndex;
                this._firstIndex = a;
                var r, l, h, u, _, c = a, d = o > a, g = this.numChildren, p = o + g - 1, f = d ? p : o, y = i, v = 0, m = 0, C = 0, k = this.defaultItem, w = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                for (this.itemInfoVer++; c < this._realNumItems && (n || y < s); ) {
                    if ((null == (l = this._virtualItems[c]).obj || e) && (null != this.itemProvider && (null == (k = this.itemProvider.runWith(c % this._numItems)) && (k = this._defaultItem), 
                    k = t.UIPackage.normalizeURL(k)), null != l.obj && l.obj.resourceURL != k && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                    this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                        if (d) {
                            for (_ = f; _ >= o; _--) if (null != (h = this._virtualItems[_]).obj && h.updateFlag != this.itemInfoVer && h.obj.resourceURL == k) {
                                h.obj instanceof t.GButton && (h.selected = h.obj.selected), l.obj = h.obj, h.obj = null, 
                                _ == f && f--;
                                break;
                            }
                        } else for (_ = f; _ <= p; _++) if (null != (h = this._virtualItems[_]).obj && h.updateFlag != this.itemInfoVer && h.obj.resourceURL == k) {
                            h.obj instanceof t.GButton && (h.selected = h.obj.selected), l.obj = h.obj, h.obj = null, 
                            _ == f && f++;
                            break;
                        }
                        null != l.obj ? this.setChildIndex(l.obj, d ? c - a : this.numChildren) : (l.obj = this._pool.getObject(k), 
                        d ? this.addChildAt(l.obj, c - a) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), 
                        r = !0;
                    } else r = e;
                    r && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleRow || this._lineCount > 0) && l.obj.setSize(l.obj.width, w, !0), 
                    this.itemRenderer.runWith([ c % this._numItems, l.obj ]), c % this._curLineItemCount == 0 && (m += Math.ceil(l.obj.width) - l.width, 
                    c == a && o > a && (C = Math.ceil(l.obj.width) - l.width)), l.width = Math.ceil(l.obj.width), 
                    l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setXY(y, v), 
                    c == a && (s += l.width), v += l.height + this._lineGap, c % this._curLineItemCount == this._curLineItemCount - 1 && (v = 0, 
                    y += l.width + this._columnGap), c++;
                }
                for (u = 0; u < g; u++) (l = this._virtualItems[o + u]).updateFlag != this.itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                this.removeChildToPool(l.obj), l.obj = null);
                for (g = this._children.length, u = 0; u < g; u++) {
                    var b = this._virtualItems[a + u].obj;
                    this._children[u] != b && this.setChildIndex(b, u);
                }
                return 0 == m && 0 == C || this._scrollPane.changeContentSizeOnScrolling(m, 0, C, 0), 
                c > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x;
            }
        }, {
            key: "handleScroll3",
            value: function(e) {
                var i = this._scrollPane.scrollingPosX;
                GList.pos_param = i;
                var s = this.getIndexOnPos3(e);
                if (i = GList.pos_param, s != this._firstIndex || e) {
                    var n = this._firstIndex;
                    this._firstIndex = s;
                    var a, o, r, l, h, u = n, _ = this._virtualItems.length, c = this._curLineItemCount * this._curLineItemCount2, d = s % this._curLineItemCount, g = this.viewWidth, p = Math.floor(s / c) * c, f = p + 2 * c, y = this._defaultItem, v = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount, m = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
                    for (this.itemInfoVer++, o = p; o < f; o++) if (!(o >= this._realNumItems)) {
                        if (h = o % this._curLineItemCount, o - p < c) {
                            if (h < d) continue;
                        } else if (h > d) continue;
                        (r = this._virtualItems[o]).updateFlag = this.itemInfoVer;
                    }
                    var C = null, k = 0;
                    for (o = p; o < f; o++) if (!(o >= this._realNumItems) && (r = this._virtualItems[o]).updateFlag == this.itemInfoVer) {
                        if (null == r.obj) {
                            for (;u < _; ) {
                                if (null != (l = this._virtualItems[u]).obj && l.updateFlag != this.itemInfoVer) {
                                    l.obj instanceof t.GButton && (l.selected = l.obj.selected), r.obj = l.obj, l.obj = null;
                                    break;
                                }
                                u++;
                            }
                            -1 == k && (k = this.getChildIndex(C) + 1), null == r.obj ? (null != this.itemProvider && (null == (y = this.itemProvider.runWith(o % this._numItems)) && (y = this._defaultItem), 
                            y = t.UIPackage.normalizeURL(y)), r.obj = this._pool.getObject(y), this.addChildAt(r.obj, k)) : k = this.setChildIndexBefore(r.obj, k), 
                            k++, r.obj instanceof t.GButton && (r.obj.selected = r.selected), a = !0;
                        } else a = e, k = -1, C = r.obj;
                        a && (this._autoResizeItem && (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount ? r.obj.setSize(v, m, !0) : this._curLineItemCount == this._columnCount ? r.obj.setSize(v, r.obj.height, !0) : this._curLineItemCount2 == this._lineCount && r.obj.setSize(r.obj.width, m, !0)), 
                        this.itemRenderer.runWith([ o % this._numItems, r.obj ]), r.width = Math.ceil(r.obj.width), 
                        r.height = Math.ceil(r.obj.height));
                    }
                    var w = p / c * g, b = w, S = 0, x = 0;
                    for (o = p; o < f; o++) o >= this._realNumItems || ((r = this._virtualItems[o]).updateFlag == this.itemInfoVer && r.obj.setXY(b, S), 
                    r.height > x && (x = r.height), o % this._curLineItemCount == this._curLineItemCount - 1 ? (b = w, 
                    S += x + this._lineGap, x = 0, o == p + c - 1 && (b = w += g, S = 0)) : b += r.width + this._columnGap);
                    for (o = u; o < _; o++) (r = this._virtualItems[o]).updateFlag != this.itemInfoVer && null != r.obj && (r.obj instanceof t.GButton && (r.selected = r.obj.selected), 
                    this.removeChildToPool(r.obj), r.obj = null);
                }
            }
        }, {
            key: "handleArchOrder1",
            value: function() {
                if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                    for (var e = this._scrollPane.posY + this.viewHeight / 2, i = Number.POSITIVE_INFINITY, s = 0, n = 0, a = this.numChildren, o = 0; o < a; o++) {
                        var r = this.getChildAt(o);
                        this.foldInvisibleItems && !r.visible || (s = Math.abs(e - r.y - r.height / 2)) < i && (i = s, 
                        n = o);
                    }
                    this.apexIndex = n;
                }
            }
        }, {
            key: "handleArchOrder2",
            value: function() {
                if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                    for (var e = this._scrollPane.posX + this.viewWidth / 2, i = Number.POSITIVE_INFINITY, s = 0, n = 0, a = this.numChildren, o = 0; o < a; o++) {
                        var r = this.getChildAt(o);
                        this.foldInvisibleItems && !r.visible || (s = Math.abs(e - r.x - r.width / 2)) < i && (i = s, 
                        n = o);
                    }
                    this.apexIndex = n;
                }
            }
        }, {
            key: "handleAlign",
            value: function(t, e) {
                var i = 0, s = 0;
                e < this.viewHeight && ("middle" == this._verticalAlign ? s = Math.floor((this.viewHeight - e) / 2) : "bottom" == this._verticalAlign && (s = this.viewHeight - e)), 
                t < this.viewWidth && ("center" == this._align ? i = Math.floor((this.viewWidth - t) / 2) : "right" == this._align && (i = this.viewWidth - t)), 
                i == this._alignOffset.x && s == this._alignOffset.y || (this._alignOffset.setTo(i, s), 
                null != this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y));
            }
        }, {
            key: "updateBounds",
            value: function() {
                if (!this._virtual) {
                    var e, i, s, n, a, o = 0, r = 0, l = 0, h = 0, u = 0, _ = 0, c = 0, d = this._children.length, g = this.viewWidth, p = this.viewHeight, f = 0, y = 0;
                    if (this._layout == t.ListLayoutType.SingleColumn) {
                        for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != r && (r += this._lineGap), 
                        i.y = r, this._autoResizeItem && i.setSize(g, i.height, !0), r += Math.ceil(i.height), 
                        i.width > l && (l = i.width));
                        if ((n = r) <= p && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) for (g += this._scrollPane.vtScrollBar.width, 
                        e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(g, i.height, !0), 
                        i.width > l && (l = i.width));
                        s = Math.ceil(l);
                    } else if (this._layout == t.ListLayoutType.SingleRow) {
                        for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), 
                        i.x = o, this._autoResizeItem && i.setSize(i.width, p, !0), o += Math.ceil(i.width), 
                        i.height > h && (h = i.height));
                        if ((s = o) <= g && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) for (p += this._scrollPane.hzScrollBar.height, 
                        e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(i.width, p, !0), 
                        i.height > h && (h = i.height));
                        n = Math.ceil(h);
                    } else if (this._layout == t.ListLayoutType.FlowHorizontal) if (this._autoResizeItem && this._columnCount > 0) {
                        for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceWidth, 
                        ++u == this._columnCount || e == d - 1)) {
                            for (a = (g - f - (u - 1) * this._columnGap) / f, o = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                            this.foldInvisibleItems && !i.visible || (i.setXY(o, r), u < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * a), i.height, !0), 
                            o += Math.ceil(i.width) + this._columnGap) : i.setSize(g - o, i.height, !0), i.height > h && (h = i.height));
                            r += Math.ceil(h) + this._lineGap, h = 0, u = 0, y = e + 1, f = 0;
                        }
                        n = r + Math.ceil(h), s = g;
                    } else {
                        for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), 
                        (0 != this._columnCount && u >= this._columnCount || 0 == this._columnCount && o + i.width > g && 0 != h) && (o = 0, 
                        r += Math.ceil(h) + this._lineGap, h = 0, u = 0), i.setXY(o, r), (o += Math.ceil(i.width)) > l && (l = o), 
                        i.height > h && (h = i.height), u++);
                        n = r + Math.ceil(h), s = Math.ceil(l);
                    } else if (this._layout == t.ListLayoutType.FlowVertical) if (this._autoResizeItem && this._lineCount > 0) {
                        for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceHeight, 
                        ++u == this._lineCount || e == d - 1)) {
                            for (a = (p - f - (u - 1) * this._lineGap) / f, r = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                            this.foldInvisibleItems && !i.visible || (i.setXY(o, r), u < e ? (i.setSize(i.width, i.sourceHeight + Math.round(i.sourceHeight * a), !0), 
                            r += Math.ceil(i.height) + this._lineGap) : i.setSize(i.width, p - r, !0), i.width > l && (l = i.width));
                            o += Math.ceil(l) + this._columnGap, l = 0, u = 0, y = e + 1, f = 0;
                        }
                        s = o + Math.ceil(l), n = p;
                    } else {
                        for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != r && (r += this._lineGap), 
                        (0 != this._lineCount && u >= this._lineCount || 0 == this._lineCount && r + i.height > p && 0 != l) && (r = 0, 
                        o += Math.ceil(l) + this._columnGap, l = 0, u = 0), i.setXY(o, r), (r += Math.ceil(i.height)) > h && (h = r), 
                        i.width > l && (l = i.width), u++);
                        s = o + Math.ceil(l), n = Math.ceil(h);
                    } else {
                        var v;
                        if (this._autoResizeItem && this._lineCount > 0 && (v = Math.floor((p - (this._lineCount - 1) * this._lineGap) / this._lineCount)), 
                        this._autoResizeItem && this._columnCount > 0) {
                            for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (0 == u && (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && r + i.height > p) && (_++, 
                            r = 0, c = 0), f += i.sourceWidth, ++u == this._columnCount || e == d - 1)) {
                                for (a = (g - f - (u - 1) * this._columnGap) / f, o = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                                this.foldInvisibleItems && !i.visible || (i.setXY(_ * g + o, r), u < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * a), this._lineCount > 0 ? v : i.height, !0), 
                                o += Math.ceil(i.width) + this._columnGap) : i.setSize(g - o, this._lineCount > 0 ? v : i.height, !0), 
                                i.height > h && (h = i.height));
                                r += Math.ceil(h) + this._lineGap, h = 0, u = 0, y = e + 1, f = 0, c++;
                            }
                        } else for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), 
                        this._autoResizeItem && this._lineCount > 0 && i.setSize(i.width, v, !0), (0 != this._columnCount && u >= this._columnCount || 0 == this._columnCount && o + i.width > g && 0 != h) && (o = 0, 
                        r += Math.ceil(h) + this._lineGap, h = 0, u = 0, c++, (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && r + i.height > p && 0 != l) && (_++, 
                        r = 0, c = 0)), i.setXY(_ * g + o, r), (o += Math.ceil(i.width)) > l && (l = o), 
                        i.height > h && (h = i.height), u++);
                        n = _ > 0 ? p : r + Math.ceil(h), s = (_ + 1) * g;
                    }
                    this.handleAlign(s, n), this.setBounds(0, 0, s, n);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function(e, i) {
                var s;
                _get(_getPrototypeOf(GList.prototype), "setup_beforeAdd", this).call(this, e, i), 
                e.seek(i, 5), this._layout = e.readByte(), this._selectionMode = e.readByte(), s = e.readByte(), 
                this._align = 0 == s ? "left" : 1 == s ? "center" : "right", s = e.readByte(), this._verticalAlign = 0 == s ? "top" : 1 == s ? "middle" : "bottom", 
                this._lineGap = e.getInt16(), this._columnGap = e.getInt16(), this._lineCount = e.getInt16(), 
                this._columnCount = e.getInt16(), this._autoResizeItem = e.readBool(), this._childrenRenderOrder = e.readByte(), 
                this._apexIndex = e.getInt16(), e.readBool() && (this._margin.top = e.getInt32(), 
                this._margin.bottom = e.getInt32(), this._margin.left = e.getInt32(), this._margin.right = e.getInt32());
                var n = e.readByte();
                if (n == t.OverflowType.Scroll) {
                    var a = e.pos;
                    e.seek(i, 7), this.setupScroll(e), e.pos = a;
                } else this.setupOverflow(n);
                e.readBool() && e.skip(8), e.version >= 2 && (this.scrollItemToViewOnClick = e.readBool(), 
                this.foldInvisibleItems = e.readBool()), e.seek(i, 8), this._defaultItem = e.readS(), 
                this.readItems(e);
            }
        }, {
            key: "readItems",
            value: function(t) {
                var e, i, s, n;
                for (e = t.getInt16(), i = 0; i < e; i++) if (s = t.getInt16(), s += t.pos, null != (n = t.readS()) || (n = this.defaultItem)) {
                    var a = this.getFromPool(n);
                    null != a && (this.addChild(a), this.setupItem(t, a)), t.pos = s;
                } else t.pos = s;
            }
        }, {
            key: "setupItem",
            value: function(e, i) {
                var s, n, a;
                if (null != (s = e.readS()) && (i.text = s), null != (s = e.readS()) && i instanceof t.GButton && (i.selectedTitle = s), 
                null != (s = e.readS()) && (i.icon = s), null != (s = e.readS()) && i instanceof t.GButton && (i.selectedIcon = s), 
                null != (s = e.readS()) && (i.name = s), i instanceof t.GComponent) {
                    for (n = e.getInt16(), a = 0; a < n; a++) {
                        var o = i.getController(e.readS());
                        s = e.readS(), null != o && (o.selectedPageId = s);
                    }
                    if (e.version >= 2) for (n = e.getInt16(), a = 0; a < n; a++) {
                        var r = e.readS(), l = e.getInt16(), h = e.readS(), u = i.getChildByPath(r);
                        u && u.setProp(l, h);
                    }
                }
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GList.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6);
                var i = t.getInt16();
                -1 != i && (this._selectionController = this._parent.getControllerAt(i));
            }
        }, {
            key: "layout",
            get: function() {
                return this._layout;
            },
            set: function(t) {
                this._layout != t && (this._layout = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "lineCount",
            get: function() {
                return this._lineCount;
            },
            set: function(e) {
                this._lineCount != e && (this._lineCount = e, this._layout != t.ListLayoutType.FlowVertical && this._layout != t.ListLayoutType.Pagination || (this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0)));
            }
        }, {
            key: "columnCount",
            get: function() {
                return this._columnCount;
            },
            set: function(e) {
                this._columnCount != e && (this._columnCount = e, this._layout != t.ListLayoutType.FlowHorizontal && this._layout != t.ListLayoutType.Pagination || (this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0)));
            }
        }, {
            key: "lineGap",
            get: function() {
                return this._lineGap;
            },
            set: function(t) {
                this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "columnGap",
            get: function() {
                return this._columnGap;
            },
            set: function(t) {
                this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "align",
            get: function() {
                return this._align;
            },
            set: function(t) {
                this._align != t && (this._align = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "verticalAlign",
            get: function() {
                return this._verticalAlign;
            },
            set: function(t) {
                this._verticalAlign != t && (this._verticalAlign = t, this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "virtualItemSize",
            get: function() {
                return this._itemSize;
            },
            set: function(t) {
                this._virtual && (null == this._itemSize && (this._itemSize = new Laya.Point()), 
                this._itemSize.setTo(t.x, t.y), this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "defaultItem",
            get: function() {
                return this._defaultItem;
            },
            set: function(t) {
                this._defaultItem = t;
            }
        }, {
            key: "autoResizeItem",
            get: function() {
                return this._autoResizeItem;
            },
            set: function(t) {
                this._autoResizeItem != t && (this._autoResizeItem = t, this.setBoundsChangedFlag(), 
                this._virtual && this.setVirtualListChangedFlag(!0));
            }
        }, {
            key: "selectionMode",
            get: function() {
                return this._selectionMode;
            },
            set: function(t) {
                this._selectionMode = t;
            }
        }, {
            key: "selectionController",
            get: function() {
                return this._selectionController;
            },
            set: function(t) {
                this._selectionController = t;
            }
        }, {
            key: "itemPool",
            get: function() {
                return this._pool;
            }
        }, {
            key: "selectedIndex",
            get: function() {
                var e;
                if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                    var i = this._virtualItems[e];
                    if (i.obj instanceof t.GButton && i.obj.selected || null == i.obj && i.selected) return this._loop ? e % this._numItems : e;
                } else {
                    var s = this._children.length;
                    for (e = 0; e < s; e++) {
                        var n = this._children[e].asButton;
                        if (null != n && n.selected) return e;
                    }
                }
                return -1;
            },
            set: function(e) {
                e >= 0 && e < this.numItems ? (this._selectionMode != t.ListSelectionMode.Single && this.clearSelection(), 
                this.addSelection(e)) : this.clearSelection();
            }
        }, {
            key: "numItems",
            get: function() {
                return this._virtual ? this._numItems : this._children.length;
            },
            set: function(t) {
                var e;
                if (this._virtual) {
                    if (null == this.itemRenderer) throw new Error("set itemRenderer first!");
                    this._numItems = t, this._loop ? this._realNumItems = 6 * this._numItems : this._realNumItems = this._numItems;
                    var s = this._virtualItems.length;
                    if (this._realNumItems > s) for (e = s; e < this._realNumItems; e++) {
                        var n = new i();
                        n.width = this._itemSize.x, n.height = this._itemSize.y, this._virtualItems.push(n);
                    } else for (e = this._realNumItems; e < s; e++) this._virtualItems[e].selected = !1;
                    0 != this._virtualListChanged && Laya.timer.clear(this, this._refreshVirtualList), 
                    this._refreshVirtualList();
                } else {
                    var a = this._children.length;
                    if (t > a) for (e = a; e < t; e++) null == this.itemProvider ? this.addItemFromPool() : this.addItemFromPool(this.itemProvider.runWith(e)); else this.removeChildrenToPool(t, a);
                    if (null != this.itemRenderer) for (e = 0; e < t; e++) this.itemRenderer.runWith([ e, this.getChildAt(e) ]);
                }
            }
        } ]), GList;
    }();
    t.GList = e;
    var i = function ItemInfo() {
        _classCallCheck(this, ItemInfo), this.width = 0, this.height = 0, this.updateFlag = 0, 
        this.selected = !1;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GObjectPool() {
            _classCallCheck(this, GObjectPool), this._count = 0, this._pool = {};
        }
        return _createClass(GObjectPool, [ {
            key: "clear",
            value: function() {
                for (var t in this._pool) for (var e = this._pool[t], i = e.length, s = 0; s < i; s++) e[s].dispose();
                this._pool = {}, this._count = 0;
            }
        }, {
            key: "getObject",
            value: function(e) {
                if (null == (e = t.UIPackage.normalizeURL(e))) return null;
                var i = this._pool[e];
                return null != i && i.length > 0 ? (this._count--, i.shift()) : t.UIPackage.createObjectFromURL(e);
            }
        }, {
            key: "returnObject",
            value: function(t) {
                var e = t.resourceURL;
                if (e) {
                    var i = this._pool[e];
                    null == i && (i = [], this._pool[e] = i), this._count++, i.push(t);
                }
            }
        }, {
            key: "count",
            get: function() {
                return this._count;
            }
        } ]), GObjectPool;
    }();
    t.GObjectPool = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GLoader() {
            var e;
            return _classCallCheck(this, GLoader), (e = _possibleConstructorReturn(this, _getPrototypeOf(GLoader).call(this)))._contentSourceWidth = 0, 
            e._contentSourceHeight = 0, e._contentWidth = 0, e._contentHeight = 0, e._url = "", 
            e._fill = t.LoaderFillType.None, e._align = "left", e._valign = "top", e._showErrorSign = !0, 
            e;
        }
        return _inherits(GLoader, t.GObject), _createClass(GLoader, [ {
            key: "createDisplayObject",
            value: function() {
                _get(_getPrototypeOf(GLoader.prototype), "createDisplayObject", this).call(this), 
                this._content = new t.MovieClip(), this._displayObject.addChild(this._content), 
                this._displayObject.mouseEnabled = !0;
            }
        }, {
            key: "dispose",
            value: function() {
                null == this._contentItem && null != this._content.texture && this.freeExternal(this._content.texture), 
                null != this._content2 && this._content2.dispose(), _get(_getPrototypeOf(GLoader.prototype), "dispose", this).call(this);
            }
        }, {
            key: "loadContent",
            value: function() {
                this.clearContent(), this._url && (t.ToolSet.startsWith(this._url, "ui://") ? this.loadFromPackage(this._url) : this.loadExternal());
            }
        }, {
            key: "loadFromPackage",
            value: function(e) {
                if (this._contentItem = t.UIPackage.getItemByURL(e), null != this._contentItem) if (this._contentItem = this._contentItem.getBranch(), 
                this._contentSourceWidth = this._contentItem.width, this._contentSourceHeight = this._contentItem.height, 
                this._contentItem = this._contentItem.getHighResolution(), this._contentItem.load(), 
                this._autoSize && this.setSize(this._contentSourceWidth, this._contentSourceHeight), 
                this._contentItem.type == t.PackageItemType.Image) null == this._contentItem.texture ? this.setErrorState() : (this._content.texture = this._contentItem.texture, 
                this._content.scale9Grid = this._contentItem.scale9Grid, this._content.scaleByTile = this._contentItem.scaleByTile, 
                this._content.tileGridIndice = this._contentItem.tileGridIndice, this._contentSourceWidth = this._contentItem.width, 
                this._contentSourceHeight = this._contentItem.height, this.updateLayout()); else if (this._contentItem.type == t.PackageItemType.MovieClip) this._contentSourceWidth = this._contentItem.width, 
                this._contentSourceHeight = this._contentItem.height, this._content.interval = this._contentItem.interval, 
                this._content.swing = this._contentItem.swing, this._content.repeatDelay = this._contentItem.repeatDelay, 
                this._content.frames = this._contentItem.frames, this.updateLayout(); else if (this._contentItem.type == t.PackageItemType.Component) {
                    var i = t.UIPackage.createObjectFromURL(e);
                    i ? i instanceof t.GComponent ? (this._content2 = i.asCom, this._displayObject.addChild(this._content2.displayObject), 
                    this.updateLayout()) : (i.dispose(), this.setErrorState()) : this.setErrorState();
                } else this.setErrorState(); else this.setErrorState();
            }
        }, {
            key: "loadExternal",
            value: function() {
                t.AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
            }
        }, {
            key: "freeExternal",
            value: function(t) {}
        }, {
            key: "onExternalLoadSuccess",
            value: function(t) {
                this._content.texture = t, this._content.scale9Grid = null, this._content.scaleByTile = !1, 
                this._contentSourceWidth = t.width, this._contentSourceHeight = t.height, this.updateLayout();
            }
        }, {
            key: "onExternalLoadFailed",
            value: function() {
                this.setErrorState();
            }
        }, {
            key: "__getResCompleted",
            value: function(t) {
                null != t ? this.onExternalLoadSuccess(t) : this.onExternalLoadFailed();
            }
        }, {
            key: "setErrorState",
            value: function() {
                this._showErrorSign && (null == this._errorSign && null != t.UIConfig.loaderErrorSign && (this._errorSign = GLoader._errorSignPool.getObject(t.UIConfig.loaderErrorSign)), 
                null != this._errorSign && (this._errorSign.setSize(this.width, this.height), this._displayObject.addChild(this._errorSign.displayObject)));
            }
        }, {
            key: "clearErrorState",
            value: function() {
                null != this._errorSign && (this._displayObject.removeChild(this._errorSign.displayObject), 
                GLoader._errorSignPool.returnObject(this._errorSign), this._errorSign = null);
            }
        }, {
            key: "updateLayout",
            value: function() {
                if (null != this._content2 || null != this._content.texture || null != this._content.frames) if (this._contentWidth = this._contentSourceWidth, 
                this._contentHeight = this._contentSourceHeight, this._autoSize && (this._updatingLayout = !0, 
                0 == this._contentWidth && (this._contentWidth = 50), 0 == this._contentHeight && (this._contentHeight = 30), 
                this.setSize(this._contentWidth, this._contentHeight), this._updatingLayout = !1, 
                this._contentWidth == this._width && this._contentHeight == this._height)) null != this._content2 ? (this._content2.setXY(0, 0), 
                this._content2.setScale(1, 1)) : (this._content.size(this._contentWidth, this._contentHeight), 
                this._content.pos(0, 0)); else {
                    var e, i, s = 1, n = 1;
                    this._fill != t.LoaderFillType.None && (s = this.width / this._contentSourceWidth, 
                    n = this.height / this._contentSourceHeight, 1 == s && 1 == n || (this._fill == t.LoaderFillType.ScaleMatchHeight ? s = n : this._fill == t.LoaderFillType.ScaleMatchWidth ? n = s : this._fill == t.LoaderFillType.Scale ? s > n ? s = n : n = s : this._fill == t.LoaderFillType.ScaleNoBorder && (s > n ? n = s : s = n), 
                    this._shrinkOnly && (s > 1 && (s = 1), n > 1 && (n = 1)), this._contentWidth = this._contentSourceWidth * s, 
                    this._contentHeight = this._contentSourceHeight * n)), null != this._content2 ? this._content2.setScale(s, n) : this._content.size(this._contentWidth, this._contentHeight), 
                    e = "center" == this._align ? Math.floor((this.width - this._contentWidth) / 2) : "right" == this._align ? this.width - this._contentWidth : 0, 
                    i = "middle" == this._valign ? Math.floor((this.height - this._contentHeight) / 2) : "bottom" == this._valign ? this.height - this._contentHeight : 0, 
                    null != this._content2 ? this._content2.setXY(e, i) : this._content.pos(e, i);
                } else this._autoSize && (this._updatingLayout = !0, this.setSize(50, 30), this._updatingLayout = !1);
            }
        }, {
            key: "clearContent",
            value: function() {
                this.clearErrorState(), null == this._contentItem && null != this._content.texture && this.freeExternal(this._content.texture), 
                this._content.texture = null, this._content.frames = null, null != this._content2 && (this._content2.dispose(), 
                this._content2 = null), this._contentItem = null;
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                _get(_getPrototypeOf(GLoader.prototype), "handleSizeChanged", this).call(this), 
                this._updatingLayout || this.updateLayout();
            }
        }, {
            key: "getProp",
            value: function(e) {
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
                    return _get(_getPrototypeOf(GLoader.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GLoader.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                var i;
                _get(_getPrototypeOf(GLoader.prototype), "setup_beforeAdd", this).call(this, t, e), 
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
            get: function() {
                return this._url;
            },
            set: function(t) {
                this._url != t && (this._url = t, this.loadContent(), this.updateGear(7));
            }
        }, {
            key: "icon",
            get: function() {
                return this._url;
            },
            set: function(t) {
                this.url = t;
            }
        }, {
            key: "align",
            get: function() {
                return this._align;
            },
            set: function(t) {
                this._align != t && (this._align = t, this.updateLayout());
            }
        }, {
            key: "verticalAlign",
            get: function() {
                return this._valign;
            },
            set: function(t) {
                this._valign != t && (this._valign = t, this.updateLayout());
            }
        }, {
            key: "fill",
            get: function() {
                return this._fill;
            },
            set: function(t) {
                this._fill != t && (this._fill = t, this.updateLayout());
            }
        }, {
            key: "shrinkOnly",
            get: function() {
                return this._shrinkOnly;
            },
            set: function(t) {
                this._shrinkOnly != t && (this._shrinkOnly = t, this.updateLayout());
            }
        }, {
            key: "autoSize",
            get: function() {
                return this._autoSize;
            },
            set: function(t) {
                this._autoSize != t && (this._autoSize = t, this.updateLayout());
            }
        }, {
            key: "playing",
            get: function() {
                return this._content.playing;
            },
            set: function(t) {
                this._content.playing != t && (this._content.playing = t, this.updateGear(5));
            }
        }, {
            key: "frame",
            get: function() {
                return this._content.frame;
            },
            set: function(t) {
                this._content.frame != t && (this._content.frame = t, this.updateGear(5));
            }
        }, {
            key: "color",
            get: function() {
                return this._content.color;
            },
            set: function(t) {
                this._content.color != t && (this._content.color = t, this.updateGear(4));
            }
        }, {
            key: "showErrorSign",
            get: function() {
                return this._showErrorSign;
            },
            set: function(t) {
                this._showErrorSign = t;
            }
        }, {
            key: "content",
            get: function() {
                return this._content;
            }
        }, {
            key: "component",
            get: function() {
                return this._content2;
            }
        } ]), GLoader;
    }();
    e._errorSignPool = new t.GObjectPool(), t.GLoader = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GMovieClip() {
            return _classCallCheck(this, GMovieClip), _possibleConstructorReturn(this, _getPrototypeOf(GMovieClip).call(this));
        }
        return _inherits(GMovieClip, t.GObject), _createClass(GMovieClip, [ {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = this._movieClip = new t.MovieClip(), this._movieClip.mouseEnabled = !1, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "rewind",
            value: function() {
                this._movieClip.rewind();
            }
        }, {
            key: "syncStatus",
            value: function(t) {
                this._movieClip.syncStatus(t._movieClip);
            }
        }, {
            key: "advance",
            value: function(t) {
                this._movieClip.advance(t);
            }
        }, {
            key: "setPlaySettings",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                this._movieClip.setPlaySettings(t, e, i, s, n);
            }
        }, {
            key: "getProp",
            value: function(e) {
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
                    return _get(_getPrototypeOf(GMovieClip.prototype), "getProp", this).call(this, e);
                }
            }
        }, {
            key: "setProp",
            value: function(e, i) {
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
                    _get(_getPrototypeOf(GMovieClip.prototype), "setProp", this).call(this, e, i);
                }
            }
        }, {
            key: "constructFromResource",
            value: function() {
                var t = this.packageItem.getBranch();
                this.sourceWidth = t.width, this.sourceHeight = t.height, this.initWidth = this.sourceWidth, 
                this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), 
                (t = t.getHighResolution()).load(), this._movieClip.interval = t.interval, this._movieClip.swing = t.swing, 
                this._movieClip.repeatDelay = t.repeatDelay, this._movieClip.frames = t.frames;
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GMovieClip.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 5), t.readBool() && (this.color = t.readColorS()), t.readByte(), this._movieClip.frame = t.getInt32(), 
                this._movieClip.playing = t.readBool();
            }
        }, {
            key: "color",
            get: function() {
                return this._movieClip.color;
            },
            set: function(t) {
                this._movieClip.color = t;
            }
        }, {
            key: "playing",
            get: function() {
                return this._movieClip.playing;
            },
            set: function(t) {
                this._movieClip.playing != t && (this._movieClip.playing = t, this.updateGear(5));
            }
        }, {
            key: "frame",
            get: function() {
                return this._movieClip.frame;
            },
            set: function(t) {
                this._movieClip.frame != t && (this._movieClip.frame = t, this.updateGear(5));
            }
        }, {
            key: "timeScale",
            get: function() {
                return this._movieClip.timeScale;
            },
            set: function(t) {
                this._movieClip.timeScale = t;
            }
        } ]), GMovieClip;
    }();
    t.GMovieClip = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GProgressBar() {
            var e;
            return _classCallCheck(this, GProgressBar), (e = _possibleConstructorReturn(this, _getPrototypeOf(GProgressBar).call(this)))._min = 0, 
            e._max = 0, e._value = 0, e._barMaxWidth = 0, e._barMaxHeight = 0, e._barMaxWidthDelta = 0, 
            e._barMaxHeightDelta = 0, e._barStartX = 0, e._barStartY = 0, e._titleType = t.ProgressTitleType.Percent, 
            e._value = 50, e._max = 100, e;
        }
        return _inherits(GProgressBar, t.GComponent), _createClass(GProgressBar, [ {
            key: "tweenValue",
            value: function(e, i) {
                var s, n = t.GTween.getTween(this, this.update);
                return null != n ? (s = n.value.x, n.kill()) : s = this._value, this._value = e, 
                t.GTween.to(s, this._value, i).setTarget(this, this.update).setEase(t.EaseType.Linear);
            }
        }, {
            key: "update",
            value: function(e) {
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
                var s = this.width - this._barMaxWidthDelta, n = this.height - this._barMaxHeightDelta;
                this._reverse ? (this._barObjectH && (this._barObjectH instanceof t.GImage && this._barObjectH.fillMethod != t.FillMethod.None ? this._barObjectH.fillAmount = 1 - i : (this._barObjectH.width = Math.floor(s * i), 
                this._barObjectH.x = this._barStartX + (s - this._barObjectH.width))), this._barObjectV && (this._barObjectV instanceof t.GImage && this._barObjectV.fillMethod != t.FillMethod.None ? this._barObjectV.fillAmount = 1 - i : (this._barObjectV.height = Math.floor(n * i), 
                this._barObjectV.y = this._barStartY + (n - this._barObjectV.height)))) : (this._barObjectH && (this._barObjectH instanceof t.GImage && this._barObjectH.fillMethod != t.FillMethod.None ? this._barObjectH.fillAmount = i : this._barObjectH.width = Math.floor(s * i)), 
                this._barObjectV && (this._barObjectV instanceof t.GImage && this._barObjectV.fillMethod != t.FillMethod.None ? this._barObjectV.fillAmount = i : this._barObjectV.height = Math.floor(n * i))), 
                this._aniObject && this._aniObject.setProp(t.ObjectPropID.Frame, Math.floor(100 * i));
            }
        }, {
            key: "constructExtension",
            value: function(t) {
                t.seek(0, 6), this._titleType = t.readByte(), this._reverse = t.readBool(), this._titleObject = this.getChild("title"), 
                this._barObjectH = this.getChild("bar"), this._barObjectV = this.getChild("bar_v"), 
                this._aniObject = this.getChild("ani"), this._barObjectH && (this._barMaxWidth = this._barObjectH.width, 
                this._barMaxWidthDelta = this.width - this._barMaxWidth, this._barStartX = this._barObjectH.x), 
                this._barObjectV && (this._barMaxHeight = this._barObjectV.height, this._barMaxHeightDelta = this.height - this._barMaxHeight, 
                this._barStartY = this._barObjectV.y);
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                _get(_getPrototypeOf(GProgressBar.prototype), "handleSizeChanged", this).call(this), 
                this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                this._underConstruct || this.update(this._value);
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GProgressBar.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.getInt32(), 
                this._max = t.getInt32(), t.version >= 2 && (this._min = t.getInt32()), this.update(this._value)) : this.update(this._value);
            }
        }, {
            key: "titleType",
            get: function() {
                return this._titleType;
            },
            set: function(t) {
                this._titleType != t && (this._titleType = t, this.update(t));
            }
        }, {
            key: "min",
            get: function() {
                return this._min;
            },
            set: function(t) {
                this._min != t && (this._min = t, this.update(this._value));
            }
        }, {
            key: "max",
            get: function() {
                return this._max;
            },
            set: function(t) {
                this._max != t && (this._max = t, this.update(this._value));
            }
        }, {
            key: "value",
            get: function() {
                return this._value;
            },
            set: function(e) {
                this._value != e && (t.GTween.kill(this, !1, this.update), this._value = e, this.update(e));
            }
        } ]), GProgressBar;
    }();
    t.GProgressBar = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GRichTextField() {
            var t;
            return _classCallCheck(this, GRichTextField), (t = _possibleConstructorReturn(this, _getPrototypeOf(GRichTextField).call(this)))._text = "", 
            t;
        }
        return _inherits(GRichTextField, t.GTextField), _createClass(GRichTextField, [ {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = this._div = new Laya.HTMLDivElement(), this._displayObject.mouseEnabled = !0, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "updateAutoSize",
            value: function() {
                this._div.style.wordWrap = !this._widthAutoSize;
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                this._updatingSize || (this._div.size(this._width, this._height), this._div.style.width = this._width, 
                this._div.style.height = this._height);
            }
        }, {
            key: "div",
            get: function() {
                return this._div;
            }
        }, {
            key: "text",
            set: function(e) {
                this._text = e;
                var i = this._text;
                null != this._templateVars && (i = this.parseTemplate(i));
                try {
                    if (this._ubbEnabled ? this._div.innerHTML = t.ToolSet.parseUBB(i) : this._div.innerHTML = i, 
                    this._widthAutoSize || this._heightAutoSize) {
                        var s, n = 0;
                        this._widthAutoSize ? (s = this._div.contextWidth) > 0 && (s += 8) : s = this._width, 
                        n = this._heightAutoSize ? this._div.contextHeight : this._height, this._updatingSize = !0, 
                        this.setSize(s, n), this._updatingSize = !1;
                    }
                } catch (t) {
                    console.log("laya reports html error:" + t);
                }
            },
            get: function() {
                return this._text;
            }
        }, {
            key: "font",
            get: function() {
                return this._div.style.font;
            },
            set: function(e) {
                this._div.style.font = e || t.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function() {
                return this._div.style.fontSize;
            },
            set: function(t) {
                this._div.style.fontSize = t;
            }
        }, {
            key: "color",
            get: function() {
                return this._color;
            },
            set: function(t) {
                this._color != t && (this._color = t, this._div.style.color = t, this._gearColor.controller && this._gearColor.updateState());
            }
        }, {
            key: "align",
            get: function() {
                return this._div.style.align;
            },
            set: function(t) {
                this._div.style.align = t;
            }
        }, {
            key: "valign",
            get: function() {
                return this._div.style.valign;
            },
            set: function(t) {
                this._div.style.valign = t;
            }
        }, {
            key: "leading",
            get: function() {
                return this._div.style.leading;
            },
            set: function(t) {
                this._div.style.leading = t;
            }
        }, {
            key: "bold",
            get: function() {
                return this._div.style.bold;
            },
            set: function(t) {
                this._div.style.bold = t;
            }
        }, {
            key: "italic",
            get: function() {
                return this._div.style.italic;
            },
            set: function(t) {
                this._div.style.italic = t;
            }
        }, {
            key: "stroke",
            get: function() {
                return this._div.style.stroke;
            },
            set: function(t) {
                this._div.style.stroke = t;
            }
        }, {
            key: "strokeColor",
            get: function() {
                return this._div.style.strokeColor;
            },
            set: function(t) {
                this._div.style.strokeColor = t, this.updateGear(4);
            }
        }, {
            key: "ubbEnabled",
            set: function(t) {
                this._ubbEnabled = t;
            },
            get: function() {
                return this._ubbEnabled;
            }
        }, {
            key: "textWidth",
            get: function() {
                var t = this._div.contextWidth;
                return t > 0 && (t += 8), t;
            }
        } ]), GRichTextField;
    }();
    t.GRichTextField = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GRoot() {
            var t;
            return _classCallCheck(this, GRoot), t = _possibleConstructorReturn(this, _getPrototypeOf(GRoot).call(this)), 
            null == GRoot._inst && (GRoot._inst = _assertThisInitialized(t)), t.opaque = !1, 
            t._popupStack = [], t._justClosedPopups = [], t.displayObject.once(Laya.Event.DISPLAY, _assertThisInitialized(t), t.__addedToStage), 
            t;
        }
        return _inherits(GRoot, t.GComponent), _createClass(GRoot, [ {
            key: "showWindow",
            value: function(t) {
                this.addChild(t), t.requestFocus(), t.x > this.width ? t.x = this.width - t.width : t.x + t.width < 0 && (t.x = 0), 
                t.y > this.height ? t.y = this.height - t.height : t.y + t.height < 0 && (t.y = 0), 
                this.adjustModalLayer();
            }
        }, {
            key: "hideWindow",
            value: function(t) {
                t.hide();
            }
        }, {
            key: "hideWindowImmediately",
            value: function(t) {
                t.parent == this && this.removeChild(t), this.adjustModalLayer();
            }
        }, {
            key: "bringToFront",
            value: function(e) {
                var i, s = this.numChildren;
                for (i = null == this._modalLayer.parent || e.modal ? s - 1 : this.getChildIndex(this._modalLayer) - 1; i >= 0; i--) {
                    var n = this.getChildAt(i);
                    if (n == e) return;
                    if (n instanceof t.Window) break;
                }
                i >= 0 && this.setChildIndex(e, i);
            }
        }, {
            key: "showModalWait",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                null != t.UIConfig.globalModalWaiting && (null == this._modalWaitPane && (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.globalModalWaiting)), 
                this._modalWaitPane.setSize(this.width, this.height), this._modalWaitPane.addRelation(this, t.RelationType.Size), 
                this.addChild(this._modalWaitPane), this._modalWaitPane.text = e);
            }
        }, {
            key: "closeModalWait",
            value: function() {
                null != this._modalWaitPane && null != this._modalWaitPane.parent && this.removeChild(this._modalWaitPane);
            }
        }, {
            key: "closeAllExceptModals",
            value: function() {
                for (var e = this._children.slice(), i = e.length, s = 0; s < i; s++) {
                    var n = e[s];
                    n instanceof t.Window && !n.modal && n.hide();
                }
            }
        }, {
            key: "closeAllWindows",
            value: function() {
                for (var e = this._children.slice(), i = e.length, s = 0; s < i; s++) {
                    var n = e[s];
                    n instanceof t.Window && n.hide();
                }
            }
        }, {
            key: "getTopWindow",
            value: function() {
                for (var e = this.numChildren - 1; e >= 0; e--) {
                    var i = this.getChildAt(e);
                    if (i instanceof t.Window) return i;
                }
                return null;
            }
        }, {
            key: "showPopup",
            value: function(t) {
                var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (this._popupStack.length > 0) {
                    var n = this._popupStack.indexOf(t);
                    if (-1 != n) for (var a = this._popupStack.length - 1; a >= n; a--) this.removeChild(this._popupStack.pop());
                }
                if (this._popupStack.push(t), null != i) for (var o = i; null != o; ) {
                    if (o.parent == this) {
                        t.sortingOrder < o.sortingOrder && (t.sortingOrder = o.sortingOrder);
                        break;
                    }
                    o = o.parent;
                }
                this.addChild(t), this.adjustModalLayer();
                var r, l, h = 0, u = 0;
                i ? (e = i.localToGlobal(), h = i.width, u = i.height) : e = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY), 
                (r = e.x) + t.width > this.width && (r = r + h - t.width), l = e.y + u, (null == s && l + t.height > this.height || 0 == s) && (l = e.y - t.height - 1) < 0 && (l = 0, 
                r += h / 2), t.x = r, t.y = l;
            }
        }, {
            key: "togglePopup",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                -1 == this._justClosedPopups.indexOf(t) && this.showPopup(t, e, i);
            }
        }, {
            key: "hidePopup",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null != t) {
                    var e = this._popupStack.indexOf(t);
                    if (-1 != e) for (var i = this._popupStack.length - 1; i >= e; i--) this.closePopup(this._popupStack.pop());
                } else {
                    for (i = this._popupStack.length - 1; i >= 0; i--) this.closePopup(this._popupStack[i]);
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "closePopup",
            value: function(e) {
                null != e.parent && (e instanceof t.Window ? e.hide() : this.removeChild(e));
            }
        }, {
            key: "showTooltips",
            value: function(e) {
                if (null == this._defaultTooltipWin) {
                    var i = t.UIConfig.tooltipsWin;
                    if (!i) return void Laya.Log.print("UIConfig.tooltipsWin not defined");
                    this._defaultTooltipWin = t.UIPackage.createObjectFromURL(i);
                }
                this._defaultTooltipWin.text = e, this.showTooltipsWin(this._defaultTooltipWin);
            }
        }, {
            key: "showTooltipsWin",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.hideTooltips(), this._tooltipWin = t;
                var i = 0, s = 0;
                null == e ? (i = Laya.stage.mouseX + 10, s = Laya.stage.mouseY + 20) : (i = e.x, 
                s = e.y);
                var n = this.globalToLocal(i, s);
                i = n.x, s = n.y, i + this._tooltipWin.width > this.width && (i = i - this._tooltipWin.width - 1) < 0 && (i = 10), 
                s + this._tooltipWin.height > this.height && (s = s - this._tooltipWin.height - 1, 
                i - this._tooltipWin.width - 1 > 0 && (i = i - this._tooltipWin.width - 1), s < 0 && (s = 10)), 
                this._tooltipWin.x = i, this._tooltipWin.y = s, this.addChild(this._tooltipWin);
            }
        }, {
            key: "hideTooltips",
            value: function() {
                null != this._tooltipWin && (this._tooltipWin.parent && this.removeChild(this._tooltipWin), 
                this._tooltipWin = null);
            }
        }, {
            key: "getObjectUnderPoint",
            value: function(t, e) {
                return null;
            }
        }, {
            key: "setFocus",
            value: function(e) {
                this._focusedObject != e && (this._focusedObject = e, this.displayObject.event(t.Events.FOCUS_CHANGED));
            }
        }, {
            key: "playOneShotSound",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t.ToolSet.startsWith(e, "ui://") || Laya.SoundManager.playSound(e);
            }
        }, {
            key: "adjustModalLayer",
            value: function() {
                var e = this.numChildren;
                null != this._modalWaitPane && null != this._modalWaitPane.parent && this.setChildIndex(this._modalWaitPane, e - 1);
                for (var i = e - 1; i >= 0; i--) {
                    var s = this.getChildAt(i);
                    if (s instanceof t.Window && s.modal) return void (null == this._modalLayer.parent ? this.addChildAt(this._modalLayer, i) : this.setChildIndexBefore(this._modalLayer, i));
                }
                null != this._modalLayer.parent && this.removeChild(this._modalLayer);
            }
        }, {
            key: "__addedToStage",
            value: function() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.__stageMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__stageMouseUp), 
                this._modalLayer = new t.GGraph(), this._modalLayer.setSize(this.width, this.height), 
                this._modalLayer.drawRect(0, null, t.UIConfig.modalLayerColor), this._modalLayer.addRelation(this, t.RelationType.Size), 
                this.displayObject.stage.on(Laya.Event.RESIZE, this, this.__winResize), this.__winResize();
            }
        }, {
            key: "checkPopups",
            value: function(t) {
                if (!this._checkPopups && (this._checkPopups = !0, this._justClosedPopups.length = 0, 
                this._popupStack.length > 0)) {
                    for (var e = t; e != this.displayObject.stage && null != e; ) {
                        if (e.$owner) {
                            var i = this._popupStack.indexOf(e.$owner);
                            if (-1 != i) {
                                for (var s = this._popupStack.length - 1; s > i; s--) {
                                    var n = this._popupStack.pop();
                                    this.closePopup(n), this._justClosedPopups.push(n);
                                }
                                return;
                            }
                        }
                        e = e.parent;
                    }
                    for (s = this._popupStack.length - 1; s >= 0; s--) n = this._popupStack[s], this.closePopup(n), 
                    this._justClosedPopups.push(n);
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "__stageMouseDown",
            value: function(t) {
                for (var e = t.target; e != this.displayObject.stage && null != e; ) {
                    if (e.$owner) {
                        var i = e.$owner;
                        if (i.touchable && i.focusable) {
                            this.setFocus(i);
                            break;
                        }
                    }
                    e = e.parent;
                }
                null != this._tooltipWin && this.hideTooltips(), this.checkPopups(t.target);
            }
        }, {
            key: "__stageMouseUp",
            value: function() {
                this._checkPopups = !1;
            }
        }, {
            key: "__winResize",
            value: function() {
                this.setSize(Laya.stage.width, Laya.stage.height), this.updateContentScaleLevel();
            }
        }, {
            key: "updateContentScaleLevel",
            value: function() {
                var t = Laya.stage._canvasTransform, e = Math.max(t.getScaleX(), t.getScaleY());
                GRoot.contentScaleLevel = e >= 3.5 ? 3 : e >= 2.5 ? 2 : e >= 1.5 ? 1 : 0;
            }
        }, {
            key: "modalLayer",
            get: function() {
                return this._modalLayer;
            }
        }, {
            key: "hasModalWindow",
            get: function() {
                return null != this._modalLayer.parent;
            }
        }, {
            key: "modalWaiting",
            get: function() {
                return this._modalWaitPane && this._modalWaitPane.inContainer;
            }
        }, {
            key: "hasAnyPopup",
            get: function() {
                return 0 != this._popupStack.length;
            }
        }, {
            key: "focus",
            get: function() {
                return this._focusedObject && !this._focusedObject.onStage && (this._focusedObject = null), 
                this._focusedObject;
            },
            set: function(t) {
                if (t && (!t.focusable || !t.onStage)) throw "invalid this.focus target";
                this.setFocus(t);
            }
        }, {
            key: "volumeScale",
            get: function() {
                return Laya.SoundManager.soundVolume;
            },
            set: function(t) {
                Laya.SoundManager.soundVolume = t;
            }
        } ], [ {
            key: "inst",
            get: function() {
                return null == GRoot._inst && new GRoot(), GRoot._inst;
            }
        } ]), GRoot;
    }();
    e.contentScaleLevel = 0, t.GRoot = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GScrollBar() {
            var t;
            return _classCallCheck(this, GScrollBar), (t = _possibleConstructorReturn(this, _getPrototypeOf(GScrollBar).call(this)))._dragOffset = new Laya.Point(), 
            t._scrollPerc = 0, t;
        }
        return _inherits(GScrollBar, t.GComponent), _createClass(GScrollBar, [ {
            key: "setScrollPane",
            value: function(t, e) {
                this._target = t, this._vertical = e;
            }
        }, {
            key: "setDisplayPerc",
            value: function(t) {
                this._vertical ? (this._fixedGripSize || (this._grip.height = Math.floor(t * this._bar.height)), 
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc) : (this._fixedGripSize || (this._grip.width = Math.floor(t * this._bar.width)), 
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc), 
                this._grip.visible = 0 != t && 1 != t;
            }
        }, {
            key: "setScrollPerc",
            value: function(t) {
                this._scrollPerc = t, this._vertical ? this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc : this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            }
        }, {
            key: "constructExtension",
            value: function(t) {
                t.seek(0, 6), this._fixedGripSize = t.readBool(), this._grip = this.getChild("grip"), 
                this._grip ? (this._bar = this.getChild("bar"), this._bar ? (this._arrowButton1 = this.getChild("arrow1"), 
                this._arrowButton2 = this.getChild("arrow2"), this._grip.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown), 
                this._arrowButton1 && this._arrowButton1.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton1Click), 
                this._arrowButton2 && this._arrowButton2.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton2Click), 
                this.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown)) : Laya.Log.print("需要定义bar")) : Laya.Log.print("需要定义grip");
            }
        }, {
            key: "__gripMouseDown",
            value: function(t) {
                t.stopPropagation(), this._gripDragging = !0, this._target.updateScrollBarVisible(), 
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp), 
                this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, this._dragOffset), this._dragOffset.x -= this._grip.x, 
                this._dragOffset.y -= this._grip.y;
            }
        }, {
            key: "__gripMouseMove",
            value: function() {
                if (this.onStage) {
                    var t = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, GScrollBar.sScrollbarHelperPoint);
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
            value: function(t) {
                this.onStage && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), 
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp), this._gripDragging = !1, 
                this._target.updateScrollBarVisible());
            }
        }, {
            key: "__arrowButton1Click",
            value: function(t) {
                t.stopPropagation(), this._vertical ? this._target.scrollUp() : this._target.scrollLeft();
            }
        }, {
            key: "__arrowButton2Click",
            value: function(t) {
                t.stopPropagation(), this._vertical ? this._target.scrollDown() : this._target.scrollRight();
            }
        }, {
            key: "__barMouseDown",
            value: function(t) {
                var e = this._grip.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, GScrollBar.sScrollbarHelperPoint);
                this._vertical ? e.y < 0 ? this._target.scrollUp(4) : this._target.scrollDown(4) : e.x < 0 ? this._target.scrollLeft(4) : this._target.scrollRight(4);
            }
        }, {
            key: "minSize",
            get: function() {
                return this._vertical ? (null != this._arrowButton1 ? this._arrowButton1.height : 0) + (null != this._arrowButton2 ? this._arrowButton2.height : 0) : (null != this._arrowButton1 ? this._arrowButton1.width : 0) + (null != this._arrowButton2 ? this._arrowButton2.width : 0);
            }
        }, {
            key: "gripDragging",
            get: function() {
                return this._gripDragging;
            }
        } ]), GScrollBar;
    }();
    e.sScrollbarHelperPoint = new Laya.Point(), t.GScrollBar = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GSlider() {
            var e;
            return _classCallCheck(this, GSlider), (e = _possibleConstructorReturn(this, _getPrototypeOf(GSlider).call(this)))._min = 0, 
            e._max = 0, e._value = 0, e._barMaxWidth = 0, e._barMaxHeight = 0, e._barMaxWidthDelta = 0, 
            e._barMaxHeightDelta = 0, e._clickPercent = 0, e._barStartX = 0, e._barStartY = 0, 
            e.changeOnClick = !0, e.canDrag = !0, e._titleType = t.ProgressTitleType.Percent, 
            e._value = 50, e._max = 100, e._clickPos = new Laya.Point(), e;
        }
        return _inherits(GSlider, t.GComponent), _createClass(GSlider, [ {
            key: "update",
            value: function() {
                this.updateWithPercent((this._value - this._min) / (this._max - this._min));
            }
        }, {
            key: "updateWithPercent",
            value: function(e, i) {
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
                var n = this.width - this._barMaxWidthDelta, a = this.height - this._barMaxHeightDelta;
                this._reverse ? (this._barObjectH && (this._barObjectH.width = Math.round(n * e), 
                this._barObjectH.x = this._barStartX + (n - this._barObjectH.width)), this._barObjectV && (this._barObjectV.height = Math.round(a * e), 
                this._barObjectV.y = this._barStartY + (a - this._barObjectV.height))) : (this._barObjectH && (this._barObjectH.width = Math.round(n * e)), 
                this._barObjectV && (this._barObjectV.height = Math.round(a * e)));
            }
        }, {
            key: "constructExtension",
            value: function(t) {
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
            value: function() {
                _get(_getPrototypeOf(GSlider.prototype), "handleSizeChanged", this).call(this), 
                this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                this._underConstruct || this.update();
            }
        }, {
            key: "setup_afterAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GSlider.prototype), "setup_afterAdd", this).call(this, t, e), 
                t.seek(e, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.getInt32(), 
                this._max = t.getInt32(), t.version >= 2 && (this._min = t.getInt32()), this.update()) : this.update();
            }
        }, {
            key: "__gripMouseDown",
            value: function(e) {
                this.canDrag = !0, e.stopPropagation(), this._clickPos = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY), 
                this._clickPercent = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min)), 
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__gripMouseMove",
            value: function(t) {
                if (this.canDrag) {
                    var e, i = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, GSlider.sSilderHelperPoint), s = i.x - this._clickPos.x, n = i.y - this._clickPos.y;
                    this._reverse && (s = -s, n = -n), e = this._barObjectH ? this._clickPercent + s / this._barMaxWidth : this._clickPercent + n / this._barMaxHeight, 
                    this.updateWithPercent(e, t);
                }
            }
        }, {
            key: "__gripMouseUp",
            value: function(t) {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__barMouseDown",
            value: function(e) {
                if (this.changeOnClick) {
                    var i, s = this._gripObject.globalToLocal(e.stageX, e.stageY, GSlider.sSilderHelperPoint), n = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
                    this._barObjectH && (i = s.x / this._barMaxWidth), this._barObjectV && (i = s.y / this._barMaxHeight), 
                    this._reverse ? n -= i : n += i, this.updateWithPercent(n, e);
                }
            }
        }, {
            key: "titleType",
            get: function() {
                return this._titleType;
            },
            set: function(t) {
                this._titleType = t;
            }
        }, {
            key: "wholeNumbers",
            get: function() {
                return this._wholeNumbers;
            },
            set: function(t) {
                this._wholeNumbers != t && (this._wholeNumbers = t, this.update());
            }
        }, {
            key: "min",
            get: function() {
                return this._min;
            },
            set: function(t) {
                this._min != t && (this._min = t, this.update());
            }
        }, {
            key: "max",
            get: function() {
                return this._max;
            },
            set: function(t) {
                this._max != t && (this._max = t, this.update());
            }
        }, {
            key: "value",
            get: function() {
                return this._value;
            },
            set: function(t) {
                this._value != t && (this._value = t, this.update());
            }
        } ]), GSlider;
    }();
    e.sSilderHelperPoint = new Laya.Point(), t.GSlider = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GTextInput() {
            return _classCallCheck(this, GTextInput), _possibleConstructorReturn(this, _getPrototypeOf(GTextInput).call(this));
        }
        return _inherits(GTextInput, t.GTextField), _createClass(GTextInput, [ {
            key: "createDisplayObject",
            value: function() {
                this._displayObject = this._input = new Laya.Input(), this._displayObject.mouseEnabled = !0, 
                this._displayObject.$owner = this;
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                this._input.size(this._width, this._height);
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GTextInput.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 4);
                var i = t.readS();
                null != i && (this.promptText = i), null != (i = t.readS()) && (this._input.restrict = i);
                var s = t.getInt32();
                0 != s && (this._input.maxChars = s), 0 != (s = t.getInt32()) && (4 == s ? this.keyboardType = Laya.Input.TYPE_NUMBER : 3 == s && (this.keyboardType = Laya.Input.TYPE_URL)), 
                t.readBool() && (this.password = !0);
            }
        }, {
            key: "nativeInput",
            get: function() {
                return this._input;
            }
        }, {
            key: "text",
            set: function(t) {
                this._input.text = t;
            },
            get: function() {
                return this._input.text;
            }
        }, {
            key: "font",
            get: function() {
                return this._input.font;
            },
            set: function(t) {
                this._input.font = t;
            }
        }, {
            key: "fontSize",
            get: function() {
                return this._input.fontSize;
            },
            set: function(t) {
                this._input.fontSize = t;
            }
        }, {
            key: "color",
            get: function() {
                return this._input.color;
            },
            set: function(t) {
                this._input.color = t;
            }
        }, {
            key: "align",
            get: function() {
                return this._input.align;
            },
            set: function(t) {
                this._input.align = t;
            }
        }, {
            key: "valign",
            get: function() {
                return this._input.valign;
            },
            set: function(t) {
                this._input.valign = t;
            }
        }, {
            key: "leading",
            get: function() {
                return this._input.leading;
            },
            set: function(t) {
                this._input.leading = t;
            }
        }, {
            key: "bold",
            get: function() {
                return this._input.bold;
            },
            set: function(t) {
                this._input.bold = t;
            }
        }, {
            key: "italic",
            get: function() {
                return this._input.italic;
            },
            set: function(t) {
                this._input.italic = t;
            }
        }, {
            key: "singleLine",
            get: function() {
                return !this._input.multiline;
            },
            set: function(t) {
                this._input.multiline = !t;
            }
        }, {
            key: "stroke",
            get: function() {
                return this._input.stroke;
            },
            set: function(t) {
                this._input.stroke = t;
            }
        }, {
            key: "strokeColor",
            get: function() {
                return this._input.strokeColor;
            },
            set: function(t) {
                this._input.strokeColor = t, this.updateGear(4);
            }
        }, {
            key: "password",
            get: function() {
                return "password" == this._input.type;
            },
            set: function(t) {
                this._input.type = t ? "password" : "text";
            }
        }, {
            key: "keyboardType",
            get: function() {
                return this._input.type;
            },
            set: function(t) {
                this._input.type = t;
            }
        }, {
            key: "editable",
            set: function(t) {
                this._input.editable = t;
            },
            get: function() {
                return this._input.editable;
            }
        }, {
            key: "maxLength",
            set: function(t) {
                this._input.maxChars = t;
            },
            get: function() {
                return this._input.maxChars;
            }
        }, {
            key: "promptText",
            set: function(e) {
                this._prompt = e;
                var i = t.ToolSet.removeUBB(e);
                this._input.prompt = i, t.ToolSet.defaultUBBParser.lastColor && (this._input.promptColor = t.ToolSet.defaultUBBParser.lastColor);
            },
            get: function() {
                return this._prompt;
            }
        }, {
            key: "restrict",
            set: function(t) {
                this._input.restrict = t;
            },
            get: function() {
                return this._input.restrict;
            }
        }, {
            key: "textWidth",
            get: function() {
                return this._input.textWidth;
            }
        } ]), GTextInput;
    }();
    t.GTextInput = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GTree() {
            var e;
            return _classCallCheck(this, GTree), (e = _possibleConstructorReturn(this, _getPrototypeOf(GTree).call(this)))._indent = 15, 
            e._rootNode = new t.GTreeNode(!0), e._rootNode._setTree(_assertThisInitialized(e)), 
            e._rootNode.expanded = !0, e;
        }
        return _inherits(GTree, t.GList), _createClass(GTree, [ {
            key: "getSelectedNode",
            value: function() {
                return -1 != this.selectedIndex ? this.getChildAt(this.selectedIndex)._treeNode : null;
            }
        }, {
            key: "getSelectedNodes",
            value: function(t) {
                t || (t = new Array()), GTree.helperIntList.length = 0, _get(_getPrototypeOf(GTree.prototype), "getSelection", this).call(this, GTree.helperIntList);
                for (var e = GTree.helperIntList.length, i = new Array(), s = 0; s < e; s++) {
                    var n = this.getChildAt(GTree.helperIntList[s])._treeNode;
                    i.push(n);
                }
                return i;
            }
        }, {
            key: "selectNode",
            value: function(t, e) {
                for (var i = t.parent; null != i && i != this._rootNode; ) i.expanded = !0, i = i.parent;
                t._cell && this.addSelection(this.getChildIndex(t._cell), e);
            }
        }, {
            key: "unselectNode",
            value: function(t) {
                t._cell && this.removeSelection(this.getChildIndex(t._cell));
            }
        }, {
            key: "expandAll",
            value: function(t) {
                t || (t = this._rootNode), t.expanded = !0;
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s.isFolder && this.expandAll(s);
                }
            }
        }, {
            key: "collapseAll",
            value: function(t) {
                t || (t = this._rootNode), t != this._rootNode && (t.expanded = !1);
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s.isFolder && this.collapseAll(s);
                }
            }
        }, {
            key: "createCell",
            value: function(e) {
                var i = this.getFromPool(e._resURL ? e._resURL : this.defaultItem);
                if (!i) throw new Error("cannot create tree node object.");
                i._treeNode = e, e._cell = i;
                var s, n = i.getChild("indent");
                null != n && (n.width = (e.level - 1) * this._indent), (s = i.getController("expanded")) && (s.on(t.Events.STATE_CHANGED, this, this.__expandedStateChanged), 
                s.selectedIndex = e.expanded ? 1 : 0), (s = i.getController("leaf")) && (s.selectedIndex = e.isFolder ? 0 : 1), 
                e.isFolder && i.on(Laya.Event.MOUSE_DOWN, this, this.__cellMouseDown), this.treeNodeRender && this.treeNodeRender.runWith([ e, i ]);
            }
        }, {
            key: "_afterInserted",
            value: function(t) {
                t._cell || this.createCell(t);
                var e = this.getInsertIndexForNode(t);
                this.addChildAt(t._cell, e), this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]), 
                t.isFolder && t.expanded && this.checkChildren(t, e);
            }
        }, {
            key: "getInsertIndexForNode",
            value: function(t) {
                var e = t.getPrevSibling();
                null == e && (e = t.parent);
                for (var i = this.getChildIndex(e._cell) + 1, s = t.level, n = this.numChildren, a = i; a < n; a++) {
                    if (this.getChildAt(a)._treeNode.level <= s) break;
                    i++;
                }
                return i;
            }
        }, {
            key: "_afterRemoved",
            value: function(t) {
                this.removeNode(t);
            }
        }, {
            key: "_afterExpanded",
            value: function(t) {
                if (t != this._rootNode) {
                    if (null != this.treeNodeWillExpand && this.treeNodeWillExpand.runWith([ t, !0 ]), 
                    null != t._cell) {
                        this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]);
                        var e = t._cell.getController("expanded");
                        e && (e.selectedIndex = 1), null != t._cell.parent && this.checkChildren(t, this.getChildIndex(t._cell));
                    }
                } else this.checkChildren(this._rootNode, 0);
            }
        }, {
            key: "_afterCollapsed",
            value: function(t) {
                if (t != this._rootNode) {
                    if (this.treeNodeWillExpand && this.treeNodeWillExpand.runWith([ t, !1 ]), null != t._cell) {
                        this.treeNodeRender && this.treeNodeRender.runWith([ t, t._cell ]);
                        var e = t._cell.getController("expanded");
                        e && (e.selectedIndex = 0), null != t._cell.parent && this.hideFolderNode(t);
                    }
                } else this.checkChildren(this._rootNode, 0);
            }
        }, {
            key: "_afterMoved",
            value: function(t) {
                var e, i = this.getChildIndex(t._cell);
                e = t.isFolder ? this.getFolderEndIndex(i, t.level) : i + 1;
                var s, n, a = this.getInsertIndexForNode(t), o = e - i;
                if (a < i) for (s = 0; s < o; s++) n = this.getChildAt(i + s), this.setChildIndex(n, a + s); else for (s = 0; s < o; s++) n = this.getChildAt(i), 
                this.setChildIndex(n, a);
            }
        }, {
            key: "getFolderEndIndex",
            value: function(t, e) {
                for (var i = this.numChildren, s = t + 1; s < i; s++) {
                    if (this.getChildAt(s)._treeNode.level <= e) return s;
                }
                return i;
            }
        }, {
            key: "checkChildren",
            value: function(t, e) {
                for (var i = t.numChildren, s = 0; s < i; s++) {
                    e++;
                    var n = t.getChildAt(s);
                    null == n._cell && this.createCell(n), n._cell.parent || this.addChildAt(n._cell, e), 
                    n.isFolder && n.expanded && (e = this.checkChildren(n, e));
                }
                return e;
            }
        }, {
            key: "hideFolderNode",
            value: function(t) {
                for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    s._cell && this.removeChild(s._cell), s.isFolder && s.expanded && this.hideFolderNode(s);
                }
            }
        }, {
            key: "removeNode",
            value: function(t) {
                if (null != t._cell && (null != t._cell.parent && this.removeChild(t._cell), this.returnToPool(t._cell), 
                t._cell._treeNode = null, t._cell = null), t.isFolder) for (var e = t.numChildren, i = 0; i < e; i++) {
                    var s = t.getChildAt(i);
                    this.removeNode(s);
                }
            }
        }, {
            key: "__cellMouseDown",
            value: function(e) {
                var i = t.GObject.cast(e.currentTarget)._treeNode;
                this._expandedStatusInEvt = i.expanded;
            }
        }, {
            key: "__expandedStateChanged",
            value: function(t) {
                t.parent._treeNode.expanded = 1 == t.selectedIndex;
            }
        }, {
            key: "dispatchItemEvent",
            value: function(t, e) {
                if (0 != this._clickToExpand) {
                    var i = t._treeNode;
                    i && i.isFolder && this._expandedStatusInEvt == i.expanded && (2 == this._clickToExpand || (i.expanded = !i.expanded));
                }
                _get(_getPrototypeOf(GTree.prototype), "dispatchItemEvent", this).call(this, t, e);
            }
        }, {
            key: "setup_beforeAdd",
            value: function(t, e) {
                _get(_getPrototypeOf(GTree.prototype), "setup_beforeAdd", this).call(this, t, e), 
                t.seek(e, 9), this._indent = t.getInt32(), this._clickToExpand = t.getUint8();
            }
        }, {
            key: "readItems",
            value: function(e) {
                var i, s, n, a, o, r, l, h = 0;
                for (i = e.getInt16(), s = 0; s < i; s++) if (n = e.getInt16(), n += e.pos, null != (a = e.readS()) || (a = this.defaultItem)) {
                    o = e.readBool(), l = e.getUint8();
                    var u = new t.GTreeNode(o, a);
                    if (u.expanded = !0, 0 == s) this._rootNode.addChild(u); else if (l > h) r.addChild(u); else if (l < h) {
                        for (var _ = l; _ <= h; _++) r = r.parent;
                        r.addChild(u);
                    } else r.parent.addChild(u);
                    r = u, h = l, this.setupItem(e, u.cell), e.pos = n;
                } else e.pos = n;
            }
        }, {
            key: "rootNode",
            get: function() {
                return this._rootNode;
            }
        }, {
            key: "indent",
            get: function() {
                return this._indent;
            },
            set: function(t) {
                this._indent = t;
            }
        }, {
            key: "clickToExpand",
            get: function() {
                return this._clickToExpand;
            },
            set: function(t) {
                this._clickToExpand = t;
            }
        } ]), GTree;
    }();
    e.helperIntList = new Array(), t.GTree = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GTreeNode(t, e) {
            _classCallCheck(this, GTreeNode), this._expanded = !1, this._level = 0, this._resURL = e, 
            t && (this._children = new Array());
        }
        return _createClass(GTreeNode, [ {
            key: "_setLevel",
            value: function(t) {
                this._level = t;
            }
        }, {
            key: "addChild",
            value: function(t) {
                return this.addChildAt(t, this._children.length), t;
            }
        }, {
            key: "addChildAt",
            value: function(t, e) {
                if (!t) throw new Error("child is null");
                var i = this._children.length;
                if (e >= 0 && e <= i) {
                    if (t._parent == this) this.setChildIndex(t, e); else t._parent && t._parent.removeChild(t), 
                    e == this._children.length ? this._children.push(t) : this._children.splice(e, 0, t), 
                    t._parent = this, t._level = this._level + 1, t._setTree(this._tree), (null != this._tree && this == this._tree.rootNode || null != this._cell && null != this._cell.parent && this._expanded) && this._tree._afterInserted(t);
                    return t;
                }
                throw new RangeError("Invalid child index");
            }
        }, {
            key: "removeChild",
            value: function(t) {
                var e = this._children.indexOf(t);
                return -1 != e && this.removeChildAt(e), t;
            }
        }, {
            key: "removeChildAt",
            value: function(t) {
                if (t >= 0 && t < this.numChildren) {
                    var e = this._children[t];
                    return this._children.splice(t, 1), e._parent = null, null != this._tree && (e._setTree(null), 
                    this._tree._afterRemoved(e)), e;
                }
                throw "Invalid child index";
            }
        }, {
            key: "removeChildren",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                (e < 0 || e >= this.numChildren) && (e = this.numChildren - 1);
                for (var i = t; i <= e; ++i) this.removeChildAt(t);
            }
        }, {
            key: "getChildAt",
            value: function(t) {
                if (t >= 0 && t < this.numChildren) return this._children[t];
                throw "Invalid child index";
            }
        }, {
            key: "getChildIndex",
            value: function(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "getPrevSibling",
            value: function() {
                if (null == this._parent) return null;
                var t = this._parent._children.indexOf(this);
                return t <= 0 ? null : this._parent._children[t - 1];
            }
        }, {
            key: "getNextSibling",
            value: function() {
                if (null == this._parent) return null;
                var t = this._parent._children.indexOf(this);
                return t < 0 || t >= this._parent._children.length - 1 ? null : this._parent._children[t + 1];
            }
        }, {
            key: "setChildIndex",
            value: function(t, e) {
                var i = this._children.indexOf(t);
                if (-1 == i) throw "Not a child of this container";
                var s = this._children.length;
                e < 0 ? e = 0 : e > s && (e = s), i != e && (this._children.splice(i, 1), this._children.splice(e, 0, t), 
                (null != this._tree && this == this._tree.rootNode || null != this._cell && null != this._cell.parent && this._expanded) && this._tree._afterMoved(t));
            }
        }, {
            key: "swapChildren",
            value: function(t, e) {
                var i = this._children.indexOf(t), s = this._children.indexOf(e);
                if (-1 == i || -1 == s) throw "Not a child of this container";
                this.swapChildrenAt(i, s);
            }
        }, {
            key: "swapChildrenAt",
            value: function(t, e) {
                var i = this._children[t], s = this._children[e];
                this.setChildIndex(i, e), this.setChildIndex(s, t);
            }
        }, {
            key: "expandToRoot",
            value: function() {
                for (var t = this; t; ) t.expanded = !0, t = t.parent;
            }
        }, {
            key: "_setTree",
            value: function(t) {
                if (this._tree = t, null != this._tree && this._tree.treeNodeWillExpand && this._expanded && this._tree.treeNodeWillExpand.runWith([ this, !0 ]), 
                null != this._children) for (var e = this._children.length, i = 0; i < e; i++) {
                    var s = this._children[i];
                    s._level = this._level + 1, s._setTree(t);
                }
            }
        }, {
            key: "expanded",
            set: function(t) {
                null != this._children && this._expanded != t && (this._expanded = t, null != this._tree && (this._expanded ? this._tree._afterExpanded(this) : this._tree._afterCollapsed(this)));
            },
            get: function() {
                return this._expanded;
            }
        }, {
            key: "isFolder",
            get: function() {
                return null != this._children;
            }
        }, {
            key: "parent",
            get: function() {
                return this._parent;
            }
        }, {
            key: "text",
            get: function() {
                return null != this._cell ? this._cell.text : null;
            },
            set: function(t) {
                null != this._cell && (this._cell.text = t);
            }
        }, {
            key: "icon",
            get: function() {
                return null != this._cell ? this._cell.icon : null;
            },
            set: function(t) {
                null != this._cell && (this._cell.icon = t);
            }
        }, {
            key: "cell",
            get: function() {
                return this._cell;
            }
        }, {
            key: "level",
            get: function() {
                return this._level;
            }
        }, {
            key: "numChildren",
            get: function() {
                return this._children.length;
            }
        }, {
            key: "tree",
            get: function() {
                return this._tree;
            }
        } ]), GTreeNode;
    }();
    t.GTreeNode = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function PackageItem() {
            _classCallCheck(this, PackageItem), this.width = 0, this.height = 0, this.tileGridIndice = 0, 
            this.interval = 0, this.repeatDelay = 0;
        }
        return _createClass(PackageItem, [ {
            key: "load",
            value: function() {
                return this.owner.getItemAsset(this);
            }
        }, {
            key: "getBranch",
            value: function() {
                if (this.branches && -1 != this.owner._branchIndex) {
                    var t = this.branches[this.owner._branchIndex];
                    if (t) return this.owner.getItemById(t);
                }
                return this;
            }
        }, {
            key: "getHighResolution",
            value: function() {
                if (this.highResolution && t.GRoot.contentScaleLevel > 0) {
                    var e = this.highResolution[t.GRoot.contentScaleLevel - 1];
                    if (e) return this.owner.getItemById(e);
                }
                return this;
            }
        }, {
            key: "toString",
            value: function() {
                return this.name;
            }
        } ]), PackageItem;
    }();
    t.PackageItem = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function PopupMenu() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (_classCallCheck(this, PopupMenu), !e && !(e = t.UIConfig.popupMenu)) throw "UIConfig.popupMenu not defined";
            this._contentPane = t.UIPackage.createObjectFromURL(e).asCom, this._contentPane.on(Laya.Event.DISPLAY, this, this.__addedToStage), 
            this._list = this._contentPane.getChild("list"), this._list.removeChildrenToPool(), 
            this._list.addRelation(this._contentPane, t.RelationType.Width), this._list.removeRelation(this._contentPane, t.RelationType.Height), 
            this._contentPane.addRelation(this._list, t.RelationType.Height), this._list.on(t.Events.CLICK_ITEM, this, this.__clickItem);
        }
        return _createClass(PopupMenu, [ {
            key: "dispose",
            value: function() {
                this._contentPane.dispose();
            }
        }, {
            key: "addItem",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this._list.addItemFromPool().asButton;
                i.title = t, i.data = e, i.grayed = !1;
                var s = i.getController("checked");
                return null != s && (s.selectedIndex = 0), i;
            }
        }, {
            key: "addItemAt",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, s = this._list.getFromPool().asButton;
                this._list.addChildAt(s, e), s.title = t, s.data = i, s.grayed = !1;
                var n = s.getController("checked");
                return null != n && (n.selectedIndex = 0), s;
            }
        }, {
            key: "addSeperator",
            value: function() {
                if (null == t.UIConfig.popupMenu_seperator) throw "UIConfig.popupMenu_seperator not defined";
                this.list.addItemFromPool(t.UIConfig.popupMenu_seperator);
            }
        }, {
            key: "getItemName",
            value: function(t) {
                return this._list.getChildAt(t).name;
            }
        }, {
            key: "setItemText",
            value: function(t, e) {
                this._list.getChild(t).asButton.title = e;
            }
        }, {
            key: "setItemVisible",
            value: function(t, e) {
                var i = this._list.getChild(t).asButton;
                i.visible != e && (i.visible = e, this._list.setBoundsChangedFlag());
            }
        }, {
            key: "setItemGrayed",
            value: function(t, e) {
                this._list.getChild(t).asButton.grayed = e;
            }
        }, {
            key: "setItemCheckable",
            value: function(t, e) {
                var i = this._list.getChild(t).asButton.getController("checked");
                null != i && (e ? 0 == i.selectedIndex && (i.selectedIndex = 1) : i.selectedIndex = 0);
            }
        }, {
            key: "setItemChecked",
            value: function(t, e) {
                var i = this._list.getChild(t).asButton.getController("checked");
                null != i && (i.selectedIndex = e ? 2 : 1);
            }
        }, {
            key: "isItemChecked",
            value: function(t) {
                var e = this._list.getChild(t).asButton.getController("checked");
                return null != e && 2 == e.selectedIndex;
            }
        }, {
            key: "removeItem",
            value: function(t) {
                var e = this._list.getChild(t);
                if (null != e) {
                    var i = this._list.getChildIndex(e);
                    return this._list.removeChildToPoolAt(i), !0;
                }
                return !1;
            }
        }, {
            key: "clearItems",
            value: function() {
                this._list.removeChildrenToPool();
            }
        }, {
            key: "show",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                (null != e ? e.root : t.GRoot.inst).showPopup(this.contentPane, e instanceof t.GRoot ? null : e, i);
            }
        }, {
            key: "__clickItem",
            value: function(t) {
                Laya.timer.once(100, this, this.__clickItem2, [ t ]);
            }
        }, {
            key: "__clickItem2",
            value: function(e) {
                if (e instanceof t.GButton) if (e.grayed) this._list.selectedIndex = -1; else {
                    var i = e.asCom.getController("checked");
                    null != i && 0 != i.selectedIndex && (1 == i.selectedIndex ? i.selectedIndex = 2 : i.selectedIndex = 1), 
                    this._contentPane.parent.hidePopup(this.contentPane), null != e.data && e.data.run();
                }
            }
        }, {
            key: "__addedToStage",
            value: function() {
                this._list.selectedIndex = -1, this._list.resizeToFit(1e5, 10);
            }
        }, {
            key: "itemCount",
            get: function() {
                return this._list.numChildren;
            }
        }, {
            key: "contentPane",
            get: function() {
                return this._contentPane;
            }
        }, {
            key: "list",
            get: function() {
                return this._list;
            }
        } ]), PopupMenu;
    }();
    t.PopupMenu = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function RelationItem(t) {
            _classCallCheck(this, RelationItem), this._owner = t, this._defs = new Array();
        }
        return _createClass(RelationItem, [ {
            key: "add",
            value: function(e, i) {
                if (e == t.RelationType.Size) return this.add(t.RelationType.Width, i), void this.add(t.RelationType.Height, i);
                for (var s = this._defs.length, n = 0; n < s; n++) if (this._defs[n].type == e) return;
                this.internalAdd(e, i);
            }
        }, {
            key: "internalAdd",
            value: function(e, s) {
                if (e == t.RelationType.Size) return this.internalAdd(t.RelationType.Width, s), 
                void this.internalAdd(t.RelationType.Height, s);
                var n = new i();
                n.percent = s, n.type = e, n.axis = e <= t.RelationType.Right_Right || e == t.RelationType.Width || e >= t.RelationType.LeftExt_Left && e <= t.RelationType.RightExt_Right ? 0 : 1, 
                this._defs.push(n), (s || e == t.RelationType.Left_Center || e == t.RelationType.Center_Center || e == t.RelationType.Right_Center || e == t.RelationType.Top_Middle || e == t.RelationType.Middle_Middle || e == t.RelationType.Bottom_Middle) && (this._owner.pixelSnapping = !0);
            }
        }, {
            key: "remove",
            value: function(e) {
                if (e == t.RelationType.Size) return this.remove(t.RelationType.Width), void this.remove(t.RelationType.Height);
                for (var i = this._defs.length, s = 0; s < i; s++) if (this._defs[s].type == e) {
                    this._defs.splice(s, 1);
                    break;
                }
            }
        }, {
            key: "copyFrom",
            value: function(t) {
                this._target = t.target, this._defs.length = 0;
                for (var e = t._defs.length, s = 0; s < e; s++) {
                    var n = t._defs[s], a = new i();
                    a.copyFrom(n), this._defs.push(a);
                }
            }
        }, {
            key: "dispose",
            value: function() {
                null != this._target && (this.releaseRefTarget(), this._target = null);
            }
        }, {
            key: "applyOnSelfResized",
            value: function(e, i, s) {
                var n = this._defs.length;
                if (0 != n) {
                    for (var a = this._owner.x, o = this._owner.y, r = 0; r < n; r++) {
                        switch (this._defs[r].type) {
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
                    if ((a != this._owner.x || o != this._owner.y) && (a = this._owner.x - a, o = this._owner.y - o, 
                    this._owner.updateGearFromRelations(1, a, o), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                        n = this._owner.parent._transitions.length;
                        for (var l = 0; l < n; l++) {
                            this._owner.parent._transitions[l].updateFromRelations(this._owner.id, a, o);
                        }
                    }
                }
            }
        }, {
            key: "applyOnXYChanged",
            value: function(e, i, s) {
                var n;
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
                    this._owner != this._target.parent ? (n = this._owner.xMin, this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = n + i) : this._owner.width = this._owner._rawWidth - i;
                    break;

                  case t.RelationType.RightExt_Left:
                  case t.RelationType.RightExt_Right:
                    this._owner != this._target.parent ? (n = this._owner.xMin, this._owner.width = this._owner._rawWidth + i, 
                    this._owner.xMin = n) : this._owner.width = this._owner._rawWidth + i;
                    break;

                  case t.RelationType.TopExt_Top:
                  case t.RelationType.TopExt_Bottom:
                    this._owner != this._target.parent ? (n = this._owner.yMin, this._owner.height = this._owner._rawHeight - s, 
                    this._owner.yMin = n + s) : this._owner.height = this._owner._rawHeight - s;
                    break;

                  case t.RelationType.BottomExt_Top:
                  case t.RelationType.BottomExt_Bottom:
                    this._owner != this._target.parent ? (n = this._owner.yMin, this._owner.height = this._owner._rawHeight + s, 
                    this._owner.yMin = n) : this._owner.height = this._owner._rawHeight + s;
                }
            }
        }, {
            key: "applyOnSizeChanged",
            value: function(e) {
                var i, s, n = 0, a = 0, o = 0;
                switch (0 == e.axis ? (this._target != this._owner.parent && (n = this._target.x, 
                this._target.pivotAsAnchor && (a = this._target.pivotX)), e.percent ? 0 != this._targetWidth && (o = this._target._width / this._targetWidth) : o = this._target._width - this._targetWidth) : (this._target != this._owner.parent && (n = this._target.y, 
                this._target.pivotAsAnchor && (a = this._target.pivotY)), e.percent ? 0 != this._targetHeight && (o = this._target._height / this._targetHeight) : o = this._target._height - this._targetHeight), 
                e.type) {
                  case t.RelationType.Left_Left:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * o : 0 != a && (this._owner.x += o * -a);
                    break;

                  case t.RelationType.Left_Center:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * o : this._owner.x += o * (.5 - a);
                    break;

                  case t.RelationType.Left_Right:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * o : this._owner.x += o * (1 - a);
                    break;

                  case t.RelationType.Center_Center:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin + .5 * this._owner._rawWidth - n) * o - .5 * this._owner._rawWidth : this._owner.x += o * (.5 - a);
                    break;

                  case t.RelationType.Right_Left:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * o - this._owner._rawWidth : 0 != a && (this._owner.x += o * -a);
                    break;

                  case t.RelationType.Right_Center:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * o - this._owner._rawWidth : this._owner.x += o * (.5 - a);
                    break;

                  case t.RelationType.Right_Right:
                    e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * o - this._owner._rawWidth : this._owner.x += o * (1 - a);
                    break;

                  case t.RelationType.Top_Top:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * o : 0 != a && (this._owner.y += o * -a);
                    break;

                  case t.RelationType.Top_Middle:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * o : this._owner.y += o * (.5 - a);
                    break;

                  case t.RelationType.Top_Bottom:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * o : this._owner.y += o * (1 - a);
                    break;

                  case t.RelationType.Middle_Middle:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin + .5 * this._owner._rawHeight - n) * o - .5 * this._owner._rawHeight : this._owner.y += o * (.5 - a);
                    break;

                  case t.RelationType.Bottom_Top:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * o - this._owner._rawHeight : 0 != a && (this._owner.y += o * -a);
                    break;

                  case t.RelationType.Bottom_Middle:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * o - this._owner._rawHeight : this._owner.y += o * (.5 - a);
                    break;

                  case t.RelationType.Bottom_Bottom:
                    e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * o - this._owner._rawHeight : this._owner.y += o * (1 - a);
                    break;

                  case t.RelationType.Width:
                    i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceWidth - this._target.initWidth : this._owner._rawWidth - this._targetWidth, 
                    e.percent && (i *= o), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (s = this._owner.xMin, 
                    this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0), this._owner.xMin = s) : this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0) : this._owner.width = this._target._width + i;
                    break;

                  case t.RelationType.Height:
                    i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceHeight - this._target.initHeight : this._owner._rawHeight - this._targetHeight, 
                    e.percent && (i *= o), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (s = this._owner.yMin, 
                    this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0), this._owner.yMin = s) : this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0) : this._owner.height = this._target._height + i;
                    break;

                  case t.RelationType.LeftExt_Left:
                    s = this._owner.xMin, i = e.percent ? n + (s - n) * o - s : o * -a, this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = s + i;
                    break;

                  case t.RelationType.LeftExt_Right:
                    s = this._owner.xMin, i = e.percent ? n + (s - n) * o - s : o * (1 - a), this._owner.width = this._owner._rawWidth - i, 
                    this._owner.xMin = s + i;
                    break;

                  case t.RelationType.RightExt_Left:
                    s = this._owner.xMin, i = e.percent ? n + (s + this._owner._rawWidth - n) * o - (s + this._owner._rawWidth) : o * -a, 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s;
                    break;

                  case t.RelationType.RightExt_Right:
                    s = this._owner.xMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = n + this._target._width - this._target._width * a + (this._owner.sourceWidth - n - this._target.initWidth + this._target.initWidth * a) * o : this._owner.width = n + (this._owner._rawWidth - n) * o : (i = n + (s + this._owner._rawWidth - n) * o - (s + this._owner._rawWidth), 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - a) : this._owner.width = this._owner._rawWidth + o * (1 - a) : (i = o * (1 - a), 
                    this._owner.width = this._owner._rawWidth + i, this._owner.xMin = s);
                    break;

                  case t.RelationType.TopExt_Top:
                    s = this._owner.yMin, i = e.percent ? n + (s - n) * o - s : o * -a, this._owner.height = this._owner._rawHeight - i, 
                    this._owner.yMin = s + i;
                    break;

                  case t.RelationType.TopExt_Bottom:
                    s = this._owner.yMin, i = e.percent ? n + (s - n) * o - s : o * (1 - a), this._owner.height = this._owner._rawHeight - i, 
                    this._owner.yMin = s + i;
                    break;

                  case t.RelationType.BottomExt_Top:
                    s = this._owner.yMin, i = e.percent ? n + (s + this._owner._rawHeight - n) * o - (s + this._owner._rawHeight) : o * -a, 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s;
                    break;

                  case t.RelationType.BottomExt_Bottom:
                    s = this._owner.yMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = n + this._target._height - this._target._height * a + (this._owner.sourceHeight - n - this._target.initHeight + this._target.initHeight * a) * o : this._owner.height = n + (this._owner._rawHeight - n) * o : (i = n + (s + this._owner._rawHeight - n) * o - (s + this._owner._rawHeight), 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - a) : this._owner.height = this._owner._rawHeight + o * (1 - a) : (i = o * (1 - a), 
                    this._owner.height = this._owner._rawHeight + i, this._owner.yMin = s);
                }
            }
        }, {
            key: "addRefTarget",
            value: function() {
                this._target != this._owner.parent && this._target.on(t.Events.XY_CHANGED, this, this.__targetXYChanged), 
                this._target.on(t.Events.SIZE_CHANGED, this, this.__targetSizeChanged), this._target.on(t.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange), 
                this._targetX = this._target.x, this._targetY = this._target.y, this._targetWidth = this._target._width, 
                this._targetHeight = this._target._height;
            }
        }, {
            key: "releaseRefTarget",
            value: function() {
                null != this._target.displayObject && (this._target.off(t.Events.XY_CHANGED, this, this.__targetXYChanged), 
                this._target.off(t.Events.SIZE_CHANGED, this, this.__targetSizeChanged), this._target.off(t.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange));
            }
        }, {
            key: "__targetXYChanged",
            value: function() {
                if (null != this._owner.relations.handling || null != this._owner.group && this._owner.group._updating) return this._targetX = this._target.x, 
                void (this._targetY = this._target.y);
                this._owner.relations.handling = this._target;
                for (var t = this._owner.x, e = this._owner.y, i = this._target.x - this._targetX, s = this._target.y - this._targetY, n = this._defs.length, a = 0; a < n; a++) this.applyOnXYChanged(this._defs[a], i, s);
                if (this._targetX = this._target.x, this._targetY = this._target.y, (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, 
                e = this._owner.y - e, this._owner.updateGearFromRelations(1, t, e), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                    n = this._owner.parent._transitions.length;
                    for (var o = 0; o < n; o++) {
                        this._owner.parent._transitions[o].updateFromRelations(this._owner.id, t, e);
                    }
                }
                this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeChanged",
            value: function() {
                if (this._owner.relations.sizeDirty && this._owner.relations.ensureRelationsSizeCorrect(), 
                null != this._owner.relations.handling) return this._targetWidth = this._target._width, 
                void (this._targetHeight = this._target._height);
                this._owner.relations.handling = this._target;
                for (var t = this._owner.x, e = this._owner.y, i = this._owner._rawWidth, s = this._owner._rawHeight, n = this._defs.length, a = 0; a < n; a++) this.applyOnSizeChanged(this._defs[a]);
                if (this._targetWidth = this._target._width, this._targetHeight = this._target._height, 
                (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, e = this._owner.y - e, 
                this._owner.updateGearFromRelations(1, t, e), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                    n = this._owner.parent._transitions.length;
                    for (var o = 0; o < n; o++) {
                        this._owner.parent._transitions[o].updateFromRelations(this._owner.id, t, e);
                    }
                }
                i == this._owner._rawWidth && s == this._owner._rawHeight || (i = this._owner._rawWidth - i, 
                s = this._owner._rawHeight - s, this._owner.updateGearFromRelations(2, i, s)), this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeWillChange",
            value: function() {
                this._owner.relations.sizeDirty = !0;
            }
        }, {
            key: "owner",
            get: function() {
                return this._owner;
            }
        }, {
            key: "target",
            set: function(t) {
                this._target != t && (this._target && this.releaseRefTarget(), this._target = t, 
                this._target && this.addRefTarget());
            },
            get: function() {
                return this._target;
            }
        }, {
            key: "isEmpty",
            get: function() {
                return 0 == this._defs.length;
            }
        } ]), RelationItem;
    }();
    t.RelationItem = e;
    var i = function() {
        function RelationDef() {
            _classCallCheck(this, RelationDef);
        }
        return _createClass(RelationDef, [ {
            key: "copyFrom",
            value: function(t) {
                this.percent = t.percent, this.type = t.type, this.axis = t.axis;
            }
        } ]), RelationDef;
    }();
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function Relations(t) {
            _classCallCheck(this, Relations), this._owner = t, this._items = [];
        }
        return _createClass(Relations, [ {
            key: "add",
            value: function(e, i) {
                for (var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = this._items.length, a = 0; a < n; a++) {
                    var o = this._items[a];
                    if (o.target == e) return void o.add(i, s);
                }
                var r = new t.RelationItem(this._owner);
                r.target = e, r.add(i, s), this._items.push(r);
            }
        }, {
            key: "remove",
            value: function(t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = this._items.length, s = 0; s < i; ) {
                    var n = this._items[s];
                    n.target == t ? (n.remove(e), n.isEmpty ? (n.dispose(), this._items.splice(s, 1), 
                    i--) : s++) : s++;
                }
            }
        }, {
            key: "contains",
            value: function(t) {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    if (this._items[i].target == t) return !0;
                }
                return !1;
            }
        }, {
            key: "clearFor",
            value: function(t) {
                for (var e = this._items.length, i = 0; i < e; ) {
                    var s = this._items[i];
                    s.target == t ? (s.dispose(), this._items.splice(i, 1), e--) : i++;
                }
            }
        }, {
            key: "clearAll",
            value: function() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    this._items[e].dispose();
                }
                this._items.length = 0;
            }
        }, {
            key: "copyFrom",
            value: function(e) {
                this.clearAll();
                for (var i = e._items, s = i.length, n = 0; n < s; n++) {
                    var a = i[n], o = new t.RelationItem(this._owner);
                    o.copyFrom(a), this._items.push(o);
                }
            }
        }, {
            key: "dispose",
            value: function() {
                this.clearAll();
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function(t, e, i) {
                if (0 != this._items.length) for (var s = this._items.length, n = 0; n < s; n++) {
                    this._items[n].applyOnSelfResized(t, e, i);
                }
            }
        }, {
            key: "ensureRelationsSizeCorrect",
            value: function() {
                if (0 != this._items.length) {
                    this.sizeDirty = !1;
                    for (var t = this._items.length, e = 0; e < t; e++) {
                        this._items[e].target.ensureSizeCorrect();
                    }
                }
            }
        }, {
            key: "setup",
            value: function(e, i) {
                for (var s, n = e.readByte(), a = 0; a < n; a++) {
                    var o = e.getInt16();
                    s = -1 == o ? this._owner.parent : i ? this._owner.getChildAt(o) : this._owner.parent.getChildAt(o);
                    var r = new t.RelationItem(this._owner);
                    r.target = s, this._items.push(r);
                    for (var l = e.readByte(), h = 0; h < l; h++) {
                        var u = e.readByte(), _ = e.readBool();
                        r.internalAdd(u, _);
                    }
                }
            }
        }, {
            key: "empty",
            get: function() {
                return 0 == this._items.length;
            }
        } ]), Relations;
    }();
    t.Relations = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function ScrollPane(e) {
            _classCallCheck(this, ScrollPane), this._owner = e, this._maskContainer = new Laya.Sprite(), 
            this._owner.displayObject.addChild(this._maskContainer), this._container = this._owner._container, 
            this._container.pos(0, 0), this._maskContainer.addChild(this._container), this._mouseWheelEnabled = !0, 
            this._xPos = 0, this._yPos = 0, this._aniFlag = 0, this._tweening = 0, this._loop = 0, 
            this._footerLockedSize = 0, this._headerLockedSize = 0, this._scrollBarMargin = new t.Margin(), 
            this._viewSize = new Laya.Point(), this._contentSize = new Laya.Point(), this._pageSize = new Laya.Point(1, 1), 
            this._overlapSize = new Laya.Point(), this._tweenTime = new Laya.Point(), this._tweenStart = new Laya.Point(), 
            this._tweenDuration = new Laya.Point(), this._tweenChange = new Laya.Point(), this._velocity = new Laya.Point(), 
            this._containerPos = new Laya.Point(), this._beginTouchPos = new Laya.Point(), this._lastTouchPos = new Laya.Point(), 
            this._lastTouchGlobalPos = new Laya.Point(), this._scrollStep = t.UIConfig.defaultScrollStep, 
            this._mouseWheelStep = 2 * this._scrollStep, this._decelerationRate = t.UIConfig.defaultScrollDecelerationRate, 
            this._owner.on(Laya.Event.MOUSE_DOWN, this, this.__mouseDown), this._owner.on(Laya.Event.MOUSE_WHEEL, this, this.__mouseWheel);
        }
        return _createClass(ScrollPane, [ {
            key: "setup",
            value: function(e) {
                this._scrollType = e.readByte();
                var i = e.readByte(), s = e.getInt32();
                e.readBool() && (this._scrollBarMargin.top = e.getInt32(), this._scrollBarMargin.bottom = e.getInt32(), 
                this._scrollBarMargin.left = e.getInt32(), this._scrollBarMargin.right = e.getInt32());
                var n = e.readS(), a = e.readS(), o = e.readS(), r = e.readS();
                if (this._displayOnLeft = 0 != (1 & s), this._snapToItem = 0 != (2 & s), this._displayInDemand = 0 != (4 & s), 
                this._pageMode = 0 != (8 & s), this._touchEffect = !!(16 & s) || !(32 & s) && t.UIConfig.defaultScrollTouchEffect, 
                this._bouncebackEffect = !!(64 & s) || !(128 & s) && t.UIConfig.defaultScrollBounceEffect, 
                this._inertiaDisabled = 0 != (256 & s), 0 == (512 & s) && (this._maskContainer.scrollRect = new Laya.Rectangle()), 
                this._floating = 0 != (1024 & s), i == t.ScrollBarDisplayType.Default && (i = t.UIConfig.defaultScrollBarDisplay), 
                i != t.ScrollBarDisplayType.Hidden) {
                    if (this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical) {
                        var l = n || t.UIConfig.verticalScrollBar;
                        if (l) {
                            if (this._vtScrollBar = t.UIPackage.createObjectFromURL(l), !this._vtScrollBar) throw "cannot create scrollbar from " + l;
                            this._vtScrollBar.setScrollPane(this, !0), this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
                        }
                    }
                    if ((this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Horizontal) && (l = a || t.UIConfig.horizontalScrollBar)) {
                        if (this._hzScrollBar = t.UIPackage.createObjectFromURL(l), !this._hzScrollBar) throw "cannot create scrollbar from " + l;
                        this._hzScrollBar.setScrollPane(this, !1), this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
                    }
                    this._scrollBarDisplayAuto = i == t.ScrollBarDisplayType.Auto, this._scrollBarDisplayAuto && (this._vtScrollBar && (this._vtScrollBar.displayObject.visible = !1), 
                    this._hzScrollBar && (this._hzScrollBar.displayObject.visible = !1));
                } else this._mouseWheelEnabled = !1;
                if (o && (this._header = t.UIPackage.createObjectFromURL(o), null == this._header)) throw new Error("FairyGUI: cannot create scrollPane this.header from " + o);
                if (r && (this._footer = t.UIPackage.createObjectFromURL(r), null == this._footer)) throw new Error("FairyGUI: cannot create scrollPane this.footer from " + r);
                null == this._header && null == this._footer || (this._refreshBarAxis = this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical ? "y" : "x"), 
                this.setSize(this.owner.width, this.owner.height);
            }
        }, {
            key: "dispose",
            value: function() {
                0 != this._tweening && Laya.timer.clear(this, this.tweenUpdate), this._pageController = null, 
                null != this._hzScrollBar && this._hzScrollBar.dispose(), null != this._vtScrollBar && this._vtScrollBar.dispose(), 
                null != this._header && this._header.dispose(), null != this._footer && this._footer.dispose();
            }
        }, {
            key: "setPercX",
            value: function(e, i) {
                this._owner.ensureBoundsCorrect(), this.setPosX(this._overlapSize.x * t.ToolSet.clamp01(e), i);
            }
        }, {
            key: "setPercY",
            value: function(e, i) {
                this._owner.ensureBoundsCorrect(), this.setPosY(this._overlapSize.y * t.ToolSet.clamp01(e), i);
            }
        }, {
            key: "setPosX",
            value: function(e, i) {
                this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "x")), 
                (e = t.ToolSet.clamp(e, 0, this._overlapSize.x)) != this._xPos && (this._xPos = e, 
                this.posChanged(i));
            }
        }, {
            key: "setPosY",
            value: function(e, i) {
                this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "y")), 
                (e = t.ToolSet.clamp(e, 0, this._overlapSize.y)) != this._yPos && (this._yPos = e, 
                this.posChanged(i));
            }
        }, {
            key: "setCurrentPageX",
            value: function(t, e) {
                this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.x > 0 && this.setPosX(t * this._pageSize.x, e));
            }
        }, {
            key: "setCurrentPageY",
            value: function(t, e) {
                this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.y > 0 && this.setPosY(t * this._pageSize.y, e));
            }
        }, {
            key: "scrollTop",
            value: function(t) {
                this.setPercY(0, t);
            }
        }, {
            key: "scrollBottom",
            value: function(t) {
                this.setPercY(1, t);
            }
        }, {
            key: "scrollUp",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 ? arguments[1] : void 0;
                this._pageMode ? this.setPosY(this._yPos - this._pageSize.y * t, e) : this.setPosY(this._yPos - this._scrollStep * t, e);
            }
        }, {
            key: "scrollDown",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 ? arguments[1] : void 0;
                this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * t, e) : this.setPosY(this._yPos + this._scrollStep * t, e);
            }
        }, {
            key: "scrollLeft",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 ? arguments[1] : void 0;
                this._pageMode ? this.setPosX(this._xPos - this._pageSize.x * t, e) : this.setPosX(this._xPos - this._scrollStep * t, e);
            }
        }, {
            key: "scrollRight",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 ? arguments[1] : void 0;
                this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * t, e) : this.setPosX(this._xPos + this._scrollStep * t, e);
            }
        }, {
            key: "scrollToView",
            value: function(e, i, s) {
                var n;
                if (this._owner.ensureBoundsCorrect(), this._needRefresh && this.refresh(), e instanceof t.GObject ? e.parent != this._owner ? (e.parent.localToGlobalRect(e.x, e.y, e.width, e.height, ScrollPane.sHelperRect), 
                n = this._owner.globalToLocalRect(ScrollPane.sHelperRect.x, ScrollPane.sHelperRect.y, ScrollPane.sHelperRect.width, ScrollPane.sHelperRect.height, ScrollPane.sHelperRect)) : (n = ScrollPane.sHelperRect).setTo(e.x, e.y, e.width, e.height) : n = e, 
                this._overlapSize.y > 0) {
                    var a = this._yPos + this._viewSize.y;
                    s || n.y <= this._yPos || n.height >= this._viewSize.y ? this._pageMode ? this.setPosY(Math.floor(n.y / this._pageSize.y) * this._pageSize.y, i) : this.setPosY(n.y, i) : n.y + n.height > a && (this._pageMode ? this.setPosY(Math.floor(n.y / this._pageSize.y) * this._pageSize.y, i) : n.height <= this._viewSize.y / 2 ? this.setPosY(n.y + 2 * n.height - this._viewSize.y, i) : this.setPosY(n.y + n.height - this._viewSize.y, i));
                }
                if (this._overlapSize.x > 0) {
                    var o = this._xPos + this._viewSize.x;
                    s || n.x <= this._xPos || n.width >= this._viewSize.x ? this._pageMode ? this.setPosX(Math.floor(n.x / this._pageSize.x) * this._pageSize.x, i) : this.setPosX(n.x, i) : n.x + n.width > o && (this._pageMode ? this.setPosX(Math.floor(n.x / this._pageSize.x) * this._pageSize.x, i) : n.width <= this._viewSize.x / 2 ? this.setPosX(n.x + 2 * n.width - this._viewSize.x, i) : this.setPosX(n.x + n.width - this._viewSize.x, i));
                }
                !i && this._needRefresh && this.refresh();
            }
        }, {
            key: "isChildInView",
            value: function(t) {
                if (this._overlapSize.y > 0) {
                    var e = t.y + this._container.y;
                    if (e < -t.height || e > this._viewSize.y) return !1;
                }
                return !(this._overlapSize.x > 0 && ((e = t.x + this._container.x) < -t.width || e > this._viewSize.x));
            }
        }, {
            key: "cancelDragging",
            value: function() {
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp), 
                this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), ScrollPane.draggingPane == this && (ScrollPane.draggingPane = null), 
                ScrollPane._gestureFlag = 0, this._dragged = !1, this._maskContainer.mouseEnabled = !0;
            }
        }, {
            key: "lockHeader",
            value: function(t) {
                this._headerLockedSize != t && (this._headerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0 && (this._tweenStart.setTo(this._container.x, this._container.y), 
                this._tweenChange.setTo(0, 0), this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis], 
                this._tweenDuration.setTo(ScrollPane.TWEEN_TIME_DEFAULT, ScrollPane.TWEEN_TIME_DEFAULT), 
                this.startTween(2)));
            }
        }, {
            key: "lockFooter",
            value: function(t) {
                if (this._footerLockedSize != t && (this._footerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis])) {
                    this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(0, 0);
                    var e = this._overlapSize[this._refreshBarAxis];
                    0 == e ? e = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : e += this._footerLockedSize, 
                    this._tweenChange[this._refreshBarAxis] = -e - this._tweenStart[this._refreshBarAxis], 
                    this._tweenDuration.setTo(ScrollPane.TWEEN_TIME_DEFAULT, ScrollPane.TWEEN_TIME_DEFAULT), 
                    this.startTween(2);
                }
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function() {
                this.setSize(this._owner.width, this._owner.height), this.posChanged(!1);
            }
        }, {
            key: "handleControllerChanged",
            value: function(e) {
                this._pageController == e && (this._scrollType == t.ScrollType.Horizontal ? this.setCurrentPageX(e.selectedIndex, !0) : this.setCurrentPageY(e.selectedIndex, !0));
            }
        }, {
            key: "updatePageController",
            value: function() {
                var e;
                if (null != this._pageController && !this._pageController.changing && (e = this._scrollType == t.ScrollType.Horizontal ? this.currentPageX : this.currentPageY) < this._pageController.pageCount) {
                    var i = this._pageController;
                    this._pageController = null, i.selectedIndex = e, this._pageController = i;
                }
            }
        }, {
            key: "adjustMaskContainer",
            value: function() {
                var t, e;
                t = this._displayOnLeft && null != this._vtScrollBar && !this._floating ? Math.floor(this._owner.margin.left + this._vtScrollBar.width) : Math.floor(this._owner.margin.left), 
                e = Math.floor(this._owner.margin.top), this._maskContainer.pos(t, e), 0 != this._owner._alignOffset.x || 0 != this._owner._alignOffset.y ? (null == this._alignContainer && (this._alignContainer = new Laya.Sprite(), 
                this._maskContainer.addChild(this._alignContainer), this._alignContainer.addChild(this._container)), 
                this._alignContainer.pos(this._owner._alignOffset.x, this._owner._alignOffset.y)) : this._alignContainer && this._alignContainer.pos(0, 0);
            }
        }, {
            key: "setSize",
            value: function(t, e) {
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
            value: function(t, e) {
                this._contentSize.x == t && this._contentSize.y == e || (this._contentSize.x = t, 
                this._contentSize.y = e, this.handleSizeChanged());
            }
        }, {
            key: "changeContentSizeOnScrolling",
            value: function(t, e, i, s) {
                var n = this._xPos == this._overlapSize.x, a = this._yPos == this._overlapSize.y;
                this._contentSize.x += t, this._contentSize.y += e, this.handleSizeChanged(), 1 == this._tweening ? (0 != t && n && this._tweenChange.x < 0 && (this._xPos = this._overlapSize.x, 
                this._tweenChange.x = -this._xPos - this._tweenStart.x), 0 != e && a && this._tweenChange.y < 0 && (this._yPos = this._overlapSize.y, 
                this._tweenChange.y = -this._yPos - this._tweenStart.y)) : 2 == this._tweening ? (0 != i && (this._container.x -= i, 
                this._tweenStart.x -= i, this._xPos = -this._container.x), 0 != s && (this._container.y -= s, 
                this._tweenStart.y -= s, this._yPos = -this._container.y)) : this._dragged ? (0 != i && (this._container.x -= i, 
                this._containerPos.x -= i, this._xPos = -this._container.x), 0 != s && (this._container.y -= s, 
                this._containerPos.y -= s, this._yPos = -this._container.y)) : (0 != t && n && (this._xPos = this._overlapSize.x, 
                this._container.x = -this._xPos), 0 != e && a && (this._yPos = this._overlapSize.y, 
                this._container.y = -this._yPos)), this._pageMode && this.updatePageController();
            }
        }, {
            key: "handleSizeChanged",
            value: function() {
                this._displayInDemand && (this._vScrollNone = this._contentSize.y <= this._viewSize.y, 
                this._hScrollNone = this._contentSize.x <= this._viewSize.x), this._vtScrollBar && (0 == this._contentSize.y ? this._vtScrollBar.setDisplayPerc(0) : this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y))), 
                this._hzScrollBar && (0 == this._contentSize.x ? this._hzScrollBar.setDisplayPerc(0) : this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x))), 
                this.updateScrollBarVisible();
                var e = this._maskContainer.scrollRect;
                if (e && (e.width = this._viewSize.x, e.height = this._viewSize.y, this._vScrollNone && this._vtScrollBar && (e.width += this._vtScrollBar.width), 
                this._hScrollNone && this._hzScrollBar && (e.height += this._hzScrollBar.height), 
                this._maskContainer.scrollRect = e), this._scrollType == t.ScrollType.Horizontal || this._scrollType == t.ScrollType.Both ? this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x)) : this._overlapSize.x = 0, 
                this._scrollType == t.ScrollType.Vertical || this._scrollType == t.ScrollType.Both ? this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y)) : this._overlapSize.y = 0, 
                this._xPos = t.ToolSet.clamp(this._xPos, 0, this._overlapSize.x), this._yPos = t.ToolSet.clamp(this._yPos, 0, this._overlapSize.y), 
                null != this._refreshBarAxis) {
                    var i = this._overlapSize[this._refreshBarAxis];
                    0 == i ? i = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : i += this._footerLockedSize, 
                    "x" == this._refreshBarAxis ? this._container.pos(t.ToolSet.clamp(this._container.x, -i, this._headerLockedSize), t.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0)) : this._container.pos(t.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), t.ToolSet.clamp(this._container.y, -i, this._headerLockedSize)), 
                    null != this._header && ("x" == this._refreshBarAxis ? this._header.height = this._viewSize.y : this._header.width = this._viewSize.x), 
                    null != this._footer && ("y" == this._refreshBarAxis ? this._footer.height = this._viewSize.y : this._footer.width = this._viewSize.x);
                } else this._container.pos(t.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), t.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
                this.updateScrollBarPos(), this._pageMode && this.updatePageController();
            }
        }, {
            key: "posChanged",
            value: function(t) {
                0 == this._aniFlag ? this._aniFlag = t ? 1 : -1 : 1 != this._aniFlag || t || (this._aniFlag = -1), 
                this._needRefresh = !0, Laya.timer.callLater(this, this.refresh);
            }
        }, {
            key: "refresh",
            value: function() {
                null != this._owner.displayObject && (this._needRefresh = !1, Laya.timer.clear(this, this.refresh), 
                (this._pageMode || this._snapToItem) && (ScrollPane.sEndPos.setTo(-this._xPos, -this._yPos), 
                this.alignPosition(ScrollPane.sEndPos, !1), this._xPos = -ScrollPane.sEndPos.x, 
                this._yPos = -ScrollPane.sEndPos.y), this.refresh2(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject), 
                this._needRefresh && (this._needRefresh = !1, Laya.timer.clear(this, this.refresh), 
                this.refresh2()), this.updateScrollBarPos(), this._aniFlag = 0);
            }
        }, {
            key: "refresh2",
            value: function() {
                var t, e;
                1 != this._aniFlag || this._dragged ? (0 != this._tweening && this.killTween(), 
                this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos)), this.loopCheckingCurrent()) : (this._overlapSize.x > 0 ? t = -Math.floor(this._xPos) : (0 != this._container.x && (this._container.x = 0), 
                t = 0), this._overlapSize.y > 0 ? e = -Math.floor(this._yPos) : (0 != this._container.y && (this._container.y = 0), 
                e = 0), t != this._container.x || e != this._container.y ? (this._tweenDuration.setTo(ScrollPane.TWEEN_TIME_GO, ScrollPane.TWEEN_TIME_GO), 
                this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(t - this._tweenStart.x, e - this._tweenStart.y), 
                this.startTween(1)) : 0 != this._tweening && this.killTween());
                this._pageMode && this.updatePageController();
            }
        }, {
            key: "__mouseDown",
            value: function() {
                if (this._touchEffect) {
                    0 != this._tweening ? (this.killTween(), this._dragged = !0) : this._dragged = !1;
                    var t = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, ScrollPane.sHelperPoint);
                    this._containerPos.setTo(this._container.x, this._container.y), this._beginTouchPos.setTo(t.x, t.y), 
                    this._lastTouchPos.setTo(t.x, t.y), this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY), 
                    this._isHoldAreaDone = !1, this._velocity.setTo(0, 0), this._velocityScale = 1, 
                    this._lastMoveTime = Laya.timer.currTimer / 1e3, this._owner.displayObject.stage.on(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                    this._owner.displayObject.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseUp), this._owner.displayObject.stage.on(Laya.Event.CLICK, this, this.__click);
                }
            }
        }, {
            key: "__mouseMove",
            value: function() {
                if (this._touchEffect && !this.owner.isDisposed && (null == ScrollPane.draggingPane || ScrollPane.draggingPane == this) && null == t.GObject.draggingObject) {
                    var e, i, s, n = t.UIConfig.touchScrollSensitivity, a = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, ScrollPane.sHelperPoint);
                    if (this._scrollType == t.ScrollType.Vertical) {
                        if (!this._isHoldAreaDone) {
                            if (ScrollPane._gestureFlag |= 1, (e = Math.abs(this._beginTouchPos.y - a.y)) < n) return;
                            if (0 != (2 & ScrollPane._gestureFlag) && e < Math.abs(this._beginTouchPos.x - a.x)) return;
                        }
                        i = !0;
                    } else if (this._scrollType == t.ScrollType.Horizontal) {
                        if (!this._isHoldAreaDone) {
                            if (ScrollPane._gestureFlag |= 2, (e = Math.abs(this._beginTouchPos.x - a.x)) < n) return;
                            if (0 != (1 & ScrollPane._gestureFlag) && e < Math.abs(this._beginTouchPos.y - a.y)) return;
                        }
                        s = !0;
                    } else {
                        if (ScrollPane._gestureFlag = 3, !this._isHoldAreaDone && (e = Math.abs(this._beginTouchPos.y - a.y)) < n && (e = Math.abs(this._beginTouchPos.x - a.x)) < n) return;
                        i = s = !0;
                    }
                    var o = Math.floor(this._containerPos.x + a.x - this._beginTouchPos.x), r = Math.floor(this._containerPos.y + a.y - this._beginTouchPos.y);
                    i && (r > 0 ? this._bouncebackEffect ? null != this._header && 0 != this._header.maxHeight ? this._container.y = Math.floor(Math.min(.5 * r, this._header.maxHeight)) : this._container.y = Math.floor(Math.min(.5 * r, this._viewSize.y * ScrollPane.PULL_RATIO)) : this._container.y = 0 : r < -this._overlapSize.y ? this._bouncebackEffect ? null != this._footer && this._footer.maxHeight > 0 ? this._container.y = Math.floor(Math.max(.5 * (r + this._overlapSize.y), -this._footer.maxHeight) - this._overlapSize.y) : this._container.y = Math.floor(Math.max(.5 * (r + this._overlapSize.y), -this._viewSize.y * ScrollPane.PULL_RATIO) - this._overlapSize.y) : this._container.y = -this._overlapSize.y : this._container.y = r), 
                    s && (o > 0 ? this._bouncebackEffect ? null != this._header && 0 != this._header.maxWidth ? this._container.x = Math.floor(Math.min(.5 * o, this._header.maxWidth)) : this._container.x = Math.floor(Math.min(.5 * o, this._viewSize.x * ScrollPane.PULL_RATIO)) : this._container.x = 0 : o < 0 - this._overlapSize.x ? this._bouncebackEffect ? null != this._footer && this._footer.maxWidth > 0 ? this._container.x = Math.floor(Math.max(.5 * (o + this._overlapSize.x), -this._footer.maxWidth) - this._overlapSize.x) : this._container.x = Math.floor(Math.max(.5 * (o + this._overlapSize.x), -this._viewSize.x * ScrollPane.PULL_RATIO) - this._overlapSize.x) : this._container.x = -this._overlapSize.x : this._container.x = o);
                    var l = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, h = Laya.timer.currTimer / 1e3, u = Math.max(h - this._lastMoveTime, 1 / l), _ = a.x - this._lastTouchPos.x, c = a.y - this._lastTouchPos.y;
                    if (s || (_ = 0), i || (c = 0), 0 != u) {
                        var d = u * l - 1;
                        if (d > 1) {
                            var g = Math.pow(.833, d);
                            this._velocity.x = this._velocity.x * g, this._velocity.y = this._velocity.y * g;
                        }
                        this._velocity.x = t.ToolSet.lerp(this._velocity.x, 60 * _ / l / u, 10 * u), this._velocity.y = t.ToolSet.lerp(this._velocity.y, 60 * c / l / u, 10 * u);
                    }
                    var p = this._lastTouchGlobalPos.x - Laya.stage.mouseX, f = this._lastTouchGlobalPos.y - Laya.stage.mouseY;
                    0 != _ ? this._velocityScale = Math.abs(p / _) : 0 != c && (this._velocityScale = Math.abs(f / c)), 
                    this._lastTouchPos.setTo(a.x, a.y), this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY), 
                    this._lastMoveTime = h, this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x)), 
                    this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y)), 
                    0 != this._loop && (o = this._container.x, r = this._container.y, this.loopCheckingCurrent() && (this._containerPos.x += this._container.x - o, 
                    this._containerPos.y += this._container.y - r)), ScrollPane.draggingPane = this, 
                    this._isHoldAreaDone = !0, this._dragged = !0, this._maskContainer.mouseEnabled = !1, 
                    this.updateScrollBarPos(), this.updateScrollBarVisible(), this._pageMode && this.updatePageController(), 
                    t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject);
                }
            }
        }, {
            key: "__mouseUp",
            value: function() {
                if (this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp), 
                this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), ScrollPane.draggingPane == this && (ScrollPane.draggingPane = null), 
                ScrollPane._gestureFlag = 0, !this._dragged || !this._touchEffect) return this._dragged = !1, 
                void (this._maskContainer.mouseEnabled = !0);
                this._dragged = !1, this._maskContainer.mouseEnabled = !0, this._tweenStart.setTo(this._container.x, this._container.y), 
                ScrollPane.sEndPos.setTo(this._tweenStart.x, this._tweenStart.y);
                var e = !1;
                if (this._container.x > 0 ? (ScrollPane.sEndPos.x = 0, e = !0) : this._container.x < -this._overlapSize.x && (ScrollPane.sEndPos.x = -this._overlapSize.x, 
                e = !0), this._container.y > 0 ? (ScrollPane.sEndPos.y = 0, e = !0) : this._container.y < -this._overlapSize.y && (ScrollPane.sEndPos.y = -this._overlapSize.y, 
                e = !0), e) {
                    if (this._tweenChange.setTo(ScrollPane.sEndPos.x - this._tweenStart.x, ScrollPane.sEndPos.y - this._tweenStart.y), 
                    this._tweenChange.x < -t.UIConfig.touchDragSensitivity || this._tweenChange.y < -t.UIConfig.touchDragSensitivity ? (this._refreshEventDispatching = !0, 
                    t.Events.dispatch(t.Events.PULL_DOWN_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1) : (this._tweenChange.x > t.UIConfig.touchDragSensitivity || this._tweenChange.y > t.UIConfig.touchDragSensitivity) && (this._refreshEventDispatching = !0, 
                    t.Events.dispatch(t.Events.PULL_UP_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1), 
                    this._headerLockedSize > 0 && 0 == ScrollPane.sEndPos[this._refreshBarAxis]) ScrollPane.sEndPos[this._refreshBarAxis] = this._headerLockedSize, 
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x, this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y; else if (this._footerLockedSize > 0 && ScrollPane.sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                        var i = this._overlapSize[this._refreshBarAxis];
                        0 == i ? i = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : i += this._footerLockedSize, 
                        ScrollPane.sEndPos[this._refreshBarAxis] = -i, this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x, 
                        this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                    }
                    this._tweenDuration.setTo(ScrollPane.TWEEN_TIME_DEFAULT, ScrollPane.TWEEN_TIME_DEFAULT);
                } else {
                    if (this._inertiaDisabled) this._tweenDuration.setTo(ScrollPane.TWEEN_TIME_DEFAULT, ScrollPane.TWEEN_TIME_DEFAULT); else {
                        var s = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, n = (Laya.timer.currTimer / 1e3 - this._lastMoveTime) * s - 1;
                        if (n > 1) {
                            var a = Math.pow(.833, n);
                            this._velocity.x = this._velocity.x * a, this._velocity.y = this._velocity.y * a;
                        }
                        this.updateTargetAndDuration(this._tweenStart, ScrollPane.sEndPos);
                    }
                    if (ScrollPane.sOldChange.setTo(ScrollPane.sEndPos.x - this._tweenStart.x, ScrollPane.sEndPos.y - this._tweenStart.y), 
                    this.loopCheckingTarget(ScrollPane.sEndPos), (this._pageMode || this._snapToItem) && this.alignPosition(ScrollPane.sEndPos, !0), 
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x, this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y, 
                    0 == this._tweenChange.x && 0 == this._tweenChange.y) return void this.updateScrollBarVisible();
                    (this._pageMode || this._snapToItem) && (this.fixDuration("x", ScrollPane.sOldChange.x), 
                    this.fixDuration("y", ScrollPane.sOldChange.y));
                }
                this.startTween(2);
            }
        }, {
            key: "__click",
            value: function() {
                this._dragged = !1;
            }
        }, {
            key: "__mouseWheel",
            value: function(t) {
                if (this._mouseWheelEnabled) {
                    var e = t.delta;
                    e = e > 0 ? -1 : e < 0 ? 1 : 0, this._overlapSize.x > 0 && 0 == this._overlapSize.y ? this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * e, !1) : this.setPosX(this._xPos + this._mouseWheelStep * e, !1) : this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * e, !1) : this.setPosY(this._yPos + this._mouseWheelStep * e, !1);
                }
            }
        }, {
            key: "updateScrollBarPos",
            value: function() {
                null != this._vtScrollBar && this._vtScrollBar.setScrollPerc(0 == this._overlapSize.y ? 0 : t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y), 
                null != this._hzScrollBar && this._hzScrollBar.setScrollPerc(0 == this._overlapSize.x ? 0 : t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x), 
                this.checkRefreshBar();
            }
        }, {
            key: "updateScrollBarVisible",
            value: function() {
                this._vtScrollBar && (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone ? this._vtScrollBar.displayObject.visible = !1 : this.updateScrollBarVisible2(this._vtScrollBar)), 
                this._hzScrollBar && (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone ? this._hzScrollBar.displayObject.visible = !1 : this.updateScrollBarVisible2(this._hzScrollBar));
            }
        }, {
            key: "updateScrollBarVisible2",
            value: function(e) {
                this._scrollBarDisplayAuto && t.GTween.kill(e, !1, "alpha"), !this._scrollBarDisplayAuto || 0 != this._tweening || this._dragged || e.gripDragging ? (e.alpha = 1, 
                e.displayObject.visible = !0) : e.displayObject.visible && t.GTween.to(1, 0, .5).setDelay(.5).onComplete(this.__barTweenComplete, this).setTarget(e, "alpha");
            }
        }, {
            key: "__barTweenComplete",
            value: function(t) {
                var e = t.target;
                e.alpha = 1, e.displayObject.visible = !1;
            }
        }, {
            key: "getLoopPartSize",
            value: function(t, e) {
                return (this._contentSize[e] + ("x" == e ? this._owner.columnGap : this._owner.lineGap)) / t;
            }
        }, {
            key: "loopCheckingCurrent",
            value: function() {
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
            value: function(t) {
                1 == this._loop && this.loopCheckingTarget2(t, "x"), 2 == this._loop && this.loopCheckingTarget2(t, "y");
            }
        }, {
            key: "loopCheckingTarget2",
            value: function(t, e) {
                var i, s;
                t[e] > 0 ? (i = this.getLoopPartSize(2, e), (s = this._tweenStart[e] - i) <= 0 && s >= -this._overlapSize[e] && (t[e] -= i, 
                this._tweenStart[e] = s)) : t[e] < -this._overlapSize[e] && (i = this.getLoopPartSize(2, e), 
                (s = this._tweenStart[e] + i) <= 0 && s >= -this._overlapSize[e] && (t[e] += i, 
                this._tweenStart[e] = s));
            }
        }, {
            key: "loopCheckingNewPos",
            value: function(e, i) {
                if (0 == this._overlapSize[i]) return e;
                var s, n = "x" == i ? this._xPos : this._yPos, a = !1;
                return e < .001 ? (e += this.getLoopPartSize(2, i)) > n && (s = this.getLoopPartSize(6, i), 
                s = Math.ceil((e - n) / s) * s, n = t.ToolSet.clamp(n + s, 0, this._overlapSize[i]), 
                a = !0) : e >= this._overlapSize[i] && (e -= this.getLoopPartSize(2, i)) < n && (s = this.getLoopPartSize(6, i), 
                s = Math.ceil((n - e) / s) * s, n = t.ToolSet.clamp(n - s, 0, this._overlapSize[i]), 
                a = !0), a && ("x" == i ? this._container.x = -Math.floor(n) : this._container.y = -Math.floor(n)), 
                e;
            }
        }, {
            key: "alignPosition",
            value: function(t, e) {
                if (this._pageMode) t.x = this.alignByPage(t.x, "x", e), t.y = this.alignByPage(t.y, "y", e); else if (this._snapToItem) {
                    var i = 0, s = 0;
                    e && (i = t.x - this._containerPos.x, s = t.y - this._containerPos.y);
                    var n = this._owner.getSnappingPositionWithDir(-t.x, -t.y, i, s, ScrollPane.sHelperPoint);
                    t.x < 0 && t.x > -this._overlapSize.x && (t.x = -n.x), t.y < 0 && t.y > -this._overlapSize.y && (t.y = -n.y);
                }
            }
        }, {
            key: "alignByPage",
            value: function(e, i, s) {
                var n;
                if (e > 0) n = 0; else if (e < -this._overlapSize[i]) n = Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1; else {
                    n = Math.floor(-e / this._pageSize[i]);
                    var a = s ? e - this._containerPos[i] : e - this._container[i], o = Math.min(this._pageSize[i], this._contentSize[i] - (n + 1) * this._pageSize[i]), r = -e - n * this._pageSize[i];
                    Math.abs(a) > this._pageSize[i] ? r > .5 * o && n++ : r > o * (a < 0 ? t.UIConfig.defaultScrollPagingThreshold : 1 - t.UIConfig.defaultScrollPagingThreshold) && n++, 
                    (e = -n * this._pageSize[i]) < -this._overlapSize[i] && (e = -this._overlapSize[i]);
                }
                if (s) {
                    var l, h = this._tweenStart[i];
                    l = h > 0 ? 0 : h < -this._overlapSize[i] ? Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1 : Math.floor(-h / this._pageSize[i]);
                    var u = Math.floor(-this._containerPos[i] / this._pageSize[i]);
                    Math.abs(n - u) > 1 && Math.abs(l - u) <= 1 && (e = -(n = n > u ? u + 1 : u - 1) * this._pageSize[i]);
                }
                return e;
            }
        }, {
            key: "updateTargetAndDuration",
            value: function(t, e) {
                e.x = this.updateTargetAndDuration2(t.x, "x"), e.y = this.updateTargetAndDuration2(t.y, "y");
            }
        }, {
            key: "updateTargetAndDuration2",
            value: function(t, e) {
                var i = this._velocity[e], s = 0;
                if (t > 0) t = 0; else if (t < -this._overlapSize[e]) t = -this._overlapSize[e]; else {
                    var n = Math.abs(i) * this._velocityScale;
                    Laya.Browser.onMobile && (n *= 1136 / Math.max(Laya.stage.width, Laya.stage.height));
                    var a = 0;
                    if (this._pageMode || !Laya.Browser.onMobile ? n > 500 && (a = Math.pow((n - 500) / 500, 2)) : n > 1e3 && (a = Math.pow((n - 1e3) / 1e3, 2)), 
                    0 != a) a > 1 && (a = 1), n *= a, i *= a, this._velocity[e] = i, s = Math.log(60 / n) / Math.log(this._decelerationRate) / 60, 
                    t += Math.floor(i * s * .4);
                }
                return s < ScrollPane.TWEEN_TIME_DEFAULT && (s = ScrollPane.TWEEN_TIME_DEFAULT), 
                this._tweenDuration[e] = s, t;
            }
        }, {
            key: "fixDuration",
            value: function(t, e) {
                if (!(0 == this._tweenChange[t] || Math.abs(this._tweenChange[t]) >= Math.abs(e))) {
                    var i = Math.abs(this._tweenChange[t] / e) * this._tweenDuration[t];
                    i < ScrollPane.TWEEN_TIME_DEFAULT && (i = ScrollPane.TWEEN_TIME_DEFAULT), this._tweenDuration[t] = i;
                }
            }
        }, {
            key: "startTween",
            value: function(t) {
                this._tweenTime.setTo(0, 0), this._tweening = t, Laya.timer.frameLoop(1, this, this.tweenUpdate), 
                this.updateScrollBarVisible();
            }
        }, {
            key: "killTween",
            value: function() {
                1 == this._tweening && (this._container.pos(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y), 
                t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject)), this._tweening = 0, 
                Laya.timer.clear(this, this.tweenUpdate), this.updateScrollBarVisible(), t.Events.dispatch(t.Events.SCROLL_END, this._owner.displayObject);
            }
        }, {
            key: "checkRefreshBar",
            value: function() {
                if (null != this._header || null != this._footer) {
                    var t = this._container[this._refreshBarAxis];
                    if (null != this._header) if (t > 0) {
                        null == this._header.displayObject.parent && this._maskContainer.addChildAt(this._header.displayObject, 0);
                        var e = ScrollPane.sHelperPoint;
                        e.setTo(this._header.width, this._header.height), e[this._refreshBarAxis] = t, this._header.setSize(e.x, e.y);
                    } else null != this._header.displayObject.parent && this._maskContainer.removeChild(this._header.displayObject);
                    if (null != this._footer) {
                        var i = this._overlapSize[this._refreshBarAxis];
                        t < -i || 0 == i && this._footerLockedSize > 0 ? (null == this._footer.displayObject.parent && this._maskContainer.addChildAt(this._footer.displayObject, 0), 
                        (e = ScrollPane.sHelperPoint).setTo(this._footer.x, this._footer.y), e[this._refreshBarAxis] = i > 0 ? t + this._contentSize[this._refreshBarAxis] : Math.max(Math.min(t + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]), 
                        this._footer.setXY(e.x, e.y), e.setTo(this._footer.width, this._footer.height), 
                        e[this._refreshBarAxis] = i > 0 ? -i - t : this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis], 
                        this._footer.setSize(e.x, e.y)) : null != this._footer.displayObject.parent && this._maskContainer.removeChild(this._footer.displayObject);
                    }
                }
            }
        }, {
            key: "tweenUpdate",
            value: function() {
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
            value: function(t) {
                var e;
                if (0 != this._tweenChange[t]) {
                    if (this._tweenTime[t] += Laya.timer.delta / 1e3, this._tweenTime[t] >= this._tweenDuration[t]) e = this._tweenStart[t] + this._tweenChange[t], 
                    this._tweenChange[t] = 0; else {
                        var i = ScrollPane.easeFunc(this._tweenTime[t], this._tweenDuration[t]);
                        e = this._tweenStart[t] + Math.floor(this._tweenChange[t] * i);
                    }
                    var s = 0, n = -this._overlapSize[t];
                    if (this._headerLockedSize > 0 && this._refreshBarAxis == t && (s = this._headerLockedSize), 
                    this._footerLockedSize > 0 && this._refreshBarAxis == t) {
                        var a = this._overlapSize[this._refreshBarAxis];
                        0 == a ? a = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : a += this._footerLockedSize, 
                        n = -a;
                    }
                    2 == this._tweening && this._bouncebackEffect ? e > 20 + s && this._tweenChange[t] > 0 || e > s && 0 == this._tweenChange[t] ? (this._tweenTime[t] = 0, 
                    this._tweenDuration[t] = ScrollPane.TWEEN_TIME_DEFAULT, this._tweenChange[t] = -e + s, 
                    this._tweenStart[t] = e) : (e < n - 20 && this._tweenChange[t] < 0 || e < n && 0 == this._tweenChange[t]) && (this._tweenTime[t] = 0, 
                    this._tweenDuration[t] = ScrollPane.TWEEN_TIME_DEFAULT, this._tweenChange[t] = n - e, 
                    this._tweenStart[t] = e) : e > s ? (e = s, this._tweenChange[t] = 0) : e < n && (e = n, 
                    this._tweenChange[t] = 0);
                } else e = this._container[t];
                return e;
            }
        }, {
            key: "owner",
            get: function() {
                return this._owner;
            }
        }, {
            key: "hzScrollBar",
            get: function() {
                return this._hzScrollBar;
            }
        }, {
            key: "vtScrollBar",
            get: function() {
                return this._vtScrollBar;
            }
        }, {
            key: "header",
            get: function() {
                return this._header;
            }
        }, {
            key: "footer",
            get: function() {
                return this._footer;
            }
        }, {
            key: "bouncebackEffect",
            get: function() {
                return this._bouncebackEffect;
            },
            set: function(t) {
                this._bouncebackEffect = t;
            }
        }, {
            key: "touchEffect",
            get: function() {
                return this._touchEffect;
            },
            set: function(t) {
                this._touchEffect = t;
            }
        }, {
            key: "scrollStep",
            set: function(e) {
                this._scrollStep = e, 0 == this._scrollStep && (this._scrollStep = t.UIConfig.defaultScrollStep), 
                this._mouseWheelStep = 2 * this._scrollStep;
            },
            get: function() {
                return this._scrollStep;
            }
        }, {
            key: "snapToItem",
            get: function() {
                return this._snapToItem;
            },
            set: function(t) {
                this._snapToItem = t;
            }
        }, {
            key: "mouseWheelEnabled",
            get: function() {
                return this._mouseWheelEnabled;
            },
            set: function(t) {
                this._mouseWheelEnabled = t;
            }
        }, {
            key: "decelerationRate",
            get: function() {
                return this._decelerationRate;
            },
            set: function(t) {
                this._decelerationRate = t;
            }
        }, {
            key: "isDragged",
            get: function() {
                return this._dragged;
            }
        }, {
            key: "percX",
            get: function() {
                return 0 == this._overlapSize.x ? 0 : this._xPos / this._overlapSize.x;
            },
            set: function(t) {
                this.setPercX(t, !1);
            }
        }, {
            key: "percY",
            get: function() {
                return 0 == this._overlapSize.y ? 0 : this._yPos / this._overlapSize.y;
            },
            set: function(t) {
                this.setPercY(t, !1);
            }
        }, {
            key: "posX",
            get: function() {
                return this._xPos;
            },
            set: function(t) {
                this.setPosX(t, !1);
            }
        }, {
            key: "posY",
            get: function() {
                return this._yPos;
            },
            set: function(t) {
                this.setPosY(t, !1);
            }
        }, {
            key: "contentWidth",
            get: function() {
                return this._contentSize.x;
            }
        }, {
            key: "contentHeight",
            get: function() {
                return this._contentSize.y;
            }
        }, {
            key: "viewWidth",
            get: function() {
                return this._viewSize.x;
            },
            set: function(t) {
                t = t + this._owner.margin.left + this._owner.margin.right, null == this._vtScrollBar || this._floating || (t += this._vtScrollBar.width), 
                this._owner.width = t;
            }
        }, {
            key: "viewHeight",
            get: function() {
                return this._viewSize.y;
            },
            set: function(t) {
                t = t + this._owner.margin.top + this._owner.margin.bottom, null == this._hzScrollBar || this._floating || (t += this._hzScrollBar.height), 
                this._owner.height = t;
            }
        }, {
            key: "currentPageX",
            get: function() {
                if (!this._pageMode) return 0;
                var t = Math.floor(this._xPos / this._pageSize.x);
                return this._xPos - t * this._pageSize.x > .5 * this._pageSize.x && t++, t;
            },
            set: function(t) {
                this.setCurrentPageX(t, !1);
            }
        }, {
            key: "currentPageY",
            get: function() {
                if (!this._pageMode) return 0;
                var t = Math.floor(this._yPos / this._pageSize.y);
                return this._yPos - t * this._pageSize.y > .5 * this._pageSize.y && t++, t;
            },
            set: function(t) {
                this.setCurrentPageY(t, !1);
            }
        }, {
            key: "isBottomMost",
            get: function() {
                return this._yPos == this._overlapSize.y || 0 == this._overlapSize.y;
            }
        }, {
            key: "isRightMost",
            get: function() {
                return this._xPos == this._overlapSize.x || 0 == this._overlapSize.x;
            }
        }, {
            key: "pageController",
            get: function() {
                return this._pageController;
            },
            set: function(t) {
                this._pageController = t;
            }
        }, {
            key: "scrollingPosX",
            get: function() {
                return t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
            }
        }, {
            key: "scrollingPosY",
            get: function() {
                return t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
            }
        } ], [ {
            key: "easeFunc",
            value: function(t, e) {
                return (t = t / e - 1) * t * t + 1;
            }
        } ]), ScrollPane;
    }();
    e._gestureFlag = 0, e.sHelperPoint = new Laya.Point(), e.sHelperRect = new Laya.Rectangle(), 
    e.sEndPos = new Laya.Point(), e.sOldChange = new Laya.Point(), e.TWEEN_TIME_GO = .5, 
    e.TWEEN_TIME_DEFAULT = .3, e.PULL_RATIO = .5, t.ScrollPane = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function Transition(t) {
            _classCallCheck(this, Transition), this._owner = t, this._items = new Array(), this._totalDuration = 0, 
            this._autoPlayTimes = 1, this._autoPlayDelay = 0, this._timeScale = 1, this._startTime = 0, 
            this._endTime = 0;
        }
        return _createClass(Transition, [ {
            key: "play",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                this._play(t, e, i, s, n, !1);
            }
        }, {
            key: "playReverse",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], 
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0), i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                this._play(t, 1, e, i, s, !0);
            }
        }, {
            key: "changePlayTimes",
            value: function(t) {
                this._totalTimes = t;
            }
        }, {
            key: "setAutoPlay",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                this._autoPlay != t && (this._autoPlay = t, this._autoPlayTimes = e, this._autoPlayDelay = i, 
                this._autoPlay ? this._owner.onStage && this.play(null, null, this._autoPlayTimes, this._autoPlayDelay) : this._owner.onStage || this.stop(!1, !0));
            }
        }, {
            key: "_play",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                this.stop(!0, !0), this._totalTimes = s, this._reversed = r, this._startTime = a, 
                this._endTime = o, this._playing = !0, this._paused = !1, this._onComplete = e;
                for (var l = this._items.length, h = 0; h < l; h++) {
                    var u = this._items[h];
                    if (null == u.target ? u.targetId ? u.target = this._owner.getChildById(u.targetId) : u.target = this._owner : u.target != this._owner && u.target.parent != this._owner && (u.target = null), 
                    null != u.target && u.type == i.Transition) {
                        var _ = u.target.getTransition(u.value.transName);
                        if (_ == this && (_ = null), null != _) if (0 == u.value.playTimes) {
                            var c;
                            for (c = h - 1; c >= 0; c--) {
                                var d = this._items[c];
                                if (d.type == i.Transition && d.value.trans == _) {
                                    d.value.stopTime = u.time - d.time;
                                    break;
                                }
                            }
                            c < 0 ? u.value.stopTime = 0 : _ = null;
                        } else u.value.stopTime = -1;
                        u.value.trans = _;
                    }
                }
                0 == n ? this.onDelayedPlay() : t.GTween.delayedCall(n).onComplete(this.onDelayedPlay, this);
            }
        }, {
            key: "stop",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this._playing) {
                    this._playing = !1, this._totalTasks = 0, this._totalTimes = 0;
                    var s = this._onComplete;
                    this._onComplete = null, t.GTween.kill(this);
                    var n = this._items.length;
                    if (this._reversed) for (var a = n - 1; a >= 0; a--) {
                        var o = this._items[a];
                        null != o.target && this.stopItem(o, e);
                    } else for (a = 0; a < n; a++) null != (o = this._items[a]).target && this.stopItem(o, e);
                    i && null != s && s.run();
                }
            }
        }, {
            key: "stopItem",
            value: function(t, e) {
                if (0 != t.displayLockToken && (t.target.releaseDisplayLock(t.displayLockToken), 
                t.displayLockToken = 0), null != t.tweener && (t.tweener.kill(e), t.tweener = null, 
                t.type != i.Shake || e || (t.target._gearLocked = !0, t.target.setXY(t.target.x - t.value.lastOffsetX, t.target.y - t.value.lastOffsetY), 
                t.target._gearLocked = !1)), t.type == i.Transition) {
                    var s = t.value.trans;
                    null != s && s.stop(e, !1);
                }
            }
        }, {
            key: "setPaused",
            value: function(e) {
                if (this._playing && this._paused != e) {
                    this._paused = e;
                    var s = t.GTween.getTween(this);
                    null != s && s.setPaused(e);
                    for (var n = this._items.length, a = 0; a < n; a++) {
                        var o = this._items[a];
                        null != o.target && (o.type == i.Transition ? null != o.value.trans && o.value.trans.setPaused(e) : o.type == i.Animation && (e ? (o.value.flag = o.target.getProp(t.ObjectPropID.Playing), 
                        o.target.setProp(t.ObjectPropID.Playing, !1)) : o.target.setProp(t.ObjectPropID.Playing, o.value.flag)), 
                        null != o.tweener && o.tweener.setPaused(e));
                    }
                }
            }
        }, {
            key: "dispose",
            value: function() {
                this._playing && t.GTween.kill(this);
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    null != s.tweener && (s.tweener.kill(), s.tweener = null), s.target = null, s.hook = null, 
                    null != s.tweenConfig && (s.tweenConfig.endHook = null);
                }
                this._items.length = 0, this._playing = !1, this._onComplete = null;
            }
        }, {
            key: "setValue",
            value: function(t) {
                for (var e, s = this._items.length, n = !1, a = 0; a < s; a++) {
                    var o = this._items[a];
                    if (o.label == t) e = null != o.tweenConfig ? o.tweenConfig.startValue : o.value, 
                    n = !0; else {
                        if (null == o.tweenConfig || o.tweenConfig.endLabel != t) continue;
                        e = o.tweenConfig.endValue, n = !0;
                    }
                    switch (o.type) {
                      case i.XY:
                      case i.Size:
                      case i.Pivot:
                      case i.Scale:
                      case i.Skew:
                        e.b1 = !0, e.b2 = !0, e.f1 = parseFloat(arguments.length <= 1 ? void 0 : arguments[1]), 
                        e.f2 = parseFloat(arguments.length <= 2 ? void 0 : arguments[2]);
                        break;

                      case i.Alpha:
                      case i.Rotation:
                      case i.Color:
                        e.f1 = parseFloat(arguments.length <= 1 ? void 0 : arguments[1]);
                        break;

                      case i.Animation:
                        e.frame = parseInt(arguments.length <= 1 ? void 0 : arguments[1]), (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (e.playing = arguments.length <= 2 ? void 0 : arguments[2]);
                        break;

                      case i.Visible:
                        e.visible = arguments.length <= 1 ? void 0 : arguments[1];
                        break;

                      case i.Sound:
                        e.sound = arguments.length <= 1 ? void 0 : arguments[1], (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (e.volume = parseFloat(arguments.length <= 2 ? void 0 : arguments[2]));
                        break;

                      case i.Transition:
                        e.transName = arguments.length <= 1 ? void 0 : arguments[1], (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (e.playTimes = parseInt(arguments.length <= 2 ? void 0 : arguments[2]));
                        break;

                      case i.Shake:
                        e.amplitude = parseFloat(arguments.length <= 1 ? void 0 : arguments[1]), (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (e.duration = parseFloat(arguments.length <= 2 ? void 0 : arguments[2]));
                        break;

                      case i.ColorFilter:
                        e.f1 = parseFloat(arguments.length <= 1 ? void 0 : arguments[1]), e.f2 = parseFloat(arguments.length <= 2 ? void 0 : arguments[2]), 
                        e.f3 = parseFloat(arguments.length <= 3 ? void 0 : arguments[3]), e.f4 = parseFloat(arguments.length <= 4 ? void 0 : arguments[4]);
                        break;

                      case i.Text:
                      case i.Icon:
                        e.text = arguments.length <= 1 ? void 0 : arguments[1];
                    }
                }
                if (!n) throw new Error("this.label not exists");
            }
        }, {
            key: "setHook",
            value: function(t, e) {
                for (var i = this._items.length, s = !1, n = 0; n < i; n++) {
                    var a = this._items[n];
                    if (a.label == t) {
                        a.hook = e, s = !0;
                        break;
                    }
                    if (null != a.tweenConfig && a.tweenConfig.endLabel == t) {
                        a.tweenConfig.endHook = e, s = !0;
                        break;
                    }
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "clearHooks",
            value: function() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    var i = this._items[e];
                    i.hook = null, null != i.tweenConfig && (i.tweenConfig.endHook = null);
                }
            }
        }, {
            key: "setTarget",
            value: function(t, e) {
                for (var i = this._items.length, s = !1, n = 0; n < i; n++) {
                    var a = this._items[n];
                    a.label == t && (a.targetId = e == this._owner || null == e ? "" : e.id, this._playing ? a.targetId.length > 0 ? a.target = this._owner.getChildById(a.targetId) : a.target = this._owner : a.target = null, 
                    s = !0);
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "setDuration",
            value: function(t, e) {
                for (var i = this._items.length, s = !1, n = 0; n < i; n++) {
                    var a = this._items[n];
                    null != a.tweenConfig && a.label == t && (a.tweenConfig.duration = e, s = !0);
                }
                if (!s) throw new Error("this.label not exists");
            }
        }, {
            key: "getLabelTime",
            value: function(t) {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    if (s.label == t) return s.time;
                    if (null != s.tweenConfig && s.tweenConfig.endLabel == t) return s.time + s.tweenConfig.duration;
                }
                return NaN;
            }
        }, {
            key: "updateFromRelations",
            value: function(t, e, s) {
                var n = this._items.length;
                if (0 != n) for (var a = 0; a < n; a++) {
                    var o = this._items[a];
                    o.type == i.XY && o.targetId == t && (null != o.tweenConfig ? (o.tweenConfig.startValue.b3 || (o.tweenConfig.startValue.f1 += e, 
                    o.tweenConfig.startValue.f2 += s), o.tweenConfig.endValue.b3 || (o.tweenConfig.endValue.f1 += e, 
                    o.tweenConfig.endValue.f2 += s)) : o.value.b3 || (o.value.f1 += e, o.value.f2 += s));
                }
            }
        }, {
            key: "onOwnerAddedToStage",
            value: function() {
                this._autoPlay && !this._playing && this.play(null, this._autoPlayTimes, this._autoPlayDelay);
            }
        }, {
            key: "onOwnerRemovedFromStage",
            value: function() {
                0 == (this._options & Transition.OPTION_AUTO_STOP_DISABLED) && this.stop(0 != (this._options & Transition.OPTION_AUTO_STOP_AT_END), !1);
            }
        }, {
            key: "onDelayedPlay",
            value: function() {
                if (this.internalPlay(), this._playing = this._totalTasks > 0, this._playing) {
                    if (0 != (this._options & Transition.OPTION_IGNORE_DISPLAY_CONTROLLER)) for (var t = this._items.length, e = 0; e < t; e++) {
                        var i = this._items[e];
                        null != i.target && i.target != this._owner && (i.displayLockToken = i.target.addDisplayLock());
                    }
                } else if (null != this._onComplete) {
                    var s = this._onComplete;
                    this._onComplete = null, s.run();
                }
            }
        }, {
            key: "internalPlay",
            value: function() {
                this._ownerBaseX = this._owner.x, this._ownerBaseY = this._owner.y, this._totalTasks = 0;
                var t, e = this._items.length, s = !1;
                if (this._reversed) for (n = e - 1; n >= 0; n--) null != (t = this._items[n]).target && this.playItem(t); else for (var n = 0; n < e; n++) null != (t = this._items[n]).target && (t.type == i.Animation && 0 != this._startTime && t.time <= this._startTime ? (s = !0, 
                t.value.flag = !1) : this.playItem(t));
                s && this.skipAnimations();
            }
        }, {
            key: "playItem",
            value: function(e) {
                var s;
                if (null != e.tweenConfig) {
                    if (s = this._reversed ? this._totalDuration - e.time - e.tweenConfig.duration : e.time, 
                    -1 == this._endTime || s <= this._endTime) {
                        var n, a;
                        switch (this._reversed ? (n = e.tweenConfig.endValue, a = e.tweenConfig.startValue) : (n = e.tweenConfig.startValue, 
                        a = e.tweenConfig.endValue), e.value.b1 = n.b1 || a.b1, e.value.b2 = n.b2 || a.b2, 
                        e.type) {
                          case i.XY:
                          case i.Size:
                          case i.Scale:
                          case i.Skew:
                            e.tweener = t.GTween.to2(n.f1, n.f2, a.f1, a.f2, e.tweenConfig.duration);
                            break;

                          case i.Alpha:
                          case i.Rotation:
                            e.tweener = t.GTween.to(n.f1, a.f1, e.tweenConfig.duration);
                            break;

                          case i.Color:
                            e.tweener = t.GTween.toColor(n.f1, a.f1, e.tweenConfig.duration);
                            break;

                          case i.ColorFilter:
                            e.tweener = t.GTween.to4(n.f1, n.f2, n.f3, n.f4, a.f1, a.f2, a.f3, a.f4, e.tweenConfig.duration);
                        }
                        e.tweener.setDelay(s).setEase(e.tweenConfig.easeType).setRepeat(e.tweenConfig.repeat, e.tweenConfig.yoyo).setTimeScale(this._timeScale).setTarget(e).onStart(this.onTweenStart, this).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                        this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - s), this._totalTasks++;
                    }
                } else e.type == i.Shake ? (s = this._reversed ? this._totalDuration - e.time - e.value.duration : e.time, 
                e.value.offsetX = e.value.offsetY = 0, e.value.lastOffsetX = e.value.lastOffsetY = 0, 
                e.tweener = t.GTween.shake(0, 0, e.value.amplitude, e.value.duration).setDelay(s).setTimeScale(this._timeScale).setTarget(e).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - e.time), this._totalTasks++) : (s = this._reversed ? this._totalDuration - e.time : e.time) <= this._startTime ? (this.applyValue(e), 
                this.callHook(e, !1)) : (-1 == this._endTime || s <= this._endTime) && (this._totalTasks++, 
                e.tweener = t.GTween.delayedCall(s).setTimeScale(this._timeScale).setTarget(e).onComplete(this.onDelayedPlayItem, this));
                null != e.tweener && e.tweener.seek(this._startTime);
            }
        }, {
            key: "skipAnimations",
            value: function() {
                for (var e, s, n, a, o, r, l = this._items.length, h = 0; h < l; h++) if (!((r = this._items[h]).type != i.Animation || r.time > this._startTime || (a = r.value).flag)) {
                    e = (o = r.target).getProp(t.ObjectPropID.Frame), s = o.getProp(t.ObjectPropID.Playing) ? 0 : -1, 
                    n = 0;
                    for (var u = h; u < l; u++) (r = this._items[u]).type != i.Animation || r.target != o || r.time > this._startTime || ((a = r.value).flag = !0, 
                    -1 != a.frame ? (e = a.frame, s = a.playing ? r.time : -1, n = 0) : a.playing ? s < 0 && (s = r.time) : (s >= 0 && (n += r.time - s), 
                    s = -1), this.callHook(r, !1));
                    s >= 0 && (n += this._startTime - s), o.setProp(t.ObjectPropID.Playing, s >= 0), 
                    o.setProp(t.ObjectPropID.Frame, e), n > 0 && o.setProp(t.ObjectPropID.DeltaTime, 1e3 * n);
                }
            }
        }, {
            key: "onDelayedPlayItem",
            value: function(t) {
                var e = t.target;
                e.tweener = null, this._totalTasks--, this.applyValue(e), this.callHook(e, !1), 
                this.checkAllComplete();
            }
        }, {
            key: "onTweenStart",
            value: function(t) {
                var e, s, n = t.target;
                n.type != i.XY && n.type != i.Size || (this._reversed ? (e = n.tweenConfig.endValue, 
                s = n.tweenConfig.startValue) : (e = n.tweenConfig.startValue, s = n.tweenConfig.endValue), 
                n.type == i.XY ? n.target != this._owner ? (e.b1 ? e.b3 && (t.startValue.x = e.f1 * this._owner.width) : t.startValue.x = n.target.x, 
                e.b2 ? e.b3 && (t.startValue.y = e.f2 * this._owner.height) : t.startValue.y = n.target.y, 
                s.b1 ? s.b3 && (t.endValue.x = s.f1 * this._owner.width) : t.endValue.x = t.startValue.x, 
                s.b2 ? s.b3 && (t.endValue.y = s.f2 * this._owner.height) : t.endValue.y = t.startValue.y) : (e.b1 || (t.startValue.x = n.target.x - this._ownerBaseX), 
                e.b2 || (t.startValue.y = n.target.y - this._ownerBaseY), s.b1 || (t.endValue.x = t.startValue.x), 
                s.b2 || (t.endValue.y = t.startValue.y)) : (e.b1 || (t.startValue.x = n.target.width), 
                e.b2 || (t.startValue.y = n.target.height), s.b1 || (t.endValue.x = t.startValue.x), 
                s.b2 || (t.endValue.y = t.startValue.y)), n.tweenConfig.path && (n.value.b1 = n.value.b2 = !0, 
                t.setPath(n.tweenConfig.path)));
                this.callHook(n, !1);
            }
        }, {
            key: "onTweenUpdate",
            value: function(t) {
                var e = t.target;
                switch (e.type) {
                  case i.XY:
                  case i.Size:
                  case i.Scale:
                  case i.Skew:
                    e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.tweenConfig.path && (e.value.f1 += t.startValue.x, 
                    e.value.f2 += t.startValue.y);
                    break;

                  case i.Alpha:
                  case i.Rotation:
                    e.value.f1 = t.value.x;
                    break;

                  case i.Color:
                    e.value.f1 = t.value.color;
                    break;

                  case i.ColorFilter:
                    e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.value.f3 = t.value.z, e.value.f4 = t.value.w;
                    break;

                  case i.Shake:
                    e.value.offsetX = t.deltaValue.x, e.value.offsetY = t.deltaValue.y;
                }
                this.applyValue(e);
            }
        }, {
            key: "onTweenComplete",
            value: function(t) {
                var e = t.target;
                e.tweener = null, this._totalTasks--, t.allCompleted && this.callHook(e, !0), this.checkAllComplete();
            }
        }, {
            key: "onPlayTransCompleted",
            value: function(t) {
                this._totalTasks--, this.checkAllComplete();
            }
        }, {
            key: "callHook",
            value: function(t, e) {
                e ? null != t.tweenConfig && null != t.tweenConfig.endHook && t.tweenConfig.endHook.run() : t.time >= this._startTime && null != t.hook && t.hook.run();
            }
        }, {
            key: "checkAllComplete",
            value: function() {
                if (this._playing && 0 == this._totalTasks) if (this._totalTimes < 0) this.internalPlay(); else if (this._totalTimes--, 
                this._totalTimes > 0) this.internalPlay(); else {
                    this._playing = !1;
                    for (var t = this._items.length, e = 0; e < t; e++) {
                        var i = this._items[e];
                        null != i.target && 0 != i.displayLockToken && (i.target.releaseDisplayLock(i.displayLockToken), 
                        i.displayLockToken = 0);
                    }
                    if (null != this._onComplete) {
                        var s = this._onComplete;
                        this._onComplete = null, s.run();
                    }
                }
            }
        }, {
            key: "applyValue",
            value: function(e) {
                e.target._gearLocked = !0;
                var s = e.value;
                switch (e.type) {
                  case i.XY:
                    e.target == this._owner ? s.b1 && s.b2 ? e.target.setXY(s.f1 + this._ownerBaseX, s.f2 + this._ownerBaseY) : s.b1 ? e.target.x = s.f1 + this._ownerBaseX : e.target.y = s.f2 + this._ownerBaseY : s.b3 ? s.b1 && s.b2 ? e.target.setXY(s.f1 * this._owner.width, s.f2 * this._owner.height) : s.b1 ? e.target.x = s.f1 * this._owner.width : s.b2 && (e.target.y = s.f2 * this._owner.height) : s.b1 && s.b2 ? e.target.setXY(s.f1, s.f2) : s.b1 ? e.target.x = s.f1 : s.b2 && (e.target.y = s.f2);
                    break;

                  case i.Size:
                    s.b1 || (s.f1 = e.target.width), s.b2 || (s.f2 = e.target.height), e.target.setSize(s.f1, s.f2);
                    break;

                  case i.Pivot:
                    e.target.setPivot(s.f1, s.f2, e.target.pivotAsAnchor);
                    break;

                  case i.Alpha:
                    e.target.alpha = s.f1;
                    break;

                  case i.Rotation:
                    e.target.rotation = s.f1;
                    break;

                  case i.Scale:
                    e.target.setScale(s.f1, s.f2);
                    break;

                  case i.Skew:
                    e.target.setSkew(s.f1, s.f2);
                    break;

                  case i.Color:
                    e.target.setProp(t.ObjectPropID.Color, t.ToolSet.convertToHtmlColor(s.f1, !1));
                    break;

                  case i.Animation:
                    s.frame >= 0 && e.target.setProp(t.ObjectPropID.Frame, s.frame), e.target.setProp(t.ObjectPropID.Playing, s.playing), 
                    e.target.setProp(t.ObjectPropID.TimeScale, this._timeScale);
                    break;

                  case i.Visible:
                    e.target.visible = s.visible;
                    break;

                  case i.Transition:
                    if (this._playing) {
                        var n = s.trans;
                        if (null != n) {
                            this._totalTasks++;
                            var a = this._startTime > e.time ? this._startTime - e.time : 0, o = this._endTime >= 0 ? this._endTime - e.time : -1;
                            s.stopTime >= 0 && (o < 0 || o > s.stopTime) && (o = s.stopTime), n.timeScale = this._timeScale, 
                            n._play(Laya.Handler.create(this, this.onPlayTransCompleted, [ e ]), s.playTimes, 0, a, o, this._reversed);
                        }
                    }
                    break;

                  case i.Sound:
                    if (this._playing && e.time >= this._startTime) {
                        if (null == s.audioClip) {
                            var r = t.UIPackage.getItemByURL(s.sound);
                            s.audioClip = r ? r.file : s.sound;
                        }
                        s.audioClip && t.GRoot.inst.playOneShotSound(s.audioClip, s.volume);
                    }
                    break;

                  case i.Shake:
                    e.target.setXY(e.target.x - s.lastOffsetX + s.offsetX, e.target.y - s.lastOffsetY + s.offsetY), 
                    s.lastOffsetX = s.offsetX, s.lastOffsetY = s.offsetY;
                    break;

                  case i.ColorFilter:
                    t.ToolSet.setColorFilter(e.target.displayObject, [ s.f1, s.f2, s.f3, s.f4 ]);
                    break;

                  case i.Text:
                    e.target.text = s.text;
                    break;

                  case i.Icon:
                    e.target.icon = s.text;
                }
                e.target._gearLocked = !1;
            }
        }, {
            key: "setup",
            value: function(e) {
                this.name = e.readS(), this._options = e.getInt32(), this._autoPlay = e.readBool(), 
                this._autoPlayTimes = e.getInt32(), this._autoPlayDelay = e.getFloat32();
                for (var i = e.getInt16(), a = 0; a < i; a++) {
                    var o = e.getInt16(), r = e.pos;
                    e.seek(r, 0);
                    var l = new s(e.readByte());
                    this._items[a] = l, l.time = e.getFloat32();
                    var h = e.getInt16();
                    if (l.targetId = h < 0 ? "" : this._owner.getChildAt(h).id, l.label = e.readS(), 
                    e.readBool()) {
                        if (e.seek(r, 1), l.tweenConfig = new n(), l.tweenConfig.duration = e.getFloat32(), 
                        l.time + l.tweenConfig.duration > this._totalDuration && (this._totalDuration = l.time + l.tweenConfig.duration), 
                        l.tweenConfig.easeType = e.readByte(), l.tweenConfig.repeat = e.getInt32(), l.tweenConfig.yoyo = e.readBool(), 
                        l.tweenConfig.endLabel = e.readS(), e.seek(r, 2), this.decodeValue(l, e, l.tweenConfig.startValue), 
                        e.seek(r, 3), this.decodeValue(l, e, l.tweenConfig.endValue), e.version >= 2) {
                            var u = e.getInt32();
                            if (u > 0) {
                                l.tweenConfig.path = new t.GPath();
                                for (var _ = new Array(), c = 0; c < u; c++) {
                                    var d = e.getUint8();
                                    switch (d) {
                                      case t.CurveType.Bezier:
                                        _.push(t.GPathPoint.newBezierPoint(e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32()));
                                        break;

                                      case t.CurveType.CubicBezier:
                                        _.push(t.GPathPoint.newCubicBezierPoint(e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32()));
                                        break;

                                      default:
                                        _.push(t.GPathPoint.newPoint(e.getFloat32(), e.getFloat32(), d));
                                    }
                                }
                                l.tweenConfig.path.create(_);
                            }
                        }
                    } else l.time > this._totalDuration && (this._totalDuration = l.time), e.seek(r, 2), 
                    this.decodeValue(l, e, l.value);
                    e.pos = r + o;
                }
            }
        }, {
            key: "decodeValue",
            value: function(t, e, s) {
                switch (t.type) {
                  case i.XY:
                  case i.Size:
                  case i.Pivot:
                  case i.Skew:
                    s.b1 = e.readBool(), s.b2 = e.readBool(), s.f1 = e.getFloat32(), s.f2 = e.getFloat32(), 
                    e.version >= 2 && t.type == i.XY && (s.b3 = e.readBool());
                    break;

                  case i.Alpha:
                  case i.Rotation:
                    s.f1 = e.getFloat32();
                    break;

                  case i.Scale:
                    s.f1 = e.getFloat32(), s.f2 = e.getFloat32();
                    break;

                  case i.Color:
                    s.f1 = e.readColor();
                    break;

                  case i.Animation:
                    s.playing = e.readBool(), s.frame = e.getInt32();
                    break;

                  case i.Visible:
                    s.visible = e.readBool();
                    break;

                  case i.Sound:
                    s.sound = e.readS(), s.volume = e.getFloat32();
                    break;

                  case i.Transition:
                    s.transName = e.readS(), s.playTimes = e.getInt32();
                    break;

                  case i.Shake:
                    s.amplitude = e.getFloat32(), s.duration = e.getFloat32();
                    break;

                  case i.ColorFilter:
                    s.f1 = e.getFloat32(), s.f2 = e.getFloat32(), s.f3 = e.getFloat32(), s.f4 = e.getFloat32();
                    break;

                  case i.Text:
                  case i.Icon:
                    s.text = e.readS();
                }
            }
        }, {
            key: "playing",
            get: function() {
                return this._playing;
            }
        }, {
            key: "timeScale",
            get: function() {
                return this._timeScale;
            },
            set: function(e) {
                if (this._timeScale != e && (this._timeScale = e, this._playing)) for (var s = this._items.length, n = 0; n < s; n++) {
                    var a = this._items[n];
                    null != a.tweener ? a.tweener.setTimeScale(e) : a.type == i.Transition ? null != a.value.trans && (a.value.trans.timeScale = e) : a.type == i.Animation && null != a.target && a.target.setProp(t.ObjectPropID.TimeScale, e);
                }
            }
        } ]), Transition;
    }();
    e.OPTION_IGNORE_DISPLAY_CONTROLLER = 1, e.OPTION_AUTO_STOP_DISABLED = 2, e.OPTION_AUTO_STOP_AT_END = 4, 
    t.Transition = e;
    var i = function TransitionActionType() {
        _classCallCheck(this, TransitionActionType);
    };
    i.XY = 0, i.Size = 1, i.Scale = 2, i.Pivot = 3, i.Alpha = 4, i.Rotation = 5, i.Color = 6, 
    i.Animation = 7, i.Visible = 8, i.Sound = 9, i.Transition = 10, i.Shake = 11, i.ColorFilter = 12, 
    i.Skew = 13, i.Text = 14, i.Icon = 15, i.Unknown = 16;
    var s = function TransitionItem(t) {
        switch (_classCallCheck(this, TransitionItem), this.type = t, t) {
          case i.XY:
          case i.Size:
          case i.Scale:
          case i.Pivot:
          case i.Skew:
          case i.Alpha:
          case i.Rotation:
          case i.Color:
          case i.ColorFilter:
            this.value = new _();
            break;

          case i.Animation:
            this.value = new o();
            break;

          case i.Shake:
            this.value = new h();
            break;

          case i.Sound:
            this.value = new r();
            break;

          case i.Transition:
            this.value = new l();
            break;

          case i.Visible:
            this.value = new a();
            break;

          case i.Text:
          case i.Icon:
            this.value = new u();
        }
    }, n = function TweenConfig() {
        _classCallCheck(this, TweenConfig), this.easeType = t.EaseType.QuadOut, this.startValue = new _(), 
        this.endValue = new _();
    }, a = function TValue_Visible() {
        _classCallCheck(this, TValue_Visible);
    }, o = function TValue_Animation() {
        _classCallCheck(this, TValue_Animation);
    }, r = function TValue_Sound() {
        _classCallCheck(this, TValue_Sound);
    }, l = function TValue_Transition() {
        _classCallCheck(this, TValue_Transition);
    }, h = function TValue_Shake() {
        _classCallCheck(this, TValue_Shake);
    }, u = function TValue_Text() {
        _classCallCheck(this, TValue_Text);
    }, _ = function TValue() {
        _classCallCheck(this, TValue), this.b1 = this.b2 = !0;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function TranslationHelper() {
            _classCallCheck(this, TranslationHelper);
        }
        return _createClass(TranslationHelper, null, [ {
            key: "loadFromXML",
            value: function(t) {
                TranslationHelper.strings = {};
                for (var e = Laya.Utils.parseXMLFromString(t), i = TranslationHelper.findChildNode(e, "resources").childNodes, s = i.length, n = 0; n < s; n++) {
                    var a = i[n];
                    if ("string" == a.nodeName) {
                        var o = a.getAttribute("name"), r = a.textContent, l = o.indexOf("-");
                        if (-1 == l) continue;
                        var h = o.substr(0, l), u = o.substr(l + 1), _ = TranslationHelper.strings[h];
                        _ || (_ = {}, TranslationHelper.strings[h] = _), _[u] = r;
                    }
                }
            }
        }, {
            key: "translateComponent",
            value: function(e) {
                if (null != TranslationHelper.strings) {
                    var i = TranslationHelper.strings[e.owner.id + e.id];
                    if (null != i) {
                        var s, n, a, o, r, l, h, u, _, c = e.rawData;
                        c.seek(0, 2);
                        var d = c.getInt16();
                        for (r = 0; r < d; r++) {
                            h = c.getInt16(), u = c.pos, c.seek(u, 0);
                            var g = c.readByte(), p = g;
                            c.skip(4), s = c.readS(), p == t.ObjectType.Component && c.seek(u, 6) && (p = c.readByte()), 
                            c.seek(u, 1), null != (n = i[s + "-tips"]) && c.writeS(n), c.seek(u, 2);
                            var f = c.getInt16();
                            for (l = 0; l < f; l++) {
                                if (a = c.getInt16(), a += c.pos, 6 == c.readByte()) {
                                    for (c.skip(2), _ = c.getInt16(), v = 0; v < _; v++) null != c.readS() && (null != (n = i[s + "-texts_" + v]) ? c.writeS(n) : c.skip(2));
                                    c.readBool() && null != (n = i[s + "-texts_def"]) && c.writeS(n);
                                }
                                c.pos = a;
                            }
                            if (g == t.ObjectType.Component && c.version >= 2) {
                                c.seek(u, 4), c.skip(2), c.skip(4 * c.getUint16());
                                for (var y = c.getUint16(), v = 0; v < y; v++) {
                                    var m = c.readS();
                                    0 == c.getUint16() && null != (n = i[s + "-cp-" + m]) ? c.writeS(n) : c.skip(2);
                                }
                            }
                            switch (p) {
                              case t.ObjectType.Text:
                              case t.ObjectType.RichText:
                              case t.ObjectType.InputText:
                                null != (n = i[s]) && (c.seek(u, 6), c.writeS(n)), null != (n = i[s + "-prompt"]) && (c.seek(u, 4), 
                                c.writeS(n));
                                break;

                              case t.ObjectType.List:
                              case t.ObjectType.Tree:
                                for (c.seek(u, 8), c.skip(2), o = c.getUint16(), l = 0; l < o; l++) {
                                    if (a = c.getUint16(), a += c.pos, c.skip(2), p == t.ObjectType.Tree && c.skip(2), 
                                    null != (n = i[s + "-" + l]) ? c.writeS(n) : c.skip(2), null != (n = i[s + "-" + l + "-0"]) && c.writeS(n), 
                                    c.version >= 2) {
                                        c.skip(6), c.skip(4 * c.getUint16());
                                        for (y = c.getUint16(), v = 0; v < y; v++) {
                                            m = c.readS();
                                            0 == c.getUint16() && null != (n = i[s + "-" + l + "-" + m]) ? c.writeS(n) : c.skip(2);
                                        }
                                    }
                                    c.pos = a;
                                }
                                break;

                              case t.ObjectType.Label:
                                c.seek(u, 6) && c.readByte() == p && (null != (n = i[s]) ? c.writeS(n) : c.skip(2), 
                                c.skip(2), c.readBool() && c.skip(4), c.skip(4), c.readBool() && null != (n = i[s + "-prompt"]) && c.writeS(n));
                                break;

                              case t.ObjectType.Button:
                                c.seek(u, 6) && c.readByte() == p && (null != (n = i[s]) ? c.writeS(n) : c.skip(2), 
                                null != (n = i[s + "-0"]) && c.writeS(n));
                                break;

                              case t.ObjectType.ComboBox:
                                if (c.seek(u, 6) && c.readByte() == p) {
                                    for (o = c.getInt16(), l = 0; l < o; l++) a = c.getInt16(), a += c.pos, null != (n = i[s + "-" + l]) && c.writeS(n), 
                                    c.pos = a;
                                    null != (n = i[s]) && c.writeS(n);
                                }
                            }
                            c.pos = u + h;
                        }
                    }
                }
            }
        }, {
            key: "findChildNode",
            value: function(t, e) {
                var i = t.childNodes, s = i.length;
                if (s > 0) for (var n = 0; n < s; n++) {
                    var a = i[n];
                    if (a.nodeName == e) return a;
                }
                return null;
            }
        } ]), TranslationHelper;
    }();
    e.strings = null, t.TranslationHelper = e;
}(fgui || (fgui = {})), function(t) {
    var e = function UIConfig() {
        _classCallCheck(this, UIConfig);
    };
    e.defaultFont = "SimSun", e.modalLayerColor = "rgba(33,33,33,0.2)", e.buttonSoundVolumeScale = 1, 
    e.defaultScrollStep = 25, e.defaultScrollDecelerationRate = .967, e.defaultScrollBarDisplay = t.ScrollBarDisplayType.Visible, 
    e.defaultScrollTouchEffect = !0, e.defaultScrollBounceEffect = !0, e.defaultScrollSnappingThreshold = .1, 
    e.defaultScrollPagingThreshold = .3, e.defaultComboBoxVisibleItemCount = 10, e.touchScrollSensitivity = 20, 
    e.touchDragSensitivity = 10, e.clickDragSensitivity = 2, e.bringWindowToFrontOnClick = !0, 
    e.frameTimeForAsyncUIConstruction = 2, e.textureLinearSampling = !0, e.packageFileExtension = "fui", 
    t.UIConfig = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function UIObjectFactory() {
            _classCallCheck(this, UIObjectFactory);
        }
        return _createClass(UIObjectFactory, null, [ {
            key: "setExtension",
            value: function(e, i) {
                if (null == e) throw new Error("Invaild url: " + e);
                var s = t.UIPackage.getItemByURL(e);
                null != s && (s.extensionType = i), UIObjectFactory.packageItemExtensions[e] = i;
            }
        }, {
            key: "setPackageItemExtension",
            value: function(t, e) {
                UIObjectFactory.setExtension(t, e);
            }
        }, {
            key: "setLoaderExtension",
            value: function(t) {
                UIObjectFactory.loaderType = t;
            }
        }, {
            key: "resolvePackageItemExtension",
            value: function(t) {
                var e = UIObjectFactory.packageItemExtensions["ui://" + t.owner.id + t.id];
                e || (e = UIObjectFactory.packageItemExtensions["ui://" + t.owner.name + "/" + t.name]), 
                e && (t.extensionType = e);
            }
        }, {
            key: "newObject",
            value: function(t) {
                return t.extensionType ? new t.extensionType() : UIObjectFactory.newObject2(t.objectType);
            }
        }, {
            key: "newObject2",
            value: function(e) {
                switch (e) {
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
                    return UIObjectFactory.loaderType ? new UIObjectFactory.loaderType() : new t.GLoader();

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

                  default:
                    return null;
                }
            }
        } ]), UIObjectFactory;
    }();
    e.packageItemExtensions = {}, t.UIObjectFactory = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function UIPackage() {
            _classCallCheck(this, UIPackage), this._items = [], this._itemsById = {}, this._itemsByName = {}, 
            this._sprites = {}, this._dependencies = Array(), this._branches = Array(), this._branchIndex = -1;
        }
        return _createClass(UIPackage, [ {
            key: "loadPackage",
            value: function(e) {
                if (1179080009 != e.getUint32()) throw new Error("FairyGUI: old namespace sunnyboxs found in '" + this._resKey + "'");
                e.version = e.getInt32();
                var s = e.readBool();
                if (this._id = e.readUTFString(), this._name = e.readUTFString(), e.skip(20), s) {
                    var n = new Uint8Array(e.buffer, e.pos, e.length - e.pos);
                    n = new Zlib.RawInflate(n).decompress();
                    var a = new t.ByteBuffer(n);
                    a.version = e.version, e = a;
                }
                var o, r, l, h, u, _ = e.version >= 2, c = e.pos;
                e.seek(c, 4), o = e.getInt32();
                var d, g = [];
                for (r = 0; r < o; r++) g[r] = e.readUTFString();
                for (e.stringTable = g, e.seek(c, 0), o = e.getInt16(), r = 0; r < o; r++) this._dependencies.push({
                    id: e.readS(),
                    name: e.readS()
                });
                _ && ((o = e.getInt16()) > 0 && (this._branches = e.readSArray(o), UIPackage._branch && (this._branchIndex = this._branches.indexOf(UIPackage._branch))), 
                u = o > 0), e.seek(c, 1);
                var p = this._resKey + "_";
                for (o = e.getUint16(), r = 0; r < o; r++) {
                    switch (l = e.getInt32(), l += e.pos, (d = new t.PackageItem()).owner = this, d.type = e.readByte(), 
                    d.id = e.readS(), d.name = e.readS(), e.readS(), (h = e.readS()) && (d.file = h), 
                    e.readBool(), d.width = e.getInt32(), d.height = e.getInt32(), d.type) {
                      case t.PackageItemType.Image:
                        d.objectType = t.ObjectType.Image;
                        var f = e.readByte();
                        1 == f ? (d.scale9Grid = new Laya.Rectangle(), d.scale9Grid.x = e.getInt32(), d.scale9Grid.y = e.getInt32(), 
                        d.scale9Grid.width = e.getInt32(), d.scale9Grid.height = e.getInt32(), d.tileGridIndice = e.getInt32()) : 2 == f && (d.scaleByTile = !0), 
                        d.smoothing = e.readBool();
                        break;

                      case t.PackageItemType.MovieClip:
                        d.smoothing = e.readBool(), d.objectType = t.ObjectType.MovieClip, d.rawData = e.readBuffer();
                        break;

                      case t.PackageItemType.Font:
                        d.rawData = e.readBuffer();
                        break;

                      case t.PackageItemType.Component:
                        var y = e.readByte();
                        d.objectType = y > 0 ? y : t.ObjectType.Component, d.rawData = e.readBuffer(), t.UIObjectFactory.resolvePackageItemExtension(d);
                        break;

                      case t.PackageItemType.Atlas:
                      case t.PackageItemType.Sound:
                      case t.PackageItemType.Misc:
                        d.file = p + d.file;
                    }
                    if (_) {
                        (h = e.readS()) && (d.name = h + "/" + d.name);
                        var v = e.getUint8();
                        v > 0 && (u ? d.branches = e.readSArray(v) : this._itemsById[e.readS()] = d);
                        var m = e.getUint8();
                        m > 0 && (d.highResolution = e.readSArray(m));
                    }
                    this._items.push(d), this._itemsById[d.id] = d, null != d.name && (this._itemsByName[d.name] = d), 
                    e.pos = l;
                }
                for (e.seek(c, 2), o = e.getUint16(), r = 0; r < o; r++) {
                    l = e.getUint16(), l += e.pos;
                    var C = e.readS();
                    d = this._itemsById[e.readS()];
                    var k = new i();
                    k.atlas = d, k.rect.x = e.getInt32(), k.rect.y = e.getInt32(), k.rect.width = e.getInt32(), 
                    k.rect.height = e.getInt32(), k.rotated = e.readBool(), _ && e.readBool() ? (k.offset.x = e.getInt32(), 
                    k.offset.y = e.getInt32(), k.originalSize.x = e.getInt32(), k.originalSize.y = e.getInt32()) : (k.originalSize.x = k.rect.width, 
                    k.originalSize.y = k.rect.height), this._sprites[C] = k, e.pos = l;
                }
                if (e.seek(c, 3)) for (o = e.getUint16(), r = 0; r < o; r++) l = e.getInt32(), l += e.pos, 
                (d = this._itemsById[e.readS()]) && d.type == t.PackageItemType.Image && (d.pixelHitTestData = new t.PixelHitTestData(), 
                d.pixelHitTestData.load(e)), e.pos = l;
            }
        }, {
            key: "loadAllAssets",
            value: function() {
                for (var t = this._items.length, e = 0; e < t; e++) {
                    var i = this._items[e];
                    this.getItemAsset(i);
                }
            }
        }, {
            key: "unloadAssets",
            value: function() {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    s.type == t.PackageItemType.Atlas && null != s.texture && Laya.loader.clearTextureRes(s.texture.url);
                }
            }
        }, {
            key: "dispose",
            value: function() {
                for (var e = this._items.length, i = 0; i < e; i++) {
                    var s = this._items[i];
                    s.type == t.PackageItemType.Atlas ? null != s.texture && (s.texture.destroy(), s.texture = null) : s.type == t.PackageItemType.Sound && Laya.SoundManager.destroySound(s.file);
                }
            }
        }, {
            key: "createObject",
            value: function(t, e) {
                var i = this._itemsByName[t];
                return i ? this.internalCreateObject(i, e) : null;
            }
        }, {
            key: "internalCreateObject",
            value: function(e, i) {
                var s;
                return null == (s = e.type == t.PackageItemType.Component && i ? new i() : t.UIObjectFactory.newObject(e)) ? null : (UIPackage._constructing++, 
                s.packageItem = e, s.constructFromResource(), UIPackage._constructing--, s);
            }
        }, {
            key: "getItemById",
            value: function(t) {
                return this._itemsById[t];
            }
        }, {
            key: "getItemByName",
            value: function(t) {
                return this._itemsByName[t];
            }
        }, {
            key: "getItemAssetByName",
            value: function(t) {
                var e = this._itemsByName[t];
                if (null == e) throw "Resource not found -" + t;
                return this.getItemAsset(e);
            }
        }, {
            key: "getItemAsset",
            value: function(e) {
                switch (e.type) {
                  case t.PackageItemType.Image:
                    if (!e.decoded) {
                        e.decoded = !0;
                        var i = this._sprites[e.id];
                        if (null != i) {
                            var s = this.getItemAsset(i.atlas);
                            e.texture = Laya.Texture.create(s, i.rect.x, i.rect.y, i.rect.width, i.rect.height, i.offset.x, i.offset.y, i.originalSize.x, i.originalSize.y);
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
            key: "loadMovieClip",
            value: function(e) {
                var i = e.rawData;
                i.seek(0, 0), e.interval = i.getInt32(), e.swing = i.readBool(), e.repeatDelay = i.getInt32(), 
                i.seek(0, 1);
                var s, n, a, o, r, l = i.getInt16();
                e.frames = [];
                for (var h = 0; h < l; h++) {
                    var u = i.getInt16();
                    if (u += i.pos, n = new t.Frame(), o = i.getInt32(), r = i.getInt32(), i.getInt32(), 
                    i.getInt32(), n.addDelay = i.getInt32(), null != (s = i.readS()) && null != (a = this._sprites[s])) {
                        var _ = this.getItemAsset(a.atlas);
                        n.texture = Laya.Texture.create(_, a.rect.x, a.rect.y, a.rect.width, a.rect.height, o, r, e.width, e.height);
                    }
                    e.frames[h] = n, i.pos = u;
                }
            }
        }, {
            key: "loadFont",
            value: function(e) {
                var i = new t.BitmapFont();
                e.bitmapFont = i;
                var s = e.rawData;
                s.seek(0, 0), i.ttf = s.readBool(), i.tint = s.readBool(), i.resizable = s.readBool(), 
                s.readBool(), i.size = s.getInt32();
                var n, a, o = s.getInt32(), r = s.getInt32(), l = null, h = this._sprites[e.id];
                null != h && (l = this.getItemAsset(h.atlas)), s.seek(0, 1);
                for (var u = null, _ = s.getInt32(), c = 0; c < _; c++) {
                    var d = s.getInt16();
                    d += s.pos, u = new t.BMGlyph();
                    var g = s.readChar();
                    i.glyphs[g] = u;
                    var p = s.readS(), f = s.getInt32(), y = s.getInt32();
                    if (u.x = s.getInt32(), u.y = s.getInt32(), n = s.getInt32(), a = s.getInt32(), 
                    u.advance = s.getInt32(), u.channel = s.readByte(), 1 == u.channel ? u.channel = 3 : 2 == u.channel ? u.channel = 2 : 3 == u.channel && (u.channel = 1), 
                    i.ttf) u.texture = Laya.Texture.create(l, f + h.rect.x, y + h.rect.y, n, a), u.lineHeight = r; else {
                        var v = this._itemsById[p];
                        v && (n = (v = v.getBranch()).width, a = v.height, v = v.getHighResolution(), this.getItemAsset(v), 
                        u.texture = v.texture), 0 == u.advance && (u.advance = 0 == o ? u.x + n : o), u.lineHeight = u.y < 0 ? a : u.y + a, 
                        u.lineHeight < i.size && (u.lineHeight = i.size);
                    }
                    u.xMax = u.x + n, u.yMax = u.y + a, s.pos = d;
                }
            }
        }, {
            key: "id",
            get: function() {
                return this._id;
            }
        }, {
            key: "name",
            get: function() {
                return this._name;
            }
        }, {
            key: "customId",
            get: function() {
                return this._customId;
            },
            set: function(t) {
                null != this._customId && delete UIPackage._instById[this._customId], this._customId = t, 
                null != this._customId && (UIPackage._instById[this._customId] = this);
            }
        } ], [ {
            key: "getVar",
            value: function(t) {
                return UIPackage._vars[t];
            }
        }, {
            key: "setVar",
            value: function(t, e) {
                UIPackage._vars[t] = e;
            }
        }, {
            key: "getById",
            value: function(t) {
                return UIPackage._instById[t];
            }
        }, {
            key: "getByName",
            value: function(t) {
                return UIPackage._instByName[t];
            }
        }, {
            key: "addPackage",
            value: function(e, i) {
                if (!(i || (i = t.AssetProxy.inst.getRes(e + "." + t.UIConfig.packageFileExtension)) && 0 != i.byteLength)) throw new Error("namespace sunnyboxs not ready: " + e);
                var s = new t.ByteBuffer(i), n = new UIPackage();
                return n._resKey = e, n.loadPackage(s), UIPackage._instById[n.id] = n, UIPackage._instByName[n.name] = n, 
                UIPackage._instById[e] = n, n;
            }
        }, {
            key: "loadPackage",
            value: function(e, i) {
                var s = UIPackage._instById[e];
                if (s) i.runWith(s); else {
                    var n = e + "." + t.UIConfig.packageFileExtension, a = Laya.Handler.create(this, function(s) {
                        var n = new UIPackage();
                        n._resKey = e, n.loadPackage(new t.ByteBuffer(s));
                        for (var a = n._items.length, o = [], r = 0; r < a; r++) {
                            var l = n._items[r];
                            l.type == t.PackageItemType.Atlas ? o.push({
                                url: l.file,
                                type: Laya.Loader.IMAGE
                            }) : l.type == t.PackageItemType.Sound && o.push({
                                url: l.file,
                                type: Laya.Loader.SOUND
                            });
                        }
                        o.length > 0 ? t.AssetProxy.inst.load(o, Laya.Handler.create(this, function() {
                            UIPackage._instById[n.id] = n, UIPackage._instByName[n.name] = n, UIPackage._instByName[n._resKey] = n, 
                            i.runWith(n);
                        })) : i.runWith(n);
                    });
                    t.AssetProxy.inst.load(n, a, null, Laya.Loader.BUFFER);
                }
            }
        }, {
            key: "removePackage",
            value: function(t) {
                var e = UIPackage._instById[t];
                if (e || (e = UIPackage._instByName[t]), !e) throw new Error("unknown package: " + t);
                e.dispose(), delete UIPackage._instById[e.id], delete UIPackage._instByName[e.name], 
                delete UIPackage._instById[e._resKey], null != e._customId && delete UIPackage._instById[e._customId];
            }
        }, {
            key: "createObject",
            value: function(t, e, i) {
                var s = UIPackage.getByName(t);
                return s ? s.createObject(e, i) : null;
            }
        }, {
            key: "createObjectFromURL",
            value: function(t, e) {
                var i = UIPackage.getItemByURL(t);
                return i ? i.owner.internalCreateObject(i, e) : null;
            }
        }, {
            key: "getItemURL",
            value: function(t, e) {
                var i = UIPackage.getByName(t);
                if (!i) return null;
                var s = i._itemsByName[e];
                return s ? "ui://" + i.id + s.id : null;
            }
        }, {
            key: "getItemByURL",
            value: function(t) {
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var i = t.indexOf("/", e + 2);
                if (-1 == i) {
                    if (t.length > 13) {
                        var s = t.substr(5, 8), n = UIPackage.getById(s);
                        if (null != n) {
                            var a = t.substr(13);
                            return n.getItemById(a);
                        }
                    }
                } else {
                    var o = t.substr(e + 2, i - e - 2);
                    if (null != (n = UIPackage.getByName(o))) {
                        var r = t.substr(i + 1);
                        return n.getItemByName(r);
                    }
                }
                return null;
            }
        }, {
            key: "getItemAssetByURL",
            value: function(t) {
                var e = UIPackage.getItemByURL(t);
                return null == e ? null : e.owner.getItemAsset(e);
            }
        }, {
            key: "normalizeURL",
            value: function(t) {
                if (null == t) return null;
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var i = t.indexOf("/", e + 2);
                if (-1 == i) return t;
                var s = t.substr(e + 2, i - e - 2), n = t.substr(i + 1);
                return UIPackage.getItemURL(s, n);
            }
        }, {
            key: "setStringsSource",
            value: function(e) {
                t.TranslationHelper.loadFromXML(e);
            }
        }, {
            key: "branch",
            get: function() {
                return UIPackage._branch;
            },
            set: function(t) {
                for (var e in UIPackage._branch = t, UIPackage._instById) {
                    var i = UIPackage._instById[e];
                    i._branches && (i._branchIndex = i._branches.indexOf(t));
                }
            }
        } ]), UIPackage;
    }();
    e._constructing = 0, e._instById = {}, e._instByName = {}, e._branch = "", e._vars = {}, 
    t.UIPackage = e;
    var i = function AtlasSprite() {
        _classCallCheck(this, AtlasSprite), this.rect = new Laya.Rectangle(), this.offset = new Laya.Point(), 
        this.originalSize = new Laya.Point();
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function Window() {
            var e;
            return _classCallCheck(this, Window), (e = _possibleConstructorReturn(this, _getPrototypeOf(Window).call(this)))._requestingCmd = 0, 
            e.focusable = !0, e._uiSources = [], e.bringToFontOnClick = t.UIConfig.bringWindowToFrontOnClick, 
            e.displayObject.on(Laya.Event.DISPLAY, _assertThisInitialized(e), e.__onShown), 
            e.displayObject.on(Laya.Event.UNDISPLAY, _assertThisInitialized(e), e.__onHidden), 
            e.displayObject.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(e), e.__mouseDown), 
            e;
        }
        return _inherits(Window, t.GComponent), _createClass(Window, [ {
            key: "addUISource",
            value: function(t) {
                this._uiSources.push(t);
            }
        }, {
            key: "show",
            value: function() {
                t.GRoot.inst.showWindow(this);
            }
        }, {
            key: "showOn",
            value: function(t) {
                t.showWindow(this);
            }
        }, {
            key: "hide",
            value: function() {
                this.isShowing && this.doHideAnimation();
            }
        }, {
            key: "hideImmediately",
            value: function() {
                var e = this.parent instanceof t.GRoot ? this.parent : null;
                e || (e = t.GRoot.inst), e.hideWindowImmediately(this);
            }
        }, {
            key: "centerOn",
            value: function(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.setXY(Math.round((e.width - this.width) / 2), Math.round((e.height - this.height) / 2)), 
                i && (this.addRelation(e, t.RelationType.Center_Center), this.addRelation(e, t.RelationType.Middle_Middle));
            }
        }, {
            key: "toggleStatus",
            value: function() {
                this.isTop ? this.hide() : this.show();
            }
        }, {
            key: "bringToFront",
            value: function() {
                this.root.bringToFront(this);
            }
        }, {
            key: "showModalWait",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                0 != e && (this._requestingCmd = e), t.UIConfig.windowModalWaiting && (this._modalWaitPane || (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.windowModalWaiting)), 
                this.layoutModalWaitPane(), this.addChild(this._modalWaitPane));
            }
        }, {
            key: "layoutModalWaitPane",
            value: function() {
                if (null != this._contentArea) {
                    var t = this._frame.localToGlobal();
                    t = this.globalToLocal(t.x, t.y, t), this._modalWaitPane.setXY(t.x + this._contentArea.x, t.y + this._contentArea.y), 
                    this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
                } else this._modalWaitPane.setSize(this.width, this.height);
            }
        }, {
            key: "closeModalWait",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return (0 == t || this._requestingCmd == t) && (this._requestingCmd = 0, this._modalWaitPane && null != this._modalWaitPane.parent && this.removeChild(this._modalWaitPane), 
                !0);
            }
        }, {
            key: "init",
            value: function() {
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
            value: function() {}
        }, {
            key: "onShown",
            value: function() {}
        }, {
            key: "onHide",
            value: function() {}
        }, {
            key: "doShowAnimation",
            value: function() {
                this.onShown();
            }
        }, {
            key: "doHideAnimation",
            value: function() {
                this.hideImmediately();
            }
        }, {
            key: "__uiLoadComplete",
            value: function() {
                for (var t = this._uiSources.length, e = 0; e < t; e++) {
                    if (!this._uiSources[e].loaded) return;
                }
                this._loading = !1, this._init();
            }
        }, {
            key: "_init",
            value: function() {
                this._inited = !0, this.onInit(), this.isShowing && this.doShowAnimation();
            }
        }, {
            key: "dispose",
            value: function() {
                null != this.parent && this.hideImmediately(), _get(_getPrototypeOf(Window.prototype), "dispose", this).call(this);
            }
        }, {
            key: "closeEventHandler",
            value: function() {
                this.hide();
            }
        }, {
            key: "__onShown",
            value: function() {
                this._inited ? this.doShowAnimation() : this.init();
            }
        }, {
            key: "__onHidden",
            value: function() {
                this.closeModalWait(), this.onHide();
            }
        }, {
            key: "__mouseDown",
            value: function() {
                this.isShowing && this.bringToFontOnClick && this.bringToFront();
            }
        }, {
            key: "__dragStart",
            value: function(e) {
                t.GObject.cast(e.currentTarget).stopDrag(), this.startDrag();
            }
        }, {
            key: "contentPane",
            set: function(e) {
                this._contentPane != e && (null != this._contentPane && this.removeChild(this._contentPane), 
                this._contentPane = e, null != this._contentPane && (this.addChild(this._contentPane), 
                this.setSize(this._contentPane.width, this._contentPane.height), this._contentPane.addRelation(this, t.RelationType.Size), 
                this._frame = this._contentPane.getChild("frame"), null != this._frame && (this.closeButton = this._frame.getChild("closeButton"), 
                this.dragArea = this._frame.getChild("dragArea"), this.contentArea = this._frame.getChild("contentArea"))));
            },
            get: function() {
                return this._contentPane;
            }
        }, {
            key: "frame",
            get: function() {
                return this._frame;
            }
        }, {
            key: "closeButton",
            get: function() {
                return this._closeButton;
            },
            set: function(t) {
                null != this._closeButton && this._closeButton.offClick(this, this.closeEventHandler), 
                this._closeButton = t, null != this._closeButton && this._closeButton.onClick(this, this.closeEventHandler);
            }
        }, {
            key: "dragArea",
            get: function() {
                return this._dragArea;
            },
            set: function(e) {
                this._dragArea != e && (null != this._dragArea && (this._dragArea.draggable = !1, 
                this._dragArea.off(t.Events.DRAG_START, this, this.__dragStart)), this._dragArea = e, 
                null != this._dragArea && (this._dragArea instanceof t.GGraph && this._dragArea.asGraph.drawRect(0, null, null), 
                this._dragArea.draggable = !0, this._dragArea.on(t.Events.DRAG_START, this, this.__dragStart)));
            }
        }, {
            key: "contentArea",
            get: function() {
                return this._contentArea;
            },
            set: function(t) {
                this._contentArea = t;
            }
        }, {
            key: "isShowing",
            get: function() {
                return null != this.parent;
            }
        }, {
            key: "isTop",
            get: function() {
                return null != this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
            }
        }, {
            key: "modal",
            get: function() {
                return this._modal;
            },
            set: function(t) {
                this._modal = t;
            }
        }, {
            key: "modalWaiting",
            get: function() {
                return this._modalWaitPane && null != this._modalWaitPane.parent;
            }
        } ]), Window;
    }();
    t.Window = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function ControllerAction() {
            _classCallCheck(this, ControllerAction);
        }
        return _createClass(ControllerAction, [ {
            key: "run",
            value: function(t, e, i) {
                null != this.fromPage && 0 != this.fromPage.length && -1 == this.fromPage.indexOf(e) || null != this.toPage && 0 != this.toPage.length && -1 == this.toPage.indexOf(i) ? this.leave(t) : this.enter(t);
            }
        }, {
            key: "enter",
            value: function(t) {}
        }, {
            key: "leave",
            value: function(t) {}
        }, {
            key: "setup",
            value: function(t) {
                var e, i;
                for (e = t.getInt16(), this.fromPage = [], i = 0; i < e; i++) this.fromPage[i] = t.readS();
                for (e = t.getInt16(), this.toPage = [], i = 0; i < e; i++) this.toPage[i] = t.readS();
            }
        } ], [ {
            key: "createAction",
            value: function(e) {
                switch (e) {
                  case 0:
                    return new t.PlayTransitionAction();

                  case 1:
                    return new t.ChangePageAction();
                }
                return null;
            }
        } ]), ControllerAction;
    }();
    t.ControllerAction = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function ChangePageAction() {
            return _classCallCheck(this, ChangePageAction), _possibleConstructorReturn(this, _getPrototypeOf(ChangePageAction).call(this));
        }
        return _inherits(ChangePageAction, t.ControllerAction), _createClass(ChangePageAction, [ {
            key: "enter",
            value: function(t) {
                var e;
                if (this.controllerName && (e = this.objectId ? t.parent.getChildById(this.objectId) : t.parent)) {
                    var i = e.getController(this.controllerName);
                    i && i != t && !i.changing && ("~1" == this.targetPage ? t.selectedIndex < i.pageCount && (i.selectedIndex = t.selectedIndex) : "~2" == this.targetPage ? i.selectedPage = t.selectedPage : i.selectedPageId = this.targetPage);
                }
            }
        }, {
            key: "setup",
            value: function(t) {
                _get(_getPrototypeOf(ChangePageAction.prototype), "setup", this).call(this, t), 
                this.objectId = t.readS(), this.controllerName = t.readS(), this.targetPage = t.readS();
            }
        } ]), ChangePageAction;
    }();
    t.ChangePageAction = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function PlayTransitionAction() {
            var t;
            return _classCallCheck(this, PlayTransitionAction), (t = _possibleConstructorReturn(this, _getPrototypeOf(PlayTransitionAction).call(this))).playTimes = 1, 
            t.delay = 0, t.stopOnExit = !1, t;
        }
        return _inherits(PlayTransitionAction, t.ControllerAction), _createClass(PlayTransitionAction, [ {
            key: "enter",
            value: function(t) {
                var e = t.parent.getTransition(this.transitionName);
                e && (this._currentTransition && this._currentTransition.playing ? e.changePlayTimes(this.playTimes) : e.play(null, this.playTimes, this.delay), 
                this._currentTransition = e);
            }
        }, {
            key: "leave",
            value: function(t) {
                this.stopOnExit && this._currentTransition && (this._currentTransition.stop(), this._currentTransition = null);
            }
        }, {
            key: "setup",
            value: function(t) {
                _get(_getPrototypeOf(PlayTransitionAction.prototype), "setup", this).call(this, t), 
                this.transitionName = t.readS(), this.playTimes = t.getInt32(), this.delay = t.getFloat32(), 
                this.stopOnExit = t.readBool();
            }
        } ]), PlayTransitionAction;
    }();
    t.PlayTransitionAction = e;
}(fgui || (fgui = {})), function(t) {
    t.BitmapFont = function BitmapFont() {
        _classCallCheck(this, BitmapFont), this.size = 0, this.glyphs = {};
    };
    t.BMGlyph = function BMGlyph() {
        _classCallCheck(this, BMGlyph), this.x = 0, this.y = 0, this.xMax = 0, this.yMax = 0, 
        this.advance = 0, this.lineHeight = 0, this.channel = 0;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function FillUtils() {
            _classCallCheck(this, FillUtils);
        }
        return _createClass(FillUtils, null, [ {
            key: "fill",
            value: function(e, i, s, n, a, o) {
                if (o <= 0) return null;
                if (o >= .9999) return [ 0, 0, e, 0, e, i, 0, i ];
                var r;
                switch (s) {
                  case t.FillMethod.Horizontal:
                    r = FillUtils.fillHorizontal(e, i, n, o);
                    break;

                  case t.FillMethod.Vertical:
                    r = FillUtils.fillVertical(e, i, n, o);
                    break;

                  case t.FillMethod.Radial90:
                    r = FillUtils.fillRadial90(e, i, n, a, o);
                    break;

                  case t.FillMethod.Radial180:
                    r = FillUtils.fillRadial180(e, i, n, a, o);
                    break;

                  case t.FillMethod.Radial360:
                    r = FillUtils.fillRadial360(e, i, n, a, o);
                }
                return r;
            }
        }, {
            key: "fillHorizontal",
            value: function(e, i, s, n) {
                var a = e * n;
                return s == t.FillOrigin.Left || s == t.FillOrigin.Top ? [ 0, 0, a, 0, a, i, 0, i ] : [ e, 0, e, i, e - a, i, e - a, 0 ];
            }
        }, {
            key: "fillVertical",
            value: function(e, i, s, n) {
                var a = i * n;
                return s == t.FillOrigin.Left || s == t.FillOrigin.Top ? [ 0, 0, 0, a, e, a, e, 0 ] : [ 0, i, e, i, e, i - a, 0, i - a ];
            }
        }, {
            key: "fillRadial90",
            value: function(e, i, s, n, a) {
                var o, r, l;
                switch ((!n || s != t.FillOrigin.TopRight && s != t.FillOrigin.BottomLeft) && (n || s != t.FillOrigin.TopLeft && s != t.FillOrigin.BottomRight) || (a = 1 - a), 
                o = ((r = e * Math.tan(Math.PI / 2 * a)) - i) / r, s) {
                  case t.FillOrigin.TopLeft:
                    l = n ? r <= i ? [ 0, 0, e, r, e, 0 ] : [ 0, 0, e * (1 - o), i, e, i, e, 0 ] : r <= i ? [ 0, 0, e, r, e, i, 0, i ] : [ 0, 0, e * (1 - o), i, 0, i ];
                    break;

                  case t.FillOrigin.TopRight:
                    l = n ? r <= i ? [ e, 0, 0, r, 0, i, e, i ] : [ e, 0, e * o, i, e, i ] : r <= i ? [ e, 0, 0, r, 0, 0 ] : [ e, 0, e * o, i, 0, i, 0, 0 ];
                    break;

                  case t.FillOrigin.BottomLeft:
                    l = n ? r <= i ? [ 0, i, e, i - r, e, 0, 0, 0 ] : [ 0, i, e * (1 - o), 0, 0, 0 ] : r <= i ? [ 0, i, e, i - r, e, i ] : [ 0, i, e * (1 - o), 0, e, 0, e, i ];
                    break;

                  case t.FillOrigin.BottomRight:
                    l = n ? r <= i ? [ e, i, 0, i - r, 0, i ] : [ e, i, e * o, 0, 0, 0, 0, i ] : r <= i ? [ e, i, 0, i - r, 0, 0, e, 0 ] : [ e, i, e * o, 0, e, 0 ];
                }
                return l;
            }
        }, {
            key: "movePoints",
            value: function(t, e, i) {
                for (var s = t.length, n = 0; n < s; n += 2) t[n] += e, t[n + 1] += i;
            }
        }, {
            key: "fillRadial180",
            value: function(e, i, s, n, a) {
                var o;
                switch (s) {
                  case t.FillOrigin.Top:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial90(e / 2, i, n ? t.FillOrigin.TopLeft : t.FillOrigin.TopRight, n, a), 
                    n && FillUtils.movePoints(o, e / 2, 0)) : (a = (a - .5) / .5, o = FillUtils.fillRadial90(e / 2, i, n ? t.FillOrigin.TopRight : t.FillOrigin.TopLeft, n, a), 
                    n ? o.push(e, i, e, 0) : (FillUtils.movePoints(o, e / 2, 0), o.push(0, i, 0, 0)));
                    break;

                  case t.FillOrigin.Bottom:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial90(e / 2, i, n ? t.FillOrigin.BottomRight : t.FillOrigin.BottomLeft, n, a), 
                    n || FillUtils.movePoints(o, e / 2, 0)) : (a = (a - .5) / .5, o = FillUtils.fillRadial90(e / 2, i, n ? t.FillOrigin.BottomLeft : t.FillOrigin.BottomRight, n, a), 
                    n ? (FillUtils.movePoints(o, e / 2, 0), o.push(0, 0, 0, i)) : o.push(e, 0, e, i));
                    break;

                  case t.FillOrigin.Left:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial90(e, i / 2, n ? t.FillOrigin.BottomLeft : t.FillOrigin.TopLeft, n, a), 
                    n || FillUtils.movePoints(o, 0, i / 2)) : (a = (a - .5) / .5, o = FillUtils.fillRadial90(e, i / 2, n ? t.FillOrigin.TopLeft : t.FillOrigin.BottomLeft, n, a), 
                    n ? (FillUtils.movePoints(o, 0, i / 2), o.push(e, 0, 0, 0)) : o.push(e, i, 0, i));
                    break;

                  case t.FillOrigin.Right:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial90(e, i / 2, n ? t.FillOrigin.TopRight : t.FillOrigin.BottomRight, n, a), 
                    n && FillUtils.movePoints(o, 0, i / 2)) : (a = (a - .5) / .5, o = FillUtils.fillRadial90(e, i / 2, n ? t.FillOrigin.BottomRight : t.FillOrigin.TopRight, n, a), 
                    n ? o.push(0, i, e, i) : (FillUtils.movePoints(o, 0, i / 2), o.push(0, 0, e, 0)));
                }
                return o;
            }
        }, {
            key: "fillRadial360",
            value: function(e, i, s, n, a) {
                var o;
                switch (s) {
                  case t.FillOrigin.Top:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial180(e / 2, i, n ? t.FillOrigin.Left : t.FillOrigin.Right, n, a), 
                    n && FillUtils.movePoints(o, e / 2, 0)) : (a = (a - .5) / .5, o = FillUtils.fillRadial180(e / 2, i, n ? t.FillOrigin.Right : t.FillOrigin.Left, n, a), 
                    n ? o.push(e, i, e, 0, e / 2, 0) : (FillUtils.movePoints(o, e / 2, 0), o.push(0, i, 0, 0, e / 2, 0)));
                    break;

                  case t.FillOrigin.Bottom:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial180(e / 2, i, n ? t.FillOrigin.Right : t.FillOrigin.Left, n, a), 
                    n || FillUtils.movePoints(o, e / 2, 0)) : (a = (a - .5) / .5, o = FillUtils.fillRadial180(e / 2, i, n ? t.FillOrigin.Left : t.FillOrigin.Right, n, a), 
                    n ? (FillUtils.movePoints(o, e / 2, 0), o.push(0, 0, 0, i, e / 2, i)) : o.push(e, 0, e, i, e / 2, i));
                    break;

                  case t.FillOrigin.Left:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial180(e, i / 2, n ? t.FillOrigin.Bottom : t.FillOrigin.Top, n, a), 
                    n || FillUtils.movePoints(o, 0, i / 2)) : (a = (a - .5) / .5, o = FillUtils.fillRadial180(e, i / 2, n ? t.FillOrigin.Top : t.FillOrigin.Bottom, n, a), 
                    n ? (FillUtils.movePoints(o, 0, i / 2), o.push(e, 0, 0, 0, 0, i / 2)) : o.push(e, i, 0, i, 0, i / 2));
                    break;

                  case t.FillOrigin.Right:
                    a <= .5 ? (a /= .5, o = FillUtils.fillRadial180(e, i / 2, n ? t.FillOrigin.Top : t.FillOrigin.Bottom, n, a), 
                    n && FillUtils.movePoints(o, 0, i / 2)) : (a = (a - .5) / .5, o = FillUtils.fillRadial180(e, i / 2, n ? t.FillOrigin.Bottom : t.FillOrigin.Top, n, a), 
                    n ? o.push(0, i, e, i, e, i / 2) : (FillUtils.movePoints(o, 0, i / 2), o.push(0, 0, e, 0, e, i / 2)));
                }
                return o;
            }
        } ]), FillUtils;
    }();
    t.FillUtils = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function Image() {
            var t;
            return _classCallCheck(this, Image), (t = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this)))._scaleByTile = !1, 
            t._scale9Grid = null, t._tileGridIndice = 0, t._needRebuild = 0, t._fillMethod = 0, 
            t._fillOrigin = 0, t._fillAmount = 0, t._fillClockwise = !1, t._mask = null, t.mouseEnabled = !1, 
            t._color = "#FFFFFF", t;
        }
        return _inherits(Image, Laya.Sprite), _createClass(Image, [ {
            key: "markChanged",
            value: function(t) {
                this._needRebuild ? this._needRebuild |= t : (this._needRebuild = t, Laya.timer.callLater(this, this.rebuild));
            }
        }, {
            key: "rebuild",
            value: function() {
                0 != (1 & this._needRebuild) && this.doDraw(), 0 != (2 & this._needRebuild) && 0 != this._fillMethod && this.doFill(), 
                this._needRebuild = 0;
            }
        }, {
            key: "doDraw",
            value: function() {
                var t = this._width, e = this._height, i = this.graphics, s = this._source;
                if (i.clear(), null != s && 0 != t && 0 != e) if (this._scaleByTile) i.fillTexture(s, 0, 0, t, e); else if (null != this._scale9Grid) {
                    if (!this._sizeGrid) {
                        var n = s.width, a = s.height, o = this._scale9Grid.x, r = Math.max(n - this._scale9Grid.right, 0), l = this._scale9Grid.y, h = Math.max(a - this._scale9Grid.bottom, 0);
                        this._sizeGrid = [ l, r, h, o ];
                    }
                    i.draw9Grid(s, 0, 0, t, e, this._sizeGrid);
                } else i.drawImage(s, 0, 0, t, e);
            }
        }, {
            key: "doFill",
            value: function() {
                var e = this._width, i = this._height, s = this._mask.graphics;
                if (s.clear(), 0 != e && 0 != i) {
                    var n = t.FillUtils.fill(e, i, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
                    if (null == n) return this.mask = null, void (this.mask = this._mask);
                    s.drawPoly(0, 0, n, "#FFFFFF");
                }
            }
        }, {
            key: "width",
            set: function(t) {
                this._width !== t && (_get(_getPrototypeOf(Image.prototype), "set_width", this).call(this, t), 
                this.markChanged(1));
            }
        }, {
            key: "height",
            set: function(t) {
                this._height !== t && (_get(_getPrototypeOf(Image.prototype), "set_height", this).call(this, t), 
                this.markChanged(1));
            }
        }, {
            key: "texture",
            get: function() {
                return this._source;
            },
            set: function(t) {
                this._source != t && (this._source = t, 0 == this._width && (this._source ? this.size(this._source.width, this._source.height) : this.size(0, 0)), 
                this.repaint(), this.markChanged(1));
            }
        }, {
            key: "scale9Grid",
            get: function() {
                return this._scale9Grid;
            },
            set: function(t) {
                this._scale9Grid = t, this._sizeGrid = null, this.markChanged(1);
            }
        }, {
            key: "scaleByTile",
            get: function() {
                return this._scaleByTile;
            },
            set: function(t) {
                this._scaleByTile != t && (this._scaleByTile = t, this.markChanged(1));
            }
        }, {
            key: "tileGridIndice",
            get: function() {
                return this._tileGridIndice;
            },
            set: function(t) {
                this._tileGridIndice != t && (this._tileGridIndice = t, this.markChanged(1));
            }
        }, {
            key: "fillMethod",
            get: function() {
                return this._fillMethod;
            },
            set: function(t) {
                this._fillMethod != t && (this._fillMethod = t, 0 != this._fillMethod ? (this._mask || (this._mask = new Laya.Sprite(), 
                this._mask.mouseEnabled = !1), this.mask = this._mask, this.markChanged(2)) : this.mask && (this._mask.graphics.clear(), 
                this.mask = null));
            }
        }, {
            key: "fillOrigin",
            get: function() {
                return this._fillOrigin;
            },
            set: function(t) {
                this._fillOrigin != t && (this._fillOrigin = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "fillClockwise",
            get: function() {
                return this._fillClockwise;
            },
            set: function(t) {
                this._fillClockwise != t && (this._fillClockwise = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "fillAmount",
            get: function() {
                return this._fillAmount;
            },
            set: function(t) {
                this._fillAmount != t && (this._fillAmount = t, 0 != this._fillMethod && this.markChanged(2));
            }
        }, {
            key: "color",
            get: function() {
                return this._color;
            },
            set: function(e) {
                this._color != e && (this._color = e, t.ToolSet.setColorFilter(this, e));
            }
        } ]), Image;
    }();
    t.Image = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function MovieClip() {
            var t;
            return _classCallCheck(this, MovieClip), (t = _possibleConstructorReturn(this, _getPrototypeOf(MovieClip).call(this))).interval = 0, 
            t.swing = !1, t.repeatDelay = 0, t.timeScale = 1, t._playing = !0, t._frameCount = 0, 
            t._frame = 0, t._start = 0, t._end = 0, t._times = 0, t._endAt = 0, t._status = 0, 
            t._endHandler = null, t._frameElapsed = 0, t._reversed = !1, t._repeatedCount = 0, 
            t.mouseEnabled = !1, t.setPlaySettings(), t.on(Laya.Event.DISPLAY, _assertThisInitialized(t), t.__addToStage), 
            t.on(Laya.Event.UNDISPLAY, _assertThisInitialized(t), t.__removeFromStage), t;
        }
        return _inherits(MovieClip, t.Image), _createClass(MovieClip, [ {
            key: "rewind",
            value: function() {
                this._frame = 0, this._frameElapsed = 0, this._reversed = !1, this._repeatedCount = 0, 
                this.drawFrame();
            }
        }, {
            key: "syncStatus",
            value: function(t) {
                this._frame = t._frame, this._frameElapsed = t._frameElapsed, this._reversed = t._reversed, 
                this._repeatedCount = t._repeatedCount, this.drawFrame();
            }
        }, {
            key: "advance",
            value: function(t) {
                for (var e = this._frame, i = this._reversed, s = t; ;) {
                    var n = this.interval + this._frames[this._frame].addDelay;
                    if (0 == this._frame && this._repeatedCount > 0 && (n += this.repeatDelay), t < n) {
                        this._frameElapsed = 0;
                        break;
                    }
                    if (t -= n, this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, 
                    this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), 
                    this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, 
                    this._repeatedCount++)), this._frame == e && this._reversed == i) {
                        var a = s - t;
                        t -= Math.floor(t / a) * a;
                    }
                }
                this.drawFrame();
            }
        }, {
            key: "setPlaySettings",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                this._start = t, this._end = e, (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), 
                this._times = i, this._endAt = s, -1 == this._endAt && (this._endAt = this._end), 
                this._status = 0, this._endHandler = n, this.frame = t;
            }
        }, {
            key: "update",
            value: function() {
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
                            if (this._frame = this._endAt, this._frameElapsed = 0, this._status = 3, null != this._endHandler) {
                                var i = this._endHandler;
                                this._endHandler = null, i.run();
                            }
                        } else this._frame == this._end && (this._times > 0 ? (this._times--, 0 == this._times ? this._status = 2 : this._status = 1) : 0 != this._start && (this._status = 1));
                        this.drawFrame();
                    }
                }
            }
        }, {
            key: "drawFrame",
            value: function() {
                if (this._frameCount > 0 && this._frame < this._frames.length) {
                    var t = this._frames[this._frame];
                    this.texture = t.texture;
                } else this.texture = null;
                this.rebuild();
            }
        }, {
            key: "checkTimer",
            value: function() {
                this._playing && this._frameCount > 0 && null != this.stage ? Laya.timer.frameLoop(1, this, this.update) : Laya.timer.clear(this, this.update);
            }
        }, {
            key: "__addToStage",
            value: function() {
                this._playing && this._frameCount > 0 && Laya.timer.frameLoop(1, this, this.update);
            }
        }, {
            key: "__removeFromStage",
            value: function() {
                Laya.timer.clear(this, this.update);
            }
        }, {
            key: "frames",
            get: function() {
                return this._frames;
            },
            set: function(t) {
                this._frames = t, this._scaleByTile = !1, this._scale9Grid = null, null != this._frames ? (this._frameCount = this._frames.length, 
                (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), 
                (-1 == this._endAt || this._endAt > this._frameCount - 1) && (this._endAt = this._frameCount - 1), 
                (this._frame < 0 || this._frame > this._frameCount - 1) && (this._frame = this._frameCount - 1), 
                this._frameElapsed = 0, this._repeatedCount = 0, this._reversed = !1) : this._frameCount = 0, 
                this.drawFrame(), this.checkTimer();
            }
        }, {
            key: "frameCount",
            get: function() {
                return this._frameCount;
            }
        }, {
            key: "frame",
            get: function() {
                return this._frame;
            },
            set: function(t) {
                this._frame != t && (null != this._frames && t >= this._frameCount && (t = this._frameCount - 1), 
                this._frame = t, this._frameElapsed = 0, this.drawFrame());
            }
        }, {
            key: "playing",
            get: function() {
                return this._playing;
            },
            set: function(t) {
                this._playing != t && (this._playing = t, this.checkTimer());
            }
        } ]), MovieClip;
    }();
    t.MovieClip = e;
    t.Frame = function Frame() {
        _classCallCheck(this, Frame), this.addDelay = 0;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GearBase(t) {
            _classCallCheck(this, GearBase), this._owner = t;
        }
        return _createClass(GearBase, [ {
            key: "dispose",
            value: function() {
                null != this._tweenConfig && null != this._tweenConfig._tweener && (this._tweenConfig._tweener.kill(), 
                this._tweenConfig._tweener = null);
            }
        }, {
            key: "setup",
            value: function(e) {
                var s, n;
                this._controller = this._owner.parent.getControllerAt(e.getInt16()), this.init();
                var a = e.getInt16();
                if (this instanceof t.GearDisplay) this.pages = e.readSArray(a); else if (this instanceof t.GearDisplay2) this.pages = e.readSArray(a); else {
                    for (s = 0; s < a; s++) null != (n = e.readS()) && this.addStatus(n, e);
                    e.readBool() && this.addStatus(null, e);
                }
                if (e.readBool() && (this._tweenConfig = new i(), this._tweenConfig.easeType = e.readByte(), 
                this._tweenConfig.duration = e.getFloat32(), this._tweenConfig.delay = e.getFloat32()), 
                e.version >= 2) if (this instanceof t.GearXY) {
                    if (e.readBool()) {
                        for (this.positionsInPercent = !0, s = 0; s < a; s++) null != (n = e.readS()) && this.addExtStatus(n, e);
                        e.readBool() && this.addExtStatus(null, e);
                    }
                } else this instanceof t.GearDisplay2 && (this.condition = e.readByte());
            }
        }, {
            key: "updateFromRelations",
            value: function(t, e) {}
        }, {
            key: "addStatus",
            value: function(t, e) {}
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "apply",
            value: function() {}
        }, {
            key: "updateState",
            value: function() {}
        }, {
            key: "controller",
            get: function() {
                return this._controller;
            },
            set: function(t) {
                t != this._controller && (this._controller = t, this._controller && this.init());
            }
        }, {
            key: "tweenConfig",
            get: function() {
                return null == this._tweenConfig && (this._tweenConfig = new i()), this._tweenConfig;
            }
        } ], [ {
            key: "create",
            value: function(e, i) {
                return GearBase.Classes || (GearBase.Classes = [ t.GearDisplay, t.GearXY, t.GearSize, t.GearLook, t.GearColor, t.GearAnimation, t.GearText, t.GearIcon, t.GearDisplay2, t.GearFontSize ]), 
                new GearBase.Classes[i](e);
            }
        } ]), GearBase;
    }();
    e.disableAllTweenEffect = !1, t.GearBase = e;
    var i = function GearTweenConfig() {
        _classCallCheck(this, GearTweenConfig), this.tween = !0, this.easeType = t.EaseType.QuadOut, 
        this.duration = .3, this.delay = 0;
    };
    t.GearTweenConfig = i;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearAnimation(t) {
            return _classCallCheck(this, GearAnimation), _possibleConstructorReturn(this, _getPrototypeOf(GearAnimation).call(this, t));
        }
        return _inherits(GearAnimation, t.GearBase), _createClass(GearAnimation, [ {
            key: "init",
            value: function() {
                this._default = new i(this._owner.getProp(t.ObjectPropID.Playing), this._owner.getProp(t.ObjectPropID.Frame)), 
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                var s;
                null == t ? s = this._default : (s = new i(), this._storage[t] = s), s.playing = e.readBool(), 
                s.frame = e.getInt32();
            }
        }, {
            key: "apply",
            value: function() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                e || (e = this._default), this._owner.setProp(t.ObjectPropID.Playing, e.playing), 
                this._owner.setProp(t.ObjectPropID.Frame, e.frame), this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function() {
                var e = this._storage[this._controller.selectedPageId];
                e || (e = new i(), this._storage[this._controller.selectedPageId] = e), e.playing = this._owner.getProp(t.ObjectPropID.Playing), 
                e.frame = this._owner.getProp(t.ObjectPropID.Frame);
            }
        } ]), GearAnimation;
    }();
    t.GearAnimation = e;
    var i = function GearAnimationValue() {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        _classCallCheck(this, GearAnimationValue), this.playing = t, this.frame = e;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearColor(t) {
            return _classCallCheck(this, GearColor), _possibleConstructorReturn(this, _getPrototypeOf(GearColor).call(this, t));
        }
        return _inherits(GearColor, t.GearBase), _createClass(GearColor, [ {
            key: "init",
            value: function() {
                this._default = new i(this._owner.getProp(t.ObjectPropID.Color), this._owner.getProp(t.ObjectPropID.OutlineColor)), 
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                var s;
                null == t ? s = this._default : (s = new i(), this._storage[t] = s), s.color = e.readColorS(), 
                s.strokeColor = e.readColorS();
            }
        }, {
            key: "apply",
            value: function() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                e || (e = this._default), this._owner.setProp(t.ObjectPropID.Color, e.color), null != e.strokeColor && this._owner.setProp(t.ObjectPropID.OutlineColor, e.strokeColor), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function() {
                var e = this._storage[this._controller.selectedPageId];
                e || (e = new i(null, null), this._storage[this._controller.selectedPageId] = e), 
                e.color = this._owner.getProp(t.ObjectPropID.Color), e.strokeColor = this._owner.getProp(t.ObjectPropID.OutlineColor);
            }
        } ]), GearColor;
    }();
    t.GearColor = e;
    var i = function GearColorValue() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        _classCallCheck(this, GearColorValue), this.color = t, this.strokeColor = e;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearDisplay(t) {
            var e;
            return _classCallCheck(this, GearDisplay), (e = _possibleConstructorReturn(this, _getPrototypeOf(GearDisplay).call(this, t)))._visible = 0, 
            e._displayLockToken = 0, e._displayLockToken = 1, e;
        }
        return _inherits(GearDisplay, t.GearBase), _createClass(GearDisplay, [ {
            key: "init",
            value: function() {
                this.pages = null;
            }
        }, {
            key: "addLock",
            value: function() {
                return this._visible++, this._displayLockToken;
            }
        }, {
            key: "releaseLock",
            value: function(t) {
                t == this._displayLockToken && this._visible--;
            }
        }, {
            key: "apply",
            value: function() {
                this._displayLockToken++, this._displayLockToken <= 0 && (this._displayLockToken = 1), 
                null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
            }
        }, {
            key: "connected",
            get: function() {
                return null == this._controller || this._visible > 0;
            }
        } ]), GearDisplay;
    }();
    t.GearDisplay = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearDisplay2(t) {
            var e;
            return _classCallCheck(this, GearDisplay2), (e = _possibleConstructorReturn(this, _getPrototypeOf(GearDisplay2).call(this, t)))._visible = 0, 
            e;
        }
        return _inherits(GearDisplay2, t.GearBase), _createClass(GearDisplay2, [ {
            key: "init",
            value: function() {
                this.pages = null;
            }
        }, {
            key: "apply",
            value: function() {
                null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
            }
        }, {
            key: "evaluate",
            value: function(t) {
                var e = null == this._controller || this._visible > 0;
                return e = 0 == this.condition ? e && t : e || t;
            }
        } ]), GearDisplay2;
    }();
    t.GearDisplay2 = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearFontSize(t) {
            var e;
            return _classCallCheck(this, GearFontSize), (e = _possibleConstructorReturn(this, _getPrototypeOf(GearFontSize).call(this, t)))._default = 0, 
            e;
        }
        return _inherits(GearFontSize, t.GearBase), _createClass(GearFontSize, [ {
            key: "init",
            value: function() {
                this._default = this._owner.getProp(t.ObjectPropID.FontSize), this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                null == t ? this._default = e.getInt32() : this._storage[t] = e.getInt32();
            }
        }, {
            key: "apply",
            value: function() {
                this._owner._gearLocked = !0;
                var e = this._storage[this._controller.selectedPageId];
                null != e ? this._owner.setProp(t.ObjectPropID.FontSize, e) : this._owner.setProp(t.ObjectPropID.FontSize, this._default), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function() {
                this._storage[this._controller.selectedPageId] = this._owner.text;
            }
        } ]), GearFontSize;
    }();
    t.GearFontSize = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearIcon(t) {
            return _classCallCheck(this, GearIcon), _possibleConstructorReturn(this, _getPrototypeOf(GearIcon).call(this, t));
        }
        return _inherits(GearIcon, t.GearBase), _createClass(GearIcon, [ {
            key: "init",
            value: function() {
                this._default = this._owner.icon, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                null == t ? this._default = e.readS() : this._storage[t] = e.readS();
            }
        }, {
            key: "apply",
            value: function() {
                this._owner._gearLocked = !0;
                var t = this._storage[this._controller.selectedPageId];
                this._owner.icon = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function() {
                this._storage[this._controller.selectedPageId] = this._owner.icon;
            }
        } ]), GearIcon;
    }();
    t.GearIcon = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearLook(t) {
            return _classCallCheck(this, GearLook), _possibleConstructorReturn(this, _getPrototypeOf(GearLook).call(this, t));
        }
        return _inherits(GearLook, t.GearBase), _createClass(GearLook, [ {
            key: "init",
            value: function() {
                this._default = new i(this._owner.alpha, this._owner.rotation, this._owner.grayed, this._owner.touchable), 
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                var s;
                null == t ? s = this._default : (s = new i(), this._storage[t] = s), s.alpha = e.getFloat32(), 
                s.rotation = e.getFloat32(), s.grayed = e.readBool(), s.touchable = e.readBool();
            }
        }, {
            key: "apply",
            value: function() {
                var e = this._storage[this._controller.selectedPageId];
                if (e || (e = this._default), null == this._tweenConfig || !this._tweenConfig.tween || t.UIPackage._constructing || t.GearBase.disableAllTweenEffect) this._owner._gearLocked = !0, 
                this._owner.grayed = e.grayed, this._owner.alpha = e.alpha, this._owner.rotation = e.rotation, 
                this._owner.touchable = e.touchable, this._owner._gearLocked = !1; else {
                    if (this._owner._gearLocked = !0, this._owner.grayed = e.grayed, this._owner.touchable = e.touchable, 
                    this._owner._gearLocked = !1, null != this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e.alpha && this._tweenConfig._tweener.endValue.y == e.rotation) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var i = e.alpha != this._owner.alpha, s = e.rotation != this._owner.rotation;
                    (i || s) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to2(this._owner.alpha, this._owner.rotation, e.alpha, e.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (s ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function(t) {
                var e = t.userData;
                this._owner._gearLocked = !0, 0 != (1 & e) && (this._owner.alpha = t.value.x), 0 != (2 & e) && (this._owner.rotation = t.value.y), 
                this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function() {
                var t = this._storage[this._controller.selectedPageId];
                t || (t = new i(), this._storage[this._controller.selectedPageId] = t), t.alpha = this._owner.alpha, 
                t.rotation = this._owner.rotation, t.grayed = this._owner.grayed, t.touchable = this._owner.touchable;
            }
        } ]), GearLook;
    }();
    t.GearLook = e;
    var i = function GearLookValue() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        _classCallCheck(this, GearLookValue), this.alpha = t, this.rotation = e, this.grayed = i, 
        this.touchable = s;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearSize(t) {
            return _classCallCheck(this, GearSize), _possibleConstructorReturn(this, _getPrototypeOf(GearSize).call(this, t));
        }
        return _inherits(GearSize, t.GearBase), _createClass(GearSize, [ {
            key: "init",
            value: function() {
                this._default = new i(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY), 
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                var s;
                null == t ? s = this._default : (s = new i(), this._storage[t] = s), s.width = e.getInt32(), 
                s.height = e.getInt32(), s.scaleX = e.getFloat32(), s.scaleY = e.getFloat32();
            }
        }, {
            key: "apply",
            value: function() {
                var e = this._storage[this._controller.selectedPageId];
                if (e || (e = this._default), null == this._tweenConfig || !this._tweenConfig.tween || t.UIPackage._constructing || t.GearBase.disableAllTweenEffect) this._owner._gearLocked = !0, 
                this._owner.setSize(e.width, e.height, this._owner.checkGearController(1, this._controller)), 
                this._owner.setScale(e.scaleX, e.scaleY), this._owner._gearLocked = !1; else {
                    if (null != this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e.width && this._tweenConfig._tweener.endValue.y == e.height && this._tweenConfig._tweener.endValue.z == e.scaleX && this._tweenConfig._tweener.endValue.w == e.scaleY) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var i = e.width != this._owner.width || e.height != this._owner.height, s = e.scaleX != this._owner.scaleX || e.scaleY != this._owner.scaleY;
                    (i || s) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, e.width, e.height, e.scaleX, e.scaleY, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (s ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function(t) {
                var e = t.userData;
                this._owner._gearLocked = !0, 0 != (1 & e) && this._owner.setSize(t.value.x, t.value.y, this._owner.checkGearController(1, this._controller)), 
                0 != (2 & e) && this._owner.setScale(t.value.z, t.value.w), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function() {
                var t = this._storage[this._controller.selectedPageId];
                t || (t = new i(), this._storage[this._controller.selectedPageId] = t), t.width = this._owner.width, 
                t.height = this._owner.height, t.scaleX = this._owner.scaleX, t.scaleY = this._owner.scaleY;
            }
        }, {
            key: "updateFromRelations",
            value: function(t, e) {
                if (null != this._controller && null != this._storage) {
                    for (var i in this._storage) {
                        var s = this._storage[i];
                        s.width += t, s.height += e;
                    }
                    this._default.width += t, this._default.height += e, this.updateState();
                }
            }
        } ]), GearSize;
    }();
    t.GearSize = e;
    var i = function GearSizeValue() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        _classCallCheck(this, GearSizeValue), this.width = t, this.height = e, this.scaleX = i, 
        this.scaleY = s;
    };
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearText(t) {
            return _classCallCheck(this, GearText), _possibleConstructorReturn(this, _getPrototypeOf(GearText).call(this, t));
        }
        return _inherits(GearText, t.GearBase), _createClass(GearText, [ {
            key: "init",
            value: function() {
                this._default = this._owner.text, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                null == t ? this._default = e.readS() : this._storage[t] = e.readS();
            }
        }, {
            key: "apply",
            value: function() {
                this._owner._gearLocked = !0;
                var t = this._storage[this._controller.selectedPageId];
                this._owner.text = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
            }
        }, {
            key: "updateState",
            value: function() {
                this._storage[this._controller.selectedPageId] = this._owner.text;
            }
        } ]), GearText;
    }();
    t.GearText = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(e) {
        function GearXY(t) {
            return _classCallCheck(this, GearXY), _possibleConstructorReturn(this, _getPrototypeOf(GearXY).call(this, t));
        }
        return _inherits(GearXY, t.GearBase), _createClass(GearXY, [ {
            key: "init",
            value: function() {
                this._default = {
                    x: this._owner.x,
                    y: this._owner.y,
                    px: this._owner.x / this._owner.parent.width,
                    py: this._owner.y / this._owner.parent.height
                }, this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function(t, e) {
                var i;
                null == t ? i = this._default : (i = {}, this._storage[t] = i), i.x = e.getInt32(), 
                i.y = e.getInt32();
            }
        }, {
            key: "addExtStatus",
            value: function(t, e) {
                var i;
                (i = null == t ? this._default : this._storage[t]).px = e.getFloat32(), i.py = e.getFloat32();
            }
        }, {
            key: "apply",
            value: function() {
                var e, i, s = this._storage[this._controller.selectedPageId];
                if (s || (s = this._default), this.positionsInPercent && this._owner.parent ? (e = s.px * this._owner.parent.width, 
                i = s.py * this._owner.parent.height) : (e = s.x, i = s.y), null == this._tweenConfig || !this._tweenConfig.tween || t.UIPackage._constructing || t.GearBase.disableAllTweenEffect) this._owner._gearLocked = !0, 
                this._owner.setXY(e, i), this._owner._gearLocked = !1; else {
                    if (null != this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x == e && this._tweenConfig._tweener.endValue.y == i) return;
                        this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                    }
                    var n = this._owner.x, a = this._owner.y;
                    n == e && a == i || (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                    this._tweenConfig._tweener = t.GTween.to2(n, a, e, i, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function(t) {
                this._owner._gearLocked = !0, this._owner.setXY(t.value.x, t.value.y), this._owner._gearLocked = !1;
            }
        }, {
            key: "__tweenComplete",
            value: function() {
                0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), 
                this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function() {
                var t = this._storage[this._controller.selectedPageId];
                t || (t = {}, this._storage[this._controller.selectedPageId] = t), t.x = this._owner.x, 
                t.y = this._owner.y, t.px = this._owner.x / this._owner.parent.width, t.py = this._owner.y / this._owner.parent.height;
            }
        }, {
            key: "updateFromRelations",
            value: function(t, e) {
                if (null != this._controller && null != this._storage && !this.positionsInPercent) {
                    for (var i in this._storage) {
                        var s = this._storage[i];
                        s.x += t, s.y += e;
                    }
                    this._default.x += t, this._default.y += e, this.updateState();
                }
            }
        } ]), GearXY;
    }();
    t.GearXY = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function EaseManager() {
            _classCallCheck(this, EaseManager);
        }
        return _createClass(EaseManager, null, [ {
            key: "evaluate",
            value: function(e, s, n, a, o) {
                switch (e) {
                  case t.EaseType.Linear:
                    return s / n;

                  case t.EaseType.SineIn:
                    return 1 - Math.cos(s / n * EaseManager._PiOver2);

                  case t.EaseType.SineOut:
                    return Math.sin(s / n * EaseManager._PiOver2);

                  case t.EaseType.SineInOut:
                    return -.5 * (Math.cos(Math.PI * s / n) - 1);

                  case t.EaseType.QuadIn:
                    return (s /= n) * s;

                  case t.EaseType.QuadOut:
                    return -(s /= n) * (s - 2);

                  case t.EaseType.QuadInOut:
                    return (s /= .5 * n) < 1 ? .5 * s * s : -.5 * (--s * (s - 2) - 1);

                  case t.EaseType.CubicIn:
                    return (s /= n) * s * s;

                  case t.EaseType.CubicOut:
                    return (s = s / n - 1) * s * s + 1;

                  case t.EaseType.CubicInOut:
                    return (s /= .5 * n) < 1 ? .5 * s * s * s : .5 * ((s -= 2) * s * s + 2);

                  case t.EaseType.QuartIn:
                    return (s /= n) * s * s * s;

                  case t.EaseType.QuartOut:
                    return -((s = s / n - 1) * s * s * s - 1);

                  case t.EaseType.QuartInOut:
                    return (s /= .5 * n) < 1 ? .5 * s * s * s * s : -.5 * ((s -= 2) * s * s * s - 2);

                  case t.EaseType.QuintIn:
                    return (s /= n) * s * s * s * s;

                  case t.EaseType.QuintOut:
                    return (s = s / n - 1) * s * s * s * s + 1;

                  case t.EaseType.QuintInOut:
                    return (s /= .5 * n) < 1 ? .5 * s * s * s * s * s : .5 * ((s -= 2) * s * s * s * s + 2);

                  case t.EaseType.ExpoIn:
                    return 0 == s ? 0 : Math.pow(2, 10 * (s / n - 1));

                  case t.EaseType.ExpoOut:
                    return s == n ? 1 : 1 - Math.pow(2, -10 * s / n);

                  case t.EaseType.ExpoInOut:
                    return 0 == s ? 0 : s == n ? 1 : (s /= .5 * n) < 1 ? .5 * Math.pow(2, 10 * (s - 1)) : .5 * (2 - Math.pow(2, -10 * --s));

                  case t.EaseType.CircIn:
                    return -(Math.sqrt(1 - (s /= n) * s) - 1);

                  case t.EaseType.CircOut:
                    return Math.sqrt(1 - (s = s / n - 1) * s);

                  case t.EaseType.CircInOut:
                    return (s /= .5 * n) < 1 ? -.5 * (Math.sqrt(1 - s * s) - 1) : .5 * (Math.sqrt(1 - (s -= 2) * s) + 1);

                  case t.EaseType.ElasticIn:
                    var r;
                    return 0 == s ? 0 : 1 == (s /= n) ? 1 : (0 == o && (o = .3 * n), a < 1 ? (a = 1, 
                    r = o / 4) : r = o / EaseManager._TwoPi * Math.asin(1 / a), -a * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * n - r) * EaseManager._TwoPi / o));

                  case t.EaseType.ElasticOut:
                    var l;
                    return 0 == s ? 0 : 1 == (s /= n) ? 1 : (0 == o && (o = .3 * n), a < 1 ? (a = 1, 
                    l = o / 4) : l = o / EaseManager._TwoPi * Math.asin(1 / a), a * Math.pow(2, -10 * s) * Math.sin((s * n - l) * EaseManager._TwoPi / o) + 1);

                  case t.EaseType.ElasticInOut:
                    var h;
                    return 0 == s ? 0 : 2 == (s /= .5 * n) ? 1 : (0 == o && (o = n * (.3 * 1.5)), a < 1 ? (a = 1, 
                    h = o / 4) : h = o / EaseManager._TwoPi * Math.asin(1 / a), s < 1 ? a * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * n - h) * EaseManager._TwoPi / o) * -.5 : a * Math.pow(2, -10 * (s -= 1)) * Math.sin((s * n - h) * EaseManager._TwoPi / o) * .5 + 1);

                  case t.EaseType.BackIn:
                    return (s /= n) * s * ((a + 1) * s - a);

                  case t.EaseType.BackOut:
                    return (s = s / n - 1) * s * ((a + 1) * s + a) + 1;

                  case t.EaseType.BackInOut:
                    return (s /= .5 * n) < 1 ? s * s * ((1 + (a *= 1.525)) * s - a) * .5 : .5 * ((s -= 2) * s * ((1 + (a *= 1.525)) * s + a) + 2);

                  case t.EaseType.BounceIn:
                    return i.easeIn(s, n);

                  case t.EaseType.BounceOut:
                    return i.easeOut(s, n);

                  case t.EaseType.BounceInOut:
                    return i.easeInOut(s, n);

                  default:
                    return -(s /= n) * (s - 2);
                }
            }
        } ]), EaseManager;
    }();
    e._PiOver2 = .5 * Math.PI, e._TwoPi = 2 * Math.PI, t.EaseManager = e;
    var i = function() {
        function Bounce() {
            _classCallCheck(this, Bounce);
        }
        return _createClass(Bounce, null, [ {
            key: "easeIn",
            value: function(t, e) {
                return 1 - Bounce.easeOut(e - t, e);
            }
        }, {
            key: "easeOut",
            value: function(t, e) {
                return (t /= e) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            }
        }, {
            key: "easeInOut",
            value: function(t, e) {
                return t < .5 * e ? .5 * Bounce.easeIn(2 * t, e) : .5 * Bounce.easeOut(2 * t - e, e) + .5;
            }
        } ]), Bounce;
    }();
}(fgui || (fgui = {})), function(t) {
    var e = function EaseType() {
        _classCallCheck(this, EaseType);
    };
    e.Linear = 0, e.SineIn = 1, e.SineOut = 2, e.SineInOut = 3, e.QuadIn = 4, e.QuadOut = 5, 
    e.QuadInOut = 6, e.CubicIn = 7, e.CubicOut = 8, e.CubicInOut = 9, e.QuartIn = 10, 
    e.QuartOut = 11, e.QuartInOut = 12, e.QuintIn = 13, e.QuintOut = 14, e.QuintInOut = 15, 
    e.ExpoIn = 16, e.ExpoOut = 17, e.ExpoInOut = 18, e.CircIn = 19, e.CircOut = 20, 
    e.CircInOut = 21, e.ElasticIn = 22, e.ElasticOut = 23, e.ElasticInOut = 24, e.BackIn = 25, 
    e.BackOut = 26, e.BackInOut = 27, e.BounceIn = 28, e.BounceOut = 29, e.BounceInOut = 30, 
    e.Custom = 31, t.EaseType = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GPath() {
            _classCallCheck(this, GPath), this._segments = new Array(), this._points = new Array();
        }
        return _createClass(GPath, [ {
            key: "create2",
            value: function(t, e, i, s) {
                var n = new Array();
                n.push(t), n.push(e), i && n.push(i), s && n.push(s), this.create(n);
            }
        }, {
            key: "create",
            value: function(e) {
                this._segments.length = 0, this._points.length = 0, this._fullLength = 0;
                var s = e.length;
                if (0 != s) {
                    var n = GPath.helperPoints;
                    n.length = 0;
                    var a = e[0];
                    a.curveType == t.CurveType.CRSpline && n.push(new Laya.Point(a.x, a.y));
                    for (var o = 1; o < s; o++) {
                        var r = e[o];
                        if (a.curveType != t.CurveType.CRSpline) {
                            var l = new i();
                            l.type = a.curveType, l.ptStart = this._points.length, a.curveType == t.CurveType.Straight ? (l.ptCount = 2, 
                            this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(r.x, r.y))) : a.curveType == t.CurveType.Bezier ? (l.ptCount = 3, 
                            this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(r.x, r.y)), 
                            this._points.push(new Laya.Point(a.control1_x, a.control1_y))) : a.curveType == t.CurveType.CubicBezier && (l.ptCount = 4, 
                            this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(r.x, r.y)), 
                            this._points.push(new Laya.Point(a.control1_x, a.control1_y)), this._points.push(new Laya.Point(a.control2_x, a.control2_y))), 
                            l.length = t.ToolSet.distance(a.x, a.y, r.x, r.y), this._fullLength += l.length, 
                            this._segments.push(l);
                        }
                        r.curveType != t.CurveType.CRSpline ? n.length > 0 && (n.push(new Laya.Point(r.x, r.y)), 
                        this.createSplineSegment()) : n.push(new Laya.Point(r.x, r.y)), a = r;
                    }
                    n.length > 1 && this.createSplineSegment();
                }
            }
        }, {
            key: "createSplineSegment",
            value: function() {
                var e = GPath.helperPoints, s = e.length;
                e.splice(0, 0, e[0]), e.push(e[s]), e.push(e[s]), s += 3;
                var n = new i();
                n.type = t.CurveType.CRSpline, n.ptStart = this._points.length, n.ptCount = s, this._points = this._points.concat(e), 
                n.length = 0;
                for (var a = 1; a < s; a++) n.length += t.ToolSet.distance(e[a - 1].x, e[a - 1].y, e[a].x, e[a].y);
                this._fullLength += n.length, this._segments.push(n), e.length = 0;
            }
        }, {
            key: "clear",
            value: function() {
                this._segments.length = 0, this._points.length = 0;
            }
        }, {
            key: "getPointAt",
            value: function(e, i) {
                i ? i.setTo(0, 0) : i = new Laya.Point(), e = t.ToolSet.clamp01(e);
                var s, n = this._segments.length;
                if (0 == n) return i;
                if (1 == e) return (s = this._segments[n - 1]).type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[s.ptStart].x, this._points[s.ptStart + 1].x, e), 
                i.y = t.ToolSet.lerp(this._points[s.ptStart].y, this._points[s.ptStart + 1].y, e), 
                i) : s.type == t.CurveType.Bezier || s.type == t.CurveType.CubicBezier ? this.onBezierCurve(s.ptStart, s.ptCount, e, i) : this.onCRSplineCurve(s.ptStart, s.ptCount, e, i);
                for (var a = e * this._fullLength, o = 0; o < n; o++) if ((a -= (s = this._segments[o]).length) < 0) {
                    e = 1 + a / s.length, s.type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[s.ptStart].x, this._points[s.ptStart + 1].x, e), 
                    i.y = t.ToolSet.lerp(this._points[s.ptStart].y, this._points[s.ptStart + 1].y, e)) : i = s.type == t.CurveType.Bezier || s.type == t.CurveType.CubicBezier ? this.onBezierCurve(s.ptStart, s.ptCount, e, i) : this.onCRSplineCurve(s.ptStart, s.ptCount, e, i);
                    break;
                }
                return i;
            }
        }, {
            key: "getAnchorsInSegment",
            value: function(t, e) {
                null == e && (e = new Array());
                for (var i = this._segments[t], s = 0; s < i.ptCount; s++) e.push(new Laya.Point(this._points[i.ptStart + s].x, this._points[i.ptStart + s].y));
                return e;
            }
        }, {
            key: "getPointsInSegment",
            value: function(e, i, s, n, a, o) {
                null == n && (n = new Array()), o && !isNaN(o) || (o = .1), a && a.push(i);
                var r = this._segments[e];
                if (r.type == t.CurveType.Straight) n.push(new Laya.Point(t.ToolSet.lerp(this._points[r.ptStart].x, this._points[r.ptStart + 1].x, i), t.ToolSet.lerp(this._points[r.ptStart].y, this._points[r.ptStart + 1].y, i))), 
                n.push(new Laya.Point(t.ToolSet.lerp(this._points[r.ptStart].x, this._points[r.ptStart + 1].x, s), t.ToolSet.lerp(this._points[r.ptStart].y, this._points[r.ptStart + 1].y, s))); else {
                    var l;
                    l = r.type == t.CurveType.Bezier || r.type == t.CurveType.CubicBezier ? this.onBezierCurve : this.onCRSplineCurve, 
                    n.push(l.call(this, r.ptStart, r.ptCount, i, new Laya.Point()));
                    for (var h = Math.min(r.length * o, 50), u = 0; u <= h; u++) {
                        var _ = u / h;
                        _ > i && _ < s && (n.push(l.call(this, r.ptStart, r.ptCount, _, new Laya.Point())), 
                        null != a && a.push(_));
                    }
                    n.push(l.call(this, r.ptStart, r.ptCount, s, new Laya.Point()));
                }
                return null != a && a.push(s), n;
            }
        }, {
            key: "getAllPoints",
            value: function(t, e, i) {
                null == t && (t = new Array()), i && !isNaN(i) || (i = .1);
                for (var s = this._segments.length, n = 0; n < s; n++) this.getPointsInSegment(n, 0, 1, t, e, i);
                return t;
            }
        }, {
            key: "onCRSplineCurve",
            value: function(e, i, s, n) {
                var a = Math.floor(s * (i - 4)) + e, o = this._points[a].x, r = this._points[a].y, l = this._points[a + 1].x, h = this._points[a + 1].y, u = this._points[a + 2].x, _ = this._points[a + 2].y, c = this._points[a + 3].x, d = this._points[a + 3].y, g = 1 == s ? 1 : t.ToolSet.repeat(s * (i - 4), 1), p = ((2 - g) * g - 1) * g * .5, f = .5 * ((3 * g - 5) * g * g + 2), y = ((-3 * g + 4) * g + 1) * g * .5, v = (g - 1) * g * g * .5;
                return n.x = o * p + l * f + u * y + c * v, n.y = r * p + h * f + _ * y + d * v, 
                n;
            }
        }, {
            key: "onBezierCurve",
            value: function(t, e, i, s) {
                var n = 1 - i, a = this._points[t].x, o = this._points[t].y, r = this._points[t + 1].x, l = this._points[t + 1].y, h = this._points[t + 2].x, u = this._points[t + 2].y;
                if (4 == e) {
                    var _ = this._points[t + 3].x, c = this._points[t + 3].y;
                    s.x = n * n * n * a + 3 * n * n * i * h + 3 * n * i * i * _ + i * i * i * r, s.y = n * n * n * o + 3 * n * n * i * u + 3 * n * i * i * c + i * i * i * l;
                } else s.x = n * n * a + 2 * n * i * h + i * i * r, s.y = n * n * o + 2 * n * i * u + i * i * l;
                return s;
            }
        }, {
            key: "length",
            get: function() {
                return this._fullLength;
            }
        }, {
            key: "segmentCount",
            get: function() {
                return this._segments.length;
            }
        } ]), GPath;
    }();
    e.helperPoints = new Array(), t.GPath = e;
    var i = function Segment() {
        _classCallCheck(this, Segment);
    };
}(fgui || (fgui = {})), function(t) {
    var e;
    !function(t) {
        t[t.CRSpline = 0] = "CRSpline", t[t.Bezier = 1] = "Bezier", t[t.CubicBezier = 2] = "CubicBezier", 
        t[t.Straight = 3] = "Straight";
    }(e = t.CurveType || (t.CurveType = {}));
    var i = function() {
        function GPathPoint() {
            _classCallCheck(this, GPathPoint), this.x = 0, this.y = 0, this.control1_x = 0, 
            this.control1_y = 0, this.control2_x = 0, this.control2_y = 0, this.curveType = 0;
        }
        return _createClass(GPathPoint, [ {
            key: "clone",
            value: function() {
                var t = new GPathPoint();
                return t.x = this.x, t.y = this.y, t.control1_x = this.control1_x, t.control1_y = this.control1_y, 
                t.control2_x = this.control2_x, t.control2_y = this.control2_y, t.curveType = this.curveType, 
                t;
            }
        } ], [ {
            key: "newPoint",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = new GPathPoint();
                return s.x = t, s.y = e, s.control1_x = 0, s.control1_y = 0, s.control2_x = 0, s.control2_y = 0, 
                s.curveType = i, s;
            }
        }, {
            key: "newBezierPoint",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = new GPathPoint();
                return a.x = t, a.y = i, a.control1_x = s, a.control1_y = n, a.control2_x = 0, a.control2_y = 0, 
                a.curveType = e.Bezier, a;
            }
        }, {
            key: "newCubicBezierPoint",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, r = new GPathPoint();
                return r.x = t, r.y = i, r.control1_x = s, r.control1_y = n, r.control2_x = a, r.control2_y = o, 
                r.curveType = e.CubicBezier, r;
            }
        } ]), GPathPoint;
    }();
    t.GPathPoint = i;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GTween() {
            _classCallCheck(this, GTween);
        }
        return _createClass(GTween, null, [ {
            key: "to",
            value: function(e, i, s) {
                return t.TweenManager.createTween()._to(e, i, s);
            }
        }, {
            key: "to2",
            value: function(e, i, s, n, a) {
                return t.TweenManager.createTween()._to2(e, i, s, n, a);
            }
        }, {
            key: "to3",
            value: function(e, i, s, n, a, o, r) {
                return t.TweenManager.createTween()._to3(e, i, s, n, a, o, r);
            }
        }, {
            key: "to4",
            value: function(e, i, s, n, a, o, r, l, h) {
                return t.TweenManager.createTween()._to4(e, i, s, n, a, o, r, l, h);
            }
        }, {
            key: "toColor",
            value: function(e, i, s) {
                return t.TweenManager.createTween()._toColor(e, i, s);
            }
        }, {
            key: "delayedCall",
            value: function(e) {
                return t.TweenManager.createTween().setDelay(e);
            }
        }, {
            key: "shake",
            value: function(e, i, s, n) {
                return t.TweenManager.createTween()._shake(e, i, s, n);
            }
        }, {
            key: "isTweening",
            value: function(e, i) {
                return t.TweenManager.isTweening(e, i);
            }
        }, {
            key: "kill",
            value: function(e, i, s) {
                t.TweenManager.killTweens(e, i, s);
            }
        }, {
            key: "getTween",
            value: function(e, i) {
                return t.TweenManager.getTween(e, i);
            }
        } ]), GTween;
    }();
    e.catchCallbackExceptions = !0, t.GTween = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function GTweener() {
            _classCallCheck(this, GTweener), this._startValue = new t.TweenValue(), this._endValue = new t.TweenValue(), 
            this._value = new t.TweenValue(), this._deltaValue = new t.TweenValue(), this._reset();
        }
        return _createClass(GTweener, [ {
            key: "setDelay",
            value: function(t) {
                return this._delay = t, this;
            }
        }, {
            key: "setDuration",
            value: function(t) {
                return this._duration = t, this;
            }
        }, {
            key: "setBreakpoint",
            value: function(t) {
                return this._breakpoint = t, this;
            }
        }, {
            key: "setEase",
            value: function(t) {
                return this._easeType = t, this;
            }
        }, {
            key: "setEasePeriod",
            value: function(t) {
                return this._easePeriod = t, this;
            }
        }, {
            key: "setEaseOvershootOrAmplitude",
            value: function(t) {
                return this._easeOvershootOrAmplitude = t, this;
            }
        }, {
            key: "setRepeat",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this._repeat = t, this._yoyo = e, this;
            }
        }, {
            key: "setTimeScale",
            value: function(t) {
                return this._timeScale = t, this;
            }
        }, {
            key: "setSnapping",
            value: function(t) {
                return this._snapping = t, this;
            }
        }, {
            key: "setTarget",
            value: function(t, e) {
                return this._target = t, this._propType = e, this;
            }
        }, {
            key: "setPath",
            value: function(t) {
                return this._path = t, this;
            }
        }, {
            key: "setUserData",
            value: function(t) {
                return this._userData = t, this;
            }
        }, {
            key: "onUpdate",
            value: function(t, e) {
                return this._onUpdate = t, this._onUpdateCaller = e, this;
            }
        }, {
            key: "onStart",
            value: function(t, e) {
                return this._onStart = t, this._onStartCaller = e, this;
            }
        }, {
            key: "onComplete",
            value: function(t, e) {
                return this._onComplete = t, this._onCompleteCaller = e, this;
            }
        }, {
            key: "setPaused",
            value: function(t) {
                return this._paused = t, this;
            }
        }, {
            key: "seek",
            value: function(t) {
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
            value: function(t) {
                this._killed || (t && (0 == this._ended && (this._breakpoint >= 0 ? this._elapsedTime = this._delay + this._breakpoint : this._repeat >= 0 ? this._elapsedTime = this._delay + this._duration * (this._repeat + 1) : this._elapsedTime = this._delay + 2 * this._duration, 
                this.update()), this.callCompleteCallback()), this._killed = !0);
            }
        }, {
            key: "_to",
            value: function(t, e, i) {
                return this._valueSize = 1, this._startValue.x = t, this._endValue.x = e, this._value.x = t, 
                this._duration = i, this;
            }
        }, {
            key: "_to2",
            value: function(t, e, i, s, n) {
                return this._valueSize = 2, this._startValue.x = t, this._endValue.x = i, this._startValue.y = e, 
                this._endValue.y = s, this._value.x = t, this._value.y = e, this._duration = n, 
                this;
            }
        }, {
            key: "_to3",
            value: function(t, e, i, s, n, a, o) {
                return this._valueSize = 3, this._startValue.x = t, this._endValue.x = s, this._startValue.y = e, 
                this._endValue.y = n, this._startValue.z = i, this._endValue.z = a, this._value.x = t, 
                this._value.y = e, this._value.z = i, this._duration = o, this;
            }
        }, {
            key: "_to4",
            value: function(t, e, i, s, n, a, o, r, l) {
                return this._valueSize = 4, this._startValue.x = t, this._endValue.x = n, this._startValue.y = e, 
                this._endValue.y = a, this._startValue.z = i, this._endValue.z = o, this._startValue.w = s, 
                this._endValue.w = r, this._value.x = t, this._value.y = e, this._value.z = i, this._value.w = s, 
                this._duration = l, this;
            }
        }, {
            key: "_toColor",
            value: function(t, e, i) {
                return this._valueSize = 4, this._startValue.color = t, this._endValue.color = e, 
                this._value.color = t, this._duration = i, this;
            }
        }, {
            key: "_shake",
            value: function(t, e, i, s) {
                return this._valueSize = 5, this._startValue.x = t, this._startValue.y = e, this._startValue.w = i, 
                this._duration = s, this;
            }
        }, {
            key: "_init",
            value: function() {
                this._delay = 0, this._duration = 0, this._breakpoint = -1, this._easeType = t.EaseType.QuadOut, 
                this._timeScale = 1, this._easePeriod = 0, this._easeOvershootOrAmplitude = 1.70158, 
                this._snapping = !1, this._repeat = 0, this._yoyo = !1, this._valueSize = 0, this._started = !1, 
                this._paused = !1, this._killed = !1, this._elapsedTime = 0, this._normalizedTime = 0, 
                this._ended = 0;
            }
        }, {
            key: "_reset",
            value: function() {
                this._target = null, this._userData = null, this._path = null, this._onStart = this._onUpdate = this._onComplete = null, 
                this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
            }
        }, {
            key: "_update",
            value: function(t) {
                if (1 != this._timeScale && (t *= this._timeScale), 0 != t) {
                    if (0 != this._ended) return this.callCompleteCallback(), void (this._killed = !0);
                    this._elapsedTime += t, this.update(), 0 != this._ended && (this._killed || (this.callCompleteCallback(), 
                    this._killed = !0));
                }
            }
        }, {
            key: "update",
            value: function() {
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
                    if (this._normalizedTime = t.EaseManager.evaluate(this._easeType, e ? this._duration - i : i, this._duration, this._easeOvershootOrAmplitude, this._easePeriod), 
                    this._value.setZero(), this._deltaValue.setZero(), 5 == this._valueSize) if (0 == this._ended) {
                        var n = this._startValue.w * (1 - this._normalizedTime), a = n * (Math.random() > .5 ? 1 : -1), o = n * (Math.random() > .5 ? 1 : -1);
                        this._deltaValue.x = a, this._deltaValue.y = o, this._value.x = this._startValue.x + a, 
                        this._value.y = this._startValue.y + o;
                    } else this._value.x = this._startValue.x, this._value.y = this._startValue.y; else if (this._path) {
                        var r = GTweener.helperPoint;
                        this._path.getPointAt(this._normalizedTime, r), this._snapping && (r.x = Math.round(r.x), 
                        r.y = Math.round(r.y)), this._deltaValue.x = r.x - this._value.x, this._deltaValue.y = r.y - this._value.y, 
                        this._value.x = r.x, this._value.y = r.y;
                    } else for (var l = 0; l < this._valueSize; l++) {
                        var h = this._startValue.getField(l), u = h + (this._endValue.getField(l) - h) * this._normalizedTime;
                        this._snapping && (u = Math.round(u)), this._deltaValue.setField(l, u - this._value.getField(l)), 
                        this._value.setField(l, u);
                    }
                    if (null != this._target && this._propType) if (this._propType instanceof Function) switch (this._valueSize) {
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
            value: function() {
                if (null != this._onStart) try {
                    this._onStart.call(this._onStartCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in start callback > " + t);
                }
            }
        }, {
            key: "callUpdateCallback",
            value: function() {
                if (null != this._onUpdate) try {
                    this._onUpdate.call(this._onUpdateCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in update callback > " + t);
                }
            }
        }, {
            key: "callCompleteCallback",
            value: function() {
                if (null != this._onComplete) try {
                    this._onComplete.call(this._onCompleteCaller, this);
                } catch (t) {
                    console.log("FairyGUI: error in complete callback > " + t);
                }
            }
        }, {
            key: "delay",
            get: function() {
                return this._delay;
            }
        }, {
            key: "duration",
            get: function() {
                return this._duration;
            }
        }, {
            key: "repeat",
            get: function() {
                return this._repeat;
            }
        }, {
            key: "target",
            get: function() {
                return this._target;
            }
        }, {
            key: "userData",
            get: function() {
                return this._userData;
            }
        }, {
            key: "startValue",
            get: function() {
                return this._startValue;
            }
        }, {
            key: "endValue",
            get: function() {
                return this._endValue;
            }
        }, {
            key: "value",
            get: function() {
                return this._value;
            }
        }, {
            key: "deltaValue",
            get: function() {
                return this._deltaValue;
            }
        }, {
            key: "normalizedTime",
            get: function() {
                return this._normalizedTime;
            }
        }, {
            key: "completed",
            get: function() {
                return 0 != this._ended;
            }
        }, {
            key: "allCompleted",
            get: function() {
                return 1 == this._ended;
            }
        } ]), GTweener;
    }();
    e.helperPoint = new Laya.Point(), t.GTweener = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function TweenManager() {
            _classCallCheck(this, TweenManager);
        }
        return _createClass(TweenManager, null, [ {
            key: "createTween",
            value: function() {
                var e;
                return TweenManager._inited || (Laya.timer.frameLoop(1, null, TweenManager.update), 
                TweenManager._inited = !0), (e = TweenManager._tweenerPool.length > 0 ? TweenManager._tweenerPool.pop() : new t.GTweener())._init(), 
                TweenManager._activeTweens[TweenManager._totalActiveTweens++] = e, e;
            }
        }, {
            key: "isTweening",
            value: function(t, e) {
                if (null == t) return !1;
                for (var i = !e, s = 0; s < TweenManager._totalActiveTweens; s++) {
                    var n = TweenManager._activeTweens[s];
                    if (null != n && n.target == t && !n._killed && (i || n._propType == e)) return !0;
                }
                return !1;
            }
        }, {
            key: "killTweens",
            value: function(t, e, i) {
                if (null == t) return !1;
                for (var s = !1, n = TweenManager._totalActiveTweens, a = !i, o = 0; o < n; o++) {
                    var r = TweenManager._activeTweens[o];
                    null == r || r.target != t || r._killed || !a && r._propType != i || (r.kill(e), 
                    s = !0);
                }
                return s;
            }
        }, {
            key: "getTween",
            value: function(t, e) {
                if (null == t) return null;
                for (var i = TweenManager._totalActiveTweens, s = !e, n = 0; n < i; n++) {
                    var a = TweenManager._activeTweens[n];
                    if (null != a && a.target == t && !a._killed && (s || a._propType == e)) return a;
                }
                return null;
            }
        }, {
            key: "update",
            value: function() {
                for (var e = Laya.timer.delta / 1e3, i = TweenManager._totalActiveTweens, s = -1, n = 0; n < i; n++) {
                    var a = TweenManager._activeTweens[n];
                    null == a ? -1 == s && (s = n) : a._killed ? (a._reset(), TweenManager._tweenerPool.push(a), 
                    TweenManager._activeTweens[n] = null, -1 == s && (s = n)) : (a._target instanceof t.GObject && a._target.isDisposed ? a._killed = !0 : a._paused || a._update(e), 
                    -1 != s && (TweenManager._activeTweens[s] = a, TweenManager._activeTweens[n] = null, 
                    s++));
                }
                if (s >= 0) {
                    if (TweenManager._totalActiveTweens != i) {
                        var o = i;
                        for (i = TweenManager._totalActiveTweens - i, n = 0; n < i; n++) TweenManager._activeTweens[s++] = TweenManager._activeTweens[o++];
                    }
                    TweenManager._totalActiveTweens = s;
                }
            }
        } ]), TweenManager;
    }();
    e._activeTweens = new Array(), e._tweenerPool = [], e._totalActiveTweens = 0, e._inited = !1, 
    t.TweenManager = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function TweenValue() {
            _classCallCheck(this, TweenValue), this.x = this.y = this.z = this.w = 0;
        }
        return _createClass(TweenValue, [ {
            key: "getField",
            value: function(t) {
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
            value: function(t, e) {
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
            value: function() {
                this.x = this.y = this.z = this.w = 0;
            }
        }, {
            key: "color",
            get: function() {
                return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
            },
            set: function(t) {
                this.x = (16711680 & t) >> 16, this.y = (65280 & t) >> 8, this.z = 255 & t, this.w = (4278190080 & t) >> 24;
            }
        } ]), TweenValue;
    }();
    t.TweenValue = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(t) {
        function ByteBuffer() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
            return _classCallCheck(this, ByteBuffer), -1 == s && (s = e.byteLength - i), 0 == i && s == e.byteLength ? t = _possibleConstructorReturn(this, _getPrototypeOf(ByteBuffer).call(this, e)) : ((t = _possibleConstructorReturn(this, _getPrototypeOf(ByteBuffer).call(this)))._u8d_ = new Uint8Array(e, i, s), 
            t._d_ = new DataView(t._u8d_.buffer, i, s), t._length = s), t.endian = Laya.Byte.BIG_ENDIAN, 
            _possibleConstructorReturn(t);
        }
        return _inherits(ByteBuffer, Laya.Byte), _createClass(ByteBuffer, [ {
            key: "skip",
            value: function(t) {
                this.pos += t;
            }
        }, {
            key: "readBool",
            value: function() {
                return 1 == this.getUint8();
            }
        }, {
            key: "readS",
            value: function() {
                var t = this.getUint16();
                return 65534 == t ? null : 65533 == t ? "" : this.stringTable[t];
            }
        }, {
            key: "readSArray",
            value: function(t) {
                for (var e = new Array(t), i = 0; i < t; i++) e[i] = this.readS();
                return e;
            }
        }, {
            key: "writeS",
            value: function(t) {
                var e = this.getUint16();
                65534 != e && 65533 != e && (this.stringTable[e] = t);
            }
        }, {
            key: "readColor",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.getUint8(), i = this.getUint8(), s = this.getUint8(), n = this.getUint8();
                return (t ? n << 24 : 0) + (e << 16) + (i << 8) + s;
            }
        }, {
            key: "readColorS",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.getUint8(), i = this.getUint8(), s = this.getUint8(), n = this.getUint8();
                if (t && 255 != n) return "rgba(" + e + "," + i + "," + s + "," + n / 255 + ")";
                var a = e.toString(16), o = i.toString(16), r = s.toString(16);
                return 1 == a.length && (a = "0" + a), 1 == o.length && (o = "0" + o), 1 == r.length && (r = "0" + r), 
                "#" + a + o + r;
            }
        }, {
            key: "readChar",
            value: function() {
                var t = this.getUint16();
                return String.fromCharCode(t);
            }
        }, {
            key: "readBuffer",
            value: function() {
                var t = this.getUint32(), e = new ByteBuffer(this.buffer, this._pos_, t);
                return this.pos += t, e.stringTable = this.stringTable, e.version = this.version, 
                e;
            }
        }, {
            key: "seek",
            value: function(t, e) {
                var i, s = this._pos_;
                return this.pos = t, e < this.getUint8() ? (1 == this.getUint8() ? (this.pos += 2 * e, 
                i = this.getUint16()) : (this.pos += 4 * e, i = this.getUint32()), i > 0 ? (this.pos = t + i, 
                !0) : (this.pos = s, !1)) : (this.pos = s, !1);
            }
        } ]), ByteBuffer;
    }();
    t.ByteBuffer = e;
}(fgui || (fgui = {})), function(t) {
    var e = Laya.HitArea._isHitGraphic, i = function(t) {
        function ChildHitArea(t, e) {
            var i;
            return _classCallCheck(this, ChildHitArea), (i = _possibleConstructorReturn(this, _getPrototypeOf(ChildHitArea).call(this)))._child = t, 
            i._reversed = e, i._reversed ? i.unHit = t.hitArea.hit : i.hit = t.hitArea.hit, 
            i;
        }
        return _inherits(ChildHitArea, Laya.HitArea), _createClass(ChildHitArea, [ {
            key: "contains",
            value: function(t, i) {
                var s;
                return (s = Laya.Point.TEMP).setTo(0, 0), s = this._child.toParentPoint(s), this._reversed ? !e(t - s.x, i - s.y, this.unHit) : e(t - s.x, i - s.y, this.hit);
            }
        } ]), ChildHitArea;
    }();
    t.ChildHitArea = i;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function ColorMatrix() {
            _classCallCheck(this, ColorMatrix), this.matrix = new Array(ColorMatrix.LENGTH), 
            this.reset();
        }
        return _createClass(ColorMatrix, [ {
            key: "reset",
            value: function() {
                for (var t = 0; t < ColorMatrix.LENGTH; t++) this.matrix[t] = ColorMatrix.IDENTITY_MATRIX[t];
            }
        }, {
            key: "invert",
            value: function() {
                this.multiplyMatrix([ -1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustColor",
            value: function(t, e, i, s) {
                this.adjustBrightness(t), this.adjustContrast(e), this.adjustSaturation(i), this.adjustHue(s);
            }
        }, {
            key: "adjustBrightness",
            value: function(t) {
                t = 255 * this.cleanValue(t, 1), this.multiplyMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustContrast",
            value: function(t) {
                var e = (t = this.cleanValue(t, 1)) + 1, i = 128 * (1 - e);
                this.multiplyMatrix([ e, 0, 0, 0, i, 0, e, 0, 0, i, 0, 0, e, 0, i, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustSaturation",
            value: function(t) {
                t = this.cleanValue(t, 1);
                var e = 1 - (t += 1), i = e * ColorMatrix.LUMA_R, s = e * ColorMatrix.LUMA_G, n = e * ColorMatrix.LUMA_B;
                this.multiplyMatrix([ i + t, s, n, 0, 0, i, s + t, n, 0, 0, i, s, n + t, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustHue",
            value: function(t) {
                t = this.cleanValue(t, 1), t *= Math.PI;
                var e = Math.cos(t), i = Math.sin(t);
                this.multiplyMatrix([ ColorMatrix.LUMA_R + e * (1 - ColorMatrix.LUMA_R) + i * -ColorMatrix.LUMA_R, ColorMatrix.LUMA_G + e * -ColorMatrix.LUMA_G + i * -ColorMatrix.LUMA_G, ColorMatrix.LUMA_B + e * -ColorMatrix.LUMA_B + i * (1 - ColorMatrix.LUMA_B), 0, 0, ColorMatrix.LUMA_R + e * -ColorMatrix.LUMA_R + .143 * i, ColorMatrix.LUMA_G + e * (1 - ColorMatrix.LUMA_G) + .14 * i, ColorMatrix.LUMA_B + e * -ColorMatrix.LUMA_B + -.283 * i, 0, 0, ColorMatrix.LUMA_R + e * -ColorMatrix.LUMA_R + i * -(1 - ColorMatrix.LUMA_R), ColorMatrix.LUMA_G + e * -ColorMatrix.LUMA_G + i * ColorMatrix.LUMA_G, ColorMatrix.LUMA_B + e * (1 - ColorMatrix.LUMA_B) + i * ColorMatrix.LUMA_B, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "concat",
            value: function(t) {
                t.length == ColorMatrix.LENGTH && this.multiplyMatrix(t);
            }
        }, {
            key: "clone",
            value: function() {
                var t = new ColorMatrix();
                return t.copyMatrix(this.matrix), t;
            }
        }, {
            key: "copyMatrix",
            value: function(t) {
                for (var e = ColorMatrix.LENGTH, i = 0; i < e; i++) this.matrix[i] = t[i];
            }
        }, {
            key: "multiplyMatrix",
            value: function(t) {
                for (var e = [], i = 0, s = 0; s < 4; ++s) {
                    for (var n = 0; n < 5; ++n) e[i + n] = t[i] * this.matrix[n] + t[i + 1] * this.matrix[n + 5] + t[i + 2] * this.matrix[n + 10] + t[i + 3] * this.matrix[n + 15] + (4 == n ? t[i + 4] : 0);
                    i += 5;
                }
                this.copyMatrix(e);
            }
        }, {
            key: "cleanValue",
            value: function(t, e) {
                return Math.min(e, Math.max(-e, t));
            }
        } ], [ {
            key: "create",
            value: function(t, e, i, s) {
                var n = new ColorMatrix();
                return n.adjustColor(t, e, i, s), n;
            }
        }, {
            key: "getMatrix",
            value: function(t, e, i, s, n) {
                n || (n = new Array(ColorMatrix.length));
                var a = ColorMatrix.helper;
                a.reset(), a.adjustColor(t, e, i, s);
                for (var o = ColorMatrix.LENGTH, r = 0; r < o; r++) n[r] = a.matrix[r];
                return n;
            }
        } ]), ColorMatrix;
    }();
    e.IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], 
    e.LENGTH = e.IDENTITY_MATRIX.length, e.LUMA_R = .299, e.LUMA_G = .587, e.LUMA_B = .114, 
    e.helper = new e(), t.ColorMatrix = e;
}(fgui || (fgui = {})), function(t) {
    var e = function(t) {
        function PixelHitTest(t) {
            var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return _classCallCheck(this, PixelHitTest), (e = _possibleConstructorReturn(this, _getPrototypeOf(PixelHitTest).call(this)))._data = t, 
            e.offsetX = i, e.offsetY = s, e.scaleX = 1, e.scaleY = 1, e;
        }
        return _inherits(PixelHitTest, Laya.HitArea), _createClass(PixelHitTest, [ {
            key: "contains",
            value: function(t, e) {
                if (t = Math.floor((t / this.scaleX - this.offsetX) * this._data.scale), e = Math.floor((e / this.scaleY - this.offsetY) * this._data.scale), 
                t < 0 || e < 0 || t >= this._data.pixelWidth) return !1;
                var i = e * this._data.pixelWidth + t, s = Math.floor(i / 8), n = i % 8;
                return s >= 0 && s < this._data.pixels.length && 1 == (this._data.pixels[s] >> n & 1);
            }
        } ]), PixelHitTest;
    }();
    t.PixelHitTest = e;
    var i = function() {
        function PixelHitTestData() {
            _classCallCheck(this, PixelHitTestData);
        }
        return _createClass(PixelHitTestData, [ {
            key: "load",
            value: function(t) {
                t.getInt32(), this.pixelWidth = t.getInt32(), this.scale = 1 / t.readByte();
                var e = t.getInt32();
                this.pixels = [];
                for (var i = 0; i < e; i++) {
                    var s = t.readByte();
                    s < 0 && (s += 256), this.pixels[i] = s;
                }
            }
        } ]), PixelHitTestData;
    }();
    t.PixelHitTestData = i;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function UBBParser() {
            _classCallCheck(this, UBBParser), this._readPos = 0, this.defaultImgWidth = 0, this.defaultImgHeight = 0, 
            this._handlers = {}, this._handlers.url = this.onTag_URL, this._handlers.img = this.onTag_IMG, 
            this._handlers.b = this.onTag_B, this._handlers.i = this.onTag_I, this._handlers.u = this.onTag_U, 
            this._handlers.sup = this.onTag_Simple, this._handlers.sub = this.onTag_Simple, 
            this._handlers.color = this.onTag_COLOR, this._handlers.font = this.onTag_FONT, 
            this._handlers.size = this.onTag_SIZE;
        }
        return _createClass(UBBParser, [ {
            key: "onTag_URL",
            value: function(t, e, i) {
                return e ? "</a>" : null != i ? '<a href="' + i + '" target="_blank">' : '<a href="' + this.getTagText() + '" target="_blank">';
            }
        }, {
            key: "onTag_IMG",
            value: function(t, e, i) {
                if (e) return null;
                var s = this.getTagText(!0);
                return s ? this.defaultImgWidth ? '<img src="' + s + '" width="' + this.defaultImgWidth + '" height="' + this.defaultImgHeight + '"/>' : '<img src="' + s + '"/>' : null;
            }
        }, {
            key: "onTag_B",
            value: function(t, e, i) {
                return e ? "</span>" : "<span style='font-weight:bold'>";
            }
        }, {
            key: "onTag_I",
            value: function(t, e, i) {
                return e ? "</span>" : "<span style='font-style:italic'>";
            }
        }, {
            key: "onTag_U",
            value: function(t, e, i) {
                return e ? "</span>" : "<span style='text-decoration:underline'>";
            }
        }, {
            key: "onTag_Simple",
            value: function(t, e, i) {
                return e ? "</" + t + ">" : "<" + t + ">";
            }
        }, {
            key: "onTag_COLOR",
            value: function(t, e, i) {
                return e ? "</span>" : (this.lastColor = i, '<span style="color:' + i + '">');
            }
        }, {
            key: "onTag_FONT",
            value: function(t, e, i) {
                return e ? "</span>" : '<span style="font-family:' + i + '">';
            }
        }, {
            key: "onTag_SIZE",
            value: function(t, e, i) {
                return e ? "</span>" : (this.lastSize = i, '<span style="font-size:' + i + '">');
            }
        }, {
            key: "getTagText",
            value: function() {
                for (var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = this._readPos, s = ""; -1 != (t = this._text.indexOf("[", i)); ) {
                    if (92 != this._text.charCodeAt(t - 1)) {
                        s += this._text.substring(i, t);
                        break;
                    }
                    s += this._text.substring(i, t - 1), s += "[", i = t + 1;
                }
                return -1 == t ? null : (e && (this._readPos = t), s);
            }
        }, {
            key: "parse",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._text = t, this.lastColor = null, this.lastSize = null;
                for (var i, s, n, a, o, r, l, h = 0, u = ""; -1 != (i = this._text.indexOf("[", h)); ) if (i > 0 && 92 == this._text.charCodeAt(i - 1)) u += this._text.substring(h, i - 1), 
                u += "[", h = i + 1; else {
                    if (u += this._text.substring(h, i), h = i, -1 == (i = this._text.indexOf("]", h))) break;
                    n = "/" == this._text.charAt(h + 1), a = this._text.substring(n ? h + 2 : h + 1, i), 
                    this._readPos = i + 1, o = null, r = null, -1 != (s = a.indexOf("=")) && (o = a.substring(s + 1), 
                    a = a.substring(0, s)), a = a.toLowerCase(), null != (l = this._handlers[a]) ? e || null != (r = l.call(this, a, n, o)) && (u += r) : u += this._text.substring(h, this._readPos), 
                    h = this._readPos;
                }
                return h < this._text.length && (u += this._text.substr(h)), this._text = null, 
                u;
            }
        } ]), UBBParser;
    }();
    e.inst = new e(), t.UBBParser = e;
}(fgui || (fgui = {})), function(t) {
    var e = function() {
        function ToolSet() {
            _classCallCheck(this, ToolSet);
        }
        return _createClass(ToolSet, null, [ {
            key: "getFileName",
            value: function(t) {
                var e = t.lastIndexOf("/");
                return -1 != e && (t = t.substr(e + 1)), -1 != (e = t.lastIndexOf("\\")) && (t = t.substr(e + 1)), 
                -1 != (e = t.lastIndexOf(".")) ? t.substring(0, e) : t;
            }
        }, {
            key: "startsWith",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !!t && (!(t.length < e.length) && (t = t.substring(0, e.length), i ? t.toLowerCase() == e.toLowerCase() : t == e));
            }
        }, {
            key: "endsWith",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !!t && (!(t.length < e.length) && (t = t.substring(t.length - e.length), 
                i ? t.toLowerCase() == e.toLowerCase() : t == e));
            }
        }, {
            key: "trim",
            value: function(t) {
                return ToolSet.trimLeft(ToolSet.trimRight(t));
            }
        }, {
            key: "trimLeft",
            value: function(t) {
                for (var e = "", i = 0; i < t.length && (" " == (e = t.charAt(i)) || "\n" == e || "\r" == e); i++) ;
                return t.substr(i);
            }
        }, {
            key: "trimRight",
            value: function(t) {
                for (var e = "", i = t.length - 1; i >= 0 && (" " == (e = t.charAt(i)) || "\n" == e || "\r" == e); i--) ;
                return t.substring(0, i + 1);
            }
        }, {
            key: "convertToHtmlColor",
            value: function(t) {
                var e;
                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (t >> 24 & 255).toString(16) : "";
                var i = (t >> 16 & 255).toString(16), s = (t >> 8 & 255).toString(16), n = (255 & t).toString(16);
                return 1 == e.length && (e = "0" + e), 1 == i.length && (i = "0" + i), 1 == s.length && (s = "0" + s), 
                1 == n.length && (n = "0" + n), "#" + e + i + s + n;
            }
        }, {
            key: "convertFromHtmlColor",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t.length < 1 ? 0 : ("#" == t.charAt(0) && (t = t.substr(1)), 8 == t.length ? (parseInt(t.substr(0, 2), 16) << 24) + parseInt(t.substr(2), 16) : e ? 4278190080 + parseInt(t, 16) : parseInt(t, 16));
            }
        }, {
            key: "displayObjectToGObject",
            value: function(t) {
                for (;null != t && !(t instanceof Laya.Stage); ) {
                    if (t.$owner) return t.$owner;
                    t = t.parent;
                }
                return null;
            }
        }, {
            key: "encodeHTML",
            value: function(t) {
                return t ? t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;") : "";
            }
        }, {
            key: "parseUBB",
            value: function(t) {
                return ToolSet.defaultUBBParser.parse(t);
            }
        }, {
            key: "removeUBB",
            value: function(t) {
                return ToolSet.defaultUBBParser.parse(t, !0);
            }
        }, {
            key: "clamp",
            value: function(t, e, i) {
                return t < e ? t = e : t > i && (t = i), t;
            }
        }, {
            key: "clamp01",
            value: function(t) {
                return isNaN(t) ? t = 0 : t > 1 ? t = 1 : t < 0 && (t = 0), t;
            }
        }, {
            key: "lerp",
            value: function(t, e, i) {
                return t + i * (e - t);
            }
        }, {
            key: "repeat",
            value: function(t, e) {
                return t - Math.floor(t / e) * e;
            }
        }, {
            key: "distance",
            value: function(t, e, i, s) {
                return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - s, 2));
            }
        }, {
            key: "setColorFilter",
            value: function(e, i) {
                var s, n, a = e.$_colorFilter_, o = e.filters, r = _typeof(i);
                if ("boolean" == r) s = a ? a.$_color_ : null, n = i; else {
                    if ("string" == r) {
                        var l = Laya.ColorUtils.create(i).arrColor;
                        i = 1 == l[0] && 1 == l[1] && 1 == l[2] ? null : [ l[0], 0, 0, 0, 0, 0, l[1], 0, 0, 0, 0, 0, l[2], 0, 0, 0, 0, 0, 1, 0 ];
                    }
                    s = i, n = !!a && a.$_grayed_;
                }
                if (s || 0 == s || n) {
                    if (a || (a = new Laya.ColorFilter(), e.$_colorFilter_ = a), o) -1 == o.indexOf(a) && o.push(a); else o = [ a ];
                    e.filters = o, a.$_color_ = s, a.$_grayed_ = n, a.reset(), n ? a.gray() : 20 == s.length ? a.setByMatrix(s) : a.setByMatrix(t.ColorMatrix.getMatrix(s[0], s[1], s[2], s[3]));
                } else if (o && a) {
                    var h = o.indexOf(a);
                    -1 != h && (o.splice(h, 1), o.length > 0 ? e.filters = o : e.filters = null);
                }
            }
        } ]), ToolSet;
    }();
    e.defaultUBBParser = new t.UBBParser(), t.ToolSet = e;
}(fgui || (fgui = {}));