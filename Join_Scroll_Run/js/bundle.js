!function () {
    "use strict";
    class e { }
    e.GOLD = "Join-Scroll-Run-gold", e.ISSOUND = "Join-Scroll-Run-issound", e.ISMUSIC = "Join-Scroll-Run-ismusic", e.ISVIBRATE = "Join-Scroll-Run-isvibrate",
        e.LEVELINDEX = "Join-Scroll-Run-levelindex", e.ISWHITE = "Join-Scroll-Run-iswhite", e.SKININDEX = "Join-Scroll-Run-skinindex", e.UNLOCKSKINLIST = "Join-Scroll-Run-unlockskinlist";
    class t {
        static get isMini() {
            return -1 != this._isMini ? !!this._isMini : Laya.Browser.onMiniGame || Laya.Browser.onBDMiniGame || Laya.Browser.onKGMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onQQMiniGame || Laya.Browser.onBLMiniGame || Laya.Browser.onTTMiniGame || Laya.Browser.onVVMiniGame ? (this._isMini = 1,
                !!this._isMini) : (this._isMini = 0, !!this.isMini);
        }
        static get $objcet() {
            return null != this._objcet ? this._objcet : Laya.Browser.onMiniGame ? (this._objcet = Laya.Browser.window.wx,
                this._objcet) : Laya.Browser.onQQMiniGame ? (this._objcet = Laya.Browser.window.qq,
                    this._objcet) : Laya.Browser.onTTMiniGame ? (this._objcet = Laya.Browser.window.tt,
                        this._objcet) : Laya.Browser.onQGMiniGame ? (this._objcet = Laya.Browser.window.qg,
                            this._objcet) : Laya.Browser.onVVMiniGame ? (this._objcet = Laya.Browser.window.qg,
                                this._objcet) : null;
        }
        static get gold() {
            return this._gold || (this._gold = Number(Laya.LocalStorage.getItem(e.GOLD))), this._gold;
        }
        static set gold(t) {
            this._gold = t, Laya.LocalStorage.setItem(e.GOLD, this._gold.toString());
        }
        static get skinUrl() {
            return this._skinUrl + this._skinList[this.skinIndex];
        }
        static get skinIndex() {
            return null == Laya.LocalStorage.getItem(e.SKININDEX) || null == Laya.LocalStorage.getItem(e.SKININDEX) || "" == Laya.LocalStorage.getItem(e.SKININDEX) ? (Laya.LocalStorage.setItem(e.SKININDEX, "0"),
                0) : Number(Laya.LocalStorage.getItem(e.SKININDEX));
        }
        static set skinIndex(t) {
            Laya.LocalStorage.setItem(e.SKININDEX, t.toString());
        }
        static get unlockSkinList() {
            if (null == Laya.LocalStorage.getItem(e.UNLOCKSKINLIST) || null == Laya.LocalStorage.getItem(e.UNLOCKSKINLIST) || "" == Laya.LocalStorage.getItem(e.UNLOCKSKINLIST)) {
                let t = [0];
                return Laya.LocalStorage.setItem(e.UNLOCKSKINLIST, JSON.stringify(t)), t;
            }
            return JSON.parse(Laya.LocalStorage.getItem(e.UNLOCKSKINLIST));
        }
        static set unlockSkinList(t) {
            Laya.LocalStorage.setItem(e.UNLOCKSKINLIST, JSON.stringify(t));
        }
        static isUnlock(e) {
            for (let t = 0; t < this.unlockSkinList.length; t++) if (e == this.unlockSkinList[t]) return !0;
            return !1;
        }
        static get ranUnLosckSkinIndex() {
            if (this.unlockSkinList.length == this.skinNum) return -1;
            let e;
            do {
                e = Math.floor(Math.random() * this.skinNum);
            } while (this.isUnlock(e));
            return e;
        }
        static get levelIndex() {
            return -1 == this._levelIndex ? (this._levelIndex = Number(Laya.LocalStorage.getItem(e.LEVELINDEX)),
                0 == this._levelIndex ? (this._levelIndex = 1, Laya.LocalStorage.setItem(e.LEVELINDEX, this._levelIndex.toString()),
                    this._levelIndex) : this._levelIndex) : this._levelIndex;
        }
        static set levelIndex(t) {
            this._levelIndex = t, Laya.LocalStorage.setItem(e.LEVELINDEX, this._levelIndex.toString());
        }
        static shareList() {
            return [];
        }
        static get showLog() {
            return !!this.isDebug && this._showLog;
        }
    }
    t.mulNum = 0, t.stage_width = 750, t.stage_height = 1334, t.ore_height = 1334, t.ore_width = 750,
        t.statusBarHeight = 0, t.currentTime = 0, t.scene = 0, t._isMini = -1, t._objcet = null,
        t._gold = 0, t.isloadingScene = !1, t.noAdBanner = !1, t.isLoadingVideo = !1, t.openId = "",
        t.login_city = "", t.isGameStart = !1, t.goldEggValue = .6, t.startTime = -1, t._skinUrl = "",
        t._skinList = [], t.trySkinTimes = 0, t.trySkinIndex = -1, t._levelIndex = -1, t.getGold = 10,
        t.watchADGold = 200, t.surl = "", t.version = "1.0.0", t.appName = "", t.AppId = "",
        t.isDebug = !1, t._showLog = !0, t.subpackageName = ["subpackage"], t.maxLevel = 9,
        t.skinNum = 6, t.luckBoxTime = 0, t.playerSc = .11, t.isLoadLevel = !1, t.groundRad = 55,
        t.lensd = 1, t.npcNum = 8, t.gameTimeOut = !1, t.timessss = 0;
    class i { }
    i.wxId = "1221441";
    class s {
        constructor() { }
        static on(e, t, i, n = null) {
            s._dspt.on(e, t, i, n);
        }
        static once(e, t, i, n) {
            s._dspt.once(e, t, i, n);
        }
        static off(e, t, i, n = !1) {
            s._dspt.off(e, t, i, n);
        }
        static event(e, t) {
            s._dspt.event(e, t);
        }
        static hasListener(e) {
            return s._dspt.hasListener(e);
        }
        static offAll(e) {
            s._dspt.offAll(e);
        }
        static offAllCaller(e) {
            s._dspt.offAllCaller(e);
        }
    }
    s._dspt = new Laya.EventDispatcher();
    class n { }
    n.GOLDCHANGE = "goldchange", n.SOUNDCHANGE = "soundchange", n.MUSICCHANGE = "musicchange",
        n.VIBRATECHANGE = "vibartechange", n.SHOWLEFTSIDE = "showleftside", n.SKINCHANGE = "skinchange",
        n.STAGERESIZE = "stageresize", n.USERJUMP = "userjump", n.GETAPP = "getApp", n.JIUGONGCLOSE = "jiugongclose",
        n.USERCANCEL = "usercancel", n.SKINJUMP = "skinjump", n.LOADFINISH = "loadfinish",
        n.GAMEREADY = "readygame", n.GAMESTART = "gamestart", n.GAMEOVER = "gameover", n.RESETGAME = "resetgame",
        n.GAMELOSE = "gamelose", n.GAMEWIN = "gamewin";
    class a { }
    a.Load_start = "Load_start", a.load_finish = "load_finish", a.enter_main = "enter_main",
        a.Click_startGame = "Click_startGame", a.Enter_whrite = "Enter_whrite", a.Enter_black = "Enter_black",
        a.Enter_linwrite = "Enter_linwrite", a.Start_video = "Start_video", a.Start_click = "Start_click",
        a.Game_pass = "Game_pass", a.Game_fail = "Game_fail", a.Video_show = "Video_show",
        a.Video_finish = "Video_finish", a.Click_show = "Click_show", a.Click_click = "Click_click",
        a.Show_gongge = "Show_gongge", a.Jump_gongge = "Jump_gongge", a.Show_juhe1 = "Show_juhe1",
        a.Jump_juhe1 = "Jump_juhe1", a.Show_juhe2 = "Show_juhe2", a.Jump_juhe2 = "Jump_juhe2",
        a.show_relive = "show_relive", a.show_jiesuan = "show_jiesuan", a.Jump_jiesuan = "Jump_jiesuan";
    class o {
        static get instacne() {
            return o._instance ? o._instance : o._instance = new o();
        }
        httpRequest(e, i, s, n = "") {
            var a = new Laya.HttpRequest();
            a.http.timeout = 5e3, a.once(Laya.Event.COMPLETE, i, s), a.send(t.surl + e, n, "post", "text");
        }
        getAddress() {
            var e = new Laya.HttpRequest();
            e.http.timeout = 5e3, e.once(Laya.Event.COMPLETE, this, e => {
                if (null == t.login_city || "" == t.login_city) {
                    let i = e.toString().split("=");
                    if (null != i[1] && "" != i[1]) {
                        let e = i[1].substring(1, i[1].length - 1), s = JSON.parse(e);
                        t.login_city = s.cname;
                    }
                }
            }), e.send("https://pv.sohu.com/cityjson?ie=utf-8", "", "post", "text");
        }
    }
    class r {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new r();
        }
        init() {
            Laya.Browser.onQGMiniGame && (this.qg = Laya.Browser.window.qg, this.qg.tmSDK.init({
                hideRequestLog: !1,
                appVersion: t.version
            }));
        }
        login(e, i) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.login().then(s => {
                console.log(s), t.openId = s.open_id, t.login_city = s.login_city, null != t.login_city && "" != t.login_city || o.instacne.getAddress(),
                    e && i && i.apply(e);
            });
        }
        checkFlowIsOpen(e, t, i) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.checkFlowIsOpen({
                positionId: e
            }).then(({ isOpen: e }) => {
                i.apply(t, [e]), console.log("该广告位是否开启:", e);
            });
        }
        getFlowConfig(e, t, i, s = !0) {
            let n = this;
            if (Laya.Browser.onQGMiniGame) if (n.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            } else n.qg.tmSDK.getFlowConfig({
                positionId: e
            }).then(a => {
                if (n.flowConfig[e] = a, i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            });
        }
        flowNavigate(e, t, i = "") {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.flowNavigate({
                positionId: e,
                creativeId: t
            }).then(t => {
                if (this.flowConfig[e] = t, "navigateToMiniProgram:fail cancel" == t.navigateMessage.errMsg) s.event(n.USERCANCEL); else if ("navigateToMiniProgram:ok" == t.navigateMessage.errMsg) switch (s.event(n.USERJUMP),
                    i) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            r.instance.sendEvent(a.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            r.instance.sendEvent(a.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            r.instance.sendEvent(a.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            r.instance.sendEvent(a.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                if (null != t) {
                    l.probability = t.probability, l.reSetWhite(t.posList), l.OpenClick = t.OpenClick,
                        l.ishutui = t.ishutui, l.OpenVideo = t.OpenVideo, l.blackIPCityArr = t.blackIPCityArr,
                        l.useSetWhite = t.useSetWhite, l.without_sceneList = t.without_sceneList, l.openJiugong = t.openJiugong,
                        l.isJump = t.isJump, l.RandomClick = t.RandomClick;
                    let e = t.crazy_click_config;
                    null != e && (l.space_level = e.space_level, l.start_level = e.start_level, l.switchVer = e.switchVer);
                } else console.log("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    class l {
        static get OpenClick() {
            return this.islinshiWhite && this._OpenClick;
        }
        static set OpenClick(e) {
            this._OpenClick = e;
        }
        static get OpenVideo() {
            return this.islinshiWhite && this._OpenVideo;
        }
        static set OpenVideo(e) {
            this._OpenVideo = e;
        }
        static get isShowHu() {
            return -1 == this._ishutui ? (this.isPos ? this.islinshiWhite || (this.ishutui ? this._ishutui = 1 : this._ishutui = 0) : this._ishutui = 0,
                !!this._ishutui) : !!this._ishutui;
        }
        static reSetWhite(t) {
            if (this.theposList = t, -1 != this.pos && null != this.pos && null != this.pos && t && t.length > 0) for (let i = 0; i < t.length; i++) this.pos == t[i] && (this._isWhite = 0,
                Laya.LocalStorage.setItem(e.ISWHITE, "false"), this.isPos = !1);
        }
        static get isWhite() {
            if (-1 != this._isWhite) return !!this._isWhite;
            {
                let t = Laya.LocalStorage.getItem(e.ISWHITE);
                if ("true" == t) return this._isWhite = 1, !!this._isWhite;
                if ("false" == t) return this._isWhite = 0, !!this._isWhite;
                if (!t) return this._isWhite = 0, Laya.LocalStorage.setItem(e.ISWHITE, "false"),
                    !!this._isWhite;
            }
        }
        static set isWhite(t) {
            if (null == Laya.LocalStorage.getItem(e.ISWHITE) || "" == Laya.LocalStorage.getItem(e.ISWHITE)) if (t) {
                this._isWhite = 1, Laya.LocalStorage.setItem(e.ISWHITE, "true");
                Laya.LocalStorage.getItem(e.ISWHITE);
            } else this._isWhite = 0, Laya.LocalStorage.setItem(e.ISWHITE, "false");
        }
        static get islinshiWhite() {
            if (this.isWhite) return !0;
            if (-1 == this._isLinshiWhiteList) {
                if (this.useSetWhite) {
                    let e = !0, i = !0;
                    if (this.without_sceneList) for (let i = 0; i < this.without_sceneList.length; i++) {
                        let s = this.without_sceneList[i];
                        t.scene == s && (console.log("---------场景值是黑名单1-----------"), e = !1);
                    }
                    if (this.blackIPCityArr) for (let e = 0; e < this.blackIPCityArr.length; e++) {
                        let s = this.blackIPCityArr[e];
                        console.log(s), -1 != t.login_city.indexOf(s) && (console.log("---------场景值是黑名单2-----------"),
                            i = !1);
                    }
                    return e && i ? (u.instance.sendEvent(a.Enter_linwrite), r.instance.sendEvent(a.Enter_linwrite),
                        this._isLinshiWhiteList = 1, !!this._isLinshiWhiteList) : (this._isLinshiWhiteList = 0,
                            !!this._isLinshiWhiteList);
                }
                return this._isLinshiWhiteList = 0, !!this._isLinshiWhiteList;
            }
            return !!this._isLinshiWhiteList;
        }
        static get checkWuchu() {
            if ((Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) && this.useSetWhite && this.blackIPCityArr) {
                let e = !0;
                for (let i = 0; i < this.blackIPCityArr.length; i++) {
                    let s = this.blackIPCityArr[i];
                    if (-1 != t.login_city.indexOf(s)) {
                        e = !1;
                        break;
                    }
                }
                if (!e) return !1;
                if (Math.random() <= this.probability) return this.wuchuTimes >= 1 ? (this.wuchuTimes = 0,
                    !1) : (this.wuchuTimes++, !0);
            }
            return !1;
        }
    }
    l.switchVer = !1, l.start_level = 1, l.space_level = 1, l.useSetWhite = !1, l.without_sceneList = new Array(),
        l.blackIPCityArr = new Array(), l._OpenClick = !1, l._OpenVideo = !1, l.crazy_click_config_version = 16,
        l.pos = -1, l.ishutui = !1, l._ishutui = -1, l.everyclick = !1, l.isPos = !0, l.openJiugong = !1,
        l.isShowWuchu = !1, l._isWhite = -1, l.isJump = !1, l.RandomClick = !1, l._isLinshiWhiteList = -1,
        l.probability = 0, l.wuchuTimes = 0;
    class h {
        static log(e, ...i) {
            t.showLog && console.log(e, ...i);
        }
        static info(e, ...i) {
            t.showLog && console.info(e, ...i);
        }
        static error(e, ...i) {
            t.showLog && console.error(e, ...i);
        }
        static warn(e, ...i) {
            t.showLog && console.warn(e, ...i);
        }
    }
    class c { }
    c.LoadingScene = "scene/LoadingScene.scene", c.MainScene = "scene/MainScene.scene",
        c.SelectSkinScene = "scene/SelectSkinScene.scene", c.WinScene = "scene/WinScene.scene",
        c.LoseScene = "scene/LoseScene.scene", c.LoseTwiceScene = "scene/LoseTwiceScene.scene",
        c.SkinTryScene = "scene/SkinTryScene.scene", c.LuckBoxScene = "scene/LuckBoxScene.scene",
        c.TipsScene = "tips/TipsScene.scene", c.MoveTipsScene = "tips/MoveTipsScene.scene",
        c.SideMoreGameScene = "side/MoreGameScene.scene", c.SideTwoScene = "side/SideTwoScene.scene",
        c.SideBannerScene = "side/SideBotListScene.scene", c.SideDoubleScene = "side/SideDoubleListScene.scene",
        c.SideLeftListScene = "side/SideLeftListScene.scene", c.SideGridScene = "side/SideGridScene.scene",
        c.SideJiugongScene = "side/SideJiugongScene.scene", c.SideGoldenEggScene = "side/GoldenEggScene.scene",
        c.SideNativeScene = "side/SideNativeScene.scene", c.SideMoreNativeScene = "side/SideMoreNativeScene.scene",
        c.BoxScene = "scene/BoxScene.scene";
    class d {
        constructor() {
            this.msgNum = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new d();
        }
        openTips(e) {
            this.msgNum++, this.msgNum > 2 && (Laya.Scene.close(c.TipsScene), this.msgNum = 0),
                Laya.Scene.open(c.TipsScene, !1, e);
        }
        openMoveTips(e = 3e3) {
            Laya.Scene.open(c.MoveTipsScene, !1, e);
        }
    }
    class g {
        constructor() {
            this._dicView = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new g();
        }
        openJuhe(e = null) {
        }
        closeJuhe() {
        }
        openLiangPaiJuhe(e = null) {
        }
        closeLiangPaiJuhe() {
        }
        openBanner(e = null) {
        }
        closeBanner(e = null) {
        }
        openDuilian(e = null) {
        }
        closeDuilian() {
        }
        openLeft(e = null) {

        }
        closeLeft() {
        }
        openLiugong(e = null) {
        }
        closeLiugong() {
        }
        openJiugong(e = null) {
        }
        closeJiugong() {
        }
        openGoldenEgg(e = null) {
        }
        closeGoldenEgg() {
        }
        openNativeAdScene(e = null) {
        }
        closeNativeAdSence() {
        }
        openMoreNativeAdScene(e = null) {
        }
        closeMoreNativeAdSence() {
        }
    }
    class m {
        constructor() {
            this.bannerIDList = ["adunit-8abca36ba365706e", "adunit-30b7712bc35092a7", "adunit-f33e31070912e208", "adunit-2f792cb4e665933f", "adunit-0f5396ed73d35cd2", "adunit-4467569f691c4f13", "adunit-1a07a5fff3f19e7e", "adunit-ee9d2c6f7c7de611"],
                this.videoID = "adunit-0e217981635cb5a4", this.$whitechangeBannerTime = 4200, this.blackchangeBannerTime = 3e4,
                this.bannerList = {}, this.bannerID = "", this.winSize = Laya.Browser.onMiniGame ? t.$objcet.getSystemInfoSync() : null;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new m();
        }
        init() {
        }
        get refreshTime() {
        }
        set refreshTime(e) {
        }
        addBannerListener() {

        }
        showBanner(e = !1, i = !0) {

        }
        showLoadedBanner() {

        }
        get hasBanner() {

        }
        getBannerList() {

        }
        hideBanner() {

        }
        loadBanner(e, i = !1) {

        }
        changeBannerByTime() {

        }
        destroyBanner() {

        }
        createVideo() {

        }
        nullFun() { }
        showVideo(e, t) {

        }
    }
    class u {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new u();
        }
        init() {
            Laya.Browser.onMiniGame && (this.wx = Laya.Browser.window.wx, this.wx.tmSDK.init({
                hideRequestLog: !1,
                appVersion: t.version
            }));
        }
        login(e, i) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.login().then(s => {
                console.log(s), t.openId = s.open_id, t.login_city = s.login_city, null != t.login_city && "" != t.login_city || o.instacne.getAddress(),
                    e && i && i.apply(e);
            });
        }
        checkFlowIsOpen(e, t, i) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.checkFlowIsOpen({
                positionId: e
            }).then(({ isOpen: e }) => {
                i.apply(t, [e]), console.log("该广告位是否开启:", e);
            });
        }
        getFlowConfig(e, t, i, s = !0) {
            let n = this;
            if (Laya.Browser.onMiniGame) if (n.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            } else n.wx.tmSDK.getFlowConfig({
                positionId: e
            }).then(a => {
                if (n.flowConfig[e] = a, i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            });
        }
        flowNavigate(e, t, i = "") {
            Laya.Browser.onMiniGame && this.wx.tmSDK.flowNavigate({
                positionId: e,
                creativeId: t
            }).then(t => {
                if (this.flowConfig[e] = t, "navigateToMiniProgram:fail cancel" == t.navigateMessage.errMsg) s.event(n.USERCANCEL); else if ("navigateToMiniProgram:ok" == t.navigateMessage.errMsg) switch (s.event(n.USERJUMP),
                    i) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            u.instance.sendEvent(a.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            u.instance.sendEvent(a.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            u.instance.sendEvent(a.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            u.instance.sendEvent(a.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                t ? (l.ishutui = t.ishutui, l.OpenClick = t.OpenClick, l.OpenVideo = t.OpenVideo,
                    l.blackIPCityArr = t.blackIPCityArr, l.useSetWhite = t.useSetWhite, l.without_sceneList = t.without_sceneList,
                    l.space_level = t.crazy_click_config.space_level, l.start_level = t.crazy_click_config.start_level,
                    l.switchVer = t.crazy_click_config.switchVer, l.openJiugong = t.openJiugong, l.isJump = t.isJump,
                    l.RandomClick = t.RandomClick, l.reSetWhite(t.posList), l.probability = t.probability,
                    m.instance.refreshTime = 1e3 * t.refreshTime, l.everyclick = t.everyclick) : console.warn("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    var S, L = Laya.Scene, y = Laya.ClassUtils.regClass;
    !function (e) {
        !function (e) {
            class t extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/BoxScene");
                }
            }
            e.BoxSceneUI = t, y("ui.scene.BoxSceneUI", t);
            class i extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoadingScene");
                }
            }
            e.LoadingSceneUI = i, y("ui.scene.LoadingSceneUI", i);
            class s extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseScene");
                }
            }
            e.LoseSceneUI = s, y("ui.scene.LoseSceneUI", s);
            class n extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseTwiceScene");
                }
            }
            e.LoseTwiceSceneUI = n, y("ui.scene.LoseTwiceSceneUI", n);
            class a extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LuckBoxScene");
                }
            }
            e.LuckBoxSceneUI = a, y("ui.scene.LuckBoxSceneUI", a);
            class o extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/MainScene");
                }
            }
            e.MainSceneUI = o, y("ui.scene.MainSceneUI", o);
            class r extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SelectSkinScene");
                }
            }
            e.SelectSkinSceneUI = r, y("ui.scene.SelectSkinSceneUI", r);
            class l extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SkinTryScene");
                }
            }
            e.SkinTrySceneUI = l, y("ui.scene.SkinTrySceneUI", l);
            class h extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/WinScene");
                }
            }
            e.WinSceneUI = h, y("ui.scene.WinSceneUI", h);
        }(e.scene || (e.scene = {}));
    }(S || (S = {})), function (e) {
        !function (e) {
            class t extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/GoldenEggScene");
                }
            }
            e.GoldenEggSceneUI = t, y("ui.side.GoldenEggSceneUI", t);
            class i extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/MoreGameScene");
                }
            }
            e.MoreGameSceneUI = i, y("ui.side.MoreGameSceneUI", i);
            class s extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideBotListScene");
                }
            }
            e.SideBotListSceneUI = s, y("ui.side.SideBotListSceneUI", s);
            class n extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideDoubleListScene");
                }
            }
            e.SideDoubleListSceneUI = n, y("ui.side.SideDoubleListSceneUI", n);
            class a extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideGridScene");
                }
            }
            e.SideGridSceneUI = a, y("ui.side.SideGridSceneUI", a);
            class o extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideJiugongScene");
                }
            }
            e.SideJiugongSceneUI = o, y("ui.side.SideJiugongSceneUI", o);
            class r extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideLeftListScene");
                }
            }
            e.SideLeftListSceneUI = r, y("ui.side.SideLeftListSceneUI", r);
            class l extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideMoreNativeScene");
                }
            }
            e.SideMoreNativeSceneUI = l, y("ui.side.SideMoreNativeSceneUI", l);
            class h extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideNativeScene");
                }
            }
            e.SideNativeSceneUI = h, y("ui.side.SideNativeSceneUI", h);
            class c extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideTwoScene");
                }
            }
            e.SideTwoSceneUI = c, y("ui.side.SideTwoSceneUI", c);
        }(e.side || (e.side = {}));
    }(S || (S = {})), function (e) {
        !function (e) {
            class t extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/ConsoleScene");
                }
            }
            e.ConsoleSceneUI = t, y("ui.tips.ConsoleSceneUI", t);
            class i extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/MoveTipsScene");
                }
            }
            e.MoveTipsSceneUI = i, y("ui.tips.MoveTipsSceneUI", i);
            class s extends L {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/TipsScene");
                }
            }
            e.TipsSceneUI = s, y("ui.tips.TipsSceneUI", s);
        }(e.tips || (e.tips = {}));
    }(S || (S = {}));
    class p extends S.scene.BoxSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = t.statusBarHeight, this._main.vScrollBarSkin = "", this._main.height = 1334 - t.statusBarHeight + (t.stage_height - t.ore_height);
        }
        onOpened() {
            this._listHot.selectHandler = new Laya.Handler(this, this.selectHot), this._listJing.selectHandler = new Laya.Handler(this, this.selectJing),
                this._listHot.selectHandler = new Laya.Handler(this, this.selectNew), this._listHot.selectEnable = !0,
                this._listJing.selectEnable = !0, this._listNew.selectEnable = !0, u.instance.getFlowConfig(i.wxId, this, this.loadAd1),
                Laya.timer.once(200, this, () => {
                    u.instance.getFlowConfig(i.wxId, this, this.loadAd2);
                }), Laya.timer.once(400, this, () => {
                    u.instance.getFlowConfig(i.wxId, this, this.loadAd3);
                });
        }
        loadAd1(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listJing.dataSource = t;
        }
        loadAd2(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listNew.dataSource = t;
        }
        loadAd3(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listHot.dataSource = t;
        }
        selectHot(e) {
            let t = this._listHot.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listHot.selectedIndex = -1);
        }
        selectJing(e) {
            let t = this._listJing.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listJing.selectedIndex = -1);
        }
        selectNew(e) {
            let t = this._listNew.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listNew.selectedIndex = -1);
        }
    }
    class v {
        constructor() {
            this.seed = 5;
        }
        static get instacne() {
            return this._instance ? this._instance : this._instance = new v();
        }
        shortText(e) {
            return e && e.length > 5 ? e.slice(0, 5) + "..." : e;
        }
        formatToUnitEN(e) {
            return ("" + (e = Math.round(e))).length > 15 ? (e / 1e15).toFixed(2) + "MB" : ("" + e).length > 12 ? (e / 1e12).toFixed(2) + "KB" : ("" + e).length > 9 ? (e / 1e9).toFixed(2) + "B" : ("" + e).length > 6 ? (e / 1e6).toFixed(2) + "M" : ("" + e).length > 3 ? (e / 1e3).toFixed(2) + "K" : "" + e.toFixed(0);
        }
        shuffle(e) {
            let t, i, s = e.length;
            for (; --s;) i = Math.floor(Math.random() * s), t = e[s], e[s] = e[i], e[i] = t;
        }
        getRad(e, t, i) {
            return t < 0 ? Math.acos(e / i) : 2 * Math.PI - Math.acos(e / i);
        }
        getTot(e, t, i = !1) {
            let s = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)), n = v.instacne.getRad(e, t, s);
            return 180 / Math.PI * n - 90 * (i ? -1 : 1);
        }
        seedRandom() {
            return this.seed = (9301 * this.seed + 49297) % 233280, this.seed / 233280;
        }
        clearTrail(e, t = !1) {
            if (e && e instanceof Laya.TrailSprite3D) {
                e.active = !0;
                let t = e.trailFilter.time;
                e.trailFilter.time = 0, Laya.timer.frameOnce(1, this, () => {
                    e.trailFilter.time = t, e.active = !1;
                });
            }
        }
        static async getGameLevelJson(e) {
            return await this.parseGameJson(e);
        }
        static async parseGameJson(e) {
            return new Promise(async t => {
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    let i = this.copy(e);
                    t(i);
                }));
            });
        }
        static copy(e) {
            let t;
            return e instanceof Object ? (t = e instanceof Array ? [] : {}, Object.keys(e).forEach(i => {
                t[i] = this.copy(e[i]);
            })) : t = e, t;
        }
    }
    class w extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"),
                    e._txtFadeNum = e.getChildByName("_txtFadeNum"), e._txtFadeNum.text = Math.floor(1e5 * Math.random()) + "人在玩";
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class f extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class _ extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class b {
        constructor() {
            this.nativeAd = new Array(), this.videoAdUnitId = "360f45ed44f948c1abf8b64406fa567b",
                this.bannerAdUnitId = "454493ac9cbc432697a0316e33607302", this.nativeAdUnitId = "c252ab5dff2b44e2bd66c20854442343",
                this.endAdUnitId = "e7f5ec3a6b534464b63b24da5206227a", this.endViewUnitId = "e4dfb29efaf947f08dbadb6ae50d9f60",
                this.boxViewUnitId = "e7f8a6f5a02442d3b23d22d400adb844", this.nativeList = [this.nativeAdUnitId],
                this.startAdUnitId = "66d5a10e8abe46c4b8f120e8fee70a61", this.InterstitialAdUnitId = "e300995d8c754ac5b79d354a4aed218c",
                this.whitechangeBannerTime = 3e4, this.loadTimes = 0, this._nativeAdDataList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new b();
        }
        initData() {

        }
        hideBanner() {
        }
        showBanner(e = !0) {

        }
        createBannerAd(e = !1) {

        }
        destroyBanner() {
        }
        createNativeAd(e) {

        }
        nativeAdreportAdShow(e) {

        }
        removeNativeAd(e) {

        }
        nativeAdData(e) {

        }
        nativeAdreportAdClick(e) {

        }
        createVideo() {

        }
        showVideo(e, t, i = null) {

        }
        addToDesk() {

        }
    }
    class C {
        static get unityRES() {
            return this.SceneRES.concat(this.playerRes).concat(this.otherRes).concat(this.skinRes).concat(this.skyBoxRES);
        }
    }
    C.levelJson = "res3d/levelJson/level", C.playerRes = ["res3d/level/Conventional/Player.lh", "res3d/level/Conventional/Human.lh", "res3d/level/Conventional/DynamicWheel.lh"],
        C.otherRes = ["res3d/level/Conventional/Wall.lh", "res3d/level/Conventional/Ground.lh", "res3d/level/Conventional/Currency.lh", "res3d/level/Conventional/Body.lh", "res3d/level/Conventional/Signs.lh", "res3d/level/Conventional/LevelEnding.lh", "res3d/level/Conventional/Obstacle.lh", "res3d/level/Conventional/Boundries.lh", "res3d/level/Conventional/Add.lh"],
        C.SceneRES = ["res3d/test/SeaTheme.lh", "res3d/test/DesertTheme.lh", "res3d/test/MountainsTheme.lh"],
        C.skinRes = ["res3d/level/Conventional/Assets/Material/Character 1.lmat", "res3d/level/Conventional/Assets/Material/Character 2.lmat", "res3d/level/Conventional/Assets/Material/Character 0.lmat", "res3d/level/Conventional/Assets/Material/Character 3.lmat", "res3d/level/Conventional/Assets/Material/Character 4.lmat", "res3d/level/Conventional/Assets/Material/Character 5.lmat", "res3d/level/Conventional/Assets/Material/Character 6.lmat", "res3d/level/Conventional/Assets/Material/Character 7.lmat", "res3d/level/Conventional/Assets/Material/Character 8.lmat", "res3d/level/Conventional/Assets/Material/Character 9.lmat", "res3d/level/Conventional/Assets/Material/Character 10.lmat", "res3d/level/Conventional/Assets/Material/Character 11.lmat", "res3d/level/Conventional/Assets/Material/Character 12.lmat", "res3d/level/Conventional/Assets/Material/Character 13.lmat", "res3d/level/Conventional/Assets/Material/Character 14.lmat", "res3d/level/Conventional/Assets/Material/Character 15.lmat", "res3d/level/Conventional/Assets/Material/Character 16.lmat", "res3d/level/Conventional/Assets/Material/Character 17.lmat"],
        C.skyBoxRES = ["res3d/skybox/skyBox.lmat"];
    class A {
        constructor() {
            this.canShow = !1, this.isShow = !1, this.showBannerTimes = 0, this.bannerID = "284780",
                this.videoID = "284782", this.nativeID = "284781", this.portalID = "284779", this.loadTimes = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new A();
        }
        initData() {

        }
        hideBanner() {
        }
        showBanner() {

        }
        destroyBanner() {
        }
        createNativeAd() {

        }
        nativeAdreportAdShow() {

        }
        removeNativeAd() {

        }
        get nativeAdData() {

        }
        nativeAdreportAdClick() {

        }
        createBannerAd() {

        }
        createVideo() {

        }
        showVideo(e, t, i = null) {
            platform.getInstance().showReward(() => {
                t && t.bind(e)(1);
            })
        }
        createGamePortalAd() {

        }
        showGamePortal() {
        }
        destoryGamePortal() {

        }
        addToDesk() {

        }
    }
    class E {
        constructor() {
            this.isPlaying = !1, this.adds = ["sound/EnemyDetect1.wav", "sound/EnemyDetect2.wav"];
        }
        static get instance() {
            return this._instance || (this._instance = new E()), this._instance;
        }
        get isSound() {
            return !!Laya.LocalStorage.getItem(e.ISSOUND) || (null == Laya.LocalStorage.getItem(e.ISSOUND) || null == Laya.LocalStorage.getItem(e.ISSOUND) || "" == Laya.LocalStorage.getItem(e.ISSOUND) ? (Laya.LocalStorage.setItem(e.ISSOUND, "1"),
                !0) : "0" != Laya.LocalStorage.getItem(e.ISSOUND) && void 0);
        }
        set isSound(t) {
            let i = t ? "1" : "0";
            Laya.LocalStorage.setItem(e.ISSOUND, i), s.event(n.SOUNDCHANGE);
        }
        get isMusic() {
            return "true" == Laya.LocalStorage.getItem(e.ISMUSIC) || (null == Laya.LocalStorage.getItem(e.ISMUSIC) || null == Laya.LocalStorage.getItem(e.ISMUSIC) || "" == Laya.LocalStorage.getItem(e.ISMUSIC) ? (Laya.LocalStorage.setItem(e.ISMUSIC, "true"),
                !0) : "false" != Laya.LocalStorage.getItem(e.ISMUSIC) && void 0);
        }
        set isMusic(t) {
            let i;
            i = t ? "true" : "false", Laya.LocalStorage.setItem(e.ISMUSIC, i), s.event(n.MUSICCHANGE),
                t ? t && this.bgChannel : this.stopBg();
        }
        stopBg() {
            this.bgChannel && this.bgChannel.pause(), this.isPlaying = !1;
        }
        mainBg() {
            this.isMusic && (this.stopBg(), this.isPlaying = !0, this.bgChannel ? this.bgChannel.resume() : this.bgChannel = Laya.SoundManager.playMusic(t.surl + "sound/BG1.mp3", 0));
        }
        playAdd() {
            if (this.isSound) {
                let e = Math.floor(Math.random() * this.adds.length);
                Laya.SoundManager.playSound(t.surl + this.adds[e], 1);
            }
        }
        playChimes() {
            this.isSound && Laya.SoundManager.playSound(t.surl + "sound/chimes_1.mp3", 1);
        }
        loseVoice() {
            this.isSound && Laya.SoundManager.playSound(t.surl + "sound/LoseVoice.wav", 1);
        }
        winVoice() {
            this.isSound && Laya.SoundManager.playSound(t.surl + "sound/WinVoice.wav", 1);
        }
    }
    class B extends Laya.Script3D {
        constructor() {
            super(), this.isLock = !1, this.aimPos = new Laya.Vector3(0, 0, 0), this.aimRot = new Laya.Vector3(0, 0, 0);
        }
        onStart() {
            this.cameraObj = this.owner, this.camera = this.cameraObj.getChildAt(0), this.aimPos = this.camera.transform.localPosition.clone(),
                this.aimRot = this.camera.transform.localRotationEuler.clone();
        }
        onLateUpdate() {
            this.isLock && this.playerObj && (this.cameraObj.transform.localPositionY = this.playerObj.transform.localPositionY,
                this.cameraObj.transform.localPositionZ = this.playerObj.transform.localPositionZ);
        }
    }
    class I {
        constructor() {
            this.objList = new Array(), this.objscriptList = new Array(), this.objName = "",
                this.objData = null, this.checkPool = !0, this.addEventListener();
        }
        init() { }
        load(e = null) { }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
        createObj() {
            if (null != this.objName && null != this.objName && "" != this.objName) {
                if (this.objPrefab) {
                    let e = Laya.Pool.getItemByCreateFun(this.objName, this.objPrefab.clone, this.objPrefab);
                    return e.name = this.objName, e;
                }
                return console.log(this.objName + "对象为空"), null;
            }
            return console.log("对象名为空"), null;
        }
        clearObj() {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0 && "" != this.objName) for (let e = 0; e < this.objList.length; e++) {
                let t = this.objList[e];
                t && (t.removeSelf(), Laya.Pool.recover(this.objName, t), t = null);
            }
            this.clearOthers(), this.objList = new Array(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearManyObjs(e = 16) {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0 && "" != this.objName) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = i.objList[t];
                    e && (e.removeSelf(), Laya.Pool.recover(this.objName, e), e = null), ++t == i.objList.length && (Laya.timer.clearAll(i),
                        this.objList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                        this.checkObjPool());
                });
            } else this.clearOthers(), this.objList = new Array(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearScript() {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0 && "" != this.objName) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.clearObj();
            }
            this.objscriptList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearManyScripts(e = 16) {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0 && "" != this.objName) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = this.objscriptList[t];
                    e && e.clearObj(), ++t == i.objscriptList.length && (Laya.timer.clearAll(i), this.objscriptList = new Array(),
                        this.clearOthers(), console.log("清理" + this.objName + "完成"), this.checkObjPool());
                });
            } else this.objscriptList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        checkObjPool() {
            this.checkPool && this.objPool.numChildren > 0 && console.log("对象池" + this.objName + "Pool回收有遗漏");
        }
        destryObj() {
            this.removeEventListener(), Laya.timer.clearAll(this);
        }
    }
    class x {
        static get instance() {
            return this._instance ? this._instance : this._instance = new x();
        }
        init() {
            this.scene2d = new Laya.Scene(), Laya.stage.addChild(this.scene2d), Laya.stage.setChildIndex(this.scene2d, 0),
                this.scene3d = new Laya.Scene3D(), Laya.stage.addChild(this.scene3d), Laya.stage.setChildIndex(this.scene3d, 0),
                this.scene3d.ambientColor = new Laya.Vector3(.7, .7, .7);
        }
    }
    class M extends Laya.Script3D {
        constructor() {
            super();
        }
        get position() {
            return this.obj ? this.obj.transform.position.clone() : null;
        }
        set position(e) {
            this.obj && (this.obj.transform.position = e);
        }
        get localPosition() {
            return this.obj ? this.obj.transform.localPosition.clone() : null;
        }
        set localPosition(e) {
            this.obj && (this.obj.transform.localPosition = e);
        }
        get rotationEuler() {
            return this.obj ? this.obj.transform.rotationEuler.clone() : null;
        }
        set rotationEuler(e) {
            this.obj && (this.obj.transform.rotationEuler = e);
        }
        get localRotationEuler() {
            return this.obj ? this.obj.transform.localRotationEuler.clone() : null;
        }
        set localRotationEuler(e) {
            this.obj && (this.obj.transform.localRotationEuler = e);
        }
        get scale() {
            return this.obj ? this.obj.transform.getWorldLossyScale().clone() : null;
        }
        set scale(e) {
            this.obj && this.obj.transform.setWorldLossyScale(e);
        }
        get localScale() {
            return this.obj ? this.obj.transform.localScale.clone() : null;
        }
        set localScale(e) {
            this.obj && (this.obj.transform.localScale = e);
        }
        onUpdate() {
            this.update(15);//Laya.timer.delta
        }
        update(e) { }
        positionWorld2local(e, t) {
            let i = new Laya.Vector3(0, 0, 0), s = new Laya.Matrix4x4();
            return t.transform.worldMatrix.invert(s), Laya.Vector3.transformCoordinate(e, s, i),
                i;
        }
    }
    class N extends M {
        constructor() {
            super(), this.index = 0, this.objPoolName = "", this.objData = null, this.checkPool = !0,
                this.objList = new Array(), this.objscriptList = new Array(), this.objChName = "";
        }
        init() {
            this.objPool = this.owner;
            let e = Laya.loader.getRes("");
            this.objPrefab = e, this.objChName = "", this.objPoolName = "", this.addEventListener();
        }
        onReset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        createObj() {
            if (null != this.objChName && null != this.objChName && "" != this.objChName) {
                if (this.objPrefab) {
                    let e = Laya.Pool.getItemByCreateFun(this.objChName, this.objPrefab.clone, this.objPrefab);
                    return e.name = this.objChName, e;
                }
                return console.log(this.objChName + "对象为空"), null;
            }
            return console.log("对象名为空"), null;
        }
        clearOthers() { }
        clearObj() {
            this.clearScript(), this.removeEventListener(), Laya.timer.clearAll(this), Laya.Tween.clearAll(this),
                this.obj ? (this.obj.removeSelf(), Laya.Pool.recover(this.objPoolName, this.obj),
                    this.obj = null, this.destroy()) : this.destroy();
        }
        clearScript() {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0 && "" != this.objChName) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.clearObj();
            }
            this.objscriptList = new Array(), this.clearOthers(), console.log("清理" + this.objChName + "完成"),
                this.checkObjPool();
        }
        checkObjPool() {
            this.checkPool && this.objPool.numChildren > 0 && (console.log(this.objPool), console.log("对象池" + this.objChName + "Pool回收有遗漏"));
        }
    }
    class k {
        static get instacne() {
            return this._instance ? this._instance : this._instance = new k();
        }
        get isVibrate() {
            return !!Laya.LocalStorage.getItem(e.ISVIBRATE) || (null == Laya.LocalStorage.getItem(e.ISVIBRATE) || null == Laya.LocalStorage.getItem(e.ISVIBRATE) || "" == Laya.LocalStorage.getItem(e.ISVIBRATE) ? (Laya.LocalStorage.setItem(e.ISVIBRATE, "1"),
                !0) : "0" != Laya.LocalStorage.getItem(e.ISVIBRATE) && void 0);
        }
        set isVibrate(t) {
            let i = t ? "1" : "0";
            Laya.LocalStorage.setItem(e.ISVIBRATE, i), s.event(n.VIBRATECHANGE);
        }
        vibrateShort(e = 15) {
            if (t.isMini) {
                let i = Math.ceil(e / 15), s = 0, n = {
                    count: i,
                    index: s
                };
                Laya.timer.loop(16, n, () => {
                    this.isVibrate ? t.$objcet.vibrateShort() : Laya.timer.clearAll(n), ++s > i && Laya.timer.clearAll(n);
                });
            }
        }
        vibrateLong() {
            t.isMini && t.$objcet.vibrateLong();
        }
    }
    class T { }
    T.PLAYER = "player", T.WINOBJ = "winobj", T.LOSEOBJ = "loseobj", T.GROUND = "ground",
        T.WINEFFECT = "wineffect", T.PLAYERNAME = "playername", T.PALYERPOOL = "playerpool",
        T.ARROW = "arrow", T.PLUS = "plus", T.CRATE = "crate", T.KILLOBJ = "killobj";
    class G extends Laya.Script3D {
        constructor() {
            super();
        }
        onStart() {
            this.self = this.owner, this.transform = this.self.transform, this.transform.localScale = new Laya.Vector3(1, 1, 1),
                this.prefab = Laya.loader.getRes(C.playerRes[0]);
            let e = Number(this.owner.name.split(" (")[0].split("_")[1]);
            this.collider = this.owner.getChildAt(0), e && (this.collider.transform.localScaleY *= e),
                this.pickUpParticle = this.owner.getChildAt(1), Laya.timer.once(1e3, this, () => {
                    this.pickUpParticle.active = !1;
                }), this.obj = this.owner.getChildAt(2), this.addRole(e), this.changePlayerSkin(),
                this.addEventListener();
        }
        addRole(e) {
            e = e || 1;
            for (let t = 0; t < e; t++) {
                let e = Laya.Pool.getItemByCreateFun(T.PLAYER, this.prefab.clone, this.prefab);
                this.obj.addChild(e), e.transform.localPosition = new Laya.Vector3(0, .4 * t, 0),
                    e.transform.localScale = new Laya.Vector3(1, 1, 1), e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    e.getChildAt(0).transform.localRotationEuler = new Laya.Vector3(0, 0, 0), e.getChildAt(0).getChildAt(0).getChildAt(2).transform.localRotationEulerX = 0;
            }
        }
        doRemove() {
            this.pickUpParticle.active = !0, this.obj.destroy(!0), Laya.timer.once(1e3, this, () => {
                this.owner.destroy(!0);
            });
        }
        addEventListener() {
            s.on(n.SKINCHANGE, this, this.changePlayerSkin);
        }
        removeEventListener() {
            s.off(n.SKINCHANGE, this, this.changePlayerSkin);
        }
        changePlayerSkin() {
            for (let e = 0; e < this.obj.numChildren; e++) {
                let i = this.obj.getChildAt(e).getChildAt(0).getChildAt(1), s = Laya.loader.getRes(C.skinRes[t.skinIndex]);
                i.skinnedMeshRenderer.material = s;
            }
        }
        onDestroy() {
            this.removeEventListener();
        }
    }
    class O extends Laya.Script3D {
        constructor() {
            super();
        }
        onStart() {
            this.self = this.owner, this.transform = this.self.transform, this.levels = this.owner.getChildByName("Levels");
            let e = this.owner.getChildByName("ChestBase").getChildAt(0);
            this.chestSuccessFX = e.getChildAt(0), this.chestAnim = e.getChildAt(1).getComponent(Laya.Animator),
                this.levelSuccessFX = this.owner.getChildByName("LevelSuccessFX"), Laya.timer.once(1e3, this, () => {
                    this.chestSuccessFX.active = !1, this.levelSuccessFX.active = !1;
                }), this.init();
        }
        init() {
            for (let e = 0; e < this.levels.numChildren; e++) {
                let t = this.levels.getChildAt(e), i = t.getChildAt(0);
                Laya.timer.once(1e3, this, () => {
                    i.active = !1;
                }), t.getChildAt(2).active = !1;
            }
        }
        doMul(e) {
            t.mulNum++;
            let i = this.levels.getChildAt(e);
            if (i) {
                i.getChildAt(1).active = !1, i.getChildAt(2).active = !0;
            }
        }
        doFinish(e = !1) {
            this.levelSuccessFX.active = !0, e && (this.chestAnim.play(), this.chestSuccessFX.active = !0);
            let t = 0, i = () => {
                let e = this.levels.getChildAt(t);
                if (e) {
                    e.getChildAt(0).active = !0;
                }
                ++t >= this.levels.numChildren - 1 && Laya.timer.clear(this, i);
            };
            Laya.timer.loop(200, this, i);
        }
    }
    class P {
        static get instance() {
            return this._instance ? this._instance : this._instance = new P();
        }
        init() {
            this.objPool = new Laya.Sprite3D("Level"), x.instance.scene3d.addChild(this.objPool),
                this.addOne = Laya.loader.getRes(C.otherRes[8]);
        }
        async load(e = null) {
            this.addEventListener(), this.obstacles = [], this.obj = new Laya.Sprite3D("scene"),
                this.objPool.addChild(this.obj), this.obj.transform.position = new Laya.Vector3(0, 0, 0);
            let i = Laya.loader.getRes(C.otherRes[0]), s = Laya.loader.getRes(C.otherRes[1]), n = Laya.loader.getRes(C.otherRes[2]), a = Laya.loader.getRes(C.otherRes[3]), o = Laya.loader.getRes(C.otherRes[4]), r = Laya.loader.getRes(C.otherRes[5]), l = Laya.loader.getRes(C.otherRes[6]), h = Laya.loader.getRes(C.otherRes[7]), c = Laya.loader.getRes(C.SceneRES[0]), d = Laya.loader.getRes(C.SceneRES[1]), g = Laya.loader.getRes(C.SceneRES[2]), m = Laya.loader.getRes(C.playerRes[1]), u = t.levelIndex;
            u > t.maxLevel && (u = Math.floor(Math.random() * t.maxLevel) + 1);
            let S = (await v.getGameLevelJson(C.levelJson + u + ".json"))["level" + u];
            for (let e of S) {
                let t = null;
                e.name.indexOf("Wall") >= 0 ? t = Laya.Pool.getItemByCreateFun("wall", i.clone, i) : e.name.indexOf("Ground") >= 0 ? t = Laya.Pool.getItemByCreateFun("ground", s.clone, s) : e.name.indexOf("Currency") >= 0 ? t = Laya.Pool.getItemByCreateFun("coin", n.clone, n) : e.name.indexOf("Body") >= 0 ? t = Laya.Pool.getItemByCreateFun("ramp", a.clone, a) : e.name.indexOf("Signs") >= 0 ? t = Laya.Pool.getItemByCreateFun("ramp", o.clone, o) : e.name.indexOf("LevelEnding") >= 0 ? (t = Laya.Pool.getItemByCreateFun("levelEnding", r.clone, r)).getComponent(O) || (this.levelEnd = t.addComponent(O)) : e.name.indexOf("Human") >= 0 ? (t = Laya.Pool.getItemByCreateFun("human", m.clone, m)).getComponent(G) || t.addComponent(G) : e.name.indexOf("Obstacle") >= 0 ? (t = Laya.Pool.getItemByCreateFun("obstacle", l.clone, l),
                    this.obstacles.push(t)) : e.name.indexOf("Boundries") >= 0 ? t = Laya.Pool.getItemByCreateFun("boundries", h.clone, h) : e.name.indexOf("SeaTheme") >= 0 ? t = Laya.Pool.getItemByCreateFun("scene0", c.clone, c) : e.name.indexOf("DesertTheme") >= 0 ? t = Laya.Pool.getItemByCreateFun("scene1", d.clone, d) : e.name.indexOf("MountainsTheme") >= 0 && (t = Laya.Pool.getItemByCreateFun("scene2", g.clone, g)),
                    t && (t.name = e.name, this.obj.addChild(t), t.transform.localPosition = new Laya.Vector3(e.x, e.y, e.z),
                        t.transform.rotation = new Laya.Quaternion(e.rotX, e.rotY, e.rotZ, e.rotW), t.transform.localScale = new Laya.Vector3(e.scaleX, e.scaleY, e.scaleZ),
                        t.name.indexOf("MountainsTheme") >= 0 && (t.transform.localPositionZ -= 50));
            }
        }
        reset() { }
        ready() { }
        start() { }
        clearOthers() {
            this.obj && (this.obj.removeSelf(), this.obj.destroy(!0)), this.objPool.numChildren > 0 && console.log("未清理完"),
                this.removeEventListener();
        }
        addEventListener() { }
        removeEventListener() { }
    }
    class j extends M {
        constructor() {
            super(), this.index = 0, this.objName = "", this.objData = null;
        }
        init() {
            this.obj = this.owner, this.objName = "", this.addEventListener();
        }
        onReset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        clearObj() {
            this.clearOthers(), this.removeEventListener(), Laya.timer.clearAll(this), Laya.Tween.clearAll(this),
                this.obj ? (this.obj.removeSelf(), Laya.Pool.recover(this.objName, this.obj), this.obj = null,
                    this.destroy()) : (this.obj = null, this.destroy());
        }
        clearOthers() { }
    }
    class V extends j {
        constructor() {
            super(), this.order = -1, this.isBuild = !1, this.nowAni = "";
        }
        init() {
            this.obj = this.owner, this.objName = T.PLAYER, this.addEventListener(), this.playerRot = this.obj.getChildAt(0),
                this.playerAni = this.obj.getChildAt(0).getComponent(Laya.Animator), this.playerSkin = this.obj.getChildAt(0).getChildAt(1),
                this.spine = this.obj.getChildAt(0).getChildAt(0).getChildAt(2), this.headAnchor = this.spine.getChildAt(0);
        }
        reset() {
            this.isBuild = !1, this.playerAni.speed = 0, this.obj.transform.localScale = new Laya.Vector3(2, 2, 2),
                this.obj.transform.localPosition = new Laya.Vector3(0, -.3, 0), this.obj.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.playerRot.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.spine.transform.localRotationEulerX = 0,
                this.changePlayerSkin();
        }
        changeRotAndPos(e = 0, t = 0, i = !1) {
            if (i) this.obj.transform.localPosition = new Laya.Vector3(0, -.5, 0), this.playerRot.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.spine.transform.localRotationEulerX = 0; else {
                let i = R.instance.roleContainer.radius, s = i * Math.sin(e * t * (Math.PI / 180)), n = i * Math.cos(e * t * (Math.PI / 180));
                this.obj.transform.localPosition = new Laya.Vector3(0, s, n), this.playerRot.transform.localRotationEuler = new Laya.Vector3(-Math.abs(e * t - 360), 180, 0),
                    this.spine.transform.localRotationEulerX = 60;
            }
        }
        addEventListener() {
            s.on(n.SKINCHANGE, this, this.changePlayerSkin);
            s.on(n.GAMEOVER, this, this.gameOver);
        }
        gameOver() {
            Laya.timer.clearAll(this);
        }
        removeEventListener() {
            s.off(n.SKINCHANGE, this, this.changePlayerSkin);
        }
        doBuilder() {
            this.isBuild || (this.isBuild = !0, this.playerRot.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.spine.transform.localRotationEulerX = 0, Laya.timer.once(2e3, this, () => {
                    this.clearObj()
                })
            );
        }
        changePlayerSkin() {
            let e = Laya.loader.getRes(C.skinRes[t.skinIndex]);
            this.playerSkin && this.playerSkin.skinnedMeshRenderer && (this.playerSkin.skinnedMeshRenderer.material = e);
        }
        changeAni(e, t) {
            this.nowAni != e && (this.nowAni = e, this.playerAni.crossFade(this.nowAni, .1),
                this.playerAni.getControllerLayer(0).getAnimatorState(this.nowAni).clip.islooping = t);
        }
        clearOthers() { }
    }
    class D extends N {
        constructor() {
            super();
        }
        init() {
            this.triggers = {}
            this.startMouseX = undefined;
            this.canMove = false;
            this.obj = this.owner, this.objPool = this.owner, this.objPrefab = Laya.loader.getRes(C.playerRes[0]),
                this.objChName = T.PLAYER, this.rotContainer = this.owner.getChildAt(0), this.trail = this.owner.getChildAt(1),
                this.rigid = this.owner.getComponent(Laya.Rigidbody3D);
        }
        reset() {
            this.lastCol = null, this.lastObstacle = null, this.lastRamp = null, this.radius = 0,
                this.subNum = 0, this.loopNum = 0, this.lastY = 0, this.lastZ = 0, this.startX = 0,
                this.waitTime = 0, this.rotSpeed = new Laya.Vector3(0, 0, 0), this.moveSpeed = new Laya.Vector3(0, 0, 1),
                this.isSub = !1, this.isEnd = !1, this.isFinish = !1, this.isDead = !1, this.selectRole = null,
                this.rigid.isKinematic = !1, this.obj.transform.localScale = new Laya.Vector3(3, 3, 3),
                this.obj.transform.localPosition = new Laya.Vector3(0, 1.5, 0), this.obj.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.rotContainer.transform.localPosition = new Laya.Vector3(0, 0, 0), this.rotContainer.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.builder = new Laya.Sprite3D("builder"), x.instance.scene3d.addChild(this.builder),
                this.builder.transform.localScale = new Laya.Vector3(3, 3, 3), this.addRole(1);
        }
        movePlayer(e) {
            if (t.isGameStart && !this.isSub) {
                this.canMove = true;
                let t = e.stageX - this.startX;
                Math.abs(t) > 0 && (this.moveSpeed.x = .16, this.moveSpeed.x *= Math.abs(t), this.moveSpeed.x = this.moveSpeed.x > 5 ? 5 : this.moveSpeed.x,
                    this.moveSpeed.x = t > 0 ? -this.moveSpeed.x : this.moveSpeed.x), this.startX = e.stageX;
            }
        }
        stopMove() {
            this.canMove = false;
            t.isGameStart && (this.moveSpeed.x = 0);
        }
        addRole(e, t = !0) {
            for (let t = 0; t < e; t++) {
                let e = this.createObj();
                this.rotContainer.addChild(e);
                let t = e.addComponent(V);
                t.index = R.instance.roleNum, t.init(), t.reset(), this.objscriptList.push(t), R.instance.roleNum++;
            }
            if (!t) {
                k.instacne.vibrateShort(), E.instance.playAdd(), this.radius += .1 * e, this.rotContainer.transform.localPositionY += .1 * e * this.rotContainer.transform.localScaleY,
                    this.doChange();
                let t = Laya.Pool.getItemByCreateFun("AddOne", P.instance.addOne.clone, P.instance.addOne);
                t && (this.owner.addChild(t), t.transform.localScale = new Laya.Vector3(.4, .4, .4)),
                    t.transform.localPositionX = -.3, t.transform.localPositionY = this.rotContainer.transform.localPositionY + .5,
                    t.transform.localPositionZ = 0, Laya.Tween.to(t.transform, {
                        localPositionY: t.transform.localPositionY + .5
                    }, 500, null, Laya.Handler.create(this, () => {
                        t.removeSelf(), Laya.Pool.recover("AddOne", t);
                    }));
            }
        }
        subRole() {
            if (k.instacne.vibrateShort(), this.radius -= .1, this.rotContainer.transform.localPositionY -= .1 * this.rotContainer.transform.localScaleY,
                !this.selectRole) {
                let e = 9999;
                for (let t of this.objscriptList) {
                    let i = t;
                    i.obj.transform.position.y < e && (e = i.obj.transform.position.y, this.selectRole = i);
                }
                let t = this.objscriptList.indexOf(this.selectRole);
                this.objscriptList = this.objscriptList.splice(t, this.objscriptList.length - t).concat(this.objscriptList);
            }
            let e = this.objscriptList.splice(0, 1)[0];
            if (e) {
                e.doBuilder();
                let t = e.owner;
                this.builder.addChild(t.removeSelf()), t.transform.localPositionX = 0, t.transform.localPositionY = .8 * (this.builder.numChildren - 1),
                    t.transform.localPositionZ = 0, t.transform.localRotationEulerY = 180;
            }
            R.instance.roleNum--, R.instance.roleNum <= 0 && (this.isEnd ? this.doFinish() : this.doDead());
        }
        resetBuilder(e) {
            this.builder.removeChildren(0, this.builder.numChildren - 1), this.builder.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.builder.transform.position = this.obj.transform.position, this.builder.transform.localPositionY -= 1.5,
                1 == e ? (this.builder.transform.localPositionY += .5, this.builder.transform.localPositionZ += 2,
                    this.builder.transform.localRotationEulerX = 90) : 2 == e && (this.builder.transform.localPositionY += .5,
                        this.builder.transform.localPositionZ = this.lastObstacle.transform.position.z);
        }
        doChange() {
            let e = 360 / this.rotContainer.numChildren;
            for (let t = 0; t < this.objscriptList.length; t++) {
                this.objscriptList[t].changeRotAndPos(e, t, 1 == this.rotContainer.numChildren);
            }
        }
        doFinish(e = !1) {
            this.isFinish || (this.isFinish = !0, this.rigid.isKinematic = !0, P.instance.levelEnd.doFinish(e),
                s.event(n.GAMEWIN));
        }
        doDead() {
            this.isDead || (this.isDead = !0, this.rigid.isKinematic = !0, s.event(n.GAMELOSE));
        }
        gameOver() {
            this.rigid.isKinematic = !0;
            this.isFinish = !0;
            this.isDead = !0;
            // s.on(n.GAMEOVER, this, this.overIng)
        }
        onUpdate() {
            if (this.isFinish) return void this.rotContainer.transform.rotate(new Laya.Vector3(.1, 0, 0));
            if (!t.isGameStart || this.isDead) return;
            this.rotSpeed.x = this.rotContainer.numChildren > 5 ? .4 : .5;
            const e = 15// Laya.timer.delta;
            // console.log(this.subNum, this.loopNum, this.moveSpeed.y, this.obj.transform.localPositionY - this.lastY, 2.5 * this.subNum)
            this.subNum > 0 && (
                this.loopNum != this.subNum && (
                    this.moveSpeed.y > 0 ?
                        (this.obj.transform.localPositionY - this.lastY >= 2.5 * this.loopNum
                            && (this.subRole(), this.isEnd && this.doMul(this.loopNum), this.loopNum++),


                            this.obj.transform.localPositionY - this.lastY >= 2.5 * this.subNum + 2 &&
                            (this.trail.trailFilter.time = 2, this.moveSpeed.y = -.5, this.moveSpeed.z = 1))


                        :
                        this.obj.transform.localPositionZ - this.lastZ >= 2.5 * this.loopNum && (this.subRole(), this.loopNum++)),
                this.rotSpeed.x = .3, this.moveSpeed.x = 0),
                this.rotContainer.transform.localRotationEulerX += this.rotSpeed.x * e,
                0 != this.moveSpeed.x ? this.rotContainer.transform.localRotationEulerY <= 10 &&
                    this.rotContainer.transform.localRotationEulerY >= 0 ? (this.moveSpeed.x < 0 && (this.rotContainer.transform.localRotationEulerY = 0),
                        this.rotContainer.transform.localRotationEulerY += this.moveSpeed.x) : this.rotContainer.transform.localRotationEulerY >= -10 &&
                            this.rotContainer.transform.localRotationEulerY < 0 ? (this.moveSpeed.x > 0 && (this.rotContainer.transform.localRotationEulerY = 0),
                                this.rotContainer.transform.localRotationEulerY += this.moveSpeed.x) : this.rotContainer.transform.localRotationEulerY > 10 ?
                    this.rotContainer.transform.localRotationEulerY = 10 : this.rotContainer.transform.localRotationEulerY < -10 &&
                    (this.rotContainer.transform.localRotationEulerY = -10) : this.rotContainer.transform.localRotationEulerY > 0 ?
                    this.rotContainer.transform.localRotationEulerY -= 1 : this.rotContainer.transform.localRotationEulerY < 0 &&
                    (this.rotContainer.transform.localRotationEulerY += 1);
            this.rigid.linearVelocity = new Laya.Vector3(this.moveSpeed.x * e, this.moveSpeed.y * e, this.moveSpeed.z * e),
                this.waitTime += 15,//Laya.timer.delta,
                this.waitTime >= 100 && (this.waitTime = 0, this.startX == Laya.stage.getMousePoint().x && (this.moveSpeed.x = 0));
            if (this.caneMove) {

            }
        }
        onTriggerEnter(e) {
            if (this.triggers[e.owner.id]) return;
            let t = e.owner, i = t.name;
            i.indexOf("Collider") >= 0 ? this.doCol(t) :
                i.indexOf("Currency") >= 0 ? this.doCoin(t) :
                    i.indexOf("Obstacle") >= 0 ? (console.log(i, 11111111111), this.doObstacle(t)) :
                        i.indexOf("LevelEnding") >= 0 && this.doEnd(t);
        }

        onTriggerExit(e) {
            let t = e.owner;
            console.log(t.name, "befor")
            t.name.indexOf("Obstacle") >= 0 && (console.log(t.name, 3333333333333), this.doExitOb(t));
        }
        doExitOb(e) {
            if (this.triggers[e.id]) {
                var trigger = this.triggers[e.id];
                if (trigger.used) return;
                trigger.used = true;
            }
            console.log(e.name, 444444444444)
            if (this.lastObstacle == e) {
                this.isEnd ? this.doFinish(!0) : (Laya.timer.once(75, this, () => {
                    this.moveSpeed.y = -.5, this.trail.trailFilter.time = 2;
                    this.isSub = !1;
                }), this.moveSpeed.z = 1),
                    this.subNum = 0;
                this.loopNum = 0, this.selectRole = null, this.doChange()

                this.lastObstacle = null;
            }
        }
        onCollisionEnter(e) {
            let t = e.other.owner;
            t.name.indexOf("Body") >= 0 && this.doRamp(t);
        }
        doCol(e) {
            if (this.lastCol == e) return;
            this.lastCol = e;
            let t = e.parent.getChildByName("GameObject");
            t && this.addRole(t.numChildren, !1);
            let i = e.parent.getComponent(G);
            i && i.doRemove();
        }
        doCoin(e) {
            if (!e || !e.transform) {
                return;
            }
            k.instacne.vibrateShort(), E.instance.playChimes(), e.getChildAt(1).particleSystem.play(),
                Laya.Tween.to(e.transform, {
                    localPositionY: e.transform.localPositionY + 2,
                    localRotationEulerY: e.transform.localRotationEulerY + 360
                }, 500, null, Laya.Handler.create(this, () => {
                    if (!e || !e.transform) {
                        return;
                    }
                    e.removeSelf(), Laya.Pool.recover("coin", e);
                    let i = new Laya.Vector4();
                    U.instance.camera.worldToViewportPoint(e.transform.position, i);
                    let a = new Laya.Vector2(13, 13), o = new Laya.Image("img/connon/qian.png");
                    x.instance.scene2d.addChild(o), o.pos(i.x, i.y), Laya.Tween.to(o, {
                        x: a.x,
                        y: a.y
                    }, 500, null, Laya.Handler.create(this, () => {
                        t.gold += 1, s.event(n.GOLDCHANGE), o.removeSelf();
                    }));
                }));
        }
        doObstacle(e) {
            this.triggers[e.id] = { owner: e, used: false };

            if (this.isSub) return console.log("减少过程中");
            if (this.lastObstacle == e) return console.log("相同碰撞");
            if (this.obj.transform.localPositionZ > e.transform.position.z) return console.log("在前方");
            this.isSub = !0,
                console.log(e.name, 222222222222)
            this.lastObstacle = e, this.trail.trailFilter.time = 0, this.lastY = this.obj.transform.localPositionY,
                this.lastZ = this.obj.transform.localPositionZ;
            let t = 0;
            this.staytimes = 0
            if (this.isEnd) t = 2, this.subNum = 6, this.moveSpeed.y = 1, this.moveSpeed.z = 0;
            else {
                let i = e.name.split(" (")[0].split("(")[1].split(")")[0].split("");
                i[0].indexOf("H") >= 0 ? (t = 1, this.moveSpeed.y = 0) : i[0].indexOf("V") >= 0 && (t = 2,
                    this.moveSpeed.y = 1, this.moveSpeed.z = 0), this.subNum = this.getMaxNum(e);
            }
            this.resetBuilder(t);
        }
        getMaxNum(e) {
            let t = this.getSubNum(e.name), i = P.instance.obstacles, s = [];
            for (let t = 0; t < i.length; t++) {
                let n = i[t], a = n.transform.localPositionX + n.transform.localScaleX / 2, o = n.transform.localPositionX - n.transform.localScaleX / 2;
                Math.abs(n.transform.localPositionZ - e.transform.localPositionZ) <= .1 && (this.obj.transform.localPositionX >= n.transform.localPositionX ? this.obj.transform.localPositionX - .3 <= a && s.push(n) : this.obj.transform.localPositionX <= n.transform.localPositionX && this.obj.transform.localPositionX + .3 >= o && s.push(n));
            }
            if (s.length >= 1) {
                let e = -9999;
                for (let t = 0; t < s.length; t++) {
                    let i = s[t], n = this.getSubNum(i.name);
                    n > e && (e = n, this.lastObstacle = i);
                }
                return e;
            }
            return t;
        }
        getSubNum(e) {
            return Number(e.split(" (")[0].split("(")[1].split(")")[0].split("")[1]);
        }
        doRamp(e) {
            if (this.lastRamp == e) return;
            this.lastRamp = e;
            let t = e.name.split("_");
            if (t[1]) {
                let e = Number(t[1]) - 2;
                this.moveSpeed.y = .7 * e / 20, Laya.timer.once(1e3 * e / 20, this, () => {
                    this.moveSpeed.y = -8 / e;
                });
            } else this.moveSpeed.y = .7, Laya.timer.once(1e3, this, () => {
                this.moveSpeed.y = -.4;
            });
        }
        doEnd(e) {
            this.isEnd || (this.isEnd = !0, this.trail.active = !1);
        }
        doMul(e) {
            P.instance.levelEnd.doMul(e);
        }
        clearOthers() {
            this.trail.destroy(), this.builder.destroy(), this.rotContainer.destroy();
        }
    }
    class R extends I {
        constructor() {
            super(...arguments), this.roleNum = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new R();
        }
        init() {
            this.objPrefab = Laya.loader.getRes(C.playerRes[2]), this.objName = "container",
                this.objPool = new Laya.Sprite3D("Player"), x.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e, this.roleNum = 0;
            for (let e = 0; e < 1; e++) {
                let t = this.createObj();
                this.roleContainer = t.addComponent(D), this.objPool.addChild(t), this.roleContainer.index = e,
                    this.roleContainer.init(), this.objscriptList.push(this.roleContainer);
            }
        }
        reset() {
            this.roleContainer.reset();
        }
        ready() {
            this.roleContainer.ready();
        }
        start() {
            this.roleContainer.start();
        }
        gameOver() {
            this.roleContainer.gameOver();
        }
        movePlayer(e) {
            this.roleContainer && this.roleContainer.movePlayer(e);
        }
        stopMove() {
            this.roleContainer && this.roleContainer.stopMove();
        }
        addEventListener() { }
        removeEventListener() { }
        clearOthers() { }
    }
    class U {
        constructor() {
            this.$isLock = !1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new U();
        }
        get isLock() {
            return this.$isLock;
        }
        set isLock(e) {
            this.cameraScript && (this.cameraScript.isLock = e), this.$isLock = e;
        }
        init() {
            this.light = new Laya.DirectionLight(), this.light.name = "light", x.instance.scene3d.addChild(this.light),
                this.light.transform.rotation = new Laya.Quaternion(.1093816, .8754261, .4082179, -.2345697),
                this.light.color = new Laya.Vector3(.4, .4, .4), this.light.shadowMode = Laya.ShadowMode.SoftLow,
                this.light.shadowDistance = 100, this.light.shadowResolution = 1024, this.light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                this.light.shadowStrength = 1.5, this.cameraObj = new Laya.Sprite3D(), this.camera = new Laya.Camera(),
                this.cameraObj.addChild(this.camera), this.camera.enableHDR = !1, this.camera.farPlane = 1e3,
                this.camera.nearPlane = 1, this.camera.fieldOfView = 60, this.camera.clearFlag = Laya.CameraClearFlags.SolidColor,
                this.camera.clearColor = new Laya.Vector4(0, 1, 235 / 255), this.cameraScript = this.cameraObj.addComponent(B),
                x.instance.scene3d.addChild(this.cameraObj), this.addEventListener(), this.changeSkyBox();
        }
        changeSkyBox() {
            let e = Laya.loader.getRes(C.skyBoxRES[0]);
            this.camera.clearFlag = Laya.CameraClearFlags.Sky;
            let t = x.instance.scene3d.skyRenderer;
            t.mesh = Laya.SkyBox.instance, t.material = e, Laya.timer.frameLoop(1, this, () => { });
        }
        reset() {
            this.cameraObj.transform.position = new Laya.Vector3(0, 2, 0), this.camera.transform.localPosition = new Laya.Vector3(-5, 12, -30),
                this.camera.transform.localRotationEuler = new Laya.Vector3(-15, 188, 0);
        }
        ready() { }
        start() {
            this.startLockPlayer();
        }
        startLockPlayer() {
            this.cameraScript && (this.cameraScript.playerObj = R.instance.roleContainer.obj,
                this.isLock = !0);
        }
        gameOver() {
            this.isLock = !1, this.cameraScript.playerObj = null;
        }
        addEventListener() {
            s.on(n.GAMELOSE, this, this.unLockPlayer), s.on(n.GAMEWIN, this, this.showPlayer),
                s.on(n.GAMEOVER, this, this.gameOver);
        }
        unLockPlayer() {
            this.isLock = !1, this.cameraScript.playerObj = null;
        }
        showPlayer() { }
        destroyCamera() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.cameraObj.removeSelf());
        }
    }
    class J {
        constructor() {
            this.icChick = false;
            this.isOver = !1, this.offx = 0, this.offy = 0, this.nameList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new J();
        }
        init() {
            x.instance.init();
            let e = C.unityRES;
            Laya.loader.create(e, Laya.Handler.create(this, e => {
                P.instance.init(), U.instance.init(), R.instance.init(), this.addEventListener(),
                    this.sceneObjLoadFinish();
            }));
        }
        sceneObjLoadFinish() {
            this.clearGame();
        }
        clearGame() {
            R.instance.clearScript(), P.instance.clearOthers(), this.load();
        }
        load() {
            P.instance.load(), R.instance.load(), this.reset();
        }
        reset() {
            U.instance.reset(), R.instance.reset(), t.mulNum = 0;
        }
        readyGame() {
            s.event(n.GAMEREADY), U.instance.ready(), R.instance.ready();
        }
        startGame() {
            this.isOver = !1, t.isGameStart = !0, s.event(n.GAMESTART), U.instance.start(),
                t.startTime = Date.parse(new Date().toString());
        }
        gameLose() {
            this.isOver ? console.log("再次进入游戏结束判定1") : (this.isOver = !0, Laya.timer.clearAll(this),
                t.isGameStart = !1, E.instance.loseVoice(), Laya.timer.once(1500, this, () => {
                    s.event(n.GAMEOVER), Laya.Scene.open(c.LoseScene, !1);
                }));
        }
        gameWin() {
            this.isOver ? console.log("再次进入游戏结束判定2") : (this.isOver = !0, t.isGameStart = !1,
                Laya.timer.clearAll(this), E.instance.winVoice(), Laya.timer.once(3e3, this, () => {
                    s.event(n.GAMEOVER), Laya.Scene.open(c.WinScene, !1);
                }), t.trySkinTimes > 0 && (t.trySkinTimes--, 0 == t.trySkinTimes && (t.trySkinIndex = -1)));
        }
        overIng() {
            this.isOver = !0, t.isGameStart = !1, Laya.timer.clearAll(this);
        }
        addEventListener() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startTouch), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stopTouch), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.stopTouch),
                s.on(n.GAMEOVER, this, this.overIng), s.on(n.RESETGAME, this, this.clearGame), s.on(n.GAMELOSE, this, this.gameLose),
                s.on(n.GAMEWIN, this, this.gameWin);
        }
        startTouch(e) {
            this.icChick = true;
            this.startX = e.stageX, this.startY = e.stageY;
        }
        mouseMove(e) {
            if (!this.icChick) {
                return;
            }
            R.instance.movePlayer(e);
        }
        stopTouch(e) {
            this.icChick = false;
            R.instance.stopMove();
        }
        ranName() {
            return this.nameList && this.nameList.length > 0 ? this.nameList[Math.floor(Math.random() * this.nameList.length)] : "";
        }
    }
    class H extends S.scene.LoadingSceneUI {
        constructor() {
            super(), this.times = 2, this.trueLoadFinish = !1, this.fadeLoadFinish = !1;
        }
        onEnable() {
            this.zOrder = 3500, this.y = t.statusBarHeight, this._boxBlack.visible = !0;
        }
        onOpened() {
            u.instance.sendEvent(a.Load_start), this._imgMask = this._imgLoading.mask,
                platform.getInstance().yadstartup("Join-Scroll-Run", () => {
                    platform.getInstance().showSplash();
                    this.loadSubpackage(), m.instance.showBanner(!0), b.instance.showBanner();
                });

        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listDown.selectedIndex = -1);
        }
        loadAd(e) {
            this._listDown.array = e;
        }
        jumpRandon() {
            if (l.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId);
            }
        }
        startGame() {
            Laya.Scene.close(c.LoadingScene), Laya.Scene.open(c.MainScene, !1), m.instance.showBanner(!0),
                b.instance.showBanner();
        }
        loadSubpackage() {
            let e = this;
            e._imgMask.x = 408.8 - 511, Laya.timer.once(200, e, () => {
                e.goMainScene();
            });
        }
        goMainScene() {
            u.instance.sendEvent(a.load_finish), J.instance.init(), Laya.timer.once(100, this, () => {
                console.log("SideData.islinshiWhite", l.islinshiWhite);
                platform.getInstance().showBanner();
                platform.getInstance().hideSplash();
                window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Join-Scroll-Run-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Join-Scroll-Run-musicState")) : false;
                Laya.Scene.open(c.MainScene, true);
            });
        }
        onClosed() {

        }
    }
    class W extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildAt(0).getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildAt(0).getChildByName("_txtTitle"), e._imgIcon = e.getChildAt(0).getChildByName("_imgIcon"),
                    e._imgTitleBg = e.getChildAt(0).getChildByName("_imgTitleBg");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class K extends Laya.VScrollBar {
        constructor() {
            super(), this.toValue = this.max;
        }
        onAwake() {
            this.value = 0, this.toValue = this.max, this.fatherObj = this.parent, this.fatherObj.on(Laya.Event.MOUSE_DOWN, this, this.stopChange),
                this.fatherObj.on(Laya.Event.MOUSE_OUT, this, this.stopChange), this.fatherObj.on(Laya.Event.MOUSE_UP, this, this.startChange),
                this.startChange();
        }
        startChange() {
            this.timer.clearAll(this), this.timer.once(600, this, () => {
                this.road();
            });
        }
        road() {
            let e = 20 * (0 == this.toValue ? this.value : this.toValue - this.value);
            Laya.Tween.to(this, {
                value: this.toValue
            }, e, null, Laya.Handler.create(this, () => {
                this.toValue = 0 == this.toValue ? this.max : 0, this.road();
            }));
        }
        stopChange() {
            Laya.Tween.clearAll(this);
        }
        onDisable() {
            this.fatherObj.off(Laya.Event.MOUSE_DOWN, this, this.stopChange), this.fatherObj.off(Laya.Event.MOUSE_OUT, this, this.stopChange),
                this.fatherObj.off(Laya.Event.MOUSE_UP, this, this.startChange);
        }
    }
    class F extends Laya.Script {
        constructor() {
            super(), this.dic = 2;
        }
        onStart() {
            this.changeView();
        }
        changeView() {
            let e = this.owner;
            this.def_x = e.x, this.def_y = e.y, this.byNoRainLand(), 0 == this.dic ? e.x = t.stage_width - (t.ore_width - this.def_x) : 1 == this.dic ? e.x = t.stage_width / 2 - (e.width / 2 - e.pivotX) : 2 == this.dic && (e.y = t.stage_height - (t.ore_height - this.def_y) - t.statusBarHeight);
        }
        byNoRainLand() {
            console.log();
        }
        onDestroy() { }
    }
    class Y extends S.scene.LoseSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._imgCon.x = 211;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                this._txtGold.text = v.instacne.formatToUnitEN(t.gold), u.instance.sendEvent(a.show_relive),
                m.instance.showBanner(!0), g.instance.closeBanner(), b.instance.showBanner(), g.instance.openMoreNativeAdScene(),
                this.scene_Data ? this._imgLose.visible = !1 : this._imgLose.visible = !0, this.isTouchAd = !1;
            platform.getInstance().initList(this._showlist);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let i = e.target;
            i == this._imgCon ? (platform.getInstance().showInterstitial(() => {
                t.isGameStart = !1, (s.event(n.RESETGAME), Laya.Scene.close(c.LoseScene))
            }))
                : i == this._imgMoreGame && s.event(n.GETAPP);
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class X extends S.scene.LoseTwiceSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, !Laya.Browser.onQGMiniGame && l.isJump && (this._spMoreGame.visible = !0),
                A.instance.canShow && null != A.instance.nativeAdData ? (this._spAgain.x = 25, this._spAn.visible = !0) : Laya.Browser.onVVMiniGame && null != b.instance.nativeAdData(2) ? (this._spAgain.x = 25,
                    this._spAn.visible = !0) : (this._spAn.visible = !1, this._spAgain.x = 211);
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                this._txtGold.text = v.instacne.formatToUnitEN(t.gold), u.instance.sendEvent(a.show_jiesuan),
                this.isTouchAd = !1;
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let i = e.target;
            i == this._spAgain ? (A.instance.canShow || Laya.Browser.onVVMiniGame) && l.checkWuchu && !this.isTouchAd ? (s.event(n.GETAPP),
                this.isTouchAd = !0) : (Laya.Scene.close(c.LoseTwiceScene), g.instance.openLeft(),
                    l.isJump && g.instance.openLiangPaiJuhe(), g.instance.openDuilian(), Laya.Browser.onQGMiniGame && (t.luckBoxTime++,
                        t.luckBoxTime > 2 && (t.luckBoxTime = 0, Laya.Scene.open(c.LuckBoxScene, !1)))) : i == this._spMoreGame ? l.isJump && (g.instance.openJuhe(),
                            m.instance.hideBanner(), g.instance.closeBanner()) : this._spAn && s.event(n.GETAPP);
        }
        onClosed() {
            g.instance.closeLiugong(), g.instance.closeNativeAdSence(), this.removeEventListener();
        }
    }
    class z extends S.scene.LuckBoxSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._boxNative.visible = !1, this._main.y = (t.stage_height - t.ore_height) / 2 + t.statusBarHeight;
        }
        onOpened(e) {
            this.addEventListener(), this.showNative(), this.isTouchAd = !1;
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = A.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = b.instance.nativeAdData(3));
            let t = this;
            if (A.instance.hideBanner(), b.instance.hideBanner(), null == e) t._boxNative.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        A.instance.nativeAdreportAdShow(), b.instance.nativeAdreportAdShow(3), console.log("加载成功")) : (console.log("加载失败"),
                            t._boxNative.visible = !1);
                }));
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgGet ? (A.instance.showVideo(this, this.getGold)) : t == this._imgNative ? (A.instance.nativeAdreportAdClick(),
                b.instance.nativeAdreportAdClick(3)) : t == this._imgSSS ? this._boxNative.visible = !1 : t == this._imgNo && (A.instance.canShow && l.checkWuchu && !this.isTouchAd ? (A.instance.nativeAdreportAdClick(),
                    this.isTouchAd = !0) : Laya.Browser.onVVMiniGame && l.checkWuchu && !this.isTouchAd ? (b.instance.nativeAdreportAdClick(3),
                        this.isTouchAd = !0) : Laya.Scene.close(c.LuckBoxScene));
        }
        getGold(e) {
            if (e) {
                let e = Math.floor(50 * Math.random()) + 50;
                t.gold += e, d.instance.openTips("Coin +" + e);
            }
            Laya.Scene.close(c.LuckBoxScene), s.event(n.GOLDCHANGE);
        }
        onClosed() {
            A.instance.removeNativeAd(), b.instance.removeNativeAd(3), b.instance.showBanner(),
                E.instance.mainBg(), this.removeEventListener();
        }
    }
    class Q extends S.scene.MainSceneUI {
        constructor() {
            super(), this.waitLoad = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, t.isLoadingVideo = !0, l.islinshiWhite || (this._imgSkin.visible = !1);
        }
        onOpened(e) {
            this.addEventListener(), this.changeGold(), this.resetGame(), this.timer.once(500, this, () => {
                E.instance.mainBg();
            });
            this.btn_home.visible = false;
            this.lab_tips.visible = false;
            this.btn_music.skin = window.WebAudioEngine.pause ? "img/loading/btn_sound_off.png" : "img/loading/btn_sound_on.png";

        }
        resetGame() {
            this.btn_home.visible = false;
            this._imgStart.visible = !0, this._imgStr.visible = !0, this._imgSkin.visible = !0,
                Laya.timer.clearAll(this), this.waitLoad = !1, E.instance.mainBg(), this._fcpLevel.visible = !0,
                this._fcpLevel.value = "" + t.levelIndex;
        }
        readyGame() {
            platform.getInstance().showInterstitial(() => {
                this.btn_home.visible = true;
                this._imgStart.visible = !1, this._imgStr.visible = !1, this._imgSkin.visible = !1,
                    this._fcpLevel.visible = !0, J.instance.readyGame(), Laya.timer.once(500, this, this.gameStart);
                if (t.levelIndex == 1) {
                    this.lab_tips.visible = true;
                    Laya.timer.once(1500, this, this.clearLab);
                }
            })
        }

        clearLab() {
            this.lab_tips.visible = false;
        }

        gameStart() {
            J.instance.startGame();
        }
        gameOver() {
            Laya.timer.clearAll(this);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.JIUGONGCLOSE, this, this.readyGame),
                s.on(n.GOLDCHANGE, this, this.changeGold), s.on(n.RESETGAME, this, this.resetGame),
                s.on(n.GAMEOVER, this, this.gameOver), s.on(n.SKINJUMP, this, this.skinJump);
            this.btn_music.on(Laya.Event.CLICK, this, this.changeMusic)
            this.btn_home.on(Laya.Event.CLICK, this, this.goHome)
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.JIUGONGCLOSE, this, this.readyGame),
                s.off(n.GOLDCHANGE, this, this.changeGold), s.off(n.RESETGAME, this, this.resetGame),
                s.off(n.GAMEOVER, this, this.gameOver), s.off(n.SKINJUMP, this, this.skinJump);
            this.btn_music.off(Laya.Event.CLICK, this, this.changeMusic);
            this.btn_home.off(Laya.Event.CLICK, this, this.goHome)
            Laya.timer.clear(this, this.clearLab);
        }
        goHome() {
            if (t.isGameStart == true) {
                s.event(n.GAMEOVER), R.instance.gameOver(),
                    t.isGameStart = !1, s.event(n.RESETGAME);
            }
        }
        changeGold() {
            this._txtGold.text = v.instacne.formatToUnitEN(t.gold);
        }
        skinJump() {
            this.readyGame();
        }
        changeMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            Laya.LocalStorage.setItem("Join-Scroll-Run-musicState", JSON.stringify(window.WebAudioEngine.pause))
            this.btn_music.skin = window.WebAudioEngine.pause ? "img/loading/btn_sound_off.png" : "img/loading/btn_sound_on.png";
        }
        getTouch(e) {
            let i = e.target;
            if (i == this._imgStart) {
                if (this.waitLoad) d.instance.openTips("Load Scene...");
                else this.readyGame();
            } else if (i == this._imgSkin) {
                Laya.Scene.open(c.SelectSkinScene, !1);
            }
        }
        showGoldenEgg(e = null) {
            m.instance.hasBanner ? (t.isLoadingVideo = !0, l.isShowHu ? g.instance.openGoldenEgg(!0) : (s.event(n.JIUGONGCLOSE),
                t.isLoadingVideo = !1), u.instance.sendEvent(a.Start_click)) : this.readyGame();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class q {
        static get instance() {
            return this._instance ? this._instance : this._instance = new q();
        }
        createPlayer(e, i, s, n, a = null) {
            return this.scene3d = a || new Laya.Scene3D(), Laya.stage.addChild(this.scene3d),
                this.player = Laya.Pool.getItem(T.PLAYER), this.player || (this.player = Laya.loader.getRes(C.playerRes[0]).clone()),
                this.scene3d.addChild(this.player), this.player.transform.localScale = new Laya.Vector3(1, 1, 1),
                this.player.transform.position = new Laya.Vector3(0, 0, 0), this.player.getChildAt(0).transform.localRotationEuler = new Laya.Vector3(0, 180, 0),
                this.camera = new Laya.Camera(), this.camera.transform.position = new Laya.Vector3(0, .3, -.7),
                this.camera.transform.rotation = new Laya.Quaternion(0, .9928806, .0591143, 0),
                this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.scene3d.addChild(this.camera),
                this.camera.viewport = new Laya.Viewport(e * Laya.stage.clientScaleX, (i + t.statusBarHeight) * Laya.stage.clientScaleY, s * Laya.stage.clientScaleX, n * Laya.stage.clientScaleY),
                this.light = new Laya.DirectionLight(), this.scene3d.addChild(this.light), this.light.transform.position = new Laya.Vector3(-9.281452, 15.48453, -18.53672),
                this.light.transform.rotation = new Laya.Quaternion(.1093816, .8754261, .4082179, -.2345697),
                this.light.intensity = .41, this.scene3d.ambientColor = new Laya.Vector3(.7, .7, .7),
                this.player.getChildAt(0).transform.localPositionX = -0, this.player;
        }
        clearPlayer() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.camera = null),
                this.light && (this.light.removeSelf(), this.light.destroy(), this.light = null),
                this.player && (this.player.removeSelf(), Laya.Pool.recover(T.PLAYER, this.player),
                    this.player = null), this.scene3d && (this.scene3d.removeSelf(), this.scene3d.destroyChildren(),
                        this.scene3d.destroy(), this.scene3d = null);
        }
    }
    class $ extends S.scene.SelectSkinSceneUI {
        constructor() {
            super(), this.linUnlock = -1, this.isRan = !1, this.curPage = 0;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._txtGold.text = v.instacne.formatToUnitEN(t.gold);
        }
        onOpened(e) {
            b.instance.hideBanner(), m.instance.hideBanner(), g.instance.closeBanner(), g.instance.closeLeft(),
                g.instance.closeDuilian(), this.addEventListener(), this._listskin.renderHandler = new Laya.Handler(this, this.changeItem),
                this._listskin.selectHandler = new Laya.Handler(this, this.selectList), this._listskin.selectEnable = !0,
                this.changeList(), this.showPlayerSkin(), this._next1.visible = !0, this._next2.visible = !1,
                this.curPage = 0;
        }
        changeList() {
            this._listskin.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                this._listskin.selectedIndex = t.skinIndex;
        }
        selectList(e) {
            t.isUnlock(e) ? this.isRan ? (this._listskin.selectedIndex = -1, d.instance.openTips("Waiting")) : t.skinIndex != e && (t.skinIndex = e,
                this.showPlayerSkin(), s.event(n.SKINCHANGE)) : (this._listskin.selectedIndex = -1,
                    d.instance.openTips("Locked"));
        }
        changeItem(e, i) {
            let s = e.getChildByName("_imgBg"), n = e.getChildByName("_imgPlayer"), a = e.getChildByName("_imgLock");
            n.skin = "img/player/" + i + ".png", i == t.skinIndex ? s.skin = "img/skinscene/select.png" : s.skin = "img/skinscene/pifukuang.png",
                a.visible = !0;
            for (let e of t.unlockSkinList) if (Number(e) == i) {
                a.visible = !1;
                break;
            }
            i == this.linUnlock && (a.visible = !1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let i = e.target;
            if (i == this._imgRan) {
                if (this.isRan) return;
                t.gold >= 500 ? 18 == t.unlockSkinList.length ? d.instance.openTips("You have unlocked all skins") : (t.gold -= 500,
                    s.event(n.GOLDCHANGE), this._txtGold.text = t.gold.toString(), this.ranSkin()) : d.instance.openTips("Coins Are Not Enough");
            } else if (i == this._imgWatch) A.instance.showVideo(this, this.getGold);
            else if (i == this._imgBack) Laya.Scene.close(c.SelectSkinScene); else if (i == this._next1) {
                this.curPage++;
                let e = 610 * this.curPage;
                Laya.Tween.to(this._bar, {
                    value: e
                }, 500), 2 == this.curPage && (this._next1.visible = !1), 1 != this.curPage && 2 != this.curPage || (this._next2.visible = !0);
            } else if (i == this._next2) {
                this.curPage--;
                let e = 610 * this.curPage;
                Laya.Tween.to(this._bar, {
                    value: e
                }, 500), 0 == this.curPage && (this._next2.visible = !1), 0 != this.curPage && 1 != this.curPage || (this._next1.visible = !0);
            }
        }
        ranSkin() {
            this.isRan = !0;
            let e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
            let i = e.filter(e => !new Set(t.unlockSkinList).has(e)), a = Math.floor(Math.random() * i.length);
            console.log(i, a);
            let o = 0;
            Laya.timer.loop(100, this, () => {
                let e = o > i.length ? o % i.length : o, r = i[e];
                if (this.linUnlock = r, this.changeList(), ++o > i.length + a) {
                    Laya.timer.clearAll(this), t.skinIndex = i[a];
                    this._listskin.scrollTo(t.skinIndex);
                    let e = JSON.parse(JSON.stringify(t.unlockSkinList));
                    e.push(t.skinIndex), t.unlockSkinList = e, s.event(n.SKINCHANGE), this.showPlayerSkin(),
                        this.isRan = !1, this._listskin.selectedIndex = i[a], this.linUnlock = -1;
                }
            });
        }
        showPlayerSkin() {
            if (this.player) {
                let e = this.player.getChildAt(0).getChildAt(1), i = Laya.loader.getRes(C.skinRes[t.skinIndex]);
                e.skinnedMeshRenderer.material = i;
            } else this.player = q.instance.createPlayer(175, 100, 400, 480), this.showPlayerSkin();
        }
        getGold(e) {
            1 == e ? (t.gold += t.watchADGold, s.event(n.GOLDCHANGE), d.instance.openTips("Coin +" + t.watchADGold),
                this._txtGold.text = v.instacne.formatToUnitEN(t.gold)) : null;
        }
        removeScene() {
            q.instance.clearPlayer();
        }
        onClosed() {
            m.instance.showBanner(!0), b.instance.showBanner(), g.instance.closeBanner(), g.instance.openLeft(),
                g.instance.openDuilian(), this.removeScene(), this.removeEventListener();
        }
    }
    class Z extends S.scene.SkinTrySceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._main.y = (t.stage_height - t.ore_height) / 2, this._imgMoreGame.visible = !1;
        }
        onOpened(e) {
            this.scene_data = e, this.showPlayerSkin(), this.addEventListener(), this.showNative(),
                this.isTouchAd = !1;
        }
        showPlayerSkin() {
            if (this.player) {
                this.player.getChildAt(0).getChildAt(0);
            } else this.player = q.instance.createPlayer(175, 100, 400, 480), this.player.transform.localPositionY = -.5,
                this.showPlayerSkin();
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = A.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = b.instance.nativeAdData(0)),
                A.instance.hideBanner(), b.instance.hideBanner();
            let t = this;
            if (null == e) t._boxNative.visible = !1, t._imgMoreGame.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        A.instance.nativeAdreportAdShow(), b.instance.nativeAdreportAdShow(0), console.log("加载成功")) : (console.log("加载失败"),
                            t._boxNative.visible = !1);
                }));
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            t == this._txtNo ? A.instance.canShow && l.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                A.instance.nativeAdreportAdClick()) : Laya.Browser.onVVMiniGame && l.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                    b.instance.nativeAdreportAdClick(0)) : (s.event(n.SKINJUMP), this.clearScene(),
                        Laya.Scene.close(c.SkinTryScene)) : t == this._imgSkin ?
                A.instance.showVideo(this, this.trySkin) : t == this._imgNative || t == this._imgMoreGame ? (A.instance.nativeAdreportAdClick(),
                    b.instance.nativeAdreportAdClick(0)) : t == this._imgSSS && (this._boxNative.visible = !1);
        }
        trySkin(e) {
            1 == e && (d.instance.openTips("Congratulations! You can trial this skin"), t.trySkinIndex = this.scene_data, t.trySkinTimes = 2,
                s.event(n.SKINCHANGE), s.event(n.SKINJUMP), this.clearScene(), Laya.Scene.close(c.SkinTryScene));
        }
        clearScene() {
            q.instance.clearPlayer();
        }
        onClosed() {
            A.instance.removeNativeAd(), b.instance.removeNativeAd(0), b.instance.showBanner(),
                this.removeEventListener();
        }
    }
    class ee extends S.scene.WinSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight;
        }
        onOpened(e) {
            g.instance.openMoreNativeAdScene(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                1 == t.mulNum ? this.mulNum = 1 : this.mulNum = 2 * (t.mulNum - 1), this.scene_Data = e,
                t.levelIndex++, this.addEventListener(), this._txtNum.text = "+" + (t.getGold * this.mulNum).toString(),
                g.instance.closeBanner(), u.instance.sendEvent(a.Game_pass), this._txtGold.text = v.instacne.formatToUnitEN(t.gold),
                l.isJump && g.instance.openJuhe(), this.isTouchAd = !1;
            platform.getInstance().initList(this._showlist);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let i = e.target;
            i == this._spMoreGame ? (
                platform.getInstance().showInterstitial(() => {
                    (t.gold += t.getGold * this.mulNum, d.instance.openTips("Coin +" + t.getGold * this.mulNum),
                        s.event(n.GOLDCHANGE), Laya.Scene.close(c.WinScene), g.instance.openLeft(), g.instance.openDuilian()),
                        l.isJump && g.instance.openLiangPaiJuhe()
                })
            ) : i == this._spGetMore &&
            A.instance.showVideo(this, this.getMoreGold);
        }
        getMoreGold(e = null) {
            e && (t.gold += t.getGold * this.mulNum * 3, d.instance.openTips("Coin +" + t.getGold * this.mulNum * 3),
                s.event(n.GOLDCHANGE), Laya.Scene.close(c.WinScene), g.instance.openLeft(), g.instance.openDuilian(),
                l.isJump && g.instance.openLiangPaiJuhe());
        }
        onClosed() {
            g.instance.closeLiugong(), g.instance.closeNativeAdSence(), this.removeEventListener(),
                s.event(n.RESETGAME);
        }
    }
    class te extends S.side.GoldenEggSceneUI {
        constructor() {
            super(), this.eggValue = 0, this.$addProb = .2, this.$subProb = .02, this.timeOut = !0;
        }
        onEnable() {
            this.zOrder = 2303, this._imgTouch.y = this._imgTouch.y + t.stage_height - t.ore_height,
                this._imgMask = this._imgLoad.mask, this._imgMask.x = -this._imgMask.width;
        }
        onOpened(e) {
            this.secene_data = e, this.addEventListener(), u.instance.sendEvent(a.Click_show),
                this.handAni = new Laya.TimeLine();
            let t = this._imgHand.x, i = this._imgHand.y;
            this.handAni = this.handAni.addLabel("tl1", 0).to(this._imgHand, {
                x: 20 + t,
                y: 30 + i
            }, 300, Laya.Ease.linearNone).addLabel("tl2", 0).to(this.handAni, {
                x: t,
                y: i
            }, 300, Laya.Ease.linearNone), this.timeOut = !0, this.timer.frameLoop(2, this, this.subProb),
                this.handAni.play(0, !0), b.instance.hideBanner(), m.instance.hideBanner();
        }
        subProb() {
            this.eggValue = Math.max(0, this.eggValue - this.$subProb), this.changeValue();
        }
        addProb() {
            this.eggValue = Math.min(1, this.eggValue + this.$addProb), this.changeValue();
        }
        changeValue() {
            this._imgMask.x = -this._imgMask.width + this._imgMask.width * this.eggValue, this.eggValue >= t.goldEggValue / 2 && this.timeOut && (this.timeOut = !1,
                m.instance.showLoadedBanner(), this._imgEgg.skin = this._imgEgg.skin.replace("0", "1"),
                this.timer.once(2e3, this, () => {
                    m.instance.destroyBanner(), g.instance.closeGoldenEgg();
                })), this.eggValue >= t.goldEggValue && (this.mouseEnabled = !1);
        }
        addEventListener() {
            this._imgTouch.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this._imgTouch.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target == this._imgTouch && this.addProb();
        }
        getGoldEgg() {
            let e = Math.floor(40 * Math.random() + 10);
            t.gold += e, s.event(n.GOLDCHANGE), d.instance.openTips("Coin +" + e);
        }
        onClosed() {
            this.timer.clear(this, this.subProb), this.handAni && (this.handAni.destroy(), this.handAni = null),
                1 == this.secene_data && s.event(n.JIUGONGCLOSE), t.isLoadingVideo = !1, this.removeEventListener(),
                this.getGoldEgg(), m.instance.showBanner(!0), b.instance.showBanner(), A.instance.showBanner();
        }
    }
    class ie extends S.side.MoreGameSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._listDown.height = t.stage_height - t.ore_height + 1034 - t.statusBarHeight,
                this._imgKeep.y = t.stage_height - t.ore_height + 1188 - t.statusBarHeight, l.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            this.zOrder = 2303, this.scene_Data = e, this.addEventListener(), u.instance.sendEvent(a.Show_juhe1),
                this.isShow = !1, u.instance.getFlowConfig(i.wxId, this, this.loadAd), this._listDown.selectEnable = !0,
                this._listTop.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                this._listTop.selectHandler = new Laya.Handler(this, this.selectTop), b.instance.hideBanner(),
                m.instance.hideBanner(), l.islinshiWhite && l.RandomClick ? (this.userCancel(),
                    this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png",
                l.islinshiWhite && (this._imgBack.visible = !1, Laya.timer.once(3e3, this, () => {
                    this._imgBack.visible = !0;
                }));
        }
        jumpRandom() {
            if (l.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene");
            }
        }
        loadAd(e) {
            this._listDown.array = e, this._listTop.array = JSON.parse(JSON.stringify(e)), l.islinshiWhite && l.RandomClick && this.jumpRandom();
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene"), this._listDown.selectedIndex = -1);
        }
        selectTop(e) {
            let t = this._listTop.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene"), this._listTop.selectedIndex = -1);
        }
        userCancel() {
            !this.isShow && l.islinshiWhite && (this.isShow = !0, console.log("开始LOADbanner"),
                this.timer.once(1300, this, () => {
                    m.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                        m.instance.destroyBanner();
                    });
                }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let i = e.target;
            i == this._imgBack ? (g.instance.closeJuhe(), this.scene_Data ? (m.instance.showBanner(!0),
                b.instance.showBanner(), A.instance.showBanner()) : l.islinshiWhite ? (t.levelIndex - 1 - l.start_level) % (l.space_level + 1) == 0 && m.instance.hasBanner ? g.instance.openGoldenEgg() : (m.instance.showBanner(!0),
                    A.instance.showBanner(), b.instance.showBanner()) : (m.instance.showBanner(!0),
                        b.instance.showBanner(), A.instance.showBanner())) : i == this._imgKeep && (l.islinshiWhite && l.RandomClick ? this.jumpRandom() : (g.instance.closeJuhe(),
                            this.scene_Data ? (m.instance.showBanner(!0), b.instance.showBanner(), A.instance.showBanner()) : l.islinshiWhite && (t.levelIndex - 1 - l.start_level) % (l.space_level + 1) == 0 && m.instance.hasBanner ? g.instance.openGoldenEgg() : (m.instance.showBanner(!0),
                                b.instance.showBanner(), A.instance.showBanner())));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class se extends Laya.HScrollBar {
        constructor() {
            super();
        }
        onEnable() {
            this.value = 0, this.toValue = this.max, this.fatherObj = this.parent, this.fatherObj.on(Laya.Event.MOUSE_DOWN, this, this.stopChange),
                this.fatherObj.on(Laya.Event.MOUSE_OUT, this, this.stopChange), this.fatherObj.on(Laya.Event.MOUSE_UP, this, this.startChange),
                this.startChange();
        }
        startChange() {
            this.timer.clearAll(this), this.timer.once(600, this, () => {
                this.road();
            });
        }
        road() {
            let e = 20 * (0 == this.toValue ? this.value : this.toValue - this.value);
            Laya.Tween.to(this, {
                value: this.toValue
            }, e, null, Laya.Handler.create(this, () => {
                this.toValue = 0 == this.toValue ? this.max : 0, this.road();
            }));
        }
        stopChange() {
            Laya.Tween.clearAll(this);
        }
        onDisable() {
            this.fatherObj.off(Laya.Event.MOUSE_DOWN, this, this.stopChange), this.fatherObj.off(Laya.Event.MOUSE_OUT, this, this.stopChange),
                this.fatherObj.off(Laya.Event.MOUSE_UP, this, this.startChange);
        }
    }
    class ne extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"),
                    e._imgTitleBg = e.getChildByName("_imgTitleBg"));
                let t = e.dataSource.show_config.image;
                e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class ae extends S.side.SideBotListSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.x = 8, this.y = t.stage_height - 250;
        }
        onOpened(e) {
            this.zOrder = 2300, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(i.wxId, this, this.loadAd),
                this._listBanner.selectEnable = !0, this._listBanner.selectHandler = new Laya.Handler(this, this.selectBanner);
        }
        loadAd(e) {
            this._listBanner.array = e;
        }
        selectBanner(e) {
            let t = this._listBanner.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listBanner.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target;
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class oe extends Laya.Box {
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() { }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._imgIcon = e.getChildByName("_imgIcon"), e._imgNew = e.getChildByName("_imgNew"));
                let t = e.dataSource.show_config.image;
                t && (e._imgIcon.skin = t);
            }
        }
    }
    class re extends S.side.SideDoubleListSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.y = t.statusBarHeight;
        }
        onOpened(e) {
            this.zOrder = 2298, this.scene_Data = e, this.addEventListener(), this._listBox = new Array(),
                this._listBox.push(this._box1), this._listBox.push(this._box2), this._listBox.push(this._box3),
                this._listBox.push(this._box4), this._listBox.push(this._box5), this._listBox.push(this._box6),
                u.instance.getFlowConfig(i.wxId, this, this.loadAd);
        }
        changeImage() { }
        loadAd(e) {
            let t = e;
            t.sort(function () {
                return .5 - Math.random();
            });
            let i = t.slice(0, 6);
            for (let e = 0; e < this._listBox.length; e++) this._listBox[e].dataSource = i[e];
            Laya.timer.loop(3e3, this, () => {
                this.ani1.play(0, !1), t.sort(function () {
                    return .5 - Math.random();
                });
                let e = t.slice(0, 6);
                for (let t = 0; t < this._listBox.length; t++) this._listBox[t].dataSource = e[t];
            });
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._box1) {
                let e = this._listBox[0].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box2) {
                let e = this._listBox[1].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box3) {
                let e = this._listBox[2].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box4) {
                let e = this._listBox[3].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box5) {
                let e = this._listBox[4].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box6) {
                let e = this._listBox[5].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            }
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class le extends Laya.Box {
        constructor() {
            super(), this.times = 0;
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._box = this.getChildByName("_box"), this._imgBg = this._box.getChildByName("_imgBg"),
                this._imgBg.skin = "img/connon/titleBg/bg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e._dataSource) {
                e._imgIcon || (e._box = e.getChildByName("_box"), e._txtTitle = e._box.getChildByName("_txtTitle"),
                    e._imgIcon = e._box.getChildByName("_imgIcon")), e._txtTitle.text = v.instacne.shortText(e._dataSource.show_config.title);
                let t = e._dataSource.show_config.image;
                t && (e._imgIcon.skin = t);
            }
        }
    }
    class he extends S.side.SideGridSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.y = t.statusBarHeight;
        }
        onOpened(e) {
            this.zOrder = 2301, this.scene_Data = e, this.addEventListener(), this._listBox = new Array(),
                this._listBox.push(this._box1), this._listBox.push(this._box2), this._listBox.push(this._box3),
                this._listBox.push(this._box4), this._listBox.push(this._box5), this._listBox.push(this._box6),
                u.instance.getFlowConfig(i.wxId, this, this.loadAd);
        }
        loadAd(e) {
            let t = e;
            t.sort(function () {
                return .5 - Math.random();
            });
            let i = t.slice(0, 6);
            for (let e = 0; e < this._listBox.length; e++) this._listBox[e].dataSource = i[e];
            Laya.timer.loop(3e3, this, () => {
                this.ani1.play(0, !1), t.sort(function () {
                    return .5 - Math.random();
                });
                let e = t.slice(0, 6);
                for (let t = 0; t < this._listBox.length; t++) this._listBox[t].dataSource = e[t];
            });
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._box1) {
                let e = this._listBox[0].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box2) {
                let e = this._listBox[1].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box3) {
                let e = this._listBox[2].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box4) {
                let e = this._listBox[3].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box5) {
                let e = this._listBox[4].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box6) {
                let e = this._listBox[5].dataSource;
                e && u.instance.flowNavigate(e.positionId, e.creativeId);
            }
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class ce extends S.side.SideJiugongSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = t.statusBarHeight, this._main.y = t.stage_height / 2 - 220;
        }
        onOpened(e) {
            this.zOrder = 2302, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(i.wxId, this, this.loadAd),
                u.instance.sendEvent(a.Show_gongge), this._listAd.selectEnable = !0, this._listAd.selectHandler = new Laya.Handler(this, this.selectTop);
        }
        loadAd(e) {
            this._listAd.array = e;
        }
        selectTop(e) {
            let t = this._listAd.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId, "SideJiugongScene"), this._listAd.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target == this._imgClose && this.closeJiugong();
        }
        closeJiugong() {
            g.instance.closeJiugong(), g.instance.openLeft(!0);
        }
        showGoldenEgg(e = null) {
            g.instance.closeJiugong(), m.instance.hasBanner && (g.instance.openGoldenEgg(),
                u.instance.sendEvent(a.Start_click));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class de extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"));
                let t = e.dataSource.show_config.image;
                e._txtTitle.text = v.instacne.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class ge extends S.side.SideLeftListSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() { }
        onOpened(e) {
            this.zOrder = 2299, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(i.wxId, this, this.loadAd),
                this._listAd.selectEnable = !0, this._listAd.selectHandler = new Laya.Handler(this, this.selectBanner);
            this._listAd.scrollBar;
            this.isShow = !1, this._imgSlide.visible = !0, this._imgBg.visible = !1, this._boxMain.x = -607,
                1 == e && this.showAd();
        }
        showAd() {
            Laya.Tween.clearAll(this._boxMain), this._imgBg.visible = !0, this._imgSlide.visible = !1,
                Laya.Tween.to(this._boxMain, {
                    x: 0
                }, 400, null, Laya.Handler.create(this, () => {
                    this.isShow = !0;
                }));
        }
        hideAd() {
            Laya.Tween.clearAll(this._boxMain), Laya.Tween.to(this._boxMain, {
                x: -607
            }, 400, null, Laya.Handler.create(this, () => {
                this._imgBg.visible = !1, this._imgSlide.visible = !0, this.isShow = !1;
            }));
        }
        loadAd(e) {
            this._listAd.array = e;
        }
        selectBanner(e) {
            let t = this._listAd.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listAd.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.SHOWLEFTSIDE, this, this.showAd);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.SHOWLEFTSIDE, this, this.showAd);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSlide ? this.showAd() : t == this._imgBg && this.hideAd();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class me extends S.side.SideMoreNativeSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this.zOrder = 2302, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.isTouchAd = !1, this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = A.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = b.instance.nativeAdData(1)),
                null == t) g.instance.closeMoreNativeAdSence(); else {
                A.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, A.instance.nativeAdreportAdShow(),
                            b.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                g.instance.closeMoreNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.GETAPP, this, this.getApp);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.GETAPP, this, this.getApp);
        }
        getApp() {
            A.instance.nativeAdreportAdClick(), b.instance.nativeAdreportAdClick(1);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? l.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0, A.instance.nativeAdreportAdClick(),
                b.instance.nativeAdreportAdClick(1)) : g.instance.closeMoreNativeAdSence() : t != this._imgNative && t != this._imgWatch ||
            (A.instance.nativeAdreportAdClick(),
                b.instance.nativeAdreportAdClick(1));
        }
        onClosed() {
            A.instance.removeNativeAd(), this.removeEventListener();
        }
    }
    class ue extends S.side.SideNativeSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = t.statusBarHeight, this.zOrder = 2301, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = A.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = b.instance.nativeAdData(2)),
                null == t) g.instance.closeNativeAdSence(); else {
                A.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, A.instance.nativeAdreportAdShow(),
                            b.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                g.instance.closeNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.GETAPP, this, this.getApp);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.GETAPP, this, this.getApp);
        }
        getApp() {
            A.instance.nativeAdreportAdClick(), b.instance.nativeAdreportAdClick(2);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? g.instance.closeNativeAdSence() : t == this._imgNative && (A.instance.nativeAdreportAdClick(),
                b.instance.nativeAdreportAdClick(2));
        }
        onClosed() {
            A.instance.removeNativeAd(), b.instance.removeNativeAd(2), this.removeEventListener();
        }
    }
    class Se extends S.side.SideTwoSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = t.statusBarHeight, this._listDown.height = (t.stage_height - t.ore_height - t.statusBarHeight) / 1.5 + 870,
                this._imgKeep.y = t.stage_height - t.ore_height + 1166 - t.statusBarHeight, l.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            b.instance.hideBanner(), m.instance.hideBanner(), this.zOrder = 2303, this.scene_Data = e,
                this.addEventListener(), this.isShow = !1, u.instance.sendEvent(a.Show_juhe2), u.instance.getFlowConfig(i.wxId, this, this.loadAd),
                this._listDown.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                m.instance.hideBanner(), b.instance.hideBanner(), l.islinshiWhite && (this._imgBack.visible = !1,
                    Laya.timer.once(3e3, this, () => {
                        this._imgBack.visible = !0;
                    })), l.islinshiWhite && l.RandomClick ? (this.userCancel(), this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png";
        }
        loadAd(e) {
            this._listDown.array = e, l.islinshiWhite && l.RandomClick && this.jumpRandom();
        }
        jumpRandom() {
            if (l.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene");
            }
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene"), this._listDown.selectedIndex = -1);
        }
        userCancel() {
            !this.isShow && l.islinshiWhite && (this.isShow = !0, this.timer.once(1300, this, () => {
                m.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                    m.instance.destroyBanner();
                });
            }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), s.on(n.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), s.off(n.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgBack ? (g.instance.closeLiangPaiJuhe(), m.instance.showBanner(!0),
                A.instance.showBanner(), E.instance.mainBg()) : t == this._imgKeep && (l.islinshiWhite && l.RandomClick ? this.jumpRandom() : (g.instance.closeLiangPaiJuhe(),
                    m.instance.showBanner(!0), A.instance.showBanner(), E.instance.mainBg()));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Le extends S.tips.MoveTipsSceneUI {
        constructor() {
            super();
        }
        onOpened(e) {
            e || (e = 3e3), Laya.timer.once(e, this, () => {
                Laya.Scene.close(c.MoveTipsScene);
            });
        }
    }
    class ye extends S.tips.TipsSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = 800 + (t.stage_height - t.ore_height) / 2, this.x = (t.ore_width - this.width) / 2,
                this.zOrder = 4e3;
        }
        onOpened(e) {
            this._txtMsg.text = e, this.timer.frameOnce(55, this, this.closeView);
        }
        closeView() {
            this._txtMsg.text = "", this.timer.clearAll(this), this.close();
        }
    }
    class pe {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/scene/BoxScene.ts", p), e("script/scene/Item/box1.ts", w), e("script/scene/Item/box2.ts", f),
                e("script/scene/Item/box3.ts", _), e("script/scene/LoadingScene.ts", H), e("side/item/SideBoxItem.ts", W),
                e("side/item/VScrollBarChange.ts", K), e("base/FitTheScreen.ts", F), e("script/scene/LoseScene.ts", Y),
                e("script/scene/LoseTwiceScene.ts", X), e("script/scene/LuckBoxScene.ts", z), e("script/scene/MainScene.ts", Q),
                e("script/scene/SelectSkinScene.ts", $), e("script/scene/SkinTryScene.ts", Z), e("script/scene/WinScene.ts", ee),
                e("side/GoldenEggScene.ts", te), e("side/MoreGameScene.ts", ie), e("side/item/HScrollBarChange.ts", se),
                e("side/item/SideBoxItem1.ts", ne), e("side/SideBotListScene.ts", ae), e("side/item/SideBotItem.ts", oe),
                e("side/SideDoubleListScene.ts", re), e("side/item/SideDoubleListItem.ts", le),
                e("side/SideGridScene.ts", he), e("side/SideJiugongScene.ts", ce), e("side/item/SideLeftItem.ts", de),
                e("side/SideLeftListScene.ts", ge), e("side/SideMoreNativeScene.ts", me), e("side/SideNativeScene.ts", ue),
                e("side/SideTwoScene.ts", Se), e("tips/MoveTipsScene.ts", Le), e("tips/TipsScene.ts", ye);
        }
    }
    pe.width = 750, pe.height = 1334, pe.scaleMode = "exactfit", pe.screenMode = "none",
        pe.alignV = "middle", pe.alignH = "center", pe.startScene = "scene/LoadingScene.scene",
        pe.sceneRoot = "", pe.debug = !1, pe.stat = !1, pe.physicsDebug = !1, pe.exportSceneToJson = !0,
        pe.init();
    class ve {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new ve();
        }
        init() {
            Laya.Browser.onVVMiniGame && (this.qg = Laya.Browser.window.qg, this.qg.tmSDK.init({
                hideRequestLog: !1,
                appVersion: t.version
            }));
        }
        login(e, i) {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.login().then(s => {
                console.log(s), t.openId = s.open_id, t.login_city = s.login_city, null != t.login_city && "" != t.login_city || o.instacne.getAddress(),
                    e && i && i.apply(e);
            });
        }
        checkFlowIsOpen(e, t, i) {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.checkFlowIsOpen({
                positionId: e
            }).then(({ isOpen: e }) => {
                i.apply(t, [e]), console.log("该广告位是否开启:", e);
            });
        }
        getFlowConfig(e, t, i, s = !0) {
            let n = this;
            if (Laya.Browser.onVVMiniGame) if (n.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            } else n.qg.tmSDK.getFlowConfig({
                positionId: e
            }).then(a => {
                if (n.flowConfig[e] = a, i && t) if (s) {
                    let s = n.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [n.flowConfig[e]]);
            });
        }
        flowNavigate(e, t, i = "") {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.flowNavigate({
                positionId: e,
                creativeId: t
            }).then(t => {
                if (this.flowConfig[e] = t, "navigateToMiniProgram:fail cancel" == t.navigateMessage.errMsg) s.event(n.USERCANCEL); else if ("navigateToMiniProgram:ok" == t.navigateMessage.errMsg) switch (s.event(n.USERJUMP),
                    i) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            ve.instance.sendEvent(a.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            ve.instance.sendEvent(a.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            ve.instance.sendEvent(a.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            ve.instance.sendEvent(a.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                t ? (l.OpenClick = t.OpenClick, l.OpenVideo = t.OpenVideo, l.blackIPCityArr = t.blackIPCityArr,
                    l.useSetWhite = t.useSetWhite, l.ishutui = t.ishutui, l.without_sceneList = t.without_sceneList,
                    l.openJiugong = t.openJiugong, l.isJump = t.isJump, l.RandomClick = t.RandomClick,
                    l.probability = t.probability, b.instance.whitechangeBannerTime = 1e3 * t.refreshTime,
                    l.reSetWhite(t.posList)) : console.warn("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    new class {
        constructor() {
            let e = new Config3D();
            window.Laya3D ? Laya3D.init(pe.width, pe.height, e, Laya.Handler.create(this, this.initMain)) : (Laya.init(pe.width, pe.height, Laya.WebGL),
                this.initMain());
        }
        initMain() {
            Laya.stage.scaleMode = pe.scaleMode, Laya.stage.screenMode = pe.screenMode, Laya.stage.alignV = pe.alignV,
                Laya.stage.alignH = pe.alignH, Laya.URL.exportSceneToJson = pe.exportSceneToJson;
            window.yad = platform.getInstance().createLogo();
            window.yad.scale(0.9, 0.9);
            window.yad.top = 0;
            window.yad.right = 0;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            this.startNorainGame(), Laya.EventDispatcher;
        }
        startNorainGame() {
            let e = this;
            if (t.isDebug && Laya.Stat.show(0, 100), Laya.MouseManager.multiTouchEnabled = !1,
                t.isMini) {
                let e = t.$objcet.getLaunchOptionsSync();
                if (t.scene = e.scene, null != e && "" != e) {
                    let t = e.query.wxgamecid, i = e.query.channelCode;
                    l.pos = e.query.pos, t || i ? (l.isWhite = !0, u.instance.sendEvent(a.Enter_whrite)) : (u.instance.sendEvent(a.Enter_black),
                        l.isWhite = !1);
                }
                t.$objcet.onShow(e => {
                    E.instance.isPlaying && E.instance.mainBg();
                }), t.$objcet.getSystemInfo({
                    success: function (e) {
                        e.windowWidth > e.windowHeight ? (t.stage_height = t.ore_width / e.windowHeight * e.windowWidth,
                            t.statusBarHeight = e.statusBarHeight * t.ore_width / e.windowHeight) : (t.stage_height = t.ore_width / e.windowWidth * e.windowHeight,
                                t.statusBarHeight = e.statusBarHeight * t.ore_width / e.windowWidth);
                    }
                });
            } else t.stage_height = t.ore_width / Laya.stage.width * Laya.stage.height;
            Laya.Browser.onMiniGame ? (m.instance.init(), t.$objcet.showShareMenu({
                withShareTicket: !0
            }), u.instance.init(), u.instance.login(e, () => {
                u.instance.getAppJSONConfig(), u.instance.getFlowConfig(i.wxId, e, t => {
                    e.startGame();
                });
            })) : Laya.Browser.onQGMiniGame ? (A.instance.initData(), r.instance.init(), r.instance.login(e, () => {
                r.instance.getAppJSONConfig();
            }), Laya.timer.once(300, e, () => {
                e.startGame();
            })) : Laya.Browser.onVVMiniGame ? (b.instance.initData(), ve.instance.init(), ve.instance.getAppJSONConfig(),
                e.startGame()) : e.startGame();
        }
        startGame() {
            if (-1 != l.pos && null != l.pos && null != l.pos && l.theposList && l.theposList.length > 0) {
                for (let e = 0; e < l.theposList.length; e++) if (l.pos == l.theposList[e]) return void Laya.Scene.open(c.LoadingScene, !1);
                Laya.Scene.open(c.BoxScene, !1);
            } else Laya.Scene.open(c.LoadingScene, !1);
        }
    }();
}();