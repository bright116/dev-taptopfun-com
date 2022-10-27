var __extends = this && this.__extends || function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    };
    return function(e, i) {
        function n() {
            this.constructor = e;
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype,
            new n());
    };
}();

! function() {
    function t(e, i, n) {
        function a(s, r) {
            if (!i[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var c = i[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var i = e[s][1][t];
                    return a(i || t);
                }, c, c.exports, t, e, i, n);
            }
            return i[s].exports;
        }
        for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a;
    }
    return t;
}()({
    1: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./script/UiViews/ButtonAnim"),
            a = t("./script/UiViews/ConvergeAd"),
            o = t("./script/GameMgr3d/GameInputCtrl"),
            s = t("./script/UiViews/GameFighting"),
            r = t("./script/UiViews/PromotionAnimation"),
            l = t("./script/UiViews/OverAdListLoop"),
            h = t("./script/UiViews/GameOverLevel"),
            c = t("./script/UiViews/AdListLoop"),
            u = t("./script/UiViews/GetPropesView"),
            d = t("./script/UiViews/GoldenEggView"),
            f = t("./script/BuildPlatform/wx/WXLaunch"),
            p = t("./script/UiViews/MainViewVertical"),
            m = t("./script/UiViews/rank/RankItem"),
            y = t("./script/UiViews/rank/WXRankView"),
            g = t("./script/UiViews/Resurgence"),
            _ = t("./script/UiViews/SettleCoin"),
            v = t("./script/UiViews/SkinStore"),
            b = t("./script/UiViews/TipView"),
            w = function() {
                function t() {}
                return t.init = function() {
                        var t = Laya.ClassUtils.regClass;
                        t("script/UiViews/ButtonAnim.ts", n["default"]), t("script/UiViews/ConvergeAd.ts", a["default"]),
                            t("script/GameMgr3d/GameInputCtrl.ts", o["default"]), t("script/UiViews/GameFighting.ts", s["default"]),
                            t("script/UiViews/PromotionAnimation.ts", r["default"]), t("script/UiViews/OverAdListLoop.ts", l["default"]),
                            t("script/UiViews/GameOverLevel.ts", h["default"]),
                            t("script/UiViews/AdListLoop.ts", c["default"]),
                            t("script/UiViews/GetPropesView.ts", u["default"]), t("script/UiViews/GoldenEggView.ts", d["default"]),
                            t("script/BuildPlatform/wx/WXLaunch.ts", f["default"]), t("script/UiViews/MainViewVertical.ts", p["default"]),
                            t("script/UiViews/rank/RankItem.ts", m["default"]), t("script/UiViews/rank/WXRankView.ts", y["default"]),
                            t("script/UiViews/Resurgence.ts", g["default"]), t("script/UiViews/SettleCoin.ts", _["default"]),
                            t("script/UiViews/SkinStore.ts", v["default"]), t("script/UiViews/TipView.ts", b["default"]);
                    }, t.width = 750, t.height = 1334, t.scaleMode = "fixedwidth", t.screenMode = "vertical",
                    t.alignV = "middle", t.alignH = "center", t.startScene = "Launch.scene", t.sceneRoot = "",
                    t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t;
            }();
        i["default"] = w, w.init();
    }, {
        "./script/BuildPlatform/wx/WXLaunch": 4,
        "./script/GameMgr3d/GameInputCtrl": 22,
        "./script/UiViews/AdListLoop": 48,
        "./script/UiViews/ButtonAnim": 50,
        "./script/UiViews/ConvergeAd": 51,
        "./script/UiViews/GameFighting": 52,
        "./script/UiViews/GameOverLevel": 53,
        "./script/UiViews/GetPropesView": 54,
        "./script/UiViews/GoldenEggView": 55,
        "./script/UiViews/MainViewVertical": 56,
        "./script/UiViews/OverAdListLoop": 57,
        "./script/UiViews/PromotionAnimation": 58,
        "./script/UiViews/Resurgence": 59,
        "./script/UiViews/SettleCoin": 60,
        "./script/UiViews/SkinStore": 61,
        "./script/UiViews/TipView": 62,
        "./script/UiViews/rank/RankItem": 64,
        "./script/UiViews/rank/WXRankView": 65
    }],
    2: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameConfig"),
            a = t("./script/MyGameInit"),
            o = function() {
                function t() {
                    Laya.isWXPosMsg = !0, Laya.isWXOpenDataContext = !1, Laya.Text.CharacterCache = !1,
                        window.Laya3D ? Laya3D.init(n["default"].width, n["default"].height) :
                        Laya.init(n["default"].width, n["default"].height, Laya.WebGL),
                        Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT,
                        Laya.stage.alignH = "center",
                        // Laya.stage.screenMode = n["default"].screenMode, 
                        Laya.URL.exportSceneToJson = n["default"].exportSceneToJson, (n["default"].debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                        n["default"].physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                        n["default"].stat && Laya.Stat.show(), Laya.alertGlobalError = !0, a["default"].init(),
                        this.onVersionLoaded();
                }
                return t.prototype.onVersionLoaded = function() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }, t.prototype.onConfigLoaded = function() {
                    var t = [{
                        url: "loading/loading.atlas",
                        type: Laya.Loader.ATLAS
                    }];
                    Laya.loader.load(t, Laya.Handler.create(this, function() {
                        n["default"].startScene && Laya.Scene.open(n["default"].startScene);
                    }));
                }, t;
            }();
        new o();
    }, {
        "./GameConfig": 1,
        "./script/MyGameInit": 46
    }],
    3: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../../Common/EventMgr"),
            a = t("../../Common/SoundMgr"),
            o = t("../../Common/ViewMgr"),
            s = t("../../Datas/ConfigData"),
            r = t("../../Util/MyUtils"),
            l = t("../../Datas/UserData"),
            h = t("../../Common/HttpMgr"),
            c = t("../../Common/StatisticsMgr"),
            u = t("./WxAdManager"),
            d = t("../../UiViews/ConvergeAd"),
            f = t("../../GameMgr3d/GameEvent"),
            p = function() {
                function t() {
                    var t = this;
                    this._launch = {}, this.btns = [], this.stime = 0, this.shareBackArgs = {}, this.bannerHomeIsHide = !0,
                        this.bannerOtherIsHide = !0, this.bannerClassicEndIsHide = !0, this.isInited = !1,
                        this.hasAd = !1, this.videoPlayedTimes = 0, this._launch = window.wx.getLaunchOptionsSync(),
                        n["default"].instance.onOnceEvent("getSystemParamListBack", this, function() {
                            t.showShareMenu();
                        }), window.wx.onShow(function(e) {
                            var i = e.shareTicket,
                                r = e.query || {};
                            if (void 0 != i && r.avatarUrlGroup && r.nickNameGroup);
                            else {
                                var h = t.shareBackArgs || {};
                                Laya.Browser.now() - t.stime;
                                Laya.Browser.now() - t.stime > 2e3 ? (h.success = !0, t.shareBack && t.myCaller && t.shareBack.call(t.myCaller, h),
                                    t.shareBack = null) : (h.success = !1, t.shareBack && t.myCaller && t.shareBack.call(t.myCaller, h),
                                    t.shareBack = null);
                            }
                            s["default"].resLoadOk && a["default"].instance.playBGM();
                            var c = !1;
                            t.shareBackArgs && (c = t.shareBackArgs.notShowAd), Laya.timer.frameOnce(1, t, function() {
                                var t = o["default"].instance.getView("ConvergeAd.scene"),
                                    e = o["default"].instance.getView("MainVertical.scene"),
                                    i = o["default"].instance.getView("GetPropes.scene"),
                                    a = o["default"].instance.getView("SettleCoin.scene"),
                                    r = o["default"].instance.getView("GameOverLevel.scene"),
                                    h = o["default"].instance.getView("Resurgence.scene"),
                                    c = o["default"].instance.getView("GameFighting.scene"),
                                    u = 0;
                                if (e && e.visible) u = 6;
                                else if (i && i.visible) u = 0;
                                else if (a && a.visible) {
                                    var p = a._components,
                                        m = !1;
                                    if (p)
                                        for (var y = 0; y < p.length; y++) {
                                            var g = p[y];
                                            if (g.isMySettleCoin) {
                                                g.getIsFree && (m = g.getIsFree());
                                                break;
                                            }
                                        }
                                    u = m ? 4 : 2;
                                } else r && r.visible ? u = 3 : h && h.visible ? u = 1 : c && c.visible && (u = 7);
                                var _ = !1;
                                s["default"].game_back_tolist && 1 == s["default"].game_back_tolist[u] && (_ = !0),
                                    l["default"].isShare || !_ || t ? n["default"].instance.emit(f.GameEvent.ADBACK) : n["default"].instance.emit("openConvergeAd", {
                                        viewType: d.UI_VIEW_TYPE.NONE
                                    }), l["default"].isShare = !1;
                            }), t.shareBackArgs = {};
                        }), window.wx.onHide(function() {
                            t.stime = Laya.Browser.now();
                        }), this.init();
                }
                return t.prototype.init = function() {
                    Laya.Browser.onMiniGame && (s["default"].systemInfo.SDKVersion && r["default"].compareVersion(s["default"].systemInfo.SDKVersion, "2.0.4") >= 0 && (this.isInited = !0),
                        this.preBannerTimeHome = Laya.timer.currTimer, this.preBannerTimeOther = Laya.timer.currTimer,
                        this.preBannerTimeClassicEnd = Laya.timer.currTimer);
                }, t.prototype.onGoShare = function(t) {
                    this.myCaller = t.caller, this.shareBack = t.callback, this.shareBackArgs = t.args || {};
                }, t.ald = function(t, e) {
                    Laya.Browser.onMiniGame && 0 == l["default"].aladingStatus && window.wx.aldSendEvent(t, e);
                }, t.prototype.doLogin = function(t) {
                    var e = this;
                    Laya.Browser.onMiniGame && window.wx.login({
                        success: function(i) {
                            l["default"].code = i.code;
                            var n = e.getLaunchData(),
                                a = {};
                            a.code = i.code, n.query && (a.inviteId = n.query.invite_uid || "", a.channelId = n.query.channel || "",
                                    l["default"].fromImgid = n.query.cur_share_id || ""), n.referrerInfo && (l["default"].fromAppid = n.referrerInfo.appId),
                                a.success = t.success, a.fail = t.fail, h["default"].instance.login(a);
                        },
                        fail: function(t) {}
                    });
                }, t.prototype.getOffsetOpenDomain = function() {
                    return this.offsetOpenDomain;
                }, t.prototype.getLaunchData = function() {
                    return this._launch;
                }, t.prototype.getQuery = function() {
                    return this._launch.query;
                }, t.prototype.getReferrerInfo = function() {
                    return this._launch.referrerInfo;
                }, t.prototype.showMessage = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        var e = {};
                        e.title = t, window.wx.showToast(e);
                    }
                }, t.prototype.uploadRankDate = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        var e = [];
                        t.level && e.push({
                            key: "level",
                            value: t.level + ""
                        }), t.score && e.push({
                            key: "score",
                            value: t.score + ""
                        }), window.wx.setUserCloudStorage({
                            KVDataList: e,
                            success: function(t) {}
                        });
                    }
                }, t.prototype.showShareMenu = function() {
                    if (Laya.Browser.onMiniGame) {
                        window.wx.showShareMenu({
                            withShareTicket: !0
                        });
                        var t = this.createShareInfo();
                        window.wx.onShareAppMessage(function() {
                            return t;
                        });
                    }
                }, t.prototype.createShareInfo = function(t) {
                    var e = s["default"].getConfigData("shareInfo");
                    if (e) {
                        var i = e;
                        if (!i) return null;
                        var n = r["default"].random(0, i.length - 1),
                            a = i[n].title,
                            o = i[n].img,
                            h = "invite_uid=" + (l["default"].userId ? l["default"].userId : "");
                        return h += "&cur_share_id=" + i[n].id, h += "&channel=" + (l["default"].channelId ? l["default"].channelId : ""),
                            t && (t.id && (h += "&scene=" + t.id), t.itemId && (h += "&itemId=" + t.itemId),
                                t.type && (h += "&type=" + t.type), t.share_title && (a = t.share_title), t.share_img && (o = t.share_img)), {
                                title: a,
                                imageUrl: o,
                                query: h
                            };
                    }
                }, t.prototype.showTip = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        var e = {};
                        e.title = t, e.icon = "none", window.wx.showToast(e);
                    }
                }, t.prototype.shareAppMessage = function(t) {
                    if (Laya.Browser.onMiniGame && (t.callback && this.onGoShare(t), s["default"].getConfigData("shareInfo"))) {
                        c["default"].instance.shareStatistics(t.type);
                        var e = this.createShareInfo(t);
                        window.wx.shareAppMessage(e);
                    }
                }, t.prototype.navigateToMiniProgram = function(t) {
                    if (t && t.to_appid && Laya.Browser.onMiniGame) {
                        this.shareBackArgs.notShowAd = t.notShowAd, c["default"].instance.navigateToMiniProgramStatistics(t);
                        var e = Number(t.viewType);
                        s["default"].ad_cancel_tolist && 1 == s["default"].ad_cancel_tolist[e] && n["default"].instance.emit(f.GameEvent.ADJUMP),
                            window.wx.navigateToMiniProgram({
                                appId: t.to_appid,
                                path: t.toLinks,
                                extraData: {
                                    foo: "bar"
                                },
                                complete: function(e) {
                                    t.complete && t.complete(), t.complete = null;
                                },
                                fail: function(e) {
                                    if (!s["default"].mainViewJumpToOtherGame) {
                                        var i = Number(t.viewType);
                                        s["default"].ad_cancel_tolist && 1 == s["default"].ad_cancel_tolist[i] && n["default"].instance.emit("openConvergeAd", {
                                            viewType: t.viewType
                                        });
                                    }
                                    s["default"].mainViewJumpToOtherGame = !1, t.fail && t.fail(), t.fail = null;
                                },
                                success: function(e) {
                                    s["default"].mainViewJumpToOtherGame = !1, c["default"].instance.navigateToMiniProgramBackStatistics(t),
                                        t.callback && t.callback("success"), t.callback = null;
                                }
                            });
                    }
                }, t.prototype.setOpenDomainOffset = function() {
                    var t = Laya.stage.width - 750;
                    0 > t && (t = 0);
                    var e = Laya.stage.height - 1334;
                    0 > e && (e = 0), this.offsetOpenDomain = new Laya.Vector2(t, e);
                }, t.prototype.createAuthorizationButton = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        var e = this;
                        console.log("创建授权按钮"), wx.getSetting({
                            success: function(i) {
                                if (i.authSetting && i.authSetting["scope.userInfo"]) console.log("已经授权");
                                else {
                                    console.log("玩家未授权");
                                    var n = Laya.stage.width,
                                        a = Laya.stage.height,
                                        o = Laya.Browser.width / Laya.Browser.pixelRatio / n,
                                        s = Laya.Browser.height / Laya.Browser.pixelRatio / a,
                                        r = (t.x - t.width / 2) * o,
                                        u = (t.y + e.offsetOpenDomain.y - t.height / 2) * s,
                                        d = t.width * o,
                                        f = t.height * s,
                                        p = "#ffffff";
                                    t.isFull && (r = 0, u = (t.y + e.offsetOpenDomain.y / 2) * s, d = d, f = f, p = "#ff0703");
                                    var m = window.wx.createUserInfoButton({
                                        type: "text",
                                        text: "",
                                        style: {
                                            left: r,
                                            top: u,
                                            width: d,
                                            height: f
                                        }
                                    });
                                    e.btns && e.btns.push({
                                        button: m,
                                        isFull: t.isFull
                                    }), m.onTap(function(t) {
                                        t && t.userInfo ? (l["default"].nickName = t.userInfo.nickName, l["default"].gender = t.userInfo.gender,
                                            l["default"].avatarUrl = t.userInfo.avatarUrl, c["default"].instance.authorStatistics(),
                                            h["default"].instance.updateUserInfo(), e.btns && e.btns.forEach(function(t) {
                                                t && t.button.destroy();
                                            }), e.btns = null, m.destroy()) : e.destoryAuthorization();
                                    });
                                }
                            },
                            fail: function() {},
                            complete: function() {}
                        });
                    }
                }, t.prototype.destoryAuthorization = function() {
                    s["default"].repeatAuthorization ? this.setAuthorizationCheck(!1) : (s["default"].isCreateAuthorization = !0,
                        this.btns && this.btns.forEach(function(t) {
                            t && t.button.destroy();
                        }));
                }, t.prototype.setAuthorizationCheck = function(t) {
                    this.btns && this.btns.forEach(function(e) {
                        e && (t ? e.button.show() : e.button.hide());
                    });
                }, t.prototype.vibrateShort = function() {
                    Laya.Browser.onMiniGame && s["default"].isVirbort && window.wx.vibrateShort();
                }, t.prototype.vibrateLong = function() {
                    Laya.Browser.onMiniGame && s["default"].isVirbort && window.wx.vibrateLong();
                }, t.prototype.openCustomerServiceConversation = function() {
                    window.wx.openCustomerServiceConversation();
                }, t.prototype.cleanVideoCall = function() {
                    this.myCaller = null, this.callBackSuc = null, this.callBackFail = null, this.callBackErro = null;
                }, t.prototype.CanPlayVideo = function() {
                    return this.isInited && this.hasAd;
                }, t.prototype.initVedioCom = function() {
                    var t = this,
                        e = this;
                    if (this.isInited) {
                        var i = s["default"].rewardedAdId;
                        if (console.log("加载视频广告:", i), this.rewardedVideoAd = window.wx.createRewardedVideoAd({
                                adUnitId: i
                            }), void 0 == this.rewardedVideoAd) return;
                        this.rewardedVideoAd.onLoad(function() {
                            e.hasAd = !0;
                        }), this.rewardedVideoAd.onError(function(i) {
                            return e.hasAd = !1, t.callBackErro ? void t.callBackErro() : (null != e.callBackSuc && e.callBackSuc(),
                                void t.cleanVideoCall());
                        }), this.rewardedVideoAd.onClose(function(i) {
                            a["default"].instance.playBGM(),
                                h["default"].instance.videoCallback(), i && i.isEnded || void 0 === i ? (c["default"].instance.videoPlayOverAdStatistics(t._type),
                                    e.videoPlayedTimes += 1, null != e.callBackSuc && e.callBackSuc()) : null != e.callBackFail && e.callBackFail(),
                                t.cleanVideoCall();
                        });
                    }
                }, t.prototype.showVideo = function(t) {
                    if (!this.isInited) return void n["default"].instance.emit("openTip", "今日观看视频次数已用尽");
                    var e = this;
                    this._type = t._type || 0, this.myCaller = t.caller, this.callBackSuc = t.callBackSuc,
                        this.callBackFail = t.callBackFail, this.callBackErro = t.callBackErro, c["default"].instance.clickVideoStatistics(this._type),
                        this.hasAd ? (this.hasAd = !1, this.rewardedVideoAd.show()) : this.rewardedVideoAd.load().then(function() {
                            e.rewardedVideoAd.show(), e.hasAd = !1;
                        });
                }, t.prototype.loadBannerAdHome = function() {
                    Laya.Browser.onMiniGame && this.isInited && this.showBannerAdHome(!0);
                }, t.prototype.showBannerAdHome = function(t) {
                    var e = this;
                    if (Laya.Browser.onMiniGame && this.isInited) {
                        this.destoryAllBannerAd(), console.log("加载banner广告");
                        var i = s["default"].systemInfo.windowWidth,
                            n = Laya.stage.width / 2 - 140,
                            a = s["default"].systemInfo.windowHeight;
                        if (this.bannerHomeIsHide = !1, Laya.timer.currTimer - this.preBannerTimeHome > 3e4 && this.bannerHome && (this.bannerHome.destroy(),
                                this.bannerHome = null), !this.bannerHome) {
                            this.destroyBannerAdHome();
                            var o = s["default"].bannerAdIds[r["default"].random(0, s["default"].bannerAdIds.length - 1)];
                            console.log("广告id:", o), this.bannerHome = window.wx.createBannerAd({
                                adUnitId: o,
                                style: {
                                    left: 0,
                                    top: a - 100,
                                    width: n
                                }
                            }), this.bannerHome.onResize(function(t) {
                                e.bannerHome.style.left = (i - e.bannerHome.style.realWidth) / 2, e.bannerHome.style.top = a - e.bannerHome.style.realHeight,
                                    a / i > 2 && (e.bannerHome.style.top = e.bannerHome.style.top - 10);
                            }), this.bannerHome.onError(function(t) {
                                console.log("广告加载错误:", t);
                            }), this.preBannerTimeHome = Laya.timer.currTimer;
                        }
                        t || void 0 != this.bannerHome && this.bannerHome.show();
                    }
                }, t.prototype.showBannerAdOtherFast = function() {
                    this.bannerOther ? this.bannerOther.show() : this.showBannerAdOther();
                }, t.prototype.showBannerAdOther = function(t) {
                    var e = this;
                    if (Laya.Browser.onMiniGame && this.isInited) {
                        this.destoryAllBannerAd();
                        var i = s["default"].systemInfo.windowWidth,
                            n = i,
                            a = s["default"].systemInfo.windowHeight;
                        this.bannerOtherIsHide = !1, Laya.timer.currTimer - this.preBannerTimeOther > 3e4 && this.bannerOther && (this.bannerOther.destroy(),
                            this.bannerOther = null), this.bannerOther || (this.destroyBannerAdOther(), this.bannerOther = window.wx.createBannerAd({
                            adUnitId: s["default"].bannerAdIds[r["default"].random(0, s["default"].bannerAdIds.length - 1)],
                            style: {
                                left: 0,
                                top: a - 100,
                                width: n
                            }
                        }), this.bannerOther.onResize(function(t) {
                            e.bannerOther.style.left = (i - e.bannerOther.style.realWidth) / 2, e.bannerOther.style.top = a - e.bannerOther.style.realHeight - 10,
                                a / i > 2 && (e.bannerOther.style.top = e.bannerOther.style.top - 25);
                        }), this.bannerOther.onError(function(t) {
                            console.log("广告加载错误:", t);
                        }), this.preBannerTimeOther = Laya.timer.currTimer), t || void 0 != this.bannerOther && this.bannerOther.show();
                    }
                }, t.prototype.showBannerAdClassicEndFast = function() {
                    this.bannerClassicEnd ? this.bannerClassicEnd.show() : this.showBannerAdClassicEnd();
                }, t.prototype.showBannerAdClassicEnd = function(t) {
                    var e = this;
                    if (Laya.Browser.onMiniGame && this.isInited) {
                        this.destoryAllBannerAd();
                        var i = s["default"].systemInfo.windowWidth,
                            n = i,
                            a = s["default"].systemInfo.windowHeight;
                        this.bannerClassicEndIsHide = !1, Laya.timer.currTimer - this.preBannerTimeOther > 3e4 && this.bannerClassicEnd && (this.bannerClassicEnd.destroy(),
                            this.bannerClassicEnd = null), this.bannerClassicEnd || (this.destroyBannerAdClassicEnd(),
                            this.bannerClassicEnd = window.wx.createBannerAd({
                                adUnitId: s["default"].bannerAdIds[r["default"].random(0, s["default"].bannerAdIds.length - 1)],
                                style: {
                                    left: 0,
                                    top: a - 100,
                                    width: n
                                }
                            }), this.bannerClassicEnd.onError(function(t) {
                                console.log("广告加载错误:", t);
                            }), this.bannerClassicEnd.onResize(function(t) {
                                e.bannerClassicEnd.style.left = (i - e.bannerClassicEnd.style.realWidth) / 2, e.bannerClassicEnd.style.top = a - e.bannerClassicEnd.style.realHeight - 10,
                                    a / i > 2 && (e.bannerClassicEnd.style.top = e.bannerClassicEnd.style.top - 25);
                            }), this.preBannerTimeOther = Laya.timer.currTimer), t || void 0 != this.bannerClassicEnd && this.bannerClassicEnd.show();
                    }
                }, t.prototype.showInterstitialAD = function() {
                    return;
                }, t.prototype.destroyBannerAdHome = function() {
                    this.bannerHomeIsHide = !0, this.bannerHome && (this.preBannerTimeHome = 0, 1 == s["default"].ctrlInfo.is_banner ? (this.bannerHome.destroy(),
                        this.bannerHome = null) : this.bannerHome.hide());
                }, t.prototype.destroyBannerAdOther = function() {
                    this.bannerOtherIsHide = !0, this.bannerOther && (this.preBannerTimeOther = 0, 1 == s["default"].ctrlInfo.is_banner ? (this.bannerOther.destroy(),
                        this.bannerOther = null) : this.bannerOther.hide());
                }, t.prototype.destroyBannerAdClassicEnd = function() {
                    this.bannerClassicEndIsHide = !0, this.bannerClassicEnd && (this.preBannerTimeClassicEnd = 0,
                        1 == s["default"].ctrlInfo.is_banner ? (this.bannerClassicEnd.destroy(), this.bannerClassicEnd = null) : this.bannerClassicEnd.hide());
                }, t.prototype.destoryAllBannerAd = function() {
                    u["default"].Instance.hideBannerAd();
                }, t.prototype.showBanner = function(t) {}, t;
            }();
        i["default"] = p;
    }, {
        "../../Common/EventMgr": 7,
        "../../Common/HttpMgr": 8,
        "../../Common/SoundMgr": 10,
        "../../Common/StatisticsMgr": 11,
        "../../Common/ViewMgr": 14,
        "../../Datas/ConfigData": 15,
        "../../Datas/UserData": 17,
        "../../GameMgr3d/GameEvent": 21,
        "../../UiViews/ConvergeAd": 51,
        "../../Util/MyUtils": 66,
        "./WxAdManager": 6
    }],
    4: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("../../Datas/ConfigData"),
            o = t("../../GameMgr3d/GameMgr"),
            s = t("../../Common/SoundMgr"),
            r = t("../../Common/PlatformMgr"),
            l = t("../../Common/EventMgr"),
            h = t("../../Datas/UserData"),
            c = t("../../Util/MyUtils");
        ! function(t) {
            t[t.SHOW = 0] = "SHOW", t[t.HID = 1] = "HID", t[t.CHANG = 2] = "CHANG";
        }(n || (n = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.descStr = [],
                    e.descIndex = 0, e.headFirstY = 0, e.headSecondY = 0, e.toProcess = 1, e.progress = 0,
                    e.scene3dUrl = "res3d/LayaScene_game/Conventional/game.ls", e.skinScene3dUrl = "res3d/LayaScene_skinStroe/Conventional/skinStroe.ls",
                    e;
            }
            return __extends(e, t), e.prototype.onEnable = function() {
                var t = this;
                this.owner.height = Laya.stage.height;
                var e = this.owner.getChildByName("progressGroup");
                this.pro = e.getChildByName("progress"), this.proLabel = e.getChildByName("proLab"),
                    this.logo = this.owner.getChildByName("logo"), this.headImg = e.getChildByName("show").getChildByName("headImg"),
                    this.headImg1 = e.getChildByName("show").getChildByName("headImg1"), this.descLab = this.headImg.getChildByName("descLab"),
                    this.descLab1 = this.headImg1.getChildByName("descLab1"), this.tipView = this.owner.getChildByName("tip"),
                    this.tipViewMsg = this.tipView.getChildByName("tipMsg"),

                    this.yad = this.owner.getChildByName("yad"),
                    this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                        platform.getInstance().navigate("LOADING", "LOGO");
                    })


                this.tipViewOkButton = this.tipView.getChildByName("BtnOk"),
                    this.tipView.on(Laya.Event.CLICK, this, this.okOnClick), Laya.timer.once(1, this, function() {
                        var i = Laya.stage.height - 1334;
                        0 > i && (i = 0), t.logo.y += i / 4, e.y += i / 4, t.owner.height = Laya.stage.height,
                            t.tipView.y += i / 4;
                    }), this.loadRes();
            }, e.prototype.okOnClick = function() {
                this.tipView.visible = !1;
            }, e.prototype.loadDesc = function(t, e) {
                t.skin = "loading/loading_toux" + Math.floor(c["default"].random(1, 5)) + ".png",
                    e.text = this.descStr[this.descIndex];
                var i = t.width + e.width + 12;
                t.centerX = -(i / 2) + 14, this.descIndex += 1, this.descIndex >= this.descStr.length && (this.descIndex = 0);
            }, e.prototype.MoveDesc = function() {
                var t = this,
                    e = this.headImg.y;
                Laya.Tween.to(this.headImg, {
                    y: e - 50
                }, 200, null, Laya.Handler.create(this, function() {
                    t.headImg.y < t.headFirstY && (t.headImg.y = t.headSecondY, t.loadDesc(t.headImg, t.descLab));
                }));
                var i = this.headImg1.y;
                Laya.Tween.to(this.headImg1, {
                    y: i - 50
                }, 200, null, Laya.Handler.create(this, function() {
                    t.headImg1.y < t.headFirstY && (t.headImg1.y = t.headSecondY, t.loadDesc(t.headImg1, t.descLab1));
                }));
            }, e.prototype.loadRes = function() {
                var t = this,
                    e = [{
                        url: "res/atlas/common.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/game.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/mainview.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/rank.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/settleCoin.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/SkinStore.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/SkinStore/ballSkin.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/SkinStore/roleSkin.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/json/config.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "res/json/skin.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "res/sounds/bgm.mp3",
                        type: Laya.Loader.SOUND
                    }],
                    i = this;
                if (Laya.Browser.onMiniGame) {} else Laya.loader.load(e, Laya.Handler.create(this, function() {
                    i.updateProgress(.6), i.loadResComplete();
                }), Laya.Handler.create(this, function(t) {
                    i.updateProgress(t);
                }));
            }, e.prototype.loadResComplete = function() {
                var t = this;
                a["default"].initConfigData(Laya.Loader.getRes("res/json/config.json")), a["default"].initSkinConfigData(Laya.Loader.getRes("res/json/skin.json")),
                    a["default"].resLoadOk = !0, a["default"].isRedConfig = !0, Laya.Scene3D.load(t.skinScene3dUrl, Laya.Handler.create(t, function(e) {
                        t.skinScene3D = e, t.updateProgress(.7), Laya.Scene3D.load(t.scene3dUrl, Laya.Handler.create(t, t.On3DResLoadComplete));
                    }));
            }, e.prototype.On3DResLoadComplete = function(t) {
                h["default"].initSkinData(),

                    a["default"].ctrlInfo.isVideo = !0,
                    a["default"].ctrlInfo.isShare = !0, Laya.Browser.onMiniGame && Laya.MiniAdpter.sendAtlasToOpenDataContext("res/atlas/rank.atlas"),

                    r["default"].callAPIMethodByProxy("setOpenDomainOffset"),
                    this.ganeScene3D = t, this.updateProgress(.8);


                // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED,this,()=>
                // {

                //     this.serverLoad();
                // });
                // let o = new YYG.Options();
                // o.gameNameId = "Cool-Goal"
                // YYGSDK.__init__(YYG.ChannelType.YAD,o);
                platform.getInstance().yadstartup("Cool-Goal", () => {
                    s["default"].instance.playBGM(),
                        this.serverLoad();
                })

            }, e.prototype.serverLoad = function() {
                var t = this,
                    e = this;
                console.log("serverLoad"), Laya.Browser.onMiniGame ? (Laya.MiniAdpter.nativefiles = ["res3d/LayaScene_game", "res3d/LayaScene_skinStroe", "res/atlas", "loading/loading_bg.png", "loading/loading.png", "loading/logo.png", "res/sounds", "res/json", "res/language", "mainview", "game/bg_fuhuo_chaoyue.png", "game/di.png", "game/fuhuo_daojis_guang.png", "game/kuan@2x.png", "game/cainixh_tiao@2x.png", "settleCoin", "ConvergeAd.scene", "GameFighting.scene", "GameOverLevel.scene", "GetPropes.scene", "GoldenEggView.scene", "Launch.scene", "MainVertical.scene", "Rank.scene", "Resurgence.scene", "SettleCoin.scene", "Tip.scene", "skinStore.scene"],
                    Laya.timer.once(1e4, this, function() {
                        t.tipView.visible = !0, t.tipViewMsg.text = "Loading...";
                    }), Laya.Scene3D.load("LayaScene_GameServiceScene/Conventional/GameServiceScene.lh", Laya.Handler.create(this, function(t) {
                        e.serverScene3D = t, e.updateProgress(.99), Laya.timer.once(1, e, function() {
                            o["default"].instance.init(e.ganeScene3D, e.skinScene3D, e.serverScene3D), l["default"].instance.emit("goHome");
                        });
                    }))) : Laya.Scene3D.load("res3d/LayaScene_GameServiceScene/Conventional/GameServiceScene.lh", Laya.Handler.create(e, function(t) {
                    e.updateProgress(.99), e.serverScene3D = t, o["default"].instance.init(e.ganeScene3D, e.skinScene3D, e.serverScene3D),
                        l["default"].instance.emit("goHome");
                }));
            }, e.prototype.updateProgress = function(t) {
                this.progress = t > this.progress ? t : this.progress, this.progress >= 1 ? (this.proLabel.text = "Loading...",
                    this.pro.width = 500) : (this.pro.width = 500 * this.progress, this.proLabel.text = "Loading..." + Math.floor(100 * this.progress) + "%");
            }, e;
        }(Laya.Script);
        i["default"] = u;
    }, {
        "../../Common/EventMgr": 7,
        "../../Common/PlatformMgr": 9,
        "../../Common/SoundMgr": 10,
        "../../Datas/ConfigData": 15,
        "../../Datas/UserData": 17,
        "../../GameMgr3d/GameMgr": 23,
        "../../Util/MyUtils": 66
    }],
    5: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.prototype.setOpenView = function(t) {
                this.wxOpenDataView = t;
            }, t.prototype.closeFriendRank = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeFriendRank"
                });
            }, t.prototype.openFriendRank = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openFriendRank",
                    data: t
                });
            }, t.prototype.openGameOver = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openGameOver",
                    data: t
                });
            }, t.prototype.closeGameOver = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeGameOver"
                });
            }, t.prototype.openSurpassOther = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openSurpassOther",
                    data: t
                });
            }, t.prototype.closeSurpassOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeSurpassOther"
                });
            }, t.prototype.openGoingSurpassOther = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openGoingSurpassOther",
                    data: t
                });
            }, t.prototype.closeGoingSurpassOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeGoingSurpassOther"
                });
            }, t.prototype.openProvocationOther = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openProvocationOther",
                    data: t
                });
            }, t.prototype.closeProvocationOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeProvocationOther"
                });
            }, t.prototype.upSelfScore = function(t) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "upSelfScore",
                    data: t
                });
            }, t;
        }();
        i["default"] = n;
    }, {}],
    6: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("../../Datas/ConfigData"),
            o = t("../../Common/EventMgr");
        ! function(t) {
            t[t.event_showBannerAd_zhujiemian_erro_101 = 101] = "event_showBannerAd_zhujiemian_erro_101",
                t[t.event_showBannerAd_zhujiemianlingqujinbi_erro_102 = 102] = "event_showBannerAd_zhujiemianlingqujinbi_erro_102",
                t[t.event_showBannerAd_shiyongpifu_erro_103 = 103] = "event_showBannerAd_shiyongpifu_erro_103",
                t[t.event_showBannerAd_fuhuo_erro_104 = 104] = "event_showBannerAd_fuhuo_erro_104",
                t[t.event_showBannerAd_jiesuanjinbi_erro_105 = 105] = "event_showBannerAd_jiesuanjinbi_erro_105",
                t[t.event_showBannerAd_jiesuanjiemian_erro_106 = 106] = "event_showBannerAd_jiesuanjiemian_erro_106",
                t[t.event_show_lixianlingqujinbi_erro_107 = 107] = "event_show_lixianlingqujinbi_erro_107";
        }(n = i.AdEvent || (i.AdEvent = {}));
        var s = function() {
            function t() {
                this.isInited = !1, this.isInterstitial = !1, this.interstitialList = [], this.videoPlayedTimes = 0;
            }
            return Object.defineProperty(t, "Instance", {
                get: function() {
                    return null == t.instance && (t.instance = new t()), t.instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.compareVersion = function(t, e) {
                t = t.split("."), e = e.split(".");
                for (var i = Math.max(t.length, e.length); t.length < i;) t.push("0");
                for (; e.length < i;) e.push("0");
                for (var n = 0; i > n; n++) {
                    var a = parseInt(t[n]),
                        o = parseInt(e[n]);
                    if (a > o) return 1;
                    if (o > a) return -1;
                }
                return 0;
            }, t.prototype.init = function() {
                Laya.Browser.onMiniGame && (a["default"].systemInfo.SDKVersion && this.compareVersion(a["default"].systemInfo.SDKVersion, "2.0.4") >= 0 && (this.isInited = !0,
                        console.log("初始化广告"), this.showBannerAd_zhujiemian(!0), this.showBannerAd_zhujiemianlingqujinbi(-1, !0)),
                    a["default"].systemInfo.SDKVersion && this.compareVersion(a["default"].systemInfo.SDKVersion, "2.6.0") >= 0 && (this.isInterstitial = !0));
            }, t.prototype.LoadRewardedVideoAdList = function() {
                var t = this;
                a["default"].ctrlInfo.allAdsControl.forEach(function(e) {
                    3 == e.ad_type && (201 == e.ad_position_id ? t.initRewardedVideoAd_shuangbeikaiju(e.ad_id) : 202 == e.ad_position_id ? t.initRewardedVideoAd_zhujiemianduobeijinbi(e.ad_id) : 203 == e.ad_position_id ? t.initRewardedVideoAd_shiyongpifu(e.ad_id) : 204 == e.ad_position_id ? t.initRewardedVideoAd_fuhuo(e.ad_id) : 205 == e.ad_position_id ? t.initRewardedVideoAd_jiesuanjinbi(e.ad_id) : 206 == e.ad_position_id && t.initRewardedVideoAd_shangcheng(e.ad_id));
                });
            }, t.prototype.loadInterstitialList = function() {
                var t = this;
                a["default"].allAdsControl.forEach(function(e) {
                    1 == e.ad_type && t.showInterstitialAd(e.ad_position_id, !0);
                });
            }, t.prototype.showInterstitialAd = function(t, e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInterstitial) return !1;
                if (!a["default"].allAdsControl) return !1;
                var i = a["default"].getAdInfoById(t);
                return null == i || 0 == i.ad_status ? !1 : (this.interstitialList[t] || (this.interstitialList[t] = window.wx.createInterstitialAd({
                            adUnitId: i.ad_id
                        }), this.interstitialList[t] && this.interstitialList[t].load(), this.interstitialList[t].onLoad(function(t) {}),
                        this.interstitialList[t].onError(function(t) {}), this.interstitialList[t].onClose(function(t) {})),
                    void(e || this.interstitialList[t] && this.interstitialList[t].show()));
            }, t.prototype.destroyInterstitialAd = function(t) {
                this.interstitialList[t] && (this.interstitialList[t].destroy(), this.interstitialList[t] = null);
            }, t.prototype.showBannerAd_zhujiemian = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].allAdsControl) return !1;
                var i = a["default"].getAdInfoById(101);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = Laya.stage.width / 2 - 140,
                    l = a["default"].systemInfo.windowHeight;
                return this.bannerAd_zhujiemian || (this.bannerAd_zhujiemian = window.wx.createBannerAd({
                    adUnitId: i.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: r
                    }
                }), this.bannerAd_zhujiemian.onResize(function(e) {
                    var i = t.Instance.bannerAd_zhujiemian;
                    i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                        l / s > 2 && (i.style.top = i.style.top - 10));
                }), this.bannerAd_zhujiemian.onError(function(e) {
                    console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemian(), o["default"].instance.emit(n.event_showBannerAd_zhujiemian_erro_101);
                }), this.bannerAd_zhujiemian.onLoad(function() {})), e ? (void 0 != this.bannerAd_zhujiemian && this.bannerAd_zhujiemian.hide(), !0) : (console.log("广告显示"), this.bannerAd_zhujiemian.show(), !0);
            }, t.prototype.hideBannerAd_zhujiemian = function() {
                this.bannerAd_zhujiemian && this.bannerAd_zhujiemian.hide();
            }, t.prototype.destroyBannerAd_zhujiemian = function() {
                this.bannerAd_zhujiemian && (this.bannerAd_zhujiemian.destroy(), this.bannerAd_zhujiemian = null);
            }, t.prototype.showBannerAd_zhujiemianlingqujinbi = function(e, i) {
                if (void 0 === i && (i = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].allAdsControl) return !1;
                var s = a["default"].getAdInfoById(102);
                if (null == s || 0 == s.ad_status) return !1;
                var r = a["default"].systemInfo.windowWidth,
                    l = r,
                    h = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_zhujiemianlingqujinbi || (this.bannerAd_zhujiemianlingqujinbi = window.wx.createBannerAd({
                        adUnitId: s.ad_id,
                        style: {
                            left: 0,
                            top: h - 100,
                            width: l
                        }
                    }), this.bannerAd_zhujiemianlingqujinbi.onResize(function(e) {
                        var i = t.Instance.bannerAd_zhujiemianlingqujinbi;
                        i && (i.style.left = (r - i.style.realWidth) / 2, i.style.top = h - i.style.realHeight,
                            h / r > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_zhujiemianlingqujinbi.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemianlingqujinbi(), o["default"].instance.emit(n.event_showBannerAd_zhujiemianlingqujinbi_erro_102);
                    }), this.bannerAd_zhujiemianlingqujinbi.onLoad(function() {})), i) return console.log("预加载广告"),
                    void 0 != this.bannerAd_zhujiemianlingqujinbi && this.bannerAd_zhujiemianlingqujinbi.hide(), !0;
                if (void 0 != this.bannerAd_zhujiemianlingqujinbi)
                    if (-1 != e && 0 != a["default"].wudianLevel[e] && 1 == a["default"].ctrlInfo.isWudian) {
                        var c = 0;
                        console.log("index:", e), a["default"].ctrlInfo.lateDelay[e] && (c = Number(a["default"].ctrlInfo.lateDelay[e])),
                            console.log("lateDelay:", a["default"].ctrlInfo.lateDelay), Laya.timer.clear(this, this.show_zhujiemianlingqujinbi),
                            Laya.timer.once(c, this, this.show_zhujiemianlingqujinbi);
                    } else Laya.timer.clear(this, this.show_zhujiemianlingqujinbi), Laya.timer.once(700, this, this.show_zhujiemianlingqujinbi);
                return !0;
            }, t.prototype.show_zhujiemianlingqujinbi = function() {
                this.bannerAd_zhujiemianlingqujinbi ? this.bannerAd_zhujiemianlingqujinbi.show() : o["default"].instance.emit(n.event_showBannerAd_zhujiemianlingqujinbi_erro_102);
            }, t.prototype.hideBannerAd_zhujiemianlingqujinbi = function(t) {
                void 0 === t && (t = NaN), this.bannerAd_zhujiemianlingqujinbi && this.bannerAd_zhujiemianlingqujinbi.hide();
            }, t.prototype.destroyBannerAd_zhujiemianlingqujinbi = function() {
                this.bannerAd_zhujiemianlingqujinbi && (this.bannerAd_zhujiemianlingqujinbi.destroy(),
                    this.bannerAd_zhujiemianlingqujinbi = null);
            }, t.prototype.showBannerAd_lixianlingqujinbi = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].ctrlInfo.allAdsControl) return !1;
                var i = a["default"].getAdInfoById(107);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = s,
                    l = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_lixianlingqujinbi || (this.bannerAd_lixianlingqujinbi = window.wx.createBannerAd({
                        adUnitId: i.ad_id,
                        style: {
                            left: 0,
                            top: l - 100,
                            width: r
                        }
                    }), this.bannerAd_lixianlingqujinbi.onResize(function(e) {
                        var i = t.Instance.bannerAd_lixianlingqujinbi;
                        i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                            l / s > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_lixianlingqujinbi.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_lixianlingqujinbi(), o["default"].instance.emit(n.event_show_lixianlingqujinbi_erro_107);
                    }), this.bannerAd_lixianlingqujinbi.onLoad(function() {})), e) return console.log("预加载广告"),
                    void 0 != this.bannerAd_lixianlingqujinbi && this.bannerAd_lixianlingqujinbi.hide(), !0;
                if (void 0 != this.bannerAd_lixianlingqujinbi)
                    if (0 != a["default"].wudianLevel[5] && 1 == a["default"].ctrlInfo.isWudian) {
                        Laya.timer.clear(this, this.show_lixianlingqujinbi);
                        var h = 0;
                        a["default"].ctrlInfo.lateDelay[5] && (h = Number(a["default"].ctrlInfo.lateDelay[5])),
                            Laya.timer.once(h, this, this.show_lixianlingqujinbi);
                    } else Laya.timer.clear(this, this.show_lixianlingqujinbi), Laya.timer.once(700, this, this.show_lixianlingqujinbi);
                return !0;
            }, t.prototype.show_lixianlingqujinbi = function() {
                this.bannerAd_lixianlingqujinbi ? this.bannerAd_lixianlingqujinbi.show() : o["default"].instance.emit(n.event_show_lixianlingqujinbi_erro_107);
            }, t.prototype.hideBannerAd_lixianlingqujinbi = function() {
                this.bannerAd_lixianlingqujinbi && this.bannerAd_lixianlingqujinbi.hide();
            }, t.prototype.destroyBannerAd_lixianlingqujinbi = function() {
                this.bannerAd_lixianlingqujinbi && (this.bannerAd_lixianlingqujinbi.destroy(), this.bannerAd_lixianlingqujinbi = null);
            }, t.prototype.showBannerAd_shiyongpifu = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].ctrlInfo.allAdsControl) return !1;
                var i = a["default"].getAdInfoById(103);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = s,
                    l = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_shiyongpifu || (this.bannerAd_shiyongpifu = window.wx.createBannerAd({
                        adUnitId: i.ad_id,
                        style: {
                            left: 0,
                            top: l - 100,
                            width: r
                        }
                    }), this.bannerAd_shiyongpifu.onResize(function(e) {
                        var i = t.Instance.bannerAd_shiyongpifu;
                        i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                            l / s > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_shiyongpifu.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemianlingqujinbi(), o["default"].instance.emit(n.event_showBannerAd_shiyongpifu_erro_103);
                    }), this.bannerAd_shiyongpifu.onLoad(function() {})), e) return void 0 != this.bannerAd_shiyongpifu && this.bannerAd_shiyongpifu.hide(), !0;
                if (void 0 != this.bannerAd_shiyongpifu)
                    if (0 != a["default"].wudianLevel[0] && 1 == a["default"].ctrlInfo.isWudian) {
                        Laya.timer.clear(this, this.show_shiyongpifu);
                        var h = 0;
                        a["default"].ctrlInfo.lateDelay[0] && (h = Number(a["default"].ctrlInfo.lateDelay[0])),
                            Laya.timer.once(h, this, this.show_shiyongpifu);
                    } else Laya.timer.clear(this, this.show_shiyongpifu), Laya.timer.once(700, this, this.show_shiyongpifu);
                return !0;
            }, t.prototype.show_shiyongpifu = function() {
                this.bannerAd_shiyongpifu ? this.bannerAd_shiyongpifu.show() : o["default"].instance.emit(n.event_showBannerAd_shiyongpifu_erro_103);
            }, t.prototype.hideBannerAd_shiyongpifu = function(t) {
                void 0 === t && (t = NaN), this.bannerAd_shiyongpifu && this.bannerAd_shiyongpifu.hide();
            }, t.prototype.destroyBannerAd_shiyongpifu = function() {
                this.bannerAd_shiyongpifu && (this.bannerAd_shiyongpifu.destroy(), this.bannerAd_shiyongpifu = null);
            }, t.prototype.showBannerAd_fuhuo = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].ctrlInfo.allAdsControl) return !1;
                var i = a["default"].getAdInfoById(104);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = s,
                    l = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_fuhuo || (this.bannerAd_fuhuo = window.wx.createBannerAd({
                        adUnitId: i.ad_id,
                        style: {
                            left: 0,
                            top: l - 100,
                            width: r
                        }
                    }), this.bannerAd_fuhuo.onResize(function(e) {
                        var i = t.Instance.bannerAd_fuhuo;
                        i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                            l / s > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_fuhuo.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemianlingqujinbi(), o["default"].instance.emit(n.event_showBannerAd_fuhuo_erro_104);
                    }), this.bannerAd_fuhuo.onLoad(function() {})), e) return void 0 != this.bannerAd_fuhuo && this.bannerAd_fuhuo.hide(), !0;
                if (void 0 != this.bannerAd_fuhuo)
                    if (0 != a["default"].wudianLevel[1] && 1 == a["default"].ctrlInfo.isWudian) {
                        var h = 0;
                        a["default"].ctrlInfo.lateDelay[1] && (h = Number(a["default"].ctrlInfo.lateDelay[1])),
                            Laya.timer.clear(this, this.show_fuhuo), Laya.timer.once(h, this, this.show_fuhuo);
                    } else Laya.timer.clear(this, this.show_fuhuo), Laya.timer.once(700, this, this.show_fuhuo);
                return !0;
            }, t.prototype.show_fuhuo = function() {
                this.bannerAd_fuhuo ? this.bannerAd_fuhuo.show() : o["default"].instance.emit(n.event_showBannerAd_fuhuo_erro_104);
            }, t.prototype.hideBannerAd_fuhuo = function(t) {
                void 0 === t && (t = NaN), this.bannerAd_fuhuo && this.bannerAd_fuhuo.hide();
            }, t.prototype.destroyBannerAd_fuhuo = function() {
                this.bannerAd_fuhuo && (this.bannerAd_fuhuo.destroy(), this.bannerAd_fuhuo = null);
            }, t.prototype.showBannerAd_jiesuanjinbi = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].ctrlInfo.allAdsControl) return !1;
                var i = a["default"].getAdInfoById(105);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = s,
                    l = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_jiesuanjinbi || (this.bannerAd_jiesuanjinbi = window.wx.createBannerAd({
                        adUnitId: i.ad_id,
                        style: {
                            left: 0,
                            top: l - 100,
                            width: r
                        }
                    }), this.bannerAd_jiesuanjinbi.onResize(function(e) {
                        var i = t.Instance.bannerAd_jiesuanjinbi;
                        i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                            l / s > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_jiesuanjinbi.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemianlingqujinbi(), o["default"].instance.emit(n.event_showBannerAd_jiesuanjinbi_erro_105);
                    }), this.bannerAd_jiesuanjinbi.onLoad(function() {})), e) return void 0 != this.bannerAd_jiesuanjinbi && this.bannerAd_jiesuanjinbi.hide(), !0;
                if (void 0 != this.bannerAd_jiesuanjinbi)
                    if (0 != a["default"].wudianLevel[2] && 1 == a["default"].ctrlInfo.isWudian) {
                        var h = 0;
                        a["default"].ctrlInfo.lateDelay[2] && (h = Number(a["default"].ctrlInfo.lateDelay[2])),
                            Laya.timer.clear(this, this.show_jiesuanjinbi), Laya.timer.once(h, this, this.show_jiesuanjinbi);
                    } else Laya.timer.clear(this, this.show_jiesuanjinbi), Laya.timer.once(700, this, this.show_jiesuanjinbi);
                return !0;
            }, t.prototype.show_jiesuanjinbi = function() {
                this.bannerAd_jiesuanjinbi ? this.bannerAd_jiesuanjinbi.show() : o["default"].instance.emit(n.event_showBannerAd_jiesuanjinbi_erro_105);
            }, t.prototype.hideBannerAd_jiesuanjinbi = function(t) {
                void 0 === t && (t = NaN), this.bannerAd_jiesuanjinbi && this.bannerAd_jiesuanjinbi.hide();
            }, t.prototype.destroyBannerAd_jiesuanjinbi = function() {
                this.bannerAd_jiesuanjinbi && (this.bannerAd_jiesuanjinbi.destroy(), this.bannerAd_jiesuanjinbi = null);
            }, t.prototype.showBannerAd_jiesuanjiemian = function(e) {
                if (void 0 === e && (e = !1), !Laya.Browser.onMiniGame || !this.isInited) return !1;
                if (!a["default"].ctrlInfo.allAdsControl) return !1;
                var i = a["default"].getAdInfoById(106);
                if (null == i || 0 == i.ad_status) return !1;
                var s = a["default"].systemInfo.windowWidth,
                    r = s,
                    l = a["default"].systemInfo.windowHeight;
                if (this.bannerAd_jiesuanjiemian || (this.bannerAd_jiesuanjiemian = window.wx.createBannerAd({
                        adUnitId: i.ad_id,
                        style: {
                            left: 0,
                            top: l - 100,
                            width: r
                        }
                    }), this.bannerAd_jiesuanjiemian.onResize(function(e) {
                        var i = t.Instance.bannerAd_jiesuanjiemian;
                        i && (i.style.left = (s - i.style.realWidth) / 2, i.style.top = l - i.style.realHeight,
                            l / s > 2 && (i.style.top = i.style.top - 25));
                    }), this.bannerAd_jiesuanjiemian.onError(function(e) {
                        console.log("广告加载错误:", e), t.Instance.destroyBannerAd_zhujiemianlingqujinbi(), o["default"].instance.emit(n.event_showBannerAd_jiesuanjiemian_erro_106);
                    }), this.bannerAd_jiesuanjiemian.onLoad(function() {})), e) return console.log("预加载广告"),
                    void 0 != this.bannerAd_jiesuanjiemian && this.bannerAd_jiesuanjiemian.hide(), !0;
                if (void 0 != this.bannerAd_jiesuanjiemian)
                    if (0 != a["default"].wudianLevel[3] && 1 == a["default"].ctrlInfo.isWudian) {
                        var h = 0;
                        a["default"].ctrlInfo.lateDelay[3] && (h = Number(a["default"].ctrlInfo.lateDelay[3])),
                            Laya.timer.clear(this, this.show_jiesuanjiemian), Laya.timer.once(h, this, this.show_jiesuanjiemian);
                    } else Laya.timer.clear(this, this.show_jiesuanjiemian), Laya.timer.once(700, this, this.show_jiesuanjiemian);
                return !0;
            }, t.prototype.show_jiesuanjiemian = function() {
                this.bannerAd_jiesuanjiemian ? this.bannerAd_jiesuanjiemian.show() : o["default"].instance.emit(n.event_showBannerAd_jiesuanjiemian_erro_106);
            }, t.prototype.hideBannerAd_jiesuanjiemian = function(t) {
                void 0 === t && (t = NaN), this.bannerAd_jiesuanjiemian && this.bannerAd_jiesuanjiemian.hide();
            }, t.prototype.destroyBannerAd_jiesuanjiemian = function() {
                this.bannerAd_jiesuanjiemian && (this.bannerAd_jiesuanjiemian.destroy(), this.bannerAd_jiesuanjiemian = null);
            }, t.prototype.hideBannerAd = function() {
                Laya.timer.clear(this, this.show_zhujiemianlingqujinbi), Laya.timer.clear(this, this.show_shiyongpifu),
                    Laya.timer.clear(this, this.show_fuhuo), Laya.timer.clear(this, this.show_jiesuanjinbi),
                    Laya.timer.clear(this, this.show_jiesuanjiemian), Laya.timer.clear(this, this.show_lixianlingqujinbi),
                    this.hideBannerAd_fuhuo(), this.hideBannerAd_jiesuanjiemian(), this.hideBannerAd_jiesuanjinbi(),
                    this.hideBannerAd_shiyongpifu(), this.hideBannerAd_zhujiemian(), this.hideBannerAd_zhujiemianlingqujinbi(),
                    this.hideBannerAd_lixianlingqujinbi();
            }, t.prototype.initRewardedVideoAd_shuangbeikaiju = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shuangbeikaiju = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_shuangbeikaiju && (this.rewardedVideoAd_shuangbeikaiju.onLoad(function() {
                    t.Instance.hasAd_shuangbeikaiju = !0;
                }), this.rewardedVideoAd_shuangbeikaiju.onError(function(e) {
                    t.Instance.hasAd_shuangbeikaiju = !1, null != t.Instance.callBackErro_shuangbeikaiju && t.Instance.callBackErro_shuangbeikaiju(t.Instance.caller_shuangbeikaiju);
                }), this.rewardedVideoAd_shuangbeikaiju.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_shuangbeikaiju && t.Instance.callBackSuc_shuangbeikaiju(t.Instance.caller_shuangbeikaiju)) : null != t.Instance.callBackFail_shuangbeikaiju && t.Instance.callBackFail_shuangbeikaiju(t.Instance.caller_shuangbeikaiju);
                })));
            }, t.prototype.showVideo_shuangbeikaiju = function(e, i, n, a, o) {
                this.isInited && (this.caller_shuangbeikaiju = i, this.callBackSuc_shuangbeikaiju = n,
                    this.callBackFail_shuangbeikaiju = a, this.callBackErro_shuangbeikaiju = o, this.hasAd_shuangbeikaiju ? (this.hasAd_shuangbeikaiju = !1,
                        this.rewardedVideoAd_shuangbeikaiju.show()) : this.rewardedVideoAd_shuangbeikaiju.load().then(function() {
                        t.Instance.rewardedVideoAd_shuangbeikaiju.show(), t.Instance.hasAd_shuangbeikaiju = !1;
                    }));
            }, t.prototype.initRewardedVideoAd_zhujiemianduobeijinbi = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_zhujiemianduobeijinbi = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_zhujiemianduobeijinbi && (this.rewardedVideoAd_zhujiemianduobeijinbi.onLoad(function() {
                    t.Instance.hasAd_zhujiemianduobeijinbi = !0;
                }), this.rewardedVideoAd_zhujiemianduobeijinbi.onError(function(e) {
                    t.Instance.hasAd_zhujiemianduobeijinbi = !1, null != t.Instance.callBackErro_zhujiemianduobeijinbi ? t.Instance.callBackErro_zhujiemianduobeijinbi(t.Instance.caller_zhujiemianduobeijinbi) : null != t.Instance.callBackSuc_zhujiemianduobeijinbi && t.Instance.callBackSuc_zhujiemianduobeijinbi(t.Instance.caller_zhujiemianduobeijinbi);
                }), this.rewardedVideoAd_zhujiemianduobeijinbi.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_zhujiemianduobeijinbi && t.Instance.callBackSuc_zhujiemianduobeijinbi(t.Instance.caller_zhujiemianduobeijinbi)) : null != t.Instance.callBackFail_zhujiemianduobeijinbi && t.Instance.callBackFail_zhujiemianduobeijinbi(t.Instance.caller_zhujiemianduobeijinbi);
                })));
            }, t.prototype.showVideo_zhujiemianduobeijinbi = function(e, i, n, a, o) {
                this.isInited && (this.caller_zhujiemianduobeijinbi = i, this.callBackSuc_zhujiemianduobeijinbi = n,
                    this.callBackFail_zhujiemianduobeijinbi = a, this.callBackErro_zhujiemianduobeijinbi = o,
                    this.hasAd_zhujiemianduobeijinbi ? (this.hasAd_zhujiemianduobeijinbi = !1, this.rewardedVideoAd_zhujiemianduobeijinbi.show()) : this.rewardedVideoAd_zhujiemianduobeijinbi.load().then(function() {
                        t.Instance.rewardedVideoAd_zhujiemianduobeijinbi.show(), t.Instance.hasAd_zhujiemianduobeijinbi = !1;
                    }));
            }, t.prototype.initRewardedVideoAd_shiyongpifu = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shiyongpifu = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_shiyongpifu && (this.rewardedVideoAd_shiyongpifu.onLoad(function() {
                    t.Instance.hasAd_shiyongpifu = !0;
                }), this.rewardedVideoAd_shiyongpifu.onError(function(e) {
                    t.Instance.hasAd_shiyongpifu = !1, null != t.Instance.callBackErro_shiyongpifu ? t.Instance.callBackErro_shiyongpifu(t.Instance.caller_shiyongpifu) : null != t.Instance.callBackSuc_shiyongpifu && t.Instance.callBackSuc_shiyongpifu(t.Instance.caller_shiyongpifu);
                }), this.rewardedVideoAd_shiyongpifu.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_shiyongpifu && t.Instance.callBackSuc_shiyongpifu(t.Instance.caller_shiyongpifu)) : null != t.Instance.callBackFail_shiyongpifu && t.Instance.callBackFail_shiyongpifu(t.Instance.caller_shiyongpifu);
                })));
            }, t.prototype.showVideo_shiyongpifu = function(e, i, n, a, o) {
                this.isInited && (this.caller_shiyongpifu = i, this.callBackSuc_shiyongpifu = n,
                    this.callBackFail_shiyongpifu = a, this.callBackErro_shiyongpifu = o, this.hasAd_shiyongpifu ? (this.hasAd_shiyongpifu = !1,
                        this.rewardedVideoAd_shiyongpifu.show()) : this.rewardedVideoAd_shiyongpifu.load().then(function() {
                        t.Instance.rewardedVideoAd_shiyongpifu.show(), t.Instance.hasAd_shiyongpifu = !1;
                    }));
            }, t.prototype.initRewardedVideoAd_fuhuo = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_fuhuo = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_fuhuo && (this.rewardedVideoAd_fuhuo.onLoad(function() {
                    t.Instance.hasAd_fuhuo = !0;
                }), this.rewardedVideoAd_fuhuo.onError(function(e) {
                    t.Instance.hasAd_fuhuo = !1, null != t.Instance.callBackErro_fuhuo && t.Instance.callBackErro_fuhuo(t.Instance.caller_fuhuo);
                }), this.rewardedVideoAd_fuhuo.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_fuhuo && t.Instance.callBackSuc_fuhuo(t.Instance.caller_fuhuo)) : null != t.Instance.callBackFail_fuhuo && t.Instance.callBackFail_fuhuo(t.Instance.caller_fuhuo);
                })));
            }, t.prototype.showVideo_fuhuo = function(e, i, n, a, o) {
                this.isInited && (this.caller_fuhuo = i, this.callBackSuc_fuhuo = n, this.callBackFail_fuhuo = a,
                    this.callBackErro_fuhuo = o, this.hasAd_fuhuo ? (this.hasAd_fuhuo = !1, this.rewardedVideoAd_fuhuo.show()) : this.rewardedVideoAd_fuhuo.load().then(function() {
                        t.Instance.rewardedVideoAd_fuhuo.show(), t.Instance.hasAd_fuhuo = !1;
                    }));
            }, t.prototype.initRewardedVideoAd_jiesuanjinbi = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_jiesuanjinbi = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_jiesuanjinbi && (this.rewardedVideoAd_jiesuanjinbi.onLoad(function() {
                    t.Instance.hasAd_jiesuanjinbi = !0;
                }), this.rewardedVideoAd_jiesuanjinbi.onError(function(e) {
                    t.Instance.hasAd_jiesuanjinbi = !1, null != t.Instance.callBackErro_jiesuanjinbi ? t.Instance.callBackErro_jiesuanjinbi(t.Instance.caller_jiesuanjinbi) : null != t.Instance.callBackSuc_jiesuanjinbi && t.Instance.callBackSuc_jiesuanjinbi(t.Instance.caller_jiesuanjinbi);
                }), this.rewardedVideoAd_jiesuanjinbi.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_jiesuanjinbi && t.Instance.callBackSuc_jiesuanjinbi(t.Instance.caller_jiesuanjinbi)) : null != t.Instance.callBackFail_jiesuanjinbi && t.Instance.callBackFail_jiesuanjinbi(t.Instance.caller_jiesuanjinbi);
                })));
            }, t.prototype.showVideo_jiesuanjinbi = function(e, i, n, a, o) {
                this.isInited && (this.caller_jiesuanjinbi = i, this.callBackSuc_jiesuanjinbi = n,
                    this.callBackFail_jiesuanjinbi = a, this.callBackErro_jiesuanjinbi = o, this.hasAd_jiesuanjinbi ? (this.hasAd_jiesuanjinbi = !1,
                        this.rewardedVideoAd_jiesuanjinbi.show()) : this.rewardedVideoAd_jiesuanjinbi.load().then(function() {
                        t.Instance.rewardedVideoAd_jiesuanjinbi.show(), t.Instance.hasAd_jiesuanjinbi = !1;
                    }));
            }, t.prototype.initRewardedVideoAd_shangcheng = function(e) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shangcheng = window.wx.createRewardedVideoAd({
                    adUnitId: e
                }), void 0 != this.rewardedVideoAd_shangcheng && (this.rewardedVideoAd_shangcheng.onLoad(function() {
                    t.Instance.hasAd_shangcheng = !0;
                }), this.rewardedVideoAd_shangcheng.onError(function(e) {
                    t.Instance.hasAd_shangcheng = !1, null != t.Instance.callBackErro_shangcheng ? t.Instance.callBackErro_shangcheng(t.Instance.caller_shangcheng) : null != t.Instance.callBackSuc_shangcheng && t.Instance.callBackSuc_shangcheng(t.Instance.caller_shangcheng);
                }), this.rewardedVideoAd_shangcheng.onClose(function(e) {
                    e && e.isEnded || void 0 === e ? (t.Instance.videoPlayedTimes += 1, null != t.Instance.callBackSuc_shangcheng && t.Instance.callBackSuc_shangcheng(t.Instance.caller_shangcheng)) : null != t.Instance.callBackFail_shangcheng && t.Instance.callBackFail_shangcheng(t.Instance.caller_shangcheng);
                })));
            }, t.prototype.showVideo_shangcheng = function(e, i, n, a, o) {
                this.isInited && (this.caller_shangcheng = i, this.callBackSuc_shangcheng = n, this.callBackFail_shangcheng = a,
                    this.callBackErro_shangcheng = o, this.hasAd_shangcheng ? (this.hasAd_shangcheng = !1,
                        this.rewardedVideoAd_shangcheng.show()) : this.rewardedVideoAd_shangcheng.load().then(function() {
                        t.Instance.rewardedVideoAd_shangcheng.show(), t.Instance.hasAd_shangcheng = !1;
                    }));
            }, t;
        }();
        i["default"] = s;
    }, {
        "../../Common/EventMgr": 7,
        "../../Datas/ConfigData": 15
    }],
    7: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = laya.events.EventDispatcher,
            a = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.emit = function(t, i) {
                    e.eventDispatcher.event(t, i);
                }, e.prototype.onEvent = function(t, i, n, a) {
                    e.eventDispatcher.on(t, i, n, null == a ? null : [a]);
                }, e.prototype.onOnceEvent = function(t, i, n, a) {
                    e.eventDispatcher.once(t, i, n, null == a ? null : [a]);
                }, e.prototype.onOffEvent = function(t, i, n, a) {
                    e.eventDispatcher.off(t, i, n);
                }, e.eventDispatcher = new n(), e.instance = new e(), e;
            }(n);
        i["default"] = a;
    }, {}],
    8: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./EventMgr"),
            a = t("../Net/HttpUtils"),
            o = t("../Datas/UserData"),
            s = t("../Datas/ConfigData"),
            r = t("../BuildPlatform/wx/WxAdManager"),
            l = t("./PlatformMgr"),
            h = function() {
                function t() {
                    this._http = new a["default"]();
                }
                return t.prototype.login = function(t) {
                        t.platform = window.navigator.platform, this._http.request({
                            url: "userLogin.json",
                            data: t,
                            callback: function(e) {
                                0 == e.code ? (e.sessionId && (o["default"].sessionId = e.sessionId), t.success && t.success(e)) : (o["default"].sessionId = "",
                                    t.fail && t.fail(e));
                            }
                        });
                    }, t.prototype.getRemoteJson = function(t) {
                        this._http.getRemoteJson(t);
                    }, t.prototype.getConfig = function(t, e) {
                        this._http.getConfig(t, e);
                    }, t.prototype.getSystemConfig = function() {
                        this._http.request({
                            url: "getSystemParamList.json",
                            data: {
                                nowVersion: s["default"].version,
                                platform: window.navigator.platform
                            },
                            callback: function(t) {
                                if (0 == t.code && (s["default"].ctrlInfo = {
                                            isShare: 1 == t.fuhuoControl,
                                            isWudian: t.position_control,
                                            shareInfo: t.shareInfo,
                                            mainAdMy: t.noAd,
                                            adInfo: t.adInfo,
                                            isGoldeggs: t.is_goldeggs,
                                            isGoldeggsReward: t.is_goldeggs_reward,
                                            backHomeControl: t.back_home_control,
                                            adDelayedTime: t.ad_delayed_time,
                                            adRefreshTimes: t.ad_refresh_times,
                                            noAd: t.noAd,
                                            fuhuoControl: t.fuhuo_control,
                                            innerAD_delayed_time: t.innerAD_delayed_time || 12e4,
                                            inviteFriendsControl: t.invite_friends_control,
                                            inviteFriendsGolds: t.invite_friends_gold,
                                            inviteShareMaxCount: t.invite_share_max_cou,
                                            marqueeBntSwitch: t.marquee_bnt_switch,
                                            videoBntSwitch: t.video_bnt_switch,
                                            shareBntSwitch: t.share_bnt_switch,
                                            onlineTimes: t.free_gold_max_time,
                                            onlineItemSecond: t.free_gold_trial,
                                            onlineItemGold: t.free_gold,
                                            fuhuoUiType: t.fuhuo_ui_type,
                                            startOfflineTime: new Date().getTime(),
                                            wOpen: t.w_open
                                        }, s["default"].random_location = t.random_location, t.game_back_tolist && (s["default"].game_back_tolist = t.game_back_tolist.split(",")),
                                        t.ad_cancel_tolist && (s["default"].ad_cancel_tolist = t.ad_cancel_tolist.split(",")),
                                        t.btu_move && (s["default"].Btu_move = t.btu_move.split(",")), t.btu_appear && (s["default"].Btu_appear = t.btu_appear.split(",")),
                                        t.wudian_level && (s["default"].wudianLevel = t.wudian_level.split(",")), t.late_delay_new)) {
                                    s["default"].ctrlInfo.lateDelay = t.late_delay_new.split(",");
                                    for (var e = 0; e < s["default"].ctrlInfo.lateDelay.length; e++) {
                                        var i = s["default"].ctrlInfo.lateDelay[e];
                                        s["default"].ctrlInfo.lateDelay[e] = Number(i);
                                    }
                                }
                                n["default"].instance.emit("getSystemParamListBack");
                            },
                            fail: function(t) {
                                n["default"].instance.emit("getSystemParamListBack");
                            }
                        });
                    }, t.prototype.updateUserInfo = function() {
                        this._http.request({
                            url: "authorize.json",
                            data: {
                                nickname: o["default"].nickName,
                                headimgurl: o["default"].avatarUrl,
                                sex: o["default"].gender
                            }
                        });
                    }, t.prototype.statisticsPost = function(t) {
                        this._http.requestStatistics({
                            data: t
                        });
                    }, t.prototype.videoCallback = function() {
                        this._http.request({
                            url: "video.json",
                            callback: function(t) {
                                0 == t.code && (o["default"].adCount = t.adCount);
                            }
                        });
                    }, t.prototype.getWorldRank = function(t) {
                        this._http.request({
                            url: "ranking.json",
                            data: {
                                page: 1,
                                type: 1
                            },
                            callback: function(e) {
                                0 == e.code && t.success && t.success(e);
                            }
                        });
                    }, t.prototype.settle = function(t) {
                        t.success && t.success(e)
                    }, t.prototype.getOfflineAward = function(t) {
                        var e = t.type;
                        this._http.request({
                            url: "getFreeGold.json",
                            data: {
                                sessionId: o["default"].sessionId,
                                type: e
                            },
                            callback: function(e) {
                                if (0 == e.code) {
                                    o["default"].money = e.userMoney, o["default"].offlineTimeSpent = 0, s["default"].ctrlInfo.startOfflineTime = new Date().getTime();
                                    e.addMoney;
                                    t.success && t.success(e);
                                }
                            }
                        });
                    }, t.prototype.unlockView = function(t) {
                        t.success(e);
                    }, t.prototype.buyView = function(t) {

                        // console.log("tt--",t);
                        t.success && t.success(t);

                        // o["default"].setMoney(e.userMoney)
                        // this._http.request({
                        //     url: "buyView.json",
                        //     data: t,
                        //     callback: function(e) {
                        //         0 == e.code && (t.success && t.success(e), o["default"].setMoney(e.userMoney));
                        //     }
                        // });
                    }, t.prototype.changeView = function(t) {
                        t.success && t.success()
                    }, t.prototype.buyProp = function(t) {
                        this._http.request({
                            url: "buyProp.json",
                            data: t,
                            callback: function(e) {
                                0 == e.code && t.success && t.success(e);
                            }
                        });
                    }, t.prototype.shareCallback = function(t) {
                        this._http.request({
                            url: "shareCallback.json",
                            data: {
                                nowVersion: s["default"].version
                            },
                            callback: function(e) {
                                if (0 == e.code && t.success) {
                                    var i = e.addMoney;
                                    0 != i && n["default"].instance.emit("openTip", "Coin x" + i),
                                        t.success(e);
                                }
                            }
                        });
                    }, t.prototype.getAllAdsControl = function() {
                        // this._http.request({
                        //     url: "getAllAdsControl.json",
                        //     data: {
                        //         nowVersion: s["default"].version
                        //     },
                        //     callback: function(t) {
                        //         0 == t.code && (s["default"].allAdsControl = JSON.parse(t.allAdsControl), s["default"].rewardedAdId = s["default"].getAdInfoById(201).ad_id, 
                        //         s["default"].innerADId = s["default"].getAdInfoById(301).ad_id, r["default"].Instance.init(), 
                        //         l["default"].callAPIMethodByProxy("initVedioCom"));
                        //     }
                        // });
                    }, t.prototype.statisticsbannerUpdateCount = function() {}, t.instance = new t(),
                    t;
            }();
        i["default"] = h;
    }, {
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../Net/HttpUtils": 47,
        "./EventMgr": 7,
        "./PlatformMgr": 9
    }],
    9: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../BuildPlatform/wx/WXAPI"),
            a = t("../BuildPlatform/wx/WXSubDomain"),
            o = t("../Datas/ConfigData"),
            s = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.initPlatform = function() {
                    switch (o["default"].releasePlatform) {
                        case "wx":
                            e.ptAPI = new n["default"](), e.subDomain = new a["default"]();
                    }
                }, e.callAPIMethodByProxy = function(t, i) {
                    return e.ptAPI && e.ptAPI[t] ? e.ptAPI[t](i) : void 0;
                }, e.callSubDomainMethodByProxy = function(t, i) {
                    return e.subDomain && e.subDomain[t] ? e.subDomain[t](i) : void 0;
                }, e;
            }(Laya.Script);
        i["default"] = s;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../BuildPlatform/wx/WXSubDomain": 5,
        "../Datas/ConfigData": 15
    }],
    10: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Datas/ConfigData"),
            a = function() {
                function t() {}
                return t.prototype.playSound = function(t) {
                    if (n["default"].isSound) {
                        var e = "res/sounds/" + t + ".mp3";
                        if (Laya.Browser.onMiniGame) {
                            var i = laya.utils.Pool.getItem(t);
                            null == i && (i = wx.createInnerAudioContext(), i.src = "res/sounds/" + t + ".mp3",
                                i.onEnded(function() {
                                    laya.utils.Pool.recover(t, i), i.offEnded();
                                })), i.play();
                        } else Laya.SoundManager.playSound(e, 1);
                    }
                }, t.prototype.playBGM = function() {
                    if (n["default"].isSound) {
                        var t = "res/sounds/bgm.mp3";
                        Laya.Browser.onMiniGame ? this.bgm ? (this.bgm.loop = !0, this.bgm.play()) : (this.bgm = wx.createInnerAudioContext(),
                            this.bgm.src = t, this.bgm.loop = !0, this.bgm.play()) : window.WebAudioEngine.playMusic(t, 0);
                    }
                }, t.prototype.stopBGM = function() {
                    Laya.Browser.onMiniGame ? this.bgm && this.bgm.stop() : window.WebAudioEngine.stopMusic();
                }, t.instance = new t(), t;
            }();
        i["default"] = a;
    }, {
        "../Datas/ConfigData": 15
    }],
    11: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./HttpMgr"),
            o = t("../Datas/UserData"),
            s = t("../Datas/ConfigData");
        ! function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.RESURGENCE = 1] = "RESURGENCE", t[t.PROP = 2] = "PROP";
        }(n = i.SHARE_VIDEO_TYPE || (i.SHARE_VIDEO_TYPE = {}));
        var r = function() {
            function t() {
                this.httpsArr = [];
            }
            return t.prototype.init = function() {
                Laya.timer.loop(6e4, this, this.goPost);
            }, t.prototype.loginStatisticsPost = function() {
                var t = {
                    action: "1005",
                    from_appid: o["default"].fromAppid,
                    from_imgid: o["default"].fromImgid,
                    code: o["default"].code,
                    isnew: o["default"].isNew ? 1 : 0
                };
                this.statisticsPost(t);
            }, t.prototype.authorStatistics = function() {
                var t = {
                    action: "1006",
                    from_appid: o["default"].fromAppid,
                    from_imgid: o["default"].fromImgid,
                    code: o["default"].code,
                    isnew: o["default"].isNew ? 1 : 0
                };
                this.statisticsPost(t);
            }, t.prototype.startGameStatistics = function() {
                var t = {
                    action: "1008"
                };
                this.statisticsPost(t);
            }, t.prototype.shareStatistics = function(t) {
                var e = {
                    action: "1009",
                    type: t
                };
                this.statisticsPost(e);
            }, t.prototype.clickVideoStatistics = function(t) {
                var e = {
                    action: "1010",
                    type: t
                };
                this.statisticsPost(e);
            }, t.prototype.videoPlayOverAdStatistics = function(t) {
                var e = {
                    action: "1011",
                    type: t
                };
                this.statisticsPost(e);
            }, t.prototype.navigateToMiniProgramStatistics = function(t) {
                t.action = "1007", this.statisticsPost(t);
            }, t.prototype.navigateToMiniProgramBackStatistics = function(t) {
                t.action = "1017", this.statisticsPost(t);
            }, t.prototype.interstitialAdStatistics = function() {
                var t = {
                    action: "1011",
                    type: 4
                };
                this.statisticsPost(t);
            }, t.prototype.statisticsPost = function(t) {
                var e = this,
                    i = {
                        channel: o["default"].channelId,
                        my_appid: s["default"].myAppid,
                        openid: o["default"].openId
                    };
                for (var n in t) t.hasOwnProperty(n) && "toLinks" != n && (i[n] = t[n]);
                i.fail = function() {
                    e.httpsArr.push(i);
                }, i.callback = function(t) {
                    0 != t.code && e.httpsArr.push(i);
                }, a["default"].instance.statisticsPost(i);
            }, t.prototype.goPost = function() {
                for (var t = this, e = 0; e < this.httpsArr.length; e++) {
                    var i = this.httpsArr[e];
                    i && (this.httpsArr[e].index = e, i.index = e, i.fail = null, i.callback = function(e) {
                        if (0 == e.code)
                            for (var i = 0; i < t.httpsArr.length; i++) {
                                t.httpsArr[i].index = e.index, t.httpsArr.splice(i, 1);
                                break;
                            }
                    }, a["default"].instance.statisticsPost(i));
                }
            }, t.instance = new t(), t;
        }();
        i["default"] = r;
    }, {
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "./HttpMgr": 8
    }],
    12: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Datas/UserData"),
            a = t("../Util/MyUtils"),
            o = function() {
                function t() {}
                return t.setStorage = function(t) {
                    var e = JSON.stringify(t.val);
                    return Laya.Browser.onMiniGame ? void wx.setStorage({
                        key: t.key,
                        data: e,
                        success: t.success,
                        fail: t.fail,
                        complete: t.complete
                    }) : void localStorage.setItem(t.key, e);
                }, t.getStorage = function(t) {
                    var e = null;
                    try {
                        e = Laya.Browser.onMiniGame ? wx.getStorageSync(t) : localStorage.getItem(t);
                    } catch (i) {}
                    return e;
                }, t.getLocalVirbort = function() {
                    var t;
                    return t = Laya.Browser.onMiniGame ? wx.getStorageSync("virbort") : localStorage.getItem("virbort"),
                        "1" == t ? !1 : !0;
                }, t.setLocalVirbort = function(t) {
                    return Laya.Browser.onMiniGame ? void wx.setStorage({
                        key: "virbort",
                        success: null,
                        fail: null,
                        complete: null,
                        data: t
                    }) : void localStorage.setItem("virbort", t);
                }, t.getLocalSound = function() {
                    var t;
                    return t = Laya.Browser.onMiniGame ? wx.getStorageSync("sound") : localStorage.getItem("sound"),
                        "1" == t ? !1 : !0;
                }, t.setLocalSound = function(t) {
                    return Laya.Browser.onMiniGame ? void wx.setStorage({
                        key: "sound",
                        success: null,
                        fail: null,
                        complete: null,
                        data: t
                    }) : void localStorage.setItem("sound", t);
                }, t.saveUserData = function() {
                    var e = {
                        sessionId: n["default"].sessionId,
                        openId: n["default"].openId,
                        level: n["default"].level,
                        peopleSkin: n["default"].peopleSkin,
                        ballSkin: n["default"].ballSkin
                    };
                    t.setStorage({
                        key: "fktttUserData",
                        val: e
                    });
                }, t.getLocalUserData = function() {
                    if (!n["default"].isLogin) {
                        var e = t.getStorage("fktttUserData");
                        if (e) {
                            if (!a["default"].isJson(e)) return;
                            e = JSON.parse(e), n["default"].sessionId = e.sessionId, n["default"].openId = e.openId,
                                n["default"].level = e.level || 1, n["default"].peopleSkin = e.peopleSkin || 1,
                                n["default"].ballSkin = e.ballSkin || 101;
                        }
                    }
                }, t;
            }();
        i["default"] = o;
    }, {
        "../Datas/UserData": 17,
        "../Util/MyUtils": 66
    }],
    13: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./PlatformMgr"),
            a = function() {
                function t() {}
                return t.vibrateShort = function() {
                    n["default"].callAPIMethodByProxy("vibrateShort");
                }, t.vibrateLong = function() {
                    n["default"].callAPIMethodByProxy("vibrateLong");
                }, t;
            }();
        i["default"] = a;
    }, {
        "./PlatformMgr": 9
    }],
    14: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./EventMgr"),
            a = t("../Datas/ConfigData"),
            o = t("./PlatformMgr"),
            s = function() {
                function t() {
                    this.viewDic = {}, this.events = [
                        "goHome",
                        "openTip",
                        "openResurgence",
                        "openGameOverLevel",
                        "openFighting",
                        "openRank",
                        "openGoldenEggView",
                        "openGameOver", "openSettleCoin", "openSkinStore", "openGetPropes", "openConvergeAd"
                    ];
                }
                return t.prototype.init = function() {
                    for (var t = 0; t < this.events.length; t++) n["default"].instance.onEvent(this.events[t], this, this[this.events[t]]);
                }, t.prototype.openSettleCoin = function(t) {
                    var e = "SettleCoin.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openConvergeAd = function(e) {
                    var i = "ConvergeAd.scene";
                    console.log("打开聚合:", e), t.instance.openView({
                        viewName: i,
                        closeAll: !1,
                        data: e
                    });
                }, t.prototype.openSkinStore = function(t) {
                    var e = "skinStore.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openGetPropes = function(t) {
                    var e = "GetPropes.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.goHome = function(t) {
                    var e = a["default"].mainBtnsType == a.MAINBTNSTYPE.LANDSCAPE ? "MainLandscape.scene" : "MainVertical.scene";
                    e = "MainVertical.scene", this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openRank = function(e) {
                    t.instance.openView({
                        viewName: "Rank.scene",
                        closeAll: !0,
                        data: e
                    });
                }, t.prototype.openFighting = function(t) {
                    this.openView({
                        viewName: "GameFighting.scene",
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openResurgence = function(t) {
                    console.log("打开复活界面"), this.openView({
                        viewName: "Resurgence.scene",
                        closeAll: !1,
                        data: t
                    });
                }, t.prototype.openGameOver = function(t) {
                    var e = "GameOverLevel.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openGameOverScore = function(t) {
                    var e = "GameOverEndless.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openGameOverLevel = function(t) {
                    var e = "GameOverLevel.scene";
                    this.openView({
                        viewName: e,
                        closeAll: !0,
                        data: t
                    });
                }, t.prototype.openGoldenEggView = function(t) {
                    this.openView({
                        viewName: "GoldenEggView.scene",
                        closeAll: !1,
                        data: t
                    });
                }, t.prototype.openTip = function(t) {
                    this.openView({
                        viewName: "Tip.scene",
                        closeAll: !1,
                        data: t
                    });
                }, t.prototype.openView = function(t) {
                    var e = this,
                        i = t.viewName,
                        n = (t.cls, t.closeAll || !1);
                    if (n && (this.viewDic = {}), this.viewDic[i]) {
                        var a = this.viewDic[i],
                            o = a._components;
                        if (o)
                            for (var s = 0; s < o.length; s++) {
                                var r = o[s];
                                if (r.isMyBaseView) {
                                    r.openView(t.data);
                                    break;
                                }
                            }
                    } else Laya.Scene.open(i, n, Laya.Handler.create(this, function(n) {
                        e.viewDic[i] = n;
                        var a = n._components;
                        if (a)
                            for (var o = 0; o < a.length; o++) {
                                var s = a[o];
                                if (s.isMyBaseView) {
                                    s.openView(t.data);
                                    break;
                                }
                            }
                    }));
                }, t.prototype.closeView = function(t) {
                    this.viewDic[t] && (this.viewDic[t].destroy(), this.viewDic[t] = null);
                }, t.prototype.hideView = function(t) {
                    this.viewDic[t] && (this.viewDic[t].visible = !1);
                }, t.prototype.getView = function(t) {
                    var e = this.viewDic[t];
                    return e ? e : void 0;
                }, t.instance = new t(), t;
            }();
        i["default"] = s;
    }, {
        "../Datas/ConfigData": 15,
        "./EventMgr": 7,
        "./PlatformMgr": 9
    }],
    15: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("../Util/MyUtils"),
            o = t("../Common/StorageMgr");
        ! function(t) {
            t[t.LANDSCAPE = 0] = "LANDSCAPE", t[t.VERTICAL = 1] = "VERTICAL";
        }(n = i.MAINBTNSTYPE || (i.MAINBTNSTYPE = {}));
        var s;
        ! function(t) {
            t[t.LEVEL = 0] = "LEVEL", t[t.ENDLESS = 1] = "ENDLESS";
        }(s = i.SORTTYPE || (i.SORTTYPE = {}));
        var r;
        ! function(t) {
            t[t.DRAGE = 0] = "DRAGE", t[t.TOUCH = 1] = "TOUCH";
        }(r = i.OPERATINGTYPE || (i.OPERATINGTYPE = {}));
        var l = function() {
            function t() {}
            return t.initLocal = function() {
                    t.isSound = o["default"].getLocalSound(), t.isVirbort = o["default"].getLocalVirbort(),
                        Laya.Browser.onMiniGame && (this.releasePlatform = "wx", this.systemInfo = wx.getSystemInfoSync());
                }, t.initConfigData = function(e, i) {
                    void 0 === i && (i = !1), i ? t.configs = e : t.configs || (t.configs = e);
                }, t.initSkinConfigData = function(e, i) {
                    void 0 === i && (i = !1), i ? t.skinConfig = e : t.skinConfig || (t.skinConfig = e);
                }, t.initServer = function(t) {
                    t && (this.encryptDESKey1 = t.encry[0], this.encryptDESKey2 = t.encry[1], this.encryptDESKey3 = t.encry[2],
                        this.serverUrl = t.serverUrl, this.statisticsUrl = t.statisticsUrl);
                }, t.getConfigData = function(t) {
                    return this.ctrlInfo[t];
                }, t.setSound = function(e) {
                    !e || e.length <= 0 ? (t.isSound = !0, o["default"].setLocalSound("")) : (o["default"].setLocalSound("1"),
                        t.isSound = !1);
                }, t.setVirbort = function(e) {
                    !e || e.length <= 0 ? (t.isVirbort = !0, o["default"].setLocalVirbort("")) : (o["default"].setLocalVirbort("1"),
                        t.isVirbort = !1);
                }, t.getAdData = function(t) {
                    return platform.getInstance().getForgames();
                    // var e = this.getConfigData("adInfo");
                    // if (e) {
                    //     for (var i = e, n = [], a = 0; a < i.length; a++) {
                    //         var o = i[a];
                    //         o.position == t && n.push(o);
                    //     }
                    //     return n;
                    // }
                }, t.getAdInfoById = function(e) {
                    for (var i = null, n = 0; n < t.allAdsControl.length; n++) t.allAdsControl[n].ad_position_id == e && (i = t.allAdsControl[n]);
                    return i;
                }, t.getLevelConfigByIndex = function(t) {
                    var e = t - 1,
                        i = this.configs[e];
                    if (i) return i;
                    var n = this.configs.length;
                    return e = n > 111 ? a["default"].random(n - 111, n - 1) : a["default"].random(0, n - 1),
                        this.configs[e];
                }, t.getSkinDataById = function(e) {
                    for (var i = t.skinConfig, n = Object.keys(i), a = 0; a < n.length; a++) {
                        var o = n[a],
                            s = i[o];
                        if (s.Id == e) return s;
                    }
                    console.log("没有找到对应的skinData，请检查配置信息!!!!  id:", e);
                }, t.getRoleData = function() {
                    if (t.skinConfig) {
                        for (var e = t.skinConfig, i = [], n = Object.keys(e), a = 0; a < n.length; a++) {
                            var o = n[a],
                                s = e[o];
                            1 == s.Type && i.push(s);
                        }
                        return i;
                    }
                }, t.getBallData = function() {
                    if (t.skinConfig) {
                        for (var e = t.skinConfig, i = [], n = Object.keys(e), a = 0; a < n.length; a++) {
                            var o = n[a],
                                s = e[o];
                            2 == s.Type && i.push(s);
                        }
                        return i;
                    }
                }, t.isRedConfig = !1, t.isLogin = !1, t.encryptDES = !0, t.encryptDESKey1 = "qire1",
                t.encryptDESKey2 = "qire2", t.encryptDESKey3 = "qire3", t.mainBtnsType = 0, t.beginnerGuide = 0,
                t.releasePlatform = "", t.myAppid = "", t.configs = null, t.skinConfig = null,
                t.language = "cn", t.languageData = null, t.version = "117", t.jsonVersion = "100",
                t.serverUrl = "", t.jsonVersionUrl = "",
                t.statisticsUrl = "", t.isCreateAuthorization = !1, t.repeatAuthorization = !1,
                t.isLog = !0, t.ctrlInfo = {}, t.systemInfo = {}, t.random_location = 0, t.Btu_move = 1900,
                t.Btu_appear = 700, t.ad_cancel_tolist = [], t.game_back_tolist = [], t.wudianLevel = [],
                t.bannerAdIds = [""], t.innerADId = "", t.rewardedAdId = "", t.resLoadOk = !1,
                t.remoteUrls = {}, t;
        }();
        i["default"] = l;
    }, {
        "../Common/StorageMgr": 12,
        "../Util/MyUtils": 66
    }],
    16: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./ConfigData"),
            a = function() {
                function t() {
                    this.pass = 0, this.sortType = n.SORTTYPE.ENDLESS, this.money = 0, this.reciverCount = 3,
                        this.configMoney = 0, this.ballNum = 1, this.invincibleNum = 0, this.tryBallSkin = -1,
                        this.tryRoleSkin = -1;
                }
                return t.prototype.reset = function() {
                    this.pass = 1, this.reciverCount = 3, this.isPass = !1;
                }, t.prototype.getSettleMoney = function(t) {
                    return t ? Math.floor(this.configMoney + this.money) : Math.floor(.8 * this.configMoney * (this.pass - 1) / 5 + this.money);
                }, t.prototype.overReset = function() {
                    this.money = 0, this.invincibleNum = 0, this.ballNum = 1, this.invincibleNum = 0,
                        this.tryBallSkin = -1, this.tryRoleSkin = -1;
                }, t;
            }();
        i["default"] = a;
    }, {
        "./ConfigData": 15
    }],
    17: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Common/EventMgr"),
            a = t("./ConfigData"),
            o = function() {
                function t() {}
                return t.setMoney = function(e, i) {
                        void 0 === i && (i = !1);
                        var a = e || 0;
                        i ? t.money += a : t.money = a,

                            //存储金币
                            platform.getInstance().setStorageSync("money", t.money);
                        n["default"].instance.emit("UpdataMoney");
                    }, t.getUnlockViewById = function(e) {
                        for (var i = 0; i < t.unlockView.length; i++) {
                            var n = t.unlockView[i];
                            if (n.id == e) return n;
                        }
                    },
                    t.initSkinData = function() {
                        t.money = platform.getInstance().getStorageSync("money") || 0;
                        t.peopleSkin = platform.getInstance().getStorageSync("peopleSkin") || 1;
                        t.ballSkin = platform.getInstance().getStorageSync("ballSkin") || 101;
                        t.level = platform.getInstance().getStorageSync("level") || 1;




                        var e = a["default"].getBallData(),
                            i = a["default"].getRoleData();

                        t.ballDatas = [],
                            t.roleDatas = [];


                        let array = [];
                        array[1] = {
                            isHave: true
                        };
                        array[101] = {
                            isHave: true
                        };


                        t.allView = platform.getInstance().getStorageSync("UserData_allview") || array;
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            let is_have = false;
                            if (t.allView[o.Id] && t.allView[o.Id].isHave) {
                                is_have = true;
                            }

                            let l = {
                                config: o,
                                isHave: is_have
                            };
                            if (!is_have) {

                                let h = new s();
                                h.id = o.Id;
                                h.moiveProcess = 0;
                                let uu = t.allView[o.Id];
                                if (uu && uu.unlockView) {
                                    h.moiveProcess = uu.unlockView.moiveProcess || 0
                                }
                                l.unlockView = h;

                            }
                            t.ballDatas.push(l);
                        }
                        for (var n = 0; n < i.length; n++) {
                            var c = i[n];
                            let is_have = false;
                            if (t.allView[c.Id] && t.allView[c.Id].isHave) {
                                is_have = true;
                            }
                            let u = {
                                config: c,
                                isHave: is_have
                            };
                            if (!is_have) {
                                let h = new s();
                                h.id = c.Id;
                                h.moiveProcess = 0;
                                let uu = t.allView[c.Id];
                                if (uu && uu.unlockView) {
                                    h.moiveProcess = uu.unlockView.moiveProcess || 0
                                }
                                u.unlockView = h;
                            }
                            t.roleDatas.push(u);
                        }
                        t.sortRoleData(),
                            t.sortBallData();
                    },

                    t.getBallData = function() {
                        return t.ballDatas;
                    },
                    t.getRoleData = function() {
                        return t.roleDatas;
                    },
                    t.sortRoleData = function() {
                        for (var e = t.roleDatas, i = [], n = [], a = 0; a < e.length; a++) {
                            var o = e[a];
                            o.isHave ? i.push(o) : n.push(o);
                        }
                        this.roleDatas = i.concat(n);
                    }, t.sortBallData = function() {
                        for (var e = t.ballDatas, i = [], n = [], a = 0; a < e.length; a++) {
                            var o = e[a];
                            o.isHave ? i.push(o) : n.push(o);
                        }
                        this.ballDatas = i.concat(n);
                    },
                    t.findSkinDataById = function(e) {
                        for (var i = 0; i < t.ballDatas.length; i++) {
                            var n = t.ballDatas[i],
                                a = n.config.Id;
                            if (e == a) return n;
                        }
                        for (var i = 0; i < t.roleDatas.length; i++) {
                            var o = t.roleDatas[i],
                                s = o.config.Id;
                            if (e == s) return o;
                        }
                    }, t.addSkin = function(e) {
                        var i = t.findSkinDataById(e);
                        i.isHave = true;
                        t.allView[e] = i;
                        platform.getInstance().setStorageSync("UserData_allview", t.allView);
                        // platform.getInstance().setStorageSync("UserData_roleDatas",t.roleDatas);
                    }, t.unLockSkin = function(e) {
                        var i = t.findSkinDataById(e);
                        i.unlockView.moiveProcess += 1,
                            i.unlockView.moiveProcess >= i.config.Video && (i.isHave = !0);

                        t.allView[e] = i;
                        platform.getInstance().setStorageSync("UserData_allview", t.allView);
                    },
                    t.getUnLockSkinsByType = function(t) {
                        var e = [];
                        if (1 == t) {
                            for (var i = 0; i < this.roleDatas.length; i++) {
                                var n = this.roleDatas[i];
                                n.isHave || e.push(n);
                            }
                            return e;
                        }
                        for (var a = 0; a < this.ballDatas.length; a++) {
                            var o = this.ballDatas[a];
                            o.isHave || e.push(o);
                        }
                        return e;
                    }, t.roleDatas = [], t.ballDatas = [], t.peopleSkin = 1, t.ballSkin = 101, t.code = "",
                    t.openId = "", t.sessionId = "", t.nickName = "", t.gender = 0, t.avatarUrl = "",
                    t.score = 0, t.level = 1, t.index = 0, t.aladingStatus = 1, t.bannerTimes = 0, t.allView = {},
                    t.unlockView = new Array(), t.isNew = !0, t.isLogin = !1, t.shareCount = 0, t.money = 0,
                    t.multipy = 1, t.offlineTimeSpent = 0, t.isDouble = !1, t.isFristOpenHome = !0,
                    t.isShare = !1, t;
            }();
        i["default"] = o;
        var s = function() {
            function t() {}
            return t;
        }();
        i.unlockViewData = s;
    }, {
        "../Common/EventMgr": 7,
        "./ConfigData": 15
    }],
    18: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameUtility"),
            a = t("./MyGameConfig"),
            o = t("./GameCtrl"),
            s = t("./GameMgr"),
            r = t("../Util/MyUtils"),
            l = t("../Common/SoundMgr"),
            h = t("../Common/EventMgr"),
            c = t("./GameEvent"),
            u = t("../Datas/UserData"),
            d = t("../Common/VibrateMgr"),
            f = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._isMove = !1, e._stopFindPath = !1, e._nextIndex = 0, e._ballSpeed = 0,
                        e;
                }
                return __extends(e, t), e.prototype.initSelf = function() {
                    this._obj3D = this.owner, this._myTranform = this._obj3D.transform, this._meshObj = this._obj3D.getChildByName("ballMesh"),
                        this._eff_fire = this._obj3D.getChildByName("eff_fire0"), this._meshTranform3D = this._meshObj.transform,
                        this._gameCtrl = s["default"].instance.getGameCtrl(), this._eff_fire.active = !1,
                        this._meshObj.meshRenderer.castShadow = a["default"].isShadow, this.addEvent();
                }, e.prototype.addEvent = function() {
                    h["default"].instance.onEvent(c.GameEvent.UPDATA_BALL_SKIN, this, this.changeSkin);
                }, e.prototype.changeSkin = function() {
                    var t = u["default"].ballSkin; -
                    1 != this._gameCtrl.getCurrGameData().tryBallSkin && (t = this._gameCtrl.getCurrGameData().tryBallSkin);
                    var e = s["default"].instance.getBallSkinById(t);
                    return e ? void(this._meshObj.meshRenderer.material = e.meshRenderer.material) : void console.log("球皮肤:" + t + "不存在");
                }, e.prototype.reset = function() {
                    this._isMove = !1, this._ballSpeed = a["default"].ballSpeed, this.setLocalPostion(a["default"].ballPos.clone()),
                        this.getObj3D().active = !0, this._myTranform.localRotationEuler = n["default"].Vector3ZeroValue(),
                        this._stopFindPath = !1, this._isInvincible = !1, this._eff_fire.active = !1;
                }, e.prototype.getIsInvincible = function() {
                    return this._isInvincible;
                }, e.prototype.openInvincible = function() {
                    this._isInvincible = !0, this._eff_fire.active = !1, this._eff_fire.active = !0;
                }, e.prototype.getPostion = function() {
                    return this._myTranform.position;
                }, e.prototype.getObj3D = function() {
                    return this._obj3D;
                }, e.prototype.setLocalPostion = function(t) {
                    this._myTranform.localPosition = t;
                }, e.prototype.setPathPoints = function(t) {
                    this._pathPoints = t, this._nextIndex = 1, this.getMoveTarget();
                }, e.prototype.shoot = function() {
                    var t = this;
                    this._isMove = !0, this._isInvincible ? (Laya.timer.frameOnce(2, this, function() {
                                t._eff_fire.active = !1;
                            }), this._ballTrail = s["default"].instance.getObjectPoolMgr().instantiatePrefab("ball_trail1"),
                            this._ballTrail.transform.localPosition = new Laya.Vector3(0, -.22, 0)) : (this._ballTrail = s["default"].instance.getObjectPoolMgr().instantiatePrefab("ball_trail0"),
                            this._ballTrail.transform.localPosition = new Laya.Vector3(0, -.22, 0)), l["default"].instance.playSound("tiqiu"),
                        this.owner.addChildren(this._ballTrail);
                }, e.prototype.removeTrail = function() {
                    this._ballTrail && (this._ballTrail.removeSelf(), this._ballTrail.destroy(), this._ballTrail = null);
                }, e.prototype.getMoveTarget = function() {
                    if (this._targetPos = this._pathPoints[this._nextIndex], !this._targetPos) return void(this._stopFindPath = !0);
                    this._targerQt = n["default"].lookAtTargetPosQuaternion(this._myTranform, this._targetPos),
                        this._stepQt = this._myTranform.localRotation;
                    var t = n["default"].Vector2Distance(new Laya.Vector2(this._myTranform.position.x, this._myTranform.position.z), new Laya.Vector2(this._targetPos.x, this._targetPos.z));
                    this._farmCount = t / this._ballSpeed, this._stepCount = 1, console.log("_farmCount:", this._farmCount);
                }, e.prototype.move = function() {
                    if (this._stopFindPath) this._myTranform.translate(new Laya.Vector3(0, 0, this._ballSpeed), !0);
                    else {
                        var t = n["default"].QuaSlerp(this._stepQt, this._targerQt, this._stepCount / this._farmCount);
                        this._myTranform.localRotation = t, this._myTranform.translate(new Laya.Vector3(0, 0, this._ballSpeed), !0),
                            this._stepCount++, this._stepCount > this._farmCount && (this._nextIndex++, this.getMoveTarget());
                    }
                }, e.prototype.selfRotation = function() {
                    this._meshTranform3D.rotate(new Laya.Vector3(0, 0, 10), !0);
                }, e.prototype.checkCollider = function() {
                    if (this._gameCtrl.getGameState() != o.GAME_STATE.SHOOT_READY) {
                        var t = this._gameCtrl.getCurrPassMgr(),
                            e = t.getGoal(),
                            i = this._myTranform.position;
                        if (0 != e.getLeftOBB().containsPoint(i)) return l["default"].instance.playSound("zhuangqiumen"),
                            void this.refractionMove();
                        if (0 != e.getRightOBB().containsPoint(i) && (l["default"].instance.playSound("zhuangqiumen"),
                                this.refractionMove()), 0 != e.getBehindOBB().containsPoint(i) && (l["default"].instance.playSound("zhuangqiumen"),
                                this.refractionMove()), this.getPostion().z >= 14 || this.getPostion().x >= 5 || this.getPostion().x <= -5 || this.getPostion().z <= 0) return this._gameCtrl.checkOver(),
                            void this._gameCtrl.changeGameState(o.GAME_STATE.SHOOT_OVER);
                        if (0 != e.getCenterOBB().containsPoint(i)) return this._gameCtrl.goNextPass(),
                            this._isMove = !1, void this._gameCtrl.changeGameState(o.GAME_STATE.SHOOT_OVER);
                        for (var n = 0; n < t.getObstacles().length; n++) {
                            var a = t.getObstacles()[n];
                            if (a.checkCollider(this) && a.colliderResult(this)) break;
                        }
                        for (var s = this._gameCtrl.getCurrPassMgr().getObbs(), r = 0; r < s.length; r++) {
                            var h = s[r];
                            if (0 != h.containsPoint(this.getPostion())) {
                                l["default"].instance.playSound("zhuangshu"), this.refractionMove();
                                break;
                            }
                        }
                    }
                }, e.prototype.refractionMove = function() {
                    if (!this._isInvincible) {
                        d["default"].vibrateShort();
                        var t = this._obj3D.transform.localRotationEuler.x,
                            e = this._obj3D.transform.localRotationEuler.y,
                            i = this._obj3D.transform.localRotationEuler.z,
                            n = r["default"].random(160, 200);
                        this._obj3D.transform.localRotationEuler = new Laya.Vector3(t, e + n, i), this._stopFindPath = !0;
                    }
                }, e.prototype.myUpdata = function() {
                    this._isMove && (this.move(), this.selfRotation(), this.checkCollider());
                }, e;
            }(Laya.Script3D);
        i["default"] = f;
    }, {
        "../Common/EventMgr": 7,
        "../Common/SoundMgr": 10,
        "../Common/VibrateMgr": 13,
        "../Datas/UserData": 17,
        "../Util/MyUtils": 66,
        "./GameCtrl": 20,
        "./GameEvent": 21,
        "./GameMgr": 23,
        "./GameUtility": 24,
        "./MyGameConfig": 26
    }],
    19: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.init = function(t) {
                this.objPool = t;
            }, e.prototype.recover = function(t, e) {
                Laya.Pool.recover(t, e);
            }, e.prototype.getObject = function(t) {
                var e = Laya.Pool.getItem(t);
                return e || (e = this.objPool.getEffect(t)), e;
            }, e.instance = new e(), e;
        }(Laya.Script);
        i["default"] = n;
    }, {}],
    20: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./GameMgr"),
            o = t("./GameEvent"),
            s = t("./GameUtility"),
            r = t("./MyGameConfig"),
            l = t("./Ball"),
            h = t("./PassMgr"),
            c = t("./PlayerCtrl"),
            u = t("./Obstacles/ObstacleBase"),
            d = t("../Datas/UserData"),
            f = t("../Datas/ConfigData"),
            p = t("../Common/EventMgr"),
            m = t("../Common/VibrateMgr"),
            y = t("../Common/SoundMgr"),
            g = t("../Util/MyUtils");
        ! function(t) {
            t[t.SHOOT_READY = 0] = "SHOOT_READY", t[t.TAKE_AIM = 1] = "TAKE_AIM", t[t.SHOOT = 2] = "SHOOT",
                t[t.SHOOT_OVER = 3] = "SHOOT_OVER";
        }(n = i.GAME_STATE || (i.GAME_STATE = {}));
        var _ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._centerPointX = 0, e._endPointX = 0, e._endLeftToRightOffsetX = 0, e._endRightToLeftOffsetX = 0,
                    e._isPlay = !1, e._obsRoleSkinId = -1, e;
            }
            return __extends(e, t), e.prototype.initSelf = function() {
                this._mySp3d = this.owner, this._gameMgr = a["default"].instance, this._pathPointNodeArray = [];
                for (var t = 0; t < r["default"].pathPointNum; t++) {
                    var e = a["default"].instance.getObjectPoolMgr().instantiatePrefab("point");
                    this._mySp3d.addChild(e), e.active = !1, this._pathPointNodeArray.push(e);
                }
                this._currGameData = a["default"].instance.getGameData();
                var i = a["default"].instance.getObjectPoolMgr().instantiatePrefab("ball");
                i.active = !0, this._ball = i.addComponent(l["default"]), this._ball.initSelf(),
                    this.owner.addChild(i);
                var n = a["default"].instance.getObjectPoolMgr().instantiatePrefab("player");
                n.getChildByName("animator").getComponent(Laya.Animator);
                this._playerCtrl = n.addComponent(c["default"]), this.owner.addChild(n), this._playerCtrl.initSelf(),
                    this.addEvent(), this.initGame();
            }, e.prototype.initGame = function() {
                this._currPass && this._currPass.destroySelf(), this._nextPass && this._nextPass.destroySelf(),
                    this._isLeftVibrate = !1, this._isRightVibrate = !1, this._isPlay = !1, this._pathPoints = null,
                    this._currGameData.reset(), this._currGameData.overReset();
                for (var t = 0; t < this._pathPointNodeArray.length; t++) {
                    var e = this._pathPointNodeArray[t];
                    e.active = !1;
                }
                d["default"].level = 0 == r["default"].testLevel ? d["default"].level : r["default"].testLevel,
                    this._currGameData.pass = 0 == r["default"].testPass ? this._currGameData.pass : r["default"].testPass,
                    this._levelData = f["default"].getLevelConfigByIndex(d["default"].level), this._currGameData.configMoney = Number(this._levelData.Reward || 0),
                    this._obsRoleSkinId = this.getRandomObstacleRoleSkinId();
                var i = this.assmeblePassData(this._currGameData.pass);
                this._currPass = this.createLevel(i), this._currPass.initOtherOBB(), this._ball.reset(),
                    this._playerCtrl.reset(), this.createNextPass(), p["default"].instance.emit(o.GameEvent.UPDATA_PLAYER_SKIN, d["default"].peopleSkin),
                    p["default"].instance.emit(o.GameEvent.UPDATA_BALL_SKIN, d["default"].ballSkin);
            }, e.prototype.createLevel = function(t, e) {
                var i = a["default"].instance.getObjectPoolMgr().instantiatePrefab("level");
                e || this.owner.addChild(i);
                var n = this._levelData.ScenesId,
                    o = a["default"].instance.getObjectPoolMgr().instantiateLevelBgPrefab(n),
                    s = i.addComponent(h["default"]);
                return s.initSelf(t, o), s;
            }, e.prototype.getCurrPassMgr = function() {
                return this._currPass;
            }, e.prototype.getBall = function() {
                return this._ball;
            }, e.prototype.assmeblePassData = function(t) {
                var e = new h.PassData();
                e.goalAngle = JSON.parse(this._levelData.GoalAngle)[t - 1];
                var i = this._levelData.StageObs[t - 1];
                e.stageObs = [];
                for (var n = 0; n < i.length; n++) {
                    var a = i[n],
                        o = new u.ObstacleData();
                    o.x = a.x, o.rotate = a.rotate, o.z = a.z, o.type = a.type, e.stageObs.push(o);
                }
                return e;
            }, e.prototype.createNextPass = function() {
                var t = this._currGameData.pass + 1,
                    e = JSON.parse(this._levelData.GoalAngle).length;
                if (e >= t) {
                    var i = this.assmeblePassData(t);
                    this._nextPass = this.createLevel(i, !0);
                } else console.log("当前是当前level的最后一关了"), this._nextPass = null;
            }, e.prototype.initNextPass = function() {
                this._nextPass && (this.owner.addChild(this._nextPass.owner), this._nextPass.setLocalPostion(new Laya.Vector3(0, 0, 24.5)),
                    this._nextPass.getObj3D().active = !0);
            }, e.prototype.addEvent = function() {
                p["default"].instance.onEvent(o.GameEvent.Input_TouchMoveLeft, this, this.cartesianPoints),
                    p["default"].instance.onEvent(o.GameEvent.Input_TouchMoveRight, this, this.cartesianPoints),
                    p["default"].instance.onEvent(o.GameEvent.Input_TouchUp, this, this.mouseUp), p["default"].instance.onEvent(o.GameEvent.Game_START, this, this.gameStart),
                    p["default"].instance.onEvent(o.GameEvent.Game_INIT, this, this.initGame), p["default"].instance.onEvent(o.GameEvent.Game_RESURGENCE, this, this.gameReurgence),
                    p["default"].instance.onEvent(o.GameEvent.Game_GoNextPass, this, this.goNextPass),
                    p["default"].instance.onEvent(o.GameEvent.USE_INVINCIBTN, this, this.useInvincible),
                    p["default"].instance.onEvent(o.GameEvent.ADD_INVINCIBLE, this, this.addInvincible),
                    p["default"].instance.onEvent(o.GameEvent.ADD_BALLNUM, this, this.addBallNum), p["default"].instance.onEvent(o.GameEvent.TRY_SKIN, this, this.trySkin);
            }, e.prototype.trySkin = function(t) {
                var e = t.skiId,
                    i = t.type;
                1 == i ? (this._currGameData.tryRoleSkin = e, p["default"].instance.emit(o.GameEvent.UPDATA_PLAYER_SKIN, e)) : (this._currGameData.tryBallSkin = e,
                    p["default"].instance.emit(o.GameEvent.UPDATA_BALL_SKIN, e));
            }, e.prototype.addInvincible = function() {
                this._currGameData.invincibleNum += 1,
                    this._currGameData.invincibleNum = this._currGameData.invincibleNum > 1 ? 1 : this._currGameData.invincibleNum;
                console.log("this._currGameData.invincibleNum =", this._currGameData.invincibleNum);
            }, e.prototype.addBallNum = function(t) {
                this._currGameData.ballNum += t,
                    this._currGameData.ballNum = this._currGameData.ballNum > 3 ? 3 : this._currGameData.ballNum;
            }, e.prototype.useInvincible = function() {
                this._gameState == n.SHOOT_READY && (this._currGameData.invincibleNum -= 1, p["default"].instance.emit(o.GameEvent.UI_UPDATA_INVINCIBTN, {
                    isHave: this._currGameData.invincibleNum > 0,
                    isShow: !0
                }), this._ball.openInvincible());
            }, e.prototype.gameReurgence = function() {
                p["default"].instance.emit(o.GameEvent.UI_SHOW_FIGHT, !0), p["default"].instance.emit(o.GameEvent.UI_UPDATA_BALL_NUM, 0),
                    p["default"].instance.emit(o.GameEvent.UI_UPDATA_JUMPBTN, !0), this._playerCtrl.reset(),
                    this._ball.reset(), this._currPass.reset(), this.changeGameState(n.SHOOT_READY),
                    this._isPlay = !0;
            }, e.prototype.gameStart = function() {
                this._isPlay = !0, this.changeGameState(n.SHOOT_READY);
                var t = JSON.parse(this._levelData.GoalAngle).length;
                p["default"].instance.emit(o.GameEvent.UI_NEXT_PASS, t), p["default"].instance.emit(o.GameEvent.UI_UPDATA_BALL_NUM, this._currGameData.ballNum - 1),
                    p["default"].instance.emit(o.GameEvent.UI_UPDATA_INVINCIBTN, {
                        isHave: this._currGameData.invincibleNum > 0,
                        isShow: !0
                    });
            }, e.prototype.checkOver = function() {
                var t = this;
                this._gameState != n.SHOOT_OVER && (this._ball.removeTrail(), m["default"].vibrateLong(),
                    this._currGameData.ballNum -= 1, p["default"].instance.emit(o.GameEvent.UI_UPDATA_BALL_NUM, this._currGameData.ballNum - 1),
                    Laya.timer.once(500, this, function() {
                        if (t._currGameData.ballNum > 0) t._playerCtrl.reset(), t._ball.reset(), t._currPass.reset(),
                            t.changeGameState(n.SHOOT_READY), 1 == t._currGameData.ballNum && p["default"].instance.emit(o.GameEvent.UI_UPDATA_JUMPBTN, !0);
                        else {
                            var e = 1 == f["default"].ctrlInfo.marqueeBntSwitch || 1 == f["default"].ctrlInfo.shareBntSwitch || 1 == f["default"].ctrlInfo.videoBntSwitch;
                            if (e && t._currGameData.reciverCount > 0) t._isPlay = !1,
                                p["default"].instance.emit("openResurgence", {
                                    isPass: !1,
                                    passNum: d["default"].level
                                }), p["default"].instance.emit(o.GameEvent.UI_SHOW_FIGHT, !1), t._currGameData.isPass = !1;
                            else {
                                t.getCurrGameData().getSettleMoney(!1);
                                t._currGameData.isPass = !1, p["default"].instance.emit("openSettleCoin"), t._currGameData.overReset();
                            }
                        }
                    }));
            }, e.prototype.goNextPass = function(t) {
                var e = this,
                    i = !1;
                if (t && t.isForceNext && (i = !0), (!i || this._gameState == n.SHOOT_READY) && (this._gameState != n.SHOOT_READY || i)) {
                    this._ball.getObj3D().active = !1, i || (m["default"].vibrateLong(), this._currPass.playEffect(this._ball.getPostion().clone())),
                        this._ball.removeTrail(), this._currGameData.pass++;
                    var a = this._currGameData.pass > JSON.parse(this._levelData.GoalAngle).length;
                    y["default"].instance.playSound("shengli"), Laya.timer.once(1500, this, function() {
                        if (a) {
                            e.getCurrGameData().getSettleMoney(!0);
                            e._currGameData.isPass = !0, p["default"].instance.emit("openSettleCoin"), e._currGameData.overReset();
                        } else {
                            e.initNextPass();
                            var t = e,
                                i = t._currPass.getObj3D().transform.localPosition.x,
                                s = t._currPass.getObj3D().transform.localPosition.y,
                                r = t._currPass.getObj3D().transform.localPosition.z,
                                l = t._nextPass.getObj3D().transform.localPosition.x,
                                h = t._nextPass.getObj3D().transform.localPosition.y,
                                c = t._nextPass.getObj3D().transform.localPosition.z;
                            e._playerCtrl.getObj3D().active = !1;
                            var u = {
                                z: 0
                            };
                            Laya.Tween.to(u, {
                                z: 24.5,
                                update: new Laya.Handler(e, function() {
                                    var e = u.z;
                                    t._currPass.setLocalPostion(new Laya.Vector3(i, s, r - e)), t._nextPass.setLocalPostion(new Laya.Vector3(l, h, c - e));
                                })
                            }, 600, Laya.Ease.linearNone, Laya.Handler.create(e, function() {
                                e._currPass.destroySelf(), e._currPass = e._nextPass, e._currPass.initOtherOBB(),
                                    e._ball.reset(), e._playerCtrl.reset(), e._currPass.reset(), e._isLeftVibrate = !1,
                                    e._isRightVibrate = !1, e.changeGameState(n.SHOOT_READY), e.createNextPass(), p["default"].instance.emit(o.GameEvent.UI_UPDATA_MIN_PASS);
                            }));
                        }
                    });
                }
            }, e.prototype.mouseUp = function() {
                if (this._isPlay && this._pathPoints && this._gameState == n.TAKE_AIM) {
                    for (var t = s["default"].CreatorBezierPoint(r["default"].startPoint, new Laya.Vector3(this._centerPointX, r["default"].centerPoint.y, r["default"].centerPoint.z), new Laya.Vector3(this._endPointX, r["default"].endPoint.y, r["default"].endPoint.z), 8), e = 0; e < this._pathPointNodeArray.length; e++) {
                        var i = this._pathPointNodeArray[e];
                        i.active = !1;
                    }
                    this._ball.setPathPoints(t), this._centerPointX = 0, this._endPointX = 0, this._endLeftToRightOffsetX = 0,
                        this._endRightToLeftOffsetX = 0, this._playerCtrl.playShootAnim(), this.changeGameState(n.SHOOT);
                }
            }, e.prototype.getGameState = function() {
                return this._gameState;
            }, e.prototype.changeGameState = function(t) {
                var e = this._gameState;
                switch (this._gameState = t, this._gameState) {
                    case n.SHOOT_READY:
                        p["default"].instance.emit(o.GameEvent.UI_UPDATA_INVINCIBTN, {
                            isHave: this._currGameData.invincibleNum > 0,
                            isShow: !0
                        });
                        break;

                    case n.TAKE_AIM:
                        e == n.SHOOT_READY && (p["default"].instance.emit(o.GameEvent.UI_UPDATA_JUMPBTN, !1),
                            p["default"].instance.emit(o.GameEvent.UI_UPDATA_INVINCIBTN, {
                                isHave: this._currGameData.invincibleNum > 0,
                                isShow: !1
                            }));
                        break;

                    case n.SHOOT:
                        break;

                    case n.SHOOT_OVER:
                }
                this._gameState == n.SHOOT_READY;
            }, e.prototype.cartesianPoints = function(t) {
                if (this._isPlay && (this._gameState == n.SHOOT_READY && this.changeGameState(n.TAKE_AIM),
                        this._gameState == n.TAKE_AIM)) {
                    var e = t / Laya.stage.width * r["default"].asensitivity;
                    if (0 > e && 0 != this._endLeftToRightOffsetX) {
                        var i = e * (r["default"].endLeftPoint.x - r["default"].endCenterRight.x);
                        return this._endLeftToRightOffsetX += i, this._endLeftToRightOffsetX <= 0 ? (this._endLeftToRightOffsetX = 0,
                                this._endPointX = r["default"].endLeftPoint.x, this._isLeftVibrate || (this._isLeftVibrate = !0)) : this._endPointX -= i,
                            void this.showPathPoint();
                    }
                    if (e > 0 && 0 != this._endRightToLeftOffsetX) {
                        var i = e * (r["default"].endRightPoint.x - r["default"].endCenterLeft.x);
                        return this._endRightToLeftOffsetX -= i, this._endRightToLeftOffsetX >= 0 ? (this._endRightToLeftOffsetX = 0,
                                this._endPointX = r["default"].endRightPoint.x, this._isRightVibrate || (this._isRightVibrate = !0)) : this._endPointX += i,
                            void this.showPathPoint();
                    }
                    this._centerPointX -= e * (r["default"].centerRightPoint.x - r["default"].centerLeftPoint.x);
                    var a = !1;
                    if (this._centerPointX < r["default"].centerRightPoint.x && (this._centerPointX = r["default"].centerRightPoint.x,
                            a = !0), this._centerPointX > r["default"].centerLeftPoint.x && (this._centerPointX = r["default"].centerLeftPoint.x,
                            a = !0), a)
                        if (e = -e, e > 0) {
                            var i = e * (r["default"].endRightPoint.x - r["default"].endCenterLeft.x),
                                o = r["default"].endCenterLeft.x - this._endPointX;
                            0 >= o ? (i = 0, this._endPointX = r["default"].endCenterLeft.x, this._endRightToLeftOffsetX = r["default"].endRightPoint.x - r["default"].endCenterLeft.x) : (-o > i && (i = -o),
                                this._endRightToLeftOffsetX -= i, this._endPointX -= i);
                        } else {
                            var i = e * (r["default"].endLeftPoint.x - r["default"].endCenterRight.x),
                                o = r["default"].endCenterRight.x - this._endPointX;
                            o >= 0 ? (i = 0, this._endPointX = r["default"].endCenterRight.x, this._endLeftToRightOffsetX = r["default"].endLeftPoint.x - r["default"].endCenterRight.x) : (o > i && (i = o),
                                this._endLeftToRightOffsetX -= i, this._endPointX += i);
                        }
                    else this._endPointX -= e * (r["default"].endRightPoint.x - r["default"].endLeftPoint.x);
                    this.showPathPoint();
                }
            }, e.prototype.showPathPoint = function() {
                this._pathPoints = s["default"].CreatorBezierPoint(r["default"].startPoint, new Laya.Vector3(this._centerPointX, r["default"].centerPoint.y, r["default"].centerPoint.z), new Laya.Vector3(this._endPointX, r["default"].endPoint.y, r["default"].endPoint.z), r["default"].pathPointNum);
                for (var t = 0, e = 0; e < this._pathPointNodeArray.length; e++) {
                    var i = this._pathPointNodeArray[e];
                    i.transform.position = this._pathPoints[e], 0 == e || this._currPass.getGoal().checkPoint(this._pathPoints[e]) ? i.active = !1 : (i.active = !0,
                        t++);
                }
            }, e.prototype.getSceneId = function() {
                return Number(this._levelData.ScenesId);
            }, e.prototype.getCurrGameData = function() {
                return this._currGameData;
            }, e.prototype.onUpdate = function() {
                this._currPass.myUpdata(), this._isPlay && (this._ball.myUpdata(), this._playerCtrl.myUpdata());
            }, e.prototype.onDisable = function() {
                p["default"].instance.onOffEvent(o.GameEvent.Input_TouchMoveLeft, this, this.cartesianPoints),
                    p["default"].instance.onOffEvent(o.GameEvent.Input_TouchMoveRight, this, this.cartesianPoints),
                    p["default"].instance.onOffEvent(o.GameEvent.Input_TouchUp, this, this.mouseUp),
                    p["default"].instance.onOffEvent(o.GameEvent.Game_START, this, this.gameStart),
                    p["default"].instance.onOffEvent(o.GameEvent.Game_INIT, this, this.initGame), p["default"].instance.onOffEvent(o.GameEvent.ADD_INVINCIBLE, this, this.addInvincible),
                    p["default"].instance.onOffEvent(o.GameEvent.ADD_BALLNUM, this, this.addBallNum);
            }, e.prototype.getSceneObstacleProfabs = function(t) {
                if (31 == t) return a["default"].instance.getObjectPoolMgr().instantiatePrefab("coin");
                var e = this._levelData.ScenesId;
                return 2 == e ? null : a["default"].instance.getObjectPoolMgr().instantiateLevel(e, t);
            }, e.prototype.getObstacleRoleSkinId = function() {
                return -1 == this._obsRoleSkinId && (this._obsRoleSkinId = this.getRandomObstacleRoleSkinId()),
                    this._obsRoleSkinId;
            }, e.prototype.getRandomObstacleRoleSkinId = function() {
                if (d["default"].level <= 3) return 2;
                for (var t = f["default"].getRoleData(), e = [], i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.Id != d["default"].peopleSkin && e.push(n);
                }
                var a = g["default"].random(0, e.length - 1);
                return e[a].Id;
            }, e;
        }(Laya.Script);
        i["default"] = _;
    }, {
        "../Common/EventMgr": 7,
        "../Common/SoundMgr": 10,
        "../Common/VibrateMgr": 13,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../Util/MyUtils": 66,
        "./Ball": 18,
        "./GameEvent": 21,
        "./GameMgr": 23,
        "./GameUtility": 24,
        "./MyGameConfig": 26,
        "./Obstacles/ObstacleBase": 39,
        "./PassMgr": 42,
        "./PlayerCtrl": 43
    }],
    21: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n;
        ! function(t) {
            t[t.None = 0] = "None", t[t.Input_TouchMoveRight = 101] = "Input_TouchMoveRight",
                t[t.Input_TouchMoveLeft = 102] = "Input_TouchMoveLeft", t[t.Input_TouchUp = 104] = "Input_TouchUp",
                t[t.UI_UPDATA_BALL_NUM = 121] = "UI_UPDATA_BALL_NUM", t[t.UI_UPDATA_MIN_PASS = 122] = "UI_UPDATA_MIN_PASS",
                t[t.UI_NEXT_PASS = 123] = "UI_NEXT_PASS", t[t.UI_SHOW_FIGHT = 124] = "UI_SHOW_FIGHT",
                t[t.UI_UPDATA_INVINCIBTN = 125] = "UI_UPDATA_INVINCIBTN", t[t.UI_UPDATA_JUMPBTN = 126] = "UI_UPDATA_JUMPBTN",
                t[t.UI_SHOW_PROVOCATION = 127] = "UI_SHOW_PROVOCATION", t[t.ADD_INVINCIBLE = 150] = "ADD_INVINCIBLE",
                t[t.ADD_BALLNUM = 151] = "ADD_BALLNUM", t[t.TRY_SKIN = 152] = "TRY_SKIN", t[t.USE_INVINCIBTN = 153] = "USE_INVINCIBTN",
                t[t.Game_INIT = 110] = "Game_INIT", t[t.Game_START = 111] = "Game_START", t[t.Game_OVER = 112] = "Game_OVER",
                t[t.Game_END = 113] = "Game_END", t[t.Game_RESURGENCE = 114] = "Game_RESURGENCE",
                t[t.Game_GoNextPass = 115] = "Game_GoNextPass", t[t.SKIN_SHOW_STORE = 300] = "SKIN_SHOW_STORE",
                t[t.SKIN_TRIAL = 304] = "SKIN_TRIAL", t[t.UPDATA_PLAYER_SKIN = 401] = "UPDATA_PLAYER_SKIN",
                t[t.UPDATA_BALL_SKIN = 402] = "UPDATA_BALL_SKIN", t[t.SKIN_CHANG_PLAYER_SKIN = 403] = "SKIN_CHANG_PLAYER_SKIN",
                t[t.SKIN_CHANG_BALL_SKIN = 404] = "SKIN_CHANG_BALL_SKIN", t[t.ADJUMP = 501] = "ADJUMP",
                t[t.ADBACK = 502] = "ADBACK";
        }(n = i.GameEvent || (i.GameEvent = {}));
    }, {}],
    22: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameEvent"),
            a = t("../Common/EventMgr"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._isMouseDown = !1, e._lastMousePos = null, e;
                }
                return __extends(e, t), e.prototype.closeInput = function() {
                    this._isMouseDown = !1, a["default"].instance.emit(n.GameEvent.Input_TouchUp);
                }, e.prototype.onEnable = function() {
                    this.clearInput(), this.owner.on(Laya.Event.MOUSE_UP, this, this.closeInput), this.owner.on(Laya.Event.MOUSE_OUT, this, this.closeInput),
                        this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onTouch);
                }, e.prototype.onDisable = function() {
                    this.clearInput(), this.owner.off(Laya.Event.MOUSE_UP, this, this.closeInput), this.owner.off(Laya.Event.MOUSE_DOWN, this, this.onTouch),
                        this.owner.off(Laya.Event.FOCUS_CHANGE, this, this.closeInput);
                }, e.prototype.clearInput = function() {
                    this._isMouseDown = !1, this._lastMousePos = null;
                }, e.prototype.onTouch = function() {
                    this._lastMousePos = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY),
                        this._isMouseDown = !0;
                }, e.prototype.onUpdate = function() {
                    if (this._isMouseDown) {
                        var t = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY),
                            e = this._lastMousePos;
                        this._lastMousePos = t;
                        var i = new Laya.Vector2(t.x - e.x, t.y - e.y);
                        Math.abs(i.x);
                        i.x > 0 ? a["default"].instance.emit(n.GameEvent.Input_TouchMoveRight, i.x) : i.x < 0 && a["default"].instance.emit(n.GameEvent.Input_TouchMoveLeft, i.x);
                    }
                }, e;
            }(Laya.Script);
        i["default"] = o;
    }, {
        "../Common/EventMgr": 7,
        "./GameEvent": 21
    }],
    23: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./MyGameEvent"),
            a = t("./GameCtrl"),
            o = t("./ObjPoolMgr"),
            s = t("./MyGameConfig"),
            r = t("../Datas/CurrGameData"),
            l = t("./StoreScene"),
            h = t("./EffectPool"),
            c = function() {
                function t() {}
                return t.prototype.init = function(t, e, i) {
                    this._gameEvent = new n["default"](), this._currGameData = new r["default"](), this._scene3d = t,
                        this._storeScene = e, this._serverScene = i, Laya.stage.addChildAt(this._scene3d, 0),
                        Laya.stage.addChildAt(this._storeScene, 1), this._poolMgr = new o["default"](this._scene3d.getChildByName("prefabs")),
                        h["default"].instance.init(this._poolMgr), this._camera = this._scene3d.getChildByName("Main Camera"),
                        this._gameRoot = this._scene3d.getChildByName("gameRoot"), this._scene3d.addChild(this._gameRoot),
                        this._gameCtrl = this._gameRoot.addComponent(a["default"]), this._gameCtrl.initSelf(),
                        this._directionalLight = this._scene3d.getChildByName("Directional Light"), this._directionalLight.shadow = s["default"].isShadow,
                        this._directionalLight.shadowDistance = 50, this._directionalLight.shadowResolution = 4096,
                        this._directionalLight.shadowPSSMCount = 1, this._directionalLight.shadowPCFType = 1,
                        this._storeScene.addComponent(l["default"]).init();
                }, t.prototype.getServerScene = function() {
                    return this._serverScene;
                }, t.prototype.getGameData = function() {
                    return this._currGameData;
                }, t.prototype.onEnable = function() {}, t.prototype.initGameByData = function(t) {
                    this._currGameData.reset();
                }, t.prototype.getGameCtrl = function() {
                    return this._gameCtrl;
                }, t.prototype.getObjectPoolMgr = function() {
                    return this._poolMgr;
                }, t.prototype.onDisable = function() {}, t.prototype.getPlayerSkinById = function(t) {
                    return this._poolMgr.getPlayerSkin(t);
                }, t.prototype.getBallSkinById = function(t) {
                    return this._poolMgr.getBallSkin(t);
                }, t.instance = new t(), t;
            }();
        i["default"] = c;
    }, {
        "../Datas/CurrGameData": 16,
        "./EffectPool": 19,
        "./GameCtrl": 20,
        "./MyGameConfig": 26,
        "./MyGameEvent": 27,
        "./ObjPoolMgr": 28,
        "./StoreScene": 44
    }],
    24: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.Vector3ZeroValue = function() {
                var t = new Laya.Vector3(0, 0, 0);
                return t;
            }, t.Vector3OneValue = function() {
                var t = new Laya.Vector3(1, 1, 1);
                return t;
            }, t.Vector3Distance = function(t, e) {
                return Laya.Vector3.distance(t, e);
            }, t.Vector2Distance = function(t, e) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }, t.Vector3Sub = function(t, e) {
                var i = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.subtract(t, e, i), i;
            }, t.Vector3Add = function(t, e) {
                var i = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.add(t, e, i), i;
            }, t.QuaSlerp = function(t, e, i) {
                var n = new Laya.Quaternion();
                return Laya.Quaternion.lerp(t, e, i, n), n;
            }, t.Lerp0 = function(t) {
                return 0 > t ? 0 : t > 1 ? 1 : t;
            }, t.Lerp = function(t, e, i) {
                return i = 0 > i ? 0 : i, i = i > 1 ? 1 : i, t + (e - t) * i;
            }, t.V3Lerp = function(t, e, i) {
                var n = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.lerp(t, e, i, n), n;
            }, t.QuaternionByEuler = function(t, e, i) {
                var n = new Laya.Quaternion();
                return Laya.Quaternion.createFromYawPitchRoll(t, e, i, n), n;
            }, t.CreatorBezierPoint = function(t, e, i, n) {
                for (var a = [], o = 0, s = 0; n > s; s++) {
                    var r = Math.pow(1 - o, 2) * t.x + 2 * o * (1 - o) * e.x + Math.pow(o, 2) * i.x,
                        l = Math.pow(1 - o, 2) * t.y + 2 * o * (1 - o) * e.y + Math.pow(o, 2) * i.y,
                        h = Math.pow(1 - o, 2) * t.z + 2 * o * (1 - o) * e.z + Math.pow(o, 2) * i.z;
                    a.push(new Laya.Vector3(r, l, h)), o += 1 / n;
                }
                return a;
            }, t.getRadian = function(t) {
                return Math.PI / 180 * t;
            }, t.lookAtTargetPosQuaternion = function(e, i) {
                var n = (t.Vector3Distance(i, e.position), new Laya.Vector3(0, 0, 0));
                Laya.Vector3.subtract(e.position.clone(), i.clone(), n);
                var a = t.Vector3ZeroValue();
                e.getForward(a);
                var o = Laya.Vector3.dot(n, a) / (Laya.Vector3.scalarLength(n) * Laya.Vector3.scalarLength(a));
                o = o > 1 ? 1 : -1 > o ? -1 : o;
                var s = Math.acos(o),
                    r = new Laya.Vector3();
                Laya.Vector3.cross(n, a, r);
                var l = new Laya.Quaternion();
                return r.y > 0 ? Laya.Quaternion.createFromYawPitchRoll(t.getRadian(e.localRotationEulerY) - s, 0, 0, l) : Laya.Quaternion.createFromYawPitchRoll(t.getRadian(e.localRotationEulerY) + s, 0, 0, l),
                    l;
            }, t.GetVerticalDir = function(e) {
                if (0 == e.z) return new Laya.Vector3(0, 0, -1);
                var i = new Laya.Vector3(-e.z / e.x, 0, 1);
                e.x > 0 && (i = new Laya.Vector3(e.z / e.x, 0, -1));
                var n = t.Vector3ZeroValue();
                return Laya.Vector3.normalize(i, n), n;
            }, t.getRefractionV3 = function() {}, t;
        }();
        i["default"] = n;
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameMgr"),
            a = t("./MyGameConfig"),
            o = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function() {
                    this._centerNode = this.owner.getChildByName("centerBox"), this._leftNode = this.owner.getChildByName("leftBox"),
                        this._rightNode = this.owner.getChildByName("rightBox"), this._behindNode = this.owner.getChildByName("behindBox"),
                        this._leftPointTranform = this.owner.getChildByName("leftPoint").transform, this._rightPointTranform = this.owner.getChildByName("rightPoint").transform,
                        this._skinNode = this.owner, this._myTranform = this.owner.transform, this._centerOBB = new Laya.OrientedBoundBox(new Laya.Vector3(.5, .5, .5), this._centerNode.transform.worldMatrix),
                        this._leftOBB = new Laya.OrientedBoundBox(new Laya.Vector3(.5, .5, .5), this._leftNode.transform.worldMatrix),
                        this._rightOBB = new Laya.OrientedBoundBox(new Laya.Vector3(.5, .5, .5), this._rightNode.transform.worldMatrix),
                        this._behindOBB = new Laya.OrientedBoundBox(new Laya.Vector3(.5, .5, .5), this._behindNode.transform.worldMatrix),
                        this._skinNode.meshRenderer.castShadow = a["default"].isShadow;
                }, e.prototype.checkPoint = function(t) {
                    return !1;
                }, e.prototype.changeSkin = function(t) {
                    this._skinNode.meshRenderer.material = n["default"].instance.getObjectPoolMgr().getGoalSkin(t).meshRenderer.material;
                }, e.prototype.setRotate = function(t) {
                    this._myTranform.localRotationEuler = new Laya.Vector3(-90, t, 0);
                }, e.prototype.getCenterOBB = function() {
                    return this._centerOBB.transformation = this._centerNode.transform.worldMatrix,
                        this._centerOBB;
                }, e.prototype.getRightOBB = function() {
                    return this._rightOBB.transformation = this._rightNode.transform.worldMatrix, this._rightOBB;
                }, e.prototype.getLeftOBB = function() {
                    return this._leftOBB.transformation = this._leftNode.transform.worldMatrix, this._leftOBB;
                }, e.prototype.getBehindOBB = function() {
                    return this._behindOBB.transformation = this._behindNode.transform.worldMatrix,
                        this._behindOBB;
                }, e;
            }(Laya.Script3D);
        i["default"] = o;
    }, {
        "./GameMgr": 23,
        "./MyGameConfig": 26
    }],
    26: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.damageObstacleAnimName = {
                    1: "obs_destroy_01",
                    3: "obs_destroy_03",
                    4: "obs_destroy_04",
                    5: "obs_destroy_05"
                }, t.beAttackEffectName = "eff_zhuangji", t.roleAnimIdle = ["DH_dance_1", "DH_dance_2", "DH_dance_3", "DH_keep_1"],
                t.roleAnimDownToUp = ["DH_walk_1", "DH_run_1"], t.roleAnimCircle = ["DH_walk_1", "DH_run_1"],
                t.startPoint = new Laya.Vector3(0, .3, 3.15), t.endPoint = new Laya.Vector3(0, .3, 9.6),
                t.centerPoint = new Laya.Vector3(0, .3, 6), t.endLeftPoint = new Laya.Vector3(1, .3, 9.6),
                t.endCenterLeft = new Laya.Vector3(0, .3, 9.6), t.endRightPoint = new Laya.Vector3(-1, .3, 9.6),
                t.endCenterRight = new Laya.Vector3(0, .3, 9.6), t.centerLeftPoint = new Laya.Vector3(4, .3, 6),
                t.centerRightPoint = new Laya.Vector3(-4, .3, 6), t.asensitivity = 3.5, t.roleMoveMaxX = .25,
                t.roleMoveMinX = -.25, t.roleMoveMaxZ = 1, t.roleMoveMinZ = 1, t.isShadow = !0,
                t.ballSpeed = .18, t.ballPos = new Laya.Vector3(0, .361, 3.15), t.playerPos = new Laya.Vector3(.47, 0, 1.73),
                t.pathPointNum = 12, t.moveLeftToRightSpeed = .017, t.moveUpToDownSpeed = .0125,
                t.walkAngular = 1, t.runAngular = 1, t.testLevel = 0, t.testPass = 0, t;
        }();
        i["default"] = n;
    }, {}],
    27: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Common/EventMgr"),
            a = t("../Common/StatisticsMgr"),
            o = function() {
                function t() {
                    this.events = ["gameStart"];
                    for (var t = 0; t < this.events.length; t++) n["default"].instance.onEvent(this.events[t], this, this[this.events[t]]);
                }
                return t.prototype.gameStart = function(t) {
                    a["default"].instance.startGameStatistics(), console.log(t);
                }, t;
            }();
        i["default"] = o;
    }, {
        "../Common/EventMgr": 7,
        "../Common/StatisticsMgr": 11
    }],
    28: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameMgr"),
            a = function() {
                function t(t) {
                    this._prefabRoot = t, this._prefabRoot.active = !1;
                }
                return t.prototype.getPrefab = function(t) {
                    var e = this._prefabRoot.getChildByName(t);
                    return e ? e : null;
                }, t.prototype.instantiatePrefab = function(t, e) {
                    var i = this.getPrefab(t);
                    return Laya.Sprite3D.instantiate(i, e);
                }, t.prototype.instantiateLevelBgPrefab = function(t) {
                    var e = n["default"].instance.getServerScene(),
                        i = e.getChildByName("levelBg").getChildByName("level_0" + t);
                    return Laya.Sprite3D.instantiate(i);
                }, t.prototype.instantiateLevel = function(t, e) {
                    var i = this._prefabRoot.getChildByName("obstacles"),
                        n = i.getChildByName(t.toString()),
                        a = n.getChildByName(e + "");
                    return Laya.Sprite3D.instantiate(a);
                }, t.prototype.getGoalSkin = function(t) {
                    var e = this._prefabRoot.getChildByName("goalSkin");
                    return e.getChildByName(t.toString());
                }, t.prototype.getPlayerSkin = function(t) {
                    var e = this._prefabRoot.getChildByName("playerSkin");
                    return e.getChildByName(t.toString());
                }, t.prototype.getBallSkin = function(t) {
                    var e = this._prefabRoot.getChildByName("ballSkin");
                    return e.getChildByName("ball_" + t.toString());
                }, t.prototype.getEffect = function(t) {
                    var e = this._prefabRoot.getChildByName(t);
                    return Laya.Sprite3D.instantiate(e);
                }, t;
            }();
        i["default"] = a;
    }, {
        "./GameMgr": 23
    }],
    29: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n;
        ! function(t) {
            t[t.Role1 = 1] = "Role1", t[t.Role2 = 2] = "Role2", t[t.Role3 = 3] = "Role3", t[t.Role4 = 4] = "Role4",
                t[t.Role5 = 5] = "Role5", t[t.Role6 = 6] = "Role6", t[t.Role7 = 7] = "Role7", t[t.Role8 = 8] = "Role8",
                t[t.Role9 = 9] = "Role9", t[t.Role10 = 10] = "Role10", t[t.Role11 = 11] = "Role11",
                t[t.Role12 = 12] = "Role12", t[t.Role13 = 13] = "Role13", t[t.Obstacle21 = 21] = "Obstacle21",
                t[t.Obstacle22 = 22] = "Obstacle22", t[t.Obstacle23 = 23] = "Obstacle23", t[t.Obstacle24 = 24] = "Obstacle24",
                t[t.Coin = 31] = "Coin";
        }(n = i.ObstacleType || (i.ObstacleType = {}));
    }, {}],
    30: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./ObstacleBase"),
            a = t("../GameMgr"),
            o = t("../MyGameConfig"),
            s = t("../EffectPool"),
            r = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e), this._box = this.owner.getChildByName("box"),
                        this._animator = this.owner.getComponent(Laya.Animator);
                    for (var i = 0; i < this._obj3D._children.length; i++) {
                        var n = this._obj3D._children[i];
                        "box" != n.name && (n.meshRenderer.castShadow = !0);
                    }
                }, e.prototype.setLocalPostion = function(e) {
                    t.prototype.setLocalPostion.call(this, e), this._boundBox = new Laya.OrientedBoundBox(new Laya.Vector3(.55, .55, .55), this._box.transform.worldMatrix);
                }, e.prototype.checkCollider = function(e) {
                    if (!t.prototype.checkCollider.call(this, e)) return !1;
                    var i = this._boundBox.containsPoint(e.getPostion());
                    return 0 != i;
                }, e.prototype.playBeAttackEffect = function() {
                    this._effect ? (this._effect.active = !1, this._effect.active = !0) : (this._effect = s["default"].instance.getObject(o["default"].beAttackEffectName),
                        this.owner.addChild(this._effect), this._effect.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        this._effect.active = !1, this._effect.active = !0);
                }, e.prototype.colliderResult = function(t) {
                    t.refractionMove(), this.playBeAttackEffect();
                    var e = a["default"].instance.getGameCtrl().getSceneId(),
                        i = o["default"].damageObstacleAnimName[e];
                    return this._animator.play(i), !0;
                }, e.prototype.reset = function() {
                    this._animator.crossFade("idle", .1);
                }, e.prototype.destroySelf = function() {
                    this._effect && (this._effect.removeSelf(), s["default"].instance.recover(o["default"].beAttackEffectName, this._effect));
                }, e;
            }(n["default"]);
        i["default"] = r;
    }, {
        "../EffectPool": 19,
        "../GameMgr": 23,
        "../MyGameConfig": 26,
        "./ObstacleBase": 39
    }],
    31: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./NotBumpedObstacle"),
            a = t("../GameMgr"),
            o = t("../MyGameConfig"),
            s = t("../../Common/SoundMgr"),
            r = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e);
                    var i = this.owner.getChildByName("Animator");
                    this._animator = i.getComponent(Laya.Animator);
                    var n = a["default"].instance.getGameCtrl().getSceneId(),
                        s = i.getChildByName("obs_fix1_0" + n);
                    s.skinnedMeshRenderer.castShadow = o["default"].isShadow, this._animator.play("idle");
                }, e.prototype.colliderResult = function(t) {
                    var e = !0;
                    this.playBeAttackEffect();
                    var i = t.getPostion().x - this._myTranform.position.x,
                        n = "level_0" + a["default"].instance.getGameCtrl().getSceneId() + "_hurt";
                    return this._animator.play(n), console.log("distanceX:", i), console.log("localScaleX:", this._box.transform.localScaleX / 5 * 2),
                        Math.abs(i) >= this._box.transform.localScaleX / 5 * 2 ? e = !1 : (t.refractionMove(),
                            s["default"].instance.playSound("zhuangshu"), e = !0), e;
                }, e.prototype.reset = function() {
                    this._animator.play("idle");
                }, e;
            }(n["default"]);
        i["default"] = r;
    }, {
        "../../Common/SoundMgr": 10,
        "../GameMgr": 23,
        "../MyGameConfig": 26,
        "./NotBumpedObstacle": 37
    }],
    32: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./NotBumpedObstacle"),
            a = t("../../Common/SoundMgr"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isRotate = !1, e;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e), this.rotate = .075, this.isRotate = !0, this.coinNode = this.owner.getChildByName("coin"),
                        this.meshTranform = this.coinNode.transform, this.effect = this.owner.getChildByName("eff_gold"),
                        this.effect.active = !1;
                }, e.prototype.colliderResult = function(t) {
                    return this.coinNode.active ? (this.playEffect(), this.coinNode.active = !1, this._gameCtrl.getCurrGameData().money += 50, !1) : !1;
                }, e.prototype.playEffect = function() {
                    a["default"].instance.playSound("jinqiu"), this.effect.active = !1, this.effect.active = !0;
                }, e.prototype.setLocalPostion = function(t) {
                    this._myTranform.localPosition = t, this._boundBox = new Laya.OrientedBoundBox(new Laya.Vector3(.8, .5, .5), this._box.transform.worldMatrix);
                }, e.prototype.myUpdata = function() {
                    this.meshTranform.rotate(new Laya.Vector3(0, 0, this.rotate));
                }, e.prototype.reset = function() {
                    this._obj3D.active = !0;
                }, e;
            }(n["default"]);
        i["default"] = o;
    }, {
        "../../Common/SoundMgr": 10,
        "./NotBumpedObstacle": 37
    }],
    33: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._isMove = !1, e;
            }
            return __extends(e, t), e.prototype.setIsMove = function(t) {
                this._isMove = t;
            }, e.prototype.myUpdata = function() {}, e.prototype.reset = function() {
                this.setIsMove(!0);
            }, e;
        }(Laya.Script3D);
        i["default"] = n;
    }, {}],
    34: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./MoveBase"),
            a = t("../GameUtility"),
            o = t("../MyGameConfig"),
            s = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(t, e, i) {
                    this._myTranform = this.owner.transform, this._animator = t, this._animName = e.animName,
                        this._radius = e.radius, this._initAngle = e.angle, this._isReverse = i, this.reset();
                }, e.prototype.reset = function() {
                    t.prototype.reset.call(this), this._angle = this._initAngle, "DH_walk_1" == this._animName ? this._speed = o["default"].walkAngular : this._speed = o["default"].runAngular,
                        this._animator.play(this._animName);
                }, e.prototype.myUpdata = function() {
                    if (this._isMove) {
                        var t = this._radius * Math.cos(a["default"].getRadian(this._angle)),
                            e = this._radius * Math.sin(a["default"].getRadian(this._angle)),
                            i = this._myTranform.localPosition.y;
                        this._myTranform.localPosition = new Laya.Vector3(t, i, e);
                        var n = a["default"].Vector3ZeroValue();
                        if (this._isReverse)
                            if (this._angle -= this._speed, 0 == e) n = new Laya.Vector3(0, 0, -1);
                            else {
                                var o = new Laya.Vector3(e / t, 0, -1);
                                t >= 0 && (o = new Laya.Vector3(-e / t, 0, 1));
                                var s = a["default"].Vector3ZeroValue();
                                Laya.Vector3.normalize(o, s), n = s;
                            }
                        else if (this._angle += 1, 0 == e) n = new Laya.Vector3(0, 0, -1);
                        else {
                            var o = new Laya.Vector3(-e / t, 0, 1);
                            t >= 0 && (o = new Laya.Vector3(e / t, 0, -1));
                            var s = a["default"].Vector3ZeroValue();
                            Laya.Vector3.normalize(o, s), n = s;
                        }
                        this._angle = this._angle > 360 ? 0 : this._angle;
                        var r = a["default"].Vector3ZeroValue();
                        this._myTranform.getForward(r);
                        var l = Laya.Vector3.dot(n, r) / (Laya.Vector3.scalarLength(n) * Laya.Vector3.scalarLength(r));
                        l = l > 1 ? 1 : -1 > l ? -1 : l;
                        var h = Math.acos(l),
                            c = new Laya.Vector3();
                        Laya.Vector3.cross(n, r, c);
                        var u = new Laya.Quaternion();
                        c.y > 0 ? Laya.Quaternion.createFromYawPitchRoll(a["default"].getRadian(this._myTranform.localRotationEulerY) - h, 0, 0, u) : Laya.Quaternion.createFromYawPitchRoll(a["default"].getRadian(this._myTranform.localRotationEulerY) + h, 0, 0, u),
                            this._myTranform.localRotation = u;
                    }
                }, e;
            }(n["default"]);
        i["default"] = s;
    }, {
        "../GameUtility": 24,
        "../MyGameConfig": 26,
        "./MoveBase": 33
    }],
    35: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./MoveBase"),
            o = t("../MyGameConfig");
        ! function(t) {
            t[t.LEFT = 0] = "LEFT", t[t.RIGHT = 1] = "RIGHT", t[t.MOVE_RIGHT = 2] = "MOVE_RIGHT",
                t[t.MOVE_LEFT = 3] = "MOVE_LEFT";
        }(n = i.MOVE_STATE || (i.MOVE_STATE = {}));
        var s = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.initSelf = function(t, e, i) {
                this._myTranform = this.owner.transform, this._initState = t, this._minX = i.minX,
                    this._maxX = i.maxX, this._animator = e, this.reset();
            }, e.prototype.reset = function() {
                t.prototype.reset.call(this), this._state = this._initState, this._state == n.LEFT || this._state == n.MOVE_RIGHT ? this._animator.play("DH_mkeep_1") : this._animator.play("DH_mkeep_2");
            }, e.prototype.myUpdata = function() {
                if (this._isMove) switch (this._state) {
                    case n.LEFT:
                        var t = this._myTranform.localPosition;
                        this._myTranform.localPosition = new Laya.Vector3(this._maxX, t.y, t.z), this._state = n.MOVE_RIGHT,
                            this._animator.play("DH_mkeep_1");
                        break;

                    case n.MOVE_RIGHT:
                        this._myTranform.translate(new Laya.Vector3(o["default"].moveLeftToRightSpeed, 0, 0));
                        var e = this._myTranform.localPosition;
                        e.x <= this._minX && (this._state = n.RIGHT);
                        break;

                    case n.RIGHT:
                        var i = this._myTranform.localPosition;
                        this._myTranform.localPosition = new Laya.Vector3(this._minX, i.y, i.z), this._animator.play("DH_mkeep_2"),
                            this._state = n.MOVE_LEFT;
                        break;

                    case n.MOVE_LEFT:
                        this._myTranform.translate(new Laya.Vector3(-o["default"].moveLeftToRightSpeed, 0, 0));
                        var a = this._myTranform.localPosition;
                        a.x >= this._maxX && (this._state = n.LEFT);
                }
            }, e;
        }(a["default"]);
        i["default"] = s;
    }, {
        "../MyGameConfig": 26,
        "./MoveBase": 33
    }],
    36: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./MoveBase"),
            o = t("../MyGameConfig");
        ! function(t) {
            t[t.DOWN = 0] = "DOWN", t[t.UP = 1] = "UP", t[t.MOVE_DOWN = 2] = "MOVE_DOWN", t[t.MOVE_UP = 3] = "MOVE_UP";
        }(n = i.MOVE1_STATE || (i.MOVE1_STATE = {}));
        var s = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.initSelf = function(t, e, i) {
                this._myTranform = this.owner.transform, this._initState = t, this._state = this._initState,
                    this._minZ = i.minZ, this._maxZ = i.maxZ, this._animator = e, this._animName = i.animName,
                    this.reset();
            }, e.prototype.reset = function() {
                t.prototype.reset.call(this), this._state = this._initState, this._animator.play(this._animName);
            }, e.prototype.myUpdata = function() {
                if (this._isMove) switch (this._state) {
                    case n.DOWN:
                        var t = this._myTranform.localPosition;
                        this._myTranform.localPosition = new Laya.Vector3(t.x, t.y, this._minZ), this._state = n.MOVE_UP;
                        break;

                    case n.MOVE_DOWN:
                        this._myTranform.translate(new Laya.Vector3(0, 0, o["default"].moveUpToDownSpeed));
                        var e = this._myTranform.localPosition;
                        e.z <= this._minZ && (this._state = n.DOWN);
                        break;

                    case n.UP:
                        var i = this._myTranform.localPosition;
                        this._myTranform.localPosition = new Laya.Vector3(i.x, i.y, this._maxZ), this._state = n.MOVE_DOWN;
                        break;

                    case n.MOVE_UP:
                        this._myTranform.translate(new Laya.Vector3(0, 0, -o["default"].moveUpToDownSpeed));
                        var a = this._myTranform.localPosition;
                        a.z >= this._maxZ && (this._state = n.UP);
                }
            }, e;
        }(a["default"]);
        i["default"] = s;
    }, {
        "../MyGameConfig": 26,
        "./MoveBase": 33
    }],
    37: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./ObstacleBase"),
            a = t("../MyGameConfig"),
            o = t("../ObstacleType"),
            s = t("../EffectPool"),
            r = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e), this._box = this.owner.getChildByName("box"),
                        (this._obType == o.ObstacleType.Obstacle22 || this._obType == o.ObstacleType.Obstacle23) && (this.owner.meshRenderer.castShadow = a["default"].isShadow);
                }, e.prototype.setLocalPostion = function(e) {
                    t.prototype.setLocalPostion.call(this, e), this._boundBox = new Laya.OrientedBoundBox(new Laya.Vector3(.55, .55, .55), this._box.transform.worldMatrix);
                }, e.prototype.checkCollider = function(e) {
                    if (!t.prototype.checkCollider.call(this, e)) return !1;
                    var i = 0 != this._boundBox.containsPoint(e.getPostion());
                    return i;
                }, e.prototype.colliderResult = function(t) {
                    return this.playBeAttackEffect(), t.refractionMove(), !0;
                }, e.prototype.playBeAttackEffect = function() {
                    this._effect ? (this._effect.active = !1, this._effect.active = !0) : (this._effect = s["default"].instance.getObject(a["default"].beAttackEffectName),
                        this.owner.addChild(this._effect), this._effect.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        this._effect.active = !1, this._effect.active = !0);
                }, e.prototype.destroySelf = function() {
                    this._effect && (this._effect.removeSelf(), s["default"].instance.recover(a["default"].beAttackEffectName, this._effect));
                }, e;
            }(n["default"]);
        i["default"] = r;
    }, {
        "../EffectPool": 19,
        "../MyGameConfig": 26,
        "../ObstacleType": 29,
        "./ObstacleBase": 39
    }],
    38: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./ObstacleBase"),
            a = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._isBeAttack = !1, e;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e), this._box = this.owner.getChildByName("box"),
                        this._isBeAttack = !1;
                }, e.prototype.setLocalPostion = function(e) {
                    t.prototype.setLocalPostion.call(this, e), this._initPos = this._myTranform.localPosition.clone(),
                        this._initEuler = this._myTranform.localRotationEuler.clone(), this._boundBox = new Laya.OrientedBoundBox(new Laya.Vector3(.6, .6, .6), this._box.transform.worldMatrix);
                }, e.prototype.checkCollider = function(e) {
                    if (!t.prototype.checkCollider.call(this, e)) return !1;
                    var i = 0 != this._boundBox.containsPoint(e.getPostion());
                    return i;
                }, e.prototype.colliderResult = function(t) {
                    return t.refractionMove(), !0;
                }, e.prototype.reset = function() {
                    this._myTranform.localRotationEuler = this._initEuler, this._myTranform.localPosition = this._initPos,
                        this._isBeAttack = !1;
                }, e;
            }(n["default"]);
        i["default"] = a;
    }, {
        "./ObstacleBase": 39
    }],
    39: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../GameCtrl"),
            a = t("../GameMgr"),
            o = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(t) {
                        this._obj3D = this.owner, this._myTranform = this._obj3D.transform, this._obType = t,
                            this._gameCtrl = a["default"].instance.getGameCtrl();
                    }, e.prototype.setLocalPostion = function(t) {
                        this._myTranform.localPosition = t;
                    }, e.prototype.getObType = function() {
                        return this._obType;
                    }, e.prototype.checkCollider = function(t) {
                        return this._gameCtrl.getGameState() != n.GAME_STATE.SHOOT ? !1 : !0;
                    }, e.prototype.colliderResult = function(t) {
                        return !1;
                    }, e.prototype.myUpdata = function() {}, e.prototype.reset = function() {}, e.prototype.destroySelf = function() {},
                    e;
            }(Laya.Script3D);
        i["default"] = o;
        var s = function() {
            function t() {}
            return t;
        }();
        i.ObstacleData = s;
    }, {
        "../GameCtrl": 20,
        "../GameMgr": 23
    }],
    40: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./MoveLeftToRight"),
            o = t("./MoveCirce"),
            s = t("./MoveUpToDown"),
            r = t("../MyGameConfig"),
            l = t("../../Util/MyUtils"),
            h = t("../../Common/SoundMgr");
        ! function(t) {
            t[t.IDLE = 0] = "IDLE", t[t.MOVE_LEFT_TO_RIGHT = 1] = "MOVE_LEFT_TO_RIGHT", t[t.CIRCLE = 2] = "CIRCLE",
                t[t.RE_CIRCE = 3] = "RE_CIRCE", t[t.MOVE_UP_TO_DOWN = 4] = "MOVE_UP_TO_DOWN";
        }(n = i.ROLE_STATE || (i.ROLE_STATE = {}));
        var c = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._animName = "", e._isPAttacked = !1, e.hitFarm = 17, e;
            }
            return __extends(e, t), e.prototype.initSelf = function(t, e) {
                this._state = t, this._initData = e, this._farm = 0, this._isPAttacked = !1, this._myTranform = this.owner.transform,
                    this._animator = this.owner.getChildByName("animator").getComponent(Laya.Animator),
                    this._obb = new Laya.OrientedBoundBox(new Laya.Vector3(.4, .4, .4), this._myTranform.worldMatrix),
                    this._animName = e.animName, this._skinNode = this.owner.getChildByName("animator").getChildByName("xiaokeai"),
                    this._skinNode.skinnedMeshRenderer.castShadow = !1, this._beAttackEffect = this.owner.getChildByName("eff_shouji"),
                    this._state = t, this._PAttackedSpeedZ = 0, this._PAttackedSpeedX = 0;
            }, e.prototype.changeSkin = function(t) {
                var e = this;
                Laya.timer.frameOnce(1, this, function() {
                    e._skinNode.skinnedMeshRenderer.material = t.meshRenderer.material;
                });
            }, e.prototype.initAnimatorState = function() {
                switch (this._state) {
                    case n.IDLE:
                        this._animator.crossFade(this._animName, .1);
                        break;

                    case n.CIRCLE:
                        var t = this.owner.addComponent(o["default"]);
                        t.initSelf(this._animator, this._initData, !1), this._moveBase = t;
                        break;

                    case n.RE_CIRCE:
                        var e = this.owner.addComponent(o["default"]);
                        e.initSelf(this._animator, this._initData, !0), this._moveBase = e;
                        break;

                    case n.MOVE_LEFT_TO_RIGHT:
                        var i = this.owner.addComponent(a["default"]);
                        i.initSelf(this._initData.initState, this._animator, this._initData), this._moveBase = i;
                        break;

                    case n.MOVE_UP_TO_DOWN:
                        var r = this.owner.addComponent(s["default"]);
                        r.initSelf(this._initData.initState, this._animator, this._initData), this._moveBase = r;
                }
            }, e.prototype.playBeAttackEffect = function() {
                this._beAttackEffect.active = !1, this._beAttackEffect.active = !0;
            }, e.prototype.initTranform = function(t, e) {
                this._initPos = t, this._initEuler = e, this._myTranform.localPosition = this._initPos.clone(),
                    this._myTranform.localRotationEuler = this._initEuler.clone();
            }, e.prototype.getOBB = function() {
                return this._obb.transformation = this._myTranform.worldMatrix, this._obb;
            }, e.prototype.colliderResult = function(t) {
                var e = !0,
                    i = t.getPostion().x - this._myTranform.position.x;
                if (Math.abs(i) >= .35) i > 0 ? this._animator.play("DH_hurt_2") : this._animator.play("DH_hurt_1"),
                    e = !1;
                else {
                    h["default"].instance.playSound("zhuangren"), this.playBeAttackEffect(), t.refractionMove(),
                        this._animator.play("DH_hit_1");
                    var n = l["default"].random(r["default"].roleMoveMinZ, r["default"].roleMoveMaxZ),
                        a = l["default"].random(r["default"].roleMoveMinX, r["default"].roleMoveMaxX);
                    this._PAttackedSpeedZ = n / this.hitFarm, this._PAttackedSpeedX = a / this.hitFarm,
                        this._isPAttacked = !0, e = !0;
                }
                return this._moveBase && this._moveBase.setIsMove(!1), e;
            }, e.prototype.myUpdata = function() {
                this._moveBase && this._moveBase.myUpdata(), this.pAttacked();
            }, e.prototype.pAttacked = function() {
                if (this._isPAttacked) {
                    this._farm++;
                    var t = this._myTranform.position.x,
                        e = this._myTranform.position.y,
                        i = this._myTranform.position.z;
                    this._myTranform.position = new Laya.Vector3(t + this._PAttackedSpeedX, e, i + this._PAttackedSpeedZ),
                        this._farm >= this.hitFarm && (this._isPAttacked = !1);
                }
            }, e.prototype.reset = function() {
                this._PAttackedSpeedZ = 0, this._PAttackedSpeedX = 0, this._isPAttacked = !1, this._farm = 0,
                    this._state != n.CIRCLE && this._state != n.RE_CIRCE && (this._myTranform.localPosition = this._initPos.clone(),
                        this._myTranform.localRotationEuler = this._initEuler.clone()), this._state == n.IDLE && this._animator.play(this._animName),
                    this._moveBase && this._moveBase.reset();
            }, e;
        }(Laya.Script3D);
        i["default"] = c;
    }, {
        "../../Common/SoundMgr": 10,
        "../../Util/MyUtils": 66,
        "../MyGameConfig": 26,
        "./MoveCirce": 34,
        "./MoveLeftToRight": 35,
        "./MoveUpToDown": 36
    }],
    41: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./ObstacleBase"),
            a = t("./RoleMgr"),
            o = t("../GameMgr"),
            s = t("./MoveLeftToRight"),
            r = t("./MoveUpToDown"),
            l = t("../ObstacleType"),
            h = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(e) {
                    t.prototype.initSelf.call(this, e), this._roleMgrArray = [], this.createRole();
                }, e.prototype.setPassMgr = function(t) {
                    this._passMgr = t;
                }, e.prototype.checkCollider = function(e) {
                    if (!t.prototype.checkCollider.call(this, e)) return !1;
                    for (var i = 0; i < this._roleMgrArray.length; i++) {
                        var n = this._roleMgrArray[i];
                        if (n.getOBB().containsPoint(e.getPostion())) return n.colliderResult(e), !0;
                    }
                    return !1;
                }, e.prototype.createRole = function() {
                    var t, e = this,
                        i = 0,
                        n = [],
                        h = [],
                        c = 0,
                        u = [],
                        d = [],
                        f = [],
                        p = [],
                        m = [],
                        y = "",
                        g = [];
                    switch (console.log("创建的小人类型为:", this._obType), this._obType) {
                        case l.ObstacleType.Role1:
                            i = 1, t = a.ROLE_STATE.IDLE, n.push(new Laya.Vector3(0, 0, 0)), h.push(new Laya.Vector3(0, 180, 0)),
                                y = this._passMgr.getAnimIdleName();
                            break;

                        case l.ObstacleType.Role2:
                            t = a.ROLE_STATE.MOVE_LEFT_TO_RIGHT, i = 1, n.push(new Laya.Vector3(0, 0, 0)), h.push(new Laya.Vector3(0, 180, 0)),
                                d.push(-.8), f.push(.8), g.push(s.MOVE_STATE.LEFT);
                            break;

                        case l.ObstacleType.Role3:
                            t = a.ROLE_STATE.MOVE_LEFT_TO_RIGHT, i = 2, n.push(new Laya.Vector3(0, 0, 0)), h.push(new Laya.Vector3(0, 180, 0)),
                                d.push(-1), f.push(0), g.push(s.MOVE_STATE.LEFT), n.push(new Laya.Vector3(0, 0, -1)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(0), f.push(1), g.push(s.MOVE_STATE.RIGHT);
                            break;

                        case l.ObstacleType.Role4:
                            t = a.ROLE_STATE.MOVE_LEFT_TO_RIGHT, i = 3, n.push(new Laya.Vector3(-1.8, 0, 0)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(-1.8), f.push(-.8), g.push(s.MOVE_STATE.RIGHT),
                                n.push(new Laya.Vector3(-1.2, 0, 0)), h.push(new Laya.Vector3(0, 180, 0)), d.push(-1.2),
                                f.push(-.2), g.push(s.MOVE_STATE.MOVE_RIGHT), n.push(new Laya.Vector3(1.2, 0, 0)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(.2), f.push(1.2), g.push(s.MOVE_STATE.MOVE_LEFT);
                            break;

                        case l.ObstacleType.Role5:
                            t = a.ROLE_STATE.MOVE_LEFT_TO_RIGHT, i = 3, n.push(new Laya.Vector3(-.5, 0, 0)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(-1), f.push(0), g.push(s.MOVE_STATE.MOVE_RIGHT),
                                n.push(new Laya.Vector3(0, 0, 0)), h.push(new Laya.Vector3(0, 180, 0)), d.push(-.5),
                                f.push(.5), g.push(s.MOVE_STATE.MOVE_RIGHT), n.push(new Laya.Vector3(.5, 0, 0)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(0), f.push(1), g.push(s.MOVE_STATE.MOVE_RIGHT);
                            break;

                        case l.ObstacleType.Role6:
                            t = a.ROLE_STATE.MOVE_LEFT_TO_RIGHT, i = 4, n.push(new Laya.Vector3(-.5, 0, -.5)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(-1.3), f.push(-.5), g.push(s.MOVE_STATE.MOVE_LEFT),
                                n.push(new Laya.Vector3(0, 0, -.5)), h.push(new Laya.Vector3(0, 180, 0)), d.push(-.8),
                                f.push(0), g.push(s.MOVE_STATE.MOVE_LEFT), n.push(new Laya.Vector3(0, 0, .5)), h.push(new Laya.Vector3(0, 180, 0)),
                                d.push(0), f.push(.8), g.push(s.MOVE_STATE.MOVE_RIGHT), n.push(new Laya.Vector3(.5, 0, .5)),
                                h.push(new Laya.Vector3(0, 180, 0)), d.push(.5), f.push(1.3), g.push(s.MOVE_STATE.MOVE_RIGHT);
                            break;

                        case l.ObstacleType.Role7:
                            t = a.ROLE_STATE.CIRCLE, i = 1, y = this._passMgr.getAnimCircleName(), u.push(90),
                                c = .8;
                            break;

                        case l.ObstacleType.Role8:
                            t = a.ROLE_STATE.RE_CIRCE, i = 1, y = this._passMgr.getAnimCircleName(), u.push(90),
                                c = .8;
                            break;

                        case l.ObstacleType.Role9:
                            t = a.ROLE_STATE.CIRCLE, y = this._passMgr.getAnimCircleName(), i = 2, c = .8, u.push(90),
                                u.push(270);
                            break;

                        case l.ObstacleType.Role10:
                            t = a.ROLE_STATE.RE_CIRCE, y = this._passMgr.getAnimCircleName(), i = 3, c = .8,
                                u.push(0), u.push(120), u.push(240);
                            break;

                        case l.ObstacleType.Role11:
                            y = this._passMgr.getAnimCircleName(), t = a.ROLE_STATE.CIRCLE, i = 2, c = .8, u.push(0),
                                u.push(45);
                            break;

                        case l.ObstacleType.Role12:
                            y = this._passMgr.getAnimCircleName(), t = a.ROLE_STATE.RE_CIRCE, i = 2, c = 1.2,
                                u.push(180), u.push(210);
                            break;

                        case l.ObstacleType.Role13:
                            t = a.ROLE_STATE.MOVE_UP_TO_DOWN, i = 1, y = this._passMgr.getAnimDownToUpName(),
                                n.push(new Laya.Vector3(0, 0, 5.8)), h.push(new Laya.Vector3(0, 180, 0)), p.push(-.8),
                                m.push(.8), g.push(r.MOVE1_STATE.DOWN);
                    }
                    for (var _ = 0; i > _; _++) {
                        var v = o["default"].instance.getObjectPoolMgr().instantiatePrefab("player");
                        this.owner.addChild(v), v.active = !0;
                        var b = v.addComponent(a["default"]),
                            w = {};
                        if (t == a.ROLE_STATE.RE_CIRCE || t == a.ROLE_STATE.CIRCLE) w = {
                            radius: c,
                            angle: u[_],
                            animName: y
                        }, b.initSelf(t, w);
                        else if (t == a.ROLE_STATE.MOVE_LEFT_TO_RIGHT) {
                            w = {
                                maxX: f[_],
                                minX: d[_],
                                initState: g[_],
                                animName: y
                            };
                            var L = n[_],
                                A = h[_];
                            b.initSelf(t, w), b.initTranform(L, A);
                        } else {
                            w = {
                                maxZ: m[_],
                                minZ: p[_],
                                initState: g[_],
                                animName: y
                            };
                            var L = n[_],
                                A = h[_];
                            b.initSelf(t, w), b.initTranform(L, A);
                        }
                        this._roleMgrArray.push(b);
                    }
                    Laya.timer.frameOnce(1, this, function() {
                        for (var t = 0; t < e._roleMgrArray.length; t++) {
                            var i = e._roleMgrArray[t];
                            i.initAnimatorState();
                        }
                    });
                }, e.prototype.myUpdata = function() {
                    for (var t = 0; t < this._roleMgrArray.length; t++) {
                        var e = this._roleMgrArray[t];
                        e.myUpdata();
                    }
                }, e.prototype.reset = function() {
                    for (var t = 0; t < this._roleMgrArray.length; t++) {
                        var e = this._roleMgrArray[t];
                        e.reset();
                    }
                }, e.prototype.changSkin = function(t) {
                    for (var e = 0; e < this._roleMgrArray.length; e++) {
                        var i = this._roleMgrArray[e];
                        i.changeSkin(t);
                    }
                }, e;
            }(n["default"]);
        i["default"] = h;
    }, {
        "../GameMgr": 23,
        "../ObstacleType": 29,
        "./MoveLeftToRight": 35,
        "./MoveUpToDown": 36,
        "./ObstacleBase": 39,
        "./RoleMgr": 40
    }],
    42: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameMgr"),
            a = t("./Goal"),
            o = t("./Obstacles/RoleObstacle"),
            s = t("./GameUtility"),
            r = t("./Obstacles/NotBumpedObstacle"),
            l = t("./Obstacles/AllowDamageObstacle"),
            h = t("./Obstacles/BumpedAnimObstacle"),
            c = t("./MyGameConfig"),
            u = t("./Obstacles/Obstacle23"),
            d = t("./ObstacleType"),
            f = t("../Util/MyUtils"),
            p = t("./Obstacles/CoinItem"),
            m = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.initSelf = function(t, e) {
                        this._obstacles = [], this._gameCtrl = n["default"].instance.getGameCtrl(), this._obj3D = this.owner,
                            this._myTranform = this._obj3D.transform;
                        var i = this._obj3D.getChildByName("bg");
                        i.addChild(e), i.transform.localPosition = s["default"].Vector3ZeroValue(), e.active = !0,
                            this._levelBg = e;
                        var o = e.getChildByName("dimian_0" + this._gameCtrl.getSceneId());
                        o.meshRenderer.receiveShadow = !0, this._goalEffect1 = this.owner.getChildByName("eff_jinqiu"),
                            this._goalEffect2 = this.owner.getChildByName("eff_jiesuan"), this._goalEffect1.active = !1,
                            this._goalEffect2.active = !1;
                        var r = f["default"].random(0, c["default"].roleAnimIdle.length - 1);
                        this._animIdleName = c["default"].roleAnimIdle[r], console.log("_animIdleName:", this._animIdleName);
                        var l = f["default"].random(0, c["default"].roleAnimDownToUp.length - 1);
                        this._animDownToUpName = c["default"].roleAnimDownToUp[l], console.log("_animDownToUpName:", this._animDownToUpName);
                        var h = f["default"].random(0, c["default"].roleAnimCircle.length - 1);
                        this._animCircleName = c["default"].roleAnimCircle[h], console.log("_animCircleName:", this._animCircleName),
                            this._goal = this._obj3D.getChildByName("qiumen").addComponent(a["default"]), this._goal.initSelf(),
                            this._goal.setRotate(t.goalAngle), this.createObstacle(t.stageObs), this._goal.changeSkin(this._gameCtrl.getSceneId()),
                            this.addEvent();
                        var u = this._gameCtrl.getObstacleRoleSkinId();
                        this.updataSkin(u);
                    }, e.prototype.addEvent = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.updataSkin = function(t) {
                        var e = n["default"].instance.getPlayerSkinById(t);
                        if (!e) return void console.log("障碍物,人物皮肤:" + t + " 不存在");
                        for (var i = 0; i < this._obstacles.length; i++) {
                            var a = this._obstacles[i];
                            if (a.getObType() <= 13) {
                                var o = a;
                                o.changSkin(e);
                            }
                        }
                    }, e.prototype.changeSkin = function() {
                        var t = this._gameCtrl.getObstacleRoleSkinId();
                        this.updataSkin(t);
                    }, e.prototype.initOtherOBB = function() {
                        this._obbArray = [];
                        for (var t = this._levelBg.getChildByName("bg"), e = 0; e < t._children.length; e++) {
                            var i = t._children[e],
                                n = new Laya.OrientedBoundBox(new Laya.Vector3(.5, .5, .5), i.transform.worldMatrix);
                            this._obbArray.push(n);
                        }
                    }, e.prototype.playEffect = function(t) {
                        this._goalEffect1.transform.position = t, this._goalEffect1.active = !1, this._goalEffect2.active = !1,
                            this._goalEffect1.active = !0, this._goalEffect2.active = !0;
                    }, e.prototype.getAnimIdleName = function() {
                        return this._animIdleName;
                    }, e.prototype.getAnimDownToUpName = function() {
                        return this._animDownToUpName;
                    }, e.prototype.getAnimCircleName = function() {
                        return this._animCircleName;
                    }, e.prototype.setLocalPostion = function(t) {
                        this._myTranform.localPosition = t;
                    }, e.prototype.reset = function() {
                        for (var t = 0; t < this._obstacles.length; t++) {
                            var e = this._obstacles[t];
                            e.reset();
                        }
                        this._goalEffect1.active = !1, this._goalEffect2.active = !1;
                    }, e.prototype.createObstacle = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e],
                                n = i.type;
                            if (13 >= n) {
                                var a = new Laya.Sprite3D();
                                this._obj3D.addChild(a), a.name = "RoleObstacles", a.transform.localPosition = new Laya.Vector3(i.x, 0, i.z);
                                var s = a.addComponent(o["default"]);
                                s.setPassMgr(this), s.initSelf(n), this._obstacles.push(s);
                            } else {
                                var c = this._gameCtrl.getSceneObstacleProfabs(n);
                                if (!c) continue;
                                this._obj3D.addChild(c), c.active = !0;
                                var f = null;
                                switch (n) {
                                    case d.ObstacleType.Obstacle21:
                                        f = c.addComponent(h["default"]), f.initSelf(n), c.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
                                        break;

                                    case d.ObstacleType.Obstacle23:
                                        f = c.addComponent(u["default"]), f.initSelf(n), c.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
                                        break;

                                    case d.ObstacleType.Obstacle22:
                                        f = c.addComponent(r["default"]), f.initSelf(n), c.transform.localRotationEuler = new Laya.Vector3(-90, 80, 0);
                                        break;

                                    case d.ObstacleType.Obstacle24:
                                        f = c.addComponent(l["default"]), f.initSelf(n), c.transform.localRotationEuler = new Laya.Vector3(0, 30, 0);
                                        break;

                                    case d.ObstacleType.Coin:
                                        f = c.addComponent(p["default"]), f.initSelf(n);
                                }
                                this._obstacles.push(f), f.setLocalPostion(new Laya.Vector3(i.x, 0, i.z));
                            }
                        }
                    }, e.prototype.getObj3D = function() {
                        return this._obj3D;
                    }, e.prototype.getGoal = function() {
                        return this._goal;
                    }, e.prototype.myUpdata = function() {
                        for (var t = 0; t < this._obstacles.length; t++) {
                            var e = this._obstacles[t];
                            e.myUpdata();
                        }
                    }, e.prototype.getObstacles = function() {
                        return this._obstacles;
                    }, e.prototype.destroySelf = function() {
                        for (var t = this._obstacles.length - 1; t >= 0; t--) {
                            var e = this._obstacles[t];
                            e.destroySelf();
                        }
                        this._obj3D.removeSelf(), this._obj3D.destroy();
                    }, e.prototype.getObbs = function() {
                        return this._obbArray;
                    }, e;
            }(Laya.Script3D);
        i["default"] = m;
        var y = function() {
            function t() {}
            return t;
        }();
        i.PassData = y;
    }, {
        "../Util/MyUtils": 66,
        "./GameMgr": 23,
        "./GameUtility": 24,
        "./Goal": 25,
        "./MyGameConfig": 26,
        "./ObstacleType": 29,
        "./Obstacles/AllowDamageObstacle": 30,
        "./Obstacles/BumpedAnimObstacle": 31,
        "./Obstacles/CoinItem": 32,
        "./Obstacles/NotBumpedObstacle": 37,
        "./Obstacles/Obstacle23": 38,
        "./Obstacles/RoleObstacle": 41
    }],
    43: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./MyGameConfig"),
            o = t("./GameMgr"),
            s = t("./GameUtility"),
            r = t("../Common/EventMgr"),
            l = t("./GameEvent"),
            h = t("../Datas/UserData");
        ! function(t) {
            t[t.READT = 0] = "READT", t[t.RUN = 1] = "RUN", t[t.SHOOT = 2] = "SHOOT", t[t.IDLE = 3] = "IDLE";
        }(n || (n = {}));
        var c = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._isMove = !1, e;
            }
            return __extends(e, t), e.prototype.initSelf = function() {
                this._obj3D = this.owner, this._myTranform = this._obj3D.transform, this._ball = o["default"].instance.getGameCtrl().getBall(),
                    this._playerAnimator = this.owner.getChildByName("animator").getComponent(Laya.Animator),
                    this._skinNode = this.owner.getChildByName("animator").getChildByName("xiaokeai"),
                    this._skinNode.skinnedMeshRenderer.castShadow = !1, this.addEvent(), this.reset();
            }, e.prototype.addEvent = function() {
                r["default"].instance.onEvent(l.GameEvent.UPDATA_PLAYER_SKIN, this, this.changeSkin);
            }, e.prototype.changeSkin = function() {
                console.log("修改玩家皮肤");
                var t = h["default"].peopleSkin; -
                1 != o["default"].instance.getGameCtrl().getCurrGameData().tryRoleSkin && (t = o["default"].instance.getGameCtrl().getCurrGameData().tryRoleSkin);
                var e = o["default"].instance.getPlayerSkinById(t);
                return e ? void(this._skinNode.skinnedMeshRenderer.material = o["default"].instance.getPlayerSkinById(t).meshRenderer.material) : void console.log("人物皮肤:" + t + " 不存在");
            }, e.prototype.reset = function() {
                this._myTranform.localPosition = a["default"].playerPos.clone(), this._playerAnimator.play("DH_ready_1"),
                    console.log("播放准备动画"), this._currState = null, this._nextState = n.READT, this._obj3D.active = !0,
                    this.changeSkin();
            }, e.prototype.playShootAnim = function() {
                this._nextState = n.RUN;
            }, e.prototype.getObj3D = function() {
                return this._obj3D;
            }, e.prototype.animationStateMachine = function() {
                if (this._currState != this._nextState) switch (this._currState = this._nextState,
                    this._currState) {
                    case n.READT:
                        console.log("播放准备动画"), this._playerAnimator.crossFade("DH_ready_1", .1), this._farm = 0;
                        break;

                    case n.RUN:
                        this._targetPos = new Laya.Vector3(this._ball.getPostion().x + .25, this._myTranform.position.y, this._ball.getPostion().z - .5),
                            console.log("targetPos:", this._targetPos);
                        var t = s["default"].lookAtTargetPosQuaternion(this._myTranform, this._targetPos);
                        this._myTranform.localRotation = t, this._playerAnimator.crossFade("DH_run_1", .1),
                            this._farm = 0;
                        break;

                    case n.SHOOT:
                        this._playerAnimator.play("DH_shoot_1"), this._farm = 0;
                        break;

                    case n.IDLE:
                        this._playerAnimator.crossFade("DH_ready_1", .1), this._farm = 0;
                }
            }, e.prototype.farmAnimationStateMachine = function() {
                switch (this._currState) {
                    case n.READT:
                        break;

                    case n.RUN:
                        this._myTranform.translate(new Laya.Vector3(0, 0, .1));
                        var t = s["default"].Vector3Distance(this._myTranform.position, this._targetPos);
                        .1 > t && (this._nextState = n.SHOOT);
                        break;

                    case n.SHOOT:
                        this._farm++, this._farm >= 14 && (this._nextState = n.IDLE, this._ball.shoot()),
                            this._farm >= 24 && (this._nextState = n.IDLE);
                        break;

                    case n.IDLE:
                }
            }, e.prototype.myUpdata = function() {
                this.animationStateMachine(), this.farmAnimationStateMachine();
            }, e;
        }(Laya.Script3D);
        i["default"] = c;
    }, {
        "../Common/EventMgr": 7,
        "../Datas/UserData": 17,
        "./GameEvent": 21,
        "./GameMgr": 23,
        "./GameUtility": 24,
        "./MyGameConfig": 26
    }],
    44: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./GameMgr"),
            a = t("../Common/EventMgr"),
            o = t("../Datas/UserData"),
            s = t("./GameEvent"),
            r = t("../Util/MyUtils"),
            l = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.AnimName = ["DH_dance_1", "DH_dance_2", "DH_dance_3"], e;
                }
                return __extends(e, t), e.prototype.init = function() {
                    var t = n["default"].instance.getObjectPoolMgr().instantiatePrefab("player");
                    this.animator = t.getChildByName("animator").getComponent(Laya.Animator);
                    var e = n["default"].instance.getObjectPoolMgr().instantiatePrefab("ball");
                    e.active = !0;
                    var i = this.owner.getChildByName("nodeParent");
                    i.addChild(t), i.addChild(e);
                    var o = -.2;
                    t.transform.localPosition = new Laya.Vector3(.08, o, 0), t.transform.localRotationEuler = new Laya.Vector3(0, 180, 0),
                        e.transform.localPosition = new Laya.Vector3(-.37, o + .4, 0), e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                        this.ballSkinNode = e.getChildByName("ballMesh"), this.ballSkinNode.transform.localScale = new Laya.Vector3(1, 1, 1),
                        this.ballSkinNode.meshRenderer.castShadow = !0, this.playerSkinNode = t.getChildByName("animator").getChildByName("xiaokeai"),
                        a["default"].instance.onEvent(s.GameEvent.SKIN_CHANG_BALL_SKIN, this, this.changeBallSkin),
                        a["default"].instance.onEvent(s.GameEvent.SKIN_CHANG_PLAYER_SKIN, this, this.changePlayerSkin),
                        a["default"].instance.onEvent(s.GameEvent.SKIN_SHOW_STORE, this, this.showStore),
                        this.owner.active = !1, this.isShow = !1;
                }, e.prototype.showStore = function(t) {
                    this.owner.active = t, this.isShow = t, console.log("显示商店"), t && (this.changeBallSkin(o["default"].ballSkin),
                        this.changePlayerSkin(o["default"].peopleSkin));
                }, e.prototype.changeBallSkin = function(t) {
                    var e = n["default"].instance.getBallSkinById(t);
                    return e ? void(this.ballSkinNode.meshRenderer.material = e.meshRenderer.material) : void console.log("球皮肤:" + t + "不存在");
                }, e.prototype.changePlayerSkin = function(t) {
                    var e = n["default"].instance.getPlayerSkinById(t),
                        i = r["default"].random(0, this.AnimName.length - 1);
                    return this.animator.play(this.AnimName[i]), e ? void(this.playerSkinNode.skinnedMeshRenderer.material = e.meshRenderer.material) : void console.log("人物3D皮肤:" + t + " 不存在");
                }, e.prototype.onUpdate = function() {
                    this.isShow && this.ballSkinNode.transform.rotate(new Laya.Vector3(0, 0, .03));
                }, e;
            }(Laya.Script);
        i["default"] = l;
    }, {
        "../Common/EventMgr": 7,
        "../Datas/UserData": 17,
        "../Util/MyUtils": 66,
        "./GameEvent": 21,
        "./GameMgr": 23
    }],
    45: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./Datas/ConfigData"),
            a = t("./Datas/UserData"),
            o = t("./Common/HttpMgr"),
            s = t("./Common/PlatformMgr"),
            r = t("./Common/StatisticsMgr"),
            l = t("./Common/StorageMgr"),
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.loginFileCount = 0, e;
                }
                return __extends(e, t), e.prototype.login = function() {
                    var t = this;
                    t.loginFun();
                    // o["default"].instance.getConfig("server", function(e, i) {
                    //     n["default"].initServer(i), t.loginFun();
                    // });
                }, e.prototype.loginFun = function() {
                    this.loginSuccess(e);
                    // var t = this;
                    // if (n["default"].releasePlatform) s["default"].callAPIMethodByProxy("doLogin", {
                    //     success: function(e) {
                    //         t.loginSuccess(e);
                    //     },
                    //     fail: function(e) {
                    //         t.loginFun();
                    //     }
                    // }); else {
                    //     var e = {};
                    //     e.code = "123", e.inviteId = "", e.channelId = "", e.success = t.loginSuccess, o["default"].instance.login(e);
                    // }
                }, e.prototype.loginFile = function() {
                    var t = this;
                    this.loginFileCount++, this.loginFileCount < 5 && Laya.timer.once(2e3, this, function() {
                        t.loginFun();
                    });
                }, e.prototype.loginSuccess = function(t) {
                    if (t) {
                        // a["default"].initSkinData();
                        // a["default"].isLogin = !0, a["default"].userId = t.userId, a["default"].nickName = t.nickname, 
                        // a["default"].avatarUrl = t.headImage, a["default"].money = t.userMoney || 0, a["default"].channelId = t.channelId, 
                        // a["default"].level = t.passNum || 0, a["default"].score = t.score || 0, a["default"].offlineTimeSpent = t.freeGoldSpacing, 
                        // a["default"].openId = t.openid, 
                        // a["default"].isNew = 1 == t.isNewUser, 
                        // a["default"].bannerTimes = t.adRefreshTimes, 
                        // a["default"].peopleSkin = t.peopleSkin, 
                        // a["default"].ballSkin = t.ballSkin;
                        // var e = t.allView || {};
                        // for (var i in e) a["default"].allView[i] = 1;
                        // a["default"].unlockView = new Array();
                        // var h = t.unlockView || {};
                        // for (var i in h) {
                        //     var c = h[i], u = new a.unlockViewData();
                        //     u.moiveProcess = c[1] || 1, u.id = Number(i), a["default"].unlockView.push(u);
                        // }
                        // n["default"].isRedConfig && a["default"].initSkinData(), n["default"].isLogin = !0, 
                        // o["default"].instance.getSystemConfig(),
                        // l["default"].saveUserData(); 
                    }
                }, e;
            }(Laya.Script);
        i["default"] = h;
    }, {
        "./Common/HttpMgr": 8,
        "./Common/PlatformMgr": 9,
        "./Common/StatisticsMgr": 11,
        "./Common/StorageMgr": 12,
        "./Datas/ConfigData": 15,
        "./Datas/UserData": 17
    }],
    46: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./LoginGame"),
            a = t("./Datas/ConfigData"),
            o = t("./Common/StorageMgr"),
            s = t("./Common/PlatformMgr"),
            r = t("./Common/ViewMgr"),
            l = t("./Common/StatisticsMgr"),
            h = t("./Common/HttpMgr"),
            c = function() {
                function t() {}
                return t.init = function() {
                    a["default"].initLocal(), o["default"].getLocalUserData(), s["default"].initPlatform(),
                        r["default"].instance.init(), l["default"].instance.init(), h["default"].instance.getAllAdsControl(),
                        new n["default"]().login();
                }, t;
            }();
        i["default"] = c;
    }, {
        "./Common/HttpMgr": 8,
        "./Common/PlatformMgr": 9,
        "./Common/StatisticsMgr": 11,
        "./Common/StorageMgr": 12,
        "./Common/ViewMgr": 14,
        "./Datas/ConfigData": 15,
        "./LoginGame": 45
    }],
    47: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Datas/ConfigData"),
            a = t("../Datas/UserData"),
            o = function() {
                function t() {}
                return t.prototype.request = function(t) {
                    var e = this,
                        i = t.meth || "post",
                        o = t.data || {},
                        s = "";
                    s = t.url.indexOf("https://") > -1 || t.url.indexOf("http://") > -1 ? t.url : n["default"].serverUrl + t.url;
                    var r = function(e) {
                            e && (e = e.data, e = JSON.parse(e)), t.callback && t.callback(e), t.callback = null,
                                t = null;
                        },
                        l = function(i) {
                            Laya.timer.once(1e4, e, function() {
                                t.fail && t.fail(i), t.fail = null, t = null;
                            });
                        };
                    a["default"].sessionId && (o.sessionId = a["default"].sessionId);
                    var h = new Laya.HttpRequest();
                    h.http.timeout = 3e4, h.http.ontimeout = function(e) {
                        console.log("超时"), t.timeoutFunc && t.timeoutFunc();
                    }, h.once(Laya.Event.COMPLETE, this, r), h.once(Laya.Event.ERROR, this, l);
                    var c = JSON.stringify(o);
                    n["default"].encryptDES && window.strEnc, h.send(s, "param=" + encodeURIComponent(c), i, "json", ["Content-Type", "application/x-www-form-urlencoded"]);
                }, t.prototype.requestStatistics = function(t) {
                    // var e = t.meth || "post", i = t.data || {};
                    // t.url = t.url || "";
                    // var o = n["default"].statisticsUrl + t.url, s = function(e) {
                    //     t.callback && t.callback(e);
                    // }, r = function(e) {
                    //     t.fail && t.fail(e);
                    // };
                    // a["default"].sessionId && (i.sessionId = a["default"].sessionId);
                    // var l = new Laya.HttpRequest();
                    // l.once(Laya.Event.COMPLETE, this, s), l.once(Laya.Event.ERROR, this, r);
                    // var h = JSON.stringify(i);
                    // l.send(o, "param=" + h, e, "json", [ "Content-Type", "application/x-www-form-urlencoded" ]);
                }, t.prototype.getRemoteJson = function(t) {
                    var e = this,
                        i = new Laya.HttpRequest();
                    i.once(Laya.Event.COMPLETE, this, function(a) {
                        a && "string" != typeof a && "object" == typeof a && n["default"].jsonVersion != a.vision && (i = new Laya.HttpRequest(),
                            i.once(Laya.Event.COMPLETE, e, function(e) {
                                e && "string" != typeof e && "object" == typeof e && t && t(e);
                            }), i.send(a.path, null, "get", "json", ["Content-Type", "application/json"]));
                    }), i.send(n["default"].jsonVersionUrl, null, "get", "json", ["Content-Type", "application/json"]);
                }, t.prototype.getConfig = function(t, e) {
                    // if (n["default"].remoteUrls[t]) {
                    //     var i = new Laya.HttpRequest();
                    //     i.once(Laya.Event.COMPLETE, this, function(i) {
                    //         i && "object" == typeof i ? e && e(t, i) : e && e(t, null);
                    //     }), i.send(n["default"].remoteUrls[t], null, "get", "json", [ "Content-Type", "application/json" ]);
                    // }
                }, t;
            }();
        i["default"] = o;
    }, {
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17
    }],
    48: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("../Common/PlatformMgr"),
            o = t("../BuildPlatform/wx/WXAPI");
        ! function(t) {
            t[t.LEFT = 0] = "LEFT", t[t.RIGHT = 1] = "RIGHT";
        }(n || (n = {}));
        var s = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._cellWidth = 101, e._cellHeight = 128, e._spaceX = 20, e.speedTime = 500,
                    e.itemWidth = 101, e;
            }
            return __extends(e, t), e.prototype.init = function(t) {
                this._cellWidth = t._cellWidth || 101, this._spaceX = t._spaceX || 20, this.speedTime = t.speedTime || 500,
                    this._cellHeight = t._cellHeight || 128, this.viewType = t.viewType;
            }, e.prototype.start = function(t, e, i) {
                if (t) {
                    var a = this;
                    this.owner.removeChildren(), this._cells = [];
                    var o = t.length > 4 ? !0 : !1;
                    this.posY = (this.owner.height - this._cellHeight) / 2;
                    for (var s, r = function() {
                            s = t[h];
                            var n = new Laya.Image();
                            l.owner.addChild(n), o ? n.pos((h - 1) * (l._cellWidth + l._spaceX), l.posY) : n.pos(h * (l._cellWidth + l._spaceX), l.posY),
                                n.skin = s.param, n.width = l._cellWidth, n.height = l._cellHeight;
                            var r = h;
                            n.on(Laya.Event.MOUSE_DOWN, l, function() {
                                a.startTime = Laya.timer.currTimer;
                            }), n.on(Laya.Event.MOUSE_UP, l, function() {
                                Laya.timer.currTimer - a.startTime <= 200 && a.tiaozhuang(t[r], e, i), a.startTime = Laya.timer.currTimer;
                            }), l._cells.push(n);
                        }, l = this, h = 0; h < t.length; h++) r();
                    this._cells.length <= 0 || (this.fristPosX = this._cells[0].x, this.endPosX = this._cells[this._cells.length - 1].x,
                        this.moveDirection = n.RIGHT, this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown),
                        this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                        this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp));
                }
            }, e.prototype.tiaozhuang = function(t, e, i) {
                var n = {
                    my_uuid: e,
                    to_appid: t.appid,
                    appid: t.appid,
                    toLinks: t.toLinks
                };
                n.viewType = this.viewType, o["default"].ald(i + "广告位跳出", {
                    path: t.toLinks,
                    appId: t.appid,
                    position: t.position
                }), n.callback = function() {
                    o["default"].ald(i + "广告位跳出成功", {
                        path: t.toLinks,
                        appId: t.appid,
                        position: t.position
                    });
                }, a["default"].callAPIMethodByProxy("navigateToMiniProgram", n);
            }, e.prototype.autoMove = function() {
                this._cells.length <= 4 || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    this.move();
                }));
            }, e.prototype.move = function() {
                for (var t = -(this._cells[0].x - this.fristPosX), e = (Math.abs(this.speedTime / (this._cellWidth + this._spaceX) * t),
                        0); e < this._cells.length; e++) {
                    var i = this._cells[e];
                    i.pos(i.x - .5, this.posY);
                }
                this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
            }, e.prototype.firstMoveToEnd = function() {
                var t = this._cells[this._cells.length - 1],
                    e = this._cells.shift();
                e.pos(t.x + this._cellWidth + this._spaceX, this.posY), this._cells.push(e);
            }, e.prototype.endMoveToFrist = function() {
                var t = this._cells[0],
                    e = this._cells.pop(),
                    i = t.x - this._cellWidth - this._spaceX;
                e.pos(i, t.y), this._cells.unshift(e);
            }, e.prototype.mouseDown = function() {
                this._mouseDown = !0, Laya.timer.clearAll(this), this._mouseX = this._mouseX = Laya.MouseManager.instance.mouseX,
                    Laya.timer.clearAll(this);
                for (var t = 0; t < this._cells.length; t++) {
                    var e = this._cells[t];
                    Laya.Tween.clearAll(e);
                }
            }, e.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var t = Laya.MouseManager.instance.mouseX - this._mouseX;
                    this._mouseX = Laya.MouseManager.instance.mouseX;
                    for (var e = 0; e < this._cells.length; e++) {
                        var i = this._cells[e];
                        i.pos(i.x + t, this.posY);
                    }
                    this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
                }
            }, e.prototype.mouseUp = function(t) {
                this._mouseDown = !1, this.autoMove();
            }, e;
        }(Laya.Script);
        i["default"] = s;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/PlatformMgr": 9
    }],
    49: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Util/MyUtils"),
            a = t("../Common/PlatformMgr"),
            o = t("../Common/ViewMgr"),
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isMyBaseView = !0, e.offset = {
                        y: 0
                    }, e._speed = 1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.owner.autoDestroyAtClosed = !0, this.owner.height = Laya.stage.height, this.addMinProgram = this.owner.getChildByName("addMinProgram"),
                        this.okBtn = this.owner.getChildByName("okBtn"), this.closeBtn = this.owner.getChildByName("closeBtn"),
                        this.homeBtn = this.owner.getChildByName("homeBtn"), this.shareBtn = this.owner.getChildByName("shareBtn"),
                        this.addMinProgram && (this.addMinProgram.anchorY = .3, n["default"].autoScreenSize([this.addMinProgram]),
                            this._minX = Laya.stage.width / 2 - 20, this._maxX = Laya.stage.width / 2 + 20),
                        this.offset = a["default"].callAPIMethodByProxy("getOffsetOpenDomain") || this.offset;
                }, e.prototype.onEnable = function() {
                    this.addEvent();
                }, e.prototype.onDisable = function() {
                    this.removeEvent();
                }, e.prototype.openView = function(t) {
                    this.owner.visible = !0, this.owner.height = Laya.stage.height, this._data = t || {};
                }, e.prototype.tweenAniDown = function(t, e, i, n) {
                    var a = this;
                    Laya.Tween.to(t, e, n, null, Laya.Handler.create(this, function() {
                        a.tweenAniUp(t, e, i, n);
                    }));
                }, e.prototype.tweenAniUp = function(t, e, i, n) {
                    var a = this;
                    Laya.Tween.to(t, i, n, null, Laya.Handler.create(this, function() {
                        a.tweenAniDown(t, e, i, n);
                    }));
                }, e.prototype.addEvent = function() {
                    var t = this;
                    this.addMinProgram && (this._speed = -1, Laya.timer.frameLoop(1, this, function() {
                        t.addMinProgram.x += t._speed, t.addMinProgram.x <= t._minX ? (t._speed = 1, t.addMinProgram.x = t._minX) : t.addMinProgram.x >= t._maxX && (t._speed = -1,
                            t.addMinProgram.x = t._maxX);
                    }));
                }, e.prototype.removeEvent = function() {
                    this._isClick = null, this.addMinProgram && Laya.timer.clearAll(this.addMinProgram),
                        Laya.timer.clearAll(this);
                }, e.prototype.closeView = function(t) {
                    if (this.owner) {
                        var e = this.owner.url;
                        t && t.notDestroy ? o["default"].instance.hideView(e) : o["default"].instance.closeView(e),
                            "Rank.scene" == e && a["default"].callAPIMethodByProxy("setAuthorizationCheck", !0),
                            this._data && this._data.callback && this._data.callback(t), this._data = null;
                    }
                }, e;
            }(Laya.Script);
        i["default"] = s;
    }, {
        "../Common/PlatformMgr": 9,
        "../Common/ViewMgr": 14,
        "../Util/MyUtils": 66
    }],
    50: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onAwake = function() {
                this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.onUp),
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.onUp);
            }, e.prototype.onDisable = function() {
                this.owner.offAll(), Laya.Tween.clearAll(this);
            }, e.prototype.onDown = function() {
                Laya.Tween.to(this.owner, {
                    scaleX: .8,
                    scaleY: .8
                }, 100);
            }, e.prototype.onUp = function() {
                Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, 100);
            }, e;
        }(Laya.Script);
        i["default"] = n;
    }, {}],
    51: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./BaseView"),
            o = t("../Util/MyUtils"),
            s = t("../Datas/ConfigData"),
            r = t("../GameMgr3d/GameEvent"),
            l = t("../Common/EventMgr"),
            h = t("../Common/PlatformMgr"),
            c = t("../BuildPlatform/wx/WXAPI");
        ! function(t) {
            t[t.PROPES = 0] = "PROPES", t[t.RESTRGENCE = 1] = "RESTRGENCE", t[t.SETTL_COIN = 2] = "SETTL_COIN",
                t[t.GAMEOVER = 3] = "GAMEOVER", t[t.ONLINE_COIN = 4] = "ONLINE_COIN", t[t.OFFLINE_COIN = 5] = "OFFLINE_COIN",
                t[t.HOME = 6] = "HOME", t[t.FIGHTING = 7] = "FIGHTING", t[t.CONVERGE = 8] = "CONVERGE",
                t[t.NONE = 9] = "NONE";
        }(n = i.UI_VIEW_TYPE || (i.UI_VIEW_TYPE = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.appid = "", e.lastViewType = n.HOME, e;
            }
            return __extends(e, t), e.prototype.onAwake = function() {
                t.prototype.onAwake.call(this), o["default"].autoScreenSize([this.homeBtn]),
                    this.adList = this.owner.getChildByName("list"),
                    this.adList.vScrollBarSkin = "", this.adList.selectEnable = !0, this.adList.y = 20,
                    this.adList.renderHandler = new Laya.Handler(this, this.onRender),
                    this.adList.mouseHandler = new Laya.Handler(this, this.onClickItem),
                    Laya.stage.height > 1334 && (this.adList.y = 20 + (Laya.stage.height - 1334) / 2),
                    this.okBtn.y += this.offset.y / 2, h["default"].callAPIMethodByProxy("destoryAllBannerAd");
            }, e.prototype.addEvent = function() {
                t.prototype.addEvent.call(this), this.okBtn.on(Laya.Event.CLICK, this, this.okClick),
                    this.homeBtn.on(Laya.Event.CLICK, this, this.onClickHome);
            }, e.prototype.removeEvent = function() {
                t.prototype.removeEvent.call(this), this.okBtn.off(Laya.Event.CLICK, this, this.okClick),
                    this.homeBtn.off(Laya.Event.CLICK, this, this.onClickHome);
            }, e.prototype.openView = function(e) {
                var i = this;
                t.prototype.openView.call(this, e), console.log("data:", e), this.mainViewJumpToOtherGame = e.mainViewJumpToOtherGame,
                    this.lastViewType = e.viewType;
                var a = this.lastViewType == n.GAMEOVER || this.lastViewType == n.HOME;
                this.okBtn.visible = a, this.homeBtn.visible = !1;
                var o = [];
                null == this.adList.array && (o = s["default"].getAdData(1004), this.adList.array = o),
                    this.adList.refresh(), this.adList.scrollTo(0), Laya.timer.once(1e3, this, function() {
                        i && i.homeBtn && (i.homeBtn.visible = !0);
                    });
            }, e.prototype.onClickHome = function() {
                switch (this.lastViewType) {
                    case n.GAMEOVER:
                        l["default"].instance.emit(r.GameEvent.Game_INIT), l["default"].instance.emit("goHome");
                        break;

                    case n.FIGHTING:
                        l["default"].instance.emit("openFighting");
                        break;

                    case n.HOME:
                        l["default"].instance.emit("goHome");
                        break;

                    case n.RESTRGENCE:
                        l["default"].instance.emit("openResurgence", {
                            noRefresh: !0
                        });
                        break;

                    case n.SETTL_COIN:
                    case n.ONLINE_COIN:
                    case n.OFFLINE_COIN:
                        l["default"].instance.emit("openSettleCoin");
                }
                l["default"].instance.emit(r.GameEvent.ADBACK), this.closeView();
            }, e.prototype.okClick = function() {
                this.closeView(), l["default"].instance.emit(r.GameEvent.Game_INIT), l["default"].instance.emit("goHome", {
                    isJumpOtherGame: this.mainViewJumpToOtherGame
                }), l["default"].instance.emit(r.GameEvent.ADBACK);
            }, e.prototype.onClickItem = function(t, e) {
                // if (t.type == Laya.Event.CLICK && t.target instanceof Laya.Box) {
                //     var i = this.adList.array[e], a = {
                //         my_uuid: i.position,
                //         to_appid: i.appid,
                //         appid: i.appid,
                //         toLinks: i.toLinks
                //     };
                //     c["default"].ald("聚合广告位跳出", {
                //         path: i.toLinks,
                //         appId: i.appid,
                //         position: i.position
                //     }), a.callback = function() {
                //         c["default"].ald("聚合广告位跳出成功", {
                //             path: i.toLinks,
                //             appId: i.appid,
                //             position: i.position
                //         });
                //     }, a.viewType = n.CONVERGE, h["default"].callAPIMethodByProxy("navigateToMiniProgram", a);
                // }
            }, e.prototype.onRender = function(t, e) {
                if (!(e > this.adList.array.length && 0 == this.adList.array.length) && null != this.adList.array[e]) {
                    var i = t.getChildByName("img");
                    i.skin = this.adList.array[e].param;
                }
            }, e;
        }(a["default"]);
        i["default"] = u;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/EventMgr": 7,
        "../Common/PlatformMgr": 9,
        "../Datas/ConfigData": 15,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./BaseView": 49
    }],
    52: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("../GameMgr3d/GameEvent"),
            o = t("../Datas/ConfigData"),
            s = t("../GameMgr3d/GameMgr"),
            r = t("../Datas/UserData"),
            l = t("../Common/EventMgr"),
            h = t("../Common/PlatformMgr"),
            c = t("../Common/StatisticsMgr"),
            u = t("../BuildPlatform/wx/WXAPI"),
            d = t("../Util/MyUtils"),
            f = t("./PromotionAnimation"),
            p = t("./ConvergeAd"),
            m = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.touchBeginnerGuide = this.owner.getChildByName("touchBeginnerGuide");
                    var e = this.touchBeginnerGuide.getChildByName("BeginnerGuide");
                    this.mouseTouch = this.owner.getChildByName("mouseTouch"), this.progressNode = this.owner.getChildByName("progress"),
                        this.passNodeParent = this.progressNode.getChildByName("passNodeParent"), this.nextLevelImg = this.progressNode.getChildByName("imgNextLevel"),
                        this.currLevelImg = this.progressNode.getChildByName("imgCurrLevel"), this.nextLevelLab = this.nextLevelImg.getChildByName("nextLevelLab"),
                        this.currLevelLab = this.currLevelImg.getChildByName("currLevelLab"), this.surpassOtherText = this.owner.getChildByName("surpassOtherText"),
                        this.ballParent = this.owner.getChildByName("ballNum"), this.ballNum = this.ballParent.getChildByName("num"),
                        this.jumpBtn = this.owner.getChildByName("jumpBtn");
                    var i = this.touchBeginnerGuide.getChildByName("hand");
                    this.adImageLeft = this.owner.getChildByName("AD1"),
                        this.adImageRight = this.owner.getChildByName("AD2"),
                        this.invincibleBtn = this.owner.getChildByName("invincibleBtn"),
                        this.yad = this.owner.getChildByName("yad"),

                        this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("GAME", "LOGO");
                        })




                    this.haveInvincible = this.invincibleBtn.getChildByName("have"),
                        this.noHaveInvincible = this.invincibleBtn.getChildByName("noHave"), this.nextLevelImg.visible = !1,
                        this.currLevelImg.visible = !1, this.ballParent.visible = !1, this.surpassOtherText.visible = !1,
                        this.progressNode.visible = !1, this.touchBeginnerGuide.visible = !0, this.progressNode.y += this.offset.y / 4,
                        e.y += this.offset.y / 4, i.y += this.offset.y / 3, this.adImageLeft.y += this.offset.y / 3 * 2,
                        this.adImageRight.y += this.offset.y / 3 * 2, this.invincibleBtn.y += this.offset.y / 2,
                        this.jumpBtn.y += this.offset.y / 2, this.ballParent.y += this.offset.y / 2;
                }, e.prototype.showUI = function(t) {
                    this.currLevelImg.visible = t, this.nextLevelImg.visible = t, this.invincibleBtn.visible = t,
                        t || (this.jumpBtn.visible = t, this.closeSurpassOther());
                }, e.prototype.FigerAnim = function() {
                    this.finger.x = 90 + 500 * Math.abs((Laya.timer.currTimer - this.fingerStartTime + 500) % 2e3 - 1e3) / 1e3;
                }, e.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e),
                        console.log("打开GameFight"),
                        this.progressNode.visible = !0,
                        r["default"].level <= 1 ? this.touchBeginnerGuide.visible = !0 : this.mouseTouchFun();
                }, e.prototype.mouseTouchFun = function() {
                    var t = this;
                    this.touchBeginnerGuide.visible = !1, this.mouseTouch.visible = !1,
                        l["default"].instance.emit(a.GameEvent.Game_START),
                        Laya.timer.frameOnce(1, this, function() {
                            var e = t.adImageLeft.getComponent(f["default"]);
                            e.init(p.UI_VIEW_TYPE.FIGHTING), e.start(!0, !0, 1001);
                            var i = t.adImageRight.getComponent(f["default"]);
                            i.init(p.UI_VIEW_TYPE.FIGHTING), i.start(!0, !0, 1002);
                        });
                    var e = d["default"].random(0, 100);
                    e > 75 && l["default"].instance.emit(a.GameEvent.UI_SHOW_PROVOCATION);
                }, e.prototype.openResurgence = function() {
                    l["default"].instance.emit("openResurgence");
                }, e.prototype.openGameOverLevel = function() {
                    l["default"].instance.emit("openGameOverLevel");
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.mouseTouch.on(Laya.Event.CLICK, this, this.mouseTouchFun),
                        this.jumpBtn.on(Laya.Event.CLICK, this, this.goJumpNextPass), this.invincibleBtn.on(Laya.Event.CLICK, this, this.invincibleClick),
                        l["default"].instance.onEvent(a.GameEvent.UI_UPDATA_BALL_NUM, this, this.updataBallNum),
                        l["default"].instance.onEvent(a.GameEvent.UI_NEXT_PASS, this, this.nextLevel), l["default"].instance.onEvent(a.GameEvent.UI_UPDATA_MIN_PASS, this, this.updataPass),
                        l["default"].instance.onEvent(a.GameEvent.UI_SHOW_FIGHT, this, this.showUI), l["default"].instance.onEvent(a.GameEvent.UI_UPDATA_JUMPBTN, this, this.updataJumpBtn),
                        l["default"].instance.onEvent(a.GameEvent.UI_UPDATA_INVINCIBTN, this, this.updataInvinciBtn),
                        l["default"].instance.onEvent(a.GameEvent.UI_SHOW_PROVOCATION, this, this.openProvocationOther);
                }, e.prototype.invincibleClick = function() {
                    var t = this;
                    // this.haveInvincible.visible ? (
                    //     l["default"].instance.emit(a.GameEvent.USE_INVINCIBTN), 
                    //     this.invincibleBtn.visible = !1
                    // ) : ();

                    if (this.haveInvincible.visible) {
                        l["default"].instance.emit(a.GameEvent.USE_INVINCIBTN),
                            this.invincibleBtn.visible = !1
                    } else {
                        platform.getInstance().showReward(() => {
                            l["default"].instance.emit(a.GameEvent.ADD_INVINCIBLE),
                                l["default"].instance.emit(a.GameEvent.USE_INVINCIBTN),
                                t.invincibleBtn.visible = !1;
                        }, () => {
                            // l["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end.");
                        })
                    }





                    // h["default"].ptAPI ? (
                    // h["default"].callAPIMethodByProxy("CanPlayVideo") ? h["default"].callAPIMethodByProxy("showVideo", {
                    //     posID: 208,
                    //     _type: c.SHARE_VIDEO_TYPE.RESURGENCE,
                    //     caller: this,
                    //     callBackSuc: function() {
                    //         l["default"].instance.emit(a.GameEvent.ADD_INVINCIBLE), 
                    //         l["default"].instance.emit(a.GameEvent.USE_INVINCIBTN), 
                    //         t.invincibleBtn.visible = !1, u["default"].ald("获取道具成功--视频");
                    //     },
                    //     callBackFail: function() {
                    //         l["default"].instance.emit("openTip", "看完视频才能获得道具");
                    //     },
                    //     callBackErro: function() {
                    //         l["default"].instance.emit("openTip", "今日观看视频次数已用尽");
                    //     }
                    // }) : l["default"].instance.emit("openTip", "今日观看视频次数已用尽")) : (l["default"].instance.emit(a.GameEvent.ADD_INVINCIBLE), 
                    // l["default"].instance.emit(a.GameEvent.USE_INVINCIBTN), this.invincibleBtn.visible = !1);
                }, e.prototype.removeEvent = function() {
                    t.prototype.removeEvent.call(this), this.mouseTouch.off(Laya.Event.CLICK, this, this.mouseTouchFun),
                        this.jumpBtn.off(Laya.Event.CLICK, this, this.goJumpNextPass), this.invincibleBtn.off(Laya.Event.CLICK, this, this.invincibleClick),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_UPDATA_BALL_NUM, this, this.updataBallNum),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_NEXT_PASS, this, this.updataPass),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_UPDATA_MIN_PASS, this, this.updataPass),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_SHOW_FIGHT, this, this.showUI),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_UPDATA_JUMPBTN, this, this.updataJumpBtn),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_UPDATA_INVINCIBTN, this, this.updataInvinciBtn),
                        l["default"].instance.onOffEvent(a.GameEvent.UI_SHOW_PROVOCATION, this, this.openProvocationOther);
                }, e.prototype.updataInvinciBtn = function(t) {
                    var e = t.isHave,
                        i = t.isShow;
                    this.invincibleBtn.visible = i, this.haveInvincible.visible = e, this.noHaveInvincible.visible = !e;
                }, e.prototype.updataJumpBtn = function(t) {
                    this.jumpBtn.visible = t;
                }, e.prototype.goJumpNextPass = function() {
                    h["default"].ptAPI ? (u["default"].ald("跳关--视频"), h["default"].callAPIMethodByProxy("CanPlayVideo") ? h["default"].callAPIMethodByProxy("showVideo", {
                        posID: 208,
                        _type: c.SHARE_VIDEO_TYPE.RESURGENCE,
                        caller: this,
                        callBackSuc: function() {
                            u["default"].ald("跳关成功--视频"), l["default"].instance.emit(a.GameEvent.Game_GoNextPass, {
                                isForceNext: !0
                            });
                        },
                        callBackFail: function() {
                            l["default"].instance.emit("openTip", "看完视频才能获得跳关");
                        },
                        callBackErro: function() {
                            l["default"].instance.emit("openTip", "今日观看视频次数已用尽");
                        }
                    }) : l["default"].instance.emit("openTip", "今日观看视频次数已用尽")) : l["default"].instance.emit(a.GameEvent.Game_GoNextPass, {
                        isForceNext: !0
                    });
                }, e.prototype.updataPass = function() {
                    for (var t = s["default"].instance.getGameCtrl().getCurrGameData().pass, e = 0; e < this.passNodeParent._children.length; e++) {
                        var i = this.passNodeParent._children[e],
                            n = "";
                        n = t - 1 > e ? "game/1@2x.png" : e == t - 1 ? "game/2@2x.png" : "game/3@2x.png",
                            i.skin = n;
                    }
                }, e.prototype.updataBallNum = function(t) {
                    return console.log("ballNum:", t), 1 > t ? void(this.ballParent.visible = !1) : (this.ballNum.skin = "SkinTrial/shenyu" + t + "@2x.png",
                        void(this.ballParent.visible = !0));
                }, e.prototype.nextLevel = function(t) {
                    console.log("num:", t);
                    var e = r["default"].level;
                    this.currLevelLab.value = e.toString(), this.nextLevelLab.value = (e + 1).toString(),
                        this.currLevelImg.visible = !0, this.nextLevelImg.visible = !0;
                    var i = 0;
                    i = 1 == t ? 0 : t % 2 == 0 ? -22.5 - 45 * (t / 2 - 1) : -45 - 45 * (Math.floor(t / 2) - 1),
                        this.currLevelImg.x = i - 55, this.nextLevelImg.x = -this.currLevelImg.x;
                    for (var n = 0; t > n; n++) {
                        var a = "game/3@2x.png";
                        0 == n && (a = "game/2@2x.png");
                        var o = new Laya.Image(a);
                        this.passNodeParent.addChild(o), o.anchorX = .5, o.anchorY = .5;
                        var s = i + 45 * n;
                        o.pos(s, 0);
                    }
                }, e.prototype.openProvocationOther = function() {
                    var t = o.SORTTYPE.ENDLESS;
                    Laya.timer.clear(this, this.closeProvocationOther), this.closeSurpassOther(), this.provocationOther || (this.provocationOther = new Laya.WXOpenDataViewer(),
                            this.owner.addChild(this.provocationOther), this.provocationOther.width = 750, this.provocationOther.height = 62,
                            this.provocationOther.pos(0, 252)), h["default"].callSubDomainMethodByProxy("setOpenView", this.provocationOther),
                        h["default"].callSubDomainMethodByProxy("openProvocationOther", {
                            _type: t
                        }), Laya.timer.once(2500, this, this.closeProvocationOther);
                }, e.prototype.closeProvocationOther = function() {
                    this.provocationOther && (this.provocationOther.destroy(), this.provocationOther = null),
                        h["default"].callSubDomainMethodByProxy("closeProvocationOther");
                }, e.prototype.openSurpassOther = function() {
                    var t = this,
                        e = o.SORTTYPE.ENDLESS;
                    this.closeProvocationOther(), this.surpassOther || (this.surpassOther = new Laya.WXOpenDataViewer(),
                            this.owner.addChild(this.surpassOther), this.surpassOther.width = 60, this.surpassOther.height = 100,
                            this.surpassOther.pos(570, 304), this.surpassOther.y += this.offset.y / 2), this.surpassOtherText.visible = !1,
                        h["default"].callSubDomainMethodByProxy("setOpenView", this.surpassOther), h["default"].callSubDomainMethodByProxy("openSurpassOther", {
                            _type: e,
                            val: r["default"].level
                        }), Laya.timer.clearAll(this.surpassOther), Laya.timer.once(500, this.surpassOther, function() {
                            Laya.Tween.clearAll(t.surpassOther), Laya.Tween.to(t.surpassOther, {
                                y: t.surpassOther.y - 10
                            }, 1e3);
                        });
                }, e.prototype.closeSurpassOther = function() {
                    this.surpassOtherText.visible = !1, this.surpassOther && (this.surpassOther.destroy(),
                        this.surpassOther = null), h["default"].callSubDomainMethodByProxy("closeSurpassOther");
                }, e.prototype.onDisable = function() {
                    t.prototype.onDisable.call(this), Laya.timer.clearAll(this.provocationOther), this.closeProvocationOther(),
                        this.closeSurpassOther();
                }, e;
            }(n["default"]);
        i["default"] = m;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/EventMgr": 7,
        "../Common/PlatformMgr": 9,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../GameMgr3d/GameMgr": 23,
        "../Util/MyUtils": 66,
        "./BaseView": 49,
        "./ConvergeAd": 51,
        "./PromotionAnimation": 58
    }],
    53: [function(t, e, i) {
        "use strict";

        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("./OverAdListLoop"),
            o = t("../Util/MyUtils"),
            s = t("../Datas/ConfigData"),
            r = t("../GameMgr3d/GameEvent"),
            l = t("../Datas/UserData"),
            h = t("../Common/EventMgr"),
            c = t("../Common/PlatformMgr"),
            u = t("../Common/HttpMgr"),
            d = t("./AdListLoop"),
            f = t("./cionAni"),
            p = t("../Common/ViewMgr"),
            m = t("../BuildPlatform/wx/WxAdManager"),
            y = t("./ConvergeAd"),
            g = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.inviteHintY = -44, e.DIX = 0, e.DIXMAX = 6, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this);
                        var e = this.owner.getChildByName("content"),
                            i = e.getChildByName("btnAnchor");
                        this.btnAnchor = i,
                            this.btnNext = i.getChildByName("btnNext"),
                            this.btnHome = i.getChildByName("btnHome"),
                            this.btnAgain = i.getChildByName("btnAgain");
                        var n = e.getChildByName("levelPanel");
                        this.passNum = n.getChildByName("passNum"), this.imgFail = n.getChildByName("imgFail"),
                            this.imgPass = n.getChildByName("imgPass"), this.levePanel = n, this.imgFail.visible = !1,
                            this.imgPass.visible = !1;
                        var r = e.getChildByName("scorePanel");
                        this.scorePanel = r, this.score = r.getChildByName("clipScore");
                        var l = e.getChildByName("ADPlane");


                        var list = e.getChildByName("listAd");
                        console.log("list", list);
                        list.renderHandler = new Laya.Handler(this, (c) => {

                            c.offAll(Laya.Event.MOUSE_DOWN)
                            c.on(Laya.Event.MOUSE_DOWN, this, () => {
                                platform.getInstance().navigate("GAME", "MORE", c.dataSource.id);
                            })


                        })
                        list.array = platform.getInstance().getForgames();
                        // this._overListLoop = l.getComponent(a["default"]);
                        console.log("this._overListLoop", this._overListLoop);
                        var h = s["default"].getAdData(1003);
                        // this._overListLoop.start(h, 1003, y.UI_VIEW_TYPE.GAMEOVER), 
                        this.bannerADPanel = this.owner.getChildByName("bannerADPanel");
                        // this.bannnerAdListloop = this.bannerADPanel.getComponent(d["default"]);
                        var c = this.owner.getChildByName("coinBg");
                        this.coinNum = c.getChildByName("coinNum"), this.coinUnit = c.getChildByName("coinUnit"),
                            o["default"].autoScreenSize([c]), c.y += 10;
                    }, e.prototype.goFighting = function() {

                        platform.getInstance().showInterstitial(() => {
                            h["default"].instance.emit(r.GameEvent.Game_INIT), h["default"].instance.emit("openGetPropes"),
                                this.closeView();
                        })



                    }, e.prototype.goHome = function() {
                        h["default"].instance.emit(r.GameEvent.Game_INIT);
                        h["default"].instance.emit("goHome");
                        this.closeView();
                    }, e.prototype.goShare = function() {
                        var t = this,
                            e = {
                                caller: this,
                                callback: function(e) {
                                    e.success ? u["default"].instance.shareCallback({
                                        success: function(e) {
                                            if (l["default"].shareCount = e.shareCount, l["default"].money = e.userMoney, 0 == s["default"].ctrlInfo.inviteFriendsControl || l["default"].shareCount >= 8) t.inviteLabel.text = "一起玩",
                                                t.inviteCoinImg.visible = !1, t.inviteLabel.x = 23;
                                            else {
                                                var i = s["default"].ctrlInfo.inviteFriendsGolds || 0;
                                                t.inviteLabel.text = i, t.inviteCoinImg.visible = !0, t.inviteLabel.x = 33;
                                            }
                                            h["default"].instance.emit("UpdataMoney");
                                        }
                                    }) : h["default"].instance.emit("openTip", "分享失败");
                                },
                                type: 1
                            };
                        l["default"].isShare = !0, c["default"].callAPIMethodByProxy("shareAppMessage", e);
                    }, e.prototype.OVERhuoquAIn = function() {
                        this.DIX = 0, Laya.timer.clear(this, this.goldFlyAniLoop), Laya.timer.loop(50, this, this.goldFlyAniLoop);
                    }, e.prototype.goldFlyAniLoop = function() {
                        this.DIX <= this.DIXMAX ? (this.DIX = this.DIX + 1, this.DIX > this.DIXMAX ? this.qudonghua(!0) : this.qudonghua(!1)) : Laya.timer.clear(this, this.goldFlyAniLoop);
                    }, e.prototype.qudonghua = function(t) {}, e.prototype.addEvent = function() {
                        this.btnNext.on(Laya.Event.CLICK, this, this.nextLevelFunc), this.btnHome.on(Laya.Event.CLICK, this, this.goHome),
                            this.btnAgain.on(Laya.Event.CLICK, this, this.goFighting),
                            h["default"].instance.onEvent("UpdataMoney", this, this.updateCoinNum), h["default"].instance.onEvent(m.AdEvent.event_showBannerAd_jiesuanjiemian_erro_106, this, this.showADPanel),
                            h["default"].instance.onEvent(r.GameEvent.ADBACK, this, this.showAd), t.prototype.addEvent.call(this);
                    }, e.prototype.showAd = function() {
                        this.owner.visible && (m["default"].Instance.showBannerAd_zhujiemianlingqujinbi(3) ? this.hideADPanel() : this.showADPanel());
                    }, e.prototype.updateCoinNum = function() {
                        var t = o["default"].scoreConversion(l["default"].money);
                        this.coinNum.value = t.value, this.coinUnit.visible = null != t.isK;
                        var e = ["T", "B", "M", "K"],
                            i = 21 * t.value.length;
                        if (t.isK) {
                            this.coinUnit.value = e[t.isK];
                            i += 37;
                        }
                    }, e.prototype.removeEvent = function() {
                        this.btnNext.off(Laya.Event.CLICK, this, this.nextLevelFunc), this.btnHome.off(Laya.Event.CLICK, this, this.goHome),
                            this.btnAgain.off(Laya.Event.CLICK, this, this.goFighting),
                            h["default"].instance.onOffEvent(r.GameEvent.ADBACK, this, this.showAd), h["default"].instance.onOffEvent("UpdataMoney", this, this.updateCoinNum),
                            h["default"].instance.onOffEvent(m.AdEvent.event_showBannerAd_jiesuanjiemian_erro_106, this, this.showADPanel),
                            t.prototype.removeEvent.call(this);
                    }, e.prototype.nextLevelFunc = function() {

                        platform.getInstance().showInterstitial(() => {
                            h["default"].instance.emit(r.GameEvent.Game_INIT), h["default"].instance.emit("openGetPropes");
                        });

                    }, e.prototype.onEnable = function() {
                        t.prototype.onEnable.call(this);
                    }, e.prototype.onDisable = function() {
                        t.prototype.onDisable.call(this), c["default"].callAPIMethodByProxy("destoryAllBannerAd");
                    }, e.prototype.openView = function(e) {
                        var i = this;
                        if (t.prototype.openView.call(this, e), console.log("跳转到结算:", e),
                            e = e || {
                                isPass: !1
                            }, 0 == s["default"].ctrlInfo.inviteFriendsControl || l["default"].shareCount >= 8) this.inviteLabel.text = "一起玩",
                            this.inviteCoinImg.visible = !1, this.inviteLabel.x = 23;
                        else {
                            var n = s["default"].ctrlInfo.inviteFriendsGolds || 0;
                        }
                        var a = e.addMoney;
                        if (a && 0 != a && h["default"].instance.emit("openTip", "Coin x" + a), l["default"].isDouble = !1,
                            l["default"].multipy = 1, 0 == s["default"].ctrlInfo.inviteFriendsControl || l["default"].shareCount >= 8) this.inviteLabel.text = "一起玩";
                        else {
                            var n = s["default"].ctrlInfo.inviteFriendsGolds || 0;
                        }
                        c["default"].callAPIMethodByProxy("showInterstitialAD"), this.scorePanel.visible = !1,
                            this.levePanel.visible = !0, this.imgFail.visible = !e.isPass, this.imgPass.visible = e.isPass,
                            this.btnNext.visible = e.isPass, this.btnAgain.visible = !e.isPass, this.passNum.value = l["default"].level.toString();
                        var r = l["default"].level.toString().length - 1;
                        if (this.passNum.x = 10 + 14 * r,
                            e.isPass &&
                            (
                                l["default"].level += 1,
                                platform.getInstance().setStorageSync("level", l["default"].level)

                            ),
                            c["default"].callAPIMethodByProxy("uploadRankDate", {
                                level: l["default"].level
                            }), c["default"].callSubDomainMethodByProxy("upSelfScore", l["default"].level),
                            // this.showAd(), 
                            s["default"].ctrlInfo.isWudian && 1 == s["default"].wudianLevel[3]) {
                            var u = 560 + this.offset.y / 2,
                                d = u;
                            s["default"].random_location && (d = o["default"].random(u, u + 30)), this.btnAnchor.y = d;
                            var f = 1900;
                            s["default"].Btu_move[3] && (f = Number(s["default"].Btu_move[3])), Laya.timer.once(f, this, function() {
                                Laya.Tween.to(i.btnAnchor, {
                                    y: 318 + i.offset.y / 3
                                }, 500, Laya.Ease.backOut, null, 500);
                            });
                        } else this.btnAnchor.y = 318 + this.offset.y / 3;
                        this.updateCoinNum();
                    }, e.prototype.onRender = function(t, e) {
                        var i = t.getChildAt(0);
                        i.skin = this.adData[e].param;
                    },
                    e.prototype.onClickItem = function(t, e) {
                        // if (t.type == Laya.Event.CLICK && t.target instanceof Laya.Box) {
                        //     var i = t.target, n = this.adData[e], a = {
                        //         my_uuid: n.position,
                        //         to_appid: n.appid,
                        //         appid: n.appid,
                        //         toLinks: n.toLinks,
                        //         notShowAd: !0
                        //     };
                        //     if (this.adDataRandom.length > 0) {
                        //         var o = i.getChildAt(0);
                        //         this.adDataRandom.push(n), this.adData[e] = this.adDataRandom.shift(), o.skin = this.adData[e].param;
                        //     }
                        //     c["default"].callAPIMethodByProxy("navigateToMiniProgram", a);
                        // }
                    }, e.prototype.showADPanel = function() {
                        var t = this;
                        console.log("-----showADPanel");
                        this.bannerADPanel.visible = !0;
                        Laya.timer.frameOnce(2, this, function() {
                            t.bannnerAdListloop.init({
                                _cellWidth: 144,
                                _cellHeight: 144,
                                _spaceX: 23,
                                viewType: y.UI_VIEW_TYPE.GAMEOVER
                            }), t.bannnerAdListloop.start(s["default"].getAdData(1007), 1077, "结算页");
                        });
                    }, e.prototype.hideADPanel = function() {
                        this.bannerADPanel.visible = !1;
                    }, e;
            }(n["default"]);
        i["default"] = g;
    }, {
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Common/EventMgr": 7,
        "../Common/HttpMgr": 8,
        "../Common/PlatformMgr": 9,
        "../Common/ViewMgr": 14,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./AdListLoop": 48,
        "./BaseView": 49,
        "./ConvergeAd": 51,
        "./OverAdListLoop": 57,
        "./cionAni": 63
    }],
    54: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("../Datas/UserData"),
            o = t("../Util/MyUtils"),
            s = t("../Common/EventMgr"),
            r = t("../GameMgr3d/GameEvent"),
            l = t("../Common/HttpMgr"),
            h = t("../Datas/ConfigData"),
            c = t("./AdListLoop"),
            u = t("../Common/PlatformMgr"),
            d = t("../Common/StatisticsMgr"),
            f = t("../BuildPlatform/wx/WxAdManager"),
            p = t("../BuildPlatform/wx/WXAPI"),
            m = t("./ConvergeAd"),
            y = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.ballNumPrice = 9e3, e.trySkinPrice = 6e3, e.ballNum = 2, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this);
                    var e = this.owner.getChildByName("anchor"),
                        i = e.getChildByName("box1"),
                        n = e.getChildByName("box2");
                    this.box3 = e.getChildByName("box3"), this.unClick1 = i.getChildByName("unClick"),
                        this.unClick2 = n.getChildByName("unClick"), this.unClick3 = this.box3.getChildByName("unClick"),
                        this.invincibleBtn = i.getChildByName("btnBuy"), this.addBallNumBtn = n.getChildByName("btnBuy"),
                        this.buySkinBtn = this.box3.getChildByName("btnBuy"), this.buyAllBtn = e.getChildByName("btnAll"),
                        this.skipBtn = e.getChildByName("btnJump"), this.ballIco = this.box3.getChildByName("ico"),
                        this.disTrySkin = this.box3.getChildByName("dis"), this.ballNumLbl = n.getChildByName("dis"),
                        this.ballNumPricelbl = n.getChildByName("price");
                    var a = this.owner.getChildByName("coinBg");
                    this.coinNum = a.getChildByName("coinNum"), this.coinUnit = a.getChildByName("coinUnit");
                    var s = this.owner.getChildByName("ADPlane");
                    this.adPlane = this.owner.getChildByName("ADPlane").getComponent(c["default"]),
                        s.visible = !1, this.trySkinPriceLbl = this.box3.getChildByName("price"), this.updateCoinNum(),
                        e.y += this.offset.y / 3, o["default"].autoScreenSize([a]), a.y += 10;
                }, e.prototype.updateCoinNum = function() {
                    var t = o["default"].scoreConversion(a["default"].money);
                    this.coinNum.value = t.value, this.coinUnit.visible = null != t.isK;
                    var e = ["T", "B", "M", "K"],
                        i = 21 * t.value.length;
                    if (t.isK) {
                        this.coinUnit.value = e[t.isK];
                        i += 37;
                    }
                }, e.prototype.addEvent = function() {
                    this.invincibleBtn.on(Laya.Event.CLICK, this, this.invincibleClick),
                        this.addBallNumBtn.on(Laya.Event.CLICK, this, this.addBallNumClick),
                        this.buySkinBtn.on(Laya.Event.CLICK, this, this.buySkinClick), this.buyAllBtn.on(Laya.Event.CLICK, this, this.buyAllClick),
                        this.skipBtn.on(Laya.Event.CLICK, this, this.closeView), s["default"].instance.onEvent("UpdataMoney", this, this.updateCoinNum),
                        s["default"].instance.onEvent(f.AdEvent.event_showBannerAd_shiyongpifu_erro_103, this, this.showADPanel),
                        s["default"].instance.onEvent(r.GameEvent.ADBACK, this, this.showAd);
                }, e.prototype.removeEvent = function() {
                    this.invincibleBtn.off(Laya.Event.CLICK, this, this.invincibleClick), this.addBallNumBtn.off(Laya.Event.CLICK, this, this.addBallNumClick),
                        this.buySkinBtn.off(Laya.Event.CLICK, this, this.buySkinClick), this.buyAllBtn.off(Laya.Event.CLICK, this, this.buyAllClick),
                        this.skipBtn.off(Laya.Event.CLICK, this, this.closeView), s["default"].instance.onOffEvent("UpdataMoney", this, this.updateCoinNum),
                        s["default"].instance.onOffEvent(f.AdEvent.event_showBannerAd_shiyongpifu_erro_103, this, this.showADPanel),
                        s["default"].instance.onOffEvent(r.GameEvent.ADBACK, this, this.showAd);
                }, e.prototype.showAd = function() {
                    this.owner.visible && (f["default"].Instance.showBannerAd_zhujiemianlingqujinbi(0) ? this.hideADPanel() : this.showADPanel());
                }, e.prototype.showADPanel = function() {
                    var t = this;
                    this.owner.getChildByName("ADPlane").visible = !0, Laya.timer.frameOnce(2, this, function() {
                        t.adPlane.init({
                            _cellWidth: 144,
                            _cellHeight: 144,
                            _spaceX: 23,
                            viewType: m.UI_VIEW_TYPE.PROPES
                        }), t.adPlane.start(h["default"].getAdData(1008), 1008, "关卡道具页");
                    });
                }, e.prototype.hideADPanel = function() {
                    this.owner.getChildByName("ADPlane").visible = !1;
                }, e.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), this.owner.getChildByName("ADPlane").visible = !1;
                    var n = this.getNoHaveBallSkin(),
                        a = this.getNoHaveRoleSkin();
                    if (n.length < 1 && a.length < 1) this.box3.visible = !1;
                    else {
                        if (n.length >= 1 && a.length >= 1) {
                            var s = o["default"].random(0, 100);
                            50 >= s ? this.randomBallSkin(n) : this.randomRoleSkin(a);
                        } else n.length >= 1 && a.length < 1 ? this.randomBallSkin(n) : n.length < 1 && a.length >= 1 && this.randomRoleSkin(a);
                        this.box3.visible = !0;
                    }
                    if (this.ballNumLbl.text = "Amount of ball +" + this.ballNum, this.ballNumPricelbl.text = this.ballNumPrice.toString(),
                        this.trySkinPriceLbl.text = this.trySkinPrice.toString(), this.unClick1.visible = !1,
                        this.unClick2.visible = !1, this.unClick3.visible = !1, this.invincibleBtn.visible = !0,
                        this.addBallNumBtn.visible = !0, this.buySkinBtn.visible = !0, Laya.Tween.clearTween(this.buyAllBtn),
                        this.tweenAniDown(this.buyAllBtn, {
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, {
                            scaleX: .95,
                            scaleY: .95
                        }, 400), this.showAd(), h["default"].ctrlInfo.isWudian && 1 == h["default"].wudianLevel[0]) {
                        this.skipBtn.alpha = 0;
                        var r = 700;
                        h["default"].Btu_move[0] && (r = Number(h["default"].Btu_appear[0])), Laya.timer.once(r, this, function() {
                            Laya.Tween.to(i.skipBtn, {
                                alpha: 1
                            }, 300);
                        });
                        var l = 0,
                            c = l,
                            u = 595,
                            d = u;
                        h["default"].random_location && (c = o["default"].random(l - 30, l + 30), d = o["default"].random(u, u + 30)),
                            this.skipBtn.pos(c, d);
                        var f = 1900;
                        h["default"].Btu_move[0] && (f = Number(h["default"].Btu_move[0])), Laya.timer.once(f, this, function() {
                            Laya.Tween.to(i.skipBtn, {
                                y: 355
                            }, 300, Laya.Ease.backOut, null, 200);
                        });
                    } else {
                        var u = 355;
                        this.skipBtn.y = u;
                    }
                }, e.prototype.randomBallSkin = function(t) {
                    var e = o["default"].random(0, t.length - 1),
                        i = t[e];
                    this.currTrySkinId = i.config.Id;
                    var n = i.config.Name,
                        a = "SkinStore/ballSkin/" + this.currTrySkinId + ".png";
                    this.currTrySkinType = 2, this.ballIco.skin = a, this.ballIco.scaleX = .7, this.ballIco.scaleY = .7,
                        this.disTrySkin.text = "try:" + n;
                }, e.prototype.randomRoleSkin = function(t) {
                    var e = o["default"].random(0, t.length - 1),
                        i = t[e];
                    this.currTrySkinId = i.config.Id;
                    var n = i.config.Name,
                        a = Number(i.config.Id),
                        s = a >= 10 ? a : "0" + a,
                        r = "SkinStore/roleSkin/" + s + ".png";
                    this.ballIco.skin = r, this.ballIco.scaleX = .56, this.ballIco.scaleY = .56, this.currTrySkinType = 1,
                        this.disTrySkin.text = "Try：" + n;
                }, e.prototype.getNoHaveBallSkin = function() {
                    return a["default"].getUnLockSkinsByType(2);
                }, e.prototype.getNoHaveRoleSkin = function() {
                    return a["default"].getUnLockSkinsByType(1);
                }, e.prototype.invincibleClick = function() {
                    this.getInvincibleBall();
                }, e.prototype.addBallNumClick = function() {
                    if (a["default"].money < this.ballNumPrice) {
                        return void s["default"].instance.emit("openTip", "Coin is not enough");
                    }
                    var t = this;
                    a["default"].setMoney(a["default"].money - this.ballNumPrice);
                    t.addBallNumBtn.visible = !1,
                        t.unClick2.visible = !0,
                        t.addBallNum(),
                        t.updateCoinNum();

                }, e.prototype.buySkinClick = function() {
                    if (a["default"].money < this.trySkinPrice)
                        return void s["default"].instance.emit("openTip", "Coin is not enough");
                    var t = this;

                    console.log("m", a["default"].money);
                    console.log("trySkinPrice", this.trySkinPrice);

                    a["default"].setMoney(a["default"].money - this.trySkinPrice);
                    t.buySkinBtn.visible = !1
                    t.unClick3.visible = !0;
                    t.trySkin(),
                        t.updateCoinNum();
                }, e.prototype.buyAllClick = function() {
                    var t = this;
                    platform.getInstance().showReward(
                        () => {
                            s["default"].instance.emit(r.GameEvent.ADD_INVINCIBLE), t.invincibleBtn.visible = !1,
                                t.unClick1.visible = !0, t.addBallNum(), t.trySkin(), t.closeView();
                        },
                        () => {
                            // s["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end."), 
                            t._isClick = null;
                        }
                    );
                }, e.prototype.getInvincibleBall = function() {
                    var t = this;

                    platform.getInstance().showReward(
                        () => {
                            s["default"].instance.emit(r.GameEvent.ADD_INVINCIBLE),
                                t.invincibleBtn.visible = !1,
                                t.unClick1.visible = !0
                        },
                        () => {
                            // s["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end."), 
                            t._isClick = null;
                        }
                    );

                    // u["default"].ptAPI ? (p["default"].ald("获得无敌球--视频"), u["default"].callAPIMethodByProxy("showVideo", {
                    //     posID: 201,
                    //     _type: d.SHARE_VIDEO_TYPE.PROP,
                    //     caller: this,
                    //     callBackSuc: function() {
                    //         s["default"].instance.emit(r.GameEvent.ADD_INVINCIBLE), t.invincibleBtn.visible = !1, 
                    //         t.unClick1.visible = !0, p["default"].ald("获得无敌球成功--视频");
                    //     },
                    //     callBackFail: function() {
                    //         s["default"].instance.emit("openTip", "看完视频才能获得奖励"), t._isClick = null;
                    //     },
                    //     callBackErro: function() {
                    //         s["default"].instance.emit("openTip", "今日视频次数已用完"), t._isClick = null;
                    //     }
                    // })) : s["default"].instance.emit(r.GameEvent.ADD_INVINCIBLE);
                }, e.prototype.addBallNum = function() {
                    s["default"].instance.emit(r.GameEvent.ADD_BALLNUM, this.ballNum);
                }, e.prototype.trySkin = function() {
                    s["default"].instance.emit(r.GameEvent.TRY_SKIN, {
                        skiId: this.currTrySkinId,
                        type: this.currTrySkinType
                    });
                }, e.prototype.onDisable = function() {
                    t.prototype.onDisable.call(this), u["default"].callAPIMethodByProxy("destoryAllBannerAd");
                }, e.prototype.closeView = function(e) {
                    t.prototype.closeView.call(this, e), s["default"].instance.emit("openFighting");
                }, e;
            }(n["default"]);
        i["default"] = y;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Common/EventMgr": 7,
        "../Common/HttpMgr": 8,
        "../Common/PlatformMgr": 9,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./AdListLoop": 48,
        "./BaseView": 49,
        "./ConvergeAd": 51
    }],
    55: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("../Common/PlatformMgr"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.clickCount = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    var t = this;
                    this.clickCount = 0, this.progressNum = 0, Laya.timer.frameLoop(25, this, function() {
                        null != t && void 0 != t && (t.progressNum -= .06, t.updataProgress());
                    });
                    var e = this.owner.getChildByName("anchor");
                    e.y = e.y + this.offset.y, this.okBtn = e.getChildByName("btnClick"), this.closeBtn = this.owner.getChildByName("closeBtn"),
                        this.bar = this.owner.getChildByName("bar"), this.hammerAnim = this.owner.hammerAnim;
                }, e.prototype.addEvent = function() {
                    this.okBtn.on(Laya.Event.CLICK, this, this.btnClick), this.closeBtn.on(Laya.Event.CLICK, this, this.closeView),
                        t.prototype.addEvent.call(this);
                }, e.prototype.removeEvent = function() {
                    this.okBtn.off(Laya.Event.CLICK, this, this.btnClick), this.closeBtn.off(Laya.Event.CLICK, this, this.closeView),
                        t.prototype.removeEvent.call(this);
                }, e.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e), a["default"].callAPIMethodByProxy("loadBannerAdHome");
                }, e.prototype.btnClick = function() {
                    return this.clickCount++, this.clickCount > 14 ? void this.close() : (this.progressNum += .1,
                        this.progressNum >= 1 ? void this.close() : (this.hammerAnim.play(0, !1), void this.updataProgress()));
                }, e.prototype.updataProgress = function() {
                    this.progressNum >= 1 ? this.progressNum = 1 : this.progressNum <= .07 && (this.progressNum = .07),
                        this.bar.height = 375 * this.progressNum;
                }, e.prototype.close = function() {
                    t.prototype.closeView.call(this);
                }, e;
            }(n["default"]);
        i["default"] = o;
    }, {
        "../Common/PlatformMgr": 9,
        "./BaseView": 49
    }],
    56: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("./AdListLoop"),
            o = t("../Util/MyUtils"),
            s = t("../Datas/ConfigData"),
            r = t("../Common/PlatformMgr"),
            l = t("../Common/SoundMgr"),
            h = t("../Common/EventMgr"),
            c = t("../Datas/UserData"),
            u = t("../Common/StatisticsMgr"),
            d = t("../Common/HttpMgr"),
            f = t("./cionAni"),
            p = t("../BuildPlatform/wx/WxAdManager"),
            m = t("../BuildPlatform/wx/WXAPI"),
            y = t("./PromotionAnimation"),
            g = t("./ConvergeAd"),
            _ = t("../GameMgr3d/GameEvent"),
            v = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.isLoadAD = !1, e.goShareAdc = !1, e.inviteHintY = -39, e.goalHintY = -52,
                        e.drawPie = [], e.maskTargetRot = -90, e.DIX = 0, e.DIXMAX = 6, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.btnsetting = this.owner.getChildByName("btnSet"),
                        this.settingS = this.owner.getChildByName("settingS"), this.settingPop = this.settingS.getChildByName("list"),
                        this.btnSound = this.settingPop.getChildByName("btnSound"), this.soundOpen = this.btnSound.getChildByName("open"),
                        this.soundClose = this.btnSound.getChildByName("close"),
                        this.aladingBtn = this.owner.getChildByName("aladingBtn");
                    var e = this.owner.getChildByName("coinBg");
                    this.coinNum = e.getChildByName("coinNum"), this.coinUnit = e.getChildByName("coinUnit"),
                        this.adPlane = this.owner.getChildByName("ADPlane").getComponent(a["default"]),
                        this.soundClose.visible = !s["default"].isSound, this.soundOpen.visible = s["default"].isSound,
                        this.doubleCoin = this.owner.getChildByName("btnDoubleStart"),
                        this.img_startHit = this.doubleCoin.getChildByName("hit"),
                        this.btnSkin = this.owner.getChildByName("btnSkin"), this.adImageLeft = this.owner.getChildByName("AD1"),
                        this.adImageRight = this.owner.getChildByName("AD2"), this.title = this.owner.getChildByName("title"),
                        this.btnStart = this.owner.getChildByName("btnStart");
                    var i = this.owner.getChildByName("startImg");
                    this.btnSkin.y += this.offset.y / 3 * 2, i.y += this.offset.y / 3 * 2, this.doubleCoin.y += this.offset.y / 3 * 2,
                        this.adImageLeft.y += this.offset.y / 3 * 2,
                        this.adImageRight.y += this.offset.y / 3 * 2, this.title.y += this.offset.y / 4,
                        this.btnsetting.y += this.offset.y / 4, this.settingS.pos(this.btnsetting.x, this.btnsetting.y),
                        this.InitSetting(), this.offlineGoldInit(), o["default"].autoScreenSize([e]),
                        e.y += 10, this.isLoadAD = !1, this.goShareAdc = !1, this.updateCoinNum(),
                        Laya.Tween.clearTween(this.doubleCoin), this.tweenAniDown(this.doubleCoin, {
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, {
                            scaleX: .95,
                            scaleY: .95
                        }, 400);
                    var n = this;
                    Laya.timer.frameOnce(20, this, function() {
                        var t = this;
                        new Promise(function(e, i) {
                            r["default"].callAPIMethodByProxy("createAuthorizationButton", {
                                x: n.btnStart.x,
                                y: n.btnStart.y - t.offset.y,
                                width: n.btnStart.width,
                                isFull: !0,
                                height: n.btnStart.height,
                                successBack: n[n.btnStart.name + "Func"],
                                failBack: n[n.btnStart.name + "Func"]
                            }), e(e);
                        }).then(function() {});
                    });

                    this.yad = this.owner.getChildByName("yad");
                    this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                        platform.getInstance().navigate("MAIN", "LOGO");
                    })
                }, e.prototype.InitSetting = function() {
                    Laya.Tween.clearTween(this.settingPop), this.settingPop.y = -160, this.popSetting = !1;
                }, e.prototype.onClickSetting = function() {
                    this.popSetting ? Laya.Tween.to(this.settingPop, {
                        y: -160
                    }, 200 * (this.settingPop.y + 160) / 230) : Laya.Tween.to(this.settingPop, {
                        y: 70
                    }, 200 * (70 - this.settingPop.y) / 230), this.popSetting = !this.popSetting;
                }, e.prototype.offlineGoldInit = function() {
                    this.offlineGoldLoop(), Laya.timer.clear(this, this.offlineGoldLoop), Laya.timer.loop(1e3 * s["default"].ctrlInfo.onlineItemSecond, this, this.offlineGoldLoop),
                        Laya.timer.clear(this, this.goldImgMaskUpdate), Laya.timer.frameLoop(5, this, this.goldImgMaskUpdate);
                }, e.prototype.onDisable = function() {
                    t.prototype.onDisable.call(this), r["default"].callAPIMethodByProxy("destoryAllBannerAd");
                }, e.prototype.goldImgMaskUpdate = function() {}, e.prototype.offlineGoldLoop = function() {
                    var t = this.getOffLineGold();
                }, e.prototype.getOffLineGold = function() {
                    var t = new Date().getTime(),
                        e = 60 * s["default"].ctrlInfo.onlineTimes - c["default"].offlineTimeSpent - (t - s["default"].ctrlInfo.startOfflineTime) / 1e3,
                        i = 0;
                    return e > 0 ? (this.maskTargetRot = -90, Laya.Tween.to(this, {
                            maskTargetRot: 270
                        }, 1e3 * s["default"].ctrlInfo.onlineItemSecond - 100), i = Math.floor((c["default"].offlineTimeSpent + (t - s["default"].ctrlInfo.startOfflineTime) / 1e3) / s["default"].ctrlInfo.onlineItemSecond) * s["default"].ctrlInfo.onlineItemGold) : i = Math.floor(60 * s["default"].ctrlInfo.onlineTimes / s["default"].ctrlInfo.onlineItemSecond) * s["default"].ctrlInfo.onlineItemGold,
                        i;
                }, e.prototype.jumpOtherGame = function() {
                    if (s["default"].ctrlInfo.wOpen <= 0) return !1;
                    if (Laya.Browser.onMiniGame) {
                        var t = 1008,
                            e = s["default"].getAdData(t);
                        if (e && e.length > 0) {
                            var i = e.length - 1,
                                n = o["default"].random(0, i),
                                a = e[n].toLinks,
                                l = e[n].appid;
                            if (l) {
                                var h = {
                                    my_uuid: t,
                                    to_appid: l,
                                    appid: l,
                                    toLinks: a
                                };
                                return console.log("开始跳转"), m["default"].ald("首页两侧广告位跳出", {
                                    path: a,
                                    appId: l,
                                    position: t
                                }), h.callback = function() {
                                    m["default"].ald("首页两侧广告位跳出成功", {
                                        path: a,
                                        appId: l,
                                        position: t
                                    });
                                }, s["default"].mainViewJumpToOtherGame = !0, r["default"].callAPIMethodByProxy("navigateToMiniProgram", h), !0;
                            }
                        }
                    }
                    return !1;
                }, e.prototype.openView = function(e) {
                    var i = this;
                    if (t.prototype.openView.call(this, e), console.log("重新打开主页0"), 0 == s["default"].ctrlInfo.inviteFriendsControl || c["default"].shareCount >= 8) this.inviteLabel.text = "一起玩",
                        this.inviteCoinImg.visible = !1, this.inviteLabel.x = 23;
                    else {
                        // var n = s["default"].ctrlInfo.inviteFriendsGolds || 0;
                    }
                    console.log("重新打开主页1"), this.showAd(), Laya.timer.frameOnce(1, this, function() {
                        var t = !0;
                        if (c["default"].isFristOpenHome) {
                            if (c["default"].isFristOpenHome = !1, !c["default"].isNew) {
                                var e = i.getOffLineGold() || 0;
                                if (console.log("离线奖励:", e), e > 0) return r["default"].callAPIMethodByProxy("destoryAllBannerAd"),
                                    h["default"].instance.emit("openSettleCoin", {
                                        isFree: !0,
                                        freeCoin: e,
                                        isAutoOpen: !0
                                    }), void(t = !1);
                            }
                        } else;
                        console.log("重新打开主页4");
                        var n = i.adImageLeft.getComponent(y["default"]);
                        n.init(g.UI_VIEW_TYPE.HOME), n.start(!0, !0, 1001), console.log("重新打开主页5");
                        var a = i.adImageRight.getComponent(y["default"]);
                        a.init(g.UI_VIEW_TYPE.HOME), a.start(!0, !0, 1002), console.log("重新打开主页6");
                    }), e && 1 == e.isJumpOtherGame && this.jumpOtherGame();
                }, e.prototype.hideADPanel = function() {
                    this.owner.getChildByName("ADPlane").visible = !1;
                }, e.prototype.showADPanel = function() {
                    var t = this;
                    this.owner.getChildByName("ADPlane").visible = !0, Laya.timer.frameOnce(10, this, function() {
                        t.adPlane.init({
                            _cellWidth: 144,
                            _cellHeight: 144,
                            _spaceX: 23,
                            viewType: g.UI_VIEW_TYPE.HOME
                        }), t.adPlane.start(s["default"].getAdData(1008), 1008, "首页");
                    });
                }, e.prototype.addEvent = function() {
                    console.log("addEvent"), t.prototype.addEvent.call(this), this.btnSound.on(Laya.Event.CLICK, this, this.soundBtnClick),
                        this.btnStart.on(Laya.Event.CLICK, this, this.btnStartFunc),
                        this.btnSkin.on(Laya.Event.CLICK, this, this.btnSkinFunc),
                        this.doubleCoin.on(Laya.Event.CLICK, this, this.btnDoubleStartFunc),
                        this.btnsetting.on(Laya.Event.CLICK, this, this.onClickSetting), this.aladingBtn.on(Laya.Event.CLICK, this, this.testTiaozhuang),
                        h["default"].instance.onEvent(p.AdEvent.event_showBannerAd_zhujiemian_erro_101, this, this.showADPanel),
                        h["default"].instance.onEvent(_.GameEvent.ADBACK, this, this.showAd), h["default"].instance.onEvent("UpdataMoney", this, this.updateCoinNum);
                }, e.prototype.showAd = function() {
                    this.owner.visible && (p["default"].Instance.showBannerAd_zhujiemian() ? (this.hideADPanel(),
                        console.log("重新打开主页3")) : (this.showADPanel(), console.log("重新打开主页2")));
                }, e.prototype.updateCoinNum = function() {
                    var t = o["default"].scoreConversion(c["default"].money);
                    this.coinNum.value = t.value, this.coinUnit.visible = null != t.isK;
                    var e = ["T", "B", "M", "K"],
                        i = 21 * t.value.length;
                    if (t.isK) {
                        this.coinUnit.value = e[t.isK];
                        i += 37;
                    }
                }, e.prototype.btnDoubleStartFunc = function() {
                    var t = this;
                    this._isClick || (r["default"].callAPIMethodByProxy("destoryAuthorization"), this._isClick = !0,
                        Laya.timer.once(500, this, function() {
                            t._isClick = null;
                        }),

                        this.isLoadAD = !0,
                        this.goShareAdc = !0,
                        platform.getInstance().showReward(() => {
                                t.isLoadAD = !1,
                                    t.goShareAdc = !1,
                                    c["default"].adCount += 1,
                                    c["default"].multipy = 2,
                                    t.btnStartFunc(),
                                    h["default"].instance.emit("openTip", "BENIFIT x 2"),
                                    h["default"].instance.emit("openSkinTrial"),
                                    h["default"].instance.emit("gameStart");
                            },
                            () => {
                                // h["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end."), 
                                t.isLoadAD = !1, t.goShareAdc = !1,
                                    t._isClick = null;
                            })


                    );
                }, e.prototype.btnFreeFunc = function() {}, e.prototype.btnSkinFunc = function() {
                    var t = this;
                    if (!this._isClick) return this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null;
                        }),
                        void h["default"].instance.emit("openSkinStore");
                }, e.prototype.virbortBtnClick = function() {
                    s["default"].isVirbort = !s["default"].isVirbort, this.virbortClose.visible = !s["default"].isVirbort,
                        this.virbortOpen.visible = s["default"].isVirbort, s["default"].setVirbort(s["default"].isVirbort ? "" : "1");
                }, e.prototype.soundBtnClick = function() {
                    s["default"].isSound = !s["default"].isSound, this.soundClose.visible = !s["default"].isSound,
                        this.soundOpen.visible = s["default"].isSound, s["default"].isSound ? (s["default"].setSound(""),
                            l["default"].instance.playBGM()) : (s["default"].setSound("1"), l["default"].instance.stopBGM());
                }, e.prototype.btnInviteFunc = function() {
                    var t = this;
                    if (!this._isClick) {
                        this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null;
                        });
                        var e = {
                            caller: this,
                            callback: function(e) {
                                e.success ? d["default"].instance.shareCallback({
                                    success: function(e) {
                                        if (c["default"].shareCount = e.shareCount, c["default"].money = e.userMoney, 0 == s["default"].ctrlInfo.inviteFriendsControl || c["default"].shareCount >= 8) t.inviteLabel.text = "一起玩",
                                            t.inviteCoinImg.visible = !1, t.inviteLabel.x = 23;
                                        else {
                                            var i = s["default"].ctrlInfo.inviteFriendsGolds || 0;
                                            t.inviteLabel.text = i, t.inviteCoinImg.visible = !0, t.inviteLabel.x = 33, t.OVERhuoquAIn();
                                        }
                                        h["default"].instance.emit("UpdataMoney");
                                    }
                                }) : h["default"].instance.emit("openTip", "分享失败");
                            },
                            type: 1
                        };
                        r["default"].callAPIMethodByProxy("shareAppMessage", e);
                    }
                }, e.prototype.OVERhuoquAIn = function() {
                    this.DIX = 0, Laya.timer.clear(this, this.goldFlyAniLoop), Laya.timer.loop(50, this, this.goldFlyAniLoop);
                }, e.prototype.goldFlyAniLoop = function() {
                    this.DIX <= this.DIXMAX ? (this.DIX = this.DIX + 1, this.DIX > this.DIXMAX ? this.qudonghua(!0) : this.qudonghua(!1)) : Laya.timer.clear(this, this.goldFlyAniLoop);
                }, e.prototype.qudonghua = function(t) {
                    var e = Laya.Pool.getItem("CONINAIN"),
                        i = {
                            x: this.btnInvite.x,
                            y: this.btnInvite.y
                        },
                        n = {
                            x: this.coinNum.x,
                            y: this.coinNum.y
                        };
                    if (null == e) {
                        var a = void 0;
                        a = new f.cionAni(), this.owner.addChild(a), a.OVERhuoquAIn(t, i, n);
                    } else {
                        var a = void 0;
                        a = e, this.owner.addChild(a), a.OVERhuoquAIn(t, i, n);
                    }
                }, e.prototype.btnServiceFunc = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null;
                    }), r["default"].callAPIMethodByProxy("openCustomerServiceConversation"));
                }, e.prototype.btnRankFunc = function() {}, e.prototype.btnStartFunc = function() {
                    var t = this;

                    platform.getInstance().showInterstitial(() => {

                        this._isClick || (
                            r["default"].callAPIMethodByProxy("destoryAuthorization"),
                            r["default"].callAPIMethodByProxy("destoryAllBannerAd"),
                            this._isClick = !0,
                            Laya.timer.once(500, this, function() {
                                t._isClick = null;
                            }),
                            h["default"].instance.emit("gameStart"),
                            h["default"].instance.emit("openGetPropes"));


                    });


                }, e.prototype.serverFunc = function() {
                    Laya.Browser.onMiniGame && window.wx.openCustomerServiceConversation();
                }, e.prototype.removeEvent = function() {
                    console.log("removeEvent"), this.btnSound.off(Laya.Event.CLICK, this, this.soundBtnClick),
                        this.btnSkin.off(Laya.Event.CLICK, this, this.btnSkinFunc),
                        this.btnStart.off(Laya.Event.CLICK, this, this.btnStartFunc),
                        this.btnsetting.off(Laya.Event.CLICK, this, this.onClickSetting),
                        this.doubleCoin.off(Laya.Event.CLICK, this, this.btnDoubleStartFunc), this.aladingBtn.off(Laya.Event.CLICK, this, this.testTiaozhuang),
                        h["default"].instance.onOffEvent(p.AdEvent.event_showBannerAd_zhujiemian_erro_101, this, this.showADPanel),
                        h["default"].instance.onOffEvent(_.GameEvent.ADBACK, this, this.showAd), h["default"].instance.onOffEvent("UpdataMoney", this, this.updateCoinNum),
                        r["default"].callAPIMethodByProxy("destoryAllBannerAd"), t.prototype.removeEvent.call(this);
                }, e.prototype.testTiaozhuang = function() {
                    console.log("testTiaozhuang");
                    var t = {
                        my_uuid: "1000",
                        to_appid: "wx70815194bf8e20f4",
                        appid: s["default"].myAppid,
                        toLinks: "page/index/index?channel=2258&ald_media_id=24008&ald_link_key=426a94229e180d91&ald_position_id=0"
                    };
                    r["default"].callAPIMethodByProxy("navigateToMiniProgramTest", t);
                }, e;
            }(n["default"]);
        i["default"] = v;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Common/EventMgr": 7,
        "../Common/HttpMgr": 8,
        "../Common/PlatformMgr": 9,
        "../Common/SoundMgr": 10,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./AdListLoop": 48,
        "./BaseView": 49,
        "./ConvergeAd": 51,
        "./PromotionAnimation": 58,
        "./cionAni": 63
    }],
    57: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("../Common/PlatformMgr"),
            o = t("../BuildPlatform/wx/WXAPI");
        ! function(t) {
            t[t.UP = 0] = "UP", t[t.DOWN = 1] = "DOWN";
        }(n || (n = {}));
        var s = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.moveSpeed = .5, e._itemHeight = 134, e._itemWidth = 184, e._spaceX = 14,
                    e._spaceY = 14, e._repeatX = 3, e._repeatY = 3, e.speedTime = 500, e.viewHeight = 503,
                    e;
            }
            return __extends(e, t),
                e.prototype.start = function(t, e, i) {
                    if (t) {
                        this.viewType = i,
                            this.owner.removeChildren(),
                            this._cells = [],
                            this.adInfos = t;
                        for (var a = 0, o = new r(), s = this, l = function() {
                                var t = s.adInfos[c],
                                    i = new Laya.Image();
                                h.owner.addChild(i);
                                var n = h._cells.length * (h._itemHeight + h._spaceY);
                                i.pos(a * (h._itemWidth + h._spaceX), n), i.skin = t.thumb, i.width = h._itemWidth,
                                    i.height = h._itemHeight,
                                    i.offAll(Laya.Event.MOUSE_DOWN);
                                i.on(Laya.Event.MOUSE_DOWN, h, function() {
                                        s.startTime = Laya.timer.currTimer;
                                        platform.getInstance().navigate("GAME", "MORE", t.id);
                                    }),
                                    i.name = c.toString(),
                                    i.on(Laya.Event.MOUSE_UP, h, function() {
                                        var t = Number(i.name),
                                            n = s.adInfos[t];
                                        Laya.timer.currTimer - s.startTime <= 200 && s.tiaozhuang(n, e), s.startTime = Laya.timer.currTimer;
                                    }), a++, o._posY = n, o._cells.push(i), a > 2 && (h._cells.push(o), a = 0, o = new r());
                            }, h = this, c = 0; c < s.adInfos.length; c++) l();
                        0 != a && this._cells.push(o), this.fristPosY = 0, this.endPosY = this.viewHeight - this._itemHeight,
                            this.setDirtion(n.DOWN), this._mouseDown = !1, 0 != this._cells.length && (this.autoMove(),
                                this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown),
                                this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                                this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp),
                                this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp),
                                this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp));
                    }
                }, e.prototype.autoMove = function() {
                    var t = this;
                    Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                        t.move();
                    });
                }, e.prototype.move = function() {
                    for (var t = -(this._cells[0].getPosY() - this.fristPosY), e = (Math.abs(this.speedTime / (this._itemHeight + this._spaceY) * t),
                            0); e < this._cells.length; e++) {
                        var i = this._cells[e];
                        i.setPosY(i.getPosY() + this.moveSpeed);
                    }
                    this.moveDirection == n.DOWN && this._cells[0].getPosY() > this.fristPosY && this.setDirtion(n.UP),
                        this.moveDirection == n.UP && this._cells[this._cells.length - 1].getPosY() < this.endPosY && this.setDirtion(n.DOWN);
                }, e.prototype.setDirtion = function(t) {
                    this.moveDirection = t, this.moveDirection == n.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
                }, e.prototype.tiaozhuang = function(t, e) {}, e.prototype.mouseDown = function() {
                    Laya.timer.clearAll(this), this._mouseDown = !0, this._mouseY = Laya.MouseManager.instance.mouseX;
                }, e.prototype.mouseMove = function() {
                    if (this._mouseDown) {
                        var t = Laya.MouseManager.instance.mouseY - this._mouseY;
                        t = t > 30 ? 30 : -30 > t ? -30 : t, this._mouseY = Laya.MouseManager.instance.mouseY,
                            t > 0 && this._cells[0].getPosY() + t > this.fristPosY && (t = this.fristPosY - this._cells[0].getPosY()),
                            0 > t && this._cells[this._cells.length - 1].getPosY() + t < this.endPosY && (t = this.endPosY - this._cells[this._cells.length - 1].getPosY());
                        for (var e = 0; e < this._cells.length; e++) {
                            var i = this._cells[e];
                            i.setPosY(i.getPosY() + t);
                        }
                    }
                }, e.prototype.mouseUp = function(t) {
                    this._mouseDown = !1, this._mouseY = 0, this.autoMove();
                }, e;
        }(Laya.Script);
        i["default"] = s;
        var r = function() {
            function t() {
                this._cells = [], this._posY = 0;
            }
            return t.prototype.setPosY = function(t) {
                for (var e = 0; e < this._cells.length; e++) {
                    var i = this._cells[e],
                        n = i.x;
                    i.pos(n, t);
                }
                this._posY = t;
            }, t.prototype.getPosY = function() {
                return this._posY;
            }, t;
        }();
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/PlatformMgr": 9
    }],
    58: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Datas/ConfigData"),
            a = t("../Common/PlatformMgr"),
            o = t("../BuildPlatform/wx/WXAPI"),
            s = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.isClick = !1, e.toLinks = "", e.toAppId = "", e.thePosition = 1, e.nowidx = 0,
                        e.maxdix = 0, e.isAnim = !0, e.isChange = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.owner.on(Laya.Event.CLICK, this, this.jumpOtherGame);
                }, e.prototype.init = function(t) {
                    this.viewType = t;
                }, e.prototype.start = function(t, e, i) {
                    Laya.Tween.clearAll(this);
                    var a = n["default"].getAdData(i);
                    return !a || a.length <= 0 ? void(this.owner.visible = !1) : (this.owner.rotation = 0,
                        this.owner.scale(1, 1), this.isAnim = t, this.isChange = e, this.thePosition = i,
                        this.nowidx = 0, this.maxdix = a.length - 1, this.randomAD(), this.isAnim && this.adAnim(),
                        Laya.timer.clearAll(this), void this.startAnim());
                }, e.prototype.startAnim = function() {
                    var t = this,
                        e = n["default"].getAdData(this.thePosition);
                    Laya.timer.loop(1e4, this, function() {
                        null != e ? e.length > 1 && t.isChange ? t.changeAD() : t.randomAD() : t.isChange ? t.changeAD() : t.randomAD();
                    });
                }, e.prototype.randomAD = function() {
                    var t = n["default"].getAdData(this.thePosition);
                    if (t) {
                        t.length;
                        this.owner.skin = t[this.nowidx].param, this.toAppId = t[this.nowidx].appid, this.toLinks = t[this.nowidx].toLinks,
                            this.nowidx = this.nowidx + 1, this.nowidx > this.maxdix && (this.nowidx = 0);
                    }
                }, e.prototype.changeAD = function() {
                    var t = this,
                        e = this.owner;
                    e.scale(1, 1), Laya.Tween.to(e, {
                        scaleX: 0,
                        scaleY: 0
                    }, 300, null, Laya.Handler.create(this, function() {
                        t.randomAD(), Laya.Tween.to(e, {
                            scaleX: 0,
                            scaleY: 0
                        }, 100, null, Laya.Handler.create(t, function() {
                            Laya.Tween.to(e, {
                                scaleX: 1,
                                scaleY: 1
                            }, 300, null, Laya.Handler.create(t, function() {}));
                        }));
                    }));
                }, e.prototype.adAnim = function() {
                    var t = this,
                        e = this.owner;
                    e.rotation = 0, Laya.Tween.to(e, {
                        rotation: 10
                    }, 300, null, Laya.Handler.create(this, function() {
                        Laya.Tween.to(e, {
                            rotation: 0
                        }, 300, null, Laya.Handler.create(t, function() {
                            Laya.Tween.to(e, {
                                rotation: -10
                            }, 300, null, Laya.Handler.create(t, function() {
                                Laya.Tween.to(e, {
                                    rotation: 0
                                }, 300, null, Laya.Handler.create(t, function() {
                                    t.adAnim();
                                }));
                            }));
                        }));
                    }));
                }, e.prototype.jumpOtherGame = function() {
                    var t = this;
                    if (Laya.Browser.onMiniGame) {
                        var e = this.toAppId;
                        if (e) {
                            var i = {
                                my_uuid: this.thePosition,
                                to_appid: e,
                                appid: this.toAppId,
                                toLinks: this.toLinks,
                                viewType: this.viewType
                            };
                            console.log("开始跳转"), o["default"].ald("首页广告位跳出", {
                                    path: this.toLinks,
                                    appId: this.toAppId,
                                    position: this.thePosition
                                }), i.callback = function() {
                                    o["default"].ald("首页广告位跳出成功", {
                                        path: t.toLinks,
                                        appId: t.toAppId,
                                        position: t.thePosition
                                    });
                                }, console.log("跳转 _d:", i), a["default"].callAPIMethodByProxy("navigateToMiniProgram", i),
                                Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(), this.changeAD();
                        }
                    } else Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(),
                        this.changeAD();
                }, e;
            }(Laya.Script);
        i["default"] = s;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/PlatformMgr": 9,
        "../Datas/ConfigData": 15
    }],
    59: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("./AdListLoop"),
            o = t("../Util/MyUtils"),
            s = t("../Datas/ConfigData"),
            r = t("../GameMgr3d/GameEvent"),
            l = t("../Common/PlatformMgr"),
            h = t("../Common/EventMgr"),
            c = t("../Common/StatisticsMgr"),
            u = t("../BuildPlatform/wx/WXAPI"),
            d = t("../BuildPlatform/wx/WxAdManager"),
            f = t("../Common/SoundMgr"),
            p = t("./ConvergeAd"),
            m = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.downTime = 7, e.startAngle = -90, e.isLoadAD = !1, e.goShareAdc = !1, e.startCountDown = !1,
                        e.endAngle = -90, e.useTime = 0, e.stateTime = 1e4, e.seconds = 10, e.lastT = 0,
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.btnAnchor = this.owner.getChildByName("btnAnchor"),
                        this.btnShare = this.btnAnchor.getChildByName("shareBtn"), this.btnVideo = this.btnAnchor.getChildByName("videoBtn"),
                        this.btnJump = this.btnAnchor.getChildByName("skipBtn"), this.progressBg = this.owner.getChildByName("progressBg"),
                        this.progressMask = this.progressBg.getChildByName("progressBg").mask, this.reviveCount = this.progressBg.getChildByName("reviveCount"),
                        this.ADPlaneBG = this.owner.getChildByName("ADPlaneBG"), this.adListloop = this.ADPlaneBG.getChildByName("ADPlane").getComponent(a["default"]),
                        this.bannerADPanel = this.owner.getChildByName("bannerADPanel"), this.bannnerAdListloop = this.bannerADPanel.getComponent(a["default"]),
                        this.bannerADPanel.visible = !1, this.progressBg.y += this.offset.y, this.ADPlaneBG.y += this.offset.y / 2,
                        this.isLoadAD = !1, this.startCountDown = !1;
                }, e.prototype.addEvent = function() {
                    this.btnShare.on(Laya.Event.CLICK, this, this.shareClick), this.btnVideo.on(Laya.Event.CLICK, this, this.videoClick),
                        this.btnJump.on(Laya.Event.CLICK, this, this.jumpClick), h["default"].instance.onEvent(r.GameEvent.ADBACK, this, this.showAd),
                        h["default"].instance.onEvent(d.AdEvent.event_showBannerAd_fuhuo_erro_104, this, this.showADPanel),
                        h["default"].instance.onEvent(r.GameEvent.ADJUMP, this, this.stopDownTime), h["default"].instance.onEvent(r.GameEvent.ADBACK, this, this.continueDownTime),
                        t.prototype.addEvent.call(this);
                }, e.prototype.removeEvent = function() {
                    this.btnShare.off(Laya.Event.CLICK, this, this.shareClick), this.btnVideo.off(Laya.Event.CLICK, this, this.videoClick),
                        this.btnJump.off(Laya.Event.CLICK, this, this.jumpClick), h["default"].instance.onOffEvent(r.GameEvent.ADBACK, this, this.showAd),
                        h["default"].instance.onOffEvent(r.GameEvent.ADJUMP, this, this.stopDownTime), h["default"].instance.onOffEvent(d.AdEvent.event_showBannerAd_fuhuo_erro_104, this, this.showADPanel),
                        h["default"].instance.onOffEvent(r.GameEvent.ADBACK, this, this.continueDownTime),
                        t.prototype.removeEvent.call(this);
                }, e.prototype.showAd = function() {
                    this.owner.visible && (d["default"].Instance.showBannerAd_zhujiemianlingqujinbi(1) ? this.hideADPanel() : this.showADPanel());
                }, e.prototype.stopDownTime = function() {
                    this.goShareAdc = !0;
                }, e.prototype.continueDownTime = function() {
                    this.goShareAdc = !1;
                }, e.prototype.countDown = function() {
                    if (!this.goShareAdc) {
                        var t = parseInt(this.reviveCount.text),
                            e = t - 1;
                        1 > e ? (this.reviveCount.text = e.toString(), this.progressMask.graphics.drawPie(149, 149, 149, 250, this.endAngle, "#ff0000"),
                            f["default"].instance.playSound("djs"), this.openOver()) : (this.reviveCount.text = e.toString(),
                            this.endAngle += 360 / this.downTime, this.progressMask.graphics.drawPie(149, 149, 149, -90, this.endAngle, "#ff0000"),
                            f["default"].instance.playSound("djs"));
                    }
                }, e.prototype.openView = function(e) {
                    var i = this,
                        n = e.noRefresh;
                    if (n) return void(this.goShareAdc = !1);
                    if (t.prototype.openView.call(this, e), this.seconds = 10, this.startAngle = -90,
                        this.endAngle = -90, this.progressMask.graphics.drawPie(149, 149, 149, -90, this.endAngle, "#ff0000"),
                        this.bannerADPanel.visible = !1, this.adListloop.init({
                            _cellWidth: 144,
                            _cellHeight: 144,
                            viewType: p.UI_VIEW_TYPE.RESTRGENCE
                        }), this.adListloop.start(s["default"].getAdData(1006), 1006, "复活页"), Laya.Tween.clearTween(this.btnVideo),
                        this.tweenAniDown(this.btnVideo, {
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, {
                            scaleX: .95,
                            scaleY: .95
                        }, 400), Laya.timer.clearAll(this), this.reviveCount.text = this.downTime.toString(),
                        Laya.timer.loop(1e3, this, this.countDown), this.btnVideo.visible = !1, this.btnShare.visible = !1,
                        this.ADPlaneBG.visible = !1, 1 == s["default"].ctrlInfo.marqueeBntSwitch && 1 != s["default"].ctrlInfo.shareBntSwitch && 1 != s["default"].ctrlInfo.videoBntSwitch ? (this.ADPlaneBG.visible = !0,
                            this.progressBg.y = 339 + this.offset.y / 2, this.btnVideo.y = 240) : 1 == s["default"].ctrlInfo.marqueeBntSwitch && 1 == s["default"].ctrlInfo.videoBntSwitch ? (this.ADPlaneBG.visible = !0,
                            this.btnVideo.visible = !0, this.btnVideo.y = 240, this.progressBg.y = 339 + this.offset.y / 2) : 1 == s["default"].ctrlInfo.marqueeBntSwitch && 1 == s["default"].ctrlInfo.shareBntSwitch ? (this.ADPlaneBG.visible = !0,
                            this.btnShare.visible = !0, this.btnShare.y = 237, this.progressBg.y = 339 + this.offset.y / 2) : 1 != s["default"].ctrlInfo.marqueeBntSwitch && 1 == s["default"].ctrlInfo.shareBntSwitch && 1 == s["default"].ctrlInfo.videoBntSwitch ? (this.progressBg.y = 438 + this.offset.y / 2,
                            this.openGoingSurpassOther(s.SORTTYPE.ENDLESS), this.btnShare.visible = !0, this.btnVideo.visible = !0,
                            this.btnVideo.y = 240, this.btnShare.y = 77) : 1 != s["default"].ctrlInfo.marqueeBntSwitch && 1 != s["default"].ctrlInfo.shareBntSwitch && 1 == s["default"].ctrlInfo.videoBntSwitch ? (this.progressBg.y = 438 + this.offset.y / 2,
                            this.openGoingSurpassOther(s.SORTTYPE.ENDLESS), this.btnVideo.visible = !0, this.btnVideo.y = 240) : 1 != s["default"].ctrlInfo.marqueeBntSwitch && 1 == s["default"].ctrlInfo.shareBntSwitch && 1 != s["default"].ctrlInfo.videoBntSwitch && (this.progressBg.y = 438 + this.offset.y / 2,
                            this.openGoingSurpassOther(s.SORTTYPE.ENDLESS), this.btnShare.visible = !0, this.btnShare.y = 237),
                        this.showAd(), Laya.Tween.clearTween(this.progressBg), this.tweenAniDown(this.progressBg, {
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, {
                            scaleX: .95,
                            scaleY: .95
                        }, 400), s["default"].ctrlInfo.isWudian && 1 == s["default"].wudianLevel[1]) {
                        var a = 530 + this.offset.y / 2,
                            r = a,
                            l = 0,
                            h = l;
                        s["default"].random_location && (h = o["default"].random(l - 30, l + 30), r = o["default"].random(a, a + 30)),
                            this.btnJump.pos(h, r), this.btnJump.alpha = 0;
                        var c = 700;
                        s["default"].Btu_move[1] && (c = Number(s["default"].Btu_appear[1])), Laya.timer.once(c, this, function() {
                            Laya.Tween.to(i.btnJump, {
                                alpha: 1
                            }, 300);
                        });
                        var u = 1900;
                        s["default"].Btu_move[1] && (u = Number(s["default"].Btu_move[1])), Laya.timer.once(u, this, function() {
                            Laya.Tween.to(i.btnJump, {
                                y: 386
                            }, 500, Laya.Ease.backOut, null, 500);
                        });
                    } else this.btnJump.y = 386;
                }, e.prototype.openGoingSurpassOther = function(t) {
                    l["default"].subDomain && (this.goingSurpassOther || (this.goingSurpassOther = new Laya.WXOpenDataViewer(),
                            this.owner.addChild(this.goingSurpassOther)), this.goingSurpassOther.pos(0, 131),
                        this.goingSurpassOther.width = 750, this.goingSurpassOther.height = 92, l["default"].subDomain.setOpenView(this.goingSurpassOther),
                        l["default"].subDomain.openGoingSurpassOther(t));
                }, e.prototype.closeGoingSurpassOther = function() {
                    l["default"].subDomain && (l["default"].subDomain.closeGoingSurpassOther(), this.goingSurpassOther && (this.goingSurpassOther.destroy(),
                        this.goingSurpassOther = null));
                }, e.prototype.onEnable = function() {
                    t.prototype.onEnable.call(this);
                }, e.prototype.onDisable = function() {
                    t.prototype.onDisable.call(this), l["default"].callAPIMethodByProxy("destoryAllBannerAd"),
                        this.closeGoingSurpassOther();
                }, e.prototype.goResurgence = function() {
                    h["default"].instance.emit(r.GameEvent.Game_RESURGENCE), this.closeView();
                }, e.prototype.videoClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null;
                        }),
                        l["default"].ptAPI ? (
                            l["default"].callAPIMethodByProxy("CanPlayVideo") ? (this.isLoadAD = !0,
                                this.goShareAdc = !0,





                                l["default"].callAPIMethodByProxy("showVideo", {
                                    posID: 204,
                                    _type: c.SHARE_VIDEO_TYPE.RESURGENCE,
                                    caller: this,
                                    callBackSuc: function() {
                                        t.isLoadAD = !1, t.goShareAdc = !1, t.goResurgence(), u["default"].ald("立即复活成功--视频");
                                    },
                                    callBackFail: function() {
                                        h["default"].instance.emit("openTip", "看完视频才能复活"), t.isLoadAD = !1, t.goShareAdc = !1;
                                    },
                                    callBackErro: function() {
                                        h["default"].instance.emit("openTip", "今日观看视频次数已用尽"), t.isLoadAD = !1, t.goShareAdc = !1;
                                    }
                                })) : h["default"].instance.emit("openTip", "今日观看视频次数已用尽")) : this.goResurgence());
                }, e.prototype.shareClick = function() {
                    var t = this;
                    this._isClick || this.isLoadAD || (this.goShareAdc = !0, this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null;
                    }), l["default"].ptAPI ? (u["default"].ald("分享复活"), l["default"].callAPIMethodByProxy("shareAppMessage", {
                        caller: this,
                        callback: function(e) {
                            t.goShareAdc = !1, e.success || h["default"].instance.emit("openTip", "需要成功分享才能复活");
                        },
                        args: {},
                        type: 1
                    })) : this.goResurgence());
                }, e.prototype.jumpClick = function() {
                    var t = this;
                    this._isClick || this.isLoadAD || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null;
                    }), h["default"].instance.emit("openConvergeAd", {
                        viewType: p.UI_VIEW_TYPE.SETTL_COIN
                    }), this.closeView());
                }, e.prototype.openOver = function() {
                    this._data;
                    h["default"].instance.emit("openSettleCoin");
                }, e.prototype.showADPanel = function() {
                    var t = this;
                    this.bannerADPanel.visible = !0, Laya.timer.frameOnce(2, this, function() {
                        t.bannnerAdListloop.init({
                            _cellWidth: 144,
                            _cellHeight: 144,
                            _spaceX: 23,
                            viewType: p.UI_VIEW_TYPE.RESTRGENCE
                        }), t.bannnerAdListloop.start(s["default"].getAdData(1007), 1007, "复活页");
                    });
                }, e.prototype.hideADPanel = function() {
                    this.bannerADPanel.visible = !1;
                }, e;
            }(n["default"]);
        i["default"] = m;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Common/EventMgr": 7,
        "../Common/PlatformMgr": 9,
        "../Common/SoundMgr": 10,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./AdListLoop": 48,
        "./BaseView": 49,
        "./ConvergeAd": 51
    }],
    60: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = t("./cionAni"),
            o = t("../GameMgr3d/GameMgr"),
            s = t("../Util/MyUtils"),
            r = t("../Common/EventMgr"),
            l = t("../Common/PlatformMgr"),
            h = t("../Common/StatisticsMgr"),
            c = t("../Datas/UserData"),
            u = t("../Common/HttpMgr"),
            d = t("../Datas/ConfigData"),
            f = t("./AdListLoop"),
            p = t("../BuildPlatform/wx/WxAdManager"),
            m = t("../BuildPlatform/wx/WXAPI"),
            y = t("./ConvergeAd"),
            g = t("../GameMgr3d/GameEvent"),
            _ = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.isMySettleCoin = !0, e.isLoadAD = !1, e.goShareAdc = !1, e.isSelect = !1,
                        e.coinNum = 0, e.isOpenSkinPop = !1, e.isFreeCoin = !1, e.goldState = 0, e.startGoldTime = 0,
                        e.isAutoOpen = !1, e.DIX = 0, e.DIXMAX = 6, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), this.anchor = this.owner.getChildByName("anchor"),
                            this.coinPanel = this.anchor.getChildByName("coinPanel"), this.congratulation = this.coinPanel.getChildByName("congratulation"),
                            this.coinLbl = this.anchor.getChildByName("coinLabel"), this.btnselect = this.anchor.getChildByName("fiveTime"),
                            this.btnselectMark = this.btnselect.getChildByName("checkMark"), this.shine = this.anchor.getChildByName("shine"),
                            this.coinBg = this.owner.getChildByName("coinBg"),
                            this.coinNumLbl = this.coinBg.getChildByName("coinNum"),
                            this.coinUnit = this.coinBg.getChildByName("coinUnit"),
                            this.closeBtn = this.anchor.getChildByName("closeBtn"),
                            this.noVideoButton = this.owner.getChildByName("noVedio"),
                            this.anchor.y += this.offset.y / 2,
                            this.gameCtrl = o["default"].instance.getGameCtrl(), this.bannerADPanel = this.owner.getChildByName("bannerADPanel"),
                            this.bannnerAdListloop = this.bannerADPanel.getComponent(f["default"]), this.closeBtn.visible = !1,
                            s["default"].autoScreenSize([this.coinBg]), this.coinBg.y += 10, this.updateCoinNum();
                    }, e.prototype.addEvent = function() {
                        this.btnselect.on(Laya.Event.CLICK, this, this.clickSelect),
                            this.noVideoButton.on(Laya.Event.CLICK, this, this.clickButton),
                            this.closeBtn.on(Laya.Event.CLICK, this, this.goHome),
                            r["default"].instance.onEvent("UpdataMoney", this, this.updateCoinNum),
                            r["default"].instance.onEvent(p.AdEvent.event_show_lixianlingqujinbi_erro_107, this, this.showADPanel),
                            r["default"].instance.onEvent(p.AdEvent.event_showBannerAd_zhujiemianlingqujinbi_erro_102, this, this.showADPanel),
                            r["default"].instance.onEvent(p.AdEvent.event_showBannerAd_jiesuanjinbi_erro_105, this, this.showADPanel),
                            r["default"].instance.onEvent(g.GameEvent.ADBACK, this, this.showAd), t.prototype.addEvent.call(this);
                    }, e.prototype.removeEvent = function() {
                        this.btnselect.off(Laya.Event.CLICK, this, this.clickSelect), this.noVideoButton.off(Laya.Event.CLICK, this, this.clickButton),
                            this.closeBtn.off(Laya.Event.CLICK, this, this.goHome), r["default"].instance.onOffEvent("UpdataMoney", this, this.updateCoinNum),
                            r["default"].instance.onOffEvent(p.AdEvent.event_show_lixianlingqujinbi_erro_107, this, this.showADPanel),
                            r["default"].instance.onOffEvent(p.AdEvent.event_showBannerAd_zhujiemianlingqujinbi_erro_102, this, this.showADPanel),
                            r["default"].instance.onOffEvent(p.AdEvent.event_showBannerAd_jiesuanjinbi_erro_105, this, this.showADPanel),
                            r["default"].instance.onOffEvent(g.GameEvent.ADBACK, this, this.showAd), t.prototype.removeEvent.call(this);
                    }, e.prototype.showAd = function() {
                        this.owner.visible && (p["default"].Instance.showBannerAd_zhujiemianlingqujinbi(-1) ? this.hideADPanel() : this.showADPanel());
                    }, e.prototype.getIsFree = function() {
                        return this.isFreeCoin;
                    }, e.prototype.goHome = function() {
                        r["default"].instance.emit("goHome", {
                            isGet: !0
                        }), this.closeView();
                    }, e.prototype.clickSelect = function() {
                        console.log("clickSelect ==", this.isSelect);
                        this.isSelect = !this.isSelect;
                        var t = this.btnselectMark.visible;
                        this.goldState = t ? 1 : 2, this.coinLbl.text = t ? (5 * this.coinNum).toString() : this.coinNum.toString(),
                            this.startGoldTime = Laya.timer.currTimer, this.btnselectMark.visible = !t;
                    }, e.prototype.clickButton = function() {
                        var t = this;

                        console.log("clickButton ==", this.isLoadAD);
                        if (!this._isClick && !this.isLoadAD) {
                            this._isClick = !0,
                                this.noVideoButton.visible = !1;
                            var e = 205;
                            this.isFreeCoin && (e = 202);
                            if (this.btnselectMark.visible) {
                                this.isLoadAD = !0;
                                this.goShareAdc = !0;
                                platform.getInstance().showReward(() => {
                                    t.coinNum = 5 * t.coinNum, c["default"].setMoney(t.coinNum, !0),
                                        u["default"].instance.settle({
                                            type: t.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                                            money: t.coinNum
                                        }),
                                        t.openGameOverLevel();
                                    t.isLoadAD = !1;
                                    t.goShareAdc = !1;
                                }, () => {
                                    // r["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end"), 
                                    t.noVideoButton.visible = !0,
                                        t.isLoadAD = !1, t.goShareAdc = !1, t._isClick = null;
                                })

                            } else {
                                c["default"].setMoney(this.coinNum, !0),
                                    u["default"].instance.settle({
                                        type: this.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                                        money: this.coinNum
                                    });
                                t.openGameOverLevel();
                                t.isLoadAD = !1;
                                t.goShareAdc = !1;

                            }
                        }




                        //     this.btnselectMark.visible ? l["default"].ptAPI ? (this.isLoadAD = !0, 
                        //     this.goShareAdc = !0, this.isFreeCoin ?  
                        //     l["default"].callAPIMethodByProxy("showVideo", {
                        //         posID: e,
                        //         _type: h.SHARE_VIDEO_TYPE.RESURGENCE,
                        //         caller: this,
                        //         callBackSuc: function() {
                        //             t.isFreeCoin ? (c["default"].adCount += 1, u["default"].instance.getOfflineAward({
                        //                 type: 5,
                        //                 success: function() {
                        //                     r["default"].instance.emit("UpdataMoney");
                        //                 }
                        //             }), t.isAutoOpen ? m["default"].ald("获得离线多倍金币成功--视频") : m["default"].ald("获得在线多倍金币成功--视频"), 
                        //             t.OVERhuoquAIn()) : (t.coinNum = 5 * t.coinNum, c["default"].setMoney(t.coinNum, !0), 
                        //             u["default"].instance.settle({
                        //                 type: t.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                        //                 money: t.coinNum
                        //             }), t.openGameOverLevel()), t.isLoadAD = !1, 
                        //             t.goShareAdc = !1;
                        //         },
                        //         callBackFail: function() {
                        //             r["default"].instance.emit("openTip", "看完视频才能获得奖励"), t.noVideoButton.visible = !0, 
                        //             t.isLoadAD = !1, t.goShareAdc = !1, t._isClick = null;
                        //         },
                        //         callBackErro: function() {
                        //             r["default"].instance.emit("openTip", "今日视频次数已用完"), t.noVideoButton.visible = !0, 
                        //             t.isLoadAD = !1, t.goShareAdc = !1, t._isClick = null;
                        //         }
                        //     })) : (this.isFreeCoin ? (c["default"].adCount += 1, u["default"].instance.getOfflineAward({
                        //         type: 5,
                        //         success: function() {
                        //             r["default"].instance.emit("UpdataMoney");
                        //         }
                        //     }), this.OVERhuoquAIn()) : (this.coinNum = 5 * this.coinNum, c["default"].setMoney(this.coinNum, !0), 
                        //     u["default"].instance.settle(
                        //         {
                        //         type: this.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                        //         money: this.coinNum
                        //     }), this.openGameOverLevel()), this.isLoadAD = !1, this.goShareAdc = !1) : (this.isFreeCoin ? (u["default"].instance.getOfflineAward({
                        //         type: 1,
                        //         success: function() {
                        //             r["default"].instance.emit("UpdataMoney");
                        //         }
                        //     }), this.OVERhuoquAIn()) : (c["default"].setMoney(this.coinNum, !0), u["default"].instance.settle({
                        //         type: this.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                        //         money: this.coinNum
                        //     }), this.OVERhuoquAIn(), this.openGameOverLevel()), this._isClick = null);
                        // }
                    }, e.prototype.openGameOverLevel = function() {
                        this.isFreeCoin || (r["default"].instance.emit("openGameOverLevel", {
                            isPass: this.gameCtrl.getCurrGameData().isPass,
                            addMoney: this.coinNum
                        }), this.closeView());
                    },
                    e.prototype.openView = function(e) {
                        if (t.prototype.openView.call(this, e), this.btnselectMark.visible = !0, this.coinPanel.skin = "settleCoin/huode_baoxiang_open.png",
                            this.congratulation.skin = "settleCoin/huode_biaoti.png", e) this.isFreeCoin = e.isFree,
                            this.coinNum = Math.floor(e.freeCoin), this.coinLbl.text = (5 * this.coinNum).toString(),
                            this.isAutoOpen = e.isAutoOpen, this.isAutoOpen ? (this.coinPanel.skin = "settleCoin/baoxiang@2x.png",
                                this.congratulation.skin = "settleCoin/lixian_biaoti.png", this.closeBtn.visible = !0) : (this.congratulation.skin = "settleCoin/huode_biaoti.png",
                                this.showAd()), this.noVideoButton.y = 1013 + this.offset.y / 2;
                        else {
                            var i = this.gameCtrl.getCurrGameData(),
                                n = i.isPass;
                            if (this.coinNum = i.getSettleMoney(n), this.coinNum <= 0) return u["default"].instance.settle({
                                type: this.gameCtrl.getCurrGameData().isPass ? 1 : 2,
                                money: 0
                            }), void this.openGameOverLevel();
                            this.coinNum = Math.floor(this.coinNum * c["default"].multipy), this.coinLbl.text = (5 * this.coinNum).toString(),
                                this.noVideoButton.y = 1013 + this.offset.y / 2, this.showAd();
                        }
                        this.updateCoinNum();
                    }, e.prototype.showADPanel = function() {
                        var t = this;
                        this.bannerADPanel.visible = !0, Laya.timer.frameOnce(2, this, function() {
                            var e = y.UI_VIEW_TYPE.SETTL_COIN,
                                i = 1007;
                            t.isFreeCoin && (i = 1008, e = y.UI_VIEW_TYPE.ONLINE_COIN, t.isAutoOpen && (e = y.UI_VIEW_TYPE.OFFLINE_COIN)),
                                t.bannnerAdListloop.init({
                                    _cellWidth: 144,
                                    _cellHeight: 144,
                                    _spaceX: 23,
                                    viewType: e
                                }), t.bannnerAdListloop.start(d["default"].getAdData(i), i, "获取金币页");
                        });
                    }, e.prototype.hideADPanel = function() {
                        this.bannerADPanel.visible = !1;
                    }, e.prototype.closeView = function(e) {
                        t.prototype.closeView.call(this, e);
                    }, e.prototype.onDisable = function() {
                        t.prototype.onDisable.call(this), l["default"].callAPIMethodByProxy("destoryAllBannerAd");
                    }, e.prototype.onUpdate = function() {
                        if (this.shine.rotation += .5, this.shine.rotation > 360 && (this.shine.rotation -= 360),
                            this.goldState) {
                            var t = parseInt(this.coinLbl.text);
                            1 == this.goldState ? (t -= 100, (t <= this.coinNum || this.startGoldTime + 2e3 < Laya.timer.currTimer) && (t = this.coinNum,
                                this.goldState = 0)) : 2 == this.goldState && (t += 100, (t >= 5 * this.coinNum || this.startGoldTime + 2e3 < Laya.timer.currTimer) && (t = 5 * this.coinNum,
                                this.goldState = 0)), this.coinLbl.text = t.toString();
                        }
                    }, e.prototype.OVERhuoquAIn = function() {
                        this.DIX = 0, Laya.timer.clear(this, this.goldFlyAniLoop), Laya.timer.loop(50, this, this.goldFlyAniLoop);
                    }, e.prototype.goldFlyAniLoop = function() {
                        var t = this;
                        if (this.DIX <= this.DIXMAX)
                            if (this.DIX = this.DIX + 1, this.DIX > this.DIXMAX) {
                                this.qudonghua(!0);
                                var e = "Coin x" + (this.coinLbl.text || "0");
                                r["default"].instance.emit("openTip", e), Laya.timer.once(1e3, this, function() {
                                    r["default"].instance.emit("goHome", {
                                        isGet: !0
                                    }), t.closeView();
                                });
                            } else this.qudonghua(!1);
                        else Laya.timer.clear(this, this.goldFlyAniLoop);
                    }, e.prototype.qudonghua = function(t) {
                        var e = Laya.Pool.getItem("CONINAIN"),
                            i = {
                                x: this.anchor.x + this.coinPanel.x,
                                y: this.anchor.y + this.coinPanel.y
                            },
                            n = {
                                x: this.coinBg.x,
                                y: this.coinBg.y
                            };
                        if (null == e) {
                            var o = void 0;
                            o = new a.cionAni(), this.owner.addChild(o), o.OVERhuoquAIn(t, i, n);
                        } else {
                            var o = void 0;
                            o = e, this.owner.addChild(o), o.OVERhuoquAIn(t, i, n);
                        }
                    }, e.prototype.updateCoinNum = function() {
                        var t = s["default"].scoreConversion(c["default"].money);
                        this.coinNumLbl.value = t.value, this.coinUnit.visible = null != t.isK;
                        var e = ["T", "B", "M", "K"],
                            i = 21 * t.value.length;
                        if (t.isK) {
                            this.coinUnit.value = e[t.isK];
                            i += 37;
                        }
                    }, e;
            }(n["default"]);
        i["default"] = _;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../BuildPlatform/wx/WxAdManager": 6,
        "../Common/EventMgr": 7,
        "../Common/HttpMgr": 8,
        "../Common/PlatformMgr": 9,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../GameMgr3d/GameMgr": 23,
        "../Util/MyUtils": 66,
        "./AdListLoop": 48,
        "./BaseView": 49,
        "./ConvergeAd": 51,
        "./cionAni": 63
    }],
    61: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, a = t("./BaseView"),
            o = t("../Common/EventMgr"),
            s = t("../Common/HttpMgr"),
            r = t("../Util/MyUtils"),
            l = t("../GameMgr3d/GameEvent"),
            h = t("../Datas/UserData"),
            c = t("../Datas/ConfigData"),
            u = t("../Common/PlatformMgr"),
            d = t("../Common/StatisticsMgr"),
            f = t("../BuildPlatform/wx/WXAPI");
        ! function(t) {
            t[t.ROLE = 0] = "ROLE", t[t.BALL = 1] = "BALL";
        }(n || (n = {}));
        var p = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return __extends(e, t),
                e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.anchor = this.owner.getChildByName("anchor"),
                        this.ballList = this.anchor.getChildByName("ballList"), this.roleList = this.anchor.getChildByName("roleList"),
                        this.ballList.array = [], this.ballList.renderHandler = new Laya.Handler(this, this.ballRender),
                        this.ballList.mouseHandler = new Laya.Handler(this, this.ballMouse), this.ballList.vScrollBarSkin = "",
                        this.roleList.array = [], this.roleList.renderHandler = new Laya.Handler(this, this.roleRender),
                        this.roleList.mouseHandler = new Laya.Handler(this, this.roleMouse), this.roleList.vScrollBarSkin = "",
                        this.coinBtn = this.anchor.getChildByName("coinBtn"), this.videoBtn = this.anchor.getChildByName("videoBtn"),
                        this.videoHit = this.videoBtn.getChildByName("hit"), Laya.Tween.clearTween(this.videoBtn),
                        this.tweenAniDown(this.videoBtn, {
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, {
                            scaleX: .95,
                            scaleY: .95
                        }, 400), this.equipmentBtn = this.anchor.getChildByName("equipmentBtn"),
                        this.equipment = this.anchor.getChildByName("equipment"),
                        this.roleBtn = this.anchor.getChildByName("roleBtn"),
                        this.role_0 = this.roleBtn.getChildByName("0"),
                        this.role_1 = this.roleBtn.getChildByName("1"),
                        this.ballBtn = this.anchor.getChildByName("ballBtn"),
                        this.ball_0 = this.ballBtn.getChildByName("0"),
                        this.ball_1 = this.ballBtn.getChildByName("1"),
                        this.coinImg = this.owner.getChildByName("coinBg"),
                        this.coinNum = this.coinImg.getChildByName("coinNum"),
                        this.coinUnit = this.coinImg.getChildByName("coinUnit"),
                        this.coinBuyLable = this.coinBtn.getChildByName("Label"),
                        this.videoBuyLable = this.videoBtn.getChildByName("Label"),
                        r["default"].autoScreenSize([this.coinImg, this.homeBtn]),
                        this.coinImg.y += 10, this.anchor.y += this.offset.y / 2, this.isLoadAD = !1, this.ballSelectIndex = 0,
                        this.roleSelectIndex = 0;
                }, e.prototype.addEvent = function() {
                    this.coinBtn.on(Laya.Event.CLICK, this, this.coinBuyClick), this.videoBtn.on(Laya.Event.CLICK, this, this.videoBuyClick),
                        this.equipmentBtn.on(Laya.Event.CLICK, this, this.equipmentClick), this.homeBtn.on(Laya.Event.CLICK, this, this.goHome),
                        this.ballBtn.on(Laya.Event.CLICK, this, this.showBallList), this.roleBtn.on(Laya.Event.CLICK, this, this.showRoleList),
                        o["default"].instance.onEvent("UpdataMoney", this, this.updateCoinNum);
                }, e.prototype.removeEvent = function() {
                    o["default"].instance.onOffEvent("UpdataMoney", this, this.updateCoinNum), this.coinBtn.off(Laya.Event.CLICK, this, this.coinBuyClick),
                        this.videoBtn.off(Laya.Event.CLICK, this, this.videoBuyClick), this.equipmentBtn.off(Laya.Event.CLICK, this, this.equipmentClick),
                        this.homeBtn.off(Laya.Event.CLICK, this, this.goHome), this.ballBtn.off(Laya.Event.CLICK, this, this.showBallList),
                        this.roleBtn.off(Laya.Event.CLICK, this, this.showRoleList);
                }, e.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e), this.showType = n.ROLE, this.setSkinData(),
                        this.ballSelectIndex = 0, this.roleSelectIndex = 0, this.updateSelectIndex(h["default"].peopleSkin),
                        this.updateSelectIndex(h["default"].ballSkin);
                    var i = this.roleList.repeatX,
                        a = Math.floor(this.roleSelectIndex / i);
                    a = a - 2 > 0 ? a : 0, this.roleList.scrollTo(a);
                    var s = Math.floor(this.ballSelectIndex / i);
                    s = s - 2 > 0 ? s : 0, this.ballList.scrollTo(s), this.roleList.refresh(), this.ballList.refresh(),
                        o["default"].instance.emit(l.GameEvent.SKIN_SHOW_STORE, !0), this.updataListShow(),
                        this.updataButton(), this.updateCoinNum();
                }, e.prototype.setSkinData = function() {
                    h["default"].sortRoleData(),
                        h["default"].sortBallData(),
                        this.ballListData = h["default"].ballDatas,
                        this.roleListData = h["default"].roleDatas,
                        this.ballList.array = this.ballListData,
                        this.roleList.array = this.roleListData;
                }, e.prototype.coinBuyClick = function() {
                    var t = this.getCurrSelectSkinData(),
                        e = t.config.Id,
                        i = c["default"].getSkinDataById(e).Gold;
                    if (h["default"].money < i) return void o["default"].instance.emit("openTip", "Coin is not enough");
                    var n = this;
                    s["default"].instance.buyView({
                        systemViewId: e,
                        success: function(t) {
                            var e = t.systemViewId;
                            h["default"].money -= i, n.rewordSkin(e);
                        }
                    });
                }, e.prototype.rewordSkin = function(t) {
                    var e = this;
                    h["default"].addSkin(t), e.setSkinData(), e.updateSelectIndex(t), e.updataButton(),
                        e.ballList.refresh(), e.roleList.refresh();
                }, e.prototype.updateSelectIndex = function(t) {
                    var e = c["default"].getSkinDataById(t);
                    if (1 == e.Type)
                        for (var i = 0; i < this.roleListData.length; i++) {
                            var n = this.roleListData[i];
                            if (n.config.Id == t) return void(this.roleSelectIndex = i);
                        } else if (2 == e.Type)
                            for (var i = 0; i < this.ballListData.length; i++) {
                                var a = this.ballListData[i];
                                if (a.config.Id == t) return void(this.ballSelectIndex = i);
                            }
                }, e.prototype.videoBuyClick = function() {
                    var t = this,
                        e = this.getCurrSelectSkinData(),
                        i = e.config.Id,
                        n = this;

                    this.isLoadAD = !0,

                        platform.getInstance().showReward(() => {
                                t.isLoadAD = !1,
                                    s["default"].instance.unlockView({
                                        type: 1,
                                        systemViewId: i,
                                        success: function(t) {
                                            if (t.isUnlock) n.rewordSkin(i);
                                            else {
                                                var e = (t.num, t.systemViewId);
                                                h["default"].unLockSkin(i),
                                                    n.setSkinData(),
                                                    n.updateSelectIndex(i),
                                                    n.updataButton(),
                                                    n.ballList.refresh(),
                                                    n.roleList.refresh();
                                            }
                                        }
                                    });

                            },
                            () => {
                                // o["default"].instance.emit("openTip", "Failed to get the reward, please watch the ads to the end."), 
                                t.isLoadAD = !1;
                            })



                    // u["default"].ptAPI && 
                    // (f["default"].ald("皮肤商城--视频"), 
                    // u["default"].callAPIMethodByProxy("CanPlayVideo") ? (
                    //     this.isLoadAD = !0, 
                    // u["default"].callAPIMethodByProxy("showVideo", {
                    //     posID: 206,
                    //     _type: d.SHARE_VIDEO_TYPE.PROP,
                    //     caller: this,
                    //     callBackSuc: function() {
                    //         t.isLoadAD = !1, f["default"].ald("皮肤商城成功--视频"), s["default"].instance.unlockView({
                    //             type: 1,
                    //             systemViewId: i,
                    //             success: function(t) {
                    //                 if (t.isUnlock) n.rewordSkin(i); else {
                    //                     var e = (t.num, t.systemViewId);
                    //                     h["default"].unLockSkin(e), n.setSkinData(), n.updateSelectIndex(e), n.updataButton(), 
                    //                     n.ballList.refresh(), n.roleList.refresh();
                    //                 }
                    //             }
                    //         });
                    //     },
                    //     callBackFail: function() {
                    //         o["default"].instance.emit("openTip", "需要看完视频"), t.isLoadAD = !1;
                    //     },
                    //     callBackErro: function() {
                    //         o["default"].instance.emit("openTip", "今日观看视频次数已用尽"), t.isLoadAD = !1;
                    //     }
                    // })) : o["default"].instance.emit("openTip", "今日观看视频次数已用尽"));
                }, e.prototype.getCurrSelectSkinData = function() {
                    var t;
                    return this.showType == n.ROLE ? t = this.roleListData[this.roleSelectIndex] : this.showType == n.BALL && (t = this.ballListData[this.ballSelectIndex]),
                        t;
                }, e.prototype.equipmentClick = function() {
                    var t = this.getCurrSelectSkinData().config.Id,
                        e = this;
                    var systemViewId = t
                    s["default"].instance.changeView({
                        success: function() {
                            var i = systemViewId;
                            e.showType == n.ROLE ? h["default"].peopleSkin = systemViewId : e.showType == n.BALL && (h["default"].ballSkin = systemViewId),

                                platform.getInstance().setStorageSync("peopleSkin", h["default"].peopleSkin);
                            platform.getInstance().setStorageSync("ballSkin", h["default"].ballSkin);


                            e.updateSelectIndex(h["default"].peopleSkin),
                                e.updateSelectIndex(h["default"].ballSkin), e.roleList.scrollTo(e.roleSelectIndex),
                                e.ballList.scrollTo(e.ballSelectIndex), e.updataButton(), e.resetCurrSkin(), e.roleList.refresh(),
                                e.ballList.refresh();


                        }
                    });
                }, e.prototype.showBallList = function() {
                    this.showType != n.BALL && (this.showType = n.BALL, this.resetCurrSkin(), this.updataListShow(),
                        this.ballList.refresh(), this.updataButton());
                }, e.prototype.showRoleList = function() {
                    this.showType != n.ROLE && (this.showType = n.ROLE, this.resetCurrSkin(), this.updataListShow(),
                        this.roleList.refresh(), this.updataButton());
                }, e.prototype.updataListShow = function() {
                    this.role_0.visible = this.showType == n.ROLE, this.role_1.visible = this.showType != n.ROLE,
                        this.ball_0.visible = this.showType == n.BALL, this.ball_1.visible = this.showType != n.BALL,
                        this.roleList.visible = this.showType == n.ROLE, this.ballList.visible = this.showType == n.BALL;
                }, e.prototype.ballRender = function(t, e) {
                    var i = this.ballListData[e],
                        n = t.getChildByName("itemImg"),
                        a = t.getChildByName("selectImg"),
                        o = t.getChildByName("lock"),
                        s = t.getChildByName("skinMask"),
                        r = t.getChildByName("useBg"),
                        l = i.config.Id;
                    r.visible = h["default"].ballSkin == l;
                    var c = "SkinStore/ballSkin/" + i.config.Id + ".png";
                    n.skin = c, o.visible = !i.isHave, s.visible = !i.isHave, a.visible = e == this.ballSelectIndex;
                }, e.prototype.roleRender = function(t, e) {
                    var i = this.roleListData[e],
                        n = t.getChildByName("itemImg"),
                        a = t.getChildByName("selectImg"),
                        o = t.getChildByName("lock"),
                        s = t.getChildByName("skinMask"),
                        r = t.getChildByName("useBg"),
                        l = Number(i.config.Id);
                    r.visible = h["default"].peopleSkin == l;
                    var c = l >= 10 ? l : "0" + l,
                        u = "SkinStore/roleSkin/" + c + ".png";
                    console.log("url:", u), n.skin = u, o.visible = !i.isHave, s.visible = !i.isHave,
                        a.visible = e == this.roleSelectIndex;
                }, e.prototype.roleMouse = function(t, e) {
                    if (t.type == Laya.Event.CLICK && t.target instanceof Laya.Box) {
                        if (this.isLoadAD) return;
                        if (this.roleSelectIndex == e) return;
                        this.roleSelectIndex = e;
                        for (var i = t.target, n = 0; n < i.parent.numChildren; n++) {
                            var a = i.parent._children[n];
                            a.getChildByName("selectImg").visible = !1;
                        }
                        i.getChildByName("selectImg").visible = !0;
                        var s = this.roleListData[e],
                            r = s.config.Id;
                        o["default"].instance.emit(l.GameEvent.SKIN_CHANG_PLAYER_SKIN, r), this.updataButton();
                    }
                }, e.prototype.ballMouse = function(t, e) {
                    if (t.type == Laya.Event.CLICK && t.target instanceof Laya.Box) {
                        if (this.isLoadAD) return;
                        if (this.ballSelectIndex == e) return;
                        this.ballSelectIndex = e;
                        for (var i = t.target, n = 0; n < i.parent.numChildren; n++) {
                            var a = i.parent._children[n];
                            a.getChildByName("selectImg").visible = !1;
                        }
                        i.getChildByName("selectImg").visible = !0;
                        var s = this.ballListData[e],
                            r = s.config.Id;
                        o["default"].instance.emit(l.GameEvent.SKIN_CHANG_BALL_SKIN, r), this.updataButton();
                    }
                }, e.prototype.updateCoinNum = function() {
                    var t = r["default"].scoreConversion(h["default"].money);
                    this.coinNum.value = t.value, this.coinNum.x = 23, this.coinUnit.x = 120, this.coinUnit.visible = null != t.isK;
                    var e = ["T", "B", "M", "K"];
                    if (t.isK) {
                        var i = 7 * (t.value.length - 1);
                        this.coinUnit.value = e[t.isK], this.coinNum.x += i, this.coinUnit.x += i;
                    }
                }, e.prototype.goHome = function() {
                    o["default"].instance.emit(l.GameEvent.SKIN_SHOW_STORE, !1), o["default"].instance.emit(l.GameEvent.UPDATA_PLAYER_SKIN, h["default"].peopleSkin),
                        this.closeView(), o["default"].instance.emit("goHome");
                }, e.prototype.updataButton = function() {
                    var t;
                    this.showType == n.ROLE ? t = this.roleListData[this.roleSelectIndex] : this.showType == n.BALL && (t = this.ballListData[this.ballSelectIndex]);
                    if (t.isHave) {
                        this.coinBtn.visible = !1, this.videoBtn.visible = !1;
                        var e = t.config.Id;
                        h["default"].peopleSkin == e || h["default"].ballSkin == e ? (this.equipment.visible = !0,
                            this.equipmentBtn.visible = !1) : (this.equipment.visible = !1, this.equipmentBtn.visible = !0);
                    } else {
                        this.equipment.visible = !1, this.equipmentBtn.visible = !1;
                        var i = t.config.Gold,
                            a = r["default"].scoreConversion(i),
                            o = a.value,
                            s = ["T", "B", "M", "K"];
                        a.isK && (o += s[a.isK]), this.coinBuyLable.text = o, this.videoBuyLable.text = t.unlockView.moiveProcess + "/" + t.config.Video,
                            0 != t.config.Video && c["default"].ctrlInfo.isVideo ? (this.videoBtn.visible = !0,
                                this.coinBtn.x = -155, this.videoBtn.x = 155) : (this.videoBtn.visible = !1, this.coinBtn.x = 0),
                            this.coinBtn.visible = !0;
                    }
                }, e.prototype.resetCurrSkin = function() {
                    o["default"].instance.emit(l.GameEvent.UPDATA_PLAYER_SKIN, h["default"].peopleSkin),
                        o["default"].instance.emit(l.GameEvent.UPDATA_BALL_SKIN, h["default"].ballSkin);
                    for (var t = 0; t < this.ballListData.length; t++) {
                        var e = this.ballListData[t].config.id;
                        if (e == h["default"].ballSkin) {
                            this.ballSelectIndex = t;
                            break;
                        }
                    }
                    for (var t = 0; t < this.roleListData.length; t++) {
                        var e = this.roleListData[t].config.id;
                        if (e == h["default"].peopleSkin) {
                            this.roleSelectIndex = t;
                            break;
                        }
                    }
                }, e;
        }(a["default"]);
        i["default"] = p;
    }, {
        "../BuildPlatform/wx/WXAPI": 3,
        "../Common/EventMgr": 7,
        "../Common/HttpMgr": 8,
        "../Common/PlatformMgr": 9,
        "../Common/StatisticsMgr": 11,
        "../Datas/ConfigData": 15,
        "../Datas/UserData": 17,
        "../GameMgr3d/GameEvent": 21,
        "../Util/MyUtils": 66,
        "./BaseView": 49
    }],
    62: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.tipLbl = this.owner.getChildByName("image").getChildByName("Label");
                }, e.prototype.addEvent = function() {
                    this.owner.on(Laya.Event.CLICK, this, this.closeView), t.prototype.addEvent.call(this);
                }, e.prototype.removeEvent = function() {
                    this.owner.off(Laya.Event.CLICK, this, this.closeView), t.prototype.removeEvent.call(this);
                }, e.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), this.tipLbl.text = e, Laya.timer.once(2e3, this, function() {
                        i.closeView();
                    });
                }, e;
            }(n["default"]);
        i["default"] = a;
    }, {
        "./BaseView": 49
    }],
    63: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.M_left = 0, e.M_right = 0, e.L_OR_R = !1, e.zuoyou = !1, e.Addcionain = new Laya.Tween(),
                    e.Addcionain1 = new Laya.Tween(), e.shezhi_thefish(), e;
            }
            return __extends(e, t), e.prototype.shezhi_thefish = function() {
                this.skin = "mainview/gb@2x.png", this.anchorX = .5, this.anchorY = .5, this.rotation = 0,
                    this.alpha = 1;
            }, e.prototype.Initialize = function() {
                this.x = 300, this.y = 640, this.rotation = 0, this.alpha = 1;
            }, e.prototype.Random_Int = function(t, e) {
                var i = e - t,
                    n = Math.random();
                return t + Math.round(n * i);
            }, e.prototype.OVERhuoquAIn = function(t, e, i) {
                var n = this;
                this.Addcionain.complete(), this.Addcionain1.complete(), this.visible = !1, this.scale(1, 1);
                var a = this.Random_Int(e.x - 110, e.x + 110),
                    o = this.Random_Int(e.y - 100, e.y + 100);
                this.pos(a, o), this.scale(0, 0), this.rotation = 0, this.visible = !0, this.Addcionain1.to(this, {
                    rotation: 360
                }, 200, null, Laya.Handler.create(this, function() {
                    n.Addcionain.to(n, {
                        scaleX: 2,
                        scaleY: 2
                    }, 100, null, Laya.Handler.create(n, function() {
                        n.Addcionain.to(n, {
                            x: i.x,
                            y: i.y,
                            scaleX: 1,
                            scaleY: 1,
                            rotation: 720
                        }, 300, null, Laya.Handler.create(n, function() {
                            n.visible = !1, n.rotation = 0, n.scale(1, 1), n.pos(300, 640), n.removeSelf(),
                                Laya.Pool.recover("CONINAIN", n);
                        }));
                    }));
                })), this.Addcionain.to(this, {
                    scaleX: 2.2,
                    scaleY: 2.2
                }, 200, null, Laya.Handler.create(this, function() {}));
            }, e;
        }(Laya.Image);
        i.cionAni = n;
    }, {}],
    64: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onAwake = function() {
                this.bgImg = this.owner.getChildByName("imgBg"), this.rankImg = this.owner.getChildByName("rankImg"),
                    this.rankLab = this.owner.getChildByName("rankLab"), this.avatarImg = this.owner.getChildByName("avatarImg"),
                    this.nameLab = this.owner.getChildByName("nameLab"), this.scoreLab = this.owner.getChildByName("scoreLab");
            }, e.prototype.updateItem = function(t) {
                switch (this.owner.active = !0, this.rankImg.visible = !1, this.rankLab.text = t.index || "-",
                    t.index) {
                    case 1:
                        this.rankLab.text = "", this.rankImg.skin = "rank/img_rank" + t.index + ".png",
                            this.rankImg.visible = !0;
                }
                if (this.avatarImg.skin = "rank/img_default_avatar.png", t.headImage && "youke" != t.headImage) {
                    var e = t.headImage.replace("/132", "/46");
                    this.avatarImg.skin = e;
                }
                this.nameLab.text = t.nickname ? t.nickname : "神秘玩家", this.scoreLab.text = t.passNum + "关";
            }, e.prototype.clean = function() {
                this.owner.active = !1;
            }, e;
        }(Laya.Script);
        i["default"] = n;
    }, {}],
    65: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../BaseView"),
            a = t("./RankItem"),
            o = t("../../Util/MyUtils"),
            s = t("../../Datas/UserData"),
            r = t("../../Common/HttpMgr"),
            l = t("../../Common/PlatformMgr"),
            h = t("../../Common/EventMgr"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.closeBtn = this.owner.getChildByName("btnClose");
                    var e = this.owner.getChildByName("content");
                    this.friendBtn = e.getChildByName("friendBtn"), this.worldBtn = e.getChildByName("worldBtn"),
                        this.normalFriendRank = e.getChildByName("normalFriendRank"), this.normalWorldRank = e.getChildByName("normalWorldRank"),
                        this.selectFriendRank = this.normalFriendRank.getChildByName("selectFriendRank"),
                        this.selectWorldRank = this.normalWorldRank.getChildByName("selectWorldRank"), e.y = e.y + this.offset.y / 2,
                        this.worldRankList = e.getChildByName("worldRankList"), this.worldRankList.array = [],
                        this.worldRankList.renderHandler = new Laya.Handler(this, this.onRender), this.worldRankList.vScrollBarSkin = "",
                        this.selfRankSprite = e.getChildByName("selfRankItem"), this.selfRankITem = this.selfRankSprite.getComponent(a["default"]),
                        o["default"].autoScreenSize([this.closeBtn]), this.selfRankSprite.visible = !1;
                }, e.prototype.setMyRankInfo = function() {
                    this.selfRankITem.updateItem(this.selfRankData);
                }, e.prototype.onRender = function(t, e) {
                    var i = t.getComponent(a["default"]);
                    i.updateItem(t.dataSource);
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.closeBtn.on(Laya.Event.CLICK, this, this.closeView),
                        this.worldBtn.on(Laya.Event.CLICK, this, this.worldRankClick), this.friendBtn.on(Laya.Event.CLICK, this, this.friendRankClick);
                }, e.prototype.getWorldData = function() {
                    var t = this;
                    r["default"].instance.getWorldRank({
                        success: function(e) {
                            t.worldData = e.data, t.selfRankData = {
                                index: e.myIndex,
                                nickname: s["default"].nickName,
                                headImage: s["default"].avatarUrl,
                                passNum: s["default"].level || 0
                            }, t.setWorldRankDta();
                        }
                    });
                }, e.prototype.setWorldRankDta = function() {
                    this.setMyRankInfo(), this.worldRankList.array = this.worldData, this.worldRankList.refresh();
                }, e.prototype.worldRankClick = function() {
                    this.selectFriendRank.visible = !1, this.selectWorldRank.visible = !0, this.worldRankList.visible = !0,
                        this.selfRankSprite.visible = !0, this.closeFriendRank(), this.worldData ? this.setWorldRankDta() : this.getWorldData();
                }, e.prototype.friendRankClick = function() {
                    this.selectFriendRank.visible = !0, this.selectWorldRank.visible = !1, this.worldRankList.visible = !1,
                        this.selfRankSprite.visible = !1, l["default"].subDomain && (this.wxOpenDataView || (this.wxOpenDataView = new Laya.WXOpenDataViewer(),
                                this.owner.addChild(this.wxOpenDataView)), this.wxOpenDataView.width = 561, this.wxOpenDataView.height = 828,
                            this.wxOpenDataView.pos(95, 279), this.wxOpenDataView.y = this.wxOpenDataView.y + this.offset.y / 2,
                            l["default"].callSubDomainMethodByProxy("setOpenView", this.wxOpenDataView), l["default"].callSubDomainMethodByProxy("openFriendRank", {
                                _type: this._data._type
                            }));
                }, e.prototype.closeFriendRank = function() {
                    l["default"].subDomain && (this.wxOpenDataView && (this.wxOpenDataView.destroy(),
                        this.wxOpenDataView = null), l["default"].callSubDomainMethodByProxy("closeFriendRank"));
                }, e.prototype.removeEvent = function() {
                    this.closeBtn.off(Laya.Event.CLICK, this, this.closeView), this.worldBtn.off(Laya.Event.CLICK, this, this.worldRankClick),
                        this.friendBtn.off(Laya.Event.CLICK, this, this.friendRankClick), t.prototype.removeEvent.call(this);
                }, e.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e), this.worldRankClick(), l["default"].callAPIMethodByProxy("destoryAllBannerAd");
                }, e.prototype.closeView = function() {
                    this.worldData = null, l["default"].subDomain && this.closeFriendRank(), h["default"].instance.emit("goHome"),
                        t.prototype.closeView.call(this);
                }, e;
            }(n["default"]);
        i["default"] = c;
    }, {
        "../../Common/EventMgr": 7,
        "../../Common/HttpMgr": 8,
        "../../Common/PlatformMgr": 9,
        "../../Datas/UserData": 17,
        "../../Util/MyUtils": 66,
        "../BaseView": 49,
        "./RankItem": 64
    }],
    66: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../Datas/ConfigData"),
            a = function() {
                function t() {}
                return t.random = function(t, e) {
                    var i = e - t,
                        n = Math.random(),
                        a = t + Math.round(n * i);
                    return a;
                }, t.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var i = Math.max(t.length, e.length); t.length < i;) t.push("0");
                    for (; e.length < i;) e.push("0");
                    for (var n = 0; i > n; n++) {
                        var a = parseInt(t[n]),
                            o = parseInt(e[n]);
                        if (a > o) return 1;
                        if (o > a) return -1;
                    }
                    return 0;
                }, t.autoScreenSize = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        var e = n["default"].systemInfo,
                            i = 20;
                        20 == e.statusBarHeight || (44 == e.statusBarHeight || 27 == e.statusBarHeight) && (i += 70),
                            t.forEach(function(t) {
                                t.y = i + t.height / 2;
                            });
                    }
                }, t.scoreConversion = function(t) {
                    for (var e = null, i = Math.round(t), n = i.toString(), a = [1e12, 1e9, 1e6, 1e3], o = 0; o < a.length; o++) {
                        var s = Math.floor(i / a[o]);
                        if (s >= 1) {
                            e = o, n = s.toString();
                            break;
                        }
                    }
                    for (var r = /(\d+)(\d{3})/; r.test(n);) n = n.replace(r, "$1,$2");
                    return {
                        value: n.toLocaleString(),
                        isK: e
                    };
                }, t.isJson = function(t) {
                    if ("string" == typeof t) try {
                        var e = JSON.parse(t);
                        return "object" == typeof e && e ? !0 : !1;
                    } catch (i) {
                        return console.log("error：" + t + "!!!" + i), !1;
                    }
                }, t;
            }();
        i["default"] = a;
    }, {
        "../Datas/ConfigData": 15
    }]
}, {}, [2]);