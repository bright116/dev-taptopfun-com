var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(require("../../@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("../../@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("../../@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

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

window.zs = window.zs || {}, window.zs.exporter = window.zs.exporter || {}, function (t) {
    "use strict";
    var e, i = zs.fgui.AlignType;
    !function (t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
    }(e = e || (e = {}));
    var s = /* */ function () {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [{
            key: "isSameDay",
            value: function isSameDay(t) {
                return new Date(t).toDateString() === new Date().toDateString();
            }
        }, {
            key: "getStorageSync",
            value: function getStorageSync(t) {
                return this.cache[t];
            }
        }, {
            key: "setStorageSync",
            value: function setStorageSync(t, e) {
                this.cache[t] = e;
            }
        }, {
            key: "getCache",
            value: function getCache(t, e) {
                if (e) {
                    var _i = this.getStorageSync(t + "_time");
                    return null == _i || Date.now() - Number(_i) < e ? this.getStorageSync(t) : null;
                }
                return this.getStorageSync(t);
            }
        }, {
            key: "setCache",
            value: function setCache(t, e) {
                this.setStorageSync(t, e), this.setStorageSync(t + "_time", Date.now());
            }
        }, {
            key: "getCacheNewDay",
            value: function getCacheNewDay(t, e) {
                if (e) {
                    var _e = this.getStorageSync(t + "_time");
                    return null != _e && this.isSameDay(_e) ? null : this.getStorageSync(t);
                }
                return this.getStorageSync(t);
            }
        }, {
            key: "getDistance",
            value: function getDistance(t, e, i, s) {
                return Math.sqrt(Math.pow(t - e, 2) + Math.pow(i - s, 2));
            }
        }, {
            key: "checkScroll",
            value: function checkScroll(t, e, i) {
                return this.getDistance(t, Laya.stage.mouseX, e, Laya.stage.mouseY) > i;
            }
        }, {
            key: "navigateToMiniProgram",
            value: function navigateToMiniProgram(t, e) {
                // var _this = this;
                // return new Promise(function (e, i) {
                //     if (t) {
                //         var _a = t, _r = _this.getCacheNewDay("unlinkAd") || {};
                //         if (_r[_a.appid]) {
                //             console.log("广告位今日点击过");
                //             var _t = [], _e2 = _this.getCache("zsAd");
                //             for (var _i3 in _e2) {
                //                 if (_e2.hasOwnProperty(_i3)) {
                //                     var _s = _e2[_i3];
                //                     for (var _e3 = 0; _e3 < _s.length; _e3++) {
                //                         var _i4 = _s[_e3];
                //                         _t.push(_i4);
                //                     }
                //                 }
                //             }
                //             var _i2 = _t.filter(function (t) {
                //                 return !_r[t.appid];
                //             });
                //             _a = _i2[Math.floor(Math.random() * _i2.length)], console.log("新的导出", _a);
                //         }
                //         _a || (_a = t, _this.setCache("unlinkAd", {})), zs.platform.async.navigateToOther({
                //             appInfo: t
                //         }).then(function () {
                //             var i = s.getCacheNewDay("unlinkAd") || {};
                //             i[t.appid] = !0, s.setCache("unlinkAd", i), l.collectExport(t.app_id), e(null);
                //         }).catch(function () {
                //             s.navigateErrorHandler && s.navigateErrorHandler.run(), i(null);
                //         });
                //     } else zs.log.warn("跳转信息丢失，无法完成跳转！", "Exporter"), i(null);
                // });
            }
        }, {
            key: "addBase",
            value: function addBase(t, e) {
                this.bases[t] = e;
            }
        }, {
            key: "removeBase",
            value: function removeBase(t) {
                this.bases[t] && delete this.bases[t];
            }
        }, {
            key: "cache",
            get: function get() {
                return null == this._cache && (this._cache = {}), this._cache;
            }
        }, {
            key: "bases",
            get: function get() {
                return null == this._bases && (this._bases = {}), this._bases;
            }
        }]);
        return s;
    }();
    s.navigateErrorHandler = null;
    var l = /* */ function () {
        function l() {
            (0, _classCallCheck2.default)(this, l);
        }
        (0, _createClass2.default)(l, null, [{
            key: "setCache",
            value: function setCache(t, e, i) {
                this.cache[t] = {
                    data: e,
                    timestamp: Date.now(),
                    expire: i || this.expireTime
                };
            }
        }, {
            key: "getCache",
            value: function getCache(t) {
                var e = this.cache[t];
                return null != e && Date.now() - e.timestamp < e.expire ? e.data : null;
            }
        }, {
            key: "collectExport",
            value: function collectExport(t) {
                if ("wx_" == zs.platform.config.platformMark && "undefined" == typeof wx) return;
                var e = (zs.configs.gameCfg.exportURL || l.URL) + "appad_new/collect", i = Math.round(new Date().getTime() / 1e3).toString(), s = null;
                s = wx.getLaunchOptionsSync();
                var a = {
                    user_id: zs.core.userId,
                    from_id: zs.core.appId,
                    to_id: t,
                    timestamp: i,
                    scene: zs.product.scene,
                    zhise: s && s.query && s.query.zhise ? s.query.zhise : ""
                };
                zs.network.nativeRequest(e, a, "POST", !0).then(function (t) {
                    console.log("collect export success!");
                }).catch(function (t) {
                    console.log("collect export failed!");
                });
            }
        }, {
            key: "load",
            value: function load() {
                var _this2 = this;
                var t = (zs.configs.gameCfg.exportURL || l.URL) + "appad_new/index", e = Math.round(new Date().getTime() / 1e3).toString(), i = {
                    appid: zs.configs.gameCfg.appId,
                    timestamp: e
                };
                return new Promise(function (e, s) {
                    var a = l.getCache(l.exportCache);
                    return a ? e(a) : l.cacheSetting ? (null == l.requestList && (l.requestList = []),
                        void l.requestList.push(function (t) {
                            e(t);
                        })) : (l.cacheSetting = !0, void zs.network.nativeRequest(t, i, "POST", !0).then(function (t) {
                            var i = {
                                more: t.data["position-1"] || [],
                                promotion: t.data["position-2"] || [],
                                indexFloat: t.data["position-3"] || [],
                                banner: t.data["position-4"] || [],
                                indexLeft: t.data["position-7"] || [],
                                gameFloat: t.data["position-8"] || [],
                                endPage: t.data["position-9"] || [],
                                indexLeftFloat: t.data["position-11"] || [],
                                backAd: t.data["position-12"] || [],
                                iosLinkAd: t.data["position-13"] || []
                            };
                            if (l.setCache(l.exportCache, i), l.requestList && l.requestList.length > 0) for (var _t2 = 0, _e4 = l.requestList.length; _t2 < _e4; _t2++) {
                                l.requestList[_t2].call(_this2, i);
                            }
                            l.requestList = null, l.cacheSetting = !1, e(i);
                        }).catch(function (t) {
                            var i = {
                                more: [],
                                promotion: [],
                                indexFloat: [],
                                banner: [],
                                indexLeft: [],
                                gameFloat: [],
                                endPage: [],
                                indexLeftFloat: [],
                                backAd: [],
                                iosLinkAd: []
                            };
                            if (l.requestList && l.requestList.length > 0) for (var _t3 = 0, _e5 = l.requestList.length; _t3 < _e5; _t3++) {
                                l.requestList[_t3].call(_this2, i);
                            }
                            l.requestList = null, l.cacheSetting = !1, e(i);
                        }));
                });
            }
        }, {
            key: "cache",
            get: function get() {
                return null == this._cache && (this._cache = {}), this._cache;
            }
        }]);
        return l;
    }();
    l.URL = "",
    l.expireTime = 6e4, l.exportCache = "ExpCache";
    var a = /* */ function (_zs$fgui$base) {
        (0, _inherits2.default)(a, _zs$fgui$base);
        var _super = _createSuper(a);
        function a(t) {
            var _this3;
            (0, _classCallCheck2.default)(this, a);
            _this3 = _super.call(this, t), _this3._cellWidth = 0, _this3._cellHeight = 0, _this3._effectWidth = 0,
                _this3._effectHeight = 0, _this3._itemType = null, _this3._datas = [], _this3._maxItems = 0,
                _this3._adaptScale = !1, _this3._keepRatio = e.None, _this3._autoScrollSpeed = 0,
                _this3._autoScrollForward = !0, _this3._isAutoScrolling = !1, _this3._dragRecoverTime = 0,
                _this3._dragStopCount = 0, _this3._readyDrag = !1, _this3._clickHandler = null,
                _this3._transition = null, _this3._bScrollExport = !1, t && t instanceof zs.ui.FGUI_list && (t.list.itemProvider = Laya.Handler.create((0,
                    _assertThisInitialized2.default)(_this3), _this3.onItemProvider, null, !1), t.list.itemRenderer = Laya.Handler.create((0,
                        _assertThisInitialized2.default)(_this3), _this3.onItemRenderer, null, !1), t.list.on(fairygui.Events.CLICK_ITEM, (0,
                            _assertThisInitialized2.default)(_this3), _this3.onClickItem), t.list.on(Laya.Event.MOUSE_DOWN, (0,
                                _assertThisInitialized2.default)(_this3), _this3.onDragStateBegin), t.list.on(Laya.Event.MOUSE_MOVE, (0,
                                    _assertThisInitialized2.default)(_this3), _this3.onDragStateChanged));
            return _this3;
        }
        (0, _createClass2.default)(a, [{
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(a.prototype), "dispose", this).call(this),
                    this.shakeTime > 0 && this.stopShake();
            }
        }, {
            key: "check",
            value: function check(t) {
                return t instanceof zs.ui.FGUI_list;
            }
        }, {
            key: "setHorizontalList",
            value: function setHorizontalList(t, s, a, r) {
                var _this4 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowVertical).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setScrollType(fairygui.ScrollType.Horizontal).setColumnGap(25).setGridHeight(s).snapWidth().setAutoScrollSpeed(100).setDragRecoverTime(3).loop().setScrollExport().setMaxItems(a),
                    l.load().then(function (t) {
                        _this4.disposed || _this4.setDatas(t.promotion).apply();
                    }), r ? this.apply() : this;
            }
        }, {
            key: "setVerticalList",
            value: function setVerticalList(t, s, a, r) {
                var _this5 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).snapHeight().setAutoScrollSpeed(100).setDragRecoverTime(3).loop().setMaxItems(a),
                    l.load().then(function (t) {
                        _this5.disposed || _this5.setDatas(t.promotion).apply();
                    }), r ? this.apply() : this;
            }
        }, {
            key: "setSideList",
            value: function setSideList(t, s, a, r) {
                var _this6 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth(.7 * s).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).setListFit(!0).bounce(!1).setMaxItems(a),
                    l.load().then(function (t) {
                        _this6.disposed || (t && t.promotion && t.promotion.sort(function (t, e) {
                            return t < e ? -1 : 1;
                        }), _this6.setDatas(t.promotion).apply());
                    }), r ? this.apply() : this;
            }
        }, {
            key: "setHorizontalGrid",
            value: function setHorizontalGrid(t, s, a, r, n, h) {
                var _this7 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth((s - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n),
                    l.load().then(function (t) {
                        _this7.disposed || _this7.setDatas(t.promotion).apply();
                    }), h ? this.apply() : this;
            }
        }, {
            key: "setVerticalGrid",
            value: function setVerticalGrid(t, s, a, r, n, h) {
                var _this8 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setCellHeight((a - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n),
                    l.load().then(function (t) {
                        _this8.disposed || _this8.setDatas(t.promotion).apply();
                    }), h ? this.apply() : this;
            }
        }, {
            key: "setAdaptScale",
            value: function setAdaptScale(t) {
                return this._adaptScale = t, this;
            }
        }, {
            key: "setListFit",
            value: function setListFit(t) {
                return this._listFit = t, this;
            }
        }, {
            key: "setKeepRatio",
            value: function setKeepRatio(t) {
                return this._keepRatio = t, this;
            }
        }, {
            key: "setAlign",
            value: function setAlign(t) {
                var e = this.view;
                if (e && e.list) switch (t) {
                    case i.Center:
                        e.list.align = a.AlignCenter, e.list.verticalAlign = a.AlignMiddle;
                        break;

                    case i.Top:
                        e.list.align = a.AlignCenter, e.list.verticalAlign = a.AlignTop;
                        break;

                    case i.Bottom:
                        e.list.align = a.AlignCenter, e.list.verticalAlign = a.AlignBottom;
                        break;

                    case i.Left:
                        e.list.align = a.AlignLeft, e.list.verticalAlign = a.AlignMiddle;
                        break;

                    case i.Right:
                        e.list.align = a.AlignRight, e.list.verticalAlign = a.AlignMiddle;
                        break;

                    case i.TopLeft:
                        e.list.align = a.AlignLeft, e.list.verticalAlign = a.AlignTop;
                        break;

                    case i.BottomLeft:
                        e.list.align = a.AlignLeft, e.list.verticalAlign = a.AlignBottom;
                        break;

                    case i.TopRight:
                        e.list.align = a.AlignRight, e.list.verticalAlign = a.AlignTop;
                        break;

                    case i.BottomRight:
                        e.list.align = a.AlignRight, e.list.verticalAlign = a.AlignBottom;
                }
                return this;
            }
        }, {
            key: "setLineCount",
            value: function setLineCount(t) {
                var e = this.view;
                return e && e.list && (e.list.lineCount = t), this;
            }
        }, {
            key: "setLineGap",
            value: function setLineGap(t) {
                var e = this.view;
                return e && e.list && (e.list.lineGap = t), this;
            }
        }, {
            key: "setColumnCount",
            value: function setColumnCount(t) {
                var e = this.view;
                return e && e.list && (e.list.columnCount = t), this;
            }
        }, {
            key: "setColumnGap",
            value: function setColumnGap(t) {
                var e = this.view;
                return e && e.list && (e.list.columnGap = t), this;
            }
        }, {
            key: "setLayout",
            value: function setLayout(t) {
                var e = this.view;
                return e && e.list && (e.list.layout = t), this;
            }
        }, {
            key: "setCellWidth",
            value: function setCellWidth(t) {
                return this._cellWidth = t, this;
            }
        }, {
            key: "setCellHeight",
            value: function setCellHeight(t) {
                return this._cellHeight = t, this;
            }
        }, {
            key: "setCellSize",
            value: function setCellSize(t, e) {
                return this._cellWidth = t, this._cellHeight = e, this;
            }
        }, {
            key: "setX",
            value: function setX(t) {
                return this.view && (this.view.x = t), this;
            }
        }, {
            key: "setY",
            value: function setY(t) {
                return this.view && (this.view.y = t), this;
            }
        }, {
            key: "setXY",
            value: function setXY(t, e) {
                return this.view && (this.view.x = t, this.view.y = e), this;
            }
        }, {
            key: "setScaleX",
            value: function setScaleX(t) {
                return this.view && (this.view.scaleX = t), this;
            }
        }, {
            key: "setScaleY",
            value: function setScaleY(t) {
                return this.view && (this.view.scaleY = t), this;
            }
        }, {
            key: "setScaleXY",
            value: function setScaleXY(t, e) {
                return this.view && (this.view.scaleX = t, this.view.scaleY = e), this;
            }
        }, {
            key: "setGridWidth",
            value: function setGridWidth(t) {
                return this.view && (this.view.width = t), this;
            }
        }, {
            key: "snapWidth",
            value: function snapWidth() {
                return this.view && (this.view.width = fairygui.GRoot.inst.width * (1 / this.view.scaleX)),
                    this;
            }
        }, {
            key: "setGridHeight",
            value: function setGridHeight(t) {
                return this.view && (this.view.height = t), this;
            }
        }, {
            key: "snapHeight",
            value: function snapHeight() {
                return this.view && (this.view.height = fairygui.GRoot.inst.height * (1 / this.view.scaleY)),
                    this;
            }
        }, {
            key: "setGridSize",
            value: function setGridSize(t, e) {
                return this.view && (this.view.width = t, this.view.height = e), this;
            }
        }, {
            key: "setMarginLeft",
            value: function setMarginLeft(t) {
                var e = this.view;
                return e && e.list && (e.list.margin.left = t), this;
            }
        }, {
            key: "setMarginRight",
            value: function setMarginRight(t) {
                var e = this.view;
                return e && e.list && (e.list.margin.right = t), this;
            }
        }, {
            key: "setMarginTop",
            value: function setMarginTop(t) {
                var e = this.view;
                return e && e.list && (e.list.margin.top = t), this;
            }
        }, {
            key: "setMarginBottom",
            value: function setMarginBottom(t) {
                var e = this.view;
                return e && e.list && (e.list.margin.bottom = t), this;
            }
        }, {
            key: "setMargin",
            value: function setMargin(t, e, i, s) {
                var l = this.view;
                return l && l.list && (l.list.margin.left = t, l.list.margin.right = e, l.list.margin.top = i,
                    l.list.margin.bottom = s), this;
            }
        }, {
            key: "setBackground",
            value: function setBackground(t) {
                var e = this.view;
                return e && e.background && (Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(function (i) {
                    e.background.url = zs.ui.readURL(i, t[1]);
                }) : e.background.url = t), this;
            }
        }, {
            key: "setItem",
            value: function setItem(t) {
                this._itemType = t;
                var e = this.view;
                return e && e.list && (e.list.defaultItem = this._itemType.URL), this;
            }
        }, {
            key: "setDatas",
            value: function setDatas(t) {
                return this._datas = t.filter(function (t) {
                    return !0;
                }), this._datas.sort(function (t, e) {
                    return Math.random() > .5 ? -1 : 1;
                }), this;
            }
        }, {
            key: "setMaxItems",
            value: function setMaxItems(t) {
                return this._maxItems = t, this;
            }
        }, {
            key: "setScrollType",
            value: function setScrollType(t) {
                var e = this.view;
                return e && e.list && (e.list.scrollPane._scrollType = t), this;
            }
        }, {
            key: "setAutoScrollSpeed",
            value: function setAutoScrollSpeed(t) {
                return this._autoScrollSpeed = t, this;
            }
        }, {
            key: "setDragRecoverTime",
            value: function setDragRecoverTime(t) {
                return this._dragRecoverTime = t, this;
            }
        }, {
            key: "setTransition",
            value: function setTransition(t) {
                return this._transition = t, this;
            }
        }, {
            key: "setDataHandler",
            value: function setDataHandler(t) {
                return t && (t.once = !1, this._itemRendererHandler = t), this;
            }
        }, {
            key: "setClickHandler",
            value: function setClickHandler(t) {
                return this._clickHandler = t, this;
            }
        }, {
            key: "setScrollExport",
            value: function setScrollExport() {
                return this._bScrollExport = !0, this;
            }
        }, {
            key: "fit",
            value: function fit() {
                var t = this.view;
                if (t && t.list) {
                    t.list.resizeToFit();
                    var _e6 = t.list.width, _i5 = t.list.height;
                    t.width = _e6, t.height = _i5, t.list.width = _e6, t.list.height = _i5;
                }
                return this;
            }
        }, {
            key: "loop",
            value: function loop() {
                var t = this.view;
                return t && t.list && this._itemType && (t.list.layout == fairygui.ListLayoutType.FlowHorizontal ? t.list.layout = fairygui.ListLayoutType.SingleColumn : t.list.layout == fairygui.ListLayoutType.FlowVertical && (t.list.layout = fairygui.ListLayoutType.SingleRow),
                    t.list.setVirtualAndLoop()), this._itemType || zs.log.warn("请先使用SetItem设置列表组件，再执行loop", "Exporter"),
                    this;
            }
        }, {
            key: "virtual",
            value: function virtual() {
                var t = this.view;
                return t && t.list && this._itemType && t.list.setVirtual(), this._itemType || zs.log.warn("请先使用SetItem设置列表组件，再执行virtual", "Exporter"),
                    this;
            }
        }, {
            key: "bounce",
            value: function bounce(t) {
                var e = this.view;
                return e && e.list && (e.list.scrollPane.bouncebackEffect = t), this;
            }
        }, {
            key: "setShakeTime",
            value: function setShakeTime(t) {
                return this.shakeTime = t, this;
            }
        }, {
            key: "apply",
            value: function apply() {
                var t = this.view;
                if (t && t.list && !this.disposed) {
                    t.list.handleSizeChanged();
                    var _e7 = this.margin;
                    this._effectWidth = this.gridWidth - _e7.left - _e7.right, this._effectHeight = this.gridHeight - _e7.top - _e7.bottom,
                        this._effectWidth <= 0 || this._effectHeight <= 0 ? t.list.numItems = 0 : this.maxItems > 0 ? t.list.numItems = this._datas ? Math.min(this._datas.length, this._maxItems) : 0 : t.list.numItems = this._datas ? this._datas.length : 0,
                        this._listFit && t.list.resizeToFit(t.list.numItems), 0 != this._autoScrollSpeed && (Laya.timer.clear(this, this.onAutoScroll),
                            Laya.timer.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0), this._bScrollExport && (t.list.off(fairygui.Events.DRAG_START, this, this.scrollStart),
                                t.list.off(fairygui.Events.DRAG_END, this, this.scrollJumpExport), t.list.on(fairygui.Events.DRAG_START, this, this.scrollStart),
                                t.list.on(fairygui.Events.DRAG_END, this, this.scrollJumpExport)), this.shakeTime && this.shakeTime > 0 && Laya.timer.once(this.shakeTime, this, this.refreshItem);
                }
                return this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                if (t) {
                    null != t.scalex && null != t.scalex && this.setScaleX(t.scalex), null != t.scaley && null != t.scaley && this.setScaleY(t.scaley);
                    var _e8 = zs.fgui.configs.items[t.item];
                    if (t.mode && null != _e8) switch (t.mode) {
                        case "hlist":
                            t.height && this.setHorizontalList(_e8, t.height, t.max || 0, !1);
                            break;

                        case "vlist":
                            t.width && this.setVerticalList(_e8, t.width, t.max || 0, !1);
                            break;

                        case "hgrid":
                            t.width && t.height && t.lineLimit && this.setHorizontalGrid(_e8, t.width, t.height, t.lineLimit, t.max || 0, !1);
                            break;

                        case "vgrid":
                            t.width && t.height && t.columnLimit && this.setVerticalGrid(_e8, t.width, t.height, t.columnLimit, t.max || 0, !1);
                            break;

                        case "side":
                            t.width && this.setSideList(_e8, t.width, t.max || 0, !1);
                    }
                    if (null != t.adaptscale && null != t.adaptscale && this.setAdaptScale(t.adaptscale),
                        null != t.listfit && null != t.listfit && this.setListFit(t.listfit), t.keepratio) switch (t.keepratio) {
                            case "horizontal":
                                this.setKeepRatio(zs.AdaptType.Horizontal);
                                break;

                            case "vertical":
                                this.setKeepRatio(zs.AdaptType.Vertical);
                                break;

                            default:
                                this.setKeepRatio(zs.AdaptType.None);
                        }
                    if (t.align) switch (t.align) {
                        case "center":
                            this.setAlign(zs.AlignType.Center);
                            break;

                        case "top":
                            this.setAlign(zs.AlignType.Top);
                            break;

                        case "bottom":
                            this.setAlign(zs.AlignType.Bottom);
                            break;

                        case "left":
                            this.setAlign(zs.AlignType.Left);
                            break;

                        case "right":
                            this.setAlign(zs.AlignType.Right);
                            break;

                        case "topleft":
                            this.setAlign(zs.AlignType.TopLeft);
                            break;

                        case "bottomleft":
                            this.setAlign(zs.AlignType.BottomLeft);
                            break;

                        case "topright":
                            this.setAlign(zs.AlignType.TopRight);
                            break;

                        case "bottomright":
                            this.setAlign(zs.AlignType.BottomRight);
                    }
                    if (null != t.linecount && null != t.linecount && this.setLineCount(t.linecount),
                        null != t.linegap && null != t.linegap && this.setLineGap(t.linegap), null != t.columncount && null != t.columncount && this.setColumnCount(t.columncount),
                        null != t.columngap && null != t.columngap && this.setColumnGap(t.columngap), t.layout) switch (t.layout) {
                            case "singlecolumn":
                                this.setLayout(fairygui.ListLayoutType.SingleColumn);
                                break;

                            case "singlerow":
                                this.setLayout(fairygui.ListLayoutType.SingleRow);
                                break;

                            case "flowhorizontal":
                                this.setLayout(fairygui.ListLayoutType.FlowHorizontal);
                                break;

                            case "flowvertical":
                                this.setLayout(fairygui.ListLayoutType.FlowVertical);
                                break;

                            case "pagination":
                                this.setLayout(fairygui.ListLayoutType.Pagniation);
                        }
                    if (null != t.cellwidth && null != t.cellwidth && this.setCellWidth(t.cellwidth),
                        null != t.cellheight && null != t.cellheight && this.setCellHeight(t.cellheight),
                        null != t.x && null != t.x && this.setX(x), null != t.y && null != t.y && this.setY(y),
                        null != t.gridwidth && null != t.gridwidth && this.setGridWidth(t.gridWidth), null != t.gridheight && null != t.gridheight && this.setGridHeight(t.gridHeight),
                        t.snapwidth && this.snapWidth(), t.snapheight && this.snapheight(), null != t.marginleft && null != t.marginleft && this.setMarginLeft(t.marginleft),
                        null != t.marginright && null != t.marginright && this.setMarginRight(t.marginright),
                        null != t.margintop && null != t.margintop && this.setMarginTop(t.margintop), null != t.marginbottom && null != t.marginbottom && this.setMarginBottom(t.marginbottom),
                        t.background && this.setBackground(t.background), _e8 && this.setItem(_e8), t.max && this.setMaxItems(t.max),
                        t.scrolltype) switch (t.scrolltype) {
                            case "horizontal":
                                this.setScrollType(fairygui.ScrollType.Horizontal);
                                break;

                            case "vertical":
                                this.setScrollType(fairygui.ScrollType.Vertical);
                                break;

                            case "both":
                                this.setScrollType(fairygui.ScrollType.Both);
                        }
                    null != t.autoscrollspeed && null != t.autoscrollspeed && this.setAutoScrollSpeed(t.autoscrollspeed),
                        null != t.dragrecovertime && null != t.dragrecovertime && this.setDragRecoverTime(t.dragrecovertime),
                        t.transition && this.setTransition(t.transition), t.fit && this.fit(), t.loop && this.loop(),
                        t.virtual && this.virtual(), null != t.bounce && null != t.bounce && this.bounce(t.bounce),
                        null != t.shaketime && null != t.shaketime && this.setShakeTime(t.shaketime);
                }
                return this.apply();
            }
        }, {
            key: "startShake",
            value: function startShake() {
                var _this9 = this;
                for (var _t4 = 0; _t4 < this.view.list.numChildren; _t4++) {
                    var _e9 = this.view.list.getChildAt(_t4);
                    this.shakeNode(_e9);
                }
                Laya.timer.once(this.shakeTime, this, function () {
                    _this9.refreshItem();
                });
            }
        }, {
            key: "stopShake",
            value: function stopShake() {
                for (var _t5 = 0; _t5 < this.view.list.numChildren; _t5++) {
                    var _e10 = this.view.list.getChildAt(_t5);
                    Laya.Tween.clearAll(_e10);
                }
            }
        }, {
            key: "refreshItem",
            value: function refreshItem() {
                this._datas.sort(function (t, e) {
                    return Math.random() > .5 ? -1 : 1;
                }), this.maxItems > 0 ? this.view.list.numItems = this._datas ? Math.min(this._datas.length, this._maxItems) : 0 : this.view.list.numItems = this._datas ? this._datas.length : 0,
                    this.view.list._virtual && this.view.list.refreshVirtualList(), this.startShake();
            }
        }, {
            key: "shakeNode",
            value: function shakeNode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                switch (++e) {
                    case 0:
                        t.rotation = 0, Laya.Tween.to(t, {
                            rotation: 5
                        }, 50, null, Laya.Handler.create(this, this.shakeNode, [t, e]));
                        break;

                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        Laya.Tween.to(t, {
                            rotation: 10 * (e % 2 == 0 ? 1 : -1)
                        }, 100, null, Laya.Handler.create(this, this.shakeNode, [t, e]));
                        break;

                    case 6:
                        Laya.Tween.to(t, {
                            rotation: 0
                        }, 50);
                }
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
            key: "onItemProvider",
            value: function onItemProvider() {
                return this._itemType.URL;
            }
        }, {
            key: "onItemRenderer",
            value: function onItemRenderer(t, i) {
                if (t < 0 || t >= this._datas.length) return i.picture.icon = "", i.title.text = "",
                    i.desc && (i.desc = ""), void (i.data = null);
                var s = this._datas[t];
                if (this._cellWidth > 0 || this._adaptScale && i.width > this._effectWidth) {
                    var _t6 = this._adaptScale ? this._effectWidth : i.width;
                    this._cellWidth > 0 && (_t6 = Math.min(_t6, this._cellWidth)), i.width = _t6;
                }
                if (this._cellHeight > 0 || this._adaptScale && i.height > this._effectHeight) {
                    var _t7 = this._adaptScale ? this._effectHeight : i.height;
                    this._cellHeight > 0 && (_t7 = Math.min(_t7, this._cellHeight)), i.height = _t7;
                }
                if (this.keepRatio == e.Horizontal ? i.height = i.width * (i.initHeight / i.initWidth) : this.keepRatio == e.Vertical && (i.width = i.height * (i.initWidth / i.initHeight)),
                    this._transition && this._transition.length >= 0) {
                    var _t8 = i.getTransition(this._transition);
                    _t8 && _t8.play();
                }
                this._itemRendererHandler ? this._itemRendererHandler.runWith([i, s]) : (i.picture.icon = s.app_icon,
                    s.app_title && i.title ? i.title.text = s.app_title : i.title && (i.title.text = ""),
                    s.app_desc && i.desc ? i.desc.text = s.app_desc : i.desc && (i.desc.text = "")),
                    i.data = s;
            }
        }, {
            key: "onAutoScroll",
            value: function onAutoScroll() {
                var t = this.view;
                if (t && t.list) if (this._isAutoScrolling && this.scrollType != fairygui.ScrollType.Both) {
                    var _e11 = this._autoScrollSpeed * Laya.timer.delta * .001 * (this._autoScrollForward ? 1 : -1), _i6 = t.list.scrollPane;
                    this.scrollType == fairygui.ScrollType.Horizontal ? (_i6.setPosX(_e11 + t.list.scrollPane.posX),
                        _i6.percX >= 1 ? this._autoScrollForward = !1 : _i6.percX <= 0 && (this._autoScrollForward = !0)) : (_i6.setPosY(_e11 + t.list.scrollPane.posY),
                            _i6.percY >= 1 ? this._autoScrollForward = !1 : _i6.percY <= 0 && (this._autoScrollForward = !0));
                } else this.scrollType != fairygui.ScrollType.Both && (this._dragStopCount += .001 * Laya.timer.delta,
                    this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0, this._isAutoScrolling = !0));
            }
        }, {
            key: "refreshSingleItem",
            value: function refreshSingleItem(t) {
                var e = Math.floor(Math.random() * this._datas.length);
                if (this._datas.length > 1 && e == t) return this.refreshSingleItem(t);
                var i = this._datas[e], s = this._datas[t];
                i && (this._datas[t] = i, this._datas[e] = s, this.apply(), this.view.list._virtual && this.view.list.refreshVirtualList());
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(t, e) {
                var _this10 = this;
                this._clickHandler ? this._clickHandler.runWith(t) : s.navigateToMiniProgram(t.data).then(function () {
                    var e = _this10._datas.indexOf(t.data);
                    _this10.refreshSingleItem(e);
                });
            }
        }, {
            key: "scrollStart",
            value: function scrollStart() {
                this.touchX = Laya.stage.mouseX, this.touchY = Laya.stage.mouseY;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport() {
                if (s.checkScroll(this.touchX, this.touchY, a.checkScrollDistance)) {
                    var t = zs.product.get("zs_slide_jump_switch");
                    console.log("滑动跳转开关", t), t && this.randomJumpExport();
                }
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() {
                if (!this._datas || this._datas.length <= 0) return;
                var t = this._datas[Math.floor(Math.random() * this._datas.length)];
                s.navigateToMiniProgram(t);
            }
        }, {
            key: "adaptScale",
            get: function get() {
                return this._adaptScale;
            }
        }, {
            key: "listFit",
            get: function get() {
                return this._listFit;
            }
        }, {
            key: "keepRatio",
            get: function get() {
                return this._keepRatio;
            }
        }, {
            key: "align",
            get: function get() {
                var t = this.view, e = i.Center;
                if (t && t.list) {
                    var _s2 = t.list.align, _l = t.list.verticalAlign;
                    switch (_s2) {
                        case a.AlignMiddle:
                            switch (_l) {
                                case a.AlignBottom:
                                    e = i.Bottom;
                                    break;

                                case a.AlignCenter:
                                    e = i.Center;
                                    break;

                                default:
                                    e = i.Top;
                            }
                            break;

                        case a.AlignRight:
                            switch (_l) {
                                case a.AlignBottom:
                                    e = i.BottomRight;
                                    break;

                                case a.AlignCenter:
                                    e = i.Right;
                                    break;

                                default:
                                    e = i.TopRight;
                            }
                            break;

                        default:
                            switch (_l) {
                                case a.AlignBottom:
                                    e = i.BottomLeft;
                                    break;

                                case a.AlignCenter:
                                    e = i.Left;
                                    break;

                                default:
                                    e = i.TopLeft;
                            }
                    }
                }
                return e;
            }
        }, {
            key: "lineCount",
            get: function get() {
                var t = this.view;
                return t && t.list ? t.list.lineCount : 0;
            }
        }, {
            key: "lineGap",
            get: function get() {
                var t = this.view;
                return t && t.list ? t.list.lineGap : 0;
            }
        }, {
            key: "columnCount",
            get: function get() {
                var t = this.view;
                return t && t.list ? t.list.columnCount : 0;
            }
        }, {
            key: "columnGap",
            get: function get() {
                var t = this.view;
                return t && t.list ? t.list.columnGap : 0;
            }
        }, {
            key: "layout",
            get: function get() {
                var t = this.view;
                return t ? t.list.layout : fairygui.ListLayoutType.FlowHorizontal;
            }
        }, {
            key: "cellWidth",
            get: function get() {
                return this._cellWidth;
            }
        }, {
            key: "cellHeight",
            get: function get() {
                return this._cellHeight;
            }
        }, {
            key: "x",
            get: function get() {
                return this.view ? this.view.x : 0;
            }
        }, {
            key: "y",
            get: function get() {
                return this.view ? this.view.y : 0;
            }
        }, {
            key: "scaleX",
            get: function get() {
                return this.view ? this.view.scaleX : 1;
            }
        }, {
            key: "scaleY",
            get: function get() {
                return this.view ? this.view.scaleY : 1;
            }
        }, {
            key: "gridWidth",
            get: function get() {
                return this.view ? this.view.width : 0;
            }
        }, {
            key: "gridHeight",
            get: function get() {
                return this.view ? this.view.height : 0;
            }
        }, {
            key: "marginLeft",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.left : 0;
            }
        }, {
            key: "marginRight",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.right : 0;
            }
        }, {
            key: "marginTop",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.top : 0;
            }
        }, {
            key: "marginBottom",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.bottom : 0;
            }
        }, {
            key: "margin",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin : null;
            }
        }, {
            key: "background",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.background.url : null;
            }
        }, {
            key: "item",
            get: function get() {
                return this._itemType;
            }
        }, {
            key: "datas",
            get: function get() {
                return this._datas;
            }
        }, {
            key: "maxItems",
            get: function get() {
                return this._maxItems;
            }
        }, {
            key: "scrollType",
            get: function get() {
                var t = this.view;
                return t && t.list ? t.list.scrollPane._scrollType : fairygui.ScrollType.Both;
            }
        }, {
            key: "autoScrollSpeed",
            get: function get() {
                return this._autoScrollSpeed;
            }
        }, {
            key: "dragRecoverTime",
            get: function get() {
                return this._dragRecoverTime;
            }
        }, {
            key: "transition",
            get: function get() {
                return this._transition;
            }
        }], [{
            key: "make",
            value: function make() {
                return zs.ui.FGUI_list.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return zs.ui.FGUI_list;
            }
        }]);
        return a;
    }(zs.fgui.base);
    a.checkScrollDistance = 30, a.AlignTop = "top", a.AlignBottom = "bottom", a.AlignMiddle = "middle",
        a.AlignLeft = "left", a.AlignRight = "right", a.AlignCenter = "center", a.transitionShakeLeft = "shakeLeft",
        a.transitionShakeRight = "shakeRight";
    var r = /* */ function (_zs$fgui$base2) {
        (0, _inherits2.default)(r, _zs$fgui$base2);
        var _super2 = _createSuper(r);
        function r() {
            (0, _classCallCheck2.default)(this, r);
            return _super2.apply(this, arguments);
        }
        (0, _createClass2.default)(r, [{
            key: "setMistaken",
            value: function setMistaken() {
                return this;
            }
        }, {
            key: "setClickContinue",
            value: function setClickContinue(t) {
                return this._clickContinue = t, this;
            }
        }, {
            key: "onClickContinue",
            value: function onClickContinue() {
                this._clickContinue && this._clickContinue.run();
            }
        }, {
            key: "enterJumpExport",
            value: function enterJumpExport() {
                var t = zs.product.get("zs_auto_jump_switch");
                return console.log("自动跳转开关", t), t && this.randomJumpExport(), this;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport() {
                if (s.checkScroll(this.touchX, this.touchY, r.checkScrollDistance)) {
                    var t = zs.product.get("zs_slide_jump_switch");
                    console.log("滑动跳转开关", t), t && this.randomJumpExport();
                }
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() { }
        }, {
            key: "apply",
            value: function apply() {
                return this;
            }
        }]);
        return r;
    }(zs.fgui.base);
    r.checkScrollDistance = 30, t.utils = s, t.dataMgr = l, t.list = a, t.card = /* */ function (_zs$fgui$base3) {
        (0, _inherits2.default)(_class, _zs$fgui$base3);
        var _super3 = _createSuper(_class);
        function _class(t) {
            var _this11;
            (0, _classCallCheck2.default)(this, _class);
            _this11 = _super3.call(this, t), t && t instanceof zs.ui.FGUI_card && t.on(Laya.Event.CLICK, (0,
                _assertThisInitialized2.default)(_this11), _this11.onClickItem);
            return _this11;
        }
        (0, _createClass2.default)(_class, [{
            key: "check",
            value: function check(t) {
                return t instanceof zs.ui.FGUI_card;
            }
        }, {
            key: "setItem",
            value: function setItem(t) {
                var e = this.view;
                return e && e.loader && (e.loader.url = t.URL), this;
            }
        }, {
            key: "setAutoSize",
            value: function setAutoSize(t) {
                var e = this.view;
                return e && e.loader && (e.loader.autoSize = t), this;
            }
        }, {
            key: "setWidth",
            value: function setWidth(t, e) {
                this.setAutoSize(!1);
                var i = this.view;
                if (i && i.loader) {
                    var _s3 = t / i.loader.sourceWidth;
                    i.loader.width = t, e && (i.loader.height = _s3 * i.loader.sourceHeight);
                }
                return this;
            }
        }, {
            key: "setHeight",
            value: function setHeight(t, e) {
                this.setAutoSize(!1);
                var i = this.view;
                if (i && i.loader) {
                    var _s4 = t / i.loader.sourceHeight;
                    i.loader.height = t, e && (i.loader.width = _s4 * i.loader.sourceWidth);
                }
                return this;
            }
        }, {
            key: "setTransition",
            value: function setTransition(t, e) {
                var i = this.view;
                if (i) {
                    var _s5 = i.getTransition(t);
                    _s5 && (e ? _s5.stop() : _s5.play());
                }
                return this;
            }
        }, {
            key: "setData",
            value: function setData(t) {
                var e = this.view;
                if (e && e.loader) {
                    var _i7 = e.loader.component;
                    _i7.data = t, this._cardRendererHandler ? this._cardRendererHandler.runWith([_i7, t]) : _i7 instanceof zs.ui.FGUI_item && (_i7.picture.icon = t.url,
                        _i7.title.text = t.title, _i7.desc && t.desc ? _i7.desc.text = t.desc : _i7.desc && (_i7.desc.text = ""));
                }
                return this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                if (t) {
                    var _e12 = null;
                    t.item && (_e12 = zs.fgui.configs.items[t.item]), _e12 && this.setItem(_e12), null != t.autosize && null != t.autosize ? this.setAutoSize(t.autosize) : (t.width && this.setWidth(t.width, t.keepratio),
                        t.height && this.setHeight(t.height, t.keepratio));
                }
            }
        }, {
            key: "setDataHandler",
            value: function setDataHandler(t) {
                return t && (t.once = !1, this._cardRendererHandler = t), this;
            }
        }, {
            key: "setClickHandler",
            value: function setClickHandler(t) {
                return this._clickHandler = t, this;
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(t, e) {
                this._clickHandler ? this._clickHandler.runWith(t) : s.navigateToMiniProgram(t.info);
            }
        }, {
            key: "itemURL",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_card ? this.view.loader.url : null;
            }
        }, {
            key: "autoSize",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_card ? this.view.loader.autoSize : null;
            }
        }, {
            key: "width",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_card ? this.view.loader.width : null;
            }
        }, {
            key: "height",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_card ? this.view.loader.height : null;
            }
        }], [{
            key: "make",
            value: function make() {
                return zs.ui.FGUI_card.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return zs.ui.FGUI_card;
            }
        }]);
        return _class;
    }(zs.fgui.base), t.full = r, t.AdaptType = e;
}(window.zs.exporter = window.zs.exporter || {});