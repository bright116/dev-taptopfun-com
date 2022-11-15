var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("../../@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(require("../../@babel/runtime/helpers/assertThisInitialized"));

var _set2 = _interopRequireDefault(require("../../@babel/runtime/helpers/set"));

var _get2 = _interopRequireDefault(require("../../@babel/runtime/helpers/get"));

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

window.fairygui = window.fgui = {};

(function(fgui) {
    var AssetProxy = /* */ function() {
        function AssetProxy() {
            (0, _classCallCheck2.default)(this, AssetProxy);
            this._asset = Laya.loader;
        }
        (0, _createClass2.default)(AssetProxy, [ {
            key: "getRes",
            value: function getRes(url) {
                return this._asset.getRes(url);
            }
        }, {
            key: "load",
            value: function load(url, complete, progress, type, priority, cache) {
                this._asset.load(url, complete, progress, type, priority, cache);
            }
        }, {
            key: "setAsset",
            value: function setAsset(asset) {
                this._asset = asset;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                if (!AssetProxy._inst) AssetProxy._inst = new AssetProxy();
                return AssetProxy._inst;
            }
        } ]);
        return AssetProxy;
    }();
    fgui.AssetProxy = AssetProxy;
})(fgui);

(function(fgui) {
    var AsyncOperation = /* */ function() {
        function AsyncOperation() {
            (0, _classCallCheck2.default)(this, AsyncOperation);
            this._itemList = new Array();
            this._objectPool = [];
        }
        (0, _createClass2.default)(AsyncOperation, [ {
            key: "createObject",
            value: function createObject(pkgName, resName) {
                var pkg = fgui.UIPackage.getByName(pkgName);
                if (pkg) {
                    var pi = pkg.getItemByName(resName);
                    if (!pi) throw new Error("resource not found: " + resName);
                    this.internalCreateObject(pi);
                } else throw new Error("package not found: " + pkgName);
            }
        }, {
            key: "createObjectFromURL",
            value: function createObjectFromURL(url) {
                var pi = fgui.UIPackage.getItemByURL(url);
                if (pi) this.internalCreateObject(pi); else throw new Error("resource not found: " + url);
            }
        }, {
            key: "cancel",
            value: function cancel() {
                Laya.timer.clear(this, this.run);
                this._itemList.length = 0;
                if (this._objectPool.length > 0) {
                    var cnt = this._objectPool.length;
                    for (var i = 0; i < cnt; i++) {
                        this._objectPool[i].dispose();
                    }
                    this._objectPool.length = 0;
                }
            }
        }, {
            key: "internalCreateObject",
            value: function internalCreateObject(item) {
                this._itemList.length = 0;
                this._objectPool.length = 0;
                var di = {
                    pi: item,
                    type: item.objectType
                };
                di.childCount = this.collectComponentChildren(item);
                this._itemList.push(di);
                this._index = 0;
                Laya.timer.frameLoop(1, this, this.run);
            }
        }, {
            key: "collectComponentChildren",
            value: function collectComponentChildren(item) {
                var buffer = item.rawData;
                buffer.seek(0, 2);
                var di;
                var pi;
                var i;
                var dataLen;
                var curPos;
                var pkg;
                var dcnt = buffer.getInt16();
                for (i = 0; i < dcnt; i++) {
                    dataLen = buffer.getInt16();
                    curPos = buffer.pos;
                    buffer.seek(curPos, 0);
                    var type = buffer.readByte();
                    var src = buffer.readS();
                    var pkgId = buffer.readS();
                    buffer.pos = curPos;
                    if (src != null) {
                        if (pkgId != null) pkg = fgui.UIPackage.getById(pkgId); else pkg = item.owner;
                        pi = pkg ? pkg.getItemById(src) : null;
                        di = {
                            pi: pi,
                            type: type
                        };
                        if (pi && pi.type == fgui.PackageItemType.Component) di.childCount = this.collectComponentChildren(pi);
                    } else {
                        di = {
                            type: type
                        };
                        if (type == fgui.ObjectType.List) di.listItemCount = this.collectListChildren(buffer);
                    }
                    this._itemList.push(di);
                    buffer.pos = curPos + dataLen;
                }
                return dcnt;
            }
        }, {
            key: "collectListChildren",
            value: function collectListChildren(buffer) {
                buffer.seek(buffer.pos, 8);
                var listItemCount = 0;
                var i;
                var nextPos;
                var url;
                var pi;
                var di;
                var defaultItem = buffer.readS();
                var itemCount = buffer.getInt16();
                for (i = 0; i < itemCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    url = buffer.readS();
                    if (url == null) url = defaultItem;
                    if (url) {
                        pi = fgui.UIPackage.getItemByURL(url);
                        if (pi) {
                            di = {
                                pi: pi,
                                type: pi.objectType
                            };
                            if (pi.type == fgui.PackageItemType.Component) di.childCount = this.collectComponentChildren(pi);
                            this._itemList.push(di);
                            listItemCount++;
                        }
                    }
                    buffer.pos = nextPos;
                }
                return listItemCount;
            }
        }, {
            key: "run",
            value: function run() {
                var obj;
                var di;
                var poolStart;
                var k;
                var t = Laya.Browser.now();
                var frameTime = fgui.UIConfig.frameTimeForAsyncUIConstruction;
                var totalItems = this._itemList.length;
                while (this._index < totalItems) {
                    di = this._itemList[this._index];
                    if (di.pi) {
                        obj = fgui.UIObjectFactory.newObject(di.pi);
                        this._objectPool.push(obj);
                        fgui.UIPackage._constructing++;
                        if (di.pi.type == fgui.PackageItemType.Component) {
                            poolStart = this._objectPool.length - di.childCount - 1;
                            obj.constructFromResource2(this._objectPool, poolStart);
                            this._objectPool.splice(poolStart, di.childCount);
                        } else {
                            obj.constructFromResource();
                        }
                        fgui.UIPackage._constructing--;
                    } else {
                        obj = fgui.UIObjectFactory.newObject(di.type);
                        this._objectPool.push(obj);
                        if (di.type == fgui.ObjectType.List && di.listItemCount > 0) {
                            poolStart = this._objectPool.length - di.listItemCount - 1;
                            for (k = 0; k < di.listItemCount; k++) {
                                obj.itemPool.returnObject(this._objectPool[k + poolStart]);
                            }
                            this._objectPool.splice(poolStart, di.listItemCount);
                        }
                    }
                    this._index++;
                    if (this._index % 5 == 0 && Laya.Browser.now() - t >= frameTime) return;
                }
                Laya.timer.clear(this, this.run);
                var result = this._objectPool[0];
                this._itemList.length = 0;
                this._objectPool.length = 0;
                if (this.callback != null) this.callback.runWith(result);
            }
        } ]);
        return AsyncOperation;
    }();
    fgui.AsyncOperation = AsyncOperation;
})(fgui);

(function(fgui) {
    var _nextPageId = 0;
    var Controller = /* */ function(_Laya$EventDispatcher) {
        (0, _inherits2.default)(Controller, _Laya$EventDispatcher);
        var _super = _createSuper(Controller);
        function Controller() {
            var _this;
            (0, _classCallCheck2.default)(this, Controller);
            _this = _super.call(this);
            _this._pageIds = [];
            _this._pageNames = [];
            _this._selectedIndex = -1;
            _this._previousIndex = -1;
            return _this;
        }
        (0, _createClass2.default)(Controller, [ {
            key: "dispose",
            value: function dispose() {
                this.offAll();
            }
        }, {
            key: "setSelectedIndex",
            value: function setSelectedIndex(value) {
                if (this._selectedIndex != value) {
                    if (value > this._pageIds.length - 1) throw "index out of bounds: " + value;
                    this.changing = true;
                    this._previousIndex = this._selectedIndex;
                    this._selectedIndex = value;
                    this.parent.applyController(this);
                    this.changing = false;
                }
            }
        }, {
            key: "setSelectedPage",
            value: function setSelectedPage(value) {
                var i = this._pageNames.indexOf(value);
                if (i == -1) i = 0;
                this.setSelectedIndex(i);
            }
        }, {
            key: "getPageName",
            value: function getPageName(index) {
                return this._pageNames[index];
            }
        }, {
            key: "addPage",
            value: function addPage(name) {
                this.addPageAt(name, this._pageIds.length);
            }
        }, {
            key: "addPageAt",
            value: function addPageAt(name, index) {
                var nid = "" + _nextPageId++;
                if (index == this._pageIds.length) {
                    this._pageIds.push(nid);
                    this._pageNames.push(name);
                } else {
                    this._pageIds.splice(index, 0, nid);
                    this._pageNames.splice(index, 0, name);
                }
            }
        }, {
            key: "removePage",
            value: function removePage(name) {
                var i = this._pageNames.indexOf(name);
                if (i != -1) {
                    this._pageIds.splice(i, 1);
                    this._pageNames.splice(i, 1);
                    if (this._selectedIndex >= this._pageIds.length) this.selectedIndex = this._selectedIndex - 1; else this.parent.applyController(this);
                }
            }
        }, {
            key: "removePageAt",
            value: function removePageAt(index) {
                this._pageIds.splice(index, 1);
                this._pageNames.splice(index, 1);
                if (this._selectedIndex >= this._pageIds.length) this.selectedIndex = this._selectedIndex - 1; else this.parent.applyController(this);
            }
        }, {
            key: "clearPages",
            value: function clearPages() {
                this._pageIds.length = 0;
                this._pageNames.length = 0;
                if (this._selectedIndex != -1) this.selectedIndex = -1; else this.parent.applyController(this);
            }
        }, {
            key: "hasPage",
            value: function hasPage(aName) {
                return this._pageNames.indexOf(aName) != -1;
            }
        }, {
            key: "getPageIndexById",
            value: function getPageIndexById(aId) {
                return this._pageIds.indexOf(aId);
            }
        }, {
            key: "getPageIdByName",
            value: function getPageIdByName(aName) {
                var i = this._pageNames.indexOf(aName);
                if (i != -1) return this._pageIds[i]; else return null;
            }
        }, {
            key: "getPageNameById",
            value: function getPageNameById(aId) {
                var i = this._pageIds.indexOf(aId);
                if (i != -1) return this._pageNames[i]; else return null;
            }
        }, {
            key: "getPageId",
            value: function getPageId(index) {
                return this._pageIds[index];
            }
        }, {
            key: "runActions",
            value: function runActions() {
                if (this._actions) {
                    var cnt = this._actions.length;
                    for (var i = 0; i < cnt; i++) {
                        this._actions[i].run(this, this.previousPageId, this.selectedPageId);
                    }
                }
            }
        }, {
            key: "setup",
            value: function setup(buffer) {
                var beginPos = buffer.pos;
                buffer.seek(beginPos, 0);
                this.name = buffer.readS();
                if (buffer.readBool()) this.autoRadioGroupDepth = true;
                buffer.seek(beginPos, 1);
                var i;
                var nextPos;
                var cnt = buffer.getInt16();
                for (i = 0; i < cnt; i++) {
                    this._pageIds.push(buffer.readS());
                    this._pageNames.push(buffer.readS());
                }
                var homePageIndex = 0;
                if (buffer.version >= 2) {
                    var homePageType = buffer.getByte();
                    switch (homePageType) {
                      case 1:
                        homePageIndex = buffer.getInt16();
                        break;

                      case 2:
                        homePageIndex = this._pageNames.indexOf(fgui.UIPackage.branch);
                        if (homePageIndex == -1) homePageIndex = 0;
                        break;

                      case 3:
                        homePageIndex = this._pageNames.indexOf(fgui.UIPackage.getVar(buffer.readS()));
                        if (homePageIndex == -1) homePageIndex = 0;
                        break;
                    }
                }
                buffer.seek(beginPos, 2);
                cnt = buffer.getInt16();
                if (cnt > 0) {
                    if (!this._actions) this._actions = [];
                    for (i = 0; i < cnt; i++) {
                        nextPos = buffer.getInt16();
                        nextPos += buffer.pos;
                        var action = fgui.ControllerAction.createAction(buffer.readByte());
                        action.setup(buffer);
                        this._actions.push(action);
                        buffer.pos = nextPos;
                    }
                }
                if (this.parent && this._pageIds.length > 0) this._selectedIndex = homePageIndex; else this._selectedIndex = -1;
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                return this._selectedIndex;
            },
            set: function set(value) {
                if (this._selectedIndex != value) {
                    if (value > this._pageIds.length - 1) throw "index out of bounds: " + value;
                    this.changing = true;
                    this._previousIndex = this._selectedIndex;
                    this._selectedIndex = value;
                    this.parent.applyController(this);
                    this.event(fgui.Events.STATE_CHANGED, this);
                    this.changing = false;
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
                if (this._selectedIndex == -1) return null; else return this._pageNames[this._selectedIndex];
            },
            set: function set(val) {
                var i = this._pageNames.indexOf(val);
                if (i == -1) i = 0;
                this.selectedIndex = i;
            }
        }, {
            key: "previousPage",
            get: function get() {
                if (this._previousIndex == -1) return null; else return this._pageNames[this._previousIndex];
            }
        }, {
            key: "pageCount",
            get: function get() {
                return this._pageIds.length;
            }
        }, {
            key: "selectedPageId",
            get: function get() {
                if (this._selectedIndex == -1) return null; else return this._pageIds[this._selectedIndex];
            },
            set: function set(val) {
                var i = this._pageIds.indexOf(val);
                this.selectedIndex = i;
            }
        }, {
            key: "oppositePageId",
            set: function set(val) {
                var i = this._pageIds.indexOf(val);
                if (i > 0) this.selectedIndex = 0; else if (this._pageIds.length > 1) this.selectedIndex = 1;
            }
        }, {
            key: "previousPageId",
            get: function get() {
                if (this._previousIndex == -1) return null; else return this._pageIds[this._previousIndex];
            }
        } ]);
        return Controller;
    }(Laya.EventDispatcher);
    fgui.Controller = Controller;
})(fgui);

(function(fgui) {
    var DragDropManager = /* */ function() {
        function DragDropManager() {
            (0, _classCallCheck2.default)(this, DragDropManager);
            this._agent = new fgui.GLoader();
            this._agent.draggable = true;
            this._agent.touchable = false;
            this._agent.setSize(100, 100);
            this._agent.setPivot(.5, .5, true);
            this._agent.align = "center";
            this._agent.verticalAlign = "middle";
            this._agent.sortingOrder = 1e6;
            this._agent.on(fgui.Events.DRAG_END, this, this.__dragEnd);
        }
        (0, _createClass2.default)(DragDropManager, [ {
            key: "startDrag",
            value: function startDrag(source, icon, sourceData, touchID) {
                if (this._agent.parent) return;
                this._sourceData = sourceData;
                this._agent.url = icon;
                fgui.GRoot.inst.addChild(this._agent);
                var pt = fgui.GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                this._agent.setXY(pt.x, pt.y);
                this._agent.startDrag(touchID);
            }
        }, {
            key: "cancel",
            value: function cancel() {
                if (this._agent.parent) {
                    this._agent.stopDrag();
                    fgui.GRoot.inst.removeChild(this._agent);
                    this._sourceData = null;
                }
            }
        }, {
            key: "__dragEnd",
            value: function __dragEnd(evt) {
                if (!this._agent.parent) return;
                fgui.GRoot.inst.removeChild(this._agent);
                var sourceData = this._sourceData;
                this._sourceData = null;
                var obj = fgui.GObject.cast(evt.target);
                while (obj) {
                    if (obj.displayObject.hasListener(fgui.Events.DROP)) {
                        obj.requestFocus();
                        obj.displayObject.event(fgui.Events.DROP, [ sourceData, fgui.Events.createEvent(fgui.Events.DROP, obj.displayObject, evt) ]);
                        return;
                    }
                    obj = obj.parent;
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
                return this._agent.parent != null;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                if (!DragDropManager._inst) DragDropManager._inst = new DragDropManager();
                return DragDropManager._inst;
            }
        } ]);
        return DragDropManager;
    }();
    fgui.DragDropManager = DragDropManager;
})(fgui);

(function(fgui) {
    var Events = /* */ function() {
        function Events() {
            (0, _classCallCheck2.default)(this, Events);
        }
        (0, _createClass2.default)(Events, null, [ {
            key: "createEvent",
            value: function createEvent(type, target, source) {
                this.$event.setTo(type, target, source ? source.target || target : target);
                this.$event.touchId = source ? source.touchId || 0 : 0;
                this.$event.nativeEvent = source;
                this.$event["_stoped"] = false;
                return this.$event;
            }
        }, {
            key: "dispatch",
            value: function dispatch(type, target, source) {
                target.event(type, this.createEvent(type, target, source));
            }
        } ]);
        return Events;
    }();
    Events.STATE_CHANGED = "fui_state_changed";
    Events.XY_CHANGED = "fui_xy_changed";
    Events.SIZE_CHANGED = "fui_size_changed";
    Events.SIZE_DELAY_CHANGE = "fui_size_delay_change";
    Events.CLICK_ITEM = "fui_click_item";
    Events.SCROLL = "fui_scroll";
    Events.SCROLL_END = "fui_scroll_end";
    Events.DROP = "fui_drop";
    Events.DRAG_START = "fui_drag_start";
    Events.DRAG_MOVE = "fui_drag_move";
    Events.DRAG_END = "fui_drag_end";
    Events.PULL_DOWN_RELEASE = "fui_pull_down_release";
    Events.PULL_UP_RELEASE = "fui_pull_up_release";
    Events.GEAR_STOP = "fui_gear_stop";
    Events.$event = new Laya.Event();
    fgui.Events = Events;
})(fgui);

(function(fgui) {
    var ButtonMode;
    (function(ButtonMode) {
        ButtonMode[ButtonMode["Common"] = 0] = "Common";
        ButtonMode[ButtonMode["Check"] = 1] = "Check";
        ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
    })(ButtonMode = fgui.ButtonMode || (fgui.ButtonMode = {}));
    var AutoSizeType;
    (function(AutoSizeType) {
        AutoSizeType[AutoSizeType["None"] = 0] = "None";
        AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
        AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
    })(AutoSizeType = fgui.AutoSizeType || (fgui.AutoSizeType = {}));
    var AlignType;
    (function(AlignType) {
        AlignType[AlignType["Left"] = 0] = "Left";
        AlignType[AlignType["Center"] = 1] = "Center";
        AlignType[AlignType["Right"] = 2] = "Right";
    })(AlignType = fgui.AlignType || (fgui.AlignType = {}));
    var VertAlignType;
    (function(VertAlignType) {
        VertAlignType[VertAlignType["Top"] = 0] = "Top";
        VertAlignType[VertAlignType["Middle"] = 1] = "Middle";
        VertAlignType[VertAlignType["Bottom"] = 2] = "Bottom";
    })(VertAlignType = fgui.VertAlignType || (fgui.VertAlignType = {}));
    var LoaderFillType;
    (function(LoaderFillType) {
        LoaderFillType[LoaderFillType["None"] = 0] = "None";
        LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
        LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
        LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
        LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
        LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
    })(LoaderFillType = fgui.LoaderFillType || (fgui.LoaderFillType = {}));
    var ListLayoutType;
    (function(ListLayoutType) {
        ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
        ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
        ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
        ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
        ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
    })(ListLayoutType = fgui.ListLayoutType || (fgui.ListLayoutType = {}));
    var ListSelectionMode;
    (function(ListSelectionMode) {
        ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
        ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
        ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
        ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
    })(ListSelectionMode = fgui.ListSelectionMode || (fgui.ListSelectionMode = {}));
    var OverflowType;
    (function(OverflowType) {
        OverflowType[OverflowType["Visible"] = 0] = "Visible";
        OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
        OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
    })(OverflowType = fgui.OverflowType || (fgui.OverflowType = {}));
    var PackageItemType;
    (function(PackageItemType) {
        PackageItemType[PackageItemType["Image"] = 0] = "Image";
        PackageItemType[PackageItemType["MovieClip"] = 1] = "MovieClip";
        PackageItemType[PackageItemType["Sound"] = 2] = "Sound";
        PackageItemType[PackageItemType["Component"] = 3] = "Component";
        PackageItemType[PackageItemType["Atlas"] = 4] = "Atlas";
        PackageItemType[PackageItemType["Font"] = 5] = "Font";
        PackageItemType[PackageItemType["Swf"] = 6] = "Swf";
        PackageItemType[PackageItemType["Misc"] = 7] = "Misc";
        PackageItemType[PackageItemType["Unknown"] = 8] = "Unknown";
        PackageItemType[PackageItemType["Spine"] = 9] = "Spine";
        PackageItemType[PackageItemType["DragonBones"] = 10] = "DragonBones";
    })(PackageItemType = fgui.PackageItemType || (fgui.PackageItemType = {}));
    var ObjectType;
    (function(ObjectType) {
        ObjectType[ObjectType["Image"] = 0] = "Image";
        ObjectType[ObjectType["MovieClip"] = 1] = "MovieClip";
        ObjectType[ObjectType["Swf"] = 2] = "Swf";
        ObjectType[ObjectType["Graph"] = 3] = "Graph";
        ObjectType[ObjectType["Loader"] = 4] = "Loader";
        ObjectType[ObjectType["Group"] = 5] = "Group";
        ObjectType[ObjectType["Text"] = 6] = "Text";
        ObjectType[ObjectType["RichText"] = 7] = "RichText";
        ObjectType[ObjectType["InputText"] = 8] = "InputText";
        ObjectType[ObjectType["Component"] = 9] = "Component";
        ObjectType[ObjectType["List"] = 10] = "List";
        ObjectType[ObjectType["Label"] = 11] = "Label";
        ObjectType[ObjectType["Button"] = 12] = "Button";
        ObjectType[ObjectType["ComboBox"] = 13] = "ComboBox";
        ObjectType[ObjectType["ProgressBar"] = 14] = "ProgressBar";
        ObjectType[ObjectType["Slider"] = 15] = "Slider";
        ObjectType[ObjectType["ScrollBar"] = 16] = "ScrollBar";
        ObjectType[ObjectType["Tree"] = 17] = "Tree";
        ObjectType[ObjectType["Loader3D"] = 18] = "Loader3D";
    })(ObjectType = fgui.ObjectType || (fgui.ObjectType = {}));
    var ProgressTitleType;
    (function(ProgressTitleType) {
        ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
        ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
        ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
        ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
    })(ProgressTitleType = fgui.ProgressTitleType || (fgui.ProgressTitleType = {}));
    var ScrollBarDisplayType;
    (function(ScrollBarDisplayType) {
        ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
        ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
        ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
        ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
    })(ScrollBarDisplayType = fgui.ScrollBarDisplayType || (fgui.ScrollBarDisplayType = {}));
    var ScrollType;
    (function(ScrollType) {
        ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
        ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
        ScrollType[ScrollType["Both"] = 2] = "Both";
    })(ScrollType = fgui.ScrollType || (fgui.ScrollType = {}));
    var FlipType;
    (function(FlipType) {
        FlipType[FlipType["None"] = 0] = "None";
        FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
        FlipType[FlipType["Vertical"] = 2] = "Vertical";
        FlipType[FlipType["Both"] = 3] = "Both";
    })(FlipType = fgui.FlipType || (fgui.FlipType = {}));
    var ChildrenRenderOrder;
    (function(ChildrenRenderOrder) {
        ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
        ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
        ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
    })(ChildrenRenderOrder = fgui.ChildrenRenderOrder || (fgui.ChildrenRenderOrder = {}));
    var GroupLayoutType;
    (function(GroupLayoutType) {
        GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
        GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
        GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
    })(GroupLayoutType = fgui.GroupLayoutType || (fgui.GroupLayoutType = {}));
    var PopupDirection;
    (function(PopupDirection) {
        PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
        PopupDirection[PopupDirection["Up"] = 1] = "Up";
        PopupDirection[PopupDirection["Down"] = 2] = "Down";
    })(PopupDirection = fgui.PopupDirection || (fgui.PopupDirection = {}));
    var RelationType;
    (function(RelationType) {
        RelationType[RelationType["Left_Left"] = 0] = "Left_Left";
        RelationType[RelationType["Left_Center"] = 1] = "Left_Center";
        RelationType[RelationType["Left_Right"] = 2] = "Left_Right";
        RelationType[RelationType["Center_Center"] = 3] = "Center_Center";
        RelationType[RelationType["Right_Left"] = 4] = "Right_Left";
        RelationType[RelationType["Right_Center"] = 5] = "Right_Center";
        RelationType[RelationType["Right_Right"] = 6] = "Right_Right";
        RelationType[RelationType["Top_Top"] = 7] = "Top_Top";
        RelationType[RelationType["Top_Middle"] = 8] = "Top_Middle";
        RelationType[RelationType["Top_Bottom"] = 9] = "Top_Bottom";
        RelationType[RelationType["Middle_Middle"] = 10] = "Middle_Middle";
        RelationType[RelationType["Bottom_Top"] = 11] = "Bottom_Top";
        RelationType[RelationType["Bottom_Middle"] = 12] = "Bottom_Middle";
        RelationType[RelationType["Bottom_Bottom"] = 13] = "Bottom_Bottom";
        RelationType[RelationType["Width"] = 14] = "Width";
        RelationType[RelationType["Height"] = 15] = "Height";
        RelationType[RelationType["LeftExt_Left"] = 16] = "LeftExt_Left";
        RelationType[RelationType["LeftExt_Right"] = 17] = "LeftExt_Right";
        RelationType[RelationType["RightExt_Left"] = 18] = "RightExt_Left";
        RelationType[RelationType["RightExt_Right"] = 19] = "RightExt_Right";
        RelationType[RelationType["TopExt_Top"] = 20] = "TopExt_Top";
        RelationType[RelationType["TopExt_Bottom"] = 21] = "TopExt_Bottom";
        RelationType[RelationType["BottomExt_Top"] = 22] = "BottomExt_Top";
        RelationType[RelationType["BottomExt_Bottom"] = 23] = "BottomExt_Bottom";
        RelationType[RelationType["Size"] = 24] = "Size";
    })(RelationType = fgui.RelationType || (fgui.RelationType = {}));
    var FillMethod;
    (function(FillMethod) {
        FillMethod[FillMethod["None"] = 0] = "None";
        FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
        FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
        FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
        FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
        FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
    })(FillMethod = fgui.FillMethod || (fgui.FillMethod = {}));
    var FillOrigin;
    (function(FillOrigin) {
        FillOrigin[FillOrigin["Top"] = 0] = "Top";
        FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
        FillOrigin[FillOrigin["Left"] = 2] = "Left";
        FillOrigin[FillOrigin["Right"] = 3] = "Right";
        FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
        FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
        FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin = fgui.FillOrigin || (fgui.FillOrigin = {}));
    var FillOrigin90;
    (function(FillOrigin90) {
        FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
        FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
        FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin90 = fgui.FillOrigin90 || (fgui.FillOrigin90 = {}));
    var ObjectPropID;
    (function(ObjectPropID) {
        ObjectPropID[ObjectPropID["Text"] = 0] = "Text";
        ObjectPropID[ObjectPropID["Icon"] = 1] = "Icon";
        ObjectPropID[ObjectPropID["Color"] = 2] = "Color";
        ObjectPropID[ObjectPropID["OutlineColor"] = 3] = "OutlineColor";
        ObjectPropID[ObjectPropID["Playing"] = 4] = "Playing";
        ObjectPropID[ObjectPropID["Frame"] = 5] = "Frame";
        ObjectPropID[ObjectPropID["DeltaTime"] = 6] = "DeltaTime";
        ObjectPropID[ObjectPropID["TimeScale"] = 7] = "TimeScale";
        ObjectPropID[ObjectPropID["FontSize"] = 8] = "FontSize";
        ObjectPropID[ObjectPropID["Selected"] = 9] = "Selected";
    })(ObjectPropID = fgui.ObjectPropID || (fgui.ObjectPropID = {}));
})(fgui);

(function(fgui) {
    var GObject = /* */ function() {
        function GObject() {
            (0, _classCallCheck2.default)(this, GObject);
            this._x = 0;
            this._y = 0;
            this._alpha = 1;
            this._rotation = 0;
            this._visible = true;
            this._touchable = true;
            this._scaleX = 1;
            this._scaleY = 1;
            this._skewX = 0;
            this._skewY = 0;
            this._pivotX = 0;
            this._pivotY = 0;
            this._pivotOffsetX = 0;
            this._pivotOffsetY = 0;
            this._sortingOrder = 0;
            this._internalVisible = true;
            this._yOffset = 0;
            this.minWidth = 0;
            this.minHeight = 0;
            this.maxWidth = 0;
            this.maxHeight = 0;
            this.sourceWidth = 0;
            this.sourceHeight = 0;
            this.initWidth = 0;
            this.initHeight = 0;
            this._width = 0;
            this._height = 0;
            this._rawWidth = 0;
            this._rawHeight = 0;
            this._sizePercentInGroup = 0;
            this._id = "" + _gInstanceCounter++;
            this._name = "";
            this.createDisplayObject();
            this._relations = new fgui.Relations(this);
            this._gears = new Array(10);
        }
        (0, _createClass2.default)(GObject, [ {
            key: "setXY",
            value: function setXY(xv, yv) {
                if (this._x != xv || this._y != yv) {
                    var dx = xv - this._x;
                    var dy = yv - this._y;
                    this._x = xv;
                    this._y = yv;
                    this.handleXYChanged();
                    if (this instanceof fgui.GGroup) this.moveChildren(dx, dy);
                    this.updateGear(1);
                    if (this._parent && !(this._parent instanceof fgui.GList)) {
                        this._parent.setBoundsChangedFlag();
                        if (this._group) this._group.setBoundsChangedFlag(true);
                        this.displayObject.event(fgui.Events.XY_CHANGED);
                    }
                    if (GObject.draggingObject == this && !sUpdateInDragging) this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
                }
            }
        }, {
            key: "center",
            value: function center(restraint) {
                var r;
                if (this._parent) r = this.parent; else r = this.root;
                this.setXY((r.width - this.width) / 2, (r.height - this.height) / 2);
                if (restraint) {
                    this.addRelation(r, fgui.RelationType.Center_Center);
                    this.addRelation(r, fgui.RelationType.Middle_Middle);
                }
            }
        }, {
            key: "setSize",
            value: function setSize(wv, hv, ignorePivot) {
                if (this._rawWidth != wv || this._rawHeight != hv) {
                    this._rawWidth = wv;
                    this._rawHeight = hv;
                    if (wv < this.minWidth) wv = this.minWidth;
                    if (hv < this.minHeight) hv = this.minHeight;
                    if (this.maxWidth > 0 && wv > this.maxWidth) wv = this.maxWidth;
                    if (this.maxHeight > 0 && hv > this.maxHeight) hv = this.maxHeight;
                    var dWidth = wv - this._width;
                    var dHeight = hv - this._height;
                    this._width = wv;
                    this._height = hv;
                    this.handleSizeChanged();
                    if (this._pivotX != 0 || this._pivotY != 0) {
                        if (!this._pivotAsAnchor) {
                            if (!ignorePivot) this.setXY(this.x - this._pivotX * dWidth, this.y - this._pivotY * dHeight);
                            this.updatePivotOffset();
                        } else this.applyPivot();
                    }
                    if (this instanceof fgui.GGroup) this.resizeChildren(dWidth, dHeight);
                    this.updateGear(2);
                    if (this._parent) {
                        this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);
                        this._parent.setBoundsChangedFlag();
                        if (this._group) this._group.setBoundsChangedFlag();
                    }
                    this.displayObject.event(fgui.Events.SIZE_CHANGED);
                }
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {}
        }, {
            key: "makeFullScreen",
            value: function makeFullScreen() {
                this.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            }
        }, {
            key: "setScale",
            value: function setScale(sx, sy) {
                if (this._scaleX != sx || this._scaleY != sy) {
                    this._scaleX = sx;
                    this._scaleY = sy;
                    this.handleScaleChanged();
                    this.applyPivot();
                    this.updateGear(2);
                }
            }
        }, {
            key: "setSkew",
            value: function setSkew(sx, sy) {
                if (this._skewX != sx || this._skewY != sy) {
                    this._skewX = sx;
                    this._skewY = sy;
                    if (this._displayObject) {
                        this._displayObject.skew(-sx, sy);
                        this.applyPivot();
                    }
                }
            }
        }, {
            key: "setPivot",
            value: function setPivot(xv) {
                var yv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var asAnchor = arguments.length > 2 ? arguments[2] : undefined;
                if (this._pivotX != xv || this._pivotY != yv || this._pivotAsAnchor != asAnchor) {
                    this._pivotX = xv;
                    this._pivotY = yv;
                    this._pivotAsAnchor = asAnchor;
                    this.updatePivotOffset();
                    this.handleXYChanged();
                }
            }
        }, {
            key: "internalSetPivot",
            value: function internalSetPivot(xv, yv, asAnchor) {
                this._pivotX = xv;
                this._pivotY = yv;
                this._pivotAsAnchor = asAnchor;
                if (this._pivotAsAnchor) this.handleXYChanged();
            }
        }, {
            key: "updatePivotOffset",
            value: function updatePivotOffset() {
                if (this._displayObject) {
                    if (this._displayObject.transform && (this._pivotX != 0 || this._pivotY != 0)) {
                        sHelperPoint.x = this._pivotX * this._width;
                        sHelperPoint.y = this._pivotY * this._height;
                        var pt = this._displayObject.transform.transformPoint(sHelperPoint);
                        this._pivotOffsetX = this._pivotX * this._width - pt.x;
                        this._pivotOffsetY = this._pivotY * this._height - pt.y;
                    } else {
                        this._pivotOffsetX = 0;
                        this._pivotOffsetY = 0;
                    }
                }
            }
        }, {
            key: "applyPivot",
            value: function applyPivot() {
                if (this._pivotX != 0 || this._pivotY != 0) {
                    this.updatePivotOffset();
                    this.handleXYChanged();
                }
            }
        }, {
            key: "requestFocus",
            value: function requestFocus() {
                this.root.focus = this;
            }
        }, {
            key: "__rollOver",
            value: function __rollOver(evt) {
                Laya.timer.once(100, this, this.__doShowTooltips);
            }
        }, {
            key: "__doShowTooltips",
            value: function __doShowTooltips() {
                var r = this.root;
                if (r) this.root.showTooltips(this._tooltips);
            }
        }, {
            key: "__rollOut",
            value: function __rollOut(evt) {
                Laya.timer.clear(this, this.__doShowTooltips);
                this.root.hideTooltips();
            }
        }, {
            key: "getGear",
            value: function getGear(index) {
                var gear = this._gears[index];
                if (!gear) this._gears[index] = gear = fgui.GearBase.create(this, index);
                return gear;
            }
        }, {
            key: "updateGear",
            value: function updateGear(index) {
                if (this._underConstruct || this._gearLocked) return;
                var gear = this._gears[index];
                if (gear && gear.controller) gear.updateState();
            }
        }, {
            key: "checkGearController",
            value: function checkGearController(index, c) {
                return this._gears[index] && this._gears[index].controller == c;
            }
        }, {
            key: "updateGearFromRelations",
            value: function updateGearFromRelations(index, dx, dy) {
                if (this._gears[index]) this._gears[index].updateFromRelations(dx, dy);
            }
        }, {
            key: "addDisplayLock",
            value: function addDisplayLock() {
                var gearDisplay = this._gears[0];
                if (gearDisplay && gearDisplay.controller) {
                    var ret = gearDisplay.addLock();
                    this.checkGearDisplay();
                    return ret;
                } else return 0;
            }
        }, {
            key: "releaseDisplayLock",
            value: function releaseDisplayLock(token) {
                var gearDisplay = this._gears[0];
                if (gearDisplay && gearDisplay.controller) {
                    gearDisplay.releaseLock(token);
                    this.checkGearDisplay();
                }
            }
        }, {
            key: "checkGearDisplay",
            value: function checkGearDisplay() {
                if (this._handlingController) return;
                var connected = !this._gears[0] || this._gears[0].connected;
                if (this._gears[8]) connected = this._gears[8].evaluate(connected);
                if (connected != this._internalVisible) {
                    this._internalVisible = connected;
                    if (this._parent) {
                        this._parent.childStateChanged(this);
                        if (this._group && this._group.excludeInvisibles) this._group.setBoundsChangedFlag();
                    }
                }
            }
        }, {
            key: "addRelation",
            value: function addRelation(target, relationType, usePercent) {
                this._relations.add(target, relationType, usePercent);
            }
        }, {
            key: "removeRelation",
            value: function removeRelation(target, relationType) {
                this._relations.remove(target, relationType);
            }
        }, {
            key: "removeFromParent",
            value: function removeFromParent() {
                if (this._parent) this._parent.removeChild(this);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.removeFromParent();
                this._relations.dispose();
                this._displayObject.destroy();
                this._displayObject = null;
                for (var i = 0; i < 10; i++) {
                    var gear = this._gears[i];
                    if (gear) gear.dispose();
                }
            }
        }, {
            key: "onClick",
            value: function onClick(thisObj, listener, args) {
                this.on(Laya.Event.CLICK, thisObj, listener, args);
            }
        }, {
            key: "offClick",
            value: function offClick(thisObj, listener) {
                this.off(Laya.Event.CLICK, thisObj, listener);
            }
        }, {
            key: "hasClickListener",
            value: function hasClickListener() {
                return this._displayObject.hasListener(Laya.Event.CLICK);
            }
        }, {
            key: "on",
            value: function on(type, thisObject, listener, args) {
                this._displayObject.on(type, thisObject, listener, args);
            }
        }, {
            key: "off",
            value: function off(type, thisObject, listener) {
                this._displayObject.off(type, thisObject, listener);
            }
        }, {
            key: "startDrag",
            value: function startDrag(touchID) {
                if (this._displayObject.stage == null) return;
                this.dragBegin(touchID);
            }
        }, {
            key: "stopDrag",
            value: function stopDrag() {
                this.dragEnd();
            }
        }, {
            key: "localToGlobal",
            value: function localToGlobal(ax, ay, result) {
                ax = ax || 0;
                ay = ay || 0;
                if (this._pivotAsAnchor) {
                    ax += this._pivotX * this._width;
                    ay += this._pivotY * this._height;
                }
                result = result || new Laya.Point();
                result.x = ax;
                result.y = ay;
                return this._displayObject.localToGlobal(result, false);
            }
        }, {
            key: "globalToLocal",
            value: function globalToLocal(ax, ay, result) {
                ax = ax || 0;
                ay = ay || 0;
                result = result || new Laya.Point();
                result.x = ax;
                result.y = ay;
                result = this._displayObject.globalToLocal(result, false);
                if (this._pivotAsAnchor) {
                    result.x -= this._pivotX * this._width;
                    result.y -= this._pivotY * this._height;
                }
                return result;
            }
        }, {
            key: "localToGlobalRect",
            value: function localToGlobalRect(ax, ay, aw, ah, result) {
                ax = ax || 0;
                ay = ay || 0;
                aw = aw || 0;
                ah = ah || 0;
                result = result || new Laya.Rectangle();
                var pt = this.localToGlobal(ax, ay);
                result.x = pt.x;
                result.y = pt.y;
                pt = this.localToGlobal(ax + aw, ay + ah);
                result.width = pt.x - result.x;
                result.height = pt.y - result.y;
                return result;
            }
        }, {
            key: "globalToLocalRect",
            value: function globalToLocalRect(ax, ay, aw, ah, result) {
                ax = ax || 0;
                ay = ay || 0;
                aw = aw || 0;
                ah = ah || 0;
                result = result || new Laya.Rectangle();
                var pt = this.globalToLocal(ax, ay);
                result.x = pt.x;
                result.y = pt.y;
                pt = this.globalToLocal(ax + aw, ay + ah);
                result.width = pt.x - result.x;
                result.height = pt.y - result.y;
                return result;
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                this._handlingController = true;
                for (var i = 0; i < 10; i++) {
                    var gear = this._gears[i];
                    if (gear && gear.controller == c) gear.apply();
                }
                this._handlingController = false;
                this.checkGearDisplay();
            }
        }, {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = new Laya.Sprite();
                this._displayObject["$owner"] = this;
            }
        }, {
            key: "handleXYChanged",
            value: function handleXYChanged() {
                var xv = this._x;
                var yv = this._y + this._yOffset;
                if (this._pivotAsAnchor) {
                    xv -= this._pivotX * this._width;
                    yv -= this._pivotY * this._height;
                }
                if (this._pixelSnapping) {
                    xv = Math.round(xv);
                    yv = Math.round(yv);
                }
                this._displayObject.pos(xv + this._pivotOffsetX, yv + this._pivotOffsetY);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._displayObject.size(this._width, this._height);
            }
        }, {
            key: "handleScaleChanged",
            value: function handleScaleChanged() {
                this._displayObject.scale(this._scaleX, this._scaleY, true);
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                fgui.ToolSet.setColorFilter(this._displayObject, this._grayed);
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
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Text:
                    return this.text;

                  case fgui.ObjectPropID.Icon:
                    return this.icon;

                  case fgui.ObjectPropID.Color:
                    return null;

                  case fgui.ObjectPropID.OutlineColor:
                    return null;

                  case fgui.ObjectPropID.Playing:
                    return false;

                  case fgui.ObjectPropID.Frame:
                    return 0;

                  case fgui.ObjectPropID.DeltaTime:
                    return 0;

                  case fgui.ObjectPropID.TimeScale:
                    return 1;

                  case fgui.ObjectPropID.FontSize:
                    return 0;

                  case fgui.ObjectPropID.Selected:
                    return false;

                  default:
                    return undefined;
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Text:
                    this.text = value;
                    break;

                  case fgui.ObjectPropID.Icon:
                    this.icon = value;
                    break;
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {}
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                buffer.seek(beginPos, 0);
                buffer.skip(5);
                var f1;
                var f2;
                this._id = buffer.readS();
                this._name = buffer.readS();
                f1 = buffer.getInt32();
                f2 = buffer.getInt32();
                this.setXY(f1, f2);
                if (buffer.readBool()) {
                    this.initWidth = buffer.getInt32();
                    this.initHeight = buffer.getInt32();
                    this.setSize(this.initWidth, this.initHeight, true);
                }
                if (buffer.readBool()) {
                    this.minWidth = buffer.getInt32();
                    this.maxWidth = buffer.getInt32();
                    this.minHeight = buffer.getInt32();
                    this.maxHeight = buffer.getInt32();
                }
                if (buffer.readBool()) {
                    f1 = buffer.getFloat32();
                    f2 = buffer.getFloat32();
                    this.setScale(f1, f2);
                }
                if (buffer.readBool()) {
                    f1 = buffer.getFloat32();
                    f2 = buffer.getFloat32();
                    this.setSkew(f1, f2);
                }
                if (buffer.readBool()) {
                    f1 = buffer.getFloat32();
                    f2 = buffer.getFloat32();
                    this.setPivot(f1, f2, buffer.readBool());
                }
                f1 = buffer.getFloat32();
                if (f1 != 1) this.alpha = f1;
                f1 = buffer.getFloat32();
                if (f1 != 0) this.rotation = f1;
                if (!buffer.readBool()) this.visible = false;
                if (!buffer.readBool()) this.touchable = false;
                if (buffer.readBool()) this.grayed = true;
                var bm = buffer.readByte();
                if (fgui.BlendMode[bm]) this.blendMode = fgui.BlendMode[bm];
                var filter = buffer.readByte();
                if (filter == 1) {
                    fgui.ToolSet.setColorFilter(this._displayObject, [ buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32() ]);
                }
                var str = buffer.readS();
                if (str != null) this.data = str;
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                buffer.seek(beginPos, 1);
                var str = buffer.readS();
                if (str != null) this.tooltips = str;
                var groupId = buffer.getInt16();
                if (groupId >= 0) this.group = this.parent.getChildAt(groupId);
                buffer.seek(beginPos, 2);
                var cnt = buffer.getInt16();
                for (var i = 0; i < cnt; i++) {
                    var nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    var gear = this.getGear(buffer.readByte());
                    gear.setup(buffer);
                    buffer.pos = nextPos;
                }
            }
        }, {
            key: "initDrag",
            value: function initDrag() {
                if (this._draggable) this.on(Laya.Event.MOUSE_DOWN, this, this.__begin); else this.off(Laya.Event.MOUSE_DOWN, this, this.__begin);
            }
        }, {
            key: "dragBegin",
            value: function dragBegin(touchID) {
                if (GObject.draggingObject) {
                    var tmp = GObject.draggingObject;
                    tmp.stopDrag();
                    GObject.draggingObject = null;
                    fgui.Events.dispatch(fgui.Events.DRAG_END, tmp._displayObject, {
                        touchId: touchID
                    });
                }
                sGlobalDragStart.x = Laya.stage.mouseX;
                sGlobalDragStart.y = Laya.stage.mouseY;
                this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
                this._dragTesting = true;
                GObject.draggingObject = this;
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "dragEnd",
            value: function dragEnd() {
                if (GObject.draggingObject == this) {
                    this.reset();
                    this._dragTesting = false;
                    GObject.draggingObject = null;
                }
                sDraggingQuery = false;
            }
        }, {
            key: "reset",
            value: function reset() {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__moving);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__begin",
            value: function __begin() {
                if (!this._dragStartPos) this._dragStartPos = new Laya.Point();
                this._dragStartPos.x = Laya.stage.mouseX;
                this._dragStartPos.y = Laya.stage.mouseY;
                this._dragTesting = true;
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__moving);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__end);
            }
        }, {
            key: "__moving",
            value: function __moving(evt) {
                if (GObject.draggingObject != this && this._draggable && this._dragTesting) {
                    var sensitivity = fgui.UIConfig.touchDragSensitivity;
                    if (this._dragStartPos && Math.abs(this._dragStartPos.x - Laya.stage.mouseX) < sensitivity && Math.abs(this._dragStartPos.y - Laya.stage.mouseY) < sensitivity) return;
                    this._dragTesting = false;
                    sDraggingQuery = true;
                    fgui.Events.dispatch(fgui.Events.DRAG_START, this._displayObject, evt);
                    if (sDraggingQuery) this.dragBegin();
                }
                if (GObject.draggingObject == this) {
                    var xx = Laya.stage.mouseX - sGlobalDragStart.x + sGlobalRect.x;
                    var yy = Laya.stage.mouseY - sGlobalDragStart.y + sGlobalRect.y;
                    if (this._dragBounds) {
                        var rect = fgui.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, sDragHelperRect);
                        if (xx < rect.x) xx = rect.x; else if (xx + sGlobalRect.width > rect.right) {
                            xx = rect.right - sGlobalRect.width;
                            if (xx < rect.x) xx = rect.x;
                        }
                        if (yy < rect.y) yy = rect.y; else if (yy + sGlobalRect.height > rect.bottom) {
                            yy = rect.bottom - sGlobalRect.height;
                            if (yy < rect.y) yy = rect.y;
                        }
                    }
                    sUpdateInDragging = true;
                    var pt = this.parent.globalToLocal(xx, yy, sHelperPoint);
                    this.setXY(Math.round(pt.x), Math.round(pt.y));
                    sUpdateInDragging = false;
                    fgui.Events.dispatch(fgui.Events.DRAG_MOVE, this._displayObject, evt);
                }
            }
        }, {
            key: "__end",
            value: function __end(evt) {
                if (GObject.draggingObject == this) {
                    GObject.draggingObject = null;
                    this.reset();
                    fgui.Events.dispatch(fgui.Events.DRAG_END, this._displayObject, evt);
                } else if (this._dragTesting) {
                    this._dragTesting = false;
                    this.reset();
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
            },
            set: function set(value) {
                this._name = value;
            }
        }, {
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(value) {
                this.setXY(value, this._y);
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(value) {
                this.setXY(this._x, value);
            }
        }, {
            key: "xMin",
            get: function get() {
                return this._pivotAsAnchor ? this._x - this._width * this._pivotX : this._x;
            },
            set: function set(value) {
                if (this._pivotAsAnchor) this.setXY(value + this._width * this._pivotX, this._y); else this.setXY(value, this._y);
            }
        }, {
            key: "yMin",
            get: function get() {
                return this._pivotAsAnchor ? this._y - this._height * this._pivotY : this._y;
            },
            set: function set(value) {
                if (this._pivotAsAnchor) this.setXY(this._x, value + this._height * this._pivotY); else this.setXY(this._x, value);
            }
        }, {
            key: "pixelSnapping",
            get: function get() {
                return this._pixelSnapping;
            },
            set: function set(value) {
                if (this._pixelSnapping != value) {
                    this._pixelSnapping = value;
                    this.handleXYChanged();
                }
            }
        }, {
            key: "width",
            get: function get() {
                this.ensureSizeCorrect();
                if (this._relations.sizeDirty) this._relations.ensureRelationsSizeCorrect();
                return this._width;
            },
            set: function set(value) {
                this.setSize(value, this._rawHeight);
            }
        }, {
            key: "height",
            get: function get() {
                this.ensureSizeCorrect();
                if (this._relations.sizeDirty) this._relations.ensureRelationsSizeCorrect();
                return this._height;
            },
            set: function set(value) {
                this.setSize(this._rawWidth, value);
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
            set: function set(value) {
                this.setScale(value, this._scaleY);
            }
        }, {
            key: "scaleY",
            get: function get() {
                return this._scaleY;
            },
            set: function set(value) {
                this.setScale(this._scaleX, value);
            }
        }, {
            key: "skewX",
            get: function get() {
                return this._skewX;
            },
            set: function set(value) {
                this.setSkew(value, this._skewY);
            }
        }, {
            key: "skewY",
            get: function get() {
                return this._skewY;
            },
            set: function set(value) {
                this.setSkew(this._skewX, value);
            }
        }, {
            key: "pivotX",
            get: function get() {
                return this._pivotX;
            },
            set: function set(value) {
                this.setPivot(value, this._pivotY);
            }
        }, {
            key: "pivotY",
            get: function get() {
                return this._pivotY;
            },
            set: function set(value) {
                this.setPivot(this._pivotX, value);
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
            set: function set(value) {
                if (this._touchable != value) {
                    this._touchable = value;
                    this.updateGear(3);
                    if (this instanceof fgui.GImage || this instanceof fgui.GMovieClip || this instanceof fgui.GTextField && !(this instanceof fgui.GTextInput) && !(this instanceof fgui.GRichTextField)) return;
                    if (this._displayObject) this._displayObject.mouseEnabled = this._touchable;
                }
            }
        }, {
            key: "grayed",
            get: function get() {
                return this._grayed;
            },
            set: function set(value) {
                if (this._grayed != value) {
                    this._grayed = value;
                    this.handleGrayedChanged();
                    this.updateGear(3);
                }
            }
        }, {
            key: "enabled",
            get: function get() {
                return !this._grayed && this._touchable;
            },
            set: function set(value) {
                this.grayed = !value;
                this.touchable = value;
            }
        }, {
            key: "rotation",
            get: function get() {
                return this._rotation;
            },
            set: function set(value) {
                if (this._rotation != value) {
                    this._rotation = value;
                    if (this._displayObject) {
                        this._displayObject.rotation = this.normalizeRotation;
                        this.applyPivot();
                    }
                    this.updateGear(3);
                }
            }
        }, {
            key: "normalizeRotation",
            get: function get() {
                var rot = this._rotation % 360;
                if (rot > 180) rot = rot - 360; else if (rot < -180) rot = 360 + rot;
                return rot;
            }
        }, {
            key: "alpha",
            get: function get() {
                return this._alpha;
            },
            set: function set(value) {
                if (this._alpha != value) {
                    this._alpha = value;
                    this.handleAlphaChanged();
                    this.updateGear(3);
                }
            }
        }, {
            key: "visible",
            get: function get() {
                return this._visible;
            },
            set: function set(value) {
                if (this._visible != value) {
                    this._visible = value;
                    this.handleVisibleChanged();
                    if (this._parent) this._parent.setBoundsChangedFlag();
                    if (this._group && this._group.excludeInvisibles) this._group.setBoundsChangedFlag();
                }
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
            set: function set(value) {
                if (value < 0) value = 0;
                if (this._sortingOrder != value) {
                    var old = this._sortingOrder;
                    this._sortingOrder = value;
                    if (this._parent) this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
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
            set: function set(value) {
                if (this._tooltips) {
                    this.off(Laya.Event.ROLL_OVER, this, this.__rollOver);
                    this.off(Laya.Event.ROLL_OUT, this, this.__rollOut);
                }
                this._tooltips = value;
                if (this._tooltips) {
                    this.on(Laya.Event.ROLL_OVER, this, this.__rollOver);
                    this.on(Laya.Event.ROLL_OUT, this, this.__rollOut);
                }
            }
        }, {
            key: "blendMode",
            get: function get() {
                return this._displayObject.blendMode;
            },
            set: function set(value) {
                this._displayObject.blendMode = value;
            }
        }, {
            key: "filters",
            get: function get() {
                return this._displayObject.filters;
            },
            set: function set(value) {
                this._displayObject.filters = value;
            }
        }, {
            key: "inContainer",
            get: function get() {
                return this._displayObject != null && this._displayObject.parent != null;
            }
        }, {
            key: "onStage",
            get: function get() {
                return this._displayObject != null && this._displayObject.stage != null;
            }
        }, {
            key: "resourceURL",
            get: function get() {
                if (this.packageItem) return "ui://" + this.packageItem.owner.id + this.packageItem.id; else return null;
            }
        }, {
            key: "group",
            set: function set(value) {
                if (this._group != value) {
                    if (this._group) this._group.setBoundsChangedFlag();
                    this._group = value;
                    if (this._group) this._group.setBoundsChangedFlag();
                }
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
            set: function set(val) {
                this._parent = val;
            }
        }, {
            key: "root",
            get: function get() {
                if (this instanceof fgui.GRoot) return this;
                var p = this._parent;
                while (p) {
                    if (p instanceof fgui.GRoot) return p;
                    p = p.parent;
                }
                return fgui.GRoot.inst;
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
            set: function set(value) {}
        }, {
            key: "icon",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "treeNode",
            get: function get() {
                return this._treeNode;
            }
        }, {
            key: "isDisposed",
            get: function get() {
                return this._displayObject == null;
            }
        }, {
            key: "draggable",
            get: function get() {
                return this._draggable;
            },
            set: function set(value) {
                if (this._draggable != value) {
                    this._draggable = value;
                    this.initDrag();
                }
            }
        }, {
            key: "dragBounds",
            get: function get() {
                return this._dragBounds;
            },
            set: function set(value) {
                this._dragBounds = value;
            }
        }, {
            key: "dragging",
            get: function get() {
                return GObject.draggingObject == this;
            }
        } ], [ {
            key: "cast",
            value: function cast(sprite) {
                return sprite["$owner"];
            }
        } ]);
        return GObject;
    }();
    fgui.GObject = GObject;
    fgui.BlendMode = {
        2: Laya.BlendMode.LIGHTER,
        3: Laya.BlendMode.MULTIPLY,
        4: Laya.BlendMode.SCREEN
    };
    var _gInstanceCounter = 0;
    var sGlobalDragStart = new Laya.Point();
    var sGlobalRect = new Laya.Rectangle();
    var sHelperPoint = new Laya.Point();
    var sDragHelperRect = new Laya.Rectangle();
    var sUpdateInDragging;
    var sDraggingQuery;
})(fgui);

(function(fgui) {
    var GTextField = /* */ function(_fgui$GObject) {
        (0, _inherits2.default)(GTextField, _fgui$GObject);
        var _super2 = _createSuper(GTextField);
        function GTextField() {
            (0, _classCallCheck2.default)(this, GTextField);
            return _super2.call(this);
        }
        (0, _createClass2.default)(GTextField, [ {
            key: "updateAutoSize",
            value: function updateAutoSize() {}
        }, {
            key: "parseTemplate",
            value: function parseTemplate(template) {
                var pos1 = 0, pos2, pos3;
                var tag;
                var value;
                var result = "";
                while ((pos2 = template.indexOf("{", pos1)) != -1) {
                    if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92) {
                        result += template.substring(pos1, pos2 - 1);
                        result += "{";
                        pos1 = pos2 + 1;
                        continue;
                    }
                    result += template.substring(pos1, pos2);
                    pos1 = pos2;
                    pos2 = template.indexOf("}", pos1);
                    if (pos2 == -1) break;
                    if (pos2 == pos1 + 1) {
                        result += template.substr(pos1, 2);
                        pos1 = pos2 + 1;
                        continue;
                    }
                    tag = template.substring(pos1 + 1, pos2);
                    pos3 = tag.indexOf("=");
                    if (pos3 != -1) {
                        value = this._templateVars[tag.substring(0, pos3)];
                        if (value == null) result += tag.substring(pos3 + 1); else result += value;
                    } else {
                        value = this._templateVars[tag];
                        if (value != null) result += value;
                    }
                    pos1 = pos2 + 1;
                }
                if (pos1 < template.length) result += template.substr(pos1);
                return result;
            }
        }, {
            key: "setVar",
            value: function setVar(name, value) {
                if (!this._templateVars) this._templateVars = {};
                this._templateVars[name] = value;
                return this;
            }
        }, {
            key: "flushVars",
            value: function flushVars() {
                this.text = this._text;
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.color;

                  case fgui.ObjectPropID.OutlineColor:
                    return this.strokeColor;

                  case fgui.ObjectPropID.FontSize:
                    return this.fontSize;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GTextField.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.color = value;
                    break;

                  case fgui.ObjectPropID.OutlineColor:
                    this.strokeColor = value;
                    break;

                  case fgui.ObjectPropID.FontSize:
                    this.fontSize = value;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GTextField.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTextField.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                var iv;
                this.font = buffer.readS();
                this.fontSize = buffer.getInt16();
                this.color = buffer.readColorS();
                iv = buffer.readByte();
                this.align = iv == 0 ? "left" : iv == 1 ? "center" : "right";
                iv = buffer.readByte();
                this.valign = iv == 0 ? "top" : iv == 1 ? "middle" : "bottom";
                this.leading = buffer.getInt16();
                this.letterSpacing = buffer.getInt16();
                this.ubbEnabled = buffer.readBool();
                this.autoSize = buffer.readByte();
                this.underline = buffer.readBool();
                this.italic = buffer.readBool();
                this.bold = buffer.readBool();
                this.singleLine = buffer.readBool();
                if (buffer.readBool()) {
                    this.strokeColor = buffer.readColorS();
                    this.stroke = buffer.getFloat32() + 1;
                }
                if (buffer.readBool()) buffer.skip(12);
                if (buffer.readBool()) this._templateVars = {};
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTextField.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 6);
                var str = buffer.readS();
                if (str != null) this.text = str;
            }
        }, {
            key: "font",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "fontSize",
            get: function get() {
                return 0;
            },
            set: function set(value) {}
        }, {
            key: "color",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "align",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "valign",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "leading",
            get: function get() {
                return 0;
            },
            set: function set(value) {}
        }, {
            key: "letterSpacing",
            get: function get() {
                return 0;
            },
            set: function set(value) {}
        }, {
            key: "bold",
            get: function get() {
                return false;
            },
            set: function set(value) {}
        }, {
            key: "italic",
            get: function get() {
                return false;
            },
            set: function set(value) {}
        }, {
            key: "underline",
            get: function get() {
                return false;
            },
            set: function set(value) {}
        }, {
            key: "singleLine",
            get: function get() {
                return false;
            },
            set: function set(value) {}
        }, {
            key: "stroke",
            get: function get() {
                return 0;
            },
            set: function set(value) {}
        }, {
            key: "strokeColor",
            get: function get() {
                return null;
            },
            set: function set(value) {}
        }, {
            key: "ubbEnabled",
            set: function set(value) {
                this._ubbEnabled = value;
            },
            get: function get() {
                return this._ubbEnabled;
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this._widthAutoSize = this._autoSize == fgui.AutoSizeType.Both;
                    this._heightAutoSize = this._autoSize == fgui.AutoSizeType.Both || this._autoSize == fgui.AutoSizeType.Height;
                    this.updateAutoSize();
                }
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
            set: function set(value) {
                if (!this._templateVars && !value) return;
                this._templateVars = value;
                this.flushVars();
            }
        } ]);
        return GTextField;
    }(fgui.GObject);
    fgui.GTextField = GTextField;
})(fgui);

(function(fgui) {
    var GBasicTextField = /* */ function(_fgui$GTextField) {
        (0, _inherits2.default)(GBasicTextField, _fgui$GTextField);
        var _super3 = _createSuper(GBasicTextField);
        function GBasicTextField() {
            var _this2;
            (0, _classCallCheck2.default)(this, GBasicTextField);
            _this2 = _super3.call(this);
            _this2._letterSpacing = 0;
            _this2._textWidth = 0;
            _this2._textHeight = 0;
            _this2._text = "";
            _this2._color = "#000000";
            _this2._textField.align = "left";
            _this2._textField.font = fgui.UIConfig.defaultFont;
            _this2._autoSize = fgui.AutoSizeType.Both;
            _this2._widthAutoSize = _this2._heightAutoSize = true;
            _this2._textField["_sizeDirty"] = false;
            return _this2;
        }
        (0, _createClass2.default)(GBasicTextField, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._textField = new TextExt(this);
                this._displayObject["$owner"] = this;
                this._displayObject.mouseEnabled = false;
            }
        }, {
            key: "updateAutoSize",
            value: function updateAutoSize() {
                this._textField.wordWrap = !this._widthAutoSize && !this._singleLine;
                if (!this._underConstruct) {
                    if (!this._heightAutoSize) this._textField.size(this.width, this.height); else if (!this._widthAutoSize) this._textField.width = this.width;
                }
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {
                if (!this._underConstruct && this._textField["_isChanged"]) this._textField.typeset();
            }
        }, {
            key: "typeset",
            value: function typeset() {
                if (this._bitmapFont) this.renderWithBitmapFont(); else if (this._widthAutoSize || this._heightAutoSize) this.updateSize();
            }
        }, {
            key: "updateSize",
            value: function updateSize() {
                this._textWidth = Math.ceil(this._textField.textWidth);
                this._textHeight = Math.ceil(this._textField.textHeight);
                var w, h = 0;
                if (this._widthAutoSize) {
                    w = this._textWidth;
                    if (this._textField.width != w) {
                        this._textField.width = w;
                        if (this._textField.align != "left") this._textField["baseTypeset"]();
                    }
                } else w = this.width;
                if (this._heightAutoSize) {
                    h = this._textHeight;
                    if (!this._widthAutoSize) {
                        if (this._textField.height != this._textHeight) this._textField.height = this._textHeight;
                    }
                } else {
                    h = this.height;
                    if (this._textHeight > h) this._textHeight = h;
                    if (this._textField.height != this._textHeight) this._textField.height = this._textHeight;
                }
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }
        }, {
            key: "renderWithBitmapFont",
            value: function renderWithBitmapFont() {
                var gr = this._displayObject.graphics;
                gr.clear();
                if (!this._lines) this._lines = new Array(); else returnList(this._lines);
                var lineSpacing = this.leading - 1;
                var rectWidth = this.width - GUTTER_X * 2;
                var lineWidth = 0, lineHeight = 0, lineTextHeight = 0;
                var glyphWidth = 0, glyphHeight = 0;
                var wordChars = 0, wordStart = 0, wordEnd = 0;
                var lastLineHeight = 0;
                var lineBuffer = "";
                var lineY = GUTTER_Y;
                var line;
                var wordWrap = !this._widthAutoSize && !this._singleLine;
                var fontSize = this.fontSize;
                var fontScale = this._bitmapFont.resizable ? fontSize / this._bitmapFont.size : 1;
                this._textWidth = 0;
                this._textHeight = 0;
                var text2 = this._text;
                if (this._templateVars) text2 = this.parseTemplate(text2);
                var textLength = text2.length;
                for (var offset = 0; offset < textLength; ++offset) {
                    var ch = text2.charAt(offset);
                    var cc = ch.charCodeAt(0);
                    if (cc == 10) {
                        lineBuffer += ch;
                        line = borrow();
                        line.width = lineWidth;
                        if (lineTextHeight == 0) {
                            if (lastLineHeight == 0) lastLineHeight = fontSize;
                            if (lineHeight == 0) lineHeight = lastLineHeight;
                            lineTextHeight = lineHeight;
                        }
                        line.height = lineHeight;
                        lastLineHeight = lineHeight;
                        line.textHeight = lineTextHeight;
                        line.text = lineBuffer;
                        line.y = lineY;
                        lineY += line.height + lineSpacing;
                        if (line.width > this._textWidth) this._textWidth = line.width;
                        this._lines.push(line);
                        lineBuffer = "";
                        lineWidth = 0;
                        lineHeight = 0;
                        lineTextHeight = 0;
                        wordChars = 0;
                        wordStart = 0;
                        wordEnd = 0;
                        continue;
                    }
                    if (cc >= 65 && cc <= 90 || cc >= 97 && cc <= 122) {
                        if (wordChars == 0) wordStart = lineWidth;
                        wordChars++;
                    } else {
                        if (wordChars > 0) wordEnd = lineWidth;
                        wordChars = 0;
                    }
                    if (cc == 32) {
                        glyphWidth = Math.ceil(fontSize / 2);
                        glyphHeight = fontSize;
                    } else {
                        var glyph = this._bitmapFont.glyphs[ch];
                        if (glyph) {
                            glyphWidth = Math.ceil(glyph.advance * fontScale);
                            glyphHeight = Math.ceil(glyph.lineHeight * fontScale);
                        } else {
                            glyphWidth = 0;
                            glyphHeight = 0;
                        }
                    }
                    if (glyphHeight > lineTextHeight) lineTextHeight = glyphHeight;
                    if (glyphHeight > lineHeight) lineHeight = glyphHeight;
                    if (lineWidth != 0) lineWidth += this._letterSpacing;
                    lineWidth += glyphWidth;
                    if (!wordWrap || lineWidth <= rectWidth) {
                        lineBuffer += ch;
                    } else {
                        line = borrow();
                        line.height = lineHeight;
                        line.textHeight = lineTextHeight;
                        if (lineBuffer.length == 0) {
                            line.text = ch;
                        } else if (wordChars > 0 && wordEnd > 0) {
                            lineBuffer += ch;
                            var len = lineBuffer.length - wordChars;
                            line.text = fgui.ToolSet.trimRight(lineBuffer.substr(0, len));
                            line.width = wordEnd;
                            lineBuffer = lineBuffer.substr(len);
                            lineWidth -= wordStart;
                        } else {
                            line.text = lineBuffer;
                            line.width = lineWidth - (glyphWidth + this._letterSpacing);
                            lineBuffer = ch;
                            lineWidth = glyphWidth;
                            lineHeight = glyphHeight;
                            lineTextHeight = glyphHeight;
                        }
                        line.y = lineY;
                        lineY += line.height + lineSpacing;
                        if (line.width > this._textWidth) this._textWidth = line.width;
                        wordChars = 0;
                        wordStart = 0;
                        wordEnd = 0;
                        this._lines.push(line);
                    }
                }
                if (lineBuffer.length > 0) {
                    line = borrow();
                    line.width = lineWidth;
                    if (lineHeight == 0) lineHeight = lastLineHeight;
                    if (lineTextHeight == 0) lineTextHeight = lineHeight;
                    line.height = lineHeight;
                    line.textHeight = lineTextHeight;
                    line.text = lineBuffer;
                    line.y = lineY;
                    if (line.width > this._textWidth) this._textWidth = line.width;
                    this._lines.push(line);
                }
                if (this._textWidth > 0) this._textWidth += GUTTER_X * 2;
                var count = this._lines.length;
                if (count == 0) {
                    this._textHeight = 0;
                } else {
                    line = this._lines[this._lines.length - 1];
                    this._textHeight = line.y + line.height + GUTTER_Y;
                }
                var w, h = 0;
                if (this._widthAutoSize) {
                    if (this._textWidth == 0) w = 0; else w = this._textWidth;
                } else w = this.width;
                if (this._heightAutoSize) {
                    if (this._textHeight == 0) h = 0; else h = this._textHeight;
                } else h = this.height;
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
                this.doAlign();
                if (w == 0 || h == 0) return;
                var charX = GUTTER_X;
                var lineIndent = 0;
                var charIndent = 0;
                rectWidth = this.width - GUTTER_X * 2;
                var lineCount = this._lines.length;
                var color = this._bitmapFont.tint ? this._color : null;
                for (var i = 0; i < lineCount; i++) {
                    line = this._lines[i];
                    charX = GUTTER_X;
                    if (this.align == "center") lineIndent = (rectWidth - line.width) / 2; else if (this.align == "right") lineIndent = rectWidth - line.width; else lineIndent = 0;
                    textLength = line.text.length;
                    for (var j = 0; j < textLength; j++) {
                        ch = line.text.charAt(j);
                        cc = ch.charCodeAt(0);
                        if (cc == 10) continue;
                        if (cc == 32) {
                            charX += this._letterSpacing + Math.ceil(fontSize / 2);
                            continue;
                        }
                        glyph = this._bitmapFont.glyphs[ch];
                        if (glyph) {
                            charIndent = (line.height + line.textHeight) / 2 - Math.ceil(glyph.lineHeight * fontScale);
                            if (glyph.texture) {
                                gr.drawTexture(glyph.texture, charX + lineIndent + Math.ceil(glyph.x * fontScale), line.y + charIndent + Math.ceil(glyph.y * fontScale), glyph.width * fontScale, glyph.height * fontScale, null, 1, color);
                            }
                            charX += this._letterSpacing + Math.ceil(glyph.advance * fontScale);
                        } else {
                            charX += this._letterSpacing;
                        }
                    }
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                if (this._updatingSize) return;
                if (this._underConstruct) this._textField.size(this._width, this._height); else {
                    if (this._bitmapFont) {
                        if (!this._widthAutoSize) this._textField["setChanged"](); else this.doAlign();
                    } else {
                        if (!this._widthAutoSize) {
                            if (!this._heightAutoSize) this._textField.size(this._width, this._height); else this._textField.width = this._width;
                        }
                    }
                }
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GBasicTextField.prototype), "handleGrayedChanged", this).call(this);
                if (this.grayed) this._textField.color = "#AAAAAA"; else this._textField.color = this._color;
            }
        }, {
            key: "doAlign",
            value: function doAlign() {
                if (this.valign == "top" || this._textHeight == 0) this._yOffset = GUTTER_Y; else {
                    var dh = this.height - this._textHeight;
                    if (dh < 0) dh = 0;
                    if (this.valign == "middle") this._yOffset = Math.floor(dh / 2); else this._yOffset = Math.floor(dh);
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
            set: function set(value) {
                this._text = value;
                if (this._text == null) this._text = "";
                if (this._bitmapFont == null) {
                    if (this._widthAutoSize) this._textField.width = 1e4;
                    var text2 = this._text;
                    if (this._templateVars) text2 = this.parseTemplate(text2);
                    if (this._ubbEnabled) this._textField.text = fgui.UBBParser.inst.parse(fgui.ToolSet.encodeHTML(text2), true); else this._textField.text = text2;
                } else {
                    this._textField.text = "";
                    this._textField["setChanged"]();
                }
                if (this.parent && this.parent._underConstruct) this._textField.typeset();
            },
            get: function get() {
                return this._text;
            }
        }, {
            key: "font",
            get: function get() {
                return this._textField.font;
            },
            set: function set(value) {
                this._font = value;
                if (fgui.ToolSet.startsWith(this._font, "ui://")) this._bitmapFont = fgui.UIPackage.getItemAssetByURL(this._font); else delete this._bitmapFont;
                if (this._bitmapFont) {
                    this._textField["setChanged"]();
                } else {
                    if (this._font) this._textField.font = this._font; else this._textField.font = fgui.UIConfig.defaultFont;
                }
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._textField.fontSize;
            },
            set: function set(value) {
                this._textField.fontSize = value;
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(value) {
                if (this._color != value) {
                    this._color = value;
                    this.updateGear(4);
                    if (this.grayed) this._textField.color = "#AAAAAA"; else this._textField.color = this._color;
                }
            }
        }, {
            key: "align",
            get: function get() {
                return this._textField.align;
            },
            set: function set(value) {
                this._textField.align = value;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._textField.valign;
            },
            set: function set(value) {
                this._textField.valign = value;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._textField.leading;
            },
            set: function set(value) {
                this._textField.leading = value;
            }
        }, {
            key: "letterSpacing",
            get: function get() {
                return this._letterSpacing;
            },
            set: function set(value) {
                this._letterSpacing = value;
            }
        }, {
            key: "bold",
            get: function get() {
                return this._textField.bold;
            },
            set: function set(value) {
                this._textField.bold = value;
            }
        }, {
            key: "italic",
            get: function get() {
                return this._textField.italic;
            },
            set: function set(value) {
                this._textField.italic = value;
            }
        }, {
            key: "underline",
            get: function get() {
                return this._textField.underline;
            },
            set: function set(value) {
                this._textField.underline = value;
            }
        }, {
            key: "singleLine",
            get: function get() {
                return this._singleLine;
            },
            set: function set(value) {
                this._singleLine = value;
                this._textField.wordWrap = !this._widthAutoSize && !this._singleLine;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._textField.stroke;
            },
            set: function set(value) {
                this._textField.stroke = value;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._textField.strokeColor;
            },
            set: function set(value) {
                if (this._textField.strokeColor != value) {
                    this._textField.strokeColor = value;
                    this.updateGear(4);
                }
            }
        }, {
            key: "textWidth",
            get: function get() {
                if (this._textField["_isChanged"]) this._textField.typeset();
                return this._textWidth;
            }
        } ]);
        return GBasicTextField;
    }(fgui.GTextField);
    fgui.GBasicTextField = GBasicTextField;
    var TextExt = /* */ function(_Laya$Text) {
        (0, _inherits2.default)(TextExt, _Laya$Text);
        var _super4 = _createSuper(TextExt);
        function TextExt(owner) {
            var _this3;
            (0, _classCallCheck2.default)(this, TextExt);
            _this3 = _super4.call(this);
            _this3._owner = owner;
            return _this3;
        }
        (0, _createClass2.default)(TextExt, [ {
            key: "baseTypeset",
            value: function baseTypeset() {
                this._lock = true;
                this.typeset();
                this._lock = false;
            }
        }, {
            key: "typeset",
            value: function typeset() {
                this._sizeDirty = true;
                (0, _get2.default)((0, _getPrototypeOf2.default)(TextExt.prototype), "typeset", this).call(this);
                if (!this._lock) this._owner.typeset();
                if (this._isChanged) {
                    Laya.timer.clear(this, this.typeset);
                    this._isChanged = false;
                }
                this._sizeDirty = false;
            }
        }, {
            key: "setChanged",
            value: function setChanged() {
                this.isChanged = true;
            }
        }, {
            key: "isChanged",
            set: function set(value) {
                if (value && !this._sizeDirty) {
                    if (this._owner.autoSize != fgui.AutoSizeType.None && this._owner.parent) {
                        this._sizeDirty = true;
                        this.event(fgui.Events.SIZE_DELAY_CHANGE);
                    }
                }
                (0, _set2.default)((0, _getPrototypeOf2.default)(TextExt.prototype), "isChanged", value, this, true);
            }
        } ]);
        return TextExt;
    }(Laya.Text);
    var pool = [];
    function borrow() {
        if (pool.length) {
            var ret = pool.pop();
            ret.width = 0;
            ret.height = 0;
            ret.textHeight = 0;
            ret.text = null;
            ret.y = 0;
            return ret;
        } else return {
            width: 0,
            height: 0,
            textHeight: 0,
            text: null,
            y: 0
        };
    }
    function returnList(value) {
        var length = value.length;
        for (var i = 0; i < length; i++) {
            var li = value[i];
            pool.push(li);
        }
        value.length = 0;
    }
    var GUTTER_X = 2;
    var GUTTER_Y = 2;
})(fgui);

(function(fgui) {
    var Margin = /* */ function() {
        function Margin() {
            (0, _classCallCheck2.default)(this, Margin);
            this.left = 0;
            this.right = 0;
            this.top = 0;
            this.bottom = 0;
        }
        (0, _createClass2.default)(Margin, [ {
            key: "copy",
            value: function copy(source) {
                this.top = source.top;
                this.bottom = source.bottom;
                this.left = source.left;
                this.right = source.right;
            }
        } ]);
        return Margin;
    }();
    fgui.Margin = Margin;
})(fgui);

(function(fgui) {
    var GComponent = /* */ function(_fgui$GObject2) {
        (0, _inherits2.default)(GComponent, _fgui$GObject2);
        var _super5 = _createSuper(GComponent);
        function GComponent() {
            var _this4;
            (0, _classCallCheck2.default)(this, GComponent);
            _this4 = _super5.call(this);
            _this4._sortingChildCount = 0;
            _this4._children = [];
            _this4._controllers = [];
            _this4._transitions = [];
            _this4._margin = new fgui.Margin();
            _this4._alignOffset = new Laya.Point();
            _this4._opaque = false;
            _this4._childrenRenderOrder = 0;
            _this4._apexIndex = 0;
            return _this4;
        }
        (0, _createClass2.default)(GComponent, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComponent.prototype), "createDisplayObject", this).call(this);
                this._displayObject.mouseEnabled = true;
                this._displayObject.mouseThrough = true;
                this._container = this._displayObject;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                var i;
                var cnt;
                cnt = this._transitions.length;
                for (i = 0; i < cnt; ++i) {
                    var trans = this._transitions[i];
                    trans.dispose();
                }
                cnt = this._controllers.length;
                for (i = 0; i < cnt; ++i) {
                    var cc = this._controllers[i];
                    cc.dispose();
                }
                if (this.scrollPane) this.scrollPane.dispose();
                cnt = this._children.length;
                for (i = cnt - 1; i >= 0; --i) {
                    var obj = this._children[i];
                    obj.parent = null;
                    obj.dispose();
                }
                this._boundsChanged = false;
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComponent.prototype), "dispose", this).call(this);
            }
        }, {
            key: "addChild",
            value: function addChild(child) {
                this.addChildAt(child, this._children.length);
                return child;
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(child, index) {
                if (!child) throw "child is null";
                if (index >= 0 && index <= this._children.length) {
                    if (child.parent == this) {
                        this.setChildIndex(child, index);
                    } else {
                        child.removeFromParent();
                        child.parent = this;
                        var cnt = this._children.length;
                        if (child.sortingOrder != 0) {
                            this._sortingChildCount++;
                            index = this.getInsertPosForSortingChild(child);
                        } else if (this._sortingChildCount > 0) {
                            if (index > cnt - this._sortingChildCount) index = cnt - this._sortingChildCount;
                        }
                        if (index == cnt) this._children.push(child); else this._children.splice(index, 0, child);
                        this.childStateChanged(child);
                        this.setBoundsChangedFlag();
                    }
                    return child;
                } else {
                    throw "Invalid child index";
                }
            }
        }, {
            key: "getInsertPosForSortingChild",
            value: function getInsertPosForSortingChild(target) {
                var cnt = this._children.length;
                var i = 0;
                for (i = 0; i < cnt; i++) {
                    var child = this._children[i];
                    if (child == target) continue;
                    if (target.sortingOrder < child.sortingOrder) break;
                }
                return i;
            }
        }, {
            key: "removeChild",
            value: function removeChild(child, dispose) {
                var childIndex = this._children.indexOf(child);
                if (childIndex != -1) {
                    this.removeChildAt(childIndex, dispose);
                }
                return child;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(index, dispose) {
                if (index >= 0 && index < this._children.length) {
                    var child = this._children[index];
                    child.parent = null;
                    if (child.sortingOrder != 0) this._sortingChildCount--;
                    this._children.splice(index, 1);
                    child.group = null;
                    if (child.inContainer) {
                        this._container.removeChild(child.displayObject);
                        if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) Laya.timer.callLater(this, this.buildNativeDisplayList);
                    }
                    if (dispose) child.dispose();
                    this.setBoundsChangedFlag();
                    return child;
                } else {
                    throw "Invalid child index";
                }
            }
        }, {
            key: "removeChildren",
            value: function removeChildren(beginIndex, endIndex, dispose) {
                if (beginIndex == undefined) beginIndex = 0;
                if (endIndex == undefined) endIndex = -1;
                if (endIndex < 0 || endIndex >= this._children.length) endIndex = this._children.length - 1;
                for (var i = beginIndex; i <= endIndex; ++i) {
                    this.removeChildAt(beginIndex, dispose);
                }
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(index) {
                if (index >= 0 && index < this._children.length) return this._children[index]; else throw "Invalid child index";
            }
        }, {
            key: "getChild",
            value: function getChild(name) {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    if (this._children[i].name == name) return this._children[i];
                }
                return null;
            }
        }, {
            key: "getChildByPath",
            value: function getChildByPath(path) {
                var arr = path.split(".");
                var cnt = arr.length;
                var gcom = this;
                var obj;
                for (var i = 0; i < cnt; ++i) {
                    obj = gcom.getChild(arr[i]);
                    if (!obj) break;
                    if (i != cnt - 1) {
                        if (!(obj instanceof GComponent)) {
                            obj = null;
                            break;
                        } else gcom = obj;
                    }
                }
                return obj;
            }
        }, {
            key: "getVisibleChild",
            value: function getVisibleChild(name) {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    var child = this._children[i];
                    if (child.internalVisible && child.internalVisible2 && child.name == name) return child;
                }
                return null;
            }
        }, {
            key: "getChildInGroup",
            value: function getChildInGroup(name, group) {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    var child = this._children[i];
                    if (child.group == group && child.name == name) return child;
                }
                return null;
            }
        }, {
            key: "getChildById",
            value: function getChildById(id) {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    if (this._children[i]._id == id) return this._children[i];
                }
                return null;
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(child) {
                return this._children.indexOf(child);
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(child, index) {
                var oldIndex = this._children.indexOf(child);
                if (oldIndex == -1) throw "Not a child of this container";
                if (child.sortingOrder != 0) return;
                var cnt = this._children.length;
                if (this._sortingChildCount > 0) {
                    if (index > cnt - this._sortingChildCount - 1) index = cnt - this._sortingChildCount - 1;
                }
                this._setChildIndex(child, oldIndex, index);
            }
        }, {
            key: "setChildIndexBefore",
            value: function setChildIndexBefore(child, index) {
                var oldIndex = this._children.indexOf(child);
                if (oldIndex == -1) throw "Not a child of this container";
                if (child.sortingOrder != 0) return oldIndex;
                var cnt = this._children.length;
                if (this._sortingChildCount > 0) {
                    if (index > cnt - this._sortingChildCount - 1) index = cnt - this._sortingChildCount - 1;
                }
                if (oldIndex < index) return this._setChildIndex(child, oldIndex, index - 1); else return this._setChildIndex(child, oldIndex, index);
            }
        }, {
            key: "_setChildIndex",
            value: function _setChildIndex(child, oldIndex, index) {
                var cnt = this._children.length;
                if (index > cnt) index = cnt;
                if (oldIndex == index) return oldIndex;
                this._children.splice(oldIndex, 1);
                this._children.splice(index, 0, child);
                if (child.inContainer) {
                    var displayIndex = 0;
                    var g;
                    var i;
                    if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Ascent) {
                        for (i = 0; i < index; i++) {
                            g = this._children[i];
                            if (g.inContainer) displayIndex++;
                        }
                        if (displayIndex == this._container.numChildren) displayIndex--;
                        this._container.setChildIndex(child.displayObject, displayIndex);
                    } else if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Descent) {
                        for (i = cnt - 1; i > index; i--) {
                            g = this._children[i];
                            if (g.inContainer) displayIndex++;
                        }
                        if (displayIndex == this._container.numChildren) displayIndex--;
                        this._container.setChildIndex(child.displayObject, displayIndex);
                    } else {
                        Laya.timer.callLater(this, this.buildNativeDisplayList);
                    }
                    this.setBoundsChangedFlag();
                }
                return index;
            }
        }, {
            key: "swapChildren",
            value: function swapChildren(child1, child2) {
                var index1 = this._children.indexOf(child1);
                var index2 = this._children.indexOf(child2);
                if (index1 == -1 || index2 == -1) throw "Not a child of this container";
                this.swapChildrenAt(index1, index2);
            }
        }, {
            key: "swapChildrenAt",
            value: function swapChildrenAt(index1, index2) {
                var child1 = this._children[index1];
                var child2 = this._children[index2];
                this.setChildIndex(child1, index2);
                this.setChildIndex(child2, index1);
            }
        }, {
            key: "isAncestorOf",
            value: function isAncestorOf(child) {
                if (!child) return false;
                var p = child.parent;
                while (p) {
                    if (p == this) return true;
                    p = p.parent;
                }
                return false;
            }
        }, {
            key: "addController",
            value: function addController(controller) {
                this._controllers.push(controller);
                controller.parent = this;
                this.applyController(controller);
            }
        }, {
            key: "getControllerAt",
            value: function getControllerAt(index) {
                return this._controllers[index];
            }
        }, {
            key: "getController",
            value: function getController(name) {
                var cnt = this._controllers.length;
                for (var i = 0; i < cnt; ++i) {
                    var c = this._controllers[i];
                    if (c.name == name) return c;
                }
                return null;
            }
        }, {
            key: "removeController",
            value: function removeController(c) {
                var index = this._controllers.indexOf(c);
                if (index == -1) throw new Error("controller not exists");
                c.parent = null;
                this._controllers.splice(index, 1);
                var length = this._children.length;
                for (var i = 0; i < length; i++) {
                    var child = this._children[i];
                    child.handleControllerChanged(c);
                }
            }
        }, {
            key: "childStateChanged",
            value: function childStateChanged(child) {
                if (this._buildingDisplayList) return;
                var cnt = this._children.length;
                if (child instanceof fgui.GGroup) {
                    for (var i = 0; i < cnt; i++) {
                        var g = this._children[i];
                        if (g.group == child) this.childStateChanged(g);
                    }
                    return;
                }
                if (!child.displayObject) return;
                if (child.internalVisible && child.displayObject != this._displayObject.mask) {
                    if (!child.displayObject.parent) {
                        var index = 0;
                        if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Ascent) {
                            for (i = 0; i < cnt; i++) {
                                g = this._children[i];
                                if (g == child) break;
                                if (g.displayObject && g.displayObject.parent) index++;
                            }
                            this._container.addChildAt(child.displayObject, index);
                        } else if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Descent) {
                            for (i = cnt - 1; i >= 0; i--) {
                                g = this._children[i];
                                if (g == child) break;
                                if (g.displayObject && g.displayObject.parent) index++;
                            }
                            this._container.addChildAt(child.displayObject, index);
                        } else {
                            this._container.addChild(child.displayObject);
                            Laya.timer.callLater(this, this.buildNativeDisplayList);
                        }
                    }
                } else {
                    if (child.displayObject.parent) {
                        this._container.removeChild(child.displayObject);
                        if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) Laya.timer.callLater(this, this.buildNativeDisplayList);
                    }
                }
            }
        }, {
            key: "buildNativeDisplayList",
            value: function buildNativeDisplayList() {
                if (!this._displayObject) return;
                var cnt = this._children.length;
                if (cnt == 0) return;
                var i;
                var child;
                switch (this._childrenRenderOrder) {
                  case fgui.ChildrenRenderOrder.Ascent:
                    {
                        for (i = 0; i < cnt; i++) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible) this._container.addChild(child.displayObject);
                        }
                    }
                    break;

                  case fgui.ChildrenRenderOrder.Descent:
                    {
                        for (i = cnt - 1; i >= 0; i--) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible) this._container.addChild(child.displayObject);
                        }
                    }
                    break;

                  case fgui.ChildrenRenderOrder.Arch:
                    {
                        var apex = fgui.ToolSet.clamp(this._apexIndex, 0, cnt);
                        for (i = 0; i < apex; i++) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible) this._container.addChild(child.displayObject);
                        }
                        for (i = cnt - 1; i >= apex; i--) {
                            child = this._children[i];
                            if (child.displayObject && child.internalVisible) this._container.addChild(child.displayObject);
                        }
                    }
                    break;
                }
            }
        }, {
            key: "applyController",
            value: function applyController(c) {
                this._applyingController = c;
                var child;
                var length = this._children.length;
                for (var i = 0; i < length; i++) {
                    child = this._children[i];
                    child.handleControllerChanged(c);
                }
                this._applyingController = null;
                c.runActions();
            }
        }, {
            key: "applyAllControllers",
            value: function applyAllControllers() {
                var cnt = this._controllers.length;
                for (var i = 0; i < cnt; ++i) {
                    this.applyController(this._controllers[i]);
                }
            }
        }, {
            key: "adjustRadioGroupDepth",
            value: function adjustRadioGroupDepth(obj, c) {
                var cnt = this._children.length;
                var i;
                var child;
                var myIndex = -1, maxIndex = -1;
                for (i = 0; i < cnt; i++) {
                    child = this._children[i];
                    if (child == obj) {
                        myIndex = i;
                    } else if (child instanceof fgui.GButton && child.relatedController == c) {
                        if (i > maxIndex) maxIndex = i;
                    }
                }
                if (myIndex < maxIndex) {
                    if (this._applyingController) this._children[maxIndex].handleControllerChanged(this._applyingController);
                    this.swapChildrenAt(myIndex, maxIndex);
                }
            }
        }, {
            key: "getTransitionAt",
            value: function getTransitionAt(index) {
                return this._transitions[index];
            }
        }, {
            key: "getTransition",
            value: function getTransition(transName) {
                var cnt = this._transitions.length;
                for (var i = 0; i < cnt; ++i) {
                    var trans = this._transitions[i];
                    if (trans.name == transName) return trans;
                }
                return null;
            }
        }, {
            key: "isChildInView",
            value: function isChildInView(child) {
                if (this._displayObject.scrollRect) {
                    return child.x + child.width >= 0 && child.x <= this.width && child.y + child.height >= 0 && child.y <= this.height;
                } else if (this._scrollPane) {
                    return this._scrollPane.isChildInView(child);
                } else return true;
            }
        }, {
            key: "getFirstChildInView",
            value: function getFirstChildInView() {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    var child = this._children[i];
                    if (this.isChildInView(child)) return i;
                }
                return -1;
            }
        }, {
            key: "setMask",
            value: function setMask(value, reversed) {
                if (this._mask && this._mask != value) {
                    if (this._mask.blendMode == "destination-out") this._mask.blendMode = null;
                }
                this._mask = value;
                if (!this._mask) {
                    this._displayObject.mask = null;
                    if (this._displayObject.hitArea instanceof fgui.ChildHitArea) this._displayObject.hitArea = null;
                    return;
                }
                if (this._mask.hitArea) {
                    this._displayObject.hitArea = new fgui.ChildHitArea(this._mask, reversed);
                    this._displayObject.mouseThrough = false;
                    this._displayObject.hitTestPrior = true;
                }
                if (reversed) {
                    this._displayObject.mask = null;
                    this._displayObject.cacheAs = "bitmap";
                    this._mask.blendMode = "destination-out";
                } else this._displayObject.mask = this._mask;
            }
        }, {
            key: "updateHitArea",
            value: function updateHitArea() {
                if (this._displayObject.hitArea instanceof fgui.PixelHitTest) {
                    var hitTest = this._displayObject.hitArea;
                    if (this.sourceWidth != 0) hitTest.scaleX = this._width / this.sourceWidth;
                    if (this.sourceHeight != 0) hitTest.scaleY = this._height / this.sourceHeight;
                } else if (this._displayObject.hitArea instanceof Laya.Rectangle) {
                    this._displayObject.hitArea.setTo(0, 0, this._width, this._height);
                }
            }
        }, {
            key: "updateMask",
            value: function updateMask() {
                var rect = this._displayObject.scrollRect;
                if (!rect) rect = new Laya.Rectangle();
                rect.x = this._margin.left;
                rect.y = this._margin.top;
                rect.width = this._width - this._margin.right;
                rect.height = this._height - this._margin.bottom;
                this._displayObject.scrollRect = rect;
            }
        }, {
            key: "setupScroll",
            value: function setupScroll(buffer) {
                if (this._displayObject == this._container) {
                    this._container = new Laya.Sprite();
                    this._displayObject.addChild(this._container);
                }
                this._scrollPane = new fgui.ScrollPane(this);
                this._scrollPane.setup(buffer);
            }
        }, {
            key: "setupOverflow",
            value: function setupOverflow(overflow) {
                if (overflow == fgui.OverflowType.Hidden) {
                    if (this._displayObject == this._container) {
                        this._container = new Laya.Sprite();
                        this._displayObject.addChild(this._container);
                    }
                    this.updateMask();
                    this._container.pos(this._margin.left, this._margin.top);
                } else if (this._margin.left != 0 || this._margin.top != 0) {
                    if (this._displayObject == this._container) {
                        this._container = new Laya.Sprite();
                        this._displayObject.addChild(this._container);
                    }
                    this._container.pos(this._margin.left, this._margin.top);
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComponent.prototype), "handleSizeChanged", this).call(this);
                if (this._scrollPane) this._scrollPane.onOwnerSizeChanged(); else if (this._displayObject.scrollRect) this.updateMask();
                if (this._displayObject.hitArea) this.updateHitArea();
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                var c = this.getController("grayed");
                if (c) {
                    c.selectedIndex = this.grayed ? 1 : 0;
                    return;
                }
                var v = this.grayed;
                var cnt = this._children.length;
                for (var i = 0; i < cnt; ++i) {
                    this._children[i].grayed = v;
                }
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComponent.prototype), "handleControllerChanged", this).call(this, c);
                if (this._scrollPane) this._scrollPane.handleControllerChanged(c);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function setBoundsChangedFlag() {
                if (!this._scrollPane && !this._trackBounds) return;
                if (!this._boundsChanged) {
                    this._boundsChanged = true;
                    Laya.timer.callLater(this, this.__render);
                }
            }
        }, {
            key: "__render",
            value: function __render() {
                if (this._boundsChanged) {
                    var i1 = 0;
                    var len = this._children.length;
                    var child;
                    for (i1 = 0; i1 < len; i1++) {
                        child = this._children[i1];
                        child.ensureSizeCorrect();
                    }
                    this.updateBounds();
                }
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function ensureBoundsCorrect() {
                var i1 = 0;
                var len = this._children.length;
                var child;
                for (i1 = 0; i1 < len; i1++) {
                    child = this._children[i1];
                    child.ensureSizeCorrect();
                }
                if (this._boundsChanged) this.updateBounds();
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                var ax = 0, ay = 0, aw = 0, ah = 0;
                var len = this._children.length;
                if (len > 0) {
                    ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                    var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
                    var tmp = 0;
                    var i1 = 0;
                    for (i1 = 0; i1 < len; i1++) {
                        var child = this._children[i1];
                        tmp = child.x;
                        if (tmp < ax) ax = tmp;
                        tmp = child.y;
                        if (tmp < ay) ay = tmp;
                        tmp = child.x + child.actualWidth;
                        if (tmp > ar) ar = tmp;
                        tmp = child.y + child.actualHeight;
                        if (tmp > ab) ab = tmp;
                    }
                    aw = ar - ax;
                    ah = ab - ay;
                }
                this.setBounds(ax, ay, aw, ah);
            }
        }, {
            key: "setBounds",
            value: function setBounds(ax, ay, aw, ah) {
                this._boundsChanged = false;
                if (this._scrollPane) this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
            }
        }, {
            key: "getSnappingPosition",
            value: function getSnappingPosition(xValue, yValue, result) {
                return this.getSnappingPositionWithDir(xValue, yValue, 0, 0, result);
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function getSnappingPositionWithDir(xValue, yValue, xDir, yDir, result) {
                if (!result) result = new Laya.Point();
                var cnt = this._children.length;
                if (cnt == 0) {
                    result.x = 0;
                    result.y = 0;
                    return result;
                }
                this.ensureBoundsCorrect();
                var obj = null;
                var prev = null;
                var i = 0;
                if (yValue != 0) {
                    for (;i < cnt; i++) {
                        obj = this._children[i];
                        if (yValue < obj.y) {
                            if (i == 0) {
                                yValue = 0;
                                break;
                            } else {
                                prev = this._children[i - 1];
                                if (yValue < prev.y + prev.actualHeight / 2) yValue = prev.y; else yValue = obj.y;
                                break;
                            }
                        }
                    }
                    if (i == cnt) yValue = obj.y;
                }
                if (xValue != 0) {
                    if (i > 0) i--;
                    for (;i < cnt; i++) {
                        obj = this._children[i];
                        if (xValue < obj.x) {
                            if (i == 0) {
                                xValue = 0;
                                break;
                            } else {
                                prev = this._children[i - 1];
                                if (xValue < prev.x + prev.actualWidth / 2) xValue = prev.x; else xValue = obj.x;
                                break;
                            }
                        }
                    }
                    if (i == cnt) xValue = obj.x;
                }
                result.x = xValue;
                result.y = yValue;
                return result;
            }
        }, {
            key: "childSortingOrderChanged",
            value: function childSortingOrderChanged(child, oldValue, newValue) {
                if (newValue == 0) {
                    this._sortingChildCount--;
                    this.setChildIndex(child, this._children.length);
                } else {
                    if (oldValue == 0) this._sortingChildCount++;
                    var oldIndex = this._children.indexOf(child);
                    var index = this.getInsertPosForSortingChild(child);
                    if (oldIndex < index) this._setChildIndex(child, oldIndex, index - 1); else this._setChildIndex(child, oldIndex, index);
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                this.constructFromResource2(null, 0);
            }
        }, {
            key: "constructFromResource2",
            value: function constructFromResource2(objectPool, poolIndex) {
                var contentItem = this.packageItem.getBranch();
                if (!contentItem.decoded) {
                    contentItem.decoded = true;
                    fgui.TranslationHelper.translateComponent(contentItem);
                }
                var i;
                var dataLen;
                var curPos;
                var nextPos;
                var f1;
                var f2;
                var i1;
                var i2;
                var buffer = contentItem.rawData;
                buffer.seek(0, 0);
                this._underConstruct = true;
                this.sourceWidth = buffer.getInt32();
                this.sourceHeight = buffer.getInt32();
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                this.setSize(this.sourceWidth, this.sourceHeight);
                if (buffer.readBool()) {
                    this.minWidth = buffer.getInt32();
                    this.maxWidth = buffer.getInt32();
                    this.minHeight = buffer.getInt32();
                    this.maxHeight = buffer.getInt32();
                }
                if (buffer.readBool()) {
                    f1 = buffer.getFloat32();
                    f2 = buffer.getFloat32();
                    this.internalSetPivot(f1, f2, buffer.readBool());
                }
                if (buffer.readBool()) {
                    this._margin.top = buffer.getInt32();
                    this._margin.bottom = buffer.getInt32();
                    this._margin.left = buffer.getInt32();
                    this._margin.right = buffer.getInt32();
                }
                var overflow = buffer.readByte();
                if (overflow == fgui.OverflowType.Scroll) {
                    var savedPos = buffer.pos;
                    buffer.seek(0, 7);
                    this.setupScroll(buffer);
                    buffer.pos = savedPos;
                } else this.setupOverflow(overflow);
                if (buffer.readBool()) buffer.skip(8);
                this._buildingDisplayList = true;
                buffer.seek(0, 1);
                var controllerCount = buffer.getInt16();
                for (i = 0; i < controllerCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    var controller = new fgui.Controller();
                    this._controllers.push(controller);
                    controller.parent = this;
                    controller.setup(buffer);
                    buffer.pos = nextPos;
                }
                buffer.seek(0, 2);
                var child;
                var childCount = buffer.getInt16();
                for (i = 0; i < childCount; i++) {
                    dataLen = buffer.getInt16();
                    curPos = buffer.pos;
                    if (objectPool) child = objectPool[poolIndex + i]; else {
                        buffer.seek(curPos, 0);
                        var type = buffer.readByte();
                        var src = buffer.readS();
                        var pkgId = buffer.readS();
                        var pi = null;
                        if (src != null) {
                            var pkg;
                            if (pkgId != null) pkg = fgui.UIPackage.getById(pkgId); else pkg = contentItem.owner;
                            pi = pkg ? pkg.getItemById(src) : null;
                        }
                        if (pi) {
                            child = fgui.UIObjectFactory.newObject(pi);
                            child.constructFromResource();
                        } else child = fgui.UIObjectFactory.newObject(type);
                    }
                    child._underConstruct = true;
                    child.setup_beforeAdd(buffer, curPos);
                    child.parent = this;
                    this._children.push(child);
                    buffer.pos = curPos + dataLen;
                }
                buffer.seek(0, 3);
                this.relations.setup(buffer, true);
                buffer.seek(0, 2);
                buffer.skip(2);
                for (i = 0; i < childCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    buffer.seek(buffer.pos, 3);
                    this._children[i].relations.setup(buffer, false);
                    buffer.pos = nextPos;
                }
                buffer.seek(0, 2);
                buffer.skip(2);
                for (i = 0; i < childCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    child = this._children[i];
                    child.setup_afterAdd(buffer, buffer.pos);
                    child._underConstruct = false;
                    buffer.pos = nextPos;
                }
                buffer.seek(0, 4);
                buffer.skip(2);
                this.opaque = buffer.readBool();
                var maskId = buffer.getInt16();
                if (maskId != -1) {
                    this.setMask(this.getChildAt(maskId).displayObject, buffer.readBool());
                }
                var hitTestId = buffer.readS();
                i1 = buffer.getInt32();
                i2 = buffer.getInt32();
                var hitArea;
                if (hitTestId) {
                    pi = contentItem.owner.getItemById(hitTestId);
                    if (pi && pi.pixelHitTestData) hitArea = new fgui.PixelHitTest(pi.pixelHitTestData, i1, i2);
                } else if (i1 != 0 && i2 != -1) {
                    hitArea = new fgui.ChildHitArea(this.getChildAt(i2).displayObject);
                }
                if (hitArea) {
                    this._displayObject.hitArea = hitArea;
                    this._displayObject.mouseThrough = false;
                    this._displayObject.hitTestPrior = true;
                }
                buffer.seek(0, 5);
                var transitionCount = buffer.getInt16();
                for (i = 0; i < transitionCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    var trans = new fgui.Transition(this);
                    trans.setup(buffer);
                    this._transitions.push(trans);
                    buffer.pos = nextPos;
                }
                if (this._transitions.length > 0) {
                    this.displayObject.on(Laya.Event.DISPLAY, this, this.___added);
                    this.displayObject.on(Laya.Event.UNDISPLAY, this, this.___removed);
                }
                this.applyAllControllers();
                this._buildingDisplayList = false;
                this._underConstruct = false;
                this.buildNativeDisplayList();
                this.setBoundsChangedFlag();
                if (contentItem.objectType != fgui.ObjectType.Component) this.constructExtension(buffer);
                this.onConstruct();
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {}
        }, {
            key: "onConstruct",
            value: function onConstruct() {
                this.constructFromXML(null);
            }
        }, {
            key: "constructFromXML",
            value: function constructFromXML(xml) {}
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComponent.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 4);
                var pageController = buffer.getInt16();
                if (pageController != -1 && this._scrollPane) this._scrollPane.pageController = this._parent.getControllerAt(pageController);
                var cnt;
                var i;
                cnt = buffer.getInt16();
                for (i = 0; i < cnt; i++) {
                    var cc = this.getController(buffer.readS());
                    var pageId = buffer.readS();
                    if (cc) cc.selectedPageId = pageId;
                }
                if (buffer.version >= 2) {
                    cnt = buffer.getInt16();
                    for (i = 0; i < cnt; i++) {
                        var target = buffer.readS();
                        var propertyId = buffer.getInt16();
                        var value = buffer.readS();
                        var obj = this.getChildByPath(target);
                        if (obj) obj.setProp(propertyId, value);
                    }
                }
            }
        }, {
            key: "___added",
            value: function ___added() {
                var cnt = this._transitions.length;
                for (var i = 0; i < cnt; ++i) {
                    this._transitions[i].onOwnerAddedToStage();
                }
            }
        }, {
            key: "___removed",
            value: function ___removed() {
                var cnt = this._transitions.length;
                for (var i = 0; i < cnt; ++i) {
                    this._transitions[i].onOwnerRemovedFromStage();
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
            set: function set(value) {
                if (this._opaque != value) {
                    this._opaque = value;
                    if (this._opaque) {
                        if (!this._displayObject.hitArea) this._displayObject.hitArea = new Laya.Rectangle();
                        if (this._displayObject.hitArea instanceof Laya.Rectangle) this._displayObject.hitArea.setTo(0, 0, this._width, this._height);
                        this._displayObject.mouseThrough = false;
                    } else {
                        if (this._displayObject.hitArea instanceof Laya.Rectangle) this._displayObject.hitArea = null;
                        this._displayObject.mouseThrough = true;
                    }
                }
            }
        }, {
            key: "margin",
            get: function get() {
                return this._margin;
            },
            set: function set(value) {
                this._margin.copy(value);
                if (this._displayObject.scrollRect) {
                    this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
                }
                this.handleSizeChanged();
            }
        }, {
            key: "childrenRenderOrder",
            get: function get() {
                return this._childrenRenderOrder;
            },
            set: function set(value) {
                if (this._childrenRenderOrder != value) {
                    this._childrenRenderOrder = value;
                    this.buildNativeDisplayList();
                }
            }
        }, {
            key: "apexIndex",
            get: function get() {
                return this._apexIndex;
            },
            set: function set(value) {
                if (this._apexIndex != value) {
                    this._apexIndex = value;
                    if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) this.buildNativeDisplayList();
                }
            }
        }, {
            key: "mask",
            get: function get() {
                return this._mask;
            },
            set: function set(value) {
                this.setMask(value, false);
            }
        }, {
            key: "baseUserData",
            get: function get() {
                var buffer = this.packageItem.rawData;
                buffer.seek(0, 4);
                return buffer.readS();
            }
        }, {
            key: "viewWidth",
            get: function get() {
                if (this._scrollPane) return this._scrollPane.viewWidth; else return this.width - this._margin.left - this._margin.right;
            },
            set: function set(value) {
                if (this._scrollPane) this._scrollPane.viewWidth = value; else this.width = value + this._margin.left + this._margin.right;
            }
        }, {
            key: "viewHeight",
            get: function get() {
                if (this._scrollPane) return this._scrollPane.viewHeight; else return this.height - this._margin.top - this._margin.bottom;
            },
            set: function set(value) {
                if (this._scrollPane) this._scrollPane.viewHeight = value; else this.height = value + this._margin.top + this._margin.bottom;
            }
        } ]);
        return GComponent;
    }(fgui.GObject);
    fgui.GComponent = GComponent;
})(fgui);

(function(fgui) {
    var GButton = /* */ function(_fgui$GComponent) {
        (0, _inherits2.default)(GButton, _fgui$GComponent);
        var _super6 = _createSuper(GButton);
        function GButton() {
            var _this5;
            (0, _classCallCheck2.default)(this, GButton);
            _this5 = _super6.call(this);
            _this5._soundVolumeScale = 0;
            _this5._downEffect = 0;
            _this5._mode = fgui.ButtonMode.Common;
            _this5._title = "";
            _this5._icon = "";
            _this5._sound = fgui.UIConfig.buttonSound;
            _this5._soundVolumeScale = fgui.UIConfig.buttonSoundVolumeScale;
            _this5._changeStateOnClick = true;
            _this5._downEffectValue = .8;
            return _this5;
        }
        (0, _createClass2.default)(GButton, [ {
            key: "getTextField",
            value: function getTextField() {
                if (this._titleObject instanceof fgui.GTextField) return this._titleObject; else if (this._titleObject instanceof fgui.GLabel || this._titleObject instanceof GButton) return this._titleObject.getTextField(); else return null;
            }
        }, {
            key: "fireClick",
            value: function fireClick(downEffect) {
                if (downEffect == null) downEffect = true;
                if (downEffect && this._mode == fgui.ButtonMode.Common) {
                    this.setState(GButton.OVER);
                    Laya.timer.once(100, this, this.setState, [ GButton.DOWN ], false);
                    Laya.timer.once(200, this, this.setState, [ GButton.UP ], false);
                }
                this.__click(fgui.Events.createEvent(Laya.Event.CLICK, this.displayObject));
            }
        }, {
            key: "setState",
            value: function setState(val) {
                if (this._buttonController) this._buttonController.selectedPage = val;
                if (this._downEffect == 1) {
                    var cnt = this.numChildren;
                    if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                        var r = this._downEffectValue * 255;
                        var color = Laya.Utils.toHexColor((r << 16) + (r << 8) + r);
                        for (var i = 0; i < cnt; i++) {
                            var obj = this.getChildAt(i);
                            if (!(obj instanceof fgui.GTextField)) obj.setProp(fgui.ObjectPropID.Color, color);
                        }
                    } else {
                        for (i = 0; i < cnt; i++) {
                            obj = this.getChildAt(i);
                            if (!(obj instanceof fgui.GTextField)) obj.setProp(fgui.ObjectPropID.Color, "#FFFFFF");
                        }
                    }
                } else if (this._downEffect == 2) {
                    if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                        if (!this._downScaled) {
                            this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
                            this._downScaled = true;
                        }
                    } else {
                        if (this._downScaled) {
                            this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
                            this._downScaled = false;
                        }
                    }
                }
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GButton.prototype), "handleControllerChanged", this).call(this, c);
                if (this._relatedController == c) this.selected = this._relatedPageId == c.selectedPageId;
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {
                if (this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
                    if (this.grayed) {
                        if (this._selected && this._buttonController.hasPage(GButton.SELECTED_DISABLED)) this.setState(GButton.SELECTED_DISABLED); else this.setState(GButton.DISABLED);
                    } else if (this._selected) this.setState(GButton.DOWN); else this.setState(GButton.UP);
                } else (0, _get2.default)((0, _getPrototypeOf2.default)(GButton.prototype), "handleGrayedChanged", this).call(this);
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.titleColor;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) return tf.strokeColor; else return 0;
                    }

                  case fgui.ObjectPropID.FontSize:
                    return this.titleFontSize;

                  case fgui.ObjectPropID.Selected:
                    return this.selected;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GButton.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.titleColor = value;
                    break;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) tf.strokeColor = value;
                    }
                    break;

                  case fgui.ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;

                  case fgui.ObjectPropID.Selected:
                    this.selected = value;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GButton.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                buffer.seek(0, 6);
                this._mode = buffer.readByte();
                var str = buffer.readS();
                if (str) this._sound = str;
                this._soundVolumeScale = buffer.getFloat32();
                this._downEffect = buffer.readByte();
                this._downEffectValue = buffer.getFloat32();
                if (this._downEffect == 2) this.setPivot(.5, .5, this.pivotAsAnchor);
                this._buttonController = this.getController("button");
                this._titleObject = this.getChild("title");
                this._iconObject = this.getChild("icon");
                if (this._titleObject) this._title = this._titleObject.text;
                if (this._iconObject) this._icon = this._iconObject.icon;
                if (this._mode == fgui.ButtonMode.Common) this.setState(GButton.UP);
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover);
                this.on(Laya.Event.ROLL_OUT, this, this.__rollout);
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown);
                this.on(Laya.Event.CLICK, this, this.__click);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GButton.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!buffer.seek(beginPos, 6)) return;
                if (buffer.readByte() != this.packageItem.objectType) return;
                var str;
                var iv;
                str = buffer.readS();
                if (str != null) this.title = str;
                str = buffer.readS();
                if (str != null) this.selectedTitle = str;
                str = buffer.readS();
                if (str != null) this.icon = str;
                str = buffer.readS();
                if (str != null) this.selectedIcon = str;
                if (buffer.readBool()) this.titleColor = buffer.readColorS();
                iv = buffer.getInt32();
                if (iv != 0) this.titleFontSize = iv;
                iv = buffer.getInt16();
                if (iv >= 0) this._relatedController = this.parent.getControllerAt(iv);
                this._relatedPageId = buffer.readS();
                str = buffer.readS();
                if (str != null) this._sound = str;
                if (buffer.readBool()) this._soundVolumeScale = buffer.getFloat32();
                this.selected = buffer.readBool();
            }
        }, {
            key: "__rollover",
            value: function __rollover() {
                if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER)) return;
                this._over = true;
                if (this._down) return;
                if (this.grayed && this._buttonController.hasPage(GButton.DISABLED)) return;
                this.setState(this._selected ? GButton.SELECTED_OVER : GButton.OVER);
            }
        }, {
            key: "__rollout",
            value: function __rollout() {
                if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER)) return;
                this._over = false;
                if (this._down) return;
                if (this.grayed && this._buttonController.hasPage(GButton.DISABLED)) return;
                this.setState(this._selected ? GButton.DOWN : GButton.UP);
            }
        }, {
            key: "__mousedown",
            value: function __mousedown(evt) {
                this._down = true;
                fgui.GRoot.inst.checkPopups(evt.target);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup);
                if (this._mode == fgui.ButtonMode.Common) {
                    if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) this.setState(GButton.SELECTED_DISABLED); else this.setState(GButton.DOWN);
                }
                if (this._linkedPopup) {
                    if (this._linkedPopup instanceof fgui.Window) this._linkedPopup.toggleStatus(); else this.root.togglePopup(this._linkedPopup, this);
                }
            }
        }, {
            key: "__mouseup",
            value: function __mouseup() {
                if (this._down) {
                    Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup);
                    this._down = false;
                    if (this._displayObject == null) return;
                    if (this._mode == fgui.ButtonMode.Common) {
                        if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) this.setState(GButton.DISABLED); else if (this._over) this.setState(GButton.OVER); else this.setState(GButton.UP);
                    }
                }
            }
        }, {
            key: "__click",
            value: function __click(evt) {
                if (this._sound) {
                    var pi = fgui.UIPackage.getItemByURL(this._sound);
                    if (pi) fgui.GRoot.inst.playOneShotSound(pi.file); else fgui.GRoot.inst.playOneShotSound(this._sound);
                }
                if (this._mode == fgui.ButtonMode.Check) {
                    if (this._changeStateOnClick) {
                        this.selected = !this._selected;
                        fgui.Events.dispatch(fgui.Events.STATE_CHANGED, this.displayObject, evt);
                    }
                } else if (this._mode == fgui.ButtonMode.Radio) {
                    if (this._changeStateOnClick && !this._selected) {
                        this.selected = true;
                        fgui.Events.dispatch(fgui.Events.STATE_CHANGED, this.displayObject, evt);
                    }
                } else {
                    if (this._relatedController) this._relatedController.selectedPageId = this._relatedPageId;
                }
            }
        }, {
            key: "icon",
            get: function get() {
                return this._icon;
            },
            set: function set(value) {
                this._icon = value;
                value = this._selected && this._selectedIcon ? this._selectedIcon : this._icon;
                if (this._iconObject) this._iconObject.icon = value;
                this.updateGear(7);
            }
        }, {
            key: "selectedIcon",
            get: function get() {
                return this._selectedIcon;
            },
            set: function set(value) {
                this._selectedIcon = value;
                value = this._selected && this._selectedIcon ? this._selectedIcon : this._icon;
                if (this._iconObject) this._iconObject.icon = value;
            }
        }, {
            key: "title",
            get: function get() {
                return this._title;
            },
            set: function set(value) {
                this._title = value;
                if (this._titleObject) this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title;
                this.updateGear(6);
            }
        }, {
            key: "text",
            get: function get() {
                return this.title;
            },
            set: function set(value) {
                this.title = value;
            }
        }, {
            key: "selectedTitle",
            get: function get() {
                return this._selectedTitle;
            },
            set: function set(value) {
                this._selectedTitle = value;
                if (this._titleObject) this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title;
            }
        }, {
            key: "titleColor",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.color; else return "#000000";
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.color = value;
                this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.fontSize; else return 0;
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.fontSize = value;
            }
        }, {
            key: "sound",
            get: function get() {
                return this._sound;
            },
            set: function set(val) {
                this._sound = val;
            }
        }, {
            key: "soundVolumeScale",
            get: function get() {
                return this._soundVolumeScale;
            },
            set: function set(value) {
                this._soundVolumeScale = value;
            }
        }, {
            key: "selected",
            set: function set(val) {
                if (this._mode == fgui.ButtonMode.Common) return;
                if (this._selected != val) {
                    this._selected = val;
                    if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
                        if (this._selected) this.setState(GButton.SELECTED_DISABLED); else this.setState(GButton.DISABLED);
                    } else {
                        if (this._selected) this.setState(this._over ? GButton.SELECTED_OVER : GButton.DOWN); else this.setState(this._over ? GButton.OVER : GButton.UP);
                    }
                    if (this._selectedTitle && this._titleObject) this._titleObject.text = this._selected ? this._selectedTitle : this._title;
                    if (this._selectedIcon) {
                        var str = this._selected ? this._selectedIcon : this._icon;
                        if (this._iconObject) this._iconObject.icon = str;
                    }
                    if (this._relatedController && this._parent && !this._parent._buildingDisplayList) {
                        if (this._selected) {
                            this._relatedController.selectedPageId = this._relatedPageId;
                            if (this._relatedController.autoRadioGroupDepth) this._parent.adjustRadioGroupDepth(this, this._relatedController);
                        } else if (this._mode == fgui.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId) this._relatedController.oppositePageId = this._relatedPageId;
                    }
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
            set: function set(value) {
                if (this._mode != value) {
                    if (value == fgui.ButtonMode.Common) this.selected = false;
                    this._mode = value;
                }
            }
        }, {
            key: "relatedController",
            get: function get() {
                return this._relatedController;
            },
            set: function set(val) {
                if (val != this._relatedController) {
                    this._relatedController = val;
                    this._relatedPageId = null;
                }
            }
        }, {
            key: "relatedPageId",
            get: function get() {
                return this._relatedPageId;
            },
            set: function set(val) {
                this._relatedPageId = val;
            }
        }, {
            key: "changeStateOnClick",
            get: function get() {
                return this._changeStateOnClick;
            },
            set: function set(value) {
                this._changeStateOnClick = value;
            }
        }, {
            key: "linkedPopup",
            get: function get() {
                return this._linkedPopup;
            },
            set: function set(value) {
                this._linkedPopup = value;
            }
        } ]);
        return GButton;
    }(fgui.GComponent);
    GButton.UP = "up";
    GButton.DOWN = "down";
    GButton.OVER = "over";
    GButton.SELECTED_OVER = "selectedOver";
    GButton.DISABLED = "disabled";
    GButton.SELECTED_DISABLED = "selectedDisabled";
    fgui.GButton = GButton;
})(fgui);

(function(fgui) {
    var GComboBox = /* */ function(_fgui$GComponent2) {
        (0, _inherits2.default)(GComboBox, _fgui$GComponent2);
        var _super7 = _createSuper(GComboBox);
        function GComboBox() {
            var _this6;
            (0, _classCallCheck2.default)(this, GComboBox);
            _this6 = _super7.call(this);
            _this6._visibleItemCount = fgui.UIConfig.defaultComboBoxVisibleItemCount;
            _this6._itemsUpdated = true;
            _this6._selectedIndex = -1;
            _this6._popupDirection = 0;
            _this6._items = [];
            _this6._values = [];
            return _this6;
        }
        (0, _createClass2.default)(GComboBox, [ {
            key: "getTextField",
            value: function getTextField() {
                if (this._titleObject instanceof fgui.GTextField) return this._titleObject; else if (this._titleObject instanceof fgui.GLabel || this._titleObject instanceof fgui.GButton) return this._titleObject.getTextField(); else return null;
            }
        }, {
            key: "setState",
            value: function setState(val) {
                if (this._buttonController) this._buttonController.selectedPage = val;
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComboBox.prototype), "handleControllerChanged", this).call(this, c);
                if (this._selectionController == c) this.selectedIndex = c.selectedIndex;
            }
        }, {
            key: "updateSelectionController",
            value: function updateSelectionController() {
                if (this._selectionController && !this._selectionController.changing && this._selectedIndex < this._selectionController.pageCount) {
                    var c = this._selectionController;
                    this._selectionController = null;
                    c.selectedIndex = this._selectedIndex;
                    this._selectionController = c;
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (this.dropdown) {
                    this.dropdown.dispose();
                    this.dropdown = null;
                }
                this._selectionController = null;
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComboBox.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.titleColor;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) return tf.strokeColor; else return 0;
                    }

                  case fgui.ObjectPropID.FontSize:
                    {
                        tf = this.getTextField();
                        if (tf) return tf.fontSize; else return 0;
                    }

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GComboBox.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.titleColor = value;
                    break;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) tf.strokeColor = value;
                    }
                    break;

                  case fgui.ObjectPropID.FontSize:
                    {
                        tf = this.getTextField();
                        if (tf) tf.fontSize = value;
                    }
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GComboBox.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                var str;
                this._buttonController = this.getController("button");
                this._titleObject = this.getChild("title");
                this._iconObject = this.getChild("icon");
                str = buffer.readS();
                if (str) {
                    this.dropdown = fgui.UIPackage.createObjectFromURL(str);
                    if (!this.dropdown) {
                        Laya.Log.print("下拉框必须为元件");
                        return;
                    }
                    this.dropdown.name = "this._dropdownObject";
                    this._list = this.dropdown.getChild("list");
                    if (!this._list) {
                        Laya.Log.print(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                        return;
                    }
                    this._list.on(fgui.Events.CLICK_ITEM, this, this.__clickItem);
                    this._list.addRelation(this.dropdown, fgui.RelationType.Width);
                    this._list.removeRelation(this.dropdown, fgui.RelationType.Height);
                    this.dropdown.addRelation(this._list, fgui.RelationType.Height);
                    this.dropdown.removeRelation(this._list, fgui.RelationType.Width);
                    this.dropdown.displayObject.on(Laya.Event.UNDISPLAY, this, this.__popupWinClosed);
                }
                this.on(Laya.Event.ROLL_OVER, this, this.__rollover);
                this.on(Laya.Event.ROLL_OUT, this, this.__rollout);
                this.on(Laya.Event.MOUSE_DOWN, this, this.__mousedown);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GComboBox.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!buffer.seek(beginPos, 6)) return;
                if (buffer.readByte() != this.packageItem.objectType) return;
                var i;
                var iv;
                var nextPos;
                var str;
                var itemCount = buffer.getInt16();
                for (i = 0; i < itemCount; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    this._items[i] = buffer.readS();
                    this._values[i] = buffer.readS();
                    str = buffer.readS();
                    if (str != null) {
                        if (!this._icons) this._icons = [];
                        this._icons[i] = str;
                    }
                    buffer.pos = nextPos;
                }
                str = buffer.readS();
                if (str != null) {
                    this.text = str;
                    this._selectedIndex = this._items.indexOf(str);
                } else if (this._items.length > 0) {
                    this._selectedIndex = 0;
                    this.text = this._items[0];
                } else this._selectedIndex = -1;
                str = buffer.readS();
                if (str != null) this.icon = str;
                if (buffer.readBool()) this.titleColor = buffer.readColorS();
                iv = buffer.getInt32();
                if (iv > 0) this._visibleItemCount = iv;
                this._popupDirection = buffer.readByte();
                iv = buffer.getInt16();
                if (iv >= 0) this._selectionController = this.parent.getControllerAt(iv);
            }
        }, {
            key: "showDropdown",
            value: function showDropdown() {
                if (this._itemsUpdated) {
                    this._itemsUpdated = false;
                    this._list.removeChildrenToPool();
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._list.addItemFromPool();
                        item.name = i < this._values.length ? this._values[i] : "";
                        item.text = this._items[i];
                        item.icon = this._icons && i < this._icons.length ? this._icons[i] : null;
                    }
                    this._list.resizeToFit(this._visibleItemCount);
                }
                this._list.selectedIndex = -1;
                this.dropdown.width = this.width;
                this._list.ensureBoundsCorrect();
                var downward = null;
                if (this._popupDirection == fgui.PopupDirection.Down) downward = true; else if (this._popupDirection == fgui.PopupDirection.Up) downward = false;
                this.root.togglePopup(this.dropdown, this, downward);
                if (this.dropdown.parent) this.setState(fgui.GButton.DOWN);
            }
        }, {
            key: "__popupWinClosed",
            value: function __popupWinClosed() {
                if (this._over) this.setState(fgui.GButton.OVER); else this.setState(fgui.GButton.UP);
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(itemObject, evt) {
                Laya.timer.callLater(this, this.__clickItem2, [ this._list.getChildIndex(itemObject), evt ]);
            }
        }, {
            key: "__clickItem2",
            value: function __clickItem2(index, evt) {
                if (this.dropdown.parent instanceof fgui.GRoot) this.dropdown.parent.hidePopup();
                this._selectedIndex = -1;
                this.selectedIndex = index;
                fgui.Events.dispatch(fgui.Events.STATE_CHANGED, this.displayObject, evt);
            }
        }, {
            key: "__rollover",
            value: function __rollover() {
                this._over = true;
                if (this._down || this.dropdown && this.dropdown.parent) return;
                this.setState(fgui.GButton.OVER);
            }
        }, {
            key: "__rollout",
            value: function __rollout() {
                this._over = false;
                if (this._down || this.dropdown && this.dropdown.parent) return;
                this.setState(fgui.GButton.UP);
            }
        }, {
            key: "__mousedown",
            value: function __mousedown(evt) {
                if (evt.target instanceof Laya.Input) return;
                this._down = true;
                fgui.GRoot.inst.checkPopups(evt.target);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseup);
                if (this.dropdown) this.showDropdown();
            }
        }, {
            key: "__mouseup",
            value: function __mouseup() {
                if (this._down) {
                    this._down = false;
                    Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseup);
                    if (this.dropdown && !this.dropdown.parent) {
                        if (this._over) this.setState(fgui.GButton.OVER); else this.setState(fgui.GButton.UP);
                    }
                }
            }
        }, {
            key: "text",
            get: function get() {
                if (this._titleObject) return this._titleObject.text; else return null;
            },
            set: function set(value) {
                if (this._titleObject) this._titleObject.text = value;
                this.updateGear(6);
            }
        }, {
            key: "titleColor",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.color; else return "#000000";
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.color = value;
                this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.fontSize; else return 0;
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.fontSize = value;
            }
        }, {
            key: "icon",
            get: function get() {
                if (this._iconObject) return this._iconObject.icon; else return null;
            },
            set: function set(value) {
                if (this._iconObject) this._iconObject.icon = value;
                this.updateGear(7);
            }
        }, {
            key: "visibleItemCount",
            get: function get() {
                return this._visibleItemCount;
            },
            set: function set(value) {
                this._visibleItemCount = value;
            }
        }, {
            key: "popupDirection",
            get: function get() {
                return this._popupDirection;
            },
            set: function set(value) {
                this._popupDirection = value;
            }
        }, {
            key: "items",
            get: function get() {
                return this._items;
            },
            set: function set(value) {
                if (!value) this._items.length = 0; else this._items = value.concat();
                if (this._items.length > 0) {
                    if (this._selectedIndex >= this._items.length) this._selectedIndex = this._items.length - 1; else if (this._selectedIndex == -1) this._selectedIndex = 0;
                    this.text = this._items[this._selectedIndex];
                    if (this._icons && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
                } else {
                    this.text = "";
                    if (this._icons) this.icon = null;
                    this._selectedIndex = -1;
                }
                this._itemsUpdated = true;
            }
        }, {
            key: "icons",
            get: function get() {
                return this._icons;
            },
            set: function set(value) {
                this._icons = value;
                if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
            }
        }, {
            key: "values",
            get: function get() {
                return this._values;
            },
            set: function set(value) {
                if (!value) this._values.length = 0; else this._values = value.concat();
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                return this._selectedIndex;
            },
            set: function set(val) {
                if (this._selectedIndex == val) return;
                this._selectedIndex = val;
                if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
                    this.text = this._items[this._selectedIndex];
                    if (this._icons && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
                } else {
                    this.text = "";
                    if (this._icons) this.icon = null;
                }
                this.updateSelectionController();
            }
        }, {
            key: "value",
            get: function get() {
                return this._values[this._selectedIndex];
            },
            set: function set(val) {
                var index = this._values.indexOf(val);
                if (index == -1 && val == null) index = this._values.indexOf("");
                this.selectedIndex = index;
            }
        }, {
            key: "selectionController",
            get: function get() {
                return this._selectionController;
            },
            set: function set(value) {
                this._selectionController = value;
            }
        } ]);
        return GComboBox;
    }(fgui.GComponent);
    fgui.GComboBox = GComboBox;
})(fgui);

(function(fgui) {
    var GGraph = /* */ function(_fgui$GObject3) {
        (0, _inherits2.default)(GGraph, _fgui$GObject3);
        var _super8 = _createSuper(GGraph);
        function GGraph() {
            var _this7;
            (0, _classCallCheck2.default)(this, GGraph);
            _this7 = _super8.call(this);
            _this7._type = 0;
            _this7._lineSize = 1;
            _this7._lineColor = "#000000";
            _this7._fillColor = "#FFFFFF";
            return _this7;
        }
        (0, _createClass2.default)(GGraph, [ {
            key: "drawRect",
            value: function drawRect(lineSize, lineColor, fillColor, cornerRadius) {
                this._type = 1;
                this._lineSize = lineSize;
                this._lineColor = lineColor;
                this._fillColor = fillColor;
                this._cornerRadius = cornerRadius;
                this.updateGraph();
            }
        }, {
            key: "drawEllipse",
            value: function drawEllipse(lineSize, lineColor, fillColor) {
                this._type = 2;
                this._lineSize = lineSize;
                this._lineColor = lineColor;
                this._fillColor = fillColor;
                this.updateGraph();
            }
        }, {
            key: "drawRegularPolygon",
            value: function drawRegularPolygon(lineSize, lineColor, fillColor, sides, startAngle, distances) {
                this._type = 4;
                this._lineSize = lineSize;
                this._lineColor = lineColor;
                this._fillColor = fillColor;
                this._sides = sides;
                this._startAngle = startAngle || 0;
                this._distances = distances;
                this.updateGraph();
            }
        }, {
            key: "drawPolygon",
            value: function drawPolygon(lineSize, lineColor, fillColor, points) {
                this._type = 3;
                this._lineSize = lineSize;
                this._lineColor = lineColor;
                this._fillColor = fillColor;
                this._polygonPoints = points;
                this.updateGraph();
            }
        }, {
            key: "updateGraph",
            value: function updateGraph() {
                this._displayObject.mouseEnabled = this.touchable;
                var gr = this._displayObject.graphics;
                gr.clear();
                var w = this.width;
                var h = this.height;
                if (w == 0 || h == 0) return;
                var fillColor = this._fillColor;
                var lineColor = this._lineColor;
                if (fgui.ToolSet.startsWith(fillColor, "rgba")) {
                    var arr = fillColor.substring(5, fillColor.lastIndexOf(")")).split(",");
                    var a = parseFloat(arr[3]);
                    if (a == 0) fillColor = null; else {
                        fillColor = Laya.Utils.toHexColor((parseInt(arr[0]) << 16) + (parseInt(arr[1]) << 8) + parseInt(arr[2]));
                        this.alpha = a;
                    }
                }
                if (this._type == 1) {
                    if (this._cornerRadius) {
                        var paths = [ [ "moveTo", this._cornerRadius[0], 0 ], [ "lineTo", w - this._cornerRadius[1], 0 ], [ "arcTo", w, 0, w, this._cornerRadius[1], this._cornerRadius[1] ], [ "lineTo", w, h - this._cornerRadius[3] ], [ "arcTo", w, h, w - this._cornerRadius[3], h, this._cornerRadius[3] ], [ "lineTo", this._cornerRadius[2], h ], [ "arcTo", 0, h, 0, h - this._cornerRadius[2], this._cornerRadius[2] ], [ "lineTo", 0, this._cornerRadius[0] ], [ "arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0] ], [ "closePath" ] ];
                        gr.drawPath(0, 0, paths, fillColor ? {
                            fillStyle: fillColor
                        } : null, this._lineSize > 0 ? {
                            strokeStyle: lineColor,
                            lineWidth: this._lineSize
                        } : null);
                    } else gr.drawRect(0, 0, w, h, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
                } else if (this._type == 2) {
                    gr.drawCircle(w / 2, h / 2, w / 2, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
                } else if (this._type == 3) {
                    gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
                } else if (this._type == 4) {
                    if (!this._polygonPoints) this._polygonPoints = [];
                    var radius = Math.min(this._width, this._height) / 2;
                    this._polygonPoints.length = 0;
                    var angle = Laya.Utils.toRadian(this._startAngle);
                    var deltaAngle = 2 * Math.PI / this._sides;
                    var dist;
                    for (var i = 0; i < this._sides; i++) {
                        if (this._distances) {
                            dist = this._distances[i];
                            if (isNaN(dist)) dist = 1;
                        } else dist = 1;
                        var xv = radius + radius * dist * Math.cos(angle);
                        var yv = radius + radius * dist * Math.sin(angle);
                        this._polygonPoints.push(xv, yv);
                        angle += deltaAngle;
                    }
                    gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
                }
                this._displayObject.repaint();
            }
        }, {
            key: "replaceMe",
            value: function replaceMe(target) {
                if (!this._parent) throw "parent not set";
                target.name = this.name;
                target.alpha = this.alpha;
                target.rotation = this.rotation;
                target.visible = this.visible;
                target.touchable = this.touchable;
                target.grayed = this.grayed;
                target.setXY(this.x, this.y);
                target.setSize(this.width, this.height);
                var index = this._parent.getChildIndex(this);
                this._parent.addChildAt(target, index);
                target.relations.copyFrom(this.relations);
                this._parent.removeChild(this, true);
            }
        }, {
            key: "addBeforeMe",
            value: function addBeforeMe(target) {
                if (!this._parent) throw "parent not set";
                var index = this._parent.getChildIndex(this);
                this._parent.addChildAt(target, index);
            }
        }, {
            key: "addAfterMe",
            value: function addAfterMe(target) {
                if (!this._parent) throw "parent not set";
                var index = this._parent.getChildIndex(this);
                index++;
                this._parent.addChildAt(target, index);
            }
        }, {
            key: "setNativeObject",
            value: function setNativeObject(obj) {
                this._type = 0;
                this._displayObject.mouseEnabled = this.touchable;
                this._displayObject.graphics.clear();
                this._displayObject.addChild(obj);
            }
        }, {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGraph.prototype), "createDisplayObject", this).call(this);
                this._displayObject.mouseEnabled = false;
                this._hitArea = new Laya.HitArea();
                this._hitArea.hit = this._displayObject.graphics;
                this._displayObject.hitArea = this._hitArea;
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                if (index == fgui.ObjectPropID.Color) return this.color; else return (0, _get2.default)((0, 
                _getPrototypeOf2.default)(GGraph.prototype), "getProp", this).call(this, index);
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                if (index == fgui.ObjectPropID.Color) this.color = value; else (0, _get2.default)((0, 
                _getPrototypeOf2.default)(GGraph.prototype), "setProp", this).call(this, index, value);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGraph.prototype), "handleSizeChanged", this).call(this);
                if (this._type != 0) this.updateGraph();
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGraph.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                this._type = buffer.readByte();
                if (this._type != 0) {
                    var i;
                    var cnt;
                    this._lineSize = buffer.getInt32();
                    this._lineColor = buffer.readColorS(true);
                    this._fillColor = buffer.readColorS(true);
                    if (buffer.readBool()) {
                        this._cornerRadius = [];
                        for (i = 0; i < 4; i++) {
                            this._cornerRadius[i] = buffer.getFloat32();
                        }
                    }
                    if (this._type == 3) {
                        cnt = buffer.getInt16();
                        this._polygonPoints = [];
                        this._polygonPoints.length = cnt;
                        for (i = 0; i < cnt; i++) {
                            this._polygonPoints[i] = buffer.getFloat32();
                        }
                    } else if (this._type == 4) {
                        this._sides = buffer.getInt16();
                        this._startAngle = buffer.getFloat32();
                        cnt = buffer.getInt16();
                        if (cnt > 0) {
                            this._distances = [];
                            for (i = 0; i < cnt; i++) {
                                this._distances[i] = buffer.getFloat32();
                            }
                        }
                    }
                    this.updateGraph();
                }
            }
        }, {
            key: "distances",
            get: function get() {
                return this._distances;
            },
            set: function set(value) {
                this._distances = value;
                if (this._type == 3) this.updateGraph();
            }
        }, {
            key: "color",
            get: function get() {
                return this._fillColor;
            },
            set: function set(value) {
                this._fillColor = value;
                this.updateGear(4);
                if (this._type != 0) this.updateGraph();
            }
        } ]);
        return GGraph;
    }(fgui.GObject);
    fgui.GGraph = GGraph;
})(fgui);

(function(fgui) {
    var GGroup = /* */ function(_fgui$GObject4) {
        (0, _inherits2.default)(GGroup, _fgui$GObject4);
        var _super9 = _createSuper(GGroup);
        function GGroup() {
            var _this8;
            (0, _classCallCheck2.default)(this, GGroup);
            _this8 = _super9.call(this);
            _this8._layout = 0;
            _this8._lineGap = 0;
            _this8._columnGap = 0;
            _this8._mainGridIndex = -1;
            _this8._mainGridMinSize = 50;
            _this8._mainChildIndex = -1;
            _this8._totalSize = 0;
            _this8._numChildren = 0;
            _this8._updating = 0;
            return _this8;
        }
        (0, _createClass2.default)(GGroup, [ {
            key: "dispose",
            value: function dispose() {
                this._boundsChanged = false;
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGroup.prototype), "dispose", this).call(this);
            }
        }, {
            key: "setBoundsChangedFlag",
            value: function setBoundsChangedFlag(positionChangedOnly) {
                if (this._updating == 0 && this._parent) {
                    if (!positionChangedOnly) this._percentReady = false;
                    if (!this._boundsChanged) {
                        this._boundsChanged = true;
                        if (this._layout != fgui.GroupLayoutType.None) Laya.timer.callLater(this, this.ensureBoundsCorrect);
                    }
                }
            }
        }, {
            key: "ensureSizeCorrect",
            value: function ensureSizeCorrect() {
                if (!this._parent || !this._boundsChanged || this._layout == 0) return;
                this._boundsChanged = false;
                if (this._autoSizeDisabled) this.resizeChildren(0, 0); else {
                    this.handleLayout();
                    this.updateBounds();
                }
            }
        }, {
            key: "ensureBoundsCorrect",
            value: function ensureBoundsCorrect() {
                if (!this._parent || !this._boundsChanged) return;
                this._boundsChanged = false;
                if (this._layout == 0) this.updateBounds(); else {
                    if (this._autoSizeDisabled) this.resizeChildren(0, 0); else {
                        this.handleLayout();
                        this.updateBounds();
                    }
                }
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                Laya.timer.clear(this, this.ensureBoundsCorrect);
                var cnt = this._parent.numChildren;
                var i;
                var child;
                var ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
                var tmp;
                var empty = true;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this || this._excludeInvisibles && !child.internalVisible3) continue;
                    tmp = child.xMin;
                    if (tmp < ax) ax = tmp;
                    tmp = child.yMin;
                    if (tmp < ay) ay = tmp;
                    tmp = child.xMin + child.width;
                    if (tmp > ar) ar = tmp;
                    tmp = child.yMin + child.height;
                    if (tmp > ab) ab = tmp;
                    empty = false;
                }
                var w = 0, h = 0;
                if (!empty) {
                    this._updating |= 1;
                    this.setXY(ax, ay);
                    this._updating &= 2;
                    w = ar - ax;
                    h = ab - ay;
                }
                if ((this._updating & 2) == 0) {
                    this._updating |= 2;
                    this.setSize(w, h);
                    this._updating &= 1;
                } else {
                    this._updating &= 1;
                    this.resizeChildren(this._width - w, this._height - h);
                }
            }
        }, {
            key: "handleLayout",
            value: function handleLayout() {
                this._updating |= 1;
                var child;
                var i;
                var cnt;
                if (this._layout == fgui.GroupLayoutType.Horizontal) {
                    var curX = this.x;
                    cnt = this._parent.numChildren;
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (this._excludeInvisibles && !child.internalVisible3) continue;
                        child.xMin = curX;
                        if (child.width != 0) curX += child.width + this._columnGap;
                    }
                } else if (this._layout == fgui.GroupLayoutType.Vertical) {
                    var curY = this.y;
                    cnt = this._parent.numChildren;
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (this._excludeInvisibles && !child.internalVisible3) continue;
                        child.yMin = curY;
                        if (child.height != 0) curY += child.height + this._lineGap;
                    }
                }
                this._updating &= 2;
            }
        }, {
            key: "moveChildren",
            value: function moveChildren(dx, dy) {
                if ((this._updating & 1) != 0 || !this._parent) return;
                this._updating |= 1;
                var cnt = this._parent.numChildren;
                var i;
                var child;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group == this) {
                        child.setXY(child.x + dx, child.y + dy);
                    }
                }
                this._updating &= 2;
            }
        }, {
            key: "resizeChildren",
            value: function resizeChildren(dw, dh) {
                if (this._layout == fgui.GroupLayoutType.None || (this._updating & 2) != 0 || !this._parent) return;
                this._updating |= 2;
                if (this._boundsChanged) {
                    this._boundsChanged = false;
                    if (!this._autoSizeDisabled) {
                        this.updateBounds();
                        return;
                    }
                }
                var cnt = this._parent.numChildren;
                var i;
                var child;
                if (!this._percentReady) {
                    this._percentReady = true;
                    this._numChildren = 0;
                    this._totalSize = 0;
                    this._mainChildIndex = -1;
                    var j = 0;
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (!this._excludeInvisibles || child.internalVisible3) {
                            if (j == this._mainGridIndex) this._mainChildIndex = i;
                            this._numChildren++;
                            if (this._layout == 1) this._totalSize += child.width; else this._totalSize += child.height;
                        }
                        j++;
                    }
                    if (this._mainChildIndex != -1) {
                        if (this._layout == 1) {
                            child = this._parent.getChildAt(this._mainChildIndex);
                            this._totalSize += this._mainGridMinSize - child.width;
                            child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                        } else {
                            child = this._parent.getChildAt(this._mainChildIndex);
                            this._totalSize += this._mainGridMinSize - child.height;
                            child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                        }
                    }
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (i == this._mainChildIndex) continue;
                        if (this._totalSize > 0) child._sizePercentInGroup = (this._layout == 1 ? child.width : child.height) / this._totalSize; else child._sizePercentInGroup = 0;
                    }
                }
                var remainSize = 0;
                var remainPercent = 1;
                var priorHandled = false;
                if (this._layout == 1) {
                    remainSize = this.width - (this._numChildren - 1) * this._columnGap;
                    if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        child.setSize(remainSize - (this._totalSize - this._mainGridMinSize), child._rawHeight + dh, true);
                        remainSize -= child.width;
                        remainPercent -= child._sizePercentInGroup;
                        priorHandled = true;
                    }
                    var curX = this.x;
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (this._excludeInvisibles && !child.internalVisible3) {
                            child.setSize(child._rawWidth, child._rawHeight + dh, true);
                            continue;
                        }
                        if (!priorHandled || i != this._mainChildIndex) {
                            child.setSize(Math.round(child._sizePercentInGroup / remainPercent * remainSize), child._rawHeight + dh, true);
                            remainPercent -= child._sizePercentInGroup;
                            remainSize -= child.width;
                        }
                        child.xMin = curX;
                        if (child.width != 0) curX += child.width + this._columnGap;
                    }
                } else {
                    remainSize = this.height - (this._numChildren - 1) * this._lineGap;
                    if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        child.setSize(child._rawWidth + dw, remainSize - (this._totalSize - this._mainGridMinSize), true);
                        remainSize -= child.height;
                        remainPercent -= child._sizePercentInGroup;
                        priorHandled = true;
                    }
                    var curY = this.y;
                    for (i = 0; i < cnt; i++) {
                        child = this._parent.getChildAt(i);
                        if (child.group != this) continue;
                        if (this._excludeInvisibles && !child.internalVisible3) {
                            child.setSize(child._rawWidth + dw, child._rawHeight, true);
                            continue;
                        }
                        if (!priorHandled || i != this._mainChildIndex) {
                            child.setSize(child._rawWidth + dw, Math.round(child._sizePercentInGroup / remainPercent * remainSize), true);
                            remainPercent -= child._sizePercentInGroup;
                            remainSize -= child.height;
                        }
                        child.yMin = curY;
                        if (child.height != 0) curY += child.height + this._lineGap;
                    }
                }
                this._updating &= 1;
            }
        }, {
            key: "handleAlphaChanged",
            value: function handleAlphaChanged() {
                if (this._underConstruct) return;
                var cnt = this._parent.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var child = this._parent.getChildAt(i);
                    if (child.group == this) child.alpha = this.alpha;
                }
            }
        }, {
            key: "handleVisibleChanged",
            value: function handleVisibleChanged() {
                if (!this._parent) return;
                var cnt = this._parent.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var child = this._parent.getChildAt(i);
                    if (child.group == this) child.handleVisibleChanged();
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGroup.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                this._layout = buffer.readByte();
                this._lineGap = buffer.getInt32();
                this._columnGap = buffer.getInt32();
                if (buffer.version >= 2) {
                    this._excludeInvisibles = buffer.readBool();
                    this._autoSizeDisabled = buffer.readBool();
                    this._mainGridIndex = buffer.getInt16();
                }
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GGroup.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!this.visible) this.handleVisibleChanged();
            }
        }, {
            key: "layout",
            get: function get() {
                return this._layout;
            },
            set: function set(value) {
                if (this._layout != value) {
                    this._layout = value;
                    this.setBoundsChangedFlag();
                }
            }
        }, {
            key: "lineGap",
            get: function get() {
                return this._lineGap;
            },
            set: function set(value) {
                if (this._lineGap != value) {
                    this._lineGap = value;
                    this.setBoundsChangedFlag(true);
                }
            }
        }, {
            key: "columnGap",
            get: function get() {
                return this._columnGap;
            },
            set: function set(value) {
                if (this._columnGap != value) {
                    this._columnGap = value;
                    this.setBoundsChangedFlag(true);
                }
            }
        }, {
            key: "excludeInvisibles",
            get: function get() {
                return this._excludeInvisibles;
            },
            set: function set(value) {
                if (this._excludeInvisibles != value) {
                    this._excludeInvisibles = value;
                    this.setBoundsChangedFlag();
                }
            }
        }, {
            key: "autoSizeDisabled",
            get: function get() {
                return this._autoSizeDisabled;
            },
            set: function set(value) {
                this._autoSizeDisabled = value;
            }
        }, {
            key: "mainGridMinSize",
            get: function get() {
                return this._mainGridMinSize;
            },
            set: function set(value) {
                if (this._mainGridMinSize != value) {
                    this._mainGridMinSize = value;
                    this.setBoundsChangedFlag();
                }
            }
        }, {
            key: "mainGridIndex",
            get: function get() {
                return this._mainGridIndex;
            },
            set: function set(value) {
                if (this._mainGridIndex != value) {
                    this._mainGridIndex = value;
                    this.setBoundsChangedFlag();
                }
            }
        } ]);
        return GGroup;
    }(fgui.GObject);
    fgui.GGroup = GGroup;
})(fgui);

(function(fgui) {
    var GImage = /* */ function(_fgui$GObject5) {
        (0, _inherits2.default)(GImage, _fgui$GObject5);
        var _super10 = _createSuper(GImage);
        function GImage() {
            var _this9;
            (0, _classCallCheck2.default)(this, GImage);
            _this9 = _super10.call(this);
            _this9._flip = 0;
            return _this9;
        }
        (0, _createClass2.default)(GImage, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._image = new fgui.Image();
                this.image.mouseEnabled = false;
                this._displayObject["$owner"] = this;
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                this._contentItem = this.packageItem.getBranch();
                this.sourceWidth = this._contentItem.width;
                this.sourceHeight = this._contentItem.height;
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                this._contentItem = this._contentItem.getHighResolution();
                this._contentItem.load();
                this.image.scale9Grid = this._contentItem.scale9Grid;
                this.image.scaleByTile = this._contentItem.scaleByTile;
                this.image.tileGridIndice = this._contentItem.tileGridIndice;
                this.image.texture = this._contentItem.texture;
                this.setSize(this.sourceWidth, this.sourceHeight);
            }
        }, {
            key: "handleXYChanged",
            value: function handleXYChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GImage.prototype), "handleXYChanged", this).call(this);
                if (this._flip != fgui.FlipType.None) {
                    if (this.scaleX == -1) this.image.x += this.width;
                    if (this.scaleY == -1) this.image.y += this.height;
                }
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                if (index == fgui.ObjectPropID.Color) return this.color; else return (0, _get2.default)((0, 
                _getPrototypeOf2.default)(GImage.prototype), "getProp", this).call(this, index);
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                if (index == fgui.ObjectPropID.Color) this.color = value; else (0, _get2.default)((0, 
                _getPrototypeOf2.default)(GImage.prototype), "setProp", this).call(this, index, value);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GImage.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                if (buffer.readBool()) this.color = buffer.readColorS();
                this.flip = buffer.readByte();
                this.image.fillMethod = buffer.readByte();
                if (this.image.fillMethod != 0) {
                    this.image.fillOrigin = buffer.readByte();
                    this.image.fillClockwise = buffer.readBool();
                    this.image.fillAmount = buffer.getFloat32();
                }
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
            set: function set(value) {
                if (this.image.color != value) {
                    this.image.color = value;
                    this.updateGear(4);
                }
            }
        }, {
            key: "flip",
            get: function get() {
                return this._flip;
            },
            set: function set(value) {
                if (this._flip != value) {
                    this._flip = value;
                    var sx = 1, sy = 1;
                    if (this._flip == fgui.FlipType.Horizontal || this._flip == fgui.FlipType.Both) sx = -1;
                    if (this._flip == fgui.FlipType.Vertical || this._flip == fgui.FlipType.Both) sy = -1;
                    this.setScale(sx, sy);
                    this.handleXYChanged();
                }
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this.image.fillMethod;
            },
            set: function set(value) {
                this.image.fillMethod = value;
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this.image.fillOrigin;
            },
            set: function set(value) {
                this.image.fillOrigin = value;
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this.image.fillClockwise;
            },
            set: function set(value) {
                this.image.fillClockwise = value;
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this.image.fillAmount;
            },
            set: function set(value) {
                this.image.fillAmount = value;
            }
        } ]);
        return GImage;
    }(fgui.GObject);
    fgui.GImage = GImage;
})(fgui);

(function(fgui) {
    var GLabel = /* */ function(_fgui$GComponent3) {
        (0, _inherits2.default)(GLabel, _fgui$GComponent3);
        var _super11 = _createSuper(GLabel);
        function GLabel() {
            (0, _classCallCheck2.default)(this, GLabel);
            return _super11.call(this);
        }
        (0, _createClass2.default)(GLabel, [ {
            key: "getTextField",
            value: function getTextField() {
                if (this._titleObject instanceof fgui.GTextField) return this._titleObject; else if (this._titleObject instanceof GLabel || this._titleObject instanceof fgui.GButton) return this._titleObject.getTextField(); else return null;
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.titleColor;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) return tf.strokeColor; else return 0;
                    }

                  case fgui.ObjectPropID.FontSize:
                    return this.titleFontSize;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GLabel.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.titleColor = value;
                    break;

                  case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf) tf.strokeColor = value;
                    }
                    break;

                  case fgui.ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GLabel.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                this._titleObject = this.getChild("title");
                this._iconObject = this.getChild("icon");
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLabel.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!buffer.seek(beginPos, 6)) return;
                if (buffer.readByte() != this.packageItem.objectType) return;
                var str;
                str = buffer.readS();
                if (str != null) this.title = str;
                str = buffer.readS();
                if (str != null) this.icon = str;
                if (buffer.readBool()) this.titleColor = buffer.readColorS();
                var iv = buffer.getInt32();
                if (iv != 0) this.titleFontSize = iv;
                if (buffer.readBool()) {
                    var input = this.getTextField();
                    if (input instanceof fgui.GTextInput) {
                        str = buffer.readS();
                        if (str != null) input.promptText = str;
                        str = buffer.readS();
                        if (str != null) input.restrict = str;
                        iv = buffer.getInt32();
                        if (iv != 0) input.maxLength = iv;
                        iv = buffer.getInt32();
                        if (iv != 0) {
                            if (iv == 4) input.keyboardType = Laya.Input.TYPE_NUMBER; else if (iv == 3) input.keyboardType = Laya.Input.TYPE_URL;
                        }
                        if (buffer.readBool()) input.password = true;
                    } else buffer.skip(13);
                }
            }
        }, {
            key: "icon",
            get: function get() {
                if (this._iconObject) return this._iconObject.icon; else return null;
            },
            set: function set(value) {
                if (this._iconObject) this._iconObject.icon = value;
                this.updateGear(7);
            }
        }, {
            key: "title",
            get: function get() {
                if (this._titleObject) return this._titleObject.text; else return null;
            },
            set: function set(value) {
                if (this._titleObject) this._titleObject.text = value;
                this.updateGear(6);
            }
        }, {
            key: "text",
            get: function get() {
                return this.title;
            },
            set: function set(value) {
                this.title = value;
            }
        }, {
            key: "titleColor",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.color; else return "#000000";
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.color = value;
                this.updateGear(4);
            }
        }, {
            key: "titleFontSize",
            get: function get() {
                var tf = this.getTextField();
                if (tf) return tf.fontSize; else return 0;
            },
            set: function set(value) {
                var tf = this.getTextField();
                if (tf) tf.fontSize = value;
            }
        }, {
            key: "color",
            get: function get() {
                return this.titleColor;
            },
            set: function set(value) {
                this.titleColor = value;
            }
        }, {
            key: "editable",
            set: function set(val) {
                if (this._titleObject) this._titleObject.asTextInput.editable = val;
            },
            get: function get() {
                if (this._titleObject instanceof fgui.GTextInput) return this._titleObject.asTextInput.editable; else return false;
            }
        } ]);
        return GLabel;
    }(fgui.GComponent);
    fgui.GLabel = GLabel;
})(fgui);

(function(fgui) {
    var GList = /* */ function(_fgui$GComponent4) {
        (0, _inherits2.default)(GList, _fgui$GComponent4);
        var _super12 = _createSuper(GList);
        function GList() {
            var _this10;
            (0, _classCallCheck2.default)(this, GList);
            _this10 = _super12.call(this);
            _this10._lineCount = 0;
            _this10._columnCount = 0;
            _this10._lineGap = 0;
            _this10._columnGap = 0;
            _this10._lastSelectedIndex = 0;
            _this10._numItems = 0;
            _this10._firstIndex = 0;
            _this10._curLineItemCount = 0;
            _this10._virtualListChanged = 0;
            _this10.itemInfoVer = 0;
            _this10._trackBounds = true;
            _this10._pool = new fgui.GObjectPool();
            _this10._layout = fgui.ListLayoutType.SingleColumn;
            _this10._autoResizeItem = true;
            _this10._lastSelectedIndex = -1;
            _this10._selectionMode = fgui.ListSelectionMode.Single;
            _this10.opaque = true;
            _this10.scrollItemToViewOnClick = true;
            _this10._align = "left";
            _this10._verticalAlign = "top";
            _this10._container = new Laya.Sprite();
            _this10._displayObject.addChild(_this10._container);
            return _this10;
        }
        (0, _createClass2.default)(GList, [ {
            key: "dispose",
            value: function dispose() {
                this._pool.clear();
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "dispose", this).call(this);
            }
        }, {
            key: "getFromPool",
            value: function getFromPool(url) {
                if (!url) url = this._defaultItem;
                var obj = this._pool.getObject(url);
                if (obj) obj.visible = true;
                return obj;
            }
        }, {
            key: "returnToPool",
            value: function returnToPool(obj) {
                obj.displayObject.cacheAs = "none";
                this._pool.returnObject(obj);
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(child, index) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "addChildAt", this).call(this, child, index);
                if (child instanceof fgui.GButton) {
                    child.selected = false;
                    child.changeStateOnClick = false;
                }
                child.on(Laya.Event.CLICK, this, this.__clickItem);
                return child;
            }
        }, {
            key: "addItem",
            value: function addItem(url) {
                if (!url) url = this._defaultItem;
                return this.addChild(fgui.UIPackage.createObjectFromURL(url));
            }
        }, {
            key: "addItemFromPool",
            value: function addItemFromPool(url) {
                return this.addChild(this.getFromPool(url));
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(index, dispose) {
                var child = (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "removeChildAt", this).call(this, index);
                if (dispose) child.dispose(); else child.off(Laya.Event.CLICK, this, this.__clickItem);
                return child;
            }
        }, {
            key: "removeChildToPoolAt",
            value: function removeChildToPoolAt(index) {
                var child = (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "removeChildAt", this).call(this, index);
                this.returnToPool(child);
            }
        }, {
            key: "removeChildToPool",
            value: function removeChildToPool(child) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "removeChild", this).call(this, child);
                this.returnToPool(child);
            }
        }, {
            key: "removeChildrenToPool",
            value: function removeChildrenToPool(beginIndex, endIndex) {
                if (beginIndex == undefined) beginIndex = 0;
                if (endIndex == undefined) endIndex = -1;
                if (endIndex < 0 || endIndex >= this._children.length) endIndex = this._children.length - 1;
                for (var i = beginIndex; i <= endIndex; ++i) {
                    this.removeChildToPoolAt(beginIndex);
                }
            }
        }, {
            key: "getSelection",
            value: function getSelection(result) {
                if (!result) result = new Array();
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj instanceof fgui.GButton && ii.obj.selected || ii.obj == null && ii.selected) {
                            var j = i;
                            if (this._loop) {
                                j = i % this._numItems;
                                if (result.indexOf(j) != -1) continue;
                            }
                            result.push(j);
                        }
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton && obj.selected) result.push(i);
                    }
                }
                return result;
            }
        }, {
            key: "addSelection",
            value: function addSelection(index, scrollItToView) {
                if (this._selectionMode == fgui.ListSelectionMode.None) return;
                this.checkVirtualList();
                if (this._selectionMode == fgui.ListSelectionMode.Single) this.clearSelection();
                if (scrollItToView) this.scrollToView(index);
                this._lastSelectedIndex = index;
                var obj;
                if (this._virtual) {
                    var ii = this._virtualItems[index];
                    if (ii.obj) obj = ii.obj;
                    ii.selected = true;
                } else obj = this.getChildAt(index);
                if (obj instanceof fgui.GButton && !obj.selected) {
                    obj.selected = true;
                    this.updateSelectionController(index);
                }
            }
        }, {
            key: "removeSelection",
            value: function removeSelection(index) {
                if (this._selectionMode == fgui.ListSelectionMode.None) return;
                var obj;
                if (this._virtual) {
                    var ii = this._virtualItems[index];
                    if (ii.obj) obj = ii.obj;
                    ii.selected = false;
                } else obj = this.getChildAt(index);
                if (obj instanceof fgui.GButton) obj.selected = false;
            }
        }, {
            key: "clearSelection",
            value: function clearSelection() {
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj instanceof fgui.GButton) ii.obj.selected = false;
                        ii.selected = false;
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton) obj.selected = false;
                    }
                }
            }
        }, {
            key: "clearSelectionExcept",
            value: function clearSelectionExcept(g) {
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj != g) {
                            if (ii.obj instanceof fgui.GButton) ii.obj.selected = false;
                            ii.selected = false;
                        }
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton && obj != g) obj.selected = false;
                    }
                }
            }
        }, {
            key: "selectAll",
            value: function selectAll() {
                this.checkVirtualList();
                var last = -1;
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj instanceof fgui.GButton && !ii.obj.selected) {
                            ii.obj.selected = true;
                            last = i;
                        }
                        ii.selected = true;
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton && !obj.selected) {
                            obj.selected = true;
                            last = i;
                        }
                    }
                }
                if (last != -1) this.updateSelectionController(last);
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
                var last = -1;
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj instanceof fgui.GButton) {
                            ii.obj.selected = !ii.obj.selected;
                            if (ii.obj.selected) last = i;
                        }
                        ii.selected = !ii.selected;
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton) {
                            obj.selected = !obj.selected;
                            if (obj.selected) last = i;
                        }
                    }
                }
                if (last != -1) this.updateSelectionController(last);
            }
        }, {
            key: "handleArrowKey",
            value: function handleArrowKey(dir) {
                var index = this.selectedIndex;
                if (index == -1) return;
                switch (dir) {
                  case 1:
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowVertical) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    } else if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        var current = this._children[index];
                        var k = 0;
                        for (var i = index - 1; i >= 0; i--) {
                            var obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (;i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;

                  case 3:
                    if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        index++;
                        if (index < this.numItems) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    } else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                        current = this._children[index];
                        k = 0;
                        var cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (;i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;

                  case 5:
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowVertical) {
                        index++;
                        if (index < this.numItems) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    } else if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        current = this._children[index];
                        k = 0;
                        cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (;i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;

                  case 7:
                    if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    } else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                        current = this._children[index];
                        k = 0;
                        for (i = index - 1; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (;i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(evt) {
                if (this._scrollPane && this._scrollPane.isDragged) return;
                var item = fgui.GObject.cast(evt.currentTarget);
                this.setSelectionOnEvent(item, evt);
                if (this._scrollPane && this.scrollItemToViewOnClick) this._scrollPane.scrollToView(item, true);
                this.dispatchItemEvent(item, fgui.Events.createEvent(fgui.Events.CLICK_ITEM, this.displayObject, evt));
            }
        }, {
            key: "dispatchItemEvent",
            value: function dispatchItemEvent(item, evt) {
                this.displayObject.event(fgui.Events.CLICK_ITEM, [ item, evt ]);
            }
        }, {
            key: "setSelectionOnEvent",
            value: function setSelectionOnEvent(item, evt) {
                if (!(item instanceof fgui.GButton) || this._selectionMode == fgui.ListSelectionMode.None) return;
                var dontChangeLastIndex = false;
                var index = this.childIndexToItemIndex(this.getChildIndex(item));
                if (this._selectionMode == fgui.ListSelectionMode.Single) {
                    if (!item.selected) {
                        this.clearSelectionExcept(item);
                        item.selected = true;
                    }
                } else {
                    if (evt.shiftKey) {
                        if (!item.selected) {
                            if (this._lastSelectedIndex != -1) {
                                var min = Math.min(this._lastSelectedIndex, index);
                                var max = Math.max(this._lastSelectedIndex, index);
                                max = Math.min(max, this.numItems - 1);
                                var i;
                                if (this._virtual) {
                                    for (i = min; i <= max; i++) {
                                        var ii = this._virtualItems[i];
                                        if (ii.obj instanceof fgui.GButton) ii.obj.selected = true;
                                        ii.selected = true;
                                    }
                                } else {
                                    for (i = min; i <= max; i++) {
                                        var obj = this.getChildAt(i);
                                        if (obj instanceof fgui.GButton) obj.selected = true;
                                    }
                                }
                                dontChangeLastIndex = true;
                            } else {
                                item.selected = true;
                            }
                        }
                    } else if (evt.ctrlKey || this._selectionMode == fgui.ListSelectionMode.Multiple_SingleClick) {
                        item.selected = !item.selected;
                    } else {
                        if (!item.selected) {
                            this.clearSelectionExcept(item);
                            item.selected = true;
                        } else this.clearSelectionExcept(item);
                    }
                }
                if (!dontChangeLastIndex) this._lastSelectedIndex = index;
                if (item.selected) this.updateSelectionController(index);
            }
        }, {
            key: "resizeToFit",
            value: function resizeToFit(itemCount, minSize) {
                if (itemCount == null) itemCount = 1e5;
                minSize = minSize || 0;
                this.ensureBoundsCorrect();
                var curCount = this.numItems;
                if (itemCount > curCount) itemCount = curCount;
                if (this._virtual) {
                    var lineCount = Math.ceil(itemCount / this._curLineItemCount);
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap; else this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
                } else if (itemCount == 0) {
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) this.viewHeight = minSize; else this.viewWidth = minSize;
                } else {
                    var i = itemCount - 1;
                    var obj = null;
                    while (i >= 0) {
                        obj = this.getChildAt(i);
                        if (!this.foldInvisibleItems || obj.visible) break;
                        i--;
                    }
                    if (i < 0) {
                        if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) this.viewHeight = minSize; else this.viewWidth = minSize;
                    } else {
                        var size = 0;
                        if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                            size = obj.y + obj.height;
                            if (size < minSize) size = minSize;
                            this.viewHeight = size;
                        } else {
                            size = obj.x + obj.width;
                            if (size < minSize) size = minSize;
                            this.viewWidth = size;
                        }
                    }
                }
            }
        }, {
            key: "getMaxItemWidth",
            value: function getMaxItemWidth() {
                var cnt = this._children.length;
                var max = 0;
                for (var i = 0; i < cnt; i++) {
                    var child = this.getChildAt(i);
                    if (child.width > max) max = child.width;
                }
                return max;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "handleSizeChanged", this).call(this);
                this.setBoundsChangedFlag();
                if (this._virtual) this.setVirtualListChangedFlag(true);
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "handleControllerChanged", this).call(this, c);
                if (this._selectionController == c) this.selectedIndex = c.selectedIndex;
            }
        }, {
            key: "updateSelectionController",
            value: function updateSelectionController(index) {
                if (this._selectionController && !this._selectionController.changing && index < this._selectionController.pageCount) {
                    var c = this._selectionController;
                    this._selectionController = null;
                    c.selectedIndex = index;
                    this._selectionController = c;
                }
            }
        }, {
            key: "shouldSnapToNext",
            value: function shouldSnapToNext(dir, delta, size) {
                return dir < 0 && delta > fgui.UIConfig.defaultScrollSnappingThreshold * size || dir > 0 && delta > (1 - fgui.UIConfig.defaultScrollSnappingThreshold) * size || dir == 0 && delta > size / 2;
            }
        }, {
            key: "getSnappingPositionWithDir",
            value: function getSnappingPositionWithDir(xValue, yValue, xDir, yDir, result) {
                if (this._virtual) {
                    if (!result) result = new Laya.Point();
                    var saved;
                    var index;
                    var size;
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        saved = yValue;
                        s_n = yValue;
                        index = this.getIndexOnPos1(false);
                        yValue = s_n;
                        if (index < this._virtualItems.length && index < this._realNumItems) {
                            size = this._virtualItems[index].height;
                            if (this.shouldSnapToNext(yDir, saved - yValue, size)) yValue += size + this._lineGap;
                        }
                    } else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                        saved = xValue;
                        s_n = xValue;
                        index = this.getIndexOnPos2(false);
                        xValue = s_n;
                        if (index < this._virtualItems.length && index < this._realNumItems) {
                            size = this._virtualItems[index].width;
                            if (this.shouldSnapToNext(xDir, saved - xValue, size)) xValue += size + this._columnGap;
                        }
                    } else {
                        saved = xValue;
                        s_n = xValue;
                        index = this.getIndexOnPos3(false);
                        xValue = s_n;
                        if (index < this._virtualItems.length && index < this._realNumItems) {
                            size = this._virtualItems[index].width;
                            if (this.shouldSnapToNext(xDir, saved - xValue, size)) xValue += size + this._columnGap;
                        }
                    }
                    result.x = xValue;
                    result.y = yValue;
                    return result;
                } else return (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "getSnappingPositionWithDir", this).call(this, xValue, yValue, xDir, yDir, result);
            }
        }, {
            key: "scrollToView",
            value: function scrollToView(index, ani, setFirst) {
                if (this._virtual) {
                    if (this._numItems == 0) return;
                    this.checkVirtualList();
                    if (index >= this._virtualItems.length) throw new Error("Invalid child index: " + index + ">" + this._virtualItems.length);
                    if (this._loop) index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
                    var rect;
                    var ii = this._virtualItems[index];
                    var pos = 0;
                    var i;
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount) {
                            pos += this._virtualItems[i].height + this._lineGap;
                        }
                        rect = new Laya.Rectangle(0, pos, this._itemSize.x, ii.height);
                    } else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                        for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount) {
                            pos += this._virtualItems[i].width + this._columnGap;
                        }
                        rect = new Laya.Rectangle(pos, 0, ii.width, this._itemSize.y);
                    } else {
                        var page = index / (this._curLineItemCount * this._curLineItemCount2);
                        rect = new Laya.Rectangle(page * this.viewWidth + index % this._curLineItemCount * (ii.width + this._columnGap), index / this._curLineItemCount % this._curLineItemCount2 * (ii.height + this._lineGap), ii.width, ii.height);
                    }
                    if (this._scrollPane) this._scrollPane.scrollToView(rect, ani, setFirst);
                } else {
                    var obj = this.getChildAt(index);
                    if (this._scrollPane) this._scrollPane.scrollToView(obj, ani, setFirst); else if (this._parent && this._parent.scrollPane) this._parent.scrollPane.scrollToView(obj, ani, setFirst);
                }
            }
        }, {
            key: "getFirstChildInView",
            value: function getFirstChildInView() {
                return this.childIndexToItemIndex((0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "getFirstChildInView", this).call(this));
            }
        }, {
            key: "childIndexToItemIndex",
            value: function childIndexToItemIndex(index) {
                if (!this._virtual) return index;
                if (this._layout == fgui.ListLayoutType.Pagination) {
                    for (var i = this._firstIndex; i < this._realNumItems; i++) {
                        if (this._virtualItems[i].obj) {
                            index--;
                            if (index < 0) return i;
                        }
                    }
                    return index;
                } else {
                    index += this._firstIndex;
                    if (this._loop && this._numItems > 0) index = index % this._numItems;
                    return index;
                }
            }
        }, {
            key: "itemIndexToChildIndex",
            value: function itemIndexToChildIndex(index) {
                if (!this._virtual) return index;
                if (this._layout == fgui.ListLayoutType.Pagination) {
                    return this.getChildIndex(this._virtualItems[index].obj);
                } else {
                    if (this._loop && this._numItems > 0) {
                        var j = this._firstIndex % this._numItems;
                        if (index >= j) index = index - j; else index = this._numItems - j + index;
                    } else index -= this._firstIndex;
                    return index;
                }
            }
        }, {
            key: "setVirtual",
            value: function setVirtual() {
                this._setVirtual(false);
            }
        }, {
            key: "setVirtualAndLoop",
            value: function setVirtualAndLoop() {
                this._setVirtual(true);
            }
        }, {
            key: "_setVirtual",
            value: function _setVirtual(loop) {
                if (!this._virtual) {
                    if (this._scrollPane == null) throw new Error("Virtual list must be scrollable!");
                    if (loop) {
                        if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.FlowVertical) throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
                        this._scrollPane.bouncebackEffect = false;
                    }
                    this._virtual = true;
                    this._loop = loop;
                    this._virtualItems = new Array();
                    this.removeChildrenToPool();
                    if (this._itemSize == null) {
                        this._itemSize = new Laya.Point();
                        var obj = this.getFromPool(null);
                        if (obj == null) {
                            throw new Error("Virtual List must have a default list item resource.");
                        } else {
                            this._itemSize.x = obj.width;
                            this._itemSize.y = obj.height;
                        }
                        this.returnToPool(obj);
                    }
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        this._scrollPane.scrollStep = this._itemSize.y;
                        if (this._loop) this._scrollPane._loop = 2;
                    } else {
                        this._scrollPane.scrollStep = this._itemSize.x;
                        if (this._loop) this._scrollPane._loop = 1;
                    }
                    this.on(fgui.Events.SCROLL, this, this.__scrolled);
                    this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "refreshVirtualList",
            value: function refreshVirtualList() {
                this.setVirtualListChangedFlag(false);
            }
        }, {
            key: "checkVirtualList",
            value: function checkVirtualList() {
                if (this._virtualListChanged != 0) {
                    this._refreshVirtualList();
                    Laya.timer.clear(this, this._refreshVirtualList);
                }
            }
        }, {
            key: "setVirtualListChangedFlag",
            value: function setVirtualListChangedFlag(layoutChanged) {
                if (layoutChanged) this._virtualListChanged = 2; else if (this._virtualListChanged == 0) this._virtualListChanged = 1;
                Laya.timer.callLater(this, this._refreshVirtualList);
            }
        }, {
            key: "_refreshVirtualList",
            value: function _refreshVirtualList() {
                if (!this._displayObject) return;
                var layoutChanged = this._virtualListChanged == 2;
                this._virtualListChanged = 0;
                this._eventLocked = true;
                if (layoutChanged) {
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.SingleRow) this._curLineItemCount = 1; else if (this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        if (this._columnCount > 0) this._curLineItemCount = this._columnCount; else {
                            this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                            if (this._curLineItemCount <= 0) this._curLineItemCount = 1;
                        }
                    } else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                        if (this._lineCount > 0) this._curLineItemCount = this._lineCount; else {
                            this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                            if (this._curLineItemCount <= 0) this._curLineItemCount = 1;
                        }
                    } else {
                        if (this._columnCount > 0) this._curLineItemCount = this._columnCount; else {
                            this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                            if (this._curLineItemCount <= 0) this._curLineItemCount = 1;
                        }
                        if (this._lineCount > 0) this._curLineItemCount2 = this._lineCount; else {
                            this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                            if (this._curLineItemCount2 <= 0) this._curLineItemCount2 = 1;
                        }
                    }
                }
                var ch = 0, cw = 0;
                if (this._realNumItems > 0) {
                    var i;
                    var len = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
                    var len2 = Math.min(this._curLineItemCount, this._realNumItems);
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        for (i = 0; i < len; i += this._curLineItemCount) {
                            ch += this._virtualItems[i].height + this._lineGap;
                        }
                        if (ch > 0) ch -= this._lineGap;
                        if (this._autoResizeItem) cw = this._scrollPane.viewWidth; else {
                            for (i = 0; i < len2; i++) {
                                cw += this._virtualItems[i].width + this._columnGap;
                            }
                            if (cw > 0) cw -= this._columnGap;
                        }
                    } else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                        for (i = 0; i < len; i += this._curLineItemCount) {
                            cw += this._virtualItems[i].width + this._columnGap;
                        }
                        if (cw > 0) cw -= this._columnGap;
                        if (this._autoResizeItem) ch = this._scrollPane.viewHeight; else {
                            for (i = 0; i < len2; i++) {
                                ch += this._virtualItems[i].height + this._lineGap;
                            }
                            if (ch > 0) ch -= this._lineGap;
                        }
                    } else {
                        var pageCount = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
                        cw = pageCount * this.viewWidth;
                        ch = this.viewHeight;
                    }
                }
                this.handleAlign(cw, ch);
                this._scrollPane.setContentSize(cw, ch);
                this._eventLocked = false;
                this.handleScroll(true);
            }
        }, {
            key: "__scrolled",
            value: function __scrolled(evt) {
                this.handleScroll(false);
            }
        }, {
            key: "getIndexOnPos1",
            value: function getIndexOnPos1(forceUpdate) {
                if (this._realNumItems < this._curLineItemCount) {
                    s_n = 0;
                    return 0;
                }
                var i;
                var pos2;
                var pos3;
                if (this.numChildren > 0 && !forceUpdate) {
                    pos2 = this.getChildAt(0).y;
                    if (pos2 > s_n) {
                        for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                            pos2 -= this._virtualItems[i].height + this._lineGap;
                            if (pos2 <= s_n) {
                                s_n = pos2;
                                return i;
                            }
                        }
                        s_n = 0;
                        return 0;
                    } else {
                        for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                            pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                            if (pos3 > s_n) {
                                s_n = pos2;
                                return i;
                            }
                            pos2 = pos3;
                        }
                        s_n = pos2;
                        return this._realNumItems - this._curLineItemCount;
                    }
                } else {
                    pos2 = 0;
                    for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
        }, {
            key: "getIndexOnPos2",
            value: function getIndexOnPos2(forceUpdate) {
                if (this._realNumItems < this._curLineItemCount) {
                    s_n = 0;
                    return 0;
                }
                var i;
                var pos2;
                var pos3;
                if (this.numChildren > 0 && !forceUpdate) {
                    pos2 = this.getChildAt(0).x;
                    if (pos2 > s_n) {
                        for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                            pos2 -= this._virtualItems[i].width + this._columnGap;
                            if (pos2 <= s_n) {
                                s_n = pos2;
                                return i;
                            }
                        }
                        s_n = 0;
                        return 0;
                    } else {
                        for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                            pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                            if (pos3 > s_n) {
                                s_n = pos2;
                                return i;
                            }
                            pos2 = pos3;
                        }
                        s_n = pos2;
                        return this._realNumItems - this._curLineItemCount;
                    }
                } else {
                    pos2 = 0;
                    for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
        }, {
            key: "getIndexOnPos3",
            value: function getIndexOnPos3(forceUpdate) {
                if (this._realNumItems < this._curLineItemCount) {
                    s_n = 0;
                    return 0;
                }
                var viewWidth = this.viewWidth;
                var page = Math.floor(s_n / viewWidth);
                var startIndex = page * (this._curLineItemCount * this._curLineItemCount2);
                var pos2 = page * viewWidth;
                var i;
                var pos3;
                for (i = 0; i < this._curLineItemCount; i++) {
                    pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return startIndex + i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return startIndex + this._curLineItemCount - 1;
            }
        }, {
            key: "handleScroll",
            value: function handleScroll(forceUpdate) {
                if (this._eventLocked) return;
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    var enterCounter = 0;
                    while (this.handleScroll1(forceUpdate)) {
                        enterCounter++;
                        forceUpdate = false;
                        if (enterCounter > 20) {
                            console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            break;
                        }
                    }
                    this.handleArchOrder1();
                } else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                    enterCounter = 0;
                    while (this.handleScroll2(forceUpdate)) {
                        enterCounter++;
                        forceUpdate = false;
                        if (enterCounter > 20) {
                            console.log("FairyGUI: list will never be <the> filled item renderer function always returns a different size.");
                            break;
                        }
                    }
                    this.handleArchOrder2();
                } else {
                    this.handleScroll3(forceUpdate);
                }
                this._boundsChanged = false;
            }
        }, {
            key: "handleScroll1",
            value: function handleScroll1(forceUpdate) {
                var pos = this._scrollPane.scrollingPosY;
                var max = pos + this._scrollPane.viewHeight;
                var end = max == this._scrollPane.contentHeight;
                s_n = pos;
                var newFirstIndex = this.getIndexOnPos1(forceUpdate);
                pos = s_n;
                if (newFirstIndex == this._firstIndex && !forceUpdate) return false;
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                var curIndex = newFirstIndex;
                var forward = oldFirstIndex > newFirstIndex;
                var childCount = this.numChildren;
                var lastIndex = oldFirstIndex + childCount - 1;
                var reuseIndex = forward ? lastIndex : oldFirstIndex;
                var curX = 0, curY = pos;
                var needRender;
                var deltaSize = 0;
                var firstItemDeltaSize = 0;
                var url = this.defaultItem;
                var ii, ii2;
                var i, j;
                var partSize = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                this.itemInfoVer++;
                while (curIndex < this._realNumItems && (end || curY < max)) {
                    ii = this._virtualItems[curIndex];
                    if (ii.obj == null || forceUpdate) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider.runWith(curIndex % this._numItems);
                            if (url == null) url = this._defaultItem;
                            url = fgui.UIPackage.normalizeURL(url);
                        }
                        if (ii.obj && ii.obj.resourceURL != url) {
                            if (ii.obj instanceof fgui.GButton) ii.selected = ii.obj.selected;
                            this.removeChildToPool(ii.obj);
                            ii.obj = null;
                        }
                    }
                    if (ii.obj == null) {
                        if (forward) {
                            for (j = reuseIndex; j >= oldFirstIndex; j--) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof fgui.GButton) ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex) reuseIndex--;
                                    break;
                                }
                            }
                        } else {
                            for (j = reuseIndex; j <= lastIndex; j++) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof fgui.GButton) ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex) reuseIndex++;
                                    break;
                                }
                            }
                        }
                        if (ii.obj) {
                            this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                        } else {
                            ii.obj = this._pool.getObject(url);
                            if (forward) this.addChildAt(ii.obj, curIndex - newFirstIndex); else this.addChild(ii.obj);
                        }
                        if (ii.obj instanceof fgui.GButton) ii.obj.selected = ii.selected;
                        needRender = true;
                    } else needRender = forceUpdate;
                    if (needRender) {
                        if (this._autoResizeItem && (this._layout == fgui.ListLayoutType.SingleColumn || this._columnCount > 0)) ii.obj.setSize(partSize, ii.obj.height, true);
                        this.itemRenderer.runWith([ curIndex % this._numItems, ii.obj ]);
                        if (curIndex % this._curLineItemCount == 0) {
                            deltaSize += Math.ceil(ii.obj.height) - ii.height;
                            if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                                firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                            }
                        }
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                    ii.updateFlag = this.itemInfoVer;
                    ii.obj.setXY(curX, curY);
                    if (curIndex == newFirstIndex) max += ii.height;
                    curX += ii.width + this._columnGap;
                    if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                        curX = 0;
                        curY += ii.height + this._lineGap;
                    }
                    curIndex++;
                }
                for (i = 0; i < childCount; i++) {
                    ii = this._virtualItems[oldFirstIndex + i];
                    if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                        if (ii.obj instanceof fgui.GButton) ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                childCount = this._children.length;
                for (i = 0; i < childCount; i++) {
                    var obj = this._virtualItems[newFirstIndex + i].obj;
                    if (this._children[i] != obj) this.setChildIndex(obj, i);
                }
                if (deltaSize != 0 || firstItemDeltaSize != 0) this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
                if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y) return true; else return false;
            }
        }, {
            key: "handleScroll2",
            value: function handleScroll2(forceUpdate) {
                var pos = this._scrollPane.scrollingPosX;
                var max = pos + this._scrollPane.viewWidth;
                var end = pos == this._scrollPane.contentWidth;
                s_n = pos;
                var newFirstIndex = this.getIndexOnPos2(forceUpdate);
                pos = s_n;
                if (newFirstIndex == this._firstIndex && !forceUpdate) return false;
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                var curIndex = newFirstIndex;
                var forward = oldFirstIndex > newFirstIndex;
                var childCount = this.numChildren;
                var lastIndex = oldFirstIndex + childCount - 1;
                var reuseIndex = forward ? lastIndex : oldFirstIndex;
                var curX = pos, curY = 0;
                var needRender;
                var deltaSize = 0;
                var firstItemDeltaSize = 0;
                var url = this.defaultItem;
                var ii, ii2;
                var i, j;
                var partSize = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                this.itemInfoVer++;
                while (curIndex < this._realNumItems && (end || curX < max)) {
                    ii = this._virtualItems[curIndex];
                    if (ii.obj == null || forceUpdate) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider.runWith(curIndex % this._numItems);
                            if (url == null) url = this._defaultItem;
                            url = fgui.UIPackage.normalizeURL(url);
                        }
                        if (ii.obj && ii.obj.resourceURL != url) {
                            if (ii.obj instanceof fgui.GButton) ii.selected = ii.obj.selected;
                            this.removeChildToPool(ii.obj);
                            ii.obj = null;
                        }
                    }
                    if (ii.obj == null) {
                        if (forward) {
                            for (j = reuseIndex; j >= oldFirstIndex; j--) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof fgui.GButton) ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex) reuseIndex--;
                                    break;
                                }
                            }
                        } else {
                            for (j = reuseIndex; j <= lastIndex; j++) {
                                ii2 = this._virtualItems[j];
                                if (ii2.obj && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                    if (ii2.obj instanceof fgui.GButton) ii2.selected = ii2.obj.selected;
                                    ii.obj = ii2.obj;
                                    ii2.obj = null;
                                    if (j == reuseIndex) reuseIndex++;
                                    break;
                                }
                            }
                        }
                        if (ii.obj) {
                            this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                        } else {
                            ii.obj = this._pool.getObject(url);
                            if (forward) this.addChildAt(ii.obj, curIndex - newFirstIndex); else this.addChild(ii.obj);
                        }
                        if (ii.obj instanceof fgui.GButton) ii.obj.selected = ii.selected;
                        needRender = true;
                    } else needRender = forceUpdate;
                    if (needRender) {
                        if (this._autoResizeItem && (this._layout == fgui.ListLayoutType.SingleRow || this._lineCount > 0)) ii.obj.setSize(ii.obj.width, partSize, true);
                        this.itemRenderer.runWith([ curIndex % this._numItems, ii.obj ]);
                        if (curIndex % this._curLineItemCount == 0) {
                            deltaSize += Math.ceil(ii.obj.width) - ii.width;
                            if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                                firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                            }
                        }
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                    ii.updateFlag = this.itemInfoVer;
                    ii.obj.setXY(curX, curY);
                    if (curIndex == newFirstIndex) max += ii.width;
                    curY += ii.height + this._lineGap;
                    if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                        curY = 0;
                        curX += ii.width + this._columnGap;
                    }
                    curIndex++;
                }
                for (i = 0; i < childCount; i++) {
                    ii = this._virtualItems[oldFirstIndex + i];
                    if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                        if (ii.obj instanceof fgui.GButton) ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                childCount = this._children.length;
                for (i = 0; i < childCount; i++) {
                    var obj = this._virtualItems[newFirstIndex + i].obj;
                    if (this._children[i] != obj) this.setChildIndex(obj, i);
                }
                if (deltaSize != 0 || firstItemDeltaSize != 0) this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
                if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x) return true; else return false;
            }
        }, {
            key: "handleScroll3",
            value: function handleScroll3(forceUpdate) {
                var pos = this._scrollPane.scrollingPosX;
                s_n = pos;
                var newFirstIndex = this.getIndexOnPos3(forceUpdate);
                pos = s_n;
                if (newFirstIndex == this._firstIndex && !forceUpdate) return;
                var oldFirstIndex = this._firstIndex;
                this._firstIndex = newFirstIndex;
                var reuseIndex = oldFirstIndex;
                var virtualItemCount = this._virtualItems.length;
                var pageSize = this._curLineItemCount * this._curLineItemCount2;
                var startCol = newFirstIndex % this._curLineItemCount;
                var viewWidth = this.viewWidth;
                var page = Math.floor(newFirstIndex / pageSize);
                var startIndex = page * pageSize;
                var lastIndex = startIndex + pageSize * 2;
                var needRender;
                var i;
                var ii, ii2;
                var col;
                var url = this._defaultItem;
                var partWidth = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
                var partHeight = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
                this.itemInfoVer++;
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems) continue;
                    col = i % this._curLineItemCount;
                    if (i - startIndex < pageSize) {
                        if (col < startCol) continue;
                    } else {
                        if (col > startCol) continue;
                    }
                    ii = this._virtualItems[i];
                    ii.updateFlag = this.itemInfoVer;
                }
                var lastObj = null;
                var insertIndex = 0;
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems) continue;
                    ii = this._virtualItems[i];
                    if (ii.updateFlag != this.itemInfoVer) continue;
                    if (ii.obj == null) {
                        while (reuseIndex < virtualItemCount) {
                            ii2 = this._virtualItems[reuseIndex];
                            if (ii2.obj && ii2.updateFlag != this.itemInfoVer) {
                                if (ii2.obj instanceof fgui.GButton) ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                break;
                            }
                            reuseIndex++;
                        }
                        if (insertIndex == -1) insertIndex = this.getChildIndex(lastObj) + 1;
                        if (ii.obj == null) {
                            if (this.itemProvider != null) {
                                url = this.itemProvider.runWith(i % this._numItems);
                                if (url == null) url = this._defaultItem;
                                url = fgui.UIPackage.normalizeURL(url);
                            }
                            ii.obj = this._pool.getObject(url);
                            this.addChildAt(ii.obj, insertIndex);
                        } else {
                            insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                        }
                        insertIndex++;
                        if (ii.obj instanceof fgui.GButton) ii.obj.selected = ii.selected;
                        needRender = true;
                    } else {
                        needRender = forceUpdate;
                        insertIndex = -1;
                        lastObj = ii.obj;
                    }
                    if (needRender) {
                        if (this._autoResizeItem) {
                            if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount) ii.obj.setSize(partWidth, partHeight, true); else if (this._curLineItemCount == this._columnCount) ii.obj.setSize(partWidth, ii.obj.height, true); else if (this._curLineItemCount2 == this._lineCount) ii.obj.setSize(ii.obj.width, partHeight, true);
                        }
                        this.itemRenderer.runWith([ i % this._numItems, ii.obj ]);
                        ii.width = Math.ceil(ii.obj.width);
                        ii.height = Math.ceil(ii.obj.height);
                    }
                }
                var borderX = startIndex / pageSize * viewWidth;
                var xx = borderX;
                var yy = 0;
                var lineHeight = 0;
                for (i = startIndex; i < lastIndex; i++) {
                    if (i >= this._realNumItems) continue;
                    ii = this._virtualItems[i];
                    if (ii.updateFlag == this.itemInfoVer) ii.obj.setXY(xx, yy);
                    if (ii.height > lineHeight) lineHeight = ii.height;
                    if (i % this._curLineItemCount == this._curLineItemCount - 1) {
                        xx = borderX;
                        yy += lineHeight + this._lineGap;
                        lineHeight = 0;
                        if (i == startIndex + pageSize - 1) {
                            borderX += viewWidth;
                            xx = borderX;
                            yy = 0;
                        }
                    } else xx += ii.width + this._columnGap;
                }
                for (i = reuseIndex; i < virtualItemCount; i++) {
                    ii = this._virtualItems[i];
                    if (ii.updateFlag != this.itemInfoVer && ii.obj) {
                        if (ii.obj instanceof fgui.GButton) ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
            }
        }, {
            key: "handleArchOrder1",
            value: function handleArchOrder1() {
                if (this.childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) {
                    var mid = this._scrollPane.posY + this.viewHeight / 2;
                    var minDist = Number.POSITIVE_INFINITY;
                    var dist = 0;
                    var apexIndex = 0;
                    var cnt = this.numChildren;
                    for (var i = 0; i < cnt; i++) {
                        var obj = this.getChildAt(i);
                        if (!this.foldInvisibleItems || obj.visible) {
                            dist = Math.abs(mid - obj.y - obj.height / 2);
                            if (dist < minDist) {
                                minDist = dist;
                                apexIndex = i;
                            }
                        }
                    }
                    this.apexIndex = apexIndex;
                }
            }
        }, {
            key: "handleArchOrder2",
            value: function handleArchOrder2() {
                if (this.childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) {
                    var mid = this._scrollPane.posX + this.viewWidth / 2;
                    var minDist = Number.POSITIVE_INFINITY;
                    var dist = 0;
                    var apexIndex = 0;
                    var cnt = this.numChildren;
                    for (var i = 0; i < cnt; i++) {
                        var obj = this.getChildAt(i);
                        if (!this.foldInvisibleItems || obj.visible) {
                            dist = Math.abs(mid - obj.x - obj.width / 2);
                            if (dist < minDist) {
                                minDist = dist;
                                apexIndex = i;
                            }
                        }
                    }
                    this.apexIndex = apexIndex;
                }
            }
        }, {
            key: "handleAlign",
            value: function handleAlign(contentWidth, contentHeight) {
                var newOffsetX = 0;
                var newOffsetY = 0;
                if (contentHeight < this.viewHeight) {
                    if (this._verticalAlign == "middle") newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2); else if (this._verticalAlign == "bottom") newOffsetY = this.viewHeight - contentHeight;
                }
                if (contentWidth < this.viewWidth) {
                    if (this._align == "center") newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2); else if (this._align == "right") newOffsetX = this.viewWidth - contentWidth;
                }
                if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
                    this._alignOffset.setTo(newOffsetX, newOffsetY);
                    if (this._scrollPane) this._scrollPane.adjustMaskContainer(); else this._container.pos(this._margin.left + this._alignOffset.x, this._margin.top + this._yOffset);
                }
            }
        }, {
            key: "updateBounds",
            value: function updateBounds() {
                if (this._virtual) return;
                var i;
                var child;
                var curX = 0;
                var curY = 0;
                var maxWidth = 0;
                var maxHeight = 0;
                var cw, ch;
                var j = 0;
                var page = 0;
                var k = 0;
                var cnt = this._children.length;
                var viewWidth = this.viewWidth;
                var viewHeight = this.viewHeight;
                var lineSize = 0;
                var lineStart = 0;
                var ratio;
                if (this._layout == fgui.ListLayoutType.SingleColumn) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible) continue;
                        if (curY != 0) curY += this._lineGap;
                        child.y = curY;
                        if (this._autoResizeItem) child.setSize(viewWidth, child.height, true);
                        curY += Math.ceil(child.height);
                        if (child.width > maxWidth) maxWidth = child.width;
                    }
                    ch = curY;
                    if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
                        viewWidth += this._scrollPane.vtScrollBar.width;
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            child.setSize(viewWidth, child.height, true);
                            if (child.width > maxWidth) maxWidth = child.width;
                        }
                    }
                    cw = Math.ceil(maxWidth);
                } else if (this._layout == fgui.ListLayoutType.SingleRow) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible) continue;
                        if (curX != 0) curX += this._columnGap;
                        child.x = curX;
                        if (this._autoResizeItem) child.setSize(child.width, viewHeight, true);
                        curX += Math.ceil(child.width);
                        if (child.height > maxHeight) maxHeight = child.height;
                    }
                    cw = curX;
                    if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
                        viewHeight += this._scrollPane.hzScrollBar.height;
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            child.setSize(child.width, viewHeight, true);
                            if (child.height > maxHeight) maxHeight = child.height;
                        }
                    }
                    ch = Math.ceil(maxHeight);
                } else if (this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    if (this._autoResizeItem && this._columnCount > 0) {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            lineSize += child.sourceWidth;
                            j++;
                            if (j == this._columnCount || i == cnt - 1) {
                                ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                                curX = 0;
                                for (j = lineStart; j <= i; j++) {
                                    child = this.getChildAt(j);
                                    if (this.foldInvisibleItems && !child.visible) continue;
                                    child.setXY(curX, curY);
                                    if (j < i) {
                                        child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                        curX += Math.ceil(child.width) + this._columnGap;
                                    } else {
                                        child.setSize(viewWidth - curX, child.height, true);
                                    }
                                    if (child.height > maxHeight) maxHeight = child.height;
                                }
                                curY += Math.ceil(maxHeight) + this._lineGap;
                                maxHeight = 0;
                                j = 0;
                                lineStart = i + 1;
                                lineSize = 0;
                            }
                        }
                        ch = curY + Math.ceil(maxHeight);
                        cw = viewWidth;
                    } else {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            if (curX != 0) curX += this._columnGap;
                            if (this._columnCount != 0 && j >= this._columnCount || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                                curX = 0;
                                curY += Math.ceil(maxHeight) + this._lineGap;
                                maxHeight = 0;
                                j = 0;
                            }
                            child.setXY(curX, curY);
                            curX += Math.ceil(child.width);
                            if (curX > maxWidth) maxWidth = curX;
                            if (child.height > maxHeight) maxHeight = child.height;
                            j++;
                        }
                        ch = curY + Math.ceil(maxHeight);
                        cw = Math.ceil(maxWidth);
                    }
                } else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                    if (this._autoResizeItem && this._lineCount > 0) {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            lineSize += child.sourceHeight;
                            j++;
                            if (j == this._lineCount || i == cnt - 1) {
                                ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
                                curY = 0;
                                for (j = lineStart; j <= i; j++) {
                                    child = this.getChildAt(j);
                                    if (this.foldInvisibleItems && !child.visible) continue;
                                    child.setXY(curX, curY);
                                    if (j < i) {
                                        child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                        curY += Math.ceil(child.height) + this._lineGap;
                                    } else {
                                        child.setSize(child.width, viewHeight - curY, true);
                                    }
                                    if (child.width > maxWidth) maxWidth = child.width;
                                }
                                curX += Math.ceil(maxWidth) + this._columnGap;
                                maxWidth = 0;
                                j = 0;
                                lineStart = i + 1;
                                lineSize = 0;
                            }
                        }
                        cw = curX + Math.ceil(maxWidth);
                        ch = viewHeight;
                    } else {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            if (curY != 0) curY += this._lineGap;
                            if (this._lineCount != 0 && j >= this._lineCount || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                                curY = 0;
                                curX += Math.ceil(maxWidth) + this._columnGap;
                                maxWidth = 0;
                                j = 0;
                            }
                            child.setXY(curX, curY);
                            curY += Math.ceil(child.height);
                            if (curY > maxHeight) maxHeight = curY;
                            if (child.width > maxWidth) maxWidth = child.width;
                            j++;
                        }
                        cw = curX + Math.ceil(maxWidth);
                        ch = Math.ceil(maxHeight);
                    }
                } else {
                    var eachHeight;
                    if (this._autoResizeItem && this._lineCount > 0) eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
                    if (this._autoResizeItem && this._columnCount > 0) {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            if (j == 0 && (this._lineCount != 0 && k >= this._lineCount || this._lineCount == 0 && curY + child.height > viewHeight)) {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                            lineSize += child.sourceWidth;
                            j++;
                            if (j == this._columnCount || i == cnt - 1) {
                                ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                                curX = 0;
                                for (j = lineStart; j <= i; j++) {
                                    child = this.getChildAt(j);
                                    if (this.foldInvisibleItems && !child.visible) continue;
                                    child.setXY(page * viewWidth + curX, curY);
                                    if (j < i) {
                                        child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this._lineCount > 0 ? eachHeight : child.height, true);
                                        curX += Math.ceil(child.width) + this._columnGap;
                                    } else {
                                        child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
                                    }
                                    if (child.height > maxHeight) maxHeight = child.height;
                                }
                                curY += Math.ceil(maxHeight) + this._lineGap;
                                maxHeight = 0;
                                j = 0;
                                lineStart = i + 1;
                                lineSize = 0;
                                k++;
                            }
                        }
                    } else {
                        for (i = 0; i < cnt; i++) {
                            child = this.getChildAt(i);
                            if (this.foldInvisibleItems && !child.visible) continue;
                            if (curX != 0) curX += this._columnGap;
                            if (this._autoResizeItem && this._lineCount > 0) child.setSize(child.width, eachHeight, true);
                            if (this._columnCount != 0 && j >= this._columnCount || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                                curX = 0;
                                curY += Math.ceil(maxHeight) + this._lineGap;
                                maxHeight = 0;
                                j = 0;
                                k++;
                                if (this._lineCount != 0 && k >= this._lineCount || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                                    page++;
                                    curY = 0;
                                    k = 0;
                                }
                            }
                            child.setXY(page * viewWidth + curX, curY);
                            curX += Math.ceil(child.width);
                            if (curX > maxWidth) maxWidth = curX;
                            if (child.height > maxHeight) maxHeight = child.height;
                            j++;
                        }
                    }
                    ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
                    cw = (page + 1) * viewWidth;
                }
                this.handleAlign(cw, ch);
                this.setBounds(0, 0, cw, ch);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                var i1;
                this._layout = buffer.readByte();
                this._selectionMode = buffer.readByte();
                i1 = buffer.readByte();
                this._align = i1 == 0 ? "left" : i1 == 1 ? "center" : "right";
                i1 = buffer.readByte();
                this._verticalAlign = i1 == 0 ? "top" : i1 == 1 ? "middle" : "bottom";
                this._lineGap = buffer.getInt16();
                this._columnGap = buffer.getInt16();
                this._lineCount = buffer.getInt16();
                this._columnCount = buffer.getInt16();
                this._autoResizeItem = buffer.readBool();
                this._childrenRenderOrder = buffer.readByte();
                this._apexIndex = buffer.getInt16();
                if (buffer.readBool()) {
                    this._margin.top = buffer.getInt32();
                    this._margin.bottom = buffer.getInt32();
                    this._margin.left = buffer.getInt32();
                    this._margin.right = buffer.getInt32();
                }
                var overflow = buffer.readByte();
                if (overflow == fgui.OverflowType.Scroll) {
                    var savedPos = buffer.pos;
                    buffer.seek(beginPos, 7);
                    this.setupScroll(buffer);
                    buffer.pos = savedPos;
                } else this.setupOverflow(overflow);
                if (buffer.readBool()) buffer.skip(8);
                if (buffer.version >= 2) {
                    this.scrollItemToViewOnClick = buffer.readBool();
                    this.foldInvisibleItems = buffer.readBool();
                }
                buffer.seek(beginPos, 8);
                this._defaultItem = buffer.readS();
                this.readItems(buffer);
            }
        }, {
            key: "readItems",
            value: function readItems(buffer) {
                var cnt;
                var i;
                var nextPos;
                var str;
                cnt = buffer.getInt16();
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    str = buffer.readS();
                    if (str == null) {
                        str = this.defaultItem;
                        if (!str) {
                            buffer.pos = nextPos;
                            continue;
                        }
                    }
                    var obj = this.getFromPool(str);
                    if (obj) {
                        this.addChild(obj);
                        this.setupItem(buffer, obj);
                    }
                    buffer.pos = nextPos;
                }
            }
        }, {
            key: "setupItem",
            value: function setupItem(buffer, obj) {
                var str;
                str = buffer.readS();
                if (str != null) obj.text = str;
                str = buffer.readS();
                if (str != null && obj instanceof fgui.GButton) obj.selectedTitle = str;
                str = buffer.readS();
                if (str != null) obj.icon = str;
                str = buffer.readS();
                if (str != null && obj instanceof fgui.GButton) obj.selectedIcon = str;
                str = buffer.readS();
                if (str != null) obj.name = str;
                var cnt;
                var i;
                if (obj instanceof fgui.GComponent) {
                    cnt = buffer.getInt16();
                    for (i = 0; i < cnt; i++) {
                        var cc = obj.getController(buffer.readS());
                        str = buffer.readS();
                        if (cc) cc.selectedPageId = str;
                    }
                    if (buffer.version >= 2) {
                        cnt = buffer.getInt16();
                        for (i = 0; i < cnt; i++) {
                            var target = buffer.readS();
                            var propertyId = buffer.getInt16();
                            var value = buffer.readS();
                            var obj2 = obj.getChildByPath(target);
                            if (obj2) obj2.setProp(propertyId, value);
                        }
                    }
                }
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GList.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 6);
                var i = buffer.getInt16();
                if (i != -1) this._selectionController = this._parent.getControllerAt(i);
            }
        }, {
            key: "layout",
            get: function get() {
                return this._layout;
            },
            set: function set(value) {
                if (this._layout != value) {
                    this._layout = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "lineCount",
            get: function get() {
                return this._lineCount;
            },
            set: function set(value) {
                if (this._lineCount != value) {
                    this._lineCount = value;
                    if (this._layout == fgui.ListLayoutType.FlowVertical || this._layout == fgui.ListLayoutType.Pagination) {
                        this.setBoundsChangedFlag();
                        if (this._virtual) this.setVirtualListChangedFlag(true);
                    }
                }
            }
        }, {
            key: "columnCount",
            get: function get() {
                return this._columnCount;
            },
            set: function set(value) {
                if (this._columnCount != value) {
                    this._columnCount = value;
                    if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        this.setBoundsChangedFlag();
                        if (this._virtual) this.setVirtualListChangedFlag(true);
                    }
                }
            }
        }, {
            key: "lineGap",
            get: function get() {
                return this._lineGap;
            },
            set: function set(value) {
                if (this._lineGap != value) {
                    this._lineGap = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "columnGap",
            get: function get() {
                return this._columnGap;
            },
            set: function set(value) {
                if (this._columnGap != value) {
                    this._columnGap = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(value) {
                if (this._align != value) {
                    this._align = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._verticalAlign;
            },
            set: function set(value) {
                if (this._verticalAlign != value) {
                    this._verticalAlign = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "virtualItemSize",
            get: function get() {
                return this._itemSize;
            },
            set: function set(value) {
                if (this._virtual) {
                    if (this._itemSize == null) this._itemSize = new Laya.Point();
                    this._itemSize.setTo(value.x, value.y);
                    this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "defaultItem",
            get: function get() {
                return this._defaultItem;
            },
            set: function set(val) {
                this._defaultItem = val;
            }
        }, {
            key: "autoResizeItem",
            get: function get() {
                return this._autoResizeItem;
            },
            set: function set(value) {
                if (this._autoResizeItem != value) {
                    this._autoResizeItem = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual) this.setVirtualListChangedFlag(true);
                }
            }
        }, {
            key: "selectionMode",
            get: function get() {
                return this._selectionMode;
            },
            set: function set(value) {
                this._selectionMode = value;
            }
        }, {
            key: "selectionController",
            get: function get() {
                return this._selectionController;
            },
            set: function set(value) {
                this._selectionController = value;
            }
        }, {
            key: "itemPool",
            get: function get() {
                return this._pool;
            }
        }, {
            key: "selectedIndex",
            get: function get() {
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if (ii.obj instanceof fgui.GButton && ii.obj.selected || ii.obj == null && ii.selected) {
                            if (this._loop) return i % this._numItems; else return i;
                        }
                    }
                } else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i];
                        if (obj instanceof fgui.GButton && obj.selected) return i;
                    }
                }
                return -1;
            },
            set: function set(value) {
                if (value >= 0 && value < this.numItems) {
                    if (this._selectionMode != fgui.ListSelectionMode.Single) this.clearSelection();
                    this.addSelection(value);
                } else this.clearSelection();
            }
        }, {
            key: "numItems",
            get: function get() {
                if (this._virtual) return this._numItems; else return this._children.length;
            },
            set: function set(value) {
                var i;
                if (this._virtual) {
                    if (this.itemRenderer == null) throw new Error("set itemRenderer first!");
                    this._numItems = value;
                    if (this._loop) this._realNumItems = this._numItems * 6; else this._realNumItems = this._numItems;
                    var oldCount = this._virtualItems.length;
                    if (this._realNumItems > oldCount) {
                        for (i = oldCount; i < this._realNumItems; i++) {
                            var ii = {
                                width: this._itemSize.x,
                                height: this._itemSize.y,
                                updateFlag: 0
                            };
                            this._virtualItems.push(ii);
                        }
                    } else {
                        for (i = this._realNumItems; i < oldCount; i++) {
                            this._virtualItems[i].selected = false;
                        }
                    }
                    if (this._virtualListChanged != 0) Laya.timer.clear(this, this._refreshVirtualList);
                    this._refreshVirtualList();
                } else {
                    var cnt = this._children.length;
                    if (value > cnt) {
                        for (i = cnt; i < value; i++) {
                            if (this.itemProvider == null) this.addItemFromPool(); else this.addItemFromPool(this.itemProvider.runWith(i));
                        }
                    } else {
                        this.removeChildrenToPool(value, cnt);
                    }
                    if (this.itemRenderer != null) {
                        for (i = 0; i < value; i++) {
                            this.itemRenderer.runWith([ i, this.getChildAt(i) ]);
                        }
                    }
                }
            }
        } ]);
        return GList;
    }(fgui.GComponent);
    fgui.GList = GList;
    var s_n = 0;
})(fgui);

(function(fgui) {
    var GObjectPool = /* */ function() {
        function GObjectPool() {
            (0, _classCallCheck2.default)(this, GObjectPool);
            this._count = 0;
            this._pool = {};
        }
        (0, _createClass2.default)(GObjectPool, [ {
            key: "clear",
            value: function clear() {
                for (var i1 in this._pool) {
                    var arr = this._pool[i1];
                    var cnt = arr.length;
                    for (var i = 0; i < cnt; i++) {
                        arr[i].dispose();
                    }
                }
                this._pool = {};
                this._count = 0;
            }
        }, {
            key: "getObject",
            value: function getObject(url) {
                url = fgui.UIPackage.normalizeURL(url);
                if (url == null) return null;
                var arr = this._pool[url];
                if (arr && arr.length > 0) {
                    this._count--;
                    return arr.shift();
                }
                var child = fgui.UIPackage.createObjectFromURL(url);
                return child;
            }
        }, {
            key: "returnObject",
            value: function returnObject(obj) {
                var url = obj.resourceURL;
                if (!url) return;
                var arr = this._pool[url];
                if (arr == null) {
                    arr = [];
                    this._pool[url] = arr;
                }
                this._count++;
                arr.push(obj);
            }
        }, {
            key: "count",
            get: function get() {
                return this._count;
            }
        } ]);
        return GObjectPool;
    }();
    fgui.GObjectPool = GObjectPool;
})(fgui);

(function(fgui) {
    var GLoader = /* */ function(_fgui$GObject6) {
        (0, _inherits2.default)(GLoader, _fgui$GObject6);
        var _super13 = _createSuper(GLoader);
        function GLoader() {
            var _this11;
            (0, _classCallCheck2.default)(this, GLoader);
            _this11 = _super13.call(this);
            _this11._url = "";
            _this11._fill = fgui.LoaderFillType.None;
            _this11._align = "left";
            _this11._valign = "top";
            _this11._showErrorSign = true;
            return _this11;
        }
        (0, _createClass2.default)(GLoader, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "createDisplayObject", this).call(this);
                this._content = new fgui.MovieClip();
                this._displayObject.addChild(this._content);
                this._displayObject.mouseEnabled = true;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (!this._contentItem && this._content.texture) {
                    this.freeExternal(this._content.texture);
                }
                if (this._content2) this._content2.dispose();
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "dispose", this).call(this);
            }
        }, {
            key: "loadContent",
            value: function loadContent() {
                this.clearContent();
                if (!this._url) return;
                if (fgui.ToolSet.startsWith(this._url, "ui://")) this.loadFromPackage(this._url); else this.loadExternal();
            }
        }, {
            key: "loadFromPackage",
            value: function loadFromPackage(itemURL) {
                this._contentItem = fgui.UIPackage.getItemByURL(itemURL);
                if (this._contentItem) {
                    this._contentItem = this._contentItem.getBranch();
                    this.sourceWidth = this._contentItem.width;
                    this.sourceHeight = this._contentItem.height;
                    this._contentItem = this._contentItem.getHighResolution();
                    this._contentItem.load();
                    if (this._autoSize) this.setSize(this.sourceWidth, this.sourceHeight);
                    if (this._contentItem.type == fgui.PackageItemType.Image) {
                        if (!this._contentItem.texture) {
                            this.setErrorState();
                        } else {
                            this._content.texture = this._contentItem.texture;
                            this._content.scale9Grid = this._contentItem.scale9Grid;
                            this._content.scaleByTile = this._contentItem.scaleByTile;
                            this._content.tileGridIndice = this._contentItem.tileGridIndice;
                            this.sourceWidth = this._contentItem.width;
                            this.sourceHeight = this._contentItem.height;
                            this.updateLayout();
                        }
                    } else if (this._contentItem.type == fgui.PackageItemType.MovieClip) {
                        this.sourceWidth = this._contentItem.width;
                        this.sourceHeight = this._contentItem.height;
                        this._content.interval = this._contentItem.interval;
                        this._content.swing = this._contentItem.swing;
                        this._content.repeatDelay = this._contentItem.repeatDelay;
                        this._content.frames = this._contentItem.frames;
                        this.updateLayout();
                    } else if (this._contentItem.type == fgui.PackageItemType.Component) {
                        var obj = fgui.UIPackage.createObjectFromURL(itemURL);
                        if (!obj) this.setErrorState(); else if (!(obj instanceof fgui.GComponent)) {
                            obj.dispose();
                            this.setErrorState();
                        } else {
                            this._content2 = obj.asCom;
                            this._displayObject.addChild(this._content2.displayObject);
                            this.updateLayout();
                        }
                    } else this.setErrorState();
                } else this.setErrorState();
            }
        }, {
            key: "loadExternal",
            value: function loadExternal() {
                fgui.AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
            }
        }, {
            key: "freeExternal",
            value: function freeExternal(texture) {}
        }, {
            key: "onExternalLoadSuccess",
            value: function onExternalLoadSuccess(texture) {
                this._content.texture = texture;
                this._content.scale9Grid = null;
                this._content.scaleByTile = false;
                this.sourceWidth = texture.width;
                this.sourceHeight = texture.height;
                this.updateLayout();
            }
        }, {
            key: "onExternalLoadFailed",
            value: function onExternalLoadFailed() {
                this.setErrorState();
            }
        }, {
            key: "__getResCompleted",
            value: function __getResCompleted(tex) {
                if (tex != null) this.onExternalLoadSuccess(tex); else this.onExternalLoadFailed();
            }
        }, {
            key: "setErrorState",
            value: function setErrorState() {
                if (!this._showErrorSign) return;
                if (!this._errorSign) {
                    if (fgui.UIConfig.loaderErrorSign != null) {
                        this._errorSign = GLoader._errorSignPool.getObject(fgui.UIConfig.loaderErrorSign);
                    }
                }
                if (this._errorSign) {
                    this._errorSign.setSize(this.width, this.height);
                    this._displayObject.addChild(this._errorSign.displayObject);
                }
            }
        }, {
            key: "clearErrorState",
            value: function clearErrorState() {
                if (this._errorSign) {
                    this._displayObject.removeChild(this._errorSign.displayObject);
                    GLoader._errorSignPool.returnObject(this._errorSign);
                    this._errorSign = null;
                }
            }
        }, {
            key: "updateLayout",
            value: function updateLayout() {
                if (!this._content2 && !this._content.texture && !this._content.frames) {
                    if (this._autoSize) {
                        this._updatingLayout = true;
                        this.setSize(50, 30);
                        this._updatingLayout = false;
                    }
                    return;
                }
                var cw = this.sourceWidth;
                var ch = this.sourceHeight;
                if (this._autoSize) {
                    this._updatingLayout = true;
                    if (cw == 0) cw = 50;
                    if (ch == 0) ch = 30;
                    this.setSize(cw, ch);
                    this._updatingLayout = false;
                    if (cw == this._width && ch == this._height) {
                        if (this._content2) {
                            this._content2.setXY(0, 0);
                            this._content2.setScale(1, 1);
                        } else {
                            this._content.size(cw, ch);
                            this._content.pos(0, 0);
                        }
                        return;
                    }
                }
                var sx = 1, sy = 1;
                if (this._fill != fgui.LoaderFillType.None) {
                    sx = this.width / this.sourceWidth;
                    sy = this.height / this.sourceHeight;
                    if (sx != 1 || sy != 1) {
                        if (this._fill == fgui.LoaderFillType.ScaleMatchHeight) sx = sy; else if (this._fill == fgui.LoaderFillType.ScaleMatchWidth) sy = sx; else if (this._fill == fgui.LoaderFillType.Scale) {
                            if (sx > sy) sx = sy; else sy = sx;
                        } else if (this._fill == fgui.LoaderFillType.ScaleNoBorder) {
                            if (sx > sy) sy = sx; else sx = sy;
                        }
                        if (this._shrinkOnly) {
                            if (sx > 1) sx = 1;
                            if (sy > 1) sy = 1;
                        }
                        cw = this.sourceWidth * sx;
                        ch = this.sourceHeight * sy;
                    }
                }
                if (this._content2) this._content2.setScale(sx, sy); else this._content.size(cw, ch);
                var nx, ny;
                if (this._align == "center") nx = Math.floor((this.width - cw) / 2); else if (this._align == "right") nx = this.width - cw; else nx = 0;
                if (this._valign == "middle") ny = Math.floor((this.height - ch) / 2); else if (this._valign == "bottom") ny = this.height - ch; else ny = 0;
                if (this._content2) this._content2.setXY(nx, ny); else this._content.pos(nx, ny);
            }
        }, {
            key: "clearContent",
            value: function clearContent() {
                this.clearErrorState();
                if (!this._contentItem && this._content.texture) {
                    this.freeExternal(this._content.texture);
                }
                this._content.texture = null;
                this._content.frames = null;
                if (this._content2) {
                    this._content2.dispose();
                    this._content2 = null;
                }
                this._contentItem = null;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "handleSizeChanged", this).call(this);
                if (!this._updatingLayout) this.updateLayout();
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.color;

                  case fgui.ObjectPropID.Playing:
                    return this.playing;

                  case fgui.ObjectPropID.Frame:
                    return this.frame;

                  case fgui.ObjectPropID.TimeScale:
                    return this._content.timeScale;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.color = value;
                    break;

                  case fgui.ObjectPropID.Playing:
                    this.playing = value;
                    break;

                  case fgui.ObjectPropID.Frame:
                    this.frame = value;
                    break;

                  case fgui.ObjectPropID.TimeScale:
                    this._content.timeScale = value;
                    break;

                  case fgui.ObjectPropID.DeltaTime:
                    this._content.advance(value);
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                var iv;
                this._url = buffer.readS();
                iv = buffer.readByte();
                this._align = iv == 0 ? "left" : iv == 1 ? "center" : "right";
                iv = buffer.readByte();
                this._valign = iv == 0 ? "top" : iv == 1 ? "middle" : "bottom";
                this._fill = buffer.readByte();
                this._shrinkOnly = buffer.readBool();
                this._autoSize = buffer.readBool();
                this._showErrorSign = buffer.readBool();
                this._content.playing = buffer.readBool();
                this._content.frame = buffer.getInt32();
                if (buffer.readBool()) this.color = buffer.readColorS();
                this._content.fillMethod = buffer.readByte();
                if (this._content.fillMethod != 0) {
                    this._content.fillOrigin = buffer.readByte();
                    this._content.fillClockwise = buffer.readBool();
                    this._content.fillAmount = buffer.getFloat32();
                }
                if (this._url) this.loadContent();
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            },
            set: function set(value) {
                if (this._url == value) return;
                this._url = value;
                this.loadContent();
                this.updateGear(7);
            }
        }, {
            key: "icon",
            get: function get() {
                return this._url;
            },
            set: function set(value) {
                this.url = value;
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(value) {
                if (this._align != value) {
                    this._align = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._valign;
            },
            set: function set(value) {
                if (this._valign != value) {
                    this._valign = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "fill",
            get: function get() {
                return this._fill;
            },
            set: function set(value) {
                if (this._fill != value) {
                    this._fill = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "shrinkOnly",
            get: function get() {
                return this._shrinkOnly;
            },
            set: function set(value) {
                if (this._shrinkOnly != value) {
                    this._shrinkOnly = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "playing",
            get: function get() {
                return this._content.playing;
            },
            set: function set(value) {
                if (this._content.playing != value) {
                    this._content.playing = value;
                    this.updateGear(5);
                }
            }
        }, {
            key: "frame",
            get: function get() {
                return this._content.frame;
            },
            set: function set(value) {
                if (this._content.frame != value) {
                    this._content.frame = value;
                    this.updateGear(5);
                }
            }
        }, {
            key: "color",
            get: function get() {
                return this._content.color;
            },
            set: function set(value) {
                if (this._content.color != value) {
                    this._content.color = value;
                    this.updateGear(4);
                }
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this._content.fillMethod;
            },
            set: function set(value) {
                this._content.fillMethod = value;
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this._content.fillOrigin;
            },
            set: function set(value) {
                this._content.fillOrigin = value;
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this._content.fillClockwise;
            },
            set: function set(value) {
                this._content.fillClockwise = value;
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this._content.fillAmount;
            },
            set: function set(value) {
                this._content.fillAmount = value;
            }
        }, {
            key: "showErrorSign",
            get: function get() {
                return this._showErrorSign;
            },
            set: function set(value) {
                this._showErrorSign = value;
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
        return GLoader;
    }(fgui.GObject);
    GLoader._errorSignPool = new fgui.GObjectPool();
    fgui.GLoader = GLoader;
})(fgui);

(function(fgui) {
    var GLoader3D = /* */ function(_fgui$GObject7) {
        (0, _inherits2.default)(GLoader3D, _fgui$GObject7);
        var _super14 = _createSuper(GLoader3D);
        function GLoader3D() {
            var _this12;
            (0, _classCallCheck2.default)(this, GLoader3D);
            _this12 = _super14.call(this);
            _this12._frame = 0;
            _this12._playing = true;
            _this12._url = "";
            _this12._fill = fgui.LoaderFillType.None;
            _this12._align = fgui.AlignType.Left;
            _this12._verticalAlign = fgui.VertAlignType.Top;
            _this12._color = "#FFFFFF";
            return _this12;
        }
        (0, _createClass2.default)(GLoader3D, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "createDisplayObject", this).call(this);
                this._container = new Laya.Sprite();
                this._displayObject.addChild(this._container);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "dispose", this).call(this);
            }
        }, {
            key: "loadContent",
            value: function loadContent() {
                this.clearContent();
                if (!this._url) return;
                if (fgui.ToolSet.startsWith(this._url, "ui://")) this.loadFromPackage(this._url); else this.loadExternal();
            }
        }, {
            key: "loadFromPackage",
            value: function loadFromPackage(itemURL) {
                this._contentItem = fgui.UIPackage.getItemByURL(itemURL);
                if (this._contentItem) {
                    this._contentItem = this._contentItem.getBranch();
                    this.sourceWidth = this._contentItem.width;
                    this.sourceHeight = this._contentItem.height;
                    this._contentItem = this._contentItem.getHighResolution();
                    if (this._autoSize) this.setSize(this.sourceWidth, this.sourceHeight);
                    if (this._contentItem.type == fgui.PackageItemType.Spine || this._contentItem.type == fgui.PackageItemType.DragonBones) this._contentItem.owner.getItemAssetAsync(this._contentItem, this.onLoaded.bind(this));
                }
            }
        }, {
            key: "onLoaded",
            value: function onLoaded(err, item) {
                if (this._contentItem != item) return;
                if (err) console.warn(err);
                if (!this._contentItem.templet) return;
                this.setSkeleton(this._contentItem.templet.buildArmature(1), this._contentItem.skeletonAnchor);
            }
        }, {
            key: "setSkeleton",
            value: function setSkeleton(skeleton, anchor) {
                this.url = null;
                this._content = skeleton;
                this._container.addChild(this._content);
                this._content.pos(anchor.x, anchor.y);
                fgui.ToolSet.setColorFilter(this._content, this._color);
                this.onChange();
                this.updateLayout();
            }
        }, {
            key: "onChange",
            value: function onChange() {
                if (!this._content) return;
                if (this._animationName) {
                    if (this._playing) this._content.play(this._animationName, this._loop); else this._content.play(this._animationName, false, true, this._frame, this._frame);
                } else this._content.stop();
                if (this._skinName) this._content.showSkinByName(this._skinName); else this._content.showSkinByIndex(0);
            }
        }, {
            key: "loadExternal",
            value: function loadExternal() {}
        }, {
            key: "updateLayout",
            value: function updateLayout() {
                var cw = this.sourceWidth;
                var ch = this.sourceHeight;
                if (this._autoSize) {
                    this._updatingLayout = true;
                    if (cw == 0) cw = 50;
                    if (ch == 0) ch = 30;
                    this.setSize(cw, ch);
                    this._updatingLayout = false;
                    if (cw == this._width && ch == this._height) {
                        this._container.scale(1, 1);
                        this._container.pos(0, 0);
                        return;
                    }
                }
                var sx = 1, sy = 1;
                if (this._fill != fgui.LoaderFillType.None) {
                    sx = this.width / this.sourceWidth;
                    sy = this.height / this.sourceHeight;
                    if (sx != 1 || sy != 1) {
                        if (this._fill == fgui.LoaderFillType.ScaleMatchHeight) sx = sy; else if (this._fill == fgui.LoaderFillType.ScaleMatchWidth) sy = sx; else if (this._fill == fgui.LoaderFillType.Scale) {
                            if (sx > sy) sx = sy; else sy = sx;
                        } else if (this._fill == fgui.LoaderFillType.ScaleNoBorder) {
                            if (sx > sy) sy = sx; else sx = sy;
                        }
                        if (this._shrinkOnly) {
                            if (sx > 1) sx = 1;
                            if (sy > 1) sy = 1;
                        }
                        cw = this.sourceWidth * sx;
                        ch = this.sourceHeight * sy;
                    }
                }
                this._container.scale(sx, sy);
                var nx, ny;
                if (this._align == fgui.AlignType.Center) nx = Math.floor((this.width - cw) / 2); else if (this._align == fgui.AlignType.Right) nx = this.width - cw; else nx = 0;
                if (this._verticalAlign == fgui.VertAlignType.Middle) ny = Math.floor((this.height - ch) / 2); else if (this._verticalAlign == fgui.VertAlignType.Bottom) ny = this.height - ch; else ny = 0;
                this._container.pos(nx, ny);
            }
        }, {
            key: "clearContent",
            value: function clearContent() {
                this._contentItem = null;
                if (this._content) {
                    this._container.removeChild(this._content);
                    this._content.destroy();
                    this._content = null;
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "handleSizeChanged", this).call(this);
                if (!this._updatingLayout) this.updateLayout();
            }
        }, {
            key: "handleGrayedChanged",
            value: function handleGrayedChanged() {}
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.color;

                  case fgui.ObjectPropID.Playing:
                    return this.playing;

                  case fgui.ObjectPropID.Frame:
                    return this.frame;

                  case fgui.ObjectPropID.TimeScale:
                    return 1;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.color = value;
                    break;

                  case fgui.ObjectPropID.Playing:
                    this.playing = value;
                    break;

                  case fgui.ObjectPropID.Frame:
                    this.frame = value;
                    break;

                  case fgui.ObjectPropID.TimeScale:
                    break;

                  case fgui.ObjectPropID.DeltaTime:
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GLoader3D.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                this._url = buffer.readS();
                this._align = buffer.readByte();
                this._verticalAlign = buffer.readByte();
                this._fill = buffer.readByte();
                this._shrinkOnly = buffer.readBool();
                this._autoSize = buffer.readBool();
                this._animationName = buffer.readS();
                this._skinName = buffer.readS();
                this._playing = buffer.readBool();
                this._frame = buffer.getInt32();
                this._loop = buffer.readBool();
                if (buffer.readBool()) this.color = buffer.readColorS();
                if (this._url) this.loadContent();
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            },
            set: function set(value) {
                if (this._url == value) return;
                this._url = value;
                this.loadContent();
                this.updateGear(7);
            }
        }, {
            key: "icon",
            get: function get() {
                return this._url;
            },
            set: function set(value) {
                this.url = value;
            }
        }, {
            key: "align",
            get: function get() {
                return this._align;
            },
            set: function set(value) {
                if (this._align != value) {
                    this._align = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "verticalAlign",
            get: function get() {
                return this._verticalAlign;
            },
            set: function set(value) {
                if (this._verticalAlign != value) {
                    this._verticalAlign = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "fill",
            get: function get() {
                return this._fill;
            },
            set: function set(value) {
                if (this._fill != value) {
                    this._fill = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "shrinkOnly",
            get: function get() {
                return this._shrinkOnly;
            },
            set: function set(value) {
                if (this._shrinkOnly != value) {
                    this._shrinkOnly = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this._autoSize;
            },
            set: function set(value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this.updateLayout();
                }
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            },
            set: function set(value) {
                if (this._playing != value) {
                    this._playing = value;
                    this.updateGear(5);
                    this.onChange();
                }
            }
        }, {
            key: "frame",
            get: function get() {
                return this._frame;
            },
            set: function set(value) {
                if (this._frame != value) {
                    this._frame = value;
                    this.updateGear(5);
                    this.onChange();
                }
            }
        }, {
            key: "animationName",
            get: function get() {
                return this._animationName;
            },
            set: function set(value) {
                if (this._animationName != value) {
                    this._animationName = value;
                    this.onChange();
                }
            }
        }, {
            key: "skinName",
            get: function get() {
                return this._skinName;
            },
            set: function set(value) {
                if (this._skinName != value) {
                    this._skinName = value;
                    this.onChange();
                }
            }
        }, {
            key: "loop",
            get: function get() {
                return this._loop;
            },
            set: function set(value) {
                if (this._loop != value) {
                    this._loop = value;
                    this.onChange();
                }
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(value) {
                if (this._color != value) {
                    this._color = value;
                    this.updateGear(4);
                    if (this._content) fgui.ToolSet.setColorFilter(this._content, this._color);
                }
            }
        }, {
            key: "content",
            get: function get() {
                return;
            }
        } ]);
        return GLoader3D;
    }(fgui.GObject);
    fgui.GLoader3D = GLoader3D;
})(fgui);

(function(fgui) {
    var GMovieClip = /* */ function(_fgui$GObject8) {
        (0, _inherits2.default)(GMovieClip, _fgui$GObject8);
        var _super15 = _createSuper(GMovieClip);
        function GMovieClip() {
            (0, _classCallCheck2.default)(this, GMovieClip);
            return _super15.call(this);
        }
        (0, _createClass2.default)(GMovieClip, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._movieClip = new fgui.MovieClip();
                this._movieClip.mouseEnabled = false;
                this._displayObject["$owner"] = this;
            }
        }, {
            key: "rewind",
            value: function rewind() {
                this._movieClip.rewind();
            }
        }, {
            key: "syncStatus",
            value: function syncStatus(anotherMc) {
                this._movieClip.syncStatus(anotherMc._movieClip);
            }
        }, {
            key: "advance",
            value: function advance(timeInMiniseconds) {
                this._movieClip.advance(timeInMiniseconds);
            }
        }, {
            key: "setPlaySettings",
            value: function setPlaySettings(start, end, times, endAt, endHandler) {
                this._movieClip.setPlaySettings(start, end, times, endAt, endHandler);
            }
        }, {
            key: "getProp",
            value: function getProp(index) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    return this.color;

                  case fgui.ObjectPropID.Playing:
                    return this.playing;

                  case fgui.ObjectPropID.Frame:
                    return this.frame;

                  case fgui.ObjectPropID.TimeScale:
                    return this.timeScale;

                  default:
                    return (0, _get2.default)((0, _getPrototypeOf2.default)(GMovieClip.prototype), "getProp", this).call(this, index);
                }
            }
        }, {
            key: "setProp",
            value: function setProp(index, value) {
                switch (index) {
                  case fgui.ObjectPropID.Color:
                    this.color = value;
                    break;

                  case fgui.ObjectPropID.Playing:
                    this.playing = value;
                    break;

                  case fgui.ObjectPropID.Frame:
                    this.frame = value;
                    break;

                  case fgui.ObjectPropID.TimeScale:
                    this.timeScale = value;
                    break;

                  case fgui.ObjectPropID.DeltaTime:
                    this.advance(value);
                    break;

                  default:
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GMovieClip.prototype), "setProp", this).call(this, index, value);
                    break;
                }
            }
        }, {
            key: "constructFromResource",
            value: function constructFromResource() {
                var displayItem = this.packageItem.getBranch();
                this.sourceWidth = displayItem.width;
                this.sourceHeight = displayItem.height;
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                this.setSize(this.sourceWidth, this.sourceHeight);
                displayItem = displayItem.getHighResolution();
                displayItem.load();
                this._movieClip.interval = displayItem.interval;
                this._movieClip.swing = displayItem.swing;
                this._movieClip.repeatDelay = displayItem.repeatDelay;
                this._movieClip.frames = displayItem.frames;
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GMovieClip.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 5);
                if (buffer.readBool()) this.color = buffer.readColorS();
                buffer.readByte();
                this._movieClip.frame = buffer.getInt32();
                this._movieClip.playing = buffer.readBool();
            }
        }, {
            key: "color",
            get: function get() {
                return this._movieClip.color;
            },
            set: function set(value) {
                this._movieClip.color = value;
            }
        }, {
            key: "playing",
            get: function get() {
                return this._movieClip.playing;
            },
            set: function set(value) {
                if (this._movieClip.playing != value) {
                    this._movieClip.playing = value;
                    this.updateGear(5);
                }
            }
        }, {
            key: "frame",
            get: function get() {
                return this._movieClip.frame;
            },
            set: function set(value) {
                if (this._movieClip.frame != value) {
                    this._movieClip.frame = value;
                    this.updateGear(5);
                }
            }
        }, {
            key: "timeScale",
            get: function get() {
                return this._movieClip.timeScale;
            },
            set: function set(value) {
                this._movieClip.timeScale = value;
            }
        } ]);
        return GMovieClip;
    }(fgui.GObject);
    fgui.GMovieClip = GMovieClip;
})(fgui);

(function(fgui) {
    var GProgressBar = /* */ function(_fgui$GComponent5) {
        (0, _inherits2.default)(GProgressBar, _fgui$GComponent5);
        var _super16 = _createSuper(GProgressBar);
        function GProgressBar() {
            var _this13;
            (0, _classCallCheck2.default)(this, GProgressBar);
            _this13 = _super16.call(this);
            _this13._min = 0;
            _this13._max = 0;
            _this13._value = 0;
            _this13._barMaxWidth = 0;
            _this13._barMaxHeight = 0;
            _this13._barMaxWidthDelta = 0;
            _this13._barMaxHeightDelta = 0;
            _this13._barStartX = 0;
            _this13._barStartY = 0;
            _this13._titleType = fgui.ProgressTitleType.Percent;
            _this13._value = 50;
            _this13._max = 100;
            return _this13;
        }
        (0, _createClass2.default)(GProgressBar, [ {
            key: "tweenValue",
            value: function tweenValue(value, duration) {
                var oldValule;
                var tweener = fgui.GTween.getTween(this, this.update);
                if (tweener) {
                    oldValule = tweener.value.x;
                    tweener.kill();
                } else oldValule = this._value;
                this._value = value;
                return fgui.GTween.to(oldValule, this._value, duration).setTarget(this, this.update).setEase(fgui.EaseType.Linear);
            }
        }, {
            key: "update",
            value: function update(newValue) {
                var percent = fgui.ToolSet.clamp01((newValue - this._min) / (this._max - this._min));
                if (this._titleObject) {
                    switch (this._titleType) {
                      case fgui.ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;

                      case fgui.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                        break;

                      case fgui.ProgressTitleType.Value:
                        this._titleObject.text = "" + Math.floor(newValue);
                        break;

                      case fgui.ProgressTitleType.Max:
                        this._titleObject.text = "" + Math.floor(this._max);
                        break;
                    }
                }
                var fullWidth = this.width - this._barMaxWidthDelta;
                var fullHeight = this.height - this._barMaxHeightDelta;
                if (!this._reverse) {
                    if (this._barObjectH) {
                        if (!this.setFillAmount(this._barObjectH, percent)) this._barObjectH.width = Math.round(fullWidth * percent);
                    }
                    if (this._barObjectV) {
                        if (!this.setFillAmount(this._barObjectV, percent)) this._barObjectV.height = Math.round(fullHeight * percent);
                    }
                } else {
                    if (this._barObjectH) {
                        if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                            this._barObjectH.width = Math.round(fullWidth * percent);
                            this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                        }
                    }
                    if (this._barObjectV) {
                        if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                            this._barObjectV.height = Math.round(fullHeight * percent);
                            this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                        }
                    }
                }
                if (this._aniObject) this._aniObject.setProp(fgui.ObjectPropID.Frame, Math.floor(percent * 100));
            }
        }, {
            key: "setFillAmount",
            value: function setFillAmount(bar, percent) {
                if ((bar instanceof fgui.GImage || bar instanceof fgui.GLoader) && bar.fillMethod != fgui.FillMethod.None) {
                    bar.fillAmount = percent;
                    return true;
                } else return false;
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                buffer.seek(0, 6);
                this._titleType = buffer.readByte();
                this._reverse = buffer.readBool();
                this._titleObject = this.getChild("title");
                this._barObjectH = this.getChild("bar");
                this._barObjectV = this.getChild("bar_v");
                this._aniObject = this.getChild("ani");
                if (this._barObjectH) {
                    this._barMaxWidth = this._barObjectH.width;
                    this._barMaxWidthDelta = this.width - this._barMaxWidth;
                    this._barStartX = this._barObjectH.x;
                }
                if (this._barObjectV) {
                    this._barMaxHeight = this._barObjectV.height;
                    this._barMaxHeightDelta = this.height - this._barMaxHeight;
                    this._barStartY = this._barObjectV.y;
                }
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GProgressBar.prototype), "handleSizeChanged", this).call(this);
                if (this._barObjectH) this._barMaxWidth = this.width - this._barMaxWidthDelta;
                if (this._barObjectV) this._barMaxHeight = this.height - this._barMaxHeightDelta;
                if (!this._underConstruct) this.update(this._value);
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GProgressBar.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!buffer.seek(beginPos, 6)) {
                    this.update(this._value);
                    return;
                }
                if (buffer.readByte() != this.packageItem.objectType) {
                    this.update(this._value);
                    return;
                }
                this._value = buffer.getInt32();
                this._max = buffer.getInt32();
                if (buffer.version >= 2) this._min = buffer.getInt32();
                this.update(this._value);
            }
        }, {
            key: "titleType",
            get: function get() {
                return this._titleType;
            },
            set: function set(value) {
                if (this._titleType != value) {
                    this._titleType = value;
                    this.update(value);
                }
            }
        }, {
            key: "min",
            get: function get() {
                return this._min;
            },
            set: function set(value) {
                if (this._min != value) {
                    this._min = value;
                    this.update(this._value);
                }
            }
        }, {
            key: "max",
            get: function get() {
                return this._max;
            },
            set: function set(value) {
                if (this._max != value) {
                    this._max = value;
                    this.update(this._value);
                }
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(value) {
                if (this._value != value) {
                    fgui.GTween.kill(this, false, this.update);
                    this._value = value;
                    this.update(value);
                }
            }
        } ]);
        return GProgressBar;
    }(fgui.GComponent);
    fgui.GProgressBar = GProgressBar;
})(fgui);

(function(fgui) {
    var GRichTextField = /* */ function(_fgui$GTextField2) {
        (0, _inherits2.default)(GRichTextField, _fgui$GTextField2);
        var _super17 = _createSuper(GRichTextField);
        function GRichTextField() {
            var _this14;
            (0, _classCallCheck2.default)(this, GRichTextField);
            _this14 = _super17.call(this);
            _this14._text = "";
            return _this14;
        }
        (0, _createClass2.default)(GRichTextField, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._div = new Laya.HTMLDivElement();
                this._displayObject.mouseEnabled = true;
                this._displayObject["$owner"] = this;
            }
        }, {
            key: "refresh",
            value: function refresh() {
                if (this._text.length > 0 && this._div._refresh) this._div._refresh();
            }
        }, {
            key: "updateAutoSize",
            value: function updateAutoSize() {
                this._div.style.wordWrap = !this._widthAutoSize;
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                if (this._updatingSize) return;
                this._div.size(this._width, this._height);
                this._div.style.width = this._width;
                this._div.style.height = this._height;
            }
        }, {
            key: "div",
            get: function get() {
                return this._div;
            }
        }, {
            key: "text",
            set: function set(value) {
                this._text = value;
                var text2 = this._text;
                if (this._templateVars) text2 = this.parseTemplate(text2);
                try {
                    if (this._ubbEnabled) this._div.innerHTML = fgui.UBBParser.inst.parse(text2); else this._div.innerHTML = text2;
                    if (this._widthAutoSize || this._heightAutoSize) {
                        var w, h = 0;
                        if (this._widthAutoSize) {
                            w = this._div.contextWidth;
                            if (w > 0) w += 8;
                        } else w = this._width;
                        if (this._heightAutoSize) h = this._div.contextHeight; else h = this._height;
                        this._updatingSize = true;
                        this.setSize(w, h);
                        this._updatingSize = false;
                    }
                } catch (err) {
                    console.log("laya reports html error:" + err);
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
            set: function set(value) {
                if (value) this._div.style.font = value; else this._div.style.font = fgui.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._div.style.fontSize;
            },
            set: function set(value) {
                this._div.style.fontSize = value;
            }
        }, {
            key: "color",
            get: function get() {
                return this._div.style.color;
            },
            set: function set(value) {
                if (this._div.style.color != value) {
                    this._div.style.color = value;
                    this.refresh();
                    this.updateGear(4);
                }
            }
        }, {
            key: "align",
            get: function get() {
                return this._div.style.align;
            },
            set: function set(value) {
                if (this._div.style.align != value) {
                    this._div.style.align = value;
                    this.refresh();
                }
            }
        }, {
            key: "valign",
            get: function get() {
                return this._div.style.valign;
            },
            set: function set(value) {
                if (this._div.style.valign != value) {
                    this._div.style.valign = value;
                    this.refresh();
                }
            }
        }, {
            key: "leading",
            get: function get() {
                return this._div.style.leading;
            },
            set: function set(value) {
                if (this._div.style.leading != value) {
                    this._div.style.leading = value;
                    this.refresh();
                }
            }
        }, {
            key: "bold",
            get: function get() {
                return this._div.style.bold;
            },
            set: function set(value) {
                if (this._div.style.bold != value) {
                    this._div.style.bold = value;
                    this.refresh();
                }
            }
        }, {
            key: "italic",
            get: function get() {
                return this._div.style.italic;
            },
            set: function set(value) {
                if (this._div.style.italic != value) {
                    this._div.style.italic = value;
                    this.refresh();
                }
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._div.style.stroke;
            },
            set: function set(value) {
                if (this._div.style.stroke != value) {
                    this._div.style.stroke = value;
                    this.refresh();
                }
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._div.style.strokeColor;
            },
            set: function set(value) {
                if (this._div.style.strokeColor != value) {
                    this._div.style.strokeColor = value;
                    this.refresh();
                    this.updateGear(4);
                }
            }
        }, {
            key: "ubbEnabled",
            set: function set(value) {
                this._ubbEnabled = value;
            },
            get: function get() {
                return this._ubbEnabled;
            }
        }, {
            key: "textWidth",
            get: function get() {
                var w = this._div.contextWidth;
                if (w > 0) w += 8;
                return w;
            }
        } ]);
        return GRichTextField;
    }(fgui.GTextField);
    fgui.GRichTextField = GRichTextField;
})(fgui);

(function(fgui) {
    var GRoot = /* */ function(_fgui$GComponent6) {
        (0, _inherits2.default)(GRoot, _fgui$GComponent6);
        var _super18 = _createSuper(GRoot);
        function GRoot() {
            var _this15;
            (0, _classCallCheck2.default)(this, GRoot);
            _this15 = _super18.call(this);
            if (!GRoot._inst) GRoot._inst = (0, _assertThisInitialized2.default)(_this15);
            _this15.opaque = false;
            _this15._popupStack = [];
            _this15._justClosedPopups = [];
            _this15.displayObject.once(Laya.Event.DISPLAY, (0, _assertThisInitialized2.default)(_this15), _this15.__addedToStage);
            return _this15;
        }
        (0, _createClass2.default)(GRoot, [ {
            key: "showWindow",
            value: function showWindow(win) {
                this.addChild(win);
                win.requestFocus();
                if (win.x > this.width) win.x = this.width - win.width; else if (win.x + win.width < 0) win.x = 0;
                if (win.y > this.height) win.y = this.height - win.height; else if (win.y + win.height < 0) win.y = 0;
                this.adjustModalLayer();
            }
        }, {
            key: "hideWindow",
            value: function hideWindow(win) {
                win.hide();
            }
        }, {
            key: "hideWindowImmediately",
            value: function hideWindowImmediately(win) {
                if (win.parent == this) this.removeChild(win);
                this.adjustModalLayer();
            }
        }, {
            key: "bringToFront",
            value: function bringToFront(win) {
                var cnt = this.numChildren;
                var i;
                if (this._modalLayer.parent && !win.modal) i = this.getChildIndex(this._modalLayer) - 1; else i = cnt - 1;
                for (;i >= 0; i--) {
                    var g = this.getChildAt(i);
                    if (g == win) return;
                    if (g instanceof fgui.Window) break;
                }
                if (i >= 0) this.setChildIndex(win, i);
            }
        }, {
            key: "showModalWait",
            value: function showModalWait(msg) {
                if (fgui.UIConfig.globalModalWaiting != null) {
                    if (this._modalWaitPane == null) this._modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.globalModalWaiting);
                    this._modalWaitPane.setSize(this.width, this.height);
                    this._modalWaitPane.addRelation(this, fgui.RelationType.Size);
                    this.addChild(this._modalWaitPane);
                    this._modalWaitPane.text = msg;
                }
            }
        }, {
            key: "closeModalWait",
            value: function closeModalWait() {
                if (this._modalWaitPane && this._modalWaitPane.parent) this.removeChild(this._modalWaitPane);
            }
        }, {
            key: "closeAllExceptModals",
            value: function closeAllExceptModals() {
                var arr = this._children.slice();
                var cnt = arr.length;
                for (var i = 0; i < cnt; i++) {
                    var g = arr[i];
                    if (g instanceof fgui.Window && !g.modal) g.hide();
                }
            }
        }, {
            key: "closeAllWindows",
            value: function closeAllWindows() {
                var arr = this._children.slice();
                var cnt = arr.length;
                for (var i = 0; i < cnt; i++) {
                    var g = arr[i];
                    if (g instanceof fgui.Window) g.hide();
                }
            }
        }, {
            key: "getTopWindow",
            value: function getTopWindow() {
                var cnt = this.numChildren;
                for (var i = cnt - 1; i >= 0; i--) {
                    var g = this.getChildAt(i);
                    if (g instanceof fgui.Window) {
                        return g;
                    }
                }
                return null;
            }
        }, {
            key: "showPopup",
            value: function showPopup(popup, target, dir) {
                if (this._popupStack.length > 0) {
                    var k = this._popupStack.indexOf(popup);
                    if (k != -1) {
                        for (var i = this._popupStack.length - 1; i >= k; i--) {
                            this.removeChild(this._popupStack.pop());
                        }
                    }
                }
                this._popupStack.push(popup);
                if (target) {
                    var p = target;
                    while (p) {
                        if (p.parent == this) {
                            if (popup.sortingOrder < p.sortingOrder) {
                                popup.sortingOrder = p.sortingOrder;
                            }
                            break;
                        }
                        p = p.parent;
                    }
                }
                this.addChild(popup);
                this.adjustModalLayer();
                var pos;
                var sizeW = 0, sizeH = 0;
                if (target) {
                    pos = target.localToGlobal();
                    sizeW = target.width;
                    sizeH = target.height;
                } else {
                    pos = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                }
                var xx, yy;
                xx = pos.x;
                if (xx + popup.width > this.width) xx = xx + sizeW - popup.width;
                yy = pos.y + sizeH;
                if ((dir === undefined || dir === fgui.PopupDirection.Auto) && pos.y + popup.height > this.height || dir === false || dir === fgui.PopupDirection.Up) {
                    yy = pos.y - popup.height - 1;
                    if (yy < 0) {
                        yy = 0;
                        xx += sizeW / 2;
                    }
                }
                popup.x = xx;
                popup.y = yy;
            }
        }, {
            key: "togglePopup",
            value: function togglePopup(popup, target, dir) {
                if (this._justClosedPopups.indexOf(popup) != -1) return;
                this.showPopup(popup, target, dir);
            }
        }, {
            key: "hidePopup",
            value: function hidePopup(popup) {
                if (popup) {
                    var k = this._popupStack.indexOf(popup);
                    if (k != -1) {
                        for (var i = this._popupStack.length - 1; i >= k; i--) {
                            this.closePopup(this._popupStack.pop());
                        }
                    }
                } else {
                    var cnt = this._popupStack.length;
                    for (i = cnt - 1; i >= 0; i--) {
                        this.closePopup(this._popupStack[i]);
                    }
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "closePopup",
            value: function closePopup(target) {
                if (target.parent) {
                    if (target instanceof fgui.Window) target.hide(); else this.removeChild(target);
                }
            }
        }, {
            key: "showTooltips",
            value: function showTooltips(msg) {
                if (this._defaultTooltipWin == null) {
                    var resourceURL = fgui.UIConfig.tooltipsWin;
                    if (!resourceURL) {
                        Laya.Log.print("UIConfig.tooltipsWin not defined");
                        return;
                    }
                    this._defaultTooltipWin = fgui.UIPackage.createObjectFromURL(resourceURL);
                }
                this._defaultTooltipWin.text = msg;
                this.showTooltipsWin(this._defaultTooltipWin);
            }
        }, {
            key: "showTooltipsWin",
            value: function showTooltipsWin(tooltipWin, position) {
                this.hideTooltips();
                this._tooltipWin = tooltipWin;
                var xx = 0;
                var yy = 0;
                if (position == null) {
                    xx = Laya.stage.mouseX + 10;
                    yy = Laya.stage.mouseY + 20;
                } else {
                    xx = position.x;
                    yy = position.y;
                }
                var pt = this.globalToLocal(xx, yy);
                xx = pt.x;
                yy = pt.y;
                if (xx + this._tooltipWin.width > this.width) {
                    xx = xx - this._tooltipWin.width - 1;
                    if (xx < 0) xx = 10;
                }
                if (yy + this._tooltipWin.height > this.height) {
                    yy = yy - this._tooltipWin.height - 1;
                    if (xx - this._tooltipWin.width - 1 > 0) xx = xx - this._tooltipWin.width - 1;
                    if (yy < 0) yy = 10;
                }
                this._tooltipWin.x = xx;
                this._tooltipWin.y = yy;
                this.addChild(this._tooltipWin);
            }
        }, {
            key: "hideTooltips",
            value: function hideTooltips() {
                if (this._tooltipWin) {
                    if (this._tooltipWin.parent) this.removeChild(this._tooltipWin);
                    this._tooltipWin = null;
                }
            }
        }, {
            key: "setFocus",
            value: function setFocus(value) {}
        }, {
            key: "playOneShotSound",
            value: function playOneShotSound(url, volumeScale) {
                if (fgui.ToolSet.startsWith(url, "ui://")) return;
                Laya.SoundManager.playSound(url);
            }
        }, {
            key: "adjustModalLayer",
            value: function adjustModalLayer() {
                var cnt = this.numChildren;
                if (this._modalWaitPane != null && this._modalWaitPane.parent != null) this.setChildIndex(this._modalWaitPane, cnt - 1);
                for (var i = cnt - 1; i >= 0; i--) {
                    var g = this.getChildAt(i);
                    if (g instanceof fgui.Window && g.modal) {
                        if (this._modalLayer.parent == null) this.addChildAt(this._modalLayer, i); else this.setChildIndexBefore(this._modalLayer, i);
                        return;
                    }
                }
                if (this._modalLayer.parent) this.removeChild(this._modalLayer);
            }
        }, {
            key: "__addedToStage",
            value: function __addedToStage() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.__stageMouseDown);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__stageMouseUp);
                this._modalLayer = new fgui.GGraph();
                this._modalLayer.setSize(this.width, this.height);
                this._modalLayer.drawRect(0, null, fgui.UIConfig.modalLayerColor);
                this._modalLayer.addRelation(this, fgui.RelationType.Size);
                this.displayObject.stage.on(Laya.Event.RESIZE, this, this.__winResize);
                this.__winResize();
            }
        }, {
            key: "checkPopups",
            value: function checkPopups(clickTarget) {
                if (this._checkPopups) return;
                this._checkPopups = true;
                this._justClosedPopups.length = 0;
                if (this._popupStack.length > 0) {
                    var mc = clickTarget;
                    while (mc != this.displayObject.stage && mc) {
                        if (mc["$owner"]) {
                            var pindex = this._popupStack.indexOf(mc["$owner"]);
                            if (pindex != -1) {
                                for (var i = this._popupStack.length - 1; i > pindex; i--) {
                                    var popup = this._popupStack.pop();
                                    this.closePopup(popup);
                                    this._justClosedPopups.push(popup);
                                }
                                return;
                            }
                        }
                        mc = mc.parent;
                    }
                    var cnt = this._popupStack.length;
                    for (i = cnt - 1; i >= 0; i--) {
                        popup = this._popupStack[i];
                        this.closePopup(popup);
                        this._justClosedPopups.push(popup);
                    }
                    this._popupStack.length = 0;
                }
            }
        }, {
            key: "__stageMouseDown",
            value: function __stageMouseDown(evt) {
                if (this._tooltipWin) this.hideTooltips();
                this.checkPopups(evt.target);
            }
        }, {
            key: "__stageMouseUp",
            value: function __stageMouseUp() {
                this._checkPopups = false;
            }
        }, {
            key: "__winResize",
            value: function __winResize() {
                this.setSize(Laya.stage.width, Laya.stage.height);
                this.updateContentScaleLevel();
            }
        }, {
            key: "updateContentScaleLevel",
            value: function updateContentScaleLevel() {
                var mat = Laya.stage._canvasTransform;
                var ss = Math.max(mat.getScaleX(), mat.getScaleY());
                if (ss >= 3.5) GRoot.contentScaleLevel = 3; else if (ss >= 2.5) GRoot.contentScaleLevel = 2; else if (ss >= 1.5) GRoot.contentScaleLevel = 1; else GRoot.contentScaleLevel = 0;
            }
        }, {
            key: "modalLayer",
            get: function get() {
                return this._modalLayer;
            }
        }, {
            key: "hasModalWindow",
            get: function get() {
                return this._modalLayer.parent != null;
            }
        }, {
            key: "modalWaiting",
            get: function get() {
                return this._modalWaitPane && this._modalWaitPane.inContainer;
            }
        }, {
            key: "hasAnyPopup",
            get: function get() {
                return this._popupStack.length != 0;
            }
        }, {
            key: "focus",
            get: function get() {
                return null;
            },
            set: function set(value) {
                this.setFocus(value);
            }
        }, {
            key: "volumeScale",
            get: function get() {
                return Laya.SoundManager.soundVolume;
            },
            set: function set(value) {
                Laya.SoundManager.soundVolume = value;
            }
        } ], [ {
            key: "inst",
            get: function get() {
                if (!GRoot._inst) new GRoot();
                return GRoot._inst;
            }
        } ]);
        return GRoot;
    }(fgui.GComponent);
    GRoot.contentScaleLevel = 0;
    fgui.GRoot = GRoot;
})(fgui);

(function(fgui) {
    var GScrollBar = /* */ function(_fgui$GComponent7) {
        (0, _inherits2.default)(GScrollBar, _fgui$GComponent7);
        var _super19 = _createSuper(GScrollBar);
        function GScrollBar() {
            var _this16;
            (0, _classCallCheck2.default)(this, GScrollBar);
            _this16 = _super19.call(this);
            _this16._dragOffset = new Laya.Point();
            _this16._scrollPerc = 0;
            return _this16;
        }
        (0, _createClass2.default)(GScrollBar, [ {
            key: "setScrollPane",
            value: function setScrollPane(target, vertical) {
                this._target = target;
                this._vertical = vertical;
            }
        }, {
            key: "setDisplayPerc",
            value: function setDisplayPerc(value) {
                if (this._vertical) {
                    if (!this._fixedGripSize) this._grip.height = Math.floor(value * this._bar.height);
                    this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
                } else {
                    if (!this._fixedGripSize) this._grip.width = Math.floor(value * this._bar.width);
                    this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
                }
                this._grip.visible = value != 0 && value != 1;
            }
        }, {
            key: "setScrollPerc",
            value: function setScrollPerc(val) {
                this._scrollPerc = val;
                if (this._vertical) this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc; else this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                buffer.seek(0, 6);
                this._fixedGripSize = buffer.readBool();
                this._grip = this.getChild("grip");
                if (!this._grip) {
                    Laya.Log.print("需要定义grip");
                    return;
                }
                this._bar = this.getChild("bar");
                if (!this._bar) {
                    Laya.Log.print("需要定义bar");
                    return;
                }
                this._arrowButton1 = this.getChild("arrow1");
                this._arrowButton2 = this.getChild("arrow2");
                this._grip.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown);
                if (this._arrowButton1) this._arrowButton1.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton1Click);
                if (this._arrowButton2) this._arrowButton2.on(Laya.Event.MOUSE_DOWN, this, this.__arrowButton2Click);
                this.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
            }
        }, {
            key: "__gripMouseDown",
            value: function __gripMouseDown(evt) {
                evt.stopPropagation();
                this._gripDragging = true;
                this._target.updateScrollBarVisible();
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
                this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, this._dragOffset);
                this._dragOffset.x -= this._grip.x;
                this._dragOffset.y -= this._grip.y;
            }
        }, {
            key: "__gripMouseMove",
            value: function __gripMouseMove() {
                if (!this.onStage) return;
                var pt = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
                if (this._vertical) {
                    var curY = pt.y - this._dragOffset.y;
                    this._target.setPercY((curY - this._bar.y) / (this._bar.height - this._grip.height), false);
                } else {
                    var curX = pt.x - this._dragOffset.x;
                    this._target.setPercX((curX - this._bar.x) / (this._bar.width - this._grip.width), false);
                }
            }
        }, {
            key: "__gripMouseUp",
            value: function __gripMouseUp(evt) {
                if (!this.onStage) return;
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
                this._gripDragging = false;
                this._target.updateScrollBarVisible();
            }
        }, {
            key: "__arrowButton1Click",
            value: function __arrowButton1Click(evt) {
                evt.stopPropagation();
                if (this._vertical) this._target.scrollUp(); else this._target.scrollLeft();
            }
        }, {
            key: "__arrowButton2Click",
            value: function __arrowButton2Click(evt) {
                evt.stopPropagation();
                if (this._vertical) this._target.scrollDown(); else this._target.scrollRight();
            }
        }, {
            key: "__barMouseDown",
            value: function __barMouseDown(evt) {
                var pt = this._grip.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
                if (this._vertical) {
                    if (pt.y < 0) this._target.scrollUp(4); else this._target.scrollDown(4);
                } else {
                    if (pt.x < 0) this._target.scrollLeft(4); else this._target.scrollRight(4);
                }
            }
        }, {
            key: "minSize",
            get: function get() {
                if (this._vertical) return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0); else return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
            }
        }, {
            key: "gripDragging",
            get: function get() {
                return this._gripDragging;
            }
        } ]);
        return GScrollBar;
    }(fgui.GComponent);
    fgui.GScrollBar = GScrollBar;
    var s_vec2 = new Laya.Point();
})(fgui);

(function(fgui) {
    var GSlider = /* */ function(_fgui$GComponent8) {
        (0, _inherits2.default)(GSlider, _fgui$GComponent8);
        var _super20 = _createSuper(GSlider);
        function GSlider() {
            var _this17;
            (0, _classCallCheck2.default)(this, GSlider);
            _this17 = _super20.call(this);
            _this17._min = 0;
            _this17._max = 0;
            _this17._value = 0;
            _this17._barMaxWidth = 0;
            _this17._barMaxHeight = 0;
            _this17._barMaxWidthDelta = 0;
            _this17._barMaxHeightDelta = 0;
            _this17._clickPercent = 0;
            _this17._barStartX = 0;
            _this17._barStartY = 0;
            _this17.changeOnClick = true;
            _this17.canDrag = true;
            _this17._titleType = fgui.ProgressTitleType.Percent;
            _this17._value = 50;
            _this17._max = 100;
            _this17._clickPos = new Laya.Point();
            return _this17;
        }
        (0, _createClass2.default)(GSlider, [ {
            key: "update",
            value: function update() {
                this.updateWithPercent((this._value - this._min) / (this._max - this._min));
            }
        }, {
            key: "updateWithPercent",
            value: function updateWithPercent(percent, evt) {
                percent = fgui.ToolSet.clamp01(percent);
                if (evt) {
                    var newValue = fgui.ToolSet.clamp(this._min + (this._max - this._min) * percent, this._min, this._max);
                    if (this._wholeNumbers) {
                        newValue = Math.round(newValue);
                        percent = fgui.ToolSet.clamp01((newValue - this._min) / (this._max - this._min));
                    }
                    if (newValue != this._value) {
                        this._value = newValue;
                        fgui.Events.dispatch(fgui.Events.STATE_CHANGED, this.displayObject, evt);
                    }
                }
                if (this._titleObject) {
                    switch (this._titleType) {
                      case fgui.ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;

                      case fgui.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = this._value + "/" + this._max;
                        break;

                      case fgui.ProgressTitleType.Value:
                        this._titleObject.text = "" + this._value;
                        break;

                      case fgui.ProgressTitleType.Max:
                        this._titleObject.text = "" + this._max;
                        break;
                    }
                }
                var fullWidth = this.width - this._barMaxWidthDelta;
                var fullHeight = this.height - this._barMaxHeightDelta;
                if (!this._reverse) {
                    if (this._barObjectH) this._barObjectH.width = Math.round(fullWidth * percent);
                    if (this._barObjectV) this._barObjectV.height = Math.round(fullHeight * percent);
                } else {
                    if (this._barObjectH) {
                        this._barObjectH.width = Math.round(fullWidth * percent);
                        this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                    }
                    if (this._barObjectV) {
                        this._barObjectV.height = Math.round(fullHeight * percent);
                        this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                    }
                }
            }
        }, {
            key: "constructExtension",
            value: function constructExtension(buffer) {
                buffer.seek(0, 6);
                this._titleType = buffer.readByte();
                this._reverse = buffer.readBool();
                if (buffer.version >= 2) {
                    this._wholeNumbers = buffer.readBool();
                    this.changeOnClick = buffer.readBool();
                }
                this._titleObject = this.getChild("title");
                this._barObjectH = this.getChild("bar");
                this._barObjectV = this.getChild("bar_v");
                this._gripObject = this.getChild("grip");
                if (this._barObjectH) {
                    this._barMaxWidth = this._barObjectH.width;
                    this._barMaxWidthDelta = this.width - this._barMaxWidth;
                    this._barStartX = this._barObjectH.x;
                }
                if (this._barObjectV) {
                    this._barMaxHeight = this._barObjectV.height;
                    this._barMaxHeightDelta = this.height - this._barMaxHeight;
                    this._barStartY = this._barObjectV.y;
                }
                if (this._gripObject) {
                    this._gripObject.on(Laya.Event.MOUSE_DOWN, this, this.__gripMouseDown);
                }
                this.displayObject.on(Laya.Event.MOUSE_DOWN, this, this.__barMouseDown);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GSlider.prototype), "handleSizeChanged", this).call(this);
                if (this._barObjectH) this._barMaxWidth = this.width - this._barMaxWidthDelta;
                if (this._barObjectV) this._barMaxHeight = this.height - this._barMaxHeightDelta;
                if (!this._underConstruct) this.update();
            }
        }, {
            key: "setup_afterAdd",
            value: function setup_afterAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GSlider.prototype), "setup_afterAdd", this).call(this, buffer, beginPos);
                if (!buffer.seek(beginPos, 6)) {
                    this.update();
                    return;
                }
                if (buffer.readByte() != this.packageItem.objectType) {
                    this.update();
                    return;
                }
                this._value = buffer.getInt32();
                this._max = buffer.getInt32();
                if (buffer.version >= 2) this._min = buffer.getInt32();
                this.update();
            }
        }, {
            key: "__gripMouseDown",
            value: function __gripMouseDown(evt) {
                this.canDrag = true;
                evt.stopPropagation();
                this._clickPos = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY);
                this._clickPercent = fgui.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__gripMouseMove",
            value: function __gripMouseMove(evt) {
                if (!this.canDrag) {
                    return;
                }
                var pt = this.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
                var deltaX = pt.x - this._clickPos.x;
                var deltaY = pt.y - this._clickPos.y;
                if (this._reverse) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }
                var percent;
                if (this._barObjectH) percent = this._clickPercent + deltaX / this._barMaxWidth; else percent = this._clickPercent + deltaY / this._barMaxHeight;
                this.updateWithPercent(percent, evt);
            }
        }, {
            key: "__gripMouseUp",
            value: function __gripMouseUp(evt) {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.__gripMouseMove);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.__gripMouseUp);
            }
        }, {
            key: "__barMouseDown",
            value: function __barMouseDown(evt) {
                if (!this.changeOnClick) return;
                var pt = this._gripObject.globalToLocal(evt.stageX, evt.stageY, s_vec2);
                var percent = fgui.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
                var delta;
                if (this._barObjectH) delta = pt.x / this._barMaxWidth;
                if (this._barObjectV) delta = pt.y / this._barMaxHeight;
                if (this._reverse) percent -= delta; else percent += delta;
                this.updateWithPercent(percent, evt);
            }
        }, {
            key: "titleType",
            get: function get() {
                return this._titleType;
            },
            set: function set(value) {
                this._titleType = value;
            }
        }, {
            key: "wholeNumbers",
            get: function get() {
                return this._wholeNumbers;
            },
            set: function set(value) {
                if (this._wholeNumbers != value) {
                    this._wholeNumbers = value;
                    this.update();
                }
            }
        }, {
            key: "min",
            get: function get() {
                return this._min;
            },
            set: function set(value) {
                if (this._min != value) {
                    this._min = value;
                    this.update();
                }
            }
        }, {
            key: "max",
            get: function get() {
                return this._max;
            },
            set: function set(value) {
                if (this._max != value) {
                    this._max = value;
                    this.update();
                }
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(value) {
                if (this._value != value) {
                    this._value = value;
                    this.update();
                }
            }
        } ]);
        return GSlider;
    }(fgui.GComponent);
    fgui.GSlider = GSlider;
    var s_vec2 = new Laya.Point();
})(fgui);

(function(fgui) {
    var GTextInput = /* */ function(_fgui$GTextField3) {
        (0, _inherits2.default)(GTextInput, _fgui$GTextField3);
        var _super21 = _createSuper(GTextInput);
        function GTextInput() {
            (0, _classCallCheck2.default)(this, GTextInput);
            return _super21.call(this);
        }
        (0, _createClass2.default)(GTextInput, [ {
            key: "createDisplayObject",
            value: function createDisplayObject() {
                this._displayObject = this._input = new Laya.Input();
                this._displayObject.mouseEnabled = true;
                this._displayObject["$owner"] = this;
            }
        }, {
            key: "requestFocus",
            value: function requestFocus() {
                this._input.focus = true;
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTextInput.prototype), "requestFocus", this).call(this);
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                this._input.size(this._width, this._height);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTextInput.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 4);
                var str = buffer.readS();
                if (str != null) this.promptText = str;
                str = buffer.readS();
                if (str != null) this._input.restrict = str;
                var iv = buffer.getInt32();
                if (iv != 0) this._input.maxChars = iv;
                iv = buffer.getInt32();
                if (iv != 0) {
                    if (iv == 4) this.keyboardType = Laya.Input.TYPE_NUMBER; else if (iv == 3) this.keyboardType = Laya.Input.TYPE_URL;
                }
                if (buffer.readBool()) this.password = true;
            }
        }, {
            key: "nativeInput",
            get: function get() {
                return this._input;
            }
        }, {
            key: "text",
            set: function set(value) {
                this._input.text = value;
            },
            get: function get() {
                return this._input.text;
            }
        }, {
            key: "font",
            get: function get() {
                return this._input.font;
            },
            set: function set(value) {
                if (value) this._input.font = value; else this._input.font = fgui.UIConfig.defaultFont;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._input.fontSize;
            },
            set: function set(value) {
                this._input.fontSize = value;
            }
        }, {
            key: "color",
            get: function get() {
                return this._input.color;
            },
            set: function set(value) {
                this._input.color = value;
            }
        }, {
            key: "align",
            get: function get() {
                return this._input.align;
            },
            set: function set(value) {
                this._input.align = value;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._input.valign;
            },
            set: function set(value) {
                this._input.valign = value;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._input.leading;
            },
            set: function set(value) {
                this._input.leading = value;
            }
        }, {
            key: "bold",
            get: function get() {
                return this._input.bold;
            },
            set: function set(value) {
                this._input.bold = value;
            }
        }, {
            key: "italic",
            get: function get() {
                return this._input.italic;
            },
            set: function set(value) {
                this._input.italic = value;
            }
        }, {
            key: "singleLine",
            get: function get() {
                return !this._input.multiline;
            },
            set: function set(value) {
                this._input.multiline = !value;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._input.stroke;
            },
            set: function set(value) {
                this._input.stroke = value;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._input.strokeColor;
            },
            set: function set(value) {
                this._input.strokeColor = value;
                this.updateGear(4);
            }
        }, {
            key: "password",
            get: function get() {
                return this._input.type == "password";
            },
            set: function set(value) {
                if (value) this._input.type = "password"; else this._input.type = "text";
            }
        }, {
            key: "keyboardType",
            get: function get() {
                return this._input.type;
            },
            set: function set(value) {
                this._input.type = value;
            }
        }, {
            key: "editable",
            set: function set(value) {
                this._input.editable = value;
            },
            get: function get() {
                return this._input.editable;
            }
        }, {
            key: "maxLength",
            set: function set(value) {
                this._input.maxChars = value;
            },
            get: function get() {
                return this._input.maxChars;
            }
        }, {
            key: "promptText",
            set: function set(value) {
                this._prompt = value;
                var str = fgui.UBBParser.inst.parse(value, true);
                this._input.prompt = str;
                if (fgui.UBBParser.inst.lastColor) this._input.promptColor = fgui.UBBParser.inst.lastColor;
            },
            get: function get() {
                return this._prompt;
            }
        }, {
            key: "restrict",
            set: function set(value) {
                this._input.restrict = value;
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
        return GTextInput;
    }(fgui.GTextField);
    fgui.GTextInput = GTextInput;
})(fgui);

(function(fgui) {
    var GTree = /* */ function(_fgui$GList) {
        (0, _inherits2.default)(GTree, _fgui$GList);
        var _super22 = _createSuper(GTree);
        function GTree() {
            var _this18;
            (0, _classCallCheck2.default)(this, GTree);
            _this18 = _super22.call(this);
            _this18._indent = 15;
            _this18._rootNode = new fgui.GTreeNode(true);
            _this18._rootNode._setTree((0, _assertThisInitialized2.default)(_this18));
            _this18._rootNode.expanded = true;
            return _this18;
        }
        (0, _createClass2.default)(GTree, [ {
            key: "getSelectedNode",
            value: function getSelectedNode() {
                if (this.selectedIndex != -1) return this.getChildAt(this.selectedIndex)._treeNode; else return null;
            }
        }, {
            key: "getSelectedNodes",
            value: function getSelectedNodes(result) {
                if (!result) result = new Array();
                s_list.length = 0;
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTree.prototype), "getSelection", this).call(this, s_list);
                var cnt = s_list.length;
                var ret = new Array();
                for (var i = 0; i < cnt; i++) {
                    var node = this.getChildAt(s_list[i])._treeNode;
                    ret.push(node);
                }
                return ret;
            }
        }, {
            key: "selectNode",
            value: function selectNode(node, scrollItToView) {
                var parentNode = node.parent;
                while (parentNode && parentNode != this._rootNode) {
                    parentNode.expanded = true;
                    parentNode = parentNode.parent;
                }
                if (!node._cell) return;
                this.addSelection(this.getChildIndex(node._cell), scrollItToView);
            }
        }, {
            key: "unselectNode",
            value: function unselectNode(node) {
                if (!node._cell) return;
                this.removeSelection(this.getChildIndex(node._cell));
            }
        }, {
            key: "expandAll",
            value: function expandAll(folderNode) {
                if (!folderNode) folderNode = this._rootNode;
                folderNode.expanded = true;
                var cnt = folderNode.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var node = folderNode.getChildAt(i);
                    if (node.isFolder) this.expandAll(node);
                }
            }
        }, {
            key: "collapseAll",
            value: function collapseAll(folderNode) {
                if (!folderNode) folderNode = this._rootNode;
                if (folderNode != this._rootNode) folderNode.expanded = false;
                var cnt = folderNode.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var node = folderNode.getChildAt(i);
                    if (node.isFolder) this.collapseAll(node);
                }
            }
        }, {
            key: "createCell",
            value: function createCell(node) {
                var child = this.getFromPool(node._resURL ? node._resURL : this.defaultItem);
                if (!child) throw new Error("cannot create tree node object.");
                child._treeNode = node;
                node._cell = child;
                var indentObj = child.getChild("indent");
                if (indentObj) indentObj.width = (node.level - 1) * this._indent;
                var cc;
                cc = child.getController("expanded");
                if (cc) {
                    cc.on(fgui.Events.STATE_CHANGED, this, this.__expandedStateChanged);
                    cc.selectedIndex = node.expanded ? 1 : 0;
                }
                cc = child.getController("leaf");
                if (cc) cc.selectedIndex = node.isFolder ? 0 : 1;
                if (node.isFolder) child.on(Laya.Event.MOUSE_DOWN, this, this.__cellMouseDown);
                if (this.treeNodeRender) this.treeNodeRender.runWith([ node, child ]);
            }
        }, {
            key: "_afterInserted",
            value: function _afterInserted(node) {
                if (!node._cell) this.createCell(node);
                var index = this.getInsertIndexForNode(node);
                this.addChildAt(node._cell, index);
                if (this.treeNodeRender) this.treeNodeRender.runWith([ node, node._cell ]);
                if (node.isFolder && node.expanded) this.checkChildren(node, index);
            }
        }, {
            key: "getInsertIndexForNode",
            value: function getInsertIndexForNode(node) {
                var prevNode = node.getPrevSibling();
                if (!prevNode) prevNode = node.parent;
                var insertIndex = this.getChildIndex(prevNode._cell) + 1;
                var myLevel = node.level;
                var cnt = this.numChildren;
                for (var i = insertIndex; i < cnt; i++) {
                    var testNode = this.getChildAt(i)._treeNode;
                    if (testNode.level <= myLevel) break;
                    insertIndex++;
                }
                return insertIndex;
            }
        }, {
            key: "_afterRemoved",
            value: function _afterRemoved(node) {
                this.removeNode(node);
            }
        }, {
            key: "_afterExpanded",
            value: function _afterExpanded(node) {
                if (node == this._rootNode) {
                    this.checkChildren(this._rootNode, 0);
                    return;
                }
                if (this.treeNodeWillExpand != null) this.treeNodeWillExpand.runWith([ node, true ]);
                if (!node._cell) return;
                if (this.treeNodeRender) this.treeNodeRender.runWith([ node, node._cell ]);
                var cc = node._cell.getController("expanded");
                if (cc) cc.selectedIndex = 1;
                if (node._cell.parent) this.checkChildren(node, this.getChildIndex(node._cell));
            }
        }, {
            key: "_afterCollapsed",
            value: function _afterCollapsed(node) {
                if (node == this._rootNode) {
                    this.checkChildren(this._rootNode, 0);
                    return;
                }
                if (this.treeNodeWillExpand) this.treeNodeWillExpand.runWith([ node, false ]);
                if (!node._cell) return;
                if (this.treeNodeRender) this.treeNodeRender.runWith([ node, node._cell ]);
                var cc = node._cell.getController("expanded");
                if (cc) cc.selectedIndex = 0;
                if (node._cell.parent) this.hideFolderNode(node);
            }
        }, {
            key: "_afterMoved",
            value: function _afterMoved(node) {
                var startIndex = this.getChildIndex(node._cell);
                var endIndex;
                if (node.isFolder) endIndex = this.getFolderEndIndex(startIndex, node.level); else endIndex = startIndex + 1;
                var insertIndex = this.getInsertIndexForNode(node);
                var i;
                var cnt = endIndex - startIndex;
                var obj;
                if (insertIndex < startIndex) {
                    for (i = 0; i < cnt; i++) {
                        obj = this.getChildAt(startIndex + i);
                        this.setChildIndex(obj, insertIndex + i);
                    }
                } else {
                    for (i = 0; i < cnt; i++) {
                        obj = this.getChildAt(startIndex);
                        this.setChildIndex(obj, insertIndex);
                    }
                }
            }
        }, {
            key: "getFolderEndIndex",
            value: function getFolderEndIndex(startIndex, level) {
                var cnt = this.numChildren;
                for (var i = startIndex + 1; i < cnt; i++) {
                    var node = this.getChildAt(i)._treeNode;
                    if (node.level <= level) return i;
                }
                return cnt;
            }
        }, {
            key: "checkChildren",
            value: function checkChildren(folderNode, index) {
                var cnt = folderNode.numChildren;
                for (var i = 0; i < cnt; i++) {
                    index++;
                    var node = folderNode.getChildAt(i);
                    if (!node._cell) this.createCell(node);
                    if (!node._cell.parent) this.addChildAt(node._cell, index);
                    if (node.isFolder && node.expanded) index = this.checkChildren(node, index);
                }
                return index;
            }
        }, {
            key: "hideFolderNode",
            value: function hideFolderNode(folderNode) {
                var cnt = folderNode.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var node = folderNode.getChildAt(i);
                    if (node._cell) this.removeChild(node._cell);
                    if (node.isFolder && node.expanded) this.hideFolderNode(node);
                }
            }
        }, {
            key: "removeNode",
            value: function removeNode(node) {
                if (node._cell) {
                    if (node._cell.parent) this.removeChild(node._cell);
                    this.returnToPool(node._cell);
                    node._cell._treeNode = null;
                    node._cell = null;
                }
                if (node.isFolder) {
                    var cnt = node.numChildren;
                    for (var i = 0; i < cnt; i++) {
                        var node2 = node.getChildAt(i);
                        this.removeNode(node2);
                    }
                }
            }
        }, {
            key: "__cellMouseDown",
            value: function __cellMouseDown(evt) {
                var node = fgui.GObject.cast(evt.currentTarget)._treeNode;
                this._expandedStatusInEvt = node.expanded;
            }
        }, {
            key: "__expandedStateChanged",
            value: function __expandedStateChanged(cc) {
                var node = cc.parent._treeNode;
                node.expanded = cc.selectedIndex == 1;
            }
        }, {
            key: "dispatchItemEvent",
            value: function dispatchItemEvent(item, evt) {
                if (this._clickToExpand != 0) {
                    var node = item._treeNode;
                    if (node && node.isFolder && this._expandedStatusInEvt == node.expanded) {
                        if (this._clickToExpand == 2) {} else node.expanded = !node.expanded;
                    }
                }
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTree.prototype), "dispatchItemEvent", this).call(this, item, evt);
            }
        }, {
            key: "setup_beforeAdd",
            value: function setup_beforeAdd(buffer, beginPos) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(GTree.prototype), "setup_beforeAdd", this).call(this, buffer, beginPos);
                buffer.seek(beginPos, 9);
                this._indent = buffer.getInt32();
                this._clickToExpand = buffer.getUint8();
            }
        }, {
            key: "readItems",
            value: function readItems(buffer) {
                var cnt;
                var i;
                var nextPos;
                var str;
                var isFolder;
                var lastNode;
                var level;
                var prevLevel = 0;
                cnt = buffer.getInt16();
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    str = buffer.readS();
                    if (str == null) {
                        str = this.defaultItem;
                        if (!str) {
                            buffer.pos = nextPos;
                            continue;
                        }
                    }
                    isFolder = buffer.readBool();
                    level = buffer.getUint8();
                    var node = new fgui.GTreeNode(isFolder, str);
                    node.expanded = true;
                    if (i == 0) this._rootNode.addChild(node); else {
                        if (level > prevLevel) lastNode.addChild(node); else if (level < prevLevel) {
                            for (var j = level; j <= prevLevel; j++) {
                                lastNode = lastNode.parent;
                            }
                            lastNode.addChild(node);
                        } else lastNode.parent.addChild(node);
                    }
                    lastNode = node;
                    prevLevel = level;
                    this.setupItem(buffer, node.cell);
                    buffer.pos = nextPos;
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
            set: function set(value) {
                this._indent = value;
            }
        }, {
            key: "clickToExpand",
            get: function get() {
                return this._clickToExpand;
            },
            set: function set(value) {
                this._clickToExpand = value;
            }
        } ]);
        return GTree;
    }(fgui.GList);
    fgui.GTree = GTree;
    var s_list = new Array();
})(fgui);

(function(fgui) {
    var GTreeNode = /* */ function() {
        function GTreeNode(hasChild, resURL) {
            (0, _classCallCheck2.default)(this, GTreeNode);
            this._level = 0;
            this._resURL = resURL;
            if (hasChild) this._children = new Array();
        }
        (0, _createClass2.default)(GTreeNode, [ {
            key: "_setLevel",
            value: function _setLevel(value) {
                this._level = value;
            }
        }, {
            key: "addChild",
            value: function addChild(child) {
                this.addChildAt(child, this._children.length);
                return child;
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(child, index) {
                if (!child) throw new Error("child is null");
                var numChildren = this._children.length;
                if (index >= 0 && index <= numChildren) {
                    if (child._parent == this) {
                        this.setChildIndex(child, index);
                    } else {
                        if (child._parent) child._parent.removeChild(child);
                        var cnt = this._children.length;
                        if (index == cnt) this._children.push(child); else this._children.splice(index, 0, child);
                        child._parent = this;
                        child._level = this._level + 1;
                        child._setTree(this._tree);
                        if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) this._tree._afterInserted(child);
                    }
                    return child;
                } else {
                    throw new RangeError("Invalid child index");
                }
            }
        }, {
            key: "removeChild",
            value: function removeChild(child) {
                var childIndex = this._children.indexOf(child);
                if (childIndex != -1) {
                    this.removeChildAt(childIndex);
                }
                return child;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(index) {
                if (index >= 0 && index < this.numChildren) {
                    var child = this._children[index];
                    this._children.splice(index, 1);
                    child._parent = null;
                    if (this._tree) {
                        child._setTree(null);
                        this._tree._afterRemoved(child);
                    }
                    return child;
                } else {
                    throw "Invalid child index";
                }
            }
        }, {
            key: "removeChildren",
            value: function removeChildren(beginIndex, endIndex) {
                beginIndex = beginIndex || 0;
                if (endIndex == null) endIndex = -1;
                if (endIndex < 0 || endIndex >= this.numChildren) endIndex = this.numChildren - 1;
                for (var i = beginIndex; i <= endIndex; ++i) {
                    this.removeChildAt(beginIndex);
                }
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(index) {
                if (index >= 0 && index < this.numChildren) return this._children[index]; else throw "Invalid child index";
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(child) {
                return this._children.indexOf(child);
            }
        }, {
            key: "getPrevSibling",
            value: function getPrevSibling() {
                if (this._parent == null) return null;
                var i = this._parent._children.indexOf(this);
                if (i <= 0) return null;
                return this._parent._children[i - 1];
            }
        }, {
            key: "getNextSibling",
            value: function getNextSibling() {
                if (this._parent == null) return null;
                var i = this._parent._children.indexOf(this);
                if (i < 0 || i >= this._parent._children.length - 1) return null;
                return this._parent._children[i + 1];
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(child, index) {
                var oldIndex = this._children.indexOf(child);
                if (oldIndex == -1) throw "Not a child of this container";
                var cnt = this._children.length;
                if (index < 0) index = 0; else if (index > cnt) index = cnt;
                if (oldIndex == index) return;
                this._children.splice(oldIndex, 1);
                this._children.splice(index, 0, child);
                if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) this._tree._afterMoved(child);
            }
        }, {
            key: "swapChildren",
            value: function swapChildren(child1, child2) {
                var index1 = this._children.indexOf(child1);
                var index2 = this._children.indexOf(child2);
                if (index1 == -1 || index2 == -1) throw "Not a child of this container";
                this.swapChildrenAt(index1, index2);
            }
        }, {
            key: "swapChildrenAt",
            value: function swapChildrenAt(index1, index2) {
                var child1 = this._children[index1];
                var child2 = this._children[index2];
                this.setChildIndex(child1, index2);
                this.setChildIndex(child2, index1);
            }
        }, {
            key: "expandToRoot",
            value: function expandToRoot() {
                var p = this;
                while (p) {
                    p.expanded = true;
                    p = p.parent;
                }
            }
        }, {
            key: "_setTree",
            value: function _setTree(value) {
                this._tree = value;
                if (this._tree && this._tree.treeNodeWillExpand && this._expanded) this._tree.treeNodeWillExpand.runWith([ this, true ]);
                if (this._children) {
                    var cnt = this._children.length;
                    for (var i = 0; i < cnt; i++) {
                        var node = this._children[i];
                        node._level = this._level + 1;
                        node._setTree(value);
                    }
                }
            }
        }, {
            key: "expanded",
            set: function set(value) {
                if (this._children == null) return;
                if (this._expanded != value) {
                    this._expanded = value;
                    if (this._tree) {
                        if (this._expanded) this._tree._afterExpanded(this); else this._tree._afterCollapsed(this);
                    }
                }
            },
            get: function get() {
                return this._expanded;
            }
        }, {
            key: "isFolder",
            get: function get() {
                return this._children != null;
            }
        }, {
            key: "parent",
            get: function get() {
                return this._parent;
            }
        }, {
            key: "text",
            get: function get() {
                if (this._cell) return this._cell.text; else return null;
            },
            set: function set(value) {
                if (this._cell) this._cell.text = value;
            }
        }, {
            key: "icon",
            get: function get() {
                if (this._cell) return this._cell.icon; else return null;
            },
            set: function set(value) {
                if (this._cell) this._cell.icon = value;
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
        return GTreeNode;
    }();
    fgui.GTreeNode = GTreeNode;
})(fgui);

(function(fgui) {
    var PackageItem = /* */ function() {
        function PackageItem() {
            (0, _classCallCheck2.default)(this, PackageItem);
            this.width = 0;
            this.height = 0;
        }
        (0, _createClass2.default)(PackageItem, [ {
            key: "load",
            value: function load() {
                return this.owner.getItemAsset(this);
            }
        }, {
            key: "getBranch",
            value: function getBranch() {
                if (this.branches && this.owner._branchIndex != -1) {
                    var itemId = this.branches[this.owner._branchIndex];
                    if (itemId) return this.owner.getItemById(itemId);
                }
                return this;
            }
        }, {
            key: "getHighResolution",
            value: function getHighResolution() {
                if (this.highResolution && fgui.GRoot.contentScaleLevel > 0) {
                    var itemId = this.highResolution[fgui.GRoot.contentScaleLevel - 1];
                    if (itemId) return this.owner.getItemById(itemId);
                }
                return this;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.name;
            }
        } ]);
        return PackageItem;
    }();
    fgui.PackageItem = PackageItem;
})(fgui);

(function(fgui) {
    var PopupMenu = /* */ function() {
        function PopupMenu(resourceURL) {
            (0, _classCallCheck2.default)(this, PopupMenu);
            if (!resourceURL) {
                resourceURL = fgui.UIConfig.popupMenu;
                if (!resourceURL) throw "UIConfig.popupMenu not defined";
            }
            this._contentPane = fgui.UIPackage.createObjectFromURL(resourceURL).asCom;
            this._contentPane.on(Laya.Event.DISPLAY, this, this.__addedToStage);
            this._list = this._contentPane.getChild("list");
            this._list.removeChildrenToPool();
            this._list.addRelation(this._contentPane, fgui.RelationType.Width);
            this._list.removeRelation(this._contentPane, fgui.RelationType.Height);
            this._contentPane.addRelation(this._list, fgui.RelationType.Height);
            this._list.on(fgui.Events.CLICK_ITEM, this, this.__clickItem);
        }
        (0, _createClass2.default)(PopupMenu, [ {
            key: "dispose",
            value: function dispose() {
                this._contentPane.dispose();
            }
        }, {
            key: "addItem",
            value: function addItem(caption, handler) {
                var item = this._list.addItemFromPool().asButton;
                item.title = caption;
                item.data = handler;
                item.grayed = false;
                var c = item.getController("checked");
                if (c) c.selectedIndex = 0;
                return item;
            }
        }, {
            key: "addItemAt",
            value: function addItemAt(caption, index, handler) {
                var item = this._list.getFromPool().asButton;
                this._list.addChildAt(item, index);
                item.title = caption;
                item.data = handler;
                item.grayed = false;
                var c = item.getController("checked");
                if (c) c.selectedIndex = 0;
                return item;
            }
        }, {
            key: "addSeperator",
            value: function addSeperator() {
                if (fgui.UIConfig.popupMenu_seperator == null) throw "UIConfig.popupMenu_seperator not defined";
                this.list.addItemFromPool(fgui.UIConfig.popupMenu_seperator);
            }
        }, {
            key: "getItemName",
            value: function getItemName(index) {
                var item = this._list.getChildAt(index);
                return item.name;
            }
        }, {
            key: "setItemText",
            value: function setItemText(name, caption) {
                var item = this._list.getChild(name).asButton;
                item.title = caption;
            }
        }, {
            key: "setItemVisible",
            value: function setItemVisible(name, visible) {
                var item = this._list.getChild(name).asButton;
                if (item.visible != visible) {
                    item.visible = visible;
                    this._list.setBoundsChangedFlag();
                }
            }
        }, {
            key: "setItemGrayed",
            value: function setItemGrayed(name, grayed) {
                var item = this._list.getChild(name).asButton;
                item.grayed = grayed;
            }
        }, {
            key: "setItemCheckable",
            value: function setItemCheckable(name, checkable) {
                var item = this._list.getChild(name).asButton;
                var c = item.getController("checked");
                if (c) {
                    if (checkable) {
                        if (c.selectedIndex == 0) c.selectedIndex = 1;
                    } else c.selectedIndex = 0;
                }
            }
        }, {
            key: "setItemChecked",
            value: function setItemChecked(name, checked) {
                var item = this._list.getChild(name).asButton;
                var c = item.getController("checked");
                if (c) c.selectedIndex = checked ? 2 : 1;
            }
        }, {
            key: "isItemChecked",
            value: function isItemChecked(name) {
                var item = this._list.getChild(name).asButton;
                var c = item.getController("checked");
                if (c) return c.selectedIndex == 2; else return false;
            }
        }, {
            key: "removeItem",
            value: function removeItem(name) {
                var item = this._list.getChild(name);
                if (item) {
                    var index = this._list.getChildIndex(item);
                    this._list.removeChildToPoolAt(index);
                    return true;
                } else return false;
            }
        }, {
            key: "clearItems",
            value: function clearItems() {
                this._list.removeChildrenToPool();
            }
        }, {
            key: "show",
            value: function show() {
                var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var dir = arguments.length > 1 ? arguments[1] : undefined;
                var r = target != null ? target.root : fgui.GRoot.inst;
                r.showPopup(this.contentPane, target instanceof fgui.GRoot ? null : target, dir);
            }
        }, {
            key: "__clickItem",
            value: function __clickItem(itemObject) {
                Laya.timer.once(100, this, this.__clickItem2, [ itemObject ]);
            }
        }, {
            key: "__clickItem2",
            value: function __clickItem2(itemObject) {
                if (!(itemObject instanceof fgui.GButton)) return;
                if (itemObject.grayed) {
                    this._list.selectedIndex = -1;
                    return;
                }
                var c = itemObject.asCom.getController("checked");
                if (c && c.selectedIndex != 0) {
                    if (c.selectedIndex == 1) c.selectedIndex = 2; else c.selectedIndex = 1;
                }
                var r = this._contentPane.parent;
                r.hidePopup(this.contentPane);
                if (itemObject.data != null) {
                    itemObject.data.run();
                }
            }
        }, {
            key: "__addedToStage",
            value: function __addedToStage() {
                this._list.selectedIndex = -1;
                this._list.resizeToFit(1e5, 10);
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
        return PopupMenu;
    }();
    fgui.PopupMenu = PopupMenu;
})(fgui);

(function(fgui) {
    var RelationItem = /* */ function() {
        function RelationItem(owner) {
            (0, _classCallCheck2.default)(this, RelationItem);
            this._owner = owner;
            this._defs = new Array();
        }
        (0, _createClass2.default)(RelationItem, [ {
            key: "add",
            value: function add(relationType, usePercent) {
                if (relationType == fgui.RelationType.Size) {
                    this.add(fgui.RelationType.Width, usePercent);
                    this.add(fgui.RelationType.Height, usePercent);
                    return;
                }
                var cnt = this._defs.length;
                for (var i = 0; i < cnt; i++) {
                    if (this._defs[i].type == relationType) return;
                }
                this.internalAdd(relationType, usePercent);
            }
        }, {
            key: "internalAdd",
            value: function internalAdd(relationType, usePercent) {
                if (relationType == fgui.RelationType.Size) {
                    this.internalAdd(fgui.RelationType.Width, usePercent);
                    this.internalAdd(fgui.RelationType.Height, usePercent);
                    return;
                }
                var info = new RelationDef();
                info.percent = usePercent;
                info.type = relationType;
                info.axis = relationType <= fgui.RelationType.Right_Right || relationType == fgui.RelationType.Width || relationType >= fgui.RelationType.LeftExt_Left && relationType <= fgui.RelationType.RightExt_Right ? 0 : 1;
                this._defs.push(info);
            }
        }, {
            key: "remove",
            value: function remove(relationType) {
                if (relationType == fgui.RelationType.Size) {
                    this.remove(fgui.RelationType.Width);
                    this.remove(fgui.RelationType.Height);
                    return;
                }
                var dc = this._defs.length;
                for (var k = 0; k < dc; k++) {
                    if (this._defs[k].type == relationType) {
                        this._defs.splice(k, 1);
                        break;
                    }
                }
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(source) {
                this._target = source.target;
                this._defs.length = 0;
                var cnt = source._defs.length;
                for (var i = 0; i < cnt; i++) {
                    var info = source._defs[i];
                    var info2 = new RelationDef();
                    info2.copyFrom(info);
                    this._defs.push(info2);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (this._target) {
                    this.releaseRefTarget();
                    this._target = null;
                }
            }
        }, {
            key: "applyOnSelfResized",
            value: function applyOnSelfResized(dWidth, dHeight, applyPivot) {
                var cnt = this._defs.length;
                if (cnt == 0) return;
                var ox = this._owner.x;
                var oy = this._owner.y;
                for (var i = 0; i < cnt; i++) {
                    var info = this._defs[i];
                    switch (info.type) {
                      case fgui.RelationType.Center_Center:
                        this._owner.x -= (.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;

                      case fgui.RelationType.Right_Center:
                      case fgui.RelationType.Right_Left:
                      case fgui.RelationType.Right_Right:
                        this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;

                      case fgui.RelationType.Middle_Middle:
                        this._owner.y -= (.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;

                      case fgui.RelationType.Bottom_Middle:
                      case fgui.RelationType.Bottom_Top:
                      case fgui.RelationType.Bottom_Bottom:
                        this._owner.y -= (1 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                    }
                }
                if (ox != this._owner.x || oy != this._owner.y) {
                    ox = this._owner.x - ox;
                    oy = this._owner.y - oy;
                    this._owner.updateGearFromRelations(1, ox, oy);
                    if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                        cnt = this._owner.parent._transitions.length;
                        for (var j = 0; j < cnt; j++) {
                            var trans = this._owner.parent._transitions[j];
                            trans.updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
            }
        }, {
            key: "applyOnXYChanged",
            value: function applyOnXYChanged(info, dx, dy) {
                var tmp;
                switch (info.type) {
                  case fgui.RelationType.Left_Left:
                  case fgui.RelationType.Left_Center:
                  case fgui.RelationType.Left_Right:
                  case fgui.RelationType.Center_Center:
                  case fgui.RelationType.Right_Left:
                  case fgui.RelationType.Right_Center:
                  case fgui.RelationType.Right_Right:
                    this._owner.x += dx;
                    break;

                  case fgui.RelationType.Top_Top:
                  case fgui.RelationType.Top_Middle:
                  case fgui.RelationType.Top_Bottom:
                  case fgui.RelationType.Middle_Middle:
                  case fgui.RelationType.Bottom_Top:
                  case fgui.RelationType.Bottom_Middle:
                  case fgui.RelationType.Bottom_Bottom:
                    this._owner.y += dy;
                    break;

                  case fgui.RelationType.Width:
                  case fgui.RelationType.Height:
                    break;

                  case fgui.RelationType.LeftExt_Left:
                  case fgui.RelationType.LeftExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth - dx;
                        this._owner.xMin = tmp + dx;
                    } else this._owner.width = this._owner._rawWidth - dx;
                    break;

                  case fgui.RelationType.RightExt_Left:
                  case fgui.RelationType.RightExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth + dx;
                        this._owner.xMin = tmp;
                    } else this._owner.width = this._owner._rawWidth + dx;
                    break;

                  case fgui.RelationType.TopExt_Top:
                  case fgui.RelationType.TopExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight - dy;
                        this._owner.yMin = tmp + dy;
                    } else this._owner.height = this._owner._rawHeight - dy;
                    break;

                  case fgui.RelationType.BottomExt_Top:
                  case fgui.RelationType.BottomExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight + dy;
                        this._owner.yMin = tmp;
                    } else this._owner.height = this._owner._rawHeight + dy;
                    break;
                }
            }
        }, {
            key: "applyOnSizeChanged",
            value: function applyOnSizeChanged(info) {
                var pos = 0, pivot = 0, delta = 0;
                var v, tmp;
                if (info.axis == 0) {
                    if (this._target != this._owner.parent) {
                        pos = this._target.x;
                        if (this._target.pivotAsAnchor) pivot = this._target.pivotX;
                    }
                    if (info.percent) {
                        if (this._targetWidth != 0) delta = this._target._width / this._targetWidth;
                    } else delta = this._target._width - this._targetWidth;
                } else {
                    if (this._target != this._owner.parent) {
                        pos = this._target.y;
                        if (this._target.pivotAsAnchor) pivot = this._target.pivotY;
                    }
                    if (info.percent) {
                        if (this._targetHeight != 0) delta = this._target._height / this._targetHeight;
                    } else delta = this._target._height - this._targetHeight;
                }
                switch (info.type) {
                  case fgui.RelationType.Left_Left:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin - pos) * delta; else if (pivot != 0) this._owner.x += delta * -pivot;
                    break;

                  case fgui.RelationType.Left_Center:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin - pos) * delta; else this._owner.x += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Left_Right:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin - pos) * delta; else this._owner.x += delta * (1 - pivot);
                    break;

                  case fgui.RelationType.Center_Center:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * .5 - pos) * delta - this._owner._rawWidth * .5; else this._owner.x += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Right_Left:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth; else if (pivot != 0) this._owner.x += delta * -pivot;
                    break;

                  case fgui.RelationType.Right_Center:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth; else this._owner.x += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Right_Right:
                    if (info.percent) this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth; else this._owner.x += delta * (1 - pivot);
                    break;

                  case fgui.RelationType.Top_Top:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin - pos) * delta; else if (pivot != 0) this._owner.y += delta * -pivot;
                    break;

                  case fgui.RelationType.Top_Middle:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin - pos) * delta; else this._owner.y += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Top_Bottom:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin - pos) * delta; else this._owner.y += delta * (1 - pivot);
                    break;

                  case fgui.RelationType.Middle_Middle:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * .5 - pos) * delta - this._owner._rawHeight * .5; else this._owner.y += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Bottom_Top:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight; else if (pivot != 0) this._owner.y += delta * -pivot;
                    break;

                  case fgui.RelationType.Bottom_Middle:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight; else this._owner.y += delta * (.5 - pivot);
                    break;

                  case fgui.RelationType.Bottom_Bottom:
                    if (info.percent) this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight; else this._owner.y += delta * (1 - pivot);
                    break;

                  case fgui.RelationType.Width:
                    if (this._owner._underConstruct && this._owner == this._target.parent) v = this._owner.sourceWidth - this._target.initWidth; else v = this._owner._rawWidth - this._targetWidth;
                    if (info.percent) v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.xMin;
                            this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                            this._owner.xMin = tmp;
                        } else this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                    } else this._owner.width = this._target._width + v;
                    break;

                  case fgui.RelationType.Height:
                    if (this._owner._underConstruct && this._owner == this._target.parent) v = this._owner.sourceHeight - this._target.initHeight; else v = this._owner._rawHeight - this._targetHeight;
                    if (info.percent) v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.yMin;
                            this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                            this._owner.yMin = tmp;
                        } else this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                    } else this._owner.height = this._target._height + v;
                    break;

                  case fgui.RelationType.LeftExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent) v = pos + (tmp - pos) * delta - tmp; else v = delta * -pivot;
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;

                  case fgui.RelationType.LeftExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent) v = pos + (tmp - pos) * delta - tmp; else v = delta * (1 - pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;

                  case fgui.RelationType.RightExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent) v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth); else v = delta * -pivot;
                    this._owner.width = this._owner._rawWidth + v;
                    this._owner.xMin = tmp;
                    break;

                  case fgui.RelationType.RightExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct) this._owner.width = pos + this._target._width - this._target._width * pivot + (this._owner.sourceWidth - pos - this._target.initWidth + this._target.initWidth * pivot) * delta; else this._owner.width = pos + (this._owner._rawWidth - pos) * delta;
                        } else {
                            v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    } else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct) this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - pivot); else this._owner.width = this._owner._rawWidth + delta * (1 - pivot);
                        } else {
                            v = delta * (1 - pivot);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    }
                    break;

                  case fgui.RelationType.TopExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent) v = pos + (tmp - pos) * delta - tmp; else v = delta * -pivot;
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;

                  case fgui.RelationType.TopExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent) v = pos + (tmp - pos) * delta - tmp; else v = delta * (1 - pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;

                  case fgui.RelationType.BottomExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent) v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight); else v = delta * -pivot;
                    this._owner.height = this._owner._rawHeight + v;
                    this._owner.yMin = tmp;
                    break;

                  case fgui.RelationType.BottomExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct) this._owner.height = pos + this._target._height - this._target._height * pivot + (this._owner.sourceHeight - pos - this._target.initHeight + this._target.initHeight * pivot) * delta; else this._owner.height = pos + (this._owner._rawHeight - pos) * delta;
                        } else {
                            v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    } else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct) this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - pivot); else this._owner.height = this._owner._rawHeight + delta * (1 - pivot);
                        } else {
                            v = delta * (1 - pivot);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    }
                    break;
                }
            }
        }, {
            key: "addRefTarget",
            value: function addRefTarget() {
                if (this._target != this._owner.parent) this._target.on(fgui.Events.XY_CHANGED, this, this.__targetXYChanged);
                this._target.on(fgui.Events.SIZE_CHANGED, this, this.__targetSizeChanged);
                this._target.on(fgui.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange);
                this._targetX = this._target.x;
                this._targetY = this._target.y;
                this._targetWidth = this._target._width;
                this._targetHeight = this._target._height;
            }
        }, {
            key: "releaseRefTarget",
            value: function releaseRefTarget() {
                if (this._target.displayObject == null) return;
                this._target.off(fgui.Events.XY_CHANGED, this, this.__targetXYChanged);
                this._target.off(fgui.Events.SIZE_CHANGED, this, this.__targetSizeChanged);
                this._target.off(fgui.Events.SIZE_DELAY_CHANGE, this, this.__targetSizeWillChange);
            }
        }, {
            key: "__targetXYChanged",
            value: function __targetXYChanged() {
                if (this._owner.relations.handling != null || this._owner.group != null && this._owner.group._updating) {
                    this._targetX = this._target.x;
                    this._targetY = this._target.y;
                    return;
                }
                this._owner.relations.handling = this._target;
                var ox = this._owner.x;
                var oy = this._owner.y;
                var dx = this._target.x - this._targetX;
                var dy = this._target.y - this._targetY;
                var cnt = this._defs.length;
                for (var i = 0; i < cnt; i++) {
                    this.applyOnXYChanged(this._defs[i], dx, dy);
                }
                this._targetX = this._target.x;
                this._targetY = this._target.y;
                if (ox != this._owner.x || oy != this._owner.y) {
                    ox = this._owner.x - ox;
                    oy = this._owner.y - oy;
                    this._owner.updateGearFromRelations(1, ox, oy);
                    if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                        cnt = this._owner.parent._transitions.length;
                        for (var j = 0; j < cnt; j++) {
                            var trans = this._owner.parent._transitions[j];
                            trans.updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
                this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeChanged",
            value: function __targetSizeChanged() {
                if (this._owner.relations.sizeDirty) this._owner.relations.ensureRelationsSizeCorrect();
                if (this._owner.relations.handling != null) {
                    this._targetWidth = this._target._width;
                    this._targetHeight = this._target._height;
                    return;
                }
                this._owner.relations.handling = this._target;
                var ox = this._owner.x;
                var oy = this._owner.y;
                var ow = this._owner._rawWidth;
                var oh = this._owner._rawHeight;
                var cnt = this._defs.length;
                for (var i = 0; i < cnt; i++) {
                    this.applyOnSizeChanged(this._defs[i]);
                }
                this._targetWidth = this._target._width;
                this._targetHeight = this._target._height;
                if (ox != this._owner.x || oy != this._owner.y) {
                    ox = this._owner.x - ox;
                    oy = this._owner.y - oy;
                    this._owner.updateGearFromRelations(1, ox, oy);
                    if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                        cnt = this._owner.parent._transitions.length;
                        for (var j = 0; j < cnt; j++) {
                            var trans = this._owner.parent._transitions[j];
                            trans.updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
                if (ow != this._owner._rawWidth || oh != this._owner._rawHeight) {
                    ow = this._owner._rawWidth - ow;
                    oh = this._owner._rawHeight - oh;
                    this._owner.updateGearFromRelations(2, ow, oh);
                }
                this._owner.relations.handling = null;
            }
        }, {
            key: "__targetSizeWillChange",
            value: function __targetSizeWillChange() {
                this._owner.relations.sizeDirty = true;
            }
        }, {
            key: "owner",
            get: function get() {
                return this._owner;
            }
        }, {
            key: "target",
            set: function set(value) {
                if (this._target != value) {
                    if (this._target) this.releaseRefTarget();
                    this._target = value;
                    if (this._target) this.addRefTarget();
                }
            },
            get: function get() {
                return this._target;
            }
        }, {
            key: "isEmpty",
            get: function get() {
                return this._defs.length == 0;
            }
        } ]);
        return RelationItem;
    }();
    fgui.RelationItem = RelationItem;
    var RelationDef = /* */ function() {
        function RelationDef() {
            (0, _classCallCheck2.default)(this, RelationDef);
        }
        (0, _createClass2.default)(RelationDef, [ {
            key: "copyFrom",
            value: function copyFrom(source) {
                this.percent = source.percent;
                this.type = source.type;
                this.axis = source.axis;
            }
        } ]);
        return RelationDef;
    }();
})(fgui);

(function(fgui) {
    var Relations = /* */ function() {
        function Relations(owner) {
            (0, _classCallCheck2.default)(this, Relations);
            this._owner = owner;
            this._items = [];
        }
        (0, _createClass2.default)(Relations, [ {
            key: "add",
            value: function add(target, relationType, usePercent) {
                var length = this._items.length;
                for (var i = 0; i < length; i++) {
                    var item = this._items[i];
                    if (item.target == target) {
                        item.add(relationType, usePercent);
                        return;
                    }
                }
                var newItem = new fgui.RelationItem(this._owner);
                newItem.target = target;
                newItem.add(relationType, usePercent);
                this._items.push(newItem);
            }
        }, {
            key: "remove",
            value: function remove(target, relationType) {
                relationType = relationType || 0;
                var cnt = this._items.length;
                var i = 0;
                while (i < cnt) {
                    var item = this._items[i];
                    if (item.target == target) {
                        item.remove(relationType);
                        if (item.isEmpty) {
                            item.dispose();
                            this._items.splice(i, 1);
                            cnt--;
                        } else i++;
                    } else i++;
                }
            }
        }, {
            key: "contains",
            value: function contains(target) {
                var length = this._items.length;
                for (var i = 0; i < length; i++) {
                    var item = this._items[i];
                    if (item.target == target) return true;
                }
                return false;
            }
        }, {
            key: "clearFor",
            value: function clearFor(target) {
                var cnt = this._items.length;
                var i = 0;
                while (i < cnt) {
                    var item = this._items[i];
                    if (item.target == target) {
                        item.dispose();
                        this._items.splice(i, 1);
                        cnt--;
                    } else i++;
                }
            }
        }, {
            key: "clearAll",
            value: function clearAll() {
                var length = this._items.length;
                for (var i = 0; i < length; i++) {
                    var item = this._items[i];
                    item.dispose();
                }
                this._items.length = 0;
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(source) {
                this.clearAll();
                var arr = source._items;
                var length = arr.length;
                for (var i = 0; i < length; i++) {
                    var ri = arr[i];
                    var item = new fgui.RelationItem(this._owner);
                    item.copyFrom(ri);
                    this._items.push(item);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.clearAll();
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function onOwnerSizeChanged(dWidth, dHeight, applyPivot) {
                if (this._items.length == 0) return;
                var length = this._items.length;
                for (var i = 0; i < length; i++) {
                    var item = this._items[i];
                    item.applyOnSelfResized(dWidth, dHeight, applyPivot);
                }
            }
        }, {
            key: "ensureRelationsSizeCorrect",
            value: function ensureRelationsSizeCorrect() {
                if (this._items.length == 0) return;
                this.sizeDirty = false;
                var length = this._items.length;
                for (var i = 0; i < length; i++) {
                    var item = this._items[i];
                    item.target.ensureSizeCorrect();
                }
            }
        }, {
            key: "setup",
            value: function setup(buffer, parentToChild) {
                var cnt = buffer.readByte();
                var target;
                for (var i = 0; i < cnt; i++) {
                    var targetIndex = buffer.getInt16();
                    if (targetIndex == -1) target = this._owner.parent; else if (parentToChild) target = this._owner.getChildAt(targetIndex); else target = this._owner.parent.getChildAt(targetIndex);
                    var newItem = new fgui.RelationItem(this._owner);
                    newItem.target = target;
                    this._items.push(newItem);
                    var cnt2 = buffer.readByte();
                    for (var j = 0; j < cnt2; j++) {
                        var rt = buffer.readByte();
                        var usePercent = buffer.readBool();
                        newItem.internalAdd(rt, usePercent);
                    }
                }
            }
        }, {
            key: "empty",
            get: function get() {
                return this._items.length == 0;
            }
        } ]);
        return Relations;
    }();
    fgui.Relations = Relations;
})(fgui);

(function(fgui) {
    var ScrollPane = /* */ function() {
        function ScrollPane(owner) {
            (0, _classCallCheck2.default)(this, ScrollPane);
            this._owner = owner;
            this._maskContainer = new Laya.Sprite();
            this._owner.displayObject.addChild(this._maskContainer);
            this._container = this._owner._container;
            this._container.pos(0, 0);
            this._maskContainer.addChild(this._container);
            this._mouseWheelEnabled = true;
            this._xPos = 0;
            this._yPos = 0;
            this._aniFlag = 0;
            this._tweening = 0;
            this._loop = 0;
            this._footerLockedSize = 0;
            this._headerLockedSize = 0;
            this._scrollBarMargin = new fgui.Margin();
            this._viewSize = new Laya.Point();
            this._contentSize = new Laya.Point();
            this._pageSize = new Laya.Point(1, 1);
            this._overlapSize = new Laya.Point();
            this._tweenTime = new Laya.Point();
            this._tweenStart = new Laya.Point();
            this._tweenDuration = new Laya.Point();
            this._tweenChange = new Laya.Point();
            this._velocity = new Laya.Point();
            this._containerPos = new Laya.Point();
            this._beginTouchPos = new Laya.Point();
            this._lastTouchPos = new Laya.Point();
            this._lastTouchGlobalPos = new Laya.Point();
            this._scrollStep = fgui.UIConfig.defaultScrollStep;
            this._mouseWheelStep = this._scrollStep * 2;
            this._decelerationRate = fgui.UIConfig.defaultScrollDecelerationRate;
            this._owner.on(Laya.Event.MOUSE_DOWN, this, this.__mouseDown);
            this._owner.on(Laya.Event.MOUSE_WHEEL, this, this.__mouseWheel);
        }
        (0, _createClass2.default)(ScrollPane, [ {
            key: "setup",
            value: function setup(buffer) {
                this._scrollType = buffer.readByte();
                var scrollBarDisplay = buffer.readByte();
                var flags = buffer.getInt32();
                if (buffer.readBool()) {
                    this._scrollBarMargin.top = buffer.getInt32();
                    this._scrollBarMargin.bottom = buffer.getInt32();
                    this._scrollBarMargin.left = buffer.getInt32();
                    this._scrollBarMargin.right = buffer.getInt32();
                }
                var vtScrollBarRes = buffer.readS();
                var hzScrollBarRes = buffer.readS();
                var headerRes = buffer.readS();
                var footerRes = buffer.readS();
                if ((flags & 1) != 0) this._displayOnLeft = true;
                if ((flags & 2) != 0) this._snapToItem = true;
                if ((flags & 4) != 0) this._displayInDemand = true;
                if ((flags & 8) != 0) this._pageMode = true;
                if (flags & 16) this._touchEffect = true; else if (flags & 32) this._touchEffect = false; else this._touchEffect = fgui.UIConfig.defaultScrollTouchEffect;
                if (flags & 64) this._bouncebackEffect = true; else if (flags & 128) this._bouncebackEffect = false; else this._bouncebackEffect = fgui.UIConfig.defaultScrollBounceEffect;
                if ((flags & 256) != 0) this._inertiaDisabled = true;
                if ((flags & 512) == 0) this._maskContainer.scrollRect = new Laya.Rectangle();
                if ((flags & 1024) != 0) this._floating = true;
                if ((flags & 2048) != 0) this._dontClipMargin = true;
                if (scrollBarDisplay == fgui.ScrollBarDisplayType.Default) scrollBarDisplay = fgui.UIConfig.defaultScrollBarDisplay;
                if (scrollBarDisplay != fgui.ScrollBarDisplayType.Hidden) {
                    if (this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Vertical) {
                        var res = vtScrollBarRes ? vtScrollBarRes : fgui.UIConfig.verticalScrollBar;
                        if (res) {
                            this._vtScrollBar = fgui.UIPackage.createObjectFromURL(res);
                            if (!this._vtScrollBar) throw "cannot create scrollbar from " + res;
                            this._vtScrollBar.setScrollPane(this, true);
                            this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
                        }
                    }
                    if (this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Horizontal) {
                        res = hzScrollBarRes ? hzScrollBarRes : fgui.UIConfig.horizontalScrollBar;
                        if (res) {
                            this._hzScrollBar = fgui.UIPackage.createObjectFromURL(res);
                            if (!this._hzScrollBar) throw "cannot create scrollbar from " + res;
                            this._hzScrollBar.setScrollPane(this, false);
                            this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
                        }
                    }
                    if (scrollBarDisplay == fgui.ScrollBarDisplayType.Auto) this._scrollBarDisplayAuto = true;
                    if (this._scrollBarDisplayAuto) {
                        if (this._vtScrollBar) this._vtScrollBar.displayObject.visible = false;
                        if (this._hzScrollBar) this._hzScrollBar.displayObject.visible = false;
                    }
                } else this._mouseWheelEnabled = false;
                if (headerRes) {
                    this._header = fgui.UIPackage.createObjectFromURL(headerRes);
                    if (!this._header) throw new Error("FairyGUI: cannot create scrollPane this.header from " + headerRes);
                }
                if (footerRes) {
                    this._footer = fgui.UIPackage.createObjectFromURL(footerRes);
                    if (!this._footer) throw new Error("FairyGUI: cannot create scrollPane this.footer from " + footerRes);
                }
                if (this._header || this._footer) this._refreshBarAxis = this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Vertical ? "y" : "x";
                this.setSize(this.owner.width, this.owner.height);
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (ScrollPane.draggingPane == this) {
                    ScrollPane.draggingPane = null;
                }
                if (this._tweening != 0) Laya.timer.clear(this, this.tweenUpdate);
                this._pageController = null;
                if (this._hzScrollBar) this._hzScrollBar.dispose();
                if (this._vtScrollBar) this._vtScrollBar.dispose();
                if (this._header) this._header.dispose();
                if (this._footer) this._footer.dispose();
            }
        }, {
            key: "setPercX",
            value: function setPercX(value, ani) {
                this._owner.ensureBoundsCorrect();
                this.setPosX(this._overlapSize.x * fgui.ToolSet.clamp01(value), ani);
            }
        }, {
            key: "setPercY",
            value: function setPercY(value, ani) {
                this._owner.ensureBoundsCorrect();
                this.setPosY(this._overlapSize.y * fgui.ToolSet.clamp01(value), ani);
            }
        }, {
            key: "setPosX",
            value: function setPosX(value, ani) {
                this._owner.ensureBoundsCorrect();
                if (this._loop == 1) value = this.loopCheckingNewPos(value, "x");
                value = fgui.ToolSet.clamp(value, 0, this._overlapSize.x);
                if (value != this._xPos) {
                    this._xPos = value;
                    this.posChanged(ani);
                }
            }
        }, {
            key: "setPosY",
            value: function setPosY(value, ani) {
                this._owner.ensureBoundsCorrect();
                if (this._loop == 1) value = this.loopCheckingNewPos(value, "y");
                value = fgui.ToolSet.clamp(value, 0, this._overlapSize.y);
                if (value != this._yPos) {
                    this._yPos = value;
                    this.posChanged(ani);
                }
            }
        }, {
            key: "setCurrentPageX",
            value: function setCurrentPageX(value, ani) {
                if (!this._pageMode) return;
                this._owner.ensureBoundsCorrect();
                if (this._overlapSize.x > 0) this.setPosX(value * this._pageSize.x, ani);
            }
        }, {
            key: "setCurrentPageY",
            value: function setCurrentPageY(value, ani) {
                if (!this._pageMode) return;
                this._owner.ensureBoundsCorrect();
                if (this._overlapSize.y > 0) this.setPosY(value * this._pageSize.y, ani);
            }
        }, {
            key: "scrollTop",
            value: function scrollTop(ani) {
                this.setPercY(0, ani);
            }
        }, {
            key: "scrollBottom",
            value: function scrollBottom(ani) {
                this.setPercY(1, ani);
            }
        }, {
            key: "scrollUp",
            value: function scrollUp(ratio, ani) {
                ratio = ratio || 1;
                if (this._pageMode) this.setPosY(this._yPos - this._pageSize.y * ratio, ani); else this.setPosY(this._yPos - this._scrollStep * ratio, ani);
            }
        }, {
            key: "scrollDown",
            value: function scrollDown(ratio, ani) {
                ratio = ratio || 1;
                if (this._pageMode) this.setPosY(this._yPos + this._pageSize.y * ratio, ani); else this.setPosY(this._yPos + this._scrollStep * ratio, ani);
            }
        }, {
            key: "scrollLeft",
            value: function scrollLeft(ratio, ani) {
                ratio = ratio || 1;
                if (this._pageMode) this.setPosX(this._xPos - this._pageSize.x * ratio, ani); else this.setPosX(this._xPos - this._scrollStep * ratio, ani);
            }
        }, {
            key: "scrollRight",
            value: function scrollRight(ratio, ani) {
                ratio = ratio || 1;
                if (this._pageMode) this.setPosX(this._xPos + this._pageSize.x * ratio, ani); else this.setPosX(this._xPos + this._scrollStep * ratio, ani);
            }
        }, {
            key: "scrollToView",
            value: function scrollToView(target, ani, setFirst) {
                this._owner.ensureBoundsCorrect();
                if (this._needRefresh) this.refresh();
                var rect;
                if (target instanceof fgui.GObject) {
                    if (target.parent != this._owner) {
                        target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, s_rect);
                        rect = this._owner.globalToLocalRect(s_rect.x, s_rect.y, s_rect.width, s_rect.height, s_rect);
                    } else {
                        rect = s_rect;
                        rect.setTo(target.x, target.y, target.width, target.height);
                    }
                } else rect = target;
                if (this._overlapSize.y > 0) {
                    var bottom = this._yPos + this._viewSize.y;
                    if (setFirst || rect.y <= this._yPos || rect.height >= this._viewSize.y) {
                        if (this._pageMode) this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani); else this.setPosY(rect.y, ani);
                    } else if (rect.y + rect.height > bottom) {
                        if (this._pageMode) this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani); else if (rect.height <= this._viewSize.y / 2) this.setPosY(rect.y + rect.height * 2 - this._viewSize.y, ani); else this.setPosY(rect.y + rect.height - this._viewSize.y, ani);
                    }
                }
                if (this._overlapSize.x > 0) {
                    var right = this._xPos + this._viewSize.x;
                    if (setFirst || rect.x <= this._xPos || rect.width >= this._viewSize.x) {
                        if (this._pageMode) this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani); else this.setPosX(rect.x, ani);
                    } else if (rect.x + rect.width > right) {
                        if (this._pageMode) this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani); else if (rect.width <= this._viewSize.x / 2) this.setPosX(rect.x + rect.width * 2 - this._viewSize.x, ani); else this.setPosX(rect.x + rect.width - this._viewSize.x, ani);
                    }
                }
                if (!ani && this._needRefresh) this.refresh();
            }
        }, {
            key: "isChildInView",
            value: function isChildInView(obj) {
                if (this._overlapSize.y > 0) {
                    var dist = obj.y + this._container.y;
                    if (dist < -obj.height || dist > this._viewSize.y) return false;
                }
                if (this._overlapSize.x > 0) {
                    dist = obj.x + this._container.x;
                    if (dist < -obj.width || dist > this._viewSize.x) return false;
                }
                return true;
            }
        }, {
            key: "cancelDragging",
            value: function cancelDragging() {
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp);
                this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click);
                if (ScrollPane.draggingPane == this) ScrollPane.draggingPane = null;
                _gestureFlag = 0;
                this._dragged = false;
                this._maskContainer.mouseEnabled = true;
            }
        }, {
            key: "lockHeader",
            value: function lockHeader(size) {
                if (this._headerLockedSize == size) return;
                this._headerLockedSize = size;
                if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0) {
                    this._tweenStart.setTo(this._container.x, this._container.y);
                    this._tweenChange.setTo(0, 0);
                    this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis];
                    this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                    this.startTween(2);
                }
            }
        }, {
            key: "lockFooter",
            value: function lockFooter(size) {
                if (this._footerLockedSize == size) return;
                this._footerLockedSize = size;
                if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis]) {
                    this._tweenStart.setTo(this._container.x, this._container.y);
                    this._tweenChange.setTo(0, 0);
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0) max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0); else max += this._footerLockedSize;
                    this._tweenChange[this._refreshBarAxis] = -max - this._tweenStart[this._refreshBarAxis];
                    this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                    this.startTween(2);
                }
            }
        }, {
            key: "onOwnerSizeChanged",
            value: function onOwnerSizeChanged() {
                this.setSize(this._owner.width, this._owner.height);
                this.posChanged(false);
            }
        }, {
            key: "handleControllerChanged",
            value: function handleControllerChanged(c) {
                if (this._pageController == c) {
                    if (this._scrollType == fgui.ScrollType.Horizontal) this.setCurrentPageX(c.selectedIndex, true); else this.setCurrentPageY(c.selectedIndex, true);
                }
            }
        }, {
            key: "updatePageController",
            value: function updatePageController() {
                if (this._pageController != null && !this._pageController.changing) {
                    var index;
                    if (this._scrollType == fgui.ScrollType.Horizontal) index = this.currentPageX; else index = this.currentPageY;
                    if (index < this._pageController.pageCount) {
                        var c = this._pageController;
                        this._pageController = null;
                        c.selectedIndex = index;
                        this._pageController = c;
                    }
                }
            }
        }, {
            key: "adjustMaskContainer",
            value: function adjustMaskContainer() {
                var mx = 0, my = 0;
                if (this._dontClipMargin) {
                    if (this._displayOnLeft && this._vtScrollBar && !this._floating) mx = this._vtScrollBar.width;
                } else {
                    if (this._displayOnLeft && this._vtScrollBar && !this._floating) mx = this._owner.margin.left + this._vtScrollBar.width; else mx = this._owner.margin.left;
                    my = this._owner.margin.top;
                }
                this._maskContainer.pos(mx, my);
                mx = this._owner._alignOffset.x;
                my = this._owner._alignOffset.y;
                if (mx != 0 || my != 0 || this._dontClipMargin) {
                    if (!this._alignContainer) {
                        this._alignContainer = new Laya.Sprite();
                        this._maskContainer.addChild(this._alignContainer);
                        this._alignContainer.addChild(this._container);
                    }
                }
                if (this._alignContainer) {
                    if (this._dontClipMargin) {
                        mx += this._owner.margin.left;
                        my += this._owner.margin.top;
                    }
                    this._alignContainer.pos(mx, my);
                }
            }
        }, {
            key: "setSize",
            value: function setSize(aWidth, aHeight) {
                this.adjustMaskContainer();
                if (this._hzScrollBar) {
                    this._hzScrollBar.y = aHeight - this._hzScrollBar.height;
                    if (this._vtScrollBar) {
                        this._hzScrollBar.width = aWidth - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                        if (this._displayOnLeft) this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width; else this._hzScrollBar.x = this._scrollBarMargin.left;
                    } else {
                        this._hzScrollBar.width = aWidth - this._scrollBarMargin.left - this._scrollBarMargin.right;
                        this._hzScrollBar.x = this._scrollBarMargin.left;
                    }
                }
                if (this._vtScrollBar) {
                    if (!this._displayOnLeft) this._vtScrollBar.x = aWidth - this._vtScrollBar.width;
                    if (this._hzScrollBar) this._vtScrollBar.height = aHeight - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom; else this._vtScrollBar.height = aHeight - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                    this._vtScrollBar.y = this._scrollBarMargin.top;
                }
                this._viewSize.x = aWidth;
                this._viewSize.y = aHeight;
                if (this._hzScrollBar && !this._floating) this._viewSize.y -= this._hzScrollBar.height;
                if (this._vtScrollBar && !this._floating) this._viewSize.x -= this._vtScrollBar.width;
                this._viewSize.x -= this._owner.margin.left + this._owner.margin.right;
                this._viewSize.y -= this._owner.margin.top + this._owner.margin.bottom;
                this._viewSize.x = Math.max(1, this._viewSize.x);
                this._viewSize.y = Math.max(1, this._viewSize.y);
                this._pageSize.x = this._viewSize.x;
                this._pageSize.y = this._viewSize.y;
                this.handleSizeChanged();
            }
        }, {
            key: "setContentSize",
            value: function setContentSize(aWidth, aHeight) {
                if (this._contentSize.x == aWidth && this._contentSize.y == aHeight) return;
                this._contentSize.x = aWidth;
                this._contentSize.y = aHeight;
                this.handleSizeChanged();
            }
        }, {
            key: "changeContentSizeOnScrolling",
            value: function changeContentSizeOnScrolling(deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
                var isRightmost = this._xPos == this._overlapSize.x;
                var isBottom = this._yPos == this._overlapSize.y;
                this._contentSize.x += deltaWidth;
                this._contentSize.y += deltaHeight;
                this.handleSizeChanged();
                if (this._tweening == 1) {
                    if (deltaWidth != 0 && isRightmost && this._tweenChange.x < 0) {
                        this._xPos = this._overlapSize.x;
                        this._tweenChange.x = -this._xPos - this._tweenStart.x;
                    }
                    if (deltaHeight != 0 && isBottom && this._tweenChange.y < 0) {
                        this._yPos = this._overlapSize.y;
                        this._tweenChange.y = -this._yPos - this._tweenStart.y;
                    }
                } else if (this._tweening == 2) {
                    if (deltaPosX != 0) {
                        this._container.x -= deltaPosX;
                        this._tweenStart.x -= deltaPosX;
                        this._xPos = -this._container.x;
                    }
                    if (deltaPosY != 0) {
                        this._container.y -= deltaPosY;
                        this._tweenStart.y -= deltaPosY;
                        this._yPos = -this._container.y;
                    }
                } else if (this._dragged) {
                    if (deltaPosX != 0) {
                        this._container.x -= deltaPosX;
                        this._containerPos.x -= deltaPosX;
                        this._xPos = -this._container.x;
                    }
                    if (deltaPosY != 0) {
                        this._container.y -= deltaPosY;
                        this._containerPos.y -= deltaPosY;
                        this._yPos = -this._container.y;
                    }
                } else {
                    if (deltaWidth != 0 && isRightmost) {
                        this._xPos = this._overlapSize.x;
                        this._container.x = -this._xPos;
                    }
                    if (deltaHeight != 0 && isBottom) {
                        this._yPos = this._overlapSize.y;
                        this._container.y = -this._yPos;
                    }
                }
                if (this._pageMode) this.updatePageController();
            }
        }, {
            key: "handleSizeChanged",
            value: function handleSizeChanged() {
                if (this._displayInDemand) {
                    this._vScrollNone = this._contentSize.y <= this._viewSize.y;
                    this._hScrollNone = this._contentSize.x <= this._viewSize.x;
                }
                if (this._vtScrollBar) {
                    if (this._contentSize.y == 0) this._vtScrollBar.setDisplayPerc(0); else this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y));
                }
                if (this._hzScrollBar) {
                    if (this._contentSize.x == 0) this._hzScrollBar.setDisplayPerc(0); else this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x));
                }
                this.updateScrollBarVisible();
                var rect = this._maskContainer.scrollRect;
                if (rect) {
                    rect.width = this._viewSize.x;
                    rect.height = this._viewSize.y;
                    if (this._vScrollNone && this._vtScrollBar) rect.width += this._vtScrollBar.width;
                    if (this._hScrollNone && this._hzScrollBar) rect.height += this._hzScrollBar.height;
                    if (this._dontClipMargin) {
                        rect.width += this._owner.margin.left + this._owner.margin.right;
                        rect.height += this._owner.margin.top + this._owner.margin.bottom;
                    }
                    this._maskContainer.scrollRect = rect;
                }
                if (this._scrollType == fgui.ScrollType.Horizontal || this._scrollType == fgui.ScrollType.Both) this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x)); else this._overlapSize.x = 0;
                if (this._scrollType == fgui.ScrollType.Vertical || this._scrollType == fgui.ScrollType.Both) this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y)); else this._overlapSize.y = 0;
                this._xPos = fgui.ToolSet.clamp(this._xPos, 0, this._overlapSize.x);
                this._yPos = fgui.ToolSet.clamp(this._yPos, 0, this._overlapSize.y);
                if (this._refreshBarAxis != null) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0) max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0); else max += this._footerLockedSize;
                    if (this._refreshBarAxis == "x") {
                        this._container.pos(fgui.ToolSet.clamp(this._container.x, -max, this._headerLockedSize), fgui.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
                    } else {
                        this._container.pos(fgui.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), fgui.ToolSet.clamp(this._container.y, -max, this._headerLockedSize));
                    }
                    if (this._header) {
                        if (this._refreshBarAxis == "x") this._header.height = this._viewSize.y; else this._header.width = this._viewSize.x;
                    }
                    if (this._footer) {
                        if (this._refreshBarAxis == "y") this._footer.height = this._viewSize.y; else this._footer.width = this._viewSize.x;
                    }
                } else {
                    this._container.pos(fgui.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), fgui.ToolSet.clamp(this._container.y, -this._overlapSize.y, 0));
                }
                this.updateScrollBarPos();
                if (this._pageMode) this.updatePageController();
            }
        }, {
            key: "posChanged",
            value: function posChanged(ani) {
                if (this._aniFlag == 0) this._aniFlag = ani ? 1 : -1; else if (this._aniFlag == 1 && !ani) this._aniFlag = -1;
                this._needRefresh = true;
                Laya.timer.callLater(this, this.refresh);
            }
        }, {
            key: "refresh",
            value: function refresh() {
                if (!this._owner.displayObject) {
                    return;
                }
                this._needRefresh = false;
                Laya.timer.clear(this, this.refresh);
                if (this._pageMode || this._snapToItem) {
                    sEndPos.setTo(-this._xPos, -this._yPos);
                    this.alignPosition(sEndPos, false);
                    this._xPos = -sEndPos.x;
                    this._yPos = -sEndPos.y;
                }
                this.refresh2();
                fgui.Events.dispatch(fgui.Events.SCROLL, this._owner.displayObject);
                if (this._needRefresh) {
                    this._needRefresh = false;
                    Laya.timer.clear(this, this.refresh);
                    this.refresh2();
                }
                this.updateScrollBarPos();
                this._aniFlag = 0;
            }
        }, {
            key: "refresh2",
            value: function refresh2() {
                if (this._aniFlag == 1 && !this._dragged) {
                    var posX;
                    var posY;
                    if (this._overlapSize.x > 0) posX = -Math.floor(this._xPos); else {
                        if (this._container.x != 0) this._container.x = 0;
                        posX = 0;
                    }
                    if (this._overlapSize.y > 0) posY = -Math.floor(this._yPos); else {
                        if (this._container.y != 0) this._container.y = 0;
                        posY = 0;
                    }
                    if (posX != this._container.x || posY != this._container.y) {
                        this._tweenDuration.setTo(TWEEN_TIME_GO, TWEEN_TIME_GO);
                        this._tweenStart.setTo(this._container.x, this._container.y);
                        this._tweenChange.setTo(posX - this._tweenStart.x, posY - this._tweenStart.y);
                        this.startTween(1);
                    } else if (this._tweening != 0) this.killTween();
                } else {
                    if (this._tweening != 0) this.killTween();
                    this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos));
                    this.loopCheckingCurrent();
                }
                if (this._pageMode) this.updatePageController();
            }
        }, {
            key: "__mouseDown",
            value: function __mouseDown() {
                if (!this._touchEffect) return;
                if (this._tweening != 0) {
                    this.killTween();
                    this._dragged = true;
                } else this._dragged = false;
                var pt = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
                this._containerPos.setTo(this._container.x, this._container.y);
                this._beginTouchPos.setTo(pt.x, pt.y);
                this._lastTouchPos.setTo(pt.x, pt.y);
                this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
                this._isHoldAreaDone = false;
                this._velocity.setTo(0, 0);
                this._velocityScale = 1;
                this._lastMoveTime = Laya.timer.currTimer / 1e3;
                this._owner.displayObject.stage.on(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
                this._owner.displayObject.stage.on(Laya.Event.MOUSE_UP, this, this.__mouseUp);
                this._owner.displayObject.stage.on(Laya.Event.CLICK, this, this.__click);
                fgui.Events.dispatch(fgui.Events.DRAG_START, this._owner.displayObject);
            }
        }, {
            key: "__mouseMove",
            value: function __mouseMove() {
                if (!this._touchEffect || this.owner.isDisposed) return;
                if (ScrollPane.draggingPane && ScrollPane.draggingPane != this || fgui.GObject.draggingObject) return;
                fgui.Events.dispatch(fgui.Events.DRAG_MOVE, this._owner.displayObject);
                var sensitivity = fgui.UIConfig.touchScrollSensitivity;
                var pt = this._owner.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, s_vec2);
                var diff, diff2;
                var sv, sh, st;
                if (this._scrollType == fgui.ScrollType.Vertical) {
                    if (!this._isHoldAreaDone) {
                        _gestureFlag |= 1;
                        diff = Math.abs(this._beginTouchPos.y - pt.y);
                        if (diff < sensitivity) return;
                        if ((_gestureFlag & 2) != 0) {
                            diff2 = Math.abs(this._beginTouchPos.x - pt.x);
                            if (diff < diff2) return;
                        }
                    }
                    sv = true;
                } else if (this._scrollType == fgui.ScrollType.Horizontal) {
                    if (!this._isHoldAreaDone) {
                        _gestureFlag |= 2;
                        diff = Math.abs(this._beginTouchPos.x - pt.x);
                        if (diff < sensitivity) return;
                        if ((_gestureFlag & 1) != 0) {
                            diff2 = Math.abs(this._beginTouchPos.y - pt.y);
                            if (diff < diff2) return;
                        }
                    }
                    sh = true;
                } else {
                    _gestureFlag = 3;
                    if (!this._isHoldAreaDone) {
                        diff = Math.abs(this._beginTouchPos.y - pt.y);
                        if (diff < sensitivity) {
                            diff = Math.abs(this._beginTouchPos.x - pt.x);
                            if (diff < sensitivity) return;
                        }
                    }
                    sv = sh = true;
                }
                var newPosX = Math.floor(this._containerPos.x + pt.x - this._beginTouchPos.x);
                var newPosY = Math.floor(this._containerPos.y + pt.y - this._beginTouchPos.y);
                if (sv) {
                    if (newPosY > 0) {
                        if (!this._bouncebackEffect) this._container.y = 0; else if (this._header && this._header.maxHeight != 0) this._container.y = Math.floor(Math.min(newPosY * .5, this._header.maxHeight)); else this._container.y = Math.floor(Math.min(newPosY * .5, this._viewSize.y * PULL_RATIO));
                    } else if (newPosY < -this._overlapSize.y) {
                        if (!this._bouncebackEffect) this._container.y = -this._overlapSize.y; else if (this._footer && this._footer.maxHeight > 0) this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * .5, -this._footer.maxHeight) - this._overlapSize.y); else this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * .5, -this._viewSize.y * PULL_RATIO) - this._overlapSize.y);
                    } else this._container.y = newPosY;
                }
                if (sh) {
                    if (newPosX > 0) {
                        if (!this._bouncebackEffect) this._container.x = 0; else if (this._header && this._header.maxWidth != 0) this._container.x = Math.floor(Math.min(newPosX * .5, this._header.maxWidth)); else this._container.x = Math.floor(Math.min(newPosX * .5, this._viewSize.x * PULL_RATIO));
                    } else if (newPosX < 0 - this._overlapSize.x) {
                        if (!this._bouncebackEffect) this._container.x = -this._overlapSize.x; else if (this._footer && this._footer.maxWidth > 0) this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * .5, -this._footer.maxWidth) - this._overlapSize.x); else this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * .5, -this._viewSize.x * PULL_RATIO) - this._overlapSize.x);
                    } else this._container.x = newPosX;
                }
                var frameRate = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60;
                var now = Laya.timer.currTimer / 1e3;
                var deltaTime = Math.max(now - this._lastMoveTime, 1 / frameRate);
                var deltaPositionX = pt.x - this._lastTouchPos.x;
                var deltaPositionY = pt.y - this._lastTouchPos.y;
                if (!sh) deltaPositionX = 0;
                if (!sv) deltaPositionY = 0;
                if (deltaTime != 0) {
                    var elapsed = deltaTime * frameRate - 1;
                    if (elapsed > 1) {
                        var factor = Math.pow(.833, elapsed);
                        this._velocity.x = this._velocity.x * factor;
                        this._velocity.y = this._velocity.y * factor;
                    }
                    this._velocity.x = fgui.ToolSet.lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                    this._velocity.y = fgui.ToolSet.lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
                }
                var deltaGlobalPositionX = this._lastTouchGlobalPos.x - Laya.stage.mouseX;
                var deltaGlobalPositionY = this._lastTouchGlobalPos.y - Laya.stage.mouseY;
                if (deltaPositionX != 0) this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX); else if (deltaPositionY != 0) this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
                this._lastTouchPos.setTo(pt.x, pt.y);
                this._lastTouchGlobalPos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
                this._lastMoveTime = now;
                if (this._overlapSize.x > 0) this._xPos = fgui.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
                if (this._overlapSize.y > 0) this._yPos = fgui.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
                if (this._loop != 0) {
                    newPosX = this._container.x;
                    newPosY = this._container.y;
                    if (this.loopCheckingCurrent()) {
                        this._containerPos.x += this._container.x - newPosX;
                        this._containerPos.y += this._container.y - newPosY;
                    }
                }
                ScrollPane.draggingPane = this;
                this._isHoldAreaDone = true;
                this._dragged = true;
                this._maskContainer.mouseEnabled = false;
                this.updateScrollBarPos();
                this.updateScrollBarVisible();
                if (this._pageMode) this.updatePageController();
                fgui.Events.dispatch(fgui.Events.SCROLL, this._owner.displayObject);
            }
        }, {
            key: "__mouseUp",
            value: function __mouseUp() {
                if (this._owner.isDisposed) return;
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_MOVE, this, this.__mouseMove);
                this._owner.displayObject.stage.off(Laya.Event.MOUSE_UP, this, this.__mouseUp);
                this._owner.displayObject.stage.off(Laya.Event.CLICK, this, this.__click);
                fgui.Events.dispatch(fgui.Events.DRAG_END, this._owner.displayObject);
                if (ScrollPane.draggingPane == this) ScrollPane.draggingPane = null;
                _gestureFlag = 0;
                if (!this._dragged || !this._touchEffect) {
                    this._dragged = false;
                    this._maskContainer.mouseEnabled = true;
                    return;
                }
                this._dragged = false;
                this._maskContainer.mouseEnabled = true;
                this._tweenStart.setTo(this._container.x, this._container.y);
                sEndPos.setTo(this._tweenStart.x, this._tweenStart.y);
                var flag = false;
                if (this._container.x > 0) {
                    sEndPos.x = 0;
                    flag = true;
                } else if (this._container.x < -this._overlapSize.x) {
                    sEndPos.x = -this._overlapSize.x;
                    flag = true;
                }
                if (this._container.y > 0) {
                    sEndPos.y = 0;
                    flag = true;
                } else if (this._container.y < -this._overlapSize.y) {
                    sEndPos.y = -this._overlapSize.y;
                    flag = true;
                }
                if (flag) {
                    this._tweenChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
                    if (this._tweenChange.x < -fgui.UIConfig.touchDragSensitivity || this._tweenChange.y < -fgui.UIConfig.touchDragSensitivity) {
                        this._refreshEventDispatching = true;
                        fgui.Events.dispatch(fgui.Events.PULL_DOWN_RELEASE, this._owner.displayObject);
                        this._refreshEventDispatching = false;
                    } else if (this._tweenChange.x > fgui.UIConfig.touchDragSensitivity || this._tweenChange.y > fgui.UIConfig.touchDragSensitivity) {
                        this._refreshEventDispatching = true;
                        fgui.Events.dispatch(fgui.Events.PULL_UP_RELEASE, this._owner.displayObject);
                        this._refreshEventDispatching = false;
                    }
                    if (this._headerLockedSize > 0 && sEndPos[this._refreshBarAxis] == 0) {
                        sEndPos[this._refreshBarAxis] = this._headerLockedSize;
                        this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                        this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                    } else if (this._footerLockedSize > 0 && sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                        var max = this._overlapSize[this._refreshBarAxis];
                        if (max == 0) max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0); else max += this._footerLockedSize;
                        sEndPos[this._refreshBarAxis] = -max;
                        this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                        this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                    }
                    this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                } else {
                    if (!this._inertiaDisabled) {
                        var frameRate = Laya.stage.frameRate == Laya.Stage.FRAME_SLOW ? 30 : 60;
                        var elapsed = (Laya.timer.currTimer / 1e3 - this._lastMoveTime) * frameRate - 1;
                        if (elapsed > 1) {
                            var factor = Math.pow(.833, elapsed);
                            this._velocity.x = this._velocity.x * factor;
                            this._velocity.y = this._velocity.y * factor;
                        }
                        this.updateTargetAndDuration(this._tweenStart, sEndPos);
                    } else this._tweenDuration.setTo(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                    sOldChange.setTo(sEndPos.x - this._tweenStart.x, sEndPos.y - this._tweenStart.y);
                    this.loopCheckingTarget(sEndPos);
                    if (this._pageMode || this._snapToItem) this.alignPosition(sEndPos, true);
                    this._tweenChange.x = sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = sEndPos.y - this._tweenStart.y;
                    if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                        this.updateScrollBarVisible();
                        return;
                    }
                    if (this._pageMode || this._snapToItem) {
                        this.fixDuration("x", sOldChange.x);
                        this.fixDuration("y", sOldChange.y);
                    }
                }
                this.startTween(2);
            }
        }, {
            key: "__click",
            value: function __click() {
                this._dragged = false;
            }
        }, {
            key: "__mouseWheel",
            value: function __mouseWheel(evt) {
                if (!this._mouseWheelEnabled) return;
                var delta = evt["delta"];
                delta = delta > 0 ? -1 : delta < 0 ? 1 : 0;
                if (this._overlapSize.x > 0 && this._overlapSize.y == 0) {
                    if (this._pageMode) this.setPosX(this._xPos + this._pageSize.x * delta, false); else this.setPosX(this._xPos + this._mouseWheelStep * delta, false);
                } else {
                    if (this._pageMode) this.setPosY(this._yPos + this._pageSize.y * delta, false); else this.setPosY(this._yPos + this._mouseWheelStep * delta, false);
                }
            }
        }, {
            key: "updateScrollBarPos",
            value: function updateScrollBarPos() {
                if (this._vtScrollBar) this._vtScrollBar.setScrollPerc(this._overlapSize.y == 0 ? 0 : fgui.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y);
                if (this._hzScrollBar) this._hzScrollBar.setScrollPerc(this._overlapSize.x == 0 ? 0 : fgui.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x);
                this.checkRefreshBar();
            }
        }, {
            key: "updateScrollBarVisible",
            value: function updateScrollBarVisible() {
                if (this._vtScrollBar) {
                    if (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone) this._vtScrollBar.displayObject.visible = false; else this.updateScrollBarVisible2(this._vtScrollBar);
                }
                if (this._hzScrollBar) {
                    if (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone) this._hzScrollBar.displayObject.visible = false; else this.updateScrollBarVisible2(this._hzScrollBar);
                }
            }
        }, {
            key: "updateScrollBarVisible2",
            value: function updateScrollBarVisible2(bar) {
                if (this._scrollBarDisplayAuto) fgui.GTween.kill(bar, false, "alpha");
                if (this._scrollBarDisplayAuto && this._tweening == 0 && !this._dragged && !bar.gripDragging) {
                    if (bar.displayObject.visible) fgui.GTween.to(1, 0, .5).setDelay(.5).onComplete(this.__barTweenComplete, this).setTarget(bar, "alpha");
                } else {
                    bar.alpha = 1;
                    bar.displayObject.visible = true;
                }
            }
        }, {
            key: "__barTweenComplete",
            value: function __barTweenComplete(tweener) {
                var bar = tweener.target;
                bar.alpha = 1;
                bar.displayObject.visible = false;
            }
        }, {
            key: "getLoopPartSize",
            value: function getLoopPartSize(division, axis) {
                return (this._contentSize[axis] + (axis == "x" ? this._owner.columnGap : this._owner.lineGap)) / division;
            }
        }, {
            key: "loopCheckingCurrent",
            value: function loopCheckingCurrent() {
                var changed = false;
                if (this._loop == 1 && this._overlapSize.x > 0) {
                    if (this._xPos < .001) {
                        this._xPos += this.getLoopPartSize(2, "x");
                        changed = true;
                    } else if (this._xPos >= this._overlapSize.x) {
                        this._xPos -= this.getLoopPartSize(2, "x");
                        changed = true;
                    }
                } else if (this._loop == 2 && this._overlapSize.y > 0) {
                    if (this._yPos < .001) {
                        this._yPos += this.getLoopPartSize(2, "y");
                        changed = true;
                    } else if (this._yPos >= this._overlapSize.y) {
                        this._yPos -= this.getLoopPartSize(2, "y");
                        changed = true;
                    }
                }
                if (changed) this._container.pos(Math.floor(-this._xPos), Math.floor(-this._yPos));
                return changed;
            }
        }, {
            key: "loopCheckingTarget",
            value: function loopCheckingTarget(endPos) {
                if (this._loop == 1) this.loopCheckingTarget2(endPos, "x");
                if (this._loop == 2) this.loopCheckingTarget2(endPos, "y");
            }
        }, {
            key: "loopCheckingTarget2",
            value: function loopCheckingTarget2(endPos, axis) {
                var halfSize;
                var tmp;
                if (endPos[axis] > 0) {
                    halfSize = this.getLoopPartSize(2, axis);
                    tmp = this._tweenStart[axis] - halfSize;
                    if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                        endPos[axis] -= halfSize;
                        this._tweenStart[axis] = tmp;
                    }
                } else if (endPos[axis] < -this._overlapSize[axis]) {
                    halfSize = this.getLoopPartSize(2, axis);
                    tmp = this._tweenStart[axis] + halfSize;
                    if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                        endPos[axis] += halfSize;
                        this._tweenStart[axis] = tmp;
                    }
                }
            }
        }, {
            key: "loopCheckingNewPos",
            value: function loopCheckingNewPos(value, axis) {
                if (this._overlapSize[axis] == 0) return value;
                var pos = axis == "x" ? this._xPos : this._yPos;
                var changed = false;
                var v;
                if (value < .001) {
                    value += this.getLoopPartSize(2, axis);
                    if (value > pos) {
                        v = this.getLoopPartSize(6, axis);
                        v = Math.ceil((value - pos) / v) * v;
                        pos = fgui.ToolSet.clamp(pos + v, 0, this._overlapSize[axis]);
                        changed = true;
                    }
                } else if (value >= this._overlapSize[axis]) {
                    value -= this.getLoopPartSize(2, axis);
                    if (value < pos) {
                        v = this.getLoopPartSize(6, axis);
                        v = Math.ceil((pos - value) / v) * v;
                        pos = fgui.ToolSet.clamp(pos - v, 0, this._overlapSize[axis]);
                        changed = true;
                    }
                }
                if (changed) {
                    if (axis == "x") this._container.x = -Math.floor(pos); else this._container.y = -Math.floor(pos);
                }
                return value;
            }
        }, {
            key: "alignPosition",
            value: function alignPosition(pos, inertialScrolling) {
                if (this._pageMode) {
                    pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
                    pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
                } else if (this._snapToItem) {
                    var xDir = 0;
                    var yDir = 0;
                    if (inertialScrolling) {
                        xDir = pos.x - this._containerPos.x;
                        yDir = pos.y - this._containerPos.y;
                    }
                    var pt = this._owner.getSnappingPositionWithDir(-pos.x, -pos.y, xDir, yDir, s_vec2);
                    if (pos.x < 0 && pos.x > -this._overlapSize.x) pos.x = -pt.x;
                    if (pos.y < 0 && pos.y > -this._overlapSize.y) pos.y = -pt.y;
                }
            }
        }, {
            key: "alignByPage",
            value: function alignByPage(pos, axis, inertialScrolling) {
                var page;
                if (pos > 0) page = 0; else if (pos < -this._overlapSize[axis]) page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1; else {
                    page = Math.floor(-pos / this._pageSize[axis]);
                    var change = inertialScrolling ? pos - this._containerPos[axis] : pos - this._container[axis];
                    var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
                    var delta = -pos - page * this._pageSize[axis];
                    if (Math.abs(change) > this._pageSize[axis]) {
                        if (delta > testPageSize * .5) page++;
                    } else {
                        if (delta > testPageSize * (change < 0 ? fgui.UIConfig.defaultScrollPagingThreshold : 1 - fgui.UIConfig.defaultScrollPagingThreshold)) page++;
                    }
                    pos = -page * this._pageSize[axis];
                    if (pos < -this._overlapSize[axis]) pos = -this._overlapSize[axis];
                }
                if (inertialScrolling) {
                    var oldPos = this._tweenStart[axis];
                    var oldPage;
                    if (oldPos > 0) oldPage = 0; else if (oldPos < -this._overlapSize[axis]) oldPage = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1; else oldPage = Math.floor(-oldPos / this._pageSize[axis]);
                    var startPage = Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
                    if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                        if (page > startPage) page = startPage + 1; else page = startPage - 1;
                        pos = -page * this._pageSize[axis];
                    }
                }
                return pos;
            }
        }, {
            key: "updateTargetAndDuration",
            value: function updateTargetAndDuration(orignPos, resultPos) {
                resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
                resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
            }
        }, {
            key: "updateTargetAndDuration2",
            value: function updateTargetAndDuration2(pos, axis) {
                var v = this._velocity[axis];
                var duration = 0;
                if (pos > 0) pos = 0; else if (pos < -this._overlapSize[axis]) pos = -this._overlapSize[axis]; else {
                    var v2 = Math.abs(v) * this._velocityScale;
                    if (Laya.Browser.onMobile) v2 *= 1136 / Math.max(Laya.stage.width, Laya.stage.height);
                    var ratio = 0;
                    if (this._pageMode || !Laya.Browser.onMobile) {
                        if (v2 > 500) ratio = Math.pow((v2 - 500) / 500, 2);
                    } else {
                        if (v2 > 1e3) ratio = Math.pow((v2 - 1e3) / 1e3, 2);
                    }
                    if (ratio != 0) {
                        if (ratio > 1) ratio = 1;
                        v2 *= ratio;
                        v *= ratio;
                        this._velocity[axis] = v;
                        duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
                        var change = Math.floor(v * duration * .4);
                        pos += change;
                    }
                }
                if (duration < TWEEN_TIME_DEFAULT) duration = TWEEN_TIME_DEFAULT;
                this._tweenDuration[axis] = duration;
                return pos;
            }
        }, {
            key: "fixDuration",
            value: function fixDuration(axis, oldChange) {
                if (this._tweenChange[axis] == 0 || Math.abs(this._tweenChange[axis]) >= Math.abs(oldChange)) return;
                var newDuration = Math.abs(this._tweenChange[axis] / oldChange) * this._tweenDuration[axis];
                if (newDuration < TWEEN_TIME_DEFAULT) newDuration = TWEEN_TIME_DEFAULT;
                this._tweenDuration[axis] = newDuration;
            }
        }, {
            key: "startTween",
            value: function startTween(type) {
                this._tweenTime.setTo(0, 0);
                this._tweening = type;
                Laya.timer.frameLoop(1, this, this.tweenUpdate);
                this.updateScrollBarVisible();
            }
        }, {
            key: "killTween",
            value: function killTween() {
                if (this._tweening == 1) {
                    this._container.pos(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
                    fgui.Events.dispatch(fgui.Events.SCROLL, this._owner.displayObject);
                }
                this._tweening = 0;
                Laya.timer.clear(this, this.tweenUpdate);
                this.updateScrollBarVisible();
                fgui.Events.dispatch(fgui.Events.SCROLL_END, this._owner.displayObject);
            }
        }, {
            key: "checkRefreshBar",
            value: function checkRefreshBar() {
                if (!this._header && !this._footer) return;
                var pos = this._container[this._refreshBarAxis];
                if (this._header) {
                    if (pos > 0) {
                        if (!this._header.displayObject.parent) this._maskContainer.addChildAt(this._header.displayObject, 0);
                        var pt = s_vec2;
                        pt.setTo(this._header.width, this._header.height);
                        pt[this._refreshBarAxis] = pos;
                        this._header.setSize(pt.x, pt.y);
                    } else {
                        if (this._header.displayObject.parent) this._maskContainer.removeChild(this._header.displayObject);
                    }
                }
                if (this._footer) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (pos < -max || max == 0 && this._footerLockedSize > 0) {
                        if (!this._footer.displayObject.parent) this._maskContainer.addChildAt(this._footer.displayObject, 0);
                        pt = s_vec2;
                        pt.setTo(this._footer.x, this._footer.y);
                        if (max > 0) pt[this._refreshBarAxis] = pos + this._contentSize[this._refreshBarAxis]; else pt[this._refreshBarAxis] = Math.max(Math.min(pos + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
                        this._footer.setXY(pt.x, pt.y);
                        pt.setTo(this._footer.width, this._footer.height);
                        if (max > 0) pt[this._refreshBarAxis] = -max - pos; else pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
                        this._footer.setSize(pt.x, pt.y);
                    } else {
                        if (this._footer.displayObject.parent) this._maskContainer.removeChild(this._footer.displayObject);
                    }
                }
            }
        }, {
            key: "tweenUpdate",
            value: function tweenUpdate() {
                var nx = this.runTween("x");
                var ny = this.runTween("y");
                this._container.pos(nx, ny);
                if (this._tweening == 2) {
                    if (this._overlapSize.x > 0) this._xPos = fgui.ToolSet.clamp(-nx, 0, this._overlapSize.x);
                    if (this._overlapSize.y > 0) this._yPos = fgui.ToolSet.clamp(-ny, 0, this._overlapSize.y);
                    if (this._pageMode) this.updatePageController();
                }
                if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                    this._tweening = 0;
                    Laya.timer.clear(this, this.tweenUpdate);
                    this.loopCheckingCurrent();
                    this.updateScrollBarPos();
                    this.updateScrollBarVisible();
                    fgui.Events.dispatch(fgui.Events.SCROLL, this._owner.displayObject);
                    fgui.Events.dispatch(fgui.Events.SCROLL_END, this._owner.displayObject);
                } else {
                    this.updateScrollBarPos();
                    fgui.Events.dispatch(fgui.Events.SCROLL, this._owner.displayObject);
                }
            }
        }, {
            key: "runTween",
            value: function runTween(axis) {
                var newValue;
                if (this._tweenChange[axis] != 0) {
                    this._tweenTime[axis] += Laya.timer.delta / 1e3;
                    if (this._tweenTime[axis] >= this._tweenDuration[axis]) {
                        newValue = this._tweenStart[axis] + this._tweenChange[axis];
                        this._tweenChange[axis] = 0;
                    } else {
                        var ratio = easeFunc(this._tweenTime[axis], this._tweenDuration[axis]);
                        newValue = this._tweenStart[axis] + Math.floor(this._tweenChange[axis] * ratio);
                    }
                    var threshold1 = 0;
                    var threshold2 = -this._overlapSize[axis];
                    if (this._headerLockedSize > 0 && this._refreshBarAxis == axis) threshold1 = this._headerLockedSize;
                    if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                        var max = this._overlapSize[this._refreshBarAxis];
                        if (max == 0) max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0); else max += this._footerLockedSize;
                        threshold2 = -max;
                    }
                    if (this._tweening == 2 && this._bouncebackEffect) {
                        if (newValue > 20 + threshold1 && this._tweenChange[axis] > 0 || newValue > threshold1 && this._tweenChange[axis] == 0) {
                            this._tweenTime[axis] = 0;
                            this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                            this._tweenChange[axis] = -newValue + threshold1;
                            this._tweenStart[axis] = newValue;
                        } else if (newValue < threshold2 - 20 && this._tweenChange[axis] < 0 || newValue < threshold2 && this._tweenChange[axis] == 0) {
                            this._tweenTime[axis] = 0;
                            this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                            this._tweenChange[axis] = threshold2 - newValue;
                            this._tweenStart[axis] = newValue;
                        }
                    } else {
                        if (newValue > threshold1) {
                            newValue = threshold1;
                            this._tweenChange[axis] = 0;
                        } else if (newValue < threshold2) {
                            newValue = threshold2;
                            this._tweenChange[axis] = 0;
                        }
                    }
                } else newValue = this._container[axis];
                return newValue;
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
            set: function set(sc) {
                this._bouncebackEffect = sc;
            }
        }, {
            key: "touchEffect",
            get: function get() {
                return this._touchEffect;
            },
            set: function set(sc) {
                this._touchEffect = sc;
            }
        }, {
            key: "scrollStep",
            set: function set(val) {
                this._scrollStep = val;
                if (this._scrollStep == 0) this._scrollStep = fgui.UIConfig.defaultScrollStep;
                this._mouseWheelStep = this._scrollStep * 2;
            },
            get: function get() {
                return this._scrollStep;
            }
        }, {
            key: "snapToItem",
            get: function get() {
                return this._snapToItem;
            },
            set: function set(value) {
                this._snapToItem = value;
            }
        }, {
            key: "mouseWheelEnabled",
            get: function get() {
                return this._mouseWheelEnabled;
            },
            set: function set(value) {
                this._mouseWheelEnabled = value;
            }
        }, {
            key: "decelerationRate",
            get: function get() {
                return this._decelerationRate;
            },
            set: function set(value) {
                this._decelerationRate = value;
            }
        }, {
            key: "isDragged",
            get: function get() {
                return this._dragged;
            }
        }, {
            key: "percX",
            get: function get() {
                return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
            },
            set: function set(value) {
                this.setPercX(value, false);
            }
        }, {
            key: "percY",
            get: function get() {
                return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
            },
            set: function set(value) {
                this.setPercY(value, false);
            }
        }, {
            key: "posX",
            get: function get() {
                return this._xPos;
            },
            set: function set(value) {
                this.setPosX(value, false);
            }
        }, {
            key: "posY",
            get: function get() {
                return this._yPos;
            },
            set: function set(value) {
                this.setPosY(value, false);
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
            set: function set(value) {
                value = value + this._owner.margin.left + this._owner.margin.right;
                if (this._vtScrollBar && !this._floating) value += this._vtScrollBar.width;
                this._owner.width = value;
            }
        }, {
            key: "viewHeight",
            get: function get() {
                return this._viewSize.y;
            },
            set: function set(value) {
                value = value + this._owner.margin.top + this._owner.margin.bottom;
                if (this._hzScrollBar && !this._floating) value += this._hzScrollBar.height;
                this._owner.height = value;
            }
        }, {
            key: "currentPageX",
            get: function get() {
                if (!this._pageMode) return 0;
                var page = Math.floor(this._xPos / this._pageSize.x);
                if (this._xPos - page * this._pageSize.x > this._pageSize.x * .5) page++;
                return page;
            },
            set: function set(value) {
                this.setCurrentPageX(value, false);
            }
        }, {
            key: "currentPageY",
            get: function get() {
                if (!this._pageMode) return 0;
                var page = Math.floor(this._yPos / this._pageSize.y);
                if (this._yPos - page * this._pageSize.y > this._pageSize.y * .5) page++;
                return page;
            },
            set: function set(value) {
                this.setCurrentPageY(value, false);
            }
        }, {
            key: "isBottomMost",
            get: function get() {
                return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
            }
        }, {
            key: "isRightMost",
            get: function get() {
                return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
            }
        }, {
            key: "pageController",
            get: function get() {
                return this._pageController;
            },
            set: function set(value) {
                this._pageController = value;
            }
        }, {
            key: "scrollingPosX",
            get: function get() {
                return fgui.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
            }
        }, {
            key: "scrollingPosY",
            get: function get() {
                return fgui.ToolSet.clamp(-this._container.y, 0, this._overlapSize.y);
            }
        } ]);
        return ScrollPane;
    }();
    fgui.ScrollPane = ScrollPane;
    var _gestureFlag = 0;
    var TWEEN_TIME_GO = .5;
    var TWEEN_TIME_DEFAULT = .3;
    var PULL_RATIO = .5;
    var s_vec2 = new Laya.Point();
    var s_rect = new Laya.Rectangle();
    var sEndPos = new Laya.Point();
    var sOldChange = new Laya.Point();
    function easeFunc(t, d) {
        return (t = t / d - 1) * t * t + 1;
    }
})(fgui);

(function(fgui) {
    var Transition = /* */ function() {
        function Transition(owner) {
            (0, _classCallCheck2.default)(this, Transition);
            this._owner = owner;
            this._items = new Array();
            this._totalDuration = 0;
            this._autoPlayTimes = 1;
            this._autoPlayDelay = 0;
            this._timeScale = 1;
            this._startTime = 0;
            this._endTime = 0;
        }
        (0, _createClass2.default)(Transition, [ {
            key: "play",
            value: function play(onComplete, times, delay, startTime, endTime) {
                this._play(onComplete, times, delay, startTime, endTime, false);
            }
        }, {
            key: "playReverse",
            value: function playReverse(onComplete, times, delay, startTime, endTime) {
                this._play(onComplete, 1, delay, startTime, endTime, true);
            }
        }, {
            key: "changePlayTimes",
            value: function changePlayTimes(value) {
                this._totalTimes = value;
            }
        }, {
            key: "setAutoPlay",
            value: function setAutoPlay(value, times, delay) {
                if (times == undefined) times = -1;
                if (delay == undefined) delay = 0;
                if (this._autoPlay != value) {
                    this._autoPlay = value;
                    this._autoPlayTimes = times;
                    this._autoPlayDelay = delay;
                    if (this._autoPlay) {
                        if (this._owner.onStage) this.play(null, null, this._autoPlayTimes, this._autoPlayDelay);
                    } else {
                        if (!this._owner.onStage) this.stop(false, true);
                    }
                }
            }
        }, {
            key: "_play",
            value: function _play(onComplete, times, delay, startTime, endTime, reversed) {
                if (times == undefined) times = 1;
                if (delay == undefined) delay = 0;
                if (startTime == undefined) startTime = 0;
                if (endTime == undefined) endTime = -1;
                this.stop(true, true);
                this._totalTimes = times;
                this._reversed = reversed;
                this._startTime = startTime;
                this._endTime = endTime;
                this._playing = true;
                this._paused = false;
                this._onComplete = onComplete;
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.target == null) {
                        if (item.targetId) item.target = this._owner.getChildById(item.targetId); else item.target = this._owner;
                    } else if (item.target != this._owner && item.target.parent != this._owner) item.target = null;
                    if (item.target && item.type == ActionType.Transition) {
                        var trans = item.target.getTransition(item.value.transName);
                        if (trans == this) trans = null;
                        if (trans) {
                            if (item.value.playTimes == 0) {
                                var j;
                                for (j = i - 1; j >= 0; j--) {
                                    var item2 = this._items[j];
                                    if (item2.type == ActionType.Transition) {
                                        if (item2.value.trans == trans) {
                                            item2.value.stopTime = item.time - item2.time;
                                            break;
                                        }
                                    }
                                }
                                if (j < 0) item.value.stopTime = 0; else trans = null;
                            } else item.value.stopTime = -1;
                        }
                        item.value.trans = trans;
                    }
                }
                if (delay == 0) this.onDelayedPlay(); else fgui.GTween.delayedCall(delay).setTarget(this).onComplete(this.onDelayedPlay, this);
            }
        }, {
            key: "stop",
            value: function stop(setToComplete, processCallback) {
                if (!this._playing) return;
                if (setToComplete == undefined) setToComplete = true;
                this._playing = false;
                this._totalTasks = 0;
                this._totalTimes = 0;
                var handler = this._onComplete;
                this._onComplete = null;
                fgui.GTween.kill(this);
                var cnt = this._items.length;
                if (this._reversed) {
                    for (var i = cnt - 1; i >= 0; i--) {
                        var item = this._items[i];
                        if (item.target == null) continue;
                        this.stopItem(item, setToComplete);
                    }
                } else {
                    for (i = 0; i < cnt; i++) {
                        item = this._items[i];
                        if (item.target == null) continue;
                        this.stopItem(item, setToComplete);
                    }
                }
                if (processCallback && handler) {
                    handler.run();
                }
            }
        }, {
            key: "stopItem",
            value: function stopItem(item, setToComplete) {
                if (item.displayLockToken != 0) {
                    item.target.releaseDisplayLock(item.displayLockToken);
                    item.displayLockToken = 0;
                }
                if (item.tweener) {
                    item.tweener.kill(setToComplete);
                    item.tweener = null;
                    if (item.type == ActionType.Shake && !setToComplete) {
                        item.target._gearLocked = true;
                        item.target.setXY(item.target.x - item.value.lastOffsetX, item.target.y - item.value.lastOffsetY);
                        item.target._gearLocked = false;
                    }
                }
                if (item.type == ActionType.Transition) {
                    var trans = item.value.trans;
                    if (trans) trans.stop(setToComplete, false);
                }
            }
        }, {
            key: "setPaused",
            value: function setPaused(paused) {
                if (!this._playing || this._paused == paused) return;
                this._paused = paused;
                var tweener = fgui.GTween.getTween(this);
                if (tweener) tweener.setPaused(paused);
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.target == null) continue;
                    if (item.type == ActionType.Transition) {
                        if (item.value.trans) item.value.trans.setPaused(paused);
                    } else if (item.type == ActionType.Animation) {
                        if (paused) {
                            item.value.flag = item.target.getProp(fgui.ObjectPropID.Playing);
                            item.target.setProp(fgui.ObjectPropID.Playing, false);
                        } else item.target.setProp(fgui.ObjectPropID.Playing, item.value.flag);
                    }
                    if (item.tweener) item.tweener.setPaused(paused);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (this._playing) fgui.GTween.kill(this);
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.tweener) {
                        item.tweener.kill();
                        item.tweener = null;
                    }
                    item.target = null;
                    item.hook = null;
                    if (item.tweenConfig) item.tweenConfig.endHook = null;
                }
                this._items.length = 0;
                this._playing = false;
                this._onComplete = null;
            }
        }, {
            key: "setValue",
            value: function setValue(label) {
                var cnt = this._items.length;
                var found = false;
                var value;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.label == label) {
                        if (item.tweenConfig) value = item.tweenConfig.startValue; else value = item.value;
                        found = true;
                    } else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                        value = item.tweenConfig.endValue;
                        found = true;
                    } else continue;
                    switch (item.type) {
                      case ActionType.XY:
                      case ActionType.Size:
                      case ActionType.Pivot:
                      case ActionType.Scale:
                      case ActionType.Skew:
                        value.b1 = true;
                        value.b2 = true;
                        value.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        value.f2 = parseFloat(arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case ActionType.Alpha:
                        value.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        break;

                      case ActionType.Rotation:
                        value.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        break;

                      case ActionType.Color:
                        value.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        break;

                      case ActionType.Animation:
                        value.frame = parseInt(arguments.length <= 1 ? undefined : arguments[1]);
                        if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 1) value.playing = arguments.length <= 2 ? undefined : arguments[2];
                        break;

                      case ActionType.Visible:
                        value.visible = arguments.length <= 1 ? undefined : arguments[1];
                        break;

                      case ActionType.Sound:
                        value.sound = arguments.length <= 1 ? undefined : arguments[1];
                        if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 1) value.volume = parseFloat(arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case ActionType.Transition:
                        value.transName = arguments.length <= 1 ? undefined : arguments[1];
                        if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 1) value.playTimes = parseInt(arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case ActionType.Shake:
                        value.amplitude = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 1) value.duration = parseFloat(arguments.length <= 2 ? undefined : arguments[2]);
                        break;

                      case ActionType.ColorFilter:
                        value.f1 = parseFloat(arguments.length <= 1 ? undefined : arguments[1]);
                        value.f2 = parseFloat(arguments.length <= 2 ? undefined : arguments[2]);
                        value.f3 = parseFloat(arguments.length <= 3 ? undefined : arguments[3]);
                        value.f4 = parseFloat(arguments.length <= 4 ? undefined : arguments[4]);
                        break;

                      case ActionType.Text:
                      case ActionType.Icon:
                        value.text = arguments.length <= 1 ? undefined : arguments[1];
                        break;
                    }
                }
                if (!found) throw new Error("this.label not exists");
            }
        }, {
            key: "setHook",
            value: function setHook(label, callback) {
                var cnt = this._items.length;
                var found = false;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.label == label) {
                        item.hook = callback;
                        found = true;
                        break;
                    } else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                        item.tweenConfig.endHook = callback;
                        found = true;
                        break;
                    }
                }
                if (!found) throw new Error("this.label not exists");
            }
        }, {
            key: "clearHooks",
            value: function clearHooks() {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    item.hook = null;
                    if (item.tweenConfig) item.tweenConfig.endHook = null;
                }
            }
        }, {
            key: "setTarget",
            value: function setTarget(label, newTarget) {
                var cnt = this._items.length;
                var found = false;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.label == label) {
                        item.targetId = newTarget == this._owner || newTarget == null ? "" : newTarget.id;
                        if (this._playing) {
                            if (item.targetId.length > 0) item.target = this._owner.getChildById(item.targetId); else item.target = this._owner;
                        } else item.target = null;
                        found = true;
                    }
                }
                if (!found) throw new Error("this.label not exists");
            }
        }, {
            key: "setDuration",
            value: function setDuration(label, value) {
                var cnt = this._items.length;
                var found = false;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.tweenConfig && item.label == label) {
                        item.tweenConfig.duration = value;
                        found = true;
                    }
                }
                if (!found) throw new Error("this.label not exists");
            }
        }, {
            key: "getLabelTime",
            value: function getLabelTime(label) {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.label == label) return item.time; else if (item.tweenConfig && item.tweenConfig.endLabel == label) return item.time + item.tweenConfig.duration;
                }
                return NaN;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(targetId, dx, dy) {
                var cnt = this._items.length;
                if (cnt == 0) return;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.type == ActionType.XY && item.targetId == targetId) {
                        if (item.tweenConfig) {
                            if (!item.tweenConfig.startValue.b3) {
                                item.tweenConfig.startValue.f1 += dx;
                                item.tweenConfig.startValue.f2 += dy;
                            }
                            if (!item.tweenConfig.endValue.b3) {
                                item.tweenConfig.endValue.f1 += dx;
                                item.tweenConfig.endValue.f2 += dy;
                            }
                        } else {
                            if (!item.value.b3) {
                                item.value.f1 += dx;
                                item.value.f2 += dy;
                            }
                        }
                    }
                }
            }
        }, {
            key: "onOwnerAddedToStage",
            value: function onOwnerAddedToStage() {
                if (this._autoPlay && !this._playing) this.play(null, this._autoPlayTimes, this._autoPlayDelay);
            }
        }, {
            key: "onOwnerRemovedFromStage",
            value: function onOwnerRemovedFromStage() {
                if ((this._options & OPTION_AUTO_STOP_DISABLED) == 0) this.stop((this._options & OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
            }
        }, {
            key: "onDelayedPlay",
            value: function onDelayedPlay() {
                this.internalPlay();
                this._playing = this._totalTasks > 0;
                if (this._playing) {
                    if ((this._options & OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                        var cnt = this._items.length;
                        for (var i = 0; i < cnt; i++) {
                            var item = this._items[i];
                            if (item.target && item.target != this._owner) item.displayLockToken = item.target.addDisplayLock();
                        }
                    }
                } else if (this._onComplete) {
                    var handler = this._onComplete;
                    this._onComplete = null;
                    handler.run();
                }
            }
        }, {
            key: "internalPlay",
            value: function internalPlay() {
                this._ownerBaseX = this._owner.x;
                this._ownerBaseY = this._owner.y;
                this._totalTasks = 1;
                var cnt = this._items.length;
                var item;
                var needSkipAnimations = false;
                if (!this._reversed) {
                    for (var i = 0; i < cnt; i++) {
                        item = this._items[i];
                        if (item.target == null) continue;
                        if (item.type == ActionType.Animation && this._startTime != 0 && item.time <= this._startTime) {
                            needSkipAnimations = true;
                            item.value.flag = false;
                        } else this.playItem(item);
                    }
                } else {
                    for (i = cnt - 1; i >= 0; i--) {
                        item = this._items[i];
                        if (item.target == null) continue;
                        this.playItem(item);
                    }
                }
                if (needSkipAnimations) this.skipAnimations();
                this._totalTasks--;
            }
        }, {
            key: "playItem",
            value: function playItem(item) {
                var time;
                if (item.tweenConfig) {
                    if (this._reversed) time = this._totalDuration - item.time - item.tweenConfig.duration; else time = item.time;
                    if (this._endTime == -1 || time <= this._endTime) {
                        var startValue;
                        var endValue;
                        if (this._reversed) {
                            startValue = item.tweenConfig.endValue;
                            endValue = item.tweenConfig.startValue;
                        } else {
                            startValue = item.tweenConfig.startValue;
                            endValue = item.tweenConfig.endValue;
                        }
                        item.value.b1 = startValue.b1 || endValue.b1;
                        item.value.b2 = startValue.b2 || endValue.b2;
                        switch (item.type) {
                          case ActionType.XY:
                          case ActionType.Size:
                          case ActionType.Scale:
                          case ActionType.Skew:
                            item.tweener = fgui.GTween.to2(startValue.f1, startValue.f2, endValue.f1, endValue.f2, item.tweenConfig.duration);
                            break;

                          case ActionType.Alpha:
                          case ActionType.Rotation:
                            item.tweener = fgui.GTween.to(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;

                          case ActionType.Color:
                            item.tweener = fgui.GTween.toColor(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;

                          case ActionType.ColorFilter:
                            item.tweener = fgui.GTween.to4(startValue.f1, startValue.f2, startValue.f3, startValue.f4, endValue.f1, endValue.f2, endValue.f3, endValue.f4, item.tweenConfig.duration);
                            break;
                        }
                        item.tweener.setDelay(time).setEase(item.tweenConfig.easeType).setRepeat(item.tweenConfig.repeat, item.tweenConfig.yoyo).setTimeScale(this._timeScale).setTarget(item).onStart(this.onTweenStart, this).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this);
                        if (this._endTime >= 0) item.tweener.setBreakpoint(this._endTime - time);
                        this._totalTasks++;
                    }
                } else if (item.type == ActionType.Shake) {
                    if (this._reversed) time = this._totalDuration - item.time - item.value.duration; else time = item.time;
                    item.value.offsetX = item.value.offsetY = 0;
                    item.value.lastOffsetX = item.value.lastOffsetY = 0;
                    item.tweener = fgui.GTween.shake(0, 0, item.value.amplitude, item.value.duration).setDelay(time).setTimeScale(this._timeScale).setTarget(item).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this);
                    if (this._endTime >= 0) item.tweener.setBreakpoint(this._endTime - item.time);
                    this._totalTasks++;
                } else {
                    if (this._reversed) time = this._totalDuration - item.time; else time = item.time;
                    if (time <= this._startTime) {
                        this.applyValue(item);
                        this.callHook(item, false);
                    } else if (this._endTime == -1 || time <= this._endTime) {
                        this._totalTasks++;
                        item.tweener = fgui.GTween.delayedCall(time).setTimeScale(this._timeScale).setTarget(item).onComplete(this.onDelayedPlayItem, this);
                    }
                }
                if (item.tweener) item.tweener.seek(this._startTime);
            }
        }, {
            key: "skipAnimations",
            value: function skipAnimations() {
                var frame;
                var playStartTime;
                var playTotalTime;
                var value;
                var target;
                var item;
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    item = this._items[i];
                    if (item.type != ActionType.Animation || item.time > this._startTime) continue;
                    value = item.value;
                    if (value.flag) continue;
                    target = item.target;
                    frame = target.getProp(fgui.ObjectPropID.Frame);
                    playStartTime = target.getProp(fgui.ObjectPropID.Playing) ? 0 : -1;
                    playTotalTime = 0;
                    for (var j = i; j < cnt; j++) {
                        item = this._items[j];
                        if (item.type != ActionType.Animation || item.target != target || item.time > this._startTime) continue;
                        value = item.value;
                        value.flag = true;
                        if (value.frame != -1) {
                            frame = value.frame;
                            if (value.playing) playStartTime = item.time; else playStartTime = -1;
                            playTotalTime = 0;
                        } else {
                            if (value.playing) {
                                if (playStartTime < 0) playStartTime = item.time;
                            } else {
                                if (playStartTime >= 0) playTotalTime += item.time - playStartTime;
                                playStartTime = -1;
                            }
                        }
                        this.callHook(item, false);
                    }
                    if (playStartTime >= 0) playTotalTime += this._startTime - playStartTime;
                    target.setProp(fgui.ObjectPropID.Playing, playStartTime >= 0);
                    target.setProp(fgui.ObjectPropID.Frame, frame);
                    if (playTotalTime > 0) target.setProp(fgui.ObjectPropID.DeltaTime, playTotalTime * 1e3);
                }
            }
        }, {
            key: "onDelayedPlayItem",
            value: function onDelayedPlayItem(tweener) {
                var item = tweener.target;
                item.tweener = null;
                this._totalTasks--;
                this.applyValue(item);
                this.callHook(item, false);
                this.checkAllComplete();
            }
        }, {
            key: "onTweenStart",
            value: function onTweenStart(tweener) {
                var item = tweener.target;
                if (item.type == ActionType.XY || item.type == ActionType.Size) {
                    var startValue;
                    var endValue;
                    if (this._reversed) {
                        startValue = item.tweenConfig.endValue;
                        endValue = item.tweenConfig.startValue;
                    } else {
                        startValue = item.tweenConfig.startValue;
                        endValue = item.tweenConfig.endValue;
                    }
                    if (item.type == ActionType.XY) {
                        if (item.target != this._owner) {
                            if (!startValue.b1) tweener.startValue.x = item.target.x; else if (startValue.b3) tweener.startValue.x = startValue.f1 * this._owner.width;
                            if (!startValue.b2) tweener.startValue.y = item.target.y; else if (startValue.b3) tweener.startValue.y = startValue.f2 * this._owner.height;
                            if (!endValue.b1) tweener.endValue.x = tweener.startValue.x; else if (endValue.b3) tweener.endValue.x = endValue.f1 * this._owner.width;
                            if (!endValue.b2) tweener.endValue.y = tweener.startValue.y; else if (endValue.b3) tweener.endValue.y = endValue.f2 * this._owner.height;
                        } else {
                            if (!startValue.b1) tweener.startValue.x = item.target.x - this._ownerBaseX;
                            if (!startValue.b2) tweener.startValue.y = item.target.y - this._ownerBaseY;
                            if (!endValue.b1) tweener.endValue.x = tweener.startValue.x;
                            if (!endValue.b2) tweener.endValue.y = tweener.startValue.y;
                        }
                    } else {
                        if (!startValue.b1) tweener.startValue.x = item.target.width;
                        if (!startValue.b2) tweener.startValue.y = item.target.height;
                        if (!endValue.b1) tweener.endValue.x = tweener.startValue.x;
                        if (!endValue.b2) tweener.endValue.y = tweener.startValue.y;
                    }
                    if (item.tweenConfig.path) {
                        item.value.b1 = item.value.b2 = true;
                        tweener.setPath(item.tweenConfig.path);
                    }
                }
                this.callHook(item, false);
            }
        }, {
            key: "onTweenUpdate",
            value: function onTweenUpdate(tweener) {
                var item = tweener.target;
                switch (item.type) {
                  case ActionType.XY:
                  case ActionType.Size:
                  case ActionType.Scale:
                  case ActionType.Skew:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    if (item.tweenConfig.path) {
                        item.value.f1 += tweener.startValue.x;
                        item.value.f2 += tweener.startValue.y;
                    }
                    break;

                  case ActionType.Alpha:
                  case ActionType.Rotation:
                    item.value.f1 = tweener.value.x;
                    break;

                  case ActionType.Color:
                    item.value.f1 = tweener.value.color;
                    break;

                  case ActionType.ColorFilter:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    item.value.f3 = tweener.value.z;
                    item.value.f4 = tweener.value.w;
                    break;

                  case ActionType.Shake:
                    item.value.offsetX = tweener.deltaValue.x;
                    item.value.offsetY = tweener.deltaValue.y;
                    break;
                }
                this.applyValue(item);
            }
        }, {
            key: "onTweenComplete",
            value: function onTweenComplete(tweener) {
                var item = tweener.target;
                item.tweener = null;
                this._totalTasks--;
                if (tweener.allCompleted) this.callHook(item, true);
                this.checkAllComplete();
            }
        }, {
            key: "onPlayTransCompleted",
            value: function onPlayTransCompleted(item) {
                this._totalTasks--;
                this.checkAllComplete();
            }
        }, {
            key: "callHook",
            value: function callHook(item, tweenEnd) {
                if (tweenEnd) {
                    if (item.tweenConfig && item.tweenConfig.endHook) item.tweenConfig.endHook.run();
                } else {
                    if (item.time >= this._startTime && item.hook) item.hook.run();
                }
            }
        }, {
            key: "checkAllComplete",
            value: function checkAllComplete() {
                if (this._playing && this._totalTasks == 0) {
                    if (this._totalTimes < 0) {
                        this.internalPlay();
                        if (this._totalTasks == 0) fgui.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                    } else {
                        this._totalTimes--;
                        if (this._totalTimes > 0) {
                            this.internalPlay();
                            if (this._totalTasks == 0) fgui.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                        } else {
                            this._playing = false;
                            var cnt = this._items.length;
                            for (var i = 0; i < cnt; i++) {
                                var item = this._items[i];
                                if (item.target && item.displayLockToken != 0) {
                                    item.target.releaseDisplayLock(item.displayLockToken);
                                    item.displayLockToken = 0;
                                }
                            }
                            if (this._onComplete) {
                                var handler = this._onComplete;
                                this._onComplete = null;
                                handler.run();
                            }
                        }
                    }
                }
            }
        }, {
            key: "applyValue",
            value: function applyValue(item) {
                item.target._gearLocked = true;
                var value = item.value;
                switch (item.type) {
                  case ActionType.XY:
                    if (item.target == this._owner) {
                        if (value.b1 && value.b2) item.target.setXY(value.f1 + this._ownerBaseX, value.f2 + this._ownerBaseY); else if (value.b1) item.target.x = value.f1 + this._ownerBaseX; else item.target.y = value.f2 + this._ownerBaseY;
                    } else {
                        if (value.b3) {
                            if (value.b1 && value.b2) item.target.setXY(value.f1 * this._owner.width, value.f2 * this._owner.height); else if (value.b1) item.target.x = value.f1 * this._owner.width; else if (value.b2) item.target.y = value.f2 * this._owner.height;
                        } else {
                            if (value.b1 && value.b2) item.target.setXY(value.f1, value.f2); else if (value.b1) item.target.x = value.f1; else if (value.b2) item.target.y = value.f2;
                        }
                    }
                    break;

                  case ActionType.Size:
                    if (!value.b1) value.f1 = item.target.width;
                    if (!value.b2) value.f2 = item.target.height;
                    item.target.setSize(value.f1, value.f2);
                    break;

                  case ActionType.Pivot:
                    item.target.setPivot(value.f1, value.f2, item.target.pivotAsAnchor);
                    break;

                  case ActionType.Alpha:
                    item.target.alpha = value.f1;
                    break;

                  case ActionType.Rotation:
                    item.target.rotation = value.f1;
                    break;

                  case ActionType.Scale:
                    item.target.setScale(value.f1, value.f2);
                    break;

                  case ActionType.Skew:
                    item.target.setSkew(value.f1, value.f2);
                    break;

                  case ActionType.Color:
                    item.target.setProp(fgui.ObjectPropID.Color, fgui.ToolSet.convertToHtmlColor(value.f1, false));
                    break;

                  case ActionType.Animation:
                    if (value.frame >= 0) item.target.setProp(fgui.ObjectPropID.Frame, value.frame);
                    item.target.setProp(fgui.ObjectPropID.Playing, value.playing);
                    item.target.setProp(fgui.ObjectPropID.TimeScale, this._timeScale);
                    break;

                  case ActionType.Visible:
                    item.target.visible = value.visible;
                    break;

                  case ActionType.Transition:
                    if (this._playing) {
                        var trans = value.trans;
                        if (trans) {
                            this._totalTasks++;
                            var startTime = this._startTime > item.time ? this._startTime - item.time : 0;
                            var endTime = this._endTime >= 0 ? this._endTime - item.time : -1;
                            if (value.stopTime >= 0 && (endTime < 0 || endTime > value.stopTime)) endTime = value.stopTime;
                            trans.timeScale = this._timeScale;
                            trans._play(Laya.Handler.create(this, this.onPlayTransCompleted, [ item ]), value.playTimes, 0, startTime, endTime, this._reversed);
                        }
                    }
                    break;

                  case ActionType.Sound:
                    if (this._playing && item.time >= this._startTime) {
                        if (value.audioClip == null) {
                            var pi = fgui.UIPackage.getItemByURL(value.sound);
                            if (pi) value.audioClip = pi.file; else value.audioClip = value.sound;
                        }
                        if (value.audioClip) fgui.GRoot.inst.playOneShotSound(value.audioClip, value.volume);
                    }
                    break;

                  case ActionType.Shake:
                    item.target.setXY(item.target.x - value.lastOffsetX + value.offsetX, item.target.y - value.lastOffsetY + value.offsetY);
                    value.lastOffsetX = value.offsetX;
                    value.lastOffsetY = value.offsetY;
                    break;

                  case ActionType.ColorFilter:
                    {
                        fgui.ToolSet.setColorFilter(item.target.displayObject, [ value.f1, value.f2, value.f3, value.f4 ]);
                        break;
                    }

                  case ActionType.Text:
                    item.target.text = value.text;
                    break;

                  case ActionType.Icon:
                    item.target.icon = value.text;
                    break;
                }
                item.target._gearLocked = false;
            }
        }, {
            key: "setup",
            value: function setup(buffer) {
                this.name = buffer.readS();
                this._options = buffer.getInt32();
                this._autoPlay = buffer.readBool();
                this._autoPlayTimes = buffer.getInt32();
                this._autoPlayDelay = buffer.getFloat32();
                var cnt = buffer.getInt16();
                for (var i = 0; i < cnt; i++) {
                    var dataLen = buffer.getInt16();
                    var curPos = buffer.pos;
                    buffer.seek(curPos, 0);
                    var item = new Item(buffer.readByte());
                    this._items[i] = item;
                    item.time = buffer.getFloat32();
                    var targetId = buffer.getInt16();
                    if (targetId < 0) item.targetId = ""; else item.targetId = this._owner.getChildAt(targetId).id;
                    item.label = buffer.readS();
                    if (buffer.readBool()) {
                        buffer.seek(curPos, 1);
                        item.tweenConfig = new TweenConfig();
                        item.tweenConfig.duration = buffer.getFloat32();
                        if (item.time + item.tweenConfig.duration > this._totalDuration) this._totalDuration = item.time + item.tweenConfig.duration;
                        item.tweenConfig.easeType = buffer.readByte();
                        item.tweenConfig.repeat = buffer.getInt32();
                        item.tweenConfig.yoyo = buffer.readBool();
                        item.tweenConfig.endLabel = buffer.readS();
                        buffer.seek(curPos, 2);
                        this.decodeValue(item, buffer, item.tweenConfig.startValue);
                        buffer.seek(curPos, 3);
                        this.decodeValue(item, buffer, item.tweenConfig.endValue);
                        if (buffer.version >= 2) {
                            var pathLen = buffer.getInt32();
                            if (pathLen > 0) {
                                item.tweenConfig.path = new fgui.GPath();
                                var pts = new Array();
                                for (var j = 0; j < pathLen; j++) {
                                    var curveType = buffer.getUint8();
                                    switch (curveType) {
                                      case fgui.CurveType.Bezier:
                                        pts.push(fgui.GPathPoint.newBezierPoint(buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32()));
                                        break;

                                      case fgui.CurveType.CubicBezier:
                                        pts.push(fgui.GPathPoint.newCubicBezierPoint(buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32(), buffer.getFloat32()));
                                        break;

                                      default:
                                        pts.push(fgui.GPathPoint.newPoint(buffer.getFloat32(), buffer.getFloat32(), curveType));
                                        break;
                                    }
                                }
                                item.tweenConfig.path.create(pts);
                            }
                        }
                    } else {
                        if (item.time > this._totalDuration) this._totalDuration = item.time;
                        buffer.seek(curPos, 2);
                        this.decodeValue(item, buffer, item.value);
                    }
                    buffer.pos = curPos + dataLen;
                }
            }
        }, {
            key: "decodeValue",
            value: function decodeValue(item, buffer, value) {
                switch (item.type) {
                  case ActionType.XY:
                  case ActionType.Size:
                  case ActionType.Pivot:
                  case ActionType.Skew:
                    value.b1 = buffer.readBool();
                    value.b2 = buffer.readBool();
                    value.f1 = buffer.getFloat32();
                    value.f2 = buffer.getFloat32();
                    if (buffer.version >= 2 && item.type == ActionType.XY) value.b3 = buffer.readBool();
                    break;

                  case ActionType.Alpha:
                  case ActionType.Rotation:
                    value.f1 = buffer.getFloat32();
                    break;

                  case ActionType.Scale:
                    value.f1 = buffer.getFloat32();
                    value.f2 = buffer.getFloat32();
                    break;

                  case ActionType.Color:
                    value.f1 = buffer.readColor();
                    break;

                  case ActionType.Animation:
                    value.playing = buffer.readBool();
                    value.frame = buffer.getInt32();
                    break;

                  case ActionType.Visible:
                    value.visible = buffer.readBool();
                    break;

                  case ActionType.Sound:
                    value.sound = buffer.readS();
                    value.volume = buffer.getFloat32();
                    break;

                  case ActionType.Transition:
                    value.transName = buffer.readS();
                    value.playTimes = buffer.getInt32();
                    break;

                  case ActionType.Shake:
                    value.amplitude = buffer.getFloat32();
                    value.duration = buffer.getFloat32();
                    break;

                  case ActionType.ColorFilter:
                    value.f1 = buffer.getFloat32();
                    value.f2 = buffer.getFloat32();
                    value.f3 = buffer.getFloat32();
                    value.f4 = buffer.getFloat32();
                    break;

                  case ActionType.Text:
                  case ActionType.Icon:
                    value.text = buffer.readS();
                    break;
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
            set: function set(value) {
                if (this._timeScale != value) {
                    this._timeScale = value;
                    if (this._playing) {
                        var cnt = this._items.length;
                        for (var i = 0; i < cnt; i++) {
                            var item = this._items[i];
                            if (item.tweener) item.tweener.setTimeScale(value); else if (item.type == ActionType.Transition) {
                                if (item.value.trans) item.value.trans.timeScale = value;
                            } else if (item.type == ActionType.Animation) {
                                if (item.target) item.target.setProp(fgui.ObjectPropID.TimeScale, value);
                            }
                        }
                    }
                }
            }
        } ]);
        return Transition;
    }();
    fgui.Transition = Transition;
    var ActionType = function ActionType() {
        (0, _classCallCheck2.default)(this, ActionType);
    };
    ActionType.XY = 0;
    ActionType.Size = 1;
    ActionType.Scale = 2;
    ActionType.Pivot = 3;
    ActionType.Alpha = 4;
    ActionType.Rotation = 5;
    ActionType.Color = 6;
    ActionType.Animation = 7;
    ActionType.Visible = 8;
    ActionType.Sound = 9;
    ActionType.Transition = 10;
    ActionType.Shake = 11;
    ActionType.ColorFilter = 12;
    ActionType.Skew = 13;
    ActionType.Text = 14;
    ActionType.Icon = 15;
    ActionType.Unknown = 16;
    var Item = function Item(type) {
        (0, _classCallCheck2.default)(this, Item);
        this.type = type;
        this.value = {};
        this.displayLockToken = 0;
    };
    var TweenConfig = function TweenConfig() {
        (0, _classCallCheck2.default)(this, TweenConfig);
        this.easeType = fgui.EaseType.QuadOut;
        this.startValue = {
            b1: true,
            b2: true
        };
        this.endValue = {
            b1: true,
            b2: true
        };
    };
    var OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
    var OPTION_AUTO_STOP_DISABLED = 2;
    var OPTION_AUTO_STOP_AT_END = 4;
})(fgui);

(function(fgui) {
    var TranslationHelper = /* */ function() {
        function TranslationHelper() {
            (0, _classCallCheck2.default)(this, TranslationHelper);
        }
        (0, _createClass2.default)(TranslationHelper, null, [ {
            key: "loadFromXML",
            value: function loadFromXML(source) {
                var strings = {};
                TranslationHelper.strings = strings;
                var xml = Laya.Utils.parseXMLFromString(source);
                var resNode = findChildNode(xml, "resources");
                var nodes = resNode.childNodes;
                var length1 = nodes.length;
                for (var i1 = 0; i1 < length1; i1++) {
                    var cxml = nodes[i1];
                    if (cxml.nodeName == "string") {
                        var key = cxml.getAttribute("name");
                        var text = cxml.textContent;
                        var i = key.indexOf("-");
                        if (i == -1) continue;
                        var key2 = key.substr(0, i);
                        var key3 = key.substr(i + 1);
                        var col = strings[key2];
                        if (!col) {
                            col = {};
                            strings[key2] = col;
                        }
                        col[key3] = text;
                    }
                }
            }
        }, {
            key: "translateComponent",
            value: function translateComponent(item) {
                if (TranslationHelper.strings == null) return;
                var compStrings = TranslationHelper.strings[item.owner.id + item.id];
                if (compStrings == null) return;
                var elementId, value;
                var buffer = item.rawData;
                var nextPos;
                var itemCount;
                var i, j, k;
                var dataLen;
                var curPos;
                var valueCnt;
                var page;
                buffer.seek(0, 2);
                var childCount = buffer.getInt16();
                for (i = 0; i < childCount; i++) {
                    dataLen = buffer.getInt16();
                    curPos = buffer.pos;
                    buffer.seek(curPos, 0);
                    var baseType = buffer.readByte();
                    var type = baseType;
                    buffer.skip(4);
                    elementId = buffer.readS();
                    if (type == fgui.ObjectType.Component) {
                        if (buffer.seek(curPos, 6)) type = buffer.readByte();
                    }
                    buffer.seek(curPos, 1);
                    if ((value = compStrings[elementId + "-tips"]) != null) buffer.writeS(value);
                    buffer.seek(curPos, 2);
                    var gearCnt = buffer.getInt16();
                    for (j = 0; j < gearCnt; j++) {
                        nextPos = buffer.getInt16();
                        nextPos += buffer.pos;
                        if (buffer.readByte() == 6) {
                            buffer.skip(2);
                            valueCnt = buffer.getInt16();
                            for (k = 0; k < valueCnt; k++) {
                                page = buffer.readS();
                                if (page != null) {
                                    if ((value = compStrings[elementId + "-texts_" + k]) != null) buffer.writeS(value); else buffer.skip(2);
                                }
                            }
                            if (buffer.readBool() && (value = compStrings[elementId + "-texts_def"]) != null) buffer.writeS(value);
                        }
                        buffer.pos = nextPos;
                    }
                    if (baseType == fgui.ObjectType.Component && buffer.version >= 2) {
                        buffer.seek(curPos, 4);
                        buffer.skip(2);
                        buffer.skip(4 * buffer.getUint16());
                        var cpCount = buffer.getUint16();
                        for (var k = 0; k < cpCount; k++) {
                            var target = buffer.readS();
                            var propertyId = buffer.getUint16();
                            if (propertyId == 0 && (value = compStrings[elementId + "-cp-" + target]) != null) buffer.writeS(value); else buffer.skip(2);
                        }
                    }
                    switch (type) {
                      case fgui.ObjectType.Text:
                      case fgui.ObjectType.RichText:
                      case fgui.ObjectType.InputText:
                        {
                            if ((value = compStrings[elementId]) != null) {
                                buffer.seek(curPos, 6);
                                buffer.writeS(value);
                            }
                            if ((value = compStrings[elementId + "-prompt"]) != null) {
                                buffer.seek(curPos, 4);
                                buffer.writeS(value);
                            }
                            break;
                        }

                      case fgui.ObjectType.List:
                      case fgui.ObjectType.Tree:
                        {
                            buffer.seek(curPos, 8);
                            buffer.skip(2);
                            itemCount = buffer.getUint16();
                            for (j = 0; j < itemCount; j++) {
                                nextPos = buffer.getUint16();
                                nextPos += buffer.pos;
                                buffer.skip(2);
                                if (type == fgui.ObjectType.Tree) buffer.skip(2);
                                if ((value = compStrings[elementId + "-" + j]) != null) buffer.writeS(value); else buffer.skip(2);
                                if ((value = compStrings[elementId + "-" + j + "-0"]) != null) buffer.writeS(value); else buffer.skip(2);
                                if (buffer.version >= 2) {
                                    buffer.skip(6);
                                    buffer.skip(buffer.getUint16() * 4);
                                    var cpCount = buffer.getUint16();
                                    for (var k = 0; k < cpCount; k++) {
                                        var target = buffer.readS();
                                        var propertyId = buffer.getUint16();
                                        if (propertyId == 0 && (value = compStrings[elementId + "-" + j + "-" + target]) != null) buffer.writeS(value); else buffer.skip(2);
                                    }
                                }
                                buffer.pos = nextPos;
                            }
                            break;
                        }

                      case fgui.ObjectType.Label:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                if ((value = compStrings[elementId]) != null) buffer.writeS(value); else buffer.skip(2);
                                buffer.skip(2);
                                if (buffer.readBool()) buffer.skip(4);
                                buffer.skip(4);
                                if (buffer.readBool() && (value = compStrings[elementId + "-prompt"]) != null) buffer.writeS(value);
                            }
                            break;
                        }

                      case fgui.ObjectType.Button:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                if ((value = compStrings[elementId]) != null) buffer.writeS(value); else buffer.skip(2);
                                if ((value = compStrings[elementId + "-0"]) != null) buffer.writeS(value);
                            }
                            break;
                        }

                      case fgui.ObjectType.ComboBox:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                itemCount = buffer.getInt16();
                                for (j = 0; j < itemCount; j++) {
                                    nextPos = buffer.getInt16();
                                    nextPos += buffer.pos;
                                    if ((value = compStrings[elementId + "-" + j]) != null) buffer.writeS(value);
                                    buffer.pos = nextPos;
                                }
                                if ((value = compStrings[elementId]) != null) buffer.writeS(value);
                            }
                            break;
                        }
                    }
                    buffer.pos = curPos + dataLen;
                }
            }
        } ]);
        return TranslationHelper;
    }();
    fgui.TranslationHelper = TranslationHelper;
    function findChildNode(xml, name) {
        var col = xml.childNodes;
        var length1 = col.length;
        if (length1 > 0) {
            for (var i1 = 0; i1 < length1; i1++) {
                var cxml = col[i1];
                if (cxml.nodeName == name) {
                    return cxml;
                }
            }
        }
        return null;
    }
})(fgui);

(function(fgui) {
    var UIConfig = function UIConfig() {
        (0, _classCallCheck2.default)(this, UIConfig);
    };
    UIConfig.defaultFont = "SimSun";
    UIConfig.modalLayerColor = "rgba(33,33,33,0.2)";
    UIConfig.buttonSoundVolumeScale = 1;
    UIConfig.defaultScrollStep = 25;
    UIConfig.defaultScrollDecelerationRate = .967;
    UIConfig.defaultScrollBarDisplay = fgui.ScrollBarDisplayType.Visible;
    UIConfig.defaultScrollTouchEffect = true;
    UIConfig.defaultScrollBounceEffect = true;
    UIConfig.defaultScrollSnappingThreshold = .1;
    UIConfig.defaultScrollPagingThreshold = .3;
    UIConfig.defaultComboBoxVisibleItemCount = 10;
    UIConfig.touchScrollSensitivity = 20;
    UIConfig.touchDragSensitivity = 10;
    UIConfig.clickDragSensitivity = 2;
    UIConfig.bringWindowToFrontOnClick = true;
    UIConfig.frameTimeForAsyncUIConstruction = 2;
    UIConfig.textureLinearSampling = true;
    UIConfig.packageFileExtension = "fui";
    fgui.UIConfig = UIConfig;
})(fgui);

(function(fgui) {
    var UIObjectFactory = /* */ function() {
        function UIObjectFactory() {
            (0, _classCallCheck2.default)(this, UIObjectFactory);
        }
        (0, _createClass2.default)(UIObjectFactory, null, [ {
            key: "setExtension",
            value: function setExtension(url, type) {
                if (url == null) throw "Invaild url: " + url;
                var pi = fgui.UIPackage.getItemByURL(url);
                if (pi) pi.extensionType = type;
                UIObjectFactory.extensions[url] = type;
            }
        }, {
            key: "setPackageItemExtension",
            value: function setPackageItemExtension(url, type) {
                UIObjectFactory.setExtension(url, type);
            }
        }, {
            key: "setLoaderExtension",
            value: function setLoaderExtension(type) {
                UIObjectFactory.loaderType = type;
            }
        }, {
            key: "resolvePackageItemExtension",
            value: function resolvePackageItemExtension(pi) {
                var extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
                if (!extensionType) extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
                if (extensionType) pi.extensionType = extensionType;
            }
        }, {
            key: "newObject",
            value: function newObject(type, userClass) {
                var obj;
                if (typeof type === "number") {
                    switch (type) {
                      case fgui.ObjectType.Image:
                        return new fgui.GImage();

                      case fgui.ObjectType.MovieClip:
                        return new fgui.GMovieClip();

                      case fgui.ObjectType.Component:
                        return new fgui.GComponent();

                      case fgui.ObjectType.Text:
                        return new fgui.GBasicTextField();

                      case fgui.ObjectType.RichText:
                        return new fgui.GRichTextField();

                      case fgui.ObjectType.InputText:
                        return new fgui.GTextInput();

                      case fgui.ObjectType.Group:
                        return new fgui.GGroup();

                      case fgui.ObjectType.List:
                        return new fgui.GList();

                      case fgui.ObjectType.Graph:
                        return new fgui.GGraph();

                      case fgui.ObjectType.Loader:
                        if (UIObjectFactory.loaderType) return new UIObjectFactory.loaderType(); else return new fgui.GLoader();

                      case fgui.ObjectType.Button:
                        return new fgui.GButton();

                      case fgui.ObjectType.Label:
                        return new fgui.GLabel();

                      case fgui.ObjectType.ProgressBar:
                        return new fgui.GProgressBar();

                      case fgui.ObjectType.Slider:
                        return new fgui.GSlider();

                      case fgui.ObjectType.ScrollBar:
                        return new fgui.GScrollBar();

                      case fgui.ObjectType.ComboBox:
                        return new fgui.GComboBox();

                      case fgui.ObjectType.Tree:
                        return new fgui.GTree();

                      case fgui.ObjectType.Loader3D:
                        return new fgui.GLoader3D();

                      default:
                        return null;
                    }
                } else {
                    if (type.type == fgui.PackageItemType.Component) {
                        if (userClass) obj = new userClass(); else if (type.extensionType) obj = new type.extensionType(); else obj = UIObjectFactory.newObject(type.objectType);
                    } else obj = UIObjectFactory.newObject(type.objectType);
                    if (obj) obj.packageItem = type;
                }
                return obj;
            }
        } ]);
        return UIObjectFactory;
    }();
    UIObjectFactory.extensions = {};
    fgui.UIObjectFactory = UIObjectFactory;
})(fgui);

(function(fgui) {
    var UIPackage = /* */ function() {
        function UIPackage() {
            (0, _classCallCheck2.default)(this, UIPackage);
            this._items = [];
            this._itemsById = {};
            this._itemsByName = {};
            this._sprites = {};
            this._dependencies = [];
            this._branches = [];
            this._branchIndex = -1;
        }
        (0, _createClass2.default)(UIPackage, [ {
            key: "loadPackage",
            value: function loadPackage(buffer) {
                if (buffer.getUint32() != 1179080009) throw new Error("FairyGUI: old package format found in '" + this._resKey + "'");
                buffer.version = buffer.getInt32();
                var compressed = buffer.readBool();
                this._id = buffer.readUTFString();
                this._name = buffer.readUTFString();
                buffer.skip(20);
                if (compressed) {
                    var buf = new Uint8Array(buffer.buffer, buffer.pos, buffer.length - buffer.pos);
                    var inflater = new Zlib.RawInflate(buf);
                    buf = inflater.decompress();
                    var buffer2 = new fgui.ByteBuffer(buf);
                    buffer2.version = buffer.version;
                    buffer = buffer2;
                }
                var ver2 = buffer.version >= 2;
                var indexTablePos = buffer.pos;
                var cnt;
                var i;
                var j;
                var nextPos;
                var str;
                var branchIncluded;
                buffer.seek(indexTablePos, 4);
                cnt = buffer.getInt32();
                var stringTable = [];
                for (i = 0; i < cnt; i++) {
                    stringTable[i] = buffer.readUTFString();
                }
                buffer.stringTable = stringTable;
                buffer.seek(indexTablePos, 0);
                cnt = buffer.getInt16();
                for (i = 0; i < cnt; i++) {
                    this._dependencies.push({
                        id: buffer.readS(),
                        name: buffer.readS()
                    });
                }
                if (ver2) {
                    cnt = buffer.getInt16();
                    if (cnt > 0) {
                        this._branches = buffer.readSArray(cnt);
                        if (UIPackage._branch) this._branchIndex = this._branches.indexOf(UIPackage._branch);
                    }
                    branchIncluded = cnt > 0;
                }
                buffer.seek(indexTablePos, 1);
                var pi;
                var path = this._resKey;
                var pos = path.lastIndexOf("/");
                var shortPath = pos == -1 ? "" : path.substr(0, pos + 1);
                path = path + "_";
                cnt = buffer.getUint16();
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.getInt32();
                    nextPos += buffer.pos;
                    pi = new fgui.PackageItem();
                    pi.owner = this;
                    pi.type = buffer.readByte();
                    pi.id = buffer.readS();
                    pi.name = buffer.readS();
                    buffer.readS();
                    str = buffer.readS();
                    if (str) pi.file = str;
                    buffer.readBool();
                    pi.width = buffer.getInt32();
                    pi.height = buffer.getInt32();
                    switch (pi.type) {
                      case fgui.PackageItemType.Image:
                        {
                            pi.objectType = fgui.ObjectType.Image;
                            var scaleOption = buffer.readByte();
                            if (scaleOption == 1) {
                                pi.scale9Grid = new Laya.Rectangle();
                                pi.scale9Grid.x = buffer.getInt32();
                                pi.scale9Grid.y = buffer.getInt32();
                                pi.scale9Grid.width = buffer.getInt32();
                                pi.scale9Grid.height = buffer.getInt32();
                                pi.tileGridIndice = buffer.getInt32();
                            } else if (scaleOption == 2) pi.scaleByTile = true;
                            pi.smoothing = buffer.readBool();
                            break;
                        }

                      case fgui.PackageItemType.MovieClip:
                        {
                            pi.smoothing = buffer.readBool();
                            pi.objectType = fgui.ObjectType.MovieClip;
                            pi.rawData = buffer.readBuffer();
                            break;
                        }

                      case fgui.PackageItemType.Font:
                        {
                            pi.rawData = buffer.readBuffer();
                            break;
                        }

                      case fgui.PackageItemType.Component:
                        {
                            var extension = buffer.readByte();
                            if (extension > 0) pi.objectType = extension; else pi.objectType = fgui.ObjectType.Component;
                            pi.rawData = buffer.readBuffer();
                            fgui.UIObjectFactory.resolvePackageItemExtension(pi);
                            break;
                        }

                      case fgui.PackageItemType.Atlas:
                      case fgui.PackageItemType.Sound:
                      case fgui.PackageItemType.Misc:
                        {
                            pi.file = path + pi.file;
                            break;
                        }

                      case fgui.PackageItemType.Spine:
                      case fgui.PackageItemType.DragonBones:
                        {
                            pi.file = shortPath + pi.file;
                            pi.skeletonAnchor = new Laya.Point();
                            pi.skeletonAnchor.x = buffer.getFloat32();
                            pi.skeletonAnchor.y = buffer.getFloat32();
                            break;
                        }
                    }
                    if (ver2) {
                        str = buffer.readS();
                        if (str) pi.name = str + "/" + pi.name;
                        var branchCnt = buffer.getUint8();
                        if (branchCnt > 0) {
                            if (branchIncluded) pi.branches = buffer.readSArray(branchCnt); else this._itemsById[buffer.readS()] = pi;
                        }
                        var highResCnt = buffer.getUint8();
                        if (highResCnt > 0) pi.highResolution = buffer.readSArray(highResCnt);
                    }
                    this._items.push(pi);
                    this._itemsById[pi.id] = pi;
                    if (pi.name != null) this._itemsByName[pi.name] = pi;
                    buffer.pos = nextPos;
                }
                buffer.seek(indexTablePos, 2);
                cnt = buffer.getUint16();
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.getUint16();
                    nextPos += buffer.pos;
                    var itemId = buffer.readS();
                    pi = this._itemsById[buffer.readS()];
                    var sprite = {
                        atlas: pi,
                        rect: new Laya.Rectangle(),
                        offset: new Laya.Point(),
                        originalSize: new Laya.Point()
                    };
                    sprite.atlas = pi;
                    sprite.rect.x = buffer.getInt32();
                    sprite.rect.y = buffer.getInt32();
                    sprite.rect.width = buffer.getInt32();
                    sprite.rect.height = buffer.getInt32();
                    sprite.rotated = buffer.readBool();
                    if (ver2 && buffer.readBool()) {
                        sprite.offset.x = buffer.getInt32();
                        sprite.offset.y = buffer.getInt32();
                        sprite.originalSize.x = buffer.getInt32();
                        sprite.originalSize.y = buffer.getInt32();
                    } else {
                        sprite.originalSize.x = sprite.rect.width;
                        sprite.originalSize.y = sprite.rect.height;
                    }
                    this._sprites[itemId] = sprite;
                    buffer.pos = nextPos;
                }
                if (buffer.seek(indexTablePos, 3)) {
                    cnt = buffer.getUint16();
                    for (i = 0; i < cnt; i++) {
                        nextPos = buffer.getInt32();
                        nextPos += buffer.pos;
                        pi = this._itemsById[buffer.readS()];
                        if (pi && pi.type == fgui.PackageItemType.Image) {
                            pi.pixelHitTestData = new fgui.PixelHitTestData();
                            pi.pixelHitTestData.load(buffer);
                        }
                        buffer.pos = nextPos;
                    }
                }
            }
        }, {
            key: "loadAllAssets",
            value: function loadAllAssets() {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var pi = this._items[i];
                    this.getItemAsset(pi);
                }
            }
        }, {
            key: "unloadAssets",
            value: function unloadAssets() {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var pi = this._items[i];
                    if (pi.type == fgui.PackageItemType.Atlas) {
                        if (pi.texture) Laya.loader.clearTextureRes(pi.texture.url);
                    }
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var pi = this._items[i];
                    if (pi.type == fgui.PackageItemType.Atlas) {
                        if (pi.texture) {
                            pi.texture.destroy();
                            pi.texture = null;
                        }
                    } else if (pi.type == fgui.PackageItemType.Sound) {
                        Laya.SoundManager.destroySound(pi.file);
                    } else if (pi.templet) pi.templet.destroy();
                }
            }
        }, {
            key: "createObject",
            value: function createObject(resName, userClass) {
                var pi = this._itemsByName[resName];
                if (pi) return this.internalCreateObject(pi, userClass); else return null;
            }
        }, {
            key: "internalCreateObject",
            value: function internalCreateObject(item, userClass) {
                var g = fgui.UIObjectFactory.newObject(item, userClass);
                if (g == null) return null;
                UIPackage._constructing++;
                g.constructFromResource();
                UIPackage._constructing--;
                return g;
            }
        }, {
            key: "getItemById",
            value: function getItemById(itemId) {
                return this._itemsById[itemId];
            }
        }, {
            key: "getItemByName",
            value: function getItemByName(resName) {
                return this._itemsByName[resName];
            }
        }, {
            key: "getItemAssetByName",
            value: function getItemAssetByName(resName) {
                var pi = this._itemsByName[resName];
                if (pi == null) {
                    throw "Resource not found -" + resName;
                }
                return this.getItemAsset(pi);
            }
        }, {
            key: "getItemAsset",
            value: function getItemAsset(item) {
                switch (item.type) {
                  case fgui.PackageItemType.Image:
                    if (!item.decoded) {
                        item.decoded = true;
                        var sprite = this._sprites[item.id];
                        if (sprite) {
                            var atlasTexture = this.getItemAsset(sprite.atlas);
                            item.texture = Laya.Texture.create(atlasTexture, sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height, sprite.offset.x, sprite.offset.y, sprite.originalSize.x, sprite.originalSize.y);
                        } else item.texture = null;
                    }
                    return item.texture;

                  case fgui.PackageItemType.Atlas:
                    if (!item.decoded) {
                        item.decoded = true;
                        item.texture = fgui.AssetProxy.inst.getRes(item.file);
                    }
                    return item.texture;

                  case fgui.PackageItemType.Font:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadFont(item);
                    }
                    return item.bitmapFont;

                  case fgui.PackageItemType.MovieClip:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadMovieClip(item);
                    }
                    return item.frames;

                  case fgui.PackageItemType.Component:
                    return item.rawData;

                  case fgui.PackageItemType.Misc:
                    if (item.file) return fgui.AssetProxy.inst.getRes(item.file); else return null;

                  default:
                    return null;
                }
            }
        }, {
            key: "getItemAssetAsync",
            value: function getItemAssetAsync(item, onComplete) {
                if (item.decoded) {
                    onComplete(null, item);
                    return;
                }
                if (item.loading) {
                    item.loading.push(onComplete);
                    return;
                }
                switch (item.type) {
                  case fgui.PackageItemType.Spine:
                  case fgui.PackageItemType.DragonBones:
                    item.loading = [ onComplete ];
                    item.templet = new Laya.Templet();
                    item.templet.on(Laya.Event.COMPLETE, this, function() {
                        var arr = item.loading;
                        delete item.loading;
                        arr.forEach(function(e) {
                            return e(null, item);
                        });
                    });
                    item.templet.on(Laya.Event.ERROR, this, function() {
                        var arr = item.loading;
                        delete item.loading;
                        delete item.templet;
                        arr.forEach(function(e) {
                            return e("parse error", item);
                        });
                    });
                    var pos = item.file.lastIndexOf(".");
                    var str = item.file.substring(0, pos + 1).replace("_ske", "") + "sk";
                    item.templet.loadAni(str);
                    break;

                  default:
                    this.getItemAsset(item);
                    onComplete(null, item);
                    break;
                }
            }
        }, {
            key: "loadMovieClip",
            value: function loadMovieClip(item) {
                var buffer = item.rawData;
                buffer.seek(0, 0);
                item.interval = buffer.getInt32();
                item.swing = buffer.readBool();
                item.repeatDelay = buffer.getInt32();
                buffer.seek(0, 1);
                var frameCount = buffer.getInt16();
                item.frames = [];
                var spriteId;
                var sprite;
                var fx;
                var fy;
                for (var i = 0; i < frameCount; i++) {
                    var nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    fx = buffer.getInt32();
                    fy = buffer.getInt32();
                    buffer.getInt32();
                    buffer.getInt32();
                    var frame = {
                        addDelay: buffer.getInt32()
                    };
                    spriteId = buffer.readS();
                    if (spriteId != null && (sprite = this._sprites[spriteId]) != null) {
                        var atlasTexture = this.getItemAsset(sprite.atlas);
                        frame.texture = Laya.Texture.create(atlasTexture, sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height, fx, fy, item.width, item.height);
                    }
                    item.frames[i] = frame;
                    buffer.pos = nextPos;
                }
            }
        }, {
            key: "loadFont",
            value: function loadFont(item) {
                item = item.getBranch();
                var font = new fgui.BitmapFont();
                item.bitmapFont = font;
                var buffer = item.rawData;
                buffer.seek(0, 0);
                font.ttf = buffer.readBool();
                font.tint = buffer.readBool();
                font.resizable = buffer.readBool();
                buffer.readBool();
                font.size = buffer.getInt32();
                var xadvance = buffer.getInt32();
                var lineHeight = buffer.getInt32();
                var mainTexture = null;
                var mainSprite = this._sprites[item.id];
                if (mainSprite) mainTexture = this.getItemAsset(mainSprite.atlas);
                buffer.seek(0, 1);
                var bg = null;
                var cnt = buffer.getInt32();
                for (var i = 0; i < cnt; i++) {
                    var nextPos = buffer.getInt16();
                    nextPos += buffer.pos;
                    bg = {};
                    var ch = buffer.readChar();
                    font.glyphs[ch] = bg;
                    var img = buffer.readS();
                    var bx = buffer.getInt32();
                    var by = buffer.getInt32();
                    bg.x = buffer.getInt32();
                    bg.y = buffer.getInt32();
                    bg.width = buffer.getInt32();
                    bg.height = buffer.getInt32();
                    bg.advance = buffer.getInt32();
                    bg.channel = buffer.readByte();
                    if (bg.channel == 1) bg.channel = 3; else if (bg.channel == 2) bg.channel = 2; else if (bg.channel == 3) bg.channel = 1;
                    if (font.ttf) {
                        bg.texture = Laya.Texture.create(mainTexture, bx + mainSprite.rect.x, by + mainSprite.rect.y, bg.width, bg.height);
                        bg.lineHeight = lineHeight;
                    } else {
                        var charImg = this._itemsById[img];
                        if (charImg) {
                            charImg = charImg.getBranch();
                            bg.width = charImg.width;
                            bg.height = charImg.height;
                            charImg = charImg.getHighResolution();
                            this.getItemAsset(charImg);
                            bg.texture = charImg.texture;
                        }
                        if (bg.advance == 0) {
                            if (xadvance == 0) bg.advance = bg.x + bg.width; else bg.advance = xadvance;
                        }
                        bg.lineHeight = bg.y < 0 ? bg.height : bg.y + bg.height;
                        if (bg.lineHeight < font.size) bg.lineHeight = font.size;
                    }
                    buffer.pos = nextPos;
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
            set: function set(value) {
                if (this._customId) delete UIPackage._instById[this._customId];
                this._customId = value;
                if (this._customId) UIPackage._instById[this._customId] = this;
            }
        } ], [ {
            key: "getVar",
            value: function getVar(key) {
                return UIPackage._vars[key];
            }
        }, {
            key: "setVar",
            value: function setVar(key, value) {
                UIPackage._vars[key] = value;
            }
        }, {
            key: "getById",
            value: function getById(id) {
                return UIPackage._instById[id];
            }
        }, {
            key: "getByName",
            value: function getByName(name) {
                return UIPackage._instByName[name];
            }
        }, {
            key: "addPackage",
            value: function addPackage(resKey, descData) {
                if (!descData) {
                    descData = fgui.AssetProxy.inst.getRes(resKey + "." + fgui.UIConfig.packageFileExtension);
                    if (!descData || descData.byteLength == 0) throw new Error("resource '" + resKey + "' not found");
                }
                var buffer = new fgui.ByteBuffer(descData);
                var pkg = new UIPackage();
                pkg._resKey = resKey;
                pkg.loadPackage(buffer);
                UIPackage._instById[pkg.id] = pkg;
                UIPackage._instByName[pkg.name] = pkg;
                UIPackage._instById[resKey] = pkg;
                return pkg;
            }
        }, {
            key: "loadPackage",
            value: function loadPackage(resKey, completeHandler, progressHandler) {
                var loadKeyArr = [];
                var keys = [];
                var i;
                if (Array.isArray(resKey)) {
                    for (i = 0; i < resKey.length; i++) {
                        loadKeyArr.push({
                            url: resKey[i] + "." + fgui.UIConfig.packageFileExtension,
                            type: Laya.Loader.BUFFER
                        });
                        keys.push(resKey[i]);
                    }
                } else {
                    loadKeyArr = [ {
                        url: resKey + "." + fgui.UIConfig.packageFileExtension,
                        type: Laya.Loader.BUFFER
                    } ];
                    keys = [ resKey ];
                }
                var pkgArr = [];
                var pkg;
                for (i = 0; i < loadKeyArr.length; i++) {
                    pkg = UIPackage._instById[keys[i]];
                    if (pkg) {
                        pkgArr.push(pkg);
                        loadKeyArr.splice(i, 1);
                        keys.splice(i, 1);
                        i--;
                    }
                }
                if (loadKeyArr.length == 0) {
                    completeHandler.runWith([ pkgArr ]);
                    return;
                }
                var descCompleteHandler = Laya.Handler.create(this, function() {
                    var pkg;
                    var urls = [];
                    for (i = 0; i < loadKeyArr.length; i++) {
                        var asset = fgui.AssetProxy.inst.getRes(loadKeyArr[i].url);
                        if (asset) {
                            pkg = new UIPackage();
                            pkgArr.push(pkg);
                            pkg._resKey = keys[i];
                            pkg.loadPackage(new fgui.ByteBuffer(asset));
                            var cnt = pkg._items.length;
                            for (var j = 0; j < cnt; j++) {
                                var pi = pkg._items[j];
                                if (pi.type == fgui.PackageItemType.Atlas) {
                                    urls.push({
                                        url: pi.file,
                                        type: Laya.Loader.IMAGE
                                    });
                                } else if (pi.type == fgui.PackageItemType.Sound) {
                                    urls.push({
                                        url: pi.file,
                                        type: Laya.Loader.SOUND
                                    });
                                }
                            }
                        }
                    }
                    if (urls.length > 0) {
                        fgui.AssetProxy.inst.load(urls, Laya.Handler.create(this, function() {
                            for (i = 0; i < pkgArr.length; i++) {
                                pkg = pkgArr[i];
                                if (!UIPackage._instById[pkg.id]) {
                                    UIPackage._instById[pkg.id] = pkg;
                                    UIPackage._instByName[pkg.name] = pkg;
                                    UIPackage._instByName[pkg._resKey] = pkg;
                                }
                            }
                            completeHandler.runWith([ pkgArr ]);
                        }, null, true), progressHandler);
                    } else {
                        for (i = 0; i < pkgArr.length; i++) {
                            pkg = pkgArr[i];
                            if (!UIPackage._instById[pkg.id]) {
                                UIPackage._instById[pkg.id] = pkg;
                                UIPackage._instByName[pkg.name] = pkg;
                                UIPackage._instByName[pkg._resKey] = pkg;
                            }
                        }
                        completeHandler.runWith([ pkgArr ]);
                    }
                }, null, true);
                fgui.AssetProxy.inst.load(loadKeyArr, descCompleteHandler, null, Laya.Loader.BUFFER);
            }
        }, {
            key: "removePackage",
            value: function removePackage(packageIdOrName) {
                var pkg = UIPackage._instById[packageIdOrName];
                if (!pkg) pkg = UIPackage._instByName[packageIdOrName];
                if (!pkg) throw new Error("unknown package: " + packageIdOrName);
                pkg.dispose();
                delete UIPackage._instById[pkg.id];
                delete UIPackage._instByName[pkg.name];
                delete UIPackage._instById[pkg._resKey];
                if (pkg._customId) delete UIPackage._instById[pkg._customId];
            }
        }, {
            key: "createObject",
            value: function createObject(pkgName, resName, userClass) {
                var pkg = UIPackage.getByName(pkgName);
                if (pkg) return pkg.createObject(resName, userClass); else return null;
            }
        }, {
            key: "createObjectFromURL",
            value: function createObjectFromURL(url, userClass) {
                var pi = UIPackage.getItemByURL(url);
                if (pi) return pi.owner.internalCreateObject(pi, userClass); else return null;
            }
        }, {
            key: "getItemURL",
            value: function getItemURL(pkgName, resName) {
                var pkg = UIPackage.getByName(pkgName);
                if (!pkg) return null;
                var pi = pkg._itemsByName[resName];
                if (!pi) return null;
                return "ui://" + pkg.id + pi.id;
            }
        }, {
            key: "getItemByURL",
            value: function getItemByURL(url) {
                var pos1 = url.indexOf("//");
                if (pos1 == -1) return null;
                var pos2 = url.indexOf("/", pos1 + 2);
                if (pos2 == -1) {
                    if (url.length > 13) {
                        var pkgId = url.substr(5, 8);
                        var pkg = UIPackage.getById(pkgId);
                        if (pkg) {
                            var srcId = url.substr(13);
                            return pkg.getItemById(srcId);
                        }
                    }
                } else {
                    var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
                    pkg = UIPackage.getByName(pkgName);
                    if (pkg) {
                        var srcName = url.substr(pos2 + 1);
                        return pkg.getItemByName(srcName);
                    }
                }
                return null;
            }
        }, {
            key: "getItemAssetByURL",
            value: function getItemAssetByURL(url) {
                var item = UIPackage.getItemByURL(url);
                if (item == null) return null;
                return item.owner.getItemAsset(item);
            }
        }, {
            key: "normalizeURL",
            value: function normalizeURL(url) {
                if (url == null) return null;
                var pos1 = url.indexOf("//");
                if (pos1 == -1) return null;
                var pos2 = url.indexOf("/", pos1 + 2);
                if (pos2 == -1) return url;
                var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
                var srcName = url.substr(pos2 + 1);
                return UIPackage.getItemURL(pkgName, srcName);
            }
        }, {
            key: "setStringsSource",
            value: function setStringsSource(source) {
                fgui.TranslationHelper.loadFromXML(source);
            }
        }, {
            key: "branch",
            get: function get() {
                return UIPackage._branch;
            },
            set: function set(value) {
                UIPackage._branch = value;
                for (var pkgId in UIPackage._instById) {
                    var pkg = UIPackage._instById[pkgId];
                    if (pkg._branches) {
                        pkg._branchIndex = pkg._branches.indexOf(value);
                    }
                }
            }
        } ]);
        return UIPackage;
    }();
    UIPackage._constructing = 0;
    UIPackage._instById = {};
    UIPackage._instByName = {};
    UIPackage._branch = "";
    UIPackage._vars = {};
    fgui.UIPackage = UIPackage;
})(fgui);

(function(fgui) {
    var Window = /* */ function(_fgui$GComponent9) {
        (0, _inherits2.default)(Window, _fgui$GComponent9);
        var _super23 = _createSuper(Window);
        function Window() {
            var _this19;
            (0, _classCallCheck2.default)(this, Window);
            _this19 = _super23.call(this);
            _this19._requestingCmd = 0;
            _this19._uiSources = [];
            _this19.bringToFontOnClick = fgui.UIConfig.bringWindowToFrontOnClick;
            _this19.displayObject.on(Laya.Event.DISPLAY, (0, _assertThisInitialized2.default)(_this19), _this19.__onShown);
            _this19.displayObject.on(Laya.Event.UNDISPLAY, (0, _assertThisInitialized2.default)(_this19), _this19.__onHidden);
            _this19.displayObject.on(Laya.Event.MOUSE_DOWN, (0, _assertThisInitialized2.default)(_this19), _this19.__mouseDown);
            return _this19;
        }
        (0, _createClass2.default)(Window, [ {
            key: "addUISource",
            value: function addUISource(source) {
                this._uiSources.push(source);
            }
        }, {
            key: "show",
            value: function show() {
                fgui.GRoot.inst.showWindow(this);
            }
        }, {
            key: "showOn",
            value: function showOn(root) {
                root.showWindow(this);
            }
        }, {
            key: "hide",
            value: function hide() {
                if (this.isShowing) this.doHideAnimation();
            }
        }, {
            key: "hideImmediately",
            value: function hideImmediately() {
                var r = this.parent instanceof fgui.GRoot ? this.parent : null;
                if (!r) r = fgui.GRoot.inst;
                r.hideWindowImmediately(this);
            }
        }, {
            key: "centerOn",
            value: function centerOn(r, restraint) {
                this.setXY(Math.round((r.width - this.width) / 2), Math.round((r.height - this.height) / 2));
                if (restraint) {
                    this.addRelation(r, fgui.RelationType.Center_Center);
                    this.addRelation(r, fgui.RelationType.Middle_Middle);
                }
            }
        }, {
            key: "toggleStatus",
            value: function toggleStatus() {
                if (this.isTop) this.hide(); else this.show();
            }
        }, {
            key: "bringToFront",
            value: function bringToFront() {
                this.root.bringToFront(this);
            }
        }, {
            key: "showModalWait",
            value: function showModalWait(requestingCmd) {
                if (requestingCmd != null) this._requestingCmd = requestingCmd;
                if (fgui.UIConfig.windowModalWaiting) {
                    if (!this._modalWaitPane) this._modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.windowModalWaiting);
                    this.layoutModalWaitPane();
                    this.addChild(this._modalWaitPane);
                }
            }
        }, {
            key: "layoutModalWaitPane",
            value: function layoutModalWaitPane() {
                if (this._contentArea) {
                    var pt = this._frame.localToGlobal();
                    pt = this.globalToLocal(pt.x, pt.y, pt);
                    this._modalWaitPane.setXY(pt.x + this._contentArea.x, pt.y + this._contentArea.y);
                    this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
                } else this._modalWaitPane.setSize(this.width, this.height);
            }
        }, {
            key: "closeModalWait",
            value: function closeModalWait(requestingCmd) {
                if (requestingCmd != null) {
                    if (this._requestingCmd != requestingCmd) return false;
                }
                this._requestingCmd = 0;
                if (this._modalWaitPane && this._modalWaitPane.parent != null) this.removeChild(this._modalWaitPane);
                return true;
            }
        }, {
            key: "init",
            value: function init() {
                if (this._inited || this._loading) return;
                if (this._uiSources.length > 0) {
                    this._loading = false;
                    var cnt = this._uiSources.length;
                    for (var i = 0; i < cnt; i++) {
                        var lib = this._uiSources[i];
                        if (!lib.loaded) {
                            lib.load(this.__uiLoadComplete, this);
                            this._loading = true;
                        }
                    }
                    if (!this._loading) this._init();
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
                var cnt = this._uiSources.length;
                for (var i = 0; i < cnt; i++) {
                    var lib = this._uiSources[i];
                    if (!lib.loaded) return;
                }
                this._loading = false;
                this._init();
            }
        }, {
            key: "_init",
            value: function _init() {
                this._inited = true;
                this.onInit();
                if (this.isShowing) this.doShowAnimation();
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (this.parent) this.hideImmediately();
                (0, _get2.default)((0, _getPrototypeOf2.default)(Window.prototype), "dispose", this).call(this);
            }
        }, {
            key: "closeEventHandler",
            value: function closeEventHandler() {
                this.hide();
            }
        }, {
            key: "__onShown",
            value: function __onShown() {
                if (!this._inited) this.init(); else this.doShowAnimation();
            }
        }, {
            key: "__onHidden",
            value: function __onHidden() {
                this.closeModalWait();
                this.onHide();
            }
        }, {
            key: "__mouseDown",
            value: function __mouseDown() {
                if (this.isShowing && this.bringToFontOnClick) this.bringToFront();
            }
        }, {
            key: "__dragStart",
            value: function __dragStart(evt) {
                fgui.GObject.cast(evt.currentTarget).stopDrag();
                this.startDrag();
            }
        }, {
            key: "contentPane",
            set: function set(val) {
                if (this._contentPane != val) {
                    if (this._contentPane) this.removeChild(this._contentPane);
                    this._contentPane = val;
                    if (this._contentPane) {
                        this.addChild(this._contentPane);
                        this.setSize(this._contentPane.width, this._contentPane.height);
                        this._contentPane.addRelation(this, fgui.RelationType.Size);
                        this._frame = this._contentPane.getChild("frame");
                        if (this._frame) {
                            this.closeButton = this._frame.getChild("closeButton");
                            this.dragArea = this._frame.getChild("dragArea");
                            this.contentArea = this._frame.getChild("contentArea");
                        }
                    }
                }
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
            set: function set(value) {
                if (this._closeButton) this._closeButton.offClick(this, this.closeEventHandler);
                this._closeButton = value;
                if (this._closeButton) this._closeButton.onClick(this, this.closeEventHandler);
            }
        }, {
            key: "dragArea",
            get: function get() {
                return this._dragArea;
            },
            set: function set(value) {
                if (this._dragArea != value) {
                    if (this._dragArea) {
                        this._dragArea.draggable = false;
                        this._dragArea.off(fgui.Events.DRAG_START, this, this.__dragStart);
                    }
                    this._dragArea = value;
                    if (this._dragArea) {
                        if (this._dragArea instanceof fgui.GGraph) this._dragArea.asGraph.drawRect(0, null, null);
                        this._dragArea.draggable = true;
                        this._dragArea.on(fgui.Events.DRAG_START, this, this.__dragStart);
                    }
                }
            }
        }, {
            key: "contentArea",
            get: function get() {
                return this._contentArea;
            },
            set: function set(value) {
                this._contentArea = value;
            }
        }, {
            key: "isShowing",
            get: function get() {
                return this.parent != null;
            }
        }, {
            key: "isTop",
            get: function get() {
                return this.parent != null && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
            }
        }, {
            key: "modal",
            get: function get() {
                return this._modal;
            },
            set: function set(val) {
                this._modal = val;
            }
        }, {
            key: "modalWaiting",
            get: function get() {
                return this._modalWaitPane && this._modalWaitPane.parent != null;
            }
        } ]);
        return Window;
    }(fgui.GComponent);
    fgui.Window = Window;
})(fgui);

(function(fgui) {
    var ControllerAction = /* */ function() {
        function ControllerAction() {
            (0, _classCallCheck2.default)(this, ControllerAction);
        }
        (0, _createClass2.default)(ControllerAction, [ {
            key: "run",
            value: function run(controller, prevPage, curPage) {
                if ((this.fromPage == null || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1) && (this.toPage == null || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1)) this.enter(controller); else this.leave(controller);
            }
        }, {
            key: "enter",
            value: function enter(controller) {}
        }, {
            key: "leave",
            value: function leave(controller) {}
        }, {
            key: "setup",
            value: function setup(buffer) {
                var cnt;
                var i;
                cnt = buffer.getInt16();
                this.fromPage = [];
                for (i = 0; i < cnt; i++) {
                    this.fromPage[i] = buffer.readS();
                }
                cnt = buffer.getInt16();
                this.toPage = [];
                for (i = 0; i < cnt; i++) {
                    this.toPage[i] = buffer.readS();
                }
            }
        } ], [ {
            key: "createAction",
            value: function createAction(type) {
                switch (type) {
                  case 0:
                    return new fgui.PlayTransitionAction();

                  case 1:
                    return new fgui.ChangePageAction();
                }
                return null;
            }
        } ]);
        return ControllerAction;
    }();
    fgui.ControllerAction = ControllerAction;
})(fgui);

(function(fgui) {
    var ChangePageAction = /* */ function(_fgui$ControllerActio) {
        (0, _inherits2.default)(ChangePageAction, _fgui$ControllerActio);
        var _super24 = _createSuper(ChangePageAction);
        function ChangePageAction() {
            (0, _classCallCheck2.default)(this, ChangePageAction);
            return _super24.call(this);
        }
        (0, _createClass2.default)(ChangePageAction, [ {
            key: "enter",
            value: function enter(controller) {
                if (!this.controllerName) return;
                var gcom;
                if (this.objectId) gcom = controller.parent.getChildById(this.objectId); else gcom = controller.parent;
                if (gcom) {
                    var cc = gcom.getController(this.controllerName);
                    if (cc && cc != controller && !cc.changing) {
                        if (this.targetPage == "~1") {
                            if (controller.selectedIndex < cc.pageCount) cc.selectedIndex = controller.selectedIndex;
                        } else if (this.targetPage == "~2") cc.selectedPage = controller.selectedPage; else cc.selectedPageId = this.targetPage;
                    }
                }
            }
        }, {
            key: "setup",
            value: function setup(buffer) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ChangePageAction.prototype), "setup", this).call(this, buffer);
                this.objectId = buffer.readS();
                this.controllerName = buffer.readS();
                this.targetPage = buffer.readS();
            }
        } ]);
        return ChangePageAction;
    }(fgui.ControllerAction);
    fgui.ChangePageAction = ChangePageAction;
})(fgui);

(function(fgui) {
    var PlayTransitionAction = /* */ function(_fgui$ControllerActio2) {
        (0, _inherits2.default)(PlayTransitionAction, _fgui$ControllerActio2);
        var _super25 = _createSuper(PlayTransitionAction);
        function PlayTransitionAction() {
            (0, _classCallCheck2.default)(this, PlayTransitionAction);
            return _super25.call(this);
        }
        (0, _createClass2.default)(PlayTransitionAction, [ {
            key: "enter",
            value: function enter(controller) {
                var trans = controller.parent.getTransition(this.transitionName);
                if (trans) {
                    if (this._currentTransition && this._currentTransition.playing) trans.changePlayTimes(this.playTimes); else trans.play(null, this.playTimes, this.delay);
                    this._currentTransition = trans;
                }
            }
        }, {
            key: "leave",
            value: function leave(controller) {
                if (this.stopOnExit && this._currentTransition) {
                    this._currentTransition.stop();
                    this._currentTransition = null;
                }
            }
        }, {
            key: "setup",
            value: function setup(buffer) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(PlayTransitionAction.prototype), "setup", this).call(this, buffer);
                this.transitionName = buffer.readS();
                this.playTimes = buffer.getInt32();
                this.delay = buffer.getFloat32();
                this.stopOnExit = buffer.readBool();
            }
        } ]);
        return PlayTransitionAction;
    }(fgui.ControllerAction);
    fgui.PlayTransitionAction = PlayTransitionAction;
})(fgui);

(function(fgui) {
    var BitmapFont = function BitmapFont() {
        (0, _classCallCheck2.default)(this, BitmapFont);
        this.size = 0;
        this.glyphs = {};
    };
    fgui.BitmapFont = BitmapFont;
})(fgui);

(function(fgui) {
    function fillImage(w, h, method, origin, clockwise, amount) {
        if (amount <= 0) return null; else if (amount >= .9999) return [ 0, 0, w, 0, w, h, 0, h ];
        var points;
        switch (method) {
          case fgui.FillMethod.Horizontal:
            points = fillHorizontal(w, h, origin, amount);
            break;

          case fgui.FillMethod.Vertical:
            points = fillVertical(w, h, origin, amount);
            break;

          case fgui.FillMethod.Radial90:
            points = fillRadial90(w, h, origin, clockwise, amount);
            break;

          case fgui.FillMethod.Radial180:
            points = fillRadial180(w, h, origin, clockwise, amount);
            break;

          case fgui.FillMethod.Radial360:
            points = fillRadial360(w, h, origin, clockwise, amount);
            break;
        }
        return points;
    }
    fgui.fillImage = fillImage;
    function fillHorizontal(w, h, origin, amount) {
        var w2 = w * amount;
        if (origin == fgui.FillOrigin.Left || origin == fgui.FillOrigin.Top) return [ 0, 0, w2, 0, w2, h, 0, h ]; else return [ w, 0, w, h, w - w2, h, w - w2, 0 ];
    }
    function fillVertical(w, h, origin, amount) {
        var h2 = h * amount;
        if (origin == fgui.FillOrigin.Left || origin == fgui.FillOrigin.Top) return [ 0, 0, 0, h2, w, h2, w, 0 ]; else return [ 0, h, w, h, w, h - h2, 0, h - h2 ];
    }
    function fillRadial90(w, h, origin, clockwise, amount) {
        if (clockwise && (origin == fgui.FillOrigin.TopRight || origin == fgui.FillOrigin.BottomLeft) || !clockwise && (origin == fgui.FillOrigin.TopLeft || origin == fgui.FillOrigin.BottomRight)) {
            amount = 1 - amount;
        }
        var v, v2, h2;
        v = Math.tan(Math.PI / 2 * amount);
        h2 = w * v;
        v2 = (h2 - h) / h2;
        var points;
        switch (origin) {
          case fgui.FillOrigin.TopLeft:
            if (clockwise) {
                if (h2 <= h) points = [ 0, 0, w, h2, w, 0 ]; else points = [ 0, 0, w * (1 - v2), h, w, h, w, 0 ];
            } else {
                if (h2 <= h) points = [ 0, 0, w, h2, w, h, 0, h ]; else points = [ 0, 0, w * (1 - v2), h, 0, h ];
            }
            break;

          case fgui.FillOrigin.TopRight:
            if (clockwise) {
                if (h2 <= h) points = [ w, 0, 0, h2, 0, h, w, h ]; else points = [ w, 0, w * v2, h, w, h ];
            } else {
                if (h2 <= h) points = [ w, 0, 0, h2, 0, 0 ]; else points = [ w, 0, w * v2, h, 0, h, 0, 0 ];
            }
            break;

          case fgui.FillOrigin.BottomLeft:
            if (clockwise) {
                if (h2 <= h) points = [ 0, h, w, h - h2, w, 0, 0, 0 ]; else points = [ 0, h, w * (1 - v2), 0, 0, 0 ];
            } else {
                if (h2 <= h) points = [ 0, h, w, h - h2, w, h ]; else points = [ 0, h, w * (1 - v2), 0, w, 0, w, h ];
            }
            break;

          case fgui.FillOrigin.BottomRight:
            if (clockwise) {
                if (h2 <= h) points = [ w, h, 0, h - h2, 0, h ]; else points = [ w, h, w * v2, 0, 0, 0, 0, h ];
            } else {
                if (h2 <= h) points = [ w, h, 0, h - h2, 0, 0, w, 0 ]; else points = [ w, h, w * v2, 0, w, 0 ];
            }
            break;
        }
        return points;
    }
    function movePoints(points, offsetX, offsetY) {
        var cnt = points.length;
        for (var i = 0; i < cnt; i += 2) {
            points[i] += offsetX;
            points[i + 1] += offsetY;
        }
    }
    function fillRadial180(w, h, origin, clockwise, amount) {
        var points;
        switch (origin) {
          case fgui.FillOrigin.Top:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial90(w / 2, h, clockwise ? fgui.FillOrigin.TopLeft : fgui.FillOrigin.TopRight, clockwise, amount);
                if (clockwise) movePoints(points, w / 2, 0);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial90(w / 2, h, clockwise ? fgui.FillOrigin.TopRight : fgui.FillOrigin.TopLeft, clockwise, amount);
                if (clockwise) points.push(w, h, w, 0); else {
                    movePoints(points, w / 2, 0);
                    points.push(0, h, 0, 0);
                }
            }
            break;

          case fgui.FillOrigin.Bottom:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial90(w / 2, h, clockwise ? fgui.FillOrigin.BottomRight : fgui.FillOrigin.BottomLeft, clockwise, amount);
                if (!clockwise) movePoints(points, w / 2, 0);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial90(w / 2, h, clockwise ? fgui.FillOrigin.BottomLeft : fgui.FillOrigin.BottomRight, clockwise, amount);
                if (clockwise) {
                    movePoints(points, w / 2, 0);
                    points.push(0, 0, 0, h);
                } else points.push(w, 0, w, h);
            }
            break;

          case fgui.FillOrigin.Left:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial90(w, h / 2, clockwise ? fgui.FillOrigin.BottomLeft : fgui.FillOrigin.TopLeft, clockwise, amount);
                if (!clockwise) movePoints(points, 0, h / 2);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial90(w, h / 2, clockwise ? fgui.FillOrigin.TopLeft : fgui.FillOrigin.BottomLeft, clockwise, amount);
                if (clockwise) {
                    movePoints(points, 0, h / 2);
                    points.push(w, 0, 0, 0);
                } else points.push(w, h, 0, h);
            }
            break;

          case fgui.FillOrigin.Right:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial90(w, h / 2, clockwise ? fgui.FillOrigin.TopRight : fgui.FillOrigin.BottomRight, clockwise, amount);
                if (clockwise) movePoints(points, 0, h / 2);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial90(w, h / 2, clockwise ? fgui.FillOrigin.BottomRight : fgui.FillOrigin.TopRight, clockwise, amount);
                if (clockwise) points.push(0, h, w, h); else {
                    movePoints(points, 0, h / 2);
                    points.push(0, 0, w, 0);
                }
            }
            break;
        }
        return points;
    }
    function fillRadial360(w, h, origin, clockwise, amount) {
        var points;
        switch (origin) {
          case fgui.FillOrigin.Top:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial180(w / 2, h, clockwise ? fgui.FillOrigin.Left : fgui.FillOrigin.Right, clockwise, amount);
                if (clockwise) movePoints(points, w / 2, 0);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial180(w / 2, h, clockwise ? fgui.FillOrigin.Right : fgui.FillOrigin.Left, clockwise, amount);
                if (clockwise) points.push(w, h, w, 0, w / 2, 0); else {
                    movePoints(points, w / 2, 0);
                    points.push(0, h, 0, 0, w / 2, 0);
                }
            }
            break;

          case fgui.FillOrigin.Bottom:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial180(w / 2, h, clockwise ? fgui.FillOrigin.Right : fgui.FillOrigin.Left, clockwise, amount);
                if (!clockwise) movePoints(points, w / 2, 0);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial180(w / 2, h, clockwise ? fgui.FillOrigin.Left : fgui.FillOrigin.Right, clockwise, amount);
                if (clockwise) {
                    movePoints(points, w / 2, 0);
                    points.push(0, 0, 0, h, w / 2, h);
                } else points.push(w, 0, w, h, w / 2, h);
            }
            break;

          case fgui.FillOrigin.Left:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial180(w, h / 2, clockwise ? fgui.FillOrigin.Bottom : fgui.FillOrigin.Top, clockwise, amount);
                if (!clockwise) movePoints(points, 0, h / 2);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial180(w, h / 2, clockwise ? fgui.FillOrigin.Top : fgui.FillOrigin.Bottom, clockwise, amount);
                if (clockwise) {
                    movePoints(points, 0, h / 2);
                    points.push(w, 0, 0, 0, 0, h / 2);
                } else points.push(w, h, 0, h, 0, h / 2);
            }
            break;

          case fgui.FillOrigin.Right:
            if (amount <= .5) {
                amount = amount / .5;
                points = fillRadial180(w, h / 2, clockwise ? fgui.FillOrigin.Top : fgui.FillOrigin.Bottom, clockwise, amount);
                if (clockwise) movePoints(points, 0, h / 2);
            } else {
                amount = (amount - .5) / .5;
                points = fillRadial180(w, h / 2, clockwise ? fgui.FillOrigin.Bottom : fgui.FillOrigin.Top, clockwise, amount);
                if (clockwise) points.push(0, h, w, h, w, h / 2); else {
                    movePoints(points, 0, h / 2);
                    points.push(0, 0, w, 0, w, h / 2);
                }
            }
            break;
        }
        return points;
    }
})(fgui);

(function(fgui) {
    var Image = /* */ function(_Laya$Sprite) {
        (0, _inherits2.default)(Image, _Laya$Sprite);
        var _super26 = _createSuper(Image);
        function Image() {
            var _this20;
            (0, _classCallCheck2.default)(this, Image);
            _this20 = _super26.call(this);
            _this20._tileGridIndice = 0;
            _this20._needRebuild = 0;
            _this20._fillMethod = 0;
            _this20._fillOrigin = 0;
            _this20._fillAmount = 0;
            _this20.mouseEnabled = false;
            _this20._color = "#FFFFFF";
            return _this20;
        }
        (0, _createClass2.default)(Image, [ {
            key: "markChanged",
            value: function markChanged(flag) {
                if (!this._needRebuild) {
                    this._needRebuild = flag;
                    Laya.timer.callLater(this, this.rebuild);
                } else this._needRebuild |= flag;
            }
        }, {
            key: "rebuild",
            value: function rebuild() {
                if ((this._needRebuild & 1) != 0) this.doDraw();
                if ((this._needRebuild & 2) != 0 && this._fillMethod != 0) this.doFill();
                this._needRebuild = 0;
            }
        }, {
            key: "doDraw",
            value: function doDraw() {
                var w = this["_width"];
                var h = this["_height"];
                var g = this.graphics;
                var tex = this._source;
                g.clear();
                if (tex == null || w == 0 || h == 0) {
                    return;
                }
                if (this._scaleByTile) {
                    g.fillTexture(tex, 0, 0, w, h);
                } else if (this._scale9Grid) {
                    if (!this._sizeGrid) {
                        var tw = tex.width;
                        var th = tex.height;
                        var left = this._scale9Grid.x;
                        var right = Math.max(tw - this._scale9Grid.right, 0);
                        var top = this._scale9Grid.y;
                        var bottom = Math.max(th - this._scale9Grid.bottom, 0);
                        this._sizeGrid = [ top, right, bottom, left, this._tileGridIndice ];
                    }
                    g.draw9Grid(tex, 0, 0, w, h, this._sizeGrid);
                } else {
                    g.drawImage(tex, 0, 0, w, h);
                }
            }
        }, {
            key: "doFill",
            value: function doFill() {
                var w = this["_width"];
                var h = this["_height"];
                var g = this._mask.graphics;
                g.clear();
                if (w == 0 || h == 0) return;
                var points = fgui.fillImage(w, h, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
                if (points == null) {
                    this.mask = null;
                    this.mask = this._mask;
                    return;
                }
                g.drawPoly(0, 0, points, "#FFFFFF");
            }
        }, {
            key: "width",
            set: function set(value) {
                if (this["_width"] !== value) {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Image.prototype), "set_width", this).call(this, value);
                    this.markChanged(1);
                }
            }
        }, {
            key: "height",
            set: function set(value) {
                if (this["_height"] !== value) {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Image.prototype), "set_height", this).call(this, value);
                    this.markChanged(1);
                }
            }
        }, {
            key: "texture",
            get: function get() {
                return this._source;
            },
            set: function set(value) {
                if (this._source != value) {
                    this._source = value;
                    if (this["_width"] == 0) {
                        if (this._source) this.size(this._source.width, this._source.height); else this.size(0, 0);
                    }
                    this.repaint();
                    this.markChanged(1);
                }
            }
        }, {
            key: "scale9Grid",
            get: function get() {
                return this._scale9Grid;
            },
            set: function set(value) {
                this._scale9Grid = value;
                this._sizeGrid = null;
                this.markChanged(1);
            }
        }, {
            key: "scaleByTile",
            get: function get() {
                return this._scaleByTile;
            },
            set: function set(value) {
                if (this._scaleByTile != value) {
                    this._scaleByTile = value;
                    this.markChanged(1);
                }
            }
        }, {
            key: "tileGridIndice",
            get: function get() {
                return this._tileGridIndice;
            },
            set: function set(value) {
                if (this._tileGridIndice != value) {
                    this._tileGridIndice = value;
                    this.markChanged(1);
                }
            }
        }, {
            key: "fillMethod",
            get: function get() {
                return this._fillMethod;
            },
            set: function set(value) {
                if (this._fillMethod != value) {
                    this._fillMethod = value;
                    if (this._fillMethod != 0) {
                        if (!this._mask) {
                            this._mask = new Laya.Sprite();
                            this._mask.mouseEnabled = false;
                        }
                        this.mask = this._mask;
                        this.markChanged(2);
                    } else if (this.mask) {
                        this._mask.graphics.clear();
                        this.mask = null;
                    }
                }
            }
        }, {
            key: "fillOrigin",
            get: function get() {
                return this._fillOrigin;
            },
            set: function set(value) {
                if (this._fillOrigin != value) {
                    this._fillOrigin = value;
                    if (this._fillMethod != 0) this.markChanged(2);
                }
            }
        }, {
            key: "fillClockwise",
            get: function get() {
                return this._fillClockwise;
            },
            set: function set(value) {
                if (this._fillClockwise != value) {
                    this._fillClockwise = value;
                    if (this._fillMethod != 0) this.markChanged(2);
                }
            }
        }, {
            key: "fillAmount",
            get: function get() {
                return this._fillAmount;
            },
            set: function set(value) {
                if (this._fillAmount != value) {
                    this._fillAmount = value;
                    if (this._fillMethod != 0) this.markChanged(2);
                }
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(value) {
                if (this._color != value) {
                    this._color = value;
                    fgui.ToolSet.setColorFilter(this, value);
                }
            }
        } ]);
        return Image;
    }(Laya.Sprite);
    fgui.Image = Image;
})(fgui);

(function(fgui) {
    var MovieClip = /* */ function(_fgui$Image) {
        (0, _inherits2.default)(MovieClip, _fgui$Image);
        var _super27 = _createSuper(MovieClip);
        function MovieClip() {
            var _this21;
            (0, _classCallCheck2.default)(this, MovieClip);
            _this21 = _super27.call(this);
            _this21.interval = 0;
            _this21.repeatDelay = 0;
            _this21.timeScale = 1;
            _this21._playing = true;
            _this21._frameCount = 0;
            _this21._frame = 0;
            _this21._start = 0;
            _this21._end = 0;
            _this21._times = 0;
            _this21._endAt = 0;
            _this21._status = 0;
            _this21._frameElapsed = 0;
            _this21._repeatedCount = 0;
            _this21.mouseEnabled = false;
            _this21.setPlaySettings();
            _this21.on(Laya.Event.DISPLAY, (0, _assertThisInitialized2.default)(_this21), _this21.__addToStage);
            _this21.on(Laya.Event.UNDISPLAY, (0, _assertThisInitialized2.default)(_this21), _this21.__removeFromStage);
            return _this21;
        }
        (0, _createClass2.default)(MovieClip, [ {
            key: "rewind",
            value: function rewind() {
                this._frame = 0;
                this._frameElapsed = 0;
                this._reversed = false;
                this._repeatedCount = 0;
                this.drawFrame();
            }
        }, {
            key: "syncStatus",
            value: function syncStatus(anotherMc) {
                this._frame = anotherMc._frame;
                this._frameElapsed = anotherMc._frameElapsed;
                this._reversed = anotherMc._reversed;
                this._repeatedCount = anotherMc._repeatedCount;
                this.drawFrame();
            }
        }, {
            key: "advance",
            value: function advance(timeInMiniseconds) {
                var beginFrame = this._frame;
                var beginReversed = this._reversed;
                var backupTime = timeInMiniseconds;
                while (true) {
                    var tt = this.interval + this._frames[this._frame].addDelay;
                    if (this._frame == 0 && this._repeatedCount > 0) tt += this.repeatDelay;
                    if (timeInMiniseconds < tt) {
                        this._frameElapsed = 0;
                        break;
                    }
                    timeInMiniseconds -= tt;
                    if (this.swing) {
                        if (this._reversed) {
                            this._frame--;
                            if (this._frame <= 0) {
                                this._frame = 0;
                                this._repeatedCount++;
                                this._reversed = !this._reversed;
                            }
                        } else {
                            this._frame++;
                            if (this._frame > this._frameCount - 1) {
                                this._frame = Math.max(0, this._frameCount - 2);
                                this._repeatedCount++;
                                this._reversed = !this._reversed;
                            }
                        }
                    } else {
                        this._frame++;
                        if (this._frame > this._frameCount - 1) {
                            this._frame = 0;
                            this._repeatedCount++;
                        }
                    }
                    if (this._frame == beginFrame && this._reversed == beginReversed) {
                        var roundTime = backupTime - timeInMiniseconds;
                        timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime;
                    }
                }
                this.drawFrame();
            }
        }, {
            key: "setPlaySettings",
            value: function setPlaySettings(start, end, times, endAt, endHandler) {
                if (start == undefined) start = 0;
                if (end == undefined) end = -1;
                if (times == undefined) times = 0;
                if (endAt == undefined) endAt = -1;
                this._start = start;
                this._end = end;
                if (this._end == -1 || this._end > this._frameCount - 1) this._end = this._frameCount - 1;
                this._times = times;
                this._endAt = endAt;
                if (this._endAt == -1) this._endAt = this._end;
                this._status = 0;
                this._endHandler = endHandler;
                this.frame = start;
            }
        }, {
            key: "update",
            value: function update() {
                if (!this._playing || this._frameCount == 0 || this._status == 3) return;
                var dt = Laya.timer.delta;
                if (dt > 100) dt = 100;
                if (this.timeScale != 1) dt *= this.timeScale;
                this._frameElapsed += dt;
                var tt = this.interval + this._frames[this._frame].addDelay;
                if (this._frame == 0 && this._repeatedCount > 0) tt += this.repeatDelay;
                if (this._frameElapsed < tt) return;
                this._frameElapsed -= tt;
                if (this._frameElapsed > this.interval) this._frameElapsed = this.interval;
                if (this.swing) {
                    if (this._reversed) {
                        this._frame--;
                        if (this._frame <= 0) {
                            this._frame = 0;
                            this._repeatedCount++;
                            this._reversed = !this._reversed;
                        }
                    } else {
                        this._frame++;
                        if (this._frame > this._frameCount - 1) {
                            this._frame = Math.max(0, this._frameCount - 2);
                            this._repeatedCount++;
                            this._reversed = !this._reversed;
                        }
                    }
                } else {
                    this._frame++;
                    if (this._frame > this._frameCount - 1) {
                        this._frame = 0;
                        this._repeatedCount++;
                    }
                }
                if (this._status == 1) {
                    this._frame = this._start;
                    this._frameElapsed = 0;
                    this._status = 0;
                } else if (this._status == 2) {
                    this._frame = this._endAt;
                    this._frameElapsed = 0;
                    this._status = 3;
                    if (this._endHandler) {
                        var handler = this._endHandler;
                        this._endHandler = null;
                        handler.run();
                    }
                } else {
                    if (this._frame == this._end) {
                        if (this._times > 0) {
                            this._times--;
                            if (this._times == 0) this._status = 2; else this._status = 1;
                        } else {
                            this._status = 1;
                        }
                    }
                }
                this.drawFrame();
            }
        }, {
            key: "drawFrame",
            value: function drawFrame() {
                if (this._frameCount > 0 && this._frame < this._frames.length) {
                    var frame = this._frames[this._frame];
                    this.texture = frame.texture;
                } else this.texture = null;
                this.rebuild();
            }
        }, {
            key: "checkTimer",
            value: function checkTimer() {
                if (this._playing && this._frameCount > 0 && this.stage != null) Laya.timer.frameLoop(1, this, this.update); else Laya.timer.clear(this, this.update);
            }
        }, {
            key: "__addToStage",
            value: function __addToStage() {
                if (this._playing && this._frameCount > 0) Laya.timer.frameLoop(1, this, this.update);
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
            set: function set(value) {
                this._frames = value;
                this._scaleByTile = false;
                this._scale9Grid = null;
                if (this._frames) {
                    this._frameCount = this._frames.length;
                    if (this._end == -1 || this._end > this._frameCount - 1) this._end = this._frameCount - 1;
                    if (this._endAt == -1 || this._endAt > this._frameCount - 1) this._endAt = this._frameCount - 1;
                    if (this._frame < 0 || this._frame > this._frameCount - 1) this._frame = this._frameCount - 1;
                    this._frameElapsed = 0;
                    this._repeatedCount = 0;
                    this._reversed = false;
                } else this._frameCount = 0;
                this.drawFrame();
                this.checkTimer();
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
            set: function set(value) {
                if (this._frame != value) {
                    if (this._frames && value >= this._frameCount) value = this._frameCount - 1;
                    this._frame = value;
                    this._frameElapsed = 0;
                    this.drawFrame();
                }
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            },
            set: function set(value) {
                if (this._playing != value) {
                    this._playing = value;
                    this.checkTimer();
                }
            }
        } ]);
        return MovieClip;
    }(fgui.Image);
    fgui.MovieClip = MovieClip;
})(fgui);

(function(fgui) {
    var GearBase = /* */ function() {
        function GearBase(owner) {
            (0, _classCallCheck2.default)(this, GearBase);
            this._owner = owner;
        }
        (0, _createClass2.default)(GearBase, [ {
            key: "dispose",
            value: function dispose() {
                if (this._tweenConfig && this._tweenConfig._tweener) {
                    this._tweenConfig._tweener.kill();
                    this._tweenConfig._tweener = null;
                }
            }
        }, {
            key: "setup",
            value: function setup(buffer) {
                this._controller = this._owner.parent.getControllerAt(buffer.getInt16());
                this.init();
                var i;
                var page;
                var cnt = buffer.getInt16();
                if (this instanceof fgui.GearDisplay) {
                    this.pages = buffer.readSArray(cnt);
                } else if (this instanceof fgui.GearDisplay2) {
                    this.pages = buffer.readSArray(cnt);
                } else {
                    for (i = 0; i < cnt; i++) {
                        page = buffer.readS();
                        if (page == null) continue;
                        this.addStatus(page, buffer);
                    }
                    if (buffer.readBool()) this.addStatus(null, buffer);
                }
                if (buffer.readBool()) {
                    this._tweenConfig = new GearTweenConfig();
                    this._tweenConfig.easeType = buffer.readByte();
                    this._tweenConfig.duration = buffer.getFloat32();
                    this._tweenConfig.delay = buffer.getFloat32();
                }
                if (buffer.version >= 2) {
                    if (this instanceof fgui.GearXY) {
                        if (buffer.readBool()) {
                            this.positionsInPercent = true;
                            for (i = 0; i < cnt; i++) {
                                page = buffer.readS();
                                if (page == null) continue;
                                this.addExtStatus(page, buffer);
                            }
                            if (buffer.readBool()) this.addExtStatus(null, buffer);
                        }
                    } else if (this instanceof fgui.GearDisplay2) this.condition = buffer.readByte();
                }
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(dx, dy) {}
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {}
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
            set: function set(val) {
                if (val != this._controller) {
                    this._controller = val;
                    if (this._controller) this.init();
                }
            }
        }, {
            key: "tweenConfig",
            get: function get() {
                if (!this._tweenConfig) this._tweenConfig = new GearTweenConfig();
                return this._tweenConfig;
            }
        } ], [ {
            key: "create",
            value: function create(owner, index) {
                if (!Classes) Classes = [ fgui.GearDisplay, fgui.GearXY, fgui.GearSize, fgui.GearLook, fgui.GearColor, fgui.GearAnimation, fgui.GearText, fgui.GearIcon, fgui.GearDisplay2, fgui.GearFontSize ];
                return new Classes[index](owner);
            }
        } ]);
        return GearBase;
    }();
    fgui.GearBase = GearBase;
    var Classes;
    var GearTweenConfig = function GearTweenConfig() {
        (0, _classCallCheck2.default)(this, GearTweenConfig);
        this.tween = true;
        this.easeType = fgui.EaseType.QuadOut;
        this.duration = .3;
        this.delay = 0;
    };
    fgui.GearTweenConfig = GearTweenConfig;
})(fgui);

(function(fgui) {
    var GearAnimation = /* */ function(_fgui$GearBase) {
        (0, _inherits2.default)(GearAnimation, _fgui$GearBase);
        var _super28 = _createSuper(GearAnimation);
        function GearAnimation(owner) {
            (0, _classCallCheck2.default)(this, GearAnimation);
            return _super28.call(this, owner);
        }
        (0, _createClass2.default)(GearAnimation, [ {
            key: "init",
            value: function init() {
                this._default = {
                    playing: this._owner.getProp(fgui.ObjectPropID.Playing),
                    frame: this._owner.getProp(fgui.ObjectPropID.Frame)
                };
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else this._storage[pageId] = gv = {};
                gv.playing = buffer.readBool();
                gv.frame = buffer.getInt32();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = true;
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) gv = this._default;
                this._owner.setProp(fgui.ObjectPropID.Playing, gv.playing);
                this._owner.setProp(fgui.ObjectPropID.Frame, gv.frame);
                this._owner._gearLocked = false;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) this._storage[this._controller.selectedPageId] = gv = {};
                gv.playing = this._owner.getProp(fgui.ObjectPropID.Playing);
                gv.frame = this._owner.getProp(fgui.ObjectPropID.Frame);
            }
        } ]);
        return GearAnimation;
    }(fgui.GearBase);
    fgui.GearAnimation = GearAnimation;
})(fgui);

(function(fgui) {
    var GearColor = /* */ function(_fgui$GearBase2) {
        (0, _inherits2.default)(GearColor, _fgui$GearBase2);
        var _super29 = _createSuper(GearColor);
        function GearColor(owner) {
            (0, _classCallCheck2.default)(this, GearColor);
            return _super29.call(this, owner);
        }
        (0, _createClass2.default)(GearColor, [ {
            key: "init",
            value: function init() {
                this._default = {
                    color: this._owner.getProp(fgui.ObjectPropID.Color),
                    strokeColor: this._owner.getProp(fgui.ObjectPropID.OutlineColor)
                };
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else this._storage[pageId] = gv = {};
                gv.color = buffer.readColorS();
                gv.strokeColor = buffer.readColorS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = true;
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) gv = this._default;
                this._owner.setProp(fgui.ObjectPropID.Color, gv.color);
                this._owner.setProp(fgui.ObjectPropID.OutlineColor, gv.strokeColor);
                this._owner._gearLocked = false;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) this._storage[this._controller.selectedPageId] = gv = {};
                gv.color = this._owner.getProp(fgui.ObjectPropID.Color);
                gv.strokeColor = this._owner.getProp(fgui.ObjectPropID.OutlineColor);
            }
        } ]);
        return GearColor;
    }(fgui.GearBase);
    fgui.GearColor = GearColor;
})(fgui);

(function(fgui) {
    var GearDisplay = /* */ function(_fgui$GearBase3) {
        (0, _inherits2.default)(GearDisplay, _fgui$GearBase3);
        var _super30 = _createSuper(GearDisplay);
        function GearDisplay(owner) {
            var _this22;
            (0, _classCallCheck2.default)(this, GearDisplay);
            _this22 = _super30.call(this, owner);
            _this22._displayLockToken = 1;
            _this22._visible = 0;
            return _this22;
        }
        (0, _createClass2.default)(GearDisplay, [ {
            key: "init",
            value: function init() {
                this.pages = null;
            }
        }, {
            key: "apply",
            value: function apply() {
                this._displayLockToken++;
                if (this._displayLockToken == 0) this._displayLockToken = 1;
                if (this.pages == null || this.pages.length == 0 || this.pages.indexOf(this._controller.selectedPageId) != -1) this._visible = 1; else this._visible = 0;
            }
        }, {
            key: "addLock",
            value: function addLock() {
                this._visible++;
                return this._displayLockToken;
            }
        }, {
            key: "releaseLock",
            value: function releaseLock(token) {
                if (token == this._displayLockToken) this._visible--;
            }
        }, {
            key: "connected",
            get: function get() {
                return this._controller == null || this._visible > 0;
            }
        } ]);
        return GearDisplay;
    }(fgui.GearBase);
    fgui.GearDisplay = GearDisplay;
})(fgui);

(function(fgui) {
    var GearDisplay2 = /* */ function(_fgui$GearBase4) {
        (0, _inherits2.default)(GearDisplay2, _fgui$GearBase4);
        var _super31 = _createSuper(GearDisplay2);
        function GearDisplay2(owner) {
            var _this23;
            (0, _classCallCheck2.default)(this, GearDisplay2);
            _this23 = _super31.call(this, owner);
            _this23._visible = 0;
            return _this23;
        }
        (0, _createClass2.default)(GearDisplay2, [ {
            key: "init",
            value: function init() {
                this.pages = null;
            }
        }, {
            key: "apply",
            value: function apply() {
                if (this.pages == null || this.pages.length == 0 || this.pages.indexOf(this._controller.selectedPageId) != -1) this._visible = 1; else this._visible = 0;
            }
        }, {
            key: "evaluate",
            value: function evaluate(connected) {
                var v = this._controller == null || this._visible > 0;
                if (this.condition == 0) v = v && connected; else v = v || connected;
                return v;
            }
        } ]);
        return GearDisplay2;
    }(fgui.GearBase);
    fgui.GearDisplay2 = GearDisplay2;
})(fgui);

(function(fgui) {
    var GearFontSize = /* */ function(_fgui$GearBase5) {
        (0, _inherits2.default)(GearFontSize, _fgui$GearBase5);
        var _super32 = _createSuper(GearFontSize);
        function GearFontSize(owner) {
            var _this24;
            (0, _classCallCheck2.default)(this, GearFontSize);
            _this24 = _super32.call(this, owner);
            _this24._default = 0;
            return _this24;
        }
        (0, _createClass2.default)(GearFontSize, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.getProp(fgui.ObjectPropID.FontSize);
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                if (pageId == null) this._default = buffer.getInt32(); else this._storage[pageId] = buffer.getInt32();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = true;
                var data = this._storage[this._controller.selectedPageId];
                if (data != undefined) this._owner.setProp(fgui.ObjectPropID.FontSize, data); else this._owner.setProp(fgui.ObjectPropID.FontSize, this._default);
                this._owner._gearLocked = false;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.getProp(fgui.ObjectPropID.FontSize);
            }
        } ]);
        return GearFontSize;
    }(fgui.GearBase);
    fgui.GearFontSize = GearFontSize;
})(fgui);

(function(fgui) {
    var GearIcon = /* */ function(_fgui$GearBase6) {
        (0, _inherits2.default)(GearIcon, _fgui$GearBase6);
        var _super33 = _createSuper(GearIcon);
        function GearIcon(owner) {
            (0, _classCallCheck2.default)(this, GearIcon);
            return _super33.call(this, owner);
        }
        (0, _createClass2.default)(GearIcon, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.icon;
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                if (pageId == null) this._default = buffer.readS(); else this._storage[pageId] = buffer.readS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = true;
                var data = this._storage[this._controller.selectedPageId];
                if (data !== undefined) this._owner.icon = data; else this._owner.icon = this._default;
                this._owner._gearLocked = false;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.icon;
            }
        } ]);
        return GearIcon;
    }(fgui.GearBase);
    fgui.GearIcon = GearIcon;
})(fgui);

(function(fgui) {
    var GearLook = /* */ function(_fgui$GearBase7) {
        (0, _inherits2.default)(GearLook, _fgui$GearBase7);
        var _super34 = _createSuper(GearLook);
        function GearLook(owner) {
            (0, _classCallCheck2.default)(this, GearLook);
            return _super34.call(this, owner);
        }
        (0, _createClass2.default)(GearLook, [ {
            key: "init",
            value: function init() {
                this._default = {
                    alpha: this._owner.alpha,
                    rotation: this._owner.rotation,
                    grayed: this._owner.grayed,
                    touchable: this._owner.touchable
                };
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else this._storage[pageId] = gv = {};
                gv.alpha = buffer.getFloat32();
                gv.rotation = buffer.getFloat32();
                gv.grayed = buffer.readBool();
                gv.touchable = buffer.readBool();
            }
        }, {
            key: "apply",
            value: function apply() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) gv = this._default;
                if (this._tweenConfig && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                    this._owner._gearLocked = true;
                    this._owner.grayed = gv.grayed;
                    this._owner.touchable = gv.touchable;
                    this._owner._gearLocked = false;
                    if (this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                            this._tweenConfig._tweener.kill(true);
                            this._tweenConfig._tweener = null;
                        } else return;
                    }
                    var a = gv.alpha != this._owner.alpha;
                    var b = gv.rotation != this._owner.rotation;
                    if (a || b) {
                        if (this._owner.checkGearController(0, this._controller)) this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                        this._tweenConfig._tweener = fgui.GTween.to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((a ? 1 : 0) + (b ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this);
                    }
                } else {
                    this._owner._gearLocked = true;
                    this._owner.grayed = gv.grayed;
                    this._owner.touchable = gv.touchable;
                    this._owner.alpha = gv.alpha;
                    this._owner.rotation = gv.rotation;
                    this._owner._gearLocked = false;
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(tweener) {
                var flag = tweener.userData;
                this._owner._gearLocked = true;
                if ((flag & 1) != 0) this._owner.alpha = tweener.value.x;
                if ((flag & 2) != 0) this._owner.rotation = tweener.value.y;
                this._owner._gearLocked = false;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                if (this._tweenConfig._displayLockToken != 0) {
                    this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                    this._tweenConfig._displayLockToken = 0;
                }
                this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) this._storage[this._controller.selectedPageId] = gv = {};
                gv.alpha = this._owner.alpha;
                gv.rotation = this._owner.rotation;
                gv.grayed = this._owner.grayed;
                gv.touchable = this._owner.touchable;
            }
        } ]);
        return GearLook;
    }(fgui.GearBase);
    fgui.GearLook = GearLook;
})(fgui);

(function(fgui) {
    var GearSize = /* */ function(_fgui$GearBase8) {
        (0, _inherits2.default)(GearSize, _fgui$GearBase8);
        var _super35 = _createSuper(GearSize);
        function GearSize(owner) {
            (0, _classCallCheck2.default)(this, GearSize);
            return _super35.call(this, owner);
        }
        (0, _createClass2.default)(GearSize, [ {
            key: "init",
            value: function init() {
                this._default = {
                    width: this._owner.width,
                    height: this._owner.height,
                    scaleX: this._owner.scaleX,
                    scaleY: this._owner.scaleY
                };
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else this._storage[pageId] = gv = {};
                gv.width = buffer.getInt32();
                gv.height = buffer.getInt32();
                gv.scaleX = buffer.getFloat32();
                gv.scaleY = buffer.getFloat32();
            }
        }, {
            key: "apply",
            value: function apply() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) gv = this._default;
                if (this._tweenConfig && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                    if (this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x != gv.width || this._tweenConfig._tweener.endValue.y != gv.height || this._tweenConfig._tweener.endValue.z != gv.scaleX || this._tweenConfig._tweener.endValue.w != gv.scaleY) {
                            this._tweenConfig._tweener.kill(true);
                            this._tweenConfig._tweener = null;
                        } else return;
                    }
                    var a = gv.width != this._owner.width || gv.height != this._owner.height;
                    var b = gv.scaleX != this._owner.scaleX || gv.scaleY != this._owner.scaleY;
                    if (a || b) {
                        if (this._owner.checkGearController(0, this._controller)) this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                        this._tweenConfig._tweener = fgui.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, gv.width, gv.height, gv.scaleX, gv.scaleY, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((a ? 1 : 0) + (b ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this);
                    }
                } else {
                    this._owner._gearLocked = true;
                    this._owner.setSize(gv.width, gv.height, this._owner.getGear(1).controller == this._controller);
                    this._owner.setScale(gv.scaleX, gv.scaleY);
                    this._owner._gearLocked = false;
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(tweener) {
                var flag = tweener.userData;
                this._owner._gearLocked = true;
                if ((flag & 1) != 0) this._owner.setSize(tweener.value.x, tweener.value.y, this._owner.checkGearController(1, this._controller));
                if ((flag & 2) != 0) this._owner.setScale(tweener.value.z, tweener.value.w);
                this._owner._gearLocked = false;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                if (this._tweenConfig._displayLockToken != 0) {
                    this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                    this._tweenConfig._displayLockToken = 0;
                }
                this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) this._storage[this._controller.selectedPageId] = gv = {};
                gv.width = this._owner.width;
                gv.height = this._owner.height;
                gv.scaleX = this._owner.scaleX;
                gv.scaleY = this._owner.scaleY;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(dx, dy) {
                if (this._controller == null || this._storage == null) return;
                for (var key in this._storage) {
                    var gv = this._storage[key];
                    gv.width += dx;
                    gv.height += dy;
                }
                this._default.width += dx;
                this._default.height += dy;
                this.updateState();
            }
        } ]);
        return GearSize;
    }(fgui.GearBase);
    fgui.GearSize = GearSize;
})(fgui);

(function(fgui) {
    var GearText = /* */ function(_fgui$GearBase9) {
        (0, _inherits2.default)(GearText, _fgui$GearBase9);
        var _super36 = _createSuper(GearText);
        function GearText(owner) {
            (0, _classCallCheck2.default)(this, GearText);
            return _super36.call(this, owner);
        }
        (0, _createClass2.default)(GearText, [ {
            key: "init",
            value: function init() {
                this._default = this._owner.text;
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                if (pageId == null) this._default = buffer.readS(); else this._storage[pageId] = buffer.readS();
            }
        }, {
            key: "apply",
            value: function apply() {
                this._owner._gearLocked = true;
                var data = this._storage[this._controller.selectedPageId];
                if (data !== undefined) this._owner.text = data; else this._owner.text = this._default;
                this._owner._gearLocked = false;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                this._storage[this._controller.selectedPageId] = this._owner.text;
            }
        } ]);
        return GearText;
    }(fgui.GearBase);
    fgui.GearText = GearText;
})(fgui);

(function(fgui) {
    var GearXY = /* */ function(_fgui$GearBase10) {
        (0, _inherits2.default)(GearXY, _fgui$GearBase10);
        var _super37 = _createSuper(GearXY);
        function GearXY(owner) {
            (0, _classCallCheck2.default)(this, GearXY);
            return _super37.call(this, owner);
        }
        (0, _createClass2.default)(GearXY, [ {
            key: "init",
            value: function init() {
                this._default = {
                    x: this._owner.x,
                    y: this._owner.y,
                    px: this._owner.x / this._owner.parent.width,
                    py: this._owner.y / this._owner.parent.height
                };
                this._storage = {};
            }
        }, {
            key: "addStatus",
            value: function addStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else this._storage[pageId] = gv = {};
                gv.x = buffer.getInt32();
                gv.y = buffer.getInt32();
            }
        }, {
            key: "addExtStatus",
            value: function addExtStatus(pageId, buffer) {
                var gv;
                if (pageId == null) gv = this._default; else gv = this._storage[pageId];
                gv.px = buffer.getFloat32();
                gv.py = buffer.getFloat32();
            }
        }, {
            key: "apply",
            value: function apply() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) gv = this._default;
                var ex;
                var ey;
                if (this.positionsInPercent && this._owner.parent) {
                    ex = gv.px * this._owner.parent.width;
                    ey = gv.py * this._owner.parent.height;
                } else {
                    ex = gv.x;
                    ey = gv.y;
                }
                if (this._tweenConfig && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                    if (this._tweenConfig._tweener) {
                        if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                            this._tweenConfig._tweener.kill(true);
                            this._tweenConfig._tweener = null;
                        } else return;
                    }
                    var ox = this._owner.x;
                    var oy = this._owner.y;
                    if (ox != ex || oy != ey) {
                        if (this._owner.checkGearController(0, this._controller)) this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                        this._tweenConfig._tweener = fgui.GTween.to2(ox, oy, ex, ey, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this);
                    }
                } else {
                    this._owner._gearLocked = true;
                    this._owner.setXY(ex, ey);
                    this._owner._gearLocked = false;
                }
            }
        }, {
            key: "__tweenUpdate",
            value: function __tweenUpdate(tweener) {
                this._owner._gearLocked = true;
                this._owner.setXY(tweener.value.x, tweener.value.y);
                this._owner._gearLocked = false;
            }
        }, {
            key: "__tweenComplete",
            value: function __tweenComplete() {
                if (this._tweenConfig._displayLockToken != 0) {
                    this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                    this._tweenConfig._displayLockToken = 0;
                }
                this._tweenConfig._tweener = null;
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var gv = this._storage[this._controller.selectedPageId];
                if (!gv) this._storage[this._controller.selectedPageId] = gv = {};
                gv.x = this._owner.x;
                gv.y = this._owner.y;
                gv.px = this._owner.x / this._owner.parent.width;
                gv.py = this._owner.y / this._owner.parent.height;
            }
        }, {
            key: "updateFromRelations",
            value: function updateFromRelations(dx, dy) {
                if (this._controller == null || this._storage == null || this.positionsInPercent) return;
                for (var key in this._storage) {
                    var pt = this._storage[key];
                    pt.x += dx;
                    pt.y += dy;
                }
                this._default.x += dx;
                this._default.y += dy;
                this.updateState();
            }
        } ]);
        return GearXY;
    }(fgui.GearBase);
    fgui.GearXY = GearXY;
})(fgui);

(function(fgui) {
    var _PiOver2 = Math.PI * .5;
    var _TwoPi = Math.PI * 2;
    function evaluateEase(easeType, time, duration, overshootOrAmplitude, period) {
        switch (easeType) {
          case fgui.EaseType.Linear:
            return time / duration;

          case fgui.EaseType.SineIn:
            return -Math.cos(time / duration * _PiOver2) + 1;

          case fgui.EaseType.SineOut:
            return Math.sin(time / duration * _PiOver2);

          case fgui.EaseType.SineInOut:
            return -.5 * (Math.cos(Math.PI * time / duration) - 1);

          case fgui.EaseType.QuadIn:
            return (time /= duration) * time;

          case fgui.EaseType.QuadOut:
            return -(time /= duration) * (time - 2);

          case fgui.EaseType.QuadInOut:
            if ((time /= duration * .5) < 1) return .5 * time * time;
            return -.5 * (--time * (time - 2) - 1);

          case fgui.EaseType.CubicIn:
            return (time /= duration) * time * time;

          case fgui.EaseType.CubicOut:
            return (time = time / duration - 1) * time * time + 1;

          case fgui.EaseType.CubicInOut:
            if ((time /= duration * .5) < 1) return .5 * time * time * time;
            return .5 * ((time -= 2) * time * time + 2);

          case fgui.EaseType.QuartIn:
            return (time /= duration) * time * time * time;

          case fgui.EaseType.QuartOut:
            return -((time = time / duration - 1) * time * time * time - 1);

          case fgui.EaseType.QuartInOut:
            if ((time /= duration * .5) < 1) return .5 * time * time * time * time;
            return -.5 * ((time -= 2) * time * time * time - 2);

          case fgui.EaseType.QuintIn:
            return (time /= duration) * time * time * time * time;

          case fgui.EaseType.QuintOut:
            return (time = time / duration - 1) * time * time * time * time + 1;

          case fgui.EaseType.QuintInOut:
            if ((time /= duration * .5) < 1) return .5 * time * time * time * time * time;
            return .5 * ((time -= 2) * time * time * time * time + 2);

          case fgui.EaseType.ExpoIn:
            return time == 0 ? 0 : Math.pow(2, 10 * (time / duration - 1));

          case fgui.EaseType.ExpoOut:
            if (time == duration) return 1;
            return -Math.pow(2, -10 * time / duration) + 1;

          case fgui.EaseType.ExpoInOut:
            if (time == 0) return 0;
            if (time == duration) return 1;
            if ((time /= duration * .5) < 1) return .5 * Math.pow(2, 10 * (time - 1));
            return .5 * (-Math.pow(2, -10 * --time) + 2);

          case fgui.EaseType.CircIn:
            return -(Math.sqrt(1 - (time /= duration) * time) - 1);

          case fgui.EaseType.CircOut:
            return Math.sqrt(1 - (time = time / duration - 1) * time);

          case fgui.EaseType.CircInOut:
            if ((time /= duration * .5) < 1) return -.5 * (Math.sqrt(1 - time * time) - 1);
            return .5 * (Math.sqrt(1 - (time -= 2) * time) + 1);

          case fgui.EaseType.ElasticIn:
            var s0;
            if (time == 0) return 0;
            if ((time /= duration) == 1) return 1;
            if (period == 0) period = duration * .3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s0 = period / 4;
            } else s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));

          case fgui.EaseType.ElasticOut:
            var s1;
            if (time == 0) return 0;
            if ((time /= duration) == 1) return 1;
            if (period == 0) period = duration * .3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s1 = period / 4;
            } else s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1;

          case fgui.EaseType.ElasticInOut:
            var s;
            if (time == 0) return 0;
            if ((time /= duration * .5) == 2) return 1;
            if (period == 0) period = duration * (.3 * 1.5);
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s = period / 4;
            } else s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            if (time < 1) return -.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
            return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * .5 + 1;

          case fgui.EaseType.BackIn:
            return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);

          case fgui.EaseType.BackOut:
            return (time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1;

          case fgui.EaseType.BackInOut:
            if ((time /= duration * .5) < 1) return .5 * (time * time * (((overshootOrAmplitude *= 1.525) + 1) * time - overshootOrAmplitude));
            return .5 * ((time -= 2) * time * (((overshootOrAmplitude *= 1.525) + 1) * time + overshootOrAmplitude) + 2);

          case fgui.EaseType.BounceIn:
            return bounce_easeIn(time, duration);

          case fgui.EaseType.BounceOut:
            return bounce_easeOut(time, duration);

          case fgui.EaseType.BounceInOut:
            return bounce_easeInOut(time, duration);

          default:
            return -(time /= duration) * (time - 2);
        }
    }
    fgui.evaluateEase = evaluateEase;
    function bounce_easeIn(time, duration) {
        return 1 - bounce_easeOut(duration - time, duration);
    }
    function bounce_easeOut(time, duration) {
        if ((time /= duration) < 1 / 2.75) {
            return 7.5625 * time * time;
        }
        if (time < 2 / 2.75) {
            return 7.5625 * (time -= 1.5 / 2.75) * time + .75;
        }
        if (time < 2.5 / 2.75) {
            return 7.5625 * (time -= 2.25 / 2.75) * time + .9375;
        }
        return 7.5625 * (time -= 2.625 / 2.75) * time + .984375;
    }
    function bounce_easeInOut(time, duration) {
        if (time < duration * .5) {
            return bounce_easeIn(time * 2, duration) * .5;
        }
        return bounce_easeOut(time * 2 - duration, duration) * .5 + .5;
    }
})(fgui);

(function(fgui) {
    var EaseType = function EaseType() {
        (0, _classCallCheck2.default)(this, EaseType);
    };
    EaseType.Linear = 0;
    EaseType.SineIn = 1;
    EaseType.SineOut = 2;
    EaseType.SineInOut = 3;
    EaseType.QuadIn = 4;
    EaseType.QuadOut = 5;
    EaseType.QuadInOut = 6;
    EaseType.CubicIn = 7;
    EaseType.CubicOut = 8;
    EaseType.CubicInOut = 9;
    EaseType.QuartIn = 10;
    EaseType.QuartOut = 11;
    EaseType.QuartInOut = 12;
    EaseType.QuintIn = 13;
    EaseType.QuintOut = 14;
    EaseType.QuintInOut = 15;
    EaseType.ExpoIn = 16;
    EaseType.ExpoOut = 17;
    EaseType.ExpoInOut = 18;
    EaseType.CircIn = 19;
    EaseType.CircOut = 20;
    EaseType.CircInOut = 21;
    EaseType.ElasticIn = 22;
    EaseType.ElasticOut = 23;
    EaseType.ElasticInOut = 24;
    EaseType.BackIn = 25;
    EaseType.BackOut = 26;
    EaseType.BackInOut = 27;
    EaseType.BounceIn = 28;
    EaseType.BounceOut = 29;
    EaseType.BounceInOut = 30;
    EaseType.Custom = 31;
    fgui.EaseType = EaseType;
})(fgui);

(function(fgui) {
    var GPath = /* */ function() {
        function GPath() {
            (0, _classCallCheck2.default)(this, GPath);
            this._segments = new Array();
            this._points = new Array();
        }
        (0, _createClass2.default)(GPath, [ {
            key: "create",
            value: function create(pt1, pt2, pt3, pt4) {
                var points;
                if (Array.isArray(pt1)) points = pt1; else {
                    points = new Array();
                    points.push(pt1);
                    points.push(pt2);
                    if (pt3) points.push(pt3);
                    if (pt4) points.push(pt4);
                }
                this._segments.length = 0;
                this._points.length = 0;
                this._fullLength = 0;
                var cnt = points.length;
                if (cnt == 0) return;
                var splinePoints = s_points;
                splinePoints.length = 0;
                var prev = points[0];
                if (prev.curveType == fgui.CurveType.CRSpline) splinePoints.push(new Laya.Point(prev.x, prev.y));
                for (var i = 1; i < cnt; i++) {
                    var current = points[i];
                    if (prev.curveType != fgui.CurveType.CRSpline) {
                        var seg = {};
                        seg.type = prev.curveType;
                        seg.ptStart = this._points.length;
                        if (prev.curveType == fgui.CurveType.Straight) {
                            seg.ptCount = 2;
                            this._points.push(new Laya.Point(prev.x, prev.y));
                            this._points.push(new Laya.Point(current.x, current.y));
                        } else if (prev.curveType == fgui.CurveType.Bezier) {
                            seg.ptCount = 3;
                            this._points.push(new Laya.Point(prev.x, prev.y));
                            this._points.push(new Laya.Point(current.x, current.y));
                            this._points.push(new Laya.Point(prev.control1_x, prev.control1_y));
                        } else if (prev.curveType == fgui.CurveType.CubicBezier) {
                            seg.ptCount = 4;
                            this._points.push(new Laya.Point(prev.x, prev.y));
                            this._points.push(new Laya.Point(current.x, current.y));
                            this._points.push(new Laya.Point(prev.control1_x, prev.control1_y));
                            this._points.push(new Laya.Point(prev.control2_x, prev.control2_y));
                        }
                        seg.length = fgui.ToolSet.distance(prev.x, prev.y, current.x, current.y);
                        this._fullLength += seg.length;
                        this._segments.push(seg);
                    }
                    if (current.curveType != fgui.CurveType.CRSpline) {
                        if (splinePoints.length > 0) {
                            splinePoints.push(new Laya.Point(current.x, current.y));
                            this.createSplineSegment();
                        }
                    } else splinePoints.push(new Laya.Point(current.x, current.y));
                    prev = current;
                }
                if (splinePoints.length > 1) this.createSplineSegment();
            }
        }, {
            key: "createSplineSegment",
            value: function createSplineSegment() {
                var splinePoints = s_points;
                var cnt = splinePoints.length;
                splinePoints.splice(0, 0, splinePoints[0]);
                splinePoints.push(splinePoints[cnt]);
                splinePoints.push(splinePoints[cnt]);
                cnt += 3;
                var seg = {};
                seg.type = fgui.CurveType.CRSpline;
                seg.ptStart = this._points.length;
                seg.ptCount = cnt;
                this._points = this._points.concat(splinePoints);
                seg.length = 0;
                for (var i = 1; i < cnt; i++) {
                    seg.length += fgui.ToolSet.distance(splinePoints[i - 1].x, splinePoints[i - 1].y, splinePoints[i].x, splinePoints[i].y);
                }
                this._fullLength += seg.length;
                this._segments.push(seg);
                splinePoints.length = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._segments.length = 0;
                this._points.length = 0;
            }
        }, {
            key: "getPointAt",
            value: function getPointAt(t, result) {
                if (!result) result = new Laya.Point(); else result.x = result.y = 0;
                t = fgui.ToolSet.clamp01(t);
                var cnt = this._segments.length;
                if (cnt == 0) {
                    return result;
                }
                var seg;
                if (t == 1) {
                    seg = this._segments[cnt - 1];
                    if (seg.type == fgui.CurveType.Straight) {
                        result.x = fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                        result.y = fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                        return result;
                    } else if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier) return this.onBezierCurve(seg.ptStart, seg.ptCount, t, result); else return this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                }
                var len = t * this._fullLength;
                for (var i = 0; i < cnt; i++) {
                    seg = this._segments[i];
                    len -= seg.length;
                    if (len < 0) {
                        t = 1 + len / seg.length;
                        if (seg.type == fgui.CurveType.Straight) {
                            result.x = fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                            result.y = fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                        } else if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier) result = this.onBezierCurve(seg.ptStart, seg.ptCount, t, result); else result = this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                        break;
                    }
                }
                return result;
            }
        }, {
            key: "getAnchorsInSegment",
            value: function getAnchorsInSegment(segmentIndex, points) {
                if (points == null) points = new Array();
                var seg = this._segments[segmentIndex];
                for (var i = 0; i < seg.ptCount; i++) {
                    points.push(new Laya.Point(this._points[seg.ptStart + i].x, this._points[seg.ptStart + i].y));
                }
                return points;
            }
        }, {
            key: "getPointsInSegment",
            value: function getPointsInSegment(segmentIndex, t0, t1, points, ts, pointDensity) {
                if (points == null) points = new Array();
                if (!pointDensity || isNaN(pointDensity)) pointDensity = .1;
                if (ts) ts.push(t0);
                var seg = this._segments[segmentIndex];
                if (seg.type == fgui.CurveType.Straight) {
                    points.push(new Laya.Point(fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
                    points.push(new Laya.Point(fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
                } else {
                    var func;
                    if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier) func = this.onBezierCurve; else func = this.onCRSplineCurve;
                    points.push(func.call(this, seg.ptStart, seg.ptCount, t0, new Laya.Point()));
                    var SmoothAmount = Math.min(seg.length * pointDensity, 50);
                    for (var j = 0; j <= SmoothAmount; j++) {
                        var t = j / SmoothAmount;
                        if (t > t0 && t < t1) {
                            points.push(func.call(this, seg.ptStart, seg.ptCount, t, new Laya.Point()));
                            if (ts) ts.push(t);
                        }
                    }
                    points.push(func.call(this, seg.ptStart, seg.ptCount, t1, new Laya.Point()));
                }
                if (ts) ts.push(t1);
                return points;
            }
        }, {
            key: "getAllPoints",
            value: function getAllPoints(points, ts, pointDensity) {
                if (points == null) points = new Array();
                if (!pointDensity || isNaN(pointDensity)) pointDensity = .1;
                var cnt = this._segments.length;
                for (var i = 0; i < cnt; i++) {
                    this.getPointsInSegment(i, 0, 1, points, ts, pointDensity);
                }
                return points;
            }
        }, {
            key: "onCRSplineCurve",
            value: function onCRSplineCurve(ptStart, ptCount, t, result) {
                var adjustedIndex = Math.floor(t * (ptCount - 4)) + ptStart;
                var p0x = this._points[adjustedIndex].x;
                var p0y = this._points[adjustedIndex].y;
                var p1x = this._points[adjustedIndex + 1].x;
                var p1y = this._points[adjustedIndex + 1].y;
                var p2x = this._points[adjustedIndex + 2].x;
                var p2y = this._points[adjustedIndex + 2].y;
                var p3x = this._points[adjustedIndex + 3].x;
                var p3y = this._points[adjustedIndex + 3].y;
                var adjustedT = t == 1 ? 1 : fgui.ToolSet.repeat(t * (ptCount - 4), 1);
                var t0 = ((-adjustedT + 2) * adjustedT - 1) * adjustedT * .5;
                var t1 = ((3 * adjustedT - 5) * adjustedT * adjustedT + 2) * .5;
                var t2 = ((-3 * adjustedT + 4) * adjustedT + 1) * adjustedT * .5;
                var t3 = (adjustedT - 1) * adjustedT * adjustedT * .5;
                result.x = p0x * t0 + p1x * t1 + p2x * t2 + p3x * t3;
                result.y = p0y * t0 + p1y * t1 + p2y * t2 + p3y * t3;
                return result;
            }
        }, {
            key: "onBezierCurve",
            value: function onBezierCurve(ptStart, ptCount, t, result) {
                var t2 = 1 - t;
                var p0x = this._points[ptStart].x;
                var p0y = this._points[ptStart].y;
                var p1x = this._points[ptStart + 1].x;
                var p1y = this._points[ptStart + 1].y;
                var cp0x = this._points[ptStart + 2].x;
                var cp0y = this._points[ptStart + 2].y;
                if (ptCount == 4) {
                    var cp1x = this._points[ptStart + 3].x;
                    var cp1y = this._points[ptStart + 3].y;
                    result.x = t2 * t2 * t2 * p0x + 3 * t2 * t2 * t * cp0x + 3 * t2 * t * t * cp1x + t * t * t * p1x;
                    result.y = t2 * t2 * t2 * p0y + 3 * t2 * t2 * t * cp0y + 3 * t2 * t * t * cp1y + t * t * t * p1y;
                } else {
                    result.x = t2 * t2 * p0x + 2 * t2 * t * cp0x + t * t * p1x;
                    result.y = t2 * t2 * p0y + 2 * t2 * t * cp0y + t * t * p1y;
                }
                return result;
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
        return GPath;
    }();
    fgui.GPath = GPath;
    var s_points = new Array();
})(fgui);

(function(fgui) {
    var CurveType;
    (function(CurveType) {
        CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
        CurveType[CurveType["Bezier"] = 1] = "Bezier";
        CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
        CurveType[CurveType["Straight"] = 3] = "Straight";
    })(CurveType = fgui.CurveType || (fgui.CurveType = {}));
    var GPathPoint = /* */ function() {
        function GPathPoint() {
            (0, _classCallCheck2.default)(this, GPathPoint);
            this.x = 0;
            this.y = 0;
            this.control1_x = 0;
            this.control1_y = 0;
            this.control2_x = 0;
            this.control2_y = 0;
            this.curveType = 0;
        }
        (0, _createClass2.default)(GPathPoint, [ {
            key: "clone",
            value: function clone() {
                var ret = new GPathPoint();
                ret.x = this.x;
                ret.y = this.y;
                ret.control1_x = this.control1_x;
                ret.control1_y = this.control1_y;
                ret.control2_x = this.control2_x;
                ret.control2_y = this.control2_y;
                ret.curveType = this.curveType;
                return ret;
            }
        } ], [ {
            key: "newPoint",
            value: function newPoint() {
                var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var curveType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var pt = new GPathPoint();
                pt.x = x;
                pt.y = y;
                pt.control1_x = 0;
                pt.control1_y = 0;
                pt.control2_x = 0;
                pt.control2_y = 0;
                pt.curveType = curveType;
                return pt;
            }
        }, {
            key: "newBezierPoint",
            value: function newBezierPoint() {
                var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var control1_x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var control1_y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var pt = new GPathPoint();
                pt.x = x;
                pt.y = y;
                pt.control1_x = control1_x;
                pt.control1_y = control1_y;
                pt.control2_x = 0;
                pt.control2_y = 0;
                pt.curveType = CurveType.Bezier;
                return pt;
            }
        }, {
            key: "newCubicBezierPoint",
            value: function newCubicBezierPoint() {
                var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var control1_x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var control1_y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var control2_x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var control2_y = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var pt = new GPathPoint();
                pt.x = x;
                pt.y = y;
                pt.control1_x = control1_x;
                pt.control1_y = control1_y;
                pt.control2_x = control2_x;
                pt.control2_y = control2_y;
                pt.curveType = CurveType.CubicBezier;
                return pt;
            }
        } ]);
        return GPathPoint;
    }();
    fgui.GPathPoint = GPathPoint;
})(fgui);

(function(fgui) {
    var GTween = /* */ function() {
        function GTween() {
            (0, _classCallCheck2.default)(this, GTween);
        }
        (0, _createClass2.default)(GTween, null, [ {
            key: "to",
            value: function to(start, end, duration) {
                return fgui.TweenManager.createTween()._to(start, end, duration);
            }
        }, {
            key: "to2",
            value: function to2(start, start2, end, end2, duration) {
                return fgui.TweenManager.createTween()._to2(start, start2, end, end2, duration);
            }
        }, {
            key: "to3",
            value: function to3(start, start2, start3, end, end2, end3, duration) {
                return fgui.TweenManager.createTween()._to3(start, start2, start3, end, end2, end3, duration);
            }
        }, {
            key: "to4",
            value: function to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
                return fgui.TweenManager.createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration);
            }
        }, {
            key: "toColor",
            value: function toColor(start, end, duration) {
                return fgui.TweenManager.createTween()._toColor(start, end, duration);
            }
        }, {
            key: "delayedCall",
            value: function delayedCall(delay) {
                return fgui.TweenManager.createTween().setDelay(delay);
            }
        }, {
            key: "shake",
            value: function shake(startX, startY, amplitude, duration) {
                return fgui.TweenManager.createTween()._shake(startX, startY, amplitude, duration);
            }
        }, {
            key: "isTweening",
            value: function isTweening(target, propType) {
                return fgui.TweenManager.isTweening(target, propType);
            }
        }, {
            key: "kill",
            value: function kill(target, complete, propType) {
                fgui.TweenManager.killTweens(target, complete, propType);
            }
        }, {
            key: "getTween",
            value: function getTween(target, propType) {
                return fgui.TweenManager.getTween(target, propType);
            }
        } ]);
        return GTween;
    }();
    GTween.catchCallbackExceptions = true;
    fgui.GTween = GTween;
})(fgui);

(function(fgui) {
    var GTweener = /* */ function() {
        function GTweener() {
            (0, _classCallCheck2.default)(this, GTweener);
            this._startValue = new fgui.TweenValue();
            this._endValue = new fgui.TweenValue();
            this._value = new fgui.TweenValue();
            this._deltaValue = new fgui.TweenValue();
            this._reset();
        }
        (0, _createClass2.default)(GTweener, [ {
            key: "setDelay",
            value: function setDelay(value) {
                this._delay = value;
                return this;
            }
        }, {
            key: "setDuration",
            value: function setDuration(value) {
                this._duration = value;
                return this;
            }
        }, {
            key: "setBreakpoint",
            value: function setBreakpoint(value) {
                this._breakpoint = value;
                return this;
            }
        }, {
            key: "setEase",
            value: function setEase(value) {
                this._easeType = value;
                return this;
            }
        }, {
            key: "setEasePeriod",
            value: function setEasePeriod(value) {
                this._easePeriod = value;
                return this;
            }
        }, {
            key: "setEaseOvershootOrAmplitude",
            value: function setEaseOvershootOrAmplitude(value) {
                this._easeOvershootOrAmplitude = value;
                return this;
            }
        }, {
            key: "setRepeat",
            value: function setRepeat(repeat) {
                var yoyo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                this._repeat = repeat;
                this._yoyo = yoyo;
                return this;
            }
        }, {
            key: "setTimeScale",
            value: function setTimeScale(value) {
                this._timeScale = value;
                return this;
            }
        }, {
            key: "setSnapping",
            value: function setSnapping(value) {
                this._snapping = value;
                return this;
            }
        }, {
            key: "setTarget",
            value: function setTarget(value, propType) {
                this._target = value;
                this._propType = propType;
                return this;
            }
        }, {
            key: "setPath",
            value: function setPath(value) {
                this._path = value;
                return this;
            }
        }, {
            key: "setUserData",
            value: function setUserData(value) {
                this._userData = value;
                return this;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate(callback, caller) {
                this._onUpdate = callback;
                this._onUpdateCaller = caller;
                return this;
            }
        }, {
            key: "onStart",
            value: function onStart(callback, caller) {
                this._onStart = callback;
                this._onStartCaller = caller;
                return this;
            }
        }, {
            key: "onComplete",
            value: function onComplete(callback, caller) {
                this._onComplete = callback;
                this._onCompleteCaller = caller;
                return this;
            }
        }, {
            key: "setPaused",
            value: function setPaused(paused) {
                this._paused = paused;
                return this;
            }
        }, {
            key: "seek",
            value: function seek(time) {
                if (this._killed) return;
                this._elapsedTime = time;
                if (this._elapsedTime < this._delay) {
                    if (this._started) this._elapsedTime = this._delay; else return;
                }
                this.update();
            }
        }, {
            key: "kill",
            value: function kill(complete) {
                if (this._killed) return;
                if (complete) {
                    if (this._ended == 0) {
                        if (this._breakpoint >= 0) this._elapsedTime = this._delay + this._breakpoint; else if (this._repeat >= 0) this._elapsedTime = this._delay + this._duration * (this._repeat + 1); else this._elapsedTime = this._delay + this._duration * 2;
                        this.update();
                    }
                    this.callCompleteCallback();
                }
                this._killed = true;
            }
        }, {
            key: "_to",
            value: function _to(start, end, duration) {
                this._valueSize = 1;
                this._startValue.x = start;
                this._endValue.x = end;
                this._value.x = start;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_to2",
            value: function _to2(start, start2, end, end2, duration) {
                this._valueSize = 2;
                this._startValue.x = start;
                this._endValue.x = end;
                this._startValue.y = start2;
                this._endValue.y = end2;
                this._value.x = start;
                this._value.y = start2;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_to3",
            value: function _to3(start, start2, start3, end, end2, end3, duration) {
                this._valueSize = 3;
                this._startValue.x = start;
                this._endValue.x = end;
                this._startValue.y = start2;
                this._endValue.y = end2;
                this._startValue.z = start3;
                this._endValue.z = end3;
                this._value.x = start;
                this._value.y = start2;
                this._value.z = start3;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_to4",
            value: function _to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
                this._valueSize = 4;
                this._startValue.x = start;
                this._endValue.x = end;
                this._startValue.y = start2;
                this._endValue.y = end2;
                this._startValue.z = start3;
                this._endValue.z = end3;
                this._startValue.w = start4;
                this._endValue.w = end4;
                this._value.x = start;
                this._value.y = start2;
                this._value.z = start3;
                this._value.w = start4;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_toColor",
            value: function _toColor(start, end, duration) {
                this._valueSize = 4;
                this._startValue.color = start;
                this._endValue.color = end;
                this._value.color = start;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_shake",
            value: function _shake(startX, startY, amplitude, duration) {
                this._valueSize = 5;
                this._startValue.x = startX;
                this._startValue.y = startY;
                this._startValue.w = amplitude;
                this._duration = duration;
                return this;
            }
        }, {
            key: "_init",
            value: function _init() {
                this._delay = 0;
                this._duration = 0;
                this._breakpoint = -1;
                this._easeType = fgui.EaseType.QuadOut;
                this._timeScale = 1;
                this._easePeriod = 0;
                this._easeOvershootOrAmplitude = 1.70158;
                this._snapping = false;
                this._repeat = 0;
                this._yoyo = false;
                this._valueSize = 0;
                this._started = false;
                this._paused = false;
                this._killed = false;
                this._elapsedTime = 0;
                this._normalizedTime = 0;
                this._ended = 0;
            }
        }, {
            key: "_reset",
            value: function _reset() {
                this._target = null;
                this._propType = null;
                this._userData = null;
                this._path = null;
                this._onStart = this._onUpdate = this._onComplete = null;
                this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
            }
        }, {
            key: "_update",
            value: function _update(dt) {
                if (this._timeScale != 1) dt *= this._timeScale;
                if (dt == 0) return;
                if (this._ended != 0) {
                    this.callCompleteCallback();
                    this._killed = true;
                    return;
                }
                this._elapsedTime += dt;
                this.update();
                if (this._ended != 0) {
                    if (!this._killed) {
                        this.callCompleteCallback();
                        this._killed = true;
                    }
                }
            }
        }, {
            key: "update",
            value: function update() {
                this._ended = 0;
                if (this._valueSize == 0) {
                    if (this._elapsedTime >= this._delay + this._duration) this._ended = 1;
                    return;
                }
                if (!this._started) {
                    if (this._elapsedTime < this._delay) return;
                    this._started = true;
                    this.callStartCallback();
                    if (this._killed) return;
                }
                var reversed = false;
                var tt = this._elapsedTime - this._delay;
                if (this._breakpoint >= 0 && tt >= this._breakpoint) {
                    tt = this._breakpoint;
                    this._ended = 2;
                }
                if (this._repeat != 0) {
                    var round = Math.floor(tt / this._duration);
                    tt -= this._duration * round;
                    if (this._yoyo) reversed = round % 2 == 1;
                    if (this._repeat > 0 && this._repeat - round < 0) {
                        if (this._yoyo) reversed = this._repeat % 2 == 1;
                        tt = this._duration;
                        this._ended = 1;
                    }
                } else if (tt >= this._duration) {
                    tt = this._duration;
                    this._ended = 1;
                }
                this._normalizedTime = fgui.evaluateEase(this._easeType, reversed ? this._duration - tt : tt, this._duration, this._easeOvershootOrAmplitude, this._easePeriod);
                this._value.setZero();
                this._deltaValue.setZero();
                if (this._valueSize == 5) {
                    if (this._ended == 0) {
                        var r = this._startValue.w * (1 - this._normalizedTime);
                        var rx = r * (Math.random() > .5 ? 1 : -1);
                        var ry = r * (Math.random() > .5 ? 1 : -1);
                        this._deltaValue.x = rx;
                        this._deltaValue.y = ry;
                        this._value.x = this._startValue.x + rx;
                        this._value.y = this._startValue.y + ry;
                    } else {
                        this._value.x = this._startValue.x;
                        this._value.y = this._startValue.y;
                    }
                } else if (this._path) {
                    var pt = s_vec2;
                    this._path.getPointAt(this._normalizedTime, pt);
                    if (this._snapping) {
                        pt.x = Math.round(pt.x);
                        pt.y = Math.round(pt.y);
                    }
                    this._deltaValue.x = pt.x - this._value.x;
                    this._deltaValue.y = pt.y - this._value.y;
                    this._value.x = pt.x;
                    this._value.y = pt.y;
                } else {
                    for (var i = 0; i < this._valueSize; i++) {
                        var n1 = this._startValue.getField(i);
                        var n2 = this._endValue.getField(i);
                        var f = n1 + (n2 - n1) * this._normalizedTime;
                        if (this._snapping) f = Math.round(f);
                        this._deltaValue.setField(i, f - this._value.getField(i));
                        this._value.setField(i, f);
                    }
                }
                if (this._target && this._propType) {
                    if (this._propType instanceof Function) {
                        switch (this._valueSize) {
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
                            break;
                        }
                    } else {
                        if (this._valueSize == 5) this._target[this._propType] = this._value.color; else this._target[this._propType] = this._value.x;
                    }
                }
                this.callUpdateCallback();
            }
        }, {
            key: "callStartCallback",
            value: function callStartCallback() {
                if (this._onStart != null) {
                    try {
                        this._onStart.call(this._onStartCaller, this);
                    } catch (err) {
                        console.log("FairyGUI: error in start callback > " + err);
                    }
                }
            }
        }, {
            key: "callUpdateCallback",
            value: function callUpdateCallback() {
                if (this._onUpdate != null) {
                    try {
                        this._onUpdate.call(this._onUpdateCaller, this);
                    } catch (err) {
                        console.log("FairyGUI: error in update callback > " + err);
                    }
                }
            }
        }, {
            key: "callCompleteCallback",
            value: function callCompleteCallback() {
                if (this._onComplete != null) {
                    try {
                        this._onComplete.call(this._onCompleteCaller, this);
                    } catch (err) {
                        console.log("FairyGUI: error in complete callback > " + err);
                    }
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
                return this._ended != 0;
            }
        }, {
            key: "allCompleted",
            get: function get() {
                return this._ended == 1;
            }
        } ]);
        return GTweener;
    }();
    fgui.GTweener = GTweener;
    var s_vec2 = new Laya.Point();
})(fgui);

(function(fgui) {
    var TweenManager = /* */ function() {
        function TweenManager() {
            (0, _classCallCheck2.default)(this, TweenManager);
        }
        (0, _createClass2.default)(TweenManager, null, [ {
            key: "createTween",
            value: function createTween() {
                if (!_inited) {
                    Laya.timer.frameLoop(1, null, TweenManager.update);
                    _inited = true;
                }
                var tweener;
                var cnt = _tweenerPool.length;
                if (cnt > 0) {
                    tweener = _tweenerPool.pop();
                } else tweener = new fgui.GTweener();
                tweener._init();
                _activeTweens[_totalActiveTweens++] = tweener;
                return tweener;
            }
        }, {
            key: "isTweening",
            value: function isTweening(target, propType) {
                if (target == null) return false;
                var anyType = !propType;
                for (var i = 0; i < _totalActiveTweens; i++) {
                    var tweener = _activeTweens[i];
                    if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) return true;
                }
                return false;
            }
        }, {
            key: "killTweens",
            value: function killTweens(target, completed, propType) {
                if (target == null) return false;
                var flag = false;
                var cnt = _totalActiveTweens;
                var anyType = !propType;
                for (var i = 0; i < cnt; i++) {
                    var tweener = _activeTweens[i];
                    if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) {
                        tweener.kill(completed);
                        flag = true;
                    }
                }
                return flag;
            }
        }, {
            key: "getTween",
            value: function getTween(target, propType) {
                if (target == null) return null;
                var cnt = _totalActiveTweens;
                var anyType = !propType;
                for (var i = 0; i < cnt; i++) {
                    var tweener = _activeTweens[i];
                    if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) {
                        return tweener;
                    }
                }
                return null;
            }
        }, {
            key: "update",
            value: function update() {
                var dt = Laya.timer.delta / 1e3;
                var cnt = _totalActiveTweens;
                var freePosStart = -1;
                for (var i = 0; i < cnt; i++) {
                    var tweener = _activeTweens[i];
                    if (tweener == null) {
                        if (freePosStart == -1) freePosStart = i;
                    } else if (tweener._killed) {
                        tweener._reset();
                        _tweenerPool.push(tweener);
                        _activeTweens[i] = null;
                        if (freePosStart == -1) freePosStart = i;
                    } else {
                        if (tweener._target instanceof fgui.GObject && tweener._target.isDisposed) tweener._killed = true; else if (!tweener._paused) tweener._update(dt);
                        if (freePosStart != -1) {
                            _activeTweens[freePosStart] = tweener;
                            _activeTweens[i] = null;
                            freePosStart++;
                        }
                    }
                }
                if (freePosStart >= 0) {
                    if (_totalActiveTweens != cnt) {
                        var j = cnt;
                        cnt = _totalActiveTweens - cnt;
                        for (i = 0; i < cnt; i++) {
                            _activeTweens[freePosStart++] = _activeTweens[j++];
                        }
                    }
                    _totalActiveTweens = freePosStart;
                }
            }
        } ]);
        return TweenManager;
    }();
    fgui.TweenManager = TweenManager;
    var _activeTweens = [];
    var _tweenerPool = [];
    var _totalActiveTweens = 0;
    var _inited = false;
})(fgui);

(function(fgui) {
    var TweenValue = /* */ function() {
        function TweenValue() {
            (0, _classCallCheck2.default)(this, TweenValue);
            this.x = this.y = this.z = this.w = 0;
        }
        (0, _createClass2.default)(TweenValue, [ {
            key: "getField",
            value: function getField(index) {
                switch (index) {
                  case 0:
                    return this.x;

                  case 1:
                    return this.y;

                  case 2:
                    return this.z;

                  case 3:
                    return this.w;

                  default:
                    throw new Error("Index out of bounds: " + index);
                }
            }
        }, {
            key: "setField",
            value: function setField(index, value) {
                switch (index) {
                  case 0:
                    this.x = value;
                    break;

                  case 1:
                    this.y = value;
                    break;

                  case 2:
                    this.z = value;
                    break;

                  case 3:
                    this.w = value;
                    break;

                  default:
                    throw new Error("Index out of bounds: " + index);
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
            set: function set(value) {
                this.x = (value & 16711680) >> 16;
                this.y = (value & 65280) >> 8;
                this.z = value & 255;
                this.w = (value & 4278190080) >> 24;
            }
        } ]);
        return TweenValue;
    }();
    fgui.TweenValue = TweenValue;
})(fgui);

(function(fgui) {
    var ByteBuffer = /* */ function(_Laya$Byte) {
        (0, _inherits2.default)(ByteBuffer, _Laya$Byte);
        var _super38 = _createSuper(ByteBuffer);
        function ByteBuffer(data, offset, length) {
            var _this25;
            (0, _classCallCheck2.default)(this, ByteBuffer);
            offset = offset || 0;
            if (length == null || length == -1) length = data.byteLength - offset;
            if (offset == 0 && length == data.byteLength) _this25 = _super38.call(this, data); else {
                _this25 = _super38.call(this);
                _this25._u8d_ = new Uint8Array(data, offset, length);
                _this25._d_ = new DataView(_this25._u8d_.buffer, offset, length);
                _this25._length = length;
            }
            _this25.endian = Laya.Byte.BIG_ENDIAN;
            return (0, _possibleConstructorReturn2.default)(_this25);
        }
        (0, _createClass2.default)(ByteBuffer, [ {
            key: "skip",
            value: function skip(count) {
                this.pos += count;
            }
        }, {
            key: "readBool",
            value: function readBool() {
                return this.getUint8() == 1;
            }
        }, {
            key: "readS",
            value: function readS() {
                var index = this.getUint16();
                if (index == 65534) return null; else if (index == 65533) return ""; else return this.stringTable[index];
            }
        }, {
            key: "readSArray",
            value: function readSArray(cnt) {
                var ret = new Array(cnt);
                for (var i = 0; i < cnt; i++) {
                    ret[i] = this.readS();
                }
                return ret;
            }
        }, {
            key: "writeS",
            value: function writeS(value) {
                var index = this.getUint16();
                if (index != 65534 && index != 65533) this.stringTable[index] = value;
            }
        }, {
            key: "readColor",
            value: function readColor(hasAlpha) {
                var r = this.getUint8();
                var g = this.getUint8();
                var b = this.getUint8();
                var a = this.getUint8();
                return (hasAlpha ? a << 24 : 0) + (r << 16) + (g << 8) + b;
            }
        }, {
            key: "readColorS",
            value: function readColorS(hasAlpha) {
                var r = this.getUint8();
                var g = this.getUint8();
                var b = this.getUint8();
                var a = this.getUint8();
                if (hasAlpha && a != 255) return "rgba(" + r + "," + g + "," + b + "," + a / 255 + ")"; else {
                    var sr = r.toString(16);
                    var sg = g.toString(16);
                    var sb = b.toString(16);
                    if (sr.length == 1) sr = "0" + sr;
                    if (sg.length == 1) sg = "0" + sg;
                    if (sb.length == 1) sb = "0" + sb;
                    return "#" + sr + sg + sb;
                }
            }
        }, {
            key: "readChar",
            value: function readChar() {
                var i = this.getUint16();
                return String.fromCharCode(i);
            }
        }, {
            key: "readBuffer",
            value: function readBuffer() {
                var count = this.getUint32();
                var ba = new ByteBuffer(this.buffer, this._pos_, count);
                this.pos += count;
                ba.stringTable = this.stringTable;
                ba.version = this.version;
                return ba;
            }
        }, {
            key: "seek",
            value: function seek(indexTablePos, blockIndex) {
                var tmp = this._pos_;
                this.pos = indexTablePos;
                var segCount = this.getUint8();
                if (blockIndex < segCount) {
                    var useShort = this.getUint8() == 1;
                    var newPos;
                    if (useShort) {
                        this.pos += 2 * blockIndex;
                        newPos = this.getUint16();
                    } else {
                        this.pos += 4 * blockIndex;
                        newPos = this.getUint32();
                    }
                    if (newPos > 0) {
                        this.pos = indexTablePos + newPos;
                        return true;
                    } else {
                        this.pos = tmp;
                        return false;
                    }
                } else {
                    this.pos = tmp;
                    return false;
                }
            }
        } ]);
        return ByteBuffer;
    }(Laya.Byte);
    fgui.ByteBuffer = ByteBuffer;
})(fgui);

(function(fgui) {
    var _func = Laya.HitArea["_isHitGraphic"];
    var ChildHitArea = /* */ function(_Laya$HitArea) {
        (0, _inherits2.default)(ChildHitArea, _Laya$HitArea);
        var _super39 = _createSuper(ChildHitArea);
        function ChildHitArea(child, reversed) {
            var _this26;
            (0, _classCallCheck2.default)(this, ChildHitArea);
            _this26 = _super39.call(this);
            _this26._child = child;
            _this26._reversed = reversed;
            if (_this26._reversed) _this26.unHit = child.hitArea.hit; else _this26.hit = child.hitArea.hit;
            return _this26;
        }
        (0, _createClass2.default)(ChildHitArea, [ {
            key: "contains",
            value: function contains(x, y) {
                var tPos;
                tPos = Laya.Point.TEMP;
                tPos.setTo(0, 0);
                tPos = this._child.toParentPoint(tPos);
                if (this._reversed) return !_func(x - tPos.x, y - tPos.y, this.unHit); else return _func(x - tPos.x, y - tPos.y, this.hit);
            }
        } ]);
        return ChildHitArea;
    }(Laya.HitArea);
    fgui.ChildHitArea = ChildHitArea;
})(fgui);

(function(fgui) {
    var ColorMatrix = /* */ function() {
        function ColorMatrix(p_brightness, p_contrast, p_saturation, p_hue) {
            (0, _classCallCheck2.default)(this, ColorMatrix);
            this.matrix = new Array(LENGTH);
            this.reset();
            if (p_brightness !== undefined || p_contrast !== undefined || p_saturation !== undefined || p_hue !== undefined) this.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
        }
        (0, _createClass2.default)(ColorMatrix, [ {
            key: "reset",
            value: function reset() {
                for (var i = 0; i < LENGTH; i++) {
                    this.matrix[i] = IDENTITY_MATRIX[i];
                }
            }
        }, {
            key: "invert",
            value: function invert() {
                this.multiplyMatrix([ -1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustColor",
            value: function adjustColor(p_brightness, p_contrast, p_saturation, p_hue) {
                this.adjustHue(p_hue || 0);
                this.adjustContrast(p_contrast || 0);
                this.adjustBrightness(p_brightness || 0);
                this.adjustSaturation(p_saturation || 0);
            }
        }, {
            key: "adjustBrightness",
            value: function adjustBrightness(p_val) {
                p_val = this.cleanValue(p_val, 1) * 255;
                this.multiplyMatrix([ 1, 0, 0, 0, p_val, 0, 1, 0, 0, p_val, 0, 0, 1, 0, p_val, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustContrast",
            value: function adjustContrast(p_val) {
                p_val = this.cleanValue(p_val, 1);
                var s = p_val + 1;
                var o = 128 * (1 - s);
                this.multiplyMatrix([ s, 0, 0, 0, o, 0, s, 0, 0, o, 0, 0, s, 0, o, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustSaturation",
            value: function adjustSaturation(p_val) {
                p_val = this.cleanValue(p_val, 1);
                p_val += 1;
                var invSat = 1 - p_val;
                var invLumR = invSat * LUMA_R;
                var invLumG = invSat * LUMA_G;
                var invLumB = invSat * LUMA_B;
                this.multiplyMatrix([ invLumR + p_val, invLumG, invLumB, 0, 0, invLumR, invLumG + p_val, invLumB, 0, 0, invLumR, invLumG, invLumB + p_val, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "adjustHue",
            value: function adjustHue(p_val) {
                p_val = this.cleanValue(p_val, 1);
                p_val *= Math.PI;
                var cos = Math.cos(p_val);
                var sin = Math.sin(p_val);
                this.multiplyMatrix([ LUMA_R + cos * (1 - LUMA_R) + sin * -LUMA_R, LUMA_G + cos * -LUMA_G + sin * -LUMA_G, LUMA_B + cos * -LUMA_B + sin * (1 - LUMA_B), 0, 0, LUMA_R + cos * -LUMA_R + sin * .143, LUMA_G + cos * (1 - LUMA_G) + sin * .14, LUMA_B + cos * -LUMA_B + sin * -.283, 0, 0, LUMA_R + cos * -LUMA_R + sin * -(1 - LUMA_R), LUMA_G + cos * -LUMA_G + sin * LUMA_G, LUMA_B + cos * (1 - LUMA_B) + sin * LUMA_B, 0, 0, 0, 0, 0, 1, 0 ]);
            }
        }, {
            key: "concat",
            value: function concat(p_matrix) {
                if (p_matrix.length != LENGTH) {
                    return;
                }
                this.multiplyMatrix(p_matrix);
            }
        }, {
            key: "clone",
            value: function clone() {
                var result = new ColorMatrix();
                result.copyMatrix(this.matrix);
                return result;
            }
        }, {
            key: "copyMatrix",
            value: function copyMatrix(p_matrix) {
                var l = LENGTH;
                for (var i = 0; i < l; i++) {
                    this.matrix[i] = p_matrix[i];
                }
            }
        }, {
            key: "multiplyMatrix",
            value: function multiplyMatrix(p_matrix) {
                var col = [];
                var i = 0;
                for (var y = 0; y < 4; ++y) {
                    for (var x = 0; x < 5; ++x) {
                        col[i + x] = p_matrix[i] * this.matrix[x] + p_matrix[i + 1] * this.matrix[x + 5] + p_matrix[i + 2] * this.matrix[x + 10] + p_matrix[i + 3] * this.matrix[x + 15] + (x == 4 ? p_matrix[i + 4] : 0);
                    }
                    i += 5;
                }
                this.copyMatrix(col);
            }
        }, {
            key: "cleanValue",
            value: function cleanValue(p_val, p_limit) {
                return Math.min(p_limit, Math.max(-p_limit, p_val));
            }
        } ]);
        return ColorMatrix;
    }();
    fgui.ColorMatrix = ColorMatrix;
    var IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ];
    var LENGTH = IDENTITY_MATRIX.length;
    var LUMA_R = .299;
    var LUMA_G = .587;
    var LUMA_B = .114;
})(fgui);

(function(fgui) {
    var PixelHitTest = /* */ function(_Laya$HitArea2) {
        (0, _inherits2.default)(PixelHitTest, _Laya$HitArea2);
        var _super40 = _createSuper(PixelHitTest);
        function PixelHitTest(data, offsetX, offsetY) {
            var _this27;
            (0, _classCallCheck2.default)(this, PixelHitTest);
            _this27 = _super40.call(this);
            _this27._data = data;
            _this27.offsetX = offsetX;
            _this27.offsetY = offsetY;
            _this27.scaleX = 1;
            _this27.scaleY = 1;
            return _this27;
        }
        (0, _createClass2.default)(PixelHitTest, [ {
            key: "contains",
            value: function contains(x, y) {
                x = Math.floor((x / this.scaleX - this.offsetX) * this._data.scale);
                y = Math.floor((y / this.scaleY - this.offsetY) * this._data.scale);
                if (x < 0 || y < 0 || x >= this._data.pixelWidth) return false;
                var pos = y * this._data.pixelWidth + x;
                var pos2 = Math.floor(pos / 8);
                var pos3 = pos % 8;
                if (pos2 >= 0 && pos2 < this._data.pixels.length) return (this._data.pixels[pos2] >> pos3 & 1) == 1; else return false;
            }
        } ]);
        return PixelHitTest;
    }(Laya.HitArea);
    fgui.PixelHitTest = PixelHitTest;
    var PixelHitTestData = /* */ function() {
        function PixelHitTestData() {
            (0, _classCallCheck2.default)(this, PixelHitTestData);
        }
        (0, _createClass2.default)(PixelHitTestData, [ {
            key: "load",
            value: function load(ba) {
                ba.getInt32();
                this.pixelWidth = ba.getInt32();
                this.scale = 1 / ba.readByte();
                var len = ba.getInt32();
                this.pixels = [];
                for (var i = 0; i < len; i++) {
                    var j = ba.readByte();
                    if (j < 0) j += 256;
                    this.pixels[i] = j;
                }
            }
        } ]);
        return PixelHitTestData;
    }();
    fgui.PixelHitTestData = PixelHitTestData;
})(fgui);

(function(fgui) {
    var UBBParser = /* */ function() {
        function UBBParser() {
            (0, _classCallCheck2.default)(this, UBBParser);
            this._readPos = 0;
            this.defaultImgWidth = 0;
            this.defaultImgHeight = 0;
            this._handlers = {};
            this._handlers["url"] = this.onTag_URL;
            this._handlers["img"] = this.onTag_IMG;
            this._handlers["b"] = this.onTag_B;
            this._handlers["i"] = this.onTag_I;
            this._handlers["u"] = this.onTag_U;
            this._handlers["sup"] = this.onTag_Simple;
            this._handlers["sub"] = this.onTag_Simple;
            this._handlers["color"] = this.onTag_COLOR;
            this._handlers["font"] = this.onTag_FONT;
            this._handlers["size"] = this.onTag_SIZE;
        }
        (0, _createClass2.default)(UBBParser, [ {
            key: "onTag_URL",
            value: function onTag_URL(tagName, end, attr) {
                if (!end) {
                    if (attr != null) return '<a href="' + attr + '" target="_blank">'; else {
                        var href = this.getTagText();
                        return '<a href="' + href + '" target="_blank">';
                    }
                } else return "</a>";
            }
        }, {
            key: "onTag_IMG",
            value: function onTag_IMG(tagName, end, attr) {
                if (!end) {
                    var src = this.getTagText(true);
                    if (!src) return null;
                    if (this.defaultImgWidth) return '<img src="' + src + '" width="' + this.defaultImgWidth + '" height="' + this.defaultImgHeight + '"/>'; else return '<img src="' + src + '"/>';
                } else return null;
            }
        }, {
            key: "onTag_B",
            value: function onTag_B(tagName, end, attr) {
                return end ? "</span>" : "<span style='font-weight:bold'>";
            }
        }, {
            key: "onTag_I",
            value: function onTag_I(tagName, end, attr) {
                return end ? "</span>" : "<span style='font-style:italic'>";
            }
        }, {
            key: "onTag_U",
            value: function onTag_U(tagName, end, attr) {
                return end ? "</span>" : "<span style='text-decoration:underline'>";
            }
        }, {
            key: "onTag_Simple",
            value: function onTag_Simple(tagName, end, attr) {
                return end ? "</" + tagName + ">" : "<" + tagName + ">";
            }
        }, {
            key: "onTag_COLOR",
            value: function onTag_COLOR(tagName, end, attr) {
                if (!end) {
                    this.lastColor = attr;
                    return '<span style="color:' + attr + '">';
                } else return "</span>";
            }
        }, {
            key: "onTag_FONT",
            value: function onTag_FONT(tagName, end, attr) {
                if (!end) return '<span style="font-family:' + attr + '">'; else return "</span>";
            }
        }, {
            key: "onTag_SIZE",
            value: function onTag_SIZE(tagName, end, attr) {
                if (!end) {
                    this.lastSize = attr;
                    return '<span style="font-size:' + attr + '">';
                } else return "</span>";
            }
        }, {
            key: "getTagText",
            value: function getTagText(remove) {
                var pos1 = this._readPos;
                var pos2;
                var result = "";
                while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                    if (this._text.charCodeAt(pos2 - 1) == 92) {
                        result += this._text.substring(pos1, pos2 - 1);
                        result += "[";
                        pos1 = pos2 + 1;
                    } else {
                        result += this._text.substring(pos1, pos2);
                        break;
                    }
                }
                if (pos2 == -1) return null;
                if (remove) this._readPos = pos2;
                return result;
            }
        }, {
            key: "parse",
            value: function parse(text, remove) {
                this._text = text;
                this.lastColor = null;
                this.lastSize = null;
                var pos1 = 0, pos2, pos3;
                var end;
                var tag, attr;
                var repl;
                var func;
                var result = "";
                while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                    if (pos2 > 0 && this._text.charCodeAt(pos2 - 1) == 92) {
                        result += this._text.substring(pos1, pos2 - 1);
                        result += "[";
                        pos1 = pos2 + 1;
                        continue;
                    }
                    result += this._text.substring(pos1, pos2);
                    pos1 = pos2;
                    pos2 = this._text.indexOf("]", pos1);
                    if (pos2 == -1) break;
                    end = this._text.charAt(pos1 + 1) == "/";
                    tag = this._text.substring(end ? pos1 + 2 : pos1 + 1, pos2);
                    this._readPos = pos2 + 1;
                    attr = null;
                    repl = null;
                    pos3 = tag.indexOf("=");
                    if (pos3 != -1) {
                        attr = tag.substring(pos3 + 1);
                        tag = tag.substring(0, pos3);
                    }
                    tag = tag.toLowerCase();
                    func = this._handlers[tag];
                    if (func != null) {
                        if (!remove) {
                            repl = func.call(this, tag, end, attr);
                            if (repl != null) result += repl;
                        }
                    } else result += this._text.substring(pos1, this._readPos);
                    pos1 = this._readPos;
                }
                if (pos1 < this._text.length) result += this._text.substr(pos1);
                this._text = null;
                return result;
            }
        } ]);
        return UBBParser;
    }();
    UBBParser.inst = new UBBParser();
    fgui.UBBParser = UBBParser;
})(fgui);

(function(fgui) {
    var ToolSet = /* */ function() {
        function ToolSet() {
            (0, _classCallCheck2.default)(this, ToolSet);
        }
        (0, _createClass2.default)(ToolSet, null, [ {
            key: "startsWith",
            value: function startsWith(source, str, ignoreCase) {
                if (!source) return false; else if (source.length < str.length) return false; else {
                    source = source.substring(0, str.length);
                    if (!ignoreCase) return source == str; else return source.toLowerCase() == str.toLowerCase();
                }
            }
        }, {
            key: "endsWith",
            value: function endsWith(source, str, ignoreCase) {
                if (!source) return false; else if (source.length < str.length) return false; else {
                    source = source.substring(source.length - str.length);
                    if (!ignoreCase) return source == str; else return source.toLowerCase() == str.toLowerCase();
                }
            }
        }, {
            key: "trimRight",
            value: function trimRight(targetString) {
                var tempChar = "";
                for (var i = targetString.length - 1; i >= 0; i--) {
                    tempChar = targetString.charAt(i);
                    if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                        break;
                    }
                }
                return targetString.substring(0, i + 1);
            }
        }, {
            key: "convertToHtmlColor",
            value: function convertToHtmlColor(argb, hasAlpha) {
                var alpha;
                if (hasAlpha) alpha = (argb >> 24 & 255).toString(16); else alpha = "";
                var red = (argb >> 16 & 255).toString(16);
                var green = (argb >> 8 & 255).toString(16);
                var blue = (argb & 255).toString(16);
                if (alpha.length == 1) alpha = "0" + alpha;
                if (red.length == 1) red = "0" + red;
                if (green.length == 1) green = "0" + green;
                if (blue.length == 1) blue = "0" + blue;
                return "#" + alpha + red + green + blue;
            }
        }, {
            key: "convertFromHtmlColor",
            value: function convertFromHtmlColor(str, hasAlpha) {
                if (str.length < 1) return 0;
                if (str.charAt(0) == "#") str = str.substr(1);
                if (str.length == 8) return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16); else if (hasAlpha) return 4278190080 + parseInt(str, 16); else return parseInt(str, 16);
            }
        }, {
            key: "displayObjectToGObject",
            value: function displayObjectToGObject(obj) {
                while (obj && !(obj instanceof Laya.Stage)) {
                    if (obj["$owner"]) return obj["$owner"];
                    obj = obj.parent;
                }
                return null;
            }
        }, {
            key: "encodeHTML",
            value: function encodeHTML(str) {
                if (!str) return ""; else return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            }
        }, {
            key: "clamp",
            value: function clamp(value, min, max) {
                if (value < min) value = min; else if (value > max) value = max;
                return value;
            }
        }, {
            key: "clamp01",
            value: function clamp01(value) {
                if (isNaN(value)) value = 0; else if (value > 1) value = 1; else if (value < 0) value = 0;
                return value;
            }
        }, {
            key: "lerp",
            value: function lerp(start, end, percent) {
                return start + percent * (end - start);
            }
        }, {
            key: "repeat",
            value: function repeat(t, length) {
                return t - Math.floor(t / length) * length;
            }
        }, {
            key: "distance",
            value: function distance(x1, y1, x2, y2) {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }
        }, {
            key: "setColorFilter",
            value: function setColorFilter(obj, color) {
                var filter = obj.$_colorFilter_;
                var filters = obj.filters;
                var toApplyColor;
                var toApplyGray;
                var tp = (0, _typeof2.default)(color);
                if (tp == "boolean") {
                    toApplyColor = filter ? filter.$_color_ : null;
                    toApplyGray = color;
                } else {
                    if (tp == "string") {
                        var arr = Laya.ColorUtils.create(color).arrColor;
                        if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) color = null; else {
                            color = [ arr[0], 0, 0, 0, 0, 0, arr[1], 0, 0, 0, 0, 0, arr[2], 0, 0, 0, 0, 0, 1, 0 ];
                        }
                    }
                    toApplyColor = color;
                    toApplyGray = filter ? filter.$_grayed_ : false;
                }
                if (!toApplyColor && toApplyColor != 0 && !toApplyGray) {
                    if (filters && filter) {
                        var i = filters.indexOf(filter);
                        if (i != -1) {
                            filters.splice(i, 1);
                            if (filters.length > 0) obj.filters = filters; else obj.filters = null;
                        }
                    }
                    return;
                }
                if (!filter) {
                    filter = new Laya.ColorFilter();
                    obj.$_colorFilter_ = filter;
                }
                if (!filters) filters = [ filter ]; else {
                    var _i = filters.indexOf(filter);
                    if (_i == -1) filters.push(filter);
                }
                obj.filters = filters;
                filter.$_color_ = toApplyColor;
                filter.$_grayed_ = toApplyGray;
                filter.reset();
                if (toApplyGray) filter.gray(); else if (toApplyColor.length == 20) filter.setByMatrix(toApplyColor); else filter.setByMatrix(getColorMatrix(toApplyColor[0], toApplyColor[1], toApplyColor[2], toApplyColor[3]));
            }
        } ]);
        return ToolSet;
    }();
    fgui.ToolSet = ToolSet;
    var helper = new fgui.ColorMatrix();
    function getColorMatrix(p_brightness, p_contrast, p_saturation, p_hue, result) {
        result = result || new Array(fgui.ColorMatrix.length);
        helper.reset();
        helper.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
        helper.matrix.forEach(function(e, i) {
            return result[i] = e;
        });
        return result;
    }
})(fgui);