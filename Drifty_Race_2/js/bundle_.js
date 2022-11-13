var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var __extends = undefined && undefined.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var a in t) {
            t.hasOwnProperty(a) && (e[a] = t[a]);
        }
    };
    return function(t, a) {
        function i() {
            this.constructor = t;
        }
        e(t, a), t.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype, 
        new i());
    };
}();

!function() {
    function e(t, a, i) {
        function n(r, s) {
            if (!a[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var c = a[r] = {
                    exports: {}
                };
                t[r][0].call(c.exports, function(e) {
                    return n(t[r][1][e] || e);
                }, c, c.exports, e, t, a, i);
            }
            return a[r].exports;
        }
        for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
            n(i[r]);
        }
        return n;
    }
    return e;
}()({
    1: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./script/Game")), r = i(e("./script/Clearing")), s = i(e("./script/comp/WxappLite")), l = i(e("./script/comp/WxappBanner")), h = i(e("./script/Collect")), c = i(e("./script/Home")), u = i(e("./script/comp/WxgameList")), f = i(e("./script/Login")), m = i(e("./script/Over")), y = i(e("./script/Rank")), d = i(e("./script/Skin")), p = i(e("./script/comp/Wxapp")), v = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return n(e, null, [ {
                key: "init",
                value: function value() {
                    var e = Laya.ClassUtils.regClass;
                    e("script/Game.js", o.default), e("script/Clearing.js", r.default), e("script/comp/WxappLite.js", s.default), 
                    e("script/comp/WxappBanner.js", l.default), e("script/Collect.js", h.default), e("script/Home.js", c.default), 
                    e("script/comp/WxgameList.js", u.default), e("script/Login.js", f.default), e("script/Over.js", m.default), 
                    e("script/Rank.js", y.default), e("script/Skin.js", d.default), e("script/comp/Wxapp.js", p.default);
                }
            } ]), e;
        }();
        a.default = v, v.width = 750, v.height = 1334, v.scaleMode = "showall", v.screenMode = "none", 
        v.alignV = "middle", v.alignH = "center", v.startScene = "views/login.scene", v.sceneRoot = "", 
        v.debug = !1, v.stat = !1, v.physicsDebug = !1, v.exportSceneToJson = !0, v.init();
    }, {
        "./script/Clearing": 3,
        "./script/Collect": 4,
        "./script/Game": 5,
        "./script/Home": 7,
        "./script/Login": 8,
        "./script/Over": 10,
        "./script/Rank": 11,
        "./script/Skin": 12,
        "./script/comp/Wxapp": 15,
        "./script/comp/WxappBanner": 16,
        "./script/comp/WxappLite": 18,
        "./script/comp/WxgameList": 19
    } ],
    2: [ function(e, t, a) {
        "use strict";
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("./GameConfig"));
        new (function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), 
                window.LayaSample || (window.LayaSample = {}), 
                LayaSample.screen = {}, 
                LayaSample.gameConfig = n.default;
                var t = Laya.Browser.height / Laya.Browser.width, 
                a = Laya.Browser.onMobile ? t * n.default.width : n.default.height;
                LayaSample.screen.offsetTop = (a - n.default.height) / 2, 
                LayaSample.screen.realPxRatio = a / Laya.Browser.clientHeight, 
                LayaSample.screen.allScreen = t > 17 / 9, 
                window.Laya3D ? Laya3D.init(n.default.width, a) : Laya.init(n.default.width, n.default.height, Laya.WebGL), 
                Laya.Physics && Laya.Physics.enable(), 
                Laya.DebugPanel && Laya.DebugPanel.enable(), 
                Laya.stage.scaleMode = n.default.scaleMode, 
                Laya.stage.screenMode = n.default.screenMode, 
                Laya.stage.alignV = n.default.alignV, 
                Laya.stage.alignH = n.default.alignH, 
                Laya.URL.exportSceneToJson = n.default.exportSceneToJson, 
                (n.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
                n.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), 
                n.default.stat && Laya.Stat.show(), 
                Laya.alertGlobalError = !0, 
                Laya.ResourceVersion.enable("version.json", 
                    Laya.Handler.create(this, this.onVersionLoaded), 
                    Laya.ResourceVersion.FILENAME_VERSION);
            }
            return i(e, [ {
                key: "onVersionLoaded",
                value: function value() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", 
                        Laya.Handler.create(this, this.onConfigLoaded)), 
                    Laya.Browser.onWeiXin && Laya.MiniAdpter.init(!0);
                }
            }, {
                key: "onConfigLoaded",
                value: function value() {
                    n.default.startScene && Laya.Scene.open(n.default.startScene);
                }
            } ]), e;
        }())();
    }, {
        "./GameConfig": 1
    } ],
    3: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("./GameContext")), o = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.btnShare = null, e._appCat = 5, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), 
                    this.initUI(), 
                    this.initEvent();
                }
            }, {
                key: "initData",
                value: function value() {
                    LayaSample.commonData.goonCount = 0, 
                    LayaSample.commonData.nowLevel = n.default.getInstance().currentLevel, 
                    LayaSample.wxMgr.settlementLevel(LayaSample.commonData.nowLevel);
                    var e = LayaSample.storageMgr.getSigninTime();
                    e < 2 && LayaSample.storageMgr.setSigninTime(e += 1);
                }
            }, {
                key: "onOpened",
                value: function value() {
                    LayaSample.commonData.existInterAd && LayaSample.wxMgr.showInterstitialAd();
                }
            }, {
                key: "init",
                value: function value(e) {
                    void 0 === this.isPassed && (LayaSample.commonData.isPassed = e), 
                    this.isPassed = LayaSample.commonData.isPassed, 
                    this.isPassed && (this.sprPassStatus.texture = "ui/icon_succeed.png", this.btnPlay.skin = "ui/btn_next.png"), 
                    this.levelNumber.value = n.default.getInstance().currentLevel;
                }
            }, {
                key: "initUI",
                value: function value() {
                    this.sprPassStatus = this.getChildByName("level").getChildByName("sprPassStatus"), 
                    this.levelNumber = this.getChildByName("level").getChildByName("levelNumber");
                    var e = this.getChildByName("bottomPanel");
                    this.btnBack = e.getChildByName("btnBack"), 
                    this.btnPlay = e.getChildByName("btnPlay");
                    this.itemList = this.getChildByName("itemList");
                    platform.getInstance().initList(this.itemList);
                    this.cargames = this.getChildByName("cargames");
                    this.cargames.on(Laya.Event.MOUSE_DOWN,this,()=>{
                        platform.getInstance().navigate("GAME","LOGO");
                    });
                    //this.btnShare = e.getChildByName("btnShare");
                    //this.getChildByName("topPanel").getChildByName("collectHand").visible = !LayaSample.storageMgr.isCollect();
                }
            }, {
                key: "initEvent",
                value: function value() {
                    //LayaSample.utils.addClickEvent(this.btnShare, this, this.onShareClick, 14), 
                    LayaSample.utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick, 14), 
                    LayaSample.utils.addClickEvent(this.btnBack, this, this.onWxWakeEvent, 14), 
                    LayaSample.glEvent.on("share_back_event", this, this.onShareBackEvent), 
                    LayaSample.glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent), 
                    LayaSample.glEvent.on("wx_wake_event", this, this.onWxWakeEvent), 
                    LayaSample.glEvent.on("cancel_open_app_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    Laya.timer.clearAll(this), 
                    LayaSample.glEvent.off("share_back_event", this, this.onShareBackEvent), 
                    LayaSample.glEvent.off("ad_video_close_event", this, this.onVideoCloseEvent), 
                    LayaSample.glEvent.off("wx_wake_event", this, this.onWxWakeEvent), 
                    LayaSample.glEvent.off("cancel_open_app_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "onShareClick",
                value: function value() {
                    LayaSample.wxMgr.shareFriend(0, !0);
                }
            }, {
                key: "onPlayGameClick",
                value: function value() {
                    platform.getInstance().showInterstitial(()=>{
                        this.close();
                        var e = this.isPassed ? "load_game_event" : "reload_game_event";
                        LayaSample.glEvent.event(e, {});
                    });
                }
            }, {
                key: "onBackClick",
                value: function value() {
                    Laya.timer.clearAll(), n.default.getInstance().IsPlay = !1, n.default.getInstance().IsGameOver = !1, 
                    LayaSample.commonData.isNoAds = !0;
                    var e = LayaSample.wxMgr.getWxappList(3);
                    this.close(), e.length > 0 ? Laya.Scene.open("views/wxapp.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    })) : Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    }));
                    var t = this.isPassed ? "load_game_event" : "reload_game_event";
                    LayaSample.glEvent.event(t, {});
                }
            }, {
                key: "onWxWakeEvent",
                value: function value() {
                    Laya.timer.clearAll(), n.default.getInstance().IsPlay = !1, n.default.getInstance().IsGameOver = !1, 
                    LayaSample.commonData.isNoAds = !0;
                    var e = LayaSample.wxMgr.getWxappList(3);
                    this.close(), e.length > 0 ? Laya.Scene.open("views/wxapp.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    })) : Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    }));
                    var t = this.isPassed ? "load_game_event" : "reload_game_event";
                    LayaSample.glEvent.event(t, {});
                }
            }, {
                key: "onShareBackEvent",
                value: function value(e) {
                    e.isShare ? console.log("分享成功") : console.log("分享失败");
                }
            } ]), t;
        }();
        a.default = o;
    }, {
        "./GameContext": 6
    } ],
    4: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    LayaSample.commonData.isNoAds = !0, LayaSample.wxMgr.hideBannerAd(), this.initData(), 
                    this.initUI(), this.initEvent();
                }
            }, {
                key: "initData",
                value: function value() {}
            }, {
                key: "initUI",
                value: function value() {
                    this.btnCancel = this.getChildByName("btnCancel");
                }
            }, {
                key: "initEvent",
                value: function value() {
                    LayaSample.utils.addClickEvent(this.btnCancel, this, this.onCancelClick);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    LayaSample.commonData.isNoAds = !1, LayaSample.wxMgr.showBannerAd();
                }
            }, {
                key: "onCancelClick",
                value: function value() {
                    this.close();
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    5: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./components/CarComponent")), r = (i(e("./components/AIComponent")), 
        i(e("./components/CameraFollow"))), s = (i(e("./components/GameFinishComponent")), 
        i(e("./MapCreator"))), l = (i(e("../GameConfig")), i(e("./GameContext"))), h = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), n(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), this.initUI(), this.initEvent(), this.loadScene(), this.loadModel(), 
                    this.setBackground();
                }
            }, {
                key: "onOpened",
                value: function value() {}
            }, {
                key: "initData",
                value: function value() {
                    LayaSample.gameInstance = this;
                    var e = LayaSample.storageMgr.getGameStatus();
                    this.level = e.maxLevel + 1, this.loginPlay = !1, this.playCount = 0, this.curSky = 0, 
                    this.isShowSkin = !1;
                    var t = Laya.Loader.getRes("res/scenes/matMgr/Conventional/matMgr.lh");
                    t && (this.matMgr = t.getChildAt(0).meshRenderer.materials, this.colors = [ "#C7EBFF", "#F0E291", "#DDFFFF", "#92E0FF", "#94F2DA", "#B4FFE3" ]);
                    var a = Laya.Loader.getRes("res/scenes/carEffects/Conventional/carEffects.lh");
                    if (a) {
                        var i = a.getChildAt(0);
                        this.driftFire = i.getChildAt(0), this.driftSmoke = i.getChildAt(1), this.accelerateSmoke = i.getChildAt(2), 
                        this.driftTrail = i.getChildAt(3);
                    }
                    LayaSample.commonData.showGuideCount = LayaSample.commonData.totalLoginNum < 4 ? 2 : 0;
                }
            }, {
                key: "initUI",
                value: function value() {
                    this.topUI = this.getChildByName("topPanel"), this.guide = this.getChildByName("guide"), 
                    this.lblTimer = this.getChildByName("lblTimer"), this.lastLevelFont = this.topUI.getChildByName("lastlevelNumber"), 
                    this.nextLevelFont = this.topUI.getChildByName("nextlevelNumber"), 
                    this.tracksProgress = this.topUI.getChildByName("tracksProgress"), 
                    this.driftGuide = this.getChildByName("driftyGuide"), this.topUI.y = Laya.stage.height > 1334 ? (Laya.stage.height - 1334) / 2 + 116 : 116, 
                    this.lastLevelFont.value = this.level, this.nextLevelFont.value = this.level + 1, 
                    this.tracksProgress.value = 0, this.topUI.visible = !1, this.guide.visible = !1, 
                    this.lblTimer.visible = !1, this.driftGuide.visible = !1;
                }
            }, {
                key: "initEvent",
                value: function value() {
                    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), 
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), 
                    LayaSample.glEvent.on("play_game_event", this, this.onPlayGameEvent), 
                    LayaSample.glEvent.on("init_game_event", this, this.onInitGameEvent), 
                    LayaSample.glEvent.on("goon_game_event", this, this.onGoonGameEvent), 
                    LayaSample.glEvent.on("over_game_event", this, this.onOverGameEvent), 
                    LayaSample.glEvent.on("finish_game_event", this, this.onFinishGameEvent), 
                    LayaSample.glEvent.on("load_game_event", this, this.onLoadGameEvent), 
                    LayaSample.glEvent.on("reload_game_event", this, this.onReloadGameEvent), 
                    LayaSample.glEvent.on("change_skin_event", this, this.onChangeSkinEvent), 
                    LayaSample.glEvent.on("drift_guide_event", this, this.onDriftGuideEvent), 
                    LayaSample.glEvent.on("speed_up_event", this, this.onSpeedUpEvent);
                }
            }, {
                key: "onWakeEvent",
                value: function value() {}
            }, {
                key: "onSleepEvent",
                value: function value() {}
            }, {
                key: "loadScene",
                value: function value() {
                    var e = Laya.loader.getRes("res/scenes/raceScene/Conventional/ResScene.ls");
                    Laya.stage.addChild(e), Laya.stage.setChildIndex(e, 0), this.mainScene = e;
                }
            }, {
                key: "loadModel",
                value: function value() {
                    this.mapCreator = new s.default(), this.mapCreator.levelSelect(this.level), l.default.getInstance().currentLevel = this.level;
                }
            }, {
                key: "mapCreatedFinish",
                value: function value() {
                    if (void 0 == this.car) {
                        var e = this.mainScene.addChild(Laya.Loader.getRes("res/models/car/Conventional/car.lh").getChildByName("Car")), t = new Laya.BoxColliderShape(.7, .66, 1.86), a = e.addComponent(Laya.Rigidbody3D);
                        a.mass = 100, a.colliderShape = t, a.isKinematic = !0, this.trail1 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_FL"), !1), 
                        this.trail2 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_FR"), !1), 
                        this.trail3 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_BL"), !1), 
                        this.trail4 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_BR"), !1), 
                        this.smoke1 = Laya.Sprite3D.instantiate(this.driftSmoke, e.getChildByName("Wheel_FL"), !1), 
                        this.smoke2 = Laya.Sprite3D.instantiate(this.driftSmoke, e.getChildByName("Wheel_FR"), !1), 
                        this.smoke3 = Laya.Sprite3D.instantiate(this.driftSmoke, e.getChildByName("Wheel_BL"), !1), 
                        this.smoke4 = Laya.Sprite3D.instantiate(this.driftSmoke, e.getChildByName("Wheel_BR"), !1), 
                        this.fire_BL = Laya.Sprite3D.instantiate(this.driftFire, e, !1), 
                        this.fire_BR = Laya.Sprite3D.instantiate(this.driftFire, e, !1), 
                        this.acceSmoke = Laya.Sprite3D.instantiate(this.accelerateSmoke, e, !1, new Laya.Vector3(0, 0, -.522)), 
                        this.smoke1.transform.scale = new Laya.Vector3(1.3, 1.3, 1.3), 
                        this.smoke2.transform.scale = new Laya.Vector3(1.3, 1.3, 1.3), 
                        this.smoke3.transform.scale = new Laya.Vector3(1.8, 1.8, 1.8), 
                        this.smoke4.transform.scale = new Laya.Vector3(1.8, 1.8, 1.8), 
                        this.fire_BL.name = "DriftFire_BL", 
                        this.fire_BR.name = "DriftFire_BR", 
                        this.firePos_BL = new Laya.Vector3(-.27, .206, -.8), 
                        this.firePos_BR = new Laya.Vector3(.27, .206, -.8), 
                        this.fire_BL.transform.localPosition = this.firePos_BL, 
                        this.fire_BR.transform.localPosition = this.firePos_BR, 
                        this.car = e.addComponent(o.default);
                        var i = this.mainScene.addChild(Laya.Loader.getRes("res/models/Conventional/camera.lh"));
                        this.mainCamera = i;
                        var n = Laya.Loader.getRes("res/models/Conventional/bg.lh");
                        n.transform.scale = new Laya.Vector3(3, 3, 3), 
                        this.mainCamera.addChild(n), 
                        this.cf = i.addComponent(r.default);
                    }
                    this.playCount > 0 && this.playCount % 3 == 0 ? this.changeSky() : this.mapCreator.setTrapMat(this.matMgr[this.curSky]), 
                    this.playCount++, this.car.init(), this.cf.init(), l.default.getInstance().IsGameOver && this.onPlayGameEvent();
                }
            }, {
                key: "initGame",
                value: function value() {
                    this.topUI.visible = !1, this.isFinished = !1, this.maxProgress = 0, this.mapCreatedFinish();
                }
            }, {
                key: "setBackground",
                value: function value() {
                    var e = LayaSample.utils.getRGB("#C7EBFF"), t = this.mainScene;
                    t.enableFog = !0, t.fogColor = e, t.fogStart = 20, t.fogRange = 80;
                }
            }, {
                key: "progressFrame",
                value: function value() {
                    var e = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.subtract(this.car.owner.transform.position, this.terminalPos, e);
                    var t = Laya.Vector3.scalarLength(e), 
                    a = (this.maxDistance - t) / this.maxDistance;
                    this.maxProgress > a ? a = this.maxProgress : this.maxProgress = a, 
                    this.tracksProgress.value = a, 
                    t <= 7 && (this.tracksProgress.value = 1, Laya.timer.clear(this, this.progressFrame));
                }
            }, {
                key: "onPlayGameEvent",
                value: function value() {
                    if (this.topUI.visible = !0, LayaSample.commonData.isNoAds = !0, LayaSample.wxMgr.hideBannerAd(), 
                    LayaSample.wxMgr.restartGame(), LayaSample.glEvent.on("wx_wake_event", this, this.onWakeEvent), 
                    LayaSample.glEvent.on("wx_sleep_event", this, this.onSleepEvent), 0 == this.isShowSkin && LayaSample.commonData.existVideoAd) return this.onChangeSkinEvent({
                        select: 0
                    }), this.isShowSkin = !0, void Laya.Scene.open("views/skin.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e), LayaSample.commonData.isNoAds = !1;
                    }));
                    if (LayaSample.commonData.loginNum && 0 == this.loginPlay && LayaSample.commonData.loginNum <= 3 && Laya.Browser.onWeiXin) this.loginPlay = !0, 
                        this.guide.visible = !0; 
                    else {
                        this.isShowSkin = !1, 
                        LayaSample.soundMgr.play("accelerate");
                        var e = new Laya.Vector3();
                        this.terminalPos = this.mapCreator.getTerminalPos(), 
                        Laya.Vector3.subtract(this.car.owner.transform.position, this.terminalPos, e), 
                        this.maxDistance = Laya.Vector3.scalarLength(e), 
                        Laya.timer.frameLoop(1, this, this.progressFrame), 
                        l.default.getInstance().IsPlay = !0, 
                        l.default.getInstance().IsGameOver = !1, 
                        this.car.IsStart = !0, 
                        this.cf.setTarget(this.car, this.mapCreator.getAllCurves());
                    }
                }
            }, {
                key: "onInitGameEvent",
                value: function value() {
                    this.initGame();
                }
            }, {
                key: "onGoonGameEvent",
                value: function value(e) {
                    LayaSample.commonData.isNoAds = !0, 
                    LayaSample.wxMgr.hideBannerAd(), 
                    LayaSample.commonData.goonCount++, 
                    this.car.goonInit(this.mapCreator.getAllForthright()), 
                    this.cf.goonInit(), 
                    this.goonTimer = 0, 
                    this.goonCount = 3, 
                    this.lblTimer.visible = !0, 
                    this.lblTimer.text = "3", 
                    Laya.timer.frameLoop(1, this, this.goonGameTimer);
                }
            }, {
                key: "goonGameTimer",
                value: function value() {
                    this.goonTimer += Laya.timer.delta;
                    var e = this.goonTimer / 1e3;
                    this.lblTimer.scaleX = .5 * e + 1, this.lblTimer.scaleY = .5 * e + 1, this.lblTimer.alpha = 1 - e, 
                    this.goonTimer > 1e3 && (this.lblTimer.scaleX = 1, this.lblTimer.scaleY = 1, this.lblTimer.alpha = 1, 
                    this.goonTimer = 0, this.lblTimer.text = --this.goonCount), 0 == this.goonCount && (this.cf.canFollow = !this.isFinished, 
                    this.lblTimer.visible = !1, l.default.getInstance().IsPlay = !0, l.default.getInstance().IsGameOver = !1, 
                    Laya.timer.clear(this, this.goonGameTimer), Laya.timer.frameLoop(1, this, this.progressFrame));
                }
            }, {
                key: "onOverGameEvent",
                value: function value() {
                    this.car.IsStart = !1, 
                    this.cf.stopFollow(), 
                    l.default.getInstance().IsPlay = !1, 
                    l.default.getInstance().IsGameOver = !0, 
                    LayaSample.glEvent.off("wx_wake_event", this, this.onWakeEvent), 
                    LayaSample.glEvent.off("wx_sleep_event", this, this.onSleepEvent), 
                    Laya.timer.clear(this, this.progressFrame);
                }
            }, {
                key: "onFinishGameEvent",
                value: function value() {
                    var e = new Laya.Sprite3D("parent"), 
                    t = new Laya.Sprite3D("child"), 
                    a = this.mapCreator.getFinishLine();
                    e.transform.position = a.transform.position, 
                    e.transform.rotationEuler = a.transform.rotationEuler, 
                    e.addChild(t), 
                    t.transform.localPosition = new Laya.Vector3(6, 0, 10);
                    var i = e.transform.rotationEuler.y > 90 ? e.transform.rotationEuler.y - 130 : e.transform.rotationEuler.y + 230;
                    t.transform.rotationEuler = new Laya.Vector3(15, i, 0), 
                    this.cf.finishGame(t), 
                    LayaSample.wxMgr.playVibrateShort(), 
                    LayaSample.glEvent.off("wx_wake_event", this, this.onWakeEvent), 
                    LayaSample.glEvent.off("wx_sleep_event", this, this.onSleepEvent), 
                    this.isFinished = !0;
                }
            }, {
                key: "onLoadGameEvent",
                value: function value() {
                    this.level++, this.mapCreator.levelSelect(this.level), this.lastLevelFont.value = this.level, 
                    this.nextLevelFont.value = this.level + 1, l.default.getInstance().currentLevel = this.level;
                }
            }, {
                key: "onReloadGameEvent",
                value: function value() {
                    this.mapCreator.reloadMap(), 
                    this.lastLevelFont.value = this.level, 
                    this.nextLevelFont.value = this.level + 1, 
                    l.default.getInstance().currentLevel = this.level;
                }
            }, {
                key: "onChangeSkinEvent",
                value: function value(e) {
                    if (this.car.owner.transform.position = new Laya.Vector3(0, -1e3, 0), void 0 == this.skins) {
                        this.skins = this.mainScene.addChild(Laya.Loader.getRes("res/models/carSkins/Conventional/carSkins.lh").getChildAt(0));
                        for (var t = 0; t < this.skins.numChildren; t++) {
                            this.skins.getChildAt(t).transform.position = new Laya.Vector3(0, -1e3, 0);
                        }
                    }
                    switch (e.select) {
                      case 1:
                        var a = this.skins.getChildByName("YellowCar"), 
                        i = new Laya.BoxColliderShape(.7, .66, 1.86);
                        this.changeSkin(a, i);
                        break;

                      case 2:
                        var a = this.skins.getChildByName("Bus"), 
                        i = new Laya.BoxColliderShape(.7, .66, 1.86);
                        this.changeSkin(a, i);
                        break;

                      case 3:
                        var a = this.skins.getChildByName("PoliceCar"), 
                        i = new Laya.BoxColliderShape(.7, .66, 1.86);
                        this.changeSkin(a, i);
                        break;

                      case 4:
                        var a = this.skins.getChildByName("PinkCar"), 
                        i = new Laya.BoxColliderShape(.7, .66, 1.86);
                        this.changeSkin(a, i);
                        break;

                      default:
                        var a = this.mainScene.getChildByName("Car"), 
                        i = new Laya.BoxColliderShape(.7, .66, 1.86);
                        this.changeSkin(a, i);
                    }
                    this.car.init();
                }
            }, {
                key: "onDriftGuideEvent",
                value: function value() {
                    this.car.IsStart = !1, 
                    this.cf.IsShowGuide = !0, 
                    this.driftGuide.visible = !0, 
                    this.finger = this.driftGuide.getChildByName("sprFinger"), 
                    this.circle1 = this.driftGuide.getChildByName("sprCircle1"), 
                    this.circle2 = this.driftGuide.getChildByName("sprCircle2"), 
                    Laya.timer.loop(400, this, this.guideAnim), 
                    this.isShowDriftGuide = !0, 
                    LayaSample.commonData.showGuideCount--;
                }
            }, {
                key: "guideAnim",
                value: function value() {
                    this.finger.x = this.finger.x - 10, this.finger.y = this.finger.y - 10, this.circle1.visible = !1, 
                    this.circle2.visible = !1, Laya.timer.once(100, this, function() {
                        this.circle1.visible = !0;
                    }), Laya.timer.once(150, this, function() {
                        this.circle2.visible = !0;
                    }), Laya.timer.once(200, this, function() {
                        this.finger.x = this.finger.x + 10, this.finger.y = this.finger.y + 10;
                    });
                }
            }, {
                key: "onSpeedUpEvent",
                value: function value() {
                    this.cf.speedUp();
                }
            }, {
                key: "onMouseDownEvent",
                value: function value() {
                    if (this.guide.visible && !l.default.getInstance().IsPlay && Laya.Browser.onWeiXin) 
                        return this.guide.visible = !1, 
                    void this.onPlayGameEvent();
                    l.default.getInstance().IsPlay 
                    && (this.isShowDriftGuide 
                        ? (this.isShowDriftGuide = !1, 
                            this.car.IsStart = !0, 
                            this.driftGuide.visible = !1, 
                            this.cf.IsShowGuide = !1, 
                            Laya.timer.clear(this, this.guideAnim), 
                            this.car.carDrifty(), 
                            this.cf.IsRight = !this.cf.IsRight) 
                        : this.car && this.car.canDrifty && 0 == LayaSample.commonData.showGuideCount && (this.car.carDrifty(), 
                            this.cf.IsRight = !this.cf.IsRight));
                }
            }, {
                key: "onMouseUpEvent",
                value: function value() {
                    void 0 != this.car && (this.car.IsBraking = !1);
                }
            }, {
                key: "changeSky",
                value: function value() {
                    var e = 1e3 * Math.random() % 6, 
                    t = Math.floor(e);
                    t >= 6 && (t = 0);
                    var a = LayaSample.utils.getRGB(this.colors[t]);
                    this.mainScene.fogColor = a, 
                    this.mapCreator.setTrapMat(this.matMgr[t]), 
                    this.curSky = t;
                }
            }, {
                key: "changeSkin",
                value: function value(e, t) {
                    if (this.car = e.getComponent(o.default), void 0 == this.car) {
                        var a = e.addComponent(Laya.Rigidbody3D);
                        a.mass = 100, a.colliderShape = t, a.isKinematic = !0, this.setEffect(e), this.car = e.addComponent(o.default);
                    } else this.setEffect(e);
                }
            }, {
                key: "setEffect",
                value: function value(e) {
                    void 0 == e.getChildByName("Wheel_FL").getChildByName("Trail") && (this.trail1 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_FL"), !1), 
                    this.trail2 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_FR"), !1), 
                    this.trail3 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_BL"), !1), 
                    this.trail4 = Laya.Sprite3D.instantiate(this.driftTrail, e.getChildByName("Wheel_BR"), !1)), 
                    "Bus" == e.name ? (this.firePos_BL.setValue(-.27, .206, -1.2), this.firePos_BR.setValue(.27, .206, -1.2)) : (this.firePos_BL.setValue(-.27, .206, -.8), 
                    this.firePos_BR.setValue(.27, .206, -.8)), this.fire_BL.transform.localPosition = this.firePos_BL, 
                    this.fire_BR.transform.localPosition = this.firePos_BR, e.getChildByName("Wheel_FL").addChild(this.smoke1), 
                    e.getChildByName("Wheel_FR").addChild(this.smoke2), e.getChildByName("Wheel_BL").addChild(this.smoke3), 
                    e.getChildByName("Wheel_BR").addChild(this.smoke4), e.addChild(this.fire_BL), e.addChild(this.fire_BR), 
                    e.addChild(this.acceSmoke);
                }
            } ]), t;
        }();
        a.default = h;
    }, {
        "../GameConfig": 1,
        "./GameContext": 6,
        "./MapCreator": 9,
        "./components/AIComponent": 20,
        "./components/CameraFollow": 21,
        "./components/CarComponent": 22,
        "./components/GameFinishComponent": 23
    } ],
    6: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.tracks = new Array(), this.isPlay = !1, this.isGameOver = !1;
            }
            return i(e, [ {
                key: "setTracks",
                value: function value(e) {
                    var t = this;
                    this.tracks.length > 0 && (this.tracks = []), e.forEach(function(e) {
                        t.tracks.push(e);
                    });
                }
            }, {
                key: "getTracks",
                get: function get() {
                    return this.tracks;
                }
            }, {
                key: "IsPlay",
                get: function get() {
                    return this.isPlay;
                },
                set: function set(e) {
                    this.isPlay = e;
                }
            }, {
                key: "IsGameOver",
                get: function get() {
                    return this.isGameOver;
                },
                set: function set(e) {
                    this.isGameOver = e;
                }
            }, {
                key: "currentLevel",
                get: function get() {
                    return this.level;
                },
                set: function set(e) {
                    this.level = e;
                }
            } ], [ {
                key: "getInstance",
                value: function value() {
                    return void 0 === this.current && (this.current = new e()), this.current;
                }
            } ]), e;
        }();
        a.default = n;
    }, {} ],
    7: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), 
                    this.initUI(), 
                    this.setWxapp(0), 
                    this.setWxapp(1), 
                    this.setWxapp(2), 
                    this.setWxapp(3), 
                    this.initEvent(), 
                    this.initSound();
                }
            }, {
                key: "initSound",
                value: function value() {
                    var e = LayaSample.storageMgr.isPlaySound();
                    this.setSound(!1), 
                    Laya.timer.once(100, this, function() {
                        this.setSound(e);
                    });
                    // LayaSample.soundMgr.play("finish"), 
                    // LayaSample.soundMgr.play("hit"), 
                    // LayaSample.soundMgr.play("drift_1"), 
                    // LayaSample.soundMgr.play("drift_2"), 
                    // LayaSample.soundMgr.play("accelerate");
                }
            }, {
                key: "onOpened",
                value: function value() {
                    LayaSample.commonData.needWxAuthorize && (LayaSample.wxMgr.showAuthorizeBtn(!0), 
                    LayaSample.commonData.needWxAuthorize = !1);
                }
            }, {
                key: "initData",
                value: function value() {
                    1103 != LayaSample.commonData.launchOptions.scene && 1104 != LayaSample.commonData.launchOptions.scene || LayaSample.storageMgr.setCollect(!0);
                }
            }, {
                key: "initUI",
                value: function value() {
                    var e = this.getChildByName("topPanel"), 
                    t = e.getChildByName("soundSetting");
                    this.soundOn = t.getChildByName("on"), 
                    this.soundOn.visible = !1, 
                    this.soundOff = t.getChildByName("off"), 
                    this.soundOff.visible = !1, 
                    this.btnSound = t.getChildByName("btnSound");
                    //var a = e.getChildByName("vibrateSetting");
                    //this.vibrateOn = a.getChildByName("on"), 
                    //this.vibrateOn.visible = !1, 
                    //this.vibrateOff = a.getChildByName("off"), 
                    //this.vibrateOff.visible = !1, 
                    //this.btnVibrate = a.getChildByName("btnVibrate"), 
                    //this.setVibrate(LayaSample.storageMgr.isPlayVibrate());
                    //e.getChildByName("collectHand").visible = !LayaSample.storageMgr.isCollect();
                    var i = this.getChildByName("bottomui");
                    this.btnPlay = i.getChildByName("btnPlay"), 
                    //this.btnRank = i.getChildByName("btnRank"), 
                    //this.btnSvrvice = i.getChildByName("btnSvrvice"), 
                    //this.btnShare = i.getChildByName("btnShare"), 
                    //this.btnCollect = i.getChildByName("btnCollect"), 
                    this.bottomPanel = i;
                    this.cargames = this.getChildByName("cargames");
                    this.cargames.on(Laya.Event.MOUSE_DOWN,this,()=>{
                        platform.getInstance().mainNavigate("HOME","LOGO");
                    });
                    //this.btnGameR = this.getChildByName("btnGameR"), 
                    //this.btnGameL.visible = !1, 
                    //this.btnGameR.visible = !1, 
                    //this.btnGameL2 = this.getChildByName("btnGameL2"), 
                    //this.btnGameR2 = this.getChildByName("btnGameR2"), 
                    //this.btnGameL2 && (this.btnGameL2.visible = !1), 
                    //this.btnGameR2 && (this.btnGameR2.visible = !1);
                }
            }, {
                key: "initEvent",
                value: function value() {
                    // LayaSample.utils.addClickEvent(this.btnVibrate, this, this.onVibrateClick), 
                    LayaSample.utils.addClickEvent(this.btnSound, this, this.onSoundClick), 
                    LayaSample.utils.addClickEvent(this.btnPlay, this, this.onPlayClick), 
                    // LayaSample.utils.addClickEvent(this.btnRank, this, this.onRankClick), 
                    // LayaSample.utils.addClickEvent(this.btnSvrvice, this, this.onSvrviceClick), 
                    // LayaSample.utils.addClickEvent(this.btnShare, this, this.onShareClick), 
                    // LayaSample.utils.addClickEvent(this.btnCollect, this, this.onCollectClick), 
                    // LayaSample.utils.addClickEvent(this.btnGameL, this, this.onWxgameClick, 14), 
                    // LayaSample.utils.addClickEvent(this.btnGameL2, this, this.onWxgameClick, 14), 
                    // LayaSample.utils.addClickEvent(this.btnGameR, this, this.onWxgameClick, 14), 
                    // LayaSample.utils.addClickEvent(this.btnGameR2, this, this.onWxgameClick, 14), 
                    LayaSample.glEvent.on("ad_resize_event", this, this.onResizeAdEvent), 
                    LayaSample.glEvent.on("ad_show_event", this, this.onResizeAdEvent), 
                    LayaSample.glEvent.on("ad_load_event", this, this.onAdLoadEvent), 
                    LayaSample.glEvent.on("cancel_open_app_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    Laya.timer.clearAll(this), LayaSample.glEvent.off("ad_resize_event", this, this.onResizeAdEvent), 
                    LayaSample.glEvent.off("ad_show_event", this, this.onResizeAdEvent), LayaSample.glEvent.off("ad_load_event", this, this.onAdLoadEvent), 
                    LayaSample.glEvent.off("cancel_open_app_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "onPlayClick",
                value: function value() {
                    platform.getInstance().showInterstitial(()=>{
                        this.close(), 
                        LayaSample.glEvent.event("play_game_event", {});
                    });
                }
            }, {
                key: "onRankClick",
                value: function value() {
                    this.close();
                    var e = {};
                    e.target = "views/home.scene", Laya.Scene.open("views/rank.scene", !1, e, Laya.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    }));
                }
            }, {
                key: "onVibrateClick",
                value: function value() {
                    this.setVibrate(!LayaSample.storageMgr.isPlayVibrate());
                }
            }, {
                key: "onSoundClick",
                value: function value() {
                    this.setSound(!LayaSample.storageMgr.isPlaySound());
                }
            }, {
                key: "setSound",
                value: function value(e) {
                    this.btnSound.skin = e ? this.soundOff.skin : this.soundOn.skin, 
                    laya.media.SoundManager.muted = e, 
                    LayaSample.storageMgr.setPlaySound(e);
                }
            }, {
                key: "setVibrate",
                value: function value(e) {
                    this.btnVibrate.skin = e ? this.vibrateOn.skin : this.vibrateOff.skin, LayaSample.storageMgr.setPlayVibrate(e);
                }
            }, {
                key: "onSvrviceClick",
                value: function value() {
                    LayaSample.wxMgr.openCustomerService();
                }
            }, {
                key: "onShareClick",
                value: function value() {
                    LayaSample.wxMgr.shareFriend(1, !1);
                }
            }, {
                key: "onCollectClick",
                value: function value() {
                    Laya.Scene.open("views/collect.scene", !1, Laya.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    }));
                }
            }, {
                key: "initAppBanner",
                value: function value() {}
            }, {
                key: "onAdLoadEvent",
                value: function value(e) {
                    e.adtype;
                }
            }, {
                key: "onWxWakeEvent",
                value: function value() {
                    LayaSample.wxMgr.getWxappList(3).length > 0 && (this.close(), Laya.Scene.open("views/wxapp.scene", !1, laya.utils.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    })));
                }
            }, {
                key: "onResizeAdEvent",
                value: function value(e) {
                    var t = LayaSample.screen.realPxRatio, a = LayaSample.wxMgr.getBannerItem();
                    if (a && e.index == a.index) {
                        var i = a.width, n = a.height, o = Laya.Browser.clientWidth - 76 / t * 2;
                        o == i || 300 == i || (o = o < 300 ? 300 : o, LayaSample.wxMgr.setBannerAdWidth(o));
                        var r = t * o * n / i, s = this.bottomPanel.y + this.bottomPanel.height + 30, l = r - (Laya.stage.height - s), h = s / t;
                        l > 0 && (this.bottomPanel.y -= l, h -= l / t), LayaSample.wxMgr.setBannerAdTop(h - 10);
                    }
                }
            }, {
                key: "onWxgameClick",
                value: function value(e) {
                    var t = e.target.appData.appid;
                    t && "" != t ? LayaSample.wxMgr.openOtherApp(t, e.target.appData.appIndex) : console.log("appid error.");
                }
            }, {
                key: "setWxapp",
                value: function value(e) {
                    var t = LayaSample.wxMgr.getWxappList(0);
                    if (t) {
                        var a = t.length;
                        if (0 != a && t[e]) {
                            var i = {
                                appid: t[e].app_id,
                                appIndex: 0
                            }, n = null;
                            switch (e) {
                              case 0:
                                n = this.btnGameL;
                                break;

                              case 1:
                                n = this.btnGameR;
                                break;

                              case 2:
                                n = this.btnGameL2;
                                break;

                              case 3:
                                n = this.btnGameR2;
                                break;

                              default:
                                return;
                            }
                            null != n && (n.visible = !0, n.skin = t[e].app_img, n.appData = i, Laya.timer.loop(3e3, this, function() {
                                ++e >= a && (e = 0), t[e] && (i.appid = t[e].app_id, n.skin = t[e].app_img, n.appData = i, 
                                LayaSample.utils.tweenShake(n, null));
                            }));
                        }
                    }
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    8: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./manager/ConfigMgr")), r = i(e("./manager/NetMgr")), s = i(e("./manager/WxMgr")), l = i(e("./manager/StorageMgr")), h = i(e("./manager/SoundMgr")), c = i(e("./Utils")), u = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return LayaSample.glEvent = new Laya.Sprite(), LayaSample.glEvent.size(0, 0), LayaSample.storageMgr = new l.default(), 
                LayaSample.commonData = l.default.commonData, LayaSample.commonData.shareConfig && (LayaSample.commonData.bannerAdID = LayaSample.commonData.shareConfig.banner_id, 
                LayaSample.commonData.videoAdID = LayaSample.commonData.shareConfig.video_id, LayaSample.commonData.interstitialAdID = "adunit-0ebe4448086913de"), 
                LayaSample.configMgr = new o.default(), LayaSample.netMgr = r.default, LayaSample.wxMgr = s.default, 
                LayaSample.soundMgr = new h.default(), LayaSample.utils = new c.default(), e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), n(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), this.initUI(), this.initEvent(), Laya.Browser.onWeiXin ? this.initSize(this) : this._loadCount -= 0;
                }
            }, {
                key: "initData",
                value: function value() {
                    this._isResizeAd = !1, this._loadFinish = !1, this._topView = "views/login.scene", 
                    this._maxBottom = 0, this._minBottom = 0, this._loadCount = 1, this._loadNum = 0;
                }
            }, {
                key: "initUI",
                value: function value() {
                    this.viewLoad = this.getChildByName("viewLoad"), this.lblPres = this.viewLoad.getChildByName("lblPres"), 
                    this.barPres = this.viewLoad.getChildByName("barPres");
                    var e = this.getChildByName("minbottom"), t = this.getChildByName("maxbottom");
                    this._maxBottom = t.bottom, this._minBottom = e.bottom;
                }
            }, {
                key: "initEvent",
                value: function value() {
                    LayaSample.glEvent.on("load_finish_event", this, this.onLoadFinish), LayaSample.glEvent.on("wx_wake_event", this, this.onWxWakeEvent), 
                    LayaSample.glEvent.on("wx_sleep_event", this, this.onWxSleepEvent), LayaSample.glEvent.on("ad_load_event", this, this.onLoadAdEvent), 
                    LayaSample.glEvent.on("ad_show_event", this, this.onShowAdEvent), LayaSample.glEvent.on("login_event", this, this.onLoginEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    LayaSample.glEvent.off("load_finish_event", this, this.onLoadFinish), LayaSample.glEvent.off("wx_wake_event", this, this.onWxWakeEvent), 
                    LayaSample.glEvent.off("wx_sleep_event", this, this.onWxSleepEvent), LayaSample.glEvent.off("ad_load_event", this, this.onAdLoadEvent), 
                    LayaSample.glEvent.off("ad_show_event", this, this.onShowAdEvent), LayaSample.glEvent.off("login_event", this, this.onLoginEvent);
                }
            }, {
                key: "onOpened",
                value: function value() {
                    // if (LayaSample.scene = this, LayaSample.configMgr.init(), LayaSample.soundMgr.init(), 
                    // LayaSample.wxMgr.init(), Laya.timer.frameLoop(1, this, this.onFrame), Laya.Browser.onWeiXin) {
                    //     var e = this;
                    //     wx.loadSubpackage({
                    //         name: "models",
                    //         success: function success(t) {
                    //             console.log("分包加载成功1"), wx.loadSubpackage({
                    //                 name: "scenes",
                    //                 success: function success(t) {
                    //                     console.log("分包加载成功2"), e.loadRes();
                    //                 },
                    //                 fail: function fail(e) {
                    //                     console.error("分包加载失败2", e);
                    //                 }
                    //             });
                    //         },
                    //         fail: function fail(e) {
                    //             console.error("分包加载失败1", e);
                    //         }
                    //     });
                    // } else 
                    LayaSample.scene = this, LayaSample.configMgr.init(), LayaSample.soundMgr.init(), 
                    LayaSample.wxMgr.init(), Laya.timer.frameLoop(1, this, this.onFrame), 
                    Laya.loader.load("cnf.json",Laya.Handler.create(this,(res)=>{
                        platform.getInstance().startup("Drifty-Race", res["id"], () => 
                        {
                            this.loadRes();
                            // let yad     = new Laya.Image();
                            // yad.scale(0.8,0.8);
                            // yad.skin    = "yad.png";
                            // yad.bottom  = 5;
                            // yad.centerX = 0;
                            // //yad.top   = 10;
                            // yad.zOrder  = 1e3;
                            // yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                            // Laya.stage.addChild(yad);
                            // window.yad  = yad;
                        });
                    }))
                    
                }
            }, {
                key: "onLoginEvent",
                value: function value() {
                    if (Laya.Browser.onWeiXin) {
                        Laya.timer.clear(this, this.refreshBannerAd);
                        var e = LayaSample.commonData.shareConfig ? LayaSample.commonData.shareConfig.banner_interval : 0;
                        Laya.timer.loop(e, this, this.refreshBannerAd);
                    }
                }
            }, {
                key: "loadRes",
                value: function value() {
                    var e = [ {
                        url: "res/scenes/raceScene/Conventional/ResScene.ls",
                        clas: Laya.Scene,
                        priority: 1
                    }, {
                        url: "res/models/Conventional/camera.lh",
                        clas: Laya.Sprite3D,
                        priority: 2
                    }, {
                        url: "res/scenes/acceEffect/Conventional/acceEffect.lh",
                        clas: Laya.Sprite3D,
                        priority: 3
                    }, {
                        url: "res/models/Conventional/bg.lh",
                        clas: Laya.Sprite3D,
                        priority: 4
                    }, {
                        url: "res/scenes/matMgr/Conventional/matMgr.lh",
                        clas: Laya.Sprite3D,
                        priority: 5
                    }, {
                        url: "res/models/car/Conventional/car.lh",
                        clas: Laya.Sprite3D,
                        priority: 6
                    }, {
                        url: "res/scenes/carEffects/Conventional/carEffects.lh",
                        clas: Laya.Sprite3D,
                        priority: 7
                    }, {
                        url: "res/scenes/mapRaceRes/Conventional/mapRaceRes.lh",
                        clas: Laya.Sprite3D,
                        priority: 8
                    }, {
                        url: "res/models/carSkins/Conventional/carSkins.lh",
                        clas: Laya.Sprite3D,
                        priority: 9
                    }, {
                        url: "res/scenes/mapRaces/Conventional/FinishLine.lh",
                        clas: Laya.Sprite3D,
                        priority: 10
                    }, {
                        url: "res/scenes/mapRaces/Conventional/Trap.lh",
                        clas: Laya.Sprite3D,
                        priority: 11
                    } ];
                    Laya.loader.create(e, Laya.Handler.create(this, this.onLoadFinish, [ {
                        target: "3dres"
                    } ], !1), Laya.Handler.create(this, this.onLoading, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, function(e) {
                        console.error("load 3dres error:", e);
                    });
                }
            }, {
                key: "onLoadFinish",
                value: function value(e) {
                    this._loadNum++;
                }
            }, {
                key: "onLoading",
                value: function value(e) {
                    var t = (this._loadNum + e) / this._loadCount;
                    this.barPres.value = t, this.lblPres.text = Math.floor(100 * t) + "%";
                }
            }, {
                key: "onFrame",
                value: function value() {
                    var e = this;
                    this._loadNum >= this._loadCount && (LayaSample.glEvent.off("load_finish_event", this, this.onLoadFinish), 
                    LayaSample.glEvent.off("wx_wake_event", this, this.onWxWakeEvent), Laya.Scene.open("scenes/game.scene", !1, Laya.Handler.create(this, function(t) {
                        LayaSample.scene.addView(t), Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(e, function(t) {
                            e._loadFinish = !0, LayaSample.commonData.isNoAds = !0, LayaSample.scene.addView(t), 
                            e.viewLoad.visible = !1;
                        }));
                    })), Laya.timer.clear(this, this.onFrame));
                }
            }, {
                key: "onWxWakeEvent",
                value: function value() {
                    this.initData(), this.onOpened();
                }
            }, {
                key: "onWxSleepEvent",
                value: function value() {
                    Laya.timer.clear(this, this.onFrame);
                }
            }, {
                key: "addView",
                value: function value(e) {
                    if (this._topView = e.url, Laya.Browser.onWeiXin) {
                        if (this.addChild(e), this.initSize(e), this._loadFinish) {
                            Laya.timer.clear(this, this.refreshBannerAd);
                            var t = LayaSample.commonData.shareConfig ? LayaSample.commonData.shareConfig.banner_interval : 0;
                            this.refreshBannerAd(), Laya.timer.loop(t, this, this.refreshBannerAd);
                        }
                    } else Laya.stage.addChild(e);
                }
            }, {
                key: "initSize",
                value: function value(e) {
                    e.height = Laya.stage.height;
                    for (var t = LayaSample.screen.offsetTop, a = LayaSample.screen.realPxRatio, i = LayaSample.commonData.wxysysInfo, n = 0, o = 0; o < e._children.length; o++) {
                        var r = e._children[o], s = r.y + t;
                        "topPanel" == r.name && (s = LayaSample.screen.statusBarHeight >= 30 && LayaSample.screen.allScreen ? LayaSample.screen.statusBarHeight * a : 30), 
                        r.y = s, "bottomPanel" == r.name && (n = LayaSample.commonData.isAdDelay ? this._minBottom : this._maxBottom, 
                        LayaSample.commonData.isNoAds && (n = this._minBottom), i && i.model.startsWith("iPhone X") && (n += 40), 
                        r.bottom = n);
                    }
                }
            }, {
                key: "refreshBannerAd",
                value: function value() {
                    if ("view/homeView.scene" != this._topView && this.resetBannerAd(), this._loadFinish) {
                        LayaSample.wxMgr.hideBannerAd(), Laya.timer.clear(this, this.reappearBannerAd);
                        var e = LayaSample.commonData.shareConfig ? LayaSample.commonData.shareConfig.latency_time : 0;
                        Laya.timer.once(e, this, this.reappearBannerAd);
                    }
                }
            }, {
                key: "reappearBannerAd",
                value: function value() {
                    LayaSample.wxMgr.showBannerAd(), LayaSample.wxMgr.getBannerAd();
                }
            }, {
                key: "resetBannerAd",
                value: function value() {
                    var e = LayaSample.wxMgr.getBannerItem();
                    if (e) {
                        var t = e.width, a = (e.height, Laya.Browser.clientWidth);
                        t != a && (this._isResizeAd = !0, LayaSample.wxMgr.setBannerAdWidth(a));
                    }
                }
            }, {
                key: "tweenAd",
                value: function value() {
                    var e = LayaSample.wxMgr.getBannerItem();
                    if (e) {
                        e.width;
                        for (var t = e.height, a = LayaSample.screen.realPxRatio, i = Math.floor(t * a), n = 0; n < this._children.length; ++n) {
                            var o = this._children[n], r = o.getChildByName("bottomPanel");
                            if (r && t && r.bottom < i) {
                                var s = LayaSample.commonData.shareConfig ? LayaSample.commonData.shareConfig.move_time : 0;
                                Laya.Tween.to(r, {
                                    bottom: i
                                }, s, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {}), 0, !0);
                            }
                            var l = o.getChildByName("middlePanel");
                            if (l && t) {
                                var h = l.y + l.height + i;
                                h > Laya.stage.height && (l.y = l.y - (h - Laya.stage.height));
                            }
                        }
                    }
                }
            }, {
                key: "onLoadAdEvent",
                value: function value(e) {
                    switch (e.adtype) {
                      case "video":
                        e.isLoad || wx.showToast({
                            title: "暂无视频，请稍后再试",
                            icon: "none",
                            duration: 3e3
                        });
                        break;

                      case "banner":
                        e.isLoad;
                    }
                }
            }, {
                key: "onShowAdEvent",
                value: function value() {
                    this._isResizeAd, this.tweenAd();
                }
            } ]), t;
        }();
        a.default = u;
    }, {
        "./Utils": 13,
        "./manager/ConfigMgr": 25,
        "./manager/NetMgr": 26,
        "./manager/SoundMgr": 27,
        "./manager/StorageMgr": 28,
        "./manager/WxMgr": 29
    } ],
    9: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./components/GameFinishComponent")), r = i(e("./GameContext")), s = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.tracks = new Array(), e.models = new Array(), e.modelsType = new Array(), 
                e.curves = new Array(), e.forthright = new Array(), e.races = Laya.Loader.getRes("res/scenes/mapRaceRes/Conventional/mapRaceRes.lh").getChildAt(0), 
                e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script), n(t, [ {
                key: "levelSelect",
                value: function value(e) {
                    var t = 100 * Math.random() % 13;
                    this.level = e > 19 ? Math.ceil(t) + 6 : e, trace(this.level), this.createMap("mapLevel/RaceTrack_L" + this.level + ".json");
                }
            }, {
                key: "reloadMap",
                value: function value() {
                    this.createMap("mapLevel/RaceTrack_L" + this.level + ".json");
                }
            }, {
                key: "clearMap",
                value: function value() {
                    this.raceTrack.destroy(), this.tracks = [], this.curves = [], this.forthright = [];
                }
            }, {
                key: "createMap",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        var t = LayaSample.commonData.wxysysInfo;
                        t && t.model.startsWith("iPhone 6") && (this.hideBarrier = !0);
                    }
                    Laya.loader.load(e, Laya.Handler.create(this, function() {
                        var t = this;
                        void 0 != this.raceTrack && this.clearMap(), this.raceTrack = Laya.stage.getChildAt(0).addChild(new Laya.Sprite3D("raceTrack"));
                        var a = new Laya.Vector3(0, 0, 0), i = new Laya.Vector3(0, 0, 0), n = new Laya.Vector3(0, 0, 0), s = (new Array(), 
                        Laya.Loader.getRes(e));
                        if (void 0 !== s) {
                            s.forEach(function(e) {
                                if (-1 != e.name.indexOf("Barrier") && t.hideBarrier) ; else {
                                    a.setValue(e.position.x, e.position.y, e.position.z), i.setValue(e.rotation.x, e.rotation.y, e.rotation.z), 
                                    n.setValue(e.scale.x, e.scale.y, e.scale.z), "FinishLine" == e.name ? n.setValue(e.scale.x, e.scale.x, e.scale.x) : "Trap" == e.name && n.setValue(1.2 * e.scale.x, 2, 1.2 * e.scale.z);
                                    var r = null;
                                    if ("FinishLine" == e.name || "Trap" == e.name) {
                                        var s = Laya.Loader.getRes("res/scenes/mapRaces/Conventional/" + e.name + ".lh");
                                        r = Laya.Sprite3D.instantiate(s, t.raceTrack, !1);
                                    } else r = Laya.Sprite3D.instantiate(t.races.getChildByName(e.name), t.raceTrack, !1);
                                    r.transform.localPosition = a, r.transform.localRotationEuler = i, r.transform.localScale = n, 
                                    -1 != e.name.indexOf("Tortuous") ? (t.tracks.push(Number(e.name.split("_")[1])), 
                                    t.curves.push(r)) : "Floor" == e.name ? t.forthright.push(r) : "FinishLine" == e.name && (t.finishLine = r.getChildByName("FinishLine"), 
                                    t.finishLine.addComponent(o.default)), "Trap" == e.name && (t.trap = r.getChildByName("Trap"));
                                }
                            }), r.default.getInstance().setTracks(this.tracks), LayaSample.glEvent.event("init_game_event", {});
                            var l = this.forthright[this.forthright.length - 1].transform.position;
                            a.setValue(l.x, .55, l.z), this.finishLine.transform.position = a, this.finishLine.transform.localPosition = new Laya.Vector3(this.finishLine.transform.localPosition.x, this.finishLine.transform.localPosition.y, this.finishLine.transform.localPosition.z + 6);
                        } else console.error("加载地图失败");
                    }), null, Laya.Loader.JSON);
                }
            }, {
                key: "getTracks",
                value: function value() {
                    return this.tracks;
                }
            }, {
                key: "getFinishLine",
                value: function value() {
                    return this.finishLine;
                }
            }, {
                key: "getTerminalPos",
                value: function value() {
                    return this.finishLine.transform.position;
                }
            }, {
                key: "getAllForthright",
                value: function value() {
                    return this.forthright;
                }
            }, {
                key: "getAllCurves",
                value: function value() {
                    return this.curves;
                }
            }, {
                key: "setTrapMat",
                value: function value(e) {
                    this.trap.meshRenderer.material = e;
                }
            } ]), t;
        }();
        a.default = s;
    }, {
        "./GameContext": 6,
        "./components/GameFinishComponent": 23
    } ],
    10: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._startTimer = !1, e._overTimer = 10, e._appCat = 5, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), 
                    this.initUI(), 
                    this.initEvent();
                    //Laya.timer.loop(1e3, this, this.onTimerStart);
                }
            }, {
                key: "initData",
                value: function value() {}
            }, {
                key: "initUI",
                value: function value() {
                    //var e = this.getChildByName("goonTime");
                    // this.lblTimer = e.getChildByName("lblTimer"), 
                    // this._loadBar = e.getChildByName("bar2"), 
                    // this.lblTimer.text = this._overTimer;
                    var t = this.getChildByName("bottomPanel");
                    // this.btnShare = this.getChildByName("btnShare"), 
                    // this.btnShare.visible = LayaSample.commonData.showRevivalCard 
                    // && LayaSample.commonData.shareConfig && 1 == LayaSample.commonData.shareConfig.share, 
                    this.btnVideo = this.getChildByName("btnVideo"), 
                    //this.btnVideo.visible = LayaSample.commonData.existVideoAd, 
                    this.btnSkip = t.getChildByName("btnSkip");
                    this.itemList = this.getChildByName("itemList");
                    platform.getInstance().initList(this.itemList);
                    this.cargames = this.getChildByName("cargames");
                    this.cargames.on(Laya.Event.MOUSE_DOWN,this,()=>{
                        platform.getInstance().navigate("GAME","LOGO");
                    });
                    // this.lblScore = this.getChildByName("score").getChildByName("lblScore"), 
                    // this.lblScore.text = LayaSample.commonData.newScore;
                    var a = LayaSample.commonData.shareConfig;
                    a && 0 == a.late_way && (this.btnSkip.x = 1e3 * Math.random() % 440 + 20);
                }
            }, {
                key: "initEvent",
                value: function value() {
                    // LayaSample.utils.addClickEvent(this.btnShare, this, this.onShareClick), 
                    LayaSample.utils.addClickEvent(this.btnVideo, this, this.onVideoClick), 
                    LayaSample.utils.addClickEvent(this.btnSkip, this, this.onSkipClick), 
                    LayaSample.glEvent.on("share_back_event", this, this.onShareBackEvent), 
                    LayaSample.glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent), 
                    LayaSample.glEvent.on("wx_sleep_event", this, this.onWxSleepEvent), 
                    LayaSample.glEvent.on("wx_wake_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    Laya.timer.clearAll(this), 
                    LayaSample.glEvent.off("share_back_event", this, this.onShareBackEvent), 
                    LayaSample.glEvent.off("ad_video_close_event", this, this.onVideoCloseEvent), 
                    LayaSample.glEvent.off("wx_sleep_event", this, this.onWxSleepEvent), 
                    LayaSample.glEvent.off("wx_wake_event", this, this.onWxWakeEvent);
                }
            }, {
                key: "goonGame",
                value: function value() {
                    LayaSample.glEvent.event("goon_game_event", {});
                }
            }, {
                key: "onOpened",
                value: function value() {
                    this._startTimer = !0;
                }
            }, {
                key: "onWxWakeEvent",
                value: function value() {
                    this._startTimer = !0;
                }
            }, {
                key: "onWxSleepEvent",
                value: function value() {
                    this._startTimer = !1;
                }
            }, {
                key: "onTimerStart",
                value: function value() {
                    this._overTimer > 0 
                    ? this._startTimer && (this._overTimer -= 1, this.lblTimer.text = this._overTimer) 
                    : (Laya.timer.clear(this, this.onTimerStart), 
                    this.onSkipClick());
                }
            }, {
                key: "onShareClick",
                value: function value() {
                    this._startTimer = !1, LayaSample.wxMgr.shareFriend(2, !0);
                }
            }, {
                key: "onShareBackEvent",
                value: function value(e) {
                    e.isShare ? (console.log("成功复活"), this.close(), this.goonGame()) : (LayaSample.wxMgr.showToast("分享失败", 2e3), 
                    this._startTimer = !0);
                }
            }, {
                key: "onVideoClick",
                value: function value() {
                    // this._startTimer = !1, 
                    // LayaSample.wxMgr.showVideoAd(0);
                    platform.getInstance().showReward(()=>{
                        this.close(), 
                        this.goonGame()
                    },()=>{
                        platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                    });
                    
                }
            }, {
                key: "onVideoCloseEvent",
                value: function value(e) {
                    e.isEnded 
                    ? (console.log("成功复活"), 
                        this.close(), 
                        this.goonGame()) 
                    : (LayaSample.wxMgr.showToast("看完视频才能复活", 2e3), 
                        this._startTimer = !0);
                }
            }, {
                key: "onSkipClick",
                value: function value() {
                    var e = this;
                    Laya.Scene.open("views/clearing.scene", !1, laya.utils.Handler.create(this, function(t) {
                        t.init(!1), 
                        LayaSample.scene.addView(t), 
                        e.close();
                    }));
                }
            }, {
                key: "drawBar",
                value: function value() {
                    this._angle += .036 * this._drawDelay, 
                    this._sp.graphics.drawPie(0, 0, this._radius, -90, this._angle - 90, "#00ffff");
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    11: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("./comp/RankItem")), o = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.rankBgList = [ "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png" ], 
                e.existWorldRank = !0, e.worldLoading = 0, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    LayaSample.commonData.isNoAds = !0, LayaSample.wxMgr.hideBannerAd(), this.initUI(), 
                    this.initEvent(), this.onRankFriend(), this.pageWorldRank = 1, this.isLoadedWorldRank = !1, 
                    LayaSample.wxMgr.worldRank(1), Laya.loader.load("prefabs/rankItem.json", Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB);
                }
            }, {
                key: "initUI",
                value: function value() {
                    var e = this.getChildByName("topPanel");
                    this.btnBack = e.getChildByName("btnBack"), this.tabRank = this.getChildByName("tabRank"), 
                    this._world = this.getChildByName("world"), this.worldList = this._world.getChildByName("list"), 
                    this.rankMe = this._world.getChildByName("rankMe"), this._friend = this.getChildByName("friend"), 
                    this.friendList = this._friend.getChildByName("list"), this.touchArea = this._friend.getChildByName("touchArea"), 
                    this.touchArea.alpha = 0;
                    this.getChildByName("bottomui");
                }
            }, {
                key: "initEvent",
                value: function value() {
                    LayaSample.utils.addClickEvent(this.btnBack, this, this.onCloseClick, 12), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick), 
                    LayaSample.glEvent.on("draw_world_rank_event", this, this.onDrawWorldrankEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    LayaSample.glEvent.off("draw_world_rank_event", this, this.onDrawWorldrankEvent), 
                    Laya.loader.clearRes("prefabs/rankItem.json"), this.clear();
                }
            }, {
                key: "initRankEvent",
                value: function value(e) {
                    if (!e) return this.touchArea.offAllCaller(this), this.touchArea.visible = !1, void (this.friendList.visible = !1);
                    this.touchArea.visible = !0, this.friendList.visible = !0;
                    var t = 0, a = 0, i = 0, n = 0;
                    Laya.Browser.onWeiXin && (this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                        e.stopPropagation(), i = 0, a = e.nativeEvent.timeStamp, t = e.nativeEvent.changedTouches[0].clientY, 
                        LayaSample.wxMgr.onFrientMouseEvent({
                            cmd: "touch_start"
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function(e) {
                        e.stopPropagation(), i = e.nativeEvent.changedTouches[0].clientY - t, LayaSample.wxMgr.onFrientMouseEvent({
                            cmd: "touch_move",
                            deltaY: i
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function(e) {
                        e.stopPropagation(), n = i / (e.nativeEvent.timeStamp - a), LayaSample.wxMgr.onFrientMouseEvent({
                            cmd: "touch_end",
                            speed: n
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function(e) {
                        e.stopPropagation(), n = i / (e.nativeEvent.timeStamp - a), LayaSample.wxMgr.onFrientMouseEvent({
                            cmd: "touch_cancel",
                            speed: n
                        });
                    }));
                }
            }, {
                key: "showList",
                value: function value(e) {
                    var t = e ? 1 : 0;
                    this.worldList.alpha = t, this.rankMe.alpha = t;
                }
            }, {
                key: "initList",
                value: function value() {
                    var e = this.worldList;
                    e.itemRender = n.default, e.cacheContent = !1, e.vScrollBarSkin = "", e.selectEnable = !1, 
                    e.selectHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem), 
                    this.worldLoading++;
                }
            }, {
                key: "refreshList",
                value: function value() {
                    this.worldLoading >= 2 && (this.worldList.refresh(), 0 == this.rankMe.numChildren && (this.rankMe.addChild(new n.default()), 
                    this.rankMe.getChildAt(0).setRankItem(this.userRank)), Laya.timer.clear(this, this.refreshList));
                }
            }, {
                key: "onRankClick",
                value: function value(e) {
                    1 == e ? this.onRankWorld() : this.onRankFriend();
                }
            }, {
                key: "onRankFriend",
                value: function value() {
                    if (this._world.visible = !1, this._friend.visible = !0, this.friendList.visible = !0, 
                    this.showList(!1), this.initRankEvent(!0), LayaSample.wxMgr.showFriendRank(!0), 
                    window.wx && window.sharedCanvas) {
                        var e = this.friendList.width, t = this.friendList.height;
                        window.sharedCanvas.width = e, window.sharedCanvas.height = t;
                    }
                }
            }, {
                key: "onRankWorld",
                value: function value() {
                    this._world.visible = !0, this._friend.visible = !1, this.friendList.visible = !1, 
                    this.showList(!0), this.initRankEvent(!1), LayaSample.wxMgr.showFriendRank(!1), 
                    Laya.timer.loop(100, this, this.refreshList);
                }
            }, {
                key: "onDrawWorldrankEvent",
                value: function value(e) {
                    this.worldLoading++;
                    var t = e.page, a = {}, i = [];
                    if (e.data instanceof Array) i = e.data, a.data = {
                        list: i,
                        page: t
                    }; else {
                        if (!e.data) return void console.error("rank data is null.");
                        a = e, i = e.data.list, e.data.userInfo.userId = e.data.userInfo.id, e.data.userInfo.bgUrl = this.rankBgList[2], 
                        delete e.data.userInfo.id, this.userRank = e.data.userInfo;
                    }
                    if (i) {
                        this.existWorldRank = i.length >= 20;
                        for (var n = a.data.list.length, o = 0; o < n; ++o) {
                            a.data.list[o].userId = a.data.list[o].id;
                            var r = (a.data.list[o].rank - 1) % 2;
                            a.data.list[o].bgUrl = this.rankBgList[r], delete a.data.list[o].id;
                        }
                        this.rankData || (this.rankData = {}), this.pageWorldRank = t, this.rankData[t] = a;
                        var s = [];
                        for (var l in this.rankData) {
                            s.push.apply(s, this.rankData[l].data.list);
                        }
                        this.worldList.updateArray(s), this.isLoadedWorldRank = !0;
                    } else this.existWorldRank = !1;
                }
            }, {
                key: "updateItem",
                value: function value(e, t) {
                    e.setRankItem(e.dataSource);
                    var a = this.pageWorldRank;
                    if (t - 6 == 0 && a < 6) ; else if (t + 6 == this.worldList.length) {
                        a += 1;
                        this.rankData[a];
                    }
                }
            }, {
                key: "onSelect",
                value: function value(e) {
                    console.log("当前选择的索引：" + e);
                }
            }, {
                key: "onCloseClick",
                value: function value() {
                    var e = this;
                    LayaSample.commonData.isNoAds = !1, Laya.Scene.open(this._target, !1, laya.utils.Handler.create(this, function(t) {
                        "views/home.scene" == e._target && (LayaSample.commonData.isNoAds = !0), LayaSample.scene.addView(t), 
                        e.close();
                    }));
                }
            }, {
                key: "onOpened",
                value: function value(e) {
                    this._target = e.target;
                }
            }, {
                key: "clear",
                value: function value() {
                    LayaSample.wxMgr.showFriendRank(!1), this.touchArea.offAllCaller(this), this.worldList.array = [], 
                    this.worldList.destroy();
                }
            } ]), t;
        }();
        a.default = o;
    }, {
        "./comp/RankItem": 14
    } ],
    12: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Scene), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initData(), this.initUI(), this.initEvent();
                }
            }, {
                key: "initData",
                value: function value() {
                    this.select = 0;
                }
            }, {
                key: "initUI",
                value: function value() {
                    this.btnSkip = this.getChildByName("bottomPanel").getChildByName("btnSkip"), this.btnRandom = this.getChildByName("btnRandom"), 
                    this.btnVideo1 = this.getChildByName("skinItem1").getChildByName("btnVideo"), this.btnVideo2 = this.getChildByName("skinItem2").getChildByName("btnVideo"), 
                    this.btnVideo3 = this.getChildByName("skinItem3").getChildByName("btnVideo"), this.btnVideo4 = this.getChildByName("skinItem4").getChildByName("btnVideo"), 
                    this.btnSkip.visible = !0, this.btnRandom.visible = !0;
                }
            }, {
                key: "initEvent",
                value: function value() {
                    LayaSample.utils.addClickEvent(this.btnSkip, this, this.onSkipClick), LayaSample.utils.addClickEvent(this.btnRandom, this, this.onRandomClick), 
                    LayaSample.utils.addClickEvent(this.btnVideo1, this, this.onVideo1Click), LayaSample.utils.addClickEvent(this.btnVideo2, this, this.onVideo2Click), 
                    LayaSample.utils.addClickEvent(this.btnVideo3, this, this.onVideo3Click), LayaSample.utils.addClickEvent(this.btnVideo4, this, this.onVideo4Click), 
                    LayaSample.glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent);
                }
            }, {
                key: "onClosed",
                value: function value() {
                    Laya.timer.clearAll(this), LayaSample.glEvent.off("share_back_event", this, this.onShareBackEvent), 
                    LayaSample.glEvent.off("ad_video_close_event", this, this.onVideoCloseEvent);
                }
            }, {
                key: "onOpened",
                value: function value() {}
            }, {
                key: "onVideo1Click",
                value: function value() {
                    this.select = 1, LayaSample.wxMgr.showVideoAd(0);
                }
            }, {
                key: "onVideo2Click",
                value: function value() {
                    this.select = 2, LayaSample.wxMgr.showVideoAd(0);
                }
            }, {
                key: "onVideo3Click",
                value: function value() {
                    this.select = 3, LayaSample.wxMgr.showVideoAd(0);
                }
            }, {
                key: "onVideo4Click",
                value: function value() {
                    this.select = 4, LayaSample.wxMgr.showVideoAd(0);
                }
            }, {
                key: "onVideoCloseEvent",
                value: function value(e) {
                    e.isEnded ? (console.log("成功复活"), LayaSample.glEvent.event("change_skin_event", {
                        select: this.select
                    }), this.onSkipClick()) : (LayaSample.wxMgr.showToast("看完视频才能试用", 2e3), this.select = 0);
                }
            }, {
                key: "onSkipClick",
                value: function value() {
                    Laya.timer.once(20, this, function() {
                        this.close(), LayaSample.glEvent.event("play_game_event", {});
                    });
                }
            }, {
                key: "onRandomClick",
                value: function value() {
                    var e = 100 * Math.random() % 4;
                    this.select = Math.ceil(e), LayaSample.wxMgr.showVideoAd(0);
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    13: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return i(e, [ {
                key: "addClickEvent",
                value: function value(e, t, a, i) {
                    if (e.offAllCaller(t), e instanceof Laya.Button) {
                        e.on(Laya.Event.CLICK, t, function(e) {
                            e.stopPropagation(), a && a.call(t, e), (0 === i || i) && LayaSample.soundMgr.play(i);
                        });
                    } else {
                        e.anchorX, e.anchorY, e.x, e.y;
                        var n = 1 * e.scaleX, o = 1 * e.scaleX;
                        e.on(Laya.Event.MOUSE_DOWN, t, function(t) {
                            t.stopPropagation(), Laya.Tween.to(e, {
                                scaleX: .9,
                                scaleY: .9
                            }, 60);
                        });
                        e.on(Laya.Event.MOUSE_UP, t, function(r) {
                            r.stopPropagation(), Laya.Tween.to(e, {
                                scaleX: n,
                                scaleY: o
                            }, 60), a && a.call(t, r), (0 === i || i) && LayaSample.soundMgr.play(i);
                        });
                        e.on(Laya.Event.MOUSE_OUT, t, function(t) {
                            t.stopPropagation(), Laya.Tween.to(e, {
                                scaleX: n,
                                scaleY: o
                            }, 60);
                        });
                    }
                }
            }, {
                key: "getRGB",
                value: function value(e, t) {
                    var a = 0 == t && t ? t : 1, i = [], n = [], o = e.replace(/#/, "");
                    if (3 == o.length) {
                        for (var r = [], s = 0; s < 3; s++) {
                            r.push(o.charAt(s) + o.charAt(s));
                        }
                        o = r.join("");
                    }
                    for (s = 0; s < 3; s++) {
                        i[s] = "0x" + o.substr(2 * s, 2), n.push(parseInt(Number(i[s])));
                    }
                    return new Laya.Vector4(n[0] / 255, n[1] / 255, n[2] / 255, a);
                }
            }, {
                key: "tweenShake",
                value: function value(e, t) {
                    var a = new Laya.TimeLine(), i = e.pivotX;
                    e.pivotX = e.width / 2, a.addLabel("shake1", 0).to(e, {
                        rotation: e.rotation + 5
                    }, 50, null, 0).addLabel("shake2", 0).to(e, {
                        rotation: e.rotation - 6
                    }, 50, null, 0).addLabel("shake3", 0).to(e, {
                        rotation: e.rotation - 13
                    }, 50, null, 0).addLabel("shake4", 0).to(e, {
                        rotation: e.rotation + 3
                    }, 50, null, 0).addLabel("shake5", 0).to(e, {
                        rotation: e.rotation - 5
                    }, 50, null, 0).addLabel("shake6", 0).to(e, {
                        rotation: e.rotation + 2
                    }, 50, null, 0).addLabel("shake7", 0).to(e, {
                        rotation: e.rotation - 8
                    }, 50, null, 0).addLabel("shake8", 0).to(e, {
                        rotation: e.rotation + 3
                    }, 50, null, 0).addLabel("shake9", 0).to(e, {
                        rotation: 0
                    }, 50, null, 0), t ? Laya.timer.once(500, this, function() {
                        a.destroy(), e.rotation = 0, e.pivotX = i;
                    }) : a.on(Laya.Event.COMPLETE, this, function() {
                        a.destroy(), e.rotation = 0, e.pivotX = i;
                    }), a.play(0, !0);
                }
            } ], [ {
                key: "compareVersion",
                value: function value(e, t) {
                    e = e.split("."), t = t.split(".");
                    for (var a = Math.max(e.length, t.length); e.length < a; ) {
                        e.push("0");
                    }
                    for (;t.length < a; ) {
                        t.push("0");
                    }
                    for (var i = 0; i < a; i++) {
                        var n = parseInt(e[i]), o = parseInt(t[i]);
                        if (n > o) return 1;
                        if (n < o) return -1;
                    }
                    return 0;
                }
            } ]), e;
        }();
        a.default = n;
    }, {} ],
    14: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.size(e.width, e.height), e.initUI(), e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Box), i(t, [ {
                key: "initUI",
                value: function value() {
                    var e = Laya.loader.getRes("prefabs/rankItem.json"), t = Laya.Pool.getItemByCreateFun("rankItem", e.create, e);
                    this.imgBg = t.getChildByName("bg"), this.lblName = t.getChildByName("lblName"), 
                    //this.lblScore = t.getChildByName("lblScore"), 
                    this.lblRank = t.getChildByName("lblRank"), 
                    this.imgAvatar = t.getChildByName("avatar"), this.iconFirst = t.getChildByName("iconFirst"), 
                    this.addChild(t);
                }
            }, {
                key: "setRankItem",
                value: function value(e) {
                    var t = e.user_nickname.length > 6 ? e.user_nickname.substr(0, 8) : e.user_nickname;
                    this.lblName.text = "" != t ? t : "神秘玩家", 0 == e.rank ? (this.lblRank.text = "未上榜", 
                    this.iconFirst.visible = !1, this.lblRank.fontSize = 24) : 1 == e.rank ? (this.lblRank.visible = !1, 
                    this.iconFirst.visible = !0) : (this.iconFirst.visible = !1, this.lblRank.visible = !0, 
                    this.lblRank.fontSize = 32, this.lblRank.text = e.rank);//this.lblScore.text = e.pass;
                    var a = "" != e.avatar ? e.avatar : "ui/rank/avater_default.png";
                    this.imgBg.loadImage(e.bgUrl, 0, 0), this.imgAvatar.loadImage(a, 0, 0);
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    15: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("./WxappItem")), o = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.repeatX = 0, e.appCount = -1, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script), i(t, [ {
                key: "onStart",
                value: function value() {
                    this.initEvent();
                }
            }, {
                key: "initEvent",
                value: function value() {
                    LayaSample.utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick, 14), LayaSample.utils.addClickEvent(this.btnBack, this, this.onBackClick, 14);
                }
            }, {
                key: "initData",
                value: function value() {}
            }, {
                key: "initList",
                value: function value() {
                    var e = this.list;
                    null != e && (e.itemRender = n.default, e.vScrollBarSkin = "", e.selectEnable = !0, 
                    e.selectHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem), 
                    this.repeatX = e.repeatX, this.appCount > 0 && (e.array = this.data, LayaSample.commonData.isNoAds = !0, 
                    LayaSample.wxMgr.hideBannerAd()));
                }
            }, {
                key: "updateItem",
                value: function value(e, t) {
                    e.setItemInfo(e.dataSource);
                }
            }, {
                key: "onSelect",
                value: function value(e) {
                    if (!(e < 0)) {
                        var t = this.list.getItem(e);
                        null != t && LayaSample.wxMgr.openOtherApp(t.app_id, t.category), this.list.selectedIndex = -1;
                    }
                }
            }, {
                key: "onPlayGameClick",
                value: function value() {
                    this.owner.close(), LayaSample.glEvent.event("play_game_event", {});
                }
            }, {
                key: "onBackClick",
                value: function value() {
                    LayaSample.commonData.isNoAds = !0, this.owner.close(), Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function(e) {
                        LayaSample.scene.addView(e);
                    }));
                }
            } ]), t;
        }();
        a.default = o;
    }, {
        "./WxappItem": 17
    } ],
    16: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = (function(e) {
            e && e.__esModule;
        }(e("./WxappItem")), function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.repeatX = 0, e._appCount = -1, e._appIndex = 0, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script), i(t, [ {
                key: "onStart",
                value: function value() {
                    this.initData(), 
                    this.initUI(), 
                    //this.setBanner(), 
                    this.setPanelBottom(), 
                    this.initEvent(); 
                    //Laya.timer.loop(3e3, this, this.nextBanner);
                }
            }, {
                key: "initData",
                value: function value() {
                    this.data = LayaSample.wxMgr.getWxappList(this.category), this._appCount = this.data.length;
                }
            }, {
                key: "initUI",
                value: function value() {
                    //this.banner.visible = !1;
                }
            }, {
                key: "initEvent",
                value: function value() {
                    //LayaSample.utils.addClickEvent(this.banner, this, this.onBannerClick, 14), 
                    LayaSample.glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                }
            }, {
                key: "onDisable",
                value: function value() {
                    Laya.timer.clear(this, this.nextBanner), LayaSample.glEvent.off("ad_load_event", this, this.onAdLoadEvent);
                }
            }, {
                key: "setBanner",
                value: function value() {
                    var e = this.banner;
                    if (this._appCount > 0) {
                        var t = this.data[this._appIndex];
                        e.skin = t.app_img, e.appid = t.app_id;
                    }
                    e.visible = !LayaSample.commonData.existBannerAd && this._appCount > 0;
                }
            }, {
                key: "nextBanner",
                value: function value() {
                    var e = this._appIndex;
                    ++e >= this._appCount && (e = 0), this._appIndex = e, this.setBanner();
                }
            }, {
                key: "onAdLoadEvent",
                value: function value(e) {
                    "banner" == e.adtype && (this.setBanner(), this.setPanelBottom());
                }
            }, {
                key: "setPanelBottom",
                value: function value() {
                    if (this.panel && !LayaSample.commonData.existBannerAd && this._appCount > 0) {
                        this.panel.bottom = this.banner.height;
                        var e = LayaSample.commonData.wxysysInfo;
                        e && e.model.startsWith("iPhone X") && (this.panel.bottom = this.banner.height + 40);
                    }
                }
            }, {
                key: "onBannerClick",
                value: function value(e) {
                    var t = e.target.appid;
                    t && "" != t ? LayaSample.wxMgr.openOtherApp(t, this.category) : console.log("appid error.");
                }
            } ]), t;
        }());
        a.default = n;
    }, {
        "./WxappItem": 17
    } ],
    17: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.icon = null, e.initItem(), e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Box), i(t, [ {
                key: "onDisable",
                value: function value() {}
            }, {
                key: "initItem",
                value: function value() {
                    if (t.appPrefab) {
                        var e = Laya.Pool.getItemByCreateFun("wxappItem", t.appPrefab.create, t.appPrefab);
                        this.icon = e.getChildByName("icon"), this.icon.width = t.appWidth, this.icon.height = t.appHeight, 
                        e.size(t.appWidth, t.appHeight), this.addChild(e);
                    } else console.error("app prefab is null");
                }
            }, {
                key: "setItemInfo",
                value: function value(e) {
                    null != e && (this.icon.loadImage(e.app_img, 0, 0), this.appId = e.app_id);
                }
            } ]), t;
        }();
        a.default = n, n.appWidth = 128, n.appHeight = 128, n.appPrefab = null;
    }, {} ],
    18: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("./WxappItem")), o = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.appCount = -1, e;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script), i(t, [ {
                key: "onDisable",
                value: function value() {
                    Laya.timer.clearAll(this);
                }
            }, {
                key: "onStart",
                value: function value() {
                    this.initData(), this.initUI(), this.initList();
                }
            }, {
                key: "initUI",
                value: function value() {
                    var e = 0 != this.appCount;
                    this.list.visible = e, 
                    this.panel.visible = e;
                }
            }, {
                key: "initData",
                value: function value() {
                    n.default.appWidth = this.appWidth, n.default.appHeight = this.appHeight, n.default.appPrefab = this.appPrefab, 
                    this.data = LayaSample.wxMgr.getWxappList(this.category), this.appCount = this.data.length;
                }
            }, {
                key: "initList",
                value: function value() {
                    var e = this.list;
                    null != e && (e.itemRender = n.default, e.vScrollBarSkin = "", e.selectEnable = !0, 
                    e.mouseHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem)), 
                    e.array = this.data, Laya.timer.once(500, this, this.moveList);
                }
            }, {
                key: "moveList",
                value: function value() {
                    this.needClearTimer = !1, this.list.tweenTo(8, 8e3, new Laya.Handler(this, this.moveList1));
                }
            }, {
                key: "moveList1",
                value: function value() {
                    this.list.tweenTo(0, 8e3, new Laya.Handler(this, this.moveList));
                }
            }, {
                key: "updateItem",
                value: function value(e, t) {
                    e.setItemInfo(e.dataSource);
                }
            }, {
                key: "onSelect",
                value: function value(e, t) {
                    if (!(t < 0)) {
                        if ("mouseup" == e.type) {
                            var a = this.list.getItem(t);
                            LayaSample.wxMgr.openOtherApp(a.app_id, a.category);
                        }
                        this.needClearTimer && Laya.timer.clear(this, this.moveList), this.needClearTimer = !0, 
                        this.list.startIndex < 4 ? Laya.timer.once(200, this, this.moveList) : Laya.timer.once(200, this, this.moveList1), 
                        this.list.selectedIndex = -1;
                    }
                }
            } ]), t;
        }();
        a.default = o;
    }, {
        "./WxappItem": 17
    } ],
    19: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.initList();
                }
            }, {
                key: "onEnable",
                value: function value() {}
            }, {
                key: "initList",
                value: function value() {
                    this.list.array = [], this.list.renderHandler = new Laya.Handler(this, this.onRender), 
                    this.list.mouseHandler = new Laya.Handler(this, this.onMouseHandler), this.list.hScrollBarSkin = "";
                    var e = LayaSample.commonData.wxappList[0];
                    !e || e.length < 1 ? this.panel.visible = !1 : (this.panel.visible = !0, this.adData = e, 
                    this.list.array = e, Laya.timer.once(500, this, this.moveList));
                }
            }, {
                key: "moveList",
                value: function value() {
                    this.needClearTimer = !1, this.list.tweenTo(4, 12e3, new Laya.Handler(this, this.moveList1));
                }
            }, {
                key: "moveList1",
                value: function value() {
                    this.list.tweenTo(0, 12e3, new Laya.Handler(this, this.moveList));
                }
            }, {
                key: "onRender",
                value: function value(e, t) {
                    e.getChildAt(0).skin = this.adData[t].app_img;
                }
            }, {
                key: "onMouseHandler",
                value: function value(e, t) {
                    if ("mouseup" == e.type) {
                        var a = this.adData[t];
                        this.btnSkipMiniGame(a.app_id);
                    }
                    this.needClearTimer && Laya.timer.clear(this, this.moveList), this.needClearTimer = !0, 
                    this.list.startIndex < 3 ? Laya.timer.once(200, this, this.moveList) : Laya.timer.once(200, this, this.moveList1);
                }
            }, {
                key: "btnSkipMiniGame",
                value: function value(e) {
                    LayaSample.wxMgr.openOtherApp(e, 0);
                }
            }, {
                key: "onOpenView",
                value: function value(e) {
                    this.close(), LayaSample.commonData.isNoAds = !1, LayaSample.scene.addView(e);
                }
            }, {
                key: "onDisable",
                value: function value() {}
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    20: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./TrailComponent")), r = (i(e("./GameFinishComponent")), i(e("../GameContext"))), s = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script3D), n(t, [ {
                key: "onAwake",
                value: function value() {
                    this.scene = Laya.stage.getChildAt(0), this.hitResult = new Laya.HitResult(), this.tracks = new Array(), 
                    this.move = new Laya.Vector3(0, 0, 0), this.rotation = new Laya.Vector3(0, 0, 0), 
                    this.wheel_BL = this.owner.getChildByName("Wheel_BL").addComponent(o.default), this.wheel_BR = this.owner.getChildByName("Wheel_BR").addComponent(o.default), 
                    this.owner.removeChild(this.owner.getChildByName("Smoke")), this.owner.removeChild(this.owner.getChildByName("BlueSmoke")), 
                    this.owner.removeChild(this.owner.getChildByName("DriftFire_BL")), this.owner.removeChild(this.owner.getChildByName("DriftFire_BR")), 
                    this.cc = this.owner.getComponent(Laya.CharacterController);
                }
            }, {
                key: "onUpdate",
                value: function value() {
                    0 == r.default.getInstance().IsPlay || this.isArrived || (this.checkRayCast(), this._isBraking ? this._curSpeed -= .01 : 0 == this._isDriftting && (this._curSpeed += .01), 
                    this._curSpeed < this._minSpeed && (this._curSpeed = this._minSpeed), this._curSpeed > this._maxSpeed && (this._curSpeed = this._maxSpeed), 
                    this.move.setValue(this.move.x, this.move.y, this._curSpeed), this.owner.transform.translate(this.move), 
                    0 == this.cc.isGrounded ? (this.isJump = !0, this._isDriftting ? this.rotation.setValue(this.rotation.x + 1, this.owner.transform.localRotationEulerY, this.direction ? this.rotation.z + 5 : this.rotation.z - 5) : this.rotation.setValue(this.rotation.x + 2, this.owner.transform.localRotationEulerY, this.owner.transform.localRotationEulerZ), 
                    this.rotation.x > 45 && this.rotation.setValue(45, this.rotation.y, this.rotation.z), 
                    this.owner.transform.localRotationEuler = this.rotation) : this.isJump && (this.isJump = !1, 
                    this.rotation.setValue(0, this.owner.transform.localRotationEulerY, 0), this.owner.transform.localRotationEuler = this.rotation));
                }
            }, {
                key: "onTriggerEnter",
                value: function value(e) {
                    e.owner.name, "Trap" == e.owner.name && this.gameOver();
                }
            }, {
                key: "onTriggerExit",
                value: function value(e) {
                    "FinishLine" == e.owner.name && (this.isArrived = !0, this.move.setValue(0, 0, 0));
                }
            }, {
                key: "onCollisionEnter",
                value: function value(e) {
                    if ("Barrier" == e.other.owner.name) {
                        var t = this.owner.transform.localRotationEulerY;
                        e.other.applyForce(new Laya.Vector3(25 * Math.sin(t), 0, 25 * Math.cos(t)), e.other.owner.transform.position);
                    }
                    "Car" == e.other.owner.name && (this._curSpeed /= 2);
                }
            }, {
                key: "onCollisionExit",
                value: function value(e) {
                    "Floor" == e.other.owner.name && Laya.timer.once(LayaSample.utils.getRandom(0, 20), this, this.carDrifty);
                }
            }, {
                key: "gameOver",
                value: function value() {
                    this.move.setValue(0, 0, 0), this.owner.active = !1;
                }
            }, {
                key: "carDrifty",
                value: function value() {
                    !this._isDriftting && this.cc.isGrounded && (this.wheel_BL.IsTrail = !0, this.wheel_BR.IsTrail = !0, 
                    this._isDriftting = !0, this._clickCount < this.tracks.length && (this.trackAngle = this.tracks[this._clickCount], 
                    this._clickCount++, this._driftyAngle = 1.2 * this.trackAngle), this.direction = this._isTurnLeft, 
                    this._isTurnLeft = !this._isTurnLeft, this.curAngle = this.owner.transform.localRotationEulerY, 
                    this.inertiaAngle = this._curSpeed / this._maxSpeed, this._timer = Laya.timer.currTimer, 
                    Laya.timer.frameLoop(1, this, this.startDrifty));
                }
            }, {
                key: "init",
                value: function value(e, t) {
                    this.owner.active = !0, this.isArrived = !1, this._isDriftting = !1, this._isTurnLeft = !1, 
                    this._isBraking = !1, this._curSpeed = e > .18 ? .18 : e, this._centrifugalSpeed = 2 * this._curSpeed, 
                    this._maxSpeed = 1.5 * this._curSpeed, this._minSpeed = this._curSpeed / 1.5, this._driftyAngle = 120, 
                    this._timer = 0, this._turnTimer = .4, this._sliderTimer = .4, this._driftyTimer = .3, 
                    this.move.setValue(0, 0, this._curSpeed), this.rotation.setValue(0, 0, 0), this.owner.transform.position = t, 
                    this.owner.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this._clickCount = 0, 
                    this._fixAngleY = 0, this.tracks = r.default.getInstance().getTracks;
                }
            }, {
                key: "startDrifty",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = 1 / this._turnTimer * e, a = this._centrifugalSpeed * this.trackAngle / 90 * t * 1.2, i = this._driftyAngle * this.inertiaAngle * t;
                    this.direction ? (this.move.setValue(-a, 0, 0), this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + i, this.owner.transform.localRotationEulerZ)) : (this.move.setValue(a, 0, 0), 
                    this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle - i, this.owner.transform.localRotationEulerZ)), 
                    this.owner.transform.localRotationEuler = this.rotation, e > this._turnTimer && (Laya.timer.clear(this, this.startDrifty), 
                    this._timer = Laya.timer.currTimer, Laya.timer.frameLoop(1, this, this.startSlide));
                }
            }, {
                key: "startSlide",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = (this._sliderTimer - e) / this._sliderTimer, a = this._centrifugalSpeed * this.trackAngle / 90 * t;
                    this.direction ? this.move.setValue(-a, 0, this._curSpeed) : this.move.setValue(a, 0, this._curSpeed), 
                    e > this._sliderTimer && (Laya.timer.clear(this, this.startSlide), this.move.setValue(0, 0, this._curSpeed), 
                    this.curAngle = this.owner.transform.localRotationEulerY, this._timer = Laya.timer.currTimer, 
                    Laya.timer.frameLoop(1, this, this.startFixAngle));
                }
            }, {
                key: "startFixAngle",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = 1 / this._driftyTimer * e;
                    this.direction ? this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + (this.trackAngle - this._driftyAngle * this.inertiaAngle) * t, this.owner.transform.localRotationEulerZ) : this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + (this._driftyAngle * this.inertiaAngle - this.trackAngle) * t, this.owner.transform.localRotationEulerZ), 
                    this.owner.transform.localRotationEuler = this.rotation, e > this._driftyTimer && (Laya.timer.clear(this, this.startFixAngle), 
                    this._isDriftting = !1, this._fixAngleY = this.direction ? this._fixAngleY + this.trackAngle : this._fixAngleY - this.trackAngle, 
                    this.rotation.setValue(0, this._fixAngleY, 0), this.owner.transform.localRotationEuler = this.rotation, 
                    this.wheel_BL.IsTrail = !1, this.wheel_BR.IsTrail = !1);
                }
            }, {
                key: "checkRayCast",
                value: function value() {
                    this.from_BL = new Laya.Vector3(this.wheel_BL.owner.transform.position.x, this.owner.transform.position.y, this.wheel_BL.owner.transform.position.z), 
                    this.to_BL = new Laya.Vector3(this.from_BL.x, this.from_BL.y - 100, this.from_BL.z), 
                    this.from_BR = new Laya.Vector3(this.wheel_BR.owner.transform.position.x, this.owner.transform.position.y, this.wheel_BR.owner.transform.position.z), 
                    this.to_BR = new Laya.Vector3(this.from_BR.x, this.from_BR.y - 100, this.from_BR.z), 
                    this.scene.physicsSimulation.raycastFromTo(this.from_BL, this.to_BL, this.hitResult), 
                    this.hitResult.succeeded && "Trap" == this.hitResult.collider.owner.name ? this.wheel_BR.IsTrail = !1 : this._isDriftting && (this.wheel_BR.IsTrail = !0), 
                    this.scene.physicsSimulation.raycastFromTo(this.from_BR, this.to_BR, this.hitResult), 
                    this.hitResult.succeeded && "Trap" == this.hitResult.collider.owner.name ? this.wheel_BL.IsTrail = !1 : this._isDriftting && (this.wheel_BL.IsTrail = !0);
                }
            } ]), t;
        }();
        a.default = s;
    }, {
        "../GameContext": 6,
        "./GameFinishComponent": 23,
        "./TrailComponent": 24
    } ],
    21: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(e("../GameContext")), o = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script3D), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.tracks = new Array(), 
                    this.movePosition = new Laya.Vector3(), 
                    this.moveRotation = new Laya.Vector3(), 
                    this.offset = new Laya.Vector3(), 
                    this.vec = new Laya.Vector3();
                    var e = Laya.stage.getChildAt(0);
                    this.light = e.getChildAt(0), 
                    this.camera = this.owner.getChildAt(0), 
                    this.lightRot = new Laya.Vector3(this.light.transform.rotationEuler.x, this.light.transform.rotationEuler.y, this.light.transform.rotationEuler.z), 
                    this.isShowGuide = !1;
                    var t = this.owner.addChild(Laya.Loader.getRes("res/scenes/acceEffect/Conventional/acceEffect.lh"));
                    this.acceEffect = t.getChildAt(0).particleSystem, 
                    this.acceEffect.play(), 
                    Laya.timer.once(10, this, function() {
                        this.acceEffect.stop();
                    });
                }
            }, {
                key: "init",
                value: function value() {
                    this.owner.transform.position = new Laya.Vector3(), 
                    this.owner.transform.rotationEuler = new Laya.Vector3(), 
                    this.light.transform.rotationEuler = this.lightRot, 
                    this.camera.fieldOfView = 70, 
                    this.canFollow = !1, 
                    this.clickCount = 0, 
                    this.isRight = !1, 
                    this.tracks = n.default.getInstance().getTracks, 
                    this.curTimer = 0, 
                    this.curves = [], 
                    this.isRotation = !1, 
                    this.angleCount = 0, 
                    this.offset.setValue(0, -.785, -.44);
                }
            }, {
                key: "setTarget",
                value: function value(e, t) {
                    e ? (this.target = e.owner, 
                        this.curves = t, 
                        Laya.timer.frameLoop(1, this, this.cameraMove)) 
                    : this.target = null;
                }
            }, {
                key: "cameraMove",
                value: function value() {
                    this.curTimer += Laya.timer.delta;
                    var e = this.curTimer / 500;
                    this.camera.fieldOfView = 70 + 20 * e, 
                    this.moveRotation.setValue(20 * e, -15 * e, this.owner.transform.rotationEuler.z), 
                    this.movePosition.setValue(0 * e, 0, 15 * e), 
                    this.owner.transform.rotationEuler = this.moveRotation, 
                    this.owner.transform.position = this.movePosition, 
                    this.curTimer > 300 && (Laya.timer.clear(this, this.cameraMove), 
                    this.curTimer = 0, 
                    this.canFollow = !0, 
                    this.startPos = this.target.transform.position, 
                    this.nextPos = this.curves[this.clickCount].transform.position, 
                    this.curAngle = this.owner.transform.rotationEuler.y, 
                    this.nextAngle = this.isRight ? this.tracks[this.clickCount] : -this.tracks[this.clickCount], 
                    Laya.Vector3.subtract(this.startPos, this.nextPos, this.vec), 
                    this.maxDistance = Laya.Vector3.scalarLength(this.vec), 
                    this.curAcce = this.tracks[this.angleCount] / 20);
                }
            }, {
                key: "onLateUpdate",
                value: function value() {
                    if (this.canFollow && (Laya.Vector3.add(this.offset, this.target.transform.position, this.movePosition), 
                    this.owner.transform.position = this.movePosition, 
                    this.light.transform.rotationEuler 
                        = new Laya.Vector3(this.lightRot.x, this.owner.transform.rotationEuler.y + this.lightRot.y, this.lightRot.z), 
                    0 == this.isRotation)) 
                    {
                        Laya.Vector3.subtract(this.owner.transform.position, this.nextPos, this.vec);
                        var e = Laya.Vector3.scalarLength(this.vec);
                        if (e < this.maxDistance / 1.8 && 0 == this.isShowGuide) {
                            var t = this.isRight ? 1 : -1;
                            this.owner.transform.rotate(new Laya.Vector3(0, t / 100, 0), !1), this.hasRecord || (this.hasRecord = !0, 
                            this.goonAngle = this.owner.transform.rotationEuler.y);
                        }
                        LayaSample.commonData.showGuideCount > 0 && 0 == this.isShowGuide && (e < this.maxDistance / 2 && 2 == LayaSample.commonData.showGuideCount ? LayaSample.glEvent.event("drift_guide_event", {}) : e < this.maxDistance / 4 && 1 == LayaSample.commonData.showGuideCount && LayaSample.glEvent.event("drift_guide_event", {}));
                    }
                }
            }, {
                key: "progressFrame",
                value: function value() {
                    this.curTimer += Laya.timer.delta;
                    var e = this.curTimer / 1e3, t = e > 1 ? 1 : e, a = (-this.curAcce * t + this.curAcce) * e;
                    a *= this.angleCount % 2 == 0 ? -1 : 1;
                    var i = this.isRight ? -.01 : .01;
                    if (this.owner.transform.rotate(new Laya.Vector3(0, a / 45 + i, 0), !1), e > 1) {
                        if (this.angleCount++, this.curAcce = Math.abs(this.tracks[this.angleCount]) > 90 ? 6.75 : 3, 
                        Laya.timer.clear(this, this.progressFrame), this.angleCount >= this.tracks.length) return this.curAngle = this.owner.transform.rotationEuler.y, 
                        void Laya.timer.frameLoop(1, this, this.lastCurvesData);
                        this.isRotation = !1, this.startPos = this.curves[this.angleCount - 1].transform.position, 
                        this.nextPos = this.curves[this.angleCount].transform.position, this.curAngle = this.owner.transform.rotationEuler.y, 
                        this.nextAngle = this.isRight ? this.tracks[this.angleCount] : -this.tracks[this.angleCount], 
                        Laya.Vector3.subtract(this.startPos, this.nextPos, this.vec), this.maxDistance = Laya.Vector3.scalarLength(this.vec);
                    }
                }
            }, {
                key: "lastCurvesData",
                value: function value() {
                    var e = this.isRight ? -1 : 1;
                    this.curAngle += Laya.timer.delta * e / 50, Laya.Vector3.lerp(this.owner.transform.rotationEuler, new Laya.Vector3(this.owner.transform.rotationEuler.x, this.curAngle, this.owner.transform.rotationEuler.z), .09, this.moveRotation), 
                    this.owner.transform.rotationEuler = this.moveRotation;
                }
            }, {
                key: "stopFollow",
                value: function value() {
                    this.canFollow = !1, Laya.timer.clear(this, this.lastCurvesData);
                }
            }, {
                key: "speedUp",
                value: function value() {
                    this.acceEffect.play(), this.fieldOfView = this.camera.fieldOfView, this.scaleTime = 0, 
                    Laya.timer.frameLoop(1, this, this.setFieldOfView);
                }
            }, {
                key: "setFieldOfView",
                value: function value() {
                    this.scaleTime += Laya.timer.delta;
                    this.scaleTime / 1500 < 1 / 3 ? this.camera.fieldOfView += this.scaleTime / 300 : this.camera.fieldOfView -= (this.scaleTime - 750) / 500, 
                    this.scaleTime > 1500 && (this.acceEffect.stop(), this.camera.fieldOfView = this.fieldOfView, 
                    Laya.timer.clear(this, this.setFieldOfView));
                }
            }, {
                key: "goonInit",
                value: function value() {
                    Laya.Vector3.add(this.offset, this.target.transform.position, this.movePosition), 
                    this.owner.transform.position = this.movePosition, this.light.transform.rotationEuler = new Laya.Vector3(this.lightRot.x, this.owner.transform.rotationEuler.y + this.lightRot.y, this.lightRot.z), 
                    this.hasRecord && (this.owner.transform.rotationEuler = new Laya.Vector3(this.owner.transform.rotationEuler.x, this.goonAngle, this.owner.transform.rotationEuler.z), 
                    this.hasRecord = !1);
                }
            }, {
                key: "finishGame",
                value: function value(e) {
                    this.stopFollow(), this.curPosition = new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z), 
                    this.targetPosition = e.transform.position, this.curRotation = new Laya.Vector3(this.owner.transform.rotationEuler.x, this.owner.transform.rotationEuler.y, this.owner.transform.rotationEuler.z), 
                    this.targetAngle = e.transform.rotationEuler, this.movePosition.setValue(0, 0, 0), 
                    this.moveRotation.setValue(0, 0, 0), this.curTimer = 0, Laya.timer.frameLoop(1, this, this.finishAnim);
                }
            }, {
                key: "finishAnim",
                value: function value() {
                    this.curTimer += Laya.timer.delta;
                    var e = this.curTimer / 1800, t = 1 - e, a = this.targetPosition.x * e + this.curPosition.x * t, i = this.targetPosition.y * e + this.curPosition.y * t, n = this.targetPosition.z * e + this.curPosition.z * t, o = this.targetAngle.x * e + this.curRotation.x * t, r = this.targetAngle.y * e + this.curRotation.y * t;
                    this.movePosition.setValue(a, i, n), this.moveRotation.setValue(o, r, 0), this.owner.transform.position = this.movePosition, 
                    this.owner.transform.rotationEuler = this.moveRotation, this.light.transform.rotationEuler = new Laya.Vector3(this.lightRot.x, this.owner.transform.rotationEuler.y + this.lightRot.y, this.lightRot.z), 
                    e > 1 && (Laya.timer.clear(this, this.finishAnim), this.curTimer = null);
                }
            }, {
                key: "IsShowGuide",
                set: function set(e) {
                    this.isShowGuide = e;
                }
            }, {
                key: "IsRight",
                get: function get() {
                    return this.isRight;
                },
                set: function set(e) {
                    this.hasRecord = !1, this.isRight = e, this.clickCount++, this.isRotation = !0, 
                    this.curTimer = 0, Laya.timer.frameLoop(1, this, this.progressFrame);
                }
            } ]), t;
        }();
        a.default = o;
    }, {
        "../GameContext": 6
    } ],
    22: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("./TrailComponent")), r = i(e("./GameFinishComponent")), s = i(e("../GameContext")), l = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script3D), n(t, [ {
                key: "onAwake",
                value: function value() {
                    this.scene = Laya.stage.getChildAt(0), this.move = new Laya.Vector3(), this.rotation = new Laya.Vector3(), 
                    this.forceVec = new Laya.Vector3(), this.hitResult = new Laya.HitResult(), this.from = new Laya.Vector3(), 
                    this.to = new Laya.Vector3(), this.Wheel_FL = this.owner.getChildByName("Wheel_FL").getComponent(o.default), 
                    void 0 == this.Wheel_FL && (this.Wheel_FL = this.owner.getChildByName("Wheel_FL").addComponent(o.default), 
                    this.Wheel_FR = this.owner.getChildByName("Wheel_FR").addComponent(o.default), this.wheel_BL = this.owner.getChildByName("Wheel_BL").addComponent(o.default), 
                    this.wheel_BR = this.owner.getChildByName("Wheel_BR").addComponent(o.default)), 
                    this.blueSmokeEffect = this.owner.getChildByName("FX_DriftSmokeBlue").particleSystem, 
                    this.fireEffect_BL = this.owner.getChildByName("DriftFire_BL").particleSystem, this.fireEffect_BR = this.owner.getChildByName("DriftFire_BR").particleSystem, 
                    this.smokeBlingEffect = this.owner.getChildByName("FX_DriftSmokeBlue").getChildByName("FX_DriftSmokeBluePtc").particleSystem, 
                    this.fireMidEffect_BL = this.owner.getChildByName("DriftFire_BL").getChildByName("FX_DriftFireLocal_Mid").particleSystem, 
                    this.fireLrgEffect_BL = this.owner.getChildByName("DriftFire_BL").getChildByName("FX_DriftFireLocal_Lrg").particleSystem, 
                    this.fireMidEffect_BR = this.owner.getChildByName("DriftFire_BR").getChildByName("FX_DriftFireLocal_Mid").particleSystem, 
                    this.fireLrgEffect_BR = this.owner.getChildByName("DriftFire_BR").getChildByName("FX_DriftFireLocal_Lrg").particleSystem, 
                    this.blueSmokeEffect.play(), this.smokeBlingEffect.play(), this.fireEffect_BL.play(), 
                    this.fireMidEffect_BL.play(), this.fireLrgEffect_BL.play(), this.fireEffect_BR.play(), 
                    this.fireMidEffect_BR.play(), this.fireLrgEffect_BR.play(), Laya.timer.once(10, this, function() {
                        this.blueSmokeEffect.stop(), this.smokeBlingEffect.stop(), this.fireEffect_BL.stop(), 
                        this.fireMidEffect_BL.stop(), this.fireLrgEffect_BL.stop(), this.fireEffect_BR.stop(), 
                        this.fireMidEffect_BR.stop(), this.fireLrgEffect_BR.stop();
                    }), this.rig = this.owner.getComponent(Laya.Rigidbody3D), this.tracks = new Array();
                }
            }, {
                key: "finishGame",
                value: function value() {
                    this.IsStart = !1, this.move.setValue(0, 0, 0), Laya.timer.once(500, this, function() {
                        Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                            LayaSample.commonData.isNoAds = !1, e.init(!0), LayaSample.scene.addView(e);
                        })), LayaSample.glEvent.event("over_game_event", {});
                    });
                }
            }, {
                key: "onUpdate",
                value: function value() {
                    if (0 != this.IsStart && !s.default.getInstance().IsGameOver) {
                        if (this.isArrived) {
                            Laya.Vector3.subtract(this.finishPos, this.owner.transform.position, this.vec);
                            Laya.Vector3.scalarLength(this.vec) > (this.isGoon ? 12 : 30) && this.finishGame();
                        }
                        this.checkRayCast(), this._isBraking ? this._curSpeed -= .01 : 0 == this._isDriftting && (this._curSpeed += .01), 
                        this._curSpeed < this._minSpeed && (this._curSpeed = this._minSpeed), this._curSpeed > this._maxSpeed && (this._curSpeed = this._maxSpeed), 
                        this.move.setValue(this.move.x, this.move.y, this._curSpeed), this.owner.transform.translate(this.move), 
                        0 == this.isGrounded ? (this.isJump = !0, this._isDriftting ? this.rotation.setValue(this.rotation.x + 1, this.owner.transform.localRotationEulerY, this.direction ? this.rotation.z + 2 : this.rotation.z - 2) : this.rotation.setValue(this.rotation.x + 2, this.owner.transform.localRotationEulerY, this.owner.transform.localRotationEulerZ), 
                        this.rotation.x > 45 && this.rotation.setValue(45, this.rotation.y, this.rotation.z), 
                        this.owner.transform.localRotationEuler = this.rotation) : this.isJump && (this.isJump = !1, 
                        this.rotation.setValue(0, this.owner.transform.localRotationEulerY, 0), this.owner.transform.localRotationEuler = this.rotation);
                    }
                }
            }, {
                key: "onTriggerEnter",
                value: function value(e) {
                    "FinishLine" == e.owner.name && (this.IsBraking = !1, this.isArrived = !0, this.finishPos = new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z), 
                    this.vec = new Laya.Vector3(), this.finishLine = e.owner.getComponent(r.default), 
                    this.finishLine.finishGame(), LayaSample.glEvent.event("finish_game_event", {}), 
                    LayaSample.soundMgr.play("finish"), this.accelerateMove()), "Trap" == e.owner.name && this.IsStart ? (LayaSample.wxMgr.playVibrateLong(), 
                    LayaSample.soundMgr.play("over"), this.gameOver()) : -1 != e.owner.name.indexOf("Accelerate") && (LayaSample.wxMgr.playVibrateShort(), 
                    LayaSample.soundMgr.play("accelerate"), this.accelerateMove(), LayaSample.glEvent.event("speed_up_event", {}));
                }
            }, {
                key: "accelerateMove",
                value: function value() {
                    this.fireLrgEffect_BL.play(), this.fireLrgEffect_BR.play(), this.changeSmoke(), 
                    this._maxSpeed *= 2, this._curSpeed *= 2, this._isBraking = !1, this._acceleratedTimer = Laya.timer.currTimer, 
                    Laya.timer.frameLoop(1, this, this.speedUp);
                }
            }, {
                key: "onCollisionEnter",
                value: function value(e) {
                    -1 != e.other.owner.name.indexOf("Barrier") && (LayaSample.wxMgr.playVibrateShort(), 
                    LayaSample.soundMgr.play("hit"), this._curSpeed /= 1.5), "Car" == e.other.owner.name && (LayaSample.wxMgr.playVibrateShort(), 
                    this._curSpeed /= 1.5);
                }
            }, {
                key: "gameOver",
                value: function value() {
                    if (this.IsStart = !1, this.move.setValue(0, 0, 0), LayaSample.commonData.goonCount > 0) {
                        Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                            LayaSample.commonData.isNoAds = !1, e.init(!1), LayaSample.scene.addView(e);
                        }));
                    } else {
                        Laya.Scene.open("views/over.scene", !1, Laya.Handler.create(this, function(e) {
                            LayaSample.commonData.isNoAds = !1, LayaSample.scene.addView(e);
                        }));
                    }
                    LayaSample.glEvent.event("over_game_event", {});
                }
            }, {
                key: "carDrifty",
                value: function value() {
                    if (!this.isArrived) {
                        var e = Math.random() > .5 ? "drift_1" : "drift_2";
                        LayaSample.soundMgr.play(e), this.Wheel_FL.IsTrail = !0, this.Wheel_FR.IsTrail = !0, 
                        this.wheel_BL.IsTrail = !0, this.wheel_BR.IsTrail = !0, this.Wheel_FL.PlayEffect(!0), 
                        this.Wheel_FR.PlayEffect(!0), this.wheel_BL.PlayEffect(!0), this.wheel_BR.PlayEffect(!0), 
                        this._isDriftting = !0, this._clickCount < this.tracks.length && (this.trackAngle = this.tracks[this._clickCount], 
                        this._clickCount++, this._driftyAngle = 1.1 * this.trackAngle), this.direction = this._isTurnLeft, 
                        this._isTurnLeft = !this._isTurnLeft, this.curAngle = this.owner.transform.localRotationEulerY, 
                        this.inertiaAngle = this._curSpeed / this._maxSpeed, this._timer = Laya.timer.currTimer, 
                        this._centrifugalSpeed = Math.abs(this.turnAngle) > 90 ? 1.1 * this._curSpeed : 1.4 * this._curSpeed, 
                        this._curSpeed /= 1.3, Laya.timer.frameLoop(1, this, this.startDrifty), this._isBraking = !0;
                    }
                }
            }, {
                key: "init",
                value: function value() {
                    this._isStart = !1, this._isDriftting = !1, this._isTurnLeft = !1, this._isBraking = !1, 
                    this.isArrived = !1, this._curSpeed = .18, this._centrifugalSpeed = 2 * this._curSpeed, 
                    this._maxSpeed = 1.5 * this._curSpeed, this._minSpeed = this._curSpeed / 1.5, this._driftyAngle = 120, 
                    this._timer = 0, this._turnTimer = .4, this._sliderTimer = .4, this._driftyTimer = .3, 
                    this.move.setValue(0, 0, 0), this.rotation.setValue(0, 0, 0), this.owner.transform.position = new Laya.Vector3(0, .8, 5), 
                    this.owner.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this._clickCount = 0, 
                    this._fixAngleY = 0, this.finishLine && this.finishLine.init(), this.tracks = s.default.getInstance().getTracks, 
                    this.leftFailCount = 0, this.rightFailCount = 0, this.isLeftFail = !1, this.isRightFail = !1, 
                    this.Wheel_FL.clear(), this.Wheel_FR.clear(), this.wheel_BL.clear(), this.wheel_BR.clear(), 
                    this.blueSmokeEffect.stop(), this.isGrounded = !0, this.isGoon = !1;
                }
            }, {
                key: "startDrifty",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = 1 / this._turnTimer * e, a = this._centrifugalSpeed * this.trackAngle / 90 * t * 1.2, i = this._driftyAngle * this.inertiaAngle * t;
                    this.direction ? (this.move.setValue(-a, 0, 0), this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + i, this.owner.transform.localRotationEulerZ), 
                    this.changeDriftFire(a / (a / t))) : (this.move.setValue(a, 0, 0), this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle - i, this.owner.transform.localRotationEulerZ), 
                    this.changeDriftFire(-a / (a / t))), this.owner.transform.localRotationEuler = this.rotation, 
                    e > this._turnTimer && (Laya.timer.clear(this, this.startDrifty), this._timer = Laya.timer.currTimer, 
                    Laya.timer.frameLoop(1, this, this.startSlide));
                }
            }, {
                key: "startSlide",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = (this._sliderTimer - e) / this._sliderTimer, a = this._centrifugalSpeed * this.trackAngle / 90 * t;
                    this.direction ? (this.move.setValue(-a, 0, this._curSpeed), this.changeDriftFire(t)) : (this.move.setValue(a, 0, this._curSpeed), 
                    this.changeDriftFire(-t)), e > this._sliderTimer && (Laya.timer.clear(this, this.startSlide), 
                    this.move.setValue(0, 0, this._curSpeed), this.curAngle = this.owner.transform.localRotationEulerY, 
                    this._timer = Laya.timer.currTimer, Laya.timer.frameLoop(1, this, this.startFixAngle), 
                    this.Wheel_FL.IsTrail = !1, this.Wheel_FR.IsTrail = !1, this.wheel_BL.IsTrail = !1, 
                    this.wheel_BR.IsTrail = !1, this.Wheel_FL.PlayEffect(!1), this.Wheel_FR.PlayEffect(!1), 
                    this.wheel_BL.PlayEffect(!1), this.wheel_BR.PlayEffect(!1));
                }
            }, {
                key: "startFixAngle",
                value: function value() {
                    var e = (new Date().valueOf() - this._timer) / 1e3, t = 1 / this._driftyTimer * e;
                    this.isGrounded && (this.direction ? this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + (this.trackAngle - this._driftyAngle * this.inertiaAngle) * t, this.owner.transform.localRotationEulerZ) : this.rotation.setValue(this.owner.transform.localRotationEulerX, this.curAngle + (this._driftyAngle * this.inertiaAngle - this.trackAngle) * t, this.owner.transform.localRotationEulerZ), 
                    this.owner.transform.localRotationEuler = this.rotation), e > this._driftyTimer && (Laya.timer.clear(this, this.startFixAngle), 
                    this._isDriftting = !1, this._fixAngleY = this.direction ? this._fixAngleY + this.trackAngle : this._fixAngleY - this.trackAngle, 
                    this.rotation.setValue(this.owner.transform.localRotationEulerX, this._fixAngleY, this.owner.transform.localRotationEulerZ), 
                    this.owner.transform.localRotationEuler = this.rotation, this.changeDriftFire(0));
                }
            }, {
                key: "speedUp",
                value: function value() {
                    (new Date().valueOf() - this._acceleratedTimer) / 1e3 > .3 && (Laya.timer.clear(this, this.speedUp), 
                    this._maxSpeed /= 2);
                }
            }, {
                key: "changeSmoke",
                value: function value() {
                    this.Wheel_FL.PlayEffect(!1), this.Wheel_FR.PlayEffect(!1), this.wheel_BL.PlayEffect(!1), 
                    this.wheel_BR.PlayEffect(!1), this.blueSmokeEffect.play(), this.smokeBlingEffect.play(), 
                    Laya.timer.once(1200, this, function() {
                        this.blueSmokeEffect.stop(), this.smokeBlingEffect.stop(), this.IsStart && this._isDriftting && (this.Wheel_FL.PlayEffect(!0), 
                        this.Wheel_FR.PlayEffect(!0), this.wheel_BL.PlayEffect(!0), this.wheel_BR.PlayEffect(!0));
                    });
                }
            }, {
                key: "changeDriftFire",
                value: function value(e) {
                    var t = new Laya.GradientDataNumber(), a = new Laya.GradientDataNumber();
                    t.add(0, 0), t.add(1, 15 * e), a.add(0, 0), a.add(1, 0);
                    var i = new Laya.VelocityOverLifetime(Laya.GradientVelocity.createByGradient(t, a, a));
                    i.enbale = !0, this.fireEffect_BL.velocityOverLifetime = i, this.fireLrgEffect_BL.velocityOverLifetime = i, 
                    this.fireMidEffect_BL.velocityOverLifetime = i, this.fireEffect_BR.velocityOverLifetime = i, 
                    this.fireLrgEffect_BR.velocityOverLifetime = i, this.fireMidEffect_BR.velocityOverLifetime = i;
                }
            }, {
                key: "checkRayCast",
                value: function value() {
                    this.from.setValue(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z), 
                    this.to.setValue(this.from.x, this.from.y - 50, this.from.z), 
                    this.scene.physicsSimulation.raycastFromTo(this.from, this.to, this.hitResult), 
                    this.hitResult.succeeded && "Trap" == this.hitResult.collider.owner.name && (this.isGrounded = !1);
                }
            }, {
                key: "goonInit",
                value: function value(e) {
                    var t = this._clickCount, a = new Laya.Vector3(e[t].transform.position.x, e[t].transform.position.y, e[t].transform.position.z), i = new Laya.Vector3(e[t].transform.rotationEuler.x, e[t].transform.rotationEuler.y, e[t].transform.rotationEuler.z);
                    a.setValue(a.x, 1, a.z), this.owner.transform.position = a, this.owner.transform.rotationEuler = i, 
                    this.IsStart = !0, this.isGrounded = !0, this.isGoon = this._clickCount == e.length - 1;
                }
            }, {
                key: "canDrifty",
                get: function get() {
                    return !this._isDriftting && !s.default.getInstance().IsGameOver && this._clickCount < this.tracks.length;
                }
            }, {
                key: "IsStart",
                get: function get() {
                    return this._isStart;
                },
                set: function set(e) {
                    this._isStart = e, e ? (this.fireEffect_BL.play(), this.fireMidEffect_BL.play(), 
                    this.fireLrgEffect_BL.play(), this.fireEffect_BR.play(), this.fireMidEffect_BR.play(), 
                    this.fireLrgEffect_BR.play(), this.Wheel_FL.PlayEffect(!0), this.Wheel_FR.PlayEffect(!0), 
                    this.wheel_BL.PlayEffect(!0), this.wheel_BR.PlayEffect(!0), Laya.timer.once(300, this, function() {
                        this.Wheel_FL.PlayEffect(!1), 
                        this.Wheel_FR.PlayEffect(!1), 
                        this.wheel_BL.PlayEffect(!1), 
                        this.wheel_BR.PlayEffect(!1);
                    })) : (this.fireEffect_BL.stop(), this.fireMidEffect_BL.stop(), this.fireLrgEffect_BL.stop(), 
                    this.fireEffect_BR.stop(), this.fireMidEffect_BR.stop(), this.fireLrgEffect_BR.stop(), 
                    this.Wheel_FL.PlayEffect(!1), this.Wheel_FR.PlayEffect(!1), this.wheel_BL.PlayEffect(!1), 
                    this.wheel_BR.PlayEffect(!1));
                }
            }, {
                key: "IsBraking",
                get: function get() {
                    return this._isBraking;
                },
                set: function set(e) {
                    this._isBraking = e;
                }
            } ]), t;
        }();
        a.default = l;
    }, {
        "../GameContext": 6,
        "./GameFinishComponent": 23,
        "./TrailComponent": 24
    } ],
    23: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script3D), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.fireworks = new Array(), this.fireworks_Land = this.owner.getChildByName("FX_DriftFireworks_Land"), 
                    this.fireworks_sky = this.owner.getChildByName("FX_DriftFireworks_Sky");
                    for (t = 0; t < 6; t++) {
                        var e = this.fireworks_Land.getChildByName("FX_Land" + (t + 1));
                        this.fireworks[t] = e.particleSystem;
                    }
                    for (var t = 6; t < 14; t++) {
                        this.fireworks[t] = this.fireworks_sky.getChildByName("FX_Sky" + (t - 5)).particleSystem;
                    }
                    this.play(), Laya.timer.once(100, this, this.stop);
                }
            }, {
                key: "init",
                value: function value() {
                    this.stop();
                }
            }, {
                key: "finishGame",
                value: function value() {
                    this.play();
                }
            }, {
                key: "play",
                value: function value() {
                    this.fireworks.forEach(function(e) {
                        e.play();
                    });
                }
            }, {
                key: "stop",
                value: function value() {
                    this.fireworks.forEach(function(e) {
                        e.stop();
                    });
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    24: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, Laya.Script3D), i(t, [ {
                key: "onAwake",
                value: function value() {
                    this.prefab = this.owner.getChildByName("Trail"), this.trail = this.owner.getChildByName("Trail").trailRenderer;
                    var e = this.owner.getChildByName("FX_DriftSmokeS");
                    e && (this.smokeEffect = e.particleSystem, this.smokeEffect.stop()), this.trail.enable = !1;
                }
            }, {
                key: "PlayEffect",
                value: function value(e) {
                    void 0 != this.smokeEffect && (e ? this.smokeEffect.play() : this.smokeEffect.stop());
                }
            }, {
                key: "clear",
                value: function value() {
                    this.trailParent && (this.trailParent.destroy(), this.trailParent = null);
                }
            }, {
                key: "IsTrail",
                set: function set(e) {
                    if (e) this.trail.enable = e, this._isTrail = e; else {
                        var t = this.owner.getChildByName("Trail");
                        t && (void 0 == this.trailParent && (this.trailParent = Laya.stage.getChildAt(0).addChild(new Laya.Sprite3D("trailParent"))), 
                        this.trailParent.addChild(t)), this.cloneTrail = Laya.Sprite3D.instantiate(this.prefab, this.owner, !1), 
                        this.prefab = this.cloneTrail, this.trail = this.cloneTrail.trailRenderer, this.trail.enable = !1;
                    }
                }
            } ]), t;
        }();
        a.default = n;
    }, {} ],
    25: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return i(e, [ {
                key: "init",
                value: function value() {}
            }, {
                key: "clear3DRes",
                value: function value(e, t) {
                    for (var a = 0; a < e.length; ++a) {
                        var i = Laya.loader.getRes(e[a].url);
                        i && i.releaseResource(!0), Laya.Loader.clearRes(e[a].url, !0);
                    }
                }
            } ]), e;
        }();
        a.default = n;
    }, {} ],
    26: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("../plug/MD5")), r = i(e("../plug/Dict")), s = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return n(e, null, [ {
                key: "Request",
                value: function value(t, a, i) {
                    var n = new Laya.HttpRequest();
                    n.once(Laya.Event.COMPLETE, this, this.Response), n.once(Laya.Event.ERROR, this, this.errorHandler), 
                    n.on(Laya.Event.PROGRESS, this, this.progressHandler), e.messageDict.set(t, {
                        method: t,
                        parm: a,
                        cb: i,
                        httpObj: n
                    });
                    var o = this.host + t, r = this.setParmData(a);
                    n.send(o, r, "post", "json", [ "Content-Type", "application/json;charset=UTF-8" ]);
                }
            }, {
                key: "setParmData",
                value: function value(t) {
                    var a = this.apiKey;
                    t.apiKey = a, t.version = this.version, t.timestamp = Date.parse(new Date()) / 1e3, 
                    t.apiSign = "", e.token && (t.token = e.token);
                    var i = "", n = new Array();
                    for (var r in t) {
                        n.push(r);
                    }
                    n = n.sort();
                    for (var s = 0; s < n.length; s++) {
                        i += encodeURIComponent(t[n[s]]);
                    }
                    var l = o.default.hex_hmac_md5(this.apiSecret, i);
                    return t.apiSign = l, t;
                }
            }, {
                key: "errorHandler",
                value: function value(e) {
                    LayaSample.wxMgr && (console.log("重连..."), this.reLogin());
                }
            }, {
                key: "clearRequist",
                value: function value(t) {
                    for (var a in e.httpQueue) {
                        a == t && delete e.httpQueue[a];
                    }
                }
            }, {
                key: "reLogin",
                value: function value() {
                    this._reqCount += 1, this._reqCount < 7 ? (console.error("网络错误，尝试重连第 " + this._reqCount + " 次"), 
                    setTimeout(function(e) {
                        LayaSample.wxMgr.login();
                    }, 1e3 * this._reqCount)) : LayaSample.wxMgr.showToast("网络出现错误，请稍后再试", 7e3);
                }
            }, {
                key: "progressHandler",
                value: function value(e) {}
            }, {
                key: "Response",
                value: function value(t) {
                    var a = t.path, i = e.messageDict.get(a);
                    i && i.cb && i.cb(t), 200 == t.code && "v10/common/temporaryLogin" != a ? (this._requData = i, 
                    this.reLogin()) : ("v10/common/temporaryLogin" == a && 0 == t.code && this._requData && (this._requData.httpObj.http.abort(), 
                    LayaSample.netMgr.Request(this._requData.method, this._requData.parm, this._requData.cb)), 
                    this._requData = null, this.clearRequist(a)), this._reqCount = 0;
                }
            } ]), e;
        }();
        a.default = s, s.httpQueue = {}, s._reqCount = 0, s.version = 10, s.deviceType = "wxapp", 
        s.host = "https://xcx4.bangcr.com/", s.apiKey = "UVnZxkiBKShKBm7Ew2nOna2uIJi2idtl", 
        s.apiSecret = "D8reYFhGGh52DfpF6NKiYNSAyo4HrT3H", s.token = null, s.messageDict = new r.default();
    }, {
        "../plug/Dict": 30,
        "../plug/MD5": 31
    } ],
    27: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this._soundFile = [ "finish", "accelerate", "hit", "drift_1", "drift_2", "over" ], 
                this._soundCtx = {};
            }
            return i(e, [ {
                key: "init",
                value: function value() {
                    if (Laya.Browser.onWeiXin) for (var e = "", t = this._soundFile, a = this._soundFile.length, i = 0; i < a; ++i) {
                        e = t[i];
                        var n = wx.createInnerAudioContext();
                        n.src = "sounds/" + e + ".mp3", this._soundCtx[e] = n;
                    }
                }
            }, {
                key: "play",
                value: function value(e) {
                    //Laya.Browser.onWeiXin && this._soundCtx[e] && LayaSample.storageMgr.isPlaySound() && this._soundCtx[e].play();
                    if(e==14) return;
                    Laya.SoundManager.playSound("sounds/" + e + ".mp3");
                }
            }, {
                key: "stop",
                value: function value(e) {
                    //Laya.Browser.onWeiXin && this._soundCtx[e] && this._soundCtx[e].stop();
                    if(e==14) return;
                    Laya.SoundManager.stopSound("sounds/" + e + ".mp3");
                }
            } ]), e;
        }();
        a.default = n;
    }, {} ],
    28: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this._userData = null, this._userDataKey = "userData", this.init();
            }
            return i(e, [ {
                key: "init",
                value: function value() {
                    this._userData = {
                        isPlaySound: !1,
                        isPlayVibrate: !0,
                        isNoAds: !1,
                        levelID: 0,
                        isCollect: !1
                    }, this.readStorage(), this.initGameStatus(), void 0 == this._userData.isNoAds && (this._userData.isNoAds = !1);
                }
            }, {
                key: "readStorage",
                value: function value() {
                    var e = Laya.LocalStorage.getItem(this._userDataKey);
                    e && (this._userData = JSON.parse(e));
                }
            }, {
                key: "writeStorage",
                value: function value() {
                    this._userData && Laya.LocalStorage.setItem(this._userDataKey, JSON.stringify(this._userData));
                }
            }, {
                key: "removeStorage",
                value: function value() {
                    Laya.LocalStorage.removeItem(this._userDataKey);
                }
            }, {
                key: "isNoAds",
                value: function value() {
                    return this._userData.isNoAds;
                }
            }, {
                key: "setNoAds",
                value: function value(e) {
                    this._userData.isNoAds = e, this.writeStorage();
                }
            }, {
                key: "isPlaySound",
                value: function value() {
                    return this._userData.isPlaySound;
                }
            }, {
                key: "setPlaySound",
                value: function value(e) {
                    this._userData.isPlaySound = e, this.writeStorage();
                }
            }, {
                key: "isPlayVibrate",
                value: function value() {
                    return this._userData.isPlayVibrate;
                }
            }, {
                key: "setPlayVibrate",
                value: function value(e) {
                    this._userData.isPlayVibrate = e, this.writeStorage();
                }
            }, {
                key: "setCollect",
                value: function value(e) {
                    this._userData.isCollect = e, this.writeStorage();
                }
            }, {
                key: "isCollect",
                value: function value() {
                    return this._userData.isCollect;
                }
            }, {
                key: "initGameStatus",
                value: function value() {
                    this._userData.gameStatus || (this._userData.gameStatus = {
                        maxLevel: 0,
                        maxScore: 0,
                        gold: 0
                    }), this._userData.signinTime || (this._userData.signinTime = 0), this.writeStorage();
                }
            }, {
                key: "isSignin",
                value: function value() {
                    var e = !0, t = this._userData.signinTime;
                    return e = t < 2 || !(t < 3) && Math.floor(t / 86400) == Math.floor(Date.parse(new Date()) / 864e5), 
                    e;
                }
            }, {
                key: "setSigninTime",
                value: function value(e) {
                    this._userData.signinTime = e, this.writeStorage();
                }
            }, {
                key: "getSigninTime",
                value: function value() {
                    return this._userData.signinTime;
                }
            }, {
                key: "getGameStatus",
                value: function value() {
                    return this._userData.gameStatus;
                }
            }, {
                key: "setMaxLevel",
                value: function value(e) {
                    e > this._userData.gameStatus.maxLevel && (this._userData.gameStatus.maxLevel = e, 
                    this.writeStorage());
                }
            }, {
                key: "addGold",
                value: function value(e) {
                    this._userData.gameStatus.gold += e, this.writeStorage();
                }
            }, {
                key: "setMaxScore",
                value: function value(e) {
                    e > this._userData.gameStatus.maxScore && (this._userData.gameStatus.maxScore = e, 
                    this.writeStorage());
                }
            } ]), e;
        }();
        a.default = n, n.commonData = {
            newScore: 1,
            newLevel: 1,
            goonCount: 0,
            isGame: !1,
            isSleep: !1,
            currentVersion: "10",
            showRevivalCard: !1,
            needWxAuthorize: !1,
            userInfo: {},
            existVideoAd: !1,
            existBannerAd: !1,
            bannerAdID: "adunit-aed32df72a3438ac",
            videoAdID: "adunit-ffa1f0581400ac8a",
            interstitialAdID: "adunit-0ebe4448086913de",
            isNoAds: !1,
            isAdDelay: !1,
            shareInfo: {},
            launchOptions: {},
            wxappList: {},
            wxysysInfo: {},
            roleSkinList: [],
            pillarSkinList: [],
            signin: null,
            isCheckSignin: !1
        };
    }, {} ],
    29: [ function(e, t, a) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = i(e("../GameContext")), r = i(e("../Utils")), s = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return n(e, null, [ {
                key: "init",
                value: function value() {
                    if (this.preTime = 0, this.buttonAuthorize1 = null, this.videoAd = null, this._bannerList = [], 
                    this._bannerIndex = -1, this._bannerError = 0, this._shareStartTime = new Date().getTime() + 86e3, 
                    this._isCreateWxInfoBtn = !1, Laya.Browser.onWeiXin) {
                        var e = wx.getSystemInfoSync();
                        LayaSample.commonData.wxysysInfo = e, LayaSample.screen.statusBarHeight = e.statusBarHeight, 
                        this._regisiterWXCallback(), this.getLaunchOption(), this.showShareMenuWithTicket(!0), 
                        this.login(), this.getBannerAd(), this.getVideoAd();
                        var t = LayaSample.commonData.wxysysInfo.SDKVersion;
                        this._isCreateInter = r.default.compareVersion(t, "2.6.0") >= 0, this.getInterstitialAd();
                    }
                }
            }, {
                key: "login",
                value: function value() {
                    if (Laya.Browser.onWeiXin) {
                        var e = this;
                        wx.login({
                            success: function success(t) {
                                var a = t.code, i = LayaSample.commonData.launchOptions, n = {};
                                n.code = a, i.scene && (n.scene_id = i.scene), i.referrerInfo && i.referrerInfo.appId && (n.appid = i.referrerInfo.appId), 
                                i.query && (i.query.id && (n.share_user_id = parseInt(i.query.id)), i.query.share_id && (n.share_id = parseInt(i.query.share_id)), 
                                i.query.channel ? n.channel = i.query.channel : i.referrerInfo && i.referrerInfo.extraData && i.referrerInfo.extraData.channel && (n.channel = i.referrerInfo.extraData.channel)), 
                                n.late_version = 21, LayaSample.netMgr.Request("v20/common/temporaryLogin", n, function(t) {
                                    if (0 !== t.code) console.error("code login fault. code:" + t.code); else {
                                        console.log("code 登录成功", t);
                                        var a = t.result, i = "" == a.userInfo.avatar;
                                        LayaSample.commonData.needWxAuthorize = i, i && !this._isCreateWxInfoBtn && e.createWxInfoBtn1(), 
                                        e.setLoginInfo(a), e.setUserInfo(a), e._regisiterWXShareCallback(), LayaSample.commonData.shareConfig = t.result.shareConfig, 
                                        LayaSample.commonData.loginNum = t.result.userInfo.login_num, LayaSample.commonData.totalLoginNum = t.result.userInfo.total_login_num, 
                                        LayaSample.glEvent.event("login_event");
                                    }
                                });
                            }
                        });
                    }
                }
            }, {
                key: "createWxInfoBtn1",
                value: function value() {
                    this._isCreateWxInfoBtn = !0;
                    var e = this, t = LayaSample.commonData.wxysysInfo, a = t.screenWidth, i = t.screenHeight, n = {
                        left: (t.screenWidth - a) / 2,
                        top: (t.screenHeight - i) / 2,
                        width: a,
                        height: i,
                        lineHeight: i,
                        backgroundColor: "#00000000",
                        color: "#ffffffff",
                        textAlign: "center",
                        fontSize: 16,
                        borderRadius: 4
                    };
                    e.buttonAuthorize1 = wx.createUserInfoButton({
                        type: "text",
                        text: "",
                        style: n
                    }), e.showAuthorizeBtn(!1), e.buttonAuthorize1.onTap(function(t) {
                        var a = new Date().getTime(), i = Math.floor((a - e.preTime) / 1e3);
                        if (e.preTime = a, !(i < 1)) {
                            if (t.userInfo) {
                                console.log("用户授权登录");
                                var n = {};
                                n.encrypted_data = t.encryptedData, n.iv = t.iv, LayaSample.netMgr.Request("v10/common/authorizedLogin", n, function(t) {
                                    0 !== t.code ? console.error("authorized login fault. code:" + t.code) : e.setUserInfo(t.result);
                                });
                            } else console.log("授权取消");
                            LayaSample.commonData.needWxAuthorize = !1, e.showAuthorizeBtn(!1);
                        }
                    });
                }
            }, {
                key: "getSkinData",
                value: function value(e) {
                    LayaSample.netMgr.Request("v10/skin/lists", {}, function(t) {
                        if (0 != t.code) console.error("skin lists error", t); else {
                            for (var a = t.result.roleSkinList, i = 0; i < 4; ++i) {
                                a[i].is_default;
                            }
                            LayaSample.commonData.roleSkinList = t.result.roleSkinList, LayaSample.commonData.pillarSkinList = t.result.pillarSkinList, 
                            LayaSample.glEvent.event("load_finish_event", {
                                target: "skinData"
                            }), void 0 != e && e(t);
                        }
                    });
                }
            }, {
                key: "setLoginInfo",
                value: function value(e) {
                    var t = e.shareConfig;
                    LayaSample.commonData.showRevivalCard = !0, t.version == LayaSample.commonData.currentVersion && (LayaSample.commonData.showRevivalCard = "0" != t.share), 
                    LayaSample.commonData.isAdDelay = "0" != t.delay;
                    var a = e.shareContent, i = a.length, n = 0;
                    LayaSample.commonData.shareInfo = {};
                    for (var o = 0; o < i; ++o) {
                        n = a[o].share_type;
                        var r = LayaSample.commonData.shareInfo[n];
                        r || (r = [], LayaSample.commonData.shareInfo[n] = r), r.push(a[o]);
                    }
                    LayaSample.commonData.wxappList = {};
                    var s = !0, l = !1, h = void 0;
                    try {
                        for (var c, u = e.wxappList[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) {
                            var f = c.value, m = LayaSample.commonData.wxappList[f.category];
                            m || (m = [], LayaSample.commonData.wxappList[f.category] = m), Laya.Browser.onIOS && 1 == f.is_box || m.push(f);
                        }
                    } catch (e) {
                        l = !0, h = e;
                    } finally {
                        try {
                            !s && u.return && u.return();
                        } finally {
                            if (l) throw h;
                        }
                    }
                }
            }, {
                key: "setUserInfo",
                value: function value(e) {
                    LayaSample.netMgr.token = e.token, LayaSample.commonData.userInfo = e.userInfo, 
                    0 != e.userInfo.last_sign_time && LayaSample.storageMgr.setSigninTime(e.userInfo.last_sign_time), 
                    LayaSample.commonData.isCheckSignin = !0;
                    var t = LayaSample.storageMgr.getGameStatus(), a = e.userInfo.pass < t.maxLevel ? t.maxLevel : e.userInfo.pass, i = e.userInfo.max_score < t.maxScore ? t.maxScore : e.userInfo.max_score;
                    LayaSample.glEvent.event("updateCoin", {}), 0 != a ? this.settlementLevel(a) : this._submitScroe(i);
                }
            }, {
                key: "showAuthorizeBtn",
                value: function value(e) {
                    this.buttonAuthorize1 && (e ? this.buttonAuthorize1.show() : this.buttonAuthorize1.hide());
                }
            }, {
                key: "getLaunchOption",
                value: function value() {
                    LayaSample.commonData.launchOptions = wx.getLaunchOptionsSync();
                }
            }, {
                key: "showToast",
                value: function value(e, t) {
                    window.wx && wx.showToast({
                        title: e,
                        duration: t,
                        icon: "none"
                    });
                }
            }, {
                key: "hideToast",
                value: function value() {
                    window.wx && wx.hideToast();
                }
            }, {
                key: "_regisiterWXShareCallback",
                value: function value() {
                    var e = this;
                    Laya.Browser.onWeiXin && LayaSample.netMgr.token && wx.onShareAppMessage(function() {
                        var t = e.getShareContent(1), a = {
                            title: t.share_title,
                            imageUrl: t.share_img,
                            query: "share_id=" + t.share_id + "&share_type=" + t.share_type + "&id=" + LayaSample.commonData.userInfo.id,
                            success: function success(e) {},
                            fail: function fail() {}
                        };
                        return e._upShareInfo(t.share_id), a;
                    });
                }
            }, {
                key: "settlementLevel",
                value: function value(e) {
                    if (LayaSample.storageMgr.getGameStatus().maxLevel <= e) {
                        var t = {};
                        t.pass = e, t.use_time = 1, LayaSample.storageMgr.setMaxLevel(e), LayaSample.netMgr.Request("v10/user/pass", t, function(t) {
                            0 == t.code && (LayaSample.glEvent.event("updateCoin", {}), LayaSample.commonData.userInfo.pass = e);
                        }), this._submitScroe(e);
                    }
                }
            }, {
                key: "buySkin",
                value: function value(e, t) {
                    var a = {};
                    a.type = e, LayaSample.netMgr.Request("v10/skin/randBuy", a, function(e) {
                        void 0 != t && t(e);
                    });
                }
            }, {
                key: "changeSkin",
                value: function value(e, t) {
                    var a = {};
                    a.skin_type = e, a.skin_id = t, LayaSample.netMgr.Request("v10/skin/switchSkin", a, function(e) {});
                }
            }, {
                key: "worldRank",
                value: function value(e) {
                    var t = {
                        page: e
                    };
                    LayaSample.netMgr.Request("v10/user/worldRanking", t, function(t) {
                        0 == t.code ? LayaSample.glEvent.event("draw_world_rank_event", {
                            data: t.result,
                            page: e
                        }) : console.error("get world ranking error:", t, e);
                    });
                }
            }, {
                key: "_submitScroe",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        wx.getOpenDataContext().postMessage({
                            cmd: "submit_scroe",
                            score: e
                        }), LayaSample.glEvent.event("submit_scroe_event", {});
                    }
                }
            }, {
                key: "showFriendRank",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        LayaSample.glEvent.event("show_friend_rank_event", {
                            isShow: e
                        });
                        var t = e ? "open_friend_rank" : "close_friend_rank";
                        wx.getOpenDataContext().postMessage({
                            cmd: t
                        });
                    }
                }
            }, {
                key: "destroyFriendRank",
                value: function value() {
                    if (Laya.Browser.onWeiXin) {
                        wx.getOpenDataContext().postMessage({
                            cmd: "destroy_friend_rank"
                        });
                    }
                }
            }, {
                key: "showLiteRank",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        var t = e ? "open_lite_rank" : "close_lite_rank";
                        wx.getOpenDataContext().postMessage({
                            cmd: t
                        }), LayaSample.glEvent.event("show_lite_rank_event", {
                            isShow: e
                        });
                    }
                }
            }, {
                key: "showOverFriendTips",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        var t = e ? "open_over_friend" : "close_over_friend";
                        wx.getOpenDataContext().postMessage({
                            cmd: t,
                            score: o.default.getInstance().currentLevel
                        }), LayaSample.glEvent.event("over_friend_event", {
                            isShow: e
                        });
                    }
                }
            }, {
                key: "showLoopFriendTips",
                value: function value(e) {
                    if (Laya.Browser.onWeiXin) {
                        var t = e ? "open_loop_friend" : "close_loop_friend";
                        wx.getOpenDataContext().postMessage({
                            cmd: t,
                            score: LayaSample.commonData.newScore
                        }), LayaSample.glEvent.event("loop_over_event", {
                            isShow: e
                        });
                    }
                }
            }, {
                key: "restartGame",
                value: function value() {
                    if (Laya.Browser.onWeiXin) {
                        wx.getOpenDataContext().postMessage({
                            cmd: "restart_game"
                        });
                    }
                }
            }, {
                key: "onFrientMouseEvent",
                value: function value(e) {
                    Laya.Browser.onWeiXin && wx.getOpenDataContext().postMessage(e);
                }
            }, {
                key: "playVibrateShort",
                value: function value() {
                    Laya.Browser.onWeiXin && LayaSample.storageMgr.isPlayVibrate() && wx.vibrateShort({
                        success: function success(e) {}
                    });
                }
            }, {
                key: "playVibrateLong",
                value: function value() {
                    Laya.Browser.onWeiXin && LayaSample.storageMgr.isPlayVibrate() && wx.vibrateLong({
                        success: function success(e) {}
                    });
                }
            }, {
                key: "showShareMenuWithTicket",
                value: function value(e) {
                    window.wx && wx.showShareMenu({
                        withShareTicket: e
                    });
                }
            }, {
                key: "_regisiterWXCallback",
                value: function value() {
                    Laya.Browser.onWeiXin && (wx.offShow(this.onShowEvent), wx.onShow(this.onShowEvent), 
                    wx.offHide(this.onHideEvent), wx.onHide(this.onHideEvent));
                }
            }, {
                key: "onShowEvent",
                value: function value(e) {
                    var t = LayaSample.wxMgr;
                    if (LayaSample.commonData.isSleep = !1, LayaSample.glEvent.event("wx_wake_event", {}), 
                    t._statuShareGame) {
                        t._statuShareGame = !1;
                        var a = !(new Date().getTime() - t._shareStartTime < 3e3);
                        a && t._upShareInfo(t._shareId), LayaSample.glEvent.event("share_back_event", {
                            isShare: a,
                            shareId: t._shareId
                        }), t._shareStartTime = new Date().getTime() + 86e3;
                    }
                }
            }, {
                key: "onHideEvent",
                value: function value() {
                    LayaSample.commonData.isSleep = !0;
                    LayaSample.wxMgr;
                    LayaSample.glEvent.event("wx_sleep_event", {});
                }
            }, {
                key: "showBannerAd",
                value: function value() {
                    var e = this.getBannerItem();
                    Laya.Browser.onWeiXin && e && (LayaSample.commonData.isNoAds || LayaSample.commonData.existBannerAd && e.ad.show().then(function() {
                        LayaSample.glEvent.event("ad_show_event", {
                            adtype: "banner",
                            index: e.index
                        });
                    }).catch(function(e) {}));
                }
            }, {
                key: "hideBannerAd",
                value: function value() {
                    for (var e = 0, t = this._bannerList.length; e < t; ++e) {
                        this._bannerList[e] && this._bannerList[e].ad.hide();
                    }
                }
            }, {
                key: "showVideoAd",
                value: function value(e) {
                    var t = this;
                    Laya.Browser.onWeiXin && t.videoAd && (t._show_video_type = e, t._upViewVideoInfo(e, 0), 
                    t.videoAd.show().then(function() {}).catch(function(e) {
                        t.videoAd.load().then(function() {
                            return t.videoAd.show();
                        });
                    }));
                }
            }, {
                key: "getBannerItem",
                value: function value() {
                    var e = this._bannerList.length > 0 ? this._bannerIndex : 0;
                    return this._bannerList[e];
                }
            }, {
                key: "setBannerAdWidth",
                value: function value(e) {
                    var t = this.getBannerItem();
                    if (t && e) {
                        var a = (LayaSample.commonData.wxysysInfo.screenWidth - e) / 2;
                        t.ad.style.width = e, t.ad.style.left = a;
                    }
                }
            }, {
                key: "setBannerAdTop",
                value: function value(e) {
                    var t = this.getBannerItem();
                    t && void 0 !== e && (t.ad.style.top = e);
                }
            }, {
                key: "getBannerAd",
                value: function value() {
                    if (Laya.Browser.onWeiXin && !LayaSample.commonData.isNoAds && !LayaSample.commonData.isSleep) {
                        var e = this, t = LayaSample.commonData.wxysysInfo, a = t.screenWidth, i = (t.screenWidth - a) / 2, n = .806 * t.screenHeight, o = {
                            width: a
                        }, r = wx.createBannerAd({
                            adUnitId: LayaSample.commonData.bannerAdID,
                            style: {
                                left: i,
                                top: n,
                                width: a
                            }
                        });
                        o.ad = r, r.onLoad(function() {
                            LayaSample.commonData.existBannerAd = !0, LayaSample.glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !0
                            });
                            var t = e._bannerIndex;
                            ++t >= 2 && (t = 0), e._bannerList[t] && (e._bannerList[t].ad.hide(), e._bannerList[t].ad.destroy()), 
                            o.index = t, e._bannerList[t] = o, e._bannerIndex = t, e._bannerError = 0, console.log("banner 加载广告", t);
                        }), r.onError(function(t) {
                            console.error("banner 加载错误：", t), e._bannerError += 1, e._bannerError > 3 && (e._bannerError = 3, 
                            LayaSample.commonData.existBannerAd = !1), LayaSample.glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !1
                            });
                        }), r.onResize(function(e) {
                            if (r) {
                                var a = r.style.realHeight + .1;
                                t.model.startsWith("iPhone X") && (a += 40 / Laya.Browser.height * LayaSample.gameConfig.height), 
                                r.style.top = t.screenHeight - a, o.width = r.style.realWidth, o.height = a, LayaSample.glEvent.event("ad_resize_event", {
                                    adtype: "banner",
                                    index: o.index
                                });
                            }
                        });
                    }
                }
            }, {
                key: "getVideoAd",
                value: function value() {
                    var e = this;
                    Laya.Browser.onWeiXin && (e.videoAd || (e.videoAd = wx.createRewardedVideoAd({
                        adUnitId: LayaSample.commonData.videoAdID
                    }), e.videoAd.onLoad(function() {
                        console.log("video 加载成功"), LayaSample.commonData.existVideoAd = !0, LayaSample.glEvent.event("ad_load_event", {
                            adtype: "video",
                            isLoad: !0
                        });
                    }), e.videoAd.onError(function(e) {
                        console.error("video 加载错误", e), LayaSample.commonData.existVideoAd = !1, LayaSample.glEvent.event("ad_load_event", {
                            adtype: "video",
                            isLoad: !1
                        });
                    }), e.videoAd.onClose(function(t) {
                        var a = !!(t && t.isEnded || void 0 === t);
                        a && e._upViewVideoInfo(e._show_video_type, 1), LayaSample.glEvent.event("ad_video_close_event", {
                            isEnded: a
                        });
                    })));
                }
            }, {
                key: "showInterstitialAd",
                value: function value(e) {
                    var t = this._interAd;
                    this._isCreateInter && t && t.show().then(function() {
                        LayaSample.commonData.watchInter = !0;
                    }).catch(function(e) {
                        console.error("Interstitial 显示错误", e);
                    });
                }
            }, {
                key: "getInterstitialAd",
                value: function value() {
                    if (this._isCreateInter && wx.createInterstitialAd) {
                        var e = this._interAd;
                        e && (e.offLoad(this._onLoadInterstitial), e.offError(this._onErrorInterstitial), 
                        e.offClose(this._onCloseInterstitial)), (e = wx.createInterstitialAd({
                            adUnitId: LayaSample.commonData.interstitialAdID
                        })).onLoad(this._onLoadInterstitial), e.onError(this._onErrorInterstitial), e.onClose(this._onCloseInterstitial), 
                        this._interAd = e;
                    }
                }
            }, {
                key: "_onLoadInterstitial",
                value: function value() {
                    console.log("Interstitial 加载成功"), LayaSample.commonData.existInterAd = !0, LayaSample.glEvent.event("ad_load_event", {
                        adtype: "inter",
                        isLoad: !0
                    });
                }
            }, {
                key: "_onErrorInterstitial",
                value: function value(e) {
                    console.error("Interstitial 加载错误", e), LayaSample.commonData.existInterAd = !1, 
                    LayaSample.glEvent.event("ad_load_event", {
                        adtype: "inter",
                        isLoad: !1
                    });
                }
            }, {
                key: "_onCloseInterstitial",
                value: function value(e) {
                    console.error("Interstitial 关闭", e);
                }
            }, {
                key: "openOtherApp",
                value: function value(e, t) {
                    if (Laya.Browser.onWeiXin) {
                        var a = LayaSample.commonData.wxappList[t], i = "", n = -1, o = -1;
                        if (a) {
                            var r = !0, s = !1, l = void 0;
                            try {
                                for (var h, c = a[Symbol.iterator](); !(r = (h = c.next()).done); r = !0) {
                                    var u = h.value;
                                    if (u.app_id == e) {
                                        n = u.wx_id, o = u.ad_id, i = u.app_path;
                                        break;
                                    }
                                }
                            } catch (e) {
                                s = !0, l = e;
                            } finally {
                                try {
                                    !r && c.return && c.return();
                                } finally {
                                    if (s) throw l;
                                }
                            }
                        }
                        wx.navigateToMiniProgram({
                            appId: e,
                            path: i,
                            success: function success(t) {
                                -1 != n ? LayaSample.netMgr.Request("v10/common/clickWxapp", {
                                    wx_id: n,
                                    ad_id: o,
                                    type: 1
                                }, function(e) {
                                    0 !== e.code && console.error("log goto wxapp fault. code:" + e);
                                }) : console.error("click app not find id,for appid:", e);
                            },
                            fail: function fail(e) {
                                LayaSample.netMgr.Request("v10/common/clickWxapp", {
                                    wx_id: n,
                                    ad_id: o,
                                    type: 0
                                }, function(e) {
                                    0 !== e.code && console.error("log goto wxapp fault. code:" + e);
                                }), LayaSample.glEvent.event("cancel_open_app_event", {});
                            }
                        });
                    }
                }
            }, {
                key: "getWxappList",
                value: function value(e) {
                    var t = LayaSample.commonData.wxappList[e], a = [];
                    if (t) {
                        var i = !0, n = !1, o = void 0;
                        try {
                            for (var r, s = t[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                                var l = r.value;
                                if (l.app_id) {
                                    var h = {};
                                    h.app_img = l.app_img, h.app_id = l.app_id, h.category = l.category, h.weight = l.weight, 
                                    a.push(h);
                                }
                            }
                        } catch (e) {
                            n = !0, o = e;
                        } finally {
                            try {
                                !i && s.return && s.return();
                            } finally {
                                if (n) throw o;
                            }
                        }
                        a.sort(function(e, t) {
                            return e.weight - t.weight;
                        });
                    }
                    return a;
                }
            }, {
                key: "shareFriend",
                value: function value(e, t) {
                    if (Laya.Browser.onWeiXin) {
                        var a = void 0, i = this.getShareContent(e);
                        t && (this._shareStartTime = new Date().getTime(), this._statuShareGame = !0, this._shareId = i.share_id), 
                        a = {
                            title: i.share_title,
                            imageUrl: i.share_img,
                            query: "share_id=" + i.share_id + "&share_type=" + i.share_type + "&id=" + LayaSample.commonData.userInfo.id,
                            success: function success(e) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        }, wx.shareAppMessage(a);
                    }
                }
            }, {
                key: "getShareContent",
                value: function value(e) {
                    var t = LayaSample.commonData.shareInfo[e], a = {
                        share_title: "老铁快帮我点点，差一点就过关了",
                        share_img: "https://p.ddkaoshi.com/share-cover/20190323/02d56daa23ab70802c183d1d7dfae8d9.png",
                        share_id: 1
                    };
                    return t && (a = t[Math.floor(Math.random() * t.length)]), a;
                }
            }, {
                key: "_upViewVideoInfo",
                value: function value(e, t) {
                    var a = {};
                    a.ad_type = e, a.type = 0 === t ? 0 : 1, LayaSample.netMgr.Request("v10/user/viewVideo", a, function(e) {
                        0 !== e.code && console.error("upload video info error.");
                    });
                }
            }, {
                key: "_upShareInfo",
                value: function value(e) {
                    var t = {};
                    t.share_id = e, LayaSample.netMgr.Request("v10/user/recordShare", t, function(e) {
                        0 !== e.code && console.error("upload user share fault.");
                    });
                }
            }, {
                key: "getSignData",
                value: function value(e, t) {
                    LayaSample.netMgr.Request("v10/activity/signPrize", {}, function(a) {
                        0 !== a.code ? console.error("get sign data fault.") : (LayaSample.commonData.signin = a.result, 
                        t && t.call(e, a.result));
                    });
                }
            }, {
                key: "getSignPrize",
                value: function value(e, t, a) {
                    var i = this, n = {};
                    n.double = a ? 1 : 0, LayaSample.netMgr.Request("v10/activity/getSignPrize", n, function(a) {
                        0 !== a.code ? i.showToast(a.msg, 2e3) : (LayaSample.commonData.signin = a.result, 
                        t && t.call(e, a.result));
                    });
                }
            }, {
                key: "getDiskData",
                value: function value(e, t) {
                    var a = this;
                    LayaSample.netMgr.Request("v10/activity/turntablePrize", {}, function(i) {
                        0 !== i.code ? a.showToast(i.msg, 2e3) : t && t.call(e, i.result);
                    });
                }
            }, {
                key: "getDiskPrize",
                value: function value(e, t, a, i) {
                    var n = this, o = {};
                    o.type = a, 1 == a && (o.share_content_id = i), LayaSample.netMgr.Request("v10/activity/luckDraw", o, function(a) {
                        0 !== a.code ? n.showToast(a.msg, 2e3) : t && t.call(e, a.result);
                    });
                }
            }, {
                key: "getDiskDouble",
                value: function value(e, t, a) {
                    var i = this;
                    LayaSample.netMgr.Request("v10/activity/prizeDouble", a, function(a) {
                        0 !== a.code ? i.showToast(a.msg, 2e3) : t && t.call(e, a.result);
                    });
                }
            }, {
                key: "openCustomerService",
                value: function value() {
                    Laya.Browser.onWeiXin && wx.openCustomerServiceConversation({
                        sessionFrom: "会话来源",
                        showMessageCard: !1,
                        sendMessageTitle: "会话内消息卡片标题",
                        sendMessagePath: "会话内消息卡片路径",
                        sendMessageImg: "会话内消息卡片图片路径",
                        success: function success(e) {
                            console.error("客服调用成功的回调函数:", e);
                        },
                        fail: function fail(e) {
                            console.error("客服调用失败的回调函数:", e);
                        },
                        complete: function complete(e) {
                            console.log("调用结束的回调函数（调用成功、失败都会执行）");
                        }
                    });
                }
            } ]), e;
        }();
        a.default = s;
    }, {
        "../GameContext": 6,
        "../Utils": 13
    } ],
    30: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.items = {};
            }
            return i(e, [ {
                key: "has",
                value: function value(e) {
                    return e in this.items;
                }
            }, {
                key: "set",
                value: function value(e, t) {
                    this.items[e] = t;
                }
            }, {
                key: "remove",
                value: function value(e) {
                    return !!this.has(e) && (delete this.items[e], !0);
                }
            }, {
                key: "get",
                value: function value(e) {
                    return this.has(e) ? this.items[e] : void 0;
                }
            }, {
                key: "values",
                value: function value() {
                    var e = [];
                    for (var t in this.items) {
                        this.has(t) && e.push(this.items[t]);
                    }
                    return e;
                }
            }, {
                key: "getItems",
                value: function value() {
                    return this.items;
                }
            }, {
                key: "size",
                value: function value() {
                    return Object.keys(this.items).length;
                }
            }, {
                key: "clear",
                value: function value() {
                    this.items = {};
                }
            }, {
                key: "keys",
                value: function value() {
                    return Object.keys(this.items);
                }
            } ]), e;
        }();
        a.default = n;
    }, {} ],
    31: [ function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), n = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return i(e, null, [ {
                key: "hex_md5",
                value: function value(e) {
                    return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "b64_md5",
                value: function value(e) {
                    return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "str_md5",
                value: function value(e) {
                    return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "hex_hmac_md5",
                value: function value(e, t) {
                    return this.binl2hex(this.core_hmac_md5(e, t));
                }
            }, {
                key: "b64_hmac_md5",
                value: function value(e, t) {
                    return this.binl2b64(this.core_hmac_md5(e, t));
                }
            }, {
                key: "str_hmac_md5",
                value: function value(e, t) {
                    return this.binl2str(this.core_hmac_md5(e, t));
                }
            }, {
                key: "md5_vm_test",
                value: function value() {
                    return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc");
                }
            }, {
                key: "core_md5",
                value: function value(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    for (var a = 1732584193, i = -271733879, n = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                        var s = a, l = i, h = n, c = o;
                        a = this.md5_ff(a, i, n, o, e[r + 0], 7, -680876936), o = this.md5_ff(o, a, i, n, e[r + 1], 12, -389564586), 
                        n = this.md5_ff(n, o, a, i, e[r + 2], 17, 606105819), i = this.md5_ff(i, n, o, a, e[r + 3], 22, -1044525330), 
                        a = this.md5_ff(a, i, n, o, e[r + 4], 7, -176418897), o = this.md5_ff(o, a, i, n, e[r + 5], 12, 1200080426), 
                        n = this.md5_ff(n, o, a, i, e[r + 6], 17, -1473231341), i = this.md5_ff(i, n, o, a, e[r + 7], 22, -45705983), 
                        a = this.md5_ff(a, i, n, o, e[r + 8], 7, 1770035416), o = this.md5_ff(o, a, i, n, e[r + 9], 12, -1958414417), 
                        n = this.md5_ff(n, o, a, i, e[r + 10], 17, -42063), i = this.md5_ff(i, n, o, a, e[r + 11], 22, -1990404162), 
                        a = this.md5_ff(a, i, n, o, e[r + 12], 7, 1804603682), o = this.md5_ff(o, a, i, n, e[r + 13], 12, -40341101), 
                        n = this.md5_ff(n, o, a, i, e[r + 14], 17, -1502002290), i = this.md5_ff(i, n, o, a, e[r + 15], 22, 1236535329), 
                        a = this.md5_gg(a, i, n, o, e[r + 1], 5, -165796510), o = this.md5_gg(o, a, i, n, e[r + 6], 9, -1069501632), 
                        n = this.md5_gg(n, o, a, i, e[r + 11], 14, 643717713), i = this.md5_gg(i, n, o, a, e[r + 0], 20, -373897302), 
                        a = this.md5_gg(a, i, n, o, e[r + 5], 5, -701558691), o = this.md5_gg(o, a, i, n, e[r + 10], 9, 38016083), 
                        n = this.md5_gg(n, o, a, i, e[r + 15], 14, -660478335), i = this.md5_gg(i, n, o, a, e[r + 4], 20, -405537848), 
                        a = this.md5_gg(a, i, n, o, e[r + 9], 5, 568446438), o = this.md5_gg(o, a, i, n, e[r + 14], 9, -1019803690), 
                        n = this.md5_gg(n, o, a, i, e[r + 3], 14, -187363961), i = this.md5_gg(i, n, o, a, e[r + 8], 20, 1163531501), 
                        a = this.md5_gg(a, i, n, o, e[r + 13], 5, -1444681467), o = this.md5_gg(o, a, i, n, e[r + 2], 9, -51403784), 
                        n = this.md5_gg(n, o, a, i, e[r + 7], 14, 1735328473), i = this.md5_gg(i, n, o, a, e[r + 12], 20, -1926607734), 
                        a = this.md5_hh(a, i, n, o, e[r + 5], 4, -378558), o = this.md5_hh(o, a, i, n, e[r + 8], 11, -2022574463), 
                        n = this.md5_hh(n, o, a, i, e[r + 11], 16, 1839030562), i = this.md5_hh(i, n, o, a, e[r + 14], 23, -35309556), 
                        a = this.md5_hh(a, i, n, o, e[r + 1], 4, -1530992060), o = this.md5_hh(o, a, i, n, e[r + 4], 11, 1272893353), 
                        n = this.md5_hh(n, o, a, i, e[r + 7], 16, -155497632), i = this.md5_hh(i, n, o, a, e[r + 10], 23, -1094730640), 
                        a = this.md5_hh(a, i, n, o, e[r + 13], 4, 681279174), o = this.md5_hh(o, a, i, n, e[r + 0], 11, -358537222), 
                        n = this.md5_hh(n, o, a, i, e[r + 3], 16, -722521979), i = this.md5_hh(i, n, o, a, e[r + 6], 23, 76029189), 
                        a = this.md5_hh(a, i, n, o, e[r + 9], 4, -640364487), o = this.md5_hh(o, a, i, n, e[r + 12], 11, -421815835), 
                        n = this.md5_hh(n, o, a, i, e[r + 15], 16, 530742520), i = this.md5_hh(i, n, o, a, e[r + 2], 23, -995338651), 
                        a = this.md5_ii(a, i, n, o, e[r + 0], 6, -198630844), o = this.md5_ii(o, a, i, n, e[r + 7], 10, 1126891415), 
                        n = this.md5_ii(n, o, a, i, e[r + 14], 15, -1416354905), i = this.md5_ii(i, n, o, a, e[r + 5], 21, -57434055), 
                        a = this.md5_ii(a, i, n, o, e[r + 12], 6, 1700485571), o = this.md5_ii(o, a, i, n, e[r + 3], 10, -1894986606), 
                        n = this.md5_ii(n, o, a, i, e[r + 10], 15, -1051523), i = this.md5_ii(i, n, o, a, e[r + 1], 21, -2054922799), 
                        a = this.md5_ii(a, i, n, o, e[r + 8], 6, 1873313359), o = this.md5_ii(o, a, i, n, e[r + 15], 10, -30611744), 
                        n = this.md5_ii(n, o, a, i, e[r + 6], 15, -1560198380), i = this.md5_ii(i, n, o, a, e[r + 13], 21, 1309151649), 
                        a = this.md5_ii(a, i, n, o, e[r + 4], 6, -145523070), o = this.md5_ii(o, a, i, n, e[r + 11], 10, -1120210379), 
                        n = this.md5_ii(n, o, a, i, e[r + 2], 15, 718787259), i = this.md5_ii(i, n, o, a, e[r + 9], 21, -343485551), 
                        a = this.safe_add(a, s), i = this.safe_add(i, l), n = this.safe_add(n, h), o = this.safe_add(o, c);
                    }
                    return Array(a, i, n, o);
                }
            }, {
                key: "md5_cmn",
                value: function value(e, t, a, i, n, o) {
                    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(i, o)), n), a);
                }
            }, {
                key: "md5_ff",
                value: function value(e, t, a, i, n, o, r) {
                    return this.md5_cmn(t & a | ~t & i, e, t, n, o, r);
                }
            }, {
                key: "md5_gg",
                value: function value(e, t, a, i, n, o, r) {
                    return this.md5_cmn(t & i | a & ~i, e, t, n, o, r);
                }
            }, {
                key: "md5_hh",
                value: function value(e, t, a, i, n, o, r) {
                    return this.md5_cmn(t ^ a ^ i, e, t, n, o, r);
                }
            }, {
                key: "md5_ii",
                value: function value(e, t, a, i, n, o, r) {
                    return this.md5_cmn(a ^ (t | ~i), e, t, n, o, r);
                }
            }, {
                key: "core_hmac_md5",
                value: function value(e, t) {
                    var a = this.str2binl(e);
                    a.length > 16 && (a = this.core_md5(a, e.length * this.chrsz));
                    for (var i = Array(16), n = Array(16), o = 0; o < 16; o++) {
                        i[o] = 909522486 ^ a[o], n[o] = 1549556828 ^ a[o];
                    }
                    var r = this.core_md5(i.concat(this.str2binl(t)), 512 + t.length * this.chrsz);
                    return this.core_md5(n.concat(r), 640);
                }
            }, {
                key: "safe_add",
                value: function value(e, t) {
                    var a = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a;
                }
            }, {
                key: "bit_rol",
                value: function value(e, t) {
                    return e << t | e >>> 32 - t;
                }
            }, {
                key: "str2binl",
                value: function value(e) {
                    for (var t = Array(), a = (1 << this.chrsz) - 1, i = 0; i < e.length * this.chrsz; i += this.chrsz) {
                        t[i >> 5] |= (e.charCodeAt(i / this.chrsz) & a) << i % 32;
                    }
                    return t;
                }
            }, {
                key: "binl2str",
                value: function value(e) {
                    for (var t = "", a = (1 << this.chrsz) - 1, i = 0; i < 32 * e.length; i += this.chrsz) {
                        t += String.fromCharCode(e[i >> 5] >>> i % 32 & a);
                    }
                    return t;
                }
            }, {
                key: "binl2hex",
                value: function value(e) {
                    for (var t = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", i = 0; i < 4 * e.length; i++) {
                        a += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
                    }
                    return a;
                }
            }, {
                key: "binl2b64",
                value: function value(e) {
                    for (var t = "", a = 0; a < 4 * e.length; a += 3) {
                        for (var i = (e[a >> 2] >> a % 4 * 8 & 255) << 16 | (e[a + 1 >> 2] >> (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >> 2] >> (a + 2) % 4 * 8 & 255, n = 0; n < 4; n++) {
                            8 * a + 6 * n > 32 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - n) & 63);
                        }
                    }
                    return t;
                }
            } ]), e;
        }();
        a.default = n, n.hexcase = 0, n.b64pad = "", n.chrsz = 8;
    }, {} ]
}, {}, [ 2 ]);