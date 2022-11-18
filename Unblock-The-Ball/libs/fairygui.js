!function() {
    "use strict";
    var t, e, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, n = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
        }
        if ("value" in s) return s.value;
        var a = s.get;
        return void 0 !== a ? a.call(n) : void 0;
    }, s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
        };
    }();
    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    window.fgui = {}, window.fairygui = window.fgui, t = fgui || (fgui = {}), e = function() {
        function t() {
            r(this, t), this._asset = Laya.loader;
        }
        return s(t, [ {
            key: "getRes",
            value: function(t) {
                return this._asset.getRes(t);
            }
        }, {
            key: "load",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                this._asset.load(t, e, i, n, s, o);
            }
        }, {
            key: "setAsset",
            value: function(t) {
                this._asset = t;
            }
        } ], [ {
            key: "inst",
            get: function() {
                return null == t._inst && (t._inst = new t()), t._inst;
            }
        } ]), t;
    }(), t.AssetProxy = e, function(t) {
        var e = function() {
            function e() {
                r(this, e), this._itemList = new Array(), this._objectPool = [];
            }
            return s(e, [ {
                key: "createObject",
                value: function(e, i) {
                    var n = t.UIPackage.getByName(e);
                    if (!n) throw new Error("namespace sunnyboxs found: " + e);
                    var s = n.getItemByName(i);
                    if (!s) throw new Error("resource not found: " + i);
                    this.internalCreateObject(s);
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
                    var n = new i(e, t.ObjectType.Component);
                    n.childCount = this.collectComponentChildren(e), this._itemList.push(n), this._index = 0, 
                    Laya.timer.frameLoop(1, this, this.run);
                }
            }, {
                key: "collectComponentChildren",
                value: function(e) {
                    var n, s, o, a, r, h, l = e.rawData;
                    l.seek(0, 2);
                    var u = l.getInt16();
                    for (o = 0; o < u; o++) {
                        a = l.getInt16(), r = l.pos, l.seek(r, 0);
                        var _ = l.readByte(), c = l.readS(), d = l.readS();
                        l.pos = r, null != c ? (s = null != (h = null != d ? t.UIPackage.getById(d) : e.owner) ? h.getItemById(c) : null, 
                        n = new i(s, _), null != s && s.type == t.PackageItemType.Component && (n.childCount = this.collectComponentChildren(s))) : (n = new i(null, _), 
                        _ == t.ObjectType.List && (n.listItemCount = this.collectListChildren(l))), this._itemList.push(n), 
                        l.pos = r + a;
                    }
                    return u;
                }
            }, {
                key: "collectListChildren",
                value: function(e) {
                    e.seek(e.pos, 8);
                    var n, s, o, a, r, h = 0, l = e.readS(), u = e.getInt16();
                    for (n = 0; n < u; n++) s = e.getInt16(), s += e.pos, null == (o = e.readS()) && (o = l), 
                    o && null != (a = t.UIPackage.getItemByURL(o)) && (r = new i(a, a.objectType), a.type == t.PackageItemType.Component && (r.childCount = this.collectComponentChildren(a)), 
                    this._itemList.push(r), h++), e.pos = s;
                    return h;
                }
            }, {
                key: "run",
                value: function() {
                    for (var e, i, n, s, o = Laya.Browser.now(), a = t.UIConfig.frameTimeForAsyncUIConstruction, r = this._itemList.length; this._index < r; ) {
                        if (null != (i = this._itemList[this._index]).packageItem) (e = t.UIObjectFactory.newObject(i.packageItem)).packageItem = i.packageItem, 
                        this._objectPool.push(e), t.UIPackage._constructing++, i.packageItem.type == t.PackageItemType.Component ? (n = this._objectPool.length - i.childCount - 1, 
                        e.constructFromResource2(this._objectPool, n), this._objectPool.splice(n, i.childCount)) : e.constructFromResource(), 
                        t.UIPackage._constructing--; else if (e = t.UIObjectFactory.newObject2(i.type), 
                        this._objectPool.push(e), i.type == t.ObjectType.List && i.listItemCount > 0) {
                            for (n = this._objectPool.length - i.listItemCount - 1, s = 0; s < i.listItemCount; s++) e.itemPool.returnObject(this._objectPool[s + n]);
                            this._objectPool.splice(n, i.listItemCount);
                        }
                        if (this._index++, this._index % 5 == 0 && Laya.Browser.now() - o >= a) return;
                    }
                    Laya.timer.clear(this, this.run);
                    var h = this._objectPool[0];
                    this._itemList.length = 0, this._objectPool.length = 0, null != this.callback && this.callback.runWith(h);
                }
            } ]), e;
        }();
        t.AsyncOperation = e;
        var i = function t(e, i) {
            r(this, t), this.packageItem = e, this.type = i;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._selectedIndex = 0, t._previousIndex = 0, t.changing = !1, t._pageIds = [], 
                t._pageNames = [], t._selectedIndex = -1, t._previousIndex = -1, t;
            }
            return a(i, Laya.EventDispatcher), s(i, [ {
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
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], this.addPageAt(this.name, this._pageIds.length);
                }
            }, {
                key: "addPageAt",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = "" + i._nextPageId++;
                    e == this._pageIds.length ? (this._pageIds.push(n), this._pageNames.push(this.name)) : (this._pageIds.splice(e, 0, n), 
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
                    var i, n, s = e.pos;
                    e.seek(s, 0), this.name = e.readS(), this.autoRadioGroupDepth = e.readBool(), e.seek(s, 1);
                    var o = e.getInt16();
                    for (i = 0; i < o; i++) this._pageIds.push(e.readS()), this._pageNames.push(e.readS());
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
                    if (e.seek(s, 2), (o = e.getInt16()) > 0) for (null == this._actions && (this._actions = []), 
                    i = 0; i < o; i++) {
                        n = e.getInt16(), n += e.pos;
                        var r = t.ControllerAction.createAction(e.readByte());
                        r.setup(e), this._actions.push(r), e.pos = n;
                    }
                    null != this.parent && this._pageIds.length > 0 ? this._selectedIndex = a : this._selectedIndex = -1;
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
            } ]), i;
        }();
        e._nextPageId = 0, t.Controller = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e), this._agent = new t.GLoader(), this._agent.draggable = !0, this._agent.touchable = !1, 
                this._agent.setSize(100, 100), this._agent.setPivot(.5, .5, !0), this._agent.align = "center", 
                this._agent.verticalAlign = "middle", this._agent.sortingOrder = 1e6, this._agent.on(t.Events.DRAG_END, this, this.__dragEnd);
            }
            return s(e, [ {
                key: "startDrag",
                value: function(e, i, n) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (null == this._agent.parent) {
                        this._sourceData = n, this._agent.url = i, t.GRoot.inst.addChild(this._agent);
                        var o = t.GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                        this._agent.setXY(o.x, o.y), this._agent.startDrag(s);
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
                        for (var n = t.GObject.cast(e.target); null != n; ) {
                            if (n.displayObject.hasListener(t.Events.DROP)) return n.requestFocus(), void n.displayObject.event(t.Events.DROP, [ i, t.Events.createEvent(t.Events.DROP, n.displayObject, e) ]);
                            n = n.parent;
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
                    return null == e._inst && (e._inst = new e()), e._inst;
                }
            } ]), e;
        }();
        t.DragDropManager = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t() {
                r(this, t);
            }
            return s(t, null, [ {
                key: "createEvent",
                value: function(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return t.$event.setTo(e, i, n ? n.target : i), n ? (t.$event.touchId = n.touchId, 
                    t.$event.nativeEvent = n.nativeEvent) : t.$event.nativeEvent = null, t.$event._stoped = !1, 
                    t.$event;
                }
            }, {
                key: "dispatch",
                value: function(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    i.event(e, t.createEvent(e, i, n));
                }
            } ]), t;
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
            function e() {
                r(this, e), this._x = 0, this._y = 0, this._alpha = 1, this._rotation = 0, this._visible = !0, 
                this._touchable = !0, this._grayed = !1, this._draggable = !1, this._scaleX = 1, 
                this._scaleY = 1, this._skewX = 0, this._skewY = 0, this._pivotX = 0, this._pivotY = 0, 
                this._pivotAsAnchor = !1, this._pivotOffsetX = 0, this._pivotOffsetY = 0, this._sortingOrder = 0, 
                this._internalVisible = !0, this._handlingController = !1, this._focusable = !1, 
                this._pixelSnapping = !1, this._yOffset = 0, this.minWidth = 0, this.minHeight = 0, 
                this.maxWidth = 0, this.maxHeight = 0, this.sourceWidth = 0, this.sourceHeight = 0, 
                this.initWidth = 0, this.initHeight = 0, this._width = 0, this._height = 0, this._rawWidth = 0, 
                this._rawHeight = 0, this._sizePercentInGroup = 0, this._id = "" + e._gInstanceCounter++, 
                this._name = "", this.createDisplayObject(), this._relations = new t.Relations(this), 
                this._gears = new Array(10);
            }
            return s(e, [ {
                key: "setXY",
                value: function(i, n) {
                    if (this._x != i || this._y != n) {
                        var s = i - this._x, o = n - this._y;
                        this._x = i, this._y = n, this.handleXYChanged(), this instanceof t.GGroup && this.moveChildren(s, o), 
                        this.updateGear(1), !this._parent || this._parent instanceof t.GList || (this._parent.setBoundsChangedFlag(), 
                        null != this._group && this._group.setBoundsChangedFlag(!0), this.displayObject.event(t.Events.XY_CHANGED)), 
                        e.draggingObject != this || e.sUpdateInDragging || this.localToGlobalRect(0, 0, this.width, this.height, e.sGlobalRect);
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this._rawWidth != e || this._rawHeight != i) {
                        this._rawWidth = e, this._rawHeight = i, e < this.minWidth && (e = this.minWidth), 
                        i < this.minHeight && (i = this.minHeight), this.maxWidth > 0 && e > this.maxWidth && (e = this.maxWidth), 
                        this.maxHeight > 0 && i > this.maxHeight && (i = this.maxHeight);
                        var s = e - this._width, o = i - this._height;
                        this._width = e, this._height = i, this.handleSizeChanged(), 0 == this._pivotX && 0 == this._pivotY || (this._pivotAsAnchor ? this.applyPivot() : (n || this.setXY(this.x - this._pivotX * s, this.y - this._pivotY * o), 
                        this.updatePivotOffset())), this instanceof t.GGroup && this.resizeChildren(s, o), 
                        this.updateGear(2), this._parent && (this._relations.onOwnerSizeChanged(s, o, this._pivotAsAnchor || !n), 
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
                        e.sHelperPoint.x = this._pivotX * this._width, e.sHelperPoint.y = this._pivotY * this._height;
                        var t = this._displayObject.transform.transformPoint(e.sHelperPoint);
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
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this._displayObject.on(t, e, i, n);
                }
            }, {
                key: "off",
                value: function(t, e, i) {
                    this._displayObject.off(t, e, i);
                }
            }, {
                key: "startDrag",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], null != this._displayObject.stage && this.dragBegin();
                }
            }, {
                key: "stopDrag",
                value: function() {
                    this.dragEnd();
                }
            }, {
                key: "localToGlobal",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this._pivotAsAnchor && (t += this._pivotX * this._width, i += this._pivotY * this._height), 
                    n ? (n.x = t, n.y = i, this._displayObject.localToGlobal(n, !1)) : ((n = e.sHelperPoint).x = t, 
                    n.y = i, this._displayObject.localToGlobal(n, !0));
                }
            }, {
                key: "globalToLocal",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return n ? (n.x = t, n.y = i, this._displayObject.globalToLocal(n, !1)) : ((n = e.sHelperPoint).x = t, 
                    n.y = i, n = this._displayObject.globalToLocal(n, !0)), this._pivotAsAnchor && (n.x -= this._pivotX * this._width, 
                    n.y -= this._pivotY * this._height), n;
                }
            }, {
                key: "localToGlobalRect",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    null == s && (s = new Laya.Rectangle());
                    var o = this.localToGlobal(t, e);
                    return s.x = o.x, s.y = o.y, o = this.localToGlobal(t + i, e + n), s.width = o.x - s.x, 
                    s.height = o.y - s.y, s;
                }
            }, {
                key: "globalToLocalRect",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    null == s && (s = new Laya.Rectangle());
                    var o = this.globalToLocal(t, e);
                    return s.x = o.x, s.y = o.y, o = this.globalToLocal(t + i, e + n), s.width = o.x - s.x, 
                    s.height = o.y - s.y, s;
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
                    var n, s;
                    e.seek(i, 0), e.skip(5), this._id = e.readS(), this._name = e.readS(), n = e.getInt32(), 
                    s = e.getInt32(), this.setXY(n, s), e.readBool() && (this.initWidth = e.getInt32(), 
                    this.initHeight = e.getInt32(), this.setSize(this.initWidth, this.initHeight, !0)), 
                    e.readBool() && (this.minWidth = e.getInt32(), this.maxWidth = e.getInt32(), this.minHeight = e.getInt32(), 
                    this.maxHeight = e.getInt32()), e.readBool() && (n = e.getFloat32(), s = e.getFloat32(), 
                    this.setScale(n, s)), e.readBool() && (n = e.getFloat32(), s = e.getFloat32(), this.setSkew(n, s)), 
                    e.readBool() && (n = e.getFloat32(), s = e.getFloat32(), this.setPivot(n, s, e.readBool())), 
                    1 != (n = e.getFloat32()) && (this.alpha = n), 0 != (n = e.getFloat32()) && (this.rotation = n), 
                    e.readBool() || (this.visible = !1), e.readBool() || (this.touchable = !1), e.readBool() && (this.grayed = !0), 
                    2 == e.readByte() && (this.blendMode = "lighter"), 1 == e.readByte() && t.ToolSet.setColorFilter(this._displayObject, [ e.getFloat32(), e.getFloat32(), e.getFloat32(), e.getFloat32() ]);
                    var o = e.readS();
                    null != o && (this.data = o);
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    t.seek(e, 1);
                    var i = t.readS();
                    null != i && (this.tooltips = i);
                    var n = t.getInt16();
                    n >= 0 && (this.group = this.parent.getChildAt(n)), t.seek(e, 2);
                    for (var s = t.getInt16(), o = 0; o < s; o++) {
                        var a = t.getInt16();
                        a += t.pos, this.getGear(t.readByte()).setup(t), t.pos = a;
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
                    null != e.draggingObject && e.draggingObject.stopDrag(), e.sGlobalDragStart.x = Laya.stage.mouseX, 
                    e.sGlobalDragStart.y = Laya.stage.mouseY, this.localToGlobalRect(0, 0, this.width, this.height, e.sGlobalRect), 
                    e.draggingObject = this, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving2), 
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end2);
                }
            }, {
                key: "dragEnd",
                value: function() {
                    e.draggingObject == this && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__moving2), 
                    Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__end2), e.draggingObject = null), 
                    e.sDraggingQuery = !1;
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
                value: function(i) {
                    var n = t.UIConfig.touchDragSensitivity;
                    null != this._touchDownPoint && Math.abs(this._touchDownPoint.x - Laya.stage.mouseX) < n && Math.abs(this._touchDownPoint.y - Laya.stage.mouseY) < n || (this.reset(), 
                    e.sDraggingQuery = !0, t.Events.dispatch(t.Events.DRAG_START, this._displayObject, i), 
                    e.sDraggingQuery && this.dragBegin());
                }
            }, {
                key: "__moving2",
                value: function(i) {
                    var n = Laya.stage.mouseX - e.sGlobalDragStart.x + e.sGlobalRect.x, s = Laya.stage.mouseY - e.sGlobalDragStart.y + e.sGlobalRect.y;
                    if (null != this._dragBounds) {
                        var o = t.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, e.sDragHelperRect);
                        n < o.x ? n = o.x : n + e.sGlobalRect.width > o.right && (n = o.right - e.sGlobalRect.width) < o.x && (n = o.x), 
                        s < o.y ? s = o.y : s + e.sGlobalRect.height > o.bottom && (s = o.bottom - e.sGlobalRect.height) < o.y && (s = o.y);
                    }
                    e.sUpdateInDragging = !0;
                    var a = this.parent.globalToLocal(n, s, e.sHelperPoint);
                    this.setXY(Math.round(a.x), Math.round(a.y)), e.sUpdateInDragging = !1, t.Events.dispatch(t.Events.DRAG_MOVE, this._displayObject, i);
                }
            }, {
                key: "__end2",
                value: function(i) {
                    e.draggingObject == this && (this.stopDrag(), t.Events.dispatch(t.Events.DRAG_END, this._displayObject, i));
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
                    return e.draggingObject == this;
                }
            } ], [ {
                key: "cast",
                value: function(t) {
                    return t.$owner;
                }
            } ]), e;
        }();
        e._gInstanceCounter = 0, e.sGlobalDragStart = new Laya.Point(), e.sGlobalRect = new Laya.Rectangle(), 
        e.sHelperPoint = new Laya.Point(), e.sDragHelperRect = new Laya.Rectangle(), t.GObject = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._gearColor = new t.GearColor(e), e;
            }
            return a(i, t.GObject), s(i, [ {
                key: "updateAutoSize",
                value: function() {}
            }, {
                key: "parseTemplate",
                value: function(t) {
                    for (var e, i, n, s, o = 0, a = ""; -1 != (e = t.indexOf("{", o)); ) if (e > 0 && 92 == t.charCodeAt(e - 1)) a += t.substring(o, e - 1), 
                    a += "{", o = e + 1; else {
                        if (a += t.substring(o, e), o = e, -1 == (e = t.indexOf("}", o))) break;
                        e != o + 1 ? (-1 != (i = (n = t.substring(o + 1, e)).indexOf("=")) ? a += null == (s = this._templateVars[n.substring(0, i)]) ? n.substring(i + 1) : s : null != (s = this._templateVars[n]) && (a += s), 
                        o = e + 1) : (a += t.substr(o, 2), o = e + 1);
                    }
                    return o < t.length && (a += t.substr(o)), a;
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleControllerChanged", this).call(this, t), 
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
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.color = s;
                        break;

                      case t.ObjectPropID.OutlineColor:
                        this.strokeColor = s;
                        break;

                      case t.ObjectPropID.FontSize:
                        this.fontSize = s;
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
                    }
                }
            }, {
                key: "setup_beforeAdd",
                value: function(t, e) {
                    var s;
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 5), this.font = t.readS(), this.fontSize = t.getInt16(), this.color = t.readColorS(), 
                    s = t.readByte(), this.align = 0 == s ? "left" : 1 == s ? "center" : "right", s = t.readByte(), 
                    this.valign = 0 == s ? "top" : 1 == s ? "middle" : "bottom", this.leading = t.getInt16(), 
                    this.letterSpacing = t.getInt16(), this.ubbEnabled = t.readBool(), this.autoSize = t.readByte(), 
                    this.underline = t.readBool(), this.italic = t.readBool(), this.bold = t.readBool(), 
                    this.singleLine = t.readBool(), t.readBool() && (this.strokeColor = t.readColorS(), 
                    this.stroke = t.getFloat32() + 1), t.readBool() && t.skip(12), t.readBool() && (this._templateVars = {});
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
                    t.seek(e, 6);
                    var s = t.readS();
                    null != s && (this.text = s);
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
            } ]), i;
        }();
        t.GTextField = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function l() {
                r(this, l);
                var e = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
                return e._letterSpacing = 0, e._textWidth = 0, e._textHeight = 0, e._text = "", 
                e._color = "#000000", e._textField.align = "left", e._textField.font = t.UIConfig.defaultFont, 
                e._autoSize = t.AutoSizeType.Both, e._widthAutoSize = e._heightAutoSize = !0, e._textField._sizeDirty = !1, 
                e;
            }
            return a(l, t.GTextField), s(l, [ {
                key: "createDisplayObject",
                value: function() {
                    this._displayObject = this._textField = new h(this), this._displayObject.$owner = this, 
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
                    var n, s = this.leading - 1, o = this.width - 2 * l.GUTTER_X, a = 0, r = 0, h = 0, u = 0, _ = 0, c = 0, d = 0, g = 0, p = 0, f = "", y = l.GUTTER_Y, v = !this._widthAutoSize && !this._singleLine, m = this.fontSize, w = this._bitmapFont.resizable ? m / this._bitmapFont.size : 1;
                    this._textWidth = 0, this._textHeight = 0;
                    var k = this._text;
                    null != this._templateVars && (k = this.parseTemplate(k));
                    for (var b = k.length, C = 0; C < b; ++C) {
                        var S = k.charAt(C), x = S.charCodeAt(0);
                        if (10 != x) {
                            if (x >= 65 && x <= 90 || x >= 97 && x <= 122 ? (0 == c && (d = a), c++) : (c > 0 && (g = a), 
                            c = 0), 32 == x) u = Math.ceil(m / 2), _ = m; else {
                                var I = this._bitmapFont.glyphs[S];
                                I ? (u = Math.ceil(I.advance * w), _ = Math.ceil(I.lineHeight * w)) : (u = 0, _ = 0);
                            }
                            if (_ > h && (h = _), _ > r && (r = _), 0 != a && (a += this._letterSpacing), a += u, 
                            !v || a <= o) f += S; else {
                                if ((n = i.borrow()).height = r, n.textHeight = h, 0 == f.length) n.text = S; else if (c > 0 && g > 0) {
                                    var T = (f += S).length - c;
                                    n.text = t.ToolSet.trimRight(f.substr(0, T)), n.width = g, f = f.substr(T), a -= d;
                                } else n.text = f, n.width = a - (u + this._letterSpacing), f = S, a = u, r = _, 
                                h = _;
                                n.y = y, y += n.height + s, n.width > this._textWidth && (this._textWidth = n.width), 
                                c = 0, d = 0, g = 0, this._lines.push(n);
                            }
                        } else f += S, (n = i.borrow()).width = a, 0 == h && (0 == p && (p = m), 0 == r && (r = p), 
                        h = r), n.height = r, p = r, n.textHeight = h, n.text = f, n.y = y, y += n.height + s, 
                        n.width > this._textWidth && (this._textWidth = n.width), this._lines.push(n), f = "", 
                        a = 0, r = 0, h = 0, c = 0, d = 0, g = 0;
                    }
                    f.length > 0 && ((n = i.borrow()).width = a, 0 == r && (r = p), 0 == h && (h = r), 
                    n.height = r, n.textHeight = h, n.text = f, n.y = y, n.width > this._textWidth && (this._textWidth = n.width), 
                    this._lines.push(n)), this._textWidth > 0 && (this._textWidth += 2 * l.GUTTER_X), 
                    0 == this._lines.length ? this._textHeight = 0 : (n = this._lines[this._lines.length - 1], 
                    this._textHeight = n.y + n.height + l.GUTTER_Y);
                    var O, P;
                    if (O = this._widthAutoSize ? 0 == this._textWidth ? 0 : this._textWidth : this.width, 
                    P = this._heightAutoSize ? 0 == this._textHeight ? 0 : this._textHeight : this.height, 
                    this._updatingSize = !0, this.setSize(O, P), this._updatingSize = !1, this.doAlign(), 
                    0 != O && 0 != P) {
                        var L = l.GUTTER_X, j = 0, B = 0;
                        o = this.width - 2 * l.GUTTER_X;
                        for (var M = this._lines.length, z = this._bitmapFont.tint ? this._color : null, E = 0; E < M; E++) {
                            n = this._lines[E], L = l.GUTTER_X, j = "center" == this.align ? (o - n.width) / 2 : "right" == this.align ? o - n.width : 0, 
                            b = n.text.length;
                            for (var A = 0; A < b; A++) 10 != (x = (S = n.text.charAt(A)).charCodeAt(0)) && (32 != x ? null != (I = this._bitmapFont.glyphs[S]) ? (B = (n.height + n.textHeight) / 2 - Math.ceil(I.lineHeight * w), 
                            I.texture && e.drawTexture(I.texture, L + j + Math.ceil(I.x * w), n.y + B + Math.ceil(I.y * w), I.xMax * w, I.yMax * w, null, 1, z), 
                            L += this._letterSpacing + Math.ceil(I.advance * w)) : L += this._letterSpacing : L += this._letterSpacing + Math.ceil(m / 2));
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
                    n(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "handleGrayedChanged", this).call(this), 
                    this.grayed ? this._textField.color = "#AAAAAA" : this._textField.color = this._color;
                }
            }, {
                key: "doAlign",
                value: function() {
                    if ("top" == this.valign || 0 == this._textHeight) this._yOffset = l.GUTTER_Y; else {
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
            } ]), l;
        }();
        e.GUTTER_X = 2, e.GUTTER_Y = 2, t.GBasicTextField = e;
        var i = function() {
            function t() {
                r(this, t), this.width = 0, this.height = 0, this.textHeight = 0, this.y = 0;
            }
            return s(t, null, [ {
                key: "borrow",
                value: function() {
                    if (t.pool.length) {
                        var e = t.pool.pop();
                        return e.width = 0, e.height = 0, e.textHeight = 0, e.text = null, e.y = 0, e;
                    }
                    return new t();
                }
            }, {
                key: "returns",
                value: function(e) {
                    t.pool.push(e);
                }
            }, {
                key: "returnList",
                value: function(e) {
                    for (var i = e.length, n = 0; n < i; n++) {
                        var s = e[n];
                        t.pool.push(s);
                    }
                    e.length = 0;
                }
            } ]), t;
        }();
        i.pool = [];
        var h = function(e) {
            function i(t) {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._owner = t, e;
            }
            return a(i, Laya.Text), s(i, [ {
                key: "baseTypeset",
                value: function() {
                    this._lock = !0, this.typeset(), this._lock = !1;
                }
            }, {
                key: "typeset",
                value: function() {
                    this._sizeDirty = !0, n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "typeset", this).call(this), 
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
                    this.event(t.Events.SIZE_DELAY_CHANGE)), function t(e, i, n, s) {
                        var o = Object.getOwnPropertyDescriptor(e, i);
                        if (void 0 === o) {
                            var a = Object.getPrototypeOf(e);
                            null !== a && t(a, i, n, s);
                        } else if ("value" in o && o.writable) o.value = n; else {
                            var r = o.set;
                            void 0 !== r && r.call(s, n);
                        }
                        return n;
                    }(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "isChanged", e, this);
                }
            } ]), i;
        }();
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t() {
                r(this, t), this.left = 0, this.right = 0, this.top = 0, this.bottom = 0;
            }
            return s(t, [ {
                key: "copy",
                value: function(t) {
                    this.top = t.top, this.bottom = t.bottom, this.left = t.left, this.right = t.right;
                }
            } ]), t;
        }();
        t.Margin = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._sortingChildCount = 0, e._mask = null, e._children = [], e._controllers = [], 
                e._transitions = [], e._margin = new t.Margin(), e._alignOffset = new Laya.Point(), 
                e._opaque = !1, e._childrenRenderOrder = 0, e._apexIndex = 0, e;
            }
            return a(i, t.GObject), s(i, [ {
                key: "createDisplayObject",
                value: function() {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "createDisplayObject", this).call(this), 
                    this._displayObject.mouseEnabled = !0, this._displayObject.mouseThrough = !0, this._container = this._displayObject;
                }
            }, {
                key: "dispose",
                value: function() {
                    var t, e;
                    for (e = this._transitions.length, t = 0; t < e; ++t) this._transitions[t].dispose();
                    for (e = this._controllers.length, t = 0; t < e; ++t) this._controllers[t].dispose();
                    for (null != this.scrollPane && this.scrollPane.dispose(), t = (e = this._children.length) - 1; t >= 0; --t) {
                        var s = this._children[t];
                        s.parent = null, s.dispose();
                    }
                    this._boundsChanged = !1, this._mask = null, n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispose", this).call(this);
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
                        var n = this._children[i];
                        if (n != t && t.sortingOrder < n.sortingOrder) break;
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
                        var n = this._children[e];
                        return n.parent = null, 0 != n.sortingOrder && this._sortingChildCount--, this._children.splice(e, 1), 
                        n.group = null, n.inContainer && (this._container.removeChild(n.displayObject), 
                        this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && Laya.timer.callLater(this, this.buildNativeDisplayList)), 
                        i && n.dispose(), this.setBoundsChangedFlag(), n;
                    }
                    throw "Invalid child index";
                }
            }, {
                key: "removeChildren",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments[2];
                    (e < 0 || e >= this._children.length) && (e = this._children.length - 1);
                    for (var n = t; n <= e; ++n) this.removeChildAt(t, i);
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
                    for (var e, n = t.split("."), s = n.length, o = this, a = 0; a < s && (e = o.getChild(n[a])); ++a) if (a != s - 1) {
                        if (!(o instanceof i)) {
                            e = null;
                            break;
                        }
                        o = e;
                    }
                    return e;
                }
            }, {
                key: "getVisibleChild",
                value: function(t) {
                    for (var e = this._children.length, i = 0; i < e; ++i) {
                        var n = this._children[i];
                        if (n.internalVisible && n.internalVisible2 && n.name == t) return n;
                    }
                    return null;
                }
            }, {
                key: "getChildInGroup",
                value: function(t, e) {
                    for (var i = this._children.length, n = 0; n < i; ++n) {
                        var s = this._children[n];
                        if (s.group == e && s.name == t) return s;
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
                        var n = this._children.length;
                        this._sortingChildCount > 0 && e > n - this._sortingChildCount - 1 && (e = n - this._sortingChildCount - 1), 
                        this._setChildIndex(t, i, e);
                    }
                }
            }, {
                key: "setChildIndexBefore",
                value: function(t, e) {
                    var i = this._children.indexOf(t);
                    if (-1 == i) throw "Not a child of this container";
                    if (0 != t.sortingOrder) return i;
                    var n = this._children.length;
                    return this._sortingChildCount > 0 && e > n - this._sortingChildCount - 1 && (e = n - this._sortingChildCount - 1), 
                    i < e ? this._setChildIndex(t, i, e - 1) : this._setChildIndex(t, i, e);
                }
            }, {
                key: "_setChildIndex",
                value: function(e, i, n) {
                    var s = this._children.length;
                    if (n > s && (n = s), i == n) return i;
                    if (this._children.splice(i, 1), this._children.splice(n, 0, e), e.inContainer) {
                        var o, a = 0;
                        if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                            for (o = 0; o < n; o++) this._children[o].inContainer && a++;
                            a == this._container.numChildren && a--, this._container.setChildIndex(e.displayObject, a);
                        } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                            for (o = s - 1; o > n; o--) this._children[o].inContainer && a++;
                            a == this._container.numChildren && a--, this._container.setChildIndex(e.displayObject, a);
                        } else Laya.timer.callLater(this, this.buildNativeDisplayList);
                        this.setBoundsChangedFlag();
                    }
                    return n;
                }
            }, {
                key: "swapChildren",
                value: function(t, e) {
                    var i = this._children.indexOf(t), n = this._children.indexOf(e);
                    if (-1 == i || -1 == n) throw "Not a child of this container";
                    this.swapChildrenAt(i, n);
                }
            }, {
                key: "swapChildrenAt",
                value: function(t, e) {
                    var i = this._children[t], n = this._children[e];
                    this.setChildIndex(i, e), this.setChildIndex(n, t);
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
                        var n = this._controllers[i];
                        if (n.name == t) return n;
                    }
                    return null;
                }
            }, {
                key: "removeController",
                value: function(t) {
                    var e = this._controllers.indexOf(t);
                    if (-1 == e) throw new Error("controller not exists");
                    t.parent = null, this._controllers.splice(e, 1);
                    for (var i = this._children.length, n = 0; n < i; n++) this._children[n].handleControllerChanged(t);
                }
            }, {
                key: "childStateChanged",
                value: function(e) {
                    if (!this._buildingDisplayList) {
                        var i = this._children.length;
                        if (e instanceof t.GGroup) for (var n = 0; n < i; n++) {
                            var s = this._children[n];
                            s.group == e && this.childStateChanged(s);
                        } else if (e.displayObject) if (e.internalVisible && e.displayObject != this._displayObject.mask) {
                            if (!e.displayObject.parent) {
                                var o = 0;
                                if (this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent) {
                                    for (n = 0; n < i && (s = this._children[n]) != e; n++) null != s.displayObject && null != s.displayObject.parent && o++;
                                    this._container.addChildAt(e.displayObject, o);
                                } else if (this._childrenRenderOrder == t.ChildrenRenderOrder.Descent) {
                                    for (n = i - 1; n >= 0 && (s = this._children[n]) != e; n--) null != s.displayObject && null != s.displayObject.parent && o++;
                                    this._container.addChildAt(e.displayObject, o);
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
                        var e, i, n = this._children.length;
                        if (0 != n) switch (this._childrenRenderOrder) {
                          case t.ChildrenRenderOrder.Ascent:
                            for (e = 0; e < n; e++) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                            break;

                          case t.ChildrenRenderOrder.Descent:
                            for (e = n - 1; e >= 0; e--) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                            break;

                          case t.ChildrenRenderOrder.Arch:
                            var s = t.ToolSet.clamp(this._apexIndex, 0, n);
                            for (e = 0; e < s; e++) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
                            for (e = n - 1; e >= s; e--) null != (i = this._children[e]).displayObject && i.internalVisible && this._container.addChild(i.displayObject);
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
                    var n, s, o = this._children.length, a = -1, r = -1;
                    for (n = 0; n < o; n++) (s = this._children[n]) == e ? a = n : s instanceof t.GButton && s.relatedController == i && n > r && (r = n);
                    a < r && (null != this._applyingController && this._children[r].handleControllerChanged(this._applyingController), 
                    this.swapChildrenAt(a, r));
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
                        var n = this._transitions[i];
                        if (n.name == t) return n;
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSizeChanged", this).call(this), 
                    this._scrollPane ? this._scrollPane.onOwnerSizeChanged() : null != this._displayObject.scrollRect && this.updateMask(), 
                    null != this._displayObject.hitArea && this.updateHitArea();
                }
            }, {
                key: "handleGrayedChanged",
                value: function() {
                    var t = this.getController("grayed");
                    if (null == t) for (var e = this.grayed, i = this._children.length, n = 0; n < i; ++n) this._children[n].grayed = e; else t.selectedIndex = this.grayed ? 1 : 0;
                }
            }, {
                key: "handleControllerChanged",
                value: function(t) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleControllerChanged", this).call(this, t), 
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
                    var t = 0, e = 0, i = 0, n = 0, s = this._children.length;
                    if (s > 0) {
                        t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
                        var o = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY, r = 0, h = 0;
                        for (h = 0; h < s; h++) {
                            var l = this._children[h];
                            (r = l.x) < t && (t = r), (r = l.y) < e && (e = r), (r = l.x + l.actualWidth) > o && (o = r), 
                            (r = l.y + l.actualHeight) > a && (a = r);
                        }
                        i = o - t, n = a - e;
                    }
                    this.setBounds(t, e, i, n);
                }
            }, {
                key: "setBounds",
                value: function(t, e, i, n) {
                    this._boundsChanged = !1, this._scrollPane && this._scrollPane.setContentSize(Math.round(t + i), Math.round(e + n));
                }
            }, {
                key: "getSnappingPosition",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getSnappingPositionWithDir(t, e, 0, 0, i);
                }
            }, {
                key: "getSnappingPositionWithDir",
                value: function(t, e, i, n) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    s || (s = new Laya.Point());
                    var o = this._children.length;
                    if (0 == o) return s.x = 0, s.y = 0, s;
                    this.ensureBoundsCorrect();
                    var a = null, r = null, h = 0;
                    if (0 != e) {
                        for (;h < o; h++) if (e < (a = this._children[h]).y) {
                            if (0 == h) {
                                e = 0;
                                break;
                            }
                            e = e < (r = this._children[h - 1]).y + r.actualHeight / 2 ? r.y : a.y;
                            break;
                        }
                        h == o && (e = a.y);
                    }
                    if (0 != t) {
                        for (h > 0 && h--; h < o; h++) if (t < (a = this._children[h]).x) {
                            if (0 == h) {
                                t = 0;
                                break;
                            }
                            t = t < (r = this._children[h - 1]).x + r.actualWidth / 2 ? r.x : a.x;
                            break;
                        }
                        h == o && (t = a.x);
                    }
                    return s.x = t, s.y = e, s;
                }
            }, {
                key: "childSortingOrderChanged",
                value: function(t, e) {
                    if (0 == (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)) this._sortingChildCount--, 
                    this.setChildIndex(t, this._children.length); else {
                        0 == e && this._sortingChildCount++;
                        var i = this._children.indexOf(t), n = this.getInsertPosForSortingChild(t);
                        i < n ? this._setChildIndex(t, i, n - 1) : this._setChildIndex(t, i, n);
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
                    var n, s, o, a, r, h, l, u;
                    this.packageItem.decoded || (this.packageItem.decoded = !0, t.TranslationHelper.translateComponent(this.packageItem));
                    var _ = this.packageItem.rawData;
                    _.seek(0, 0), this._underConstruct = !0, this.sourceWidth = _.getInt32(), this.sourceHeight = _.getInt32(), 
                    this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), 
                    _.readBool() && (this.minWidth = _.getInt32(), this.maxWidth = _.getInt32(), this.minHeight = _.getInt32(), 
                    this.maxHeight = _.getInt32()), _.readBool() && (r = _.getFloat32(), h = _.getFloat32(), 
                    this.internalSetPivot(r, h, _.readBool())), _.readBool() && (this._margin.top = _.getInt32(), 
                    this._margin.bottom = _.getInt32(), this._margin.left = _.getInt32(), this._margin.right = _.getInt32());
                    var c = _.readByte();
                    if (c == t.OverflowType.Scroll) {
                        var d = _.pos;
                        _.seek(0, 7), this.setupScroll(_), _.pos = d;
                    } else this.setupOverflow(c);
                    _.readBool() && _.skip(8), this._buildingDisplayList = !0, _.seek(0, 1);
                    var g, p = _.getInt16();
                    for (n = 0; n < p; n++) {
                        a = _.getInt16(), a += _.pos;
                        var f = new t.Controller();
                        this._controllers.push(f), f.parent = this, f.setup(_), _.pos = a;
                    }
                    _.seek(0, 2);
                    var y = _.getInt16();
                    for (n = 0; n < y; n++) {
                        if (s = _.getInt16(), o = _.pos, null != e) g = e[i + n]; else {
                            _.seek(o, 0);
                            var v, m = _.readByte(), w = _.readS(), k = _.readS(), b = null;
                            null != w && (b = null != (v = null != k ? t.UIPackage.getById(k) : this.packageItem.owner) ? v.getItemById(w) : null), 
                            null != b ? ((g = t.UIObjectFactory.newObject(b)).packageItem = b, g.constructFromResource()) : g = t.UIObjectFactory.newObject2(m);
                        }
                        g._underConstruct = !0, g.setup_beforeAdd(_, o), g.parent = this, this._children.push(g), 
                        _.pos = o + s;
                    }
                    for (_.seek(0, 3), this.relations.setup(_, !0), _.seek(0, 2), _.skip(2), n = 0; n < y; n++) a = _.getInt16(), 
                    a += _.pos, _.seek(_.pos, 3), this._children[n].relations.setup(_, !1), _.pos = a;
                    for (_.seek(0, 2), _.skip(2), n = 0; n < y; n++) a = _.getInt16(), a += _.pos, (g = this._children[n]).setup_afterAdd(_, _.pos), 
                    g._underConstruct = !1, _.pos = a;
                    _.seek(0, 4), _.skip(2), this.opaque = _.readBool();
                    var C = _.getInt16();
                    -1 != C && this.setMask(this.getChildAt(C).displayObject, _.readBool());
                    var S, x = _.readS();
                    l = _.getInt32(), u = _.getInt32(), x ? (b = this.packageItem.owner.getItemById(x)) && b.pixelHitTestData && (S = new t.PixelHitTest(b.pixelHitTestData, l, u)) : 0 != l && -1 != u && (S = new t.ChildHitArea(this.getChildAt(u).displayObject)), 
                    S && (this._displayObject.hitArea = S, this._displayObject.mouseThrough = !1, this._displayObject.hitTestPrior = !0), 
                    _.seek(0, 5);
                    var I = _.getInt16();
                    for (n = 0; n < I; n++) {
                        a = _.getInt16(), a += _.pos;
                        var T = new t.Transition(this);
                        T.setup(_), this._transitions.push(T), _.pos = a;
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
                    t.seek(e, 4);
                    var s, o, a = t.getInt16();
                    for (-1 != a && null != this._scrollPane && (this._scrollPane.pageController = this._parent.getControllerAt(a)), 
                    s = t.getInt16(), o = 0; o < s; o++) {
                        var r = this.getController(t.readS()), h = t.readS();
                        r && (r.selectedPageId = h);
                    }
                    if (t.version >= 2) for (s = t.getInt16(), o = 0; o < s; o++) {
                        var l = t.readS(), u = t.getInt16(), _ = t.readS(), c = this.getChildByPath(l);
                        c && c.setProp(u, _);
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
            } ]), i;
        }();
        t.GComponent = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._soundVolumeScale = 0, e._downEffect = 0, e._downEffectValue = 0, e._downScaled = !1, 
                e._mode = t.ButtonMode.Common, e._title = "", e._icon = "", e._sound = t.UIConfig.buttonSound, 
                e._soundVolumeScale = t.UIConfig.buttonSoundVolumeScale, e._changeStateOnClick = !0, 
                e._downEffectValue = .8, e;
            }
            return a(i, t.GComponent), s(i, [ {
                key: "getTextField",
                value: function() {
                    return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel ? this._titleObject.getTextField() : this._titleObject instanceof i ? this._titleObject.getTextField() : null;
                }
            }, {
                key: "fireClick",
                value: function() {
                    (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && this._mode == t.ButtonMode.Common && (this.setState(i.OVER), 
                    Laya.timer.once(100, this, this.setState, [ i.DOWN ], !1), Laya.timer.once(200, this, this.setState, [ i.UP ], !1)), 
                    this.__click(t.Events.createEvent(Laya.Event.CLICK, this.displayObject));
                }
            }, {
                key: "setState",
                value: function(e) {
                    if (this._buttonController && (this._buttonController.selectedPage = e), 1 == this._downEffect) {
                        var n = this.numChildren;
                        if (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED) for (var s = 255 * this._downEffectValue, o = Laya.Utils.toHexColor((s << 16) + (s << 8) + s), a = 0; a < n; a++) {
                            var r = this.getChildAt(a);
                            r instanceof t.GTextField || r.setProp(t.ObjectPropID.Color, o);
                        } else for (a = 0; a < n; a++) (r = this.getChildAt(a)) instanceof t.GTextField || r.setProp(t.ObjectPropID.Color, "#FFFFFF");
                    } else 2 == this._downEffect && (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED ? this._downScaled || (this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue), 
                    this._downScaled = !0) : this._downScaled && (this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue), 
                    this._downScaled = !1));
                }
            }, {
                key: "handleControllerChanged",
                value: function(t) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleControllerChanged", this).call(this, t), 
                    this._relatedController == t && (this.selected = this._relatedPageId == t.selectedPageId);
                }
            }, {
                key: "handleGrayedChanged",
                value: function() {
                    this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.grayed ? this._selected && this._buttonController.hasPage(i.SELECTED_DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this._selected ? this.setState(i.DOWN) : this.setState(i.UP) : n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleGrayedChanged", this).call(this);
                }
            }, {
                key: "getProp",
                value: function(e) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        return this.titleColor;

                      case t.ObjectPropID.OutlineColor:
                        var s = this.getTextField();
                        return s ? s.strokeColor : 0;

                      case t.ObjectPropID.FontSize:
                        return this.titleFontSize;

                      case t.ObjectPropID.Selected:
                        return this.selected;

                      default:
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.titleColor = s;
                        break;

                      case t.ObjectPropID.OutlineColor:
                        var o = this.getTextField();
                        o && (o.strokeColor = s);
                        break;

                      case t.ObjectPropID.FontSize:
                        this.titleFontSize = s;
                        break;

                      case t.ObjectPropID.Selected:
                        this.selected = s;
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
                    }
                }
            }, {
                key: "constructExtension",
                value: function(e) {
                    e.seek(0, 6), this._mode = e.readByte();
                    var n = e.readS();
                    n && (this._sound = n), this._soundVolumeScale = e.getFloat32(), this._downEffect = e.readByte(), 
                    this._downEffectValue = e.getFloat32(), 2 == this._downEffect && this.setPivot(.5, .5, this.pivotAsAnchor), 
                    this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), 
                    this._iconObject = this.getChild("icon"), null != this._titleObject && (this._title = this._titleObject.text), 
                    null != this._iconObject && (this._icon = this._iconObject.icon), this._mode == t.ButtonMode.Common && this.setState(i.UP), 
                    this.on(Laya.Event.ROLL_OVER, this, this.__rollover), this.on(Laya.Event.ROLL_OUT, this, this.__rollout), 
                    this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown), this.on(Laya.Event.CLICK, this, this.__click);
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    var s, o;
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
                    t.seek(e, 6) && t.readByte() == this.packageItem.objectType && (null != (s = t.readS()) && (this.title = s), 
                    null != (s = t.readS()) && (this.selectedTitle = s), null != (s = t.readS()) && (this.icon = s), 
                    null != (s = t.readS()) && (this.selectedIcon = s), t.readBool() && (this.titleColor = t.readColorS()), 
                    0 != (o = t.getInt32()) && (this.titleFontSize = o), (o = t.getInt16()) >= 0 && (this._relatedController = this.parent.getControllerAt(o)), 
                    this._relatedPageId = t.readS(), null != (s = t.readS()) && (this._sound = s), t.readBool() && (this._soundVolumeScale = t.getFloat32()), 
                    this.selected = t.readBool());
                }
            }, {
                key: "__rollover",
                value: function() {
                    this._buttonController && this._buttonController.hasPage(i.OVER) && (this._over = !0, 
                    this._down || this.grayed && this._buttonController.hasPage(i.DISABLED) || this.setState(this._selected ? i.SELECTED_OVER : i.OVER));
                }
            }, {
                key: "__rollout",
                value: function() {
                    this._buttonController && this._buttonController.hasPage(i.OVER) && (this._over = !1, 
                    this._down || this.grayed && this._buttonController.hasPage(i.DISABLED) || this.setState(this._selected ? i.DOWN : i.UP));
                }
            }, {
                key: "__mousedown",
                value: function(e) {
                    this._down = !0, t.GRoot.inst.checkPopups(e.target), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup), 
                    this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DOWN)), 
                    null != this._linkedPopup && (this._linkedPopup instanceof t.Window ? this._linkedPopup.toggleStatus() : this.root.togglePopup(this._linkedPopup, this));
                }
            }, {
                key: "__mouseup",
                value: function() {
                    if (this._down) {
                        if (Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup), this._down = !1, 
                        null == this._displayObject) return;
                        this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.setState(i.DISABLED) : this._over ? this.setState(i.OVER) : this.setState(i.UP));
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
                        if (this._selected = e, this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this._selected ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this._selected ? this.setState(this._over ? i.SELECTED_OVER : i.DOWN) : this.setState(this._over ? i.OVER : i.UP), 
                        this._selectedTitle && this._titleObject && (this._titleObject.text = this._selected ? this._selectedTitle : this._title), 
                        this._selectedIcon) {
                            var n = this._selected ? this._selectedIcon : this._icon;
                            null != this._iconObject && (this._iconObject.icon = n);
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
            } ]), i;
        }();
        e.UP = "up", e.DOWN = "down", e.OVER = "over", e.SELECTED_OVER = "selectedOver", 
        e.DISABLED = "disabled", e.SELECTED_DISABLED = "selectedDisabled", t.GButton = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._visibleItemCount = t.UIConfig.defaultComboBoxVisibleItemCount, e._itemsUpdated = !0, 
                e._selectedIndex = -1, e._popupDirection = 0, e._items = [], e._values = [], e;
            }
            return a(i, t.GComponent), s(i, [ {
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleControllerChanged", this).call(this, t), 
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispose", this).call(this);
                }
            }, {
                key: "getProp",
                value: function(e) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        return this.titleColor;

                      case t.ObjectPropID.OutlineColor:
                        var s = this.getTextField();
                        return s ? s.strokeColor : 0;

                      case t.ObjectPropID.FontSize:
                        return (s = this.getTextField()) ? s.fontSize : 0;

                      default:
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.titleColor = s;
                        break;

                      case t.ObjectPropID.OutlineColor:
                        var o = this.getTextField();
                        o && (o.strokeColor = s);
                        break;

                      case t.ObjectPropID.FontSize:
                        (o = this.getTextField()) && (o.fontSize = s);
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
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
                    if (n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
                    t.seek(e, 6) && t.readByte() == this.packageItem.objectType) {
                        var s, o, a, r, h = t.getInt16();
                        for (s = 0; s < h; s++) a = t.getInt16(), a += t.pos, this._items[s] = t.readS(), 
                        this._values[s] = t.readS(), null != (r = t.readS()) && (null == this._icons && (this._icons = []), 
                        this._icons[s] = r), t.pos = a;
                        null != (r = t.readS()) ? (this.text = r, this._selectedIndex = this._items.indexOf(r)) : this._items.length > 0 ? (this._selectedIndex = 0, 
                        this.text = this._items[0]) : this._selectedIndex = -1, null != (r = t.readS()) && (this.icon = r), 
                        t.readBool() && (this.titleColor = t.readColorS()), (o = t.getInt32()) > 0 && (this._visibleItemCount = o), 
                        this._popupDirection = t.readByte(), (o = t.getInt16()) >= 0 && (this._selectionController = this.parent.getControllerAt(o));
                    }
                }
            }, {
                key: "showDropdown",
                value: function() {
                    if (this._itemsUpdated) {
                        this._itemsUpdated = !1, this._list.removeChildrenToPool();
                        for (var e = this._items.length, i = 0; i < e; i++) {
                            var n = this._list.addItemFromPool();
                            n.name = i < this._values.length ? this._values[i] : "", n.text = this._items[i], 
                            n.icon = null != this._icons && i < this._icons.length ? this._icons[i] : null;
                        }
                        this._list.resizeToFit(this._visibleItemCount);
                    }
                    this._list.selectedIndex = -1, this.dropdown.width = this.width, this._list.ensureBoundsCorrect();
                    var s = null;
                    this._popupDirection == t.PopupDirection.Down ? s = !0 : this._popupDirection == t.PopupDirection.Up && (s = !1), 
                    this.root.togglePopup(this.dropdown, this, s), this.dropdown.parent && this.setState(t.GButton.DOWN);
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
            } ]), i;
        }();
        t.GComboBox = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._type = 0, t._lineSize = 1, t._lineColor = "#000000", t._fillColor = "#FFFFFF", 
                t._cornerRadius = null, t._sides = 3, t._startAngle = 0, t;
            }
            return a(i, t.GObject), s(i, [ {
                key: "drawRect",
                value: function(t, e, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this._type = 1, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._cornerRadius = n, 
                    this.updateGraph();
                }
            }, {
                key: "drawEllipse",
                value: function(t, e, i) {
                    this._type = 2, this._lineSize = t, this._lineColor = e, this._fillColor = i, this.updateGraph();
                }
            }, {
                key: "drawRegularPolygon",
                value: function(t, e, i, n) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    this._type = 3, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._sides = n, 
                    this._startAngle = s, this._distances = o, this.updateGraph();
                }
            }, {
                key: "drawPolygon",
                value: function(t, e, i, n) {
                    this._type = 4, this._lineSize = t, this._lineColor = e, this._fillColor = i, this._polygonPoints = n, 
                    this.updateGraph();
                }
            }, {
                key: "updateGraph",
                value: function() {
                    this._displayObject.mouseEnabled = this.touchable;
                    var e = this._displayObject.graphics;
                    e.clear();
                    var i = this.width, n = this.height;
                    if (0 != i && 0 != n) {
                        var s = this._fillColor, o = this._lineColor;
                        if (t.ToolSet.startsWith(s, "rgba")) {
                            var a = s.substring(5, s.lastIndexOf(")")).split(","), r = parseFloat(a[3]);
                            0 == r ? s = null : (s = Laya.Utils.toHexColor((parseInt(a[0]) << 16) + (parseInt(a[1]) << 8) + parseInt(a[2])), 
                            this.alpha = r);
                        }
                        if (1 == this._type) if (null != this._cornerRadius) {
                            var h = [ [ "moveTo", this._cornerRadius[0], 0 ], [ "lineTo", i - this._cornerRadius[1], 0 ], [ "arcTo", i, 0, i, this._cornerRadius[1], this._cornerRadius[1] ], [ "lineTo", i, n - this._cornerRadius[3] ], [ "arcTo", i, n, i - this._cornerRadius[3], n, this._cornerRadius[3] ], [ "lineTo", this._cornerRadius[2], n ], [ "arcTo", 0, n, 0, n - this._cornerRadius[2], this._cornerRadius[2] ], [ "lineTo", 0, this._cornerRadius[0] ], [ "arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0] ], [ "closePath" ] ];
                            e.drawPath(0, 0, h, null != s ? {
                                fillStyle: s
                            } : null, this._lineSize > 0 ? {
                                strokeStyle: o,
                                lineWidth: this._lineSize
                            } : null);
                        } else e.drawRect(0, 0, i, n, s, this._lineSize > 0 ? o : null, this._lineSize); else if (2 == this._type) e.drawCircle(i / 2, n / 2, i / 2, s, this._lineSize > 0 ? o : null, this._lineSize); else if (3 == this._type) e.drawPoly(0, 0, this._polygonPoints, s, this._lineSize > 0 ? o : null, this._lineSize); else if (4 == this._type) {
                            this._polygonPoints || (this._polygonPoints = []);
                            var l = Math.min(this._width, this._height) / 2;
                            this._polygonPoints.length = 0;
                            for (var u, _ = Laya.Utils.toRadian(this._startAngle), c = 2 * Math.PI / this._sides, d = 0; d < this._sides; d++) {
                                this._distances ? (u = this._distances[d], isNaN(u) && (u = 1)) : u = 1;
                                var g = l + l * u * Math.cos(_), p = l + l * u * Math.sin(_);
                                this._polygonPoints.push(g, p), _ += c;
                            }
                            e.drawPoly(0, 0, this._polygonPoints, s, this._lineSize > 0 ? o : null, this._lineSize);
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "createDisplayObject", this).call(this), 
                    this._displayObject.mouseEnabled = !1, this._hitArea = new Laya.HitArea(), this._hitArea.hit = this._displayObject.graphics, 
                    this._displayObject.hitArea = this._hitArea;
                }
            }, {
                key: "getProp",
                value: function(e) {
                    return e == t.ObjectPropID.Color ? this.color : n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    e == t.ObjectPropID.Color ? this.color = s : n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
                }
            }, {
                key: "handleSizeChanged",
                value: function() {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSizeChanged", this).call(this), 
                    0 != this._type && this.updateGraph();
                }
            }, {
                key: "setup_beforeAdd",
                value: function(t, e) {
                    if (n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 5), this._type = t.readByte(), 0 != this._type) {
                        var s, o;
                        if (this._lineSize = t.getInt32(), this._lineColor = t.readColorS(!0), this._fillColor = t.readColorS(!0), 
                        t.readBool()) for (this._cornerRadius = [], s = 0; s < 4; s++) this._cornerRadius[s] = t.getFloat32();
                        if (3 == this._type) for (o = t.getInt16(), this._polygonPoints = [], this._polygonPoints.length = o, 
                        s = 0; s < o; s++) this._polygonPoints[s] = t.getFloat32(); else if (4 == this._type && (this._sides = t.getInt16(), 
                        this._startAngle = t.getFloat32(), (o = t.getInt16()) > 0)) for (this._distances = [], 
                        s = 0; s < o; s++) this._distances[s] = t.getFloat32();
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
            } ]), i;
        }();
        t.GGraph = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._layout = 0, t._lineGap = 0, t._columnGap = 0, t._mainGridIndex = -1, t._mainGridMinSize = 50, 
                t._mainChildIndex = -1, t._totalSize = 0, t._numChildren = 0, t._updating = 0, t;
            }
            return a(i, t.GObject), s(i, [ {
                key: "dispose",
                value: function() {
                    this._boundsChanged = !1, n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispose", this).call(this);
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
                    var t, e, i, n = this._parent.numChildren, s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, r = Number.NEGATIVE_INFINITY, h = !0;
                    for (t = 0; t < n; t++) (e = this._parent.getChildAt(t)).group != this || this._excludeInvisibles && !e.internalVisible3 || ((i = e.xMin) < s && (s = i), 
                    (i = e.yMin) < o && (o = i), (i = e.xMin + e.width) > a && (a = i), (i = e.yMin + e.height) > r && (r = i), 
                    h = !1);
                    var l = 0, u = 0;
                    h || (this._updating |= 1, this.setXY(s, o), this._updating &= 2, l = a - s, u = r - o), 
                    0 == (2 & this._updating) ? (this._updating |= 2, this.setSize(l, u), this._updating &= 1) : (this._updating &= 1, 
                    this.resizeChildren(this._width - l, this._height - u));
                }
            }, {
                key: "handleLayout",
                value: function() {
                    var e, i, n;
                    if (this._updating |= 1, this._layout == t.GroupLayoutType.Horizontal) {
                        var s = this.x;
                        for (n = this._parent.numChildren, i = 0; i < n; i++) (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.xMin = s, 
                        0 != e.width && (s += e.width + this._columnGap)));
                    } else if (this._layout == t.GroupLayoutType.Vertical) {
                        var o = this.y;
                        for (n = this._parent.numChildren, i = 0; i < n; i++) (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.yMin = o, 
                        0 != e.height && (o += e.height + this._lineGap)));
                    }
                    this._updating &= 2;
                }
            }, {
                key: "moveChildren",
                value: function(t, e) {
                    if (0 == (1 & this._updating) && null != this._parent) {
                        this._updating |= 1;
                        var i, n, s = this._parent.numChildren;
                        for (i = 0; i < s; i++) (n = this._parent.getChildAt(i)).group == this && n.setXY(n.x + t, n.y + e);
                        this._updating &= 2;
                    }
                }
            }, {
                key: "resizeChildren",
                value: function(e, i) {
                    if (this._layout != t.GroupLayoutType.None && 0 == (2 & this._updating) && null != this._parent) if (this._updating |= 2, 
                    !this._boundsChanged || (this._boundsChanged = !1, this._autoSizeDisabled)) {
                        var n, s, o = this._parent.numChildren;
                        if (!this._percentReady) {
                            this._percentReady = !0, this._numChildren = 0, this._totalSize = 0, this._mainChildIndex = -1;
                            var a = 0;
                            for (n = 0; n < o; n++) (s = this._parent.getChildAt(n)).group == this && (this._excludeInvisibles && !s.internalVisible3 || (a == this._mainGridIndex && (this._mainChildIndex = n), 
                            this._numChildren++, 1 == this._layout ? this._totalSize += s.width : this._totalSize += s.height), 
                            a++);
                            for (-1 != this._mainChildIndex && (1 == this._layout ? (s = this._parent.getChildAt(this._mainChildIndex), 
                            this._totalSize += this._mainGridMinSize - s.width, s._sizePercentInGroup = this._mainGridMinSize / this._totalSize) : (s = this._parent.getChildAt(this._mainChildIndex), 
                            this._totalSize += this._mainGridMinSize - s.height, s._sizePercentInGroup = this._mainGridMinSize / this._totalSize)), 
                            n = 0; n < o; n++) (s = this._parent.getChildAt(n)).group == this && n != this._mainChildIndex && (this._totalSize > 0 ? s._sizePercentInGroup = (1 == this._layout ? s.width : s.height) / this._totalSize : s._sizePercentInGroup = 0);
                        }
                        var r = 0, h = 1, l = !1;
                        if (1 == this._layout) {
                            r = this.width - (this._numChildren - 1) * this._columnGap, -1 != this._mainChildIndex && r >= this._totalSize && ((s = this._parent.getChildAt(this._mainChildIndex)).setSize(r - (this._totalSize - this._mainGridMinSize), s._rawHeight + i, !0), 
                            r -= s.width, h -= s._sizePercentInGroup, l = !0);
                            var u = this.x;
                            for (n = 0; n < o; n++) (s = this._parent.getChildAt(n)).group == this && (!this._excludeInvisibles || s.internalVisible3 ? (l && n == this._mainChildIndex || (s.setSize(Math.round(s._sizePercentInGroup / h * r), s._rawHeight + i, !0), 
                            h -= s._sizePercentInGroup, r -= s.width), s.xMin = u, 0 != s.width && (u += s.width + this._columnGap)) : s.setSize(s._rawWidth, s._rawHeight + i, !0));
                        } else {
                            r = this.height - (this._numChildren - 1) * this._lineGap, -1 != this._mainChildIndex && r >= this._totalSize && ((s = this._parent.getChildAt(this._mainChildIndex)).setSize(s._rawWidth + e, r - (this._totalSize - this._mainGridMinSize), !0), 
                            r -= s.height, h -= s._sizePercentInGroup, l = !0);
                            var _ = this.y;
                            for (n = 0; n < o; n++) (s = this._parent.getChildAt(n)).group == this && (!this._excludeInvisibles || s.internalVisible3 ? (l && n == this._mainChildIndex || (s.setSize(s._rawWidth + e, Math.round(s._sizePercentInGroup / h * r), !0), 
                            h -= s._sizePercentInGroup, r -= s.height), s.yMin = _, 0 != s.height && (_ += s.height + this._lineGap)) : s.setSize(s._rawWidth + e, s._rawHeight, !0));
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 5), this._layout = t.readByte(), this._lineGap = t.getInt32(), this._columnGap = t.getInt32(), 
                    t.version >= 2 && (this._excludeInvisibles = t.readBool(), this._autoSizeDisabled = t.readBool(), 
                    this._mainChildIndex = t.getInt16());
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
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
            } ]), i;
        }();
        t.GGroup = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._flip = 0, t;
            }
            return a(i, t.GObject), s(i, [ {
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleXYChanged", this).call(this), 
                    this._flip != t.FlipType.None && (-1 == this.scaleX && (this.image.x += this.width), 
                    -1 == this.scaleY && (this.image.y += this.height));
                }
            }, {
                key: "getProp",
                value: function(e) {
                    return e == t.ObjectPropID.Color ? this.color : n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    e == t.ObjectPropID.Color ? this.color = s : n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
                }
            }, {
                key: "setup_beforeAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
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
                        var i = 1, n = 1;
                        this._flip != t.FlipType.Horizontal && this._flip != t.FlipType.Both || (i = -1), 
                        this._flip != t.FlipType.Vertical && this._flip != t.FlipType.Both || (n = -1), 
                        this.setScale(i, n), this.handleXYChanged();
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
            } ]), i;
        }();
        t.GImage = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            }
            return a(i, t.GComponent), s(i, [ {
                key: "getTextField",
                value: function() {
                    return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof i ? this._titleObject.getTextField() : this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
                }
            }, {
                key: "getProp",
                value: function(e) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        return this.titleColor;

                      case t.ObjectPropID.OutlineColor:
                        var s = this.getTextField();
                        return s ? s.strokeColor : 0;

                      case t.ObjectPropID.FontSize:
                        return this.titleFontSize;

                      default:
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.titleColor = s;
                        break;

                      case t.ObjectPropID.OutlineColor:
                        var o = this.getTextField();
                        o && (o.strokeColor = s);
                        break;

                      case t.ObjectPropID.FontSize:
                        this.titleFontSize = s;
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
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
                    if (n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
                    t.seek(e, 6) && t.readByte() == this.packageItem.objectType) {
                        var s;
                        null != (s = t.readS()) && (this.title = s), null != (s = t.readS()) && (this.icon = s), 
                        t.readBool() && (this.titleColor = t.readColorS());
                        var o = t.getInt32();
                        if (0 != o && (this.titleFontSize = o), t.readBool()) {
                            var a = this.getTextField();
                            null != a ? (null != (s = t.readS()) && (a.promptText = s), null != (s = t.readS()) && (a.restrict = s), 
                            0 != (o = t.getInt32()) && (a.maxLength = o), 0 != (o = t.getInt32()) && (4 == o ? a.keyboardType = Laya.Input.TYPE_NUMBER : 3 == o && (a.keyboardType = Laya.Input.TYPE_URL)), 
                            t.readBool() && (a.password = !0)) : t.skip(13);
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
            } ]), i;
        }();
        t.GLabel = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function h() {
                r(this, h);
                var e = o(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this));
                return e._lineCount = 0, e._columnCount = 0, e._lineGap = 0, e._columnGap = 0, e._lastSelectedIndex = 0, 
                e._numItems = 0, e._firstIndex = 0, e._curLineItemCount = 0, e._virtualListChanged = 0, 
                e.itemInfoVer = 0, e._trackBounds = !0, e._pool = new t.GObjectPool(), e._layout = t.ListLayoutType.SingleColumn, 
                e._autoResizeItem = !0, e._lastSelectedIndex = -1, e._selectionMode = t.ListSelectionMode.Single, 
                e.opaque = !0, e.scrollItemToViewOnClick = !0, e._align = "left", e._verticalAlign = "top", 
                e._container = new Laya.Sprite(), e._displayObject.addChild(e._container), e;
            }
            return a(h, t.GComponent), s(h, [ {
                key: "dispose",
                value: function() {
                    this._pool.clear(), n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "dispose", this).call(this);
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
                    if (n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "addChildAt", this).call(this, e, i), 
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
                    var i = n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "removeChildAt", this).call(this, t);
                    return e ? i.dispose() : i.off(Laya.Event.CLICK, this, this.__clickItem), i;
                }
            }, {
                key: "removeChildToPoolAt",
                value: function(t) {
                    var e = n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "removeChildAt", this).call(this, t);
                    this.returnToPool(e);
                }
            }, {
                key: "removeChildToPool",
                value: function(t) {
                    n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "removeChild", this).call(this, t), 
                    this.returnToPool(t);
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
                        var n = this._virtualItems[i];
                        if (n.obj instanceof t.GButton && n.obj.selected || null == n.obj && n.selected) {
                            var s = i;
                            if (this._loop && (s = i % this._numItems, -1 != e.indexOf(s))) continue;
                            e.push(s);
                        }
                    } else {
                        var o = this._children.length;
                        for (i = 0; i < o; i++) {
                            var a = this._children[i].asButton;
                            null != a && a.selected && e.push(i);
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
                        var n = null;
                        if (this._virtual) {
                            var s = this._virtualItems[e];
                            null != s.obj && (n = s.obj.asButton), s.selected = !0;
                        } else n = this.getChildAt(e).asButton;
                        null == n || n.selected || (n.selected = !0, this.updateSelectionController(e));
                    }
                }
            }, {
                key: "removeSelection",
                value: function(e) {
                    if (this._selectionMode != t.ListSelectionMode.None) {
                        var i = null;
                        if (this._virtual) {
                            var n = this._virtualItems[e];
                            null != n.obj && (i = n.obj.asButton), n.selected = !1;
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
                        var n = this._children.length;
                        for (e = 0; e < n; e++) {
                            var s = this._children[e].asButton;
                            null != s && (s.selected = !1);
                        }
                    }
                }
            }, {
                key: "clearSelectionExcept",
                value: function(e) {
                    var i;
                    if (this._virtual) for (i = 0; i < this._realNumItems; i++) {
                        var n = this._virtualItems[i];
                        n.obj != e && (n.obj instanceof t.GButton && (n.obj.selected = !1), n.selected = !1);
                    } else {
                        var s = this._children.length;
                        for (i = 0; i < s; i++) {
                            var o = this._children[i].asButton;
                            null != o && o != e && (o.selected = !1);
                        }
                    }
                }
            }, {
                key: "selectAll",
                value: function() {
                    this.checkVirtualList();
                    var e, i = -1;
                    if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
                        var n = this._virtualItems[e];
                        n.obj instanceof t.GButton && !n.obj.selected && (n.obj.selected = !0, i = e), n.selected = !0;
                    } else {
                        var s = this._children.length;
                        for (e = 0; e < s; e++) {
                            var o = this._children[e].asButton;
                            null == o || o.selected || (o.selected = !0, i = e);
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
                        var n = this._virtualItems[e];
                        n.obj instanceof t.GButton && (n.obj.selected = !n.obj.selected, n.obj.selected && (i = e)), 
                        n.selected = !n.selected;
                    } else {
                        var s = this._children.length;
                        for (e = 0; e < s; e++) {
                            var o = this._children[e].asButton;
                            null != o && (o.selected = !o.selected, o.selected && (i = e));
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
                            for (var n = this._children[i], s = 0, o = i - 1; o >= 0; o--) {
                                var a = this._children[o];
                                if (a.y != n.y) {
                                    n = a;
                                    break;
                                }
                                s++;
                            }
                            for (;o >= 0; o--) if ((a = this._children[o]).y != n.y) {
                                this.clearSelection(), this.addSelection(o + s + 1, !0);
                                break;
                            }
                        }
                        break;

                      case 3:
                        if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) ++i < this.numItems && (this.clearSelection(), 
                        this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                            n = this._children[i], s = 0;
                            var r = this._children.length;
                            for (o = i + 1; o < r; o++) {
                                if ((a = this._children[o]).x != n.x) {
                                    n = a;
                                    break;
                                }
                                s++;
                            }
                            for (;o < r; o++) if ((a = this._children[o]).x != n.x) {
                                this.clearSelection(), this.addSelection(o - s - 1, !0);
                                break;
                            }
                        }
                        break;

                      case 5:
                        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) ++i < this.numItems && (this.clearSelection(), 
                        this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
                            for (n = this._children[i], s = 0, r = this._children.length, o = i + 1; o < r; o++) {
                                if ((a = this._children[o]).y != n.y) {
                                    n = a;
                                    break;
                                }
                                s++;
                            }
                            for (;o < r; o++) if ((a = this._children[o]).y != n.y) {
                                this.clearSelection(), this.addSelection(o - s - 1, !0);
                                break;
                            }
                        }
                        break;

                      case 7:
                        if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) --i >= 0 && (this.clearSelection(), 
                        this.addSelection(i, !0)); else if (this._layout == t.ListLayoutType.FlowVertical) {
                            for (n = this._children[i], s = 0, o = i - 1; o >= 0; o--) {
                                if ((a = this._children[o]).x != n.x) {
                                    n = a;
                                    break;
                                }
                                s++;
                            }
                            for (;o >= 0; o--) if ((a = this._children[o]).x != n.x) {
                                this.clearSelection(), this.addSelection(o + s + 1, !0);
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
                        var n = !1, s = e, o = this.childIndexToItemIndex(this.getChildIndex(e));
                        if (this._selectionMode == t.ListSelectionMode.Single) s.selected || (this.clearSelectionExcept(s), 
                        s.selected = !0); else if (i.shiftKey) {
                            if (!s.selected) if (-1 != this._lastSelectedIndex) {
                                var a, r = Math.min(this._lastSelectedIndex, o), h = Math.max(this._lastSelectedIndex, o);
                                if (h = Math.min(h, this.numItems - 1), this._virtual) for (a = r; a <= h; a++) {
                                    var l = this._virtualItems[a];
                                    l.obj instanceof t.GButton && (l.obj.selected = !0), l.selected = !0;
                                } else for (a = r; a <= h; a++) {
                                    var u = this.getChildAt(a).asButton;
                                    null != u && (u.selected = !0);
                                }
                                n = !0;
                            } else s.selected = !0;
                        } else i.ctrlKey || this._selectionMode == t.ListSelectionMode.Multiple_SingleClick ? s.selected = !s.selected : s.selected ? this.clearSelectionExcept(s) : (this.clearSelectionExcept(s), 
                        s.selected = !0);
                        n || (this._lastSelectedIndex = o), s.selected && this.updateSelectionController(o);
                    }
                }
            }, {
                key: "resizeToFit",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e6, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.ensureBoundsCorrect();
                    var n = this.numItems;
                    if (e > n && (e = n), this._virtual) Math.ceil(e / this._curLineItemCount), this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = this.lineCount * this._itemSize.y + Math.max(0, this.lineCount - 1) * this._lineGap : this.viewWidth = this.lineCount * this._itemSize.x + Math.max(0, this.lineCount - 1) * this._columnGap; else if (0 == e) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                        for (var s = e - 1, o = null; s >= 0 && (o = this.getChildAt(s), this.foldInvisibleItems && !o.visible); ) s--;
                        if (s < 0) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i; else {
                            var a = 0;
                            this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? ((a = o.y + o.height) < i && (a = i), 
                            this.viewHeight = a) : ((a = o.x + o.width) < i && (a = i), this.viewWidth = a);
                        }
                    }
                }
            }, {
                key: "getMaxItemWidth",
                value: function() {
                    for (var t = this._children.length, e = 0, i = 0; i < t; i++) {
                        var n = this.getChildAt(i);
                        n.width > e && (e = n.width);
                    }
                    return e;
                }
            }, {
                key: "handleSizeChanged",
                value: function() {
                    n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "handleSizeChanged", this).call(this), 
                    this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0);
                }
            }, {
                key: "handleControllerChanged",
                value: function(t) {
                    n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "handleControllerChanged", this).call(this, t), 
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
                value: function(e, i, n) {
                    return e < 0 && i > t.UIConfig.defaultScrollSnappingThreshold * n || e > 0 && i > (1 - t.UIConfig.defaultScrollSnappingThreshold) * n || 0 == e && i > n / 2;
                }
            }, {
                key: "getSnappingPositionWithDir",
                value: function(e, i, s, o) {
                    var a, r, l, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return this._virtual ? (u || (u = new Laya.Point()), this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (a = i, 
                    h.pos_param = i, r = this.getIndexOnPos1(!1), i = h.pos_param, r < this._virtualItems.length && r < this._realNumItems && (l = this._virtualItems[r].height, 
                    this.shouldSnapToNext(o, a - i, l) && (i += l + this._lineGap))) : this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical ? (a = e, 
                    h.pos_param = e, r = this.getIndexOnPos2(!1), e = h.pos_param, r < this._virtualItems.length && r < this._realNumItems && (l = this._virtualItems[r].width, 
                    this.shouldSnapToNext(s, a - e, l) && (e += l + this._columnGap))) : (a = e, h.pos_param = e, 
                    r = this.getIndexOnPos3(!1), e = h.pos_param, r < this._virtualItems.length && r < this._realNumItems && (l = this._virtualItems[r].width, 
                    this.shouldSnapToNext(s, a - e, l) && (e += l + this._columnGap))), u.x = e, u.y = i, 
                    u) : n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "getSnappingPositionWithDir", this).call(this, e, i, s, o, u);
                }
            }, {
                key: "scrollToView",
                value: function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this._virtual) {
                        if (0 == this._numItems) return;
                        if (this.checkVirtualList(), e >= this._virtualItems.length) throw new Error("Invalid child index: " + e + ">" + this._virtualItems.length);
                        var s;
                        this._loop && (e = Math.floor(this._firstIndex / this._numItems) * this._numItems + e);
                        var o, a = this._virtualItems[e], r = 0;
                        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                            for (o = this._curLineItemCount - 1; o < e; o += this._curLineItemCount) r += this._virtualItems[o].height + this._lineGap;
                            s = new Laya.Rectangle(0, r, this._itemSize.x, a.height);
                        } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                            for (o = this._curLineItemCount - 1; o < e; o += this._curLineItemCount) r += this._virtualItems[o].width + this._columnGap;
                            s = new Laya.Rectangle(r, 0, a.width, this._itemSize.y);
                        } else {
                            var h = e / (this._curLineItemCount * this._curLineItemCount2);
                            s = new Laya.Rectangle(h * this.viewWidth + e % this._curLineItemCount * (a.width + this._columnGap), e / this._curLineItemCount % this._curLineItemCount2 * (a.height + this._lineGap), a.width, a.height);
                        }
                        n = !0, null != this._scrollPane && this._scrollPane.scrollToView(s, i, n);
                    } else {
                        var l = this.getChildAt(e);
                        null != this._scrollPane ? this._scrollPane.scrollToView(l, i, n) : null != this._parent && null != this._parent.scrollPane && this._parent.scrollPane.scrollToView(l, i, n);
                    }
                }
            }, {
                key: "getFirstChildInView",
                value: function() {
                    return this.childIndexToItemIndex(n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "getFirstChildInView", this).call(this));
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
                        var i = 0, n = 0;
                        if (this._realNumItems > 0) {
                            var s, o = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount, a = Math.min(this._curLineItemCount, this._realNumItems);
                            if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
                                for (s = 0; s < o; s += this._curLineItemCount) i += this._virtualItems[s].height + this._lineGap;
                                if (i > 0 && (i -= this._lineGap), this._autoResizeItem) n = this._scrollPane.viewWidth; else {
                                    for (s = 0; s < a; s++) n += this._virtualItems[s].width + this._columnGap;
                                    n > 0 && (n -= this._columnGap);
                                }
                            } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
                                for (s = 0; s < o; s += this._curLineItemCount) n += this._virtualItems[s].width + this._columnGap;
                                if (n > 0 && (n -= this._columnGap), this._autoResizeItem) i = this._scrollPane.viewHeight; else {
                                    for (s = 0; s < a; s++) i += this._virtualItems[s].height + this._lineGap;
                                    i > 0 && (i -= this._lineGap);
                                }
                            } else n = Math.ceil(o / (this._curLineItemCount * this._curLineItemCount2)) * this.viewWidth, 
                            i = this.viewHeight;
                        }
                        this.handleAlign(n, i), this._scrollPane.setContentSize(n, i), this._eventLocked = !1, 
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
                    if (this._realNumItems < this._curLineItemCount) return h.pos_param = 0, 0;
                    var e, i, n;
                    if (this.numChildren > 0 && !t) {
                        if ((i = this.getChildAt(0).y) > h.pos_param) {
                            for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) if ((i -= this._virtualItems[e].height + this._lineGap) <= h.pos_param) return h.pos_param = i, 
                            e;
                            return h.pos_param = 0, 0;
                        }
                        for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                            if ((n = i + this._virtualItems[e].height + this._lineGap) > h.pos_param) return h.pos_param = i, 
                            e;
                            i = n;
                        }
                        return h.pos_param = i, this._realNumItems - this._curLineItemCount;
                    }
                    for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((n = i + this._virtualItems[e].height + this._lineGap) > h.pos_param) return h.pos_param = i, 
                        e;
                        i = n;
                    }
                    return h.pos_param = i, this._realNumItems - this._curLineItemCount;
                }
            }, {
                key: "getIndexOnPos2",
                value: function(t) {
                    if (this._realNumItems < this._curLineItemCount) return h.pos_param = 0, 0;
                    var e, i, n;
                    if (this.numChildren > 0 && !t) {
                        if ((i = this.getChildAt(0).x) > h.pos_param) {
                            for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) if ((i -= this._virtualItems[e].width + this._columnGap) <= h.pos_param) return h.pos_param = i, 
                            e;
                            return h.pos_param = 0, 0;
                        }
                        for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
                            if ((n = i + this._virtualItems[e].width + this._columnGap) > h.pos_param) return h.pos_param = i, 
                            e;
                            i = n;
                        }
                        return h.pos_param = i, this._realNumItems - this._curLineItemCount;
                    }
                    for (i = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
                        if ((n = i + this._virtualItems[e].width + this._columnGap) > h.pos_param) return h.pos_param = i, 
                        e;
                        i = n;
                    }
                    return h.pos_param = i, this._realNumItems - this._curLineItemCount;
                }
            }, {
                key: "getIndexOnPos3",
                value: function(t) {
                    if (this._realNumItems < this._curLineItemCount) return h.pos_param = 0, 0;
                    var e, i, n = this.viewWidth, s = Math.floor(h.pos_param / n), o = s * (this._curLineItemCount * this._curLineItemCount2), a = s * n;
                    for (e = 0; e < this._curLineItemCount; e++) {
                        if ((i = a + this._virtualItems[o + e].width + this._columnGap) > h.pos_param) return h.pos_param = a, 
                        o + e;
                        a = i;
                    }
                    return h.pos_param = a, o + this._curLineItemCount - 1;
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
                    var i = this._scrollPane.scrollingPosY, n = i + this._scrollPane.viewHeight, s = n == this._scrollPane.contentHeight;
                    h.pos_param = i;
                    var o = this.getIndexOnPos1(e);
                    if (i = h.pos_param, o == this._firstIndex && !e) return !1;
                    var a = this._firstIndex;
                    this._firstIndex = o;
                    var r, l, u, _, c, d = o, g = a > o, p = this.numChildren, f = a + p - 1, y = g ? f : a, v = 0, m = i, w = 0, k = 0, b = this.defaultItem, C = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                    for (this.itemInfoVer++; d < this._realNumItems && (s || m < n); ) {
                        if ((null == (l = this._virtualItems[d]).obj || e) && (null != this.itemProvider && (null == (b = this.itemProvider.runWith(d % this._numItems)) && (b = this._defaultItem), 
                        b = t.UIPackage.normalizeURL(b)), null != l.obj && l.obj.resourceURL != b && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                        this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                            if (g) {
                                for (c = y; c >= a; c--) if (null != (u = this._virtualItems[c]).obj && u.updateFlag != this.itemInfoVer && u.obj.resourceURL == b) {
                                    u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, 
                                    c == y && y--;
                                    break;
                                }
                            } else for (c = y; c <= f; c++) if (null != (u = this._virtualItems[c]).obj && u.updateFlag != this.itemInfoVer && u.obj.resourceURL == b) {
                                u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, 
                                c == y && y++;
                                break;
                            }
                            null != l.obj ? this.setChildIndex(l.obj, g ? d - o : this.numChildren) : (l.obj = this._pool.getObject(b), 
                            g ? this.addChildAt(l.obj, d - o) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), 
                            r = !0;
                        } else r = e;
                        r && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleColumn || this._columnCount > 0) && l.obj.setSize(C, l.obj.height, !0), 
                        this.itemRenderer.runWith([ d % this._numItems, l.obj ]), d % this._curLineItemCount == 0 && (w += Math.ceil(l.obj.height) - l.height, 
                        d == o && a > o && (k = Math.ceil(l.obj.height) - l.height)), l.width = Math.ceil(l.obj.width), 
                        l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setXY(v, m), 
                        d == o && (n += l.height), v += l.width + this._columnGap, d % this._curLineItemCount == this._curLineItemCount - 1 && (v = 0, 
                        m += l.height + this._lineGap), d++;
                    }
                    for (_ = 0; _ < p; _++) (l = this._virtualItems[a + _]).updateFlag != this.itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                    this.removeChildToPool(l.obj), l.obj = null);
                    for (p = this._children.length, _ = 0; _ < p; _++) {
                        var S = this._virtualItems[o + _].obj;
                        this._children[_] != S && this.setChildIndex(S, _);
                    }
                    return 0 == w && 0 == k || this._scrollPane.changeContentSizeOnScrolling(0, w, 0, k), 
                    d > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y;
                }
            }, {
                key: "handleScroll2",
                value: function(e) {
                    var i = this._scrollPane.scrollingPosX, n = i + this._scrollPane.viewWidth, s = i == this._scrollPane.contentWidth;
                    h.pos_param = i;
                    var o = this.getIndexOnPos2(e);
                    if (i = h.pos_param, o == this._firstIndex && !e) return !1;
                    var a = this._firstIndex;
                    this._firstIndex = o;
                    var r, l, u, _, c, d = o, g = a > o, p = this.numChildren, f = a + p - 1, y = g ? f : a, v = i, m = 0, w = 0, k = 0, b = this.defaultItem, C = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                    for (this.itemInfoVer++; d < this._realNumItems && (s || v < n); ) {
                        if ((null == (l = this._virtualItems[d]).obj || e) && (null != this.itemProvider && (null == (b = this.itemProvider.runWith(d % this._numItems)) && (b = this._defaultItem), 
                        b = t.UIPackage.normalizeURL(b)), null != l.obj && l.obj.resourceURL != b && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                        this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                            if (g) {
                                for (c = y; c >= a; c--) if (null != (u = this._virtualItems[c]).obj && u.updateFlag != this.itemInfoVer && u.obj.resourceURL == b) {
                                    u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, 
                                    c == y && y--;
                                    break;
                                }
                            } else for (c = y; c <= f; c++) if (null != (u = this._virtualItems[c]).obj && u.updateFlag != this.itemInfoVer && u.obj.resourceURL == b) {
                                u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, 
                                c == y && y++;
                                break;
                            }
                            null != l.obj ? this.setChildIndex(l.obj, g ? d - o : this.numChildren) : (l.obj = this._pool.getObject(b), 
                            g ? this.addChildAt(l.obj, d - o) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), 
                            r = !0;
                        } else r = e;
                        r && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleRow || this._lineCount > 0) && l.obj.setSize(l.obj.width, C, !0), 
                        this.itemRenderer.runWith([ d % this._numItems, l.obj ]), d % this._curLineItemCount == 0 && (w += Math.ceil(l.obj.width) - l.width, 
                        d == o && a > o && (k = Math.ceil(l.obj.width) - l.width)), l.width = Math.ceil(l.obj.width), 
                        l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setXY(v, m), 
                        d == o && (n += l.width), m += l.height + this._lineGap, d % this._curLineItemCount == this._curLineItemCount - 1 && (m = 0, 
                        v += l.width + this._columnGap), d++;
                    }
                    for (_ = 0; _ < p; _++) (l = this._virtualItems[a + _]).updateFlag != this.itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), 
                    this.removeChildToPool(l.obj), l.obj = null);
                    for (p = this._children.length, _ = 0; _ < p; _++) {
                        var S = this._virtualItems[o + _].obj;
                        this._children[_] != S && this.setChildIndex(S, _);
                    }
                    return 0 == w && 0 == k || this._scrollPane.changeContentSizeOnScrolling(w, 0, k, 0), 
                    d > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x;
                }
            }, {
                key: "handleScroll3",
                value: function(e) {
                    var i = this._scrollPane.scrollingPosX;
                    h.pos_param = i;
                    var n = this.getIndexOnPos3(e);
                    if (i = h.pos_param, n != this._firstIndex || e) {
                        var s = this._firstIndex;
                        this._firstIndex = n;
                        var o, a, r, l, u, _ = s, c = this._virtualItems.length, d = this._curLineItemCount * this._curLineItemCount2, g = n % this._curLineItemCount, p = this.viewWidth, f = Math.floor(n / d) * d, y = f + 2 * d, v = this._defaultItem, m = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount, w = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
                        for (this.itemInfoVer++, a = f; a < y; a++) if (!(a >= this._realNumItems)) {
                            if (u = a % this._curLineItemCount, a - f < d) {
                                if (u < g) continue;
                            } else if (u > g) continue;
                            (r = this._virtualItems[a]).updateFlag = this.itemInfoVer;
                        }
                        var k = null, b = 0;
                        for (a = f; a < y; a++) if (!(a >= this._realNumItems) && (r = this._virtualItems[a]).updateFlag == this.itemInfoVer) {
                            if (null == r.obj) {
                                for (;_ < c; ) {
                                    if (null != (l = this._virtualItems[_]).obj && l.updateFlag != this.itemInfoVer) {
                                        l.obj instanceof t.GButton && (l.selected = l.obj.selected), r.obj = l.obj, l.obj = null;
                                        break;
                                    }
                                    _++;
                                }
                                -1 == b && (b = this.getChildIndex(k) + 1), null == r.obj ? (null != this.itemProvider && (null == (v = this.itemProvider.runWith(a % this._numItems)) && (v = this._defaultItem), 
                                v = t.UIPackage.normalizeURL(v)), r.obj = this._pool.getObject(v), this.addChildAt(r.obj, b)) : b = this.setChildIndexBefore(r.obj, b), 
                                b++, r.obj instanceof t.GButton && (r.obj.selected = r.selected), o = !0;
                            } else o = e, b = -1, k = r.obj;
                            o && (this._autoResizeItem && (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount ? r.obj.setSize(m, w, !0) : this._curLineItemCount == this._columnCount ? r.obj.setSize(m, r.obj.height, !0) : this._curLineItemCount2 == this._lineCount && r.obj.setSize(r.obj.width, w, !0)), 
                            this.itemRenderer.runWith([ a % this._numItems, r.obj ]), r.width = Math.ceil(r.obj.width), 
                            r.height = Math.ceil(r.obj.height));
                        }
                        var C = f / d * p, S = C, x = 0, I = 0;
                        for (a = f; a < y; a++) a >= this._realNumItems || ((r = this._virtualItems[a]).updateFlag == this.itemInfoVer && r.obj.setXY(S, x), 
                        r.height > I && (I = r.height), a % this._curLineItemCount == this._curLineItemCount - 1 ? (S = C, 
                        x += I + this._lineGap, I = 0, a == f + d - 1 && (S = C += p, x = 0)) : S += r.width + this._columnGap);
                        for (a = _; a < c; a++) (r = this._virtualItems[a]).updateFlag != this.itemInfoVer && null != r.obj && (r.obj instanceof t.GButton && (r.selected = r.obj.selected), 
                        this.removeChildToPool(r.obj), r.obj = null);
                    }
                }
            }, {
                key: "handleArchOrder1",
                value: function() {
                    if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                        for (var e = this._scrollPane.posY + this.viewHeight / 2, i = Number.POSITIVE_INFINITY, n = 0, s = 0, o = this.numChildren, a = 0; a < o; a++) {
                            var r = this.getChildAt(a);
                            this.foldInvisibleItems && !r.visible || (n = Math.abs(e - r.y - r.height / 2)) < i && (i = n, 
                            s = a);
                        }
                        this.apexIndex = s;
                    }
                }
            }, {
                key: "handleArchOrder2",
                value: function() {
                    if (this.childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
                        for (var e = this._scrollPane.posX + this.viewWidth / 2, i = Number.POSITIVE_INFINITY, n = 0, s = 0, o = this.numChildren, a = 0; a < o; a++) {
                            var r = this.getChildAt(a);
                            this.foldInvisibleItems && !r.visible || (n = Math.abs(e - r.x - r.width / 2)) < i && (i = n, 
                            s = a);
                        }
                        this.apexIndex = s;
                    }
                }
            }, {
                key: "handleAlign",
                value: function(t, e) {
                    var i = 0, n = 0;
                    e < this.viewHeight && ("middle" == this._verticalAlign ? n = Math.floor((this.viewHeight - e) / 2) : "bottom" == this._verticalAlign && (n = this.viewHeight - e)), 
                    t < this.viewWidth && ("center" == this._align ? i = Math.floor((this.viewWidth - t) / 2) : "right" == this._align && (i = this.viewWidth - t)), 
                    i == this._alignOffset.x && n == this._alignOffset.y || (this._alignOffset.setTo(i, n), 
                    null != this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y));
                }
            }, {
                key: "updateBounds",
                value: function() {
                    if (!this._virtual) {
                        var e, i, n, s, o, a = 0, r = 0, h = 0, l = 0, u = 0, _ = 0, c = 0, d = this._children.length, g = this.viewWidth, p = this.viewHeight, f = 0, y = 0;
                        if (this._layout == t.ListLayoutType.SingleColumn) {
                            for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != r && (r += this._lineGap), 
                            i.y = r, this._autoResizeItem && i.setSize(g, i.height, !0), r += Math.ceil(i.height), 
                            i.width > h && (h = i.width));
                            if ((s = r) <= p && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) for (g += this._scrollPane.vtScrollBar.width, 
                            e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(g, i.height, !0), 
                            i.width > h && (h = i.width));
                            n = Math.ceil(h);
                        } else if (this._layout == t.ListLayoutType.SingleRow) {
                            for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                            i.x = a, this._autoResizeItem && i.setSize(i.width, p, !0), a += Math.ceil(i.width), 
                            i.height > l && (l = i.height));
                            if ((n = a) <= g && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) for (p += this._scrollPane.hzScrollBar.height, 
                            e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(i.width, p, !0), 
                            i.height > l && (l = i.height));
                            s = Math.ceil(l);
                        } else if (this._layout == t.ListLayoutType.FlowHorizontal) if (this._autoResizeItem && this._columnCount > 0) {
                            for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceWidth, 
                            ++u == this._columnCount || e == d - 1)) {
                                for (o = (g - f - (u - 1) * this._columnGap) / f, a = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                                this.foldInvisibleItems && !i.visible || (i.setXY(a, r), u < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * o), i.height, !0), 
                                a += Math.ceil(i.width) + this._columnGap) : i.setSize(g - a, i.height, !0), i.height > l && (l = i.height));
                                r += Math.ceil(l) + this._lineGap, l = 0, u = 0, y = e + 1, f = 0;
                            }
                            s = r + Math.ceil(l), n = g;
                        } else {
                            for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                            (0 != this._columnCount && u >= this._columnCount || 0 == this._columnCount && a + i.width > g && 0 != l) && (a = 0, 
                            r += Math.ceil(l) + this._lineGap, l = 0, u = 0), i.setXY(a, r), (a += Math.ceil(i.width)) > h && (h = a), 
                            i.height > l && (l = i.height), u++);
                            s = r + Math.ceil(l), n = Math.ceil(h);
                        } else if (this._layout == t.ListLayoutType.FlowVertical) if (this._autoResizeItem && this._lineCount > 0) {
                            for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceHeight, 
                            ++u == this._lineCount || e == d - 1)) {
                                for (o = (p - f - (u - 1) * this._lineGap) / f, r = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                                this.foldInvisibleItems && !i.visible || (i.setXY(a, r), u < e ? (i.setSize(i.width, i.sourceHeight + Math.round(i.sourceHeight * o), !0), 
                                r += Math.ceil(i.height) + this._lineGap) : i.setSize(i.width, p - r, !0), i.width > h && (h = i.width));
                                a += Math.ceil(h) + this._columnGap, h = 0, u = 0, y = e + 1, f = 0;
                            }
                            n = a + Math.ceil(h), s = p;
                        } else {
                            for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != r && (r += this._lineGap), 
                            (0 != this._lineCount && u >= this._lineCount || 0 == this._lineCount && r + i.height > p && 0 != h) && (r = 0, 
                            a += Math.ceil(h) + this._columnGap, h = 0, u = 0), i.setXY(a, r), (r += Math.ceil(i.height)) > l && (l = r), 
                            i.width > h && (h = i.width), u++);
                            n = a + Math.ceil(h), s = Math.ceil(l);
                        } else {
                            var v;
                            if (this._autoResizeItem && this._lineCount > 0 && (v = Math.floor((p - (this._lineCount - 1) * this._lineGap) / this._lineCount)), 
                            this._autoResizeItem && this._columnCount > 0) {
                                for (e = 0; e < d; e++) if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (0 == u && (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && r + i.height > p) && (_++, 
                                r = 0, c = 0), f += i.sourceWidth, ++u == this._columnCount || e == d - 1)) {
                                    for (o = (g - f - (u - 1) * this._columnGap) / f, a = 0, u = y; u <= e; u++) i = this.getChildAt(u), 
                                    this.foldInvisibleItems && !i.visible || (i.setXY(_ * g + a, r), u < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * o), this._lineCount > 0 ? v : i.height, !0), 
                                    a += Math.ceil(i.width) + this._columnGap) : i.setSize(g - a, this._lineCount > 0 ? v : i.height, !0), 
                                    i.height > l && (l = i.height));
                                    r += Math.ceil(l) + this._lineGap, l = 0, u = 0, y = e + 1, f = 0, c++;
                                }
                            } else for (e = 0; e < d; e++) i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != a && (a += this._columnGap), 
                            this._autoResizeItem && this._lineCount > 0 && i.setSize(i.width, v, !0), (0 != this._columnCount && u >= this._columnCount || 0 == this._columnCount && a + i.width > g && 0 != l) && (a = 0, 
                            r += Math.ceil(l) + this._lineGap, l = 0, u = 0, c++, (0 != this._lineCount && c >= this._lineCount || 0 == this._lineCount && r + i.height > p && 0 != h) && (_++, 
                            r = 0, c = 0)), i.setXY(_ * g + a, r), (a += Math.ceil(i.width)) > h && (h = a), 
                            i.height > l && (l = i.height), u++);
                            s = _ > 0 ? p : r + Math.ceil(l), n = (_ + 1) * g;
                        }
                        this.handleAlign(n, s), this.setBounds(0, 0, n, s);
                    }
                }
            }, {
                key: "setup_beforeAdd",
                value: function(e, i) {
                    var s;
                    n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "setup_beforeAdd", this).call(this, e, i), 
                    e.seek(i, 5), this._layout = e.readByte(), this._selectionMode = e.readByte(), s = e.readByte(), 
                    this._align = 0 == s ? "left" : 1 == s ? "center" : "right", s = e.readByte(), this._verticalAlign = 0 == s ? "top" : 1 == s ? "middle" : "bottom", 
                    this._lineGap = e.getInt16(), this._columnGap = e.getInt16(), this._lineCount = e.getInt16(), 
                    this._columnCount = e.getInt16(), this._autoResizeItem = e.readBool(), this._childrenRenderOrder = e.readByte(), 
                    this._apexIndex = e.getInt16(), e.readBool() && (this._margin.top = e.getInt32(), 
                    this._margin.bottom = e.getInt32(), this._margin.left = e.getInt32(), this._margin.right = e.getInt32());
                    var o = e.readByte();
                    if (o == t.OverflowType.Scroll) {
                        var a = e.pos;
                        e.seek(i, 7), this.setupScroll(e), e.pos = a;
                    } else this.setupOverflow(o);
                    e.readBool() && e.skip(8), e.version >= 2 && (this.scrollItemToViewOnClick = e.readBool(), 
                    this.foldInvisibleItems = e.readBool()), e.seek(i, 8), this._defaultItem = e.readS(), 
                    this.readItems(e);
                }
            }, {
                key: "readItems",
                value: function(t) {
                    var e, i, n, s;
                    for (e = t.getInt16(), i = 0; i < e; i++) if (n = t.getInt16(), n += t.pos, null != (s = t.readS()) || (s = this.defaultItem)) {
                        var o = this.getFromPool(s);
                        null != o && (this.addChild(o), this.setupItem(t, o)), t.pos = n;
                    } else t.pos = n;
                }
            }, {
                key: "setupItem",
                value: function(e, i) {
                    var n, s, o;
                    if (null != (n = e.readS()) && (i.text = n), null != (n = e.readS()) && i instanceof t.GButton && (i.selectedTitle = n), 
                    null != (n = e.readS()) && (i.icon = n), null != (n = e.readS()) && i instanceof t.GButton && (i.selectedIcon = n), 
                    null != (n = e.readS()) && (i.name = n), i instanceof t.GComponent) {
                        for (s = e.getInt16(), o = 0; o < s; o++) {
                            var a = i.getController(e.readS());
                            n = e.readS(), null != a && (a.selectedPageId = n);
                        }
                        if (e.version >= 2) for (s = e.getInt16(), o = 0; o < s; o++) {
                            var r = e.readS(), h = e.getInt16(), l = e.readS(), u = i.getChildByPath(r);
                            u && u.setProp(h, l);
                        }
                    }
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    n(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "setup_afterAdd", this).call(this, t, e), 
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
                        var n = this._children.length;
                        for (e = 0; e < n; e++) {
                            var s = this._children[e].asButton;
                            if (null != s && s.selected) return e;
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
                        var n = this._virtualItems.length;
                        if (this._realNumItems > n) for (e = n; e < this._realNumItems; e++) {
                            var s = new i();
                            s.width = this._itemSize.x, s.height = this._itemSize.y, this._virtualItems.push(s);
                        } else for (e = this._realNumItems; e < n; e++) this._virtualItems[e].selected = !1;
                        0 != this._virtualListChanged && Laya.timer.clear(this, this._refreshVirtualList), 
                        this._refreshVirtualList();
                    } else {
                        var o = this._children.length;
                        if (t > o) for (e = o; e < t; e++) null == this.itemProvider ? this.addItemFromPool() : this.addItemFromPool(this.itemProvider.runWith(e)); else this.removeChildrenToPool(t, o);
                        if (null != this.itemRenderer) for (e = 0; e < t; e++) this.itemRenderer.runWith([ e, this.getChildAt(e) ]);
                    }
                }
            } ]), h;
        }();
        t.GList = e;
        var i = function t() {
            r(this, t), this.width = 0, this.height = 0, this.updateFlag = 0, this.selected = !1;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e), this._count = 0, this._pool = {};
            }
            return s(e, [ {
                key: "clear",
                value: function() {
                    for (var t in this._pool) for (var e = this._pool[t], i = e.length, n = 0; n < i; n++) e[n].dispose();
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
            } ]), e;
        }();
        t.GObjectPool = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._contentSourceWidth = 0, e._contentSourceHeight = 0, e._contentWidth = 0, 
                e._contentHeight = 0, e._url = "", e._fill = t.LoaderFillType.None, e._align = "left", 
                e._valign = "top", e._showErrorSign = !0, e;
            }
            return a(i, t.GObject), s(i, [ {
                key: "createDisplayObject",
                value: function() {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "createDisplayObject", this).call(this), 
                    this._content = new t.MovieClip(), this._displayObject.addChild(this._content), 
                    this._displayObject.mouseEnabled = !0;
                }
            }, {
                key: "dispose",
                value: function() {
                    null == this._contentItem && null != this._content.texture && this.freeExternal(this._content.texture), 
                    null != this._content2 && this._content2.dispose(), n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispose", this).call(this);
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
                    this._showErrorSign && (null == this._errorSign && null != t.UIConfig.loaderErrorSign && (this._errorSign = i._errorSignPool.getObject(t.UIConfig.loaderErrorSign)), 
                    null != this._errorSign && (this._errorSign.setSize(this.width, this.height), this._displayObject.addChild(this._errorSign.displayObject)));
                }
            }, {
                key: "clearErrorState",
                value: function() {
                    null != this._errorSign && (this._displayObject.removeChild(this._errorSign.displayObject), 
                    i._errorSignPool.returnObject(this._errorSign), this._errorSign = null);
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
                        var e, i, n = 1, s = 1;
                        this._fill != t.LoaderFillType.None && (n = this.width / this._contentSourceWidth, 
                        s = this.height / this._contentSourceHeight, 1 == n && 1 == s || (this._fill == t.LoaderFillType.ScaleMatchHeight ? n = s : this._fill == t.LoaderFillType.ScaleMatchWidth ? s = n : this._fill == t.LoaderFillType.Scale ? n > s ? n = s : s = n : this._fill == t.LoaderFillType.ScaleNoBorder && (n > s ? s = n : n = s), 
                        this._shrinkOnly && (n > 1 && (n = 1), s > 1 && (s = 1)), this._contentWidth = this._contentSourceWidth * n, 
                        this._contentHeight = this._contentSourceHeight * s)), null != this._content2 ? this._content2.setScale(n, s) : this._content.size(this._contentWidth, this._contentHeight), 
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSizeChanged", this).call(this), 
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
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.color = s;
                        break;

                      case t.ObjectPropID.Playing:
                        this.playing = s;
                        break;

                      case t.ObjectPropID.Frame:
                        this.frame = s;
                        break;

                      case t.ObjectPropID.TimeScale:
                        this._content.timeScale = s;
                        break;

                      case t.ObjectPropID.DeltaTime:
                        this._content.advance(s);
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
                    }
                }
            }, {
                key: "setup_beforeAdd",
                value: function(t, e) {
                    var s;
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 5), this._url = t.readS(), s = t.readByte(), this._align = 0 == s ? "left" : 1 == s ? "center" : "right", 
                    s = t.readByte(), this._valign = 0 == s ? "top" : 1 == s ? "middle" : "bottom", 
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
            } ]), i;
        }();
        e._errorSignPool = new t.GObjectPool(), t.GLoader = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            }
            return a(i, t.GObject), s(i, [ {
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
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this._movieClip.setPlaySettings(t, e, i, n, s);
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
                        return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getProp", this).call(this, e);
                    }
                }
            }, {
                key: "setProp",
                value: function(e, s) {
                    switch (e) {
                      case t.ObjectPropID.Color:
                        this.color = s;
                        break;

                      case t.ObjectPropID.Playing:
                        this.playing = s;
                        break;

                      case t.ObjectPropID.Frame:
                        this.frame = s;
                        break;

                      case t.ObjectPropID.TimeScale:
                        this.timeScale = s;
                        break;

                      case t.ObjectPropID.DeltaTime:
                        this.advance(s);
                        break;

                      default:
                        n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setProp", this).call(this, e, s);
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
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
            } ]), i;
        }();
        t.GMovieClip = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._min = 0, e._max = 0, e._value = 0, e._barMaxWidth = 0, e._barMaxHeight = 0, 
                e._barMaxWidthDelta = 0, e._barMaxHeightDelta = 0, e._barStartX = 0, e._barStartY = 0, 
                e._titleType = t.ProgressTitleType.Percent, e._value = 50, e._max = 100, e;
            }
            return a(i, t.GComponent), s(i, [ {
                key: "tweenValue",
                value: function(e, i) {
                    var n, s = t.GTween.getTween(this, this.update);
                    return null != s ? (n = s.value.x, s.kill()) : n = this._value, this._value = e, 
                    t.GTween.to(n, this._value, i).setTarget(this, this.update).setEase(t.EaseType.Linear);
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
                    var n = this.width - this._barMaxWidthDelta, s = this.height - this._barMaxHeightDelta;
                    this._reverse ? (this._barObjectH && (this._barObjectH instanceof t.GImage && this._barObjectH.fillMethod != t.FillMethod.None ? this._barObjectH.fillAmount = 1 - i : (this._barObjectH.width = Math.floor(n * i), 
                    this._barObjectH.x = this._barStartX + (n - this._barObjectH.width))), this._barObjectV && (this._barObjectV instanceof t.GImage && this._barObjectV.fillMethod != t.FillMethod.None ? this._barObjectV.fillAmount = 1 - i : (this._barObjectV.height = Math.floor(s * i), 
                    this._barObjectV.y = this._barStartY + (s - this._barObjectV.height)))) : (this._barObjectH && (this._barObjectH instanceof t.GImage && this._barObjectH.fillMethod != t.FillMethod.None ? this._barObjectH.fillAmount = i : this._barObjectH.width = Math.floor(n * i)), 
                    this._barObjectV && (this._barObjectV instanceof t.GImage && this._barObjectV.fillMethod != t.FillMethod.None ? this._barObjectV.fillAmount = i : this._barObjectV.height = Math.floor(s * i))), 
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSizeChanged", this).call(this), 
                    this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                    this._underConstruct || this.update(this._value);
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
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
            } ]), i;
        }();
        t.GProgressBar = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._text = "", t;
            }
            return a(i, t.GTextField), s(i, [ {
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
                            var n, s;
                            this._widthAutoSize ? (n = this._div.contextWidth) > 0 && (n += 8) : n = this._width, 
                            s = this._heightAutoSize ? this._div.contextHeight : this._height, this._updatingSize = !0, 
                            this.setSize(n, s), this._updatingSize = !1;
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
            } ]), i;
        }();
        t.GRichTextField = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return null == i._inst && (i._inst = t), t.opaque = !1, t._popupStack = [], t._justClosedPopups = [], 
                t.displayObject.once(Laya.Event.DISPLAY, t, t.__addedToStage), t;
            }
            return a(i, t.GComponent), s(i, [ {
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
                    var i, n = this.numChildren;
                    for (i = null == this._modalLayer.parent || e.modal ? n - 1 : this.getChildIndex(this._modalLayer) - 1; i >= 0; i--) {
                        var s = this.getChildAt(i);
                        if (s == e) return;
                        if (s instanceof t.Window) break;
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
                    for (var e = this._children.slice(), i = e.length, n = 0; n < i; n++) {
                        var s = e[n];
                        s instanceof t.Window && !s.modal && s.hide();
                    }
                }
            }, {
                key: "closeAllWindows",
                value: function() {
                    for (var e = this._children.slice(), i = e.length, n = 0; n < i; n++) {
                        var s = e[n];
                        s instanceof t.Window && s.hide();
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
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (this._popupStack.length > 0) {
                        var s = this._popupStack.indexOf(t);
                        if (-1 != s) for (var o = this._popupStack.length - 1; o >= s; o--) this.removeChild(this._popupStack.pop());
                    }
                    if (this._popupStack.push(t), null != i) for (var a = i; null != a; ) {
                        if (a.parent == this) {
                            t.sortingOrder < a.sortingOrder && (t.sortingOrder = a.sortingOrder);
                            break;
                        }
                        a = a.parent;
                    }
                    this.addChild(t), this.adjustModalLayer();
                    var r, h, l = 0, u = 0;
                    i ? (e = i.localToGlobal(), l = i.width, u = i.height) : e = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY), 
                    (r = e.x) + t.width > this.width && (r = r + l - t.width), h = e.y + u, (null == n && h + t.height > this.height || 0 == n) && (h = e.y - t.height - 1) < 0 && (h = 0, 
                    r += l / 2), t.x = r, t.y = h;
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
                    var i = 0, n = 0;
                    null == e ? (i = Laya.stage.mouseX + 10, n = Laya.stage.mouseY + 20) : (i = e.x, 
                    n = e.y);
                    var s = this.globalToLocal(i, n);
                    i = s.x, n = s.y, i + this._tooltipWin.width > this.width && (i = i - this._tooltipWin.width - 1) < 0 && (i = 10), 
                    n + this._tooltipWin.height > this.height && (n = n - this._tooltipWin.height - 1, 
                    i - this._tooltipWin.width - 1 > 0 && (i = i - this._tooltipWin.width - 1), n < 0 && (n = 10)), 
                    this._tooltipWin.x = i, this._tooltipWin.y = n, this.addChild(this._tooltipWin);
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
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t.ToolSet.startsWith(e, "ui://") || Laya.SoundManager.playSound(e);
                }
            }, {
                key: "adjustModalLayer",
                value: function() {
                    var e = this.numChildren;
                    null != this._modalWaitPane && null != this._modalWaitPane.parent && this.setChildIndex(this._modalWaitPane, e - 1);
                    for (var i = e - 1; i >= 0; i--) {
                        var n = this.getChildAt(i);
                        if (n instanceof t.Window && n.modal) return void (null == this._modalLayer.parent ? this.addChildAt(this._modalLayer, i) : this.setChildIndexBefore(this._modalLayer, i));
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
                                    for (var n = this._popupStack.length - 1; n > i; n--) {
                                        var s = this._popupStack.pop();
                                        this.closePopup(s), this._justClosedPopups.push(s);
                                    }
                                    return;
                                }
                            }
                            e = e.parent;
                        }
                        for (n = this._popupStack.length - 1; n >= 0; n--) s = this._popupStack[n], this.closePopup(s), 
                        this._justClosedPopups.push(s);
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
                    i.contentScaleLevel = e >= 3.5 ? 3 : e >= 2.5 ? 2 : e >= 1.5 ? 1 : 0;
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
                    return null == i._inst && new i(), i._inst;
                }
            } ]), i;
        }();
        e.contentScaleLevel = 0, t.GRoot = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._dragOffset = new Laya.Point(), t._scrollPerc = 0, t;
            }
            return a(i, t.GComponent), s(i, [ {
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
                        var t = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, i.sScrollbarHelperPoint);
                        if (this._vertical) {
                            var e = t.y - this._dragOffset.y;
                            this._target.setPercY((e - this._bar.y) / (this._bar.height - this._grip.height), !1);
                        } else {
                            var n = t.x - this._dragOffset.x;
                            this._target.setPercX((n - this._bar.x) / (this._bar.width - this._grip.width), !1);
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
                    var e = this._grip.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, i.sScrollbarHelperPoint);
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
            } ]), i;
        }();
        e.sScrollbarHelperPoint = new Laya.Point(), t.GScrollBar = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._min = 0, e._max = 0, e._value = 0, e._barMaxWidth = 0, e._barMaxHeight = 0, 
                e._barMaxWidthDelta = 0, e._barMaxHeightDelta = 0, e._clickPercent = 0, e._barStartX = 0, 
                e._barStartY = 0, e.changeOnClick = !0, e.canDrag = !0, e._titleType = t.ProgressTitleType.Percent, 
                e._value = 50, e._max = 100, e._clickPos = new Laya.Point(), e;
            }
            return a(i, t.GComponent), s(i, [ {
                key: "update",
                value: function() {
                    this.updateWithPercent((this._value - this._min) / (this._max - this._min));
                }
            }, {
                key: "updateWithPercent",
                value: function(e, i) {
                    if (e = t.ToolSet.clamp01(e), i) {
                        var n = t.ToolSet.clamp(this._min + (this._max - this._min) * e, this._min, this._max);
                        this._wholeNumbers && (n = Math.round(n), e = t.ToolSet.clamp01((n - this._min) / (this._max - this._min))), 
                        n != this._value && (this._value = n, t.Events.dispatch(t.Events.STATE_CHANGED, this.displayObject, i));
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
                    var s = this.width - this._barMaxWidthDelta, o = this.height - this._barMaxHeightDelta;
                    this._reverse ? (this._barObjectH && (this._barObjectH.width = Math.round(s * e), 
                    this._barObjectH.x = this._barStartX + (s - this._barObjectH.width)), this._barObjectV && (this._barObjectV.height = Math.round(o * e), 
                    this._barObjectV.y = this._barStartY + (o - this._barObjectV.height))) : (this._barObjectH && (this._barObjectH.width = Math.round(s * e)), 
                    this._barObjectV && (this._barObjectV.height = Math.round(o * e)));
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "handleSizeChanged", this).call(this), 
                    this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), 
                    this._underConstruct || this.update();
                }
            }, {
                key: "setup_afterAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_afterAdd", this).call(this, t, e), 
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
                        var e, n = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, i.sSilderHelperPoint), s = n.x - this._clickPos.x, o = n.y - this._clickPos.y;
                        this._reverse && (s = -s, o = -o), e = this._barObjectH ? this._clickPercent + s / this._barMaxWidth : this._clickPercent + o / this._barMaxHeight, 
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
                        var n, s = this._gripObject.globalToLocal(e.stageX, e.stageY, i.sSilderHelperPoint), o = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
                        this._barObjectH && (n = s.x / this._barMaxWidth), this._barObjectV && (n = s.y / this._barMaxHeight), 
                        this._reverse ? o -= n : o += n, this.updateWithPercent(o, e);
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
            } ]), i;
        }();
        e.sSilderHelperPoint = new Laya.Point(), t.GSlider = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            }
            return a(i, t.GTextField), s(i, [ {
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 4);
                    var s = t.readS();
                    null != s && (this.promptText = s), null != (s = t.readS()) && (this._input.restrict = s);
                    var o = t.getInt32();
                    0 != o && (this._input.maxChars = o), 0 != (o = t.getInt32()) && (4 == o ? this.keyboardType = Laya.Input.TYPE_NUMBER : 3 == o && (this.keyboardType = Laya.Input.TYPE_URL)), 
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
            } ]), i;
        }();
        t.GTextInput = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._indent = 15, e._rootNode = new t.GTreeNode(!0), e._rootNode._setTree(e), 
                e._rootNode.expanded = !0, e;
            }
            return a(i, t.GList), s(i, [ {
                key: "getSelectedNode",
                value: function() {
                    return -1 != this.selectedIndex ? this.getChildAt(this.selectedIndex)._treeNode : null;
                }
            }, {
                key: "getSelectedNodes",
                value: function(t) {
                    t || (t = new Array()), i.helperIntList.length = 0, n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "getSelection", this).call(this, i.helperIntList);
                    for (var e = i.helperIntList.length, s = new Array(), o = 0; o < e; o++) {
                        var a = this.getChildAt(i.helperIntList[o])._treeNode;
                        s.push(a);
                    }
                    return s;
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
                        var n = t.getChildAt(i);
                        n.isFolder && this.expandAll(n);
                    }
                }
            }, {
                key: "collapseAll",
                value: function(t) {
                    t || (t = this._rootNode), t != this._rootNode && (t.expanded = !1);
                    for (var e = t.numChildren, i = 0; i < e; i++) {
                        var n = t.getChildAt(i);
                        n.isFolder && this.collapseAll(n);
                    }
                }
            }, {
                key: "createCell",
                value: function(e) {
                    var i = this.getFromPool(e._resURL ? e._resURL : this.defaultItem);
                    if (!i) throw new Error("cannot create tree node object.");
                    i._treeNode = e, e._cell = i;
                    var n, s = i.getChild("indent");
                    null != s && (s.width = (e.level - 1) * this._indent), (n = i.getController("expanded")) && (n.on(t.Events.STATE_CHANGED, this, this.__expandedStateChanged), 
                    n.selectedIndex = e.expanded ? 1 : 0), (n = i.getController("leaf")) && (n.selectedIndex = e.isFolder ? 0 : 1), 
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
                    for (var i = this.getChildIndex(e._cell) + 1, n = t.level, s = this.numChildren, o = i; o < s && !(this.getChildAt(o)._treeNode.level <= n); o++) i++;
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
                    var n, s, o = this.getInsertIndexForNode(t), a = e - i;
                    if (o < i) for (n = 0; n < a; n++) s = this.getChildAt(i + n), this.setChildIndex(s, o + n); else for (n = 0; n < a; n++) s = this.getChildAt(i), 
                    this.setChildIndex(s, o);
                }
            }, {
                key: "getFolderEndIndex",
                value: function(t, e) {
                    for (var i = this.numChildren, n = t + 1; n < i; n++) if (this.getChildAt(n)._treeNode.level <= e) return n;
                    return i;
                }
            }, {
                key: "checkChildren",
                value: function(t, e) {
                    for (var i = t.numChildren, n = 0; n < i; n++) {
                        e++;
                        var s = t.getChildAt(n);
                        null == s._cell && this.createCell(s), s._cell.parent || this.addChildAt(s._cell, e), 
                        s.isFolder && s.expanded && (e = this.checkChildren(s, e));
                    }
                    return e;
                }
            }, {
                key: "hideFolderNode",
                value: function(t) {
                    for (var e = t.numChildren, i = 0; i < e; i++) {
                        var n = t.getChildAt(i);
                        n._cell && this.removeChild(n._cell), n.isFolder && n.expanded && this.hideFolderNode(n);
                    }
                }
            }, {
                key: "removeNode",
                value: function(t) {
                    if (null != t._cell && (null != t._cell.parent && this.removeChild(t._cell), this.returnToPool(t._cell), 
                    t._cell._treeNode = null, t._cell = null), t.isFolder) for (var e = t.numChildren, i = 0; i < e; i++) {
                        var n = t.getChildAt(i);
                        this.removeNode(n);
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
                        var s = t._treeNode;
                        s && s.isFolder && this._expandedStatusInEvt == s.expanded && (2 == this._clickToExpand || (s.expanded = !s.expanded));
                    }
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispatchItemEvent", this).call(this, t, e);
                }
            }, {
                key: "setup_beforeAdd",
                value: function(t, e) {
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup_beforeAdd", this).call(this, t, e), 
                    t.seek(e, 9), this._indent = t.getInt32(), this._clickToExpand = t.getUint8();
                }
            }, {
                key: "readItems",
                value: function(e) {
                    var i, n, s, o, a, r, h, l = 0;
                    for (i = e.getInt16(), n = 0; n < i; n++) if (s = e.getInt16(), s += e.pos, null != (o = e.readS()) || (o = this.defaultItem)) {
                        a = e.readBool(), h = e.getUint8();
                        var u = new t.GTreeNode(a, o);
                        if (u.expanded = !0, 0 == n) this._rootNode.addChild(u); else if (h > l) r.addChild(u); else if (h < l) {
                            for (var _ = h; _ <= l; _++) r = r.parent;
                            r.addChild(u);
                        } else r.parent.addChild(u);
                        r = u, l = h, this.setupItem(e, u.cell), e.pos = s;
                    } else e.pos = s;
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
            } ]), i;
        }();
        e.helperIntList = new Array(), t.GTree = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t(e, i) {
                r(this, t), this._expanded = !1, this._level = 0, this._resURL = i, e && (this._children = new Array());
            }
            return s(t, [ {
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
                    if (e >= 0 && e <= i) return t._parent == this ? this.setChildIndex(t, e) : (t._parent && t._parent.removeChild(t), 
                    e == this._children.length ? this._children.push(t) : this._children.splice(e, 0, t), 
                    t._parent = this, t._level = this._level + 1, t._setTree(this._tree), (null != this._tree && this == this._tree.rootNode || null != this._cell && null != this._cell.parent && this._expanded) && this._tree._afterInserted(t)), 
                    t;
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
                    var n = this._children.length;
                    e < 0 ? e = 0 : e > n && (e = n), i != e && (this._children.splice(i, 1), this._children.splice(e, 0, t), 
                    (null != this._tree && this == this._tree.rootNode || null != this._cell && null != this._cell.parent && this._expanded) && this._tree._afterMoved(t));
                }
            }, {
                key: "swapChildren",
                value: function(t, e) {
                    var i = this._children.indexOf(t), n = this._children.indexOf(e);
                    if (-1 == i || -1 == n) throw "Not a child of this container";
                    this.swapChildrenAt(i, n);
                }
            }, {
                key: "swapChildrenAt",
                value: function(t, e) {
                    var i = this._children[t], n = this._children[e];
                    this.setChildIndex(i, e), this.setChildIndex(n, t);
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
                        var n = this._children[i];
                        n._level = this._level + 1, n._setTree(t);
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
            } ]), t;
        }();
        t.GTreeNode = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e), this.width = 0, this.height = 0, this.tileGridIndice = 0, this.interval = 0, 
                this.repeatDelay = 0;
            }
            return s(e, [ {
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
            } ]), e;
        }();
        t.PackageItem = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (r(this, e), !i && !(i = t.UIConfig.popupMenu)) throw "UIConfig.popupMenu not defined";
                this._contentPane = t.UIPackage.createObjectFromURL(i).asCom, this._contentPane.on(Laya.Event.DISPLAY, this, this.__addedToStage), 
                this._list = this._contentPane.getChild("list"), this._list.removeChildrenToPool(), 
                this._list.addRelation(this._contentPane, t.RelationType.Width), this._list.removeRelation(this._contentPane, t.RelationType.Height), 
                this._contentPane.addRelation(this._list, t.RelationType.Height), this._list.on(t.Events.CLICK_ITEM, this, this.__clickItem);
            }
            return s(e, [ {
                key: "dispose",
                value: function() {
                    this._contentPane.dispose();
                }
            }, {
                key: "addItem",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this._list.addItemFromPool().asButton;
                    i.title = t, i.data = e, i.grayed = !1;
                    var n = i.getController("checked");
                    return null != n && (n.selectedIndex = 0), i;
                }
            }, {
                key: "addItemAt",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = this._list.getFromPool().asButton;
                    this._list.addChildAt(n, e), n.title = t, n.data = i, n.grayed = !1;
                    var s = n.getController("checked");
                    return null != s && (s.selectedIndex = 0), n;
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
            } ]), e;
        }();
        t.PopupMenu = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e(t) {
                r(this, e), this._owner = t, this._defs = new Array();
            }
            return s(e, [ {
                key: "add",
                value: function(e, i) {
                    if (e == t.RelationType.Size) return this.add(t.RelationType.Width, i), void this.add(t.RelationType.Height, i);
                    for (var n = this._defs.length, s = 0; s < n; s++) if (this._defs[s].type == e) return;
                    this.internalAdd(e, i);
                }
            }, {
                key: "internalAdd",
                value: function(e, n) {
                    if (e == t.RelationType.Size) return this.internalAdd(t.RelationType.Width, n), 
                    void this.internalAdd(t.RelationType.Height, n);
                    var s = new i();
                    s.percent = n, s.type = e, s.axis = e <= t.RelationType.Right_Right || e == t.RelationType.Width || e >= t.RelationType.LeftExt_Left && e <= t.RelationType.RightExt_Right ? 0 : 1, 
                    this._defs.push(s), (n || e == t.RelationType.Left_Center || e == t.RelationType.Center_Center || e == t.RelationType.Right_Center || e == t.RelationType.Top_Middle || e == t.RelationType.Middle_Middle || e == t.RelationType.Bottom_Middle) && (this._owner.pixelSnapping = !0);
                }
            }, {
                key: "remove",
                value: function(e) {
                    if (e == t.RelationType.Size) return this.remove(t.RelationType.Width), void this.remove(t.RelationType.Height);
                    for (var i = this._defs.length, n = 0; n < i; n++) if (this._defs[n].type == e) {
                        this._defs.splice(n, 1);
                        break;
                    }
                }
            }, {
                key: "copyFrom",
                value: function(t) {
                    this._target = t.target, this._defs.length = 0;
                    for (var e = t._defs.length, n = 0; n < e; n++) {
                        var s = t._defs[n], o = new i();
                        o.copyFrom(s), this._defs.push(o);
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    null != this._target && (this.releaseRefTarget(), this._target = null);
                }
            }, {
                key: "applyOnSelfResized",
                value: function(e, i, n) {
                    var s = this._defs.length;
                    if (0 != s) {
                        for (var o = this._owner.x, a = this._owner.y, r = 0; r < s; r++) switch (this._defs[r].type) {
                          case t.RelationType.Center_Center:
                            this._owner.x -= (.5 - (n ? this._owner.pivotX : 0)) * e;
                            break;

                          case t.RelationType.Right_Center:
                          case t.RelationType.Right_Left:
                          case t.RelationType.Right_Right:
                            this._owner.x -= (1 - (n ? this._owner.pivotX : 0)) * e;
                            break;

                          case t.RelationType.Middle_Middle:
                            this._owner.y -= (.5 - (n ? this._owner.pivotY : 0)) * i;
                            break;

                          case t.RelationType.Bottom_Middle:
                          case t.RelationType.Bottom_Top:
                          case t.RelationType.Bottom_Bottom:
                            this._owner.y -= (1 - (n ? this._owner.pivotY : 0)) * i;
                        }
                        if ((o != this._owner.x || a != this._owner.y) && (o = this._owner.x - o, a = this._owner.y - a, 
                        this._owner.updateGearFromRelations(1, o, a), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                            s = this._owner.parent._transitions.length;
                            for (var h = 0; h < s; h++) this._owner.parent._transitions[h].updateFromRelations(this._owner.id, o, a);
                        }
                    }
                }
            }, {
                key: "applyOnXYChanged",
                value: function(e, i, n) {
                    var s;
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
                        this._owner.y += n;
                        break;

                      case t.RelationType.Width:
                      case t.RelationType.Height:
                        break;

                      case t.RelationType.LeftExt_Left:
                      case t.RelationType.LeftExt_Right:
                        this._owner != this._target.parent ? (s = this._owner.xMin, this._owner.width = this._owner._rawWidth - i, 
                        this._owner.xMin = s + i) : this._owner.width = this._owner._rawWidth - i;
                        break;

                      case t.RelationType.RightExt_Left:
                      case t.RelationType.RightExt_Right:
                        this._owner != this._target.parent ? (s = this._owner.xMin, this._owner.width = this._owner._rawWidth + i, 
                        this._owner.xMin = s) : this._owner.width = this._owner._rawWidth + i;
                        break;

                      case t.RelationType.TopExt_Top:
                      case t.RelationType.TopExt_Bottom:
                        this._owner != this._target.parent ? (s = this._owner.yMin, this._owner.height = this._owner._rawHeight - n, 
                        this._owner.yMin = s + n) : this._owner.height = this._owner._rawHeight - n;
                        break;

                      case t.RelationType.BottomExt_Top:
                      case t.RelationType.BottomExt_Bottom:
                        this._owner != this._target.parent ? (s = this._owner.yMin, this._owner.height = this._owner._rawHeight + n, 
                        this._owner.yMin = s) : this._owner.height = this._owner._rawHeight + n;
                    }
                }
            }, {
                key: "applyOnSizeChanged",
                value: function(e) {
                    var i, n, s = 0, o = 0, a = 0;
                    switch (0 == e.axis ? (this._target != this._owner.parent && (s = this._target.x, 
                    this._target.pivotAsAnchor && (o = this._target.pivotX)), e.percent ? 0 != this._targetWidth && (a = this._target._width / this._targetWidth) : a = this._target._width - this._targetWidth) : (this._target != this._owner.parent && (s = this._target.y, 
                    this._target.pivotAsAnchor && (o = this._target.pivotY)), e.percent ? 0 != this._targetHeight && (a = this._target._height / this._targetHeight) : a = this._target._height - this._targetHeight), 
                    e.type) {
                      case t.RelationType.Left_Left:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin - s) * a : 0 != o && (this._owner.x += a * -o);
                        break;

                      case t.RelationType.Left_Center:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin - s) * a : this._owner.x += a * (.5 - o);
                        break;

                      case t.RelationType.Left_Right:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin - s) * a : this._owner.x += a * (1 - o);
                        break;

                      case t.RelationType.Center_Center:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin + .5 * this._owner._rawWidth - s) * a - .5 * this._owner._rawWidth : this._owner.x += a * (.5 - o);
                        break;

                      case t.RelationType.Right_Left:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin + this._owner._rawWidth - s) * a - this._owner._rawWidth : 0 != o && (this._owner.x += a * -o);
                        break;

                      case t.RelationType.Right_Center:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin + this._owner._rawWidth - s) * a - this._owner._rawWidth : this._owner.x += a * (.5 - o);
                        break;

                      case t.RelationType.Right_Right:
                        e.percent ? this._owner.xMin = s + (this._owner.xMin + this._owner._rawWidth - s) * a - this._owner._rawWidth : this._owner.x += a * (1 - o);
                        break;

                      case t.RelationType.Top_Top:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin - s) * a : 0 != o && (this._owner.y += a * -o);
                        break;

                      case t.RelationType.Top_Middle:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin - s) * a : this._owner.y += a * (.5 - o);
                        break;

                      case t.RelationType.Top_Bottom:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin - s) * a : this._owner.y += a * (1 - o);
                        break;

                      case t.RelationType.Middle_Middle:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin + .5 * this._owner._rawHeight - s) * a - .5 * this._owner._rawHeight : this._owner.y += a * (.5 - o);
                        break;

                      case t.RelationType.Bottom_Top:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin + this._owner._rawHeight - s) * a - this._owner._rawHeight : 0 != o && (this._owner.y += a * -o);
                        break;

                      case t.RelationType.Bottom_Middle:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin + this._owner._rawHeight - s) * a - this._owner._rawHeight : this._owner.y += a * (.5 - o);
                        break;

                      case t.RelationType.Bottom_Bottom:
                        e.percent ? this._owner.yMin = s + (this._owner.yMin + this._owner._rawHeight - s) * a - this._owner._rawHeight : this._owner.y += a * (1 - o);
                        break;

                      case t.RelationType.Width:
                        i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceWidth - this._target.initWidth : this._owner._rawWidth - this._targetWidth, 
                        e.percent && (i *= a), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (n = this._owner.xMin, 
                        this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0), this._owner.xMin = n) : this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0) : this._owner.width = this._target._width + i;
                        break;

                      case t.RelationType.Height:
                        i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceHeight - this._target.initHeight : this._owner._rawHeight - this._targetHeight, 
                        e.percent && (i *= a), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (n = this._owner.yMin, 
                        this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0), this._owner.yMin = n) : this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0) : this._owner.height = this._target._height + i;
                        break;

                      case t.RelationType.LeftExt_Left:
                        n = this._owner.xMin, i = e.percent ? s + (n - s) * a - n : a * -o, this._owner.width = this._owner._rawWidth - i, 
                        this._owner.xMin = n + i;
                        break;

                      case t.RelationType.LeftExt_Right:
                        n = this._owner.xMin, i = e.percent ? s + (n - s) * a - n : a * (1 - o), this._owner.width = this._owner._rawWidth - i, 
                        this._owner.xMin = n + i;
                        break;

                      case t.RelationType.RightExt_Left:
                        n = this._owner.xMin, i = e.percent ? s + (n + this._owner._rawWidth - s) * a - (n + this._owner._rawWidth) : a * -o, 
                        this._owner.width = this._owner._rawWidth + i, this._owner.xMin = n;
                        break;

                      case t.RelationType.RightExt_Right:
                        n = this._owner.xMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = s + this._target._width - this._target._width * o + (this._owner.sourceWidth - s - this._target.initWidth + this._target.initWidth * o) * a : this._owner.width = s + (this._owner._rawWidth - s) * a : (i = s + (n + this._owner._rawWidth - s) * a - (n + this._owner._rawWidth), 
                        this._owner.width = this._owner._rawWidth + i, this._owner.xMin = n) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - o) : this._owner.width = this._owner._rawWidth + a * (1 - o) : (i = a * (1 - o), 
                        this._owner.width = this._owner._rawWidth + i, this._owner.xMin = n);
                        break;

                      case t.RelationType.TopExt_Top:
                        n = this._owner.yMin, i = e.percent ? s + (n - s) * a - n : a * -o, this._owner.height = this._owner._rawHeight - i, 
                        this._owner.yMin = n + i;
                        break;

                      case t.RelationType.TopExt_Bottom:
                        n = this._owner.yMin, i = e.percent ? s + (n - s) * a - n : a * (1 - o), this._owner.height = this._owner._rawHeight - i, 
                        this._owner.yMin = n + i;
                        break;

                      case t.RelationType.BottomExt_Top:
                        n = this._owner.yMin, i = e.percent ? s + (n + this._owner._rawHeight - s) * a - (n + this._owner._rawHeight) : a * -o, 
                        this._owner.height = this._owner._rawHeight + i, this._owner.yMin = n;
                        break;

                      case t.RelationType.BottomExt_Bottom:
                        n = this._owner.yMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = s + this._target._height - this._target._height * o + (this._owner.sourceHeight - s - this._target.initHeight + this._target.initHeight * o) * a : this._owner.height = s + (this._owner._rawHeight - s) * a : (i = s + (n + this._owner._rawHeight - s) * a - (n + this._owner._rawHeight), 
                        this._owner.height = this._owner._rawHeight + i, this._owner.yMin = n) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - o) : this._owner.height = this._owner._rawHeight + a * (1 - o) : (i = a * (1 - o), 
                        this._owner.height = this._owner._rawHeight + i, this._owner.yMin = n);
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
                    for (var t = this._owner.x, e = this._owner.y, i = this._target.x - this._targetX, n = this._target.y - this._targetY, s = this._defs.length, o = 0; o < s; o++) this.applyOnXYChanged(this._defs[o], i, n);
                    if (this._targetX = this._target.x, this._targetY = this._target.y, (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, 
                    e = this._owner.y - e, this._owner.updateGearFromRelations(1, t, e), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                        s = this._owner.parent._transitions.length;
                        for (var a = 0; a < s; a++) this._owner.parent._transitions[a].updateFromRelations(this._owner.id, t, e);
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
                    for (var t = this._owner.x, e = this._owner.y, i = this._owner._rawWidth, n = this._owner._rawHeight, s = this._defs.length, o = 0; o < s; o++) this.applyOnSizeChanged(this._defs[o]);
                    if (this._targetWidth = this._target._width, this._targetHeight = this._target._height, 
                    (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, e = this._owner.y - e, 
                    this._owner.updateGearFromRelations(1, t, e), null != this._owner.parent && this._owner.parent._transitions.length > 0)) {
                        s = this._owner.parent._transitions.length;
                        for (var a = 0; a < s; a++) this._owner.parent._transitions[a].updateFromRelations(this._owner.id, t, e);
                    }
                    i == this._owner._rawWidth && n == this._owner._rawHeight || (i = this._owner._rawWidth - i, 
                    n = this._owner._rawHeight - n, this._owner.updateGearFromRelations(2, i, n)), this._owner.relations.handling = null;
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
            } ]), e;
        }();
        t.RelationItem = e;
        var i = function() {
            function t() {
                r(this, t);
            }
            return s(t, [ {
                key: "copyFrom",
                value: function(t) {
                    this.percent = t.percent, this.type = t.type, this.axis = t.axis;
                }
            } ]), t;
        }();
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e(t) {
                r(this, e), this._owner = t, this._items = [];
            }
            return s(e, [ {
                key: "add",
                value: function(e, i) {
                    for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = this._items.length, o = 0; o < s; o++) {
                        var a = this._items[o];
                        if (a.target == e) return void a.add(i, n);
                    }
                    var r = new t.RelationItem(this._owner);
                    r.target = e, r.add(i, n), this._items.push(r);
                }
            }, {
                key: "remove",
                value: function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = this._items.length, n = 0; n < i; ) {
                        var s = this._items[n];
                        s.target == t ? (s.remove(e), s.isEmpty ? (s.dispose(), this._items.splice(n, 1), 
                        i--) : n++) : n++;
                    }
                }
            }, {
                key: "contains",
                value: function(t) {
                    for (var e = this._items.length, i = 0; i < e; i++) if (this._items[i].target == t) return !0;
                    return !1;
                }
            }, {
                key: "clearFor",
                value: function(t) {
                    for (var e = this._items.length, i = 0; i < e; ) {
                        var n = this._items[i];
                        n.target == t ? (n.dispose(), this._items.splice(i, 1), e--) : i++;
                    }
                }
            }, {
                key: "clearAll",
                value: function() {
                    for (var t = this._items.length, e = 0; e < t; e++) this._items[e].dispose();
                    this._items.length = 0;
                }
            }, {
                key: "copyFrom",
                value: function(e) {
                    this.clearAll();
                    for (var i = e._items, n = i.length, s = 0; s < n; s++) {
                        var o = i[s], a = new t.RelationItem(this._owner);
                        a.copyFrom(o), this._items.push(a);
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
                    if (0 != this._items.length) for (var n = this._items.length, s = 0; s < n; s++) this._items[s].applyOnSelfResized(t, e, i);
                }
            }, {
                key: "ensureRelationsSizeCorrect",
                value: function() {
                    if (0 != this._items.length) {
                        this.sizeDirty = !1;
                        for (var t = this._items.length, e = 0; e < t; e++) this._items[e].target.ensureSizeCorrect();
                    }
                }
            }, {
                key: "setup",
                value: function(e, i) {
                    for (var n, s = e.readByte(), o = 0; o < s; o++) {
                        var a = e.getInt16();
                        n = -1 == a ? this._owner.parent : i ? this._owner.getChildAt(a) : this._owner.parent.getChildAt(a);
                        var r = new t.RelationItem(this._owner);
                        r.target = n, this._items.push(r);
                        for (var h = e.readByte(), l = 0; l < h; l++) {
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
            } ]), e;
        }();
        t.Relations = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e(i) {
                r(this, e), this._owner = i, this._maskContainer = new Laya.Sprite(), this._owner.displayObject.addChild(this._maskContainer), 
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
            return s(e, [ {
                key: "setup",
                value: function(e) {
                    this._scrollType = e.readByte();
                    var i = e.readByte(), n = e.getInt32();
                    e.readBool() && (this._scrollBarMargin.top = e.getInt32(), this._scrollBarMargin.bottom = e.getInt32(), 
                    this._scrollBarMargin.left = e.getInt32(), this._scrollBarMargin.right = e.getInt32());
                    var s = e.readS(), o = e.readS(), a = e.readS(), r = e.readS();
                    if (this._displayOnLeft = 0 != (1 & n), this._snapToItem = 0 != (2 & n), this._displayInDemand = 0 != (4 & n), 
                    this._pageMode = 0 != (8 & n), this._touchEffect = !!(16 & n) || !(32 & n) && t.UIConfig.defaultScrollTouchEffect, 
                    this._bouncebackEffect = !!(64 & n) || !(128 & n) && t.UIConfig.defaultScrollBounceEffect, 
                    this._inertiaDisabled = 0 != (256 & n), 0 == (512 & n) && (this._maskContainer.scrollRect = new Laya.Rectangle()), 
                    this._floating = 0 != (1024 & n), i == t.ScrollBarDisplayType.Default && (i = t.UIConfig.defaultScrollBarDisplay), 
                    i != t.ScrollBarDisplayType.Hidden) {
                        if (this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical) {
                            var h = s || t.UIConfig.verticalScrollBar;
                            if (h) {
                                if (this._vtScrollBar = t.UIPackage.createObjectFromURL(h), !this._vtScrollBar) throw "cannot create scrollbar from " + h;
                                this._vtScrollBar.setScrollPane(this, !0), this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
                            }
                        }
                        if ((this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Horizontal) && (h = o || t.UIConfig.horizontalScrollBar)) {
                            if (this._hzScrollBar = t.UIPackage.createObjectFromURL(h), !this._hzScrollBar) throw "cannot create scrollbar from " + h;
                            this._hzScrollBar.setScrollPane(this, !1), this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
                        }
                        this._scrollBarDisplayAuto = i == t.ScrollBarDisplayType.Auto, this._scrollBarDisplayAuto && (this._vtScrollBar && (this._vtScrollBar.displayObject.visible = !1), 
                        this._hzScrollBar && (this._hzScrollBar.displayObject.visible = !1));
                    } else this._mouseWheelEnabled = !1;
                    if (a && (this._header = t.UIPackage.createObjectFromURL(a), null == this._header)) throw new Error("FairyGUI: cannot create scrollPane this.header from " + a);
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
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments[1];
                    this._pageMode ? this.setPosY(this._yPos - this._pageSize.y * t, e) : this.setPosY(this._yPos - this._scrollStep * t, e);
                }
            }, {
                key: "scrollDown",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments[1];
                    this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * t, e) : this.setPosY(this._yPos + this._scrollStep * t, e);
                }
            }, {
                key: "scrollLeft",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments[1];
                    this._pageMode ? this.setPosX(this._xPos - this._pageSize.x * t, e) : this.setPosX(this._xPos - this._scrollStep * t, e);
                }
            }, {
                key: "scrollRight",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments[1];
                    this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * t, e) : this.setPosX(this._xPos + this._scrollStep * t, e);
                }
            }, {
                key: "scrollToView",
                value: function(i, n, s) {
                    var o;
                    if (this._owner.ensureBoundsCorrect(), this._needRefresh && this.refresh(), i instanceof t.GObject ? i.parent != this._owner ? (i.parent.localToGlobalRect(i.x, i.y, i.width, i.height, e.sHelperRect), 
                    o = this._owner.globalToLocalRect(e.sHelperRect.x, e.sHelperRect.y, e.sHelperRect.width, e.sHelperRect.height, e.sHelperRect)) : (o = e.sHelperRect).setTo(i.x, i.y, i.width, i.height) : o = i, 
                    this._overlapSize.y > 0) {
                        var a = this._yPos + this._viewSize.y;
                        s || o.y <= this._yPos || o.height >= this._viewSize.y ? this._pageMode ? this.setPosY(Math.floor(o.y / this._pageSize.y) * this._pageSize.y, n) : this.setPosY(o.y, n) : o.y + o.height > a && (this._pageMode ? this.setPosY(Math.floor(o.y / this._pageSize.y) * this._pageSize.y, n) : o.height <= this._viewSize.y / 2 ? this.setPosY(o.y + 2 * o.height - this._viewSize.y, n) : this.setPosY(o.y + o.height - this._viewSize.y, n));
                    }
                    if (this._overlapSize.x > 0) {
                        var r = this._xPos + this._viewSize.x;
                        s || o.x <= this._xPos || o.width >= this._viewSize.x ? this._pageMode ? this.setPosX(Math.floor(o.x / this._pageSize.x) * this._pageSize.x, n) : this.setPosX(o.x, n) : o.x + o.width > r && (this._pageMode ? this.setPosX(Math.floor(o.x / this._pageSize.x) * this._pageSize.x, n) : o.width <= this._viewSize.x / 2 ? this.setPosX(o.x + 2 * o.width - this._viewSize.x, n) : this.setPosX(o.x + o.width - this._viewSize.x, n));
                    }
                    !n && this._needRefresh && this.refresh();
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
                    this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), e.draggingPane == this && (e.draggingPane = null), 
                    e._gestureFlag = 0, this._dragged = !1, this._maskContainer.mouseEnabled = !0;
                }
            }, {
                key: "lockHeader",
                value: function(t) {
                    this._headerLockedSize != t && (this._headerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0 && (this._tweenStart.setTo(this._container.x, this._container.y), 
                    this._tweenChange.setTo(0, 0), this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis], 
                    this._tweenDuration.setTo(e.TWEEN_TIME_DEFAULT, e.TWEEN_TIME_DEFAULT), this.startTween(2)));
                }
            }, {
                key: "lockFooter",
                value: function(t) {
                    if (this._footerLockedSize != t && (this._footerLockedSize = t, !this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis])) {
                        this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(0, 0);
                        var i = this._overlapSize[this._refreshBarAxis];
                        0 == i ? i = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : i += this._footerLockedSize, 
                        this._tweenChange[this._refreshBarAxis] = -i - this._tweenStart[this._refreshBarAxis], 
                        this._tweenDuration.setTo(e.TWEEN_TIME_DEFAULT, e.TWEEN_TIME_DEFAULT), this.startTween(2);
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
                value: function(t, e, i, n) {
                    var s = this._xPos == this._overlapSize.x, o = this._yPos == this._overlapSize.y;
                    this._contentSize.x += t, this._contentSize.y += e, this.handleSizeChanged(), 1 == this._tweening ? (0 != t && s && this._tweenChange.x < 0 && (this._xPos = this._overlapSize.x, 
                    this._tweenChange.x = -this._xPos - this._tweenStart.x), 0 != e && o && this._tweenChange.y < 0 && (this._yPos = this._overlapSize.y, 
                    this._tweenChange.y = -this._yPos - this._tweenStart.y)) : 2 == this._tweening ? (0 != i && (this._container.x -= i, 
                    this._tweenStart.x -= i, this._xPos = -this._container.x), 0 != n && (this._container.y -= n, 
                    this._tweenStart.y -= n, this._yPos = -this._container.y)) : this._dragged ? (0 != i && (this._container.x -= i, 
                    this._containerPos.x -= i, this._xPos = -this._container.x), 0 != n && (this._container.y -= n, 
                    this._containerPos.y -= n, this._yPos = -this._container.y)) : (0 != t && s && (this._xPos = this._overlapSize.x, 
                    this._container.x = -this._xPos), 0 != e && o && (this._yPos = this._overlapSize.y, 
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
                    (this._pageMode || this._snapToItem) && (e.sEndPos.setTo(-this._xPos, -this._yPos), 
                    this.alignPosition(e.sEndPos, !1), this._xPos = -e.sEndPos.x, this._yPos = -e.sEndPos.y), 
                    this.refresh2(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject), 
                    this._needRefresh && (this._needRefresh = !1, Laya.timer.clear(this, this.refresh), 
                    this.refresh2()), this.updateScrollBarPos(), this._aniFlag = 0);
                }
            }, {
                key: "refresh2",
                value: function() {
                    var t, i;
                    1 != this._aniFlag || this._dragged ? (0 != this._tweening && this.killTween(), 
                    this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos)), this.loopCheckingCurrent()) : (this._overlapSize.x > 0 ? t = -Math.floor(this._xPos) : (0 != this._container.x && (this._container.x = 0), 
                    t = 0), this._overlapSize.y > 0 ? i = -Math.floor(this._yPos) : (0 != this._container.y && (this._container.y = 0), 
                    i = 0), t != this._container.x || i != this._container.y ? (this._tweenDuration.setTo(e.TWEEN_TIME_GO, e.TWEEN_TIME_GO), 
                    this._tweenStart.setTo(this._container.x, this._container.y), this._tweenChange.setTo(t - this._tweenStart.x, i - this._tweenStart.y), 
                    this.startTween(1)) : 0 != this._tweening && this.killTween()), this._pageMode && this.updatePageController();
                }
            }, {
                key: "__mouseDown",
                value: function() {
                    if (this._touchEffect) {
                        0 != this._tweening ? (this.killTween(), this._dragged = !0) : this._dragged = !1;
                        var t = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, e.sHelperPoint);
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
                    if (this._touchEffect && !this.owner.isDisposed && (null == e.draggingPane || e.draggingPane == this) && null == t.GObject.draggingObject) {
                        var i, n, s, o = t.UIConfig.touchScrollSensitivity, a = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, e.sHelperPoint);
                        if (this._scrollType == t.ScrollType.Vertical) {
                            if (!this._isHoldAreaDone) {
                                if (e._gestureFlag |= 1, (i = Math.abs(this._beginTouchPos.y - a.y)) < o) return;
                                if (0 != (2 & e._gestureFlag) && i < Math.abs(this._beginTouchPos.x - a.x)) return;
                            }
                            n = !0;
                        } else if (this._scrollType == t.ScrollType.Horizontal) {
                            if (!this._isHoldAreaDone) {
                                if (e._gestureFlag |= 2, (i = Math.abs(this._beginTouchPos.x - a.x)) < o) return;
                                if (0 != (1 & e._gestureFlag) && i < Math.abs(this._beginTouchPos.y - a.y)) return;
                            }
                            s = !0;
                        } else {
                            if (e._gestureFlag = 3, !this._isHoldAreaDone && (i = Math.abs(this._beginTouchPos.y - a.y)) < o && (i = Math.abs(this._beginTouchPos.x - a.x)) < o) return;
                            n = s = !0;
                        }
                        var r = Math.floor(this._containerPos.x + a.x - this._beginTouchPos.x), h = Math.floor(this._containerPos.y + a.y - this._beginTouchPos.y);
                        n && (h > 0 ? this._bouncebackEffect ? null != this._header && 0 != this._header.maxHeight ? this._container.y = Math.floor(Math.min(.5 * h, this._header.maxHeight)) : this._container.y = Math.floor(Math.min(.5 * h, this._viewSize.y * e.PULL_RATIO)) : this._container.y = 0 : h < -this._overlapSize.y ? this._bouncebackEffect ? null != this._footer && this._footer.maxHeight > 0 ? this._container.y = Math.floor(Math.max(.5 * (h + this._overlapSize.y), -this._footer.maxHeight) - this._overlapSize.y) : this._container.y = Math.floor(Math.max(.5 * (h + this._overlapSize.y), -this._viewSize.y * e.PULL_RATIO) - this._overlapSize.y) : this._container.y = -this._overlapSize.y : this._container.y = h), 
                        s && (r > 0 ? this._bouncebackEffect ? null != this._header && 0 != this._header.maxWidth ? this._container.x = Math.floor(Math.min(.5 * r, this._header.maxWidth)) : this._container.x = Math.floor(Math.min(.5 * r, this._viewSize.x * e.PULL_RATIO)) : this._container.x = 0 : r < 0 - this._overlapSize.x ? this._bouncebackEffect ? null != this._footer && this._footer.maxWidth > 0 ? this._container.x = Math.floor(Math.max(.5 * (r + this._overlapSize.x), -this._footer.maxWidth) - this._overlapSize.x) : this._container.x = Math.floor(Math.max(.5 * (r + this._overlapSize.x), -this._viewSize.x * e.PULL_RATIO) - this._overlapSize.x) : this._container.x = -this._overlapSize.x : this._container.x = r);
                        var l = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, u = Laya.timer.currTimer / 1e3, _ = Math.max(u - this._lastMoveTime, 1 / l), c = a.x - this._lastTouchPos.x, d = a.y - this._lastTouchPos.y;
                        if (s || (c = 0), n || (d = 0), 0 != _) {
                            var g = _ * l - 1;
                            if (g > 1) {
                                var p = Math.pow(.833, g);
                                this._velocity.x = this._velocity.x * p, this._velocity.y = this._velocity.y * p;
                            }
                            this._velocity.x = t.ToolSet.lerp(this._velocity.x, 60 * c / l / _, 10 * _), this._velocity.y = t.ToolSet.lerp(this._velocity.y, 60 * d / l / _, 10 * _);
                        }
                        var f = this._lastTouchGlobalPos.x - Laya.stage.mouseX, y = this._lastTouchGlobalPos.y - Laya.stage.mouseY;
                        0 != c ? this._velocityScale = Math.abs(f / c) : 0 != d && (this._velocityScale = Math.abs(y / d)), 
                        this._lastTouchPos.setTo(a.x, a.y), this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY), 
                        this._lastMoveTime = u, this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x)), 
                        this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y)), 
                        0 != this._loop && (r = this._container.x, h = this._container.y, this.loopCheckingCurrent() && (this._containerPos.x += this._container.x - r, 
                        this._containerPos.y += this._container.y - h)), e.draggingPane = this, this._isHoldAreaDone = !0, 
                        this._dragged = !0, this._maskContainer.mouseEnabled = !1, this.updateScrollBarPos(), 
                        this.updateScrollBarVisible(), this._pageMode && this.updatePageController(), t.Events.dispatch(t.Events.SCROLL, this._owner.displayObject);
                    }
                }
            }, {
                key: "__mouseUp",
                value: function() {
                    if (this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove), 
                    this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp), 
                    this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click), e.draggingPane == this && (e.draggingPane = null), 
                    e._gestureFlag = 0, !this._dragged || !this._touchEffect) return this._dragged = !1, 
                    void (this._maskContainer.mouseEnabled = !0);
                    this._dragged = !1, this._maskContainer.mouseEnabled = !0, this._tweenStart.setTo(this._container.x, this._container.y), 
                    e.sEndPos.setTo(this._tweenStart.x, this._tweenStart.y);
                    var i = !1;
                    if (this._container.x > 0 ? (e.sEndPos.x = 0, i = !0) : this._container.x < -this._overlapSize.x && (e.sEndPos.x = -this._overlapSize.x, 
                    i = !0), this._container.y > 0 ? (e.sEndPos.y = 0, i = !0) : this._container.y < -this._overlapSize.y && (e.sEndPos.y = -this._overlapSize.y, 
                    i = !0), i) {
                        if (this._tweenChange.setTo(e.sEndPos.x - this._tweenStart.x, e.sEndPos.y - this._tweenStart.y), 
                        this._tweenChange.x < -t.UIConfig.touchDragSensitivity || this._tweenChange.y < -t.UIConfig.touchDragSensitivity ? (this._refreshEventDispatching = !0, 
                        t.Events.dispatch(t.Events.PULL_DOWN_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1) : (this._tweenChange.x > t.UIConfig.touchDragSensitivity || this._tweenChange.y > t.UIConfig.touchDragSensitivity) && (this._refreshEventDispatching = !0, 
                        t.Events.dispatch(t.Events.PULL_UP_RELEASE, this._owner.displayObject), this._refreshEventDispatching = !1), 
                        this._headerLockedSize > 0 && 0 == e.sEndPos[this._refreshBarAxis]) e.sEndPos[this._refreshBarAxis] = this._headerLockedSize, 
                        this._tweenChange.x = e.sEndPos.x - this._tweenStart.x, this._tweenChange.y = e.sEndPos.y - this._tweenStart.y; else if (this._footerLockedSize > 0 && e.sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                            var n = this._overlapSize[this._refreshBarAxis];
                            0 == n ? n = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : n += this._footerLockedSize, 
                            e.sEndPos[this._refreshBarAxis] = -n, this._tweenChange.x = e.sEndPos.x - this._tweenStart.x, 
                            this._tweenChange.y = e.sEndPos.y - this._tweenStart.y;
                        }
                        this._tweenDuration.setTo(e.TWEEN_TIME_DEFAULT, e.TWEEN_TIME_DEFAULT);
                    } else {
                        if (this._inertiaDisabled) this._tweenDuration.setTo(e.TWEEN_TIME_DEFAULT, e.TWEEN_TIME_DEFAULT); else {
                            var s = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60, o = (Laya.timer.currTimer / 1e3 - this._lastMoveTime) * s - 1;
                            if (o > 1) {
                                var a = Math.pow(.833, o);
                                this._velocity.x = this._velocity.x * a, this._velocity.y = this._velocity.y * a;
                            }
                            this.updateTargetAndDuration(this._tweenStart, e.sEndPos);
                        }
                        if (e.sOldChange.setTo(e.sEndPos.x - this._tweenStart.x, e.sEndPos.y - this._tweenStart.y), 
                        this.loopCheckingTarget(e.sEndPos), (this._pageMode || this._snapToItem) && this.alignPosition(e.sEndPos, !0), 
                        this._tweenChange.x = e.sEndPos.x - this._tweenStart.x, this._tweenChange.y = e.sEndPos.y - this._tweenStart.y, 
                        0 == this._tweenChange.x && 0 == this._tweenChange.y) return void this.updateScrollBarVisible();
                        (this._pageMode || this._snapToItem) && (this.fixDuration("x", e.sOldChange.x), 
                        this.fixDuration("y", e.sOldChange.y));
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
                    var i, n;
                    t[e] > 0 ? (i = this.getLoopPartSize(2, e), (n = this._tweenStart[e] - i) <= 0 && n >= -this._overlapSize[e] && (t[e] -= i, 
                    this._tweenStart[e] = n)) : t[e] < -this._overlapSize[e] && (i = this.getLoopPartSize(2, e), 
                    (n = this._tweenStart[e] + i) <= 0 && n >= -this._overlapSize[e] && (t[e] += i, 
                    this._tweenStart[e] = n));
                }
            }, {
                key: "loopCheckingNewPos",
                value: function(e, i) {
                    if (0 == this._overlapSize[i]) return e;
                    var n, s = "x" == i ? this._xPos : this._yPos, o = !1;
                    return e < .001 ? (e += this.getLoopPartSize(2, i)) > s && (n = this.getLoopPartSize(6, i), 
                    n = Math.ceil((e - s) / n) * n, s = t.ToolSet.clamp(s + n, 0, this._overlapSize[i]), 
                    o = !0) : e >= this._overlapSize[i] && (e -= this.getLoopPartSize(2, i)) < s && (n = this.getLoopPartSize(6, i), 
                    n = Math.ceil((s - e) / n) * n, s = t.ToolSet.clamp(s - n, 0, this._overlapSize[i]), 
                    o = !0), o && ("x" == i ? this._container.x = -Math.floor(s) : this._container.y = -Math.floor(s)), 
                    e;
                }
            }, {
                key: "alignPosition",
                value: function(t, i) {
                    if (this._pageMode) t.x = this.alignByPage(t.x, "x", i), t.y = this.alignByPage(t.y, "y", i); else if (this._snapToItem) {
                        var n = 0, s = 0;
                        i && (n = t.x - this._containerPos.x, s = t.y - this._containerPos.y);
                        var o = this._owner.getSnappingPositionWithDir(-t.x, -t.y, n, s, e.sHelperPoint);
                        t.x < 0 && t.x > -this._overlapSize.x && (t.x = -o.x), t.y < 0 && t.y > -this._overlapSize.y && (t.y = -o.y);
                    }
                }
            }, {
                key: "alignByPage",
                value: function(e, i, n) {
                    var s;
                    if (e > 0) s = 0; else if (e < -this._overlapSize[i]) s = Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1; else {
                        s = Math.floor(-e / this._pageSize[i]);
                        var o = n ? e - this._containerPos[i] : e - this._container[i], a = Math.min(this._pageSize[i], this._contentSize[i] - (s + 1) * this._pageSize[i]), r = -e - s * this._pageSize[i];
                        Math.abs(o) > this._pageSize[i] ? r > .5 * a && s++ : r > a * (o < 0 ? t.UIConfig.defaultScrollPagingThreshold : 1 - t.UIConfig.defaultScrollPagingThreshold) && s++, 
                        (e = -s * this._pageSize[i]) < -this._overlapSize[i] && (e = -this._overlapSize[i]);
                    }
                    if (n) {
                        var h, l = this._tweenStart[i];
                        h = l > 0 ? 0 : l < -this._overlapSize[i] ? Math.ceil(this._contentSize[i] / this._pageSize[i]) - 1 : Math.floor(-l / this._pageSize[i]);
                        var u = Math.floor(-this._containerPos[i] / this._pageSize[i]);
                        Math.abs(s - u) > 1 && Math.abs(h - u) <= 1 && (e = -(s = s > u ? u + 1 : u - 1) * this._pageSize[i]);
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
                value: function(t, i) {
                    var n = this._velocity[i], s = 0;
                    if (t > 0) t = 0; else if (t < -this._overlapSize[i]) t = -this._overlapSize[i]; else {
                        var o = Math.abs(n) * this._velocityScale;
                        Laya.Browser.onMobile && (o *= 1136 / Math.max(Laya.stage.width, Laya.stage.height));
                        var a = 0;
                        this._pageMode || !Laya.Browser.onMobile ? o > 500 && (a = Math.pow((o - 500) / 500, 2)) : o > 1e3 && (a = Math.pow((o - 1e3) / 1e3, 2)), 
                        0 != a && (a > 1 && (a = 1), o *= a, n *= a, this._velocity[i] = n, s = Math.log(60 / o) / Math.log(this._decelerationRate) / 60, 
                        t += Math.floor(n * s * .4));
                    }
                    return s < e.TWEEN_TIME_DEFAULT && (s = e.TWEEN_TIME_DEFAULT), this._tweenDuration[i] = s, 
                    t;
                }
            }, {
                key: "fixDuration",
                value: function(t, i) {
                    if (!(0 == this._tweenChange[t] || Math.abs(this._tweenChange[t]) >= Math.abs(i))) {
                        var n = Math.abs(this._tweenChange[t] / i) * this._tweenDuration[t];
                        n < e.TWEEN_TIME_DEFAULT && (n = e.TWEEN_TIME_DEFAULT), this._tweenDuration[t] = n;
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
                            var i = e.sHelperPoint;
                            i.setTo(this._header.width, this._header.height), i[this._refreshBarAxis] = t, this._header.setSize(i.x, i.y);
                        } else null != this._header.displayObject.parent && this._maskContainer.removeChild(this._header.displayObject);
                        if (null != this._footer) {
                            var n = this._overlapSize[this._refreshBarAxis];
                            t < -n || 0 == n && this._footerLockedSize > 0 ? (null == this._footer.displayObject.parent && this._maskContainer.addChildAt(this._footer.displayObject, 0), 
                            (i = e.sHelperPoint).setTo(this._footer.x, this._footer.y), i[this._refreshBarAxis] = n > 0 ? t + this._contentSize[this._refreshBarAxis] : Math.max(Math.min(t + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]), 
                            this._footer.setXY(i.x, i.y), i.setTo(this._footer.width, this._footer.height), 
                            i[this._refreshBarAxis] = n > 0 ? -n - t : this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis], 
                            this._footer.setSize(i.x, i.y)) : null != this._footer.displayObject.parent && this._maskContainer.removeChild(this._footer.displayObject);
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
                    var i;
                    if (0 != this._tweenChange[t]) {
                        if (this._tweenTime[t] += Laya.timer.delta / 1e3, this._tweenTime[t] >= this._tweenDuration[t]) i = this._tweenStart[t] + this._tweenChange[t], 
                        this._tweenChange[t] = 0; else {
                            var n = e.easeFunc(this._tweenTime[t], this._tweenDuration[t]);
                            i = this._tweenStart[t] + Math.floor(this._tweenChange[t] * n);
                        }
                        var s = 0, o = -this._overlapSize[t];
                        if (this._headerLockedSize > 0 && this._refreshBarAxis == t && (s = this._headerLockedSize), 
                        this._footerLockedSize > 0 && this._refreshBarAxis == t) {
                            var a = this._overlapSize[this._refreshBarAxis];
                            0 == a ? a = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : a += this._footerLockedSize, 
                            o = -a;
                        }
                        2 == this._tweening && this._bouncebackEffect ? i > 20 + s && this._tweenChange[t] > 0 || i > s && 0 == this._tweenChange[t] ? (this._tweenTime[t] = 0, 
                        this._tweenDuration[t] = e.TWEEN_TIME_DEFAULT, this._tweenChange[t] = -i + s, this._tweenStart[t] = i) : (i < o - 20 && this._tweenChange[t] < 0 || i < o && 0 == this._tweenChange[t]) && (this._tweenTime[t] = 0, 
                        this._tweenDuration[t] = e.TWEEN_TIME_DEFAULT, this._tweenChange[t] = o - i, this._tweenStart[t] = i) : i > s ? (i = s, 
                        this._tweenChange[t] = 0) : i < o && (i = o, this._tweenChange[t] = 0);
                    } else i = this._container[t];
                    return i;
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
            } ]), e;
        }();
        e._gestureFlag = 0, e.sHelperPoint = new Laya.Point(), e.sHelperRect = new Laya.Rectangle(), 
        e.sEndPos = new Laya.Point(), e.sOldChange = new Laya.Point(), e.TWEEN_TIME_GO = .5, 
        e.TWEEN_TIME_DEFAULT = .3, e.PULL_RATIO = .5, t.ScrollPane = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e(t) {
                r(this, e), this._owner = t, this._items = new Array(), this._totalDuration = 0, 
                this._autoPlayTimes = 1, this._autoPlayDelay = 0, this._timeScale = 1, this._startTime = 0, 
                this._endTime = 0;
            }
            return s(e, [ {
                key: "play",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                    this._play(t, e, i, n, s, !1);
                }
            }, {
                key: "playReverse",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], 
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0), i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                    this._play(t, 1, e, i, n, !0);
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    this.stop(!0, !0), this._totalTimes = n, this._reversed = r, this._startTime = o, 
                    this._endTime = a, this._playing = !0, this._paused = !1, this._onComplete = e;
                    for (var h = this._items.length, l = 0; l < h; l++) {
                        var u = this._items[l];
                        if (null == u.target ? u.targetId ? u.target = this._owner.getChildById(u.targetId) : u.target = this._owner : u.target != this._owner && u.target.parent != this._owner && (u.target = null), 
                        null != u.target && u.type == i.Transition) {
                            var _ = u.target.getTransition(u.value.transName);
                            if (_ == this && (_ = null), null != _) if (0 == u.value.playTimes) {
                                var c;
                                for (c = l - 1; c >= 0; c--) {
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
                    0 == s ? this.onDelayedPlay() : t.GTween.delayedCall(s).onComplete(this.onDelayedPlay, this);
                }
            }, {
                key: "stop",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._playing) {
                        this._playing = !1, this._totalTasks = 0, this._totalTimes = 0;
                        var n = this._onComplete;
                        this._onComplete = null, t.GTween.kill(this);
                        var s = this._items.length;
                        if (this._reversed) for (var o = s - 1; o >= 0; o--) {
                            var a = this._items[o];
                            null != a.target && this.stopItem(a, e);
                        } else for (o = 0; o < s; o++) null != (a = this._items[o]).target && this.stopItem(a, e);
                        i && null != n && n.run();
                    }
                }
            }, {
                key: "stopItem",
                value: function(t, e) {
                    if (0 != t.displayLockToken && (t.target.releaseDisplayLock(t.displayLockToken), 
                    t.displayLockToken = 0), null != t.tweener && (t.tweener.kill(e), t.tweener = null, 
                    t.type != i.Shake || e || (t.target._gearLocked = !0, t.target.setXY(t.target.x - t.value.lastOffsetX, t.target.y - t.value.lastOffsetY), 
                    t.target._gearLocked = !1)), t.type == i.Transition) {
                        var n = t.value.trans;
                        null != n && n.stop(e, !1);
                    }
                }
            }, {
                key: "setPaused",
                value: function(e) {
                    if (this._playing && this._paused != e) {
                        this._paused = e;
                        var n = t.GTween.getTween(this);
                        null != n && n.setPaused(e);
                        for (var s = this._items.length, o = 0; o < s; o++) {
                            var a = this._items[o];
                            null != a.target && (a.type == i.Transition ? null != a.value.trans && a.value.trans.setPaused(e) : a.type == i.Animation && (e ? (a.value.flag = a.target.getProp(t.ObjectPropID.Playing), 
                            a.target.setProp(t.ObjectPropID.Playing, !1)) : a.target.setProp(t.ObjectPropID.Playing, a.value.flag)), 
                            null != a.tweener && a.tweener.setPaused(e));
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._playing && t.GTween.kill(this);
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var n = this._items[i];
                        null != n.tweener && (n.tweener.kill(), n.tweener = null), n.target = null, n.hook = null, 
                        null != n.tweenConfig && (n.tweenConfig.endHook = null);
                    }
                    this._items.length = 0, this._playing = !1, this._onComplete = null;
                }
            }, {
                key: "setValue",
                value: function(t) {
                    for (var e, n = this._items.length, s = !1, o = 0; o < n; o++) {
                        var a = this._items[o];
                        if (a.label == t) e = null != a.tweenConfig ? a.tweenConfig.startValue : a.value, 
                        s = !0; else {
                            if (null == a.tweenConfig || a.tweenConfig.endLabel != t) continue;
                            e = a.tweenConfig.endValue, s = !0;
                        }
                        switch (a.type) {
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
                    if (!s) throw new Error("this.label not exists");
                }
            }, {
                key: "setHook",
                value: function(t, e) {
                    for (var i = this._items.length, n = !1, s = 0; s < i; s++) {
                        var o = this._items[s];
                        if (o.label == t) {
                            o.hook = e, n = !0;
                            break;
                        }
                        if (null != o.tweenConfig && o.tweenConfig.endLabel == t) {
                            o.tweenConfig.endHook = e, n = !0;
                            break;
                        }
                    }
                    if (!n) throw new Error("this.label not exists");
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
                    for (var i = this._items.length, n = !1, s = 0; s < i; s++) {
                        var o = this._items[s];
                        o.label == t && (o.targetId = e == this._owner || null == e ? "" : e.id, this._playing ? o.targetId.length > 0 ? o.target = this._owner.getChildById(o.targetId) : o.target = this._owner : o.target = null, 
                        n = !0);
                    }
                    if (!n) throw new Error("this.label not exists");
                }
            }, {
                key: "setDuration",
                value: function(t, e) {
                    for (var i = this._items.length, n = !1, s = 0; s < i; s++) {
                        var o = this._items[s];
                        null != o.tweenConfig && o.label == t && (o.tweenConfig.duration = e, n = !0);
                    }
                    if (!n) throw new Error("this.label not exists");
                }
            }, {
                key: "getLabelTime",
                value: function(t) {
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var n = this._items[i];
                        if (n.label == t) return n.time;
                        if (null != n.tweenConfig && n.tweenConfig.endLabel == t) return n.time + n.tweenConfig.duration;
                    }
                    return NaN;
                }
            }, {
                key: "updateFromRelations",
                value: function(t, e, n) {
                    var s = this._items.length;
                    if (0 != s) for (var o = 0; o < s; o++) {
                        var a = this._items[o];
                        a.type == i.XY && a.targetId == t && (null != a.tweenConfig ? (a.tweenConfig.startValue.b3 || (a.tweenConfig.startValue.f1 += e, 
                        a.tweenConfig.startValue.f2 += n), a.tweenConfig.endValue.b3 || (a.tweenConfig.endValue.f1 += e, 
                        a.tweenConfig.endValue.f2 += n)) : a.value.b3 || (a.value.f1 += e, a.value.f2 += n));
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
                    0 == (this._options & e.OPTION_AUTO_STOP_DISABLED) && this.stop(0 != (this._options & e.OPTION_AUTO_STOP_AT_END), !1);
                }
            }, {
                key: "onDelayedPlay",
                value: function() {
                    if (this.internalPlay(), this._playing = this._totalTasks > 0, this._playing) {
                        if (0 != (this._options & e.OPTION_IGNORE_DISPLAY_CONTROLLER)) for (var t = this._items.length, i = 0; i < t; i++) {
                            var n = this._items[i];
                            null != n.target && n.target != this._owner && (n.displayLockToken = n.target.addDisplayLock());
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
                    var t, e = this._items.length, n = !1;
                    if (this._reversed) for (s = e - 1; s >= 0; s--) null != (t = this._items[s]).target && this.playItem(t); else for (var s = 0; s < e; s++) null != (t = this._items[s]).target && (t.type == i.Animation && 0 != this._startTime && t.time <= this._startTime ? (n = !0, 
                    t.value.flag = !1) : this.playItem(t));
                    n && this.skipAnimations();
                }
            }, {
                key: "playItem",
                value: function(e) {
                    var n;
                    if (null != e.tweenConfig) {
                        if (n = this._reversed ? this._totalDuration - e.time - e.tweenConfig.duration : e.time, 
                        -1 == this._endTime || n <= this._endTime) {
                            var s, o;
                            switch (this._reversed ? (s = e.tweenConfig.endValue, o = e.tweenConfig.startValue) : (s = e.tweenConfig.startValue, 
                            o = e.tweenConfig.endValue), e.value.b1 = s.b1 || o.b1, e.value.b2 = s.b2 || o.b2, 
                            e.type) {
                              case i.XY:
                              case i.Size:
                              case i.Scale:
                              case i.Skew:
                                e.tweener = t.GTween.to2(s.f1, s.f2, o.f1, o.f2, e.tweenConfig.duration);
                                break;

                              case i.Alpha:
                              case i.Rotation:
                                e.tweener = t.GTween.to(s.f1, o.f1, e.tweenConfig.duration);
                                break;

                              case i.Color:
                                e.tweener = t.GTween.toColor(s.f1, o.f1, e.tweenConfig.duration);
                                break;

                              case i.ColorFilter:
                                e.tweener = t.GTween.to4(s.f1, s.f2, s.f3, s.f4, o.f1, o.f2, o.f3, o.f4, e.tweenConfig.duration);
                            }
                            e.tweener.setDelay(n).setEase(e.tweenConfig.easeType).setRepeat(e.tweenConfig.repeat, e.tweenConfig.yoyo).setTimeScale(this._timeScale).setTarget(e).onStart(this.onTweenStart, this).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                            this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - n), this._totalTasks++;
                        }
                    } else e.type == i.Shake ? (n = this._reversed ? this._totalDuration - e.time - e.value.duration : e.time, 
                    e.value.offsetX = e.value.offsetY = 0, e.value.lastOffsetX = e.value.lastOffsetY = 0, 
                    e.tweener = t.GTween.shake(0, 0, e.value.amplitude, e.value.duration).setDelay(n).setTimeScale(this._timeScale).setTarget(e).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), 
                    this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - e.time), this._totalTasks++) : (n = this._reversed ? this._totalDuration - e.time : e.time) <= this._startTime ? (this.applyValue(e), 
                    this.callHook(e, !1)) : (-1 == this._endTime || n <= this._endTime) && (this._totalTasks++, 
                    e.tweener = t.GTween.delayedCall(n).setTimeScale(this._timeScale).setTarget(e).onComplete(this.onDelayedPlayItem, this));
                    null != e.tweener && e.tweener.seek(this._startTime);
                }
            }, {
                key: "skipAnimations",
                value: function() {
                    for (var e, n, s, o, a, r, h = this._items.length, l = 0; l < h; l++) if (!((r = this._items[l]).type != i.Animation || r.time > this._startTime || (o = r.value).flag)) {
                        e = (a = r.target).getProp(t.ObjectPropID.Frame), n = a.getProp(t.ObjectPropID.Playing) ? 0 : -1, 
                        s = 0;
                        for (var u = l; u < h; u++) (r = this._items[u]).type != i.Animation || r.target != a || r.time > this._startTime || ((o = r.value).flag = !0, 
                        -1 != o.frame ? (e = o.frame, n = o.playing ? r.time : -1, s = 0) : o.playing ? n < 0 && (n = r.time) : (n >= 0 && (s += r.time - n), 
                        n = -1), this.callHook(r, !1));
                        n >= 0 && (s += this._startTime - n), a.setProp(t.ObjectPropID.Playing, n >= 0), 
                        a.setProp(t.ObjectPropID.Frame, e), s > 0 && a.setProp(t.ObjectPropID.DeltaTime, 1e3 * s);
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
                    var e, n, s = t.target;
                    s.type != i.XY && s.type != i.Size || (this._reversed ? (e = s.tweenConfig.endValue, 
                    n = s.tweenConfig.startValue) : (e = s.tweenConfig.startValue, n = s.tweenConfig.endValue), 
                    s.type == i.XY ? s.target != this._owner ? (e.b1 ? e.b3 && (t.startValue.x = e.f1 * this._owner.width) : t.startValue.x = s.target.x, 
                    e.b2 ? e.b3 && (t.startValue.y = e.f2 * this._owner.height) : t.startValue.y = s.target.y, 
                    n.b1 ? n.b3 && (t.endValue.x = n.f1 * this._owner.width) : t.endValue.x = t.startValue.x, 
                    n.b2 ? n.b3 && (t.endValue.y = n.f2 * this._owner.height) : t.endValue.y = t.startValue.y) : (e.b1 || (t.startValue.x = s.target.x - this._ownerBaseX), 
                    e.b2 || (t.startValue.y = s.target.y - this._ownerBaseY), n.b1 || (t.endValue.x = t.startValue.x), 
                    n.b2 || (t.endValue.y = t.startValue.y)) : (e.b1 || (t.startValue.x = s.target.width), 
                    e.b2 || (t.startValue.y = s.target.height), n.b1 || (t.endValue.x = t.startValue.x), 
                    n.b2 || (t.endValue.y = t.startValue.y)), s.tweenConfig.path && (s.value.b1 = s.value.b2 = !0, 
                    t.setPath(s.tweenConfig.path))), this.callHook(s, !1);
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
                            var n = this._onComplete;
                            this._onComplete = null, n.run();
                        }
                    }
                }
            }, {
                key: "applyValue",
                value: function(e) {
                    e.target._gearLocked = !0;
                    var n = e.value;
                    switch (e.type) {
                      case i.XY:
                        e.target == this._owner ? n.b1 && n.b2 ? e.target.setXY(n.f1 + this._ownerBaseX, n.f2 + this._ownerBaseY) : n.b1 ? e.target.x = n.f1 + this._ownerBaseX : e.target.y = n.f2 + this._ownerBaseY : n.b3 ? n.b1 && n.b2 ? e.target.setXY(n.f1 * this._owner.width, n.f2 * this._owner.height) : n.b1 ? e.target.x = n.f1 * this._owner.width : n.b2 && (e.target.y = n.f2 * this._owner.height) : n.b1 && n.b2 ? e.target.setXY(n.f1, n.f2) : n.b1 ? e.target.x = n.f1 : n.b2 && (e.target.y = n.f2);
                        break;

                      case i.Size:
                        n.b1 || (n.f1 = e.target.width), n.b2 || (n.f2 = e.target.height), e.target.setSize(n.f1, n.f2);
                        break;

                      case i.Pivot:
                        e.target.setPivot(n.f1, n.f2, e.target.pivotAsAnchor);
                        break;

                      case i.Alpha:
                        e.target.alpha = n.f1;
                        break;

                      case i.Rotation:
                        e.target.rotation = n.f1;
                        break;

                      case i.Scale:
                        e.target.setScale(n.f1, n.f2);
                        break;

                      case i.Skew:
                        e.target.setSkew(n.f1, n.f2);
                        break;

                      case i.Color:
                        e.target.setProp(t.ObjectPropID.Color, t.ToolSet.convertToHtmlColor(n.f1, !1));
                        break;

                      case i.Animation:
                        n.frame >= 0 && e.target.setProp(t.ObjectPropID.Frame, n.frame), e.target.setProp(t.ObjectPropID.Playing, n.playing), 
                        e.target.setProp(t.ObjectPropID.TimeScale, this._timeScale);
                        break;

                      case i.Visible:
                        e.target.visible = n.visible;
                        break;

                      case i.Transition:
                        if (this._playing) {
                            var s = n.trans;
                            if (null != s) {
                                this._totalTasks++;
                                var o = this._startTime > e.time ? this._startTime - e.time : 0, a = this._endTime >= 0 ? this._endTime - e.time : -1;
                                n.stopTime >= 0 && (a < 0 || a > n.stopTime) && (a = n.stopTime), s.timeScale = this._timeScale, 
                                s._play(Laya.Handler.create(this, this.onPlayTransCompleted, [ e ]), n.playTimes, 0, o, a, this._reversed);
                            }
                        }
                        break;

                      case i.Sound:
                        if (this._playing && e.time >= this._startTime) {
                            if (null == n.audioClip) {
                                var r = t.UIPackage.getItemByURL(n.sound);
                                n.audioClip = r ? r.file : n.sound;
                            }
                            n.audioClip && t.GRoot.inst.playOneShotSound(n.audioClip, n.volume);
                        }
                        break;

                      case i.Shake:
                        e.target.setXY(e.target.x - n.lastOffsetX + n.offsetX, e.target.y - n.lastOffsetY + n.offsetY), 
                        n.lastOffsetX = n.offsetX, n.lastOffsetY = n.offsetY;
                        break;

                      case i.ColorFilter:
                        t.ToolSet.setColorFilter(e.target.displayObject, [ n.f1, n.f2, n.f3, n.f4 ]);
                        break;

                      case i.Text:
                        e.target.text = n.text;
                        break;

                      case i.Icon:
                        e.target.icon = n.text;
                    }
                    e.target._gearLocked = !1;
                }
            }, {
                key: "setup",
                value: function(e) {
                    this.name = e.readS(), this._options = e.getInt32(), this._autoPlay = e.readBool(), 
                    this._autoPlayTimes = e.getInt32(), this._autoPlayDelay = e.getFloat32();
                    for (var i = e.getInt16(), s = 0; s < i; s++) {
                        var a = e.getInt16(), r = e.pos;
                        e.seek(r, 0);
                        var h = new n(e.readByte());
                        this._items[s] = h, h.time = e.getFloat32();
                        var l = e.getInt16();
                        if (h.targetId = l < 0 ? "" : this._owner.getChildAt(l).id, h.label = e.readS(), 
                        e.readBool()) {
                            if (e.seek(r, 1), h.tweenConfig = new o(), h.tweenConfig.duration = e.getFloat32(), 
                            h.time + h.tweenConfig.duration > this._totalDuration && (this._totalDuration = h.time + h.tweenConfig.duration), 
                            h.tweenConfig.easeType = e.readByte(), h.tweenConfig.repeat = e.getInt32(), h.tweenConfig.yoyo = e.readBool(), 
                            h.tweenConfig.endLabel = e.readS(), e.seek(r, 2), this.decodeValue(h, e, h.tweenConfig.startValue), 
                            e.seek(r, 3), this.decodeValue(h, e, h.tweenConfig.endValue), e.version >= 2) {
                                var u = e.getInt32();
                                if (u > 0) {
                                    h.tweenConfig.path = new t.GPath();
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
                                    h.tweenConfig.path.create(_);
                                }
                            }
                        } else h.time > this._totalDuration && (this._totalDuration = h.time), e.seek(r, 2), 
                        this.decodeValue(h, e, h.value);
                        e.pos = r + a;
                    }
                }
            }, {
                key: "decodeValue",
                value: function(t, e, n) {
                    switch (t.type) {
                      case i.XY:
                      case i.Size:
                      case i.Pivot:
                      case i.Skew:
                        n.b1 = e.readBool(), n.b2 = e.readBool(), n.f1 = e.getFloat32(), n.f2 = e.getFloat32(), 
                        e.version >= 2 && t.type == i.XY && (n.b3 = e.readBool());
                        break;

                      case i.Alpha:
                      case i.Rotation:
                        n.f1 = e.getFloat32();
                        break;

                      case i.Scale:
                        n.f1 = e.getFloat32(), n.f2 = e.getFloat32();
                        break;

                      case i.Color:
                        n.f1 = e.readColor();
                        break;

                      case i.Animation:
                        n.playing = e.readBool(), n.frame = e.getInt32();
                        break;

                      case i.Visible:
                        n.visible = e.readBool();
                        break;

                      case i.Sound:
                        n.sound = e.readS(), n.volume = e.getFloat32();
                        break;

                      case i.Transition:
                        n.transName = e.readS(), n.playTimes = e.getInt32();
                        break;

                      case i.Shake:
                        n.amplitude = e.getFloat32(), n.duration = e.getFloat32();
                        break;

                      case i.ColorFilter:
                        n.f1 = e.getFloat32(), n.f2 = e.getFloat32(), n.f3 = e.getFloat32(), n.f4 = e.getFloat32();
                        break;

                      case i.Text:
                      case i.Icon:
                        n.text = e.readS();
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
                    if (this._timeScale != e && (this._timeScale = e, this._playing)) for (var n = this._items.length, s = 0; s < n; s++) {
                        var o = this._items[s];
                        null != o.tweener ? o.tweener.setTimeScale(e) : o.type == i.Transition ? null != o.value.trans && (o.value.trans.timeScale = e) : o.type == i.Animation && null != o.target && o.target.setProp(t.ObjectPropID.TimeScale, e);
                    }
                }
            } ]), e;
        }();
        e.OPTION_IGNORE_DISPLAY_CONTROLLER = 1, e.OPTION_AUTO_STOP_DISABLED = 2, e.OPTION_AUTO_STOP_AT_END = 4, 
        t.Transition = e;
        var i = function t() {
            r(this, t);
        };
        i.XY = 0, i.Size = 1, i.Scale = 2, i.Pivot = 3, i.Alpha = 4, i.Rotation = 5, i.Color = 6, 
        i.Animation = 7, i.Visible = 8, i.Sound = 9, i.Transition = 10, i.Shake = 11, i.ColorFilter = 12, 
        i.Skew = 13, i.Text = 14, i.Icon = 15, i.Unknown = 16;
        var n = function t(e) {
            switch (r(this, t), this.type = e, e) {
              case i.XY:
              case i.Size:
              case i.Scale:
              case i.Pivot:
              case i.Skew:
              case i.Alpha:
              case i.Rotation:
              case i.Color:
              case i.ColorFilter:
                this.value = new d();
                break;

              case i.Animation:
                this.value = new h();
                break;

              case i.Shake:
                this.value = new _();
                break;

              case i.Sound:
                this.value = new l();
                break;

              case i.Transition:
                this.value = new u();
                break;

              case i.Visible:
                this.value = new a();
                break;

              case i.Text:
              case i.Icon:
                this.value = new c();
            }
        }, o = function e() {
            r(this, e), this.easeType = t.EaseType.QuadOut, this.startValue = new d(), this.endValue = new d();
        }, a = function t() {
            r(this, t);
        }, h = function t() {
            r(this, t);
        }, l = function t() {
            r(this, t);
        }, u = function t() {
            r(this, t);
        }, _ = function t() {
            r(this, t);
        }, c = function t() {
            r(this, t);
        }, d = function t() {
            r(this, t), this.b1 = this.b2 = !0;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "loadFromXML",
                value: function(t) {
                    e.strings = {};
                    for (var i = Laya.Utils.parseXMLFromString(t), n = e.findChildNode(i, "resources").childNodes, s = n.length, o = 0; o < s; o++) {
                        var a = n[o];
                        if ("string" == a.nodeName) {
                            var r = a.getAttribute("name"), h = a.textContent, l = r.indexOf("-");
                            if (-1 == l) continue;
                            var u = r.substr(0, l), _ = r.substr(l + 1), c = e.strings[u];
                            c || (c = {}, e.strings[u] = c), c[_] = h;
                        }
                    }
                }
            }, {
                key: "translateComponent",
                value: function(i) {
                    if (null != e.strings) {
                        var n = e.strings[i.owner.id + i.id];
                        if (null != n) {
                            var s, o, a, r, h, l, u, _, c, d = i.rawData;
                            d.seek(0, 2);
                            var g = d.getInt16();
                            for (h = 0; h < g; h++) {
                                u = d.getInt16(), _ = d.pos, d.seek(_, 0);
                                var p = d.readByte(), f = p;
                                d.skip(4), s = d.readS(), f == t.ObjectType.Component && d.seek(_, 6) && (f = d.readByte()), 
                                d.seek(_, 1), null != (o = n[s + "-tips"]) && d.writeS(o), d.seek(_, 2);
                                var y = d.getInt16();
                                for (l = 0; l < y; l++) {
                                    if (a = d.getInt16(), a += d.pos, 6 == d.readByte()) {
                                        for (d.skip(2), c = d.getInt16(), m = 0; m < c; m++) null != d.readS() && (null != (o = n[s + "-texts_" + m]) ? d.writeS(o) : d.skip(2));
                                        d.readBool() && null != (o = n[s + "-texts_def"]) && d.writeS(o);
                                    }
                                    d.pos = a;
                                }
                                if (p == t.ObjectType.Component && d.version >= 2) {
                                    d.seek(_, 4), d.skip(2), d.skip(4 * d.getUint16());
                                    for (var v = d.getUint16(), m = 0; m < v; m++) {
                                        var w = d.readS();
                                        0 == d.getUint16() && null != (o = n[s + "-cp-" + w]) ? d.writeS(o) : d.skip(2);
                                    }
                                }
                                switch (f) {
                                  case t.ObjectType.Text:
                                  case t.ObjectType.RichText:
                                  case t.ObjectType.InputText:
                                    null != (o = n[s]) && (d.seek(_, 6), d.writeS(o)), null != (o = n[s + "-prompt"]) && (d.seek(_, 4), 
                                    d.writeS(o));
                                    break;

                                  case t.ObjectType.List:
                                  case t.ObjectType.Tree:
                                    for (d.seek(_, 8), d.skip(2), r = d.getUint16(), l = 0; l < r; l++) {
                                        if (a = d.getUint16(), a += d.pos, d.skip(2), f == t.ObjectType.Tree && d.skip(2), 
                                        null != (o = n[s + "-" + l]) ? d.writeS(o) : d.skip(2), null != (o = n[s + "-" + l + "-0"]) && d.writeS(o), 
                                        d.version >= 2) for (d.skip(6), d.skip(4 * d.getUint16()), v = d.getUint16(), m = 0; m < v; m++) w = d.readS(), 
                                        0 == d.getUint16() && null != (o = n[s + "-" + l + "-" + w]) ? d.writeS(o) : d.skip(2);
                                        d.pos = a;
                                    }
                                    break;

                                  case t.ObjectType.Label:
                                    d.seek(_, 6) && d.readByte() == f && (null != (o = n[s]) ? d.writeS(o) : d.skip(2), 
                                    d.skip(2), d.readBool() && d.skip(4), d.skip(4), d.readBool() && null != (o = n[s + "-prompt"]) && d.writeS(o));
                                    break;

                                  case t.ObjectType.Button:
                                    d.seek(_, 6) && d.readByte() == f && (null != (o = n[s]) ? d.writeS(o) : d.skip(2), 
                                    null != (o = n[s + "-0"]) && d.writeS(o));
                                    break;

                                  case t.ObjectType.ComboBox:
                                    if (d.seek(_, 6) && d.readByte() == f) {
                                        for (r = d.getInt16(), l = 0; l < r; l++) a = d.getInt16(), a += d.pos, null != (o = n[s + "-" + l]) && d.writeS(o), 
                                        d.pos = a;
                                        null != (o = n[s]) && d.writeS(o);
                                    }
                                }
                                d.pos = _ + u;
                            }
                        }
                    }
                }
            }, {
                key: "findChildNode",
                value: function(t, e) {
                    var i = t.childNodes, n = i.length;
                    if (n > 0) for (var s = 0; s < n; s++) {
                        var o = i[s];
                        if (o.nodeName == e) return o;
                    }
                    return null;
                }
            } ]), e;
        }();
        e.strings = null, t.TranslationHelper = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function t() {
            r(this, t);
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
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "setExtension",
                value: function(i, n) {
                    if (null == i) throw new Error("Invaild url: " + i);
                    var s = t.UIPackage.getItemByURL(i);
                    null != s && (s.extensionType = n), e.packageItemExtensions[i] = n;
                }
            }, {
                key: "setPackageItemExtension",
                value: function(t, i) {
                    e.setExtension(t, i);
                }
            }, {
                key: "setLoaderExtension",
                value: function(t) {
                    e.loaderType = t;
                }
            }, {
                key: "resolvePackageItemExtension",
                value: function(t) {
                    var i = e.packageItemExtensions["ui://" + t.owner.id + t.id];
                    i || (i = e.packageItemExtensions["ui://" + t.owner.name + "/" + t.name]), i && (t.extensionType = i);
                }
            }, {
                key: "newObject",
                value: function(t) {
                    return t.extensionType ? new t.extensionType() : e.newObject2(t.objectType);
                }
            }, {
                key: "newObject2",
                value: function(i) {
                    switch (i) {
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
                        return e.loaderType ? new e.loaderType() : new t.GLoader();

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
            } ]), e;
        }();
        e.packageItemExtensions = {}, t.UIObjectFactory = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e), this._items = [], this._itemsById = {}, this._itemsByName = {}, this._sprites = {}, 
                this._dependencies = Array(), this._branches = Array(), this._branchIndex = -1;
            }
            return s(e, [ {
                key: "loadPackage",
                value: function(n) {
                    if (1179080009 != n.getUint32()) throw new Error("FairyGUI: old namespace sunnyboxs found in '" + this._resKey + "'");
                    n.version = n.getInt32();
                    var s = n.readBool();
                    if (this._id = n.readUTFString(), this._name = n.readUTFString(), n.skip(20), s) {
                        var o = new Uint8Array(n.buffer, n.pos, n.length - n.pos);
                        o = new Zlib.RawInflate(o).decompress();
                        var a = new t.ByteBuffer(o);
                        a.version = n.version, n = a;
                    }
                    var r, h, l, u, _, c = n.version >= 2, d = n.pos;
                    n.seek(d, 4), r = n.getInt32();
                    var g, p = [];
                    for (h = 0; h < r; h++) p[h] = n.readUTFString();
                    for (n.stringTable = p, n.seek(d, 0), r = n.getInt16(), h = 0; h < r; h++) this._dependencies.push({
                        id: n.readS(),
                        name: n.readS()
                    });
                    c && ((r = n.getInt16()) > 0 && (this._branches = n.readSArray(r), e._branch && (this._branchIndex = this._branches.indexOf(e._branch))), 
                    _ = r > 0), n.seek(d, 1);
                    var f = this._resKey + "_";
                    for (r = n.getUint16(), h = 0; h < r; h++) {
                        switch (l = n.getInt32(), l += n.pos, (g = new t.PackageItem()).owner = this, g.type = n.readByte(), 
                        g.id = n.readS(), g.name = n.readS(), n.readS(), (u = n.readS()) && (g.file = u), 
                        n.readBool(), g.width = n.getInt32(), g.height = n.getInt32(), g.type) {
                          case t.PackageItemType.Image:
                            g.objectType = t.ObjectType.Image;
                            var y = n.readByte();
                            1 == y ? (g.scale9Grid = new Laya.Rectangle(), g.scale9Grid.x = n.getInt32(), g.scale9Grid.y = n.getInt32(), 
                            g.scale9Grid.width = n.getInt32(), g.scale9Grid.height = n.getInt32(), g.tileGridIndice = n.getInt32()) : 2 == y && (g.scaleByTile = !0), 
                            g.smoothing = n.readBool();
                            break;

                          case t.PackageItemType.MovieClip:
                            g.smoothing = n.readBool(), g.objectType = t.ObjectType.MovieClip, g.rawData = n.readBuffer();
                            break;

                          case t.PackageItemType.Font:
                            g.rawData = n.readBuffer();
                            break;

                          case t.PackageItemType.Component:
                            var v = n.readByte();
                            g.objectType = v > 0 ? v : t.ObjectType.Component, g.rawData = n.readBuffer(), t.UIObjectFactory.resolvePackageItemExtension(g);
                            break;

                          case t.PackageItemType.Atlas:
                          case t.PackageItemType.Sound:
                          case t.PackageItemType.Misc:
                            g.file = f + g.file;
                        }
                        if (c) {
                            (u = n.readS()) && (g.name = u + "/" + g.name);
                            var m = n.getUint8();
                            m > 0 && (_ ? g.branches = n.readSArray(m) : this._itemsById[n.readS()] = g);
                            var w = n.getUint8();
                            w > 0 && (g.highResolution = n.readSArray(w));
                        }
                        this._items.push(g), this._itemsById[g.id] = g, null != g.name && (this._itemsByName[g.name] = g), 
                        n.pos = l;
                    }
                    for (n.seek(d, 2), r = n.getUint16(), h = 0; h < r; h++) {
                        l = n.getUint16(), l += n.pos;
                        var k = n.readS();
                        g = this._itemsById[n.readS()];
                        var b = new i();
                        b.atlas = g, b.rect.x = n.getInt32(), b.rect.y = n.getInt32(), b.rect.width = n.getInt32(), 
                        b.rect.height = n.getInt32(), b.rotated = n.readBool(), c && n.readBool() ? (b.offset.x = n.getInt32(), 
                        b.offset.y = n.getInt32(), b.originalSize.x = n.getInt32(), b.originalSize.y = n.getInt32()) : (b.originalSize.x = b.rect.width, 
                        b.originalSize.y = b.rect.height), this._sprites[k] = b, n.pos = l;
                    }
                    if (n.seek(d, 3)) for (r = n.getUint16(), h = 0; h < r; h++) l = n.getInt32(), l += n.pos, 
                    (g = this._itemsById[n.readS()]) && g.type == t.PackageItemType.Image && (g.pixelHitTestData = new t.PixelHitTestData(), 
                    g.pixelHitTestData.load(n)), n.pos = l;
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
                        var n = this._items[i];
                        n.type == t.PackageItemType.Atlas && null != n.texture && Laya.loader.clearTextureRes(n.texture.url);
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    for (var e = this._items.length, i = 0; i < e; i++) {
                        var n = this._items[i];
                        n.type == t.PackageItemType.Atlas ? null != n.texture && (n.texture.destroy(), n.texture = null) : n.type == t.PackageItemType.Sound && Laya.SoundManager.destroySound(n.file);
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
                value: function(i, n) {
                    var s;
                    return null == (s = i.type == t.PackageItemType.Component && n ? new n() : t.UIObjectFactory.newObject(i)) ? null : (e._constructing++, 
                    s.packageItem = i, s.constructFromResource(), e._constructing--, s);
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
                                var n = this.getItemAsset(i.atlas);
                                e.texture = Laya.Texture.create(n, i.rect.x, i.rect.y, i.rect.width, i.rect.height, i.offset.x, i.offset.y, i.originalSize.x, i.originalSize.y);
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
                    var n, s, o, a, r, h = i.getInt16();
                    e.frames = [];
                    for (var l = 0; l < h; l++) {
                        var u = i.getInt16();
                        if (u += i.pos, s = new t.Frame(), a = i.getInt32(), r = i.getInt32(), i.getInt32(), 
                        i.getInt32(), s.addDelay = i.getInt32(), null != (n = i.readS()) && null != (o = this._sprites[n])) {
                            var _ = this.getItemAsset(o.atlas);
                            s.texture = Laya.Texture.create(_, o.rect.x, o.rect.y, o.rect.width, o.rect.height, a, r, e.width, e.height);
                        }
                        e.frames[l] = s, i.pos = u;
                    }
                }
            }, {
                key: "loadFont",
                value: function(e) {
                    var i = new t.BitmapFont();
                    e.bitmapFont = i;
                    var n = e.rawData;
                    n.seek(0, 0), i.ttf = n.readBool(), i.tint = n.readBool(), i.resizable = n.readBool(), 
                    n.readBool(), i.size = n.getInt32();
                    var s, o, a = n.getInt32(), r = n.getInt32(), h = null, l = this._sprites[e.id];
                    null != l && (h = this.getItemAsset(l.atlas)), n.seek(0, 1);
                    for (var u = null, _ = n.getInt32(), c = 0; c < _; c++) {
                        var d = n.getInt16();
                        d += n.pos, u = new t.BMGlyph();
                        var g = n.readChar();
                        i.glyphs[g] = u;
                        var p = n.readS(), f = n.getInt32(), y = n.getInt32();
                        if (u.x = n.getInt32(), u.y = n.getInt32(), s = n.getInt32(), o = n.getInt32(), 
                        u.advance = n.getInt32(), u.channel = n.readByte(), 1 == u.channel ? u.channel = 3 : 2 == u.channel ? u.channel = 2 : 3 == u.channel && (u.channel = 1), 
                        i.ttf) u.texture = Laya.Texture.create(h, f + l.rect.x, y + l.rect.y, s, o), u.lineHeight = r; else {
                            var v = this._itemsById[p];
                            v && (s = (v = v.getBranch()).width, o = v.height, v = v.getHighResolution(), this.getItemAsset(v), 
                            u.texture = v.texture), 0 == u.advance && (u.advance = 0 == a ? u.x + s : a), u.lineHeight = u.y < 0 ? o : u.y + o, 
                            u.lineHeight < i.size && (u.lineHeight = i.size);
                        }
                        u.xMax = u.x + s, u.yMax = u.y + o, n.pos = d;
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
                    null != this._customId && delete e._instById[this._customId], this._customId = t, 
                    null != this._customId && (e._instById[this._customId] = this);
                }
            } ], [ {
                key: "getVar",
                value: function(t) {
                    return e._vars[t];
                }
            }, {
                key: "setVar",
                value: function(t, i) {
                    e._vars[t] = i;
                }
            }, {
                key: "getById",
                value: function(t) {
                    return e._instById[t];
                }
            }, {
                key: "getByName",
                value: function(t) {
                    return e._instByName[t];
                }
            }, {
                key: "addPackage",
                value: function(i, n) {
                    if (!(n || (n = t.AssetProxy.inst.getRes(i + "." + t.UIConfig.packageFileExtension)) && 0 != n.byteLength)) throw new Error("namespace sunnyboxs not ready: " + i);
                    var s = new t.ByteBuffer(n), o = new e();
                    return o._resKey = i, o.loadPackage(s), e._instById[o.id] = o, e._instByName[o.name] = o, 
                    e._instById[i] = o, o;
                }
            }, {
                key: "loadPackage",
                value: function(i, n) {
                    var s = e._instById[i];
                    if (s) n.runWith(s); else {
                        var o = i + "." + t.UIConfig.packageFileExtension, a = Laya.Handler.create(this, function(s) {
                            var o = new e();
                            o._resKey = i, o.loadPackage(new t.ByteBuffer(s));
                            for (var a = o._items.length, r = [], h = 0; h < a; h++) {
                                var l = o._items[h];
                                l.type == t.PackageItemType.Atlas ? r.push({
                                    url: l.file,
                                    type: Laya.Loader.IMAGE
                                }) : l.type == t.PackageItemType.Sound && r.push({
                                    url: l.file,
                                    type: Laya.Loader.SOUND
                                });
                            }
                            r.length > 0 ? t.AssetProxy.inst.load(r, Laya.Handler.create(this, function() {
                                e._instById[o.id] = o, e._instByName[o.name] = o, e._instByName[o._resKey] = o, 
                                n.runWith(o);
                            }, null, !0)) : (e._instById[o.id] = o, e._instByName[o.name] = o, e._instByName[o._resKey] = o, 
                            n.runWith(o));
                        }, null, !0);
                        t.AssetProxy.inst.load(o, a, null, Laya.Loader.BUFFER);
                    }
                }
            }, {
                key: "removePackage",
                value: function(t) {
                    var i = e._instById[t];
                    if (i || (i = e._instByName[t]), !i) throw new Error("unknown package: " + t);
                    i.dispose(), delete e._instById[i.id], delete e._instByName[i.name], delete e._instById[i._resKey], 
                    null != i._customId && delete e._instById[i._customId];
                }
            }, {
                key: "createObject",
                value: function(t, i, n) {
                    var s = e.getByName(t);
                    return s ? s.createObject(i, n) : null;
                }
            }, {
                key: "createObjectFromURL",
                value: function(t, i) {
                    var n = e.getItemByURL(t);
                    return n ? n.owner.internalCreateObject(n, i) : null;
                }
            }, {
                key: "getItemURL",
                value: function(t, i) {
                    var n = e.getByName(t);
                    if (!n) return null;
                    var s = n._itemsByName[i];
                    return s ? "ui://" + n.id + s.id : null;
                }
            }, {
                key: "getItemByURL",
                value: function(t) {
                    var i = t.indexOf("//");
                    if (-1 == i) return null;
                    var n = t.indexOf("/", i + 2);
                    if (-1 == n) {
                        if (t.length > 13) {
                            var s = t.substr(5, 8), o = e.getById(s);
                            if (null != o) {
                                var a = t.substr(13);
                                return o.getItemById(a);
                            }
                        }
                    } else {
                        var r = t.substr(i + 2, n - i - 2);
                        if (null != (o = e.getByName(r))) {
                            var h = t.substr(n + 1);
                            return o.getItemByName(h);
                        }
                    }
                    return null;
                }
            }, {
                key: "getItemAssetByURL",
                value: function(t) {
                    var i = e.getItemByURL(t);
                    return null == i ? null : i.owner.getItemAsset(i);
                }
            }, {
                key: "normalizeURL",
                value: function(t) {
                    if (null == t) return null;
                    var i = t.indexOf("//");
                    if (-1 == i) return null;
                    var n = t.indexOf("/", i + 2);
                    if (-1 == n) return t;
                    var s = t.substr(i + 2, n - i - 2), o = t.substr(n + 1);
                    return e.getItemURL(s, o);
                }
            }, {
                key: "setStringsSource",
                value: function(e) {
                    t.TranslationHelper.loadFromXML(e);
                }
            }, {
                key: "branch",
                get: function() {
                    return e._branch;
                },
                set: function(t) {
                    for (var i in e._branch = t, e._instById) {
                        var n = e._instById[i];
                        n._branches && (n._branchIndex = n._branches.indexOf(t));
                    }
                }
            } ]), e;
        }();
        e._constructing = 0, e._instById = {}, e._instByName = {}, e._branch = "", e._vars = {}, 
        t.UIPackage = e;
        var i = function t() {
            r(this, t), this.rect = new Laya.Rectangle(), this.offset = new Laya.Point(), this.originalSize = new Laya.Point();
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return e._requestingCmd = 0, e.focusable = !0, e._uiSources = [], e.bringToFontOnClick = t.UIConfig.bringWindowToFrontOnClick, 
                e.displayObject.on(Laya.Event.DISPLAY, e, e.__onShown), e.displayObject.on(Laya.Event.UNDISPLAY, e, e.__onHidden), 
                e.displayObject.on(Laya.Event.MOUSE_DOWN, e, e.__mouseDown), e;
            }
            return a(i, t.GComponent), s(i, [ {
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
                    for (var t = this._uiSources.length, e = 0; e < t; e++) if (!this._uiSources[e].loaded) return;
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
                    null != this.parent && this.hideImmediately(), n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "dispose", this).call(this);
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
            } ]), i;
        }();
        t.Window = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, [ {
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
            } ]), e;
        }();
        t.ControllerAction = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
            }
            return a(i, t.ControllerAction), s(i, [ {
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup", this).call(this, t), 
                    this.objectId = t.readS(), this.controllerName = t.readS(), this.targetPage = t.readS();
                }
            } ]), i;
        }();
        t.ChangePageAction = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t.playTimes = 1, t.delay = 0, t.stopOnExit = !1, t;
            }
            return a(i, t.ControllerAction), s(i, [ {
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
                    n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setup", this).call(this, t), 
                    this.transitionName = t.readS(), this.playTimes = t.getInt32(), this.delay = t.getFloat32(), 
                    this.stopOnExit = t.readBool();
                }
            } ]), i;
        }();
        t.PlayTransitionAction = e;
    }(fgui || (fgui = {})), function(t) {
        t.BitmapFont = function t() {
            r(this, t), this.size = 0, this.glyphs = {};
        }, t.BMGlyph = function t() {
            r(this, t), this.x = 0, this.y = 0, this.xMax = 0, this.yMax = 0, this.advance = 0, 
            this.lineHeight = 0, this.channel = 0;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "fill",
                value: function(i, n, s, o, a, r) {
                    if (r <= 0) return null;
                    if (r >= .9999) return [ 0, 0, i, 0, i, n, 0, n ];
                    var h;
                    switch (s) {
                      case t.FillMethod.Horizontal:
                        h = e.fillHorizontal(i, n, o, r);
                        break;

                      case t.FillMethod.Vertical:
                        h = e.fillVertical(i, n, o, r);
                        break;

                      case t.FillMethod.Radial90:
                        h = e.fillRadial90(i, n, o, a, r);
                        break;

                      case t.FillMethod.Radial180:
                        h = e.fillRadial180(i, n, o, a, r);
                        break;

                      case t.FillMethod.Radial360:
                        h = e.fillRadial360(i, n, o, a, r);
                    }
                    return h;
                }
            }, {
                key: "fillHorizontal",
                value: function(e, i, n, s) {
                    var o = e * s;
                    return n == t.FillOrigin.Left || n == t.FillOrigin.Top ? [ 0, 0, o, 0, o, i, 0, i ] : [ e, 0, e, i, e - o, i, e - o, 0 ];
                }
            }, {
                key: "fillVertical",
                value: function(e, i, n, s) {
                    var o = i * s;
                    return n == t.FillOrigin.Left || n == t.FillOrigin.Top ? [ 0, 0, 0, o, e, o, e, 0 ] : [ 0, i, e, i, e, i - o, 0, i - o ];
                }
            }, {
                key: "fillRadial90",
                value: function(e, i, n, s, o) {
                    var a, r, h;
                    switch ((!s || n != t.FillOrigin.TopRight && n != t.FillOrigin.BottomLeft) && (s || n != t.FillOrigin.TopLeft && n != t.FillOrigin.BottomRight) || (o = 1 - o), 
                    a = ((r = e * Math.tan(Math.PI / 2 * o)) - i) / r, n) {
                      case t.FillOrigin.TopLeft:
                        h = s ? r <= i ? [ 0, 0, e, r, e, 0 ] : [ 0, 0, e * (1 - a), i, e, i, e, 0 ] : r <= i ? [ 0, 0, e, r, e, i, 0, i ] : [ 0, 0, e * (1 - a), i, 0, i ];
                        break;

                      case t.FillOrigin.TopRight:
                        h = s ? r <= i ? [ e, 0, 0, r, 0, i, e, i ] : [ e, 0, e * a, i, e, i ] : r <= i ? [ e, 0, 0, r, 0, 0 ] : [ e, 0, e * a, i, 0, i, 0, 0 ];
                        break;

                      case t.FillOrigin.BottomLeft:
                        h = s ? r <= i ? [ 0, i, e, i - r, e, 0, 0, 0 ] : [ 0, i, e * (1 - a), 0, 0, 0 ] : r <= i ? [ 0, i, e, i - r, e, i ] : [ 0, i, e * (1 - a), 0, e, 0, e, i ];
                        break;

                      case t.FillOrigin.BottomRight:
                        h = s ? r <= i ? [ e, i, 0, i - r, 0, i ] : [ e, i, e * a, 0, 0, 0, 0, i ] : r <= i ? [ e, i, 0, i - r, 0, 0, e, 0 ] : [ e, i, e * a, 0, e, 0 ];
                    }
                    return h;
                }
            }, {
                key: "movePoints",
                value: function(t, e, i) {
                    for (var n = t.length, s = 0; s < n; s += 2) t[s] += e, t[s + 1] += i;
                }
            }, {
                key: "fillRadial180",
                value: function(i, n, s, o, a) {
                    var r;
                    switch (s) {
                      case t.FillOrigin.Top:
                        a <= .5 ? (a /= .5, r = e.fillRadial90(i / 2, n, o ? t.FillOrigin.TopLeft : t.FillOrigin.TopRight, o, a), 
                        o && e.movePoints(r, i / 2, 0)) : (a = (a - .5) / .5, r = e.fillRadial90(i / 2, n, o ? t.FillOrigin.TopRight : t.FillOrigin.TopLeft, o, a), 
                        o ? r.push(i, n, i, 0) : (e.movePoints(r, i / 2, 0), r.push(0, n, 0, 0)));
                        break;

                      case t.FillOrigin.Bottom:
                        a <= .5 ? (a /= .5, r = e.fillRadial90(i / 2, n, o ? t.FillOrigin.BottomRight : t.FillOrigin.BottomLeft, o, a), 
                        o || e.movePoints(r, i / 2, 0)) : (a = (a - .5) / .5, r = e.fillRadial90(i / 2, n, o ? t.FillOrigin.BottomLeft : t.FillOrigin.BottomRight, o, a), 
                        o ? (e.movePoints(r, i / 2, 0), r.push(0, 0, 0, n)) : r.push(i, 0, i, n));
                        break;

                      case t.FillOrigin.Left:
                        a <= .5 ? (a /= .5, r = e.fillRadial90(i, n / 2, o ? t.FillOrigin.BottomLeft : t.FillOrigin.TopLeft, o, a), 
                        o || e.movePoints(r, 0, n / 2)) : (a = (a - .5) / .5, r = e.fillRadial90(i, n / 2, o ? t.FillOrigin.TopLeft : t.FillOrigin.BottomLeft, o, a), 
                        o ? (e.movePoints(r, 0, n / 2), r.push(i, 0, 0, 0)) : r.push(i, n, 0, n));
                        break;

                      case t.FillOrigin.Right:
                        a <= .5 ? (a /= .5, r = e.fillRadial90(i, n / 2, o ? t.FillOrigin.TopRight : t.FillOrigin.BottomRight, o, a), 
                        o && e.movePoints(r, 0, n / 2)) : (a = (a - .5) / .5, r = e.fillRadial90(i, n / 2, o ? t.FillOrigin.BottomRight : t.FillOrigin.TopRight, o, a), 
                        o ? r.push(0, n, i, n) : (e.movePoints(r, 0, n / 2), r.push(0, 0, i, 0)));
                    }
                    return r;
                }
            }, {
                key: "fillRadial360",
                value: function(i, n, s, o, a) {
                    var r;
                    switch (s) {
                      case t.FillOrigin.Top:
                        a <= .5 ? (a /= .5, r = e.fillRadial180(i / 2, n, o ? t.FillOrigin.Left : t.FillOrigin.Right, o, a), 
                        o && e.movePoints(r, i / 2, 0)) : (a = (a - .5) / .5, r = e.fillRadial180(i / 2, n, o ? t.FillOrigin.Right : t.FillOrigin.Left, o, a), 
                        o ? r.push(i, n, i, 0, i / 2, 0) : (e.movePoints(r, i / 2, 0), r.push(0, n, 0, 0, i / 2, 0)));
                        break;

                      case t.FillOrigin.Bottom:
                        a <= .5 ? (a /= .5, r = e.fillRadial180(i / 2, n, o ? t.FillOrigin.Right : t.FillOrigin.Left, o, a), 
                        o || e.movePoints(r, i / 2, 0)) : (a = (a - .5) / .5, r = e.fillRadial180(i / 2, n, o ? t.FillOrigin.Left : t.FillOrigin.Right, o, a), 
                        o ? (e.movePoints(r, i / 2, 0), r.push(0, 0, 0, n, i / 2, n)) : r.push(i, 0, i, n, i / 2, n));
                        break;

                      case t.FillOrigin.Left:
                        a <= .5 ? (a /= .5, r = e.fillRadial180(i, n / 2, o ? t.FillOrigin.Bottom : t.FillOrigin.Top, o, a), 
                        o || e.movePoints(r, 0, n / 2)) : (a = (a - .5) / .5, r = e.fillRadial180(i, n / 2, o ? t.FillOrigin.Top : t.FillOrigin.Bottom, o, a), 
                        o ? (e.movePoints(r, 0, n / 2), r.push(i, 0, 0, 0, 0, n / 2)) : r.push(i, n, 0, n, 0, n / 2));
                        break;

                      case t.FillOrigin.Right:
                        a <= .5 ? (a /= .5, r = e.fillRadial180(i, n / 2, o ? t.FillOrigin.Top : t.FillOrigin.Bottom, o, a), 
                        o && e.movePoints(r, 0, n / 2)) : (a = (a - .5) / .5, r = e.fillRadial180(i, n / 2, o ? t.FillOrigin.Bottom : t.FillOrigin.Top, o, a), 
                        o ? r.push(0, n, i, n, i, n / 2) : (e.movePoints(r, 0, n / 2), r.push(0, 0, i, 0, i, n / 2)));
                    }
                    return r;
                }
            } ]), e;
        }();
        t.FillUtils = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t._scaleByTile = !1, t._scale9Grid = null, t._tileGridIndice = 0, t._needRebuild = 0, 
                t._fillMethod = 0, t._fillOrigin = 0, t._fillAmount = 0, t._fillClockwise = !1, 
                t._mask = null, t.mouseEnabled = !1, t._color = "#FFFFFF", t;
            }
            return a(i, Laya.Sprite), s(i, [ {
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
                    var t = this._width, e = this._height, i = this.graphics, n = this._source;
                    if (i.clear(), null != n && 0 != t && 0 != e) if (this._scaleByTile) i.fillTexture(n, 0, 0, t, e); else if (null != this._scale9Grid) {
                        if (!this._sizeGrid) {
                            var s = n.width, o = n.height, a = this._scale9Grid.x, r = Math.max(s - this._scale9Grid.right, 0), h = this._scale9Grid.y, l = Math.max(o - this._scale9Grid.bottom, 0);
                            this._sizeGrid = [ h, r, l, a ];
                        }
                        i.draw9Grid(n, 0, 0, t, e, this._sizeGrid);
                    } else i.drawImage(n, 0, 0, t, e);
                }
            }, {
                key: "doFill",
                value: function() {
                    var e = this._width, i = this._height, n = this._mask.graphics;
                    if (n.clear(), 0 != e && 0 != i) {
                        var s = t.FillUtils.fill(e, i, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
                        if (null == s) return this.mask = null, void (this.mask = this._mask);
                        n.drawPoly(0, 0, s, "#FFFFFF");
                    }
                }
            }, {
                key: "width",
                set: function(t) {
                    this._width !== t && (n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "set_width", this).call(this, t), 
                    this.markChanged(1));
                }
            }, {
                key: "height",
                set: function(t) {
                    this._height !== t && (n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "set_height", this).call(this, t), 
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
            } ]), i;
        }();
        t.Image = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i() {
                r(this, i);
                var t = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t.interval = 0, t.swing = !1, t.repeatDelay = 0, t.timeScale = 1, t._playing = !0, 
                t._frameCount = 0, t._frame = 0, t._start = 0, t._end = 0, t._times = 0, t._endAt = 0, 
                t._status = 0, t._endHandler = null, t._frameElapsed = 0, t._reversed = !1, t._repeatedCount = 0, 
                t.mouseEnabled = !1, t.setPlaySettings(), t.on(Laya.Event.DISPLAY, t, t.__addToStage), 
                t.on(Laya.Event.UNDISPLAY, t, t.__removeFromStage), t;
            }
            return a(i, t.Image), s(i, [ {
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
                    for (var e = this._frame, i = this._reversed, n = t; ;) {
                        var s = this.interval + this._frames[this._frame].addDelay;
                        if (0 == this._frame && this._repeatedCount > 0 && (s += this.repeatDelay), t < s) {
                            this._frameElapsed = 0;
                            break;
                        }
                        if (t -= s, this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, 
                        this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), 
                        this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, 
                        this._repeatedCount++)), this._frame == e && this._reversed == i) {
                            var o = n - t;
                            t -= Math.floor(t / o) * o;
                        }
                    }
                    this.drawFrame();
                }
            }, {
                key: "setPlaySettings",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this._start = t, this._end = e, (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), 
                    this._times = i, this._endAt = n, -1 == this._endAt && (this._endAt = this._end), 
                    this._status = 0, this._endHandler = s, this.frame = t;
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
            } ]), i;
        }();
        t.MovieClip = e, t.Frame = function t() {
            r(this, t), this.addDelay = 0;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e(t) {
                r(this, e), this._owner = t;
            }
            return s(e, [ {
                key: "dispose",
                value: function() {
                    null != this._tweenConfig && null != this._tweenConfig._tweener && (this._tweenConfig._tweener.kill(), 
                    this._tweenConfig._tweener = null);
                }
            }, {
                key: "setup",
                value: function(e) {
                    var n, s;
                    this._controller = this._owner.parent.getControllerAt(e.getInt16()), this.init();
                    var o = e.getInt16();
                    if (this instanceof t.GearDisplay) this.pages = e.readSArray(o); else if (this instanceof t.GearDisplay2) this.pages = e.readSArray(o); else {
                        for (n = 0; n < o; n++) null != (s = e.readS()) && this.addStatus(s, e);
                        e.readBool() && this.addStatus(null, e);
                    }
                    if (e.readBool() && (this._tweenConfig = new i(), this._tweenConfig.easeType = e.readByte(), 
                    this._tweenConfig.duration = e.getFloat32(), this._tweenConfig.delay = e.getFloat32()), 
                    e.version >= 2) if (this instanceof t.GearXY) {
                        if (e.readBool()) {
                            for (this.positionsInPercent = !0, n = 0; n < o; n++) null != (s = e.readS()) && this.addExtStatus(s, e);
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
                value: function(i, n) {
                    return e.Classes || (e.Classes = [ t.GearDisplay, t.GearXY, t.GearSize, t.GearLook, t.GearColor, t.GearAnimation, t.GearText, t.GearIcon, t.GearDisplay2, t.GearFontSize ]), 
                    new e.Classes[n](i);
                }
            } ]), e;
        }();
        e.disableAllTweenEffect = !1, t.GearBase = e;
        var i = function e() {
            r(this, e), this.tween = !0, this.easeType = t.EaseType.QuadOut, this.duration = .3, 
            this.delay = 0;
        };
        t.GearTweenConfig = i;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function n(t) {
                return r(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            return a(n, t.GearBase), s(n, [ {
                key: "init",
                value: function() {
                    this._default = new i(this._owner.getProp(t.ObjectPropID.Playing), this._owner.getProp(t.ObjectPropID.Frame)), 
                    this._storage = {};
                }
            }, {
                key: "addStatus",
                value: function(t, e) {
                    var n;
                    null == t ? n = this._default : (n = new i(), this._storage[t] = n), n.playing = e.readBool(), 
                    n.frame = e.getInt32();
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
            } ]), n;
        }();
        t.GearAnimation = e;
        var i = function t() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            r(this, t), this.playing = e, this.frame = i;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function n(t) {
                return r(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            return a(n, t.GearBase), s(n, [ {
                key: "init",
                value: function() {
                    this._default = new i(this._owner.getProp(t.ObjectPropID.Color), this._owner.getProp(t.ObjectPropID.OutlineColor)), 
                    this._storage = {};
                }
            }, {
                key: "addStatus",
                value: function(t, e) {
                    var n;
                    null == t ? n = this._default : (n = new i(), this._storage[t] = n), n.color = e.readColorS(), 
                    n.strokeColor = e.readColorS();
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
            } ]), n;
        }();
        t.GearColor = e;
        var i = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            r(this, t), this.color = e, this.strokeColor = i;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                return e._visible = 0, e._displayLockToken = 0, e._displayLockToken = 1, e;
            }
            return a(i, t.GearBase), s(i, [ {
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
            } ]), i;
        }();
        t.GearDisplay = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                return e._visible = 0, e;
            }
            return a(i, t.GearBase), s(i, [ {
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
                    return 0 == this.condition ? e && t : e || t;
                }
            } ]), i;
        }();
        t.GearDisplay2 = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                r(this, i);
                var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                return e._default = 0, e;
            }
            return a(i, t.GearBase), s(i, [ {
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
            } ]), i;
        }();
        t.GearFontSize = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
            }
            return a(i, t.GearBase), s(i, [ {
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
            } ]), i;
        }();
        t.GearIcon = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function n(t) {
                return r(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            return a(n, t.GearBase), s(n, [ {
                key: "init",
                value: function() {
                    this._default = new i(this._owner.alpha, this._owner.rotation, this._owner.grayed, this._owner.touchable), 
                    this._storage = {};
                }
            }, {
                key: "addStatus",
                value: function(t, e) {
                    var n;
                    null == t ? n = this._default : (n = new i(), this._storage[t] = n), n.alpha = e.getFloat32(), 
                    n.rotation = e.getFloat32(), n.grayed = e.readBool(), n.touchable = e.readBool();
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
                        var i = e.alpha != this._owner.alpha, n = e.rotation != this._owner.rotation;
                        (i || n) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                        this._tweenConfig._tweener = t.GTween.to2(this._owner.alpha, this._owner.rotation, e.alpha, e.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (n ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
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
            } ]), n;
        }();
        t.GearLook = e;
        var i = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            r(this, t), this.alpha = e, this.rotation = i, this.grayed = n, this.touchable = s;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function n(t) {
                return r(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            return a(n, t.GearBase), s(n, [ {
                key: "init",
                value: function() {
                    this._default = new i(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY), 
                    this._storage = {};
                }
            }, {
                key: "addStatus",
                value: function(t, e) {
                    var n;
                    null == t ? n = this._default : (n = new i(), this._storage[t] = n), n.width = e.getInt32(), 
                    n.height = e.getInt32(), n.scaleX = e.getFloat32(), n.scaleY = e.getFloat32();
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
                        var i = e.width != this._owner.width || e.height != this._owner.height, n = e.scaleX != this._owner.scaleX || e.scaleY != this._owner.scaleY;
                        (i || n) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                        this._tweenConfig._tweener = t.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, e.width, e.height, e.scaleX, e.scaleY, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (n ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
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
                            var n = this._storage[i];
                            n.width += t, n.height += e;
                        }
                        this._default.width += t, this._default.height += e, this.updateState();
                    }
                }
            } ]), n;
        }();
        t.GearSize = e;
        var i = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            r(this, t), this.width = e, this.height = i, this.scaleX = n, this.scaleY = s;
        };
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
            }
            return a(i, t.GearBase), s(i, [ {
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
            } ]), i;
        }();
        t.GearText = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(e) {
            function i(t) {
                return r(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
            }
            return a(i, t.GearBase), s(i, [ {
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
                    var e, i, n = this._storage[this._controller.selectedPageId];
                    if (n || (n = this._default), this.positionsInPercent && this._owner.parent ? (e = n.px * this._owner.parent.width, 
                    i = n.py * this._owner.parent.height) : (e = n.x, i = n.y), null == this._tweenConfig || !this._tweenConfig.tween || t.UIPackage._constructing || t.GearBase.disableAllTweenEffect) this._owner._gearLocked = !0, 
                    this._owner.setXY(e, i), this._owner._gearLocked = !1; else {
                        if (null != this._tweenConfig._tweener) {
                            if (this._tweenConfig._tweener.endValue.x == e && this._tweenConfig._tweener.endValue.y == i) return;
                            this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
                        }
                        var s = this._owner.x, o = this._owner.y;
                        s == e && o == i || (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), 
                        this._tweenConfig._tweener = t.GTween.to2(s, o, e, i, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
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
                            var n = this._storage[i];
                            n.x += t, n.y += e;
                        }
                        this._default.x += t, this._default.y += e, this.updateState();
                    }
                }
            } ]), i;
        }();
        t.GearXY = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "evaluate",
                value: function(n, s, o, a, r) {
                    switch (n) {
                      case t.EaseType.Linear:
                        return s / o;

                      case t.EaseType.SineIn:
                        return 1 - Math.cos(s / o * e._PiOver2);

                      case t.EaseType.SineOut:
                        return Math.sin(s / o * e._PiOver2);

                      case t.EaseType.SineInOut:
                        return -.5 * (Math.cos(Math.PI * s / o) - 1);

                      case t.EaseType.QuadIn:
                        return (s /= o) * s;

                      case t.EaseType.QuadOut:
                        return -(s /= o) * (s - 2);

                      case t.EaseType.QuadInOut:
                        return (s /= .5 * o) < 1 ? .5 * s * s : -.5 * (--s * (s - 2) - 1);

                      case t.EaseType.CubicIn:
                        return (s /= o) * s * s;

                      case t.EaseType.CubicOut:
                        return (s = s / o - 1) * s * s + 1;

                      case t.EaseType.CubicInOut:
                        return (s /= .5 * o) < 1 ? .5 * s * s * s : .5 * ((s -= 2) * s * s + 2);

                      case t.EaseType.QuartIn:
                        return (s /= o) * s * s * s;

                      case t.EaseType.QuartOut:
                        return -((s = s / o - 1) * s * s * s - 1);

                      case t.EaseType.QuartInOut:
                        return (s /= .5 * o) < 1 ? .5 * s * s * s * s : -.5 * ((s -= 2) * s * s * s - 2);

                      case t.EaseType.QuintIn:
                        return (s /= o) * s * s * s * s;

                      case t.EaseType.QuintOut:
                        return (s = s / o - 1) * s * s * s * s + 1;

                      case t.EaseType.QuintInOut:
                        return (s /= .5 * o) < 1 ? .5 * s * s * s * s * s : .5 * ((s -= 2) * s * s * s * s + 2);

                      case t.EaseType.ExpoIn:
                        return 0 == s ? 0 : Math.pow(2, 10 * (s / o - 1));

                      case t.EaseType.ExpoOut:
                        return s == o ? 1 : 1 - Math.pow(2, -10 * s / o);

                      case t.EaseType.ExpoInOut:
                        return 0 == s ? 0 : s == o ? 1 : (s /= .5 * o) < 1 ? .5 * Math.pow(2, 10 * (s - 1)) : .5 * (2 - Math.pow(2, -10 * --s));

                      case t.EaseType.CircIn:
                        return -(Math.sqrt(1 - (s /= o) * s) - 1);

                      case t.EaseType.CircOut:
                        return Math.sqrt(1 - (s = s / o - 1) * s);

                      case t.EaseType.CircInOut:
                        return (s /= .5 * o) < 1 ? -.5 * (Math.sqrt(1 - s * s) - 1) : .5 * (Math.sqrt(1 - (s -= 2) * s) + 1);

                      case t.EaseType.ElasticIn:
                        var h;
                        return 0 == s ? 0 : 1 == (s /= o) ? 1 : (0 == r && (r = .3 * o), a < 1 ? (a = 1, 
                        h = r / 4) : h = r / e._TwoPi * Math.asin(1 / a), -a * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * o - h) * e._TwoPi / r));

                      case t.EaseType.ElasticOut:
                        var l;
                        return 0 == s ? 0 : 1 == (s /= o) ? 1 : (0 == r && (r = .3 * o), a < 1 ? (a = 1, 
                        l = r / 4) : l = r / e._TwoPi * Math.asin(1 / a), a * Math.pow(2, -10 * s) * Math.sin((s * o - l) * e._TwoPi / r) + 1);

                      case t.EaseType.ElasticInOut:
                        var u;
                        return 0 == s ? 0 : 2 == (s /= .5 * o) ? 1 : (0 == r && (r = o * (.3 * 1.5)), a < 1 ? (a = 1, 
                        u = r / 4) : u = r / e._TwoPi * Math.asin(1 / a), s < 1 ? a * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * o - u) * e._TwoPi / r) * -.5 : a * Math.pow(2, -10 * (s -= 1)) * Math.sin((s * o - u) * e._TwoPi / r) * .5 + 1);

                      case t.EaseType.BackIn:
                        return (s /= o) * s * ((a + 1) * s - a);

                      case t.EaseType.BackOut:
                        return (s = s / o - 1) * s * ((a + 1) * s + a) + 1;

                      case t.EaseType.BackInOut:
                        return (s /= .5 * o) < 1 ? s * s * ((1 + (a *= 1.525)) * s - a) * .5 : .5 * ((s -= 2) * s * ((1 + (a *= 1.525)) * s + a) + 2);

                      case t.EaseType.BounceIn:
                        return i.easeIn(s, o);

                      case t.EaseType.BounceOut:
                        return i.easeOut(s, o);

                      case t.EaseType.BounceInOut:
                        return i.easeInOut(s, o);

                      default:
                        return -(s /= o) * (s - 2);
                    }
                }
            } ]), e;
        }();
        e._PiOver2 = .5 * Math.PI, e._TwoPi = 2 * Math.PI, t.EaseManager = e;
        var i = function() {
            function t() {
                r(this, t);
            }
            return s(t, null, [ {
                key: "easeIn",
                value: function(e, i) {
                    return 1 - t.easeOut(i - e, i);
                }
            }, {
                key: "easeOut",
                value: function(t, e) {
                    return (t /= e) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                }
            }, {
                key: "easeInOut",
                value: function(e, i) {
                    return e < .5 * i ? .5 * t.easeIn(2 * e, i) : .5 * t.easeOut(2 * e - i, i) + .5;
                }
            } ]), t;
        }();
    }(fgui || (fgui = {})), function(t) {
        var e = function t() {
            r(this, t);
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
            function e() {
                r(this, e), this._segments = new Array(), this._points = new Array();
            }
            return s(e, [ {
                key: "create2",
                value: function(t, e, i, n) {
                    var s = new Array();
                    s.push(t), s.push(e), i && s.push(i), n && s.push(n), this.create(s);
                }
            }, {
                key: "create",
                value: function(n) {
                    this._segments.length = 0, this._points.length = 0, this._fullLength = 0;
                    var s = n.length;
                    if (0 != s) {
                        var o = e.helperPoints;
                        o.length = 0;
                        var a = n[0];
                        a.curveType == t.CurveType.CRSpline && o.push(new Laya.Point(a.x, a.y));
                        for (var r = 1; r < s; r++) {
                            var h = n[r];
                            if (a.curveType != t.CurveType.CRSpline) {
                                var l = new i();
                                l.type = a.curveType, l.ptStart = this._points.length, a.curveType == t.CurveType.Straight ? (l.ptCount = 2, 
                                this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(h.x, h.y))) : a.curveType == t.CurveType.Bezier ? (l.ptCount = 3, 
                                this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(h.x, h.y)), 
                                this._points.push(new Laya.Point(a.control1_x, a.control1_y))) : a.curveType == t.CurveType.CubicBezier && (l.ptCount = 4, 
                                this._points.push(new Laya.Point(a.x, a.y)), this._points.push(new Laya.Point(h.x, h.y)), 
                                this._points.push(new Laya.Point(a.control1_x, a.control1_y)), this._points.push(new Laya.Point(a.control2_x, a.control2_y))), 
                                l.length = t.ToolSet.distance(a.x, a.y, h.x, h.y), this._fullLength += l.length, 
                                this._segments.push(l);
                            }
                            h.curveType != t.CurveType.CRSpline ? o.length > 0 && (o.push(new Laya.Point(h.x, h.y)), 
                            this.createSplineSegment()) : o.push(new Laya.Point(h.x, h.y)), a = h;
                        }
                        o.length > 1 && this.createSplineSegment();
                    }
                }
            }, {
                key: "createSplineSegment",
                value: function() {
                    var n = e.helperPoints, s = n.length;
                    n.splice(0, 0, n[0]), n.push(n[s]), n.push(n[s]), s += 3;
                    var o = new i();
                    o.type = t.CurveType.CRSpline, o.ptStart = this._points.length, o.ptCount = s, this._points = this._points.concat(n), 
                    o.length = 0;
                    for (var a = 1; a < s; a++) o.length += t.ToolSet.distance(n[a - 1].x, n[a - 1].y, n[a].x, n[a].y);
                    this._fullLength += o.length, this._segments.push(o), n.length = 0;
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
                    var n, s = this._segments.length;
                    if (0 == s) return i;
                    if (1 == e) return (n = this._segments[s - 1]).type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[n.ptStart].x, this._points[n.ptStart + 1].x, e), 
                    i.y = t.ToolSet.lerp(this._points[n.ptStart].y, this._points[n.ptStart + 1].y, e), 
                    i) : n.type == t.CurveType.Bezier || n.type == t.CurveType.CubicBezier ? this.onBezierCurve(n.ptStart, n.ptCount, e, i) : this.onCRSplineCurve(n.ptStart, n.ptCount, e, i);
                    for (var o = e * this._fullLength, a = 0; a < s; a++) if ((o -= (n = this._segments[a]).length) < 0) {
                        e = 1 + o / n.length, n.type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[n.ptStart].x, this._points[n.ptStart + 1].x, e), 
                        i.y = t.ToolSet.lerp(this._points[n.ptStart].y, this._points[n.ptStart + 1].y, e)) : i = n.type == t.CurveType.Bezier || n.type == t.CurveType.CubicBezier ? this.onBezierCurve(n.ptStart, n.ptCount, e, i) : this.onCRSplineCurve(n.ptStart, n.ptCount, e, i);
                        break;
                    }
                    return i;
                }
            }, {
                key: "getAnchorsInSegment",
                value: function(t, e) {
                    null == e && (e = new Array());
                    for (var i = this._segments[t], n = 0; n < i.ptCount; n++) e.push(new Laya.Point(this._points[i.ptStart + n].x, this._points[i.ptStart + n].y));
                    return e;
                }
            }, {
                key: "getPointsInSegment",
                value: function(e, i, n, s, o, a) {
                    null == s && (s = new Array()), a && !isNaN(a) || (a = .1), o && o.push(i);
                    var r = this._segments[e];
                    if (r.type == t.CurveType.Straight) s.push(new Laya.Point(t.ToolSet.lerp(this._points[r.ptStart].x, this._points[r.ptStart + 1].x, i), t.ToolSet.lerp(this._points[r.ptStart].y, this._points[r.ptStart + 1].y, i))), 
                    s.push(new Laya.Point(t.ToolSet.lerp(this._points[r.ptStart].x, this._points[r.ptStart + 1].x, n), t.ToolSet.lerp(this._points[r.ptStart].y, this._points[r.ptStart + 1].y, n))); else {
                        var h;
                        h = r.type == t.CurveType.Bezier || r.type == t.CurveType.CubicBezier ? this.onBezierCurve : this.onCRSplineCurve, 
                        s.push(h.call(this, r.ptStart, r.ptCount, i, new Laya.Point()));
                        for (var l = Math.min(r.length * a, 50), u = 0; u <= l; u++) {
                            var _ = u / l;
                            _ > i && _ < n && (s.push(h.call(this, r.ptStart, r.ptCount, _, new Laya.Point())), 
                            null != o && o.push(_));
                        }
                        s.push(h.call(this, r.ptStart, r.ptCount, n, new Laya.Point()));
                    }
                    return null != o && o.push(n), s;
                }
            }, {
                key: "getAllPoints",
                value: function(t, e, i) {
                    null == t && (t = new Array()), i && !isNaN(i) || (i = .1);
                    for (var n = this._segments.length, s = 0; s < n; s++) this.getPointsInSegment(s, 0, 1, t, e, i);
                    return t;
                }
            }, {
                key: "onCRSplineCurve",
                value: function(e, i, n, s) {
                    var o = Math.floor(n * (i - 4)) + e, a = this._points[o].x, r = this._points[o].y, h = this._points[o + 1].x, l = this._points[o + 1].y, u = this._points[o + 2].x, _ = this._points[o + 2].y, c = this._points[o + 3].x, d = this._points[o + 3].y, g = 1 == n ? 1 : t.ToolSet.repeat(n * (i - 4), 1), p = ((2 - g) * g - 1) * g * .5, f = .5 * ((3 * g - 5) * g * g + 2), y = ((-3 * g + 4) * g + 1) * g * .5, v = (g - 1) * g * g * .5;
                    return s.x = a * p + h * f + u * y + c * v, s.y = r * p + l * f + _ * y + d * v, 
                    s;
                }
            }, {
                key: "onBezierCurve",
                value: function(t, e, i, n) {
                    var s = 1 - i, o = this._points[t].x, a = this._points[t].y, r = this._points[t + 1].x, h = this._points[t + 1].y, l = this._points[t + 2].x, u = this._points[t + 2].y;
                    if (4 == e) {
                        var _ = this._points[t + 3].x, c = this._points[t + 3].y;
                        n.x = s * s * s * o + 3 * s * s * i * l + 3 * s * i * i * _ + i * i * i * r, n.y = s * s * s * a + 3 * s * s * i * u + 3 * s * i * i * c + i * i * i * h;
                    } else n.x = s * s * o + 2 * s * i * l + i * i * r, n.y = s * s * a + 2 * s * i * u + i * i * h;
                    return n;
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
            } ]), e;
        }();
        e.helperPoints = new Array(), t.GPath = e;
        var i = function t() {
            r(this, t);
        };
    }(fgui || (fgui = {})), function(t) {
        var e;
        !function(t) {
            t[t.CRSpline = 0] = "CRSpline", t[t.Bezier = 1] = "Bezier", t[t.CubicBezier = 2] = "CubicBezier", 
            t[t.Straight = 3] = "Straight";
        }(e = t.CurveType || (t.CurveType = {}));
        var i = function() {
            function t() {
                r(this, t), this.x = 0, this.y = 0, this.control1_x = 0, this.control1_y = 0, this.control2_x = 0, 
                this.control2_y = 0, this.curveType = 0;
            }
            return s(t, [ {
                key: "clone",
                value: function() {
                    var e = new t();
                    return e.x = this.x, e.y = this.y, e.control1_x = this.control1_x, e.control1_y = this.control1_y, 
                    e.control2_x = this.control2_x, e.control2_y = this.control2_y, e.curveType = this.curveType, 
                    e;
                }
            } ], [ {
                key: "newPoint",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = new t();
                    return s.x = e, s.y = i, s.control1_x = 0, s.control1_y = 0, s.control2_x = 0, s.control2_y = 0, 
                    s.curveType = n, s;
                }
            }, {
                key: "newBezierPoint",
                value: function() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = new t();
                    return a.x = i, a.y = n, a.control1_x = s, a.control1_y = o, a.control2_x = 0, a.control2_y = 0, 
                    a.curveType = e.Bezier, a;
                }
            }, {
                key: "newCubicBezierPoint",
                value: function() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, h = new t();
                    return h.x = i, h.y = n, h.control1_x = s, h.control1_y = o, h.control2_x = a, h.control2_y = r, 
                    h.curveType = e.CubicBezier, h;
                }
            } ]), t;
        }();
        t.GPathPoint = i;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "to",
                value: function(e, i, n) {
                    return t.TweenManager.createTween()._to(e, i, n);
                }
            }, {
                key: "to2",
                value: function(e, i, n, s, o) {
                    return t.TweenManager.createTween()._to2(e, i, n, s, o);
                }
            }, {
                key: "to3",
                value: function(e, i, n, s, o, a, r) {
                    return t.TweenManager.createTween()._to3(e, i, n, s, o, a, r);
                }
            }, {
                key: "to4",
                value: function(e, i, n, s, o, a, r, h, l) {
                    return t.TweenManager.createTween()._to4(e, i, n, s, o, a, r, h, l);
                }
            }, {
                key: "toColor",
                value: function(e, i, n) {
                    return t.TweenManager.createTween()._toColor(e, i, n);
                }
            }, {
                key: "delayedCall",
                value: function(e) {
                    return t.TweenManager.createTween().setDelay(e);
                }
            }, {
                key: "shake",
                value: function(e, i, n, s) {
                    return t.TweenManager.createTween()._shake(e, i, n, s);
                }
            }, {
                key: "isTweening",
                value: function(e, i) {
                    return t.TweenManager.isTweening(e, i);
                }
            }, {
                key: "kill",
                value: function(e, i, n) {
                    t.TweenManager.killTweens(e, i, n);
                }
            }, {
                key: "getTween",
                value: function(e, i) {
                    return t.TweenManager.getTween(e, i);
                }
            } ]), e;
        }();
        e.catchCallbackExceptions = !0, t.GTween = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e), this._startValue = new t.TweenValue(), this._endValue = new t.TweenValue(), 
                this._value = new t.TweenValue(), this._deltaValue = new t.TweenValue(), this._reset();
            }
            return s(e, [ {
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
                value: function(t, e, i, n, s) {
                    return this._valueSize = 2, this._startValue.x = t, this._endValue.x = i, this._startValue.y = e, 
                    this._endValue.y = n, this._value.x = t, this._value.y = e, this._duration = s, 
                    this;
                }
            }, {
                key: "_to3",
                value: function(t, e, i, n, s, o, a) {
                    return this._valueSize = 3, this._startValue.x = t, this._endValue.x = n, this._startValue.y = e, 
                    this._endValue.y = s, this._startValue.z = i, this._endValue.z = o, this._value.x = t, 
                    this._value.y = e, this._value.z = i, this._duration = a, this;
                }
            }, {
                key: "_to4",
                value: function(t, e, i, n, s, o, a, r, h) {
                    return this._valueSize = 4, this._startValue.x = t, this._endValue.x = s, this._startValue.y = e, 
                    this._endValue.y = o, this._startValue.z = i, this._endValue.z = a, this._startValue.w = n, 
                    this._endValue.w = r, this._value.x = t, this._value.y = e, this._value.z = i, this._value.w = n, 
                    this._duration = h, this;
                }
            }, {
                key: "_toColor",
                value: function(t, e, i) {
                    return this._valueSize = 4, this._startValue.color = t, this._endValue.color = e, 
                    this._value.color = t, this._duration = i, this;
                }
            }, {
                key: "_shake",
                value: function(t, e, i, n) {
                    return this._valueSize = 5, this._startValue.x = t, this._startValue.y = e, this._startValue.w = i, 
                    this._duration = n, this;
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
                        var i = !1, n = this._elapsedTime - this._delay;
                        if (this._breakpoint >= 0 && n >= this._breakpoint && (n = this._breakpoint, this._ended = 2), 
                        0 != this._repeat) {
                            var s = Math.floor(n / this._duration);
                            n -= this._duration * s, this._yoyo && (i = s % 2 == 1), this._repeat > 0 && this._repeat - s < 0 && (this._yoyo && (i = this._repeat % 2 == 1), 
                            n = this._duration, this._ended = 1);
                        } else n >= this._duration && (n = this._duration, this._ended = 1);
                        if (this._normalizedTime = t.EaseManager.evaluate(this._easeType, i ? this._duration - n : n, this._duration, this._easeOvershootOrAmplitude, this._easePeriod), 
                        this._value.setZero(), this._deltaValue.setZero(), 5 == this._valueSize) if (0 == this._ended) {
                            var o = this._startValue.w * (1 - this._normalizedTime), a = o * (Math.random() > .5 ? 1 : -1), r = o * (Math.random() > .5 ? 1 : -1);
                            this._deltaValue.x = a, this._deltaValue.y = r, this._value.x = this._startValue.x + a, 
                            this._value.y = this._startValue.y + r;
                        } else this._value.x = this._startValue.x, this._value.y = this._startValue.y; else if (this._path) {
                            var h = e.helperPoint;
                            this._path.getPointAt(this._normalizedTime, h), this._snapping && (h.x = Math.round(h.x), 
                            h.y = Math.round(h.y)), this._deltaValue.x = h.x - this._value.x, this._deltaValue.y = h.y - this._value.y, 
                            this._value.x = h.x, this._value.y = h.y;
                        } else for (var l = 0; l < this._valueSize; l++) {
                            var u = this._startValue.getField(l), _ = u + (this._endValue.getField(l) - u) * this._normalizedTime;
                            this._snapping && (_ = Math.round(_)), this._deltaValue.setField(l, _ - this._value.getField(l)), 
                            this._value.setField(l, _);
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
            } ]), e;
        }();
        e.helperPoint = new Laya.Point(), t.GTweener = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
                key: "createTween",
                value: function() {
                    var i;
                    return e._inited || (Laya.timer.frameLoop(1, null, e.update), e._inited = !0), (i = e._tweenerPool.length > 0 ? e._tweenerPool.pop() : new t.GTweener())._init(), 
                    e._activeTweens[e._totalActiveTweens++] = i, i;
                }
            }, {
                key: "isTweening",
                value: function(t, i) {
                    if (null == t) return !1;
                    for (var n = !i, s = 0; s < e._totalActiveTweens; s++) {
                        var o = e._activeTweens[s];
                        if (null != o && o.target == t && !o._killed && (n || o._propType == i)) return !0;
                    }
                    return !1;
                }
            }, {
                key: "killTweens",
                value: function(t, i, n) {
                    if (null == t) return !1;
                    for (var s = !1, o = e._totalActiveTweens, a = !n, r = 0; r < o; r++) {
                        var h = e._activeTweens[r];
                        null == h || h.target != t || h._killed || !a && h._propType != n || (h.kill(i), 
                        s = !0);
                    }
                    return s;
                }
            }, {
                key: "getTween",
                value: function(t, i) {
                    if (null == t) return null;
                    for (var n = e._totalActiveTweens, s = !i, o = 0; o < n; o++) {
                        var a = e._activeTweens[o];
                        if (null != a && a.target == t && !a._killed && (s || a._propType == i)) return a;
                    }
                    return null;
                }
            }, {
                key: "update",
                value: function() {
                    for (var i = Laya.timer.delta / 1e3, n = e._totalActiveTweens, s = -1, o = 0; o < n; o++) {
                        var a = e._activeTweens[o];
                        null == a ? -1 == s && (s = o) : a._killed ? (a._reset(), e._tweenerPool.push(a), 
                        e._activeTweens[o] = null, -1 == s && (s = o)) : (a._target instanceof t.GObject && a._target.isDisposed ? a._killed = !0 : a._paused || a._update(i), 
                        -1 != s && (e._activeTweens[s] = a, e._activeTweens[o] = null, s++));
                    }
                    if (s >= 0) {
                        if (e._totalActiveTweens != n) {
                            var r = n;
                            for (n = e._totalActiveTweens - n, o = 0; o < n; o++) e._activeTweens[s++] = e._activeTweens[r++];
                        }
                        e._totalActiveTweens = s;
                    }
                }
            } ]), e;
        }();
        e._activeTweens = new Array(), e._tweenerPool = [], e._totalActiveTweens = 0, e._inited = !1, 
        t.TweenManager = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t() {
                r(this, t), this.x = this.y = this.z = this.w = 0;
            }
            return s(t, [ {
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
            } ]), t;
        }();
        t.TweenValue = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                if (r(this, e), -1 == n && (n = t.byteLength - i), 0 == i && n == t.byteLength) var s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); else (s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)))._u8d_ = new Uint8Array(t, i, n), 
                s._d_ = new DataView(s._u8d_.buffer, i, n), s._length = n;
                return s.endian = Laya.Byte.BIG_ENDIAN, o(s);
            }
            return a(e, Laya.Byte), s(e, [ {
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
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.getUint8(), i = this.getUint8(), n = this.getUint8(), s = this.getUint8();
                    return (t ? s << 24 : 0) + (e << 16) + (i << 8) + n;
                }
            }, {
                key: "readColorS",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.getUint8(), i = this.getUint8(), n = this.getUint8(), s = this.getUint8();
                    if (t && 255 != s) return "rgba(" + e + "," + i + "," + n + "," + s / 255 + ")";
                    var o = e.toString(16), a = i.toString(16), r = n.toString(16);
                    return 1 == o.length && (o = "0" + o), 1 == a.length && (a = "0" + a), 1 == r.length && (r = "0" + r), 
                    "#" + o + a + r;
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
                    var t = this.getUint32(), i = new e(this.buffer, this._pos_, t);
                    return this.pos += t, i.stringTable = this.stringTable, i.version = this.version, 
                    i;
                }
            }, {
                key: "seek",
                value: function(t, e) {
                    var i, n = this._pos_;
                    return this.pos = t, e < this.getUint8() ? (1 == this.getUint8() ? (this.pos += 2 * e, 
                    i = this.getUint16()) : (this.pos += 4 * e, i = this.getUint32()), i > 0 ? (this.pos = t + i, 
                    !0) : (this.pos = n, !1)) : (this.pos = n, !1);
                }
            } ]), e;
        }();
        t.ByteBuffer = e;
    }(fgui || (fgui = {})), function(t) {
        var e = Laya.HitArea._isHitGraphic, i = function(t) {
            function i(t, e) {
                r(this, i);
                var n = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return n._child = t, n._reversed = e, n._reversed ? n.unHit = t.hitArea.hit : n.hit = t.hitArea.hit, 
                n;
            }
            return a(i, Laya.HitArea), s(i, [ {
                key: "contains",
                value: function(t, i) {
                    var n;
                    return (n = Laya.Point.TEMP).setTo(0, 0), n = this._child.toParentPoint(n), this._reversed ? !e(t - n.x, i - n.y, this.unHit) : e(t - n.x, i - n.y, this.hit);
                }
            } ]), i;
        }();
        t.ChildHitArea = i;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t() {
                r(this, t), this.matrix = new Array(t.LENGTH), this.reset();
            }
            return s(t, [ {
                key: "reset",
                value: function() {
                    for (var e = 0; e < t.LENGTH; e++) this.matrix[e] = t.IDENTITY_MATRIX[e];
                }
            }, {
                key: "invert",
                value: function() {
                    this.multiplyMatrix([ -1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0 ]);
                }
            }, {
                key: "adjustColor",
                value: function(t, e, i, n) {
                    this.adjustBrightness(t), this.adjustContrast(e), this.adjustSaturation(i), this.adjustHue(n);
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
                value: function(e) {
                    e = this.cleanValue(e, 1);
                    var i = 1 - (e += 1), n = i * t.LUMA_R, s = i * t.LUMA_G, o = i * t.LUMA_B;
                    this.multiplyMatrix([ n + e, s, o, 0, 0, n, s + e, o, 0, 0, n, s, o + e, 0, 0, 0, 0, 0, 1, 0 ]);
                }
            }, {
                key: "adjustHue",
                value: function(e) {
                    e = this.cleanValue(e, 1), e *= Math.PI;
                    var i = Math.cos(e), n = Math.sin(e);
                    this.multiplyMatrix([ t.LUMA_R + i * (1 - t.LUMA_R) + n * -t.LUMA_R, t.LUMA_G + i * -t.LUMA_G + n * -t.LUMA_G, t.LUMA_B + i * -t.LUMA_B + n * (1 - t.LUMA_B), 0, 0, t.LUMA_R + i * -t.LUMA_R + .143 * n, t.LUMA_G + i * (1 - t.LUMA_G) + .14 * n, t.LUMA_B + i * -t.LUMA_B + -.283 * n, 0, 0, t.LUMA_R + i * -t.LUMA_R + n * -(1 - t.LUMA_R), t.LUMA_G + i * -t.LUMA_G + n * t.LUMA_G, t.LUMA_B + i * (1 - t.LUMA_B) + n * t.LUMA_B, 0, 0, 0, 0, 0, 1, 0 ]);
                }
            }, {
                key: "concat",
                value: function(e) {
                    e.length == t.LENGTH && this.multiplyMatrix(e);
                }
            }, {
                key: "clone",
                value: function() {
                    var e = new t();
                    return e.copyMatrix(this.matrix), e;
                }
            }, {
                key: "copyMatrix",
                value: function(e) {
                    for (var i = t.LENGTH, n = 0; n < i; n++) this.matrix[n] = e[n];
                }
            }, {
                key: "multiplyMatrix",
                value: function(t) {
                    for (var e = [], i = 0, n = 0; n < 4; ++n) {
                        for (var s = 0; s < 5; ++s) e[i + s] = t[i] * this.matrix[s] + t[i + 1] * this.matrix[s + 5] + t[i + 2] * this.matrix[s + 10] + t[i + 3] * this.matrix[s + 15] + (4 == s ? t[i + 4] : 0);
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
                value: function(e, i, n, s) {
                    var o = new t();
                    return o.adjustColor(e, i, n, s), o;
                }
            }, {
                key: "getMatrix",
                value: function(e, i, n, s, o) {
                    o || (o = new Array(t.length));
                    var a = t.helper;
                    a.reset(), a.adjustColor(e, i, n, s);
                    for (var r = t.LENGTH, h = 0; h < r; h++) o[h] = a.matrix[h];
                    return o;
                }
            } ]), t;
        }();
        e.IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], 
        e.LENGTH = e.IDENTITY_MATRIX.length, e.LUMA_R = .299, e.LUMA_G = .587, e.LUMA_B = .114, 
        e.helper = new e(), t.ColorMatrix = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function(t) {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                r(this, e);
                var s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return s._data = t, s.offsetX = i, s.offsetY = n, s.scaleX = 1, s.scaleY = 1, s;
            }
            return a(e, Laya.HitArea), s(e, [ {
                key: "contains",
                value: function(t, e) {
                    if (t = Math.floor((t / this.scaleX - this.offsetX) * this._data.scale), e = Math.floor((e / this.scaleY - this.offsetY) * this._data.scale), 
                    t < 0 || e < 0 || t >= this._data.pixelWidth) return !1;
                    var i = e * this._data.pixelWidth + t, n = Math.floor(i / 8), s = i % 8;
                    return n >= 0 && n < this._data.pixels.length && 1 == (this._data.pixels[n] >> s & 1);
                }
            } ]), e;
        }();
        t.PixelHitTest = e;
        var i = function() {
            function t() {
                r(this, t);
            }
            return s(t, [ {
                key: "load",
                value: function(t) {
                    t.getInt32(), this.pixelWidth = t.getInt32(), this.scale = 1 / t.readByte();
                    var e = t.getInt32();
                    this.pixels = [];
                    for (var i = 0; i < e; i++) {
                        var n = t.readByte();
                        n < 0 && (n += 256), this.pixels[i] = n;
                    }
                }
            } ]), t;
        }();
        t.PixelHitTestData = i;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function t() {
                r(this, t), this._readPos = 0, this.defaultImgWidth = 0, this.defaultImgHeight = 0, 
                this._handlers = {}, this._handlers.url = this.onTag_URL, this._handlers.img = this.onTag_IMG, 
                this._handlers.b = this.onTag_B, this._handlers.i = this.onTag_I, this._handlers.u = this.onTag_U, 
                this._handlers.sup = this.onTag_Simple, this._handlers.sub = this.onTag_Simple, 
                this._handlers.color = this.onTag_COLOR, this._handlers.font = this.onTag_FONT, 
                this._handlers.size = this.onTag_SIZE;
            }
            return s(t, [ {
                key: "onTag_URL",
                value: function(t, e, i) {
                    return e ? "</a>" : null != i ? '<a href="' + i + '" target="_blank">' : '<a href="' + this.getTagText() + '" target="_blank">';
                }
            }, {
                key: "onTag_IMG",
                value: function(t, e, i) {
                    if (e) return null;
                    var n = this.getTagText(!0);
                    return n ? this.defaultImgWidth ? '<img src="' + n + '" width="' + this.defaultImgWidth + '" height="' + this.defaultImgHeight + '"/>' : '<img src="' + n + '"/>' : null;
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
                    for (var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = this._readPos, n = ""; -1 != (t = this._text.indexOf("[", i)); ) {
                        if (92 != this._text.charCodeAt(t - 1)) {
                            n += this._text.substring(i, t);
                            break;
                        }
                        n += this._text.substring(i, t - 1), n += "[", i = t + 1;
                    }
                    return -1 == t ? null : (e && (this._readPos = t), n);
                }
            }, {
                key: "parse",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this._text = t, this.lastColor = null, this.lastSize = null;
                    for (var i, n, s, o, a, r, h, l = 0, u = ""; -1 != (i = this._text.indexOf("[", l)); ) if (i > 0 && 92 == this._text.charCodeAt(i - 1)) u += this._text.substring(l, i - 1), 
                    u += "[", l = i + 1; else {
                        if (u += this._text.substring(l, i), l = i, -1 == (i = this._text.indexOf("]", l))) break;
                        s = "/" == this._text.charAt(l + 1), o = this._text.substring(s ? l + 2 : l + 1, i), 
                        this._readPos = i + 1, a = null, r = null, -1 != (n = o.indexOf("=")) && (a = o.substring(n + 1), 
                        o = o.substring(0, n)), o = o.toLowerCase(), null != (h = this._handlers[o]) ? e || null != (r = h.call(this, o, s, a)) && (u += r) : u += this._text.substring(l, this._readPos), 
                        l = this._readPos;
                    }
                    return l < this._text.length && (u += this._text.substr(l)), this._text = null, 
                    u;
                }
            } ]), t;
        }();
        e.inst = new e(), t.UBBParser = e;
    }(fgui || (fgui = {})), function(t) {
        var e = function() {
            function e() {
                r(this, e);
            }
            return s(e, null, [ {
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
                    return !(!t || t.length < e.length || (t = t.substring(0, e.length), i ? t.toLowerCase() != e.toLowerCase() : t != e));
                }
            }, {
                key: "endsWith",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return !(!t || t.length < e.length || (t = t.substring(t.length - e.length), i ? t.toLowerCase() != e.toLowerCase() : t != e));
                }
            }, {
                key: "trim",
                value: function(t) {
                    return e.trimLeft(e.trimRight(t));
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
                    var i = (t >> 16 & 255).toString(16), n = (t >> 8 & 255).toString(16), s = (255 & t).toString(16);
                    return 1 == e.length && (e = "0" + e), 1 == i.length && (i = "0" + i), 1 == n.length && (n = "0" + n), 
                    1 == s.length && (s = "0" + s), "#" + e + i + n + s;
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
                    return e.defaultUBBParser.parse(t);
                }
            }, {
                key: "removeUBB",
                value: function(t) {
                    return e.defaultUBBParser.parse(t, !0);
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
                value: function(t, e, i, n) {
                    return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - n, 2));
                }
            }, {
                key: "setColorFilter",
                value: function(e, n) {
                    var s, o, a = e.$_colorFilter_, r = e.filters, h = void 0 === n ? "undefined" : i(n);
                    if ("boolean" == h) s = a ? a.$_color_ : null, o = n; else {
                        if ("string" == h) {
                            var l = Laya.ColorUtils.create(n).arrColor;
                            n = 1 == l[0] && 1 == l[1] && 1 == l[2] ? null : [ l[0], 0, 0, 0, 0, 0, l[1], 0, 0, 0, 0, 0, l[2], 0, 0, 0, 0, 0, 1, 0 ];
                        }
                        s = n, o = !!a && a.$_grayed_;
                    }
                    if (s || 0 == s || o) a || (a = new Laya.ColorFilter(), e.$_colorFilter_ = a), r ? -1 == r.indexOf(a) && r.push(a) : r = [ a ], 
                    e.filters = r, a.$_color_ = s, a.$_grayed_ = o, a.reset(), o ? a.gray() : 20 == s.length ? a.setByMatrix(s) : a.setByMatrix(t.ColorMatrix.getMatrix(s[0], s[1], s[2], s[3])); else if (r && a) {
                        var u = r.indexOf(a);
                        -1 != u && (r.splice(u, 1), r.length > 0 ? e.filters = r : e.filters = null);
                    }
                }
            } ]), e;
        }();
        e.defaultUBBParser = new t.UBBParser(), t.ToolSet = e;
    }(fgui || (fgui = {}));
}();