var stateball = false;
var musicState;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof2(e);
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
    })(e);
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _get(e, t, a) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, a) {
        var i = _superPropBase(e, t);
        if (i) {
            var o = Object.getOwnPropertyDescriptor(i, t);
            return o.get ? o.get.call(a) : o.value;
        }
    })(e, t, a || e);
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));) { }
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var a = 0; a < t.length; a++) {
        var i = t[a];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
    }
}

function _createClass(e, t, a) {
    return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e;
}

!function () {
    var e = function () {
        function GameConfig() {
            _classCallCheck(this, GameConfig);
        }
        return _createClass(GameConfig, null, [{
            key: "init",
            value: function value() {
                Laya.ClassUtils.regClass;
            }
        }]), GameConfig;
    }();
    e.width = 750, e.height = 1334, e.scaleMode = "showall", e.screenMode = "none",
        e.alignV = "middle", e.alignH = "center", e.startScene = "", e.sceneRoot = "", e.debug = !1,
        e.stat = !1, e.physicsDebug = !1, e.exportSceneToJson = !1, e.init();
    var t = function Log() {
        _classCallCheck(this, Log);
    };
    t.Log = console.log, t.Error = console.error, t.Warn = console.warn;
    var a, i, o = function () {
        function SceneBase() {
            _classCallCheck(this, SceneBase);
        }
        return _createClass(SceneBase, [{
            key: "Enter",
            value: function value(e, t) {
                this.OnEnter(e, t);
            }
        }, {
            key: "Leave",
            value: function value() {
                this.OnLeave();
            }
        }]), SceneBase;
    }(), n = function () {
        function SceneMgr() {
            _classCallCheck(this, SceneMgr), this.mScenes = new Map(), this.mCurrent = null;
        }
        return _createClass(SceneMgr, [{
            key: "GoToSceneDirect",
            value: function value(e) {
                var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                null != this.mCurrent && this.mCurrent.Leave(), Laya.timer.once(50, this, function (o) {
                    var n;
                    1 == t.mScenes.has(e) ? n = t.mScenes.get(e) : (n = new e(), t.mScenes.set(e, n)),
                        t.mCurrent = n, t.mCurrent.Enter(a, i);
                });
            }
        }, {
            key: "GoToScene",
            value: function value(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.GoToSceneDirect(e, t, a);
            }
        }, {
            key: "GetCurrentScene",
            get: function get() {
                return this.mCurrent;
            }
        }], [{
            key: "Instance",
            get: function get() {
                return null == this.mInstance && (this.mInstance = new SceneMgr()), this.mInstance;
            }
        }]), SceneMgr;
    }(), s = function () {
        function TipMgr() {
            _classCallCheck(this, TipMgr);
        }
        return _createClass(TipMgr, [{
            key: "Init",
            value: function value(e) {
                this.mTipUrl = e, this.mTipPool = new fairygui.GObjectPool();
            }
        }, {
            key: "ShowTip",
            value: function value(e) {
                var t = this;
                if (e && e.length > 0 && this.mTipPool) {
                    var a = this.mTipPool.getObject(this.mTipUrl).asLabel;
                    fairygui.GRoot.inst.addChild(a), a.center(), a.setPivot(.5, .5), a.text = e, a.alpha = 1;
                    var i = a.y;
                    fairygui.GTween.to(0, -150, 2).setEase(fairygui.EaseType.CircIn).onUpdate(function (e) {
                        a.y = i + e.value.x, a.alpha = 1 + (100 + e.value.x) / 50;
                    }, this).onComplete(function () {
                        fairygui.GRoot.inst.removeChild(a), t.mTipPool.returnObject(a);
                    }, this);
                }
            }
        }],
            [{
                key: "Instance",
                get: function get() {
                    return null == this.mInstance && (this.mInstance = new TipMgr()), this.mInstance;
                }
            }]
        ), TipMgr;
    }(), r = function () {
        function SoundMgr() {
            _classCallCheck(this, SoundMgr);
        }
        return _createClass(SoundMgr, [{
            key: "Init",
            value: function value() {
                Laya.SoundManager.useAudioMusic = !1, Laya.SoundManager.autoStopMusic = !0, Laya.SoundManager.musicMuted = "false" == Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "setting_music"),
                    this.mEnabled = !Laya.SoundManager.musicMuted;
            }
        }, {
            key: "GetMusicEnable",
            value: function value() {
                return !Laya.SoundManager.musicMuted;
            }
        }, {
            key: "Pause",
            value: function value() {
                1 == this.mEnabled && (Laya.SoundManager.musicMuted = !0, Laya.SoundManager.soundMuted = !0),
                    t.Log("SoundMgr Pause", this.mEnabled);
            }
        }, {
            key: "Restore",
            value: function value() {
                1 == this.mEnabled && (Laya.SoundManager.musicMuted = !1, Laya.SoundManager.soundMuted = !1),
                    t.Log("SoundMgr Restore", this.mEnabled);
            }
        }, {
            key: "SetMusicEnable",
            value: function value(e) {
                Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "setting_music", e ? "true" : "false"),
                    1 == Laya.SoundManager.musicMuted && 1 == e ? (Laya.SoundManager.musicMuted = !e,
                        this.mMusicName && this.PlayMusic(this.mMusicName)) : Laya.SoundManager.musicMuted = !e,
                    this.mEnabled = !Laya.SoundManager.musicMuted;
            }
        }, {
            key: "PlayMusic",
            value: function value(e) {
                this.mMusicName = e, 0 == Laya.SoundManager.musicMuted && Laya.SoundManager.playMusic("res/Sound/" + e + ".mp3");
            }
        }, {
            key: "SetSoundEnable",
            value: function value(e) {
                Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "setting_sound", e ? "true" : "false"),
                    Laya.SoundManager.soundMuted = !e;
            }
        }, {
            key: "PlaySound",
            value: function value(e) {
                "false" != Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "setting_sound") && Laya.SoundManager.playSound("res/Sound/" + e + ".mp3", 1);
            }
        }], [{
            key: "Instance",
            get: function get() {
                return null == this.mInstance && (this.mInstance = new SoundMgr()), this.mInstance;
            }
        }]
        ), SoundMgr;
    }(), h = function () {
        function SDKBase() {
            _classCallCheck(this, SDKBase);
        }
        return _createClass(SDKBase, [{
            key: "Init",
            value: function value(e) { }
        }, {
            key: "VibrateShort",
            value: function value() { }
        }, {
            key: "VibrateLong",
            value: function value() { }
        }, {
            key: "IsInstallShortcut",
            value: function value(e) {
                e && e(1, "该平台暂未开放该功能");
            }
        }, {
            key: "InstallShortcut",
            value: function value(e) {
                e && e(1, "该平台暂未开放该功能");
            }
        }, {
            key: "JumpApp",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "SendEvent",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, t) {
                t && t(0, "该平台暂未开放该功能");
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "ReportRankScore",
            value: function value(e, t) {
                t && t(1, "该平台暂未开放该功能");
            }
        }, {
            key: "RecordStart",
            value: function value(e, t) { }
        }, {
            key: "RecordStop",
            value: function value(e, t) { }
        }, {
            key: "ShareMessage",
            value: function value(e, t) { }
        }, {
            key: "CompareVersion",
            value: function value(e, t) {
                for (var a = e.split("."), i = t.split("."), o = Math.max(a.length, i.length); a.length < o;) {
                    a.push("0");
                }
                for (; i.length < o;) {
                    i.push("0");
                }
                for (var n = 0; n < o; n++) {
                    var s = parseInt(a[n]), r = parseInt(i[n]);
                    if (s > r) return 1;
                    if (s < r) return -1;
                }
                return 0;
            }
        }]), SDKBase;
    }(), d = function (e) {
        function SDKQTT() {
            return _classCallCheck(this, SDKQTT), _possibleConstructorReturn(this, _getPrototypeOf(SDKQTT).call(this));
        }
        return _inherits(SDKQTT, h), _createClass(SDKQTT, [{
            key: "Init",
            value: function value(e) {
                Laya.Browser.window.qttGame && t.Log("SDKQTT Init");
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qttGame;
                if (i) {
                    var o = {
                        index: e.wintype
                    };
                    t.Log("SDKQTT ShowBannerAd", o), i.showBanner(o);
                } else _get(_getPrototypeOf(SDKQTT.prototype), "ShowBannerAd", this).call(this, e, a);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qttGame;
                i ? (t.Log("SDKQTT HideBannerAd"), i.hideBanner()) : _get(_getPrototypeOf(SDKQTT.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qttGame;
                if (i) {
                    if (e.gametype && e.gametype > 0) {
                        var o = {
                            index: e.wintype,
                            gametype: e.gametype,
                            rewardtype: 1,
                            data: {
                                title: "刷新道具",
                                url: "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png"
                            },
                            callback: function callback(e) {
                                t.Log("SDKQTT ShowRewardVideoAd1 callback", e), 1 == e ? a && (a(0, "正常播放结束，可以获得游戏奖励"),
                                    a = null) : 0 == e ? a && (a(1, "填充不足"), a = null) : 2 == e ? a && (a(2, "提前关闭"),
                                        a = null) : a && (a(3, "未知错误" + e), a = null);
                            }
                        };
                        t.Log("SDKQTT ShowRewardVideoAd1", o), i.showHDAD(o);
                    } else {
                        var n = {
                            index: e.wintype
                        };
                        t.Log("SDKQTT ShowRewardVideoAd2", n), r.Instance.Pause(), i.showVideo(function (e) {
                            r.Instance.Restore(), t.Log("SDKQTT ShowRewardVideoAd2 callback", e), 1 == e ? a && (a(0, "正常播放结束，可以获得游戏奖励"),
                                a = null) : 0 == e ? a && (a(1, "填充不足"), a = null) : 2 == e ? a && (a(2, "提前关闭"),
                                    a = null) : a && (a(3, "未知错误" + e), a = null);
                        }, n);
                    }
                } else _get(_getPrototypeOf(SDKQTT.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qttGame;
                if (i) {
                    var o = {
                        index: e.wintype,
                        rewardtype: 1
                    };
                    t.Log("SDKQTT ShowInsertAd", o), i.showHDReward(o);
                } else _get(_getPrototypeOf(SDKQTT.prototype), "ShowInsertAd", this).call(this, e, a);
            }
        }]), SDKQTT;
    }(), l = function (e) {
        function SDKWX() {
            var e;
            return _classCallCheck(this, SDKWX), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKWX).call(this))).mWindowWidth = 0,
                e.mWindowHeight = 0, e.mBannerAdPosId = "adunit-e52fc9b5b67a9d33", e.mRewardVideoAdPosId = "adunit-59ee1386f68af5c1",
                e.mInsertAdPosId = "adunit-4b5c573761e70bf1", e.mRewardVideoAdLoaded = !1, e;
        }
        return _inherits(SDKWX, h), _createClass(SDKWX, [{
            key: "Init",
            value: function value(e) {
                var a = Laya.Browser.window.wx;
                if (a) {
                    t.Log("SDKWX Init");
                    var i = a.getSystemInfoSync();
                    t.Log("SDKWX Init", i), this.mWindowWidth = i.windowWidth, this.mWindowHeight = i.windowHeight,
                        a.showShareMenu && (a.showShareMenu(), a.onShareAppMessage(function () {
                            return {
                                title: "益智闯关，推球进洞，看你能过多少关！！！",
                                imageUrl: "https://mmocgame.qpic.cn/wechatgame/GG6kJs4UH7dvDGgg706m1SJphLnmmruXrdCDvLSfTZYOosicia3PuRRgYREYHNBO9I/0",
                                imageUrlId: "LXsp7PurTsuFyMUQDPfMjA=="
                            };
                        })), this.loadRewardVideoAd();
                }
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                var e = Laya.Browser.window.wx;
                e && e.vibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                var e = Laya.Browser.window.wx;
                e && e.vibrateLong();
            }
        }, {
            key: "JumpApp",
            value: function value(e, t) {
                var a = Laya.Browser.window.wx, i = this;
                a && a.navigateToMiniProgram({
                    appId: e.appid,
                    path: e.path,
                    fail: function fail(a) {
                        t && t(1, a), i.SendEvent("小游戏<" + e.name + ">跳转失败", null);
                    },
                    success: function success(a) {
                        t && t(0, a), i.SendEvent("小游戏<" + e.name + ">跳转成功", null);
                    }
                });
            }
        }, {
            key: "SendEvent",
            value: function value(e, t) {
                var a = Laya.Browser.window.wx;
                a && a.aldSendEvent(e);
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, a) {
                var i = this, o = Laya.Browser.window.wx;
                o ? o.createBannerAd && (t.Log("SDKWX this.mBannerAd createBannerAd"), this.mBannerAd = o.createBannerAd({
                    adUnitId: this.mBannerAdPosId,
                    style: {
                        left: 0,
                        top: 0,
                        width: 320,
                        height: 200
                    }
                }), this.mBannerAd.onResize(function (e) {
                    t.Log("SDKWX this.mBannerAd.onResize", e), i.mBannerAd.style.left = (i.mWindowWidth - e.width) / 2,
                        i.mBannerAd.style.top = i.mWindowHeight - e.height;
                }), this.mBannerAd.onError(function (e) {
                    t.Log("SDKWX this.mBannerAd.onError", e);
                }), this.mBannerAd.onLoad(function () {
                    t.Log("SDKWX this.mBannerAd.onLoad"), t.Log("SDKWX this.mBannerAd show after load"),
                        i.mBannerAd.show();
                })) : _get(_getPrototypeOf(SDKWX.prototype), "ShowBannerAd", this).call(this, e, a);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.wx ? this.mBannerAd && (t.Log("SDKWX this.mBannerAd hide"),
                    this.mBannerAd.hide(), t.Log("SDKWX this.mBannerAd destroy"), this.mBannerAd.destroy(),
                    this.mBannerAd = null) : _get(_getPrototypeOf(SDKWX.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.wx;
                a.createRewardedVideoAd && (t.Log("SDKWX this.mRewardVideoAd=createRewardedVideoAd"),
                    this.mRewardVideoAd = a.createRewardedVideoAd({
                        adUnitId: this.mRewardVideoAdPosId
                    }), this.mRewardVideoAd.onError(function (a) {
                        t.Log("SDKWX this.mRewardVideoAd.onError", a), e.mRewardVideoAdLoaded = !1, e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "激励视频广告加载异常：" + a.errCode + "-" + a.errMsg),
                            e.mRewardVideoAdCallback = null);
                    }), this.mRewardVideoAd.onLoad(function () {
                        t.Log("SDKWX this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0, e.mRewardVideoAdCallback && (r.Instance.Pause(),
                            t.Log("SDKWX this.mRewardVideoAd show after load"), e.mRewardVideoAd.show());
                    }), this.mRewardVideoAd.onClose(function (a) {
                        t.Log("SDKWX this.mRewardVideoAd.onClose", a), r.Instance.Restore(), t.Log("SDKWX this.mRewardVideoAd=reload after close"),
                            e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                                e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                    e.mRewardVideoAdCallback = null);
                    }), this.mRewardVideoAdLoaded = !1, this.mRewardVideoAd.load());
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.wx ? this.mRewardVideoAd ? (this.mRewardVideoAdCallback = a,
                    1 == this.mRewardVideoAdLoaded ? (r.Instance.Pause(), t.Log("SDKWX this.mRewardVideoAd show"),
                        this.mRewardVideoAd.show()) : (t.Log("SDKWX this.mRewardVideoAd load"), this.mRewardVideoAd.load())) : a && a(2, "该平台版本不支持该功能") : _get(_getPrototypeOf(SDKWX.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.wx;
                i ? (null == this.mInsertAd && (t.Log("SDKWX this.mInsertAd=createInterstitialAd"),
                    this.mInsertAd = i.createInterstitialAd({
                        adUnitId: this.mInsertAdPosId
                    }), this.mInsertAd.onError(function (e) {
                        t.Log("SDKWX this.mInsertAd.onError", e);
                    }), this.mInsertAd.onLoad(function () {
                        t.Log("SDKWX this.mInsertAd.onLoad");
                    }), this.mInsertAd.onClose(function () {
                        t.Log("SDKWX this.mInsertAd.onClose");
                    })), t.Log("SDKWX this.mInsertAd=show"), this.mInsertAd.show()) : _get(_getPrototypeOf(SDKWX.prototype), "ShowInsertAd", this).call(this, e, a);
            }
        }]), SDKWX;
    }(), m = function (e) {
        function SDKVIVO() {
            var e;
            return _classCallCheck(this, SDKVIVO), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKVIVO).call(this))).mBannerAdPosId = "3c5c1cf567594bbc8052fc695b7a6fc6",
                e.mRewardVideoAdPosId = "13454a7e18ea46b8a57fc689dd5a6264", e.mInsertAdPosId = "4f892ec7b9e348378f3ae3a2ef0d2ff5",
                e.mRewardVideoAdLoaded = !1, e;
        }
        return _inherits(SDKVIVO, h), _createClass(SDKVIVO, [{
            key: "Init",
            value: function value(e) {
                var a = Laya.Browser.window.qg;
                if (a) {
                    var i = a.getSystemInfoSync();
                    t.Log("SDKVIVO Init", i), this.mPlatformVersionCode = i.platformVersionCode, this.mPlatformVersionCode >= 1041 && this.loadRewardVideoAd();
                }
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                var e = Laya.Browser.window.qg;
                e && e.vibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                var e = Laya.Browser.window.qg;
                e && e.vibrateLong();
            }
        }, {
            key: "IsInstallShortcut",
            value: function value(e) {
                var t = Laya.Browser.window.qg;
                t ? t.hasShortcutInstalled({
                    success: function success(t) {
                        e && e(0, t);
                    },
                    fail: function fail(t) {
                        e && e(1, t);
                    }
                }) : _get(_getPrototypeOf(SDKVIVO.prototype), "IsInstallShortcut", this).call(this, e);
            }
        }, {
            key: "InstallShortcut",
            value: function value(e) {
                var t = Laya.Browser.window.qg;
                t ? t.installShortcut({
                    success: function success() {
                        e && e(0, "Reward");
                    },
                    fail: function fail(t) {
                        e && e(1, t);
                    }
                }) : _get(_getPrototypeOf(SDKVIVO.prototype), "InstallShortcut", this).call(this, e);
            }
        }, {
            key: "JumpApp",
            value: function value(e, t) {
                var a = Laya.Browser.window.qg;
                a ? a.navigateToMiniGame({
                    pkgName: e,
                    success: function success() {
                        t && t(0, "Success");
                    },
                    fail: function fail(e) {
                        t && t(e.errCode, e.errMsg);
                    }
                }) : _get(_getPrototypeOf(SDKVIVO.prototype), "JumpApp", this).call(this, e, t);
            }
        }, {
            key: "createBannerAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.qg;
                t.Log("SDKVIVO this.mBannerAd=createBannerAd"), this.mBannerAd = a.createBannerAd({
                    posId: this.mBannerAdPosId,
                    style: {}
                }), this.mBannerAd.onError(function (i) {
                    t.Log("SDKVIVO this.mBannerAd.onError", i), !i || 3e4 != i.errCode && 30002 != i.errCode ? i && i.errCode ? a.showToast({
                        message: "Banner广告加载异常：" + i.errCode + "-" + i.errMsg
                    }) : i && 30009 == i.errorCode ? a.showToast({
                        message: "Banner广告加载异常：30009-10秒内调用广告次数超过1次"
                    }) : i && i.errorCode && a.showToast({
                        message: "Banner广告加载异常：" + i.errorCode
                    }) : e.createBannerAd();
                }), this.mBannerAd.onLoad(function () {
                    t.Log("SDKVIVO this.mBannerAd.onLoad"), t.Log("SDKVIVO this.mBannerAd=show"), e.mBannerAd.show();
                }), this.mBannerAd.onClose(function () {
                    t.Log("SDKVIVO this.mBannerAd.onClose");
                });
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, t) {
                Laya.Browser.window.qg ? this.mPlatformVersionCode >= 1031 ? this.createBannerAd() : t && t(2, "该功能需要平台版本号>=1031") : _get(_getPrototypeOf(SDKVIVO.prototype), "ShowBannerAd", this).call(this, e, t);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.qg ? this.mBannerAd ? (t.Log("SDKVIVO this.mBannerAd=hide"),
                    this.mBannerAd.hide()) : t.Log("SDKVIVO this.mBannerAd=hide fail mBannerAd=null") : _get(_getPrototypeOf(SDKVIVO.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.qg;
                t.Log("SDKVIVO this.mRewardVideoAd=createRewardedVideoAd"), this.mRewardVideoAd = a.createRewardedVideoAd({
                    posId: this.mRewardVideoAdPosId
                }), this.mRewardVideoAd.onError(function (a) {
                    t.Log("SDKVIVO this.mRewardVideoAd.onError", a), e.mRewardVideoAdLoaded = !1, e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "激励视频广告加载异常：" + a.errCode + "-" + a.errMsg),
                        e.mRewardVideoAdCallback = null);
                }), this.mRewardVideoAd.onLoad(function () {
                    t.Log("SDKVIVO this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0, e.mRewardVideoAdCallback && (r.Instance.Pause(),
                        t.Log("SDKVIVO this.mRewardVideoAd show after load"), e.mRewardVideoAd.show());
                }), this.mRewardVideoAd.onClose(function (a) {
                    t.Log("SDKVIVO this.mRewardVideoAd.onClose", a), r.Instance.Restore(), t.Log("SDKVIVO this.mRewardVideoAd=reload after close"),
                        e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                            e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                e.mRewardVideoAdCallback = null);
                });
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.qg ? this.mPlatformVersionCode >= 1041 ? (this.mRewardVideoAdCallback = a,
                    1 == this.mRewardVideoAdLoaded ? (r.Instance.Pause(), t.Log("SDKVIVO this.mRewardVideoAd show"),
                        this.mRewardVideoAd.show()) : (t.Log("SDKVIVO this.mRewardVideoAd load"), this.mRewardVideoAd.load())) : a && a(2, "该功能需要平台版本号>=1041") : _get(_getPrototypeOf(SDKVIVO.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "createInsertAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.qg;
                t.Log("SDKVIVO this.mInsertAd=createInterstitialAd"), this.mInsertAd = a.createInterstitialAd({
                    posId: this.mInsertAdPosId
                }), this.mInsertAd.onError(function (i) {
                    t.Log("SDKVIVO this.mInsertAd.onError", i), !i || 3e4 != i.errCode && 30002 != i.errCode ? i && i.errCode ? a.showToast({
                        message: "插屏广告加载异常：" + i.errCode + "-" + i.errMsg
                    }) : i && 30009 == i.errorCode ? a.showToast({
                        message: "插屏广告加载异常：30009-10秒内调用广告次数超过1次"
                    }) : i && i.errorCode && a.showToast({
                        message: "插屏广告加载异常：" + i.errorCode
                    }) : e.createInsertAd();
                }), this.mInsertAd.onLoad(function () {
                    t.Log("SDKVIVO this.mInsertAd.onLoad"), e.mBannerAd && (t.Log("SDKVIVO this.mBannerAd.hide"),
                        e.mBannerAd.hide()), t.Log("SDKVIVO this.mInsertAd=show"), e.mInsertAd.show();
                }), this.mInsertAd.onClose(function () {
                    t.Log("SDKVIVO this.mInsertAd.onClose"), e.mBannerAd && (t.Log("SDKVIVO this.mBannerAd.show"),
                        e.mBannerAd.show());
                });
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, t) {
                Laya.Browser.window.qg ? this.mPlatformVersionCode >= 1031 ? this.createInsertAd() : t && t(2, "该功能需要平台版本号>=1031") : _get(_getPrototypeOf(SDKVIVO.prototype), "ShowInsertAd", this).call(this, e, t);
            }
        }, {
            key: "ReportRankScore",
            value: function value(e, t) {
                Laya.Browser.window.qg || _get(_getPrototypeOf(SDKVIVO.prototype), "ReportRankScore", this).call(this, e, t);
            }
        }]), SDKVIVO;
    }(), u = function (e) {
        function SDKOPPO() {
            var e;
            return _classCallCheck(this, SDKOPPO), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKOPPO).call(this))).mBannerAdPosId = 153019,
                e.mRewardVideoAdPosId = 153022, e.mInsertAdPosId = 153020, e.mBannerAdShowing = !1,
                e.mRewardVideoAdLoaded = !1, e.mInsertAdLoaded = !1, e;
        }
        return _inherits(SDKOPPO, h), _createClass(SDKOPPO, [{
            key: "Init",
            value: function value(e) {
                var a = this, i = Laya.Browser.window.qg;
                i && (t.Log("Init SDKOPPO"), i.getSystemInfo({
                    success: function success(e) {
                        t.Log("Init getSystemInfo", e), a.mPlatformVersionCode = e.platformVersionCode,
                            a.mPlatformVersionCode >= 1051 && (a.loadRewardVideoAd(), a.loadInsertAd());
                    },
                    fail: function fail(e) {
                        console.log("获取系统信息出错: ".concat(JSON.stringify(e)));
                    }
                }));
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                var e = Laya.Browser.window.qg;
                e && e.vibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                var e = Laya.Browser.window.qg;
                e && e.vibrateLong();
            }
        }, {
            key: "IsInstallShortcut",
            value: function value(e) {
                var t = Laya.Browser.window.qg;
                t ? t.hasShortcutInstalled({
                    success: function success(t) {
                        e && e(0, t);
                    },
                    fail: function fail(t) {
                        e && e(1, t);
                    }
                }) : _get(_getPrototypeOf(SDKOPPO.prototype), "IsInstallShortcut", this).call(this, e);
            }
        }, {
            key: "InstallShortcut",
            value: function value(e) {
                var t = Laya.Browser.window.qg;
                t ? t.installShortcut({
                    success: function success() {
                        e && e(0, "Reward");
                    },
                    fail: function fail(t) {
                        e && e(1, t);
                    }
                }) : _get(_getPrototypeOf(SDKOPPO.prototype), "InstallShortcut", this).call(this, e);
            }
        }, {
            key: "JumpApp",
            value: function value(e, t) {
                var a = Laya.Browser.window.qg;
                a ? a.navigateToMiniGame({
                    pkgName: e,
                    success: function success() {
                        t && t(0, "Success");
                    },
                    fail: function fail(e) {
                        t && t(e.errCode, e.errMsg);
                    }
                }) : _get(_getPrototypeOf(SDKOPPO.prototype), "JumpApp", this).call(this, e, t);
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qg;
                i ? this.mPlatformVersionCode >= 1051 ? (null == this.mBannerAd && (t.Log("SDKOPPO this.mBannerAd createBannerAd"),
                    this.mBannerAd = i.createBannerAd({
                        adUnitId: this.mBannerAdPosId
                    }), this.mBannerAd.onError(function (e) {
                        t.Log("SDKOPPO this.mBannerAd.onError", e), a && a(e.errCode, e.errMsg);
                    }), this.mBannerAd.onLoad(function () {
                        t.Log("SDKOPPO this.mBannerAd.onLoad");
                    }), this.mBannerAd.onShow(function () {
                        t.Log("SDKOPPO this.mBannerAd.onShow");
                    }), this.mBannerAd.onHide(function () {
                        t.Log("SDKOPPO this.mBannerAd.onHide");
                    })), this.mBannerAdShowing = !0, t.Log("SDKOPPO this.mBannerAd show"), this.mBannerAd.show()) : a && a(2, "该功能需要平台版本号>=1051") : _get(_getPrototypeOf(SDKOPPO.prototype), "ShowBannerAd", this).call(this, e, a);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.qg ? (this.mBannerAdShowing = !1, this.mBannerAd ? (t.Log("SDKOPPO this.mBannerAd hide"),
                    this.mBannerAd.hide()) : t.Log("SDKOPPO this.mBannerAd=hide fail mBannerAd=null")) : _get(_getPrototypeOf(SDKOPPO.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.qg;
                t.Log("SDKOPPO this.mRewardVideoAd createRewardedVideoAd"), this.mRewardVideoAd = a.createRewardedVideoAd({
                    adUnitId: this.mRewardVideoAdPosId
                }), this.mRewardVideoAd.onError(function (a) {
                    t.Log("SDKOPPO this.mRewardVideoAd.onError", a), e.mRewardVideoAdLoaded = !1, e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(a.errCode, a.errMsg),
                        e.mRewardVideoAdCallback = null);
                }), this.mRewardVideoAd.onLoad(function () {
                    t.Log("SDKOPPO this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0, e.mRewardVideoAdCallback && (t.Log("SDKOPPO this.mRewardVideoAd show after load"),
                        e.mRewardVideoAd.show());
                }), this.mRewardVideoAd.onClose(function (a) {
                    t.Log("SDKOPPO this.mRewardVideoAd.onClose", a), t.Log("SDKOPPO this.mRewardVideoAd reload after close"),
                        e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && 1 == a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                            e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                e.mRewardVideoAdCallback = null);
                }), t.Log("SDKOPPO this.mRewardVideoAd load"), this.mRewardVideoAdLoaded = !1, this.mRewardVideoAd.load();
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.qg ? this.mPlatformVersionCode >= 1051 ? (this.mRewardVideoAdCallback = a,
                    1 == this.mRewardVideoAdLoaded ? (t.Log("SDKOPPO this.mRewardVideoAd show"), this.mRewardVideoAd.show()) : (t.Log("SDKOPPO this.mRewardVideoAd load"),
                        this.mRewardVideoAd.load())) : a && a(2, "该功能需要平台版本号>=1051") : _get(_getPrototypeOf(SDKOPPO.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "loadInsertAd",
            value: function value() {
                var e = this, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = Laya.Browser.window.qg;
                this.mInsertAdLoaded = !1, this.mInsertAd && this.mInsertAd.destroy(), t.Log("SDKOPPO this.mInsertAd createInsertAd"),
                    this.mInsertAd = o.createInsertAd({
                        adUnitId: this.mInsertAdPosId
                    }), this.mInsertAd.onError(function (a) {
                        t.Log("SDKOPPO this.mInsertAd.onError", a), e.mInsertAdLoaded = !1, i && i(a.errCode, a.errMsg);
                    }), this.mInsertAd.onLoad(function () {
                        t.Log("SDKOPPO this.mInsertAd.onLoad"), e.mInsertAdLoaded = !0, 1 == a && (t.Log("SDKOPPO this.mInsertAd show after loaded"),
                            e.mInsertAd.show());
                    }), this.mInsertAd.onClose(function () {
                        t.Log("SDKOPPO this.mInsertAd.onClose"), 1 == e.mBannerAdShowing && e.mBannerAd && e.mBannerAd.show(),
                            e.mInsertAdLoaded = !1, t.Log("SDKOPPO this.mInsertAd load after close"), e.mInsertAd.load();
                    }), this.mInsertAd.onShow(function () {
                        t.Log("SDKOPPO this.mInsertAd.onShow"), 1 == e.mBannerAdShowing && e.mBannerAd && e.mBannerAd.hide();
                    }), t.Log("SDKOPPO this.mInsertAd load"), this.mInsertAd.load();
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, a) {
                Laya.Browser.window.qg ? this.mPlatformVersionCode >= 1051 ? this.mInsertAd && 1 == this.mInsertAdLoaded ? (t.Log("SDKOPPO this.mInsertAd show"),
                    this.mInsertAd.show()) : this.loadInsertAd(!0, a) : a && a(2, "该功能需要平台版本号>=1051") : _get(_getPrototypeOf(SDKOPPO.prototype), "ShowInsertAd", this).call(this, e, a);
            }
        }, {
            key: "ReportRankScore",
            value: function value(e, t) {
                Laya.Browser.window.qg || _get(_getPrototypeOf(SDKOPPO.prototype), "ReportRankScore", this).call(this, e, t);
            }
        }]), SDKOPPO;
    }(), c = function (e) {
        function SDKTouTiao() {
            var e;
            return _classCallCheck(this, SDKTouTiao), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKTouTiao).call(this))).mWindowWidth = 0,
                e.mWindowHeight = 0, e.mBannerAdPosId = "7le4ecmubag460qao3", e.mRewardVideoAdPosId = "9061ase9ae8facl2l9",
                e.mInsertAdPosId = "5nbhivp8ffv11h5g8b", e.mRewardVideoAdLoaded = !1, e;
        }
        return _inherits(SDKTouTiao, h), _createClass(SDKTouTiao, [{
            key: "Init",
            value: function value(e) {
                var a = Laya.Browser.window.tt;
                if (a) {
                    var i = a.getSystemInfoSync();
                    t.Log("SDKTouTiao Init", i), this.mWindowWidth = i.windowWidth, this.mWindowHeight = i.windowHeight,
                        this.loadRewardVideoAd();
                }
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                var e = Laya.Browser.window.tt;
                e && e.vibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                var e = Laya.Browser.window.tt;
                e && e.vibrateLong();
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, a) {
                var i = this, o = Laya.Browser.window.tt;
                o ? o.createBannerAd && (t.Log("SDKTouTiao this.mBannerAd createBannerAd"), this.mBannerAd = o.createBannerAd({
                    adUnitId: this.mBannerAdPosId
                }), this.mBannerAd.onResize(function (e) {
                    t.Log("SDKTouTiao this.mBannerAd.onResize", e), i.mBannerAd.style.left = (i.mWindowWidth - e.width) / 2,
                        i.mBannerAd.style.top = i.mWindowHeight - e.height;
                }), this.mBannerAd.onError(function (e) {
                    t.Log("SDKTouTiao this.mBannerAd.onError", e), e.errCode;
                }), this.mBannerAd.onLoad(function () {
                    t.Log("SDKTouTiao this.mBannerAd.onLoad"), t.Log("SDKTouTiao this.mBannerAd show after load"),
                        i.mBannerAd.show();
                })) : _get(_getPrototypeOf(SDKTouTiao.prototype), "ShowBannerAd", this).call(this, e, a);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.tt ? this.mBannerAd && (t.Log("SDKTouTiao this.mBannerAd hide"),
                    this.mBannerAd.hide(), t.Log("SDKTouTiao this.mBannerAd destroy"), this.mBannerAd.destroy(),
                    this.mBannerAd = null) : _get(_getPrototypeOf(SDKTouTiao.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.tt;
                a.createRewardedVideoAd && (t.Log("SDKTouTiao this.mRewardVideoAd=createRewardedVideoAd"),
                    this.mRewardVideoAd = a.createRewardedVideoAd({
                        adUnitId: this.mRewardVideoAdPosId
                    }), this.mRewardVideoAd.onError(function (a) {
                        t.Log("SDKTouTiao this.mRewardVideoAd.onError", a), e.mRewardVideoAdLoaded = !1,
                            e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "激励视频广告加载异常：" + a.errCode + "-" + a.errMsg),
                                e.mRewardVideoAdCallback = null);
                    }), this.mRewardVideoAd.onLoad(function () {
                        t.Log("SDKTouTiao this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0, e.mRewardVideoAdCallback && (r.Instance.Pause(),
                            t.Log("SDKTouTiao this.mRewardVideoAd show after load"), e.mRewardVideoAd.show());
                    }), this.mRewardVideoAd.onClose(function (a) {
                        t.Log("SDKTouTiao this.mRewardVideoAd.onClose", a), r.Instance.Restore(), t.Log("SDKTouTiao this.mRewardVideoAd=reload after close"),
                            e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                                e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                    e.mRewardVideoAdCallback = null);
                    }));
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.tt ? this.mRewardVideoAd ? (this.mRewardVideoAdCallback = a,
                    1 == this.mRewardVideoAdLoaded ? (r.Instance.Pause(), t.Log("SDKTouTiao this.mRewardVideoAd show"),
                        this.mRewardVideoAd.show()) : (t.Log("SDKTouTiao this.mRewardVideoAd load"), this.mRewardVideoAd.load())) : a && a(2, "该平台版本不支持该功能") : _get(_getPrototypeOf(SDKTouTiao.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, a) {
                var i = this, o = Laya.Browser.window.tt;
                o ? o.createInterstitialAd && (t.Log("SDKTouTiao this.mInsertAd=createInterstitialAd"),
                    this.mInsertAd = o.createInterstitialAd({
                        adUnitId: this.mInsertAdPosId
                    }), this.mInsertAd.onError(function (e) {
                        t.Log("SDKTouTiao this.mInsertAd.onError", e);
                    }), this.mInsertAd.onLoad(function () {
                        t.Log("SDKTouTiao this.mInsertAd.onLoad"), i.mBannerAd && (t.Log("SDKTouTiao this.mBannerAd.hide"),
                            i.mBannerAd.hide()), t.Log("SDKTouTiao this.mInsertAd=show"), i.mInsertAd.show();
                    }), this.mInsertAd.onClose(function () {
                        t.Log("SDKTouTiao this.mInsertAd.onClose"), i.mBannerAd && (t.Log("SDKTouTiao this.mBannerAd.show"),
                            i.mBannerAd.show());
                    })) : _get(_getPrototypeOf(SDKTouTiao.prototype), "ShowInsertAd", this).call(this, e, a);
            }
        }, {
            key: "RecordStart",
            value: function value(e, a) {
                var i = Laya.Browser.window.tt;
                if (i) {
                    if (i.getGameRecorderManager) {
                        t.Log("SDKTouTiao RecordStart", e);
                        var o = i.getGameRecorderManager();
                        o.start({
                            duration: 25
                        });
                        var n = this;
                        o.onStop(function (e) {
                            t.Log("SDKTouTiao recorder.onStop", e), n.mRecordVideoPath = e.videoPath, o.clipVideo({
                                path: n.mRecordVideoPath,
                                timeRange: [20, 0],
                                success: function success(e) {
                                    t.Log("SDKTouTiao recorder.clipVideo", e), n.mRecordVideoPath = e.videoPath;
                                },
                                fail: function fail(e) { }
                            });
                        });
                    }
                } else _get(_getPrototypeOf(SDKTouTiao.prototype), "ShareMessage", this).call(this, e, a);
            }
        }, {
            key: "RecordStop",
            value: function value(e, a) {
                var i = Laya.Browser.window.tt;
                i ? i.getGameRecorderManager && (t.Log("SDKTouTiao RecordStop", e), i.getGameRecorderManager().stop()) : _get(_getPrototypeOf(SDKTouTiao.prototype), "ShareMessage", this).call(this, e, a);
            }
        }, {
            key: "ShareMessage",
            value: function value(e, a) {
                var i = Laya.Browser.window.tt;
                i ? i.shareAppMessage && (t.Log("SDKTouTiao ShareMessage", e), i.shareAppMessage({
                    channel: "video",
                    title: "精彩集锦",
                    imageUrl: "",
                    desc: "一战到底-发动大脑快速移动一杆进洞！",
                    query: "channel=ttzuqiu01",
                    extra: {
                        videoPath: this.mRecordVideoPath,
                        videoTopics: ["一战到底", "推球进洞"]
                    },
                    success: function success() {
                        t.Log("SDKTouTiao shareAppMessage success"), a && a(0, "分享成功");
                    },
                    fail: function fail(e) {
                        t.Log("SDKTouTiao shareAppMessage fail", e), a && a(1, "分享失败");
                    }
                })) : _get(_getPrototypeOf(SDKTouTiao.prototype), "ShareMessage", this).call(this, e, a);
            }
        }]), SDKTouTiao;
    }(), y = function (e) {
        function SDKQQ() {
            var e;
            return _classCallCheck(this, SDKQQ), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKQQ).call(this))).mWindowWidth = 0,
                e.mWindowHeight = 0, e.mBannerAdPosId = "dd96f3f47a5b7a277d532e3cc10a1110", e.mRewardVideoAdPosId = "6b3ff3a9c082aaf1f8727effb187c881",
                e.mInsertAdPosId = "c2dd8ea00cd8378fd19bd24295c79500", e.mRewardVideoAdLoaded = !1,
                e;
        }
        return _inherits(SDKQQ, h), _createClass(SDKQQ, [{
            key: "Init",
            value: function value(e) {
                var a = Laya.Browser.window.qq;
                if (a) {
                    var i = a.getSystemInfoSync();
                    t.Log("SDKQQ Init", i), this.mWindowWidth = i.windowWidth, this.mWindowHeight = i.windowHeight,
                        a.showShareMenu && a.showShareMenu(), this.loadRewardVideoAd();
                }
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                var e = Laya.Browser.window.qq;
                e && e.vibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                var e = Laya.Browser.window.qq;
                e && e.vibrateLong();
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, a) {
                var i = this, o = Laya.Browser.window.qq;
                o ? o.createBannerAd && (t.Log("SDKQQ this.mBannerAd createBannerAd"), this.mBannerAd = o.createBannerAd({
                    adUnitId: this.mBannerAdPosId,
                    style: {
                        left: 0,
                        top: this.mWindowHeight,
                        width: 320,
                        height: 200
                    }
                }), this.mBannerAd.onResize(function (e) {
                    t.Log("SDKQQ this.mBannerAd.onResize", e), i.mBannerAd.style.left = (i.mWindowWidth - e.width) / 2,
                        i.mBannerAd.style.top = i.mWindowHeight - e.height;
                }), this.mBannerAd.onError(function (e) {
                    t.Log("SDKQQ this.mBannerAd.onError", e);
                }), this.mBannerAd.onLoad(function () {
                    t.Log("SDKQQ this.mBannerAd.onLoad"), t.Log("SDKQQ this.mBannerAd show after load"),
                        i.mBannerAd.show();
                })) : _get(_getPrototypeOf(SDKQQ.prototype), "ShowBannerAd", this).call(this, e, a);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.qq ? this.mBannerAd && (t.Log("SDKQQ this.mBannerAd hide"),
                    this.mBannerAd.hide(), t.Log("SDKQQ this.mBannerAd destroy"), this.mBannerAd.destroy(),
                    this.mBannerAd = null) : _get(_getPrototypeOf(SDKQQ.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.qq;
                a.createRewardedVideoAd && (t.Log("SDKQQ this.mRewardVideoAd=createRewardedVideoAd"),
                    this.mRewardVideoAd = a.createRewardedVideoAd({
                        adUnitId: this.mRewardVideoAdPosId
                    }), this.mRewardVideoAd.onError(function (a) {
                        t.Log("SDKQQ this.mRewardVideoAd.onError", a), e.mRewardVideoAdLoaded = !1, e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "激励视频广告加载异常：" + a.errCode + "-" + a.errMsg),
                            e.mRewardVideoAdCallback = null);
                    }), this.mRewardVideoAd.onLoad(function () {
                        t.Log("SDKQQ this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0, e.mRewardVideoAdCallback && (r.Instance.Pause(),
                            t.Log("SDKQQ this.mRewardVideoAd show after load"), e.mRewardVideoAd.show());
                    }), this.mRewardVideoAd.onClose(function (a) {
                        t.Log("SDKQQ this.mRewardVideoAd.onClose", a), r.Instance.Restore(), t.Log("SDKQQ this.mRewardVideoAd=reload after close"),
                            e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                                e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                    e.mRewardVideoAdCallback = null);
                    }), this.mRewardVideoAdLoaded = !1, this.mRewardVideoAd.load());
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.qq ? this.mRewardVideoAd ? (this.mRewardVideoAdCallback = a,
                    1 == this.mRewardVideoAdLoaded ? (r.Instance.Pause(), t.Log("SDKQQ this.mRewardVideoAd show"),
                        this.mRewardVideoAd.show()) : (t.Log("SDKQQ this.mRewardVideoAd load"), this.mRewardVideoAd.load())) : a && a(2, "该平台版本不支持该功能") : _get(_getPrototypeOf(SDKQQ.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, a) {
                var i = Laya.Browser.window.qq;
                i ? i.createInterstitialAd && (null == this.mInsertAd && (t.Log("SDKQQ this.mInsertAd=createInterstitialAd"),
                    this.mInsertAd = i.createInterstitialAd({
                        adUnitId: this.mInsertAdPosId
                    }), this.mInsertAd.onError(function (e) {
                        t.Log("SDKQQ this.mInsertAd.onError", e);
                    }), this.mInsertAd.onLoad(function () {
                        t.Log("SDKQQ this.mInsertAd.onLoad");
                    }), this.mInsertAd.onClose(function () {
                        t.Log("SDKQQ this.mInsertAd.onClose");
                    })), t.Log("SDKQQ this.mInsertAd=show"), this.mInsertAd.show()) : _get(_getPrototypeOf(SDKQQ.prototype), "ShowInsertAd", this).call(this, e, a);
            }
        }]), SDKQQ;
    }(), g = function (e) {
        function SDKUC() {
            var e;
            return _classCallCheck(this, SDKUC), (e = _possibleConstructorReturn(this, _getPrototypeOf(SDKUC).call(this))).mRewardVideoAdLoaded = !1,
                e;
        }
        return _inherits(SDKUC, h), _createClass(SDKUC, [{
            key: "Init",
            value: function value(e) {
                Laya.Browser.window.uc && (t.Log("SDKUC Init"), this.loadRewardVideoAd());
            }
        }, {
            key: "createBannerAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.uc;
                this.mBannerAd = a.createBannerAd({
                    style: {
                        gravity: 7
                    }
                }), this.mBannerAd.onError(function (e) {
                    t.Log("SDKUC this.mBannerAd.onError", e), e && 100002 == e.errCode && a.showToast({
                        content: "Banner 广告加载失败：" + e.errCode + "-" + e.ext
                    });
                }), this.mBannerAd.onLoad(function () {
                    t.Log("SDKUC this.mBannerAd.onLoad"), t.Log("SDKUC this.mBannerAd=show"), e.mBannerAd.show();
                });
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, t) {
                Laya.Browser.window.uc ? this.createBannerAd() : _get(_getPrototypeOf(SDKUC.prototype), "ShowBannerAd", this).call(this, e, t);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, a) {
                Laya.Browser.window.uc ? this.mBannerAd && (t.Log("SDKUC HideBannerAd"), this.mBannerAd.hide()) : _get(_getPrototypeOf(SDKUC.prototype), "HideBannerAd", this).call(this, e, a);
            }
        }, {
            key: "loadRewardVideoAd",
            value: function value() {
                var e = this, a = Laya.Browser.window.uc;
                t.Log("SDKUC this.mRewardVideoAd=createRewardedVideoAd"), this.mRewardVideoAd = a.createRewardedVideoAd(),
                    this.mRewardVideoAd.onError(function (i) {
                        t.Log("SDKUC this.mRewardVideoAd.onError", i), e.mRewardVideoAdLoaded = !1, i && 1e5 == i.errCode && (e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "激励视频广告加载异常：" + i.errCode + "-" + i.ext),
                            e.mRewardVideoAdCallback = null), a.showToast({
                                content: "激励视频广告加载失败：" + i.errCode + "-" + i.ext
                            }));
                    }), this.mRewardVideoAd.onLoad(function () {
                        t.Log("SDKUC this.mRewardVideoAd.onLoad"), e.mRewardVideoAdLoaded = !0;
                    }), this.mRewardVideoAd.onClose(function (a) {
                        t.Log("SDKUC this.mRewardVideoAd.onClose", a), r.Instance.Restore(), t.Log("SDKUC this.mRewardVideoAd=reload after close"),
                            e.mRewardVideoAdLoaded = !1, e.mRewardVideoAd.load(), a && a.isEnded ? e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(0, "正常播放结束，可以获得游戏奖励"),
                                e.mRewardVideoAdCallback = null) : e.mRewardVideoAdCallback && (e.mRewardVideoAdCallback(1, "播放中途退出，无法获得游戏奖励"),
                                    e.mRewardVideoAdCallback = null);
                    });
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, a) {
                Laya.Browser.window.uc ? (this.mRewardVideoAdCallback = a, 1 == this.mRewardVideoAdLoaded ? (r.Instance.Pause(),
                    t.Log("SDKUC this.mRewardVideoAd show"), this.mRewardVideoAd.show()) : (t.Log("SDKUC this.mRewardVideoAd load"),
                        this.mRewardVideoAd.load())) : _get(_getPrototypeOf(SDKUC.prototype), "ShowRewardVideoAd", this).call(this, e, a);
            }
        }]), SDKUC;
    }();
    !function (e) {
        e[e.None = 0] = "None", e[e.QuTouTiao = 1] = "QuTouTiao", e[e.TouTiao = 2] = "TouTiao",
            e[e.WeChat = 3] = "WeChat", e[e.QQ = 4] = "QQ", e[e.VIVO = 5] = "VIVO", e[e.OPPO = 6] = "OPPO",
            e[e.UC = 7] = "UC";
    }(a || (a = {})), function (e) {
        e[e.None = 0] = "None", e[e.WinMain = 1] = "WinMain", e[e.WinLevel = 2] = "WinLevel",
            e[e.WinSign = 3] = "WinSign", e[e.WinShop = 4] = "WinShop", e[e.WinGame = 5] = "WinGame",
            e[e.WinGameEnd = 6] = "WinGameEnd", e[e.WinConfirmBox = 7] = "WinConfirmBox", e[e.WinNotPower = 8] = "WinNotPower",
            e[e.WinTrySkin = 9] = "WinTrySkin";
    }(i || (i = {}));
    var w, S, f, L, p, v, C, I, D, P = function () {
        function SDKMgr() {
            _classCallCheck(this, SDKMgr);
        }
        return _createClass(SDKMgr, [{
            key: "Init",
            value: function value() {
                Laya.Browser.window.qttGame ? (this.mSDK = new d(), this.sdkType = a.QuTouTiao) : Laya.Browser.window.tt && Laya.Browser.window.wxMiniGame ? (this.mSDK = new c(),
                    this.sdkType = a.TouTiao) : Laya.Browser.window.wx && Laya.Browser.window.wxMiniGame ? (this.mSDK = new l(),
                        this.sdkType = a.WeChat) : Laya.Browser.window.qq && Laya.Browser.window.qqMiniGame ? (this.mSDK = new y(),
                            this.sdkType = a.QQ) : Laya.Browser.window.qg && Laya.Browser.window.vvMiniGame ? (this.mSDK = new m(),
                                this.sdkType = a.VIVO) : Laya.Browser.window.qg && Laya.Browser.window.qgMiniGame ? (this.mSDK = new u(),
                                    this.sdkType = a.OPPO) : Laya.Browser.window.uc ? (this.mSDK = new g(), this.sdkType = a.UC) : Laya.Browser.window.wx ? (this.mSDK = new l(),
                                        this.sdkType = a.WeChat) : (this.mSDK = new h(), this.sdkType = a.None), this.mSDK.Init(null);
            }
        }, {
            key: "VibrateShort",
            value: function value() {
                "false" != Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "setting_sound") && this.mSDK.VibrateShort();
            }
        }, {
            key: "VibrateLong",
            value: function value() {
                "false" != Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "setting_sound") && this.mSDK.VibrateLong();
            }
        }, {
            key: "IsInstallShortcut",
            value: function value(e) {
                this.mSDK.IsInstallShortcut(e);
            }
        }, {
            key: "InstallShortcut",
            value: function value(e) {
                this.mSDK.InstallShortcut(e);
            }
        }, {
            key: "JumpApp",
            value: function value(e, t) {
                this.mSDK.JumpApp(e, t);
            }
        }, {
            key: "SendEvent",
            value: function value(e, t) {
                this.mSDK.SendEvent(e, t);
            }
        }, {
            key: "ShowBannerAd",
            value: function value(e, t) {
                this.mSDK.ShowBannerAd(e, t);
            }
        }, {
            key: "HideBannerAd",
            value: function value(e, t) {
                this.mSDK.HideBannerAd(e, t);
            }
        }, {
            key: "ShowRewardVideoAd",
            value: function value(e, t) {
                this.mSDK.ShowRewardVideoAd(e, t);
            }
        }, {
            key: "ShowInsertAd",
            value: function value(e, t) {
                this.mSDK.ShowInsertAd(e, t);
            }
        }, {
            key: "ReportRankScore",
            value: function value(e, t) {
                this.mSDK.ReportRankScore(e, t);
            }
        }, {
            key: "RecordStart",
            value: function value(e, t) {
                this.mSDK.RecordStart(e, t);
            }
        }, {
            key: "RecordStop",
            value: function value(e, t) {
                this.mSDK.RecordStop(e, t);
            }
        }, {
            key: "ShareMessage",
            value: function value(e, t) {
                this.mSDK.ShareMessage(e, t);
            }
        }], [{
            key: "Instance",
            get: function get() {
                return null == this.mInstance && (this.mInstance = new SDKMgr()), this.mInstance;
            }
        }]), SDKMgr;
    }(), B = function (e) {
        function WinBase() {
            var e;
            var p = _getPrototypeOf(WinBase).call(this)
            return _classCallCheck(this, WinBase), (e = _possibleConstructorReturn(this, p)).winUrl = "",
                e.winDepth = 0, e.notDel = !1, e.needShowAnimation = !0, e.needFrameUpdate = !1,
                e.needTimeUpdate = !1, e.clickBlackBgHide = !0, e.clickBtnCloseHide = !0, e.mLastFrameUpdateT = 0,
                e.mLastTimeUpdateT = 0, e;
        }
        window.wingame = this;
        return _inherits(WinBase, fairygui.Window), _createClass(WinBase, [{
            key: "onInit",
            value: function value() {
                var e = this;
                window.ShopPanel = e;

                console.log("this.winUrl" + this.winUrl);
                if (_get(_getPrototypeOf(WinBase.prototype), "onInit", this).call(this), null == this.contentPane && (
                    this.contentPane = fairygui.UIPackage.createObjectFromURL(this.winUrl).asCom,
                    this.contentPane.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height),
                    this.contentPane.center(), this.contentPane.setPivot(.5, .5)
                ), null != this.contentPane.getChild("ComBlack") && (this.mBlackBg = this.contentPane.getChild("ComBlack").asCom,
                    this.mBlackBg.center(), this.mBlackBg.setPivot(.5, .5), this.mBlackBg.alpha = 0,
                    1 == this.clickBlackBgHide && this.mBlackBg.onClick(this, function (t) {
                        r.Instance.PlaySound("click"), e.hide();
                    })), null != this.contentPane.getChild("BtnClose")) {
                    var t = this.contentPane.getChild("BtnClose").asCom;
                    1 == this.clickBtnCloseHide && t.onClick(this, function (t) {
                        r.Instance.PlaySound("click"), e.hide();
                    });
                }
                this.center(), this.setPivot(.5, .5);
            }
        }, {
            key: "BaseFrameUpdate",
            value: function value() {
                this.OnFrameUpdate(Date.now() - this.mLastFrameUpdateT), this.mLastFrameUpdateT = Date.now();
            }
        }, {
            key: "BaseTimeUpdate",
            value: function value() {
                this.OnTimeUpdate(Date.now() - this.mLastTimeUpdateT), this.mLastTimeUpdateT = Date.now();
            }
        }, {
            key: "onShown",
            value: function value() {
                _get(_getPrototypeOf(WinBase.prototype), "onShown", this).call(this), 1 == this.needFrameUpdate && (this.mLastFrameUpdateT = Date.now(),
                    Laya.timer.frameLoop(1, this, this.BaseFrameUpdate)), 1 == this.needTimeUpdate && (this.mLastTimeUpdateT = Date.now(),
                        Laya.timer.loop(10, this, this.BaseTimeUpdate));
            }
        }, {
            key: "onHide",
            value: function value() {
                this.data = null, _get(_getPrototypeOf(WinBase.prototype), "onHide", this).call(this),
                    1 == this.needFrameUpdate && Laya.timer.clear(this, this.BaseFrameUpdate), 1 == this.needTimeUpdate && Laya.timer.clear(this, this.BaseTimeUpdate);
            }
        }, {
            key: "doShowAnimation",
            value: function value() {
                this.bringToFront(), null != this.mBlackBg && (this.mBlackBg.alpha = 1, this.mBlackBg.setScale(3, 3)),
                    this.contentPane.setScale(1, 1), _get(_getPrototypeOf(WinBase.prototype), "doShowAnimation", this).call(this);
            }
        }, {
            key: "doHideAnimation",
            value: function value() {
                _get(_getPrototypeOf(WinBase.prototype), "doHideAnimation", this).call(this);
            }
        }, {
            key: "OnFrameUpdate",
            value: function value(e) { }
        }, {
            key: "OnTimeUpdate",
            value: function value(e) { }
        }]), WinBase;
    }(),
        k = function () {
            function WinMgr() {
                _classCallCheck(this, WinMgr);
            }
            return _createClass(WinMgr, [{
                key: "GetAllWindows",
                value: function value() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], a = new Array(), i = 0; i < fairygui.GRoot.inst.numChildren; i++) {
                        var o = fairygui.GRoot.inst.getChildAt(i);
                        if (o instanceof fairygui.Window) if (0 == e || 1 == o.isShowing) if (o instanceof B) 1 != t && 0 != o.notDel || a.push(o); else a.push(o);
                    }
                    return a;
                }
            }, {
                key: "FindWindow",
                value: function value(e) {
                    return this.GetAllWindows().find(function (t, a, i) {
                        return t instanceof e;
                    });
                }
            }, {
                key: "ShowWindow",
                value: function value(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = this.FindWindow(e);
                    return null == a && (a = new e()), a.data = t, fairygui.GRoot.inst.showWindow(a),
                        a;
                }
            }, {
                key: "HideWindow",
                value: function value(e) {
                    var t = this.FindWindow(e);
                    return null != t && (fairygui.GRoot.inst.hideWindow(t), !0);
                }
            }, {
                key: "HideAllWindows",
                value: function value() {
                    this.GetAllWindows().forEach(function (e) {
                        fairygui.GRoot.inst.hideWindow(e);
                    });
                }
            }, {
                key: "DeleteAllWindows",
                value: function value() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.GetAllWindows(!1, t).forEach(function (t) {
                        e ? t.dispose() : fairygui.GRoot.inst.hideWindowImmediately(t);
                    }), fairygui.GRoot.inst.hidePopup();
                }
            }, {
                key: "ShowModalWait",
                value: function value() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    fairygui.GRoot.inst.showModalWait(e);
                }
            }, {
                key: "HideModalWait",
                value: function value() {
                    fairygui.GRoot.inst.closeModalWait();
                }
            }], [{
                key: "GetWinData",
                value: function value(e) {
                    return null;
                }
            },
            {
                key: "Instance",
                get: function get() {
                    return null == this.mInstance && (this.mInstance = new WinMgr()), this.mInstance;
                }
            }
            ]), WinMgr;
        }();
    !function (e) {
        e[e.None = 0] = "None", e[e.Prop1 = 1] = "Prop1", e[e.Prop2 = 2] = "Prop2", e[e.Prop3 = 3] = "Prop3",
            e[e.Prop4 = 4] = "Prop4", e[e.Prop5 = 5] = "Prop5", e[e.Prop6 = 6] = "Prop6";
    }(w || (w = {})), function (e) {
        e[e.None = 0] = "None", e[e.Line1 = 1] = "Line1", e[e.Line2 = 2] = "Line2";
    }(S || (S = {})), function (e) {
        e[e.None = 0] = "None", e[e.Dire1 = 1] = "Dire1", e[e.Dire2 = 2] = "Dire2", e[e.Dire3 = 3] = "Dire3",
            e[e.Dire4 = 4] = "Dire4";
    }(f || (f = {})), function (e) {
        e[e.Up = 1] = "Up", e[e.Down = 2] = "Down", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right";
    }(L || (L = {})), function (e) {
        e[e.Sun = 1] = "Sun", e[e.Ni = 2] = "Ni";
    }(p || (p = {})), function (e) {
        e[e.None = 0] = "None", e[e.Cost = 1] = "Cost", e[e.Shop = 2] = "Shop", e[e.Power = 3] = "Power";
    }(v || (v = {})), function (e) {
        e[e.None = 0] = "None", e[e.Mian = 1] = "Mian", e[e.Game = 2] = "Game";
    }(C || (C = {})), function (e) {
        e[e.Destination = 1] = "Destination", e[e.BossEnd = 2] = "BossEnd", e[e.NotLife = 3] = "NotLife";
    }(I || (I = {})), function (e) {
        e[e.Game0 = 0] = "Game0", e[e.Game1 = 1] = "Game1", e[e.Game2 = 2] = "Game2";
    }(D || (D = {}));
    var A = function (e) {
        function WinGet() {
            var e;
            return _classCallCheck(this, WinGet), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinGet).call(this))).winUrl = "ui://Main/WinGet",
                e.winDepth = 10, e.needShowAnimation = !0, e.clickBlackBgHide = !0, e.clickBtnCloseHide = !0,
                e;
        }
        return _inherits(WinGet, B), _createClass(WinGet, [{
            key: "onInit",
            value: function value() {
                _get(_getPrototypeOf(WinGet.prototype), "onInit", this).call(this), this.mLoaderType = this.contentPane.getChild("LoaderType").asLoader,
                    this.mLabelNum = this.contentPane.getChild("LabelNum").asTextField, this.mBtnEnter = this.contentPane.getChild("BtnEnter").asButton,
                    this.mBtnEnter.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), k.Instance.HideWindow(WinGet);
                    });
            }
        }, {
            key: "doShowAnimation",
            value: function value() {
                if (_get(_getPrototypeOf(WinGet.prototype), "doShowAnimation", this).call(this),
                    this.data) {
                    if (this.mData = this.data, this.mLabelNum.text = "x" + this.mData.GetNum, this.mData.GetType == v.Shop && (this.mLoaderType.url = "ui://Main/props_" + this.mData.GetNum + "_" + this.mData.GetId,
                        this.mLabelNum.text = "x1"), this.mData.GetType == v.Power) {
                        this.mLoaderType.url = "ui://Main/cost_3";
                        var e = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                        e += this.mData.GetNum, Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", e.toString());
                        var t = k.Instance.FindWindow(F);
                        if (t) t.GetPoewrTime();
                    } else this.mLoaderType.url = "ui://Main/cost_1";
                    this.mData.GetType == v.Cost && this.GetDiamo(1);
                }
            }
        }, {
            key: "GetDiamo",
            value: function value(e) {
                r.Instance.PlaySound("get_gold");
                var t = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "user_gold") || "0");
                t += this.mData.GetNum * e, Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "user_gold", t.toString());
                var a = k.Instance.FindWindow(F);
                if (a);
            }
        }]), WinGet;
    }(), T = function (e) {
        function WinSign() {
            var e;
            window.WinSign = this;
            return _classCallCheck(this, WinSign), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinSign).call(this))).mSignDataList = new Array(),
                e.mSignObjList = new Array(), e.winUrl = "ui://Main/WinSign", e.winDepth = 10, e.needShowAnimation = !0,
                e.clickBlackBgHide = !0, e.clickBtnCloseHide = !0, e;
        }
        return _inherits(WinSign, B), _createClass(WinSign, [{
            key: "onInit",
            value: function value() {
                var e = this;
                _get(_getPrototypeOf(WinSign.prototype), "onInit", this).call(this), this.mComSign = this.contentPane.getChild("ComSign").asCom,
                    this.mBtnGet = this.contentPane.getChild("BtnGet").asButton, this.mBtnDoubleGet = this.contentPane.getChild("BtnGetDouble").asButton;
                for (var t = 0; t < 7; t++) {
                    var a = this.mComSign.getChild("Sign" + t);
                    this.mSignObjList.push(a);
                }
                this.mBtnDoubleGet.visible = false;
                this.mBtnGet.onClick(this, function (t) {
                    e.GetSign(1);
                    console.log("get en");
                    // if (r.Instance.PlaySound("click"), 1 == e.mBtnDoubleGet.selected) {
                    //     var a = e;
                    //     // webuzzSDK.pay(function (e) {
                    //     //     0 == e ? Laya.Browser.window.wx.showToast({
                    //     //         title: "暂时没有视频可观看，请稍后再试",
                    //     //         icon: "none",
                    //     //         duration: 2e3,
                    //     //         mask: !1
                    //     //     }) : 1 == e ? a.GetSign(2) : 2 == e && Laya.Browser.window.wx.showToast({
                    //     //         title: "视频没有看完，无法获得提示",
                    //     //         icon: "none",
                    //     //         duration: 2e3,
                    //     //         mask: !1
                    //     //     });
                    //     // });
                    // } else e.GetSign(1);

                });
            }
        }, {
            key: "GetSign",
            value: function value(e) {
                for (var t = 0, a = 0, i = 0; i < this.mSignDataList.length; i++) {
                    var o = this.mSignDataList[i];
                    if (2 == o.State) {
                        var n = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "sign_config");
                        n = n ? JSON.parse(n) : new Array(), this.mSignObjList[i].SetState(1);
                        var r = {
                            Id: o.Id,
                            IsGet: 1
                        };
                        t += o.Cost * e, a = o.Type, o.State = 1, n.push(r),
                            Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "sign_config", JSON.stringify(n)),
                            this.SetResetTime(n);
                    }
                }

                if (t > 0) {
                    var h = {
                        GetScene: C.Mian,
                        GetType: v.Power,
                        GetId: a,
                        GetNum: t
                    };
                    k.Instance.ShowWindow(A, h);
                } else platform.getInstance().prompt("No rewards to collect");
                window["mLabelPower"].text = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play");
            }
        }, {
            key: "doShowAnimation",
            value: function value() {
                var e = this;
                _get(_getPrototypeOf(WinSign.prototype), "doShowAnimation", this).call(this), this.mComSign.visible = !1,
                    this.mBtnDoubleGet.selected = !0;
                var a = 0, i = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "first_time");
                i && (a = Math.floor((Date.now() / 1e3 - Number(i)) / 86400)), t.Log("与首次登陆时间相差天数:" + (a + 1));
                var o = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "sign_config");
                if (o) JSON.parse(o);
                Laya.loader.load("res/Config/MainSignConfig.json", Laya.Handler.create(this, function (t) {
                    t.forEach(function (t) {
                        t.State = 0, o && JSON.parse(o).forEach(function (e) {
                            t.Id == e.Id && (t.State = e.IsGet);
                        }), a >= t.Id && 1 != t.State && (t.State = 2), e.mSignDataList.push(t);
                    });
                    for (var i = 0; i < e.mSignObjList.length; i++) {
                        var n = e.mSignObjList[i], s = e.mSignDataList[i];
                        n.Init(s);
                    }
                    e.mComSign.visible = !0;
                }), null, Laya.Loader.JSON);
            }
        }, {
            key: "SetResetTime",
            value: function value(e) {
                if (e.length >= 7) {
                    var t = !0;
                    if (e.forEach(function (e) {
                        2 == e.IsGet && (t = !1);
                    }), t) {
                        var a = Date.now() / 1e3, i = a - a % 86400 - 28800;
                        Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "reset_sign_time", i.toString());

                    }
                }
            }
        }]), WinSign;
    }(), M = function () {
        function StarCostLogic() {
            _classCallCheck(this, StarCostLogic), this.mSkinList = new Array(), this.mSkinNum = 9,
                this.mTrySkinId = -1;
        }
        return _createClass(StarCostLogic, [{
            key: "Init",
            value: function value() {
                this.mSkinList = this.GetSkinList();
            }
        }, {
            key: "GetSkin",
            value: function value() {
                var e = this.RandomGetSkin();
                if (-1 != e) {
                    var t = StarCostLogic.Instance.GetStarNum();
                    t -= 100, StarCostLogic.Instance.SaveStarNum(t),
                        this.mSkinList.push(e), this.SaveUnlockSkin(this.mSkinList);
                } else platform.getInstance().prompt("Purchase limit reached");
            }
        }, {
            key: "RandomGetSkin",
            value: function value() {
                var e = Math.round(Math.random() * this.mSkinNum);
                if (1 == this.mSkinNum - this.mSkinList.length)
                    return this.RandomGetSkin();
                if (0 == e || 1 == e)
                    return this.RandomGetSkin();
                for (var t = 0; t < this.mSkinList.length; t++) {
                    if (e == this.mSkinList[t])
                        return this.RandomGetSkin();
                }
                return e;
            }
        }, {
            key: "RandomTry",
            value: function value() {
                var e = !1;
                return Math.round(100 * Math.random()) < 55 && (e = !0), e;
            }
        }, {
            key: "SetTrySkinId",
            value: function value(e) {
                this.mTrySkinId = e;
            }
        }, {
            key: "GetTrySkinId",
            value: function value() {
                return this.mTrySkinId;
            }
        }, {
            key: "SetSkinId",
            value: function value(e) {
                Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "skin_id", e.toString());
            }
        }, {
            key: "GetSkinId",
            value: function value() {
                return Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "skin_id") || 1);
            }
        }, {
            key: "SaveUnlockSkin",
            value: function value(e) {
                Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "skin_list", JSON.stringify(e));
            }
        }, {
            key: "GetSkinList",
            value: function value() {
                var e = new Array(), t = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "skin_list");
                return t && (e = JSON.parse(t)), e;
            }
        }, {
            key: "GetStarNum",
            value: function value() {
                if (Laya.LocalStorage.getItem("Qiu-Qiu-star_num")) {
                    console.log("GetStatrNum:" + Number(Laya.LocalStorage.getItem("Qiu-Qiu-star_num")));
                    return Number(Laya.LocalStorage.getItem("Qiu-Qiu-star_num"))
                } else {
                    return 0;
                }
                // return Number(Laya.LocalStorage.getItem("Qiu-Qiu-star_num") || 0);
            }
        }, {
            key: "SaveStarNum",
            value: function value(e) {
                Laya.LocalStorage.setItem("Qiu-Qiu-star_num", e.toString());
                console.log("GetStatrNum:" + Number(Laya.LocalStorage.getItem("Qiu-Qiu-star_num")));
            }
        }], [{
            key: "Instance",
            get: function get() {
                return null == this.mInstance && (this.mInstance = new StarCostLogic()), this.mInstance;
            }
        }]), StarCostLogic;
    }(), _ = function DefineData() {
        _classCallCheck(this, DefineData);
    }, b = function GameData() {
        _classCallCheck(this, GameData);
    }, O = function BaseData() {
        _classCallCheck(this, BaseData);
    }, R = function CubeData() {
        _classCallCheck(this, CubeData);
    }, V = function MapData() {
        _classCallCheck(this, MapData);
    }, G = function MoveDistance() {
        _classCallCheck(this, MoveDistance);
    }, K = function BallData() {
        _classCallCheck(this, BallData);
    }, W = function ShopData() {
        _classCallCheck(this, ShopData);
    }, x = function (e) {
        function WinShop() {
            var e;
            return _classCallCheck(this, WinShop), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinShop).call(this))).mShopDataList = new Array(),
                e.mShopObjList = new Array(), e.winUrl = "ui://Main/WinShop", e.winDepth = 10, e.needShowAnimation = !0,
                e.clickBlackBgHide = !0, e.clickBtnCloseHide = !0, e;

        }
        return _inherits(WinShop, B), _createClass(WinShop, [{
            key: "onInit",
            value: function value() {
                window.WinShop2 = this;
                var e = this;
                _get(_getPrototypeOf(WinShop.prototype), "onInit", this).call(this), this.mListShop = this.contentPane.getChild("ListShop").asList,
                    this.mBtnGet = this.contentPane.getChild("BtnGet").asButton, this.mBtnMoreStar = this.contentPane.getChild("BtnMoreStar").asButton,
                    this.mLabelStarNum = this.contentPane.getChild("LabelStarNum").asTextField,
                    this.mBtnGet.onClick(this, function (t) {
                        r.Instance.PlaySound("click"),
                            M.Instance.GetStarNum() < 100 ? platform.getInstance().prompt("Not enough stars") :
                                (M.Instance.GetSkin(), e.LoadList());
                    }), this.mBtnMoreStar.onClick(this, function (e) {
                        r.Instance.PlaySound("click");
                        platform.getInstance().showReward(() => {
                            var t = M.Instance.GetStarNum();
                            t += 20,
                                M.Instance.SaveStarNum(t),
                                this.SetStarNum();
                        })
                    });
            }
        }, {
            key: "doShowAnimation",
            value: function value() {
                _get(_getPrototypeOf(WinShop.prototype), "doShowAnimation", this).call(this), this.LoadList(),
                    this.mListShop.visible = !1;
            }
        }, {
            key: "LoadList",
            value: function value() {
                var e = this;
                this.SetStarNum(), this.mShopDataList = [];
                var t = M.Instance.GetSkinList();
                Laya.loader.load("res/Config/MainShopConfig.json", Laya.Handler.create(this, function (a) {
                    a.forEach(function (a) {
                        var i = new W();
                        i.Id = a.Id, i.Name = a.Name, i.IsGet = !1, 1 == i.Id && (i.IsGet = !0), t.forEach(function (e) {
                            i.Id == e && (i.IsGet = !0);
                        }), e.mShopDataList.push(i);
                    }), e.InitSkinList();
                }), null, Laya.Loader.JSON);
            }
        }, {
            key: "InitSkinList",
            value: function value() {
                var e = this;
                this.mListShop.removeChildrenToPool(), this.mListShop.ensureBoundsCorrect(), this.mShopDataList && this.mShopDataList.length > 0 && this.mShopDataList.forEach(function (t) {
                    e.mListShop.addItemFromPool().Init(t, e.Refresh, e);
                }), this.mListShop.visible = !0;
            }
        }, {
            key: "SetStarNum",
            value: function value() {
                // var e = M.Instance.GetStarNum();
                if (Laya.LocalStorage.getItem("Qiu-Qiu-star_num")) {
                    var e = Laya.LocalStorage.getItem("Qiu-Qiu-star_num")
                } else {
                    var e = 0;
                }
                console.log("mLabelStarNum " + this.mLabelStarNum);
                this.mLabelStarNum.text = "x" + e;
            }
        }, {
            key: "Refresh",
            value: function value(e) {
                e.LoadList();
            }
        }]), WinShop;
    }(),
        U = function (e) {
            function WinGame() {
                var e;
                return _classCallCheck(this, WinGame),
                    (e = _possibleConstructorReturn(this, _getPrototypeOf(WinGame).call(this))).mStarPosList = new Array(),
                    e.mLevelId = 1, e.winUrl = "ui://Main/WinGame", e.winDepth = 1, e.needShowAnimation = !1,
                    e.clickBlackBgHide = !1, e.clickBtnCloseHide = !1, e.needFrameUpdate = !0, e;
            }
            return _inherits(WinGame, B), _createClass(WinGame, [{
                key: "onInit",
                value: function value() {
                    var e = this;
                    _get(_getPrototypeOf(WinGame.prototype), "onInit", this).call(this),
                        this.mComGame = this.contentPane.getChild("ComGame"),
                        this.mComTopStar = this.contentPane.getChild("ComTopStar"),
                        this.mComPower = this.mComTopStar.getChild("ComPower").asButton,
                        this.mLabelPower = this.mComPower.getChild("LabelPower").asTextField,
                        this.mComGameEnd = this.contentPane.getChild("ComGameEnd");
                    var t = this.contentPane.getChild("ComDown").asCom;
                    this.mCutCtrl = t.getController("CutCtrl"), this.mBtnReset = t.getChild("BtnReset").asButton,
                        this.mBtnNext = t.getChild("BtnNext").asButton, this.mImageAdv = t.getChild("ImageAdv").asImage,
                        this.mBtnShop = t.getChild("BtnShop").asButton, this.mBtnSign = t.getChild("BtnSign").asButton,
                        this.mLabelLevel = this.contentPane.getChild("LabelLevel").asTextField,
                        this.mSelectCtrl = this.contentPane.getController("SelectCtrl");
                    this.contentPane.getChild("ComCut").asCom;
                    for (var a = 0; a < 3; a++) {
                        var i = this.contentPane.getChild("StarPos" + a).asGraph;
                        i && this.mStarPosList.push(i);
                    }
                    this.mBtnShop.visible = true;
                    this.mBtnSign.visible = true;

                    window["mBtnShop"] = this.mBtnShop;
                    window["mBtnSign"] = this.mBtnSign;
                    // const mask = new Laya.Image();
                    // mask.skin = "res/UI/mask.png";
                    // mask.zOrder = 2e5;
                    // // window.yad = yad;
                    // // yad.top = 0;
                    // // yad.right = 0;
                    // // yad.scaleX=0.8;
                    // // yad.scaleY=0.8;


                    // const Image = Laya.Image;
                    // let mask=new Image("res/UI/mask.png");
                    // Laya.stage.addChild(mask);
                    // mask.mouseEnable=true;
                    // mask.on(Laya.Event.CLICK,this,()=>{
                    //     console.log(":dasfdasfads")
                    // })

                    // mask.zOrder = 2e5;
                    // mask.centerX=0;
                    // mask.y=946;
                    // mask.scaleX=1.1;
                    // mask.scaleY=1.1;


                    this.mBtnReset.onClick(this, function (t) {
                        platform.getInstance().showInterstitial(() => {
                            // $.Instance.mEndCubeList = new Array();
                            r.Instance.PlaySound("click"),
                                k.Instance.HideWindow(WinGame),
                                H.Instance.SelectLevel(e.mLevelId, D.Game1);

                        })
                    }), this.mBtnShop.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), k.Instance.ShowWindow(x);
                    }), this.mBtnSign.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), k.Instance.ShowWindow(T);
                    }), this.mBtnNext.onClick(this, function (t) {
                        r.Instance.PlaySound("click");
                        platform.getInstance().showReward(() => {
                            $.Instance.isSkipLevel();//球暂停
                            // H.Instance.LoadLevel();

                            console.log("skiplevel");
                            var ttt = {
                                Url: this.mLevelId,
                                Score: 0,
                                IsPlayer: 1
                            };
                            a = {
                                Url: this.mLevelId + 1,
                                Score: -1,
                                IsPlayer: 0
                            };

                            console.log("SaveLevel " + ttt.Url);
                            H.Instance.SaveLevel(ttt);
                            H.Instance.SaveLevel(a);


                            k.Instance.HideWindow(WinGame);
                            if (e.mLevelId + 1 > 496) {
                                for (var i = 1; i < 500; i++) {
                                    var levelconf = {
                                        Url: i,
                                        Score: -1,
                                        IsPlayer: 0
                                    };
                                    H.Instance.SaveLevel(levelconf);
                                }
                                H.Instance.LoadLevel(1, D.Game1);
                                window.currentLevel = 1;

                            } else {
                                console.log("LoadLevel " + (e.mLevelId + 1));
                                H.Instance.LoadLevel(e.mLevelId + 1, D.Game1);
                                window.currentLevel = this.mLevelId + 1;
                                // if(e.mLevelId <485)
                                // {
                                //     H.Instance.LoadLevel(e.mLevelId + 10, D.Game1);
                                // }else{
                                //     H.Instance.LoadLevel(e.mLevelId + 1, D.Game1);
                                // }

                            }
                            console.log("currentLevel " + window.currentLevel)

                            // if (e.mLevelId < 470) {
                            //     H.Instance.SelectLevel(e.mLevelId + 10, D.Game1);
                            // } else {
                            //     H.Instance.SelectLevel(e.mLevelId + 1, D.Game1);
                            // }

                            // M.Instance.SetTrySkinId(this.mSkinId),
                            //     this.SkipLevel(),
                            //      k.Instance.HideWindow(WinTrySkin);

                            // H.Instance.ReducePower();
                            // if (null == H.Instance.GetLevel(e.mLevelId + 1)) {
                            //     var ttt = {
                            //         Url: this.mLevelId,
                            //         Score: 0,
                            //         IsPlayer: 1
                            //     },

                            //     a = {
                            //         Url: this.mLevelId + 1,
                            //         Score: -1,
                            //         IsPlayer: 0
                            //     };
                            //     H.Instance.SaveLevel(ttt),
                            //     H.Instance.SaveLevel(a),

                            //         k.Instance.HideWindow(WinGame),
                            //         H.Instance.SelectNewLevel()

                            // } else {

                            //     k.Instance.HideWindow(WinGame),
                            //         H.Instance.SelectLevel(e.mLevelId + 1, D.Game1);
                            // }
                        });

                    }), this.mSelectCtrl.on(fairygui.Events.STATE_CHANGED, this, function (e) {
                        r.Instance.PlaySound("main_cut");
                    });
                    window["mBtnShop"] && (window["mBtnShop"].visible = false);
                    window["mBtnSign"] && (window["mBtnSign"].visible = false);
                    // const Button = Laya.Button;
                    // let soundBtn = new Button();
                    // musicState = Laya.LocalStorage.getItem("Unblock-The-Ball-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Unblock-The-Ball-musicState")) : false;
                    // console.log("//////////////////////////////////" + musicState);

                    // musicState ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                    // soundBtn.stateNum = 1;
                    // soundBtn.x = 100;
                    // soundBtn.y = 180;
                    // soundBtn.on(Laya.Event.CLICK, this, () => {
                    //     // window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    //     if (!musicState) {
                    //         window.WebAudioEngine.stopMusic("res/Sound/bgm.mp3");
                    //         musicState = true;
                    //     } else {
                    //         window.WebAudioEngine.playMusic("res/Sound/bgm.mp3", 1);
                    //         musicState = false;
                    //     }
                    //     musicState ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                    //     Laya.LocalStorage.setItem("Unblock-The-Ball-musicState", musicState);
                    // })
                    // Laya.stage.addChild(soundBtn);

                    // const Button = Laya.Button;
                    // let soundBtn = new Button();
                    // window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Unblock-The-Ball-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Unblock-The-Ball-musicState")) : false;
                    // console.log("//////////////////////////////////" + window.WebAudioEngine.pause);

                    // window.WebAudioEngine.pause ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                    // soundBtn.stateNum = 1;
                    // soundBtn.x = 100;
                    // soundBtn.y = 180;
                    // soundBtn.on(Laya.Event.CLICK, this, () => {
                    //     window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    //     window.WebAudioEngine.pause ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                    //     Laya.LocalStorage.setItem("Unblock-The-Ball-musicState", window.WebAudioEngine.pause);
                    // })
                    // Laya.stage.addChild(soundBtn);

                }
            },
            {
                key: "onShown",
                value: function value() {
                    if (_get(_getPrototypeOf(WinGame.prototype), "onShown", this).call(this), k.Instance.HideWindow(F),
                        this.mComTopStar.Init(), this.GetPoewrTime(), Laya.timer.loop(6e4, this, this.GetPoewrTime),
                        this.data) {
                        var e = this.data;
                        this.mLevelId = e.GameLevel.Slv;
                        var t = H.Instance.GetLevel(this.mLevelId + 1);
                        this.mImageAdv.visible = null == t,
                            this.contentPane.getChildAt(7).visible = false;
                        //关卡文本背景

                        this.mLabelLevel.fontSize = 60;
                        this.mLabelLevel.color = "#ffffff";
                        this.mLabelLevel.x = 275;
                        this.mLabelLevel.y = 200;
                        this.mLabelLevel.text = "Level:" + this.mLevelId,
                            this.mComGameEnd.Init(e.GameLevel.Slv), this.mComGameEnd.visible = !1, r.Instance.PlaySound("game_start"),
                            r.Instance.PlaySound("game_start2"), this.mComGame.Init(e, this.mComTopStar, this.mComGameEnd, this.mStarPosList),
                            this.SelectCut(1);
                    }
                    // webuzzSDK.showGame({
                    //     naviY: 100,
                    //     bannerY: Laya.stage.height - 200,
                    //     gridY: -640,
                    //     drawerY: Laya.stage.height - 336,
                    //     level: 1
                    // });
                }
            }, {
                key: "SelectCut",
                value: function value(e) {
                    this.mSelectCtrl.selectedIndex = e, 0 == e && Laya.timer.once(800, this, function (e) {
                        k.Instance.HideWindow(WinGame), k.Instance.ShowWindow(F, 0);
                    }), this.mCutCtrl.selectedIndex = 1 == e ? 1 : 0;
                }
            }, {
                key: "GetPoewrTime",
                value: function value() {
                    var e = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_time"),
                        t = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                    if (t < 10) if (e) {
                        var a = Math.floor((Date.now() / 1e3 - Number(e)) / 60);
                        (t += Math.floor(a / 10)) > 10 && (t = 10, Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "power_time")),
                            a >= 10 && this.SetPoewrTime();
                    } else this.SetPoewrTime();
                    t <= 0 && (t = 0),

                        window["mLabelPower"] = this.mLabelPower,
                        Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", t.toString()),
                        this.mLabelPower.text = t.toString();

                    // ComGameTopStar.Instance && (ComGameTopStar.Instance.mLabelPower.text = "111111");
                }
            }, {
                key: "SetPoewrTime",
                value: function value() {
                    var e = Math.floor(Date.now() / 1e3);
                    Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_time", e.toString());
                }
            }, {
                key: "onHide",
                value: function value() {
                    _get(_getPrototypeOf(WinGame.prototype), "onHide", this).call(this), this.mComGame.OnHidden(),
                        this.mComTopStar.OnHide(), Laya.timer.clear(this, this.GetPoewrTime);
                }
            }, {
                key: "OnFrameUpdate",
                value: function value(e) {
                    _get(_getPrototypeOf(WinGame.prototype), "OnFrameUpdate", this).call(this, e), this.mComGame.OnFrameUpdate(e);
                }
            },
            {
                key: "Instance",
                get: function get() {
                    return null == this.mInstance && (this.mInstance = new WinGame()), this.mInstance;
                }
            }
            ]), WinGame;
        }(), E = function BoxData() {
            _classCallCheck(this, BoxData);
        }, N = function (e) {
            function WinConfirmBox() {
                var e;
                return _classCallCheck(this, WinConfirmBox), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinConfirmBox).call(this))).winUrl = "ui://Main/WinConfirmBox",
                    e.winDepth = 10, e.needShowAnimation = !0, e.clickBlackBgHide = !0, e.clickBtnCloseHide = !0,
                    e;
            }
            return _inherits(WinConfirmBox, B), _createClass(WinConfirmBox, [{
                key: "onInit",
                value: function value() {
                    var e = this;
                    _get(_getPrototypeOf(WinConfirmBox.prototype), "onInit", this).call(this), this.mLabelTips = this.contentPane.getChild("LabelTips").asTextField,
                        this.mBtnEnter = this.contentPane.getChild("BtnEnter").asButton, this.mBtnCancel = this.contentPane.getChild("BtnCancel").asButton,
                        this.mBtnEnter.onClick(this, function (t) {
                            r.Instance.PlaySound("click"), 1 == e.mData.Type ? e.GetPower() : 2 == e.mData.Type && e.NotPower();
                        }), this.mBtnCancel.onClick(this, function (e) {
                            r.Instance.PlaySound("click"), k.Instance.HideWindow(WinConfirmBox);
                        });
                }
            }, {
                key: "doShowAnimation",
                value: function value() {
                    console.log("-------------------------------------mLabelTips")
                    _get(_getPrototypeOf(WinConfirmBox.prototype), "doShowAnimation", this).call(this),
                        this.data && (this.mData = this.data, this.mLabelTips.text = this.mData.Text);
                }
            }, {
                key: "NotPower",
                value: function value() {
                    webuzzSDK.pay(function (e) {
                        if (0 == e) Laya.Browser.window.wx.showToast({
                            title: "暂时没有视频可观看，请稍后再试",
                            icon: "none",
                            duration: 2e3,
                            mask: !1
                        }); else if (1 == e) {
                            var t = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                            t < 10 && (t += 1, Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", t.toString())),
                                k.Instance.HideWindow(WinConfirmBox);
                        } else 2 == e && Laya.Browser.window.wx.showToast({
                            title: "视频没有看完，无法获得提示",
                            icon: "none",
                            duration: 2e3,
                            mask: !1
                        });
                    });
                }
            }, {
                key: "GetPower",
                value: function value() {
                    console.log("GetPower")
                    var e = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");

                    if (e >= 10) {
                        platform.getInstance().prompt("Full of energy")
                    } else {
                        platform.getInstance().showReward(() => {
                            (e += 5) > 10 && (e = 10),
                                Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", e.toString());
                            console.log("Power++");
                            var a = k.Instance.FindWindow(F);
                            if (a) a.GetPoewrTime();
                            k.Instance.HideWindow(WinConfirmBox);
                            try {
                                console.log("-------------------------------------window.mLabelPower");
                                window["mLabelPower"] && (window["mLabelPower"].text = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play")) + "");

                            } catch (ex) {

                            }

                        })
                    }
                    ;

                }
            }]), WinConfirmBox;
        }(),
        H = function () {
            function LevelManageLogic() {
                _classCallCheck(this, LevelManageLogic);
            }
            return _createClass(LevelManageLogic, [{
                key: "GetLevelData",
                value: function value(e) {
                    var t = null;
                    return this.mLevelList.forEach(function (a) {
                        a.SLv == e && (t = a);
                    }), t;
                }
            }, {
                key: "Init",
                value: function value(e) {
                    this.mLevelList = e, this.SetLevelData()
                    // , this.SelectNewLevel();
                }
            }, {
                key: "SelectLevel",
                value: function value(e, t) {
                    console.log(e, t);
                    if (this.GetLevelData(e)) {
                        this.LoadLevel(e, t)
                    } else {
                        platform.getInstance().prompt("Select level does not exist");
                        this.LoadLevel(1, 1);
                    }
                }
            }, {
                key: "ReducePower",
                value: function value() {
                    var e = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                    if (e <= 0) {
                        var t = new E();
                        return t.Type = 1, t.Text = "Watch the video to \nget Energy +5", k.Instance.ShowWindow(N, t), !1;
                    }
                    e -= 1, Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", e.toString());
                    console.log("Power++");
                    var a = k.Instance.FindWindow(U);
                    a && a.GetPoewrTime();
                    return !0;
                }
            }, {
                key: "SelectLevel0",
                value: function value(e, t) {
                    this.LoadLevel(e, t);
                }
            }, {
                key: "SetLevelData",
                value: function value() {
                    if (this.mLevelList && this.mLevelList.length > 0) for (var e = 0; e < this.mLevelList.length; e++) {
                        var t = this.mLevelList[e], a = this.GetLevel(t.SLv);
                        t.Score = null != a ? a.Score : t.Score, t.IsPlayer = null != a ? a.IsPlayer : 0;
                        var i = e - 1;
                        if (i >= 0) {
                            var o = this.mLevelList[i];
                            !o || -2 != t.Score && -3 != t.Score || 1 == o.IsPlayer && (t.Score = -1);
                        }
                    }
                }
            }, {
                key: "SelectNewLevel",
                value: function value() {
                    for (var e = 0; e < this.mLevelList.length; e++) {
                        var t = this.mLevelList[e];
                        console.log("t.IsPlayer" + t.IsPlayer);
                        if (0 == t.IsPlayer)
                            return void this.LoadLevel(t.SLv, D.Game1);
                    }
                }
            }, {
                key: "LoadLevel",
                value: function value(e, t) {
                    var a = ["res/Config/Level/LevelConfig_" + e + ".json", "res/Config/Level/LevelBaseConfig.json"];
                    Laya.loader.load(a, Laya.Handler.create(this, function (a) {
                        var i = Laya.loader.getRes("res/Config/Level/LevelBaseConfig.json"),
                            o = Laya.loader.getRes("res/Config/Level/LevelConfig_" + e + ".json");
                        o.GameBase = i, o.GameLevel.Slv = e, o.GameLevel.GameId = t,
                            k.Instance.ShowWindow(U, o);
                    }), null, Laya.Loader.JSON);
                }
            }, {
                key: "GetLevel",
                value: function value(e) {
                    var t = null, a = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "level_data");
                    // console.log("aaaaa  "+a);
                    return (a = a ? JSON.parse(a) : new Array()).forEach(function (a) {
                        e == a.Url && (t = a);
                    }), t;
                }
            }, {
                key: "SaveLevel",
                value: function value(e) {
                    var t = !1, a = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "level_data");
                    (a = a ? JSON.parse(a) : new Array()).forEach(function (a) {
                        e.Url == a.Url && (t = !0, a.Score = e.Score, a.IsPlayer = e.IsPlayer);
                    }), 0 == t && a.push(e), Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "level_data", JSON.stringify(a)),
                        this.SetLevelData();
                }
            }],
                [{
                    key: "Instance",
                    get: function get() {
                        return null == this.mInstance && (this.mInstance = new LevelManageLogic()), this.mInstance;
                    }
                }]
            ), LevelManageLogic;
        }(), X = function (e) {
            function WinTrySkin() {
                var e;
                window.WinTrySkin = this;
                return _classCallCheck(this, WinTrySkin),
                    (e = _possibleConstructorReturn(this, _getPrototypeOf(WinTrySkin).call(this))).winUrl = "ui://Main/WinTrySkin",
                    e.winDepth = 10, e.needShowAnimation = !0, e.clickBlackBgHide = !1, e.clickBtnCloseHide = !1,
                    e.needFrameUpdate = !0, e;

            }
            return _inherits(WinTrySkin, B), _createClass(WinTrySkin, [{
                key: "onInit",
                value: function value() {
                    var e = this;
                    _get(_getPrototypeOf(WinTrySkin.prototype), "onInit", this).call(this),
                        this.mLoaderType = this.contentPane.getChild("LoaderType").asLoader,
                        this.mBtnEnter = this.contentPane.getChild("BtnEnter").asButton,
                        this.mBtnCancel = this.contentPane.getChild("BtnCancel").asButton,
                        this.mBtnEnter.onClick(this, function (e) {
                            platform.getInstance().showReward(() => {
                                r.Instance.PlaySound("click");
                                M.Instance.SetTrySkinId(this.mSkinId),
                                    this.SkipLevel(),
                                    k.Instance.HideWindow(WinTrySkin);
                            })
                            // webuzzSDK.pay(function (e) {
                            //     0 == e ? Laya.Browser.window.wx.showToast({
                            //         title: "暂时没有视频可观看，请稍后再试",
                            //         icon: "none",
                            //         duration: 2e3,
                            //         mask: !1
                            //     }) : 1 == e ? (
                            //         M.Instance.SetTrySkinId(this.mSkinId),
                            //          this.SkipLevel(), k.Instance.HideWindow(WinTrySkin)
                            //          ) : 2 == e && Laya.Browser.window.wx.showToast({
                            //         title: "视频没有看完，无法获得提示",
                            //         icon: "none",
                            //         duration: 2e3,
                            //         mask: !1
                            //     });
                            // });
                        }),
                        this.mBtnCancel.onClick(this, function (t) {
                            r.Instance.PlaySound("click"), e.SkipLevel(), k.Instance.HideWindow(WinTrySkin);
                        });
                }
            }, {
                key: "doShowAnimation",
                value: function value() {
                    _get(_getPrototypeOf(WinTrySkin.prototype), "doShowAnimation", this).call(this),
                        this.data && (this.mData = Number(this.data)), this.mLoaderType.visible = !1,
                        this.mSkinId = M.Instance.RandomGetSkin(),
                        this.mLoaderType.url = "ui://Main/shop_" + this.mSkinId,
                        console.log("ui://Main/shop_" + this.mSkinId);
                    this.mLoaderType.visible = !0;
                }
            }, {
                key: "SkipLevel",
                value: function value() {
                    k.Instance.HideWindow(U), H.Instance.SelectNewLevel(), t.Log("选择关卡：" + this.mData);
                }
            }, {
                key: "OnFrameUpdate",
                value: function value(e) {
                    _get(_getPrototypeOf(WinTrySkin.prototype), "OnFrameUpdate", this).call(this, e);
                }
            }],
                [{
                    key: "Instance",
                    get: function get() {
                        return null == this.mInstance && (this.mInstance = new WinTrySkin()), this.mInstance;
                    }
                }]
            ), WinTrySkin;
        }(), F = function (e) {
            function WinMain() {
                var e;
                return _classCallCheck(this, WinMain), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinMain).call(this))).winUrl = "ui://Main/WinMain",
                    e.winDepth = 0, e.needShowAnimation = !1, e.needFrameUpdate = !0, e;
            }
            return _inherits(WinMain, B), _createClass(WinMain, [{
                key: "onInit",

                value: function value() {
                    var e = this;
                    _get(_getPrototypeOf(WinMain.prototype), "onInit", this).call(this),
                        this.mSelectCtrl = this.contentPane.getController("SelectCtrl"),
                        this.mComStatr = this.contentPane.getChild("ComStatr").asCom, this.mComLevel = this.contentPane.getChild("ComLevel"),
                        this.mBtnStart = this.mComStatr.getChild("BtnStart").asButton, this.mComTopStar = this.contentPane.getChild("ComTopStar").asCom,
                        this.mBtnLevel = this.mComTopStar.getChild("BtnLevel").asButton, this.mBtnLevel.visible = !1,
                        this.mComPower = this.mComTopStar.getChild("ComPower").asButton, this.mLabelPower = this.mComPower.getChild("LabelPower").asTextField;
                    var t = this.contentPane.getChild("ComDown").asCom;
                    this.mCutCtrl = t.getController("CutCtrl"), this.mBtnLast = t.getChild("BtnLast").asButton,
                        this.mBtnNext = t.getChild("BtnNext").asButton, this.mBtnShop = t.getChild("BtnShop").asButton,
                        this.mBtnSign = t.getChild("BtnSign").asButton;
                    var a = this.contentPane.getChild("ComStatr").asCom;
                    this.mLoaderLogo = a.getChild("LoaderLogo").asLoader;
                    var i = this.contentPane.getChild("ComCut").asCom;
                    this.mLoaderLogo2 = i.getChild("LoaderLogo").asLoader;
                    this.mBtnStart.onClick(this, function (e) {
                        platform.getInstance().showInterstitial(() => {
                            console.log("mstartbtn");
   
                            (r.Instance.PlaySound("click"), H.Instance.ReducePower()
                            ) && (
                                    console.log("currentLevel " + window.currentLevel),
                                    window.currentLevel && window.currentLevel > 495 ? (
                                        H.Instance.LoadLevel(1, 1)
                                    ) : (M.Instance.RandomTry() ? k.Instance.ShowWindow(X) : H.Instance.SelectNewLevel())
                                );
                        })
                    }), this.mBtnLevel.onClick(this, function (t) {
                        r.Instance.PlaySound("click"), e.SelectCut(1);
                    }), this.mBtnShop.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), k.Instance.ShowWindow(x);
                    }), this.mBtnSign.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), k.Instance.ShowWindow(T);
                    }), this.mComPower.onClick(this, function (e) {
                        r.Instance.PlaySound("click");
                        var t = new E();
                        t.Type = 1, t.Text = "Watch the video to \nget Energy +5", k.Instance.ShowWindow(N, t);
                    }), this.mSelectCtrl.on(fairygui.Events.STATE_CHANGED, this, function (t) {
                        console.log("确定");
                        r.Instance.PlaySound("main_cut"), 1 == e.mSelectCtrl.selectedIndex ? e.mBtnLevel.enabled = !1 : e.mBtnLevel.enabled = !0;
                    }), this.mComLevel.SetBtn(this.mBtnLast, this.mBtnNext), this.SelectCut(0), r.Instance.SetMusicEnable(!0),
                        r.Instance.SetSoundEnable(!0);

                    const Button = Laya.Button;
                    let soundBtn = new Button();
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Unblock-The-Ball-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Unblock-The-Ball-musicState")) : false;
                    console.log("//////////////////////////////////" + window.WebAudioEngine.pause);

                    window.WebAudioEngine.pause ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                    soundBtn.stateNum = 1;
                    soundBtn.x = 100;
                    soundBtn.y = 180;
                    soundBtn.on(Laya.Event.CLICK, this, () => {
                        window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                        window.WebAudioEngine.pause ? soundBtn.skin = "res/UI/musicclose.png" : soundBtn.skin = "res/UI/music.png";
                        Laya.LocalStorage.setItem("Unblock-The-Ball-musicState", window.WebAudioEngine.pause);
                    })
                    Laya.stage.addChild(soundBtn);

                    window.WebAudioEngine.musicVolume = 45;
                    window.WebAudioEngine.playMusic("res/Sound/bgm.mp3", 1);

                }
            }, {
                key: "onShown",
                value: function value() {

                    (_get(_getPrototypeOf(WinMain.prototype), "onShown", this).call(this), this.ResetTime(),
                        this.SetFirstLogin(), M.Instance.Init(), k.Instance.HideWindow(de), this.GetPoewrTime(),
                        Laya.timer.loop(6e4, this, this.GetPoewrTime), this.mComLevel.Init(), this.data) && 1 == this.data && this.SelectCut(1);
                }
            }, {
                key: "onHide",
                value: function value() {
                    _get(_getPrototypeOf(WinMain.prototype), "onHide", this).call(this), Laya.timer.clear(this, this.GetPoewrTime);
                }
            }, {
                key: "GetPoewrTime",
                value: function value() {
                    var e = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_time"),
                        t = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                    if (t < 10) if (e) {
                        var a = Math.floor((Date.now() / 1e3 - Number(e)) / 60);
                        (t += Math.floor(a / 10)) > 10 && (t = 10, Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "power_time")),
                            a >= 10 && this.SetPoewrTime();
                    } else this.SetPoewrTime();
                    t <= 0 && (t = 0),
                        console.log("-------------------------------------mLabelPower")
                    window["mLabelPower"] = this.mLabelPower,
                        Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", t.toString()),
                        console.log("Power++");
                    this.mLabelPower.text = t.toString();
                }
            }, {
                key: "SetPoewrTime",
                value: function value() {
                    var e = Math.floor(Date.now() / 1e3);
                    Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_time", e.toString());
                }
            }, {
                key: "SetFirstLogin",
                value: function value() {
                    if (null == Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "first_time")) {
                        var e = Date.now() / 1e3, t = e - e % 86400 - 28800;
                        Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "first_time", t.toString());
                    }
                }
            }, {
                key: "ResetTime",
                value: function value() {
                    var e = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "reset_sign_time");
                    e && Math.floor((Date.now() / 1e3 - Number(e)) / 86400) >= 1 && (Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "first_time"),
                        Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "sign_config"), Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "reset_sign_time"));
                }
            }, {
                key: "SelectCut",
                value: function value(e) {
                    this.mSelectCtrl.selectedIndex = e,
                        this.mCutCtrl.selectedIndex = 1 == e ? 1 : 0;

                }
            }, {
                key: "OnFrameUpdate",
                value: function value(e) {
                    _get(_getPrototypeOf(WinMain.prototype), "OnFrameUpdate", this).call(this, e);
                }
            }]), WinMain;
        }(), j = function (e) {
            function SceneMain() {
                return _classCallCheck(this, SceneMain), _possibleConstructorReturn(this, _getPrototypeOf(SceneMain).apply(this, arguments));
            }
            return _inherits(SceneMain, o), _createClass(SceneMain, [{
                key: "OnEnter",
                value: function value(e, t) {
                    k.Instance.ShowWindow(F);

                }
            }, {
                key: "OnLeave",
                value: function value() { }
            }]), SceneMain;
        }(), Q = function (e) {
            function ComWait() {
                return _classCallCheck(this, ComWait), _possibleConstructorReturn(this, _getPrototypeOf(ComWait).call(this));
            }
            return _inherits(ComWait, fairygui.GComponent), _createClass(ComWait, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComWait.prototype), "constructFromXML", this).call(this, e);
                }
            }, {
                key: "__onShown",
                value: function value() {
                    Laya.timer.clear(this, this.OnTimeOut), Laya.timer.once(10, this, this.OnTimeOut);
                }
            }, {
                key: "__onHidden",
                value: function value() {
                    Laya.timer.clear(this, this.OnTimeOut);
                }
            }, {
                key: "OnTimeOut",
                value: function value() {
                    fairygui.GRoot.inst.closeModalWait();
                }
            }]), ComWait;
        }(), Y = function (e) {
            function ItemLevel() {
                var e;
                return _classCallCheck(this, ItemLevel), (e = _possibleConstructorReturn(this, _getPrototypeOf(ItemLevel).apply(this, arguments))).mImageStarList = new Array(),
                    e;
            }
            return _inherits(ItemLevel, fairygui.GComponent), _createClass(ItemLevel, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ItemLevel.prototype), "constructFromXML", this).call(this, e),
                        this.mStateCtrl = this.getController("StateCtrl"), this.mLabelLevel = this.getChild("LabelLevel").asTextField;
                    for (var t = 0; t < 3; t++) {
                        var a = this.getChild("ImageStar" + t).asImage;
                        this.mImageStarList.push(a);
                    }
                    this.onClick(this, this.OnSelectLevel);
                }
            }, {
                key: "OnSelectLevel",
                value: function value() {
                    var e = this;
                    if (-3 == this.mData.Score) {
                        r.Instance.PlaySound("click");
                        webuzzSDK.pay(function (e) {
                            if (0 == e) Laya.Browser.window.wx.showToast({
                                title: "暂时没有视频可观看，请稍后再试",
                                icon: "none",
                                duration: 2e3,
                                mask: !1
                            }); else if (1 == e) {
                                var t = {
                                    Url: this.mData.SLv,
                                    Score: -1,
                                    IsPlayer: 0
                                };
                                H.Instance.SaveLevel(t), this.mComLevel.Init();
                            } else 2 == e && Laya.Browser.window.wx.showToast({
                                title: "视频没有看完，无法获得提示",
                                icon: "none",
                                duration: 2e3,
                                mask: !1
                            });
                        });
                    } else if (-2 != this.mData.Score) {
                        if (r.Instance.PlaySound("click"), H.Instance.ReducePower()) {
                            var t = k.Instance.FindWindow(F);
                            if (t) t.SelectCut(2);
                            Laya.timer.once(800, this, function (t) {
                                M.Instance.RandomTry() ? k.Instance.ShowWindow(X, e.mData.SLv) : H.Instance.SelectLevel(e.mData.SLv, D.Game1);
                            });
                        }
                    }
                }
            }, {
                key: "Init",
                value: function value(e, t) {
                    this.mData = e, this.mComLevel = t, this.mImageStarList.forEach(function (e) {
                        e.visible = !1;
                    });
                    for (var a = 0; a < e.Score; a++) {
                        if (a < this.mImageStarList.length) this.mImageStarList[a].visible = !0;
                    }
                    var i = this.SetIndex(e.Score, e.IsPlayer, e.EndHeight);
                    if (this.mStateCtrl.setSelectedIndex(i),
                        this.mLabelLevel.text = e.SLv.toString(),

                        -1 == e.Score) {
                        var o = {
                            Url: e.SLv,
                            Score: e.Score,
                            IsPlayer: 0
                        };
                        H.Instance.SaveLevel(o);
                    }
                }
            }, {
                key: "SetIndex",
                value: function value(e, t, a) {
                    var i = 0;
                    return 1 == t ? i = 1 : -2 == e ? i = 2 : -3 == e ? i = 3 : -1 == e && (i = 0),
                        i;
                }
            }, {
                key: "__onShown",
                value: function value() { }
            }, {
                key: "__onHidden",
                value: function value() { }
            }]), ItemLevel;
        }(), q = function (e) {
            function ItemSign() {
                return _classCallCheck(this, ItemSign), _possibleConstructorReturn(this, _getPrototypeOf(ItemSign).apply(this, arguments));
            }
            return _inherits(ItemSign, fairygui.GComponent), _createClass(ItemSign, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ItemSign.prototype), "constructFromXML", this).call(this, e),
                        this.mStateCtrl = this.getController("StateCtrl"), this.mLoaderType = this.getChild("LoaderType").asLoader,
                        this.mLabelNum = this.getChild("LabelNum").asTextField;
                }
            }, {
                key: "Init",
                value: function value(e) {
                    e.Type == v.Power ? this.mLoaderType.url = "ui://Main/cost_3" : this.mLoaderType.url = "ui://Main/cost_2",
                        this.mLabelNum.text = "x" + e.Cost.toString(), this.SetState(e.State);
                }
            }, {
                key: "SetState",
                value: function value(e) {
                    this.mStateCtrl.setSelectedIndex(e);
                }
            }]), ItemSign;
        }(), z = function (e) {
            function ComLevel() {
                var e;
                return _classCallCheck(this, ComLevel), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComLevel).apply(this, arguments))).mLevelList = new Array(),
                    e.mIsLoad = !1, e.mPaceIndex = 0, e.mMaxPaceIndex = 0, e.mPage = 1, e.mMaxPage = 0,
                    e;
            }
            return _inherits(ComLevel, fairygui.GComponent), _createClass(ComLevel, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComLevel.prototype), "constructFromXML", this).call(this, e),
                        this.mListLevel = this.getChild("ListLevel").asList, this.mListLevel.setVirtual(),
                        this.mListLevel.itemRenderer = Laya.Handler.create(this, this.SetItemData, null, !1),
                        this.mListLevel.numItems = 0, this.mListLevel.scrollPane.touchEffect = !1;
                }
            }, {
                key: "Init",
                value: function value() {
                    var e = this;
                    this.mIsLoad = !1, Laya.loader.load("res/Config/Level/LevelConfig.json", Laya.Handler.create(this, function (t) {
                        e.mLevelList = t, e.InitVList(), e.mIsLoad = !0, H.Instance.Init(t);
                    }), null, Laya.Loader.JSON);
                }
            }, {
                key: "InitVList",
                value: function value() {
                    this.SetLevel(), this.mListLevel.numItems = this.mLevelList.length, this.mPage = Math.floor((this.mPaceIndex - 1) / 16),
                        this.mListLevel.scrollPane.setCurrentPageX(this.mPage, !1), this.mBtnNext.enabled = !(this.mPage >= this.mMaxPage),
                        this.mBtnLast.enabled = !(0 == this.mPage);
                }
            }, {
                key: "SetLevel",
                value: function value() {
                    for (var e = 0; e < this.mLevelList.length; e++) {
                        var t = this.mLevelList[e], a = H.Instance.GetLevel(t.SLv);
                        t.Score = null != a ? a.Score : t.Score, t.IsPlayer = null != a ? a.IsPlayer : 0;
                        var i = e - 1;
                        if (i >= 0) {
                            var o = this.mLevelList[i];
                            !o || -2 != t.Score && -3 != t.Score || (1 == o.IsPlayer ? t.Score = -1 : -1 == o.Score && (t.Score = -3));
                        }
                        -1 == t.Score && (this.mPaceIndex = t.SLv), -3 == t.Score && (this.mMaxPage = Math.floor((t.SLv - 1) / 16)),
                            this.mLevelList[e] = t;
                    }
                }
            }, {
                key: "SetItemData",
                value: function value(e, t) {
                    if (e >= 0 && e < this.mLevelList.length) {
                        var a = this.mLevelList[e];
                        t.Init(a, this);
                    }
                }
            }, {
                key: "SetBtn",
                value: function value(e, t) {
                    var a = this;
                    this.mBtnLast = e, this.mBtnNext = t, this.mBtnLast.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), a.mPage > 0 && (a.mPage--, a.CutPage(a.mPage));
                    }), this.mBtnNext.onClick(this, function (e) {
                        r.Instance.PlaySound("click"), a.mPage < a.mMaxPage && (a.mPage++, a.CutPage(a.mPage));
                    });
                }
            }, {
                key: "CutPage",
                value: function value(e) {
                    this.mListLevel.scrollPane.setCurrentPageX(e, !0), this.mBtnNext.enabled = !(this.mPage == this.mMaxPage),
                        this.mBtnLast.enabled = !(0 == this.mPage);
                }
            }]), ComLevel;
        }(), J = function (e) {
            function ItemShop() {
                return _classCallCheck(this, ItemShop), _possibleConstructorReturn(this, _getPrototypeOf(ItemShop).apply(this, arguments));
            }
            return _inherits(ItemShop, fairygui.GComponent), _createClass(ItemShop, [{
                key: "constructFromXML",
                value: function value(e) {
                    var t = this;
                    _get(_getPrototypeOf(ItemShop.prototype), "constructFromXML", this).call(this, e),
                        this.mGetCtrl = this.getController("GetCtrl"), this.mLoaderShop = this.getChild("LoaderShop").asLoader,
                        this.mLabelName = this.getChild("LabelName").asTextField, this.onClick(this, function (e) {
                            0 == t.mShopData.IsGet ? platform.getInstance().prompt("The skin has not been obtained") : (r.Instance.PlaySound("click"),
                                M.Instance.SetSkinId(t.mShopData.Id),
                                platform.getInstance().prompt("Switched to " + t.mShopData.Name),
                                t.mRefresh(t.mTargetCB),
                                // this.mSkinId = M.Instance.RandomGetSkin(),
                                X.Instance.SkipLevel(),
                                window.ShopPanel.hide()
                            );

                        });
                }
            }, {
                key: "Init",
                value: function value(e, t, a) {
                    this.mRefresh = t, this.mTargetCB = a, this.mShopData = e, this.mLabelName.text = e.Name;
                    var i = M.Instance.GetSkinId();
                    1 == e.IsGet ? this.mLoaderShop.url = "ui://Main/shop_" + e.Id : this.mLoaderShop.url = "ui://Main/shop_0",
                        this.SetState(i);
                }
            }, {
                key: "SetState",
                value: function value(e) {
                    this.mShopData.Id == e ? this.mGetCtrl.setSelectedIndex(1) : this.mGetCtrl.setSelectedIndex(0);
                }
            }]), ItemShop;
        }(), Z = function DesignSize() {
            _classCallCheck(this, DesignSize);
        }, $ = function () {
            function GameLogic() {
                _classCallCheck(this, GameLogic), this.mMap = new Array(), this.mActivityCubeData = new Array(),
                    this.mEndCubeList = new Array(),
                    this.m_designSize = new Z(), this.m_scaleX = 1,
                    this.m_scaleY = 1, this.mChangePosId = 0, this.mNextPosId = 0, this.mBallMoveIndex = 0,
                    this.mLostOut = 0, this.mIsCurveMove = !1;
            }
            return _createClass(GameLogic, [{
                key: "SetDesignSize",
                value: function value(e, t) {
                    this.m_designSize.m_height = _.DesignSizeHeight, this.m_designSize.m_width = _.DesignSizeWidth,
                        this.m_scaleX = e / this.m_designSize.m_width, this.m_scaleY = t / this.m_designSize.m_height;
                }
            }, {
                key: "Reset",
                value: function value() {
                    this.mIsGame = !1, this.mMap = [], this.mActivityCubeData = [], this.mGameData = null,
                        this.mLostOut = 0;
                }
            }, {
                key: "Init",
                value: function value(e) {
                    var t = this;
                    return this.Reset(), this.mGameData = e, this.mMap = this.mGameData.Maps, this.mActivityCubeData = this.mGameData.Cubes,
                        this.mBallData = this.mGameData.Ball, this.mMap.forEach(function (e) {
                            var a = t.GetPosIdByCubeData(e.PosId);
                            a && 1 == a.IsOrigin && (t.mStretPosId = e.PosId);
                        }), this.mBallMoveIndex = 0, this.mPointNum = 0, !0;
                }
            }, {
                key: "GetIndexByCubeData",
                value: function value(e) {
                    var t = null;
                    return this.mActivityCubeData.forEach(function (a) {
                        a.Index == e && (t = a);
                    }), t;
                }
            }, {
                key: "GetPosIdByCubeData",
                value: function value(e) {
                    var t = null;
                    return this.mActivityCubeData.forEach(function (a) {
                        a.PosId == e && (t = a);
                    }), t;
                }
            }, {
                key: "setEndGameTime",
                value: function value(e) {
                    this.mEndTime = e;
                }
            }, {
                key: "registCallback",
                value: function value(e, t, a, i, o) {
                    this.m_targetCB = e, this.m_gameEndCB = t, this.m_removeStarCB = a, this.m_changeCB = i,
                        this.m_resetGameCB = o;
                }
            }, {
                key: "startGame",
                value: function value() {

                    return this.mIsGame = !0, !0;
                }
            }, {
                key: "update",
                value: function value(e) {
                    this.mIsGame;
                }
            }, {
                key: "MoveRange",
                value: function value(e) {
                    if (null == this.mMap && this.mMap.length <= 0) return null;
                    if (e < 0 || e >= this.mMap.length) return null;
                    var t = new G();
                    t.UpMax = 0, t.LeftMax = 0, t.RightMax = 0, t.DownMax = 0;
                    var a = this.mGameData.Row, i = this.mGameData.Col;
                    if (e + a < a * i) {
                        var o = e + a;
                        null == this.GetPosIdByCubeData(o) && (t.UpMax += 1);
                    }
                    if (e - a >= 0) {
                        o = e - a;
                        null == this.GetPosIdByCubeData(o) && (t.DownMax += 1);
                    }
                    if (e % i > 0) {
                        o = e - 1;
                        null == this.GetPosIdByCubeData(o) && (t.LeftMax += 1);
                    }
                    if (e % i < i - 1) {
                        o = e + 1;
                        null == this.GetPosIdByCubeData(o) && (t.RightMax += 1);
                    }
                    return t;
                }
            }, {
                key: "MoveCube",
                value: function value(e, t) {
                    return this.ChangeMapData(e, t), this.MoveRange(this.mChangePosId);
                }
            }, {
                key: "CheckGameOver",
                value: function value(e, a) {
                    null == a && (e = this.mStretPosId, t.Log("起点:" + this.mStretPosId),
                        (a = this.GetPosIdByCubeData(this.mStretPosId)).OutDir = a.Type3,
                        this.mEndCubeList.push(a));
                    var i = a.OutDir, o = this.GetNext(e, i);
                    return o ? (this.mEndCubeList.push(o), o.Type1 == w.Prop6 || (t.Log("下一个:" + this.mNextPosId),
                        this.CheckGameOver(this.mNextPosId, o))) : (this.mEndCubeList = new Array(), !1);
                }
            }, {
                key: "ChangeCube",
                value: function value(e) {

                    var t = this.GetPosIdByCubeData(e);
                    return t.Type3 == f.Dire1 ? t.Type3 = f.Dire2 : t.Type3 = f.Dire1, t;
                }
            }, {
                key: "SetBallMove",
                value: function value(e) {
                    // console.log("setballmove");
                    if (e >= 0 && e < this.mEndCubeList.length) {
                        var t = this.mEndCubeList[e];
                        if (t.StarNum > 0 && (this.mPointNum++, this.m_removeStarCB(this.m_targetCB, t, this.mPointNum)),
                            t.Type2 == S.Line1) {
                            var n = k.Instance.FindWindow(U);
                            n && n.SelectCut(2);

                            window["mBtnShop"] && (window["mBtnShop"].visible = false);
                            window["mBtnSign"] && (window["mBtnSign"].visible = false);

                            // this.contentPane0 = fairygui.UIPackage.createObjectFromURL("ui://Main/WinGame").asCom
                            // var ttt = this.contentPane0.getChild("ComDown").asCom;
                            // // ttt.getChildAt(9).visible=false;
                            // // ttt.getChildAt(10).visible=false;

                            // ttt.getChild("BtnShop").asButton.visible=false;
                            // ttt.getChild("BtnSign").asButton.visible=false;
                            // // U.Instance.mBtnShop.visible=false;
                            // // U.Instance.mBtnSign.visible=false;

                            var a = this.CheckRetreat(this.mLostOut, t), i = 0, o = 0;
                            t.OutDir == L.Up ? (i = t.BaseData.Y, o = t.BaseData.Y + t.BaseData.H, t.Type1 == w.Prop5 ? i = t.BaseData.Y + t.BaseData.H / 2 : (t.Type1 == w.Prop6 || a) && (o = t.BaseData.Y + t.BaseData.H / 2)) : t.OutDir == L.Down ? (i = t.BaseData.Y + t.BaseData.H,
                                o = t.BaseData.Y, t.Type1 == w.Prop5 ? i = t.BaseData.Y + t.BaseData.H / 2 : (t.Type1 == w.Prop6 || a) && (o = t.BaseData.Y + t.BaseData.H / 2)) : t.OutDir == L.Left ? (i = t.BaseData.X + t.BaseData.W,
                                    o = t.BaseData.X, t.Type1 == w.Prop5 ? i = t.BaseData.X + t.BaseData.W / 2 : (t.Type1 == w.Prop6 || a) && (o = t.BaseData.X + t.BaseData.W / 2)) : t.OutDir == L.Right && (i = t.BaseData.X,
                                        o = t.BaseData.X + t.BaseData.W, t.Type1 == w.Prop5 ? i = t.BaseData.X + t.BaseData.W / 2 : (t.Type1 == w.Prop6 || a) && (o = t.BaseData.X + t.BaseData.W / 2)),
                                this.mBallData.IsMove = !0, this.mBallData.MoveDir = t.OutDir, this.BallStraightMove(t, i, o, a);
                        } else if (t.Type2 == S.Line2) {
                            var n = 0, s = 0, r = t.BaseData.W / 2;
                            t.OutDir == L.Up ? (n = Math.PI / 2, t.InDir == L.Left ? (t.RotateDir = p.Ni, s = 0) : t.InDir == L.Right && (t.RotateDir = p.Sun,
                                s = Math.PI)) : t.OutDir == L.Down ? (n = 3 * Math.PI / 2, t.InDir == L.Left ? (t.RotateDir = p.Sun,
                                    s = 2 * Math.PI) : t.InDir == L.Right && (t.RotateDir = p.Ni, s = Math.PI)) : t.OutDir == L.Left ? t.InDir == L.Down ? (t.RotateDir = p.Ni,
                                        n = 2 * Math.PI, s = 3 * Math.PI / 2) : t.InDir == L.Up && (t.RotateDir = p.Sun,
                                            n = 0, s = Math.PI / 2) : t.OutDir == L.Right && (n = Math.PI, t.InDir == L.Down ? (t.RotateDir = p.Sun,
                                                s = 3 * Math.PI / 2) : t.InDir == L.Up && (t.RotateDir = p.Ni, s = Math.PI / 2)),
                                this.mBallData.IsMove = !0, this.BallCurveMove(t, n, s, r);
                        }
                        this.mLostOut = t.OutDir;
                    }
                }
            }, {
                key: "CheckRetreat",
                value: function value(e, t) {

                    if (t.Type1 == w.Prop3) {
                        if (e == L.Left && t.Type3 == f.Dire4) return !0;
                        if (e == L.Right && t.Type3 == f.Dire3) return !0;
                        if (e == L.Up && t.Type3 == f.Dire2) return !0;
                        if (e == L.Down && t.Type3 == f.Dire1) return !0;
                    }
                    return !1;
                }
            }, {
                key: "ChangeMapData",
                value: function value(e, t) {
                    var a = this.mGameData.Row, i = this.mGameData.Col;
                    t == L.Up ? e + a < a * i && (this.mChangePosId = e + a, this.ChangeData(e, this.mChangePosId, 0, 1)) : t == L.Down ? e - a >= 0 && (this.mChangePosId = e - a,
                        this.ChangeData(e, this.mChangePosId, 0, -1)) : t == L.Left ? e % i >= 0 && (this.mChangePosId = e - 1,
                            this.ChangeData(e, this.mChangePosId, -1, 0)) : t == L.Right && e % i < i - 1 && (this.mChangePosId = e + 1,
                                this.ChangeData(e, this.mChangePosId, 1, 0));
                }
            }, {
                key: "ChangeData",
                value: function value(e, t, a, i) {
                    var o = this.GetPosIdByCubeData(e), n = (this.GetPosIdByCubeData(t), this.mMap[t].Index);
                    this.mMap[t].Index = this.mMap[e].Index, this.mMap[e].Index = n;
                    e = this.mMap[t].PosId;
                    this.mMap[t].PosId = this.mMap[e].PosId, this.mMap[e].PosId = e, o && (o.PosId = t,
                        o.BaseData.X += a * o.BaseData.W, o.BaseData.Y += i * o.BaseData.H), this.m_changeCB(this.m_targetCB, this.mActivityCubeData);
                }
            }, {
                key: "GetNext",
                value: function value(e, t) {
                    if (e < 0 || e >= this.mMap.length) return null;
                    var a = this.mGameData.Row, i = this.mGameData.Col;
                    if (t == L.Up) {
                        if (e + a < a * i && (this.mNextPosId = e + a, (o = this.GetPosIdByCubeData(this.mNextPosId)) && (o = this.SetInOut(t, o)).InDir == L.Down)) return o;
                    } else if (t == L.Down) {
                        if (e - a >= 0) if (this.mNextPosId = e - a, (o = this.GetPosIdByCubeData(this.mNextPosId)) && (o = this.SetInOut(t, o)).InDir == L.Up) return o;
                    } else if (t == L.Left) {
                        if (e % i >= 0) if (this.mNextPosId = e - 1, (o = this.GetPosIdByCubeData(this.mNextPosId)) && (o = this.SetInOut(t, o)).InDir == L.Right) return o;
                    } else if (t == L.Right) {
                        var o;
                        if (e % i < i - 1) if (this.mNextPosId = e + 1, (o = this.GetPosIdByCubeData(this.mNextPosId)) && (o = this.SetInOut(t, o)).InDir == L.Left) return o;
                    }
                    return null;
                }
            }, {
                key: "SetInOut",
                value: function value(e, t) {
                    switch (e) {
                        case L.Up:
                            t.Type2 == S.Line1 ? t.Type1 == w.Prop5 || t.Type1 == w.Prop6 ? t.Type3 == f.Dire2 && (t.InDir = L.Down,
                                t.OutDir = L.Up) : t.Type1 == w.Prop3 ? t.Type3 != f.Dire2 && t.Type3 != f.Dire1 || (t.InDir = L.Down,
                                    t.OutDir = L.Up) : t.Type3 == f.Dire2 && (t.InDir = L.Down, t.OutDir = L.Up) : t.Type2 == S.Line2 && (t.InDir = L.Down,
                                        t.Type3 == f.Dire1 ? t.OutDir = L.Left : t.Type3 == f.Dire3 && (t.OutDir = L.Right));
                            break;

                        case L.Down:
                            t.Type2 == S.Line1 ? t.Type1 == w.Prop5 || t.Type1 == w.Prop6 ? t.Type3 == f.Dire1 && (t.InDir = L.Up,
                                t.OutDir = L.Down) : t.Type1 == w.Prop3 ? t.Type3 != f.Dire2 && t.Type3 != f.Dire1 || (t.InDir = L.Up,
                                    t.OutDir = L.Down) : t.Type3 == f.Dire2 && (t.InDir = L.Up, t.OutDir = L.Down) : t.Type2 == S.Line2 && (t.InDir = L.Up,
                                        t.Type3 == f.Dire2 ? t.OutDir = L.Left : t.Type3 == f.Dire4 && (t.OutDir = L.Right));
                            break;

                        case L.Left:
                            t.Type2 == S.Line1 ? t.Type1 == w.Prop5 || t.Type1 == w.Prop6 ? t.Type3 == f.Dire4 && (t.InDir = L.Right,
                                t.OutDir = L.Left) : t.Type1 == w.Prop3 ? t.Type3 != f.Dire3 && t.Type3 != f.Dire4 || (t.InDir = L.Right,
                                    t.OutDir = L.Left) : t.Type3 == f.Dire1 && (t.InDir = L.Right, t.OutDir = L.Left) : t.Type2 == S.Line2 && (t.InDir = L.Right,
                                        t.Type3 == f.Dire3 ? t.OutDir = L.Down : t.Type3 == f.Dire4 && (t.OutDir = L.Up));
                            break;

                        case L.Right:
                            t.Type2 == S.Line1 ? t.Type1 == w.Prop5 || t.Type1 == w.Prop6 ? t.Type3 == f.Dire3 && (t.InDir = L.Left,
                                t.OutDir = L.Right) : t.Type1 == w.Prop3 ? t.Type3 != f.Dire3 && t.Type3 != f.Dire4 || (t.InDir = L.Left,
                                    t.OutDir = L.Right) : t.Type3 == f.Dire1 && (t.InDir = L.Left, t.OutDir = L.Right) : t.Type2 == S.Line2 && (t.InDir = L.Left,
                                        t.Type3 == f.Dire1 ? t.OutDir = L.Down : t.Type3 == f.Dire2 && (t.OutDir = L.Up));
                    }
                    return t;
                }
            }, {
                key: "BallStraightMove",
                value: function value(e, t, a, i) {

                    var o = this, n = 0, s = .2;
                    this.mIsCurveMove = !1, e.OutDir == L.Up || e.OutDir == L.Down ? (n = f.Dire2, this.mBallData.BaseData.X = e.BaseData.X + e.BaseData.W / 2) : e.OutDir != L.Left && e.OutDir != L.Right || (this.mBallData.BaseData.Y = e.BaseData.Y + e.BaseData.H / 2,
                        n = f.Dire1), e.Type1 == w.Prop3 && 0 == i && (s = .08), fairygui.GTween.to(t, a, s).setEase(fairygui.EaseType.Linear).onUpdate(function (e) {
                            n == f.Dire1 ? o.mBallData.BaseData.X = e.value.x : n == f.Dire2 && (o.mBallData.BaseData.Y = e.value.x);
                        }, this).onComplete(function () {
                            if (e.Type1 != w.Prop6) {
                                if (i) return o.m_resetGameCB(o.m_targetCB, e), void Laya.timer.once(800, o, function (i) {
                                    o.mBallData.MoveDir = e.InDir, fairygui.GTween.to(a, t, 1).setEase(fairygui.EaseType.Linear).onUpdate(function (e) {
                                        n == f.Dire1 ? o.mBallData.BaseData.X = e.value.x : n == f.Dire2 && (o.mBallData.BaseData.Y = e.value.x);
                                    }, o).onComplete(function () {
                                        o.mBallData.IsMove = !1, o.mBallData.MoveDir = 0;
                                    }, o);
                                });
                                o.mBallMoveIndex++, o.SetBallMove(o.mBallMoveIndex);
                            } else o.GameOver();
                        }, this);
                }
            }, {
                key: "BallCurveMove",
                value: function value(e, t, a, i) {

                    var o = this, n = e.BaseData.X, s = e.BaseData.Y;
                    e.InDir == L.Up ? (s = e.BaseData.Y + e.BaseData.H, e.OutDir == L.Right && (n = e.BaseData.X + e.BaseData.W)) : e.InDir == L.Down ? e.OutDir == L.Right && (n = e.BaseData.X + e.BaseData.W) : e.InDir == L.Left ? e.OutDir == L.Up && (s = e.BaseData.Y + e.BaseData.H) : e.InDir == L.Right && (n = e.BaseData.X + e.BaseData.W,
                        e.OutDir == L.Up && (s = e.BaseData.Y + e.BaseData.H), this.mIsCurveMove = !0),
                        fairygui.GTween.to(t, a, .2).setEase(fairygui.EaseType.Linear).onUpdate(function (e) {
                            o.mBallData.BaseData.X = n + i * Math.cos(e.value.x), o.mBallData.BaseData.Y = s + -i * Math.sin(e.value.x);
                        }, this).onComplete(function () {
                            e.Type1 != w.Prop6 ? (o.mBallMoveIndex++, o.SetBallMove(o.mBallMoveIndex)) : o.GameOver();
                        }, this);
                }
            },
            {
                key: "GameOver",
                value: function value() {
                    this.mEndCubeList = new Array(),
                        this.mBallData.IsMove = !1,
                        this.mBallData.IsEnd = !0,
                        this.mBallData.MoveDir = 0,
                        this.mBallMoveIndex = 0,
                        this.m_gameEndCB(this.m_targetCB, this.mPointNum);
                }
            },
            {
                key: "isSkipLevel",
                value: function value() {
                    this.mEndCubeList = new Array();
                    this.mBallData.IsMove = !0;
                    this.mBallData.IsEnd = !0;
                    this.mBallData.MoveDir = 0;
                    this.mBallMoveIndex = 0;
                    this.Reset();
                }
            },

            {
                key: "Physic",
                value: function value(e, t) {
                    return Math.abs(e.X + e.W / 2 - (t.X + t.W / 2)) <= (e.W + t.W) / 2 && Math.abs(e.Y + e.H / 2 - (t.Y + t.H / 2)) <= (e.H + t.H) / 2;
                }
            }, {
                key: "getBallData",
                value: function value() {
                    return this.mBallData;
                }
            }, {
                key: "getGameTime",
                value: function value() {
                    return this.mEndTime;
                }
            }, {
                key: "getScalePosX",
                value: function value(e) {
                    return e * this.m_scaleX;
                }
            }, {
                key: "getScalePosY",
                value: function value(e) {
                    return e * this.m_scaleY;
                }
            }, {
                key: "getScale",
                value: function value(e, t) {
                    return e * t;
                }
            }], [{
                key: "Instance",
                get: function get() {
                    return null == this.mInstance && (this.mInstance = new GameLogic()), this.mInstance;
                }
            }]), GameLogic;
        }(),


        ee = function (e) {
            class Item extends Laya.Box {
                constructor() {
                    super();
                    const Image = Laya.Image;
                    // this.size(WID, HEI);
                    this.img = new Image();
                    this.img.name = 'thumb';
                    this.img.size(400, 300);
                    this.addChild(this.img);
                }
            }
            function ComGame() {
                var e;
                return _classCallCheck(this, ComGame), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComGame).apply(this, arguments))).mCubeList = new Array(),
                    e.mMaps = new Array(), e.mStarPosList = new Array(), e.mGameStart = !1, e.mGameUpdata = !1,
                    e.mIsGameWin = !1, e.mDirection = 0, e.mSpeedX = 0, e.mSpeedY = 0, e.mDuration = 0,
                    e.mStarObjList = new Array(), e;
            }
            return _inherits(ComGame, fairygui.GComponent), _createClass(ComGame, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComGame.prototype), "constructFromXML", this).call(this, e),
                        this.mComGameArea = this.getChild("ComGameArea").asCom, this.mComPropsTier = this.mComGameArea.getChild("ComPropsTier"),
                        this.mComBallTier = this.mComGameArea.getChild("ComBallTier"),
                        this.mComPropsTopTier = this.mComGameArea.getChild("ComPropsTopTier").asCom,
                        this.mComTeachingTier = this.mComGameArea.getChild("ComTeachingTier"), this.mComStar = new fairygui.GObjectPool();
                }
            }, {
                key: "Init",
                value: function value(e, t, a, i) {
                    this.mLevelData = e, this.mComTopStar = t, this.mComGameEnd = a, this.mStarPosList = i;
                    var o = e.GameLevel;
                    this.mGameData = this.mComPropsTier.Init(e.Props, o.Size, this.mComPropsTopTier, this.mComTeachingTier),
                        this.mGameData.Award = o.Award, this.mGameData.Col = o.Size, this.mGameData.Row = o.Size,
                        this.mGameData.GameId = o.GameId,

                        this.mGameData.Ball = this.mComBallTier.Init(this.mGameData.Cubes, o.Size),
                        this.SetDefine(), $.Instance.Init(this.mGameData), $.Instance.startGame(), this.SetTeaching(this.mGameData.Cubes, e.GameLevel.Slv),
                        this.GameStart(), this.mStarObjList = [];

                    this.ADlist = new Laya.List();
                    // Laya.stage.addChild(list);
                    this.ADlist.itemRender = Item;
                    this.ADlist.repeatX = 4;
                    this.ADlist.repeatY = 2;
                    this.ADlist.size(800, 300);
                    this.ADlist.scaleX = 0.4;
                    this.ADlist.scaleY = 0.4;
                    // this.owner.addChild(this.ADlist);
                    Laya.stage.addChild(this.ADlist);
                    this.ADlist.zOrder = 1000;
                    this.ADlist.x = 56;
                    this.ADlist.y = 1050;

                    platform.getInstance().initList(this.ADlist);

                }
            }, {
                key: "SetDefine",
                value: function value() {
                    $.Instance.Reset();
                    this.mLevelData.GameLevel;
                    _.DesignSizeWidth = this.mComGameArea.width, _.DesignSizeHeight = this.mComGameArea.height,
                        $.Instance.registCallback(this, this.GameEnd, this.SetStar, this.RefreshChild, this.GameReset);
                }
            }, {
                key: "SetTeaching",
                value: function value(e, t) {
                    var a = H.Instance.GetLevel(t);
                    a && 3 != a.Score && t <= 5 && this.mComTeachingTier.Init(e, t);
                }
            }, {
                key: "OnHidden",
                value: function value() {
                    var e = this;
                    this.mStarObjList.forEach(function (t) {
                        e.ReturnObj(t);
                    }), this.mStarObjList = [], this.mComPropsTier.OnHide();
                }
            }, {
                key: "GamePause",
                value: function value(e) {
                    this.mGameUpdata = e;
                }
            }, {
                key: "GameStart",
                value: function value() {
                    this.mGameStart = !0, this.mGameUpdata = !0;
                }
            }, {
                key: "GameEnd",
                value: function value(e, t) {
                    r.Instance.PlaySound("game_end"), M.Instance.SetTrySkinId(-1);
                    var a = H.Instance.GetLevel(e.mLevelData.GameLevel.Slv), i = 0, o = 0;
                    if (a && (i = a.Score), t > i) {
                        var n = {
                            Url: e.mLevelData.GameLevel.Slv,
                            Score: t,
                            IsPlayer: 1
                        };
                        H.Instance.SaveLevel(n);
                    }
                    Laya.timer.once(200, e, function (a) {
                        e.mComGameEnd.visible = !0,
                            e.mComGameEnd.SetEnd(t);
                        var n = k.Instance.FindWindow(U);
                        n && n.SelectCut(2);
                        e.mIsGameWin = !0, e.mGameStart = !1, e.mGameUpdata = !1, o = t, -1 != i && (o = t - i);
                        // webuzzSDK.hideGame();
                        var s = M.Instance.GetStarNum();
                        s += o, M.Instance.SaveStarNum(s);
                        window["mBtnShop"] && (window["mBtnShop"].visible = true);
                        window["mBtnSign"] && (window["mBtnSign"].visible = true);
                        // var t = M.Instance.GetStarNum();
                        // t += Math.round(2 * Math.random()) + 1, 
                        // M.Instance.SaveStarNum(t);


                        // H.Instance.ReducePower() && (Laya.timer.once(2e3, this, () => {
                        //     // k.Instance.HideWindow(U)
                        //     // , 
                        //     // H.Instance.SelectNewLevel()
                        // }));

                        // webuzzSDK.showBonus(function (e) {
                        //     if (100 == e) {
                        //         var t = M.Instance.GetStarNum();
                        //         t += Math.round(2 * Math.random()) + 1, M.Instance.SaveStarNum(t);
                        //     }
                        //     webuzzSDK.endGame(function () {
                        //         H.Instance.ReducePower() && (k.Instance.HideWindow(U), H.Instance.SelectNewLevel());
                        //     });
                        // });
                    });
                }
            }, {
                key: "SetStar",
                value: function value(e, t, a) {
                    r.Instance.PlaySound("game_star");
                    var i = e.mComPropsTier.SetStar(t), o = a - 1;
                    if (o >= 0 && o < e.mStarPosList.length) {
                        var n = i.GetStarObj(), s = e.mComGameArea.x + i.x + n.x, h = e.mComGameArea.y + (e.mComGameArea.height - -1 * i.y + n.y), d = e.GetObj("ComStar").asCom;
                        d.setPivot(.5, .5), d.x = s, d.y = h, d.skewY = 0, e.mStarObjList.push(d);
                        var l = e.mStarPosList[o], m = l.x - d.width / 2, u = l.y - d.height / 2;
                        Laya.Tween.to(d, {
                            x: m,
                            y: u
                        }, 800, Laya.Ease.backIn, Laya.Handler.create(e, function (t) {
                            d && (e.mComTopStar.SetStarShow(a), d.visible = !1);
                        }));
                    }
                }
            }, {
                key: "RefreshChild",
                value: function value(e, t) {
                    e.mComPropsTier.RefreshChild(t);
                }
            }, {
                key: "GameReset",
                value: function value(e, t) {
                    r.Instance.PlaySound("game_warning"), e.mComPropsTier.ShowWarning(t), Laya.timer.once(2200, e, function (t) {
                        k.Instance.HideWindow(U), H.Instance.SelectLevel(e.mLevelData.GameLevel.Slv, D.Game1);
                    });
                }
            }, {
                key: "GetObj",
                value: function value(e) {
                    var t = this.mComStar.getObject("ui://Main/" + e);
                    return this.parent.addChild(t), t;
                }
            }, {
                key: "ReturnObj",
                value: function value(e) {
                    null != e && (this.removeChild(e), this.mComStar.returnObject(e));
                }
            }, {
                key: "OnFrameUpdate",
                value: function value(e) {
                    if (1 == this.mGameStart && 1 == this.mGameUpdata) {
                        $.Instance.update(e);
                        $.Instance.getGameTime();
                        var t = $.Instance.getBallData();
                        this.mComBallTier.UpdatePosition(t);
                    }
                }
            }]), ComGame;
        }(), te = function (e) {
            function ComProps() {
                var e;
                return _classCallCheck(this, ComProps), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComProps).apply(this, arguments))).mMoveDir = 0,
                    e.mIsChangeMove = !1, e.mIsCubeMove = !1, e.mIsSound = !0, e;
            }
            return _inherits(ComProps, fairygui.GComponent), _createClass(ComProps, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComProps.prototype), "constructFromXML", this).call(this, e),
                        this.mLoaderProps = this.getChild("LoaderProps").asLoader, this.mLoaderShadow = this.getChild("LoaderShadow").asLoader,
                        this.mMovieStar = this.getChild("MovieStar").asMovieClip, this.mMovieSpeed = this.getChild("MovieSpeed").asMovieClip,
                        this.mComStart = this.getChild("ComStart").asCom, this.mAnimaStart = this.mComStart.getTransition("AnimaStart");
                }
            }, {
                key: "Init",
                value: function value(e, t, a, i, o) {
                    this.mComTopProps = a, this.mComTeachingTier = o, this.mComTopProps && (this.mComTopProps.setXY(e.BaseData.X, -1 * e.BaseData.Y - this.height),
                        e.Type1 == w.Prop4 ? (this.mLoaderTopProps = this.mComTopProps.getChild("LoaderTopProps").asLoader,
                            this.mAnimaLeft = this.mComTopProps.getTransition("AnimaLeft"), this.mAnimaUp = this.mComTopProps.getTransition("AnimaUp"),
                            e.Type3 == f.Dire1 ? this.mLoaderTopProps.rotation = -90 : this.mLoaderTopProps.rotation = 0) : e.Type1 == w.Prop3 && (this.mComTopProps.visible = !1)),
                        this.mSize = t, this.mPosId = e.PosId, this.mPropsData = e, this.mComPropsTier = i,
                        this.mIsChangeMove = !1, this.mTierHeight = this.mComPropsTier.parent.height, this.mTierWidth = this.mComPropsTier.parent.width,
                        this.mMovieStar.visible = e.StarNum > 0, this.mComStart.visible = e.Type1 == w.Prop5,
                        this.mMovieSpeed.visible = e.Type1 == w.Prop3, 4 == this.mSize ? this.SetStarPos(e) : this.SetStar5Pos(e),
                        this.SetStart(e), this.SetPropImg(e), this.SetShadowShow(e.PosId), this.setXY(e.BaseData.X, -1 * e.BaseData.Y - this.height),
                        this.SetIsMove(!0), this.mInitPosX = this.x, this.mInitPosY = this.y, this.mIsSound = !0,
                        this.on(Laya.Event.MOUSE_DOWN, this, this.OnTouchDown);
                }
            }, {
                key: "CloseMouse",
                value: function value() {
                    this.touchable = !1, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove),
                        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
                }
            }, {
                key: "OnTouchDown",
                value: function value() {
                    this.mIsMove && this.mPropsData.IsMove && (this.mMoveDistance = $.Instance.MoveRange(this.mPosId),
                        this.mIsChangeMove = !1, this.mIsCubeMove = !1, this.mDownPosX = Laya.stage.mouseX,
                        this.mDownPosY = Laya.stage.mouseY, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove),
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp), this.mComPropsTier.SetTouchable(this.mPropsData.Index));
                }
            }, {
                key: "OnTouchMove",
                value: function value() {
                    var e = this;
                    1 == this.mIsSound && (this.mIsSound = !1, r.Instance.PlaySound("game_move"), Laya.timer.once(800, this, function (t) {
                        e.mIsSound = !0;
                    })), this.mMoveDir != f.Dire2 && (Laya.stage.mouseX > this.mDownPosX + 20 ? this.mMoveDistance.RightMax > 0 && (this.mMoveDir = f.Dire1,
                        this.mIsCubeMove = !0, this.MouseCube(1, 0), Math.abs(Laya.stage.mouseX - this.mDownPosX) >= this.width && this.MoveCube(L.Right)) : Laya.stage.mouseX < this.mDownPosX - 20 && this.mMoveDistance.LeftMax > 0 && (this.mMoveDir = f.Dire1,
                            this.mIsCubeMove = !0, this.MouseCube(1, 0), Math.abs(Laya.stage.mouseX - this.mDownPosX) >= this.width && this.MoveCube(L.Left))),
                        this.mMoveDir != f.Dire1 && (Laya.stage.mouseY < this.mDownPosY - 20 ? this.mMoveDistance.UpMax > 0 && (this.mMoveDir = f.Dire2,
                            this.mIsCubeMove = !0, this.MouseCube(0, 1), Math.abs(Laya.stage.mouseY - this.mDownPosY) >= this.height && this.MoveCube(L.Up)) : Laya.stage.mouseY > this.mDownPosY + 20 && this.mMoveDistance.DownMax > 0 && (this.mMoveDir = f.Dire2,
                                this.mIsCubeMove = !0, this.MouseCube(0, 1), Math.abs(Laya.stage.mouseY - this.mDownPosY) >= this.height && this.MoveCube(L.Down)));
                }
            }, {
                key: "OnTouchUp",
                value: function value() {
                    if (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp),
                        this.mComPropsTier.ReSetTouchable(), this.mComTeachingTier.SetNext(this.mPosId),
                        0 == this.mIsCubeMove && this.mPropsData.Type1 == w.Prop4) return this.mAnimaLeft && this.mPropsData.Type3 == f.Dire1 && this.mAnimaLeft.play(),
                            this.mAnimaUp && this.mPropsData.Type3 == f.Dire2 && this.mAnimaUp.play(), this.mPropsData = $.Instance.ChangeCube(this.mPosId),
                            r.Instance.PlaySound("game_rotate"), void this.CheckGameOver();
                    this.mMoveDir != f.Dire2 && (Laya.stage.mouseX > this.mDownPosX + 15 && Math.abs(Laya.stage.mouseX - this.mDownPosX) >= this.width / 2 ? this.mMoveDistance.RightMax > 0 && this.MoveCube(L.Right) : Laya.stage.mouseX < this.mDownPosX - 15 && Math.abs(Laya.stage.mouseX - this.mDownPosX) >= this.width / 2 && this.mMoveDistance.LeftMax > 0 && this.MoveCube(L.Left)),
                        this.mMoveDir != f.Dire1 && (Laya.stage.mouseY < this.mDownPosY - 15 && Math.abs(Laya.stage.mouseY - this.mDownPosY) >= this.height / 2 ? this.mMoveDistance.UpMax > 0 && this.MoveCube(L.Up) : Laya.stage.mouseY > this.mDownPosY + 15 && Math.abs(Laya.stage.mouseY - this.mDownPosY) >= this.height / 2 && this.mMoveDistance.DownMax > 0 && this.MoveCube(L.Down)),
                        this.mMoveDir = 0, this.mDownPosX = 0, this.mDownPosY = 0, Laya.Tween.to(this, {
                            x: this.mInitPosX,
                            y: this.mInitPosY
                        }, 50, Laya.Ease.linearIn), this.mComTopProps && Laya.Tween.to(this.mComTopProps, {
                            x: this.mInitPosX,
                            y: this.mInitPosY
                        }, 50, Laya.Ease.linearIn), this.CheckGameOver();
                }
            }, {
                key: "CheckGameOver",
                value: function value() {
                    $.Instance.CheckGameOver() && (this.mComPropsTier.SetIsMove(!1), r.Instance.PlaySound("game_shoot"),
                        this.mAnimaStart.play(Laya.Handler.create(this, function (e) {
                            $.Instance.SetBallMove(0);
                        })));
                }
            }, {
                key: "ShowWarning",
                value: function value() {
                    this.mComTopProps && (this.mComTopProps.visible = !0);
                }
            }, {
                key: "MoveCube",
                value: function value(e) {
                    this.mMoveDistance = $.Instance.MoveCube(this.mPosId, e), t.Log(this.mMoveDistance);
                    var a = $.Instance.GetIndexByCubeData(this.mPropsData.Index);
                    this.UpdatePosition(a), this.mMoveDir = 0, this.PlayCollision(e);
                }
            }, {
                key: "MoveUpdataData",
                value: function value(e) {
                    this.mPosId = e.PosId, this.mPropsData = e;
                }
            }, {
                key: "PlayCollision",
                value: function value(e) {
                    e == L.Up ? 0 == this.mMoveDistance.UpMax && r.Instance.PlaySound("game_collision") : e == L.Down ? 0 == this.mMoveDistance.DownMax && r.Instance.PlaySound("game_collision") : e == L.Left ? 0 == this.mMoveDistance.LeftMax && r.Instance.PlaySound("game_collision") : e == L.Right && 0 == this.mMoveDistance.RightMax && r.Instance.PlaySound("game_collision");
                }
            }, {
                key: "MouseCube",
                value: function value(e, t) {
                    e > 0 ? (this.x = this.mInitPosX + (Laya.stage.mouseX - this.mDownPosX), this.x < 0 && (this.x = 0),
                        this.x - this.width > this.mTierWidth && (this.x = this.mTierWidth)) : t > 0 && (this.y = this.mInitPosY + (Laya.stage.mouseY - this.mDownPosY),
                            this.y + this.height > 0 && (this.y = -this.height), this.y < -1 * this.mTierHeight && (this.y = -1 * this.mTierHeight)),
                        this.mComTopProps && this.mComTopProps.setXY(this.x, this.y);
                }
            }, {
                key: "UpdatePosition",
                value: function value(e) {
                    this.mInitPosX = e.BaseData.X, this.mInitPosY = -1 * e.BaseData.Y - this.height,
                        this.setXY(this.mInitPosX, this.mInitPosY), this.mDownPosX = Laya.stage.mouseX,
                        this.mDownPosY = Laya.stage.mouseY, this.SetShadowShow(e.PosId);
                }
            }, {
                key: "SetShadowShow",
                value: function value(e) {
                    e < this.mSize ? this.mLoaderShadow.visible = !1 : this.mLoaderShadow.visible = !0;
                }
            }, {
                key: "SetPropImg",
                value: function value(e) {
                    this.mLoaderProps.url = "ui://Main/prop" + e.Url, e.Type1 == w.Prop4 ? this.mLoaderShadow.url = "ui://Main/shadow_2" : this.mLoaderShadow.url = "ui://Main/shadow_1";
                }
            }, {
                key: "SetStar",
                value: function value(e) {
                    this.mPropsData = e, this.mMovieStar.visible = !1;
                }
            }, {
                key: "GetStarObj",
                value: function value() {
                    return this.mMovieStar;
                }
            }, {
                key: "SetStart",
                value: function value(e) {
                    e.Type3 == f.Dire1 ? (this.mComStart.rotation = 0, this.mMovieSpeed.rotation = 0) : e.Type3 == f.Dire2 ? (this.mComStart.rotation = 180,
                        this.mMovieSpeed.rotation = 180) : e.Type3 == f.Dire3 ? (this.mComStart.rotation = 270,
                            this.mMovieSpeed.rotation = 270) : e.Type3 == f.Dire4 && (this.mComStart.rotation = 90,
                                this.mMovieSpeed.rotation = 90);
                }
            }, {
                key: "SetStarPos",
                value: function value(e) {
                    e.Type2 == S.Line2 ? e.Type3 == f.Dire1 ? this.mMovieStar.setXY(0, 45) : e.Type3 == f.Dire2 ? this.mMovieStar.setXY(0, 0) : e.Type3 == f.Dire3 ? this.mMovieStar.setXY(43, 40) : e.Type3 == f.Dire4 && this.mMovieStar.setXY(43, 0) : this.mMovieStar.setXY(21, 25);
                }
            }, {
                key: "SetStar5Pos",
                value: function value(e) {
                    e.Type2 == S.Line2 ? e.Type3 == f.Dire1 ? this.mMovieStar.setXY(-9, 26) : e.Type3 == f.Dire2 ? this.mMovieStar.setXY(-9, -11) : e.Type3 == f.Dire3 ? this.mMovieStar.setXY(25, 22) : e.Type3 == f.Dire4 && this.mMovieStar.setXY(25, -8) : this.mMovieStar.setXY(6, 10);
                }
            }, {
                key: "SetIsMove",
                value: function value(e) {
                    this.mIsMove = e;
                }
            }, {
                key: "OnHide",
                value: function value() {
                    this.off(Laya.Event.MOUSE_DOWN, this, this.OnTouchDown);
                }
            }]), ComProps;
        }(), ae = function (e) {
            function ComPropsTier() {
                var e;
                return _classCallCheck(this, ComPropsTier), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComPropsTier).apply(this, arguments))).mTopObjList = new Array(),
                    e.mObjList = new Array(), e.mDataList = new Array(), e.mMaps = new Array(), e.mScale = .8,
                    e;
            }
            return _inherits(ComPropsTier, fairygui.GComponent), _createClass(ComPropsTier, [{
                key: "GetCubeObj",
                value: function value(e) {
                    var t = null;
                    return this.mObjList.forEach(function (a) {
                        a.mPropsData.Index == e && (t = a);
                    }), t;
                }
            }, {
                key: "GetCubeData",
                value: function value(e) {
                    var t = null;
                    return this.mDataList.forEach(function (a) {
                        a.PosId == e && (t = a);
                    }), t;
                }
            }, {
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComPropsTier.prototype), "constructFromXML", this).call(this, e),
                        this.mComProps = new fairygui.GObjectPool();
                }
            }, {
                key: "Init",
                value: function value(e, t, a, i) {
                    var o = this;
                    this.mSize = t, this.mScale = 5 == t ? .8 : 1, this.mComPropsTopTier = a, this.mComTeachingTier = i,
                        this.mDataList = this.SetCube(e), this.mMaps = this.SetMap();
                    var n = new b();
                    return n.Maps = this.mMaps, n.Cubes = this.mDataList, this.mDataList.sort(function (e, t) {
                        return t.PosId - e.PosId;
                    }), this.mDataList.forEach(function (e) {
                        var t = o.GetObj("ComProps"), a = null;
                        t.height = e.BaseData.H, t.width = e.BaseData.W, e.Type1 == w.Prop4 ? ((a = o.GetTopObj("ComPropsTop").asCom).height = e.BaseData.H,
                            a.width = e.BaseData.W, o.mTopObjList.push(a)) : e.Type1 == w.Prop3 && ((a = o.GetTopObj("ComWarningTop").asCom).height = e.BaseData.H,
                                a.width = e.BaseData.W, o.mTopObjList.push(a)), e.ChildIndex = o.getChildIndex(t),
                            t.Init(e, o.mSize, a, o, o.mComTeachingTier), o.mObjList.push(t);
                    }), this.RefreshChild(this.mDataList), n;
                }
            }, {
                key: "SetTouchable",
                value: function value(e) {
                    this.mObjList.forEach(function (t) {
                        t.mPropsData.Index != e && t.CloseMouse();
                    });
                }
            }, {
                key: "ReSetTouchable",
                value: function value() {
                    this.mObjList.forEach(function (e) {
                        e.touchable = !0;
                    });
                }
            }, {
                key: "SetIsMove",
                value: function value(e) {
                    this.mObjList.forEach(function (t) {
                        t.SetIsMove(e);
                    });
                }
            }, {
                key: "RefreshChild",
                value: function value(e) {
                    var t = this;
                    e.forEach(function (e) {
                        t.GetCubeObj(e.Index).MoveUpdataData(e);
                    }), this.mObjList.sort(function (e, t) {
                        return t.mPosId - e.mPosId;
                    }), this.mObjList.forEach(function (e) {
                        t.setChildIndex(e, t.mObjList.indexOf(e));
                    });
                }
            }, {
                key: "SetMap",
                value: function value() {
                    for (var e = this.mSize * this.mSize, t = new Array(), a = 0; a < e; a++) {
                        var i = new V();
                        i.Index = a + 1, i.PosId = a;
                        var o = this.GetCubeData(a);
                        o && (o.Index = a + 1, i.PosId = o.PosId), t.push(i);
                    }
                    return t;
                }
            }, {
                key: "SetCube",
                value: function value(e) {
                    var t = this, a = new Array();
                    return e.forEach(function (e) {
                        var i = new O(), o = new R();
                        i.H = 142 * t.mScale, i.W = 142 * t.mScale, i.X = e.Pos % t.mSize * i.W, i.Y = Math.floor(e.Pos / t.mSize) * i.H,
                            o.BaseData = i, o.PosId = e.Pos, o.Url = e.Type,
                            o.Type1 = Math.floor(e.Type / 100 % 10),
                            o.Type2 = Math.floor(e.Type / 10 % 10),
                            o.Type3 = Math.floor(e.Type % 10),
                            o.IsMove = o.Type1 == w.Prop1 || o.Type1 == w.Prop4,
                            o.IsOrigin = o.Type1 == w.Prop5, o.IsBallMove = !1, o.StarNum = e.Star, o.RotateDir = 0,
                            e.Newer ? o.IsTeaching = 1 == e.Newer : o.IsTeaching = !1, a.push(o);
                    }), a;
                }
            }, {
                key: "SetStar",
                value: function value(e) {
                    var t = this.GetCubeObj(e.Index);
                    return t.SetStar(e), t;
                }
            }, {
                key: "RemoveProps",
                value: function value() {
                    var e = this;
                    this.mObjList.forEach(function (t) {
                        t.OnHide(), e.ReturnObj(t);
                    }), this.mTopObjList.forEach(function (t) {
                        e.ReturnObj(t);
                    }), this.mObjList = new Array(), this.mTopObjList = new Array();
                }
            }, {
                key: "ShowWarning",
                value: function value(e) {
                    this.GetCubeObj(e.Index).ShowWarning();
                }
            }, {
                key: "GetTopObj",
                value: function value(e) {
                    var t = this.mComProps.getObject("ui://Main/" + e);
                    return this.mComPropsTopTier.addChild(t), t;
                }
            }, {
                key: "GetObj",
                value: function value(e) {
                    var t = this.mComProps.getObject("ui://Main/" + e);
                    return this.addChild(t), t;
                }
            }, {
                key: "ReturnObj",
                value: function value(e) {
                    null != e && (this.removeChild(e), this.mComProps.returnObject(e));
                }
            }, {
                key: "OnHide",
                value: function value() {
                    this.RemoveProps();
                }
            }]), ComPropsTier;
        }(), ie = function (e) {
            function ComBall() {
                var e;
                return _classCallCheck(this, ComBall), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComBall).apply(this, arguments))).mIsSound = !0,
                    e;
            }
            return _inherits(ComBall, fairygui.GComponent), _createClass(ComBall, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComBall.prototype), "constructFromXML", this).call(this, e),
                        this.mLoaderBall = this.getChild("LoaderBall").asLoader, this.mMovieBall1 = this.getChild("MovieBall1").asLoader,
                        this.mMovieBall2 = this.getChild("MovieBall2").asLoader, this.mMovieBall3 = this.getChild("MovieBall3").asLoader,
                        this.mMovieBall4 = this.getChild("MovieBall4").asLoader;
                }
            }, {
                key: "Init",
                value: function value(e) {
                    stateball = false,
                        this.mBallData = e, this.UpdatePosition(e), this.mIsSound = !0, this.mMovieBall1.visible = !1,
                        this.mMovieBall2.visible = !1, this.mMovieBall3.visible = !1, this.mMovieBall4.visible = !1,
                        this.SetBallSkin(), this.alpha = 1;
                }
            }, {
                key: "SetBallSkin",
                value: function value() {
                    var e = 1, t = M.Instance.GetTrySkinId(), a = M.Instance.GetSkinId();
                    e = t >= 0 ? t : a, this.mLoaderBall.url = "ui://Main/shop_" + e, 1 == e ? (this.mMovieBall1.url = "ui://Main/MovieBall1",
                        this.mMovieBall2.url = "ui://Main/MovieBall2", this.mMovieBall3.url = "ui://Main/MovieBall3",
                        this.mMovieBall4.url = "ui://Main/MovieBall4") : (this.mMovieBall1.url = "ui://Main/MovieSkin" + e,
                            this.mMovieBall2.url = "ui://Main/MovieSkin" + e, this.mMovieBall3.url = "ui://Main/MovieSkin" + e,
                            this.mMovieBall4.url = "ui://Main/MovieSkin" + e), this.mMovieBall1.playing = !0,
                        this.mMovieBall2.playing = !0, this.mMovieBall3.playing = !0, this.mMovieBall4.playing = !0;
                }
            }, {
                key: "UpdatePosition",
                value: function value(e) {
                    // if (stateball)
                    //     return;
                    this.PlaySound(),
                        this.UpdateDir(e), this.BallEnd(e), this.mBallData = e,
                        // console.log(e.BaseData.X - e.BaseData.W / 2, -1 * (e.BaseData.Y + e.BaseData.H / 2));
                        this.setXY(e.BaseData.X - e.BaseData.W / 2, -1 * (e.BaseData.Y + e.BaseData.H / 2));
                }
            }, {
                key: "PlaySound",
                value: function value() {
                    var e = this;
                    1 == this.mIsSound && 1 == this.mBallData.IsMove && (this.mIsSound = !1, r.Instance.PlaySound("game_ball"),
                        Laya.timer.once(990, this, function (t) {
                            e.mIsSound = !0;
                        }));
                }
            }, {
                key: "UpdateDir",
                value: function value(e) {
                    this.mLoaderBall.visible = !e.IsMove, this.mMovieBall1.visible = e.MoveDir == L.Up,
                        this.mMovieBall2.visible = e.MoveDir == L.Down, this.mMovieBall3.visible = e.MoveDir == L.Left,
                        this.mMovieBall4.visible = e.MoveDir == L.Right;
                }
            }, {
                key: "BallEnd",
                value: function value(e) {
                    e.IsEnd && (Laya.Tween.to(this, {
                        alpha: 0
                    }, 200, Laya.Ease.sineIn), e.IsEnd = !1);
                }
            }, {
                key: "SetPropImg",
                value: function value(e) { }
            }, {
                key: "OnHide",
                value: function value() { }
            }],
                [{
                    key: "Instance",
                    get: function get() {
                        return null == this.mInstance && (this.mInstance = new ComBall()), this.mInstance;
                    }
                }]


            ), ComBall;
        }(), oe = function (e) {
            function ComBallTier() {
                var e;
                return _classCallCheck(this, ComBallTier), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComBallTier).apply(this, arguments))).mScale = .8,
                    e;
            }
            return _inherits(ComBallTier, fairygui.GComponent), _createClass(ComBallTier, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComBallTier.prototype), "constructFromXML", this).call(this, e),
                        this.mComBall = this.getChild("ComBall");
                }
            },

            {
                key: "Init",
                value: function value(e, t) {
                    return this.mScale = 5 == t ? .8 : 1, this.mData = this.SetCube(e), this.mComBall.Init(this.mData), this.mData;
                }
            },

            {
                key: "SetCube",

                value: function value(e) {
                    var t = this, a = new K(), i = new O();
                    return e.forEach(function (e) {
                        if (1 == e.IsOrigin) {
                            var a = 0, o = 0;
                            e.Type3 == f.Dire1 ? o = 22 : e.Type3 == f.Dire2 ? o = -22 : e.Type3 == f.Dire3 ? a = -22 : e.Type3 == f.Dire4 && (a = 22),
                                i.H = t.mComBall.height * t.mScale, i.W = t.mComBall.width * t.mScale, i.X = e.BaseData.X + e.BaseData.W / 2 + a,
                                i.Y = e.BaseData.Y + e.BaseData.H / 2 + o;
                        }
                    }), this.mComBall.height = i.H, this.mComBall.width = i.W, a.BaseData = i, a.IsMove = !1,
                        a.MoveDir = 0, a.IsEnd = !1, a;
                }
            }, {
                key: "SetBias",
                value: function value(e) { }
            }, {
                key: "UpdatePosition",
                value: function value(e) {
                    this.mComBall.UpdatePosition(e);
                }
            }, {
                key: "OnHide",
                value: function value() { }
            }]), ComBallTier;
        }(), ne = function (e) {
            function ComGameTopStar() {
                var e;
                return _classCallCheck(this, ComGameTopStar), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComGameTopStar).apply(this, arguments))).mStarList = new Array(),
                    e;
            }
            return _inherits(ComGameTopStar, fairygui.GComponent), _createClass(ComGameTopStar, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComGameTopStar.prototype), "constructFromXML", this).call(this, e),
                        this.mBtnLevel = this.getChild("BtnLevel").asButton, this.mComPower = this.getChild("ComPower").asButton,
                        this.mLabelPower = this.mComPower.getChild("LabelPower").asTextField, this.mBtnLevel.visible = !1;
                    for (var t = 0; t < 3; t++) {
                        var a = this.getChild("ComGetStar" + t).asCom;
                        a && this.mStarList.push(a);
                    }
                    this.mComPower.onClick(this, function (e) {
                        r.Instance.PlaySound("click");
                        var t = new E();
                        t.Type = 1, t.Text = "Watch the video to \nget Energy +5", k.Instance.ShowWindow(N, t);
                    }), this.mBtnLevel.onClick(this, function (e) {
                        r.Instance.PlaySound("click");
                        console.log("确定");
                        var t = k.Instance.FindWindow(U);
                        if (t) {
                            var a = t;
                            M.Instance.SetTrySkinId(-1), a.SelectCut(0);
                        }
                    });
                }
            }, {
                key: "Init",
                value: function value() {
                    this.mStarList.forEach(function (e) {
                        e.visible = !1;
                    }), this.GetPoewrTime(), Laya.timer.loop(6e4, this, this.GetPoewrTime);
                }
            }, {
                key: "GetPoewrTime",
                value: function value() {
                    var e = Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_time"),
                        t = Number(Laya.LocalStorage.getItem(Laya.Browser.window.storageKey + "power_play") || "10");
                    if (t < 10) if (e) {
                        var a = Math.floor((Date.now() / 1e3 - Number(e)) / 60);
                        (t += Math.floor(a / 10)) > 10 && (t = 10, Laya.LocalStorage.removeItem(Laya.Browser.window.storageKey + "power_time")),
                            a >= 10 && this.SetPoewrTime();
                    } else this.SetPoewrTime();
                    console.log("-------------------------------------mLabelPower")
                    t <= 0 && (t = 0),
                        Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_play", t.toString()),
                        console.log("Power++");
                    this.mLabelPower.text = t.toString();
                }
            }, {
                key: "SetPoewrTime",
                value: function value() {
                    var e = Math.floor(Date.now() / 1e3);
                    Laya.LocalStorage.setItem(Laya.Browser.window.storageKey + "power_time", e.toString());
                }
            }, {
                key: "SetStarShow",
                value: function value(e) {
                    var t = e - 1;
                    if (t >= 0 && t < this.mStarList.length) {
                        var a = this.mStarList[t];
                        if (a) r.Instance.PlaySound("game_star2"), a.visible = !0, a.getTransition("AnimaGetStar").play();
                    }
                }
            }, {
                key: "OnHide",
                value: function value() {
                    Laya.timer.clear(this, this.GetPoewrTime);
                }
            }],
                [{
                    key: "Instance",
                    get: function get() {
                        return null == this.mInstance && (this.mInstance = new ComGameTopStar()), this.mInstance;
                    }
                }]), ComGameTopStar;
        }(), se = function (e) {
            function ComGameEnd() {
                return _classCallCheck(this, ComGameEnd), _possibleConstructorReturn(this, _getPrototypeOf(ComGameEnd).apply(this, arguments));
            }
            return _inherits(ComGameEnd, fairygui.GComponent), _createClass(ComGameEnd, [{
                key: "constructFromXML",
                value: function value(e) {
                    var t = this;
                    _get(_getPrototypeOf(ComGameEnd.prototype), "constructFromXML", this).call(this, e),
                        this.mLoaderEnd = this.getChild("LoaderEnd").asLoader, this.mPointCtrl = this.getController("PointCtrl"),
                        this.mBtnNext = this.getChild("BtnNext").asLoader, this.mBtnReset = this.getChild("BtnReset").asLoader,
                        this.mBtnNext.onClick(
                            this, function (e) {
                                platform.getInstance().showInterstitial(() => {
                                    if (r.Instance.PlaySound("click"), H.Instance.ReducePower()) {
                                        if (t.mLevelId++, null == H.Instance.GetLevel(t.mLevelId)) {
                                            console.log("?t.mLevelId " + t.mLevelId)

                                            var a = {
                                                Url: t.mLevelId,
                                                Score: -1,
                                                IsPlayer: 0
                                            };
                                            H.Instance.SaveLevel(a);
                                            window.currentLevel = t.mLevelId;
                                        }
                                        console.log("currentLevel " + window.currentLevel);
                                        if (window.currentLevel > 495) {
                                            for (var i = 1; i < 500; i++) {
                                                var levelconf = {
                                                    Url: i,
                                                    Score: -1,
                                                    IsPlayer: 0
                                                };
                                                H.Instance.SaveLevel(levelconf);
                                            }
                                            H.Instance.LoadLevel(1, D.Game1);
                                            window.currentLevel = 1;
                                        } else {
                                            M.Instance.RandomTry() ? k.Instance.ShowWindow(X, t.mLevelId) : (k.Instance.HideWindow(U),
                                                H.Instance.SelectNewLevel())
                                                ;
                                        }
                                    }
                                })

                            }), this.mBtnReset.onClick(this, function (e) {
                                platform.getInstance().showInterstitial(() => {
                                    r.Instance.PlaySound("click"), k.Instance.HideWindow(U), H.Instance.SelectLevel(t.mLevelId, D.Game1);
                                })

                            });
                }
            }, {
                key: "Init",
                value: function value(e) {

                    this.mLevelId = e, this.mPointCtrl.setSelectedIndex(1);
                }
            }, {
                key: "SetEnd",
                value: function value(e) {
                    this.mLoaderEnd.url = "ui://Main/point" + e, 0 == e ? this.mPointCtrl.setSelectedIndex(0) : e >= 3 ? this.mPointCtrl.setSelectedIndex(2) : this.mPointCtrl.setSelectedIndex(1);
                }
            }, {
                key: "OnHide",
                value: function value() { }
            }]), ComGameEnd;
        }(), re = function (e) {
            function ComTeachingTier() {
                var e;
                return _classCallCheck(this, ComTeachingTier), (e = _possibleConstructorReturn(this, _getPrototypeOf(ComTeachingTier).apply(this, arguments))).mCubeList = new Array(),
                    e.mExecuteNum = 0, e;
            }
            return _inherits(ComTeachingTier, fairygui.GComponent), _createClass(ComTeachingTier, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComTeachingTier.prototype), "constructFromXML", this).call(this, e),
                        this.mComTeaching = this.getChild("ComTeaching"), this.visible = !1;
                }
            }, {
                key: "Init",
                value: function value(e, t) {
                    var a = this;
                    e.forEach(function (e) {
                        e.IsTeaching && a.mCubeList.push(e);
                    }), this.mCubeList.length <= 0 ? this.visible = !1 : (this.mLevel = t, this.SetOrder(),
                        this.mExecuteNum = 0, this.SetTeachingPos(this.mExecuteNum), this.visible = !0);
                }
            }, {
                key: "SetOrder",
                value: function value() {
                    2 == this.mLevel ? this.mCubeList.sort(function (e, t) {
                        return t.PosId - e.PosId;
                    }) : this.mCubeList.sort(function (e, t) {
                        return e.PosId - t.PosId;
                    });
                }
            }, {
                key: "GetCubeData",
                value: function value(e) {
                    return e >= 0 && e < this.mCubeList.length ? this.mCubeList[e] : null;
                }
            }, {
                key: "SetTeachingPos",
                value: function value(e) {
                    var t = this.GetCubeData(e);
                    t && (this.mCubeData = t, this.mComTeaching.setXY(t.BaseData.X, -1 * t.BaseData.Y - this.mComTeaching.height),
                        this.mComTeaching.SetDir(0), this.mComTeaching.SetDir(this.GetCubeDir(t)));
                }
            }, {
                key: "GetCubeDir",
                value: function value(e) {
                    var t = $.Instance.MoveRange(e.PosId);
                    return t.UpMax > 0 ? L.Up : t.DownMax > 0 ? L.Down : t.LeftMax > 0 ? L.Left : t.RightMax > 0 ? L.Right : 0;
                }
            }, {
                key: "SetNext",
                value: function value(e) {
                    this.mExecuteNum++, this.mCubeList.length <= 0 || this.mCubeData.PosId != e || this.mCubeList.length <= this.mExecuteNum ? this.visible = !1 : this.SetTeachingPos(this.mExecuteNum);
                }
            }, {
                key: "OnHide",
                value: function value() { }
            }]), ComTeachingTier;
        }(), he = function (e) {
            function ComTeaching() {
                return _classCallCheck(this, ComTeaching), _possibleConstructorReturn(this, _getPrototypeOf(ComTeaching).apply(this, arguments));
            }
            return _inherits(ComTeaching, fairygui.GComponent), _createClass(ComTeaching, [{
                key: "constructFromXML",
                value: function value(e) {
                    _get(_getPrototypeOf(ComTeaching.prototype), "constructFromXML", this).call(this, e),
                        this.mDirCtrl = this.getController("DirCtrl"), this.mAnimaDown = this.getTransition("AnimaDown"),
                        this.mAnimaUp = this.getTransition("AnimaUp"), this.mAnimaLeft = this.getTransition("AnimaLeft"),
                        this.mAnimaRight = this.getTransition("AnimaRight");
                }
            }, {
                key: "Init",
                value: function value(e) { }
            }, {
                key: "SetDir",
                value: function value(e) {
                    var t = this;
                    if (this.visible) {
                        if (0 == e) return this.mAnimaUp.stop(), this.mAnimaDown.stop(), this.mAnimaLeft.stop(),
                            void this.mAnimaRight.stop();
                        this.mDirCtrl.selectedIndex = e, 1 == e ? this.mAnimaUp.play(Laya.Handler.create(this, function (a) {
                            t.SetDir(e);
                        })) : 2 == e ? this.mAnimaDown.play(Laya.Handler.create(this, function (a) {
                            t.SetDir(e);
                        })) : 3 == e ? this.mAnimaLeft.play(Laya.Handler.create(this, function (a) {
                            t.SetDir(e);
                        })) : 4 == e && this.mAnimaRight.play(Laya.Handler.create(this, function (a) {
                            t.SetDir(e);
                        }));
                    }
                }
            }, {
                key: "OnHide",
                value: function value() { }
            }]), ComTeaching;
        }(), de = function (e) {
            function WinLoading() {
                var e;
                window.loading = this;
                return _classCallCheck(this, WinLoading), (e = _possibleConstructorReturn(this, _getPrototypeOf(WinLoading).call(this))).winUrl = "ui://Loading/WinLoading",
                    e.winDepth = 99, e.notDel = !0, e.needShowAnimation = !1, e.needFrameUpdate = !0,
                    e;

            }

            return _inherits(WinLoading, B), _createClass(WinLoading, [{
                key: "onInit",
                value: function value() {

                    _get(_getPrototypeOf(WinLoading.prototype),
                        "onInit", this).call(this),
                        this.mProgressBar = this.contentPane.getChild("ProgressBar").asProgress,
                        this.mLoaderLogo = this.contentPane.getChild("SpriteLogo").asLoader,
                        Laya.Browser.window.qg && Laya.Browser.window.vvMiniGame ? this.mLoaderLogo.url = "ui://Loading/logo2" : this.mLoaderLogo.url = "ui://Loading/logo",
                        this.mTimeCount = 0;
                    window.loading.getChildAt(0).getChildAt(3).visible = false;
                }
            }, {
                key: "OnFrameUpdate",
                value: function value(e) {
                    _get(_getPrototypeOf(WinLoading.prototype), "OnFrameUpdate", this).call(this, e),
                        this.mTimeCount += 1, this.mProgressBar.value = this.mTimeCount / 3;
                }
            }, {
                key: "onShown",
                value: function value() {
                    _get(_getPrototypeOf(WinLoading.prototype), "onShown", this).call(this), t.Log("loadPackage start=res/UI/Main"),
                        fairygui.UIPackage.loadPackage("res/UI/Main", Laya.Handler.create(this, this.OnPackageLoaded));
                }
            }, {
                key: "onHide",
                value: function value() {
                    _get(_getPrototypeOf(WinLoading.prototype), "onHide", this).call(this);
                }
            }, {
                key: "OnPackageLoaded",
                value: function value() {
                    t.Log("loadPackage finish=res/UI/Main,GoToScene=SceneMain"), this.mProgressBar.value = 100,
                        fairygui.UIObjectFactory.setPackageItemExtension(fairygui.UIConfig.globalModalWaiting, Q),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ItemLevel", Y), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ItemSign", q),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ItemSign2", q), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComGame", ee),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComPropsTier", ae),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComProps", te), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComLevel", z),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ItemShop", J), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComBall", ie),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComBallTier", oe), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComGameTopStar", ne),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComGameEnd", se), fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComTeaching", he),
                        fairygui.UIObjectFactory.setPackageItemExtension("ui://Main/ComTeachingTier", re)
                        ,
                        n.Instance.GoToScene(j);

                }
            }]), WinLoading;
        }(), le = function (e) {
            function SceneLoading() {
                return _classCallCheck(this, SceneLoading), _possibleConstructorReturn(this, _getPrototypeOf(SceneLoading).apply(this, arguments));
            }
            return _inherits(SceneLoading, o), _createClass(SceneLoading, [{
                key: "OnEnter",
                value: function value(e, a) {

                    t.Log("loadPackage start=res/UI/Loading"), fairygui.UIPackage.loadPackage("res/UI/Loading", Laya.Handler.create(this, this.OnPackageLoaded));
                }
            }, {
                key: "OnLeave",
                value: function value() { }
            }, {
                key: "OnPackageLoaded",
                value: function value() {
                    t.Log("loadPackage finish=res/UI/Loading,ShowWindow=WinLoading"), k.Instance.ShowWindow(de);
                    console.log("loading");
                    platform.getInstance().showBanner();
                    platform.getInstance().hideSplash();
                }
            }]), SceneLoading;
        }();
    new (function () {
        function Main() {
            _classCallCheck(this, Main), window.Laya3D ? Laya3D.init(e.width, e.height) : Laya.init(e.width, e.height, Laya.WebGL),
                console.log("Laya", Laya)
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = e.scaleMode, Laya.stage.screenMode = e.screenMode, Laya.stage.alignV = e.alignV,
                Laya.stage.alignH = e.alignH, Laya.stage.bgColor = "#000000", Laya.URL.exportSceneToJson = e.exportSceneToJson,
                e.debug || "true" == Laya.Utils.getQueryString("debug") ? t.Log = console.log : t.Log = function (e) { },
                e.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), e.stat && Laya.Stat.show(),
                Laya.alertGlobalError = !0, Laya.Browser.window.storageKey = "sg_pushball_", t.Log("当前引擎版本=" + Laya.version);
            Laya.Text.langPacks = {
                "白球": "White ball",
                "商城": "Shop",
                "排球": "Volleyball",
                "网球": "Tennis",
                "足球": "Football",
                "篮球": "Basketball",
                "桌球": "Billiards",
                "七龙珠": "Dragon Ball",
                "精灵球": "Pokeball",
                "地球": "Earth ball",
                "签到奖励": "Sign-in",
                "领取": "receive",
                "提示": "Hint",
                "确定": "Ok",
                "恭喜获得": "Great"
            }

            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.OnVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        return _createClass(Main, [{
            key: "OnVersionLoaded",
            value: function value(e) {
                t.Log("OnVersionLoaded=" + e), Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.OnConfigLoaded));
            }
        }, {
            key: "OnConfigLoaded",
            value: function value(e) {
                t.Log("OnFileConfigLoaded=" + e), Laya.stage.addChild(fairygui.GRoot.inst.displayObject),
                    fairygui.UIConfig.defaultFont = "Microsoft YaHei", fairygui.UIConfig.packageFileExtension = "bin",
                    fairygui.UIConfig.bringWindowToFrontOnClick = !1, fairygui.UIConfig.windowModalWaiting = "ui://Main/ComWait",
                    fairygui.UIConfig.globalModalWaiting = "ui://Main/ComWait", fairygui.UIConfig.modalLayerColor = "rgba(0,0,0,0.7)",
                    s.Instance.Init("ui://Main/ComTip"), r.Instance.Init(), P.Instance.Init()
                platform.getInstance().createLogo(),
                    platform.getInstance().showSplash();
                console.log("showSplash");
                platform.getInstance().puzzlegamestartup("Unblock-The-Ball", () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
                        e.stopPropagation(); platform.getInstance().navigate("game", "logo");
                    });
                    n.Instance.GoToScene(le);
                })
            }
        }, {
            key: "OnFrameUpdate",
            value: function value() { }
        }, {
            key: "OnTimeUpdate",
            value: function value() { }
        }]), Main;
    }())();
}();