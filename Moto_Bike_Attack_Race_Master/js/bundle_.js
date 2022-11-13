!function() {
    "use strict";
    class t {}
    t.NET_XHR_RESPONSE = zs.laya.XHRUtils.NET_XHR_RESPONSE, t.APP_SHOW = zs.laya.DeviceService.EVENT_ON_SHOW, 
    t.APP_HIDE = zs.laya.DeviceService.EVENT_ON_HIDE, t.AD_CONFIIG_LOADED = "AD_CONFIIG_LOADED", 
    t.UI_TOAST_MESSAGE = "UI_TOAST_MESSAGE", t.UI_PROGRESS_UPDATE = "UI_PROGRESS_UPDATE", 
    t.EnableSight = "EnableSight", t.DisableSight = "DisableSight", t.Handler_Treasurebox = "Handler_Treasurebox", 
    t.Stage_Finish = "Stage_Finish", t.Stage_Fail = "Stage_Fail", t.Game_Ai_Hp_Update = "Game_Ai_Hp_Update", 
    t.Game_Player_Rank_Update = "Game_Player_Rank_Update", t.Game_Gold_Update = "Game_Gold_Update", 
    t.Game_Progress_Update = "Game_Progress_Update", t.Game_GunProgress_Update = "Game_GunProgress_Update", 
    t.UI_VIEW_OPENED = "UI_VIEW_OPENED", t.UI_VIEW_CLOSED = "UI_VIEW_CLOSED", t.LAUNCH_COMPLETED = "EVENT_LAUNCH_COMPLETED", 
    t.DATA_SETTING_UPDATE = "DATA_SETTING_UPDATE", t.DATA_LOGIN_INFO_UPDATE = "DATA_LOGIN_INFO_UPDATE", 
    t.GAME_SLEEP = "GAME_SLEEP", t.GAME_WAKEUP = "GAME_WAKEUP", t.GAME_HOME = "GAME_HOME", 
    t.GAME_PREPARE = "GAME_PREPARE", t.GAME_START = "GAME_START", t.GAME_WIN = "GAME_WIN", 
    t.GAME_FAILED = "GAME_FAILED", t.GAME_RELIVE = "GAME_RELIVE", t.GAME_OVER = "GAME_OVER", 
    t.GAME_NEXTRES_COM = "GAME_NEXTRES_COM", t.STORECFG_UPDATE = "STORECFG_UPDATE", 
    t.OPEN_WIN_VIEW = "OPEN_WIN_VIEW", t.OPEN_FAILED_VIEW = "OPEN_FAILED_VIEW", t.GAME_RESET_START = "GAME_RESET_START", 
    t.APP_JUMP_CANCEL = "NAVIGATE_FAILED", t.APP_JUMP_SUCCESS = "NAVIGATE_SUCCESS";
    class e extends Laya.Script {
        constructor() {
            super(), this.viewName = "";
        }
        onAwake() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
        }
        onEnable() {
            Laya.stage.event(t.UI_VIEW_OPENED, [ this.viewName, this.owner ]);
        }
        onDisable() {
            Laya.stage.event(t.UI_VIEW_CLOSED, [ this.viewName, this.owner ]);
        }
    }
    class a extends Laya.Script {
        constructor() {
            super(), this.topUI = null, this.middleUI = null, this.bottomUI = null, this.leftFloatUI = null, 
            this.rightFloatUI = null, this.fullUI = null, this.isFull = !0, this.vLayout = a.VERTICAL_MIDDLE, 
            this.hLayout = a.HORIZONTAL_CENTER;
        }
        onAwake() {
            this.isFull = !0, this.vLayout = a.VERTICAL_MIDDLE, this.hLayout = a.HORIZONTAL_CENTER, 
            this.topUI = this.owner.getChildByName("topUI"), this.middleUI = this.owner.getChildByName("middleUI"), 
            this.bottomUI = this.owner.getChildByName("bottomUI"), this.leftFloatUI = this.owner.getChildByName("leftFloatUI"), 
            this.rightFloatUI = this.owner.getChildByName("rightFloatUI"), this.fullUI = this.owner.getChildByName("fullUI");
        }
        onEnable() {
            this.applyLayout();
        }
        onDisable() {}
        applyLayout() {
            var t = this.owner;
            this.isFull ? (t.top = 0, t.bottom = 0, t.left = 0, t.right = 0) : (0 == this.vLayout ? t.top = 0 : 1 == this.vLayout ? t.centerY = 0 : t.bottom = 0, 
            0 == this.hLayout ? t.left = 0 : 1 == this.hLayout ? t.centerX = 0 : t.right = 0), 
            this.topUI && (this.topUI.top = 0, this.topUI.centerX = 0), this.middleUI && (this.middleUI.centerY = 0, 
            this.middleUI.centerX = 0), this.bottomUI && (this.bottomUI.bottom = 0, this.bottomUI.centerX = 0), 
            this.leftFloatUI && (this.leftFloatUI.left = 0, this.leftFloatUI.centerY = 0), this.rightFloatUI && (this.rightFloatUI.left = Laya.stage.width, 
            this.rightFloatUI.centerY = 0), this.fullUI && (this.fullUI.top = -2, this.fullUI.bottom = -2, 
            this.fullUI.left = -2, this.fullUI.right = -2);
        }
    }
    a.VERTICAL_TOP = 0, a.VERTICAL_MIDDLE = 1, a.VERTICAL_BOTTOM = 2, a.HORIZONTAL_LEFT = 0, 
    a.HORIZONTAL_CENTER = 1, a.HORIZONTAL_RIGHT = 2;
    class i {}
    i.STATE_LOADING = 0, i.STATE_UNBEGIN = 1, i.STATE_PREPARE = 2, i.STATE_PLAYING = 3, 
    i.STATE_PAUSE = 4;
    class s {
        static requestLoginByCode(e, a) {
            Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, this.WebApiMap.login, i, {
                data: s.appConfig.playerInfo
            } ]);
            // var i = a || {};
            // if (i.code = e, i.timestamp = Date.now(), this.UseWebApi) this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSign(this.WebApiMap.login, i, this.RequestSign) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, i), 
            // console.log(this.WebApiMap.login); else {
            //     var s = l;
            //     console.log(this.WebApiMap.login), Laya.stage.frameOnce(1, this, function() {
            //         Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, this.WebApiMap.login, i, {
            //             data: s.appConfig.playerInfo
            //         } ]);
            //     });
            // }
        }
        static requestLoginByUserId(e, a) {
            var i = a || {};
            if (i.user_id = e, i.timestamp = Date.now(), this.UseWebApi) this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.login, i, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, i), 
            console.log(this.WebApiMap.login); else {
                var s = l;
                console.log(this.WebApiMap.login), Laya.stage.frameOnce(1, this, function() {
                    Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, this.WebApiMap.login, i, {
                        data: s.appConfig.defaultCfg.playerInfo
                    } ]);
                });
            }
        }
        static requestBaseCfg(e) {

            let ab={
                "ret":200,
                "data":{
                    "commoncfg":{
                        "box_gold":200,
                        "one_gold":300,
                        "two_gold":200,
                        "three_gold":100,
                        "next_gold":50,
                        "reviveCountdown":8000,
                        "atkedScale":0.5,
                        "atkSlowTime":200,
                        "atkedMaxDist":2,
                        "atkedMinDist":1,
                        "collideMaxDist":1.5,
                        "collideMinDist":0.5
                    },
                    "playerCfg":[
                        {
                            "id":1,
                            "attacked_count":2,
                            "star_speed":10,
                            "speed_max":40,
                            "acc_speed":10,
                            "speedup_scale":1.3,
                            "speedup_time":1000,
                            "collide_moderate":0.1,
                            "shot_time":10000,
                            "atk_interval_time":800,
                            "gunatk_interval_time":2500
                        }
                    ],
                    "aiCfg":[
                        {
                            "AI_id":1,
                            "AI_attacked_count":1,
                            "AI_star_speed":11,
                            "AI_speed_max":30,
                            "AI_speed_min":5,
                            "AI_acc_speed":20,
                            "AI_slow_speed":10,
                            "AI_max_status_time":10000,
                            "AI_min_status_time":1000,
                            "AI_max_chance":100,
                            "AI_min_chance":0,
                            "AI_atk_chance":80,
                            "AI_hide_chance":80,
                            "AI_seek_chance":90,
                            "AI_pursue_chance":80,
                            "AI_pursue_scale":2,
                            "AI_seek_scope":10,
                            "AI_seek_time":2000,
                            "AI_pursue_gap":20,
                            "AI_moderate_gap":20,
                            "AI_speedup_scale":1.3,
                            "AI_speedup_time":1000,
                            "AI_atk_intval_time":0
                        },
                        {
                            "AI_id":2,
                            "AI_attacked_count":1,
                            "AI_star_speed":11,
                            "AI_speed_max":30,
                            "AI_speed_min":20,
                            "AI_acc_speed":20,
                            "AI_slow_speed":10,
                            "AI_max_status_time":10000,
                            "AI_min_status_time":1000,
                            "AI_max_chance":100,
                            "AI_min_chance":0,
                            "AI_atk_chance":80,
                            "AI_hide_chance":80,
                            "AI_seek_chance":90,
                            "AI_pursue_chance":80,
                            "AI_pursue_scale":2,
                            "AI_seek_scope":10,
                            "AI_seek_time":2000,
                            "AI_pursue_gap":20,
                            "AI_moderate_gap":20,
                            "AI_speedup_scale":1.3,
                            "AI_speedup_time":1000,
                            "AI_atk_intval_time":0
                        },
                        {
                            "AI_id":3,
                            "AI_attacked_count":2,
                            "AI_star_speed":15,
                            "AI_speed_max":35,
                            "AI_speed_min":15,
                            "AI_acc_speed":15,
                            "AI_slow_speed":10,
                            "AI_max_status_time":10000,
                            "AI_min_status_time":1000,
                            "AI_max_chance":100,
                            "AI_min_chance":0,
                            "AI_atk_chance":80,
                            "AI_hide_chance":80,
                            "AI_seek_chance":90,
                            "AI_pursue_chance":80,
                            "AI_pursue_scale":2,
                            "AI_seek_scope":10,
                            "AI_seek_time":2000,
                            "AI_pursue_gap":20,
                            "AI_moderate_gap":20,
                            "AI_speedup_scale":1.3,
                            "AI_speedup_time":1000,
                            "AI_atk_intval_time":0
                        },
                        {
                            "AI_id":4,
                            "AI_attacked_count":3,
                            "AI_star_speed":10,
                            "AI_speed_max":39,
                            "AI_speed_min":20,
                            "AI_acc_speed":10,
                            "AI_slow_speed":10,
                            "AI_max_status_time":10000,
                            "AI_min_status_time":1000,
                            "AI_max_chance":100,
                            "AI_min_chance":0,
                            "AI_atk_chance":80,
                            "AI_hide_chance":80,
                            "AI_seek_chance":90,
                            "AI_pursue_chance":80,
                            "AI_pursue_scale":2,
                            "AI_seek_scope":10,
                            "AI_seek_time":2000,
                            "AI_pursue_gap":20,
                            "AI_moderate_gap":20,
                            "AI_speedup_scale":1.3,
                            "AI_speedup_time":1000,
                            "AI_atk_intval_time":0
                        }
                    ],
                    "stageData":[
                        {
                            "track":"14,1,8,21,21",
                            "road":"3,1,2",
                            "ai":"1,1,2,2,3"
                        },
                        {
                            "track":"2,21,4,12,18",
                            "road":"1,2,3",
                            "ai":"1,1,2,2,4"
                        },
                        {
                            "track":"10,8,15,22,21",
                            "road":"2,2,3",
                            "ai":"1,2,1,2,4"
                        },
                        {
                            "track":"12,14,16,18,21",
                            "road":"3,2,3",
                            "ai":"1,2,2,4,1"
                        },
                        {
                            "track":"21,6,22,19,14",
                            "road":"3,3,3",
                            "ai":"1,2,2,3,1"
                        },
                        {
                            "track":"18,3,21,16,10",
                            "road":"1,2,3",
                            "ai":"1,2,2,3,3,1"
                        },
                        {
                            "track":"10,5,15,12,11",
                            "road":"2,2,2",
                            "ai":"1,2,3,1,4,1"
                        },
                        {
                            "track":"19,15,21,22,16",
                            "road":"3,3,3",
                            "ai":"2,1,3,4,1"
                        },
                        {
                            "track":"7,10,11,12,20,9",
                            "road":"1,1,2",
                            "ai":"2,3,4,1,1,2"
                        },
                        {
                            "track":"9,21,17,18,15,12",
                            "road":"2,2,1",
                            "ai":"2,2,3,1,3,1"
                        },
                        {
                            "track":"12,13,10,16,14,21,22",
                            "road":"1,1,3",
                            "ai":"2,2,3,3,1,1,1"
                        },
                        {
                            "track":"9,12,14,17,19,21,22",
                            "road":"3,2,3",
                            "ai":"1,1,2,2,1,3,4"
                        },
                        {
                            "track":"13,10,8,16,11,21",
                            "road":"2,3,1",
                            "ai":"1,2,2,1,3,3,4"
                        },
                        {
                            "track":"12,14,13,9,17,18,22",
                            "road":"3,3,3",
                            "ai":"2,2,3,1,3,4,1"
                        },
                        {
                            "track":"16,19,11,14,12,18",
                            "road":"3,1,2",
                            "ai":"2,2,3,1,4,2,1"
                        },
                        {
                            "track":"16,13,9,20,8,18",
                            "road":"2,2,2",
                            "ai":"2,2,2,1,1,1,3,4"
                        },
                        {
                            "track":"13,10,20,18,12,19,22",
                            "road":"1,1,3",
                            "ai":"2,3,2,1,2,4,2,1"
                        },
                        {
                            "track":"16,9,17,18,11,12",
                            "road":"1,1,1",
                            "ai":"1,2,4,2,2,3,1,3"
                        },
                        {
                            "track":"11,19,21,16,9,12",
                            "road":"2,1,2",
                            "ai":"3,2,2,2,2,4,1,2"
                        },
                        {
                            "track":"18,11,16,19,9,13,22",
                            "road":"3,3,1",
                            "ai":"2,2,2,2,2,4,1,3"
                        },
                        {
                            "track":"17,15,18,52,9,17,21",
                            "road":"3,2,1",
                            "ai":"3,2,3,2,2,1,1,3"
                        },
                        {
                            "track":"19,12,17,20,10,14,22",
                            "road":"1,3,1",
                            "ai":"2,4,2,2,4,4,1,3"
                        },
                        {
                            "track":"19,12,17,20,10,14,20",
                            "road":"1,3,1",
                            "ai":"2,4,2,2,4,4,1,3"
                        },
                        {
                            "track":"16,15,17,11,12,14,19",
                            "road":"2,3,1",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"17,15,18,11,16,20,22",
                            "road":"2,3,2",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"18,14,16,12,15,20,21",
                            "road":"2,1,2",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"13,14,15,16,17,18,19",
                            "road":"3,1,3",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"19,18,17,16,15,14,21",
                            "road":"3,3,3",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"21,20,14,13,18,19,21",
                            "road":"3,3,3",
                            "ai":"2,4,2,3,4,4,2,3"
                        },
                        {
                            "track":"15,16,14,19,20,11,21",
                            "road":"3,3,3",
                            "ai":"2,4,2,3,4,4,2,3"
                        }
                    ]
                }
            }

            console.log("this.WebApiMap.gameCfg",this.WebApiMap.gameCfg);
            Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, "gameCfg", a, ab ]);

            
            // var a = e || {}, i = l, s = !1;
            // i.appConfig.configVersion && (a.v_type = i.appConfig.configVersion, s = !0), 
            //  zs.laya.XHRUtils.xhrPost(this.WebApiMap.gameCfg, a)
        }
        static updatePlayerInfo(e) {
            var a = l;
            if (a.saveLocalPlayerInfo(), this.WebApiMap.updateInfo) {




                // var i = e || {};
                // i.user_id || (i.user_id = a.playerInfo.user_id), i.timestamp = Date.now(), console.log("------------ update info: ", i), 
                // this.UseWebApi ? this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.updateInfo, i, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.updateInfo, i) : Laya.stage.frameOnce(1, this, function() {
                //     Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, this.WebApiMap.updateInfo, i, {
                //         data: "success"
                //     } ]);
                // });
            } else console.log("**************** error 没有 WebApiMap.updateInfo 链接");
        }
        static updateVideoLog(e) {
            var a = e || {};
            a.user_id = l.playerInfo.user_id, a.timestamp = Date.now(), this.UseWebApi ? (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.logVideo, a, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.logVideo, a), 
            console.log(this.WebApiMap.logVideo)) : (console.log(this.WebApiMap.logVideo), Laya.stage.frameOnce(1, this, function() {
                Laya.stage.event(t.NET_XHR_RESPONSE, [ 1, this.WebApiMap.logVideo, a, null ]);
            }));
        }
        static requestStoreData(t) {}
        static requestEquipItem(t) {}
        static requestUnlockGoodsByGold(t) {}
        static requestUnlockGoodsByVideo(t) {}
    }
    s.WebApiMap = null, s.RequestHeader = {}, s.RequestSign = null, s.UseWebApi = !1;
    class o {
        static setOpenSound(t) {
            this.openSound = t;
        }
        static setUIResConfig(t) {
            this.viewConfig = t;
        }
        static showLoading() {
            Laya.Scene.open(this.viewConfig.loading, !1);
        }
        static hideLoading() {
            Laya.Scene.close(this.viewConfig.loading);
        }
        static showHome() {
            Laya.Scene.open(this.viewConfig.home, !1);
        }
        static hideHome() {
            Laya.Scene.close(this.viewConfig.home);
        }
        static showPlaying() {
            Laya.Scene.open(this.viewConfig.playing, !1);
        }
        static hidePlaying() {
            Laya.Scene.close(this.viewConfig.playing);
        }
        static showRelive() {
            Laya.Scene.open(this.viewConfig.relive, !1), Laya.SoundManager.playSound(this.openSound);
        }
        static hideRelive() {
            Laya.Scene.close(this.viewConfig.relive);
        }
        static showWin() {
            Laya.Scene.open(this.viewConfig.win, !1), Laya.SoundManager.playSound(this.openSound);
        }
        static hideScore() {
            Laya.Scene.close(this.viewConfig.win);
        }
    }
    o.openSound = "sound/viewOpen.wav", o.viewConfig = {};
    var n = zs.laya.platform.ADConfig, r = zs.laya.platform.PlatformMgr;
    class l extends Laya.Script {
        constructor() {
            super(), this.isCFGReady = !1, this.isLoginSuccess = !1, this.default3DScene = null, 
            this.launchResReady = !1, this.progressHandler = null, this.currentLoadStep = 0, 
            this.requestCFGErrorNum = 0, this.requestStoreErrorNum = 0, this.nextResReady = !1, 
            this.nextResWait = !1;
        }
        static get GameState() {
            return this.gameState;
        }
        static set GameState(t) {
            this.gameState = t;
        }
        static get ReliveChance() {
            return this.reliveChance;
        }
        static set ReliveChance(t) {
            this.reliveChance = t;
        }
        static saveLocalPlayerInfo(t = !1) {
            platform.getInstance().setStorageSync("playerinfo",l.playerInfo) ;


        }
        onAwake() {
            zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.startupEvt()), zs.laya.sdk.SdkService.initSDK(), 
            Laya.stage.addComponent(zs.laya.Resource), Laya.stage.addComponent(zs.laya.ObjectPool), 
            Laya.stage.addComponent(zs.laya.DeviceService), Laya.stage.on(t.GAME_HOME, this, this.onGameHome), 
            Laya.stage.on(t.GAME_PREPARE, this, this.onGamePrepare), Laya.stage.on(t.GAME_START, this, this.onGameStart), 
            Laya.stage.on(t.GAME_FAILED, this, this.onGameFailed), Laya.stage.on(t.GAME_WIN, this, this.onGameWin), 
            Laya.stage.on(t.GAME_RELIVE, this, this.onGameRelive), Laya.stage.on(t.GAME_OVER, this, this.onGameOver), 
            Laya.stage.on(t.GAME_NEXTRES_COM, this, this.onNextResCom), Laya.stage.on(t.OPEN_WIN_VIEW, this, this.onOpenWinView), 
            Laya.stage.on(t.OPEN_FAILED_VIEW, this, this.onOpenFailedView), Laya.stage.on(t.GAME_RESET_START, this, this.onGameOverToStart), 
            Laya.stage.on(t.APP_SHOW, this, this.onGameShow), Laya.stage.on(t.APP_HIDE, this, this.onGameHide), 
            Laya.stage.on(t.APP_JUMP_CANCEL, this, this.onJumpCancel),
            Laya.stage.on(t.NET_XHR_RESPONSE, this, this.onNetXHRResponse), 
            Laya.loader.load([ "config/gameCfg.json", "config/publishVer.json" ], Laya.Handler.create(this, this.onGameCfgReady));
        }
        onDestroy() {
            Laya.stage.off(t.GAME_HOME, this, this.onGameHome), Laya.stage.off(t.GAME_PREPARE, this, this.onGamePrepare), 
            Laya.stage.off(t.GAME_START, this, this.onGameStart), Laya.stage.off(t.GAME_OVER, this, this.onGameOver), 
            Laya.stage.off(t.GAME_RELIVE, this, this.onGameRelive), Laya.stage.off(t.GAME_FAILED, this, this.onGameFailed), 
            Laya.stage.off(t.GAME_WIN, this, this.onGameWin), Laya.stage.off(t.OPEN_WIN_VIEW, this, this.onOpenWinView), 
            Laya.stage.off(t.OPEN_FAILED_VIEW, this, this.onOpenFailedView), Laya.stage.off(t.GAME_RESET_START, this, this.onGameOverToStart), 
            Laya.stage.off(t.APP_SHOW, this, this.onGameShow), Laya.stage.off(t.APP_HIDE, this, this.onGameHide), 
            Laya.stage.off(t.NET_XHR_RESPONSE, this, this.onNetXHRResponse), Laya.stage.off(t.APP_JUMP_CANCEL, this, this.onJumpCancel);
        }
        onGameCfgReady() {
            var e = Laya.loader.getRes("config/gameCfg.json");
            l.appConfig = e, l.appConfig.version = Laya.loader.getRes("config/publishVer.json"), 
            l.playerInfo = e.defaultCfg.playerInfo, l.gameSetting = e.defaultCfg.gameSetting, 
            s.WebApiMap = l.appConfig.webApiMap, s.UseWebApi = l.appConfig.useWebApi, s.RequestSign = l.appConfig.webApiSign, 
            o.viewConfig = e.viewMap, o.openSound = e.soundViewOpen, Laya.stage.once(t.UI_VIEW_OPENED, this, this.onLoadingOpened, [ e.baseResList, e.fontList, e.configList ]), 
            o.showLoading(), Laya.loader.load([ "config/platformCfg.json" ], Laya.Handler.create(this, this.onPlatformCfgReady)), 
            this.login();
        }
        onPlatformCfgReady() {
            var t = Laya.loader.getRes("config/platformCfg.json");
            zs.laya.platform.PlatformMgr.initCFG(t), zs.laya.platform.PlatformMgr.initSoundUrl(l.appConfig.soundViewOpen, l.appConfig.soundClick), 
            zs.laya.zsapp.zsAppSdk.loadConfig(function(t) {
                zs.laya.platform.ADConfig.initAdSetting(l.appConfig.version, t), zs.laya.platform.PlatformMgr.initGameAd(), 
                Laya.stage.event(zs.laya.platform.PlatformMgr.AD_CONFIIG_LOADED);
            }, function(e) {
                console.error(e), zs.laya.platform.ADConfig.initAdSetting(l.appConfig.version, t.adCfg), 
                zs.laya.platform.PlatformMgr.initGameAd();
            });
        }
        onLoadingOpened() {
            this.currentLoadStep = 0, this.progressHandler = Laya.Handler.create(this, this.onLoadProgressUpdate, null, !1), 
            this.loadSubpackage();
        }
        loadSubpackage() {
            for (;l.appConfig.subpackage && l.appConfig.subpackage.length > 0; ) {
                const t = l.appConfig.subpackage.shift();
                if (zs.laya.sdk.SdkService.loadSubpackage(t, null, Laya.Handler.create(this, this.loadSubpackage), Laya.Handler.create(this, this.loadSubpackage))) return;
            }
            this.currentLoadStep++, console.log("----------------loadSubpackage currentLoadStep:" + this.currentLoadStep), 
            this.loadBaseConfig(), this.loadFont();
        }
        loadBaseConfig() {
            var t = [];
            l.appConfig.configList.forEach(function(e) {
                t.push(e);
            }), 0 == t.length ? this.onBaseConfigReady() : Laya.loader.load(t, Laya.Handler.create(this, this.onBaseConfigReady), this.progressHandler);
        }
        onBaseConfigReady() {

            platform.getInstance().cargamesstartup("Moto-Bike-Attack-Race",()=>{
                let cargames     = new Laya.Image();
                cargames.scale(0.8,0.8);
                cargames.skin    = "common/cargames.png";
                cargames.centerX = 0;
                cargames.top     = 10;
                cargames.zOrder  = 2e3;
                cargames.on(Laya.Event.MOUSE_DOWN,cargames,()=>{platform.getInstance().navigate("GAME","LOGO")})
                Laya.stage.addChild(cargames);
                window.cargames  = cargames;

                this.loadBaseRes();
            });
        }
        loadBaseRes() {
            var t = [];
            l.appConfig.baseResList.forEach(function(e) {
                t.push(zs.laya.Resource.Get3dPrefabUrl(e));
            }), 0 == t.length ? this.onBaseResReady() : Laya.loader.create(t, Laya.Handler.create(this, this.onBaseResReady), this.progressHandler);
        }
        onBaseResReady() {
            this.currentLoadStep++, console.log("----------------onBaseResReady currentLoadStep:" + this.currentLoadStep), 
            this.loadScene3d();
        }
        loadFont() {
            var t = this;
            l.appConfig.fontList.forEach(function(e) {
                var a = new Laya.BitmapFont();
                a.loadFont(`font/${e}.fnt`, Laya.Handler.create(t, t.onFontReady, [ a, e ]));
            });
        }
        onFontReady(t, e) {
            Laya.Text.registerBitmapFont(e, t);
        }
        loadScene3d() {
            null != l.appConfig.default3DScene && 0 != l.appConfig.default3DScene.length ? zs.laya.Resource.LoadScene3dAsyn(l.appConfig.default3DScene, Laya.Handler.create(this, this.onLaunchResReady), this.progressHandler) : this.onLaunchResReady(null);
        }
        onLaunchResReady(t) {
            this.currentLoadStep++, console.log("----------------onLaunchResReady currentLoadStep:" + this.currentLoadStep), 
            this.launchResReady = !0, this.default3DScene = t, this.launchCompleted();
        }
        onLoadProgressUpdate(e) {
            if (1 != e) {
                var a = .25 * this.currentLoadStep + .25 * e;
                Laya.stage.event(t.UI_PROGRESS_UPDATE, a);
            }
        }
        onNetXHRResponse(e, a, o, n) {
            if (1 != e) return console.log("**************** error ： " + a + "  返回错误！！！"), a == s.WebApiMap.gameCfg && this.requestCFGErrorNum < 3 && (this.requestCFGErrorNum++, 
            s.requestBaseCfg()), a == s.WebApiMap.requestStoreCFG && this.requestStoreErrorNum < 3 && (this.requestStoreErrorNum++, 
            s.requestStoreData()), void ((this.requestCFGErrorNum >= 3 || this.requestStoreErrorNum >= 3) && console.log("哎呀，网络开小差，请检查网络"));
            console.log(a + " : response:", n);
            switch (a) {
              case s.WebApiMap.login:
                var r = n.data;
                l.GameState == i.STATE_LOADING ? l.playerInfo = r : l.GameState == i.STATE_UNBEGIN ? (l.playerInfo.user_id = r.user_id, 
                console.log("------------------- change playerInfo"), Laya.stage.event(t.DATA_LOGIN_INFO_UPDATE, [ r ])) : l.playerInfo.user_id = r.user_id, 
                this.isLoginSuccess = !0, s.RequestHeader = {
                    t: l.playerInfo.t,
                    timestamp: l.playerInfo.timestamp
                }, zs.laya.zsapp.zsAppSdk.init(l.playerInfo.user_id, Laya.Browser.onAndroid ? 1 : 0), 
                zs.laya.platform.PlatformMgr.initUser(l.playerInfo.user_id), l.saveLocalPlayerInfo(!0);
                break;

              case "gameCfg":
                l.gameSetting = n.data, 
                Laya.stage.event(t.DATA_SETTING_UPDATE), 0 == this.isCFGReady && (this.isCFGReady = !0, this.launchCompleted());
                break;

              case s.WebApiMap.logVideo:
                break;

              case s.WebApiMap.updateInfo:
                console.log("update player info success!");
                break;

              case s.WebApiMap.requestStoreCFG:
                var h = n.data;
                l.storeItemsDic = {};
                for (let t = 0; t < h.length; t++) {
                    var c = h[t];
                    null == l.storeItemsDic[c.goods_type] && (l.storeItemsDic[c.goods_type] = []), l.storeItemsDic[c.goods_type].push(c);
                }
                Laya.stage.event(t.STORECFG_UPDATE);
                break;

              case s.WebApiMap.requestEquipItem:
                console.log("use goods_item success");
                break;

              case s.WebApiMap.unlockGoodsByGold:
                console.log("gold unlock goods_item success");
                break;

              case s.WebApiMap.unlockGoodsByVideo:
                console.log("video unlock goods_item success");
            }
        }
        launchCompleted() {
            if (this.launchResReady) {
                // if (!this.isLoginSuccess && this.isCFGReady) {
                   
                // }


                try {
                    var e = Laya.LocalStorage.getItem(s.RequestSign);
                    if (e) {
                        var a = JSON.parse(e);
                        l.playerInfo = a.playerInfo;
                    } else l.playerInfo = l.appConfig.defaultCfg.playerInfo;
                } catch (error) {
                    
                }
                l.playerInfo.level_id || (l.playerInfo.level_id = l.appConfig.defaultCfg.playerInfo.level_id ? l.appConfig.defaultCfg.playerInfo.level_id : 1), 
                Laya.stage.event(t.LAUNCH_COMPLETED, this.default3DScene);
            }
        }
        onGameHome() {
            l.GameState = i.STATE_UNBEGIN;
            o.hideLoading();
            o.showHome();
            // o.hideLoading();
            // 0 == l.autoStartNext ? (o.showHome()) : Laya.timer.frameOnce(2, this, function() {
            //     Laya.stage.event(t.GAME_PREPARE);
            // }), l.storeItemsDic || s.requestStoreData();
        }
        onGamePrepare() {
            this.nextResWait = !1, this.nextResReady = !1, l.GameState = i.STATE_PREPARE, 
            l.appConfig.bgm && zs.laya.SoundService.playMusic(l.appConfig.bgm), 
            o.hideHome(), o.showPlaying();
        }
        onGameStart() {
            l.isWin = !1, l.autoStartNext = !1, l.GameState = i.STATE_PLAYING;
        }
        onOpenFailedView() {
            l.GameState == i.STATE_PLAYING && (l.isWin = !1, l.autoStartNext = !1, zs.laya.SoundService.stopMusic(), 
            l.GameState = i.STATE_PAUSE, o.showRelive(), l.reliveChance -= 1);
        }
        onOpenWinView() {
            l.GameState == i.STATE_PLAYING && (l.isWin = !0, l.autoStartNext = !1, zs.laya.SoundService.stopMusic(), 
            l.GameState = i.STATE_PAUSE, o.showWin());
        }
        onGameFailed() {
            this.reportTalkData(), this.nextResReady = !0, n.zs_switch && n.zs_jump_switch && n.zs_history_list_jump ? (r.showListAd(), 
            Laya.stage.on(t.UI_VIEW_CLOSED, this, this.onAdClose2, [ !1 ])) : this.onOpenFailedView();
        }
        onGameWin() {
            this.reportTalkData(), n.zs_switch && n.zs_jump_switch && n.zs_history_list_jump ? (r.showListAd(), 
            Laya.stage.on(t.UI_VIEW_CLOSED, this, this.onAdClose2, [ !0 ])) : this.onOpenWinView(), 
            this.nextResReady = !1, this.preloadNextRes();
        }
        reportTalkData() {
        }
        gameAccountAndUpload() {
            l.saveLocalPlayerInfo();
            this.reConnect();
        }
        preloadNextRes() {
            this.onNextResReady();
        }
        onNextResReady() {
            Laya.stage.event(t.GAME_NEXTRES_COM);
        }
        onNextResProgress(t) {
            console.log("-----------预加载下一关资源的进度：" + t);
        }
        onGameOver() {
            this.gameAccountAndUpload(), 
            
            l.reliveChance = 2,
             o.hideRelive(), 
             o.hidePlaying(), 
            o.hideScore(), 
            this.onGameOverToStart();
            // n.zs_jump_switch && n.isPublicVersion() && n.zs_full_screen_jump ? (r.showScreenAd(), 
            // Laya.stage.on(t.UI_VIEW_CLOSED, this, this.onAdClose1)) : this.onGameOverToStart();
        }
        onAdClose1(e) {
            "FullAd_1" == e && (this.onGameOverToStart(), Laya.stage.off(t.UI_VIEW_CLOSED, this, this.onAdClose1));
        }
        onAdClose2(e, a) {
            "FullAd" == a && (e ? this.onOpenWinView() : this.onOpenFailedView(), Laya.stage.off(t.UI_VIEW_CLOSED, this, this.onAdClose2));
        }
        onGameOverToStart() {
            this.nextResReady ? Laya.stage.event(t.GAME_HOME) : this.nextResWait = !0, l.isWin = !1;
        }
        onNextResCom() {
            this.nextResReady = !0, this.nextResWait && Laya.stage.event(t.GAME_HOME);
        }
        onGameRelive() {
            l.GameState == i.STATE_PAUSE && (l.appConfig.bgm && zs.laya.SoundService.playMusic(l.appConfig.bgm), 
            l.GameState = i.STATE_PLAYING, o.hideRelive());
        }
        onGameShow() {
            Laya.stage.renderingEnabled = !0, l.appConfig && l.appConfig.bgm && !zs.laya.SoundService.bgPlaying && zs.laya.SoundService.playMusic(l.appConfig.bgm);
        }
        onGameHide() {
            Laya.SoundManager.stopSound("sound/accelerate.mp3"), Laya.SoundManager.stopSound("sound/lowspeed.mp3"), 
            Laya.stage.renderingEnabled = !1, zs.laya.SoundService.stopMusic();
        }
        onJumpCancel() {
            l.appConfig.useWebAdApi && n.zs_jump_switch && n.isPublicVersion() && n.zs_full_screen_jump && r.showScreenAd();
        }
        reConnect() {
            s.requestBaseCfg(), 0 == this.isLoginSuccess && this.login();
        }
        login() {
            s.requestBaseCfg();
            // var t = Laya.LocalStorage.getItem(s.RequestSign);
            // if (t) {
            //     var e = JSON.parse(t);
            //     if (e && e.lastLoginDate && zs.laya.MiscUtils.isToday(e.lastLoginDate)) return s.RequestHeader = {
            //         t: e.t,
            //         timestamp: e.timestamp
            //     }, console.log("1---------------登录：" + e.playerInfo.user_id), void s.requestLoginByUserId(e.playerInfo.user_id);
            // }
            // zs.laya.sdk.SdkService.login(Laya.Handler.create(this, function(t) {
            //     t && s.requestLoginByCode(t.identityId);
            // }), Laya.Handler.create(this, function(t) {
            //     console.error("login platform error:" + t), 1 == t.code;
            // }));
        }
    }
    l.appConfig = {}, l.storeCfg = {}, l.storeItemsDic = null, l.gameSetting = null, 
    l.levelData = {}, l.authorizeData = {}, l.gameStartRet = {}, l.gameEndRet = {}, 
    l.gameState = i.STATE_LOADING, l.reliveChance = 2, l.autoStartNext = !1, l.isWin = !1;
    class h extends e {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.owner.addComponent(a);
        }
        onEnable() {
            if (super.onEnable(), l.appConfig.useWebAdApi) {
            }
        }
    }
    class c {
        static normalize(t) {
            var e = t.x * t.x + t.y * t.y;
            if (1 == e) return new Laya.Point(t.x, t.y);
            if (0 == e) return new Laya.Point(t.x, t.y);
            let a = new Laya.Point();
            var i = 1 / Math.sqrt(e);
            return a.x = t.x * i, a.y = t.y * i, a;
        }
        static normalizeSelf(t) {
            var e = t.x * t.x + t.z * t.z;
            if (1 == e) return t;
            if (0 == e) return t;
            var a = 1 / Math.sqrt(e);
            return t.x = t.x * a, t.z = t.z * a, t;
        }
        static mul(t, e) {
            let a = new Laya.Point();
            return a.x = t.x * e, a.y = t.y * e, a;
        }
        static magSqr(t) {
            return t.x * t.x + t.y * t.y;
        }
        static add(t, e) {
            let a = new Laya.Point();
            return a.x = t.x + e.x, a.y = t.y + e.y, new Laya.Point(a.x, a.y);
        }
        static dot(t, e) {
            return t.x * e.x + t.y * e.y;
        }
        static distanceVector2(t, e) {
            let a = t.x - e.x, i = t.y - e.y;
            return a * a + i * i;
        }
        static distanceSquared(t, e) {
            let a = t.x - e.x, i = t.y - e.y;
            return a * a + i * i;
        }
        static rotateY(t, e) {
            var a = Math.sin(e), i = Math.cos(e), s = t.x;
            return t.x = i * s - a * t.z, t.z = a * s + i * t.z, t;
        }
        static angleY(t, e) {
            let a = t.x - e.x, i = t.z - e.z;
            return 180 * Math.atan2(a, i) / Math.PI;
        }
        static getTargetAngle(t, e) {
            var a = new Laya.Vector3();
            return Laya.Vector3.subtract(e, t, a), 180 * Math.atan2(a.x, a.z) / Math.PI;
        }
        static angleY2(t) {
            return 180 * Math.atan2(t.x, t.z) / Math.PI;
        }
        static angleX(t, e) {
            let a = t.y - e.y, i = t.z - e.z;
            return 180 * Math.atan2(-a, i) / Math.PI;
        }
        static angleDirection(t, e) {
            Laya.Vector3.normalize(t, t);
            var a = Laya.Vector3.dot(t, e), i = Math.acos(a);
            return i = Math.PI / 2 - i, t.z < 0 && (i = Math.PI - i), i *= this.RADIUS_TO_ANGLE;
        }
        static cross(t, e) {
            return t.x * e.y - t.y * e.x;
        }
        static angle(t, e) {
            var a = this.magSqr(t), i = this.magSqr(e);
            if (0 === a || 0 === i) return 0;
            var s = this.dot(t, e) / Math.sqrt(a * i);
            return s = this.clampf(s, -1, 1), Math.acos(s);
        }
        static clampf(t, e, a) {
            if (e > a) {
                var i = e;
                e = a, a = i;
            }
            return t < e ? e : t < a ? t : a;
        }
        static random(t, e) {
            return Math.random() * (e - t) + t << 0;
        }
        static probabilityCanHappen(t) {
            return this.random(0, 100) <= t;
        }
        static scaleTo(t, e, a, i, s, o) {
            Laya.Tween.to(t, {
                scaleX: e,
                scaleY: e
            }, .5 * i, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    scaleX: a,
                    scaleY: a
                }, .5 * i, null, Laya.Handler.create(s, o));
            }));
        }
        static scaleToDefault(t, e, a) {
            this.scaleTo(t, .8, 1, 200, e, a);
        }
        static delayMouseEnabled(t) {
            Laya.stage.timerOnce(500, this, () => {
                t && (t.mouseEnabled = !0);
            });
        }
        static ComputeCollision(t, e, a, i, s) {
            var o = Math.min(i, .5 * t), n = Math.max(o, .5 * -t), r = Math.min(s, .5 * e), l = Math.max(r, .5 * -e);
            return (n - i) * (n - i) + (l - s) * (l - s) <= a * a;
        }
        static segmentsIntr(t, e, a, i) {
            var s = (t.x - a.x) * (e.y - a.y) - (t.y - a.y) * (e.x - a.x), o = (t.x - i.x) * (e.y - i.y) - (t.y - i.y) * (e.x - i.x);
            if (s * o >= 0) return !1;
            var n = (a.x - t.x) * (i.y - t.y) - (a.y - t.y) * (i.x - t.x);
            if (n * (n + s - o) >= 0) return !1;
            var r = n / (o - s), l = r * (e.x - t.x), h = r * (e.y - t.y);
            return {
                x: t.x + l,
                y: t.y + h
            };
        }
        static judgeIntersect(t, e, a, i, s, o, n, r) {
            return Math.min(t, a) <= Math.max(s, n) && Math.min(o, r) <= Math.max(e, i) && Math.min(s, n) <= Math.max(t, a) && Math.min(e, i) <= Math.max(o, r) && (((s - t) * (i - e) - (a - t) * (o - e)) * ((n - t) * (i - e) - (a - t) * (r - e)) <= 1e-8 && ((t - s) * (r - o) - (n - s) * (e - o)) * ((a - s) * (r - o) - (n - s) * (i - o)) <= 1e-8);
        }
        static vectorDirection(t, e) {
            var a = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(e, t, a);
            var i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.normalize(a, i), i;
        }
        static lerp(t, e, a) {
            return t + (e - t) * Math.min(1, a);
        }
        static IsNumber(t) {
            return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t));
        }
        static Reflect(t, e) {
            let a = new Laya.Vector3();
            return Laya.Vector3.normalize(t, t), Laya.Vector3.normalize(e, e), Laya.Vector3.scale(e, 2 * Laya.Vector3.dot(t, e), a), 
            Laya.Vector3.subtract(t, a, a), a;
        }
        static InverseTransformPoint(t, e) {
            var a = new Laya.Vector3();
            t.getRight(a);
            var i = new Laya.Vector3();
            t.getUp(i);
            var s = new Laya.Vector3();
            t.getForward(s);
            var o = new Laya.Vector3(-s.x, -s.y, -s.z), n = this.ProjectDistance(e, t.position, a), r = this.ProjectDistance(e, t.position, i), l = this.ProjectDistance(e, t.position, o);
            return new Laya.Vector3(n, r, l);
        }
        static TransformPoint(t, e) {
            var a = new Laya.Vector3();
            return Laya.Vector3.transformQuat(e, t.rotation, a), Laya.Vector3.add(a, t.position, a), 
            a;
        }
        static ProjectDistance(t, e, a) {
            var i = new Laya.Vector3();
            Laya.Vector3.subtract(t, e, i);
            var s = this.Angle2(i, a) * Math.PI / 180, o = Laya.Vector3.distance(t, e);
            return o *= Math.cos(s);
        }
        static Angle2(t, e) {
            var a = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
            return a < -1 && (a = -1), a > 1 && (a = 1), 180 * Math.acos(a) / Math.PI;
        }
        static IsEqual(t, e) {
            return Math.abs(t - e) < 1e-5;
        }
        static changMat(t, e) {
            let a = Laya.Loader.getRes(t);
            a ? e && (e.material = a) : Laya.Material.load(t, Laya.Handler.create(null, function(t) {
                t && e && (e.material = t);
            }));
        }
        static screen2worldPos(t, e, a, i, s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let n = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), r = new Laya.HitResult();
            a.setValue(a.x / Laya.stage.width, a.y / Laya.stage.height), e.normalizedViewportPointToRay(a, n), 
            t.physicsSimulation.rayCast(n, r), r.succeeded && (console.log("碰撞的：", r.collider.owner.name), 
            i.setValue(r.point.x, r.point.y, r.point.z), console.log("worldPos", i));
        }
        static mutation(t, e) {
            if (t.length != e.length) return !1;
            for (var a = t.toLowerCase(), i = e.toLowerCase(), s = 0; s < i.length; s++) if (-1 === a.indexOf(i[s])) return !1;
            return !0;
        }
        static isCollision(t, e, a, i, s, o) {
            return t >= a && t <= a + s && e >= i && e <= i + o;
        }
        static isCollisionWithRect(t, e, a, i, s, o, n, r) {
            return !(t >= s && t >= s + n) && (!(t <= s && t + a <= s) && (!(e >= o && e >= o + r) && !(e <= o && e + i <= o)));
        }
        static activeAllChild(t, e) {
            if (t) for (let a = 0; a < t.numChildren; a++) {
                t.getChildAt(a).active = e;
            }
        }
    }
    c.UP = new Laya.Vector3(0, 1, 0), c.LEFT = new Laya.Vector3(1, 0, 0), c.RIGHT = new Laya.Vector3(-1, 0, 0), 
    c.FORWARD = new Laya.Vector3(0, 0, 1), c.ONE = new Laya.Vector3(1, 1, 1), c.ZERO = new Laya.Vector3(0, 0, 0), 
    c.RADIUS_TO_ANGLE = 180 / Math.PI, c.ANGLE_TO_RADIUS = Math.PI / 180, c.signAngle = function(t, e) {
        let a = this.angle(t, e);
        return this.cross(t, e) < 0 ? -a : a;
    };
    class d {
        constructor() {
            this.trackData = [], this.curStageId = 1, this.gold = 0, this.height = 240, this.gameFinish = !1, 
            this.playerRank = 0, this.playerKillCount = 0, this.playerKillPrice = 20, this.gunatkintervaTime = 1500, 
            this.stageCount = 1, this.stageCfgs = [ "track1", "track2", "track3" ], this.roadCfgs = [ "road_1", "road_2", "road_3" ], 
            this.stageCfg = [], this.currentCreateTrackLine = 0;
        }
        set gameGold(t) {
            this.gold = t, l.playerInfo.gold = this.gold;
        }
        get curStage() {
            return this.curStageId;
        }
        set curStage(t) {
            let e = Math.max(1, t);

           
            var a =  platform.getInstance().getStorageSync("bikegamestage") || 1
            e = Math.max(e, Number(a))
            platform.getInstance().setStorageSync("bikegamestage",e) ;
            l.playerInfo.level_id = e, 
            this.curStageId = e;
        }
        static initTrackData(t) {
            t && (this.data.trackData = t.trackCfg);
        }
        static initGameData() {
            if (l.gameSetting.stageData) {
                this.data.stageCfg = [], this.data.stageCount = l.gameSetting.stageData.length;
                for (let t = 0; t < this.data.stageCount; t++) {
                    let e = l.gameSetting.stageData[t], a = e.track.split(","), i = e.road.split(","), s = e.ai.split(","), o = [];
                    for (let t = 0; t < a.length; t++) o.push("track" + a[t]);
                    let n = [];
                    for (let t = 0; t < i.length; t++) n.push("road_" + i[t]);
                    let r = {
                        track: o,
                        road: n,
                        ai: s
                    };
                    this.data.stageCfg.push(r);
                }
                this.updatePlayerInfo(l.playerInfo);
            }
        }
        static updatePlayerInfo(t) {
            try {
                let ret = platform.getInstance().getStorageSync("playerinfo") || {} ;
                if(ret){
                    this.data.gold     = ret.gold || 0;
                    this.data.curStage = ret.level_id || 0;
                }
            } catch (error) {
                this.data.gold     = 0;
                this.data.curStage = 0;
            }
           
            // t && (this.data.gameGold = l.playerInfo.gold, this.data.curStage = l.playerInfo.level_id);
        }
        getTrackDataByName(t) {
            let e = null;
            return this.trackData.forEach(function(a) {
                t != a.trackname || (e = a);
            }), e || this.trackData[1];
        }
        getStageLenght(t) {
            let e = 0, a = this.getStageData(t).track;
            for (let t = 0; t < a.length; t++) e += this.height;
            return e;
        }
        getStageData(t) {
            return t = Math.min(t, this.stageCfg.length), this.stageCfg[t - 1];
        }
        getGoldByRank() {
            let t = 0;
            switch (this.playerRank) {
              case 1:
                t = c.random(l.gameSetting.commoncfg.two_gold, l.gameSetting.commoncfg.one_gold);
                break;

              case 2:
                t = c.random(l.gameSetting.commoncfg.three_gold, l.gameSetting.commoncfg.two_gold);
                break;

              case 3:
                t = c.random(l.gameSetting.commoncfg.next_gold, l.gameSetting.commoncfg.three_gold);
                break;

              default:
                t = c.random(0, l.gameSetting.commoncfg.next_gold);
            }
            return t;
        }
    }
    d.data = new d();
    class m extends h {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.owner.mouseEnabled = !0, this.goldLabel && (this.goldLabel.text = d.data.gold.toString()), 
            this.stageLabel && (this.stageLabel.text = d.data.curStage.toString());
        }
        onStart() {
            super.onStart(), 
            this.touched = false;
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
            // this.owner.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
            // this.owner.on(Laya.Event.MOUSE_OUT, this, this.onTouchUp);
            // this.owner.on(Laya.Event.MOUSE_UP, this, this.onTouchUp);
        }
        onDisable() {
            super.onDisable(), 
            // this.owner.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
            this.owner.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
            this.touched = false;
        }

        onTouchDown(){
            this.touched = true;
            this.owner.mouseEnabled = !1, 
            platform.getInstance().showInterstitial(()=>{
                this.startGame()
            })
        }

        onTouchUp(){
            this.touched = false;
        }
        startGame() {
            c.scaleToDefault(this.startBtn), this.startBtn.mouseEnabled = !1, Laya.SoundManager.playSound("sound/ready.mp3"), 
            zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.gameStartEvt(l.playerInfo.user_id)), 
            Laya.stage.event(t.GAME_PREPARE);
        }
        onTouchMove() {
            if(!this.touched)return;
            let t = this.owner.mouseY, e = this.owner.mouseX;
            t < 500 || t > Laya.stage.height - 200 || e < 100 || e > Laya.stage.width - 100 || (
                this.owner.mouseEnabled = !1, 
                platform.getInstance().showInterstitial(()=>{
                    this.startGame()
                })
            );
        }
    }
    class p extends h {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
        }
        onEnable() {
            super.onEnable(), this.onLoadingUpdate(.01), Laya.stage.on(t.UI_PROGRESS_UPDATE, this, this.onLoadingUpdate);
        }
        onDisable() {
            super.onDisable(), Laya.stage.off(t.UI_PROGRESS_UPDATE, this, this.onLoadingUpdate);
        }
        onLoadingUpdate(t) {
            this.loadingBar && this.loadingMask && (this.loadingMask.width = this.loadingBar.width * t), 
            this.loadingVal && (this.loadingVal.text = Math.floor(100 * t) + "%");
        }
    }
    class u extends h {
        constructor() {
            super(), this.angle = 0, this.maxAngle = 359.99, this.countDowntime = 0, this.downTime = 0;
        }
        onAwake() {
            super.onAwake(), this.replayBtn && (this.replayBtn.mouseEnabled = !0) && this.replayBtn.on(Laya.Event.CLICK, this, this.replayGame);
            this.applist = this.owner.getChildByName("applist");
            platform.getInstance().initList(this.applist);
        }
        onStart() {
            super.onStart(), this.reliveCountDown.graphics.drawPie(123.5, 123.5, 124, -90, this.maxAngle - 90, "#ffffff"), 
            this.reliveCounTime();
        }
        replayGame() {
            Laya.timer.clear(this, this.startReliveCounTime), c.scaleToDefault(this.replayBtn), 
            Laya.SoundManager.playSound(l.appConfig.soundClick), this.replayBtn.mouseEnabled = !1, 
            Laya.stage.event(t.GAME_OVER);
        }
        reliveCounTime() {
            // this.downTime = l.gameSetting.commoncfg.reviveCountdown, 
            // this.countDowntime = this.downTime, 
            // Laya.timer.loop(1e3, this, this.startReliveCounTime);
        }
        startReliveCounTime() {
            // if (this.countDowntime -= 1e3, this.angle < this.maxAngle) {
            //     let t = this.downTime - this.countDowntime;
            //     this.angle = t * (this.maxAngle / this.downTime), this.angle = Math.min(this.maxAngle, this.angle), 
            //     this.reliveCountDown.graphics.clear(), this.reliveCountDown.graphics.drawPie(123.5, 123.5, 124, -90, Math.floor(this.maxAngle - this.angle) - 90, "#ffffff");
            // }
            // this.countDowntime <= 0 && this.endReliveCounTime();
        }
        endReliveCounTime() {
            // Laya.timer.clear(this, this.startReliveCounTime), this.angle = 0, this.countDowntime = 0, 
            // this.replayGame();
        }
    }
    class y extends h {
        constructor() {
            super(), this.targetPoint = new Laya.Point(), this.startPoint = new Laya.Point(), 
            this.initAwradGold = 0;
        }
        onAwake() {
            super.onAwake(), this.homeBtn && (this.homeBtn.mouseEnabled = !0) && this.homeBtn.on(Laya.Event.CLICK, this, this.backHome), 
            this.nextBtn && (this.nextBtn.mouseEnabled = !0) && this.nextBtn.on(Laya.Event.CLICK, this, this.nextStage);

            this.applist = this.owner.getChildByName("applist");
            platform.getInstance().initList(this.applist);
            
        }
        onStart() {
            super.onStart();
            this.owner.getChildByName("bottomUI");
            var t = this.owner.getChildByName("topUI");
            let e = t.getChildByName("dioamonds");
            this.targetPoint = t.localToGlobal(new Laya.Point(e.x, e.y)), this.startPoint.x = .5 * Laya.stage.width, 
            this.startPoint.y = .5 * Laya.stage.height, this.updateGold(), this.rankLabel.text = d.data.playerRank + "th", 
            this.rankLabel1.text = d.data.playerRank + "th";
            let a = d.data.playerKillCount * d.data.playerKillPrice, i = d.data.getGoldByRank(), s = a + i;
            this.killCount.text = "x" + d.data.playerKillCount, this.awardgold.text = "0", this.killgold.text = a.toString(), 
            this.rankgold.text = i.toString(), this.initAwradGold = 0;
            for (let t = 0; t < s; t++) Laya.Tween.to(this.awardgold, {}, 0, Laya.Ease.elasticOut, Laya.Handler.create(this, this.addGold, [ 1 ]), 5 * t);
        }
        addGold(t) {
            this.initAwradGold += t, this.awardgold.text = this.initAwradGold.toString();
        }
        backHome() {
            c.scaleToDefault(this.homeBtn), l.autoStartNext = !1, Laya.SoundManager.playSound(l.appConfig.soundClick), 
            this.homeBtn.mouseEnabled = !1, Laya.stage.event(t.GAME_OVER);
        }
        nextStage() {
            c.scaleToDefault(this.nextBtn),
             l.autoStartNext = !1, 
             Laya.SoundManager.playSound(l.appConfig.soundClick), 
            this.nextBtn.mouseEnabled = !1, this.onGetGold();
        }
        onGetGold() {
            this.owner.mouseEnabled = !1;
            let e = d.data.gold + d.data.playerKillCount * d.data.playerKillPrice + d.data.getGoldByRank();
            for (let t = 0; t < 30; t++) this.addGold2Screen(100 + 10 * t);
            Laya.Tween.to(this.owner, {}, 0, null, Laya.Handler.create(this, () => {
                d.data.gameGold = e, this.updateGold(), s.updatePlayerInfo({
                    gold: d.data.gold
                }), this.owner.mouseEnabled = !0, Laya.stage.event(t.GAME_OVER);
            }), 1500);
        }
        addGold2Screen(t) {
            var e = Laya.Pool.getItemByCreateFun("goldui", this.gold.create, this.gold);
            e.visible = !0, e.x = this.startPoint.x + (2 * c.random(0, 2) - 1) * c.random(1, 150), 
            e.y = this.startPoint.y + (2 * c.random(0, 2) - 1) * c.random(1, 150), this.owner.addChild(e), 
            Laya.Tween.to(e, {
                x: this.targetPoint.x,
                y: this.targetPoint.y
            }, 300, null, Laya.Handler.create(this, () => {
                d.data.gold += 1, this.updateGold(), zs.laya.DeviceService.VibrateShort(), Laya.SoundManager.playSound("sound/gold.mp3"), 
                e.removeSelf(), Laya.Pool.recover("goldui", e);
            }), t);
        }
        updateGold() {
            this.goldLabel && (this.goldLabel.text = d.data.gold.toString());
        }
    }
    class g extends Laya.Script3D {
        constructor() {
            super();
        }
        onStart() {
            console.log("=============--================");
        }
        huijiEvent() {
            console.log("============================="), this.character && this.character.enableAtkCollisionBox(!0);
        }
        dieEvent() {
            console.log("==============dieEvent==============="), this.character && this.character.dieEventCallback();
        }
        init(t) {
            this.character = t;
        }
    }
    var f = zs.laya.AnimStateListener;
    class _ extends Laya.Script {
        onAwake() {
            this.character = this.owner.getComponent(v), this.moTuo_Wang = this.owner.getChildByName("MoTuo_Wang"), 
            this.animator = this.moTuo_Wang.getComponent(Laya.Animator), this.animator.speed = 0;
        }
        onStart() {
            this.character = this.owner.getComponent(v);
            let t = this.moTuo_Wang.getComponent(g);
            t && t.destroy(), (t = this.moTuo_Wang.addComponent(g)).init(this.character);
        }
        onEnable() {
            super.onEnable(), f.setListener(this.animator, _.taijiao, this, null, this.ontaijiaoCallback), 
            f.setListener(this.animator, _.yunsu_qiehuan_jiasu, this, null, this.ontojiasuCallback), 
            f.setListener(this.animator, _.jiasu_qiehuan_yunshu, this, null, this.ontoyidongCallback), 
            f.setListener(this.animator, _.zuo_pian, this, null, this.ontozuopianCallback), 
            f.setListener(this.animator, _.you_pian, this, null, this.ontoyuopianCallback), 
            f.setListener(this.animator, _.hui_lai_zuo, this, null, this.ontoHuiLaiCallback), 
            f.setListener(this.animator, _.hui_lai_you, this, null, this.ontoHuiLaiCallback), 
            f.setListener(this.animator, _.shouji_you, this, null, this.ontoAtkedCallback), 
            f.setListener(this.animator, _.shouji_zuo, this, null, this.ontoAtkedCallback), 
            f.setListener(this.animator, _.titui_you, this, null, this.ontoAtkCallback), f.setListener(this.animator, _.titui_zuo, this, null, this.ontoAtkCallback), 
            f.setListener(this.animator, _.huiji_you, this, null, this.ontoAtkCallback), f.setListener(this.animator, _.huiji_zuo, this, null, this.ontoAtkCallback), 
            f.setListener(this.animator, _.huitou_kan, this, null, this.ontoRunCallback), f.setListener(this.animator, _.luo_di, this, null, this.ontoRunCallback), 
            f.setListener(this.animator, _.youbian_kaiqiang, this, null, this.ontoKaiqiangCallback), 
            f.setListener(this.animator, _.zuobian_kaiqiang, this, null, this.ontoKaiqiangCallback), 
            f.setListener(this.animator, _.shengli, this, null, this.ontoshengliCallback), f.setListener(this.animator, _.siwang, this, null, this.onDieCallback), 
            f.setListener(this.animator, _.jian_pao, this, null, this.onJianPaoCallback);
        }
        onDisable() {
            super.onDestroy();
        }
        ontaijiaoCallback() {
            this.owner.event(v.EVENT_RUN), this.character.isAI ? this.play(_.yunsu_qiehuan_jiasu) : this.play(_.yidong);
        }
        ontojiasuCallback() {
            this.play(_.jiasu), this.character.isAI || this.owner.event(v.EVENT_JIASU);
        }
        ontoyidongCallback() {
            this.play(_.yidong);
        }
        ontozuopianCallback() {
            this.play(_.baochi_zuopian);
        }
        ontoyuopianCallback() {
            this.play(_.baochi_youpian);
        }
        ontoRunCallback() {
            this.owner.event(v.EVENT_RESTRUN);
        }
        ontoHuiLaiCallback() {
            this.owner.event(v.EVENT_HUILAI);
        }
        ontoAtkCallback() {
            this.owner.event(v.EVENT_ATK);
        }
        ontoAtkedCallback() {
            this.owner.event(v.EVENT_ATKED);
        }
        ontoKaiqiangCallback() {
            this.owner.event(v.EVENT_RESTRUN), this.owner.event(v.EVENT_GUN_FIRE);
        }
        ontoshengliCallback() {
            this.play(_.lianxu_shengli);
        }
        onDieCallback() {
            this.owner.event(v.EVENT_DIE);
        }
        onJianPaoCallback() {
            this.play(_.kang_pao);
        }
        onDestroy() {
            this.animator = null, this.character = null, this.curClipName = null;
        }
        play(t) {
            if (this.animator && t && this.curClipName != t && this.character) {
                if (d.data.gameFinish) {
                    if (t != _.shengli && t != _.lianxu_shengli) return;
                } else if ((this.character.isPlayAtkAni || this.character.isPlayAtkedAni) && t != _.siwang) return;
                this.animator.play(t, 0, 0), this.curClipName = t, this.animator.speed = 1;
            }
        }
    }
    _.idle = "daiji", _.taijiao = "taijiao", _.yidong = "yidong", _.yunsu_qiehuan_jiasu = "yunsu_qiehuan_jiasu", 
    _.jiasu = "jiasu", _.jiasu_qiehuan_yunshu = "jiasu_qiehuan_yunshu", _.zuo_pian = "zuo_pian", 
    _.baochi_zuopian = "baochi_zuopian", _.hui_lai_zuo = "hui_lai_zuo", _.you_pian = "you_pian", 
    _.baochi_youpian = "baochi_youpian", _.hui_lai_you = "hui_lai_you", _.titui_zuo = "titui_zuo", 
    _.titui_you = "titui_you", _.shouji_zuo = "shouji_zuo", _.shouji_you = "shouji_you", 
    _.siwang = "siwang", _.shengli = "shengli", _.lianxu_shengli = "lianxu_shengli", 
    _.huiji_you = "huiji_you", _.huiji_zuo = "huiji_zuo", _.qi_fei = "qi_fei", _.jian_pao = "jian_pao", 
    _.kang_pao = "kang_pao", _.kai_pao = "kai_pao", _.luo_di = "luo_di", _.huitou_kan = "huitou_kan", 
    _.youbian_kaiqiang = "youbian_kaiqiang", _.zuobian_kaiqiang = "zuobian_kaiqiang";
    class L extends Laya.Script3D {
        onStart() {
        }
    }
    class S {}
    S.Sound_Click = "sound/buttonClick.wav", S.Sprite3d_Gold = "gold", S.Sprite3d_Player = "player", 
    S.Sprite3d_Role = "role", S.Sprite3d_Ai = "ai", S.Sprite3d_Treasureboxpos = "treasureboxpos", 
    S.Sprite3d_Treasurebox = "chest", S.Sprite3d_Bulletbox = "rocketbullet", S.Sprite3d_rocket = "rocket", 
    S.Sprite3d_Gun = "gun", S.Sprite3d_rocket_diving_tower = "rocket_diving_tower", 
    S.Sprite3d_diving_tower = "diving_tower", S.Sprite3d_weapon_1 = "weapon_1", S.Sprite3d_weapon_2 = "weapon_2", 
    S.Sprite3d_weapon_3 = "weapon_3", S.Sprite3d_weapon_4 = "weapon_4", S.Sprite3d_weapon_5 = "weapon_5", 
    S.Sprite3d_weapon_6 = "weapon_6", S.Sprite3d_road_1 = "road_1", S.Sprite3d_road_2 = "road_2", 
    S.Sprite3d_road_3 = "road_3", S.Sprite3d_road_finish = "road_finish", S.Sprite3d_animal_1 = "animal_1", 
    S.Sprite3d_animal_3 = "animal_3", S.Sprite3d_animal_4 = "animal_4", S.Sprite3d_animal_5 = "animal_5", 
    S.Sprite3d_animal_2 = "animal_3", S.Sprite3d_hinder_box = "hinder_box", S.Sprite3d_hinder_car = "hinder_car", 
    S.Sprite3d_hinder_grass = "hinder_grass", S.Sprite3d_hinder_lajitong = "hinder_lajitong", 
    S.Sprite3d_hinder_langan = "hinder_langan", S.Sprite3d_hinder_xiangzi = "hinder_xiangzi", 
    S.Sprite3d_hinder_yizi = "hinder_yizi", S.MaterialPath = "3dres/Conventional/Assets/Scenes/Materials/", 
    S.Mat_Role = [ "Mat_role_01", "Mat_role_02", "Mat_role_03", "Mat_role_04", "Mat_role_05", "Mat_role_06" ];
    var A = zs.laya.Resource, E = zs.laya.ObjectPool;
    class C {
        constructor() {
            this.effectList = [], this.spriteEffectList = [];
        }
        static Instance() {
            return null == this.instance && (this.instance = new C()), this.instance;
        }
        init(t) {
            this.parent = t;
        }
        createSpriteEffect(t, e = !0) {
            let a = A.LoadSprite3d(t), i = E.GetSprite3d(a);
            return i.name = t, e && this.parent && this.parent.addChild(i), i.active = !0, -1 == this.spriteEffectList.indexOf(i) && (this.spriteEffectList[this.spriteEffectList.length] = i), 
            i;
        }
        removeSpriteEffect(t, e = !0) {
            let a = this.spriteEffectList.indexOf(t);
            -1 != a && this.spriteEffectList.splice(a, 1), e ? (t.active = !1, E.RecoverSprite3d(t)) : (t.removeSelf(), 
            t.destroy(!0));
        }
        addEffect(t) {
            if (!t) return;
            -1 == this.effectList.indexOf(t) && (this.effectList[this.effectList.length] = t);
        }
        removeEffect(t) {
            let e = this.effectList.indexOf(t);
            -1 != e && this.effectList.splice(e, 1);
            let a = t.sprite3d;
            a.removeSelf(), a.destroy(!0), t.destroy();
        }
        onDestroy() {
            if (this.effectList.length > 0) {
                for (let t = this.effectList.length - 1; t >= 0; t--) {
                    const t = this.effectList.pop();
                    let e = t.sprite3d;
                    e.active = !1, e.removeSelf(), e.destroy(!0), t.destroy();
                }
                this.effectList = [];
            }
            if (this.spriteEffectList.length > 0) {
                for (let t = this.spriteEffectList.length - 1; t >= 0; t--) {
                    const t = this.spriteEffectList.pop();
                    E.RecoverSprite3d(t);
                }
                this.spriteEffectList = [];
            }
        }
    }
    C.instance = null;
    class v extends Laya.Script3D {
        constructor() {
            super(...arguments), this.name = 0, this.isPause = !0, this.isAI = !0, this.position = new Laya.Vector3(), 
            this.hp = 2, this.moveSpeed = 4, this.movevelocity = new Laya.Vector3(), this.dir = new Laya.Vector3(), 
            this.speedUpTime = 0, this.fireTimer = 0, this.gunTimer = 0, this.curMotoSpeed = 0, 
            this.curAtkedTarget = null, this.curAtkTarget = null, this.atkedMoveTime = 0, this.atkedMoveDir = 0, 
            this.atkedMoveDist = 0, this.weaponNumber = 0, this.hasGun = !1, this.isPlayAtkAni = !1, 
            this.isPlayAtkedAni = !1, this.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, 
            this.atkSlowTime = 0, this.motoNumber = 1, this.motoRoleNumber = 1, this.curRank = 0, 
            this.isFly = !1, this.moveDir = 0, this.isJiaSuCallBack = !1, this.atkCollisionBoxs = [], 
            this.canCollisionCheck = !1;
        }
        onAwake() {
            this.defaultSkin(), this.sprite3d = this.owner, this.moto3d = this.sprite3d.getChildByName("MoTuo_Wang"), 
            this.mtransform = this.sprite3d.transform, this.isPlayAtkAni = !1, this.isPlayAtkedAni = !1, 
            this.weapon3d = this.moto3d.getChildByName("Dummy001").getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck").getChildByName("Bip001 R Clavicle").getChildByName("Bip001 R UpperArm").getChildByName("Bip001 R Forearm").getChildByName("Bip001 R Hand").getChildByName("Bone004"), 
            c.activeAllChild(this.weapon3d, !1), this.gun3d = this.moto3d.getChildByName("Dummy001").getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck").getChildByName("Bip001 R Clavicle").getChildByName("Bip001 R UpperArm").getChildByName("Bip001 R Forearm").getChildByName("Bip001 R Hand").getChildByName("Bone006").getChildByName("Mod_gun_01"), 
            this.gun3d.active = !1, this.gun3dEffectPos = this.gun3d.getChildAt(0), this.gun3dEffect = null, 
            this.rocket3d = this.moto3d.getChildByName("Bone005").getChildByName("Mod_rocket_01"), 
            this.rocket3d.active = !1, this.bike3d = this.moto3d.getChildByName("Dummy001").getChildByName("Bone001"), 
            this.role3d = this.moto3d.getChildByName("role_1"), this.curRank = 0, this.rank3d = this.moto3d.getChildByName("rank"), 
            this.emoji3d = this.moto3d.getChildByName("emoji"), this.initMoto();
        }
        initMoto() {
            c.activeAllChild(this.rank3d, !1), c.activeAllChild(this.emoji3d, !1), this.initMotoSkin(), 
            this.initRoleSkin(), this.switchWeapon();
        }
        setRoleInfo() {}
        defaultSkin() {
            this.weaponNumber = c.random(0, 7), this.motoNumber = c.random(1, 7), this.motoRoleNumber = c.random(1, 7);
        }
        setScene3d(t) {
            this.scene3d = t;
        }
        onStart() {
            this.reset(), this.animatorController = this.owner.getComponent(_);
        }
        updateMotoRank() {}
        updateMotoEmoji(t) {
            if (c.activeAllChild(this.emoji3d, !1), this.emoji3d.transform.localScale = new Laya.Vector3(1, 1, 1), 
            t) {
                let t = 1 == c.random(1, 3) ? "cry" : "angry";
                this.emoji3d.getChildByName(t).active = !0;
            } else {
                let t = 1 == c.random(1, 3) ? "smile" : "taunt";
                this.emoji3d.getChildByName(t).active = !0;
            }
            Laya.Tween.to(this.emoji3d.transform, {
                localScaleX: 0,
                localScaleY: 0,
                localScaleZ: 0
            }, 200, null, null, 500);
        }
        initMotoSkin() {
            c.activeAllChild(this.bike3d, !1), this.bike3d.getChildByName("Mod_moto_0" + this.motoNumber).active = !0, 
            this.bike3d.getChildByName("MoTuo0" + this.motoNumber + "_Hou").active = !0, this.bike3d.getChildByName("MoTuo0" + this.motoNumber + "_Qian").active = !0;
            for (let t = 1; t < 7; t++) {
                this.moto3d.getChildByName("YinYing0" + t).active = !1;
            }
            this.yinying3d = this.moto3d.getChildByName("YinYing0" + this.motoNumber), this.yinying3d.active = !0, 
            this.fire3d = this.bike3d.getChildByName("Mod_moto_0" + this.motoNumber).getChildByName("speedup"), 
            this.fire3d.active = !1, this.trailEf = this.sprite3d.getChildByName("ef_MT_shift"), 
            this.removeTrailEf();
        }
        initRoleSkin() {
            let t = S.Mat_Role[this.motoRoleNumber - 1];
            this.changMat(t, this.role3d.skinnedMeshRenderer);
        }
        changMat(t, e) {
            let a = S.MaterialPath + t + ".lmat";
            c.changMat(a, e);
        }
        switchWeapon() {
            c.activeAllChild(this.weapon3d, !1), 
            this.weaponNumber > 0 && (this.weapon3d.getChildByName("Mod_weapon_" + this.weaponNumber).active = !0), 
            this.hasGun && (this.gun3d.active = !0);
        }
        enableAtkCollisionBox(t) {
            this.canCollisionCheck = t, !this.isAI && t && this.hasGun && this.gun3dEffectPos && this.addGunEf();
            for (let e = 0; e < this.atkCollisionBoxs.length; e++) {
                let a = this.atkCollisionBoxs[e].getComponent(Laya.PhysicsCollider);
                a && (a.enable = t);
            }
        }
        dieEventCallback() {}
        addGunEf() {
            this.gun3dEffect = this.sprite3d.getChildByName("ef_MT_kaiqiang"), null == this.gun3dEffect && (this.removeGunEf(), 
            this.gun3dEffect = C.Instance().createSpriteEffect("ef_MT_kaiqiang", !1), this.sprite3d.addChild(this.gun3dEffect)), 
            this.gun3dEffect.transform.position = this.gun3dEffectPos.transform.position.clone(), 
            this.gun3dEffect.active = !0;
        }
        removeGunEf() {
            this.gun3dEffect && (this.gun3dEffect.active = !1, C.Instance().removeSpriteEffect(this.gun3dEffect, !0), 
            this.gun3dEffect = null);
        }
        charactercollisionGroup(t, e, a = !1) {
            this.atkCollisionBoxs = [], this.canCollisionCheck = !1;
            let i = t.numChildren;
            for (let s = 0; s < i; s++) {
                let i = t.getChildAt(s);
                if (i) {
                    let t = i.getComponent(Laya.PhysicsCollider);
                    if (t && "atkbox" == i.name) {
                        t.collisionGroup = e, t.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ e, 
                        t.enable = a, this.atkCollisionBoxs.push(i);
                        let s = i.getComponent(L);
                        s && s.destroy(), (s = i.addComponent(L)).character = this;
                    } else {
                        i.numChildren > 0 && this.charactercollisionGroup(i, e);
                    }
                }
            }
        }
        addTrailEf() {
            this.trailEf = this.sprite3d.getChildByName("ef_MT_shift"), null == this.trailEf && (this.removeTrailEf(), 
            this.trailEf = C.Instance().createSpriteEffect("ef_MT_shift", !1), this.sprite3d.addChild(this.trailEf), 
            this.trailEf.transform.localPosition = new Laya.Vector3(0, .1, -.5)), this.trailEf.active = !0;
        }
        removeTrailEf() {
            if (this.trailEf) {
                let t = this.trailEf.transform.position.clone();
                this.scene3d.addChild(this.trailEf), this.trailEf.transform.position = t, this.trailEf = null;
            }
        }
        playCollisionEffect(t) {
            let e = this.sprite3d.getChildByName("ef_MT_coliidefire");
            null != e && C.Instance().removeSpriteEffect(e), e = C.Instance().createSpriteEffect("ef_MT_coliidefire", !1), 
            this.sprite3d.addChild(e), e.transform.position = t, Laya.Tween.to(this.mtransform, {}, 500, null, Laya.Handler.create(this, this.removeEffect, [ e ]));
        }
        removeEffect(t) {
            C.Instance().removeSpriteEffect(t);
        }
        playAtkedEffect(t) {
            let e = this.sprite3d.getChildByName("ef_MT_atk_fier");
            null != e && C.Instance().removeSpriteEffect(e), e = C.Instance().createSpriteEffect("ef_MT_atk_fier", !1), 
            this.sprite3d.addChild(e), e.transform.position = t, Laya.Tween.to(this.mtransform, {}, 500, null, Laya.Handler.create(this, this.removeEffect, [ e ]));
        }
        playCarBombEffect(t) {
            let e = this.sprite3d.getChildByName("ef_MT_carboom");
            null != e && C.Instance().removeSpriteEffect(e), (e = C.Instance().createSpriteEffect("ef_MT_carboom", !0)).transform.position = t, 
            Laya.Tween.to(this.mtransform, {}, 3e3, null, Laya.Handler.create(this, this.removeEffect, [ e ]));
        }
        playAtkEffect(t) {
            let e = t ? "ef_MT_atk_smear_L" : "ef_MT_atk_smear_R", a = this.sprite3d.getChildByName(e);
            null != a && C.Instance().removeSpriteEffect(a), a = C.Instance().createSpriteEffect(e, !1), 
            this.sprite3d.addChild(a), a.transform.localPosition = new Laya.Vector3(), Laya.Tween.to(this.mtransform, {}, 1e3, null, Laya.Handler.create(this, this.removeEffect, [ a ]));
        }
        playSpeedUpEffect() {}
        playDieEffect() {}
        onPlayAtkedAnimator() {
            1 == this.atkedMoveDir ? this.animatorController && this.animatorController.play(_.shouji_zuo) : -1 == this.atkedMoveDir && this.animatorController && this.animatorController.play(_.shouji_you), 
            this.isPlayAtkedAni = !0;
        }
        onPlayAtkAnimator() {

            if(this.curAtkedTarget){
                this.weapon3d.active = !0, 
                this.mtransform.position.x > this.curAtkedTarget.mtransform.position.x ? this.weaponNumber > 0 ? (
                    this.animatorController && this.animatorController.play(_.huiji_you), 
                    this.playAtkEffect(!1)
                ) : 
                this.animatorController && this.animatorController.play(_.titui_you) : this.weaponNumber > 0 ? (
                    this.animatorController && this.animatorController.play(_.huiji_zuo), 
                this.playAtkEffect(true)) : this.animatorController && this.animatorController.play(_.titui_zuo), 
                this.isPlayAtkAni = !0
            }


        }
        onPlayIdleAnimator() {
            this.animatorController && this.animatorController.play(_.idle);
        }
        onPlayLeftMoveAnimator() {
            this.isAI || this.addTrailEf(), this.animatorController && this.animatorController.play(_.zuo_pian);
        }
        onPlayRightMoveAnimator() {
            this.isAI || this.addTrailEf(), this.animatorController && this.animatorController.play(_.you_pian);
        }
        onPlayLeftUpAnimator() {
            this.animatorController && this.animatorController.play(_.hui_lai_zuo);
        }
        onPlayRightUpAnimator() {
            this.animatorController && this.animatorController.play(_.hui_lai_you);
        }
        onPlayDieAnimator() {
            this.yinying3d.active = !1, this.animatorController && this.animatorController.play(_.siwang), 
            this.playerDieHandler();
        }
        playerDieHandler() {}
        onPlaytRestUpAnimator() {}
        onPlaytUpAnimator() {
            this.removeTrailEf(), this.isAI || this.dir ? this.animatorController && this.animatorController.play(_.jiasu) : 10 == c.random(1, 20) ? this.animatorController && this.animatorController.play(_.huitou_kan) : this.animatorController && this.animatorController.play(_.jiasu_qiehuan_yunshu);
        }
        onPlayAtkCallBack() {
            this.isPlayAtkAni = !1, this.isPlayAtkedAni = !1, this.moveDir = 0, this.onPlaytUpAnimator(), 
            this.enableAtkCollisionBox(!1);
        }
        onPlayAtkedCallBack() {
            this.isPlayAtkAni = !1, this.isPlayAtkedAni = !1, this.onPlaytUpAnimator();
        }
        onPlayHuiLaiCallBack() {
            this.onPlaytUpAnimator();
        }
        onEnable() {
            this.initEvent();
        }
        onDisable() {
            this.removeEvent();
        }
        initEvent() {
            this.owner.on(v.EVENT_ATK, this, this.onPlayAtkCallBack), this.owner.on(v.EVENT_ATKED, this, this.onPlayAtkedCallBack), 
            this.owner.on(v.EVENT_DIE, this, this.onDie), this.owner.on(v.EVENT_RUN, this, this.doRun), 
            this.owner.on(v.EVENT_HUILAI, this, this.onPlayHuiLaiCallBack), this.owner.on(v.EVENT_RESTRUN, this, this.onPlaytUpAnimator), 
            Laya.stage.on(v.EVENT_PAUSE, this, this.onPause), Laya.stage.on(v.EVENT_RESUME, this, this.onResume), 
            Laya.stage.on(v.EVENT_READYGO, this, this.doReadyGo);
        }
        removeEvent() {
            this.owner.off(v.EVENT_ATK, this, this.onPlayAtkCallBack), this.owner.off(v.EVENT_ATKED, this, this.onPlayAtkedCallBack), 
            this.owner.off(v.EVENT_DIE, this, this.onDie), this.owner.off(v.EVENT_RUN, this, this.doRun), 
            this.owner.off(v.EVENT_RESTRUN, this, this.onPlaytUpAnimator), Laya.stage.off(v.EVENT_PAUSE, this, this.onPause), 
            Laya.stage.off(v.EVENT_RESUME, this, this.onResume), this.owner.off(v.EVENT_HUILAI, this, this.onPlayHuiLaiCallBack), 
            Laya.stage.off(v.EVENT_READYGO, this, this.doReadyGo);
        }
        initPlayerBean(t) {
            this.playerBean = t;
        }
        initAiBean(t) {
            this.aiBean = t;
        }
        initBaseData() {}
        reset() {
            this.initBaseData();
        }
        isLife() {
            return this.hp > 0 && !this.isPause;
        }
        setDie() {
            this.hp = 0, this.isPause = !0;
        }
        moveX(t) {
            if (0 == t.x && 0 == t.z || t.x == this.movevelocity.x && t.z == this.movevelocity.z) return;
            c.normalizeSelf(t), this.dir.x = t.x, this.dir.z = t.z;
            let e = this.moveSpeed * Laya.timer.delta * .001;
            this.movevelocity.x = -Math.ceil(t.x) * e;
        }
        setPosition(t) {
            t && (this.mtransform.position = t);
        }
        onAtk(t, e = !1) {}
        onUpdate() {
            if (!this.isLife()) return;
            if (Laya.timer.delta > 100) return;
            if (this.fireTimer > 0 && (this.fireTimer -= Laya.timer.delta / Laya.timer.scale), 
            this.gunTimer > 0 && (this.gunTimer -= Laya.timer.delta / Laya.timer.scale), !this.movevelocity || 0 == this.movevelocity.z) return;
            let t = this.mtransform.position.clone(), e = this.movevelocity.clone();
            t.z += e.z, t.y += e.y, t.x += e.x, t.y = Math.max(0, t.y), t.x = Math.max(-4.2, Math.min(4.2, t.x)), 
            this.mtransform.position = t, d.data.gameFinish || this.updateMotoRank();
        }
        canAtk() {
            return this.fireTimer <= 0;
        }
        standby() {
            this.onPlayIdleAnimator();
        }
        onDamage(t) {
            this.hp > 0 && (this.hp -= 1, this.isAI ? console.log("ai被打") : console.log("主角被打"), 
            this.hp <= 0 ? (this.yinying3d.active = !1, this.isPlayAtkAni = !1, this.isPlayAtkedAni = !1, 
            c.activeAllChild(this.emoji3d, !1), c.activeAllChild(this.rank3d, !1), this.animatorController && this.animatorController.play(_.siwang), 
            this.setDie(), this.playerDieHandler(), this.isAI ? console.log("ai被撞翻了") : console.log("主角被撞翻了")) : (this.curAtkTarget && this.isAI && (this.atkedMoveTime = c.random(200, 250), 
            this.atkedMoveDist = c.random(10 * l.gameSetting.commoncfg.atkedMinDist + 5, 10 * l.gameSetting.commoncfg.atkedMaxDist + 5) / 10 - Math.abs(this.curAtkTarget.transform.position.x - this.mtransform.position.x), 
            this.atkedMoveDist = Math.max(.5, this.atkedMoveDist)), this.atkedMoveDir = t, this.onPlayAtkedAnimator()));
        }
        atkedHitTarget(t) {
            if (t) {
                this.curAtkTarget = t;
                let e = this.mtransform.position.x > t.transform.position.x ? 1 : -1;
                this.onDamage(e);
            }
        }
        onDie() {
            this.fire3d.active = !1, this.isAI ? this.sprite3d.active = !1 : Laya.stage.event(t.Stage_Fail);
        }
        doReadyGo() {
            console.log("抬脚"), this.animatorController && this.animatorController.play(_.taijiao);
        }
        doRun() {
            console.log("开始游戏"), Laya.stage.event(v.EVENT_RESUME);
        }
        onResume() {
            this.isPause = !1;
        }
        onPause() {
            this.isPause = !0;
        }
        boxFlyEffect(t) {
            let e = c.vectorDirection(t.transform.position, this.mtransform.position);
            t.transform.position.z < this.mtransform.position.z && (e = c.vectorDirection(this.mtransform.position, t.transform.position));
            let a = new Laya.Vector3(), i = new Laya.Vector3(), s = c.random(.3 * this.curMotoSpeed, this.curMotoSpeed);
            s = Math.max(5, s), Laya.Vector3.scale(e, s, a), Laya.Vector3.scale(e, .4 * s, i);
            let o = Laya.Vector3.scalarLength(a) * c.random(3, 7) * .1;
            o = Math.max(1, Math.min(5, o)), Laya.Vector3.add(t.transform.localPosition.clone(), a, a), 
            Laya.Vector3.add(t.transform.localPosition.clone(), i, i);
            let n = i.clone();
            n.y = o;
            let r = a.clone();
            r.y = t.transform.localPosition.y;
            let l = (2 * c.random(0, 2) - 1) * c.random(30, 90), h = (2 * c.random(0, 2) - 1) * c.random(30, 90), d = (2 * c.random(0, 2) - 1) * c.random(30, 90);
            Laya.Tween.to(t.transform, {
                localPositionX: n.x,
                localPositionY: n.y,
                localPositionZ: n.z,
                localRotationEulerX: l,
                localRotationEulerZ: h,
                localRotationEulerY: d
            }, 500, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t.transform, {
                    localPositionX: r.x,
                    localPositionY: 0,
                    localPositionZ: r.z,
                    localRotationEulerX: 0,
                    localRotationEulerZ: 0,
                    localRotationEulerY: 2 * d
                }, 500, null, Laya.Handler.create(this, () => {}));
            }));
        }
    }
    v.EVENT_READYGO = "readygo", v.EVENT_ATK = "atk", v.EVENT_DIE = "die", v.EVENT_ROCKET_BOMB = "rocketbomb", 
    v.EVENT_FIRE_ROCKET = "firerocket", v.EVENT_ATKED = "atked", v.EVENT_RUN = "run", 
    v.EVENT_JIASU = "jiasu", v.EVENT_RESTRUN = "resetrun", v.EVENT_HUILAI = "huilai", 
    v.EVENT_GUN_FIRE = "gunfire", v.EVENT_PAUSE = "pause", v.EVENT_RESUME = "resume";
    class I extends Laya.AnimatorStateScript {
        constructor() {
            super(), this.stateName = "", this.animator = null, this.listener = null, this.onEnter = null, 
            this.onExit = null;
        }
        static setListener(t, e, a, i, s) {
            var o = t.getControllerLayer(0).getAnimatorState(e);
            if (null != o) {
                var n = o.getScript(I);
                return null == n && (n = o.addScript(I)), n.stateName = e, n.animator = t, n.listener = a, 
                n.onEnter = i, n.onExit = s, 0;
            }
        }
        static remove(t, e) {}
        onStateEnter() {
            this.listener && this.onEnter && this.onEnter.call(this.listener, this.stateName, this.animator);
        }
        onStateExit() {
            this.listener && this.onExit && this.onExit.call(this.listener, this.stateName, this.animator);
        }
    }
    class T extends Laya.Script3D {
        constructor() {
            super(), this.camera = null, this.cameraApe = null, this.cameraTransform = null, 
            this.defaultCamPosition = new Laya.Vector3(), this.defaultCamRotation = new Laya.Vector3(), 
            this.curCamPosition = new Laya.Vector3(), this.curCamRotation = new Laya.Vector3(), 
            this.offsetRotation = new Laya.Vector3(), this.offsetPosition = new Laya.Vector3(), 
            this.animator = null, this.speedEffect = null, this.rocketPos = null;
        }
        initCameraByPlayer(t) {
            this.target = t, t && (this.cameraApe.transform.position = this.defaultCamPosition.clone(), 
            this.defaultCamPosition.cloneTo(this.curCamPosition), Laya.Vector3.subtract(this.curCamPosition, t.mtransform.position, this.offsetPosition), 
            this.cameraApe.transform.rotationEuler = this.defaultCamRotation.clone(), this.defaultCamRotation.cloneTo(this.curCamRotation), 
            Laya.Vector3.subtract(this.curCamRotation, t.mtransform.rotationEuler, this.offsetRotation));
        }
        playStartCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_star, 0, 0), this.curClipName = T.cam_star;
        }
        playEndCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_end, 0, 0), this.curClipName = T.cam_end;
        }
        playFailCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_fail, 0, 0), this.curClipName = T.cam_fail;
        }
        playGameCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_game, 0, 0), this.curClipName = T.cam_game;
        }
        playShakeCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_shake, 0, 0), this.curClipName = T.cam_shake;
        }
        playHomeCamerAni() {
            this.animator.speed = 1, this.animator.play(T.cam_home, 0, 0), this.curClipName = T.cam_home;
        }
        playInCamerAni() {
            console.log("=cam_in"), this.curClipName != T.cam_end && this.curClipName != T.cam_fail && this.curClipName != T.cam_in && this.curClipName != T.cam_speedup_in && (this.animator.speed = 1, 
            this.animator.crossFade(T.cam_in, .5), this.curClipName = T.cam_in);
        }
        playOutCamerAni() {
            console.log("=cam_out"), this.curClipName != T.cam_end && this.curClipName != T.cam_fail && (this.animator.speed = 1, 
            this.animator.crossFade(T.cam_out, .5), this.curClipName = T.cam_out);
        }
        playSpeedUpOutCamerAni() {
            this.curClipName != T.cam_end && this.curClipName != T.cam_fail && (this.animator.speed = 1, 
            this.animator.crossFade(T.cam_speedup_out, .5), this.curClipName = T.cam_speedup_out);
        }
        playSpeedUpInCamerAni() {
            this.curClipName != T.cam_end && this.curClipName != T.cam_fail && this.curClipName != T.cam_speedup_in && (this.animator.speed = 1, 
            this.animator.crossFade(T.cam_speedup_in, .5), this.curClipName = T.cam_speedup_in);
        }
        stopCamerAni() {
            this.animator.speed = 0;
        }
        gameCamerAni() {
            this.playGameCamerAni();
        }
        updateCameraByPlayer(t) {
            if (this.target = t, t) {
                new Laya.Vector3();
                Laya.Vector3.add(this.offsetPosition, t.mtransform.position, this.curCamPosition), 
                this.cameraApe.transform.position = this.curCamPosition;
            }
        }
        world2ScreenPos(t, e) {
            let a = new Laya.Vector4();
            this.camera.viewport.project(t, this.camera.projectionViewMatrix, a), e.x = a.x / Laya.stage.clientScaleX, 
            e.y = a.y / Laya.stage.clientScaleY;
        }
        camera2PlayerDir() {
            return this.target ? c.vectorDirection(this.camera.transform.position, this.target.mtransform.position) : c.FORWARD;
        }
        getTreasureboxScreenPos() {
            let t = new Laya.Vector2();
            return this.world2ScreenPos(this.rocketPos.transform.position.clone(), t), t;
        }
        playSpeedEffect(t) {
            this.speedEffect.active != t && (this.speedEffect.active = t);
        }
        onAwake() {
            this.cameraApe = this.owner, this.camera = this.cameraApe.getChildByName("Main Camera"), 
            this.animator = this.camera.getComponent(Laya.Animator), this.cameraTransform = this.owner.transform, 
            this.cameraApe.transform.position.cloneTo(this.defaultCamPosition), this.defaultCamPosition.cloneTo(this.curCamPosition), 
            this.cameraApe.transform.rotationEuler.cloneTo(this.defaultCamRotation), this.defaultCamRotation.cloneTo(this.curCamRotation), 
            Laya.stage.on("CameraTarget", this, this.initCameraByPlayer), this.rocketPos = this.cameraApe.getChildByName(S.Sprite3d_Treasureboxpos), 
            this.speedEffect = this.cameraApe.getChildByName("ef_MT_speed_line"), this.speedEffect.active = !1, 
            this.curClipName = null;
        }
        onEnable() {
            I.setListener(this.animator, T.cam_shake, this, null, this.gameCamerAni), I.setListener(this.animator, T.cam_end, this, null, this.stopCamerAni), 
            I.setListener(this.animator, T.cam_game, this, null, this.stopCamerAni), I.setListener(this.animator, T.cam_home, this, null, this.stopCamerAni), 
            I.setListener(this.animator, T.cam_star, this, null, this.gameCamerAni);
        }
        onDisable() {}
        onDestroy() {
            this.camera = null, this.cameraApe = null;
        }
        onLateUpdate() {
            if (!this.target) return;
            new Laya.Vector3();
            Laya.Vector3.add(this.offsetPosition, this.target.mtransform.position, this.curCamPosition), 
            this.cameraApe.transform.localPositionY = this.curCamPosition.y, this.cameraApe.transform.localPositionZ = this.curCamPosition.z;
        }
        moveX(t) {
            if (!t || null == t || 1 == t.y) return void console.log("直行动作1");
            if (this.target) {
                if (!this.target.isJiaSuCallBack) return;
                if (this.target.isFly) return;
            }
            let e = this.cameraApe.transform.localPositionX - t.x / 1.44444;
            e = Math.max(-2.9, Math.min(2.9, e)), this.cameraApe.transform.localPositionX = e;
        }
    }
    T.cam_game = "cam_game", T.cam_home = "cam_home", T.cam_star = "cam_star", T.cam_end = "cam_end", 
    T.cam_shake = "cam_shake", T.cam_fail = "cam_fail", T.cam_in = "cam_in", T.cam_out = "cam_out", 
    T.cam_speedup_in = "cam_speedup_in", T.cam_speedup_out = "cam_speedup_out";
    class k extends Laya.Script {
        constructor() {
            super(...arguments), this.dir = new Laya.Vector3(), this.isMouseDown = !1, this.curAtkTarget = null, 
            this.touchId = -1, this.lastMouseX = 0, this.lastMouseY = 0, this.movex = 0;
        }
        onStart() {
            this.width = Laya.stage.width * Laya.stage.scaleX, this.character = this.owner.getComponent(v);
        }
        onEnable() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), 
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTouchEnd), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onTouchEnd);
        }
        onDisable() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), 
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onTouchEnd), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onTouchEnd);
        }
        onTouchStart(t) {
            this.isMouseDown || (this.isMouseDown = !0, this.character && this.character.isLife() && !this.character.isPlayAtkAni && (this.lastMouseX = Laya.stage.mouseX, 
            this.lastMouseY = Laya.stage.mouseY, this.dir.setValue(0, 0, 1), this.character && this.character.moveX(this.dir), 
            $.cameraController.moveX(this.dir)));
        }
        onTouchMove(t) {
            if (!this.character || !this.character.isLife() || d.data.gameFinish) return;
            if (0 == this.lastMouseX && 0 == this.lastMouseY) return this.lastMouseX = Laya.stage.mouseX, 
            this.lastMouseY = Laya.stage.mouseY, this.dir.setValue(0, 0, 1), this.character && this.character.moveX(this.dir), 
            void $.cameraController.moveX(this.dir);
            let e = Laya.stage.mouseX - this.lastMouseX;
            if (0 == this.movex) this.movex = e; else {
                if (e > 0 && e < 10 && this.movex < 0) return void console.log("反向1");
                if (e < 0 && e > -10 && this.movex > 0) return void console.log("反向2");
                this.movex = e;
            }
            let a = 13 * e / this.width;
            this.width;
            this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.character.isPlayAtkAni || (this.dir.setValue(a, 0, 0), 
            this.character && this.character.moveX(this.dir), $.cameraController.moveX(this.dir));
        }
        onTouchEnd(t) {
            this.isMouseDown && (this.isMouseDown = !1, this.character && this.character.isLife() && !d.data.gameFinish && !this.character.isPlayAtkAni && (this.touchId = -1, 
            this.dir.setValue(0, 1, 0), this.character.moveX(this.dir), $.cameraController.moveX(this.dir)));
        }
        onUpdate() {
            if (this.character && this.character.isLife() && !d.data.gameFinish) {
                let t = null, e = !1;
                this.character.hasGun && (t = V.Instance().getNearEnemyOfAtkRang(this.character, !0), 
                e = !0), null == t && (e = !1, t = V.Instance().getNearEnemyOfAtkRang(this.character)), 
                null != t && t.isLife() && this.character.onAtk(t, e);
            }
        }
    }
    class M {
        constructor() {}
        clone() {
            let t = new M();
            return t.id = this.id, t.AI_attacked_count = this.AI_attacked_count, t.AI_star_speed = this.AI_star_speed, 
            t.AI_speed_min = this.AI_speed_min, t.AI_speed_max = this.AI_speed_max, t.AI_acc_speed = this.AI_acc_speed, 
            t.AI_slow_speed = this.AI_slow_speed, t.AI_max_status_time = this.AI_max_status_time, 
            t.AI_min_status_time = this.AI_min_status_time, t.AI_max_chance = this.AI_max_chance, 
            t.AI_min_chance = this.AI_min_chance, t.AI_atk_chance = this.AI_atk_chance, t.AI_hide_chance = this.AI_hide_chance, 
            t.AI_seek_chance = this.AI_seek_chance, t.AI_pursue_chance = this.AI_pursue_chance, 
            t.AI_pursue_scale = this.AI_pursue_scale, t.AI_seek_scope = this.AI_seek_scope, 
            t.AI_seek_time = this.AI_seek_time, t.AI_pursue_gap = this.AI_pursue_gap, t.AI_moderate_gap = this.AI_moderate_gap, 
            t.AI_speedup_scale = this.AI_speedup_scale, t.AI_speedup_time = this.AI_speedup_time, 
            t.AI_atk_intval_time = this.AI_atk_intval_time, t;
        }
        static createAIBean(t) {
            let e = new M();
            return e.id = t.AI_id || 1, e.AI_attacked_count = t.AI_attacked_count || 2, e.AI_star_speed = t.AI_star_speed || 5, 
            e.AI_speed_max = t.AI_speed_max || 20, e.AI_speed_min = t.AI_speed_min || 3, e.AI_acc_speed = t.AI_acc_speed || 10, 
            e.AI_slow_speed = t.AI_slow_speed || 10, e.AI_max_status_time = t.AI_max_status_time || 1e3, 
            e.AI_min_status_time = t.AI_min_status_time || 1e3, e.AI_max_chance = t.AI_max_chance || 40, 
            e.AI_min_chance = t.AI_min_chance || 30, e.AI_atk_chance = t.AI_atk_chance || 50, 
            e.AI_hide_chance = t.AI_hide_chance || 80, e.AI_seek_chance = t.AI_seek_chance || 20, 
            e.AI_pursue_chance = t.AI_pursue_chance || 50, e.AI_pursue_scale = t.AI_pursue_scale || 2, 
            e.AI_seek_scope = t.AI_seek_scope || 10, e.AI_seek_time = t.AI_seek_time || 2e3, 
            e.AI_pursue_gap = t.AI_pursue_gap || 20, e.AI_moderate_gap = t.AI_moderate_gap || 20, 
            e.AI_speedup_scale = t.AI_speedup_scale || 2, e.AI_speedup_time = t.AI_speedup_time || 1e3, 
            e.AI_atk_intval_time = t.AI_atk_intval_time || 500, e;
        }
    }
    class w {
        constructor(t, e, a, i, s, o, n, r, l, h, c) {
            this.baseSpeed = 1, this.maxSpeed = 1, this.accSpeed = 1, this.speedupScale = 1, 
            this.speedupTime = 1e3, this.collideModerate = 0, this.shotTime = 0, this.atkintervalTime = 0, 
            this.gunatkintervaTime = 0, this.id = t || 1, this.attackedCount = e || 2, this.baseSpeed = a || 5, 
            this.maxSpeed = i || 20, this.accSpeed = s || 10, this.speedupScale = o || 2, this.speedupTime = n || 1e3, 
            this.collideModerate = r || 0, this.shotTime = l || 1e4, this.atkintervalTime = h || 800, 
            this.gunatkintervaTime = c || 2500;
        }
        static create(t) {
            return new w(t.id, t.attacked_count, t.star_speed, t.speed_max, t.acc_speed, t.speedup_scale, t.speedup_time, t.collide_moderate, t.shot_time, t.atk_interval_time, t.gunatk_interval_time);
        }
    }
    var R = zs.laya.Resource, P = zs.laya.ObjectPool;
    class b {
        constructor() {
            this.bulletList = [];
        }
        static Instance() {
            return null == this.instance && (this.instance = new b()), this.instance;
        }
        init(t) {
            this.parent = t;
        }
        createBullet(t) {
            var e = R.LoadSprite3d(t);
            let a = P.GetSprite3d(e);
            return a.name = t, a.active = !0, this.parent.addChild(a), a;
        }
        addBullet(t) {
            if (!t) return;
            -1 == this.bulletList.indexOf(t) && (this.bulletList[this.bulletList.length] = t);
        }
        removeBullet(t, e = !0) {
            let a = this.bulletList.indexOf(t);
            -1 != a && this.bulletList.splice(a, 1);
            let i = t.bullet3d;
            e ? (i.active = !1, P.RecoverSprite3d(i)) : (i.removeSelf(), i.destroy(!0)), t.destroy();
        }
        onDestroy() {
            if (this.bulletList.length > 0) {
                for (let t = this.bulletList.length - 1; t >= 0; t--) {
                    const t = this.bulletList.pop();
                    let e = t.bullet3d;
                    e.active = !1, e.removeSelf(), e.destroy(!0), t.destroy();
                }
                this.bulletList = [];
            }
        }
    }
    b.instance = null;
    class x extends Laya.Script3D {
        constructor() {
            super(...arguments), this.dir = new Laya.Vector3(0, 0, 1), this.lifeDis = 0, this.speed = 0, 
            this.offsetX = 0;
        }
        onAwake() {
            this.bullet3d = this.owner;
        }
        onStart() {
            var t = this.bullet3d.getComponent(Laya.Rigidbody3D);
            t && (t.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, 
            t.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER ^ Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1), 
            this.mTransform = this.bullet3d.transform, this.mTransform.position = this.firer.mtransform.position.clone();
        }
        init(t, e, a) {
            this.firer = t, this.offsetX = a, this.dir = e.clone(), this.lifeDis = 50;
        }
        addHitEffect() {}
        removeBullet() {}
    }
    class D extends x {
        onStart() {
            super.onStart(), this.mTransform.setWorldLossyScale(new Laya.Vector3(1.5, 1.5, 1.5)), 
            this.addBulletTSmoke();
        }
        init(t, e, a) {
            super.init(t, e, a), this.lifeDis = 50, this.speed = Math.min(40, Math.max(this.firer.curMotoSpeed, 30)), 
            console.log("this.offsetX", this.offsetX);
        }
        onUpdate() {
            let e = Laya.timer.delta / Laya.timer.scale;
            if (!this.dir) return;
            let a = new Laya.Vector3();
            console.log(this.offsetX, "this.offsetX"), Laya.Vector3.add($.cameraController.rocketPos.transform.position.clone(), new Laya.Vector3(this.offsetX, 1.5, 0), a);
            let i = c.vectorDirection(this.mTransform.position.clone(), a);
            if (this.mTransform.position.y < 1 || this.mTransform.position.z < 1) {
                let t = new Laya.Vector3();
                Laya.Vector3.add(this.firer.mtransform.position.clone(), new Laya.Vector3(0, 1.8, .8), t), 
                this.mTransform.position = t;
            }
            let s = new Laya.Vector3(0, 0, 0), o = c.angleY2(i), n = new Laya.Vector3(-c.angleDirection(i, c.UP), o, 0);
            this.mTransform.rotationEuler = n;
            var r = this.speed * e * .0025;
            Laya.Vector3.scale(i, r, s), this.lifeDis -= Math.abs(Laya.Vector3.scalarLength(s)), 
            this.mTransform.translate(s, !1), this.mTransform.position.z > $.cameraController.rocketPos.transform.position.z && (Laya.SoundManager.playSound("sound/blast.mp3"), 
            this.addHitEffect(), Math.abs(this.offsetX) < 2.2 ? (Laya.stage.event(t.Handler_Treasurebox, 1), 
            this.removeBullet()) : (this.removeBullet(), console.log("脱靶"), Laya.stage.event(t.Handler_Treasurebox, 2)));
        }
        onLateUpdate() {
            this.lifeDis;
        }
        removeBullet() {
            b.Instance().removeBullet(this), Laya.stage.event(v.EVENT_ROCKET_BOMB);
        }
        addHitEffect() {
            let t = this.bullet3d.getChildByName("ef_MT_gun_boom");
            null != t && C.Instance().removeSpriteEffect(t), (t = C.Instance().createSpriteEffect("ef_MT_gun_boom", !0)).transform.position = this.bullet3d.transform.position.clone(), 
            Laya.Tween.to(this.bullet3d.transform, {}, 3e3, null, Laya.Handler.create(this, this.removeEffect, [ t ]));
        }
        removeEffect(t) {
            C.Instance().removeSpriteEffect(t);
        }
        addBulletTSmoke() {
            let t = this.bullet3d.getChildByName("ef_MT_gun_fire");
            null != t && C.Instance().removeSpriteEffect(t), t = C.Instance().createSpriteEffect("ef_MT_gun_fire", !1), 
            this.bullet3d.addChild(t), t.transform.localPosition = new Laya.Vector3();
        }
    }
    class N extends v {
        constructor() {
            super(), this.speedUp = 1, this.speedUpRate = 1, this.flyTime = 0, this.fallTime = 0, 
            this.shootTime = 0, this.curMotoFlySpeed = 0, this.flyHeight = 0, this.isShootBomb = !1, 
            this.hasRocket = !1, this.maxWaitTime = 300, this.collisionSlowTime = 0, this.isDieEventCallBack = 0;
        }
        onAwake() {
            super.onAwake();
        }
        updateMotoRank() {
            let e = V.Instance().getCurRank(this.mtransform.position.z);
            if (e != this.curRank && e > 0 && (this.curRank = e, Laya.stage.event(t.Game_Player_Rank_Update, this.curRank), 
            c.activeAllChild(this.rank3d, !1), 1 == e)) {
                let t = this.rank3d.getChildByName(this.curRank + "");
                t && (t.active = !0);
            }
        }
        onTriggerEnter(e) {
            if (this.isLife()) {
                var a = e.owner;
                if (console.log("主角碰撞物体", a.name), a && "speed_line" === a.name && (this.speedUpRate = this.playerBean.speedupScale, 
                this.speedUpTime = this.playerBean.speedupTime, this.fire3d.active = !0, $.cameraController.playSpeedEffect(!0), 
                Laya.SoundManager.playSound("sound/speedup.mp3"), $.cameraController.playSpeedUpInCamerAni()), 
                a && "gold" === a.name) {
                    zs.laya.DeviceService.VibrateShort();
                    let e = C.Instance().createSpriteEffect("ef_MT_Pickup", !0);
                    e.transform.position = a.transform.position.clone(), this.owner.timerOnce(1e3, this, this.removeEffect, [ e ]), 
                    a.active = !1, Laya.SoundManager.playSound("sound/gold.mp3"), d.data.gold += 1, 
                    Laya.stage.event(t.Game_Gold_Update);
                }
                if (a && ("hinder_box" === a.name || "hinder_grass" === a.name || "hinder_lajitong" === a.name || "hinder_langan" === a.name || "hinder_xiangzi" === a.name || "hinder_yizi" === a.name)) {
                    this.curMotoSpeed -= this.curMotoSpeed * this.playerBean.collideModerate, this.boxFlyEffect(a);
                    let t = a.getChildByName("shadow");
                    t && (t.active = !1), zs.laya.DeviceService.VibrateShort(), Laya.SoundManager.playSound("sound/Movemen.mp3");
                }
                if (a && -1 != a.name.indexOf("animal") && (this.setDie(), this.yinying3d.active = !1, 
                this.onPlayDieAnimator(), zs.laya.DeviceService.VibrateLong(), Laya.SoundManager.playSound("sound/hit.mp3")), 
                a && "hinder_car" === a.name && (this.setDie(), this.onPlayDieAnimator(), a.active = !1, 
                zs.laya.DeviceService.VibrateLong(), this.playCarBombEffect(a.transform.position.clone()), 
                Laya.SoundManager.playSound("sound/hit.mp3")), a && "diving_tower" === a.name && !this.isFly && (this.isFly = !0, 
                this.flyTime = 1e3, this.fallTime = 0, this.shootTime = 0, this.flyHeight = 0, this.isShootBomb = !1, 
                this.curMotoFlySpeed = this.curMotoSpeed, this.hasRocket = !1, this.animatorController && this.animatorController.play(_.qi_fei), 
                this.speedUpRate = this.playerBean.speedupScale, this.yinying3d.active = !1, this.fire3d.active = !0, 
                this.removeTrailEf(), $.cameraController.playSpeedEffect(!0), Laya.SoundManager.playSound("sound/speedup.mp3")), 
                a && "rocket" === a.name && this.isFly && (a.active = !1, this.hasRocket = !0, this.rocket3d.active = !0, 
                this.weapon3d.active = !1, this.animatorController && this.animatorController.play(_.jian_pao)), 
                a && -1 != a.name.indexOf(S.Sprite3d_Ai)) {
                    let t = a.getComponent(v);
                    if (!this.isLife() || !t || !t.isLife()) return;
                    if (Math.abs(a.transform.position.x - this.mtransform.position.x) < .3 && a.transform.position.z > this.mtransform.position.z && a.transform.position.z - this.mtransform.position.z < 2.5) {
                        if (a.getComponent(v)) {
                            this.collisionSlowTime = 500, this.curMotoSpeed = .5 * this.curMotoSpeed, zs.laya.DeviceService.VibrateShort();
                            let t = new Laya.Vector3();
                            Laya.Vector3.add(a.transform.position, new Laya.Vector3(0, 1, -1), t), this.playCollisionEffect(t), 
                            Laya.SoundManager.playSound("sound/motorcollision.wav");
                        }
                    }
                }
                if (this.atkBoxCheck(a), a && -1 != a.name.indexOf("weapon_")) {
                    a.active = !1;
                    let t = a.name.charAt(a.name.length - 1);
                    console.log("捡到武器编号", t), this.weaponNumber = Number(t), 
                    this.switchWeapon();
                }
                a && "gun" === a.name && (this.hasGun = !0, a.active = !1, this.switchWeapon()), 
                a && "road_finish" === a.name && (d.data.gameFinish = !0, 
                d.data.playerRank = this.curRank, this.animatorController && this.animatorController.play(_.shengli), 
                this.removeTrailEf(), this.playWinEffect(a.transform.position), Laya.stage.event(t.Stage_Finish), 
                Laya.SoundManager.playSound("sound/brake.mp3"));
            }
        }
        onTriggerStay(t) {
            if (this.isLife()) {
                var e = t.owner;
                this.atkBoxCheck(e);
            }
        }
        atkBoxCheck(t) {
            if (t && "atkbox" === t.name) {
                let e = t.getComponent(L);
                if (e && e.character && e.character.isLife() && e.character != this && e.character.isPlayAtkAni && e.character.canCollisionCheck && !this.isPlayAtkedAni && e.character.curAtkedTarget == this) {
                    this.atkedHitTarget(e.character.sprite3d), $.cameraController.playShakeCamerAni(), 
                    zs.laya.DeviceService.VibrateShort();
                    let a = new Laya.Vector3(this.mtransform.position.x - .3, t.transform.position.y, t.transform.position.z);
                    e.character.mtransform.position.x > this.mtransform.position.x && (a.x = this.mtransform.position.x + .3), 
                    this.playAtkedEffect(a), e.character.updateMotoEmoji(!1);
                }
            }
        }
        playWinEffect(t) {
            let e = [], a = new Laya.Vector3(t.x - 1, t.y, t.z);
            for (let t = 0; t < 3; t++) Laya.Tween.to(this.owner, {}, 0, null, Laya.Handler.create(this, () => {
                let i = C.Instance().createSpriteEffect("ef_MT_win");
                i.transform.position = new Laya.Vector3(a.x, a.y, a.z + 10 + 5 * t), e.push(i);
            }), 200 * t);
            let i = new Laya.Vector3(t.x + 1, t.y, t.z);
            for (let t = 0; t < 3; t++) Laya.Tween.to(this.owner, {}, 0, null, Laya.Handler.create(this, () => {
                let a = C.Instance().createSpriteEffect("ef_MT_win");
                a.transform.position = new Laya.Vector3(i.x, i.y, i.z + 15 + 5 * t), e.push(a);
            }), 200 * t);
            this.owner.timerOnce(3e3, this, this.removeWinEffect, e);
        }
        removeWinEffect(t) {
            for (let e = 0; e < t.length; e++) C.Instance().removeSpriteEffect(t[e]);
        }
        moveX(t) {
            if (this.maxWaitTime = 500, this.speedUp = 1, this.dir = t, this.isFly || d.data.gameFinish) return this.moveDir = 0, 
            void (this.dir = null);
            if (!t || null == t || 1 == t.y) return this.dir = null, zs.laya.sdk.SdkService.stopSound("sound/accelerate.mp3"), 
            zs.laya.sdk.SdkService.playSound("sound/lowspeed.mp3", !0), this.speedUp = -1, 0 == this.moveDir ? this.onPlaytUpAnimator() : this.onPlaytRestUpAnimator(), 
            this.moveDir = 0, void $.cameraController.playOutCamerAni();
            if (1 == t.z) return zs.laya.sdk.SdkService.stopSound("sound/lowspeed.mp3"), zs.laya.sdk.SdkService.playSound("sound/accelerate.mp3", !0), 
            this.isJiaSuCallBack = !1, this.animatorController && this.animatorController.play(_.yunsu_qiehuan_jiasu), 
            void $.cameraController.playInCamerAni();
            if (!this.isJiaSuCallBack) return;
            let e = this.mtransform.localPositionX - t.x;
            (e = Math.max(-4.2, Math.min(4.2, e))) <= -4.2 || e >= 4.2 ? (this.onPlaytRestUpAnimator(), 
            this.moveDir = 0) : t.x > 0 ? (0 == this.moveDir && this.onPlayRightMoveAnimator(), 
            this.moveDir, 1 == this.moveDir && this.onPlayLeftUpAnimator(), this.moveDir = -1) : t.x < 0 && (0 == this.moveDir && this.onPlayLeftMoveAnimator(), 
            this.moveDir, -1 == this.moveDir && this.onPlayRightUpAnimator(), this.moveDir = 1), 
            this.mtransform.localPositionX = e;
        }
        onPlaytRestUpAnimator() {
            this.isFly || (1 == this.moveDir ? this.onPlayLeftUpAnimator() : -1 == this.moveDir && this.onPlayRightUpAnimator(), 
            this.moveDir = 0);
        }
        onPlayHuiLaiCallBack() {
            this.isFly || (1 == this.moveDir ? this.onPlayLeftMoveAnimator() : -1 == this.moveDir ? this.onPlayRightMoveAnimator() : this.onPlaytUpAnimator());
        }
        onPlayJiaSuCallBack() {
            this.isJiaSuCallBack = !0;
        }
        rotationRole(t) {}
        onStart() {
            super.onStart(), this.rigidbody3d = this.sprite3d.getComponent(Laya.Rigidbody3D), 
            this.rigidbody3d.angularFactor = new Laya.Vector3(0, 0, 0), this.rigidbody3d.angularVelocity = new Laya.Vector3(0, 0, 0), 
            this.rigidbody3d.linearVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.collisionGroup = this.collisionGroup, 
            this.rigidbody3d.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ this.collisionGroup, 
            this.rigidbody3d.sleepLinearVelocity = 0, this.rigidbody3d.sleepAngularVelocity = 0, 
            this.rigidbody3d.wakeUp(), this.standby(), this.charactercollisionGroup(this.moto3d, this.collisionGroup);
        }
        defaultSkin() {
            this.weaponNumber = 0, this.motoNumber = c.random(1, 7), this.motoRoleNumber = c.random(1, 7);
        }
        standby() {
            super.standby(), this.movevelocity.x = 0, this.movevelocity.z = 0, this.movevelocity.y = 0;
        }
        initBaseData() {
            this.playerBean && (this.curMotoSpeed = this.playerBean.baseSpeed, this.hp = this.playerBean.attackedCount, 
            d.data.gunatkintervaTime = this.playerBean.gunatkintervaTime);
        }
        onPlayGunAtkAnimator() {
            this.weapon3d.active = !1, this.mtransform.position.x > this.curAtkedTarget.mtransform.position.x ? this.animatorController && this.animatorController.play(_.youbian_kaiqiang) : this.animatorController && this.animatorController.play(_.zuobian_kaiqiang), 
            this.isPlayAtkAni = !0;
        }
        initEvent() {
            super.initEvent(), Laya.stage.on(v.EVENT_ROCKET_BOMB, this, this.rocketBomb), Laya.stage.on(v.EVENT_FIRE_ROCKET, this, this.tapFireRocket), 
            this.owner.on(v.EVENT_GUN_FIRE, this, this.gunAtkAnimatorCallBack), this.owner.on(v.EVENT_JIASU, this, this.onPlayJiaSuCallBack);
        }
        removeEvent() {
            super.removeEvent(), Laya.stage.off(v.EVENT_ROCKET_BOMB, this, this.rocketBomb), 
            Laya.stage.off(v.EVENT_FIRE_ROCKET, this, this.tapFireRocket), this.owner.off(v.EVENT_GUN_FIRE, this, this.gunAtkAnimatorCallBack), 
            this.owner.off(v.EVENT_JIASU, this, this.onPlayJiaSuCallBack);
        }
        tapFireRocket(t) {
            this.isFly && this.flyTime <= 0 && this.shootTime > 0 && this.hasRocket && !this.isShootBomb && (this.isShootBomb = !0, 
            Laya.timer.scale = 1, t -= this.mtransform.position.x, this.createRocket(t), this.animatorController && this.animatorController.play(_.kai_pao));
        }
        rocketBomb() {
            this.shootTime = 0, this.owner.timerOnce(500, this, () => {
                this.fallTime = 1e3, this.isShootBomb = !1;
            }), Laya.stage.event(t.DisableSight), this.animatorController && this.animatorController.play(_.luo_di);
        }
        onUpdate() {
            if (this.isLife()) if (this.speedUpTime > 0 && (this.speedUpTime -= Laya.timer.delta, 
            this.speedUp = 1, this.speedUpTime <= 0 && (this.speedUpRate = 1, this.fire3d.active = !1, 
            $.cameraController.playSpeedEffect(!1), $.cameraController.playSpeedUpOutCamerAni())), 
            this.isFly && (this.movevelocity.y = 0, this.flyTime > 0 && (this.flyTime -= Laya.timer.delta, 
            this.flyHeight += Math.abs(this.curMotoSpeed * Laya.timer.delta * .001), (this.flyTime <= 0 || this.flyHeight >= 15) && (this.flyTime = 0, 
            this.hasRocket ? (this.shootTime = this.playerBean.shotTime, Laya.stage.event(t.EnableSight), 
            Laya.stage.event(t.Handler_Treasurebox, 0)) : this.fallTime = 1e3), this.movevelocity.y = this.curMotoSpeed * Laya.timer.delta * .001), 
            this.shootTime > 0 && !this.isShootBomb && (this.speedUp = 0, Laya.timer.scale = .4, 
            this.shootTime -= Laya.timer.delta / Laya.timer.scale, this.shootTime <= 0 && (this.fallTime = 1e3, 
            this.curMotoFlySpeed = this.curMotoSpeed, Laya.timer.scale = 1, Laya.stage.event(t.DisableSight), 
            Laya.stage.event(t.Handler_Treasurebox, 2), this.onPlaytUpAnimator())), this.isShootBomb && (this.speedUp = 0), 
            this.fallTime > 0 && (this.speedUp = 0, $.cameraController.playSpeedEffect(!1), 
            this.mtransform.position.y <= 0 ? (this.fallTime = 0, this.isFly = !1, this.movevelocity.y = -this.mtransform.position.y, 
            this.rocket3d.active = !1, this.weapon3d.active = !0, this.fire3d.active = !1, this.yinying3d.active = !0, 
            this.hasRocket || this.onPlaytUpAnimator(), this.speedUpRate = 1, Laya.SoundManager.playSound("sound/ground.mp3")) : this.hasRocket ? this.movevelocity.y = -this.curMotoSpeed * Laya.timer.delta * .001 * .5 : this.movevelocity.y = -this.curMotoSpeed * Laya.timer.delta * .001 * .3)), 
            this.maxWaitTime -= Laya.timer.delta, this.maxWaitTime < 0 && !this.isFly && this.onPlaytRestUpAnimator(), 
            this.atkSlowTime > 0 && (this.atkSlowTime -= Laya.timer.delta, this.atkSlowTime <= 0 && (Laya.timer.scale = 1)), 
            this.collisionSlowTime > 0) this.collisionSlowTime -= Laya.timer.delta, this.movevelocity.z = this.curMotoSpeed * Laya.timer.delta * .001; else if (d.data.gameFinish) {
                if (this.curMotoSpeed > 0) {
                    this.curMotoSpeed -= this.playerBean.accSpeed * Laya.timer.delta * .001, this.curMotoSpeed = Math.max(0, this.curMotoSpeed);
                    let t = this.curMotoSpeed * Laya.timer.delta * .001;
                    this.movevelocity.z = t, this.curMotoSpeed <= 0 && Laya.SoundManager.playSound("sound/Cheer.mp3");
                }
            } else this.curMotoSpeed += this.speedUp * this.playerBean.accSpeed * Laya.timer.delta * .001, 
            this.curMotoSpeed = Math.min(this.playerBean.maxSpeed, this.curMotoSpeed), this.curMotoSpeed = Math.max(this.playerBean.baseSpeed, this.curMotoSpeed), 
            this.movevelocity.z = this.curMotoSpeed * this.speedUpRate * Laya.timer.delta * .001;
            this.isDieEventCallBack > 0 && (this.isDieEventCallBack -= Laya.timer.delta, Laya.timer.scale = c.lerp(Laya.timer.scale, 1, .001 * Laya.timer.delta), 
            (this.isDieEventCallBack <= 0 || 1 == Laya.timer.scale) && (this.isDieEventCallBack = 0, 
            Laya.timer.scale = 1)), super.onUpdate();
        }
        createRocket(t) {
            let e = b.Instance().createBullet(S.Sprite3d_Bulletbox);
            if (!e) return;
            let a = e.getComponent(x);
            a && a.destroy(), null == a && (a = e.addComponent(D)), b.Instance().addBullet(a);
            let i = new Laya.Vector3(), s = new Laya.Vector3();
            Laya.Vector3.add($.cameraController.rocketPos.transform.position.clone(), new Laya.Vector3(t, 0, 0), s);
            let o = new Laya.Vector3();
            Laya.Vector3.add($.cameraController.rocketPos.transform.position.clone(), new Laya.Vector3(t, 0, 0), s), 
            Laya.Vector3.add(this.mtransform.position.clone(), new Laya.Vector3(0, 1.8, .8), o), 
            i = c.vectorDirection(o, s), e.transform.position = o, e.active = !0, a.init(this, i, t), 
            Laya.SoundManager.playSound("sound/launch.mp3");
        }
        canAtk() {
            return this.fireTimer <= 0 && !this.isFly && !this.isPlayAtkAni && !this.isPlayAtkedAni;
        }
        canGunAtk() {
            return this.gunTimer <= 0 && !this.isFly && !this.isPlayAtkAni && !this.isPlayAtkedAni;
        }
        onAtk(t, e = !1) {
            if (t) {
                if (console.debug("攻击================"), this.curAtkedTarget = t, e) {
                    if (!this.canGunAtk()) return;
                    this.gunTimer = this.playerBean.gunatkintervaTime, this.onPlayGunAtkAnimator(), 
                    $.cameraController.playShakeCamerAni(), Laya.SoundManager.playSound("sound/kaiqiang.mp3");
                } else {
                    if (!this.canAtk()) return;
                    this.fireTimer = this.playerBean.atkintervalTime, 
                    this.onPlayAtkAnimator(), 
                    this.curMotoSpeed = t.curMotoSpeed, 
                    console.log(t.curMotoSpeed, " this.curMotoSpeed ", this.curMotoSpeed);
                }
                this.maxWaitTime = 300;
            }
        }
        gunAtkAnimatorCallBack() {
            if (this.isPlayAtkAni = !1, this.isPlayAtkedAni = !1, this.weapon3d.active = !0, 
            this.moveDir = 0, Laya.stage.event(t.Game_GunProgress_Update), Laya.Tween.to(this.mtransform, {}, 500, null, Laya.Handler.create(this, this.removeGunEf)), 
            this.curAtkedTarget) {
                console.log("子弹打中对方");
                let e = this.mtransform.position.x > this.curAtkedTarget.mtransform.position.x ? -1 : 1;
                this.curAtkedTarget.onDamage(e), Laya.SoundManager.playSound("sound/attack.mp3");
                let a = new Laya.Vector3(this.curAtkedTarget.mtransform.position.x - .3, 1, this.curAtkedTarget.mtransform.position.z);
                this.mtransform.position.x > this.curAtkedTarget.mtransform.position.x && (a.x = this.curAtkedTarget.mtransform.position.x + .3), 
                this.isLife() || (d.data.playerKillCount++, console.log("子弹击杀", d.data.playerKillCount)), 
                Laya.stage.event(t.Game_Ai_Hp_Update, [ this.curAtkedTarget.hp / this.curAtkedTarget.aiBean.AI_attacked_count, this.curAtkedTarget.name ]), 
                this.curAtkedTarget.playAtkedEffect(a);
            }
        }
        playerDieHandler() {
            Laya.SoundManager.stopSound("sound/accelerate.mp3"), Laya.SoundManager.stopSound("sound/lowspeed.mp3"), 
            Laya.SoundManager.playSound("sound/death.mp3"), $.cameraController.playSpeedEffect(!1), 
            Laya.timer.scale = .2, $.cameraController.playFailCamerAni();
        }
        dieEventCallback() {
            this.isDieEventCallBack = 500;
        }
    }
    class G extends v {
        constructor() {
            super(), this.speedUpRate = 1, this.flyTime = 0, this.fallTime = 0, this.curMotoFlySpeed = 0, 
            this.flyHeight = 0, this.accTime = 0, this.slowTime = 0, this.seekTime = 0, this.isPursue = !1, 
            this.isAvoidObs = !1, this.avoidDir = 0, this.avoidMinDist = 0, this.collisionAvoidDir = 0, 
            this.collisionAvoidTime = 0, this.collisionAvoidDist = 0;
        }
        onAwake() {
            super.onAwake();
        }
        updateMotoRank() {
            let t = V.Instance().getCurRank(this.mtransform.position.z);
            if (t != this.curRank && t > 0) {
                this.curRank = t, c.activeAllChild(this.rank3d, !1);
                let e = this.rank3d.getChildByName(this.curRank + "");
                e && (e.active = !0);
            }
        }
        onTriggerEnter(t) {
            if (this.isLife()) {
                var e = t.owner;
                if (e && "speed_line" === e.name && (this.speedUpRate = this.aiBean.AI_speedup_scale, 
                this.speedUpTime = this.aiBean.AI_speedup_time, this.fire3d.active = !0), e && -1 != e.name.indexOf("animal") && (this.setDie(), 
                this.onPlayDieAnimator()), e && "diving_tower" === e.name && !this.isFly && (this.isFly = !0, 
                this.flyTime = c.random(800, 1e3), this.fallTime = 0, this.flyHeight = 0, this.curMotoFlySpeed = 5, 
                this.speedUpRate = this.aiBean.AI_speedup_scale, this.animatorController && this.animatorController.play(_.qi_fei), 
                this.yinying3d.active = !1, this.fire3d.active = !0), e && "hinder_car" === e.name && (this.setDie(), 
                e.active = !1, this.onPlayDieAnimator(), this.playCarBombEffect(e.transform.position.clone())), 
                e && ("hinder_box" === e.name || "hinder_grass" === e.name || "hinder_lajitong" === e.name || "hinder_langan" === e.name || "hinder_xiangzi" === e.name || "hinder_yizi" === e.name)) {
                    this.curMotoSpeed -= .1 * this.curMotoSpeed, this.boxFlyEffect(e);
                    let t = e.getChildByName("shadow");
                    t && (t.active = !1);
                }
                this.atkBoxCheck(e);
            }
        }
        onTriggerStay(t) {
            if (this.isLife()) {
                var e = t.owner;
                if (e && (-1 != e.name.indexOf(S.Sprite3d_Ai) || -1 != e.name.indexOf(S.Sprite3d_Player))) {
                    let t = e.getComponent(v);
                    if (!t || !t.isLife() || !t.isAI && t.isPlayAtkAni && t.curAtkedTarget == this) return;
                    if (Math.abs(e.transform.position.x - this.mtransform.position.x) < .5 && Math.abs(e.transform.position.z - this.mtransform.position.z) < 2.5 && this.collisionAvoidTime <= 0) if (this.curMotoSpeed = this.curMotoSpeed + (2 * c.random(0, 2) - 1) * this.curMotoSpeed * c.random(2, 6) * .1, 
                    this.collisionAvoidTime = c.random(200, 500), this.collisionAvoidDist = c.random(10 * l.gameSetting.commoncfg.collideMinDist, 10 * l.gameSetting.commoncfg.collideMinDist) / 10, 
                    e.transform.position.x > this.mtransform.position.x) {
                        if (this.mtransform.position.x <= -4.2 && e.transform.position.x < -3.8 ? this.collisionAvoidDir = 0 : (this.collisionAvoidDir = -1, 
                        this.onPlayRightMoveAnimator()), t && t.isLife() && !t.isAI) {
                            zs.laya.DeviceService.VibrateShort();
                            let t = new Laya.Vector3(this.mtransform.position.x + .3, 1, .5 * (this.mtransform.position.z + e.transform.position.z));
                            this.playCollisionEffect(t), Laya.SoundManager.playSound("sound/motorcollision.wav");
                        }
                    } else if (this.mtransform.position.x >= 4.2 && e.transform.position.x > 3.8 ? this.collisionAvoidDir = 0 : (this.collisionAvoidDir = 1, 
                    this.onPlayLeftMoveAnimator()), t && t.isLife() && !t.isAI) {
                        zs.laya.DeviceService.VibrateShort();
                        let t = new Laya.Vector3(this.mtransform.position.x - .3, 1, .5 * (this.mtransform.position.z + e.transform.position.z));
                        this.playCollisionEffect(t), Laya.SoundManager.playSound("sound/motorcollision.wav");
                    }
                }
                this.atkBoxCheck(e);
            }
        }
        atkBoxCheck(e) {
            if (e && "atkbox" === e.name) {
                let a = e.getComponent(L);
                if (!this.isLife() || !a) return;
                if (a.character && a.character != this && a.character.isPlayAtkAni && a.character.canCollisionCheck && a.character.curAtkedTarget == this && !this.isPlayAtkedAni && (this.atkedHitTarget(a.character.sprite3d), 
                !a.character.isAI)) {
                    Laya.SoundManager.playSound("sound/attack.mp3"), $.cameraController.playShakeCamerAni(), 
                    zs.laya.DeviceService.VibrateShort();
                    let i = new Laya.Vector3(this.mtransform.position.x - .3, 1, e.transform.position.z);
                    a.character.mtransform.position.x > this.mtransform.position.x && (i.x = this.mtransform.position.x + .3), 
                    this.playAtkedEffect(i), this.updateMotoEmoji(!0);
                    let s = l.gameSetting.commoncfg.atkedScale;
                    this.isLife() || (d.data.playerKillCount++, console.log("击杀数", d.data.playerKillCount), 
                    1 == d.data.playerKillCount && (s *= .2)), Laya.timer.scale = s, a.character.atkSlowTime = l.gameSetting.commoncfg.atkSlowTime, 
                    Laya.stage.event(t.Game_Ai_Hp_Update, [ this.hp / this.aiBean.AI_attacked_count, this.name ]);
                }
            }
        }
        onStart() {
            super.onStart(), this.rigidbody3d = this.sprite3d.getComponent(Laya.Rigidbody3D), 
            this.rigidbody3d.angularFactor = new Laya.Vector3(0, 0, 0), this.rigidbody3d.angularVelocity = new Laya.Vector3(0, 0, 0), 
            this.rigidbody3d.linearVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.collisionGroup = this.collisionGroup, 
            this.rigidbody3d.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ this.collisionGroup, 
            this.rigidbody3d.sleepLinearVelocity = 0, this.rigidbody3d.sleepAngularVelocity = 0, 
            this.rigidbody3d.wakeUp(), this.standby(), this.charactercollisionGroup(this.moto3d, this.collisionGroup);
        }
        standby() {
            super.standby(), this.movevelocity.x = 0, this.movevelocity.z = 0, this.movevelocity.y = 0;
        }
        initBaseData() {
            this.aiBean && (this.curMotoSpeed = this.aiBean.AI_star_speed, this.hp = this.aiBean.AI_attacked_count);
        }
        initEvent() {
            super.initEvent();
        }
        removeEvent() {
            super.removeEvent();
        }
        onUpdate() {
            if (this.isLife()) {
                if (this.speedUpTime > 0 && (this.speedUpTime -= Laya.timer.delta, this.speedUpTime <= 0 && (this.speedUpRate = 1, 
                this.fire3d.active = !1)), this.isFly && (this.movevelocity.y = 0, this.flyTime > 0 && (this.flyTime -= Laya.timer.delta, 
                this.flyHeight += Math.abs(this.curMotoSpeed * Laya.timer.delta * .001), (this.flyTime <= 0 || this.flyHeight >= 10) && (this.flyTime = 0, 
                this.speedUpRate = 1, this.fallTime = 1e3, this.curMotoFlySpeed = 5), this.movevelocity.y = this.curMotoSpeed * Laya.timer.delta * .001), 
                this.fallTime > 0 && (this.mtransform.position.y <= 0 ? (this.fallTime = 0, this.isFly = !1, 
                this.movevelocity.y = -this.mtransform.position.y, this.onPlaytUpAnimator(), this.fire3d.active = !1, 
                this.yinying3d.active = !0) : this.movevelocity.y = -this.curMotoSpeed * Laya.timer.delta * .001 * .3)), 
                this.accTime <= 0 && this.slowTime <= 0 && this.seekTime <= 0 && !this.isPursue && (c.probabilityCanHappen(this.aiBean.AI_max_chance) ? this.accTime = this.aiBean.AI_max_status_time : c.probabilityCanHappen(this.aiBean.AI_min_chance) && (this.slowTime = this.aiBean.AI_min_status_time)), 
                this.accTime > 0) this.accTime -= Laya.timer.delta, this.curMotoSpeed += this.aiBean.AI_acc_speed * Laya.timer.delta * .001, 
                this.curMotoSpeed = Math.min(this.aiBean.AI_speed_max, this.curMotoSpeed); else if (this.slowTime > 0) this.slowTime -= Laya.timer.delta, 
                this.curMotoSpeed -= this.aiBean.AI_slow_speed * Laya.timer.delta * .001, this.curMotoSpeed = Math.max(this.aiBean.AI_speed_min, this.curMotoSpeed); else {
                    let t = Laya.Vector3.distance(V.Instance().getPlayer().mtransform.position, this.mtransform.position);
                    if (this.seekTime <= 0 && t <= this.aiBean.AI_seek_scope && t > 1 && c.probabilityCanHappen(this.aiBean.AI_seek_chance) && !this.isPursue && (this.seekTime = this.aiBean.AI_seek_time), 
                    this.seekTime > 0) this.mtransform.position.z > V.Instance().getPlayer().mtransform.position.z ? (this.curMotoSpeed -= this.aiBean.AI_slow_speed * Laya.timer.delta * .001, 
                    this.curMotoSpeed = Math.max(this.aiBean.AI_speed_min, this.curMotoSpeed)) : (this.curMotoSpeed += this.aiBean.AI_acc_speed * Laya.timer.delta * .001, 
                    this.curMotoSpeed = Math.min(this.aiBean.AI_speed_max, this.curMotoSpeed)), this.mtransform.position.x > V.Instance().getPlayer().mtransform.position.x ? this.movevelocity.x = -this.curMotoSpeed * Laya.timer.delta * .001 * .5 : this.movevelocity.x = this.curMotoSpeed * Laya.timer.delta * .001 * .5, 
                    (t = Laya.Vector3.distance(V.Instance().getPlayer().mtransform.position, this.mtransform.position)) < 1 && (this.seekTime = 0); else {
                        let t = V.Instance().getPlayer().mtransform.position.z - this.mtransform.position.z;
                        t >= this.aiBean.AI_pursue_gap && !this.isPursue && c.probabilityCanHappen(this.aiBean.AI_pursue_chance) && (this.isPursue = !0, 
                        this.curMotoSpeed = this.curMotoSpeed * this.aiBean.AI_pursue_scale), t <= -this.aiBean.AI_moderate_gap && (this.isPursue = !1, 
                        this.curMotoSpeed = this.aiBean.AI_star_speed), this.isPursue || (this.curMotoSpeed > this.aiBean.AI_star_speed ? (this.curMotoSpeed -= this.aiBean.AI_slow_speed * Laya.timer.delta * .001, 
                        this.curMotoSpeed = Math.max(this.aiBean.AI_star_speed, this.curMotoSpeed)) : (this.curMotoSpeed += this.aiBean.AI_acc_speed * Laya.timer.delta * .001, 
                        this.curMotoSpeed = Math.min(this.aiBean.AI_star_speed, this.curMotoSpeed)));
                    }
                }
                if (this.movevelocity.z = this.curMotoSpeed * this.speedUpRate * Laya.timer.delta * .001, 
                this.movevelocity.x = 0, this.rayCheckObs() || this.avoidMinDist > 0) {
                    if (!this.isAvoidObs && c.probabilityCanHappen(this.aiBean.AI_hide_chance) && (this.isAvoidObs = !0, 
                    this.avoidMinDist = 2.5, console.log("躲避---"), this.mtransform.position.x > 0 ? (this.onPlayRightMoveAnimator(), 
                    this.avoidDir = -1) : (this.onPlayLeftMoveAnimator(), this.avoidDir = 1)), this.isAvoidObs) {
                        let t = Math.max(15, .5 * this.curMotoSpeed) * Laya.timer.delta * .001;
                        this.avoidMinDist -= t, this.movevelocity.x = this.avoidDir * t;
                    }
                } else this.isAvoidObs = !1, this.onPlaytRestUpAnimator(), this.avoidDir = 0, this.avoidMinDist = 0;
                if (this.atkedMoveTime > 0) {
                    this.atkedMoveTime -= Laya.timer.delta / Laya.timer.scale;
                    let t = this.atkedMoveDir * this.curMotoSpeed * Laya.timer.delta * .001 * .6;
                    this.movevelocity.x = t, this.atkedMoveDist -= Math.abs(t), (this.atkedMoveDist <= 0 || this.atkedMoveTime <= 0) && (this.atkedMoveTime = 0);
                } else if (this.collisionAvoidTime > 0) {
                    this.collisionAvoidTime -= Laya.timer.delta;
                    let t = this.collisionAvoidDir * this.curMotoSpeed * Laya.timer.delta * .001 * .5;
                    this.collisionAvoidDist -= Math.abs(t), this.movevelocity.x = t, (this.collisionAvoidDist <= 0 || this.collisionAvoidTime <= 0) && (this.collisionAvoidTime = 0, 
                    1 == this.collisionAvoidDir ? this.onPlayLeftUpAnimator() : -1 == this.collisionAvoidDir ? this.onPlayRightUpAnimator() : this.onPlaytUpAnimator());
                }
            }
            super.onUpdate();
        }
        onPlaytRestUpAnimator() {
            1 == this.avoidDir ? this.onPlayLeftUpAnimator() : -1 == this.avoidDir ? this.onPlayRightUpAnimator() : this.onPlaytUpAnimator();
        }
        canAtk() {
            return this.fireTimer <= 0 && c.probabilityCanHappen(this.aiBean.AI_atk_chance) && !this.isFly && !this.isPlayAtkAni && !this.isPlayAtkedAni;
        }
        onAtk(t, e = !1) {
            t && this.canAtk() && (this.curAtkedTarget = t, this.onPlayAtkAnimator(), this.fireTimer = this.aiBean.AI_atk_intval_time, 
            t.isAI || Laya.SoundManager.playSound("sound/attack.mp3"));
        }
        rayCheckObs() {
            var t = this.mtransform.position.clone();
            t.y = 1;
            var e = new Laya.Vector3(0, 0, 0), a = new Laya.Vector3(0, 0, 10);
            Laya.Vector3.add(t, a, e);
            var i = [];
            if (this.scene3d.physicsSimulation.raycastAllFromTo(this.mtransform.position.clone(), e, i), 
            i.length > 0) for (let t = 0; t < i.length; t++) {
                var s = i[t].collider.owner;
                if (-1 != s.name.indexOf("animal_") || "hinder_car" === s.name) return console.log("检测到前方障碍", s.name), 
                !0;
            }
            return !1;
        }
    }
    class U extends Laya.Script {
        constructor() {
            super(...arguments), this.dir = new Laya.Vector3(), this.isMouseDown = !1, this.curAtkTarget = null, 
            this.touchId = -1, this.lastMouseX = 0, this.lastMouseY = 0, this.checkIntval = 200;
        }
        onStart() {
            this.character = this.owner.getComponent(v), this.checkIntval = 300;
        }
        onUpdate() {
            if (this.character && this.character.isLife() && !d.data.gameFinish && (this.checkIntval -= Laya.timer.delta, 
            this.checkIntval < 0)) {
                this.checkIntval = 300;
                let t = null;
                this.curAtkTarget && this.curAtkTarget.isLife() && V.Instance().isInAtkRang(this.character, this.curAtkTarget) ? t = this.curAtkTarget : (t = V.Instance().getNearEnemyOfAtkRang(this.character), 
                this.curAtkTarget = t), null != t && t.isLife() && this.character.onAtk(t);
            }
        }
    }
    var B = zs.laya.Resource, O = zs.laya.ObjectPool;
    class V {
        constructor() {
            this.characterList = [], this.removeList = [], this.collisionGroups = [ Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10 ], 
            this.nameIndexs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        }
        static Instance() {
            return null == this.instance && (this.instance = new V()), this.instance;
        }
        getPlayer() {
            return this.player;
        }
        init(t) {
            this.parent = t, this.nameIndexs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        }
        createCharacter(t, e) {
            var a = B.LoadSprite3d(t);
            let i = O.GetSprite3d(a);
            return i.name = e, i.active = !0, this.parent.addChild(i), i;
        }
        initPlayer(t) {
            let e = this.parent.getChildByName(S.Sprite3d_Player);
            e && (O.RecoverSprite3d(e), this.parent.removeChild(e)), (e = this.createCharacter(S.Sprite3d_Role, S.Sprite3d_Player)).transform.position = c.ZERO;
            let a = null;
            (a = e.getComponent(N)) && a.destroy();
            let i = e.getComponent(G);
            i && i.destroy(), (a = e.addComponent(N)).setScene3d(this.parent), a.isAI = !1, 
            a.isPause = !0;
            var s = w.create(l.gameSetting.playerCfg[t - 1]);
            a.initPlayerBean(s), a.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER;
            var o = e.getComponent(k);
            o && o.destroy();
            var n = e.getComponent(U);
            n && n.destroy(), o = e.addComponent(k);
            var r = e.getComponent(_);
            return r && r.destroy(), r = e.addComponent(_), this.characterList.push(a), this.player = a, 
            a;
        }
        initAi(t, e, a) {
            let i = this.parent.getChildByName(S.Sprite3d_Ai);
            (i = this.createCharacter(S.Sprite3d_Role, S.Sprite3d_Ai)).transform.position = e;
            let s = null;
            (s = i.getComponent(G)) && s.destroy();
            let o = i.getComponent(N);
            o && o.destroy(), (s = i.addComponent(G)).setScene3d(this.parent), s.isAI = !0, 
            s.isPause = !0;
            var n = M.createAIBean(l.gameSetting.aiCfg[t - 1]);
            if (s.initAiBean(n), s.collisionGroup = this.collisionGroups[a], this.nameIndexs.length > 0) {
                let t = c.random(0, this.nameIndexs.length);
                s.name = this.nameIndexs[t], this.nameIndexs.splice(t, 1);
            }
            console.log(a, "index", "name", s.name, this.nameIndexs);
            var r = i.getComponent(k);
            r && r.destroy();
            var h = i.getComponent(U);
            h && h.destroy(), h = i.addComponent(U);
            var d = i.getComponent(_);
            return d && d.destroy(), d = i.addComponent(_), this.characterList.push(s), s;
        }
        getCharacterList() {
            return this.characterList;
        }
        remove(t) {
            let e = this.characterList.indexOf(t);
            -1 != e && this.characterList.splice(e, 1);
            let a = t.sprite3d;
            a.active = !1, O.RecoverSprite3d(a), t.destroy();
        }
        reset() {
            for (let t = this.removeList.length - 1; t >= 0; t--) {
                const e = this.removeList[t];
                this.removeList.splice(t, 1), this.characterList.push(e), e.reset();
            }
        }
        onDestroy() {
            for (let t = this.characterList.length - 1; t >= 0; t--) {
                const e = this.characterList[t];
                let a = e.sprite3d;
                this.characterList[t] = null, a.active = !1, O.RecoverSprite3d(a, !0), e.destroy();
            }
            this.characterList = [], this.nameIndexs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        }
        getNearEnemyOfAtkRang(t, e = !1) {
            if (!t) return null;
            let a = V.Instance().getCharacterList(), i = null, s = e ? 15 : 1.3;
            for (let o = a.length - 1; o >= 0; o--) {
                const n = a[o];
                if (n && n != t && n.isLife()) if (e) {
                    let e = Laya.Vector3.distance(n.mtransform.position, t.mtransform.position);
                    e < s && n.mtransform.position.z - t.mtransform.position.z > 2.5 && (null == i || s > e) && (i = n, 
                    s = e);
                } else {
                    let e = n.mtransform.position.z - t.mtransform.position.z, a = Math.abs(n.mtransform.position.x - t.mtransform.position.x);
                    Math.abs(n.mtransform.position.y - t.mtransform.position.y) < 1 && e > -.5 && e < 1.5 && a < s && a > .5 && (null == i || s > a) && (i = n, 
                    s = a);
                }
            }
            return i;
        }
        isInAtkRang(t, e, a = !1) {
            if (!e || !e.isLife()) return !1;
            if (!t) return !1;
            if (a) {
                return Laya.Vector3.distance(e.mtransform.position, t.mtransform.position) < 15 && e.mtransform.position.z - t.mtransform.position.z > 2.5;
            }
            {
                let a = e.mtransform.position.z - t.mtransform.position.z, i = Math.abs(e.mtransform.position.x - t.mtransform.position.x);
                return Math.abs(e.mtransform.position.y - t.mtransform.position.y) < 1 && a > -.5 && a < 1.5 && i < 1.3 && i > .5;
            }
        }
        getEnemiesOfRang(t, e) {
            if (!t) return;
            let a = V.Instance().getCharacterList(), i = [], s = e;
            for (let e = a.length - 1; e >= 0; e--) {
                const o = a[e];
                if (!o || o == t || !o.isLife()) continue;
                Laya.Vector3.distance(o.mtransform.position, t.mtransform.position) <= s && (i[i.length] = o);
            }
            return i.length > 0 ? i : null;
        }
        getCurRank(t) {
            let e = 1;
            for (let a = this.characterList.length - 1; a >= 0; a--) {
                const i = this.characterList[a];
                i && i.isLife() && (t < i.mtransform.position.z && e++);
            }
            return e;
        }
    }
    V.instance = null;
    var z = zs.laya.Resource, F = zs.laya.ObjectPool;
    class H {
        constructor() {
            this.goldList = [];
        }
        static Instance() {
            return null == this.instance && (this.instance = new H()), this.instance;
        }
        init(t) {
            this.parent = t;
        }
        createGold(t) {
            let e = z.LoadSprite3d(t), a = F.GetSprite3d(e);
            return a.name = t, this.parent.addChild(a), a.active = !0, -1 == this.goldList.indexOf(a) && (this.goldList[this.goldList.length] = a), 
            a;
        }
        removeGold(t) {
            let e = this.goldList.indexOf(t);
            -1 != e && this.goldList.splice(e, 1), t.active = !1, F.RecoverSprite3d(t);
        }
        onDestroy() {
            if (this.goldList.length > 0) {
                for (let t = this.goldList.length - 1; t >= 0; t--) {
                    const t = this.goldList.pop();
                    F.RecoverSprite3d(t);
                }
                this.goldList = [];
            }
        }
        getGoldList() {
            return this.goldList;
        }
        addGoldsY(t, e, a, i) {
            var s = Math.floor(360 / t);
            s = s * Math.PI / 180;
            for (let o = 0; o < t; o++) {
                const t = this.createGold(e);
                t.transform.setWorldLossyScale(new Laya.Vector3(.5, .5, .5)), t.transform.position = i.clone();
                let n = Math.sin(s * o) * a, r = Math.cos(s * o) * a, l = t.transform.position.x + n, h = t.transform.position.y + 2, c = t.transform.position.y + .5, d = t.transform.position.z + r;
                Laya.Tween.to(t.transform, {
                    localPositionX: l - .5 * n,
                    localPositionY: h,
                    localPositionZ: d - .5 * r
                }, 150, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(t.transform, {
                        localPositionX: l,
                        localPositionY: c,
                        localPositionZ: d
                    }, 150, null, null);
                }));
            }
        }
        addGoldsZ(t, e, a, i, s) {
            var o = Math.floor(360 / e);
            o = o * Math.PI / 180;
            for (let n = 0; n < e; n++) {
                const e = this.createGold(a);
                if (t.addChild(e), e && e.getComponent(Laya.PhysicsCollider)) {
                    e.getComponent(Laya.PhysicsCollider).enabled = !1;
                }
                let r = Math.sin(o * n) * i, l = Math.cos(o * n) * i, h = s.x + r, c = s.y + l;
                e.transform.localPosition = new Laya.Vector3(h, c, s.z);
            }
        }
    }
    H.instance = null;
    var W = zs.laya.Resource, j = zs.laya.ObjectPool;
    class X extends Laya.Script3D {
        constructor() {
            super(), this.curPosCursor = null, this.isCreatSuccess = !1, this.trackTotalLenght = 0, 
            this.trackIndex = -1, this.trackDataList = [];
        }
        init(t) {
            this.clearTrackSprite(this.owner);
            let e = t;
            e > d.data.stageCount && (e = 1 + c.random(0, d.data.stageCount)), this.trackDataList = d.data.getStageData(e).track, 
            this.trackTotalLenght = d.data.getStageLenght(e), this.isCreatSuccess = !1, this.curPosCursor.setValue(0, 0, 0), 
            this.trackIndex = 0, this.creatNextTracks();
        }
        updateTracks(t) {
            let e = this.owner.getChildAt(0);
            e && t.transform.position.z - e.transform.position.z > 260 && this.clearTrack(e);
        }
        clearTrackSprite(t) {
            for (;t.numChildren > 0; ) {
                let e = t.getChildAt(0);
                this.clearTrack(e);
            }
        }
        clearTrack(t) {
            let e = t.getChildByName("golds");
            e && this.clearSprite(e);
            let a = t.getChildByName("roads");
            a && this.clearSprite(a);
            let i = t.getChildByName("hinders");
            i && this.clearSprite(i);
            let s = t.getChildByName("props");
            s && this.clearSprite(s), j.RecoverSprite3d(t), t.removeSelf();
        }
        clearSprite(t) {
            if (t) for (;t.numChildren > 0; ) {
                let e = t.getChildAt(0);
                j.RecoverSprite3d(e, !0), t.removeChild(e);
            }
        }
        creatNextTracks() {
            if (!this.isCreatSuccess && this.trackIndex < this.trackDataList.length && d.data.currentCreateTrackLine < this.trackTotalLenght) {
                this.creatNextCarTrack();
                this.trackIndex += 1;
            } else {
                if (!this.isCreatSuccess) {
                    var t = W.LoadSprite3d(S.Sprite3d_road_finish), e = j.GetSprite3d(t);
                    this.owner.addChild(e), e.transform.position = new Laya.Vector3(0, 0, d.data.currentCreateTrackLine);
                }
                this.isCreatSuccess = !0;
            }
        }
        creatNextCarTrack() {
            let t = this.trackDataList[this.trackIndex], e = d.data.getTrackDataByName(t);
            var a = W.LoadSprite3d("track"), i = j.GetSprite3d(a);
            i.name = "track" + this.trackIndex;
            var s = this.owner.getChildAt(this.owner.numChildren - 1);
            let o = new Laya.Vector3(0, 0, 0);
            s && ((o = s.transform.position.clone()).z += 240), this.owner.addChild(i), i.transform.position = o, 
            i.transform.rotationEuler = new Laya.Vector3(), d.data.currentCreateTrackLine += d.data.height;
            let n = i.getChildByName("golds");
            this.clearSprite(n);
            for (let t = 0; t < e.golds.length; t++) n.addChild(this.createSprite3d(e.golds[t]));
            let r = i.getChildByName("hinders");
            this.clearSprite(r);
            for (let t = 0; t < e.hinders.length; t++) {
                let a = this.createSprite3d(e.hinders[t]);
                r.addChild(a), c.activeAllChild(a, !0);
            }
            let l = i.getChildByName("props");
            this.clearSprite(l);
            for (let t = 0; t < e.props.length; t++) {
                let a = this.createSprite3d(e.props[t]);
                l.addChild(a), c.activeAllChild(a, !0);
            }
            return i;
        }
        createSprite3d(t) {
            console.log(t.name);
            var e = W.LoadSprite3d(t.name);
            let a = j.GetSprite3d(e);
            a.name = t.name, a.active = !0;
            let i = a.getComponent(Laya.PhysicsCollider);
            i && (i.enabled = !0);
            let s = a.getComponent(Laya.Rigidbody3D);
            s && (s.enabled = !0);
            let o = a.getChildByName("shadow");
            return o && (o.active = !0), a.transform.localPosition = new Laya.Vector3(t.posX / 100, t.posY / 100, t.posZ / 100), 
            a.transform.localRotationEuler = new Laya.Vector3(t.rotationX / 100, t.rotationY / 100, t.rotationZ / 100), 
            a.transform.setWorldLossyScale(new Laya.Vector3(t.scaleX / 100, t.scaleY / 100, t.scaleZ / 100)), 
            a;
        }
        onAwake() {
            this.trackDataList = [], this.curPosCursor = new Laya.Vector3();
        }
        onDestroy() {
            this.trackDataList = [], this.curPosCursor = null, this.clearTrackSprite(this.owner);
        }
    }
    var q = zs.laya.Resource, Y = zs.laya.ObjectPool;
    class K extends Laya.Script3D {
        constructor() {
            super(), this.roadIndex = -1, this.roadDataList = [];
        }
        init(t) {
            this.clearTrackSprite(this.owner);
            let e = t;
            e > d.data.stageCount && (e = 1 + c.random(0, d.data.stageCount)), this.roadDataList = d.data.getStageData(e).road, 
            this.roadIndex = 0, this.creatNextRoad();
        }
        updateRoads(t) {
            if (this.owner.numChildren > 0) {
                let a = this.owner.getChildAt(0);
                t.transform.position.z - a.transform.position.z > 260 && this.clearRoad(a);
                var e = this.owner.getChildAt(this.owner.numChildren - 1);
                e && t.transform.position.z - e.transform.position.z > 120 && this.creatNextRoad();
            }
        }
        clearTrackSprite(t) {
            for (;t.numChildren > 0; ) {
                let e = t.getChildAt(0);
                this.clearRoad(e);
            }
        }
        clearRoad(t) {
            Y.RecoverSprite3d(t), t.removeSelf();
        }
        clearSprite(t) {
            if (t) for (;t.numChildren > 0; ) {
                let e = t.getChildAt(0);
                Y.RecoverSprite3d(e, !0), t.removeChild(e);
            }
        }
        creatNextRoad() {
            this.roadIndex < this.roadDataList.length && (this.creatNextCarRoad(), this.roadIndex += 1, 
            this.roadIndex = this.roadIndex % this.roadDataList.length);
        }
        creatNextCarRoad() {
            let t = this.roadDataList[this.roadIndex];
            var e = q.LoadSprite3d(t), a = Y.GetSprite3d(e);
            a.name = "road_" + this.roadIndex;
            var i = this.owner.getChildAt(this.owner.numChildren - 1);
            let s = new Laya.Vector3(0, 0, -20);
            return i && ((s = i.transform.position.clone()).z += 240), this.owner.addChild(a), 
            a.transform.position = s, a.transform.rotationEuler = new Laya.Vector3(), a;
        }
        createSprite3d(t) {
            console.log(t.name);
            var e = q.LoadSprite3d(t.name);
            let a = Y.GetSprite3d(e);
            a.name = t.name, a.active = !0;
            let i = a.getComponent(Laya.PhysicsCollider);
            i && (i.enabled = !0);
            let s = a.getComponent(Laya.Rigidbody3D);
            s && (s.enabled = !0);
            let o = a.getChildByName("shadow");
            return o && (o.active = !0), a.transform.localPosition = new Laya.Vector3(t.posX / 100, t.posY / 100, t.posZ / 100), 
            a.transform.localRotationEuler = new Laya.Vector3(t.rotationX / 100, t.rotationY / 100, t.rotationZ / 100), 
            a.transform.setWorldLossyScale(new Laya.Vector3(t.scaleX / 100, t.scaleY / 100, t.scaleZ / 100)), 
            a;
        }
        onAwake() {
            this.sprite3D = this.owner, this.roadDataList = [];
        }
        onDestroy() {
            this.roadDataList = [], this.clearTrackSprite(this.owner);
        }
    }
    var J = zs.laya.Resource, Z = zs.laya.ObjectPool;
    class $ extends Laya.Script3D {
        constructor() {
            super(), this.inSleep = !0, this.treasurebox3d = null, this.handlerType = -1;
        }
        onAwake() {
            $.scenee3d = this.owner, Laya.MouseManager.multiTouchEnabled = !1, $.scenee3d.input.multiTouchEnabled = !1;
        }
        onEnable() {
            V.Instance().init($.scenee3d), C.Instance().init($.scenee3d), b.Instance().init($.scenee3d), 
            H.Instance().init($.scenee3d), $.cameraController = $.scenee3d.getChildByName("GameAmbient").addComponent(T), 
            $.camera = $.cameraController.camera, Laya.stage.on(t.GAME_SLEEP, this, this.sleep), 
            Laya.stage.on(t.GAME_WAKEUP, this, this.wakeup), Laya.stage.on(t.GAME_PREPARE, this, this.onGamePrepare), 
            Laya.stage.on(t.GAME_HOME, this, this.onGameHome), Laya.stage.on(t.GAME_START, this, this.onGameStart), 
            Laya.stage.on(t.GAME_OVER, this, this.onGameOver), Laya.stage.on(t.GAME_RELIVE, this, this.onGameRelive), 
            Laya.stage.on(t.Handler_Treasurebox, this, this.handlerTreasurebox), Laya.stage.on(t.Stage_Finish, this, this.onStageFinish), 
            Laya.stage.on(t.Stage_Fail, this, this.onStageFail);
        }
        preloadEffect() {
            let t = C.Instance().createSpriteEffect("ef_MT_carboom");
            t.transform.position = new Laya.Vector3(-10, -20, 0), Laya.Tween.to($.cameraController.cameraApe.transform, {}, 3e3, null, Laya.Handler.create(this, this.removeEffect, [ t ]), 100);
            let e = C.Instance().createSpriteEffect("ef_MT_gun_boom");
            e.transform.position = new Laya.Vector3(-10, -20, 0), Laya.Tween.to($.cameraController.cameraApe.transform, {}, 3e3, null, Laya.Handler.create(this, this.removeEffect, [ e ]), 200);
        }
        removeEffect(t) {
            console.log("销毁特效"), C.Instance().removeSpriteEffect(t);
        }
        onStart() {
            this.preloadEffect();
        }
        onDisable() {
            Laya.stage.off(t.GAME_SLEEP, this, this.sleep), Laya.stage.off(t.GAME_WAKEUP, this, this.wakeup), 
            Laya.stage.off(t.GAME_PREPARE, this, this.onGamePrepare), Laya.stage.off(t.GAME_HOME, this, this.onGameHome), 
            Laya.stage.off(t.GAME_START, this, this.onGameStart), Laya.stage.off(t.GAME_OVER, this, this.onGameOver), 
            Laya.stage.off(t.GAME_RELIVE, this, this.onGameRelive), Laya.stage.off(t.Handler_Treasurebox, this, this.handlerTreasurebox), 
            Laya.stage.off(t.Stage_Finish, this, this.onStageFinish), Laya.stage.off(t.Stage_Fail, this, this.onStageFail);
        }
        wakeup() {
            this.inSleep = !1;
        }
        sleep() {
            this.inSleep = !0;
        }
        onGameHome() {
            $.cameraController.playHomeCamerAni(), this.initGame();
        }
        onGamePrepare() {}
        onGameStart() {
            this.inSleep = !1, Laya.stage.event(v.EVENT_READYGO), $.cameraController.playStartCamerAni();
        }
        onGameOver() {
            this.inSleep = !0;
        }
        onGameRelive() {
            this.inSleep = !1;
        }
        initGame() {
            this.destroyGame(), this.tracks = $.scenee3d.getChildByName("tracks").getComponent(X), 
            null != this.tracks && this.tracks.destroy(), this.tracks = $.scenee3d.getChildByName("tracks").addComponent(X), 
            this.roads = $.scenee3d.getChildByName("roads").getComponent(K), null != this.roads && this.roads.destroy(), 
            this.roads = $.scenee3d.getChildByName("roads").addComponent(K), Laya.StaticBatchManager.combine($.scenee3d.getChildByName("roads")), 
            d.data.currentCreateTrackLine = 0, d.data.playerKillCount = 0, d.data.gameFinish = !1, 
            d.data.playerRank = 0, this.tracks.init(d.data.curStage), this.roads.init(d.data.curStage), 
            this.player = V.Instance().initPlayer(1);
            let t = d.data.curStage;
            t > d.data.stageCount && (t = 1 + c.random(0, d.data.stageCount));
            let e = d.data.getStageData(t).ai, a = Math.floor(e.length / 2), i = Math.floor(e.length % 2), s = 4.5, o = 0;
            for (let t = 0; t < a; t++) for (let a = 0; a < 2; a++) {
                let i = new Laya.Vector3(4.5 - .5 * s - s * a, 0, c.random(10, 40) + 20 * t);
                V.Instance().initAi(Number(e[o]), i, o), o++;
            }
            if (i > 0) {
                s = 9 / i;
                for (let t = 0; t < i; t++) {
                    let i = new Laya.Vector3(4.5 - .5 * s - s * t, 0, c.random(10, 40) + 20 * a);
                    V.Instance().initAi(Number(e[o]), i, o), o++;
                }
            }
            $.cameraController.initCameraByPlayer(this.player);
        }
        destroyGame() {
            V.Instance().onDestroy(), C.Instance().onDestroy(), b.Instance().onDestroy(), H.Instance().onDestroy();
        }
        onUpdate() {
            if (!this.inSleep && !(Laya.timer.delta > 100) && this.player && (d.data.currentCreateTrackLine - this.player.mtransform.position.z < 100 && this.tracks.creatNextTracks(), 
            this.updateStageProgress(), this.roads.updateRoads(this.player.sprite3d), this.tracks.updateTracks(this.player.sprite3d), 
            this.treasurebox3d && 2 == this.handlerType)) if (this.player.mtransform.position.z - this.treasurebox3d.transform.position.z > 10) this.handlerTreasurebox(3); else {
                let t = this.player.mtransform.position.y + $.cameraController.rocketPos.transform.localPositionY;
                this.treasurebox3d.transform.localPositionY = t;
            }
        }
        onStageFinish() {
            Laya.SoundManager.stopSound("sound/accelerate.mp3"), Laya.SoundManager.stopSound("sound/lowspeed.mp3"), 
            $.cameraController.playSpeedEffect(!1), Laya.stage.mouseEnabled = !1, $.cameraController.playEndCamerAni(), 
            this.owner.timerOnce(3e3, this, () => {
                d.data.curStage = d.data.curStage + 1, Laya.stage.mouseEnabled = !0, Laya.stage.event(v.EVENT_PAUSE), 
                Laya.stage.event(t.GAME_WIN);
            });
        }
        onStageFail() {
            Laya.SoundManager.stopSound("sound/accelerate.mp3"), Laya.SoundManager.stopSound("sound/lowspeed.mp3"), 
            $.cameraController.playSpeedEffect(!1), Laya.stage.mouseEnabled = !1, Laya.stage.event(t.GAME_SLEEP), 
            Laya.timer.scale = 1, this.owner.timerOnce(1500, this, () => {
                Laya.stage.mouseEnabled = !0, Laya.stage.event(v.EVENT_PAUSE), Laya.stage.event(t.GAME_FAILED);
            });
        }
        updateStageProgress() {
            var e = this.player.mtransform.position.z / this.tracks.trackTotalLenght;
            e = Math.min(1, Math.max(0, e)), Laya.stage.event(t.Game_Progress_Update, e);
        }
        handlerTreasurebox(t) {
            if (this.handlerType = t, 0 == t) {
                this.treasurebox3d && (this.treasurebox3d.removeSelf(), this.treasurebox3d.destroy(!0));
                var e = J.LoadSprite3d(S.Sprite3d_Treasurebox);
                this.treasurebox3d = Z.GetSprite3d(e), this.treasurebox3d.name = S.Sprite3d_Treasurebox, 
                this.treasurebox3d.active = !0, $.cameraController.cameraApe.addChild(this.treasurebox3d), 
                this.treasurebox3d.transform.position = $.cameraController.rocketPos.transform.position.clone(), 
                this.treasurebox3d.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));
            } else if (1 == t) {
                if (this.treasurebox3d) {
                    let t = new Laya.Vector3();
                    Laya.Vector3.subtract(this.treasurebox3d.transform.position, this.player.mtransform.position, t), 
                    this.treasurebox3d.removeSelf(), this.treasurebox3d.destroy(!0), this.treasurebox3d = null, 
                    this.owner.timerOnce(300, this, () => {
                        H.Instance().addGoldsZ(this.player.sprite3d, 20, S.Sprite3d_Gold, 3, t), this.owner.timerOnce(500, this, () => {
                            this.owner.frameLoop(2, this, this.collectGold);
                        });
                    });
                }
            } else if (2 == t) {
                if (this.treasurebox3d) {
                    let t = this.treasurebox3d.transform.position.clone(), e = this.treasurebox3d.transform.rotationEuler.clone();
                    $.scenee3d.addChild(this.treasurebox3d), this.treasurebox3d.transform.position = t, 
                    this.treasurebox3d.transform.rotationEuler = e;
                }
            } else 3 == t && this.treasurebox3d && (this.treasurebox3d.removeSelf(), this.treasurebox3d.destroy(!0), 
            this.treasurebox3d = null);
        }
        collectGold() {
            let e = [], a = new Laya.Vector3(0, 1, 0), i = H.Instance().getGoldList();
            for (let t = i.length - 1; t >= 0; t--) {
                const s = i[t];
                let o = new Laya.Vector3(0, 0, 0);
                if (Laya.Vector3.lerp(s.transform.localPosition, a.clone(), .01 * c.random(2, 50), o), 
                s.transform.localPosition = o.clone(), Laya.Vector3.distance(s.transform.localPosition.clone(), a.clone()) < .5) {
                    console.log("金币");
                    let t = C.Instance().createSpriteEffect("ef_MT_Pickup", !1);
                    this.player.sprite3d.addChild(t), t.transform.position = this.player.mtransform.position.clone(), 
                    e.push(t), H.Instance().removeGold(s), Laya.SoundManager.playSound("sound/gold.mp3");
                }
            }
            if (0 == i.length) {
                this.owner.clearTimer(this, this.collectGold), d.data.gold = d.data.gold + l.gameSetting.commoncfg.box_gold, 
                Laya.stage.event(t.Game_Gold_Update);
                for (let t = 0; t < e.length; t++) console.log("销毁金币特效"), C.Instance().removeSpriteEffect(e[t]);
                e = [];
            }
        }
    }
    class Q extends h {
        constructor() {
            super(), this.touchId = -1, this.lastMouseX = 0, this.lastMouseY = 0, this.isMouseDown = !1, 
            this.coolDown = 0, this.coolTimer = 0, this.angle = 0, this.maxAngle = 359.99;
        }
        onAwake() {
            super.onAwake(), this.sightBox.visible = !1, this.shotMask.visible = !1;
        }
        onEnable() {
            super.onEnable(), Laya.stage.on(t.EnableSight, this, this.enableSight), 
            Laya.stage.on(t.DisableSight, this, this.disableSight), 
            Laya.stage.on(t.Game_Gold_Update, this, this.updateGold), Laya.stage.on(t.Game_Player_Rank_Update, this, this.updateRank), 
            Laya.stage.on(t.Game_Ai_Hp_Update, this, this.updateAiTip), Laya.stage.on(t.Game_Progress_Update, this, this.updateProgress), 
            Laya.stage.on(t.Game_GunProgress_Update, this, this.gunSkill), this.updateGold(), 
            this.stageLabel && (this.stageLabel.text = d.data.curStage.toString()), this.updateProgress(0);
        }
        onStart() {
            super.onStart(), 
            d.data.curStage < 3 ? (this.tipImge.visible = !0, this.tipImge.scale(1, 1), 
            Laya.Tween.to(this.tipImge, {
                scaleX: 0,
                scaleY: 0
            }, 500, null, null, 3e3)) : this.tipImge.visible = !1, this.coolCountDownBox.visible = !1, 
            Laya.stage.event(t.GAME_START);
        }
        onDisable() {
            super.onDisable(), Laya.stage.off(t.EnableSight, this, this.enableSight), Laya.stage.off(t.DisableSight, this, this.disableSight), 
            Laya.stage.off(t.Game_Gold_Update, this, this.updateGold), Laya.stage.off(t.Game_Player_Rank_Update, this, this.updateRank), 
            Laya.stage.off(t.Game_Ai_Hp_Update, this, this.updateAiTip), Laya.stage.off(t.Game_Progress_Update, this, this.updateProgress), 
            Laya.stage.off(t.Game_GunProgress_Update, this, this.gunSkill);
        }
        updateProgress(t) {
            this.stageprogresss.width = 65 + 215 * t;
        }
        updateGold() {
            this.goldLabel && (this.goldLabel.text = d.data.gold.toString());
        }
        updateRank(t) {
            this.rankLabel && (this.rankLabel.value = t.toString());
        }
        updateAiTip(t, e) {
            this.hpprogresss.width = 236 * t, this.aiTipBox.visible = !0, this.aiTipBox.scale(1, 1), 
            this.aiName.skin = "gameUI/" + e + "st.png", this.killLine.visible = t <= 0, Laya.Tween.to(this.aiTipBox, {
                scaleX: 0,
                scaleY: 0
            }, 100, null, null, 900);
        }
        enableSight() {
            this.isMouseDown = !1, this.sightBox.visible = !0, this.shotMask.visible = !0, this.initSight(), 
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart);
        }
        disableSight() {
            this.owner.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), this.sightBox.visible = !1, 
            this.shotMask.visible = !1, Laya.Tween.clearAll(this.sightBox);
        }
        initSight() {
            this.boxPos = $.cameraController.getTreasureboxScreenPos(), this.sightBox.y = this.boxPos.y + 50, 
            this.sightBox.x = this.boxPos.x - Q.MAX_MOVE, Laya.Tween.clearAll(this.sightBox), 
            this.startVerticalLineMove();
        }
        startVerticalLineMove() {
            let t = this.sightBox.x + 2 * Q.MAX_MOVE, e = this.sightBox.x;
            Laya.Tween.to(this.sightBox, {
                x: t
            }, Q.DURATION, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.sightBox, {
                    x: e
                }, Q.DURATION, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
                    this.startVerticalLineMove();
                }), 100);
            }), 100);
        }
        onTouchStart(t) {
            this.isMouseDown || (this.isMouseDown = !0, this.touchId = t.touchId, this.owner.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.fireRocket());
        }
        fireRocket() {
            Laya.Tween.clearAll(this.sightBox), this.sightBox.visible = !1, this.shotMask.visible = !1;
            let t = new Laya.Vector2(this.sightBox.x, this.sightBox.y), e = new Laya.Vector3();
            c.screen2worldPos($.scenee3d, $.camera, t, e), Laya.stage.event(v.EVENT_FIRE_ROCKET, e.x);
        }
        gunSkill() {
            let t = new Laya.Vector2();
            $.cameraController.world2ScreenPos(V.Instance().getPlayer().mtransform.position.clone(), t), 
            this.coolCountDownBox.x = t.x, this.coolCountDownBox.y = t.y - 260, this.coolCountDownBox.visible = !0, 
            this.coolTimer = d.data.gunatkintervaTime - 500, this.coolDown = this.coolTimer, 
            this.coolCountDown.graphics.clear(), this.owner.timerLoop(500, this, this.startGunSkill);
        }
        startGunSkill() {
            if (this.angle < this.maxAngle) {
                this.coolDown -= 500;
                let t = this.coolTimer - this.coolDown;
                this.angle = t * (360 / this.coolTimer), this.angle = Math.min(this.maxAngle, this.angle), 
                this.coolCountDown.graphics.drawPie(38.5, 38.5, 40, 0, this.angle, "#ffffff");
            }
            this.coolDown <= 0 && this.endGunSkill();
        }
        endGunSkill() {
            Laya.SoundManager.playSound("sound/bullet.mp3"), Laya.timer.clear(this, this.startGunSkill), 
            this.angle = 0, this.coolDown = 0, this.coolCountDown.graphics.clear(), this.coolCountDown.graphics.drawPie(38.5, 38.5, 40, 0, this.maxAngle, "#ffffff"), 
            this.coolCountDownBox.visible = !1;
        }
    }
    Q.MAX_MOVE = 200, Q.DURATION = 3e3;
    class tt {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("compUI/GameHomeUI.ts", m), t("compUI/LoadingUI.ts", p), t("compUI/GameReliveUI.ts", u), 
            t("compUI/GameWinUI.ts", y), t("compUI/GamePlayUI.ts", Q);
        }
    }
    tt.width = 750, tt.height = 1334, tt.scaleMode = "fixedauto", tt.screenMode = "none", 
    tt.alignV = "top", tt.alignH = "left", tt.startScene = "view/ad/FloatAd.scene", 
    tt.sceneRoot = "", tt.debug = !1, tt.stat = !1, tt.physicsDebug = !1, tt.exportSceneToJson = !0, 
    tt.init();
    var et = zs.laya.ObjectPool;
    class at extends l {
        constructor() {
            super(), this.sceneLogic = null;
        }
        onAwake() {
            super.onAwake(), Laya.stage.once(t.LAUNCH_COMPLETED, this, this.onGameLaunchReady), 
            Laya.stage.on(t.UI_VIEW_CLOSED, this, this.onViewClosed), Laya.stage.on(t.UI_VIEW_OPENED, this, this.onViewOpened), 
            Laya.stage.on(t.DATA_SETTING_UPDATE, this, this.updateSetting), Laya.stage.on(t.DATA_LOGIN_INFO_UPDATE, this, this.updatePlayerInfo);
        }
        onDestroy() {
            this.sceneLogic = null, Laya.stage.off(t.UI_VIEW_CLOSED, this, this.onViewClosed), 
            Laya.stage.off(t.UI_VIEW_OPENED, this, this.onViewOpened), Laya.stage.off(t.DATA_SETTING_UPDATE, this, this.updateSetting), 
            Laya.stage.off(t.DATA_LOGIN_INFO_UPDATE, this, this.updatePlayerInfo);
        }
        onGameLaunchReady(e) {
            et.ClearCache();
            var a = Laya.loader.getRes("config/trackCfg.json");
            d.initTrackData(a), 
            this.updateSetting();
            for (let t = 0; t < S.Mat_Role.length; t++) {
                let e = S.Mat_Role[t], a = S.MaterialPath + e + ".lmat";
                c.changMat(a, null);
            }
            Laya.stage.frameOnce(20, this, () => {
                e && (this.sceneLogic = Laya.stage.addChildAt(e, 0).addComponent($)), Laya.stage.event(t.GAME_HOME);
            });
        }
        onViewClosed(t) {
            console.log(`${t} closed`);
        }
        onViewOpened(t) {
            console.log(`${t} opened`);
        }
        updateSetting() {
            d.initGameData();
        }
        updatePlayerInfo(t) {
            d.updatePlayerInfo(t);
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(tt.width, tt.height) : Laya.init(tt.width, tt.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.bgColor = "#ffffff", Laya.stage.scaleMode = "exactfit";
            //  Laya.stage.screenMode = tt.screenMode, 
            Laya.stage.alignH ="center";
            Laya.URL.exportSceneToJson = tt.exportSceneToJson, console.log("2"), (tt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            tt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), tt.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.stage.addComponent(at);
        }
    }();
}();