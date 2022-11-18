var __extends = this && this.__extends || function () {
    var a = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function (a, i) {
        a.__proto__ = i;
    } || function (a, i) {
        for (var g in i) i.hasOwnProperty(g) && (a[g] = i[g]);
    };
    return function (i, g) {
        function __() {
            this.constructor = i;
        }
        a(i, g), i.prototype = null === g ? Object.create(g) : (__.prototype = g.prototype,
            new __());
    };
}();
class GlodeClass {

}
GlodeClass.GameWF = null;
GlodeClass.GameWFScript = null;

!function () {
    return function r(a, i, g) {
        function o(e, t) {
            if (!i[e]) {
                if (!a[e]) {
                    var u = "function" == typeof require && require;
                    if (!t && u) return u(e, !0);
                    if (n) return n(e, !0);
                    var _ = new Error("Cannot find module '" + e + "'");
                    throw _.code = "MODULE_NOT_FOUND", _;
                }
                var l = i[e] = {
                    exports: {}
                };
                a[e][0].call(l.exports, function (i) {
                    return o(a[e][1][i] || i);
                }, l, l.exports, r, a, i, g);
            }
            return i[e].exports;
        }
        for (var n = "function" == typeof require && require, e = 0; e < g.length; e++) o(g[e]);
        return o;
    };
}()({
    1: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        }), function (a) {
            a[a.None = 0] = "None",
                a[a.App_CloseFirstLoadingView = 500] = "App_CloseFirstLoadingView",
                a[a.Game_OnUserCrystalChange = 702] = "Game_OnUserCrystalChange",
                a[a.Game_OnLevelStart = 1e3] = "Game_OnLevelStart",
                a[a.Game_OnLevelComplate = 1001] = "Game_OnLevelComplate",
                a[a.Game_OnViewOpen = 600] = "Game_OnViewOpen",
                a[a.Game_OnViewClose = 601] = "Game_OnViewClose",
                a[a.Game_OnUserMoneyChange = 701] = "Game_OnUserMoneyChange",
                a[a.APP_LoadCompelete = 5001] = "APP_LoadCompelete",
                a[a.Camera_Event = 4e3] = "Camera_Event",
                a[a.Game_ChangeSkin = 4001] = "Game_ChangeSkin";
        }(g.Event_SHUISAHNG_Def || (g.Event_SHUISAHNG_Def = {}));
    }, {}],
    2: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = laya.events.EventDispatcher, e = function (a) {
            function Event_SHUISAHNG_Mgr() {
                return a.call(this) || this;
            }
            return __extends(Event_SHUISAHNG_Mgr, a), Event_SHUISAHNG_Mgr.prototype.regOnceEvent = function (a, i, g, n) {
                Event_SHUISAHNG_Mgr.eventDispatcher.once(a, i, g, null == n ? null : [n]);
            }, Event_SHUISAHNG_Mgr.prototype.removeEvent = function (a, i, g, n) {
                Event_SHUISAHNG_Mgr.eventDispatcher.off(a, i, g);
            }, Event_SHUISAHNG_Mgr.prototype.dispatch = function (a, i) {
                Event_SHUISAHNG_Mgr.eventDispatcher.event(a, i);
            }, Event_SHUISAHNG_Mgr.prototype.regEvemt = function (a, i, g, n) {
                Event_SHUISAHNG_Mgr.eventDispatcher.on(a, i, g, null == n ? null : [n]);
            }, Event_SHUISAHNG_Mgr.eventDispatcher = new n(), Event_SHUISAHNG_Mgr.instance = new Event_SHUISAHNG_Mgr(),
                Event_SHUISAHNG_Mgr;
        }(n);
        g.default = e;
    }, {}],
    3: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./Mgr/GameMgr"), e = a("./View/TwinkleSprite"), t = a("./Scripts/UI/GameMainView"), u = a("./Scripts/UI/Controller"),
            _ = a("./Scripts/UI/GamePlayingView"), l = a("./View/LoadingView/LoadingView"),
            ll = a("./View/GameWF/GameWF"), r = a("./Scripts/GameCore/GameManager"),
            o = a("./Scripts/UI/SkinView"), y = a("./View/TipsView/TipsView"), s = function () {
                function GameConfig() { }
                return GameConfig.init = function () {
                    var a = Laya.ClassUtils.regClass;
                    a("Mgr/GameMgr.ts", n.default), a("View/TwinkleSprite.ts", e.default), a("Scripts/UI/GameMainView.ts", t.default),
                        a("Scripts/UI/Controller.ts", u.default), a("Scripts/UI/GamePlayingView.ts", _.default),
                        a("View/LoadingView/LoadingView.ts", l.default),
                        a("View/GameWF/GameWF.ts", ll.default),
                        a("Scripts/GameCore/GameManager.ts", r.default),
                        a("Scripts/UI/SkinView.ts", o.default),
                        a("View/TipsView/TipsView.ts", y.default);
                }, GameConfig.width = 750, GameConfig.height = 1334, GameConfig.scaleMode = "showall",
                    GameConfig.screenMode = "none", GameConfig.alignV = "middle", GameConfig.alignH = "center",
                    GameConfig.startScene = "View/Main.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1,
                    GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0,
                    GameConfig;
            }();
        g.default = s, s.init();
    }, {
        "./Mgr/GameMgr": 5,
        "./Scripts/GameCore/GameManager": 17,
        "./Scripts/UI/Controller": 21,
        "./Scripts/UI/GameMainView": 22,
        "./Scripts/UI/GamePlayingView": 23,
        "./Scripts/UI/SkinView": 24,
        "./View/LoadingView/LoadingView": 25,
        "./View/GameWF/GameWF": 250,
        "./View/TipsView/TipsView": 26,
        "./View/TwinkleSprite": 27
    }],
    4: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./GameConfig"), e = a("./ui/layaMaxUI"), t = a("./View/LoadingView/LoadingView"),
            tt = a("./View/GameWF/GameWF"), u = a("./Event/EventMgr"), _ = a("./Event/EventDef");
        new (function () {
            function Main() {
                this._loadingUI = null, this._loadingView = null, this._preLoadRes = new Array(),
                    window.Laya3D ? Laya3D.init(n.default.width, n.default.height) :
                        Laya.init(n.default.width, n.default.height, Laya.WebGL),
                    Laya.stage.scaleMode = n.default.scaleMode,
                    Laya.stage.screenMode = n.default.screenMode,
                    Laya.URL.exportSceneToJson = n.default.exportSceneToJson,
                    Laya.alertGlobalError = !0,
                    Laya.stage.alignV = "middle", Laya.stage.alignH = "center";
                platform.getInstance().createLogo();
                window.yad.scale(0.8, 0.8);
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return Main.prototype.onVersionLoaded = function () {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, Main.prototype.onConfigLoaded = function () {
                platform.getInstance().showSplash();
                platform.getInstance().yadstartup("Waterpark-Slide-Race", () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Waterpark-Slide-Race-musicState") ?
                        JSON.parse(Laya.LocalStorage.getItem("Waterpark-Slide-Race-musicState")) : false;
                    Laya.SoundManager.playMusic("subRes/sound/bisaibg.mp3"),
                        // o.default.instance.playBGM("bisaibg"),
                        this.initLoadingView(); this.loadRes(),
                            u.default.instance.regOnceEvent(_.Event_SHUISAHNG_Def.App_CloseFirstLoadingView,
                                this, this.closeloadingUI);
                })
            }, Main.prototype.initLoadingView = function () {
                this._loadingUI = new e.ui.View.LoadingUI(),
                    Laya.stage.addChild(this._loadingUI),
                    this._loadingUI.width = Laya.stage.width,
                    this._loadingUI.height = Laya.stage.height,
                    this._loadingView = this._loadingUI.getComponent(t.default);
            }, Main.prototype.preLoad = function () {

            }, Main.prototype.onLoadResComplate = function () {
                platform.getInstance().hideSplash();
                platform.getInstance().showBanner();
                GlodeClass.GameWF = new e.ui.View.GameWFUI();
                // Laya.stage.addChild(Main.GameWF);
                GlodeClass.GameWFScript = GlodeClass.GameWF.getComponent(tt.default);
                n.default.startScene && Laya.Scene.open(n.default.startScene, !1, Laya.Handler.create(this, function () { }));
            }, Main.prototype.closeloadingUI = function () {
                this._loadingUI && !this._loadingUI.destroyed && this._loadingUI.destroy();
            }, Main.prototype.loadRes = function () {
                var a = this;
                this.preLoad();
                var i = this._preLoadRes, g = this;
                // i.length > 0 ? Laya.loader.load(i, Laya.Handler.create(this, function () {
                //     g.onLoadResComplate();
                // }), Laya.Handler.create(this, function (a) { })) :g.onLoadResComplate();
                g.onLoadResComplate();
            }, Main;
        }())();
    }, {
        "./Event/EventDef": 1,
        "./Event/EventMgr": 2,
        "./GameConfig": 3,
        "./View/LoadingView/LoadingView": 25,
        "./View/GameWF/GameWF": 250,
        "./ui/layaMaxUI": 29
    }],
    5: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function (a) {
            function GameMgr() {
                var i = a.call(this) || this;
                return GameMgr._instance = i, i;
            }
            return __extends(GameMgr, a), GameMgr.prototype.onStart = function () {
                this.preCreateGame();
            }, GameMgr.prototype.preCreateGame = function () { },
                GameMgr.getInstance = function () {
                    return GameMgr._instance;
                }, GameMgr.prototype.onAwake = function () { }, GameMgr._instance = null,
                GameMgr;
        }(Laya.Script);
        g.default = n;
    }, {}],
    6: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function () {
            function MySoundMgr() { }
            return MySoundMgr.prototype.setBGMVolume = function (a) {
                // Laya.SoundManager.stopMusic();
            }, MySoundMgr.prototype.playSound = function (a) {
                var i = this.getSoundUrl(a);
                Laya.SoundManager.playSound(i, 1);
            }, MySoundMgr.prototype.stopBGM = function () {
                // Laya.SoundManager.stopMusic();
            }, MySoundMgr.prototype.getSoundUrl = function (a) {
                return MySoundMgr.soundResPath + a + ".mp3";
            }, MySoundMgr.prototype.playBGM = function (a) {
                if (null != a || null != this._bgmname) {
                    var i = this.getSoundUrl(a);
                    Laya.SoundManager.playMusic(i, 0), console.log("playBGM", i);
                }
            }, MySoundMgr.soundResPath = "subRes/sound/", MySoundMgr.instance = new MySoundMgr(),
                MySoundMgr;
        }();
        g.default = n;
    }, {}],
    7: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.key = null, this.data = {}, this.success = null, this.fail = null, this.complete = null;
            };
        }();
        g.Storage_SHUISAHNG_Req = n;
        var e = function () {
            function Storage_SHUISAHNG_Mgr() { }
            return Storage_SHUISAHNG_Mgr.getStorage = function (a) {
                var i = null;
                try {
                    i = localStorage.getItem(a);
                } catch (a) { }
                return i;
            }, Storage_SHUISAHNG_Mgr.setStorage = function (a) {
                localStorage.setItem("Waterpark-Slide-Race-" + a.key, JSON.stringify(i));
            }, Storage_SHUISAHNG_Mgr;
        }();
        g.default = e;
    }, {}],
    8: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function () {
            function Vibrate_SHUISAHNG_Mgr() { }
            return Vibrate_SHUISAHNG_Mgr.ibrateLong = function () {

            }, Vibrate_SHUISAHNG_Mgr.vibrate = function (a) {

            }, Vibrate_SHUISAHNG_Mgr.vibrateShort = function () {

            }, Vibrate_SHUISAHNG_Mgr.isEnable = !0, Vibrate_SHUISAHNG_Mgr;
        }();
        g.default = n;
    }, {}],
    9: [function (a, i, g) {
        "use strict";
        var n;
        Object.defineProperty(g, "__esModule", {
            value: !0
        }), function (a) {
            a.None = "", a.VVNativeView2 = "View/VVNativeView2Template.json", a.SkinView = "View/SkinView.json",
                a.GamePlaying = "View/GamePlaying.json", a.TipsView = "View/TipsView.json",
                a.GameMainView = "View/GameMain.json", a.VVNativeView1 = "View/VVNativeView1Template.json";
        }(n = g.View_SHUISAHNG_Def || (g.View_SHUISAHNG_Def = {}));
        var e = function () {
            function View_SHUISAHNG_Mgr() {
                this._views = {};
            }
            return View_SHUISAHNG_Mgr.prototype.getView = function (a) {
                return this._views[a];
            }, View_SHUISAHNG_Mgr.prototype.closeView = function (a) {
                var i = this._views[a];
                if (i) {
                    var g = i._components;
                    if (g) for (var n = 0; n < g.length; n++) {
                        var e = g[n];
                        if (e._viewBase) {
                            e.onClose();
                            break;
                        }
                    }
                    i.removeSelf(), i.destroy(), this._views[a] = null;
                }
            }, View_SHUISAHNG_Mgr.prototype.ShowView = function (a) {
                var i = this._views[a];
                if (i) {
                    var g = i._components;
                    if (g) for (var n = 0; n < g.length; n++) {
                        var e = g[n];
                        if (e._viewBase) {
                            e.show();
                            break;
                        }
                    }
                }
            }, View_SHUISAHNG_Mgr.prototype.hideView = function (a) {
                var i = this._views[a];
                if (i) {
                    var g = i._components;
                    if (g) for (var n = 0; n < g.length; n++) {
                        var e = g[n];
                        if (e._viewBase) {
                            e.hide();
                            break;
                        }
                    }
                }
            }, View_SHUISAHNG_Mgr.prototype.showTips = function (a) {
                this.openView(n.TipsView, a);
            }, View_SHUISAHNG_Mgr.prototype.openView = function (a, i, g) {
                if (this._views[a]) {
                    var n = this._views[a]._components, e = null;
                    if (n) for (var t = 0; t < n.length; t++) {
                        var u = n[t];
                        if (u._viewBase) {
                            (e = u).openView(i);
                            break;
                        }
                    }
                    g && g(e);
                } else {
                    var _ = String(a), l = this;
                    Laya.Scene.load(_, Laya.Handler.create(this, function (n) {
                        Laya.stage.addChild(n);
                        var e = n;
                        l._views[a] = e;
                        var t = n._components, u = null;
                        if (t) for (var _ = 0; _ < t.length; _++) {
                            var r = t[_];
                            if (r._viewBase) {
                                u = r, r._viewDef = a, u.openView(i);
                                break;
                            }
                        }
                        g && g(u);
                    }));
                }
            }, View_SHUISAHNG_Mgr.instance = new View_SHUISAHNG_Mgr(), View_SHUISAHNG_Mgr;
        }();
        g.default = e;
    }, {}],
    10: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        }), function (a) {
            a[a.Ground = 1] = "Ground", a[a.Sky = 2] = "Sky",
                a[a.RotatedAround = 3] = "RotatedAround", a[a.GroundCentre = 4] = "GroundCentre";
        }(g.CameraState || (g.CameraState = {})), function (a) {
            a[a.GameMain = 1] = "GameMain", a[a.GamePlaying = 2] = "GamePlaying",
                a[a.GameOver = 3] = "GameOver", a[a.MoreGame = 4] = "MoreGame";
        }(g.GameState || (g.GameState = {})), function (a) {
            a[a.Normal = 1] = "Normal", a[a.SpeedUp = 2] = "SpeedUp",
                a[a.SpeedDown = 3] = "SpeedDown";
        }(g.SpeedState || (g.SpeedState = {}));
    }, {}],
    11: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../Event/EventMgr"), e = a("../../Event/EventDef"), t = a("../Enums"), u = function (a) {
            function CameraMove() {
                return a.call(this) || this;
            }
            return __extends(CameraMove, a), CameraMove.prototype.InitCamera = function (a, i, g, n) {
                void 0 === n && (n = 60), this._playerCtr = a, this._player = a.owner,
                    this._camera = this.owner, this._goundOffset = i.clone(),
                    this._skyOffset = g.clone(), this._fieldOfView = n,
                    this._currentOffset = this._goundOffset.clone(),
                    this._angle = 0, this._camera.transform.position = this._player.transform.position.clone();
            }, CameraMove.prototype.GetOffsetByAngel = function () {
                var a;
                return this._cameraState != t.CameraState.RotatedAround ? (this._angle > 180 ? this._angle += 5 / 1e3 * 360 :
                    this._angle > 0 && this._angle < 180 && (this._angle -= 5 / 1e3 * 360),
                    (this._angle < 0 || this._angle >= 360) && (this._angle = 0),
                    a = this.RoteteAroundYByAngle(this._currentOffset, this._angle)) : (this._angle += 5 / 1e3 * 30,
                        this._angle > 360 && (this._angle = this._angle - 360),
                        a = this.RoteteAroundYByAngle(this._currentOffset, this._angle)),
                    a;
            }, CameraMove.prototype.RoteteAroundYByAngle = function (a, i) {
                if (0 == i) return a;
                var g = new Laya.Vector3(), n = a.z, e = i / 180 * Math.PI;
                return g.x = Math.sin(e) * n, g.y = a.y, g.z = Math.cos(e) * n, g;
            }, CameraMove.prototype.onDestroy = function () {
                n.default.instance.removeEvent(e.Event_SHUISAHNG_Def.Camera_Event, this, this.ChangeCameraState);
            }, CameraMove.prototype.onLateUpdate = function () {
                new Laya.Vector3();
                var a = this.GetOffsetByAngel(), i = new Laya.Vector3();
                this._player.transform.getRight(i), Laya.Vector3.scale(i, a.x, i);
                var g = new Laya.Vector3();
                this._player.transform.getUp(g), Laya.Vector3.scale(g, a.y, g);
                var n = new Laya.Vector3();
                this._player.transform.getForward(n), Laya.Vector3.scale(n, a.z, n);
                var e = new Laya.Vector3();
                Laya.Vector3.add(i, g, e), Laya.Vector3.add(e, n, e), null == this._lastOffset && (this._lastOffset = e);
                var u = new Laya.Vector3(), _ = new Laya.Vector3();
                if (this._cameraState == t.CameraState.Sky || this._cameraState == t.CameraState.RotatedAround) {
                    _ = this._player.transform.position,
                        Laya.Vector3.add(e, _, u),
                        this._camera.transform.position = u,
                        this._camera.transform.lookAt(_, Laya.Vector3._Up, !1);
                } else {
                    Laya.Vector3.lerp(this._playerCtr.PosOnRoad, this._player.transform.position, .5, _),
                        Laya.Vector3.add(e, _, u), this._camera.transform.position = u;
                    var l = new Laya.Vector3();
                    this._playerCtr.Sprite3D.transform.getForward(l),
                        Laya.Vector3.subtract(_, l, l), this._camera.transform.lookAt(l, Laya.Vector3._Up, !1);
                }
                this._camera.fieldOfView = this._fieldOfView;
            }, CameraMove.prototype.onAwake = function () {
                n.default.instance.regEvemt(e.Event_SHUISAHNG_Def.Camera_Event, this, this.ChangeCameraState);
            }, CameraMove.prototype.ChangeCameraState = function (a) {
                var i, g, n = a.CameraState, e = a.SpeedState;
                if (n) {
                    switch (this._cameraState = n, n) {
                        case t.CameraState.RotatedAround:
                            break;

                        case t.CameraState.Ground:
                            i = this._goundOffset;
                            break;

                        case t.CameraState.Sky:
                            i = this._skyOffset;
                    }
                    i && this._currentOffset != i && Laya.Tween.to(this._currentOffset, {
                        x: i.x,
                        y: i.y,
                        z: i.z
                    }, 300, Laya.Ease.quadOut, null, 0, !0);
                }
                if (e) {
                    switch (e) {
                        case t.SpeedState.SpeedUp:
                            g = 70;
                            break;

                        case t.SpeedState.SpeedDown:
                            g = 50;
                            break;

                        case t.SpeedState.Normal:
                            g = 60;
                    }
                    this._speedState != e && g && this._fieldOfView != g && (this._speedState = e,
                        Laya.Tween.to(this, {
                            _fieldOfView: g
                        }, 300, Laya.Ease.quadOut, null, 0, !0));
                }
            }, CameraMove;
        }(Laya.Script3D);
        g.default = u;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../Enums": 10
    }],
    12: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./CharacterCtr"), e = a("./CharacterManager"), t = a("../../Enums"), u = a("../TrackManager"), _ = function (a) {
            function AiCtr() {
                var i = a.call(this) || this;
                return i._moveSpd = 5, i;
            }
            return __extends(AiCtr, a), AiCtr.prototype.FailIntoWater = function (a) {
                this._startRunning = !1, Laya.timer.once(3e3, this, function () {
                    this._startRunning = !0, this.LandOnGround();
                });
            }, AiCtr.prototype.onTriggerEnter = function (i) {
                a.prototype.onTriggerEnter.call(this, i);
            }, AiCtr.prototype.onUpdate = function () {
                this._startRunning && !this._gameOver && (this.SetRdSpeed(),
                    this.SetRdRoadOffset(), a.prototype.onUpdate.call(this));
            }, AiCtr.prototype.SetRdSpeed = function () {
                this._spdRdTime > this._spdRdTimer ? (this._rdSpeed = .1 * Math.random() - .05,
                    this._spdRdTime = 0, this._spdRdTimer = 2e3 * Math.random() + 3e3) : this._spdRdTime += 16;
            }, Object.defineProperty(AiCtr.prototype, "CurrentSpeed", {
                get: function () {
                    var a = 1;
                    switch (this._speedState) {
                        case t.SpeedState.Normal:
                            a = 1;
                            break;

                        case t.SpeedState.SpeedDown:
                            a = .25;
                            break;

                        case t.SpeedState.SpeedUp:
                            a = 1.5;
                    }
                    return (a = a + this._rdSpeed + .007 * (8 - this._ranking)) * e.default.Instance.NormalSpeed;
                },
                enumerable: !0,
                configurable: !0
            }), AiCtr.prototype.SetRdRoadOffset = function () {
                var a = 16 / 1e3;
                if (this._roadOffset > this._targetOffset) {
                    if (this._roadOffset -= a * this._moveSpd, this._roadOffset > this._targetOffset) return;
                    this._roadOffset = this._targetOffset;
                } else if (this._roadOffset < this._targetOffset) {
                    if (this._roadOffset += a * this._moveSpd, this._roadOffset < this._targetOffset) return;
                    this._roadOffset = this._targetOffset;
                }
                if (this._offsetRdTime > this._offsetRdTimer) {
                    var i = Math.random();
                    this._targetOffset = i > .3 ? Math.random() * e.default.Instance.MaxRoadOffset * 2 - e.default.Instance.MaxRoadOffset : this._roadOffset,
                        this._offsetRdTime = 0, this._offsetRdTimer = 2e3 * Math.random() + 3e3;
                } else this._offsetRdTime += 16;
            }, AiCtr.prototype.SetColor = function (a) {
                var i = this.owner.getChildByName("base_male_0")._render.material;
                i.albedoColorR = a.r, i.albedoColorG = a.g, i.albedoColorB = a.b, i.albedoColorA = a.a,
                    this.owner.name = "Ai_";
                var g = this.owner.getChildByName("triangle");
                g && (g.active = !1);
            }, AiCtr.prototype.StartRunning = function () {
                a.prototype.StartRunning.call(this), this._spdRdTimer = 5e3,
                    this._spdRdTime = 5001, this._rdSpeed = 0, this._offsetRdTimer = 4e3,
                    this._offsetRdTime = 0, this._targetOffset = this.GetRoadOffsetInRange(Math.random() * e.default.Instance.MaxRoadOffset * 2 - e.default.Instance.MaxRoadOffset);
            }, AiCtr.prototype.SkyMove = function () {
                var i = u.default.Instance.GetPointByDistance(this._flyPosOnRoad, this._flyCurrentPointIndex, this.CurrentSpeed * (16 / 1e3));
                this._flyCurrentPointIndex = i.PointIndex, this._flyPosOnRoad = i.CurrentPos,
                    this._rigidBody.linearVelocity.y > 0 ? Math.random() > .95 ? this._skyOffsetFlag = !this._skyOffsetFlag : this._skyOffsetFlag ? this._skyOffset += .1 : this._skyOffset -= .1 : this._skyOffset > .7 * e.default.Instance.MaxRoadOffset ? this._skyOffset -= .09 : this._skyOffset < -.7 * e.default.Instance.MaxRoadOffset && (this._skyOffset += .09);
                var g = new Laya.Vector3();
                this._sprite3D.transform.getRight(g), Laya.Vector3.cross(i.Direction, Laya.Vector3._Up, g),
                    Laya.Vector3.normalize(g, g), Laya.Vector3.scale(g, this._skyOffset, g),
                    Laya.Vector3.add(this._flyPosOnRoad, g, g), g.y = this._sprite3D.transform.position.y;
                var n = new Laya.Vector3(0, 1, 0), t = new Laya.Vector3();
                Laya.Vector3.subtract(this._sprite3D.transform.position, g, t),
                    Laya.Vector3.add(this._sprite3D.transform.position, t, g), this._sprite3D.transform.lookAt(g, n, !1),
                    a.prototype.SkyMove.call(this);
            }, AiCtr.prototype.Fly = function (i) {
                void 0 === i && (i = !1), a.prototype.Fly.call(this), this._flyPosOnRoad = this._posOnRoad.clone(),
                    this._flyCurrentPointIndex = this._currentPointIndex,
                    this._skyOffset = 0, this._skyOffsetFlag = Math.random() > .5;
            }, AiCtr;
        }(n.default);
        g.default = _;
    }, {
        "../../Enums": 10,
        "../TrackManager": 19,
        "./CharacterCtr": 14,
        "./CharacterManager": 15
    }],
    13: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../../Event/EventMgr"), e = a("../../../Event/EventDef"), t = a("../../Enums"), u = a("../../../Mgr/VibrateMgr"), _ = a("../../../Mgr/MySoundMgr"), l = function (a) {
            function CharacterAnimator() {
                var i = a.call(this) || this;
                return i._isPlayer = !1, i;
            }
            return __extends(CharacterAnimator, a), CharacterAnimator.prototype.RegistAnimatorEvent = function (a, i) {
                this[a] = i;
            }, CharacterAnimator.prototype.OnEndPlayEvent = function (a) {
                null != this._eventFunc && (this._eventFunc(), this._eventFunc = null),
                    this._eventFunc = a;
                var i = this;
                Laya.timer.frameLoop(1, this, function () {
                    i._animator.getCurrentAnimatorPlayState().normalizedTime >= 1 && (null != i._eventFunc && (i._eventFunc(),
                        i._eventFunc = null), Laya.timer.clearAll(this));
                }, null, !0);
            }, CharacterAnimator.prototype.HideSpeedUpEff = function () {
                this._shandianParticle.stop(), this._shandian1Particle.stop(),
                    this._diParticle.stop();
            }, CharacterAnimator.prototype.Trip = function () {
                this._animator.play("zhuang"), this._isPlayer && (n.default.instance.dispatch(e.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: t.CameraState.Ground,
                    SpeedState: t.SpeedState.SpeedDown
                }), _.default.instance.playSound("penzhuangjiansu"),
                    u.default.vibrate(75)), this.OnEndPlayEvent(this.Running);
            }, CharacterAnimator.prototype.Landing = function () {
                this._animator.play("diao"), this._isPlayer && (n.default.instance.dispatch(e.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: t.CameraState.Ground
                }), u.default.vibrate(150)), this.OnEndPlayEvent(this.Running);
            }, CharacterAnimator.prototype.onUpdate = function () {
                this._isIdleFlag && (this._idleTime > this._idleTimer ? (this.RandomIdle(),
                    this._animatorControllerLayer.getAnimatorState("zhanli3").speed = .2 + .2 * Math.random(),
                    this._animatorControllerLayer.getAnimatorState("zhanli4").speed = .2 + .2 * Math.random(),
                    this._idleTime = 0, this._idleTimer = 3e3 * Math.random() + 5e3) : this._idleTime += 16);
            }, CharacterAnimator.prototype.GameOver = function () {
                this._gameOverFlag = !0;
            }, CharacterAnimator.prototype.RandomIdle = function () {
                var a = "zhanli1";
                switch (parseInt((4 * Math.random()).toString())) {
                    case 0:
                        a = "zhanli3";
                        break;

                    case 1:
                        a = "zhanli4";
                        break;

                    case 2:
                        a = "zhanli3";
                        break;

                    case 3:
                        a = "zhanli4";
                }
                this._animator.crossFade(a, 1, 0, 0);
            }, CharacterAnimator.prototype.Idle = function () {
                this._animator.play("zhanli4");
            }, CharacterAnimator.prototype.SpeedUp = function () {
                this._animatorControllerLayer.getAnimatorState("paobu").speed = 1 + this._runSpeed,
                    this._animator.play("paobu"), this.ShowSpeedUpEff(),
                    this._isPlayer && (n.default.instance.dispatch(e.Event_SHUISAHNG_Def.Camera_Event, {
                        SpeedState: t.SpeedState.SpeedUp
                    }), _.default.instance.playSound("chonci"));
            }, CharacterAnimator.prototype.Running = function () {
                this._isIdleFlag = !1, this._gameOverFlag || (this._animatorControllerLayer.getAnimatorState("paobu").speed = this._runSpeed,
                    "paobu" != this._animatorControllerLayer._currentPlayState.name && this._animator.play("paobu"));
            }, CharacterAnimator.prototype.HideSwimmingEff = function () {
                this._luoshuiParticle.stop(), this._shuihuaParticle.stop();
            }, CharacterAnimator.prototype.Fly = function () {
                this._animator.play("feiqi"), this._isPlayer && (n.default.instance.dispatch(e.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: t.CameraState.Sky
                }), _.default.instance.playSound("qifei"), u.default.vibrate(150)),
                    this.OnEndPlayEvent(this.Flying);
            }, CharacterAnimator.prototype.ShowSpeedUpEff = function () {
                this._shandianParticle.play(), this._shandian1Particle.play(),
                    this._diParticle.play();
            }, CharacterAnimator.prototype.SpeedNormal = function () {
                this.HideSpeedUpEff(), 1 != this._animatorControllerLayer.getAnimatorState("paobu").speed && (this._animatorControllerLayer.getAnimatorState("paobu").speed = 1),
                    this._isPlayer && n.default.instance.dispatch(e.Event_SHUISAHNG_Def.Camera_Event, {
                        SpeedState: t.SpeedState.Normal
                    });
            }, CharacterAnimator.prototype.Regret = function () {
                this._animator.play("shibai");
            }, CharacterAnimator.prototype.Flying = function () {
                this._animator.play("fei"), this._isPlayer && _.default.instance.playSound("feishangtian");
            }, CharacterAnimator.prototype.Swimming = function () {
                this._animator.play("diaoshui"), this.ShowSwimmingEff(),
                    this._isPlayer && u.default.vibrate(450);
            }, CharacterAnimator.prototype.Celebrate = function () {
                this._animator.play("qingzhu");
            }, CharacterAnimator.prototype.onAwake = function () {
                this._animator = this.owner.getComponent(Laya.Animator), this._animatorControllerLayer = this._animator.getControllerLayer(0),
                    this._runSpeed = (Math.random() + 4.5) / 5, this.ownerSp3 = this.owner,
                    this._luoshuiParticle = this.ownerSp3.getChildByName("luoshui").particleSystem,
                    this._luoshuiParticle.prewarm = !0, this._shuihuaParticle = this.ownerSp3.getChildByName("shuihua").particleSystem,
                    this._shuihuaParticle.prewarm = !0, this._shandianParticle = this.ownerSp3.getChildByName("shandian").particleSystem,
                    this._shandianParticle.prewarm = !0, this._shandian1Particle = this.ownerSp3.getChildByName("shandian (1)").particleSystem,
                    this._shandian1Particle.prewarm = !0, this._diParticle = this.ownerSp3.getChildByName("di").particleSystem,
                    this._diParticle.prewarm = !0, this._isIdleFlag = !0,
                    this._idleTime = 0, this._idleTimer = 5e3 * Math.random() + 5e3,
                    this._animatorControllerLayer.getAnimatorState("zhanli3").speed = .2 + .3 * Math.random(),
                    this._animatorControllerLayer.getAnimatorState("zhanli4").speed = .7 + .3 * Math.random(),
                    this._gameOverFlag = !1, this.HideSwimmingEff(),
                    this.HideSpeedUpEff();
            }, CharacterAnimator.prototype.onStart = function () {
                this.RandomIdle();
            }, CharacterAnimator.prototype.ShowSwimmingEff = function () {
                this._luoshuiParticle.play(), this._shuihuaParticle.play();
            }, CharacterAnimator;
        }(Laya.Script3D);
        g.default = l;
    }, {
        "../../../Event/EventDef": 1,
        "../../../Event/EventMgr": 2,
        "../../../Mgr/MySoundMgr": 6,
        "../../../Mgr/VibrateMgr": 8,
        "../../Enums": 10
    }],
    14: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./CharacterAnimator"), e = a("../TrackManager"), t = a("./CharacterManager"), u = a("../../Enums"), _ = function (a) {
            function CharacterCtr() {
                var i = a.call(this) || this;
                return i._isPlayer = !1, i;
            }
            return __extends(CharacterCtr, a), Object.defineProperty(CharacterCtr.prototype, "CurrentSpeed", {
                get: function () {
                    var a = 1;
                    switch (this._speedState) {
                        case u.SpeedState.Normal:
                            break;

                        case u.SpeedState.SpeedDown:
                            a = .25;
                            break;

                        case u.SpeedState.SpeedUp:
                            a = 1.5;
                    }
                    return (a += .01 * (this._ranking - 1)) * t.default.Instance.NormalSpeed;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterCtr.prototype, "Sprite3D", {
                get: function () {
                    return this._sprite3D;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterCtr.prototype, "OnGround", {
                get: function () {
                    return this._onGround;
                },
                enumerable: !0,
                configurable: !0
            }), CharacterCtr.prototype.Init = function () {
                this._currentPointIndex = 0, this._sprite3D.transform.position = e.default.Instance.WayPoints[0],
                    this._posOnRoad = this._sprite3D.transform.position.clone(),
                    this._onGround = !0, this._roadOffset = 0, this._speedState = u.SpeedState.Normal,
                    this._ranking = 1, this._progress = 0;
            }, Object.defineProperty(CharacterCtr.prototype, "Progress", {
                get: function () {
                    if (this._onGround) {
                        var a = e.default.Instance.GetProgress(this._currentPointIndex);
                        this._progress = a;
                    }
                    return this._progress;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterCtr.prototype, "Ranking", {
                get: function () {
                    return this._ranking;
                },
                set: function (a) {
                    this._ranking = a;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterCtr.prototype, "CurrentPoint", {
                get: function () {
                    return this._currentPointIndex;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterCtr.prototype, "CharAnimator", {
                get: function () {
                    return this._charAnimator;
                },
                enumerable: !0,
                configurable: !0
            }), CharacterCtr.prototype.GameFinish = function (a) {
                this._startRunning = !1, this._gameOver = !0, this._charAnimator.GameOver(),
                    Laya.timer.frameLoop(1, this, this.WaitForLand, [a]);
            }, CharacterCtr.prototype.GetReady = function (a) {
                this._posOnRoad = e.default.Instance.WayPoints[0],
                    this._currentPointIndex = 0, this._roadOffset = a,
                    this.GroundMove(0, a);
            }, CharacterCtr.prototype.StartRunning = function () {
                this._startRunning = !0, this._gameOver = !1, this._charAnimator.Running();
            }, CharacterCtr.prototype.LandOnGround = function () {
                this._onGround = !0, this._charAnimator.Landing(),
                    this._skyVelocity = null, this._rigidBody.isKinematic = !0,
                    this._rigidBody.linearVelocity = Laya.Vector3._ZERO;
                var a = this._sprite3D.transform.position.clone(), i = e.default.Instance.GetClosetPoint(this._sprite3D.transform.position);
                this._currentPointIndex = i.PointIndex, this._posOnRoad = i.CurrentPos;
                var g = new Laya.Vector3();
                Laya.Vector3.subtract(i.CurrentPos, i.Direction, g),
                    this._sprite3D.transform.lookAt(g, Laya.Vector3._Up), this._sprite3D.transform.position = i.CurrentPos;
                var n = Laya.Vector3.distance(a, i.CurrentPos);
                Laya.Vector3.subtract(i.CurrentPos, a, a), Laya.Vector3.cross(a, i.Direction, a);
                var t = Laya.Vector3.dot(a, Laya.Vector3._Up);
                this._roadOffset = t >= 0 ? -1 * n : n, this._roadOffset = this.GetRoadOffsetInRange(this._roadOffset);
            }, CharacterCtr.prototype.WaitForLand = function (a) {
                this._onGround && (this._rigidBody.isKinematic = !0,
                    a ? this._charAnimator.Celebrate() :
                        this._charAnimator.Regret(),
                    Laya.timer.clearAll(this));
            }, CharacterCtr.prototype.GetRoadOffsetInRange = function (a) {
                return a > 0 ? Math.min(t.default.Instance.MaxRoadOffset, a) : Math.max(-1 * t.default.Instance.MaxRoadOffset, a);
            }, CharacterCtr.prototype.GroundMove = function (a, i) {
                var g = e.default.Instance.GetPointByDistance(this._posOnRoad, this._currentPointIndex, a * 16 / 1e3);
                this._currentPointIndex = g.PointIndex, this._posOnRoad = g.CurrentPos;
                var n = new Laya.Vector3();
                Laya.Vector3.subtract(g.CurrentPos, g.Direction, n),
                    this._sprite3D.transform.position = this._posOnRoad,
                    this._sprite3D.transform.lookAt(n, Laya.Vector3._Up), this._sprite3D.transform.getRight(n),
                    Laya.Vector3.scale(n, -1, n), Laya.Vector3.normalize(n, n), Laya.Vector3.scale(n, i, n),
                    Laya.Vector3.add(this._posOnRoad, n, n), this._sprite3D.transform.position = n;
            }, CharacterCtr.prototype.SkyMove = function () {
                var a = new Laya.Vector3();
                this._sprite3D.transform.getForward(a), Laya.Vector3.normalize(a, a),
                    Laya.Vector3.scale(a, -1 * this.CurrentSpeed, a);
                var i = this._rigidBody.linearVelocity.clone();
                null != this._skyVelocity && Laya.Vector3.subtract(i, this._skyVelocity, i),
                    this._skyVelocity = a, Laya.Vector3.add(i, a, i), this._rigidBody.linearVelocity = i;
            }, CharacterCtr.prototype.Fly = function (a) {
                void 0 === a && (a = !1), this._rigidBody.isKinematic = !1, a ? (this._rigidBody.linearVelocity = new Laya.Vector3(0, 40, 0),
                    this._upVelocity = new Laya.Vector3(0, 40, 0)) : (this._rigidBody.linearVelocity = new Laya.Vector3(0, 25, 0),
                        this._upVelocity = new Laya.Vector3(0, 25, 0)), this._skyVelocity = null,
                    this._charAnimator.Fly(), this._onGround = !1;
            }, CharacterCtr.prototype.onTriggerEnter = function (a) {
                var i = a.owner.name;
                if (this._onGround) i.indexOf("Speed", 0) > -1 ? (a.owner.destroy(),
                    this.SpeedUp()) : i.indexOf("Jump1", 0) > -1 ? this.Fly(!0) : i.indexOf("Jump2", 0) > -1 ? this.Fly() : i.indexOf("Obstacle", 0) > -1 && this._speedState != u.SpeedState.SpeedUp && this.Tripped(); else if (i.indexOf("Water", 0) > -1) {
                        var g = a.owner.transform.position;
                        this.FailIntoWater(g);
                    } else i.indexOf("Jump1", 0) > -1 ? this.Fly(!0) : i.indexOf("Jump2", 0) > -1 ? this.Fly() : i.indexOf("zheglu", 0) > -1 && this.LandOnGround();
            }, CharacterCtr.prototype.SpeedUp = function () {
                this._speedTimer = 3e3, this._speedState = u.SpeedState.SpeedUp,
                    this._charAnimator.SpeedUp();
            }, CharacterCtr.prototype.SpeedNormal = function () {
                this._speedState = u.SpeedState.Normal,
                    this._charAnimator.SpeedNormal();
            }, CharacterCtr.prototype.Tripped = function () {
                this._speedTimer = -700, this._speedState = u.SpeedState.SpeedDown,
                    this._charAnimator.Trip();
            }, CharacterCtr.prototype.onUpdate = function () {
                this._startRunning && !this._gameOver && (this._currentPointIndex >= e.default.Instance.WayPoints.length - 2 ? t.default.Instance.GameOver(this) : (this._speedTimer > 0 ? (this._speedTimer -= 16,
                    this._speedTimer <= 0 && (this._speedTimer = 0,
                        this.SpeedNormal())) : this._speedTimer < 0 ? (this._speedTimer += 16,
                            this._speedTimer >= 0 && (this._speedTimer = 0,
                                this.SpeedNormal())) : this.SpeedNormal(), this._onGround ? this.GroundMove(this.CurrentSpeed, this._roadOffset) : this.SkyMove()));
            }, CharacterCtr.prototype.FailIntoWater = function (a) { },
                Object.defineProperty(CharacterCtr.prototype, "CharacterCount", {
                    set: function (a) {
                        this._characterCount = a;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(CharacterCtr.prototype, "IsPlayer", {
                    get: function () {
                        return this._isPlayer;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(CharacterCtr.prototype, "PosOnRoad", {
                    get: function () {
                        return this._posOnRoad;
                    },
                    enumerable: !0,
                    configurable: !0
                }), CharacterCtr.prototype.onAwake = function () {
                    this._sprite3D = this.owner, this._skinMeshRender = this._sprite3D.getChildByName("base_male_0"),
                        this._skinMeshRender.skinnedMeshRenderer.castShadow = !0, this._charAnimator = this.owner.addComponent(n.default),
                        this._rigidBody = this.owner.getComponent(Laya.Rigidbody3D), this._rigidBody.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER,
                        this._rigidBody.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER,
                        this.Init();
                }, CharacterCtr;
        }(Laya.Script3D);
        g.default = _;
    }, {
        "../../Enums": 10,
        "../TrackManager": 19,
        "./CharacterAnimator": 13,
        "./CharacterManager": 15
    }],
    15: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../GameManager"), e = a("./PlayerCtr"), t = a("./AiCtr"), u = a("../../../Event/EventMgr"), _ = a("../../../Event/EventDef"), l = a("../CameraMove"), r = a("../../Enums"), o = function (a) {
            function CharacterManager() {
                var i = a.call(this) || this;
                return i._accelerateSpeed = .5, i._maxRoadOffset = 2.9,
                    i._color = [new Laya.Color(231 / 255, 0, 215 / 255), new Laya.Color(97 / 255, 231 / 255, 1), new Laya.Color(212 / 255, 231 / 255, 1), new Laya.Color(231 / 255, 215 / 255, 0), new Laya.Color(231 / 255, 129 / 255, 0), new Laya.Color(66 / 255, 114 / 255, 1), new Laya.Color(81 / 255, 81 / 255, 81 / 255)],
                    i._normalSpeed = 20, i;
            }
            return __extends(CharacterManager, a), Object.defineProperty(CharacterManager, "Instance", {
                get: function () {
                    return null == this._instance && (this._instance = n.default.Instance.CurrentScene.addComponent(CharacterManager)),
                        this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterManager.prototype, "CharacterList", {
                get: function () {
                    return this._characterList;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterManager.prototype, "AccelerateSpeed", {
                get: function () {
                    return this._accelerateSpeed;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterManager.prototype, "MaxRoadOffset", {
                get: function () {
                    return this._maxRoadOffset;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharacterManager.prototype, "NormalSpeed", {
                get: function () {
                    return this._normalSpeed;
                },
                enumerable: !0,
                configurable: !0
            }), CharacterManager.prototype.GameOver = function (a) {
                this._isGameOver || (a.IsPlayer && n.default.Instance.GameOver(),
                    this._isGameOver = !0, this._characterList.forEach(function (i) {
                        i == a ? i.GameFinish(!0) : i.GameFinish(!1);
                    }), u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Camera_Event, {
                        CameraState: r.CameraState.RotatedAround,
                        SpeedState: r.SpeedState.Normal
                    }), a.IsPlayer ? u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Game_OnLevelComplate, {
                        Win: !0,
                        Rank: this._playerCtr.Ranking
                    }) : u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Game_OnLevelComplate, {
                        Win: !1,
                        Rank: this._playerCtr.Ranking
                    }));
            }, CharacterManager.prototype.onStart = function () {
                u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Game_OnLevelStart, null);
            }, CharacterManager.prototype.InitPlayer = function () {
                var a = n.default.Instance.CurrentScene.getChildByName("zhujue");
                this.InitAI(a), this._playerCtr = a.addComponent(e.default),
                    this._playerCtr.GetReady(0),
                    n.default.Instance.CurrentScene.getChildByName("Main Camera").addComponent(l.default).
                        InitCamera(this._playerCtr, new Laya.Vector3(0, 2, 4), new Laya.Vector3(0, 3, 5));
                var i = Math.floor(Math.random() * this._characterList.length);
                this._characterList.splice(i, 0, this._playerCtr);
                for (var g = 0; g < this._characterList.length; g++) {
                    var t = this._characterList[g], o = 2 * this._maxRoadOffset / this._characterList.length;
                    t.GetReady(g * o - this._maxRoadOffset), t.CharacterCount = this._characterList.length;
                }
                u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: r.CameraState.RotatedAround
                });
            }, CharacterManager.prototype.StartGame = function () {
                u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: r.CameraState.Ground
                }), this._characterList.forEach(function (a) {
                    return a.StartRunning();
                });
            }, CharacterManager.prototype.FallIntoWater = function () {
                this._characterList.forEach(function (a) {
                    a.IsPlayer || a.GameFinish(!0);
                }), u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Camera_Event, {
                    CameraState: r.CameraState.RotatedAround,
                    SpeedState: r.SpeedState.Normal
                }), u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Game_OnLevelComplate, {
                    Win: !1,
                    Rank: this._playerCtr.Ranking
                });
            }, CharacterManager.prototype.onLateUpdate = function () {
                for (var a = [], i = 0; i < this._characterList.length; i++) {
                    var g = this._characterList[i];
                    a.push({
                        Progress: g.Progress,
                        Index: i,
                        IsPlayer: g.IsPlayer
                    });
                }
                a.sort(function (a, i) {
                    return i.Progress - a.Progress;
                });
                for (i = 0; i < a.length; i++) {
                    var n = a[i].Index;
                    this._characterList[n].Ranking = i + 1;
                }
            }, CharacterManager.prototype.InitAI = function (a) {
                for (var i = 0; i < 7; i++) {
                    var g = Laya.Sprite3D.instantiate(a, a.parent).addComponent(t.default);
                    this._characterList.push(g), g.SetColor(this._color[i]);
                }
            }, CharacterManager.prototype.PlayerInput = function (a) {
                this._playerCtr.Input(a);
            }, Object.defineProperty(CharacterManager.prototype, "PlayerCtr", {
                get: function () {
                    return this._playerCtr;
                },
                enumerable: !0,
                configurable: !0
            }), CharacterManager.prototype.onDestroy = function () {
                this._characterList = null, CharacterManager._instance = null;
            }, CharacterManager.prototype.onAwake = function () {
                this._characterList = [], this._isGameOver = !1,
                    this.InitPlayer();
            }, CharacterManager;
        }(Laya.Script);
        g.default = o;
    }, {
        "../../../Event/EventDef": 1,
        "../../../Event/EventMgr": 2,
        "../../Enums": 10,
        "../CameraMove": 11,
        "../GameManager": 17,
        "./AiCtr": 12,
        "./PlayerCtr": 16
    }],
    16: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./CharacterCtr"), e = a("../TrackManager"), t = a("./CharacterManager"), u = a("../GameManager"), _ = a("../../../Event/EventMgr"), l = a("../../../Event/EventDef"), r = a("../../SkinMgr"), o = function (a) {
            function PlayerCtr() {
                var i = a.call(this) || this;
                return i._matArray = [null, null, null, null, null, null, null, null, null, null],
                    i;
            }
            return __extends(PlayerCtr, a), PlayerCtr.prototype.Fly = function (i) {
                void 0 === i && (i = !1), a.prototype.Fly.call(this), this._flyPosOnRoad = this._posOnRoad.clone(),
                    this._flyCurrentPointIndex = this._currentPointIndex;
            }, PlayerCtr.prototype.SkyMove = function () {
                var a = new Laya.Vector3();
                this._sprite3D.transform.getForward(a), Laya.Vector3.normalize(a, a),
                    Laya.Vector3.scale(a, -1 * (this.CurrentSpeed + 4), a);
                var i = this._rigidBody.linearVelocity.clone();
                null != this._skyVelocity && Laya.Vector3.subtract(i, this._skyVelocity, i),
                    this._skyVelocity = a, Laya.Vector3.add(i, a, i), this._rigidBody.linearVelocity = i;
            }, PlayerCtr.prototype.onLateUpdate = function () { }, PlayerCtr.prototype.StartRunning = function () {
                a.prototype.StartRunning.call(this);
            }, PlayerCtr.prototype.onTriggerEnter = function (i) {
                console.log(i.owner.name), a.prototype.onTriggerEnter.call(this, i);
            }, PlayerCtr.prototype.SetArrowToward = function () {
                if (this._onGround || this._gameOver || !this._startRunning) this._arrowPointMesh.active = !1; else {
                    this._arrowPointMesh.active = !0;
                    var a = e.default.Instance.LastPoint;
                    a.y = this._arrowMesh.transform.position.y, this._arrowMesh.transform.lookAt(a, new Laya.Vector3(0, -1, 0));
                }
            }, PlayerCtr.prototype.InitSkinMat = function () {
                var a = this;
                this._matArray[0] = this._skinMeshRender.skinnedMeshRenderer.material;
                for (var i = 1; i < r.default.Instance.CurrentSkinDate.SkinCount; i++) Laya.BlinnPhongMaterial.load("subRes/LayaScene_Main/Conventional/Assets/LayaResources/Materials/Skin/" + i + ".lmat", Laya.Handler.create(this, function (i, g) {
                    a._matArray[i] = g, i == r.default.Instance.CurrentSkinDate.SkinCount - 1 && a.ChangeSkin(r.default.Instance.GetCurrentSkin());
                }, [i]));
            }, PlayerCtr.prototype.Input = function (a) {
                this._onGround ? (this._roadOffset += a, this._roadOffset = this.GetRoadOffsetInRange(this._roadOffset)) : this._sprite3D.transform.rotate(new Laya.Vector3(0, -10 * a, 0), !1, !1);
            }, Object.defineProperty(PlayerCtr.prototype, "Metres", {
                get: function () {
                    return this.Progress * e.default.Instance.TotalLength;
                },
                enumerable: !0,
                configurable: !0
            }), PlayerCtr.prototype.FailIntoWater = function (a) {
                this._charAnimator.Swimming(), this._sprite3D.transform.position = new Laya.Vector3(this._sprite3D.transform.position.x, a.y - .6, this._sprite3D.transform.position.z),
                    this._rigidBody.isKinematic = !0, this._startRunning = !1,
                    this._onGround = !0, this._gameOver || t.default.Instance.FallIntoWater(),
                    this._gameOver = !0;
            }, PlayerCtr.prototype.ChangeSkin = function (a) {
                this._skinMeshRender.skinnedMeshRenderer.material = this._matArray[a];
            }, PlayerCtr.prototype.onAwake = function () {
                a.prototype.onAwake.call(this), this._isPlayer = !0, this.CharAnimator._isPlayer = !0,
                    _.default.instance.regEvemt(l.Event_SHUISAHNG_Def.Game_ChangeSkin, this, this.ChangeSkin),
                    this.InitSkinMat();
            }, PlayerCtr.prototype.onDisable = function () {
                _.default.instance.removeEvent(l.Event_SHUISAHNG_Def.Game_ChangeSkin, this, this.ChangeSkin);
            }, PlayerCtr.prototype.SetLandingPos = function () {
                if (this._onGround || this._gameOver || !this._startRunning) this._landPoint.active = !1; else {
                    var a = u.default.Instance.CurrentScene, i = new Laya.Vector3(), g = new Laya.HitResult(), n = (this._upVelocity.y + this._rigidBody.linearVelocity.y) / 8.3;
                    if (this._sprite3D.transform.getForward(i), Laya.Vector3.normalize(i, i),
                        Laya.Vector3.scale(i, -1 * n * this.CurrentSpeed - 2, i), Laya.Vector3.add(this._sprite3D.transform.position, i, i),
                        a.physicsSimulation.rayCast(new Laya.Ray(i, new Laya.Vector3(0, -1, 0)), g, 1e4, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER)) {
                        var e = g.point.clone(), t = this._landPointMesh._render.material;
                        t.colorR = 0, t.colorG = 1, t.colorB = 0, t.colorA = 1;
                        var _ = Laya.Vector3.distance(this._sprite3D.transform.position, this._landPoint.transform.position), l = Math.min(.8, _ / 100) + .3;
                        this._landPoint.transform.scale = new Laya.Vector3(l, l, l), g.collider.owner.name.indexOf("Water") > -1 ? (t.colorR = 1,
                            t.colorG = 0, t.colorB = 0, t.colorA = 1, this._landPoint.active = !0,
                            e.y += 1.1, this._landPoint.transform.position = e.clone()) : g.collider.owner.name.indexOf("Jump2") > -1 ? (this._landPoint.active = !0,
                                e.y -= .3, this._landPoint.transform.position = e.clone()) : g.collider.owner.name.indexOf("Jump1") > -1 ? (this._landPoint.active = !0,
                                    e.y -= 2.2, this._landPoint.transform.position = e.clone()) : (e.y += .01,
                                        this._landPoint.active = !0, this._landPoint.transform.position = e.clone());
                    }
                }
            }, PlayerCtr;
        }(n.default);
        g.default = o;
    }, {
        "../../../Event/EventDef": 1,
        "../../../Event/EventMgr": 2,
        "../../SkinMgr": 20,
        "../GameManager": 17,
        "../TrackManager": 19,
        "./CharacterCtr": 14,
        "./CharacterManager": 15
    }],
    17: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./TrackManager"), e = a("../../Event/EventMgr"), t = a("../../Event/EventDef"),
            u = a("./Character/CharacterManager"), _ = a("../../Mgr/ViewMgr"), l = a("../../Mgr/StorageMgr"),
            r = a("../../Mgr/MySoundMgr"), o = a("../../vivo/GameDefine"), ee = a("./ui/layaMaxUI"), y = function (a) {
                function GameManager() {
                    var i = a.call(this) || this;
                    i.loadui = new ee.ui.View.LoadingUI()
                    return i.FinishPointUrl = "subRes/LayaScene_Main/Conventional/FinishPoint.lh",
                        i.LocalResourceUrl = "subRes/LayaScene_Main/Conventional/", i._bottomAutoZone = !1,
                        i;
                }
                return __extends(GameManager, a), Object.defineProperty(GameManager.prototype, "CurrentScene", {
                    get: function () {
                        return this._currentScene;
                    },
                    set: function (a) {
                        this._currentScene = a;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameManager.prototype, "BottomAutoZone", {
                    get: function () {
                        return this._bottomAutoZone;
                    },
                    set: function (a) {
                        this._bottomAutoZone = a;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameManager.prototype, "CurrentLevel", {
                    get: function () {
                        return this._currentLevel;
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameManager.prototype.InitShadow = function () {
                    var a = this._currentScene.getChildByName("Directional Light");
                    a.shadow = !0, a.shadowDistance = 100, a.shadowResolution = 2048, a.shadowPSSMCount = 1,
                        a.shadowPCFType = 1, this._currentScene.getChildByName("Road")._children.filter(function (a) {
                            return a.name.indexOf("zhenglu") > -1;
                        })[0].getChildByName("zheglu01").meshRenderer.receiveShadow = !0, this._currentScene.getChildByName("Water").meshRenderer.receiveShadow = !0;
                    var i = this._currentScene.getChildByName("WaterD");
                    if (i) {
                        var g = i.meshRenderer.material;
                        g.tilingOffset;
                        var n = 0;
                        Laya.timer.loop(50, this, function () {
                            n += .02, g.tilingOffsetW = Math.sin(n);
                        });
                    }
                    var e = this._currentScene.getChildByName("Road").getChildByName("Objects").getChildByName("FinishPointFake");
                    Laya.Sprite3D.load(this.FinishPointUrl, Laya.Handler.create(this, function (a, i) {
                        a.parent.addChild(i), i.transform.worldMatrix = a.transform.worldMatrix, a.destroy(),
                            this._finishPointEffect = i.getChildByName("Effect"), this._finishPointEffect.active = !1;
                    }, [e]));
                }, GameManager.prototype.SetShare_wodexiaokonglong_Menu = function (a, i, g, n, e) {

                }, GameManager.prototype.onStart = function () {
                    this.GetStorageData(), this.CreatGameScene(), this.RegWxShowEvent();
                }, GameManager.prototype.LoadGameDate = function () {
                    this._currentLevel = 0;
                }, GameManager.prototype.GetStorageData = function () {
                    var a = Laya.LocalStorage.getItem("Waterpark-Slide-Race-CurrentLevel")
                    null != a && "" != a || (a = "0"), this._currentLevel = parseInt(a);
                }, GameManager.prototype.CreatGameScene = function () {
                    (this.StorageState(), this._currentScene) &&
                        (this._currentScene.getChildByName("Directional Light").shadow = !1,
                            this._currentScene.destroy());
                    var a = this._currentLevel % 5,
                        i = this.LocalResourceUrl + "Level" + a + ".ls";
                    // !this.loadui && (this.loadui = new ee.ui.View.LoadingUI());
                    Laya.stage.addChild(this.loadui);
                    Laya.Scene3D.load(i, Laya.Handler.create(this, this.LoadComplete));
                }, GameManager.prototype.RegWxShowEvent = function () {

                }, GameManager.prototype.StorageState = function () {
                    var a = new l.Storage_SHUISAHNG_Req();
                    a.key = "CurrentLevel1", a.data = null != this._currentLevel ? this._currentLevel : 0,
                        l.default.setStorage(a);
                    Laya.LocalStorage.setItem("Waterpark-Slide-Race-CurrentLevel", JSON.stringify(this._currentLevel));
                }, GameManager.prototype.LoadComplete = function (a) {
                    this._currentScene = a,
                        Laya.stage.addChildAt(a, 0),
                        e.default.instance.dispatch(t.Event_SHUISAHNG_Def.APP_LoadCompelete, this),
                        this.InitShadow(),
                        this.InitTrackPath(),
                        this.InitPlayers(),
                        _.default.instance.openView(_.View_SHUISAHNG_Def.GameMainView),
                        o.GameDefine.isfirst = !1;
                    this.loadui.removeSelf();
                }, GameManager.prototype.StartGame = function () {
                    u.default.Instance.StartGame();
                }, GameManager.prototype.CreatNextGameScene = function () {
                    this._currentLevel++,
                        this.CreatGameScene();
                    this.StorageState();
                }, GameManager.prototype.InitTrackPath = function () {
                    var a = this._currentScene.getChildByName("Road");
                    a._children.filter(function (a) {
                        return a.name.indexOf("zhenglu") > -1;
                    })[0].getChildByName("zheglu01").meshRenderer.receiveShadow = !0;
                    var i = a.getChildByName("WayPoints").getChildByName("Curvy Spline");
                    n.default.Instance.CalculatePath(i, 1, .5);
                }, GameManager.prototype.InitPlayers = function () {
                    var a = u.default.Instance.PlayerCtr;
                    this._playerAnimator = a.CharAnimator, this._controller = this.owner.getChildByName("Controller");
                }, GameManager.prototype.GameOver = function () {
                    this._finishPointEffect && (this._finishPointEffect.active = !0);
                }, GameManager.prototype.onAwake = function () {
                    Laya.loader.maxLoader = 50, GameManager.Instance = this,
                        this.SetShare_wodexiaokonglong_Menu("", "", function () { }, function () { }, function () { })
                }, GameManager;
            }(Laya.Script);
        g.default = y;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../../Mgr/MySoundMgr": 6,
        "../../Mgr/StorageMgr": 7,
        "../../Mgr/ViewMgr": 9,
        "../../vivo/GameDefine": 30,
        "./Character/CharacterManager": 15,
        "./TrackManager": 19,
        "./ui/layaMaxUI": 29
    }],
    18: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function () {
            function PathGenerator() { }
            return PathGenerator.interpolatedPosition = function (a, i, g, n, e) {
                var t = e * e * e, u = e * e, _ = -.5 * t + u - .5 * e, l = 1.5 * t - 2.5 * u + 1, r = -1.5 * t + 2 * u + .5 * e, o = .5 * t - .5 * u, y = new Laya.Vector3();
                return y.x = a.x * _ + i.x * l + g.x * r + n.x * o, y.y = a.y * _ + i.y * l + g.y * r + n.y * o,
                    y.z = a.z * _ + i.z * l + g.z * r + n.z * o, y;
            }, PathGenerator.savePathCatmullRom = function (a, i) {
                void 0 === i && (i = 0);
                var g = a.length, n = new Array();
                if (null == a || g < 4) return n;
                for (var e = 1; e < g - 2; e++) {
                    var t = .01;
                    if (i > 0) t = i / Laya.Vector3.distance(a[e], a[e + 1]);
                    for (var u = 0; u < 1; u += t) {
                        var _ = e - 1 < 0 ? a[g - 1] : a[e - 1], l = a[e], r = a[e + 1], o = a[e + 2], y = this.interpolatedPosition(_, l, r, o, u);
                        n.push(y);
                    }
                }
                return n.push(a[g - 2]), n;
            }, PathGenerator;
        }();
        g.default = n;
    }, {}],
    19: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("./PathGenerator"), e = function () {
            function TrackManager() { }
            return Object.defineProperty(TrackManager, "Instance", {
                get: function () {
                    return null == this._instance && (this._instance = new TrackManager()),
                        this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(TrackManager.prototype, "LastPoint", {
                get: function () {
                    return this._wayPoints[this._wayPoints.length - 1];
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(TrackManager.prototype, "TotalLength", {
                get: function () {
                    return this._tootalLength;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(TrackManager.prototype, "WayPoints", {
                get: function () {
                    return this._wayPoints;
                },
                enumerable: !0,
                configurable: !0
            }), TrackManager.prototype.GetNormalizeDirection = function (a, i) {
                var g = new Laya.Vector3();
                return Laya.Vector3.subtract(i, a, g), Laya.Vector3.normalize(g, g), g;
            }, TrackManager.prototype.GetClosetPoint = function (a) {
                for (var i = new t(), g = -1, n = -1, e = 0; e < this._wayPoints.length; e++) {
                    var u = this._wayPoints[e], _ = Laya.Vector3.distance(u, a);
                    (-1 == g || _ < g) && (g = _, n = e);
                }
                return i.CurrentPos = this._wayPoints[n], i.PointIndex = n,
                    i.Direction = n > 0 ? this.GetNormalizeDirection(this._wayPoints[n - 1], this._wayPoints[n]) : Laya.Vector3._ZERO,
                    i;
            }, TrackManager.prototype.GetPointByDistance = function (a, i, g) {
                for (var n = 0, e = a.clone(), t = {
                    CurrentPos: null,
                    PointIndex: null,
                    Direction: null
                }; ;) {
                    if (i >= this._wayPoints.length - 1) return t.CurrentPos = this._wayPoints[this._wayPoints.length - 1],
                        t.PointIndex = this._wayPoints.length - 1, t.Direction = Laya.Vector3._ZERO,
                        t;
                    var u = this._wayPoints[i + 1], _ = Laya.Vector3.distance(e, u);
                    if ((n += _) >= g) {
                        var l = (n - g) / _;
                        Laya.Vector3.lerp(u, e, l, e), t.CurrentPos = e, t.PointIndex = i;
                        var r = this.GetNormalizeDirection(this._wayPoints[i], u), o = 0 == i ? r : this.GetNormalizeDirection(this._wayPoints[i - 1], this._wayPoints[i]), y = new Laya.Vector3(), s = Laya.Vector3.distance(this._wayPoints[i], this._wayPoints[i + 1]), h = Laya.Vector3.distance(this._wayPoints[i], e) / s;
                        return Laya.Vector3.lerp(o, r, h, y), t.Direction = y, t;
                    }
                    i++, e = this._wayPoints[i].clone();
                }
            }, TrackManager.prototype.CalculatePath = function (a, i, g) {
                for (var e = [], t = 0; t < a.numChildren; t++) {
                    var u = a._children[t].transform.position;
                    e.push(u);
                }
                var _ = e.length;
                switch (i) {
                    case 0:
                        break;

                    case 1:
                        if (_ >= 2) {
                            var l = e[0], r = e[_ - 1];
                            e.unshift(l), e.push(r);
                        }
                        break;

                    case 2:
                        if (_ >= 2) {
                            l = e[_ - 1];
                            var o = e[0];
                            r = e[1];
                            e.unshift(l), e.push(o), e.push(r);
                        }
                }
                this._wayPoints = n.default.savePathCatmullRom(e, g);
                var y = 0;
                for (t = 0; t < this._wayPoints.length - 1; t++) {
                    var s = this._wayPoints[t], h = this._wayPoints[t + 1];
                    y += Laya.Vector3.distance(s, h);
                }
                this._tootalLength = Math.floor(y);
            }, TrackManager.prototype.GetProgress = function (a) {
                return (a = (a = a < 0 ? 0 : a) > this._wayPoints.length - 1 ? this._wayPoints.length - 1 : a) / (this._wayPoints.length - 1);
            }, TrackManager;
        }();
        g.default = e;
        var t = function () {
            return function () { };
        }();
    }, {
        "./PathGenerator": 18
    }],
    20: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../Mgr/StorageMgr"), e = function () {
            function SkinMgr() { }
            return SkinMgr.prototype.UnLockSkin = function (a) {
                this.CurrentSkinDate.Owned[a] = !0, this.SaveSkinDate();
            }, SkinMgr.prototype.SetCurrentSkin = function (a) {
                this.CurrentSkinDate.CurrentSkin = a, this.SaveSkinDate();
            }, SkinMgr.prototype.SaveSkinDate = function () {
                var a = new n.Storage_SHUISAHNG_Req();
                a.key = "SkinDate1", a.data = this._skinDate, n.default.setStorage(a);
            }, SkinMgr.prototype.ChangeSkin = function (a, i) {
                var g = this.GetCurrentSkin();
                if (null != g && -1 != g) {
                    var n = "res/Model/Boomrang-0" + (g + 1) + ".lh";
                    Laya.Sprite3D.load(n, Laya.Handler.create(this, function (g) {
                        for (var n = a.getChildByName("Boomrang"), e = 0; e < n._children.length; e++) {
                            var t = n.getChildAt(e);
                            "TailRender" != t.name && (t.destroy(), e--);
                        }
                        Laya.Sprite3D.instantiate(g, n, !1).transform.worldMatrix = n.transform.worldMatrix,
                            i();
                    }));
                } else i();
            }, SkinMgr.prototype.GetSkinAvailable = function (a) {
                return this.CurrentSkinDate.Owned[a];
            }, Object.defineProperty(SkinMgr, "Instance", {
                get: function () {
                    return null == this._instance && (this._instance = new SkinMgr()),
                        this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), SkinMgr.prototype.GetCurrentSkin = function () {
                return this.CurrentSkinDate.CurrentSkin;
            }, Object.defineProperty(SkinMgr.prototype, "CurrentSkinDate", {
                get: function () {
                    if (null == this._skinDate) {
                        var a = n.default.getStorage("SkinDate1");
                        if (null == a || "" == a) this._skinDate = new t(SkinMgr.SkinCount, !0),
                            this.SaveSkinDate(); else {
                            var i = JSON.parse(a);
                            null != i && null != i.Owned && i.Owned.length == SkinMgr.SkinCount ? this._skinDate = i : (this._skinDate = new t(SkinMgr.SkinCount, !0),
                                this.SaveSkinDate());
                        }
                    }
                    return this._skinDate;
                },
                enumerable: !0,
                configurable: !0
            }), SkinMgr.SkinCount = 10, SkinMgr;
        }();
        g.default = e;
        var t = function () {
            return function (a, i) {
                void 0 === i && (i = !1), this.SkinCount = a, this.Owned = [];
                for (var g = 0; g < this.SkinCount; g++) i && 0 == g ? this.Owned.push(!0) : this.Owned.push(!1);
                this.CurrentSkin = i ? 0 : -1;
            };
        }();
    }, {
        "../Mgr/StorageMgr": 7
    }],
    21: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../GameCore/Character/CharacterManager"), e = function (a) {
            function Controller() {
                return a.call(this) || this;
            }
            return __extends(Controller, a), Controller.prototype.onMouseMove = function () {
                if (this._isMouseDown) if (null == this._lastX) this._lastX = Laya.stage.mouseX; else {
                    var a = Laya.stage.mouseX - this._lastX;
                    Laya.stage.mouseX > Laya.stage.width && console.log(), n.default.Instance.PlayerInput(a / 40),
                        this._lastX = Laya.stage.mouseX;
                }
            }, Controller.prototype.onMouseOut = function () {
                this._isMouseDown = !1, this._lastX = null;
            }, Controller.prototype.onMouseUp = function () {
                this._isMouseDown = !1, this._lastX = null;
            }, Controller.prototype.onMouseDown = function () {
                this._isMouseDown = !0, this._lastX = null;
            }, Controller;
        }(Laya.Script);
        g.default = e;
    }, {
        "../GameCore/Character/CharacterManager": 15
    }],
    22: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../View/ViewBase"), e = a("../GameCore/GameManager"), t = a("../../Mgr/ViewMgr"), u = a("../../Event/EventMgr"), _ = a("../../Event/EventDef"), l = a("../../Mgr/MySoundMgr"), r = a("../../vivo/GameDefine"), o = a("../SkinMgr"), y = function (a) {
            function GameMainView() {
                var i = a.call(this) || this;
                return i.bStart = !0, i._resUrl = "Image/skin/",
                    i;
            }
            return __extends(GameMainView, a), GameMainView.prototype.SetLevel = function () { },
                GameMainView.prototype.onShow = function () {
                    console.log("当前等级", e.default.Instance.CurrentLevel),
                        this._levelNumber_Clip.value = (e.default.Instance.CurrentLevel + 1).toString(),
                        l.default.instance.setBGMVolume(.7);
                }, GameMainView.prototype.GameStartClicked = function () {
                    if (this.bStart) {
                        platform.getInstance().showInterstitial(() => {
                            this.closeView()
                            t.default.instance.openView(t.View_SHUISAHNG_Def.GamePlaying, null, function () { })//,
                            //l.default.instance.stopBGM();
                        }), this.bStart = !1;
                    }
                }, GameMainView.prototype.SkinClicked = function () {
                    t.default.instance.openView(t.View_SHUISAHNG_Def.SkinView);
                }, GameMainView.prototype.onAwake = function () {
                    a.prototype.onAwake.call(this), this._buttons = this.owner.getChildByName("Buttons"),
                        this._startGame_Img = this.owner.getChildByName("StartGame_Img"),
                        this._startGame_Img.on(Laya.Event.CLICK, this, this.GameStartClicked),
                        this._skin_Img = this._buttons.getChildByName("Skin_Img"),
                        this._skin_Img.on(Laya.Event.CLICK, this, this.SkinClicked),
                        this._levelNumber_Clip = this.owner.getChildByName("Level_Img").getChildByName("LevelNumber_Clip"),
                        this.ski_guaiguaixueyang_nBtn = this._buttons.getChildByName("skinBtn"),
                        this.skin_guaiguaixueyang_Img = this.ski_guaiguaixueyang_nBtn.getChildByName("skin"),
                        this.GetNe_guaiguaixueyang_xtSkin(),
                        this.ski_guaiguaixueyang_nBtn.on(Laya.Event.CLICK, this, this.skinBtnClick),
                        r.GameDefine.isShowSkin, this.ski_guaiguaixueyang_nBtn.visible = !1;
                    this.btn_music = this.owner.getChildByName("btn_music");
                    this.btn_music.skin = window.WebAudioEngine.pause ? "qietu/btn_sound_off.png" : "qietu/btn_sound_on.png";
                    this.btn_music.on(Laya.Event.CLICK, this, this.onChageMusic);
                }, GameMainView.prototype.onChageMusic = function () {
                    window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    Laya.LocalStorage.setItem("Waterpark-Slide-Race-musicState", JSON.stringify(window.WebAudioEngine.pause));
                    this.btn_music.skin = window.WebAudioEngine.pause ? "qietu/btn_sound_off.png" : "qietu/btn_sound_on.png";
                }, GameMainView.prototype.skinBtnClick = function () {
                    var a = this;
                    a.UnlockSkin();
                }, GameMainView.prototype.UnlockSkin = function () {
                    this.ski_guaiguaixueyang_nBtn.visible = !1, o.default.Instance.SetCurrentSkin(this._skinI_guaiguaixueyang_ndex),
                        u.default.instance.dispatch(_.Event_SHUISAHNG_Def.Game_ChangeSkin, [this._skinI_guaiguaixueyang_ndex]);
                }, GameMainView.prototype.GetNe_guaiguaixueyang_xtSkin = function () {
                    var a = Math.floor(8 * Math.random()) + 1;
                    r.GameDefine.curIndex++, 1 == r.GameDefine.curIndex && (a = 9), 2 == r.GameDefine.curIndex && (a = 1),
                        3 == r.GameDefine.curIndex && (a = 5), 4 == r.GameDefine.curIndex && (a = 7), this._skinI_guaiguaixueyang_ndex = a,
                        this.Refre_guaiguaixueyang_shSkin();
                }, GameMainView.prototype.Refre_guaiguaixueyang_shSkin = function () {
                    this.skin_guaiguaixueyang_Img.loadImage(this._resUrl + this._skinI_guaiguaixueyang_ndex + ".png");
                }, GameMainView.prototype.onStart = function () {
                    this.bStart = !0;
                }, GameMainView;
        }(n.default);
        g.default = y;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../../Mgr/MySoundMgr": 6,
        "../../Mgr/ViewMgr": 9,
        "../../View/ViewBase": 28,
        "../../vivo/GameDefine": 30,
        "../GameCore/GameManager": 17,
        "../SkinMgr": 20
    }],
    23: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../View/ViewBase"), e = a("../GameCore/GameManager"), t = a("../GameCore/Character/CharacterManager"), u = a("../GameCore/TrackManager"),
            _ = a("../../Event/EventMgr"), l = a("../../Event/EventDef"), r = a("../Enums"), o = a("../../Mgr/MySoundMgr"), y = a("../../vivo/GameDefine"),
            s = function (a) {
                function GamePlayingView() {
                    var i = a.call(this) || this;
                    return i._progressLength = 401, i.bStart = !0, i.isStart = !1,
                        i;
                }
                return __extends(GamePlayingView, a), GamePlayingView.prototype.onStart = function () {
                    this.bStart = !0;
                }, GamePlayingView.prototype.GameOver = function (a) {
                    if (this.bStart) {
                        this.bStart = !1;
                        this.closeView(), a.Win ? y.GameDefine.iswin = !0 : y.GameDefine.iswin = !1,
                            console.log("游戏结束。。。")//, o.default.instance.stopBGM();
                        Laya.stage.addChild(GlodeClass.GameWF);
                    }
                }, GamePlayingView.prototype.ShowCountDown = function () {
                    this._autoZone_Box.visible = !0, this._ranking_Box.visible = !0,
                        this.CountDown(), Laya.timer.frameLoop(1, this, this.CountDown),
                        _.default.instance.regEvemt(l.Event_SHUISAHNG_Def.Game_OnLevelComplate, this, this.GameOver);
                }, GamePlayingView.prototype.onClose = function () {
                    a.prototype.onClose.call(this);
                }, GamePlayingView.prototype.ShowRecommend = function () {
                    this._autoZone_Box.visible = !1, this.ShowCountDown();
                }, GamePlayingView.prototype.onShow = function () {
                    this._countTimer = 3100, this._playerRank_Box.visible = !1,
                        this._ranking_Box.visible = !1, this._currentLevel_Img.visible = !0;
                    var a = e.default.Instance.CurrentLevel + 1;
                    a / 100 >= 1 ? (this._currentLevel_Clip.scaleX = .3, this._currentLevel_Clip.scaleY = .3,
                        this._currentLevel_Clip.value = a.toString()) : a / 10 >= 1 ? (this._currentLevel_Clip.scaleX = .55,
                            this._currentLevel_Clip.scaleY = .55, this._currentLevel_Clip.value = a.toString()) : (this._currentLevel_Clip.scaleX = .7,
                                this._currentLevel_Clip.scaleY = .7, this._currentLevel_Clip.value = a.toString()),
                        this.ShowCountDown();
                }, GamePlayingView.prototype.onHide = function () {
                    _.default.instance.removeEvent(l.Event_SHUISAHNG_Def.Game_OnLevelComplate, this, this.GameOver);
                }, GamePlayingView.prototype.openView = function (i) {
                    a.prototype.openView.call(this, i);
                }, GamePlayingView.prototype.StartGame = function () {
                    this._rankTime = 0, this._gamePlaying = !0, e.default.Instance.StartGame();
                }, GamePlayingView.prototype.onUpdate = function () {
                    if (this._gamePlaying) {
                        var a = t.default.Instance.PlayerCtr;
                        this._rankTime > 500 ? (this._rankTime = 0, this._playerRank_Clip.value = a.Ranking.toString()) : this._rankTime += 16,
                            this._playerProgress_Img.x = t.default.Instance.PlayerCtr.Progress * this._progressLength;
                        var i = t.default.Instance.CharacterList.filter(function (a) {
                            return 1 == a.Ranking;
                        })[0];
                        this._progress_Bar.width = i.Progress * this._progressLength,
                            this._1StProgress_Img.x = i.Progress * this._progressLength;
                        var g = t.default.Instance.CharacterList.filter(function (a) {
                            return 2 == a.Ranking;
                        })[0];
                        this._2StProgress_Img.x = g.Progress * this._progressLength;
                        var n = t.default.Instance.CharacterList.filter(function (a) {
                            return 3 == a.Ranking;
                        })[0];
                        this._3StProgress_Img.x = n.Progress * this._progressLength;
                        u.default.Instance.TotalLength;
                        this._metres_Text.text = t.default.Instance.PlayerCtr.Metres.toFixed(0) + "M";
                    }
                }, GamePlayingView.prototype.CountDown = function () {
                    if (1 != this.isStart) if (_.default.instance.dispatch(l.Event_SHUISAHNG_Def.Camera_Event, {
                        CameraState: r.CameraState.Ground
                    }), this._countTimer > 1e3) {
                        this._countTimer -= 16;
                        var a = (this._countTimer / 1e3).toFixed(0);
                        this._countDowm_FontClip.value !== a && this._countTimer > 0 && (o.default.instance.playSound("daojishi"),
                            this._countDowm_FontClip.value = a);
                        var i = Math.max(0, (3100 - this._countTimer) / 1e3), g = Math.sin(i * Math.PI);
                        this._beginnerGuideProgress_Img.x = 285.5 + 285.5 * g;
                    } else Laya.timer.clearAll(this), this._autoZone_Box.visible = !1,
                        // this._currentLevel_Img.visible = !1,
                        this._playerRank_Box.visible = !0,
                        this.StartGame(),
                        o.default.instance.setBGMVolume(.7), this.isStart = !0;
                }, GamePlayingView.prototype.onAwake = function () {
                    a.prototype.onAwake.call(this), this._ranking_Box = this.owner.getChildByName("Ranking_Box"),
                        this._currentLevel_Img = this.owner.getChildByName("CurrentLevet_Img"),
                        this._currentLevel_Clip = this._currentLevel_Img.getChildByName("Level_FontClip"),
                        this._progress_Bar = this._ranking_Box.getChildByName("Progress_Box").getChildByName("Progress_Bar"),
                        this._playerProgress_Img = this._progress_Bar.getChildByName("PlayerProgress_Img"),
                        this._1StProgress_Img = this._progress_Bar.getChildByName("1.St_Img"),
                        this._2StProgress_Img = this._progress_Bar.getChildByName("2.St_Img"),
                        this._3StProgress_Img = this._progress_Bar.getChildByName("3.St_Img"),
                        this._playerRank_Box = this._ranking_Box.getChildByName("PlayerRank_Box"),
                        this._playerRank_Clip = this._playerRank_Box.getChildByName("PlayerRank_Clip"),
                        this._metres_Text = this._playerRank_Box.getChildByName("Metres_Text"),
                        this._autoZone_Box = this.owner.getChildByName("AutoZone_Box"),
                        this._countDowm_FontClip = this._autoZone_Box.getChildByName("CountDown_FontClip"),
                        this._beginnerGuide_Img = this._autoZone_Box.getChildByName("BeginnerGuide_Img"),
                        this._beginnerGuideProgress_Img = this._beginnerGuide_Img.getChildByName("Progress_Img");
                    this.btn_music = this.owner.getChildByName("btn_music");
                    this.btn_music.skin = window.WebAudioEngine.pause ? "qietu/btn_sound_off.png" : "qietu/btn_sound_on.png";
                    this.btn_music.on(Laya.Event.CLICK, this, this.onChageMusic)
                }, GamePlayingView.prototype.onChageMusic = function () {
                    window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    Laya.LocalStorage.setItem("Waterpark-Slide-Race-musicState", JSON.stringify(window.WebAudioEngine.pause));
                    this.btn_music.skin = window.WebAudioEngine.pause ? "qietu/btn_sound_off.png" : "qietu/btn_sound_on.png";
                }, GamePlayingView;
            }(n.default);
        g.default = s;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../../Mgr/MySoundMgr": 6,
        "../../View/ViewBase": 28,
        "../../vivo/GameDefine": 30,
        "../Enums": 10,
        "../GameCore/Character/CharacterManager": 15,
        "../GameCore/GameManager": 17,
        "../GameCore/TrackManager": 19
    }],
    24: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../View/ViewBase"), e = a("../../Mgr/MySoundMgr"), t = a("../../Event/EventMgr"), u = a("../../Event/EventDef"), _ = a("../SkinMgr"), l = a("../../Mgr/ViewMgr"), r = function (a) {
            function SkinView() {
                var i = a.call(this) || this;
                return i._resUrl = "Image/skin/", i;
            }
            return __extends(SkinView, a), SkinView.prototype.StartBtnClick = function () {
                if (_.default.Instance.GetSkinAvailable(this._skinIndex)) _.default.Instance.SetCurrentSkin(this._skinIndex),
                    t.default.instance.dispatch(u.Event_SHUISAHNG_Def.Game_ChangeSkin, [this._skinIndex]); else {
                    var a = _.default.Instance.GetCurrentSkin();
                    t.default.instance.dispatch(u.Event_SHUISAHNG_Def.Game_ChangeSkin, [a]);
                }
                l.default.instance.closeView(l.View_SHUISAHNG_Def.GameMainView)
                // , e.default.instance.stopBGM();
                var i = this;
                l.default.instance.openView(l.View_SHUISAHNG_Def.GamePlaying, null, function () {
                    i.closeView();
                });
            }, SkinView.prototype.UnlockBtnClick = function () {
                var a = this;
                a.UnlockSkin();
            }, SkinView.prototype.UnlockSkin = function () {
                this._currentUsing_Img.visible = !0, this._unlock_Btn.visible = !1,
                    this._locked_Img.visible = !1, this._start_Btn.visible = !0,
                    _.default.Instance.UnLockSkin(this._skinIndex),
                    _.default.Instance.SetCurrentSkin(this._skinIndex),
                    t.default.instance.dispatch(u.Event_SHUISAHNG_Def.Game_ChangeSkin, [this._skinIndex]);
            }, SkinView.prototype.addEvent = function () {
                this._close_Btn.on(Laya.Event.CLICK, this, this.CloseBtnClick),
                    this._previous_Btn.on(Laya.Event.CLICK, this, this.SwitchSkin, [-1]),
                    this._next_Btn.on(Laya.Event.CLICK, this, this.SwitchSkin, [1]),
                    this._start_Btn.on(Laya.Event.CLICK, this, this.StartBtnClick),
                    this._unlock_Btn.on(Laya.Event.CLICK, this, this.UnlockBtnClick);
            }, SkinView.prototype.removeEvent = function () { },
                SkinView.prototype.CloseBtnClick = function () {
                    _.default.Instance.GetSkinAvailable(this._skinIndex) && t.default.instance.dispatch(u.Event_SHUISAHNG_Def.Game_ChangeSkin, [this._skinIndex]),
                        l.default.instance.getView(l.View_SHUISAHNG_Def.GameMainView) ? this.closeView() : (this.closeView(),
                            l.default.instance.openView(l.View_SHUISAHNG_Def.GameMainView));
                }, SkinView.prototype.showMsg = function () {
                    this._msg_Img.alpha = 1, Laya.Tween.to(this._msg_Img, {
                        alpha: 0
                    }, 1e3, null, null, 300);
                }, SkinView.prototype.onAwake = function () {
                    this._close_Btn = this.owner.getChildByName("Close_Btn"), this._previous_Btn = this.owner.getChildByName("Previous_Btn"),
                        this._next_Btn = this.owner.getChildByName("Next_Btn"), this._unlock_Btn = this.owner.getChildByName("Unlock_Btn"),
                        this._start_Btn = this.owner.getChildByName("Start_Btn"), this._locked_Img = this.owner.getChildByName("Locked_Img"),
                        this._skinPreview_Img = this.owner.getChildByName("SkinPreview_Img"),
                        this._currentUsing_Img = this.owner.getChildByName("CurrentUsing_Img"),
                        this._msg_Img = this.owner.getChildByName("Msg_Img"), this._msg_Img.alpha = 0;
                }, SkinView.prototype.onShow = function () {
                    this._skinIndex = _.default.Instance.GetCurrentSkin(),
                        this._currentUsing_Img.visible = !0, this._unlock_Btn.visible = !1,
                        this._locked_Img.visible = !1, this._skinPreview_Img.loadImage(this._resUrl + this._skinIndex + ".png");
                }, SkinView.prototype.SwitchSkin = function (a) {
                    a > 0 ? this._skinIndex++ : this._skinIndex--, this._skinIndex > 8 ? this._skinIndex = 0 : this._skinIndex < 0 && (this._skinIndex = 8),
                        this._skinPreview_Img.loadImage(this._resUrl + this._skinIndex + ".png"),
                        _.default.Instance.GetSkinAvailable(this._skinIndex) ? (this._locked_Img.visible = !1,
                            this._unlock_Btn.visible = !1, t.default.instance.dispatch(u.Event_SHUISAHNG_Def.Game_ChangeSkin, [this._skinIndex]),
                            _.default.Instance.GetCurrentSkin() == this._skinIndex ? this._currentUsing_Img.visible = !0 : this._currentUsing_Img.visible = !1) : (this._locked_Img.visible = !0,
                                this._unlock_Btn.visible = !0, this._currentUsing_Img.visible = !1);
                }, SkinView;
        }(n.default);
        g.default = r;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../../Mgr/MySoundMgr": 6,
        "../../Mgr/ViewMgr": 9,
        "../../View/ViewBase": 28,
        "../SkinMgr": 20
    }],
    25: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../Event/EventDef"), e = a("../../Event/EventMgr"), t = function (a) {
            function Loading_XIAOKONGLONG_View() {
                var i = null !== a && a.apply(this, arguments) || this;
                return i._process_XIAOKONGLONG_Width = 0, i;
            }
            return __extends(Loading_XIAOKONGLONG_View, a), Loading_XIAOKONGLONG_View.prototype.onUpdate = function () {
                this._bg_XIAOKONGLONG_.width = Laya.stage.width, this._bg_XIAOKONGLONG_.height = Laya.stage.height,
                    this._destroying && (this._destroying = !1, e.default.instance.dispatch(n.Event_SHUISAHNG_Def.App_CloseFirstLoadingView));
            }, Loading_XIAOKONGLONG_View.prototype.onAwake = function () {
                this._bg_XIAOKONGLONG_ = this.owner.getChildByName("Bg"),
                    this._bottom_XIAOKONGLONG_Zone = this._bg_XIAOKONGLONG_.getChildByName("BottomZone"),
                    this._process_XIAOKONGLONG_BarBg = this._bottom_XIAOKONGLONG_Zone.getChildByName("processBarBg"),
                    this._process_XIAOKONGLONG_Bar = this._process_XIAOKONGLONG_BarBg.getChildByName("processBar"),
                    this._process_XIAOKONGLONG_Bar.width = 1,
                    this._process_XIAOKONGLONG_Width = this._process_XIAOKONGLONG_Bar.width;
                var a = this;
                Laya.Tween.to(this._process_XIAOKONGLONG_Bar, {
                    width: 594
                }, 2e3),
                    e.default.instance.regOnceEvent(n.Event_SHUISAHNG_Def.APP_LoadCompelete, this, function () {
                        a._destroying = !0;
                    });
            }, Loading_XIAOKONGLONG_View.prototype.onEnable = function () {
                a.prototype.onEnable.call(this);
            }, Loading_XIAOKONGLONG_View;
        }(a("../ViewBase").default);
        g.default = t;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../ViewBase": 28
    }],
    26: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function (a) {
            function Tips_SHUISAHNG_View() {
                return a.call(this) || this;
            }
            return __extends(Tips_SHUISAHNG_View, a), Tips_SHUISAHNG_View.prototype.openView = function (i) {
                a.prototype.openView.call(this, i), this.setTipsMsg(i),
                    Laya.timer.clearAll(this);
                var g = this;
                Laya.timer.once(3e3, this, function () {
                    g.closeView();
                });
            }, Tips_SHUISAHNG_View.prototype.setTipsMsg = function (a) {
                this._tipsText.text = a;
            }, Tips_SHUISAHNG_View.prototype.onAwake = function () {
                this._bg = this.owner.getChildByName("Bg"), this._bg.x = Laya.stage.width / 2 - this._bg.width / 2,
                    this._tipsText = this._bg.getChildByName("Text");
            }, Tips_SHUISAHNG_View;
        }(a("../ViewBase").default);
        g.default = n;
    }, {
        "../ViewBase": 28
    }],
    27: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function (a) {
            function TwinkleSprite() {
                var i = a.call(this) || this;
                return i.TwinkleSpeed = 1e3, i.TwinkleMinSize = .95, i.TwinkleMaxSize = 1.05, i._originSize = 1,
                    i._aniForward = !1, i._fontSize = 25, i;
            }
            return __extends(TwinkleSprite, a), TwinkleSprite.prototype.onDisable = function () { },
                TwinkleSprite.prototype.onUpdate = function () {
                    this.displayAni();
                }, TwinkleSprite.prototype.displayAni = function () {
                    if (this._aniForward) {
                        a = this._displaySp.scaleX + 16 / this.TwinkleSpeed;
                        a = Math.min(a, this.TwinkleMaxSize * this._originSize), this._displaySp.scale(a, a),
                            this._displaySp.scaleX >= this.TwinkleMaxSize * this._originSize && (this._aniForward = !1);
                    } else {
                        var a = this._displaySp.scaleX - 16 / this.TwinkleSpeed;
                        a = Math.max(a, this.TwinkleMinSize * this._originSize), this._displaySp.scale(a, a),
                            this._displaySp.scaleX <= this.TwinkleMinSize * this._originSize && (this._aniForward = !0);
                    }
                }, TwinkleSprite.prototype.onAwake = function () {
                    this._displaySp = this.owner, this._disText = this.owner.getChildByName("TitelText"),
                        this._originSize = this._displaySp.scaleX, null != this._disText && (this._disText.text = "",
                            this._fontSize = this._disText.fontSize);
                }, TwinkleSprite.prototype.onEnable = function () {
                    this._displaySp.scale(this._originSize, this._originSize);
                }, TwinkleSprite;
        }(Laya.Script);
        g.default = n;
    }, {}],
    28: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../Mgr/ViewMgr"), e = a("../Event/EventMgr"), t = a("../Event/EventDef"), u = function (a) {
            function View_SHUISAHNG_Base() {
                var i = null !== a && a.apply(this, arguments) || this;
                return i.onCloseEvent = null, i._data = {}, i.onOpenEvent = null,
                    i._viewBase = !0, i._viewDef = n.View_SHUISAHNG_Def.None, i;
            }
            return __extends(View_SHUISAHNG_Base, a), View_SHUISAHNG_Base.prototype.addEvent = function () { },
                View_SHUISAHNG_Base.prototype.onDisable = function () {
                    this.removeEvent();
                }, View_SHUISAHNG_Base.prototype.onDestroy = function () {
                    this.removeEvent();
                }, View_SHUISAHNG_Base.prototype.onShow = function () { }, View_SHUISAHNG_Base.prototype.onClose = function () {
                    Laya.timer.clearAll(this), Laya.Tween.clearAll(this),
                        e.default.instance.dispatch(t.Event_SHUISAHNG_Def.Game_OnViewClose, {
                            view: this._viewDef
                        }), this.onCloseEvent && this.onCloseEvent();
                }, View_SHUISAHNG_Base.prototype.removeEvent = function () {
                    Laya.timer.clearAll(this);
                }, View_SHUISAHNG_Base.prototype.closeView = function () {
                    n.default.instance.closeView(this._viewDef);
                }, View_SHUISAHNG_Base.prototype.hide = function () {
                    this.owner.visible = !1, this.onHide();
                }, View_SHUISAHNG_Base.prototype.show = function () {
                    this.owner.visible = !0, this.onShow();
                }, View_SHUISAHNG_Base.prototype.openView = function (a) {
                    this._data = a, this.show(), e.default.instance.dispatch(t.Event_SHUISAHNG_Def.Game_OnViewOpen, {
                        view: this._viewDef
                    }), this.onOpenEvent && this.onOpenEvent();
                }, View_SHUISAHNG_Base.prototype.viewIsHide = function () {
                    return 0 == this.owner.alpha;
                }, View_SHUISAHNG_Base.prototype.onHide = function () { }, View_SHUISAHNG_Base.prototype.onAwake = function () {
                    this.owner.autoDestroyAtClosed = !0, this.owner.height = Laya.stage.height;
                }, View_SHUISAHNG_Base.prototype.onEnable = function () {
                    this.addEvent();
                }, View_SHUISAHNG_Base;
        }(Laya.Script);
        g.default = u;
    }, {
        "../Event/EventDef": 1,
        "../Event/EventMgr": 2,
        "../Mgr/ViewMgr": 9
    }],

    250: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = a("../../Event/EventDef"), e = a("../../Event/EventMgr"), y = a("../../vivo/GameDefine"), GameManager = a("../GameCore/GameManager"),
            t = function (a) {
                function GameWF_View() {
                    var i = null !== a && a.apply(this, arguments) || this;
                    return i;
                }
                return __extends(GameWF_View, a),
                    GameWF_View.prototype.onUpdate = function () {

                    }, GameWF_View.prototype.nextLevel = function () {
                        platform.getInstance().showInterstitial(() => {
                            GameManager.default.Instance.CreatNextGameScene();
                            GlodeClass.GameWF.removeSelf();
                        });
                    }, GameWF_View.prototype.nextAdLevel = function () {
                        platform.getInstance().showReward(() => {
                            GameManager.default.Instance.CreatNextGameScene();
                            GlodeClass.GameWF.removeSelf();
                        });
                    }, GameWF_View.prototype.refUI = function () {
                        platform.getInstance().showInterstitial(() => {
                            GameManager.default.Instance.CreatGameScene();
                            GlodeClass.GameWF.removeSelf();
                        });
                    }, GameWF_View.prototype.goHome = function () {
                        platform.getInstance().showInterstitial(() => {
                            if (y.GameDefine.iswin) {
                                GameManager.default.Instance.CreatNextGameScene();
                            } else {
                                GameManager.default.Instance.CreatGameScene();
                            }

                            GlodeClass.GameWF.removeSelf();
                            // Laya.Scene.open("View/Main.scene", true, Laya.Handler.create(this, function () { }));
                        });
                    }, GameWF_View.prototype.onAwake = function () {
                        this.btn_next = this.owner.getChildByName("btn_next");
                        this.btn_refUI = this.owner.getChildByName("btn_refUI");
                        this.btn_home = this.owner.getChildByName("btn_home");
                        this.btn_adnext = this.owner.getChildByName("btn_adnext");

                        this.list_showList = this.owner.getChildByName("list_showList");
                        this.text_result = this.owner.getChildByName("text_result");
                        this.btn_next.on(Laya.Event.CLICK, this, this.nextLevel);
                        this.btn_refUI.on(Laya.Event.CLICK, this, this.refUI);
                        this.btn_home.on(Laya.Event.CLICK, this, this.goHome);
                        this.btn_adnext.on(Laya.Event.CLICK, this, this.nextAdLevel);
                    }, GameWF_View.prototype.onEnable = function () {
                        a.prototype.onEnable.call(this);
                        platform.getInstance().initList(this.list_showList);
                        this.btn_adnext.visible = this.btn_next.visible = this.btn_refUI.visible = false;
                        if (y.GameDefine.iswin) {
                            this.text_result.text = "Win";
                            this.btn_next.visible = true;
                        } else {
                            this.text_result.text = "Fail";
                            this.btn_adnext.visible = this.btn_refUI.visible = true;
                        }
                    }, GameWF_View;
            }(a("../ViewBase").default);
        g.default = t;
    }, {
        "../../Event/EventDef": 1,
        "../../Event/EventMgr": 2,
        "../../vivo/GameDefine": 30,
        "../ViewBase": 28,
        "../GameCore/GameManager": 17
    }],
    29: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = Laya.ClassUtils.regClass;
        !function (a) {
            !function (a) {
                var i = function (a) {
                    function LoadingUI() {
                        return a.call(this) || this;
                    }
                    return __extends(LoadingUI, a), LoadingUI.prototype.createChildren = function () {
                        a.prototype.createChildren.call(this), this.createView(LoadingUI.uiView);
                    }, LoadingUI.uiView = {
                        "x": 0,
                        "type": "View",
                        "selectedBox": 6,
                        "selecteID": 27,
                        "searchKey": "View",
                        "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                        "nodeParent": -1,
                        "maxID": 30,
                        "loadList3D": [
                        ],
                        "loadList": [
                            "Loading/loadingbg.png",
                            "Loading/loadingxiatiao.png",
                            "Loading/loadingshangtiao.png",
                            "Loading/ziyuanjiazaizhong.png"],
                        "label": "View",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 2,
                        "child": [
                            {
                                "x": 15,
                                "type": "Image",
                                "searchKey": "Image,bg",
                                "props": { "top": 0, "skin": "Loading/loadingbg.png", "right": 0, "name": "bg", "left": 0, "bottom": 0 },
                                "nodeParent": 2,
                                "label": "bg",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 29,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Clip",
                                "searchKey": "Clip,Bg",
                                "props": { "width": 750, "top": 0, "name": "Bg", "left": 0, "bottom": 0 },
                                "nodeParent": 2,
                                "label": "Bg",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 6,
                                "child": [
                                    {
                                        "x": 30,
                                        "type": "Clip",
                                        "searchKey": "Clip,BottomZone",
                                        "props": { "width": 750, "name": "BottomZone", "left": 0, "height": 570, "bottom": 100 },
                                        "nodeParent": 6,
                                        "label": "BottomZone",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 23,
                                        "child": [
                                            {
                                                "x": 45,
                                                "type": "Clip",
                                                "searchKey": "Clip,processBarBg",
                                                "props": { "y": 463, "x": 376, "width": 615, "skin": "Loading/loadingxiatiao.png", "pivotY": 22, "pivotX": 308, "name": "processBarBg", "height": 44 },
                                                "nodeParent": 23,
                                                "label": "processBarBg",
                                                "isOpen": null,
                                                "isDirectory": true,
                                                "isAniNode": true,
                                                "hasChild": true,
                                                "compId": 8,
                                                "child": [
                                                    {
                                                        "type": "Clip",
                                                        "searchKey": "Clip,processBar",
                                                        "props": { "y": 22, "x": 10, "width": 594, "skin": "Loading/loadingshangtiao.png", "sizeGrid": "9,22,7,19", "pivotY": 13, "name": "processBar", "left": 11, "height": 26, "bottom": 9 },
                                                        "nodeParent": 8,
                                                        "label": "processBar",
                                                        "isDirectory": false,
                                                        "isAniNode": true,
                                                        "hasChild": false,
                                                        "compId": 5,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite",
                                                        "props": { "y": 71, "x": 292, "texture": "Loading/ziyuanjiazaizhong.png", "pivotY": 12, "pivotX": 72 },
                                                        "nodeParent": 8,
                                                        "label": "Sprite",
                                                        "isDirectory": false,
                                                        "isAniNode": true,
                                                        "hasChild": false,
                                                        "compId": 10,
                                                        "child": [
                                                        ]
                                                    }]
                                            }]
                                    },
                                    {
                                        "x": 30,
                                        "type": "Label",
                                        "searchKey": "Label",
                                        "props": { "y": 249, "x": 375, "wordWrap": true, "width": 570, "valign": "middle", "text": "Waterpark: Slide Race", "strokeColor": "#000000", "stroke": 5, "pivotY": 110, "pivotX": 285, "height": 196, "fontSize": 80, "color": "#f6eeee", "bold": true, "align": "center" },
                                        "nodeParent": 6,
                                        "label": "Label",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 27,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 15,
                                "type": "Script",
                                "switchAble": true,
                                "source": "src/View/LoadingView/LoadingView.ts",
                                "searchKey": "Script,LoadingView",
                                "removeAble": true,
                                "props": { "y": 0, "x": 0, "runtime": "View/LoadingView/LoadingView.ts" },
                                "nodeParent": 2,
                                "label": "LoadingView",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 7,
                                "child": [
                                ]
                            }],
                        "animations": [
                            {
                                "nodes": [
                                ],
                                "name": "ani1",
                                "id": 1,
                                "frameRate": 24,
                                "action": 0
                            }]
                    }, LoadingUI;
                }(Laya.View);
                a.LoadingUI = i, n("ui.View.LoadingUI", i);
            }(a.View || (a.View = {}));
        }(g.ui || (g.ui = {}));
        !function (a) {
            !function (a) {
                var i = function (a) {
                    function GameWFUI() {
                        return a.call(this) || this;
                    }
                    return __extends(GameWFUI, a), GameWFUI.prototype.createChildren = function () {
                        a.prototype.createChildren.call(this), this.createView(GameWFUI.uiView);
                    }, GameWFUI.uiView = {
                        "x": 0,
                        "type": "View",
                        "selectedBox": 2,
                        "selecteID": 12,
                        "searchKey": "View",
                        "props": { "width": 750, "height": 1334 },
                        "nodeParent": -1,
                        "maxID": 15,
                        "label": "View",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 2,
                        "child": [
                            {
                                "x": 15,
                                "type": "Image",
                                "searchKey": "Image,btn_next",
                                "props": { "y": 930, "x": 264, "stateNum": "1", "skin": "qietu1/Medium btn3.png", "scaleY": 0.75, "scaleX": 0.75, "name": "btn_next" },
                                "nodeParent": 2,
                                "label": "btn_next",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 3,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Sprite",
                                "searchKey": "Sprite,btn_refUI",
                                "props": { "y": 930, "x": 136, "texture": "qietu1/Medium btn1111.png", "scaleY": 0.75, "scaleX": 0.75, "name": "btn_refUI" },
                                "nodeParent": 2,
                                "label": "btn_refUI",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 4,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Image",
                                "searchKey": "Image,btn_adnext",
                                "props": { "y": 930, "x": 412, "stateNum": "1", "skin": "qietu1/Mediumbtn5.png", "scaleY": 0.75, "scaleX": 0.75, "name": "btn_adnext" },
                                "nodeParent": 2,
                                "label": "btn_adnext",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 12,
                                "child": [
                                    {
                                        "x": 30,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 29.5, "x": 34, "texture": "qietu1/ad.png" },
                                        "nodeParent": 12,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 13,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 15,
                                "type": "List",
                                "searchKey": "List,list_showList",
                                "props": { "y": 339, "x": 15, "width": 800, "scaleY": 0.9, "scaleX": 0.9, "repeatY": 2, "repeatX": 2, "name": "list_showList", "height": 600 },
                                "nodeParent": 2,
                                "label": "list_showList",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 5,
                                "child": [
                                    {
                                        "type": "Box",
                                        "searchKey": "Box",
                                        "props": { "renderType": "render" },
                                        "nodeParent": 5,
                                        "label": "Box",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": false,
                                        "hasChild": true,
                                        "compId": 6,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,thumb",
                                                "props": { "width": 400, "name": "thumb", "height": 300 },
                                                "nodeParent": 6,
                                                "label": "thumb",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 7,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            },
                            {
                                "x": 15,
                                "type": "Script",
                                "switchAble": true,
                                "source": "src/View/GameWF/GameWF.ts",
                                "searchKey": "Script,GameWF",
                                "removeAble": true,
                                "props": { "y": 0, "x": 0, "runtime": "View/GameWF/GameWF.ts" },
                                "nodeParent": 2,
                                "label": "GameWF",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 9,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Label",
                                "searchKey": "Label",
                                "props": { "y": 159, "x": 0, "width": 750, "valign": "middle", "height": 116, "color": "#ffffff", "bgColor": "#000000", "alpha": 0.5, "align": "center" },
                                "nodeParent": 2,
                                "label": "Label",
                                "isOpen": true,
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 10,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Label",
                                "searchKey": "Label,text_result",
                                "props": { "y": 159, "x": 0, "width": 750, "valign": "middle", "text": "Win", "name": "text_result", "height": 116, "fontSize": 50, "color": "#ffffff", "align": "center" },
                                "nodeParent": 2,
                                "label": "text_result",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 14,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Sprite",
                                "searchKey": "Sprite,btn_home",
                                "props": { "y": 1035, "x": 270, "texture": "qietu1/Easy-1.png", "name": "btn_home" },
                                "nodeParent": 2,
                                "label": "btn_home",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ]
                            }],
                        "animations": [
                            {
                                "nodes": [
                                ],
                                "name": "ani1",
                                "id": 1,
                                "frameRate": 24,
                                "action": 0
                            }]
                    }, GameWFUI;
                }(Laya.View);
                a.GameWFUI = i, n("ui.View.GameWFUI", i);
            }(a.View || (a.View = {}));
        }(g.ui || (g.ui = {}));
    }, {}],
    30: [function (a, i, g) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var n = function () {
            function GameDefine() { }
            return GameDefine.getAppSetting = function () {
                var a = new XMLHttpRequest(), i = this;
                a.onreadystatechange = function () {
                    if (4 == a.readyState && a.status >= 200 && a.status < 400) {
                        var g = JSON.parse(a.responseText);
                        if (console.log("request response:", g), 1 == g.code) {
                            var n = g.setting;
                            n && void 0 !== n.AdAutoClickRate && (i.AdAutoClickRate = n.AdAutoClickRate, i.addHomeCnt = n.addHomeCnt,
                                i.interShowCnt = n.interShowCnt);
                        }
                    }
                };
                // a.open("POST", "https://www.webuzz.com.cn/wxsetting/navi", !0), a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                // a.send(JSON.stringify({
                //     appid: "vivoSSPK",
                //     version: "1.0"
                // }));
            },
                GameDefine.speedSmall = 8, GameDefine.speedBig = 12,
                GameDefine.speedUp = .3, GameDefine.isNotViedio = !0, GameDefine.isfirst = !0,
                GameDefine.iswin = !0, GameDefine.AdAutoClickRate = 0, GameDefine.addHomeCnt = 0,
                GameDefine.interShowCnt = 2, GameDefine.isNativeFisrt = !1, GameDefine.isShowSkin = !0,
                GameDefine.curIndex = 0, GameDefine;
        }();
        g.GameDefine = n;
    }, {}]
}, {}, [4]);