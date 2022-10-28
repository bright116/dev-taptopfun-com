var __extends = this && this.__extends || function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
    };
    return function(e, a) {
        function n() {
            this.constructor = e;
        }
        t(e, a), e.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype,
            new n());
    };
}();

! function() {
    function t(e, a, n) {
        function o(r, s) {
            if (!a[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (i) return i(r, !0);
                    var u = new Error("Cannot find module '" + r + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var h = a[r] = {
                    exports: {}
                };
                e[r][0].call(h.exports, function(t) {
                    var a = e[r][1][t];
                    return o(a || t);
                }, h, h.exports, t, e, a, n);
            }
            return a[r].exports;
        }
        for (var i = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o;
    }
    return t;
}()({
    1: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./scripts/views/ClearingView"),
            o = t("./scripts/uiComp/AppLite"),
            i = t("./scripts/uiComp/AppBanner"),
            r = t("./scripts/views/CollectView"),
            s = t("./scripts/JieExt/GameViewExt"),
            l = t("./scripts/JieExt/UI/ProgressBarMas"),
            u = t("./scripts/JieExt/UI/TiaoXing"),
            h = t("./scripts/views/HomeView"),
            d = t("./scripts/uiComp/GameAppList"),
            c = t("./scripts/views/IncomeView"),
            p = t("./scripts/JieExt/LoginViewExt"),
            f = t("./scripts/views/OverView"),
            m = t("./scripts/views/RankView"),
            y = t("./scripts/views/SkinView"),
            g = t("./scripts/views/SkinViewFreeTry"),
            v = t("./scripts/uiComp/Wxapp"),
            S = function() {
                function t() {}
                return t.init = function() {
                        var t = Laya.ClassUtils.regClass;
                        t("scripts/views/ClearingView.ts", n["default"]), t("scripts/uiComp/AppLite.ts", o["default"]),
                            t("scripts/uiComp/AppBanner.ts", i["default"]), t("scripts/views/CollectView.ts", r["default"]),
                            t("scripts/JieExt/GameViewExt.ts", s["default"]), t("scripts/JieExt/UI/ProgressBarMas.ts", l["default"]),
                            t("scripts/JieExt/UI/TiaoXing.ts", u["default"]), t("scripts/views/HomeView.ts", h["default"]),
                            t("scripts/uiComp/GameAppList.ts", d["default"]), t("scripts/views/IncomeView.ts", c["default"]),
                            t("scripts/JieExt/LoginViewExt.ts", p["default"]), t("scripts/views/OverView.ts", f["default"]),
                            t("scripts/views/RankView.ts", m["default"]), t("scripts/views/SkinView.ts", y["default"]),
                            t("scripts/views/SkinViewFreeTry.ts", g["default"]), t("scripts/uiComp/Wxapp.ts", v["default"]);
                    }, t.width = 750, t.height = 1334, t.scaleMode = "showall", t.screenMode = "none",
                    t.alignV = "middle", t.alignH = "center", t.startScene = "views/login.scene", t.sceneRoot = "",
                    t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t;
            }();
        a["default"] = S, S.init();
    }, {
        "./scripts/JieExt/GameViewExt": 10,
        "./scripts/JieExt/LoginViewExt": 30,
        "./scripts/JieExt/UI/ProgressBarMas": 37,
        "./scripts/JieExt/UI/TiaoXing": 38,
        "./scripts/uiComp/AppBanner": 59,
        "./scripts/uiComp/AppLite": 61,
        "./scripts/uiComp/GameAppList": 62,
        "./scripts/uiComp/Wxapp": 65,
        "./scripts/views/ClearingView": 67,
        "./scripts/views/CollectView": 68,
        "./scripts/views/HomeView": 70,
        "./scripts/views/IncomeView": 71,
        "./scripts/views/OverView": 73,
        "./scripts/views/RankView": 74,
        "./scripts/views/SkinView": 75,
        "./scripts/views/SkinViewFreeTry": 76
    }],
    2: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./GameConfig"),
            o = t("./scripts/LayaSample"),
            i = function() {
                function t() {
                    // var t = Laya.Browser.height / Laya.Browser.width,
                    //     e = Laya.Browser.onMobile ? t * n["default"].width : n["default"].height;
                    // o["default"].screen.allScreen = t > 17 / 9 ? !0 : !1,
                    //     o["default"].screen.offsetTop = (e - n["default"].height) / 2;

                    // if (Laya.Browser.onMobile && !Laya.Browser.onIPad) {
                    //     Laya3D.init(n["default"].width, e);
                    //     Laya.stage.scaleMode = "fixedauto";
                    // }
                    // else {
                    // (750+100)/1334
                    console.log("Laya.Browser.height / Laya.Browser.width", Laya.Browser.height / Laya.Browser.width);
                    // Laya3D.init(n["default"].width  , n["default"].width *  (1334 / 750));
                    Laya3D.init(750, 1334),
                        Laya.stage.scaleMode = "exactfit";
                    // }
                    // o["default"].screen.realPxRatio = Laya.stage.clientScaleY
                    // Laya.stage.scaleMode = n["default"].scaleMode,
                    // Laya.stage.screenMode = n["default"].screenMode, 
                    Laya.stage.alignV = n["default"].alignV,
                        Laya.stage.alignH = n["default"].alignH,
                        // Laya.stage.useRetinalCanvas = !0,
                        Laya.URL.exportSceneToJson = n["default"].exportSceneToJson,
                        Laya.alertGlobalError = !0,
                        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                }
                return t.prototype.onVersionLoaded = function() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }, t.prototype.onConfigLoaded = function() {
                    n["default"].startScene && Laya.Scene.open(n["default"].startScene), o["default"].commonData.oenAppTime = Laya.timer.currTimer,
                        Laya.MouseManager.multiTouchEnabled = !1;
                }, t;
            }();
        new i();
    }, {
        "./GameConfig": 1,
        "./scripts/LayaSample": 41
    }],
    3: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t;
        }();
        a["default"] = n;
    }, {}],
    4: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./ShapeThreeD"),
            o = t("../../LayaSample"),
            i = t("../Game/EventTypeExt"),
            r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.list = [], e.dicObb = {}, e.dicCollsion = {}, e.querylist = [], e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        e.instantce = this, o["default"].glEvent.on(i["default"].shapeThreeDEnterWorld, this, this.OnShapeThreeDEnterWorld);
                    }, e.prototype.OnShapeThreeDEnterWorld = function(t) {
                        this.list.push(t), this.dicObb[t.id] = t, this.dicCollsion[t.id] = !1;
                    }, e.prototype.onLateUpdate = function() {
                        for (var t = 0; t < this.list.length; t++) this.list[t].mask == n["default"].Bullet && this.list[t].owner.active && this.TestSphereVsAllOBB(this.list[t]);
                    }, e.prototype.SetCollsionDetecRange_old = function(t) {
                        this.querylist = [];
                        for (var e = 0; e < this.list.length; e++) {
                            var a = this.list[e],
                                o = Laya.Vector3.distance(a.transform.position, t);
                            a.mask != n["default"].Bullet && 5 >= o && this.querylist.push(a);
                        }
                    }, e.prototype.SetCollsionDetecRange_Enimy = function(t, e, a, o) {
                        this.querylist = [];
                        for (var i = 0; i < this.list.length; i++) {
                            var r = this.list[i],
                                s = Laya.Vector3.distance(r.transform.position, t);
                            r.mask == n["default"].Build && 8 >= s && this.querylist.push(r);
                        }
                        this.querylist.push(e), this.querylist.push(a), this.querylist.push(o);
                    }, e.prototype.check = function() {
                        for (var t = !1, e = 0; e < this.querylist.length; e++) {
                            var a = this.querylist[e];
                            a.mask == n["default"].CharacterEnimy && (t = !0);
                        }
                        return t;
                    }, e.prototype.TestSphereVsAllOBB = function(t) {
                        for (var e = t, a = !1, o = 0; o < this.querylist.length; o++) {
                            var i = this.querylist[o];
                            if (0 != i.owner.active && t.id != i.id && (t.collsionMask & 1 << i.mask) > 0) {
                                i.mask == n["default"].CharacterEnimy && (a = !0);
                                var r = i,
                                    s = e.SphereVsObb(r);
                                s && t.OnObbEnter(i);
                            }
                        }
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e;
            }(Laya.Script);
        a["default"] = r;
    }, {
        "../../LayaSample": 41,
        "../Game/EventTypeExt": 18,
        "./ShapeThreeD": 6
    }],
    5: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./ShapeThreeD"),
            o = t("../Tools/JieTools"),
            i = t("../../UnityEngine/U3dToLayaTools"),
            r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.pos = new Laya.Vector3(), e.halfExtents = new Laya.Vector3(), e.useThisTransform = !0,
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.useThisTransform && (this.obbView = this.transform);
                }, e.prototype.SetFrom = function(t, e, a) {
                    this.pos = t, this.rotation = e, this.halfExtents = a;
                }, e.prototype.DistanceSq = function(t, e) {
                    var a = t.x - e.x,
                        n = t.y - e.y,
                        o = t.z - e.z;
                    return a * a + n * n + o * o;
                }, e.prototype.Intersects = function(t) {
                    if (null == this.rotation) return !1;
                    var e = this.ClosestPointTo(t.pos),
                        a = this.DistanceSq(e, t.pos) <= t.r * t.r;
                    return a;
                }, e.prototype.ClosestPointTo = function(t) {
                    var e = this.pos,
                        a = this.halfExtents,
                        n = o["default"].Vector3Subtract(t, e),
                        r = i["default"].QuaternionMulVector3(this.rotation, new Laya.Vector3(1, 0, 0)),
                        s = i["default"].QuaternionMulVector3(this.rotation, new Laya.Vector3(0, 1, 0)),
                        l = i["default"].QuaternionMulVector3(this.rotation, new Laya.Vector3(0, 0, 1)),
                        u = Laya.Vector3.dot(n, r);
                    u > a.x ? u = a.x : u < -a.x && (u = -a.x);
                    var h = Laya.Vector3.dot(n, s);
                    h > a.y ? h = a.y : h < -a.y && (h = -a.y);
                    var d = Laya.Vector3.dot(n, l);
                    d > a.z ? d = a.z : d < -a.z && (d = -a.z);
                    var c = o["default"].Vector3MulLength(r, u),
                        p = o["default"].Vector3MulLength(s, h),
                        f = o["default"].Vector3MulLength(l, d),
                        m = o["default"].Vector3Add(e, c);
                    return m = o["default"].Vector3Add(m, p), m = o["default"].Vector3Add(m, f);
                }, e.TestClosestPointTo = function(t, e, a, n) {
                    var r = e,
                        s = a,
                        l = o["default"].Vector3Subtract(t, r),
                        u = i["default"].QuaternionMulVector3(n, new Laya.Vector3(1, 0, 0)),
                        h = i["default"].QuaternionMulVector3(n, new Laya.Vector3(0, 1, 0)),
                        d = i["default"].QuaternionMulVector3(n, new Laya.Vector3(0, 0, 1)),
                        c = Laya.Vector3.dot(l, u);
                    c > s.x ? c = s.x : c < -s.x && (c = -s.x), console.log("distanceX=" + c), console.log("XAxis="),
                        console.log(u);
                    var p = Laya.Vector3.dot(l, h);
                    p > s.y ? p = s.y : p < -s.y && (p = -s.y);
                    var f = Laya.Vector3.dot(l, d);
                    console.log("distanceZ=" + f), f > s.z ? f = s.z : f < -s.z && (f = -s.z), console.log("distanceZ2=" + f),
                        console.log("ZAxis="), console.log(d);
                    var m = o["default"].Vector3MulLength(u, c),
                        y = o["default"].Vector3MulLength(h, p),
                        g = o["default"].Vector3MulLength(d, f);
                    console.log("startAdd"), console.log(r), console.log(m), console.log(y), console.log(g);
                    var v = o["default"].Vector3Add(r, m);
                    return v = o["default"].Vector3Add(v, y), v = o["default"].Vector3Add(v, g);
                }, e.prototype.onUpdate = function() {
                    var t = o["default"].Vector3MulLength(this.obbView.localScale, .5);
                    this.SetFrom(this.obbView.position, this.obbView.rotation, t);
                }, e;
            }(n["default"]);
        a["default"] = r;
    }, {
        "../../UnityEngine/U3dToLayaTools": 45,
        "../Tools/JieTools": 34,
        "./ShapeThreeD": 6
    }],
    6: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../LayaSample"),
            o = t("../Game/EventTypeExt"),
            i = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.collsionEnter = [], e.mask = 2, e.collsionMask = -1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        this.gameObject = this.owner, this.transform = this.gameObject.transform, n["default"].glEvent.event(o["default"].shapeThreeDEnterWorld, this);
                    }, e.prototype.onStart = function() {}, e.prototype.onDestroy = function() {
                        n["default"].glEvent.event(o["default"].shapeThreeDLeaveWorld, this);
                    }, e.prototype.RegisetCollsionEnter = function(t) {
                        this.collsionEnter.push(t);
                    }, e.prototype.OnObbEnter = function(t) {
                        for (var e = 0, a = this.collsionEnter; e < a.length; e++) {
                            var n = a[e],
                                o = n.regisiter,
                                i = n.callbackFunc;
                            i.apply(o, [t]);
                        }
                    }, e.Character = 1, e.Build = 2, e.Bullet = 3, e.BaoHuSan = 4, e.CharacterEnimy = 5,
                    e;
            }(Laya.Script);
        a["default"] = i;
    }, {
        "../../LayaSample": 41,
        "../Game/EventTypeExt": 18
    }],
    7: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./ShapeThreeD"),
            o = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.pos = new Laya.Vector3(), e.r = 0, e;
                }
                return __extends(e, t), e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.SphereVsObb = function(t) {
                        return t.Intersects(this);
                    }, e.prototype.onUpdate = function() {
                        null != this.transform && (this.pos = this.transform.position, this.r = .5 * this.transform.localScale.x);
                    }, e;
            }(n["default"]);
        a["default"] = o;
    }, {
        "./ShapeThreeD": 6
    }],
    8: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Game/ResourcesMgr"),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.Find = function(t) {
                    for (var e = t.split("/"), a = n["default"].Instance.Scene, o = a.getChildByName(e[0]), i = 1; i < e.length; i++) o = o.getChildByName(e[i]);
                    return o;
                }, e.FindIgroneNull = function(t) {
                    for (var e = t.split("/"), a = n["default"].Instance.Scene.getChildByName(e[0]), o = 1; o < e.length; o++) {
                        var i = a.getChildByName(e[o]);
                        null != i && (a = i);
                    }
                    return a;
                }, e.FindIgroneNullUseNode = function(t, e) {
                    for (var a = e.split("/"), n = t.getChildByName(a[0]), o = 0; o < a.length; o++) {
                        var i = n.getChildByName(a[o]);
                        null != i && (n = i);
                    }
                    return n;
                }, e.Instantiate2Scene = function(t) {
                    var e = Laya.Sprite3D.instantiate(t);
                    return n["default"].Instance.Scene.addChild(e), e;
                }, e.Add2Scene = function(t) {
                    n["default"].Instance.Scene.addChild(t);
                }, e.InstantiateNoScene = function(t) {
                    var e = Laya.Sprite3D.instantiate(t);
                    return e;
                }, e.GetTypeInChildren = function(t, e) {
                    for (var a = 0, n = t._children; a < n.length; a++) {
                        var o = n[a];
                        if (o instanceof e) return o;
                    }
                    return null;
                }, e.GetTypesInChildren = function(t, e) {
                    for (var a = [], n = 0, o = t._children; n < o.length; n++) {
                        var i = o[n];
                        i instanceof e && a.push(i);
                    }
                    return a;
                }, e.FindUseNode = function(t, e) {
                    for (var a = t.split("/"), n = e.getChildByName(a[0]), o = 1; o < a.length; o++) n = n.getChildByName(a[o]);
                    return n;
                }, e;
            }(Laya.Sprite3D);
        a["default"] = o;
    }, {
        "../Game/ResourcesMgr": 25
    }],
    9: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Tools/JieTools"),
            o = t("../../UnityEngine/Mathf"),
            i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.Create = function(t) {
                        return new e(t.x, t.y, t.z);
                    }, e.prototype.add = function(t) {
                        return new e(t.x, t.y, t.z);
                    }, e.prototype.sub = function(t) {
                        return t = n["default"].subVec3(this, t), new e(t.x, t.y, t.z);
                    }, e.Lerp_u3d = function(t, e, a) {
                        return a = o["default"].Clamp01(a), new Laya.Vector3(t.x + (e.x - t.x) * a, t.y + (e.y - t.y) * a, t.z + (e.z - t.z) * a);
                    }, e.Up = new Laya.Vector3(0, 1, 0), e.Zero = new Laya.Vector3(0, 0, 0), e.forward = new Laya.Vector3(0, 0, -1),
                    e;
            }(Laya.Vector3);
        a["default"] = i;
    }, {
        "../../UnityEngine/Mathf": 43,
        "../Tools/JieTools": 34
    }],
    10: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../views/GameView"),
            o = t("./Game/ResourcesMgr"),
            i = t("./Game/GameMgrExt"),
            r = t("../LayaSample"),
            s = t("./Game/EventTypeExt"),
            l = t("./UI/ProgressBarMas"),
            u = t("./Game/GameDesgin"),
            h = t("./UI/TiaoXing"),
            d = t("./Tools/JieTools"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.initData = function() {
                    var t = Laya.timer.currTimer - r["default"].commonData.load3dSceneStartTime,
                        e = Laya.timer.currTimer - r["default"].commonData.oenAppTime,
                        a = r["default"].commonData.fishLoadMianPackTime - r["default"].commonData.StartLoadMianPackTime;
                    this.loadScene(), this.hpBg = this.getChildByName("HpBg"), this.hpText = this.hpBg.getChildByName("hpText"),
                        this.winSp = this.getChildByName("win"), this.barProgress = this.getChildByName("topPanel").getChildByName("barSpeed");
                    var n = this.getChildByName("topPanel");
                    this.barShootyProgressMaskWhite = n.getChildByName("barShootyProgressMaskWhite").getComponent(l["default"]);
                    var o = n.getChildByName("barShootyProgressMaskColor");
                    null != o && (this.barShootyProgressMaskColor = o.getComponent(l["default"])), this.barShootyProgressMaskWhite.value = 0,
                        this.guide = this.getChildByName("Guide"), this.winSp.visible = !1, this.hpBarPres = this.getChildByName("HpBarPres"),
                        this.killMul = n.getChildByName("killMul"), this.KillCountFont = n.getChildByName("KillCountFont"),
                        this.leftRightcolorBox = this.getChildByName("leftRightcolorBox"), this.SetWhiteProGress(),
                        this.LogPanel = this.getChildByName("LogPanel"), this.LogTest = this.LogPanel.getChildByName("LogTest"),
                        r["default"].glEvent.on(s["default"].gameCompelte, this, this.OnGameCompelte), r["default"].glEvent.on(s["default"].gameProgprogress, this, this.OnGameProgprogress),
                        r["default"].glEvent.on(s["default"].attackCountDownUpDate, this, this.OnAttackCountDown),
                        r["default"].glEvent.on(s["default"].OpenJieSuanYe, this, this.OpenJieSuanYe), r["default"].glEvent.on(s["default"].enimyUpdateHpUIProgress, this, this.OnEnimyUpdateHpUIProgress),
                        this.hpBarPres.visible = !1, r["default"].glEvent.on(s["default"].enimyUpdateHpUI, this, this.OnenimyUpdateHpUI),
                        this.LogPanel.visible = u["default"].ShowLogText, this.tiaoxing = n.getChildByName("TiaoXing").getComponent(h["default"]),
                        d["default"].NeedScreenFiexdExt() && (n.top += 40);
                }, e.prototype.SetColorProGress = function() {
                    this.leftRightcolorBox.visible = !0, this.barShootyProgressMaskColor.visible = !0,
                        this.barShootyProgressMaskWhite.visible = !1;
                }, e.prototype.SetWhiteProGress = function() {
                    this.leftRightcolorBox.visible = !1, this.barShootyProgressMaskColor && (this.barShootyProgressMaskColor.visible = !1),
                        this.barShootyProgressMaskWhite.visible = !0;
                }, e.prototype.SetShootProGress = function(t) {
                    this.barShootyProgressMaskWhite.visible = t;
                }, e.prototype.OnenimyUpdateHpUI = function(t) {
                    this.hpText.value = t.toString();
                }, e.prototype.OnEnimyUpdateHpUIProgress = function(t) {}, e.prototype.getMainScene = function() {
                    return this.mainScene;
                }, e.prototype.OnAttackCountDown = function(t) {
                    this.barShootyProgressMaskColor && (this.barShootyProgressMaskColor.value = t),
                        this.barShootyProgressMaskWhite.value = t;
                }, e.prototype.OnGameCompelte = function() {
                    r["default"].glEvent.event(s["default"].OpenJieSuanYe);
                }, e.prototype.OnGameProgprogress = function(t) {
                    this.barProgress.value = t;
                }, e.prototype.loadScene = function() {
                    console.log("GameViewExt loadScene"), e.instantc = this;
                    var t = (o["default"].mianScene3dUrl, Laya.loader.getRes(o["default"].mianScene3dUrl));
                    Laya.stage.addChild(t), Laya.stage.setChildIndex(t, 0),
                        this.mainScene = t,
                        this.mainCamera = t.getChildByName("Main Camera");
                    // let viewport = this.mainCamera.viewport;
                    // viewport.x = 0;
                    // viewport.y = 0;
                    // viewport.width = Laya.stage.width / Laya.stage.clientScaleX + 100;
                    // viewport.height = Laya.stage.height / Laya.stage.clientScaleY;

                    // this.mainCamera.viewport = viewport;

                    // console.log("viewport.width",viewport.width);
                    t.addComponent(i["default"]),
                        this.mainCamera.cullingMask = this.setBitComputing(this.mainCamera.cullingMask, 16, !1);
                }, e.prototype.setBitComputing = function(t, e, a) {
                    return a ? t |= 1 << e : t &= ~(1 << e), t;
                }, e.prototype.getBitComputing = function(t, e) {
                    return 0 != (t & 1 << e);
                }, e.prototype.StartloadSubpackage = function() {
                    console.log("开始读取分包"), r["default"].commonData.subpackageNum = 0, r["default"].utils.loadSubpackageExt(0, "resSound", this.loadSubPackFinishExt, this);
                }, e.prototype.loadSubPackFinishExt = function(t, e) {
                    e && (r["default"].commonData.subpackageNum--, console.log(r["default"].commonData.subpackageNum, "分包"),
                        0 == r["default"].commonData.subpackageNum && (r["default"].commonData.subpackageLoadOk = !0,
                            console.log("所有分包加载OK", r["default"].commonData.subpackageLoadOk)));
                }, e.prototype.onMouseDownEvent = function(t) {}, e.prototype.OpenJieSuanYe = function() {
                    var t = this;
                    Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                        t.visible = !1;
                    }));
                }, e.prototype.OpenOnLineAward = function() {
                    var t = this;
                    Laya.Scene.open("views/income.scene", !1, Laya.Handler.create(this, function(e) {
                        t.visible = !1;
                    }));
                }, e.prototype.OpenSkin = function() {
                    var t = this;
                    Laya.Scene.open("views/skin.scene", !1, Laya.Handler.create(this, function(e) {
                        t.visible = !1;
                    }));
                }, e.prototype.OpenSkinViewFreeTry = function() {
                    var t = this;
                    Laya.Scene.open("views/SkinViewFreeTry.scene", !1, Laya.Handler.create(this, function(e) {
                        t.visible = !1;
                    }));
                }, e.prototype.OpenWXAPPListSecene = function() {
                    Laya.Scene.open("views/wxapp.scene", !1, Laya.Handler.create(this, function() {}));
                }, e;
            }(n["default"]);
        a["default"] = c;
    }, {
        "../LayaSample": 41,
        "../views/GameView": 69,
        "./Game/EventTypeExt": 18,
        "./Game/GameDesgin": 20,
        "./Game/GameMgrExt": 21,
        "./Game/ResourcesMgr": 25,
        "./Tools/JieTools": 34,
        "./UI/ProgressBarMas": 37,
        "./UI/TiaoXing": 38
    }],
    11: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.IdleCrossFade = .2, e.RunCrossFade = 0, e.attackCrossFade = 1e-7, e;
            }
            return __extends(e, t), e.prototype.onAwake = function() {
                this.animator = this.owner.getComponent(Laya.Animator);
            }, e.prototype.Rengshuiqiu = function() {
                this.animator.play("rengshuiqiu");
            }, e.prototype.Stay = function() {
                this.animator.crossFade("Idle", this.IdleCrossFade);
            }, e.prototype.ZhuJueStay = function() {
                this.animator.crossFade("zhujueIdle", this.IdleCrossFade);
            }, e.prototype.PlayZhuJueStay = function() {
                this.animator.play("zhujueIdle");
            }, e.prototype.RunAnima = function() {
                this.animator.crossFade("Run", this.RunCrossFade);
            }, e.prototype.AttackAnima = function() {
                this.animator.crossFade("Fire2", this.attackCrossFade);
            }, e.prototype.DeathAnima = function() {
                this.animator.crossFade("Death", .01);
            }, e.prototype.StandFireAnima = function() {
                this.animator.crossFade("StandFire", .5);
            }, e;
        }(Laya.Script);
        a["default"] = n;
    }, {}],
    12: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./Actions"),
            o = t("../3DPhysics/OBBThreeD"),
            i = t("../3DPhysics/ShapeThreeD"),
            r = t("./GameDesgin"),
            s = t("./ResourcesMgr"),
            l = t("../Core/GameObject"),
            u = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.hp = 1, e.org_hp = 0, e.qiangPos = "qiangPos", e.hasAvator = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.gameobject = this.owner, this.transform = this.gameobject.transform, this.model = this.gameobject.getChildByName("Soldier"),
                        this.mesh = l["default"].FindUseNode("Soldier/xiaoren", this.gameobject), this.actions = this.model.addComponent(n["default"]),
                        this.org_hp = this.hp;
                    var t = this.gameobject.getChildByName("CharacterOBB");
                    this.characterOBB = t.addComponent(o["default"]), this.characterOBB.mask = i["default"].Character,
                        t.meshRenderer.enable = r["default"].showCharacterOBBBox, this.animator = this.actions.animator,
                        this.sharedMaterial = this.mesh.skinnedMeshRenderer.material;
                }, e.prototype.SetAvator = function(t) {
                    if (!this.hasAvator) {
                        null == this.headCube && (this.headCube = l["default"].FindIgroneNullUseNode(this.gameobject, "Soldier/headCube"));
                        for (var e = 0, a = t; e < a.length; e++) {
                            var n = a[e],
                                o = l["default"].Instantiate2Scene(l["default"].Find("Resources/Items/" + n));
                            o.transform.localPositionZ += 1e3, this.headCube.addChild(o);
                        }
                        this.hasAvator = !0;
                    }
                }, e.prototype.SetAvatorEnimy = function(t) {
                    if (!this.hasAvator) {
                        null == this.headCube && (this.headCube = l["default"].FindIgroneNullUseNode(this.gameobject, "Soldier/headCube"));
                        for (var e = 0, a = t; e < a.length; e++) {
                            var n = a[e],
                                o = l["default"].Instantiate2Scene(l["default"].Find("Resources/Items/" + n));
                            this.headCube.addChild(o), "maozi" == o.name ? (o.transform.localPositionZ = 0,
                                o.transform.localPositionY = 0, o.transform.localPositionX = 0) : "maozi02" == o.name ? (o.transform.localPositionZ = 0,
                                o.transform.localPositionY = -.2, o.transform.localPositionX = 0) : -1 != o.name.indexOf("yanjing") && (o.transform.localPositionZ = 0,
                                o.transform.localPositionY = -.5, o.transform.localPositionX = 0, o.transform.localRotationEulerY = 180);
                        }
                        this.hasAvator = !0, this.EnimyCHANGE_SKIN(1);
                    }
                }, e.prototype.EnimyCHANGE_SKIN = function(t) {
                    null == this.enimyqiang && (this.enimyqiang = l["default"].Instantiate2Scene(s["default"].Instance.qianGobgarr[t]),
                        this.gameobject.addChild(this.enimyqiang), this.enimyqiang.active = !0, this.animator.linkSprite3DToAvatarNode(this.qiangPos, this.enimyqiang));
                }, e;
            }(Laya.Script);
        a["default"] = u;
    }, {
        "../3DPhysics/OBBThreeD": 5,
        "../3DPhysics/ShapeThreeD": 6,
        "../Core/GameObject": 8,
        "./Actions": 11,
        "./GameDesgin": 20,
        "./ResourcesMgr": 25
    }],
    13: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../LayaSample"),
            o = t("./EventTypeExt"),
            i = t("../Core/Vector3Ext"),
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.poolName = "", e.pasetTime = 0, e.speed = .02, e._time = 0, e.reEnterScene = !1,
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform, this.trail = this.gameObject.getChildByName("FX_SQ_BallTrail");
                }, e.prototype.onStart = function() {}, e.prototype.recoverBullet = function() {
                    Laya.Pool.recover(this.poolName, this.gameObject), this.gameObject.active = !1,
                        n["default"].glEvent.event(o["default"].bulletTouObb, this.transform.position);
                }, e.prototype.onUpdate = function() {
                    this.pasetTime += this.speed, this.transform.position = i["default"].Lerp_u3d(this.startPos, this.endPos, this.pasetTime),
                        this.pasetTime >= .2 && (this.recoverBullet(), this.enimy.OnDamge()), this.reEnterScene && (this.trail.trailFilter.time = .2,
                            this.reEnterScene = !1);
                }, e.prototype.onLateUpdate = function() {}, e.prototype.Fire = function() {
                    this._time = 0, n["default"].glEvent.event(o["default"].fire);
                }, e.prototype.onEnable = function() {
                    this.reEnterScene = !0;
                }, e.prototype.onDisable = function() {
                    this.trail.trailFilter.time = 0;
                }, e.prototype.renderTrail = function() {}, e;
            }(Laya.Script);
        a["default"] = r;
    }, {
        "../../LayaSample": 41,
        "../Core/Vector3Ext": 9,
        "./EventTypeExt": 18
    }],
    14: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../3DPhysics/ShapeThreeD"),
            o = t("../../UnityEngine/Time"),
            i = t("../Tools/JieTools"),
            r = t("./EnimyWaterShooty"),
            s = t("./Zhujue"),
            l = t("../3DPhysics/CallBackRegisiter"),
            u = t("./GameDebug"),
            h = t("../../LayaSample"),
            d = t("./EventTypeExt"),
            c = t("../3DPhysics/SphereThreeD"),
            p = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.speed = .25, e.shooterLayer = 0, e.poolName = "", e._time = 0, e.reEnterScene = !1,
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform, this.trail = this.gameObject.getChildByName("FX_SQ_BallTrail"),
                        this.collsionShape = this.owner.getComponent(c["default"]), this.collsionShape.mask = n["default"].Bullet;
                }, e.prototype.onStart = function() {
                    var t = new l["default"]();
                    t.regisiter = this, t.callbackFunc = this.OncollsionEnter, this.collsionShape.RegisetCollsionEnter(t);
                }, e.prototype.EnimYBullet = function() {
                    this.collsionShape.collsionMask = 0, this.collsionShape.collsionMask = 1 << n["default"].Build | 1 << n["default"].Character | 1 << n["default"].BaoHuSan;
                }, e.prototype.ZhuJueBullet = function() {
                    this.collsionShape.collsionMask = 0, this.collsionShape.collsionMask = 1 << n["default"].CharacterEnimy;
                }, e.prototype.OncollsionEnter = function(t) {
                    var e = t.owner;
                    if (u["default"].LogcollsionEnter && console.log(this.owner.name + "   OncollsionEnter" + e.name),
                        e.layer != this.shooterLayer) {
                        if (t.mask == n["default"].Build || t.mask == n["default"].BaoHuSan) return void this.recoverBullet();
                        var a = e.parent;
                        if (null != a) {
                            var o = a.getComponent(r["default"]);
                            o && o.OnDamge();
                            var i = a.getComponent(s["default"]);
                            if (i) {
                                if (!i.shooting) return;
                                if (i.superMan) return;
                                i.OnDamge();
                            }
                            h["default"].glEvent.event(d["default"].bulletTouchCharacter, e.transform.position),
                                this.recoverBullet();
                        }
                    }
                }, e.prototype.recoverBullet = function() {
                    Laya.Pool.recover(this.poolName, this.gameObject), this.gameObject.active = !1,
                        h["default"].glEvent.event(d["default"].bulletTouObb, this.transform.position);
                }, e.prototype.onUpdate = function() {
                    var t = i["default"].Vector3MulLength(this.dir, this.speed * Laya.timer.delta * .2);
                    this.transform.position = i["default"].Vector3Add(this.transform.position, t), this._time += o["default"].deltaTime,
                        this._time >= 7 && (Laya.Pool.recover(this.poolName, this.gameObject), this.gameObject.active = !1),
                        this.reEnterScene && (this.trail.trailFilter.time = .2, this.reEnterScene = !1);
                }, e.prototype.onLateUpdate = function() {}, e.prototype.Fire = function() {
                    this._time = 0, h["default"].glEvent.event(d["default"].fire);
                }, e.prototype.onEnable = function() {
                    this.reEnterScene = !0;
                }, e.prototype.onDisable = function() {
                    this.trail.trailFilter.time = 0;
                }, e.prototype.renderTrail = function() {}, e;
            }(Laya.Script);
        a["default"] = p;
    }, {
        "../../LayaSample": 41,
        "../../UnityEngine/Time": 44,
        "../3DPhysics/CallBackRegisiter": 3,
        "../3DPhysics/ShapeThreeD": 6,
        "../3DPhysics/SphereThreeD": 7,
        "../Tools/JieTools": 34,
        "./EnimyWaterShooty": 17,
        "./EventTypeExt": 18,
        "./GameDebug": 19,
        "./Zhujue": 27
    }],
    15: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Tools/JieTools"),
            o = t("../../UnityEngine/Time"),
            i = t("../../UnityEngine/U3dToLayaTools"),
            r = t("../../UnityEngine/InPut"),
            s = t("../Core/Vector3Ext"),
            l = t("./ResourcesMgr"),
            u = t("../GameViewExt"),
            h = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.length = 3, e.dir = new Laya.Vector3(), e.offset = new Laya.Vector3(),
                        e.m_targetZ = 0, e.zScale = .06, e.pdirX = 0, e.lerpSpped = 0, e.lerpLookAtPos = new Laya.Vector3(),
                        e.lookatZhujue = !0, e.fushiTu = !1, e.caRotateXOffset = -8.2, e.caRotateYOffset = 3.8,
                        e.caYOffset = 3.5, e.caSacel = 1.09, e.yofset = 2.9, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    e.instantce = this, this.length = 8, this.offset.y = -7.5, this.lerpSpped = 3, this.cameraTrans = this.owner.transform,
                        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDownR);
                }, e.prototype.onKeyDownR = function(t) {
                    t.keyCode == Laya.Keyboard.LEFT && (this.yofset += .1), t.keyCode == Laya.Keyboard.RIGHT && (this.yofset -= .1),
                        t.keyCode == Laya.Keyboard.UP && (this.dir = n["default"].Vector3Add(this.dir, new Laya.Vector3(.1, 0, 0))),
                        t.keyCode == Laya.Keyboard.DOWN && (this.dir = n["default"].Vector3Add(this.dir, new Laya.Vector3(-.1, 0, 0))),
                        t.keyCode == Laya.Keyboard.SPACE && (this.fushiTu = !this.fushiTu, l["default"].Instance.Scene.enableFog = !1,
                            u["default"].instantc.mainCamera.getChildAt(2).active = !1);
                }, e.prototype.onStart = function() {}, e.prototype.onUpdate = function() {
                    r["default"].GetKeyDown(Laya.Keyboard.NUMPAD_4) && (this.caSacel += .1), r["default"].GetKeyDown(Laya.Keyboard.NUMPAD_6) && (this.caSacel -= .1),
                        r["default"].GetKeyDown(Laya.Keyboard.UP) && (this.caRotateYOffset += .1 * 3), r["default"].GetKeyDown(Laya.Keyboard.DOWN) && (this.caRotateYOffset -= .1 * 3),
                        r["default"].GetKeyDown(Laya.Keyboard.LEFT) && (this.caRotateXOffset += .1 * 3),
                        r["default"].GetKeyDown(Laya.Keyboard.RIGHT) && (this.caRotateXOffset -= .1 * 3),
                        r["default"].GetKeyDown(Laya.Keyboard.NUMPAD_8) && (this.caYOffset += .1), r["default"].GetKeyDown(Laya.Keyboard.NUMPAD_2) && (this.caYOffset -= .1),
                        r["default"].GetKeyDown(Laya.Keyboard.M) && console.log("" + this.caRotateXOffset + " " + this.caRotateYOffset + " " + this.caYOffset + " " + this.caSacel);
                }, e.prototype.onLateUpdate = function() {
                    return this.fushiTu ? void(this.targetTran && (this.cameraTrans.position = n["default"].addVec3(this.targetTran.position, new Laya.Vector3(0, 99, 0)),
                        this.cameraTrans.lookAt(this.targetTran.position, new Laya.Vector3(0, 1, 0)))) : void(this.targetTran && this.lookatZhujue ? this.RoundCamera_LookAtZhujue() : this.targetTran2 ? this.RoundCamera_Laya(this.targetTran.position, this.targetTran2.position, this.cameraTrans) : this.targetTran && this.RoundCamera_Laya(this.targetTran.position, n["default"].addVec3(this.targetTran.position, new Laya.Vector3(0, 0, 10)), this.cameraTrans));
                }, e.prototype.backMethod = function() {
                    var t = n["default"].Vector3Subtract(this.targetTran2.position, this.targetTran.position);
                    t = n["default"].Vector3Add(t, this.offset), Laya.Vector3.normalize(t, t), t.x += this.pdirX;
                    var e = n["default"].Vector3Add(t, this.dir),
                        e = n["default"].Vector3MulLength(e, this.length),
                        e = n["default"].Vector3Subtract(this.targetTran.position, e),
                        a = o["default"].deltaTime,
                        i = this.lerpSpped * a;
                    this.cameraTrans.position = n["default"].Lerp(this.cameraTrans.position, e, i),
                        this.lerpLookAtPos = n["default"].Lerp(this.lerpLookAtPos, this.targetTran2.position, i),
                        this.cameraTrans.lookAt(this.lerpLookAtPos, new Laya.Vector3(0, 1, 0));
                }, e.prototype.RoundCamera_Laya = function(t, e, a) {
                    var o = t;
                    o.y = 0;
                    var r = e;
                    r.y = 0;
                    var l = a.position.clone();
                    l.y = 0;
                    var u = n["default"].subVec3(o, r),
                        h = (n["default"].subVec3(r, o), n["default"].subVec3(r, l));
                    Laya.Vector3.normalize(u, u), Laya.Vector3.normalize(h, h);
                    var d = new Laya.Quaternion();
                    u.z *= -1, Laya.Quaternion.rotationLookAt(u, s["default"].Up, d), Laya.Quaternion.lerp(a.rotation, d, .05, d),
                        a.rotation = d;
                    var c = i["default"].QuaternionEulerXYZ(0, 10, 0),
                        p = new Laya.Vector3();
                    a.getForward(p);
                    var f = n["default"].mulVec3(p, -8 + this.caSacel),
                        m = i["default"].QuaternionMulVector3(c, f),
                        y = n["default"].addVec3(o, m);
                    a.position = n["default"].addVec3(y, new Laya.Vector3(0, this.caYOffset, 0)), i["default"].Transform_Rotate(a, new Laya.Vector3(this.caRotateXOffset, this.caRotateYOffset, 0));
                }, e.prototype.RoundCamera_LookAtZhujue = function() {
                    var t = n["default"].getForwardReversal(this.targetTran),
                        e = i["default"].QuaternionEulerXYZ(0, 15, 0);
                    t = i["default"].QuaternionMulVector3(e, t);
                    var a = n["default"].mulVec3(t, 6.5);
                    a = n["default"].addVec3(this.targetTran.position, a), this.cameraTrans.position = a,
                        this.cameraTrans.lookAt(this.targetTran.position, s["default"].Up);
                }, e.prototype.RoundCamera_Laya3 = function(t, e, a) {
                    var o = e;
                    o.y = 0;
                    var i = a.position;
                    i.y = 0;
                    var r = n["default"].subVec3(i, o);
                    Laya.Vector3.normalize(r, r);
                    var l = new Laya.Quaternion();
                    r.z = -r.z, Laya.Quaternion.rotationLookAt(r, s["default"].Up, l), a.rotation = l;
                }, e;
            }(Laya.Script);
        a["default"] = h;
    }, {
        "../../UnityEngine/InPut": 42,
        "../../UnityEngine/Time": 44,
        "../../UnityEngine/U3dToLayaTools": 45,
        "../Core/Vector3Ext": 9,
        "../GameViewExt": 10,
        "../Tools/JieTools": 34,
        "./ResourcesMgr": 25
    }],
    16: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../LayaSample"),
            o = t("./EventTypeExt"),
            i = t("./ResourcesMgr"),
            r = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        n["default"].glEvent.on(o["default"].bulletTouObb, this, this.PlayBulletRecoverEffect),
                            n["default"].glEvent.on(o["default"].PlayBulletRecoverEffect, this, this.PlayBulletRecoverEffect);
                    }, e.prototype.PlayBulletRecoverEffect = function(t) {
                        var e = i["default"].Instance.getPool_Item(i["default"].poolFX_SQ_Hit);
                        e.transform.position = t, e.active = !1, e.active = !0, Laya.timer.once(1e3, this, function() {
                            i["default"].Instance.RecoverFX_SQ_Hit(e);
                        });
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e;
            }(Laya.Script);
        a["default"] = r;
    }, {
        "../../LayaSample": 41,
        "./EventTypeExt": 18,
        "./ResourcesMgr": 25
    }],
    17: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./GameMgrExt"),
            o = t("./Zhujue"),
            i = t("../../LayaSample"),
            r = t("./EventTypeExt"),
            s = t("../3DPhysics/ShapeThreeD"),
            l = t("./BaseCharacter"),
            u = t("./GameDesgin"),
            h = t("../Tools/JieTools"),
            d = t("../../UnityEngine/Mathf"),
            c = t("../GameViewExt"),
            p = t("./ResourcesMgr"),
            f = t("./LayerConfig"),
            m = t("../Core/Vector3Ext"),
            y = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.attack = !1, e.attackDeley = 800, e.death = !1, e.stop = !1, e.cd = 0,
                        e.attacking = !1, e.dataDeath = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), this.characterOBB.mask = s["default"].CharacterEnimy,
                            this.startAttckCor = this.StartAttck, this.attckingCor = this.Attck, this.countinueAttackCor = this.countinueAttack,
                            this.disAttckAndWaitAttackCor = this.DisAttckAndWaitAttack, this.characterOBB.owner.name = "enimyObb",
                            this.characterOBB.owner.layer = f["default"].Enimy, this.gameobject.layer = f["default"].Enimy,
                            this.characterOBB.gameObject.layer = f["default"].Enimy;
                    }, e.prototype.onStart = function() {
                        this.SetAvatorEnimy(this.cfg.avator);
                    }, e.prototype.SetData = function(t) {
                        this.cfg = t, this.org_hp = h["default"].GetRanDom(this.cfg.minHp, this.cfg.maxHp);
                    }, e.prototype.ApplayCfg_V1_UnUse = function() {
                        var t = 4,
                            e = 8,
                            a = 1500,
                            n = 300,
                            i = 1100,
                            r = o["default"].instantce.killNum,
                            s = t + r,
                            l = e + 3 * r;
                        this.org_hp = h["default"].GetRanDom(s, l), a = d["default"].ClampMax(a, 1500),
                            n -= 100 * d["default"].Floor(r / 9), i += 100 * d["default"].Floor(r / 9), n = d["default"].ClampMin(n, 200),
                            this.cfg.attakFrequencyMs = n, this.cfg.attakDurationMs = i, this.cfg.stopDurationMs = a,
                            this.cfg.socre = this.org_hp, c["default"].instantc.LogTest.text = "子弹发射频率=" + n + "毫秒",
                            c["default"].instantc.LogTest.text += "\n 血量范围" + s + "/" + l, c["default"].instantc.LogTest.text += "\n 攻击持续时间" + (this.cfg.attakDurationMs - 1e3),
                            c["default"].instantc.LogTest.text += "\n 休息持续时间" + this.cfg.stopDurationMs, c["default"].instantc.LogTest.text += "\n 得分" + this.cfg.socre;
                        var u = h["default"].getRandomInt(0, p["default"].modelTextures.length - 1);
                        this.sharedMaterial.albedoTexture = Laya.loader.getRes(p["default"].modelTextures[u]);
                    }, e.prototype.ApplayCfg = function() {
                        var t = 4,
                            e = 8,
                            a = 1500,
                            n = 300,
                            i = 1800,
                            r = o["default"].instantce.killNum,
                            s = 3,
                            l = 3,
                            f = d["default"].Floor(r / s) * l,
                            m = t + f;
                        s = 3, l = 5;
                        var y = d["default"].Floor(r / s) * l,
                            g = e + y;
                        m = d["default"].ClampMax(m, 31), g = d["default"].ClampMax(g, 53), this.org_hp = h["default"].GetRanDom(m, g),
                            s = 6, l = 100, i += d["default"].Floor(r / s) * l, i = d["default"].ClampMax(i, 1500),
                            u["default"].globalTestEnimyCounnieFire && (i = 99999999999, n = 10), this.cfg.attakFrequencyMs = n,
                            this.cfg.attakDurationMs = i, this.cfg.stopDurationMs = a, this.cfg.socre = this.org_hp,
                            c["default"].instantc.LogTest.text = "子弹发射频率=" + n + "毫秒", c["default"].instantc.LogTest.text += "\n 血量范围" + m + "/" + g + " add-> " + f + "/" + y,
                            c["default"].instantc.LogTest.text += "\n 攻击持续时间" + (this.cfg.attakDurationMs - 1e3),
                            c["default"].instantc.LogTest.text += "\n 休息持续时间" + this.cfg.stopDurationMs, c["default"].instantc.LogTest.text += "\n 得分" + this.cfg.socre;
                        var v = h["default"].getRandomInt(0, p["default"].modelTextures.length - 1);
                        this.sharedMaterial.albedoTexture = Laya.loader.getRes(p["default"].modelTextures[v]);
                    }, e.prototype.ApplayCfgTeShu_V1 = function() {
                        var t = 35,
                            e = 65,
                            a = 200,
                            n = 2e3;
                        this.org_hp = h["default"].GetRanDom(t, e), this.cfg.attakFrequencyMs = a, this.cfg.attakDurationMs = n,
                            this.cfg.stopDurationMs = 900, this.cfg.socre = 5 * this.org_hp, c["default"].instantc.LogTest.text = "子弹发射频率=" + a + "毫秒",
                            c["default"].instantc.LogTest.text += "\n 血量范围" + t + "/" + e, c["default"].instantc.LogTest.text += "\n 攻击持续时间" + (this.cfg.attakDurationMs - 1e3),
                            c["default"].instantc.LogTest.text += "\n 休息持续时间" + this.cfg.stopDurationMs, c["default"].instantc.LogTest.text += "\n 得分" + this.cfg.socre + "=" + this.org_hp + "X5";
                        var o = h["default"].getRandomInt(0, p["default"].modelTextures.length - 1);
                        this.sharedMaterial.albedoTexture = Laya.loader.getRes(p["default"].modelTextures[o]);
                    }, e.prototype.ApplayCfgTeShu_V2 = function(t) {
                        console.log(t);
                        var e = null;
                        1 == t ? e = i["default"].commonDataExt.TeShuNpcProperty[0] : 2 == t ? e = i["default"].commonDataExt.TeShuNpcProperty[1] : 3 == t && (e = i["default"].commonDataExt.TeShuNpcProperty[2]),
                            this.org_hp = h["default"].GetRanDom(e.minHp, e.maxHp), this.cfg.socre = this.org_hp * e.socreMul;
                        var a = e.attakDurationMs + 1e3;
                        this.cfg.attakFrequencyMs = e.attakFrequencyMs, this.cfg.attakDurationMs = a, this.cfg.stopDurationMs = e.stopDurationMs,
                            c["default"].instantc.LogTest.text = "特殊NPC" + t + "号", c["default"].instantc.LogTest.text += "\n 子弹发射频率=" + this.cfg.attakFrequencyMs + "毫秒",
                            c["default"].instantc.LogTest.text += "\n 血量范围" + e.minHp + "/" + e.maxHp, c["default"].instantc.LogTest.text += "\n 攻击持续时间" + (this.cfg.attakDurationMs - 1e3),
                            c["default"].instantc.LogTest.text += "\n 休息持续时间" + this.cfg.stopDurationMs, c["default"].instantc.LogTest.text += "\n 得分" + this.cfg.socre + "=" + this.org_hp + "X" + e.socreMul;
                        var n = h["default"].getRandomInt(0, p["default"].modelTextures.length - 1);
                        this.sharedMaterial.albedoTexture = Laya.loader.getRes(p["default"].modelTextures[n]);
                    }, e.prototype.FixY = function() {
                        var t = this.transform.position;
                        t.y = 1, this.transform.position = t;
                    }, e.prototype.CanAction = function() {
                        return !this.death && !this.stop;
                    }, e.prototype.onUpdate = function() {
                        this.CanAction() && (!this.attack || o["default"].instantce.death || this.attacking || (this.attacking = !0,
                            this.StartAttck()));
                    }, e.prototype.Attck = function() {
                        this.fireBullet();
                    }, e.prototype.fireBullet = function() {
                        n["default"].instantce.EnimyAttack(this.transform, o["default"].instantce.transform);
                    }, e.prototype.DisAttckAndWaitAttack = function() {
                        this.CanAction() && (this.actions.Stay(), this.CleraLoop(), Laya.timer.loop(this.cfg.stopDurationMs, this, this.StartAttck));
                    }, e.prototype.StartAttck = function() {
                        u["default"].notenimyAttack || this.CanAction() && (this.CleraLoop(), this.actions.StandFireAnima(),
                            Laya.timer.once(this.cfg.attakFrequencyMs, this, this.countinueAttackCor), Laya.timer.once(this.cfg.attakDurationMs, this, this.DisAttckAndWaitAttack));
                    }, e.prototype.countinueAttack = function() {
                        this.Attck(), Laya.timer.loop(this.cfg.attakFrequencyMs, this, this.Attck);
                    }, e.prototype.OnDamge = function() {
                        this.hp -= 1, this.damageFuncModel();
                    }, e.prototype.CheckAndSetNowDeath = function(t) {
                        var e = this.hp;
                        0 >= e - t && (this.dataDeath = !0);
                    }, e.prototype.OnDamgeShuiQiu = function() {
                        this.hp -= 10, this.damageFuncModel();
                    }, e.prototype.TestDamgeMax = function() {
                        this.hp -= 1e16, this.damageFuncModel();
                    }, e.prototype.damageFuncModel = function() {
                        this.hp <= 0 && (this.hp = 0, this.Death()), i["default"].glEvent.event(r["default"].enimyUpdateHpUI, this.hp),
                            i["default"].glEvent.event(r["default"].enimyUpdateHpUIProgress, this.hp / this.org_hp);
                    }, e.prototype.Death = function() {
                        this.hp = 0, this.dataDeath = !0, this.death || (this.CleraLoop(), this.death = !0,
                            this.actions.DeathAnima(), i["default"].glEvent.event(r["default"].enimyDeath));
                    }, e.prototype.LookAtZhuJue = function() {
                        this.transform.lookAt(o["default"].instantce.transform.position, m["default"].Up),
                            this.transform.localRotationEulerY += 180;
                    }, e.prototype.CleraLoop = function() {
                        Laya.timer.clear(this, this.startAttckCor), Laya.timer.clear(this, this.attckingCor),
                            Laya.timer.clear(this, this.countinueAttack), Laya.timer.clear(this, this.disAttckAndWaitAttackCor);
                    }, e.prototype.StopAi = function() {
                        this.actions.Stay(), this.CleraLoop(), this.stop = !0;
                    }, e.prototype.StartAi = function() {
                        Laya.timer.clear(this, this.disAttckAndWaitAttackCor), this.stop = !1, this.StartAttck();
                    }, e.prototype.ReStart = function() {
                        this.hp = this.org_hp, this.CleraLoop(), this.StopAi(), Laya.timer.clear(this, this.disAttckAndWaitAttackCor),
                            this.stop = !1, this.attacking = !1, this.attack = !1, this.death = !1, this.dataDeath = !1,
                            i["default"].glEvent.event(r["default"].enimyUpdateHpUIProgress, this.hp / this.org_hp),
                            i["default"].glEvent.event(r["default"].enimyUpdateHpUI, this.hp);
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.StartBattle = function() {
                        this.ReStart(), this.LookAtZhuJue(), this.attack = !0;
                    }, e;
            }(l["default"]);
        a["default"] = y;
    }, {
        "../../LayaSample": 41,
        "../../UnityEngine/Mathf": 43,
        "../3DPhysics/ShapeThreeD": 6,
        "../Core/Vector3Ext": 9,
        "../GameViewExt": 10,
        "../Tools/JieTools": 34,
        "./BaseCharacter": 12,
        "./EventTypeExt": 18,
        "./GameDesgin": 20,
        "./GameMgrExt": 21,
        "./LayerConfig": 23,
        "./ResourcesMgr": 25,
        "./Zhujue": 27
    }],
    18: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.gameProgprogress = "gameProgprogress", t.enimyDeath = "enimyDeath", t.gameCompelte = "gameCompelte",
                t.sceneDataSetOk = "sceneDataSetOk", t.attackCountDownUpDate = "attackCountDownUpDate",
                t.sceneLoadOk = "sceneLoadOk", t.zhujueDeath = "zhujueDeath", t.enimyUpdateHpUI = "enimyUpdateHpUI",
                t.enimyUpdateHpUIProgress = "enimyUpdateHpUIProgress", t.shapeThreeDEnterWorld = "shapeThreeDEnterWorld",
                t.shapeThreeDLeaveWorld = "shapeThreeDLeaveWorld", t.OpenJieSuanYe = "OpenJieSuanYe",
                t.bulletTouchCharacter = "bulletTouchCharacter", t.fire = "fire", t.bulletTouObb = "bulletTouObb",
                t.PlayBulletRecoverEffect = "PlayBulletRecoverEffect", t.subPackgeUpdateProgress = "subPackgeUpdateProgress",
                t.goHome = "goHome", t.skipSkin = "skipSkin", t.StartCharaterRunning = "StartCharaterRunning",
                t.StopCharaterRunning = "StopCharaterRunning", t.openSan = "openSan", t.closeSan = "closeSan",
                t.worldRankDateUpteOk = "worldRankDateUpteOk", t.shuiqiuRocover = "shuiqiuRocover",
                t.WX_OpenAppCancel = "WX_OpenAppCancel", t.WX_OpenAppSuccess = "WX_OpenAppSuccess",
                t.WX_benginOpenApp = "WX_benginOpenApp", t.ZhuJueRengshuiqiu = "ZhuJueRengshuiqiu",
                t;
        }();
        a["default"] = n;
    }, {}],
    19: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.LogcollsionEnter = !1, t;
        }();
        a["default"] = n;
    }, {}],
    20: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.enableAi = !0, t.globalEnimyHp = 0, t.globalZhuJueHp = 0, t.ZhuJueKongQiang = !1,
                t.showCharacterOBBBox = !1, t.showYantiOBBBox = !1, t.showZhanDianGob = !1, t.notenimyAttack = !1,
                t.notUseSuperMan = !1, t.camerafar = 100, t.DrawNodeLine = !1, t.ShowLogText = !1,
                t.logVersion = 1.2, t.gameOverPopUIMs = 1e3, t.globalTestEnimyCounnieFire = !1,
                t.notEnimyAttackRnd = !1, t.alwaysJiaBanner = !1, t;
        }();
        a["default"] = n;
    }, {}],
    21: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./Zhujue"),
            o = t("./ResourcesMgr"),
            i = t("./BulletWaterShooty"),
            r = t("../Tools/JieTools"),
            s = t("./EnimyWaterShooty"),
            l = t("./PathList"),
            u = t("../../LayaSample"),
            h = t("./EventTypeExt"),
            d = t("../Core/GameObject"),
            c = t("../../UnityEngine/InPut"),
            p = t("./CameraFollowWaterShooty"),
            f = t("../3DPhysics/CollsionManagerThreeD"),
            m = t("../3DPhysics/OBBThreeD"),
            y = t("../GameViewExt"),
            g = t("./EffectMgr"),
            v = t("./GameSoundMgr"),
            S = t("../../UnityEngine/U3dToLayaTools"),
            w = t("./LayerConfig"),
            _ = t("../3DPhysics/ShapeThreeD"),
            L = t("./GameDesgin"),
            b = t("../../UnityEngine/Mathf"),
            C = t("../3DPhysics/SphereThreeD"),
            k = t("./BulletDistantce"),
            E = t("../Model/SpwamEnimyModel"),
            x = t("./gameCompont/RaderBall"),
            D = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.netxtPathIdx = 0, e.enimyWaterShootyArr = null, e.playing = !1, e.enimyCount = 0,
                        e.stageIdx = 0, e.guideVisible = !0, e.nextId = 12, e.spwanSpecialEnimyIdArr = [],
                        e.spwanSpecialEnimyIdArr2 = [], e.lastNum = -1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    console.log("GameMgrExt onAwake"), e.instantce = this, this.owner.addComponent(o["default"]),
                        o["default"].Instance.Scene = y["default"].instantc.getMainScene(), this.owner.addComponent(c["default"]),
                        this.owner.addComponent(g["default"]), this.owner.addComponent(v["default"]), u["default"].glEvent.on("play_game_event", this, this.OnPLAY_GAME_EVENT),
                        u["default"].glEvent.on("init_game_event", this, this.OnRePLAY_GAME_EVENT), u["default"].glEvent.on(h["default"].goHome, this, this.OnGoHome),
                        u["default"].glEvent.on(h["default"].skipSkin, this, this.OnskipSkin), u["default"].glEvent.on("goon_game_event", this, this.OnGOON_GAME_EVENT),
                        Laya.timer.loop(1e3, this, this.CheckSoundPack);
                }, e.prototype.CheckSoundPack = function() {
                    console.log("CheckSoundPack",
                            u["default"].commonData.subpackageLoadOk),
                        u["default"].commonData.subpackageLoadOk && (u["default"].soundMgr.BgmPlay(),
                            Laya.timer.clear(this, this.CheckSoundPack));
                }, e.prototype.onStart = function() {
                    var t = this;
                    this.CharacterGob = d["default"].Find("Character"), this.mainCamera = d["default"].Find("Main Camera"),
                        this.cameraCtrl = this.mainCamera.addComponent(p["default"]),
                        this.mainCamera.farPlane = L["default"].camerafar,
                        this.owner.addComponent(f["default"]),
                        Laya.timer.once(100, this, function() {
                            t.LoadSecene(t.stageIdx);
                        });
                }, e.prototype.OnGoHome = function() {
                    this.playing = !1, p["default"].instantce.lookatZhujue = !0, n["default"].instantce.ReStart();
                }, e.prototype.OnskipSkin = function() {
                    this.SetPlayGame();
                }, e.prototype.OnPLAY_GAME_EVENT = function() {
                    y["default"].instantc.tiaoxing.Int(),
                        y["default"].instantc.OpenSkinViewFreeTry();
                    // Laya.Browser.onPC || u["default"].commonData.existVideoAd && u["default"].storageMgr.isSkinTips() ? 
                    // y["default"].instantc.OpenSkinViewFreeTry() : this.SetPlayGame();
                }, e.prototype.OnRePLAY_GAME_EVENT = function() {
                    console.log("在玩一次"), Laya.Browser.onPC || u["default"].commonData.existVideoAd && u["default"].storageMgr.isSkinTips() ? y["default"].instantc.OpenSkinViewFreeTry() : this.SetPlayGame();
                }, e.prototype.OnGOON_GAME_EVENT = function() {
                    y["default"].instantc.visible = !0;
                }, e.prototype.SetPlayGame = function() {
                    this.CleraData(), n["default"].instantce.CleraData(), u["default"].adMgr.hideBannerAd(),
                        y["default"].instantc.visible = !0, this.playing = !0, n["default"].instantce.clickStartOrRePlay(),
                        y["default"].instantc.visible = !0, y["default"].instantc.tiaoxing.ShowTiaoxing();
                }, e.prototype.NextStage = function() {
                    for (var t = 0; t < this.enimyWaterShootyArr.length; t++) this.enimyWaterShootyArr[t].ReStart();
                    this.currentStage.active = !1, this.stageIdx += 1, this.LoadSecene(this.stageIdx);
                }, e.prototype.LoadSecene = function(t) {
                    var e = t.toString();
                    9 >= t && (e = "0" + e);
                    var a = d["default"].Find("Resources/Stages"),
                        n = a.getChildAt(t);
                    n.active = !0, this.currentStage = n, u["default"].glEvent.event(h["default"].sceneLoadOk),
                        this.OnSceneLoadOK();
                }, e.prototype.OnSceneLoadOK = function() {
                    var t = this.currentStage.getChildByName("yanti");
                    this.pathlsit = t.addComponent(l["default"]), this.pathlsit.Ini();
                    for (var e = r["default"].getSprite3dInChildsFilterName(t, "BuildOBB"), a = 0, o = e; a < o.length; a++) {
                        var i = o[a],
                            s = i.addComponent(m["default"]);
                        s.useThisTransform = !0;
                        var c = i;
                        L["default"].showYantiOBBBox || (c.layer = w["default"].NotRender), s.mask = _["default"].Build;
                    }
                    if (u["default"].glEvent.event(h["default"].sceneDataSetOk), null == n["default"].instantce) {
                        var p = d["default"].Instantiate2Scene(this.CharacterGob).addComponent(n["default"]);
                        this.cameraCtrl.targetTran = p.transform;
                    }
                }, e.prototype.Start = function() {
                    u["default"].glEvent.on(h["default"].zhujueDeath, this, this.OnZhujueDeath);
                }, e.prototype.OnZhujueDeath = function() {
                    this.playing = !1, n["default"].instantce.getCurEnimy().StopAi();
                }, e.prototype.onUpdate = function() {
                    if (c["default"].GetKeyDown(Laya.Keyboard.RIGHT), c["default"].GetKeyDown(Laya.Keyboard.S) && n["default"].instantce.getCurEnimy().StopAi(),
                        c["default"].GetKeyDown(Laya.Keyboard.SPACE) && this.ReStart(), c["default"].GetKeyDown(Laya.Keyboard.O) && u["default"].glEvent.event(h["default"].OpenJieSuanYe),
                        c["default"].GetKeyDown(Laya.Keyboard.L) && y["default"].instantc.OpenOnLineAward(),
                        c["default"].GetKeyDown(Laya.Keyboard.E) && n["default"].instantce.SuperMan(), c["default"].GetKeyDown(Laya.Keyboard.INSERT) && y["default"].instantc.OpenSkinViewFreeTry(),
                        c["default"].GetKeyDown(Laya.Keyboard.K) && n["default"].instantce.enimy.TestDamgeMax(),
                        c["default"].GetKeyDown(Laya.Keyboard.T) && n["default"].instantce.Rengshuiqiu(),
                        this.playing) {
                        if (this.guideVisible && c["default"].mouseButton0down && (y["default"].instantc.guide.visible = !1,
                                this.guideVisible = !1), null == n["default"].instantce.getCurEnimy()) return;

                        r["default"].SetHud(this.mainCamera, n["default"].instantce.getCurEnimy().gameobject, y["default"].instantc.hpBg, new Laya.Vector3(0, 0)),
                            y["default"].instantc.hpBg.y -= 150, y["default"].instantc.hpBg.x -= 0;
                    }
                }, e.prototype.ReStart = function() {}, e.prototype.GetDirX = function(t, e) {
                    var a = r["default"].Vector3Subtract(t.position, e.position);
                    return a.x > 0 ? 1 : -1;
                }, e.prototype.EnimyAttack = function(t, e) {
                    var a = o["default"].Instance.getPool_Item(o["default"].poolBullteName),
                        n = a.getComponent(i["default"]);
                    n.tg = e;
                    var s = r["default"].getRandomInt(100, -100);
                    s *= .01;
                    var l = new Laya.Vector3();
                    e.getRight(l), L["default"].notEnimyAttackRnd && (s = 1), l = r["default"].mulVec3(l, s);
                    var u = r["default"].Vector3Add(e.position, l),
                        h = r["default"].Vector3Subtract(u, t.position);
                    Laya.Vector3.normalize(h, h);
                    var d = r["default"].Vector3MulLength(h, 1.2);
                    a.transform.position = r["default"].Vector3Add(t.position, d), a.transform.localPositionY = 1.3,
                        n.dir = h, n.shooterLayer = t.owner.layer, a.getComponent(C["default"]).onUpdate(),
                        n.Fire(), a.active = !0, n.speed = .25, n.EnimYBullet(), n.poolName = o["default"].poolBullteName;
                }, e.prototype.Attack_Old = function(t, e) {
                    var a = o["default"].Instance.getPool_Item(o["default"].poolBullteBName),
                        n = a.getComponent(i["default"]);
                    n.tg = e;
                    var s = r["default"].subVec3(e.position, t.position);
                    Laya.Vector3.normalize(s, s);
                    var l = r["default"].mulVec3(s, 1.2);
                    a.transform.position = r["default"].addVec3(t.position, l), a.transform.localPositionY = 1,
                        n.dir = s, n.shooterLayer = t.owner.layer, a.getComponent(C["default"]).onUpdate(),
                        n.Fire(), a.active = !0, n.ZhuJueBullet(), n.speed = .4, n.poolName = o["default"].poolBullteBName,
                        u["default"].wxMgr.playVibrateShort();
                }, e.prototype.ZhujueAttack = function(t, e, a) {
                    a.CheckAndSetNowDeath(1);
                    var n = o["default"].Instance.getPool_Item(o["default"].poolBullteBName),
                        i = n.getComponent(k["default"]);
                    i.endPos = r["default"].addVec3(e.position, new Laya.Vector3(0, 2));
                    var s = r["default"].subVec3(e.position, t.position);
                    Laya.Vector3.normalize(s, s);
                    var l = r["default"].mulVec3(s, 1.2);
                    n.transform.position = r["default"].addVec3(t.position, l), n.transform.localPositionY = 1,
                        i.startPos = n.transform.position, i.pasetTime = 0, i.Fire(), n.active = !0, i.enimy = a,
                        i.poolName = o["default"].poolBullteBName, u["default"].wxMgr.playVibrateShort();
                }, e.prototype.ZhujueRengShuiQiu = function(t, e, a, n) {
                    a.CheckAndSetNowDeath(10);
                    var i, s = o["default"].Instance.getPool_ShuiQiu();
                    i = s.getComponent(x["default"]), i.transform = s.transform, i.gameObject = s, i.target = a.gameobject;
                    var l = r["default"].subVec3(e.position, t.position);
                    Laya.Vector3.normalize(l, l);
                    var u = r["default"].mulVec3(l, 1.2);
                    i.transform.position = r["default"].addVec3(t.position, u), i.transform.localPositionY = 1,
                        s.active = !0, i.Start(), i.speed = n, i.transform.scale = new Laya.Vector3(.125, .125, .125);
                }, e.prototype.SwpanEnimy = function(t) {
                    var a = r["default"].GetRanDom(-30, -20),
                        n = .5 * a,
                        o = S["default"].QuaternionEulerXYZ(0, n, 0),
                        i = r["default"].getForwardReversal(t),
                        s = S["default"].QuaternionMulVector3(o, i),
                        l = r["default"].mulVec3(s, 15),
                        u = r["default"].addVec3(t.position, l),
                        h = e.instantce.SpwanEnimyPos_V2(u);
                    return 0 != L["default"].globalEnimyHp && (h.org_hp = L["default"].globalEnimyHp),
                        h;
                }, e.prototype.GetSpecial_V1 = function(t) {
                    var e = b["default"].Floor(t / 6);
                    if (0 == e) return [r["default"].getRandomInt(5, 7)];
                    if (1 == e) return [r["default"].getRandomInt(13, 12)];
                    var a = 6 * e + 1,
                        n = a + 2,
                        o = n + 3,
                        i = r["default"].getRandomInt(a, n),
                        s = r["default"].getRandomInt(n, o);
                    return [i, s];
                }, e.prototype.GetSpecial_V2 = function(t, e) {
                    if (t >= 0 && 4 >= t) {
                        var a = new E["default"](3);
                        return a.spwanId = r["default"].getRandomInt(2, 4), e.last = 4, [a];
                    }
                    if (t >= 5 && 7 >= t) {
                        var n = new E["default"](2),
                            o = new E["default"](3),
                            i = 5,
                            s = i + 1,
                            l = 7,
                            u = r["default"].getRandomInt(i, s),
                            h = r["default"].getRandomInt(s + 1, l);
                        return n.spwanId = u, o.spwanId = h, e.last = l, [n, o];
                    }
                    if (t >= 8 && 10 >= t) {
                        var n = new E["default"](1),
                            o = new E["default"](3),
                            i = 8,
                            s = i + 1,
                            l = 10,
                            u = r["default"].getRandomInt(i, s),
                            h = r["default"].getRandomInt(s + 1, l);
                        return n.spwanId = u, o.spwanId = h, e.last = l, [n, o];
                    }
                    t -= 1;
                    var i = t,
                        d = t + 5,
                        s = i + 2,
                        l = s + 2,
                        c = d,
                        u = r["default"].getRandomInt(i, s),
                        h = r["default"].getRandomInt(s, l),
                        p = r["default"].getRandomInt(l, c),
                        f = new E["default"](1),
                        n = new E["default"](2),
                        o = new E["default"](3),
                        u = r["default"].getRandomInt(i, s),
                        h = r["default"].getRandomInt(s + 1, l),
                        p = r["default"].getRandomInt(l + 1, c),
                        m = r["default"].getRandomInt(1, 3);
                    return 1 == m ? (f.spwanId = u, n.spwanId = h, o.spwanId = p) : 2 == m ? (f.spwanId = p,
                        n.spwanId = h, o.spwanId = u) : (f.spwanId = h, n.spwanId = u, o.spwanId = p), e.last = c, [f, n, o];
                }, e.prototype.SpwanEnimyPos_V1 = function(t) {
                    var e = 0,
                        a = n["default"].instantce.killNum;
                    a + 1 >= this.nextId && (this.spwanSpecialEnimyIdArr = [this.nextId], this.nextId += 12),
                        console.log(a), console.log(this.spwanSpecialEnimyIdArr);
                    for (var i = !1, l = 0, u = this.spwanSpecialEnimyIdArr; l < u.length; l++) {
                        var h = u[l];
                        a == h && (e = r["default"].getRandomInt(1, 2), i = !0);
                    }
                    var d = null;
                    d = o["default"].Instance.getPool_ItemByEnimy(e), d.active = !0, d.transform.position = t;
                    var c = d.getComponent(s["default"]);
                    i ? c.ApplayCfgTeShu_V1() : c.ApplayCfg(), c.FixY(), c.ReStart();
                    for (var p = "", f = 0, m = this.spwanSpecialEnimyIdArr; f < m.length; f++) {
                        var h = m[f];
                        p += h + ",";
                    }
                    return y["default"].instantc.LogTest.text += "\n 特殊ID" + p, c;
                }, e.prototype.SpwanEnimyPos_V2 = function(t) {
                    var e = 0,
                        a = n["default"].instantce.killNum;
                    if (this.lastNum < a) {
                        var i = {},
                            r = a + 1;
                        this.spwanSpecialEnimyIdArr2 = this.GetSpecial_V2(r, i), this.lastNum = i.last;
                        this.lastNum;
                    }
                    for (var l, u = !1, h = 0, d = this.spwanSpecialEnimyIdArr2; h < d.length; h++) {
                        var c = d[h];
                        a == c.spwanId && (e = c.typeID, l = c, u = !0);
                    }
                    var p = null;
                    p = u ? o["default"].Instance.getPool_ItemByEnimy(l.avatorId) : o["default"].Instance.getPool_ItemByEnimy(e),
                        p.active = !0, p.transform.position = t;
                    var f = p.getComponent(s["default"]);
                    u ? f.ApplayCfgTeShu_V2(l.typeID) : f.ApplayCfg(), f.FixY(), f.ReStart();
                    for (var m = "", g = 0, v = this.spwanSpecialEnimyIdArr2; g < v.length; g++) {
                        var c = v[g];
                        m += c.spwanId + ",";
                    }
                    return y["default"].instantc.LogTest.text += "\n 第" + m + "个是特殊NPC", f;
                }, e.prototype.CleraData = function() {
                    this.nextId = 12, this.spwanSpecialEnimyIdArr = [], this.spwanSpecialEnimyIdArr2 = [],
                        this.lastNum = -1;
                }, e;
            }(Laya.Script);
        a["default"] = D;
    }, {
        "../../LayaSample": 41,
        "../../UnityEngine/InPut": 42,
        "../../UnityEngine/Mathf": 43,
        "../../UnityEngine/U3dToLayaTools": 45,
        "../3DPhysics/CollsionManagerThreeD": 4,
        "../3DPhysics/OBBThreeD": 5,
        "../3DPhysics/ShapeThreeD": 6,
        "../3DPhysics/SphereThreeD": 7,
        "../Core/GameObject": 8,
        "../GameViewExt": 10,
        "../Model/SpwamEnimyModel": 32,
        "../Tools/JieTools": 34,
        "./BulletDistantce": 13,
        "./BulletWaterShooty": 14,
        "./CameraFollowWaterShooty": 15,
        "./EffectMgr": 16,
        "./EnimyWaterShooty": 17,
        "./EventTypeExt": 18,
        "./GameDesgin": 20,
        "./GameSoundMgr": 22,
        "./LayerConfig": 23,
        "./PathList": 24,
        "./ResourcesMgr": 25,
        "./Zhujue": 27,
        "./gameCompont/RaderBall": 28
    }],
    22: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../LayaSample"),
            o = t("./EventTypeExt"),
            i = t("./ResourcesMgr"),
            r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.fireTime = 0, e.hitTime = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        n["default"].glEvent.on(o["default"].fire, this, this.OnFire), n["default"].glEvent.on(o["default"].gameCompelte, this, this.OnGameCompelte),
                            n["default"].glEvent.on(o["default"].zhujueDeath, this, this.OnzhujueDeath), n["default"].glEvent.on(o["default"].bulletTouObb, this, this.OnBulletTouObb),
                            n["default"].glEvent.on(o["default"].enimyDeath, this, this.OnEnimyDeath), n["default"].glEvent.on(o["default"].StartCharaterRunning, this, this.OnStartCharaterRunning),
                            n["default"].glEvent.on(o["default"].StopCharaterRunning, this, this.OnStopCharaterRunning),
                            n["default"].glEvent.on(o["default"].openSan, this, this.OnopenSan), n["default"].glEvent.on(o["default"].closeSan, this, this.OncloseSan),
                            n["default"].glEvent.on("ad_video_close_event", this, this.OnAD_VIDEO_CLOSE_EVENT),
                            n["default"].glEvent.on("wx_wake_event", this, this.OnWX_WAKE_EVENT), n["default"].glEvent.on(o["default"].shuiqiuRocover, this, this.OnshuiqiuRocover),
                            n["default"].glEvent.on(o["default"].ZhuJueRengshuiqiu, this, this.OnZhuJueRengshuiqiu);
                    }, e.prototype.OnZhuJueRengshuiqiu = function() {
                        Laya.timer.once(100, this, function() {
                            n["default"].soundMgr.playExt(i["default"].rengshuiqiu);
                        });
                    }, e.prototype.OnshuiqiuRocover = function() {
                        n["default"].soundMgr.playExt(i["default"].shuiqiubaozha);
                    }, e.prototype.OnWX_WAKE_EVENT = function() {
                        n["default"].commonData.wxUpWake = !0;
                    }, e.prototype.OnAD_VIDEO_CLOSE_EVENT = function() {
                        n["default"].soundMgr.BgmPlay();
                    }, e.prototype.OncloseSan = function() {
                        n["default"].soundMgr.stopExt(i["default"].SanCountDownSound);
                    }, e.prototype.OnopenSan = function() {
                        n["default"].soundMgr.playExtLoop(i["default"].SanCountDownSound), n["default"].soundMgr.playExt(i["default"].openSanSound);
                    }, e.prototype.OnStartCharaterRunning = function() {
                        console.log("OnStopCharaterRunning"), n["default"].soundMgr.playExtLoop(i["default"].footSound);
                    }, e.prototype.OnStopCharaterRunning = function() {
                        n["default"].soundMgr.stopExt(i["default"].footSound);
                    }, e.prototype.OnEnimyDeath = function() {
                        n["default"].soundMgr.playExt(i["default"].npcDeathSound);
                    }, e.prototype.OnBulletTouObb = function() {
                        Laya.timer.currTimer - this.hitTime < 300 || (this.hitTime = Laya.timer.currTimer,
                            n["default"].soundMgr.playExt(i["default"].bulletHitSound));
                    }, e.prototype.OnzhujueDeath = function() {
                        n["default"].soundMgr.playExt(i["default"].lostSound);
                    }, e.prototype.OnGameCompelte = function() {
                        n["default"].soundMgr.playExt(i["default"].winSound);
                    }, e.prototype.OnFire = function() {
                        Laya.timer.currTimer - this.fireTime < 300 || (this.fireTime = Laya.timer.currTimer,
                            n["default"].soundMgr.playExt(i["default"].fireSound));
                    }, e.prototype.OnbulletTouchCharacter = function() {
                        Laya.timer.currTimer - this.hitTime < 300 || (this.hitTime = Laya.timer.currTimer,
                            n["default"].soundMgr.playExt(i["default"].bulletHitSound));
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e;
            }(Laya.Script);
        a["default"] = r;
    }, {
        "../../LayaSample": 41,
        "./EventTypeExt": 18,
        "./ResourcesMgr": 25
    }],
    23: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.NotRender = 16, t.Enimy = 14, t.ObbBulid = 12, t;
        }();
        a["default"] = n;
    }, {}],
    24: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Core/GameObject"),
            o = t("./gameCompont/ZhanDian"),
            i = t("./U3dJsonModel/ZhanDianCfg"),
            r = t("./ResourcesMgr"),
            s = t("./GameDesgin"),
            l = t("../Tools/PathLineDrawer"),
            u = t("../Core/Vector3Ext"),
            h = t("../Tools/JieTools"),
            d = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.zhanDianArr = [], e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {}, e.prototype.Ini = function() {
                        this.GenZhandian();
                    }, e.prototype.GetZhanDian = function(t) {
                        return this.zhanDianArr[t];
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.loadStageJson = function() {
                        this.OnGameJsoNloadok();
                    }, e.prototype.OnGameJsoNloadok = function() {
                        var t = Laya.loader.getRes(r["default"].stageJson);
                        this.GenZhandian2(t);
                    }, e.prototype.GenZhandian = function() {
                        this.loadStageJson();
                    }, e.prototype.GenZhandian2 = function(t) {
                        var e = [];
                        e = t;
                        for (var a = 0, r = e; a < r.length; a++) {
                            var d = r[a],
                                c = n["default"].Find(d.zhanDianFullPath);
                            c.active = s["default"].showZhanDianGob;
                            var p = c.addComponent(o["default"]);
                            p.transform = c.transform, p.name = d.zhanDianFullPath, this.zhanDianArr.push(p);
                            for (var f = [], m = 0, y = d.linkZhanDianFullPath; m < y.length; m++) {
                                var g = y[m],
                                    v = n["default"].Find(g);
                                if (Laya.Browser.onPC && p.transform == v.transform) {
                                    console.log("站点不能以链接到自己" + d.linkZhanDianFullPath);
                                    var S = 1;
                                    S.abc();
                                }
                                f.push(v);
                            }
                            p.links = [];
                            for (var w = 0; w < f.length; w++) {
                                if (p.links[w] = new i["default"](), p.links[w].Linknode = f[w].transform, null == p.links[w].Linknode) {
                                    var _;
                                    _.error();
                                }
                                if (p.links[w].LinknodeGob = f[w], s["default"].DrawNodeLine) {
                                    var L = this.owner.addComponent(l["default"]),
                                        L = this.owner.addComponent(l["default"]);
                                    L.start = h["default"].addVec3(p.transform.position, u["default"].Up), L.end = h["default"].addVec3(f[w].transform.position, u["default"].Up);
                                }
                            }
                        }
                    }, e;
            }(Laya.Script);
        a["default"] = d;
    }, {
        "../Core/GameObject": 8,
        "../Core/Vector3Ext": 9,
        "../Tools/JieTools": 34,
        "../Tools/PathLineDrawer": 35,
        "./GameDesgin": 20,
        "./ResourcesMgr": 25,
        "./U3dJsonModel/ZhanDianCfg": 26,
        "./gameCompont/ZhanDian": 29
    }],
    25: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Core/GameObject"),
            o = t("./BulletWaterShooty"),
            i = t("./EnimyWaterShooty"),
            r = t("../../LayaSample"),
            s = t("./EventTypeExt"),
            l = t("../3DPhysics/SphereThreeD"),
            u = t("./BulletDistantce"),
            h = t("./gameCompont/RaderBall"),
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dicPoolObjs = {}, e.dicCreateFunc = {}, e.dicEnimyEnimyCreateFunc = {},
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        if (null != e.Instance) {
                            var t = t;
                            t.throwerro;
                        }
                        e.Instance = this, r["default"].glEvent.once(s["default"].sceneLoadOk, this, this.OnsceneLoadOk);
                    }, e.prototype.LoadEnimyCfg = function() {
                        var t = Laya.loader.getRes(e.enimyJson);
                        this.enimyJsonCfgArr = t;
                    }, e.prototype.OnsceneLoadOk = function() {
                        var t = this;
                        if (null == this.qianGobgarr) {
                            this.qianGobgarr = [], this.qianGobgarr.push(null);
                            for (var a = 1; 10 > a; a++) {
                                var o = n["default"].Find("Resources/Items/qiang" + a);
                                o.active = !1, this.qianGobgarr.push(o);
                            }
                        }
                        this.LoadEnimyCfg(), this.bulletGo = n["default"].Find("Resources/" + e.poolBullteName),
                            this.bulletGoB = n["default"].Find("Resources/" + e.poolBullteBName), this.enimyGo = n["default"].Find("Character"),
                            this.dicCreateFunc[e.poolBullteName] = this.mCreate_Bullet, this.dicPoolObjs[e.poolBullteName] = [],
                            this.dicCreateFunc[e.poolBullteBName] = this.mCreate_BulletB, this.dicPoolObjs[e.poolBullteBName] = [],
                            this.bulletShuiQiuGo = n["default"].instantiate(this.bulletGoB), this.bulletShuiQiuGo.transform.scale = new Laya.Vector3(2, 2, 2),
                            this.dicEnimyEnimyCreateFunc[e.poolEnimyNameTypeA] = function() {
                                return t.mCreate_Enimy(e.poolEnimyNameTypeA, 0);
                            }, this.dicPoolObjs[e.poolEnimyNameTypeA] = [], this.dicEnimyEnimyCreateFunc[e.poolEnimyNameTypeB] = function() {
                                return t.mCreate_Enimy(e.poolEnimyNameTypeB, 1);
                            }, this.dicPoolObjs[e.poolEnimyNameTypeB] = [], this.dicEnimyEnimyCreateFunc[e.poolEnimyNameTypeC] = function() {
                                return t.mCreate_Enimy(e.poolEnimyNameTypeC, 2);
                            }, this.dicPoolObjs[e.poolEnimyNameTypeC] = [], this.dicEnimyEnimyCreateFunc[e.poolEnimyNameTypeD] = function() {
                                return t.mCreate_Enimy(e.poolEnimyNameTypeD, 3);
                            }, this.dicPoolObjs[e.poolEnimyNameTypeD] = [], this.dicCreateFunc[e.poolFX_SQ_Hit] = this.mCreate_FX_SQ_HitGo,
                            this.dicPoolObjs[e.poolFX_SQ_Hit] = [], this.FX_SQ_HitGo = n["default"].Find("Resources/Effect/FX_SQ_Hit");
                    }, e.prototype.mCreate_AvatatorItemMaozi = function() {
                        var t = n["default"].Instantiate2Scene(e.Instance.bulletGo);
                        t.addComponent(o["default"]);
                        return t.addComponent(l["default"]), this.dicPoolObjs[e.poolBullteName].push(t),
                            t;
                    }, e.prototype.getPool_Item = function(t) {
                        return Laya.Pool.getItemByCreateFun(t, this.dicCreateFunc[t], this);
                    }, e.prototype.getPool_ItemByEnimy = function(t) {
                        var a = "";
                        0 == t && (a = e.poolEnimyNameTypeA), 1 == t && (a = e.poolEnimyNameTypeB), 2 == t && (a = e.poolEnimyNameTypeC),
                            3 == t && (a = e.poolEnimyNameTypeD);
                        var n = Laya.Pool.getItemByCreateFun(a, this.dicEnimyEnimyCreateFunc[a], this);
                        return n;
                    }, e.prototype.getPool_ShuiQiu = function() {
                        var t = Laya.Pool.getItemByCreateFun(e.shuiQiuGobPoolName, this.mCreate_Shuiqiu, this);
                        return t;
                    }, e.prototype.Recover_ShuiQiu = function(t) {
                        Laya.Pool.recover(e.shuiQiuGobPoolName, t), t.active = !1;
                    }, e.prototype.mCreate_Shuiqiu = function() {
                        var t = n["default"].Instantiate2Scene(this.bulletShuiQiuGo);
                        t.addComponent(h["default"]);
                        return t;
                    }, e.prototype.mCreate_Bullet = function() {
                        var t = n["default"].Instantiate2Scene(this.bulletGo);
                        t.addComponent(o["default"]);
                        return t.addComponent(l["default"]), this.dicPoolObjs[e.poolBullteName].push(t),
                            t;
                    }, e.prototype.mCreate_BulletB_Old = function() {
                        var t = n["default"].Instantiate2Scene(this.bulletGoB);
                        t.addComponent(o["default"]);
                        return t.addComponent(l["default"]), this.dicPoolObjs[e.poolBullteName].push(t),
                            t;
                    }, e.prototype.mCreate_BulletB = function() {
                        var t = n["default"].Instantiate2Scene(this.bulletGoB);
                        t.addComponent(u["default"]);
                        return this.dicPoolObjs[e.poolBullteBName].push(t), t;
                    }, e.prototype.mCreate_Enimy = function(t, a) {
                        var o = n["default"].Instantiate2Scene(e.Instance.enimyGo),
                            r = o.addComponent(i["default"]);
                        return this.dicPoolObjs[t].push(o), r.poolName = t, r.SetData(this.enimyJsonCfgArr[a]),
                            o;
                    }, e.prototype.mCreate_FX_SQ_HitGo = function() {
                        var t = n["default"].Instantiate2Scene(e.Instance.FX_SQ_HitGo);
                        return this.dicPoolObjs[e.poolFX_SQ_Hit].push(t), t;
                    }, e.prototype.RecoverAll = function(t) {
                        for (var e = this.dicPoolObjs[t], a = 0; a < e.length; a++) Laya.Pool.recover(t, e[a]),
                            e[a].active = !1;
                    }, e.prototype.RecoverAllbullet = function() {
                        this.RecoverAll(e.poolBullteName), this.RecoverAll(e.poolBullteBName);
                    }, e.prototype.RecoverAllEnimybulletAndPlayEffect = function() {
                        for (var t = this.dicPoolObjs[e.poolBullteName], a = 0; a < t.length; a++) t[a].active && (Laya.Pool.recover(e.poolBullteName, t[a]),
                            t[a].active = !1, r["default"].glEvent.event(s["default"].PlayBulletRecoverEffect, t[a].transform.position));
                    }, e.prototype.RecoverFX_SQ_Hit = function(t) {
                        Laya.Pool.recover(e.poolFX_SQ_Hit, t);
                    }, e.prototype.Create_EnimyModel = function() {
                        var t = n["default"].InstantiateNoScene(e.Instance.enimyGo);
                        return t;
                    }, e.prototype.RecoverEnimy = function(t) {
                        Laya.Pool.recover(t.poolName, t.gameobject), t.gameobject.active = !1, console.log("RecoverEnimy");
                    }, e.prototype.RecoverCharatorAvatorItem = function(t, e) {
                        Laya.Pool.recover(t, e), e.active = !1;
                    }, e.prototype.GetHttpText = function(t, e, a) {
                        var n = [{
                                url: t
                            }],
                            o = Laya.Handler.create(e, a, null, !0);
                        Laya.Loader.JSON;
                        Laya.loader.create(n, o, null);
                    }, e.prototype.GetLoaclText = function(t, e, a) {
                        var n = [{
                            url: t
                        }];
                        Laya.loader.create(n, Laya.Handler.create(e, a, null, !1));
                    }, e.mianScene3dUrl = "res3d/LayaScene_WaterShootyGame/Conventional/WaterShootyGame.ls",
                    e.stageJson = "res/JsonFiles/stage01_JsonCfg.json", e.enimyJson = "res/JsonFiles/Enimy_JsonCfg.json",
                    e.zhujueJson = "res/JsonFiles/Zhujue_JsonCfg.json", e.TeShuNpcProperty = "res/JsonFiles/TeShuNpcProperty.json",
                    e.modelTextures = ["res3d/Texture/1.jpg", "res3d/Texture/2.jpg", "res3d/Texture/3.jpg", "res3d/Texture/4.jpg", "res3d/Texture/5.jpg"],
                    e.fireSound = "subGame/fire", e.bulletHitSound = "subGame/bulletHit", e.winSound = "subGame/win",
                    e.lostSound = "subGame/lost", e.npcDeathSound = "subGame/npcDeath", e.footSound = "subGame/foot",
                    e.openSanSound = "subGame/openSan", e.SanCountDownSound = "subGame/SanCountDown",
                    e.shuiqiubaozha = "subGame/shuiqiubaozha", e.rengshuiqiu = "subGame/rengshuiqiu",
                    e.poolBullteName = "bullet", e.poolBullteBName = "bulletZhujue", e.coloneEnimyName = "Enimy",
                    e.poolFX_SQ_Hit = "FX_SQ_Hit", e.shuiQiuGobPoolName = "shuiqiu", e.poolEnimyNameTypeA = "poolEnimyNameTypeA",
                    e.poolEnimyNameTypeB = "poolEnimyNameTypeB", e.poolEnimyNameTypeC = "poolEnimyNameTypeC",
                    e.poolEnimyNameTypeD = "poolEnimyNameTypeD", e;
            }(Laya.Script);
        a["default"] = d;
    }, {
        "../../LayaSample": 41,
        "../3DPhysics/SphereThreeD": 7,
        "../Core/GameObject": 8,
        "./BulletDistantce": 13,
        "./BulletWaterShooty": 14,
        "./EnimyWaterShooty": 17,
        "./EventTypeExt": 18,
        "./gameCompont/RaderBall": 28
    }],
    26: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t;
        }();
        a["default"] = n;
    }, {}],
    27: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./EventTypeExt"),
            o = t("../../LayaSample"),
            i = t("./GameMgrExt"),
            r = t("./CameraFollowWaterShooty"),
            s = t("../../UnityEngine/Time"),
            l = t("../../UnityEngine/InPut"),
            u = t("../Tools/JieTools"),
            h = t("../3DPhysics/OBBThreeD"),
            d = t("../3DPhysics/ShapeThreeD"),
            c = t("./BaseCharacter"),
            p = t("./GameDesgin"),
            f = t("../Core/GameObject"),
            m = t("../3DPhysics/CollsionManagerThreeD"),
            y = t("./gameCompont/ZhanDian"),
            g = t("./ResourcesMgr"),
            v = t("../GameViewExt"),
            S = t("./LayerConfig"),
            w = t("../Core/Vector3Ext"),
            _ = t("../../UnityEngine/Mathf"),
            L = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.subCountDownSpeed = .17, e.subattackCountDownColorSpeed = .25, e.addattackCountDownSpeed = .13,
                        e.bulletNumUseWaterBoom = 16, e.waterBoomSpeed = 22, e.death = !1, e.shooting = !1,
                        e.netxtPathIdx = 0, e.goNext = !1, e.moveSpeed = 20, e.attackCountDown = 0, e.superMan = !1,
                        e.waitrEnimyAnimaDeath = !1, e.attackPos = !1, e.waitGotoPos = !1, e.attakFrequencyMs = 200,
                        e.killScore = 0, e.killNum = 0, e.waitRocoverEnimy = [], e.updateBaohusanvalue = !0,
                        e.fireBulletCount = 0, e.fixFever = !1, e.testZhanDianIdx = 0, e.rengshuiqiangAnimaPlaying = !1,
                        e;
                }
                return __extends(e, t), e.prototype.currentZhandian = function() {
                    return this.m_currentZhandian;
                }, e.prototype.onAwake = function() {
                    var a = this;
                    t.prototype.onAwake.call(this), e.instantce = this, this.shootCor = this.AttckFunc,
                        this.baohuSan = f["default"].Find("Resources/Items/baohuSan"), this.baohuSanObbGo = f["default"].Find("Resources/Items/baohuSan/baohuSanObb"),
                        this.baohuSanObbGo.layer = this.gameobject.layer, this.baohuSanObb = this.baohuSanObbGo.addComponent(h["default"]),
                        this.baohuSanObb.mask = d["default"].BaoHuSan, this.baohuSanObb.useThisTransform = !0,
                        this.baohuSanObbGo.layer = S["default"].NotRender, this.DisSuperMan(), o["default"].glEvent.on("change_skin_event", this, this.OnCHANGE_SKIN),
                        o["default"].glEvent.on("goon_game_event", this, this.Resurgence), o["default"].glEvent.on(n["default"].goHome, this, this.ResurgenceStand),
                        o["default"].glEvent.on(n["default"].shuiqiuRocover, this, this.OnShuiqiuRocover),
                        this.gameobject.name = "zhujue", this.characterOBB.transform.localPositionX += .3,
                        this.OnSceneDataSetOk();
                    var i = !1;
                    Laya.Browser.onPC && i ? (g["default"].Instance.GetHttpText(this.CreateURLTeShuNpcPropety(), this, this.OnGetHttpTextTeShuNpc),
                        Laya.timer.loop(2e3, this, function() {
                            g["default"].Instance.GetHttpText(a.CreateURLTeShuNpcPropety(), a, a.OnGetHttpTextTeShuNpc);
                        })) : g["default"].Instance.GetLoaclText(g["default"].TeShuNpcProperty, this, this.OnGetLocalextTeShuNpc);
                }, e.prototype.CreateURLZhujuePropety = function() {
                    return this.url = "" + Laya.timer.currTimer,
                        this.url;
                }, e.prototype.OnGetHttpText = function() {
                    var t = Laya.loader.getRes(this.url);
                    this.attakFrequencyMs = t.attakFrequencyMs, this.bulletNumUseWaterBoom = t.bulletNumUseWaterBoom,
                        this.subCountDownSpeed = t.subCountDownSpeed, this.subattackCountDownColorSpeed = t.subattackCountDownColorSpeed,
                        this.addattackCountDownSpeed = t.addattackCountDownSpeed, this.waterBoomSpeed = t.waterBoomSpeed,
                        console.log(t);
                }, e.prototype.CreateURLTeShuNpcPropety = function() {
                    return this.TeShuNpcPropetyUrl = "http://192.168.6.196/TeShuNpcProperty.json?time=" + Laya.timer.currTimer,
                        this.TeShuNpcPropetyUrl;
                }, e.prototype.OnGetHttpTextTeShuNpc = function() {
                    var t = Laya.loader.getRes(this.TeShuNpcPropetyUrl);
                    o["default"].commonDataExt.TeShuNpcProperty = t;
                }, e.prototype.OnGetLocalextTeShuNpc = function() {
                    var t = Laya.loader.getRes(g["default"].TeShuNpcProperty);
                    o["default"].commonDataExt.TeShuNpcProperty = t;
                }, e.prototype.OnGetLocalText = function() {
                    var t = Laya.loader.getRes(g["default"].zhujueJson);
                    this.attakFrequencyMs = t.attakFrequencyMs;
                }, e.prototype.OnCHANGE_SKIN = function(t) {
                    this.CHANGE_SKIN(t);
                }, e.prototype.CHANGE_SKIN = function(t) {
                    if (null == this.zhujueQiangarr) {
                        this.zhujueQiangarr = [], this.zhujueQiangarr.push(null);
                        for (var e = 1; 10 > e; e++) {
                            var a = f["default"].Instantiate2Scene(g["default"].Instance.qianGobgarr[e]);
                            a.active = !1, this.zhujueQiangarr.push(a);
                        }
                    }
                    console.log("gun " + t), null != this.qiang && (this.qiang.active = !1), this.qiang = this.zhujueQiangarr[t],
                        this.qiang.active = !0, this.animator.linkSprite3DToAvatarNode(this.qiangPos, this.qiang);
                }, e.prototype.onStart = function() {
                    this.handQaing = f["default"].FindIgroneNullUseNode(this.gameobject, "Soldier/qiang"),
                        this.OnCHANGE_SKIN(1), this.animator.linkSprite3DToAvatarNode("qiangPos", this.baohuSan),
                        o["default"].glEvent.event(n["default"].gameProgprogress, 0), o["default"].glEvent.on(n["default"].enimyDeath, this, this.OnenimyDeath),
                        o["default"].glEvent.on(n["default"].gameCompelte, this, this.OngameCompelte);
                }, e.prototype.updateBaohusan = function() {}, e.prototype.OnSceneDataSetOk = function() {
                    this.m_currentZhandian = i["default"].instantce.pathlsit.GetZhanDian(0), Laya.Browser.onPC && this.TestLinkeNode(),
                        this.m_currentZhandian = i["default"].instantce.pathlsit.GetZhanDian(0);
                    var t = this.currentZhandian().transform.position;
                    this.SetPos(t), this.transform.rotation = this.currentZhandian().transform.rotation,
                        this.enimy = i["default"].instantce.SwpanEnimy(this.currentZhandian().transform),
                        this.LookAtEnimyBack(), this.SetCameraLookAtEnimy(this.enimy.transform), this.actions.PlayZhuJueStay(),
                        v["default"].instantc.KillCountFont.value = "x0", this.CleraData(), m["default"].instantce.SetCollsionDetecRange_Enimy(this.transform.position, this.enimy.characterOBB, this.characterOBB, this.baohuSanObb),
                        this.hp += p["default"].globalZhuJueHp;
                }, e.prototype.SetScore = function(t) {
                    this.killScore = t, v["default"].instantc.KillCountFont.value = this.killScore.toString(),
                        o["default"].commonData.newScore = this.killScore;
                }, e.prototype.SetKillNum = function(t) {
                    this.killNum = t, v["default"].instantc.killMul.value = "x" + this.killNum.toString(),
                        o["default"].commonData.killNum = this.killNum;
                }, e.prototype.SetCameraLookAtEnimy = function(t) {
                    r["default"].instantce.targetTran2 = t;
                }, e.prototype.SetPos = function(t) {
                    this.transform.position = t, this.FixZhuJueY();
                }, e.prototype.LookAtEnimy = function() {
                    this.transform.lookAt(this.enimy.transform.position, w["default"].Up), this.transform.localRotationEulerY += 180;
                }, e.prototype.LookAtEnimyBack = function() {
                    this.transform.lookAt(this.enimy.transform.position, w["default"].Up);
                }, e.prototype.GetEnimyDir = function() {
                    var t = this.getCurEnimy(),
                        e = u["default"].Vector3Subtract(t.transform.position, this.transform.position);
                    return e.x > 0 ? 1 : -1;
                }, e.prototype.OnenimyDeath = function() {
                    this.killScore += this.enimy.cfg.socre, this.SetScore(this.killScore), this.killNum += 1,
                        this.SetKillNum(this.killNum), this.death || this.EnimyDeathToDoFunc2();
                }, e.prototype.EnimyDeathToDoFunc2 = function() {
                    var t = this;
                    this.waitGotoPos = !0, this.waitrEnimyAnimaDeath = !0, this.actions.ZhuJueStay(),
                        this.StopFireCor(), Laya.timer.once(500, this, this.SetGoNext), this.waitRocoverEnimy.push(this.enimy),
                        Laya.timer.once(1e3, this, function() {
                            for (var e = 0, a = t.waitRocoverEnimy; e < a.length; e++) {
                                var n = a[e];
                                g["default"].Instance.RecoverEnimy(n);
                            }
                            t.waitRocoverEnimy = [];
                        }), v["default"].instantc.hpBg.visible = !1, o["default"].commonData.newScore = this.killScore,
                        v["default"].instantc.tiaoxing.ShowNext();
                }, e.prototype.onUpdate = function() {
                    if (0 != i["default"].instantce.playing && (l["default"].GetKeyDown(Laya.Keyboard.A),
                            l["default"].GetKeyDown(Laya.Keyboard.R) && this.Resurgence(), l["default"].GetKeyDown(Laya.Keyboard.D) && this.Death(),
                            this.updateBaohusanvalue && this.updateBaohusan(), l["default"].GetKeyDown(Laya.Keyboard.C) && (this.animator.unLinkSprite3DToAvatarNode(this.baohuSan),
                                this.updateBaohusanvalue = !1), !this.death && !this.waitrEnimyAnimaDeath && !this.rengshuiqiangAnimaPlaying)) {
                        if (this.goNext) this.GoNextFunc();
                        else if (this.enimy.dataDeath && this.shooting) this.StopFireCor();
                        else if (!this.goNext && 0 == this.waitGotoPos && l["default"].mouseButton0down) {
                            if (this.rengshuiqiangAnimaPlaying) return;
                            this.StartFireCor();
                        }
                        l["default"].mouseButton0Up && this.shooting && (this.StopFireCor(), this.actions.ZhuJueStay());
                    }
                }, e.prototype.ShootAnimatCanFire = function() {
                    this.AttckFunc(), Laya.timer.loop(this.attakFrequencyMs, this, this.AttckFunc);
                }, e.prototype.getCurEnimy = function() {
                    return this.enimy;
                }, e.prototype.onLateUpdate = function() {
                    v["default"].instantc.SetShootProGress(this.attackCountDown > 0), this.attackCountDown > 0 && !this.waitrEnimyAnimaDeath && !this.goNext && (this.superMan ? this.attackCountDown -= s["default"].deltaTime * this.subattackCountDownColorSpeed : this.attackCountDown -= s["default"].deltaTime * this.subCountDownSpeed,
                        o["default"].glEvent.event(n["default"].attackCountDownUpDate, this.attackCountDown),
                        this.attackCountDown <= 0 && (this.attackCountDown = 0, this.superMan && this.DisSuperMan()));
                }, e.prototype.AttckFunc = function() {
                    if (!this.rengshuiqiangAnimaPlaying && !this.enimy.death && !this.enimy.dataDeath) {
                        this.superMan || (this.attackCountDown += this.addattackCountDownSpeed);
                        var t = this.enimy;
                        p["default"].ZhuJueKongQiang || (this.fireBulletCount += 1, this.fireBulletCount % this.bulletNumUseWaterBoom == 0 ? this.Rengshuiqiu() : i["default"].instantce.ZhujueAttack(this.transform, t.transform, this.enimy)),
                            this.attackCountDown >= 1 && (this.attackCountDown = 1, this.superMan = !0, this.SuperMan()),
                            o["default"].glEvent.event(n["default"].attackCountDownUpDate, this.attackCountDown);
                    }
                }, e.prototype.SuperMan = function() {
                    if (!p["default"].notUseSuperMan) {
                        if (this.attackCountDown = 1, o["default"].glEvent.event(n["default"].attackCountDownUpDate, this.attackCountDown),
                            this.superMan = !0, this.baohuSan.active = !0, this.baohuSanObbGo.active = !0, r["default"].instantce.owner.getChildAt(0).active = !0,
                            0 == this.fixFever) {
                            var t = r["default"].instantce.owner.getChildAt(0);
                            t.transform.localPositionX -= .4, this.fixFever = !0;
                        }
                        v["default"].instantc.SetColorProGress(), o["default"].glEvent.event(n["default"].openSan);
                    }
                }, e.prototype.DisSuperMan = function() {
                    this.superMan = !1, this.baohuSan.active = !1, this.baohuSanObbGo.active = !1, r["default"].instantce.owner.getChildAt(0).active = !1,
                        v["default"].instantc.SetWhiteProGress(), o["default"].glEvent.event(n["default"].closeSan);
                }, e.prototype.OnDamge = function() {
                    this.rengshuiqiangAnimaPlaying || (this.hp -= 1, this.hp <= 0 && this.Death());
                }, e.prototype.Death = function() {
                    this.death || (this.death = !0, this.StopFireCor(), this.LookAtEnimy(), this.actions.DeathAnima(),
                        o["default"].glEvent.event(n["default"].zhujueDeath), this.enimy.StopAi(), Laya.timer.once(p["default"].gameOverPopUIMs, this, function() {
                            o["default"].glEvent.event("over_game_event");
                        }));
                }, e.prototype.FixZhuJueY = function() {
                    var t = this.transform.position;
                    t.y = 1, this.transform.position = t;
                }, e.prototype.SetGoNext = function() {
                    var t = this;
                    if (this.waitrEnimyAnimaDeath = !1, !this.death) {
                        var e = u["default"].GetRanDom(0, this.currentZhandian().links.length - 1),
                            a = this.currentZhandian().links[e].Linknode;
                        this.m_currentZhandian = this.currentZhandian().links[e].LinknodeGob.getComponent(y["default"]),
                            this.m_lastZhanDian = a.position, this.m_lastZhanDian.y = 1, this.enimy = i["default"].instantce.SwpanEnimy(a),
                            this.transform.lookAt(this.m_lastZhanDian, w["default"].Up), this.transform.localRotationEulerY += 180,
                            this.transform.localRotationEulerX = 0, this.transform.localRotationEulerZ = 0,
                            r["default"].instantce.targetTran2 = this.enimy.transform, Laya.timer.once(0, this, function() {
                                o["default"].glEvent.event(n["default"].StartCharaterRunning), t.goNext = !0, t.shooting = !1,
                                    t.actions.RunAnima();
                            });
                    }
                }, e.prototype.TestLinkeNode = function() {
                    for (var t = 0; 1e3 > t; t++) {
                        var e = u["default"].GetRanDom(0, this.currentZhandian().links.length - 1);
                        this.currentZhandian().links[e].Linknode;
                        this.m_currentZhandian = this.currentZhandian().links[e].LinknodeGob.getComponent(y["default"]);
                    }
                }, e.prototype.GoNextFunc = function() {
                    var t = this.m_lastZhanDian,
                        e = u["default"].subVec3(t, this.transform.position);
                    Laya.Vector3.normalize(e, e);
                    var a = Laya.Vector3.distance(this.transform.position, t),
                        n = _["default"].Min(this.moveSpeed * s["default"].deltaTime, a),
                        o = u["default"].mulVec3(e, n);
                    o.y = 0, this.transform.position = u["default"].addVec3(this.transform.position, o),
                        this.FixZhuJueY();
                    var i = Laya.Vector3.distance(this.transform.position, t);
                    .5 >= i && (this.ArrivePos(), this.transform.position = t);
                }, e.prototype.ArrivePos = function() {
                    v["default"].instantc.hpBg.visible = !0, this.goNext = !1, m["default"].instantce.SetCollsionDetecRange_Enimy(this.transform.position, this.enimy.characterOBB, this.characterOBB, this.baohuSanObb),
                        this.SetCameraLookAtEnimy(this.enimy.transform), this.LookAtEnimyBack(), this.getCurEnimy().LookAtZhuJue(),
                        this.actions.ZhuJueStay(), this.waitGotoPos = !1, this.enimy.StartBattle(), o["default"].glEvent.event(n["default"].StopCharaterRunning);
                }, e.prototype.OngameCompelte = function() {
                    this.waitrEnimyAnimaDeath = !0, this.actions.ZhuJueStay();
                }, e.prototype.Resurgence = function() {
                    o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(), this.hp = 1,
                        this.death = !1, this.shooting = !1, this.actions.PlayZhuJueStay(), this.getCurEnimy().StartAi(),
                        this.LookAtEnimyBack(), this.enimy.death && this.EnimyDeathToDoFunc2();
                }, e.prototype.ResurgenceStand = function() {
                    this.hp = 1, this.death = !1, this.shooting = !1, this.actions.ZhuJueStay();
                }, e.prototype.ReStart = function() {
                    console.log("ReStart!!"), this.enimy.CleraLoop(), g["default"].Instance.RecoverEnimy(this.enimy),
                        this.enimy = null, this.DisSuperMan(), this.StopFireCor(), this.attackCountDown = 0,
                        this.waitrEnimyAnimaDeath = !1, this.death = !1, this.shooting = !1, this.waitGotoPos = !1,
                        o["default"].glEvent.event(n["default"].attackCountDownUpDate, this.attackCountDown),
                        o["default"].glEvent.event(n["default"].gameProgprogress, 0), this.OnSceneDataSetOk();
                }, e.prototype.clickStartOrRePlay = function() {
                    this.ReStart(), this.enimy.StartBattle(), r["default"].instantce.lookatZhujue = !1;
                }, e.prototype.CleraData = function() {
                    this.SetScore(0), this.SetKillNum(0), this.fireBulletCount = 0;
                }, e.prototype.Rengshuiqiu = function() {
                    var t = this;
                    this.goNext || this.waitGotoPos || this.death || this.rengshuiqiangAnimaPlaying || (this.rengshuiqiangAnimaPlaying = !0,
                        this.shooting = !1, console.log("开始仍水球"), this.StopFireCor(), this.actions.Rengshuiqiu(),
                        o["default"].glEvent.event(n["default"].ZhuJueRengshuiqiu), Laya.timer.once(650, this, function() {
                            i["default"].instantce.ZhujueRengShuiQiu(t.transform, t.enimy.transform, t.enimy, t.waterBoomSpeed);
                        }), Laya.timer.once(1850, this, function() {
                            console.log("仍水球完成"), t.rengshuiqiangAnimaPlaying = !1, t.StopFireCor();
                        }));
                }, e.prototype.StartFireCor = function() {
                    if (0 == this.rengshuiqiangAnimaPlaying) {
                        if (this.goNext || this.waitGotoPos) return;
                        this.shooting = !0, this.actions.AttackAnima(), this.ShootAnimatCanFire(), console.log("StartFireCor" + this.rengshuiqiangAnimaPlaying);
                    }
                }, e.prototype.StopFireCor = function() {
                    Laya.timer.clear(this, this.AttckFunc), Laya.timer.clear(this, this.ShootAnimatCanFire),
                        this.shooting = !1, console.log("StopFireCor" + this.rengshuiqiangAnimaPlaying);
                }, e.prototype.OnShuiqiuRocover = function(t) {
                    null == this.FX_SQ_Hit_Big && (this.FX_SQ_Hit_Big = f["default"].Find("Resources/Items/FX_SQ_Hit_Big"),
                            this.FX_SQ_Hit_Big.transform.localScale = new Laya.Vector3(2, 2, 2)), this.FX_SQ_Hit_Big.active = !1,
                        this.FX_SQ_Hit_Big.active = !0, this.FX_SQ_Hit_Big.transform.position = t, Laya.Vector3.distance(t, this.enimy.transform.position) > 3 || this.enimy.OnDamgeShuiQiu();
                }, e;
            }(c["default"]);
        a["default"] = L;
    }, {
        "../../LayaSample": 41,
        "../../UnityEngine/InPut": 42,
        "../../UnityEngine/Mathf": 43,
        "../../UnityEngine/Time": 44,
        "../3DPhysics/CollsionManagerThreeD": 4,
        "../3DPhysics/OBBThreeD": 5,
        "../3DPhysics/ShapeThreeD": 6,
        "../Core/GameObject": 8,
        "../Core/Vector3Ext": 9,
        "../GameViewExt": 10,
        "../Tools/JieTools": 34,
        "./BaseCharacter": 12,
        "./CameraFollowWaterShooty": 15,
        "./EventTypeExt": 18,
        "./GameDesgin": 20,
        "./GameMgrExt": 21,
        "./LayerConfig": 23,
        "./ResourcesMgr": 25,
        "./gameCompont/ZhanDian": 29
    }],
    28: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../../UnityEngine/Mathf"),
            o = t("../../../UnityEngine/U3dToLayaTools"),
            i = t("../../Core/Vector3Ext"),
            r = t("../../Tools/JieTools"),
            s = t("../../../UnityEngine/Time"),
            l = t("../ResourcesMgr"),
            u = t("../../../LayaSample"),
            h = t("../EventTypeExt"),
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.speed = 10, e.distanceToTarget = 0, e.move = !0, e.reEnterScene = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    this.trail = this.gameObject.getChildByName("FX_SQ_BallTrail");
                }, e.prototype.Start = function() {
                    this.distanceToTarget = Laya.Vector3.distance(this.transform.position, this.target.transform.position),
                        this.move = !0;
                }, e.prototype.onEnable = function() {
                    this.reEnterScene = !0;
                }, e.prototype.onDisable = function() {
                    this.trail.trailFilter.time = 0;
                }, e.prototype.onUpdate = function() {
                    if (this.move) {
                        this.transform.scale = r["default"].addVec3(this.transform.scale, new Laya.Vector3(.04, .04, .04));
                        var t = this.target.transform.position;
                        this.transform.lookAt(t, i["default"].Up);
                        var e = 45 * n["default"].Min(1, Laya.Vector3.distance(this.transform.position, t) / this.distanceToTarget),
                            a = new Laya.Quaternion();
                        Laya.Quaternion.multiply(this.transform.rotation, o["default"].QuaternionEulerXYZ(n["default"].Clamp(e, -42, 42), 0, 0), a),
                            this.transform.rotation = a;
                        var d = Laya.Vector3.distance(this.transform.position, this.target.transform.position);
                        .5 > d && (this.move = !1, l["default"].Instance.Recover_ShuiQiu(this.gameObject),
                            u["default"].glEvent.event(h["default"].shuiqiuRocover, this.transform.position));
                        var c = n["default"].Min(this.speed * s["default"].deltaTime, d),
                            p = r["default"].mulVec3(i["default"].forward, c);
                        this.transform.translate(p, !0);
                    }
                    this.reEnterScene && (this.trail.trailFilter.time = 1, this.reEnterScene = !1);
                }, e;
            }(Laya.Script);
        a["default"] = d;
    }, {
        "../../../LayaSample": 41,
        "../../../UnityEngine/Mathf": 43,
        "../../../UnityEngine/Time": 44,
        "../../../UnityEngine/U3dToLayaTools": 45,
        "../../Core/Vector3Ext": 9,
        "../../Tools/JieTools": 34,
        "../EventTypeExt": 18,
        "../ResourcesMgr": 25
    }],
    29: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                e;
        }(Laya.Script);
        a["default"] = n;
    }, {}],
    30: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../views/LoginView"),
            o = t("./Game/ResourcesMgr"),
            i = t("../LayaSample"),
            r = t("../UnityEngine/Mathf"),
            s = t("./managerExt/WxMgrExt"),
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.currentProgress = 0, e.updaterogress = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        this.BaseAwake();
                        this.SetLoadUIProgress(0);
                        this.barPres.value = 0;
                        platform.getInstance().yadstartup("Water-Shooty", () => {
                            let yad = new Laya.Image();
                            yad.skin = "common/yad.png";
                            yad.left = 10;
                            yad.bottom = 10;
                            yad.zOrder = 1e3;
                            yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                                platform.getInstance().navigate("GAME", "LOGO")
                            })
                            Laya.stage.addChild(yad);
                            this.loadResExt(),
                                Laya.timer.frameLoop(1, this, this.loopUpdate);
                        });
                    },
                    e.prototype.OnsceneDataSetOk = function() {
                        this.StartloadSubpackage();
                    }, e.prototype.StartloadSubpackage = function() {
                        console.log("开始读取分包"), i["default"].commonData.subpackageNum = 0, i["default"].utils.loadSubpackageExt(0, "resSound", this.loadSubPackFinishExt, this);
                    }, e.prototype.loadSubPackFinishExt = function(t, e) {
                        e && (i["default"].commonData.subpackageNum--, console.log(i["default"].commonData.subpackageNum, "分包"),
                            0 == i["default"].commonData.subpackageNum && (i["default"].commonData.subpackageLoadOk = !0,
                                console.log("所有分包加载OK", i["default"].commonData.subpackageLoadOk)));
                    }, e.prototype.loadResSound = function() {
                        var t = "sound/",
                            e = ".mp3",
                            a = [{
                                url: t + o["default"].SanCountDownSound + e
                            }, {
                                url: t + o["default"].bulletHitSound + e
                            }, {
                                url: t + o["default"].fireSound + e
                            }, {
                                url: t + o["default"].footSound + e
                            }, {
                                url: t + o["default"].lostSound + e
                            }, {
                                url: t + o["default"].npcDeathSound + e
                            }, {
                                url: t + o["default"].openSanSound + e
                            }, {
                                url: t + o["default"].winSound + e
                            }, {
                                url: t + " bgm.mp3"
                            }];
                        console.log("Loader.create"), console.log(a), Laya.loader.create(a, Laya.Handler.create(this, this.OnSoundOk, null), null);
                    }, e.prototype.OnSoundOk = function() {
                        console.log("OnSoundOk"), i["default"].soundMgr.BgmPlay();
                    }, e.prototype.OnsubPackgeUpdateProgress = function(t) {
                        t *= .005, this.SetLoadUIProgress(t);
                    }, e.prototype.SetLoadUIProgress = function(t) {
                        this.updaterogress = t;
                    }, e.prototype.onLoading = function(t) {
                        t = .5 + .5 * t, this.SetLoadUIProgress(t);
                    }, e.prototype.loopUpdate = function() {
                        this.currentProgress = r["default"].Lerp(this.currentProgress, this.updaterogress, .03),
                            this.barPres.value = this.currentProgress, this.lblPres.text = Math.floor(100 * this.currentProgress) + "%";
                    },
                    e.prototype.loadResExt = function() {
                        i["default"].commonData.StartLoadMianPackTime = Laya.timer.currTimer,
                            this._loadCount = 1,
                            i["default"].commonData.load3dSceneStartTime = Laya.timer.currTimer;
                        for (var t = [{
                                url: o["default"].mianScene3dUrl,
                                clas: Laya.Scene,
                                priority: 1
                            }, {
                                url: o["default"].stageJson
                            }, {
                                url: o["default"].enimyJson
                            }], e = 0, a = o["default"].modelTextures; e < a.length; e++) {
                            var n = a[e];
                            t.push({
                                url: n
                            });
                        }
                        Laya.loader.create(t, Laya.Handler.create(this, this.onLoadFinish, [{
                            target: "3dres"
                        }], !1), Laya.Handler.create(this, this.onLoading, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, function(t) {
                            console.error("load 3dres error:", t);
                        });
                    }, e.prototype.onLoadFinish = function(t) {
                        i["default"].commonData.subpackageLoadOk = !0;
                        this.loadFinished = !0, this.loadGameScene(), i["default"].commonData.fishLoadMianPackTime = Laya.timer.currTimer,
                            Laya.Browser.onWeiXin && Laya.timer.once(5e3, this, this.delayLoad);
                    }, e.prototype.loadGameScene = function() {
                        e.isLoad || (Laya.Browser.onWeiXin ? this.loadFinished && this.loginFinished && (this.openGameScene(),
                            e.isLoad = !0) : (e.isLoad = !0, this.openGameScene()));
                    }, e.prototype.onOpened = function() {
                        i["default"].configMgr.init(), i["default"].soundMgr.init(), i["default"].wxMgr.init(),
                            i["default"].adMgr.init(), s["default"].CreateSingleTon();
                    }, e.prototype.onClosed = function() {
                        t.prototype.onClosed.call(this), Laya.timer.clear(this, this.loopUpdate);
                    }, e.isLoad = !1, e;
            }(n["default"]);
        a["default"] = l;
    }, {
        "../LayaSample": 41,
        "../UnityEngine/Mathf": 43,
        "../views/LoginView": 72,
        "./Game/ResourcesMgr": 25,
        "./managerExt/WxMgrExt": 40
    }],
    31: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {
                this.subpackageLoadOk = !1, this.wxUpWake = !1, this.load3dSceneStartTime = 0, this.oenAppTime = 0,
                    this.StartLoadMianPackTime = 0, this.fishLoadMianPackTime = 0, this.FirstBannerloadOk = !1,
                    this.OnIOS = !1, this.newScore = 1, this.newLevel = 1, this.goonCount = 0, this.isGame = !1,
                    this.isSleep = !1, this.watchVideo = !1, this.watchInter = !1, this.useTime = 1e3,
                    this.currentVersion = 1, this.showRevivalCard = !1, this.needWxAuthorize = !1, this.userInfo = {},
                    this.existInterAd = !1, this.existVideoAd = !1, this.existBannerAd = !1, this.isNoAds = !1,
                    this.isAdDelay = !1, this.adTime = 13e3, this.shareInfo = {}, this.launchOptions = {},
                    this.wxappList = {}, this.wxsysInfo = {}, this.roleSkinList = [], this.pillarSkinList = [],
                    this.roleSkinIndex = 0, this.signin = null, this.isCheckSignin = !1, this.subpackageNum = 0,
                    this.sceneUrl = "", this.needShowGuide = !0, this.latencyTime = 0, this.moveTime = 0,
                    this.gold = 0, this.curIncome = 0, this.newGold = 0, this.revenue = 0, this.existIncome = !1,
                    this.incomeTimer = 0, this.selectSkinTemp = {}, this.skinIndex = 0, this.killNum = 0,
                    this.isShowSkin = !0;
            }
            return t;
        }();
        a["default"] = n;
    }, {}],
    32: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.typeID = 1, this.spwanId = 1, this.avatorId = 1, 1 == t && (this.avatorId = 1),
                    2 == t && (this.avatorId = 2), 3 == t && (this.avatorId = 3), this.typeID = t;
            }
            return t;
        }();
        a["default"] = n;
    }, {}],
    33: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t;
        }();
        a["default"] = n;
    }, {}],
    34: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.getRandomInt = function(t, e) {
                var a = e - t,
                    n = Math.random();
                return t + Math.round(n * a);
            }, t.GetRanDom = function(e, a) {
                return t.getRandomInt(e, a);
            }, t.getRandomFloat0_1 = function(t, e) {
                return Math.random();
            }, t.compareWxApplistUserweight = function(t, e) {
                return t.weight < e.weight ? -1 : t.weight > e.weight ? 1 : 0;
            }, t.compareRnd = function(e, a) {
                return t.getRandomInt(-1, 1);
            }, t.SetSpriteScaleXY = function(t, e) {
                t.scaleX = e, t.scaleY = e;
            }, t.GetChilds = function(t, e) {
                for (var a = [], n = 0; n < t.numChildren; n++) {
                    var o = t.getChildAt(n);
                    o.name == e && a.push(o);
                }
                return a;
            }, t.GetChildsByLayer = function(e, a) {
                for (var n = [], o = t.getAllChilds(e), i = 0; i < o.length; i++) o[i].layer == a && n.push(o[i]);
                return n;
            }, t.GetChildsByLayerReTrunTransform = function(t, e) {
                for (var a = [], n = 0; n < t.numChildren; n++) {
                    var o = t.getChildAt(n);
                    o.layer == e && a.push(o.transform);
                }
                return a;
            }, t.Vector3MulLength = function(t, e) {
                return new Laya.Vector3(t.x * e, t.y * e, t.z * e);
            }, t.Vector2MulLength = function(t, e) {
                return new Laya.Vector2(t.x * e, t.y * e);
            }, t.Vector3Add = function(t, e) {
                var a = new Laya.Vector3();
                return Laya.Vector3.add(t, e, a), a;
            }, t.subVec3 = function(e, a) {
                return t.Vector3Subtract(e, a);
            }, t.addVec3 = function(e, a) {
                return t.Vector3Add(e, a);
            }, t.mulVec3 = function(e, a) {
                return t.Vector3MulLength(e, a);
            }, t.normalize = function(t) {
                Laya.Vector3.normalize(t, t);
            }, t.Vector3Add_Par2V2 = function(t, e) {
                var a = new Laya.Vector3(t.x + e.x, t.y + e.y, t.z + 0);
                return a;
            }, t.Vector2Add = function(t, e) {
                var a = new Laya.Vector2(t.x + e.x, t.y + e.y);
                return a;
            }, t.Vector2Add_ParV3 = function(t, e) {
                var a = new Laya.Vector2(t.x + e.x, t.y + e.y);
                return a;
            }, t.Vector2Subtract = function(t, e) {
                return new Laya.Vector2(t.x - e.x, t.y - e.y);
            }, t.Vector3Subtract = function(t, e) {
                var a = new Laya.Vector3();
                return Laya.Vector3.subtract(t, e, a), a;
            }, t.Vector3normalize = function(t) {
                var e = new Laya.Vector3();
                return Laya.Vector3.normalize(t, e), e;
            }, t.getComponentsInChilds = function(t, e) {
                var a = [];
                a = t.getComponents(e);
                for (var n = 0; n < t.numChildren; n++) {
                    var o = this.getComponentsInChilds(t.getChildAt(n), e);
                    o.forEach(function(t) {
                        a.push(t);
                    });
                }
                return a;
            }, t.getTransForm3dInChilds = function(e) {
                var a = [],
                    n = t.getAllChilds(e);
                return n.forEach(function(t) {
                    a.push(t.transform);
                }), a;
            }, t.getSprite3dInChilds = function(e) {
                var a = [],
                    n = t.getAllChilds(e);
                Laya.Scene3D;
                return n.forEach(function(t) {
                    var e = t;
                    e && a.push(e);
                }), a;
            }, t.getSprite3dInChildsFilterName = function(e, a) {
                var n = [],
                    o = t.getAllChilds(e);
                return o.forEach(function(t) {
                    var e = t;
                    e && e.name == a && n.push(e);
                }), n;
            }, t.getSprite3dInChildsByLayer = function(e, a) {
                var n = [],
                    o = t.getAllChilds(e);
                Laya.Scene3D;
                return o.forEach(function(t) {
                    var e = t;
                    e && e.layer == a && n.push(e);
                }), n;
            }, t.getChildsByNameDeth = function(e, a) {
                for (var n = [], o = t.getAllChilds(e), i = 0, r = o; i < r.length; i++) {
                    var s = r[i];
                    s.name == a && n.push(s);
                }
                return n;
            }, t.getAllChilds = function(t) {
                for (var e = [], a = [], n = 0; n < t.numChildren; n++) a.push(t.getChildAt(n));
                for (var o = 0, i = a; o < i.length; o++) {
                    var r = i[o];
                    e.push(r);
                }
                for (var n = 0; n < a.length; n++)
                    for (var s = this.getAllChilds(a[n]), l = 0, u = s; l < u.length; l++) {
                        var r = u[l];
                        e.push(r);
                    }
                return e;
            }, t.ConveryRightHand = function(e) {
                var a = t.Vector3Add(e.localRotationEuler, new Laya.Vector3(0, -180, 0));
                e.localRotationEuler = a, e.localPosition = new Laya.Vector3(-e.localPosition.x, e.localPosition.y, e.localPosition.z);
            }, t.threedFllow2d = function(t, e, a) {
                var n = new Laya.Vector3(e.x, e.y, 0),
                    o = new Laya.Vector3(0, 0, 0);
                t.convertScreenCoordToOrthographicCoord(n, o), a.position = o;
            }, t.WorldToViewportPoint = function(t, e, a) {
                var n = new Laya.Vector3(e.x, e.y, 0),
                    o = new Laya.Vector3(0, 0, 0);
                t.convertScreenCoordToOrthographicCoord(n, o);
                var i = new Laya.Vector3();
                return t.worldToViewportPoint(a.position, i), i;
            }, t.Vector2Distantce = function(t, e) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }, t.Lerp = function(t, e, a) {
                var n = new Laya.Vector3();
                return Laya.Vector3.lerp(t, e, a, n), n;
            }, t.SetHud = function(e, a, n, o) {
                var i = new Laya.Vector3(),
                    r = t.Vector3Add(a.transform.position, o);
                e.viewport.project(r, e.projectionViewMatrix, i), n.pos(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY);
            }, t.getForward = function(t) {
                var e = new Laya.Vector3();
                return t.getForward(e), e;
            }, t.getForwardReversal = function(t) {
                var e = new Laya.Vector3();
                return t.getForward(e), e.x = -e.x, e.y = -e.y, e.z = -e.z, e;
            }, t.color2Vec4 = function(t) {
                return new Laya.Vector4(t.r, t.g, t.b, t.a);
            }, t.NeedScreenFiexdExt = function() {
                var t = Laya.Browser.clientWidth / Laya.Browser.clientHeight;
                return .56 > t ? !0 : !1;
            }, t.Mathf_Rad2Deg = 57.29578, t;
        }();
        a["default"] = n;
    }, {}],
    35: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Core/GameObject"),
            o = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        this.phasorSpriter3D = new Laya.PixelLineSprite3D(10, "my");
                    }, e.prototype.onEnable = function() {}, e.prototype.onStart = function() {
                        n["default"].Add2Scene(this.phasorSpriter3D), this.OnDrawGizmos();
                    }, e.prototype.onUpdate = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.OnDrawGizmos = function() {
                        this.phasorSpriter3D.clear(), this.phasorSpriter3D.addLine(this.start, this.end, Laya.Color.WHITE, Laya.Color.WHITE);
                    }, e;
            }(Laya.Script);
        a["default"] = o;
    }, {
        "../Core/GameObject": 8
    }],
    36: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = Laya.Box,
            o = function(t) {
                function e() {
                    var a = t.call(this) || this;
                    return a.size(e.WID, e.HEI), a.img = new Laya.Image(), a.addChild(a.img), a.img.width = e.WID,
                        a.img.height = e.HEI, a.lockImg = new Laya.Image(), a.lockImg.width = e.WID, a.lockImg.height = e.HEI,
                        a.addChild(a.lockImg), a.selectImg = new Laya.Image(), a.selectImg.width = e.WID,
                        a.selectImg.height = e.HEI, a.addChild(a.selectImg), a.selectImg.visible = !1, a;
                }
                return __extends(e, t), e.prototype.setImg = function(t, e, a) {
                    this.img.skin = t, this.lockImg.skin = e, this.selectImg.skin = a;
                }, e.prototype.select = function() {
                    this.selectImg.visible = !0;
                }, e.prototype.Unselect = function() {
                    this.selectImg.visible = !1;
                }, e.prototype.UnLock = function() {
                    this.lockImg.visible = !1;
                }, e.prototype.isUnLock = function() {
                    return !this.lockImg.visible;
                }, e.WID = 100, e.HEI = 300, e;
            }(n);
        a["default"] = o;
    }, {}],
    37: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._value = 0, e._visible = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.font = this.owner.getChildByName("font"), this.maskImg = Laya.Loader.getRes(this.font.skin);
                }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this._value;
                    },
                    set: function(t) {
                        this._value = t, this.font.graphics.clear();
                        var e = this.font.width * t;
                        this.font.graphics.drawImage(this.maskImg, e - 300, 0, this.font.width, this.font.height);
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "skin", {
                    set: function(t) {
                        this.font.skin = t;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "visible", {
                    set: function(t) {
                        this.owner.visible = t;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e;
        }(Laya.Script);
        a["default"] = n;
    }, {}],
    38: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../Model/WorkRanData"),
            o = t("../managerExt/WxMgrExt"),
            i = t("../../LayaSample"),
            r = t("../Game/EventTypeExt"),
            s = t("../Tools/JieTools"),
            l = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        // this.thisGobTiaoxing = this.owner.getChildByName("tiaoxing"), 
                        this.thisGobChaoYue = this.owner.getChildByName("chaoyue"),
                            // this.avtorImg = this.thisGobTiaoxing.getChildByName("avtorImg"), 
                            // this.score = this.thisGobTiaoxing.getChildByName("Score"), 
                            this.avtorImgCy = this.thisGobChaoYue.getChildByName("avtorImg"),
                            this.thisGobChaoYue.visible = !1;
                        // this.thisGobTiaoxing.visible = !1;
                    }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {},
                    e.prototype.Int = function() {
                        this.OnworldRankDateUpteOk();
                    },
                    e.prototype.OnworldRankDateUpteOk = function() {
                        // this.ShowTiaoxing();
                    }, e.prototype.ShowNext = function() {
                        var t = this;
                        if (null != i["default"].commonDataExt.workRanDataArr && 0 != i["default"].commonDataExt.workRanDataArr.length) {
                            var e = s["default"].getRandomInt(0, 3);
                            if (0 == e) {
                                for (var a = [], n = 0, o = i["default"].commonDataExt.workRanDataArr; n < o.length; n++) {
                                    var r = o[n];
                                    r.avatar != i["default"].commonData.userInfo.avatar && a.push(r);
                                }
                                if (null != a && a.length >= 1) {
                                    this.thisGobChaoYue.visible = !0;
                                    var l = s["default"].getRandomInt(0, i["default"].commonDataExt.workRanDataArr.length - 1);
                                    this.avtorImgCy.skin = i["default"].commonDataExt.workRanDataArr[l].avatar, this.checkImageUrl(this.avtorImgCy),
                                        Laya.timer.once(3e3, this, function() {
                                            t.thisGobChaoYue.visible = !1;
                                        });
                                }
                            }
                        }
                    }, e.prototype.ShowTiaoxing = function() {
                        // var t = this;
                        // if (null != i["default"].commonDataExt.workRanDataArr && 0 != i["default"].commonDataExt.workRanDataArr.length) {
                        //     this.thisGobTiaoxing.visible = !0;
                        //     var e = i["default"].storageMgr.getGameStatus().maxScore;
                        //     if (null != i["default"].commonDataExt.workRanDataArr && i["default"].commonDataExt.workRanDataArr.length >= 1) {
                        //         var a = i["default"].commonDataExt.workRanDataArr[0];
                        //         if (a.score >= e && a.avatar != i["default"].commonData.userInfo.avatar) this.avtorImg.skin = a.avatar; else if (null != i["default"].commonDataExt.workRanDataArr && i["default"].commonDataExt.workRanDataArr.length >= 2) {
                        //             var n = i["default"].commonDataExt.workRanDataArr[1];
                        //             this.avtorImg.skin = n.avatar;
                        //         }
                        //     }
                        //     this.checkImageUrl(this.avtorImg), Laya.timer.once(3e3, this, function() {
                        //         t.thisGobTiaoxing.visible = !1;
                        //     });
                        // }
                    }, e.prototype.checkImageUrl = function(t) {
                        var e = "ui/rank/avater_default.png";
                        ("" == t.skin || null == t.skin) && (t.skin = e);
                    }, e;
            }(Laya.Script);
        a["default"] = l;
    }, {
        "../../LayaSample": 41,
        "../Game/EventTypeExt": 18,
        "../Model/WorkRanData": 33,
        "../Tools/JieTools": 34,
        "../managerExt/WxMgrExt": 40
    }],
    39: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {
                this.currentSceneUrl = "", this.WxAppListSceneVisible = !1;
            }
            return t;
        }();
        a["default"] = n;
    }, {}],
    40: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../../LayaSample"),
            o = t("../Game/EventTypeExt"),
            i = t("../GameViewExt"),
            r = function() {
                function t() {}
                return t.CreateSingleTon = function() {
                    null == t.instantce && (t.instantce = new t(), t.instantce.init());
                }, t.prototype.init = function() {
                    n["default"].glEvent.on(o["default"].WX_OpenAppCancel, this, this.onWX_OpenAppCancel),
                        n["default"].glEvent.on(o["default"].WX_benginOpenApp, this, this.OnWX_benginOpenApp),
                        n["default"].glEvent.on(o["default"].WX_OpenAppSuccess, this, this.OnWX_OpenAppSuccess);
                }, t.prototype.OnWX_OpenAppSuccess = function() {
                    Laya.MouseManager.enabled = !0;
                }, t.prototype.OnWX_benginOpenApp = function() {
                    Laya.MouseManager.enabled = !1;
                }, t.prototype.onWX_OpenAppCancel = function() {
                    Laya.MouseManager.enabled = !0,
                        n["default"].commonDataExt.WxAppListSceneVisible ||
                        "views/over.scene" != n["default"].commonDataExt.currentSceneUrl &&
                        "views/home.scene" != n["default"].commonDataExt.currentSceneUrl && (i["default"].instantc.OpenWXAPPListSecene(),
                            "views/clearing.scene" == n["default"].commonDataExt.currentSceneUrl && n["default"].commonDataExt.currentScene.close());
                }, t.UpLoadScore = function(t, e) {
                    var a = n["default"].storageMgr.getGameStatus(),
                        o = n["default"].wxMgr;
                    if (0 != t)
                        if (a.maxScore < t) {
                            console.log("主域提交分数" + t), o._submitScroe(t), n["default"].storageMgr.setMaxScore(t);
                            var i = {};
                            i.score = t, 0 == e && (e = 1), i.kill_num = e, i.use_time = Math.floor(n["default"].commonData.useTime / 1e3),
                                console.log("提交分数到后台" + t), n["default"].netMgr.request("v10/user/pass", i, function(e) {
                                    0 == e.code ? (console.log("上传分数成功" + t), n["default"].commonData.userInfo.max_score = e.result) : console.error("上传分数失败：", e);
                                });
                        } else console.log("不提交分数 " + a.maxScore + " " + t);
                }, t.FirestOpenGameUpLoadRankScore = function() {
                    var t = n["default"].storageMgr.getGameStatus(),
                        e = n["default"].wxMgr;
                    e._submitScroe(t.maxScore), console.log("MaxScore " + t.maxScore);
                }, t.UpdateWorldRankList = function(t) {
                    var e = {
                        page: t
                    };
                    n["default"].netMgr.request("v10/user/worldRanking", e, function(e) {
                        0 == e.code ? (n["default"].commonDataExt.workRanDataArr = e.result.list, console.log("UpdateWorldRankList"),
                            n["default"].glEvent.event(o["default"].worldRankDateUpteOk)) : console.error("get world ranking error:", e, t);
                    });
                }, t;
            }();
        a["default"] = r;
    }, {
        "../../LayaSample": 41,
        "../Game/EventTypeExt": 18,
        "../GameViewExt": 10
    }],
    41: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./Utils"),
            o = t("./manager/StorageMgr"),
            i = t("./manager/SoundMgr"),
            r = t("./manager/NetMgr"),
            s = t("./manager/WxMgr"),
            l = t("./manager/ConfigMgr"),
            u = t("./platforms/WxAd"),
            h = t("./manager/GameMgr"),
            d = t("./manager/TweenMgr"),
            c = t("./plug/ModelCreator"),
            p = t("./JieExt/managerExt/CommonDataExt"),
            f = function() {
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
                            return void 0 === this._soundMgr && (this._soundMgr = new i["default"]()), this._soundMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "storageMgr", {
                        get: function() {
                            return void 0 === this._storageMge && (this._storageMge = new o["default"]()), this._storageMge;
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
                            return void 0 === this._configMgr && (this._configMgr = new l["default"]()), this._configMgr;
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
                            return void 0 === this._wxMgr && (this._wxMgr = new s["default"]()), this._wxMgr;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "wxAd", {
                        get: function() {
                            return void 0 === this._wxAd && (this._wxAd = new u["default"]()), this._wxAd;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.buySkin = function(e, a, n, o) {
                        var i = {};
                        i.type = e, i.skin_id = a, t.netMgr.request("v20/skin/unlockSkin", i, function(a) {
                            if (0 == a.code) {
                                var i = a.result,
                                    r = {
                                        id: i.skin_number,
                                        is_unlock: i.is_unlock,
                                        video_num: i.unlock_num,
                                        unlock_type: e
                                    };
                                t.commonData.buySkinData[i.skin_number + ""] = r;
                            }
                            n && void 0 != o && o.call(n, a);
                        });
                    }, Object.defineProperty(t, "modelCreator", {
                        get: function() {
                            return void 0 === this._modelCreator && (this._modelCreator = new c["default"]()),
                                this._modelCreator;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t._eventListener = new Laya.EventDispatcher(), t._gameMgr = new h["default"](),
                    t._netMgr = new r["default"](), t._utils = new n["default"](), t._tweenMgr = new d["default"](),
                    t.screen = {
                        realPxRatio: 0,
                        offsetTop: 0,
                        allScreen: !1
                    }, t.commonDataExt = new p["default"](), t.currentSceneUrl = "", t;
            }();
        a["default"] = f;
    }, {
        "./JieExt/managerExt/CommonDataExt": 39,
        "./Utils": 46,
        "./manager/ConfigMgr": 47,
        "./manager/GameMgr": 48,
        "./manager/NetMgr": 49,
        "./manager/SoundMgr": 50,
        "./manager/StorageMgr": 51,
        "./manager/TweenMgr": 52,
        "./manager/WxMgr": 53,
        "./platforms/WxAd": 55,
        "./plug/ModelCreator": 58
    }],
    42: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./Time"),
            o = function(t) {
                function e() {
                    return t.call(this) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.p_onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.p_onMouseUp),
                        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDownR);
                }, e.prototype.onKeyDownR = function(t) {
                    e.dicKey[t.keyCode] = !0;
                }, e.prototype.p_onMouseDown = function() {
                    e.mouseButton0down = !0;
                }, e.prototype.p_onMouseUp = function() {
                    e.mouseButton0Up = !0;
                }, e.prototype.onLateUpdate = function() {
                    if (e.mouseButton0down = !1, e.mouseButton0Up = !1, Laya.Browser.onPC)
                        for (var t in e.dicKey) e.dicKey[t] = !1;
                }, e.prototype.onUpdate = function() {
                    n["default"].fixedDeltaTime = Laya.timer.delta, n["default"].deltaTime = .001 * Laya.timer.delta;
                }, e.GetKeyDown = function(t) {
                    return e.dicKey[t];
                }, e.mouseButton0down = !1, e.mouseButton0Up = !1, e.dicKey = {}, e;
            }(Laya.Script);
        a["default"] = o;
    }, {
        "./Time": 44
    }],
    43: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.LerpAngle = function(e, a, n) {
                var o = t.Repeat(a - e, 360);
                return o > 180 && (o -= 360), e + o * t.Clamp01(n);
            }, t.Repeat = function(e, a) {
                return e - t.Floor(e / a) * a;
            }, t.Floor = function(t) {
                return Math.floor(t);
            }, t.Clamp01 = function(t) {
                return 0 > t ? 0 : t > 1 ? 1 : t;
            }, t.Acos = function(t) {
                return Math.acos(t);
            }, t.Atan2 = function(t, e) {
                return Math.atan2(t, e);
            }, t.Lerp = function(e, a, n) {
                return e + (a - e) * t.Clamp01(n);
            }, t.InverseLerp = function(e, a, n) {
                return e != a ? t.Clamp01((n - e) / (a - e)) : 0;
            }, t.Max = function(t, e) {
                return t > e ? t : e;
            }, t.Min = function(t, e) {
                return e > t ? t : e;
            }, t.ClampMax = function(t, e) {
                return t > e ? e : t;
            }, t.ClampMin = function(t, e) {
                return e > t ? e : t;
            }, t.ClampMinMax = function(e, a, n) {
                return e = t.ClampMin(e, a), e = t.ClampMax(e, n);
            }, t.Clamp = function(t, e, a) {
                return e > t ? t = e : t > a && (t = a), t;
            }, t.Deg2Rad = .0174532924, t.Rad2Deg = 57.29578, t.PI = 3.14159274, t;
        }();
        a["default"] = n;
    }, {}],
    44: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return __extends(e, t), e.fixedDeltaTime = 0, e.deltaTime = 0, e;
        }(Laya.Script);
        a["default"] = n;
    }, {}],
    45: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.QuaternionEuler = function(t) {
                var e, a, n;
                e = t.x, a = t.y, n = t.z;
                var o, i, r, s, l = .0174532925;
                return e = e * l / 2, a = a * l / 2, n = n * l / 2, o = Math.sin(e) * Math.cos(a) * Math.cos(n) + Math.cos(e) * Math.sin(a) * Math.sin(n),
                    i = Math.cos(e) * Math.sin(a) * Math.cos(n) - Math.sin(e) * Math.cos(a) * Math.sin(n),
                    r = Math.cos(e) * Math.cos(a) * Math.sin(n) - Math.sin(e) * Math.sin(a) * Math.cos(n),
                    s = Math.cos(e) * Math.cos(a) * Math.cos(n) + Math.sin(e) * Math.sin(a) * Math.sin(n),
                    new Laya.Quaternion(o, i, r, s);
            }, t.QuaternionEulerXYZ = function(e, a, n) {
                var o = new Laya.Vector3(e, a, n);
                return t.QuaternionEuler(o);
            }, t.QuaternionMulVector3 = function(t, e) {
                var a = 2 * t.x,
                    n = 2 * t.y,
                    o = 2 * t.z,
                    i = t.x * a,
                    r = t.y * n,
                    s = t.z * o,
                    l = t.x * n,
                    u = t.x * o,
                    h = t.y * o,
                    d = t.w * a,
                    c = t.w * n,
                    p = t.w * o,
                    f = new Laya.Vector3();
                return f.x = (1 - (r + s)) * e.x + (l - p) * e.y + (u + c) * e.z, f.y = (l + p) * e.x + (1 - (i + s)) * e.y + (h - d) * e.z,
                    f.z = (u - c) * e.x + (h + d) * e.y + (1 - (i + r)) * e.z, f;
            }, t.Transform_Rotate = function(e, a) {
                var n = t.QuaternionEuler(a);
                Laya.Quaternion.multiply(e.localRotation, n, e.localRotation);
            }, t.Vector3_right = new Laya.Vector3(1, 0, 0), t;
        }();
        a["default"] = n;
    }, {}],
    46: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./LayaSample"),
            o = t("./JieExt/Game/EventTypeExt"),
            i = function() {
                function t() {
                    this.dicSubProgress = {};
                }
                return t.prototype.addClickEvent = function(t, e, a, o) {
                    if (t.offAllCaller(e), t instanceof Laya.Button) {
                        var i = function(t) {
                            t.stopPropagation(), a && a.call(e, t), n["default"].soundMgr.play("click");
                        };
                        t.on(Laya.Event.CLICK, e, i);
                    } else {
                        var r = 60,
                            s = 1,
                            l = (t.anchorX, t.anchorY, t.x * s, t.y * s, t.scaleX * s),
                            u = t.scaleX * s,
                            h = .9 * s,
                            d = function(e) {
                                e.stopPropagation(), Laya.Tween.to(t, {
                                    scaleX: h,
                                    scaleY: h
                                }, r);
                            };
                        t.on(Laya.Event.MOUSE_DOWN, e, d);
                        var c = function(i) {
                            i.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: l,
                                scaleY: u
                            }, r), a && a.call(e, i), (0 === o || o) && n["default"].soundMgr.play(o);
                        };
                        t.on(Laya.Event.MOUSE_UP, e, c);
                        var p = function(e) {
                            e.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: l,
                                scaleY: u
                            }, r);
                        };
                        t.on(Laya.Event.MOUSE_OUT, e, p);
                    }
                }, t.prototype.getRGB = function(t) {
                    var e = [],
                        a = [],
                        n = t.replace(/#/, "");
                    if (3 == n.length) {
                        for (var o = [], i = 0; 3 > i; i++) o.push(n.charAt(i) + n.charAt(i));
                        n = o.join("");
                    }
                    for (var i = 0; 3 > i; i++) e[i] = "0x" + n.substr(2 * i, 2), a.push(parseInt(e[i]));
                    return new Laya.Vector3(a[0] / 255, a[1] / 255, a[2] / 255);
                }, t.prototype.getRGBA = function(t, e) {
                    var a = 0 == e && e ? e : 1,
                        n = [],
                        o = [],
                        i = t.replace(/#/, "");
                    if (3 == i.length) {
                        for (var r = [], s = 0; 3 > s; s++) r.push(i.charAt(s) + i.charAt(s));
                        i = r.join("");
                    }
                    for (var s = 0; 3 > s; s++) n[s] = "0x" + i.substr(2 * s, 2), o.push(parseInt(n[s]));
                    return new Laya.Vector4(o[0] / 255, o[1] / 255, o[2] / 255, a);
                }, t.prototype.tweenShake = function(t, e) {
                    var a = new Laya.TimeLine(),
                        n = t.pivotX;
                    t.pivotX = t.width / 2, a.addLabel("shake1", 0).to(t, {
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
                        a.destroy(), t.rotation = 0, t.pivotX = n;
                    }) : a.on(Laya.Event.COMPLETE, this, function() {
                        a.destroy(), t.rotation = 0, t.pivotX = n;
                    }), a.play(0, !0);
                }, t.prototype.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var a = Math.max(t.length, e.length); t.length < a;) t.push("0");
                    for (; e.length < a;) e.push("0");
                    for (var n = 0; a > n; n++) {
                        var o = parseInt(t[n]),
                            i = parseInt(e[n]);
                        if (o > i) return 1;
                        if (i > o) return -1;
                    }
                    return 0;
                }, t.prototype.setMaterial = function(t) {}, t.prototype.format = function(t) {
                    function e(t) {
                        return 10 > t ? "0" + t : t;
                    }
                    var a = new Date(t),
                        n = a.getFullYear(),
                        o = a.getMonth() + 1,
                        i = a.getDate();
                    return n + "-" + e(o) + "-" + e(i);
                }, t.prototype.loadSubpackage_old = function(t, e) {
                    Laya.Browser.onWeiXin && wx.loadSubpackage({
                        name: t,
                        success: function(t) {
                            e.call(t, !0);
                        },
                        fail: function(t) {
                            console.error("分包加载失败"), e.call(t, !1);
                        }
                    });
                }, t.prototype.loadSubpackage = function(t, e, a) {
                    n["default"].commonData.subpackageNum++, console.log(n["default"].commonData.subpackageNum, "分包");
                    wx.loadSubpackage({
                        name: t,
                        success: function(n) {
                            console.log(t + "分包加载成功"), e.call(n, a, !0);
                        },
                        fail: function(n) {
                            console.error(t + "分包加载失败"), e.call(n, a, !1);
                        }
                    });
                }, t.prototype.loadSubpackageExt = function(t, e, a, i) {
                    var r = this;
                    this.dicSubProgress[t] = 0;
                    var s = e;
                    n["default"].commonData.subpackageNum++, console.log(n["default"].commonData.subpackageNum, "分包");
                    var l = wx.loadSubpackage({
                        name: s,
                        success: function(t) {},
                        fail: function(t) {}
                    });
                    l.onProgressUpdate(function(e) {
                        r.dicSubProgress[t] = e.progress, n["default"].glEvent.event(o["default"].subPackgeUpdateProgress, r.GetSubPackProgress());
                    });
                }, t.prototype.GetSubPackProgress = function() {
                    var t = 0,
                        e = 0;
                    for (var a in this.dicSubProgress) t += 1, e = this.dicSubProgress[a];
                    return e / t;
                }, t;
            }();
        a["default"] = i;
    }, {
        "./JieExt/Game/EventTypeExt": 18,
        "./LayaSample": 41
    }],
    47: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {
                this.bannerAdID = "adunit-bb8a0f979a8171e9", this.videoAdID = "adunit-76104c78ed741111",
                    this.interAdID = "adunit-inter", this.skinCfg = [];
            }
            return t.prototype.init = function() {}, t.prototype.clear3DRes = function(t, e) {
                for (var a = 0; a < t.length; ++a) {
                    var n = Laya.loader.getRes(t[a].url);
                    n && n.releaseResource(!0), Laya.Loader.clearRes(t[a].url);
                }
            }, t.prototype.getVideoId = function() {
                return this.videoAdID;
            }, t.prototype.getBannerId = function() {
                return this.bannerAdID;
            }, t.prototype.getInterId = function() {
                return this.interAdID;
            }, t.prototype.getSkinByIndex = function(t) {
                return this.skinCfg[t];
            }, t.prototype.getSkinIndexById = function(t) {
                for (var e = 0, a = this.skinCfg.length; a > e; ++e)
                    if (t == this.skinCfg[e].id) return e;
                return console.error("id not exist config."), -1;
            }, t.prototype.getSkinCfg = function() {
                return this.skinCfg;
            }, t;
        }();
        a["default"] = n;
    }, {}],
    48: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
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
            }), t;
        }();
        a["default"] = n;
    }, {}],
    49: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../plug/MD5"),
            o = t("../plug/Dict"),
            i = t("../LayaSample"),
            r = function() {
                function t() {
                    this.isTokenActive = !1, this.httpQueue = {}, this._reqCount = 0, this.version = 10,
                        this.deviceType = "wxapp", this.host = "", this.apiKey = "",
                        this.apiSecret = "", this.token = null, this.messageDict = new o["default"]();
                }
                return t.prototype.request = function(t, e, a) {},
                    t.prototype.setParmData = function(t) {
                        t.apiKey = this.apiKey, t.version = this.version, t.timestamp = Date.parse(new Date().toString()) / 1e3,
                            t.apiSign = "", this.token && (t.token = this.token);
                        var e = "",
                            a = new Array();
                        for (var o in t) a.push(o);
                        a = a.sort();
                        for (var i = 0; i < a.length; i++) e += encodeURIComponent(t[a[i]]);
                        var r = n["default"].hex_hmac_md5(this.apiSecret, e);
                        return t.apiSign = r, t;
                    },
                    t.prototype.errorHandler = function(t) {},
                    t.prototype.clearRequist = function(t) {
                        for (var e in this.httpQueue) e == t && delete this.httpQueue[e];
                    },
                    t.prototype.reLogin = function() {},
                    t.prototype.progressHandler = function(t) {},
                    t.prototype.response = function(t) {},
                    t.prototype.setToken = function(t) {
                        this.token = t, this.isTokenActive = !0;
                    }, t;
            }();
        a["default"] = r;
    }, {
        "../LayaSample": 41,
        "../plug/Dict": 56,
        "../plug/MD5": 57
    }],
    50: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = function() {
                function t() {
                    this._pathRoot = "res/sound/", this._soundCtx = {}, this._soundFile = [];
                    for (var t in i) {
                        var e = i[t];
                        this._soundFile.push(e);
                    }
                }
                return t.prototype.init = function() {
                    for (var t = this._pathRoot, e = "", a = this._soundFile, n = this._soundFile.length, o = 0; n > o; ++o) {
                        e = a[o];
                        var i = new Laya.SoundChannel();
                        i.url = t + e + ".mp3", "bgm" == e && (i.loops = 0), Laya.SoundManager.addChannel(i),
                            this._soundCtx[e] = !0;
                    }
                }, t.prototype.play = function(t) {
                    this._soundCtx[t] && n["default"].storageMgr.isPlaySound() && window.WebAudioEngine.playSound(this._pathRoot + t + ".mp3");
                }, t.prototype.playExt = function(t) {
                    n["default"].storageMgr.isPlaySound() && window.WebAudioEngine.playSound(this._pathRoot + t + ".mp3");
                }, t.prototype.playExtLoop = function(t) {
                    n["default"].storageMgr.isPlaySound() && window.WebAudioEngine.playSound(this._pathRoot + t + ".mp3", 0);
                }, t.prototype.stopExt = function(t) {
                    console.log("stopSound" + t), window.WebAudioEngine.stopSound(this._pathRoot + t + ".mp3");
                }, t.prototype.stop = function(t) {
                    console.log("stopSound" + t), this._soundCtx[t] && window.WebAudioEngine.stopSound(this._pathRoot + t + ".mp3");
                }, t.prototype.BgmPlay = function() {
                    if (0 != n["default"].commonData.subpackageLoadOk) {
                        var t = n["default"].storageMgr.isPlaySound();
                        window.WebAudioEngine.playMusic(this._pathRoot + "bgm.mp3", 0)
                    }
                }, t.prototype.ReSumeBgm = function() {
                    if (console.log("ReSumeBgm"), 0 != n["default"].commonData.subpackageLoadOk) {
                        var t = n["default"].storageMgr.isPlaySound();
                        t && (Laya.Browser.onMiniGame && n["default"].commonData.OnIOS ? (console.log("ReSumeBgmoniOS"),
                            null != this.wxAudioContext && this.wxAudioContext.play()) : (console.log("ReSumeBgmonAndroid"),
                            window.WebAudioEngine.playMusic(this._pathRoot + "bgm.mp3", 0)));
                    }
                }, t.prototype.ShowMusicMuted = function() {
                    console.log("is this showMusicMuted");
                    // console.log("musicMuted=" + Laya.SoundManager.musicMuted), console.log("muted=" + Laya.SoundManager.muted), 
                    // console.log("musicVolume=" + Laya.SoundManager.musicVolume), console.log("soundVolume=" + Laya.SoundManager.soundVolume);
                }, t.prototype.PlayBgmUseWXAPI = function(t) {
                    Laya.Browser.onMiniGame && (null == this.wxAudioContext && (this.wxAudioContext = wx.createInnerAudioContext(),
                            this.wxAudioContext.src = t, this.wxAudioContext.loop = !0), console.log("PlayBgmUseWXAPI:" + t),
                        this.wxAudioContext.play(), this.wxAudioContext.volume = 1);
                }, t.prototype.StopPlayBgmUseWXAPI = function() {
                    Laya.Browser.onMiniGame && (null == this.wxAudioContext && (this.wxAudioContext = wx.createInnerAudioContext(),
                        this.wxAudioContext.loop = !0), console.log("StopPlayBgmUseWXAPI:"), this.wxAudioContext.stop());
                }, t;
            }();
        a["default"] = o;
        var i;
        ! function(t) {
            t.BGM = "bgm", t.OVER = "over", t.HIT = "hit", t.CLICK = "click";
        }(i || (i = {}));
    }, {
        "../LayaSample": 41
    }],
    51: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = t("../JieExt/Model/CommonData"),
            i = function() {
                function t() {
                    this.commonData = new o["default"](), this.skindata = [], this._userData = null,
                        this._userDataKey = "userData", this.init();
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
                    this._userData.isPlaySound = t, this.writeStorage(), n["default"].soundMgr.BgmPlay();
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
                        this._userData.weaponTipsTime || (this._userData.weaponTipsTime = 0), this._userData.gameStatus.videoCount || (this._userData.gameStatus.videoCount = 8),
                        this.writeStorage();
                }, t.prototype.setSigninTime = function(t) {
                    this._userData.signinTime = t, this.writeStorage();
                }, t.prototype.isSkinTips = function() {
                    return Math.floor(this._userData.weaponTipsTime / 86400) != Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, t.prototype.isSignin = function() {
                    var t = !0,
                        e = this._userData.signinTime;
                    return t = 2 > e ? !0 : 3 > e ? !1 : Math.floor(e / 86400) == Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, t.prototype.setWeaponTips = function(t) {
                    this._userData.weaponTipsTime = t ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3),
                        this.writeStorage();
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
                }, t.prototype.setMaxScoreForce = function(t) {
                    this._userData.gameStatus.maxScore = t, this.writeStorage();
                }, t.prototype.setMaxScoreClampMin = function(t) {
                    this._userData.gameStatus.maxScore < t && (this._userData.gameStatus.maxScore = t,
                        this.writeStorage());
                }, t.prototype.setVideoCount = function(t) {
                    t ? this._userData.gameStatus.videoCount = t : this._userData.gameStatus.videoCount--,
                        this.writeStorage();
                }, t.prototype.readUnLockSkinStorage = function() {
                    var t = Laya.LocalStorage.getItem("skin_jie");
                    t && (this.skindata = JSON.parse(t));
                }, t.prototype.writeUnLockSkinStorage = function() {
                    Laya.LocalStorage.setItem("skin_jie", JSON.stringify(this.skindata));
                }, t.prototype.setSkinTips = function(t) {
                    this._userData.weaponTipsTime = t ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3),
                        this.writeStorage();
                }, t;
            }();
        a["default"] = i;
    }, {
        "../JieExt/Model/CommonData": 31,
        "../LayaSample": 41
    }],
    52: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../plug/Dict"),
            o = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.targets = [], e.dic = new n["default"](), e;
                }
                return __extends(e, t), e.prototype.toAlpha = function(t, e, a, n, o) {
                    function i() {
                        var o = n ? new Laya.Handler(this, r) : null;
                        Laya.Tween.to(t, {
                            alpha: e
                        }, a, null, o);
                    }

                    function r() {
                        Laya.Tween.to(t, {
                            alpha: 1
                        }, a, null, Laya.Handler.create(this, i));
                    }
                    void 0 === n && (n = !1), void 0 === o && (o = 1), this.saveTarget(t), t.alpha = o,
                        i();
                }, e.prototype.toScale = function(t, e, a, n, o, i) {
                    function r() {
                        var e = o || n ? new Laya.Handler(this, s) : null;
                        Laya.Tween.to(t, {
                            scaleX: i,
                            scaleY: i
                        }, a, null, e);
                    }

                    function s() {
                        var e = o ? new Laya.Handler(this, r) : null;
                        Laya.Tween.to(t, {
                            scaleX: 1,
                            scaleY: 1
                        }, a, null, e);
                    }
                    void 0 === o && (o = !1), void 0 === i && (i = e), this.saveTarget(t), t.scaleX = 1,
                        t.scaleY = 1, r();
                }, e.prototype.toPosition = function(t, e, a, n, o) {
                    function i() {
                        if (n) switch (o) {
                            case 0:
                                var i = new Laya.Handler(this, r);
                                break;

                            case 1:
                                var i = new Laya.Handler(this, s);
                        }
                        Laya.Tween.to(t, {
                            x: e.x,
                            y: e.y
                        }, a, null, i);
                    }

                    function r() {
                        Laya.Tween.to(t, {
                            x: l.x,
                            y: l.y
                        }, a, null, Laya.Handler.create(this, i));
                    }

                    function s() {
                        t.x = l.x, t.y = l.y, i();
                    }
                    void 0 === n && (n = !1), void 0 === o && (o = 0), this.saveTarget(t);
                    var l = new Laya.Vector2(t.x, t.y);
                    i();
                }, e.prototype.fromAlpha = function(t, e, a, n) {
                    function o() {
                        var o = n ? new Laya.Handler(this, i) : null;
                        Laya.Tween.from(t, {
                            alpha: e
                        }, a, null, o);
                    }

                    function i() {
                        Laya.Tween.from(t, {
                            alpha: 1
                        }, a, null, Laya.Handler.create(this, o));
                    }
                    void 0 === n && (n = !1), this.saveTarget(t), t.alpha = 1, o();
                }, e.prototype.fromScale = function(t, e, a, n) {
                    function o() {
                        var o = n ? new Laya.Handler(this, i) : null;
                        Laya.Tween.from(t, {
                            scaleX: e,
                            scaleY: e
                        }, a, null, o);
                    }

                    function i() {
                        Laya.Tween.from(t, {
                            scaleX: 1,
                            scaleY: 1
                        }, a, null, Laya.Handler.create(this, o));
                    }
                    void 0 === n && (n = !1), this.saveTarget(t), o();
                }, e.prototype.numberAnim = function(t, e, a, n, o) {
                    var i = {};
                    i.value = t;
                    var r = Laya.Tween.to(i, {
                        value: e
                    }, a);
                    r.update = new Laya.Handler(this, function() {
                        n.call(i.value, o);
                    });
                }, e.prototype.saveTarget = function(t) {
                    var e = this.dic.get(t.scene.url);
                    e ? e.push(t) : (e = [], e.push(t), this.dic.set(t.scene.url, e));
                }, e.prototype.clearAll = function(t) {
                    var e = this.dic.get(t.scene.url);
                    e && (e.forEach(function(t) {
                        Laya.Tween.clearAll(t);
                    }), e = []);
                }, e;
            }(Laya.Script);
        a["default"] = o;
    }, {
        "../plug/Dict": 56
    }],
    53: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = t("../JieExt/Game/EventTypeExt"),
            i = function() {
                function t() {}
                return t.prototype.init = function() {
                        if (this.preTime = 0, this.buttonAuthorize1 = null, this._shareStartTime = new Date().getTime() + 86e3,
                            this._isCreateWxInfoBtn = !1, Laya.Browser.onWeiXin) {
                            var t = window.wx.getSystemInfoSync();
                            if (n["default"].commonData.wxsysInfo = t, this._regisiterWXCallback(), this.getLaunchOption(),
                                this.showShareMenuWithTicket(!0), this.login(), Laya.Browser.onMiniGame) {
                                var e = n["default"].commonData.wxsysInfo;
                                e && e.platform.startsWith("ios") && (n["default"].commonData.OnIOS = !0), console.log(e);
                            }
                            console.log("WX OnIPHONE?" + n["default"].commonData.OnIOS);
                        }
                    },
                    t.prototype.login = function() {},
                    t.prototype.createWxInfoBtn1 = function() {
                        this._isCreateWxInfoBtn = !0;
                        var t = n["default"].wxMgr,
                            e = n["default"].commonData.wxsysInfo,
                            a = e.screenWidth,
                            o = e.screenHeight,
                            i = (e.screenWidth - a) / 2,
                            r = (e.screenHeight - o) / 2,
                            s = {
                                left: i,
                                top: r,
                                width: a,
                                height: o,
                                lineHeight: o,
                                backgroundColor: "#00000000",
                                color: "#ffffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            };
                        t.buttonAuthorize1 = window.wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: s,
                            withCredentials: !0
                        }), t.showAuthorizeBtn(!0), t.buttonAuthorize1.onTap(function(e) {
                            var a = new Date().getTime(),
                                o = Math.floor((a - t.preTime) / 1e3);
                            if (t.preTime = a, !(1 > o)) {
                                if (e.userInfo) {
                                    var i = {};
                                    i.encrypted_data = e.encryptedData, i.iv = e.iv, n["default"].netMgr.request("v10/common/authorizedLogin", i, function(e) {
                                        0 !== e.code ? console.error("authorized login fault. code:" + e.code) : t.setUserInfo(e.result);
                                    });
                                } else console.log("授权取消");
                                n["default"].commonData.needWxAuthorize = !1, t.showAuthorizeBtn(!1);
                            }
                        });
                    }, t.prototype.getSkinData = function(t) {
                        var e = {};
                        n["default"].netMgr.request("v10/skin/lists", e, function(e) {
                            if (0 != e.code) console.error("skin lists error", e);
                            else {
                                for (var a = e.result.roleSkinList, o = 0; 4 > o; ++o) 1 == a[o].is_default;
                                n["default"].commonData.roleSkinList = e.result.roleSkinList, n["default"].commonData.pillarSkinList = e.result.pillarSkinList,
                                    n["default"].glEvent.event("load_finish_event", {
                                        target: "skinData"
                                    }), void 0 != t && t(e);
                            }
                        });
                    }, t.prototype.setLoginInfo = function(t) {}, t.prototype.setUserInfo = function(t) {
                        var e = t.userInfo;
                        n["default"].netMgr.setToken(t.token), n["default"].commonData.userInfo = e, 0 != e.last_sign_time && n["default"].storageMgr.setSigninTime(e.last_sign_time),
                            n["default"].commonData.isCheckSignin = !0;
                        var a = n["default"].storageMgr.getGameStatus();
                        e.pass = 0;
                        var o = e.max_score < a.maxScore ? a.maxScore : e.max_score;
                        n["default"].glEvent.event("updateCoin", {}), o && n["default"].storageMgr.setMaxScore(o);
                    }, t.prototype.showAuthorizeBtn = function(t) {
                        this.buttonAuthorize1 && (t ? this.buttonAuthorize1.show() : this.buttonAuthorize1.hide());
                    }, t.prototype.getLaunchOption = function() {
                        n["default"].commonData.launchOptions = window.wx.getLaunchOptionsSync();
                    }, t.prototype.showToast = function(t, e, a) {
                        void 0 === a && (a = "none"), window.wx && window.wx.showToast({
                            title: t,
                            duration: e,
                            icon: a
                        });
                    }, t.prototype.hideToast = function() {
                        window.wx && window.wx.hideToast();
                    }, t.prototype._regisiterWXShareCallback = function() {
                        var t = n["default"].wxMgr;
                        Laya.Browser.onWeiXin && n["default"].netMgr.token && window.wx.onShareAppMessage(function() {
                            var e = t.getShareContent(1),
                                a = {
                                    title: e.share_title,
                                    imageUrl: e.share_img,
                                    query: "share_id=" + e.share_id + "&share_type=" + e.share_type + "&id=" + n["default"].commonData.userInfo.id,
                                    success: function(t) {},
                                    fail: function() {}
                                };
                            return t._upShareInfo(e.share_id), a;
                        });
                    }, t.prototype.buySkin = function(t, e, a, o) {
                        var i = {};
                        i.type = t, i.skin_id = e, n["default"].netMgr.request("v20/skin/unlockSkin", i, function(e) {
                            if (0 == e.code) {
                                var i = e.result,
                                    r = {
                                        id: i.skin_number,
                                        is_unlock: i.is_unlock,
                                        video_num: i.unlock_num,
                                        unlock_type: t
                                    };
                                n["default"].commonData.buySkinData[i.skin_number + ""] = r;
                            }
                            a && void 0 != o && o.call(a, e);
                        });
                    }, t.prototype.changeSkin = function(t, e) {
                        var a = {};
                        a = t, a = e, n["default"].netMgr.request("v10/skin/switchSkin", a, function(t) {});
                    }, t.prototype.worldRank = function(t) {}, t.prototype._submitScroe = function(t) {
                        if (Laya.Browser.onWeiXin) {
                            var e = window.wx.getOpenDataContext();
                            e.postMessage({
                                cmd: "submit_scroe",
                                score: t
                            }), n["default"].glEvent.event("submit_scroe_event", {});
                        }
                    }, t.prototype.showFriendRank = function(t) {
                        if (Laya.Browser.onWeiXin) {
                            n["default"].glEvent.event("show_friend_rank_event", {
                                isShow: t
                            });
                            var e = t ? "open_friend_rank" : "close_friend_rank",
                                a = window.wx.getOpenDataContext();
                            a.postMessage({
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
                                a = window.wx.getOpenDataContext();
                            a.postMessage({
                                cmd: e
                            }), n["default"].glEvent.event("show_lite_rank_event", {
                                isShow: t
                            });
                        }
                    }, t.prototype.showOverFriendTips = function(t) {
                        if (Laya.Browser.onWeiXin) {
                            var e = t ? "open_over_friend" : "close_over_friend",
                                a = window.wx.getOpenDataContext();
                            a.postMessage({
                                cmd: e,
                                score: n["default"].commonData.newScore
                            }), n["default"].glEvent.event("over_friend_event", {
                                isShow: t
                            });
                        }
                    }, t.prototype.showLoopFriendTips = function(t) {
                        if (Laya.Browser.onWeiXin) {
                            var e = t ? "open_loop_friend" : "close_loop_friend",
                                a = window.wx.getOpenDataContext();
                            a.postMessage({
                                cmd: e,
                                score: n["default"].commonData.newScore
                            }), n["default"].glEvent.event("loop_over_event", {
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
                        Laya.Browser.onWeiXin && n["default"].storageMgr.isPlayVibrate() && window.wx.vibrateShort({
                            success: function(t) {}
                        });
                    }, t.prototype.playVibrateLong = function() {
                        Laya.Browser.onWeiXin && n["default"].storageMgr.isPlayVibrate() && window.wx.vibrateLong({
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
                        var e = n["default"].wxMgr;
                        if (n["default"].commonData.isSleep = !1, n["default"].commonData.wxUpWake = !0,
                            n["default"].glEvent.event("wx_wake_event", {}), n["default"].soundMgr.ReSumeBgm(),
                            e._statuShareGame) {
                            e._statuShareGame = !1;
                            var a = new Date().getTime(),
                                o = a - e._shareStartTime,
                                i = 2500 > o ? !1 : !0;
                            i && e._upShareInfo(e._shareId), n["default"].glEvent.event("share_back_event", {
                                isShare: i,
                                shareId: e._shareId
                            }), e._shareStartTime = new Date().getTime() + 86e3;
                        }
                    }, t.prototype.onHideEvent = function() {
                        n["default"].commonData.isSleep = !0;
                        n["default"].wxMgr;
                        n["default"].glEvent.event("wx_sleep_event", {});
                    }, t.prototype.openOtherApp = function(t, e) {
                        if (Laya.Browser.onWeiXin) {
                            n["default"].glEvent.event(o["default"].WX_benginOpenApp);
                            var a = n["default"].commonData.wxappList[e],
                                i = "",
                                r = -1,
                                s = -1;
                            if (a)
                                for (var l = 0, u = a; l < u.length; l++) {
                                    var h = u[l];
                                    if (h.app_id == t) {
                                        r = h.wx_id, s = h.ad_id, i = h.app_path;
                                        break;
                                    }
                                }
                            window.wx.navigateToMiniProgram({
                                appId: t,
                                path: i,
                                success: function(e) {
                                    return n["default"].glEvent.event(o["default"].WX_OpenAppSuccess), -1 == r ? void console.error("click app not find id,for appid:", t) : void n["default"].netMgr.request("v10/common/clickWxapp", {
                                        wx_id: r,
                                        ad_id: s,
                                        type: 1
                                    }, function(e) {
                                        0 !== e.code && console.error("log goto wxapp fault. code:" + e), 0 == e.code && Laya.Browser.onMiniGame && window.wx.aldSendEvent("小程序跳转成功", {
                                            appid: t,
                                            _appPath: i
                                        });
                                    });
                                },
                                fail: function(e) {
                                    n["default"].glEvent.event(o["default"].WX_OpenAppCancel), n["default"].netMgr.request("v10/common/clickWxapp", {
                                        wx_id: r,
                                        ad_id: s,
                                        type: 0
                                    }, function(e) {
                                        0 !== e.code && console.error("log goto wxapp fault. code:" + e), 0 == e.code && Laya.Browser.onMiniGame && window.wx.aldSendEvent("小程序跳转失败", {
                                            appid: t,
                                            _appPath: i
                                        });
                                    });
                                }
                            });
                        }
                    }, t.prototype.getWxappList = function(t) {
                        var e = n["default"].commonData.wxappList[t],
                            a = [];
                        if (e) {
                            for (var o = 0, i = e; o < i.length; o++) {
                                var r = i[o],
                                    s = {};
                                s.app_img = r.app_img, s.app_id = r.app_id, s.category = r.category, s.weight = r.weight,
                                    a.push(s);
                            }
                            a.sort(function(t, e) {
                                return t.weight - e.weight;
                            });
                        }
                        return a;
                    },
                    t.prototype.shareFriend = function(t, e) {},
                    t.prototype.getShareContent = function(t) {},
                    t.prototype.upViewVideoInfo = function(t, e) {},
                    t.prototype._upShareInfo = function(t) {
                        var e = {};
                        e.share_id = t, n["default"].netMgr.request("v10/user/recordShare", e, function(t) {
                            0 !== t.code && console.error("upload user share fault.");
                        });
                    }, t.prototype.getSignData = function(t, e) {
                        var a = {};
                        n["default"].netMgr.request("v10/activity/signPrize", a, function(a) {
                            0 !== a.code ? console.error("get sign data fault.") : (n["default"].commonData.signin = a.result,
                                e && e.call(t, a.result));
                        });
                    }, t.prototype.getSignPrize = function(t, e, a) {
                        var o = n["default"].wxMgr,
                            i = {};
                        i["double"] = a ? 1 : 0, n["default"].netMgr.request("v10/activity/getSignPrize", i, function(a) {
                            0 !== a.code ? o.showToast(a.msg, 2e3) : (n["default"].commonData.signin = a.result,
                                e && e.call(t, a.result));
                        });
                    }, t.prototype.getDiskData = function(t, e) {
                        var a = n["default"].wxMgr,
                            o = {};
                        n["default"].netMgr.request("v10/activity/turntablePrize", o, function(n) {
                            0 !== n.code ? a.showToast(n.msg, 2e3) : e && e.call(t, n.result);
                        });
                    }, t.prototype.getDiskPrize = function(t, e, a, o) {
                        var i = n["default"].wxMgr,
                            r = {};
                        r.type = a, 1 == a && (r.share_content_id = o), n["default"].netMgr.request("v10/activity/luckDraw", r, function(a) {
                            0 !== a.code ? i.showToast(a.msg, 2e3) : e && e.call(t, a.result);
                        });
                    }, t.prototype.getDiskDouble = function(t, e, a) {
                        var o = n["default"].wxMgr;
                        n["default"].netMgr.request("v10/activity/prizeDouble", a, function(a) {
                            0 !== a.code ? o.showToast(a.msg, 2e3) : e && e.call(t, a.result);
                        });
                    },
                    t.prototype.openCustomerService = function() {},
                    t.prototype.getRevenue = function(t, e, a) {
                        var o = {};
                        o.gold = t, o.is_video = e, o.type = a, n["default"].netMgr.request("v20/user/getRevenue", o, function(t) {
                            0 !== t.code ? console.error("get revenue fault.") : n["default"].commonData.gold = t.result.total_gold;
                        });
                    }, t;
            }();
        a["default"] = i;
    }, {
        "../JieExt/Game/EventTypeExt": 18,
        "../LayaSample": 41
    }],
    54: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.prototype.init = function() {}, t.prototype.setBannerAdWidth = function(t) {},
                t.prototype.setBannerAdTop = function(t) {}, t.prototype.getBannerCount = function() {
                    return 0;
                }, t.prototype.getBannerItem = function() {}, t.prototype.setBannerItem = function() {},
                t.prototype.showBannerAd = function() {}, t.prototype.hideBannerAd = function() {},
                t.prototype.getBannerAd = function() {}, t.prototype.showVideoAd = function(t) {},
                t.prototype.getVideoAd = function() {}, t.prototype.loadVideoAd = function() {},
                t.prototype.showInterstitialAd = function() {}, t.prototype.getInterstitialAd = function() {},
                t;
        }();
        a["default"] = n;
    }, {}],
    55: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = t("../../GameConfig"),
            i = t("./BaseAd"),
            r = t("../JieExt/Game/GameDesgin"),
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lastTime = 0, e.loadAdFirst = !0, e;
                }
                return __extends(e, t), e.prototype.init = function() {
                        if (this._videoAd = null, this._interAd = null, this._bannerItem = null, this._bannerList = [],
                            this._bannerError = 0, e._videoCate = -1, this._isCreateInter = !1, Laya.Browser.onWeiXin) {
                            var t = n["default"].commonData.wxsysInfo.SDKVersion;
                            this._isCreateInter = n["default"].utils.compareVersion(t, "2.6.0") >= 0, this.getBannerAd(),
                                this.getVideoAd(), this.getInterstitialAd(), Laya.timer.loop(1e3, this, this.addBannerAd);
                        }
                    }, e.prototype.addBannerAd = function() {
                        if (!n["default"].gameMgr.isPlay) {
                            var t = 5e3;
                            3 == this._bannerList.length && (this.loadAdFirst = !1), n["default"].commonData.adTime > t && (t = n["default"].commonData.adTime),
                                this.loadAdFirst && (t = 3e3);
                            var e = new Date().valueOf();
                            this._bannerList.length < 3 && e - this.lastTime > t && (this.lastTime = e, console.log("加载广告： ", t, this._bannerList.length),
                                this.getBannerAd());
                        }
                    }, e.prototype.getBannerCount = function() {
                        return this._bannerList.length;
                    }, e.prototype.getBannerItem = function() {
                        return this._bannerItem;
                    }, e.prototype.setBannerItem = function() {
                        if (Laya.Browser.onWeiXin && !n["default"].commonData.isNoAds && n["default"].commonData.existBannerAd) {
                            var t = this._bannerList.length,
                                e = null;
                            if (1 > t) e = null;
                            else if (1 == t) e = this._bannerList[0];
                            else {
                                this._bannerList[0].ad.destroy(), this._bannerList.shift();
                                for (var a = 0, o = this._bannerList.length; o > a; ++a) this._bannerList[a].index = a;
                                e = this._bannerList[0];
                            }
                            this._bannerItem = e;
                        }
                    },
                    e.prototype.showBannerAd = function() {},
                    e.prototype.hideBannerAd = function() {},
                    e.prototype.setBannerAdWidth = function(t) {},
                    e.prototype.setBannerAdTop = function(t) {},
                    e.prototype.getBannerAd = function() {}, e.prototype.showVideoAd = function(t) {
                        var a = this._videoAd;
                        Laya.Browser.onWeiXin && a && (n["default"].commonData.watchVideo || (n["default"].commonData.watchVideo = !0,
                            console.log("category:" + t), e._videoCate = t, n["default"].wxMgr.upViewVideoInfo(0, t),
                            a.show().then(function() {})["catch"](function(t) {
                                a.load().then(function() {
                                    return a.show();
                                });
                            })));
                    },
                    e.prototype.getVideoAd = function() {
                        if (Laya.Browser.onWeiXin) {
                            if (!wx.createRewardedVideoAd) return void(n["default"].commonData.existVideoAd = !1);
                            var t = this._videoAd;
                            t && (t.offLoad(this._onLoadVideo), t.offError(this._onErrorVideo), t.offClose(this._onCloseVideo)),
                                t = wx.createRewardedVideoAd({
                                    adUnitId: n["default"].configMgr.getVideoId()
                                }), t.onLoad(this._onLoadVideo), t.onError(this._onErrorVideo), t.onClose(this._onCloseVideo),
                                this._videoAd = t;
                        }
                    }, e.prototype.loadVideoAd = function() {
                        Laya.Browser.onWeiXin && this._videoAd && this._videoAd.load();
                    }, e.prototype._onLoadVideo = function() {
                        n["default"].commonData.existVideoAd = !0, n["default"].glEvent.event("ad_load_event", {
                            adtype: "video",
                            isLoad: !0
                        });
                    },
                    e.prototype._onErrorVideo = function(t) {},
                    e.prototype._onCloseVideo = function(t) {
                        n["default"].commonData.watchVideo = !1;
                        var a = t && t.isEnded || void 0 === t ? !0 : !1;
                        a && n["default"].wxMgr.upViewVideoInfo(1, e._videoCate), n["default"].glEvent.event("ad_video_close_event", {
                            isEnded: a
                        });
                    },
                    e.prototype.showInterstitialAd = function() {},
                    e.prototype.getInterstitialAd = function() {},
                    e.prototype._onLoadInterstitial = function() {},
                    e.prototype._onErrorInterstitial = function(t) {},
                    e.prototype._onCloseInterstitial = function(t) {}, e;
            }(i["default"]);
        a["default"] = s;
    }, {
        "../../GameConfig": 1,
        "../JieExt/Game/GameDesgin": 20,
        "../LayaSample": 41,
        "./BaseAd": 54
    }],
    56: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
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
        a["default"] = n;
    }, {}],
    57: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
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
                for (var a = 1732584193, n = -271733879, o = -1732584194, i = 271733878, r = 0; r < t.length; r += 16) {
                    var s = a,
                        l = n,
                        u = o,
                        h = i;
                    a = this.md5_ff(a, n, o, i, t[r + 0], 7, -680876936), i = this.md5_ff(i, a, n, o, t[r + 1], 12, -389564586),
                        o = this.md5_ff(o, i, a, n, t[r + 2], 17, 606105819), n = this.md5_ff(n, o, i, a, t[r + 3], 22, -1044525330),
                        a = this.md5_ff(a, n, o, i, t[r + 4], 7, -176418897), i = this.md5_ff(i, a, n, o, t[r + 5], 12, 1200080426),
                        o = this.md5_ff(o, i, a, n, t[r + 6], 17, -1473231341), n = this.md5_ff(n, o, i, a, t[r + 7], 22, -45705983),
                        a = this.md5_ff(a, n, o, i, t[r + 8], 7, 1770035416), i = this.md5_ff(i, a, n, o, t[r + 9], 12, -1958414417),
                        o = this.md5_ff(o, i, a, n, t[r + 10], 17, -42063), n = this.md5_ff(n, o, i, a, t[r + 11], 22, -1990404162),
                        a = this.md5_ff(a, n, o, i, t[r + 12], 7, 1804603682), i = this.md5_ff(i, a, n, o, t[r + 13], 12, -40341101),
                        o = this.md5_ff(o, i, a, n, t[r + 14], 17, -1502002290), n = this.md5_ff(n, o, i, a, t[r + 15], 22, 1236535329),
                        a = this.md5_gg(a, n, o, i, t[r + 1], 5, -165796510), i = this.md5_gg(i, a, n, o, t[r + 6], 9, -1069501632),
                        o = this.md5_gg(o, i, a, n, t[r + 11], 14, 643717713), n = this.md5_gg(n, o, i, a, t[r + 0], 20, -373897302),
                        a = this.md5_gg(a, n, o, i, t[r + 5], 5, -701558691), i = this.md5_gg(i, a, n, o, t[r + 10], 9, 38016083),
                        o = this.md5_gg(o, i, a, n, t[r + 15], 14, -660478335), n = this.md5_gg(n, o, i, a, t[r + 4], 20, -405537848),
                        a = this.md5_gg(a, n, o, i, t[r + 9], 5, 568446438), i = this.md5_gg(i, a, n, o, t[r + 14], 9, -1019803690),
                        o = this.md5_gg(o, i, a, n, t[r + 3], 14, -187363961), n = this.md5_gg(n, o, i, a, t[r + 8], 20, 1163531501),
                        a = this.md5_gg(a, n, o, i, t[r + 13], 5, -1444681467), i = this.md5_gg(i, a, n, o, t[r + 2], 9, -51403784),
                        o = this.md5_gg(o, i, a, n, t[r + 7], 14, 1735328473), n = this.md5_gg(n, o, i, a, t[r + 12], 20, -1926607734),
                        a = this.md5_hh(a, n, o, i, t[r + 5], 4, -378558), i = this.md5_hh(i, a, n, o, t[r + 8], 11, -2022574463),
                        o = this.md5_hh(o, i, a, n, t[r + 11], 16, 1839030562), n = this.md5_hh(n, o, i, a, t[r + 14], 23, -35309556),
                        a = this.md5_hh(a, n, o, i, t[r + 1], 4, -1530992060), i = this.md5_hh(i, a, n, o, t[r + 4], 11, 1272893353),
                        o = this.md5_hh(o, i, a, n, t[r + 7], 16, -155497632), n = this.md5_hh(n, o, i, a, t[r + 10], 23, -1094730640),
                        a = this.md5_hh(a, n, o, i, t[r + 13], 4, 681279174), i = this.md5_hh(i, a, n, o, t[r + 0], 11, -358537222),
                        o = this.md5_hh(o, i, a, n, t[r + 3], 16, -722521979), n = this.md5_hh(n, o, i, a, t[r + 6], 23, 76029189),
                        a = this.md5_hh(a, n, o, i, t[r + 9], 4, -640364487), i = this.md5_hh(i, a, n, o, t[r + 12], 11, -421815835),
                        o = this.md5_hh(o, i, a, n, t[r + 15], 16, 530742520), n = this.md5_hh(n, o, i, a, t[r + 2], 23, -995338651),
                        a = this.md5_ii(a, n, o, i, t[r + 0], 6, -198630844), i = this.md5_ii(i, a, n, o, t[r + 7], 10, 1126891415),
                        o = this.md5_ii(o, i, a, n, t[r + 14], 15, -1416354905), n = this.md5_ii(n, o, i, a, t[r + 5], 21, -57434055),
                        a = this.md5_ii(a, n, o, i, t[r + 12], 6, 1700485571), i = this.md5_ii(i, a, n, o, t[r + 3], 10, -1894986606),
                        o = this.md5_ii(o, i, a, n, t[r + 10], 15, -1051523), n = this.md5_ii(n, o, i, a, t[r + 1], 21, -2054922799),
                        a = this.md5_ii(a, n, o, i, t[r + 8], 6, 1873313359), i = this.md5_ii(i, a, n, o, t[r + 15], 10, -30611744),
                        o = this.md5_ii(o, i, a, n, t[r + 6], 15, -1560198380), n = this.md5_ii(n, o, i, a, t[r + 13], 21, 1309151649),
                        a = this.md5_ii(a, n, o, i, t[r + 4], 6, -145523070), i = this.md5_ii(i, a, n, o, t[r + 11], 10, -1120210379),
                        o = this.md5_ii(o, i, a, n, t[r + 2], 15, 718787259), n = this.md5_ii(n, o, i, a, t[r + 9], 21, -343485551),
                        a = this.safe_add(a, s), n = this.safe_add(n, l), o = this.safe_add(o, u), i = this.safe_add(i, h);
                }
                return Array(a, n, o, i);
            }, t.md5_cmn = function(t, e, a, n, o, i) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, i)), o), a);
            }, t.md5_ff = function(t, e, a, n, o, i, r) {
                return this.md5_cmn(e & a | ~e & n, t, e, o, i, r);
            }, t.md5_gg = function(t, e, a, n, o, i, r) {
                return this.md5_cmn(e & n | a & ~n, t, e, o, i, r);
            }, t.md5_hh = function(t, e, a, n, o, i, r) {
                return this.md5_cmn(e ^ a ^ n, t, e, o, i, r);
            }, t.md5_ii = function(t, e, a, n, o, i, r) {
                return this.md5_cmn(a ^ (e | ~n), t, e, o, i, r);
            }, t.core_hmac_md5 = function(t, e) {
                var a = this.str2binl(t);
                a.length > 16 && (a = this.core_md5(a, t.length * this.chrsz));
                for (var n = Array(16), o = Array(16), i = 0; 16 > i; i++) n[i] = 909522486 ^ a[i],
                    o[i] = 1549556828 ^ a[i];
                var r = this.core_md5(n.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
                return this.core_md5(o.concat(r), 640);
            }, t.safe_add = function(t, e) {
                var a = (65535 & t) + (65535 & e),
                    n = (t >> 16) + (e >> 16) + (a >> 16);
                return n << 16 | 65535 & a;
            }, t.bit_rol = function(t, e) {
                return t << e | t >>> 32 - e;
            }, t.str2binl = function(t) {
                for (var e = Array(), a = (1 << this.chrsz) - 1, n = 0; n < t.length * this.chrsz; n += this.chrsz) e[n >> 5] |= (t.charCodeAt(n / this.chrsz) & a) << n % 32;
                return e;
            }, t.binl2str = function(t) {
                for (var e = "", a = (1 << this.chrsz) - 1, n = 0; n < 32 * t.length; n += this.chrsz) e += String.fromCharCode(t[n >> 5] >>> n % 32 & a);
                return e;
            }, t.binl2hex = function(t) {
                for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", n = 0; n < 4 * t.length; n++) a += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
                return a;
            }, t.binl2b64 = function(t) {
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = "", n = 0; n < 4 * t.length; n += 3)
                    for (var o = (t[n >> 2] >> 8 * (n % 4) & 255) << 16 | (t[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | t[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, i = 0; 4 > i; i++) a += 8 * n + 6 * i > 32 * t.length ? this.b64pad : e.charAt(o >> 6 * (3 - i) & 63);
                return a;
            }, t.hexcase = 0, t.b64pad = "", t.chrsz = 8, t;
        }();
        a["default"] = n;
    }, {}],
    58: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.jumpPlatforms = [], e.barriers = [], e.arrows = [], e.roads = [], e.coins = [],
                    e.bikeComps = [], e.offset = 0, e.constructsArray = [], e;
            }
            return __extends(e, t), e.prototype.init = function(t) {
                return;
            }, e.prototype.setSkins = function() {
                return;
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
                this.offset = 0;
                for (var e = 0; 4 > e; e++) {
                    var a = this.easyModels[e];
                    this.offset += 26.9 * (e + 1), a.models.forEach(function(t) {});
                }
            }, e.prototype.randomCreateEasyModels = function(t) {
                this.offset = t;
                var e = Math.floor(100 * Math.random() % this.easyModels.length),
                    a = this.models[e];
                a.models.forEach(function(t) {});
            }, e.prototype.randomCreateModels = function(t) {
                this.offset = t;
                var e = Math.floor(100 * Math.random() % this.models.length),
                    a = this.models[e];
                a.models.forEach(function(t) {});
            }, e.prototype.randomCreateConstructs = function(t) {
                var e = this;
                this.offset = t;
                var a = Math.floor(100 * Math.random() % this.constructs.length),
                    n = this.constructs[a];
                n.models.forEach(function(t) {
                    e.createConstruct(t);
                });
            }, e.prototype.createConstruct = function(t) {
                var e = this.constructsPrefab.getChildByName(t.name),
                    a = Laya.Sprite3D.instantiate(e);
                this.scene.addChild(a), a.transform.position = new Laya.Vector3(Number(t.position.x), 0, Number(t.position.z) + this.offset),
                    t.position.x < 0 ? (a.transform.rotationEuler = new Laya.Vector3(0, -90, 0), a.transform.scale = new Laya.Vector3(-1, 1, 1)) : (a.transform.rotationEuler = new Laya.Vector3(0, 90, 0),
                        a.transform.scale = new Laya.Vector3(1, 1, 1)), this.constructsArray.push(a);
            }, e.prototype.clearConstructs = function() {
                this.constructsArray.forEach(function(t) {
                    t.destroy();
                }), this.constructsArray = [];
            }, e.prototype.getSkinByIndex = function(t) {
                if (!(1 > t || t > this.skins.numChildren)) {
                    var e = this.skins.getChildByName("Role (" + t + ")");
                    return Laya.Sprite3D.instantiate(e);
                }
            }, e.prototype.getSkinParent = function() {
                return this.skins;
            }, e;
        }(Laya.Script3D);
        a["default"] = n;
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
    }, {}],
    59: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._appCount = -1, e._appIndex = 0, e.repeatX = 0, e;
                }
                return __extends(e, t), e.prototype.onStart = function() {
                    this.initData(), this.initUI(), this.setBanner(), this.setPanelBottom(), this.initEvent(),
                        Laya.timer.loop(3e3, this, this.nextBanner);
                }, e.prototype.initData = function() {
                    this.data = n["default"].wxMgr.getWxappList(this.category), this._appCount = this.data.length;
                }, e.prototype.initUI = function() {
                    this.banner.visible = !1;
                }, e.prototype.initEvent = function() {
                    n["default"].utils.addClickEvent(this.banner, this, this.onBannerClick, 14), n["default"].glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.onDisable = function() {
                    Laya.timer.clear(this, this.nextBanner), n["default"].glEvent.off("ad_load_event", this, this.onAdLoadEvent);
                }, e.prototype.setBanner = function() {
                    var t = this.banner;
                    if (this._appCount > 0) {
                        var e = this.data[this._appIndex];
                        t.skin = e.app_img, t.appid = e.app_id;
                    }
                    var a = (!n["default"].commonData.existBannerAd || n["default"].commonData.isNoAds) && this._appCount > 0;
                    t.visible = a, n["default"].commonData.FirstBannerloadOk && (t.visible = !1);
                }, e.prototype.nextBanner = function() {
                    var t = this._appIndex;
                    t++, t >= this._appCount && (t = 0), this._appIndex = t, this.setBanner();
                }, e.prototype.onAdLoadEvent = function(t) {
                    "banner" == t.adtype && (this.setBanner(), this.setPanelBottom());
                }, e.prototype.setPanelBottom = function() {
                    if (this.panel && !n["default"].commonData.existBannerAd && this._appCount > 0) {
                        this.panel.bottom = this.banner.height;
                        var t = n["default"].commonData.wxsysInfo;
                        t && t.model.startsWith("iPhone X") && (this.panel.bottom = this.banner.height + 40);
                    }
                }, e.prototype.onBannerClick = function(t) {
                    var e = t.target.appid;
                    e && "" != e ? n["default"].wxMgr.openOtherApp(e, this.category) : console.log("appid error.");
                }, e;
            }(Laya.Script);
        a["default"] = o;
    }, {
        "../LayaSample": 41
    }],
    60: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
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
        a["default"] = n;
    }, {}],
    61: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./AppItem"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.appCount = -1, e.ind = 0, e.prevInd = 0, e.renderCount = 4, e.speed = 3e3,
                        e;
                }
                return __extends(e, t), e.prototype.closeComp = function() {
                    Laya.timer.clearAll(this), this.parentNode.visible = !1, this.isHide = !0;
                }, e.prototype.onDisable = function() {
                    Laya.timer.clearAll(this), this.parentNode.visible = !1;
                }, e.prototype.onStart = function() {
                    this.isHide || (this.initData(), this.initUI(), this.initList());
                }, e.prototype.initUI = function() {
                    var t = 0 != this.appCount;
                    this.listNode.visible = t, this.parentNode.visible = t;
                }, e.prototype.initData = function() {
                    if (n["default"].appWidth = this.appWidth, n["default"].appHeight = this.appHeight,
                        n["default"].appPrefab = this.appPrefab, this.data = o["default"].wxMgr.getWxappList(this.category),
                        this.appCount = this.data.length, !(this.appCount <= 6)) {
                        var t = 0,
                            e = 0;
                        for (t = 0; t < this.appCount; ++t) e += this.data[t].weight;
                        var a = [],
                            i = 0;
                        for (t = 0; t < this.appCount; ++t) i += this.data[t].weight, a[t] = {}, a[t].index = t,
                            a[t].weight = i / e;
                        for (var r = [], s = 0, l = !1, u = 0, h = 0; h < this.appCount; ++h) {
                            for (s = Math.random() * a[a.length - 1].weight, l = !1, t = 0; t < a.length; ++t) !l && s <= a[t].weight && (l = !0,
                                    r.push(this.data[a[t].index]), t + 1 < a.length && (u = a[t + 1].weight - a[t].weight)),
                                l && t + 1 < a.length && (a[t + 1].weight -= u, a[t] = a[t + 1]);
                            a.length -= 1;
                        }
                        this.data = r;
                    }
                }, e.prototype.getData = function(t, e) {
                    for (var a = 0; a < t.length; ++a) e > t[a];
                }, e.prototype.initList = function() {
                    var t = this.listNode;
                    null != t && (t.itemRender = n["default"], t.vScrollBarSkin = "", t.selectEnable = !0,
                        t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                        this.renderCount = t.repeatX * t.repeatY), null != this.data && (this._copyEndDataToStart(this.data),
                        this._setData(this.data)), t.array = this.data;
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t) {
                    if (!(0 > t)) {
                        var e = this.listNode.getItem(t);
                        null != e && o["default"].wxMgr.openOtherApp(e.app_id, e.category), this.listNode.selectedIndex = -1;
                    }
                }, e.prototype._setData = function(t) {
                    this.ind = 0, null != this.parentNode && (null == this.data || 0 == this.data.length ? this.parentNode.visible = !1 : this.parentNode.visible = !0),
                        this.listNode.array = this.data, this.data.length > this.renderCount && Laya.timer.frameOnce(1, this, this._tweenToNext);
                }, e.prototype._tweenToNext = function() {
                    Laya.timer.clearAll(this), this.ind = Math.max(this.listNode.repeatX, this.listNode.startIndex),
                        this.ind == this.prevInd && (this.ind += this.listNode.repeatX), this.ind > this.appCount && (this.listNode.scrollTo(0),
                            this.ind = this.listNode.repeatX), this.prevInd = this.ind, this.listNode.tweenTo(this.ind, this.speed - 10),
                        Laya.timer.once(this.speed, this, this._tweenToNext);
                }, e.prototype._copyEndDataToStart = function(t) {
                    if (this.appCount = t.length, t.length > this.renderCount)
                        for (var e = 0; e < this.renderCount; e++) {
                            var a = t[t.length - e - 1];
                            t.unshift(a);
                        }
                }, e;
            }(Laya.Script);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./AppItem": 60
    }],
    62: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./AppItem"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.repeatX = 0, e.appCount = -1, e;
                }
                return __extends(e, t), e.prototype.onStart = function() {
                    this.initData(), this.initList();
                }, e.prototype.initData = function() {
                    n["default"].appWidth = this.appWidth, n["default"].appHeight = this.appHeight,
                        n["default"].appPrefab = this.appPrefab, this.data = o["default"].wxMgr.getWxappList(this.category),
                        this.appCount = this.data.length;
                }, e.prototype.initList = function() {
                    var t = this.listNode;
                    null != t && (t.itemRender = n["default"], t.hScrollBarSkin = "", t.selectEnable = !0,
                        t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                        t.mouseHandler = new Laya.Handler(this, this.onMouseHandler), this.repeatX = t.repeatX,
                        this.appCount > 0 && (t.array = this.data)), Laya.timer.once(1e3, this, this.moveList);
                }, e.prototype.onMouseHandler = function(t, e) {
                    this.listNode.startIndex < 5 ? Laya.timer.once(200, this, this.moveList) : Laya.timer.once(200, this, this.moveList1);
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t) {
                    if (!(0 > t)) {
                        var e = this.listNode.getItem(t);
                        null != e && o["default"].wxMgr.openOtherApp(e.app_id, e.category), this.listNode.selectedIndex = -1;
                    }
                }, e.prototype.moveList = function() {
                    this.listNode.tweenTo(this.data.length - 5, 12e3, new Laya.Handler(this, this.moveList1));
                }, e.prototype.moveList1 = function() {
                    this.listNode.tweenTo(0, 12e3, new Laya.Handler(this, this.moveList));
                }, e;
            }(Laya.Script);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./AppItem": 60
    }],
    63: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
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
            }, e.prototype.setRankItem_Old = function(t) {
                var e = t.user_nickname.length > 6 ? t.user_nickname.substr(0, 8) : t.user_nickname;
                this.lblName.text = "" != e ? e : "";
                var a = 28,
                    n = t.rank;
                0 == t.rank && (a = 24, n = ""), this.lblRank.fontSize = a, this.lblRank.text = n,
                    this.lblScore.text = t.score;
                var o = "" != t.avatar ? t.avatar : "ui/rank/avater_default.png";
                this.imgBg.loadImage(t.bgUrl), this.imgAvatar.loadImage(o);
            }, e.prototype.setRankItem = function(t) {
                null == t.user_nickname && (t.user_nickname = t.nickname);
                var e = t.user_nickname.length > 6 ? t.user_nickname.substr(0, 8) : t.user_nickname;
                this.lblName.text = "" != e ? e : "";
                var a = 28,
                    n = t.rank.toString();
                0 == t.rank && (a = 24, n = ""), this.lblRank.fontSize = a, this.lblRank.text = n,
                    this.lblScore.text = t.score.toString();
                var o = "" != t.avatar ? t.avatar : "ui/rank/avater_default.png";
                this.imgBg.loadImage(t.bgUrl), this.imgAvatar.loadImage(o);
            }, e;
        }(Laya.Box);
        a["default"] = n;
    }, {}],
    64: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.icon = null, e.init(), e;
            }
            return __extends(e, t), e.prototype.onDisable = function() {}, e.prototype.init = function() {
                if (!e.itemPrefab) return void console.error("app prefab is null");
                var t = Laya.Pool.getItemByCreateFun("skinitem", e.itemPrefab.create, e.itemPrefab);
                this.icon = t.getChildByName("skinIcon"), this.addChild(t);
            }, e.prototype.setItemInfoJie = function(t) {
                this.icon.skin = t.iconPath;
            }, e.itemPrefab = null, e;
        }(Laya.Box);
        a["default"] = n;
    }, {}],
    65: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./AppItem"),
            o = t("../LayaSample"),
            i = t("../JieExt/Game/EventTypeExt"),
            r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.ind = 0, e.prevInd = 0, e.renderCount = 4, e.speed = 3e3, e.isClickPlayBtn = !1,
                        e.repeatX = 0, e.appCount = -1, e;
                }
                return __extends(e, t), e.prototype.onStart = function() {
                    this.initData(), this.initUI(), this.initEvent(), this.initList();
                }, e.prototype.initUI = function() {
                    this.view = this.owner, this.SetViewState();
                }, e.prototype.initEvent = function() {
                    o["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick, 14),
                        o["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick, 14);
                }, e.prototype.initData = function() {
                    n["default"].appWidth = this.appWidth, n["default"].appHeight = this.appHeight,
                        n["default"].appPrefab = this.appPrefab, this.data = o["default"].wxMgr.getWxappList(this.category),
                        this.appCount = this.data.length;
                }, e.prototype.initList = function() {
                    var t = this.list;
                    null != t && (t.itemRender = n["default"], t.vScrollBarSkin = "", t.selectEnable = !0,
                        t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                        this.repeatX = t.repeatX, this.appCount > 0 && (this._copyEndDataToStart(this.data),
                            t.array = this.data, o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(),
                            Laya.timer.frameOnce(1, this, this._tweenToNext)));
                }, e.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, e.prototype.onSelect = function(t) {
                    if (!(0 > t)) {
                        var e = this.list.getItem(t);
                        null != e && o["default"].wxMgr.openOtherApp(e.app_id, e.category), this.list.selectedIndex = -1;
                    }
                }, e.prototype._tweenToNext = function() {
                    Laya.timer.clearAll(this), this.ind = Math.max(this.list.repeatX, this.list.startIndex),
                        this.ind == this.prevInd && (this.ind += this.list.repeatX), this.ind > this.appCount && (this.list.scrollTo(0),
                            this.ind = this.list.repeatX), this.prevInd = this.ind, this.list.tweenTo(this.ind, this.speed - 10),
                        Laya.timer.once(this.speed, this, this._tweenToNext);
                }, e.prototype._copyEndDataToStart = function(t) {
                    if (this.appCount = t.length, t.length > this.renderCount)
                        for (var e = 0; e < this.renderCount; e++) {
                            var a = t[t.length - e - 1];
                            t.unshift(a);
                        }
                }, e.prototype.onPlayGameClick = function() {
                    this.isClickPlayBtn || (this.isClickPlayBtn = !0, this.view.close(), o["default"].glEvent.event("play_game_event"));
                }, e.prototype.onBackClick = function() {
                    return "views/home.scene" == o["default"].commonDataExt.currentSceneUrl ? void this.view.close() :
                        "views/over.scene" == o["default"].commonDataExt.currentSceneUrl ? void this.view.close() : (
                            Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, this.onOpenView)),
                            void o["default"].glEvent.event(i["default"].goHome));
                }, e.prototype.onOpenView = function(t) {
                    this.view.close(), o["default"].wxMgr.showLiteRank(!1), this.initSize(t);
                }, e.prototype.initSize = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        t.height = Laya.stage.height;
                        for (var e = o["default"].screen.offsetTop, a = o["default"].screen.realPxRatio, n = o["default"].commonData.wxsysInfo, i = 0, r = 0; r < t._children.length; r++) {
                            var s = t._children[r],
                                l = s.y + e;
                            if ("topPanel" == s.name) {
                                l = n.statusBarHeight >= 30 && o["default"].screen.allScreen ? n.statusBarHeight * a : 30;
                                var u = s.getChildByName("collectHand");
                                u && (u.visible = !o["default"].storageMgr.isCollect(), o["default"].tweenMgr.toPosition(u, new Laya.Vector3(300, 0), 1e3, !0));
                            }
                            s.y = l, ("bottomPanel" == s.name || "bottomui" == s.name) && (i = o["default"].commonData.isAdDelay && "bottomPanel" == s.name ? 60 : 264,
                                n && n.model.startsWith("iPhone X") && (i += 100), s.bottom = i);
                        }
                    }
                }, e.prototype.SetViewState = function() {
                    this.btnPlay.visible = !0, "views/home.scene" == o["default"].commonDataExt.currentSceneUrl && (this.btnPlay.visible = !1),
                        "views/over.scene" == o["default"].commonDataExt.currentSceneUrl && (this.btnPlay.visible = !1);
                }, e.prototype.onEnable = function() {
                    o["default"].commonDataExt.WxAppListSceneVisible = !0;
                }, e.prototype.onDisable = function() {
                    o["default"].commonDataExt.WxAppListSceneVisible = !1;
                }, e;
            }(Laya.Script);
        a["default"] = r;
    }, {
        "../JieExt/Game/EventTypeExt": 18,
        "../LayaSample": 41,
        "./AppItem": 60
    }],
    66: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._maxBottom = 264, e._minBottom = 60, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        this.modelAwake();
                    }, e.prototype.modelAwake = function() {

                        if (this.initData(), this.initUI(), this.initEvent(), n["default"].commonDataExt.currentScene = this,
                            n["default"].commonDataExt.currentSceneUrl = this.url, console.log(this.url), Laya.Browser.onWeiXin || Laya.Browser.onPC) {
                            if (this.initSize(this), "views/rank.scene" == this.url) return;
                            if ("views/collect.scene" == this.url) return void this.cleraRefreshBannerAd();
                        }

                    }, e.prototype.BaseAwake = function() {
                        this.modelAwake();
                    }, e.prototype.onOpened = function(t) {}, e.prototype.onClosed = function() {
                        Laya.timer.clearAll(this), n["default"].glEvent.offAllCaller(this), n["default"].tweenMgr.clearAll(this),
                            this.cleraRefreshBannerAd();
                    }, e.prototype.cleraRefreshBannerAd = function() {
                        Laya.timer.clear(this, this.refreshBannerAd);
                    }, e.prototype.initData = function() {
                        this._isOpen = !0;
                    }, e.prototype.initUI = function() {}, e.prototype.initEvent = function() {
                        n["default"].glEvent.on("ad_load_event", this, this.onLoadAdEvent), n["default"].glEvent.on("ad_show_event", this, this.onShowAdEvent),
                            n["default"].glEvent.on("wx_sleep_event", this, this.onWxSleepEvent), n["default"].glEvent.on("wx_wake_event", this, this.onWxWakeEvent);
                    }, e.prototype.onWxWakeEvent = function() {}, e.prototype.onWxSleepEvent = function() {},
                    e.prototype.getChild = function(t, e) {
                        return e || (e = this), e.getChildByName(t);
                    },
                    e.prototype.initSize = function(t) {},
                    e.prototype.refreshBannerAd = function() {},
                    e.prototype.reappearBannerAd = function() {
                        console.log("baseview reappearBannerAd"), this.tweenAd(), ("views/clearing.scene" == this.url || "views/over.scene" == this.url || "views/SkinViewFreeTry.scene" == this.url) && (n["default"].commonData.isNoAds = !1),
                            "views/home.scene" == this.url && (n["default"].commonData.isNoAds = !0), n["default"].adMgr.showBannerAd();
                    },
                    e.prototype.loadBannerAd = function() {
                        this._loadBanner < 3 ? this._loadBanner++ : 3 == this._loadBanner && (this._loadBanner++,
                                Laya.timer.clear(this, this.loadBannerAd), Laya.timer.loop(n["default"].commonData.adTime, this, this.loadBannerAd)),
                            n["default"].adMgr.getBannerAd();
                    }, e.prototype.resetBannerAd = function() {
                        var t = n["default"].adMgr.getBannerItem();
                        if (t) {
                            var e = t.width,
                                a = (t.height, Laya.Browser.clientWidth);
                            e != a && (this._isResizeAd = !0, n["default"].adMgr.setBannerAdWidth(a));
                        }
                    }, e.prototype.tweenAd = function() {
                        var t = n["default"].adMgr.getBannerItem();
                        if (t)
                            for (var e = (t.width, t.height), a = n["default"].screen.realPxRatio, o = Math.floor(e * a), i = 0; i < this.numChildren; ++i) {
                                var r = this.getChildAt(i);
                                if ("bottomPanel" == r.name && e && r.bottom < o && Laya.Tween.to(r, {
                                        bottom: o
                                    }, n["default"].commonData.moveTime, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {}), 0, !0),
                                    "middlePanel" == r.name && e) {
                                    var s = r.y + r.height + o;
                                    s > Laya.stage.height && (r.y = r.y - (s - Laya.stage.height));
                                }
                            }
                    },
                    e.prototype.onLoadAdEvent = function(t) {},
                    e.prototype.onShowAdEvent = function(t) {
                        this.tweenAd();
                    }, Object.defineProperty(e.prototype, "isShowAd", {
                        get: function() {
                            return "views/login.scene" != this.url && "views/gameExt.scene" != this.url;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e;
            }(Laya.Scene);
        a["default"] = o;
    }, {
        "../LayaSample": 41
    }],
    67: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = t("../JieExt/managerExt/WxMgrExt"),
            r = t("../JieExt/Game/EventTypeExt"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.initData = function() {
                        i["default"].UpLoadScore(o["default"].commonData.newScore, o["default"].commonData.killNum);
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("bottomPanel");
                        this.btnBack = this.getChild("btnBack", t),
                            this.btnPlay = this.getChild("btnPlay", t);
                        var e = this.getChild("score");
                        this.fontScore = this.getChild("fontScore", e),
                            this.fontScore.value = o["default"].commonData.newScore.toString();



                        var e = this.getChild("best");
                        this.fontScore = this.getChild("fontScore", e);

                        var bset = platform.getInstance().getStorageSync("BEST") || 0;
                        if (bset < o["default"].commonData.newScore) {
                            bset = o["default"].commonData.newScore;
                            platform.getInstance().setStorageSync("BEST", bset);
                        }
                        this.fontScore.value = bset + "";

                        let applist = this.getChildByName("appLite").getChildByName("appList");
                        applist.renderHandler = new Laya.Handler(this, this.onShareClick);
                        applist.array = platform.getInstance().getForgames();
                    }, e.prototype.initEvent = function() {
                        o["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick),
                            o["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick);
                    },
                    e.prototype.onShareClick = function(e) {
                        e.offAll(Laya.Event.MOUSE_DOWN)
                        e.on(Laya.Event.MOUSE_DOWN, e, () => {
                            platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                        });
                    },
                    e.prototype.onPlayGameClick = function() {
                        platform.getInstance().showInterstitial(() => {
                            this.close(),
                                o["default"].glEvent.event("init_game_event", {
                                    isPlay: !0
                                });
                        })
                    }, e.prototype.onBackClick = function() {
                        console.log("onBackClick")

                        platform.getInstance().showInterstitial(() => {
                            Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function() {
                                this.close();
                            }));
                        })

                        // o["default"].glEvent.event(r["default"].goHome);
                        // , o["default"].glEvent.event(r["default"].WX_OpenAppCancel);
                    }, e.prototype.onOpenView = function(t) {
                        this.close(), this.showRank(!1), this.initSize(t);
                    }, e.prototype.showRank = function(t) {
                        o["default"].wxMgr.showLiteRank(t);
                    }, e.prototype.onWxWakeEvent = function() {}, e.prototype.onShareBackEvent = function(t) {}, e;
            }(n["default"]);
        a["default"] = s;
    }, {
        "../JieExt/Game/EventTypeExt": 18,
        "../JieExt/managerExt/WxMgrExt": 40,
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    68: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(), t.prototype.onAwake.call(this);
                }, e.prototype.initUI = function() {
                    this.btnCancel = this.getChild("btnCancel");
                }, e.prototype.initEvent = function() {
                    o["default"].utils.addClickEvent(this.btnCancel, this, this.cancelClick);
                }, e.prototype.cancelClick = function() {
                    this.close(), o["default"].commonData.isNoAds = !1, o["default"].adMgr.showBannerAd();
                }, e;
            }(n["default"]);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    69: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.initData = function() {}, e.prototype.initUI = function() {
                        var t = this.getChild("topPanel");
                        this.lbLevel = this.getChild("lbLevel", t), this.visible = !1;
                    }, e.prototype.initEvent = function() {
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent),
                            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), o["default"].glEvent.on("init_game_event", this, this.initGameEvent),
                            o["default"].glEvent.on("over_game_event", this, this.overGameEvent), o["default"].glEvent.on("play_game_event", this, this.onPlayGameEvent),
                            o["default"].glEvent.on("goon_game_event", this, this.onGoonGameEvent);
                    }, e.prototype.loadModels = function() {
                        Laya.loader.getRes("res/models/Conventional/ModelScene.lh");
                    }, e.prototype.setFog = function() {}, e.prototype.onMouseDownEvent = function(t) {
                        !o["default"].gameMgr.isOver && o["default"].gameMgr.isPlay && this.overGameEvent();
                    }, e.prototype.onMouseUpEvent = function() {}, e.prototype.onMouseMoveEvent = function(t) {},
                    e.prototype.initGameEvent = function(t) {
                        o["default"].gameMgr.isOver = !1, o["default"].gameMgr.isPlay = t.isPlay;
                    }, e.prototype.onPlayGameEvent = function() {
                        o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(), o["default"].gameMgr.isPlay = !0;
                    }, e.prototype.onGoonGameEvent = function() {
                        o["default"].commonData.goonCount++;
                    }, e.prototype.overGameEvent = function() {
                        o["default"].commonData.isNoAds = !1, o["default"].gameMgr.isOver = !0, o["default"].gameMgr.isPlay = !1,
                            this.visible = !1, o["default"].commonData.goonCount > 0 ? (o["default"].commonData.goonCount = 0,
                                Laya.Scene.open("views/clearing.scene", !1)) : Laya.Scene.open("views/over.scene", !1);
                    }, e;
            }(n["default"]);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    70: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = t("../JieExt/managerExt/WxMgrExt"),
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.soundSkin = "ui/common/btn_sound_", e.vibrateSkin = "ui/common/btn_vibrate_",
                        e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.setWxapp3(this.btnGameL, this.btnGameR, 0),
                        this.setWxapp3(this.btnGameL2, this.btnGameR2, 2);
                }, e.prototype.initUI = function() {
                    var t = this.getChild("topPanel"),
                        e = this.getChild("bottomui");
                    this.btnSound = this.getChild("btnSound", t),
                        this.setSoundUIAndData(o["default"].storageMgr.isPlaySound()),
                        this.setVibrate(o["default"].storageMgr.isPlayVibrate()),
                        this.btnPlay = this.getChild("btnPlay", e),
                        this.btnRank = this.getChild("btnRank", e),
                        this.btnShare = this.getChild("btnShare", e),
                        this.btnSvrvice = this.getChild("btnSvrvice", e),
                        this.btnCollect = this.getChild("btnCollect", e);
                }, e.prototype.initEvent = function() {
                    o["default"].utils.addClickEvent(this.btnSound, this, this.onSoundClick),
                        o["default"].utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick);
                }, e.prototype.setSound = function(t) {
                    var e = t ? "on.png" : "off.png";
                    this.btnSound.skin = this.soundSkin + e, window.WebAudioEngine.pause = !t, console.log(window.WebAudioEngine.pause),
                        o["default"].storageMgr.setPlaySound(t);
                }, e.prototype.setSoundUIAndData = function(t) {
                    var e = t ? "on.png" : "off.png";
                    this.btnSound.skin = this.soundSkin + e, window.WebAudioEngine.pause = !t;
                }, e.prototype.setVibrate = function(t) {}, e.prototype.onSoundClick = function() {
                    this.setSound(!o["default"].storageMgr.isPlaySound());
                }, e.prototype.onVibrateClick = function() {
                    this.setVibrate(!o["default"].storageMgr.isPlayVibrate());
                }, e.prototype.onPlayGameClick = function() {
                    console.log("is this home btn?");
                    platform.getInstance().showInterstitial(() => {
                        this.close(),
                            o["default"].glEvent.event("play_game_event");
                    });

                }, e.prototype.onRankClick = function() {}, e.prototype.onSvrviceClick = function() {
                    o["default"].wxMgr.openCustomerService();
                }, e.prototype.onShareClick = function() {
                    o["default"].wxMgr.shareFriend(0, !1);
                }, e.prototype.onWxgameClick = function(t) {
                    var e = t.target.appData.appid;
                    e && "" != e ? o["default"].wxMgr.openOtherApp(e, t.target.appData.category) : console.log("appid error.");
                }, e.prototype.onCollectClick = function() {
                    Laya.Scene.open("views/collect.scene", !1);
                }, e.prototype.setWxapp_UnUse = function() {
                    var t = o["default"].wxMgr.getWxappList(0);
                    if (t) {
                        var e = t.length;
                        if (0 != e) {
                            var a = 0;
                            if (t[a]) {
                                var n = {
                                    appid: t[a].app_id,
                                    category: 0
                                };
                                this.btnGameL.visible = !0, this.btnGameL.skin = t[a].app_img, this.btnGameL.appData = n;
                                var i = 1;
                                if (t[i]) {
                                    var r = {
                                        appid: t[i].app_id,
                                        category: 0
                                    };
                                    this.btnGameR.visible = !0, this.btnGameR.skin = t[i].app_img, this.btnGameR.appData = r;
                                    var s = Math.floor(2e3 * Math.random() + 2e3);
                                    Laya.timer.loop(s, this, function() {
                                        a++, a >= e && (a = 0), i++, i >= e && (i = 0), t[a] && (n.appid = t[a].app_id,
                                            this.btnGameL.skin = t[a].app_img, this.btnGameL.appData = n, o["default"].utils.tweenShake(this.btnGameL, null),
                                            t[i] && (r.appid = t[i].app_id, this.btnGameR.skin = t[i].app_img, this.btnGameR.appData = r,
                                                o["default"].utils.tweenShake(this.btnGameR, null)));
                                    });
                                }
                            }
                        }
                    }
                }, e.prototype.setWxapp2 = function(t, e, a) {}, e.prototype.setWxapp3 = function(t, e, a) {}, e;
            }(n["default"]);
        a["default"] = r;
    }, {
        "../JieExt/managerExt/WxMgrExt": 40,
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    71: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    console.log("open"), t.prototype.onAwake.call(this), "views/income.scene" == this.url && (o["default"].commonData.isNoAds = !0,
                        o["default"].adMgr.hideBannerAd());
                }, e.prototype.onOpened = function(t) {
                    t && t.isClick && (this.isClick = !0, this.gold = o["default"].commonData.curIncome,
                        this.lbGold.value = this.gold.toString()), o["default"].storageMgr.getGameStatus().videoCount > 0 && (this.cbVideo.selected = !0);
                }, e.prototype.initData = function() {
                    this.factor = 1;
                }, e.prototype.initUI = function() {
                    this.btnGet = this.getChild("btnGet"), this.cbVideo = this.getChild("cbVideo");
                    var t = this.getChild("coinBg");
                    this.lbGold = this.getChild("lbGold", t), "views/reward.scene" == this.url ? this.gold = o["default"].commonData.newGold : this.gold = o["default"].commonData.revenue,
                        null == this.gold && (this.gold = 0), this.lbGold.value = this.gold.toString(),
                        this.effect = this.getChild("effect"), Laya.timer.loop(10, this, function() {
                            this.effect.rotation += 2;
                        });
                }, e.prototype.initEvent = function() {
                    console.log("initevent"), o["default"].utils.addClickEvent(this.btnGet, this, this.onGetClick),
                        this.cbVideo.on("change", this, this.onChangeCb, [this.cbVideo]), o["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent);
                }, e.prototype.onGetClick = function() {
                    console.log("getclick"), this.cbVideo.selected && o["default"].commonData.existVideoAd ? this.onDoubleClick() : this.closeView();
                }, e.prototype.onDoubleClick = function() {
                    o["default"].commonData.sceneUrl = this.url, o["default"].adMgr.showVideoAd(0);
                }, e.prototype.onVideoCloseEvent = function(t) {
                    o["default"].commonData.sceneUrl == this.url && (t.isEnded ? (this.factor = 5, this.closeView(),
                        o["default"].storageMgr.setVideoCount()) : o["default"].wxMgr.showToast("未观看完视频", 2e3, "success"));
                }, e.prototype.onChangeCb = function(t) {
                    var e = this.gold;
                    t.selected ? o["default"].tweenMgr.numberAnim(e, 5 * e, 200, function(t) {
                        t.lbGold.value = this.toFixed(0);
                    }, this) : o["default"].tweenMgr.numberAnim(5 * e, e, 200, function(t) {
                        t.lbGold.value = this.toFixed(0);
                    }, this);
                }, e.prototype.closeView = function() {
                    var t = this;
                    if (console.log("close"), "views/reward.scene" == this.url) Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                        t.close();
                    })), o["default"].commonData.newGold *= this.factor, o["default"].commonData.gold += o["default"].commonData.newGold;
                    else {
                        var e = this.factor > 1 ? 1 : 0;
                        if (this.isClick) var a = o["default"].commonData.curIncome;
                        else var a = o["default"].commonData.revenue;
                        a *= this.factor, o["default"].commonData.gold += a, o["default"].wxMgr.getRevenue(a, e, this.isClick ? 1 : 0),
                            o["default"].commonData.existIncome = !1, o["default"].commonData.incomeTimer = 0,
                            this.isClick ? o["default"].commonData.curIncome = 0 : o["default"].commonData.revenue = 0,
                            Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function() {
                                this.close();
                            }));
                    }
                }, e.prototype.test = function() {
                    var t = [];
                    if (t.length > 0)
                        for (var e = 0; e < t.length; e++) "" == t[e];
                }, e;
            }(n["default"]);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    72: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._loadCount = 2, e._loadNum = 0, e._isLoadFinish = !1, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this);
                }, e.prototype.onOpened = function() {
                    o["default"].configMgr.init(), o["default"].soundMgr.init(), o["default"].wxMgr.init(),
                        o["default"].adMgr.init();
                }, e.prototype.initUI = function() {
                    var t = this.getChildByName("viewLoad");
                    this.lblPres = t.getChildByName("lblPres"), this.barPres = t.getChildByName("barPres");
                }, e.prototype.initEvent = function() {
                    o["default"].glEvent.on("load_finish_event", this, this.onLoadFinish), o["default"].glEvent.on("login_success_event", this, this.loginEvent);
                }, e.prototype.onLoadFinish = function(t) {
                    this._loadNum++, this._loadNum >= this._loadCount && (this.barPres.value = 1, this.lblPres.text = "100%",
                        this.loadFinished = !0, this.loadGameScene(), Laya.Browser.onWeiXin && Laya.timer.once(5e3, this, this.delayLoad));
                }, e.prototype.delayLoad = function() {
                    o["default"].glEvent.off("login_success_event", this, this.loginEvent), this.loginEvent();
                }, e.prototype.loginEvent = function() {
                    this.loginFinished = !0, this.loadGameScene(), o["default"].wxMgr.worldRank(1);
                }, e.prototype.onLoading = function(t) {
                    var e = (this._loadNum + t) / (this._loadCount + 1);
                    this.barPres.value = e, this.lblPres.text = Math.floor(100 * e) + "%";
                }, e.prototype.loadGameScene = function() {
                    Laya.Browser.onWeiXin ? this.loadFinished && this.loginFinished && this.openGameScene() : this.openGameScene();
                }, e.prototype.openGameScene = function() {
                    var t = this;
                    o["default"].commonData.load3dSceneStartTime = Laya.timer.currTimer, Laya.Scene.open("views/gameExt.scene", !1, Laya.Handler.create(this, function(e) {
                        Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(t, function(e) {
                            t.close();
                        }));
                    }));
                }, e;
            }(n["default"]);
        a["default"] = i;
    }, {
        "../LayaSample": 41,
        "./BaseView": 66
    }],
    73: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = t("../UnityEngine/Mathf"),
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.overTime = 10, e.isClose = !1, e.startTime = 0, e.color = "#00ffff", e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), console.log("OverView onAwake"), this.initProcess();
                    }, e.prototype.onOpened = function() {
                        this.isStartTimer = !0;
                    }, e.prototype.onWxWakeEvent = function() {
                        this.isStartTimer = !0;
                    }, e.prototype.onWxSleepEvent = function() {
                        this.isStartTimer = !1;
                    }, e.prototype.initData = function() {
                        Laya.timer.loop(1e3, this, this.onTimerStart);
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("goonTime");
                        this.lbTimer = this.getChild("lbTimer", t),
                            this.lbTimer.text = this.overTime.toString(),
                            this.btnVideo = this.getChild("btnVideo"),
                            this.btnVideo.visible = true;
                        var e = this.getChild("bottomPanel");
                        this.btnSkip = this.getChild("btnSkip", e), this.loadBar = this.getChild("bar1", t);


                        let appLite = this.getChildByName("appLite");
                        this.appList = appLite.getChildByName("appList");
                        this.appList.renderHandler = new Laya.Handler(this, this.onShareClick);
                        this.appList.array = platform.getInstance().getForgames();

                    },


                    e.prototype.initEvent = function() {
                        o["default"].utils.addClickEvent(this.btnVideo, this, this.onVideoClick),
                            o["default"].utils.addClickEvent(this.btnSkip, this, this.onSkipClick),
                            o["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent);
                    },


                    e.prototype.onShareClick = function(e) {
                        e.offAll(Laya.Event.MOUSE_DOWN)
                        e.on(Laya.Event.MOUSE_DOWN, e, () => {
                            platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                        });
                    },
                    e.prototype.onVideoClick = function() {
                        this.isStartTimer = !1
                        platform.getInstance().showReward(() => {
                            this.close(), this.goonGame()
                        }, () => {
                            this.isStartTimer = !0;
                            platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                        });

                    }, e.prototype.onSkipClick = function() {

                        console.log("onSkipClick");

                        platform.getInstance().showInterstitial(() => {
                            this.isClose || (this.isClose = !0, o["default"].commonData.existInterAd && o["default"].adMgr.showInterstitialAd(),
                                this.closeView());

                        })



                    }, e.prototype.closeView = function() {
                        var t = this;
                        o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd(), Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                            t.close();
                        }));
                    }, e.prototype.onTimerStart = function() {
                        return this.overTime > 0 ? void(this.isStartTimer && (this.overTime -= 1, this.lbTimer.text = this.overTime.toString())) : (Laya.timer.clear(this, this.onTimerStart),
                            void this.onSkipClick());
                    }, e.prototype.onShareBackEvent = function(t) {},
                    e.prototype.onVideoCloseEvent = function(t) {},
                    e.prototype.goonGame = function() {
                        o["default"].glEvent.event("goon_game_event");
                    }, e.prototype.initProcess = function() {
                        this.spr = new Laya.Sprite(), this.spr.pos(this.loadBar.pivotX, this.loadBar.pivotY),
                            this.loadBar.mask = this.spr, this.radius = Math.max(this.loadBar.width, this.loadBar.height),
                            this.angle = 0, this.drawDelay = 0, this.startTime = Laya.timer.currTimer, Laya.timer.loop(1e3, this, this.onFrameExt);
                    }, e.prototype.onFrame = function() {
                        !this.isStartTimer || Laya.timer.delta > 800 || (this.drawDelay += 50 * Laya.timer.delta,
                            this.drawDelay > 80 && (this.drawBar(), this.drawDelay = 0));
                    }, e.prototype.onFrameExt = function() {
                        console.log("onFrameExt");
                        var t = Laya.timer.currTimer - this.startTime,
                            e = 1e-4 * t;
                        e = .1 * (10 - this.overTime), this.drawBarExt(e);
                    }, e.prototype.drawBarExt = function(t) {
                        var e = i["default"].Lerp(-90, 270, t);
                        this.spr.graphics.clear(), this.spr.graphics.drawPie(0, 0, 150, -90, e, this.color);
                    }, e.prototype.drawBar = function() {
                        this.angle += .036 * this.drawDelay, this.spr.graphics.clear(), this.spr.graphics.drawPie(0, 0, 150, -90, this.angle - 90, "#00ffff");
                    }, e;
            }(n["default"]);
        a["default"] = r;
    }, {
        "../LayaSample": 41,
        "../UnityEngine/Mathf": 43,
        "./BaseView": 66
    }],
    74: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../uiComp/RankItem"),
            o = t("./BaseView"),
            i = t("../LayaSample"),
            r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.rankBgList = ["ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png"],
                        e.worldList = null, e.rankMe = null, e.btnBack = null, e.tabRank = null, e.friendList = null,
                        e.existWorldRank = !0, e.worldLoading = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), i["default"].commonData.isNoAds = !0, i["default"].adMgr.hideBannerAd(),
                            this.onRankFriend(), this.pageWorldRank = 1, this.isLoadedWorldRank = !1, i["default"].wxMgr.worldRank(1),
                            Laya.loader.load("prefab/rankItem.json", Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB);
                    }, e.prototype.initUI = function() {
                        var t = this.getChild("topPanel");
                        this.btnBack = this.getChild("btnBack", t), this.tabRank = this.getChild("tabRank"),
                            this.world = this.getChild("world"), this.worldList = this.getChild("list", this.world),
                            this.rankMe = this.getChild("rankMe", this.world), this.friend = this.getChild("friend"),
                            this.friendList = this.getChild("list", this.friend), this.touchArea = this.getChild("touchArea", this.friend),
                            this.touchArea.alpha = 0;
                    }, e.prototype.initEvent = function() {
                        i["default"].utils.addClickEvent(this.btnBack, this, this.onCloseClick, 12), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick),
                            i["default"].glEvent.on("draw_world_rank_event", this, this.onDrawWorldrankEvent);
                    }, e.prototype.onClosed = function() {
                        i["default"].glEvent.off("draw_world_rank_event", this, this.onDrawWorldrankEvent),
                            Laya.loader.clearRes("prefab/rankItem.json"), this.clear();
                    }, e.prototype.initRankEvent = function(t) {
                        if (!t) return this.touchArea.offAllCaller(this), this.touchArea.visible = !1, void(this.friendList.visible = !1);
                        this.touchArea.visible = !0, this.friendList.visible = !0;
                        var e = 0,
                            a = 0,
                            n = 0,
                            o = 0,
                            r = i["default"].commonData.wxsysInfo.pixelRatio ? i["default"].commonData.wxsysInfo.pixelRatio : 1;
                        Laya.Browser.onWeiXin && (this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                            t.stopPropagation(), n = 0, a = t.nativeEvent.timeStamp, e = t.nativeEvent.changedTouches[0].clientY,
                                i["default"].wxMgr.onFrientMouseEvent({
                                    cmd: "touch_start"
                                });
                        }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function(t) {
                            t.stopPropagation(), n = t.nativeEvent.changedTouches[0].clientY - e, i["default"].wxMgr.onFrientMouseEvent({
                                cmd: "touch_move",
                                deltaY: n * r
                            });
                        }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function(t) {
                            t.stopPropagation(), o = n / (t.nativeEvent.timeStamp - a), i["default"].wxMgr.onFrientMouseEvent({
                                cmd: "touch_end",
                                speed: o
                            });
                        }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function(t) {
                            t.stopPropagation(), o = n / (t.nativeEvent.timeStamp - a), i["default"].wxMgr.onFrientMouseEvent({
                                cmd: "touch_cancel",
                                speed: o
                            });
                        }));
                    }, e.prototype.showList = function(t) {
                        var e = t ? 1 : 0;
                        this.worldList.alpha = e, this.rankMe.alpha = e;
                    }, e.prototype.initList = function() {
                        var t = this.worldList;
                        t.itemRender = n["default"], t.cacheContent = !1, t.vScrollBarSkin = "", t.selectEnable = !1,
                            t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem),
                            this.worldLoading++;
                    }, e.prototype.refreshList = function() {
                        if (this.worldLoading >= 2) {
                            if (0 == this.rankMe.numChildren) {
                                var t = new n["default"]();
                                this.rankMe.addChild(t), t.setRankItem(this.userRank);
                            }
                            Laya.timer.clear(this, this.refreshList);
                        }
                    }, e.prototype.onRankClick = function(t) {
                        1 == t ? this.onRankWorld() : this.onRankFriend();
                    }, e.prototype.onRankFriend = function() {
                        if (this.world.visible = !1, this.friend.visible = !0, this.friendList.visible = !0,
                            this.showList(!1), this.initRankEvent(!0), i["default"].wxMgr.showFriendRank(!0),
                            window.wx && window.sharedCanvas) {
                            var t = this.friendList.width,
                                e = this.friendList.height;
                            window.sharedCanvas.width = t, console.log(this.friendList.height), window.sharedCanvas.height = e,
                                window.sharedCanvas.height = 850;
                        }
                    },
                    e.prototype.onRankWorld = function() {
                        this.world.visible = !0, this.friend.visible = !1, this.friendList.visible = !1,
                            this.showList(!0), this.initRankEvent(!1), i["default"].wxMgr.showFriendRank(!1),
                            Laya.timer.loop(100, this, this.refreshList);
                    },
                    e.prototype.onDrawWorldrankEvent = function(t) {
                        this.worldLoading++;
                        var e = t.page,
                            a = {},
                            n = [];
                        if (t.data instanceof Array) n = t.data, a.data = {
                            list: n,
                            page: e
                        };
                        else {
                            if (!t.data) return void console.error("rank data is null.");
                            a = t, n = t.data.list, t.data.userInfo.userId = t.data.userInfo.id, t.data.userInfo.bgUrl = this.rankBgList[2],
                                delete t.data.userInfo.id, this.userRank = t.data.userInfo;
                        }
                        if (!n) return void(this.existWorldRank = !1);
                        this.existWorldRank = n.length >= 20 ? !0 : !1;
                        for (var o = a.data.list.length, i = 0; o > i; ++i) {
                            a.data.list[i].userId = a.data.list[i].id;
                            var r = (a.data.list[i].rank - 1) % 2;
                            a.data.list[i].bgUrl = this.rankBgList[r], delete a.data.list[i].id;
                        }
                        this.rankData || (this.rankData = {}), this.pageWorldRank = e, this.rankData[e] = a;
                        var s = [];
                        for (var l in this.rankData) s.push.apply(s, this.rankData[l].data.list);
                        this.worldList.array = s, this.isLoadedWorldRank = !0;
                    }, e.prototype.updateItem = function(t, e) {
                        t.setRankItem(t.dataSource);
                        var a = this.pageWorldRank;
                        if (e - 6 == 0 && 6 > a);
                        else if (e + 6 == this.worldList.length) {
                            a += 1;
                            var n = this.rankData[a];
                            n || this.isLoadedWorldRank && this.existWorldRank && 6 > a;
                        }
                    }, e.prototype.onSelect = function(t) {
                        console.log("当前选择的索引：" + t);
                    }, e.prototype.onCloseClick = function() {
                        var t = this;
                        i["default"].commonData.isNoAds = !1, Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function(e) {
                            t.close();
                        }));
                    }, e.prototype.clear = function() {
                        i["default"].wxMgr.showFriendRank(!1), this.touchArea.offAllCaller(this), this.worldList.array = [],
                            this.worldList.destroy();
                    }, e;
            }(o["default"]);
        a["default"] = r;
    }, {
        "../LayaSample": 41,
        "../uiComp/RankItem": 63,
        "./BaseView": 66
    }],
    75: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("./BaseView"),
            o = t("../LayaSample"),
            i = t("../uiComp/SkinItem"),
            r = t("../JieExt/UI/Item"),
            s = t("../JieExt/Game/Zhujue"),
            l = t("../JieExt/Game/Actions"),
            u = t("../JieExt/Core/Vector3Ext"),
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._resNum = 0, e.accBase = {
                        front: .01,
                        up: .01,
                        down: .01
                    }, e.skinData = [], e.dicItem = {}, e.selectIdx = 0, e;
                }
                return __extends(e, t), e.prototype.onAwake = function() {
                        t.prototype.onAwake.call(this), o["default"].commonData.isNoAds = !0, o["default"].adMgr.hideBannerAd();
                    }, e.prototype.initUI = function() {
                        var t = this.getChildByName("topPanel");
                        this.btnBack = this.getChild("btnBack", t), this.lblGold = this.getChild("lblGold", t),
                            this.skinIcon = this.getChild("skinIcon"), this.skinList = this.getChild("skinList");
                        this.getChildByName("bottomPanel");
                        this.btnBuy = this.getChild("btnBuy"), this.btnVideo = this.getChild("btnVideo"),
                            this.lblPrice = this.getChild("lblPrice", this.btnBuy), this.lblVideoLimit = this.getChild("lblLimit", this.btnVideo),
                            this.accFrontBar = this.getChild("accFrontBar"), this.accDownBar = this.getChild("accDownBar"),
                            this.accUpBar = this.getChild("accUpBar");
                        for (var e = [], a = 0; 9 > a; ++a) {
                            var n = {};
                            n.skin = "ui/skin/1.png", n.lock = "ui/skin/cell_skin_2.png", n.selectUrl = "ui/skin/cell_skin_1.png",
                                e.push(n);
                        }
                        this.skinList.itemRender = r["default"], this.skinList.renderHandler = new Laya.Handler(this, this.updateItem2),
                            this.skinList.selectHandler = new Laya.Handler(this, this.onSelect), this.skinList.array = e,
                            this.skinList.repeatX = 3, this.skinList.repeatY = 3, this.skinList.vScrollBarSkin = "",
                            this.skinList.selectEnable = !0, this.skinList.refresh(), o["default"].storageMgr.readUnLockSkinStorage(),
                            this.SetLocalData(o["default"].storageMgr.skindata), this.onSelect(0);
                        var i = Laya.stage.addChild(new Laya.Scene3D());
                        this.modelLight = i.addChild(new Laya.DirectionLight()), this.modelLight.color = new Laya.Vector3(1, .956, .839),
                            this.modelLight.transform.rotate(new Laya.Vector3(59.3, -55.16, 0), !0, !1), this.modelCamera = new Laya.Camera(0, .1, 100),
                            this.modelCamera.transform.translate(new Laya.Vector3(0, .7, 10)), this.modelCamera.transform.rotate(new Laya.Vector3(-15, 0, 0), !0, !1),
                            i.addChild(this.modelCamera), this.modelCamera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
                            this.modelScene = i, this.model = Laya.Sprite3D.instantiate(s["default"].instantce.model),
                            i.addChild(this.model), this.model.transform.localRotationEulerY += 180;
                        var h = this.model.addComponent(l["default"]);
                        h.Stay(), this.model.transform.position = u["default"].Zero;
                    }, e.prototype.SetLocalData = function(t) {
                        if (null != t)
                            for (var e = 0, a = t; e < a.length; e++) {
                                var n = a[e];
                                this.dicItem[n].UnLock();
                            }
                    }, e.prototype.updateItem2 = function(t, e) {
                        t.setImg(t.dataSource.skin, t.dataSource.lock, t.dataSource.selectUrl), this.dicItem[e] = t;
                    }, e.prototype.onSelect = function(t) {
                        null != this.preSelect && this.preSelect.Unselect();
                        var e = this.dicItem[t];
                        e.select(), this.selectIdx = t, this.preSelect = e, this.btnBuy.visible = !e.isUnLock(),
                            this.btnVideo.visible = !e.isUnLock();
                    }, e.prototype.initEvent = function() {
                        o["default"].utils.addClickEvent(this.btnBack, this, this.onCloseClick), o["default"].utils.addClickEvent(this.btnBuy, this, this.onBuyClick),
                            o["default"].utils.addClickEvent(this.btnVideo, this, this.onVideoClick), o["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent),
                            o["default"].glEvent.on("gold_changer_event", this, this.onGoldChangerEvent), o["default"].glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                    }, e.prototype.onClosed = function() {
                        this.model.destroy(), this.modelLight.destroy(), this.modelCamera.destroy(), this.modelScene.destroy(),
                            this.destroy();
                    }, e.prototype.initItem = function() {
                        i["default"].itemPrefab = Laya.loader.getRes("prefab/skinItem.json");
                    }, e.prototype.InitSkinData = function() {
                        return;
                    }, e.prototype.initList = function() {
                        this.initItem();
                        var t = this.skinList;
                        t.itemRender = i["default"], t.hScrollBarSkin = "", t.selectEnable = !0;
                    }, e.prototype.showSkin = function(t, e) {}, e.prototype.showGold = function(t) {},
                    e.prototype.onCloseClick = function() {
                        o["default"].commonData.isNoAds = !1, Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function() {
                            this.close();
                        }));
                    }, e.prototype.onBuyClick = function() {
                        this.dicItem[this.selectIdx].UnLock(), o["default"].storageMgr.skindata.push(this.selectIdx),
                            o["default"].storageMgr.writeUnLockSkinStorage();
                    }, e.prototype.onVideoClick = function() {
                        o["default"].commonData.selectSkinTemp.type = 1;
                        this.skinData[o["default"].commonData.selectSkinTemp.index];
                        o["default"].commonData.existVideoAd ? o["default"].adMgr.showVideoAd(6) : o["default"].wxMgr.showToast("暂无视频", 2e3);
                    }, e.prototype.onVideoCloseEvent = function(t) {
                        if (t.isEnded) {
                            var e = o["default"].commonData.selectSkinTemp.index;
                            this.skinData[e];
                        } else o["default"].wxMgr.showToast("看完视频才能计算次数", 2e3);
                    }, e.prototype.onGoldChangerEvent = function() {
                        this.lblGold.text = o["default"].commonData.gold.toString();
                    }, e.prototype.onAdLoadEvent = function(t) {
                        "video" == t.adtype && (t.isLoad || (this.btnVideo.visible = !1));
                    }, e;
            }(n["default"]);
        a["default"] = h;
    }, {
        "../JieExt/Core/Vector3Ext": 9,
        "../JieExt/Game/Actions": 11,
        "../JieExt/Game/Zhujue": 27,
        "../JieExt/UI/Item": 36,
        "../LayaSample": 41,
        "../uiComp/SkinItem": 64,
        "./BaseView": 66
    }],
    76: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t("../LayaSample"),
            o = t("./BaseView"),
            i = t("../uiComp/SkinItem"),
            r = t("../JieExt/Game/EventTypeExt"),
            s = t("../JieExt/Tools/JieTools"),
            l = function(t) {
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
                        this.btnVideo = this.getChild("btnVideo", e), this.btnVideo.visible = !0, e = this.getChild("bottomPanel"),
                            this.btnBack = this.getChild("btnBack", e),
                            n["default"].tweenMgr.toScale(this.btnVideo, 1.1, 500, !0, !0);
                    }, e.prototype.initEvent = function() {
                        n["default"].utils.addClickEvent(this.btnVideo, this, this.onVideoClick, 14),
                            n["default"].utils.addClickEvent(this.btnBack, this, this.onBackClick, 14),
                            n["default"].glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent),
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
                                iconPath: "ui/skin/qiang" + (t + 1) + ".png"
                            };
                            this.skinData.push(e);
                        }
                    }, e.prototype.initList = function() {
                        i["default"].itemPrefab = Laya.loader.getRes(this.skinItemPath);
                        var t = this.skinList;
                        t.itemRender = i["default"], t.vScrollBarSkin = "", t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.onSelect),
                            t.renderHandler = new Laya.Handler(this, this.updateItem), t.array = this.skinData;
                    }, e.prototype.updateItem = function(t, e) {
                        var a = t;
                        a.setItemInfoJie(t.dataSource);
                    }, e.prototype.onSelect = function(t) {
                        if (0 > t) {

                        } else {
                            this.itemIndex = t + 1, this.skinList.selectedIndex = -1;
                            platform.getInstance().showReward(() => {
                                this.changeSkin()
                            });
                        }
                    },
                    e.prototype.onVideoClick = function() {
                        this.itemIndex = s["default"].getRandomInt(1, this.itemCount),
                            platform.getInstance().showReward(() => {
                                this.changeSkin()
                            });
                    },
                    e.prototype.onBackClick = function() {
                        this.itemIndex = 0, n["default"].glEvent.event(r["default"].skipSkin), n["default"].commonData.isNoAds = !0,
                            n["default"].adMgr.hideBannerAd(), this.close();
                    },
                    e.prototype.onAdLoadEvent = function(t) {}, e.prototype.onVideoCloseEvent = function(t) {
                        t.isEnded ? (this.changeSkin(), n["default"].commonData.isNoAds = !0, n["default"].adMgr.hideBannerAd()) : n["default"].wxMgr.showToast("未观看完视频", 2e3);
                    },
                    e.prototype.changeSkin = function() {
                        n["default"].commonData.isShowSkin = !1, n["default"].glEvent.event("change_skin_event", this.itemIndex),
                            n["default"].glEvent.event(r["default"].skipSkin), console.log(this.itemIndex),
                            this.close();
                    },
                    e.prototype.onTipsClick = function() {}, e;
            }(o["default"]);
        a["default"] = l;
    }, {
        "../JieExt/Game/EventTypeExt": 18,
        "../JieExt/Tools/JieTools": 34,
        "../LayaSample": 41,
        "../uiComp/SkinItem": 64,
        "./BaseView": 66
    }]
}, {}, [2]);