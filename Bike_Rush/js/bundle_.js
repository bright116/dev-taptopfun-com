class WebPlatform {
    constructor() {
        this.navigateActive = false;
        let canvas = document.getElementById("layaCanvas");
        canvas && canvas.addEventListener("mouseup", () => {
            if (this.navigateActive) {
                this.navigateActive = false;
                YYGSDK.navigate(this._screenName, this._buttonName, this._gameId);
            }
        });
        canvas && canvas.addEventListener("touchend", () => {
            if (this.navigateActive) {
                this.navigateActive = false;
                YYGSDK.navigate(this._screenName, this._buttonName, this._gameId);
            }
        });
        this._prompt = new Prompt();
        this._prompt.init();
    }
    navigate(screenName, buttonName, gameId) {
        if (this.navigateActive === false) {
            this.navigateActive = true;
            this._screenName = screenName;
            this._buttonName = buttonName;
            this._gameId = gameId;
        }
    }
    showInterstitial(complete) {
        let needresume = false
        if (!Laya.SoundManager.muted) {
            needresume = true;
            Laya.SoundManager.muted = true;
        }
        YYGSDK.showInterstitial(() => {
            if (needresume) {
                Laya.SoundManager.muted = false;
            }
            complete && complete();
        });
    }
    getStorageSync(key) {
        let v = Laya.LocalStorage.getItem(key);
        return JSON.parse(v);
    }
    setStorageSync(key, value) {
        return Laya.LocalStorage.setItem(key, JSON.stringify(value));
    }
    showReward(success, failure) {
        let needresume = false
        if (!Laya.SoundManager.muted) {
            needresume = true;
            Laya.SoundManager.muted = true;
        }
        YYGSDK.adsManager.request(YYG.TYPE.REWARD, YYG.EventHandler.create(this, () => {
            if (needresume) {
                Laya.SoundManager.muted = false;
            }
            success && success();
        }), YYG.EventHandler.create(this, (event) => {
            if (needresume) {
                Laya.SoundManager.muted = false;
            }
            if (failure) {
                failure();
            } else {
                if (event == YYG.Event.AD_SKIPPED) {
                    this._prompt.prompt("Failed to get the reward, please watch the ads to the end.")
                }
            }
        }));
    }

    prompt(txt) {
        this._prompt.prompt(txt)
    }

    getForgames() {
        let forgames = YYGSDK.forgames;
        forgames.sort(function(a, b) {
            return Math.random() - 0.5;
        });
        return forgames;
    }
    showLoading(title) {}
    hideLoading() {}
}

// class platform {
//     static _init_() {
//         this._platform = new WebPlatform();
//     }
//     static getInstance() {
//         if (!this._platform) {
//             this._init_();
//         }
//         return this._platform;
//     }
// }
// platform._platform = null;
// window["platform"] = platform;


class Prompt {
    init() {
        this.bgSprite = new Laya.Image("common/img_infoBase.png"),
            this.bgSprite.width = Laya.stage.width - 40,
            this.bgSprite.height = 30,
            this.bgSprite.anchorX = .5,
            this.bgSprite.anchorY = .5,
            this.bgSprite.x = Laya.stage.width / 2,
            this.bgSprite.y = Laya.stage.height / 3,
            this.textOffx = 30,
            this.textOffy = 15,

            this.tipText = new Laya.Label(),
            this.bgSprite.addChild(this.tipText),
            this.tipText.width = this.bgSprite.width - 2 * this.textOffx,
            this.tipText.fontSize = 28,
            this.tipText.align = "center",
            this.tipText.color = "#ffffff",
            this.tipText.wordWrap = true;
        this.tipText.y = this.textOffy,
            this.bgSprite.zOrder = 2e3,
            Laya.stage.addChild(this.bgSprite),
            this.timeLine = new Laya.TimeLine(),
            this.timeLine.addLabel("scale", 0).to(this.bgSprite, {
                scaleX: 1.2,
                scaleY: 1.2,
                alpha: 1
            }, 100, null, 0).addLabel("back", 0).to(this.bgSprite, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 100, null, 0).addLabel("show", 0).to(this.bgSprite, {
                alpha: 1
            }, 1e3, null, 0).addLabel("hide", 0).to(this.bgSprite, {
                alpha: 0
            }, 1e3, null, 0), this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete),
            this.mouseThrough = !0;
        this.onComplete();
    }

    onComplete() {
        this.bgSprite.alpha = 0;
        this.visible = !1, this.mouseThrough = !0;
    }
    removeRes() {
        this.timeLine.destroy();
    }

    prompt(e) {
        this.tipText.text = e, this.tipText.x = this.textOffx, this.bgSprite.height = 50 + this.textOffx,
            this.timeLine.play(0, !1), this.visible = !0;
    }
    resize() {
        this.bgSprite && (this.bgSprite.width = Laya.stage.width - 40, this.bgSprite.height = this.tipText.contextHeight + this.textOffx,
            this.bgSprite.x = Laya.stage.width / 2, this.bgSprite.y = Laya.stage.height / 8,
            this.tipText && (this.tipText.style.width = this.bgSprite.width - 2 * this.textOffx));
    }
}














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
        function a() {
            this.constructor = e;
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (a.prototype = i.prototype,
            new a());
    };
}();

