window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function (e, s) {
    "use strict";
    class t {
        constructor() { }
    }
    t.NET_XHR_RESPONSE = zs.laya.XHRUtils.NET_XHR_RESPONSE, t.APP_SHOW = zs.laya.sdk.DeviceService.EVENT_ON_SHOW,
        t.APP_HIDE = zs.laya.sdk.DeviceService.EVENT_ON_HIDE, t.APP_JUMP_CANCEL = "NAVIGATE_FAILED",
        t.APP_JUMP_SUCCESS = "NAVIGATE_SUCCESS", t.AD_CONFIIG_LOADED = "AD_CONFIIG_LOADED",
        t.UI_TOAST_MESSAGE = "UI_TOAST_MESSAGE", t.UI_PROGRESS_UPDATE = zs.laya.ui.LoadingBar.EVENT_UI_PROGRESS_UPDATE,
        t.UI_VIEW_CLOSED = zs.laya.base.BaseView.EVENT_UI_VIEW_CLOSED, t.UI_VIEW_OPENED = zs.laya.base.BaseView.EVENT_UI_VIEW_OPENED,
        t.AD_VIDEO_PLAY = "EVENT_AD_VIDEO_PLAY", t.AD_VIDEO_CLOSED = "EVENT_AD_VIDEO_CLOSED",
        t.LAUNCH_COMPLETED = "EVENT_LAUNCH_COMPLETED", t.DATA_SETTING_UPDATE = "DATA_SETTING_UPDATE",
        t.DATA_LOGIN_INFO_UPDATE = "DATA_LOGIN_INFO_UPDATE", t.GAME_SLEEP = "GAME_SLEEP",
        t.GAME_WAKEUP = "GAME_WAKEUP", t.GAME_HOME = "GAME_HOME", t.GAME_PREPARE = "GAME_PREPARE",
        t.GAME_START = "GAME_START", t.GAME_WIN = "GAME_WIN", t.GAME_FAILED = "GAME_FAILED",
        t.GAME_RELIVE = "GAME_RELIVE", t.GAME_OVER = "GAME_OVER", t.GAME_NEXTRES_COM = "GAME_NEXTRES_COM",
        t.EGG_GET_AWARD = "EGG_GET_AWARD", t.OPEN_WIN_VIEW = "OPEN_WIN_VIEW", t.OPEN_FAILED_VIEW = "OPEN_FAILED_VIEW",
        t.GAME_RESET_START = "GAME_RESET_START", t.STORECFG_UPDATE = "STORECFG_UPDATE",
        t.STORE_SWITCH_TAB = "STORE_SWITCH_TAB", t.STORE_USE_ITEM = "STORE_USE_ITEM", t.STORE_ITEM_UNLOCKED = "STORE_ITEM_UNLOCKED",
        t.GOLD_UPDATE = "GOLD_UPDATE", t.COLLECT_GET_AWARD = "COLLECT_GET_AWARD", t.START_REWARD = "START_REWARD",
        t.PLATFORM_ADD_COIN = "PLATFORM_ADD_COIN", t.RECORDER_VIDEO_RANK = "RECORDER_VIDEO_RANK",
        s.ILaya.regClass(t), s.ClassUtils.regClass("zs.laya.game.EventId", t), s.ClassUtils.regClass("Zhise.EventId", t);
    class a {
        constructor() { }
    }
    a.STATE_LOADING = 0, a.STATE_UNBEGIN = 1, a.STATE_PREPARE = 2, a.STATE_PLAYING = 3,
        a.STATE_PAUSE = 4, s.ILaya.regClass(a), s.ClassUtils.regClass("zs.laya.game.GameState", a),
        s.ClassUtils.regClass("Zhise.GameState", a);
    class i {
        constructor() { }
        static requestLoginByCode(e, s) {
            var t = s || {};
            t.code = e, t.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSign(this.WebApiMap.login, t, this.RequestSign) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, t),
                console.log(this.WebApiMap.login));
        }
        static requestLoginByUserId(e, s) {
            var t = s || {};
            t.user_id = e, t.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.login, t, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, t),
                console.log(this.WebApiMap.login));
        }
        static requestBaseCfg(e) {
            var a = e || {}, o = n, r = !1;
            o.appConfig.configVersion && (a.v_type = o.appConfig.configVersion, r = !0), this.UseWebApi ? (this.RequestSign && r ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.gameCfg, a, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.gameCfg, a),
                console.log(this.WebApiMap.gameCfg)) : (console.log(this.WebApiMap.gameCfg), s.stage.frameOnce(1, this, function () {
                    s.stage.event(t.NET_XHR_RESPONSE, [1, this.WebApiMap.gameCfg, a, {
                        data: o.appConfig.defaultCfg.gameSetting
                    }]);
                }));
        }
        static updatePlayerInfo(e) {
            var s = n;
            if (s.saveLocalPlayerInfo(), this.WebApiMap.updateInfo) {
                var t = e || {};
                t.user_id || (t.user_id = s.playerInfo.user_id), t.timestamp = Date.now(), console.log("------------ update info: ", t),
                    this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.updateInfo, t, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.updateInfo, t));
            } else console.log("**************** error 没有 WebApiMap.updateInfo 链接");
        }
        static updateVideoLog(e) {
            var s = e || {};
            s.user_id = n.playerInfo.user_id, s.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.logVideo, s, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.logVideo, s),
                console.log(this.WebApiMap.logVideo));
        }
        static requestStoreData(e) {
            if (this.WebApiMap.requestStoreCFG) {
                var s = e || {}, t = zs.laya.game.AppMain;
                s.user_id = t.playerInfo.user_id, s.timestamp = Date.now(), this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.requestStoreCFG, s, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.requestStoreCFG, s),
                    console.log("--------- 请求商城配置：" + this.WebApiMap.requestStoreCFG);
            } else console.log("**************** error 没有 WebApiMap.requestStoreCFG 链接");
        }
        static requestEquipItem(e) {
            if (e.hasOwnProperty("goods_type") && e.hasOwnProperty("goods_id")) {
                var s = zs.laya.game.AppMain, t = s.playerInfo.goods_id;
                if (t || (t = [], s.playerInfo.goods_id = t), t[e.goods_type] = e.goods_id, s.saveLocalPlayerInfo(),
                    this.WebApiMap.requestEquipItem) {
                    var a = e || {};
                    a.user_id = s.playerInfo.user_id, a.timestamp = Date.now(), this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.requestEquipItem, a, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.requestEquipItem, a);
                } else console.log("**************** error 没有 WebApiMap.requestEquipItem 链接");
            } else console.log("**************** error requestUnlockGoodsByGold 没有设置goods_type 和 goods_id");
        }
        static requestUnlockGoodsByGold(e) {
            if (e.hasOwnProperty("goods_type") && e.hasOwnProperty("goods_id")) {
                var s = zs.laya.game.AppMain;
                s.playerInfo.gold -= e.gold;
                var t = s.playerInfo.goods_ids[e.goods_type];
                t || (t = [], s.playerInfo.goods_ids[e.goods_type] = t), -1 == t.indexOf(e.goods_id) && t.push(e.goods_id);
                var a = s.playerInfo.goods_id;
                if (a || (a = [], s.playerInfo.goods_id = a), a[e.goods_type] = e.goods_id, s.saveLocalPlayerInfo(),
                    this.WebApiMap.unlockGoodsByGold) {
                    var o = e || {};
                    o.user_id = s.playerInfo.user_id, o.timestamp = Date.now(), this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.unlockGoodsByGold, o, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.unlockGoodsByGold, o);
                } else console.log("**************** error 没有 WebApiMap.unlockGoodsByGold 链接");
            } else console.log("**************** error requestUnlockGoodsByGold 没有设置goods_type 和 goods_id");
        }
        static requestUnlockGoodsByVideo(e) {
            if (e.hasOwnProperty("goods_type") && e.hasOwnProperty("goods_id")) {
                var s = zs.laya.game.AppMain;
                if (e.isUnlock) {
                    var t = s.playerInfo.goods_ids[e.goods_type];
                    t || (t = [], s.playerInfo.goods_ids[e.goods_type] = t), -1 == t.indexOf(e.goods_id) && t.push(e.goods_id);
                    var a = s.playerInfo.goods_id;
                    a || (a = [], s.playerInfo.goods_id = a), a[e.goods_type] = e.goods_id, s.saveLocalPlayerInfo();
                }
                if (this.WebApiMap.unlockGoodsByVideo) {
                    var o = e || {};
                    o.user_id = s.playerInfo.user_id, o.timestamp = Date.now(), this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.unlockGoodsByVideo, o, this.RequestSign, i.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.unlockGoodsByVideo, o),
                        console.log("--------- 请求视频解锁道具:" + this.WebApiMap.unlockGoodsByVideo);
                } else console.log("**************** error 没有 WebApiMap.unlockGoodsByVideo 链接");
            } else console.log("**************** error requestUnlockGoodsByGold 没有设置goods_type 和 goods_id");
        }
        static reportVideoId(e) {
            var s = zs.laya.game.AppMain, t = {};
            t.user_id = s.playerInfo.user_id, t.video_id = e.videoId, this.UseWebApi ? (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.reportVideo, t, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.reportVideo, t),
                console.log(this.WebApiMap.reportVideo)) : console.log(this.WebApiMap.reportVideo);
        }
        static getVideoRank() {
            var e = {};
            this.UseWebApi ? (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.videoRank, e, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.videoRank, e),
                console.log(this.WebApiMap.videoRank)) : s.stage.frameOnce(1, this, function () {
                    s.stage.event(t.NET_XHR_RESPONSE, [2, this.WebApiMap.videoRank, e, {
                        data: {}
                    }]);
                });
        }
    }
    i.WebApiMap = null, i.RequestHeader = {}, i.RequestSign = null, i.UseWebApi = !1,
        s.ILaya.regClass(i), s.ClassUtils.regClass("zs.laya.game.WebService", i), s.ClassUtils.regClass("Zhise.WebService", i);
    class o extends s.Script {
        constructor() {
            super(), this.toastMsg = null, this.toastCompleted = !1, this.toastList = [];
        }
        static setOpenSound(e) {
            this.openSound = e;
        }
        static setUIResConfig(e) {
            this.viewConfig = e;
        }
        static showLoading(e) {
            null != this.viewConfig.loading ? s.Scene.open(this.viewConfig.loading, !1, e, s.Handler.create(this, function (s) {

                this.initView(s, this.viewScript.loading, e);

            })) : console.error("showLoading error");
        }
        static hideLoading() {
            null != this.viewConfig.loading && s.Scene.close(this.viewConfig.loading);
        }
        static showHome(e) {
            null != this.viewConfig.home ? s.Scene.open(this.viewConfig.home, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.home, e);
            })) : console.error("showHome error");
        }
        static hideHome() {
            null != this.viewConfig.home && s.Scene.close(this.viewConfig.home);
        }
        static showPlaying(e) {
            null != this.viewConfig.playing ? s.Scene.open(this.viewConfig.playing, !1, e, s.Handler.create(this, function (s) {
                // this.initView(s, this.viewScript.playing, e);
            })) : console.error("showPlaying error");
        }
        static hidePlaying() {
            null != this.viewConfig.playing && s.Scene.close(this.viewConfig.playing);
        }
        static showRelive(e) {
            null != this.viewConfig.relive ? (s.Scene.open(this.viewConfig.relive, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.relive, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showRelive error");
        }
        static hideRelive() {
            null != this.viewConfig.relive && s.Scene.close(this.viewConfig.relive);
        }
        static showScore(e) {
            null != this.viewConfig.score ? (s.Scene.open(this.viewConfig.score, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.score, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showScore error");
        }
        static hideScore() {
            null != this.viewConfig.score && s.Scene.close(this.viewConfig.score);
        }
        static showStore(e) {
            null != this.viewConfig.store ? (s.Scene.open(this.viewConfig.store, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.store, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showStore error");
        }
        static hideStore() {
            null != this.viewConfig.store && s.Scene.close(this.viewConfig.store);
        }
        static showGuide(e) {
            null != this.viewConfig.guide ? s.Scene.open(this.viewConfig.guide, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.guide, e);
            })) : console.error("showGuide error");
        }
        static hideGuide() {
            null != this.viewConfig.guide ? s.Scene.close(this.viewConfig.guide) : console.error("hideGuide error");
        }
        static showSampleSack(e) {
            null != this.viewConfig.sampleSack ? (s.Scene.open(this.viewConfig.sampleSack, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.sampleSack, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showStore error");
        }
        static hideSampleSack() {
            null != this.viewConfig.sampleSack && s.Scene.close(this.viewConfig.sampleSack);
        }
        static showPush(e) {
            null != this.viewConfig.push ? (s.Scene.open(this.viewConfig.push, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.push, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showStore error");
        }
        static hidePush() {
            null != this.viewConfig.push && s.Scene.close(this.viewConfig.push);
        }
        static showTreasure(e) {
            null != this.viewConfig.treasure ? (s.Scene.open(this.viewConfig.treasure, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, this.viewScript.treasure, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("treasure error");
        }
        static hideTreasure() {
            null != this.viewConfig.treasure && s.Scene.close(this.viewConfig.treasure);
        }
        static showMsgBox(e) {
            null != this.viewConfig.msgBox ? s.Scene.open(this.viewConfig.msgBox, !1, e, s.Handler.create(this, function (s) {
                this.initView(s, zs.laya.ui.MsgBoxView, e);
            })) : console.error("showMsgBox error");
        }
        static initView(e, s, t) {
            if (e._gameData = t, s) {
                var a = e.getComponent(s);
                null == a && (a = e.addComponent(s)), a.initView && a.initView(t);
            }
        }
        static showToast(e) {
            this.sInstance && this.sInstance.popToastMsg(e);
        }
        popToastMsg(e) {
            this.toastList.push(e), null == this.toastMsg && 1 == this.toastList.length ? s.loader.create("prefab/toastMsg.json", s.Handler.create(this, this.onToastPrefabReady), null, s.Loader.PREFAB) : 1 == this.toastList.length && this.toastCompleted && this.popToast();
        }
        onToastPrefabReady(e) {
            this.toastMsg = this.owner.addChild(e.create()), this.popToast();
        }
        popToast() {
            if (0 == this.toastList.length && this.toastCompleted) this.toastMsg.visible = !1; else {
                this.toastCompleted = !1;
                var e = this.toastList[0];
                this.toastMsg.visible = !0, this.toastMsg.text = e, this.toastMsg.centerY = 400,
                    this.toastMsg.zOrder = 100;
                var t = this;
                s.Tween.to(this.toastMsg, {
                    centerY: 0
                }, 500, null, s.Handler.create(this, function () {
                    this.toastList.shift(), t.toastCompleted = !0, s.timer.once(500, t, t.popToast);
                }));
            }
        }
        onAwake() {
            o.sInstance = this;
        }
        onDestroy() {
            o.sInstance = null;
        }
        onEnable() {
            s.stage.on(o.UI_TOAST_MESSAGE, this, this.popToastMsg);
        }
        onDisable() {
            s.stage.off(o.UI_TOAST_MESSAGE, this, this.popToastMsg);
        }
    }
    o.UI_TOAST_MESSAGE = t.UI_TOAST_MESSAGE, o.sInstance = null, o.openSound = "sound/viewOpen.wav",
        o.viewConfig = {}, o.viewScript = {}, s.ILaya.regClass(o), s.ClassUtils.regClass("zs.laya.game.UIService", o),
        s.ClassUtils.regClass("zs.laya.game.ViewService", o), s.ClassUtils.regClass("Zhise.ViewService", o);
    class n extends s.Script {
        constructor() {
            super(), this.isCFGReady = !1, this.isLoginSuccess = !1, this.loginData = null,
                this.default3DScene = null, this.launchResReady = !1, this.progressHandler = null,
                this.currentLoadStep = 0, this.requestCFGErrorNum = 0, this.requestStoreErrorNum = 0,
                this.nextResReady = !1, this.nextResWait = !1;
        }
        static get GameState() {
            return this.gameState;
        }
        static set GameState(e) {
            this.gameState = e;
        }
        static get ReliveChance() {
            return this.reliveChance;
        }
        static set ReliveChance(e) {
            this.reliveChance = e;
        }
        static saveLocalPlayerInfo(e = !1) {
            var t, a = s.LocalStorage.getItem(i.RequestSign);
            (t = a ? JSON.parse(a) : {}).playerInfo = n.playerInfo, e && (t.lastLoginDate = Date.now(),
                t.t = n.playerInfo.t, t.timestamp = n.playerInfo.timestamp), a = JSON.stringify(t),
                s.LocalStorage.setItem(i.RequestSign, a);
        }
        static getGoodsById(e, s) {
            if (!n.storeItemsDic) return null;
            var t = n.storeItemsDic[e];
            if (t && t.length > 0) for (var a = 0; a < t.length; a++) if (t[a] && t[a].goods_id == s) return t[a];
            return null;
        }
        onAwake() {
            zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.startupEvt()), zs.laya.sdk.SdkService.initSDK(),
                zs.laya.sdk.DeviceService.initDevice(), s.stage.addComponent(zs.laya.Resource),
                s.stage.addComponent(zs.laya.ObjectPool), s.stage.addComponent(o), s.stage.on(t.GAME_HOME, this, this.onGameHome),
                s.stage.on(t.GAME_PREPARE, this, this.onGamePrepare), s.stage.on(t.GAME_START, this, this.onGameStart),
                s.stage.on(t.GAME_FAILED, this, this.onGameFailed), s.stage.on(t.GAME_WIN, this, this.onGameWin),
                s.stage.on(t.GAME_RELIVE, this, this.onGameRelive), s.stage.on(t.GAME_OVER, this, this.onGameOver),
                s.stage.on(t.GAME_NEXTRES_COM, this, this.onNextResCom), s.stage.on(t.OPEN_WIN_VIEW, this, this.onOpenWinView),
                s.stage.on(t.OPEN_FAILED_VIEW, this, this.onOpenFailedView), s.stage.on(t.GAME_RESET_START, this, this.onGameOverToStart),
                s.stage.on(t.APP_SHOW, this, this.onGameShow), s.stage.on(t.APP_HIDE, this, this.onGameHide),
                s.stage.on(t.NET_XHR_RESPONSE, this, this.onNetXHRResponse), s.stage.on(t.UI_VIEW_CLOSED, this, this.onViewClosed),
                s.stage.on(t.UI_VIEW_OPENED, this, this.onViewOpened), s.stage.on(t.RECORDER_VIDEO_RANK, this, this.onRecorderVideoRank),
                s.loader.load(["config/gameCfg.json", "config/publishVer.json"], s.Handler.create(this, this.onGameCfgReady)),
                o.viewScript = {
                    loading: zs.laya.ui.LoadingView,
                    home: zs.laya.ui.HomeView,
                    playing: zs.laya.base.ZhiSeView,
                    relive: zs.laya.ui.ReliveView,
                    score: zs.laya.ui.WinView,
                    msgBox: zs.laya.ui.MsgBoxView,
                    guide: zs.laya.base.ZhiSeView,
                    store: zs.laya.ui.StorePage,
                    sampleSack: zs.laya.ui.SampleSackView,
                    push: zs.laya.ui.PushView,
                    treasure: zs.laya.ui.TreasureView
                };
        }
        onDestroy() {
            s.stage.off(t.GAME_HOME, this, this.onGameHome), s.stage.off(t.GAME_PREPARE, this, this.onGamePrepare),
                s.stage.off(t.GAME_START, this, this.onGameStart), s.stage.off(t.GAME_OVER, this, this.onGameOver),
                s.stage.off(t.GAME_RELIVE, this, this.onGameRelive), s.stage.off(t.GAME_FAILED, this, this.onGameFailed),
                s.stage.off(t.GAME_WIN, this, this.onGameWin), s.stage.off(t.OPEN_WIN_VIEW, this, this.onOpenWinView),
                s.stage.off(t.OPEN_FAILED_VIEW, this, this.onOpenFailedView), s.stage.off(t.GAME_RESET_START, this, this.onGameOverToStart),
                s.stage.off(t.APP_SHOW, this, this.onGameShow), s.stage.off(t.APP_HIDE, this, this.onGameHide),
                s.stage.off(t.NET_XHR_RESPONSE, this, this.onNetXHRResponse), s.stage.off(t.UI_VIEW_CLOSED, this, this.onViewClosed),
                s.stage.off(t.UI_VIEW_OPENED, this, this.onViewOpened), s.stage.off(t.RECORDER_VIDEO_RANK, this, this.onRecorderVideoRank);
        }
        onViewClosed(e, s) { }
        onViewOpened(e, s) {
            -1 != n.appConfig.viewMap.home.indexOf(e) && o.hideLoading();
        }
        onRecorderVideoRank(e) {
            zs.laya.game.WebService.reportVideoId({
                videoId: e
            });
        }
        onGameCfgReady() {
            var e = s.loader.getRes("config/gameCfg.json");
            n.appConfig = e, n.appConfig.version = s.loader.getRes("config/publishVer.json"),
                n.playerInfo = e.defaultCfg.playerInfo, n.gameSetting = e.defaultCfg.gameSetting,
                i.WebApiMap = n.appConfig.webApiMap, i.UseWebApi = n.appConfig.useWebApi, i.RequestSign = n.appConfig.webApiSign,
                o.viewConfig = e.viewMap, o.openSound = e.soundViewOpen,

                s.stage.once(t.UI_VIEW_OPENED, this, this.onLoadingOpened,

                    [e.baseResList, e.fontList, e.configList]),
                o.showLoading();
            let realist = [
                "3dres/Conventional/Clothes01_Cut.lh",
                "3dres/Conventional/Clothes02_Cut.lh",
                "3dres/Conventional/Clothes03_Cut.lh",
                "3dres/Conventional/Clothes04_Cut.lh",
                "3dres/Conventional/Clothes06_Cut.lh",
                "3dres/Conventional/Clothes_Before.lh",
                "3dres/Conventional/Clothes_Finish.lh",
                "3dres/Conventional/ef_zzyf_customer.lh",
                "3dres/Conventional/ef_zzyf_flash.lh",
                "3dres/Conventional/ef_zzyf_ribbon.lh",
                "3dres/Conventional/ef_zzyf_shear.lh",
                "3dres/Conventional/MaterialObj.lh"]

            Laya.loader.create(realist, Laya.Handler.create(this, () => {
                n.appConfig.useWebAdApi && s.loader.load(["config/platformCfg.json"], s.Handler.create(this, this.onPlatformCfgReady)),
                    this.login();
            }));


        }
        onPlatformCfgReady() {
            var e = s.loader.getRes("config/platformCfg.json");
            zs.laya.platform.PlatformMgr.initCFG(e), zs.laya.platform.PlatformMgr.initSoundUrl(n.appConfig.soundViewOpen, n.appConfig.soundClick),
                zs.laya.sdk.ZSReportSdk.loadConfig(function (e) {
                    zs.laya.platform.ADConfig.initAdSetting(n.appConfig.version, e), zs.laya.platform.PlatformMgr.initGameAd(),
                        s.stage.event(zs.laya.game.EventId.AD_CONFIIG_LOADED);
                }, function (s) {
                    console.error(s), zs.laya.platform.ADConfig.initAdSetting(n.appConfig.version, e.adCfg),
                        zs.laya.platform.PlatformMgr.initGameAd();
                });
        }
        onLoadingOpened() {
            platform.getInstance().yadstartup("Fashion-Tailor-3d", () => {
                window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Fashion-Tailor-3d-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Fashion-Tailor-3d-musicState")) : false;
                window.yad.scale(0.8, 0.8);
                window.yad.right = 10;
                Laya.stage.addChild(window.scrollList)
                Laya.stage.addChild(window.box_adTwo)
                window.box_adTwo.bottom = 200
                window.box_adTwo.setSpaceX(300)
                window.scrollList.bottom = 10
                window.scrollList.visible = false;
                window.box_adTwo.visible = false;

                window.box_adTwo.setAlpha && window.box_adTwo.setAlpha();

                this.currentLoadStep = 0, this.progressHandler = s.Handler.create(this, this.onLoadProgressUpdate, null, !1),
                    this.loadSubpackage();

            })


        }
        loadSubpackage() {


            //游戏本体加载内容
            for (; n.appConfig.subpackage && n.appConfig.subpackage.length > 0;) {
                const e = n.appConfig.subpackage.shift();
                if (zs.laya.sdk.SdkService.loadSubpackage(e, null, s.Handler.create(this, this.loadSubpackage), s.Handler.create(this, this.loadSubpackage)))
                    return;
            }
            n.appConfig.bgm && zs.laya.SoundService.playMusic(n.appConfig.bgm), this.currentLoadStep++,
                this.loadBaseConfig(), this.loadFont();
        }
        loadBaseConfig() {
            var e = [];
            n.appConfig.configList.forEach(function (s) {
                e.push(s);
            }), 0 == e.length ? this.onBaseConfigReady() : s.loader.load(e, s.Handler.create(this, this.onBaseConfigReady), this.progressHandler);
        }
        onBaseConfigReady() {
            this.currentLoadStep++, this.loadBaseRes();
        }
        loadBaseRes() {
            var e = [];
            n.appConfig.baseResList.forEach(function (s) {
                e.push(zs.laya.Resource.Get3dPrefabUrl(s));
            }), 0 == e.length ? this.onBaseResReady() : s.loader.create(e, s.Handler.create(this, this.onBaseResReady), this.progressHandler);
        }
        onBaseResReady() {
            this.currentLoadStep++, this.loadScene3d();
        }
        loadFont() {
            var e = this;
            n.appConfig.fontList.forEach(function (t) {
                var a = new s.BitmapFont();
                a.loadFont(`font/${t}.fnt`, s.Handler.create(e, e.onFontReady, [a, t]));
            });
        }
        onFontReady(e, t) {
            s.Text.registerBitmapFont(t, e);
        }
        loadScene3d() {
            null != n.appConfig.default3DScene && 0 != n.appConfig.default3DScene.length ? zs.laya.Resource.LoadScene3dAsyn(n.appConfig.default3DScene, s.Handler.create(this, this.onLaunchResReady), this.progressHandler) : this.onLaunchResReady(null);
        }
        onLaunchResReady(e) {
            this.currentLoadStep++, this.launchResReady = !0, this.default3DScene = e, n.appConfig.platformType && "vivo" == n.appConfig.platformType ? zs.laya.sdk.SdkService.getNetworkType(s.Handler.create(this, function () {
                this.launchCompleted();
            })) : this.launchCompleted();
        }
        onLoadProgressUpdate(e) {
            if (1 != e) {
                var a = .25 * this.currentLoadStep + .25 * e;
                s.stage.event(t.UI_PROGRESS_UPDATE, a);
            }
        }
        onNetXHRResponse(e, o, r, l) {
            if (1 != e) return console.log("**************** error ： " + o + "  返回错误！！！"), o == i.WebApiMap.gameCfg && this.requestCFGErrorNum < 3 && (this.requestCFGErrorNum++,
                i.requestBaseCfg(n.webRequestAdapter.reqBaseCfgArgs())), o == i.WebApiMap.requestStoreCFG && this.requestStoreErrorNum < 3 && (this.requestStoreErrorNum++,
                    i.requestStoreData(n.webRequestAdapter.reqStoreCFgArgs())), void ((this.requestCFGErrorNum >= 3 || this.requestStoreErrorNum >= 3));//  && zs.laya.game.UIService.showToast("哎呀，网络开小差，请检查网络")
            switch (console.log(o + " : response data:", l.data), o) {
                case i.WebApiMap.login:
                    var p = n.webResponseAdapter.LoginResponse(l.data);
                    i.RequestHeader = {
                        t: p.t,
                        timestamp: p.timestamp
                    }, zs.laya.platform.PlatformMgr.setUserID(p.user_id, p.is_new), zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.loginEvt(p.user_id)),
                        n.GameState == a.STATE_LOADING ? n.playerInfo = p : n.GameState == a.STATE_UNBEGIN ? (n.playerInfo.user_id = p.user_id,
                            p.gold > n.playerInfo.gold && (n.playerInfo.gold = p.gold), console.log("------------------- change playerInfo"),
                            s.stage.event(t.DATA_LOGIN_INFO_UPDATE, [p])) : (n.playerInfo.user_id = p.user_id,
                                p.gold > n.playerInfo.gold && (n.playerInfo.gold = p.gold)), n.playerInfo.t = p.t,
                        n.playerInfo.timestamp = p.timestamp, this.isLoginSuccess = !0, zs.laya.sdk.ZSReportSdk.init(n.playerInfo.user_id, s.Browser.onAndroid ? 1 : 0),
                        n.saveLocalPlayerInfo(!0);
                    break;

                case i.WebApiMap.gameCfg:
                    n.gameSetting = n.webResponseAdapter.BaseCfgResponse(l.data), s.stage.event(t.DATA_SETTING_UPDATE),
                        0 == this.isCFGReady && (this.isCFGReady = !0, this.launchCompleted());
                    break;

                case i.WebApiMap.logVideo:
                    zs.laya.sdk.ZSReportSdk.sendVideoLog();
                    break;

                case i.WebApiMap.updateInfo:
                    console.log("update player info success!");
                    break;

                case i.WebApiMap.requestStoreCFG:
                    var d = l.data;
                    n.storeItemsDic = {};
                    for (var g = 0; g < d.length; g++) {
                        var h = d[g];
                        null == n.storeItemsDic[h.goods_type] && (n.storeItemsDic[h.goods_type] = []), n.storeItemsDic[h.goods_type].push(h);
                    }
                    s.stage.event(t.STORECFG_UPDATE);
                    break;

                case i.WebApiMap.requestEquipItem:
                    console.log("use goods_item success");
                    break;

                case i.WebApiMap.unlockGoodsByGold:
                    console.log("gold unlock goods_item success");
                    break;

                case i.WebApiMap.unlockGoodsByVideo:
                    console.log("video unlock goods_item success");
            }
        }
        launchCompleted() {
            if (this.launchResReady && this.isCFGReady) {
                n.appConfig.bgm && zs.laya.SoundService.stopMusic();
                var e = s.LocalStorage.getItem(i.RequestSign);
                if (e) {
                    console.log("-------------- 缓存数据：" + e);
                    var a = JSON.parse(e);
                    this.isLoginSuccess ? (a.playerInfo.gold > n.playerInfo.gold && (n.playerInfo.gold = Number(a.playerInfo.gold)),
                        a.playerInfo.level_id > n.playerInfo.level_id && (n.playerInfo.level_id = Number(a.playerInfo.level_id))) : n.playerInfo = a.playerInfo;
                } else this.isLoginSuccess || (n.playerInfo = n.appConfig.defaultCfg.playerInfo);
                null != n.playerInfo.gold && null != n.playerInfo.gold || (n.playerInfo.gold = n.appConfig.defaultCfg.playerInfo.gold ? Number(n.appConfig.defaultCfg.playerInfo.gold) : 0),
                    null != n.playerInfo.level_id && null != n.playerInfo.level_id || (n.playerInfo.level_id = n.appConfig.defaultCfg.playerInfo.level_id ? Number(n.appConfig.defaultCfg.playerInfo.level_id) : 0),
                    zs.laya.platform.PlatformMgr.enterGamePopup(s.Handler.create(this, () => {
                        s.stage.event(t.LAUNCH_COMPLETED, this.default3DScene);
                    }));
            }
        }
        onGameHome(e) {
            n.GameState = a.STATE_UNBEGIN, 0 == n.autoStartNext ? o.showHome(e) : s.timer.frameOnce(2, this, function () {
                s.stage.event(t.GAME_PREPARE);
            }), n.storeItemsDic || i.requestStoreData(n.webRequestAdapter.reqStoreCFgArgs());
        }
        onGamePrepare(e) {
            this.nextResWait = !1, this.nextResReady = !1, n.GameState = a.STATE_PREPARE, n.appConfig.bgm && zs.laya.SoundService.playMusic(n.appConfig.bgm),
                o.hideHome(), o.showPlaying(e);
        }
        onGameStart() {
            n.isWin = !1, n.autoStartNext = !1, n.GameState = a.STATE_PLAYING;
        }
        onOpenFailedView(e) {
            if (n.GameState == a.STATE_PLAYING) {
                n.isWin = !1, zs.laya.SoundService.stopMusic(), n.GameState = a.STATE_PAUSE;
                var i = zs.laya.platform.PlatformMgr.platformCfg;
                i && i.hideRelive ? s.stage.event(t.GAME_OVER) : (n.autoStartNext = !1, o.showRelive(e),
                    n.reliveChance -= 1);
            }
        }
        onOpenWinView(e) {
            if (n.GameState == a.STATE_PLAYING) {
                zs.laya.SoundService.stopMusic(), n.GameState = a.STATE_PAUSE;
                var i = zs.laya.platform.PlatformMgr.platformCfg;
                i && i.hideWin ? s.stage.event(t.GAME_OVER) : (n.autoStartNext = !1, o.showScore(e));
            }
        }
        isOpenExportGame() {
            return n.appConfig.useWebAdApi && zs.laya.platform.ADConfig.isPublicVersion();
        }
        onGameFailed(e) {
            n.isWin = !1, this.reportTalkData(), this.nextResReady = !0, this.isOpenExportGame() ? zs.laya.platform.PlatformMgr.onGameFaildPopUp(e) : this.onOpenFailedView(e);
        }
        onGameWin(e) {
            n.isWin = !0, this.reportTalkData(),
                // this.isOpenExportGame() ? zs.laya.platform.PlatformMgr.onGameWinPopUp(e) : this.onOpenWinView(e), 
                this.nextResReady = !1, this.preloadNextRes();
        }
        reportTalkData() {
            var e = n.playerInfo.level_id;
            console.log("---------report talk data：" + e), n.isWin ? (zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.gameOverEvt(n.playerInfo.user_id, "win")),
                zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.levelCompletedEvt(n.playerInfo.user_id, e.toString()))) : zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.gameOverEvt(n.playerInfo.user_id, "failed"));
        }
        gameAccountAndUpload() {
            if (n.gameOverOperate && n.gameOverOperate.rewardHandle && n.gameOverOperate.rewardHandle(),
                this.isLoginSuccess) {
                var e = n.webRequestAdapter.uploadPlayerInfoArgs();
                (e = e || {}).level_id || (e.level_id = n.playerInfo.level_id), e.gold || (e.gold = n.playerInfo.gold),
                    i.updatePlayerInfo(e);
            } else n.saveLocalPlayerInfo();
            this.reConnect();
        }
        preloadNextRes() {
            if (n.gameOverOperate && n.gameOverOperate.loadNextResArr) {
                var e = n.gameOverOperate.loadNextResArr({
                    level_id: n.playerInfo.level_id + 1
                });
                e && e.length > 0 ? s.loader.load(e, s.Handler.create(this, this.onNextResReady), s.Handler.create(this, this.onNextResProgress)) : this.onNextResReady();
            } else this.onNextResReady();
        }
        onNextResReady() {
            s.stage.event(t.GAME_NEXTRES_COM);
        }
        onNextResProgress(e) {
            console.log("-----------预加载下一关资源的进度：" + e);
        }
        onGameOver() {
            this.gameAccountAndUpload(), n.reliveChance = 2, o.hideRelive(), o.hidePlaying(),
                o.hideScore(), this.isOpenExportGame() ? zs.laya.platform.PlatformMgr.onGameOverPopUp({
                    gold: n.levelData.rewardGold,
                    isBackHome: !n.autoStartNext
                }) : s.stage.frameOnce(1, this, this.onGameOverToStart);
        }
        onGameOverToStart() {
            this.nextResReady ? s.stage.event(t.GAME_HOME) : this.nextResWait = !0, n.isWin = !1;
        }
        onNextResCom() {
            this.nextResReady = !0, this.nextResWait && s.stage.event(t.GAME_HOME);
        }
        onGameRelive() {
            n.GameState == a.STATE_PAUSE && (n.appConfig.bgm && zs.laya.SoundService.playMusic(n.appConfig.bgm),
                n.GameState = a.STATE_PLAYING, o.hideRelive());
        }
        onGameShow() {
            s.stage.renderingEnabled = !0, n.appConfig && n.appConfig.bgm && !zs.laya.SoundService.videoPlaying && zs.laya.SoundService.playMusic(n.appConfig.bgm);
        }
        onGameHide() {
            s.stage.renderingEnabled = !1, zs.laya.SoundService.stopMusic();
        }
        reConnect() {
            0 == this.isSettingReady && i.requestBaseCfg(n.webRequestAdapter.reqBaseCfgArgs()),
                0 == this.isLoginSuccess && this.login();
        }
        login() {
            if (i.requestBaseCfg(n.webRequestAdapter.reqBaseCfgArgs()), "wx" == n.appConfig.platformType) {
                var e = s.LocalStorage.getItem(i.RequestSign);
                if (e) {
                    var t = JSON.parse(e);
                    if (t && t.lastLoginDate && zs.laya.MiscUtils.isToday(t.lastLoginDate)) return i.RequestHeader = {
                        t: t.t,
                        timestamp: t.timestamp
                    }, console.log("1---------------登录：" + t.playerInfo.user_id), void i.requestLoginByUserId(t.playerInfo.user_id, n.webRequestAdapter.reqLoginArgs());
                }
            }
            zs.laya.sdk.SdkService.login(s.Handler.create(this, function (e) {
                if (e) {
                    this.loginData = e;
                    var s = n.webRequestAdapter.reqLoginArgs();
                    if (null == s && (s = {}), n.appConfig.platformType) switch (n.appConfig.platformType) {
                        case "vivo":
                            var t = zs.laya.sdk.DeviceService.device.deviceInfo.platformVersionCode;
                            s.isOld = t < 1053 ? 1 : 0;
                            break;

                        case "tt":
                            s.anonymous_code = e.anonymous_code;
                    }
                    i.requestLoginByCode(this.loginData.identityId, s);
                }
            }), s.Handler.create(this, function (e) {
                // console.error("login platform error:" + e), 
                1 == e.code && (console.log("2---------------登录：" + n.appConfig.defaultCfg.playerInfo.user_id),
                    i.requestLoginByUserId(n.appConfig.defaultCfg.playerInfo.user_id, n.webRequestAdapter.reqLoginArgs()));
            }));
        }
    }
    n.appConfig = null, n.playerInfo = {}, n.storeCfg = {}, n.storeItemsDic = null,
        n.gameSetting = {}, n.levelData = {}, n.authorizeData = {}, n.gameStartRet = {},
        n.gameEndRet = {}, n.gameState = a.STATE_LOADING, n.reliveChance = 2, n.autoStartNext = !1,
        n.isWin = !1, n.gameOverOperate = {
            rewardHandle: function () { },
            loadNextResArr: function (e) {
                return null;
            }
        }, n.webResponseAdapter = {
            LoginResponse: function (e) {
                return e;
            },
            BaseCfgResponse: function (e) {
                return e;
            }
        }, n.webRequestAdapter = {
            reqLoginArgs: function () {
                return null;
            },
            reqBaseCfgArgs: function () {
                return null;
            },
            uploadVideoArgs: function () {
                return null;
            },
            uploadPlayerInfoArgs: function () {
                return null;
            },
            reqStoreCFgArgs: function () {
                return null;
            }
        }, s.ILaya.regClass(n), s.ClassUtils.regClass("zs.laya.game.AppMain", n), s.ClassUtils.regClass("Zhise.AppMain", n),
        e.EventId = t, e.GameState = a, e.WebService = i, e.UIService = o, e.AppMain = n;
}(window.zs.laya.game = window.zs.laya.game || {}, Laya);