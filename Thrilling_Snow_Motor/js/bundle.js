

!function () {
    "use strict";
    class e extends Laya.Script { }
    e.UmaKey = "", e.XJSDKKey = "6ba0e62e414a2bd9bd6de7b2d712a7d9", e.BannerId = "adunit-cfc475e32f899b74",
        e.BannerId_1 = "adunit-ea65fc0bafc531b8", e.BannerId_2 = "adunit-9fffe8b7db0d25dc",
        e.BannerId_3 = "adunit-99095a0de21f92c5", e.BannerId_4 = "adunit-128d376e3f0ecba6",
        e.InterId = "", e.VideoId = "adunit-a620cf96b8085bb9", e.CustomId = "adunit-586f73e1f5797279",
        e.GridId = "adunit-6b662543d5de3ae6", e.SeverJsonPath = "https://saichechongchong-1300018364.cos.ap-chengdu.myqcloud.com/ProjectJsonConfig.json",
        e.DeviceOrientation = !1, e.SDKURL = "https://leyisdk-1300018364.cos.ap-chengdu.myqcloud.com",
        e.JsonName = "LeYiGuideData.json", e.LeYiProjectName = "gesila1", e.SDKGuideVersion = 1,
        e.CustomId_1 = "", e.IsBanner5 = !0;
    class t extends Laya.Script {
        constructor() {
            super();
        }
        static get GameList() {
            return t.RandomSortArray(t.gamelist);
        }
        static onInit() {
            if (Laya.Browser.onMiniGame) {
                t.PlatformObj = Laya.Browser.window.wx, Laya.Browser.onIOS ? t.isIOSPhone = !0 : t.isIOSPhone = !1,
                    t.GetSeverData(), t.onInitShareMenu(), t.InitSDK(), t.GetSDKData();
                try {
                    t.CheckUpdate();
                } catch (e) { }
                this.isSeverADID || t.InitWXADCompoent(), t.PlatformObj.onShow(() => {
                    t.OnShowCallBack && t.OnShowCallBack(), t.FirstOnShow && (t.FirstOnShow = !1);
                }), t.PlatformObj.onHide(() => {
                    t.OnHideCallBack && t.OnHideCallBack();
                }), Laya.timer.loop(1e3, t, () => {
                    t.InterReadyTime++, t.InterReadyTime >= 20 && (t.InterReadyTime = 20, t.AdFlag && e.DeviceOrientation),
                        t.BannerAutorefrsh++, t.BannerAutorefrsh >= t.BannerShowTime && (t.BannerAutorefrsh = 0,
                            e.IsBanner5 ? t.IsBannerUpdate && t.SpecialOff && (t.HideBanner(), t.ShowBanner()) : t.CreatBanner(1, e.BannerId));
                });
            }
        }
        static ResetBannerAutorefrsh() {
            console.log("重置Banner时间"), t.BannerAutorefrsh = t.BannerShowTime;
        }
        static compareVersion(e, t) {
            e = e.split("."), t = t.split(".");
            const a = Math.max(e.length, t.length);
            for (; e.length < a;) e.push("0");
            for (; t.length < a;) t.push("0");
            for (let i = 0; i < a; i++) {
                const a = parseInt(e[i]), s = parseInt(t[i]);
                if (a > s) return 1;
                if (a < s) return -1;
            }
            return 0;
        }
        static CreatInter() {
            if (!t.InterADState) return;
            let a = t.PlatformObj.getSystemInfoSync();
            t.compareVersion(a.SDKVersion, "2.6.0") < 0 ? console.log("原生版本号过低，无法使用") : t.InterObj = t.PlatformObj.createInterstitialAd({
                adUnitId: e.InterId
            });
        }
        static CreatCustomAD() {
            if (!t.CustomADState) return;
            let a = t.PlatformObj.getSystemInfoSync();
            if (t.compareVersion(a.SDKVersion, "2.11.1") < 0) return void console.log("原生版本号过低，无法使用");
            let i = 0;
            if (i = e.DeviceOrientation ? t.Custom_topProportion : .01, "" == e.CustomId) return;
            let s = t.PlatformObj.createCustomAd({
                adUnitId: e.CustomId,
                left: t.LefytCustom_ToLeft,
                top: a.screenHeight * i,
                fixed: !1
            });
            s.onLoad(() => {
                t.CustomObj = s;
            }), s.onError(e => {
                t.CreatCustomAD();
            });
        }
        static CreatCustomAD1() {
            if (!t.CustomADState) return;
            let a = t.PlatformObj.getSystemInfoSync();
            if (t.compareVersion(a.SDKVersion, "2.11.1") < 0) return void console.log("原生版本号过低，无法使用");
            let i = 0;
            if (i = e.DeviceOrientation ? t.Custom_topProportion : .01, "" == e.CustomId_1) return;
            let s = t.PlatformObj.createCustomAd({
                adUnitId: e.CustomId_1,
                left: a.screenWidth - t.RightCustom_ToRight,
                top: a.screenHeight * i,
                fixed: !1
            });
            s.onLoad(() => {
                t.CustomObj_1 = s;
            }), s.onError(e => {
                t.CreatCustomAD1();
            });
        }
        static ShowCustomAD() {
            t.CustomADState && t.AdFlag && (t.CustomObj ? t.CustomObj.isShow() || t.CustomObj.show() : Laya.timer.once(500, this, this.ShowCustomAD),
                t.CustomObj_1 ? t.CustomObj_1.isShow() || t.CustomObj_1.show() : Laya.timer.once(500, this, this.ShowCustomAD));
        }
        static HideCustomAD() {
            t.CustomObj && t.CustomObj.isShow() && t.CustomObj.hide(), t.CustomObj_1 && t.CustomObj_1.isShow() && t.CustomObj_1.hide();
        }
        static CreatGridAD() {
            "" != e.GridId && (t.GridObj = t.PlatformObj.createGridAd({
                adUnitId: e.GridId,
                style: {
                    left: 10,
                    top: 10,
                    width: 50,
                    height: 250
                }
            }), t.GridObj.onError(() => { }));
        }
        static ShowGridAD() {
            t.GridObj && t.GridObj.show();
        }
        static HideGridAD() {
            t.GridObj && t.GridObj.hide();
        }
        LoadingSDK() {
            t.PlatformObj.xiangjiao.load();
        }
        LoginSDK() {
            t.LoginFinsh || (t.PlatformObj.xiangjiao.login(), t.LoginFinsh = !0);
        }
        startGameRole() {
            t.roleFinsh || (t.PlatformObj.xiangjiao.role(), t.roleFinsh = !0);
        }
        static ShowInterAD() {
            t.InterADState && (20 == t.InterReadyTime ? t.InterObj && (t.InterReadyTime = 0,
                t.InterObj.show()) : console.log("插屏未就绪"));
        }
        static ShowVideos() {
            this.EnableADCompoent && t.VideoObj ? (t.VideoObj.show().catch(() => {
                t.VideosLoadFailCallback && t.VideosLoadFailCallback();
            }), t.InterReadyTime = 0) : t.VideosLoadFailCallback && t.VideosLoadFailCallback();
        }
        static InitUma() {
            t.PlatformObj.uma.init({
                appKey: e.UmaKey,
                useOpenid: !1,
                autoGetOpenid: !1,
                debug: !0
            });
        }
        static onInitShareMenu() {
            t.PlatformObj.showShareMenu({
                withShareTicket: !0,
                success: e => {
                    console.log("分享面板初始化成功");
                }
            });
        }
        static InitSDK() {
            Laya.Browser.onMiniGame && (t.EnableAld && (t.PlatformObj.aldInit.default.Init(),
                t.GetFromAPPID()), window.WxMiniSDK.init(e.XJSDKKey, "", e => { }));
        }
        static GetSeverData() {
            Laya.loader.load(e.SeverJsonPath, new Laya.Handler(t, () => {
                t.SeverJsonObj = Laya.loader.getRes(e.SeverJsonPath);
                try {
                    "1" == t.SeverJsonObj.DoubleClick && (t.DoubleClickFalg = !0), "1" == t.SeverJsonObj.EnableWxQuitUI && (t.EnableWXQuitUI = !0),
                        "1" == t.SeverJsonObj.NewGuideBannerFalg && (t.NewBannerAdFalg = !0), t.NewBannerAdFalgUpTime = parseFloat(t.SeverJsonObj.NewGuideBannerFalgUpTime),
                        t.SeverConfigLoadingFinsh = !0, console.log("服务器数据拉取完成");
                } catch (e) { }
                Laya.timer.once(500, this, () => {
                    t.TrySeverConfig();
                });
            }));
        }
        static GetConstValueData() {
            Laya.loader.load(t.ConstSeverJsonPath, new Laya.Handler(t, () => {
                t.ConstSeverJsonObj = Laya.loader.getRes(t.ConstSeverJsonPath);
                try {
                    "1" == t.ConstSeverJsonObj.InterADState && (t.InterADState = !0, t.CreatInter()),
                        "1" == t.ConstSeverJsonObj.CustomADState && (t.CustomADState = !0, t.CreatCustomAD(),
                            t.CreatCustomAD1()), t.BoxClickAddValue = parseFloat(t.ConstSeverJsonObj.BoxClickAddValue),
                        t.BoxFrameSubValue = parseFloat(t.ConstSeverJsonObj.BoxFrameSubValue), t.ShowBoxBannerValue = parseFloat(t.ConstSeverJsonObj.ShowBoxBannerValue),
                        t.BannerUpValue = parseFloat(t.ConstSeverJsonObj.BannerUpValue), t.BannerClickMin = parseFloat(t.ConstSeverJsonObj.BannerMin),
                        t.BannerClickMax = parseFloat(t.ConstSeverJsonObj.BannerMax), t.BannerShowHideTime = parseFloat(t.ConstSeverJsonObj.BanShowHideTime),
                        t.BoxCount = parseFloat(t.ConstSeverJsonObj.BoxShowCount), t.BannerShowShowTime = parseFloat(t.ConstSeverJsonObj.BannerShowShowTime),
                        t.SetSeverConfig(), t.RdTime = parseFloat(t.ConstSeverJsonObj.RdTime), t.ConstSeverConfigLoadingFinsh = !0,
                        console.log("常量数据拉取完成", t.ConstSeverJsonObj);
                } catch (e) {
                    Laya.timer.once(500, this, () => {
                        t.TryConstSeverConfig();
                    });
                }
            }));
        }
        static GetPlayerConfig() {
            Laya.loader.load("https://pv.sohu.com/cityjson?ie=utf-8", Laya.Handler.create(this, () => {
                var e = Laya.loader.getRes("https://pv.sohu.com/cityjson?ie=utf-8");
                try {
                    if (e) {
                        var a = e.split("=")[1].split(";")[0], i = JSON.parse(a);
                        console.log("地区屏蔽", a), t.userCity = i.cname, console.log(t.userCity), t.GetConstValueData();
                    }
                } catch (e) {
                    t.GetConstValueData();
                }
            }));
        }
        static SetSeverConfig() {
            t.BannerCity = t.ConstSeverJsonObj.bannerCity;
        }
        static TryConstSeverConfig() {
            t.ConstSeverConfigLoadingFinsh || t.GetConstValueData();
        }
        static TrySeverConfig() {
            t.SeverConfigLoadingFinsh || t.GetSeverData();
        }
        static GetSDKData() {
            window.WxMiniSDK.getGuide(e.SDKGuideVersion, a => {
                if (console.log("版本号：", e.SDKGuideVersion), console.log("SDK数据源", a), a.info) {
                    t.gamelist = [];
                    for (const e of a.info.gamelist) {
                        let a = e, i = {
                            name: a.name,
                            icon: a.icon,
                            appid: a.appid,
                            path: a.path,
                            extra: a.extra,
                            type: a.icon_type,
                            iconLis: a.icon_list,
                            id: a.id
                        };
                        t.gamelist.push(i);
                    }
                    let s = [];
                    for (const e of a.info.gamelist) {
                        let t = e;
                        for (const e of t.icon_arr) {
                            let a = "https://gz-1305296755.file.myqcloud.com/" + e, i = {
                                name: t.name,
                                icon: a,
                                appid: t.appid,
                                path: t.path,
                                extra: t.extra,
                                type: t.icon_type,
                                iconLis: t.icon_list,
                                id: t.id
                            };
                            s.push(i);
                        }
                    }
                    s = s.sort((e, t) => Math.random() > .5 ? 1 : -1);
                    for (const e of s) t.gamelist.push(e);
                    console.log("卖量数据：", t.gamelist), t.GameListBack = t.gamelist, t.GameListOver = t.gamelist,
                        t.GameListBottom = t.gamelist, t.GameListSide = t.gamelist, t.GameList_Back_two = t.gamelist,
                        t.GameList_Back_rolling = t.gamelist, t.GameList_four = t.gamelist, 0 == a.special_edition && (t.SpecialOff = !0),
                        1 == a.is_mp && (this.IsMp = !0), 1 == a.guide_flag_three && (t.Guide_three = !0),
                        t.ScenesGuideOneJumpCount = parseFloat(a.JumpCount), t.SceneADValueOpen = t.WxGetScenesValue(a.adFlagScenes),
                        t.SceneFlagOneValueOpen = t.WxGetScenesValue(a.autoJumpMiniGame), t.ScenesGuideOneValueOpen = t.WxGetScenesValue(a.enaterGameScenes),
                        t.SceneFlagTwoValueOpen = t.WxGetScenesValue(a.VideoScenes), t.SceneGuideTwoValueOpen = t.WxGetScenesValue(a.FirstGuideScenes);
                    let n = t.PlatformObj.getLaunchOptionsSync().query;
                    console.log("用户query", n), Object.keys(n).length > 0 && n.wxgamecid && -1 != n.wxgamecid.indexOf("CCBgAAo") && Laya.LocalStorage.setItem("flagUser", "1");
                    var i = Laya.LocalStorage.getItem("flagUser");
                    if (i && "1" == i && (t.TagUser = !0), t.TagUser ? (t.SceneADValueOpen = !0, t.SceneFlagOneValueOpen = !0,
                        t.SceneFlagTwoValueOpen = !0, t.SceneGuideTwoValueOpen = !0, t.ScenesGuideOneValueOpen = !0,
                        t.Guide_three = !1) : (t.SceneADValueOpen = !1, t.SceneFlagOneValueOpen = !1, t.SceneFlagTwoValueOpen = !1,
                            t.SceneGuideTwoValueOpen = !1, t.ScenesGuideOneValueOpen = !1), 0 != a.flag && t.SceneADValueOpen && (t.AdFlag = !0),
                        1 == a.guide_flag_four && t.SceneFlagOneValueOpen && (t.GuideFlag_one = !0), 1 == a.enterGameGuide && t.ScenesGuideOneValueOpen && (t.Guide_one = !0),
                        1 == a.guide_flag_one && t.SceneFlagTwoValueOpen && (t.GuideFlag_two = !0), 1 == a.guide_flag_two && t.SceneGuideTwoValueOpen && (t.Guide_two = !0,
                            Laya.LocalStorage.setItem("flagUser", "1")), t.BannerShowTime = t.SpecialOff ? 4 : 15,
                        this.isSeverADID) {
                        try {
                            5 == a.ad.ad_banner.length ? (e.BannerId = a.ad.ad_banner[0], e.BannerId_1 = a.ad.ad_banner[1],
                                e.BannerId_2 = a.ad.ad_banner[2], e.BannerId_3 = a.ad.ad_banner[3], e.BannerId_4 = a.ad.ad_banner[4],
                                e.VideoId = a.ad.ad_videos[0]) : 1 == a.ad.ad_banner.length && (e.BannerId = a.ad.ad_banner[0],
                                    e.VideoId = a.ad.ad_videos[0]);
                        } catch (e) {
                            console.error("注意！本项目采用服务器下放广告ID,但服务器配置错误");
                        }
                        t.InitWXADCompoent();
                    }
                    t.GetPlayerConfig(), t.GameList.length > 0 && t.GameListBack.length > 0 && t.GameListOver.length > 0 && (t.SDKManagerLoadingFinsh = !0,
                        this.DebugFalg && (t.AdFlag = !0, t.GuideFlag_one = !0, t.GuideFlag_two = !0, t.Guide_one = !0,
                            t.Guide_two = !0), t.XJSDKDownFinsh = !0);
                }
                t.XJSDKDownFinsh = !0;
            }), Laya.timer.once(500, this, () => {
                t.TryLeYiSDKManager();
            });
        }
        static BoolUserInitStage() {
            var e = Laya.LocalStorage.getItem("UserFirstScene") || "0";
            return t.SceneADValueOpen || "0" != e || Laya.LocalStorage.setItem("UserFirstScene", "-1"),
                "-1" != (Laya.LocalStorage.getItem("UserFirstScene") || "0");
        }
        static TryLeYiSDKManager() {
            t.XJSDKDownFinsh || t.GetSDKData();
        }
        static GetFromAPPID() {
            if (Laya.Browser.onMiniGame) {
                var e = t.PlatformObj.getLaunchOptionsSync();
                if (1037 == e.scene) {
                    let a = e.referrerInfo;
                    a && a.appId && t.SetAldingMsg("用户来源", a.appId);
                }
            }
        }
        static WxGetScenesValue(e) {
            if (Laya.Browser.onMiniGame) {
                var a = t.PlatformObj.getLaunchOptionsSync();
                a.scene;
                for (const t of e) if (t == a.scene) return console.log("当前场景值", a.scene), !0;
                return console.log("当前场景值", a.scene), !1;
            }
        }
        static ExposureData(e) {
            var a = [], i = "";
            switch (e) {
                case 1:
                    a = t.GameList, i = "gamelist界面";
                    break;

                case 2:
                    a = t.GameListBack, i = "gamelistBack界面";
                    break;

                case 3:
                    a = t.GameListOver, i = "gamelistOver界面";
                    break;

                case 4:
                    a = t.GameListBottom, i = "gamelistBottom界面";
                    break;

                case 5:
                    a = t.GameListSide, i = "gamelistSide界面";
                    break;

                case 6:
                    a = t.GameList_Back_two, i = "gamelistBackTwo界面";
                    break;

                case 7:
                    a = t.GameList_Back_rolling, i = "gamelistBackRolling界面";
                    break;

                case 8:
                    a = t.GameList_four, i = "gamelistBackFour界面";
            }
            a && a.length > 0 && t.ExposureDataEvent(i);
        }
        static ExposureDataEvent(e) {
            Laya.Browser.onMiniGame && t.SetAldingMsg("界面曝光", {
                "曝光界面": e
            });
        }
        static clickMiniProgram(e) {
            Laya.Browser.onMiniGame && (window.WxMiniSDK.click(e), console.log("点击数据上报成功"));
        }
        static SuccessNavMiniGame(e) {
            Laya.Browser.onMiniGame && (Laya.LocalStorage.setItem(e, "jump"), window.WxMiniSDK.skip(e),
                console.log("小游戏跳转成功"));
        }
        static InitWXADCompoent() {
            this.EnableADCompoent && Laya.Browser.onMiniGame && (t.CreatVideo(), e.IsBanner5 ? (t.CreatBanner5(1, e.BannerId),
                t.CreatBanner5(2, e.BannerId_1), t.CreatBanner5(3, e.BannerId_2), t.CreatBanner5(4, e.BannerId_3),
                t.CreatBanner5(5, e.BannerId_4)) : t.CreatBanner(1, e.BannerId));
        }
        static CreatBanner(a, i) {
            if (!this.EnableADCompoent) return;
            if (!i) return;
            if (!Laya.Browser.onMiniGame) return;
            let s = null;
            1 == a ? s = t.BannerObj1 : 2 == a ? s = t.BannerObj2 : 3 == a && (s = t.BannerObj3);
            let n = t.PlatformObj.getSystemInfoSync(), o = 0, r = 0, l = 0;
            e.DeviceOrientation ? (o = .05 * n.screenWidth, r = .9 * n.screenWidth, l = n.screenHeight) : (o = .3 * n.screenWidth,
                r = .4 * n.screenWidth, l = 5 * n.screenHeight), (s = t.PlatformObj.createBannerAd({
                    adUnitId: i,
                    style: {
                        left: o,
                        top: l,
                        width: r
                    }
                })).onError(e => {
                    console.log("广告banner错误信息", e), t.BannerObj1 ? t.SpecialOff && t.IsBannerUpdate && (t.ShowBanner(),
                        t.currBannerUpdateState = !0, console.log("banner加载成功"), Laya.timer.once(t.BannerShowHideTime, this, () => {
                            t.currBannerUpdateState = !1, t.HideBanner();
                        })) : 1004 != e.errCode && 5019 != e.errCode || t.BannerErrCount++, s = null;
                }), s.onLoad(() => {
                    if (t.BannerObj1 && (t.BannerObj1.destroy(), t.BannerObj1 = null), t.BannerObj1 = s,
                        t.BannerErrCount = 0, t.AdFlag || t.FirstLoadBanner) {
                        if (t.FirstLoadBanner = !1, !t.IsBannerUpdate) return;
                        t.ShowBanner(), t.currBannerUpdateState = !0, console.log("banner加载成功"), Laya.timer.once(t.BannerShowHideTime, this, () => {
                            t.currBannerUpdateState = !1, t.HideBanner();
                        });
                    }
                }), s.onResize(e => {
                    s.style.top = n.screenHeight - e.height, s.style.left = (n.screenWidth - e.width) / 2;
                });
        }
        static CreatBanner5(a, i) {
            if (!this.EnableADCompoent) return;
            if (!i) return;
            if (!Laya.Browser.onMiniGame) return;
            let s = null, n = t.PlatformObj.getSystemInfoSync(), o = 0, r = 0, l = 0;
            e.DeviceOrientation ? (o = .05 * n.screenWidth, r = .9 * n.screenWidth, l = n.screenHeight) : (o = .3 * n.screenWidth,
                r = .4 * n.screenWidth, l = 5 * n.screenHeight), (s = t.PlatformObj.createBannerAd({
                    adUnitId: i,
                    style: {
                        left: o,
                        top: l,
                        width: r
                    }
                })).onError(e => {
                    console.log(`广告banner${a}错误信息`, e), s = null;
                }), s.onLoad(() => {
                    t.BannerObjs.push(s), 1 == t.BannerObjs.length && t.SpecialOff && (t.ShowBanner(),
                        t.currBannerUpdateState = !0, console.log("banner加载成功"), Laya.timer.once(t.BannerShowHideTime, this, () => {
                            t.currBannerUpdateState = !1, t.HideBanner();
                        }));
                }), s.onResize(e => {
                    s.style.top = n.screenHeight - e.height, s.style.left = (n.screenWidth - e.width) / 2;
                });
        }
        static ShowBanner() {
            this.EnableADCompoent && (e.IsBanner5 ? (t.BannerObjs[t.BannerIndex] && t.BannerObjs[t.BannerIndex].show(),
                t.BannerIndex++, t.BannerIndex >= t.BannerObjs.length && (t.BannerIndex = 0)) : t.BannerObj1 && t.BannerObj1.show());
        }
        static HideBanner() {
            if (!t.currBannerUpdateState && this.EnableADCompoent) if (e.IsBanner5) for (let e = 0; e < t.BannerObjs.length; e++) t.BannerObjs[e] && t.BannerObjs[e].hide(); else t.BannerObj1 && t.BannerObj1.hide(),
                t.BannerObj2 && t.BannerObj2.hide(), t.BannerObj3 && t.BannerObj3.hide();
        }
        static ForceHideBanner() {
            t.currBannerUpdateState = !1, this.HideBanner();
        }
        static CheckUpdate() {
            if (Laya.Browser.onMiniGame) {
                var e = t.PlatformObj.getUpdateManager();
                e.onCheckForUpdate(function (e) {
                    console.log(e.hasUpdate);
                }), e.onUpdateReady(function () {
                    t.PlatformObj.showModal({
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
            let a = t.PlatformObj.getSystemInfoSync();
            t.compareVersion(a.SDKVersion, "2.0.4") < 0 ? console.log("原生版本号过低，无法使用") : e.VideoId && (t.VideoObj = t.PlatformObj.createRewardedVideoAd({
                adUnitId: e.VideoId
            }), t.VideoObj.onError(e => {
                console.log("激励视频广告出错" + JSON.stringify(e)), t.VideosLoadFailCallback && t.VideosLoadFailCallback(),
                    t.VideosLoadFailCallback = null;
            }), t.VideoObj.onClose(e => {
                e && e.isEnded || void 0 === e ? (t.VideosAwardCallBack && t.VideosAwardCallBack(),
                    t.UpUmaData(4)) : (t.VideosUnfinshCallback && t.VideosUnfinshCallback(), t.UpUmaData(5));
            }), t.VideoObj.load().then(() => { }).catch(e => {
                t.VideoLinkFailCallback && t.VideoLinkFailCallback(e);
            }));
        }
        static Vibrate() {
            Laya.Browser.onMiniGame && t.PlatformObj.vibrateShort({
                success: e => {
                    console.log("短震动成功");
                },
                fail: e => {
                    console.log("短震动失败");
                }
            });
        }
        static ShowToast(e) {
            Laya.Browser.onMiniGame ? t.PlatformObj.showToast({
                title: e,
                duration: 2e3,
                icon: "none"
            }) : console.log(e);
        }
        static AutoJumpMiniGame(e, a) {
            if (t.GuideFlag_one) {
                var i = [];
                switch (e) {
                    case 1:
                        i = t.GameList;
                        break;

                    case 2:
                        i = t.GameListBack;
                        break;

                    case 3:
                        i = t.GameListOver;
                        break;

                    case 4:
                        i = t.GameListBottom;
                        break;

                    case 5:
                        i = t.GameListSide;
                        break;

                    case 6:
                        i = t.GameList_Back_two;
                        break;

                    case 7:
                        i = t.GameList_Back_rolling;
                }
                var s = i[Math.floor(Math.random() * i.length)];
                t.NavigateMiniGame(s, "自动跳转", a, !1);
            }
        }
        static NavigateMiniGame(e, a, i = null, s = !0) {
            let n = {
                [a]: e.name
            };
            console.log("点击小游戏跳转", n);
            var o = e.appid;
            if (Laya.Browser.onMiniGame) {
                s && t.clickMiniProgram(e.id);
                let a = o, n = e.path;
                t.PlatformObj.navigateToMiniProgram({
                    appId: a,
                    path: n,
                    success(a) {
                        e.name;
                        t.SuccessNavMiniGame(e.id), t.SetAldingMsg("nimiGamePass", {
                            sucess: e.name + "appid:" + o
                        });
                    },
                    fail() {
                        i && i(), t.SetAldingMsg("nimiGamePass", {
                            fail: e.name + "appid:" + o
                        });
                    }
                });
            }
        }
        static SetAldingMsg(e, a) {
            t.EnableAld && (console.log(t), t.PlatformObj.aldSendEvent(e, a));
        }
        static setUmaData(e, a) {
            try {
                t.PlatformObj.uma.trackEvent(e, a);
            } catch (e) { }
        }
        static UpUmaData(e) {
            var a = "";
            switch (e) {
                case 0:
                    a = "CloseInter";
                    break;

                case 1:
                    a = "ClickStartBtn";
                    break;

                case 2:
                    a = "gameStart";
                    break;

                case 3:
                    a = "gameover";
                    break;

                case 4:
                    a = "VideoSuccess";
                    break;

                case 5:
                    a = "VideoFail";
            }
            t.setUmaData(a, "");
        }
        static onNavButtonListen(e, a, i) {
            a.offAll(), a.on(Laya.Event.CLICK, this, () => {
                t.NavigateMiniGame(e, i);
            });
        }
        static onConfigNavButton(e, t) {
            var a = e.getChildByName("IMG"), i = e.getChildByName("NavName");
            i && (i.text = t.name), a.skin = t.icon, 2 == t.type ? (a.clipX = 3, a.clipY = 3,
                a.autoPlay = !0, a.interval = 200, a.play()) : (a.clipX = 1, a.clipY = 1, a.stop());
        }
        static Share() {
            t.PlatformObj.shareAppMessage({
                imageUrl: "",
                title: "快来跟我一起吃西瓜吧"
            });
        }
        static RandomSortArray(e) {
            let t = [], a = e.length;
            var i = [];
            for (let a = 0; a < e.length; a++) t.push(e[a]);
            for (var s = 0; s < a; s++) {
                var n = Math.floor(Math.random() * t.length);
                i.push(t[n]), t.splice(n, 1);
            }
            return i;
        }
        static showChestUIModal(e, a) {
            t.PlatformObj.showModal({
                title: "提示",
                content: "恭喜获得200$",
                cancelText: "再来一次",
                success(t) {
                    t.confirm ? a && a() : t.cancel && e && e();
                }
            });
        }
    }
    t.gamelist = [], t.GameListBack = [], t.GameListOver = [], t.GameListBottom = [],
        t.GameListSide = [], t.GameList_Back_two = [], t.GameList_Back_rolling = [], t.GameList_four = [],
        t.IsMp = !1, t.SpecialOff = !1, t.SceneADValueOpen = !1, t.SceneFlagOneValueOpen = !1,
        t.SceneFlagTwoValueOpen = !1, t.SceneGuideTwoValueOpen = !1, t.ScenesGuideOneValueOpen = !1,
        t.ScenesGuideOneJumpCount = 0, t.AdFlag = !1, t.GuideFlag_one = !1, t.GuideFlag_two = !1,
        t.Guide_one = !1, t.Guide_two = !1, t.Guide_three = !1, t.SDKManagerLoadingFinsh = !1,
        t.SeverConfigLoadingFinsh = !1, t.ConstSeverConfigLoadingFinsh = !1, t.DoubleClickFalg = !1,
        t.isIOSPhone = !1, t.isAndroid = !0, t.isIos = !0, t.FirstOnShow = !0, t.BannerObjs = [],
        t.BannerErrCount = 0, t.BannerObj1 = null, t.BannerObj2 = null, t.BannerObj3 = null,
        t.InterADState = !1, t.CustomADState = !1, t.EnableWXQuitUI = !1, t.InterReadyTime = 0,
        t.BannerAutorefrsh = 0, t.LoginFinsh = !1, t.roleFinsh = !1, t.DebugFalg = !1, t.NewBoxAdFalg = !1,
        t.NewBannerAdFalg = !1, t.NewBannerAdFalgUpTime = 0, t.XJSDKDownFinsh = !1, t.RdTime = 3e3,
        t.BannerUpValue = 1500, t.BoxClickAddValue = .1, t.BoxFrameSubValue = .0025, t.ShowBoxBannerValue = .3,
        t.ConstSeverJsonPath = "https://gz-1305296755.file.myqcloud.com/ConstParmJson.json?a=1",
        t.BannerClickMax = 4, t.BannerClickMin = 2, t.EnableAld = !1, t.BannerShowTime = 15,
        t.BannerShowShowTime = 10, t.BoxCount = 1, t.BannerShowHideTime = 4e3, t.EnableADCompoent = !0,
        t.currBannerUpdateState = !1, t.IsBannerUpdate = !0, t.FirstLoadBanner = !0, t.TagUser = !1,
        t.isSeverADID = !0, t.Custom_topProportion = .35, t.LefytCustom_ToLeft = 10, t.RightCustom_ToRight = 80,
        t.BannerIndex = 0;
    class a {
        static ArrayClear(e, t, a, i) {
            for (var s = t + a; t < s;) e[t++] = i;
        }
        static ArrayCopy(e, t, a, i, s) {
            for (var n = t + s; t < n;) a[i++] = e[t++];
        }
        static ArrayCopy1(e, t, i) {
            a.ArrayCopy(e, 0, t, 0, i);
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
            for (var i = 0, s = 0, n = 0; n < e.length; n++) i = (i = Math.max(-1, Math.min(1, e[n]))) < 0 ? i * a.SHORT_MIN : i * a.SHORT_MAX,
                t[n] = i, s += Math.abs(i);
            return s;
        }
        static AryRandom(e) {
            let t, a;
            for (let i = 0; i < e.length; i++) {
                do {
                    t = Math.floor(Math.random() * e.length);
                } while (t != i);
                a = e[t], e[t] = e[i], e[i] = a;
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
        static RegisterClickByCaller(e, t, a, i, s = !0, n = "", o = !0) {
            e.on(Laya.Event.CLICK, this, () => {
                this.PlaySingleSound(n, o), a.apply(t, i);
            }), s && (e.on(Laya.Event.MOUSE_DOWN, this, () => {
                e.scale(.9, .9, !0);
            }), e.on(Laya.Event.MOUSE_UP, this, () => {
                e.scale(1, 1, !0);
            }), e.on(Laya.Event.MOUSE_OUT, this, () => {
                e.scale(1, 1, !0);
            }));
        }
        static RegisterClickByCaller2(e, t, a, i, s, n = !0, o = "", r = !0) {
            n && (e.on(Laya.Event.MOUSE_DOWN, this, () => {
                e.scale(.9, .9, !0), a.apply(t);
            }), e.on(Laya.Event.MOUSE_UP, this, () => {
                e.scale(1, 1, !0), i.apply(t);
            }), e.on(Laya.Event.MOUSE_OUT, this, () => {
                e.scale(1, 1, !0), i.apply(t);
            }));
        }
        static PlaySingleSound(e, t = !0) { }
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
            if (a.isShowCheckLinkTip) return;
            a.isShowCheckLinkTip = !0;
            let e = new Laya.Dialog();
            e.width = Laya.stage.width, e.height = Laya.stage.height;
            let t = new Laya.Image();
            t.skin = "start/tip.png", t.sizeGrid = "25, 25 ,25 ,25", t.width = 400, t.height = 200,
                t.centerY = -20, t.centerX = 0;
            let i = new Laya.Label();
            i.text = "网络错误, 请检查网络!", i.fontSize = 34, i.color = "#6c5a98", i.font = "Microsoft YaHei",
                i.bold = !0, i.centerX = 0, i.anchorX = .5, i.centerY = 0, a.isShowCheckOnStartUp && (i.text = "网络错误，请重开游戏!"),
                a.isUnLink = !0, t.addChild(i), e.addChild(t), e.popup(), this.logTiP = e;
        }
        static closeCheckLinkTip() {
            a.isShowCheckLinkTip && !a.isShowCheckOnStartUp && (a.isShowCheckLinkTip = !1, a.logTiP.close());
        }
        static getNowDateYMD() {
            let e = new Date();
            return e.getFullYear() + "" + (e.getMonth() + "") + (e.getDate() + "");
        }
        static formatSeconds(e) {
            var t = parseInt(e), a = 0, i = 0, s = 0;
            t > 60 && (a = parseInt((t / 60).toString()), t = parseInt((t % 60).toString()),
                a > 60 && (i = parseInt((a / 60).toString()), a = parseInt((a % 60).toString()),
                    i > 24 && (s = parseInt((i / 24).toString()), i = parseInt((i % 24).toString()))));
            var n = "";
            return t > 0 && (n = "" + t), a > 0 && (n = a + ":" + n), i > 0 && (n = i + ":" + n),
                s > 0 && (n = s + ":" + n), n;
        }
        static My2DTo3DPoint(e, t, a, i = !0) {
            let s = new Laya.Vector3(0, 0, 0), n = a.localToGlobal(new Laya.Point(t.x, t.y)), o = Laya.stage.width / 2 - Laya.stage.designWidth / 2, r = Laya.stage.height / 2 - Laya.stage.designHeight / 2;
            return i ? e.convertScreenCoordToOrthographicCoord(new Laya.Vector3(n.x + o, n.y + r, 0), s) : e.convertScreenCoordToOrthographicCoord(new Laya.Vector3(n.x, n.y, 0), s),
                s;
        }
        static IsSamePoint(e, t) {
            return e.x == t.x && e.y == t.y && e.z == t.z;
        }
        static FindChildByName(e, t) {
            let a = t => {
                if (t.name == e) return t;
                let i = null;
                for (let s = 0; s < t.numChildren; s++) {
                    if (t.getChildAt(s).name == e) {
                        i = t.getChildAt(s);
                        break;
                    }
                    if (t.getChildAt(s).numChildren && (i = a(t.getChildAt(s)))) break;
                }
                return i;
            };
            if (t.name == e) return t;
            for (let e = 0; e < t.numChildren; e++) {
                let i = a(t.getChildAt(e));
                if (i) return i;
            }
            return null;
        }
        static ArrayRandom(e) {
            return e[Math.round(Math.random() * (e.length - 1))];
        }
    }
    a.INT_MAX = 2147483647, a.INT_MIN = -2147483648, a.SHORT_MAX = 32767, a.SHORT_MIN = 32768,
        a.BYTE_MAX = 127, a.BYTE_MIN = 128, a.isShowCheckLinkTip = !1, a.isUnLink = !1,
        a.isShowCheckOnStartUp = !0, a.logTiP = null;
    class i {
        constructor() {
            this.Skin = [], this.Weapon = [], this.initModel();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new i();
        }
        initModel() {
            this.Skin = this.getJsonModel(i.SkinKey) || [0], this.SkinIndex = this.getItemModel(i.SkinIndexKey) || 0,
                this.Weapon = this.getJsonModel(i.WeaponKey) || [0], this.WeaponIndex = this.getJsonModel(i.WeaponIndexKey) || 0,
                this.Coin = this.getItemModel(i.CoinKey) || 0, this.Level = this.getItemModel(i.LevelKey) || 1,
                this.CarId = this.getItemModel(i.CarIdKey) || 1;
        }
        addSkin(e) {
            -1 == this.Skin.indexOf(e) && (this.Skin.push(e), this.setJsonModel(i.SkinKey, this.Skin));
        }
        addWeapon(e) {
            -1 == this.Weapon.indexOf(e) && (this.Weapon.push(e), this.setJsonModel(i.WeaponKey, this.Weapon));
        }
        addCoin(e) {
            this.Coin += e, this.setItemModel(i.CoinKey, this.Coin);
        }
        reduceCoin(e) {
            this.Coin -= e, this.setItemModel(i.CoinKey, this.Coin);
        }
        setLevel(e) {
            this.Level = e, this.setItemModel(i.LevelKey, this.Level);
        }
        changeWeapon(e) {
            -1 != this.Weapon.indexOf(e) && (this.WeaponIndex = e, this.setItemModel(i.WeaponIndexKey, this.WeaponIndex));
        }
        changeSkin(e) {
            -1 != this.Skin.indexOf(e) && (this.SkinIndex = e, this.setItemModel(i.SkinIndexKey, this.SkinIndex));
        }
        getItemModel(e) {
            return parseInt(Laya.LocalStorage.getItem(e));
        }
        setItemModel(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        setJsonModel(e, t) {
            Laya.LocalStorage.setJSON(e, t);
        }
        getJsonModel(e) {
            return Laya.LocalStorage.getJSON(e);
        }
    }
    i.SkinKey = "Skin", i.SkinIndexKey = "SkinIndex", i.WeaponKey = "Weapon", i.WeaponIndexKey = "WeaponIndex",
        i.CoinKey = "Coin", i.LevelKey = "Level", i.CarIdKey = "CarId";
    class s extends Laya.Script {
        constructor() {
            super(...arguments), this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            this.onResize();
        }
        opened(e) { }
        closed(e) { }
        reShow(e) { }
        beHide(e) { }
        initMl() {
            Laya.Browser.onMiniGame;
        }
        showMl() { }
        showBn1() {
            // Laya.Browser.onMiniGame && t.ShowBanner();
        }
        closeBn1() {
            // Laya.Browser.onMiniGame && (t.SpecialOff || t.HideBanner());
        }
        onVideoEvent(e, a = null, i = null, s = null) {
            // Laya.Browser.onMiniGame && (t.VideosAwardCallBack = e, t.VideosUnfinshCallback = a || (() => {}), 
            // t.VideosLoadFailCallback = i || (() => {}), t.VideoLinkFailCallback = s || (() => {}), 
            // t.ShowVideos());
        }
        onVideoChest() {
            // console.log("宝箱误点：", t.GuideFlag_two), this.onVideoEvent(() => {
            //     this.OpenChestEvent();
            // }, () => {
            //     this.OpenChestEvent();
            // }, () => {
            //     this.OpenChestEvent();
            // }, () => {
            //     this.OpenChestEvent();
            // });
        }
        OpenChestEvent() {
            // console.log("打开宝箱：", P.BoxCount), P.BoxCount <= 0 || (this.GameCtr.openUI(F.ChestUI), 
            // P.BoxCount--);
        }
        showJumpBn1(e, i, s) {
            // if (e.offAll(), !Laya.Browser.onMiniGame || !t.AdFlag) return void a.RegisterClickByCaller(e, i, s);
            // let n = 1500;
            // t.BannerUpValue && (n = t.BannerUpValue), Laya.timer.once(n, this, () => {
            //     this.showBn1(), Laya.timer.once(3e3, this, () => {
            //         this.closeBn1(), a.RegisterClickByCaller(e, i, s);
            //     });
            // });
        }
        showJumpBn2(e, i, s, n, o = null) {
            // if (e.offAll(), !Laya.Browser.onMiniGame || !t.AdFlag) return this.showBn1(), o && o.apply(s), 
            // void a.RegisterClickByCaller(e, s, n);
            // e.y = this.GameCtr.height - 100;
            // let r = 1500;
            // t.BannerUpValue && (r = t.BannerUpValue), Laya.timer.once(r, this, () => {
            //     this.showBn1(), o && o.apply(s), Laya.timer.once(500, this, () => {
            //         t.ShowInterAD(), t.NewBannerAdFalg ? Laya.Tween.to(e, {
            //             y: i
            //         }, t.NewBannerAdFalgUpTime, Laya.Ease.linearIn, new Laya.Handler(this, () => {
            //             a.RegisterClickByCaller(e, s, n);
            //         })) : (e.y = i, a.RegisterClickByCaller(e, s, n));
            //     });
            // });
        }
        showJumpBn3(e, i, s, n, o = null) {
            // if (e.offAll(), !Laya.Browser.onMiniGame || !t.AdFlag) return e.y = this.GameCtr.height - 100, 
            // o && o.apply(s), void a.RegisterClickByCaller(e, s, n);
            // e.y = this.GameCtr.height - 100;
            // let r = 3e3;
            // t.RdTime && (r = t.RdTime), Laya.timer.once(r, this, () => {
            //     o && o.apply(s), a.RegisterClickByCaller(e, s, n);
            // });
        }
        showJumpBn4(e, i, s, n = null) {
            // if (e.visible = !1, e.offAll(), !Laya.Browser.onMiniGame || !t.AdFlag) return e.y = this.GameCtr.height - 100, 
            // n && n.apply(i), e.visible = !0, void a.RegisterClickByCaller(e, i, s);
            // e.y = this.GameCtr.height - 100;
            // let o = 3e3;
            // t.RdTime && (o = t.RdTime), Laya.timer.once(o, this, () => {
            //     n && n.apply(i), e.visible = !0, a.RegisterClickByCaller(e, i, s);
            // });
        }
        onVideoCoin() {
            // Laya.Browser.onMiniGame && t.AdFlag && this.onVideoEvent(() => {
            //     let e = Math.floor(800 * Math.random());
            //     // i.instance.addCoin(e), 


            //     t.ShowToast(`恭喜你获得${e}金币`)
            //     // , this.GameCtr.UpdateCoin(i.instance.Coin);
            // }, () => {
            //     t.ShowToast("看完视频能获得精彩奖励哦！");
            // });
        }
        ShowToast(e) {
            // t.ShowToast(e);
        }
        openTaolu() { }
        openML() { }
        closeML() { }
        onRandomGame() {
            // if (!Laya.Browser.onMiniGame) return;
            // let e = Math.round(Math.random() * (t.GameList.length - 1)), a = t.GameList[e];
            // t.NavigateMiniGame(a, "更多游戏跳转", null, !1);
        }
        onRandomGame2() {
            // if (!Laya.Browser.onMiniGame) return;
            // let e = Math.round(Math.random() * (t.GameList.length - 1)), a = t.GameList[e];
            // t.NavigateMiniGame(a, "更多游戏跳转", () => {
            //     this.GameCtr.openUI(F.MoreGameUI);
            // }, !1);
        }
        onRandomGame3() {
            // if (!Laya.Browser.onMiniGame) return;
            // if (!t.GuideFlag_one) return;
            // let e = Math.round(Math.random() * (t.GameList.length - 1)), a = t.GameList[e];
            // t.NavigateMiniGame(a, "更多游戏跳转", null, !1);
        }
        onMoreGameEvent() {
            // t.SpecialOff;
        }
        onMoreGameEventClick() {
            // t.SpecialOff;
        }
        onMoreGameEventClick2() {
            // t.SpecialOff;
        }
        onMoreGameParam(e = null) {
            // t.SpecialOff;
        }
        onNextGameParam(e = null) {
            // t.SpecialOff;
        }
        onThreeGameParam(e = null) {
            // t.SpecialOff && this.GameCtr.openUI(F.ThreeGameUI, e);
        }
        onFourGameParam(e = null) {
            // t.SpecialOff;
        }
        setNum(e, t) {
            // let a = t.getChildByName("img1"), i = t.getChildByName("img2"), s = t.getChildByName("img3");
            // e < 10 ? (i.skin = `images/main/lianji_${Math.floor(e)}.png`, a.visible = !1, s.visible = !1) : e < 100 ? (a.skin = `images/main/lianji_${Math.floor(e / 10)}.png`, 
            // i.skin = `images/main/lianji_${e % 10}.png`, a.visible = !0, i.visible = !0, s.visible = !1) : e < 1e3 && (a.skin = `images/main/lianji_${Math.floor(e / 100)}.png`, 
            // i.skin = `images/main/lianji_${Math.floor(e / 10) % 10}.png`, s.skin = `images/main/lianji_${e % 10}.png`, 
            // a.visible = !0, i.visible = !0, s.visible = !0);
        }
        setNum2(e, t) {
            // let a = t.getChildByName("img1"), i = t.getChildByName("img2"), s = t.getChildByName("img3");
            // e < 10 ? (i.skin = `images/main/mao_${Math.floor(e)}.png`, a.visible = !1, s.visible = !1) : e < 100 ? (a.skin = `images/main/mao_${Math.floor(e / 10)}.png`, 
            // i.skin = `images/main/mao_${e % 10}.png`, a.visible = !0, i.visible = !0, s.visible = !1) : e < 1e3 && (a.skin = `images/main/mao_${Math.floor(e / 100)}.png`, 
            // i.skin = `images/main/mao_${Math.floor(e / 10) % 10}.png`, s.skin = `images/main/mao_${e % 10}.png`, 
            // a.visible = !0, i.visible = !0, s.visible = !0);
        }
    }

    class n extends Laya.Script {
        constructor() {
            super(...arguments), this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.ListenEvent(); this.onResize();
        }
        ListenEvent() {
            a.RegisterClickByCaller(this.GameCtr.gm_moregame, this, this.onMoreGameEventClick);
        }
        onResize() {
            this.GameCtr.Box_GamingUI.width = Laya.stage.width, this.GameCtr.Box_GamingUI.height = Laya.stage.height;
        }
        opened() {
            this.GameCtr.gm_moregame_animi.play(0, !0);
        }
        closed() {

            this.GameCtr.gm_moregame_animi.stop();
        }
        openML() { }
        closeML() { }
        GameOverEvent() {
            this.GameCtr.closeUI(F.GamingUI), 
            this.destroy()
            this.GameCtr.openUI(F.ResultUI);
        }
    }
    var o, r, l, h, c, d, m, g, u, C, p, S, y;
    !function (e) {
        e.WeaponClone = "WeaponClone", e.RoleClone = "RoleClone", e.EffClone = "EffClone",
            e.ObjClone = "ObjClone", e.Player = "Player", e.MainCamera = "MainCamera", e.target = "target",
            e.Target = "Target", e.Collision = "Collision", e.SpeedDownEff = "SpeedDownEff",
            e.MirrorNode = "MirrorNode", e.ButtleFire = "ButtleFire", e.CameraList = "CameraList",
            e.CameraPos = "CameraPos", e.HitEff = "HitEff", e.Arrow = "Arrow", e.ArmoredWarrior = "ArmoredWarrior",
            e.AttackRange = "AttackRange", e.AttackBossRange = "AttackBossRange", e.TurtleShell = "TurtleShell",
            e.Skeleton = "Skeleton", e.Orc = "Orc", e.Spider = "Spider", e.SuperAttackEff = "SuperAttackEff",
            e.FireBall = "FireBall", e.Sword = "Sword", e.Arch = "Arch", e.SuperAttackBoomArch = "SuperAttackBoomArch",
            e.SuperAttackBoomSword = "SuperAttackBoomSword", e.SandStormEff = "SandStormEff",
            e.Golem = "Golem", e.Slime = "Slime", e.TornadoEff = "TornadoEff", e.AttackBossRange2 = "AttackBossRange2",
            e.BloodEff = "BloodEff", e.Skill0Eff = "Skill0Eff", e.SmokeEff = "SmokeEff";
    }(o || (o = {})), function (e) {
        e.EnvClone = "EnvClone", e.Env = "Env", e.PlaneClone = "PlaneClone", e.Plane = "Plane",
            e.Cloud = "Cloud", e.LevelClone = "LevelClone", e.Level = "Level", e.SkyDome = "SkyDome";
    }(r || (r = {})), function (e) {
        e.ArchNode = "ArchNode", e.SwordNode = "SwordNode", e.AttackEff = "AttackEff";
    }(l || (l = {})), function (e) {
        e.Idle = "Idle", e.Attack0 = "Attack0", e.Attack1 = "Attack1", e.Attack2 = "Attack2",
            e.Skill0 = "Skill0", e.Run = "Run", e.Archery = "Archery", e.Dead = "Dead", e.SuperAttack = "SuperAttack";
    }(h || (h = {})), function (e) {
        e.Idle = "Idle", e.Attack = "Attack", e.Death = "Death", e.Hit = "Hit", e.Run = "Run";
    }(c || (c = {})), function (e) {
        e.Idle = "Idle", e.Vibrate = "Vibrate";
    }(d || (d = {})), function (e) {
        e.Sword = "Sword", e.Arch = "Arch";
    }(m || (m = {}));
    class L { }
    L.Env = [], L.Plane = [], L.Pos = [[{
        name: "TurtleShell/0.05",
        px: .8,
        py: 0,
        pz: 24.9,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 9.5,
        py: 0,
        pz: 25,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.06",
        px: 21,
        py: 0,
        pz: 24.4,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 32.7,
        py: 0,
        pz: 25.7,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 54.7,
        py: 0,
        pz: 23.5,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.06",
        px: 55.2,
        py: 0,
        pz: 20.5,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }], [{
        name: "Skeleton/0.05",
        px: 54.6,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 54.6,
        py: 0,
        pz: 15.9,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.06",
        px: 54.6,
        py: 0,
        pz: 17.3,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Skeleton/0.02",
        px: -8.7,
        py: 0,
        pz: 0,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Skeleton/0.05",
        px: 10.5,
        py: 0,
        pz: 15.9,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.06",
        px: 1.76,
        py: 0,
        pz: 8.5,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 59.7,
        py: 0,
        pz: 3.4,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.04",
        px: 57.5,
        py: 0,
        pz: -21.7,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }], [{
        name: "Skeleton/0.02",
        px: 19.6,
        py: 0,
        pz: 16.2,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Skeleton/0.05",
        px: 33.6,
        py: 0,
        pz: 15.9,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.06",
        px: 60.2,
        py: 0,
        pz: -4.7,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "TurtleShell/0.05",
        px: 44.5,
        py: 0,
        pz: 18.4,
        ex: 0,
        ey: 0,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }, {
        name: "Boss/0.05",
        px: 29,
        py: 0,
        pz: 23.2,
        ex: 0,
        ey: 180,
        ez: 0,
        sx: 1,
        sy: 1,
        sz: 1
    }]], L.Monster = [["Skeleton/0", "TurtleShell/0"], ["Skeleton/1", "Spider/0"], ["TurtleShell/1", "Slime/0"], ["Skeleton/1", "TurtleShell/1"], ["Skeleton/2", "Spider/1"], ["TurtleShell/2", "Slime/1"], ["Spider/2", "Slime/2"]],
        L.Boss = ["Orc/0", "Golem/0", "Orc/1", "Golem/1", "Orc/2", "Golem/2", "Orc/0"],
        L.Player = [{
            name: "Player",
            px: 35.7,
            py: 0,
            pz: -39.1,
            ex: 0,
            ey: 90,
            ez: 0,
            sx: 1,
            sy: 1,
            sz: 1
        }], L.AI = [{
            name: "0",
            px: 4.2,
            py: 0,
            pz: -37.2,
            ex: 0,
            ey: 270,
            ez: 0,
            sx: 1,
            sy: 1,
            sz: 1
        }, {
            name: "1",
            px: 17.7,
            py: 0,
            pz: -35.6,
            ex: 0,
            ey: 270,
            ez: 0,
            sx: 1,
            sy: 1,
            sz: 1
        }, {
            name: "2",
            px: 27.1,
            py: 0,
            pz: -31.3,
            ex: 0,
            ey: 270,
            ez: 0,
            sx: 1,
            sy: 1,
            sz: 1
        }], function (e) {
            e.Skeleton = "Skeleton", e.TurtleShell = "TurtleShell", e.Orc = "Orc", e.Spider = "Spider",
                e.Slime = "Slime", e.Golem = "Golem", e.TornadoEff = "TornadoEff";
        }(g || (g = {})), function (e) {
            e.Role = "Role", e.Bullet = "Bullet", e.Eff = "Eff", e.Monster = "Monster", e.FireBallEff = "FireBallEff",
                e.Weapon = "Weapon";
        }(u || (u = {}));
    class w { }
    w.SkinNum = 6, w.ArchNum = 4, w.SwordNum = 4;
    class f { }
    f.DayTiling = new Laya.Vector4(1, 1, 0, 0), f.NiceTiling = new Laya.Vector4(1.5, 1, 0, 0);
    class v {
        constructor() {
            this.Path = "", this.SkinColor = [new Laya.Vector4(.8396226, 0, 0, 1), new Laya.Vector4(.9215686, 1, 1, 1), new Laya.Vector4(0, .3647059, 1, 1), new Laya.Vector4(.3254902, .3411765, .3607843, 1), new Laya.Vector4(1, .6901961, 0, 1), new Laya.Vector4(0, .7411765, .02745098, 1)],
                Laya.Browser.onMiniGame && (this.Path = Laya.Browser.window.wx.env.USER_DATA_PATH + "/cache/");
        }
        static get instance() {
            return this._instance || (this._instance = new v()), this._instance;
        }
        preLoad() { }
        getCar(e) {
            let t = Laya.loader.getRes(this.Path + "res/d3/car/car_" + e + "/Conventional/scene_game.lh");
            return t = t.clone();
        }
        getCheckpoint(e) {
            let t = Laya.loader.getRes(this.Path + "res/d3/checkpoint/checkpoint" + e + "/Conventional/scene_game.lh");
            return t = t.clone();
        }
        getFxEffect() {
            let e = Laya.loader.getRes(this.Path + "res/d3/fx/fx_confetti/Conventional/scene_game.lh");
            return e = e.clone();
        }
        getFxBoom() {
            let e = Laya.loader.getRes(this.Path + "res/d3/fx/fx_boom/Conventional/scene_game.lh");
            return e = e.clone();
        }
        getGameScene(e, t = !0) {
            let a = this.GameScene.getChildByName(e);
            return t && (a = a.clone()), a;
        }
        getShowScene(e, t = !0) {
            let a = this.ShowScene.getChildByName(e);
            return t && (a = a.clone()), a;
        }
        getRoleClone(e, t = !0) {
            let a = this.ShowScene.getChildByName(o.RoleClone).getChildByName(e);
            return t && (a = a.clone()), a;
        }
        getWeaponClone(e, t = !0) {
            let a = this.ShowScene.getChildByName(o.WeaponClone).getChildByName(e);
            return t && (a = a.clone()), a;
        }
        getEffClone(e, t = !0) {
            let a = this.ShowScene.getChildByName(o.EffClone).getChildByName(e);
            return t && (a = a.clone()), a;
        }
        getObjClone(e, t = !0) {
            let a = this.ShowScene.getChildByName(o.ObjClone).getChildByName(e);
            return t && (a = a.clone()), a;
        }
        ChangeSKin(e, t) {
            a.FindChildByName("Box038", e).skinnedMeshRenderer.sharedMaterial = this.SkinMaterial[t];
            let i = a.FindChildByName("beijiaoleft", e);
            a.FindChildByName("beijiaoright", e).meshRenderer.materials[1].albedoColor = this.SkinColor[t],
                i.meshRenderer.materials[1].albedoColor = this.SkinColor[t];
        }
        ChangeWeapon(e, t) {
            e.meshRenderer.material = v.instance.WeaponMaterial[t];
        }
    }
    class B extends Laya.Script {
        constructor() {
            super(...arguments), this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
            this.SkinMode = [{
                index: 0,
                type: "Skin",
                gettype: 0,
                coin: 800
            }, {
                index: 1,
                type: "Skin",
                gettype: 0,
                coin: 1e3
            }, {
                index: 2,
                type: "Skin",
                gettype: 0,
                coin: 1200
            }, {
                index: 3,
                type: "Skin",
                gettype: 0,
                coin: 1400
            }, {
                index: 4,
                type: "Skin",
                gettype: 0,
                coin: 1600
            }, {
                index: 5,
                type: "Skin",
                gettype: 0,
                coin: 1800
            }], this.WeaponMode = [{
                index: 0,
                type: m.Sword,
                gettype: 0,
                coin: 800
            }, {
                index: 1,
                type: m.Sword,
                gettype: 0,
                coin: 1e3
            }, {
                index: 2,
                type: m.Sword,
                gettype: 0,
                coin: 1200
            }, {
                index: 3,
                type: m.Sword,
                gettype: 0,
                coin: 1400
            }, {
                index: 4,
                type: m.Arch,
                gettype: 0,
                coin: 800
            }, {
                index: 5,
                type: m.Arch,
                gettype: 0,
                coin: 1e3
            }, {
                index: 6,
                type: m.Arch,
                gettype: 0,
                coin: 1200
            }, {
                index: 7,
                type: m.Arch,
                gettype: 0,
                coin: 1400
            }];
        }
        onAwake() {
            super.onAwake(), 
            this.SelectSkinMode = this.SkinMode[i.instance.SkinIndex], 
            this.SelectWeaponMode = this.WeaponMode[i.instance.WeaponIndex],
            this.ListenEvent(), v.instance.preLoad();
        }

        ListenEvent() {
        a.RegisterClickByCaller(this.GameCtr.miu_play, this, this.StartGameEvent);
        }
        onResize() {
            this.GameCtr.Box_MainUI.width = Laya.stage.width, this.GameCtr.Box_MainUI.height = Laya.stage.height;
        }
        initScene() { }
        initShopList() { }
        UpdateUIInfo(e = "Skin", t, s, n = 0) {
            let o, r, l = t, h = l.getChildByName("skin"), c = l.getChildByName("lock"), d = l.getChildByName("buy"), g = d.getChildByName("miu_buy_num"), u = t.getChildByName("get"), C = t.getChildByName("vido");
            switch (e) {
                case "Skin":
                    o = this.SkinMode[s + n], r = i.instance.Skin.indexOf(o.index), h.skin = `images/main/skin_${o.index}.png`,
                        this.SelectSkinMode.index == o.index ? l.skin = "images/main/home_icon_skin_selected.png" : l.skin = "images/main/home_icon_skin_not_selected.png";
                    break;

                case m.Arch:
                case m.Sword:
                    o = this.WeaponMode[s + n], r = i.instance.Weapon.indexOf(o.index), h.skin = `images/main/weapon_${o.index}.png`,
                        this.SelectWeaponMode.index == o.index ? l.skin = "images/main/home_icon_skin_selected.png" : l.skin = "images/main/home_icon_skin_not_selected.png";
            }
            if (-1 == r) switch (o.gettype) {
                case 0:
                    g.text = o.coin + "", d.visible = !0, c.visible = !0, u.visible = !1, C.visible = !1,
                        d.offAll(), a.RegisterClickByCaller(d, this, () => {
                            this.BuyClickEvent(e, o);
                        });
                    break;

                case 1:
                    g.text = o.coin + "", d.visible = !1, c.visible = !0, u.visible = !1, C.visible = !0,
                        C.offAll(), a.RegisterClickByCaller(C, this, () => {
                            this.VidoGetEvent(e, o);
                        });
            } else d.visible = !1, c.visible = !1, C.visible = !1, u.visible = !0;
            this.SelectClickEvent(e, o, t);
        }
        BuyClickEvent(e = "Skin", t) {
            let a = t.index, s = i.instance.Coin, n = t.coin;
            if (s >= n) {
                switch (e) {
                    case "Skin":
                        this.SelectSkinMode = t, i.instance.reduceCoin(n), i.instance.addSkin(a);
                        break;

                    case m.Arch:
                    case m.Sword:
                        this.SelectWeaponMode = t, i.instance.reduceCoin(n), i.instance.addWeapon(a);
                }
                this.UpdateData();
            } else this.ShowToast("金币不足噢！！！"), this.onVideoCoin();
        }
        VidoGetEvent(e = "Skin", t) {
            let a = t.index;
            this.onVideoEvent(() => {
                switch (e) {
                    case "Skin":
                        this.SelectSkinMode = t, i.instance.addSkin(a);
                        break;

                    case m.Arch:
                    case m.Sword:
                        this.SelectWeaponMode = t, i.instance.addWeapon(a);
                }
            }, () => {
                this.ShowToast("看完视频才有奖励哦！");
            });
        }
        SelectClickEvent(e = "Skin", t, i) {
            let s = i;
            s.offAll(), a.RegisterClickByCaller(s, this, () => {
                switch (e) {
                    case "Skin":
                        this.SelectSkinMode = t, this.ChangeSkin(t.index);
                        break;

                    case m.Arch:
                    case m.Sword:
                        this.SelectWeaponMode = t, this.ChangeWeapon(t.index);
                }
                this.UpdateData();
            });
        }

        ChangeMode() {
            Laya.timer.clear(this, this.IdleEvent), v.instance.ChangeSKin(this.CurrMode, this.SelectSkinMode.index);
            let e = this.SelectWeaponMode;
            switch (e.type) {
                case m.Arch:
                    v.instance.ChangeWeapon(this.CurrArch, e.index), this.CurrArch.active = !0, this.CurrSword.active = !1,
                        this.SelectWeaponMode.type == m.Sword ? this.ModeAnimator.play(h.SuperAttack, 0, 0) : this.ModeAnimator.play(h.Archery, 0, 0);
                    break;

                case m.Sword:
                    v.instance.ChangeWeapon(this.CurrSword, e.index), this.CurrArch.active = !1, this.CurrSword.active = !0,
                        this.SelectWeaponMode.type == m.Sword ? this.ModeAnimator.play(h.SuperAttack, 0, 0) : this.ModeAnimator.play(h.Archery, 0, 0);
            }
            Laya.timer.once(1e3, this, this.IdleEvent);
        }
        IdleEvent() {
            this.ModeAnimator.crossFade(h.Idle, .8, 0, 0);
        }
        ChangeSkin(e) {
            i.instance.changeSkin(e);
        }
        ChangeWeapon(e) {
            i.instance.changeWeapon(e);
        }
        OpenScene() { }
        HideScene() { }
        TwoListEvent() {
            // t.SceneADValueOpen && this.onThreeGameParam(0);
        }
        StartGameEvent() {
            platform.getInstance().showInterstitial(()=>{
                Laya.SoundManager.playSound("voices/Button-select.mp3", false);
                this.owner.parent.Box_GamingUI.getChildByName("ControlNode").getChildByName("top").getChildAt(0).getChildAt(2).getChildAt(0).text = Q.getInstance().getData().money
                this.GameCtr.openUIAndCloseOthers(F.GamingUI);
            })

        }
        changeMotor() {

        }
        opened() {

        }
        closed() {

            this.HideScene(), this.GameCtr.miu_moregame_animi.stop();
        }
    
    }
    class _ {
        static onNavButtonListen(e, a, i, s) {
            a && (e.offAll(), e.on(Laya.Event.CLICK, this, t.NavigateMiniGame, [a, i, s]));
        }
        static onConfigNavButton(e, t, a) {
            if (!t) return;
            var i = e.getChildByName("IMG");
            if (i || (i = new Laya.Image(), e.addChildAt(i, 0), i.width = e.width, i.height = e.height,
                i.pos(0, 0), i.name = "IMG"), i.skin = t.icon, 2 == t.type) {
                let a = e.getChildByName("GifAnim");
                i.visible = !1, a ? (a.skin = t.icon, a.autoPlay = !0, a.play(), a.interval = 200) : ((a = new Laya.Clip(t.icon, 3, 3)).width = i.width,
                    a.height = i.height, a.autoPlay = !0, a.interval = 200, a.name = "GifAnim", e.addChildAt(a, e.numChildren),
                    a.pos(i.x, i.y)), a.visible = !0;
            } else {
                i.visible = !0;
                let t = e.getChildByName("GifAnim");
                t && t.visible && (t.index = 0, t.visible = !1, t.stop());
            }
            e.getChildByName("NavName") && (e.getChildByName("NavName").text = t.name);
        }
        static RegesterMlRoad(e, t, a, i) {
            e.hScrollBarSkin = "", e.array = t, e.renderHandler = new Laya.Handler(this, (e, s) => {
                _.onConfigNavButton(e, t[s], e.width / 144), _.onNavButtonListen(e, t[s], a, i);
            });
        }
        static RegisterMLRoadName(e, t, a = !0, i, s) {
            a ? e.hScrollBarSkin = "" : e.vScrollBarSkin = "", e.array = t, e.renderHandler = new Laya.Handler(this, (e, a) => {
                let n = e.getChildByName("icon_img"), o = e.getChildByName("icon_name");
                o && (o.text = t[a].name), _.onConfigNavButton(n, t[a], n.width / 144), _.onNavButtonListen(e, t[a], i, s);
            });
        }
        static RegisterMLRoadAnimi(e, t, a = !0, i, s) {
            a ? e.hScrollBarSkin = "" : e.vScrollBarSkin = "", e.array = t, e.renderHandler = new Laya.Handler(this, (e, a) => {
                let n = e.getChildByName("icon_img"), o = e.getChildByName("icon_name");
                o && (o.text = t[a].name), _.onConfigNavButton(n, t[a], n.width / 144), _.onNavButtonListen(e, t[a], i, s);
            });
        }
    }
    class b extends Laya.Script {
        constructor() {
            super(...arguments), this.mMLSD1 = 1, this.mMLSD2 = 1;
            this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(),
                this.onResize();
            this.ClickEvent(), this.NexBunnerY = this.GameCtr.result_car_thank.y;
        }
        onResize() {
            this.GameCtr.Box_ResultUI.width = Laya.stage.width, this.GameCtr.Box_ResultUI.height = Laya.stage.height,
                this.GameCtr.box_result_bg.width = Laya.stage.width, this.GameCtr.box_result_bg.height = Laya.stage.height;
        }
        ClickEvent() {
            // a.RegisterClickByCaller(this.GameCtr.result_car_double, this, this.DoubleEvent), 
            // a.RegisterClickByCaller(this.GameCtr.result_car_moregame, this, this.onMoreGameEventClick);



            this.GameCtr.result_car_double.on(Laya.Event.CLICK, this, this.DoubleEvent)
            this.GameCtr.result_car_thank.on(Laya.Event.CLICK, this, this.OneEvent)
            console.log("this.GameCtr", this.GameCtr)
            window.GameCtr = this.GameCtr
            // ,
            // this.GameCtr.result_car_moregame.on(Laya.Event.CLICK,this,this.onMoreGameEventClick);
        }
        initMl() {
            // super.initMl(),


            // _.RegisterMLRoadName(this.GameCtr.result_car_left_list, t.GameListOver, !1, "游戏结束", () => {
            //     this.onMoreGameEvent();
            // }), 


            // _.RegisterMLRoadName(this.GameCtr.result_car_right_list, t.GameListOver, !1, "游戏结束", () => {
            //     this.onMoreGameEvent();
            // }), 

            // Laya.timer.frameLoop(1, this, this.mlScroll1), 
            // Laya.timer.frameLoop(1, this, this.mlScroll2),
            Laya.SoundManager.stopSound("voices/gas-start.mp3");
            Laya.SoundManager.stopSound("voices/riding-engine.mp3");

            console.log("游戏结束曝光"),
                t.ExposureData(3);
            window.scrollList.visible = true;
            window.yad.visible = true;
        }
        openML() {
            this.GameCtr.result_car_moregame.visible = !0, this.GameCtr.result_car_left_list.visible = !0,
                this.GameCtr.result_car_right_list.visible = !0;
        }
        closeML() {
            this.GameCtr.result_car_moregame.visible = !1, this.GameCtr.result_car_left_list.visible = !1,
                this.GameCtr.result_car_right_list.visible = !1;
        }
        mlScroll1() {
            let e = this.GameCtr.result_car_left_list.scrollBar.value + 2 * this.mMLSD1;
            (e > this.GameCtr.result_car_left_list.scrollBar.max || e < 0) && (this.mMLSD1 *= -1),
                e = this.GameCtr.result_car_left_list.scrollBar.value + 2 * this.mMLSD1, this.GameCtr.result_car_left_list.scrollBar.value = e;
        }
        mlScroll2() {
            let e = this.GameCtr.result_car_right_list.scrollBar.value + 2 * this.mMLSD2;
            (e > this.GameCtr.result_car_right_list.scrollBar.max || e < 0) && (this.mMLSD2 *= -1),
                e = this.GameCtr.result_car_right_list.scrollBar.value + 2 * this.mMLSD2, this.GameCtr.result_car_right_list.scrollBar.value = e;
        }
        DoubleEvent() {
            platform.getInstance().showReward(
                ()=>{
                    Laya.SoundManager.playSound("voices/Button-select.mp3");
                    this.Coin *= 2,
                        le.addMoney(this.Coin)
                    this.owner.parent.Box_MainUI.getChildByName("UINode").getChildByName("top").getChildAt(1).getChildAt(2).getChildAt(0).text = Q.getInstance().getData().money
                    // i.instance.addCoin(this.Coin),
                    this.CloseEvent();
                }
            )


        }
        OneEvent() {
            platform.getInstance().showInterstitial(()=>{
                Laya.SoundManager.playSound("voices/Button-select.mp3");
                // this.Coin *= 2, 
                le.addMoney(this.Coin)
                this.owner.parent.Box_MainUI.getChildByName("UINode").getChildByName("top").getChildAt(1).getChildAt(2).getChildAt(0).text = Q.getInstance().getData().money
                // i.instance.addCoin(this.Coin),
                this.CloseEvent();
            })


        }
        OneEvent1() {
            // Laya.SoundManager.playSound("voices/Button-select.mp3");

            this.owner.parent.Box_MainUI.getChildByName("UINode").getChildByName("top").getChildAt(1).getChildAt(2).getChildAt(0).text = Q.getInstance().getData().money
            // i.instance.addCoin(this.Coin),
            this.CloseEvent();

        }
        UpdateData(e, t) {
            switch (e) {
                case 1:
                    this.GameCtr.result_car_icon.skin = "images/main/win_logo_vic.png";
                    Laya.SoundManager.playSound("voices/Level_Complete.mp3", false)
                    break;

                case 0:
                    this.GameCtr.result_car_icon.skin = "images/main/lose_logo.png";
                    Laya.SoundManager.playSound("voices/Level_Fail.mp3", false)
                    break;
                case 3:
                    this.OneEvent1()
                    break;

            }
            this.Coin = t, this.GameCtr.result_car_get_coin.text = t + "";
        }
        CloseEvent() {
            console.log("aaa")
            window.scrollList.visible = false;

            // le.addMoney(this.Coin)

            this.Coin = 0,
                this.GameCtr.closeUI(F.ResultUI),

                Laya.SoundManager.playSound("voices/Button-select.mp3");

            this.GameCtr.openUI(F.MainUI);
            window.box_adTwo.visible = true;
            window.btnSound.visible = true;
        }
        opened() {
            this.initMl()


            // this.showJumpBn2(this.GameCtr.result_car_thank, this.NexBunnerY, this, this.CloseEvent), 
            // this.GameCtr.result_moregame_animi.play();
        }
        closed() {



            // , Laya.timer.clear(this, this.mlScroll1), Laya.timer.clear(this, this.mlScroll2), 
            // this.GameCtr.result_moregame_animi.stop();
        }
    }
    class I extends Laya.Script {
        constructor() {
            super(...arguments), this.PageIndex = Math.floor((i.instance.Level - 1) / 6), this.PageMaxNum = 6,
                this.SelectLevel = i.instance.Level; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                    this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.UpdateUI(), this.ListenEvent(); this.onResize();
        }
        initMl() {
            // super.initMl();
        }
        ListenEvent() {
            a.RegisterClickByCaller(this.GameCtr.level_supermode, this, this.onThreeGameParam),
                a.RegisterClickByCaller(this.GameCtr.level_play, this, this.PlayEvent), a.RegisterClickByCaller(this.GameCtr.level_left, this, this.LeftEvent),
                a.RegisterClickByCaller(this.GameCtr.level_right, this, this.RightEvent);
        }
        closeML() { }
        onResize() {
            this.GameCtr.level_bg.width = Laya.stage.width, this.GameCtr.level_bg.height = Laya.stage.height,
                this.GameCtr.Box_LevelUI.width = Laya.stage.width, this.GameCtr.Box_LevelUI.height = Laya.stage.height;
        }
        LeftEvent() {
            this.PageIndex > 0 && (this.PageIndex--, this.UpdateUI());
        }
        RightEvent() {
            this.PageIndex++, this.UpdateUI();
        }
        PlayEvent() {
            this.GameCtr.First || this.GameCtr.IsGameOne ? this.onVideoChest() : this.GameCtr.openUIAndCloseOthers(F.GamingUI);
        }
        UpdateUI() {
            let e = i.instance.Level;
            for (let t = 0; t < 6; t++) {
                let i = this.PageIndex * this.PageMaxNum + t + 1, s = this.GameCtr[`level_box${t}`], n = s.getChildByName("levelnum");
                s.offAll(), i != this.SelectLevel ? (i <= e && (n.visible = !0, n.text = i + "",
                    s.skin = "images/main/clearance_icon_not_choose.png", a.RegisterClickByCaller(s, this, () => {
                        this.SelectLevel = i, this.UpdateUI();
                    })), i > e && (n.visible = !1, s.skin = "images/main/clearance_icon_lock.png")) : (n.visible = !0,
                        n.text = i + "", s.skin = "images/main/clearance_icon_choose.png");
            }
        }
        opened() {
            this.initMl(), this.PageIndex = Math.floor((i.instance.Level - 1) / 6), this.SelectLevel = i.instance.Level,
                this.UpdateUI(), this.GameCtr.level_supermode_animi.play(0, !0);
        }
        closed() {
            this.GameCtr.level_supermode_animi.stop();
        }
    }
    class G {
        constructor() {
            this.Skin = [], this.Weapon = [], this.initModel();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new G();
        }
        initModel() {
            this.Skin = this.getJsonModel(G.SkinKey) || [0], this.SkinIndex = this.getItemModel(G.SkinIndexKey) || 0,
                this.Weapon = this.getJsonModel(G.WeaponKey) || [0], this.WeaponIndex = this.getJsonModel(G.WeaponIndexKey) || 0,
                this.Coin = this.getItemModel(G.CoinKey) || 0, this.Level = this.getItemModel(G.LevelKey) || 1,
                this.CarId = this.getItemModel(G.CarIdKey) || 1;
        }
        addSkin(e) {
            -1 == this.Skin.indexOf(e) && (this.Skin.push(e), this.setJsonModel(G.SkinKey, this.Skin));
        }
        addWeapon(e) {
            -1 == this.Weapon.indexOf(e) && (this.Weapon.push(e), this.setJsonModel(G.WeaponKey, this.Weapon));
        }
        addCoin(e) {
            this.Coin += e, this.setItemModel(G.CoinKey, this.Coin);
        }
        reduceCoin(e) {
            this.Coin -= e, this.setItemModel(G.CoinKey, this.Coin);
        }
        setLevel(e) {
            this.Level = e, this.setItemModel(G.LevelKey, this.Level);
        }
        changeWeapon(e) {
            -1 != this.Weapon.indexOf(e) && (this.WeaponIndex = e, this.setItemModel(G.WeaponIndexKey, this.WeaponIndex));
        }
        changeSkin(e) {
            -1 != this.Skin.indexOf(e) && (this.SkinIndex = e, this.setItemModel(G.SkinIndexKey, this.SkinIndex));
        }
        getItemModel(e) {
            return parseInt(Laya.LocalStorage.getItem(e));
        }
        setItemModel(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        setJsonModel(e, t) {
            Laya.LocalStorage.setJSON(e, t);
        }
        getJsonModel(e) {
            return Laya.LocalStorage.getJSON(e);
        }
    }
    G.SkinKey = "Skin", G.SkinIndexKey = "SkinIndex", G.WeaponKey = "Weapon", G.WeaponIndexKey = "WeaponIndex",
        G.CoinKey = "Coin", G.LevelKey = "Level", G.CarIdKey = "CarId";
    class k extends Laya.Script {
        constructor() {
            super(), this.Progress = 0, this.RandomBoxVallue = .6, this.mMLSD1 = 1, this.mMLSD2 = 1,
                this._isShowBn1 = !1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                    this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.initClickList(), this.onTimeEvent(); this.onResize();
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.chest_ml_1, t.GameList, !1, "宝箱", () => {
                this.onMoreGameEvent();
            }), _.RegisterMLRoadName(this.GameCtr.chest_ml_2, t.GameList, !1, "宝箱", () => {
                this.onMoreGameEvent();
            }), Laya.timer.frameLoop(1, this, this.mlScroll1), Laya.timer.frameLoop(1, this, this.mlScroll2),
                console.log("宝箱界面曝光"), this.RandomBoxVallue = .1 + Math.random() * t.ShowBoxBannerValue,
                t.ExposureData(1);
        }
        mlScroll1() {
            let e = this.GameCtr.chest_ml_1.scrollBar.value + 2 * this.mMLSD1;
            (e > this.GameCtr.chest_ml_1.scrollBar.max || e < 0) && (this.mMLSD1 *= -1), e = this.GameCtr.chest_ml_1.scrollBar.value + 2 * this.mMLSD1,
                this.GameCtr.chest_ml_1.scrollBar.value = e;
        }
        mlScroll2() {
            let e = this.GameCtr.chest_ml_2.scrollBar.value + 2 * this.mMLSD2;
            (e > this.GameCtr.chest_ml_2.scrollBar.max || e < 0) && (this.mMLSD2 *= -1), e = this.GameCtr.chest_ml_2.scrollBar.value + 2 * this.mMLSD2,
                this.GameCtr.chest_ml_2.scrollBar.value = e;
        }
        initClickList() {
            a.RegisterClickByCaller(this.GameCtr.chest_cat_open_box, this, this.OpenChestEvent);
        }
        OpenChestEvent() {
            if (this.Progress += t.BoxClickAddValue, this.GameCtr.chest_car_bar.value = this.Progress,
                this.showJumpBn1(), this.Progress >= 1) {
                let e = Math.floor(50 + 50 * Math.random());
                // G.instance.addCoin(e), 


                t.ShowToast(`恭喜你获得${e}金币`), this.GameCtr.UpdateCoin(G.instance.Coin),
                    this.GameCtr.closeUI(F.ChestUI);
            }
        }
        onResize() {
            this.GameCtr.Box_ChestUI.width = Laya.stage.width, this.GameCtr.Box_ChestUI.height = Laya.stage.height,
                this.GameCtr.box_chest_bg.width = Laya.stage.width, this.GameCtr.box_chest_bg.height = Laya.stage.height;
        }
        onTimeEvent() {
            this.Progress -= t.BoxFrameSubValue, this.Progress < 0 && (this.Progress = 0), this.GameCtr.chest_car_bar.value = this.Progress;
        }
        onUpdate() { }
        showJumpBn1() {
            this._isShowBn1 || this.Progress >= this.RandomBoxVallue && (
                // this.showBn1(), 
                this._isShowBn1 = !0,
                Laya.timer.once(2e3, this, () => {
                    this._isShowBn1 = !1, t.HideBanner();
                }));
        }
        opened() {
            this.initMl(), this.Progress = 0, Laya.timer.frameLoop(1, this, this.onTimeEvent),
                this.GameCtr.chest_animi.play(), this.showJumpBn1(), this.GameCtr.IsGameOne = !1,
                t.IsBannerUpdate = !1, t.HideBanner(), t.OnHideCallBack = (() => {
                    this.onHideCallBack();
                });
        }
        closed() {
            this._isShowBn1 = !1, this.GameCtr.chest_animi.stop(), Laya.timer.clear(this, this.mlScroll1),
                Laya.timer.clear(this, this.mlScroll2), t.IsBannerUpdate = !0;
        }
        openML() {
            this.GameCtr.chest_ml_1.visible = !0, this.GameCtr.chest_ml_2.visible = !0;
        }
        closeML() {
            this.GameCtr.chest_ml_1.visible = !1, this.GameCtr.chest_ml_2.visible = !1;
        }
        onHideCallBack() {
            this._isShowBn1 && (console.log("点击banner跳转"),


                // G.instance.addCoin(200), 


                this.GameCtr.UpdateCoin(G.instance.Coin),
                t.showChestUIModal(() => {
                    this.Progress = 0, this.GameCtr.chest_car_bar.value = 0;
                }, () => {
                    this.GameCtr.closeUI(F.ChestUI);
                }));
        }
    }
    class M extends Laya.Script {
        constructor() {
            super(), this.Progress = 0, this.RandomBoxVallue = .6, this.mMLSD1 = 1, this.mMLSD2 = 1,
                this._isShowBn1 = !1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                    this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.initClickList(), this.onTimeEvent(); this.onResize();
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.chest_ml_1_1, t.GameList, !1, "宝箱", () => {
                this.onMoreGameEvent();
            }), _.RegisterMLRoadName(this.GameCtr.chest_ml_1_2, t.GameList, !1, "宝箱", () => {
                this.onMoreGameEvent();
            }), Laya.timer.frameLoop(1, this, this.mlScroll1), Laya.timer.frameLoop(1, this, this.mlScroll2),
                console.log("宝箱界面曝光"), this.RandomBoxVallue = .1 + Math.random() * t.ShowBoxBannerValue,
                t.ExposureData(1);
        }
        mlScroll1() {
            let e = this.GameCtr.chest_ml_1_1.scrollBar.value + 2 * this.mMLSD1;
            (e > this.GameCtr.chest_ml_1_1.scrollBar.max || e < 0) && (this.mMLSD1 *= -1), e = this.GameCtr.chest_ml_1_1.scrollBar.value + 2 * this.mMLSD1,
                this.GameCtr.chest_ml_1_1.scrollBar.value = e;
        }
        mlScroll2() {
            let e = this.GameCtr.chest_ml_1_2.scrollBar.value + 2 * this.mMLSD2;
            (e > this.GameCtr.chest_ml_1_2.scrollBar.max || e < 0) && (this.mMLSD2 *= -1), e = this.GameCtr.chest_ml_1_2.scrollBar.value + 2 * this.mMLSD2,
                this.GameCtr.chest_ml_1_2.scrollBar.value = e;
        }
        initClickList() {
            a.RegisterClickByCaller(this.GameCtr.chest_cat_open_box_1, this, this.OpenChestEvent);
        }
        OpenChestEvent() {
            if (this.Progress += t.BoxClickAddValue, this.GameCtr.chest_car_bar_1.value = this.Progress,
                this.showJumpBn1(), this.Progress >= 1) {
                let e = Math.floor(50 + 50 * Math.random());
                // i.instance.addCoin(e), 


                t.ShowToast(`恭喜你获得${e}金币`), this.GameCtr.UpdateCoin(i.instance.Coin),
                    this.GameCtr.closeUI(F.ChestUI1);
            }
        }
        onResize() {
            this.GameCtr.Box_ChestUI_1.width = Laya.stage.width, this.GameCtr.Box_ChestUI_1.height = Laya.stage.height,
                this.GameCtr.box_chest_bg_1.width = Laya.stage.width, this.GameCtr.box_chest_bg_1.height = Laya.stage.height;
        }
        onTimeEvent() {
            this.Progress -= t.BoxFrameSubValue, this.Progress < 0 && (this.Progress = 0

            ),
                this.GameCtr.chest_car_bar_1.value = this.Progress;
        }
        onUpdate() { }
        showJumpBn1() {
            this._isShowBn1 || this.Progress >= this.RandomBoxVallue && (
                // this.showBn1(), 
                this._isShowBn1 = !0,
                Laya.timer.once(2e3, this, () => {
                    this._isShowBn1 = !1, t.HideBanner();
                }));
        }
        opened() {
            this.initMl(), this.Progress = 0, Laya.timer.frameLoop(1, this, this.onTimeEvent),
                this.showJumpBn1(), this.GameCtr.IsGameOne = !1, t.IsBannerUpdate = !1, t.HideBanner(),
                t.OnHideCallBack = (() => {
                    this.onHideCallBack();
                });
        }
        closed() {
            this._isShowBn1 = !1, Laya.timer.clear(this, this.onTimeEvent), Laya.timer.clear(this, this.mlScroll1),
                Laya.timer.clear(this, this.mlScroll2), this.onThreeGameParam(2), t.IsBannerUpdate = !0;
        }
        openML() {
            this.GameCtr.chest_ml_1_1.visible = !0, this.GameCtr.chest_ml_1_2.visible = !0;
        }
        closeML() {
            this.GameCtr.chest_ml_1_1.visible = !1, this.GameCtr.chest_ml_1_2.visible = !1;
        }
        onHideCallBack() {
            this._isShowBn1 && (console.log("点击banner跳转"),


                // i.instance.addCoin(200), 
                this.GameCtr.UpdateCoin(i.instance.Coin),
                t.showChestUIModal(() => {
                    this.Progress = 0, this.GameCtr.chest_car_bar_1.value = 0;
                }, () => {
                    this.GameCtr.closeUI(F.ChestUI1);
                }));
        }
    }
    class x extends Laya.Script {
        constructor() {
            super(...arguments), this.mMLSD = 1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.ClickListen(); this.onResize();
        }
        onResize() {
            this.GameCtr.Box_MoreGameUI.width = Laya.stage.width, this.GameCtr.Box_MoreGameUI.height = Laya.stage.height,
                this.GameCtr.box_moregame_bg.width = Laya.stage.width, this.GameCtr.box_moregame_bg.height = Laya.stage.height;
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.moregame_car_list, t.GameListBack, !0, "更多游戏跳转", null),
                Laya.timer.frameLoop(1, this, this.mlScroll), console.log("更多游戏曝光"), t.ExposureData(2);
        }
        mlScroll() {
            let e = this.GameCtr.moregame_car_list.scrollBar.value + 2 * this.mMLSD;
            (e > this.GameCtr.moregame_car_list.scrollBar.max || e < 0) && (this.mMLSD *= -1),
                e = this.GameCtr.moregame_car_list.scrollBar.value + 2 * this.mMLSD, this.GameCtr.moregame_car_list.scrollBar.value = e;
        }
        openTaolu() { }
        openML() {
            this.GameCtr.moregame_car_list.visible = !0;
        }
        closeML() {
            this.GameCtr.moregame_car_list.visible = !1;
        }
        ClickListen() {
            a.RegisterClickByCaller(this.GameCtr.moregame_car_close, this, this.onCloseEvent),
                a.RegisterClickByCaller(this.GameCtr.moregame_car_more, this, this.onThreeGameParam);
        }
        onCloseEvent() {
            this.GameCtr.closeUI(F.MoreGameUI), this.type, this.type = null;
        }
        MoreGameStartEvent() {
            this.showJumpBn4(this.GameCtr.moregame_car_close, this, this.onCloseEvent), this.type;
        }
        opened(e) {
            this.initMl(),

                this.onRandomGame3(), this.type = e, this.MoreGameStartEvent();
        }
        closed() {
            Laya.timer.clear(this, this.mlScroll);
        }
    }
    class O { }
    O.Config = {
        Android: "1",
        Ios: "1",
        bWuDianTime: 1.5,
        NextGame1: 3,
        NextGame2: 5,
        GameTime: 100,
        NewGuideBannerFalgUpTime: 3e3,
        NewGuideBannerFalg: "1"
    };
    class U extends Laya.Script {
        constructor() {
            super(...arguments), this.NexBunnerY = 270, this.mMLSD = 1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(); this.onResize();
        }
        onResize() {
            this.GameCtr.Box_TwoListUI.width = this.GameCtr.width, this.GameCtr.Box_TwoListUI.height = this.GameCtr.height,
                this.GameCtr.twolist_bg.width = this.GameCtr.width, this.GameCtr.twolist_bg.height = this.GameCtr.height;
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.twolist_car_list, t.GameList_Back_two, !0, "更多游戏two跳转", () => {
                this.onMoreGameEvent();
            }), Laya.timer.frameLoop(1, this, this.mlScroll), console.log("更多游戏2曝光"), t.ExposureData(6);
        }
        mlScroll() {
            let e = this.GameCtr.twolist_car_list.scrollBar.value + 2 * this.mMLSD;
            (e > this.GameCtr.twolist_car_list.scrollBar.max || e < 0) && (this.mMLSD *= -1),
                e = this.GameCtr.twolist_car_list.scrollBar.value + 2 * this.mMLSD, this.GameCtr.twolist_car_list.scrollBar.value = e;
        }
        onCloseEvent() {
            switch (this.GameCtr.closeUI(F.TwoListUI), console.log("更多游戏2关闭参数：", this.type),
            this.type) {
                case 0:
                    this.GameCtr.openUI(F.TwoListUI, 3);
                    break;

                case 1:
                    this.GameCtr.openUI(F.ResultUI);
                    break;

                case 2:
                    this.GameCtr.openUI(F.TwoListUI, 1);
                    break;

                case 3:
                    t.SceneADValueOpen && this.onVideoChest();
            }
        }
        TwoListUIStrtEvent() {
            if (this.showJumpBn3(this.GameCtr.twolist_car_random, this.NexBunnerY, this, this.onCloseEvent),
                t.AdFlag) switch (this.type) {
                    case 0:
                        this.onNextGameEvent(1e3 * O.Config.NextGame1);
                        break;

                    case 1:
                        this.onNextGameEvent(1e3 * O.Config.NextGame2);
                } else this.onNextGameEvent(0);
        }
        openTaolu() { }
        openML() {
            this.GameCtr.twolist_car_list.visible = !0;
        }
        closeML() {
            this.GameCtr.twolist_car_list.visible = !1;
        }
        onNextGameEvent(e) { }
        opened(e) {
            this.initMl(),

                this.type = e, this.TwoListUIStrtEvent(), this.onRandomGame3(),
                t.SpecialOff && (this.GameCtr.twolist_car_random.bottom = 0, this.GameCtr.twolist_car_random.visible = !1,
                    setTimeout(() => {
                        this.GameCtr.twolist_car_random.bottom = 270, this.GameCtr.twolist_car_random.visible = !0;
                    }, 3e3));
        }
        closed() {
            Laya.timer.clear(this, this.mlScroll)

        }
    }
    !function (e) {
        e.VideoLoaded = "VideoLoaded", e.VideoClosed = "VideoClosed", e.VideoError = "VideoError";
    }(C || (C = {})), function (e) {
        e.NavigationFail = "NavigationFail", e.ShowRecommend = "ShowRecommend";
    }(p || (p = {})), function (e) {
        e.OnShow = "OnShow";
    }(S || (S = {})), function (e) {
        e.GetFreeGift = "GetFreeGift", e.UpdateGold = "UpdateGold", e.DisplayGameSceneAd = "DisplayGameSceneAd",
            e.GameStart = "GameStart", e.TrigerGameStart = "TrigerGameStart", e.GameOver = "GameOver",
            e.ShowSettleDialog = "ShowSettleDialog", e.GameResLoadFinish = "GameResLoadFinish",
            e.CloseInterstitialAd = "CloseInterstitialAd", e.RecordStop = "RecordStop", e.ShowBanner = "ShowBanner",
            e.ShowHomePageBottomExport = "ShowHomePageBottomExport", e.ShowGamePageBottomExport = "ShowGamePageBottomExport",
            e.ShowBottomExport = "ShowBottomExport", e.HideBottomExport = "HideBottomExport",
            e.ShowNoFunExport = "ShowNoFunExport", e.ShowExport = "ShowNoFunExport", e.MoreGameBtnClick = "MoreGameBtnClick",
            e.ShowFreeGiftFix = "ShowFreeGiftFix", e.ShowGameSenceLateDialog = "ShowGameSenceLateDialog",
            e.CancelGotoEvent = "CancelGotoMiniGame", e.UpdateTrigger = "UpdateTrigger", e.GameProcess = "GameProcess",
            e.UpdateRes = "UpdateRes";
    }(y || (y = {}));
    class A extends Laya.Script {
        constructor() {
            super(...arguments), this.SkinIndex = 0, this.IsGet = !1, this.rotate = new Laya.Vector3(0, .01, 0); this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.ClickEvent(), this.GameCtr.skin_think.y = (this.GameCtr.height - this.GameCtr.box_SkinUI_c.height) / 2 + this.GameCtr.skin_think.y,
                this.NexBunnerY = this.GameCtr.skin_think.y; this.onResize();
        }
        onResize() {
            this.GameCtr.Box_SkinUI.width = this.GameCtr.width, this.GameCtr.Box_SkinUI.height = this.GameCtr.height,
                this.GameCtr.skin_bg.width = this.GameCtr.width, this.GameCtr.skin_bg.height = this.GameCtr.height;
        }
        ClickEvent() {
            a.RegisterClickByCaller(this.GameCtr.skin_video, this, this.VideoEvent);
        }
        initScene() {
            let e = new Laya.Scene3D();
            this.ShowScene = e.addChild(new Laya.Sprite3D()), this.GameCtr.skin_box.addChildAt(e, 0);
            let t = new Laya.DirectionLight();
            t.intensity = .5, this.ShowScene.addChild(t), this.MainCamera = new Laya.Camera(),
                this.MainCamera.orthographic = !0, this.MainCamera.orthographicVerticalSize = 2,
                this.MainCamera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.ShowScene.addChild(this.MainCamera),
                this.SkinIndex = Math.round(Math.random() * (gg.data.getGameConf().carCount - 1)) + 1,
                this.CurrMode = v.instance.getCar(this.SkinIndex).getChildAt(0);
            let i = this.CurrMode.getComponent(Laya.Rigidbody3D);
            i && i.destroy();
            for (let e = 0; e < this.CurrMode.numChildren; e++) 5 == e && (this.CurrMode.getChildAt(e).active = !1);
            this.CurrMode.transform.localScale = new Laya.Vector3(.3, .3, .3), this.ShowScene.addChild(this.CurrMode);
            let s = a.My2DTo3DPoint(this.MainCamera, this.GameCtr.skin_show, this.GameCtr.skin_box, !0);
            s.z = -100, this.CurrMode.transform.position = new Laya.Vector3(.15, s.y, s.z),
                this.CurrMode.transform.rotationEuler = new Laya.Vector3(0, -30, 0);
        }
        ChangeMode(e) {
            for (let t = 0; t < w.SkinNum; t++) {
                if (t == e) continue;
                this.CurrMode.meshRenderer.material = v.instance.SkinMaterial[e];
            }
        }
        VideoEvent() {
            this.onVideoEvent(() => {
                this.IsGet = !0, this.CloseEvent(), i.instance.setItemModel(i.CarIdKey, i.instance.CarId),
                    i.instance.CarId = this.SkinIndex;
            }, () => {
                t.ShowToast("看完视频能获得精彩奖励哦！");
            });
        }
        CloseEvent() {
            this.GameCtr.closeUI(F.SkinUI), this.GameCtr.openUI(F.GamingUI);
        }
        OpenScene() {
            this.initScene(), this.ShowScene.active = !0, Laya.timer.frameLoop(1, this, this.Animator);
        }
        Animator() { }
        HideScene() {
            this.ShowScene.active = !1, Laya.timer.clear(this, this.Animator);
        }
        opened() {
            this.initMl(), this.showJumpBn2(this.GameCtr.skin_think, this.NexBunnerY, this, () => {
                this.CloseEvent(), gg.event.event(y.GameStart);
            }), this.OpenScene();
        }
        closed() {

            this.HideScene();
        }
        openTaolu() {
            this.GameCtr.skin_video.getChildAt(0).text = "免费领取";
        }
    }
    class N extends Laya.Script {
        constructor() {
            super(...arguments), this.mMLSD = 1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.ClickListen(); this.onResize();
        }
        onResize() {
            this.GameCtr.Box_ThreeGameUI.width = Laya.stage.width, this.GameCtr.Box_ThreeGameUI.height = Laya.stage.height,
                this.GameCtr.threegameUI_bg.width = Laya.stage.width, this.GameCtr.threegameUI_bg.height = Laya.stage.height;
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.threegamelist, t.GameListBack, !0, "更多游戏跳转", null),
                Laya.timer.frameLoop(1, this, this.mlScroll), console.log("更多游戏3曝光"), t.ExposureData(2);
        }
        mlScroll() {
            let e = this.GameCtr.threegamelist.scrollBar.value + 2 * this.mMLSD;
            (e > this.GameCtr.threegamelist.scrollBar.max || e < 0) && (this.mMLSD *= -1), e = this.GameCtr.threegamelist.scrollBar.value + 2 * this.mMLSD,
                this.GameCtr.threegamelist.scrollBar.value = e;
        }
        openTaolu() { }
        openML() {
            this.GameCtr.threegamelist.visible = !0;
        }
        closeML() {
            this.GameCtr.threegamelist.visible = !1;
        }
        ClickListen() { }
        onCloseEvent() {
            switch (this.GameCtr.closeUI(F.ThreeGameUI), console.log("更多游戏3关闭：", this.type),
            this.type) {
                case 0:
                    this.GameCtr.openUI(F.TwoListUI, 0);
                    break;

                case 1:
                    this.GameCtr.openUI(F.ResultUI);
                    break;

                case 2:
                    this.GameCtr.openUI(F.TwoListUI, 2);
            }
            this.type = null;
        }
        ThreeGameStartEvent() {
            this.showJumpBn3(this.GameCtr.threegame_back, this.NexBunnerY, this, this.onCloseEvent),
                this.type;
        }
        opened(e) {
            this.initMl(), t.SceneADValueOpen ? t.ResetBannerAutorefrsh() :
                this.type = e, this.ThreeGameStartEvent(), this.onRandomGame3(), t.SpecialOff && (this.GameCtr.threegame_back.bottom = 0,
                    this.GameCtr.threegame_back.visible = !1, setTimeout(() => {
                        this.GameCtr.threegame_back.bottom = 270, this.GameCtr.threegame_back.visible = !0;
                    }, 3e3));
        }
        closed() {
            Laya.timer.clear(this, this.mlScroll)
        }
    }
    class D extends Laya.Script {
        constructor() {
            super(...arguments), this.mMLSD = 1; this.GameCtr = P.instance, this.CanClick = !0, this.JumpGameList = [],
                this.IsListenerMl = !1, this.openParam = {}, this.closeParma = {};
        }
        onAwake() {
            super.onAwake(), this.ClickListen(), this.NexBunnerY = this.GameCtr.fourgame_close.y; this.onResize();
        }
        onResize() {
            this.GameCtr.Box_FourGameUI.width = Laya.stage.width, this.GameCtr.Box_FourGameUI.height = Laya.stage.height,
                this.GameCtr.fourgameUI_bg.width = Laya.stage.width, this.GameCtr.fourgameUI_bg.height = Laya.stage.height;
        }
        initMl() {
            super.initMl(), _.RegisterMLRoadName(this.GameCtr.fourgame_list, t.GameListBack, !0, "更多游戏跳转", null),
                Laya.timer.frameLoop(1, this, this.mlScroll), console.log("更多游戏曝光"), t.ExposureData(2);
        }
        mlScroll() {
            let e = this.GameCtr.fourgame_list.scrollBar.value + 2 * this.mMLSD;
            (e > this.GameCtr.fourgame_list.scrollBar.max || e < 0) && (this.mMLSD *= -1), e = this.GameCtr.fourgame_list.scrollBar.value + 2 * this.mMLSD,
                this.GameCtr.fourgame_list.scrollBar.value = e;
        }
        openTaolu() { }
        openML() {
            this.GameCtr.fourgame_list.visible = !0;
        }
        closeML() {
            this.GameCtr.fourgame_list.visible = !1;
        }
        ClickListen() { }
        onCloseEvent() {
            switch (this.GameCtr.closeUI(F.FourGameUI), this.type) {
                case 0:
                    break;

                case 1:
                    this.GameCtr.openUI(F.ResultUI);
            }
            this.type = null;
        }
        FourGameStartEvent() {
            this.showJumpBn3(this.GameCtr.fourgame_close, this.NexBunnerY, this, this.onCloseEvent),
                this.type;
        }
        opened(e) {
            this.initMl(), this.type = e, this.FourGameStartEvent();
        }
        closed() {
            Laya.timer.clear(this, this.mlScroll)
        }
    }
    var E, F, T = Laya.ClassUtils.regClass;
    !function (e) {
        !function (e) {
            class t extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("iscene/GameMain");
                }
            }
            e.GameMainUI = t, T("ui.iscene.GameMainUI", t);
            class a extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("iscene/Start");
                }
            }
            e.StartUI = a, T("ui.iscene.StartUI", a);
        }(e.iscene || (e.iscene = {}));
    }(E || (E = {}));
    class P extends E.iscene.GameMainUI {
        constructor() {
            super(), this.First = !0, this.IsGameOne = !0, this.UIList = [], window.btnSound = new Laya.Button()
        }
        onAwake() {
            P.instance = this, this.onResize(), this.init(), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onResize() {
            this.width = Laya.stage.width, this.height = Laya.stage.height;
        }
        onDestroy() { }
        init() {
            this.UIList.push(this.Box_MainUI),
                this.UIList.push(this.Box_GamingUI),
                this.UIList.push(this.Box_ResultUI),
                this.UIList.push(this.Box_LevelUI),
                this.UIList.push(this.Box_ChestUI),
                this.UIList.push(this.Box_ChestUI_1),
                this.UIList.push(this.Box_MoreGameUI),
                this.UIList.push(this.Box_TwoListUI),
                this.UIList.push(this.Box_SkinUI),
                this.UIList.push(this.Box_ThreeGameUI),
                this.UIList.push(this.Box_FourGameUI),

                this.MainUICtr = this.Box_MainUI.addComponent(B),
                this.GamingUICtr = this.Box_GamingUI.addComponent(n),
                this.ResultUICtr = this.Box_ResultUI.addComponent(b),
                this.LevelUICtr = this.Box_LevelUI.addComponent(I),
                this.ChestUICtr = this.Box_ChestUI.addComponent(k),
                this.ChestUICtr1 = this.Box_ChestUI_1.addComponent(M),
                this.MoreGameUICtr = this.Box_MoreGameUI.addComponent(x),
                this.TwoListUICtr = this.Box_TwoListUI.addComponent(U),
                this.SkinUICtr = this.Box_SkinUI.addComponent(A),
                this.ThreeGameUICtr = this.Box_ThreeGameUI.addComponent(N),
                this.FourGameUICtr = this.Box_FourGameUI.addComponent(D),
                console.log("aaa ")

            window.btnSound.anchorX = window.btnSound.anchorY = 0.5;
            window.btnSound.x = 80;
            window.btnSound.y = 150;
            window.btnSound.scaleX = window.btnSound.scaleY = 0.5;
            window.btnSound.stateNum = 0;
            Laya.stage.addChild(window.btnSound)
            var isSound = Laya.LocalStorage.getItem("Thrilling-Snow-Motor_isSound")

            if (isSound) {
                if (isSound == "true") {
                    window.btnSound.skin = "SoundOn.png";
                }
                else {
                    window.btnSound.skin = "SoundOff.png";
                }
            }
            window.btnSound.on(Laya.Event.CLICK, this, this.OnsoundClick)

            window.box_adTwo.visible = true;
            window.btnSound.visible = true;
            this.UIComponent = {
                Box_MainUI: this.MainUICtr,
                Box_GamingUI: this.GamingUICtr,
                Box_ResultUI: this.ResultUICtr,
                Box_LevelUI: this.LevelUICtr,
                Box_ChestUI: this.ChestUICtr,
                Box_ChestUI_1: this.ChestUICtr1,
                Box_MoreGameUI: this.MoreGameUICtr,
                Box_TwoListUI: this.TwoListUICtr,
                Box_SkinUI: this.SkinUICtr,
                Box_ThreeGameUI: this.ThreeGameUICtr,
                Box_FourGameUI: this.FourGameUICtr

            }, this.closeML(), t.OnShowCallBack = (() => {
                this.onShowCallBack();
            }), t.AdFlag && this.openTaoLu(), t.SpecialOff && this.openML(), P.isLoadFinish = !0,
                this.openUIAndCloseOthers(F.MainUI);
        }
        OnsoundClick() {
            var isSound = Laya.LocalStorage.getItem("Thrilling-Snow-Motor_isSound")

            if (isSound) {
                if (isSound == "true") {

                    isSound = false;
                    Laya.LocalStorage.setItem("Thrilling-Snow-Motor_isSound", isSound)
                    window.btnSound.skin = "SoundOff.png";
                    Laya.SoundManager.stopMusic();
                }
                else {


                    isSound = true;
                    Laya.LocalStorage.setItem("Thrilling-Snow-Motor_isSound", isSound)
                    window.btnSound.skin = "SoundOn.png";
                    Laya.SoundManager.playMusic("BG.mp3");
                }
            }
        }
        openML() {
            // this.MainUICtr.openML(), this.GamingUICtr.openML(), this.LevelUICtr.openML(), this.SkinUICtr.openML(),
            //     this.ResultUICtr.openML(), this.MoreGameUICtr.openML(), this.TwoListUICtr.openML(),
            //     this.ThreeGameUICtr.openML(), this.FourGameUICtr.openML();

        }
        closeML() {
            // this.MainUICtr.closeML(), this.GamingUICtr.closeML(), this.LevelUICtr.closeML(), 
            // this.SkinUICtr.closeML(), this.ResultUICtr.closeML(), this.MoreGameUICtr.closeML(), 
            // this.TwoListUICtr.closeML(), this.ThreeGameUICtr.closeML(), this.FourGameUICtr.closeML();
        }
        openTaoLu() {
            this.SkinUICtr.openTaolu();
        }
        openUI(e, t = null, a = !1, i = null) {
            let s = 0, n = "";
            for (let e in F) this[F[e]].zOrder > s && (s = this[F[e]].zOrder, n = e);


            "" != n && 0 != s && this[F[n]].visible



            this[e].zOrder = s + 1,
                this[e].visible = !0, this.UIComponent[e].opened(t), a && (this[F.MainUI].visible = !1);
        }
        closeUI(e, t = null, a = null) {
            this[e].zOrder = 0, this[e].visible = !1;
            let i = 0, s = "";
            for (let e in F) this[F[e]].zOrder > i && (i = this[F[e]].zOrder, s = e);
            "" != s && 0 != i && this[F[s]].visible
            // && this.UIComponent[F[s]].reShow(a),
            this.UIComponent[e].closed(t);
        }
        openUIAndCloseOthers(e, t = null, a = !0) {
            for (let i in F) if (e != F[i]) {
                if (this[F[i]].zOrder = 0, e == F.MainUI && !a) continue;
                if (!this[F[i]].visible) continue;
                this.UIComponent[F[i]].closed(t), this[F[i]].visible = !1;
            }
            this[e].zOrder = 1, this[e].visible = !0, this.UIComponent[e].opened(t);
        }
        onShowCallBack() {
            Laya.Browser.onMiniGame;
        }
        UpdateCoin(e) { }
    }
    P.instance = null, P.isLoadFinish = !1, P.BoxCount = 15, function (e) {
        e.MainUI = "Box_MainUI", e.GamingUI = "Box_GamingUI", e.ResultUI = "Box_ResultUI",
            e.LevelUI = "Box_LevelUI", e.ChestUI = "Box_ChestUI", e.ChestUI1 = "Box_ChestUI_1",
            e.MoreGameUI = "Box_MoreGameUI", e.TwoListUI = "Box_TwoListUI", e.SkinUI = "Box_SkinUI",
            e.ThreeGameUI = "Box_ThreeGameUI", e.FourGameUI = "Box_FourGameUI";
    }(F || (F = {}));
    class V {
        constructor() { }
        Init() { }
    }
    class R extends V {
        constructor() {
            super(), this.mIsLoading = !1, this.mChannelHandler = Laya.Browser.window.wx, this.mBasePath = Laya.URL.basePath + "zip/",
                this.mCachePath = this.mChannelHandler.env.USER_DATA_PATH + "/cache/", this.mZipFilePath = this.mChannelHandler.env.USER_DATA_PATH + "/",
                this.mFileSys = this.mChannelHandler.getFileSystemManager();
        }
        LoadZipForNet(e, t, a, i, s) {
            if (this.mIsLoading) return console.error("sdkhelperbase on loading!"), void (s && s());
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
                        let i = !1;
                        try {
                            n.mFileSys.accessSync(n.mCachePath), i = !0;
                        } catch (e) {
                            i = !1;
                        }
                        i ? console.log("缓存目录存在") : (console.log("缓存目录不存在"), n.mFileSys.mkdirSync(n.mCachePath),
                            console.log("缓存目录已创建")), n.mFileSys.unzip({
                                zipFilePath: n.mZipFilePath,
                                targetPath: n.mCachePath,
                                success: () => {
                                    console.log("资源包解压完成"), n.mIsLoading = !1, n.mFileSys.unlinkSync(n.mZipFilePath),
                                        n.mFileSys.writeFileSync(n.mZipFilePath, "1", "utf8"), n.mChannelHandler.setStorageSync(e, t),
                                        a && a();
                                },
                                fail: e => {
                                    console.log("资源包解压失败 " + e.errMsg), n.mIsLoading = !1, s && s();
                                }
                            });
                    })();
                },
                fail: t => {
                    console.log("资源包下载失败"), console.log(t), console.log(n.mBasePath + e), n.mIsLoading = !1,
                        s && s();
                }
            }).onProgressUpdate(function (e) {
                i && i(e.progress);
            });
        }
        LoadZipForLocal(e, t, a, i, s) {
            if (this.mIsLoading) return console.error("sdkhelperbase on loading!"), void (s && s());
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
                        let i = !1;
                        try {
                            n.mFileSys.accessSync(n.mZipFilePath), i = !0;
                        } catch (e) {
                            i = !1;
                        }
                        i ? console.log("缓存目录存在") : (console.log("缓存目录不存在"), n.mFileSys.mkdirSync(n.mCachePath),
                            console.log("缓存目录已创建")), n.mFileSys.unzip({
                                zipFilePath: n.mZipFilePath,
                                targetPath: n.mCachePath,
                                success: () => {
                                    console.log("资源包解压完成"), n.mIsLoading = !1, n.mFileSys.unlinkSync(n.mZipFilePath),
                                        n.mFileSys.writeFileSync(n.mZipFilePath, "1", "utf8"), n.mChannelHandler.setStorageSync(e, t),
                                        a && a();
                                },
                                fail: e => {
                                    console.log("资源包解压失败 " + e.errMsg), n.mIsLoading = !1, s && s();
                                }
                            });
                    })();
                },
                fail: t => {
                    console.log("资源包读取失败"), console.log(t), console.log(n.mBasePath + e), n.mIsLoading = !1,
                        s && s();
                }
            });
        }
        UnZip(e, t, a) {
            let i = this;
            i.mFileSys.unzip({
                zipFilePath: i.mZipFilePath + "models.zip",
                targetPath: i.mCachePath,
                success: () => {
                    console.log("资源包解压完成"), i.mIsLoading = !1, i.mFileSys.unlinkSync(i.mZipFilePath),
                        i.mFileSys.writeFileSync(i.mZipFilePath, "1", "utf8"), t && t();
                },
                fail: e => {
                    console.log("资源包解压失败 " + e.errMsg), i.mIsLoading = !1, a && a();
                }
            });
        }
        ReadFile(e) {
            let t = this.mFileSys.readFileSync(e);
            this.mFileSys.writeFileSync(this.mZipFilePath + "models.zip", t), console.log("写入完成");
        }
    }
    class j {
        constructor() {
            this.ReadyInterTime = 20, this.BannerTime = 30, this.phoneName = "", this.BannerId = "adunit-e196459252ad5afe",
                this.VideoId = "adunit-387af21ff6784131", this.ChaPingId = "adunit-d904ef4a2fc0844a",
                this.mIsBannerLoad = !1, this.isFromWuDian = !1;
        }
        StartRecord() { }
        StopRecord() { }
        ShareVideo(e, t) { }
        CreateShotcut() { }
        VibrateShort() { }
        VibrateLong() { }
        onUpdateBn1Event() {
            Laya.Browser.onMiniGame && (W.Instance.CreateBanner(), this.BannerTime = 30);
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
        Login() { }
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
            }), this.mInterstitialAd.onClose(() => { }));
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
                }).catch(() => { })) : this.isVideoOnLoad = !1;
        }
        HideBanner() {
            null != this.mBannerAd && this.mBannerAd.hide && (this.mBannerAd.hide(), console.log("隐藏了banner"));
        }
        ShowToast(e) { }
        OpenCustomerServiceConversation() { }
    }
    class z extends j {
        constructor() {
            super(), this.NavDataVersion = 1, this.StartNavData = [], this.NavData = [], this.GameoverNavData = [],
                this.SeverConfigURL = "https://gecaoji-1300018364.cos.ap-chengdu.myqcloud.com/",
                this.Umasdk = "5eec4ce6978eea0883798a73", this.XJSdk = "c1bd995ccbf2a4cb3ca944fdde796ad8",
                this.AdFlag = !1, this.GuideFlag = !1, this.GuideTwoFlag = !1, this.isIOSPhone = !1,
                this.mVibrateShortCount = 0;
        }
        Init() {
            Laya.Browser.onMiniGame && (this.mChannelHandler = Laya.Browser.window.wx, this.mChannelHandler.onShow(() => { })),
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
    class W {
        constructor() {
            this.mPlatform = Laya.Browser.window, this.mSdk = null, this.mSdkHelper = null,
                this.mOpenId = "", this.doWudian = !1, this.curentPage = 0, this.isShowMoreGame = !1,
                this.curentPageAddBClick = !1, this.mSdkHelper = new R(), this.mSdk = new z();
        }
        static get Instance() {
            return null == W._instance && (W._instance = new W()), W._instance;
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
    W._instance = null;
    class H {
        constructor() {
            this._currentScene = null, this._dialogQueue = [], this._showingDialogs = [], this._isGameSceneLaunched = !1,
                H._instance = this;
        }
        static getInstance() {
            return this._instance || (this._instance = new H()), this._instance;
        }
        isExistDialog() {
            return this._showingDialogs.length > 0;
        }
        showDialog(e, t = !0, a = !1, i = !0) {
            if (!i || !this.hasDialog(e)) return e.isShowEffect = t, this._showingDialogs.push(e),
                Laya.Dialog.manager.open(e, !1, t), e;
        }
        showDialogWithURL(e, t, a = !0, i = !1, s = !0) {
            if (s && this.hasDialogUrl(e)) return;
            let n = {
                url: e,
                onComplete: t,
                showEffect: a,
                inQueue: i,
                isSingle: s
            };
            this._dialogQueue.length > 0 && i ? this._dialogQueue.push(n) : (this._dialogQueue.push(n),
                gg.res.loadDialog(e).then(e => {
                    this.showDialog(e, a, i, s), t && t(e);
                }));
        }
        closeDialog(e) {
            if ("string" != typeof e) {
                e.close();
                for (let t = this._dialogQueue.length - 1; t >= 0; t--) this._dialogQueue[t].url == e.url && this._dialogQueue.splice(t, 1);
                for (let t = this._showingDialogs.length - 1; t >= 0; t--) this._showingDialogs[t] == e && this._showingDialogs.splice(t, 1);
            } else {
                for (let t = this._dialogQueue.length - 1; t >= 0; t--) this._dialogQueue[t].url == e && this._dialogQueue.splice(t, 1);
                for (let t = this._showingDialogs.length - 1; t >= 0; t--) this._showingDialogs[t].url == e && (this._showingDialogs[t].close(),
                    this._showingDialogs.splice(t, 1));
            }
            if (this._dialogQueue.length > 0) {
                let e = this._dialogQueue.shift();
                e && this.showDialogWithURL(e.url, e.onComplete, e.showEffect, e.inQueue, e.isSingle);
            }
        }
        switchScene(e, t = !0, a = null, i = null) {
            this._currentScene === e && this.closeScene(e), this._currentScene = e, Laya.Scene.open(e, t, i, a),
                console.log("open scene:", e);
        }
        closeScene(e) {
            e && Laya.Scene.close("string" == typeof e ? e : e.url);
        }
        getCurrentScene() {
            return this._currentScene;
        }
        getShowingDialogCount() {
            return this._showingDialogs.length;
        }
        hasDialogUrl(e) {
            for (let t = this._dialogQueue.length - 1; t >= 0; t--) if (this._dialogQueue[t].url == e) return !0;
            for (let t = this._showingDialogs.length - 1; t >= 0; t--) {
                const a = this._showingDialogs[t];
                if (a && a.url == e) return !0;
            }
            return !1;
        }
        hasDialog(e) {
            let t = "string" == typeof e ? e : e.url;
            for (let e = this._showingDialogs.length - 1; e >= 0; e--) {
                const a = this._showingDialogs[e];
                if (a && a.url == t) return !0;
            }
            return !1;
        }
        showParticle(e, t = null) {
            let a = Laya.loader.getRes(e);
            if (!a) return null;
            let i = new Laya.Particle2D(a);
            return i.zOrder = 15, t ? t.addChild(i) : Laya.stage.addChild(i), i;
        }
        removeParticle(e) {
            e && e.parent && (e.emitter.stop(), e.parent.removeChild(e));
        }
        checkIsIphoneX() {
            let e = !1;
            return e = this.checkSceneIsHorizontal() ? Laya.Browser.clientWidth / Laya.Browser.clientHeight > 2 : Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2;
        }
        checkSceneIsHorizontal() {
            return !0;
        }
        get isGameSceneLaunched() {
            return this._isGameSceneLaunched;
        }
        set isGameSceneLaunched(e) {
            this._isGameSceneLaunched = e;
        }
    }
    class K {
        constructor() {
            K._instance = this;
        }
        static getInstance() {
            return this._instance || (this._instance = new K()), this._instance;
        }
        loadJSON(e) {
            return new Promise((t, a) => {
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }), null, Laya.Loader.JSON);
            });
        }
        loadSound(e) {
            return new Promise((t, a) => {
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }), null, Laya.Loader.SOUND);
            });
        }
        loadImage(e) {
            return new Promise((t, a) => {
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }), null, Laya.Loader.IMAGE);
            });
        }
        loadAtlas(e) {
            return new Promise((t, a) => {
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }), null, Laya.Loader.ATLAS);
            });
        }
        loadScene(e) {
            return new Promise((t, a) => {
                Laya.Scene.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }));
            });
        }
        loadDialog(e) {
            return new Promise((t, a) => {
                Laya.Dialog.load(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }));
            });
        }
        loadD3Res(e) {
            return new Promise((t, a) => {
                Laya.loader.create(e, Laya.Handler.create(this, e => {
                    e ? t(e) : a();
                }));
            });
        }
        preloadD3Res(e) {
            return new Promise((t, a) => {
                Laya.loader.create(e, Laya.Handler.create(this, e => {
                    e ? t() : a();
                }));
            });
        }
        clearRes(e) {
            Laya.loader.clearRes(e);
        }
        getRes(e) {
            return Laya.loader.getRes(e);
        }
    }
    class J {
        constructor() {
            J._instance = this, this.init();
        }
        static getInstance() {
            return this._instance || (this._instance = new J()), this._instance;
        }
        getGameConf() {
            return this._gameConf;
        }
        init() {
            let e = "gameConfig/game_conf.json";
            return console.log("game config:", e), new Promise((t, a) => {
                gg.res.loadJSON(e).then(e => {
                    this._gameConf = e, console.log(e), t();
                }).catch(() => {
                    console.error("fail to load game config..."), a();
                });
            });
        }
        setStorage(e, t) {
            let a = gg.sdk.getPlatform();
            a && a.setStorage(e, t);
        }
        getStorage(e) {
            let t = gg.sdk.getPlatform();
            return t ? t.getStorage(e) : null;
        }
    }
    var q = Laya.SoundManager;
    class X {
        constructor() {
            this._musicChannel = null, this._soundChannel = null, X._isntance = this, q.autoStopMusic = !1;
        }
        static getInstance() {
            return this._isntance || (this._isntance = new X()), this._isntance;
        }
        playMusic(e, t = 0) {
            let a = this;
            this.stopMusic(), setTimeout(function () {
                gg.res.loadSound(e).then(e => {
                    a._musicChannel = e, e.play();
                });
            }, 200);
        }
        stopMusic(e) {
            q.stopAll();
        }
    }
    X.bgMusicOff = !0;
    class Y {
        constructor() {
            this.curLevel = 1, this.money = 0, this.carId = 1, this.cars = {
                1: {}
            };
        }
    }
    const Z = "snowmobile";
    var $;
    !function (e) {
        e.Loading = "res/dialogs/units/Loading.scene";
    }($ || ($ = {}));
    class Q {
        constructor() {
            this._data = null, this._storageKey = Z, Q._instance = this, this.init();
        }
        static getInstance() {
            return this._instance || (this._instance = new Q()), this._instance;
        }
        init() {
            if (this._data) return;
            let e = Laya.LocalStorage.getJSON(this._storageKey);
            if (e) this._data = e; else {
                let e = new Y();
                this._data = e, this.save();
            }
        }
        save() {
            console.log("this._storageKey", this._storageKey)
            this._data && Laya.LocalStorage.setJSON(this._storageKey, this._data);
        }
        getData() {
            return this._data;
        }
        update(e, t, a = !0) {
            console.log("eee", e)
            console.log("ttt", t)
            console.log("data", this._data)
            this._data && this._data.hasOwnProperty(e) && this._data[e] != t && (this._data[e] = t,
                a && this.save());
        }
    }
    class ee {
        constructor() {
            this._inited = !1, ee._instance = this;
        }
        static getInstance() {
            return this._instance || (this._instance = new ee()), this._instance;
        }
        init(e) {
            if (this._inited) return;
            this._inited = !0;
            const t = {};
            window.gg = t, t.event = new Laya.EventDispatcher(), t.ui = H.getInstance(), t.res = K.getInstance(),
                t.data = J.getInstance(), t.player = Q.getInstance(), t.sound = X.getInstance();
        }
    }
    class te extends E.iscene.StartUI {
        constructor() {
            super(...arguments), this.Path = "";
        }
        onAwake() {
            ee.getInstance().init(), this.Path = v.instance.Path, this.onResize()
                , this.onUnzip();
        }
        onResize() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, this.Box_StartUI.width = Laya.stage.width,
                this.Box_StartUI.height = Laya.stage.height, this.start_bg.width = Laya.stage.width,
                this.start_bg.height = Laya.stage.height;
        }
        onUnzip() {
            platform.getInstance().cargamesstartup("Thrilling-Snow-Motor", () => {
                // 起始页

                var isSound = Laya.LocalStorage.getItem("Thrilling-Snow-Motor_isSound");
                if (!isSound) {
                    isSound = true;
                    Laya.LocalStorage.setItem("Thrilling-Snow-Motor_isSound", isSound);
                    Laya.SoundManager.playMusic("BG.mp3");
                }
                else {
                    if (isSound == "true") {
                        Laya.SoundManager.playMusic("BG.mp3");
                    }
                }
                Laya.stage.addChild(window.box_adTwo);
                window.box_adTwo.setSpaceX(230);
                window.box_adTwo.bottom = 250;
                window.box_adTwo.visible = false;

                window.yad.scaleX = 0.3;
                window.yad.scaleY = 0.3;
                window.yad.right = 10;
                platform.getInstance().hideSplash();
                platform.getInstance().showBanner();
                Laya.stage.addChild(window.scrollList);
                window.scrollList.scale(1, 1);
                window.scrollList.bottom = 10;
                // window.scrollList.getChildByName("img_ListBg").alpha = 0.5;
                // window.scrollList.getChildByName("img_ListBg").width = Laya.stage.width;
                // window.scrollList.width = Laya.stage.width;
                window.scrollList.visible = false;


                this.LoadScene();
            })



        }
        UpdateBar(e) {
            this.start_bar.value = e;
        }
        LoadScene() {
            let e = [];
            e.push(this.Path + "res/d3/scene_game/Conventional/scene_game.ls"), Laya.loader.create(e, new Laya.Handler(this, () => {
                this.LoadFiniEvent();
            }), new Laya.Handler(this, e => {

                // t.ShowBanner(), 
                this.UpdateBar(e);
            }));
        }
        LoadFiniEvent() {
            this.removeSelf(), Laya.stage.addChild(new P());
        }
        onDisable() {
            t.HideBanner();
        }
        UnZip() {
            // console.log("来到这一步"), W.Instance.GetSdkHepler.LoadZipForLocal("Assets.zip", "4.16", () => {


            // }, e => {}, null);
        }
    }
    class ae extends Laya.Script {
        constructor() {
            super(...arguments), this.scaleX = 1.1, this.scaleY = 1.1, this._originScaleX = 1,
                this._originScaleY = 1;
        }
        onAwake() {
            this.owner && (this._ownerSp = this.owner, this._ownerSp && (this._originScaleX = this._ownerSp.scaleX,
                this._originScaleY = this._ownerSp.scaleY));
        }
        onMouseDown(e) {
            this._ownerSp.scale(this.scaleX, this.scaleX);
        }
        onMouseUp(e) {
            this._ownerSp.scale(this._originScaleX, this._originScaleY);
        }
        onMouseOut(e) {
            this._ownerSp.scale(this._originScaleX, this._originScaleY);
        }
    }
    var ie, se, ne, oe, re;
    !function (e) {
        e[e.Right = 0] = "Right", e[e.Left = 1] = "Left", e[e.Up = 2] = "Up";
    }(ie || (ie = {})), function (e) {
        e[e.Box = 1001] = "Box", e[e.CarBody = 1002] = "CarBody", e[e.CarWheel = 1003] = "CarWheel",
            e[e.CarArm = 1004] = "CarArm", e[e.Road = 1005] = "Road", e[e.Fence = 1006] = "Fence",
            e[e.Terminal = 1007] = "Terminal", e[e.StaticObj = 1008] = "StaticObj", e[e.UnStaticObj = 1009] = "UnStaticObj",
            e[e.Stock = 1010] = "Stock", e[e.Corn = 1011] = "Corn", e[e.Middle = 1012] = "Middle";
    }(se || (se = {})), function (e) {
        e[e.Road = 0] = "Road", e[e.WDOver = 1] = "WDOver", e[e.CarCrashOver = 100] = "CarCrashOver",
            e[e.CarDrop = 101] = "CarDrop", e[e.Reborn = 1001] = "Reborn", e[e.Dead = 1002] = "Dead",
            e[e.Terminal = 2001] = "Terminal", e[e.Corn = 2002] = "Corn", e[e.Middle = 2003] = "Middle",
            e[e.Magnet = 2004] = "Magnet";
    }(ne || (ne = {})), function (e) {
        e[e.Forward = 0] = "Forward", e[e.Back = 1] = "Back", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right",
            e[e.Shake = 4] = "Shake";
    }(oe || (oe = {})), function (e) {
        e.GameResult = "GameResult", e.GameReSet = "GameReSet", e.GameRetry = "GameRetry",
            e.DeadPoint = "DeadPoint", e.RebornPoint = "RebornPoint", e.GameSuccess = "GameSuccess",
            e.GetCorn = "GetCorn", e.CloseLoading = "CloseLoading", e.ArrivePoint = "ArrivePoint",
            e.SelectPreCar = "SelectPreCar", e.StartCount = "StartCount", e.StopCamera = "StopCamera";
    }(re || (re = {}));
    class le {
        static addMoney(e) {
            Q.getInstance().getData().money += e, Q.getInstance().save();
        }
        static queryMoney() {
            return gg.player.getData().money;
        }
        static queryCurLevel() {
            return gg.player.getData().curLevel;
        }
        static setLevelUp() {
            let e = Q.getInstance().getData();
            gg.data.getGameConf().maxLevel > e.curLevel && (e.curLevel++, Q.getInstance().save());
        }
    }
    class he extends Laya.Script {
        constructor() {
            super(), this.timer = null;
        }
        onAwake() {
            if (Laya.Browser.onPC) {
                this.btnLeft.visible = false;
                this.btnRight.visible = false;
                this.btnForward.visible = false;
                this.btnBack.visible = false;
            }

            else {
                this.btnLeft.visible = true;
                this.btnRight.visible = true;
                this.btnForward.visible = true;
                this.btnBack.visible = true;
            }
            this.btnLeft.on(Laya.Event.MOUSE_OUT, this, e => {
                this.onTouchEvent(e, oe.Left, !1);
            }), this.btnLeft.on(Laya.Event.MOUSE_DOWN, this, e => {
                this.onTouchEvent(e, oe.Left, !0);
            }), this.btnRight.on(Laya.Event.MOUSE_OUT, this, e => {
                this.onTouchEvent(e, oe.Right, !1);
            }), this.btnRight.on(Laya.Event.MOUSE_DOWN, this, e => {
                this.onTouchEvent(e, oe.Right, !0);
            }), this.btnForward.on(Laya.Event.MOUSE_OUT, this, e => {
                Laya.SoundManager.stopSound("voices/gas-start.mp3");
                Laya.SoundManager.stopSound("voices/riding-engine.mp3");
                this.onTouchEvent(e, oe.Forward, !1);
            }), this.btnForward.on(Laya.Event.MOUSE_DOWN, this, e => {
                Laya.SoundManager.playSound("voices/gas-start.mp3", false);
                Laya.SoundManager.playSound("voices/riding-engine.mp3", true);
                this.onTouchEvent(e, oe.Forward, !0);
            }), this.btnBack.on(Laya.Event.MOUSE_OUT, this, e => {
                Laya.SoundManager.stopSound("voices/gas-start.mp3");
                Laya.SoundManager.stopSound("voices/riding-engine.mp3");
                this.onTouchEvent(e, oe.Back, !1);
            }), this.btnBack.on(Laya.Event.MOUSE_DOWN, this, e => {
                Laya.SoundManager.playSound("voices/gas-start.mp3", false);
                Laya.SoundManager.playSound("voices/riding-engine.mp3", true);
                this.onTouchEvent(e, oe.Back, !0);
            }), this.btnBrake.on(Laya.Event.MOUSE_OUT, this, e => {
                this.onTouchEvent(e, oe.Shake, !1);
            }), this.btnBrake.on(Laya.Event.MOUSE_DOWN, this, e => {
                this.onTouchEvent(e, oe.Shake, !0);
            }), this.btnReset.on(Laya.Event.MOUSE_DOWN, this, e => {
                gg.event.event(re.GameReSet);
            }), gg.event.on(re.GetCorn, this, () => {
                le.addMoney(gg.data.getGameConf().cornVal), this.moneyLbl.text = le.queryMoney();
            }), gg.event.on(re.StartCount, this, () => {
                this.timer && this.stopTimer(), this.initTimer();
            });
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown),
                Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp)
        }
        onKeyDown(e) {

            switch (e.keyCode) {
                case 87:
                    Laya.SoundManager.playSound("voices/gas-start.mp3", false);
                    Laya.SoundManager.playSound("voices/riding-engine.mp3", true);

                    this.onTouchEvent(e, oe.Forward, true);
                    break;
                case 83:
                    Laya.SoundManager.playSound("voices/gas-start.mp3", false);
                    Laya.SoundManager.playSound("voices/riding-engine.mp3", true);
                    this.onTouchEvent(e, oe.Back, true);
                    break;
                case 65:
                    this.onTouchEvent(e, oe.Left, true);
                    break;
                case 68:
                    this.onTouchEvent(e, oe.Right, true);
                    break;
            }
            // t) {

            //   case 32:
            //     a.setBrake(this.brakeForce, 0), a.setBrake(this.brakeForce, 1), a.setBrake(this.brakeForce, 2), 
            //     a.setBrake(this.brakeForce, 3);
            //     break;

        }
        onKeyUp(e) {

            switch (e.keyCode) {
                case 87:
                    Laya.SoundManager.stopSound("voices/gas-start.mp3");
                    Laya.SoundManager.stopSound("voices/riding-engine.mp3");
                    this.onTouchEvent(e, oe.Forward, false);
                    break;
                case 83:
                    Laya.SoundManager.stopSound("voices/gas-start.mp3");
                    Laya.SoundManager.stopSound("voices/riding-engine.mp3");
                    this.onTouchEvent(e, oe.Back, false);
                    break;
                case 65:
                    this.onTouchEvent(e, oe.Left, false);
                    break;
                case 68:
                    this.onTouchEvent(e, oe.Right, false);
                    break;
            }
        }
        onDestroy() {
            gg.event.offAllCaller(this), this.stopTimer();
        }
        onStart() {
            this.levelLbl.text = `Level ${le.queryCurLevel()}`, this.moneyLbl.text = le.queryMoney();
        }
        onTouchEvent(e, t, a) {

            gg.event.event(t.toString(), a);

        }
        initTimer() {
            let e = 0;
            this.timer = setInterval(() => {
                let t = 180 - ++e;
                t < 0 && (t = 0, gg.event.event(re.GameResult, !1), this.stopTimer());
                let a = this.showNum(Math.floor(t / 1 % 60)), i = this.showNum(Math.floor(t / 60 / 1) % 60);
                this.showNum(Math.floor(t / 60 / 60 / 1));
                this.countDownLbl.text && (this.countDownLbl.text = i + ":" + a);
            }, 1e3);
        }
        stopTimer() {
            clearInterval(this.timer);
        }
        showNum(e) {
            return e < 10 ? "0" + Math.floor(e) : Math.floor(e);
        }
    }
    class ce {
        static initScene(e, t, a, i) {
            this.rootNode = e, this.cannon = a, i ? this.splitScene(t, i) : (this.initScene2(t.getChildByName("road"), se.Road),
                this.initScene2(t.getChildByName("fence"), se.Fence), this.initScene2(t.getChildByName("obstacle").getChildByName("static"), se.StaticObj));
            let s = t.getChildByName("hide");
            s && (s.active = !1);
        }
        static splitScene(e, t) {
            for (let a = 0; a < t.length; a++) {
                const i = t[a];
                let s = i.path, n = i.type, o = s.split("/"), r = e;
                for (let e = 0; e < o.length; e++) {
                    const t = o[e];
                    r = r.getChildByName(t);
                }
                r && this.initScene2(r, n);
            }
        }
        static initScene2(e, t) {
            let a = [];
            for (let i of e._children) if ("goods" != i.name) {
                let s, n = i.transform.position, o = new Laya.Quaternion(i.transform.rotation.x, i.transform.rotation.y, i.transform.rotation.z, i.transform.rotation.w);
                i.transform.rotation = new Laya.Quaternion(0, 0, 0, 0), t == se.StaticObj && (s = 1);
                let r = this.creatBodyByMesh(i, s);
                if (!r) return;
                let l = !1;
                (t == se.Fence || t == se.Terminal || se.Stock || se.Corn || se.Middle) && (l = !0);
                let h = this.cannon.addVisual(r, null, l);
                this.rootNode.addChild(h), r.position.set(n.x, n.y, n.z), this.cannon.addToBody(r, t),
                    a.push(r), r.quaternion = this.quaternionLayaToCannon(o), setTimeout(() => {
                        t == se.Terminal && e.removeChild(i);
                    }, 100);
            }
            return a;
        }
        static createObjBody(e, t, a, i) {
            let s, n = e.transform.position, o = new Laya.Quaternion(e.transform.rotation.x, e.transform.rotation.y, e.transform.rotation.z, e.transform.rotation.w);
            e.transform.rotation = new Laya.Quaternion(0, 0, 0, 0), t == se.StaticObj && (s = 1);
            let r = this.creatBodyByMesh(e, s);
            if (!r) return;
            let l = this.cannon.addVisual(r, null, a);
            this.rootNode.addChild(l), r.position.set(n.x, n.y, n.z), this.cannon.addToBody(r, t),
                i && (r.quaternion = this.quaternionLayaToCannon(o));
        }
        static initLoad(e) {
            for (let t = 0; t < e.numChildren; t++) {
                const a = e.getChildAt(t);
                0 == t && this.translateMesh(e, a);
            }
        }
        static translateMesh(e, t) {
            let a = t.transform.position, i = new Laya.Quaternion(t.transform.rotation.x, t.transform.rotation.y, t.transform.rotation.z, t.transform.rotation.w), s = this.creatBodyByMesh(t);
            if (!s) return;
            let n = this.cannon.addVisual(s);
            this.rootNode.addChild(n), s.tag = 1001, s.position.set(a.x, a.y, a.z), this.cannon.addToBody(s, se.Road),
                s.quaternion = this.quaternionLayaToCannon(i), setTimeout(() => {
                    e.removeChild(t);
                }, 100);
        }
        static creatBodyByMesh(e, t) {
            let a = e.meshRenderer.bounds.getExtent();
            new Laya.BoxColliderShape();
            if (this.cannon.visuals.push(e), e.name) {
                let e = new CANNON.Box(new CANNON.Vec3(a.x, a.y, a.z)), i = new CANNON.Body({
                    mass: t || 0
                });
                return i.addShape(e), this.cannon.bodies.push(i), i;
            }
        }
        static addConnonBox() {
            var e = new CANNON.Body({
                mass: 0,
                shape: new CANNON.Box(new CANNON.Vec3(2, 2, 2))
            });
            e.position.set(0, .6, 203), this.cannon.addToBody(e, se.Box, "box");
            let t = this.cannon.addVisual(e);
            this.rootNode.addChild(t);
        }
        static postinCannonToLaya(e) {
            return new Laya.Vector3(e.x, e.y, e.z);
        }
        static postinLayaToCannon(e) {
            return new CANNON.Vec3(e.x, e.y, e.z);
        }
        static quaternionLayaToCannon(e) {
            return new CANNON.Quaternion(e.x, e.y, e.z, e.w);
        }
        static quaternionCannonToLaya(e) {
            return new Laya.Quaternion(e.x, e.y, e.z, e.w);
        }
        static getDistance(e, t) {
            return Math.abs(Math.pow(e.x - t.x, 2) + Math.pow(e.z - t.z, 2) + Math.pow(e.y - t.y, 2));
        }
        static getDistance2D(e, t) {
            return Math.abs(Math.pow(e.x - t.x, 2) + Math.pow(e.z - t.z, 2));
        }
        static resetTransform(e) {
            e.position = new CANNON.Vec3(0, 0, 0), e.quaternion = new CANNON.Quaternion(0, 0, 0, 0);
        }
        static aabbLine(e, t) {
            let a = new Laya.PixelLineSprite3D(5e3, "line");
            if (t = t || new Laya.Color(1, 0, 0, 1), !e) return a;
            let i = 1;
            e.length > 12 && (i = e.length / 9 >> 0);
            for (let s = 0; s < e.length; s += i) for (let n = s + 1; n < e.length; n += i) {
                let i = new Laya.Vector3(e[s].x, e[s].y, e[s].z), o = new Laya.Vector3(e[n].x, e[n].y, e[n].z);
                a.addLine(i, o, t, t);
            }
            return a;
        }
    }
    ce.cannon = null;
    class de {
        constructor() {
            this.bodies = [], this.visuals = [], this.carBodies = [], this.carVisuals = [],
                this.carWheels = [], this.wheelsVisuals = [], this.isFirstUpdate = !1;
        }
        init() {
            this.world = new CANNON.World(), this.world.broadphase = new CANNON.SAPBroadphase(this.world),
                this.world.gravity.set(0, -10, 0), this.world.defaultContactMaterial.friction = 0;
            var e = new CANNON.Material("groundMaterial"), t = new CANNON.Material("wheelMaterial"), a = new CANNON.ContactMaterial(t, e, {
                friction: .5,
                restitution: 0,
                contactEquationStiffness: 1e3
            });
            return this.world.addContactMaterial(a), this;
        }
        setVehichle(e) {
            this.vehicle = e;
        }
        addToBody(e, t, a) {
            let i = e;
            t && (i.ztag = t), a && (i.zname = a), this.world.addBody(i);
        }
        addVisual(e, t, a) {
            var i;
            return e instanceof CANNON.Body && (i = this.shape2mesh(e, t)), i && (e.visualref = i,
                e.visualref.visualId = this.bodies.length - 1, e.isUpdate = !0, a && (e.isUpdate = !1),
                this.bodies.push(e), this.visuals.push(i)), i;
        }
        addVisualWheel(e, t) {
            var a;
            let i = e;
            return i.ztag = se.CarWheel, i.zname = "wheel", e instanceof CANNON.Body && (a = this.shape2mesh(i, t)),
                a && (this.carWheels.push(i), this.wheelsVisuals.push(a), i.visualref = a, i.visualref.visualId = this.carWheels.length - 1),
                a;
        }
        addCarItem(e, t, a, i) {
            var s;
            if (e instanceof CANNON.Body) {
                let n = e;
                t && (n.ztag = t), a && (n.zname = a), this.world.addBody(n), s = this.shape2mesh(e, i);
            }
            return s && (this.carBodies.push(e), this.carVisuals.push(s), e.visualref = s, e.visualref.visualId = this.carBodies.length - 1),
                s;
        }
        updateVisuals() {
            var e = this.bodies.length;
            for (var t = 0; t < e; t++) {
                var a = this.bodies[t], i = this.visuals[t];
                this.isFirstUpdate ? a.ztag == se.StaticObj && (this.updateBody(i, a), 0) : this.updateBody(i, a);
            }
            this.isFirstUpdate = !0;
            for (let e = 0; e < this.carBodies.length; e++) {
              
                const t = this.carBodies[e];
                let a = this.carVisuals[e], 
                i = ce.postinCannonToLaya(t.position), 
                s = ce.quaternionCannonToLaya(t.quaternion);
                if(a.transform)
                {
                    a.transform && (a.transform.position = i), t && t.quaternion && (a.transform.rotation = s);
                }
              


            }
            if (this.vehicle) for (t = 0; t < this.vehicle.wheelInfos.length; t++) {
                this.vehicle.updateWheelTransform(t);
                var s = this.vehicle.wheelInfos[t].worldTransform, n = this.carWheels[t];
                n.position.copy(s.position), n.quaternion.copy(s.quaternion);
                let e = this.wheelsVisuals[t];
                e.transform && (e.transform.position = ce.postinCannonToLaya(s.position))
                
                if(e.transform)
                {
                    a && a.quaternion && (e.transform.rotation = ce.quaternionCannonToLaya(s.quaternion));
                }
               

            }

        }
        updateBody(e, t) {
            let a = ce.postinCannonToLaya(t.position), i = ce.quaternionCannonToLaya(t.quaternion);
            e.transform && (e.transform.position = a), t && t.quaternion && (e.transform.rotation = i);
        }
        shape2mesh(e, t) {
            for (var a = 0; a < e.shapes.length; a++) {
                var i, s = e.shapes[a];
                switch (s.type) {
                    case CANNON.Shape.types.SPHERE:
                        i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(s.radius, 8, 8));
                        break;

                    case CANNON.Shape.types.PLANE:
                        i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10, 10, 10));
                        break;

                    case CANNON.Shape.types.BOX:
                        i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(2 * s.halfExtents.x, 2 * s.halfExtents.y, 2 * s.halfExtents.z));
                        break;

                    case 16:
                        i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(s.radius, s.hight, 10));
                        break;

                    case CANNON.Shape.types.HEIGHTFIELD:
                }
                var n = new Laya.BlinnPhongMaterial();
                n.albedoColor = new Laya.Vector4(1, 2, 2, .1);
                let o = Laya.BlinnPhongMaterial.RENDERMODE_CUTOUT;
                return e.ztag == se.CarBody || e.ztag == se.CarWheel || (e.ztag, se.CarArm), n.renderMode = o,
                    i.meshRenderer.material = n, t && "object" != t && (t.parent.removeChild(t), i.addChild(t)),
                    i;
            }
        }
        destroyCarItems() {
            this.carBodies = [], this.vehicle = null, this.carVisuals = [], this.carWheels = [],
                this.wheelsVisuals = [];
        }
    }
    class me extends Laya.Sprite {
        constructor() {
            super(...arguments), this.whellOption = {
                radius: .2,
                directionLocal: new CANNON.Vec3(0, 0, -1),
                suspensionStiffness: 30,
                suspensionRestLength: .3,
                frictionSlip: 5,
                dampingRelaxation: 2.3,
                dampingCompression: 4.4,
                maxSuspensionForce: 1e5,
                rollInfluence: .01,
                axleLocal: new CANNON.Vec3(0, 1, 0),
                chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0),
                maxSuspensionTravel: .3,
                customSlidingRotationalSpeed: -30,
                useCustomSlidingRotationalSpeed: !0
            }, this.world = null, this.mass = 935, this.vehicle = null, this.maxSteerVal = .5,
                this.maxForce = 1050, this.brakeForce = .9;
        }
        init(e, t, a, i, s, n, o, r, l) {
            return gg.data.getGameConf().setting && (this.mass = gg.data.getGameConf().setting.carMass,
                this.maxForce = gg.data.getGameConf().setting.carMaxForce, this.maxSteerVal = gg.data.getGameConf().setting.carSteerVal,
                this.brakeForce = gg.data.getGameConf().setting.carBrakeForce), this.cannon = e,
                this.world = e.world, {
                carbody: this.initCar(t, a, i, s, n, o, r, l),
                vehicle: this.vehicle
            };
        }
        initCar(e, t, a, i, s, n, o, r) {
            let l = t.getChildByName(a), h = l.meshRenderer.bounds.getExtent(), c = new CANNON.Vec3(h.z - 1.2, .8, .1), d = new CANNON.Box(c);
            new CANNON.Sphere(1);
            var m = new CANNON.Body({
                mass: this.mass
            });
            m.addShape(d), m.position.set(t.transform.position.x, t.transform.position.y + 1, t.transform.position.z),
                m.addEventListener("collide", function (e) { });
            let g = new Laya.Sprite3D();
            g.name = "CarNode", e.addChild(g);
            let u = this.cannon.addCarItem(m, se.CarBody, "chassisBody");
            g.addChild(u);
            let C = new CANNON.Quaternion();
            C.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2), C = new CANNON.Quaternion(-.5, -.5, -.5, .5);
            console.log("a")
            var p = new CANNON.RaycastVehicle({

                chassisBody: m
            });
            m.quaternion = C, this.vehicle = p, this.cannon.setVehichle(p), this.world.doProfiling = !0;
            let S = this.whellOption;
            S.radius = t.getChildByName(i).meshRenderer.bounds.getExtent().y / 2 + .4;
            let y = 1.3, L = 1, w = -0;
            r && r.wheel && (y = r.wheel.x, L = r.wheel.y, w = r.wheel.z), S.chassisConnectionPointLocal.set(y, L, w),
                p.addWheel(S), S.chassisConnectionPointLocal.set(y, -L, w), p.addWheel(S), S.chassisConnectionPointLocal.set(-y, L, w),
                p.addWheel(S), S.chassisConnectionPointLocal.set(-y, -L, w), p.addWheel(S), p.addToWorld(this.world),
                this.world.addBody(p.chassisBody);
            var f = [];
            let v = [i, s, n, o];
            for (var B = 0; B < p.wheelInfos.length; B++) {
                var _ = p.wheelInfos[B], b = new CANNON.Cylinder(_.radius, _.radius, _.radius / 2, 20), I = new CANNON.Body({
                    mass: 0,
                    type: CANNON.Body.KINEMATIC
                });
                b.hight = .2;
                var G = new CANNON.Quaternion();
                G.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2), I.addShape(b, new CANNON.Vec3(), G),
                    f.push(I);
                let e = t.getChildByName(v[B]), a = this.cannon.addVisualWheel(I, e);
                g.addChild(a), e.transform.position = new Laya.Vector3(), e.transform.localRotationEulerZ = 90;
            }
            this.world.addEventListener("postStep", () => {
                this.cannon.updateVisuals();
            }), t.parent.removeChild(t), l.name = "myCar";
            let k = u.addChild(l);
            return console.log(k.transform.position), l.transform.position = new Laya.Vector3(),
                l.transform.localRotationEulerY = 90, l.transform.localRotationEulerZ = 90,



                k;
        }
        // onKeyDown(e) {
        // let t = e.keyCode, a = this.vehicle;
        // console.log("t",t)
        // switch (a.setBrake(0, 0), a.setBrake(0, 1), a.setBrake(0, 2), a.setBrake(0, 3), 
        // t) {

        //   case 32:
        //     a.setBrake(this.brakeForce, 0), a.setBrake(this.brakeForce, 1), a.setBrake(this.brakeForce, 2), 
        //     a.setBrake(this.brakeForce, 3);
        //     break;

        //   case 87:
        //     a.applyEngineForce(-this.maxForce, 2), a.applyEngineForce(-this.maxForce, 3);
        //     break;

        //   default:
        //     break;

        //   case 68:
        //     a.setSteeringValue(-this.maxSteerVal, 0), a.setSteeringValue(-this.maxSteerVal, 1);
        //     break;

        //   case 65:
        //     a.setSteeringValue(this.maxSteerVal, 0), a.setSteeringValue(this.maxSteerVal, 1);
        //     break;

        //   case 83:
        //     a.applyEngineForce(this.maxForce, 2), a.applyEngineForce(this.maxForce, 3);
        // }
        // }
        // onKeyUp(e) {
        //     let t = e.keyCode, a = this.vehicle;
        //     switch (a.setBrake(0, 0), a.setBrake(0, 1), a.setBrake(0, 2), a.setBrake(0, 3), 
        //     t) {
        //       case 87:
        //         a.applyEngineForce(0, 2), a.applyEngineForce(0, 3);
        //         break;

        //       case 68:
        //       case 65:
        //         this.vehicle.setSteeringValue(0, 0), this.vehicle.setSteeringValue(0, 1);
        //         break;

        //       case 83:
        //         a.applyEngineForce(0, 2), a.applyEngineForce(0, 3);
        //     }
        // }
        createCharater(e, t) {
            var a = e.addComponent(Laya.CharacterController);
            a.gravity = new Laya.Vector3(0, 0, 0);
            var i = new Laya.BoxColliderShape(t.x - .6, t.z - .1, t.y - .1);
            i.localOffset = new Laya.Vector3(0, 0, 0), a.colliderShape = i;
        }
    }
    class ge extends Laya.Script {
        constructor() {
            super(), this.lastTime = 0, this.fixedTimeStep = 1 / 60, this.maxSubSteps = 3, this.stopUpdate = !1;
        }
        init(e, t, a, i) {
            let s = new de();
            this.cannon = s.init();
            let n = [{
                path: "road",
                type: se.Road
            }, {
                path: "hide",
                type: se.Fence
            }, {
                path: "stock",
                type: se.Stock
            }];
            ce.initScene(t.parent, t, this.cannon, n);
            let o = new me().init(this.cannon, e, a, "mesh_snowmobile1", "wheel_fl", "wheel_fr", "wheel_rl", "wheel_rr");
            this.vehicleSprite = o.carbody, this.vehicle = o.vehicle, Laya.timer.frameLoop(1, this, () => { });
        }
        onDestroy() {
            this.stopUpdate = !0;
        }
    }
    class ue extends Laya.Script {
        constructor() {
            super(), this.car = null, this.eventList = [oe.Left, oe.Right, oe.Forward, oe.Back, oe.Shake],
                this.isCanForward = !1, this.isCanBack = !1, this.isCanLeft = !1, this.isCanRight = !1,
                this.curSpeed = 0, this.maxSteerVal = .3, this.maxForce = 2050, this.brakeForce = 20,
                this.maxSpeed = 120, this.canCount = !0, this.counter = 0, this.isSuccess = !1,
                this.wdleftCounter = 0, this.wdrightCounter = 0, this.limitFinishWD = 30;
        }
        onAwake() {
            for (let e = 0; e < this.eventList.length; e++) {
                const t = this.eventList[e];
                this.registerEvent(t);
            }
        }
        onStart() {
            this.setbrake();
        }
        onUpdate() {
            let e = this.vehicle;

            this.curSpeed = e.currentVehicleSpeedKmHour,
                this.calcuteEngine(), this.checkIsToDead();
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
        registerEvent(e) {
            gg.event.on(e.toString(), this, t => {
                this.handleEvent(e, t);
            });
        }
        handleEvent(e, t) {
            switch (e) {
                case oe.Left:
                    this.isCanLeft = t;
                    break;

                case oe.Right:
                    this.isCanRight = t;
                    break;

                case oe.Forward:
                    this.isCanForward = t;
                    break;

                case oe.Back:
                    this.isCanBack = t;
                    break;

                case oe.Shake:
                    this.setbrake();
            }
        }
        calcuteEngine() {
            let e = this.maxSpeed;
            this.engineZero(), this.isCanBack ? (this.unbrake(), this.curSpeed > -e && (this.vehicle.applyEngineForce(this.maxForce, 0),
                this.vehicle.applyEngineForce(this.maxForce, 1), this.vehicle.applyEngineForce(this.maxForce, 2),
                this.vehicle.applyEngineForce(this.maxForce, 3)), this.curSpeed > 0 && (this.vehicle.applyEngineForce(3 * this.maxForce, 2),
                    this.vehicle.applyEngineForce(3 * this.maxForce, 3))) : this.isCanForward ? (this.unbrake(),
                        this.curSpeed < e && (this.vehicle.applyEngineForce(-this.maxForce, 0), this.vehicle.applyEngineForce(-this.maxForce, 1),
                            this.vehicle.applyEngineForce(-this.maxForce, 2), this.vehicle.applyEngineForce(-this.maxForce, 3)),
                        this.curSpeed < 0 && (this.vehicle.applyEngineForce(3 * -this.maxForce, 2), this.vehicle.applyEngineForce(3 * -this.maxForce, 3))) : this.curSpeed > 1 ? (this.vehicle.applyEngineForce(this.maxForce, 2),
                            this.vehicle.applyEngineForce(this.maxForce, 3)) : this.curSpeed < -1 && (this.vehicle.applyEngineForce(-this.maxForce, 2),
                                this.vehicle.applyEngineForce(-this.maxForce, 3));
            if (this.isCanLeft ? (this.wdleftCounter = this.wdleftCounter + .5, this.wdleftCounter >= this.limitFinishWD && (this.wdleftCounter = this.limitFinishWD)) : (this.wdleftCounter = this.wdleftCounter - .5,
                this.wdleftCounter <= 0 && (this.wdleftCounter = 0)), this.wdleftCounter > 0 && !this.isCanRight) {
                let e = this.maxSteerVal * this.wdleftCounter / this.limitFinishWD;
                this.vehicle.setSteeringValue(e, 0), this.vehicle.setSteeringValue(e, 1);
            }
            if (this.isCanRight ? (this.wdrightCounter = this.wdrightCounter + .5, this.wdrightCounter >= this.limitFinishWD && (this.wdrightCounter = this.limitFinishWD)) : (this.wdrightCounter = this.wdrightCounter - .5,
                this.wdrightCounter <= 0 && (this.wdrightCounter = 0)), this.wdrightCounter > 0 && !this.isCanLeft) {
                let e = this.maxSteerVal * this.wdrightCounter / this.limitFinishWD;
                this.vehicle.setSteeringValue(-e, 0), this.vehicle.setSteeringValue(-e, 1);
            }
            this.car.getChildByName("mesh_snowmobile1_tyre").transform.rotate(new Laya.Vector3(.005 * this.curSpeed, 0, 0));
        }
        engineZero() {
            this.vehicle.applyEngineForce(0, 0), this.vehicle.applyEngineForce(0, 1), this.vehicle.applyEngineForce(0, 2),
                this.vehicle.applyEngineForce(0, 3);
        }
        setbrake() {
            this.engineZero(), this.vehicle.setBrake(this.brakeForce, 0), this.vehicle.setBrake(this.brakeForce, 1),
                this.vehicle.setBrake(this.brakeForce, 2), this.vehicle.setBrake(this.brakeForce, 3);
        }
        unbrake() {
            this.vehicle.setBrake(0, 0), this.vehicle.setBrake(0, 1), this.vehicle.setBrake(0, 2),
                this.vehicle.setBrake(0, 3);
        }
        checkIsToDead() {
       

            this.isSuccess || (this.car.transform.rotationEuler.z < -45 || this.car.transform.rotationEuler.z > 45 ? (this.canCount && this.counter++,
                this.counter >= 90 && (this.canCount = !1, this.counter = 0, this.goDead(!1))) : this.counter = 0);
        }
        goDead(e) {
            if (this.isSuccess) return;
            this.isSuccess = !0, this.canCount = !0;
            let t = !1;
            e && (t = !0), gg.event.event(re.GameResult, t);
        }
    }
    class Ce extends Laya.Script3D {
        constructor() {
            super(), this.curWdType = null;
        }
        onTriggerEnter(e) {
            let t = this.owner;
            console.log("触发进入", t.ztag)
            if (t.ztag) switch (t.ztag) {
                case ne.Terminal:
                    gg.event.event(re.ArrivePoint, 1);
                    break;

                case ne.Reborn:
                    gg.event.event(re.RebornPoint, this.owner);
                    break;

                case ne.Dead:
                    gg.event.event(re.GameResult, !1);
                    break;

                case ne.Corn:
                    t.destroy(),
                        Laya.SoundManager.playSound("voices/coin-collect.mp3", false)
                    console.log("ttt", t)
                    gg.event.event(re.GetCorn);
                    break;

                case ne.Middle:
                    t.destroy();
            }
        }
        onTriggerStay(e) { }
        onTriggerExit(e) {
            console.log("触发离开," + this.owner.name);
        }
        onCollisionEnter(e) {
            console.log("碰撞进入");
        }
        onCollisionStay(e) { console.log("碰撞"); }
        onCollisionExit(e) {
            console.log("碰撞离开");
        }
    }
    class pe extends Laya.Script {
        constructor() {
            super(...arguments), this.autoRotate = !0, this._mouseDown = !1, this._rotate = new Laya.Vector3(),
                this._autoRotateSpeed = new Laya.Vector3(0, .15, 0);
        }
        onStart() {
            this.carModel = this.object, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function () {
                this._mouseDown = !0, this._lastMouseX = Laya.MouseManager.instance.mouseX;
            }), Laya.stage.on(Laya.Event.MOUSE_UP, this, function () {
                this._mouseDown = !1;
            });
        }
        onUpdate() {
            if (this.carModel) if (this._mouseDown) {
                var e = Laya.MouseManager.instance.mouseX - this._lastMouseX;
                this._rotate.y = .2 * e, this.carModel.transform.rotate(this._rotate, !1, !1), this._lastMouseX = Laya.MouseManager.instance.mouseX;
            } else this.carModel.transform && this.autoRotate && this.carModel.transform.rotate(this._autoRotateSpeed, !1, !1);
        }
    }
    class Se extends Laya.Script {
        constructor() {
            super(...arguments), this.obj = null, this.camera = null, this.followObj = null,
                this.isAutoCorrect = !0, this.tw = null, this.perFrame = 2, this.isTurnReverse = !1,
                this.frameFlag = 10, this.cameraOffX = 0, this.cameraOffY = 0, this.cameraOffZ = 0;
        }
        onAwake() {
            gg.event.on(re.StopCamera, this, () => {
                this.stopCameraMove();
            });
        }
        onUpdate() {
            this.isAutoCorrect && (this.updatePosition(), this.updateCamera());
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
        initCtrl(e, t, a, i, s) {
            this.obj = e, this.camera = t, this.followObj = a, i && (this.isTurnReverse = i),
                s && (this.isAutoCorrect = !1);
        }
        updatePosition() {
            this.obj && this.followObj && this.obj.transform && (this.followObj.transform.position = this.obj.transform.position);
        }
        cameraFollow(e) {
            if (this.followObj && this.obj) {
                var t = this.followObj.transform.position, a = this.lerp(t.x, this.obj.transform.position.x, e), i = this.lerp(t.y, this.obj.transform.position.y, e), s = this.lerp(t.z, this.obj.transform.position.z, e);
                this.followObj.transform.localPosition = new Laya.Vector3(a + this.cameraOffX, i + this.cameraOffY, s + this.cameraOffZ);
            }
        }
        updateCamera() {
            let e = this.followObj.transform.localRotationEulerY, t = this.obj.transform.rotationEuler.y;
            e < -100 && t > 100 ? (console.log(e + "," + t), e = 360 + e, this.followObj.transform.localRotationEulerY = e) : e > 100 && t < -100 && (console.log(e + "," + t),
                e -= 360, this.followObj.transform.localRotationEulerY = e);
            let a = Laya.MathUtil.lerp(e, t, .1);
            this.followObj.transform.localRotationEulerY = a;
        }
        lerp(e, t, a) {
            return a <= 0 ? e : a >= 1 ? t : a * t + (1 - a) * e;
        }
        moveCamera() {
            if (!this.followObj) return;
            if (!this.followObj.transform) return void console.log("镜头跟踪失败中");
            let e = this.followObj.transform.localRotationEulerY;
            this.isTurnReverse && (e > 0 && e <= 180 ? e -= 180 : e < 0 && e >= -180 && (e += 180));
            let t = this.obj.transform.rotationEuler.y, a = 0, i = 0;
            e >= -180 && e <= -120 && t <= 180 && t >= 120 ? (a = e - -180 + (180 - t), i = 1) : t >= -180 && t <= -120 && e <= 180 && e >= 120 ? (a = t - -180 + (180 - e),
                i = -1) : t > e ? (a = t - e, i = -1) : (a = e - t, i = 1);
            this.tw && Laya.Tween.clear(this.tw), this.tw = Laya.Tween.to({
                value: 0
            }, {
                value: 1,
                update: new Laya.Handler(this, e => {
                    this.followObj && this.followObj.transform && (1 == i ? this.followObj.transform.rotate(new Laya.Vector3(0, -a / this.frameFlag, 0), !1, !1) : this.followObj.transform.rotate(new Laya.Vector3(0, a / this.frameFlag, 0), !1, !1),
                        0);
                })
            }, Math.floor(1e3 * this.perFrame / 60), Laya.Ease.cubicInOut, new Laya.Handler(this, () => { }), 0, !0, !0);
        }
        stopCameraMove() {
            this.tw && Laya.Tween.clear(this.tw), this.isAutoCorrect = !1;
        }
        continueCameraMove() {
            this.isAutoCorrect = !0;
        }
    }
    class ye extends Laya.Script {
        constructor() {
            super(...arguments), this.curCheckPoint = null, this.subObj = null, this.lastTime = 0,
                this.fixedTimeStep = 1 / 60, this.maxSubSteps = 3, this.isOver = !1, this.isLoading = !1,
                this._level = 1
        }
        onAwake() {
            super.onAwake(),
            //  this._level = gg.player.getData().curLevel, 
            this.subObj = new Laya.Sprite3D(),
            this.subObj.name = "CameraNode", 
            
            gg.event.on(re.GameResult, this, e => {
                    this.isOver || (this.isOver = !0, this.gameOver(e, e));
                }), gg.event.on(re.SelectPreCar, this, () => {
                    this.PreShowCar.destroy(), this.loadPreShow();
                }), 
            
            gg.event.on(re.ArrivePoint, this, e => {
                    this.isOver || (gg.event.event(re.StopCamera), Laya.timer.frameOnce(60, this, () => {
                        this.isOver = !0, this.gameOver(!0);
                        // this.curScene.destroy()
                        this.firstLoad = true;
                        if( this.curScene.getChildByName("scene_game")!=null)
                        {
                            this.curScene.getChildByName("scene_game").destroy()
                        }
                        
                        console.log("this.curscene",this.curScene)
                    }));
                })

                this.levelLbl.text = `Level ${le.queryCurLevel()}`, this.moneyLbl.text = le.queryMoney(),
                this.gameLevelLbl.text = `Level ${le.queryCurLevel()}`, this.gameMoneyLbl.text = le.queryMoney()
            if (window.btnReturn) {
                window.btnReturn.visible = false;
            }

            if (!window.btnReturn) {
                window.btnReturn = new Laya.Button()
                window.btnReturn.anchorX = window.btnReturn.anchorY = 0.5;
                window.btnReturn.x = 80;
                window.btnReturn.y = 150;
                window.btnReturn.scaleX = window.btnReturn.scaleY = 0.5;
                window.btnReturn.stateNum = 0;
                window.btnReturn.skin = "shuaxin.png"
                Laya.stage.addChild(window.btnReturn)

                window.btnReturn.visible = false;
                window.btnReturn.on(Laya.Event.CLICK, this, () => {
                    console.log("this.curScene", this.curScene)

                    this.curScene.getChildByName("CarNode").destroy()
                    this.isLoading = !0
                    // this.curScene.destroy()
                    // this.firstLoad = false;


      
                    // this.initScene()


                    Laya.Scene.load($.Loading, Laya.Handler.create(this, function (e) {
                        window.box_adTwo.visible = false;
                        window.btnSound.visible = false;
                        window.yad.visible = false;
                        e && (e.name = "LoadingDialog", e.width = Laya.stage.width, e.height = Laya.stage.height,
                            e.pos(0, 0), Laya.stage.addChild(e));
                            this.initLevel(e => {
                                this.initCar(e, () => { });
                            })
                            //  this.camera = new Laya.Camera(0, .6, 6e3), this.camera.transform.translate(new Laya.Vector3(0, 5, -9)),
                            //     this.camera.transform.rotate(new Laya.Vector3(-15, 0, 0), !0, !1), this.camera.transform.rotate(new Laya.Vector3(0, 180, 0), !1, !1),
                            //     this.subObj.addChild(this.camera);
                    })), setTimeout(() => {
                        // this.onClickStart(), 
                        
   
                        Laya.stage.getChildByName("LoadingDialog").removeSelf();
                    }, 1e3);

                    if( this.curScene.getChildByName("scene_game")!=null)
                    {
                        this.curScene.getChildByName("scene_game").destroy()
                    }


                })
            }

           

        }
        onEnable(){
            console.log("onEnable")
            this.loadPreShow();
            this.shopBtn.on(Laya.Event.CLICK, this, this.onClickShop), 
            this.startBtn.on(Laya.Event.CLICK, this, this.loadCheckpoint)
        }
        onClickShop() {
            Laya.SoundManager.playSound("voices/Button-select.mp3", false);
            Laya.Scene.load("res/dialogs/ShopDialog3.scene", Laya.Handler.create(this, function (e) {
                window.box_adTwo.visible = false;
                window.btnSound.visible = false;
                e && (e.name = "shopDialog", e.width = Laya.stage.width, e.height = Laya.stage.height,
                    e.pos(Laya.stage.width / 2, Laya.stage.height / 2), Laya.stage.addChild(e));
            }));
        }
        onClickStart() {
            this.gameovercount = 1
            gg.event.event(re.StartCount);
        }
        loadCheckpoint() {
            this.isLoading = !0
            window.btnReturn.visible = true;
            if(!this.firstLoad)
            {
                console.log("firstload")
                this.initScene()
            }
            else{
                this.initLevel(e => {
                    this.initCar(e, () => { });
                }), this.camera = new Laya.Camera(0, .6, 6e3), this.camera.transform.translate(new Laya.Vector3(0, 5, -9)),
                    this.camera.transform.rotate(new Laya.Vector3(-15, 0, 0), !0, !1), this.camera.transform.rotate(new Laya.Vector3(0, 180, 0), !1, !1),
                    this.subObj.addChild(this.camera);
            }
           
            Laya.Scene.load($.Loading, Laya.Handler.create(this, function (e) {
                window.box_adTwo.visible = false;
                window.btnSound.visible = false;
                window.yad.visible = false;
                e && (e.name = "LoadingDialog", e.width = Laya.stage.width, e.height = Laya.stage.height,
                    e.pos(0, 0), Laya.stage.addChild(e));
            })), setTimeout(() => {
                // this.PreShowView.destroy()
                this.onClickStart(), Laya.stage.getChildByName("LoadingDialog").destroy();
            }, 1e3);

        }
        checkCanEnterGame() {
            this.isLoading ? Laya.timer.once(1e3, this, () => {
                this.checkCanEnterGame();
            }) : Laya.timer.once(1e3, this, () => {
                this.onClickStart(), gg.event.event(re.CloseLoading);
            });
        }

        gameOver(e, t, a) {
            window.btnReturn.visible = false;
            if (this.gameovercount == 1) {
                console.log("gameover")
                e ? (le.setLevelUp(), this._level = gg.player.getData().curLevel, P.instance.ResultUICtr.UpdateData(1, 100)) : (P.instance.ResultUICtr.UpdateData(0, 50)),
                    setTimeout(() => {
                        this.isOver = !0, this.reloadCar();
                    }, 500), gg.player.save(), this.moneyLbl.text = "" + le.queryMoney(), this.levelLbl.text = `Level ${le.queryCurLevel()}`,
                    this.gameLevelLbl.text = `Level ${le.queryCurLevel()}`, this.gameMoneyLbl.text = le.queryMoney(),
                    P.instance.GamingUICtr.GameOverEvent();
                this.gameovercount = 2
            }


        }
        reloadCar() {


            this.initLevel(e => {
                this.initCar(this.curCheckPoint, () => {
                    this.isOver = !1, gg.event.event(re.StartCount);
                });
            });
        }
        onUpdate() {
            if (this.lib) {
                let t = +Date.now();
                if (void 0 !== this.lastTime) {
                    var e = (t - this.lastTime) / 1e3;
                    this.isOver || this.lib.cannon.world.step(this.fixedTimeStep, e, this.maxSubSteps);
                }
                this.lastTime = t;
            }
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
        loadPreShow() {
            Laya.Scene3D.load(v.instance.Path + "res/d3/desket/Conventional/scene_shop.ls", Laya.Handler.create(this, e => {
                let t = e;
                this.PreShowView.addChild(e), 
                this.PreShowCar = e, e.getChildByName("node_camera").getChildByName("main_camera").enableHDR = !1;
                let a = e.getChildByName("garage").getChildByName("mesh_garage5"), i = v.instance.Path + "res/d3/car/Conventional/snowmobile";
                Laya.Sprite3D.load(i + gg.player.getData().carId + ".lh", Laya.Handler.create(null, e => {
                    let i = Laya.Sprite3D.instantiate(e, t, !1, new Laya.Vector3(0, 0, 0)).getChildAt(0), s = i.addComponent(pe);
                    s.object = i, s.autoRotate = !1, t.addChild(i), i.getChildByName("mesh_snowmobile1").getChildByName("man1").active = !1,
                        i.addChild(a);
                    let n = i.getComponent(Laya.Rigidbody3D);
                    n && n.destroy();
                    let o = i.getChildByName("node_camera");
                    o && (o.active = !1);
                }));
            }));
        }
        initScene() {

            Laya.Scene3D.load("res/d3/scene_game/Conventional/scene_game.ls", Laya.Handler.create(this, e => {
                
            
                this.curScene = e 


                e.addChild(this.subObj), 
                this.GameView.addChild(e),
                this.initLevel(e => {
                    this.initCar(e, () => { });
                }), this.camera = new Laya.Camera(0, .6, 6e3), this.camera.transform.translate(new Laya.Vector3(0, 5, -9)),
                    this.camera.transform.rotate(new Laya.Vector3(-15, 0, 0), !0, !1), this.camera.transform.rotate(new Laya.Vector3(0, 180, 0), !1, !1),
                    this.subObj.addChild(this.camera);
            }));
        }
        initLevel(e) {
            if(this.curScene.getChildByName("scene_game")!=null)
            {
                this.curScene.getChildByName("scene_game").destroy()
            }
            // if(this.curScene.getChildByName("CameraNode")!=null)
            // {
            //     this.curScene.getChildByName("CameraNode").destroy()
            // }
            
            Laya.Sprite3D.load(v.instance.Path + "res/d3/checkpoint/Conventional/checkpoint" + le.queryCurLevel() + ".lh", Laya.Handler.create(null, t => {
         
                let a = this.curScene.addChild(t).getChildAt(0);
                console.log("this.curScenesfsfsdf",this.curScene)
                this.curCheckPoint = a, this.setClliderTrigger(a.getChildByName("end"), !0, ne.Terminal),
                    this.setClliderTrigger(a.getChildByName("fall"), !0, ne.Dead), this.loadCorns(a),
                    e && e(a);
            }));
        }
        initCar(e, t) {


            Laya.Sprite3D.load(v.instance.Path + "res/d3/car/Conventional/snowmobile" + gg.player.getData().carId + ".lh", Laya.Handler.create(null, a => {
                let i = Laya.Sprite3D.instantiate(a).getChildAt(0);

                this.lib = new ge();
                this.lib.init(this.curScene, e, i, {
                    extent: {
                        x: 1.5,
                        y: 1.1,
                        z: .4
                    },
                    wheel: {
                        x: 1.4,
                        y: 1,
                        z: -.4
                    }
                }), this.lib.vehicleSprite.addComponent(Se).initCtrl(this.lib.vehicleSprite, this.camera, this.subObj, !0, !1);
                let s = this.lib.vehicleSprite.addComponent(ue);
                s.car = this.lib.vehicleSprite, s.vehicle = this.lib.vehicle;
                let n = this.lib.vehicleSprite;
                this.setCharacter(n), t && t(this.lib.vehicleSprite, this.lib.vehicle), this.isLoading = !1;
                // if (this.firstLoad == false) {
                    for (let i = 0; i < this.curScene.numChildren; i++) {
                        if (this.curScene.getChildAt(i).name == "CarNode") {
                            console.log("this.curScene.getChildAt(i)", this.curScene.getChildAt(i))
                            if (i != this.curScene.numChildren - 1) {
                                this.curScene.getChildAt(i).destroy()
                            }
                        }
                    }
                // }
            }));

        }

        createCannonObject() {
            var e = new CANNON.Sphere(2), t = new CANNON.Body({
                mass: 0
            });
            t.addShape(e), t.position.set(0, 3, 2), this.lib.cannon.world.addBody(t), this.lib.cannon.addVisual(t);
        }
        addBox(e, t, a) {
            let i = e, s = t, n = a, o = this.curScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(i, s, n)));
            o.meshRenderer.material = new Laya.BlinnPhongMaterial();
            let r = o.transform, l = r.position;
            l.setValue(4 * Math.random() + 5, 2, 4 * Math.random() + 10), r.position = l;
            let h = r.rotationEuler;
            h.setValue(360 * Math.random(), 360 * Math.random(), 360 * Math.random()), o.transform.rotationEuler = h;
            let c = o.addComponent(Laya.Rigidbody3D), d = new Laya.BoxColliderShape(i, s, n);
            c.colliderShape = d, c.mass = 100;
        }
        setClliderTrigger(e, t, a) {
            if (!e) return;
            let i = e.getComponent(Laya.PhysicsCollider);
            i && (0 == t || (i.isTrigger = !0), e.ztag = a, i.owner.addComponent(Ce));
        }
        setCharacter(e) {
            if (e) {
                var t = e.addComponent(Laya.CharacterController), a = new Laya.CapsuleColliderShape(.5, .5);
                t && (t.gravity.setValue(0, 0, 0), t.colliderShape = a);
            }
        }
        loadCorns(e) {
            let t = e.getChildByName("coin");
            if (t) for (let e = 0; e < t.numChildren; e++) {
                const a = t.getChildAt(e);
                this.setClliderTrigger(a, !0, ne.Corn);
            }
            let a = e.getChildByName("middle");
            if (a) for (let e = 0; e < a.numChildren; e++) {
                const t = a.getChildAt(e);
                this.setClliderTrigger(t, !0, ne.Middle);
            }
        }
    }
    const Le = {
        LoadRes: "Loading...",
        LoadResFail: "加载失败，请稍后重试",
        NoVideoAd: "暂时没有激励广告",
        GetRewardSuccess: "获取奖励成功",
        GetRewardFail: "获取奖励失败",
        CurrentLevel: "Level$0",
        NoMoney: "金币不足"
    };
    class we extends Laya.Script {
        constructor() {
            super(...arguments), this.carNode = null, this.closeBtn = null, this.carLbl = null,
                this.btnPay = null, this.btnChoose = null, this.btnBack = null, this.hadMoney = null,
                this.payNeedMoney = null, this.btnBefore = null, this.btnNext = null, this.iconLock = null,
                this.nameLbl = null, this.btnVideo = null, this.seeNeedCount = null, this.storeScene = null,
                this.curCar = null, this.curCarId = 1, this.carList = {}, this.curSceneCar = null,
                this.canLoadCar = !0, this.defautScenePath = v.instance.Path + "res/d3/scene_shop/Conventional/scene_shop.ls",
                this.defautCarId = v.instance.Path + "res/d3/car/Conventional/snowmobile", this.choooseCallback = (() => {
                    gg.event.event(re.SelectPreCar);
                });
        }
        onAwake() {
            super.onAwake(), this.btnBack.on(Laya.Event.CLICK, this, this.onClickClose), this.btnBefore.on(Laya.Event.CLICK, this, () => {
                this.toforwad();
            }), this.btnNext.on(Laya.Event.CLICK, this, () => {
                this.tonext();
            }), this.btnPay.on(Laya.Event.CLICK, this, () => {
                this.pay();
            }), this.btnChoose.on(Laya.Event.CLICK, this, () => {
                this.choose();
            }), this.btnVideo && this.btnVideo.on(Laya.Event.CLICK, this, this.seeVideo), this.initShop();
            this.iconLock.visible = !1
        }
        onClickClose() {
            Laya.SoundManager.playSound("voices/Button-select.mp3", false);

            this.curCar && this.curCar.destroy(), this.storeScene && this.storeScene.destroy(),
                Laya.stage.getChildByName("shopDialog").removeSelf();
            window.box_adTwo.visible = true;
            window.btnSound.visible = true;
        }
        initShop() {
            this.carList = gg.data.getGameConf().carList, this.curCarId = 1, this.hadMoney.text = gg.player.getData().money + "",
                Laya.Scene3D.load(this.defautScenePath, Laya.Handler.create(null, e => {
                    this.storeScene = e, this.carNode.addChild(this.storeScene), this.loadCarShow(this.curCarId);
                }));
        }
        loadCarShow(e) {
            if (!this.canLoadCar) return;
            this.canLoadCar = !1, this.curCar && this.curCar.destroy(), this.curSceneCar && this.curSceneCar.destroy();
            let t = this.carList[this.curCarId];
            this.checkHadCar() ? (this.showNode(this.btnChoose), gg.player.getData().carId == e ? (this.disableNode(this.btnChoose),
                this.btnChoose.getChildByName("Label").text = "Selected") : (this.ableNode(this.btnChoose),
                    this.btnChoose.getChildByName("Label").text = "Select"), this.hideNode(this.btnPay),
                this.hideNode(this.btnVideo), this.iconLock.visible = !1) : (this.iconLock.visible = !0,
                    this.hideNode(this.btnChoose), this.showNode(this.btnPay), this.hideNode(this.btnVideo),
                    this.payNeedMoney.text = t.money), this.nameLbl.text = t.name, Laya.Sprite3D.load(this.defautCarId + this.curCarId + ".lh", Laya.Handler.create(null, e => {
                        this.canLoadCar = !0;
                        let t = Laya.Sprite3D.instantiate(e, this.storeScene, !1, new Laya.Vector3(0, 0, 0));
                        this.curSceneCar = t;
                        let a = t.getChildAt(0);
                        a.getChildByName("mesh_snowmobile1").getChildByName("man1").active = !1, this.shadow = this.storeScene.getChildByName("garage").getChildByName("mesh_garage5"),
                            a.addChild(this.shadow), a.addComponent(pe).object = a;
                        this.storeScene.getChildByName("node_camera");
                        this.curCar = a, this.storeScene.addChild(a);
                        let i = a.getComponent(Laya.Rigidbody3D);
                        i && i.destroy();
                        let s = this.storeScene.getChildByName("scene_game");
                        s && s.destroy();
                        let n = a.getChildByName("node_camera");
                        n && (n.active = !1);
                    }));
        }
        seeVideo() {
            gg.sdk.showVideoAd(e => {
                e && e.isEnded && this.seeVideoReward();
            }, e => {
                t.ShowToast(Le.NoVideoAd), gg.sdk.iswx() || this.seeVideoReward();
            });
        }
        seeVideoReward() {
            let e = this.carList[this.curCarId], t = gg.data.getStorage(`${Z}_car${this.curCarId}`) || 0;
            gg.data.setStorage(`${Z}_car${this.curCarId}`, ++t), this.seeNeedCount.changeText(`${t}/${e.count}`);
            let a = e.count;
            if (t >= a) {
                gg.player.getData().cars[this.curCarId] = e, this.buySuccess(a);
            }
        }
        checkHadCar() {
            let e = gg.player.getData().cars[this.curCarId];
            return !!e || (1 == e || e);
        }
        pay() {
            let e = this.carList[this.curCarId];
            if (e && !this.checkHadCar()) {
                let a = gg.player.getData()
                Laya.SoundManager.playSound("voices/Button-select.mp3");
                console.log("eeee", e)
                i = a.money, s = e.money;
                console.log("iiii", i);
                console.log("ssss", s)
                i >= s ? (a.cars[this.curCarId] = e, a.money = i - s, this.buySuccess(s), this.hadMoney.text = a.money + "") : t.ShowToast(Le.NoMoney);
            }
        }
        buySuccess(e) {
            gg.player.save(), this.showNode(this.btnChoose), this.hideNode(this.btnPay), this.hideNode(this.btnVideo),
                this.iconLock.visible = !1, this.ableNode(this.btnChoose), this.btnChoose.getChildByName("Label").text = "Select";
        }
        choose() {
            Laya.SoundManager.playSound("voices/Button-select.mp3");
            console.log("gg.player.", gg.player)
            this.carList[this.curCarId] && this.checkHadCar() &&
                (gg.player.update("carId", this.curCarId),
                    this.disableNode(this.btnChoose), this.btnChoose.getChildByName("Label").text = "Selected",
                    this.choooseCallback());
        }
        hideNode(e) {
            e && (e.getChildByName("dis").visible = !0, e.visible = !1);
        }
        showNode(e) {
            e && (e.getChildByName("dis").visible = !1, e.visible = !0);
        }
        disableNode(e) {
            e && (e.getChildByName("dis").visible = !0, e.active = !1);
        }
        ableNode(e) {
            e && (e.getChildByName("dis").visible = !1, e.active = !0);
        }
        close() { }
        toforwad() {
            this.curCarId <= 1 || (this.curCarId--, this.loadCarShow(this.curCarId));
        }
        tonext() {
            this.curCarId >= gg.data.getGameConf().carCount || (this.curCarId++, this.loadCarShow(this.curCarId));
        }
    }
    class fe extends Laya.Script {
        onAwake() {
            super.onAwake(), gg.event.on(re.CloseLoading, this, () => {
                this.owner ? gg.ui.closeDialog(this.owner) : this.owner.removeSelf();
            });
        }
        onStart() {
            this.loadAnimation.loadAtlas("res/atlas/res/ui/local/loading.atlas", Laya.Handler.create(this, () => {
                let e = this.loadAnimation.getGraphicBounds();
                this.loadAnimation.pivot(e.width / 2, e.height / 2), this.loadAnimation.pos(Laya.stage.width / 2 - 40, Laya.stage.height / 2);
            })), this.lvlLbl.text = `Level ${le.queryCurLevel()}`;
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
    }
    class ve {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("components/ui/ScaleButton.ts", ae), e("gamePlay/control/ControlUI.ts", he), e("gamePlay/GamePlay.ts", ye),
                e("components/dialog/ShopDialog.ts", we), e("gamePlay/units/Loading.ts", fe);
        }
    }
    ve.width = 1334, ve.height = 750, ve.scaleMode = "exactfit", ve.screenMode = "none",
        ve.alignV = "middle", ve.alignH = "center", ve.startScene = "res/dialogs/ShopDialog3.scene",
        ve.sceneRoot = "", ve.debug = !1, ve.stat = !1, ve.physicsDebug = !1, ve.exportSceneToJson = !0,
        ve.init();
    new class {
        constructor() {
            // const userAgent = window.navigator.userAgent;
            // console.log("userAgent",userAgent)
            // if (userAgent.indexOf("iPhone OS 15_1") > -1) {
            //花屏问题
            Config.useWebGL2 = false;
            // }
            window.Laya3D ? Laya3D.init(ve.width, ve.height) : Laya.init(ve.width, ve.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = ve.scaleMode, Laya.stage.screenMode = ve.screenMode, Laya.stage.alignV = ve.alignV,
                Laya.stage.alignH = ve.alignH, Laya.URL.exportSceneToJson = ve.exportSceneToJson,
                (ve.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                ve.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), ve.stat && Laya.Stat.show(),
                t.onInit();
            let e = ["zip/Assets.zip", "Images/", "res/atlas", "fileconfig.json"];
            Laya.Browser.onMiniGame && (Laya.MiniAdpter.init(), Laya.MiniAdpter.nativefiles = e),
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {



            Laya.stage.addChild(new te());









        }
        GetServerData() {
            t.SeverJsonObj && (O.Config = t.SeverJsonObj, Laya.timer.clear(this, this.GetServerData));
        }
        GetSdkData() {
            t.SDKManagerLoadingFinsh && (P.isLoadFinish && (t.AdFlag && P.instance.openTaoLu(),
                t.SpecialOff && P.instance.openML()), Laya.timer.clear(this, this.GetSdkData));
        }
        GetConstSeverConfig() {
            P.BoxCount = t.BoxCount, t.ConstSeverConfigLoadingFinsh && P.isLoadFinish;
        }
    }();
}();