! function() {
    function t(e, i, a) {
        function n(s, r) {
            if (!i[s]) {
                if (!e[s]) {
                    var h = "function" == typeof require && require;
                    if (!r && h) return h(s, !0);
                    if (o) return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l;
                }
                var d = i[s] = {
                    exports: {}
                };
                e[s][0].call(d.exports, function(t) {
                    var i = e[s][1][t];
                    return n(i || t);
                }, d, d.exports, t, e, i, a);
            }
            return i[s].exports;
        }
        for (var o = "function" == typeof require && require, s = 0; s < a.length; s++) n(a[s]);
        return n;
    }
    return t;
}()({
    1: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./scripts/views/ClearingView"),
            n = t("./scripts/uiComp/AppLite"),
            o = t("./scripts/uiComp/AppBanner"),
            s = t("./scripts/views/CollectView"),
            r = t("./scripts/views/skinView"),
            h = t("./scripts/views/GameView"),
            l = t("./scripts/views/HomeView"),
            d = t("./scripts/uiComp/WxgameList"),
            c = t("./scripts/views/LoginView"),
            u = t("./scripts/views/OverView"),
            p = t("./scripts/views/RankView"),
            f = t("./scripts/uiComp/Wxapp"),
            m = function() {
                function t() {}
                return t.init = function() {
                        var t = Laya.ClassUtils.regClass;
                        t("scripts/views/ClearingView.ts", a["default"]), t("scripts/uiComp/AppLite.ts", n["default"]),
                            t("scripts/uiComp/AppBanner.ts", o["default"]), t("scripts/views/CollectView.ts", s["default"]),
                            t("scripts/views/skinView.ts", r["default"]), t("scripts/views/GameView.ts", h["default"]),
                            t("scripts/views/HomeView.ts", l["default"]), t("scripts/uiComp/WxgameList.ts", d["default"]),
                            t("scripts/views/LoginView.ts", c["default"]), t("scripts/views/OverView.ts", u["default"]),
                            t("scripts/views/RankView.ts", p["default"]), t("scripts/uiComp/Wxapp.ts", f["default"]);
                    }, t.width = 750, t.height = 1334, t.scaleMode = "showall", t.screenMode = "none",
                    t.alignV = "middle", t.alignH = "center", t.startScene = "views/login.scene", t.sceneRoot = "",
                    t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t;
            }();
        i["default"] = m, m.init();
    }, {
        "./scripts/uiComp/AppBanner": 23,
        "./scripts/uiComp/AppLite": 25,
        "./scripts/uiComp/Wxapp": 27,
        "./scripts/uiComp/WxgameList": 28,
        "./scripts/views/ClearingView": 31,
        "./scripts/views/CollectView": 32,
        "./scripts/views/GameView": 33,
        "./scripts/views/HomeView": 34,
        "./scripts/views/LoginView": 35,
        "./scripts/views/OverView": 36,
        "./scripts/views/RankView": 37,
        "./scripts/views/skinView": 38
    }],
    2: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameConfig"),
            n = t("./scripts/LayaSample"),
            o = function() {
                function t() {
                    // var t = Laya.Browser.height / Laya.Browser.width, e = Laya.Browser.onMobile ? t * a["default"].width : a["default"].height;
                    // n["default"].screen.realPxRatio = e / Laya.Browser.clientHeight, n["default"].screen.allScreen = t > 17 / 9 ? !0 : !1, 
                    // n["default"].screen.offsetTop = (e - a["default"].height) / 2, 
                    // window.Laya3D ? Laya3D.init(a["default"].width, e) : Laya.init(a["default"].width, a["default"].height, Laya.WebGL), 

                    // var deviceAspectRatio = Laya.Browser.height / Laya.Browser.width,
                    //     _height = Laya.Browser.onMobile ? deviceAspectRatio * a["default"].width : a["default"].height;
                    Laya3D.init(a["default"].width, a["default"].height);
                    Laya.stage.scaleMode = "showall";
                    Laya.stage.screenMode = "none";
                    Laya.stage.alignV = "middle",
                        Laya.stage.alignH = "center",
                        Laya.stage.useRetinalCanvas = false, Laya.URL.exportSceneToJson = a["default"].exportSceneToJson,
                        (a["default"].debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                        a["default"].physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                        a["default"].stat && Laya.Stat.show(),
                        // Laya.alertGlobalError = !0, 
                        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                }
                return t.prototype.onVersionLoaded = function() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }, t.prototype.onConfigLoaded = function() {
                    a["default"].startScene && Laya.Scene.open(a["default"].startScene);
                }, t;
            }();
        new o();
    }, {
        "./GameConfig": 1,
        "./scripts/LayaSample": 3
    }],
    3: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./Utils"),
            n = t("./manager/StorageMgr"),
            o = t("./manager/SoundMgr"),
            s = t("./manager/NetMgr"),
            r = t("./manager/WxMgr"),
            h = t("./manager/ConfigMgr"),
            l = t("./platforms/WxAd"),
            d = t("./manager/GameMgr"),
            c = t("./manager/TweenMgr"),
            u = t("./plug/ModelCreator"),
            p = function() {
                function t() {}
                return Object.defineProperty(t, "gameMgr", {
                        get: function() {
                            return this._gameMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "glEvent", {
                        get: function() {
                            return this._eventListener;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "soundMgr", {
                        get: function() {
                            return void 0 === this._soundMgr && (this._soundMgr = new o["default"]()), this._soundMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "storageMgr", {
                        get: function() {
                            return void 0 === this._storageMge && (this._storageMge = new n["default"]()), this._storageMge;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "netMgr", {
                        get: function() {
                            return this._netMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "commonData", {
                        get: function() {
                            return this.storageMgr.commonData;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "utils", {
                        get: function() {
                            return this._utils;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "tweenMgr", {
                        get: function() {
                            return this._tweenMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "configMgr", {
                        get: function() {
                            return void 0 === this._configMgr && (this._configMgr = new h["default"]()), this._configMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "adMgr", {
                        get: function() {
                            return void 0 === this._adMgr && (this._adMgr = this.wxAd), this._adMgr;
                        },
                        set: function(t) {
                            this._adMgr = t;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "wxMgr", {
                        get: function() {
                            return void 0 === this._wxMgr && (this._wxMgr = new r["default"]()), this._wxMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "wxAd", {
                        get: function() {
                            return void 0 === this._wxAd && (this._wxAd = new l["default"]()), this._wxAd;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "modelCreator", {
                        get: function() {
                            return void 0 === this._modelCreator && (this._modelCreator = new u["default"]()),
                                this._modelCreator;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t._eventListener = new Laya.EventDispatcher(), t._gameMgr = new d["default"](),
                    t._netMgr = new s["default"](), t._utils = new a["default"](), t._tweenMgr = new c["default"](),
                    t.screen = {
                        realPxRatio: 0,
                        offsetTop: 0,
                        allScreen: !1
                    }, t;
            }();
        i["default"] = p;
    }, {
        "./Utils": 4,
        "./manager/ConfigMgr": 11,
        "./manager/GameMgr": 12,
        "./manager/NetMgr": 13,
        "./manager/SoundMgr": 14,
        "./manager/StorageMgr": 15,
        "./manager/TweenMgr": 16,
        "./manager/WxMgr": 17,
        "./platforms/WxAd": 19,
        "./plug/ModelCreator": 22
    }],
    4: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./LayaSample"),
            n = function() {
                function t() {}
                return t.prototype.addClickEvent = function(t, e, i, n) {
                    if (t.offAllCaller(e), t instanceof Laya.Button) {
                        var o = function(t) {
                            t.stopPropagation(), i && i.call(e, t), a["default"].soundMgr.play("click");
                        };
                        t.on(Laya.Event.CLICK, e, o);
                    } else {
                        var s = 60,
                            r = 1,
                            h = (t.anchorX, t.anchorY, t.x * r, t.y * r, t.scaleX * r),
                            l = t.scaleX * r,
                            d = .9 * r,
                            c = function(e) {
                                e.stopPropagation(), Laya.Tween.to(t, {
                                    scaleX: d,
                                    scaleY: d
                                }, s);
                            };
                        t.on(Laya.Event.MOUSE_DOWN, e, c);
                        var u = function(o) {
                            o.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: h,
                                scaleY: l
                            }, s), i && i.call(e, o), (0 === n || n) && a["default"].soundMgr.play(n);
                        };
                        t.on(Laya.Event.MOUSE_UP, e, u);
                        var p = function(e) {
                            e.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: h,
                                scaleY: l
                            }, s);
                        };
                        t.on(Laya.Event.MOUSE_OUT, e, p);
                    }
                }, t.prototype.getRGB = function(t) {
                    var e = [],
                        i = [],
                        a = t.replace(/#/, "");
                    if (3 == a.length) {
                        for (var n = [], o = 0; 3 > o; o++) n.push(a.charAt(o) + a.charAt(o));
                        a = n.join("");
                    }
                    for (var o = 0; 3 > o; o++) e[o] = "0x" + a.substr(2 * o, 2), i.push(parseInt(e[o]));
                    return new Laya.Vector3(i[0] / 255, i[1] / 255, i[2] / 255);
                }, t.prototype.getRGBA = function(t, e) {
                    var i = 0 == e && e ? e : 1,
                        a = [],
                        n = [],
                        o = t.replace(/#/, "");
                    if (3 == o.length) {
                        for (var s = [], r = 0; 3 > r; r++) s.push(o.charAt(r) + o.charAt(r));
                        o = s.join("");
                    }
                    for (var r = 0; 3 > r; r++) a[r] = "0x" + o.substr(2 * r, 2), n.push(parseInt(a[r]));
                    return new Laya.Vector4(n[0] / 255, n[1] / 255, n[2] / 255, i);
                }, t.prototype.tweenShake = function(t, e) {
                    var i = new Laya.TimeLine(),
                        a = t.pivotX;
                    t.pivotX = t.width / 2, i.addLabel("shake1", 0).to(t, {
                        rotation: t.rotation + 5
                    }, 50, null, 0).addLabel("shake2", 0).to(t, {
                        rotation: t.rotation - 6
                    }, 50, null, 0).addLabel("shake3", 0).to(t, {
                        rotation: t.rotation - 13
                    }, 50, null, 0).addLabel("shake4", 0).to(t, {
                        rotation: t.rotation + 3
                    }, 50, null, 0).addLabel("shake5", 0).to(t, {
                        rotation: t.rotation - 5
                    }, 50, null, 0).addLabel("shake6", 0).to(t, {
                        rotation: t.rotation + 2
                    }, 50, null, 0).addLabel("shake7", 0).to(t, {
                        rotation: t.rotation - 8
                    }, 50, null, 0).addLabel("shake8", 0).to(t, {
                        rotation: t.rotation + 3
                    }, 50, null, 0).addLabel("shake9", 0).to(t, {
                        rotation: 0
                    }, 50, null, 0), e ? Laya.timer.once(500, this, function() {
                        i.destroy(), t.rotation = 0, t.pivotX = a;
                    }) : i.on(Laya.Event.COMPLETE, this, function() {
                        i.destroy(), t.rotation = 0, t.pivotX = a;
                    }), i.play(0, !0);
                }, t.prototype.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var i = Math.max(t.length, e.length); t.length < i;) t.push("0");
                    for (; e.length < i;) e.push("0");
                    for (var a = 0; i > a; a++) {
                        var n = parseInt(t[a]),
                            o = parseInt(e[a]);
                        if (n > o) return 1;
                        if (o > n) return -1;
                    }
                    return 0;
                }, t.prototype.setMaterial = function(t) {}, t.prototype.format = function(t) {
                    function e(t) {
                        return 10 > t ? "0" + t : t;
                    }
                    var i = new Date(t),
                        a = i.getFullYear(),
                        n = i.getMonth() + 1,
                        o = i.getDate();
                    return a + "-" + e(n) + "-" + e(o);
                }, t.prototype.loadSubpackage = function(t, e, i) {

                }, t.prototype.getRandoms = function(t, e, i) {
                    void 0 === i && (i = 0);
                    for (var a = [], n = [], o = i; e > o; o++) a.push(o);
                    a = a.sort(function() {
                        return Math.random() - Math.random();
                    });
                    for (var o = 0; t > o; o++) n.push(a[o]);
                    return n;
                }, t;
            }();
        i["default"] = n;
    }, {
        "./LayaSample": 3
    }],
    5: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.originMaxSpeed = .35, e.maxSpeed = .35, e.speedUpFactor = 1.28, e.jumpFactor = .1,
                        e.gravity = -.25, e.accelerate = .02, e.acceTimer = 0, e.deceTimer = 1, e.speedZ = 0,
                        e.speedY = 0, e.currentHeight = .689, e.rotateTimer = 0, e.rotateAngle = 0, e.rotateStatus = 0,
                        e.originAngle = 0, e.isSpeedUp = !1, e.speedLevel = 0, e.canMoveLR = !0, e;
                }
                return __extends(e, t), e.prototype.init = function() {
                    Laya.timer.clearAll(this), this.speedZ = 0, this.speedY = 0, this.acceTimer = 0,
                        this.deceTimer = 1, this.fixData(), this.isJump = !1, this.isSpeedUp = !1, this.isRotate = !1,
                        this.anim.speed = 1, this.anim.play("idle"), this.bike.transform.position = this.originPos.clone(),
                        this.bike.transform.rotationEuler = new Laya.Vector3(), this.trail.active = !0,
                        this.isHit = !1;
                }, e.prototype.onAwake = function() {
                    this.bike = this.owner, this.originPos = this.bike.transform.position.clone(), this.move = new Laya.Vector3();
                    var t = this.owner.getChildByName("Effect");
                    this.trail = t.getChildByName("FX_BikeTrails"), this.anim = this.owner.getChildByName("Role").getComponent(Laya.Animator);
                }, e.prototype.onUpdate = function() {
                    !this.isHit && a["default"].gameMgr.isPlay && (this.moveUpdate(), this.moveLR());
                }, e.prototype.moveUpdate = function() {
                    0 != this.deceTimer && (this.deceTimer = 0, this.anim.play("start"), this.anim.crossFade("run", 1)),
                        this.acceTimer += Laya.timer.delta, this.speedZ += this.accelerate * (this.acceTimer / 1e3),
                        this.speedZ > this.maxSpeed && (this.speedZ = this.maxSpeed), this.move.setValue(0, this.speedY, this.speedZ),
                        this.bike.transform.translate(this.move, !1);
                }, e.prototype.rotate = function() {
                    if (a["default"].gameMgr.isPressed && this.isJump && this.canRotate) {
                        Laya.timer.clear(this, this.rotateSlowDownFrame), this.rotateTimer += Laya.timer.delta,
                            this.isRotate = !0;
                        var t = this.bike.transform.rotationEuler;
                        t.x -= 6, this.bike.transform.rotationEuler = t, this.anim.speed = 1, this.rotateAngle += 6,
                            this.checkAngle();
                    } else this.isRotate && (this.isRotate = !1, this.rotateSlowDown());
                }, e.prototype.rotateSlowDown = function() {
                    this.rotateSlowTimer = 0, this.rotateTimer > 1e3 && (this.rotateTimer = 1e3), this.rotateTimer *= .5,
                        Laya.timer.frameLoop(1, this, this.rotateSlowDownFrame);
                }, e.prototype.rotateSlowDownFrame = function() {
                    this.rotateSlowTimer += Laya.timer.delta;
                    var t = this.rotateSlowTimer / this.rotateTimer,
                        e = 6 * (1 - t);
                    this.anim.speed = .9 * (1 - t) + .1;
                    var i = this.bike.transform.rotationEuler;
                    i.x -= e, this.rotateAngle += e, this.checkAngle(), this.bike.transform.rotationEuler = i,
                        t > 1 && (Laya.timer.clear(this, this.rotateSlowDownFrame), this.rotateTimer = 0);
                }, e.prototype.checkAngle = function() {
                    this.rotateAngle > 300 && this.rotateAngle < 660 && 0 == this.rotateStatus ? (this.anim.play("turn02"),
                        this.rotateStatus = 1) : this.rotateAngle > 660 && this.rotateAngle < 1020 && 1 == this.rotateStatus ? (this.anim.play("turn03"),
                        this.rotateStatus = 2) : this.rotateAngle > 1020 && 2 == this.rotateStatus && (this.rotateStatus = 3);
                }, e.prototype.jump = function(t, e) {
                    void 0 === e && (e = !0), Laya.timer.clear(this, this.declineDown), this.rotateStatus = 0,
                        this.fixData(), this.canRotate = e || this.speedLevel > 0, this.anim.play("turn01"),
                        this.trail.active = !1, this.isJump = !0, this.originAngle = this.bike.transform.rotationEuler.x,
                        this.speedZ < .1 && (this.speedZ = .1), this.speedY = t * (this.speedZ / this.maxSpeed) + this.speedLevel * this.jumpFactor,
                        this.slowTimer = 0, Laya.timer.frameLoop(1, this, this.slowDown);
                }, e.prototype.slowDown = function() {
                    this.slowTimer += Laya.timer.delta, this.speedY -= this.accelerate * (this.slowTimer / 1e3),
                        this.speedY < 0 && (this.speedY = 0, Laya.timer.clear(this, this.slowDown), this.decline());
                }, e.prototype.decline = function() {
                    this.declineTimer = 0, Laya.timer.clear(this, this.declineDown), Laya.timer.frameLoop(1, this, this.declineDown);
                }, e.prototype.declineDown = function() {
                    if (this.declineTimer += Laya.timer.delta, this.speedY = this.gravity * this.declineTimer / 1e3,
                        this.bike.transform.position.y < this.currentHeight) {
                        this.fixData(), Laya.timer.clear(this, this.rotateSlowDownFrame), this.isJump = !1,
                            this.anim.speed = 1, this.anim.crossFade("hit_the_ground", .5), this.trail.active = !0,
                            this.speedY = 0;
                        var t = this.bike.transform.position;
                        if (t.y = this.currentHeight, this.bike.transform.position = t, Laya.timer.clear(this, this.declineDown),
                            this.currentAngle = Math.abs(this.bike.transform.rotationEuler.x) % 360, this.currentAngle > 60 && this.currentAngle <= 300) return void this.hit();
                        if (this.rotateStatus > 0)
                            for (var e = 0; e < this.rotateStatus; e++) this.speedUp();
                        else this.anim.crossFade("run", .5);
                        this.fixAngle();
                    }
                }, e.prototype.fixAngle = function() {
                    function t() {
                        e += Laya.timer.delta;
                        var s = e / (200 * i);
                        a.x = n + (o - n) * s, this.owner.transform.rotationEuler = a, s > 1 && (Laya.timer.clear(this, t),
                            this.owner.transform.rotationEuler = new Laya.Vector3(), this.isFixing = !1);
                    }
                    this.deceTimer = 0, this.isFixing = !0;
                    var e = 0,
                        i = this.speedZ,
                        a = this.bike.transform.rotationEuler,
                        n = -a.x;
                    n > 360 && (n %= 360);
                    var o = n > 270 ? 360 : 0;
                    Laya.timer.frameLoop(1, this, t);
                }, e.prototype.hit = function() {
                    if (!this.isHit) {
                        Laya.Tween.clearAll(this.bike.transform.position);
                        var t = this.bike.transform.rotationEuler.x % 360;
                        this.bike.transform.rotationEuler = new Laya.Vector3(), t > -240 && -30 > t ? this.anim.play("die02") : this.anim.play("die01"),
                            Laya.timer.clearAll(this), this.fixData(), this.isHit = !0;
                    }
                }, e.prototype.speedUp = function() {
                    this.speedLevel >= 3 ? this.speedLevel = 3 : (this.speedLevel++, this.acceTimer = 0,
                        this.isSpeedUp = !0, this.maxSpeed *= this.speedUpFactor, this.speedUpTotalTime = 1e3);
                    var t = Math.ceil(100 * Math.random() % 3);
                    this.anim.crossFade("accelerate0" + t, .5), this.speedUpTimer = 0, Laya.timer.clear(this, this.speedProgress),
                        Laya.timer.frameLoop(1, this, this.speedProgress);
                }, e.prototype.speedProgress = function() {
                    this.speedUpTimer += Laya.timer.delta;
                    var t = this.speedUpTimer / this.speedUpTotalTime;
                    t > 1 && (this.isJump || this.anim.crossFade("run", .5), this.speedLevel = 0, Laya.Tween.to(this, {
                        maxSpeed: this.originMaxSpeed
                    }, 300), Laya.timer.clear(this, this.speedProgress), this.isSpeedUp = !1);
                }, Object.defineProperty(e.prototype, "getBike", {
                    get: function() {
                        return this.bike;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getChild = function(t) {
                    return this.bike.getChildByName(t);
                }, e.prototype.fixData = function() {
                    this.rotateAngle = 0, this.anim.speed = 1, this.isRotate = !1;
                }, e.prototype.goonInit = function(t) {
                    Laya.timer.clearAll(this), this.speedZ = 0, this.speedY = 0, this.acceTimer = 0,
                        this.deceTimer = 1, this.fixData(), this.isJump = !1, this.isSpeedUp = !1, this.isRotate = !1,
                        this.anim.speed = 1, this.anim.play("idle");
                    var e = this.bike.transform.position;
                    e.x = Math.floor(100 * Math.random() % 5) - 2, e.y = this.currentHeight, e.z = t,
                        this.bike.transform.position = e, this.bike.transform.rotationEuler = new Laya.Vector3(),
                        this.trail.active = !0, this.isHit = !1;
                }, e.prototype.moveLR = function() {}, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    6: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.canChecks = [], e.isTouchs = [], e;
                }
                return __extends(e, t), e.prototype.init = function(t) {
                    this.width = 1, this.distance = 5, this.distance += 1.5, this.targets = t, this.canChecks = [];
                    for (var e = 0; e < this.targets.length; e++) this.canChecks.push(!0);
                }, e.prototype.onUpdate = function() {
                    if (!a["default"].gameMgr.isOver)
                        for (var t = 0; t < this.targets.length; t++) {
                            var e = this.targets[t];
                            if (e && e.getBike.transform.position.y < 3) {
                                var i = e.getChild("TargetPos").transform.position,
                                    n = this.owner,
                                    o = n.transform.position;
                                i.z > o.z && i.z < o.z + this.distance ? (this.isTouchs[t] = i.x > o.x - this.width && i.x < o.x + this.width,
                                    this.isTouchs[t] && this.canChecks[t] && (this.canChecks[t] = !1, e.speedUp())) : -1 != e.owner.name.indexOf("Role") && i.z > o.z + 1e3 && (Laya.Pool.recover("arrow", this.owner),
                                    this.owner.parent.removeChild(this.owner));
                            }
                        }
                }, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    7: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isHits = [], e.firstChecks = [], e.isLimitLefts = [], e;
                }
                return __extends(e, t), e.prototype.init = function(t) {
                    this.width = .75, this.height = .7, this.distance = .7, this.limitWidth = this.width + .2,
                        this.distance += 1.5, this.targets = t, this.firstChecks = [], this.isHits = [],
                        this.isLimitLefts = [];
                    for (var e = 0; e < this.targets.length; e++) this.firstChecks.push(!0), this.isHits.push(!1),
                        this.isLimitLefts.push(!1);
                }, e.prototype.onUpdate = function() {
                    if (!a["default"].gameMgr.isOver)
                        for (var t = 0; t < this.targets.length; t++) {
                            var e = this.targets[t],
                                i = e.getChild("TargetPos").transform.position,
                                n = this.owner,
                                o = n.transform.position;
                            if (e && e.getBike.transform.position.y < this.height + .7 && i.z < o.z + this.distance) {
                                if (i.z > o.z) {
                                    if (this.firstChecks[t]) this.firstChecks[t] = !1, this.isHits[t] = i.x > o.x - this.width && i.x < o.x + this.width,
                                        this.isLimitLefts[t] = i.x < o.x - this.width, this.isHits[t] && e.hit();
                                    else if (!this.isHits[t])
                                        if (this.isLimitLefts[t]) {
                                            if (i.x > o.x - this.limitWidth) {
                                                var s = e.getBike.transform.position.clone();
                                                s.x = o.x - this.limitWidth, e.getBike.transform.position = s;
                                            }
                                        } else if (i.x < o.x + this.limitWidth) {
                                        var s = e.getBike.transform.position.clone();
                                        s.x = o.x + this.limitWidth, e.getBike.transform.position = s;
                                    } -
                                    1 != e.owner.name.indexOf("Role") && i.z > o.z + 1e3 && (Laya.Pool.recover("barrier", this.owner),
                                        this.owner.parent.removeChild(this.owner));
                                }
                            } else this.firstChecks[t] || (this.firstChecks[t] = !0, this.isHits[t] = !1, this.isLimitLefts[t] = !1);
                        }
                }, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    8: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.originMaxSpeed = .39, e.maxSpeed = .39, e.speedUpFactor = 1.3, e.jumpFactor = .1,
                        e.gravity = -.25, e.accelerate = .02, e.acceTimer = 0, e.deceTimer = 1, e.speedZ = 0,
                        e.speedY = 0, e.currentHeight = .689, e.rotateTimer = 0, e.rotateAngle = 0, e.rotateStatus = 0,
                        e.cheerCount = 0, e.originAngle = 0, e.isSpeedUp = !1, e.speedLevel = 0,

                        e;
                }
                return __extends(e, t), e.prototype.init = function() {
                        this.hitName = "";
                        Laya.timer.clearAll(this), this.speedZ = 0, this.speedY = 0, this.acceTimer = 0,
                            this.deceTimer = 1, this.maxSpeed = .39, this.fixData(), this.isJump = !1, this.isSpeedUp = !1,
                            this.isRotate = !1, this.anim.speed = 1, this.anim.play("idle"), this.bike.transform.position = this.originPos.clone(),
                            this.bike.transform.rotationEuler = new Laya.Vector3(), this.trail.active = !0;
                    }, e.prototype.onAwake = function() {
                        this.bike = this.owner, this.originPos = this.bike.transform.position.clone(), this.move = new Laya.Vector3();
                        var t = this.owner.getChildByName("Effect");
                        this.trail = t.getChildByName("FX_BikeTrails"), this.particleAcce1 = t.getChildByName("FX_Bikelv1"),
                            this.particleAcce2 = t.getChildByName("FX_Bikelv2"), this.particleAcce3 = t.getChildByName("FX_Bikelv3"),
                            this.setParticleAcce(0, !1), this.wind1 = this.particleAcce2.getChildAt(2).particleSystem,
                            this.wind2 = this.particleAcce3.getChildAt(2).particleSystem, this.wind1.stop(),
                            this.wind2.stop(), this.anim = this.owner.getChildByName("Role").getComponent(Laya.Animator);
                    }, e.prototype.onUpdate = function() {
                        if (!a["default"].gameMgr.isOver && a["default"].gameMgr.isPlay) {
                            if (this.moveUpdate(), this.rotate(), this.checkAi(), this.wind1.isPlaying) {
                                var t = this.particleAcce2.getChildAt(2),
                                    e = t.transform.rotationEuler;
                                e.setValue(190, 0, 0), t.transform.rotationEuler = e;
                            }
                            if (this.wind2.isPlaying) {
                                var t = this.particleAcce3.getChildAt(2),
                                    e = t.transform.rotationEuler;
                                e.setValue(190, 0, 0), t.transform.rotationEuler = e;
                            }
                        }
                    }, e.prototype.moveUpdate = function() {
                        a["default"].gameMgr.isPressed || this.isSpeedUp ? (0 != this.deceTimer && (this.deceTimer = 0,
                                this.anim.play("start"), this.anim.crossFade("run", 1), a["default"].soundMgr.play("ride")),
                            this.acceTimer += Laya.timer.delta, this.speedZ += this.accelerate * (this.acceTimer / 1e3),
                            this.speedZ > this.maxSpeed && (this.speedZ = this.maxSpeed)) : this.speedZ > 0 && !this.isJump && (0 != this.acceTimer && (this.acceTimer = 0),
                            this.deceTimer += Laya.timer.delta, this.speedZ -= this.accelerate * (this.deceTimer / 1e3),
                            this.speedZ < 0 && (this.speedZ = 0, this.setParticleAcce(this.speedLevel, !1),
                                this.anim.play("end"), a["default"].soundMgr.stop("ride"))), a["default"].glEvent.event("update_speed_event", {
                            speed: this.speedZ,
                            maxSpeed: this.maxSpeed,
                            level: this.speedLevel
                        }), this.move.setValue(0, this.speedY, this.speedZ), this.bike.transform.translate(this.move, !1);
                    }, e.prototype.setParticleAcce = function(t, e) {
                        if (e) switch (this.setWindEmission(t), t) {
                            case 1:
                                for (var i = 0; 2 > i; i++) {
                                    var a = this.particleAcce1.getChildAt(i).particleSystem;
                                    a && a.play();
                                }
                                break;

                            case 2:
                                this.wind2.stop();
                                for (var i = 0; 3 > i; i++) {
                                    var n = this.particleAcce2.getChildAt(i).particleSystem;
                                    n && n.play();
                                }
                                break;

                            case 3:
                                this.wind1.stop();
                                for (var i = 0; 3 > i; i++) {
                                    var o = this.particleAcce3.getChildAt(i).particleSystem;
                                    o && o.play();
                                }
                        } else
                            for (var i = 0; 2 > i; i++) {
                                var a = this.particleAcce1.getChildAt(i).particleSystem,
                                    n = this.particleAcce2.getChildAt(i).particleSystem,
                                    o = this.particleAcce3.getChildAt(i).particleSystem;
                                a && a.stop(), n && n.stop(), o && o.stop();
                            }
                    }, e.prototype.setWindEmission = function(t) {
                        function e(t) {
                            a += Laya.timer.delta;
                            var i = a / (o / 3),
                                s = n * i;
                            s > n && (s = n), t.emission.emissionRate = s, (i > 1 || s == n) && Laya.timer.clear(this, e);
                        }

                        function i(t) {
                            a += Laya.timer.delta;
                            var e = a / (o / 3),
                                s = n * (1 - e);
                            0 > s && (s = 0), t.emission.emissionRate = s, (e > 1 || 0 == s) && Laya.timer.clear(this, i);
                        }
                        var a = 0,
                            n = 0,
                            o = 1e3;
                        t > 1 && (2 == t ? (n = 300, Laya.timer.frameLoop(1, this, e, [this.wind1]), Laya.timer.once(o / 3 * 2, this, function() {
                            Laya.timer.clear(this, e), a = 0, Laya.timer.frameLoop(1, this, i, [this.wind1]);
                        })) : (n = 400, Laya.timer.frameLoop(1, this, e, [this.wind2]), Laya.timer.once(o / 3 * 2, this, function() {
                            Laya.timer.clear(this, e), a = 0, Laya.timer.frameLoop(1, this, i, [this.wind2]);
                        })));
                    }, e.prototype.rotate = function() {
                        if (a["default"].gameMgr.isPressed && this.isJump && this.canRotate) {
                            Laya.timer.clear(this, this.rotateSlowDownFrame), this.rotateTimer += Laya.timer.delta,
                                this.isRotate = !0;
                            var t = this.bike.transform.rotationEuler;
                            t.x -= 6, this.bike.transform.rotationEuler = t, this.anim.speed = 1, this.rotateAngle += 6,
                                this.checkAngle();
                        } else this.isRotate && (this.isRotate = !1, this.rotateSlowDown());
                    }, e.prototype.rotateSlowDown = function() {
                        this.rotateSlowTimer = 0, this.rotateTimer > 1e3 && (this.rotateTimer = 1e3), this.rotateTimer *= .5,
                            Laya.timer.frameLoop(1, this, this.rotateSlowDownFrame);
                    }, e.prototype.rotateSlowDownFrame = function() {
                        this.rotateSlowTimer += Laya.timer.delta;
                        var t = this.rotateSlowTimer / this.rotateTimer,
                            e = 6 * (1 - t);
                        this.anim.speed = .9 * (1 - t) + .1;
                        var i = this.bike.transform.rotationEuler;
                        i.x -= e, this.rotateAngle += e, this.checkAngle(), this.bike.transform.rotationEuler = i,
                            t > 1 && (Laya.timer.clear(this, this.rotateSlowDownFrame), this.rotateTimer = 0);
                    }, e.prototype.checkAngle = function() {
                        this.rotateAngle > 300 && this.rotateAngle < 660 && 0 == this.rotateStatus ? (this.anim.play("turn02"),
                            this.rotateStatus = 1, a["default"].glEvent.event("circle_count_event", {
                                circleNum: this.rotateStatus
                            }), a["default"].commonData.needShowGuide && (this.canRotate = !1), this.cheerSound()) : this.rotateAngle > 660 && this.rotateAngle < 1020 && 1 == this.rotateStatus ? (this.rotateStatus = 2,
                            a["default"].glEvent.event("circle_count_event", {
                                circleNum: this.rotateStatus
                            })) : this.rotateAngle > 700 && 2 == this.rotateStatus ? (this.anim.play("turn03"),
                            this.rotateStatus = 3, this.cheerSound()) : this.rotateAngle > 1020 && 3 == this.rotateStatus && (this.rotateStatus = 4,
                            a["default"].glEvent.event("circle_count_event", {
                                circleNum: this.rotateStatus - 1
                            }), this.cheerSound());
                    }, e.prototype.cheerSound = function() {
                        function t() {
                            e += Laya.timer.delta, e > 2e3 && (Laya.timer.clear(this, t), this.cheerCount = 0);
                        }
                        this.cheerCount++, this.cheerCount > 5 && (this.cheerCount = 5), a["default"].soundMgr.play("cheer_" + this.cheerCount),
                            Laya.timer.clear(this, t);
                        var e = 0;
                        Laya.timer.frameLoop(1, this, t);
                    }, e.prototype.jump = function(t, e) {
                        void 0 === e && (e = !0), a["default"].soundMgr.stop("ride"), a["default"].soundMgr.play("jump"),
                            Laya.timer.clear(this, this.declineDown), this.rotateStatus = 0, this.fixData(),
                            this.canRotate = e || this.speedLevel > 0, this.anim.play("turn01"), this.setParticleAcce(this.speedLevel, !1),
                            this.trail.active = !1, this.isJump = !0, this.originAngle = this.bike.transform.rotationEuler.x,
                            this.speedZ < .1 && (this.speedZ = .1), this.speedY = t * (this.speedZ / this.maxSpeed) + this.speedLevel * this.jumpFactor,
                            this.slowTimer = 0, Laya.timer.frameLoop(1, this, this.slowDown);
                    }, e.prototype.slowDown = function() {
                        this.slowTimer += Laya.timer.delta, this.speedY -= this.accelerate * (this.slowTimer / 1e3),
                            this.speedY < 0 && (this.speedY = 0, Laya.timer.clear(this, this.slowDown), this.decline());
                    }, e.prototype.decline = function() {
                        this.declineTimer = 0, Laya.timer.clear(this, this.declineDown), Laya.timer.frameLoop(1, this, this.declineDown);
                    }, e.prototype.declineDown = function() {
                        if (this.declineTimer += Laya.timer.delta, this.speedY = this.gravity * this.declineTimer / 1e3,
                            this.bike.transform.position.y < this.currentHeight) {
                            a["default"].soundMgr.play("ground"), a["default"].soundMgr.play("ride"), a["default"].glEvent.event("circle_count_event", {
                                    circleNum: 0
                                }), this.fixData(), Laya.timer.clear(this, this.rotateSlowDownFrame), this.isJump = !1,
                                this.anim.speed = 1, this.anim.crossFade("hit_the_ground", .5), this.trail.active = !0,
                                this.speedY = 0;
                            var t = this.bike.transform.position;
                            if (t.y = this.currentHeight, this.bike.transform.position = t, Laya.timer.clear(this, this.declineDown),
                                this.currentAngle = Math.abs(this.bike.transform.rotationEuler.x) % 360, this.currentAngle > 60 && this.currentAngle <= 300) return console.log("AngleHit"),
                                void this.hit();
                            if (this.rotateStatus > 0)
                                for (var e = 0; e < this.rotateStatus; e++) this.speedUp();
                            else this.anim.crossFade("run", .5);
                            this.fixAngle();
                        }
                    }, e.prototype.fixAngle = function() {
                        function t() {
                            e += Laya.timer.delta;
                            var s = e / (200 * i);
                            a.x = n + (o - n) * s, this.owner.transform.rotationEuler = a, s > 1 && (Laya.timer.clear(this, t),
                                this.owner.transform.rotationEuler = new Laya.Vector3(), this.isFixing = !1);
                        }
                        this.deceTimer = 0, this.isFixing = !0;
                        var e = 0,
                            i = this.speedZ,
                            a = this.bike.transform.rotationEuler,
                            n = -a.x;
                        n > 360 && (n %= 360);
                        var o = n > 270 ? 360 : 0;
                        Laya.timer.frameLoop(1, this, t);
                    }, e.prototype.hit = function() {
                        a["default"].soundMgr.stop("ride"),
                            a["default"].soundMgr.play("hit");
                        var t = this.bike.transform.rotationEuler.x % 360;
                        this.bike.transform.rotationEuler = new Laya.Vector3();
                        var e = this.bike.transform.position;
                        e.y = this.currentHeight, this.bike.transform.position = e, t > -240 && -30 > t ? this.anim.play("die02") : this.anim.play("die01"),
                            this.setParticleAcce(0, !1), this.wind1.stop(), this.wind2.stop(), Laya.timer.clearAll(this),
                            this.fixData(), a["default"].glEvent.event("over_game_event");
                    }, e.prototype.speedUp = function() {
                        a["default"].wxMgr.playVibrateShort(), this.speedLevel >= 3 ? this.speedLevel = 3 : (this.speedLevel++,
                            this.acceTimer = 0, this.isSpeedUp = !0, this.maxSpeed *= this.speedUpFactor, this.speedUpTotalTime = 1e3);
                        var t = Math.ceil(100 * Math.random() % 3);
                        this.anim.crossFade("accelerate0" + t, .5), this.speedUpTimer = 0, Laya.timer.clear(this, this.speedProgress),
                            Laya.timer.frameLoop(1, this, this.speedProgress), this.setParticleAcce(0, !1),
                            this.setParticleAcce(this.speedLevel, !0);
                        var e = 1 == this.speedLevel ? "speed_up_1" : 2 == this.speedLevel ? "speed_up_2" : "speed_up_3";
                        a["default"].soundMgr.play(e);
                    }, e.prototype.speedProgress = function() {
                        this.speedUpTimer += Laya.timer.delta;
                        var t = this.speedUpTimer / this.speedUpTotalTime;
                        a["default"].glEvent.event("speed_up_event", {
                            progress: t,
                            level: this.speedLevel
                        }), t > 1 && (this.isJump || this.anim.crossFade("run", .5), this.setParticleAcce(0, !1),
                            this.wind1.stop(), this.wind2.stop(), a["default"].glEvent.event("speed_up_event", {
                                progress: 1,
                                level: 0
                            }), this.speedLevel = 0, Laya.Tween.to(this, {
                                maxSpeed: this.originMaxSpeed
                            }, 300), Laya.timer.clear(this, this.speedProgress), this.isSpeedUp = !1);
                    }, Object.defineProperty(e.prototype, "getBike", {
                        get: function() {
                            return this.bike;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getChild = function(t) {
                        return this.bike.getChildByName(t);
                    }, e.prototype.fixData = function() {
                        this.rotateAngle = 0, this.anim.speed = 1, this.isRotate = !1;
                    }, e.prototype.goonInit = function() {
                        Laya.timer.clearAll(this), this.speedZ = 0, this.speedY = 0, this.acceTimer = 0,
                            this.deceTimer = 1, this.fixData(), this.isJump = !1, this.isSpeedUp = !1, this.isRotate = !1,
                            this.anim.speed = 1, this.anim.play("idle");
                        var t = this.bike.transform.position;
                        t.x = 0, this.bike.transform.position = t, this.bike.transform.rotationEuler = new Laya.Vector3(),
                            this.trail.active = !0;
                    },
                    e.prototype.checkAi = function() {
                        var t = this,
                            e = a["default"].commonData.bikeComps,
                            i = new Laya.Vector3(),
                            n = 0;
                        e.forEach(function(e) {
                            -1 == e.owner.name.indexOf("Role") && (
                                Laya.Vector3.subtract(e.owner.transform.position, t.bike.transform.position, i),
                                n = Laya.Vector3.scalarLength(i),
                                .5 > n && (

                                    e.isHit || a["default"].soundMgr.play("hit"),
                                    e.hit()

                                    // t.hitName === e.owner.name || ( a["default"].soundMgr.play("hit"),t.hitName = e.owner.name )

                                ),
                                e.owner.transform.position.z - t.bike.transform.position.z > 120 ? e.goonInit(t.bike.transform.position.z - 50) : t.bike.transform.position.z - e.owner.transform.position.z > 120 ? e.goonInit(t.bike.transform.position.z + 80) : e.isHit && t.bike.transform.position.z - e.owner.transform.position.z > 50 && e.goonInit(t.bike.transform.position.z + 80)
                            );
                        });
                    }, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    9: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t),
                    e.prototype.init = function() {
                        this.camera.transform.position = new Laya.Vector3(-2.2, 3, -4.3),
                            this.camera.transform.rotationEuler = new Laya.Vector3(-18, -158.5, 0),
                            this.moveRotation = this.camera.transform.rotationEuler.clone(),
                            this.offset.setValue(-2.2, 2.311, -5.3),
                            this.camera.fieldOfView = 60;

                    }, e.prototype.onAwake = function() {
                        this.camera = this.owner,
                            this.camera.transform.position = new Laya.Vector3(-2.2, 3, -4.3),
                            this.camera.transform.rotationEuler = new Laya.Vector3(-18, -158.5, 0), this.offset = new Laya.Vector3(),
                            this.movePosition = new Laya.Vector3(0, 0, .1), this.moveRotation = this.camera.transform.rotationEuler.clone();
                        var t = Laya.stage.getChildAt(0);
                        this.target = t.getChildByName("Role"),
                            Laya.Vector3.subtract(this.camera.transform.position, this.target.transform.position, this.offset);

                    },



                    e.prototype.onLateUpdate = function() {
                        Laya.Vector3.add(this.offset, this.target.transform.position, this.movePosition),
                            Laya.Vector3.lerp(this.camera.transform.position, this.movePosition, .15, this.movePosition),
                            this.camera.transform.position = this.movePosition;
                    }, e.prototype.startAnim = function() {
                        var t = 800;
                        Laya.Tween.to(this.offset, {
                            x: -.6,
                            y: 2.911,
                            z: -4.6
                        }, t);
                        var e = Laya.Tween.to(this.moveRotation, {
                            x: -18,
                            y: -175,
                            z: 0
                        }, t);
                        e.update = new Laya.Handler(this, function() {
                            this.camera.transform.rotationEuler = this.moveRotation;
                        });
                    }, e.prototype.changeRole = function(t) {
                        a["default"].gameMgr.isPlay || (this.camera.transform.position = new Laya.Vector3(-2.2, 3, -4.3),
                                this.camera.transform.rotationEuler = new Laya.Vector3(-18, -158.5, 0)), this.offset = new Laya.Vector3(),
                            this.movePosition = new Laya.Vector3(0, 0, .1), this.moveRotation = this.camera.transform.rotationEuler.clone(),
                            this.target = t, Laya.Vector3.subtract(this.camera.transform.position, this.target.transform.position, this.offset);
                    }, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    10: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.firstChecks = [], e.isJumps = [], e.isLimitLefts = [], e.jumpeds = [],
                        e;
                }
                return __extends(e, t), e.prototype.init = function(t, e) {
                    switch (this.canRotate = !0, this.type = t, t) {
                        case "jp_low":
                            this.width = 1, this.height = .8, this.distance = 3, this.maxAngle = -15, this.canRotate = !1,
                                this.jumpForced = .03;
                            break;

                        case "jp_mid":
                            this.width = 1, this.height = 1.3, this.distance = 2.8, this.maxAngle = -25, this.jumpForced = .1;
                            break;

                        case "jp_hig":
                            this.width = 1, this.height = 1.7, this.distance = 2.5, this.maxAngle = -35, this.jumpForced = .15;
                            break;

                        case "jp_low_acce":
                            this.width = 1, this.height = .8, this.distance = 3, this.maxAngle = -15, this.canAcce = !0,
                                this.jumpForced = .15;
                            break;

                        case "jp_mid_acce":
                            this.width = 1, this.height = 1.3, this.distance = 2.8, this.maxAngle = -25, this.canAcce = !0,
                                this.jumpForced = .25;
                            break;

                        case "jp_hig_acce":
                            this.width = 1, this.height = 1.7, this.distance = 2.5, this.maxAngle = -35, this.canAcce = !0,
                                this.jumpForced = .7;
                    }
                    this.targets = e, this.firstChecks = [], this.isJumps = [], this.jumpeds = [], this.isLimitLefts = [];
                    for (var i = 0; i < this.targets.length; i++) this.firstChecks.push(!0), this.isJumps.push(!1),
                        this.jumpeds.push(!1), this.isLimitLefts.push(!1);
                    this.limitWidth = this.width + .2, this.distance += 1.5;
                }, e.prototype.onUpdate = function() {
                    if (!a["default"].gameMgr.isOver)
                        for (var t = 0; t < this.targets.length; t++) {
                            var e = this.targets[t],
                                i = e.getChild("TargetPos").transform.position,
                                n = this.owner,
                                o = n.transform.position;
                            if (e && (this.isJumps[t] && !e.isJump || e.getBike.transform.position.y < this.height + 1.9) && i.z < o.z + this.distance + 1) {
                                if (i.z > o.z) {
                                    if ((!this.isJumps[t] || e.isJump) && e.getBike.transform.position.y > .69 * (i.z - o.z)) return;
                                    if (this.firstChecks[t]) this.firstChecks[t] = !1, this.isJumps[t] = i.x > o.x - this.width && i.x < o.x + this.width,
                                        this.isLimitLefts[t] = i.x < o.x - this.width, this.isJumps[t] && this.canAcce && e.speedUp();
                                    else if (this.isJumps[t] && i.z < o.z + this.distance - 1.5) {
                                        var s = e.getBike.transform.position.clone();
                                        s.y = .69 * (i.z - o.z);
                                        var r = e.getBike.transform.rotationEuler.clone();
                                        r.x = -7.14 * (i.z - o.z), r.x < this.maxAngle && (r.x = this.maxAngle), e.getBike.transform.position = s,
                                            e.getBike.transform.rotationEuler = r;
                                    } else if (!this.isJumps[t] && i.z < o.z + this.distance) {
                                        if (this.isLimitLefts[t]) {
                                            if (i.x > o.x - this.limitWidth) {
                                                var s = e.getBike.transform.position.clone();
                                                s.x = o.x - this.limitWidth, e.getBike.transform.position = s;
                                            }
                                        } else if (i.x < o.x + this.limitWidth) {
                                            var s = e.getBike.transform.position.clone();
                                            s.x = o.x + this.limitWidth, e.getBike.transform.position = s;
                                        }
                                    } else this.isJumps[t] && !this.jumpeds[t] && i.z < o.z + this.distance + 1 && (this.jumpeds[t] = !0,
                                        e.jump(this.jumpForced, this.canRotate)); -
                                    1 != e.owner.name.indexOf("Role") && i.z > o.z + 1e3 && (Laya.Pool.recover(this.type, this.owner),
                                        this.owner.parent.removeChild(this.owner));
                                }
                            } else this.firstChecks[t] || (this.firstChecks[t] = !0, this.isJumps[t] = !1, this.isLimitLefts[t] = !1,
                                this.jumpeds[t] = !1);
                        }
                }, e;
            }(Laya.Script3D);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    11: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t() {
                this.bannerAdID = "adunit-d8587b59d92dcf68", this.videoAdID = "adunit-11b4c1e4e7d2a502",
                    this.interAdID = "adunit-9122d986c13ce01a", this.skinCfg = [];
            }
            return t.prototype.init = function() {}, t.prototype.clear3DRes = function(t, e) {
                for (var i = 0; i < t.length; ++i) {
                    var a = Laya.loader.getRes(t[i].url);
                    a && a.releaseResource(!0), Laya.Loader.clearRes(t[i].url);
                }
            }, t.prototype.getVideoId = function() {
                return this.videoAdID;
            }, t.prototype.getBannerId = function() {
                return this.bannerAdID;
            }, t.prototype.getInterId = function() {
                return this.interAdID;
            }, t.prototype.getSkinCfg = function() {
                return this.skinCfg;
            }, t.prototype.getSkinByIndex = function(t) {
                return this.skinCfg[t];
            }, t.prototype.getSkinIndexById = function(t) {
                for (var e = 0, i = this.skinCfg.length; i > e; ++e)
                    if (t == this.skinCfg[e].id) return e;
                return console.error("id not exist config."), -1;
            }, t;
        }();
        i["default"] = a;
    }, {}],
    12: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t() {
                this._isPlay = !1, this._isPause = !1, this._isOver = !1, this._isPressed = !1;
            }
            return Object.defineProperty(t.prototype, "isPlay", {
                get: function() {
                    return this._isPlay;
                },
                set: function(t) {
                    this._isPlay = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isOver", {
                get: function() {
                    return this._isOver;
                },
                set: function(t) {
                    this._isOver = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isPause", {
                get: function() {
                    return this._isPause;
                },
                set: function(t) {
                    this._isPause = t, Laya.timer.scale = t ? 0 : 1;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isPressed", {
                get: function() {
                    return this._isPressed;
                },
                set: function(t) {
                    this._isPressed = t;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }();
        i["default"] = a;
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../plug/MD5"),
            n = t("../plug/Dict"),
            o = t("../LayaSample"),
            s = function() {
                function t() {
                    this.isTokenActive = !1, this.httpQueue = {}, this._reqCount = 0, this.deviceType = "wxapp",
                        this.host = "", this.apiKey = "h3h3a66wc46ahax0", this.apiSecret = "ptrty6wsfg6lcf81",
                        this.token = null, this.messageDict = new n["default"]();
                }
                return t.prototype.request = function(t, e, i) {
                    if ("v10/common/temporaryLogin" == t) console.log("login...");
                    else {
                        if (!this.isTokenActive || !this.token) return void console.error("token is null or token inactive." + t);
                        e.token = this.token, console.log("token...");
                    }
                    var a = new Laya.HttpRequest();
                    a.once(Laya.Event.COMPLETE, this, this.response), a.once(Laya.Event.ERROR, this, this.errorHandler),
                        a.on(Laya.Event.PROGRESS, this, this.progressHandler), this.messageDict.set(t, {
                            method: t,
                            parm: e,
                            cb: i,
                            httpObj: a
                        });
                    var n = this.host + t,
                        o = this.setParmData(e);
                    a.send(n, o, "post", "json", ["Content-Type", "application/json;charset=UTF-8"]);
                }, t.prototype.setParmData = function(t) {
                    t.apiKey = this.apiKey, t.timestamp = Date.parse(new Date().toString()) / 1e3, t.apiSign = "",
                        this.token && (t.token = this.token);
                    var e = "",
                        i = new Array();
                    for (var n in t) i.push(n);
                    i = i.sort();
                    for (var o = 0; o < i.length; o++) e += encodeURIComponent(t[i[o]]);
                    var s = a["default"].hex_hmac_md5(this.apiSecret, e);
                    return t.apiSign = s, t;
                }, t.prototype.errorHandler = function(t) {
                    console.error("HTTP 错误：", t), console.log("重连..."), this.reLogin();
                }, t.prototype.clearRequist = function(t) {
                    for (var e in this.httpQueue) e == t && delete this.httpQueue[e];
                }, t.prototype.reLogin = function() {
                    var t = this;
                    t._reqCount += 1, t._reqCount < 7 ? (console.error("网络错误，尝试重连第 " + t._reqCount + " 次"),
                        setTimeout(function(t) {
                            o["default"].wxMgr.login();
                        }, 1e3 * t._reqCount)) : o["default"].wxMgr.showToast("网络出现错误，请稍后再试", 7e3);
                }, t.prototype.progressHandler = function(t) {}, t.prototype.response = function(t) {
                    var e = t.path,
                        i = this.messageDict.get(e);
                    i && i.cb && i.cb(t), 200 == t.code && "v10/common/temporaryLogin" != e ? (this._requData = i,
                        this.isTokenActive = !1, this.reLogin()) : ("v10/common/temporaryLogin" == e && 0 == t.code && this._requData && (this._requData.httpObj.http.abort(),
                            this.request(this._requData.method, this._requData.parm, this._requData.cb)), this._requData = null,
                        this.clearRequist(e)), this._reqCount = 0;
                }, t.prototype.setToken = function(t) {
                    this.token = t, this.isTokenActive = !0;
                }, t;
            }();
        i["default"] = s;
    }, {
        "../LayaSample": 3,
        "../plug/Dict": 20,
        "../plug/MD5": 21
    }],
    14: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function() {
                function t() {
                    this._pathRoot = "res/sound/", this._soundCtx = {}, this._soundFile = [];
                    for (var t in o) {
                        var e = o[t];
                        this._soundFile.push(e);
                    }
                }
                return t.prototype.init = function() {
                    for (var t = this._pathRoot, e = "", i = this._soundFile, a = this._soundFile.length, n = 0; a > n; ++n) {
                        e = i[n];
                        var o = new Laya.SoundChannel();
                        o.url = t + e + ".mp3", ("ride" == e || "bgm" == e) && (o.loops = 0), Laya.SoundManager.addChannel(o),
                            this._soundCtx[e] = !0;
                    }
                }, t.prototype.play = function(t) {
                    this._soundCtx[t] //&& a["default"].storageMgr.isPlaySound() 
                        &&
                        Laya.SoundManager.playSound(this._pathRoot + t + ".mp3");
                }, t.prototype.stop = function(t) {
                    this._soundCtx[t] && Laya.SoundManager.stopSound(this._pathRoot + t + ".mp3");
                }, t;
            }();
        i["default"] = n;
        var o;
        ! function(t) {
            t.BGM = "bgm", t.RIDE = "ride", t.OVER = "over", t.CHEER = "cheer", t.HIT = "hit",
                t.SPEED_UP_1 = "speed_up_1", t.SPEED_UP_2 = "speed_up_2", t.SPEED_UP_3 = "speed_up_3",
                t.CLICK = "click", t.JUMP = "jump", t.GROUND = "ground", t.CHEER_1 = "cheer_1",
                t.CHEER_2 = "cheer_2", t.CHEER_3 = "cheer_3", t.CHEER_4 = "cheer_4", t.CHEER_5 = "cheer_5";
        }(o || (o = {}));
    }, {
        "../LayaSample": 3
    }],
    15: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function() {
                function t() {
                    this.commonData = {
                        newScore: 1,
                        newLevel: 1,
                        goonCount: 0,
                        isGame: !1,
                        isSleep: !1,
                        watchVideo: !1,
                        watchInter: !1,
                        useTime: 1e3,
                        currentVersion: "9",
                        showRevivalCard: !1,
                        needWxAuthorize: !1,
                        userInfo: {},
                        existInterAd: !1,
                        existVideoAd: !1,
                        existBannerAd: !1,
                        isNoAds: !1,
                        isAdDelay: !1,
                        adTime: 13e3,
                        shareInfo: {},
                        launchOptions: {},
                        wxappList: {},
                        wxsysInfo: {},
                        roleSkinList: [],
                        pillarSkinList: [],
                        roleSkinIndex: 0,
                        signin: null,
                        isCheckSignin: !1
                    }, this._userData = null, this._userDataKey = "Jumpero-userData", this.init();
                }
                return t.prototype.init = function() {
                    this._userData = {
                        isPlaySound: !0,
                        isPlayVibrate: !0,
                        isNoAds: !1,
                        levelID: 0,
                        isCollect: !1
                    }, this.readStorage(), this.initGameStatus(), void 0 == this._userData.isNoAds && (this._userData.isNoAds = !1);
                }, t.prototype.readStorage = function() {
                    var t = Laya.LocalStorage.getItem(this._userDataKey);
                    t && (this._userData = JSON.parse(t));
                }, t.prototype.writeStorage = function() {
                    this._userData && Laya.LocalStorage.setItem(this._userDataKey, JSON.stringify(this._userData));
                }, t.prototype.removeStorage = function() {
                    Laya.LocalStorage.removeItem(this._userDataKey);
                }, t.prototype.isNoAds = function() {
                    return this._userData.isNoAds;
                }, t.prototype.setNoAds = function(t) {
                    this._userData.isNoAds = t, this.writeStorage();
                }, t.prototype.isPlaySound = function() {
                    return this._userData.isPlaySound;
                }, t.prototype.setPlaySound = function(t) {
                    this._userData.isPlaySound = t, this.writeStorage(), t && a["default"].soundMgr.play("bgm");
                }, t.prototype.isPlayVibrate = function() {
                    return this._userData.isPlayVibrate;
                }, t.prototype.setPlayVibrate = function(t) {
                    this._userData.isPlayVibrate = t, this.writeStorage();
                }, t.prototype.setCollect = function(t) {
                    this._userData.isCollect = t, this.writeStorage();
                }, t.prototype.isCollect = function() {
                    return this._userData.isCollect;
                }, t.prototype.initGameStatus = function() {
                    this._userData.gameStatus || (this._userData.gameStatus = {}), this._userData.gameStatus.maxLevel || (this._userData.gameStatus.maxLevel = 1),
                        this._userData.gameStatus.maxScore || (this._userData.gameStatus.maxScore = 0),
                        this._userData.gameStatus.gold || (this._userData.gameStatus.gold = 0), this._userData.signinTime || (this._userData.signinTime = 0),
                        this._userData.skinTipsTime || (this._userData.skinTipsTime = 0), this.writeStorage();
                }, t.prototype.setSigninTime = function(t) {
                    this._userData.signinTime = t, this.writeStorage();
                }, t.prototype.isSkinTips = function() {
                    return Math.floor(this._userData.skinTipsTime / 86400) != Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, t.prototype.setSkinTips = function(t) {
                    this._userData.skinTipsTime = t ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3),
                        this.writeStorage();
                }, t.prototype.isSignin = function() {
                    var t = !0,
                        e = this._userData.signinTime;
                    return t = 2 > e ? !0 : 3 > e ? !1 : Math.floor(e / 86400) == Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, t.prototype.getSigninTime = function() {
                    return this._userData.signinTime;
                }, t.prototype.getGameStatus = function() {
                    return this._userData.gameStatus;
                }, t.prototype.setMaxLevel = function(t) {
                    this._userData.gameStatus.maxLevel < t && (this._userData.gameStatus.maxLevel = t,
                        this.writeStorage());
                }, t.prototype.addGold = function(t) {
                    this._userData.gameStatus.gold += t, this.writeStorage();
                }, t.prototype.setMaxScore = function(t) {
                    this._userData.gameStatus.maxScore < t && (this._userData.gameStatus.maxScore = t,
                        this.writeStorage());
                }, t;
            }();
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    16: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return __extends(e, t), e.prototype.toAlpha = function(t, e, i, a, n) {
                function o() {
                    var n = a ? new Laya.Handler(this, s) : null;
                    Laya.Tween.to(t, {
                        alpha: e
                    }, i, null, n);
                }

                function s() {
                    Laya.Tween.to(t, {
                        alpha: 1
                    }, i, null, Laya.Handler.create(this, o));
                }
                void 0 === a && (a = !1), void 0 === n && (n = 1), t.alpha = n, o();
            }, e.prototype.toScale = function(t, e, i, a, n, o) {
                function s() {
                    var e = n || a ? new Laya.Handler(this, r) : null;
                    Laya.Tween.to(t, {
                        scaleX: o,
                        scaleY: o
                    }, i, null, e);
                }

                function r() {
                    var e = n ? new Laya.Handler(this, s) : null;
                    Laya.Tween.to(t, {
                        scaleX: 1,
                        scaleY: 1
                    }, i, null, e);
                }
                void 0 === n && (n = !1), void 0 === o && (o = e), t.scaleX = 1, t.scaleY = 1, s();
            }, e.prototype.toPosition = function(t, e, i, a, n) {
                function o() {
                    if (a) switch (n) {
                        case 0:
                            var o = new Laya.Handler(this, s);
                            break;

                        case 1:
                            var o = new Laya.Handler(this, r);
                    }
                    Laya.Tween.to(t, {
                        x: e.x,
                        y: e.y
                    }, i, null, o);
                }

                function s() {
                    Laya.Tween.to(t, {
                        x: h.x,
                        y: h.y
                    }, i, null, Laya.Handler.create(this, o));
                }

                function r() {
                    t.x = h.x, t.y = h.y, o();
                }
                void 0 === a && (a = !1), void 0 === n && (n = 0), Laya.Tween.clearAll(t);
                var h = new Laya.Vector2(t.x, t.y);
                o();
            }, e.prototype.fromAlpha = function(t, e, i, a) {
                function n() {
                    var n = a ? new Laya.Handler(this, o) : null;
                    Laya.Tween.from(t, {
                        alpha: e
                    }, i, null, n);
                }

                function o() {
                    Laya.Tween.from(t, {
                        alpha: 1
                    }, i, null, Laya.Handler.create(this, n));
                }
                void 0 === a && (a = !1), t.alpha = 1, n();
            }, e.prototype.fromScale = function(t, e, i, a) {
                function n() {
                    var n = a ? new Laya.Handler(this, o) : null;
                    Laya.Tween.from(t, {
                        scaleX: e,
                        scaleY: e
                    }, i, null, n);
                }

                function o() {
                    Laya.Tween.from(t, {
                        scaleX: 1,
                        scaleY: 1
                    }, i, null, Laya.Handler.create(this, n));
                }
                void 0 === a && (a = !1), n();
            }, e;
        }(Laya.Script);
        i["default"] = a;
    }, {}],
    17: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function() {
                function t() {}
                return t.prototype.init = function() {
                    if (this.preTime = 0, this.buttonAuthorize1 = null, this._shareStartTime = new Date().getTime() + 86e3,
                        this._isCreateWxInfoBtn = !1, Laya.Browser.onWeiXin) {
                        var t = window.wx.getSystemInfoSync();
                        a["default"].commonData.wxsysInfo = t, this._regisiterWXCallback(), this.getLaunchOption(),
                            this.showShareMenuWithTicket(!0), this.login();
                    }
                }, t.prototype.login = function() {
                    if (Laya.Browser.onWeiXin) {
                        var t = a["default"].wxMgr;
                        window.wx.login({
                            success: function(e) {
                                var i = e.code,
                                    n = a["default"].commonData.launchOptions,
                                    o = {};
                                o.code = i, n.scene && (o.scene_id = n.scene), n.referrerInfo && n.referrerInfo.appId && (o.appid = n.referrerInfo.appId),
                                    n.query ? (n.query.id && (o.share_user_id = parseInt(n.query.id)), n.query.share_id && (o.share_id = parseInt(n.query.share_id)),
                                        n.query.channel && (o.channel = n.query.channel)) : n.referrerInfo && n.referrerInfo.extraData && n.referrerInfo.extraData.channel && (o.channel = n.referrerInfo.extraData.channel),
                                    o.late_version = a["default"].commonData.currentVersion, a["default"].netMgr.request("v10/common/temporaryLogin", o, function(e) {
                                        if (0 !== e.code) console.error("code login fault. code:" + e.code);
                                        else {
                                            console.log("code 登录成功", e);
                                            var i = e.result,
                                                n = "" == i.userInfo.avatar;
                                            a["default"].commonData.needWxAuthorize = n, n && !this._isCreateWxInfoBtn && t.createWxInfoBtn1(),
                                                t.setLoginInfo(i), t.setUserInfo(i), t._regisiterWXShareCallback(), a["default"].commonData.needShowGuide = 0 == e.result.userInfo.max_score;
                                        }
                                        a["default"].glEvent.event("login_success_event");
                                    });
                            }
                        });
                    }
                }, t.prototype.createWxInfoBtn1 = function() {
                    this._isCreateWxInfoBtn = !0;
                    var t = a["default"].wxMgr,
                        e = a["default"].commonData.wxsysInfo,
                        i = e.screenWidth,
                        n = e.screenHeight,
                        o = (e.screenWidth - i) / 2,
                        s = (e.screenHeight - n) / 2,
                        r = {
                            left: o,
                            top: s,
                            width: i,
                            height: n,
                            lineHeight: n,
                            backgroundColor: "#00000000",
                            color: "#ffffffff",
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4
                        };
                    t.buttonAuthorize1 = window.wx.createUserInfoButton({
                        type: "text",
                        text: "",
                        style: r,
                        withCredentials: !0
                    }), t.showAuthorizeBtn(!0), t.buttonAuthorize1.onTap(function(e) {
                        var i = new Date().getTime(),
                            n = Math.floor((i - t.preTime) / 1e3);
                        if (t.preTime = i, !(1 > n)) {
                            if (e.userInfo) {
                                console.log("用户授权登录");
                                var o = {};
                                o.encrypted_data = e.encryptedData, o.iv = e.iv, a["default"].netMgr.request("v10/common/authorizedLogin", o, function(e) {
                                    0 !== e.code ? console.error("authorized login fault. code:" + e.code) : t.setUserInfo(e.result);
                                });
                            } else console.log("授权取消");
                            a["default"].commonData.needWxAuthorize = !1, t.showAuthorizeBtn(!1);
                        }
                    });
                }, t.prototype.getSkinData = function(t) {
                    var e = {};
                    a["default"].netMgr.request("v10/skin/lists", e, function(e) {
                        if (0 != e.code) console.error("skin lists error", e);
                        else {
                            for (var i = e.result.roleSkinList, n = 0; 4 > n; ++n) 1 == i[n].is_default;
                            a["default"].commonData.roleSkinList = e.result.roleSkinList, a["default"].commonData.pillarSkinList = e.result.pillarSkinList,
                                a["default"].glEvent.event("load_finish_event", {
                                    target: "skinData"
                                }), void 0 != t && t(e);
                        }
                    });
                }, t.prototype.setLoginInfo = function(t) {
                    var e = t.versionConfig;
                    a["default"].commonData.showRevivalCard = !1, e.version == a["default"].commonData.currentVersion && (a["default"].commonData.showRevivalCard = "0" != e.share),
                        a["default"].commonData.lateWay = e.late_way, a["default"].commonData.isAdDelay = "0" != e.delay,
                        a["default"].commonData.adTime = e.banner_interval ? e.banner_interval : a["default"].commonData.adTime,
                        a["default"].commonData.latencyTime = a["default"].commonData.isAdDelay ? e.latency_time : 0,
                        a["default"].commonData.moveTime = a["default"].commonData.isAdDelay ? e.move_time : 0;
                    var i = t.shareContent,
                        n = i.length,
                        o = 0;
                    a["default"].commonData.shareInfo = {};
                    for (var s = 0; n > s; ++s) {
                        o = i[s].share_type;
                        var r = a["default"].commonData.shareInfo[o];
                        r || (r = [], a["default"].commonData.shareInfo[o] = r), r.push(i[s]);
                    }
                    a["default"].commonData.wxappList = {};
                    for (var h = 0, l = t.wxappList; h < l.length; h++) {
                        var d = l[h],
                            c = a["default"].commonData.wxappList[d.category];
                        c || (c = [], a["default"].commonData.wxappList[d.category] = c), Laya.Browser.onIOS && 1 == d.is_box || c.push(d);
                    }
                }, t.prototype.setUserInfo = function(t) {
                    var e = t.userInfo;
                    a["default"].netMgr.setToken(t.token), a["default"].commonData.userInfo = e, 0 != e.last_sign_time && a["default"].storageMgr.setSigninTime(e.last_sign_time),
                        a["default"].commonData.isCheckSignin = !0;
                    var i = a["default"].storageMgr.getGameStatus();
                    e.pass = 0;
                    var n = (e.pass < i.maxLevel ? i.maxLevel : e.pass, e.max_score < i.maxScore ? i.maxScore : e.max_score);
                    a["default"].glEvent.event("updateCoin", {}), n && this.settlementLevel(n);
                }, t.prototype.showAuthorizeBtn = function(t) {
                    this.buttonAuthorize1 && (t ? this.buttonAuthorize1.show() : this.buttonAuthorize1.hide());
                }, t.prototype.getLaunchOption = function() {
                    a["default"].commonData.launchOptions = window.wx.getLaunchOptionsSync();
                }, t.prototype.showToast = function(t, e) {
                    window.wx && window.wx.showToast({
                        title: t,
                        duration: e,
                        icon: "none"
                    });
                }, t.prototype.hideToast = function() {
                    window.wx && window.wx.hideToast();
                }, t.prototype._regisiterWXShareCallback = function() {
                    var t = a["default"].wxMgr;
                    Laya.Browser.onWeiXin && a["default"].netMgr.token && window.wx.onShareAppMessage(function() {
                        var e = t.getShareContent(1),
                            i = {
                                title: e.share_title,
                                imageUrl: e.share_img,
                                query: "share_id=" + e.share_id + "&share_type=" + e.share_type + "&id=" + a["default"].commonData.userInfo.id,
                                success: function(t) {},
                                fail: function() {}
                            };
                        return t._upShareInfo(e.share_id), i;
                    });
                }, t.prototype.settlementLevel = function(t) {
                    // var e = a["default"].storageMgr.getGameStatus(), i = a["default"].wxMgr;
                    var e = platform.getInstance().getStorageSync("MaxScore") || 0;
                    if (e < t) {

                        platform.getInstance().setStorageSync("MaxScore", t);
                        // i._submitScroe(t), a["default"].storageMgr.setMaxScore(t);
                        // var n = {};
                        // n.score = t, 
                        // n.use_time = Math.floor(a["default"].commonData.useTime / 1e3), 
                        // a["default"].netMgr.request("v10/user/pass", n, 
                        // function(t) {
                        // });
                    }
                }, t.prototype.buySkin = function(t, e) {
                    var i = {};
                    i.type = t, a["default"].netMgr.request("v10/skin/randBuy", i, function(t) {
                        void 0 != e && e(t);
                    });
                }, t.prototype.changeSkin = function(t, e) {
                    var i = {};
                    i = t, i = e, a["default"].netMgr.request("v10/skin/switchSkin", i, function(t) {});
                }, t.prototype.worldRank = function(t) {
                    var e = {
                        page: t
                    };
                    a["default"].netMgr.request("v10/user/worldRanking", e, function(e) {
                        0 == e.code ? a["default"].glEvent.event("draw_world_rank_event", {
                            data: e.result,
                            page: t
                        }) : console.error("get world ranking error:", e, t);
                    });
                }, t.prototype._submitScroe = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = window.wx.getOpenDataContext();
                        e.postMessage({
                            cmd: "submit_scroe",
                            score: t
                        }), a["default"].glEvent.event("submit_scroe_event", {});
                    }
                }, t.prototype.showFriendRank = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        a["default"].glEvent.event("show_friend_rank_event", {
                            isShow: t
                        });
                        var e = t ? "open_friend_rank" : "close_friend_rank",
                            i = window.wx.getOpenDataContext();
                        i.postMessage({
                            cmd: e
                        });
                    }
                }, t.prototype.destroyFriendRank = function() {
                    if (Laya.Browser.onWeiXin) {
                        var t = window.wx.getOpenDataContext();
                        t.postMessage({
                            cmd: "destroy_friend_rank"
                        });
                    }
                }, t.prototype.showLiteRank = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_lite_rank" : "close_lite_rank",
                            i = window.wx.getOpenDataContext();
                        i.postMessage({
                            cmd: e
                        }), a["default"].glEvent.event("show_lite_rank_event", {
                            isShow: t
                        });
                    }
                }, t.prototype.showOverFriendTips = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_over_friend" : "close_over_friend",
                            i = window.wx.getOpenDataContext();
                        i.postMessage({
                            cmd: e,
                            score: a["default"].commonData.newScore
                        }), a["default"].glEvent.event("over_friend_event", {
                            isShow: t
                        });
                    }
                }, t.prototype.showLoopFriendTips = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_loop_friend" : "close_loop_friend",
                            i = window.wx.getOpenDataContext();
                        i.postMessage({
                            cmd: e,
                            score: a["default"].commonData.newScore
                        }), a["default"].glEvent.event("loop_over_event", {
                            isShow: t
                        });
                    }
                }, t.prototype.restartGame = function() {
                    if (Laya.Browser.onWeiXin) {
                        var t = window.wx.getOpenDataContext();
                        t.postMessage({
                            cmd: "restart_game"
                        });
                    }
                }, t.prototype.onFrientMouseEvent = function(t) {
                    Laya.Browser.onWeiXin && window.wx.getOpenDataContext().postMessage(t);
                }, t.prototype.playVibrateShort = function() {
                    Laya.Browser.onWeiXin && a["default"].storageMgr.isPlayVibrate() && window.wx.vibrateShort({
                        success: function(t) {}
                    });
                }, t.prototype.playVibrateLong = function() {
                    Laya.Browser.onWeiXin && a["default"].storageMgr.isPlayVibrate() && window.wx.vibrateLong({
                        success: function(t) {}
                    });
                }, t.prototype.showShareMenuWithTicket = function(t) {
                    window.wx && window.wx.showShareMenu({
                        withShareTicket: t
                    });
                }, t.prototype._regisiterWXCallback = function() {
                    Laya.Browser.onWeiXin && (window.wx.offShow(this.onShowEvent), window.wx.onShow(this.onShowEvent),
                        window.wx.offHide(this.onHideEvent), window.wx.onHide(this.onHideEvent));
                }, t.prototype.onShowEvent = function(t) {
                    var e = a["default"].wxMgr;
                    if (a["default"].commonData.isSleep = !1, a["default"].glEvent.event("wx_wake_event", {}),
                        e._statuShareGame) {
                        e._statuShareGame = !1;
                        var i = new Date().getTime(),
                            n = i - e._shareStartTime,
                            o = 2500 > n ? !1 : !0;
                        o && e._upShareInfo(e._shareId), a["default"].glEvent.event("share_back_event", {
                            isShare: o,
                            shareId: e._shareId
                        }), e._shareStartTime = new Date().getTime() + 86e3;
                    }
                }, t.prototype.onHideEvent = function() {
                    a["default"].commonData.isSleep = !0;
                    a["default"].wxMgr;
                    a["default"].glEvent.event("wx_sleep_event", {});
                }, t.prototype.openOtherApp = function(t, e) {
                    if (Laya.Browser.onWeiXin) {
                        var i = a["default"].commonData.wxappList[e],
                            n = "",
                            o = -1,
                            s = -1;
                        if (i)
                            for (var r = 0, h = i; r < h.length; r++) {
                                var l = h[r];
                                if (l.app_id == t) {
                                    o = l.wx_id, s = l.ad_id, n = l.app_path;
                                    break;
                                }
                            }
                        window.wx.navigateToMiniProgram({
                            appId: t,
                            path: n,
                            success: function(e) {
                                return -1 == o ? void console.error("click app not find id,for appid:", t) : void a["default"].netMgr.request("v10/common/clickWxapp", {
                                    wx_id: o,
                                    ad_id: s,
                                    type: 1
                                }, function(t) {
                                    0 !== t.code && console.error("log goto wxapp fault. code:" + t);
                                });
                            },
                            fail: function(t) {
                                a["default"].netMgr.request("v10/common/clickWxapp", {
                                    wx_id: o,
                                    ad_id: s,
                                    type: 0
                                }, function(t) {
                                    0 !== t.code && console.error("log goto wxapp fault. code:" + t);
                                }), a["default"].glEvent.event("show_applite_event");
                            }
                        });
                    }
                }, t.prototype.getWxappList = function(t) {
                    var e = a["default"].commonData.wxappList[t],
                        i = [];
                    if (e) {
                        for (var n = 0, o = e; n < o.length; n++) {
                            var s = o[n],
                                r = {};
                            r.app_img = s.app_img, r.app_id = s.app_id, r.category = s.category, r.weight = s.weight,
                                i.push(r);
                        }
                        i.sort(function(t, e) {
                            return t.weight - e.weight;
                        });
                    }
                    return i;
                }, t.prototype.shareFriend = function(t, e) {
                    if (Laya.Browser.onWeiXin) {
                        var i, n = a["default"].wxMgr,
                            o = n.getShareContent(t);
                        e && (n._shareStartTime = new Date().getTime(), n._statuShareGame = !0, n._shareId = o.share_id),
                            i = {
                                title: o.share_title,
                                imageUrl: o.share_img,
                                query: "share_id=" + o.share_id + "&share_type=" + o.share_type + "&id=" + a["default"].commonData.userInfo.id,
                                success: function(t) {},
                                fail: function() {},
                                complete: function() {}
                            }, window.wx.shareAppMessage(i);
                    }
                }, t.prototype.getShareContent = function(t) {
                    var e = a["default"].commonData.shareInfo[t],
                        i = {
                            share_title: "老铁快帮我点点，差一点就过关了",
                            share_img: "",
                            share_id: 1,
                            share_type: t
                        };
                    return e && (i = e[Math.floor(Math.random() * e.length)]), i;
                }, t.prototype.upViewVideoInfo = function(t, e) {
                    var i = {};
                    i.ad_type = e, i.type = t, a["default"].netMgr.request("v10/user/viewVideo", i, function(t) {
                        0 !== t.code && console.error("upload video info error.");
                    });
                }, t.prototype._upShareInfo = function(t) {
                    var e = {};
                    e.share_id = t, a["default"].netMgr.request("v10/user/recordShare", e, function(t) {
                        0 !== t.code && console.error("upload user share fault.");
                    });
                }, t.prototype.getSignData = function(t, e) {
                    var i = {};
                    a["default"].netMgr.request("v10/activity/signPrize", i, function(i) {
                        0 !== i.code ? console.error("get sign data fault.") : (a["default"].commonData.signin = i.result,
                            e && e.call(t, i.result));
                    });
                }, t.prototype.getSignPrize = function(t, e, i) {
                    var n = a["default"].wxMgr,
                        o = {};
                    o["double"] = i ? 1 : 0, a["default"].netMgr.request("v10/activity/getSignPrize", o, function(i) {
                        0 !== i.code ? n.showToast(i.msg, 2e3) : (a["default"].commonData.signin = i.result,
                            e && e.call(t, i.result));
                    });
                }, t.prototype.getDiskData = function(t, e) {
                    var i = a["default"].wxMgr,
                        n = {};
                    a["default"].netMgr.request("v10/activity/turntablePrize", n, function(a) {
                        0 !== a.code ? i.showToast(a.msg, 2e3) : e && e.call(t, a.result);
                    });
                }, t.prototype.getDiskPrize = function(t, e, i, n) {
                    var o = a["default"].wxMgr,
                        s = {};
                    s.type = i, 1 == i && (s.share_content_id = n), a["default"].netMgr.request("v10/activity/luckDraw", s, function(i) {
                        0 !== i.code ? o.showToast(i.msg, 2e3) : e && e.call(t, i.result);
                    });
                }, t.prototype.getDiskDouble = function(t, e, i) {
                    var n = a["default"].wxMgr;
                    a["default"].netMgr.request("v10/activity/prizeDouble", i, function(i) {
                        0 !== i.code ? n.showToast(i.msg, 2e3) : e && e.call(t, i.result);
                    });
                }, t.prototype.openCustomerService = function() {
                    Laya.Browser.onWeiXin && window.wx.openCustomerServiceConversation({
                        sessionFrom: "会话来源",
                        showMessageCard: !1,
                        sendMessageTitle: "会话内消息卡片标题",
                        sendMessagePath: "会话内消息卡片路径",
                        sendMessageImg: "会话内消息卡片图片路径",
                        success: function(t) {
                            console.error("客服调用成功的回调函数:", t);
                        },
                        fail: function(t) {
                            console.error("客服调用失败的回调函数:", t);
                        },
                        complete: function(t) {
                            console.log("调用结束的回调函数（调用成功、失败都会执行）");
                        }
                    });
                }, t;
            }();
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    18: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t() {}
            return t.prototype.init = function() {}, t.prototype.getBannerCount = function() {
                    return 0;
                }, t.prototype.getBannerItem = function() {}, t.prototype.setBannerItem = function() {},
                t.prototype.showBannerAd = function() {}, t.prototype.hideBannerAd = function() {},
                t.prototype.setBannerAdWidth = function(t) {}, t.prototype.setBannerAdTop = function(t) {},
                t.prototype.getBannerAd = function() {}, t.prototype.showVideoAd = function(t) {},
                t.prototype.getVideoAd = function() {}, t.prototype.loadVideoAd = function() {},
                t.prototype.showInterstitialAd = function() {}, t.prototype.getInterstitialAd = function() {},
                t;
        }();
        i["default"] = a;
    }, {}],
    19: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = t("../../GameConfig"),
            o = t("./BaseAd"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.init = function() {
                    if (this._videoAd = null, this._interAd = null, this._bannerItem = null, this._bannerList = [],
                        this._bannerError = 0, this._videoCate = -1, this._isCreateInter = !1, Laya.Browser.onWeiXin) {
                        var t = a["default"].commonData.wxsysInfo.SDKVersion;
                        this._isCreateInter = a["default"].utils.compareVersion(t, "2.6.0") >= 0, this.getBannerAd(),
                            this.getVideoAd(), this.getInterstitialAd();
                    }
                }, e.prototype.getBannerCount = function() {
                    return this._bannerList.length;
                }, e.prototype.getBannerItem = function() {
                    return this._bannerItem;
                }, e.prototype.setBannerItem = function() {
                    if (Laya.Browser.onWeiXin && !a["default"].commonData.isNoAds && a["default"].commonData.existBannerAd) {
                        var t = this._bannerList.length,
                            e = null;
                        if (1 > t) e = null;
                        else if (1 == t) e = this._bannerList[0];
                        else {
                            this._bannerList[0].ad.destroy(), this._bannerList.shift();
                            for (var i = 0, n = this._bannerList.length; n > i; ++i) this._bannerList[i].index = i;
                            e = this._bannerList[0];
                        }
                        this._bannerItem = e;
                    }
                }, e.prototype.showBannerAd = function() {
                    var t = this.getBannerItem();
                    Laya.Browser.onWeiXin && t && (a["default"].commonData.isNoAds || a["default"].commonData.existBannerAd && (a["default"].commonData.watchVideo || t.ad.show().then(function() {
                        a["default"].glEvent.event("ad_show_event", {
                            adtype: "banner",
                            index: t.index
                        });
                    })["catch"](function(t) {})));
                }, e.prototype.hideBannerAd = function() {
                    for (var t = 0, e = this._bannerList.length; e > t; ++t) this._bannerList[t] && this._bannerList[t].ad.hide();
                }, e.prototype.setBannerAdWidth = function(t) {
                    var e = this.getBannerItem();
                    if (e && t) {
                        var i = a["default"].commonData.wxsysInfo,
                            n = (i.screenWidth - t) / 2;
                        e.ad.style.width = t, e.ad.style.left = n;
                    }
                }, e.prototype.setBannerAdTop = function(t) {
                    var e = this.getBannerItem();
                    e && void 0 !== t && (e.ad.style.top = t);
                }, e.prototype.getBannerAd = function() {
                    if (Laya.Browser.onWeiXin && !(a["default"].commonData.isSleep || this._bannerList.length > 2)) {
                        var t = this,
                            e = a["default"].commonData.wxsysInfo,
                            i = e.screenWidth,
                            o = (e.screenWidth - i) / 2,
                            s = .86 * e.screenHeight,
                            r = {
                                width: i,
                                height: e.screenHeight - s,
                                top: s,
                                index: -1
                            },
                            h = wx.createBannerAd({
                                adUnitId: a["default"].configMgr.getBannerId(),
                                style: {
                                    left: o,
                                    top: s,
                                    width: i
                                }
                            });
                        r.ad = h, h.onLoad(function() {
                            a["default"].commonData.existBannerAd = !0, a["default"].glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !0
                            });
                            var e = t._bannerList.push(r);
                            r.index = e - 1, t._bannerError = 0;
                        }), h.onError(function(e) {
                            console.error("banner 加载错误：", e), t._bannerError += 1, t._bannerError > 3 && (t._bannerError = 3,
                                a["default"].commonData.existBannerAd = !1), a["default"].glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !1
                            });
                        }), h.onResize(function(t) {
                            if (h) {
                                var i = h.style.realHeight + .1;
                                e.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * n["default"].height),
                                    h.style.top = e.screenHeight - i, r.width = h.style.realWidth, r.height = i, a["default"].glEvent.event("ad_resize_event", {
                                        adtype: "banner",
                                        index: r.index
                                    });
                            }
                        });
                    }
                }, e.prototype.showVideoAd = function(t) {
                    var e = this._videoAd;
                    Laya.Browser.onWeiXin && e && (this._videoCate = t, a["default"].wxMgr.upViewVideoInfo(0, t),
                        e.show().then(function() {
                            a["default"].commonData.watchVideo = !0;
                        })["catch"](function(t) {
                            a["default"].wxMgr.showToast("暂无视频，请稍后再试", 2e3), e.load().then(function() {
                                return e.show();
                            });
                        }));
                }, e.prototype.getVideoAd = function() {
                    if (Laya.Browser.onWeiXin) {
                        if (!wx.createRewardedVideoAd) return void(a["default"].commonData.existVideoAd = !1);
                        var t = this._videoAd;
                        t && (t.offLoad(this._onLoadVideo), t.offError(this._onErrorVideo), t.offClose(this._onCloseVideo)),
                            t = wx.createRewardedVideoAd({
                                adUnitId: a["default"].configMgr.getVideoId()
                            }), t.onLoad(this._onLoadVideo), t.onError(this._onErrorVideo), t.onClose(this._onCloseVideo),
                            this._videoAd = t;
                    }
                }, e.prototype.loadVideoAd = function() {
                    Laya.Browser.onWeiXin && this._videoAd && this._videoAd.load();
                }, e.prototype._onLoadVideo = function() {
                    a["default"].commonData.existVideoAd = !0, a["default"].glEvent.event("ad_load_event", {
                        adtype: "video",
                        isLoad: !0
                    });
                }, e.prototype._onErrorVideo = function(t) {
                    console.error("video 加载错误", t), a["default"].commonData.existVideoAd = !1, a["default"].glEvent.event("ad_load_event", {
                        adtype: "video",
                        isLoad: !1
                    });
                }, e.prototype._onCloseVideo = function(t) {
                    a["default"].commonData.watchVideo = !1;
                    var e = t && t.isEnded || void 0 === t ? !0 : !1;
                    e && a["default"].wxMgr.upViewVideoInfo(1, this._videoCate), a["default"].glEvent.event("ad_video_close_event", {
                        isEnded: e
                    });
                }, e.prototype.showInterstitialAd = function() {
                    var t = this._interAd;
                    this._isCreateInter && t && t.show().then(function() {
                        a["default"].commonData.watchInter = !0;
                    })["catch"](function(t) {
                        console.error("Interstitial 显示错误", t), a["default"].glEvent.event("ad_inter_close_event", {});
                    });
                }, e.prototype.getInterstitialAd = function() {
                    if (this._isCreateInter && wx.createInterstitialAd) {
                        var t = this._interAd;
                        t && (t.offLoad(this._onLoadInterstitial), t.offError(this._onErrorInterstitial),
                                t.offClose(this._onCloseInterstitial)), t = wx.createInterstitialAd({
                                adUnitId: a["default"].configMgr.getInterId()
                            }), t.onLoad(this._onLoadInterstitial), t.onError(this._onErrorInterstitial), t.onClose(this._onCloseInterstitial),
                            this._interAd = t;
                    }
                }, e.prototype._onLoadInterstitial = function() {
                    console.log("Interstitial 加载成功"), a["default"].commonData.existInterAd = !0, a["default"].glEvent.event("ad_load_event", {
                        adtype: "inter",
                        isLoad: !0
                    });
                }, e.prototype._onErrorInterstitial = function(t) {
                    console.error("Interstitial 加载错误", t), a["default"].commonData.existInterAd = !1,
                        a["default"].glEvent.event("ad_load_event", {
                            adtype: "inter",
                            isLoad: !1
                        });
                }, e.prototype._onCloseInterstitial = function(t) {
                    console.error("Interstitial 关闭", t), a["default"].glEvent.event("ad_inter_close_event", {});
                }, e;
            }(o["default"]);
        i["default"] = s;
    }, {
        "../../GameConfig": 1,
        "../LayaSample": 3,
        "./BaseAd": 18
    }],
    20: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t() {
                this.items = {};
            }
            return t.prototype.has = function(t) {
                return t in this.items;
            }, t.prototype.set = function(t, e) {
                this.items[t] = e;
            }, t.prototype.remove = function(t) {
                return this.has(t) ? (delete this.items[t], !0) : !1;
            }, t.prototype.get = function(t) {
                return this.has(t) ? this.items[t] : void 0;
            }, t.prototype.values = function() {
                var t = [];
                for (var e in this.items) this.has(e) && t.push(this.items[e]);
                return t;
            }, t.prototype.getItems = function() {
                return this.items;
            }, t.prototype.size = function() {
                return Object.keys(this.items).length;
            }, t.prototype.clear = function() {
                this.items = {};
            }, t.prototype.keys = function() {
                return Object.keys(this.items);
            }, t;
        }();
        i["default"] = a;
    }, {}],
    21: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function t() {}
            return t.hex_md5 = function(t) {
                return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, t.b64_md5 = function(t) {
                return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, t.str_md5 = function(t) {
                return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, t.hex_hmac_md5 = function(t, e) {
                return this.binl2hex(this.core_hmac_md5(t, e));
            }, t.b64_hmac_md5 = function(t, e) {
                return this.binl2b64(this.core_hmac_md5(t, e));
            }, t.str_hmac_md5 = function(t, e) {
                return this.binl2str(this.core_hmac_md5(t, e));
            }, t.md5_vm_test = function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc");
            }, t.core_md5 = function(t, e) {
                t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
                for (var i = 1732584193, a = -271733879, n = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
                    var r = i,
                        h = a,
                        l = n,
                        d = o;
                    i = this.md5_ff(i, a, n, o, t[s + 0], 7, -680876936), o = this.md5_ff(o, i, a, n, t[s + 1], 12, -389564586),
                        n = this.md5_ff(n, o, i, a, t[s + 2], 17, 606105819), a = this.md5_ff(a, n, o, i, t[s + 3], 22, -1044525330),
                        i = this.md5_ff(i, a, n, o, t[s + 4], 7, -176418897), o = this.md5_ff(o, i, a, n, t[s + 5], 12, 1200080426),
                        n = this.md5_ff(n, o, i, a, t[s + 6], 17, -1473231341), a = this.md5_ff(a, n, o, i, t[s + 7], 22, -45705983),
                        i = this.md5_ff(i, a, n, o, t[s + 8], 7, 1770035416), o = this.md5_ff(o, i, a, n, t[s + 9], 12, -1958414417),
                        n = this.md5_ff(n, o, i, a, t[s + 10], 17, -42063), a = this.md5_ff(a, n, o, i, t[s + 11], 22, -1990404162),
                        i = this.md5_ff(i, a, n, o, t[s + 12], 7, 1804603682), o = this.md5_ff(o, i, a, n, t[s + 13], 12, -40341101),
                        n = this.md5_ff(n, o, i, a, t[s + 14], 17, -1502002290), a = this.md5_ff(a, n, o, i, t[s + 15], 22, 1236535329),
                        i = this.md5_gg(i, a, n, o, t[s + 1], 5, -165796510), o = this.md5_gg(o, i, a, n, t[s + 6], 9, -1069501632),
                        n = this.md5_gg(n, o, i, a, t[s + 11], 14, 643717713), a = this.md5_gg(a, n, o, i, t[s + 0], 20, -373897302),
                        i = this.md5_gg(i, a, n, o, t[s + 5], 5, -701558691), o = this.md5_gg(o, i, a, n, t[s + 10], 9, 38016083),
                        n = this.md5_gg(n, o, i, a, t[s + 15], 14, -660478335), a = this.md5_gg(a, n, o, i, t[s + 4], 20, -405537848),
                        i = this.md5_gg(i, a, n, o, t[s + 9], 5, 568446438), o = this.md5_gg(o, i, a, n, t[s + 14], 9, -1019803690),
                        n = this.md5_gg(n, o, i, a, t[s + 3], 14, -187363961), a = this.md5_gg(a, n, o, i, t[s + 8], 20, 1163531501),
                        i = this.md5_gg(i, a, n, o, t[s + 13], 5, -1444681467), o = this.md5_gg(o, i, a, n, t[s + 2], 9, -51403784),
                        n = this.md5_gg(n, o, i, a, t[s + 7], 14, 1735328473), a = this.md5_gg(a, n, o, i, t[s + 12], 20, -1926607734),
                        i = this.md5_hh(i, a, n, o, t[s + 5], 4, -378558), o = this.md5_hh(o, i, a, n, t[s + 8], 11, -2022574463),
                        n = this.md5_hh(n, o, i, a, t[s + 11], 16, 1839030562), a = this.md5_hh(a, n, o, i, t[s + 14], 23, -35309556),
                        i = this.md5_hh(i, a, n, o, t[s + 1], 4, -1530992060), o = this.md5_hh(o, i, a, n, t[s + 4], 11, 1272893353),
                        n = this.md5_hh(n, o, i, a, t[s + 7], 16, -155497632), a = this.md5_hh(a, n, o, i, t[s + 10], 23, -1094730640),
                        i = this.md5_hh(i, a, n, o, t[s + 13], 4, 681279174), o = this.md5_hh(o, i, a, n, t[s + 0], 11, -358537222),
                        n = this.md5_hh(n, o, i, a, t[s + 3], 16, -722521979), a = this.md5_hh(a, n, o, i, t[s + 6], 23, 76029189),
                        i = this.md5_hh(i, a, n, o, t[s + 9], 4, -640364487), o = this.md5_hh(o, i, a, n, t[s + 12], 11, -421815835),
                        n = this.md5_hh(n, o, i, a, t[s + 15], 16, 530742520), a = this.md5_hh(a, n, o, i, t[s + 2], 23, -995338651),
                        i = this.md5_ii(i, a, n, o, t[s + 0], 6, -198630844), o = this.md5_ii(o, i, a, n, t[s + 7], 10, 1126891415),
                        n = this.md5_ii(n, o, i, a, t[s + 14], 15, -1416354905), a = this.md5_ii(a, n, o, i, t[s + 5], 21, -57434055),
                        i = this.md5_ii(i, a, n, o, t[s + 12], 6, 1700485571), o = this.md5_ii(o, i, a, n, t[s + 3], 10, -1894986606),
                        n = this.md5_ii(n, o, i, a, t[s + 10], 15, -1051523), a = this.md5_ii(a, n, o, i, t[s + 1], 21, -2054922799),
                        i = this.md5_ii(i, a, n, o, t[s + 8], 6, 1873313359), o = this.md5_ii(o, i, a, n, t[s + 15], 10, -30611744),
                        n = this.md5_ii(n, o, i, a, t[s + 6], 15, -1560198380), a = this.md5_ii(a, n, o, i, t[s + 13], 21, 1309151649),
                        i = this.md5_ii(i, a, n, o, t[s + 4], 6, -145523070), o = this.md5_ii(o, i, a, n, t[s + 11], 10, -1120210379),
                        n = this.md5_ii(n, o, i, a, t[s + 2], 15, 718787259), a = this.md5_ii(a, n, o, i, t[s + 9], 21, -343485551),
                        i = this.safe_add(i, r), a = this.safe_add(a, h), n = this.safe_add(n, l), o = this.safe_add(o, d);
                }
                return Array(i, a, n, o);
            }, t.md5_cmn = function(t, e, i, a, n, o) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(a, o)), n), i);
            }, t.md5_ff = function(t, e, i, a, n, o, s) {
                return this.md5_cmn(e & i | ~e & a, t, e, n, o, s);
            }, t.md5_gg = function(t, e, i, a, n, o, s) {
                return this.md5_cmn(e & a | i & ~a, t, e, n, o, s);
            }, t.md5_hh = function(t, e, i, a, n, o, s) {
                return this.md5_cmn(e ^ i ^ a, t, e, n, o, s);
            }, t.md5_ii = function(t, e, i, a, n, o, s) {
                return this.md5_cmn(i ^ (e | ~a), t, e, n, o, s);
            }, t.core_hmac_md5 = function(t, e) {
                var i = this.str2binl(t);
                i.length > 16 && (i = this.core_md5(i, t.length * this.chrsz));
                for (var a = Array(16), n = Array(16), o = 0; 16 > o; o++) a[o] = 909522486 ^ i[o],
                    n[o] = 1549556828 ^ i[o];
                var s = this.core_md5(a.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
                return this.core_md5(n.concat(s), 640);
            }, t.safe_add = function(t, e) {
                var i = (65535 & t) + (65535 & e),
                    a = (t >> 16) + (e >> 16) + (i >> 16);
                return a << 16 | 65535 & i;
            }, t.bit_rol = function(t, e) {
                return t << e | t >>> 32 - e;
            }, t.str2binl = function(t) {
                for (var e = Array(), i = (1 << this.chrsz) - 1, a = 0; a < t.length * this.chrsz; a += this.chrsz) e[a >> 5] |= (t.charCodeAt(a / this.chrsz) & i) << a % 32;
                return e;
            }, t.binl2str = function(t) {
                for (var e = "", i = (1 << this.chrsz) - 1, a = 0; a < 32 * t.length; a += this.chrsz) e += String.fromCharCode(t[a >> 5] >>> a % 32 & i);
                return e;
            }, t.binl2hex = function(t) {
                for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0; a < 4 * t.length; a++) i += e.charAt(t[a >> 2] >> a % 4 * 8 + 4 & 15) + e.charAt(t[a >> 2] >> a % 4 * 8 & 15);
                return i;
            }, t.binl2b64 = function(t) {
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", a = 0; a < 4 * t.length; a += 3)
                    for (var n = (t[a >> 2] >> 8 * (a % 4) & 255) << 16 | (t[a + 1 >> 2] >> 8 * ((a + 1) % 4) & 255) << 8 | t[a + 2 >> 2] >> 8 * ((a + 2) % 4) & 255, o = 0; 4 > o; o++) i += 8 * a + 6 * o > 32 * t.length ? this.b64pad : e.charAt(n >> 6 * (3 - o) & 63);
                return i;
            }, t.hexcase = 0, t.b64pad = "", t.chrsz = 8, t;
        }();
        i["default"] = a;
    }, {}],
    22: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../comp/JumpPlatform"),
            n = t("../comp/Bike"),
            o = t("../comp/Barrier"),
            s = t("../comp/Arrow"),
            r = t("../LayaSample"),
            h = t("../comp/AiBike"),
            l = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.jumpPlatforms = [], e.barriers = [], e.arrows = [], e.roads = [], e.bikeComps = [],
                        e.offset = 0, e.constructsArray = [], e.loadEasyModels(), e.loadModels(), e.loadConstruct(),
                        e;
                }
                return __extends(e, t), e.prototype.init = function(t) {
                    this.scene = t, this.bikeComp = t.getChildByName("Role").getComponent(n["default"]),
                        this.bikeComps.push(this.bikeComp), this.bikeComps.push(t.getChildByName("AI").getComponent(h["default"])),
                        this.bikeComps.push(t.getChildByName("AI_2").getComponent(h["default"])), r["default"].commonData.bikeComps = this.bikeComps;
                    var e = Laya.loader.getRes("res/models/Conventional/ModelScene.lh"),
                        i = e.getChildByName("Model");
                    this.jp_hig = i.getChildByName("Ramp_Hig"), this.jp_mid = i.getChildByName("Ramp_Mid"),
                        this.jp_low = i.getChildByName("Ramp_Low"), this.jp_hig_acce = i.getChildByName("Ramp_Hig_Acce"),
                        this.jp_mid_acce = i.getChildByName("Ramp_Mid_Acce"), this.jp_low_acce = i.getChildByName("Ramp_Low_Acce"),
                        this.barrier = i.getChildByName("Barrier"), this.arrow = i.getChildByName("AcceArrow"),
                        this.constructsPrefab = e.getChildByName("Construct"), this.setSkins();
                }, e.prototype.setSkins = function() {
                    var t = Laya.loader.getRes("res/skinList_V1/Conventional/ModelScene.lh");
                    t && (this.skins = t.getChildAt(0));
                }, e.prototype.createJumpPlatform = function(t, e) {
                    var i = Laya.Pool.getItemByCreateFun(t, function() {
                        switch (t) {
                            case "jp_low":
                                return Laya.Sprite3D.instantiate(this.jp_low);

                            case "jp_mid":
                                return Laya.Sprite3D.instantiate(this.jp_mid);

                            case "jp_hig":
                                return Laya.Sprite3D.instantiate(this.jp_hig);

                            case "jp_low_acce":
                                return Laya.Sprite3D.instantiate(this.jp_low_acce);

                            case "jp_mid_acce":
                                return Laya.Sprite3D.instantiate(this.jp_mid_acce);

                            case "jp_hig_acce":
                                return Laya.Sprite3D.instantiate(this.jp_hig_acce);
                        }
                    }, this);
                    i.name = t, this.scene.addChild(i), i.transform.position = new Laya.Vector3(Number(e.x), Number(e.y), Number(e.z) + this.offset);
                    var n = i.getComponent(a["default"]);
                    n || (n = i.addComponent(a["default"])), n.init(t, this.bikeComps), this.jumpPlatforms.push(i);
                }, e.prototype.createBarrier = function(t) {
                    var e = Laya.Pool.getItemByCreateFun("barrier", function() {
                        return Laya.Sprite3D.instantiate(this.barrier);
                    }, this);
                    this.scene.addChild(e), e.transform.position = new Laya.Vector3(Number(t.x), Number(t.y), Number(t.z) + this.offset);
                    var i = e.getComponent(o["default"]);
                    i || (i = e.addComponent(o["default"])), i.init(this.bikeComps), this.barriers.push(e);
                }, e.prototype.createAcceArrow = function(t) {
                    var e = Laya.Pool.getItemByCreateFun("arrow", function() {
                        return Laya.Sprite3D.instantiate(this.arrow);
                    }, this);
                    this.scene.addChild(e), e.transform.position = new Laya.Vector3(Number(t.x), Number(t.y), Number(t.z) + this.offset);
                    var i = e.getComponent(s["default"]);
                    i || (i = e.addComponent(s["default"])), i.init(this.bikeComps), this.arrows.push(e);
                }, e.prototype.createRoad = function(t, e, i, a) {
                    var n = Laya.Pool.getItemByCreateFun("road", function() {
                        return Laya.Sprite3D.instantiate(e);
                    });
                    this.scene.addChild(n);
                    var o = e.transform.position.clone();
                    n.transform.position = new Laya.Vector3(o.x, o.y, o.z + i * a), this.roads.push(n);
                }, e.prototype.recoverRoad = function() {
                    for (var t = 0; t < this.roads.length; t++) {
                        var e = this.roads[t];
                        Laya.Pool.recover("road", e), this.scene.removeChild(e);
                    }
                }, e.prototype.recoverAll = function() {
                    this.recoverRoad(), this.clearConstructs(), this.recoverAllModels();
                }, e.prototype.recoverAllModels = function() {
                    for (var t = 0; t < this.arrows.length; t++) {
                        var e = this.arrows[t];
                        Laya.Pool.recover("arrow", e), this.scene.removeChild(e);
                    }
                    for (var t = 0; t < this.barriers.length; t++) {
                        var e = this.barriers[t];
                        Laya.Pool.recover("barrier", e), this.scene.removeChild(e);
                    }
                    for (var t = 0; t < this.jumpPlatforms.length; t++) {
                        var e = this.jumpPlatforms[t];
                        Laya.Pool.recover(e.name, e), this.scene.removeChild(e);
                    }
                }, e.prototype.random = function() {
                    var t = Math.floor(1e3 * Math.random() % 13.45);
                    return Math.random() > .5 ? t : -t;
                }, e.prototype.loadEasyModels = function() {
                    Laya.loader.load("jsonConfig/EasyModelsConfig.json", Laya.Handler.create(this, function() {
                        this.easyModels = Laya.Loader.getRes("jsonConfig/EasyModelsConfig.json");
                    }), null, Laya.Loader.JSON);
                }, e.prototype.loadModels = function() {
                    Laya.loader.load("jsonConfig/ModelsConfig.json", Laya.Handler.create(this, function() {
                        this.models = Laya.Loader.getRes("jsonConfig/ModelsConfig.json");
                    }), null, Laya.Loader.JSON);
                }, e.prototype.loadConstruct = function() {
                    Laya.loader.load("jsonConfig/ConstructConfig.json", Laya.Handler.create(this, function() {
                        this.constructs = Laya.Loader.getRes("jsonConfig/ConstructConfig.json");
                    }), null, Laya.Loader.JSON);
                }, e.prototype.createModels = function(t) {
                    var e = this;
                    this.offset = 0;
                    for (var i = 0; 4 > i; i++) {
                        var a = this.easyModels[i];
                        this.offset += 26.9 * (i + 1), a.models.forEach(function(t) {
                            e.createModel(t);
                        });
                    }
                }, e.prototype.randomCreateEasyModels = function(t) {
                    var e = this;
                    this.offset = t;
                    var i = Math.floor(100 * Math.random() % this.easyModels.length),
                        a = this.models[i];
                    a.models.forEach(function(t) {
                        e.createModel(t);
                    });
                }, e.prototype.randomCreateModels = function(t) {
                    var e = this;
                    this.offset = t;
                    var i = Math.floor(100 * Math.random() % this.models.length),
                        a = this.models[i];
                    a.models.forEach(function(t) {
                        e.createModel(t);
                    });
                }, e.prototype.randomCreateConstructs = function(t) {
                    var e = this;
                    this.offset = t;
                    var i = Math.floor(100 * Math.random() % this.constructs.length),
                        a = this.constructs[i];
                    a.models.forEach(function(t) {
                        e.createConstruct(t);
                    });
                }, e.prototype.createModel = function(t) {
                    switch (t.name) {
                        case "Ramp_Low":
                            this.createJumpPlatform("jp_low", t.position);
                            break;

                        case "Ramp_Mid":
                            this.createJumpPlatform("jp_mid", t.position);
                            break;

                        case "Ramp_Hig":
                            this.createJumpPlatform("jp_hig", t.position);
                            break;

                        case "Ramp_Low_Acce":
                            this.createJumpPlatform("jp_low_acce", t.position);
                            break;

                        case "Ramp_Mid_Acce":
                            this.createJumpPlatform("jp_mid_acce", t.position);
                            break;

                        case "Ramp_Hig_Acce":
                            this.createJumpPlatform("jp_hig_acce", t.position);
                            break;

                        case "Barrier":
                            this.createBarrier(t.position);
                            break;

                        case "AcceArrow":
                            this.createAcceArrow(t.position);
                    }
                }, e.prototype.createConstruct = function(t) {
                    var e = this.constructsPrefab.getChildByName(t.name),
                        i = Laya.Sprite3D.instantiate(e);
                    this.scene.addChild(i), i.transform.position = new Laya.Vector3(Number(t.position.x), 0, Number(t.position.z) + this.offset),
                        t.position.x < 0 ? (i.transform.rotationEuler = new Laya.Vector3(0, -90, 0), i.transform.scale = new Laya.Vector3(-1, 1, 1)) : (i.transform.rotationEuler = new Laya.Vector3(0, 90, 0),
                            i.transform.scale = new Laya.Vector3(1, 1, 1)), this.constructsArray.push(i);
                }, e.prototype.clearConstructs = function() {
                    this.constructsArray.forEach(function(t) {
                        t.destroy();
                    }), this.constructsArray = [];
                }, e.prototype.getSkinByIndex = function(t) {
                    if (!(0 > t || t > 4)) {
                        var e = this.skins.getChildByName("RoleMatList"),
                            i = this.skins.getChildByName("BikeMatList"),
                            a = this.skins.getChildByName("Effect").clone(),
                            n = this.skins.getChildByName("RoleList");
                        if (0 == t) var o = n.getChildAt(0).clone();
                        else var o = n.getChildAt(1).clone();
                        var s = null,
                            r = null,
                            h = null;
                        if (t > 1) {
                            switch (t) {
                                case 2:
                                    s = this.skins.getChildByName("HelmetList").getChildAt(0).clone(), r = o.getChildAt(0).getChildAt(0);
                                    break;

                                case 3:
                                    s = this.skins.getChildByName("HelmetList").getChildAt(1).clone(), r = o.getChildAt(0).getChildAt(0);
                                    break;

                                case 4:
                                    s = this.skins.getChildByName("HelmetList").getChildAt(2).clone(), r = o.getChildAt(0).getChildAt(0);
                            }
                            o.getChildAt(0).addChild(s), s.transform.position = r.transform.position.clone(),
                                h = o.getChildAt(0).getComponent(Laya.Animator), h.unLinkSprite3DToAvatarNode(r),
                                h.linkSprite3DToAvatarNode("tk", s), r.active = !1;
                            var l = o.getChildAt(0);
                            l.getChildAt(1).skinnedMeshRenderer.material = e.meshRenderer.materials[t], l.getChildAt(2).skinnedMeshRenderer.material = i.meshRenderer.materials[t];
                        }
                        return o.addChild(a), a.transform.localPosition = new Laya.Vector3(0, -.689, -.206),
                            o;
                    }
                }, e.prototype.changeRole = function(t) {
                    this.bikeComps.length > 2 && this.bikeComps.splice(this.bikeComps.indexOf(this.bikeComp), 1),
                        this.bikeComp = t, this.bikeComps.push(t);
                }, e;
            }(Laya.Script3D);
        i["default"] = l;
        (function() {
            function t() {}
            return t;
        })(),
        function() {
            function t() {}
            return t;
        }(),
        function() {
            function t() {}
            return t;
        }();
    }, {
        "../LayaSample": 3,
        "../comp/AiBike": 5,
        "../comp/Arrow": 6,
        "../comp/Barrier": 7,
        "../comp/Bike": 8,
        "../comp/JumpPlatform": 10
    }],
    23: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._appCount = -1, e._appIndex = 0, e.repeatX = 0, e;
                }
                return __extends(e, t), e.prototype.onStart = function() {
                    this.initData(), this.initUI(), this.setBanner(), this.setPanelBottom(), this.initEvent(),
                        Laya.timer.loop(3e3, this, this.nextBanner);
                }, e.prototype.initData = function() {
                    this.data = a["default"].wxMgr.getWxappList(this.category), this._appCount = this.data.length;
                }, e.prototype.initUI = function() {
                    this.banner.visible = !1;
                }, e.prototype.initEvent = function() {
                    a["default"].utils.addClickEvent(this.banner, this, this.onBannerClick, 14), a["default"].glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.onDisable = function() {
                    Laya.timer.clear(this, this.nextBanner), a["default"].glEvent.off("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.setBanner = function() {
                    var t = this.banner;
                    if (this._appCount > 0) {
                        var e = this.data[this._appIndex];
                        t.skin = e.app_img, t.appid = e.app_id;
                    }
                    t.visible = !a["default"].commonData.existBannerAd && !a["default"].commonData.isNoAds && this._appCount > 0;
                }, e.prototype.nextBanner = function() {
                    var t = this._appIndex;
                    t++, t >= this._appCount && (t = 0), this._appIndex = t, this.setBanner();
                }, e.prototype.onAdLoadEvent = function(t) {
                    "banner" == t.adtype && (this.setBanner(), this.setPanelBottom());
                }, e.prototype.setPanelBottom = function() {
                    if (this.panel && !a["default"].commonData.existBannerAd && this._appCount > 0) {
                        this.panel.bottom = this.banner.height;
                        var t = a["default"].commonData.wxsysInfo;
                        t && t.model.startsWith("iPhone X") && (this.panel.bottom = this.banner.height + 40);
                    }
                }, e.prototype.onBannerClick = function(t) {
                    var e = t.target.appid;
                    e && "" != e ? a["default"].wxMgr.openOtherApp(e, this.category) : console.log("appid error.");
                }, e;
            }(Laya.Script);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    24: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.icon = null, e.initItem(), e;
            }
            return __extends(e, t), e.prototype.onDisable = function() {}, e.prototype.initItem = function() {
                if (!e.appPrefab) return void console.error("app prefab is null");
                var t = Laya.Pool.getItemByCreateFun("appItem", e.appPrefab.create, e.appPrefab);
                this.icon = t.getChildByName("icon"), this.icon.width = e.appWidth, this.icon.height = e.appHeight,
                    t.size(e.appWidth, e.appHeight), this.addChild(t);
            }, e.prototype.setItemInfo = function(t) {
                null != t && (this.icon.loadImage(t.app_img), this.appId = t.app_id);
            }, e.appWidth = 128, e.appHeight = 128, e;
        }(Laya.Box);
        i["default"] = a;
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AppItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.appCount = -1, e.needClearTimer = !1, e.ind = 0, e.prevInd = 0, e.renderCount = 4,
                        e.speed = 3e3, e;
                }
                return __extends(e, t), e.prototype.closeComp = function() {
                    Laya.timer.clearAll(this), this.panel.visible = !1, console.log("hide---"), this.isHide = !0;
                }, e.prototype.onDisable = function() {
                    Laya.timer.clearAll(this), this.panel.visible = !1, console.log("hide---");
                }, e.prototype.onStart = function() {
                    this.isHide || (this.initData(), this.initUI(), this.initList());
                }, e.prototype.initUI = function() {
                    var t = 0 != this.appCount;
                    this.list.visible = t, this.panel.visible = t;
                }, e.prototype.initData = function() {
                    if (a["default"].appWidth = this.appWidth, a["default"].appHeight = this.appHeight,
                        a["default"].appPrefab = this.appPrefab, this.data = n["default"].wxMgr.getWxappList(this.category),
                        this.appCount = this.data.length, !(this.appCount <= 6)) {
                        var t = 0,
                            e = 0;
                        for (t = 0; t < this.appCount; ++t) e += this.data[t].weight;
                        var i = [],
                            o = 0;
                        for (t = 0; t < this.appCount; ++t) o += this.data[t].weight, i[t] = {}, i[t].index = t,
                            i[t].weight = o / e;
                        for (var s = [], r = 0, h = !1, l = 0, d = 0; d < this.appCount; ++d) {
                            for (r = Math.random() * i[i.length - 1].weight, h = !1, t = 0; t < i.length; ++t) !h && r <= i[t].weight && (h = !0,
                                    s.push(this.data[i[t].index]), t + 1 < i.length && (l = i[t + 1].weight - i[t].weight)),
                                h && t + 1 < i.length && (i[t + 1].weight -= l, i[t] = i[t + 1]);
                            i.length -= 1;
                        }
                        this.data = s;
                    }
                }, e.prototype.getData = function(t, e) {
                    for (var i = 0; i < t.length; ++i) e > t[i];
                }, e.prototype.initList = function() {
                    var t = this.list;
                    null != t && (t.itemRender = a["default"], t.vScrollBarSkin = "", t.selectEnable = !0,
                        t.renderHandler = new Laya.Handler(this, this.updateItem), t.mouseHandler = new Laya.Handler(this, this.onSelect),
                        this.renderCount = t.repeatX * t.repeatY), t.array = this.data, 1 == this.category && Laya.timer.once(1e3, this, this.moveList);
                }, e.prototype.moveList = function() {
                    if (this.needClearTimer = !1, this.list) {
                        var t = (this.list.array.length + 2) / 3;
                        if (3 > t) return;
                        var e = 3 * t - 6;
                        this.list.tweenTo(e, 3e3 * (e - this.list.startIndex - 1), new Laya.Handler(this, this.moveList1));
                    }
                }, e.prototype.moveList1 = function() {
                    var t = (this.list.array.length + 2) / 3;
                    if (!(3 > t)) {
                        var e = 3 * t - 6;
                        this.list.tweenTo(0, 3e3 * e, new Laya.Handler(this, this.moveList));
                    }
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t, e) {
                    if (!(0 > e)) {
                        if ("mouseup" == t.type) {
                            var i = this.list.getItem(e);
                            null != i && n["default"].wxMgr.openOtherApp(i.app_id, i.category);
                        }
                        1 == this.category && (this.needClearTimer && Laya.timer.clear(this, this.moveList),
                                this.needClearTimer = !0, this.list.startIndex < 3 ? Laya.timer.once(1e3, this, this.moveList) : Laya.timer.once(1e3, this, this.moveList1)),
                            this.list.selectedIndex = -1;
                    }
                }, e.prototype._setData = function(t) {
                    this.ind = 0, null != this.panel && (null == this.data || 0 == this.data.length ? this.panel.visible = !1 : this.panel.visible = !0),
                        this.list.array = this.data, this.data.length > this.renderCount && Laya.timer.frameOnce(1, this, this._tweenToNext);
                }, e.prototype._tweenToNext = function() {
                    Laya.timer.clearAll(this), this.ind = Math.max(this.list.repeatY, this.list.startIndex),
                        this.ind == this.prevInd && (this.ind += this.list.repeatY), this.ind > this.appCount && (this.list.scrollTo(0),
                            this.ind = this.list.repeatY), this.prevInd = this.ind, this.list.tweenTo(this.ind, this.speed - 10),
                        Laya.timer.once(this.speed, this, this._tweenToNext);
                }, e.prototype._copyEndDataToStart = function(t) {
                    if (this.appCount = t.length, t.length > this.renderCount)
                        for (var e = 0; e < this.renderCount; e++) {
                            var i = t[t.length - e - 1];
                            t.unshift(i);
                        }
                }, e;
            }(Laya.Script);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./AppItem": 24
    }],
    26: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.size(e.width, e.height), e.initUI(), e;
            }
            return __extends(e, t), e.prototype.initUI = function() {
                var t = Laya.loader.getRes("prefab/rankItem.json"),
                    e = Laya.Pool.getItemByCreateFun("rankItem", t.create, t);
                this.imgBg = e.getChildByName("bg"), this.lblName = e.getChildByName("lblName"),
                    this.lblScore = e.getChildByName("lblScore"), this.lblRank = e.getChildByName("lblRank"),
                    this.imgAvatar = e.getChildByName("avatar"), this.addChild(e);
            }, e.prototype.setRankItem = function(t) {
                var e = t.user_nickname.length > 6 ? t.user_nickname.substr(0, 8) : t.user_nickname;
                this.lblName.text = "" != e ? e : "神秘玩家";
                var i = 28,
                    a = t.rank;
                0 == t.rank && (i = 24, a = "未上榜"), this.lblRank.fontSize = i, this.lblRank.text = a,
                    this.lblScore.text = t.score;
                var n = "" != t.avatar ? t.avatar : "ui/rank/avater_default.png";
                this.imgBg.loadImage(t.bgUrl), this.imgAvatar.loadImage(n);
            }, e;
        }(Laya.Box);
        i["default"] = a;
    }, {}],
    27: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AppItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.repeatX = 0, e.appCount = -1, e;
                }
                return __extends(e, t), e.prototype.onStart = function() {
                    n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd(), this.initUI(),
                        this.initEvent();
                }, e.prototype.initUI = function() {
                    var t = this.owner.getChildByName("bottomPanel");
                    t && (t.bottom = 60), this.view = this.owner;
                }, e.prototype.initEvent = function() {
                    n["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick, 14),
                        n["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick, 14);
                }, e.prototype.initData = function() {
                    a["default"].appWidth = this.appWidth, a["default"].appHeight = this.appHeight,
                        a["default"].appPrefab = this.appPrefab, this.data = n["default"].wxMgr.getWxappList(this.category),
                        this.appCount = this.data.length;
                }, e.prototype.initList = function() {
                    var t = this.list;
                    null != t && (t.itemRender = a["default"], t.vScrollBarSkin = "", t.selectEnable = !0,
                        t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                        this.repeatX = t.repeatX, this.appCount > 0 && (t.array = this.data, n["default"].commonData.isNoAds = !0,
                            n["default"].adMgr.hideBannerAd()));
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t) {
                    if (!(0 > t)) {
                        var e = this.list.getItem(t);
                        null != e && n["default"].wxMgr.openOtherApp(e.app_id, e.category), this.list.selectedIndex = -1;
                    }
                }, e.prototype.onPlayGameClick = function() {
                    this.view.close(), n["default"].glEvent.event("init_game_event", {
                        isPlay: !1
                    }), n["default"].glEvent.event("play_game_event");
                }, e.prototype.onBackClick = function() {
                    var t = this;
                    Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function(e) {
                        t.view.close(), n["default"].commonData.isNoAds = !0;
                    }));
                }, e;
            }(Laya.Script);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./AppItem": 24
    }],
    28: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.needClearTimer = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.initList();
                }, e.prototype.onEnable = function() {}, e.prototype.initList = function() {
                    this.list.array = [], this.list.renderHandler = new Laya.Handler(this, this.onRender),
                        this.list.mouseHandler = new Laya.Handler(this, this.onMouseHandler), this.list.hScrollBarSkin = "";
                    var t = a["default"].commonData.wxappList[0];
                    return !t || t.length < 1 ? void(this.panel.visible = !1) : (this.panel.visible = !0,
                        this.adData = t, this.list.array = t, void Laya.timer.once(500, this, this.moveList));
                }, e.prototype.moveList = function() {
                    this.needClearTimer = !1, this.list.tweenTo(4, 12e3, new Laya.Handler(this, this.moveList1));
                }, e.prototype.moveList1 = function() {
                    this.list.tweenTo(0, 12e3, new Laya.Handler(this, this.moveList));
                }, e.prototype.onRender = function(t, e) {
                    var i = t.getChildAt(0);
                    i.skin = this.adData[e].app_img;
                }, e.prototype.onMouseHandler = function(t, e) {
                    if ("mouseup" == t.type) {
                        var i = this.adData[e];
                        this.btnSkipMiniGame(i.app_id);
                    }
                    this.needClearTimer && Laya.timer.clear(this, this.moveList), this.needClearTimer = !0,
                        this.list.startIndex < 3 ? Laya.timer.once(200, this, this.moveList) : Laya.timer.once(200, this, this.moveList1);
                }, e.prototype.btnSkipMiniGame = function(t) {
                    a["default"].wxMgr.openOtherApp(t, 0);
                }, e.prototype.onDisable = function() {}, e;
            }(Laya.Script);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    29: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.icon = null, e.getTypeTag = null, e.initItem(), e;
            }
            return __extends(e, t), e.prototype.onDisable = function() {}, e.prototype.initItem = function() {
                    if (!e.itemPrefab) return void console.error("app prefab is null");
                    var t = Laya.Pool.getItemByCreateFun("SkinItem", e.itemPrefab.create, e.itemPrefab);
                    this.icon = t.getChildByName("skinIcon"), this.getTypeTag = t.getChildByName("typeTag"),
                        this.icon.size(e.iconWidth, e.iconHeight), this.icon.pos(e.iconOffset.x, e.iconOffset.y),
                        t.size(e.itemWidth, e.itemHeight), this.addChild(t);
                }, e.prototype.setItemInfo = function(t) {
                    null != t && (this.icon.skin = t.iconPath, this.getTypeTag.skin = t.tagPath);
                }, e.itemWidth = 128, e.itemHeight = 128, e.itemPrefab = null, e.iconWidth = 150,
                e.iconHeight = 157.5, e.iconOffset = Laya.Vector2.ZERO, e;
        }(Laya.Box);
        i["default"] = a;
    }, {}],
    30: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../LayaSample"),
            n = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._maxBottom = 264, e._minBottom = 60, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.initData(), this.initUI(), this.initEvent(), Laya.Browser.onWeiXin && (this.initSize(this),
                            "views/login.scene" != this.url && "views/game.scene" != this.url && (Laya.timer.clear(this, this.refreshBannerAd),
                                Laya.timer.loop(a["default"].commonData.adTime, this, this.refreshBannerAd), this.refreshBannerAd())),
                        "views/login.scene" != this.url && "views/game.scene" != this.url && Laya.timer.loop(a["default"].commonData.adTime, this, this.loadBannerAd);
                }, e.prototype.onOpened = function(t) {
                    a["default"].commonData.existInterAd && (a["default"].commonData.isAdDelay ? ("views/home.scene" == this.url || "views/rank.scene" == this.url) && a["default"].adMgr.showInterstitialAd() : ("views/clearing.scene" == this.url || "views/rank.scene" == this.url) && a["default"].adMgr.showInterstitialAd());
                }, e.prototype.onClosed = function() {
                    Laya.timer.clearAll(this), a["default"].glEvent.offAllCaller(this);
                }, e.prototype.initData = function() {
                    this._isOpen = !0;
                }, e.prototype.initUI = function() {}, e.prototype.initEvent = function() {
                    a["default"].glEvent.on("ad_load_event", this, this.onLoadAdEvent), a["default"].glEvent.on("ad_show_event", this, this.onShowAdEvent),
                        a["default"].glEvent.on("wx_sleep_event", this, this.onWxSleepEvent), a["default"].glEvent.on("wx_wake_event", this, this.onWxWakeEvent);
                }, e.prototype.onWxWakeEvent = function() {
                    a["default"].soundMgr.play("bgm");
                }, e.prototype.onWxSleepEvent = function() {}, e.prototype.getChild = function(t, e) {
                    return e || (e = this), e.getChildByName(t);
                }, e.prototype.initSize = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        t.height = Laya.stage.height;
                        for (var e = a["default"].screen.offsetTop, i = a["default"].screen.realPxRatio, n = a["default"].commonData.wxsysInfo, o = 0, s = 0; s < t._children.length; s++) {
                            var r = t._children[s],
                                h = r.y + e;
                            if ("topPanel" == r.name) {
                                h = n.statusBarHeight >= 30 && a["default"].screen.allScreen ? n.statusBarHeight * i : 30;
                                var l = r.getChildByName("collectHand");
                                l && (l.visible = !a["default"].storageMgr.isCollect(), a["default"].tweenMgr.toPosition(l, new Laya.Vector3(300, 0), 1e3, !0));
                            }
                            r.y = h, ("bottomPanel" == r.name || "bottomui" == r.name) && (o = a["default"].commonData.isAdDelay && "bottomPanel" == r.name ? this._minBottom : this._maxBottom,
                                n && n.model.startsWith("iPhone X") && (o += 40), r.bottom = o);
                        }
                    }
                }, e.prototype.refreshBannerAd = function() {
                    "views/home.scene" != this.url ? (this.resetBannerAd(), a["default"].adMgr.setBannerItem()) : this._isOpen || a["default"].adMgr.setBannerItem(),
                        a["default"].adMgr.getBannerItem() || a["default"].adMgr.setBannerItem(), this._isOpen = !1,
                        a["default"].adMgr.hideBannerAd(), a["default"].commonData.isAdDelay ? (Laya.timer.clear(this, this.reappearBannerAd),
                            Laya.timer.once(a["default"].commonData.latencyTime, this, this.reappearBannerAd)) : this.reappearBannerAd();
                }, e.prototype.reappearBannerAd = function() {
                    this.tweenAd(), a["default"].adMgr.showBannerAd();
                }, e.prototype.loadBannerAd = function() {
                    this._loadBanner < 3 ? this._loadBanner++ : 3 == this._loadBanner && (this._loadBanner++,
                            Laya.timer.clear(this, this.loadBannerAd), Laya.timer.loop(a["default"].commonData.adTime, this, this.loadBannerAd)),
                        a["default"].adMgr.getBannerAd();
                }, e.prototype.resetBannerAd = function() {
                    var t = a["default"].adMgr.getBannerItem();
                    if (t) {
                        var e = t.width,
                            i = (t.height, Laya.Browser.clientWidth);
                        e != i && (this._isResizeAd = !0, a["default"].adMgr.setBannerAdWidth(i));
                    }
                }, e.prototype.tweenAd = function() {
                    var t = a["default"].adMgr.getBannerItem();
                    if (t)
                        for (var e = (t.width, t.height), i = a["default"].screen.realPxRatio, n = Math.floor(e * i), o = 0; o < this._children.length; ++o) {
                            var s = this._children[o];
                            if ("bottomPanel" == s.name && e && s.bottom < n && Laya.Tween.to(s, {
                                    bottom: n
                                }, a["default"].commonData.moveTime, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {}), 0, !0),
                                "middlePanel" == s.name && e) {
                                var r = s.y + s.height + n;
                                r > Laya.stage.height && (s.y = s.y - (r - Laya.stage.height));
                            }
                        }
                }, e.prototype.onLoadAdEvent = function(t) {
                    switch (t.adtype) {
                        case "video":
                            !t.isLoad;
                            break;

                        case "banner":
                            t.isLoad;
                    }
                }, e.prototype.onShowAdEvent = function(t) {
                    this.tweenAd();
                }, e;
            }(Laya.Scene);
        i["default"] = n;
    }, {
        "../LayaSample": 3
    }],
    31: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t),
                    e.prototype.initData = function() {
                        n["default"].wxMgr.settlementLevel(n["default"].commonData.newScore);
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("bottomPanel");
                        this.btnBack = this.getChild("btnBack", t),
                            this.btnPlay = this.getChild("btnPlay", t);
                        var e = this.getChild("score");
                        this.fontScore = this.getChild("fontScore", e),
                            this.fontScore.value = n["default"].commonData.newScore;

                        this.lblScore = this.getChild("lblScore", e),
                            this.lblScore.text = platform.getInstance().getStorageSync("MaxScore");




                        var appList = this.getChildByName("appLite").getChildByName("appList");
                        console.log("appList,", appList);
                        // .getChildByName("appList");
                        appList.renderHandler = new Laya.Handler(this, this.onRenderHandler)
                        appList.array = platform.getInstance().getForgames();

                    },

                    e.prototype.onRenderHandler = function(box) {
                        box.offAll(Laya.Event.MOUSE_DOWN);
                        box.on(Laya.Event.MOUSE_DOWN, box, () => {
                            platform.getInstance().navigate("GAME", "MORE", box.dataSource.id)
                        });
                    },



                    e.prototype.initEvent = function() {
                        n["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick),
                            n["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick),
                            n["default"].glEvent.on("share_back_event", this, this.onShareBackEvent),
                            n["default"].glEvent.on("wx_wake_event", this, this.onWxWakeEvent),
                            n["default"].glEvent.on("show_applite_event", this, this.onWxWakeEvent);
                    }, e.prototype.onShareClick = function() {
                        n["default"].wxMgr.shareFriend(0, !0);
                    }, e.prototype.onPlayGameClick = function() {

                        platform.getInstance().showInterstitial(() => {
                            this.close(), n["default"].glEvent.event("init_game_event", {
                                    isPlay: !1
                                }),
                                n["default"].glEvent.event("play_game_event");
                        })

                    }, e.prototype.onBackClick = function() {
                        Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, this.onOpenView));
                        n["default"].glEvent.event("init_game_event", {
                            isPlay: !1
                        });
                    }, e.prototype.onOpenView = function(t) {
                        this.close(),
                            // this.showRank(!1),
                            this.initSize(t);
                    }, e.prototype.showRank = function(t) {
                        // n["default"].wxMgr.showLiteRank(t);
                    }, e.prototype.onWxWakeEvent = function() {
                        // var t = n["default"].wxMgr.getWxappList(3);
                        // t.length > 0 && Laya.Scene.open("views/wxapp.scene", !1, laya.utils.Handler.create(this, this.onOpenView));
                    }, e.prototype.onShareBackEvent = function(t) {
                        // t.isShare ? console.log("分享成功") : console.log("分享失败");
                    }, e;
            }(a["default"]);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./BaseView": 30
    }],
    32: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd(), t.prototype.onAwake.call(this);
                }, e.prototype.initUI = function() {
                    this.btnCancel = this.getChild("btnCancel");
                }, e.prototype.initEvent = function() {
                    n["default"].utils.addClickEvent(this.btnCancel, this, this.cancelClick);
                }, e.prototype.cancelClick = function() {
                    this.close(), n["default"].commonData.isNoAds = !1, n["default"].adMgr.showBannerAd();
                }, e;
            }(a["default"]);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./BaseView": 30
    }],
    33: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = t("../comp/CameraFollow"),
            s = t("../comp/Bike"),
            r = t("../comp/AiBike"),
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.speedFactor = .1, e.maxDis = 0, e.circleScore = 0, e.guideProcess = 0,
                        e;
                }
                return __extends(e, t), e.prototype.initData = function() {
                    n["default"].commonData.gameCount = 0, n["default"].commonData.isShowSkin = !0,
                        this.targetPos = new Laya.Vector3(), this.targetRot = new Laya.Vector3(), this.lerpPos = new Laya.Vector3(),
                        this.lerpRot = new Laya.Vector3(), this.loadScene(), this.setFog();
                }, e.prototype.initUI = function() {
                    var t = this.getChild("topPanel");
                    this.lbSpeed = this.getChild("lbSpeed", t), this.lbSpeed.text = "0km/h", this.lbLevel = this.getChild("lbLevel", t),
                        this.lbLevel.text = "0档", this.barSpeed = this.getChild("barSpeed", t), this.barSpeed.value = 0,
                        this.barSpeed.visible = !1, this.fontScore = this.getChild("fontScore", t), this.fontScore.value = "0",
                        this.circle = this.getChild("circle"), this.circle.alpha = 0, this.fontCircleNum = this.getChild("fontCircleNum", this.circle),
                        this.fontAddScore = this.getChild("fontAddScore", this.circle), this.guidePanel = this.getChild("guidePanel"),
                        this.sprGuide = this.getChild("sprGuide", this.guidePanel), n["default"].tweenMgr.toPosition(this.sprGuide, {
                            x: 569,
                            y: 1075
                        }, 1e3, !0), this.imgGuide = this.getChild("imgGuide", this.guidePanel), this.imgGuideRotate = this.getChild("imgGuideRotate"),
                        this.imgGuideRotate.visible = !1, this.visible = !1;
                    this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                        platform.getInstance().navigate("GAME", "LOGO");
                    })
                }, e.prototype.initEvent = function() {
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent),
                        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), n["default"].glEvent.on("update_speed_event", this, this.updateSpeedEvent),
                        n["default"].glEvent.on("init_game_event", this, this.initGameEvent), n["default"].glEvent.on("over_game_event", this, this.overGameEvent),
                        n["default"].glEvent.on("play_game_event", this, this.onPlayGameEvent), n["default"].glEvent.on("goon_game_event", this, this.onGoonGameEvent),
                        n["default"].glEvent.on("speed_up_event", this, this.updateSpeedBarEvent), n["default"].glEvent.on("circle_count_event", this, this.circleCountEvent),
                        n["default"].glEvent.on("change_skin_event", this, this.changeSkin);
                }, e.prototype.loadScene = function() {
                    var t = Laya.loader.getRes("res/scenes/Conventional/ModelScene.ls");
                    Laya.stage.addChild(t), Laya.stage.setChildIndex(t, 0), this.mainScene = t, this.bike = t.getChildByName("Role"),
                        this.targetPos = this.bike.transform.position.clone(), this.bikeComp = this.bike.addComponent(s["default"]),
                        this.enermy = t.getChildByName("AI"), this.enermyComp = this.enermy.addComponent(r["default"]),
                        this.enermy2 = t.getChildByName("AI_2"), this.enermy2Comp = this.enermy2.addComponent(r["default"]),
                        this.mainCamera = this.mainScene.getChildByName("Main Camera"), this.cameraComp = this.mainCamera.addComponent(o["default"]),
                        n["default"].modelCreator.init(t);
                    var e = t.getChildByName("Road_1");
                    this.roadNum = 1;
                    for (var i = 26.9, a = 3, h = 8, l = a; h > l; l++) n["default"].modelCreator.createRoad(this.bike, e, i, this.roadNum + l),
                        n["default"].modelCreator.randomCreateConstructs(i * (this.roadNum + l));
                    n["default"].commonData.needShowGuide && (n["default"].modelCreator.createModels(i),
                            this.enermy.active = !1, this.enermy2.active = !1, Laya.timer.frameLoop(1, this, this.newPlayGuide)),
                        Laya.timer.frameLoop(1, this, function() {
                            this.bike.transform.position.z > i * this.roadNum && (this.roadNum++, n["default"].modelCreator.createRoad(this.bike, e, i, this.roadNum + h - 1),
                                n["default"].modelCreator.randomCreateConstructs(i * (this.roadNum + h - 1)), this.roadNum % 2 != 0 || n["default"].commonData.needShowGuide || n["default"].modelCreator.randomCreateModels(i * (this.roadNum + a)));
                        });
                }, e.prototype.setFog = function() {
                    var t = this.mainScene;
                    t.enableFog = !0, t.fogColor = n["default"].utils.getRGB("#7BBDBD"), t.fogStart = 20,
                        t.fogRange = 80;
                }, e.prototype.onMouseDownEvent = function(t) {
                    n["default"].gameMgr.isPlay && !n["default"].gameMgr.isOver && (this.guidePanel.visible && 0 == this.guideProcess && this.showGuide(!1),
                        Laya.timer.clear(this, this.frameUpdateRolePos), Laya.timer.frameLoop(1, this, this.frameUpdateRolePos),
                        n["default"].gameMgr.isPressed = !0, this.originPosX = t.stageX);
                }, e.prototype.onMouseUpEvent = function() {
                    n["default"].commonData.needShowGuide && this.guideProcess > 0 && (n["default"].gameMgr.isPlay = !0,
                        this.imgGuideRotate.visible && (this.imgGuideRotate.visible = !1)), n["default"].gameMgr.isPressed = !1;
                }, e.prototype.onMouseMoveEvent = function(t) {
                    if (n["default"].gameMgr.isPressed) {
                        var e = 2.95;
                        if (t.stageX != this.originPosX) {
                            var i = this.bike.transform.position.clone(),
                                a = this.bike.transform.rotationEuler.clone(),
                                o = t.stageX - this.originPosX;
                            (o > 0 && this.maxDis < 0 || 0 > o && this.maxDis > 0) && (this.maxDis = 0), Math.abs(o) > Math.abs(this.maxDis) && (this.maxDis = o),
                                i.x -= .07 * this.maxDis * this.speedFactor, a.z += o / 20, i.x > e ? i.x = e : i.x < -e && (i.x = -e),
                                this.targetPos = i, this.bike.transform.rotationEuler = a, this.originPosX = t.stageX;
                        }
                    }
                }, e.prototype.frameUpdateRolePos = function() {
                    this.targetPos.setValue(this.targetPos.x, this.bike.transform.position.y, this.bike.transform.position.z),
                        Laya.Vector3.lerp(this.bike.transform.position, this.targetPos, .05, this.lerpPos),
                        this.bike.transform.position = this.lerpPos, this.targetRot.setValue(this.bike.transform.rotationEuler.x, this.targetRot.y, this.targetRot.z),
                        Laya.Vector3.lerp(this.bike.transform.rotationEuler, this.targetRot, .05, this.lerpRot),
                        this.bike.transform.rotationEuler = this.lerpRot, !n["default"].gameMgr.isPressed && Math.abs(this.lerpRot.z) < .01 && Laya.timer.clear(this, this.frameUpdateRolePos),
                        Math.abs(this.lerpPos.x - this.targetPos.x) < .01 && (this.maxDis = 0);
                }, e.prototype.updateSpeedEvent = function(t) {
                    this.speedFactor = t.speed / t.maxSpeed + .1, this.lbSpeed.text = t.speed.toFixed(2) + "km/h",
                        this.lbLevel.text = t.level + "档", this.fontScore.value = (this.bike.transform.position.z - 1 + this.circleScore).toFixed(0);
                }, e.prototype.initGameEvent = function(t) {
                    n["default"].commonData.needShowGuide ? (this.enermy.active = !1, this.enermy2.active = !1,
                            this.guidePanel.y = 0, this.guideProcess = 0, this.imgGuide.skin = "ui/common/font_guide.png",
                            Laya.timer.clear(this, this.newPlayGuide), Laya.timer.frameLoop(1, this, this.newPlayGuide),
                            this.sprGuide.x = 108, n["default"].tweenMgr.toPosition(this.sprGuide, {
                                x: 569,
                                y: 1075
                            }, 1e3, !0)) : (this.enermy.active = !0, this.enermy2.active = !0, n["default"].commonData.isShowSkin = !0),
                        this.roadNum = 1, this.bikeComp.init(), this.enermyComp.init(), this.enermy2Comp.init(),
                        this.lbLevel.text = "0档", this.lbSpeed.text = "0km/h", this.fontScore.value = "0",
                        this.circleScore = 0, this.visible = t.isPlay, this.showGuide(t.isPlay), n["default"].gameMgr.isPlay = t.isPlay,
                        n["default"].gameMgr.isOver = !1, this.targetPos = new Laya.Vector3(), this.targetRot = new Laya.Vector3(),
                        this.lerpPos = new Laya.Vector3(), this.lerpRot = new Laya.Vector3(), Laya.timer.once(800, this, function() {
                            n["default"].modelCreator.recoverAll();
                            for (var t = this.mainScene.getChildByName("Road_1"), e = 3; 8 > e; e++) n["default"].modelCreator.createRoad(this.bike, t, 26.9, this.roadNum + e),
                                n["default"].modelCreator.randomCreateConstructs(26.9 * (this.roadNum + e));
                            n["default"].commonData.needShowGuide && n["default"].modelCreator.createModels(26.9);
                        }), t.isPlay ? (n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd(),
                            n["default"].commonData.isShowSkin && (n["default"].storageMgr.isSkinTips() && n["default"].commonData.existVideoAd && n["default"].commonData.gameCount % 3 == 0 && Laya.Scene.open("views/freeSkin.scene", !1, {
                                isPlay: !0
                            }), n["default"].commonData.gameCount++)) : this.cameraComp.init();
                }, e.prototype.onPlayGameEvent = function() {
                    return n["default"].commonData.isShowSkin && n["default"].storageMgr.isSkinTips() && n["default"].commonData.existVideoAd && n["default"].commonData.gameCount % 3 == 0 ? void Laya.Scene.open("views/freeSkin.scene", !1) : void(n["default"].gameMgr.isPlay || (n["default"].commonData.gameCount++,
                        n["default"].commonData.isShowSkin = !0, this.cameraComp.startAnim(), n["default"].commonData.isNoAds = !0,
                        n["default"].adMgr.hideBannerAd(), n["default"].gameMgr.isPlay = !0, this.visible = !0,
                        this.showGuide(!0), this.mainCamera));
                }, e.prototype.showGuide = function(t) {
                    this.guidePanel.visible = t;
                }, e.prototype.onGoonGameEvent = function() {
                    n["default"].commonData.goonCount++, n["default"].gameMgr.isPlay || (n["default"].commonData.isNoAds = !0,
                            n["default"].adMgr.hideBannerAd(), n["default"].gameMgr.isPlay = !0, n["default"].gameMgr.isOver = !1,
                            this.visible = !0), this.targetPos = new Laya.Vector3(), this.targetRot = new Laya.Vector3(),
                        this.lerpPos = new Laya.Vector3(), this.lerpRot = new Laya.Vector3(), this.bikeComp.goonInit(),
                        n["default"].modelCreator.recoverAllModels();
                }, e.prototype.overGameEvent = function() {
                    n["default"].commonData.isNoAds = !1, this.barSpeed.visible = !1, n["default"].gameMgr.isOver = !0,
                        n["default"].gameMgr.isPlay = !1, n["default"].gameMgr.isPressed = !1, this.visible = !1,
                        n["default"].commonData.newScore = Number(this.fontScore.value), Laya.timer.once(800, this, function() {
                            n["default"].soundMgr.play("over"), Laya.timer.once(1e3, this, function() {
                                n["default"].commonData.goonCount > 0 ? (n["default"].commonData.goonCount = 0,
                                    Laya.Scene.open("views/clearing.scene", !1)) : Laya.Scene.open("views/over.scene", !1);
                            });
                        });
                }, e.prototype.updateSpeedBarEvent = function(t) {
                    if (0 != t.level) {
                        var e = this.barSpeed.getChildAt(1);
                        e.skin = "ui/common/speed_up_" + t.level + "$bar.png";
                    }
                    this.barSpeed.value = 1 - t.progress, this.barSpeed.visible = 1 != t.progress;
                }, e.prototype.circleCountEvent = function(t) {
                    n["default"].wxMgr.playVibrateShort();
                    var e = 200,
                        i = this.circle;
                    if (0 == t.circleNum && 0 != i.alpha) return n["default"].tweenMgr.fromScale(i, 1, e),
                        void n["default"].tweenMgr.toAlpha(i, 0, e, !1);
                    if (0 != t.circleNum) {
                        n["default"].commonData.needShowGuide && (console.log("指引松开手"), this.imgGuideRotate.visible = !0,
                                n["default"].gameMgr.isPlay = !1), i.alpha = 0, i.scaleX = 1, i.scaleY = 1, this.fontCircleNum.value = t.circleNum,
                            n["default"].tweenMgr.toAlpha(i, 1, e), n["default"].tweenMgr.toScale(i, 1.3, e, !1),
                            this.fontAddScore.y = -50, this.fontAddScore.alpha = 1;
                        var a = 50 * Math.pow(2, t.circleNum - 1);
                        this.circleScore += a, this.fontAddScore.value = "+" + a;
                        var o = 120;
                        n["default"].tweenMgr.toScale(this.fontAddScore, .8, o, !1), n["default"].tweenMgr.toPosition(this.fontAddScore, new Laya.Vector2(this.fontAddScore.x, this.fontAddScore.y - 80), o),
                            Laya.timer.once(o + 200, this, function() {
                                n["default"].tweenMgr.toPosition(this.fontAddScore, new Laya.Vector2(this.fontAddScore.x, this.fontAddScore.y - 70), o),
                                    n["default"].tweenMgr.toScale(this.fontAddScore, .6, o, !1), n["default"].tweenMgr.toAlpha(this.fontAddScore, 0, o);
                            });
                    }
                }, e.prototype.newPlayGuide = function() {
                    var t = this.bike.transform.position.z;
                    0 == this.guideProcess && t > 5 ? (console.log("指引右滑"), this.imgGuide.skin = "ui/common/font_guide_right.png",
                        this.guidePanel.y = -650, this.showGuide(!0), this.guideProcess = 1, this.sprGuide.x = 108,
                        n["default"].tweenMgr.toPosition(this.sprGuide, {
                            x: 569,
                            y: 1075
                        }, 1e3, !0, 1)) : 1 == this.guideProcess && t > 40 ? (console.log("指引左滑"), this.imgGuide.skin = "ui/common/font_guide_left.png",
                        this.showGuide(!0), this.guideProcess = 2, this.sprGuide.x = 569, n["default"].tweenMgr.toPosition(this.sprGuide, {
                            x: 108,
                            y: 1075
                        }, 1e3, !0, 1)) : t > 90 && 100 > t ? this.showGuide(!1) : 2 == this.guideProcess && t > 300 && (Laya.timer.clear(this, this.newPlayGuide),
                        n["default"].commonData.needShowGuide = !1, this.guideProcess = 0, this.guidePanel.y = 0,
                        this.imgGuide.skin = "ui/common/font_guide.png", this.sprGuide.x = 108, n["default"].tweenMgr.toPosition(this.sprGuide, {
                            x: 569,
                            y: 1075
                        }, 1e3, !0));
                }, e.prototype.changeSkin = function(t) {
                    var e = n["default"].modelCreator.getSkinByIndex(t.index);
                    if (e) {
                        this.bike && (this.bike.destroy(), this.mainScene.removeChild(this.bike)), this.bike = e,
                            this.mainScene.addChild(this.bike);
                        var i = e.getComponent(s["default"]);
                        i || (i = e.addComponent(s["default"])), this.bikeComp = i, this.bikeComp.init(),
                            this.cameraComp.changeRole(e), n["default"].modelCreator.changeRole(this.bikeComp);
                        var a = n["default"].configMgr.getSkinCfg();
                        a[t.index - 1];
                        t.isPlay ? this.onPlayGameEvent() : (n["default"].commonData.skinIncome = 0, n["default"].commonData.skinScore = 0);
                    }
                }, e;
            }(a["default"]);
        i["default"] = h;
    }, {
        "../LayaSample": 3,
        "../comp/AiBike": 5,
        "../comp/Bike": 8,
        "../comp/CameraFollow": 9,
        "./BaseView": 30
    }],
    34: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.soundSkin = "ui/common/btn_sound_", e.vibrateSkin = "ui/common/btn_vibrate_",
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), this.setWxapp(), this.setWxapp2();
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("topPanel"),
                            e = this.getChild("bottomui");
                        this.btnSound = this.getChild("btnSound", t), this.setSound(window.WebAudioEngine.pause),
                            this.btnPlay = this.getChild("btnPlay", e),


                            this.lblScore = this.getChild("lblScore", e),
                            this.lblScore.text = platform.getInstance().getStorageSync("MaxScore") || 0 + "";

                        // n["default"]

                        // this.btnRank = this.getChild("btnRank", e);

                        this.gameList = this.getChild("listBox").getChildByName("gameList");

                        this.gameList.renderHandler = new Laya.Handler(this, this.onListRender);
                        this.gameList.array = platform.getInstance().getForgames();

                        this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("HOME", "LOGO");
                        })
                    },

                    e.prototype.onListRender = function(box) {
                        box.offAll(Laya.Event.MOUSE_DOWN);
                        box.on(Laya.Event.MOUSE_DOWN, box, () => {
                            platform.getInstance().navigate("HOME", "MORE", box.dataSource.id)
                        });
                    },


                    e.prototype.initEvent = function() {

                        n["default"].utils.addClickEvent(this.btnSound, this, this.onSoundClick),
                            n["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick)
                    }, e.prototype.setSound = function(t) {
                        var e = t ? "off.png" : "on.png";
                        this.btnSound.skin = this.soundSkin + e, n["default"].storageMgr.setPlaySound(!t);
                        window.WebAudioEngine.pause = t
                        Laya.LocalStorage.setItem("Bike-Rush-musicState", JSON.stringify(window.WebAudioEngine.pause));
                    }, e.prototype.setVibrate = function(t) {}, e.prototype.onSoundClick = function() {
                        this.setSound(!window.WebAudioEngine.pause);
                    }, e.prototype.onVibrateClick = function() {
                        this.setVibrate(!n["default"].storageMgr.isPlayVibrate());
                    }, e.prototype.onPlayGameClick = function() {
                        platform.getInstance().showInterstitial(() => {
                            this.close(),
                                n["default"].glEvent.event("play_game_event");
                        })

                    }, e.prototype.onRankClick = function() {
                        var t = this,
                            e = {};
                        e.target = "views/home.scene", Laya.Scene.open("views/rank.scene", !1, e, Laya.Handler.create(this, function(e) {
                            t.close();
                        }));
                    }, e.prototype.onSvrviceClick = function() {
                        n["default"].wxMgr.openCustomerService();
                    }, e.prototype.onShareClick = function() {
                        n["default"].wxMgr.shareFriend(0, !1);
                    }, e.prototype.onWxgameClick = function(t) {
                        var e = t.target.appData.appid;
                        e && "" != e ? n["default"].wxMgr.openOtherApp(e, t.target.appData.category) : console.log("appid error.");
                    }, e.prototype.onCollectClick = function() {
                        Laya.Scene.open("views/collect.scene", !1);
                    }, e.prototype.setWxapp = function() {
                        var t = n["default"].wxMgr.getWxappList(0);
                        if (t) {
                            var e = t.length;
                            if (0 != e) {
                                var i = 0;
                                if (t[i]) {
                                    var a = {
                                        appid: t[i].app_id,
                                        category: 0
                                    };
                                    this.btnGameL.visible = !0, this.btnGameL.skin = t[i].app_img, this.btnGameL.appData = a;
                                    var o = 1;
                                    if (t[o]) {
                                        var s = {
                                            appid: t[o].app_id,
                                            category: 0
                                        };
                                        this.btnGameR.visible = !0, this.btnGameR.skin = t[o].app_img, this.btnGameR.appData = s;
                                        var r = Math.floor(2e3 * Math.random() + 2e3);
                                        Laya.timer.loop(r, this, function() {
                                            i++, i >= e && (i = 0), o++, o >= e && (o = 0), t[i] && (a.appid = t[i].app_id,
                                                this.btnGameL.skin = t[i].app_img, this.btnGameL.appData = a, n["default"].utils.tweenShake(this.btnGameL, null),
                                                t[o] && (s.appid = t[o].app_id, this.btnGameR.skin = t[o].app_img, this.btnGameR.appData = s,
                                                    n["default"].utils.tweenShake(this.btnGameR, null)));
                                        });
                                    }
                                }
                            }
                        }
                    }, e.prototype.setWxapp2 = function() {
                        var t = n["default"].wxMgr.getWxappList(0);
                        if (t) {
                            var e = t.length;
                            if (0 != e) {
                                var i = 2;
                                if (t[i]) {
                                    var a = {
                                        appid: t[i].app_id,
                                        category: 0
                                    };
                                    this.btnGameL2.visible = !0, this.btnGameL2.skin = t[i].app_img, this.btnGameL2.appData = a;
                                    var o = 3;
                                    if (t[o]) {
                                        var s = {
                                            appid: t[o].app_id,
                                            category: 0
                                        };
                                        this.btnGameR2.visible = !0, this.btnGameR2.skin = t[o].app_img, this.btnGameR2.appData = s;
                                        var r = Math.floor(2e3 * Math.random() + 2e3);
                                        Laya.timer.loop(r, this, function() {
                                            i++, i >= e && (i = 0), o++, o >= e && (o = 0), t[i] && (a.appid = t[i].app_id,
                                                this.btnGameL2.skin = t[i].app_img, this.btnGameL2.appData = a, n["default"].utils.tweenShake(this.btnGameL2, null),
                                                t[o] && (s.appid = t[o].app_id, this.btnGameR2.skin = t[o].app_img, this.btnGameR2.appData = s,
                                                    n["default"].utils.tweenShake(this.btnGameR, null)));
                                        });
                                    }
                                }
                            }
                        }
                    }, e;
            }(a["default"]);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./BaseView": 30
    }],
    35: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._loadCount = 1, e._loadNum = 0, e._isLoadFinish = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this),
                        this.yad.visible = false;
                    // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => {
                    //     platform.getInstance();
                    //     this.yad.on(Laya.Event.MOUSE_DOWN, this, () => { platform.getInstance().navigate("LOADING", "LOGO") });
                    //     this.yad.visible = true;
                    //     this.loadRes();
                    // });
                    // let o = new YYG.Options();
                    // o.gameNameId = "Bike-Rush";
                    // o.gamedistributionID = "";
                    // YYGSDK.__init__(YYG.ChannelType.YAD, o);


                }, e.prototype.onOpened = function() {
                    this.barPres.value = 0, this.lblPres.text = "0";
                    platform.getInstance().yadstartup("Bike-Rush", () => {
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Bike-Rush-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Bike-Rush-musicState")) : false;
                        this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("LOADING", "LOGO")
                        });
                        this.yad.visible = true;
                        this.loadRes();
                        n["default"].configMgr.init(), n["default"].soundMgr.init(), n["default"].wxMgr.init(),
                            n["default"].adMgr.init(), n["default"].modelCreator, n["default"].utils.loadSubpackage("sound", function(t, e) {}, this);
                    })

                }, e.prototype.initUI = function() {
                    var t = this.getChildByName("viewLoad");
                    this.lblPres = t.getChildByName("lblPres"), this.barPres = t.getChildByName("barPres");
                }, e.prototype.initEvent = function() {
                    n["default"].glEvent.on("load_finish_event", this, this.onLoadFinish);
                }, e.prototype.onLoadFinish = function(t) {
                    this._loadNum++, this._loadNum >= this._loadCount && (this.barPres.value = 1, this.lblPres.text = "100%",
                        this.loadFinished = !0, this.loadGameScene());
                }, e.prototype.onLoading = function(t) {
                    var e = (this._loadNum + t) / (this._loadCount + 1);
                    this.barPres.value = e, this.lblPres.text = Math.floor(100 * e) + "%";
                }, e.prototype.loadRes = function() {
                    var t = [{
                        url: "res/scenes/Conventional/ModelScene.ls",
                        clas: Laya.Scene,
                        priority: 1
                    }, {
                        url: "res/models/Conventional/ModelScene.lh",
                        clas: Laya.Sprite3D,
                        priority: 2
                    }, {
                        url: "res/skinList_V1/Conventional/ModelScene.lh",
                        clas: Laya.Sprite3D,
                        priority: 2
                    }];
                    Laya.loader.create(t, Laya.Handler.create(this, this.onLoadFinish, [{
                        target: "3dres"
                    }], !1), Laya.Handler.create(this, this.onLoading, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, function(t) {
                        console.error("load 3dres error:", t);
                    });
                }, e.prototype.loadGameScene = function() {
                    Laya.Browser.onWeiXin ? this.loadFinished && this.openGameScene() : this.openGameScene();
                }, e.prototype.openGameScene = function() {
                    var t = this;
                    Laya.Scene.open("views/game.scene", !1, Laya.Handler.create(this, function(e) {
                        n["default"].commonData.isNoAds = !0, Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(t, function(e) {
                            t.close();
                        }));
                    }));
                }, e;
            }(a["default"]);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./BaseView": 30
    }],
    36: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.overTime = 10, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), this.initProcess();
                    }, e.prototype.onOpened = function() {
                        this.isStartTimer = !0;
                    }, e.prototype.onWxWakeEvent = function() {
                        this.isStartTimer = !0;
                    }, e.prototype.onWxSleepEvent = function() {
                        this.isStartTimer = !1;
                    }, e.prototype.initData = function() {
                        n["default"].adMgr.getBannerCount() < 2 && n["default"].adMgr.getBannerAd(), n["default"].commonData.existVideoAd || n["default"].adMgr.loadVideoAd(),
                            n["default"].commonData.existInterAd || n["default"].adMgr.getInterstitialAd(),
                            n["default"].wxMgr.showOverFriendTips(!0), Laya.timer.loop(1e3, this, this.onTimerStart);
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("goonTime");
                        this.lbTimer = this.getChild("lbTimer", t), this.lbTimer.text = this.overTime.toString(),
                            this.btnVideo = this.getChild("btnVideo");
                        var e = this.getChild("bottomPanel");
                        this.btnSkip = this.getChild("btnSkip", e);
                    }, e.prototype.initEvent = function() {
                        n["default"].utils.addClickEvent(this.btnVideo, this, this.onVideoClick),
                            n["default"].utils.addClickEvent(this.btnSkip, this, this.onSkipClick),
                            n["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent);
                    }, e.prototype.onShareClick = function() {
                        this.isStartTimer = !1, n["default"].wxMgr.shareFriend(0, !0);
                    }, e.prototype.onVideoClick = function() {
                        this.isStartTimer = !1;
                        platform.getInstance().showReward(() => {
                            this.close();
                            this.goonGame();
                        }, () => {
                            this.isStartTimer = !0;
                            platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                        });
                    }, e.prototype.onSkipClick = function() {
                        n["default"].commonData.existInterAd && n["default"].adMgr.showInterstitialAd(),
                            this.closeView();
                    }, e.prototype.closeView = function() {
                        var t = this;
                        n["default"].adMgr.hideBannerAd(), Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                            t.sprMask.destroy(), t.bar1.destroy(), t.close();
                        }));
                    },
                    e.prototype.onTimerStart = function() {

                        if (this.isStartTimer) {
                            this.overTime -= 1,
                                this.lbTimer.text = this.overTime.toString()
                        }
                        if (this.overTime <= 0) {
                            Laya.timer.clear(this, this.onTimerStart);
                            this.onSkipClick()

                        }
                    },
                    e.prototype.onShareBackEvent = function(t) {},
                    e.prototype.onVideoCloseEvent = function(t) {
                        t.isEnded ? (this.close(), this.goonGame()) : (n["default"].wxMgr.showToast("", 2e3),
                            this.isStartTimer = !0);
                    }, e.prototype.goonGame = function() {
                        n["default"].glEvent.event("goon_game_event");
                    }, e.prototype.initProcess = function() {
                        var t = this.getChild("goonTime");
                        this.bar1 = this.getChild("bar1", t), this.sprMask = this.bar1.mask, this.angle = 0,
                            this.drawDelay = 0, Laya.timer.frameLoop(50, this, this.onFrame);
                    }, e.prototype.onFrame = function() {
                        !this.isStartTimer || Laya.timer.delta > 800 || (this.drawDelay += 50 * Laya.timer.delta,
                            this.drawDelay > 80 && (this.drawBar(), this.drawDelay = 0));
                    }, e.prototype.drawBar = function() {
                        this.angle += .036 * this.drawDelay, this.sprMask.graphics.clear(), this.sprMask.graphics.drawPie(8, 7, 150, -90, this.angle - 90, "#00ffff");
                    }, e;
            }(a["default"]);
        i["default"] = o;
    }, {
        "../LayaSample": 3,
        "./BaseView": 30
    }],
    37: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../uiComp/RankItem"),
            n = t("./BaseView"),
            o = t("../LayaSample"),
            s = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.rankBgList = ["ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png"],
                        e.worldList = null, e.rankMe = null, e.btnBack = null, e.tabRank = null, e.friendList = null,
                        e.existWorldRank = !0, e.worldLoading = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(), this.initUI(),
                        this.initEvent(), this.onRankFriend(), this.pageWorldRank = 1, this.isLoadedWorldRank = !1,
                        o["default"].wxMgr.worldRank(1), Laya.loader.load("prefab/rankItem.json", Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB);
                }, e.prototype.initUI = function() {
                    var t = this.getChild("topPanel");
                    this.btnBack = this.getChild("btnBack", t), this.tabRank = this.getChild("tabRank"),
                        this.world = this.getChild("world"), this.worldList = this.getChild("list", this.world),
                        this.rankMe = this.getChild("rankMe", this.world), this.friend = this.getChild("friend"),
                        this.friendList = this.getChild("list", this.friend), this.touchArea = this.getChild("touchArea", this.friend),
                        this.touchArea.alpha = 0;
                }, e.prototype.initEvent = function() {
                    o["default"].utils.addClickEvent(this.btnBack, this, this.onCloseClick, 12), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick),
                        o["default"].glEvent.on("draw_world_rank_event", this, this.onDrawWorldrankEvent);
                }, e.prototype.onClosed = function() {
                    t.prototype.onClosed.call(this), Laya.loader.clearRes("prefab/rankItem.json"), this.clear();
                }, e.prototype.initRankEvent = function(t) {
                    if (!t) return this.touchArea.offAllCaller(this), this.touchArea.visible = !1, void(this.friendList.visible = !1);
                    this.touchArea.visible = !0, this.friendList.visible = !0;
                    var e = 0,
                        i = 0,
                        a = 0,
                        n = 0,
                        s = o["default"].commonData.wxsysInfo.pixelRatio ? o["default"].commonData.wxsysInfo.pixelRatio : 1;
                    Laya.Browser.onWeiXin && (this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                        t.stopPropagation(), a = 0, i = t.nativeEvent.timeStamp, e = t.nativeEvent.changedTouches[0].clientY,
                            o["default"].wxMgr.onFrientMouseEvent({
                                cmd: "touch_start"
                            });
                    }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function(t) {
                        t.stopPropagation(), a = t.nativeEvent.changedTouches[0].clientY - e, o["default"].wxMgr.onFrientMouseEvent({
                            cmd: "touch_move",
                            deltaY: a * s
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function(t) {
                        t.stopPropagation(), n = a / (t.nativeEvent.timeStamp - i), o["default"].wxMgr.onFrientMouseEvent({
                            cmd: "touch_end",
                            speed: n
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function(t) {
                        t.stopPropagation(), n = a / (t.nativeEvent.timeStamp - i), o["default"].wxMgr.onFrientMouseEvent({
                            cmd: "touch_cancel",
                            speed: n
                        });
                    }));
                }, e.prototype.showList = function(t) {
                    var e = t ? 1 : 0;
                    this.worldList.alpha = e, this.rankMe.alpha = e;
                }, e.prototype.initList = function() {
                    var t = this.worldList;
                    t.itemRender = a["default"], t.cacheContent = !1, t.vScrollBarSkin = "", t.selectEnable = !1,
                        t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                        this.worldLoading++;
                }, e.prototype.refreshList = function() {
                    if (this.worldLoading >= 2) {
                        if (this.worldList.refresh(), 0 == this.rankMe.numChildren) {
                            var t = new a["default"]();
                            this.rankMe.addChild(t), t.setRankItem(this.userRank);
                        }
                        Laya.timer.clear(this, this.refreshList);
                    }
                }, e.prototype.onRankClick = function(t) {
                    1 == t ? this.onRankWorld() : this.onRankFriend();
                }, e.prototype.onRankFriend = function() {
                    if (this.world.visible = !1, this.friend.visible = !0, this.friendList.visible = !0,
                        this.showList(!1), this.initRankEvent(!0), o["default"].wxMgr.showFriendRank(!0),
                        window.wx && window.sharedCanvas) {
                        var t = this.friendList.width,
                            e = this.friendList.height;
                        window.sharedCanvas.width = t, window.sharedCanvas.height = e;
                    }
                }, e.prototype.onRankWorld = function() {
                    this.world.visible = !0, this.friend.visible = !1, this.friendList.visible = !1,
                        this.showList(!0), this.initRankEvent(!1), o["default"].wxMgr.showFriendRank(!1),
                        Laya.timer.loop(100, this, this.refreshList);
                }, e.prototype.onDrawWorldrankEvent = function(t) {
                    this.worldLoading++;
                    var e = t.page,
                        i = {},
                        a = [];
                    if (t.data instanceof Array) a = t.data, i.data = {
                        list: a,
                        page: e
                    };
                    else {
                        if (!t.data) return void console.error("rank data is null.");
                        i = t, a = t.data.list, t.data.userInfo.userId = t.data.userInfo.id, t.data.userInfo.bgUrl = this.rankBgList[2],
                            delete t.data.userInfo.id, this.userRank = t.data.userInfo;
                    }
                    if (!a) return void(this.existWorldRank = !1);
                    this.existWorldRank = a.length >= 20 ? !0 : !1;
                    for (var n = i.data.list.length, o = 0; n > o; ++o) {
                        i.data.list[o].userId = i.data.list[o].id;
                        var s = (i.data.list[o].rank - 1) % 2;
                        i.data.list[o].bgUrl = this.rankBgList[s], delete i.data.list[o].id;
                    }
                    this.rankData || (this.rankData = {}), this.pageWorldRank = e, this.rankData[e] = i;
                    var r = [];
                    for (var h in this.rankData) r.push.apply(r, this.rankData[h].data.list);
                    this.worldList.updateArray(r), this.isLoadedWorldRank = !0;
                }, e.prototype.updateItem = function(t, e) {
                    t.setRankItem(t.dataSource);
                    var i = this.pageWorldRank;
                    if (e - 6 == 0 && 6 > i);
                    else if (e + 6 == this.worldList.length) {
                        i += 1;
                        var a = this.rankData[i];
                        a || this.isLoadedWorldRank && this.existWorldRank && 6 > i;
                    }
                }, e.prototype.onSelect = function(t) {
                    console.log("当前选择的索引：" + t);
                }, e.prototype.onCloseClick = function() {
                    var t = this;
                    o["default"].commonData.isNoAds = !0, Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, function(e) {
                        t.close();
                    }));
                }, e.prototype.clear = function() {
                    o["default"].wxMgr.showFriendRank(!1), this.touchArea.offAllCaller(this), this.worldList.array = [],
                        this.worldList.destroy();
                }, e;
            }(n["default"]);
        i["default"] = s;
    }, {
        "../LayaSample": 3,
        "../uiComp/RankItem": 26,
        "./BaseView": 30
    }],
    38: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../uiComp/skinItem"),
            n = t("../LayaSample"),
            o = t("./BaseView"),
            s = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.itemCount = 0, e.itemIndex = 0, e.skinItemPath = "prefab/freeSkinItem.json",
                        e.skinData = [], e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd(),
                        Laya.loader.load(this.skinItemPath, Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB),
                        n["default"].commonData.isShowSkin = !1;
                }, e.prototype.onOpened = function(t) {
                    t && t.isPlay && (this.isPlay = t.isPlay, n["default"].gameMgr.isPlay = !1);
                }, e.prototype.initUI = function() {
                    var t = this.getChild("content");
                    this.skinList = this.getChild("skinList", t);
                    var e = this.getChild("bottom");
                    this.btnVideo = this.getChild("btnVideo", e), this.btnVideo.visible = !0, this.btnTips = this.getChild("btnTips"),
                        this.btnBack = this.getChild("btnBack", e), this.tipsTag = this.getChild("tag", this.btnTips),
                        this.tipsTag.visible = !n["default"].storageMgr.isSkinTips(), n["default"].tweenMgr.toScale(this.btnVideo, 1.1, 500, !0, !0);
                }, e.prototype.initEvent = function() {
                    n["default"].utils.addClickEvent(this.btnVideo, this, this.onVideoClick, 14), n["default"].utils.addClickEvent(this.btnTips, this, this.onTipsClick, 14),
                        n["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick, 14), n["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent),
                        n["default"].glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.onClosed = function() {
                    t.prototype.onClosed.call(this), this.isPlay && (n["default"].gameMgr.isPlay = !0);
                }, e.prototype.onDisable = function() {
                    n["default"].glEvent.off("ad_video_close_event", this, this.onVideoCloseEvent),
                        n["default"].glEvent.off("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.initData = function() {
                    this.itemCount = 4, this.skinData = [];
                    for (var t = 0; t < this.itemCount; ++t) {
                        var e = {
                            id: t + 1,
                            iconPath: "ui/common/skin_" + (t + 1) + ".png",
                            tagPath: "ui/common/icon_7.png"
                        };
                        this.skinData.push(e);
                    }
                }, e.prototype.initList = function() {
                    a["default"].itemWidth = 200, a["default"].itemHeight = 270, a["default"].iconWidth = 142,
                        a["default"].iconHeight = 195, a["default"].iconOffset = new Laya.Vector2(29, 8),
                        a["default"].itemPrefab = Laya.loader.getRes(this.skinItemPath);
                    var t = this.skinList;
                    t.itemRender = a["default"], t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.onSelect),
                        t.renderHandler = new Laya.Handler(this, this.updateItem), t.array = this.skinData;
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t) {
                    0 > t || (this.itemIndex = t + 1, n["default"].adMgr.showVideoAd(0), this.skinList.selectedIndex = -1);
                }, e.prototype.onVideoClick = function() {
                    this.itemIndex = Math.floor(4 * Math.random()), n["default"].adMgr.showVideoAd(0);
                }, e.prototype.onBackClick = function() {
                    this.itemIndex = 0, n["default"].glEvent.event("change_skin_event", {
                        index: this.itemIndex,
                        isPlay: !0
                    }), n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd(), this.close();
                }, e.prototype.onAdLoadEvent = function(t) {}, e.prototype.onVideoCloseEvent = function(t) {
                    t.isEnded ? (this.changeSkin(), n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd()) : n["default"].wxMgr.showToast("未观看完视频", 2e3);
                }, e.prototype.changeSkin = function() {
                    n["default"].commonData.isShowSkin = !1, n["default"].glEvent.event("change_skin_event", {
                        index: this.itemIndex,
                        isPlay: !0
                    }), this.close();
                }, e.prototype.onTipsClick = function() {
                    var t = n["default"].storageMgr.isSkinTips();
                    this.tipsTag.visible = t, n["default"].storageMgr.setSkinTips(!t);
                }, e;
            }(o["default"]);
        i["default"] = s;
    }, {
        "../LayaSample": 3,
        "../uiComp/skinItem": 29,
        "./BaseView": 30
    }]
}, {}, [2]);