var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/inherits"));

var _regenerator = _interopRequireDefault(requirea("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/asyncToGenerator"));

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

window.zs = window.zs || {}, window.zs.exporter = window.zs.exporter || {}, function(t) {
    "use strict";
    var e, i = zs.fgui.AlignType;
    !function(t) {
        t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
    }(e = e || (e = {}));
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [ {
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
                return this.getDistance(t, zs.proxy.Touch.touchX, e, zs.proxy.Touch.touchY) > i;
            }
        }, {
            key: "navigateToMiniProgram",
            value: function() {
                var _navigateToMiniProgram = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee(t, e) {
                    var i, a, r, n, _s, _t, _s2, _t2, _s3, _e2;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                i = t ? t.info : null, a = null, r = null, n = t ? t.img_index : null;
                                if (!i) {
                                    _context.next = 25;
                                    break;
                                }
                                _s = this.getCacheNewDay("unlinkAd") || {};
                                if (!_s[i.appid]) {
                                    _context.next = 24;
                                    break;
                                }
                                zs.log.debug("广告位今日点击过", "Exporter");
                                _context.next = 7;
                                return l.load().catch(function(t) {
                                    return t;
                                });

                              case 7:
                                _t = _context.sent.filter(function(t) {
                                    return !_s[t.info.appid];
                                });
                                if (!(_t && _t.length > 0)) {
                                    _context.next = 23;
                                    break;
                                }
                                _s2 = Math.floor(Math.random() * _t.length);
                                if (!i.imgs) {
                                    _context.next = 20;
                                    break;
                                }
                                _t2 = 0, _s3 = i.imgs.length;

                              case 12:
                                if (!(_t2 < _s3)) {
                                    _context.next = 20;
                                    break;
                                }
                                if (!(i.imgs[_t2].icon == e)) {
                                    _context.next = 17;
                                    break;
                                }
                                _e2 = i.imgs[_t2];
                                a = _e2.group_id, r = _e2.img_id;
                                return _context.abrupt("break", 20);

                              case 17:
                                _t2++;
                                _context.next = 12;
                                break;

                              case 20:
                                i = _t[_s2].info, zs.log.debug("新的导出", "Exporter", i);
                                _context.next = 24;
                                break;

                              case 23:
                                i = null;

                              case 24:
                                i || (i = t.info, this.setCache("unlinkAd", {}));

                              case 25:
                                return _context.abrupt("return", new zs.Coop(function(t, o) {
                                    if (i) {
                                        i.img_index = n, s.navigateCount++, s.readyExport = {
                                            target: i,
                                            icon: e,
                                            group: a,
                                            img: r
                                        };
                                        var h = zs.utils.getEventCode("export-" + s.navigateCount + "-" + i.app_id);
                                        s.behaviorExport = {
                                            event_id: h,
                                            app_id: i.app_id
                                        }, i.extraData = {
                                            event_id: h
                                        }, zs.td.justTrack("导出跳转", "导出跳转"), zs.platform.async.navigateToOther({
                                            appInfo: i
                                        }).then(function() {
                                            var n = s.getCacheNewDay("unlinkAd") || {};
                                            n[i.appid] = !0, s.setCache("unlinkAd", n), s.readyExport && (l.collectExport(i, e, a, r), 
                                            s.readyExport = null), t(null);
                                        }).catch(function() {
                                            s.behaviorExport = null, s.readyExport = null, s.skipNavigateErrorOnce || s.skipNavigateError || s.navigateErrorHandler && s.navigateErrorHandler.run(), 
                                            s.skipNavigateErrorOnce = !1, o(null);
                                        });
                                    } else zs.log.warn("跳转信息丢失，无法完成跳转！", "Exporter"), o(null);
                                }));

                              case 26:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function navigateToMiniProgram(_x, _x2) {
                    return _navigateToMiniProgram.apply(this, arguments);
                }
                return navigateToMiniProgram;
            }()
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
        } ]);
        return s;
    }();
    s.navigateErrorHandler = null, s.navigateCount = 0, s.readyExport = null, s.record = [];
    var l = /* */ function() {
        function l() {
            (0, _classCallCheck2.default)(this, l);
        }
        (0, _createClass2.default)(l, null, [ {
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
            key: "getUUID",
            value: function getUUID() {
                var t = zs.utils.getItem("ads_uuid");
                if (!t || t.trim().length <= 0) {
                    var _e3 = "";
                    for (var _t3 = 0; _t3 < 8; _t3++) {
                        _e3 += zs.utils.randByte();
                    }
                    zs.utils.setItem("ads_uuid", _e3), t = _e3;
                }
                return t;
            }
        }, {
            key: "collectSource",
            value: function collectSource() {
                zs.configs.gameCfg.newAds ? this.collectSourceNew() : this.collectSourceOld();
            }
        }, {
            key: "collectSourceNew",
            value: function collectSourceNew() {
                var t = l.NEWURL + "/" + zs.network.version + "/ad/source", e = zs.platform.sync.getLaunchOptions();
                if (!e || !e.referrerInfo || !e.referrerInfo.appId) return;
                var i = {
                    from_app_id: e.referrerInfo.appId,
                    to_app_id: zs.core.appId,
                    scene: zs.platform.sync.getScene(),
                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                    open_id: this.getUUID(),
                    zhise: e && e.query && e.query.zhise ? e.query.zhise : "",
                    event_id: e.referrerInfo.extraData && e.referrerInfo.extraData.event_id ? e.referrerInfo.extraData.event_id : ""
                };
                zs.td.justTrack("来路统计", "来路统计"), zs.network.nativeRequest(t, i, "POST", !1, !1, !0).then(function(t) {
                    console.log("collect source success!", t);
                }).catch(function(t) {
                    zs.td.justTrack("来路统计失败", "来路统计失败"), console.log("collect source failed!", t);
                });
            }
        }, {
            key: "collectSourceOld",
            value: function collectSourceOld() {
                var t = l.URL + "/api/app_jump/in", e = zs.platform.sync.getLaunchOptions(), i = "";
                e && e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.event_id && (i = e.referrerInfo.extraData.event_id);
                var s = {
                    ak: zs.core.appId,
                    uu: this.getUUID(),
                    wsr: e,
                    rq_c: 0,
                    eid: i
                };
                zs.td.justTrack("来路统计", "来路统计"), zs.network.nativeRequest(t, s, "POST", !1, !1, !0).then(function(t) {
                    console.log("collect source success!", t);
                }).catch(function(t) {
                    zs.td.justTrack("来路统计失败", "来路统计失败"), console.log("collect source failed!", t);
                });
            }
        }, {
            key: "collectExport",
            value: function collectExport(t, e, i, s) {
                zs.configs.gameCfg.newAds ? this.collectExportNew(t, e, i, s) : this.collectExportOld(t);
            }
        }, {
            key: "collectExportNew",
            value: function collectExportNew(t, e, i, s) {
                if ("wx_" != zs.platform.config.platformMark || "undefined" == typeof wx) return;
                var a = l.NEWURL + "/" + zs.network.version + "/ad/jump", r = null;
                if (null != i && null != s) (r = {}).group_id = i, r.img_id = s; else if (e) for (var _i2 = 0, _s4 = t.imgs.length; _i2 < _s4; _i2++) {
                    if (t.imgs[_i2].icon == e) {
                        r = t.imgs[_i2];
                        break;
                    }
                }
                var n = {
                    user_id: zs.core.userId,
                    from_app_id: zs.core.appId,
                    to_app_id: t.app_id,
                    position: t.position_type,
                    group_id: null != r ? r.group_id : 0,
                    img_id: null != r ? r.img_id : 0,
                    event_id: zs.utils.getEventCode("export-" + zs.exporter.utils.navigateCount + "-" + t.app_id),
                    record: ""
                };
                zs.td.justTrack("跳转统计", "跳转统计"), zs.network.nativeRequest(a, n, "POST", !1).then(function(t) {
                    t && t.status && 1 == t.status || zs.td.justTrack("跳转统计失败", "跳转统计失败"), console.log("collect export success!", t);
                }).catch(function(t) {
                    zs.td.justTrack("跳转统计失败", "跳转统计失败"), console.log("collect export failed!", t);
                });
            }
        }, {
            key: "collectExportOld",
            value: function collectExportOld(t) {
                if ("wx_" != zs.platform.config.platformMark || "undefined" == typeof wx) return;
                var e = l.URL + "/api/appad_new/collect", i = Math.round(new Date().getTime() / 1e3).toString(), s = zs.platform.sync.getLaunchOptions(), a = {
                    user_id: zs.core.userId,
                    from_id: zs.core.appId,
                    to_id: t.app_id,
                    timestamp: i,
                    scene: zs.product.scene,
                    zhise: s && s.query && s.query.zhise ? s.query.zhise : "",
                    event_id: zs.utils.getEventCode("export-" + zs.exporter.utils.navigateCount + "-" + t.app_id)
                };
                zs.td.justTrack("跳转统计", "跳转统计"), zs.network.nativeRequest(e, a, "POST", !0, !1, !0).then(function(t) {
                    t && t.status && 1 == t.status || zs.td.justTrack("跳转统计失败", "跳转统计失败"), console.log("collect export success!", t);
                }).catch(function(t) {
                    zs.td.justTrack("跳转统计失败", "跳转统计失败"), console.log("collect export failed!", t);
                });
            }
        }, {
            key: "loadNew",
            value: function loadNew() {
                var _this = this;
                var t = l.NEWURL + "/" + zs.network.version + "/ad/list", e = {
                    appid: zs.configs.gameCfg.appId
                };
                return new zs.Coop(function(i, s) {
                    var a = l.getCache(l.exportCacheNew);
                    return a ? i(a) : l.cacheSetting ? (null == l.requestList && (l.requestList = []), 
                    void l.requestList.push(function(t) {
                        i(t);
                    })) : (l.cacheSetting = !0, zs.td.justTrack("拉取广告数据", "拉取广告数据"), void zs.network.nativeRequest(t, e, "POST", !0, !1).then(function(t) {
                        var e = [];
                        for (var _i3 in t) {
                            var _s5 = t[_i3];
                            if (null != _s5 && Array.isArray(_s5) && !(_s5.length <= 0)) {
                                var _loop = function _loop(_t4, _i4) {
                                    var i = {}, l = _s5[_t4];
                                    l.position_type = l.position, l.app_title = l.name, l.appid = l.app_id, i.info = l, 
                                    i.info.imgs && i.info.imgs.length > 0 && (i.img_index = zs.utils.randInt(0, i.info.imgs.length), 
                                    i.getIcon = function(t) {
                                        return t = t || 0, i.info.imgs[t % i.info.imgs.length].icon;
                                    }), e.push(i);
                                };
                                for (var _t4 = 0, _i4 = _s5.length; _t4 < _i4; _t4++) {
                                    _loop(_t4, _i4);
                                }
                            }
                        }
                        if (l.setCache(l.exportCacheNew, e), zs.log.debug("load success: ", "Exporter", e), 
                        l.requestList && l.requestList.length > 0) for (var _t5 = 0, _i5 = l.requestList.length; _t5 < _i5; _t5++) {
                            l.requestList[_t5].call(_this, e);
                        }
                        l.requestList = null, l.cacheSetting = !1, null == e || e.length <= 0 ? zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败") : zs.td.justTrack("拉取广告数据成功", "拉取广告数据成功"), 
                        i(e);
                    }).catch(function(t) {
                        var e = [];
                        if (l.requestList && l.requestList.length > 0) for (var _t6 = 0, _i6 = l.requestList.length; _t6 < _i6; _t6++) {
                            l.requestList[_t6].call(_this, e);
                        }
                        l.requestList = null, l.cacheSetting = !1, zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"), 
                        i(e);
                    }));
                });
            }
        }, {
            key: "loadOld",
            value: function loadOld() {
                var _this2 = this;
                var t = l.URL + "/api/appad_new/index", e = Math.round(new Date().getTime() / 1e3).toString(), i = {
                    appid: zs.configs.gameCfg.appId,
                    timestamp: e
                };
                return new zs.Coop(function(e, s) {
                    var a = l.getCache(l.exportCache);
                    return a ? e(a) : l.cacheSetting ? (null == l.requestList && (l.requestList = []), 
                    void l.requestList.push(function(t) {
                        e(t);
                    })) : (l.cacheSetting = !0, zs.td.justTrack("拉取广告数据", "拉取广告数据"), void zs.network.nativeRequest(t, i, "POST", !0, !1, !0).then(function(t) {
                        var i = [];
                        for (var _e4 in t) {
                            var _s6 = t[_e4];
                            if (null != _s6 && Array.isArray(_s6)) {
                                var _loop2 = function _loop2(_t7, _e5) {
                                    var e = {}, l = _s6[_t7];
                                    e.info = l;
                                    var a = !1;
                                    for (var _t8 = 0, _e6 = i.length; _t8 < _e6; _t8++) {
                                        var _e7 = i[_t8];
                                        if (_e7.info.appid == l.appid) {
                                            _e7.info.imgs || (_e7.info.imgs = [], _e7.info.imgs.push(_e7.info.app_icon)), _e7.info.imgs.push(l.app_icon), 
                                            _e7.img_index = zs.utils.randInt(0, _e7.info.imgs.length), a = !0;
                                            break;
                                        }
                                    }
                                    a || (e.getIcon = function(t) {
                                        return e.info.imgs ? (t = t || 0, e.info.imgs[t % e.info.imgs.length]) : e.info.app_icon;
                                    }, i.push(e));
                                };
                                for (var _t7 = 0, _e5 = _s6.length; _t7 < _e5; _t7++) {
                                    _loop2(_t7, _e5);
                                }
                            }
                        }
                        if (l.setCache(l.exportCache, i), zs.log.debug("load success: ", "Exporter", i), 
                        l.requestList && l.requestList.length > 0) for (var _t9 = 0, _e8 = l.requestList.length; _t9 < _e8; _t9++) {
                            l.requestList[_t9].call(_this2, i);
                        }
                        l.requestList = null, l.cacheSetting = !1, (null == i || i.length <= 0) && zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"), 
                        e(i);
                    }).catch(function(t) {
                        var i = [];
                        if (l.requestList && l.requestList.length > 0) for (var _t10 = 0, _e9 = l.requestList.length; _t10 < _e9; _t10++) {
                            l.requestList[_t10].call(_this2, i);
                        }
                        l.requestList = null, l.cacheSetting = !1, zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"), 
                        e(i);
                    }));
                });
            }
        }, {
            key: "load",
            value: function load() {
                return zs.configs.gameCfg.newAds ? this.loadNew() : this.loadOld();
            }
        }, {
            key: "cache",
            get: function get() {
                return null == this._cache && (this._cache = {}), this._cache;
            }
        } ]);
        return l;
    }();
    l.URL = "https://zsad.zxmn2018.com", l.NEWURL = "https://gamesapi.zxmn2018.com", 
    l.expireTime = 6e5, l.exportCache = "ExpCache", l.exportCacheNew = "ExpCacheNew";
    var a = /* */ function(_zs$fgui$base) {
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
            _this3._transition = null, _this3._bScrollExport = !1, t && t instanceof zs.ui.FGUI_list && (t.list.itemProvider = zs.proxy.Event.FGUIEvent((0, 
            _assertThisInitialized2.default)(_this3), _this3.onItemProvider), t.list.itemRenderer = zs.proxy.Event.FGUIEvent((0, 
            _assertThisInitialized2.default)(_this3), _this3.onItemRenderer), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_CLICK_ITEM, (0, 
            _assertThisInitialized2.default)(_this3), _this3.onClickItem), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_DOWN, (0, 
            _assertThisInitialized2.default)(_this3), _this3.onDragStateBegin), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_MOVE, (0, 
            _assertThisInitialized2.default)(_this3), _this3.onDragStateChanged));
            return _this3;
        }
        (0, _createClass2.default)(a, [ {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(a.prototype), "dispose", this).call(this), 
                this.startOffsetDelayHandler && clearTimeout(this.startOffsetDelayHandler), zs.Tween.clearAll(this.view), 
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
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowVertical).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setScrollType(fairygui.ScrollType.Horizontal).setColumnGap(25).setGridHeight(s).snapWidth().setAutoScrollSpeed(50).setDragRecoverTime(3).loop().setScrollExport().setMaxItems(a), 
                l.load().then(function(t) {
                    _this4.disposed || _this4.setDatas(t).apply();
                }).catch(function(t) {
                    return t;
                }), r ? this.apply() : this;
            }
        }, {
            key: "setVerticalList",
            value: function setVerticalList(t, s, a, r) {
                var _this5 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).snapHeight().setAutoScrollSpeed(50).setDragRecoverTime(3).loop().setMaxItems(a), 
                l.load().then(function(t) {
                    _this5.disposed || _this5.setDatas(t).apply();
                }).catch(function(t) {
                    return t;
                }), r ? this.apply() : this;
            }
        }, {
            key: "setSideList",
            value: function setSideList(t, s, a, r) {
                var _this6 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth(.7 * s).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).setListFit(!0).bounce(!1).setMaxItems(a), 
                l.load().then(function(t) {
                    _this6.disposed || (t && t.sort(function(t, e) {
                        return t < e ? -1 : 1;
                    }), _this6.setDatas(t).apply());
                }).catch(function(t) {
                    return t;
                }), r ? this.apply() : this;
            }
        }, {
            key: "setHorizontalGrid",
            value: function setHorizontalGrid(t, s, a, r, n, o) {
                var _this7 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth((s - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n), 
                l.load().then(function(t) {
                    _this7.disposed || _this7.setDatas(t).apply();
                }).catch(function(t) {
                    return t;
                }), o ? this.apply() : this;
            }
        }, {
            key: "setVerticalGrid",
            value: function setVerticalGrid(t, s, a, r, n, o) {
                var _this8 = this;
                return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setCellHeight((a - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n), 
                l.load().then(function(t) {
                    _this8.disposed || _this8.setDatas(t).apply();
                }).catch(function(t) {
                    return t;
                }), o ? this.apply() : this;
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
                return e && e.background && (Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(function(i) {
                    e.background.url = zs.ui.readURL(i, t[1]);
                }).catch(function(t) {
                    return t;
                }) : e.background.url = t), this;
            }
        }, {
            key: "setBackgroundAlpha",
            value: function setBackgroundAlpha(t) {
                return this.view && this.view.background && (this.view.background.alpha = t), this;
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
                return this._datas = zs.utils.arrayDeepCopy(t), this._datas.sort(function(t, e) {
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
            key: "setStartOffsetX",
            value: function setStartOffsetX(t) {
                return this._startoffsetx = t, this;
            }
        }, {
            key: "setStartOffsetY",
            value: function setStartOffsetY(t) {
                return this._startoffsety = t, this;
            }
        }, {
            key: "setStartOffsetTime",
            value: function setStartOffsetTime(t) {
                this._startoffsettime = t;
            }
        }, {
            key: "setStartOffsetDelay",
            value: function setStartOffsetDelay(t) {
                this._startoffsetdelay = t;
            }
        }, {
            key: "setStartFadeDelay",
            value: function setStartFadeDelay(t) {
                this._startfadedelay = t;
            }
        }, {
            key: "setStartFadeTime",
            value: function setStartFadeTime(t) {
                this._startfadetime = t;
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
                    var _e10 = t.list.width, _i7 = t.list.height;
                    t.width = _e10, t.height = _i7, t.list.width = _e10, t.list.height = _i7;
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
                var _this9 = this;
                var t = this.view;
                if (t && t.list && !this.disposed) {
                    t.list.handleSizeChanged();
                    var _e11 = this.margin;
                    this._effectWidth = this.gridWidth - _e11.left - _e11.right, this._effectHeight = this.gridHeight - _e11.top - _e11.bottom, 
                    this._effectWidth <= 0 || this._effectHeight <= 0 ? t.list.numItems = 0 : this.maxItems > 0 ? t.list.numItems = this._datas ? Math.min(this._datas.length, this._maxItems) : 0 : t.list.numItems = this._datas ? this._datas.length : 0, 
                    this._listFit && t.list.resizeToFit(t.list.numItems), 0 != this._autoScrollSpeed && (zs.Timer.inst.clear(this, this.onAutoScroll), 
                    zs.Timer.inst.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0), 
                    this._bScrollExport && (zs.proxy.Event.FGUIOff(t.list, zs.proxy.Event.FGUI_DRAG_START, this, this.scrollStart), 
                    zs.proxy.Event.FGUIOff(t.list, zs.proxy.Event.FGUI_DRAG_END, this, this.scrollJumpExport), 
                    zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_START, this, this.scrollStart), 
                    zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_END, this, this.scrollJumpExport)), 
                    this.shakeTime && this.shakeTime > 0 && zs.Timer.inst.once(this.shakeTime, this, this.refreshItem);
                }
                return null == this._startoffsetx && null == this._startoffsety || null != this.startOffsetDelayHandler || (this.startOffsetDelayHandler = setTimeout(function() {
                    var t = _this9.view.x + (_this9._startoffsetx || 0), e = _this9.view.y + (_this9._startoffsety || 0);
                    zs.Tween.to(_this9.view, {
                        x: t,
                        y: e
                    }, _this9._startoffsettime || 500, null, null, _this9._startoffsetdelay || 0);
                }, 1)), null == this._startfadedelay && null == this._startfadetime || (this.view.alpha = 0, 
                zs.Tween.to(this.view, {
                    alpha: 1
                }, this._startfadetime || 500, null, null, this._startfadedelay || 0), this._startfadedelay = null, 
                this._startfadetime = null), this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                if (t) {
                    null != t.scalex && this.setScaleX(t.scalex), null != t.scale_x && this.setScaleX(t.scale_x), 
                    null != t.scaley && this.setScaleY(t.scaley), null != t.scale_y && this.setScaleY(t.scale_y);
                    var _e12 = zs.fgui.configs.items[t.item];
                    if (t.mode && null != _e12) switch (t.mode) {
                      case "hlist":
                        null != t.height && this.setHorizontalList(_e12, t.height, t.max || 0, !1);
                        break;

                      case "vlist":
                        null != t.width && this.setVerticalList(_e12, t.width, t.max || 0, !1);
                        break;

                      case "hgrid":
                        null == t.width || null == t.height || null == t.linelimit && null == t.line_limit || this.setHorizontalGrid(_e12, t.width, t.height, null != t.line_limit ? t.line_limit : t.linelimit, t.max || 0, !1);
                        break;

                      case "vgrid":
                        null == t.width || null == t.height || null == t.columnlimit && null == t.column_limit || this.setVerticalGrid(_e12, t.width, t.height, null != t.column_limit ? t.column_limit : t.columnlimit, t.max || 0, !1);
                        break;

                      case "side":
                        null != t.width && this.setSideList(_e12, t.width, t.max || 0, !1);
                    }
                    null != t.adaptscale && this.setAdaptScale(t.adaptscale), null != t.adapt_scale && this.setAdaptScale(t.adapt_scale), 
                    null != t.listfit && this.setListFit(t.listfit), null != t.list_fit && this.setListFit(t.list_fit);
                    var _i8 = t.keep_ratio || t.keepratio;
                    if (_i8) switch (_i8) {
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
                    if (null != t.linecount && this.setLineCount(t.linecount), null != t.line_count && this.setLineCount(t.line_count), 
                    null != t.linegap && this.setLineGap(t.linegap), null != t.line_gap && this.setLineGap(t.line_gap), 
                    null != t.columncount && this.setColumnCount(t.columncount), null != t.column_count && this.setColumnCount(t.column_count), 
                    null != t.columngap && this.setColumnGap(t.columngap), null != t.column_gap && this.setColumnGap(t.column_gap), 
                    t.layout) switch (t.layout) {
                      case "singlecolumn":
                      case "single_column":
                      case "column":
                        this.setLayout(fairygui.ListLayoutType.SingleColumn);
                        break;

                      case "singlerow":
                      case "single_row":
                      case "row":
                        this.setLayout(fairygui.ListLayoutType.SingleRow);
                        break;

                      case "flowhorizontal":
                      case "flow_horizontal":
                      case "horizontal":
                        this.setLayout(fairygui.ListLayoutType.FlowHorizontal);
                        break;

                      case "flowvertical":
                      case "flow_vertical":
                      case "vertical":
                        this.setLayout(fairygui.ListLayoutType.FlowVertical);
                        break;

                      case "pagination":
                      case "page":
                        this.setLayout(fairygui.ListLayoutType.Pagniation);
                    }
                    null != t.cellwidth && this.setCellWidth(t.cellwidth), null != t.cell_width && this.setCellWidth(t.cell_width), 
                    null != t.cellheight && this.setCellHeight(t.cellheight), null != t.cell_height && this.setCellHeight(t.cell_height), 
                    null != t.x && this.setX(x), null != t.y && this.setY(y), null != t.gridwidth && this.setGridWidth(t.gridWidth), 
                    null != t.grid_width && this.setGridWidth(t.grid_width), null != t.gridheight && this.setGridHeight(t.gridHeight), 
                    null != t.grid_height && this.setGridHeight(t.grid_height), (t.snap_width || t.snapwidth) && this.snapWidth(), 
                    (t.snap_height || t.snapheight) && this.snapheight(), null != t.marginleft && this.setMarginLeft(t.marginleft), 
                    null != t.margin_left && this.setMarginLeft(t.margin_left), null != t.marginright && this.setMarginRight(t.marginright), 
                    null != t.margin_right && this.setMarginRight(t.margin_right), null != t.margintop && this.setMarginTop(t.margintop), 
                    null != t.margin_top && this.setMarginTop(t.margin_top), null != t.marginbottom && this.setMarginBottom(t.marginbottom), 
                    null != t.margin_bottom && this.setMarginBottom(t.margin_bottom), t.background && this.setBackground(t.background), 
                    null != t.backgroundalpha && this.setBackgroundAlpha(t.backgroundalpha), null != t.background_alpha && this.setBackgroundAlpha(t.background_alpha), 
                    _e12 && this.setItem(_e12), t.max && this.setMaxItems(t.max);
                    var _s7 = t.scroll_type || t.scrolltype;
                    if (_s7) switch (_s7) {
                      case "horizontal":
                        this.setScrollType(fairygui.ScrollType.Horizontal);
                        break;

                      case "vertical":
                        this.setScrollType(fairygui.ScrollType.Vertical);
                        break;

                      case "both":
                        this.setScrollType(fairygui.ScrollType.Both);
                    }
                    null != t.autoscrollspeed && this.setAutoScrollSpeed(t.autoscrollspeed), null != t.auto_scroll_speed && this.setAutoScrollSpeed(t.auto_scroll_speed), 
                    null != t.dragrecovertime && this.setDragRecoverTime(t.dragrecovertime), null != t.drag_recover_time && this.setDragRecoverTime(t.drag_recover_time), 
                    t.transition && this.setTransition(t.transition), t.fit && this.fit(), t.loop && this.loop(), 
                    t.virtual && this.virtual(), null != t.bounce && this.bounce(t.bounce), null != t.shaketime && this.setShakeTime(t.shaketime), 
                    null != t.shake_time && this.setShakeTime(t.shake_time), null != t.startoffsetx && this.setStartOffsetX(t.startoffsetx), 
                    null != t.start_offset_x && this.setStartOffsetX(t.start_offset_x), null != t.startoffsety && this.setStartOffsetY(t.startoffsety), 
                    null != t.start_offset_y && this.setStartOffsetY(t.start_offset_y), null != t.startoffsettime && this.setStartOffsetTime(t.startoffsettime), 
                    null != t.start_offset_time && this.setStartOffsetTime(t.start_offset_time), null != t.startoffsetdelay && this.setStartOffsetDelay(t.startoffsetdelay), 
                    null != t.start_offset_delay && this.setStartOffsetDelay(t.start_offset_delay), 
                    null != t.startfadedelay && this.setStartFadeDelay(t.startfadedelay), null != t.start_fade_delay && this.setStartFadeDelay(t.start_fade_delay), 
                    null != t.startfadetime && this.setStartFadeTime(t.startfadetime), null != t.start_fade_time && this.setStartFadeTime(t.start_fade_time);
                }
                return this.apply();
            }
        }, {
            key: "startShake",
            value: function startShake() {
                var _this10 = this;
                for (var _t11 = 0; _t11 < this.view.list.numChildren; _t11++) {
                    var _e13 = this.view.list.getChildAt(_t11);
                    this.shakeNode(_e13);
                }
                zs.Timer.inst.once(this.shakeTime, this, function() {
                    _this10.refreshItem();
                });
            }
        }, {
            key: "stopShake",
            value: function stopShake() {
                for (var _t12 = 0; _t12 < this.view.list.numChildren; _t12++) {
                    var _e14 = this.view.list.getChildAt(_t12);
                    zs.Tween.clearAll(_e14);
                }
            }
        }, {
            key: "refreshItem",
            value: function refreshItem() {
                this._datas.sort(function(t, e) {
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
                    t.rotation = 0, zs.Tween.to(t, {
                        rotation: 5
                    }, 50, null, zs.Handler.create(this, this.shakeNode, [ t, e ]));
                    break;

                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    zs.Tween.to(t, {
                        rotation: 10 * (e % 2 == 0 ? 1 : -1)
                    }, 100, null, zs.Handler.create(this, this.shakeNode, [ t, e ]));
                    break;

                  case 6:
                    zs.Tween.to(t, {
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
                    var _t13 = this._adaptScale ? this._effectWidth : i.width;
                    this._cellWidth > 0 && (_t13 = Math.min(_t13, this._cellWidth)), i.width = _t13;
                }
                if (this._cellHeight > 0 || this._adaptScale && i.height > this._effectHeight) {
                    var _t14 = this._adaptScale ? this._effectHeight : i.height;
                    this._cellHeight > 0 && (_t14 = Math.min(_t14, this._cellHeight)), i.height = _t14;
                }
                if (this.keepRatio == e.Horizontal ? i.height = i.width * (i.initHeight / i.initWidth) : this.keepRatio == e.Vertical && (i.width = i.height * (i.initWidth / i.initHeight)), 
                this._transition && this._transition.length >= 0) {
                    var _t15 = i.getTransition(this._transition);
                    _t15 && _t15.play();
                }
                this._itemRendererHandler ? this._itemRendererHandler.runWith([ i, s ]) : (i.picture && i.picture.icon && (i.picture.icon = s.getIcon(s.img_index)), 
                s.info.app_title && i.title ? i.title.text = s.info.app_title : i.title && (i.title.text = ""), 
                s.info.app_desc && i.desc ? i.desc.text = s.info.app_desc : i.desc && (i.desc.text = ""), 
                i.desc && (i.desc.text = "")), i.data = s;
            }
        }, {
            key: "onAutoScroll",
            value: function onAutoScroll() {
                var t = this.view;
                if (t && t.list) if (this._isAutoScrolling && this.scrollType != fairygui.ScrollType.Both) {
                    var _e15 = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward ? 1 : -1), _i9 = t.list.scrollPane;
                    this.scrollType == fairygui.ScrollType.Horizontal ? (_i9.setPosX(_e15 + t.list.scrollPane.posX), 
                    _i9.percX >= 1 ? this._autoScrollForward = !1 : _i9.percX <= 0 && (this._autoScrollForward = !0)) : (_i9.setPosY(_e15 + t.list.scrollPane.posY), 
                    _i9.percY >= 1 ? this._autoScrollForward = !1 : _i9.percY <= 0 && (this._autoScrollForward = !0));
                } else this.scrollType != fairygui.ScrollType.Both && (this._dragStopCount += .001 * zs.Timer.inst.delta, 
                this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0, this._isAutoScrolling = !0));
            }
        }, {
            key: "refreshSingleItem",
            value: function refreshSingleItem(t) {
                var e = this._datas[t];
                if (null != e.img_index) e.img_index++; else {
                    var i = Math.floor(Math.random() * this._datas.length);
                    if (this._datas.length > 1 && i == t) return this.refreshSingleItem(t);
                    var s = this._datas[i];
                    s && (this._datas[t] = s, this._datas[i] = e);
                }
                this.apply(), this.view.list._virtual && this.view.list.refreshVirtualList();
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(t) {
                var _this11 = this;
                this._clickHandler ? this._clickHandler.runWith(t) : (zs.td.justTrack("列表点击导出跳转", "列表点击导出跳转"), 
                s.navigateToMiniProgram(t.data, t.picture.icon).then(function() {
                    var e = _this11._datas.indexOf(t.data);
                    _this11.refreshSingleItem(e);
                }).catch(function(t) {
                    return t;
                }));
            }
        }, {
            key: "scrollStart",
            value: function scrollStart() {
                this.touchX = zs.proxy.Touch.touchX, this.touchY = zs.proxy.Touch.touchY;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport() {
                s.checkScroll(this.touchX, this.touchY, a.checkScrollDistance) && zs.product.get("zs_slide_jump_switch") && this.randomJumpExport();
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() {
                if (!this._datas || this._datas.length <= 0) return;
                var t = this._datas[Math.floor(Math.random() * this._datas.length)];
                zs.td.justTrack("列表随机导出跳转", "列表随机导出跳转"), s.navigateToMiniProgram(t);
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
                    var _s8 = t.list.align, _l = t.list.verticalAlign;
                    switch (_s8) {
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
            key: "backgroundAlpha",
            get: function get() {
                return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.background.alpha : 0;
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
        }, {
            key: "startOffsetX",
            get: function get() {
                return this._startoffsetx;
            }
        }, {
            key: "startOffsetY",
            get: function get() {
                return this._startoffsety;
            }
        }, {
            key: "startOffsetTime",
            get: function get() {
                return this._startoffsettime;
            }
        }, {
            key: "startOffsetDelay",
            get: function get() {
                return this._startoffsetdelay;
            }
        }, {
            key: "startFadeDelay",
            get: function get() {
                return this._startfadedelay;
            }
        }, {
            key: "startFadeTime",
            get: function get() {
                return this._startfadetime;
            }
        } ], [ {
            key: "make",
            value: function make() {
                return zs.ui.FGUI_list.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return zs.ui.FGUI_list;
            }
        } ]);
        return a;
    }(zs.fgui.base);
    a.checkScrollDistance = 30, a.AlignTop = zs.proxy.Configs.FGUI_AlignType_Top, a.AlignBottom = zs.proxy.Configs.FGUI_AlignType_Bottom, 
    a.AlignMiddle = zs.proxy.Configs.FGUI_AlignType_Middle, a.AlignLeft = zs.proxy.Configs.FGUI_AlignType_Left, 
    a.AlignRight = zs.proxy.Configs.FGUI_AlignType_Right, a.AlignCenter = zs.proxy.Configs.FGUI_AlignType_Center, 
    a.transitionShakeLeft = "shakeLeft", a.transitionShakeRight = "shakeRight";
    var r = /* */ function(_zs$fgui$base2) {
        (0, _inherits2.default)(r, _zs$fgui$base2);
        var _super2 = _createSuper(r);
        function r(t) {
            var _this12;
            (0, _classCallCheck2.default)(this, r);
            _this12 = _super2.call(this, t), r.gid++, _this12.fullId = r.gid, _this12.record = [];
            return _this12;
        }
        (0, _createClass2.default)(r, [ {
            key: "dispose",
            value: function dispose() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(r.prototype), "dispose", this).call(this), 
                zs.network.behavior(zs.utils.getEventCode("full-" + this.fullId), 3, JSON.stringify(this.record)), 
                this.record = [];
            }
        }, {
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
                return zs.product.get("zs_auto_jump_switch") && this.randomJumpExport(), this;
            }
        }, {
            key: "scrollJumpExport",
            value: function scrollJumpExport() {
                s.checkScroll(this.touchX, this.touchY, r.checkScrollDistance) && zs.product.get("zs_slide_jump_switch") && this.randomJumpExport();
            }
        }, {
            key: "randomJumpExport",
            value: function randomJumpExport() {}
        }, {
            key: "apply",
            value: function apply() {
                return this;
            }
        } ]);
        return r;
    }(zs.fgui.base);
    r.gid = 0, r.checkScrollDistance = 30, t.utils = s, t.dataMgr = l, t.list = a, t.loader = /* */ function(_zs$fgui$base3) {
        (0, _inherits2.default)(_class, _zs$fgui$base3);
        var _super3 = _createSuper(_class);
        function _class(t) {
            var _this13;
            (0, _classCallCheck2.default)(this, _class);
            _this13 = _super3.call(this, t), t.width = zs.configs.gameCfg.designWidth, t.height = zs.configs.gameCfg.designHeight, 
            t.alpha = 1, t.x = 0, t.y = 0, t.autoSize = !1, t.fill = fairygui.LoaderFillType.ScaleFree;
            return _this13;
        }
        (0, _createClass2.default)(_class, [ {
            key: "setURL",
            value: function setURL(t) {
                var _this14 = this;
                return Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(function(e) {
                    _this14.view.url = zs.ui.readURL(e, t[1]);
                }).catch(function(t) {
                    return t;
                }) : this.view.url = t, this;
            }
        }, {
            key: "setAlpha",
            value: function setAlpha(t) {
                return this.view.alpha = t, this;
            }
        }, {
            key: "setWidth",
            value: function setWidth(t) {
                return this.view.width = t, this;
            }
        }, {
            key: "setHeight",
            value: function setHeight(t) {
                return this.view.height = t, this;
            }
        }, {
            key: "setX",
            value: function setX(t) {
                return this.view.x = t, this;
            }
        }, {
            key: "setY",
            value: function setY(t) {
                return this.view.y = t, this;
            }
        }, {
            key: "setFill",
            value: function setFill(t) {
                var e = fairygui.LoaderFillType.ScaleFree;
                switch (t) {
                  case "scale":
                    e = fairygui.LoaderFillType.Scale;
                    break;

                  case "height":
                    e = fairygui.LoaderFillType.ScaleMatchHeight;
                    break;

                  case "width":
                    e = fairygui.LoaderFillType.ScaleMatchWidth;
                    break;

                  case "free":
                    e = fairygui.LoaderFillType.ScaleFree;
                    break;

                  case "noborder":
                    e = fairygui.LoaderFillType.ScaleNoBorder;
                    break;

                  case "none":
                    e = fairygui.LoaderFillType.None;
                }
                return this.view.fill = e, this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                return t && (null != t.alpha && this.setAlpha(t.alpha), t.url && this.setURL(t.url), 
                null != t.width && this.setWidth(t.width), null != t.height && this.setHeight(t.height), 
                null != t.x && this.setX(t.x), null != t.y && this.setY(t.y), t.fill && this.setFill(t.fill)), 
                this;
            }
        }, {
            key: "url",
            get: function get() {
                return this.view.url;
            }
        }, {
            key: "alpha",
            get: function get() {
                return this.view.alpha;
            }
        }, {
            key: "width",
            get: function get() {
                return this.view.width;
            }
        }, {
            key: "height",
            get: function get() {
                return this.view.height;
            }
        }, {
            key: "x",
            get: function get() {
                return this.view.x;
            }
        }, {
            key: "y",
            get: function get() {
                return this.view.y;
            }
        }, {
            key: "fill",
            get: function get() {
                var t = "free";
                switch (this.view.fill) {
                  case fairygui.LoaderFillType.None:
                    t = "none";
                    break;

                  case fairygui.LoaderFillType.Scale:
                    t = "scale";
                    break;

                  case fairygui.LoaderFillType.ScaleMatchHeight:
                    t = "height";
                    break;

                  case fairygui.LoaderFillType.ScaleMatchWidth:
                    t = "width";
                    break;

                  case fairygui.LoaderFillType.ScaleFree:
                    t = "free";
                    break;

                  case fairygui.LoaderFillType.ScaleNoBorder:
                    t = "noborder";
                }
                return t;
            }
        } ], [ {
            key: "make",
            value: function make() {
                return new fairygui.GLoader();
            }
        } ]);
        return _class;
    }(zs.fgui.base), t.background = /* */ function(_zs$fgui$base4) {
        (0, _inherits2.default)(_class2, _zs$fgui$base4);
        var _super4 = _createSuper(_class2);
        function _class2(t) {
            var _this15;
            (0, _classCallCheck2.default)(this, _class2);
            _this15 = _super4.call(this, t), t.width = zs.configs.gameCfg.designWidth, t.height = zs.configs.gameCfg.designHeight, 
            t.alpha = .5, t.x = 0, t.y = 0, t.drawRect(0, zs.proxy.color("#000000"), zs.proxy.color("#000000"));
            return _this15;
        }
        (0, _createClass2.default)(_class2, [ {
            key: "setColor",
            value: function setColor(t) {
                return this.view.color = zs.proxy.color(t), this;
            }
        }, {
            key: "setAlpha",
            value: function setAlpha(t) {
                return this.view.alpha = t, this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                return t && (t.color && this.setColor(t.color), null != t.alpha && this.setAlpha(t.alpha)), 
                this;
            }
        }, {
            key: "color",
            get: function get() {
                return this.view.color;
            }
        }, {
            key: "alpha",
            get: function get() {
                return this.view.alpha;
            }
        } ], [ {
            key: "make",
            value: function make() {
                return new fairygui.GGraph();
            }
        } ]);
        return _class2;
    }(zs.fgui.base), t.banner = /* */ function(_zs$fgui$base5) {
        (0, _inherits2.default)(_class3, _zs$fgui$base5);
        var _super5 = _createSuper(_class3);
        function _class3(t) {
            var _this16;
            (0, _classCallCheck2.default)(this, _class3);
            _this16 = _super5.call(this, t), t.width = zs.platform.config.bannerWidth ? zs.platform.config.bannerWidth : 600, 
            t.height = zs.platform.config.bannerHeight ? zs.platform.config.bannerHeight : 200, 
            t.drawRect(0, zs.proxy.color("#888888"), zs.proxy.color("#888888"));
            return _this16;
        }
        (0, _createClass2.default)(_class3, [ {
            key: "setWidth",
            value: function setWidth(t) {
                this.view.width = t;
            }
        }, {
            key: "setHeight",
            value: function setHeight(t) {
                this.view.height = t;
            }
        }, {
            key: "width",
            get: function get() {
                return this.view.width;
            }
        }, {
            key: "height",
            get: function get() {
                return this.view.height;
            }
        } ], [ {
            key: "make",
            value: function make() {
                return new fairygui.GGraph();
            }
        } ]);
        return _class3;
    }(zs.fgui.base), t.button = /* */ function(_zs$fgui$base6) {
        (0, _inherits2.default)(_class4, _zs$fgui$base6);
        var _super6 = _createSuper(_class4);
        (0, _createClass2.default)(_class4, null, [ {
            key: "make",
            value: function make() {
                return new fairygui.GButton();
            }
        } ]);
        function _class4(t) {
            var _this17;
            (0, _classCallCheck2.default)(this, _class4);
            _this17 = _super6.call(this, t), t.width = 300, t.height = 80, t._downEffect = 2, 
            t._downEffectValue = .9, zs.proxy.Event.FGUIButtonTouchBegin(t), t.setPivot(.5, .5, !0), 
            zs.proxy.Event.FGUIOnClick(t, (0, _assertThisInitialized2.default)(_this17), _this17.onClicked);
            var e = new fairygui.GLoader();
            e.x = 0, e.y = 0, e.width = t.width, e.height = t.height, e.addRelation(t, fairygui.RelationType.Width), 
            e.addRelation(t, fairygui.RelationType.Height), e.alpha = 1, e.autoSize = !1, e.fill = fairygui.LoaderFillType.ScaleFree, 
            t.addChild(e), _this17.icon = e, _this17.setURL([ zs.fgui.configs.pack_basic, "msg_background" ]);
            var i = new zs.proxy.FGUITextField();
            i.autoSize = fairygui.AutoSizeType.None, i.x = 0, i.y = 0, i.width = t.width, i.height = t.height, 
            i.addRelation(t, fairygui.RelationType.Width), i.addRelation(t, fairygui.RelationType.Height), 
            i.singleLine = !0, i.fontSize = 36, i.align = zs.proxy.Configs.FGUI_AlignType_Center, 
            i.valign = zs.proxy.Configs.FGUI_AlignType_Middle, i.color = zs.proxy.color("#000000"), 
            t.addChild(i), _this17.title = i;
            return _this17;
        }
        (0, _createClass2.default)(_class4, [ {
            key: "dispose",
            value: function dispose() {
                zs.Tween.clearAll(this.view), this.fakeDelayHandler && clearTimeout(this.fakeDelayHandler), 
                this.clickDelayHandler && clearTimeout(this.clickDelayHandler), this.offsetDelayHandler && clearTimeout(this.offsetDelayHandler), 
                (0, _get2.default)((0, _getPrototypeOf2.default)(_class4.prototype), "dispose", this).call(this);
            }
        }, {
            key: "setURL",
            value: function setURL(t) {
                var _this18 = this;
                return this.icon && (Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(function(e) {
                    _this18.icon.url = zs.ui.readURL(e, t[1]);
                }).catch(function(t) {
                    return t;
                }) : this.icon.url = t), this;
            }
        }, {
            key: "setAlpha",
            value: function setAlpha(t) {
                return this.icon && (this.icon.alpha = t), this;
            }
        }, {
            key: "setWidth",
            value: function setWidth(t) {
                return this.view.width = t, this;
            }
        }, {
            key: "setHeight",
            value: function setHeight(t) {
                return this.view.height = t, this;
            }
        }, {
            key: "setFont",
            value: function setFont(t) {
                return this.title && (this.title.font = t), this;
            }
        }, {
            key: "setFontSize",
            value: function setFontSize(t) {
                return this.title && (this.title.fontSize = t), this;
            }
        }, {
            key: "setText",
            value: function setText(t) {
                return this.title && (this.title.text = t), this;
            }
        }, {
            key: "setFontColor",
            value: function setFontColor(t) {
                return this.title && (this.title.color = zs.proxy.color(t)), this;
            }
        }, {
            key: "setSwitch",
            value: function setSwitch(t, e) {
                return zs.core.workflow ? this._switch = zs.core.workflow.checkSwitch(t, e) : this._switch = !1, 
                this;
            }
        }, {
            key: "setFill",
            value: function setFill(t) {
                if (!this.icon) return;
                var e = fairygui.LoaderFillType.ScaleFree;
                switch (t) {
                  case "scale":
                    e = fairygui.LoaderFillType.Scale;
                    break;

                  case "height":
                    e = fairygui.LoaderFillType.ScaleMatchHeight;
                    break;

                  case "width":
                    e = fairygui.LoaderFillType.ScaleMatchWidth;
                    break;

                  case "free":
                    e = fairygui.LoaderFillType.ScaleFree;
                    break;

                  case "noborder":
                    e = fairygui.LoaderFillType.ScaleNoBorder;
                    break;

                  case "none":
                    e = fairygui.LoaderFillType.None;
                }
                return this.icon.fill = e, this;
            }
        }, {
            key: "setAutoFade",
            value: function setAutoFade(t) {
                return this.autofade = t, this.isFading = !1, this;
            }
        }, {
            key: "setAutoFadeTime",
            value: function setAutoFadeTime(t) {
                return this.autofadetime = t, this;
            }
        }, {
            key: "setAutoOffset",
            value: function setAutoOffset(t) {
                return this.autooffset = t, this;
            }
        }, {
            key: "setOffsetX",
            value: function setOffsetX(t) {
                return this.offsetx = t, this;
            }
        }, {
            key: "setOffsetY",
            value: function setOffsetY(t) {
                return this.offsety = t, this;
            }
        }, {
            key: "setOffsetTime",
            value: function setOffsetTime(t) {
                return this.offsettime = t, this;
            }
        }, {
            key: "setClickIgnore",
            value: function setClickIgnore(t) {
                return this.clickignore = t, this;
            }
        }, {
            key: "setClickAlways",
            value: function setClickAlways(t) {
                return this.clickalways = t, this;
            }
        }, {
            key: "setFakeDelay",
            value: function setFakeDelay(t) {
                return this.fakedelay = t, this;
            }
        }, {
            key: "setFakeEvent",
            value: function setFakeEvent(t) {
                return this.fakeevent = t, this;
            }
        }, {
            key: "setEvent",
            value: function setEvent(t) {
                return this.event = t, this;
            }
        }, {
            key: "onClicked",
            value: function onClicked() {
                var _this19 = this;
                if (null != this.autooffset || null != this.autofade || this.ignoreClick) return;
                this.ignoreClick = !0;
                var t = !1;
                if (this.switch && zs.core.workflow && (t = zs.core.workflow.checkSwitch(this.switch)), 
                t && (this.offsetx || this.offsety)) {
                    var _t16 = this.view.x + (this.offsetx || 0) * this.view.scaleX, _e16 = this.view.y + (this.offsety || 0) * this.view.scaleY;
                    zs.Tween.to(this.view, {
                        x: _t16,
                        y: _e16
                    }, this.offsettime || 0, null, zs.Handler.create(this, function() {
                        _this19.ignoreClick = !1;
                    }), Number(zs.product.get("zs_button_delay_time"))), this.offsetx = null, this.offsety = null, 
                    this.onFakeClicked();
                } else t && this.clickignore ? (this.clickDelayHandler = setTimeout(function() {
                    _this19.ignoreClick = !1;
                }, Number(zs.product.get("zs_button_delay_time"))), this.clickignore = null, this.onFakeClicked()) : (this.clickalways && (this.ignoreClick = !1), 
                this.event && zs.core.workflow && zs.core.workflow.runEventConfig(this.event));
            }
        }, {
            key: "onFakeClicked",
            value: function onFakeClicked() {
                var _this20 = this;
                if (this.fakeevent) {
                    var _t17 = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.fakedelay) : null;
                    !_t17 || "number" != typeof _t17 || _t17 <= 0 ? zs.core.workflow.runEventConfig(this.fakeevent) : (this.readyEvent = this.fakeevent, 
                    this.fakeDelayHandler = setTimeout(function() {
                        zs.core.workflow.runEventConfig(_this20.readyEvent), _this20.readyEvent = null;
                    }, _t17)), this.fakeevent = null;
                }
            }
        }, {
            key: "autoOffset",
            value: function autoOffset() {
                var _this21 = this;
                var t = !1;
                if (this.switch && zs.core.workflow && (t = zs.core.workflow.checkSwitch(this.switch)), 
                !t || null == this.autooffset || null == this.offsetx && null == this.offsety) this.autooffset = null, 
                this.view.x += (this.offsetx || 0) * this.view.scaleX, this.view.y += (this.offsety || 0) * this.view.scaleY; else {
                    var _t18 = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.autooffset) : null;
                    (!_t18 || "number" != typeof _t18 || _t18 <= 0) && (_t18 = 0);
                    var _e17 = this.view.x + (this.offsetx || 0) * this.view.scaleX, _i10 = this.view.y + (this.offsety || 0) * this.view.scaleY;
                    zs.Tween.to(this.view, {
                        x: _e17,
                        y: _i10
                    }, this.offsettime || 0, null, zs.Handler.create(this, function() {
                        _this21.autooffset = null;
                    }), _t18), this.clickignore = null, this.offsetx = null, this.offsety = null;
                }
            }
        }, {
            key: "autoFade",
            value: function autoFade() {
                var _this22 = this;
                if (null != this.autofade) {
                    var _t19 = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.autofade) : null;
                    (!_t19 || "number" != typeof _t19 || _t19 <= 0) && (_t19 = 0), zs.Tween.to(this.view, {
                        alpha: 1
                    }, this.autofadetime || 0, null, zs.Handler.create(this, function() {
                        _this22.ignoreClick = !1, _this22.autofade = null;
                    }), _t19);
                }
            }
        }, {
            key: "apply",
            value: function apply() {
                var _this23 = this;
                return null != this.autooffset && null == this.offsetDelayHandler && (this.offsetDelayHandler = setTimeout(function() {
                    _this23.autoOffset();
                }, 1)), null == this.autofade || this.isFading || (this.view.alpha = 0, this.ignoreClick = !0, 
                this.autoFade(), this.isFading = !0), this;
            }
        }, {
            key: "applyConfig",
            value: function applyConfig(t) {
                return t && (t.url && this.setURL(t.url), t.fill && this.setFill(t.fill), null != t.alpha && this.setAlpha(t.alpha), 
                null != t.width && this.setWidth(t.width), null != t.height && this.setHeight(t.height), 
                t.font && this.setFont(t.font), null != t.fontsize && this.setFontSize(t.fontsize), 
                null != t.font_size && this.setFontSize(t.font_size), t.fontcolor && this.setFontColor(t.fontcolor), 
                t.font_color && this.setFontColor(t.font_color), t.text && this.setText(t.text), 
                null != t.autofade && this.setAutoFade(t.autofade), null != t.auto_fade && this.setAutoFade(t.auto_fade), 
                null != t.autofadetime && this.setAutoFadeTime(t.autofadetime), null != t.auto_fade_time && this.setAutoFadeTime(t.auto_fade_time), 
                null != t.autooffset && this.setAutoOffset(t.autooffset), null != t.auto_offset && this.setAutoOffset(t.auto_offset), 
                null != t.offsetx && this.setOffsetX(t.offsetx), null != t.offset_x && this.setOffsetX(t.offset_x), 
                null != t.offsety && this.setOffsetY(t.offsety), null != t.offset_y && this.setOffsetY(t.offset_y), 
                null != t.offsettime && this.setOffsetTime(t.offsettime), null != t.offset_time && this.setOffsetTime(t.offset_time), 
                t.clickignore && this.setClickIgnore(t.clickignore), t.click_ignore && this.setClickIgnore(t.click_ignore), 
                t.clickalways && this.setClickAlways(t.clickalways), t.click_always && this.setClickAlways(t.click_always), 
                null != t.fakedelay && this.setFakeDelay(t.fakedelay), null != t.fake_delay && this.setFakeDelay(t.fake_delay), 
                t.fakeevent && this.setFakeEvent(t.fakeevent), t.fake_event && this.setFakeEvent(t.fake_event), 
                t.event && this.setEvent(t.event), (t.switch || t.check) && this.setSwitch(t.switch, t.check)), 
                this.apply();
            }
        }, {
            key: "url",
            get: function get() {
                return this.icon ? this.icon.url : null;
            }
        }, {
            key: "alpha",
            get: function get() {
                return this.icon ? this.icon.alpha : null;
            }
        }, {
            key: "width",
            get: function get() {
                return this.view.width;
            }
        }, {
            key: "height",
            get: function get() {
                return this.view.height;
            }
        }, {
            key: "font",
            get: function get() {
                return this.title ? this.title.font : null;
            }
        }, {
            key: "fontsize",
            get: function get() {
                return this.title ? this.title.fontSize : 0;
            }
        }, {
            key: "text",
            get: function get() {
                return this.title ? this.title.text : null;
            }
        }, {
            key: "fontcolor",
            get: function get() {
                return this.title ? this.title.color : null;
            }
        }, {
            key: "switch",
            get: function get() {
                return this._switch;
            }
        }, {
            key: "fill",
            get: function get() {
                if (!this.icon) return null;
                var t = "free";
                switch (this.icon.fill) {
                  case fairygui.LoaderFillType.None:
                    t = "none";
                    break;

                  case fairygui.LoaderFillType.Scale:
                    t = "scale";
                    break;

                  case fairygui.LoaderFillType.ScaleMatchHeight:
                    t = "height";
                    break;

                  case fairygui.LoaderFillType.ScaleMatchWidth:
                    t = "width";
                    break;

                  case fairygui.LoaderFillType.ScaleFree:
                    t = "free";
                    break;

                  case fairygui.LoaderFillType.ScaleNoBorder:
                    t = "noborder";
                }
                return t;
            }
        } ]);
        return _class4;
    }(zs.fgui.base), t.full = r, t.AlignType = i, t.AdaptType = e;
}(window.zs.exporter = window.zs.exporter || {});