!function () {
    var _get2 = require("../../runtime/helpers/get");

    var _getPrototypeOf2 = require("../../runtime/helpers/getPrototypeOf");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    var _inherits2 = require("../../runtime/helpers/inherits");

    var _createSuper2 = require("../../runtime/helpers/createSuper");

    window.zs = window.zs || {}, window.zs.ui = window.zs.ui || {}, function (t) {
        "use strict";
        var e = /* */ function (_fairygui$GComponent) {
            _inherits2(e, _fairygui$GComponent);
            var _super = _createSuper2(e);
            function e() {
                var _this;
                _classCallCheck2(this, e);
                _this = _super.apply(this, arguments), _this.picture = null, _this.desc = null,
                    _this.title = null, _this.data = null;
                return _this;
            }
            _createClass2(e, null, [{
                key: "createInstance",
                value: function createInstance() {
                    return null;
                }
            }]);
            return e;
        }(fairygui.GComponent);
        e.URL = null;
        var s = /* */ function (_fairygui$GComponent2) {
            _inherits2(s, _fairygui$GComponent2);
            var _super2 = _createSuper2(s);
            function s() {
                _classCallCheck2(this, s);
                return _super2.apply(this, arguments);
            }
            _createClass2(s, [{
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
        var n = /* */ function (_fairygui$GComponent3) {
            _inherits2(n, _fairygui$GComponent3);
            var _super3 = _createSuper2(n);
            function n() {
                _classCallCheck2(this, n);
                return _super3.apply(this, arguments);
            }
            _createClass2(n, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.state = this.getController("state"), this.title = this.getChild("title"), this.content = this.getChild("content"),
                        this.btn_confirm = this.getChild("btn_confirm"), this.btn_cancel = this.getChild("btn_cancel");
                }
            }], [{
                key: "bind",
                value: function bind(t) {
                    zs.ui.bind(t, this.itemName, n), this.pack = t;
                }
            }, {
                key: "createInstance",
                value: function createInstance() {
                    return fairygui.UIPackage.createObject(this.pack.name, this.itemName);
                }
            }]);
            return n;
        }(fairygui.GComponent);
        n.itemName = "msgbox";
        var i = /* */ function (_fairygui$GComponent4) {
            _inherits2(i, _fairygui$GComponent4);
            var _super4 = _createSuper2(i);
            function i() {
                _classCallCheck2(this, i);
                return _super4.apply(this, arguments);
            }
            _createClass2(i, null, [{
                key: "createInstance",
                value: function createInstance() {
                    var t = new fairygui.GComponent();
                    t.width = fairygui.GRoot.inst.width, t.height = fairygui.GRoot.inst.height;
                    var e = new fairygui.GGraph();
                    e.drawRect(0, zs.proxy.color("#000000"), zs.proxy.color("#000000")), t.addChild(e),
                        e.x = .25 * -t.width, e.y = .25 * -t.height, e.width = 2 * t.width, e.height = 2 * t.height;
                    var s = new fairygui.GTextField();
                    return s.pivotX = .5, s.pivotY = .5, s.x = .5 * t.width, s.y = .5 * t.height, s.addRelation(t, fairygui.RelationType.Center_Center),
                        s.addRelation(t, fairygui.RelationType.Middle_Middle), s.fontSize = 100, s.text = "",
                        s.color = zs.proxy.color("#FFFFFF"), t.loadingValue = t.addChild(s), t;
                }
            }]);
            return i;
        }(fairygui.GComponent);
        i.itemName = "loading";
        var r = /* */ function (_zs$fgui$base) {
            _inherits2(r, _zs$fgui$base);
            var _super5 = _createSuper2(r);
            function r(t) {
                var _this2;
                _classCallCheck2(this, r);
                _this2 = _super5.call(this, t), _this2.clickPercent = .14, _this2.rollbackPercent = .01,
                    _this2.rollbackInterval = 20, _this2.bannerTime = 3e3, _this2.bannerRange = [.3, .7],
                    _this2.awardDelay = [1e3, 1e3], _this2.closeDelay = [1e3, 1040], _this2.btnSrcOffset = 0,
                    _this2.btnDstOffset = 370, _this2.btnOffsetDelay = 800, _this2.btnOffsetTime = 500,
                    _this2.btnIgnoreOffset = !1;
                return _this2;
            }
            _createClass2(r, [{
                key: "btnKnock",
                get: function get() {
                    return null;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    zs.Timer.inst.clearAll(this), zs.Tween.clearAll(this.btnKnock), zs.core.removeAppShow(zs.Handler.create(this, this.onAppShow)),
                        zs.core.removeAppHide(zs.Handler.create(this, this.onAppHide)), this.btnKnock && this.btnKnock.offClick && zs.proxy.Event.FGUIOffClick(this.btnKnock, this, this.onClick),
                        this.onDispose(), _get2(_getPrototypeOf2(r.prototype), "dispose", this).call(this);
                }
            }, {
                key: "onAppShow",
                value: function onAppShow() {
                    this.isOpenAd && (zs.product.get("zs_ready_click_two") || this.onFinish());
                }
            }, {
                key: "onAppHide",
                value: function onAppHide() {
                    this.isOpenAd && (this.isOpenAd = !0);
                }
            }, {
                key: "apply",
                value: function apply() {
                    return this.progress = 0, this.rollbackNext = 0, this.isOpenAd = !1, this.isGetAward = !1,
                        this.bannerPoint = .01 * zs.utils.randInt(100 * this.bannerRange[0], 100 * this.bannerRange[1]),
                        zs.core.addAppShow(zs.Handler.create(this, this.onAppShow, null, !1)), zs.core.addAppHide(zs.Handler.create(this, this.onAppHide, null, !1)),
                        this.btnKnock && this.btnKnock.onClick && zs.proxy.Event.FGUIOnClick(this.btnKnock, this, this.onClick),
                        this.btnKnock && this.btnKnock.y && (this.btnKnock.y += this.btnSrcOffset), zs.Timer.inst.loop(1, this, this.tick),
                        this.updateProgress(this.progress), zs.EggKnock && zs.EggKnock.markReadyNum(!0),
                        this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.clickpercent && (this.clickPercent = t.clickpercent), null != t.click_percent && (this.clickPercent = t.click_percent),
                        null != t.rollbackpercent && (this.rollbackPercent = t.rollbackpercent), null != t.rollback_percent && (this.rollbackPercent = t.rollback_percent),
                        null != t.rollbackinterval && (this.rollbackInterval = t.rollbackinterval), null != t.rollback_interval && (this.rollbackInterval = t.rollback_interval),
                        null != t.bannerrange && Array.isArray(t.bannerrange) && t.bannerrange.length >= 2 && (this.bannerRange = t.bannerrange),
                        null != t.banner_range && Array.isArray(t.banner_range) && t.banner_range.length >= 2 && (this.bannerRange = t.banner_range),
                        null != t.awarddelay && Array.isArray(t.awarddelay) && t.awarddelay.length >= 2 && (this.awardDelay = t.awarddelay),
                        null != t.award_delay && Array.isArray(t.award_delay) && t.award_delay.length >= 2 && (this.awardDelay = t.award_delay),
                        null != t.closedelay && Array.isArray(t.closedelay) && t.closedelay.length >= 2 && (this.closeDelay = t.closedelay),
                        null != t.close_delay && Array.isArray(t.close_delay) && t.close_delay.length >= 2 && (this.closeDelay = t.close_delay),
                        null != t.btnsrcoffset && (this.btnSrcOffset = t.btnsrcoffset), null != t.btn_src_offset && (this.btnSrcOffset = t.btn_src_offset),
                        null != t.btndstoffset && (this.btnDstOffset = t.btndstoffset), null != t.btn_dst_offset && (this.btnDstOffset = t.btn_dst_offset),
                        null != t.btnoffsetdelay && (this.btnOffsetDelay = t.btnoffsetdelay), null != t.btn_offset_delay && (this.btnOffsetDelay = t.btn_offset_delay),
                        null != t.btnoffsettime && (this.btnOffsetTime = t.btnoffsettime), null != t.btn_offset_time && (this.btnOffsetTime = t.btn_offset_time),
                        null != t.btnignoreoffset && (this.btnIgnoreOffset = t.btnignoreoffset), null != t.btn_ignore_offset && (this.btnIgnoreOffset = t.btn_ignore_offset),
                        t.awardevent && (this.awardEvent = t.awardevent), t.award_event && (this.awardEvent = t.award_event),
                        t.closeevent && (this.closeEvent = t.closeevent), t.close_event && (this.closeEvent = t.close_event)),
                        this.apply();
                }
            }, {
                key: "tick",
                value: function tick() {
                    var t = zs.Timer.inst.delta;
                    this.isOpenAd && this.bannerTime > 0 && this.bannerCount > 0 && (this.bannerCount -= t,
                        this.bannerCount <= 0 && (zs.platform.sync.hideBanner(), this.onFinish())), this.bannerTime <= 0 && this.btnOffsetCount && this.btnOffsetCount > 0 && (this.btnOffsetCount -= t,
                            this.btnOffsetCount <= 0 && (this.btnKnock && this.btnKnock.y && !this.btnIgnoreOffset && zs.Tween.to(this.btnKnock, {
                                y: this.btnKnock.y - this.btnDstOffset
                            }, this.btnOffsetTime), this.btnOffsetCount = null)), this.isGetAward ? (null != this.awardCount && this.awardCount > 0 && (this.awardCount -= t,
                                this.awardCount <= 0 && (this.awardEvent && zs.core.workflow.runEventConfig(this.awardEvent),
                                    this.awardHandler && this.awardHandler.run(), this.awardCount = null)), null != this.closeCount && this.closeCount > 0 && (this.closeCount -= t,
                                        this.closeCount <= 0 && (this.awardCount && this.awardHandler && this.awardHandler.run(),
                                            this.awardCount = null, this.closeEvent && zs.core.workflow.runEventConfig(this.closeEvent),
                                            this.closeHandler && this.closeHandler.run(), this.closeCount = null))) : (this.rollbackNext <= 0 ? (this.progress -= this.rollbackPercent,
                                                this.rollbackNext = this.rollbackInterval) : this.rollbackNext -= t, this.clicked && (this.onBannerCheck(),
                                                    this.progress += this.clickPercent, this.handleClick(this.progress)), this.clicked = !1,
                                                this.progress = Math.min(1, Math.max(0, this.progress)), this.updateProgress(this.progress),
                                                this.progress >= .999999 && this.onFinish());
                }
            }, {
                key: "onClick",
                value: function onClick() {
                    this.clicked = !0;
                }
            }, {
                key: "onHandleClick",
                value: function onHandleClick(t) { }
            }, {
                key: "handleClick",
                value: function handleClick(t) {
                    t >= this.bannerPoint && !this.isOpenAd && (this.isOpenAd = !0, this.bannerCount = this.bannerTime,
                        zs.platform.sync.showBanner(), this.startButtonOffset());
                }
            }, {
                key: "startButtonOffset",
                value: function startButtonOffset() {
                    this.btnOffsetCount = this.btnOffsetDelay;
                }
            }, {
                key: "updateProgress",
                value: function updateProgress(t) { }
            }, {
                key: "setEventHandler",
                value: function setEventHandler(t, e) {
                    return this.awardHandler = t, this.closeHandler = e, this;
                }
            }, {
                key: "onFinish",
                value: function onFinish() {
                    this.isGetAward || (this.onGetAward(), this.isGetAward = !0, this.awardCount = zs.utils.randInt(this.awardDelay[0], this.awardDelay[1]),
                        this.closeCount = zs.utils.randInt(this.closeDelay[0], this.closeDelay[1]));
                }
            }, {
                key: "onBannerCheck",
                value: function onBannerCheck() { }
            }, {
                key: "onGetAward",
                value: function onGetAward() {
                    zs.EggKnock && zs.EggKnock.markAwardNum(!0);
                }
            }, {
                key: "onDispose",
                value: function onDispose() { }
            }], [{
                key: "checkEggOpen",
                value: function checkEggOpen(t) {
                    return !!zs.EggKnock && zs.EggKnock.checkEggOpen(t);
                }
            }]);
            return r;
        }(zs.fgui.base);
        r.inited = !1;
        var a = /* */ function (_zs$fgui$base2) {
            _inherits2(a, _zs$fgui$base2);
            var _super6 = _createSuper2(a);
            function a() {
                var _this3;
                _classCallCheck2(this, a);
                _this3 = _super6.apply(this, arguments), _this3.progressTime = .01, _this3.progressCount = 0,
                    _this3.current = 0, _this3.progress = 0;
                return _this3;
            }
            _createClass2(a, [{
                key: "init",
                value: function init() {
                    this.updateProgress(0);
                }
            }, {
                key: "updateProgress",
                value: function updateProgress(t) {
                    this.view && (this.view.loadingValue.text = t * 0.8 + "%");
                }
            }, {
                key: "run",
                value: function run(t) {
                    if (this.progress = t, this.current < this.progress) {
                        this.progressCount += .001 * zs.Timer.inst.delta;
                        var _t = Math.round(this.progressCount / this.progressTime);
                        this.progressCount -= _t * this.progressTime, this.current + _t >= this.progress ? this.current = this.progress : this.current = this.current + _t,
                            this.updateProgress(this.current * 0.8);
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
            return a;
        }(zs.fgui.base);
        a.typeDefine = i;
        t.bind = function (t, e, s) {
            if (null == t) return void zs.log.warn("资源包为空，无法绑定模板 " + e);
            var n = t.getItemByName(e);
            if (null == n) return void zs.log.warn("指定资源包（" + t.name + "）中不存在" + e + "组件，无法绑定指定模板");
            var i = "ui://" + t.id + n.id;
            zs.proxy.setFGUIExtension(i, s);
        }, t.readURL = function (t, e) {
            if (null == t) return null;
            var s = t.getItemByName(e);
            return null == s ? null : "ui://" + t.id + s.id;
        }, t.FGUI_item = e, t.FGUI_list = s, t.FGUI_msgbox = n, t.FGUI_Loading = i, t.EggKnock = r,
            t.Loading = a, t.LayaLoading = /* */ function (_zs$proxy$NativeLoadi) {
                _inherits2(_class, _zs$proxy$NativeLoadi);
                var _super7 = _createSuper2(_class);
                function _class() {
                    _classCallCheck2(this, _class);
                    return _super7.apply(this, arguments);
                }
                return _class;
            }(zs.proxy.NativeLoading), t.UIScene = /* */ function (_zs$proxy$UIScene) {
                _inherits2(_class2, _zs$proxy$UIScene);
                var _super8 = _createSuper2(_class2);
                function _class2() {
                    _classCallCheck2(this, _class2);
                    return _super8.apply(this, arguments);
                }
                return _class2;
            }(zs.proxy.UIScene);
    }(window.zs.ui = window.zs.ui || {});
}()