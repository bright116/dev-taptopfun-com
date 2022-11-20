!function () {
    "use strict";
    class e {
        constructor() { }
        static on(t, i, s, a = null) {
            e._dspt.on(t, i, s, a);
        }
        static once(t, i, s, a) {
            e._dspt.once(t, i, s, a);
        }
        static off(t, i, s, a = !1) {
            e._dspt.off(t, i, s, a);
        }
        static event(t, i) {
            e._dspt.event(t, i);
        }
        static hasListener(t) {
            return e._dspt.hasListener(t);
        }
        static offAll(t) {
            e._dspt.offAll(t);
        }
        static offAllCaller(t) {
            e._dspt.offAllCaller(t);
        }
    }
    e._dspt = new Laya.EventDispatcher();
    class t { }
    t.GOLD = "Archers-io-gold", t.ISSOUND = "Archers-io-issound", t.ISMUSIC = "Archers-io-ismusic", t.ISVIBRATE = "Archers-io-isvibrate",
        t.LEVELINDEX = "Archers-io-levelindex", t.ISWHITE = "Archers-io-iswhite", t.SKININDEX = "Archers-io-skinindex", t.UNLOCKSKINLIST = "Archers-io-unlockskinlist";
    class i {
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
            return this._gold || (this._gold = Number(Laya.LocalStorage.getItem(t.GOLD))), this._gold;
        }
        static set gold(e) {
            this._gold = e, Laya.LocalStorage.setItem(t.GOLD, this._gold.toString());
        }
        static get skinUrl() {
            return this._skinUrl + this._skinList[this.skinIndex];
        }
        static get skinIndex() {
            return null == Laya.LocalStorage.getItem(t.SKININDEX) || null == Laya.LocalStorage.getItem(t.SKININDEX) || "" == Laya.LocalStorage.getItem(t.SKININDEX) ? (Laya.LocalStorage.setItem(t.SKININDEX, "0"),
                0) : Number(Laya.LocalStorage.getItem(t.SKININDEX));
        }
        static set skinIndex(e) {
            Laya.LocalStorage.setItem(t.SKININDEX, e.toString());
        }
        static get unlockSkinList() {
            if (null == Laya.LocalStorage.getItem(t.UNLOCKSKINLIST) || null == Laya.LocalStorage.getItem(t.UNLOCKSKINLIST) || "" == Laya.LocalStorage.getItem(t.UNLOCKSKINLIST)) {
                let e = [0];
                return Laya.LocalStorage.setItem(t.UNLOCKSKINLIST, JSON.stringify(e)), e;
            }
            return JSON.parse(Laya.LocalStorage.getItem(t.UNLOCKSKINLIST));
        }
        static set unlockSkinList(e) {
            Laya.LocalStorage.setItem(t.UNLOCKSKINLIST, JSON.stringify(e));
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
            return -1 == this._levelIndex ? (this._levelIndex = Number(Laya.LocalStorage.getItem(t.LEVELINDEX)),
                0 == this._levelIndex ? (this._levelIndex = 1, Laya.LocalStorage.setItem(t.LEVELINDEX, this._levelIndex.toString()),
                    this._levelIndex) : this._levelIndex) : this._levelIndex;
        }
        static set levelIndex(e) {
            this._levelIndex = e, Laya.LocalStorage.setItem(t.LEVELINDEX, this._levelIndex.toString());
        }
        static shareList() {
            return [];
        }
        static get showLog() {
            return !!this.isDebug && this._showLog;
        }
    }
    i.stage_width = 750, i.stage_height = 1334, i.ore_height = 1334, i.ore_width = 750,
        i.statusBarHeight = 0, i.currentTime = 0, i.scene = 0, i._isMini = -1, i._objcet = null,
        i._gold = 0, i.isloadingScene = !1, i.noAdBanner = !1, i.isLoadingVideo = !1, i.openId = "",
        i.login_city = "", i.isGameStart = !1, i.goldEggValue = .6, i.startTime = -1, i._skinUrl = "",
        i._skinList = [], i.trySkinTimes = 0, i.trySkinIndex = -1, i._levelIndex = -1, i.getGold = 40,
        i.watchADGold = 200, i.surl = "", i.version = "1.0.0", i.appName = "", i.AppId = "",
        i.isDebug = !1, i._showLog = !0, i.subpackageName = ["subpackage"], i.maxLevel = 23,
        i.skinNum = 6, i.luckBoxTime = 0, i.playerSc = .11, i.isLoadLevel = !1, i.groundRad = 65,
        i.lensd = .7, i.npcNum = 8, i.gameTimeOut = !1, i.isShowArrow = !0;
    class s { }
    s.wxId = "1340217";
    class a { }
    a.GOLDCHANGE = "goldchange", a.SOUNDCHANGE = "soundchange", a.MUSICCHANGE = "musicchange",
        a.VIBRATECHANGE = "vibartechange", a.SHOWLEFTSIDE = "showleftside", a.SKINCHANGE = "skinchange",
        a.STAGERESIZE = "stageresize", a.USERJUMP = "userjump", a.GETAPP = "getApp", a.ONSHOWNAME = "onshowname",
        a.ONHIDENAME = "onhidename", a.TOUCHBANNER = "touchbanner", a.ONSHOW = "onshow",
        a.ONHIDE = "onhide", a.NPCREADY = "npcready", a.JIUGONGCLOSE = "jiugongclose", a.USERCANCEL = "usercancel",
        a.SKINJUMP = "skinjump", a.LOADFINISH = "loadfinish", a.GAMEREADY = "readygame",
        a.GAMESTART = "gamestart", a.GAMEOVER = "gameover", a.RESETGAME = "resetgame", a.GAMELOSE = "gamelose",
        a.GAMEWIN = "gamewin", a.CHANGECAMERA = "changecamera", a.FATHERADD = "fatheradd",
        a.FATHERREMOVE = "fatherremove", a.BEKILL = "bekill", a.GETITEM = "getitem", a.CHANGENAME = "changename";
    class n { }
    n.Load_start = "Load_start", n.load_finish = "load_finish", n.enter_main = "enter_main",
        n.Click_startGame = "Click_startGame", n.Enter_whrite = "Enter_whrite", n.Enter_black = "Enter_black",
        n.Enter_linwrite = "Enter_linwrite", n.Start_video = "Start_video", n.Start_click = "Start_click",
        n.Game_pass = "Game_pass", n.Game_fail = "Game_fail", n.Video_show = "Video_show",
        n.Video_finish = "Video_finish", n.Click_show = "Click_show", n.Click_click = "Click_click",
        n.Show_gongge = "Show_gongge", n.Jump_gongge = "Jump_gongge", n.Show_juhe1 = "Show_juhe1",
        n.Jump_juhe1 = "Jump_juhe1", n.Show_juhe2 = "Show_juhe2", n.Jump_juhe2 = "Jump_juhe2",
        n.show_relive = "show_relive", n.show_jiesuan = "show_jiesuan", n.Jump_jiesuan = "Jump_jiesuan";
    class o {
        static get instacne() {
            return o._instance ? o._instance : o._instance = new o();
        }
        httpRequest(e, t, s, a = "") {
            var n = new Laya.HttpRequest();
            n.http.timeout = 5e3, n.once(Laya.Event.COMPLETE, t, s), n.send(i.surl + e, a, "post", "text");
        }
        getAddress() {
            var e = new Laya.HttpRequest();
            e.http.timeout = 5e3, e.once(Laya.Event.COMPLETE, this, e => {
                if (null == i.login_city || "" == i.login_city) {
                    let t = e.toString().split("=");
                    if (null != t[1] && "" != t[1]) {
                        let e = t[1].substring(1, t[1].length - 1), s = JSON.parse(e);
                        i.login_city = s.cname;
                    }
                }
            }), e.send("");
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
                appVersion: i.version
            }));
        }
        login(e, t) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.login().then(s => {
                console.log(s), i.openId = s.open_id, i.login_city = s.login_city, null != i.login_city && "" != i.login_city || o.instacne.getAddress(),
                    e && t && t.apply(e);
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
            let a = this;
            if (Laya.Browser.onQGMiniGame) if (a.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            } else a.qg.tmSDK.getFlowConfig({
                positionId: e
            }).then(n => {
                if (a.flowConfig[e] = n, i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            });
        }
        flowNavigate(t, i, s = "") {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.flowNavigate({
                positionId: t,
                creativeId: i
            }).then(i => {
                if (this.flowConfig[t] = i, "navigateToMiniProgram:fail cancel" == i.navigateMessage.errMsg) e.event(a.USERCANCEL); else if ("navigateToMiniProgram:ok" == i.navigateMessage.errMsg) switch (e.event(a.USERJUMP),
                    s) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            r.instance.sendEvent(n.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            r.instance.sendEvent(n.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            r.instance.sendEvent(n.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            r.instance.sendEvent(n.Jump_jiesuan);
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
                    h.probability = t.probability, h.reSetWhite(t.posList), h.OpenClick = t.OpenClick,
                        h.ishutui = t.ishutui, h.OpenVideo = t.OpenVideo, h.blackIPCityArr = t.blackIPCityArr,
                        h.useSetWhite = t.useSetWhite, h.without_sceneList = t.without_sceneList, h.openJiugong = t.openJiugong,
                        h.isJump = t.isJump, h.RandomClick = t.RandomClick;
                    let e = t.crazy_click_config;
                    null != e && (h.space_level = e.space_level, h.start_level = e.start_level, h.switchVer = e.switchVer);
                } else console.log("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    class h {
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
        static reSetWhite(e) {
            if (this.theposList = e, -1 != this.pos && null != this.pos && null != this.pos && e && e.length > 0) for (let i = 0; i < e.length; i++) this.pos == e[i] && (this._isWhite = 0,
                Laya.LocalStorage.setItem(t.ISWHITE, "false"), this.isPos = !1);
        }
        static get isWhite() {
            if (-1 != this._isWhite) return !!this._isWhite;
            {
                let e = Laya.LocalStorage.getItem(t.ISWHITE);
                if ("true" == e) return this._isWhite = 1, !!this._isWhite;
                if ("false" == e) return this._isWhite = 0, !!this._isWhite;
                if (!e) return this._isWhite = 0, Laya.LocalStorage.setItem(t.ISWHITE, "false"),
                    !!this._isWhite;
            }
        }
        static set isWhite(e) {
            if (null == Laya.LocalStorage.getItem(t.ISWHITE) || "" == Laya.LocalStorage.getItem(t.ISWHITE)) if (e) {
                this._isWhite = 1, Laya.LocalStorage.setItem(t.ISWHITE, "true");
                Laya.LocalStorage.getItem(t.ISWHITE);
            } else this._isWhite = 0, Laya.LocalStorage.setItem(t.ISWHITE, "false");
        }
        static get islinshiWhite() {
            if (this.isWhite) return !0;
            if (-1 == this._isLinshiWhiteList) {
                if (this.useSetWhite) {
                    let e = !0, t = !0;
                    if (this.without_sceneList) for (let t = 0; t < this.without_sceneList.length; t++) {
                        let s = this.without_sceneList[t];
                        i.scene == s && (console.log("---------场景值是黑名单1-----------"), e = !1);
                    }
                    if (this.blackIPCityArr) for (let e = 0; e < this.blackIPCityArr.length; e++) {
                        let s = this.blackIPCityArr[e];
                        console.log(s), -1 != i.login_city.indexOf(s) && (console.log("---------场景值是黑名单2-----------"),
                            t = !1);
                    }
                    return e && t ? (u.instance.sendEvent(n.Enter_linwrite), r.instance.sendEvent(n.Enter_linwrite),
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
                for (let t = 0; t < this.blackIPCityArr.length; t++) {
                    let s = this.blackIPCityArr[t];
                    if (-1 != i.login_city.indexOf(s)) {
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
    h.switchVer = !1, h.start_level = 1, h.space_level = 1, h.useSetWhite = !1, h.without_sceneList = new Array(),
        h.blackIPCityArr = new Array(), h._OpenClick = !1, h._OpenVideo = !1, h.crazy_click_config_version = 16,
        h.pos = -1, h.ishutui = !1, h._ishutui = -1, h.everyclick = !1, h.isPos = !0, h.openJiugong = !1,
        h.isShowWuchu = !1, h._isWhite = -1, h.isJump = !1, h.RandomClick = !1, h._isLinshiWhiteList = -1,
        h.probability = 0, h.wuchuTimes = 0;
    class l {
        static log(e, ...t) {
            i.showLog && console.log(e, ...t);
        }
        static info(e, ...t) {
            i.showLog && console.info(e, ...t);
        }
        static error(e, ...t) {
            i.showLog && console.error(e, ...t);
        }
        static warn(e, ...t) {
            i.showLog && console.warn(e, ...t);
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
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideMoreGameScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideMoreGameScene] = !0,
                Laya.Scene.open(c.SideMoreGameScene, !1, e)));
        }
        closeJuhe() {
            Laya.Scene.close(c.SideMoreGameScene), this._dicView[c.SideMoreGameScene] = !1;
        }
        openLiangPaiJuhe(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideTwoScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideTwoScene] = !0,
                Laya.Scene.open(c.SideTwoScene, !1, e)));
        }
        closeLiangPaiJuhe() {
            Laya.Scene.close(c.SideTwoScene), this._dicView[c.SideTwoScene] = !1;
        }
        openBanner(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideBannerScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideBannerScene] = !0,
                Laya.Scene.open(c.SideBannerScene, !1, e)));
        }
        closeBanner(e = null) {
            Laya.Scene.close(c.SideBannerScene), this._dicView[c.SideBannerScene] = !1;
        }
        openDuilian(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && h.islinshiWhite && (this._dicView[c.SideDoubleScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideDoubleScene] = !0,
                Laya.Scene.open(c.SideDoubleScene, !1, e)));
        }
        closeDuilian() {
            Laya.Scene.close(c.SideDoubleScene), this._dicView[c.SideDoubleScene] = !1;
        }
        openLeft(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && h.islinshiWhite && (this._dicView[c.SideLeftListScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideLeftListScene] = !0,
                Laya.Scene.open(c.SideLeftListScene, !1, e)));
        }
        closeLeft() {
            Laya.Scene.close(c.SideLeftListScene), this._dicView[c.SideLeftListScene] = !1;
        }
        openLiugong(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideGridScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideGridScene] = !0,
                Laya.Scene.open(c.SideGridScene, !1, e)));
        }
        closeLiugong() {
            Laya.Scene.close(c.SideGridScene), this._dicView[c.SideGridScene] = !1;
        }
        openJiugong(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideJiugongScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideJiugongScene] = !0,
                Laya.Scene.open(c.SideJiugongScene, !1, e)));
        }
        closeJiugong() {
            Laya.Scene.close(c.SideJiugongScene), this._dicView[c.SideJiugongScene] = !1;
        }
        openGoldenEgg(e = null) {
            Laya.Browser.onMiniGame && h.isShowHu && (this._dicView[c.SideGoldenEggScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideGoldenEggScene] = !0,
                Laya.Scene.open(c.SideGoldenEggScene, !1, e)));
        }
        closeGoldenEgg() {
            Laya.Scene.close(c.SideGoldenEggScene), this._dicView[c.SideGoldenEggScene] = !1;
        }
        openNativeAdScene(e = null) {
            (Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) && (this._dicView[c.SideNativeScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideNativeScene] = !0,
                Laya.Scene.open(c.SideNativeScene, !1, e)));
        }
        closeNativeAdSence() {
            Laya.Scene.close(c.SideNativeScene), this._dicView[c.SideNativeScene] = !1;
        }
        openMoreNativeAdScene(e = null) {
            Laya.Browser.onVVMiniGame && (this._dicView[c.SideMoreNativeScene] ? console.log(c.SideMoreNativeScene + "頁面已經存在") : (this._dicView[c.SideMoreNativeScene] = !0,
                Laya.Scene.open(c.SideMoreNativeScene, !1, e)));
        }
        closeMoreNativeAdSence() {
            Laya.Scene.close(c.SideMoreNativeScene), this._dicView[c.SideMoreNativeScene] = !1;
        }
    }
    class m {
        constructor() {

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
        showBanner(e = !1, t = !0) {

        }
        showLoadedBanner() {

        }
        get hasBanner() {

        }
        getBannerList() {
        }
        hideBanner() {

        }
        loadBanner(e, t = !1) {

        }
        changeBannerByTime() {

        }
        destroyBanner() {

        }
        createVideo() {

        }
        nullFun() { }
        showVideo(e, t) {
            platform.getInstance().showReward(() => {
                t && t.bind(e)(1);
            })
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
                appVersion: i.version
            }));
        }
        login(e, t) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.login().then(s => {
                console.log(s), i.openId = s.open_id, i.login_city = s.login_city, null != i.login_city && "" != i.login_city || o.instacne.getAddress(),
                    e && t && t.apply(e);
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
            let a = this;
            if (Laya.Browser.onMiniGame) if (a.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            } else a.wx.tmSDK.getFlowConfig({
                positionId: e
            }).then(n => {
                if (a.flowConfig[e] = n, i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            });
        }
        flowNavigate(t, i, s = "") {
            Laya.Browser.onMiniGame && this.wx.tmSDK.flowNavigate({
                positionId: t,
                creativeId: i
            }).then(i => {
                if (this.flowConfig[t] = i, "navigateToMiniProgram:fail cancel" == i.navigateMessage.errMsg) e.event(a.USERCANCEL); else if ("navigateToMiniProgram:ok" == i.navigateMessage.errMsg) switch (e.event(a.USERJUMP),
                    s) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            u.instance.sendEvent(n.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            u.instance.sendEvent(n.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            u.instance.sendEvent(n.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            u.instance.sendEvent(n.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                t ? (h.ishutui = t.ishutui, h.OpenClick = t.OpenClick, h.OpenVideo = t.OpenVideo,
                    h.blackIPCityArr = t.blackIPCityArr, h.useSetWhite = t.useSetWhite, h.without_sceneList = t.without_sceneList,
                    h.space_level = t.crazy_click_config.space_level, h.start_level = t.crazy_click_config.start_level,
                    h.switchVer = t.crazy_click_config.switchVer, h.openJiugong = t.openJiugong, h.isJump = t.isJump,
                    h.RandomClick = t.RandomClick, h.reSetWhite(t.posList), h.probability = t.probability,
                    m.instance.refreshTime = 1e3 * t.refreshTime, h.everyclick = t.everyclick) : console.warn("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    var p, y, L, S = Laya.Scene, b = Laya.ClassUtils.regClass;
    !function (e) {
        !function (e) {
            class t extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/BoxScene");
                }
            }
            e.BoxSceneUI = t, b("ui.scene.BoxSceneUI", t);
            class i extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoadingScene");
                }
            }
            e.LoadingSceneUI = i, b("ui.scene.LoadingSceneUI", i);
            class s extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseScene");
                }
            }
            e.LoseSceneUI = s, b("ui.scene.LoseSceneUI", s);
            class a extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseTwiceScene");
                }
            }
            e.LoseTwiceSceneUI = a, b("ui.scene.LoseTwiceSceneUI", a);
            class n extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LuckBoxScene");
                }
            }
            e.LuckBoxSceneUI = n, b("ui.scene.LuckBoxSceneUI", n);
            class o extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/MainScene");
                }
            }
            e.MainSceneUI = o, b("ui.scene.MainSceneUI", o);
            class r extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SelectSkinScene");
                }
            }
            e.SelectSkinSceneUI = r, b("ui.scene.SelectSkinSceneUI", r);
            class h extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SkinTryScene");
                }
            }
            e.SkinTrySceneUI = h, b("ui.scene.SkinTrySceneUI", h);
            class l extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/WinScene");
                }
            }
            e.WinSceneUI = l, b("ui.scene.WinSceneUI", l);
        }(e.scene || (e.scene = {}));
    }(p || (p = {})), function (e) {
        !function (e) {
            class t extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/GoldenEggScene");
                }
            }
            e.GoldenEggSceneUI = t, b("ui.side.GoldenEggSceneUI", t);
            class i extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/MoreGameScene");
                }
            }
            e.MoreGameSceneUI = i, b("ui.side.MoreGameSceneUI", i);
            class s extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideBotListScene");
                }
            }
            e.SideBotListSceneUI = s, b("ui.side.SideBotListSceneUI", s);
            class a extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideDoubleListScene");
                }
            }
            e.SideDoubleListSceneUI = a, b("ui.side.SideDoubleListSceneUI", a);
            class n extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideGridScene");
                }
            }
            e.SideGridSceneUI = n, b("ui.side.SideGridSceneUI", n);
            class o extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideJiugongScene");
                }
            }
            e.SideJiugongSceneUI = o, b("ui.side.SideJiugongSceneUI", o);
            class r extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideLeftListScene");
                }
            }
            e.SideLeftListSceneUI = r, b("ui.side.SideLeftListSceneUI", r);
            class h extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideMoreNativeScene");
                }
            }
            e.SideMoreNativeSceneUI = h, b("ui.side.SideMoreNativeSceneUI", h);
            class l extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideNativeScene");
                }
            }
            e.SideNativeSceneUI = l, b("ui.side.SideNativeSceneUI", l);
            class c extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideTwoScene");
                }
            }
            e.SideTwoSceneUI = c, b("ui.side.SideTwoSceneUI", c);
        }(e.side || (e.side = {}));
    }(p || (p = {})), function (e) {
        !function (e) {
            class t extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/ConsoleScene");
                }
            }
            e.ConsoleSceneUI = t, b("ui.tips.ConsoleSceneUI", t);
            class i extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/MoveTipsScene");
                }
            }
            e.MoveTipsSceneUI = i, b("ui.tips.MoveTipsSceneUI", i);
            class s extends S {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/TipsScene");
                }
            }
            e.TipsSceneUI = s, b("ui.tips.TipsSceneUI", s);
        }(e.tips || (e.tips = {}));
    }(p || (p = {}));
    class v extends p.scene.BoxSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight, this._main.vScrollBarSkin = "", this._main.height = 1334 - i.statusBarHeight + (i.stage_height - i.ore_height);
        }
        onOpened() {
            this._listHot.selectHandler = new Laya.Handler(this, this.selectHot), this._listJing.selectHandler = new Laya.Handler(this, this.selectJing),
                this._listHot.selectHandler = new Laya.Handler(this, this.selectNew), this._listHot.selectEnable = !0,
                this._listJing.selectEnable = !0, this._listNew.selectEnable = !0, u.instance.getFlowConfig(s.wxId, this, this.loadAd1),
                Laya.timer.once(200, this, () => {
                    u.instance.getFlowConfig(s.wxId, this, this.loadAd2);
                }), Laya.timer.once(400, this, () => {
                    u.instance.getFlowConfig(s.wxId, this, this.loadAd3);
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
    class f {
        constructor() {
            this.seed = 5;
        }
        static get instacne() {
            return this._instance ? this._instance : this._instance = new f();
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
            let s = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)), a = f.instacne.getRad(e, t, s);
            return 180 / Math.PI * a - 90 * (i ? -1 : 1);
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
                e._txtTitle && (e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title),
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
                e._txtTitle && (e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class A extends Laya.Box {
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
                e._txtTitle && (e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class C {
        constructor() {

        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new C();
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
    class x {
        static get unityRES() {
            return this.groundRES.concat(this.plusobjRES).concat(this.arrowRES).concat(this.skinRES).concat(this.shieldRES).concat(this.speedTrailRES).concat(this.itemRES).concat(this.seaRES).concat(this.skyBoxRES).concat(this.playerMidRES).concat(this.crateRES).concat(this.killobjRES).concat(this.playerObjRES);
        }
    }
    x.seaRES = ["res3d/sea/SeaObj.lh"], x.skyBoxRES = ["res3d/skybox/skyBox.lmat", "res3d/skybox/skyBoxDark.lmat"],
        x.playerNameTXT = "res3d/playerName.txt", x.arrowRES = ["res3d/arrow/Arrow.lh"],
        x.playerMidRES = ["res3d/playerMid/playerMid.lh"], x.groundRES = ["res3d/ground/Assets/Material/Ground.lmat", "res3d/ground/Assets/Material/Ground 1.lmat", "res3d/ground/Assets/Material/Ground 2.lmat", "res3d/ground/Assets/Material/Ground 3.lmat", "res3d/ground/Assets/Material/Ground 4.lmat", "res3d/ground/Ground.lh"],
        x.plusobjRES = ["res3d/plusobj/PlusObj.lh"], x.crateRES = ["res3d/crate/Crate.lh"],
        x.killobjRES = ["res3d/killobj/killObj.lh"], x.playerObjRES = ["res3d/player_1.lh"],
        x.skinRES = ["res3d/skin/skin0.lmat", "res3d/skin/skin1.lmat", "res3d/skin/skin2.lmat", "res3d/skin/skin3.lmat", "res3d/skin/skin4.lmat", "res3d/skin/skin5.lmat", "res3d/skin/skin6.lmat"],
        x.shieldRES = ["res3d/Shield1.lh"], x.speedTrailRES = ["res3d/FX_PlayerProp1.lh"],
        x.itemRES = ["res3d/item/ItemObj.lh"];
    class I {
        constructor() {

        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new I();
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
            this.isPlaying = !1;
        }
        static get instance() {
            return this._instance || (this._instance = new E()), this._instance;
        }
        get isSound() {
            return !!Laya.LocalStorage.getItem(t.ISSOUND) || (null == Laya.LocalStorage.getItem(t.ISSOUND) || null == Laya.LocalStorage.getItem(t.ISSOUND) || "" == Laya.LocalStorage.getItem(t.ISSOUND) ? (Laya.LocalStorage.setItem(t.ISSOUND, "1"),
                !0) : "0" != Laya.LocalStorage.getItem(t.ISSOUND) && void 0);
        }
        set isSound(i) {
            let s = i ? "1" : "0";
            Laya.LocalStorage.setItem(t.ISSOUND, s), e.event(a.SOUNDCHANGE);
        }
        get isMusic() {
            return "true" == Laya.LocalStorage.getItem(t.ISMUSIC) || (null == Laya.LocalStorage.getItem(t.ISMUSIC) || null == Laya.LocalStorage.getItem(t.ISMUSIC) || "" == Laya.LocalStorage.getItem(t.ISMUSIC) ? (Laya.LocalStorage.setItem(t.ISMUSIC, "true"),
                !0) : "false" != Laya.LocalStorage.getItem(t.ISMUSIC) && void 0);
        }
        set isMusic(i) {
            let s;
            s = i ? "true" : "false", Laya.LocalStorage.setItem(t.ISMUSIC, s), e.event(a.MUSICCHANGE),
                i ? i && this.bgChannel : this.stopBg();
        }
        stopBg() {
            this.bgChannel && this.bgChannel.pause(), this.isPlaying = !1;
        }
        mainBg() {
            this.isMusic && (this.stopBg(), this.isPlaying = !0, this.bgChannel ? this.bgChannel.resume() : this.bgChannel = Laya.SoundManager.playMusic(i.surl + "sound/bg.mp3", 0));
        }
        loseVoice() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/LoseVoice.wav", 1);
        }
        winVoice() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/WinVoice.wav", 1);
        }
        dao() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/StartCount.wav", 1);
        }
        daoend() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/daoend.wav", 1);
        }
    }
    class M extends Laya.Script3D {
        constructor() {
            super(), this.isLock = !1, this.aimPos = new Laya.Vector3(0, 0, 0), this.aimRot = new Laya.Vector3(0, 0, 0);
        }
        onStart() {
            this.cameraObj = this.owner, this.camera = this.cameraObj.getChildAt(0), this.aimPos = this.camera.transform.localPosition.clone(),
                this.aimRot = this.camera.transform.localRotationEuler.clone();
        }
        onLateUpdate() {
            this.isLock && this.playerObj && (this.cameraObj.transform.position = this.playerObj.transform.position.clone());
            let e = Laya.timer.delta, t = new Laya.Vector3();
            Laya.Vector3.lerp(this.camera.transform.localPosition.clone(), this.aimPos, e / 100, t),
                this.camera.transform.localPosition = t;
        }
    }
    class N {
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
    class k { }
    k.PLAYER = "player", k.WINOBJ = "winobj", k.LOSEOBJ = "loseobj", k.GROUND = "ground",
        k.WINEFFECT = "wineffect", k.PLAYERNAME = "playername", k.PLAYERPOOL = "playerpool",
        k.ARROW = "arrow", k.PLUS = "plus", k.CRATE = "crate", k.KILLOBJ = "killobj", k.SHIELD = "shield",
        k.ITEMOBJ = "itemobj";
    class j extends Laya.Script3D {
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
            this.update(Laya.timer.delta);
        }
        update(e) { }
        positionWorld2local(e, t) {
            let i = new Laya.Vector3(0, 0, 0), s = new Laya.Matrix4x4();
            return t.transform.worldMatrix.invert(s), Laya.Vector3.transformCoordinate(e, s, i),
                i;
        }
    }
    class P extends j {
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
                    this.obj = null, this.destroy()) : (this.obj = null, this.destroy());
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
            this.checkPool && this.objPool.numChildren > 0 && console.log("对象池" + this.objChName + "Pool回收有遗漏");
        }
    }
    class B {
        static get instacne() {
            return this._instance ? this._instance : this._instance = new B();
        }
        get isVibrate() {
            return !!Laya.LocalStorage.getItem(t.ISVIBRATE) || (null == Laya.LocalStorage.getItem(t.ISVIBRATE) || null == Laya.LocalStorage.getItem(t.ISVIBRATE) || "" == Laya.LocalStorage.getItem(t.ISVIBRATE) ? (Laya.LocalStorage.setItem(t.ISVIBRATE, "1"),
                !0) : "0" != Laya.LocalStorage.getItem(t.ISVIBRATE) && void 0);
        }
        set isVibrate(i) {
            let s = i ? "1" : "0";
            Laya.LocalStorage.setItem(t.ISVIBRATE, s), e.event(a.VIBRATECHANGE);
        }
        vibrateShort(e = 15) {
            if (i.isMini) {
                let t = Math.ceil(e / 15), s = 0, a = {
                    count: t,
                    index: s
                };
                Laya.timer.loop(16, a, () => {
                    this.isVibrate ? i.$objcet.vibrateShort() : Laya.timer.clearAll(a), ++s > t && Laya.timer.clearAll(a);
                });
            }
        }
        vibrateLong() {
            i.isMini && i.$objcet.vibrateLong();
        }
    }
    class T {
        static get instance() {
            return this._instance ? this._instance : this._instance = new T();
        }
        init() {
            this.scene2d = new Laya.Scene(), Laya.stage.addChild(this.scene2d), Laya.stage.setChildIndex(this.scene2d, 0),
                this.scene3d = new Laya.Scene3D(), Laya.stage.addChild(this.scene3d), Laya.stage.setChildIndex(this.scene3d, 0),
                this.scene3d.ambientColor = new Laya.Vector3(.5, .5, .5);
        }
    }
    !function (e) {
        e.Dead = "Ani_death2", e.Idle = "Ani_Idle2", e.Move = "Ani_Move2", e.Attack = "Ani_Attack2";
    }(y || (y = {})), function (e) {
        e.gray = "#DDDDDD", e.orange = "#18FF00", e.blue = "#FAFF00", e.green = "#00ACFF",
            e.yellow = "#FF00E8", e.red = "#0075FF", e.verdant = "#FF0000";
    }(L || (L = {}));
    class O extends j {
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
    class G extends O {
        constructor() {
            super(), this.isNull = !1, this.panIndex = 0;
        }
        init() {
            this.obj = this.owner, this.objName = k.CRATE, this.addEventListener(), this.isNull = !1;
        }
        reset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        onLateUpdate() { }
        clearOthers() { }
    }
    class R extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new R();
        }
        init() {
            let e = Laya.loader.getRes(x.crateRES[0]);
            this.objPrefab = e, this.objName = k.CRATE, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        createCrate(e, t = 0) {
            if (i.isGameStart) {
                let i = this.createObj();
                this.objPool.addChild(i), i.transform.position = e, i.transform.localRotationEulerY = t;
                let s = i.addComponent(G);
                this.objscriptList.push(s), s.init();
            }
        }
        getRanCrate(e) {
            let t = new Laya.Vector3(0, 0, 0);
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (!s.isNull) {
                    let i = s.obj.transform.position.clone();
                    Laya.Vector3.distance(e, i) < 999 && (t = i.clone());
                }
            }
            return t;
        }
        isHitCrate(e, t) {
            let i = [];
            for (let s = 0; s < this.objscriptList.length; s++) {
                let a = this.objscriptList[s];
                if (!a.isNull && a.position) {
                    let s = Laya.Vector3.distance(e, a.position);
                    s < t + .5 && s > t - .5 && (i.push(a.position), a.isNull = !0, a.clearObj());
                }
            }
            return i;
        }
        load(e = null) {
            this.objData = e;
        }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class V extends O {
        constructor() {
            super(), this.startH = 0, this.height = 2;
        }
        init() {
            this.obj = this.owner, this.objName = k.KILLOBJ, this.addEventListener(), this.obj.transform.localPosition = new Laya.Vector3(0, this.startH, 0),
                this.upMove();
        }
        upMove() {
            this.vv = this.obj.transform.localPosition.clone(), Laya.Tween.to(this.vv, {
                y: this.height + this.startH,
                update: new Laya.Handler(this, () => {
                    this.obj.transform.localPosition = this.vv;
                })
            }, 500, null, Laya.Handler.create(this, () => {
                this.clearObj();
            }));
        }
        reset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        onUpdate() { }
        clearOthers() {
            Laya.Tween.clearAll(this.vv);
        }
    }
    class D extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new D();
        }
        init() {
            let e = Laya.loader.getRes(x.killobjRES[0]);
            this.objPrefab = e, this.objName = k.KILLOBJ, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        createKill(e, t, i = 2) {
            if (e) {
                let t = this.createObj();
                e.addChild(t);
                let i = t.addComponent(V);
                i.init(), this.objscriptList.push(i);
            }
        }
        load(e = null) {
            this.objData = e;
        }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class H extends Laya.Sprite {
        constructor() {
            super(), this.playerName = "", this.showInside = !1, this.showArrow = !0, this.fontSize = 20,
                this.skinIndex = 0, this.offNum = 60, this.isShow = !1;
        }
        init() {
            this._imgFather = new Laya.Image(), this._imgArrow = new Laya.Image(), this._txtName = new Laya.Label(),
                this.setSkin(), this._imgArrow.visible = !1,
                this._txtName.text = "",//this.playerName, 
                this._txtName.fontSize = this.fontSize, this._imgFather.anchorX = .5,
                this._imgFather.anchorY = .5, this._imgFather.addChild(this._imgArrow), this._imgFather.addChild(this._txtName),
                this._txtName.anchorX = .5, this._txtName.anchorX = .5, this._imgArrow.anchorX = .5,
                this._imgArrow.anchorY = .5, this._txtName.pos(0, -10), this._imgArrow.pos(0, 0),
                this._imgFather.visible = !1, this.objPool.addChild(this._imgFather), this.isShow = !0;
        }
        setSkin() {
            switch (this._txtName.color = he.instance.getColor(this.skinIndex), this.skinIndex) {
                case 0:
                    this._imgArrow.skin = "img/arrow/orange.png";
                    break;

                case 1:
                    this._imgArrow.skin = "img/arrow/blue.png";
                    break;

                case 2:
                    this._imgArrow.skin = "img/arrow/green.png";
                    break;

                case 3:
                    this._imgArrow.skin = "img/arrow/red.png";
                    break;

                case 4:
                    this._imgArrow.skin = "img/arrow/yellow.png";
                    break;

                case 5:
                    this._imgArrow.skin = "img/arrow/verdant.png";
                    break;

                default:
                    this._imgArrow.skin = "img/arrow/gray.png";
            }
            this._imgArrow.scale(.6, .6);
        }
        changeName(e, t = null) {
            this._txtName.text = "";
            // this._txtName && (null != t && this.setSkin(), this._txtName.text = e, this._txtName.pos(0, -10));
        }
        changePos(e) {
            if (ne.instance.camera && e && this.isShow) {
                this._imgFather.visible = !0;
                let t = new Laya.Vector4();
                ne.instance.camera.viewport.project(e, ne.instance.camera.projectionViewMatrix, t),
                    t.x > 0 && t.x < 750 && t.y > 0 && t.y < i.stage_height ? this._imgFather.visible = !1 : this._imgFather.visible = !0;
                let s = Math.sqrt(Math.pow(t.x - i.stage_width / 2, 2) + Math.pow(t.y - i.stage_height / 2, 2)), a = f.instacne.getRad(t.x - i.stage_width / 2, t.y - i.stage_height / 2, s), n = 180 / Math.PI * a - 90;
                n && (this._imgArrow.rotation = -n), t.x < 0 && (t.x = this.offNum), t.y < 0 && (t.y = this.offNum),
                    t.x > 750 && (t.x = 750 - this.offNum), t.y > i.stage_height && (t.y = i.stage_height - this.offNum),
                    this._imgFather.pos(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY);
            }
        }
        clear() {
            this.isShow = !1, this._txtName.removeSelf(), this._txtName.destroy(), this._imgArrow.removeSelf(),
                this._imgArrow.destroy(), this._imgFather.removeSelf(), this._imgFather.destroy(),
                this.destroy();
        }
    }
    class U {
        constructor() {
            this.showInside = !0, this.twoDPlayerNameList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new U();
        }
        init() {
            this.objPool = new Laya.Box(), this.objPool.mouseEnabled = !1, this.objPool.mouseThrough = !0,
                T.instance.scene2d.addChild(this.objPool);
        }
        create2DPlayerName(e, t = 0, i = 30, s = !1, a = !0, n = 0) {
            let o = new H();
            return o.playerName = e, o.skinIndex = t, o.showInside = s, o.fontSize = i, o.showArrow = a,
                o.objPool = this.objPool, o.init(), this.twoDPlayerNameList.push(o), o;
        }
        clear() {
            if (this.twoDPlayerNameList) for (let e = 0; e < this.twoDPlayerNameList.length; e++) {
                this.twoDPlayerNameList[e].clear();
            }
            console.log("清理player2dname完成"), this.twoDPlayerNameList = new Array();
        }
    }
    class J extends O {
        constructor() {
            super(), this.startPos = new Laya.Vector3(0, 0, 0), this.endPos = new Laya.Vector3(0, 0, 0);
        }
        init() {
            this.obj = this.owner, this.objName = k.ARROW, this.addEventListener(), this.obj.transform.position = this.startPos;
            let e = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(this.endPos, this.startPos, e), Laya.Vector3.normalize(e, e);
            let t = f.instacne.getTot(e.x, e.z);
            this.obj.transform.localRotationEuler = new Laya.Vector3(0, t, 0), this.shoot();
        }
        shoot() {
            let e = Laya.Vector3.distance(this.endPos, this.startPos) / .04;
            Laya.Tween.to(this.startPos, {
                x: this.endPos.x,
                z: this.endPos.z,
                update: new Laya.Handler(this, () => {
                    this.obj.transform.position = this.startPos;
                })
            }, e, null, Laya.Handler.create(this, () => {
                this.clearObj();
            }));
        }
        reset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        onUpdate() { }
        clearOthers() { }
    }
    class W extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new W();
        }
        init() {
            let e = Laya.loader.getRes(x.arrowRES[0]);
            this.mat1 = Laya.loader.getRes(x.skinRES[0]), this.mat2 = Laya.loader.getRes(x.skinRES[1]),
                this.mat3 = Laya.loader.getRes(x.skinRES[2]), this.mat4 = Laya.loader.getRes(x.skinRES[3]),
                this.mat5 = Laya.loader.getRes(x.skinRES[4]), this.mat6 = Laya.loader.getRes(x.skinRES[5]),
                this.objPrefab = e, this.objName = k.ARROW, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e;
        }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
        createArrow(e, t, s) {
            if (i.isShowArrow) if (t && s && i.isGameStart) {
                let i = this.createObj();
                switch (e) {
                    case 0:
                        i.meshRenderer.material = this.mat1;
                        break;

                    case 1:
                        i.meshRenderer.material = this.mat2;
                        break;

                    case 2:
                        i.meshRenderer.material = this.mat3;
                        break;

                    case 3:
                        i.meshRenderer.material = this.mat4;
                        break;

                    case 4:
                        i.meshRenderer.material = this.mat5;
                        break;

                    case 5:
                        i.meshRenderer.material = this.mat6;
                }
                this.objPool.addChild(i), t = new Laya.Vector3(t.x, 1, t.z);
                let a = i.addComponent(J);
                a.startPos = t, a.endPos = s, a.init(), this.objscriptList.push(a);
            } else console.log("开始结束位置不对");
        }
    }
    class K {
        static get instance() {
            return this._instance ? this._instance : this._instance = new K();
        }
        init() {
            this.pool = new Laya.Sprite3D(), T.instance.scene3d.addChild(this.pool);
        }
        clear() {
            this.pool.numChildren > 0 && console.log("Idle池子还有对象");
        }
    }
    class F extends O {
        constructor() {
            super(), this.isPlayer = !1, this.isMove = !1, this.posIndex = -1, this.isLowModule = !1,
                this.isAttack = !1, this.useSpeed = !1, this.playerSkinIndex = 0, this.nowAni = "",
                this.fatherIndex = -1, this.isDead = !1, this.panIndex = 0, this.isHit = !1;
        }
        init() {
            this.obj = this.owner, Laya.timer.clearAll(this), this.isDead = !1, this.objName = k.PLAYER,
                this.playerRot = this.obj.getChildAt(0), this.playerRot.active = !0, this.playerRot.transform.localRotationEulerY = 180,
                this.spSkin = this.obj.getChildAt(0).getChildAt(1), this.shadow1 = this.obj.getChildAt(0).getChildAt(2),
                this.shadow2 = this.obj.getChildAt(0).getChildAt(3), this.shadow1.active = !1, this.playerAni = this.obj.getChildAt(0).getComponent(Laya.Animator),
                this.hatPoint = this.obj.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0),
                this.bowPoint = this.obj.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(1).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2),
                this.hatRing = this.obj.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(3),
                this.speedPoint = this.obj.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(1),
                this.mat1 = Laya.loader.getRes(x.skinRES[0]), this.mat2 = Laya.loader.getRes(x.skinRES[1]),
                this.mat3 = Laya.loader.getRes(x.skinRES[2]), this.mat4 = Laya.loader.getRes(x.skinRES[3]),
                this.mat5 = Laya.loader.getRes(x.skinRES[4]), this.mat6 = Laya.loader.getRes(x.skinRES[5]),
                this.mat7 = Laya.loader.getRes(x.skinRES[6]), this.bowPoint.transform.localPosition = new Laya.Vector3(-.3, -.25, 0),
                this.bowPoint.transform.localRotationEuler = new Laya.Vector3(0, 0, -90), this.changeSkin(),
                this.addEventListener(), this.initOther(), this.useSpeed && this.addSpeedProp();
        }
        onReset() {
            this.isPlayer = !1, this.isMove = !1, this.posIndex = -1, this.isDead = !1, this.fatherIndex = -1,
                this.panIndex = 0, this.nowAni = "", this.playerRot.transform.localRotationEulerY = 180,
                this.targetPos = new Laya.Vector3(0, 0, 0), this.playerRot.active = !0, this.playerRot.transform.localPositionY = 0,
                this.isLowModule = !1, this.speedTrail = this.speedPoint.getChildAt(0), this.speedTrail && (this.speedTrail.active = !1);
        }
        initOther() { }
        reset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        movePlayer(e, t) {
            if (!this.isDead) {
                let i = 0;
                i = f.instacne.getTot(e, t), this.playerRot.transform.localRotationEulerY = i, this.isMove = !0,
                    this.changeAni(y.Move, !0);
            }
        }
        stopMove() {
            this.isMove = !1;
        }
        changePlayerPos(e, t) {
            if (!this.isDead) {
                let s = 0;
                s = 360 / e * t, this.posIndex = t;
                let a = i.lensd * e / Math.PI, n = Math.cos(2 * Math.PI * t / e - 90) * a, o = Math.sin(2 * Math.PI * t / e - 90) * a;
                this.targetPos = new Laya.Vector3(o, 0, n);
            }
        }
        movetoLocalPos() {
            if (this.obj) if (!this.isDead && Laya.Vector3.distance(this.localPosition, this.targetPos) > .1) {
                let e = this.localPosition;
                e.x = e.x + .2 * (this.targetPos.x - e.x), e.z = e.z + .2 * (this.targetPos.z - e.z),
                    this.obj.transform.localPosition = e;
            } else this.obj.transform.localPosition = this.targetPos;
        }
        showArrow(e) {
            this.isAttack = !0, e && W.instance.createArrow(this.playerSkinIndex, this.position, e);
        }
        hideArrow() {
            this.isAttack = !1, this.changeAni(y.Move, !0);
        }
        addSpeedProp() {
            this.useSpeed = !0, this.speedTrail ? f.instacne.clearTrail(this.speedTrail, !0) : (this.speedTrail = this.obj.getChildAt(1),
                this.speedTrail ? f.instacne.clearTrail(this.speedTrail, !0) : (this.speedTrail = Laya.loader.getRes(x.speedTrailRES[0]).clone(),
                    this.obj.addChild(this.speedTrail), this.speedTrail.transform.localPosition = new Laya.Vector3(0, 0, 0)));
        }
        hideSpeedProp() {
            this.speedTrail && (this.speedTrail.active = !1), this.useSpeed = !1;
        }
        changeSkin() {
            this.isPlayer && (this.playerSkinIndex = i.skinIndex);
            for (let e = 0; e < this.hatPoint.numChildren; e++) this.hatPoint.getChildAt(e).active = !1;
            switch (this.hatRing.active = !1, this.playerSkinIndex) {
                case 0:
                    this.hatPoint.getChildAt(0).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat1;
                    break;

                case 1:
                    this.hatPoint.getChildAt(1).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat2;
                    break;

                case 2:
                    this.hatPoint.getChildAt(2).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat3;
                    break;

                case 3:
                    this.hatPoint.getChildAt(3).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat4;
                    break;

                case 4:
                    this.hatPoint.getChildAt(4).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat5,
                        this.hatRing.active = !0;
                    break;

                case 5:
                    this.hatPoint.getChildAt(5).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat6;
                    break;

                case 6:
                    this.spSkin.simpleSkinnedMeshRenderer.material = this.mat7;
            }
        }
        changeAni(e, t) {
            this.isDead || this.isAttack && e == y.Move || e == this.nowAni && 0 != this.playerRot.active || (this.playerRot.active = !0,
                this.nowAni = e, this.playerAni.play(this.nowAni), this.playerAni.getControllerLayer(0).getAnimatorState(this.nowAni).clip.islooping = t);
        }
        removePlayer(e, t = !1) {
            if (e) {
                let e = this.obj.transform.position.clone();
                if (this.obj.removeSelf(), K.instance.pool.addChild(this.obj), this.obj.transform.position = e,
                    this.changeAni(y.Dead, !1), this.playerRot.transform.localRotationEulerY = 360 * Math.random(),
                    t) {
                    let t = {
                        index: 0
                    };
                    Laya.Tween.to(t, {
                        index: 2,
                        update: new Laya.Handler(this, () => {
                            this.obj.transform.position = new Laya.Vector3(e.x, -2 * t.index * (2 * t.index) + 2, e.z);
                        })
                    }, 1e3);
                }
                Laya.timer.once(1e3, this, () => {
                    R.instance.createCrate(e, this.playerRot.transform.localRotationEulerY), this.clearObj();
                });
            } else this.obj.removeSelf(), this.clearObj();
            this.isDead = !0;
        }
        clearOthers() { }
    }
    class z extends F {
        constructor() {
            super(), this.panSSIndex = 0;
        }
        onUpdate() {
            this.isDead || this.movetoLocalPos();
        }
    }
    class Y {
        static get instance() {
            return this._instance ? this._instance : this._instance = new Y();
        }
        createPlayerName(e, t = "#fff", i = !0, s = 0, a = 90) {
            let n, o;
            return null == (o = Laya.Pool.getItem(k.PLAYERNAME)) ? (n = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10), "text"),
                (o = new Laya.Sprite3D(k.PLAYERNAME)).addChild(n)) : n = o.getChildAt(0), o.transform.localScale = new Laya.Vector3(1, 1, 1),
                o.transform.localPosition = new Laya.Vector3(0, 0, 0), i ? (n.transform.localRotationEuler = new Laya.Vector3(a, 180, 0),
                    n.transform.localPosition = new Laya.Vector3(-3, s, 0)) : (n.transform.localRotationEuler = new Laya.Vector3(a, 0, 0),
                        n.transform.localPosition = new Laya.Vector3(3, s, 0)), this.changeName(o, e, t),
                this.playerNameList || (this.playerNameList = new Array()), this.playerNameList.push(o),
                o;
        }
        changeName(e, t, i) {
            if (e) {
                let s = e.getChildAt(0), a = Laya.Browser.createElement("canvas"), n = a.getContext("2d");
                a.width = 640, a.height = 512, n.fillStyle = i, n.font = "40px Verdana", n.textAlign = "center",
                    n.textBaseline = "middle", n.fillText(t, 140, 70, 400);
                let o = new Laya.Texture2D(512, 512);
                o.loadImageSource(a), n.clearRect(0, 0, 1e3, 1e3), Laya.Browser.removeElement(a);
                let r = s.meshRenderer.sharedMaterial;
                if (r) {
                    r.albedoTexture.destroy(), r.albedoTexture = o;
                } else {
                    let e;
                    (e = new Laya.UnlitMaterial()).renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                        e.albedoTexture = o, s.meshRenderer.sharedMaterial = e;
                }
                s.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE;
            } else;
        }
        clear() {
            if (this.playerNameList) for (let e = 0; e < this.playerNameList.length; e++) {
                let t = this.playerNameList[e];
                t.removeSelf(), t.destroy(), t = null;
            }
            console.log("清理" + k.PLAYERNAME + "完成"), this.playerNameList = new Array();
        }
    }
    class Q extends O {
        constructor() {
            super(), this.type = 0, this.height = 2;
        }
        init() {
            this.obj = this.owner, this.objName = k.PLUS, this.addEventListener(), 0 == this.type ? (this.obj.getChildAt(0).active = !0,
                this.obj.getChildAt(1).active = !1) : (this.obj.getChildAt(0).active = !1, this.obj.getChildAt(1).active = !0),
                this.obj.transform.localPosition = new Laya.Vector3(0, 0, 0), this.upMove();
        }
        upMove() {
            this.vv = this.obj.transform.localPosition.clone(), Laya.Tween.to(this.vv, {
                y: this.height,
                update: new Laya.Handler(this, () => {
                    this.obj.transform.localPosition = this.vv;
                })
            }, 500, null, Laya.Handler.create(this, () => {
                this.clearObj();
            }));
        }
        reset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        onUpdate() { }
        clearOthers() {
            Laya.Tween.clearAll(this.vv);
        }
    }
    class q extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new q();
        }
        init() {
            let e = Laya.loader.getRes(x.plusobjRES[0]);
            this.objPrefab = e, this.objName = k.PLUS, this.objPool = new Laya.Sprite3D(), T.instance.scene3d.addChild(this.objPool);
        }
        createPlus(e, t, i = 2) {
            if (e) {
                let s = this.createObj();
                e.addChild(s);
                let a = s.addComponent(Q);
                a.type = t, a.height = i, a.init(), this.objscriptList.push(a);
            }
        }
        load(e = null) {
            this.objData = e;
        }
        reset() { }
        ready() { }
        start() { }
        clearFinish() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class X extends P {
        constructor() {
            super(), this.playerNum = 0, this.playerName = "Player", this.playerColor = "#fff",
                this.playerSkinIndex = -1, this.isPlayer = !1, this.useShield = !1, this.isPlusNum = 0,
                this.rad = 1, this.playerSc = 0, this.killNum = 0, this.removeNum = 0, this.isRemove = !1,
                this.isHun = !1, this.isGameOver = !0, this.isMove = !1, this.offx = 0, this.offy = 0,
                this.panIndex = 0, this.isHit = !1, this.hitIndex = 0, this.shieldTime = 7e3, this.lastTime = 5e3,
                this.useSpeed = !1, this.speedProp = 0, this.isAttack = !1;
        }
        init() {
            this.obj = this.owner, this.objPool = this.obj.getChildAt(0).getChildAt(0);
            let e = Laya.loader.getRes(x.playerObjRES[0]);
            this.objPrefab = e, this.objChName = k.PLAYER, this.objPoolName = k.PLAYERPOOL,
                this.playerRot = this.obj.getChildAt(0), this.plusPool = this.obj.getChildAt(1),
                this.crown = this.obj.getChildAt(1).getChildAt(0), this.ShieldPool = this.obj.getChildAt(0).getChildAt(1),
                this.shieldPrefab || (this.shieldPrefab = Laya.loader.getRes(x.shieldRES[0])), this.addEventListener(),
                this.initOthers(), this.onReset();
        }
        initOthers() { }
        get playerFadeNum() {
            return this.playerNum;
        }
        addPlayer(t = null) {
            this.playerNum++, this.checkShield(), this.isPlayer || this.player2dName.changeName(this.playerNum.toString()),
                this.playerNumObj ? Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor) :
                    (this.playerNumObj = Y.instance.createPlayerName(this.playerNum.toString(), this.playerColor, !0, -3.6),
                        this.playerNumObj.transform.localScale = new Laya.Vector3(1.2, 1.2, 1.2), this.playerNumObj.transform.localPositionX = .36,
                        this.plusPool.addChild(this.playerNumObj)), q.instance.createPlus(this.plusPool, 0, 5);
            let s = this.createObj();
            this.objPool.addChild(s);
            let n = s.addComponent(z);
            if (n.index = this.playerFadeNum - 1, n.fatherIndex = this.index, n.isPlayer = this.isPlayer,
                n.playerSkinIndex = this.playerSkinIndex, t) {
                let e = this.positionWorld2local(t, this.obj);
                s.transform.localPosition = e;
            } else s.transform.localPosition = new Laya.Vector3(0, 0, 0);
            n.useSpeed = this.useSpeed, n.init(), i.isGameStart && (this.isPlayer && B.instacne.vibrateShort(),
                n.movePlayer(this.offx, this.offy), this.isMove || n.stopMove()), this.isAttack && n.showArrow(null),
                this.objscriptList.push(n), this.changePlayerPos(), this.changePoolHeight(), this.isPlayer && e.event(a.CHANGECAMERA, this.playerFadeNum);
        }
        changePlayerPos() {
            let e = 0;
            for (let t = this.objscriptList.length - 1; t >= 0; t--) {
                this.objscriptList[t].isDead || e++;
            }
            let t = e;
            this.playerNum = t, this.changeHitBox(t);
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                i.isDead || (i.posIndex = e,
                    i.changePlayerPos(this.playerNum, e),
                    e++);
            }
        }
        changeHitBox(e) {
            this.rad = i.lensd * e / Math.PI;
        }
        changePoolHeight() {
            let e = 3.6 - 15 * (this.playerFadeNum - 1) * .004;
            e = e > 2 ? e : 2, this.plusPool.transform.localPositionY = e;
            let t = 1 + 15 * (this.playerFadeNum - 1) * .004;
            this.plusPool.transform.localScale = new Laya.Vector3(t, t, t);
        }
        onReset() {
            this.playerNumObj = null, this.playerNameObj = null, this.player2dName = null, this.isGameOver = !0,
                this.playerNum = 0, this.isMove = !1, this.playerSpeed = null, this.useShield = !1,
                this.isAttack = !1, this.speedProp = 0, this.useSpeed = !1;
        }
        reset() {
            if (0 == this.index ? (this.isPlayer = !0, this.playerName = "Player") : (this.isPlayer = !1,
                this.playerName = he.instance.ranName()), this.changeSkin(), this.playerNameObj = Y.instance.createPlayerName(this.playerName, this.playerColor, !0, -2.6),
                this.playerNameObj.transform.localScale = new Laya.Vector3(.8, .8, .8), this.playerNameObj.transform.localPositionX = .2,
                this.plusPool.addChild(this.playerNameObj), this.crown.active = !1,
                this.player2dName = U.instance.create2DPlayerName(this.playerNum.toString(), this.playerSkinIndex),
                this.isPlayer) this.addPlayer(); else {
                let e = Math.ceil(5 * Math.random());
                for (let t = 0; t < e; t++) this.addPlayer();
            }
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].reset();
            }
            this.isPlayer ? this.playerSc = i.playerSc : this.playerSc = .9 * i.playerSc;
        }
        changeSkin() {
            this.isPlayer ? this.playerSkinIndex = i.skinIndex : -1 == this.playerSkinIndex && (this.playerSkinIndex = this.index,
                this.index > 5 && (this.playerSkinIndex = Math.floor(6 * Math.random()))), this.playerColor = he.instance.getColor(this.playerSkinIndex),
                Y.instance.changeName(this.playerNameObj, this.playerName, this.playerColor), Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor);
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].changeSkin();
            }
        }
        ready() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].ready();
            }
        }
        start() {
            this.isGameOver = !1;
        }
        addEventListener() {
            e.on(a.SKINCHANGE, this, this.changeSkin), e.on(a.FATHERADD, this, this.addPlayerS),
                e.on(a.BEKILL, this, this.showKill), e.on(a.GAMEWIN, this, this.winGame), e.on(a.GETITEM, this, this.getItem);
        }
        removeEventListener() {
            e.off(a.SKINCHANGE, this, this.changeSkin), e.off(a.FATHERADD, this, this.addPlayerS),
                e.off(a.BEKILL, this, this.showKill), e.off(a.GAMEWIN, this, this.winGame), e.off(a.GETITEM, this, this.getItem);
        }
        getItem(e, t) {
            e == this.index && (0 == t ? this.addSpeedProp() : this.addShield());
        }
        winGame() {
            this.stopMove();
        }
        showKill(e) {
            e == this.index && (this.killNum++, D.instance.createKill(this.plusPool, 3, 6),
                this.isPlayer && B.instacne.vibrateLong());
        }
        addPlayerS(e, t = null) {
            e == this.index && this.addPlayer(t);
        }
        movePlayer(e, t) {
            if (!this.isGameOver && !i.gameTimeOut) {
                this.offx = e, this.offy = t;
                let i = new Laya.Vector2(e, t);
                Laya.Vector2.normalize(i, i), this.playerSpeed = new Laya.Vector2(0, 0), Laya.Vector2.scale(i, this.playerSc + this.speedProp, this.playerSpeed),
                    this.isMove = !0;
                for (let i = 0; i < this.objscriptList.length; i++) {
                    this.objscriptList[i].movePlayer(e, t);
                }
            }
        }
        stopMove() {
            this.isMove = !1;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].stopMove();
            }
        }
        onUpdate() {
            if (!this.isGameOver && !i.gameTimeOut) {
                if (this.isMove) {
                    let e = this.obj.transform.position.clone(), t = Laya.timer.delta, s = e.x - this.playerSpeed.x / 16 * t, a = e.z - this.playerSpeed.y / 16 * t;
                    s + this.rad > i.groundRad - 1 ? s = i.groundRad - 1.3 - this.rad : s - this.rad < 1 - i.groundRad && (s = 1.3 - i.groundRad + this.rad),
                        a + this.rad > i.groundRad - 1 ? a = i.groundRad - 1.3 - this.rad : a - this.rad < 1 - i.groundRad && (a = 1.3 - i.groundRad + this.rad),
                        this.obj.transform.position = new Laya.Vector3(s, e.y, a);
                }
                if (this.panIndex++, this.panIndex > 0) {
                    let e = he.instance.rankList;
                    e && e.length > 0 && (e[0].index == this.index ? this.crown.active = !0 : this.crown.active = !1);
                }
                this.isHitOthers(), this.removeSome();
            }
        }
        onLateUpdate() {
            this.isHitAlly(), this.isHitCrate();
        }
        isHitCrate() {
            let e = R.instance.isHitCrate(this.position, this.rad);
            if (e && e.length > 0) for (let t = 0; t < e.length; t++) this.addPlayer(e[t]);
        }
        isHitAlly() {
            let e = ie.instance.isHitAlly(this.position, this.rad);
            if (e && e.length > 0) for (let t = 0; t < e.length; t++) this.addPlayer(e[t]);
        }
        rotDic(e) {
            let t = Math.atan2(e.z, e.x);
            return 90 - t * (180 / Math.PI);
        }
        isHitOthers() {
            if (this.hitIndex++, this.hitIndex > 0) {
                if (this.hitIndex = 0, this.isPlayer ? this.hitTarget = ee.instance.hitOther(this.index, this.position, this.rad) : (this.hitTarget = ae.instance.hitOther(this.index, this.position, this.rad),
                    this.hitTarget || (this.hitTarget = ee.instance.hitOther(this.index, this.position, this.rad))),
                    this.hitTarget) return void (this.isHit = !0);
                this.isHit = !1, this.hitTarget = null, this.hideArrow();
            }
        }
        removeSome() {
            if (this.isHit && this.hitTarget) {
                let e = this.hitTarget.rad, t = this.hitTarget.position, i = [];
                for (let s = 0; s < this.objscriptList.length; s++) {
                    let a = this.objscriptList[s];
                    Laya.Vector3.distance(a.position, t) < e && i.push(s);
                }
                if (0 == i.length) return;
                !this.useShield && this.hitTarget.showArrow(this.objscriptList[i[0]].position),
                    this.removePlayer(i, this.hitTarget), !this.hitTarget.useShield && this.hitTarget.removePlayerByOther(i.length, this);
            }
        }
        addShield() {
            this.useShield || (this.useShield = !0, this.checkShield(), this.lastTime = this.shieldTime - 2800,
                Laya.timer.once(3e3, this, () => {
                    this.changeBombSkin();
                }));
        }
        checkShield() {
            if (!this.useShield || !i.isGameStart) return;
            let e = this.ShieldPool.numChildren;
            if (e < this.playerNum) {
                for (let t = 0; t < this.playerNum - e; t++) {
                    let e = Laya.Pool.getItemByCreateFun(k.SHIELD, this.shieldPrefab.clone, this.shieldPrefab);
                    this.ShieldPool.addChild(e);
                }
                e = this.ShieldPool.numChildren;
                for (let t = 0; t < e; t++) {
                    let s = this.ShieldPool.getChildAt(t), a = 0;
                    a = 360 / e * t;
                    let n = i.lensd * e / Math.PI + .1, o = Math.cos(2 * Math.PI * t / e - 90) * n, r = Math.sin(2 * Math.PI * t / e - 90) * n;
                    s.transform.localPosition = new Laya.Vector3(r, 0, o), s.transform.localRotationEulerY = a - 90;
                }
            } else if (e > this.playerNum) {
                e = this.ShieldPool.numChildren;
                for (let t = 0; t < e; t++) {
                    let s = this.ShieldPool.getChildAt(t);
                    if (t < this.playerNum) {
                        let a = 0;
                        a = 360 / e * t;
                        let n = i.lensd * e / Math.PI + .1, o = Math.cos(2 * Math.PI * t / e - 90) * n, r = Math.sin(2 * Math.PI * t / e - 90) * n;
                        s.transform.localPosition = new Laya.Vector3(r, 0, o), s.transform.localRotationEulerY = a - 90;
                    } else s.removeSelf(), Laya.Pool.recover(k.SHIELD, s);
                }
            }
        }
        changeBombSkin() {
            let e = this.lastTime / 5;
            this.lastTime = this.lastTime / 5 * 4, e > 40 ? Laya.timer.once(this.lastTime / 5, this, () => {
                this.ShieldPool.active = !1, Laya.timer.once(40, this, () => {
                    this.ShieldPool.active = !0, this.changeBombSkin();
                });
            }) : (this.ShieldPool.active = !0, this.removeShield());
        }
        removeShield() {
            for (let e = this.ShieldPool.numChildren - 1; e >= 0; e--) {
                let t = this.ShieldPool.getChildAt(e);
                t && (t.removeSelf(), Laya.Pool.recover(k.SHIELD, t));
            }
            this.useShield = !1;
        }
        addSpeedProp() {
            if (!this.useShield) {
                this.useSpeed = !0, this.speedProp = .5 * i.playerSc, Laya.timer.once(5e3, this, () => {
                    this.hideSpeedProp();
                });
                for (let e = 0; e < this.objscriptList.length; e++) {
                    this.objscriptList[e].addSpeedProp();
                }
            }
        }
        hideSpeedProp() {
            this.useSpeed = !1, this.speedProp = 0;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].hideSpeedProp();
            }
        }
        showArrow(e) {
            this.isAttack = !0;
            for (let t = 0; t < this.objscriptList.length; t++) if (t % 4 == 2) {
                this.objscriptList[t].showArrow(e);
            }
        }
        hideArrow() {
            this.isAttack = !1;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].hideArrow();
            }
        }
        removePlayer(t, i) {
            if (this.useShield) return;
            0 == this.index && B.instacne.vibrateShort();
            let s = t.length, n = [], o = 0;
            for (let e = 0; e < t.length; e++) {
                let i = this.objscriptList.splice(t[e] - o, 1);
                n.push(i[0]), o += 1;
            }
            this.playerNum -= s;
            for (let e = 0; e < this.objscriptList.length; e++) this.objscriptList[e].index = e;
            this.changePlayerPos(), this.changeHitBox(this.playerNum);
            let r = Math.ceil(.6 * s);
            for (let e = 0; e < n.length; e++) e < r ? n[e].removePlayer(!0, i.useShield) : n[e].removePlayer(!1, i.useShield);
            Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor),
                this.playerNum <= 0 && (console.log("死亡判断" + this.index), this.player2dName && this.player2dName.clear(),
                    this.isPlayer ? e.event(a.GAMELOSE) : this.obj.removeSelf(), e.event(a.BEKILL, [this.hitTarget.index, this.index]),
                    this.isGameOver = !0, this.isRemove = !1, Laya.timer.clearAll(this));
        }
        removePlayerByOther(e, t) {
            if (0 == e || this.useShield) return;
            this.hitTarget = t;
            let i = t.position, s = t.rad, a = [];
            for (let t = 0; t < this.objscriptList.length; t++) {
                let n = this.objscriptList[t].position;
                if (!n) continue;
                let o = i.x - n.x, r = i.z - n.z;
                Math.sqrt(o * o + r * r) <= s + 2 && a.length <= e && a.push(t);
            }
            this.removePlayer(a, t);
        }
        clearOthers() {
            this.removeShield();
        }
    }
    class $ extends X {
        constructor() {
            super(), this.isGe = !1, this.isFallowPlayer = !1, this.fallowCD = !1, this.lockType = -1;
        }
        changeAim() {
            let e = this.obj.transform.position.clone(), t = Math.random();
            if (t <= .2) this.run1(e); else if (t > .2 && t < .7) this.lockType = 1, this.allyObj = ie.instance.getRanAlly(e),
                null == this.allyObj && this.changeAim(); else if (t > .7 && t < .9) {
                    this.lockType = 2, this.point = R.instance.getRanCrate(e);
                    let t = e.x - this.point.x, i = e.z - this.point.z;
                    this.movePlayer(t, i);
                } else if (t > .9) if (this.fallowCD) this.changeAim(); else {
                    this.lockType = 3;
                    let e = this.obj.transform.position.clone();
                    this.allyObj = ae.instance.getPlayerObj(e, this.playerNum, this.rad), this.allyObj || this.changeAim();
                }
        }
        run1(e) {
            this.lockType = 0;
            let t = 5 + 10 * Math.random(), s = 5 + 10 * Math.random();
            t = Math.random() > .5 ? -1 * t : t, s = Math.random() > .5 ? -1 * s : s, t = e.x + t,
                s = e.z + s, t > i.groundRad - 2 ? t = i.groundRad - 2 : t < 2 - i.groundRad && (t = 2 - i.groundRad),
                s > i.groundRad - 2 ? s = i.groundRad - 2 : s < 2 - i.groundRad && (s = 2 - i.groundRad),
                this.point = new Laya.Vector3(t, 0, s);
            let a = e.x - t, n = e.z - s;
            this.movePlayer(a, n);
        }
        initOthers() {
            Laya.timer.loop(500, this, () => {
                this.isGameOver || this.playerNum < ae.instance.getPlayerNum() && Math.random() > .7 && this.addPlayer();
            });
        }
        onUpdate() {
            if (!this.isGameOver && !i.gameTimeOut) if (this.playerSpeed) {
                let e = Laya.timer.delta, t = this.obj.transform.position.clone();
                this.player2dName.changePos(t);
                let s = t.x - this.playerSpeed.x / 16 * e, a = t.z - this.playerSpeed.y / 16 * e;
                s + this.rad > i.groundRad - 1 ? (s = i.groundRad - 1.3 - this.rad, this.changeAim()) : s - this.rad < 1 - i.groundRad && (s = 1.3 - i.groundRad + this.rad,
                    this.changeAim()), a + this.rad > i.groundRad - 1 ? (a = i.groundRad - 1.3 - this.rad,
                        this.changeAim()) : a - this.rad < 1 - i.groundRad && (a = 1.3 - i.groundRad + this.rad,
                            this.changeAim());
                let n = t.x + this.playerSpeed.x / 16 * e * 5, o = t.z + this.playerSpeed.y / 16 * e * 5, r = new Laya.Vector3(n, 0, o), h = ae.instance.getPlayerPos();
                if (h && Laya.Vector3.distance(r, h) < ae.instance.getPlayerRad() + this.rad + .5 && this.run1(t),
                    this.isHitOthers(), this.removeSome(), this.obj.transform.position = new Laya.Vector3(s, t.y, a),
                    0 == this.lockType) {
                    let e = this.obj.transform.position.clone();
                    Laya.Vector3.distance(this.point, e) < 1 && this.changeAim();
                } else if (1 == this.lockType) if (this.allyObj) {
                    let e = this.obj.transform.position.clone(), t = this.allyObj.transform.position.clone();
                    Laya.Vector3.distance(e, t) < .2 ? this.changeAim() : "ally" == this.allyObj.name ? (Laya.Vector3.subtract(e, t, e),
                        this.movePlayer(e.x, e.z)) : this.changeAim();
                } else this.changeAim(); else if (2 == this.lockType) {
                    let e = this.obj.transform.position.clone();
                    Laya.Vector3.distance(this.point, e) < this.rad && this.changeAim();
                } else if (3 == this.lockType) {
                    this.isFallowPlayer || (console.log("跟随玩家"), this.isFallowPlayer = !0, Laya.timer.once(3e3, this, () => {
                        this.isFallowPlayer = !1, this.fallowCD = !0, Laya.timer.once(4e3, this, () => {
                            this.fallowCD = !1;
                        }), console.log("切换目标"), this.changeAim();
                    }));
                    let e = this.obj.transform.position.clone(), t = this.allyObj.transform.position.clone();
                    Laya.Vector3.distance(e, t) < this.rad + .3 ? this.changeAim() : (Laya.Vector3.subtract(e, t, e),
                        this.movePlayer(e.x, e.z));
                }
            } else this.changeAim();
        }
        onLateUpdate() {
            this.isHitAlly(), this.isHitCrate();
        }
        addPlayerS(e) {
            e == this.index && this.addPlayer();
        }
    }
    class Z extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new Z();
        }
        init() {
            let e = Laya.loader.getRes(x.playerMidRES[0]);
            this.objPrefab = e, this.objName = k.PLAYERPOOL, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool), this.objPool.name = this.objName + "Pool";
        }
        load(e = null) {
            this.objData = e;
            for (let e = 0; e < 1; e++) {
                let t = this.createObj();
                this.objPool.addChild(t), t.transform.position = new Laya.Vector3(0, 0, 0), this.playerMidItem = t.addComponent(se),
                    this.playerMidItem.index = e, this.playerMidItem.init(), this.objscriptList.push(this.playerMidItem);
            }
        }
        reset() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].reset();
            }
        }
        ready() { }
        start() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].start();
            }
        }
        movePlayer(e, t) {
            this.playerMidItem && this.playerMidItem.movePlayer(e, t);
        }
        stopMove() {
            this.playerMidItem && this.playerMidItem.stopMove();
        }
        isInsideOhter(e, t) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (s.index != e && !s.isGameOver) {
                    let e = s.rad, i = s.obj.transform.position.clone();
                    if (Laya.Vector3.distance(t, i) < e + 1) return s.index;
                }
            }
            return -1;
        }
        getPlayerNum() {
            return this.playerMidItem ? this.playerMidItem.playerNum : 0;
        }
        getPlayerRad() {
            return this.playerMidItem ? this.playerMidItem.rad : 0;
        }
        isHitRing(e, t) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (s.index != e && !s.isGameOver) {
                    let e = s.rad, i = s.obj.transform.position.clone(), a = Laya.Vector3.distance(t, i);
                    if (a < e + 1 && a > e - 1) return s.index;
                }
            }
            return -1;
        }
        getRankList(e = !1) {
            let t = [];
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (!s.isGameOver || e) {
                    let e = {
                        index: s.index,
                        num: s.playerNum,
                        name: s.playerName,
                        skinIndex: s.playerSkinIndex
                    };
                    t.push(e);
                }
            }
            return t;
        }
        getKills() {
            return this.playerMidItem ? this.playerMidItem.killNum : 0;
        }
        getRanPos(e) {
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                if (i.index == e) {
                    let e = i.rad, t = i.obj.transform.position.clone(), s = Math.random() > .5 ? 1 : -1, a = Math.random() > .5 ? 1 : -1;
                    return new Laya.Vector3(t.x + s * e * Math.random(), .5, t.z + a * e * Math.random());
                }
            }
            return null;
        }
        getSkinIndex(e) {
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                if (i.index == e) return i.playerSkinIndex;
            }
            return 0;
        }
        getPlayerObj(e, t, i) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i], a = s.obj, n = Laya.Vector3.distance(a.transform.position.clone(), e);
                if (t > s.playerNum && n < 10) return a;
            }
            return null;
        }
        getPlayerPos() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                if (!t.isGameOver) {
                    let e = t.obj.transform.position.clone(), i = this.playerMidItem.rad + 5 + 20 * Math.random(), s = 360 * Math.random(), a = e.x + Math.cos(s / 2 / Math.PI) * i, n = e.z + Math.sin(s / 2 / Math.PI) * i;
                    return new Laya.Vector3(a, 0, n);
                }
            }
            return null;
        }
        hitOther(e, t, i) {
            for (let s = 0; s < this.objscriptList.length; s++) {
                let a = this.objscriptList[s];
                if (!a.isGameOver && a.index != e) {
                    let e = a.obj.transform.position.clone(), s = a.rad, n = e.x - t.x, o = e.z - t.z;
                    if (Math.sqrt(n * n + o * o) < i + s + .5) return a;
                }
            }
            return null;
        }
        addEventListener() { }
        removeEventListener() { }
        clearOthers() { }
    }
    class ee extends Z {
        constructor() {
            super(...arguments), this.posList = [[45, 45], [45, 0], [45, -45], [0, -20], [0, -45], [-45, 45], [-45, 0], [-45, -45]];
        }
        static get instance() {
            return this._instance2 ? this._instance2 : this._instance2 = new ee();
        }
        load(e = null) {
            this.objData = e;
            for (let e = 1; e < i.npcNum + 1; e++) {
                let t = this.createObj();
                t.name = "npcpool", this.objPool.addChild(t);
                let i = t.addComponent($), s = this.posList[e - 1][0], a = this.posList[e - 1][1];
                s += 10 * Math.random() - 5, a += 10 * Math.random() - 5, t.transform.position = new Laya.Vector3(s, 0, a),
                    i.index = e, i.init(), this.objscriptList.push(i);
            }
        }
        getNpcNum(e) {
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                if (e == i.index && !i.isGameOver) return i.playerNum;
            }
            return 0;
        }
    }
    class te extends F {
        constructor() {
            super(), this.panIndex = 0;
        }
        movePlayer(e, t) {
            if (i.isGameStart && !this.isDead) {
                let s = 0;
                s = f.instacne.getTot(e, t), this.playerRot.transform.localRotationEulerY = s, this.playerSpeed = new Laya.Vector2(0, 0);
                let a = new Laya.Vector2(e, t);
                this.isMove = !0, Laya.Vector2.normalize(a, a), Laya.Vector2.scale(a, .6 * i.playerSc, this.playerSpeed),
                    this.changeAni(y.Move, !0);
            }
        }
        initOther() {
            i.isGameStart ? this.allyMove() : (this.isDead = !0, this.allyMove());
        }
        start() {
            this.isDead = !1;
        }
        onReset() {
            this.isPlayer = !1, this.isMove = !1, this.posIndex = -1, this.isDead = !1, this.fatherIndex = -1,
                this.panIndex = 0, this.nowAni = "", this.playerSpeed = null;
        }
        allyMove() {
            if (!this.isDead) {
                let e = this.obj.transform.position.clone(), t = 5 + 10 * Math.random(), s = 5 + 10 * Math.random();
                t = Math.random() > .5 ? -1 * t : t, s = Math.random() > .5 ? -1 * s : s, t = e.x + t,
                    s = e.z + s, t > i.groundRad - 2 ? t = i.groundRad - 2 : t < 2 - i.groundRad && (t = 2 - i.groundRad),
                    s > i.groundRad - 2 ? s = i.groundRad - 2 : s < 2 - i.groundRad && (s = 2 - i.groundRad),
                    this.point = new Laya.Vector3(t, 0, s);
                let a = e.x - t, n = e.z - s;
                this.movePlayer(a, n);
            }
        }
        onLateUpdate() {
            let e = new Laya.Vector4();
            if (ne.instance.camera.viewport.project(this.position, ne.instance.camera.projectionViewMatrix, e),
                e.x > 0 && e.x < 750 && e.y > 0 && e.y < i.stage_height ? (this.playerRot.active = !0,
                    this.changeAni(y.Move, !0)) : (this.changeAni(y.Dead, !0), this.playerRot.active = !1),
                !this.isDead && (this.panIndex++, this.panIndex > 1)) if (this.panIndex = 0, this.playerSpeed) {
                    let e = this.obj.transform.position.clone(), t = Laya.timer.delta;
                    this.obj.transform.position = new Laya.Vector3(e.x - this.playerSpeed.x / 16 * t, e.y, e.z - this.playerSpeed.y / 16 * t);
                    let s = this.obj.transform.position.clone();
                    ee.instance.isInsideOhter(this.fatherIndex, s);
                    if (s.x > i.groundRad - 1 || s.x < 1 - i.groundRad || s.z > i.groundRad - 1 || s.z < 1 - i.groundRad) this.allyMove(); else {
                        Laya.Vector3.distance(this.point, s) < 2 && this.allyMove();
                    }
                } else this.allyMove();
        }
    }
    class ie extends N {
        constructor() {
            super(...arguments), this.allyNum = 60, this.playerIndex = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new ie();
        }
        init() {
            let e = Laya.loader.getRes(x.playerObjRES[0]);
            this.objPrefab = e, this.objName = k.PLAYER, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e, this.playerIndex = 0, Laya.timer.frameLoop(2, this, () => {
                this.createAlly(this.playerIndex), this.playerIndex++, this.playerIndex > 20 && Laya.timer.clearAll(this);
            });
        }
        createAlly(e) {
            let t;
            if (e <= 5) t = new Laya.Vector3(16 * Math.random() - 8, 0, 50 * Math.random() - 10); else {
                let e = -i.groundRad + Math.random() * i.groundRad * 2, s = -i.groundRad + Math.random() * i.groundRad * 2;
                t = new Laya.Vector3(e, 0, s);
            }
            if (null != t) {
                t.x > i.groundRad - 2 && (t.x = i.groundRad - 2), t.x < 2 - i.groundRad && (t.x = 2 - i.groundRad),
                    t.z > i.groundRad - 2 && (t.z = i.groundRad - 2), t.z < 2 - i.groundRad && (t.z = 2 - i.groundRad);
                let e = this.createObj();
                this.objPool.addChild(e), e.name = "ally";
                let s = e.addComponent(te);
                s.isDead = !1, s.index = this.playerIndex, s.isPlayer = !1, s.playerSkinIndex = 6,
                    e.transform.position = t, s.init(), this.objscriptList.push(s);
            }
        }
        getRanAlly(e = null) {
            let t = [];
            for (let e = 0; e < this.objscriptList.length; e++) {
                let i = this.objscriptList[e];
                i && i.obj && t.push(i);
            }
            if (e) {
                let i = 0, s = 9990;
                for (let a = 0; a < t.length; a++) {
                    let n = t[a].obj.transform.position.clone(), o = Laya.Vector3.distance(n, e);
                    o < s && (s = o, i = a);
                }
                if (t[i]) return t[i].obj;
            } else if (t[Math.floor(Math.random() * t.length)]) return t[Math.floor(Math.random() * t.length)].obj;
            return null;
        }
        isHitAlly(e, t) {
            let i = [];
            for (let s = 0; s < this.objscriptList.length; s++) {
                let a = this.objscriptList[s];
                if (!a.isDead && a.position) {
                    Laya.Vector3.distance(a.position, e) < t + .4 && (a.isDead = !0, i.push(a.position),
                        a.clearObj());
                }
            }
            return i;
        }
        reset() { }
        ready() { }
        start() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].start();
            }
            Laya.timer.loop(700, this, () => {
                this.createAlly(this.playerIndex), this.playerIndex++, i.isGameStart || Laya.timer.clearAll(this);
            });
        }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class se extends P {
        constructor() {
            super(), this.playerNum = 0, this.playerName = "Player", this.playerColor = "#fff",
                this.playerSkinIndex = -1, this.isPlayer = !1, this.useShield = !1, this.isPlusNum = 0,
                this.rad = 1, this.playerSc = 0, this.killNum = 0, this.removeNum = 0, this.isRemove = !1,
                this.isHun = !1, this.isGameOver = !0, this.isMove = !1, this.offx = 0, this.offy = 0,
                this.panIndex = 0, this.isHit = !1, this.hitIndex = 0, this.shieldTime = 7e3, this.lastTime = 5e3,
                this.useSpeed = !1, this.speedProp = 0, this.isAttack = !1;
        }
        init() {
            this.obj = this.owner, this.objPool = this.obj.getChildAt(0).getChildAt(0);
            let e = Laya.loader.getRes(x.playerObjRES[0]);
            this.objPrefab = e, this.objChName = k.PLAYER, this.objPoolName = k.PLAYERPOOL,
                this.playerRot = this.obj.getChildAt(0), this.plusPool = this.obj.getChildAt(1),
                this.crown = this.obj.getChildAt(1).getChildAt(0), this.ShieldPool = this.obj.getChildAt(0).getChildAt(1),
                this.shieldPrefab || (this.shieldPrefab = Laya.loader.getRes(x.shieldRES[0])), this.addEventListener(),
                this.initOthers(), this.onReset();
        }
        initOthers() { }
        get playerFadeNum() {
            return this.playerNum;
        }
        addPlayer(t = null) {
            this.playerNum++, this.checkShield(), this.isPlayer || this.player2dName.changeName(this.playerNum.toString()),
                this.playerNumObj ? Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor) : (this.playerNumObj = Y.instance.createPlayerName(this.playerNum.toString(), this.playerColor, !0, -3.6),
                    this.playerNumObj.transform.localScale = new Laya.Vector3(1.2, 1.2, 1.2), this.playerNumObj.transform.localPositionX = .36,
                    this.plusPool.addChild(this.playerNumObj)), q.instance.createPlus(this.plusPool, 0, 5);
            let s = this.createObj();
            this.objPool.addChild(s);
            let n = s.addComponent(z);
            if (n.index = this.playerFadeNum - 1, n.fatherIndex = this.index, n.isPlayer = this.isPlayer,
                n.playerSkinIndex = this.playerSkinIndex, t) {
                let e = this.positionWorld2local(t, this.obj);
                s.transform.localPosition = e;
            } else s.transform.localPosition = new Laya.Vector3(0, 0, 0);
            n.useSpeed = this.useSpeed, n.init(), i.isGameStart && (this.isPlayer && B.instacne.vibrateShort(),
                n.movePlayer(this.offx, this.offy), this.isMove || n.stopMove()), this.isAttack && n.showArrow(null),
                this.objscriptList.push(n), this.changePlayerPos(), this.changePoolHeight(), this.isPlayer && e.event(a.CHANGECAMERA, this.playerFadeNum);
        }
        changePlayerPos() {
            let e = 0;
            for (let t = this.objscriptList.length - 1; t >= 0; t--) {
                this.objscriptList[t].isDead || e++;
            }
            let t = e;
            this.playerNum = t, this.changeHitBox(t);
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                i.isDead || (i.posIndex = e, i.changePlayerPos(this.playerNum, e), e++);
            }
        }
        changeHitBox(e) {
            this.rad = i.lensd * e / Math.PI;
        }
        changePoolHeight() {
            let e = 3.6 - 15 * (this.playerFadeNum - 1) * .004;
            e = e > 2 ? e : 2, this.plusPool.transform.localPositionY = e;
            let t = 1 + 15 * (this.playerFadeNum - 1) * .004;
            this.plusPool.transform.localScale = new Laya.Vector3(t, t, t);
        }
        onReset() {
            this.playerNumObj = null, this.playerNameObj = null, this.player2dName = null, this.isGameOver = !0,
                this.playerNum = 0, this.isMove = !1, this.playerSpeed = null, this.useShield = !1,
                this.isAttack = !1, this.speedProp = 0, this.useSpeed = !1;
        }
        reset() {
            if (0 == this.index ? (this.isPlayer = !0, this.playerName = "Player") : (this.isPlayer = !1,
                this.playerName = he.instance.ranName()), this.changeSkin(), this.playerNameObj = Y.instance.createPlayerName(this.playerName, this.playerColor, !0, -2.6),
                this.playerNameObj.transform.localScale = new Laya.Vector3(.8, .8, .8), this.playerNameObj.transform.localPositionX = .2,
                this.plusPool.addChild(this.playerNameObj), this.crown.active = !1, this.player2dName = U.instance.create2DPlayerName(this.playerNum.toString(), this.playerSkinIndex),
                this.isPlayer) this.addPlayer(); else {
                let e = Math.ceil(5 * Math.random());
                for (let t = 0; t < e; t++) this.addPlayer();
            }
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].reset();
            }
            this.isPlayer ? this.playerSc = i.playerSc : this.playerSc = .9 * i.playerSc;
        }
        changeSkin() {
            this.isPlayer ? this.playerSkinIndex = i.skinIndex : -1 == this.playerSkinIndex && (this.playerSkinIndex = this.index,
                this.index > 5 && (this.playerSkinIndex = Math.floor(6 * Math.random()))), this.playerColor = he.instance.getColor(this.playerSkinIndex),
                Y.instance.changeName(this.playerNameObj, this.playerName, this.playerColor), Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor);
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].changeSkin();
            }
        }
        ready() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].ready();
            }
        }
        start() {
            this.isGameOver = !1;
        }
        addEventListener() {
            e.on(a.SKINCHANGE, this, this.changeSkin), e.on(a.FATHERADD, this, this.addPlayerS),
                e.on(a.BEKILL, this, this.showKill), e.on(a.GAMEWIN, this, this.winGame), e.on(a.GETITEM, this, this.getItem),
                e.on(a.CHANGENAME, this, this.changeName);
        }
        removeEventListener() {
            e.off(a.SKINCHANGE, this, this.changeSkin), e.off(a.FATHERADD, this, this.addPlayerS),
                e.off(a.BEKILL, this, this.showKill), e.off(a.GAMEWIN, this, this.winGame), e.off(a.GETITEM, this, this.getItem),
                e.off(a.CHANGENAME, this, this.changeName);
        }
        changeName(e) {
            this.playerNameObj && Y.instance.changeName(this.playerNameObj, e, this.playerColor);
        }
        getItem(e, t) {
            e == this.index && (0 == t ? this.addSpeedProp() : this.addShield());
        }
        winGame() {
            this.stopMove();
        }
        showKill(e) {
            e == this.index && (this.killNum++, D.instance.createKill(this.plusPool, 3, 6),
                this.isPlayer && B.instacne.vibrateLong());
        }
        addPlayerS(e, t = null) {
            e == this.index && this.addPlayer(t);
        }
        movePlayer(e, t) {
            if (!this.isGameOver && !i.gameTimeOut) {
                this.offx = e, this.offy = t;
                let i = new Laya.Vector2(e, t);
                Laya.Vector2.normalize(i, i), this.playerSpeed = new Laya.Vector2(0, 0), Laya.Vector2.scale(i, this.playerSc + this.speedProp, this.playerSpeed),
                    this.isMove = !0;
                for (let i = 0; i < this.objscriptList.length; i++) {
                    this.objscriptList[i].movePlayer(e, t);
                }
            }
        }
        stopMove() {
            this.isMove = !1;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].stopMove();
            }
        }
        onUpdate() {
            if (!this.isGameOver && !i.gameTimeOut) {
                if (this.isMove) {
                    let e = this.obj.transform.position.clone(), t = Laya.timer.delta, s = e.x - this.playerSpeed.x / 16 * t, a = e.z - this.playerSpeed.y / 16 * t;
                    s + this.rad > i.groundRad - 1 ? s = i.groundRad - 1.3 - this.rad : s - this.rad < 1 - i.groundRad && (s = 1.3 - i.groundRad + this.rad),
                        a + this.rad > i.groundRad - 1 ? a = i.groundRad - 1.3 - this.rad : a - this.rad < 1 - i.groundRad && (a = 1.3 - i.groundRad + this.rad),
                        this.obj.transform.position = new Laya.Vector3(s, e.y, a);
                }
                if (this.panIndex++, this.panIndex > 0) {
                    let e = he.instance.rankList;
                    e && e.length > 0 && (e[0].index == this.index ? this.crown.active = !0 : this.crown.active = !1);
                }
                this.isHitOthers(), this.removeSome();
            }
        }
        onLateUpdate() {
            this.isHitAlly(), this.isHitCrate();
        }
        isHitCrate() {
            let e = R.instance.isHitCrate(this.position, this.rad);
            if (e && e.length > 0) for (let t = 0; t < e.length; t++) this.addPlayer(e[t]);
        }
        isHitAlly() {
            let e = ie.instance.isHitAlly(this.position, this.rad);
            if (e && e.length > 0) for (let t = 0; t < e.length; t++) this.addPlayer(e[t]);
        }
        rotDic(e) {
            let t = Math.atan2(e.z, e.x);
            return 90 - t * (180 / Math.PI);
        }
        isHitOthers() {
            if (this.hitIndex++, this.hitIndex > 0) {
                if (this.hitIndex = 0, this.isPlayer ? this.hitTarget = ee.instance.hitOther(this.index, this.position, this.rad) : (this.hitTarget = ae.instance.hitOther(this.index, this.position, this.rad),
                    this.hitTarget || (this.hitTarget = ee.instance.hitOther(this.index, this.position, this.rad))),
                    this.hitTarget) return void (this.isHit = !0);
                this.isHit = !1, this.hitTarget = null, this.hideArrow();
            }
        }
        removeSome() {
            if (this.isHit && this.hitTarget) {
                let e = this.hitTarget.rad, t = this.hitTarget.position, i = [];
                for (let s = 0; s < this.objscriptList.length; s++) {
                    let a = this.objscriptList[s];
                    Laya.Vector3.distance(a.position, t) < e && i.push(s);
                }
                if (0 == i.length) return;
                !this.useShield && this.hitTarget.showArrow(this.objscriptList[i[0]].position),
                    this.removePlayer(i, this.hitTarget), !this.hitTarget.useShield && this.hitTarget.removePlayerByOther(i.length, this);
            }
        }
        addShield() {
            this.useShield || (this.useShield = !0, this.checkShield(), this.lastTime = this.shieldTime - 2800,
                Laya.timer.once(3e3, this, () => {
                    this.changeBombSkin();
                }));
        }
        checkShield() {
            if (!this.useShield || !i.isGameStart) return;
            let e = this.ShieldPool.numChildren;
            if (e < this.playerNum) {
                for (let t = 0; t < this.playerNum - e; t++) {
                    let e = Laya.Pool.getItemByCreateFun(k.SHIELD, this.shieldPrefab.clone, this.shieldPrefab);
                    this.ShieldPool.addChild(e);
                }
                e = this.ShieldPool.numChildren;
                for (let t = 0; t < e; t++) {
                    let s = this.ShieldPool.getChildAt(t), a = 0;
                    a = 360 / e * t;
                    let n = i.lensd * e / Math.PI + .1, o = Math.cos(2 * Math.PI * t / e - 90) * n, r = Math.sin(2 * Math.PI * t / e - 90) * n;
                    s.transform.localPosition = new Laya.Vector3(r, 0, o), s.transform.localRotationEulerY = a - 90;
                }
            } else if (e > this.playerNum) {
                e = this.ShieldPool.numChildren;
                for (let t = 0; t < e; t++) {
                    let s = this.ShieldPool.getChildAt(t);
                    if (t < this.playerNum) {
                        let a = 0;
                        a = 360 / e * t;
                        let n = i.lensd * e / Math.PI + .1, o = Math.cos(2 * Math.PI * t / e - 90) * n, r = Math.sin(2 * Math.PI * t / e - 90) * n;
                        s.transform.localPosition = new Laya.Vector3(r, 0, o), s.transform.localRotationEulerY = a - 90;
                    } else s.removeSelf(), Laya.Pool.recover(k.SHIELD, s);
                }
            }
        }
        changeBombSkin() {
            let e = this.lastTime / 5;
            this.lastTime = this.lastTime / 5 * 4, e > 40 ? Laya.timer.once(this.lastTime / 5, this, () => {
                this.ShieldPool.active = !1, Laya.timer.once(40, this, () => {
                    this.ShieldPool.active = !0, this.changeBombSkin();
                });
            }) : (this.ShieldPool.active = !0, this.removeShield());
        }
        removeShield() {
            for (let e = this.ShieldPool.numChildren - 1; e >= 0; e--) {
                let t = this.ShieldPool.getChildAt(e);
                t && (t.removeSelf(), Laya.Pool.recover(k.SHIELD, t));
            }
            this.useShield = !1;
        }
        addSpeedProp() {
            if (!this.useShield) {
                this.useSpeed = !0, this.speedProp = .5 * i.playerSc, Laya.timer.once(5e3, this, () => {
                    this.hideSpeedProp();
                });
                for (let e = 0; e < this.objscriptList.length; e++) {
                    this.objscriptList[e].addSpeedProp();
                }
            }
        }
        hideSpeedProp() {
            this.useSpeed = !1, this.speedProp = 0;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].hideSpeedProp();
            }
        }
        showArrow(e) {
            this.isAttack = !0;
            for (let t = 0; t < this.objscriptList.length; t++) if (t % 4 == 2) {
                this.objscriptList[t].showArrow(e);
            }
        }
        hideArrow() {
            this.isAttack = !1;
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].hideArrow();
            }
        }
        removePlayer(t, i) {
            if (this.useShield) return;
            0 == this.index && B.instacne.vibrateShort();
            let s = t.length, n = [], o = 0;
            for (let e = 0; e < t.length; e++) {
                let i = this.objscriptList.splice(t[e] - o, 1);
                n.push(i[0]), o += 1;
            }
            this.playerNum -= s;
            for (let e = 0; e < this.objscriptList.length; e++) this.objscriptList[e].index = e;
            this.changePlayerPos(), this.changeHitBox(this.playerNum);
            let r = Math.ceil(.6 * s);
            for (let e = 0; e < n.length; e++) e < r ? n[e].removePlayer(!0, i.useShield) : n[e].removePlayer(!1, i.useShield);
            Y.instance.changeName(this.playerNumObj, this.playerNum.toString(), this.playerColor),
                this.playerNum <= 0 && (console.log("死亡判断" + this.index), this.player2dName && this.player2dName.clear(),
                    this.isPlayer ? e.event(a.GAMELOSE) : this.obj.removeSelf(), e.event(a.BEKILL, [this.hitTarget.index, this.index]),
                    this.isGameOver = !0, this.isRemove = !1, Laya.timer.clearAll(this));
        }
        removePlayerByOther(e, t) {
            if (0 == e || this.useShield) return;
            this.hitTarget = t;
            let i = t.position, s = t.rad, a = [];
            for (let t = 0; t < this.objscriptList.length; t++) {
                let n = this.objscriptList[t].position;
                if (!n) continue;
                let o = i.x - n.x, r = i.z - n.z;
                Math.sqrt(o * o + r * r) <= s + 2 && a.length <= e && a.push(t);
            }
            this.removePlayer(a, t);
        }
        clearOthers() {
            this.removeShield();
        }
    }
    class ae extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ae();
        }
        init() {
            let e = Laya.loader.getRes(x.playerMidRES[0]);
            this.objPrefab = e, this.objName = k.PLAYERPOOL, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool), this.objPool.name = this.objName + "Pool";
        }
        load(e = null) {
            this.objData = e;
            for (let e = 0; e < 1; e++) {
                let t = this.createObj();
                this.objPool.addChild(t), t.transform.position = new Laya.Vector3(0, 0, 0), this.playerMidItem = t.addComponent(se),
                    this.playerMidItem.index = e, this.playerMidItem.init(), this.objscriptList.push(this.playerMidItem);
            }
        }
        reset() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].reset();
            }
        }
        ready() { }
        start() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                this.objscriptList[e].start();
            }
        }
        movePlayer(e, t) {
            this.playerMidItem && this.playerMidItem.movePlayer(e, t);
        }
        stopMove() {
            this.playerMidItem && this.playerMidItem.stopMove();
        }
        isInsideOhter(e, t) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (s.index != e && !s.isGameOver) {
                    let e = s.rad, i = s.obj.transform.position.clone();
                    if (Laya.Vector3.distance(t, i) < e + 1) return s.index;
                }
            }
            return -1;
        }
        getPlayerNum() {
            return this.playerMidItem ? this.playerMidItem.playerNum : 0;
        }
        getPlayerRad() {
            return this.playerMidItem ? this.playerMidItem.rad : 0;
        }
        isHitRing(e, t) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (s.index != e && !s.isGameOver) {
                    let e = s.rad, i = s.obj.transform.position.clone(), a = Laya.Vector3.distance(t, i);
                    if (a < e + 1 && a > e - 1) return s.index;
                }
            }
            return -1;
        }
        getRankList(e = !1) {
            let t = [];
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i];
                if (!s.isGameOver || e) {
                    let e = {
                        index: s.index,
                        num: s.playerNum,
                        name: s.playerName,
                        skinIndex: s.playerSkinIndex
                    };
                    t.push(e);
                }
            }
            return t;
        }
        getKills() {
            return this.playerMidItem ? this.playerMidItem.killNum : 0;
        }
        getRanPos(e) {
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                if (i.index == e) {
                    let e = i.rad, t = i.obj.transform.position.clone(), s = Math.random() > .5 ? 1 : -1, a = Math.random() > .5 ? 1 : -1;
                    return new Laya.Vector3(t.x + s * e * Math.random(), .5, t.z + a * e * Math.random());
                }
            }
            return null;
        }
        getSkinIndex(e) {
            for (let t = 0; t < this.objscriptList.length; t++) {
                let i = this.objscriptList[t];
                if (i.index == e) return i.playerSkinIndex;
            }
            return 0;
        }
        getPlayerObj(e, t, i) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let s = this.objscriptList[i], a = s.obj, n = Laya.Vector3.distance(a.transform.position.clone(), e);
                if (t > s.playerNum && n < 10) return a;
            }
            return null;
        }
        getPlayerPos() {
            for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                if (!t.isGameOver) {
                    let e = t.obj.transform.position.clone(), i = this.playerMidItem.rad + 5 + 20 * Math.random(), s = 360 * Math.random(), a = e.x + Math.cos(s / 2 / Math.PI) * i, n = e.z + Math.sin(s / 2 / Math.PI) * i;
                    return new Laya.Vector3(a, 0, n);
                }
            }
            return null;
        }
        hitOther(e, t, i) {
            for (let s = 0; s < this.objscriptList.length; s++) {
                let a = this.objscriptList[s];
                if (!a.isGameOver && a.index != e) {
                    let e = a.obj.transform.position.clone(), s = a.rad, n = e.x - t.x, o = e.z - t.z;
                    if (Math.sqrt(n * n + o * o) < i + s + .5) return a;
                }
            }
            return null;
        }
        addEventListener() { }
        removeEventListener() { }
        clearOthers() { }
    }
    class ne {
        constructor() {
            this.$isLock = !1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new ne();
        }
        get isLock() {
            return this.$isLock;
        }
        set isLock(e) {
            this.cameraScript && (this.cameraScript.isLock = e), this.$isLock = e;
        }
        init() {
            this.light = new Laya.DirectionLight(), this.light.name = "light", T.instance.scene3d.addChild(this.light),
                this.light.transform.rotation = new Laya.Quaternion(.1093816, .8754261, .4082179, -.2345697),
                this.light.intensity = .3, this.light.lightmapBakedType = Laya.LightSprite.LIGHTMAPBAKEDTYPE_MIXED,
                this.light.color = new Laya.Vector3(1, .9568627, .8392157), this.light.shadowMode = Laya.ShadowMode.None,
                this.light.shadowDistance = 100, this.light.shadowResolution = 1024, this.light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                this.light.shadowStrength = 1.5, this.cameraObj = new Laya.Sprite3D(), this.camera = new Laya.Camera(),
                this.cameraObj.addChild(this.camera), this.camera.enableHDR = !1, this.camera.farPlane = 1e3,
                this.camera.nearPlane = 1, this.camera.fieldOfView = 60, this.camera.clearFlag = Laya.CameraClearFlags.SolidColor,
                this.camera.clearColor = new Laya.Vector4(.1921569, .3019608, .4745098, 0), this.cameraScript = this.cameraObj.addComponent(M),
                T.instance.scene3d.addChild(this.cameraObj), this.addEventListener();
        }
        changeSkyBox() {
            let e = Laya.loader.getRes(x.skyBoxRES[0]);
            this.camera.clearFlag = Laya.CameraClearFlags.Sky;
            let t = T.instance.scene3d.skyRenderer;
            t.mesh = Laya.SkyBox.instance, t.material = e, Laya.timer.frameLoop(1, this, () => {
                e && (e.rotation += .01);
            });
        }
        reset() {
            this.cameraObj.transform.position = new Laya.Vector3(0, 0, 0), this.camera.transform.localPosition = new Laya.Vector3(0, 15, -17),
                this.camera.transform.localRotationEuler = new Laya.Vector3(-40, 180, 0);
        }
        ready() { }
        start() {
            this.startLockPlayer();
        }
        startLockPlayer() {
            this.cameraScript && (this.cameraScript.playerObj = ae.instance.playerMidItem.obj,
                this.isLock = !0);
        }
        changeView(e) {
            let t = 15 + 15 * (e - 1) * .03, i = -17 - 17 * (e - 1) * .03;
            this.cameraScript.aimPos = new Laya.Vector3(0, t, i), this.camera.transform.localPosition = new Laya.Vector3(0, t, i);
        }
        gameOver() {
            this.isLock = !1, this.cameraScript.playerObj = null;
        }
        addEventListener() {
            e.on(a.GAMELOSE, this, this.unLockPlayer), e.on(a.GAMEWIN, this, this.showPlayer),
                e.on(a.CHANGECAMERA, this, this.changeView), e.on(a.GAMEOVER, this, this.gameOver);
        }
        unLockPlayer() {
            this.isLock = !1;
        }
        showPlayer() { }
        destroyCamera() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.cameraObj.removeSelf());
        }
    }
    class oe extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new oe();
        }
        init() {
            let e = Laya.loader.getRes(x.groundRES[x.groundRES.length - 1]);
            this.objPrefab = e, this.objName = k.GROUND, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e;
            let t = this.createObj();
            t.transform.localScale = new Laya.Vector3(2 * i.groundRad, 1, 2 * i.groundRad),
                this.objPool.addChild(t), this.objList.push(t), t.meshRenderer.material = Laya.loader.getRes(x.groundRES[Math.floor(5 * Math.random())]);
        }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class re extends N {
        static get instance() {
            return this._instance ? this._instance : this._instance = new re();
        }
        init() {
            let e = Laya.loader.getRes(x.itemRES[0]);
            this.objPrefab = e, this.objName = k.ITEMOBJ, this.objPool = new Laya.Sprite3D(),
                T.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e;
        }
        ready() { }
        start() {
            Laya.timer.once(2e4, this, () => {
                Laya.timer.loop(3e3, this, () => {
                    if (this.objList.length < 2) {
                        let e = this.createObj();
                        e.active = !0, this.objPool.addChild(e);
                        let t = 12 - i.groundRad + 2 * Math.random() * (i.groundRad - 12), s = 12 - i.groundRad + 2 * Math.random() * (i.groundRad - 12);
                        e.transform.position = new Laya.Vector3(t, 0, s), Math.random() > .5 ? (e.getChildAt(0).active = !0,
                            e.getChildAt(1).active = !1) : (e.getChildAt(0).active = !1, e.getChildAt(1).active = !0),
                            this.objList.push(e);
                    }
                });
            }), Laya.timer.loop(24, this, () => {
                for (let t = 0; t < this.objList.length; t++) {
                    let i = this.objList[t];
                    if (i.active) {
                        if (0 == ae.instance.isInsideOhter(-1, this.objList[t].transform.position.clone())) i.getChildAt(0).active ? e.event(a.GETITEM, [0, 0]) : e.event(a.GETITEM, [0, 1]),
                            i.active = !1, i.removeSelf(), Laya.Pool.recover(k.ITEMOBJ, i), i = null, this.clearList(); else {
                            let s = ee.instance.isInsideOhter(-1, this.objList[t].transform.position.clone());
                            -1 != s && (i.getChildAt(0).active ? e.event(a.GETITEM, [s, 0]) : e.event(a.GETITEM, [s, 1]),
                                i.active = !1, i.removeSelf(), Laya.Pool.recover(k.ITEMOBJ, i), i = null, this.clearList());
                        }
                    }
                }
            });
        }
        clearList() {
            let e = [];
            for (let t = 0; t < this.objList.length; t++) {
                let i = this.objList[t];
                i && e.push(i);
            }
            this.objList = e;
        }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    window.loadScene = false;
    window.loadLoadPro = false;
    window.loadEnd = false;
    class he {
        constructor() {
            this.isOver = !1, this.killNum = 0, this.rankList = new Array(), this.rankList2 = new Array(),
                this.offx = 0, this.offy = 0, this.nameList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new he();
        }
        init() {
            T.instance.init();
            let e = x.unityRES;
            Laya.loader.create(e, Laya.Handler.create(this, e => {
                Laya.loader.load(x.playerNameTXT, Laya.Handler.create(this, e => {
                    let t = e;
                    this.nameList = t.split(/[\n]/), ne.instance.init(), ae.instance.init(), oe.instance.init(),
                        W.instance.init(), q.instance.init(), ie.instance.init(), ee.instance.init(), R.instance.init(),
                        K.instance.init(), D.instance.init(), U.instance.init(), re.instance.init(), this.sceneObjLoadFinish(),
                        this.addEventListener();
                    window.loadScene = true;

                }));
            }));
            this.canMove = false;
        }
        sceneObjLoadFinish() {
            this.clearGame();
        }
        clearGame() {
            Y.instance.clear(), U.instance.clear(), ee.instance.clearScript(), ae.instance.clearScript(),
                ie.instance.clearScript(), oe.instance.clearObj(), R.instance.clearScript(), K.instance.clear(),
                q.instance.clearScript(), D.instance.clearScript(), re.instance.clearObj(), this.load();
        }
        load() {
            ae.instance.load(), oe.instance.load(), ie.instance.load(), ee.instance.load(),
                re.instance.load(), this.reset();
        }
        reset() {
            ne.instance.reset(), ae.instance.reset(), ee.instance.reset(), this.killNum = 0,
                this.killList = new Array(), i.gameTimeOut = !1;
        }
        readyGame() {
            e.event(a.GAMEREADY), I.instance.showBanner(), ne.instance.ready(), ae.instance.ready(),
                ee.instance.ready();
        }
        startGame() {
            this.isOver = !1, i.isGameStart = !0, e.event(a.GAMESTART), h.islinshiWhite ? m.instance.showBanner(!0) : m.instance.hideBanner(),
                ne.instance.start(), ae.instance.start(), ee.instance.start(), ie.instance.start(),
                ee.instance.start(), re.instance.start(), i.startTime = Date.parse(new Date().toString()),
                Laya.timer.frameLoop(10, this, () => {
                    this.getRankList(), 60 - (Date.parse(new Date().toString()) - i.startTime) / 1e3 <= 0 && (e.event(a.GAMEWIN),
                        i.gameTimeOut = !0);
                });
        }
        gameLose() {
            Laya.timer.clearAll(this), this.isOver ? console.log("再次进入游戏结束判定1") : (this.getRankList2(),
                this.isOver = !0, i.isGameStart = !1, E.instance.loseVoice(), Laya.timer.once(1500, this, () => {
                    e.event(a.GAMEOVER), Laya.Scene.open(c.LoseScene, !1);
                }));
        }
        gameWin() {
            if (this.isOver) console.log("再次进入游戏结束判定2"); else {
                this.getRankList2(), this.isOver = !0, i.isGameStart = !1, i.gameTimeOut = !0, Laya.timer.clearAll(this),
                    E.instance.winVoice(), i.getGold = ae.instance.getPlayerNum();
                let t = 1;
                for (let e = 0; e < this.rankList.length; e++) 0 == this.rankList[e].index && (t = e + 1);
                Laya.timer.once(1500, this, () => {
                    e.event(a.GAMEOVER), Laya.Scene.open(c.WinScene, !1, t);
                });
            }
        }
        beKill(e, t) {
            this.killList.unshift(t), this.killNum++, this.killNum == i.npcNum && this.gameWin();
        }
        getRankList() {
            let e = ae.instance.getRankList(), t = ee.instance.getRankList(), i = e.concat(t);
            i.sort((e, t) => t.num - e.num), this.rankList = i;
        }
        getRankList2() {
            let e = ae.instance.getRankList(!0), t = ee.instance.getRankList(!0), i = e.concat(t);
            i.sort((e, t) => t.num - e.num), this.rankList2 = i;
        }
        getColor(e) {
            switch (e) {
                case 0:
                    return L.orange;

                case 1:
                    return L.blue;

                case 2:
                    return L.green;

                case 3:
                    return L.red;

                case 4:
                    return L.yellow;

                case 5:
                    return L.verdant;

                default:
                    return "#DDDDDD";
            }
        }
        addEventListener() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startTouch),
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stopTouch),
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.stopTouch),
                e.on(a.RESETGAME, this, this.clearGame),
                e.on(a.GAMELOSE, this, this.gameLose), e.on(a.GAMEWIN, this, this.gameWin), e.on(a.BEKILL, this, this.beKill);
        }
        startTouch(e) {
            this.canMove = true;
            this.startX = e.stageX, this.startY = e.stageY;
        }
        mouseMove(e) {
            if (!this.canMove) {
                return;
            }
            let t = e.stageX - this.startX, i = e.stageY - this.startY;
            Math.abs(t) > .001 && Math.abs(i) > .001 && ae.instance.movePlayer(t, i);
        }
        stopTouch(e) {
            this.canMove = false;;
        }
        ranName() {
            return this.nameList && this.nameList.length > 0 ? this.nameList[Math.floor(Math.random() * this.nameList.length)] : "";
        }
    }
    class le extends p.scene.LoadingSceneUI {
        constructor() {
            super(), this.times = 2, this.trueLoadFinish = !1, this.fadeLoadFinish = !1;
        }
        onEnable() {
            this.zOrder = 3500, this.y = i.statusBarHeight, h.islinshiWhite && Laya.Browser.onMiniGame ? (
                this._boxBlack.visible = !1, this._listDown.height = 1107 + i.stage_height - i.ore_height - i.statusBarHeight,
                this._imgStart.visible = !1, this._spLoad2.visible = !0) : (this._boxBlack.visible = !0);
        }
        onOpened() {
            u.instance.sendEvent(n.Load_start), this._imgMask = this._imgLoading.mask,
                this.loadSubpackage();
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId), this._listDown.selectedIndex = -1);
        }
        loadAd(e) {
            this._listDown.array = e;
        }
        jumpRandon() {
            if (h.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId);
            }
        }
        startGame() {

        }
        loadSubpackage(a = 1) {
            let e = this;
            e._imgMask.x = 408.8 - 511, Laya.timer.once(200, e, () => {
                e.goMainScene();
            });
        }
        fadeLoad() {

        }
        goMainScene() {
            u.instance.sendEvent(n.load_finish),
                platform.getInstance().showSplash(),
                platform.getInstance().yadstartup("Archers-Io", () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Archers-Io-musicState") ?
                        JSON.parse(Laya.LocalStorage.getItem("Archers-Io-musicState")) : false;
                    he.instance.init(),
                        Laya.timer.once(100, this, () => {
                            (Laya.timer.loop(500, this, () => {
                                window.loadScene && !window.loadEnd && (Laya.timer.clearAll(this),
                                    Laya.Scene.close(c.LoadingScene),
                                    platform.getInstance().hideSplash(),
                                    platform.getInstance().showBanner(),
                                    Laya.Scene.open(c.MainScene, !1))
                            })
                            );
                        });
                })
        }
        onClosed() {

        }
    }
    class ce extends Laya.Box {
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
                e._txtTitle && (e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class de extends Laya.VScrollBar {
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
    class ge extends Laya.Script {
        constructor() {
            super(), this.dic = 2;
        }
        onStart() {
            this.changeView();
        }
        changeView() {
            let e = this.owner;
            this.def_x = e.x, this.def_y = e.y, this.byNoRainLand(), 0 == this.dic ? e.x = i.stage_width - (i.ore_width - this.def_x) : 1 == this.dic ? e.x = i.stage_width / 2 - (e.width / 2 - e.pivotX) : 2 == this.dic && (e.y = i.stage_height - (i.ore_height - this.def_y) - i.statusBarHeight);
        }
        byNoRainLand() {
            console.log();
        }
        onDestroy() { }
    }
    class me extends p.scene.LoseSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, I.instance.canShow && null != I.instance.nativeAdData ? (this._imgCon.x = 25,
                this._imgMoreGame.visible = !0) : Laya.Browser.onVVMiniGame && null != C.instance.nativeAdData(2) ? (this._imgCon.x = 25,
                    this._imgMoreGame.visible = !0) : (this._imgMoreGame.visible = !1, this._imgCon.x = 211);
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                this._txtGold.text = f.instacne.formatToUnitEN(i.gold), u.instance.sendEvent(n.show_relive),
                m.instance.showBanner(!0), g.instance.closeBanner(), C.instance.showBanner(), g.instance.openMoreNativeAdScene(),
                this.scene_Data ? (this._txtIndex.text = "", this._imgLose.visible = !1) : (this._imgLose.visible = !0,
                    this._txtIndex.text = ""), this.isTouchAd = !1;
            platform.getInstance().initList(this.list_showlist);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            s == this._imgCon ? (i.isGameStart = !1, (
                platform.getInstance().showInterstitial(() => {
                    e.event(a.RESETGAME),
                        Laya.Scene.close(c.LoseScene)
                })
                //      ,Laya.Scene.open(c.LoseTwiceScene, !1, this.scene_Data),
                // h.isJump && (g.instance.openJuhe(), m.instance.hideBanner(), g.instance.closeBanner())
            )) : s == this._imgMoreGame && e.event(a.GETAPP);
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class ue extends p.scene.LoseTwiceSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, !Laya.Browser.onQGMiniGame && h.isJump && (this._spMoreGame.visible = !0),
                I.instance.canShow && null != I.instance.nativeAdData ? (this._spAgain.x = 25, this._spAn.visible = !0) : Laya.Browser.onVVMiniGame && null != C.instance.nativeAdData(2) ? (this._spAgain.x = 25,
                    this._spAn.visible = !0) : (this._spAn.visible = !1, this._spAgain.x = 211);
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                this._txtGold.text = f.instacne.formatToUnitEN(i.gold), u.instance.sendEvent(n.show_jiesuan),
                this.isTouchAd = !1;
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            s == this._spAgain ? (I.instance.canShow || Laya.Browser.onVVMiniGame) && h.checkWuchu && !this.isTouchAd ? (e.event(a.GETAPP),
                this.isTouchAd = !0) : (Laya.Scene.close(c.LoseTwiceScene), g.instance.openLeft(),
                    h.isJump && g.instance.openLiangPaiJuhe(), g.instance.openDuilian(), Laya.Browser.onQGMiniGame && (i.luckBoxTime++,
                        i.luckBoxTime > 2 && (i.luckBoxTime = 0, Laya.Scene.open(c.LuckBoxScene, !1)))) : s == this._spMoreGame ? h.isJump && (g.instance.openJuhe(),
                            m.instance.hideBanner(), g.instance.closeBanner()) : this._spAn && e.event(a.GETAPP);
        }
        onClosed() {
            g.instance.closeLiugong(), g.instance.closeNativeAdSence(), this.removeEventListener();
        }
    }
    class pe extends p.scene.LuckBoxSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._boxNative.visible = !1, this._main.y = (i.stage_height - i.ore_height) / 2 + i.statusBarHeight;
        }
        onOpened(e) {
            this.addEventListener(), this.showNative(), this.isTouchAd = !1;
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = I.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = C.instance.nativeAdData(3));
            let t = this;
            if (I.instance.hideBanner(), C.instance.hideBanner(), null == e) t._boxNative.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        I.instance.nativeAdreportAdShow(), C.instance.nativeAdreportAdShow(3), console.log("加载成功")) : (console.log("加载失败"),
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
            t == this._imgGet ? (m.instance.showVideo(this, this.getGold)) : t == this._imgNative ? (I.instance.nativeAdreportAdClick(),
                C.instance.nativeAdreportAdClick(3)) : t == this._imgSSS ? this._boxNative.visible = !1 : t == this._imgNo && (I.instance.canShow && h.checkWuchu && !this.isTouchAd ? (I.instance.nativeAdreportAdClick(),
                    this.isTouchAd = !0) : Laya.Browser.onVVMiniGame && h.checkWuchu && !this.isTouchAd ? (C.instance.nativeAdreportAdClick(3),
                        this.isTouchAd = !0) : Laya.Scene.close(c.LuckBoxScene));
        }
        getGold(e) {
            if (e) {
                let e = Math.floor(50 * Math.random()) + 50;
                i.gold += e, d.instance.openTips("Coin +" + e);
            }
            Laya.Scene.close(c.LuckBoxScene);
        }
        onClosed() {
            I.instance.removeNativeAd(), C.instance.removeNativeAd(3), C.instance.showBanner(),
                E.instance.mainBg(), this.removeEventListener();
        }
    }
    class ye extends p.scene.MainSceneUI {
        constructor() {
            super(), this.waitLoad = !1, this.daotime = 0;
        }
        onEnable() {
            this.y = i.statusBarHeight, i.isLoadingVideo = !0,
                h.islinshiWhite || (this._imgSkin.visible = !1);
        }
        onOpened(e) {
            this.addEventListener(), h.openJiugong && g.instance.openJiugong(), u.instance.sendEvent(n.enter_main),
                this.changeGold(), this.resetGame(), this.timer.once(500, this, () => {
                    E.instance.mainBg();
                }), this.timer.once(1e3, this, () => {
                    g.instance.openDuilian();
                });
            this._btn_music.skin = window.WebAudioEngine.pause ? "img/connon/btn_sound_off.png" : "img/connon/btn_sound_on.png";

        }
        changeMuisc() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this._btn_music.skin = window.WebAudioEngine.pause ? "img/connon/btn_sound_off.png" : "img/connon/btn_sound_on.png";
            Laya.LocalStorage.setItem("Archers-Io-musicState", JSON.stringify(window.WebAudioEngine.pause));
        }
        resetGame() {
            this._btn_music.visible = this._logo.visible = this._imgStart.visible = !0, this._imgChangeName.visible = !0, this._imgStr.visible = !0,
                Laya.Browser.onQGMiniGame || (h.isShowHu && h.isJump ? this._imgMore.visible = !0 : this._imgMore.visible = !1),
                this._imgSkin.visible = !0, Laya.timer.clearAll(this), this.waitLoad = !1, E.instance.mainBg(),
                this._fcpLevel.visible = !1, this._fcpLevel.value = "",//"第" + i.levelIndex + "关",
                this._boxRank.visible = !1,
                this._blKill.text = "Kills:0", this._lbTime.text = "00:00", this._txtName.text = "Player";
        }
        readyGame() {
            this._btn_music.visible = this._logo.visible = this._imgStart.visible = !1, this._imgChangeName.visible = !1, this._imgStr.visible = !1,
                this._imgSkin.visible = !1, this._imgMore.visible = !1, this._fcpLevel.visible = !1,
                g.instance.closeDuilian(), g.instance.closeLeft(), he.instance.readyGame(), Laya.timer.once(600, this, this.readyFinish);
        }
        readyFinish() {
            this.daotime = 3, d.instance.openMoveTips(), this.gameStart();
        }
        changeDao() {
            this._fcpdao2.value = this.daotime.toString(), this._imgdao2.visible = !0, E.instance.dao(),
                Laya.Tween.to(this._imgdao2, {
                    scaleX: .7,
                    scaleY: .7
                }, 500, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this._imgdao2, {
                        scaleX: .5,
                        scaleY: .5
                    }, 500, null, Laya.Handler.create(this, () => {
                        this.daotime--, 0 != this.daotime ? this.changeDao() : (E.instance.daoend(), this._imgdao2.visible = !1,
                            this.gameStart());
                    }));
                }));
        }
        gameStart() {
            console.log(this._lbPlayer),
                platform.getInstance().showInterstitial(() => {
                    he.instance.startGame(), this._boxRank.visible = !0,
                        Laya.timer.once(200, this, () => {
                            Laya.timer.frameLoop(2, this, this.showRank);
                        });
                    if (i.levelIndex == 1) {
                        this.lab_level1.visible = true;
                        Laya.timer.once(3000, this, () => {
                            this.lab_level1.visible = false;
                        })
                    }
                })
        }
        showRank() {
            this._blKill.text = "Kills:" + ae.instance.getKills().toString();
            let e = he.instance.rankList;
            if (null == e || e.length < 1) this._imgRank1.visible = !1, this._imgRank2.visible = !1,
                this._imgRank3.visible = !1, this._imgRankPlayer.visible = !1; else {
                let t = !1;
                if (this._imgRank1.visible = !0, this._lbRank1.text = e[0].name, this._lbRank1.color = he.instance.getColor(e[0].skinIndex),
                    0 == e[0].index && (t = !0), e.length > 1 ? (this._imgRank2.visible = !0, this._lbRank2.text = "2- " + e[1].name,
                        this._lbRank2.color = he.instance.getColor(e[1].skinIndex), 0 == e[1].index && (t = !0)) : this._imgRank2.visible = !1,
                    e.length > 2 ? (this._imgRank3.visible = !0, this._lbRank3.text = "3- " + e[2].name,
                        this._lbRank3.color = he.instance.getColor(e[2].skinIndex), 0 == e[2].index && (t = !0)) : this._imgRank3.visible = !1,
                    0 == t) for (let t = 0; t < e.length; t++) 0 == e[t].index && (this._imgRankPlayer.visible = !0,
                        this._lbPlayer.text = t + 1 + "- " + e[t].name, this._lbPlayer.color = he.instance.getColor(e[t].skinIndex)); else this._imgRankPlayer.visible = !1;
                let s = 0, a = 0, n = 60 - (Date.parse(new Date().toString()) - i.startTime) / 1e3;
                n >= 0 && (a = n - 60 * (s = Math.floor(n / 60)), this._lbTime.text = (s < 10 ? "0" + s : "" + s) + ":" + (a < 10 ? "0" + a : "" + a));
            }
        }
        gameOver() {
            this.lab_level1.visible = false;
            Laya.timer.clearAll(this);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.JIUGONGCLOSE, this, this.readyGame),
                e.on(a.GOLDCHANGE, this, this.changeGold), e.on(a.RESETGAME, this, this.resetGame),
                e.on(a.GAMEOVER, this, this.gameOver), e.on(a.SKINJUMP, this, this.skinJump);
            this._btn_music.on(Laya.Event.CLICK, this, this.changeMuisc);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.JIUGONGCLOSE, this, this.readyGame),
                e.off(a.GOLDCHANGE, this, this.changeGold), e.off(a.RESETGAME, this, this.resetGame),
                e.off(a.GAMEOVER, this, this.gameOver), e.off(a.SKINJUMP, this, this.skinJump);
            this._btn_music.off(Laya.Event.CLICK, this, this.changeMuisc);
        }
        changeGold() {
            this._txtGold.text = f.instacne.formatToUnitEN(i.gold);
        }
        skinJump() {
            this.readyGame();
        }
        getTouch(t) {
            let s = t.target;
            if (s == this._imgStart)
                if (this.waitLoad) d.instance.openTips("Loading...");
                else platform.getInstance().showInterstitial(() => {
                    this.readyGame()
                });
            else if (s == this._imgSkin) Laya.Scene.open(c.SelectSkinScene, !1);
            else if (s == this._imgMore) g.instance.openJuhe();
            else if (s == this._spTou) {
                let t = he.instance.ranName();
                this._txtName.text = t, e.event(a.CHANGENAME, t);
            }
        }
        showGoldenEgg(t = null) {
            m.instance.hasBanner ? (i.isLoadingVideo = !0, h.isShowHu ? g.instance.openGoldenEgg(!0) : (e.event(a.JIUGONGCLOSE),
                i.isLoadingVideo = !1), u.instance.sendEvent(n.Start_click)) : this.readyGame();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Le {
        static get instance() {
            return this._instance ? this._instance : this._instance = new Le();
        }
        createPlayer(e, t, s, a, n = null) {
            this.scene3d = n || new Laya.Scene3D(), Laya.stage.addChild(this.scene3d), this.obj = Laya.Pool.getItem(k.PLAYER),
                this.obj || (this.obj = Laya.loader.getRes(x.playerObjRES[x.playerObjRES.length - 1]).clone()),
                this.scene3d.addChild(this.obj), this.obj.transform.localScale = new Laya.Vector3(1, 1, 1),
                this.obj.transform.position = new Laya.Vector3(0, 0, 0), this.obj.transform.localRotationEulerY = -90,
                this.camera = new Laya.Camera(), this.camera.transform.position = new Laya.Vector3(.2, 1.3, -3),
                this.camera.transform.rotation = new Laya.Quaternion(0, .9928806, .0591143, 0),
                this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.scene3d.addChild(this.camera),
                this.camera.viewport = new Laya.Viewport(e * Laya.stage.clientScaleX, (t + i.statusBarHeight) * Laya.stage.clientScaleY, s * Laya.stage.clientScaleX, a * Laya.stage.clientScaleY),
                this.light = new Laya.DirectionLight(), this.scene3d.addChild(this.light), this.light.transform.position = new Laya.Vector3(-9.281452, 15.48453, -18.53672),
                this.light.transform.rotation = new Laya.Quaternion(.1093816, .8754261, .4082179, -.2345697),
                this.light.intensity = .41, this.scene3d.ambientColor = new Laya.Vector3(.7, .7, .7);
            let o = this.obj.getChildAt(0);
            o.transform.localRotationEulerY = -90, o.active = !0;
            let r = this.obj.getChildAt(0).getChildAt(2), h = this.obj.getChildAt(0).getChildAt(3);
            r.active = !1, h.active = !1;
            let l = this.obj.getChildAt(0).getComponent(Laya.Animator);
            return l.play(y.Move), l.speed = 1, l.getControllerLayer(0).getAnimatorState(y.Move).clip.islooping = !0,
                this.obj;
        }
        clearPlayer() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.camera = null),
                this.light && (this.light.removeSelf(), this.light.destroy(), this.light = null),
                this.obj && (this.obj.removeSelf(), Laya.Pool.recover(k.PLAYER, this.obj), this.obj = null),
                this.scene3d && (this.scene3d.removeSelf(), this.scene3d.destroyChildren(), this.scene3d.destroy(),
                    this.scene3d = null);
        }
    }
    class Se extends p.scene.SelectSkinSceneUI {
        constructor() {
            super(), this.linUnlock = -1, this.isRan = !1, this.playerSkinIndex = 0;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._txtGold.text = f.instacne.formatToUnitEN(i.gold);
        }
        onOpened(e) {
            C.instance.hideBanner(), m.instance.hideBanner(), g.instance.closeBanner(), g.instance.closeLeft(),
                g.instance.closeDuilian(), this.addEventListener(), this._listskin.renderHandler = new Laya.Handler(this, this.changeItem),
                this._listskin.selectHandler = new Laya.Handler(this, this.selectList), this._listskin.selectEnable = !0,
                this.changeList(), this.showPlayerSkin();
            window.yad.visible = false;
        }
        changeList() {
            this._listskin.array = [0, 1, 2, 3, 4, 5], this._listskin.selectedIndex = i.skinIndex;
        }
        selectList(t) {
            if (i.isUnlock(t)) if (this.isRan) this._listskin.selectedIndex = -1, d.instance.openTips("Waiting"); else {
                let s = this._listskin.getCell(t);
                s.getChildByName("_imgBg").skin = "img/skinscene/goumai.png";
                this._listskin.getCell(i.skinIndex);
                s.getChildByName("_imgBg").skin = "img/skinscene/heidimian.png", i.skinIndex = t,
                    this.showPlayerSkin(), e.event(a.SKINCHANGE);
            } else this._listskin.selectedIndex = -1, d.instance.openTips("Locked");
        }
        changeItem(e, t) {
            let s = e.getChildByName("_imgBg"), a = e.getChildByName("_imgPlayer"), n = e.getChildByName("_imgSelect");
            a.skin = "img/player/" + t + ".png", t == i.skinIndex ? n.visible = !0 : n.visible = !1,
                s.skin = "img/skinscene/heidimian.png";
            for (let e in i.unlockSkinList) i.unlockSkinList[Number(e)] == t && (s.skin = "img/skinscene/goumai.png");
            t == this.linUnlock && (s.skin = "img/skinscene/goumai.png");
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            if (s == this._imgRan) {
                if (this.isRan) return;
                i.gold >= 500 ? 6 == i.unlockSkinList.length ? d.instance.openTips("You have unlocked all skins") : (i.gold -= 500,
                    e.event(a.GOLDCHANGE), this._txtGold.text = i.gold.toString(), this.ranSkin()) : d.instance.openTips("Coins Are Not Enough");
            } else s == this._imgWatch ? m.instance.showVideo(this, this.getGold) :
                s == this._imgBack && Laya.Scene.close(c.SelectSkinScene);
        }
        ranSkin() {
            this.isRan = !0;
            let t = [0, 1, 2, 3, 4, 5].filter(e => !new Set(i.unlockSkinList).has(e));
            console.log(t);
            let s = Math.floor(Math.random() * t.length), n = 0;
            Laya.timer.loop(200, this, () => {
                let o = n > t.length ? n % t.length : n, r = t[o];
                if (this.linUnlock = r, this.changeList(), ++n > t.length + s) {
                    Laya.timer.clearAll(this), i.skinIndex = t[s];
                    let n = JSON.parse(JSON.stringify(i.unlockSkinList));
                    n.push(i.skinIndex), i.unlockSkinList = n, e.event(a.SKINCHANGE), this.showPlayerSkin(),
                        this.isRan = !1, this._listskin.selectedIndex = t[s], this.linUnlock = -1;
                }
            });
        }
        showPlayerSkin() {
            if (this.player) {
                if (this.playerSkinIndex = i.skinIndex, !this.hatPoint) {
                    this.hatPoint = this.player.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(0).getChildAt(0),
                        this.hatRing = this.player.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(3),
                        this.spSkin = this.player.getChildAt(0).getChildAt(1), this.mat1 = Laya.loader.getRes(x.skinRES[0]),
                        this.mat2 = Laya.loader.getRes(x.skinRES[1]), this.mat3 = Laya.loader.getRes(x.skinRES[2]),
                        this.mat4 = Laya.loader.getRes(x.skinRES[3]), this.mat5 = Laya.loader.getRes(x.skinRES[4]),
                        this.mat6 = Laya.loader.getRes(x.skinRES[5]), this.mat7 = Laya.loader.getRes(x.skinRES[6]);
                    let e = this.player.getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2).getChildAt(0).getChildAt(1).getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(2);
                    e.transform.localPosition = new Laya.Vector3(-.3, -.25, 0), e.transform.localRotationEuler = new Laya.Vector3(0, 0, -45);
                }
                this.changeSkin();
            } else this.player = Le.instance.createPlayer(175, 100, 400, 480), this.showPlayerSkin();
        }
        changeSkin() {
            for (let e = 0; e < this.hatPoint.numChildren; e++) this.hatPoint.getChildAt(e).active = !1;
            switch (this.hatRing.active = !1, this.playerSkinIndex) {
                case 0:
                    this.hatPoint.getChildAt(0).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat1;
                    break;

                case 1:
                    this.hatPoint.getChildAt(1).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat2;
                    break;

                case 2:
                    this.hatPoint.getChildAt(2).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat3;
                    break;

                case 3:
                    this.hatPoint.getChildAt(3).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat4;
                    break;

                case 4:
                    this.hatPoint.getChildAt(4).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat5,
                        this.hatRing.active = !0;
                    break;

                case 5:
                    this.hatPoint.getChildAt(5).active = !0, this.spSkin.simpleSkinnedMeshRenderer.material = this.mat6;
                    break;

                case 6:
                    this.spSkin.simpleSkinnedMeshRenderer.material = this.mat7;
            }
        }
        getGold(t) {
            1 == t && (i.gold += i.watchADGold, e.event(a.GOLDCHANGE), d.instance.openTips("Coin +" + i.watchADGold),
                this._txtGold.text = f.instacne.formatToUnitEN(i.gold));
        }
        removeScene() {
            Le.instance.clearPlayer();
        }
        onClosed() {
            e.event(a.ONSHOWNAME), m.instance.showBanner(!0), C.instance.showBanner(), g.instance.closeBanner(),
                g.instance.openLeft(), g.instance.openDuilian(), this.removeScene(), this.removeEventListener();
            window.yad.visible = true;
        }
    }
    class be extends p.scene.SkinTrySceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._main.y = (i.stage_height - i.ore_height) / 2,
                I.instance.canShow || Laya.Browser.onVVMiniGame ? this._imgMoreGame.visible = !0 : Laya.Browser.onVVMiniGame ? this._imgMoreGame.visible = !0 : this._imgMoreGame.visible = !1;
        }
        onOpened(e) {
            this.scene_data = e, this.showPlayerSkin(), this.addEventListener(), this.showNative(),
                this.isTouchAd = !1;
        }
        showPlayerSkin() {
            if (this.player) {
                this.player.getChildAt(0).getChildAt(0);
            } else this.player = Le.instance.createPlayer(175, 100, 400, 480), this.player.transform.localPositionY = -.5,
                this.showPlayerSkin();
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = I.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = C.instance.nativeAdData(0)),
                I.instance.hideBanner(), C.instance.hideBanner();
            let t = this;
            if (null == e) t._boxNative.visible = !1, t._imgMoreGame.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        I.instance.nativeAdreportAdShow(), C.instance.nativeAdreportAdShow(0), console.log("加载成功")) : (console.log("加载失败"),
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
        getTouch(t) {
            let i = t.target;
            i == this._txtNo ? I.instance.canShow && h.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                I.instance.nativeAdreportAdClick()) : Laya.Browser.onVVMiniGame && h.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                    C.instance.nativeAdreportAdClick(0)) : (e.event(a.SKINJUMP), this.clearScene(),
                        Laya.Scene.close(c.SkinTryScene)) : i == this._imgSkin ? (m.instance.showVideo(this, this.trySkin)) : i == this._imgNative || i == this._imgMoreGame ? (I.instance.nativeAdreportAdClick(),
                            C.instance.nativeAdreportAdClick(0)) : i == this._imgSSS && (this._boxNative.visible = !1);
        }
        trySkin(t) {
            1 == t && (d.instance.openTips("Congratulations! You can trial this skin"), i.trySkinIndex = this.scene_data, i.trySkinTimes = 2,
                e.event(a.SKINCHANGE), e.event(a.SKINJUMP), this.clearScene(), Laya.Scene.close(c.SkinTryScene));
        }
        clearScene() {
            Le.instance.clearPlayer();
        }
        onClose() {
            I.instance.removeNativeAd(), C.instance.removeNativeAd(0), C.instance.showBanner(),
                this.removeEventListener();
        }
    }
    class ve extends p.scene.WinSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, Laya.Browser.onMiniGame ? (this._main.visible = !0,
                this._main1.visible = !1) : (this._main.visible = !1, this._main1.visible = !0);
        }
        onOpened(e) {
            g.instance.openMoreNativeAdScene(), g.instance.openLiugong(), g.instance.openNativeAdScene(),
                this.scene_Data = e, this.scene_Data ? (this._txtRank.text = "No." + this.scene_Data,
                    this._imgTitle.visible = !1, this._txtRank2.text = "No." + this.scene_Data,
                    this._imgTitle2.visible = !1) : (this._imgTitle2.visible = !0, this._txtRank2.text = "",
                        this._imgTitle.visible = !0, this._txtRank.text = ""), this.addEventListener(),
                this._txtNum.text = "+" + i.getGold.toString(), g.instance.closeBanner(), u.instance.sendEvent(n.Game_pass),
                this._txtGold.text = f.instacne.formatToUnitEN(i.gold), h.isJump && g.instance.openJuhe(),
                this.isTouchAd = !1, Laya.Browser.onMiniGame || this.showNative(), this._listRank.renderHandler = new Laya.Handler(this, this.renderList),
                this._listRank.array = he.instance.rankList2;
        }
        renderList(e, t) {
            let i = e.dataSource, s = e.getChildByName("_imgBg"), a = e.getChildByName("_txtRank"), n = e.getChildByName("_imgCrown"), o = e.getChildByName("_imgDead"), r = e.getChildByName("_txtName"), h = e.getChildByName("_txtGold");
            a.text = (t + 1).toString(), 0 == t ? (a.color = "#bbbb0b", n.visible = !0) : (a.color = "#ffffff",
                n.visible = !1), 0 == i.index ? s.visible = !0 : s.visible = !1, r.text = i.name,
                0 == i.num ? o.visible = !0 : o.visible = !1, h.text = i.num;
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            s == this._spMoreGame || s == this._spNext ? ((i.gold += i.getGold,
                d.instance.openTips("Coin +" + i.getGold), e.event(a.GOLDCHANGE), i.levelIndex++,
                platform.getInstance().showInterstitial(() => {
                    e.event(a.RESETGAME), Laya.Scene.close(c.WinScene)
                })
                , g.instance.openLeft(), g.instance.openDuilian()),
                h.isJump && g.instance.openLiangPaiJuhe()) :
                s != this._spGetMore && s != this._imgCon1 || (m.instance.showVideo(this, this.getMoreGold),
                    i.levelIndex++, I.instance.nativeAdreportAdClick(), C.instance.nativeAdreportAdClick(0));
        }
        getMoreGold(t = null) {
            t && (i.gold += 3 * i.getGold, d.instance.openTips("Coin +" + 3 * i.getGold),
                e.event(a.GOLDCHANGE), Laya.Scene.close(c.WinScene), g.instance.openLeft(), g.instance.openDuilian(),
                h.isJump && g.instance.openLiangPaiJuhe(),
                i.levelIndex++,
                e.event(a.RESETGAME));
        }
        showNative() {

        }
        onClosed() {
            g.instance.closeLiugong(), g.instance.closeNativeAdSence(), this.removeEventListener();
        }
    }
    class fe extends p.side.GoldenEggSceneUI {
        constructor() {
            super(), this.eggValue = 0, this.$addProb = .2, this.$subProb = .02, this.timeOut = !0;
        }
        onEnable() {
            this.zOrder = 2303, this._imgTouch.y = this._imgTouch.y + i.stage_height - i.ore_height,
                this._imgMask = this._imgLoad.mask, this._imgMask.x = -this._imgMask.width;
        }
        onOpened(e) {
            this.secene_data = e, this.addEventListener(), u.instance.sendEvent(n.Click_show),
                this.handAni = new Laya.TimeLine();
            let t = this._imgHand.x, i = this._imgHand.y;
            this.handAni = this.handAni.addLabel("tl1", 0).to(this._imgHand, {
                x: 20 + t,
                y: 30 + i
            }, 300, Laya.Ease.linearNone).addLabel("tl2", 0).to(this.handAni, {
                x: t,
                y: i
            }, 300, Laya.Ease.linearNone), this.timeOut = !0, this.timer.frameLoop(2, this, this.subProb),
                this.handAni.play(0, !0), C.instance.hideBanner(), m.instance.hideBanner();
        }
        subProb() {
            this.eggValue = Math.max(0, this.eggValue - this.$subProb), this.changeValue();
        }
        addProb() {
            this.eggValue = Math.min(1, this.eggValue + this.$addProb), this.changeValue();
        }
        changeValue() {
            this._imgMask.x = -this._imgMask.width + this._imgMask.width * this.eggValue, this.eggValue >= i.goldEggValue / 2 && this.timeOut && (this.timeOut = !1,
                m.instance.showLoadedBanner(), this._imgEgg.skin = this._imgEgg.skin.replace("0", "1"),
                this.timer.once(2e3, this, () => {
                    m.instance.destroyBanner(), m.instance.showBanner(!0), C.instance.showBanner(),
                        I.instance.showBanner(), g.instance.closeGoldenEgg();
                })), this.eggValue >= i.goldEggValue && (this.mouseEnabled = !1);
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
            let t = Math.floor(40 * Math.random() + 10);
            i.gold += t, e.event(a.GOLDCHANGE), d.instance.openTips("Coin +" + t);
        }
        onClosed() {
            this.timer.clear(this, this.subProb), this.handAni && (this.handAni.destroy(), this.handAni = null),
                1 == this.secene_data && e.event(a.JIUGONGCLOSE), i.isLoadingVideo = !1, this.removeEventListener(),
                this.getGoldEgg();
        }
    }
    class we extends p.side.MoreGameSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._listDown.height = i.stage_height - i.ore_height + 1034 - i.statusBarHeight,
                this._imgKeep.y = i.stage_height - i.ore_height + 1188 - i.statusBarHeight, h.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            this.zOrder = 2303, this.scene_Data = e, this.addEventListener(), u.instance.sendEvent(n.Show_juhe1),
                this.isShow = !1, u.instance.getFlowConfig(s.wxId, this, this.loadAd), this._listDown.selectEnable = !0,
                this._listTop.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                this._listTop.selectHandler = new Laya.Handler(this, this.selectTop), C.instance.hideBanner(),
                m.instance.hideBanner(), h.islinshiWhite && h.RandomClick ? (this.userCancel(),
                    this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png",
                h.islinshiWhite && (this._imgBack.visible = !1, Laya.timer.once(3e3, this, () => {
                    this._imgBack.visible = !0;
                }));
        }
        jumpRandom() {
            if (h.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene");
            }
        }
        loadAd(e) {
            this._listDown.array = e, this._listTop.array = JSON.parse(JSON.stringify(e)), h.islinshiWhite && h.RandomClick && this.jumpRandom();
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
            !this.isShow && h.islinshiWhite && (this.isShow = !0, console.log("开始LOADbanner"),
                this.timer.once(1300, this, () => {
                    m.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                        m.instance.destroyBanner();
                    });
                }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgBack ? (g.instance.closeJuhe(), this.scene_Data ? (m.instance.showBanner(!0),
                C.instance.showBanner(), I.instance.showBanner()) : h.islinshiWhite ? (i.levelIndex - 1 - h.start_level) % (h.space_level + 1) == 0 && m.instance.hasBanner ? g.instance.openGoldenEgg() : (m.instance.showBanner(!0),
                    I.instance.showBanner(), C.instance.showBanner()) : (m.instance.showBanner(!0),
                        C.instance.showBanner(), I.instance.showBanner())) : t == this._imgKeep && (h.islinshiWhite && h.RandomClick ? this.jumpRandom() : (g.instance.closeJuhe(),
                            this.scene_Data ? (m.instance.showBanner(!0), C.instance.showBanner(), I.instance.showBanner()) : h.islinshiWhite && (i.levelIndex - 1 - h.start_level) % (h.space_level + 1) == 0 && m.instance.hasBanner ? g.instance.openGoldenEgg() : (m.instance.showBanner(!0),
                                C.instance.showBanner(), I.instance.showBanner())));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class _e extends Laya.HScrollBar {
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
    class Ae extends Laya.Box {
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
                e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class Ce extends p.side.SideBotListSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.x = 8, this.y = i.stage_height - 250;
        }
        onOpened(e) {
            this.zOrder = 2300, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(s.wxId, this, this.loadAd),
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
    class xe extends Laya.Box {
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
    class Ie extends p.side.SideDoubleListSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.zOrder = 2298, this.scene_Data = e, this.addEventListener(), this._listBox = new Array(),
                this._listBox.push(this._box1), this._listBox.push(this._box2), this._listBox.push(this._box3),
                this._listBox.push(this._box4), this._listBox.push(this._box5), this._listBox.push(this._box6),
                u.instance.getFlowConfig(s.wxId, this, this.loadAd);
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
    class Ee extends Laya.Box {
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
                    e._imgIcon = e._box.getChildByName("_imgIcon")), e._txtTitle.text = f.instacne.shortText(e._dataSource.show_config.title);
                let t = e._dataSource.show_config.image;
                t && (e._imgIcon.skin = t);
            }
        }
    }
    class Me extends p.side.SideGridSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.zOrder = 2301, this.scene_Data = e, this.addEventListener(), this._listBox = new Array(),
                this._listBox.push(this._box1), this._listBox.push(this._box2), this._listBox.push(this._box3),
                this._listBox.push(this._box4), this._listBox.push(this._box5), this._listBox.push(this._box6),
                u.instance.getFlowConfig(s.wxId, this, this.loadAd);
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
    class Ne extends p.side.SideJiugongSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight, this._main.y = i.stage_height / 2 - 220;
        }
        onOpened(e) {
            this.zOrder = 2302, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(s.wxId, this, this.loadAd),
                u.instance.sendEvent(n.Show_gongge), this._listAd.selectEnable = !0, this._listAd.selectHandler = new Laya.Handler(this, this.selectTop);
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
                u.instance.sendEvent(n.Start_click));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class ke extends Laya.Box {
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
                e._txtTitle.text = f.instacne.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class je extends p.side.SideLeftListSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() { }
        onOpened(e) {
            this.zOrder = 2299, this.scene_Data = e, this.addEventListener(), u.instance.getFlowConfig(s.wxId, this, this.loadAd),
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
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.SHOWLEFTSIDE, this, this.showAd);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.SHOWLEFTSIDE, this, this.showAd);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSlide ? this.showAd() : t == this._imgBg && this.hideAd();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Pe extends p.side.SideMoreNativeSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2302, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.isTouchAd = !1, this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = I.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = C.instance.nativeAdData(1)),
                null == t) g.instance.closeMoreNativeAdSence(); else {
                I.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, I.instance.nativeAdreportAdShow(),
                            C.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                g.instance.closeMoreNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.GETAPP, this, this.getApp);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.GETAPP, this, this.getApp);
        }
        getApp() {
            I.instance.nativeAdreportAdClick(), C.instance.nativeAdreportAdClick(1);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? h.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0, I.instance.nativeAdreportAdClick(),
                C.instance.nativeAdreportAdClick(1)) : g.instance.closeMoreNativeAdSence() : t != this._imgNative && t != this._imgWatch || (I.instance.nativeAdreportAdClick(),
                    C.instance.nativeAdreportAdClick(1));
        }
        onClosed() {
            I.instance.removeNativeAd(), this.removeEventListener();
        }
    }
    class Be extends p.side.SideNativeSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2301, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = I.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = C.instance.nativeAdData(2)),
                null == t) g.instance.closeNativeAdSence(); else {
                I.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, I.instance.nativeAdreportAdShow(),
                            C.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                g.instance.closeNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.GETAPP, this, this.getApp);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.GETAPP, this, this.getApp);
        }
        getApp() {
            I.instance.nativeAdreportAdClick(), C.instance.nativeAdreportAdClick(2);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? g.instance.closeNativeAdSence() : t == this._imgNative && (I.instance.nativeAdreportAdClick(),
                C.instance.nativeAdreportAdClick(2));
        }
        onClosed() {
            I.instance.removeNativeAd(), C.instance.removeNativeAd(2), this.removeEventListener();
        }
    }
    class Te extends p.side.SideTwoSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._listDown.height = (i.stage_height - i.ore_height - i.statusBarHeight) / 1.5 + 870,
                this._imgKeep.y = i.stage_height - i.ore_height + 1166 - i.statusBarHeight, h.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            C.instance.hideBanner(), m.instance.hideBanner(), this.zOrder = 2303, this.scene_Data = e,
                this.addEventListener(), this.isShow = !1, u.instance.sendEvent(n.Show_juhe2), u.instance.getFlowConfig(s.wxId, this, this.loadAd),
                this._listDown.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                m.instance.hideBanner(), C.instance.hideBanner(), h.islinshiWhite && (this._imgBack.visible = !1,
                    Laya.timer.once(3e3, this, () => {
                        this._imgBack.visible = !0;
                    })), h.islinshiWhite && h.RandomClick ? (this.userCancel(), this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png";
        }
        loadAd(e) {
            this._listDown.array = e, h.islinshiWhite && h.RandomClick && this.jumpRandom();
        }
        jumpRandom() {
            if (h.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                u.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene");
            }
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (u.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene"), this._listDown.selectedIndex = -1);
        }
        userCancel() {
            !this.isShow && h.islinshiWhite && (this.isShow = !0, this.timer.once(1300, this, () => {
                m.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                    m.instance.destroyBanner();
                });
            }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgBack ? (g.instance.closeLiangPaiJuhe(), m.instance.showBanner(!0),
                I.instance.showBanner(), E.instance.mainBg()) : t == this._imgKeep && (h.islinshiWhite && h.RandomClick ? this.jumpRandom() : (g.instance.closeLiangPaiJuhe(),
                    m.instance.showBanner(!0), I.instance.showBanner(), E.instance.mainBg()));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Oe extends p.tips.MoveTipsSceneUI {
        constructor() {
            super();
        }
        onOpened(e) {
            e || (e = 3e3), Laya.timer.once(e, this, () => {
                Laya.Scene.close(c.MoveTipsScene);
            });
        }
    }
    class Ge extends p.tips.TipsSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = 800 + (i.stage_height - i.ore_height) / 2, this.x = (i.ore_width - this.width) / 2,
                this.zOrder = 4e3;
        }
        onOpened(e) {
            this._txtMsg.text = e, this.timer.frameOnce(55, this, this.closeView);
        }
        closeView() {
            this._txtMsg.text = "", this.timer.clearAll(this), this.close();
        }
    }
    class Re {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/scene/BoxScene.ts", v), e("script/scene/Item/box1.ts", w), e("script/scene/Item/box2.ts", _),
                e("script/scene/Item/box3.ts", A), e("script/scene/LoadingScene.ts", le), e("side/item/SideBoxItem.ts", ce),
                e("side/item/VScrollBarChange.ts", de), e("base/FitTheScreen.ts", ge), e("script/scene/LoseScene.ts", me),
                e("script/scene/LoseTwiceScene.ts", ue), e("script/scene/LuckBoxScene.ts", pe),
                e("script/scene/MainScene.ts", ye), e("script/scene/SelectSkinScene.ts", Se), e("script/scene/SkinTryScene.ts", be),
                e("script/scene/WinScene.ts", ve), e("side/GoldenEggScene.ts", fe), e("side/MoreGameScene.ts", we),
                e("side/item/HScrollBarChange.ts", _e), e("side/item/SideBoxItem1.ts", Ae), e("side/SideBotListScene.ts", Ce),
                e("side/item/SideBotItem.ts", xe), e("side/SideDoubleListScene.ts", Ie), e("side/item/SideDoubleListItem.ts", Ee),
                e("side/SideGridScene.ts", Me), e("side/SideJiugongScene.ts", Ne), e("side/item/SideLeftItem.ts", ke),
                e("side/SideLeftListScene.ts", je), e("side/SideMoreNativeScene.ts", Pe), e("side/SideNativeScene.ts", Be),
                e("side/SideTwoScene.ts", Te), e("tips/MoveTipsScene.ts", Oe), e("tips/TipsScene.ts", Ge);
        }
    }
    Re.width = 750, Re.height = 1334, Re.scaleMode = "exactfit", Re.screenMode = "none",
        Re.alignV = "middle", Re.alignH = "center", Re.startScene = "scene/LoadingScene.scene",
        Re.sceneRoot = "", Re.debug = !1, Re.stat = !1, Re.physicsDebug = !1, Re.exportSceneToJson = !0,
        Re.init();
    class Ve {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new Ve();
        }
        init() {
            Laya.Browser.onVVMiniGame && (this.qg = Laya.Browser.window.qg, this.qg.tmSDK.init({
                hideRequestLog: !1,
                appVersion: i.version
            }));
        }
        login(e, t) {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.login().then(s => {
                console.log(s), i.openId = s.open_id, i.login_city = s.login_city, null != i.login_city && "" != i.login_city || o.instacne.getAddress(),
                    e && t && t.apply(e);
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
            let a = this;
            if (Laya.Browser.onVVMiniGame) if (a.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            } else a.qg.tmSDK.getFlowConfig({
                positionId: e
            }).then(n => {
                if (a.flowConfig[e] = n, i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            });
        }
        flowNavigate(t, i, s = "") {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.flowNavigate({
                positionId: t,
                creativeId: i
            }).then(i => {
                if (this.flowConfig[t] = i, "navigateToMiniProgram:fail cancel" == i.navigateMessage.errMsg) e.event(a.USERCANCEL); else if ("navigateToMiniProgram:ok" == i.navigateMessage.errMsg) switch (e.event(a.USERJUMP),
                    s) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            Ve.instance.sendEvent(n.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            Ve.instance.sendEvent(n.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            Ve.instance.sendEvent(n.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            Ve.instance.sendEvent(n.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onVVMiniGame && this.qg.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                t ? (h.OpenClick = t.OpenClick, h.OpenVideo = t.OpenVideo, h.blackIPCityArr = t.blackIPCityArr,
                    h.useSetWhite = t.useSetWhite, h.ishutui = t.ishutui, h.without_sceneList = t.without_sceneList,
                    h.openJiugong = t.openJiugong, h.isJump = t.isJump, h.RandomClick = t.RandomClick,
                    h.probability = t.probability, C.instance.whitechangeBannerTime = 1e3 * t.refreshTime,
                    h.reSetWhite(t.posList)) : console.warn("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    new class {
        constructor() {
            let e = new Config3D();
            window.Laya3D ? Laya3D.init(Re.width, Re.height, e, Laya.Handler.create(this, this.initMain)) : (Laya.init(Re.width, Re.height, Laya.WebGL),
                this.initMain());
        }
        initMain() {
            Laya.stage.scaleMode = Re.scaleMode, Laya.stage.screenMode = Re.screenMode, Laya.stage.alignV = Re.alignV,
                Laya.stage.alignH = Re.alignH, Laya.URL.exportSceneToJson = Re.exportSceneToJson;
            window.yad = platform.getInstance().createLogo();
            window.yad.bottom = 0;
            window.yad.centerX = 0;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            this.startNorainGame(), Laya.EventDispatcher;
        }
        startNorainGame() {
            let t = this;
            i.stage_height = i.ore_width / Laya.stage.width * Laya.stage.height;
            t.startGame();
        }
        startGame() {
            if (-1 != h.pos && null != h.pos && null != h.pos && h.theposList && h.theposList.length > 0) {
                for (let e = 0; e < h.theposList.length; e++) if (h.pos == h.theposList[e]) return void Laya.Scene.open(c.LoadingScene, !1);
                Laya.Scene.open(c.BoxScene, !1);
            } else Laya.Scene.open(c.LoadingScene, !1);
        }
    }();
}();