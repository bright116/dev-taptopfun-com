var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    };
    return function(t, r) {
        function n() {
            this.constructor = t;
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
            new n());
    };
}();

! function() {
    function e(t, r, n) {
        function i(a, c) {
            if (!r[a]) {
                if (!t[a]) {
                    var d = "function" == typeof require && require;
                    if (!c && d) return d(a, !0);
                    if (o) return o(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s;
                }
                var l = r[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function(e) {
                    var r = t[a][1][e];
                    return i(r || e);
                }, l, l.exports, e, t, r, n);
            }
            return r[a].exports;
        }
        for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
        return i;
    }
    return e;
}()({
    1: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n;
        ! function(e) {
            e.None = "", e.ReportAdClickSuccess = "广告导出成功", e.ReportAdClickFail = "广告导出失败",
                e.ReportLaunchOptions = "用户启动参数";
        }(n = r.dzcr_ALDEventDef || (r.dzcr_ALDEventDef = {}));
        var i = function() {
            function e() {}
            return e.dzcr_aldSendOpenId = function(e) {
                Laya.Browser.onMiniGame ? (Laya.Browser.window.wx.aldSendOpenid(e), console.log("ALD 上报 openid : ", e)) : Laya.Browser.onQQMiniGame && (Laya.Browser.window.qq.aldSendOpenid(e),
                    console.log("ALD 上报 openid : ", e));
            }, e.dzcr_aldSendEvent = function(e, t) {
                var r = e;
                Laya.Browser.onMiniGame ? Laya.Browser.window.wx.aldSendEvent(r, t) : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.aldSendEvent(r, t);
            }, e.dzcr_aldSendReportAdClickSuccess = function(t) {
                var r = n.ReportAdClickSuccess + " " + t.title + ":" + String(t.appid);
                e.dzcr_aldSendEvent(r, {
                    "导出成功": t.title + ":" + String(t.appid)
                });
            }, e.dzcr_aldSendReportAdClickFail = function(t) {
                var r = n.ReportAdClickFail + " " + t.title + ":" + String(t.appid);
                e.dzcr_aldSendEvent(r, {
                    "导出失败": t.title + ":" + String(t.appid)
                });
            }, e.dzcr_aldSendReportLaunchOptions = function(t, r, i) {
                var o = n.ReportLaunchOptions;
                e.dzcr_aldSendEvent(o, {
                    "场景值：": String(t),
                    "Ip：": String(r),
                    "地区：": JSON.stringify(i)
                });
            }, e;
        }();
        r["default"] = i;
    }, {}],
    2: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_AppID = "wx51acb355735430cc", e.dzcr_ResServer = "https://oss.renyouwangluo.cn/dzcr",
                e.dzcr_LocalTestReServer = "subRes", e.dzcr_Versions = "0.0.0", e.onTTMiniGame = !1,
                e.GameName = "", e;
        }();
        r["default"] = n;
    }, {}],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./Config/AppSwitchConfig"),
            i = function() {
                function e() {}
                return e.preloadBanner = function() {}, e.show = function(t) {
                        var r = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wxWuDianBanners;
                        n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerTodayBannerMax;
                        if (t = r[Math.floor(Math.random() * r.length)], Laya.Browser.onQQMiniGame && null != t) {
                            var i = Laya.Browser.window.qq.getSystemInfoSync(),
                                o = i.screenWidth,
                                a = i.screenHeight,
                                c = Laya.Browser.window.qq.createBannerAd({
                                    adUnitId: t,
                                    adIntervals: 30,
                                    style: {
                                        left: 0,
                                        top: (Laya.stage.height - 240) / Laya.stage.height * a,
                                        width: o
                                    }
                                });
                            if (c) {
                                var d = this;
                                e.dzcr__onLoad = function(r) {
                                    console.log("CachedQQBanner 广告 加载完成", t), console.log(r), d.dzcr__isHide ? (c.offLoad(e.dzcr__onLoad),
                                        c.offError(e.dzcr__onError), c.destroy()) : c.show();
                                }, c.onLoad(e.dzcr__onLoad), e.dzcr__onError = function(r) {
                                    console.log("CachedQQBanner 广告 加载失败", t), console.log(r), c.offLoad(e.dzcr__onLoad),
                                        c.offError(e.dzcr__onError), c.destroy();
                                }, c.onError(e.dzcr__onError), e.dzcr__curBanner = c;
                            }
                        }
                        e.dzcr__isHide = !1;
                    }, e.hide = function() {
                        e.dzcr__isHide = !0, Laya.timer.clearAll(e), null != e.dzcr__curBanner && (e.dzcr__curBanner.hide(),
                            e.dzcr__curBanner.offLoad(e.dzcr__onLoad), e.dzcr__curBanner.offError(e.dzcr__onError),
                            e.dzcr__curBanner.destroy(), e.dzcr__curBanner = null, console.log("CachedQQBanner 广告隐藏"));
                    }, e.changeShow = function() {
                        null != e.dzcr__curBanner && (e.dzcr__curBanner.hide(), e.dzcr__curBanner = null),
                            e.show();
                    }, e.clear = function() {}, e.dzcr__curBanner = null, e.dzcr__onLoad = null, e.dzcr__onError = null,
                    e.dzcr__isHide = !0, e;
            }();
        r["default"] = i;
    }, {
        "./Config/AppSwitchConfig": 5
    }],
    4: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./Config/AppSwitchConfig"),
            i = function() {
                function e() {}
                return e.dzcr_preloadBanner = function() {
                        for (var t = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wxWuDianBanners, r = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerTodayBannerMax, i = new Array(), o = 0; o < t.length; ++o) i.push(t[o]);
                        if (i.length > r)
                            for (var a = i.length - r, o = 0; a > o; ++o) i.splice(Math.floor(Math.random() * i.length), 1);
                        console.log("开始预创建微信Bannaer", i), console.log("Bannaer 最大数限制 ：", r);
                        var c = 0;
                        Laya.timer.loop(2e3, e.dzcr__preLoopObj, function() {
                            if (c >= i.length) return void Laya.timer.clearAll(e.dzcr__preLoopObj);
                            var t = i[c],
                                r = e.dzcr__bannerCache[t];
                            null == r && (r = e.dzcr_create(t), null != r && (e.dzcr__bannerCache[t] = r, console.log("预创建微信Bannaer", t, "完成"))),
                                ++c;
                        });
                    }, e.dzcr_getBanner = function(t) {
                        if (null == t || "" == t) return null;
                        var r = e.dzcr__bannerCache[t];
                        return null == r && (r = e.dzcr_create(t), null != r && (e.dzcr__bannerCache[t] = r)),
                            r;
                    }, e.dzcr_create = function(e) {
                        if (Laya.Browser.onMiniGame) {
                            var t = Laya.Browser.window.wx.getSystemInfoSync(),
                                r = t.screenWidth,
                                n = t.screenHeight,
                                i = Laya.Browser.window.wx.createBannerAd({
                                    adUnitId: e,
                                    adIntervals: 30,
                                    style: {
                                        left: 0,
                                        top: (Laya.stage.height - 240) / Laya.stage.height * n,
                                        width: r
                                    }
                                });
                            return i && (i.onLoad(function(t) {
                                console.log("CachedWXBanner 广告 加载完成", e), console.log(t);
                            }), i.onError(function(t) {
                                console.log("CachedWXBanner 广告 加载失败", e), console.log(t);
                            }), i.onResize(function(e) {
                                console.log(i.style.realWidth, i.style.realHeight);
                            })), i;
                        }
                        return null;
                    }, e.dzcr_show = function() {
                        null != e.dzcr__curBanner && (e.dzcr__curBanner.hide(), e.dzcr__curBanner = null);
                        var t = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wxWuDianBanners,
                            r = t[Math.floor(Math.random() * t.length)],
                            i = e.dzcr_getBanner(r);
                        if (i) {
                            e.dzcr__curBanner = i;
                            var o = Laya.Browser.window.wx.getSystemInfoSync(),
                                a = (o.screenWidth, o.screenHeight);
                            e.dzcr__curBanner.style.top = (Laya.stage.height - 240) / Laya.stage.height * a,
                                e.dzcr__curBanner.show(), console.log("CachedWXBanner 广告显示 bannerid ： ", r);
                        }
                        n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerFreshTimer;
                    }, e.dzcr_hide = function() {
                        Laya.timer.clearAll(e), null != e.dzcr__curBanner && (e.dzcr__curBanner.hide(),
                            e.dzcr__curBanner = null), console.log("CachedWXBanner 广告隐藏");
                    }, e.dzcr_changeShow = function() {
                        null != e.dzcr__curBanner && (e.dzcr__curBanner.hide(), e.dzcr__curBanner = null),
                            e.dzcr_show();
                    }, e.dzcr_clear = function() {
                        Laya.timer.clearAll(e);
                        for (var t in e.dzcr__bannerCache) {
                            var r = e.dzcr__bannerCache[t];
                            null != r && r.destroy(), e.dzcr__bannerCache[t] = null;
                        }
                    }, e.dzcr__bannerCache = {}, e.dzcr__curBanner = null, e.dzcr__preLoopObj = {},
                    e;
            }();
        r["default"] = i;
    }, {
        "./Config/AppSwitchConfig": 5
    }],
    5: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../AppConfig"),
            i = function() {
                function e() {
                    this.dzcr_version = "", this.dzcr_banner = 0, this.dzcr_wudian = 0, this.wudianAvailableTime = {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0
                        }, this.dzcr_mailiang = 1, this.dzcr_mailianglist = new Array(), this.dzcr_mailiangSceneList = new Array(),
                        this.dzcr_wxWuDianBanners = new Array(), this.dzcr_recreateBannerIDList = new Array(),
                        this.dzcr_bannerRecreateTime = 5, this.dzcr_kuangdianjiange = 0, this.dzcr_btnMoveTimer = 1,
                        this.dzcr_bannerMoveTimer = .5, this.dzcr_bannerFreshTimer = 200, this.dzcr_bannerCreateFailNum = 3,
                        this.dzcr_bannerTodayBannerMax = 10, this.dzcr_adSwitch = 1, this.dzcr_wudianSceneList = new Array(),
                        this.dzcr_continueBtnDelayTime = 2, this.dzcr_bannerShowTime = 30, this.fakeBtn = 0,
                        this.dzcr_oppocfg = new o(), this.dzcr_qqcfg = new a(), this.dzcr_ttcfg = new c();
                }
                return Object.defineProperty(e.prototype, "wudianTimeAvaliable", {
                    get: function() {
                        return 1 == this.wudianAvailableTime[new Date().getHours()];
                    },
                    enumerable: !0,
                    configurable: !0
                }), e;
            }();
        r.dzcr_AppSwitchData = i;
        var o = function() {
            function e() {
                this.dzcr_yuansheng = 100, this.dzcr_yuanshengSwitch = 1, this.dzcr_addToDesktop = 0,
                    this.dzcr_oppoversions = "", this.dzcr_btnShowTimer = 0, this.dzcr_indexAdSwitch = 0,
                    this.dzcr_endAdSwitch = 0, this.dzcr_yuansheng2 = 100, this.dzcr_yuanshengSwitch2 = 1;
            }
            return e;
        }();
        r.dzcr_OPPOCfg = o;
        var a = function() {
            function e() {
                this.dzcr_kuangdianBanner = 0, this.dzcr_kuangdianBox = 0, this.dzcr_box = 0, this.dzcr_weiyi = 0,
                    this.dzcr_qqversions = "";
            }
            return e;
        }();
        r.dzcr_QQCfg = a;
        var c = function() {
            function e() {
                this.dzcr_moreGameSwitch = 0, this.dzcr_kuangdianBanner = 0, this.dzcr_luping = 0,
                    this.dzcr_ttversions = "";
            }
            return e;
        }();
        r.dzcr_TTCfg = c;
        var d = function() {
            function e() {
                this.dzcr__data = new Array();
            }
            return e.dzcr_getInstance = function() {
                return null == e.dzcr__instance && (e.dzcr__instance = e.dzcr_load()), e.dzcr__instance;
            }, e.dzcr_load = function() {
                var t = new e(),
                    r = Laya.loader.getRes(n["default"].dzcr_ResServer + "/json/appswitch.json");
                if (r) {
                    for (var o = 0; o < r.length; ++o) {
                        var a = r[o],
                            c = new i();
                        c.dzcr_version = String(a.version), c.dzcr_banner = Number(a.banner), c.dzcr_wudian = Number(a.wudian),
                            c.wudianAvailableTime = Object(a.wudianTime), c.dzcr_mailiang = Number(a.mailiang);
                        var d = a.mailianglist;
                        if (null != d)
                            for (var s = 0; s < d.length; ++s) {
                                var l = Number(d[s]);
                                c.dzcr_mailianglist.push(l);
                            }
                        var _ = a.mailiangScenelist;
                        if (null != _)
                            for (var s = 0; s < _.length; ++s) {
                                var u = Number(_[s]);
                                c.dzcr_mailiangSceneList.push(u);
                            }
                        var h = a.wxwudianbanners;
                        if (null != h)
                            for (var s = 0; s < h.length; ++s) {
                                var p = String(h[s]);
                                c.dzcr_wxWuDianBanners.push(p);
                            }
                        var f = a.recreateBannerIDList;
                        if (null != f)
                            for (var s = 0; s < f.length; ++s) {
                                var p = String(f[s]);
                                c.dzcr_recreateBannerIDList.push(p);
                            }
                        c.dzcr_bannerRecreateTime = null != a.bannerRecreateTime ? Number(a.bannerRecreateTime) : c.dzcr_bannerRecreateTime,
                            c.dzcr_kuangdianjiange = null != a.kuangdianjiange ? Number(a.kuangdianjiange) : c.dzcr_kuangdianjiange,
                            c.dzcr_btnMoveTimer = Number(a.btnMoveTimer), c.dzcr_bannerMoveTimer = Number(a.bannerMoveTimer),
                            c.dzcr_bannerCreateFailNum = Number(a.createFailNum), c.dzcr_bannerFreshTimer = Number(a.bannerFreshTimer),
                            c.dzcr_bannerTodayBannerMax = Number(a.todayBannerMax), c.dzcr_adSwitch = Number(a.adSwitch);
                        var z = a.wudianSceneList;
                        if (null != z)
                            for (var s = 0; s < z.length; ++s) {
                                var g = Number(z[s]);
                                c.dzcr_wudianSceneList.push(g);
                            }
                        if (c.dzcr_continueBtnDelayTime = Number(a.continueBtnDelayTime), c.dzcr_bannerShowTime = Number(a.bannerShowTime),
                            c.fakeBtn = null != a.fakeBtn ? Number(a.fakeBtn) : c.fakeBtn, null != a.oppocfg) {
                            var m = a.oppocfg;
                            c.dzcr_oppocfg.dzcr_yuansheng = Number(m.yuansheng), c.dzcr_oppocfg.dzcr_yuanshengSwitch = Number(m.yuanshengSwitch),
                                c.dzcr_oppocfg.dzcr_addToDesktop = Number(m.addToDesktop), c.dzcr_oppocfg.dzcr_oppoversions = String(m.oppoversions),
                                c.dzcr_oppocfg.dzcr_btnShowTimer = Number(m.btnShowTimer), c.dzcr_oppocfg.dzcr_indexAdSwitch = Number(m.indexAdSwitch),
                                c.dzcr_oppocfg.dzcr_endAdSwitch = Number(m.endAdSwitch), c.dzcr_oppocfg.dzcr_yuansheng2 = null != m.yuansheng2 ? Number(m.yuansheng2) : c.dzcr_oppocfg.dzcr_yuansheng2,
                                c.dzcr_oppocfg.dzcr_yuanshengSwitch2 = null != m.yuanshengSwitch2 ? Number(m.yuanshengSwitch2) : c.dzcr_oppocfg.dzcr_yuanshengSwitch2;
                        }
                        if (null != a.qqcfg) {
                            var m = a.qqcfg;
                            c.dzcr_qqcfg.dzcr_kuangdianBanner = Number(m.kuangdianBanner), c.dzcr_qqcfg.dzcr_kuangdianBox = Number(m.kuangdianBox),
                                c.dzcr_qqcfg.dzcr_box = Number(m.box), c.dzcr_qqcfg.dzcr_weiyi = Number(m.weiyi),
                                c.dzcr_qqcfg.dzcr_qqversions = String(m.qqversions);
                        }
                        if (null != a.ttcfg) {
                            var m = a.ttcfg;
                            c.dzcr_ttcfg.dzcr_moreGameSwitch = Number(m.moreGameSwitch), c.dzcr_ttcfg.dzcr_kuangdianBanner = Number(m.kuangdianBanner),
                                c.dzcr_ttcfg.dzcr_luping = Number(m.luping), c.dzcr_ttcfg.dzcr_ttversions = String(m.ttversions);
                        }
                        t.dzcr__data.push(c);
                    }
                    return t;
                }
                return t.dzcr__data.push(new i()), t;
            }, e.prototype.dzcr_getAppSwitchData = function() {
                return this.dzcr__data[0];
            }, e;
        }();
        r["default"] = d;
    }, {
        "../AppConfig": 2
    }],
    6: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.StartPowerX = 0, this.StartPowerY = 9, this.StartPowerZ = -4, this.StartClimbPowerX = 0,
                    this.StartClimbPowerY = 9, this.StartClimbPowerZ = -4, this.ParachueUp = 5, this.ClimbSpeed = -15,
                    this.DownhillSpeed = -17, this.SpeeedBuffPower = 20, this.JumpBuffPowerY = 20, this.JumpBuffPowerZ = -5,
                    this.SJumpBuffPowerY = 50, this.SJumpBuffPowerZ = -8, this.THPD_Y = 40, this.THPD_Z = -50,
                    this.DPHT_Y = 40, this.DPHT_Z = 50, this.PIPE_SPEED_IN_Y = -15, this.PIPE_SPEED_IN_Z = -50,
                    this.PIPE_SPEED_OUT_Y = 50, this.PIPE_SPEED_OUT_Z = -50, this.PIPE_SPEED_STAY_Y = 0,
                    this.PIPE_SPEED_STAY_Z = -50, this.AngularFactor = 1, this.ForwardY = -3, this.ForwardZ = -5,
                    this.DirDown = -5, this.CameraOffset = 8, this.CameraSpeedRate = 20, this.CameraSpeed = 10,
                    this.AniSpeedRate = 15, this.AngularDamping = .5, this.LinearDamping = 0, this.Mass = 1.5,
                    this.Restitution = .4, this.BoxRestitution = 1, this.Friction = .5, this.Cooldown = 300,
                    this.ClimbHitDistance = 4, this.DownHitDistance = 3.5, this.LegSphereRadius = 2.3,
                    this.NoLegSphereRadius = 1, this.JumpTime = 200, this.TrailSpeed = 25, this.FxSpeed = 15,
                    this.FxSpeedMax = 25, this.AniJump = "Jump 1-1", this.AniFall = "Jump 2-1", this.AniShowLegs = "Jump 2-2",
                    this.AniHideLegs = "Jump 2-3", this.AniFly = "loop", this.AniRun = "Run", this.DownhillSlope = -10,
                    this.LegsScale = 25.5, this.InitStartPowerX = 0, this.InitStartPowerY = 15, this.InitStartPowerZ = -60,
                    this.LockTime = 3e3, this.CameraZoomSpeed = 25, this.CameraZoomDistanceX = 5, this.FlyLinearVelocityZ = -13,
                    this.StopCtrlRotateX = 120, this.THPDLockTime = 5e3, this.FlyAngularVelocityX = 4,
                    this.ShowNodeDistance = 80, this.ResetAIPositionY = 12, this.ResetAIPositionZ = 10;
            }
            return e;
        }();
        r["default"] = n;
    }, {}],
    7: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n;
        ! function(e) {
            e[e.dzcr_None = 0] = "dzcr_None", e[e.dzcr_App_CloseFirstLoadingView = 500] = "dzcr_App_CloseFirstLoadingView",
                e[e.dzcr_AD_OnShareAdFail = 501] = "dzcr_AD_OnShareAdFail", e[e.dzcr_Game_OnViewOpen = 600] = "dzcr_Game_OnViewOpen",
                e[e.dzcr_Game_OnViewClose = 601] = "dzcr_Game_OnViewClose", e[e.dzcr_Game_OnUserMoneyChange = 701] = "dzcr_Game_OnUserMoneyChange",
                e[e.dzcr_Game_OnUserCrystalChange = 702] = "dzcr_Game_OnUserCrystalChange", e[e.dzcr_Game_OnLevelStart = 1e3] = "dzcr_Game_OnLevelStart",
                e[e.dzcr_Game_OnLevelComplate = 1001] = "dzcr_Game_OnLevelComplate", e[e.dzcr_AD_WudianBanner_LoadComplete = 2217] = "dzcr_AD_WudianBanner_LoadComplete",
                e[e.dzcr_AD_WudianBanner_Show = 2218] = "dzcr_AD_WudianBanner_Show", e[e.dzcr_AD_WudianBanner_Hide = 2219] = "dzcr_AD_WudianBanner_Hide",
                e[e.dzcr_AD_WudianBanner_PreLoad = 2220] = "dzcr_AD_WudianBanner_PreLoad", e[e.dzcr_App_OnUpdateIpBlockState = 2221] = "dzcr_App_OnUpdateIpBlockState";
        }(n = r.dzcr_EventDef || (r.dzcr_EventDef = {}));
    }, {}],
    8: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = Laya.EventDispatcher,
            i = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.dzcr_dispatch = function(e, r) {
                    t.dzcr_eventDispatcher.event(e, r);
                }, t.prototype.dzcr_regEvemt = function(e, r, n, i) {
                    t.dzcr_eventDispatcher.on(e, r, n, null == i ? null : [i]);
                }, t.prototype.dzcr_regOnceEvent = function(e, r, n, i) {
                    t.dzcr_eventDispatcher.once(e, r, n, null == i ? null : [i]);
                }, t.prototype.dzcr_removeEvent = function(e, r, n, i) {
                    t.dzcr_eventDispatcher.off(e, r, n);
                }, t.dzcr_eventDispatcher = new n(), t.dzcr_instance = new t(), t;
            }(n);
        r["default"] = i;
    }, {}],
    9: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./Mgr/GameMgr"),
            i = e("./KRQ/Com/KRQ_LoopAd/KRQ_LoopAdBox"),
            o = e("./KRQ/Com/KRQ_LoopAd/KRQ_VLoopAd"),
            a = e("./KRQ/Com/KRQ_Banner"),
            c = e("./KRQ/ViewCom/KRQ_Export"),
            d = e("./KRQ/Com/KRQ_History/KRQ_HistoryBox"),
            s = e("./KRQ/Com/KRQ_History/KRQ_History"),
            l = e("./KRQ/Com/KRQ_RockSingleAd"),
            _ = e("./KRQ/ViewCom/KRQ_Floating"),
            u = e("./KRQ/Com/KRQ_RollSingleAd"),
            h = e("./KRQ/ViewCom/KRQ_GameOver"),
            p = e("./KRQ/ViewCom/KRQ_SidePull"),
            f = e("./KRQ/Com/KRQ_LoopAd/KRQ_HLoopAd"),
            z = e("./KRQ/ViewCom/KRQ_Main"),
            g = e("./KRQ/Com/KRQ_SingleAd"),
            m = e("./KRQ/Com/KRQ_GamingBanner"),
            y = e("./View/TwinkleSprite"),
            w = e("./View/ClickGetPrize/ClickGetPrize"),
            v = e("./View/LoadingView/LogoAni"),
            S = e("./View/LoadingView/LoadingView"),
            L = e("./View/TemplateViews/Export2/Exprot2ViewTemplate"),
            B = e("./View/ButtonAnim"),
            A = e("./View/TemplateViews/GameFail/GameFailViewTemplate"),
            C = e("./View/TemplateViews/GameWin/GameWinViewTemplate"),
            b = e("./View/TemplateViews/InGame/InGameViewTemplate"),
            M = e("./View/TemplateViews/Main/MainViewTemplate"),
            D = e("./View/TipsView/TipsView"),
            R = e("./ShareAd/View/LoopAdBox"),
            I = e("./ShareAd/View/HorizontalLoopAdView"),
            E = e("./ShareAd/View/BannerAdView"),
            V = e("./View/Common/UniversalBottomZone"),
            k = function() {
                function e() {}
                return e.init = function() {
                        var e = Laya.ClassUtils.regClass;
                        e("Mgr/GameMgr.ts", n["default"]), e("KRQ/Com/KRQ_LoopAd/KRQ_LoopAdBox.ts", i["default"]),
                            e("KRQ/Com/KRQ_LoopAd/KRQ_VLoopAd.ts", o["default"]), e("KRQ/Com/KRQ_Banner.ts", a["default"]),
                            e("KRQ/ViewCom/KRQ_Export.ts", c["default"]), e("KRQ/Com/KRQ_History/KRQ_HistoryBox.ts", d["default"]),
                            e("KRQ/Com/KRQ_History/KRQ_History.ts", s["default"]), e("KRQ/Com/KRQ_RockSingleAd.ts", l["default"]),
                            e("KRQ/ViewCom/KRQ_Floating.ts", _["default"]), e("KRQ/Com/KRQ_RollSingleAd.ts", u["default"]),
                            e("KRQ/ViewCom/KRQ_GameOver.ts", h["default"]), e("KRQ/ViewCom/KRQ_SidePull.ts", p["default"]),
                            e("KRQ/Com/KRQ_LoopAd/KRQ_HLoopAd.ts", f["default"]), e("KRQ/ViewCom/KRQ_Main.ts", z["default"]),
                            e("KRQ/Com/KRQ_SingleAd.ts", g["default"]), e("KRQ/Com/KRQ_GamingBanner.ts", m["default"]),
                            e("View/TwinkleSprite.ts", y["default"]), e("View/ClickGetPrize/ClickGetPrize.ts", w["default"]),
                            e("View/LoadingView/LogoAni.ts", v["default"]), e("View/LoadingView/LoadingView.ts", S["default"]),
                            e("View/TemplateViews/Export2/Exprot2ViewTemplate.ts", L["default"]), e("View/ButtonAnim.ts", B["default"]),
                            e("View/TemplateViews/GameFail/GameFailViewTemplate.ts", A["default"]), e("View/TemplateViews/GameWin/GameWinViewTemplate.ts", C["default"]),
                            e("View/TemplateViews/InGame/InGameViewTemplate.ts", b["default"]), e("View/TemplateViews/Main/MainViewTemplate.ts", M["default"]),
                            e("View/TipsView/TipsView.ts", D["default"]), e("ShareAd/View/LoopAdBox.ts", R["default"]),
                            e("ShareAd/View/HorizontalLoopAdView.ts", I["default"]), e("ShareAd/View/BannerAdView.ts", E["default"]),
                            e("View/Common/UniversalBottomZone.ts", V["default"]);
                    }, e.width = 750, e.height = 1334, e.scaleMode = "fixedwidth", e.screenMode = "vertical",
                    e.alignV = "middle", e.alignH = "center", e.startScene = "GameMain.scene", e.sceneRoot = "",
                    e.debug = !1, e.stat = !1, e.physicsDebug = !1, e.exportSceneToJson = !0, e;
            }();
        r["default"] = k, k.init();
    }, {
        "./KRQ/Com/KRQ_Banner": 10,
        "./KRQ/Com/KRQ_GamingBanner": 12,
        "./KRQ/Com/KRQ_History/KRQ_History": 13,
        "./KRQ/Com/KRQ_History/KRQ_HistoryBox": 14,
        "./KRQ/Com/KRQ_LoopAd/KRQ_HLoopAd": 15,
        "./KRQ/Com/KRQ_LoopAd/KRQ_LoopAdBox": 16,
        "./KRQ/Com/KRQ_LoopAd/KRQ_VLoopAd": 17,
        "./KRQ/Com/KRQ_RockSingleAd": 18,
        "./KRQ/Com/KRQ_RollSingleAd": 19,
        "./KRQ/Com/KRQ_SingleAd": 20,
        "./KRQ/ViewCom/KRQ_Export": 21,
        "./KRQ/ViewCom/KRQ_Floating": 22,
        "./KRQ/ViewCom/KRQ_GameOver": 23,
        "./KRQ/ViewCom/KRQ_Main": 24,
        "./KRQ/ViewCom/KRQ_SidePull": 25,
        "./Mgr/GameMgr": 30,
        "./ShareAd/View/BannerAdView": 51,
        "./ShareAd/View/HorizontalLoopAdView": 52,
        "./ShareAd/View/LoopAdBox": 53,
        "./View/ButtonAnim": 57,
        "./View/ClickGetPrize/ClickGetPrize": 58,
        "./View/Common/UniversalBottomZone": 59,
        "./View/LoadingView/LoadingView": 61,
        "./View/LoadingView/LogoAni": 62,
        "./View/TemplateViews/Export2/Exprot2ViewTemplate": 63,
        "./View/TemplateViews/GameFail/GameFailViewTemplate": 64,
        "./View/TemplateViews/GameWin/GameWinViewTemplate": 65,
        "./View/TemplateViews/InGame/InGameViewTemplate": 66,
        "./View/TemplateViews/Main/MainViewTemplate": 67,
        "./View/TipsView/TipsView": 69,
        "./View/TwinkleSprite": 70
    }],
    10: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ComBase"),
            i = e("../../WXAPI"),
            o = e("../../Config/AppSwitchConfig"),
            a = e("../../ShareAd/ShareAd"),
            c = e("../../QQMiniGameAPI"),
            d = e("../../Mgr/WudianMgr"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__wxBanner = null, t.dzcr__onLoad = null, t.dzcr__onError = null, t.dzcr__onResize = null,
                        t.dzcr__isCreating = !1, t.dzcr__isDestroyed = !1, t.dzcr__isHide = !1, t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_Clip", {
                    get: function() {
                        return this.owner;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onAwake = function() {
                    this.dzcr_AdPosID = a["default"].dzcr_BannerAdLocationID;
                }, t.prototype.onStart = function() {
                    this.dzcr_refresh();
                }, t.prototype.onEnable = function() {
                    this.dzcr_Sprite.on(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.onDisable = function() {
                    this.dzcr_Sprite.off(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.dzcr_onClickAd = function() {
                    this.dzcr_navigateToMiniProgram();
                }, t.prototype.dzcr_refresh = function(e) {
                    if (!this.dzcr__isDestroyed) {
                        var t = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_banner;
                        if (1 == t) {
                            if (this.dzcr_refreshWXBanner(), Laya.Browser.onQQMiniGame && d["default"].dzcr_GetIpBlocked()) {
                                for (var r = c["default"].dzcr_getLaunchOptionsSync().scene, n = !0, i = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, a = 0; a < i.length; ++a) {
                                    var s = i[a];
                                    r == s && (n = !1);
                                }
                                if (n) {
                                    var l = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                                    Laya.timer.loop(1e3 * l, this, this.dzcr_refreshWXBanner);
                                }
                            }
                        } else if (this.dzcr_refreshBanner(), Laya.Browser.onQQMiniGame && d["default"].dzcr_GetIpBlocked()) {
                            for (var r = c["default"].dzcr_getLaunchOptionsSync().scene, n = !0, i = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, a = 0; a < i.length; ++a) {
                                var s = i[a];
                                r == s && (n = !1);
                            }
                            if (n) {
                                var l = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                                Laya.timer.loop(1e3 * l, this, this.dzcr_refreshWXBanner);
                            }
                        }
                    }
                }, t.prototype.dzcr_refreshBanner = function() {
                    var t = this;
                    null != this.dzcr_Sprite && this.dzcr_Sprite.visible && (this.dzcr__isCreating || this.dzcr__isDestroyed || (this.dzcr__isCreating = !0,
                        e.prototype.dzcr_refresh.call(this, function() {
                            if (null != t.dzcr__data) {
                                var e = t;
                                t.dzcr_Sprite.loadImage(t.dzcr__data.logo, Laya.Handler.create(t, function() {
                                    null == e.dzcr_Sprite || e.dzcr_Sprite.destroyed || (e.dzcr_Sprite.width = 600,
                                        e.dzcr_Sprite.height = 205);
                                }));
                            }
                            t.dzcr__isCreating = !1;
                        })));
                }, t.prototype.dzcr_refreshWXBanner = function() {
                    if (!Laya.Browser.onMiniGame && !Laya.Browser.onQQMiniGame || null == this.dzcr_Sprite || this.dzcr_Sprite.destroyed || !this.dzcr_Sprite.visible) return Laya.timer.clearAll(this),
                        void this.dzcr_clearWXBaner();
                    if (!(this.dzcr__isCreating || this.dzcr__isDestroyed || this.dzcr__isHide)) {
                        this.dzcr_clearWXBaner();
                        var e = this,
                            t = null;
                        Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx.getSystemInfoSync() : Laya.Browser.onQQMiniGame && (t = Laya.Browser.window.qq.getSystemInfoSync());
                        var r = t.screenWidth,
                            n = t.screenHeight,
                            a = this.dzcr_Sprite.localToGlobal(new Laya.Point(0, 0)),
                            d = 300,
                            s = e.dzcr_Sprite.width / Laya.stage.width,
                            l = r * s,
                            _ = (l - d) / 2,
                            u = a.x / Laya.stage.width * r + _,
                            h = a.y / Laya.stage.height * n;
                        if (Laya.Browser.onMiniGame) {
                            e.dzcr__isCreating = !0;
                            var p = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_recreateBannerIDList,
                                f = p[Math.floor(Math.random() * p.length)];
                            null == f && (f = i["default"].dzcr_bannerAdUnitId), this.dzcr__wxBanner = Laya.Browser.window.wx.createBannerAd({
                                adUnitId: f,
                                adIntervals: 30,
                                style: {
                                    left: u,
                                    top: h,
                                    width: d
                                }
                            }), null != e.dzcr__wxBanner ? (e.dzcr__wxBanner.onLoad(function(t) {
                                return console.log("KRQ  WXBanner广告 加载完成 : ", f), console.log(t), e.dzcr__isCreating = !1,
                                    e.dzcr__isDestroyed || null == e.dzcr__wxBanner || e.dzcr__isHide ? void e.dzcr_clearWXBaner() : void e.dzcr__wxBanner.show();
                            }), e.dzcr__wxBanner.onError(function(t) {
                                console.log("KRQ WXBanner广告 加载失败 : ", f), console.log(t), e.dzcr__isCreating = !1,
                                    e.dzcr_clearWXBaner(), e.dzcr__isDestroyed || null == e.dzcr__wxBanner || e.dzcr__isHide || e.dzcr_refreshBanner();
                            }), e.dzcr__wxBanner.onResize(function(e) {})) : e.dzcr_refreshBanner();
                        } else if (Laya.Browser.onQQMiniGame) {
                            e.dzcr__isCreating = !0;
                            var p = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_recreateBannerIDList,
                                z = p[Math.floor(Math.random() * p.length)];
                            null == z && (z = c["default"].dzcr_bannerAdUnitId), e.dzcr__wxBanner = Laya.Browser.window.qq.createBannerAd({
                                adUnitId: z,
                                adIntervals: 30,
                                style: {
                                    left: u,
                                    top: h,
                                    width: d
                                }
                            }), null != e.dzcr__wxBanner ? (e.dzcr__onLoad = function(t) {
                                    return console.log("KRQ QQBanner广告 加载完成 : ", z), console.log(t), e.dzcr__isCreating = !1,
                                        e.dzcr__isDestroyed || null == e.dzcr__wxBanner || e.dzcr__isHide ? void e.dzcr_clearWXBaner() : void e.dzcr__wxBanner.show();
                                }, e.dzcr__wxBanner.onLoad(e.dzcr__onLoad), e.dzcr__onError = function(t) {
                                    console.log("KRQ QQBanner广告 加载失败 : ", z), console.log(t), e.dzcr__isCreating = !1,
                                        e.dzcr_clearWXBaner(), e.dzcr__isDestroyed || null == e.dzcr__wxBanner || e.dzcr__isHide || e.dzcr_refreshBanner();
                                }, e.dzcr__wxBanner.onError(e.dzcr__onError), e.dzcr__onResize = function(e) {},
                                e.dzcr__wxBanner.onResize(e.dzcr__onResize)) : e.dzcr_refreshBanner();
                        }
                    }
                }, t.prototype.dzcr_clearWXBaner = function() {
                    this.dzcr__wxBanner && (this.dzcr__wxBanner.hide(), this.dzcr__wxBanner.offLoad(this.dzcr__onLoad),
                        this.dzcr__wxBanner.offError(this.dzcr__onError), this.dzcr__wxBanner.offResize(this.dzcr__onResize),
                        this.dzcr__wxBanner.destroy()), this.dzcr__wxBanner = null;
                }, t.prototype.onViewShow = function() {
                    var e = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_banner;
                    if (1 == e) {
                        if (null == this.dzcr__wxBanner && (this.dzcr_refreshWXBanner(), Laya.Browser.onQQMiniGame && d["default"].dzcr_GetIpBlocked())) {
                            for (var t = c["default"].dzcr_getLaunchOptionsSync().scene, r = !0, n = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, i = 0; i < n.length; ++i) {
                                var a = n[i];
                                t == a && (r = !1);
                            }
                            if (r) {
                                var s = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                                Laya.timer.loop(1e3 * s, this, this.dzcr_refreshWXBanner);
                            }
                        }
                    } else if (this.dzcr_refreshBanner(), Laya.Browser.onQQMiniGame && d["default"].dzcr_GetIpBlocked()) {
                        for (var t = c["default"].dzcr_getLaunchOptionsSync().scene, r = !0, n = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, i = 0; i < n.length; ++i) {
                            var a = n[i];
                            t == a && (r = !1);
                        }
                        if (r) {
                            var s = o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                            Laya.timer.loop(1e3 * s, this, this.dzcr_refreshWXBanner);
                        }
                    }
                    this.dzcr__isHide = !1;
                }, t.prototype.onViewHide = function() {
                    this.dzcr_clearWXBaner(), Laya.timer.clearAll(this), this.dzcr__isHide = !0;
                }, t.prototype.onDestroy = function() {
                    this.dzcr_clearWXBaner(), Laya.timer.clearAll(this), this.dzcr__isDestroyed = !0;
                }, t.prototype.dzcr_show = function() {
                    e.prototype.dzcr_show.call(this), this.onViewShow();
                }, t.prototype.dzcr_hide = function() {
                    e.prototype.dzcr_hide.call(this), this.onViewHide();
                }, t;
            }(n["default"]);
        r["default"] = s;
    }, {
        "../../Config/AppSwitchConfig": 5,
        "../../Mgr/WudianMgr": 37,
        "../../QQMiniGameAPI": 43,
        "../../ShareAd/ShareAd": 50,
        "../../WXAPI": 72,
        "./KRQ_ComBase": 11
    }],
    11: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../WXAPI"),
            i = e("../../ShareAd/ShareAd"),
            o = e("../../ALD"),
            a = e("../../Event/EventMgr"),
            c = e("../../Event/EventDef"),
            d = e("../../OPPOAPI"),
            s = e("../../QQMiniGameAPI"),
            l = e("../../AppConfig"),
            _ = e("../../TTAPI"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_AdPosID = -10086, t.dzcr__datas = [], t.dzcr__data = null, t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_Sprite", {
                    get: function() {
                        return this.owner;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dzcr_Data", {
                    get: function() {
                        return this.dzcr__data;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dzcr_refresh = function(e) {
                    var t = this;
                    i["default"].dzcr_getADVs(this.dzcr_AdPosID, function(r) {
                        null != r && (t.dzcr__datas = r, t.dzcr__data = t.dzcr__datas[Math.floor(Math.random() * r.length)],
                            null != e && e());
                    }, !1);
                }, t.prototype.dzcr_navigateToMiniProgram = function(e) {
                    var t = null == e ? this.dzcr__data : e;
                    t && (console.log("跳转游戏： " + t.title), Laya.Browser.onMiniGame ? n["default"].dzcr_navigateToMiniProgram(t.appid, t.url, function(e) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(t.appid), o["default"].dzcr_aldSendReportAdClickSuccess(t);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail),
                            "navigateToMiniProgram:fail cancel" == e.errMsg && (console.log("用户取消跳转"), o["default"].dzcr_aldSendReportAdClickFail(t));
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQGMiniGame ? d["default"].dzcr_navigateToMiniProgram(t.appid, t.title, t.url, function(e) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(t.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQQMiniGame ? s["default"].dzcr_navigateToMiniProgram(t.appid, t.url, function(e) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(t.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }) : l["default"].onTTMiniGame && _["default"].dzcr_showMoreGamesModal(function() {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(t.appid);
                    }, function() {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }));
                }, t.prototype.dzcr_show = function() {
                    this.dzcr_Sprite.visible = !0;
                }, t.prototype.dzcr_hide = function() {
                    this.dzcr_Sprite.visible = !1;
                }, t.prototype.dzcr_autoScrollText = function(e) {
                    if (e.overflow == Laya.Text.SCROLL) {
                        var t = !0,
                            r = 0;
                        Laya.timer.frameLoop(1, e, function() {
                            var n = Laya.timer.delta / 1e3 * 10;
                            r += n, r >= e.textWidth / 2 && (t = !t, r = 0), t ? e.scrollX += n : e.scrollX -= n;
                        });
                    }
                }, t;
            }(Laya.Script);
        r["default"] = u;
    }, {
        "../../ALD": 1,
        "../../AppConfig": 2,
        "../../Event/EventDef": 7,
        "../../Event/EventMgr": 8,
        "../../OPPOAPI": 42,
        "../../QQMiniGameAPI": 43,
        "../../ShareAd/ShareAd": 50,
        "../../TTAPI": 54,
        "../../WXAPI": 72
    }],
    12: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_Banner"),
            i = e("../../WXAPI"),
            o = e("../../QQMiniGameAPI"),
            a = e("../../Config/AppSwitchConfig"),
            c = e("../../Mgr/WudianMgr"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.dzcr_refresh = function(t) {
                    var r = this,
                        n = null;
                    Laya.Browser.onMiniGame ? n = i["default"].dzcr_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (n = o["default"].dzcr_getLaunchOptionsSync().scene);
                    for (var d = !0, s = a["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, l = 0; l < s.length; ++l) {
                        var _ = s[l];
                        n == _ && (d = !1);
                    }
                    var u = c["default"].dzcr_GetIpBlocked();
                    if (!u || !d) return this.dzcr_Sprite.visible = !1, void(null != t && t());
                    var h = a["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_banner;
                    1 == h ? this.dzcr_refreshWXBanner() : e.prototype.dzcr_refresh.call(this, function() {
                        r.dzcr_refreshBanner(), null != t && t();
                    });
                }, t;
            }(n["default"]);
        r["default"] = d;
    }, {
        "../../Config/AppSwitchConfig": 5,
        "../../Mgr/WudianMgr": 37,
        "../../QQMiniGameAPI": 43,
        "../../WXAPI": 72,
        "./KRQ_Banner": 10
    }],
    13: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_HistoryBox"),
            i = e("../KRQ_ComBase"),
            o = e("../../../ShareAd/ShareAd"),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_OnBackBtnClick = null, t.dzcr__topZone = null, t.dzcr__backBtn = null,
                        t.dzcr__startList = new Array(), t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr_AdPosID = o["default"].dzcr_HistoryLocationID, this.dzcr__topZone = this.dzcr_Sprite.getChildByName("TopZone"),
                        this.dzcr__backBtn = this.dzcr__topZone.getChildByName("BackBtn"), this.dzcr__list = this.dzcr_Sprite.getChildByName("List"),
                        this.dzcr__list.renderHandler = Laya.Handler.create(this, this.dzcr_onListRender, null, !1),
                        this.dzcr__list.vScrollBarSkin = "";
                }, t.prototype.onStart = function() {
                    this.dzcr_refresh();
                }, t.prototype.onEnable = function() {
                    this.dzcr__backBtn.on(Laya.Event.CLICK, this, this.dzcr_onBackBtn);
                }, t.prototype.onDisable = function() {
                    this.dzcr__backBtn.off(Laya.Event.CLICK, this, this.dzcr_onBackBtn);
                }, t.prototype.dzcr_refresh = function(e) {
                    var t = this;
                    o["default"].dzcr_getADVs(this.dzcr_AdPosID, function(e) {
                        if (null != e) {
                            t.dzcr__datas = e, t.dzcr__startList.splice(0);
                            for (var r = 0; r < t.dzcr__datas.length; ++r) t.dzcr__startList.push(!1);
                            for (var n = Math.floor(.33 * t.dzcr__startList.length); n > 0;) {
                                var i = Math.floor(Math.random() * t.dzcr__startList.length);
                                0 == t.dzcr__startList[i] && (t.dzcr__startList[i] = !0, --n);
                            }
                            t.dzcr__list.array = t.dzcr__datas;
                        }
                    }, !1);
                }, t.prototype.dzcr_onListRender = function(e, t) {
                    var r = this.dzcr__list.array[t],
                        i = this.dzcr__startList[t],
                        o = e.getComponent(n["default"]);
                    o.dzcr_setData(r, i);
                }, t.prototype.dzcr_onBackBtn = function() {
                    this.dzcr_hide(), null != this.dzcr_OnBackBtnClick && this.dzcr_OnBackBtnClick();
                }, t.prototype.dzcr_show = function() {
                    e.prototype.dzcr_show.call(this), this.dzcr_refresh();
                }, t;
            }(i["default"]);
        r["default"] = a;
    }, {
        "../../../ShareAd/ShareAd": 50,
        "../KRQ_ComBase": 11,
        "./KRQ_HistoryBox": 14
    }],
    14: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../Com/KRQ_ComBase"),
            i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__icon = null, t.dzcr__text = null, t.dzcr__mark = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__icon = this.dzcr_Sprite.getChildByName("Icon"), this.dzcr__text = this.dzcr_Sprite.getChildByName("Text"),
                        this.dzcr__text.overflow = Laya.Text.SCROLL, this.dzcr__text.text = "", this.dzcr__mark = this.dzcr_Sprite.getChildByName("Mark"),
                        this.dzcr__mark.visible = !1;
                }, t.prototype.onStart = function() {
                    this.dzcr_autoScrollText(this.dzcr__text);
                }, t.prototype.onEnable = function() {
                    this.dzcr_Sprite.on(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.onDisable = function() {
                    this.dzcr_Sprite.off(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.dzcr_onClickAd = function() {
                    this.dzcr_navigateToMiniProgram();
                }, t.prototype.dzcr_setData = function(e, t) {
                    if (this.dzcr__data = e, null != this.dzcr__data) {
                        var r = this;
                        this.dzcr__icon.loadImage(this.dzcr__data.logo, Laya.Handler.create(this, function() {
                            r.dzcr__icon.destroyed || (r.dzcr__icon.width = 100, r.dzcr__icon.height = 100);
                        }));
                        var n = String(this.dzcr__data.title);
                        this.dzcr__text.text = n, this.dzcr__mark.visible = t;
                    }
                }, t;
            }(n["default"]);
        r["default"] = i;
    }, {
        "../../Com/KRQ_ComBase": 11
    }],
    15: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../KRQ_ComBase"),
            i = e("./KRQ_LoopAdBox"),
            o = e("../../../ShareAd/ShareAd"),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_isEnable = !0, t.dzcr_useMovePause = !0, t.dzcr_useLocalRandom = !0,
                        t.dzcr_useRandom = !0, t.dzcr__scrollForward = !0, t.dzcr__cellSize = new Laya.Point(),
                        t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_Clip", {
                    get: function() {
                        return this.owner;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onAwake = function() {
                    this.dzcr_AdPosID = o["default"].dzcr_LoopAdLocationID, this.dzcr__list = this.owner.getChildByName("List"),
                        this.dzcr__list.renderHandler = Laya.Handler.create(this, this.dzcr_onListRender, null, !1),
                        this.dzcr__list.hScrollBarSkin = "";
                }, t.prototype.onStart = function() {
                    var e = this;
                    this.dzcr__list.width = e.dzcr_Clip.width, this.dzcr__list.height = e.dzcr_Clip.height,
                        e.dzcr_refresh(function() {
                            if (null != e.dzcr__list.cells && e.dzcr__list.cells.length > 0) {
                                var t = e.dzcr__list.cells[0];
                                e.dzcr__cellSize.x = t.width, e.dzcr__cellSize.y = t.height, e.dzcr_useMovePause && setTimeout(function() {
                                    e.dzcr__list.scrollBar && (e.dzcr__list.scrollBar.value = 0, e.dzcr_move());
                                }, 2e3);
                            }
                        });
                }, t.prototype.dzcr_refresh = function(e) {
                    if (!this.dzcr_isEnable) return void(null != e && e());
                    var t = this;
                    o["default"].dzcr_getADVs(this.dzcr_AdPosID, function(r) {
                        null != r && r.length > 0 ? (t.dzcr__datas = r, t.dzcr__list.array = t.dzcr__datas,
                            null == t.dzcr_Sprite || t.dzcr_Sprite.destroyed || (t.dzcr_Sprite.visible = !0),
                            null != e && e()) : null == t.dzcr_Sprite || t.dzcr_Sprite.destroyed || (t.dzcr_Sprite.visible = !1);
                    }, this.dzcr_useRandom, this.dzcr_useLocalRandom);
                }, t.prototype.dzcr_onListRender = function(e, t) {
                    var r = this.dzcr__list.array[t],
                        n = e.getComponent(i["default"]);
                    n.dzcr_setData(r);
                }, t.prototype.dzcr_move = function() {
                    var e = this.dzcr__cellSize.x + this.dzcr__list.spaceX,
                        t = 0;
                    if (this.dzcr__scrollForward ? t = this.dzcr__list.scrollBar.value % e : (e *= -1,
                            t = (this.dzcr__list.scrollBar.max - this.dzcr__list.scrollBar.value) % e * -1),
                        this.dzcr__list.scrollBar) {
                        this.dzcr__list.scrollBar.stopScroll();
                        var r = e;
                        0 != t && (r = 2 * e - t);
                        var n = this;
                        Laya.Tween.to(n.dzcr__list.scrollBar, {
                            value: n.dzcr__list.scrollBar.value + r
                        }, 1e3, null, Laya.Handler.create(n, function() {})), Laya.timer.once(1010, n, function() {
                            n.dzcr__list.scrollBar.value >= n.dzcr__list.scrollBar.max ? n.dzcr__scrollForward = !1 : n.dzcr__list.scrollBar.value <= 0 && (n.dzcr__scrollForward = !0),
                                Laya.timer.once(3e3, n, function() {
                                    n.dzcr__list.scrollBar && n.dzcr_move();
                                });
                        });
                    }
                }, t.prototype.onUpdate = function() {
                    this.dzcr_useMovePause || (this.dzcr__scrollForward ? (this.dzcr__list.scrollBar.value += 100 * Laya.timer.delta / 1e3,
                        this.dzcr__list.scrollBar.value >= this.dzcr__list.scrollBar.max && (this.dzcr__scrollForward = !1)) : (this.dzcr__list.scrollBar.value -= 100 * Laya.timer.delta / 1e3,
                        this.dzcr__list.scrollBar.value <= 0 && (this.dzcr__scrollForward = !0)));
                }, t;
            }(n["default"]);
        r["default"] = a;
    }, {
        "../../../ShareAd/ShareAd": 50,
        "../KRQ_ComBase": 11,
        "./KRQ_LoopAdBox": 16
    }],
    16: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../KRQ_ComBase"),
            i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__originW = 170, t.dzcr__originH = 170, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__displaySp = this.owner.getChildByName("Display"), this.dzcr__originW = this.dzcr__displaySp.width,
                        this.dzcr__originH = this.dzcr__displaySp.height, this.dzcr__disText = this.owner.getChildByName("TitelText"),
                        this.dzcr__disText.overflow = Laya.Text.SCROLL, this.dzcr__disText.text = "";
                }, t.prototype.onStart = function() {
                    this.dzcr_autoScrollText(this.dzcr__disText);
                }, t.prototype.onEnable = function() {
                    this.dzcr_Sprite.on(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.onDisable = function() {
                    this.dzcr_Sprite.off(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.dzcr_onClickAd = function() {
                    this.dzcr_navigateToMiniProgram();
                }, t.prototype.dzcr_setData = function(e) {
                    if (this.dzcr__data = e, null != this.dzcr__data) {
                        var t = this;
                        this.dzcr__displaySp.loadImage(this.dzcr__data.logo, Laya.Handler.create(this, function() {
                            t.dzcr__displaySp.destroyed || (t.dzcr__displaySp.width = t.dzcr__originW, t.dzcr__displaySp.height = t.dzcr__originH);
                        }));
                        var r = String(this.dzcr__data.title);
                        this.dzcr__disText.text = r;
                    }
                }, t;
            }(n["default"]);
        r["default"] = i;
    }, {
        "../KRQ_ComBase": 11
    }],
    17: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_HLoopAd"),
            i = e("../../../ShareAd/ShareAd"),
            o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr_AdPosID = i["default"].dzcr_LoopAdLocationID, this.dzcr__list = this.owner.getChildByName("List"),
                        this.dzcr__list.renderHandler = Laya.Handler.create(this, this.dzcr_onListRender, null, !1),
                        this.dzcr__list.vScrollBarSkin = "";
                }, t.prototype.dzcr_move = function() {
                    var e = this.dzcr__cellSize.y + this.dzcr__list.spaceY,
                        t = 0;
                    if (this.dzcr__scrollForward ? t = this.dzcr__list.scrollBar.value % e : (e *= -1,
                            t = (this.dzcr__list.scrollBar.max - this.dzcr__list.scrollBar.value) % e * -1),
                        this.dzcr__list.scrollBar) {
                        this.dzcr__list.scrollBar.stopScroll();
                        var r = e;
                        0 != t && (r = 2 * e - t);
                        var n = this;
                        Laya.Tween.to(n.dzcr__list.scrollBar, {
                            value: n.dzcr__list.scrollBar.value + r
                        }, 1e3, null, Laya.Handler.create(n, function() {})), Laya.timer.once(1010, n, function() {
                            n.dzcr__list.scrollBar.value >= n.dzcr__list.scrollBar.max ? n.dzcr__scrollForward = !1 : n.dzcr__list.scrollBar.value <= 0 && (n.dzcr__scrollForward = !0),
                                Laya.timer.once(3e3, n, function() {
                                    n.dzcr__list.scrollBar && n.dzcr_move();
                                });
                        });
                    }
                }, t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../../../ShareAd/ShareAd": 50,
        "./KRQ_HLoopAd": 15
    }],
    18: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_SingleAd"),
            i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.dzcr_playAni = function(e) {
                    var t = this;
                    t.dzcr_Sprite.rotation = 0, Laya.Tween.to(t.dzcr_Sprite, {
                        rotation: 20
                    }, 250, Laya.Ease.linearNone, Laya.Handler.create(t, function() {
                        Laya.Tween.to(t.dzcr_Sprite, {
                            rotation: 0
                        }, 250, Laya.Ease.linearNone, Laya.Handler.create(t, function() {
                            t.dzcr_Sprite.rotation = 0, null != e && e();
                        }));
                    }));
                }, t;
            }(n["default"]);
        r["default"] = i;
    }, {
        "./KRQ_SingleAd": 20
    }],
    19: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_SingleAd"),
            i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._originX = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this._originX = this.dzcr_Sprite.x, this.dzcr_Sprite.x -= Laya.stage.width;
                }, t.prototype.dzcr_playAni = function(e) {
                    var t = this,
                        r = this._originX,
                        n = r - Laya.stage.width;
                    this.dzcr_Sprite.x = n, Laya.Tween.to(this.dzcr_Sprite, {
                        rotation: 360
                    }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        t.dzcr_Sprite.rotation = 0;
                    })), Laya.Tween.to(this.dzcr_Sprite, {
                        x: r
                    }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        t.dzcr_Sprite.x = r, null != e && e();
                    }));
                }, t;
            }(n["default"]);
        r["default"] = i;
    }, {
        "./KRQ_SingleAd": 20
    }],
    20: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ComBase"),
            i = e("../../ShareAd/ShareAd"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__originW = 300, t.dzcr__originH = 300, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr_AdPosID = i["default"].dzcr_LoopAdLocationID, this.dzcr__display = this.dzcr_Sprite.getChildByName("Display"),
                        this.dzcr__text = this.dzcr_Sprite.getChildByName("Text"), this.dzcr__text.overflow = Laya.Text.SCROLL,
                        this.dzcr__text.text = "";
                }, t.prototype.onEnable = function() {
                    this.dzcr_Sprite.on(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.onDisable = function() {
                    this.dzcr_Sprite.off(Laya.Event.CLICK, this, this.dzcr_onClickAd);
                }, t.prototype.onStart = function() {
                    this.dzcr_autoScrollText(this.dzcr__text), this.dzcr_refresh();
                }, t.prototype.dzcr_refresh = function(e) {
                    var r = this;
                    i["default"].dzcr_getADVs(this.dzcr_AdPosID, function(n) {
                        if (null != n) {
                            if (r.dzcr__datas = n, r.dzcr_Sprite && !r.dzcr_Sprite.destroyed) {
                                for (var i = 0; i < r.dzcr__datas.length; ++i) {
                                    for (var o = !1, a = r.dzcr__datas[i], c = 0; c < t.dzcr__repeatCheckList.length; ++c) {
                                        var d = t.dzcr__repeatCheckList[c];
                                        if (d == a.appid) {
                                            o = !0;
                                            break;
                                        }
                                    }
                                    if (!o) {
                                        r.dzcr_clearRepeat(), r.dzcr__data = a;
                                        break;
                                    }
                                }
                                if (null == r.dzcr__data && (r.dzcr__data = r.dzcr__datas[Math.floor(Math.random() * n.length)]),
                                    null != r.dzcr__data) {
                                    r.dzcr__display.loadImage(r.dzcr__data.logo, Laya.Handler.create(r, function() {
                                        null == r.dzcr_Sprite || r.dzcr_Sprite.destroy || (r.dzcr_Sprite.visible = !0, e && e());
                                    }));
                                    var s = r.dzcr__data.title;
                                    r.dzcr__text.text = s;
                                    for (var l = !1, c = 0; c < t.dzcr__repeatCheckList.length; ++c) {
                                        var d = t.dzcr__repeatCheckList[c];
                                        if (d == r.dzcr__data.appid) {
                                            l = !0;
                                            break;
                                        }
                                    }
                                    l || t.dzcr__repeatCheckList.push(r.dzcr__data.appid);
                                } else null == r.dzcr_Sprite || r.dzcr_Sprite.destroy || (r.dzcr_Sprite.visible = !1),
                                    e && e();
                            }
                        } else r.dzcr_Sprite.visible = !1, e && e();
                    });
                }, t.prototype.dzcr_hide = function() {
                    this.dzcr_Sprite.visible = !1, this.dzcr_clearRepeat();
                }, t.prototype.dzcr_clearRepeat = function() {
                    if (null != this.dzcr__data)
                        for (var e = 0; e < t.dzcr__repeatCheckList.length; ++e) {
                            var r = t.dzcr__repeatCheckList[e];
                            if (r == this.dzcr__data.appid) {
                                t.dzcr__repeatCheckList.splice(e, 1);
                                break;
                            }
                        }
                }, t.prototype.dzcr_onClickAd = function() {
                    this.dzcr_navigateToMiniProgram(), this.dzcr_refresh();
                }, t.prototype.onDestroy = function() {
                    this.dzcr_clearRepeat();
                }, t.dzcr__repeatCheckList = new Array(), t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../../ShareAd/ShareAd": 50,
        "./KRQ_ComBase": 11
    }],
    21: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ViewComBase"),
            i = e("../../Utilit"),
            o = e("../Com/KRQ_History/KRQ_History"),
            a = e("../Com/KRQ_Banner"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_onContinueBtnClick = null, t.dzcr__topZone = null, t.dzcr__backBtn = null,
                        t.dzcr__centerZone = null, t.dzcr__continueBtn = null, t.dzcr__krqHistory = null,
                        t.dzcr__krqBanner = null, t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_BackBtn", {
                    get: function() {
                        return null == this.dzcr__backBtn && (this.dzcr__backBtn = this.dzcr_Sprite.getChildByName("TopZone").getChildByName("BackBtn")),
                            this.dzcr__backBtn;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dzcr_ContinueBtn", {
                    get: function() {
                        return null == this.dzcr__continueBtn && (this.dzcr__continueBtn = this.dzcr_Sprite.getChildByName("CenterZone").getChildByName("ContinueBtn")),
                            this.dzcr__continueBtn;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onAwake = function() {
                    this.dzcr__topZone = this.dzcr_Sprite.getChildByName("TopZone"), i["default"].dzcr_isIphoneX() && (this.dzcr__topZone.top = this.dzcr__topZone.top + 75),
                        this.dzcr__backBtn = this.dzcr__topZone.getChildByName("BackBtn"), this.dzcr__centerZone = this.dzcr_Sprite.getChildByName("CenterZone"),
                        i["default"].dzcr_isIphoneX() && (this.dzcr__centerZone.top = this.dzcr__centerZone.top + 75),
                        this.dzcr__continueBtn = this.dzcr__centerZone.getChildByName("ContinueBtn"), this.dzcr__krqHistory = this.owner.getChildByName("KRQ_History").getComponent(o["default"]),
                        this.dzcr__krqBanner = this.owner.getChildByName("KRQ_Banner").getComponent(a["default"]);
                    var e = this;
                    this.dzcr__krqHistory.dzcr_OnBackBtnClick = function() {
                        e.dzcr__krqBanner.dzcr_show();
                    };
                }, t.prototype.onEnable = function() {
                    this.dzcr__backBtn.on(Laya.Event.CLICK, this, this.dzcr_onBackBtn), this.dzcr__continueBtn.on(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.onDisable = function() {
                    this.dzcr__backBtn.off(Laya.Event.CLICK, this, this.dzcr_onBackBtn), this.dzcr__continueBtn.off(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.dzcr_onBackBtn = function() {
                    this.dzcr__krqHistory.dzcr_show(), this.dzcr__krqBanner.dzcr_hide();
                }, t.prototype.dzcr_onContinueBtn = function() {
                    null != this.dzcr_onContinueBtnClick && this.dzcr_onContinueBtnClick();
                }, t;
            }(n["default"]);
        r["default"] = c;
    }, {
        "../../Utilit": 56,
        "../Com/KRQ_Banner": 10,
        "../Com/KRQ_History/KRQ_History": 13,
        "./KRQ_ViewComBase": 26
    }],
    22: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ViewComBase"),
            i = e("../Com/KRQ_RockSingleAd"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__centerZone = null, t.dzcr__rockSingleAds = new Array(), t.dzcr__aniSpaceing = 3e3,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__centerZone = this.dzcr_Sprite.getChildByName("CenterZone");
                    for (var e = 0; e < this.dzcr__centerZone.numChildren; ++e) {
                        var t = this.dzcr__centerZone.getChildAt(e);
                        if (t.visible) {
                            var r = t.getComponent(i["default"]);
                            this.dzcr__rockSingleAds.push(r);
                        }
                    }
                }, t.prototype.onStart = function() {
                    var e = this;
                    e.dzcr_playAni(), Laya.timer.loop(this.dzcr__rockSingleAds.length * (this.dzcr__aniSpaceing + 500), this, function() {
                        e.dzcr_playAni(function() {
                            e.dzcr_refreshAd();
                        });
                    });
                }, t.prototype.dzcr_refreshAd = function() {
                    for (var e = 0; e < this.dzcr__rockSingleAds.length; ++e) {
                        var t = this.dzcr__rockSingleAds[e];
                        null == t.dzcr_Data && (t.dzcr_Sprite.visible = !1), t.dzcr_refresh();
                    }
                }, t.prototype.dzcr_playAni = function(e) {
                    for (var t = this.dzcr__rockSingleAds.length, r = function(r) {
                            var i = r,
                                o = n.dzcr__rockSingleAds[i];
                            Laya.timer.once(n.dzcr__aniSpaceing * r, o, function() {
                                i == t - 1 ? o.dzcr_playAni(e) : o.dzcr_playAni();
                            });
                        }, n = this, i = 0; i < this.dzcr__rockSingleAds.length; ++i) r(i);
                }, t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../Com/KRQ_RockSingleAd": 18,
        "./KRQ_ViewComBase": 26
    }],
    23: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ViewComBase"),
            i = e("../Com/KRQ_RollSingleAd"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__centerZone = null, t.dzcr__rollSingleAds = new Array(), t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__centerZone = this.dzcr_Sprite.getChildByName("CenterZone");
                    for (var e = 0; e < this.dzcr__centerZone.numChildren; ++e) {
                        var t = this.dzcr__centerZone.getChildAt(e).getComponent(i["default"]);
                        this.dzcr__rollSingleAds.push(t);
                    }
                }, t.prototype.onStart = function() {
                    for (var e = function(e) {
                            var r = t.dzcr__rollSingleAds[e];
                            Laya.timer.once(150 * (t.dzcr__rollSingleAds.length - e), t, function() {
                                r.dzcr_playAni();
                            });
                        }, t = this, r = 0; r < this.dzcr__rollSingleAds.length; ++r) e(r);
                }, t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../Com/KRQ_RollSingleAd": 19,
        "./KRQ_ViewComBase": 26
    }],
    24: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i = e("../Com/KRQ_Banner"),
            o = e("./KRQ_ViewComBase"),
            a = e("../Com/KRQ_History/KRQ_History"),
            c = e("../Com/KRQ_LoopAd/KRQ_HLoopAd"),
            d = e("../../Utilit");
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.NoLoopAd = 1] = "NoLoopAd", e[e.NoBannerAd = 2] = "NoBannerAd";
        }(n = r.dzcr_KRQ_MainState || (r.dzcr_KRQ_MainState = {}));
        var s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dzcr__topZone = null, t.dzcr__historyBtn = null, t.dzcr__krqLoopAd = null,
                    t.dzcr__bottomZone = null, t.dzcr__krqBanner = null, t.dzcr__krqHistory = null,
                    t;
            }
            return __extends(t, e), t.prototype.onAwake = function() {}, t.prototype.dzcr_switchState = function(e) {}, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {}, t.prototype.dzcr_onHistoryBtn = function() {}, t;
        }(o["default"]);
        r["default"] = s;
    }, {
        "../../Utilit": 56,
        "../Com/KRQ_Banner": 10,
        "../Com/KRQ_History/KRQ_History": 13,
        "../Com/KRQ_LoopAd/KRQ_HLoopAd": 15,
        "./KRQ_ViewComBase": 26
    }],
    25: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./KRQ_ViewComBase"),
            i = e("../Com/KRQ_LoopAd/KRQ_VLoopAd"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__krqVLoopAd = null, t.dzcr__pullBtn = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__krqVLoopAd = this.dzcr_Sprite.getChildByName("KRQ_VLoopAd").getComponent(i["default"]),
                        this.dzcr__pullBtn = this.dzcr__krqVLoopAd.dzcr_Sprite.getChildByName("PullBtn"),
                        this.dzcr__krqVLoopAd.dzcr_Sprite.x = -this.dzcr__krqVLoopAd.dzcr_Sprite.width;
                }, t.prototype.onEnable = function() {
                    this.dzcr__pullBtn.on(Laya.Event.CLICK, this, this.dzcr_onPullBtn);
                }, t.prototype.onDisable = function() {
                    this.dzcr__pullBtn.off(Laya.Event.CLICK, this, this.dzcr_onPullBtn);
                }, t.prototype.dzcr_onPullBtn = function() {
                    this.dzcr__krqVLoopAd.dzcr_Sprite.x < 0 ? this.dzcr_pull() : this.dzcr_push();
                }, t.prototype.dzcr_pull = function() {
                    Laya.Tween.to(this.dzcr__krqVLoopAd.dzcr_Sprite, {
                        x: 0
                    }, 200, Laya.Ease.linearNone, null, 0, !0);
                }, t.prototype.dzcr_push = function() {
                    Laya.Tween.to(this.dzcr__krqVLoopAd.dzcr_Sprite, {
                        x: -this.dzcr__krqVLoopAd.dzcr_Sprite.width
                    }, 200, Laya.Ease.linearNone, null, 0, !0);
                }, t.prototype.dzcr_onShareAdFail = function() {
                    this.dzcr_pull();
                }, t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../Com/KRQ_LoopAd/KRQ_VLoopAd": 17,
        "./KRQ_ViewComBase": 26
    }],
    26: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dzcr_onShow = null, t.dzcr_onHide = null, t;
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_Sprite", {
                get: function() {
                    return this.owner;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dzcr_show = function() {
                this.dzcr_Sprite.visible = !0, null != this.dzcr_onShow && this.dzcr_onShow();
            }, t.prototype.dzcr_hide = function() {
                this.dzcr_Sprite.visible = !1, null != this.dzcr_onHide && this.dzcr_onHide();
            }, t;
        }(Laya.Script);
        r["default"] = n;
    }, {}],
    27: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Net/HttpUnit"),
            i = e("../AppConfig"),
            o = e("../WXAPI"),
            a = e("../User/User"),
            c = e("../OPPOAPI"),
            d = function() {
                function e() {}
                return e.dzcr_request = function(t) {
                        // t.dzcr_url.indexOf("https://") > -1 || t.dzcr_url.indexOf("http://") > -1 ? t.dzcr_url = t.dzcr_url : t.dzcr_url = e.dzcr_mainUrl + t.dzcr_url;
                        // var r = function(r) {
                        //     console.log(r, "MaiLiang http Success"), r = JSON.parse(r), "200" == r.Status ? (null != r.Result.OpenId && "" != r.Result.OpenId ? (e.dzcr_MaiLiangOpenId = r.Result.OpenId, 
                        //     e.dzcr_time = t.dzcr_data.posttime, console.log("获得买量系统OpenId " + e.dzcr_MaiLiangOpenId)) : console.log("上报买量系统停留时间成功"), 
                        //     t.dzcr_onSuccess && t.dzcr_onSuccess(r)) : t.dzcr_onFail && t.dzcr_onFail(r), t.dzcr_onSuccess = null, 
                        //     t = null;
                        // }, n = function(e) {
                        //     console.log(e, "MaiLiang http fail"), t.dzcr_onFail && t.dzcr_onFail(e), t.dzcr_onFail = null, 
                        //     t = null;
                        // }, i = new Laya.HttpRequest();
                        // if (i.once(Laya.Event.COMPLETE, e, r), i.once(Laya.Event.ERROR, e, n), "get" == t.dzcr_meth) {
                        //     for (var o = "", a = 0, c = Object.keys(t.dzcr_data); a < c.length; a++) {
                        //         var d = c[a], s = t.dzcr_data[d];
                        //         o += d + "=" + s + "&";
                        //     }
                        //     t.dzcr_url = t.dzcr_url + "?" + o, i.send(t.dzcr_url, null, t.dzcr_meth);
                        // } else {
                        //     for (var o = "", l = 0, _ = Object.keys(t.dzcr_data); l < _.length; l++) {
                        //         var d = _[l], s = t.dzcr_data[d];
                        //         o += d + "=" + s + "&";
                        //     }
                        //     i.send(t.dzcr_url, o, t.dzcr_meth, null, [ "Content-Type", "application/x-www-form-urlencoded" ]);
                        // }
                    }, e.dzcr_GetMaiLiangOpenId = function(t, r) {
                        if (Laya.Browser.onMiniGame) {
                            var d = o["default"].dzcr_getLaunchOptionsSync();
                            if (null != d) {
                                var s = d.query.key;
                                if (null != s && "" != s && "" != a["default"].dzcr_openId) {
                                    e.dzcr_key = s;
                                    var l = new n.dzcr_requestData();
                                    l.dzcr_url = e.dzcr_uclick, l.dzcr_onSuccess = t, l.dzcr_onFail = r, l.dzcr_data.appid = i["default"].dzcr_AppID,
                                        l.dzcr_data.openid = "";
                                    var _ = new Date().getTime() / 1e3;
                                    l.dzcr_data.posttime = _, l.dzcr_data.auth = 0, l.dzcr_data.key = s, l.dzcr_data.wxopenid = a["default"].dzcr_openId,
                                        l.dzcr_meth = "POST", console.log("发送买量数据接口"), e.dzcr_request(l);
                                }
                            } else console.log("上报买量数据失败"), r(null);
                        } else if (Laya.Browser.onQGMiniGame) {
                            var d = c["default"].dzcr_getLaunchOptionsSync();
                            n["default"].dzcr_reportImport(d.referrerInfo["package"], d.referrerInfo.extraData.appid, function(e) {
                                1 == e.code ? console.log("OPPO 上报买量数据成功") : console.log("OPPO 上报买量数据失败", e.msg);
                            }, function(e) {
                                console.log("OPPO 上报买量数据失败");
                                for (var t in e) console.log(t, e[t]);
                            });
                        } else console.log("不在微信模式下调用，默认上报买量数据失败"), r(null);
                    }, e.dzcr_ReportStayTime = function(t, r) {
                        if (Laya.Browser.onMiniGame) {
                            if ("" != e.dzcr_MaiLiangOpenId) {
                                var o = new n.dzcr_requestData();
                                o.dzcr_url = e.dzcr_stay, o.dzcr_onSuccess = t, o.dzcr_onFail = r, o.dzcr_data.appid = i["default"].dzcr_AppID,
                                    o.dzcr_data.openid = e.dzcr_MaiLiangOpenId;
                                var a = new Date().getTime() / 1e3;
                                o.dzcr_data.posttime = a;
                                var c = 0 != e.dzcr_time ? a - e.dzcr_time : 0;
                                o.dzcr_data.time = c, o.dzcr_meth = "POST", console.log("发送停留时间至买量接口"), e.dzcr_request(o);
                            }
                        } else console.log("不在微信模式下调用，默认发送停留时间至买量接口失败"), r(null);
                    }, e.dzcr_mainUrl = "https://swtj.mrkzx.cn", e.dzcr_uclick = "/v1.1/api/Activity/uclick.html",
                    e.dzcr_stay = "/v1.1/api/Activity/stay.html", e.dzcr_key = "", e.dzcr_MaiLiangOpenId = "",
                    e.dzcr_time = 0, e;
            }();
        r["default"] = d;
    }, {
        "../AppConfig": 2,
        "../Net/HttpUnit": 39,
        "../OPPOAPI": 42,
        "../User/User": 55,
        "../WXAPI": 72
    }],
    28: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./GameConfig"),
            i = e("./User/User"),
            o = e("./ui/layaMaxUI"),
            a = e("./View/LoadingView/LoadingView"),
            c = e("./Net/HttpUnit"),
            d = e("./WXAPI"),
            s = e("./AppConfig"),
            l = e("./Event/EventMgr"),
            _ = e("./Event/EventDef"),
            u = e("./OPPOAPI"),
            h = e("./QQMiniGameAPI"),
            p = e("./TTAPI"),
            f = e("./ALD"),
            z = function() {
                function e() {
                    this._loadingUI = null, this._loadingView = null, this._preLoadRes = new Array(),
                        window.Laya3D ? Laya3D.init(n["default"].width, n["default"].height) : Laya.init(n["default"].width, n["default"].height, Laya.WebGL),
                        Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                        Laya.stage.scaleMode = "exactfit";
                    Laya.stage.alignH = "center";
                    //  n["default"].scaleMode, 
                    // Laya.stage.screenMode = n["default"].screenMode, 
                    Laya.URL.exportSceneToJson = n["default"].exportSceneToJson, (n["default"].debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                        n["default"].physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                        n["default"].stat && Laya.Stat.show(), Laya.alertGlobalError = !0, 1 == s["default"].onTTMiniGame && (Laya.Browser.onMiniGame = !1),
                        Laya.Browser.onMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onQQMiniGame || s["default"].onTTMiniGame || (s["default"].dzcr_ResServer = s["default"].dzcr_LocalTestReServer),
                        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                }
                return e.prototype.onVersionLoaded = function() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }, e.prototype.onConfigLoaded = function() {
                    Laya.loader.maxLoader = 50,
                        this.initLoadingView();
                    platform.getInstance().startup("Rolly-Legs", "", () => {
                        console.log = function() {};
                        let yad = new Laya.Image();
                        yad.scale(0.8, 0.8);
                        yad.skin = "common/yad.png";
                        yad.centerX = 0;
                        yad.bottom = 10;
                        yad.zOrder = 1e3;
                        yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                            platform.getInstance().navigate("GAME", "LOGO")
                        })
                        Laya.stage.addChild(yad);
                        window.yad = yad;

                        this.loadRes();
                        l["default"].dzcr_instance.dzcr_regOnceEvent(_.dzcr_EventDef.dzcr_App_CloseFirstLoadingView, this, this.closeloadingUI);
                    });

                }, e.prototype.initLoadingView = function() {
                    this._loadingUI = new o.ui.View.LoadingUI(), Laya.stage.addChild(this._loadingUI),
                        this._loadingUI.width = Laya.stage.width, this._loadingUI.height = Laya.stage.height,
                        this._loadingView = this._loadingUI.getComponent(a["default"]), this._loadingView.dzcr_setProcess(0);
                }, e.prototype.postResToOpenDataContext = function(e) {
                    e && e();
                }, e.prototype.preLoad = function() {}, e.prototype.loadRes = function() {
                    var e = this;
                    this.preLoad();
                    var t = this._preLoadRes,
                        r = this;
                    if (Laya.Browser.onMiniGame) {} else if (Laya.Browser.onQGMiniGame) {} else if (Laya.Browser.onQQMiniGame) {} else t.length > 0 ? Laya.loader.load(t, Laya.Handler.create(this, function() {
                        r.onLoadResComplate();
                    }), Laya.Handler.create(this, function(e) {
                        r._loadingView.dzcr_setProcess(e);
                    })) : r.onLoadResComplate();
                }, e.prototype.onLoadResComplate = function() {
                    var e = this;
                    this._loadingView.dzcr_setProcess(1),
                        (i["default"].dzcr_testInitUser(), n["default"].startScene && Laya.Scene.open(n["default"].startScene, !1, Laya.Handler.create(this, function() {})));
                }, e.prototype.closeloadingUI = function() {
                    this._loadingUI && !this._loadingUI.destroyed && this._loadingUI.destroy();
                }, e;
            }();
        new z();
    }, {
        "./ALD": 1,
        "./AppConfig": 2,
        "./Event/EventDef": 7,
        "./Event/EventMgr": 8,
        "./GameConfig": 9,
        "./Net/HttpUnit": 39,
        "./OPPOAPI": 42,
        "./QQMiniGameAPI": 43,
        "./TTAPI": 54,
        "./User/User": 55,
        "./View/LoadingView/LoadingView": 61,
        "./WXAPI": 72,
        "./ui/layaMaxUI": 73
    }],
    29: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Event/EventMgr"),
            i = e("../Event/EventDef"),
            o = e("./GameMgr"),
            a = function(e) {
                function t() {
                    var r = e.call(this) || this;
                    return r.m_isEnd = !1, r.isZoomIn = !1, r.isZoomOut = !1, t.instance = r, r;
                }
                return __extends(t, e), t.getInstance = function() {
                        return t.instance;
                    }, t.prototype.onAwake = function() {
                        this.m_owner = this.owner, this.m_camera = this.owner.getChildByName("Camera"),
                            this.positionX = this.m_owner.transform.localPositionX, console.log("this.positionX -- " + this.positionX),
                            this.m_startRot = this.m_owner.transform.rotationEuler.clone(), this.speed = this.owner.parent.getChildByName("speed"),
                            this.speedFx = this.speed.getChildByName("speed1"), this.speedFxMax = this.speed.getChildByName("speed2"),
                            this.speedFx.active = !1, this.speedFxMax.active = !1, this.m_fxDistance = new Laya.Vector3(this.speed.transform.position.x - this.m_owner.transform.position.x, this.speed.transform.position.y - this.m_owner.transform.position.y, this.speed.transform.position.z - this.m_owner.transform.position.z),
                            n["default"].dzcr_instance.dzcr_regEvemt(i.dzcr_EventDef.dzcr_Game_OnLevelStart, this, this.onLevelStart),
                            n["default"].dzcr_instance.dzcr_regEvemt(i.dzcr_EventDef.dzcr_Game_OnLevelComplate, this, this.onLevelEnd);
                    }, t.prototype.setTarget = function(e) {
                        this.m_role = e, this.m_target = e.owner, this.m_targetDistance = new Laya.Vector3(Math.floor(this.m_owner.transform.position.x - this.m_target.transform.position.x), Math.floor(this.m_owner.transform.position.y - this.m_target.transform.position.y), Math.floor(this.m_owner.transform.position.z - this.m_target.transform.position.z));
                    }, t.prototype.setEndFlag = function(e) {
                        this.m_isEnd = e;
                    }, t.prototype.onLateUpdate = function() {},
                    t.prototype.onLevelStart = function(e) {
                        this.m_isEnd = !1, this.m_owner.transform.rotationEuler = this.m_startRot;
                        var t = new Laya.Vector3(0, 0, 0);
                        Laya.Vector3.add(this.m_targetDistance, this.m_target.transform.position, t), this.m_owner.transform.position = t;
                    }, t.prototype.onLevelEnd = function(e) {
                        this.m_isEnd = !0;
                    }, t.prototype.getScreenPos = function(e) {
                        var t = new Laya.Vector3();
                        return this.m_camera.viewport.project(e.transform.position, this.m_camera.projectionViewMatrix, t),
                            new Laya.Vector2(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY);
                    }, t.prototype.onCameraUpdate = function() {
                        var e = this.m_target.transform.position.clone(),
                            t = this.m_owner.transform.position.clone();
                        if (this.m_isEnd) {
                            var r = new Laya.Vector3(this.m_targetDistance.x + 8, this.m_targetDistance.y + 15, this.m_targetDistance.z + 8);
                            Laya.Vector3.add(r, this.m_target.transform.position, e), Laya.Vector3.lerp(t, e, .25, e);
                        } else {
                            Laya.Vector3.add(this.m_targetDistance, this.m_target.transform.position, e);
                            var n = Laya.Vector3.scalarLength(this.m_role.m_rigidbody.linearVelocity);
                            (n > 20 || this.isZoomOut) && (n > o["default"].cfg.CameraZoomSpeed ? this.playZoomOut() : this.playZoomIn());
                        }
                        var i = this.m_owner.transform.position.clone();
                        Laya.Vector3.add(this.m_fxDistance, i, i), this.speed.transform.position = i, this.m_owner.transform.position = new Laya.Vector3(t.x, e.y, e.z);
                    }, t.prototype.playZoomIn = function() {
                        this.isZoomIn || (Laya.Tween.clearAll(this.m_owner.transform), Laya.Tween.to(this.m_owner.transform, {
                                localPositionX: this.positionX
                            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, function() {})), this.isZoomIn = !0,
                            this.isZoomOut = !1);
                    }, t.prototype.playZoomOut = function() {
                        this.isZoomOut || (Laya.Tween.clearAll(this.m_owner.transform), Laya.Tween.to(this.m_owner.transform, {
                                localPositionX: this.positionX + o["default"].cfg.CameraZoomDistanceX
                            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, function() {})), this.isZoomIn = !1,
                            this.isZoomOut = !0);
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.instance = null, t;
            }(Laya.Script3D);
        r["default"] = a;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "./GameMgr": 30
    }],
    30: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Config/RollyLegCfg"),
            i = e("../User/User"),
            o = e("../Net/HttpUnit"),
            a = e("../MaiLiangAPI/MaiLiang"),
            c = e("../Event/EventMgr"),
            d = e("../Event/EventDef"),
            s = e("../WXAPI"),
            l = e("./WudianMgr"),
            _ = e("../CachedWXBannerAd"),
            u = e("../ALD"),
            h = e("../QQMiniGameAPI"),
            p = e("./WXADMgr"),
            f = e("../CachedQQBannerAd"),
            z = e("./SceneMgr"),
            g = function(e) {
                function t() {
                    var r = e.call(this) || this;
                    return t.dzcr__instance = r, r;
                }
                return __extends(t, e), t.dzcr_getInstance = function() {
                    return t.dzcr__instance;
                }, t.prototype.onAwake = function() {
                    l["default"].dzcr_UpdateIpBlockState(),
                        this.dzcr_reportLaunchOptions()
                }, t.prototype.onStart = function() {
                    var e = "subRes1/LayaScene_base/Conventional";
                    Laya.URL.customFormat = function(t) {
                            return -1 == t.indexOf(".lh") && t.indexOf(e) > -1 ? t = t.replace(e, "subRes/LayaScene_base/Conventional") : t;
                        },
                        this.dzcr_preCreateGame();
                }, t.prototype.dzcr_preCreateGame = function() {
                    var e = this,
                        r = JSON.stringify(t.cfg);
                    Laya.loader.load("res/data/cfg.json", Laya.Handler.create(this, function(r) {
                        if (r)
                            for (var n = 0, i = Object.keys(r); n < i.length; n++) {
                                var o = i[n];
                                // r.hasOwnProperty(o) && t.cfg.hasOwnProperty(o) && ();
                            }
                        Laya.Scene3D.load("subRes/LayaScene_base/Conventional/base.ls", Laya.Handler.create(e, function(e) {
                            return e ? (Laya.stage.addChild(e), e.addComponent(z["default"]),
                                void c["default"].dzcr_instance.dzcr_dispatch(d.dzcr_EventDef.dzcr_App_CloseFirstLoadingView)) : void console.log("");
                        }));
                    }));
                }, t.prototype.dzcr_saveGameData = function() {
                    o["default"].dzcr_saveGameData(i["default"].dzcr_getSaveData(),
                        function(e) {
                            1 == e.code ? console.log("存档成功") : console.log("存档失败");
                        },
                        function(e) {
                            console.log("存档失败");
                        });
                }, t.prototype.dzcr_reportLaunchOptions = function() {}, t.dzcr__instance = null, t.cfg = new n["default"](), t;
            }(Laya.Script);
        r["default"] = g;
    }, {
        "../ALD": 1,
        "../CachedQQBannerAd": 3,
        "../CachedWXBannerAd": 4,
        "../Config/RollyLegCfg": 6,
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../MaiLiangAPI/MaiLiang": 27,
        "../Net/HttpUnit": 39,
        "../QQMiniGameAPI": 43,
        "../User/User": 55,
        "../WXAPI": 72,
        "./SceneMgr": 32,
        "./WXADMgr": 36,
        "./WudianMgr": 37
    }],
    31: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./SceneMgr"),
            i = e("./CameraMgr"),
            o = e("../Event/EventMgr"),
            a = e("../Event/EventDef"),
            c = e("../User/User"),
            d = e("./GameMgr"),
            s = e("./ViewMgr"),
            l = function(e) {
                function t() {
                    var r = e.call(this) || this;
                    return r.rankImgs = [], r.allNodes = [], r.showHideNodes = [], t.instance = r, r;
                }
                return __extends(t, e), t.getInstance = function() {
                    return t.instance;
                }, t.prototype.onAwake = function() {
                    this.levelNode = this.owner;
                    for (var e = 1; 4 >= e; e++) this.rankImgs[e - 1] = Laya.stage.addChild(new Laya.Image("Template/" + e + ".png")),
                        this.rankImgs[e - 1].visible = !1;
                }, t.prototype.initLevel = function(e) {
                    this.curLevel = e, e > 15 && (e = Math.floor(15 * Math.random()) + 1);
                    var t = "subRes/LayaScene_base/Conventional/level" + e + ".lh";
                    e > 4 && (t = "subRes1/LayaScene_base/Conventional/level" + e + ".lh"), console.log("load url -- " + t),
                        Laya.Sprite3D.load(t, Laya.Handler.create(this, function(t) {
                            var r = this.levelNode.addChild(t);
                            r.transform.localScale = new Laya.Vector3(1, 1, 1), r.transform.localPosition = new Laya.Vector3(0, 0, 0),
                                r.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                            for (var i = r.getChildByName("level" + e), o = 0; o < i.numChildren; o++) {
                                var a = i.getChildAt(o);
                                if ("end" != a.name) {
                                    if (-1 != a.name.search("node")) {
                                        var c = a.getChildByName("GameObject"),
                                            d = a.getChildByName("GameObject (1)");
                                        c && (this.showHideNodes[this.showHideNodes.length] = c), d && (this.showHideNodes[this.showHideNodes.length] = d),
                                            this.allNodes[this.allNodes.length] = a;
                                    }
                                    for (var l = 0; l < a.numChildren; l++) {
                                        var _ = a.getChildAt(l);
                                        if (-1 != _.name.search("pr_qqb"))
                                            for (var u = 0; u < _.numChildren; u++) {
                                                var h = _.getChildAt(u);
                                                if (h) {
                                                    var p = h.getComponent(Laya.Rigidbody3D);
                                                    p && (p.angularFactor = new Laya.Vector3(1, 0, 0), p.linearFactor = new Laya.Vector3(1, 0, 0),
                                                        p.linearDamping = 1, p.angularDamping = .5);
                                                }
                                            } else {
                                                var f = _.getComponent(Laya.PhysicsCollider);
                                                f && (f.restitution = 1);
                                            }
                                    }
                                } else {
                                    var z = n["default"].getInstance().initEndNode(a),
                                        c = z.getChildByName("GameObject"),
                                        d = z.getChildByName("GameObject (1)"),
                                        g = z.getChildByName("GameObject (2)"),
                                        m = z.getChildByName("GameObject (3)"),
                                        y = z.getChildByName("GameObject (4)");
                                    c && (this.showHideNodes[this.showHideNodes.length] = c), d && (this.showHideNodes[this.showHideNodes.length] = d),
                                        g && (this.showHideNodes[this.showHideNodes.length] = g), m && (this.showHideNodes[this.showHideNodes.length] = m),
                                        y && (this.showHideNodes[this.showHideNodes.length] = y), this.allNodes[this.allNodes.length] = z;
                                }
                            }
                            s["default"].dzcr_instance.dzcr_closeView(s.dzcr_ViewDef.dzcr_Export2View),
                                s["default"].dzcr_instance.dzcr_openView(s.dzcr_ViewDef.dzcr_MainView);
                        }));
                }, t.prototype.clearLevel = function() {
                    this.levelNode.destroyChildren();
                }, t.prototype.setPlayerNode = function(e) {
                    this.playerNode = e;
                }, t.prototype.onUpdate = function() {
                    if (n["default"].bStartGame) {
                        for (var e = this.playerNode.transform.position.z, t = 0; t < this.allNodes.length; t++) this.allNodes[t].active = !1;
                        for (var t = 0; t < this.showHideNodes.length; t++) {
                            var r = e - this.showHideNodes[t].transform.position.z;
                            Math.abs(r) < d["default"].cfg.ShowNodeDistance && (this.showHideNodes[t].parent.active = !0);
                        }
                        for (var i = 0, t = 0; t < this.allNodes.length; t++) this.allNodes[t].active && i++;
                    }
                }, t.prototype.onLateUpdate = function() {
                    if (n["default"].bStartGame) {
                        e.prototype.onLateUpdate.call(this);
                        for (var t = [], r = n["default"].getInstance().getRoleNodeList(), o = 0; o < r.length; o++) {
                            var a = i["default"].getInstance().getScreenPos(r[o]),
                                c = {};
                            c.pos = new Laya.Vector2((a.x - 63) * Laya.stage.clientScaleX, (a.y - 184) * Laya.stage.clientScaleY),
                                c.distance = r[o].transform.position.z, t[o] = c;
                        }
                        t = t.sort(function(e, t) {
                            return e.distance - t.distance;
                        });
                        for (var o = 0; o < t.length; o++) this.rankImgs[o].pos(t[o].pos.x, t[o].pos.y);
                    }
                }, t.prototype.onLevelEnd = function(e) {
                    var t = this;
                    Laya.timer.once(6e3, t, function() {
                        1 == e.result ? (c["default"].dzcr_setLeveNum(t.curLevel + 1), d["default"].dzcr_getInstance().dzcr_saveGameData(),
                            s["default"].dzcr_instance.dzcr_openView(s.dzcr_ViewDef.dzcr_GameWinView, e)) : s["default"].dzcr_instance.dzcr_openView(s.dzcr_ViewDef.dzcr_GameFailView, e);
                    });
                    for (var r = 0; r < this.rankImgs.length; r++) this.rankImgs[r].visible = !1;
                }, t.prototype.onLevelStart = function(e) {
                    t.rankRecordNum = 0;
                    for (var r = 0; r < this.rankImgs.length; r++) this.rankImgs[r].visible = !0;
                }, t.prototype.ResetGame = function() {
                    var e = n["default"].getInstance().getRoleList();
                    n["default"].getInstance().endFx.active = !1;
                    for (var t = 0; t < e.length; t++) e[t].ResetPos();
                    this.showHideNodes = [], this.allNodes = [], this.clearLevel(), this.initLevel(c["default"].dzcr_getLeveNum());
                }, t.prototype.playSpringAni = function(e) {
                    var t = e.getChildByName("Bike_Helix_1"),
                        r = e.getChildByName("Box001");
                    t && r && (Laya.Tween.to(t.transform, {
                        localScaleY: 1
                    }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                        Laya.Tween.to(t.transform, {
                            localScaleY: 0
                        }, 100, Laya.Ease.linearOut, Laya.Handler.create(this, function() {}));
                    })), Laya.Tween.to(r.transform, {
                        localPositionY: 0
                    }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                        Laya.Tween.to(r.transform, {
                            localPositionY: -2.5
                        }, 100, Laya.Ease.linearOut, Laya.Handler.create(this, function() {}));
                    })));
                }, t.prototype.onEnable = function() {
                    o["default"].dzcr_instance.dzcr_regEvemt(a.dzcr_EventDef.dzcr_Game_OnLevelStart, this, this.onLevelStart),
                        o["default"].dzcr_instance.dzcr_regEvemt(a.dzcr_EventDef.dzcr_Game_OnLevelComplate, this, this.onLevelEnd);
                }, t.prototype.onDisable = function() {
                    o["default"].dzcr_instance.dzcr_removeEvent(a.dzcr_EventDef.dzcr_Game_OnLevelStart, this, this.onLevelStart),
                        o["default"].dzcr_instance.dzcr_removeEvent(a.dzcr_EventDef.dzcr_Game_OnLevelComplate, this, this.onLevelEnd);
                }, t.ShowDebugLine = !1, t.rankRecordNum = 0, t.instance = null, t;
            }(Laya.Script3D);
        r["default"] = l;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../User/User": 55,
        "./CameraMgr": 29,
        "./GameMgr": 30,
        "./SceneMgr": 32,
        "./ViewMgr": 35
    }],
    32: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Role/Player"),
            i = e("./CameraMgr"),
            o = e("../Role/Others"),
            a = e("./LevelMgr"),
            c = e("../User/User"),
            d = e("../Event/EventMgr"),
            s = e("../Event/EventDef"),
            l = e("../Role/FSM/FSM"),
            _ = e("./GameMgr"),
            u = e("./SoundMgr"),
            h = function(e) {
                function t() {
                    var r = e.call(this) || this;
                    return r.roleList = [], r.roleNodeList = [], t.instance = r, r;
                }
                return __extends(t, e), t.getInstance = function() {
                    return t.instance;
                }, t.prototype.onAwake = function() {
                    this.owner.getChildByName("Camera").addComponent(i["default"]);
                    this.startNode = this.owner.getChildByName("startNode");

                    for (var e = 1; 4 >= e; e++) {
                        var t = this.startNode.getChildByName("transmitter" + e),
                            r = t.getChildByName("pr_fst").getComponent(Laya.Animator);
                        null != r ? (r.play("Take 001"), r.speed = 0) : console.log("没有找到发射炮--" + e);
                    }
                    for (var e = 1; 4 >= e; e++) {
                        var d = this.startNode.getChildByName("player" + e);
                        if (null != d) {
                            if (1 == e) {
                                var s = d.addComponent(n["default"]);
                                this.player = s;
                            } else var s = d.addComponent(o["default"]);
                            this.roleList[e - 1] = s, this.roleNodeList[e - 1] = d;
                        } else console.log("没有找到角色--player" + e);
                    }
                    this.endNode = this.owner.getChildByName("endNode"),
                        this.endRoll = this.endNode.getChildByName("roll"),
                        this.endFx = this.endNode.getChildByName("fx"),
                        this.endFx.active = !1,
                        this.allDistance = Math.abs(this.endRoll.transform.position.z - this.roleNodeList[0].transform.position.z),
                        this.curDistance = this.allDistance, this.endNode.active = !1;
                    var l = this.owner.getChildByName("level"),
                        _ = l.addComponent(a["default"]),
                        u = c["default"].dzcr_getLeveNum();
                    _.initLevel(u),
                        _.setPlayerNode(this.roleNodeList[0]);
                }, t.prototype.onStart = function() {
                    u["default"].dzcr_instance.dzcr_playBGM("bg"),
                        d["default"].dzcr_instance.dzcr_regEvemt(s.dzcr_EventDef.dzcr_Game_OnLevelStart, this, this.onLevelStart),
                        d["default"].dzcr_instance.dzcr_regEvemt(s.dzcr_EventDef.dzcr_Game_OnLevelComplate, this, this.onLevelEnd);
                }, t.prototype.onUpdate = function() {
                    t.bStartGame && (this.curDistance = Math.abs(this.endRoll.transform.position.z - this.roleNodeList[0].transform.position.z));
                }, t.prototype.initEndNode = function(e) {
                    var t = this.endNode.clone();
                    return t.active = !0, this.endWall = e.addChild(t), this.endWall.transform.localScale = new Laya.Vector3(1, 1, 1),
                        this.endWall.transform.localPosition = new Laya.Vector3(0, 0, 0), this.endWall.transform.rotationEuler = new Laya.Vector3(0, 0, 0),
                        this.endRoll = this.endWall.getChildByName("roll"), this.endFx = this.endWall.getChildByName("fx"),
                        this.endFx.active = !1, this.allDistance = Math.abs(this.endRoll.transform.position.z - this.roleNodeList[0].transform.position.z),
                        this.curDistance = this.allDistance, this.endWall;
                }, t.prototype.onLevelStart = function() {
                    for (var e = 1; 4 >= e; e++) {
                        var r = this.startNode.getChildByName("transmitter" + e),
                            n = r.getChildByName("pr_fst").getComponent(Laya.Animator);
                        null != n ? n.speed = 1 : console.log("没有找到发射炮--" + e);
                    }
                    u["default"].dzcr_instance.dzcr_playSound("shoot");
                    var i = this;
                    Laya.timer.once(200, i, function() {
                        for (var e, r = function(t) {
                                i.roleList[t].m_rigidbody.linearDamping = _["default"].cfg.LinearDamping, e = {},
                                    e.mouseState = !1, e.bJump = !1, i.roleList[t].m_fsm.Switch(l.StateName.Lock, e),
                                    i.roleList[t].m_sprintFx.active = !0, i.roleList[t].m_rigidbody.applyImpulse(new Laya.Vector3(_["default"].cfg.InitStartPowerX, _["default"].cfg.InitStartPowerY, _["default"].cfg.InitStartPowerZ));
                                var r = i;
                                Laya.timer.once(_["default"].cfg.LockTime, r, function() {
                                    r.roleList[t].m_sprintFx.active = !1;
                                    var e = {};
                                    e.mouseState = !1, e.bJump = !1, r.roleList[t].m_fsm.Switch(l.StateName.Idle, e);
                                });
                            }, n = 0; n < i.roleList.length; n++) r(n);
                        t.bStartGame = !0;
                    });
                }, t.prototype.onLevelEnd = function() {
                    t.bStartGame = !1;
                    var e = {};
                    e.mouseState = !1, e.bJump = !1;
                    for (var r = 0; r < this.roleList.length; r++) this.roleList[r].m_fsm.Switch(l.StateName.Win, e);
                }, t.prototype.getRoleList = function() {
                    return this.roleList;
                }, t.prototype.getRoleNodeList = function() {
                    return this.roleNodeList;
                }, t.prototype.getPlayer = function() {
                    return this.player;
                }, t.prototype.setCurDistance = function(e) {}, t.prototype.ResetGame = function() {
                    for (var e = 1; 4 >= e; e++) {
                        var t = this.startNode.getChildByName("transmitter" + e),
                            r = t.getChildByName("pr_fst").getComponent(Laya.Animator);
                        null != r ? (r.play("Take 001"), r.speed = 0) : console.log("没有找到发射炮--" + e);
                    }
                    a["default"].getInstance().ResetGame();
                }, t.bStartGame = !1, t.instance = null, t;
            }(Laya.Script3D);
        r["default"] = h;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../Role/FSM/FSM": 45,
        "../Role/Others": 47,
        "../Role/Player": 48,
        "../User/User": 55,
        "./CameraMgr": 29,
        "./GameMgr": 30,
        "./LevelMgr": 31,
        "./SoundMgr": 33
    }],
    33: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.dzcr__enabled = !0;
            }
            return Object.defineProperty(e.prototype, "dzcr_Enabled", {
                get: function() {
                    return this.dzcr__enabled;
                },
                set: function(e) {
                    e || this.dzcr_stopBGM(), this.dzcr__enabled = e;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dzcr_getSoundUrl = function(t) {
                var r = e.dzcr_soundResPath + t + ".mp3";
                return r;
            }, e.prototype.dzcr_playSound = function(t) {
                if (this.dzcr__enabled) {
                    var r = this.dzcr_getSoundUrl(t);
                    if (Laya.Browser.onMiniGame) {
                        var n = laya.utils.Pool.getItem(t);
                        null == n && (n = wx.createInnerAudioContext(), n.src = e.dzcr_soundResPath + t + ".mp3",
                            n.onEnded(function() {
                                laya.utils.Pool.recover(t, n), n.offEnded();
                            })), n.play();
                    } else Laya.SoundManager.playSound(r, 1);
                }
            }, e.prototype.dzcr_playBGM = function(e) {
                if (this.dzcr__enabled) {
                    var t = this.dzcr_getSoundUrl(e);
                    Laya.Browser.onMiniGame ? (this.dzcr_bgm || (this.dzcr_bgm = wx.createInnerAudioContext()),
                        this.dzcr_bgm.pause(), this.dzcr_bgm.src = t, this.dzcr_bgm.loop = !0, this.dzcr_bgm.play()) : Laya.SoundManager.playMusic(t, 0);
                }
            }, e.prototype.dzcr_stopBGM = function() {
                Laya.Browser.onMiniGame ? this.dzcr_bgm && this.dzcr_bgm.pause() : Laya.SoundManager.stopMusic();
            }, e.dzcr_soundResPath = "subRes/sound/", e.dzcr_instance = new e(), e;
        }();
        r["default"] = n;
    }, {}],
    34: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_vibrateShort = function() {
                e.dzcr_isEnable && (Laya.Browser.onMiniGame ? Laya.Browser.window.wx.vibrateShort() : Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.vibrateShort() : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateShort());
            }, e.dzcr_vibrateLong = function() {
                e.dzcr_isEnable && (Laya.Browser.onMiniGame ? Laya.Browser.window.wx.vibrateLong() : Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.vibrateLong() : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateLong());
            }, e.dzcr_vibrate = function(t) {
                if (e.dzcr_isEnable)
                    if (Laya.Browser.onMiniGame) {
                        var r = t / 15,
                            n = 0,
                            i = {
                                count: r,
                                index: n
                            };
                        Laya.timer.loop(16, i, function() {
                            e.dzcr_vibrateShort(), n++, n > r && Laya.timer.clearAll(i);
                        });
                    } else if (Laya.Browser.onQGMiniGame) {
                    var o = t / 20,
                        a = 0,
                        c = {
                            count: o,
                            index: a
                        };
                    Laya.timer.loop(21, c, function() {
                        e.dzcr_vibrateShort(), a++, a > o && Laya.timer.clearAll(c);
                    });
                } else if (Laya.Browser.onQQMiniGame) {
                    var d = t / 20,
                        s = 0,
                        l = {
                            count: d,
                            index: s
                        };
                    Laya.timer.loop(21, l, function() {
                        e.dzcr_vibrateShort(), s++, s > d && Laya.timer.clearAll(l);
                    });
                }
            }, e.dzcr_isEnable = !0, e;
        }();
        r["default"] = n;
    }, {}],
    35: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n;
        ! function(e) {
            e.dzcr_None = "", e.dzcr_TipsView = "View/TipsView.json", e.dzcr_ClickGetPrize = "View/ClickGetPrize.json",
                e.dzcr_MainView = "View/Template/MainViewTemplate.json", e.dzcr_MiniGameView = "View/Template/MiniGameViewTemplate.json",
                e.dzcr_RewardView = "View/Template/RewardViewTemplate.json", e.dzcr_InGameView = "View/Template/InGameViewTemplate.json",
                e.dzcr_GameWinView = "View/Template/GameWinViewTemplate.json", e.dzcr_GameFailView = "View/Template/GameFailViewTemplate.json",
                e.dzcr_ExportView = "View/Template/ExportViewTemplate.json", e.dzcr_Export2View = "View/Template/Export2ViewTemplate.json",
                e.dzcr_OPPONativeView = "View/Template/OPPONativeViewTemplate.json",
                e.dzcr_QQCrazyClickView = "View/Template/QQ/QQCrazyClick.json",
                e.dzcr_QQCrazyClickView2 = "View/Template/QQ/QQCrazyClick2.json";
        }(n = r.dzcr_ViewDef || (r.dzcr_ViewDef = {}));
        var i = function() {
            function e() {
                this.dzcr__views = {}, this.dzcr__loadingList = new Array();
            }
            return e.prototype.dzcr_openView = function(e, t, r) {
                if (this.dzcr__views[e]) {
                    var n = this.dzcr__views[e],
                        i = n._components,
                        o = null;
                    if (i)
                        for (var a = 0; a < i.length; a++) {
                            var c = i[a];
                            if (c._viewBase) {
                                o = c, o.dzcr_openView(t);
                                break;
                            }
                        }
                    return void(r && r(o));
                }
                for (var d = 0; d < this.dzcr__loadingList.length; ++d) {
                    var s = this.dzcr__loadingList[d];
                    if (s == e) return void console.log("界面 : " + String(s) + " 正在加载中，请不要重复加载");
                }
                var l = String(e),
                    _ = this;
                this.dzcr__loadingList.push(e), Laya.Scene.load(l, Laya.Handler.create(this, function(n) {
                    Laya.stage.addChild(n);
                    var i = n;
                    _.dzcr__views[e] = i;
                    var o = n._components,
                        a = null;
                    if (o)
                        for (var c = 0; c < o.length; c++) {
                            var d = o[c];
                            if (d._viewBase) {
                                a = d, d._viewDef = e, a.dzcr_openView(t);
                                break;
                            }
                        }
                    for (var s = 0; s < _.dzcr__loadingList.length; ++s) {
                        var l = _.dzcr__loadingList[s];
                        if (l == e) {
                            _.dzcr__loadingList.splice(s, 1);
                            break;
                        }
                    }
                    r && r(a);
                }));
            }, e.prototype.dzcr_closeView = function(e) {
                var t = this.dzcr__views[e];
                if (t) {
                    var r = t,
                        n = r._components;
                    if (n)
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            if (o._viewBase) {
                                o.onClose();
                                break;
                            }
                        }
                    t.removeSelf(), t.destroy(), this.dzcr__views[e] = null;
                }
            }, e.prototype.dzcr_ShowView = function(e) {
                var t = this.dzcr__views[e];
                if (t) {
                    var r = t._components;
                    if (r)
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n];
                            if (i._viewBase) {
                                i.dzcr_show();
                                break;
                            }
                        }
                }
            }, e.prototype.dzcr_hideView = function(e) {
                var t = this.dzcr__views[e];
                if (t) {
                    var r = t._components;
                    if (r)
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n];
                            if (i._viewBase) {
                                i.dzcr_hide();
                                break;
                            }
                        }
                }
            }, e.prototype.dzcr_getView = function(e) {
                return this.dzcr__views[e];
            }, e.prototype.dzcr_showTips = function(e) {
                this.dzcr_openView(n.dzcr_TipsView, e);
            }, e.dzcr_instance = new e(), e;
        }();
        r["default"] = i;
    }, {}],
    36: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Config/AppSwitchConfig"),
            i = function() {
                function e(e) {
                    this.dzcr__id = null, this.dzcr__banner = null, this.dzcr__createTime = 0, this.dzcr__destroyed = !1,
                        this.dzcr__error = null, this.dzcr__loading = !1, this.dzcr__retryCount = 0, this.dzcr__bannerTotalShowTime = 0,
                        this.dzcr__lastShowTime = 0, this.dzcr__id = e;
                }
                return Object.defineProperty(e.prototype, "dzcr_Id", {
                    get: function() {
                        return this.dzcr__id;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_CreateTime", {
                    get: function() {
                        return this.dzcr__createTime;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_Destroyed", {
                    get: function() {
                        return this.dzcr__destroyed;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_isReady", {
                    get: function() {
                        return null != this.dzcr__banner;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_isError", {
                    get: function() {
                        return null != this.dzcr__error;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_Error", {
                    get: function() {
                        return this.dzcr__error;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_Loading", {
                    get: function() {
                        return this.dzcr__loading;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_RetryCount", {
                    get: function() {
                        return this.dzcr__retryCount;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dzcr_BannerTotalShowTime", {
                    get: function() {
                        return this.dzcr__bannerTotalShowTime;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.dzcr_show = function() {
                    if (this.dzcr_isReady) {
                        this.dzcr__banner.hide();
                        var e = Laya.Browser.window.wx.getSystemInfoSync(),
                            t = e.screenWidth,
                            r = e.screenHeight,
                            n = (new Laya.Point(0, 0),
                                300),
                            i = t / 2 - n / 2,
                            o = r - 130;
                        this.dzcr__banner.style.left = i, this.dzcr__banner.style.top = o, this.dzcr__lastShowTime = Laya.timer.currTimer,
                            this.dzcr__banner.show();
                    }
                }, e.prototype.dzcr_hide = function() {
                    this.dzcr_isReady && (this.dzcr__banner.hide(), this.dzcr__bannerTotalShowTime += Laya.timer.currTimer - this.dzcr__lastShowTime);
                }, e.prototype.dzcr_destroy = function() {
                    return this.dzcr__destroyed ? void console.log("BannerAd 已经被销毁") : this.dzcr__loading ? void console.log("BannerAd 正在加载中，无法进行销毁") : (null != this.dzcr__banner && this.dzcr__banner.destroy(),
                        this.dzcr__banner = null, void(this.dzcr__destroyed = !0));
                }, e.prototype.dzcr_retry = function(t) {
                    if (this.dzcr__destroyed) return void console.log("BannerAd 已被销毁，无法重试");
                    if (this.dzcr_isReady) return void console.log("BannerAd 已创建成功，无需重试");
                    if (this.dzcr__loading) return void console.log("BannerAd 正在创建中");
                    if (this.dzcr__retryCount >= e.dzcr_MAX_RETRY_COUNT) return void console.log("此 BannerAd 重试次数已达最大");
                    var r = this;
                    this.dzcr__create(function(e) {
                        null != t && t(e), ++r.dzcr__retryCount;
                    });
                }, e.prototype.dzcr__create = function(e) {
                    if (!Laya.Browser.onMiniGame) return void(null != e && e(!1));
                    var t = null;
                    if (Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: this.dzcr__id,
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: 0,
                                width: 300
                            }
                        }) : Laya.Browser.onQQMiniGame && (t = Laya.Browser.window.qq.createBannerAd({
                            adUnitId: this.dzcr__id,
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: 0,
                                width: 300
                            }
                        })), null != t) {
                        var r = this;
                        this.dzcr__loading = !0, t.onLoad(function(n) {
                            console.log("BannderAd 加载完成", r.dzcr__id, n), r.dzcr__banner = t, r.dzcr__createTime = Laya.timer.currTimer,
                                r.dzcr__loading = !1, null != e && e(!0);
                        }), t.onError(function(n) {
                            console.log("BannderAd 加载失败", r.dzcr__id, n), r.dzcr__error = n, r.dzcr__loading = !1,
                                t.destroy(), null != e && e(!1);
                        });
                    }
                }, e.dzcr_MAX_RETRY_COUNT = 3, e;
            }();
        r.dzcr_WXBannderAd = i;
        var o = function() {
            function e(e) {
                this.dzcr__id = null, this.dzcr__gridAd = null, this.dzcr__createTime = 0, this.dzcr__destroyed = !1,
                    this.dzcr__error = null, this.dzcr__loading = !1, this.dzcr__id = e;
            }
            return Object.defineProperty(e.prototype, "dzcr_CreateTime", {
                get: function() {
                    return this.dzcr__createTime;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dzcr_Destroyed", {
                get: function() {
                    return this.dzcr__destroyed;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dzcr_isReady", {
                get: function() {
                    return null != this.dzcr__gridAd;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dzcr_isError", {
                get: function() {
                    return null != this.dzcr__error;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dzcr_Error", {
                get: function() {
                    return this.dzcr__error;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dzcr_Loading", {
                get: function() {
                    return this.dzcr__loading;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dzcr_show = function() {
                this.dzcr_isReady && this.dzcr__gridAd.show();
            }, e.prototype.dzcr_hide = function() {
                this.dzcr_isReady && this.dzcr__gridAd.hide();
            }, e.prototype.dzcr_destroy = function() {
                return this.dzcr__destroyed ? void console.log("GridAD 已经被销毁") : this.dzcr__loading ? void console.log("GridAD 正在加载中，无法进行销毁") : (null != this.dzcr__gridAd && this.dzcr__gridAd.destroy(),
                    this.dzcr__gridAd = null, void(this.dzcr__destroyed = !0));
            }, e.prototype.dzcr_retry = function(e) {
                if (this.dzcr__destroyed) return void console.log("GridAD 已被销毁，无法重试");
                if (this.dzcr_isReady) return void console.log("GridAD 已创建成功，无需重试");
                if (this.dzcr__loading) return void console.log("GridAD 正在创建中");
                this.dzcr__create(function(t) {
                    null != e && e(t);
                });
            }, e.prototype.dzcr__create = function(e) {
                if (!Laya.Browser.onMiniGame) return void(null != e && e(!1));
                var t = Laya.Browser.window.wx.createGridAd({
                    adUnitId: this.dzcr__id,
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: 0,
                        width: 300,
                        height: 150
                    }
                });
                if (null != t) {
                    var r = this;
                    this.dzcr__loading = !0, t.onLoad(function(n) {
                        console.log("GridAD 加载完成", r.dzcr__id, n), r.dzcr__gridAd = t, r.dzcr__createTime = Laya.timer.currTimer,
                            r.dzcr__loading = !1, null != e && e(!0);
                    }), t.onError(function(n) {
                        console.log("GridAD 加载失败", r.dzcr__id, n), r.dzcr__error = n, r.dzcr__loading = !1,
                            t.destroy(), null != e && e(!1);
                    });
                }
            }, e;
        }();
        r.dzcr_WXGridAd = o;
        var a = function() {
            function e() {}
            return e.dzcr_init = function() {
                    if (!e.dzcr__inited) {
                        for (var t = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wxWuDianBanners, r = 0; r < t.length; ++r) e.dzcr__bannerIds.push(t[r]);
                        for (var r = 0; r < e.dzcr__bannerIds.length; ++r) {
                            e.dzcr__bannerIds[r];
                            e.dzcr__bannerIds[r] = t[Math.floor(Math.random() * t.length)];
                        }
                        e.dzcr__createBannerAd();
                        var i = 1e3 * n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerCreateFailNum;
                        Laya.timer.loop(i, e, function() {
                            e.dzcr__checkBannerAd(), e.dzcr__createBannerAd();
                        }), e.dzcr__inited = !0;
                    }
                }, e.dzcr_getBanner = function(t) {
                    for (var r = [], n = [], i = 0; i < e.dzcr__banners.length; ++i) {
                        var o = e.dzcr__banners[i];
                        o.dzcr_Destroyed || (o.dzcr_isReady ? r.push(o) : n.push(o));
                    }
                    e.dzcr__curBannerGetIndex >= r.length && (e.dzcr__curBannerGetIndex = 0);
                    var a = r[e.dzcr__curBannerGetIndex];
                    ++e.dzcr__curBannerGetIndex, null != a ? t(a) : (a = e.dzcr__createBannerAd(), null == a && (a = e.dzcr__banners[Math.floor(Math.random() * e.dzcr__banners.length)]),
                        null == a ? t(null) : a.dzcr_retry(function(e) {
                            t(e ? a : null);
                        }));
                }, e.dzcr__createBannerAd = function() {
                    if (e.dzcr__curBannerCreateIndex >= e.dzcr__bannerIds.length) return null;
                    var t = new i(e.dzcr__bannerIds[e.dzcr__curBannerCreateIndex]);
                    return e.dzcr__banners.push(t), t.dzcr_retry(), ++e.dzcr__curBannerCreateIndex,
                        t;
                }, e.dzcr__checkBannerAd = function() {
                    for (var t = [], r = [], o = 0; o < e.dzcr__banners.length; ++o) {
                        var a = e.dzcr__banners[o];
                        a.dzcr_Destroyed || (a.dzcr_isReady ? t.push(a) : r.push(a));
                    }
                    for (var o = 0; o < e.dzcr__banners.length; ++o) {
                        var a = e.dzcr__banners[o],
                            c = n["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerShowTime;
                        a.dzcr_isReady ? t.length >= 2 && a.dzcr_BannerTotalShowTime >= 1e3 * c && (console.log("BannerAd 展示时间超过限制，销毁 : ", a.dzcr_Id),
                            a.dzcr_destroy()) : a.dzcr_RetryCount >= i.dzcr_MAX_RETRY_COUNT ? (console.log("BannerAd 超过重试次数，销毁 : ", a.dzcr_Id),
                            a.dzcr_destroy()) : a.dzcr_retry();
                    }
                }, e.dzcr_getBoxAd = function(t) {
                    if (e.dzcr__wxGridAd.dzcr_isReady) t(e.dzcr__wxGridAd);
                    else {
                        var r = e.dzcr__wxGridAd;
                        r.dzcr_retry(function(e) {
                            t(e ? r : null);
                        });
                    }
                }, e.dzcr__createGirdAd = function() {
                    if (null == e.dzcr__wxGridAd) {
                        var t = new o("");
                        t.dzcr_retry(), e.dzcr__wxGridAd = t;
                    }
                }, e.dzcr__inited = !1, e.dzcr__bannerIds = new Array(), e.dzcr__banners = new Array(),
                e.dzcr__curBannerCreateIndex = 0, e.dzcr__curBannerGetIndex = 0, e.dzcr__wxGridAd = null,
                e;
        }();
        r["default"] = a;
    }, {
        "../Config/AppSwitchConfig": 5
    }],
    37: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Net/HttpUnit"),
            i = e("../Config/AppSwitchConfig"),
            o = e("../WXAPI"),
            a = e("../QQMiniGameAPI"),
            c = e("../Event/EventMgr"),
            d = e("../Event/EventDef"),
            s = function() {
                function e() {}
                return e.dzcr_IpBlockFlag = function() {
                    return e.dzcr__ipBlockFlag;
                }, e.dzcr_UpdateIpBlockState = function() {}, e.dzcr_GetIpBlocked = function() {
                    return 0 == e.dzcr__ipBlockFlag;
                }, e.dzcr_GetEntryScene = function() {
                    return 1006 == o["default"].dzcr_getLaunchOptionsSync().scene;
                }, e.dzcr_IsSwitchOpen = function() {
                    return false;
                }, Object.defineProperty(e, "dzcr_WudianFlag", {
                    get: function() {},
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "dzcr_NoTimeWudianFlag", {
                    get: function() {},
                    enumerable: !0,
                    configurable: !0
                }), e.dzcr__ipBlockFlag = -1, e;
            }();
        r["default"] = s;
    }, {
        "../Config/AppSwitchConfig": 5,
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../Net/HttpUnit": 39,
        "../QQMiniGameAPI": 43,
        "../WXAPI": 72
    }],
    38: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./aes.js"),
            i = function() {
                function e() {}
                return e.dzcr_encrypt = function(t) {
                    var r = n.enc.Utf8.parse(e.dzcr_KEY),
                        i = n.enc.Utf8.parse(e.dzcr_IV),
                        o = n.AES.encrypt(t, r, {
                            iv: i,
                            mode: n.mode.CBC,
                            padding: n.pad.Pkcs7
                        });
                    return o.toString();
                }, e.dzcr_decrypt = function(t) {
                    var r = n.enc.Utf8.parse(e.dzcr_KEY),
                        i = n.enc.Utf8.parse(e.dzcr_IV),
                        o = n.AES.decrypt(t, r, {
                            iv: i,
                            padding: n.pad.Pkcs7
                        });
                    return o.toString(n.enc.Utf8);
                }, e.dzcr_KEY = "b#63fFJ6AvkK3YT*", e.dzcr_IV = "J$f4DU%sNL73M&Go", e;
            }();
        r["default"] = i;
    }, {
        "./aes.js": 41
    }],
    39: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./NetConfig"),
            i = e("../User/User"),
            o = e("./AesTools"),
            a = e("../AppConfig"),
            c = function() {
                function e() {
                    this.dzcr_meth = "post", this.dzcr_url = "", this.dzcr_onSuccess = null, this.dzcr_onFail = null,
                        this.dzcr_data = {};
                }
                return e;
            }();
        r.dzcr_requestData = c;
        var d = function() {
            function e() {}
            return e.request = function(t) {
                // t.dzcr_url.indexOf("https://") > -1 || t.dzcr_url.indexOf("http://") > -1 ? t.dzcr_url = t.dzcr_url : t.dzcr_url = n["default"].dzcr_serverUrl + t.dzcr_url;
                // var r = function(e) {
                //     console.log(e, "http Success"), t.dzcr_onSuccess && t.dzcr_onSuccess(e), t.dzcr_onSuccess = null, 
                //     t = null;
                // }, c = function(e) {
                //     console.log(e, "http fail"), t.dzcr_onFail && t.dzcr_onFail(e), t.dzcr_onFail = null, 
                //     t = null;
                // }, d = new Laya.HttpRequest();
                // d.once(Laya.Event.COMPLETE, e, r), d.once(Laya.Event.ERROR, e, c);
                // JSON.stringify(t.dzcr_data);
                // Laya.Browser.onMiniGame || a["default"].onTTMiniGame ? t.dzcr_data.code = i["default"].dzcr_code : Laya.Browser.onQGMiniGame ? t.dzcr_data.oppotoken = i["default"].dzcr_code : Laya.Browser.onQQMiniGame ? t.dzcr_data.code = i["default"].dzcr_code : t.dzcr_data.code = i["default"].dzcr_code;
                // var s = "time=" + String(Date.now()), l = [ "Content-Type", "application/json", "state", n["default"].dzcr_state, "gameid", n["default"].dzcr_gameid, "sign", o["default"].dzcr_encrypt(s) ];
                // i["default"].dzcr_token && (l.push("token"), l.push(i["default"].dzcr_token)), d.send(t.dzcr_url, JSON.stringify(t.dzcr_data), t.dzcr_meth, "json", l);
            }, e.dzcr_login = function(t, r) {
                var i = new c();
                i.dzcr_url = n["default"].dzcr_Login, i.dzcr_onSuccess = t, i.dzcr_onFail = r, e.request(i);
            }, e.dzcr_saveGameData = function(t, r, i) {
                var o = new c();
                o.dzcr_url = n["default"].dzcr_SaveGameData, o.dzcr_data.gameData = t, o.dzcr_onSuccess = r,
                    o.dzcr_onFail = i, e.request(o);
            }, e.dzcr_getGameData = function(t, r) {
                var i = new c();
                i.dzcr_url = n["default"].dzcr_GetUser, i.dzcr_onSuccess = t, i.dzcr_onFail = r,
                    e.request(i);
            }, e.dzcr_GetIpBlock = function(t, r) {
                if (-1 != n["default"].dzcr_gameid) {
                    var i = new c();
                    i.dzcr_url = n["default"].dzcr_IpBlock, i.dzcr_onSuccess = t, i.dzcr_onFail = r,
                        e.request(i);
                }
            }, e.dzcr_reportExport = function(t, r, i, o) {
                var a = new c();
                a.dzcr_url = n["default"].dzcr_reportExport, a.dzcr_data.wbappid = t, a.dzcr_data.game_name = r,
                    a.dzcr_onSuccess = i, a.dzcr_onFail = o, e.request(a);
            }, e.dzcr_reportImport = function(t, r, i, o) {
                var a = new c();
                a.dzcr_url = n["default"].dzcr_reportImport, a.dzcr_data.wbappid = t, a.dzcr_data.channel = r,
                    a.dzcr_onSuccess = i, a.dzcr_onFail = o, e.request(a);
            }, e.dzcr_Getuserip = function(t, r) {
                var i = new c();
                i.dzcr_url = n["default"].dzcr_getuserip, i.dzcr_onSuccess = t, i.dzcr_onFail = r,
                    e.request(i);
            }, e;
        }();
        r["default"] = d;
    }, {
        "../AppConfig": 2,
        "../User/User": 55,
        "./AesTools": 38,
        "./NetConfig": 40
    }],
    40: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_state = 0, e.dzcr_gameid = 15, e.dzcr_serverUrl = "https://javaapi.renyouwangluo.cn",
                e.dzcr_Login = "https://javaapi.renyouwangluo.cn/api/user/login", e.dzcr_SaveGameData = "https://javaapi.renyouwangluo.cn/api/user/game/data/write",
                e.dzcr_GetUser = "https://javaapi.renyouwangluo.cn/api/user/game/data/read", e.dzcr_IpBlock = "https://javaapi.renyouwangluo.cn/api/user/ip/select",
                e.dzcr_reportExport = "/api/share/getwaibuad", e.dzcr_reportImport = "/api/share/getzjadml",
                e.dzcr_getuserip = "https://javaapi.renyouwangluo.cn/api/user/ip", e;
        }();
        r["default"] = n;
    }, {}],
    41: [function(e, t, r) {
        var n = n || function(e, t) {
            var r = {},
                n = r.lib = {},
                i = function() {},
                o = n.Base = {
                    extend: function(e) {
                        i.prototype = this;
                        var t = new i();
                        return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                            t.$super.init.apply(this, arguments);
                        }), t.init.prototype = t, t.$super = this, t;
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e;
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString);
                    },
                    clone: function() {
                        return this.init.prototype.extend(this);
                    }
                },
                a = n.WordArray = o.extend({
                    init: function(e, r) {
                        e = this.words = e || [], this.sigBytes = r != t ? r : 4 * e.length;
                    },
                    toString: function(e) {
                        return (e || d).stringify(this);
                    },
                    concat: function(e) {
                        var t = this.words,
                            r = e.words,
                            n = this.sigBytes;
                        if (e = e.sigBytes, this.clamp(), n % 4)
                            for (var i = 0; e > i; i++) t[n + i >>> 2] |= (r[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((n + i) % 4);
                        else if (65535 < r.length)
                            for (i = 0; e > i; i += 4) t[n + i >>> 2] = r[i >>> 2];
                        else t.push.apply(t, r);
                        return this.sigBytes += e, this;
                    },
                    clamp: function() {
                        var t = this.words,
                            r = this.sigBytes;
                        t[r >>> 2] &= 4294967295 << 32 - 8 * (r % 4), t.length = e.ceil(r / 4);
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e;
                    },
                    random: function(t) {
                        for (var r = [], n = 0; t > n; n += 4) r.push(4294967296 * e.random() | 0);
                        return new a.init(r, t);
                    }
                }),
                c = r.enc = {},
                d = c.Hex = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var r = [], n = 0; e > n; n++) {
                            var i = t[n >>> 2] >>> 24 - 8 * (n % 4) & 255;
                            r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
                        }
                        return r.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, r = [], n = 0; t > n; n += 2) r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - 4 * (n % 8);
                        return new a.init(r, t / 2);
                    }
                },
                s = c.Latin1 = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var r = [], n = 0; e > n; n++) r.push(String.fromCharCode(t[n >>> 2] >>> 24 - 8 * (n % 4) & 255));
                        return r.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, r = [], n = 0; t > n; n++) r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - 8 * (n % 4);
                        return new a.init(r, t);
                    }
                },
                l = c.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(s.stringify(e)));
                        } catch (t) {
                            throw Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function(e) {
                        return s.parse(unescape(encodeURIComponent(e)));
                    }
                },
                _ = n.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new a.init(), this._nDataBytes = 0;
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                    },
                    _process: function(t) {
                        var r = this._data,
                            n = r.words,
                            i = r.sigBytes,
                            o = this.blockSize,
                            c = i / (4 * o),
                            c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0);
                        if (t = c * o, i = e.min(4 * t, i), t) {
                            for (var d = 0; t > d; d += o) this._doProcessBlock(n, d);
                            d = n.splice(0, t), r.sigBytes -= i;
                        }
                        return new a.init(d, i);
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e;
                    },
                    _minBufferSize: 0
                });
            n.Hasher = _.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset();
                },
                reset: function() {
                    _.reset.call(this), this._doReset();
                },
                update: function(e) {
                    return this._append(e), this._process(), this;
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, r) {
                        return new e.init(r).finalize(t);
                    };
                },
                _createHmacHelper: function(e) {
                    return function(t, r) {
                        return new u.HMAC.init(e, r).finalize(t);
                    };
                }
            });
            var u = r.algo = {};
            return r;
        }(Math);
        ! function() {
            var e = n,
                t = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words,
                        r = e.sigBytes,
                        n = this._map;
                    e.clamp(), e = [];
                    for (var i = 0; r > i; i += 3)
                        for (var o = (t[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - 8 * ((i + 1) % 4) & 255) << 8 | t[i + 2 >>> 2] >>> 24 - 8 * ((i + 2) % 4) & 255, a = 0; 4 > a && r > i + .75 * a; a++) e.push(n.charAt(o >>> 6 * (3 - a) & 63));
                    if (t = n.charAt(64))
                        for (; e.length % 4;) e.push(t);
                    return e.join("");
                },
                parse: function(e) {
                    var r = e.length,
                        n = this._map,
                        i = n.charAt(64);
                    i && (i = e.indexOf(i), -1 != i && (r = i));
                    for (var i = [], o = 0, a = 0; r > a; a++)
                        if (a % 4) {
                            var c = n.indexOf(e.charAt(a - 1)) << 2 * (a % 4),
                                d = n.indexOf(e.charAt(a)) >>> 6 - 2 * (a % 4);
                            i[o >>> 2] |= (c | d) << 24 - 8 * (o % 4), o++;
                        }
                    return t.create(i, o);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
        }(),
        function(e) {
            function t(e, t, r, n, i, o, a) {
                return e = e + (t & r | ~t & n) + i + a, (e << o | e >>> 32 - o) + t;
            }

            function r(e, t, r, n, i, o, a) {
                return e = e + (t & n | r & ~n) + i + a, (e << o | e >>> 32 - o) + t;
            }

            function i(e, t, r, n, i, o, a) {
                return e = e + (t ^ r ^ n) + i + a, (e << o | e >>> 32 - o) + t;
            }

            function o(e, t, r, n, i, o, a) {
                return e = e + (r ^ (t | ~n)) + i + a, (e << o | e >>> 32 - o) + t;
            }
            for (var a = n, c = a.lib, d = c.WordArray, s = c.Hasher, c = a.algo, l = [], _ = 0; 64 > _; _++) l[_] = 4294967296 * e.abs(e.sin(_ + 1)) | 0;
            c = c.MD5 = s.extend({
                _doReset: function() {
                    this._hash = new d.init([1732584193, 4023233417, 2562383102, 271733878]);
                },
                _doProcessBlock: function(e, n) {
                    for (var a = 0; 16 > a; a++) {
                        var c = n + a,
                            d = e[c];
                        e[c] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8);
                    }
                    var a = this._hash.words,
                        c = e[n + 0],
                        d = e[n + 1],
                        s = e[n + 2],
                        _ = e[n + 3],
                        u = e[n + 4],
                        h = e[n + 5],
                        p = e[n + 6],
                        f = e[n + 7],
                        z = e[n + 8],
                        g = e[n + 9],
                        m = e[n + 10],
                        y = e[n + 11],
                        w = e[n + 12],
                        v = e[n + 13],
                        S = e[n + 14],
                        L = e[n + 15],
                        B = a[0],
                        A = a[1],
                        C = a[2],
                        b = a[3],
                        B = t(B, A, C, b, c, 7, l[0]),
                        b = t(b, B, A, C, d, 12, l[1]),
                        C = t(C, b, B, A, s, 17, l[2]),
                        A = t(A, C, b, B, _, 22, l[3]),
                        B = t(B, A, C, b, u, 7, l[4]),
                        b = t(b, B, A, C, h, 12, l[5]),
                        C = t(C, b, B, A, p, 17, l[6]),
                        A = t(A, C, b, B, f, 22, l[7]),
                        B = t(B, A, C, b, z, 7, l[8]),
                        b = t(b, B, A, C, g, 12, l[9]),
                        C = t(C, b, B, A, m, 17, l[10]),
                        A = t(A, C, b, B, y, 22, l[11]),
                        B = t(B, A, C, b, w, 7, l[12]),
                        b = t(b, B, A, C, v, 12, l[13]),
                        C = t(C, b, B, A, S, 17, l[14]),
                        A = t(A, C, b, B, L, 22, l[15]),
                        B = r(B, A, C, b, d, 5, l[16]),
                        b = r(b, B, A, C, p, 9, l[17]),
                        C = r(C, b, B, A, y, 14, l[18]),
                        A = r(A, C, b, B, c, 20, l[19]),
                        B = r(B, A, C, b, h, 5, l[20]),
                        b = r(b, B, A, C, m, 9, l[21]),
                        C = r(C, b, B, A, L, 14, l[22]),
                        A = r(A, C, b, B, u, 20, l[23]),
                        B = r(B, A, C, b, g, 5, l[24]),
                        b = r(b, B, A, C, S, 9, l[25]),
                        C = r(C, b, B, A, _, 14, l[26]),
                        A = r(A, C, b, B, z, 20, l[27]),
                        B = r(B, A, C, b, v, 5, l[28]),
                        b = r(b, B, A, C, s, 9, l[29]),
                        C = r(C, b, B, A, f, 14, l[30]),
                        A = r(A, C, b, B, w, 20, l[31]),
                        B = i(B, A, C, b, h, 4, l[32]),
                        b = i(b, B, A, C, z, 11, l[33]),
                        C = i(C, b, B, A, y, 16, l[34]),
                        A = i(A, C, b, B, S, 23, l[35]),
                        B = i(B, A, C, b, d, 4, l[36]),
                        b = i(b, B, A, C, u, 11, l[37]),
                        C = i(C, b, B, A, f, 16, l[38]),
                        A = i(A, C, b, B, m, 23, l[39]),
                        B = i(B, A, C, b, v, 4, l[40]),
                        b = i(b, B, A, C, c, 11, l[41]),
                        C = i(C, b, B, A, _, 16, l[42]),
                        A = i(A, C, b, B, p, 23, l[43]),
                        B = i(B, A, C, b, g, 4, l[44]),
                        b = i(b, B, A, C, w, 11, l[45]),
                        C = i(C, b, B, A, L, 16, l[46]),
                        A = i(A, C, b, B, s, 23, l[47]),
                        B = o(B, A, C, b, c, 6, l[48]),
                        b = o(b, B, A, C, f, 10, l[49]),
                        C = o(C, b, B, A, S, 15, l[50]),
                        A = o(A, C, b, B, h, 21, l[51]),
                        B = o(B, A, C, b, w, 6, l[52]),
                        b = o(b, B, A, C, _, 10, l[53]),
                        C = o(C, b, B, A, m, 15, l[54]),
                        A = o(A, C, b, B, d, 21, l[55]),
                        B = o(B, A, C, b, z, 6, l[56]),
                        b = o(b, B, A, C, L, 10, l[57]),
                        C = o(C, b, B, A, p, 15, l[58]),
                        A = o(A, C, b, B, v, 21, l[59]),
                        B = o(B, A, C, b, u, 6, l[60]),
                        b = o(b, B, A, C, y, 10, l[61]),
                        C = o(C, b, B, A, s, 15, l[62]),
                        A = o(A, C, b, B, g, 21, l[63]);
                    a[0] = a[0] + B | 0, a[1] = a[1] + A | 0, a[2] = a[2] + C | 0, a[3] = a[3] + b | 0;
                },
                _doFinalize: function() {
                    var t = this._data,
                        r = t.words,
                        n = 8 * this._nDataBytes,
                        i = 8 * t.sigBytes;
                    r[i >>> 5] |= 128 << 24 - i % 32;
                    var o = e.floor(n / 4294967296);
                    for (r[(i + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        r[(i + 64 >>> 9 << 4) + 14] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                        t.sigBytes = 4 * (r.length + 1), this._process(), t = this._hash, r = t.words, n = 0; 4 > n; n++) i = r[n],
                        r[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    return t;
                },
                clone: function() {
                    var e = s.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            }), a.MD5 = s._createHelper(c), a.HmacMD5 = s._createHmacHelper(c);
        }(Math),
        function() {
            var e = n,
                t = e.lib,
                r = t.Base,
                i = t.WordArray,
                t = e.algo,
                o = t.EvpKDF = r.extend({
                    cfg: r.extend({
                        keySize: 4,
                        hasher: t.MD5,
                        iterations: 1
                    }),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e);
                    },
                    compute: function(e, t) {
                        for (var r = this.cfg, n = r.hasher.create(), o = i.create(), a = o.words, c = r.keySize, r = r.iterations; a.length < c;) {
                            d && n.update(d);
                            var d = n.update(e).finalize(t);
                            n.reset();
                            for (var s = 1; r > s; s++) d = n.finalize(d), n.reset();
                            o.concat(d);
                        }
                        return o.sigBytes = 4 * c, o;
                    }
                });
            e.EvpKDF = function(e, t, r) {
                return o.create(r).compute(e, t);
            };
        }(), n.lib.Cipher || function(e) {
                var t = n,
                    r = t.lib,
                    i = r.Base,
                    o = r.WordArray,
                    a = r.BufferedBlockAlgorithm,
                    c = t.enc.Base64,
                    d = t.algo.EvpKDF,
                    s = r.Cipher = a.extend({
                        cfg: i.extend(),
                        createEncryptor: function(e, t) {
                            return this.create(this._ENC_XFORM_MODE, e, t);
                        },
                        createDecryptor: function(e, t) {
                            return this.create(this._DEC_XFORM_MODE, e, t);
                        },
                        init: function(e, t, r) {
                            this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
                        },
                        reset: function() {
                            a.reset.call(this), this._doReset();
                        },
                        process: function(e) {
                            return this._append(e), this._process();
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize();
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function(e) {
                            return {
                                encrypt: function(t, r, n) {
                                    return ("string" == typeof r ? f : p).encrypt(e, t, r, n);
                                },
                                decrypt: function(t, r, n) {
                                    return ("string" == typeof r ? f : p).decrypt(e, t, r, n);
                                }
                            };
                        }
                    });
                r.StreamCipher = s.extend({
                    _doFinalize: function() {
                        return this._process(!0);
                    },
                    blockSize: 1
                });
                var l = t.mode = {},
                    _ = function(t, r, n) {
                        var i = this._iv;
                        i ? this._iv = e : i = this._prevBlock;
                        for (var o = 0; n > o; o++) t[r + o] ^= i[o];
                    },
                    u = (r.BlockCipherMode = i.extend({
                        createEncryptor: function(e, t) {
                            return this.Encryptor.create(e, t);
                        },
                        createDecryptor: function(e, t) {
                            return this.Decryptor.create(e, t);
                        },
                        init: function(e, t) {
                            this._cipher = e, this._iv = t;
                        }
                    })).extend();
                u.Encryptor = u.extend({
                    processBlock: function(e, t) {
                        var r = this._cipher,
                            n = r.blockSize;
                        _.call(this, e, t, n), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
                    }
                }), u.Decryptor = u.extend({
                    processBlock: function(e, t) {
                        var r = this._cipher,
                            n = r.blockSize,
                            i = e.slice(t, t + n);
                        r.decryptBlock(e, t), _.call(this, e, t, n), this._prevBlock = i;
                    }
                }), l = l.CBC = u, u = (t.pad = {}).Pkcs7 = {
                    pad: function(e, t) {
                        for (var r = 4 * t, r = r - e.sigBytes % r, n = r << 24 | r << 16 | r << 8 | r, i = [], a = 0; r > a; a += 4) i.push(n);
                        r = o.create(i, r), e.concat(r);
                    },
                    unpad: function(e) {
                        e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
                    }
                }, r.BlockCipher = s.extend({
                    cfg: s.cfg.extend({
                        mode: l,
                        padding: u
                    }),
                    reset: function() {
                        s.reset.call(this);
                        var e = this.cfg,
                            t = e.iv,
                            e = e.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var r = e.createEncryptor;
                        else r = e.createDecryptor,
                            this._minBufferSize = 1;
                        this._mode = r.call(e, this, t && t.words);
                    },
                    _doProcessBlock: function(e, t) {
                        this._mode.processBlock(e, t);
                    },
                    _doFinalize: function() {
                        var e = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            e.pad(this._data, this.blockSize);
                            var t = this._process(!0);
                        } else t = this._process(!0), e.unpad(t);
                        return t;
                    },
                    blockSize: 4
                });
                var h = r.CipherParams = i.extend({
                        init: function(e) {
                            this.mixIn(e);
                        },
                        toString: function(e) {
                            return (e || this.formatter).stringify(this);
                        }
                    }),
                    l = (t.format = {}).OpenSSL = {
                        stringify: function(e) {
                            var t = e.ciphertext;
                            return e = e.salt, (e ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(c);
                        },
                        parse: function(e) {
                            e = c.parse(e);
                            var t = e.words;
                            if (1398893684 == t[0] && 1701076831 == t[1]) {
                                var r = o.create(t.slice(2, 4));
                                t.splice(0, 4), e.sigBytes -= 16;
                            }
                            return h.create({
                                ciphertext: e,
                                salt: r
                            });
                        }
                    },
                    p = r.SerializableCipher = i.extend({
                        cfg: i.extend({
                            format: l
                        }),
                        encrypt: function(e, t, r, n) {
                            n = this.cfg.extend(n);
                            var i = e.createEncryptor(r, n);
                            return t = i.finalize(t), i = i.cfg, h.create({
                                ciphertext: t,
                                key: r,
                                iv: i.iv,
                                algorithm: e,
                                mode: i.mode,
                                padding: i.padding,
                                blockSize: e.blockSize,
                                formatter: n.format
                            });
                        },
                        decrypt: function(e, t, r, n) {
                            return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(r, n).finalize(t.ciphertext);
                        },
                        _parse: function(e, t) {
                            return "string" == typeof e ? t.parse(e, this) : e;
                        }
                    }),
                    t = (t.kdf = {}).OpenSSL = {
                        execute: function(e, t, r, n) {
                            return n || (n = o.random(8)), e = d.create({
                                keySize: t + r
                            }).compute(e, n), r = o.create(e.words.slice(t), 4 * r), e.sigBytes = 4 * t, h.create({
                                key: e,
                                iv: r,
                                salt: n
                            });
                        }
                    },
                    f = r.PasswordBasedCipher = p.extend({
                        cfg: p.cfg.extend({
                            kdf: t
                        }),
                        encrypt: function(e, t, r, n) {
                            return n = this.cfg.extend(n), r = n.kdf.execute(r, e.keySize, e.ivSize), n.iv = r.iv,
                                e = p.encrypt.call(this, e, t, r.key, n), e.mixIn(r), e;
                        },
                        decrypt: function(e, t, r, n) {
                            return n = this.cfg.extend(n), t = this._parse(t, n.format), r = n.kdf.execute(r, e.keySize, e.ivSize, t.salt),
                                n.iv = r.iv, p.decrypt.call(this, e, t, r.key, n);
                        }
                    });
            }(),
            function() {
                for (var e = n, t = e.lib.BlockCipher, r = e.algo, i = [], o = [], a = [], c = [], d = [], s = [], l = [], _ = [], u = [], h = [], p = [], f = 0; 256 > f; f++) p[f] = 128 > f ? f << 1 : f << 1 ^ 283;
                for (var z = 0, g = 0, f = 0; 256 > f; f++) {
                    var m = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4,
                        m = m >>> 8 ^ 255 & m ^ 99;
                    i[z] = m, o[m] = z;
                    var y = p[z],
                        w = p[y],
                        v = p[w],
                        S = 257 * p[m] ^ 16843008 * m;
                    a[z] = S << 24 | S >>> 8, c[z] = S << 16 | S >>> 16, d[z] = S << 8 | S >>> 24, s[z] = S,
                        S = 16843009 * v ^ 65537 * w ^ 257 * y ^ 16843008 * z, l[m] = S << 24 | S >>> 8,
                        _[m] = S << 16 | S >>> 16, u[m] = S << 8 | S >>> 24, h[m] = S, z ? (z = y ^ p[p[p[v ^ y]]],
                            g ^= p[p[g]]) : z = g = 1;
                }
                var L = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    r = r.AES = t.extend({
                        _doReset: function() {
                            for (var e = this._key, t = e.words, r = e.sigBytes / 4, e = 4 * ((this._nRounds = r + 6) + 1), n = this._keySchedule = [], o = 0; e > o; o++)
                                if (r > o) n[o] = t[o];
                                else {
                                    var a = n[o - 1];
                                    o % r ? r > 6 && 4 == o % r && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = a << 8 | a >>> 24,
                                        a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a],
                                        a ^= L[o / r | 0] << 24), n[o] = n[o - r] ^ a;
                                }
                            for (t = this._invKeySchedule = [], r = 0; e > r; r++) o = e - r, a = r % 4 ? n[o] : n[o - 4],
                                t[r] = 4 > r || 4 >= o ? a : l[i[a >>> 24]] ^ _[i[a >>> 16 & 255]] ^ u[i[a >>> 8 & 255]] ^ h[i[255 & a]];
                        },
                        encryptBlock: function(e, t) {
                            this._doCryptBlock(e, t, this._keySchedule, a, c, d, s, i);
                        },
                        decryptBlock: function(e, t) {
                            var r = e[t + 1];
                            e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, l, _, u, h, o),
                                r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
                        },
                        _doCryptBlock: function(e, t, r, n, i, o, a, c) {
                            for (var d = this._nRounds, s = e[t] ^ r[0], l = e[t + 1] ^ r[1], _ = e[t + 2] ^ r[2], u = e[t + 3] ^ r[3], h = 4, p = 1; d > p; p++) var f = n[s >>> 24] ^ i[l >>> 16 & 255] ^ o[_ >>> 8 & 255] ^ a[255 & u] ^ r[h++],
                                z = n[l >>> 24] ^ i[_ >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & s] ^ r[h++],
                                g = n[_ >>> 24] ^ i[u >>> 16 & 255] ^ o[s >>> 8 & 255] ^ a[255 & l] ^ r[h++],
                                u = n[u >>> 24] ^ i[s >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & _] ^ r[h++],
                                s = f,
                                l = z,
                                _ = g;
                            f = (c[s >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[_ >>> 8 & 255] << 8 | c[255 & u]) ^ r[h++],
                                z = (c[l >>> 24] << 24 | c[_ >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & s]) ^ r[h++],
                                g = (c[_ >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[s >>> 8 & 255] << 8 | c[255 & l]) ^ r[h++],
                                u = (c[u >>> 24] << 24 | c[s >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & _]) ^ r[h++],
                                e[t] = f, e[t + 1] = z, e[t + 2] = g, e[t + 3] = u;
                        },
                        keySize: 8
                    });
                e.AES = t._createHelper(r);
            }(), t.exports = n;
    }, {}],
    42: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./AppConfig"),
            i = e("./Net/HttpUnit"),
            o = e("./Config/AppSwitchConfig"),
            a = e("./Mgr/ViewMgr"),
            c = function() {
                function e() {}
                return Object.defineProperty(e, "dzcr_BannerInstance", {
                        get: function() {
                            return e.dzcr__banner;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.dzcr_Login = function(e, t) {
                        Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.login({
                            success: function(t) {
                                var r = t.data.token;
                                e(r), console.log("OPPO 登陆成功,获取到 token : " + r);
                                for (var n in t) console.log(n, t[n]);
                            },
                            fail: function(e) {
                                console.log("OPPO 登陆失败", e);
                                for (var t in e) console.log(t, e[t]);
                            }
                        });
                    }, e.dzcr_initAdService = function(e, t, r) {
                        Laya.Browser.window.qg.initAdService({
                            appId: n["default"].dzcr_AppID,
                            isDebug: !1,
                            success: function(t) {
                                console.log("oppo initAdService success"), e && e(t);
                            },
                            fail: function(e) {
                                console.log("oppo initAdService fail: ", e.code, e.msg), t && t(e);
                            },
                            complete: function(e) {
                                console.log("oppo initAdService complete"), r && r(e);
                            }
                        });
                    }, e.dzcr_showRewardedVideoAd = function(t, r) {
                        if (Laya.Browser.onQGMiniGame) {
                            var n = Laya.Browser.window.qg.createRewardedVideoAd({
                                posId: e.dzcr_adUnitId
                            });
                            n.onLoad(function() {
                                console.log("oppo 视频广告加载完成"), n.show();
                            }), n.onVideoStart(function() {
                                console.log("oppo 视频广告开始播放");
                            }), n.onClose(function(e) {
                                e.isEnded ? (console.log("oppo 视频广告观看 完成"), t(!0)) : (console.log("oppo 视频广告观看 未完成"),
                                    t(!1)), n.destroy();
                            }), n.onError(function(e) {
                                console.log("oppo 视频广告获取失败", e), n.destroy(), r();
                            }), n.load();
                        } else t(!0);
                    }, e.dzcr_navigateToMiniProgram = function(e, t, r, o, a, c) {
                        if (Laya.Browser.onQGMiniGame) {
                            console.log("OPPO 跳转游戏： " + e), i["default"].dzcr_reportExport(e, t, function(e) {
                                1 == e.code ? console.log("OPPO 导出上报成功") : console.log("OPPO 导出上报失败", e.msg);
                            }, function(e) {
                                console.log("OPPO 导出上报失败");
                                for (var t in e) console.log(t, e[t]);
                            });
                            for (var d = Date.now(); Date.now() - d <= 500;);
                            Laya.Browser.window.qg.navigateToMiniGame({
                                pkgName: e,
                                path: r,
                                extraData: {
                                    from: n["default"].dzcr_AppID
                                },
                                envVersion: "release",
                                success: function(e) {
                                    o && o(e);
                                },
                                fail: function(e) {
                                    a && a(e);
                                }
                            });
                        }
                    }, e.dzcr_showInterstitialAd = function(t, r) {
                        if (Laya.Browser.onQGMiniGame) {
                            var n = qg.createInsertAd({
                                posId: e.dzcr_InsAdUnitId
                            });
                            n.load(), n.onLoad(function() {
                                console.log("插屏广告加载完成"), n.show();
                            }), n.onShow(function() {
                                console.log("插屏广告显示成功");
                            }), n.onError(function(e) {
                                console.log("插屏广告拉取失败", e), n.destroy(), r && r();
                            });
                        } else t();
                    }, e.dzcr_showBannaer = function() {
                        if (e.dzcr__banner) return void e.dzcr__banner.show();
                        var t = qg.createBannerAd({
                            posId: e.dzcr_bannerAdUnitId
                        });
                        t.show(), e.dzcr__banner = t;
                    }, e.dzcr_hideBanner = function() {
                        e.dzcr__banner && e.dzcr__banner.hide();
                    }, e.dzcr_destroyBanner = function() {
                        e.dzcr__banner && e.dzcr__banner.destroy(), e.dzcr__banner = null;
                    }, e.dzcr_getLaunchOptionsSync = function() {
                        var e = {
                            query: "",
                            referrerInfo: {
                                package: "",
                                extraData: {
                                    appid: ""
                                }
                            }
                        };
                        if (Laya.Browser.onQGMiniGame) {
                            var t = Laya.Browser.window.qg.getLaunchOptionsSync();
                            return null != t && "" != t ? e = t : console.log("没有启动设置！！！"), e;
                        }
                        return e;
                    }, e.dzcr_share = function(e, t, r) {
                        e(!1);
                    }, e.dzcr_createDesktopIcon = function(e, t) {
                        Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.hasShortcutInstalled({
                            success: function(r) {
                                0 == r ? Laya.Browser.window.qg.installShortcut({
                                    success: function() {
                                        e && e();
                                    },
                                    fail: function(e) {
                                        t && t(), console.log("创建桌面图标失败！！！！", e);
                                        for (var r in e) console.log(r, e);
                                    },
                                    complete: function() {}
                                }) : (console.log("桌面图标已存在！！！！"), t && t());
                            },
                            fail: function(e) {
                                t && t(), console.log("判断桌面图标是否存在失败！！！", e);
                                for (var r in e) console.log(r, e);
                            },
                            complete: function() {}
                        }) : t && t();
                    }, e.dzcr_autoPopCreateDestopIcon = function(t, r) {
                        if (!Laya.Browser.onQGMiniGame) return void(null != r && r());
                        var n = Math.floor(100 * Math.random());
                        n <= o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_oppocfg.dzcr_addToDesktop ? e.dzcr_createDesktopIcon(t, r) : null != r && r();
                    }, e.dzcr_showNativeAd = function(e, t) {
                        return Laya.Browser.onQGMiniGame ? void(1 == o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_oppocfg.dzcr_yuanshengSwitch ? a["default"].dzcr_instance.dzcr_openView(a.dzcr_ViewDef.dzcr_OPPONativeView, null, function(t) {
                            null != e && e(t);
                        }) : null != t && t()) : void(null != t && t());
                    }, e.dzcr_adUnitId = "", e.dzcr_bannerAdUnitId = "", e.dzcr_InsAdUnitId = "", e.dzcr_OpenScreenAdUnitId = "",
                    e.dzcr_NativeAdId = "", e.dzcr__banner = null, e;
            }();
        r["default"] = c;
    }, {
        "./AppConfig": 2,
        "./Config/AppSwitchConfig": 5,
        "./Mgr/ViewMgr": 35,
        "./Net/HttpUnit": 39
    }],
    43: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_Login = function(e, t) {
                    Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.login({
                        success: function(t) {
                            if (t.code) {
                                var r = t.code;
                                e(r), console.log("登陆成功,获取到code : " + r);
                            }
                        }
                    });
                }, e.dzcr_onRewardedVideoAdLoad = function() {
                    console.log("激励视频 广告加载完成");
                }, e.dzcr_onRewardedVideoAdError = function(t) {
                    console.log("激励视频 广告加载失败" + t), e.dzcr__onRewardedVideoAdFailed && e.dzcr__onRewardedVideoAdFailed();
                }, e.dzcr_onRewardedVideoAdClose = function(t) {
                    t && t.isEnded || null == t ? (console.log("激励视频 已完整观看"), e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                        e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!1));
                }, e.dzcr_regRewardedVideoAdEvent = function(t) {
                    t.onLoad(e.dzcr_onRewardedVideoAdLoad), t.onError(e.dzcr_onRewardedVideoAdError),
                        t.onClose(e.dzcr_onRewardedVideoAdClose), e.dzcr__isRegRewardedVideoAdEvent = !0;
                }, e.dzcr_showRewardedVideoAd = function(t, r) {
                    if (Laya.Browser.onQQMiniGame) {
                        e.dzcr__onRewardedVideoAdClose = t, e.dzcr__onRewardedVideoAdFailed = r;
                        var n = Laya.Browser.window.qq.createRewardedVideoAd({
                            adUnitId: e.dzcr_adUnitId
                        });
                        e.dzcr__isRegRewardedVideoAdEvent || e.dzcr_regRewardedVideoAdEvent(n), n.load().then(function() {
                            var e = n.show();
                            e.then(function() {
                                return console.log("激励视频 广告显示成功");
                            }), e["catch"](function(e) {
                                n.load().then(function() {
                                    return n.show();
                                })["catch"](function(e) {
                                    console.log("激励视频 广告显示失败"), r && r();
                                });
                            });
                        })["catch"](function(e) {
                            console.log("激励视频 广告加载失败"), r && r();
                        });
                    } else t(!0);
                }, e.dzcr_navigateToMiniProgram = function(e, t, r, n, i) {
                    Laya.Browser.onQQMiniGame && (console.log("跳转游戏： " + e), Laya.Browser.window.qq.navigateToMiniProgram({
                        appId: e,
                        path: t,
                        extraData: {
                            foo: "bar"
                        },
                        envVersion: "release",
                        success: function(e) {
                            r && r(e);
                        },
                        fail: function(e) {
                            n && n(e);
                        },
                        complete: function(e) {
                            i && i(e);
                        }
                    }));
                }, e.dzcr_share = function(t, r, n) {
                    var i = this;
                    Laya.Browser.onQQMiniGame && (e.dzcr__onShow = function() {
                            Laya.Browser.window.qq.offShow(e.dzcr__onShow), e.dzcr__onShow = null;
                            Date.now() - i.dzcr__lastShareTime;
                            t && t(Date.now() - i.dzcr__lastShareTime > 2e3 ? !0 : !1);
                        }, Laya.Browser.window.qq.onShow(e.dzcr__onShow), e.dzcr__lastShareTime = Date.now(),
                        Laya.Browser.window.qq.shareAppMessage({
                            title: r,
                            imageUrl: n
                        }));
                }, e.dzcr_showInterstitialAd = function(t, r) {
                    if (Laya.Browser.onQQMiniGame) {
                        var n = Laya.Browser.window.qq.createInterstitialAd({
                                adUnitId: e.dzcr_InsAdUnitId
                            }),
                            i = function() {
                                console.log("插屏广告 加载完成"), n.show()["catch"](function(e) {
                                    console.log("插屏广告 显示失败 ：" + e), n.offLoad(i), n.offError(o), n.offClose(a), n.destroy(),
                                        r && r();
                                });
                            };
                        n.onLoad(i);
                        var o = function(e) {
                            console.log("插屏广告 加载失败" + e), n.offLoad(i), n.offError(o), n.offClose(a), n.destroy(),
                                r && r();
                        };
                        n.onError(o);
                        var a = function() {
                            console.log("插屏广告 关闭"), n.offLoad(i), n.offError(o), n.offClose(a), n.destroy(),
                                t && t();
                        };
                        n.onClose(a);
                    } else t();
                }, e.dzcr_LoadAppBoxAd = function(t, r) {
                    Laya.Browser.onQQMiniGame ? (e.dzcr_mAppboxAd = Laya.Browser.window.qq.createAppBox({
                        adUnitId: e.dzcr_AppBoxId
                    }), e.dzcr_mAppboxAd.load().then(function() {
                        console.log("盒子广告 加载完成");
                    }), e.dzcr_mAppboxAd.onError(function(e) {
                        console.log("盒子广告 加载失败" + e), r && r();
                    }), e.dzcr_onBoxAdClose = function() {
                        console.log("盒子广告 关闭"), t && t();
                    }, e.dzcr_mAppboxAd.onClose(e.dzcr_onBoxAdClose)) : t();
                }, e.dzcr_showAppBoxAd = function(t, r) {
                    e.dzcr_mAppboxAd ? (console.log("显示盒子广告"), e.dzcr_mAppboxAd.offClose(e.dzcr_onBoxAdClose),
                        e.dzcr_onBoxAdClose = function() {
                            console.log("盒子广告 关闭"), r && r();
                        }, e.dzcr_mAppboxAd.onClose(e.dzcr_onBoxAdClose), e.dzcr_mAppboxAd.show()["catch"](function(e) {
                            console.log("盒子广告 显示失败 ：" + e), t && t();
                        })) : e.dzcr_LoadAppBoxAd(r, t);
                }, e.dzcr_getLaunchOptionsSync = function() {
                    if (Laya.Browser.onQQMiniGame) {
                        var e = Laya.Browser.window.qq.getLaunchOptionsSync();
                        console.log("场景值 " + e.scene);
                        var t = JSON.stringify(e.query);
                        console.log("Query参数 " + t);
                        var r = e.query.key;
                        return console.log("Query参数：key " + r), console.log("ShareTicket " + e.shareTicket),
                            console.log("ReferrerInfo.appId " + e.referrerInfo.appId), console.log("ReferrerInfo.extraData " + e.referrerInfo.extraData),
                            e;
                    }
                    var n = {
                        scene: 1001,
                        query: "",
                        shareTicket: "",
                        appId: "",
                        extraData: ""
                    };
                    return n;
                }, e.dzcr_SetShareMenu = function(e, t, r, n, i) {
                    Laya.Browser.onQQMiniGame && (console.log("小游戏设置转发按钮"), Laya.Browser.window.qq.showShareMenu({
                        withShareTicket: !1,
                        success: r,
                        fail: n,
                        complete: i
                    }), Laya.Browser.window.qq.onShareAppMessage(function() {
                        return {
                            title: e,
                            imageUrl: t
                        };
                    }));
                }, e.dzcr_adUnitId = "", e.dzcr_bannerAdUnitId = "", e.dzcr_InsAdUnitId = "", e.dzcr_AppBoxId = "",
                e.dzcr__isRegRewardedVideoAdEvent = !1, e.dzcr__onRewardedVideoAdFailed = null,
                e.dzcr__onRewardedVideoAdClose = null, e.dzcr__onShow = null, e.dzcr__lastShareTime = 0,
                e.dzcr_mAppboxAd = null, e.dzcr_onBoxAdClose = null, e;
        }();
        r["default"] = n;
    }, {}],
    44: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Mgr/SceneMgr"),
            i = e("./FSM/FSM"),
            o = function() {
                function e(e) {
                    this.timeSpace = 2e3, this.role = e, this.optTime = Math.floor(Math.random() * this.timeSpace),
                        this.startTime = Laya.timer.currTimer;
                }
                return e.prototype.onUpdate = function() {
                    if (n["default"].bStartGame && this.role.m_fsm.CurState.name != i.StateName.Lock && Laya.timer.currTimer - this.startTime > this.optTime) {
                        var e = n["default"].getInstance().getPlayer(),
                            t = e.m_roleNode.transform.position,
                            r = Math.abs(this.role.m_roleNode.transform.position.z - t.z),
                            o = Math.floor(15 * Math.random());
                        o > r ? this.role.JumpCmd() : this.role.StopCmd(), this.startTime = Laya.timer.currTimer,
                            this.optTime = Math.floor(Math.random() * this.timeSpace);
                    }
                }, e;
            }();
        r["default"] = o;
    }, {
        "../Mgr/SceneMgr": 32,
        "./FSM/FSM": 45
    }],
    45: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n;
        ! function(e) {
            e.Idle = "Idle", e.Lock = "Lock", e.Climb = "Climb", e.Downhill = "Downhill", e.Fly = "Fly",
                e.Win = "Win";
        }(n = r.StateName || (r.StateName = {}));
        var i = function() {
            function e(e) {
                this.m_states = {}, this.m_role = e;
            }
            return Object.defineProperty(e.prototype, "CurState", {
                get: function() {
                    return this.m_curState;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.AddState = function(e) {
                e && (e.fsm = this, this.m_states[e.name] = e);
            }, e.prototype.Switch = function(e, t) {
                void 0 === t && (t = null);
                var r = this.m_curState,
                    n = this.m_states[e];
                n && (r && r.onExit(), this.m_curState = n, n.role = this.m_role, n.onEnter(t));
            }, e.prototype.Update = function() {
                this.m_curState && this.m_curState.onUpdate();
            }, e;
        }();
        r["default"] = i;
        var o = function() {
            function e() {}
            return e.prototype.onEnter = function(e) {
                this.isMouseDown = e.mouseState, this.bJump = e.bJump, this.role.m_isSelf && (Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDown),
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onUp));
            }, e.prototype.onUpdate = function() {}, e.prototype.onExit = function() {
                this.role.m_isSelf && (Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onDown),
                    Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onUp)), this.isMouseDown = !1, this.bJump = !1;
            }, e.prototype.onDown = function() {}, e.prototype.onUp = function() {}, e;
        }();
        r.State = o;
    }, {}],
    46: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./FSM"),
            i = e("../../Mgr/GameMgr"),
            o = e("../../Mgr/SceneMgr"),
            a = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.name = n.StateName.Idle, t;
                }
                return __extends(t, e), t.prototype.onEnter = function(t) {
                    e.prototype.onEnter.call(this, t), this.isMouseDown || this.role.StopRun();
                }, t.prototype.onUpdate = function() {
                    e.prototype.onUpdate.call(this);
                }, t.prototype.onExit = function() {
                    e.prototype.onExit.call(this);
                }, t;
            }(n.State);
        r.IdleState = a;
        var c = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = n.StateName.Lock, t;
            }
            return __extends(t, e), t.prototype.onEnter = function(e) {
                this.role.StopRun(), this.role.m_legNode.active = !1, this.role.m_ani.enabled = !1,
                    this.role.m_roleNode.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this.role.m_rigidbody.angularDamping = 1;
            }, t.prototype.onUpdate = function() {
                e.prototype.onUpdate.call(this), this.role.m_rigidbody.angularDamping = 1, this.role.m_roleNode.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            }, t.prototype.onExit = function() {
                this.isMouseDown = !1, this.bJump = !1, this.role.m_rigidbody.angularDamping = i["default"].cfg.AngularDamping;
            }, t;
        }(n.State);
        r.LockState = c;
        var d = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = n.StateName.Climb, t;
            }
            return __extends(t, e), t.prototype.onEnter = function(t) {
                e.prototype.onEnter.call(this, t), this.bRun = !1, this.bJump && Laya.timer.currTimer - this.startJumpTime > 300 ? this.role.Jump(new Laya.Vector3(this.role.m_downBoxRotX, 0, 0), !0) : (this.bRun = !0,
                    this.role.Run(new Laya.Vector3(this.role.m_downBoxRotX, 0, 0))), this.startJumpTime = Laya.timer.currTimer;
            }, t.prototype.onUpdate = function() {
                e.prototype.onUpdate.call(this);
                var t = this.role.m_downBoxRotX;
                if (this.role.m_hitDistance > i["default"].cfg.ClimbHitDistance && t < i["default"].cfg.DownhillSlope) {
                    var r = {};
                    return r.mouseState = this.isMouseDown, r.bJump = !1, void this.fsm.Switch(n.StateName.Downhill, r);
                }
                this.role.m_rigidbody.linearVelocity = new Laya.Vector3(this.role.m_rigidbody.linearVelocity.x, this.role.m_rigidbody.linearVelocity.y, Math.cos(2 * Math.PI / 360 * t) * i["default"].cfg.ClimbSpeed);
                var o = Laya.timer.currTimer - this.startJumpTime;
                o > 1e3 * this.role.m_ani.getCurrentAnimatorPlayState().duration && !this.bRun && (this.role.Run(new Laya.Vector3(t, 0, 0)),
                    this.bRun = !0), this.bRun && 1 == this.role.m_legNode.active && (this.role.m_ani.speed = Math.abs(Math.floor(Laya.Vector3.scalarLength(this.role.m_rigidbody.linearVelocity)) / i["default"].cfg.AniSpeedRate));
                var a = new Laya.Vector3(t, 0, 0);
                Math.abs(this.role.m_roleNode.transform.rotationEuler.x - t) < 90 && Laya.Vector3.lerp(this.role.m_roleNode.transform.rotationEuler, a, .1, a),
                    this.role.m_roleNode.transform.rotationEuler = a;
            }, t.prototype.onExit = function() {
                this.isMouseDown || this.role.StopRun(), e.prototype.onExit.call(this), this.startJumpTime = Laya.timer.currTimer;
            }, t;
        }(n.State);
        r.ClimbState = d;
        var s = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = n.StateName.Downhill, t;
            }
            return __extends(t, e), t.prototype.onEnter = function(t) {
                this.bRun = !1, e.prototype.onEnter.call(this, t), this.startTime = Laya.timer.currTimer,
                    this.isMouseDown = t, this.bJump && Laya.timer.currTimer - this.startJumpTime > 300 ? this.role.Jump(new Laya.Vector3(this.role.m_downBoxRotX, 0, 0), !1) : (this.bRun = !0,
                        this.role.Run(new Laya.Vector3(this.role.m_downBoxRotX, 0, 0))), this.startJumpTime = Laya.timer.currTimer;
            }, t.prototype.onUpdate = function() {
                var t = this.role.m_downBoxRotX;
                if (e.prototype.onUpdate.call(this), this.role.m_hitDistance < i["default"].cfg.ClimbHitDistance || t >= i["default"].cfg.DownhillSlope) {
                    var r = {};
                    return r.mouseState = this.isMouseDown, r.bJump = !1, void this.fsm.Switch(n.StateName.Climb, r);
                }
                var o = Laya.timer.currTimer - this.startJumpTime;
                if (o > 1e3 * this.role.m_ani.getCurrentAnimatorPlayState().duration && !this.bRun && (this.role.Run(new Laya.Vector3(t, 0, 0)),
                        this.bRun = !0), this.bRun && 1 == this.role.m_legNode.active && (this.role.m_ani.speed = Math.abs(Math.floor(Laya.Vector3.scalarLength(this.role.m_rigidbody.linearVelocity)) / i["default"].cfg.AniSpeedRate)),
                    o > 200) {
                    var a = new Laya.Vector3(this.role.m_rigidbody.linearVelocity.x, this.role.m_rigidbody.linearVelocity.y, Math.cos(2 * Math.PI / 360 * t) * i["default"].cfg.ClimbSpeed),
                        c = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.lerp(this.role.m_rigidbody.linearVelocity, a, .05, c), this.role.m_rigidbody.linearVelocity = c;
                }
                var c = new Laya.Vector3(t, 0, 0);
                Math.abs(this.role.m_roleNode.transform.rotationEuler.x - t) < 90 && Laya.Vector3.lerp(this.role.m_roleNode.transform.rotationEuler, c, .1, c),
                    this.role.m_roleNode.transform.rotationEuler = c;
            }, t.prototype.onExit = function() {
                this.isMouseDown || this.role.StopRun(), this.startJumpTime = Laya.timer.currTimer,
                    e.prototype.onExit.call(this);
            }, t;
        }(n.State);
        r.DownhillState = s;
        var l = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = n.StateName.Fly, t;
            }
            return __extends(t, e), t.prototype.onEnter = function(t) {
                e.prototype.onEnter.call(this, t), this.isMouseDown && (this.role.m_ani.enabled = !0,
                    this.role.ShowLegs(i["default"].cfg.AniFly));
            }, t.prototype.onUpdate = function() {
                e.prototype.onUpdate.call(this), this.role.m_parachute.active ? this.role.m_rigidbody.linearVelocity.y < 0 && this.role.m_rigidbody.applyForce(new Laya.Vector3(0, i["default"].cfg.ParachueUp, 0)) : this.role.m_rigidbody.applyTorque(new Laya.Vector3(i["default"].cfg.FlyAngularVelocityX, 0, 0)),
                    this.role.m_rigidbody.linearVelocity.z > i["default"].cfg.FlyLinearVelocityZ && (this.role.m_rigidbody.linearVelocity = new Laya.Vector3(this.role.m_rigidbody.linearVelocity.x, this.role.m_rigidbody.linearVelocity.y, i["default"].cfg.FlyLinearVelocityZ));
            }, t.prototype.onDown = function() {
                e.prototype.onDown.call(this), this.role.ShowLegs(i["default"].cfg.AniFly), this.role.ShowParachute();
            }, t.prototype.onUp = function() {
                e.prototype.onUp.call(this), this.role.HideLegs(), this.role.HideParachute();
            }, t.prototype.onExit = function() {
                e.prototype.onExit.call(this), this.role.HideParachute();
            }, t;
        }(n.State);
        r.FlyState = l;
        var _ = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = n.StateName.Win, t;
            }
            return __extends(t, e), t.prototype.onEnter = function(t) {
                e.prototype.onEnter.call(this, t), this.role.m_legNode.active = !0, o["default"].getInstance().endFx.active = !0,
                    this.role.HideLegs();
            }, t.prototype.onUpdate = function() {
                e.prototype.onUpdate.call(this);
            }, t.prototype.onExit = function() {
                e.prototype.onExit.call(this), this.role.m_legNode.active = !1, o["default"].getInstance().endFx.active = !1,
                    this.role.HideLegs();
            }, t;
        }(n.State);
        r.WinState = _;
    }, {
        "../../Mgr/GameMgr": 30,
        "../../Mgr/SceneMgr": 32,
        "./FSM": 45
    }],
    47: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./Role"),
            i = e("./FSM/FSM"),
            o = e("./FSM/States"),
            a = e("../Mgr/SceneMgr"),
            c = e("../Mgr/GameMgr"),
            d = e("./AI"),
            s = e("../Mgr/LevelMgr"),
            l = e("../Mgr/GameMgr"),
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.m_curCmd = "", t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        e.prototype.onAwake.call(this), console.log("ai角色初始化");
                    }, t.prototype.onStart = function() {
                        this.m_fsm = new i["default"](this), this.m_ai = new d["default"](this), this.onBegin(),
                            this.player = a["default"].getInstance().getPlayer();
                    }, t.prototype.onBegin = function() {
                        this.m_fsm.AddState(new o.IdleState()), this.m_fsm.AddState(new o.LockState()),
                            this.m_fsm.AddState(new o.ClimbState()), this.m_fsm.AddState(new o.DownhillState()),
                            this.m_fsm.AddState(new o.FlyState()), this.m_fsm.AddState(new o.WinState());
                        var e = {};
                        e.mouseState = !1, e.bJump = !1, this.m_fsm.Switch(i.StateName.Idle, e), this.m_legNode.active = !1;
                    }, t.prototype.JumpCmd = function() {
                        if (a["default"].bStartGame && this.m_fsm.CurState.name != i.StateName.Lock) {
                            if (this.m_fsm.CurState.name == i.StateName.Fly) return this.ShowLegs(c["default"].cfg.AniFly),
                                void this.ShowParachute();
                            if ("JumpCmd" != this.m_curCmd) {
                                this.m_curCmd = "JumpCmd";
                                var e = {};
                                e.mouseState = !0, e.bJump = !0, this.m_hitDistance && this.m_downBoxRotX && (this.m_hitDistance < c["default"].cfg.ClimbHitDistance || this.m_downBoxRotX >= c["default"].cfg.DownhillSlope ? this.m_fsm.Switch(i.StateName.Climb, e) : this.m_fsm.Switch(i.StateName.Downhill, e));
                            }
                        }
                    }, t.prototype.StopCmd = function() {
                        if (a["default"].bStartGame && this.m_fsm.CurState.name != i.StateName.Lock) {
                            if (this.m_fsm.CurState.name == i.StateName.Fly) return this.HideLegs(), void this.HideParachute();
                            if ("StopCmd" != this.m_curCmd) {
                                this.m_curCmd = "StopCmd";
                                var e = {};
                                e.mouseState = !1, e.bJump = !1, this.m_fsm.Switch(i.StateName.Idle, e);
                            }
                        }
                    }, t.prototype.onUpdate = function() {
                        a["default"].bStartGame && (e.prototype.onUpdate.call(this), this.m_ai.onUpdate(),
                            this.m_roleNode.transform.position.z - this.player.m_roleNode.transform.position.z > 100 && (this.m_roleNode.transform.position = new Laya.Vector3(this.m_roleNode.transform.position.x, this.player.m_roleNode.transform.position.y + l["default"].cfg.ResetAIPositionY, this.player.m_roleNode.transform.position.z + l["default"].cfg.ResetAIPositionZ),
                                console.log(this.m_roleNode.name + " 重置位置 ")), this.m_hitForwardResult = new Laya.HitResult(),
                            this.m_hitDownResult = new Laya.HitResult());
                    }, t.prototype.onLateUpdate = function() {}, t.prototype.onTriggerEnter = function(t) {
                        if (e.prototype.onTriggerEnter.call(this, t), a["default"].bStartGame) {
                            t.owner;
                            if ("end" == t.owner.name) {
                                s["default"].rankRecordNum = s["default"].rankRecordNum + 1;
                                var r = {};
                                r.mouseState = this.m_isMouseDown, r.bJump = !1, this.m_fsm.Switch(i.StateName.Win, r);
                            }
                        }
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t;
            }(n["default"]);
        r["default"] = _;
    }, {
        "../Mgr/GameMgr": 30,
        "../Mgr/LevelMgr": 31,
        "../Mgr/SceneMgr": 32,
        "./AI": 44,
        "./FSM/FSM": 45,
        "./FSM/States": 46,
        "./Role": 49
    }],
    48: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Mgr/CameraMgr"),
            i = e("./Role"),
            o = e("./FSM/FSM"),
            a = e("./FSM/States"),
            c = e("../Mgr/SceneMgr"),
            d = e("../Mgr/GameMgr"),
            s = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        e.prototype.onAwake.call(this), console.log("玩家初始化"), this.m_isSelf = !0, n["default"].getInstance().setTarget(this);
                    }, t.prototype.onStart = function() {
                        this.m_fsm = new o["default"](this), this.onBegin();
                    }, t.prototype.onBegin = function() {
                        this.m_fsm.AddState(new a.IdleState()), this.m_fsm.AddState(new a.LockState()),
                            this.m_fsm.AddState(new a.ClimbState()), this.m_fsm.AddState(new a.DownhillState()),
                            this.m_fsm.AddState(new a.FlyState()), this.m_fsm.AddState(new a.WinState());
                        var e = {};
                        e.mouseState = !1, e.bJump = !1, this.m_fsm.Switch(o.StateName.Idle, e), this.m_legNode.active = !1;
                    }, t.prototype.onDown = function() {
                        if (c["default"].bStartGame && (e.prototype.onDown.call(this), this.m_fsm.CurState.name != o.StateName.Fly && this.m_fsm.CurState.name != o.StateName.Lock)) {
                            var t = {};
                            t.mouseState = !0, t.bJump = !0, this.m_downDistance < d["default"].cfg.DownHitDistance && (this.m_hitDistance < d["default"].cfg.ClimbHitDistance || this.m_downBoxRotX >= d["default"].cfg.DownhillSlope) ? this.m_fsm.Switch(o.StateName.Climb, t) : this.m_fsm.Switch(o.StateName.Downhill, t);
                        }
                    }, t.prototype.onUp = function() {
                        if (c["default"].bStartGame && (e.prototype.onUp.call(this), this.m_fsm.CurState.name != o.StateName.Fly && this.m_fsm.CurState.name != o.StateName.Lock)) {
                            var t = {};
                            t.mouseState = !1, t.bJump = !1, this.m_fsm.Switch(o.StateName.Idle, t);
                        }
                    }, t.prototype.onUpdate = function() {
                        c["default"].bStartGame && (e.prototype.onUpdate.call(this), this.m_hitForwardResult = new Laya.HitResult(),
                            this.m_hitDownResult = new Laya.HitResult());
                    }, t.prototype.onLateUpdate = function() {
                        e.prototype.onLateUpdate.call(this), n["default"].getInstance().onCameraUpdate();
                    }, t.prototype.onTriggerEnter = function(t) {
                        e.prototype.onTriggerEnter.call(this, t);
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t;
            }(i["default"]);
        r["default"] = s;
    }, {
        "../Mgr/CameraMgr": 29,
        "../Mgr/GameMgr": 30,
        "../Mgr/SceneMgr": 32,
        "./FSM/FSM": 45,
        "./FSM/States": 46,
        "./Role": 49
    }],
    49: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./FSM/FSM"),
            i = e("../Mgr/GameMgr"),
            o = e("../Mgr/SceneMgr"),
            a = e("../Mgr/LevelMgr"),
            c = e("../Event/EventMgr"),
            d = e("../Event/EventDef"),
            s = e("../Mgr/VibrateMgr"),
            l = e("../Mgr/ViewMgr"),
            _ = e("../Mgr/CameraMgr"),
            u = e("../Mgr/SoundMgr"),
            h = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.m_hitForwardResult = new Laya.HitResult(), t.m_hitDownResult = new Laya.HitResult(),
                        t.m_isMouseDown = !1, t.m_isSelf = !1, t.m_isFirst = !1, t.m_isCanShake = !1, t.m_rankNum = 0,
                        t.m_isSelf = !1, Laya.stage.on(Laya.Event.MOUSE_DOWN, t, t.onDown), Laya.stage.on(Laya.Event.MOUSE_UP, t, t.onUp),
                        t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "Rigidbody", {
                    get: function() {
                        return this.m_rigidbody;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onAwake = function() {
                    console.log("role awake --- "), this.m_roleNode = this.owner, this.m_rigidbody = this.m_roleNode.getComponent(Laya.Rigidbody3D),
                        this.m_legNode = this.m_roleNode.getChildByName("player"), this.m_ani = this.m_legNode.getComponent(Laya.Animator),
                        this.m_rigidbody.linearDamping = i["default"].cfg.LinearDamping, this.m_rigidbody.linearFactor = new Laya.Vector3(0, 1, 1),
                        this.m_trail = this.owner.getChildByName("trail"), this.m_trail.active = !1, this.m_speed_start = this.owner.getChildByName("speed_start"),
                        this.m_speed_start.active = !1, this.m_parachute = this.owner.getChildByName("pr_jls"),
                        this.m_parachute.active = !1, this.m_sprintFx = this.owner.getChildByName("sprintFx"),
                        this.m_sprintFx.active = !1, this.m_rigidbody.angularFactor = new Laya.Vector3(i["default"].cfg.AngularFactor, 0, 0),
                        this.m_rigidbody.restitution = i["default"].cfg.Restitution, this.m_rigidbody.friction = i["default"].cfg.Friction,
                        this.m_rigidbody.mass = i["default"].cfg.Mass, a["default"].ShowDebugLine && (this.m_line = this.owner.scene.addChild(new Laya.PixelLineSprite3D(2)),
                            this.m_line.addLine(new Laya.Vector3(), new Laya.Vector3(), Laya.Color.RED, Laya.Color.RED),
                            this.m_line.addLine(new Laya.Vector3(), new Laya.Vector3(), Laya.Color.RED, Laya.Color.RED)),
                        this.m_roleStartPos = this.m_roleNode.transform.position.clone(), this.m_roleStartRot = this.m_roleNode.transform.localRotationEuler.clone(),
                        this.m_scene = this.owner.scene;
                }, t.prototype.Jump = function(e, t) {
                    this.m_legNode.active = !0, this.m_ani.enabled = !0, this.m_roleNode.transform.rotationEuler = e,
                        t ? this.m_rigidbody.applyImpulse(new Laya.Vector3(i["default"].cfg.StartPowerX, i["default"].cfg.StartPowerY, i["default"].cfg.StartPowerZ)) : this.m_rigidbody.applyImpulse(new Laya.Vector3(i["default"].cfg.StartClimbPowerX, i["default"].cfg.StartClimbPowerY, i["default"].cfg.StartClimbPowerZ)),
                        this.m_rigidbody.angularDamping = 1, this.m_ani.play(i["default"].cfg.AniJump),
                        Laya.Tween.clearAll(this.m_legNode.transform), Laya.Tween.to(this.m_legNode.transform, {
                            localScaleX: i["default"].cfg.LegsScale,
                            localScaleY: i["default"].cfg.LegsScale,
                            localScaleZ: i["default"].cfg.LegsScale
                        }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                            this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.LegSphereRadius);
                        })), this.m_isSelf && s["default"].dzcr_vibrateShort();
                }, t.prototype.Run = function(e) {
                    this.m_legNode.active = !0, this.m_ani.enabled = !0, this.m_roleNode.transform.rotationEuler = e,
                        this.m_rigidbody.angularDamping = 1, this.m_ani.play(i["default"].cfg.AniRun), this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.LegSphereRadius),
                        Laya.Tween.clearAll(this.m_legNode.transform), Laya.Tween.to(this.m_legNode.transform, {
                            localScaleX: i["default"].cfg.LegsScale,
                            localScaleY: i["default"].cfg.LegsScale,
                            localScaleZ: i["default"].cfg.LegsScale
                        }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {}));
                }, t.prototype.StopRun = function() {
                    o["default"].bStartGame ? (Laya.Tween.clearAll(this.m_legNode.transform), Laya.Tween.to(this.m_legNode.transform, {
                        localScaleX: 0,
                        localScaleY: 0,
                        localScaleZ: 0
                    }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                        this.m_legNode.active = !1, this.m_ani.enabled = !1, this.m_rigidbody.angularDamping = i["default"].cfg.AngularDamping,
                            this.m_rigidbody.applyTorque(new Laya.Vector3(i["default"].cfg.StopCtrlRotateX, 0, 0)),
                            this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.NoLegSphereRadius);
                    }))) : (this.m_legNode.active = !1, this.m_ani.enabled = !1, this.m_rigidbody.angularDamping = i["default"].cfg.AngularDamping,
                        this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.NoLegSphereRadius));
                }, t.prototype.ShowLegs = function(e) {
                    Laya.Tween.clearAll(this.m_legNode.transform), this.m_roleNode.transform.rotationEuler = new Laya.Vector3(0, 0, 0),
                        this.m_rigidbody.angularDamping = 1, this.m_legNode.active = !0, this.m_ani.enabled = !0,
                        this.m_ani.play(e), this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.LegSphereRadius),
                        Laya.Tween.to(this.m_legNode.transform, {
                            localScaleX: i["default"].cfg.LegsScale,
                            localScaleY: i["default"].cfg.LegsScale,
                            localScaleZ: i["default"].cfg.LegsScale
                        }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                            this.m_legNode.transform.localScaleX = i["default"].cfg.LegsScale, this.m_legNode.transform.localScaleY = i["default"].cfg.LegsScale,
                                this.m_legNode.transform.localScaleZ = i["default"].cfg.LegsScale;
                        }));
                }, t.prototype.HideLegs = function() {
                    Laya.Tween.clearAll(this.m_legNode.transform), Laya.Tween.to(this.m_legNode.transform, {
                        localScaleX: 0,
                        localScaleY: 0,
                        localScaleZ: 0
                    }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                        this.m_rigidbody.angularDamping = i["default"].cfg.AngularDamping, this.m_rigidbody.applyTorque(new Laya.Vector3(i["default"].cfg.StopCtrlRotateX, 0, 0)),
                            this.m_rigidbody.colliderShape = new Laya.SphereColliderShape(i["default"].cfg.NoLegSphereRadius),
                            this.m_ani.enabled = !1, this.m_legNode.active = !1;
                    }));
                }, t.prototype.ShowParachute = function() {
                    Laya.Tween.clearAll(this.m_parachute), this.m_parachute.active = !0, this.m_parachute.transform.scale = new Laya.Vector3(0, 0, 0),
                        Laya.Tween.to(this.m_parachute.transform, {
                            localScaleX: 1,
                            localScaleY: 1,
                            localScaleZ: 1
                        }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, function() {}));
                }, t.prototype.HideParachute = function() {
                    Laya.Tween.clearAll(this.m_parachute), 1 == this.m_parachute.active && Laya.Tween.to(this.m_parachute.transform, {
                        localScaleX: 0,
                        localScaleY: 0,
                        localScaleZ: 0
                    }, 100, Laya.Ease.linearOut, Laya.Handler.create(this, function() {
                        this.m_parachute.active = !1;
                    }));
                }, t.prototype.onBegin = function() {}, t.prototype.onEnable = function() {}, t.prototype.onUpdate = function() {
                    if (o["default"].bStartGame) {
                        var e = Laya.Vector3.scalarLength(this.m_rigidbody.linearVelocity);
                        if (this.m_isSelf && (e > i["default"].cfg.FxSpeedMax ? (_["default"].getInstance().speedFxMax.active = !0,
                                _["default"].getInstance().speedFx.active = !1) : e > i["default"].cfg.FxSpeed ? (_["default"].getInstance().speedFx.active = !0,
                                _["default"].getInstance().speedFxMax.active = !1) : (_["default"].getInstance().speedFx.active = !1,
                                _["default"].getInstance().speedFxMax.active = !1)), e > i["default"].cfg.TrailSpeed && this.m_fsm.CurState.name != n.StateName.Lock ? this.m_trail.active = !0 : this.m_trail.active = !1,
                            this.m_fsm.Update(), this.m_fsm.CurState.name != n.StateName.Lock) {
                            var t = new Laya.Vector3(),
                                r = new Laya.Vector3(),
                                c = new Laya.Vector3(0, i["default"].cfg.ForwardY, i["default"].cfg.ForwardZ),
                                d = new Laya.Vector3(0, i["default"].cfg.DirDown, 0);
                            Laya.Vector3.add(this.m_roleNode.transform.position, c, t), Laya.Vector3.add(this.m_roleNode.transform.position, d, r),
                                a["default"].ShowDebugLine && (this.m_line.setLine(0, this.m_roleNode.transform.position, t, Laya.Color.RED, Laya.Color.RED),
                                    this.m_line.setLine(1, this.m_roleNode.transform.position, r, Laya.Color.RED, Laya.Color.RED));
                            var s = new Laya.Ray(this.m_roleNode.transform.position, c),
                                l = new Laya.Ray(this.m_roleNode.transform.position, d);
                            if (this.m_scene.physicsSimulation.rayCast(s, this.m_hitForwardResult, 100), this.m_hitForwardResult.succeeded && (this.m_hitDistance = Laya.Vector3.distance(this.m_roleNode.transform.position, this.m_hitForwardResult.point),
                                    this.m_forwardDistance = Laya.Vector3.distance(this.m_roleNode.transform.position, this.m_hitForwardResult.point)),
                                this.m_scene.physicsSimulation.rayCast(l, this.m_hitDownResult, 100), this.m_hitDownResult.succeeded) {
                                var u = this.m_hitDownResult.collider.owner,
                                    h = u.parent,
                                    p = this.m_hitDownResult.collider;
                                if (u.transform && h.transform && 0 == p.isTrigger) {
                                    if (this.m_downBoxRotX = u.transform.localRotationEulerX + h.transform.localRotationEulerX,
                                        180 == Math.abs(h.transform.localRotationEulerY) && (this.m_downBoxRotX *= -1),
                                        this.m_downDistance = Laya.Vector3.distance(this.m_roleNode.transform.position, this.m_hitDownResult.point),
                                        this.m_downDistance > i["default"].cfg.DownHitDistance && this.m_forwardDistance > i["default"].cfg.DownHitDistance) {
                                        if (this.m_fsm.CurState.name != n.StateName.Fly) {
                                            var f = {};
                                            f.mouseState = this.m_isMouseDown, f.bJump = !1, this.m_fsm.Switch(n.StateName.Fly, f),
                                                this.m_isSelf && (this.m_isCanShake = !0);
                                        }
                                    } else if (this.m_fsm.CurState.name == n.StateName.Fly) {
                                        var f = {};
                                        f.mouseState = this.m_isMouseDown, f.bJump = !1, this.m_isMouseDown ? this.m_hitDistance < i["default"].cfg.ClimbHitDistance || this.m_downBoxRotX >= i["default"].cfg.DownhillSlope ? this.m_fsm.Switch(n.StateName.Climb, f) : this.m_fsm.Switch(n.StateName.Downhill, f) : this.m_fsm.Switch(n.StateName.Idle, f);
                                    }
                                } else this.m_downBoxRotX = 0;
                            }
                        }
                    }
                }, t.prototype.onTriggerBuff = function(e, t, r) {
                    if (-1 != t.search("speed")) {
                        var o = {};
                        o.mouseState = this.m_isMouseDown, o.bJump = !1, this.m_fsm.Switch(n.StateName.Idle, o),
                            this.HideLegs(), this.m_rigidbody.clearForces();
                        var c = new Laya.Vector3(0, Math.abs(Math.sin(2 * Math.PI / 360 * this.m_downBoxRotX) * i["default"].cfg.SpeeedBuffPower), -(Math.cos(2 * Math.PI / 360 * this.m_downBoxRotX) * i["default"].cfg.SpeeedBuffPower));
                        this.m_rigidbody.applyImpulse(c), this.m_roleNode.transform.rotationEuler = new Laya.Vector3(this.m_downBoxRotX, 0, 0),
                            this.m_rigidbody.angularDamping = 1, this.m_speed_start.active = !1, this.m_speed_start.active = !0;
                        var d = this;
                        Laya.timer.once(1e3, d, function() {
                            d.m_rigidbody.angularDamping = i["default"].cfg.AngularDamping;
                        }), this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("speed");
                    }
                    if (-1 != t.search("jump") && (this.m_rigidbody.clearForces(), this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.JumpBuffPowerY, i["default"].cfg.JumpBuffPowerZ)),
                            a["default"].getInstance().playSpringAni(r), this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("jump")), -1 != t.search("sJump") && (this.m_rigidbody.clearForces(), this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.SJumpBuffPowerY, i["default"].cfg.SJumpBuffPowerZ)),
                            a["default"].getInstance().playSpringAni(r), this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("jump")), -1 != t.search("thpd") && (this.m_rigidbody.clearForces(), this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.THPD_Y, i["default"].cfg.THPD_Z)),
                            this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("jump")), -1 != t.search("dpht") && (this.m_rigidbody.clearForces(),
                            this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.DPHT_Y, i["default"].cfg.DPHT_Z)),
                            this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("jump")), -1 != t.search("lock")) {
                        this.m_rigidbody.clearForces(), this.HideLegs();
                        var o = {};
                        o.mouseState = !1, o.bJump = !1, this.m_fsm.Switch(n.StateName.Lock, o), e.active = !1,
                            this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.StartPowerY, i["default"].cfg.StartPowerZ));
                        var s = this;
                        Laya.timer.once(i["default"].cfg.THPDLockTime, s, function() {
                            var e = {};
                            e.mouseState = s.m_isMouseDown, e.bJump = !1, s.m_fsm.Switch(n.StateName.Idle, e);
                        });
                    }
                    if (-1 != t.search("pipeIn")) {
                        var o = {};
                        o.mouseState = this.m_isMouseDown, o.bJump = !1, this.m_fsm.Switch(n.StateName.Idle, o),
                            this.HideLegs(), this.m_rigidbody.clearForces(), this.m_rigidbody.linearVelocity = new Laya.Vector3(0, i["default"].cfg.PIPE_SPEED_IN_Y, i["default"].cfg.PIPE_SPEED_IN_Z),
                            this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("speed");
                    } -
                    1 != t.search("pipeStay") && (this.HideLegs(), this.HideParachute(), this.m_rigidbody.clearForces(),
                        this.m_rigidbody.linearVelocity = new Laya.Vector3(0, i["default"].cfg.PIPE_SPEED_STAY_Y, i["default"].cfg.PIPE_SPEED_STAY_Z),
                        this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("speed")), -1 != t.search("pipeOut") && (this.m_rigidbody.clearForces(),
                        this.HideLegs(), this.HideParachute(), this.m_rigidbody.applyImpulse(new Laya.Vector3(0, i["default"].cfg.PIPE_SPEED_OUT_Y, i["default"].cfg.PIPE_SPEED_OUT_Z)),
                        this.m_isSelf && u["default"].dzcr_instance.dzcr_playSound("speed"));
                }, t.prototype.onCollisionEnter = function(e) {
                    this.m_isCanShake && this.m_isSelf && 0 == this.m_ani.enabled && (this.m_isCanShake = !1,
                        s["default"].dzcr_vibrateShort());
                }, t.prototype.onTriggerEnter = function(e) {
                    if ("glass1" == e.owner.name ? (this.m_rigidbody.linearDamping = this.m_rigidbody.linearDamping + .2,
                            console.log("撞到第一个节点")) : "glass2" == e.owner.name ? (this.m_rigidbody.linearDamping = this.m_rigidbody.linearDamping + .2,
                            console.log("撞到第二个节点")) : "glass3" == e.owner.name ? (this.m_rigidbody.linearDamping = this.m_rigidbody.linearDamping + .2,
                            console.log("撞到第三个节点")) : "glass4" == e.owner.name ? (this.m_rigidbody.linearDamping = this.m_rigidbody.linearDamping + .2,
                            console.log("撞到第四个节点")) : "glass5" == e.owner.name && (this.m_rigidbody.linearDamping = this.m_rigidbody.linearDamping + .2,
                            console.log("撞到第五个节点")), o["default"].bStartGame) {
                        var t = e.owner;
                        if (this.onTriggerBuff(t, e.owner.name, e.owner.parent), "roll" == e.owner.name) {
                            this.m_isFirst = !0;
                            var r = {};
                            r.mouseState = this.m_isMouseDown, r.bJump = !1, this.m_fsm.Switch(n.StateName.Win, r),
                                a["default"].rankRecordNum = a["default"].rankRecordNum + 1, this.m_rankNum = a["default"].rankRecordNum,
                                this.m_isSelf && (l["default"].dzcr_instance.dzcr_closeView(l.dzcr_ViewDef.dzcr_InGameView),
                                    1 == this.m_rankNum ? c["default"].dzcr_instance.dzcr_dispatch(d.dzcr_EventDef.dzcr_Game_OnLevelComplate, {
                                        result: 1
                                    }) : c["default"].dzcr_instance.dzcr_dispatch(d.dzcr_EventDef.dzcr_Game_OnLevelComplate, {
                                        result: 0
                                    }));
                        }
                    }
                }, t.prototype.onTriggerExit = function(e) {
                    !o["default"].bStartGame;
                }, t.prototype.ResetPos = function() {
                    this.m_roleNode.transform.position = this.m_roleStartPos, this.m_roleNode.transform.localRotationEuler = this.m_roleStartRot,
                        this.m_rigidbody.linearDamping = 1, this.m_ani.enabled = !1, this.m_legNode.active = !1,
                        this.m_trail.active = !0;
                    var e = this;
                    Laya.timer.once(20, e, function() {
                        e.m_trail.active = !1;
                    });
                }, t.prototype.onDisable = function() {}, t.prototype.onDown = function() {
                    this.m_fsm.CurState.name != n.StateName.Lock && (this.m_isMouseDown = !0);
                }, t.prototype.onUp = function() {
                    this.m_fsm.CurState.name != n.StateName.Lock && (this.m_isMouseDown = !1);
                }, t.prototype.JumpCmd = function() {}, t.prototype.StopCmd = function() {}, t;
            }(Laya.Script3D);
        r["default"] = h;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../Mgr/CameraMgr": 29,
        "../Mgr/GameMgr": 30,
        "../Mgr/LevelMgr": 31,
        "../Mgr/SceneMgr": 32,
        "../Mgr/SoundMgr": 33,
        "../Mgr/VibrateMgr": 34,
        "../Mgr/ViewMgr": 35,
        "./FSM/FSM": 45
    }],
    50: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Net/HttpUnit"),
            i = e("../AppConfig"),
            o = e("../User/User"),
            a = e("../Utilit"),
            c = e("../ALD"),
            d = e("../WXAPI"),
            s = e("../Event/EventMgr"),
            l = e("../Event/EventDef"),
            _ = e("../Config/AppSwitchConfig"),
            u = e("../QQMiniGameAPI"),
            h = function() {
                function e() {}
                return e.dzcr_refreshAd = function(t) {
                        e.dzcr_getAdPosData(function(r) {
                            1 == r.code ? (console.log("获取分享广告数据成功"), e.dzcr__adPosition = r.result, t && t(!0)) : (console.log("获取分享广告数据失败 ： " + r.msg),
                                t && t(!1));
                        }, function(e) {
                            console.log("获取分享广告数据失败"), t && t(!1);
                        });
                    }, e.dzcr_getADVs = function(t, r, n, i) {
                        if (!e.dzcr_isNeedShowAd()) return void r(null);
                        n = null == n ? e.dzcr_UseRandomAdPos : n, i = null == i ? !0 : i, n && (t = e.dzcr_getRandomADPosID());
                        var o = e.dzcr__adv[t];
                        if (o) i && (o = this.dzcr_sortDatas(o)), r(o);
                        else {
                            var c = e;
                            e.dzcr_getADVData(t, function(n) {
                                if (1 == n.code) {
                                    if (e.dzcr__adv[t] = n.result, o = e.dzcr__adv[t], o && a["default"].dzcr_isIphone())
                                        for (var d = 0; d < o.length; ++d)
                                            for (var s = o[d], l = 0; l < e.dzcr__iphoneIgnoreAppIds.length; ++l)
                                                if (s.appid == e.dzcr__iphoneIgnoreAppIds[l]) {
                                                    o.splice(d, 1), --d;
                                                    break;
                                                }
                                    o && i && (o = c.dzcr_sortDatas(o)), r && r(o);
                                } else r && r(null);
                            }, function(e) {
                                r && r(null);
                            });
                        }
                    }, e.dzcr_reportUserClick = function(t) {
                        e.dzcr_reqUserClick(t, function(e) {
                            1 == e.code ? console.log("点击广告上报成功") : console.log("点击广告上报失败");
                        }, function(e) {
                            console.log("点击广告上报失败");
                        });
                    }, e.dzcr_getRandomADPosID = function() {
                        return e.dzcr_AdLocationids[Math.floor(Math.random() * e.dzcr_AdLocationids.length)];
                    }, e.dzcr_request = function(t) {
                        // t.dzcr_url.indexOf("https://") > -1 || t.dzcr_url.indexOf("http://") > -1 ? t.dzcr_url = t.dzcr_url : t.dzcr_url = e.dzcr_mainUrl + t.dzcr_url;
                        // var r = function(e) {
                        //     console.log(e, "http Success"), e = JSON.parse(e), t.dzcr_onSuccess && t.dzcr_onSuccess(e), 
                        //     t.dzcr_onSuccess = null, t = null;
                        // }, n = function(e) {
                        //     console.log(e, "http fail"), t.dzcr_onFail && t.dzcr_onFail(e), t.dzcr_onFail = null, 
                        //     t = null;
                        // }, o = new Laya.HttpRequest();
                        // if (o.once(Laya.Event.COMPLETE, e, r), o.once(Laya.Event.ERROR, e, n), "get" == t.dzcr_meth) {
                        //     for (var a = "", c = 0, d = Object.keys(t.dzcr_data); c < d.length; c++) {
                        //         var s = d[c], l = t.dzcr_data[s];
                        //         a += s + "=" + l + "&";
                        //     }
                        //     t.dzcr_url = t.dzcr_url + "?" + a;
                        //     var _ = [ "versions", i["default"].dzcr_Versions ];
                        //     o.send(t.dzcr_url, null, t.dzcr_meth, null, _);
                        // } else {
                        //     for (var a = "", u = 0, h = Object.keys(t.dzcr_data); u < h.length; u++) {
                        //         var s = h[u], l = t.dzcr_data[s];
                        //         a += s + "=" + l + "&";
                        //     }
                        //     a += "ts=" + String(Date.now()) + "&";
                        //     var _ = [ "Content-Type", "application/x-www-form-urlencoded", "versions", i["default"].dzcr_Versions ];
                        //     o.send(t.dzcr_url, a, t.dzcr_meth, null, _);
                        // }
                    }, e.dzcr_getAdPosData = function(t, r) {
                        var o = new n.dzcr_requestData();
                        o.dzcr_url = e.dzcr_getAdPostion, o.dzcr_onSuccess = t, o.dzcr_onFail = r, o.dzcr_data.softid = i["default"].dzcr_AppID,
                            o.dzcr_meth = "get", e.dzcr_request(o);
                    }, e.dzcr_reqUserClick = function(t, r, a) {
                        var c = new n.dzcr_requestData();
                        c.dzcr_url = e.dzcr_userClick, c.dzcr_onSuccess = r, c.dzcr_onFail = a, c.dzcr_data.softid = i["default"].dzcr_AppID,
                            c.dzcr_data.uid = o["default"].dzcr_openId, c.dzcr_data.advid = t, e.dzcr_request(c);
                    }, e.dzcr_getADVData = function(t, r, o) {
                        var a = new n.dzcr_requestData();
                        a.dzcr_url = e.dzcr_getAdv, a.dzcr_onSuccess = r, a.dzcr_onFail = o, a.dzcr_data.softid = i["default"].dzcr_AppID,
                            a.dzcr_data.locationid = t, a.dzcr_data.preview = 0, e.dzcr_request(a);
                    }, e.dzcr_RandomJump = function(t) {
                        void 0 === t && (t = 1), console.log("随机跳转,rate：" + t), t > 1 && (t /= 100);
                        var r = Math.random();
                        if (t >= r) {
                            var n = e.dzcr_LoopAdLocationID,
                                i = [e.dzcr_LoopAdLocationID, e.dzcr_InsertAdLocationID, e.dzcr_BannerAdLocationID, e.dzcr_AniAdLocationID];
                            if (e.dzcr_UseRandomAdPos)
                                for (var o = 0; o < e.dzcr_AdLocationids.length; ++o) i.push(e.dzcr_AdLocationids[o]);
                            n = i[Math.floor(Math.random() * i.length)];
                            e.dzcr_getADVs(n, function(t) {
                                if (t) {
                                    var r = Math.floor(t.length * Math.random()),
                                        n = t[r];
                                    console.log("跳转游戏： " + n.title), d["default"].dzcr_navigateToMiniProgram(n.appid, n.url, function(t) {
                                        console.log("跳转成功"), e.dzcr_reportUserClick(n.appid), c["default"].dzcr_aldSendReportAdClickSuccess(n);
                                    }, function(e) {
                                        console.log("跳转失败"), s["default"].dzcr_instance.dzcr_dispatch(l.dzcr_EventDef.dzcr_AD_OnShareAdFail),
                                            "navigateToMiniProgram:fail cancel" == e.errMsg && (console.log("用户取消跳转"), c["default"].dzcr_aldSendReportAdClickFail(n));
                                    }, function(e) {
                                        console.log("跳转完成");
                                    });
                                }
                            }, !0);
                        }
                    }, e.dzcr_isNeedShowAd = function() {
                        if (0 == _["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_adSwitch) return !1;
                        if (Laya.Browser.onQGMiniGame && _["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_oppocfg.dzcr_oppoversions != i["default"].dzcr_Versions) return !1;
                        var e = _["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_mailiang,
                            t = _["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_mailianglist,
                            r = _["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_mailiangSceneList;
                        if (1 == e) {
                            var n = null,
                                o = null;
                            if (Laya.Browser.onMiniGame ? (n = d["default"].dzcr_getLaunchOptionsSync().query.chid,
                                    o = d["default"].dzcr_getLaunchOptionsSync().scene) : Laya.Browser.onQQMiniGame && (n = u["default"].dzcr_getLaunchOptionsSync().query.chid,
                                    o = u["default"].dzcr_getLaunchOptionsSync().scene), null != n && null != t && t.length > 0)
                                for (var a = 0; a < t.length; ++a)
                                    if (n == t[a]) return !1;
                            if (null != o && null != r && r.length > 0)
                                for (var a = 0; a < r.length; ++a)
                                    if (o == r[a]) return !1;
                        }
                        return !0;
                    }, e.dzcr_sortDatas = function(e) {
                        if (null == e || 0 == e.length) return [];
                        for (var t = {}, r = new Array(), n = 0; n < e.length; ++n) {
                            var i = e[n];
                            null == t[i.appid] ? (t[i.appid] = new Array(), t[i.appid].push(i), r.push(i.appid)) : t[i.appid].push(i);
                        }
                        for (var n = 0; n < r.length; ++n) {
                            var o = r[n],
                                a = Math.floor(Math.random() * r.length),
                                c = r[a];
                            r[a] = o, r[n] = c;
                        }
                        for (var n = 0; n < r.length; ++n)
                            for (var o = r[n], d = t[o], s = 0; s < d.length; ++s) {
                                var i = d[s],
                                    a = Math.floor(Math.random() * d.length),
                                    c = d[a];
                                d[a] = i, d[s] = c;
                            }
                        for (var l = new Array(); r.length > 0;)
                            if (1 == r.length) {
                                for (var o = r[0], _ = !1, d = t[o], n = 0; n < l.length; ++n) {
                                    var u = l[n],
                                        h = l[n + 1];
                                    if (null != h) {
                                        if (u.appid != o && h.appid != o) {
                                            var i = d.shift();
                                            if (null != i) {
                                                var p = l.slice(0, n + 1),
                                                    f = l.slice(n + 1, l.length);
                                                l = p, l.push(i);
                                                for (var z = 0; z < f.length; ++z) l.push(f[z]);
                                            }
                                            _ = !0;
                                            break;
                                        }
                                    } else if (u.appid != o) {
                                        var i = d.shift();
                                        if (null != i) {
                                            var p = l.slice(0, n + 1),
                                                f = l.slice(n + 1, l.length);
                                            l = p, l.push(i);
                                            for (var z = 0; z < f.length; ++z) l.push(f[z]);
                                        }
                                        _ = !0;
                                        break;
                                    }
                                }
                                (!_ || d.length <= 0) && r.splice(0, 1);
                            } else
                                for (var n = 0; n < r.length; ++n) {
                                    var o = r[n],
                                        d = t[o],
                                        i = d.shift();
                                    l.push(i), d.length <= 0 && (r.splice(n, 1), --n);
                                }
                        return l;
                    }, e.dzcr_mainUrl = "https://swwww.mrkzx.cn", e.dzcr_getAdPostion = "/v1.1/api/getAdPosition.html",
                    e.dzcr_getAdv = "/v1.1/api/getAdv.html", e.dzcr_userClick = "/v1.1/api/userclick.html",
                    e.dzcr_LoopAdLocationID = 481, e.dzcr_BannerAdLocationID = 483, e.dzcr_InsertAdLocationID = 482,
                    e.dzcr_AniAdLocationID = -1, e.dzcr_HistoryLocationID = 484, e.dzcr_MoreGameLocationID = 482,
                    e.dzcr_UseRandomAdPos = !0, e.dzcr_AdLocationids = [481], e.dzcr__adPosition = {},
                    e.dzcr__adv = {}, e.dzcr__iphoneIgnoreAppIds = ["wx2d2acce3c45f4ddf", "wxeb93c1298ec7c62b"],
                    e;
            }();
        r["default"] = h;
    }, {
        "../ALD": 1,
        "../AppConfig": 2,
        "../Config/AppSwitchConfig": 5,
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../Net/HttpUnit": 39,
        "../QQMiniGameAPI": 43,
        "../User/User": 55,
        "../Utilit": 56,
        "../WXAPI": 72
    }],
    51: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../ShareAd"),
            i = e("../../WXAPI"),
            o = e("../../ALD"),
            a = e("../../Event/EventMgr"),
            c = e("../../Event/EventDef"),
            d = e("../../Config/AppSwitchConfig"),
            s = e("../../OPPOAPI"),
            l = e("../../QQMiniGameAPI"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_AdPosID = n["default"].dzcr_BannerAdLocationID, t.dzcr__data = null,
                        t.dzcr__wxBanner = null, t._onLoad = null, t._onError = null, t._onResize = null,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__displaySp = this.owner.getChildByName("Display"), null == this.dzcr__displaySp && (this.dzcr__displaySp = this.owner);
                }, t.prototype.onEnable = function() {
                    this.dzcr__displaySp.on(Laya.Event.CLICK, this, this.dzcr_onSpClick);
                    var e = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_banner;
                    if (0 == e) {
                        this.dzcr_refreshBannerDis();
                        var t = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                        Laya.timer.loop(1e3 * t, this, this.dzcr_refreshBannerDis);
                    } else if (1 == e) {
                        this.dzcr_refreshWXBanner();
                        var t = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                        Laya.timer.loop(1e3 * t, this, this.dzcr_refreshWXBanner);
                    }
                }, t.prototype.onDisable = function() {
                    this.dzcr__displaySp.off(Laya.Event.CLICK, this, this.dzcr_onSpClick), this.dzcr_clearWXBaner();
                }, t.prototype.dzcr_refreshBannerDis = function() {
                    var e = this;
                    n["default"].dzcr_getADVs(this.dzcr_AdPosID, function(t) {
                        if (t && t.length > 0) {
                            var r = t[Math.floor(Math.random() * t.length)];
                            e.dzcr__displaySp.loadImage(r.logo, Laya.Handler.create(e, function() {
                                e.dzcr__displaySp.destroyed || (e.dzcr__displaySp.width = 750, e.dzcr__displaySp.height = 256);
                            })), e.dzcr__data = r;
                        }
                    }, !1);
                }, t.prototype.dzcr_onSpClick = function() {
                    var e = this.dzcr__data;
                    e && (console.log("跳转游戏： " + e.title), Laya.Browser.onMiniGame ? i["default"].dzcr_navigateToMiniProgram(e.appid, e.url, function(t) {
                        console.log("跳转成功"), n["default"].dzcr_reportUserClick(e.appid), o["default"].dzcr_aldSendReportAdClickSuccess(e);
                    }, function(t) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail),
                            "navigateToMiniProgram:fail cancel" == t.errMsg && (console.log("用户取消跳转"), o["default"].dzcr_aldSendReportAdClickFail(e));
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQGMiniGame ? s["default"].dzcr_navigateToMiniProgram(e.appid, e.title, e.url, function(t) {
                        console.log("跳转成功"), n["default"].dzcr_reportUserClick(e.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQQMiniGame && l["default"].dzcr_navigateToMiniProgram(e.appid, e.url, function(t) {
                        console.log("跳转成功"), n["default"].dzcr_reportUserClick(e.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }));
                }, t.prototype.dzcr_refreshWXBanner = function() {
                    if ((Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) && this.owner.visible) {
                        this.dzcr_clearWXBaner();
                        var e = this,
                            t = null;
                        Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx.getSystemInfoSync() : Laya.Browser.onQQMiniGame && (t = Laya.Browser.window.qq.getSystemInfoSync());
                        var r = t.screenWidth,
                            n = t.screenHeight,
                            o = this.dzcr__displaySp.localToGlobal(new Laya.Point(0, 0)),
                            a = o.x / Laya.stage.width * r,
                            c = o.y / Laya.stage.height * n,
                            s = this.dzcr_WXBannerWidth ? this.dzcr_WXBannerWidth / Laya.stage.width * r : r;
                        if (Laya.Browser.onMiniGame) {
                            var _ = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_recreateBannerIDList,
                                u = _[Math.floor(Math.random() * _.length)];
                            null == u && (u = i["default"].dzcr_bannerAdUnitId), e.dzcr__wxBanner = Laya.Browser.window.wx.createBannerAd({
                                adUnitId: u,
                                adIntervals: 30,
                                style: {
                                    left: a,
                                    top: c,
                                    width: s
                                }
                            }), e.dzcr__wxBanner.onLoad(function(e) {
                                console.log("WXBanner广告 加载完成"), console.log(e);
                            }), e.dzcr__wxBanner.onError(function(t) {
                                console.log("WXBanner广告 加载失败"), console.log(t), e.dzcr_refreshBannerDis(), e.dzcr_clearWXBaner();
                            }), e.dzcr__wxBanner.onResize(function(e) {}), e.dzcr__wxBanner.show();
                        } else if (Laya.Browser.onQQMiniGame) {
                            var _ = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_recreateBannerIDList,
                                h = _[Math.floor(Math.random() * _.length)];
                            null == h && (h = l["default"].dzcr_bannerAdUnitId), e.dzcr__wxBanner = Laya.Browser.window.qq.createBannerAd({
                                adUnitId: h,
                                adIntervals: 30,
                                style: {
                                    left: a,
                                    top: c,
                                    width: s
                                }
                            }), null != e.dzcr__wxBanner ? (e._onLoad = function(t) {
                                console.log("QQBanner广告 加载完成 : ", h), console.log(t), e.dzcr__wxBanner.show();
                            }, e.dzcr__wxBanner.onLoad(e._onLoad), e._onError = function(t) {
                                console.log("QQBanner广告 加载失败 : ", h), console.log(t), e.dzcr_refreshBannerDis(),
                                    e.dzcr_clearWXBaner();
                            }, e.dzcr__wxBanner.onError(e._onError), e._onResize = function(e) {}, e.dzcr__wxBanner.onResize(e._onResize)) : e.dzcr_refreshBannerDis();
                        }
                    }
                }, t.prototype.dzcr_clearWXBaner = function() {
                    this.dzcr__wxBanner && (this.dzcr__wxBanner.offLoad(this._onLoad), this.dzcr__wxBanner.offError(this._onError),
                        this.dzcr__wxBanner.offResize(this._onResize), this.dzcr__wxBanner.destroy()), this.dzcr__wxBanner = null;
                }, t.prototype.onViewShow = function() {
                    var e = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_banner;
                    if (1 == e && null == this.dzcr__wxBanner) {
                        this.dzcr_refreshWXBanner();
                        var t = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                        Laya.timer.loop(1e3 * t, this, this.dzcr_refreshWXBanner);
                    } else {
                        this.dzcr_refreshBannerDis();
                        var t = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_bannerRecreateTime;
                        Laya.timer.loop(1e3 * t, this, this.dzcr_refreshBannerDis);
                    }
                }, t.prototype.onViewHide = function() {
                    this.dzcr_clearWXBaner(), Laya.timer.clearAll(this);
                }, t.prototype.onDestroy = function() {
                    this.dzcr_clearWXBaner(), Laya.timer.clearAll(this);
                }, t;
            }(Laya.Script);
        r["default"] = _;
    }, {
        "../../ALD": 1,
        "../../Config/AppSwitchConfig": 5,
        "../../Event/EventDef": 7,
        "../../Event/EventMgr": 8,
        "../../OPPOAPI": 42,
        "../../QQMiniGameAPI": 43,
        "../../WXAPI": 72,
        "../ShareAd": 50
    }],
    52: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../ShareAd"),
            i = e("./LoopAdBox"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_AdPosID = n["default"].dzcr_LoopAdLocationID, t.dzcr__scrollForward = !0,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__list = this.owner.getChildByName("List"), this.dzcr__list.renderHandler = Laya.Handler.create(this, this.dzcr_onListRender, null, !1),
                        this.dzcr__list.hScrollBarSkin = "";
                }, t.prototype.onEnable = function() {
                    var e = this,
                        t = this;
                    n["default"].dzcr_getADVs(this.dzcr_AdPosID, function(r) {
                        if (t.owner && !t.owner.destroyed)
                            if (r && r.length > 0 && r.length < 50) {
                                for (var n = [], i = 0, o = 0; 50 > o; ++o) i >= r.length && (i = 0), n.push(r[i]),
                                    ++i;
                                for (var a = r.length, o = 0; o < n.length; ++o) {
                                    var c = Math.floor(o / a),
                                        d = c * a,
                                        s = Math.floor(Math.random() * a) + d,
                                        l = n[o],
                                        _ = n[s];
                                    n[s] = l, n[o] = _;
                                }
                                e.dzcr__list.array = n;
                            } else e.dzcr__list.array = r;
                    });
                }, t.prototype.onDisable = function() {}, t.prototype.onUpdate = function() {
                    this.dzcr__scrollForward ? (this.dzcr__list.scrollBar.value += 100 * Laya.timer.delta / 1e3,
                        this.dzcr__list.scrollBar.value >= this.dzcr__list.scrollBar.max && (this.dzcr__scrollForward = !1)) : (this.dzcr__list.scrollBar.value -= 100 * Laya.timer.delta / 1e3,
                        this.dzcr__list.scrollBar.value <= 0 && (this.dzcr__scrollForward = !0));
                }, t.prototype.dzcr_onListRender = function(e, t) {
                    var r = this.dzcr__list.array[t],
                        n = e.getComponent(i["default"]);
                    n.dzcr_setData(r);
                }, t;
            }(Laya.Script);
        r["default"] = o;
    }, {
        "../ShareAd": 50,
        "./LoopAdBox": 53
    }],
    53: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../WXAPI"),
            i = e("../ShareAd"),
            o = e("../../ALD"),
            a = e("../../Event/EventMgr"),
            c = e("../../Event/EventDef"),
            d = e("../../OPPOAPI"),
            s = e("../../QQMiniGameAPI"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__data = null, t.dzcr__originW = 150, t.dzcr__originH = 150, t.dzcr__fontSize = 25,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__displaySp = this.owner.getChildByName("Display"), this.dzcr__originW = this.dzcr__displaySp.width,
                        this.dzcr__originH = this.dzcr__displaySp.height, this.dzcr__disText = this.owner.getChildByName("TitelText"),
                        this.dzcr__disText.text = "", this.dzcr__fontSize = this.dzcr__disText.fontSize;
                }, t.prototype.onEnable = function() {
                    this.dzcr__displaySp.on(Laya.Event.CLICK, this, this.dzcr_onSpClick);
                }, t.prototype.onDisable = function() {
                    this.dzcr__displaySp.off(Laya.Event.CLICK, this, this.dzcr_onSpClick);
                }, t.prototype.dzcr_setData = function(e) {
                    if (e) {
                        var t = this;
                        this.dzcr__displaySp.loadImage(e.logo, Laya.Handler.create(this, function() {
                            t.dzcr__displaySp.destroyed || (t.dzcr__displaySp.width = t.dzcr__originW, t.dzcr__displaySp.height = t.dzcr__originH);
                        }));
                        var r = String(e.title),
                            n = r.length;
                        n = Math.max(5, n);
                        var i = Math.floor(5 / n * this.dzcr__fontSize);
                        this.dzcr__disText.fontSize = i, this.dzcr__disText.text = r, this.dzcr__data = e;
                    }
                }, t.prototype.dzcr_onSpClick = function() {
                    var e = this.dzcr__data;
                    e && (console.log("跳转游戏： " + e.title), Laya.Browser.onMiniGame ? n["default"].dzcr_navigateToMiniProgram(e.appid, e.url, function(t) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(e.appid), o["default"].dzcr_aldSendReportAdClickSuccess(e);
                    }, function(t) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail),
                            "navigateToMiniProgram:fail cancel" == t.errMsg && (console.log("用户取消跳转"), o["default"].dzcr_aldSendReportAdClickFail(e));
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQGMiniGame ? d["default"].dzcr_navigateToMiniProgram(e.appid, e.title, e.url, function(t) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(e.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }) : Laya.Browser.onQQMiniGame && s["default"].dzcr_navigateToMiniProgram(e.appid, e.url, function(t) {
                        console.log("跳转成功"), i["default"].dzcr_reportUserClick(e.appid);
                    }, function(e) {
                        console.log("跳转失败"), a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_AD_OnShareAdFail);
                    }, function(e) {
                        console.log("跳转完成");
                    }));
                }, t;
            }(Laya.Script);
        r["default"] = l;
    }, {
        "../../ALD": 1,
        "../../Event/EventDef": 7,
        "../../Event/EventMgr": 8,
        "../../OPPOAPI": 42,
        "../../QQMiniGameAPI": 43,
        "../../WXAPI": 72,
        "../ShareAd": 50
    }],
    54: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./AppConfig"),
            i = e("./AppConfig"),
            o = function() {
                function e() {}
                return e.dzcr_ttLogin = function(t, r) {
                        n["default"].onTTMiniGame && (Laya.Browser.window.tt.login({
                            force: !1,
                            success: function(e) {
                                console.log("登陆成功1");
                                var n = e.code;
                                n ? t(n) : (console.log("用户没有登陆，采用临时code"), r());
                            },
                            fail: function() {
                                console.log("登陆失败1"), r();
                            }
                        }), e.dzcr_initRecord());
                    }, e.dzcr_onRewardedVideoAdLoad = function() {
                        console.log("激励视频 广告加载完成");
                    }, e.dzcr_onRewardedVideoAdError = function(t) {
                        console.log("激励视频 广告加载失败" + t), e.dzcr__onRewardedVideoAdFailed && e.dzcr__onRewardedVideoAdFailed();
                    }, e.dzcr_onRewardedVideoAdClose = function(t) {
                        t && t.isEnded || null == t ? (console.log("激励视频 已完整观看"), e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                            e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!1));
                    }, e.dzcr_regRewardedVideoAdEvent = function(t) {
                        t.onLoad(e.dzcr_onRewardedVideoAdLoad), t.onError(e.dzcr_onRewardedVideoAdError),
                            t.onClose(e.dzcr_onRewardedVideoAdClose), e.dzcr__isRegRewardedVideoAdEvent = !0;
                    }, e.dzcr_showRewardedVideoAd = function(t, r) {
                        if (n["default"].onTTMiniGame) {
                            e.dzcr__onRewardedVideoAdClose = t, e.dzcr__onRewardedVideoAdFailed = r;
                            var i = Laya.Browser.window.tt.createRewardedVideoAd({
                                adUnitId: e.dzcr_adUnitId
                            });
                            e.dzcr__isRegRewardedVideoAdEvent || e.dzcr_regRewardedVideoAdEvent(i), i.load().then(function() {
                                var e = i.show();
                                e.then(function() {
                                    return console.log("激励视频 广告显示成功");
                                }), e["catch"](function(e) {
                                    i.load().then(function() {
                                        return i.show();
                                    })["catch"](function(e) {
                                        console.log("激励视频 广告显示失败"), r && r();
                                    });
                                });
                            })["catch"](function(e) {
                                console.log("激励视频 广告加载失败"), r && r();
                            });
                        } else t(!0);
                    }, e.dzcr_initRecord = function() {
                        e.dzcr_record = Laya.Browser.window.tt.getGameRecorderManager(), null != e.dzcr_record && (e.dzcr_record.onStart(function(t) {
                            console.log("录屏开始"), e.dzcr_recordRes = "";
                        }), e.dzcr_record.onStop(function(t) {
                            console.log("录屏结束"), e.dzcr_recordRes = t.videoPath;
                        }));
                    }, e.dzcr_startRecord = function(t) {
                        void 0 === t && (t = 300), n["default"].onTTMiniGame && e.dzcr_record.start({
                            duration: t
                        });
                    }, e.dzcr_stopRecord = function() {
                        n["default"].onTTMiniGame && e.dzcr_record.stop();
                    }, e.dzcr_shareRecord = function(t, r) {
                        void 0 === t && (t = null), void 0 === r && (r = null), i["default"].onTTMiniGame && ("" != e.dzcr_recordRes ? window.tt.shareAppMessage({
                            channel: "video",
                            extra: {
                                videoPath: e.dzcr_recordRes,
                                videoTopics: ["快来和我一起玩吧！"]
                            },
                            success: function() {
                                null != t && t(), console.log("分享视频成功");
                            },
                            fail: function(e) {
                                console.log("分享视频失败"), null != r && r();
                            }
                        }) : (null != r && r(), console.log("分享视频为空")));
                    }, e.dzcr_share = function(t) {
                        void 0 === t && (t = null), n["default"].onTTMiniGame && window.tt.shareAppMessage({
                            templateId: e.dzcr__templateId,
                            success: function() {
                                null != t && t();
                            },
                            fail: function() {
                                console.log("分享失败");
                            }
                        });
                    }, e.dzcr_showBanner = function() {
                        if (n["default"].onTTMiniGame && !(e.dzcr_bannerAdUnitId.length <= 0)) {
                            if (!e.dzcr__banner) {
                                var t = Laya.Browser.window.tt.getSystemInfoSync(),
                                    r = t.windowWidth,
                                    i = t.windowHeight,
                                    o = 150;
                                e.dzcr__banner = Laya.Browser.window.tt.createBannerAd({
                                    adUnitId: e.dzcr_bannerAdUnitId,
                                    adIntervals: 30,
                                    style: {
                                        width: o,
                                        top: i - o / 16 * 9
                                    }
                                }), e.dzcr__banner.onResize(function(t) {
                                    console.log(t.width, t.height), e.dzcr__banner.style.top = i - t.height, e.dzcr__banner.style.left = (r - t.width) / 2;
                                });
                            }
                            e.dzcr__banner.show();
                        }
                    }, e.dzcr_hideBanner = function() {
                        null != e.dzcr__banner && e.dzcr__banner.hide();
                    }, e.dzcr_showMoreGamesModal = function(e, t) {
                        var r = Laya.Browser.window.tt.getSystemInfoSync();
                        "ios" !== r.platform ? Laya.Browser.window.tt.showMoreGamesModal({
                            appLaunchOptions: [{
                                appId: i["default"].dzcr_AppID,
                                query: "foo=bar&baz=qux",
                                extraData: {}
                            }],
                            success: function(t) {
                                console.log("success", t.errMsg), e && e();
                            },
                            fail: function(e) {
                                console.log("fail", e.errMsg), t && t();
                            }
                        }) : t && t();
                    }, e.dzcr_adUnitId = "", e.dzcr_bannerAdUnitId = "", e.dzcr_InsAdUnitId = "", e.dzcr__templateId = "",
                    e.dzcr_recordRes = "", e.dzcr__banner = null, e.dzcr__isRegRewardedVideoAdEvent = !1,
                    e.dzcr__onRewardedVideoAdFailed = null, e.dzcr__onRewardedVideoAdClose = null, e;
            }();
        r["default"] = o;
    }, {
        "./AppConfig": 2
    }],
    55: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Event/EventMgr"),
            i = e("../Event/EventDef"),
            o = function() {
                function e() {
                    this.levelNum = 1, this.moneyNum = 0, this.crystalNum = 0;
                }
                return e;
            }();
        r.dzcr_UserGameData = o;
        var a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), Object.defineProperty(t, "dzcr_isLogin", {
                    get: function() {
                        return "" != t.dzcr_code || "" != t.dzcr_token;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.dzcr_getSaveData = function() {
                    return JSON.stringify(t.dzcr__gameData);
                }, t.dzcr_testInitUser = function() {
                    t.dzcr__gameData.levelNum = 1, t.dzcr__gameData.moneyNum = 1e7, t.dzcr__gameData.crystalNum = 1e7;
                }, t.dzcr_initiUser = function(e) {
                    e && 0 != e && (t.dzcr__gameData.levelNum = e.levelNum, t.dzcr__gameData.moneyNum = e.moneyNum,
                        t.dzcr__gameData.crystalNum = e.crystalNum);
                }, t.dzcr_setLeveNum = function(e) {
                    t.dzcr__gameData.levelNum = e;
                }, t.dzcr_getLeveNum = function() {
                    return t.dzcr__gameData.levelNum;
                }, t.dzcr_addMoney = function(e) {
                    e = Math.ceil(e);
                    var r = t.dzcr__gameData.moneyNum;
                    t.dzcr__gameData.moneyNum += e, n["default"].dzcr_instance.dzcr_dispatch(i.dzcr_EventDef.dzcr_Game_OnUserMoneyChange, {
                        curr: t.dzcr__gameData.moneyNum,
                        last: r
                    });
                }, t.dzcr_subMoney = function(e) {
                    e = Math.ceil(e);
                    var r = t.dzcr__gameData.moneyNum;
                    t.dzcr__gameData.moneyNum -= e, t.dzcr__gameData.moneyNum < 0 && (t.dzcr__gameData.moneyNum = 0),
                        n["default"].dzcr_instance.dzcr_dispatch(i.dzcr_EventDef.dzcr_Game_OnUserMoneyChange, {
                            curr: t.dzcr__gameData.moneyNum,
                            last: r
                        });
                }, t.dzcr_getMoney = function() {
                    return t.dzcr__gameData.moneyNum;
                }, t.dzcr_addCrystal = function(e) {
                    e = Math.ceil(e);
                    var r = t.dzcr__gameData.crystalNum;
                    t.dzcr__gameData.crystalNum += e, n["default"].dzcr_instance.dzcr_dispatch(i.dzcr_EventDef.dzcr_Game_OnUserCrystalChange, {
                        curr: t.dzcr__gameData.crystalNum,
                        last: r
                    });
                }, t.dzcr_subCrystal = function(e) {
                    e = Math.ceil(e);
                    var r = t.dzcr__gameData.crystalNum;
                    t.dzcr__gameData.crystalNum -= e, t.dzcr__gameData.crystalNum < 0 && (t.dzcr__gameData.crystalNum = 0),
                        n["default"].dzcr_instance.dzcr_dispatch(i.dzcr_EventDef.dzcr_Game_OnUserCrystalChange, {
                            curr: t.dzcr__gameData.crystalNum,
                            last: r
                        });
                }, t.dzcr_getCrystal = function() {
                    return t.dzcr__gameData.crystalNum;
                }, t.dzcr_code = "", t.dzcr_openId = "", t.dzcr_token = null, t.dzcr_nickName = "",
                t.dzcr_gender = 0, t.dzcr__gameData = new o(), t;
        }(Laya.Script);
        r["default"] = a;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8
    }],
    56: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_Lerp = function(e, t, r) {
                    if (e == t) return t;
                    if (e > t) {
                        var n = e - r;
                        return t >= n ? t : n;
                    }
                    if (t > e) {
                        var n = e + r;
                        return n >= t ? t : n;
                    }
                }, e.dzcr_lerpEulerAngle = function(t, r, n) {
                    var t = t % 360;
                    t = t >= 0 ? t : 360 + t;
                    var r = r % 360;
                    r = r >= 0 ? r : 360 + r;
                    var i = Math.abs(r - t);
                    i > 180 && (r > t ? r -= 360 : t > r && (r += 360));
                    var o = e.dzcr_Lerp(t, r, n);
                    return o;
                }, e.dzcr_getRotationByDir = function(t) {
                    var r = t.x * e.dzcr_poinDown.x + t.y * e.dzcr_poinDown.y,
                        n = r / (t.distance(0, 0) * e.dzcr_poinDown.distance(0, 0)),
                        i = Math.acos(n),
                        o = i / (2 * Math.PI) * 360;
                    return t.x < 0 && (o = -o), o;
                }, e.dzcr_getRotationByDirOn3DSpace = function(t) {
                    var r = t.x * e.dzcr_poinUp.x + t.y * e.dzcr_poinUp.y,
                        n = r / (t.distance(0, 0) * e.dzcr_poinUp.distance(0, 0)),
                        i = Math.acos(n),
                        o = i / (2 * Math.PI) * 360;
                    return t.x < 0 && (o += 2 * (180 - o)), o;
                }, e.dzcr_getDirByRotation = function(e) {
                    var t = (e - 90) * Math.PI / 180,
                        r = Math.cos(t),
                        n = Math.sin(t),
                        i = new Laya.Point(r, n);
                    return i.normalize(), i;
                }, e.dzcr_getDirDirAngle = function(e, t) {
                    var r = e.x * t.x + e.y * t.y,
                        n = r / (e.distance(0, 0) * t.distance(0, 0)),
                        i = Math.acos(n),
                        o = i / (2 * Math.PI) * 360;
                    return o;
                }, e.dzcr_getDirScalarLength = function(e) {
                    var t = Math.sqrt(e.x * e.x + e.y * e.y);
                    return t;
                }, e.dzcr_setSpOnParentCenter = function(e) {
                    if (null != e.parent) {
                        var t = e.parent,
                            r = 0,
                            n = 0,
                            r = r - e.width / 2 * e.scaleX + t.width / 2,
                            n = n - e.height / 2 * e.scaleY + t.height / 2;
                        e.x = r, e.y = n;
                    }
                }, e.dzcr_getPointToLineDistance = function(e, t, r, n) {
                    var i = new Laya.Point(e - r.x, t - r.y),
                        o = new Laya.Point(e - n.x, t - n.y),
                        a = new Laya.Point(n.x - r.y, n.y - r.y),
                        c = a.x * i.x + a.y * i.y;
                    if (0 >= c) return i.distance(0, 0);
                    var d = a.x * o.x + a.y * o.y;
                    if (0 >= d) return o.distance(0, 0);
                    var s = i.distance(0, 0),
                        l = a.distance(0, 0),
                        _ = c / (s * l),
                        u = Math.acos(_),
                        h = Math.sin(u) * s;
                    return h;
                }, e.dzcr_isIphoneX = function() {
                    return Laya.Browser.onIPhone && (2436 == Laya.Browser.width && 1125 == Laya.Browser.height || 2436 == Laya.Browser.height && 1125 == Laya.Browser.width) ? !0 : !1;
                }, e.dzcr_isIphone = function() {
                    return Laya.Browser.onIPhone;
                }, e.dzcr_getChild = function(t, r) {
                    for (var n = 0; n < t.numChildren; ++n) {
                        var i = t.getChildAt(n);
                        if (i.name == r) return i;
                        var o = e.dzcr_getChild(i, r);
                        if (o) return o;
                    }
                    return null;
                }, e.dzcr_forEachChild = function(t, r) {
                    for (var n = 0; n < t.numChildren; ++n) {
                        var i = t.getChildAt(n);
                        r(i), e.dzcr_forEachChild(i, r);
                    }
                }, e.dzcr_OriginStageWidth = 1334, e.dzcr_OriginStageHeight = 750, e.dzcr_grayscaleMat = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0],
                e.dzcr_grayscaleFilter = new Laya.ColorFilter(e.dzcr_grayscaleMat), e.dzcr_poinDown = new Laya.Point(0, -1),
                e.dzcr_poinUp = new Laya.Point(0, 1), e;
        }();
        r["default"] = n;
    }, {}],
    57: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Mgr/SoundMgr"),
            i = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.dzcr_useSound = !0, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.dzcr_onDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.dzcr_onUp),
                        this.owner.on(Laya.Event.MOUSE_OUT, this, this.dzcr_onUp);
                }, t.prototype.onDisable = function() {
                    this.owner.offAll(), Laya.Tween.clearAll(this);
                }, t.prototype.dzcr_onDown = function() {
                    Laya.Tween.to(this.owner, {
                        scaleX: .9,
                        scaleY: .9
                    }, 50), this.dzcr_useSound && n["default"].dzcr_instance.dzcr_playSound("anniu");
                }, t.prototype.dzcr_onUp = function() {
                    Laya.Tween.to(this.owner, {
                        scaleX: 1,
                        scaleY: 1
                    }, 50);
                }, t;
            }(Laya.Script);
        r["default"] = i;
    }, {
        "../Mgr/SoundMgr": 33
    }],
    58: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../View/ViewBase"),
            i = e("../../Event/EventDef"),
            o = e("../../Event/EventMgr"),
            a = e("../../CachedWXBannerAd"),
            c = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.dzcr__totalClickTimer = 22, t.dzcr__needClickTime = 10, t.dzcr__bannerClickTime = 7,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__click_Btn = this.owner.getChildByName("Click_Btn"), this.dzcr__click_Btn.on(Laya.Event.CLICK, this, this.dzcr_ButtonClicked),
                        this.dzcr__arrow_Img = this.dzcr__click_Btn.getChildByName("Arrow_Img"), this.dzcr__bg = this.owner.getChildByName("BG"),
                        this.dzcr__open_Btn = this.dzcr__bg.getChildByName("Open_Btn"), this.dzcr__getPrize_View = this.owner.getChildByName("GetPrize_View"),
                        this.dzcr__prizeCount_Text = this.dzcr__getPrize_View.getChildByName("PrizeCount_Text"),
                        this.dzcr__confirm_Btn = this.dzcr__getPrize_View.getChildByName("Confirm_Btn"),
                        this.dzcr__getPrize_View.visible = !1, this.dzcr__clickTime_PBar = this.dzcr__bg.getChildByName("ClickTime_PBar"),
                        this.dzcr__clickTime_PBar$Bar = this.dzcr__clickTime_PBar.getChildByName("ClickTime_PBar$Bar"),
                        this.dzcr__clickBarOriginalWidth = this.dzcr__clickTime_PBar$Bar.width, this.dzcr__bannerAd_View = this.owner.getChildByName("BannerAd_View"),
                        this.dzcr__clickTime_PBar$Bar.width = 0, this.dzcr__clickTime = 0, this.dzcr__totalClickTime = 0;
                }, t.prototype.onUpdate = function() {
                    if (this.dzcr__arrowUp ? (this.dzcr__arrow_Img.top += Laya.timer.delta / 5, this.dzcr__arrow_Img.top > -140 && (this.dzcr__arrowUp = !1)) : (this.dzcr__arrow_Img.top -= Laya.timer.delta / 5,
                            this.dzcr__arrow_Img.top < -180 && (this.dzcr__arrowUp = !0)), !this.dzcr__bannerClicked) {
                        var e = 2 + this.dzcr__clickTime_PBar$Bar.width / this.dzcr__clickBarOriginalWidth * 6;
                        this.dzcr__clickTime_PBar$Bar.width >= e && (this.dzcr__clickTime_PBar$Bar.width -= e),
                            this.dzcr__clickTime_PBar$Bar.width / this.dzcr__clickBarOriginalWidth + .1 < this.dzcr__clickTime / this.dzcr__needClickTime && this.dzcr__clickTime--;
                    }
                }, t.prototype.dzcr_openView = function(t) {
                    this.dzcr__compeletFunction = t.Complete, this.dzcr__prizeCount = t.PrizeCount,
                        e.prototype.dzcr_openView.call(this, t);
                }, t.prototype.dzcr_OpenPrizeWindow = function() {
                    this.dzcr__bg.visible = !1;
                    var e = this;
                    this.dzcr__prizeCount_Text.text = this.dzcr__prizeCount.toString(), this.dzcr__getPrize_View.visible = !0,
                        this.dzcr__confirm_Btn.once(Laya.Event.CLICK, this, function() {
                            e.dzcr__compeletFunction && e.dzcr__compeletFunction(), e.dzcr_closeView();
                        });
                }, t.prototype.dzcr_ShowBanner = function() {
                    console.log("AD_WudianBanner_Show"), a["default"].dzcr_show();
                }, t.prototype.dzcr_ButtonClicked = function() {
                    this.dzcr__clickTime++, this.dzcr__totalClickTime++, this.dzcr__clickTime > this.dzcr__needClickTime && (this.dzcr__clickTime = this.dzcr__needClickTime),
                        this.dzcr__clickTime >= this.dzcr__bannerClickTime ? (this.dzcr__clickTime >= this.dzcr__needClickTime && (this.dzcr__clickTime = this.dzcr__needClickTime - 1),
                            this.dzcr__bannerClicked = !0, console.log("误点Banner套路启动"), this.dzcr_ShowBanner(),
                            Laya.timer.once(2e3, this, function() {
                                this.dzcr_BannerClicked();
                            })) : this.dzcr__totalClickTime > this.dzcr__totalClickTimer && (console.log("用户一直没点到，放他一马", this.dzcr__totalClickTime),
                            this.dzcr_BannerClicked());
                    var e = this.dzcr__clickTime / this.dzcr__needClickTime * this.dzcr__clickBarOriginalWidth;
                    this.dzcr__clickTime_PBar$Bar.width = e;
                }, t.prototype.dzcr_BannerClicked = function() {
                    o["default"].dzcr_instance.dzcr_dispatch(i.dzcr_EventDef.dzcr_AD_WudianBanner_Hide),
                        this.dzcr__bannerClicked = !0, this.dzcr__clickTime = this.dzcr__needClickTime,
                        this.dzcr__clickTime_PBar$Bar.width = this.dzcr__clickBarOriginalWidth, this.dzcr__click_Btn.visible = !1,
                        this.dzcr__open_Btn.visible = !0, this.dzcr_OpenPrizeWindow();
                }, t.prototype.onDestroy = function() {
                    e.prototype.onDestroy.call(this), a["default"].dzcr_hide();
                }, t;
            }(n["default"]);
        r["default"] = c;
    }, {
        "../../CachedWXBannerAd": 4,
        "../../Event/EventDef": 7,
        "../../Event/EventMgr": 8,
        "../../View/ViewBase": 71
    }],
    59: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../ShareAd/View/BannerAdView"),
            i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__ownerSprite = this.owner, this.dzcr__autoZone = this.dzcr__ownerSprite.getChildByName("AutoZone"),
                        this.dzcr__loopADZone = this.dzcr__ownerSprite.getChildByName("LoopAD"), this.dzcr__bannerADZone = this.dzcr__ownerSprite.getChildByName("BannerAD"),
                        this.dzcr__bannerAd = this.dzcr__bannerADZone.getComponent(n["default"]);
                }, t.prototype.onEnable = function() {
                    var e = Laya.stage.width / Laya.stage.height;
                    .5 > e ? (this.dzcr__autoZone.bottom = this.dzcr__loopADZone.height + this.dzcr__bannerADZone.height,
                        this.dzcr__loopADZone.bottom = this.dzcr__bannerADZone.height, this.dzcr__bannerADZone.visible = !0) : (this.dzcr__autoZone.bottom = this.dzcr__loopADZone.height,
                        this.dzcr__loopADZone.bottom = 0, this.dzcr__bannerADZone.visible = !1);
                }, t.prototype.onDisable = function() {}, t.prototype.onUpdate = function() {
                    this.dzcr__bannerADZone.visible || this.dzcr__bannerAd.dzcr_clearWXBaner();
                }, t;
            }(Laya.Script);
        r["default"] = i;
    }, {
        "../../ShareAd/View/BannerAdView": 51
    }],
    60: [function(e, t, r) {
        "use strict";

        function n(e) {
            return null != e.onViewShow && "function" == typeof e.onViewShow && null != e.onViewHide && "function" == typeof e.onViewHide ? !0 : !1;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.isIViewStateListener = n;
    }, {}],
    61: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../ViewBase"),
            i = e("./LogoAni"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__processWidth = 0, t.dzcr__logoAni = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__bg = this.owner.getChildByName("Bg"),
                        this.dzcr__bottomZone = this.dzcr__bg.getChildByName("BottomZone"),
                        this.dzcr__processBarBg = this.dzcr__bottomZone.getChildByName("processBarBg"),
                        this.dzcr__processBar = this.dzcr__processBarBg.getChildByName("processBar"),
                        this.dzcr__processWidth = this.dzcr__processBar.width;
                    var e = this.dzcr__bottomZone.getChildByName("LogoAni");
                    e.visible = !1, this.dzcr__logoAni = this.dzcr__bottomZone.getChildByName("LogoAni").getComponent(i["default"]);
                }, t.prototype.onStart = function() {}, t.prototype.onEnable = function() {
                    e.prototype.onEnable.call(this);
                }, t.prototype.dzcr_addEvent = function() {
                    e.prototype.dzcr_addEvent.call(this);
                }, t.prototype.dzcr_removeEvent = function() {
                    e.prototype.dzcr_removeEvent.call(this);
                }, t.prototype.onUpdate = function() {
                    this.dzcr__bg.width = Laya.stage.width, this.dzcr__bg.height = Laya.stage.height;
                }, t.prototype.dzcr_setProcess = function(e) {
                    0 > e && (e = 0), e > 1 && (e = 1);
                    var t = this.dzcr__processWidth * e;
                    1 > t && (t = 1), this.dzcr__processBar.width = t;
                }, t;
            }(n["default"]);
        r["default"] = o;
    }, {
        "../ViewBase": 71,
        "./LogoAni": 62
    }],
    62: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dzcr__aniSprites = [], t.dzcr__aniSpriteOriginPos = [], t;
            }
            return __extends(t, e), t.prototype.onAwake = function() {
                for (var e = 0; e < this.owner.numChildren; ++e) {
                    var t = this.owner.getChildAt(e);
                    t.alpha = 0, this.dzcr__aniSprites.push(t), this.dzcr__aniSpriteOriginPos.push(new Laya.Point(t.x, t.y));
                }
            }, t.prototype.dzcr_playAni = function() {
                if (Laya.Browser.onQGMiniGame)
                    for (var e = 0; e < this.dzcr__aniSprites.length; ++e) this.dzcr__aniSprites[e].visible = !1;
                else
                    for (var t = function(e) {
                            var t = e == r.dzcr__aniSprites.length - 1 ? !0 : !1,
                                n = r.dzcr__aniSprites[e],
                                i = r.dzcr__aniSpriteOriginPos[e];
                            n.alpha = 0, n.y += i.y + 50;
                            var o = r;
                            Laya.Tween.to(n, {
                                y: i.y,
                                alpha: 1
                            }, 450, Laya.Ease.elasticOut, Laya.Handler.create(r, function() {
                                t && Laya.timer.once(300, o, function() {
                                    o.dzcr_playAni();
                                });
                            }), 80 * e);
                        }, r = this, e = 0; e < this.dzcr__aniSprites.length; ++e) t(e);
            }, t;
        }(Laya.Script);
        r["default"] = n;
    }, {}],
    63: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../TemplateViewBase"),
            i = e("../../../KRQ/Com/KRQ_LoopAd/KRQ_VLoopAd"),
            o = e("../../../Config/AppSwitchConfig"),
            a = e("../../../Utilit"),
            c = e("../../../ShareAd/ShareAd"),
            d = e("../../../Mgr/SceneMgr"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__continueBtn = null, t.dzcr__krqVLoopAd = null, t.dzcr__KRQ_VLoopAd = null,
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this.dzcr__krqVLoopAd = this.dzcr_View.getChildByName("KRQ_VLoopAd").getComponent(i["default"]),
                        this.dzcr__krqVLoopAd.dzcr_useLocalRandom = !1, this.dzcr__krqVLoopAd.dzcr_useRandom = !1,
                        this.dzcr__krqVLoopAd.dzcr_useMovePause = !1, this.dzcr__continueBtn = this.dzcr_View.getChildByName("ContinueBtn"),
                        this.dzcr__continueBtn.visible = !1;
                    var t = this;
                    Laya.timer.once(1e3 * o["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_continueBtnDelayTime, this, function() {
                        t.dzcr__continueBtn.visible = !0;
                    }), this.dzcr__KRQ_VLoopAd = this.dzcr_View.getChildByName("KRQ_VLoopAd"), a["default"].dzcr_isIphoneX() && (this.dzcr__KRQ_VLoopAd.top = this.dzcr__KRQ_VLoopAd.top + 75);
                }, t.prototype.onStart = function() {
                    this.dzcr__krqVLoopAd.dzcr_AdPosID = c["default"].dzcr_MoreGameLocationID, e.prototype.onStart.call(this);
                }, t.prototype.dzcr_addEvent = function() {
                    e.prototype.dzcr_addEvent.call(this), this.dzcr__continueBtn.on(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.dzcr_removeEvent = function() {
                    e.prototype.dzcr_removeEvent.call(this), this.dzcr__continueBtn.off(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.dzcr_onContinueBtn = function() {
                    d["default"].getInstance().ResetGame();
                }, t;
            }(n["default"]);
        r["default"] = s;
    }, {
        "../../../Config/AppSwitchConfig": 5,
        "../../../KRQ/Com/KRQ_LoopAd/KRQ_VLoopAd": 17,
        "../../../Mgr/SceneMgr": 32,
        "../../../ShareAd/ShareAd": 50,
        "../../../Utilit": 56,
        "../TemplateViewBase": 68
    }],
    64: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../TemplateViewBase"),
            ss = e("../../../Mgr/SceneMgr"),
            i = e("../../../Mgr/WudianMgr"),
            o = e("../../../Config/AppSwitchConfig"),
            a = e("../../../Mgr/WXADMgr"),
            c = e("../../../KRQ/Com/KRQ_RollSingleAd"),
            d = e("../../../Utilit"),
            s = e("../../../Mgr/ViewMgr"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__centerZone = null, t.dzcr__backBtn = null, t.dzcr__continueBtn = null,
                        t.dzcr__rollSingleAds = new Array(), t.dzcr__clickTag = !1, t.dzcr__clickTimingTag = !1,
                        t.dzcr__banner = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this.dzcr__centerZone = this.dzcr_View.getChildByName("CenterZone"),
                        this.dzcr__continueBtn = this.dzcr__centerZone.getChildByName("ContinueBtn");
                    this.applist = this.dzcr__centerZone.getChildByName("applist");
                    platform.getInstance().initList(this.applist);
                }, t.prototype.onStart = function() {}, t.prototype.dzcr_addEvent = function() {
                    e.prototype.dzcr_addEvent.call(this),
                        this.dzcr__continueBtn.on(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.dzcr_removeEvent = function() {
                    e.prototype.dzcr_removeEvent.call(this),
                        this.dzcr__continueBtn.off(Laya.Event.CLICK, this, this.dzcr_onContinueBtn);
                }, t.prototype.dzcr_onBackBtn = function() {}, t.prototype.dzcr_onContinueBtn = function() {
                    this.dzcr_closeView();
                    ss["default"].getInstance().ResetGame();
                    // if (this.dzcr__clickTag ) {

                    //     // s["default"].dzcr_instance.dzcr_openView(s.dzcr_ViewDef.dzcr_Export2View), 
                    // }
                }, t.prototype.dzcr_BannerUp = function() {}, t.prototype.dzcr_BtnUp = function() {}, t.prototype.onDestroy = function() {
                    null != this.dzcr__banner && this.dzcr__banner.dzcr_hide(), this.dzcr__banner = null;
                }, t.prototype.dzcr_onHistoryBtn = function() {}, t;
            }(n["default"]);
        r["default"] = l;
    }, {
        "../../../Config/AppSwitchConfig": 5,
        "../../../KRQ/Com/KRQ_RollSingleAd": 19,
        "../../../Mgr/ViewMgr": 35,
        "../../../Mgr/WXADMgr": 36,
        "../../../Mgr/WudianMgr": 37,
        "../../../Utilit": 56,
        "../../../Mgr/SceneMgr": 32,
        "../TemplateViewBase": 68

    }],
    65: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../TemplateViewBase"),
            ss = e("../../../Mgr/SceneMgr"),
            i = e("../../../Mgr/WXADMgr"),
            o = e("../../../Mgr/WudianMgr"),
            a = e("../../../Config/AppSwitchConfig"),
            c = e("../../../KRQ/Com/KRQ_RollSingleAd"),
            d = e("../../../Utilit"),
            s = e("../../../Mgr/ViewMgr"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__centerZone = null, t.dzcr__backBtn = null, t.dzcr__nextBtn = null,
                        t.dzcr__rollSingleAds = new Array(),
                        t.dzcr__clickTag = !1, t.dzcr__clickTimingTag = !1,
                        t.dzcr__banner = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this.dzcr__centerZone = this.dzcr_View.getChildByName("CenterZone"),
                        this.dzcr__nextBtn = this.dzcr__centerZone.getChildByName("NextBtn");
                    this.applist = this.dzcr__centerZone.getChildByName("applist");
                    platform.getInstance().initList(this.applist);
                }, t.prototype.onStart = function() {}, t.prototype.dzcr_addEvent = function() {
                    e.prototype.dzcr_addEvent.call(this),
                        this.dzcr__nextBtn.on(Laya.Event.CLICK, this, this.dzcr_onNextBtn);
                }, t.prototype.dzcr_removeEvent = function() {
                    e.prototype.dzcr_removeEvent.call(this),
                        this.dzcr__nextBtn.off(Laya.Event.CLICK, this, this.dzcr_onNextBtn);
                }, t.prototype.dzcr_onBackBtn = function() {}, t.prototype.dzcr_onNextBtn = function() {
                    if (this.dzcr__clickTag || !o["default"].dzcr_WudianFlag) {
                        this.dzcr_closeView();
                        ss["default"].getInstance().ResetGame();
                    } else {}
                }, t.prototype.dzcr_BannerUp = function() {}, t.prototype.dzcr_BtnUp = function() {}, t.prototype.onDestroy = function() {
                    null != this.dzcr__banner && this.dzcr__banner.dzcr_hide(), this.dzcr__banner = null;
                }, t.prototype.dzcr_onHistoryBtn = function() {
                    var e = this;
                    s["default"].dzcr_instance.dzcr_openView(s.dzcr_ViewDef.dzcr_MiniGameView, null, function(t) {
                        e.dzcr_hide(), null != e.dzcr__banner && e.dzcr__banner.dzcr_hide(), t.dzcr_onCloseEvent = function() {
                            null == e.dzcr_View || e.dzcr_View.destroyed || (e.dzcr_show(), null != e.dzcr__banner && e.dzcr__banner.dzcr_show());
                        };
                    });
                }, t;
            }(n["default"]);
        r["default"] = l;
    }, {
        "../../../Config/AppSwitchConfig": 5,
        "../../../KRQ/Com/KRQ_RollSingleAd": 19,
        "../../../Mgr/ViewMgr": 35,
        "../../../Mgr/WXADMgr": 36,
        "../../../Mgr/WudianMgr": 37,
        "../../../Utilit": 56,
        "../../../Mgr/SceneMgr": 32,
        "../TemplateViewBase": 68
    }],
    66: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i = e("../TemplateViewBase"),
            o = e("../../../KRQ/ViewCom/KRQ_Main"),
            a = e("../../../Utilit"),
            c = e("../../../Mgr/LevelMgr"),
            d = e("../../../Mgr/SceneMgr");
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.NoLoopAd = 1] = "NoLoopAd", e[e.NoBannerAd = 2] = "NoBannerAd";
        }(n = r.dzcr_InGameShowType || (r.dzcr_InGameShowType = {}));
        var s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dzcr__centerZone = null, t.dzcr__krqMain = null, t;
            }
            return __extends(t, e), t.prototype.onAwake = function() {
                e.prototype.onAwake.call(this), this.dzcr__centerZone = this.dzcr_View.getChildByName("CenterZone");
                var t = Laya.stage.width / Laya.stage.height;
                .5 > t ? a["default"].dzcr_isIphoneX() && (this.dzcr__centerZone.top = this.dzcr__centerZone.top + 75) : (this.dzcr__centerZone.top = this.dzcr__centerZone.top - 200,
                    a["default"].dzcr_isIphoneX() && (this.dzcr__centerZone.top = this.dzcr__centerZone.top + 75));
            }, t.prototype.dzcr_openView = function(t) {
                if (e.prototype.dzcr_openView.call(this, t), null != t && null != t.showType) {}
                var i = this.dzcr__centerZone.getChildByName("LevelInfo"),
                    a = i.getChildByName("distance");
                this.m_curDisTxt = a.getChildByName("curDistance"), this.m_allDisTxt = a.getChildByName("allDistance"),
                    this.m_curDisTxt.text = "" + c["default"].getInstance().curLevel, this.m_allDisTxt.text = (c["default"].getInstance().curLevel + 1).toString(),
                    this.m_progressBar = i.getChildByName("bar"), this.m_ball = i.getChildByName("ball");
            }, t.prototype.onStart = function() {
                e.prototype.onStart.call(this);
            }, t.prototype.onUpdate = function() {
                this.m_progressBar.scaleX = 1 - d["default"].getInstance().curDistance / d["default"].getInstance().allDistance,
                    this.m_ball.x = this.m_progressBar.x + this.m_progressBar.width * this.m_progressBar.scaleX - 20;
            }, t.prototype.dzcr_addEvent = function() {
                e.prototype.dzcr_addEvent.call(this);
            }, t.prototype.dzcr_removeEvent = function() {
                e.prototype.dzcr_removeEvent.call(this);
            }, t;
        }(i["default"]);
        r["default"] = s;
    }, {
        "../../../KRQ/ViewCom/KRQ_Main": 24,
        "../../../Mgr/LevelMgr": 31,
        "../../../Mgr/SceneMgr": 32,
        "../../../Utilit": 56,
        "../TemplateViewBase": 68
    }],
    67: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../../../Mgr/CameraMgr"),
            i = e("../TemplateViewBase"),
            o = e("../../../KRQ/ViewCom/KRQ_Main"),
            a = e("../../../Event/EventMgr"),
            c = e("../../../Event/EventDef"),
            d = e("../../../User/User"),
            s = e("../../../Utilit"),
            l = e("../../../Mgr/ViewMgr"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__krqMain = null, t.dzcr__centerZone = null, t.dzcr__startBtn = null,
                        t.dzcr__levelNum = null, t.dzcr__moneyNum = null, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this),
                        this.dzcr__krqMain = this.dzcr_View.getChildByName("KRQ_Main").getComponent(o["default"]),
                        this.dzcr__centerZone = this.dzcr_View.getChildByName("CenterZone");
                    var t = Laya.stage.width / Laya.stage.height;

                    this.dzcr__startBtn = this.dzcr__centerZone.getChildByName("StartBtn"),
                        this.dzcr__levelNum = this.dzcr__centerZone.getChildByName("LevelInfo").getChildByName("LevelNum"),
                        this.dzcr__levelNum = this.dzcr__centerZone.getChildByName("LevelInfo").getChildByName("LevelNum")
                }, t.prototype.onStart = function() {
                    e.prototype.onStart.call(this), n["default"].getInstance().setEndFlag(!1),
                        this.dzcr__levelNum.value = String(d["default"].dzcr_getLeveNum());
                }, t.prototype.dzcr_addEvent = function() {
                    e.prototype.dzcr_addEvent.call(this),
                        this.dzcr__startBtn.on(Laya.Event.CLICK, this, this.dzcr_onStartBtn),
                        a["default"].dzcr_instance.dzcr_regEvemt(c.dzcr_EventDef.dzcr_Game_OnUserMoneyChange, this, this.dzcr_onUserMoneyChange);
                }, t.prototype.dzcr_removeEvent = function() {
                    e.prototype.dzcr_removeEvent.call(this),
                        this.dzcr__startBtn.off(Laya.Event.CLICK, this, this.dzcr_onStartBtn),
                        a["default"].dzcr_instance.dzcr_removeEvent(c.dzcr_EventDef.dzcr_Game_OnUserMoneyChange, this, this.dzcr_onUserMoneyChange);
                }, t.prototype.dzcr_onStartBtn = function() {
                    platform.getInstance().showInterstitial(() => {
                        a["default"].dzcr_instance.dzcr_dispatch(c.dzcr_EventDef.dzcr_Game_OnLevelStart, {
                                result: 1
                            }),
                            l["default"].dzcr_instance.dzcr_openView(l.dzcr_ViewDef.dzcr_InGameView), this.dzcr_closeView();
                    });
                }, t.prototype.dzcr_onUserMoneyChange = function(e) {}, t;
            }(i["default"]);
        r["default"] = _;
    }, {
        "../../../Event/EventDef": 7,
        "../../../Event/EventMgr": 8,
        "../../../KRQ/ViewCom/KRQ_Main": 24,
        "../../../Mgr/CameraMgr": 29,
        "../../../Mgr/ViewMgr": 35,
        "../../../User/User": 55,
        "../../../Utilit": 56,
        "../TemplateViewBase": 68
    }],
    68: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../ViewBase"),
            i = e("../../Utilit"),
            o = e("../../Mgr/ViewMgr"),
            a = e("../../Mgr/WudianMgr"),
            c = e("../../WXAPI"),
            d = e("../../Config/AppSwitchConfig"),
            s = e("../../QQMiniGameAPI"),
            l = e("../../Event/EventMgr"),
            _ = e("../../Event/EventDef"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr__historyBtn = null, t.dzcr__topZone = null, t;
                }
                return __extends(t, e),
                    Object.defineProperty(t.prototype, "dzcr_TopZone", {
                        get: function() {
                            return null == this.dzcr__topZone && (this.dzcr__topZone = this.dzcr_View.getChildByName("TopZone")),
                                this.dzcr__topZone;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.onAwake = function() {}, t.prototype.dzcr_addEvent = function() {
                        e.prototype.dzcr_addEvent.call(this),
                            l["default"].dzcr_instance.dzcr_regEvemt(_.dzcr_EventDef.dzcr_App_OnUpdateIpBlockState, this, this.onUpdateIpBlockState);
                    }, t.prototype.dzcr_removeEvent = function() {
                        e.prototype.dzcr_removeEvent.call(this),
                            l["default"].dzcr_instance.dzcr_removeEvent(_.dzcr_EventDef.dzcr_App_OnUpdateIpBlockState, this, this.onUpdateIpBlockState);
                    }, t.prototype.dzcr_onHistoryBtn = function() {
                        var e = this;
                        o["default"].dzcr_instance.dzcr_openView(o.dzcr_ViewDef.dzcr_MiniGameView, null, function(t) {
                            e.dzcr_hide(), t.dzcr_onCloseEvent = function() {
                                null == e.dzcr_View || e.dzcr_View.destroyed || e.dzcr_show();
                            };
                        });
                    }, Object.defineProperty(t.prototype, "isShowHistoryBtn", {
                        get: function() {
                            var e = 0;
                            Laya.Browser.onMiniGame ? e = c["default"].dzcr_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (e = s["default"].dzcr_getLaunchOptionsSync().scene);
                            for (var t = !0, r = d["default"].dzcr_getInstance().dzcr_getAppSwitchData().dzcr_wudianSceneList, n = 0; n < r.length; ++n) {
                                var i = r[n];
                                e == i && (t = !1);
                            }
                            return !Laya.Browser.onQGMiniGame && t && a["default"].dzcr_GetIpBlocked() && 0 != d["default"].dzcr_getInstance().dzcr_getAppSwitchData().fakeBtn ? !0 : !1;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.onUpdateIpBlockState = function(e) {}, t;
            }(n["default"]);
        r["default"] = u;
    }, {
        "../../Config/AppSwitchConfig": 5,
        "../../Event/EventDef": 7,
        "../../Event/EventMgr": 8,
        "../../Mgr/ViewMgr": 35,
        "../../Mgr/WudianMgr": 37,
        "../../QQMiniGameAPI": 43,
        "../../Utilit": 56,
        "../../WXAPI": 72,
        "../ViewBase": 71
    }],
    69: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../ViewBase"),
            i = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.dzcr__bg = this.owner.getChildByName("Bg"), this.dzcr__bg.x = Laya.stage.width / 2 - this.dzcr__bg.width / 2,
                        this.dzcr__tipsText = this.dzcr__bg.getChildByName("Text");
                }, t.prototype.dzcr_openView = function(t) {
                    e.prototype.dzcr_openView.call(this, t), this.dzcr_setTipsMsg(t), Laya.timer.clearAll(this);
                    var r = this;
                    Laya.timer.once(3e3, this, function() {
                        r.dzcr_closeView();
                    });
                }, t.prototype.dzcr_setTipsMsg = function(e) {
                    this.dzcr__tipsText.text = e;
                }, t;
            }(n["default"]);
        r["default"] = i;
    }, {
        "../ViewBase": 71
    }],
    70: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.TwinkleSpeed = 1e3, t.TwinkleMinSize = .95, t.TwinkleMaxSize = 1.05, t.dzcr__aniForward = !1,
                    t.dzcr__fontSize = 25, t.dzcr__originSize = 1, t;
            }
            return __extends(t, e), t.prototype.onAwake = function() {
                this.dzcr__displaySp = this.owner, this.dzcr__disText = this.owner.getChildByName("TitelText"),
                    this.dzcr__originSize = this.dzcr__displaySp.scaleX, null != this.dzcr__disText && (this.dzcr__disText.text = "",
                        this.dzcr__fontSize = this.dzcr__disText.fontSize);
            }, t.prototype.onEnable = function() {
                this.dzcr__displaySp.scale(this.dzcr__originSize, this.dzcr__originSize);
            }, t.prototype.onDisable = function() {}, t.prototype.onUpdate = function() {
                this.dzcr_displayAni();
            }, t.prototype.dzcr_displayAni = function() {
                if (this.dzcr__aniForward) {
                    var e = this.dzcr__displaySp.scaleX + Laya.timer.delta / this.TwinkleSpeed;
                    e = Math.min(e, this.TwinkleMaxSize * this.dzcr__originSize), this.dzcr__displaySp.scale(e, e),
                        this.dzcr__displaySp.scaleX >= this.TwinkleMaxSize * this.dzcr__originSize && (this.dzcr__aniForward = !1);
                } else {
                    var e = this.dzcr__displaySp.scaleX - Laya.timer.delta / this.TwinkleSpeed;
                    e = Math.max(e, this.TwinkleMinSize * this.dzcr__originSize), this.dzcr__displaySp.scale(e, e),
                        this.dzcr__displaySp.scaleX <= this.TwinkleMinSize * this.dzcr__originSize && (this.dzcr__aniForward = !0);
                }
            }, t;
        }(Laya.Script);
        r["default"] = n;
    }, {}],
    71: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../Mgr/ViewMgr"),
            i = e("../Event/EventMgr"),
            o = e("../Event/EventDef"),
            a = e("../Utilit"),
            c = e("./IViewStateListener"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dzcr_onCloseEvent = null, t.dzcr_onOpenEvent = null, t._viewBase = !0,
                        t._viewDef = n.dzcr_ViewDef.dzcr_None, t._data = {}, t;
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "dzcr_View", {
                    get: function() {
                        return this.owner;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onAwake = function() {
                    this.dzcr_View.autoDestroyAtClosed = !0;
                }, t.prototype.onEnable = function() {
                    this.dzcr_addEvent();
                }, t.prototype.onDisable = function() {
                    this.dzcr_removeEvent();
                }, t.prototype.onDestroy = function() {
                    this.dzcr_removeEvent();
                }, t.prototype.dzcr_openView = function(e) {
                    this._data = e, this.dzcr_show(), i["default"].dzcr_instance.dzcr_dispatch(o.dzcr_EventDef.dzcr_Game_OnViewOpen, {
                        view: this._viewDef
                    }), this.dzcr_onOpenEvent && this.dzcr_onOpenEvent();
                }, t.prototype.dzcr_addEvent = function() {}, t.prototype.dzcr_removeEvent = function() {
                    Laya.timer.clearAll(this);
                }, t.prototype.dzcr_closeView = function() {
                    n["default"].dzcr_instance.dzcr_closeView(this._viewDef);
                }, t.prototype.dzcr_hide = function() {
                    var e = this;
                    this.dzcr_View.visible = !1, this.onHide(), a["default"].dzcr_forEachChild(this.owner, function(t) {
                        var r = t._components;
                        if (r)
                            for (var n = 0; n < r.length; n++) {
                                var i = r[n];
                                c.isIViewStateListener(i) && i.onViewHide(e);
                            }
                    });
                }, t.prototype.dzcr_show = function() {
                    var e = this;
                    this.dzcr_View.visible = !0, this.onShow(), a["default"].dzcr_forEachChild(this.owner, function(t) {
                        var r = t._components;
                        if (r)
                            for (var n = 0; n < r.length; n++) {
                                var i = r[n];
                                c.isIViewStateListener(i) && i.onViewShow(e);
                            }
                    });
                }, t.prototype.dzcr_viewIsHide = function() {
                    return this.dzcr_View.visible;
                }, t.prototype.onHide = function() {}, t.prototype.onShow = function() {}, t.prototype.onClose = function() {
                    Laya.timer.clearAll(this), Laya.Tween.clearAll(this), i["default"].dzcr_instance.dzcr_dispatch(o.dzcr_EventDef.dzcr_Game_OnViewClose, {
                        view: this._viewDef
                    }), this.dzcr_onCloseEvent && this.dzcr_onCloseEvent();
                }, t;
            }(Laya.Script);
        r["default"] = d;
    }, {
        "../Event/EventDef": 7,
        "../Event/EventMgr": 8,
        "../Mgr/ViewMgr": 35,
        "../Utilit": 56,
        "./IViewStateListener": 60
    }],
    72: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.dzcr_wxLogin = function(e, t) {
                    Laya.Browser.onMiniGame && Laya.Browser.window.wx.login({
                        success: function(t) {
                            if (t.code) {
                                var r = t.code;
                                e(r), console.log("登陆成功,获取到code : " + r);
                            }
                        }
                    });
                }, e.dzcr_onRewardedVideoAdLoad = function() {
                    console.log("激励视频 广告加载完成");
                }, e.dzcr_onRewardedVideoAdError = function(t) {
                    console.log("激励视频 广告加载失败" + t), e.dzcr__onRewardedVideoAdFailed && e.dzcr__onRewardedVideoAdFailed();
                }, e.dzcr_onRewardedVideoAdClose = function(t) {
                    t && t.isEnded || null == t ? (console.log("激励视频 已完整观看"), e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                        e.dzcr__onRewardedVideoAdClose && e.dzcr__onRewardedVideoAdClose(!1));
                }, e.dzcr_regRewardedVideoAdEvent = function(t) {
                    t.onLoad(e.dzcr_onRewardedVideoAdLoad), t.onError(e.dzcr_onRewardedVideoAdError),
                        t.onClose(e.dzcr_onRewardedVideoAdClose), e.dzcr__isRegRewardedVideoAdEvent = !0;
                }, e.dzcr_showRewardedVideoAd = function(t, r) {
                    if (Laya.Browser.onMiniGame) {
                        e.dzcr__onRewardedVideoAdClose = t, e.dzcr__onRewardedVideoAdFailed = r;
                        var n = Laya.Browser.window.wx.createRewardedVideoAd({
                            adUnitId: e.dzcr_adUnitId
                        });
                        e.dzcr__isRegRewardedVideoAdEvent || e.dzcr_regRewardedVideoAdEvent(n), n.load().then(function() {
                            var e = n.show();
                            e.then(function() {
                                return console.log("激励视频 广告显示成功");
                            }), e["catch"](function(e) {
                                n.load().then(function() {
                                    return n.show();
                                })["catch"](function(e) {
                                    console.log("激励视频 广告显示失败"), r && r();
                                });
                            });
                        })["catch"](function(e) {
                            console.log("激励视频 广告加载失败"), r && r();
                        });
                    } else t(!0);
                }, e.dzcr_navigateToMiniProgram = function(e, t, r, n, i) {
                    Laya.Browser.onMiniGame && (console.log("跳转游戏： " + e), Laya.Browser.window.wx.navigateToMiniProgram({
                        appId: e,
                        path: t,
                        extraData: {
                            foo: "bar"
                        },
                        envVersion: "release",
                        success: function(e) {
                            r && r(e);
                        },
                        fail: function(e) {
                            n && n(e);
                        },
                        complete: function(e) {
                            i && i(e);
                        }
                    }));
                }, e.dzcr_share = function(t, r, n) {
                    var i = this;
                    Laya.Browser.onMiniGame && (e.dzcr__onShow = function() {
                            Laya.Browser.window.wx.offShow(e.dzcr__onShow), e.dzcr__onShow = null;
                            Date.now() - i.dzcr__lastShareTime;
                            t && t(Date.now() - i.dzcr__lastShareTime > 2e3 ? !0 : !1);
                        }, Laya.Browser.window.wx.onShow(e.dzcr__onShow), e.dzcr__lastShareTime = Date.now(),
                        Laya.Browser.window.wx.shareAppMessage({
                            title: r,
                            imageUrl: n
                        }));
                }, e.dzcr_showInterstitialAd = function(t, r) {
                    if (Laya.Browser.onMiniGame) {
                        var n = Laya.Browser.window.wx.createInterstitialAd({
                            adUnitId: e.dzcr_InsAdUnitId
                        });
                        n.onLoad(function() {
                            console.log("插屏广告 加载完成"), n.show()["catch"](function(e) {
                                console.log("插屏广告 显示失败 ：" + e), r && r();
                            });
                        }), n.onError(function(e) {
                            console.log("插屏广告 加载失败" + e), r && r();
                        }), n.onClose(function() {
                            console.log("插屏广告 关闭"), t && t();
                        });
                    } else t();
                }, e.dzcr_getLaunchOptionsSync = function() {
                    if (Laya.Browser.onMiniGame) {
                        var e = Laya.Browser.window.wx.getLaunchOptionsSync();
                        console.log("场景值 " + e.scene);
                        var t = JSON.stringify(e.query);
                        console.log("Query参数 " + t);
                        var r = e.query.key;
                        return console.log("Query参数：key " + r), console.log("ShareTicket " + e.shareTicket),
                            console.log("ReferrerInfo.appId " + e.referrerInfo.appId), console.log("ReferrerInfo.extraData " + e.referrerInfo.extraData),
                            e;
                    }
                    var n = {
                        scene: 1001,
                        query: "",
                        shareTicket: "",
                        appId: "",
                        extraData: ""
                    };
                    return n;
                }, e.dzcr_SetShareMenu = function(e, t, r, n, i) {
                    Laya.Browser.onMiniGame && (console.log("小游戏设置转发按钮"), Laya.Browser.window.wx.showShareMenu({
                        withShareTicket: !1,
                        success: r,
                        fail: n,
                        complete: i
                    }), Laya.Browser.window.wx.onShareAppMessage(function() {
                        return {
                            title: e,
                            imageUrl: t
                        };
                    }));
                }, e.dzcr_checkUpdate = function() {
                    if (Laya.Browser.onMiniGame) {
                        var e = Laya.Browser.window.wx.getUpdateManager();
                        e.onCheckForUpdate(function(e) {
                            console.log("是否需要更新 : ", e.hasUpdate);
                        }), e.onUpdateReady(function() {
                            Laya.Browser.window.wx.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启小游戏？",
                                success: function(t) {
                                    t.confirm && e.applyUpdate();
                                }
                            });
                        }), e.onUpdateFailed(function() {
                            console.log("新版本下载失败!!!");
                        });
                    }
                }, e.dzcr_adUnitId = "adunit-eef36f84c44bbdc1", e.dzcr_bannerAdUnitId = "adunit-cacd4135bbabfff5",
                e.dzcr_InsAdUnitId = "adunit-440e21cc02c0d282", e.dzcr__isRegRewardedVideoAdEvent = !1,
                e.dzcr__onRewardedVideoAdFailed = null, e.dzcr__onRewardedVideoAdClose = null, e.dzcr__onShow = null,
                e.dzcr__lastShareTime = 0, e;
        }();
        r["default"] = n;
    }, {}],
    73: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i = Laya.Scene,
            o = Laya.ClassUtils.regClass;
        ! function(e) {
            var t;
            ! function(e) {
                var t = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "Scene",
                        props: {
                            width: 750,
                            top: 0,
                            right: 0,
                            left: 0,
                            height: 1334,
                            bottom: 0
                        },
                        compId: 2,
                        child: [{
                            type: "Clip",
                            props: {
                                y: 0,
                                x: 1,
                                width: 750,
                                skin: "Loading/bgdi.png",
                                name: "Bg",
                                height: 1334
                            },
                            compId: 6,
                            child: [{
                                type: "Clip",
                                props: {
                                    skin: "",
                                    right: 0,
                                    name: "BottomZone",
                                    left: 0,
                                    height: 570,
                                    bottom: 100
                                },
                                compId: 23,
                                child: [{
                                    type: "Clip",
                                    props: {
                                        y: 326,
                                        x: 376,
                                        width: 615,
                                        skin: "Loading/loadingdown.png",
                                        pivotY: 22,
                                        pivotX: 308,
                                        name: "processBarBg",
                                        height: 44,
                                        sizeGrid: "0,25,0,25"
                                    },
                                    compId: 8,
                                    child: [{
                                        type: "Clip",
                                        props: {
                                            y: 22,
                                            x: 10,
                                            width: 594,
                                            skin: "Loading/loadingup.png",
                                            pivotY: 13,
                                            name: "processBar",
                                            left: 11,
                                            height: 26,
                                            bottom: 9,
                                            sizeGrid: "0,12,0,12"
                                        },
                                        compId: 5
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: -24,
                                            x: 292,
                                            width: 143,
                                            texture: "Loading/lt.png",
                                            pivotY: 12,
                                            pivotX: 72,
                                            height: 23
                                        },
                                        compId: 10,
                                        child: [{
                                            type: "Sprite",
                                            props: {
                                                y: 15,
                                                x: 149,
                                                width: 6,
                                                texture: "Loading/p.png",
                                                height: 5
                                            },
                                            compId: 11
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: 15,
                                                x: 159,
                                                width: 6,
                                                texture: "Loading/p.png",
                                                height: 5
                                            },
                                            compId: 12
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: 15,
                                                x: 168,
                                                width: 6,
                                                texture: "Loading/p.png",
                                                height: 5
                                            },
                                            compId: 13
                                        }]
                                    }]
                                }, {
                                    type: "Clip",
                                    props: {
                                        y: 144,
                                        x: 375,
                                        width: 513,
                                        pivotY: 50,
                                        pivotX: 257,
                                        name: "LogoAni",
                                        height: 100
                                    },
                                    compId: 14,
                                    child: []
                                }]
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 300,
                                    x: 115,
                                    texture: "Loading/logo.png",
                                    name: "logo"
                                },
                                compId: 24
                            }]
                        }, {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                runtime: "View/LoadingView/LoadingView.ts"
                            },
                            compId: 7
                        }],
                        loadList: ["Loading/bgdi.png", "Loading/loadingdown.png", "Loading/loadingup.png", "Loading/lt.png", "Loading/p.png", "Loading/logo.png"],
                        loadList3D: []
                    }, t;
                }(i);
                e.LoadingUI = t, o("ui.View.LoadingUI", t);
            }(t = e.View || (e.View = {}));
        }(n = r.ui || (r.ui = {}));
    }, {}]
}, {}, [28]);