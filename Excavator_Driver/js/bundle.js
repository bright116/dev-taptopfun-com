!function() {
    "use strict";
    class e {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass;
        }
    }
    e.width = 1334, e.height = 750, e.scaleMode = "fixedauto", e.screenMode = "none", 
    e.alignV = "top", e.alignH = "left", e.startScene = "iscene/GameScene.scene", e.sceneRoot = "", 
    e.debug = !1, e.stat = !1, e.physicsDebug = !1, e.exportSceneToJson = !0, e.init();
    var t, a, s, i, n, o, r, l = Laya.ClassUtils.regClass;
    !function(e) {
        !function(e) {
            class t extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("iscene/GameScene");
                }
            }
            e.GameSceneUI = t, l("ui.iscene.GameSceneUI", t);
            class a extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("iscene/Start");
                }
            }
            e.StartUI = a, l("ui.iscene.StartUI", a);
        }(e.iscene || (e.iscene = {}));
    }(t || (t = {}));
    class h extends Laya.Script {}
    h.UmaKey = "", h.XJSDKKey = "cc1a567028d4d0a3b4e24bd66bcf82b6", h.BannerId = "adunit-9a3df27c4235c557", 
    h.BannerId_1 = "adunit-c7cfb7261ae80bc4", h.BannerId_2 = "adunit-e530883ad3b5e2ae", 
    h.InterId = "", h.VideoId = "adunit-0b2278a63ac56acd", h.CustomId = "", h.DeviceOrientation = !1, 
    h.SeverJsonPath = "https://wajueji-1300018364.cos.ap-nanjing.myqcloud.com/SeverConfig.json", 
    h.SDKGuideVersion = 4;
    class y extends Laya.Script {
        constructor() {
            super();
        }
        static onInit() {
            if (Laya.Browser.onMiniGame) {
                y.PlatformObj = Laya.Browser.window.wx, Laya.Browser.onIOS ? y.isIOSPhone = !0 : y.isIOSPhone = !1, 
                y.GetSeverData(), y.GetConstValueData(), y.onInitShareMenu(), y.InitUma(), y.InitSDK(), 
                y.GetSDKData();
                try {
                    y.CheckUpdate();
                } catch (e) {}
                y.InitWXADCompoent(), y.PlatformObj.onShow(() => {
                    y.OnShowCallBack && y.OnShowCallBack(), y.FirstOnShow && (y.FirstOnShow = !1);
                }), Laya.timer.loop(1e3, y, () => {
                    y.InterReadyTime++, y.InterReadyTime >= 20 && (y.InterReadyTime = 20), y.BannerAutorefrsh++, 
                    y.BannerAutorefrsh >= 30 && console.log("自动刷新banner");
                });
            }
        }
        static CreatCustomAD() {
            "" != h.CustomId && (y.CustomObj = y.PlatformObj.createCustomAd({
                adUnitId: h.CustomId,
                left: 10,
                top: 10,
                fixed: !1
            }), y.CustomObj.show(), y.CustomObj.onError(e => console.log(e)), y.CustomObj.show().catch(e => console.log(e)), 
            y.CustomObj.onLoad(() => console.log("原生模板广告加截成功")), y.CustomObj.show().then(() => console.log("原生模板广告显示")));
        }
        static ShowCustomAD() {
            y.CustomObj && y.CustomObj.show();
        }
        static HideCustomAD() {
            y.CustomObj && y.CustomObj.hide();
        }
        LoadingSDK() {
            y.PlatformObj.xiangjiao.load();
        }
        LoginSDK() {
            y.LoginFinsh || (y.PlatformObj.xiangjiao.login(), y.LoginFinsh = !0);
        }
        startGameRole() {
            y.roleFinsh || (y.PlatformObj.xiangjiao.role(), y.roleFinsh = !0);
        }
        static ShowInterAD() {
            y.InterADState && (20 == y.InterReadyTime ? y.InterObj && (y.InterReadyTime = 0, 
            y.InterObj.show()) : console.log("插屏未就绪"));
        }
        static ShowVideos() {
            y.VideoObj ? (y.VideoObj.show(), y.InterReadyTime = 0) : y.VideosLoadFailCallback && y.VideosLoadFailCallback();
        }
        static InitUma() {
            y.PlatformObj.uma.init({
                appKey: h.UmaKey,
                useOpenid: !1,
                autoGetOpenid: !1,
                debug: !0
            });
        }
        static onInitShareMenu() {
            y.PlatformObj.showShareMenu({
                withShareTicket: !0,
                success: e => {
                    console.log("分享面板初始化成功");
                }
            });
        }
        static InitSDK() {
            if (Laya.Browser.onMiniGame) {
                var e = y.PlatformObj.getLaunchOptionsSync();
                y.PlatformObj.xiangjiao.init(h.XJSDKKey, "", e, e => {
                    1 == e.is_register_today && y.PlatformObj.aldInit.default.Init();
                    var t = e.openid;
                    y.PlatformObj.uma.setOpenid(t);
                });
            }
        }
        static GetSeverData() {
            Laya.loader.load(h.SeverJsonPath, new Laya.Handler(y, () => {
                y.SeverJsonObj = Laya.loader.getRes(h.SeverJsonPath);
                try {
                    "1" == y.SeverJsonObj.InterADState && (y.InterADState = !0), "1" == y.SeverJsonObj.DoubleClick && (y.DoubleClickFalg = !0), 
                    "1" == y.SeverJsonObj.EnableWxQuitUI && (y.EnableWXQuitUI = !0), y.SeverConfigLoadingFinsh = !0, 
                    console.log("服务器数据拉取完成");
                } catch (e) {}
                Laya.timer.once(500, this, () => {
                    y.TrySeverConfig();
                });
            }));
        }
        static GetConstValueData() {
            Laya.loader.load(y.ConstSeverJsonPath, new Laya.Handler(y, () => {
                y.ConstSeverJsonObj = Laya.loader.getRes(y.ConstSeverJsonPath);
                try {
                    y.BoxClickAddValue = parseFloat(y.ConstSeverJsonObj.BoxClickAddValue), y.BoxFrameSubValue = parseFloat(y.ConstSeverJsonObj.BoxFrameSubValue), 
                    y.ShowBoxBannerValue = parseFloat(y.ConstSeverJsonObj.ShowBoxBannerValue), y.BannerUpValue = parseFloat(y.ConstSeverJsonObj.BannerUpValue), 
                    y.ConstSeverConfigLoadingFinsh = !0, console.log("常量数据拉取完成", y.ConstSeverJsonObj);
                } catch (e) {}
                Laya.timer.once(500, this, () => {
                    y.TryConstSeverConfig();
                });
            }));
        }
        static TryConstSeverConfig() {
            y.ConstSeverConfigLoadingFinsh || y.GetConstValueData();
        }
        static TrySeverConfig() {
            y.SeverConfigLoadingFinsh || y.GetSeverData();
        }
        static GetSDKData() {
            y.PlatformObj.xiangjiao.getGuide(h.SDKGuideVersion, e => {
                if (console.log("SDK版本号", h.SDKGuideVersion), console.log("SDK数据源", e), e.info) {
                    y.GameList = [];
                    for (const t of e.info.gamelist) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameList.push(a);
                    }
                    y.GameListBack = [];
                    for (const t of e.info.gamelist_back) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameListBack.push(a);
                    }
                    y.GameListOver = [];
                    for (const t of e.info.gamelist_over) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameListOver.push(a);
                    }
                    y.GameListBottom = [];
                    for (const t of e.info.gamelist_bottom) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameListBottom.push(a);
                    }
                    y.GameListSide = [];
                    for (const t of e.info.gamelist_side) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameListSide.push(a);
                    }
                    y.GameList_Back_two = [];
                    for (const t of e.info.gamelist_back_two) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameList_Back_two.push(a);
                    }
                    y.GameList_Back_rolling = [];
                    for (const t of e.info.gamelist_back_rolling) {
                        let e = t, a = {
                            name: e.name,
                            icon: e.icon,
                            appid: e.appid,
                            path: e.path,
                            extra: e.extra,
                            type: e.icon_type,
                            iconLis: e.icon_list,
                            id: e.id
                        };
                        y.GameList_Back_rolling.push(a);
                    }
                    y.GameList_four = [];
                }
                y.WxGetScenesValue(e.sence), 0 == e.special_edition && (y.SpecialOff = !0), 1 == e.is_mp && (this.IsMp = !0), 
                0 != e.flag && y.SceneValueOpen && (y.AdFlag = !0), 1 == e.guide_flag_four && y.SceneValueOpen && (y.GuideFlag_one = !0), 
                1 == e.popup_video_flag && y.SceneValueOpen && (y.GuideFlag_two = !0), 1 == e.guide_flag_one && y.SceneValueOpen && (y.Guide_one = !0), 
                1 == e.guide_flag_two && y.SceneValueOpen && (y.Guide_two = !0), 1 == e.guide_flag_three && y.SceneValueOpen && (y.Guide_three = !0), 
                y.GameList.length > 0 && y.GameListBack.length > 0 && y.GameListOver.length > 0 && (y.SDKManagerLoadingFinsh = !0, 
                this.DebugFalg && (y.AdFlag = !0, y.GuideFlag_one = !0, y.GuideFlag_two = !0, y.Guide_one = !0, 
                y.Guide_two = !0, y.Guide_three = !0), y.XJSDKDownFinsh = !0);
            }), Laya.timer.once(500, this, () => {
                y.TryXJSDKManager();
            });
        }
        static TryXJSDKManager() {
            y.XJSDKDownFinsh || y.GetSDKData();
        }
        static WxGetScenesValue(e) {
            if (Laya.Browser.onMiniGame) {
                var t = y.PlatformObj.getLaunchOptionsSync();
                t.scene;
                for (const a of e) if (a == t.scene) {
                    y.SceneValueOpen = !0;
                    break;
                }
                console.log("当前场景值", t.scene), console.log("当前场景值状态", y.SceneValueOpen);
            }
        }
        static ExposureData(e) {
            var t = [];
            switch (e) {
              case 1:
                t = y.GameList;
                break;

              case 2:
                t = y.GameListBack;
                break;

              case 3:
                t = y.GameListOver;
                break;

              case 4:
                t = y.GameListBottom;
                break;

              case 5:
                t = y.GameListSide;
                break;

              case 6:
                t = y.GameList_Back_two;
                break;

              case 7:
                t = y.GameList_Back_rolling;
                break;

              case 8:
                t = y.GameList_four;
            }
            t && t.length > 0 && y.ExposureDataEvent(t);
        }
        static ExposureDataEvent(e) {
            if (Laya.Browser.onMiniGame) {
                var t = [];
                if (null != e && null != e && e.length > 0) {
                    for (let a = 0; a < e.length; a++) {
                        const s = e[a];
                        t.push(s.id);
                    }
                    y.PlatformObj.xiangjiao.exposureMiniProgram(t), console.log("曝光数据发送完成", t);
                }
            }
        }
        static clickMiniProgram(e) {
            Laya.Browser.onMiniGame && y.PlatformObj.xiangjiao.clickMiniProgram(e);
        }
        static SuccessNavMiniGame(e) {
            Laya.Browser.onMiniGame && y.PlatformObj.xiangjiao.navigateToMiniProgram(e);
        }
        static InitWXADCompoent() {
            Laya.Browser.onMiniGame && (y.CreatBanner(1, h.BannerId), y.CreatBanner(2, h.BannerId_1), 
            y.CreatBanner(3, h.BannerId_2), y.CreatInter(), y.CreatVideo());
        }
        static CreatBanner(e, t) {
            if (!t) return;
            if (!Laya.Browser.onMiniGame) return;
            let a = null;
            1 == e ? a = y.BannerObj1 : 2 == e ? a = y.BannerObj2 : 3 == e && (a = y.BannerObj3), 
            a && (a.destroy(), a = null);
            let s = y.PlatformObj.getSystemInfoSync(), i = 0, n = 0, o = 0;
            h.DeviceOrientation ? (i = .05 * s.screenWidth, n = .9 * s.screenWidth, o = s.screenHeight) : (i = .3 * s.screenWidth, 
            n = .4 * s.screenWidth, o = 5 * s.screenHeight), (a = y.PlatformObj.createBannerAd({
                adUnitId: t,
                style: {
                    left: i,
                    top: o,
                    width: n
                }
            })).onError(e => {
                console.log("广告banner错误信息", e), a = null;
            }), a.onLoad(() => {
                y.BannerAutorefrsh = 0;
            }), a.onResize(e => {
                a.style.top = s.screenHeight - e.height, a.style.left = (s.screenWidth - e.width) / 2;
            }), 1 == e ? y.BannerObj1 = a : 2 == e ? y.BannerObj2 = a : 3 == e && (y.BannerObj3 = a);
        }
        static ShowBanner() {
            y.BannerID %= 3, y.BannerID++, y.CurrentOpBanner = null, 1 == y.BannerID && y.BannerObj1 ? y.CurrentOpBanner = y.BannerObj1 : 2 == y.BannerID && y.BannerObj2 ? y.CurrentOpBanner = y.BannerObj2 : 3 == y.BannerID && y.BannerObj3 ? y.CurrentOpBanner = y.BannerObj3 : y.BannerObj1 ? (y.CurrentOpBanner = y.BannerObj1, 
            y.BannerID = 1) : y.BannerObj2 ? (y.CurrentOpBanner = y.BannerObj2, y.BannerID = 2) : y.BannerObj3 && (y.CurrentOpBanner = y.BannerObj3, 
            y.BannerID = 3), y.CurrentOpBanner && (y.CurrentOpBanner.show(), y.BannerID++), 
            null == y.BannerObj1 && y.CreatBanner(1, h.BannerId), null == y.BannerObj2 && y.CreatBanner(2, h.BannerId_1), 
            null == y.BannerObj3 && y.CreatBanner(3, h.BannerId_2);
        }
        static HideBanner() {
            y.BannerObj1 && y.BannerObj1.hide(), y.BannerObj2 && y.BannerObj2.hide(), y.BannerObj3 && y.BannerObj3.hide();
        }
        static CheckUpdate() {
            if (Laya.Browser.onMiniGame) {
                var e = y.PlatformObj.getUpdateManager();
                e.onCheckForUpdate(function(e) {
                    console.log(e.hasUpdate);
                }), e.onUpdateReady(function() {
                    y.PlatformObj.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success(t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                });
            }
        }
        static CreatVideo() {
            h.VideoId && (y.VideoObj = y.PlatformObj.createRewardedVideoAd({
                adUnitId: h.VideoId
            }), y.VideoObj.onError(e => {
                console.log("激励视频广告出错" + JSON.stringify(e)), y.VideosLoadFailCallback && y.VideosLoadFailCallback(), 
                y.VideosLoadFailCallback = null;
            }), y.VideoObj.onClose(e => {
                e && e.isEnded || void 0 === e ? (y.VideosAwardCallBack && y.VideosAwardCallBack(), 
                y.UpUmaData(4)) : (y.VideosUnfinshCallback && y.VideosUnfinshCallback(), y.UpUmaData(5));
            }), y.VideoObj.load().then(() => {}).catch(e => {
                y.VideoLinkFailCallback && y.VideoLinkFailCallback(e);
            }));
        }
        static CreatInter() {
            try {
                y.InterObj = y.PlatformObj.createInterstitialAd({
                    adUnitId: h.InterId
                });
            } catch (e) {
                console.error("插屏初始化失败");
            }
        }
        static Vibrate() {
            Laya.Browser.onMiniGame && y.PlatformObj.vibrateShort({
                success: e => {
                    console.log("短震动成功");
                },
                fail: e => {
                    console.log("短震动失败");
                }
            });
        }
        static ShowToast(e) {
          //  Laya.Browser.onMiniGame ? y.PlatformObj.showToast({
          //      title: e,
          //      duration: 2e3,
          //      icon: "none"
          //  }) : console.log(e);
        }
        static AutoJumpMiniGame(e, t) {
            if (y.GuideFlag_one) {
                var a = [];
                switch (e) {
                  case 1:
                    a = y.GameList;
                    break;

                  case 2:
                    a = y.GameListBack;
                    break;

                  case 3:
                    a = y.GameListOver;
                    break;

                  case 4:
                    a = y.GameListBottom;
                    break;

                  case 5:
                    a = y.GameListSide;
                    break;

                  case 6:
                    a = y.GameList_Back_two;
                    break;

                  case 7:
                    a = y.GameList_Back_rolling;
                }
                var s = a[Math.floor(Math.random() * a.length)];
                y.NavigateMiniGame(s, "自动跳转", t, !1);
            }
        }
        static NavigateMiniGame(e, t, a = null, s = !0) {
            let i = {
                [t]: e.name
            };
            if (console.log("点击小游戏跳转", i), Laya.Browser.onMiniGame) {
                s && y.clickMiniProgram(e.id);
                let t = e.appid, i = e.path;
                y.PlatformObj.navigateToMiniProgram({
                    appId: t,
                    path: i,
                    success(t) {
                        e.name;
                        y.SuccessNavMiniGame(e.id), y.setUmaData("nimiGamePass", {
                            sucess: e.name
                        });
                    },
                    fail() {
                        a && a(), y.setUmaData("nimiGamePass", {
                            fail: e.name
                        });
                    }
                });
            }
        }
        static setUmaData(e, t) {
            try {
                y.PlatformObj.uma.trackEvent(e, t);
            } catch (e) {}
        }
        static UpUmaData(e) {
            var t = "";
            switch (e) {
              case 0:
                t = "CloseInter";
                break;

              case 1:
                t = "ClickStartBtn";
                break;

              case 2:
                t = "gameStart";
                break;

              case 3:
                t = "gameover";
                break;

              case 4:
                t = "VideoSuccess";
                break;

              case 5:
                t = "VideoFail";
            }
            y.setUmaData(t, "");
        }
        static onNavButtonListen(e, t, a) {
            t.offAll(), t.on(Laya.Event.CLICK, this, () => {
                y.NavigateMiniGame(e, a);
            });
        }
        static onConfigNavButton(e, t) {
            var a = e.getChildByName("IMG"), s = e.getChildByName("NavName");
            s && (s.text = t.name), a.skin = t.icon, 2 == t.type ? (a.clipX = 3, a.clipY = 3, 
            a.autoPlay = !0, a.interval = 200, a.play()) : (a.clipX = 1, a.clipY = 1, a.stop());
        }
    }
    y.GameList = [], y.GameListBack = [], y.GameListOver = [], y.GameListBottom = [], 
    y.GameListSide = [], y.GameList_Back_two = [], y.GameList_Back_rolling = [], y.GameList_four = [], 
    y.IsMp = !1, y.SpecialOff = !1, y.ScenesValue = [ 1001, 1037, 1038, 1089, 1104 ], 
    y.AdFlag = !1, y.GuideFlag_one = !1, y.GuideFlag_two = !1, y.Guide_one = !1, y.Guide_two = !1, 
    y.Guide_three = !1, y.SDKManagerLoadingFinsh = !1, y.SeverConfigLoadingFinsh = !1, 
    y.ConstSeverConfigLoadingFinsh = !1, y.DoubleClickFalg = !1, y.isIOSPhone = !1, 
    y.isAndroid = !0, y.isIos = !0, y.SceneValueOpen = !1, y.FirstOnShow = !0, y.BannerObj1 = null, 
    y.BannerObj2 = null, y.BannerObj3 = null, y.BannerID = 1, y.InterADState = !1, y.EnableWXQuitUI = !1, 
    y.InterReadyTime = 0, y.BannerAutorefrsh = 0, y.CurrLoadingBannerIndex = 0, y.LoginFinsh = !1, 
    y.roleFinsh = !1, y.DebugFalg = !1, y.XJSDKDownFinsh = !1, y.RdTime = 3e3, y.BannerUpValue = 1500, 
    y.BoxClickAddValue = .2, y.BoxFrameSubValue = .01, y.ShowBoxBannerValue = .6, y.ConstSeverJsonPath = "https://constvaluesave-1300018364.cos.ap-chengdu.myqcloud.com/ConstParmJson.json";
    class p {
        static ArrayClear(e, t, a, s) {
            for (var i = t + a; t < i; ) e[t++] = s;
        }
        static ArrayCopy(e, t, a, s, i) {
            for (var n = t + i; t < n; ) a[s++] = e[t++];
        }
        static ArrayCopy1(e, t, a) {
            p.ArrayCopy(e, 0, t, 0, a);
        }
        static Int32ToShort(e) {
            return e << 16 >> 16;
        }
        static Int32ToByte(e) {
            return e << 24 >> 24;
        }
        static FloatToInt(e) {
            return Math.floor(e);
        }
        static MetaCopy(e, t) {
            for (var a in e || (e = {}), t || (t = {}), t) e[a] = t[a];
            return e;
        }
        static FloatTo16BitPCM(e, t) {
            for (var a = 0, s = 0, i = 0; i < e.length; i++) a = (a = Math.max(-1, Math.min(1, e[i]))) < 0 ? a * p.SHORT_MIN : a * p.SHORT_MAX, 
            t[i] = a, s += Math.abs(a);
            return s;
        }
        static AryRandom(e) {
            let t, a;
            for (let s = 0; s < e.length; s++) {
                do {
                    t = Math.floor(Math.random() * e.length);
                } while (t != s);
                a = e[t], e[t] = e[s], e[s] = a;
            }
        }
        static IsBit(e, t) {
            return 0 != (e & t);
        }
        static SetBit(e, t, a) {
            return a ? e |= t : e &= ~t, e;
        }
        static Format(e, ...t) {
            return "";
        }
        static onConfigNavButton(e, t, a) {
            if (!t) return;
            var s = e.getChildByName("IMG");
            if (s || (s = new Laya.Image(), e.addChildAt(s, 0), s.width = e.width, s.height = e.height, 
            s.pos(0, 0), s.name = "IMG"), s.skin = t.icon, 2 == t.icon_type) {
                let a = e.getChildByName("GifAnim");
                a || ((a = new Laya.Animation()).name = "GifAnim", e.addChildAt(a, e.numChildren), 
                a.pos(0, 0)), a.visible = !0, a.clear(), a.loadImages(t.icon_list), a.scale(s.width / 144, s.height / 144), 
                a.interval = 120, a.play();
            } else {
                s.visible = !0;
                let t = e.getChildByName("GifAnim");
                t && t.visible && (t.stop(), t.visible = !1, t.clear());
            }
            e.getChildByName("NavName") && (e.getChildByName("NavName").text = t.name, e.getChildByName("NavName").text = "精品游戏");
        }
        static RegisterClickByCaller(e, t, a, s, i = !0, n = "", o = !0) {
            e.on(Laya.Event.CLICK, this, () => {
                this.PlaySingleSound(n, o), a.apply(t, s);
            }), i && (e.on(Laya.Event.MOUSE_DOWN, this, () => {
                e.scale(.9, .9, !0);
            }), e.on(Laya.Event.MOUSE_UP, this, () => {
                e.scale(1, 1, !0);
            }), e.on(Laya.Event.MOUSE_OUT, this, () => {
                e.scale(1, 1, !0);
            }));
        }
        static RegisterContinueClickByCaller(e, t, a, s, i, n = !0, o = "", r = !0) {
            n && (e.on(Laya.Event.MOUSE_DOWN, this, () => {
                a.apply(t);
            }), e.on(Laya.Event.MOUSE_UP, this, () => {
                s.apply(t);
            }));
        }
        static PlaySingleSound(e, t = !0) {}
        static showRedPoint(e, t = !0) {
            let a = e.getChildByName("redPoint");
            a ? a.visible = t : t && (a || ((a = new Laya.Image()).skin = "common/zhu_button_tishi.png", 
            a.name = "redPoint", a.anchorX = .5, a.anchorY = .5, a.scaleX = a.scaleY = .5, e.addChild(a), 
            a.visible = !1, a.x = e.width - 10, a.y = 10), a.visible = t);
        }
        static toNumberStr(e, t) {
            if (/^(\d+(?:\.\d+)?)(e)([\-]?\d+)$/.test(e)) {
                var a = /^(\d{1,}(?:,\d{3})*\.(?:0*[1-9]+)?)(0*)?$/.exec(e.toFixed(t));
                return a ? a[1] : e.toFixed(t);
            }
            return "" + e;
        }
        static countDownTimeHandler(e) {
            if (e <= 0) return "00:00";
            let t = Math.floor(e / 60);
            t = 1 == (t + "").length ? "0" + t : t;
            let a = Math.ceil(e % 60);
            return t + ":" + (a = 1 == (a + "").length ? "0" + a : a);
        }
        static charHandler(e, t) {
            return e.length < t ? e : (e = e.slice(0, t), e += "...");
        }
        static hasProperty(e, t) {
            for (let a in t) if (t[a] === e) return !0;
            return !1;
        }
        static checkLinkTip() {
            if (p.isShowCheckLinkTip) return;
            p.isShowCheckLinkTip = !0;
            let e = new Laya.Dialog();
            e.width = Laya.stage.width, e.height = Laya.stage.height;
            let t = new Laya.Image();
            t.skin = "start/tip.png", t.sizeGrid = "25, 25 ,25 ,25", t.width = 400, t.height = 200, 
            t.centerY = -20, t.centerX = 0;
            let a = new Laya.Label();
            a.text = "网络错误, 请检查网络!", a.fontSize = 34, a.color = "#6c5a98", a.font = "Microsoft YaHei", 
            a.bold = !0, a.centerX = 0, a.anchorX = .5, a.centerY = 0, p.isShowCheckOnStartUp && (a.text = "网络错误，请重开游戏!"), 
            p.isUnLink = !0, t.addChild(a), e.addChild(t), e.popup(), this.logTiP = e;
        }
        static closeCheckLinkTip() {
            p.isShowCheckLinkTip && !p.isShowCheckOnStartUp && (p.isShowCheckLinkTip = !1, p.logTiP.close());
        }
        static getNowDateYMD() {
            let e = new Date();
            return e.getFullYear() + "" + (e.getMonth() + "") + (e.getDate() + "");
        }
        static formatSeconds(e) {
            var t = parseInt(e), a = 0, s = 0, i = 0;
            t > 60 && (a = parseInt((t / 60).toString()), t = parseInt((t % 60).toString()), 
            a > 60 && (s = parseInt((a / 60).toString()), a = parseInt((a % 60).toString()), 
            s > 24 && (i = parseInt((s / 24).toString()), s = parseInt((s % 24).toString()))));
            var n = "";
            return t > 0 && (n = "" + t), a > 0 && (n = a + ":" + n), s > 0 && (n = s + ":" + n), 
            i > 0 && (n = i + ":" + n), n;
        }
        static My2DTo3DPoint(e, t, a, s = !0) {
            let i = new Laya.Vector3(0, 0, 0), n = a.localToGlobal(new Laya.Point(t.x, t.y)), o = Laya.stage.width / 2 - Laya.stage.designWidth / 2, r = Laya.stage.height / 2 - Laya.stage.designHeight / 2;
            return s ? e.convertScreenCoordToOrthographicCoord(new Laya.Vector3(n.x + o, n.y + r, 0), i) : e.convertScreenCoordToOrthographicCoord(new Laya.Vector3(n.x, n.y, 0), i), 
            i;
        }
        static IsSamePoint(e, t) {
            return e.x == t.x && e.y == t.y && e.z == t.z;
        }
        static FindChildByName(e, t) {
            let a = t => {
                if (t.name == e) return t;
                let s = null;
                for (let i = 0; i < t.numChildren; i++) {
                    if (t.getChildAt(i).name == e) {
                        s = t.getChildAt(i);
                        break;
                    }
                    if (t.getChildAt(i).numChildren && (s = a(t.getChildAt(i)))) break;
                }
                return s;
            };
            if (t.name == e) return t;
            for (let e = 0; e < t.numChildren; e++) {
                let s = a(t.getChildAt(e));
                if (s) return s;
            }
            return null;
        }
    }
    p.INT_MAX = 2147483647, p.INT_MIN = -2147483648, p.SHORT_MAX = 32767, p.SHORT_MIN = 32768, 
    p.BYTE_MAX = 127, p.BYTE_MIN = 128, p.isShowCheckLinkTip = !1, p.isUnLink = !1, 
    p.isShowCheckOnStartUp = !0, p.logTiP = null;
    class m {}
    m.config = {
        EnableWxQuitUI: "1",
        FirshGuideRandomTime: 1.5,
        OtherGuideRandomTime: 3,
        GameTime: 120,
        BannerClickTime: 1.5,
        InterADState: "0",
        DoubleClick: "1",
        ToGame: "0"
    };
    class x extends Laya.Script {
        constructor() {
            super(...arguments), this.GameCtr = A.instance, this.openParam = {}, this.closeParma = {};
        }
        opened(e) {}
        closed(e) {}
        reShow(e) {}
        beHide(e) {}
        initMl() {}
        showMl() {}
        ShowJumpBtn1(e, t, a) {
            if (e.offAll(), !y.AdFlag) return y.ShowBanner(), void p.RegisterClickByCaller(e, t, a);
            let s = e.y;
            e.y = this.GameCtr.height - 100;
            let i = 1500;
            m.config.BannerClickTime && (i = 1e3 * m.config.BannerClickTime), Laya.timer.once(i, this, () => {
                e.y = s, y.ShowBanner(), Laya.timer.once(500, this, () => {
                    y.ShowInterAD(), p.RegisterClickByCaller(e, t, a);
                });
            });
        }
        VideoEvent(e, t = null) {
            Laya.Browser.onMiniGame && (y.VideosAwardCallBack = e, y.VideosUnfinshCallback = t || (() => {}), 
            y.ShowVideos());
        }
        static onNavButtonListen(e, t, a) {
            let s = () => {};
            "Box_MoreGameUI" != a && (s = x.onJumpFailCallback), e.offAll(), e.on(Laya.Event.CLICK, this, y.NavigateMiniGame, [ t, a, s ]);
        }
        static onJumpFailCallback() {
            //A.instance.openUI(A.instance.UIState.TwoMoregameUI);
        }
        static onNavButtonListen1(e, t, a) {
            let s = () => {};
            "Box_MoreGameUI" != a && (s = x.onJumpFailCallback1), e.offAll(), e.on(Laya.Event.CLICK, this, y.NavigateMiniGame, [ t, a, s ]);
        }
        static onJumpFailCallback1() {
           // A.instance.openUI(A.instance.UIState.ThreemoregameUI);
        }
    }
    class d extends Laya.Script3D {
        constructor() {
            super(...arguments), this.CameraDistance = new Laya.Vector3(-4.12, 2.58, 0), this.SecondCamDistance = new Laya.Vector3(-1.66, 2, 0);
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new d();
        }
    }
    class c extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        static onUINavRoate(e) {
            Laya.Tween.to(e, {
                rotation: -15
            }, 100, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                Laya.Tween.to(e, {
                    rotation: 15
                }, 200, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                    Laya.Tween.to(e, {
                        rotation: -15
                    }, 200, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                        Laya.Tween.to(e, {
                            rotation: 0
                        }, 100, Laya.Ease.linearIn);
                    }));
                }));
            }));
        }
        static GetPointDistance(e, t) {
            var a = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y);
            return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
        }
        static GetPointDistance3D(e, t) {
            var a = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y), i = Math.abs(e.z - t.z);
            return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2) + Math.pow(i, 2));
        }
        static GetAngle(e, t) {
            return 360 * (Math.atan2(e.x, e.y) - Math.atan2(t.x, t.y) / (2 * Math.PI));
        }
        static AddVector(e, t) {
            let a = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.add(e, t, a), a;
        }
        static SubVector(e, t) {
            let a = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.subtract(e, t, a), a;
        }
        static ScaleVector(e, t) {
            let a = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.scale(e, t, a), a;
        }
        static SavePointNum(e) {
            var t = parseFloat(e);
            if (!isNaN(t)) return t = Math.round(100 * e) / 100;
        }
        static RandomSortArray(e) {
            let t = e, a = e.length;
            for (var s = [], i = 0; i < a; i++) {
                var n = Math.floor(Math.random() * t.length);
                s.push(t[n]), t.splice(n, 1);
            }
            return s;
        }
        static UIAnim(e) {
            null != e && null != e && e.scale(0, 0);
            var t = {
                scale: 0
            };
            Laya.Tween.to(t, {
                scale: 1,
                update: new Laya.Handler(this, function() {
                    null != e && null != e && e.scale(t.scale, t.scale);
                })
            }, 100, Laya.Ease.linearIn, new Laya.Handler(this, function() {}));
        }
        static ClearAllAnim() {
            Laya.Tween.clearAll(this);
        }
        static GetBoxPoint(e, t, a, s) {
            var i = [];
            for (let o = 0; o < 2 * a; o++) for (let r = 0; r < 2 * s; r++) {
                var n = new Laya.Point(e - a + o, t - s + r);
                i.push(n);
            }
            return i;
        }
        static PlaySound(e) {
            Laya.SoundManager.playSound(e);
        }
        static ScrambleArray(e) {
            let t = [], a = [];
            for (let a = 0; a < e.length; a++) t.push(e[a]);
            for (let s = 0; s < e.length; s++) {
                let e = Math.round(Math.random() * (t.length - 1)), s = t.splice(e, 1);
                a.push(s[0]);
            }
            return a;
        }
    }
    !function(e) {
        e[e.UpWord = 0] = "UpWord", e[e.DownWord = 1] = "DownWord";
    }(a || (a = {})), function(e) {
        e[e.Settlement = 0] = "Settlement", e[e.stop = 1] = "stop", e[e.Running = 2] = "Running", 
        e[e.Fail = 3] = "Fail";
    }(s || (s = {})), function(e) {
        e[e.dig = 0] = "dig", e[e.put = 1] = "put";
    }(i || (i = {})), function(e) {
        e.Economic = "Economic", e.SkindModel = "SkindModel", e.Level = "Level";
    }(n || (n = {})), function(e) {
        e[e.inRocket = 0] = "inRocket", e[e.noRocket = 1] = "noRocket";
    }(o || (o = {})), function(e) {
        e[e.onDistance = 0] = "onDistance", e[e.noDistance = 1] = "noDistance";
    }(r || (r = {}));
    class z {
        constructor() {
            this.Hit = !1, z.instance = this, this.clickMouseDown(), this.clickMouseMove(), 
            this.clickMouseUp();
        }
        onUpdate() {}
        clickMouseDown() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        clickMouseMove() {
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        }
        clickMouseUp() {
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }
        onMouseDown() {
            this.Hit = !0, this.FirstPoint = new Laya.Vector3(Laya.stage.mouseX, 0, 0);
        }
        onMouseMove() {
            if (0 == I.instance.buttonswitch && this.Hit) {
                let e = new Laya.Vector3(Laya.stage.mouseX, 0, 0);
                this.TarPoint = c.SubVector(this.FirstPoint, e), this.TarPoint.x >= 50 && (this.TarPoint.x = 50), 
                this.TarPoint.x <= -50 && (this.TarPoint.x = -50), this.TarPoint.x <= -50 ? Laya.timer.loop(1, this, this.cameraright) : this.TarPoint.x >= 50 && Laya.timer.loop(1, this, this.cameraleft);
            }
        }
        onMouseUp() {
            this.Hit = !1, this.TarPoint = null, this.FirstPoint = null, Laya.timer.clear(this, this.cameraright), 
            Laya.timer.clear(this, this.cameraleft);
        }
        clear() {
            this.clearMouseDown(), this.clearMouseMove(), this.clearMouseUp();
        }
        clearMouseDown() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.clickMouseDown);
        }
        clearMouseMove() {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.clickMouseMove);
        }
        clearMouseUp() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.clickMouseUp);
        }
        cameraright() {
            I.instance.MainCamera.transform.rotate(new Laya.Vector3(0, 1, 0), !1, !1);
        }
        cameraleft() {
            I.instance.MainCamera.transform.rotate(new Laya.Vector3(0, -1, 0), !1, !1);
        }
    }
    class g extends Laya.Script3D {
        constructor() {
            super(...arguments), this.Speed = .3;
        }
        onAwake() {
            
            this.DisPlay = this.owner, this.DisPlay.transform.position = new Laya.Vector3(-5, 10, -3), 
            this.cameraController = new z(), this.cameraController = z.instance;
            this.isGuide = false;
        }
        onUpdate() {
            this.BuildCollider(), this.GetDistance(), this.RocketCollider(), this.GetWinDistance(), 
            this.LastPoint = this.DisPlay.transform.position.clone();
            this.berforguide();
        }
        BuildCollider() {
            let e = this.GetTriggerObs();
            A.instance.PlayingUICtr.GameState != s.Fail && A.instance.PlayingUICtr.GameState != s.stop && e.length > 0 && (A.instance.PlayingUICtr.GameState = s.Fail, 
            A.instance.MainUICtr.playerModelScene3D.removeSelf(), I.instance.map.removeSelf());
        }
        GetTriggerObs() {
            let e = c.ScaleVector(this.DisPlay.transform.position, 1);
            return I.instance.GameCollider.get(`x${Math.round(e.x)}z${Math.round(e.z)}`) || [];
        }
        GetTrigger() {
            let e = c.ScaleVector(this.DisPlay.transform.position, 1);
            return I.instance.RocketCollider.get(`x${Math.round(e.x)}z${Math.round(e.z)}`) || [];
        }
        RocketCollider() {
            this.GetTrigger().length > 0 && (console.log("2222"),this.DisPlay.transform.position = new Laya.Vector3(this.LastPoint.x, this.LastPoint.y, this.LastPoint.z));
        }
        GetDistance() {
            let e = c.GetPointDistance3D(new Laya.Vector3(I.instance.hook.transform.position.x, I.instance.hook.transform.position.y, I.instance.hook.transform.position.z), new Laya.Vector3(I.instance.Rocket.transform.position.x, I.instance.Rocket.transform.position.y, I.instance.Rocket.transform.position.z));
            A.instance.PlayingUICtr.RocketState = e < 4 ? o.inRocket : o.noRocket, c.GetPointDistance3D(new Laya.Vector3(I.instance.DisPlay.transform.position.x, I.instance.DisPlay.transform.position.y, I.instance.DisPlay.transform.position.z), new Laya.Vector3(I.instance.Rocket.transform.position.x, I.instance.Rocket.transform.position.y, I.instance.Rocket.transform.position.z)) < 2 && (this.DisPlay.transform.position = new Laya.Vector3(this.LastPoint.x, this.LastPoint.y, this.LastPoint.z));
        }
        GetWinDistance() {
            let e = c.GetPointDistance3D(new Laya.Vector3(I.instance.hook.transform.position.x, I.instance.hook.transform.position.y, I.instance.hook.transform.position.z), new Laya.Vector3(I.instance.arrow.transform.position.x, I.instance.arrow.y, I.instance.arrow.transform.position.z));
            A.instance.PlayingUICtr.WinState = e < 4 ? r.onDistance : r.noDistance;
        }
        berforguide(){
            //PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_shang.png"
            //PlayingUICtr.GameCtr.work.skin == "images/main/playing_icon_w2.png"
            let e = c.GetPointDistance3D(new Laya.Vector3(I.instance.hook.transform.position.x, I.instance.hook.transform.position.y, I.instance.hook.transform.position.z), new Laya.Vector3(I.instance.Rocket.transform.position.x, I.instance.Rocket.transform.position.y, I.instance.Rocket.transform.position.z));
            if((e<4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_xia.png")&&
            (A.instance.PlayingUICtr.GameCtr.work.skin != "images/main/playing_icon_w2.png")&&(I.instance.dighave==!1)){
               
                    
                   
                        this.guide1();
                        

                 
                
                
            }


            if((e<4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_shang.png")&&
            (A.instance.PlayingUICtr.GameCtr.work.skin != "images/main/playing_icon_w2.png")&&(I.instance.dighave==!1)){
               
                    
                    
                        this.guide2();

                  
                
                
            }
            if((e>=4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_shang.png")&&
            (A.instance.PlayingUICtr.GameCtr.work.skin == "images/main/playing_icon_w1.png")&&(I.instance.dighave==!1)){
               
                    
                var guide2= Laya.stage.getChildByName("guide2");
                if(guide2!=undefined){
                 guide2.destroy();
 
                }
                
                
            }
            if((e>=4)&&(I.instance.dighave==!1)){

               var guide1= Laya.stage.getChildByName("guide1");
               if(guide1!=undefined){
                guide1.destroy();

               }
            }
            let ew = c.GetPointDistance3D(new Laya.Vector3(I.instance.hook.transform.position.x, I.instance.hook.transform.position.y, I.instance.hook.transform.position.z), new Laya.Vector3(I.instance.arrow.transform.position.x, I.instance.arrow.y, I.instance.arrow.transform.position.z));
            if((I.instance.dighave==!0)&&(ew>=4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_shang.png")){
                this.guide1();

            }
            if((I.instance.dighave==!0)&&(ew>=4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_xia.png")){
                var guide2=Laya.stage.getChildByName("guide2");
                var guide1=Laya.stage.getChildByName("guide1");
               if(guide1!=undefined){
                guide1.destroy();
            }
            if(guide2!=undefined){
                guide2.destroy();
            }
            }
            if((I.instance.dighave==!0)&&(ew<=4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_shang.png")){
                this.guide1();

            }
            if((I.instance.dighave==!0)&&(ew<=4)&&(A.instance.PlayingUICtr.GameCtr.downword.skin=="images/main/playing_icon_xia.png")){
                this.guide2();

            }



            
        }
        guide2(){
            var guide2=Laya.stage.getChildByName("guide2");
            var guide1=Laya.stage.getChildByName("guide1");
            if(guide1!=undefined){
                guide1.destroy();
            }
            if(guide2==undefined){
                var guide2=new Laya.Image();
                guide2.skin="guide.png";
                guide2.name="guide2"
                guide2.right=170;
                guide2.bottom=150;
                guide2.zOrder=3000;
                Laya.stage.addChild(guide2);
                var c= Laya.Handler.create(this,function () {Laya.Tween.to(guide2,{bottom:170,right:190},500,null,d);},null,false)
                var d= Laya.Handler.create(this,function () {Laya.Tween.to(guide2,{bottom:150,right:170},500,null,c);},null,false)
                c.run();
            }
            
        }
        guide1(){
            var guide2=Laya.stage.getChildByName("guide2");
            var guide1=Laya.stage.getChildByName("guide1");
            if(guide2!=undefined){
                guide2.destroy();
            }
            if(guide1==undefined){
                var guide1=new Laya.Image();
                guide1.name="guide1"
                guide1.skin="guide.png";
                guide1.right=0;
                guide1.bottom=150;
                guide1.zOrder=3000;
                Laya.stage.addChild(guide1);
                var a= Laya.Handler.create(this,function () {Laya.Tween.to(guide1,{bottom:150,right:0},500,null,b);},null,false)
                var b= Laya.Handler.create(this,function () {Laya.Tween.to(guide1,{bottom:170,right:20},500,null,a);},null,false)
                a.run();
                
            }
            
        }
    }
    class C {}
    C.Pass_1 = [ {
        name: "Building1755581597590",
        px: .09890969,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building1755581597590",
        px: .04480968,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building741553332562",
        px: -.2288763,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "store741553332562",
        px: -.05909031,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000004,
        sy: .4,
        sz: .5000004
    }, {
        name: "Tables408223201223",
        px: -.2140763,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .07500969,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .07500969,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .0792107,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .07993978,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: .07682371,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.07347628,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.2275903,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.2120893,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.2113602,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: -.2082903,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.2082903,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.1476763,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .001896672,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .002625763,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: .0256097,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .0256097,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.2296903,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.1760763,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.1760763,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.1307033,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1299742,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: -.01997628,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.1466903,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "road781575353",
        px: 0,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: 0,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -2.980232e-8,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Rock120501550",
        px: -.04412822,
        py: 1350045e-11,
        pz: -.18237,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: -.03903487,
        py: .00294219,
        pz: -.187894,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.03448561,
        py: 986997e-10,
        pz: -.1797209,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.0393829,
        py: .005017919,
        pz: -.1781461,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Tar",
        px: -.095,
        py: .0058,
        pz: -.1906,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Birth",
        px: -.069,
        py: .0068,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Floor6500050000",
        px: -.0638,
        py: .001,
        pz: -.1889946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.02560001,
        py: .0009999871,
        pz: -.09129465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .01944143,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.063,
        py: .0009999871,
        pz: -.01449464,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .03201483,
        sy: .1,
        sz: .1
    }, {
        name: "Glass6500050000",
        px: -.05373935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .47535,
        sy: .5631202,
        sz: 1
    } ], C.Pass_2 = [ {
        name: "Building1755581597590",
        px: .158986,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building1755581597590",
        px: .104886,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building741553332562",
        px: -.1688,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "store741553332562",
        px: .0009859726,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000004,
        sy: .4,
        sz: .5000004
    }, {
        name: "Tables408223201223",
        px: -.154,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .139287,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .1400161,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: .1369,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.0134,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.167514,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.152013,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1512839,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.0876,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .06197295,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .06270204,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.169614,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.07062704,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.06989796,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: .0401,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.08661404,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Glass6500050000",
        px: .006336935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .4753467,
        sy: .5631217,
        sz: 1
    }, {
        name: "road781575353",
        px: 0,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -3.72529e-9,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0112,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0412,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0712,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1012,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0412,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0712,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1012,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .009399999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.03000002,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.06000004,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.09000005,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1200001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1500001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1800001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.2100001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "Birth",
        px: -.069,
        py: .0052,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Tar",
        px: .0372,
        py: .006200001,
        pz: -.0232,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Rock120501550",
        px: .08697177,
        py: 1350045e-11,
        pz: -.02396999,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: .09206513,
        py: .00294219,
        pz: -.02949397,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: .09661439,
        py: 986997e-10,
        pz: -.02132087,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: .0917171,
        py: .005017919,
        pz: -.01974608,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Floor6500050000",
        px: .0569,
        py: .0009999871,
        pz: -.02889465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.0009000003,
        py: .0009999871,
        pz: -.1618946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .01944143,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.06609999,
        py: .0009999871,
        pz: -.01449464,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .03201483,
        sy: .1,
        sz: .1
    } ], C.Pass_3 = [ {
        name: "Glass6500050000",
        px: .006336935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .4753467,
        sy: .5631217,
        sz: 1
    }, {
        name: "Building1755581597590",
        px: .158986,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building1755581597590",
        px: .104886,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Building741553332562",
        px: -.1688,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "store741553332562",
        px: .0009859726,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000004,
        sy: .4,
        sz: .5000004
    }, {
        name: "Tables408223201223",
        px: -.154,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .139287,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .1400161,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: .1369,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.0134,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.167514,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.152013,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1512839,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.0876,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .06197295,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .06270204,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "sosna1020331619236",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.169614,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.07062704,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.06989796,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826122,
        sy: .1421619,
        sz: .1511808
    }, {
        name: "ParkLight11527225130",
        px: .0401,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.08661404,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.1778,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.2078,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0112,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0412,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0712,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1012,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.03000002,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.06000004,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.09000005,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1200001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1500001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1800001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.2100001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .0389,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0689,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .09889999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .007100001,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000007,
        py: 0,
        pz: -.0412,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999969,
        py: 0,
        pz: -.07120001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999895,
        py: 0,
        pz: -.1012,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000025,
        py: 0,
        pz: -.009400003,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0798,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0498,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.01980001,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1116,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Rock120501550",
        px: -.02922823,
        py: 1350045e-11,
        pz: -.19887,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: -.02413487,
        py: .00294219,
        pz: -.204394,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.01958561,
        py: 986997e-10,
        pz: -.1962209,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.0244829,
        py: .005017919,
        pz: -.1946461,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Tar",
        px: -.1128,
        py: .0049,
        pz: -.1919,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Birth",
        px: .059,
        py: .0068,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Floor6500050000",
        px: .0569,
        py: .0009999871,
        pz: -.02039465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: .0164,
        py: .0009999871,
        pz: -.1649947,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .01944143,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.06609999,
        py: .0009999871,
        pz: -.1953946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04141407,
        sy: .1184047,
        sz: .1
    } ], C.Pass_4 = [ {
        name: "Glass6500050000",
        px: .006336935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .4753467,
        sy: .5631219,
        sz: 1
    }, {
        name: "Building1755581597590",
        px: .158986,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .500001,
        sy: .4,
        sz: .500001
    }, {
        name: "Building1755581597590",
        px: .104886,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .500001,
        sy: .4,
        sz: .500001
    }, {
        name: "Building741553332562",
        px: -.1688,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .500001,
        sy: .4,
        sz: .500001
    }, {
        name: "store741553332562",
        px: .0009859726,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000005,
        sy: .4,
        sz: .5000005
    }, {
        name: "Tables408223201223",
        px: -.154,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .139287,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .1400161,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826123,
        sy: .1421619,
        sz: .1511809
    }, {
        name: "ParkLight11527225130",
        px: .1369,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.0134,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.167514,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.152013,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1512839,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826123,
        sy: .1421619,
        sz: .1511809
    }, {
        name: "sosna1020331619236",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.0876,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .06197295,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .06270204,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826123,
        sy: .1421619,
        sz: .1511809
    }, {
        name: "sosna1020331619236",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.169614,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.07062704,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.06989796,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826123,
        sy: .1421619,
        sz: .1511809
    }, {
        name: "ParkLight11527225130",
        px: .0401,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.08661404,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "road781575353",
        px: 0,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: 0,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -1.490116e-8,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -2.980232e-8,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.03,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.06000001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.09,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: .0113,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.1456,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.1456,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.0774,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.0774,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Birth",
        px: -.0265,
        py: .0067,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Tar",
        px: -.1128,
        py: .0061,
        pz: -.1919,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Rock120501550",
        px: -.03722823,
        py: 1350045e-11,
        pz: -.18927,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: -.03213487,
        py: .00294219,
        pz: -.194794,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.02758561,
        py: 986997e-10,
        pz: -.1866209,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.0324829,
        py: .005017919,
        pz: -.1850461,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Floor6500050000",
        px: -.0663,
        py: .0009999871,
        pz: -.02039465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.0759,
        py: .0009999871,
        pz: -.09319465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .01944143,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.06609999,
        py: .0009999871,
        pz: -.1879947,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04141407,
        sy: .1184047,
        sz: .1
    } ], C.Pass_5 = [ {
        name: "Glass6500050000",
        px: .006336935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .4753467,
        sy: .5631222,
        sz: 1
    }, {
        name: "Building1755581597590",
        px: .158986,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000012,
        sy: .4,
        sz: .5000012
    }, {
        name: "Building1755581597590",
        px: .104886,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000012,
        sy: .4,
        sz: .5000012
    }, {
        name: "Building741553332562",
        px: -.1688,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .5000012,
        sy: .4,
        sz: .5000012
    }, {
        name: "store741553332562",
        px: .0009859726,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000006,
        sy: .4,
        sz: .5000006
    }, {
        name: "Tables408223201223",
        px: -.154,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .139287,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .1400161,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826124,
        sy: .1421619,
        sz: .151181
    }, {
        name: "ParkLight11527225130",
        px: .1369,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.0134,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.167514,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.152013,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1512839,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826124,
        sy: .1421619,
        sz: .151181
    }, {
        name: "sosna1020331619236",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.0876,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .06197295,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .06270204,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826124,
        sy: .1421619,
        sz: .151181
    }, {
        name: "sosna1020331619236",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.169614,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.07062704,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.06989796,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826124,
        sy: .1421619,
        sz: .151181
    }, {
        name: "ParkLight11527225130",
        px: .0401,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.08661404,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.1778,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.2078,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0112,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0412,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0712,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1012,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.03000002,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.06000004,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.09000005,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1200001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1500001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1800001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.2100001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .0389,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0689,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .09889999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .007100001,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000007,
        py: 0,
        pz: -.0412,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999969,
        py: 0,
        pz: -.07120001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999895,
        py: 0,
        pz: -.1012,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000025,
        py: 0,
        pz: -.009400003,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0798,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0498,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.01980001,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1116,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0422,
        py: 0,
        pz: -.1626,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0422,
        py: 0,
        pz: -.1308,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0487,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1087,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0169,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Rock120501550",
        px: -.02742822,
        py: 1350045e-11,
        pz: -.19897,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: -.02233487,
        py: .00294219,
        pz: -.204494,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.01778561,
        py: 986997e-10,
        pz: -.1963209,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.0226829,
        py: .005017919,
        pz: -.1947461,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Tar",
        px: -.1128,
        py: .005,
        pz: -.1919,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Birth",
        px: .0215,
        py: .007,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Floor6500050000",
        px: .0555,
        py: .0009999871,
        pz: -.02039465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: .081,
        py: .0009999871,
        pz: -.1634946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .01944143,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.06609999,
        py: .0009999871,
        pz: -.1941946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04141407,
        sy: .1184047,
        sz: .1
    } ], C.Pass_6 = [ {
        name: "Glass6500050000",
        px: .006336935,
        py: 0,
        pz: -.113,
        ex: 90,
        ey: 0,
        ez: 0,
        sx: .4753467,
        sy: .5631224,
        sz: 1
    }, {
        name: "Building1755581597590",
        px: .158986,
        py: .0002000816,
        pz: -.1130001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000014,
        sy: .4,
        sz: .5000014
    }, {
        name: "Building1755581597590",
        px: .104886,
        py: .0002000816,
        pz: .0659146,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: .5000014,
        sy: .4,
        sz: .5000014
    }, {
        name: "Building741553332562",
        px: -.1688,
        py: .0002000816,
        pz: -.1336854,
        ex: 0,
        ey: 181.6,
        ez: 0,
        sx: .5000014,
        sy: .4,
        sz: .5000014
    }, {
        name: "store741553332562",
        px: .0009859726,
        py: .0002000816,
        pz: -.2776001,
        ex: 0,
        ey: 121.1,
        ez: 0,
        sx: .5000007,
        sy: .4,
        sz: .5000007
    }, {
        name: "Tables408223201223",
        px: -.154,
        py: 0,
        pz: -.06308547,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .135086,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: .139287,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .1400161,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826126,
        sy: .1421619,
        sz: .1511811
    }, {
        name: "ParkLight11527225130",
        px: .1369,
        py: .0002000816,
        pz: -.05078545,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "dumpster90109106164",
        px: -.0134,
        py: .0002000816,
        pz: .05351457,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "ParkLight11527225130",
        px: -.167514,
        py: .0002000816,
        pz: -.0508,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: -.152013,
        py: .01709609,
        pz: -.2181349,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.1512839,
        py: .006838251,
        pz: -.2175631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826126,
        sy: .1421619,
        sz: .1511811
    }, {
        name: "sosna1020331619236",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.148214,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "dumpster90109106164",
        px: -.0876,
        py: .0002000816,
        pz: -.2613855,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Stone609287103",
        px: .06197295,
        py: .01709609,
        pz: -.268735,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: .06270204,
        py: .006838251,
        pz: -.2681631,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826126,
        sy: .1421619,
        sz: .1511811
    }, {
        name: "sosna1020331619236",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: .08568598,
        py: 0,
        pz: -.2565854,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Tables408223201223",
        px: -.169614,
        py: 0,
        pz: -.208,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna1020331619236",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "sosna240190743133",
        px: -.116,
        py: 0,
        pz: .05381462,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "Stone609287103",
        px: -.07062704,
        py: .01709609,
        pz: .08486506,
        ex: 1195283e-11,
        ey: 59.0698,
        ez: 318.2187,
        sx: .6093724,
        sy: .6093722,
        sz: .6093723
    }, {
        name: "Stone16210149587",
        px: -.06989796,
        py: .006838251,
        pz: .08543691,
        ex: 0,
        ey: 171.0216,
        ez: 0,
        sx: .1826126,
        sy: .1421619,
        sz: .1511811
    }, {
        name: "ParkLight11527225130",
        px: .0401,
        py: .0002000816,
        pz: .06581458,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Tables408223201223",
        px: -.08661404,
        py: 0,
        pz: .03891453,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .5,
        sy: .5,
        sz: .5
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.1778,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -7.450581e-9,
        py: 0,
        pz: -.2078,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.12,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.15,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.18,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1315,
        py: 0,
        pz: -.21,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.1706,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1102,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0802,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0502,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02020001,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0112,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0412,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0712,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1012,
        py: 0,
        pz: -.223,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.03000002,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.06000004,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.09000005,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1200001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1500001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.1800001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .118,
        py: 0,
        pz: -.2100001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: .0389,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0689,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .09889999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .007100001,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000007,
        py: 0,
        pz: -.0412,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999969,
        py: 0,
        pz: -.07120001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0006999895,
        py: 0,
        pz: -.1012,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0007000025,
        py: 0,
        pz: -.009400003,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.01980001,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1116,
        py: 0,
        pz: -.1103,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0422,
        py: 0,
        pz: -.1705,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0422,
        py: 0,
        pz: -.1387,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0487,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .1087,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: .0169,
        py: 0,
        pz: -.1193,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1321,
        py: 0,
        pz: -.04120002,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: -.1321,
        py: 0,
        pz: -.07120004,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: -.1321,
        py: 0,
        pz: -.1012001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: -.1321,
        py: 0,
        pz: -.00940001,
        ex: 0,
        ey: 90,
        ez: 0,
        sx: 1.000001,
        sy: 1,
        sz: 1.000001
    }, {
        name: "road781575353",
        px: -.0939,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.06389999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.0339,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.1257,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "road781575353",
        px: -.02009999,
        py: 0,
        pz: .0107,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Birth",
        px: .0215,
        py: .0066,
        pz: -.018,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Tar",
        px: -.0675,
        py: .0071,
        pz: -.1851,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: .01,
        sy: .01,
        sz: .01
    }, {
        name: "Rock120501550",
        px: -.03762823,
        py: 1350045e-11,
        pz: -.02497,
        ex: 5.502938e-15,
        ey: 6.50921,
        ez: -3.781435e-15,
        sx: .8530205,
        sy: 1.4217,
        sz: 1.421701
    }, {
        name: "Rock120501550",
        px: -.03253487,
        py: .00294219,
        pz: -.03049397,
        ex: -4482312e-12,
        ey: 6.509223,
        ez: 335.0221,
        sx: 1.421701,
        sy: .8530203,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.02798561,
        py: 986997e-10,
        pz: -.02232087,
        ex: 1408727e-11,
        ey: 6.509223,
        ez: .5710465,
        sx: .8530207,
        sy: 1.70604,
        sz: .8530207
    }, {
        name: "Rock120501550",
        px: -.0328829,
        py: .005017919,
        pz: -.02074608,
        ex: 358.0927,
        ey: 173.5643,
        ez: 353.6833,
        sx: 1.421702,
        sy: .85302,
        sz: .8530208
    }, {
        name: "Floor6500050000",
        px: .0555,
        py: .0009999871,
        pz: -.02039465,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04794789,
        sy: .1157245,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: .0789,
        py: .0009999871,
        pz: -.1661946,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .1,
        sy: .02486589,
        sz: .1
    }, {
        name: "Floor6500050000",
        px: -.06609999,
        py: .0009999871,
        pz: -.01879464,
        ex: 90,
        ey: 90,
        ez: 0,
        sx: .04916263,
        sy: .1184047,
        sz: .1
    } ];
    class S {
        constructor() {
            this.datastore = new Array();
        }
        set(e, t) {
            this.datastore[e] = t;
        }
        get(e) {
            return this.datastore[e];
        }
        remove(e) {
            delete this.datastore[e];
        }
        clear() {
            for (var e in this.datastore) delete this.datastore[e];
        }
        count() {
            var e = 0;
            for (var t in Object.keys(this.datastore)) ++e;
            return e;
        }
    }
    class u {
        constructor() {
            this.Coin = 0;
        }
    }
    class L {
        constructor() {
            this.Skin = [ !0, !1, !1, !1, !1, !1 ], this.InUserSkin = 0;
        }
    }
    class level {
        constructor() {
            this.level = 1;
        }
    }
    class G {
        constructor() {
            G.instance = this, this.init();
        }
        init() {
            //localstorage
            this.Economic = this.getData(n.Economic) || new u(), this.SkinModel = this.getData(n.SkindModel) || new L();
            this.Level = this.getData(n.Level) || new level();
            

        }
        addCoin(e) {
            this.Economic.Coin += e, this.setData(n.Economic, this.Economic);
        }
        reduceCoin(e) {
            this.Economic.Coin -= e, this.setData(n.Economic, this.Economic);
        }
        addLevel(e) {
            this.Level.level += e, this.setData(n.Level, this.Level);
        }
        addSkin(e) {
            this.SkinModel.Skin[e] = !0, this.setData(n.SkindModel, this.SkinModel);
        }
        SwitchInUseSkin(e) {
            this.SkinModel.InUserSkin = e, this.setData(n.SkindModel, this.SkinModel);
        }
        getData(e) {
            console.log(e)
            console.log("Laya.LocalStorage.getJSON(e)Laya.LocalStorage.getJSON(e)")
            console.log(Laya.LocalStorage.getJSON(e))
            return Laya.LocalStorage.getJSON(e);
        }
        setData(e, t) {
            Laya.LocalStorage.setJSON(e, t);
        }
    }
    class w extends Laya.Script3D {
        onAwake() {
            this.display = this.owner, Laya.timer.frameLoop(1, this, () => {
                this.display.transform.rotate(new Laya.Vector3(1, 0, 0), !0, !1);
            });
        }
    }
    class I extends Laya.Script3D {
        constructor() {
            super(...arguments), this.GameCollider = new S(), this.RocketCollider = new S(), 
            this.buttonswitch = !1, this.dighave = !1;
        }
        onAwake() {
            I.instance = this, this.DisPlay = this.owner, this.init(), Laya.timer.loop(500, this, () => {
                this.DisPlay.transform.position;
            });
        }
        onUpdate() {}
        init() {
            //3dinit
            let e;
            this.light = new Laya.DirectionLight(), this.light.transform.rotate(new Laya.Vector3(-60, 223, 0), !1, !1),
            
            
            this.DisPlay.transform.position = new Laya.Vector3(0, 1, 0);
            let t = G.instance.SkinModel.InUserSkin;
            e = d.instance.ShowScene.getChildByName("Player" + (t + 1)).clone(), d.instance.GameScene.getChildByName("Directional Light").active = !1, 
            this.arrow = d.instance.ShowScene.getChildByName("arrow").clone(), this.Rocket = d.instance.GameScene.getChildByName("Map_Prefabs").getChildByName("Rock120501550"), 
            A.instance.MainUICtr.playerModelScene3D.addChild(e), A.instance.MainUICtr.playerModelScene3D.addChild(this.arrow), 
            this.playerleftrota = e.getChildAt(0).getChildByName("Excavator").getChildAt(0), 
            this.stone = this.playerleftrota.getChildAt(0).getChildAt(0).getChildAt(0).getChildByName("RockAnimParent"), 
            this.smallerStone = this.playerleftrota.getChildAt(0).getChildAt(0).getChildAt(0).getChildByName("Small_Stone (12)"), 
            this.hook = this.playerleftrota.getChildAt(0).getChildAt(0).getChildAt(0), this.playerleftrota.addChild(this.light), 
            this.smallerStone.active = !1, this.DisPlay = e, this.Player = e.addComponent(g), 
            this.Player.DisPlay = e, this.MainCamera = e.getChildByName("Main Camera"), this.maincamera = new Laya.Camera(), 
            this.maincamera.transform.position = new Laya.Vector3(-.02, 1.48, -3.9), this.maincamera.transform.rotate(new Laya.Vector3(-18, 181, 0), !1, !1), 
            this.MainCamera.addChild(this.maincamera), this.MainCamera.active = !0, this.Distance = d.instance.CameraDistance.clone(), 
            this.SecondCamera = this.playerleftrota.getChildByName("Second Camera"), this.SecondCamera = new Laya.Camera(), 
            window.display=this.Player,
            
            this.SecondCamera.transform.position = new Laya.Vector3(0, .18, -.2), this.SecondCamera.transform.rotate(new Laya.Vector3(-20, 180, 0), !1, !1), 
            this.playerleftrota.addChild(this.SecondCamera), this.SecondCamera.active = !1;
            let a = d.instance.GameScene.getChildByName("Map_Prefabs");
            this.map = new Laya.Sprite3D(), d.instance.GameScene.addChild(this.map), this.map.name = "map", 
            this.map.transform.position = new Laya.Vector3(0, 0, 0), a.active = !1;
            let s = A.instance.level.text;
            C[`Pass_${s}`].forEach(e => {
              
                let t = a.getChildByName(e.name).clone();
                this.map.addChild(t);
                let s = new Laya.Vector3(200 * e.sx, 200 * e.sy, 200 * e.sz), i = new Laya.Vector3(e.ex, -e.ey, e.ez), n = new Laya.Vector3(200 * -e.px, 200 * e.py, 200 * e.pz);
                t.transform.position = n, t.transform.rotationEuler = i, t.transform.scale = s, 
                t.active = !0;
                let o = t, r = o.meshRenderer.bounds.getExtent();
                if ("Floor6500050000" == e.name || "Glass6500050000" == e.name) ; else if ("Rock120501550" == e.name) this.Rocket = t, 
                this.setRocketCollider(o, r), this.arrow.transform.position = new Laya.Vector3(t.transform.position.x, 4, t.transform.position.z), 
                this.arrow.addComponent(w), this.arrow.active = !0; else if ("Birth" == e.name) this.BirthPos = t, 
                this.DisPlay.transform.position=new Laya.Vector3(this.BirthPos.transform.position.x,this.BirthPos.transform.position.y+0.8,this.BirthPos.transform.position.z),
                    window.carcar=this.DisPlay,this.BirthPos.active = !1; else if ("Tar" == e.name) {
                    this.Tar = t.transform.position, t.active = !1;
                    
                } else this.SetCollider(o, r);
                
            });
            var cirlce=new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(4, 0.2, 20));
            console.log(A.instance.MainUICtr.playerModelScene3D)
            A.instance.MainUICtr.playerModelScene3D.addChild(cirlce);
            cirlce.transform.position=new Laya.Vector3(I.instance.Tar.x, 0.5, I.instance.Tar.z);
            


        }
        setRocketCollider(e, t) {
            let a = e.transform.position, s = Math.floor(t.x), i = Math.floor(t.z);
            s < 1 && (s = 1), i < 1 && (i = 1);
            let n = c.ScaleVector(a, 1);
            c.GetBoxPoint(Math.floor(n.x), Math.floor(n.z), s, i).forEach(e => {
                this.RocketCollider.get(`x${e.x}z${e.y}`);
                this.RocketCollider.set(`x${e.x}z${e.y}`, "boxArr");
            });
        }
        SetCollider(e, t) {
            //setcollider
            
            let a = e.transform.position, s = Math.floor(t.x), i = Math.floor(t.z);
            s < 1 && (s = 1), i < 1 && (i = 1);
            let n = c.ScaleVector(a, 1);
            c.GetBoxPoint(Math.floor(n.x), Math.floor(n.z), s, i).forEach(e => {
                this.GameCollider.get(`x${e.x}z${e.y}`);
                this.GameCollider.set(`x${e.x}z${e.y}`, "boxArr");
            });
        }
    }
    class f {
        constructor() {
            this._uiPath = "res/assets/sound/", this.btnClick = "anjianyin", this.gameOver = "gameOver", 
            this.eat = "eat", this.upGrade = "upGrade", this.eatEnemy = "eatEnemy", this.dead = "dead", 
            this.win = "win", this.speedup = "speedup", this.lose = "lose", this.game_bgm = "game_bgm", 
            this.singleSoundInfos = {}, this.soundPool = new Array();
        }
        static get instance() {
            return null == f._soundManager && (f._soundManager = new f()), f._soundManager;
        }
        PlaySingleSound(e, t = 1, a = !0) {
            e += ".mp3", e = this._uiPath + e;
        }
        StopPlaySingleSound(e) {
            e += ".mp3", e = this._uiPath + e;
        }
        PlaySound(e, t, a = null) {
         //  if (Laya.Browser.window.ws) {
         //      var s = Laya.Browser.window.ws.createInnerAudioContext();
         //      s.src = this._uiPath + e + ".mp3", s.loop = 0 == t, s.play();
         //      var i = new k(s.src, s);
         //      return this.soundPool.push(i), s.onEnded(() => {
         //          this.OnSoundEnd(i);
         //      }), i;
         //  }
            Laya.SoundManager.playSound(this._uiPath + e + ".mp3", t);
        }
        OnSoundEnd(e) {
            var t = this.soundPool.indexOf(e);
            -1 != t && this.soundPool.splice(t, 1), e.Destroy();
        }
    }
    class k {
        constructor(e, t) {
            this.path = e, this.audio = t;
        }
        Destroy() {
            this.audio.destroy();
        }
        Mute(e) {
            this.audio.volume = e ? 0 : 1;
        }
    }
    class B extends x {
        constructor() {
            super(...arguments), this.Speed = .001, this.leftClick = !1, this.rightClick = !1, 
            this.ani = new Laya.Animator(), this.stoneani = new Laya.Animator(), this.dighave = !1;
        }
        onAwake() {
            
            p.RegisterContinueClickByCaller(this.GameCtr.player_up, this, this.MoveDown, this.Mouseup), 
            p.RegisterContinueClickByCaller(this.GameCtr.leftrota, this, this.LeftRota, this.LeftUp), 
            p.RegisterContinueClickByCaller(this.GameCtr.rightrota, this, this.RightRota, this.RightUp), 
            p.RegisterContinueClickByCaller(this.GameCtr.player_under, this, this.MoveUnder, this.Mouseup), 
            p.RegisterContinueClickByCaller(this.GameCtr.player_left, this, this.PlayLeft, this.PlayLeftUp), 
            p.RegisterContinueClickByCaller(this.GameCtr.player_right, this, this.PlayRight, this.PlayRightUp), 
            p.RegisterClickByCaller(this.GameCtr.downword, this, this.Downword), p.RegisterClickByCaller(this.GameCtr.work, this, this.Dig), 
            p.RegisterContinueClickByCaller(this.GameCtr.cameraleft, this, this.CameraLeft, this.CameraLeftUp), 
            p.RegisterContinueClickByCaller(this.GameCtr.cameraright, this, this.CameraRight, this.CameraRightUp), 
            p.RegisterClickByCaller(this.GameCtr.camera, this, this.SwitchCamera), p.RegisterClickByCaller(this.GameCtr.playback, this, this.Playback), 
            p.RegisterClickByCaller(this.GameCtr.playmoregame, this, this.Playmoregame);
        }
        onResize() {
            this.GameCtr.PlayingUI_Box.width = Laya.stage.width, this.GameCtr.PlayingUI_Box.height = Laya.stage.height;
        }
        opened() {
            I.instance.MainCamera.active = !1, I.instance.SecondCamera.active = !0
            //f.instance.PlaySound(f.instance.game_bgm, 0)
            Laya.SoundManager.playMusic(f.instance._uiPath+f.instance.game_bgm+".mp3",0)
            , this.GameState = s.Running, this.playerstate = a.UpWord, 
            this.workstate = i.put, this.RocketState = o.noRocket, y.HideBanner(), 1 == y.AdFlag ? (this.GameCtr.playmoregame.visible = !0, 
            this.GameCtr.playback.visible = !0) : (this.GameCtr.playmoregame.visible = !1, this.GameCtr.playback.visible = !1);
            Laya.stage.on(Laya.Event.KEY_DOWN,this,this.keydown);
            Laya.stage.on(Laya.Event.KEY_UP,this,this.keyup);
           
            this.arrowPos=new Laya.Vector3(I.instance.arrow.transform.position.x,I.instance.arrow.transform.position.y,I.instance.arrow.transform.position.z)
            
        }
        keydown(e){
                
                switch (e.keyCode){
                    case 38:
                        this.MoveDown();
                        break;

                    case 37:
                        this.PlayLeft();
                        break;
                    case 39:
                        this.PlayRight();
                        break;
                    case 40:
                        this.MoveUnder();
                        break;
                    case 87:
                        if(this.GameCtr.downword.skin=="images/main/playing_icon_shang.png"){
                            this.Upword();
                        }
                        else{
                            this.Downword();  
                        }
                        break;
                    case 65:
                        this.LeftRota();
                        break;
                    case 68:
                        this.RightRota();
                        break;    

                        
                    case 83:
                        if(this.GameCtr.work.visible==!0){
                            if(this.GameCtr.work.skin == "images/main/playing_icon_w2.png"){
                                this.Put();
    
                            }   
                            else{
                                this.Dig();
                            } 
                        }

                  




                }


            

        }
        keyup(e){
            switch (e.keyCode){
                case 38:
                    this.Mouseup();
                case 37:
                    this.PlayLeftUp();
                    break;
                case 39:
                    this.PlayRightUp();
                    break; 
                case 40:
                    this.Mouseup();
                    break;  
                case 65:
                    this.LeftUp();
                    break;  
                case 68:
                    this.RightUp();
                    break;           

            }

        }
        Playback() {
            //this.GameCtr.openUI(this.GameCtr.UIState.MoreGameUI);
        }
        Playmoregame() {
           // this.GameCtr.openUI(this.GameCtr.UIState.ThreemoregameUI);
        }
        onUpdate() {
            this.FindGameState();
            
        }
        MoveDown() {
            I.instance.buttonswitch = !0, Laya.timer.loop(1, this, this.movedown);
          
        }
        movedown() {
           // let e = new Laya.Vector3(0, 0, .04);
            if (1 == this.leftClick) {
                let e = new Laya.Vector3(0, 0, .04);
                I.instance.Player.DisPlay.transform.rotate(new Laya.Vector3(0, .5, 0), !1, !1), 
                I.instance.Player.DisPlay.transform.translate(e, !0);
            } else if (this.rightClick) {
                let e = new Laya.Vector3(0, 0, .04);
                I.instance.Player.DisPlay.transform.rotate(new Laya.Vector3(0, -.5, 0), !1, !1), 
                I.instance.Player.DisPlay.transform.translate(e, !0);
            } else {
                let e = new Laya.Vector3(0, 0, .04);
                I.instance.Player.DisPlay.transform.translate(e, !0);
            }
        }
        MoveUnder() {
            I.instance.buttonswitch = !0, Laya.timer.loop(1, this, this.moveunder), Laya.timer.loop(500, this, () => {
                I.instance.DisPlay.transform.position;
            });
        }
        moveunder() {
            if (this.leftClick) {
                let e = new Laya.Vector3(0, 0, -.04);
                I.instance.DisPlay.transform.rotate(new Laya.Vector3(0, -.5, 0), !1, !1), I.instance.Player.DisPlay.transform.translate(e, !0);
            } else if (this.rightClick) {
                let e = new Laya.Vector3(0, 0, -.04);
                I.instance.Player.DisPlay.transform.rotate(new Laya.Vector3(0, .5, 0), !1, !1), 
                I.instance.Player.DisPlay.transform.translate(e, !0);
            } else {
                let e = new Laya.Vector3(0, 0, -.04);
                I.instance.Player.DisPlay.transform.translate(e, !0);
            }
        }
        LeftRota() {
            I.instance.buttonswitch = !0, Laya.timer.loop(1, this, this.leftrota);
        }
        leftrota() {
            I.instance.playerleftrota.transform.rotate(new Laya.Vector3(0, 2, 0), !1, !1);
        }
        LeftUp() {
            I.instance.buttonswitch = !1, Laya.timer.clear(this, this.leftrota);
        }
        RightRota() {
            I.instance.buttonswitch = !0, Laya.timer.loop(1, this, this.rightrota);
        }
        rightrota() {
            I.instance.playerleftrota.transform.rotate(new Laya.Vector3(0, -2, 0), !1, !1);
        }
        RightUp() {
            I.instance.buttonswitch = !1, Laya.timer.clear(this, this.rightrota);
        }
        Mouseup() {
            I.instance.buttonswitch = !1, Laya.timer.clear(this, this.movedown), Laya.timer.clear(this, this.moveunder);
        }
        PlayLeft() {
            this.leftClick = !0;
        }
        PlayLeftUp() {
            this.leftClick = !1;
        }
        PlayRight() {
            this.rightClick = !0;
        }
        PlayRightUp() {
            this.rightClick = !1;
        }
        Upword() {
            this.playerstate != a.UpWord && (this.workstate == i.dig ? (this.ani.play("popUp"), 
            this.changePlayerState(a.UpWord), Laya.timer.once(1500, this, () => {
                this.GameCtr.downword.offAll(), this.GameCtr.downword.skin = "images/main/playing_icon_xia.png", 
                p.RegisterClickByCaller(this.GameCtr.downword, this, this.Downword);
            })) : (this.ani.play("up"), this.changePlayerState(a.UpWord), this.GameCtr.work.visible = !1, 
            Laya.timer.once(1300, this, () => {
                this.GameCtr.downword.offAll(), this.GameCtr.downword.skin = "images/main/playing_icon_xia.png", 
                p.RegisterClickByCaller(this.GameCtr.downword, this, this.Downword);
            })));
        }
        Downword() {
            this.ani = I.instance.Player.DisPlay.getComponent(Laya.Animator), this.playerstate != a.DownWord && (this.workstate == i.dig ? (this.ani.play("popDown"), 
            this.changePlayerState(a.DownWord), Laya.timer.once(1500, this, () => {
                this.GameCtr.downword.offAll(), this.GameCtr.downword.skin = "images/main/playing_icon_shang.png", 
                p.RegisterClickByCaller(this.GameCtr.downword, this, this.Upword), this.GameCtr.work.visible = !0;
            })) : (this.ani.play("down"), this.changePlayerState(a.DownWord), Laya.timer.once(1300, this, () => {
                this.GameCtr.downword.offAll(), this.GameCtr.downword.skin = "images/main/playing_icon_shang.png", 
                p.RegisterClickByCaller(this.GameCtr.downword, this, this.Upword), this.GameCtr.work.visible = !0;
            })));
        }
        changePlayerState(e) {
            e != this.playerstate && (this.playerstate = e);
        }
        Dig() {
            
            
            //f.instance.PlaySound(f.instance.upGrade, 1)
            Laya.SoundManager.playSound(f.instance._uiPath+f.instance.upGrade+".mp3",1)
            , this.workstate != i.dig && (this.RocketState == o.inRocket ? (windowlog.getInstance().log("Succeed!",undefined,-160).fontSize=50,I.instance.dighave = !0, 
            I.instance.arrow.transform.position = new Laya.Vector3(I.instance.Tar.x, 4, I.instance.Tar.z), 
            this.ani.play("popStone"), I.instance.smallerStone.active = !0, this.workstate = i.dig, 
            Laya.timer.once(1300, this, () => {
                this.GameCtr.work.offAll(), this.GameCtr.work.skin = "images/main/playing_icon_w2.png", 
                p.RegisterClickByCaller(this.GameCtr.work, this, this.Put);
            })) : (windowlog.getInstance().log("Miss!",undefined,-160).fontSize=50,this.ani.play("popStone"), this.workstate = i.dig, Laya.timer.once(1300, this, () => {
                this.GameCtr.work.offAll(), this.GameCtr.work.skin = "images/main/playing_icon_w2.png", 
                p.RegisterClickByCaller(this.GameCtr.work, this, this.Put);
            })));
        }
        Put() {
            

            //put
            this.workstate != i.put && (this.playerstate == a.UpWord ? 1 == I.instance.dighave ? (this.stoneani = I.instance.stone.getComponent(Laya.Animator), 
            I.instance.stone.active = !0, this.WinState == r.onDistance ? (this.ani.play("putThing"), 
            //f.instance.PlaySound(f.instance.speedup, 1)
            Laya.SoundManager.playSound(f.instance._uiPath+f.instance.speedup+".mp3",1)
            , Laya.timer.once(1e3, this, () => {
                this.stoneani.play("stoneAnim");
            }), Laya.timer.once(2300, this, () => {
                this.GameState = s.Settlement, I.instance.stone.active = !1, this.GameCtr.work.visible = !1, 
                this.GameCtr.work.skin = "images/main/playing_icon_w1.png", p.RegisterClickByCaller(this.GameCtr.work, this, this.Dig);
            })) : (this.ani.play("putThing"), I.instance.smallerStone.active = !1, this.workstate = i.put, 
            Laya.timer.once(1e3, this, () => {
                this.stoneani.play("stoneAnim");
            }), Laya.timer.once(2300, this, () => {
                I.instance.stone.active = !1, this.GameCtr.work.visible = !1, this.GameCtr.work.skin = "images/main/playing_icon_w1.png", 
                p.RegisterClickByCaller(this.GameCtr.work, this, this.Dig);
            }),I.instance.dighave=!1, windowlog.getInstance().log("Lost") ,I.instance.arrow.transform.position=this.arrowPos,windowlog.getInstance().log(""),console.log("lost")
            
            )) : (this.ani.play("putThing"), this.workstate = i.put, Laya.timer.once(1300, this, () => {
                this.GameCtr.work.visible = !1, this.GameCtr.work.skin = "images/main/playing_icon_w1.png", 
                p.RegisterClickByCaller(this.GameCtr.work, this, this.Dig);
            })) : (this.ani.play("outStone"), this.workstate = i.put, Laya.timer.once(1300, this, () => {
                this.GameCtr.work.offAll(), this.GameCtr.work.skin = "images/main/playing_icon_w1.png", 
                p.RegisterClickByCaller(this.GameCtr.work, this, this.Dig);
            }),I.instance.dighave=!1,windowlog.getInstance().log("Lost") ,I.instance.arrow.transform.position=this.arrowPos,windowlog.getInstance().log(""),console.log("lost")));
        }
        CameraLeft() {
            Laya.timer.loop(1, this, this.cameraleft);
        }
        cameraleft() {
            I.instance.MainCamera.transform.rotate(new Laya.Vector3(0, -1, 0), !1, !1);
        }
        CameraLeftUp() {
            Laya.timer.clear(this, this.cameraleft);
        }
        CameraRight() {
            Laya.timer.loop(1, this, this.cameraright);
        }
        cameraright() {
            I.instance.MainCamera.transform.rotate(new Laya.Vector3(0, 1, 0), !1, !1);
        }
        CameraRightUp() {
            Laya.timer.clear(this, this.cameraright);
        }
        SwitchCamera() {
            I.instance.MainCamera.active ? (I.instance.MainCamera.active = !1, I.instance.SecondCamera.active = !0) : (I.instance.SecondCamera.active = !1, 
            I.instance.MainCamera.active = !0);
        }
        SettlementGame() {
            var guide2=Laya.stage.getChildByName("guide2");
            var guide1=Laya.stage.getChildByName("guide1");
           if(guide1!=undefined){
            guide1.destroy();
        }
        if(guide2!=undefined){
            guide2.destroy();
        }
            Laya.SoundManager.stopAllSound(), f.instance.PlaySound(f.instance.win, 1), this.GameCtr.closeUI(this.GameCtr.UIState.PlayingUI), 
            y.AdFlag ? (console.log("")) : this.GameCtr.openUI(this.GameCtr.UIState.SettlementUI), 
            this.GameState = s.stop, Laya.timer.clear(this, this.movedown), Laya.timer.clear(this, this.moveunder), 
            Laya.timer.clear(this, this.rightrota), Laya.timer.clear(this, this.leftrota), this.GameCtr.downword.skin = "images/main/playing_icon_xia.png", 
            this.GameCtr.work.skin = "images/main/playing_icon_w1.png", this.GameCtr.work.visible = !1, 
            this.GameCtr.downword.offAll(), p.RegisterClickByCaller(this.GameCtr.downword, this, this.Downword), 
            I.instance.dighave = !1, A.instance.MainUICtr.playerModelScene3D.removeSelf(), I.instance.map.removeSelf();
        }
        FailGame() {
            Laya.SoundManager.stopAllSound(), f.instance.StopPlaySingleSound(f.instance.game_bgm), 
            f.instance.PlaySound(f.instance.lose, 1), this.GameCtr.closeUI(this.GameCtr.UIState.PlayingUI), 
            y.AdFlag ? (1) : this.GameCtr.openUI(this.GameCtr.UIState.FailUI), 
            this.GameState = s.stop, Laya.timer.clear(this, this.movedown), Laya.timer.clear(this, this.moveunder), 
            Laya.timer.clear(this, this.rightrota), Laya.timer.clear(this, this.leftrota), this.GameCtr.downword.skin = "images/main/playing_icon_xia.png", 
            this.GameCtr.work.skin = "images/main/playing_icon_w1.png", this.GameCtr.work.visible = !1, 
            this.GameCtr.downword.offAll(), p.RegisterClickByCaller(this.GameCtr.downword, this, this.Downword), 
            I.instance.dighave = !1;
        }
        FindGameState() {
            switch (this.GameState) {
              case s.Settlement:
                this.SettlementGame();
                break;

              case s.Fail:
                this.FailGame();
                break;

              case s.stop:
            }
        }
    }
    class U extends Laya.Script3D {
        onAwake() {
            this.display = this.owner, Laya.timer.frameLoop(1, this, () => {
                this.display.transform.rotate(new Laya.Vector3(0, 1, 0), !0, !1);
            });
        }
    }
    class v extends x {
        constructor() {
            super(...arguments), this.SkinId = 0;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.shop_back, this, this.CloseShop), 
            p.RegisterClickByCaller(this.GameCtr.turnlast, this, this.SkinLast), p.RegisterClickByCaller(this.GameCtr.turnnext, this, this.SkinNext), 
            p.RegisterClickByCaller(this.GameCtr.shop_coin, this, this.CoinGet), p.RegisterClickByCaller(this.GameCtr.shop_video, this, this.VideoGet);
            p.RegisterClickByCaller(this.GameCtr.shop_have,this,this.useSkin)
            var adCoin=new Laya.Image();
            adCoin.skin="iconAD.png";
            this.GameCtr.shop_video.addChild(adCoin);
            adCoin.centerY=-6;
            adCoin.centerX=70;
            
        }
        onResize() {
            this.GameCtr.ShopUI_Box.width = Laya.stage.width, this.GameCtr.ShopUI_Box.height = Laya.stage.height;
            //this.GameCtr.ShopUI_bg.width = Laya.stage.width, this.GameCtr.ShopUI_bg.height = Laya.stage.height;
            this.GameCtr.ShopUI_bg.active=false;
        }
        opened() {
            this.SkinId = G.instance.SkinModel.InUserSkin, this.ShowSkin();
        }
        onUpdate() {
            this.GameCtr.shop_lab.text = "" + 2500 * this.SkinId;
        }
        closed() {
            G.instance.SkinModel.Skin[this.SkinId] && G.instance.SwitchInUseSkin(this.SkinId);
        }
        CloseShop() {
            this.GameCtr.closeUI(this.GameCtr.UIState.ShopUI), this.SkinScene.removeSelf();
        }
        ShowSkin() {

            this.SkinId <= 0 ? this.GameCtr.turnlast.visible = !1 : this.GameCtr.turnlast.visible = !0, 
            this.SkinId >= 5 ? this.GameCtr.turnnext.visible = !1 : this.GameCtr.turnnext.visible = !0, 
            this.ShowSkinState(), this.SkinScene = new Laya.Scene3D(), this.GameCtr.shopUI_box_c.addChildAt(this.SkinScene, 0);
            let e = d.instance.ShowScene.getChildByName("Camera").clone();
            console.log(e.transform.position);
           
            e.transform.translate(new Laya.Vector3(0, 2.7, 5));
            e.clearFlag = Laya.CameraClearFlags.DepthOnly, e.nearPlane = .01,e.fieldOfView = 25 ,this.SkinScene.addChild(e);
            let t = new Laya.DirectionLight();
            t.transform.localRotationEulerX = -50, this.SkinScene.addChild(t);
            let a = d.instance.ShowScene.getChildByName("Player" + (this.SkinId + 1)).clone();
            a.transform.position = new Laya.Vector3(-1.86, 3, 7), a.addComponent(U), this.SkinScene.addChild(a);
        }
        useSkin(){

        }
        SkinLast() {
            this.SkinId--, this.SkinScene.removeSelf(), this.ShowSkin();
        }
        SkinNext() {
            this.SkinId++, this.SkinScene.removeSelf(), this.ShowSkin();
        }
        CoinGet() {
            //G.instance.Economic.Coin+=1000;
            G.instance.Economic.Coin >= 2500 * this.SkinId ? (G.instance.reduceCoin(2500 * this.SkinId), 
            G.instance.addSkin(this.SkinId), this.ShowSkinState()) : (windowlog.getInstance().log("The money is not enough"));
            this.GameCtr.MainUICtr.RefreshCoin();
        }
        VideoGet() {
            //this.VideoEvent(() => {
            //    G.instance.addSkin(this.SkinId), y.ShowToast("恭喜获得新皮肤"), this.ShowSkinState();
            //}, () => {
            //    y.ShowToast("看完视频才能领取奖励");
            //});
            GameController.getInstance().stopGame();
            platform.getInstance().showReward(()=>{
                windowlog.getInstance().log("Successfully To Get Award");
                GameController.getInstance().resumeGame();
                G.instance.addSkin(this.SkinId), y.ShowToast(""), this.ShowSkinState();

            },()=>{
                GameController.getInstance().resumeGame();
                windowlog.getInstance().log("No reward for ads skipped");
            })
            
        }
        ShowSkinState() {
            G.instance.SkinModel.Skin[this.SkinId] ? (this.GameCtr.shop_have.visible = !0, this.GameCtr.shop_coin.visible = !1, 
            this.GameCtr.shop_video.visible = !1) : (this.GameCtr.shop_have.visible = !1, this.GameCtr.shop_coin.visible = !0, 
            this.GameCtr.shop_video.visible = !0, this.GameCtr.shop_lab.text = (2500 * this.SkinId).toFixed(0));
        }
    }
    class b {
        static onNavButtonListen(e, t, a, s) {
            t && (e.offAll(), e.on(Laya.Event.CLICK, this, y.NavigateMiniGame, [ t, a, s ]));
        }
        static onConfigNavButton(e, t, a) {
            if (!t) return;
            var s = e.getChildByName("IMG");
            if (s || (s = new Laya.Image(), e.addChildAt(s, 0), s.width = e.width, s.height = e.height, 
            s.pos(0, 0), s.name = "IMG"), s.skin = t.icon, 2 == t.type) {
                let a = e.getChildByName("GifAnim");
                s.visible = !1, a ? (a.skin = t.icon, a.autoPlay = !0, a.play(), a.interval = 200) : ((a = new Laya.Clip(t.icon, 3, 3)).width = s.width, 
                a.height = s.height, a.autoPlay = !0, a.interval = 200, a.name = "GifAnim", e.addChildAt(a, e.numChildren), 
                a.pos(s.x, s.y)), a.visible = !0;
            } else {
                s.visible = !0;
                let t = e.getChildByName("GifAnim");
                t && t.visible && (t.index = 0, t.visible = !1, t.stop());
            }
            e.getChildByName("NavName") && (e.getChildByName("NavName").text = t.name);
        }
        static RegesterMlRoad(e, t, a, s) {
            e.hScrollBarSkin = "", e.array = t, e.renderHandler = new Laya.Handler(this, (e, i) => {
                b.onConfigNavButton(e, t[i], e.width / 144), b.onNavButtonListen(e, t[i], a, s);
            });
        }
        static RegisterMLRoadName(e, t, a, s) {
            e.vScrollBarSkin = "", e.array = t, e.renderHandler = new Laya.Handler(this, (e, i) => {
                let n = e.getChildByName("btn"), o = e.getChildByName("name");
                o && (o.text = t[i].name), b.onConfigNavButton(n, t[i], n.width / 144), b.onNavButtonListen(e, t[i], a, s);
            });
        }
    }
    class _ extends x {

        //mainui
        constructor() {
            super(...arguments), this.ani = new Laya.Animator(), this.First = !0, this.Firdouble = !0, 
            this.NavIndex = 0;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.startgame_main, this, this.StartGame), 
            p.RegisterClickByCaller(this.GameCtr.shop_main, this, this.Shop), p.RegisterClickByCaller(this.GameCtr.moregame_main, this, this.Moregame), 
            p.RegisterClickByCaller(this.GameCtr.mainback, this, this.Mainback), p.RegisterClickByCaller(this.GameCtr.main_super, this, this.MainSuper);
            
        }
        onResize() {
            this.GameCtr.MainUI_Box.width = Laya.stage.width, this.GameCtr.MainUI_Box.height = Laya.stage.height, 
            this.GameCtr.mainUI_bg.width = Laya.stage.width, this.GameCtr.mainUI_bg.height = Laya.stage.height;
        }
        showBanner() {
            y.AdFlag && (y.HideBanner(), y.ShowBanner());
        }
        reShow() {
            y.AdFlag && Laya.timer.loop(500, this, this.showBanner);
        }
        beHide() {
            y.AdFlag && Laya.timer.clear(this, this.showBanner);
        }
        opened() {
            if (y.ShowBanner(), this.RefreshCoin(), Laya.timer.loop(2e3, this, this.initMl), 
            1 == y.SpecialOff) Laya.timer.loop(2e3, this, this.initMl); else {
                for (let e = 0; e < 8; e++) this.GameCtr[`moregame_g${e}`].visible = !1;
                this.GameCtr.moregame_main.visible = !1;
            }
            this.Shop();
            //this.GameCtr.openUI(this.GameCtr.UIState.TwoMoregameUI);
        }
        MainSuper() {
           // this.GameCtr.openUI(this.GameCtr.UIState.MoreGameUI);
        }
        Mainback() {
           // this.GameCtr.openUI(this.GameCtr.UIState.MoreGameUI);
        }
        Shop() {
            this.GameCtr.openUI(this.GameCtr.UIState.ShopUI);
        }
        StartGame() {
            GameController.getInstance().stopGame();
            platform.getInstance().showInterstitial(()=>{
                GameController.getInstance().resumeGame();
                this.GameCtr.ShopUICtr.CloseShop();
            let e = new Laya.Scene3D();
            this.playerModelScene3D = e, e.addChild(d.instance.GameScene), Laya.stage.addChildAt(e, 0), 
            d.instance.GameScene.addComponent(I), this.ani = I.instance.Player.DisPlay.getComponent(Laya.Animator), 
            this.ani.play("Idle"), y.GuideFlag_two ? 1 == this.First ? (this.First = !1, this.VideoEvent(() => {
                let e = Math.floor(300 * Math.random());
                G.instance.addCoin(e), this.GameCtr.main_coin.text = G.instance.Economic.Coin + "", 
                y.ShowToast(`恭喜获得${e}金币`), this.GameCtr.openUI(this.GameCtr.UIState.ChestUI);
            }, () => {
                y.ShowToast("看完视频才能获得奖励"), this.GameCtr.openUI(this.GameCtr.UIState.ChestUI);
            })) : this.GameCtr.openUI(this.GameCtr.UIState.ChestUI) : this.GameCtr.closeUI(this.GameCtr.UIState.MainUI);
            })
        }
        closed() {
            this.GameCtr.openUI(this.GameCtr.UIState.PlayingUI);
        }
        Moregame() {
           // this.GameCtr.openUI(this.GameCtr.UIState.ThreemoregameUI);
        }
        RefreshCoin() {
            this.GameCtr.main_coin.text = G.instance.Economic.Coin + "";
        }
        initMl() {
            for (let e = 0; e < 8; e++) {
                this.NavIndex++, this.NavIndex > y.GameList.length && this.NavIndex;
                let t = this.GameCtr[`moregame_g${e}`].getChildAt(0);
                b.onConfigNavButton(t, y.GameList[this.NavIndex], t.width / 144), b.onNavButtonListen(t, y.GameList[this.NavIndex], "游戏首页跳转", () => {
                    this.onMoreGameEvent();
                }), c.onUINavRoate(this.GameCtr[`moregame_g${e}`]);
            }
            y.ExposureData(1);
        }
        onMoreGameEvent() {
           // this.GameCtr.openUI(this.GameCtr.UIState.TwoMoregameUI);
        }
    }
    class M extends x {
        constructor() {
            super(...arguments), this.coin = 20, this.mMlsd = 1;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.failpass, this, this.FailPass), 
            p.RegisterClickByCaller(this.GameCtr.failcoin, this, this.FailCoin), p.RegisterClickByCaller(this.GameCtr.failbtn, this, this.FailMoregame), 
            p.RegisterClickByCaller(this.GameCtr.failback, this, this.Failback);
            
            var adCoin=new Laya.Image();
            adCoin.skin="iconAD.png";
            this.GameCtr.failcoin.addChild(adCoin);
            adCoin.centerX=60;
            adCoin.centerY=-5;

        }
        onResize() {
            this.GameCtr.FailUI_Box.width = Laya.stage.width, this.GameCtr.FailUI_Box.height = Laya.stage.height, 
            this.GameCtr.failUI_bg.width = Laya.stage.width, this.GameCtr.failUI_bg.height = Laya.stage.height;
        }
        FailPass() {
            console.log("passs");
            GameController.getInstance().getGamelist().visible=false;
            G.instance.addCoin(this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.FailUI), 
            this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
        }
        FailCoin() {
          //  y.AdFlag && this.VideoEvent(() => {
          //      G.instance.addCoin(5 * this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.FailUI), 
          //      this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
          //  }, () => {
          //      y.ShowToast("看完视频才能领取奖励");
          //  });
          


          GameController.getInstance().stopGame();
          platform.getInstance().showReward(()=>{
            GameController.getInstance().getGamelist().visible=false;
            G.instance.addCoin(5 * this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.FailUI), 
            this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
             windowlog.getInstance().log("Successfully To Get Award");
             GameController.getInstance().resumeGame();
          },()=>{
              windowlog.getInstance().log("No reward for ads skipped","#000000");
              GameController.getInstance().resumeGame();
          })
        }
        FailMoregame() {
           // this.GameCtr.openUI(this.GameCtr.UIState.ThreemoregameUI);
        }
        opened(e) {
            GameController.getInstance().getGamelist().visible=true;
            this.RandomGame(), this.isfrom = e, this.GameCtr.fail_coin.text = "+" + this.coin, 
            this.initMl(), Laya.timer.loop(1, this, this.mScroll), 1 == y.AdFlag ? (this.GameCtr.failback.visible = !0, 
            this.GameCtr.failbtn.visible = !0) : (this.GameCtr.failback.visible = !1, this.GameCtr.failbtn.visible = !1), 
            0 == y.SpecialOff && (this.GameCtr.leftfail.visible = !1, this.GameCtr.rightfail.visible = !1, 
            this.GameCtr.failbtn.visible = !1), this.ShowJumpBtn1(this.GameCtr.failpass, this, this.FailPass);
        }
        Failback() {
         //   this.GameCtr.openUI(this.GameCtr.UIState.MoreGameUI);
        }
        initMl() {
            this.GameCtr.leftfail.vScrollBarSkin = "", this.GameCtr.leftfail.array = y.GameListOver, 
            this.GameCtr.leftfail.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("btn");
                b.onConfigNavButton(a, y.GameListOver[t], a.width / 144), x.onNavButtonListen(a, y.GameListOver[t], "FailUI_Box");
            }), this.GameCtr.rightfail.vScrollBarSkin = "", this.GameCtr.rightfail.array = y.GameListOver, 
            this.GameCtr.rightfail.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("btn");
                b.onConfigNavButton(a, y.GameListOver[t], a.width / 144), x.onNavButtonListen(a, y.GameListOver[t], "FailUI_Box");
            }), console.log(""), y.ExposureData(2), y.ExposureData(3);
        }
        mScroll() {
            let e = this.GameCtr.leftfail.scrollBar.value + 2 * this.mMlsd;
            (e > this.GameCtr.leftfail.scrollBar.max || e < 0) && (this.mMlsd *= -1), e = this.GameCtr.leftfail.scrollBar.value + 2 * this.mMlsd, 
            this.GameCtr.leftfail.scrollBar.value = e;
            let t = this.GameCtr.rightfail.scrollBar.value + 2 * this.mMlsd;
            (t > this.GameCtr.rightfail.scrollBar.max || t < 0) && (this.mMlsd *= -1), t = this.GameCtr.rightfail.scrollBar.value + 2 * this.mMlsd, 
            this.GameCtr.rightfail.scrollBar.value = t;
        }
        RandomGame() {
            if (!y.GuideFlag_one) return;
            let e = Math.round(Math.random() * y.GameListOver.length - 1), t = y.GameListOver[e];
            y.NavigateMiniGame(t, "更多游戏跳转", null, !1);
        }
    }
    class P extends x {
        constructor() {
            super(...arguments), this.Probar = 0;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.chest_btn, this, this.OpenChest);
        }
        onResize() {
            this.GameCtr.ChestUI_Box.width = Laya.stage.width, this.GameCtr.ChestUI_Box.height = Laya.stage.height, 
            this.GameCtr.chestUI_bg.width = Laya.stage.width, this.GameCtr.chestUI_bg.height = Laya.stage.height;
        }
        OpenChest() {
            if (this.ShowBan(), this.Probar += y.BoxClickAddValue, this.GameCtr.chest_pro.value = this.Probar, 
            this.Probar >= 1) {
                let e = Math.floor(200 + 200 * Math.random());
                G.instance.addCoin(e), y.ShowToast(`恭喜获得${e}金币`), this.GameCtr.closeUI(this.GameCtr.UIState.ChestUI), 
                this.GameCtr.closeUI(this.GameCtr.UIState.MainUI), this.GameCtr.main_coin.text = G.instance.Economic.Coin + "";
            }
        }
        ProTime() {
            this.Probar -= y.BoxFrameSubValue, this.Probar < 0 && (this.Probar = 0), this.GameCtr.chest_pro.value = this.Probar;
        }
        ShowBan() {
            this.Probar >= y.ShowBoxBannerValue && (Laya.timer.clear(this, this.ProTime), y.ShowBanner(), 
            Laya.timer.once(1500, this, () => {
                y.HideBanner();
            }));
        }
        opened(e) {
            this.fromon = e, this.Probar = 0, this.ShowBan(), Laya.timer.frameLoop(1, this, this.ProTime), 
            this.GameCtr.chestanim.play(), y.HideBanner();
        }
        closed() {
            this.GameCtr.openUI(this.GameCtr.UIState.PlayingUI);
        }
    }
    class O extends x {
        constructor() {
            
            super(...arguments), this.coin = 300, this.level = 1, this.mMlsd = 1;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.settlecoin, this, this.FiveCoin), 
            p.RegisterClickByCaller(this.GameCtr.settlement_moregame, this, this.SetMoregame), 
            p.RegisterClickByCaller(this.GameCtr.settleback, this, this.SettleBack);


            var adCoin=new Laya.Image();
            adCoin.skin="iconAD.png";
            this.GameCtr.settlecoin.addChild(adCoin);
            adCoin.centerX=60;
            adCoin.centerY=-5;
            adCoin.scaleX=0.6;
            adCoin.scaleY=0.6;
            
        }
        onResize() {
            this.GameCtr.SettlementUI_Box.width = Laya.stage.width, this.GameCtr.SettlementUI_Box.height = Laya.stage.height, 
            this.GameCtr.settlementUI_bg.width = Laya.stage.width, this.GameCtr.settlementUI_bg.height = Laya.stage.height;
        }
        Pass() {
            G.instance.addCoin(this.coin),G.instance.addLevel(this.level),this.GameCtr.closeUI(this.GameCtr.UIState.SettlementUI), 
            this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
        }
        FiveCoin() {
           // 1 == y.AdFlag && this.VideoEvent(() => {
           //     G.instance.addCoin(5 * this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.SettlementUI), 
           //     this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
           // }, () => {
           //     y.ShowToast("看完视频才能领取奖励");
           // });

         //  G.instance.addCoin(5 * this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.SettlementUI), 
         //  this.GameCtr.openUI(this.GameCtr.UIState.MainUI);

         GameController.getInstance().stopGame();
         platform.getInstance().showReward(()=>{
            G.instance.addCoin(5 * this.coin), this.GameCtr.closeUI(this.GameCtr.UIState.SettlementUI), 
            this.GameCtr.openUI(this.GameCtr.UIState.MainUI);
            windowlog.getInstance().log("Successfully To Get Award");
            GameController.getInstance().resumeGame();
         },()=>{
             windowlog.getInstance().log("No reward for ads skipped","#0000000");
             GameController.getInstance().resumeGame();
         })
        }
        SetMoregame() {
           // this.GameCtr.openUI(this.GameCtr.UIState.ThreemoregameUI);
        }
        SettleBack() {
           // this.GameCtr.openUI(this.GameCtr.UIState.MoreGameUI);
        }
        opened() {
           
            this.RandomGame(), 1 == y.AdFlag ? (this.GameCtr.settleback.visible = !0, this.GameCtr.settlement_moregame.visible = !0) : (this.GameCtr.settleback.visible = !1, 
            this.GameCtr.settlement_moregame.visible = !1), this.GameCtr.settle_coin.text = "+" + this.coin, 
            this.initMl(), Laya.timer.loop(1, this, this.Scroll), 0 == y.SpecialOff && (this.GameCtr.leftsettlement_list.visible = !1, 
            this.GameCtr.rightsettlement_list.visible = !1), this.ShowJumpBtn1(this.GameCtr.settlepass, this, this.Pass);
            GameController.getInstance().getGamelist().visible=true;
        }
        closed() {
            console.log("level++")
            this.level += 1, this.level > 6 && (this.level = 1), this.GameCtr.level.text = "" + this.level;
            GameController.getInstance().getGamelist().visible=false;
        }
        initMl() {
            this.GameCtr.leftsettlement_list.vScrollBarSkin = "", this.GameCtr.leftsettlement_list.array = y.GameListBack, 
            this.GameCtr.leftsettlement_list.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("btn");
                b.onConfigNavButton(a, y.GameListBack[t], a.width / 144), x.onNavButtonListen(a, y.GameListBack[t], "SettlementUI_Box");
            }), this.GameCtr.rightsettlement_list.vScrollBarSkin = "", this.GameCtr.rightsettlement_list.array = y.GameListOver, 
            this.GameCtr.rightsettlement_list.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("btn");
                b.onConfigNavButton(a, y.GameListOver[t], a.width / 144), x.onNavButtonListen(a, y.GameListOver[t], "SettlementUI_Box");
            }), console.log(""), y.ExposureData(2), y.ExposureData(3);
        }
        Scroll() {
            let e = this.GameCtr.leftsettlement_list.scrollBar.value + 2 * this.mMlsd;
            (e > this.GameCtr.leftsettlement_list.scrollBar.max || e < 0) && (this.mMlsd *= -1), 
            e = this.GameCtr.leftsettlement_list.scrollBar.value + 2 * this.mMlsd, this.GameCtr.leftsettlement_list.scrollBar.value = e;
            let t = this.GameCtr.rightsettlement_list.scrollBar.value + 2 * this.mMlsd;
            (t > this.GameCtr.rightsettlement_list.scrollBar.max || t < 0) && (this.mMlsd *= -1), 
            t = this.GameCtr.rightsettlement_list.scrollBar.value + 2 * this.mMlsd, this.GameCtr.rightsettlement_list.scrollBar.value = t;
        }
        RandomGame() {
            if (!y.GuideFlag_one) return;
            let e = Math.round(Math.random() * y.GameListBack.length - 1), t = y.GameListBack[e];
            y.NavigateMiniGame(t, "更多游戏跳转", null, !1);
        }
    }
    class D extends x {
        constructor() {
            super(...arguments), this.First = !0, this.mMlsd = 1;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.moregame_random, this, this.RandomGame);
        }
        beHide() {
            y.HideBanner();
        }
        opened(e) {
            console.log("mgopen");
            this.isfrom = e, this.GameCtr.moregame_random.visible = !1, this.initMl(), Laya.timer.loop(1, this, this.Scroll), 
            0 == y.SpecialOff && (this.GameCtr.moregame_list.visible = !1, this.GameCtr.moregame_random.visible = !1), 
            1 == this.First ? (this.First = !1, this.GameCtr.moregame_random.visible = !0) : Laya.timer.once(1500, this, () => {
                this.GameCtr.moregame_random.visible = !0;
            }), y.HideBanner();
            
        }
        onResize() {
            this.GameCtr.MoreGameUI_Box.width = Laya.stage.width, this.GameCtr.MoreGameUI_Box.height = Laya.stage.height, 
            this.GameCtr.moregame_bg.width = Laya.stage.width, this.GameCtr.moregame_bg.height = Laya.stage.height;
        }
        RandomGame() {
            this.GameCtr.closeUI(this.GameCtr.UIState.MoreGameUI);
        }
        initMl() {
            this.GameCtr.moregame_list.hScrollBarSkin = "", this.GameCtr.moregame_list.array = y.GameList_Back_two, 
            this.GameCtr.moregame_list.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("name"), s = e.getChildByName("btn");
                a.text = y.GameList_Back_two[t].name, b.onConfigNavButton(s, y.GameList_Back_two[t], s.width / 144), 
                x.onNavButtonListen(s, y.GameList_Back_two[t], "MoreGameUI_Box");
            }), console.log("更多游戏曝光"), y.ExposureData(6);
        }
        Scroll() {
            let e = this.GameCtr.moregame_list.scrollBar.value + 2 * this.mMlsd;
            (e > this.GameCtr.moregame_list.scrollBar.max || e < 0) && (this.mMlsd *= -1), e = this.GameCtr.moregame_list.scrollBar.value + 2 * this.mMlsd, 
            this.GameCtr.moregame_list.scrollBar.value = e;
        }
        closed() {
            "Settlement" == this.isfrom ? (1): "Fail" == this.isfrom ?(1) : (1);
        }
        Random() {
            if (!y.GuideFlag_one) return;
            let e = Math.round(Math.random() * y.GameList_Back_two.length - 1), t = y.GameList_Back_two[e];
            y.NavigateMiniGame(t, "更多游戏跳转", null, !1);
        }
    }
    class F extends x {
        constructor() {
            super(...arguments), this.mMlsd = 1, this.NavIndex = 0;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.twomoregame_back, this, this.BackGame), 
            p.RegisterClickByCaller(this.GameCtr.twomoregame_random, this, this.RandomGame);
        }
        onResize() {
            this.GameCtr.TwoMoregameUI_Box.width = Laya.stage.width, this.GameCtr.TwoMoregameUI_Box.height = Laya.stage.height, 
            this.GameCtr.twomoregameUI_bg.width = Laya.stage.width, this.GameCtr.twomoregameUI_bg.height = Laya.stage.height;
        }
        beHide() {
            y.HideBanner();
        }
        BackGame() {
            this.GameCtr.closeUI(this.GameCtr.UIState.TwoMoregameUI);
        }
        opened(e) {
            console.log("mg2open");
            this.Random(), this.isfrom = e, this.initMl(), Laya.timer.frameLoop(1, this, this.mScroll), 
            y.HideBanner(), 0 == y.SpecialOff && (this.GameCtr.twomoregame_list.visible = !1);
            //this.BackGame();
        }
        initMl() {
            this.GameCtr.twomoregame_list.hScrollBarSkin = "", this.GameCtr.twomoregame_list.array = y.GameListBack, 
            this.GameCtr.twomoregame_list.renderHandler = new Laya.Handler(this, (e, t) => {
                let a = e.getChildByName("name"), s = e.getChildByName("btn");
                a.text = y.GameListBack[t].name, b.onConfigNavButton(s, y.GameListBack[t], s.width / 144), 
                x.onNavButtonListen(s, y.GameListBack[t], "TwoMoregame_Box");
            }), console.log("更多游戏曝光"), y.ExposureData(2);
        }
        mScroll() {
            let e = this.GameCtr.twomoregame_list.scrollBar.value + 2 * this.mMlsd;
            (e > this.GameCtr.twomoregame_list.scrollBar.max || e < 0) && (this.mMlsd *= -1), 
            e = this.GameCtr.twomoregame_list.scrollBar.value + 2 * this.mMlsd, this.GameCtr.twomoregame_list.scrollBar.value = e;
        }
        RandomGame() {
            for (let e = 0; e < 35; e++) {
                this.NavIndex++, this.NavIndex > y.GameListBack.length && (this.NavIndex = 0);
                let e = this.GameCtr.twomoregame_random.getChildAt(0);
                b.onNavButtonListen(e, y.GameListBack[this.NavIndex], "更多游戏跳转", () => {
                    this.onMoreGameEvent();
                });
            }
        }
        onMoreGameEvent() {}
        closed() {
            "Settlement" == this.isfrom ? this.GameCtr.openUI(this.GameCtr.UIState.SettlementUI) : "Fail" == this.isfrom && this.GameCtr.openUI(this.GameCtr.UIState.FailUI);
        }
        Random() {
            if (!y.GuideFlag_one) return;
            let e = Math.round(Math.random() * y.GameListBack.length - 1), t = y.GameListBack[e];
            y.NavigateMiniGame(t, "更多游戏跳转", null, !1);
        }
    }
    class R extends x {
        constructor() {
            super(...arguments), this.NavIndex = 0;
        }
        onAwake() {
            this.onResize(), p.RegisterClickByCaller(this.GameCtr.threemoregameclose, this, this.Close);
        }
        onResize() {
            this.GameCtr.threemoregameUI_bg.width = Laya.stage.width, this.GameCtr.threemoregameUI_bg.height = Laya.stage.height, 
            this.GameCtr.ThreemoregameUI_Box.width = Laya.stage.width, this.GameCtr.ThreemoregameUI_Box.height = Laya.stage.height;
        }
        opened() {
            console.log("mg3open");
            this.initMl();
            
        }
        Close() {
            this.GameCtr.closeUI(this.GameCtr.UIState.ThreemoregameUI);
        }
        initMl() {
            for (let e = 0; e < 4; e++) {
                this.NavIndex++, this.NavIndex > y.GameList.length && this.NavIndex;
                let t = this.GameCtr[`threemoregame_g${e}`].getChildAt(0);
                b.onConfigNavButton(t, y.GameList[this.NavIndex], t.width / 144), x.onNavButtonListen1(t, y.GameList[this.NavIndex], "ThreemoregameUI_Box");
            }
            y.ExposureData(1);
        }
        RandomGame() {
            if (!y.GuideFlag_one) return;
            let e = Math.round(Math.random() * y.GameListBack.length - 1), t = y.GameListBack[e];
            y.NavigateMiniGame(t, "更多游戏跳转", null, !1);
        }
        onMoreGameEvent() {}
    }
    class A extends t.iscene.GameSceneUI {
        constructor() {
            super(...arguments), this.UIList = [], this.UIState = {
                MainUI: "MainUI_Box",
                PlayingUI: "PlayingUI_Box",
                ShopUI: "ShopUI_Box",
                FailUI: "FailUI_Box",
                ChestUI: "ChestUI_Box",
                SettlementUI: "SettlementUI_Box",
                MoreGameUI: "MoreGameUI_Box",
                TwoMoregameUI: "TwoMoregameUI_Box",
                ThreemoregameUI: "ThreemoregameUI_Box"
            };
        }
        onAwake() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, A.instance = this, 
            this.init();
        }
        init() {
            
            //ui
            this.onShowEvent(), this.UIList.push(this.PlayingUI_Box), this.UIList.push(this.ShopUI_Box), 
            this.UIList.push(this.MainUI_Box), this.UIList.push(this.FailUI_Box), this.UIList.push(this.ChestUI_Box), 
            this.UIList.push(this.SettlementUI_Box), this.UIList.push(this.TwoMoregameUI_Box), 
            this.UIList.push(this.MoreGameUI_Box), this.UIList.push(this.ThreemoregameUI_Box), 
            this.PlayingUICtr = this.PlayingUI_Box.addComponent(B), this.ShopUICtr = this.ShopUI_Box.addComponent(v), 
            this.MainUICtr = this.MainUI_Box.addComponent(_), this.FailUICtr = this.FailUI_Box.addComponent(M), 
            this.ChestUICtr = this.ChestUI_Box.addComponent(P), this.SettlementUICtr = this.SettlementUI_Box.addComponent(O), 
            this.MoreGameUICtr = this.MoreGameUI_Box.addComponent(D), this.TwoMoregameUICtr = this.MoreGameUI_Box.addComponent(F), 
            this.ThreemoregameUICtr = this.ThreemoregameUI_Box.addComponent(R), this.UIComponent = {
                MainUI_Box: this.MainUICtr,
                PlayingUI_Box: this.PlayingUICtr,
                ShopUI_Box: this.ShopUICtr,
                FailUI_Box: this.FailUICtr,
                ChestUI_Box: this.ChestUICtr,
                SettlementUI_Box: this.SettlementUICtr,
                TwoMoregameUI_Box: this.TwoMoregameUICtr,
                MoreGameUI_Box: this.MoreGameUICtr,
                ThreemoregameUI_Box: this.ThreemoregameUICtr
            }, y.AdFlag && this.onOpenTaoLu(), y.AdFlag && y.EnableWXQuitUI && this.onOpenTaoLu2(), 
            this.openUI(this.UIState.MainUI);
        }
        onShowEvent() {
            y.OnShowCallBack = (() => {
             //   y.AdFlag && y.SDKManagerLoadingFinsh && this.openUI(this.UIState.TwoMoregameUI);
            });
        }
        onOpenTaoLu() {}
        onOpenTaoLu2() {}
        openUIAndCloseOthers(e, t = null, a = !0) {
            for (let s in this.UIState) if (e != this.UIState[s]) {
                if (this[this.UIState[s]].zOrder = 0, e == this.UIState.MainUI && !a) continue;
                if (!this[this.UIState[s]].visible) continue;
                this.UIComponent[this.UIState[s]].closed(t), this[this.UIState[s]].visible = !1;
            }
            this[e].zOrder = 1, this.UIComponent[e].opened(t), this[e].visible = !0;
        }
        openUI(e, t = null, a = !1, s = null) {
            let i = 0, n = "";
            for (let e in this.UIState) this[this.UIState[e]].zOrder > i && (i = this[this.UIState[e]].zOrder, 
            n = e);
            "" != n && 0 != i && this[this.UIState[n]].visible && this.UIComponent[this.UIState[n]].beHide(s), 
            this[e].zOrder = i + 1, this.UIComponent[e].opened(t), this[e].visible = !0, a && (this[this.UIState.MainUI].visible = !1);
        }
        closeUI(e, t = null, a = null) {
            this.UIComponent[e].closed(t), this[e].visible = !1, this[e].zOrder = 0;
            let s = 0, i = "";
            for (let e in this.UIState) this[this.UIState[e]].zOrder > s && (s = this[this.UIState[e]].zOrder, 
            i = e);
            "" != i && 0 != s && this[this.UIState[i]].visible && this.UIComponent[this.UIState[i]].reShow(a);
        }
    }
    A.instance = null;
    class V {
        constructor() {}
        Init() {}
    }
    class T extends V {
        constructor() {
            super(), this.mIsLoading = !1, this.mChannelHandler = Laya.Browser.window.wx, this.mBasePath = Laya.URL.basePath + "zip/", 
            this.mCachePath = this.mChannelHandler.env.USER_DATA_PATH + "/cache/", this.mZipFilePath = this.mChannelHandler.env.USER_DATA_PATH + "/", 
            this.mFileSys = this.mChannelHandler.getFileSystemManager();
        }
        LoadZipForNet(e, t, a, s, i) {
            if (this.mIsLoading) return console.error("sdkhelperbase on loading!"), void (i && i());
            console.log("zipName: " + e), console.log("zipVer: " + t);
            let n = this;
            this.mBasePath = Laya.URL.basePath + "zip/", this.mIsLoading = !0, this.mZipFilePath = this.mZipFilePath + e;
            let o = this.mChannelHandler.getStorageSync(e), r = !1;
            try {
                n.mFileSys.accessSync(n.mZipFilePath), r = !0;
            } catch (e) {
                r = !1;
            }
            if (r) {
                if (o == t) return console.log("资源包存在 并且版本相同", r), n.mIsLoading = !1, void (a && a());
                console.log("资源包存在 版本不相同 先清理 ", r), n.mFileSys.unlinkSync(n.mZipFilePath);
            } else console.log("资源包不存在:", r);
            console.log("资源包下载"), n.mChannelHandler.downloadFile({
                url: n.mBasePath + e,
                filePath: n.mZipFilePath,
                success: () => {
                    console.log("资源包下载成功"), (() => {
                        let s = !1;
                        try {
                            n.mFileSys.accessSync(n.mCachePath), s = !0;
                        } catch (e) {
                            s = !1;
                        }
                        s ? console.log("缓存目录存在") : (console.log("缓存目录不存在"), n.mFileSys.mkdirSync(n.mCachePath), 
                        console.log("缓存目录已创建")), n.mFileSys.unzip({
                            zipFilePath: n.mZipFilePath,
                            targetPath: n.mCachePath,
                            success: () => {
                                console.log("资源包解压完成"), n.mIsLoading = !1, n.mFileSys.unlinkSync(n.mZipFilePath), 
                                n.mFileSys.writeFileSync(n.mZipFilePath, "1", "utf8"), n.mChannelHandler.setStorageSync(e, t), 
                                a && a();
                            },
                            fail: e => {
                                console.log("资源包解压失败 " + e.errMsg), n.mIsLoading = !1, i && i();
                            }
                        });
                    })();
                },
                fail: t => {
                    console.log("资源包下载失败"), console.log(t), console.log(n.mBasePath + e), n.mIsLoading = !1, 
                    i && i();
                }
            }).onProgressUpdate(function(e) {
                s && s(e.progress);
            });
        }
        LoadZipForLocal(e, t, a, s, i) {
            if (this.mIsLoading) return console.error("sdkhelperbase on loading!"), void (i && i());
            console.log("local zipName: " + e), console.log("local zipVer: " + t);
            let n = this;
            this.mBasePath = "zip/", this.mIsLoading = !0, this.mZipFilePath = this.mZipFilePath + e;
            let o = this.mChannelHandler.getStorageSync(e), r = !1;
            try {
                n.mFileSys.accessSync(n.mZipFilePath), r = !0;
            } catch (e) {
                r = !1;
            }
            if (r) {
                if (o == t) return console.log("资源包存在 并且版本相同", r), n.mIsLoading = !1, void (a && a());
                console.log("资源包存在 版本不相同 先清理 ", r), n.mFileSys.unlinkSync(n.mZipFilePath);
            } else console.log("资源包不存在:", r);
            console.log("本地资源包读取"), n.mFileSys.copyFile({
                srcPath: n.mBasePath + e,
                destPath: n.mZipFilePath,
                success: () => {
                    console.log("资源包读取成功"), (() => {
                        let s = !1;
                        try {
                            n.mFileSys.accessSync(n.mZipFilePath), s = !0;
                        } catch (e) {
                            s = !1;
                        }
                        s ? console.log("缓存目录存在") : (console.log("缓存目录不存在"), n.mFileSys.mkdirSync(n.mCachePath), 
                        console.log("缓存目录已创建")), n.mFileSys.unzip({
                            zipFilePath: n.mZipFilePath,
                            targetPath: n.mCachePath,
                            success: () => {
                                console.log("资源包解压完成"), n.mIsLoading = !1, n.mFileSys.unlinkSync(n.mZipFilePath), 
                                n.mFileSys.writeFileSync(n.mZipFilePath, "1", "utf8"), n.mChannelHandler.setStorageSync(e, t), 
                                a && a();
                            },
                            fail: e => {
                                console.log("资源包解压失败 " + e.errMsg), n.mIsLoading = !1, i && i();
                            }
                        });
                    })();
                },
                fail: t => {
                    console.log("资源包读取失败"), console.log(t), console.log(n.mBasePath + e), n.mIsLoading = !1, 
                    i && i();
                }
            });
        }
        UnZip(e, t, a) {
            let s = this;
            s.mFileSys.unzip({
                zipFilePath: s.mZipFilePath + "models.zip",
                targetPath: s.mCachePath,
                success: () => {
                    console.log("资源包解压完成"), s.mIsLoading = !1, s.mFileSys.unlinkSync(s.mZipFilePath), 
                    s.mFileSys.writeFileSync(s.mZipFilePath, "1", "utf8"), t && t();
                },
                fail: e => {
                    console.log("资源包解压失败 " + e.errMsg), s.mIsLoading = !1, a && a();
                }
            });
        }
        ReadFile(e) {
            let t = this.mFileSys.readFileSync(e);
            this.mFileSys.writeFileSync(this.mZipFilePath + "models.zip", t), console.log("写入完成");
        }
    }
    class N {
        constructor() {
            this.ReadyInterTime = 20, this.BannerTime = 30, this.phoneName = "", this.BannerId = "adunit-e196459252ad5afe", 
            this.VideoId = "adunit-387af21ff6784131", this.ChaPingId = "adunit-d904ef4a2fc0844a", 
            this.mIsBannerLoad = !1, this.isFromWuDian = !1;
        }
        StartRecord() {}
        StopRecord() {}
        ShareVideo(e, t) {}
        CreateShotcut() {}
        VibrateShort() {}
        VibrateLong() {}
        onUpdateBn1Event() {
            Laya.Browser.onMiniGame && (j.Instance.CreateBanner(), this.BannerTime = 30);
        }
        CreateBanner(e = !1) {
            this.mBannerAd && (this.mBannerAd.destroy(), this.mBannerAd = null), this.mSysInfo = this.mChannelHandler.getSystemInfoSync();
            let t = this, a = this.BannerId;
            "" != a && (this.mBannerAd = this.mChannelHandler.createBannerAd({
                adUnitId: a,
                style: {
                    left: .05 * t.mSysInfo.screenWidth,
                    top: t.mSysInfo.screenHeight,
                    width: .9 * t.mSysInfo.screenWidth
                }
            }), this.mBannerAd.onError(e => {
                console.log("创建banner失败"), console.log(e);
            }), this.mBannerAd.onResize(e => {
                t.mBannerAd && t.mBannerAd.style && (t.mBannerAd.style.top = t.mSysInfo.screenHeight - e.height, 
                t.mBannerAd.style.left = (t.mSysInfo.screenWidth - e.width) / 2);
            }));
        }
        ShowBanner() {
            null != this.mBannerAd && this.mBannerAd.show && (this.mBannerAd.show(), console.log("show banner"));
        }
        Login() {}
        ShowIntersitial() {
            if (!this.mChannelHandler.createInterstitialAd) return;
            if (0 != this.ReadyInterTime) return;
            this.ReadyInterTime = 20;
            let e = this.ChaPingId;
            "" != e && (this.mInterstitialAd = this.mChannelHandler.createInterstitialAd({
                adUnitId: e
            }), console.log("插屏广告加载显示"), this.mInterstitialAd.show(), this.mInterstitialAd.onError(e => {
                console.log("插屏广告加载失败"), console.log(e.errCode + "====&&&===" + e.errMsg), this.mInterstitialAd = null;
            }), this.mInterstitialAd.onLoad(() => {
                this.mInterstitialAd;
            }), this.mInterstitialAd.onClose(() => {}));
        }
        Video(e, t = {}) {
            if (this.isVideoOnLoad) return;
            this.isVideoOnLoad = !0;
            let a = this.VideoId;
            console.log("视频id " + a), a ? (this.mVideoAd && (this.mVideoAd.offError(this.mOnVideoError), 
            this.mVideoAd.offClose(this.mOnVideoClose), this.mVideoAd = null), this.mVideoAd = this.mChannelHandler.createRewardedVideoAd({
                adUnitId: a
            }), this.mCurrentEType = e, this.mCurrentQuery = t, this.mOnVideoError = (e => {
                this.isVideoOnLoad = !1, console.log("视频加载错误");
            }), this.mOnVideoClose = (e => {
                e && e.isEnded || !e ? (console.log("视频观看完成，下发奖励"), this.isVideoOnLoad = !1) : (console.log("视频观看中途推出，不予以奖励"), 
                this.isVideoOnLoad = !1);
            }), this.mVideoAd.onError(this.mOnVideoError), this.mVideoAd.onClose(this.mOnVideoClose), 
            this.mVideoAd.load().then(() => {
                this.mVideoAd.show();
            }).catch(() => {})) : this.isVideoOnLoad = !1;
        }
        HideBanner() {
            null != this.mBannerAd && this.mBannerAd.hide && (this.mBannerAd.hide(), console.log("隐藏了banner"));
        }
        ShowToast(e) {}
        OpenCustomerServiceConversation() {}
    }
    class E extends N {
        constructor() {
            super(), this.NavDataVersion = 1, this.StartNavData = [], this.NavData = [], this.GameoverNavData = [], 
            this.SeverConfigURL = "https://gecaoji-1300018364.cos.ap-chengdu.myqcloud.com/", 
            this.Umasdk = "5eec4ce6978eea0883798a73", this.XJSdk = "c1bd995ccbf2a4cb3ca944fdde796ad8", 
            this.AdFlag = !1, this.GuideFlag = !1, this.GuideTwoFlag = !1, this.isIOSPhone = !1, 
            this.mVibrateShortCount = 0;
        }
        Init() {
            Laya.Browser.onMiniGame && (this.mChannelHandler = Laya.Browser.window.wx, this.mChannelHandler.onShow(() => {})), 
            Laya.Browser.onIOS ? this.isIOSPhone = !0 : this.isIOSPhone = !1;
        }
        VibrateShort() {
            this.mVibrateShortCount >= 5 || (this.mVibrateShortCount++, this.mChannelHandler.vibrateShort({
                complete: () => {
                    this.mVibrateShortCount--;
                }
            }));
        }
        OpenCustomerServiceConversation() {
            this.mChannelHandler.openCustomerServiceConversation();
        }
        VibrateLong() {
            this.mChannelHandler.vibrateLong();
        }
    }
    class j {
        constructor() {
            this.mPlatform = Laya.Browser.window, this.mSdk = null, this.mSdkHelper = null, 
            this.mOpenId = "", this.doWudian = !1, this.curentPage = 0, this.isShowMoreGame = !1, 
            this.curentPageAddBClick = !1, this.mSdkHelper = new T(), this.mSdk = new E();
        }
        static get Instance() {
            return null == j._instance && (j._instance = new j()), j._instance;
        }
        get GetShowMl() {
            return !0;
        }
        get GetSdkHepler() {
            return this.mSdkHelper;
        }
        get GetPlatform() {
            return this.mPlatform;
        }
        get GetOpenId() {
            return this.mOpenId;
        }
        CreateBanner(e = !1) {
            this.mSdk && this.mSdk.CreateBanner(e);
        }
        ShowBanner() {
            this.mSdk && this.mSdk.ShowBanner();
        }
        HideBanner() {
            this.mSdk && this.mSdk.HideBanner();
        }
        ShowIntersitial() {
            this.mSdk && this.mSdk.ShowIntersitial();
        }
        CreateShotcut() {
            this.mSdk && this.mSdk.CreateShotcut();
        }
        SetWuChu() {
            this.mSdk && (this.mSdk.isFromWuDian = !0);
        }
        VibrateShort() {
            this.mSdk && this.mSdk.VibrateShort();
        }
        VirbrateLong() {
            this.mSdk && this.mSdk.VibrateLong();
        }
        GetPhoneName() {
            return this.mSdk ? this.mSdk.phoneName : "";
        }
        StartRecord() {
            this.mSdk && this.mSdk.StartRecord && this.mSdk.StartRecord();
        }
        StopRecord() {
            this.mSdk && this.mSdk.StopRecord && this.mSdk.StopRecord();
        }
        ShareVideo(e, t) {
            this.mSdk && this.mSdk.ShareVideo && this.mSdk.ShareVideo(e, t);
        }
        ShowToast(e) {
            this.mSdk && this.mSdk.ShowToast && this.mSdk.ShowToast(e);
        }
        Video(e, t = {}) {
            this.mSdk && this.mSdk.Video(e, t);
        }
        OpenCustomerServiceConversation() {
            this.mSdk && this.mSdk.OpenCustomerServiceConversation && this.mSdk.OpenCustomerServiceConversation();
        }
    }
    j._instance = null;
    class H extends t.iscene.StartUI {
        constructor() {
            super(...arguments), this.probar = 0;
            var bg=new Laya.Image();
            bg.skin="images/main/background.png";
            this.addChild(bg);
        }
        onAwake() {
            if (H.instance = this, this.onResize(), Laya.timer.frameLoop(1, this, this.Updateprobar), 
            Laya.Browser.onMiniGame) return y.ShowBanner(), void this.UnZip();
            this.showSceneLoad();
        }
        onResize() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, this.Start_Box.width = Laya.stage.width, 
            this.Start_Box.height = Laya.stage.height, this.startUI_bg.width = Laya.stage.width, 
            this.startUI_bg.height = Laya.stage.height;
        }
        showSceneLoad() {
            Laya.loader.create([ "res/assets/LayaScene_GameScene/Conventional/GameScene.lh", "res/assets/LayaScene_ShowScene/Conventional/ShowScene.lh" ], new Laya.Handler(this, () => {
                d.instance.ShowScene = Laya.loader.getRes("res/assets/LayaScene_ShowScene/Conventional/ShowScene.lh"), 
                d.instance.GameScene = Laya.loader.getRes("res/assets/LayaScene_GameScene/Conventional/GameScene.lh"), 
                Laya.stage.removeChild(this), Laya.stage.addChild(new A()), this.probar = .6;
            }));
        }
        UnZip() {
            console.log("来到这一步"), j.Instance.GetSdkHepler.LoadZipForLocal("Assets.zip", "1.1", () => {
                this.showSceneLoad(), this.probar = .3;
            }, e => {}, null);
        }
        onDisable() {
            y.HideBanner(), Laya.timer.clear(this, this.Updateprobar);
        }
        Updateprobar() {
            this.startpro.value = this.probar;
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(e.width, e.height) : Laya.init(e.width, e.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = "exactfit", Laya.stage.screenMode = e.screenMode, Laya.stage.alignV ="", 
            Laya.stage.alignH = "middle", Laya.URL.exportSceneToJson = e.exportSceneToJson, 
            (e.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            e.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), e.stat && Laya.Stat.show(), 
            y.onInit(), Laya.timer.loop(1e3, this, this.GetServerConfig), new G();
            let t = [ "zip/Assets.zip", "Images/", "res/atlas", "fileconfig.json" ];
            Laya.Browser.onMiniGame && (Laya.MiniAdpter.init(), Laya.MiniAdpter.nativefiles = t);
            platform.getInstance().cargamesstartup("Excavator-Driver",()=>{
                var picCar=new Laya.Image();
                picCar.skin="car.png";
                picCar.right=0;
                picCar.top=0;
                picCar.zOrder=3000;
                Laya.stage.addChild(picCar);
                picCar.on(Laya.Event.MOUSE_DOWN,this,()=>{
                  platform.getInstance().navigate();
                })
                GameController.getInstance().getGamelist().centerY=200;
                GameController.getInstance().getGamelist().scaleX=0.7;
                GameController.getInstance().getGamelist().scaleY=0.7;
                platform.getInstance().initList(GameController.getInstance().getGamelist());



                
               
                


                
                

                







                this.StartLoad(), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);

            })
            //this.StartLoad(), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {}
        StartLoad() {
            Laya.loader.load([ "images/main/background.png", "images/main/loding_progress_2.png", "images/main/loding_progress_1.png" ], new Laya.Handler(this, () => {
                Laya.stage.addChild(new H());
            }));
        }
        GetServerConfig() {
           // console.log("轮询获取配置表！！！！！！"), y.SeverJsonObj && (m.config = y.SeverJsonObj, Laya.timer.clear(this, this.GetServerConfig), 
           // A.instance && (y.AdFlag && A.instance.onOpenTaoLu(), y.AdFlag && y.EnableWXQuitUI && A.instance.onOpenTaoLu2())), 
           // console.log(m.config);
        }
    }();
}();