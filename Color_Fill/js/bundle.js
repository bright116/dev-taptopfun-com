var __extends = this && this.__extends || function () {
    var t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function (t, e) {
        t.__proto__ = e;
    } || function (t, e) {
        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
    };
    return function (e, a) {
        function i() {
            this.constructor = e;
        }
        t(e, a), e.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype,
            new i());
    };
}();

!function () {
    function t(e, a, i) {
        function n(o, l) {
            if (!a[o]) {
                if (!e[o]) {
                    var r = "function" == typeof require && require;
                    if (!l && r) return r(o, !0);
                    if (s) return s(o, !0);
                    var h = new Error("Cannot find module '" + o + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var d = a[o] = {
                    exports: {}
                };
                e[o][0].call(d.exports, function (t) {
                    return n(e[o][1][t] || t);
                }, d, d.exports, t, e, a, i);
            }
            return a[o].exports;
        }
        for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) n(i[o]);
        return n;
    }
    return t;
}()({
    1: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./script/Load/LoadingCtr"), n = t("./script/UIScript/GameUI"), s = t("./script/UIControl/ButtonAction"), o = t("./script/UIControl/UIController"), l = t("./script/GameBoxManager/UI/GuessYouLikeCtrl"), r = t("./script/GameBoxManager/UI/BoxBtn_AniCtrl"), h = t("./script/UIScript/StartManage"), d = t("./script/UIControl/SkinUseCtrl"), c = t("./script/GameBoxManager/UI/UIExtand/ItemAni_BoxBtn_Auto"), u = t("./script/GameBoxManager/UI/BoxBtn_AutoCtrl"), f = t("./script/UIControl/AddDiamondCtrl"),
            p = t("./script/UIScript/getSkinPanelCtr"), g = t("./script/UIScript/ShopManager"), m = t("./script/UIControl/FlyingCoin"), y = t("./script/UIScript/RigisterCtr"), v = t("./script/UIScript/LuckBoxManage"), b = t("./script/UIControl/TaskController"), _ = t("./script/UIControl/TurnTableCtr"), w = t("./script/UIControl/SkinGoodCtrl"), x = t("./script/UIControl/GiftBagPanelCtrl"), L = t("./script/UIControl/gongxiPanelCtr"), I = t("./script/UIScript/helpPanelCtr"), C = t("./script/UIScript/FlyCoin"), k = t("./script/GameBoxManager/UI/SideFrameUICtrl"), S = t("./script/UIScript/bkPanelCtr"), M = function () {
                function t() { }
                return t.init = function () {
                    var t = Laya.ClassUtils.regClass;
                    t("script/Load/LoadingCtr.ts", i.default), t("script/UIScript/GameUI.ts", n.default),
                        t("script/UIControl/ButtonAction.ts", s.default), t("script/UIControl/UIController.ts", o.default),
                        t("script/GameBoxManager/UI/GuessYouLikeCtrl.ts", l.default), t("script/GameBoxManager/UI/BoxBtn_AniCtrl.ts", r.default),
                        t("script/UIScript/StartManage.ts", h.default), t("script/UIControl/SkinUseCtrl.ts", d.default),
                        t("script/GameBoxManager/UI/UIExtand/ItemAni_BoxBtn_Auto.ts", c.default), t("script/GameBoxManager/UI/BoxBtn_AutoCtrl.ts", u.default),
                        t("script/UIControl/AddDiamondCtrl.ts", f.default), t("script/UIScript/getSkinPanelCtr.ts", p.default),
                        t("script/UIScript/ShopManager.ts", g.default), t("script/UIControl/FlyingCoin.ts", m.default),
                        t("script/UIScript/RigisterCtr.ts", y.default), t("script/UIScript/LuckBoxManage.ts", v.default),
                        t("script/UIControl/TaskController.ts", b.default), t("script/UIControl/TurnTableCtr.ts", _.default),
                        t("script/UIControl/SkinGoodCtrl.ts", w.default), t("script/UIControl/GiftBagPanelCtrl.ts", x.default),
                        t("script/UIControl/gongxiPanelCtr.ts", L.default), t("script/UIScript/helpPanelCtr.ts", I.default),
                        t("script/UIScript/FlyCoin.ts", C.default), t("script/GameBoxManager/UI/SideFrameUICtrl.ts", k.default),
                        t("script/UIScript/bkPanelCtr.ts", S.default);
                }, t.width = 750, t.height = 1334, t.scaleMode = "exactfit", t.screenMode = "none",
                    t.alignV = "middle", t.alignH = "center", t.startScene = "test/Loading.scene", t.sceneRoot = "",
                    t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t;
            }();
        a.default = M, M.init();
    }, {
        "./script/GameBoxManager/UI/BoxBtn_AniCtrl": 17,
        "./script/GameBoxManager/UI/BoxBtn_AutoCtrl": 18,
        "./script/GameBoxManager/UI/GuessYouLikeCtrl": 19,
        "./script/GameBoxManager/UI/SideFrameUICtrl": 20,
        "./script/GameBoxManager/UI/UIExtand/ItemAni_BoxBtn_Auto": 21,
        "./script/Load/LoadingCtr": 22,
        "./script/UIControl/AddDiamondCtrl": 23,
        "./script/UIControl/ButtonAction": 25,
        "./script/UIControl/FlyingCoin": 26,
        "./script/UIControl/GiftBagPanelCtrl": 27,
        "./script/UIControl/SkinGoodCtrl": 28,
        "./script/UIControl/SkinUseCtrl": 29,
        "./script/UIControl/TaskController": 30,
        "./script/UIControl/TurnTableCtr": 31,
        "./script/UIControl/UIController": 32,
        "./script/UIControl/gongxiPanelCtr": 33,
        "./script/UIScript/FlyCoin": 34,
        "./script/UIScript/GameUI": 35,
        "./script/UIScript/LuckBoxManage": 36,
        "./script/UIScript/RigisterCtr": 37,
        "./script/UIScript/ShopManager": 38,
        "./script/UIScript/StartManage": 39,
        "./script/UIScript/bkPanelCtr": 40,
        "./script/UIScript/getSkinPanelCtr": 41,
        "./script/UIScript/helpPanelCtr": 42
    }],
    2: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameConfig");
        new (function () {
            function t() {
                window.Laya3D ? Laya3D.init(i.default.width, i.default.height) : Laya.init(i.default.width, i.default.height, Laya.WebGL),
                    Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                    Laya.stage.scaleMode = i.default.scaleMode, Laya.stage.screenMode = i.default.screenMode,
                    Laya.stage.alignV = i.default.alignV, Laya.stage.alignH = i.default.alignH, Laya.URL.exportSceneToJson = i.default.exportSceneToJson,
                    (i.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                    i.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                    i.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return t.prototype.onVersionLoaded = function () {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, t.prototype.onConfigLoaded = function () {
                i.default.startScene && Laya.Scene.open(i.default.startScene), Laya.Browser.onMiniGame && Laya.loader.load("src/myOpenDataContext/res/atlas/RankUI.atlas", Laya.Handler.create(this, function () {
                    Laya.MiniAdpter.sendAtlasToOpenDataContext("src/myOpenDataContext/res/atlas/RankUI.atlas");
                }));
            }, t;
        }())();
    }, {
        "./GameConfig": 1
    }],
    3: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./SceneControl"), n = t("./MaterialCtrl"), s = t("./ModelPool"), o = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.index_x = 0, e.index_y = 0, e.isdie = !1, e.isstart = !0, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.diamond = this.owner, this.rotediamond = this.diamond.getChildByName("diamonds");
            }, e.prototype.init = function () {
                this.isdie = !1, this.tween.clear(), this.rotediamond.transform.localPositionZ = 0;
            }, e.prototype.Toroate = function () {
                var t = this;
                this.tween.to(this.rotediamond.transform, {
                    localRotationZ: 1
                }, 4e3, null, Laya.Handler.create(this, function () {
                    t.rotediamond.transform.localRotationZ = 0, t.Toroate();
                }));
            }, e.prototype.start = function () {
                this.isstart = !1, this.tween = new Laya.Tween(), this.Toroate();
            }, e.prototype.onUpdate = function () {
                if (!this.isstart && i.default.Instance().Twomodels[this.index_y][this.index_x].meshRenderer.sharedMaterial != n.default.instance.startMat && 0 == this.isdie) {
                    this.isdie = !0;
                    for (var t = 0; t < i.default.Instance().RecovryDiamond.length; t++) if (i.default.Instance().RecovryDiamond[t].transform.position == this.diamond.transform.position) {
                        i.default.Instance().RecovryDiamond.splice(t, 1);
                        break;
                    }
                    i.default.Instance().GetPos(this.diamond.transform.position), s.default.insance.diamondRecover(this.diamond);
                }
            }, e;
        }(Laya.Script);
        a.default = o;
    }, {
        "./MaterialCtrl": 5,
        "./ModelPool": 6,
        "./SceneControl": 10
    }],
    4: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./SceneControl"), n = t("./MaterialCtrl"), s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.isstart = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.floors = this.owner;
            }, e.prototype.onload = function () {
                this.isstart = !0;
            }, e.prototype.Init = function () {
                this.isstart = !1;
            }, e.prototype.onUpdate = function () {
                this.isstart && this.floors.transform.localPositionZ <= i.default.Instance().player.transform.localPositionZ && this.floors.meshRenderer.sharedMaterial == n.default.instance.startMat && (this.floors.meshRenderer.sharedMaterial = n.default.instance.endMat,
                    this.floors.transform.localPositionY = .4, this.isstart = !1);
            }, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "./MaterialCtrl": 5,
        "./SceneControl": 10
    }],
    5: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("../UIScript/GameUI"), s = function (t) {
            function e() {
                var a = t.call(this) || this;
                a.shopMaterrials = [], a.shopcolors = [], a.isskins = !1, a.morenColor = [], a.enemyColor = [],
                    a.bars = [], a.skinbars = [], a.usingskin = -1, e.instance = a;
                for (var i = 0; i < 16; i++) {
                    a.shopMaterrials[i] = null;
                }
                return Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/model/Box002Mat.lmat", Laya.Handler.create(a, function (t) {
                    a.startMat = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/mat/mat2.lmat", Laya.Handler.create(a, function (t) {
                    a.end1Mat = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/mat/mat3.lmat", Laya.Handler.create(a, function (t) {
                    a.end2Mat = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/mat/mat1.lmat", Laya.Handler.create(a, function (t) {
                    a.endMat = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/mat/shopMat/pic0.lmat", Laya.Handler.create(a, function (t) {
                    a.shop = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/model/playermat.lmat", Laya.Handler.create(a, function (t) {
                    a.playermat = t;
                })), Laya.BaseMaterial.load("LayaScene_ColorFill3D/Conventional/Assets/model/enemy.lmat", Laya.Handler.create(a, function (t) {
                    a.enemyMat = t;
                })), Laya.Texture2D.load("Material/skin1.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[0] = t;
                })), Laya.Texture2D.load("Material/skin2.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[1] = t;
                })), Laya.Texture2D.load("Material/skin3.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[2] = t;
                })), Laya.Texture2D.load("Material/skin4.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[3] = t;
                })), Laya.Texture2D.load("Material/skin5.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[4] = t;
                })), Laya.Texture2D.load("Material/skin6.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[5] = t;
                })), Laya.Texture2D.load("Material/skin7.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[6] = t;
                })), Laya.Texture2D.load("Material/skin8.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[7] = t;
                })), Laya.Texture2D.load("Material/skin9.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[8] = t;
                })), Laya.Texture2D.load("Material/skin10.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[9] = t;
                })), Laya.Texture2D.load("Material/skin11.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[10] = t;
                })), Laya.Texture2D.load("Material/skin12.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[11] = t;
                })), Laya.Texture2D.load("Material/skin13.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[12] = t;
                })), Laya.Texture2D.load("Material/skin14.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[13] = t;
                })), Laya.Texture2D.load("Material/skin15.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[14] = t;
                })), Laya.Texture2D.load("Material/skin16.jpg", Laya.Handler.create(a, function (t) {
                    a.shopMaterrials[15] = t;
                })), a.shopcolors = [[new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(173 / 255, 206 / 255, 254 / 255, 1), new Laya.Vector4(126 / 255, 178 / 255, 254 / 255, 1)], [new Laya.Vector4(1, 200 / 255, 231 / 255, 1), new Laya.Vector4(1, 143 / 255, 207 / 255, 1)], [new Laya.Vector4(173 / 255, 206 / 255, 254 / 255, 1), new Laya.Vector4(126 / 255, 178 / 255, 254 / 255, 1)], [new Laya.Vector4(1, 200 / 255, 231 / 255, 1), new Laya.Vector4(1, 143 / 255, 207 / 255, 1)], [new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(173 / 255, 206 / 255, 254 / 255, 1), new Laya.Vector4(126 / 255, 178 / 255, 254 / 255, 1)], [new Laya.Vector4(1, 200 / 255, 231 / 255, 1), new Laya.Vector4(1, 143 / 255, 207 / 255, 1)], [new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(1, 200 / 255, 231 / 255, 1), new Laya.Vector4(1, 143 / 255, 207 / 255, 1)], [new Laya.Vector4(1, 200 / 255, 231 / 255, 1), new Laya.Vector4(1, 143 / 255, 207 / 255, 1)], [new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(173 / 255, 252 / 255, 168 / 255, 1), new Laya.Vector4(131 / 255, 234 / 255, 119 / 255, 1)], [new Laya.Vector4(173 / 255, 206 / 255, 254 / 255, 1), new Laya.Vector4(126 / 255, 178 / 255, 254 / 255, 1)], [new Laya.Vector4(173 / 255, 206 / 255, 254 / 255, 1), new Laya.Vector4(126 / 255, 178 / 255, 254 / 255, 1)]],
                    a.bars = ["Game/bar5.png", "Game/bar1.png", "Game/bar4.png", "Game/bar1.png", "Game/bar4.png", "Game/bar5.png", "Game/bar5.png", "Game/bar1.png", "Game/bar4.png", "Game/bar5.png", "Game/bar4.png", "Game/bar4.png", "Game/bar5.png", "Game/bar5.png", "Game/bar1.png", "Game/bar1.png"],
                    a.skinbars = ["Game/bar5.png", "Game/bar1.png", "Game/bar4.png", "Game/bar1.png", "Game/bar4.png", "Game/bar5.png", "Game/bar5.png", "Game/bar1.png", "Game/bar4.png", "Game/bar5.png", "Game/bar4.png", "Game/bar4.png", "Game/bar5.png", "Game/bar5.png", "Game/bar1.png", "Game/bar1.png"],
                    a.morenColor = [[new Laya.Vector4(241 / 255, 162 / 255, 170 / 255, 1), new Laya.Vector4(236 / 255, 113 / 255, 118 / 255, 1)], [new Laya.Vector4(163 / 255, 191 / 255, 249 / 255, 1), new Laya.Vector4(116 / 255, 161 / 255, 247 / 255, 1)], [new Laya.Vector4(238 / 255, 163 / 255, 248 / 255, 1), new Laya.Vector4(235 / 255, 117 / 255, 242 / 255, 1)]],
                    a.enemyColor = [
                        new Laya.Vector4(230 / 255, 211 / 255, 80 / 255, 1)
                        , new Laya.Vector4(230 / 255, 211 / 255, 80 / 255, 1)
                        , new Laya.Vector4(230 / 255, 211 / 255, 80 / 255, 1)
                        , new Laya.Vector4(230 / 255, 211 / 255, 80 / 255, 1)
                    ], a;
            }
            return __extends(e, t), e.prototype.skinInit = function () {
                if (-1 == this.usingskin) {
                    for (var t = 0; t < i.default.shop.length; t++) if (2 == i.default.shop[t]) {
                        this.end1Mat.albedoColor = this.shopcolors[t][0], this.end2Mat.albedoColor = this.shopcolors[t][0],
                            this.endMat.albedoColor = this.shopcolors[t][1], this.playermat.albedoColor = this.shopcolors[t][0],
                            this.shop.albedoTexture = this.shopMaterrials[t], n.default.instance.bar1.skin = this.skinbars[t],
                            n.default.instance.bar2.skin = this.skinbars[t], n.default.instance.bar3.skin = this.skinbars[t],
                            this.isskins = !0, !0;
                        break;
                    }
                    e = Math.floor(4 * Math.random());
                    this.enemyMat.albedoColor = this.enemyColor[e], this.boomMat = this.enemyColor[e];
                } else {
                    this.isskins = !0, this.end1Mat.albedoColor = this.shopcolors[this.usingskin][0],
                        this.end2Mat.albedoColor = this.shopcolors[this.usingskin][0], this.endMat.albedoColor = this.shopcolors[this.usingskin][1],
                        this.playermat.albedoColor = this.shopcolors[this.usingskin][0], this.shop.albedoTexture = this.shopMaterrials[this.usingskin],
                        n.default.instance.bar1.skin = this.skinbars[this.usingskin], n.default.instance.bar2.skin = this.skinbars[this.usingskin],
                        n.default.instance.bar3.skin = this.skinbars[this.usingskin];
                    var e = Math.floor(4 * Math.random());
                    this.enemyMat.albedoColor = this.enemyColor[e], this.boomMat = this.enemyColor[e];
                }
            }, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../DataManager": 11,
        "../UIScript/GameUI": 35
    }],
    6: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./SceneControl"), n = t("./ObstacleCtrl"), s = t("../DataManager"), o = t("./MaterialCtrl"), l = t("./ObstacleManage"), r = t("./DiamondCtrl"), h = t("./EndFloorsCtrl"), d = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.floors = [], a.walls = [], a.enemys = [], a.booms = [], a.diamonds = [],
                    a.endfloors = [], a.obstacle = [], e.insance = a, a;
            }
            return __extends(e, t), e.prototype.GetModel = function () {
                this.ParentModel = i.default.Instance().scene3d, this.floorModel = i.default.Instance().floorModel,
                    this.wallModel = i.default.Instance().wallModel, this.enemyModel = i.default.Instance().enemyModel,
                    this.boom = i.default.Instance().disappear, this.diamond = i.default.Instance().diamond,
                    this.three = i.default.Instance().three, this.four = i.default.Instance().four,
                    this.five = i.default.Instance().five, this.six = i.default.Instance().six, this.seven = i.default.Instance().seven,
                    this.eight = i.default.Instance().eight, this.nine = i.default.Instance().nine,
                    this.ten = i.default.Instance().ten, this.eleven = i.default.Instance().eleven,
                    this.Twelve = i.default.Instance().Twelve, this.thirteen = i.default.Instance().thirteen,
                    this.fourteen = i.default.Instance().fourteen, this.fifteen = i.default.Instance().fifteen,
                    this.endfloorModel = i.default.Instance().endfloors;
            }, e.prototype.floorCreat = function () {
                var t = null;
                this.floors.length > 0 ? (t = this.floors.pop(), this.ParentModel.addChild(t)) : t = Laya.MeshSprite3D.instantiate(this.floorModel, this.ParentModel);
                var e = i.default.Instance().width_adopt, a = i.default.Instance().height_adopt;
                return t.transform.position = new Laya.Vector3(e, -.5, a), t;
            }, e.prototype.wallCreat = function () {
                var t = null;
                this.walls.length > 0 ? (t = this.walls.pop(), this.ParentModel.addChild(t)) : t = Laya.MeshSprite3D.instantiate(this.wallModel, this.ParentModel);
                var e = i.default.Instance().width_adopt, a = i.default.Instance().height_adopt;
                return t.transform.position = new Laya.Vector3(e, 0, a), t;
            }, e.prototype.enemyCreat = function (t, e, a) {
                var o = null;
                this.enemys.length > 0 ? (o = this.enemys.pop(), this.ParentModel.addChild(o)) : (o = Laya.MeshSprite3D.instantiate(this.enemyModel, this.ParentModel)).addComponent(n.default);
                var r = i.default.Instance().width_adopt, h = i.default.Instance().height_adopt;
                return o.transform.position = new Laya.Vector3(r, .4, h), o.getComponent(n.default).sign = t,
                    3 == t ? (this.three.addChild(o), i.default.Instance().isstatic = !0) : 4 == t || 8 == t || 12 == t ? (o.getComponent(n.default).isleft = !0,
                        4 == t ? (this.four.addChild(o), this.four.getComponent(l.default).isleft = !0,
                            this.four.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case4,
                            o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case4) : 8 == t ? (this.eight.addChild(o),
                                this.eight.getComponent(l.default).isleft = !0, this.eight.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case8,
                                o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case8) : 12 == t && (this.Twelve.addChild(o),
                                    this.Twelve.getComponent(l.default).isleft = !0, this.Twelve.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case12,
                                    o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case12)) : 5 == t || 9 == t || 13 == t ? (o.getComponent(n.default).isright = !0,
                                        5 == t ? (this.five.addChild(o), this.five.getComponent(l.default).isright = !0,
                                            this.five.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case5,
                                            o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case5) : 9 == t ? (this.nine.addChild(o),
                                                this.nine.getComponent(l.default).isright = !0, this.nine.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case9,
                                                o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case9) : 13 == t && (this.thirteen.addChild(o),
                                                    this.thirteen.getComponent(l.default).isright = !0, this.thirteen.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case13,
                                                    o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case13)) : 6 == t || 10 == t || 14 == t ? (o.getComponent(n.default).isup = !0,
                                                        6 == t ? (this.six.addChild(o), this.six.getComponent(l.default).isup = !0, this.six.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case6,
                                                            o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case6) : 10 == t ? (this.ten.addChild(o),
                                                                this.ten.getComponent(l.default).isup = !0, this.ten.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case10,
                                                                o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case10) : 14 == t && (this.fourteen.addChild(o),
                                                                    this.fourteen.getComponent(l.default).isup = !0, this.fourteen.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case14,
                                                                    o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case14)) : 7 != t && 11 != t && 15 != t || (o.getComponent(n.default).isdown = !0,
                                                                        7 == t ? (this.seven.addChild(o), this.seven.getComponent(l.default).isdown = !0,
                                                                            this.seven.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case7,
                                                                            o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case7) : 11 == t ? (this.eleven.addChild(o),
                                                                                this.eleven.getComponent(l.default).isdown = !0, this.eleven.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case11,
                                                                                o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case11) : 15 == t && (this.fifteen.addChild(o),
                                                                                    this.fifteen.getComponent(l.default).isdown = !0, this.fifteen.getComponent(l.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case15,
                                                                                    o.getComponent(n.default).distance = i.default.Instance().json.datas[s.default.level - 1].content[s.default.littlelevel - 1].case15)),
                    this.obstacle.push(o), o;
            }, e.prototype.boomCreat = function (t) {
                var e = this, a = null;
                this.booms.length > 0 ? (a = this.booms.pop(), this.ParentModel.addChild(a)) : a = Laya.MeshSprite3D.instantiate(this.boom, this.ParentModel),
                    a.transform.position = t, a.particleSystem.startColorConstant = o.default.instance.boomMat,
                    a.particleSystem.play(), Laya.timer.once(500, this, function () {
                        e.boom.particleSystem.stop(), e.boom.removeSelf(), e.booms.push(a);
                    });
            }, e.prototype.diamondCreat = function () {
                var t = null;
                this.diamonds.length > 0 ? (t = this.diamonds.pop(), this.ParentModel.addChild(t)) : (t = Laya.MeshSprite3D.instantiate(this.diamond, this.ParentModel)).addComponent(r.default);
                var e = i.default.Instance().width_adopt, a = i.default.Instance().height_adopt;
                return t.transform.position = new Laya.Vector3(e, .5, a - .3), t;
            }, e.prototype.endfloorCreat = function () {
                var t = null;
                this.endfloors.length > 0 ? (t = this.endfloors.pop(), this.ParentModel.addChild(t)) : (t = Laya.MeshSprite3D.instantiate(this.endfloorModel, this.ParentModel)).addComponent(h.default);
                var e = i.default.Instance().width_adopt, a = i.default.Instance().height_adopt;
                return t.meshRenderer.sharedMaterial = o.default.instance.startMat, t.transform.position = new Laya.Vector3(e, -.5, a),
                    t;
            }, e.prototype.endfloorRecover = function (t) {
                t.meshRenderer.sharedMaterial = o.default.instance.startMat, t.transform.localPositionY = -.1,
                    t.getComponent(h.default).Init(), t.removeSelf(), this.endfloors.push(t);
            }, e.prototype.floorRecover = function (t) {
                null != t && "box002" == t.name && (t.getChildAt(0).active = !1, t.meshRenderer.sharedMaterial = o.default.instance.startMat,
                    t.transform.localPositionY = -.1, Laya.Tween.clearAll(t), t.removeSelf(), this.floors.push(t));
            }, e.prototype.wallRecover = function (t) {
                null != t && "box001" == t.name && (t.active = !0, t.removeSelf(), this.walls.push(t));
            }, e.prototype.enemyRecover = function (t) {
                if (null != t && "enemy" == t.name) {
                    if (0 != i.default.Instance().RecoveryEnemy.length) for (var e = 0; e < i.default.Instance().RecoveryEnemy.length; e++) i.default.Instance().RecoveryEnemy[e].getComponent(n.default).ischeck();
                    t.getComponent(n.default).init(), t.removeSelf(), this.enemys.push(t);
                }
            }, e.prototype.diamondRecover = function (t) {
                null != t && "diamond" == t.name && (t.getComponent(r.default).init(), t.removeSelf(),
                    this.diamonds.push(t));
            }, e.insance = null, e;
        }(Laya.Script);
        a.default = d;
    }, {
        "../DataManager": 11,
        "./DiamondCtrl": 3,
        "./EndFloorsCtrl": 4,
        "./MaterialCtrl": 5,
        "./ObstacleCtrl": 7,
        "./ObstacleManage": 8,
        "./SceneControl": 10
    }],
    7: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./SceneControl"), n = t("./MaterialCtrl"), s = t("./ModelPool"), o = t("./PlayerCtrl"), l = t("../DataManager"), r = t("../WeChatManager"), h = t("../UIScript/GameUI"), d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.distance_z = 0, e.distance_x = 0, e.index_x = 0, e.index_y = 0, e.isdie = !1,
                    e.isdown = !1, e.isup = !1, e.isleft = !1, e.isright = !1, e.distance = 0, e.flag = 1,
                    e.isstart = !1, e.speed = .028, e.isover = !1, e.sign = 0, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.enemy = this.owner;
            }, e.prototype.ischeck = function () {
                this.isup || this.isdown ? 1 == this.flag ? null != i.default.Instance().Obmodels[this.index_y - 1][this.index_x] && i.default.Instance().Twomaps[this.index_y - 1][this.index_x] == this.sign ? this.isstart = !1 : this.isstart = !0 : -1 == this.flag && (null != i.default.Instance().Obmodels[this.index_y + 1][this.index_x] && i.default.Instance().Twomaps[this.index_y + 1][this.index_x] == this.sign ? this.isstart = !1 : this.isstart = !0) : this.isright || this.isleft ? 1 == this.flag ? null != i.default.Instance().Obmodels[this.index_y][this.index_x - 1] && i.default.Instance().Twomaps[this.index_y][this.index_x - 1] == this.sign ? this.isstart = !1 : this.isstart = !0 : null != i.default.Instance().Obmodels[this.index_y][this.index_x + 1] && i.default.Instance().Twomaps[this.index_y][this.index_x + 1] == this.sign ? this.isstart = !1 : this.isstart = !0 : this.isup || this.isdown || this.isleft || this.isright || (this.isstart = !0);
            }, e.prototype.start = function () {
                this.isdie = !1, this.distance_z = this.enemy.transform.localPositionZ, this.distance_x = this.enemy.transform.localPositionX;
                for (var t = 0; t < i.default.Instance().height; t++) for (var e = 0; e < i.default.Instance().width; e++) if (i.default.Instance().Twomodels[t][e].transform.localPositionX == this.enemy.transform.localPositionX && i.default.Instance().Twomodels[t][e].transform.localPositionZ == this.enemy.transform.localPositionZ) {
                    this.index_x = e, this.index_y = t;
                    break;
                }
                this.parentNode = this.enemy.parent, this.ischeck();
            }, e.prototype.init = function () {
                this.isdown = !1, this.isup = !1, this.isleft = !1, this.isright = !1, this.isdie = !1,
                    this.distance = 0, this.sign = 0, this.isdie = !1, this.isstart = !1;
            }, e.prototype.onLateUpdate = function () {
                Math.abs(i.default.Instance().player.transform.localPositionZ - (this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)) < .9 && Math.abs(i.default.Instance().player.transform.localPositionX - (this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX)) < .9 && 0 == o.default.instance.isdie && 0 == this.isdie && this.playerdie1();
            }, e.prototype.playerdie1 = function () {
                0 == o.default.instance.allfloorover && (o.default.instance.isdie = !0, r.default.SetVibration(!1, null),
                    0 == l.default.Firstgame[1] ? (o.default.instance.GameStop(), h.default.instance.First1()) : o.default.instance.GameLose());
            }, e.prototype.playerdie2 = function () {
                0 == o.default.instance.allfloorover && (o.default.instance.isdie = !0, r.default.SetVibration(!1, null),
                    0 == l.default.Firstgame[2] ? (o.default.instance.GameStop(), h.default.instance.First2()) : o.default.instance.GameLose());
            }, e.prototype.onUpdate = function () {
                if (this.isstart) if (this.isup) if (1 == this.flag) if (i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z) - 1][this.index_x].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z) - 1][this.index_x].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z) - 1][this.index_x].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)][this.index_x].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)][this.index_x].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y - Math.floor(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)][this.index_x].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (this.isdown) if (1 == this.flag) if (i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z))][this.index_x].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z))][this.index_x].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z))][this.index_x].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)) + 1][this.index_x].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)) + 1][this.index_x].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y + Math.floor(Math.abs(this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ - this.distance_z)) + 1][this.index_x].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (this.isleft) if (1 == this.flag) if (i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x) - 1].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x) - 1].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x) - 1].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y][this.index_x - Math.floor(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (this.isright) if (1 == this.flag) if (i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x))].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x))].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x))].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && (o.default.instance.isdie = !0,
                    r.default.SetVibration(!1, null), this.playerdie2()); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if (i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)) + 1].meshRenderer.sharedMaterial != n.default.instance.endMat && i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)) + 1].meshRenderer.sharedMaterial != n.default.instance.end1Mat || 0 != this.isdie) i.default.Instance().Twomodels[this.index_y][this.index_x + Math.floor(Math.abs(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX - this.distance_x)) + 1].meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == o.default.instance.isdie && this.playerdie2(); else {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX + this.parentNode.transform.localPositionX, .6, this.enemy.transform.localPositionZ + this.parentNode.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                } else if ((i.default.Instance().Twomodels[this.index_y][this.index_x].meshRenderer.sharedMaterial == n.default.instance.endMat || i.default.Instance().Twomodels[this.index_y][this.index_x].meshRenderer.sharedMaterial == n.default.instance.end1Mat) && 0 == this.isdie) {
                    this.isdie = !0, i.default.Instance().Obmodels[this.index_y][this.index_x] = null;
                    for (var t = 0; t < i.default.Instance().RecoveryEnemy.length; t++) if (i.default.Instance().RecoveryEnemy[t].transform.position == this.enemy.transform.position) {
                        i.default.Instance().RecoveryEnemy.splice(t, 1);
                        break;
                    }
                    r.default.SetVibration(!0, null), s.default.insance.boomCreat(new Laya.Vector3(this.enemy.transform.localPositionX, .6, this.enemy.transform.localPositionZ)),
                        s.default.insance.enemyRecover(this.enemy);
                }
            }, e;
        }(Laya.Script3D);
        a.default = d;
    }, {
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43,
        "./MaterialCtrl": 5,
        "./ModelPool": 6,
        "./PlayerCtrl": 9,
        "./SceneControl": 10
    }],
    8: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./ObstacleCtrl"), n = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.isdown = !1, e.isup = !1, e.isleft = !1, e.isright = !1, e.distance = 0,
                    e.speed = 800, e.speed2 = .028, e.timer = 0, e.isdie = !1, e.isstart = !1, e.distance_z = 0,
                    e.distance_x = 0, e.flag = 1, e.up1 = !1, e.down1 = !1, e.left1 = !1, e.right1 = !1,
                    e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.enemy = this.owner;
            }, e.prototype.start = function () {
                this.distance_z = this.enemy.transform.localPositionZ, this.distance_x = this.enemy.transform.localPositionX,
                    this.timer = this.speed * this.distance, this.isdie = !1, this.enemy.transform.position = new Laya.Vector3(0, 0, 0)
                if (this.isup) {
                    for (t = 0; t < this.enemy.numChildren; t++) this.enemy.getChildAt(t).getComponent(i.default).flag = 1,
                        this.enemy.getChildAt(t).getComponent(i.default).ischeck();
                    this.flag = 1, this.isstart = !0, Laya.timer.frameLoop(1, this, this.Move);
                } else if (this.isdown) {
                    for (t = 0; t < this.enemy.numChildren; t++) this.enemy.getChildAt(t).getComponent(i.default).flag = -1,
                        this.enemy.getChildAt(t).getComponent(i.default).ischeck();
                    this.flag = -1, this.isstart = !0, Laya.timer.frameLoop(1, this, this.Move);
                } else if (this.isleft) {
                    for (t = 0; t < this.enemy.numChildren; t++) this.enemy.getChildAt(t).getComponent(i.default).flag = 1,
                        this.enemy.getChildAt(t).getComponent(i.default).ischeck();
                    this.flag = 1, this.isstart = !0, Laya.timer.frameLoop(1, this, this.Move);
                } else if (this.isright) {
                    for (t = 0; t < this.enemy.numChildren; t++) this.enemy.getChildAt(t).getComponent(i.default).flag = -1,
                        this.enemy.getChildAt(t).getComponent(i.default).ischeck();
                    this.flag = -1, this.isstart = !0, Laya.timer.frameLoop(1, this, this.Move);
                }
                if (!(this.isright || this.isleft || this.isup || this.isdown)) for (var t = 0; t < this.enemy.numChildren; t++) this.enemy.getChildAt(t).getComponent(i.default).ischeck();
            }, e.prototype.changeFlag2 = function (t) {
                for (var e = 0; e < this.enemy.numChildren; e++) this.enemy.getChildAt(e).getComponent(i.default).flag = -this.enemy.getChildAt(e).getComponent(i.default).flag,
                    this.enemy.getChildAt(e).getComponent(i.default).ischeck();
            }, e.prototype.init = function () {
                this.isdown = !1, this.isup = !1, this.isleft = !1, this.isright = !1, this.distance = 0,
                    this.right1 = !1, this.left1 = !1, this.up1 = !1, this.down1 = !1, this.isstart = !1,
                    Laya.timer.clear(this, this.Move), this.enemy.transform.localPositionX = this.distance_x,
                    this.enemy.transform.localPositionZ = this.distance_z;
            }, e.prototype.Move = function () {
                this.isstart && (this.isup ? (this.enemy.transform.translate(new Laya.Vector3(0, 0, this.speed2 * this.flag)),
                    this.enemy.transform.localPositionZ >= this.distance_z + this.distance && (this.enemy.transform.localPositionZ = this.distance_z + this.distance,
                        this.flag = -1, 0 == this.down1 && (this.down1 = !0, this.up1 = !1, this.changeFlag2(-1))),
                    this.enemy.transform.localPositionZ <= this.distance_z && (this.enemy.transform.localPositionZ = this.distance_z,
                        this.flag = 1, 0 == this.up1 && (this.up1 = !0, this.down1 = !1, this.changeFlag2(1)))) : this.isdown ? (this.enemy.transform.translate(new Laya.Vector3(0, 0, this.speed2 * this.flag)),
                            this.enemy.transform.localPositionZ >= this.distance_z && (this.enemy.transform.localPositionZ = this.distance_z,
                                this.flag = -1, 0 == this.down1 && (this.down1 = !0, this.up1 = !1, this.changeFlag2(-1))),
                            this.enemy.transform.localPositionZ <= this.distance_z - this.distance && (this.enemy.transform.localPositionZ = this.distance_z - this.distance,
                                this.flag = 1, 0 == this.up1 && (this.up1 = !0, this.down1 = !1, this.changeFlag2(1)))) : this.isleft ? (this.enemy.transform.translate(new Laya.Vector3(this.speed2 * this.flag, 0, 0)),
                                    this.enemy.transform.localPositionX >= this.distance_x + this.distance && (this.enemy.transform.localPositionX = this.distance_x + this.distance,
                                        this.flag = -1, 0 == this.right1 && (this.right1 = !0, this.left1 = !1, this.changeFlag2(-1))),
                                    this.enemy.transform.localPositionX <= this.distance_x && (this.enemy.transform.localPositionX = this.distance_x,
                                        this.flag = 1, 0 == this.left1 && (this.left1 = !0, this.right1 = !1, this.changeFlag2(1)))) : this.isright && (this.enemy.transform.translate(new Laya.Vector3(this.speed2 * this.flag, 0, 0)),
                                            this.enemy.transform.localPositionX >= this.distance_x && (this.enemy.transform.localPositionX = this.distance_x,
                                                this.flag = -1, 0 == this.right1 && (this.right1 = !0, this.left1 = !1, this.changeFlag2(-1))),
                                            this.enemy.transform.localPositionX <= this.distance_x - this.distance && (this.enemy.transform.localPositionX = this.distance_x - this.distance,
                                                this.flag = 1, 0 == this.left1 && (this.left1 = !0, this.right1 = !1, this.changeFlag2(1)))));
            }, e;
        }(Laya.Script3D);
        a.default = n;
    }, {
        "./ObstacleCtrl": 7
    }],
    9: [function (t, e, a) {//玩家移动类
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./SceneControl"), n = t("./MaterialCtrl"), s = t("../UIScript/GameUI"), o = t("./ObstacleManage"),
            l = t("../DataManager"), r = t("../WeChatManager"), h = t("../UIScript/StartManage"),
            d = t("../UIControl/TurnTableCtr"), c = t("../UIControl/GiftBagPanelCtrl"), u = t("../UIScript/bkPanelCtr"), f = function (t) {
                function e() {
                    var a = t.call(this) || this;
                    return a.ismove = !1, a.posX = 0, a.posY = 0, a.isleft = !1, a.isright = !1, a.isup = !1,
                        a.isdown = !1, a.ish = !1, a.isv = !1, a.StopPos = new Laya.Vector3(0, 0, 0), a.StartPos = new Laya.Vector3(0, 0, 0),
                        a.index_x = 0, a.index_y = 0, a.allindex_x = 0, a.allindex_y = 0, a.flag = 0, a.speed = .12,
                        a.ChangeModel = [], a.ColorValue = 1, a.startindex_x = 6, a.startindex_y = 11, a.Models = [],
                        a.checkpoi = [], a.checkpoipos = [], a.body_x = 0, a.body_y = 0, a.EndPos = [],
                        a.endnum = [], a.isstop = !1, a.isloop = !1, a.isdie = !1, a.isone = !1, a.allefferfloors = [],
                        a.ischeck = !1, a.allfloorover = !1, a.endposition = [], a.isend = !1, a.isgetmoney = !1,
                        a.isgoodskin = 1, e.instance = a, a;
                }
                return __extends(e, t), e.prototype.onAwake = function () {
                    this.player = this.owner, this.tween_next = new Laya.Tween(), this.tween_hand = new Laya.Tween();
                    this.keyArr = [];
                    this.canGoOtherView = false;
                }, e.prototype.MapStart = function () {
                    this.endposition = [];
                    var t = [];
                    t.push(this.Models[this.index_y][this.index_x]), this.effer(t), Laya.timer.once(1500, this, function () {
                        i.default.Instance().iscan = !1;
                    });
                }, e.prototype.OnMouseCall = function () {
                    this.canGoOtherView = true;
                    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown);
                    Laya.stage.on(Laya.Event.KEY_DOWN, this, this.keyDown);
                    Laya.stage.on(Laya.Event.KEY_UP, this, this.keyUp);
                }, e.prototype.keyDown = function (e) {
                    //t.A = 65, t.D = 68, t.S = 83,t.W = 87
                    //t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40
                    if ((e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) && this.keyArr.indexOf(e.keyCode) == -1) {
                        this.keyArr.push(e.keyCode);
                        let posX = 0;
                        let posY = 0;
                        let mouseX = 0;
                        let mouseY = 0;
                        if (e.keyCode == 37) {
                            posX = 10
                            mouseX = 5
                        }
                        if (e.keyCode == 39) {
                            posX = 10
                            mouseX = 15
                        }
                        if (e.keyCode == 40) {
                            posY = 10
                            mouseY = 15
                        }
                        if (e.keyCode == 38) {
                            posY = 10
                            mouseY = 5
                        }
                        // if (0 == this.ismove) {
                        // if (Math.abs(posX) > 0 || Math.abs(posY - mouseY) > 0) {
                        // if (Math.abs(posX - mouseX) > 1 && Math.abs(posY - mouseY) > 1)
                        if (this.ismove = !0, Math.abs(posX - mouseX) > Math.abs(posY - mouseY))
                            if (posX - mouseX > 0) {
                                if (this.player.transform.localPositionZ != this.StartPos.z) {
                                    if (this.isup) {
                                        a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ);
                                        this.allindex_y = this.allindex_y + a, this.flag = 3, this.StopPos.z = this.StopPos.z - a;
                                    } else if (this.isdown) {
                                        a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z);
                                        this.allindex_y = this.allindex_y - a, this.flag = 3, this.StopPos.z = this.StopPos.z + a;
                                    }
                                } else if (this.isleft || this.isv || this.isright) {
                                    if (this.isright && !this.isv) {
                                        var t = Math.floor(this.player.transform.localPositionX - this.StopPos.x), e = this.allindex_x - t;
                                        this.Models[this.index_y][e].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_x = e,
                                            this.flag = 3, this.StopPos.x = this.StopPos.x + t);
                                    }
                                } else {
                                    this.ish = !0, this.isleft = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                        this.EndPos = [], this.GetStopPos("向左"), Laya.timer.frameLoop(1, this, this.Move);
                                }
                            } else if (this.player.transform.localPositionZ != this.StartPos.z) {
                                if (this.isup) {
                                    a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ);
                                    this.allindex_y = this.allindex_y + a, this.flag = 4, this.StopPos.z = this.StopPos.z - a;
                                } else if (this.isdown) {
                                    a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z);
                                    this.allindex_y = this.allindex_y - a, this.flag = 4, this.StopPos.z = this.StopPos.z + a;
                                }
                            } else if (this.isright || this.isv || this.isleft) {
                                if (this.isleft && !this.isv) {
                                    var t = Math.floor(this.StopPos.x - this.player.transform.localPositionX), e = this.allindex_x + t;
                                    this.Models[this.index_y][e].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_x = e,
                                        this.flag = 4, this.StopPos.x = this.StopPos.x - t);
                                }
                            } else this.ish = !0, this.isright = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                this.EndPos = [], this.GetStopPos("向右"), Laya.timer.frameLoop(1, this, this.Move); else if (posY - mouseY > 0) if (this.player.transform.localPositionX != this.StartPos.x) {
                                    if (this.isleft) {
                                        t = Math.floor(this.StopPos.x - this.player.transform.localPositionX);
                                        this.allindex_x = this.allindex_x + t, this.flag = 2, this.StopPos.x = this.StopPos.x - t;
                                    } else if (this.isright) {
                                        t = Math.floor(this.player.transform.localPositionX - this.StopPos.x);
                                        this.allindex_x = this.allindex_x - t, this.flag = 2, this.StopPos.x = this.StopPos.x + t;
                                    }
                                } else if (this.isup || this.ish || this.isdown) {
                                    if (this.isdown && !this.ish) {
                                        var a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ), i = this.allindex_y + a;
                                        this.Models[i][this.index_x].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_y = i,
                                            this.flag = 2, this.StopPos.z = this.StopPos.z - a);
                                    }
                                } else this.isv = !0, this.isup = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                    this.EndPos = [], this.GetStopPos("向上"), Laya.timer.frameLoop(1, this, this.Move); else if (this.player.transform.localPositionX != this.StartPos.x) {
                                        if (this.isleft) {
                                            t = Math.floor(this.StopPos.x - this.player.transform.localPositionX);
                                            this.allindex_x = this.allindex_x + t, this.flag = 1, this.StopPos.x = this.StopPos.x - t;
                                        } else if (this.isright) {
                                            t = Math.floor(this.player.transform.localPositionX - this.StopPos.x);
                                            this.allindex_x = this.allindex_x - t, this.flag = 1, this.StopPos.x = this.StopPos.x + t;
                                        }
                                    } else if (this.isdown || this.ish || this.isup) {
                                        if (this.isup && !this.ish) {
                                            var a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z), i = this.allindex_y - a;
                                            this.Models[i][this.index_x].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_y = i,
                                                this.flag = 1, this.StopPos.z = this.StopPos.z + a);
                                        }
                                    } else this.isv = !0, this.isdown = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                        this.EndPos = [], this.GetStopPos("向下"), Laya.timer.frameLoop(1, this, this.Move);
                        // } else this.ismove = !1;
                        // }
                    }
                }, e.prototype.keyUp = function (e) {
                    if (this.keyArr.indexOf(e.keyCode) != -1) {
                        this.keyArr.splice(this.keyArr.indexOf(e.keyCode), 1);
                    }
                }, e.prototype.OffMouseCall = function () {
                    this.canGoOtherView = false;
                    this.keyArr = [];
                    Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.MouseDown),
                        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.MouseMove);
                    Laya.stage.off(Laya.Event.KEY_DOWN, this, this.keyDown);
                    Laya.stage.off(Laya.Event.KEY_UP, this, this.keyUp);
                }, e.prototype.MouseDown = function () {
                    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.MouseUP),
                        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.MouseUP), this.posX = Laya.stage.mouseX, this.posY = Laya.stage.mouseY;
                }, e.prototype.MouseMove = function () {
                    if (this.keyArr.length > 0) {
                        return;
                    }
                    if (0 == this.ismove) {
                        if (Math.abs(this.posX) > 0 || Math.abs(this.posY - Laya.stage.mouseY) > 0) {
                            if (Math.abs(this.posX - Laya.stage.mouseX) > 1 && Math.abs(this.posY - Laya.stage.mouseY) > 1)
                                if (this.ismove = !0, Math.abs(this.posX - Laya.stage.mouseX) > Math.abs(this.posY - Laya.stage.mouseY))
                                    if (this.posX - Laya.stage.mouseX > 0) {
                                        if (this.player.transform.localPositionZ != this.StartPos.z) {
                                            if (this.isup) {
                                                a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ);
                                                this.allindex_y = this.allindex_y + a, this.flag = 3, this.StopPos.z = this.StopPos.z - a;
                                            } else if (this.isdown) {
                                                a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z);
                                                this.allindex_y = this.allindex_y - a, this.flag = 3, this.StopPos.z = this.StopPos.z + a;
                                            }
                                        } else if (this.isleft || this.isv || this.isright) {
                                            if (this.isright && !this.isv) {
                                                var t = Math.floor(this.player.transform.localPositionX - this.StopPos.x), e = this.allindex_x - t;
                                                this.Models[this.index_y][e].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_x = e,
                                                    this.flag = 3, this.StopPos.x = this.StopPos.x + t);
                                            }
                                        } else {
                                            this.ish = !0, this.isleft = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                                this.EndPos = [], this.GetStopPos("向左"), Laya.timer.frameLoop(1, this, this.Move);
                                        }
                                    } else if (this.player.transform.localPositionZ != this.StartPos.z) {
                                        if (this.isup) {
                                            a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ);
                                            this.allindex_y = this.allindex_y + a, this.flag = 4, this.StopPos.z = this.StopPos.z - a;
                                        } else if (this.isdown) {
                                            a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z);
                                            this.allindex_y = this.allindex_y - a, this.flag = 4, this.StopPos.z = this.StopPos.z + a;
                                        }
                                    } else if (this.isright || this.isv || this.isleft) {
                                        if (this.isleft && !this.isv) {
                                            var t = Math.floor(this.StopPos.x - this.player.transform.localPositionX), e = this.allindex_x + t;
                                            this.Models[this.index_y][e].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_x = e,
                                                this.flag = 4, this.StopPos.x = this.StopPos.x - t);
                                        }
                                    } else this.ish = !0, this.isright = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                        this.EndPos = [], this.GetStopPos("向右"), Laya.timer.frameLoop(1, this, this.Move); else if (this.posY - Laya.stage.mouseY > 0) if (this.player.transform.localPositionX != this.StartPos.x) {
                                            if (this.isleft) {
                                                t = Math.floor(this.StopPos.x - this.player.transform.localPositionX);
                                                this.allindex_x = this.allindex_x + t, this.flag = 2, this.StopPos.x = this.StopPos.x - t;
                                            } else if (this.isright) {
                                                t = Math.floor(this.player.transform.localPositionX - this.StopPos.x);
                                                this.allindex_x = this.allindex_x - t, this.flag = 2, this.StopPos.x = this.StopPos.x + t;
                                            }
                                        } else if (this.isup || this.ish || this.isdown) {
                                            if (this.isdown && !this.ish) {
                                                var a = Math.floor(this.StopPos.z - this.player.transform.localPositionZ), i = this.allindex_y + a;
                                                this.Models[i][this.index_x].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_y = i,
                                                    this.flag = 2, this.StopPos.z = this.StopPos.z - a);
                                            }
                                        } else this.isv = !0, this.isup = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                            this.EndPos = [], this.GetStopPos("向上"), Laya.timer.frameLoop(1, this, this.Move); else if (this.player.transform.localPositionX != this.StartPos.x) {
                                                if (this.isleft) {
                                                    t = Math.floor(this.StopPos.x - this.player.transform.localPositionX);
                                                    this.allindex_x = this.allindex_x + t, this.flag = 1, this.StopPos.x = this.StopPos.x - t;
                                                } else if (this.isright) {
                                                    t = Math.floor(this.player.transform.localPositionX - this.StopPos.x);
                                                    this.allindex_x = this.allindex_x - t, this.flag = 1, this.StopPos.x = this.StopPos.x + t;
                                                }
                                            } else if (this.isdown || this.ish || this.isup) {
                                                if (this.isup && !this.ish) {
                                                    var a = Math.floor(this.player.transform.localPositionZ - this.StopPos.z), i = this.allindex_y - a;
                                                    this.Models[i][this.index_x].meshRenderer.sharedMaterial == n.default.instance.endMat && (this.allindex_y = i,
                                                        this.flag = 1, this.StopPos.z = this.StopPos.z + a);
                                                }
                                            } else this.isv = !0, this.isdown = !0, this.startindex_x = this.index_x, this.startindex_y = this.index_y,
                                                this.EndPos = [], this.GetStopPos("向下"), Laya.timer.frameLoop(1, this, this.Move);
                        } else this.ismove = !1;
                    }
                    this.posX = Laya.stage.mouseX, this.posY = Laya.stage.mouseY;
                }, e.prototype.MouseUP = function () {
                    Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.MouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.MouseUP),
                        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.MouseUP), this.ismove = !1;
                }, e.prototype.GetStopPos = function (t) {
                    console.log(t);
                    switch (t) {
                        case "向左":
                            for (e = this.index_x; e >= 0; e--) if (1 == i.default.Instance().Twomaps[this.index_y][e]) {
                                this.StopPos.x = this.StartPos.x + (this.index_x - (e + 1)), this.allindex_x = e + 1,
                                    this.ismove = !1;
                                break;
                            }
                            break;

                        case "向右":
                            for (e = this.index_x; e < i.default.Instance().width; e++) if (1 == i.default.Instance().Twomaps[this.index_y][e]) {
                                this.StopPos.x = this.StartPos.x - (e - 1 - this.index_x), this.allindex_x = e - 1,
                                    this.ismove = !1;
                                break;
                            }
                            break;

                        case "向上":
                            for (e = this.index_y; e >= 0; e--) if (1 == i.default.Instance().Twomaps[e][this.index_x]) {
                                this.StopPos.z = this.StartPos.z + (this.index_y - (e + 1)), this.allindex_y = e + 1,
                                    this.ismove = !1;
                                break;
                            }
                            break;

                        case "向下":
                            for (var e = this.index_y; e < i.default.Instance().height; e++) if (1 == i.default.Instance().Twomaps[e][this.index_x]) {
                                this.StopPos.z = this.StartPos.z - (e - 1 - this.index_y), this.allindex_y = e - 1,
                                    this.ismove = !1;
                                break;
                            }
                    }
                }, e.prototype.Move = function () {
                    if (1 == this.ish) {
                        if (this.isright) {
                            if (this.player.transform.translate(new Laya.Vector3(-this.speed, 0, 0)), this.player.transform.localPositionX <= this.StopPos.x && (this.ismove = !1,
                                Laya.timer.clear(this, this.Move), this.StartPos.x = this.StopPos.x, this.player.transform.localPositionX = this.StopPos.x,
                                this.index_x = this.allindex_x, this.isright = !1, this.ish = !1, 2 == this.flag ? (this.isv = !0,
                                    this.flag = 0, this.isup = !0, this.GetStopPos("向上"), Laya.timer.frameLoop(1, this, this.Move)) : 1 == this.flag ? (this.isv = !0,
                                        this.flag = 0, this.isdown = !0, this.GetStopPos("向下"), Laya.timer.frameLoop(1, this, this.Move)) : this.flag,
                                "box001" == this.Models[this.index_y][this.index_x + 1].name && 0 != this.ChangeModel.length)) {
                                for (t = 0; t < this.ChangeModel.length; t++) this.allefferfloors.push(this.ChangeModel[t]);
                                this.ChangeModel = [], this.check(this.index_x, this.index_y, "right");
                            }
                        } else if (this.isleft && (this.player.transform.translate(new Laya.Vector3(this.speed, 0, 0)),
                            this.player.transform.localPositionX >= this.StopPos.x && (this.ismove = !1, Laya.timer.clear(this, this.Move),
                                this.StartPos.x = this.StopPos.x, this.player.transform.localPositionX = this.StopPos.x,
                                this.index_x = this.allindex_x, this.isleft = !1, this.ish = !1, 2 == this.flag ? (this.isv = !0,
                                    this.flag = 0, this.isup = !0, this.GetStopPos("向上"), Laya.timer.frameLoop(1, this, this.Move)) : 1 == this.flag && (this.isv = !0,
                                        this.flag = 0, this.isdown = !0, this.GetStopPos("向下"), Laya.timer.frameLoop(1, this, this.Move)),
                                "box001" == this.Models[this.index_y][this.index_x - 1].name && 0 != this.ChangeModel.length))) {
                            for (t = 0; t < this.ChangeModel.length; t++) this.allefferfloors.push(this.ChangeModel[t]);
                            this.ChangeModel = [], this.check(this.index_x, this.index_y, "left");
                        }
                    } else if (1 == this.isv) if (this.isdown) {
                        if (this.player.transform.translate(new Laya.Vector3(0, 0, -this.speed)), this.player.transform.localPositionZ <= this.StopPos.z && (this.ismove = !1,
                            Laya.timer.clear(this, this.Move), this.StartPos.z = this.StopPos.z, this.player.transform.localPositionZ = this.StopPos.z,
                            this.index_y = this.allindex_y, this.isdown = !1, this.isv = !1, 3 == this.flag ? (this.ish = !0,
                                this.flag = 0, this.isleft = !0, this.GetStopPos("向左"), Laya.timer.frameLoop(1, this, this.Move)) : 4 == this.flag ? (this.ish = !0,
                                    this.flag = 0, this.isright = !0, this.GetStopPos("向右"), Laya.timer.frameLoop(1, this, this.Move)) : this.flag,
                            "box001" == this.Models[this.index_y + 1][this.index_x].name && 0 != this.ChangeModel.length)) {
                            for (t = 0; t < this.ChangeModel.length; t++) this.allefferfloors.push(this.ChangeModel[t]);
                            this.ChangeModel = [], this.check(this.index_x, this.index_y, "down");
                        }
                    } else if (this.isup && (this.player.transform.translate(new Laya.Vector3(0, 0, this.speed)),
                        this.player.transform.localPositionZ >= this.StopPos.z && (this.ismove = !1, Laya.timer.clear(this, this.Move),
                            this.StartPos.z = this.StopPos.z, this.player.transform.localPositionZ = this.StopPos.z,
                            this.index_y = this.allindex_y, this.isup = !1, this.isv = !1, 3 == this.flag ? (this.ish = !0,
                                this.flag = 0, this.isleft = !0, this.GetStopPos("向左"), Laya.timer.frameLoop(1, this, this.Move)) : 4 == this.flag && (this.ish = !0,
                                    this.flag = 0, this.isright = !0, this.GetStopPos("向右"), Laya.timer.frameLoop(1, this, this.Move)),
                            "box001" == this.Models[this.index_y - 1][this.index_x].name && 0 != this.ChangeModel.length))) {
                        for (var t = 0; t < this.ChangeModel.length; t++) this.allefferfloors.push(this.ChangeModel[t]);
                        this.ChangeModel = [], this.check(this.index_x, this.index_y, "up");
                    }
                }, e.prototype.onTriggerEnter = function (t) {
                    if (s.default.instance.SkinUsePanel.visible) {
                        return
                    }
                    if ("box002" == t.owner.name) {
                        if (t.owner.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                            this.GetendPos(t.owner),
                                t.owner.meshRenderer.sharedMaterial = n.default.instance.end2Mat, t.owner.transform.localPositionY = -.3,
                                this.ChangeModel.push(t.owner);
                        } else if (t.owner.meshRenderer.sharedMaterial == n.default.instance.endMat) {
                            if (this.startPosition = t.owner.transform.position, 0 != this.ChangeModel.length) {
                                for (e = 0; e < this.ChangeModel.length; e++) this.ColorValue += 1, this.allefferfloors.push(this.ChangeModel[e]);
                                if (this.ChangeModel = [], this.getIndex(t.owner.transform.position), 0 != this.EndPos.length) {
                                    this.isloop = !1;
                                    for (var e = 0; e < this.EndPos.length; e++) this.ischeckbody(this.EndPos[e]);
                                }
                                this.checkbody(this.body_x, this.body_y), this.changeAction();
                            }
                        } else {
                            t.owner.meshRenderer.sharedMaterial == n.default.instance.end2Mat && 0 == this.isdie && (this.isdie = !0,
                                r.default.SetVibration(!1, null), Laya.timer.clear(this, this.Move), 0 == l.default.Firstgame[3] ? s.default.instance.First3()
                                    : s.default.instance.GameLose());
                        }
                    } else {
                        "enemy" == t.owner.name && 0 == this.isdie && (this.isdie = !0,
                            r.default.SetVibration(!1, null), this.GameLose());
                    }
                }, e.prototype.GameStop = function () {
                    Laya.timer.clear(this, this.Move);
                }, e.prototype.GameLose = function () {
                    Laya.timer.clear(this, this.Move);
                    for (var t = 0; t < i.default.Instance().obstacles.length; t++) i.default.Instance().obstacles[t].getComponent(o.default).tween && i.default.Instance().obstacles[t].getComponent(o.default).tween.pause();
                    s.default.instance.GameLose();
                }, e.prototype.GameInit = function () {
                    this.allfloorover = !1, this.ischeck = !1, this.ChangeModel = [], Laya.timer.clear(this, this.Move),
                        this.allefferfloors = [], this.OffMouseCall(), this.isdie = !1, this.ismove = !1,
                        this.isv = !1, this.ish = !1, this.isleft = !1, this.isright = !1, this.isdown = !1,
                        this.isup = !1, this.isstop = !1, this.isone = !1;
                }, e.prototype.check = function (t, e, a) {
                    if (this.isstop) this.isstop = !1; else {
                        this.checkpoi = [], this.checkpoipos = [];
                        for (p = -1; p <= 1; p++) for (var i = -1; i <= 1; i++) if (1 == Math.abs(p + i) && this.isInGrid(e + p, t + i)) {
                            var s = this.Models[e + p][t + i];
                            if ("box002" == s.name && s.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                                (l = []).push(t + i), l.push(e + p), this.checkpoipos.push(l), this.checkpoi.push(s);
                            } else if ("box001" == s.name && !this.isbianwall(e + p, t + i)) {
                                var o = !0;
                                switch (this.ischeck = !1, a) {
                                    case "up":
                                        o = -1 != p, this.isbianwall(e - 1, t) ? this.ischeck = !0 : this.ischeck = !1;
                                        break;

                                    case "down":
                                        o = 1 != p, this.isbianwall(e + 1, t) ? this.ischeck = !0 : this.ischeck = !1;
                                        break;

                                    case "left":
                                        o = -1 != i, this.isbianwall(e, t - 1) ? this.ischeck = !0 : this.ischeck = !1;
                                        break;

                                    case "right":
                                        o = 1 != i, this.isbianwall(e, t + 1) ? this.ischeck = !0 : this.ischeck = !1;
                                }
                                if (o) {
                                    var l = [];
                                    l.push(t + i), l.push(e + p), this.checkpoipos.push(l), this.checkpoi.push(s);
                                }
                            }
                        }
                        var r = !1;
                        switch (a) {
                            case "up":
                                r = !!this.isbianwall(e - 1, t);
                                break;

                            case "down":
                                r = !!this.isbianwall(e + 1, t);
                                break;

                            case "left":
                                r = !!this.isbianwall(e, t - 1);
                                break;

                            case "right":
                                r = !!this.isbianwall(e, t + 1);
                        }
                        if (r && (this.ischeck = !0), this.checkpoi.length <= 0 || this.checkpoi.length >= 3) this.changeAction(); else if (1 != this.checkpoi.length) {
                            for (var h = [], d = [], c = 0; c < this.checkpoi.length; c++) {
                                h.push([]), d.push([]), this.checkList(this.checkpoi[c], h[c], this.checkpoipos[c], d[c]);
                            }
                            h == [] && this.changeAction();
                            for (var u = h[0].length, f = h[1].length, p = 0; p < h[0].length; p++) "box001" == h[0][p].name && (u -= 1);
                            for (p = 0; p < h[1].length; p++) "box001" == h[1][p].name && (f -= 1);
                            if (u == f && 1 == this.issame(d)) return void this.changeAction();
                            0 == h[0].length || 0 == h[1].length ? 0 == h[0].length && 0 != h[1].length ? this.effer(h[1]) : 0 == h[1].length && 0 != h[0].length && this.effer(h[0]) : (this.isend = !0,
                                u > f ? this.effer(h[1]) : this.effer(h[0]));
                        } else {
                            var g = !1;
                            switch (a) {
                                case "up":
                                    g = !this.isbianwall(e - 1, t);
                                    break;

                                case "down":
                                    g = !this.isbianwall(e + 1, t);
                                    break;

                                case "left":
                                    g = !this.isbianwall(e, t - 1);
                                    break;

                                case "right":
                                    g = !this.isbianwall(e, t + 1);
                            }
                            if (g) {
                                if (0 != this.EndPos.length) {
                                    this.isloop = !1;
                                    for (p = 0; p < this.EndPos.length; p++) this.ischeckbody(this.EndPos[p]);
                                    this.EndPos = [];
                                }
                            } else if (0 != this.EndPos.length) {
                                this.isloop = !1;
                                for (p = 0; p < this.EndPos.length; p++) this.ischeckbody(this.EndPos[p]);
                                this.EndPos = [];
                            }
                            if (0 != this.EndPos.length) {
                                this.isloop = !1;
                                for (p = 0; p < this.EndPos.length; p++) this.ischeckbody(this.EndPos[p]);
                                this.EndPos = [];
                            }
                            this.changeAction();
                        }
                    }
                }, e.prototype.issame = function (t) {
                    var e = [], a = [];
                    e = t[0], a = t[1];
                    for (var i in e) for (var n in a) if (e[i][0] == a[n][0] && e[i][1] == a[n][1]) return !0;
                    return !1;
                }, e.prototype.checkbody = function (t, e) {
                    this.checkpoi = [], this.checkpoipos = [];
                    for (var a = -1; a <= 1; a++) for (var i = -1; i <= 1; i++) if (1 != Math.abs(a + i) && this.isInGrid(e + a, t + i)) {
                        var s = this.Models[e + a][t + i];
                        if ("box002" == s.name && s.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                            var o = [];
                            o.push(t + i), o.push(e + a), this.checkpoipos.push(o), this.checkpoi.push(s);
                        }
                    }
                    var l = [], r = [];
                    this.endnum = [];
                    for (var h = 0; h < this.checkpoi.length; h++) {
                        l.push([]), r.push([]), this.checkBodyList(this.checkpoi[h], l[h], this.checkpoipos[h], r[h], h);
                    }
                    if (0 != this.endnum.length) for (var d = 0; d < this.endnum.length; d++) l[this.endnum[d]] = [];
                    l == [] && this.changeAction(), 1 == l.length && 0 == l[0].length && this.changeAction();
                    for (var c = 0; c < l.length; c++) 0 != l[c].length && (this.effer(l[c]), this.isloop = !0);
                }, e.prototype.isInGrid = function (t, e) {
                    return t >= 0 && t <= i.default.Instance().height - 1 && e >= 0 && e <= i.default.Instance().width - 1;
                }, e.prototype.checkList = function (t, e, a, i) {
                    if (this.isPush(e, t, a, i)) for (var s = -1; s <= 1; s++) for (var o = -1; o <= 1; o++) if (1 == Math.abs(s + o) && this.isInGrid(a[1] + s, a[0] + o)) {
                        var l = this.Models[a[1] + s][a[0] + o];
                        if ("box002" == l.name && l.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                            (r = []).push(a[0] + o), r.push(a[1] + s), this.checkList(l, e, r, i);
                        } else if ("box001" == l.name && !this.isbianwall(a[1] + s, a[0] + o) && 1 == this.ischeck) {
                            var r = [];
                            r.push(a[0] + o), r.push(a[1] + s), this.checkList(l, e, r, i);
                        }
                    }
                }, e.prototype.checkBodyList = function (t, e, a, i, s) {
                    if (this.isPush(e, t, a, i)) for (var o = -1; o <= 1; o++) for (var l = -1; l <= 1; l++) if (1 == Math.abs(o + l) && this.isInGrid(a[1] + o, a[0] + l)) {
                        var r = this.Models[a[1] + o][a[0] + l];
                        if ("box001" == r.name) {
                            if (1 == this.isedgewall(a[1] + o, a[0] + l, s)) return;
                        } else if ("box002" == r.name && r.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                            var h = [];
                            h.push(a[0] + l), h.push(a[1] + o), this.checkBodyList(r, e, h, i, s);
                        }
                    }
                }, e.prototype.effer = function (t) {
                    if (0 != t.length) for (var e = 0; e < t.length; e++) "box002" == t[e].name && this.allefferfloors.push(t[e]);
                    r.default.SetVibration(!0, null), this.changeAction();
                }, e.prototype.changeAction = function () {
                    for (var t = this, e = function (e) {
                        "box002" == a.allefferfloors[e].name && a.allefferfloors[e].meshRenderer.sharedMaterial != n.default.instance.endMat && (a.allefferfloors[e].meshRenderer.sharedMaterial = n.default.instance.end1Mat,
                            Laya.Tween.to(a.allefferfloors[e].transform, {
                                localPositionY: .3
                            }, 50, null, Laya.Handler.create(a, function () {
                                if (e == t.allefferfloors.length - 1 && 0 == n.default.instance.isskins) Laya.Tween.to(n.default.instance.end1Mat, {
                                    _AlbedoIntensity: 2
                                }, 200, null, Laya.Handler.create(t, function () {
                                    Laya.Tween.to(n.default.instance.end1Mat, {
                                        _AlbedoIntensity: 1
                                    }, 100, null, Laya.Handler.create(t, function () {
                                        for (var e = 0; e < t.allefferfloors.length; e++) "box002" == t.allefferfloors[e].name && t.allefferfloors[e].meshRenderer.sharedMaterial == n.default.instance.end1Mat && (t.allefferfloors[e].meshRenderer.sharedMaterial = n.default.instance.endMat);
                                        if (1 == n.default.instance.isskins && i.default.Instance().PictureDisplay(), t.allefferfloors = [],
                                            0 != t.endposition.length) {
                                            t.isloop = !1;
                                            for (var a = 0; a < t.endposition.length; a++) t.ischeckbody(t.endposition[a]);
                                            t.endposition = [];
                                        }
                                        t.isend, t.pronum(), t.Over();
                                    }));
                                })); else if (e == t.allefferfloors.length - 1 && 1 == n.default.instance.isskins) {
                                    for (var a = 0; a < t.allefferfloors.length; a++) "box002" == t.allefferfloors[a].name && t.allefferfloors[a].meshRenderer.sharedMaterial == n.default.instance.end1Mat && (t.allefferfloors[a].meshRenderer.sharedMaterial = n.default.instance.endMat);
                                    i.default.Instance().PictureDisplay(), t.allefferfloors = [], t.pronum(), t.Over();
                                }
                            })));
                    }, a = this, s = 0; s < this.allefferfloors.length; s++) e(s);
                }, e.prototype.isPush = function (t, e, a, i) {
                    if (t.length <= 0) t.push(e), i.push(a); else for (var n in i) {
                        if (i[n][0] == a[0] && i[n][1] == a[1]) return !1;
                        Number(n) == Number(i.length - 1) && (t.push(e), i.push(a));
                    }
                    return !0;
                }, e.prototype.getIndex = function (t) {
                    for (var e = 0; e < i.default.Instance().height; e++) for (var a = 0; a < i.default.Instance().width; a++) if (this.Models[e][a].transform.position == t) {
                        this.body_y = e, this.body_x = a;
                        break;
                    }
                }, e.prototype.GetendPos = function (t) {
                    for (var e = 0; e < i.default.Instance().height; e++) for (var a = 0; a < i.default.Instance().width; a++) if (this.Models[e][a].transform.position == t.transform.position && "box002" == this.Models[e][a].name) {
                        var n = [];
                        n.push(e), n.push(a), this.EndPos.push(n);
                        break;
                    }
                    this.endposition = this.EndPos;
                }, e.prototype.ischeckbody = function (t) {
                    for (var e = t[0], a = t[1], i = [], s = [], o = -1; o <= 1; o++) for (var l = -1; l <= 1; l++) if (this.isInGrid(e + o, a + l)) {
                        var r = this.Models[e + o][a + l];
                        if ("box002" == r.name && r.meshRenderer.sharedMaterial == n.default.instance.startMat) {
                            i.push(r);
                            if (s.push([]), i.length > 3) return void this.checkbody(a, e);
                        }
                    }
                    this.changeAction();
                }, e.prototype.isedgewall = function (t, e, a) {
                    return (0 == t || t == i.default.Instance().height - 1 || 0 == e || e == i.default.Instance().width - 1) && (this.endnum.push(a),
                        !0);
                }, e.prototype.isbianwall = function (t, e) {
                    return 0 == t || t == i.default.Instance().height - 1 || 0 == e || e == i.default.Instance().width - 1;
                }, e.prototype.IsBoxOrTable = function () {
                    0 == s.default.instance.isbox ? (d.default.instance.str = "win", d.default.instance.showTurnPanelUI(!0),
                        s.default.instance.isbox = !0) : l.default.isopen ? (c.default.instance.str = "win",
                            c.default.instance.showGifBagUI(!0), s.default.instance.isbox = !1) : s.default.instance.GameWin();
                }, e.prototype.Over = function () {
                    for (var t = this, e = !0, a = 0; a < i.default.Instance().height; a++) for (var o = 0; o < i.default.Instance().width; o++) "box002" == i.default.Instance().Twomodels[a][o].name && i.default.Instance().Twomodels[a][o].meshRenderer.sharedMaterial == n.default.instance.startMat && (e = !1);
                    1 == e && 0 == this.isone && (i.default.Instance().iscan = !0, 1 == s.default.instance.HandBg.visible && h.default.instance.hideHand(),
                        this.isone = !0, this.OffMouseCall(), i.default.Instance().OverFloorActions(function () {
                            t.OffMouseCall(), Laya.timer.clear(t, t.Move), t.tween1 = new Laya.Tween(), l.default.littlelevel >= 3 ? (i.default.Instance().lihua.transform.localPositionZ = i.default.Instance().gameCamera.transform.localPositionZ,
                                i.default.Instance().lihua.active = !0, i.default.Instance().lihua.particleSystem.play(),
                                s.default.instance.drog.visible = !1, Laya.timer.once(500, t, function () {

                                    s.default.instance.GameWin();

                                })) : t.tween1.to(t.player.transform, {
                                    localPositionX: 0
                                }, 30 * Math.abs(t.player.transform.localPositionX), null, Laya.Handler.create(t, function () {
                                    s.default.instance.drog.visible = !1, t.tween1.clear(), t.tween2 = new Laya.Tween(),
                                        t.tween2.to(i.default.Instance().gameCamera.transform, {
                                            localPositionZ: i.default.Instance().gameCamera.transform.localPositionZ + i.default.Instance().height
                                        }, 30 * i.default.Instance().height, null), t.tween1.to(t.player.transform, {
                                            localPositionZ: t.player.transform.localPositionZ + i.default.Instance().height
                                        }, 30 * i.default.Instance().height, null, Laya.Handler.create(t, function () {
                                            l.default.littlelevel += 1, i.default.Instance().MapInit(), i.default.Instance().onload();
                                        }));
                                }));
                        }));
                }, e.prototype.pronum = function () {
                    for (var t = 0, e = 0; e < i.default.Instance().height; e++) for (var a = 0; a < i.default.Instance().width; a++) "box002" == i.default.Instance().Twomodels[e][a].name && i.default.Instance().Twomodels[e][a].meshRenderer.sharedMaterial == n.default.instance.endMat && (t += 1);
                    s.default.instance.GamePro(t), 1 == i.default.Instance().isstatic && this.JudgeEnemy();
                }, e.prototype.JudgeEnemy = function () {
                    for (var t = 0, e = 0, a = [], s = 0; s < i.default.Instance().Obmodels.length; s++) for (var o = 0; o < i.default.Instance().Obmodels[s].length; o++) null != i.default.Instance().Obmodels[s][o] && (t += 1),
                        "box002" == i.default.Instance().Twomodels[s][o].name && i.default.Instance().Twomodels[s][o].meshRenderer.sharedMaterial == n.default.instance.endMat && (e += 1);
                    if (t == i.default.Instance().color_num - e) {
                        this.allfloorover = !0;
                        for (var l = 0; l < i.default.Instance().height; l++) for (var r = 0; r < i.default.Instance().width; r++) "box002" == i.default.Instance().Twomodels[l][r].name && i.default.Instance().Twomodels[l][r].meshRenderer.sharedMaterial != n.default.instance.endMat && a.push(i.default.Instance().Twomodels[l][r]);
                        0 == this.isdie && this.effer(a);
                    }
                }, e.prototype.PlayerFuhuo = function () {
                    var t = this;
                    if (0 != this.EndPos.length) {
                        var e = this.EndPos[0][0], a = this.EndPos[0][1], s = this.Models[e][a].transform.localPositionX, o = this.Models[e][a].transform.localPositionZ, l = [];
                        l.push(this.Models[e][a]), this.ChangeModel = [];
                        for (r = 1; r < this.EndPos.length; r++) this.Models[this.EndPos[r][0]][this.EndPos[r][1]].meshRenderer.sharedMaterial = n.default.instance.startMat,
                            this.Models[this.EndPos[r][0]][this.EndPos[r][1]].transform.localPositionY = -.5;
                        this.EndPos = [], this.allefferfloors = [], this.endposition = [], this.player.transform.localPositionX = s,
                            this.player.transform.localPositionZ = o, this.StartPos = this.player.transform.position,
                            this.allindex_x = a, this.allindex_y = e, this.index_x = a, this.index_y = e, this.effer(l),
                            this.OnMouseCall();
                    } else {
                        this.player.transform.localPositionX = this.startPosition.x, this.player.transform.localPositionZ = this.startPosition.z;
                        for (var r = 0; r < i.default.Instance().height - 1; r++) for (var h = 0; h < i.default.Instance().width - 1; h++) if (this.Models[r][h].transform.localPositionX == this.startPosition.x && this.Models[r][h].transform.localPositionZ == this.startPosition.z) {
                            this.allindex_x = h, this.allindex_y = r, this.index_x = h, this.index_y = r;
                            break;
                        }
                        this.StartPos = this.player.transform.position;
                    }
                    this.ismove = !1, this.isv = !1, this.ish = !1, this.isleft = !1, this.isright = !1,
                        this.isdown = !1, this.isup = !1, this.isstop = !1, this.ischeck = !1, this.posX = 0,
                        this.posY = 0, Laya.timer.once(500, this, function () {
                            t.isdie = !1;
                        });
                }, e.prototype.Next = function () {
                    for (var t = [], e = 0; e < i.default.Instance().height - 1; e++)
                        for (var a = 0; a < i.default.Instance().width - 1; a++)
                            "box002" == this.Models[e][a].name && this.Models[e][a].meshRenderer.sharedMaterial != n.default.instance.endMat && t.push(this.Models[e][a]);
                    this.effer(t), null != l.default.taskdata[3] && (l.default.taskdata[3] = l.default.taskdata[3] + 1,
                        l.default.SaveData());
                }, e.prototype.handTween1 = function () {
                    var t = this;
                    this.tween_hand && this.tween_hand.clear(), this.tween_hand.to(s.default.instance.handnext, {
                        top: s.default.instance.handnext.top + 80
                    }, 700, null, Laya.Handler.create(this, function () {
                        t.handTween2();
                    }));
                }, e.prototype.handTween2 = function () {
                    var t = this;
                    this.tween_hand && this.tween_hand.clear(), this.tween_hand.to(s.default.instance.handnext, {
                        top: s.default.instance.handnext.top - 80
                    }, 700, null, Laya.Handler.create(this, function () {
                        t.handTween1();
                    }));
                }, e;
            }(Laya.Script3D);
        a.default = f;
    }, {
        "../DataManager": 11,
        "../UIControl/GiftBagPanelCtrl": 27,
        "../UIControl/TurnTableCtr": 31,
        "../UIScript/GameUI": 35,
        "../UIScript/StartManage": 39,
        "../UIScript/bkPanelCtr": 40,
        "../WeChatManager": 43,
        "./MaterialCtrl": 5,
        "./ObstacleManage": 8,
        "./SceneControl": 10
    }],
    10: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./ModelPool"), n = t("./PlayerCtrl"), s = t("./MaterialCtrl"), o = t("./ObstacleCtrl"), l = t("../DataManager"), r = t("../UIScript/GameUI"), h = t("./ObstacleManage"), d = t("./DiamondCtrl"), c = t("../UIControl/FlyingCoin"), u = t("./EndFloorsCtrl"), f = t("../WeChatManager"), p = t("../UIControl/SkinUseCtrl"), g = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.Twomaps = [], e.obstacles = [], e.Twomodels = [], e.Obmodels = [], e.isload3D = !1,
                    e.RecoveryFloor = [], e.RecoveryWall = [], e.RecoveryEnemy = [], e.RecovryDiamond = [],
                    e.RecoveryEndfloors1 = [], e.endfloors1 = [], e.RecoveryEndfloors2 = [], e.endfloors2 = [],
                    e.width = 0, e.height = 0, e.width_adopt = 0, e.height_adopt = 0, e.color_num = 0,
                    e.mapheight = 0, e.iscan = !1, e.heigestZ = 0, e.scaleheight = 3, e.carmeraZ = -2,
                    e.isstatic = !1, e.walls = [], e.isskinhuxi = !1, e.useskin = 0, e.isskin = !1,
                    e.map = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    e;
            }
            return __extends(e, t), e.Instance = function () {
                return null == this.instance && (this.instance = new e()), this.instance;
            }, e.prototype.loadJson = function () { }, e.prototype.loadScene = function () {
                Laya.loader.create("LayaScene_ColorFill3D/Conventional/ColorFill3D.ls", Laya.Handler.create(this, this.compelete));
            }, e.prototype.compelete = function () {
                this.scene3d = Laya.loader.getRes("LayaScene_ColorFill3D/Conventional/ColorFill3D.ls"),
                    Laya.stage.getChildByName("root").addChild(this.scene3d), this.player = this.scene3d.getChildByName("player"),
                    this.floorModel = this.scene3d.getChildByName("box002"), this.wallModel = this.scene3d.getChildByName("box001"),
                    this.enemyModel = this.scene3d.getChildByName("enemy"), this.gameCamera = this.scene3d.getChildByName("Main Camera"),
                    this.disappear = this.scene3d.getChildByName("disappear"), this.diamond = this.scene3d.getChildByName("diamond"),
                    this.blueWall = this.scene3d.getChildByName("box003"), this.endfloors = this.scene3d.getChildByName("box004"),
                    this.three = this.scene3d.getChildByName("3"), this.four = this.scene3d.getChildByName("4"),
                    this.five = this.scene3d.getChildByName("5"), this.six = this.scene3d.getChildByName("6"),
                    this.seven = this.scene3d.getChildByName("7"), this.eight = this.scene3d.getChildByName("8"),
                    this.nine = this.scene3d.getChildByName("9"), this.ten = this.scene3d.getChildByName("10"),
                    this.eleven = this.scene3d.getChildByName("11"), this.Twelve = this.scene3d.getChildByName("12"),
                    this.thirteen = this.scene3d.getChildByName("13"), this.fourteen = this.scene3d.getChildByName("14"),
                    this.fifteen = this.scene3d.getChildByName("15"), this.plane = this.scene3d.getChildByName("light"),
                    this.lihua = this.scene3d.getChildByName("lihua_P"), this.lihua.active = !1, this.plane.transform.position = new Laya.Vector3(30, 1.5, -30),
                    this.obstacles.push(this.four), this.obstacles.push(this.five), this.obstacles.push(this.six),
                    this.obstacles.push(this.seven), this.obstacles.push(this.eight), this.obstacles.push(this.nine),
                    this.obstacles.push(this.ten), this.obstacles.push(this.eleven), this.obstacles.push(this.Twelve),
                    this.obstacles.push(this.thirteen), this.obstacles.push(this.fourteen), this.obstacles.push(this.fifteen),
                    this.player.transform.localPositionY = 1, this.player.addComponent(n.default), this.player.removeSelf(),
                    this.floorModel.removeSelf(), this.wallModel.removeSelf(), this.enemyModel.removeSelf(),
                    this.disappear.removeSelf(), this.diamond.removeSelf(), this.endfloors.removeSelf(),
                    i.default.insance.GetModel();
                for (var t = 0; t < this.obstacles.length; t++) this.obstacles[t].addComponent(h.default);
                r.default.instance.isgame = !0, this.gameCamera.fieldOfView = 130, console.log("3d场景加载完毕");
            }, e.prototype.JsonParse = function () {
                var t = this;
                Laya.loader.load("data/data.json", Laya.Handler.create(this, function () {
                    t.json = Laya.Loader.getRes("data/data.json"), t.isload3D = !0;
                }), null, Laya.Loader.JSON);
            }, e.prototype.onload = function () {
                var t = this;
                r.default.instance.iswin = !1, 1 == l.default.littlelevel ? (r.default.instance.pro1.width = .01,
                    r.default.instance.pro2.width = .01, r.default.instance.pro3.width = .01) : 2 == l.default.littlelevel ? (r.default.instance.pro1.width = 87,
                        r.default.instance.pro2.width = .01, r.default.instance.pro3.width = .01) : 3 == l.default.littlelevel && (r.default.instance.pro1.width = 87,
                            r.default.instance.pro2.width = 87, r.default.instance.pro3.width = .01), this.map = this.json.datas[l.default.level - 1].content[l.default.littlelevel - 1].map,
                    this.width = this.json.datas[l.default.level - 1].content[l.default.littlelevel - 1].width,
                    this.height = this.json.datas[l.default.level - 1].content[l.default.littlelevel - 1].height,
                    this.width_adopt = this.width / 2 - .5;
                var a = 0;
                if (1 == l.default.littlelevel) {
                    a = this.carmeraZ, this.gameCamera.transform.localPositionZ = this.carmeraZ, this.height_adopt = this.height / 2,
                        this.mapheight = 0;
                    for (o = 0; o < this.obstacles.length; o++) this.obstacles[o].transform.localPositionZ = 0;
                } else {
                    var i = this.getHeightnum();
                    2 == l.default.littlelevel ? (this.height_adopt = this.height / 2 + i * this.scaleheight,
                        a = i * this.scaleheight + this.carmeraZ, this.mapheight = i * this.scaleheight) : 3 == l.default.littlelevel && (this.height_adopt = this.height / 2 + i * this.scaleheight + this.mapheight,
                            a = i * this.scaleheight + this.carmeraZ + this.mapheight);
                }
                for (o = 0; o < this.obstacles.length; o++) this.obstacles[o].getComponent(h.default).init();
                this.color_num = 0;
                for (o = 0; o < this.map.length; o++) 1 != this.map[o] && (this.color_num += 1);
                if (Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2 ? Laya.Tween.to(this.gameCamera, {
                    fieldOfView: 3 * this.width + 32
                }, 1e3, Laya.Ease.circOut) : Laya.Tween.to(this.gameCamera, {
                    fieldOfView: 3 * this.width + 30
                }, 1e3, Laya.Ease.circOut), r.default.instance.nowlevel.text = "" + l.default.level,
                    r.default.instance.nextlevel.text = "" + (l.default.level + 1), s.default.instance.skinInit(),
                    1 == l.default.littlelevel) {
                    this.iscan = !0, this.creatmap();
                    for (var o = 0; o < this.walls.length; o++) this.walls[o].active = !0;
                    this.MaskWall(), r.default.instance.drog.visible = !0, this.player.transform.position = this.startPos,
                        n.default.instance.startPosition = this.player.transform.position,
                        1 == this.isskin ? p.default.instance.UseInit(function () {
                            t.gameStart(), n.default.instance.MapStart();
                        }) : 0 == this.isskin && (this.gameStart(), n.default.instance.MapStart());
                } else if (1 != l.default.littlelevel) {
                    this.tween1 = new Laya.Tween(), this.tween2 = new Laya.Tween(), this.creatmap();
                    var d = 50 * Math.abs(this.startPos.z - this.player.transform.localPositionZ);
                    Laya.timer.once(.2 * d, this, function () {
                        for (var e = 0; e < t.walls.length; e++) t.walls[e].active = !0;
                        t.MaskWall();
                    }), this.tween2.to(this.player.transform, {
                        localPositionZ: this.startPos.z
                    }, d, Laya.Ease.circOut), this.tween1.to(this.gameCamera.transform, {
                        localPositionZ: a
                    }, d, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        r.default.instance.drog.visible = !0, n.default.instance.OnMouseCall(), n.default.instance.MapStart(),
                            e.Instance().endfloorRecover(), n.default.instance.startPosition = t.player.transform.position;
                    }));
                }
            }, e.prototype.gameStart = function () {
                1 == l.default.Firstgame[0] ? n.default.instance.OnMouseCall() : (r.default.instance.FirstGame.visible = !0,
                    r.default.instance.Firstone.visible = !0, this.GethandPos(this.player.transform.position)),
                    r.default.instance.Firstone.getChildByName("spr_move").visible = Laya.Browser.onPC;
                f.default.HideBanner();
            }, e.prototype.creatmap = function () {
                this.walls = [];
                for (w = 0; w < this.height; w++) {
                    var t = null, a = [];
                    n.default.instance.Models.push(a), this.Twomaps.push([]), this.Twomodels.push(a);
                    for (var s = 0; s < this.width; s++) this.Twomaps[w].push(this.map[w * this.width + s]),
                        this.Twomodels[w].push(t), n.default.instance.Models[w].push(t);
                }
                for (w = 0; w < this.height; w++) {
                    t = null;
                    this.Obmodels.push([]);
                    for (x = 0; x < this.width; x++) this.Obmodels[w].push(t);
                }
                for (m = 0; m < this.height; m++) for (var r = 0; r < this.width; r++) if (0 == this.Twomaps[m][r] || 2 == this.Twomaps[m][r]) {
                    if ((f = i.default.insance.floorCreat()).transform.localPositionX -= r, f.transform.localPositionZ -= m,
                        this.RecoveryFloor.push(f), this.Twomodels[m][r] = f, 2 == this.Twomaps[m][r]) {
                        var c = i.default.insance.diamondCreat();
                        c.transform.localPositionX -= r, c.transform.localPositionZ -= m, c.getComponent(d.default).index_x = r,
                            c.getComponent(d.default).index_y = m, this.RecovryDiamond.push(c);
                    }
                } else if (3 == this.Twomaps[m][r] || 4 == this.Twomaps[m][r] || 5 == this.Twomaps[m][r] || 6 == this.Twomaps[m][r] || 7 == this.Twomaps[m][r] || 8 == this.Twomaps[m][r] || 9 == this.Twomaps[m][r] || 10 == this.Twomaps[m][r] || 11 == this.Twomaps[m][r] || 12 == this.Twomaps[m][r] || 13 == this.Twomaps[m][r] || 14 == this.Twomaps[m][r] || 15 == this.Twomaps[m][r]) {
                    var u = i.default.insance.enemyCreat(this.Twomaps[m][r], r, m);
                    this.Obmodels[m][r] = u, u.transform.localPositionX -= r, u.transform.localPositionZ -= m;
                    var f = i.default.insance.floorCreat();
                    f.transform.localPositionX -= r, f.transform.localPositionZ -= m, this.RecoveryFloor.push(f),
                        this.RecoveryEnemy.push(u), this.Twomodels[m][r] = f;
                } else if (1 == this.Twomaps[m][r]) {
                    var p = i.default.insance.wallCreat();
                    p.transform.localPositionX -= r, p.transform.localPositionZ -= m, this.Twomodels[m][r] = p,
                        this.RecoveryWall.push(p), this.walls.push(p);
                }
                this.scene3d.addChild(this.player);
                for (var g = Math.floor(this.width / 2), m = this.height - 1; m >= 0; m--) if (0 == this.Twomaps[m][g]) {
                    var y = e.Instance().width_adopt, v = e.Instance().height_adopt;
                    this.startPos = new Laya.Vector3(y - g, 0, v - m), n.default.instance.index_x = g,
                        n.default.instance.index_y = m;
                    break;
                }
                if (3 != l.default.littlelevel) {
                    for (m = 0; m < this.height; m++) if (1 == this.Twomaps[m][g]) {
                        var y = e.Instance().width_adopt, v = e.Instance().height_adopt;
                        this.scene3d.addChild(this.blueWall), this.blueWall.transform.position = this.Twomodels[m][g].transform.position,
                            this.Twomodels[m][g].active = !1;
                        break;
                    }
                    for (var b = 0, _ = 0, w = 0; w < this.height; w++) if (1 == this.Twomaps[w][g]) {
                        b = this.Twomodels[w][g].transform.localPositionZ + 1, _ = this.Twomodels[w][g].transform.localPositionX;
                        break;
                    }
                    this.getEndPosz();
                    for (var x = 0; x < this.heigestZ - b; x++) {
                        var L = null;
                        (L = i.default.insance.endfloorCreat()).transform.localPositionZ = b + 1 + x, L.transform.localPositionX = _,
                            1 == l.default.littlelevel ? this.RecoveryEndfloors1.push(L) : 2 == l.default.littlelevel && this.RecoveryEndfloors2.push(L);
                    }
                } else for (m = this.height - 1; m >= 0; m--) if (1 == this.Twomaps[m][g]) {
                    var y = e.Instance().width_adopt, v = e.Instance().height_adopt;
                    this.scene3d.addChild(this.blueWall), this.blueWall.transform.position = this.Twomodels[m][g].transform.position,
                        this.Twomodels[m][g].active = !1;
                    break;
                }
                if (n.default.instance.StartPos = this.startPos, n.default.instance.Models = this.Twomodels,
                    0 != i.default.insance.obstacle.length) for (w = 0; w < i.default.insance.obstacle.length; w++) i.default.insance.obstacle[w].getComponent(o.default).start();
                if (0 != this.RecovryDiamond.length) for (w = 0; w < this.RecovryDiamond.length; w++) this.RecovryDiamond[w].getComponent(d.default).start();
                for (w = 0; w < this.obstacles.length; w++) 0 != this.obstacles[w].numChildren && this.obstacles[w].getComponent(h.default).start();
                for (w = 0; w < this.walls.length; w++) this.walls[w].active = !1;
            }, e.prototype.getEndPosz = function () {
                this.heigestZ = this.height * this.scaleheight - this.json.datas[l.default.level - 1].content[l.default.littlelevel - 1 + 1].height / 2 + this.mapheight - 1;
            }, e.prototype.getHeightnum = function () {
                return this.json.datas[l.default.level - 1].content[l.default.littlelevel - 1 - 1].height;
            }, e.prototype.GetPos = function (t) {
                var e = new Laya.Vector3(0, 0, 0);
                this.gameCamera.viewport.project(t, this.gameCamera.projectionViewMatrix, e);
                var a = new Laya.Vector2(0, 0);
                a.x = e.x / Laya.stage.clientScaleX, a.y = e.y / Laya.stage.clientScaleY, c.default.instance.creatCoin(a);
            }, e.prototype.GethandPos = function (t) {
                var e = new Laya.Vector3(0, 0, 0);
                this.gameCamera.viewport.project(t, this.gameCamera.projectionViewMatrix, e);
                var a = new Laya.Vector2(0, 0);
                a.x = e.x / Laya.stage.clientScaleX, a.y = e.y / Laya.stage.clientScaleY,
                    this.HandAct1(r.default.instance.hand);
            }, e.prototype.HandAct1 = function (t) {
                var e = this;
                Laya.Tween.to(t, {
                    y: t.y - 300
                }, 2e3, null, Laya.Handler.create(this, function () {
                    t.y += 300, e.HandAct1(t);
                }));
            }, e.prototype.MapInit = function () {
                this.Twomodels = [], this.Twomaps = [], this.isstatic = !1;
                for (t = 0; t < i.default.insance.obstacle.length; t++) i.default.insance.obstacle[t].getComponent(o.default).init();
                if (i.default.insance.obstacle = [], this.color_num = 0, 0 != this.RecoveryEnemy.length) for (t = 0; t < this.RecoveryEnemy.length; t++) i.default.insance.enemyRecover(this.RecoveryEnemy[t]),
                    this.RecoveryEnemy[t].getComponent(o.default).init();
                for (t = 0; t < this.obstacles.length; t++) this.obstacles[t].getComponent(h.default).init();
                if (0 != this.RecovryDiamond.length) for (t = 0; t < this.RecovryDiamond.length; t++) i.default.insance.diamondRecover(this.RecovryDiamond[t]);
                for (t = 0; t < this.RecoveryFloor.length; t++) i.default.insance.floorRecover(this.RecoveryFloor[t]);
                for (var t = 0; t < this.RecoveryWall.length; t++) i.default.insance.wallRecover(this.RecoveryWall[t]);
                this.RecoveryEnemy = [], this.RecoveryFloor = [], this.RecoveryWall = [], this.RecovryDiamond = [],
                    this.Obmodels = [], n.default.instance.GameInit(), this.blueWall.removeSelf(), this.lihua.active = !1;
            }, e.prototype.endfloorRecover = function () {
                if (2 == l.default.littlelevel) {
                    for (t = 0; t < this.RecoveryEndfloors1.length; t++) t < this.RecoveryEndfloors1.length - 10 ? i.default.insance.endfloorRecover(this.RecoveryEndfloors1[t]) : this.endfloors1.push(this.RecoveryEndfloors1[t]);
                    this.RecoveryEndfloors1 = [];
                } else if (3 == l.default.littlelevel) {
                    for (t = 0; t < this.endfloors1.length; t++) i.default.insance.endfloorRecover(this.endfloors1[t]);
                    this.endfloors1 = [];
                    for (var t = 0; t < this.RecoveryEndfloors2.length; t++) t < this.RecoveryEndfloors2.length - 10 ? i.default.insance.endfloorRecover(this.RecoveryEndfloors2[t]) : this.endfloors2.push(this.RecoveryEndfloors2[t]);
                    this.RecoveryEndfloors2 = [];
                }
            }, e.prototype.allendfloorRecover = function () {
                if (this.RecoveryEndfloors1.length > 0) for (t = 0; t < this.RecoveryEndfloors1.length; t++) i.default.insance.endfloorRecover(this.RecoveryEndfloors1[t]);
                if (this.RecoveryEndfloors2.length > 0) for (t = 0; t < this.RecoveryEndfloors2.length; t++) i.default.insance.endfloorRecover(this.RecoveryEndfloors2[t]);
                if (this.endfloors1.length > 0) for (t = 0; t < this.endfloors1.length; t++) i.default.insance.endfloorRecover(this.endfloors1[t]);
                if (this.endfloors2.length > 0) for (var t = 0; t < this.endfloors2.length; t++) i.default.insance.endfloorRecover(this.endfloors2[t]);
                this.RecoveryEndfloors1 = [], this.RecoveryEndfloors2 = [], this.endfloors1 = [],
                    this.endfloors2 = [];
            }, e.prototype.OverFloorActions = function (t) {
                var e = this;
                void 0 === t && (t = null), Laya.timer.once(700, this, function () {
                    for (var a = [], i = e.height - 1; i >= 0; i--) {
                        var n = [];
                        if (a.push(n), e.tiltFloors(0, i, n), 0 == i) for (var o = 0; o < e.width - 1; o++) {
                            var l = [];
                            a.push(l), e.tiltFloors(o, 0, l);
                        }
                    }
                    var r = -1;
                    Laya.timer.loop(20, e, function () {
                        if ((r += 1) < a.length) for (var i = function (t) {
                            if (1 == s.default.instance.isskins) {
                                var i = a[r][t].meshRenderer.material;
                                Laya.Tween.to(i, {
                                    _AlbedoIntensity: 1.8
                                }, 50, null, Laya.Handler.create(e, function () {
                                    Laya.Tween.to(i, {
                                        _AlbedoIntensity: 1
                                    }, 50, null);
                                }));
                            } else {
                                var n = a[r][t].meshRenderer.material;
                                Laya.Tween.to(n, {
                                    _AlbedoIntensity: 1.5
                                }, 50, null, Laya.Handler.create(e, function () {
                                    Laya.Tween.to(n, {
                                        _AlbedoIntensity: 1
                                    }, 50, null, Laya.Handler.create(e, function () {
                                        n.albedoColor = s.default.instance.changeColor;
                                    }));
                                }));
                            }
                        }, n = 0; n < a[r].length; n++) i(n); else Laya.timer.clearAll(e), e.EndFloorColor(),
                            t && t();
                    });
                });
            }, e.prototype.tiltFloors = function (t, e, a) {
                this.isInGrid(e, t) && ("box002" == this.Twomodels[e][t].name && (1 == s.default.instance.isskins ? a.push(this.Twomodels[e][t].getChildAt(0)) : a.push(this.Twomodels[e][t])),
                    this.tiltFloors(t + 1, e + 1, a));
            }, e.prototype.isInGrid = function (t, a) {
                return t >= 0 && t <= e.Instance().height - 1 && a >= 0 && a <= e.Instance().width - 1;
            }, e.prototype.PictureDisplay = function () {
                for (var t, e, a = this.height - 1, i = (this.height, Math.floor(1 / this.height * 100) / 100 - .01), n = this.height - 1; n >= 0; n--) for (var o = function (o) {
                    if (l.Twomodels[n][o].meshRenderer.sharedMaterial == s.default.instance.endMat && "box002" == l.Twomodels[n][o].name && 0 == l.Twomodels[n][o].getChildAt(0).active) {
                        l.Twomodels[n][o].getChildAt(0).active = !0, l.Twomodels[n][o].getChildAt(0).meshRenderer.sharedMaterial = s.default.instance.shop;
                        var r = l.Twomodels[n][o].getChildAt(0).meshRenderer.material;
                        o >= a ? o % a == 0 ? t = 0 : (i = Math.floor(o / a) * a, t = 1 / a * (o - i)) : t = o * (1 / a),
                            e = l.height - 1 - n >= a ? (l.height - 1 - n) % a == 0 ? 0 : (l.height - 1 - n - Math.floor((l.height - 1 - n) / a) * a) * (1 / a) : (l.height - 1 - n) * (1 / a),
                            r.tilingOffset = new Laya.Vector4(1.5 / a, 1.5 / a, t, e), Laya.Tween.to(r, {
                                _AlbedoIntensity: 2
                            }, 200, null, Laya.Handler.create(l, function () {
                                Laya.Tween.to(r, {
                                    _AlbedoIntensity: 1
                                }, 200, null);
                            }));
                    }
                }, l = this, r = 0; r < this.width - 1; r++) o(r);
            }, e.prototype.EndFloorColor = function () {
                if (1 == l.default.littlelevel) for (t = 0; t < this.RecoveryEndfloors1.length; t++) this.RecoveryEndfloors1[t].getComponent(u.default).onload(); else if (2 == l.default.littlelevel) for (var t = 0; t < this.RecoveryEndfloors2.length; t++) this.RecoveryEndfloors2[t].getComponent(u.default).onload();
            }, e.prototype.MaskWall = function () {
                for (var t = 0; t < this.height; t++) for (var e = 0; e < this.width; e++) 0 == e && t >= 0 ? this.Twomodels[t][e].active = !1 : e == this.width - 1 && t >= 0 ? this.Twomodels[t][e].active = !1 : t == this.height - 1 && (this.Twomodels[t][e].active = !1);
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = g;
    }, {
        "../DataManager": 11,
        "../UIControl/FlyingCoin": 26,
        "../UIControl/SkinUseCtrl": 29,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43,
        "./DiamondCtrl": 3,
        "./EndFloorsCtrl": 4,
        "./MaterialCtrl": 5,
        "./ModelPool": 6,
        "./ObstacleCtrl": 7,
        "./ObstacleManage": 8,
        "./PlayerCtrl": 9
    }],
    11: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./UIScript/GameUI"), n = t("./UIScript/RigisterCtr"), s = t("./UIControl/SkinUseCtrl"), o = t("./UIControl/TaskController"), l = t("./UIControl/SkinGoodCtrl"), r = function (t) {
            function e() {
                var a = t.call(this) || this;
                return e.GetData(), a;
            }
            return __extends(e, t), e.GetData = function () {
                if (Number(Laya.LocalStorage.getItem("Color-Fill-levels")) ? (e.level = Number(Laya.LocalStorage.getItem("Color-Fill-levels")),
                    e.diamond = Number(Laya.LocalStorage.getItem("Color-Fill-Diamond")), this.shop = JSON.parse(Laya.LocalStorage.getItem("Color-Fill-shopskins")),
                    this.skinuse = JSON.parse(Laya.LocalStorage.getItem("Color-Fill-skinuse"))) : (e.level = 1,
                        e.diamond = 0, this.shop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.skinuse = [0, 0, 0, 0, 0, 0]),
                    Number(Laya.LocalStorage.getItem("Color-Fill-firstone")) ? (this.Firstgame = JSON.parse(Laya.LocalStorage.getItem("Color-Fill-firstdata")),
                        this.first = Number(Laya.LocalStorage.getItem("Color-Fill-firstone")), console.log(this.Firstgame)) : (this.first = 0,
                            this.Firstgame = [0, 0, 0, 0]), Number(Laya.LocalStorage.getItem("Color-Fill-fufuo_num")) ? this.fuhuo_num = Number(Laya.LocalStorage.getItem("Color-Fill-fufuo_num")) : this.fuhuo_num = 0,
                    Number(Laya.LocalStorage.getItem("Color-Fill-next_num")) ? this.next_num = Number(Laya.LocalStorage.getItem("Color-Fill-next_num")) : this.next_num = 0,
                    Number(Laya.LocalStorage.getItem("Color-Fill-skinusing")) ? this.skinusing = Number(Laya.LocalStorage.getItem("Color-Fill-skinusing")) : this.skinusing = 0,
                    Laya.LocalStorage.getItem("Color-Fill-rigister")) {
                    var t = JSON.parse(Laya.LocalStorage.getItem("Color-Fill-rigister"));
                    e.days = t.days, e.rigisterDate = t.dates, e.rigistskin = t.rigisterskin;
                } else e.days = [0, 0, 0, 0, 0, 0, 0], e.rigisterDate = null, e.rigistskin = 0;
                if (Laya.LocalStorage.getItem("Color-Fill-openbox_num") ? this.openbox_num = Number(Laya.LocalStorage.getItem("Color-Fill-openbox_num")) : this.openbox_num = 0,
                    Number(!Laya.LocalStorage.getItem("Color-Fill-task"))) e.skindate = [null, null, null, null, null, null, null],
                        e.taskdata = [0, 0, 0, 0, 0], e.taskdates = null; else {
                    var a = JSON.parse(Laya.LocalStorage.getItem("Color-Fill-task"));
                    e.skindate = a.skindate, e.taskdata = a.taskdata, e.taskdates = a.taskdates;
                }
                if (e.video_num = Laya.LocalStorage.getItem("Color-Fill-video_num") ? Number(Laya.LocalStorage.getItem("Color-Fill-video_num")) : 0,
                    e.taskvideo = Laya.LocalStorage.getItem("Color-Fill-taskvideo") ? JSON.parse(Laya.LocalStorage.getItem("Color-Fill-taskvideo")) : [0, 0, 0, 0, 0],
                    this.shop.length < 16) {
                    if (0 == this.shop[0]) {
                        for (i = 0; i < e.shop.length; i++) if (2 == e.shop[i]) {
                            e.shop[i] = 1;
                            break;
                        }
                        this.shop[0] = 2;
                    }
                    for (var i = this.shop.length; i < 16; i++) this.shop.push(0);
                    e.SaveData();
                }
                0 == this.first && (this.isnottan = !0), this.ShopInit(), console.log(e.shop + "===================>>>>>>>>>>>>>");
            }, e.GameInit = function () {
                0 == this.isnottan && n.default.instance.Init(), s.default.instance.SkinInit(),
                    o.default.instance.Init(), l.default.instance.skinInit(), i.default.instance.startdiamondlabel.text = "" + e.diamond,
                    i.default.instance.diamondlabel.text = "" + e.diamond, i.default.instance.shop_label.text = "" + e.diamond;
            }, e.ShopInit = function () {
                if (0 == this.shop[0]) {
                    for (a = 0; a < e.shop.length; a++) if (2 == e.shop[a]) {
                        e.shop[a] = 1;
                        break;
                    }
                    this.shop[0] = 2;
                } else {
                    for (var t = !1, a = 0; a < e.shop.length; a++) if (2 == e.shop[a]) {
                        t = !0;
                        break;
                    }
                    t || (this.shop = [2]);
                }
            }, e.SaveData = function () {
                this.first = 1, Laya.LocalStorage.setItem("Color-Fill-levels", String(e.level)), Laya.LocalStorage.setItem("Color-Fill-Diamond", String(e.diamond)),
                    Laya.LocalStorage.setItem("Color-Fill-shopskins", JSON.stringify(this.shop)), Laya.LocalStorage.setItem("Color-Fill-skinuse", JSON.stringify(this.skinuse)),
                    Laya.LocalStorage.setItem("Color-Fill-firstdata", JSON.stringify(this.Firstgame)), Laya.LocalStorage.setItem("Color-Fill-firstone", String(this.first)),
                    Laya.LocalStorage.setItem("Color-Fill-fufuo_num", String(this.fuhuo_num)), Laya.LocalStorage.setItem("Color-Fill-next_num", String(this.next_num)),
                    Laya.LocalStorage.setItem("Color-Fill-skinusing", String(this.skinusing)), Laya.LocalStorage.setItem("Color-Fill-openbox_num", String(this.openbox_num)),
                    Laya.LocalStorage.setItem("Color-Fill-video_num", String(this.video_num)), Laya.LocalStorage.setItem("Color-Fill-taskvideo", JSON.stringify(this.taskvideo));
                var t = {
                    dates: e.rigisterDate,
                    days: e.days,
                    rigisterskin: e.rigistskin
                }, a = {
                    skindate: e.skindate,
                    taskdata: e.taskdata,
                    taskdates: e.taskdates
                };
                Laya.LocalStorage.setItem("Color-Fill-task", JSON.stringify(a)), Laya.LocalStorage.setItem("Color-Fill-rigister", JSON.stringify(t));
            }, e.show = function (t) {
                platform.getInstance().prompt0(t);
            }, e.level = 1, e.littlelevel = 1, e.diamond = 0, e.overdiamond = 0, e.shop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                e.skinuse = [0, 0, 0, 0, 0, 0], e.Firstgame = [0, 0, 0, 0], e.first = 0, e.fuhuo_num = 0,
                e.next_num = 0, e.skinusing = 0, e.openbox_num = 0, e.rigistskin = 0, e.days = [0, 0, 0, 0, 0, 0, 0],
                e.rigisterDate = null, e.skindate = [null, null, null, null, null, null, null],
                e.taskdata = [0, 0, 0, 0, 0], e.taskvideo = [0, 0, 0, 0, 0], e.taskdates = null,
                e.isopen = !1, e.isnottan = !1, e.video_num = 0, e;
        }(Laya.Script);
        a.default = r;
    }, {
        "./UIControl/SkinGoodCtrl": 28,
        "./UIControl/SkinUseCtrl": 29,
        "./UIControl/TaskController": 30,
        "./UIScript/GameUI": 35,
        "./UIScript/RigisterCtr": 37
    }],
    12: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            wxgamecid: "",
            init: function (t) {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.uma.init({
                        appKey: t,
                        useOpenid: !1,
                        autoGetOpenid: !1,
                        debug: !0
                    });
                    var e = Laya.Browser.window.wx.getLaunchOptionsSync().query.wxgamecid;
                    this.wxgamecid = e || "self";
                }
            },
            reportAnalytics: function (t, e) {
                Laya.Browser.window.wx && Laya.Browser.window.wx.uma.trackEvent(t, e);
            },
            channelReportAnalytics: function (t, e, a) {
                Laya.Browser.window.wx && Laya.Browser.window.wx.uma.trackEvent(t, {
                    wxgamecid: this.wxgamecid,
                    state: e,
                    jump: a
                });
            }
        };
    }, {}],
    13: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function () {
            function t() { }
            return Object.defineProperty(t, "instance", {
                get: function () {
                    return this._instance || (this._instance = new t()), this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.analysisLayaAtlas = function (t, e, a) {
                void 0 === a && (a = null), Laya.loader.load([t, e], Laya.Handler.create(this, function () {
                    var i = Laya.loader.getRes(t), n = Laya.loader.getRes(e);
                    if (!i.frames) throw "atlas data error";
                    var s = i.frames;
                    for (var o in s) if (s.hasOwnProperty(o)) {
                        var l = Laya.Texture.create(n, s[o].frame.x, s[o].frame.y, s[o].frame.w, s[o].frame.h, s[o].spriteSourceSize.x, s[o].spriteSourceSize.y, s[o].sourceSize.w, s[o].sourceSize.h);
                        Laya.Loader.cacheRes(i.meta.prefix + o, l);
                    }
                    console.log("图集解析完成"), a && a();
                }));
            }, t.prototype.analysisCustomAtlas = function (t, e, a) {
                void 0 === a && (a = null), Laya.loader.load([t, e], Laya.Handler.create(this, function () {
                    var i = Laya.loader.getRes(t);
                    console.log(i);
                    var n = Laya.loader.getRes(e), s = e.split("/").pop().split(".")[0] + "/";
                    if (!i.frame) throw "atlas data lost or atlas data error";
                    for (var o = i.frame, l = 0; l < o.length; l++) for (var r in o[l]) if (o[l].hasOwnProperty(r)) {
                        var h = Laya.Texture.create(n, o[l][r].location.x, o[l][r].location.y, o[l][r].size.width, o[l][r].size.height);
                        Laya.Loader.cacheRes("GameBoxUI/" + s + r, h);
                    }
                    console.log("*****Analysis Custom Atlas Finished*****"), a && a();
                }));
            }, t.prototype.analysisCustomAtlas_heavy = function (t, e, a) {
                void 0 === a && (a = null), null == Laya.loader.getRes(e) ? Laya.loader.load(e, Laya.Handler.create(this, function () {
                    var i = t, n = Laya.loader.getRes(e), s = e.split("/").pop().split(".")[0] + "/";
                    if (!i.frame || !n) throw "atlas data lost or atlas data error";
                    var o = i.frame;
                    for (var l in o) {
                        var r = Laya.Texture.create(n, o[l].location.x, o[l].location.y, o[l].size.width, o[l].size.height);
                        Laya.Loader.cacheRes("GameBoxUI/" + s + l, r);
                    }
                    console.log("*****Analysis Custom Atlas Finished*****"), a && a();
                })) : (console.log("*****Analysis Custom Atlas Finished*****"), a && a());
            }, t;
        }();
        a.default = i;
    }, {}],
    14: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = Laya.Browser.window.wx, n = Laya.Browser.window.wx ? i.env.USER_DATA_PATH + "/" : "", s = function () {
            function t() {
                this.downloadCompletedCallback = null, this.downloadFailCallback = null, this._count_curr = 0;
            }
            return Object.defineProperty(t, "instance", {
                get: function () {
                    return this._instance || (this._instance = new t()), this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.downloadFile = function (t, e, a) {
                var s = this, o = [];
                this._count_curr = 0;
                for (var l = [], r = 0; r < t.length; r++) {
                    var h = t[r].split("/"), d = h.pop(), c = h.pop() + "/" + d;
                    l.push(c);
                }
                this.downloadCompletedCallback = e, this.downloadFailCallback = a, this.fileSystemManager || this.getFileSystemManager();
                for (var u = function (e) {
                    f.fileSystemManager && f.fileSystemManager.access ? f.fileSystemManager.access({
                        path: n + l[e],
                        success: function (a) {
                            console.log("当前文件/目录存在：" + n + l[e], a), o.push("1"), s.downloadCompleted(t.length, o.length, e);
                        },
                        fail: function (a) {
                            console.log("当前文件/目录不存在：" + n + l[e], a), console.log("下载资源：", t[e]), i && i.downloadFile && i.downloadFile({
                                url: t[e],
                                success: function (a) {
                                    console.log("downloadFile调用成功：", a), 200 === a.statusCode ? (console.log("资源下载完成：" + t[e]),
                                        s.saveFile("" + a.tempFilePath, l[e], function () {
                                            o.push("1"), s.downloadCompleted(t.length, o.length, e);
                                        })) : s.downloadCompleted(t.length, o.length, e);
                                },
                                fail: function (a) {
                                    console.log("downloadFile调用失败：", a), s.downloadCompleted(t.length, o.length, e);
                                }
                            });
                        }
                    }) : (o.push("1"), f.downloadCompleted(t.length, o.length, e));
                }, f = this, r = 0; r < t.length; r++) u(r);
            }, t.prototype.downloadCompleted = function (t, e, a) {
                this._count_curr++, t <= e ? (console.log("资源下载完成！"), this.downloadCompletedCallback && this.downloadCompletedCallback()) : t > this._count_curr ? console.log("资源加载中...") : (console.log("资源加载出错！"),
                    Laya.LocalStorage.removeItem("GameBoxVersion"), this.downloadFailCallback && this.downloadFailCallback());
            }, t.prototype.getFileSystemManager = function () {
                i && i.getFileSystemManager && (this.fileSystemManager = i.getFileSystemManager());
            }, t.prototype.saveFile = function (t, e, a) {
                var i = this;
                this.fileSystemManager || this.getFileSystemManager(), this.checkSavePath(e, function () {
                    i.fileSystemManager && i.fileSystemManager.saveFile && i.fileSystemManager.saveFile({
                        tempFilePath: t,
                        filePath: n + e,
                        success: function (t) {
                            console.log("文件保存成功：", t), a && a();
                        },
                        fail: function (t) {
                            console.log("文件保存失败：", t);
                        }
                    });
                });
            }, t.prototype.checkSavePath = function (t, e) {
                this.fileSystemManager || this.getFileSystemManager();
                var a = [];
                if (console.log("##############", t), t && t.split) {
                    var i = t.split("/");
                    a.push(i.shift(), i.shift());
                }
                this.mkdirPath(a, 1, e);
            }, t.prototype.mkdirPath = function (t, e, a) {
                for (var i = this, s = "", o = 0; o < e; o++) s += 0 == o ? t[o] : "/" + t[o];
                console.log("##############", t, s), this.fileSystemManager.access({
                    path: n + s,
                    success: function (o) {
                        console.log("当前目录存在：" + n + s, o), e + 1 >= t.length ? a && a() : i.mkdirPath(t, e + 1, a);
                    },
                    fail: function (o) {
                        console.log("当前目录不存在：" + n + s, o), i.fileSystemManager.mkdir({
                            dirPath: n + s,
                            success: function (o) {
                                console.log("新建目录成功：" + n + s, o), e + 1 >= t.length ? a && a() : i.mkdirPath(t, e + 1, a);
                            },
                            fail: function (o) {
                                console.log("新建目录失败：" + n + s, o), i.fileSystemManager.access({
                                    path: n + s,
                                    success: function (o) {
                                        console.log("当前目录不存在：" + n + s, o), e + 1 >= t.length ? a && a() : i.mkdirPath(t, e + 1, a);
                                    }
                                });
                            }
                        });
                    }
                });
            }, t.prototype.clearFiles = function (t, e) {
                var a = this;
                this.fileSystemManager || this.getFileSystemManager(), this.fileSystemManager && this.fileSystemManager.access && this.fileSystemManager.access({
                    path: n + t,
                    success: function (i) {
                        console.log("当前文件存在：" + n + t, i), console.log("清理文件！"), a.fileSystemManager.unlink && a.fileSystemManager.unlink({
                            filePath: n + t,
                            success: function () {
                                console.log("清理文件成功：", n + t), e && e();
                            },
                            fail: function (a) {
                                console.log("清理文件失败：", n + t, a), e && e();
                            }
                        });
                    },
                    fail: function (a) {
                        console.log("当前文件不存在：" + n + t, a), console.log("不清理文件！"), e && e();
                    }
                });
            }, t.prototype.checkFiles = function (t, e, a) {
                this.fileSystemManager || this.getFileSystemManager(), this.fileSystemManager && this.fileSystemManager.access && this.fileSystemManager.access({
                    path: t,
                    success: function (a) {
                        console.log("当前文件存在：" + t, a), e && e();
                    },
                    fail: function (e) {
                        console.log("当前文件不存在：" + t, e), a && a();
                    }
                });
            }, t;
        }();
        a.default = s;
    }, {}],
    15: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./DownloadManager/DownloadFileManager"), n = t("./AtlasTools/AtlasTools"), s = t("../GameBoxManager/SDK/shareCardListener_laya"), o = t("./Analysis"),
            l = "",//https://www.7cgames.cn/GameBoxs/wechat/onlineBoxs/json/version.json {"version":"2.0.162"}
            r = Laya.Browser.window.wx, h = Laya.Browser.window.wx ? r.env.USER_DATA_PATH + "/" : "",
            d = "wx1543057c09127106", c = "?ColorFill3D_wx1543057c09127106",
            u = "" + d, //https://www.7cgames.cn/tongquApi/spreadModuleOfGame/findUrlByAppId?appId=
            f = "", p = "", g = function () {
                function t() {
                    this.isAtlasAnalysis = !1, this._selfAppid = d, this.showCount_SideFrame = 12, this.boxBtn_Ani = [],
                        this.gameAppids_boxBtn_Ani = [], this.iconCount_boxBtn_Ani = [], this.boxBtn_Auto = [],
                        this.sideFrameUICtrl = {
                            setSideListData: null
                        }, this.guessYouLikeUI = [], this.gameBoxData_Local = null, this.outsideGameMsg = {};
                }
                return Object.defineProperty(t, "instance", {
                    get: function () {
                        return this._instance || (this._instance = new t()), this._instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.navigateToMiniProgram = function (t, e) {
                    if (Laya.Browser.window.wx) {
                        var a = this.outsideGameMsg[t] ? t : "self";
                        o.default.channelReportAnalytics("navigateToMiniProgram", "start", a);
                        var i = "?", n = {
                            time: new Date().valueOf()
                        };
                        if (this.outsideGameMsg && this.outsideGameMsg[t]) {
                            var l = this.outsideGameMsg[t];
                            if (l.path && (i += l.path), l.extraData) for (var r = l.extraData, h = Object.keys(r), d = 0; d < h.length; d++) {
                                var c = h[d], u = r[c];
                                n[c] = u;
                            }
                        }
                        Laya.Browser.window.wx.navigateToMiniProgram({
                            appId: t,
                            path: i,
                            extraData: n,
                            success: function () {
                                o.default.channelReportAnalytics("navigateToMiniProgram", "success", a), console.log("【@@@@@@@@@@@@@@@@@】", i, n),
                                    s.TQA_jumpOtherGameRecord("box", t);
                            }
                        });
                    }
                }, t.prototype.initGameBoxConfig = function () {
                    // var t = this;
                    // this.loadMoreGameData(), o.default.init("5ebcf92ddbc2ec07f77a0a36"), Laya.Browser.window.wx && (s.TGA_setAppid(this._selfAppid),
                    //     s.TQA_checkForOpenGame(), Laya.Browser.window.wx.onShow(function (t) {
                    //         s.TQA_listenForShareCardClick(t);
                    //     })), Laya.loader.load(u, Laya.Handler.create(this, function (e) {
                    //         console.log("盒子版本号-selfAppid：", e), "" != e && void 0 != e || (e = "{}");
                    //         var a = JSON.parse(e);
                    //         if (a && a.resPath && "" != a.resPath) {
                    //             a.paramPath && (p = a.paramPath), console.log("单个游戏定制盒子");
                    //             var i = Laya.LocalStorage.getItem("Color-Fill-GameBoxVersion");
                    //             f = a.resPath, a.version ? (console.log("当前盒子版本信息：", a.version), i === a.version ? (console.log("*********盒子版本号相同，无需更新********"),
                    //                 t.IfUpdateOutsideInfo(p), t._loadGameBoxData(a.version, !1)) : (console.log("*********盒子版本号不同，需更新********"),
                    //                     t._loadOutsideJsonData(p), t._loadGameBoxData(a.version), i = a.version, r && r.setStorage && r.setStorage({
                    //                         key: "GameBoxVersion",
                    //                         data: i
                    //                     }))) : (console.warn("读取服务器盒子版本信息失败！"), i && (t.IfUpdateOutsideInfo(p), t._loadGameBoxData(i, !1)));
                    //         } else console.log("旧版盒子"), Laya.loader.load(l, Laya.Handler.create(t, function (e) {
                    //             var a = Laya.LocalStorage.getItem("Color-Fill-GameBoxVersion");
                    //             e ? (console.log("当前盒子版本信息：", e),
                    //                 f = "",//https://cdn.7cgames.cn/GameBoxs/wechat/onlineBoxs/v" + e.version + "/Boxs/json/boxResource.json
                    //                 a === e.version ? (console.log("*********盒子版本号相同，无需更新********"), 
                    //                 t._loadGameBoxData(e.version, !1)) : (console.log("*********盒子版本号不同，需更新********"),
                    //                     t._loadGameBoxData(e.version), a = e.version, r && r.setStorage && r.setStorage({
                    //                         key: "GameBoxVersion",
                    //                         data: a
                    //                     }))) : (console.warn("读取服务器盒子版本信息失败！"), a && t._loadGameBoxData(a, !1));
                    //         }));
                    //     }));
                }, t.prototype.loadMoreGameData = function () {
                    console.log("读取服务器数据,用于数据统计");
                    var t = Laya.LocalStorage.getItem("Color-Fill-Data_Day");
                    "" == t || void 0 == t || null == t ? (console.log("今天未读取数据，读取一次"),
                        Laya.loader.load("" + c),//https://www.7cgames.cn/GameRes/wechat/7cgames/WeChatMiniGameBox/BoxList/InnerBox/20200630_v1.7.3/7cgamesBoxData.json
                        r && r.setStorage && r.setStorage({
                            key: "Data_Day",
                            data: this.AnalysisTimeStamp()
                        })) : t != this.AnalysisTimeStamp() ? (console.log("今天未读取数据，读取一次"),
                            Laya.loader.load("" + c),//https://www.7cgames.cn/GameRes/wechat/7cgames/WeChatMiniGameBox/BoxList/InnerBox/20200630_v1.7.3/7cgamesBoxData.json
                            r && r.setStorage && r.setStorage({
                                key: "Data_Day",
                                data: this.AnalysisTimeStamp()
                            })) : console.log("今天已读取数据，无需再次读取");
                }, t.prototype._loadGameBoxData = function (t, e) {
                    var a = this;
                    if (void 0 === e && (e = !0), e) i.default.instance.clearFiles("Boxs/icon.png", function () {
                        Laya.loader.load(f, Laya.Handler.create(a, function (n) {
                            console.log(n);
                            var s = a.getGameBoxConfig_Local();
                            console.log("本地盒子数据：", s), a.compiledLocalGameBoxConfig(n, !0);
                            var o = [];
                            for (var l in n.gif) o.push(n.gif[l].image);
                            o.push(n.icon.image);
                            for (var l in n.longImage) o.push(n.longImage[l].image);
                            i.default.instance.downloadFile(o, function () {
                                a.downloadImgCompleted(), r && r.setStorage && r.setStorage({
                                    key: "LASTLOADERROR",
                                    data: "1"
                                });
                            }, function () {
                                a._loadGameBoxData(t, e);
                            });
                        }));
                    }); else {
                        var n = this.getGameBoxConfig_Local();
                        if (console.log("本地盒子数据：", n), n.Appid && "1" == Laya.LocalStorage.getItem("Color-Fill-LASTLOADERROR")) {
                            this.compiledLocalGameBoxConfig(n);
                            var s = [];
                            for (var o in n.gif) s.push(n.gif[o].image);
                            s.push(n.icon.image);
                            for (var o in n.longImage) s.push(n.longImage[o].image);
                            this.downloadImgCompleted();
                        } else this._loadGameBoxData(t);
                    }
                }, t.prototype.downloadImgCompleted = function () {
                    var t = [], e = [];
                    for (var a in this.gameBoxData_Local.gif) {
                        t.push(this.gameBoxData_Local.gif[a].image), e.push(this.gameBoxData_Local.gif[a].json),
                            this.gameAppids_boxBtn_Ani.push(a);
                        var i = 0;
                        for (var n in this.gameBoxData_Local.gif[a].json.frame) i++;
                        this.iconCount_boxBtn_Ani.push(i);
                    }
                    t.push(this.gameBoxData_Local.icon.image), e.push(this.gameBoxData_Local.icon.json);
                    for (var a in this.gameBoxData_Local.longImage) t.push(this.gameBoxData_Local.longImage[a].image),
                        e.push(this.gameBoxData_Local.longImage[a].json);
                    this.analysisCustomAtlas(e, t);
                }, t.prototype.analysisCustomAtlas = function (t, e, a) {
                    var s = this;
                    void 0 === a && (a = 0), e[a] == h + "Boxs/icon.png" ? (console.log("单个icon图，无需检测"),
                        n.default.instance.analysisCustomAtlas_heavy(t[a], e[a], function () {
                            if (++a >= e.length) {
                                console.log("图集解析完成");
                                for (i = 0; i < s.boxBtn_Ani.length; i++) s.boxBtn_Ani[i](s.gameAppids_boxBtn_Ani, s.iconCount_boxBtn_Ani);
                                for (i = 0; i < s.guessYouLikeUI.length; i++) s.guessYouLikeUI[i](s.gameBoxData_Local, d);
                                for (var i = 0; i < s.boxBtn_Auto.length; i++) s.boxBtn_Auto[i](s.gameBoxData_Local, d);
                                return s.sideFrameUICtrl.setSideListData && s.sideFrameUICtrl.setSideListData(s.gameBoxData_Local, s.showCount_SideFrame, d),
                                    void (s.isAtlasAnalysis = !0);
                            }
                            s.analysisCustomAtlas(t, e, a);
                        })) : i.default.instance.checkFiles(e[a], function () {
                            n.default.instance.analysisCustomAtlas_heavy(t[a], e[a], function () {
                                if (++a >= e.length) {
                                    console.log("图集解析完成");
                                    for (i = 0; i < s.boxBtn_Ani.length; i++) s.boxBtn_Ani[i](s.gameAppids_boxBtn_Ani, s.iconCount_boxBtn_Ani);
                                    for (i = 0; i < s.guessYouLikeUI.length; i++) s.guessYouLikeUI[i](s.gameBoxData_Local, d);
                                    for (var i = 0; i < s.boxBtn_Auto.length; i++) s.boxBtn_Auto[i](s.gameBoxData_Local, d);
                                    return s.sideFrameUICtrl.setSideListData && s.sideFrameUICtrl.setSideListData(s.gameBoxData_Local, s.showCount_SideFrame, d),
                                        void (s.isAtlasAnalysis = !0);
                                }
                                s.analysisCustomAtlas(t, e, a);
                            });
                        }, function () {
                            console.log("本地不存在该图集，重新下载！", e[a]), s._loadGameBoxData(Laya.LocalStorage.getItem("Color-Fill-GameBoxVersion"));
                        });
                }, t.prototype.compiledLocalGameBoxConfig = function (t, e) {
                    void 0 === e && (e = !1), this.gameBoxData_Local = this.getGameBoxConfig_Local(),
                        e && (this.gameBoxData_Local = {}), this.gameBoxData_Local.Appid = t.Appid, this.gameBoxData_Local.gameName = t.gameName;
                    for (var a in t.gif) {
                        var i = t.gif[a].image.split("/"), n = i.pop(), s = h + i.pop() + "/" + n;
                        this.gameBoxData_Local.gif || (this.gameBoxData_Local.gif = {}), this.gameBoxData_Local.gif[a] || (this.gameBoxData_Local.gif[a] = {}),
                            this.gameBoxData_Local.gif[a].image = s, this.gameBoxData_Local.gif[a].json = t.gif[a].json;
                    }
                    var o = t.icon.image.split("/"), l = o.pop(), r = h + o.pop() + "/" + l;
                    this.gameBoxData_Local.icon || (this.gameBoxData_Local.icon = {}), this.gameBoxData_Local.icon.image = r,
                        this.gameBoxData_Local.icon.json = t.icon.json;
                    for (var a in t.longImage) {
                        var d = t.longImage[a].image.split("/"), c = d.pop(), u = h + d.pop() + "/" + c;
                        this.gameBoxData_Local.longImage || (this.gameBoxData_Local.longImage = {}), this.gameBoxData_Local.longImage[a] || (this.gameBoxData_Local.longImage[a] = {}),
                            this.gameBoxData_Local.longImage[a].image = u, this.gameBoxData_Local.longImage[a].json = t.longImage[a].json;
                    }
                    this.setGameBoxConfig_Local();
                }, t.prototype.getGameBoxConfig_Local = function () {
                    var t = Laya.LocalStorage.getItem("Color-Fill-GameBoxConfig_Local");
                    return "" != t && void 0 != t && null != t || (t = "{}"), JSON.parse(t);
                }, t.prototype.setGameBoxConfig_Local = function () {
                    r && r.setStorage && r.setStorage({
                        key: "GameBoxConfig_Local",
                        data: JSON.stringify(this.gameBoxData_Local)
                    });
                }, t.prototype.AnalysisTimeStamp = function () {
                    var t = new Date(Laya.Browser.now()), e = String(t.getFullYear()), a = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1), i = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
                    t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
                    return e + a + i;
                }, t.prototype._loadOutsideJsonData = function (t) {
                    var e = this;
                    Laya.loader.load(t, Laya.Handler.create(this, function (t) {
                        if (console.log("asdddddddddddddd =====  ", t), t && "" != t) {
                            for (var a = "string" == typeof t ? JSON.parse(t) : t, i = Object.keys(a), n = 0; n < i.length; n++) if (a[i[n]].extraData) {
                                for (var s = {}, o = a[i[n]].extraData.trim().split("&"), l = 0; l < o.length; l++) {
                                    var r = o[l].trim();
                                    console.log(r);
                                    var h = r.indexOf("="), d = r.substring(0, h), c = r.substring(h + 1, r.length);
                                    s[d] = c;
                                }
                                a[i[n]].extraData = s;
                            }
                            e.outsideGameMsg = a, Laya.LocalStorage.setJSON("outsideGameMsgOBJ", e.outsideGameMsg);
                        }
                    }));
                }, t.prototype.IfUpdateOutsideInfo = function (t) {
                    var e = this;
                    if (void 0 === t && (t = null), t) this._initOutsideGameParam(t); else {
                        Laya.LocalStorage.getJSON("outsideGameMsgOBJ") ? this._initOutsideGameParam(t) : Laya.loader.load(l, Laya.Handler.create(this, function (t) {
                            e._initOutsideGameParam(t.paramPath);
                        }));
                    }
                }, t.prototype._initOutsideGameParam = function (t) {
                    if (void 0 === t && (t = null), t) "" == t ? (this.outsideGameMsg = {}, Laya.LocalStorage.setJSON("outsideGameMsgOBJ", this.outsideGameMsg)) : this._loadOutsideJsonData(t); else {
                        var e = Laya.LocalStorage.getJSON("outsideGameMsgOBJ");
                        e && (this.outsideGameMsg = e);
                    }
                }, t;
            }();
        a.default = g;
    }, {
        "../GameBoxManager/SDK/shareCardListener_laya": 16,
        "./Analysis": 12,
        "./AtlasTools/AtlasTools": 13,
        "./DownloadManager/DownloadFileManager": 14
    }],
    16: [function (t, e, a) {
        "use strict";
        var i = {
            self_appid: "wx1543057c09127106",
            useLocalShareScheme: !0,
            shareText: "",
            shareImageUrl: "",
            TGA_setAppid: function (t) {
                console.log("该脚本方法执行前需确保正确设置过self_appid");
                var e = this.self_appid;
                return this.self_appid = t, !!this.checkAppid() || (this.self_appid = e, !1);
            },
            TQA_getForwardCopy: function (t, e) {
                if (this.checkAppid() && !Laya.Browser.window.tt && Laya.Browser.window.wx) {
                    this.useLocalShareScheme = !0, this.shareText = t, this.shareImageUrl = e;
                    var a = this;
                    a.TQA_checkForOpenGame();
                    var i = this.FORWARDCOPY_PATH + a.self_appid + this.SHARE_SETTING_PATH;
                    console.log("下载地址：", i), Laya.loader.load(i, Laya.Handler.create(this, function (t) {
                        t && (a.useLocalShareScheme = !1, a.shareText = t.data[0].text, a.shareImageUrl = t.data[0].imageUrl);
                    }));
                }
            },
            TQA_checkForOpenGame: function () {
                if (this.checkAppid() && !Laya.Browser.window.tt && Laya.Browser.window.wx) {
                    var t = wx.getLaunchOptionsSync();
                    if (!this.checkedOpenQuery) {
                        if (this.checkedOpenQuery = !0, t.scene == this.wxSceneValue.inFromShearCard || t.scene == this.wxSceneValue.openFromShearCard) {
                            e = this.CLICK_PATH + this.self_appid;
                            e = this.addTimestampArg(e), console.log("exposure urlPath", e), Laya.loader.load(e, Laya.Handler.create(this, function (t) {
                                t ? console.log("点击量接口访问成功!") : console.log("TQA_checkForOpenGame 访问点击量接口出错");
                            }));
                        }
                        if (t.scene == this.wxSceneValue.jumpFormOtherGame && t.referrerInfo && t.referrerInfo.appId) {
                            if (!t.referrerInfo.extraData.time) return void console.log("====>", t.referrerInfo);
                            this.setLocalStorage(this.EXTRADATA_KEY, t.referrerInfo.extraData.time);
                            var e = this.JUMP_VISIT_PATH + "sourceAppId=" + t.referrerInfo.appId + "&targetAppId=" + this.self_appid;
                            e = this.addTimestampArg(e), console.log("otherJumpSelf_open urlPath:", e), Laya.loader.load(e, Laya.Handler.create(this, function (t) {
                                t ? console.log("游戏跳转访问量接口访问成功!") : console.log("TQA_checkForOpenGame 访问访问量接口出错");
                            }));
                        }
                    }
                }
            },
            TQA_listenForShareCardClick: function (t) {
                if (this.checkAppid() && !Laya.Browser.window.tt && Laya.Browser.window.wx) {
                    if (t.scene == this.wxSceneValue.inFromShearCard || t.scene == this.wxSceneValue.openFromShearCard) {
                        e = this.CLICK_PATH + this.self_appid;
                        e = this.addTimestampArg(e), Laya.loader.load(e, Laya.Handler.create(this, function (t) {
                            t ? console.log("点击量接口访问成功!") : console.log("TQA_listenForShareCardClick 访问点击量接口出错");
                        }));
                    }
                    if (t.scene == this.wxSceneValue.jumpFormOtherGame && t.referrerInfo && t.referrerInfo.appId) {
                        if (!t.referrerInfo.extraData.time) return;
                        if (this.getLocalStorage(this.EXTRADATA_KEY) == t.referrerInfo.extraData.time) return;
                        this.setLocalStorage(this.EXTRADATA_KEY, t.referrerInfo.extraData.time);
                        var e = this.JUMP_VISIT_PATH + "sourceAppId=" + t.referrerInfo.appId + "&targetAppId=" + this.self_appid;
                        e = this.addTimestampArg(e), console.log("otherJumpSelf_onShow urlPath:", e), Laya.loader.load(e, Laya.Handler.create(this, function (t) {
                            t ? console.log("游戏跳转访问量接口访问成功!") : console.log("TQA_listenForShareCardClick 访问访问量接口出错");
                        }));
                    }
                }
            },
            TQA_jumpOtherGameRecord: function (t, e) {
                if (this.checkAppid()) if (!Laya.Browser.window.tt && Laya.Browser.window.wx && t && e) if ("string" == typeof t && "string" == typeof e) if (18 == e.length) if (this.checkArg(t) && this.checkArg(e)) if (t.length > this.EventKeyMaxLength) console.error('TQA_jumpOtherGameRecord "event" length over the maximum:' + this.EventKeyMaxLength); else {
                    var a = this.JUMP_CLICK_PATH + "sourceAppId=" + this.self_appid + "&targetAppId=" + e + "&event=" + t;
                    a = this.addTimestampArg(a), console.log("jumpOtherGameRecord  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log("目标游戏id：" + e + " 跳转点击量接口访问成功!") : console.log("TQA_jumpOtherGameRecord 访问跳转点击量接口出错");
                    }));
                } else console.error('jumpOtherGameRecord "event" or "targetId" include "-"'); else console.error('jumpOtherGameRecord "targetId" length is not 18'); else console.error('jumpOtherGameRecord "event" or "targetId" type is illegal , only accept string'); else console.error('jumpOtherGameRecord "event" or "targetId" is null');
            },
            TQA_videoClick: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_videoClick"), t.length > this.EventKeyMaxLength) console.error('TQA_videoClick "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_video_play;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_video_play);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("videoClick  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log("TQA_videoClick 访问视频点击量接口成功") : console.log("TQA_videoClick 访问视频点击量接口出错");
                    }));
                }
            },
            TQA_videoSuccess: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_videoSuccess"), t.length > this.EventKeyMaxLength) console.error('TQA_videoSuccess "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_video_success;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_video_success);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("videoSuccess  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log("TQA_videoSuccess 访问视频完整播放接口成功") : console.log("TQA_customEvent 访问视频完整播放接口出错");
                    }));
                }
            },
            TQA_shareClick: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_shareClick"), t.length > this.EventKeyMaxLength) console.error('TQA_shareClick "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_share_click;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_share_click);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("shareClick  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log(" 分享点击接口访问成功!") : console.log("TQA_customEvent 访问点击接口出错");
                    }));
                }
            },
            TQA_shareSuccess: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_shareSuccess"), t.length > this.EventKeyMaxLength) console.error('TQA_shareSuccess "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_share_success;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_share_success);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("shareSuccess  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log(" 分享成功接口访问成功!") : console.log("TQA_customEvent 访问分享成功接口出错");
                    }));
                }
            },
            TQA_shareLpClick: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_shareLpClick"), t.length > this.EventKeyMaxLength) console.error('TQA_shareLpClick "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_share_lp_click;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_share_lp_click);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("shareLpClick  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log(" 录屏分享点击接口访问成功!") : console.log("TQA_customEvent 访问录屏分享点击接口出错");
                    }));
                }
            },
            TQA_shareLpSuccess: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_shareLpSuccess"), t.length > this.EventKeyMaxLength) console.error('TQA_shareLpSuccess "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.wx_share_lp_success;
                    Laya.Browser.window.tt && (e = this.TQInterface.tt_share_lp_success);
                    var a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appid=" + this.self_appid + "&eventKey=" + t;
                    a = this.addTimestampArg(a), console.log("shareLpSuccess  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log(" 录屏分享成功接口访问成功!") : console.log("TQA_customEvent 访问录屏分享成功接口出错");
                    }));
                }
            },
            TQA_clickEvent: function (t) {
                if (this.checkAppid()) if (this.checkEventKey(t, "TQA_clickEvent"), t.length > this.EventKeyMaxLength) console.error('TQA_clickEvent "eventKey" length over the maximum:' + this.EventKeyMaxLength); else {
                    var e = this.TQInterface.click_event, a = this.TONGQUAPI_SERVER_ADDRESS + e + "?appId=" + this.self_appid + "&key=" + t;
                    a = this.addTimestampArg(a), console.log("TQA_clickEvent  url:", a), Laya.loader.load(a, Laya.Handler.create(this, function (t) {
                        t ? console.log(" 点击事件接口访问成功!") : console.log("TQA_clickEvent 访问点击事件接口出错");
                    }));
                }
            },
            TQA_customEvent: function (t, e) {
                if (this.checkAppid()) if (Laya.Browser.window.wx && t) if ("string" != typeof t || e && "string" != typeof e) console.error('customEvent "eventKey" or value type is illegal , only accept string'); else if (!this.checkArg(t) || e && !this.checkArg(e)) console.error('customEvent "eventKey" or "value" include "-"'); else if (t.length > this.EventKeyMaxLength) console.error('TQA_customEvent "eventKey" length over the maximum:' + this.EventKeyMaxLength); else if (e && e.length > this.EventKeyMaxLength) console.error('TQA_customEvent "value" length over the maximum:' + this.EventValueMaxLength); else {
                    var a = this.TQInterface.custom_event, i = this.TONGQUAPI_SERVER_ADDRESS + a + "?appId=" + this.self_appid + "&key=" + t;
                    e && (i += "&value=" + e), i = this.addTimestampArg(i), console.log("customEvent  url:", i),
                        Laya.loader.load(i, Laya.Handler.create(this, function (t) {
                            t ? console.log(" 自定义事件接口访问成功!") : console.log("TQA_customEvent 访问自定义事件接口出错");
                        }));
                } else console.error('customEvent "eventKey" is null');
            },
            FORWARDCOPY_PATH: "",//"https://www.7cgames.cn/GameRes/wechat/forwardCopy/",
            SHARE_SETTING_PATH: "",// "/forward.json",
            EXPOSURE_PATH: "",//"https://www.7cgames.cn/share/exposure?appId=",
            CLICK_PATH: "",//"https://www.7cgames.cn/share/click?appId=",
            TONGQUAPI_SERVER_ADDRESS: "",//"https://www.7cgames.cn/tongquApi/",
            JUMP_CLICK_PATH: "",// "https://www.7cgames.cn/tongquApi/game_jump_click?",
            JUMP_VISIT_PATH: "",// "https://www.7cgames.cn/tongquApi/game_jump_visit?",
            TQInterface: {
                jump_click: "game_jump_click",
                jump_visit: "game_jump_visit",
                wx_video_play: "game_wx_video_click",
                wx_video_success: "game_wx_video_success",
                tt_video_play: "game_tt_video_click",
                tt_video_success: "game_tt_video_success",
                wx_share_click: "game_wx_share_click",
                wx_share_success: "game_wx_share_success",
                tt_share_click: "game_tt_share_click",
                tt_share_success: "game_tt_share_success",
                wx_share_lp_click: "game_wx_screen_click",
                wx_share_lp_success: "game_wx_screen_success",
                tt_share_lp_click: "game_tt_screen_click",
                tt_share_lp_success: "game_tt_screen_success",
                click_event: "clickDistribution",
                custom_event: "eventStatistics",
                box_click: ""
            },
            EventKeyMaxLength: 60,
            EventValueMaxLength: 50,
            wxSceneValue: {
                inFromShearCard: 1007,
                openFromShearCard: 1008,
                jumpFormOtherGame: 1037
            },
            checkedOpenQuery: !1,
            checkAppid: function () {
                return null == this.self_appid || "" == this.self_appid ? (console.error("ShareCardListener_laya.js  self_appid is undefined"),
                    !1) : 18 != this.self_appid.length ? (console.error("ShareCardListener_laya.js  self_appid length is not 18"),
                        !1) : this.checkArg(this.self_appid) ? !(!Laya.Browser.window.wx && !Laya.Browser.window.tt) : (console.error('ShareCardListener_laya.js  self_appid include "-"'),
                            !1);
            },
            getTimestamp: function () {
                return String(new Date().valueOf());
            },
            addTimestampArg: function (t) {
                return t = t + "&timestamp=" + this.getTimestamp();
            },
            checkArg: function (t) {
                return !(t.indexOf("-") > -1);
            },
            checkEventKey: function (t, e) {
                Laya.Browser.window.wx && t ? "string" == typeof t ? this.checkArg(t) || console.error(e + ' "eventKey" include "-"') : console.error(e + ' "eventKey" type is illegal , only accept string') : console.error(e + ' "eventKey" is null');
            },
            getLocalStorage: function (t) {
                var e = laya.net.LocalStorage.getItem(t);
                if (null != e && void 0 != e && "" != e && "undefined" != e) a = JSON.parse(e); else var a = null;
                return a;
            },
            setLocalStorage: function (t, e) {
                null != e && void 0 != e ? laya.net.LocalStorage.setItem(t, JSON.stringify(e)) : laya.net.LocalStorage.setItem(t, null);
            },
            EXTRADATA_KEY: "ShareCardListenerResTime"
        };
        e.exports = i;
    }, {}],
    17: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../GameBoxManager"), n = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.isStartAni = !1, e.aniIndex = 0, e.gameAppids = [], e.iconCount = [], e.iconIndex = 0,
                    e.timer = 0, e.timeInterval = 0, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.boxBtn_Ani = this.owner, this.gameIcon = this.boxBtn_Ani.getChildByName("gameIcon");
            }, e.prototype.onStart = function () {
                var t = this;
                i.default.instance.boxBtn_Ani.push(function (e, a) {
                    t.setBoxBtn_Ani_Data(e, a);
                }), i.default.instance.isAtlasAnalysis && this.setBoxBtn_Ani_Data(i.default.instance.gameAppids_boxBtn_Ani, i.default.instance.iconCount_boxBtn_Ani),
                    this.boxBtn_Ani.on(Laya.Event.CLICK, this, this.boxBtn_Ani_Click);
            }, e.prototype.onUpdate = function () {
                this.isStartAni && (this.timer += Laya.timer.delta / 1e3, this.timer >= this.timeInterval && (this.timer = 0,
                    this.iconIndex++, this.iconIndex %= this.iconCount[this.aniIndex], this.gameIcon.skin = "GameBoxUI/gifImage_" + this.gameAppids[this.aniIndex] + "/" + String(this.iconIndex + 1) + ".png"));
            }, e.prototype.changAni = function () {
                var t = this;
                this.aniIndex++, this.aniIndex %= this.gameAppids.length, this.gameAppids[this.aniIndex] == i.default.instance._selfAppid && this.aniIndex++,
                    this.aniIndex %= this.gameAppids.length, this.iconIndex = 0, this.timeInterval = .03 * this.iconCount[this.aniIndex],
                    Laya.timer.once(4e3, this, function () {
                        t.changAni();
                    });
            }, e.prototype.boxBtn_Ani_Click = function () {
                console.log("跳转游戏id：", this.gameAppids[this.aniIndex]), i.default.instance.navigateToMiniProgram(this.gameAppids[this.aniIndex], "Video");
            }, e.prototype.setBoxBtn_Ani_Data = function (t, e) {
                var a = this;
                this.aniIndex = 0, this.iconIndex = 0, this.gameAppids = t, this.iconCount = e,
                    this.timeInterval = .03 * this.iconCount[0], this.isStartAni = !0, Laya.timer.once(4e3, this, function () {
                        a.changAni();
                    });
            }, e;
        }(Laya.Script);
        a.default = n;
    }, {
        "../GameBoxManager": 15
    }],
    18: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./UIExtand/ItemAni_BoxBtn_Auto"), n = t("../GameBoxManager"), s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.BKMode = !1, e.AutoUpdate = !0, e.updateTime = 4e3, e.AutoMove = !1, e.pos_Y = 0,
                    e.moveSpeed = 1.5, e.isMouseDown = !1, e.lastPosY = 0, e.moveDis = 0,
                    e.gameAppids = [], e.inArr = [], e.outArr = [], e.items = [], e.itemCtrls = [],
                    e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.boxBtn_Auto = this.owner;
                for (var t = 0, e = this.boxBtn_Auto.numChildren; t < e; t++) "item" == this.boxBtn_Auto.getChildAt(t).name && (this.items.push(this.boxBtn_Auto.getChildAt(t)),
                    this.itemCtrls.push(this.boxBtn_Auto.getChildAt(t).getComponent(i.default)));
            }, e.prototype.onStart = function () {
                var t = this;
                n.default.instance.boxBtn_Auto.push(function (e, a) {
                    t.setItemData(e, a);
                }), n.default.instance.isAtlasAnalysis && this.setItemData(n.default.instance.gameBoxData_Local, n.default.instance._selfAppid),
                    this.boxBtn_Auto.on(Laya.Event.CLICK, this, this.boxBtn_Auto_Click);
            }, e.prototype.onUpdate = function () {
                this.AutoMove && (this.boxBtn_Auto.centerY += this.moveSpeed, this.boxBtn_Auto.centerY > this.pos_Y && (this.moveSpeed = -1.5),
                    this.boxBtn_Auto.centerY < -this.pos_Y && (this.moveSpeed = 1.5), this.isMouseDown && (this.moveDis = Laya.stage.mouseY - this.lastPosY,
                        Math.abs(this.moveDis) > .1 && (this.moveDis > 50 && (this.moveDis = 50), this.moveDis < -50 && (this.moveDis = -50),
                            this.boxBtn_Auto.centerY += this.moveDis), this.lastPosY = Laya.stage.mouseY), this.boxBtn_Auto.centerY > this.pos_Y + 20 && (this.boxBtn_Auto.centerY = this.pos_Y + 20),
                    this.boxBtn_Auto.centerY < -this.pos_Y - 20 && (this.boxBtn_Auto.centerY = -this.pos_Y - 20));
            }, e.prototype.mouseDown_BoxBtn_Auto = function () {
                this.lastPosY = Laya.stage.mouseY, this.isMouseDown = !0;
            }, e.prototype.mouseUp_BoxBtn_Auto = function () {
                this.isMouseDown = !1;
            }, e.prototype.boxBtn_Auto_Click = function (t) {
                if (console.log("boxBtn_Auto click target：", t.target.name), "item" == t.target.name) {
                    var e = t.target.getChildByName("Appid").text, a = "";
                    a = this.AutoMove ? "baokuan" : "ReviveBoard", n.default.instance.navigateToMiniProgram(e, a),
                        this.AutoUpdate || this.updateAniConfig_Click(e);
                }
            }, e.prototype.changeShowOrder = function () {
                if (this.BKMode) {
                    for (var t = 0, e = this.inArr.length; t < e; t++) {
                        var a = Math.floor(Math.random() * this.inArr.length);
                        this.outArr.push(this.inArr.splice(a, 1)[0]);
                    }
                    this.inArr = [];
                    for (t = 0; t < this.outArr.length; t++) this.inArr.push(this.outArr[t]);
                    this.outArr = [];
                    for (t = 0; t < this.inArr.length; t++) this.itemCtrls[t].setAniConfig(this.getNum_Ani(this.gameAppids[this.inArr[t]]), this.gameAppids[this.inArr[t]]);
                }
            }, e.prototype.setItemData = function (t, e) {
                var a = this;

                if (this.BKMode && this.gameAppids.length % 2 != 0) {
                    var i = Math.floor(Math.random() * this.gameAppids.length / 2);
                    this.gameAppids.push(this.gameAppids[i]);
                }
                this.bkModeConfig(), this.getArrConfig(), this.autoMoveConfig();
                for (var n = 0; n < this.itemCtrls.length; n++) this.itemCtrls[n].setAniConfig(this.getNum_Ani(this.gameAppids[n]), this.gameAppids[n]);
                this.AutoUpdate && !this.BKMode && Laya.timer.once(this.updateTime, this, function () {
                    a.updateAniConfig_Time();
                });
            }, e.prototype.updateAniConfig_Time = function () {
                var t = this, e = 0;
                e = this.inArr.length > this.outArr.length ? this.outArr.length : this.inArr.length;
                for (n = 0; n < e; n++) {
                    var a = this.inArr.shift(), i = this.outArr.shift();
                    this.inArr.push(i), this.outArr.push(a);
                }
                for (var n = 0; n < this.inArr.length; n++) this.itemCtrls[n].setAniConfig(this.getNum_Ani(this.gameAppids[this.inArr[n]]), this.gameAppids[this.inArr[n]]);
                Laya.timer.once(this.updateTime, this, function () {
                    t.updateAniConfig_Time();
                });
            }, e.prototype.updateAniConfig_Click = function (t) {
                for (var e = 0, a = 0; a < this.items.length; a++) {
                    if (t == this.items[a].getChildByName("Appid").text) {
                        e = a;
                        break;
                    }
                }
                var i = this.inArr[e], n = this.outArr.shift();
                this.inArr.splice(e, 1, n), this.outArr.push(i);
                for (a = 0; a < this.inArr.length; a++) this.itemCtrls[a].setAniConfig(this.getNum_Ani(this.gameAppids[this.inArr[a]]), this.gameAppids[this.inArr[a]]);
            }, e.prototype.getNum_Ani = function (t) {

            }, e.prototype.getItem = function () {
                var t = new Laya.Image("GameBoxUI/midkuang.png");
                t.name = "item", t.mouseEnabled = !0, t.size(293, 370), this.boxBtn_Auto.addChild(t);
                var e = new Laya.Image();
                e.name = "gameIcon", e.size(261, 338), t.addChild(e), e.centerY = 0, e.centerX = 0;
                var a = new Laya.Image("GameBoxUI/midkuang.png");
                a.name = "iconMask", a.size(293, 370), t.addChild(a), a.centerY = 0, a.centerX = 0;
                var i = new Laya.Label();
                return i.name = "Appid", t.addChild(i), i.visible = !1, t;
            }, e.prototype.getArrConfig = function () {
                for (t = 0; t < this.items.length; t++) this.inArr[t] = t;
                for (var t = 0, e = this.gameAppids.length - this.inArr.length; t < e; t++) this.outArr[t] = this.inArr.length + t;
                console.log(this.inArr, this.outArr);
            }, e.prototype.autoMoveConfig = function () {
                this.AutoMove && (this.pos_Y = this.boxBtn_Auto.height * this.boxBtn_Auto.scaleY - this.boxBtn_Auto.scene.height,
                    this.pos_Y < 0 && (this.pos_Y = 0), this.pos_Y /= 2, this.boxBtn_Auto.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown_BoxBtn_Auto),
                    this.boxBtn_Auto.on(Laya.Event.MOUSE_UP, this, this.mouseUp_BoxBtn_Auto), this.boxBtn_Auto.on(Laya.Event.MOUSE_OUT, this, this.mouseUp_BoxBtn_Auto));
            }, e.prototype.bkModeConfig = function () {
                if (this.BKMode && this.items.length < this.gameAppids.length) {
                    for (var t = this.items.length; t < this.gameAppids.length; t++) {
                        var e = this.getItem();
                        t % 2 == 0 && (e.top = 390 * Math.floor(t / 2), e.left = 0), t % 2 == 1 && (e.top = 390 * Math.floor(t / 2),
                            e.right = 0), this.items.push(e), this.itemCtrls.push(e.addComponent(i.default));
                    }
                    var a = this.gameAppids.length / 2;
                    a = a > Math.floor(a) ? Math.floor(a) + 1 : Math.floor(a), this.boxBtn_Auto.height = 370 * a + 20 * (a - 1);
                }
            }, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../GameBoxManager": 15,
        "./UIExtand/ItemAni_BoxBtn_Auto": 21
    }],
    19: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../GameBoxManager"), n = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.AutoShowNum = !0, e.showNum = -1, e.items = [], e.isMove = !1, e.speed = .5,
                    e.posX = 0, e.width_Pos = 0, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.guessYouLikeUI = this.owner, this.itemBox = this.guessYouLikeUI.getChildByName("ItemBox");
                for (var t = 0; t < this.itemBox.numChildren; t++) this.items.push(this.itemBox.getChildAt(t));
            }, e.prototype.onStart = function () {
                var t = this;
                i.default.instance.guessYouLikeUI.push(function (e, a) {
                    t.setItemData(e, a);
                }), i.default.instance.isAtlasAnalysis && this.setItemData(i.default.instance.gameBoxData_Local, i.default.instance._selfAppid),
                    this.itemBox.on(Laya.Event.CLICK, this, this.itemBox_Click);
            }, e.prototype.onUpdate = function () {
                if (this.isMove) {
                    this.items[0].x >= 10 && (this.speed = -.5), this.items[0].x <= -this.posX && (this.speed = .5),
                        this.items[0].x += this.speed;
                    for (var t = 1; t < this.items.length; t++) this.items[t].x = this.items[t - 1].x + (this.width_Pos + 10);
                }
            }, e.prototype.itemBox_Click = function (t) {
                if (console.log("************", t.target.name), "item" == t.target.name) {
                    var e = t.target.getChildByName("Appid").text;
                    i.default.instance.navigateToMiniProgram(e, "GuessYouLike");
                }
            }, e.prototype.setItemData = function (t, e) {
                var a = 0, i = 0;
                i = t && t.Appid ? this.AutoShowNum ? t.Appid.length : t.Appid.length >= 10 ? 10 : t.Appid.length : 10;
                for (s = 0; s < t.Appid.length; s++) t.Appid[s] == e && i--;
                this.width_Pos = 166, -1 != this.showNum && (this.width_Pos = (750 - this.showNum - 1) / this.showNum),
                    this.guessYouLikeUI.height = this.width_Pos + 30, this.posX = i * (this.width_Pos + 10) - 750 + 10,
                    a = i;
                for (s = 0; s < i; s++) {
                    var n = this.getItem();
                    this.items.push(n), n.x = s * (n.width + 10);
                }
                for (var s = 0; s < t.Appid.length && !(i <= 0); s++) t.Appid[s] != e && (this.items[a - i].getChildByName("gameIcon").skin = "GameBoxUI/icon/" + t.Appid[s] + ".png",
                    this.items[a - i].getChildByName("Appid").text = t.Appid[s], i--);
                this.isMove = !0;
            }, e.prototype.getItem = function () {
                var t = 166, e = 166;
                -1 != this.showNum && (t = (750 - this.showNum - 1) / this.showNum, e = (750 - this.showNum - 1) / this.showNum);
                var a = new Laya.Image("GameBoxUI/box.png");
                a.name = "item", a.mouseEnabled = !0, a.size(t, e), a.centerY = 0, a.x = 0, this.itemBox.addChild(a);
                var i = new Laya.Image();
                i.name = "gameIcon", i.size(t - 6, e - 6), a.addChild(i), i.centerY = 0, i.centerX = 0;
                var n = new Laya.Image("GameBoxUI/box.png");
                n.name = "iconMask", n.size(t, e), a.addChild(n), n.centerY = 0, n.centerX = 0;
                var s = new Laya.Label();
                return s.name = "Appid", a.addChild(s), s.visible = !1, a;
            }, e;
        }(Laya.Script);
        a.default = n;
    }, {
        "../GameBoxManager": 15
    }],
    20: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../GameBoxManager"), n = function (t) {
            function e() {
                var a = t.call(this) || this;
                return e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.sideFrameUI = this.owner, this.uiBox = this.sideFrameUI.getChildByName("sideFrameBox"),
                    this.sideFrameBg = this.uiBox.getChildByName("sideFrameBg"), this.sideList = this.sideFrameBg.getChildByName("sideList"),
                    this.ocBtn = this.sideFrameBg.getChildByName("ocBtn");
            }, e.prototype.onStart = function () {
                var t = this;
                i.default.instance.sideFrameUICtrl.setSideListData = function (e, a, i) {
                    t.setSideListData(e, a, i);
                }, this.sideList.vScrollBarSkin = "", this.sideFrameUI.skin = "", this.sideFrameUI.mouseThrough = !0,
                    i.default.instance.isAtlasAnalysis && this.setSideListData(i.default.instance.gameBoxData_Local, i.default.instance.showCount_SideFrame, i.default.instance._selfAppid),
                    this.sideFrameBg.on(Laya.Event.CLICK, this, this.sideFrameBg_Click);
            }, e.prototype.sideFrameBg_Click = function (t) {
                switch (console.log("SideFrameUI click target：", t.target.name), t.target.name) {
                    case "ocBtn":
                        this.ocBtn_Click();
                        break;

                    case "gameIcon":
                        this.gameIcon_Click(t);
                }
            }, e.prototype.gameIcon_Click = function (t) {
                var e = t.target.parent.getChildByName("Appid");
                console.log("跳转游戏id：", e.text), i.default.instance.navigateToMiniProgram(e.text, "Push");
            }, e.prototype.ocBtn_Click = function () {
                var t = this;
                this.sideFrameBg.x != -this.sideFrameBg.width ? (this.ocBtn.disabled = !0, Laya.Tween.to(this.sideFrameBg, {
                    x: -this.sideFrameBg.width
                }, 300, null, Laya.Handler.create(this, function () {
                    t.ocBtn.disabled = !1, t.sideFrameUI.skin = "", t.sideFrameUI.mouseThrough = !0;
                }))) : (this.ocBtn.disabled = !0, this.sideFrameUI.skin = "GameBoxUI/bg.png", this.sideFrameUI.mouseThrough = !1,
                    Laya.Tween.to(this.sideFrameBg, {
                        x: 0
                    }, 300, null, Laya.Handler.create(this, function () {
                        t.ocBtn.disabled = !1;
                    })));
            }, e.prototype.setSideListData = function (t, e, a) {
                for (var i = [], n = e, s = 0; s < t.Appid.length && !(n <= 0); s++) t.Appid[s] != a && (n--,
                    i.push({
                        gameIcon: {
                            skin: "GameBoxUI/icon/" + t.Appid[s] + ".png"
                        },
                        gameName: {
                            text: t.gameName[s]
                        },
                        Appid: {
                            text: t.Appid[s]
                        }
                    }));
                for (s = 0; s < 12 - i.length; s++) i.push(i[s]);
                this.sideList.dataSource = i, this.sideList.refresh();
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = n;
    }, {
        "../GameBoxManager": 15
    }],
    21: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.aniIndex = 0, e.maxAniIndex = 0, e.timer = 0, e.timeInterval = 0, e.aniId = "",
                    e.isStartAni = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.item = this.owner, this.gameIcon = this.item.getChildByName("gameIcon"), this.Appid = this.item.getChildByName("Appid");
            }, e.prototype.onUpdate = function () {
                this.isStartAni && (this.timer += Laya.timer.delta / 1e3, this.timer >= this.timeInterval && (this.timer = 0,
                    this.aniIndex++, this.aniIndex %= this.maxAniIndex, this.gameIcon.skin = "GameBoxUI/longImage_" + this.aniId + "/" + String(this.aniIndex + 1) + ".png"));
            }, e.prototype.setAniConfig = function (t, e) {
                this.aniIndex = 0, this.maxAniIndex = t, this.timer = 0, this.timeInterval = .02 * this.maxAniIndex,
                    this.aniId = e, this.Appid.changeText(e), this.isStartAni = !0;
            }, e;
        }(Laya.Script);
        a.default = i;
    }, {}],
    22: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../3DScript/SceneControl"), n = t("../WeChatManager"), s = t("../DataManager"), o = t("../3DScript/MaterialCtrl"), l = t("../GameBoxManager/GameBoxManager"), r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.length = 0, e.isload = !1, e.num = 0, e.isloading = !1, e.isyujiazai = !1,
                    e.isloadres = !1, e.isload3D = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                this.subpack(), this.length = 0, this.LoadPanel = this.owner, this.loadBg = this.LoadPanel.getChildAt(0),
                    this.pro = this.loadBg.getChildByName("pro"), this.bar = this.pro.getChildByName("bar"),
                    this.bar_test = this.bar.texture, this.one = this.loadBg.getChildByName("loading").getChildByName("one"),
                    this.two = this.loadBg.getChildByName("loading").getChildByName("two"), this.three = this.loadBg.getChildByName("loading").getChildByName("three");
                platform.getInstance().puzzlegamestartup("Color-Fill", () => {
                    l.default.instance.initGameBoxConfig(), Laya.loader.load("test/MainScene.scene", Laya.Handler.create(this, this.complete)),
                        // Laya.Browser.onWeiXin && (n.default.CreateInterAd(), n.default.CreateBanner(), n.default.CreateRewardAd()),
                        // Laya.Browser.onWeiXin ? Laya.Browser.onAndroid ? Laya.loader.load("data/data.json", Laya.Handler.create(this, function (e) {
                        //     console.log(e), i.default.Instance().json = e, t.isload3D = !0;
                        // })) : Laya.Browser.onIOS && Laya.loader.load("data/dataIos.json", Laya.Handler.create(this, function (e) {
                        //     i.default.Instance().json = e, t.isload3D = !0;
                        // })) : 
                        window.yad.scale(0.7, 0.7);
                    window.yad.right = 0;
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Color-Fill-musicState") ?
                        JSON.parse(Laya.LocalStorage.getItem("Color-Fill-musicState")) : false;
                    Laya.stage.addChild(window.scrollList);
                    Laya.stage.addChild(window.box_adTwo);
                    window.box_adTwo.bottom = 400;
                    window.box_adTwo.setSpaceX(200);
                    window.scrollList.bottom = 100;
                    window.scrollList.setSize(200, 200, true);
                    window.scrollList.visible = window.box_adTwo.visible = false;
                    Laya.loader.load("data/data.json", Laya.Handler.create(this, function (e) {
                        console.log(e), i.default.Instance().json = e, t.isload3D = !0;
                    }));
                })

            }, e.prototype.complete = function () {
                console.log("场景加载完毕"), this.isyujiazai = !0;
            }, e.prototype.subpack = function () {
                var t = this;
                (this.isloading = !0, new o.default());
            }, e.prototype.onUpdate = function () {
                0 == this.isload && (this.length >= 1 ? (Laya.Scene.open("test/MainScene.scene"),
                    platform.getInstance().hideSplash(), platform.getInstance().showBanner(),
                    this.isload = !0) : this.length <= .8 ? (this.length += .04,
                        this.bar.texture = Laya.Texture.createFromTexture(this.bar_test, 0, 0, this.bar_test.width * this.length, this.bar_test.height))
                    : 1 == this.isyujiazai && 1 == this.isloading && (this.length += .04,
                        this.bar.texture = Laya.Texture.createFromTexture(this.bar_test, 0, 0, this.bar_test.width * this.length, this.bar_test.height)));
            }, e;
        }(Laya.Script);
        a.default = r;
    }, {
        "../3DScript/MaterialCtrl": 5,
        "../3DScript/SceneControl": 10,
        "../DataManager": 11,
        "../GameBoxManager/GameBoxManager": 15,
        "../WeChatManager": 43
    }],
    23: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../UIScript/GameUI"), n = t("../WeChatManager"), s = t("../DataManager"), o = t("../3DScript/PlayerCtrl"), l = t("./BuryingPointCtr"), r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.cubeskin = ["ball/1.png", "ball/2.png", "ball/3.png", "ball/4.png", "ball/5.png", "ball/6.png", "ball/7.png", "ball/8.png", "ball/9.png", "ball/10.png", "ball/11.png", "ball/12.png", "ball/13.png", "ball/14.png", "ball/15.png", "ball/16.png"],
                    e.isskin = !1, e.skinnum = 0, e.str = "", e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                e.instance = this, this.AddDiamondPanel = this.owner, this.addbox = this.AddDiamondPanel.getChildAt(0),
                    this.diamond_bg = this.addbox.getChildByName("diamond"), this.skin_bg = this.addbox.getChildByName("skinbg"),
                    this.back_bt = this.addbox.getChildByName("back_bt"), this.close_bt = this.addbox.getChildByName("close_bt"),
                    this.video_get = this.diamond_bg.getChildByName("video_get"), this.skinkuang = this.skin_bg.getChildByName("skinkuang"),
                    this.skinget = this.skin_bg.getChildByName("get_bt"), this.stars = this.addbox.getChildByName("star"),
                    this.gou_bt = this.addbox.getChildByName("tips").getChildByName("gou_bt"), this.gou = this.addbox.getChildByName("tips").getChildByName("gou"),
                    this.tips = this.addbox.getChildByName("tips"), this.video_get.on(Laya.Event.CLICK, this, function () {
                        n.default.showVideoAd(function () {
                            s.default.diamond += 20, i.default.instance.startdiamondlabel.text = "" + s.default.diamond,
                                i.default.instance.diamondlabel.text = "" + s.default.diamond, i.default.instance.shop_label.text = "" + s.default.diamond,
                                t.showAddui(!1), s.default.show("Diamond +20"), l.default.get_video_coinPoint();
                            Laya.stage.event("refreshCoin");
                        }, null, "videoGetDiamond");
                    }), this.skinget.on(Laya.Event.CLICK, this, function () {
                        n.default.showVideoAd(function () {
                            t.showAddui(!1);
                            for (var e = 0; e < s.default.shop.length; e++) if (2 == s.default.shop[e]) {
                                s.default.shop[e] = 1;
                                break;
                            }
                            s.default.shop[t.skinnum] = 2, s.default.skindate[t.skinnum] = new Date(), s.default.SaveData(),
                                s.default.show("Owned"), t.isskin = !1, l.default.get_video_skinPoint();
                        }, null, "video_skinget");
                    }), this.back_bt.on(Laya.Event.CLICK, this, function () {
                        t.showAddui(!1);
                    }), this.close_bt.on(Laya.Event.CLICK, this, function () {
                        t.showAddui(!1);
                    }), this.gou_bt.on(Laya.Event.CLICK, this, function () {
                        1 == t.gou.visible ? (t.gou.visible = !1, t.back_bt.visible = !0) : (t.gou.visible = !0,
                            t.back_bt.visible = !1);
                    });
            }, e.prototype.showAddui = function (t) {
                var e = this;
                if (t) {
                    n.default.ShowBanner();
                    for (var a = !1, r = 0; r < s.default.skindate.length; r++) if (null != s.default.skindate[r]) {
                        a = !0;
                        break;
                    }
                    if (this.isskin = !a, this.isskin) {
                        if (this.JudgeHaveNOskin()) {
                            for (var h = [], r = 0; r < s.default.shop.length; r++) 0 == s.default.shop[r] && h.push(r);
                            var d = h.length - 1, c = Math.floor(Math.random() * d);
                            this.skinkuang.skin = this.cubeskin[h[c]], this.skinnum = h[c];
                        } else this.isskin = !1, this.showAddui(!0);
                        this.diamond_bg.visible = !1, this.skin_bg.visible = !0, this.AddDiamondPanel.visible = !0,
                            i.default.instance.Breath(this.skinget);
                    } else this.diamond_bg.visible = !0, this.skin_bg.visible = !1, this.AddDiamondPanel.visible = !0,
                        i.default.instance.Breath(this.video_get);
                    i.default.instance.isRandom = !1, i.default.instance.RandomStar(this.stars), Laya.timer.once(400, this, function () {
                        i.default.instance.RandomStar(e.stars);
                    }), Laya.timer.once(800, this, function () {
                        i.default.instance.RandomStar(e.stars);
                    }), s.default.isopen ? (this.back_bt.visible = !1, this.gou.visible = !0, this.tips.visible = !0,
                        this.close_bt.visible = !1) : (this.close_bt.visible = !0, this.tips.visible = !1,
                            this.back_bt.visible = !1);
                } else this.skin_bg.visible ? l.default.close_get_skinPoint() : this.diamond_bg.visible && l.default.close_get_coinPoint(),
                    i.default.instance.isRandom = !0, this.AddDiamondPanel.visible = !1, Laya.Tween.clearTween(this.video_get),
                    this.back_bt.visible = !1, this.gou.visible = !0, o.default.instance.isgetmoney = !1,
                    this.diamond_bg.visible = !1, this.skin_bg.visible = !1, Laya.Tween.clearTween(this.skinget),
                    "win" == this.str ? (o.default.instance.IsBoxOrTable(), this.str = "") : "fail" == this.str && (i.default.instance.Lose(),
                        this.str = "");
            }, e.prototype.JudgeHaveNOskin = function () {
                for (var t = !1, e = 0; e < s.default.shop.length; e++) if (0 == s.default.shop[e]) {
                    t = !0;
                    break;
                }
                return !!t;
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = r;
    }, {
        "../3DScript/PlayerCtrl": 9,
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43,
        "./BuryingPointCtr": 24
    }],
    24: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function () {
            function t() { }
            return t.game_videoPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("game_video", {});
            }, t.rigistertwoPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_rigister_two", {});
            }, t.rigisteronePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_rigister_one", {});
            }, t.rigister_againPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_rigister_again", {});
            }, t.rigister_againclosePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_rigister_close_again", {});
            }, t.turntable_closePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("turntable_close", {});
            }, t.video_turntablesPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_turntables", {});
            }, t.game_startPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("game_start", {});
            }, t.game_levelsPoint = function (t) {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("game_levels", {
                    level: t
                });
            }, t.click_skipbtnPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("click_skipbtn", {});
            }, t.over_skipbtnPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("click_skipbtn", {});
            }, t.video_skinusePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_skinuse", {});
            }, t.close_skinusePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_skinuse", {});
            }, t.video_lifePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_life", {});
            }, t.close_lifePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_life", {});
            }, t.video_getmanycoinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_getmanycoin", {});
            }, t.share_getmanycoinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("share_getmanycoin", {});
            }, t.click_over_nextPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("click_over_next", {});
            }, t.video_over_next = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_over_next", {});
            }, t.video_niceskin = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_niceskin", {});
            }, t.close_niceskinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_niceskin", {});
            }, t.video_boxPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("video_box", {});
            }, t.close_boxPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_box", {});
            }, t.get_video_skinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("get_video_skin", {});
            }, t.close_get_skinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_get_skin", {});
            }, t.get_video_coinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("get_video_coin", {});
            }, t.close_get_coinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("close_get_coin", {});
            }, t.main_video_getcoinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("main_video_getcoin", {});
            }, t.shop_video_getcoinPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("shop_video_getcoin", {});
            }, t.task_video_againgetPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("task_video_againget", {});
            }, t.game_sharePoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("game_share", {});
            }, t.game_lookvideoPoint = function () {
                Laya.Browser.window.tt && tt.reportAnalytics && tt.reportAnalytics("game_lookvideo", {});
            }, t;
        }();
        a.default = i;
    }, {}],
    25: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.scaleTime = 100, e;
            }
            return __extends(e, t), e.prototype.onEnable = function () { }, e.prototype.onDisable = function () { },
                e.prototype.onAwake = function () {
                    this.btn = this.owner, this.btn.anchorX = this.btn.anchorY = .5, this.btn.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall),
                        this.btn.on(Laya.Event.MOUSE_UP, this, this.scaleBig), this.btn.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
                }, e.prototype.scaleBig = function () {
                    Laya.Tween.to(this.btn, {
                        scaleX: 1,
                        scaleY: 1
                    }, this.scaleTime);
                }, e.prototype.scaleSmall = function () {
                    Laya.Tween.to(this.btn, {
                        scaleX: 0.9,
                        scaleY: 0.9
                    }, this.scaleTime);
                }, e;
        }(Laya.Script);
        a.default = i;
    }, {}],
    26: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../UIScript/GameUI"), n = t("../DataManager"), s = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.coinprefabs = [], a.ischange = !1, e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.coinparent = this.owner;
            }, e.prototype.creatCoin = function (t) {
                var e = this, a = null;
                this.coinprefabs.length > 0 ? ((a = this.coinprefabs.pop()).x = t.x, a.y = t.y,
                    this.coinparent.addChild(a)) : ((a = new Laya.Image()).loadImage("Main/diamond.png", Laya.Handler.create(this, function () {
                        e.coinparent.addChild(a), a.x = t.x, a.y = t.y;
                    })), a.anchorX = .5, a.anchorY = .5, a.scaleX = .7, a.scaleY = .7), Laya.Tween.to(a, {
                        x: i.default.instance.diamondbg.x,
                        y: i.default.instance.diamondbg.y
                    }, 500, null, Laya.Handler.create(this, function () {
                        e.RecoverCoin(a), n.default.diamond += 1, n.default.overdiamond += 1, i.default.instance.diamondlabel.text = "" + n.default.diamond,
                            e.ischange || (e.ischange = !0, Laya.Tween.to(i.default.instance.diamondbg, {
                                scaleX: 1.3,
                                scaleY: 1.3
                            }, 100, null, Laya.Handler.create(e, function () {
                                Laya.Tween.to(i.default.instance.diamondbg, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 100, null, Laya.Handler.create(e, function () {
                                    e.ischange = !1;
                                    Laya.stage.event("refreshCoin");
                                }));
                            })));
                        Laya.stage.event("refreshCoin");
                    }));
            }, e.prototype.RecoverCoin = function (t) {
                this.coinprefabs.push(t), t.removeSelf();
            }, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../DataManager": 11,
        "../UIScript/GameUI": 35
    }],
    27: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../UIScript/GameUI"), n = t("../WeChatManager"), s = t("../DataManager"), o = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.coins = 0, e.str = "", e.clickindex = 0, e.isclick = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                e.instance = this, this.GiftBagPanel = this.owner, this.bag = this.GiftBagPanel.getChildByName("bag"),
                    this.stars = this.bag.getChildByName("star"), this.diamondnum = this.bag.getChildByName("diamondnum"),
                    this.open_bt = this.bag.getChildByName("open_bt"), this.close_bt = this.bag.getChildByName("close_bt"),
                    this.gou = this.bag.getChildByName("video_tip").getChildByName("gou"), this.gou_bt = this.bag.getChildByName("video_tip").getChildByName("gou_bt"),
                    this.newclick = this.GiftBagPanel.getChildByName("newclick"), this.openclick = this.newclick.getChildByName("openclick"),
                    this.bar = this.newclick.getChildByName("pro").getChildAt(0), this.gou_bt.on(Laya.Event.CLICK, this, function () {
                        0 == t.gou.visible ? (t.gou.visible = !0, t.close_bt.visible = !1) : (t.gou.visible = !1,
                            t.close_bt.visible = !0);
                    }), this.open_bt.on(Laya.Event.CLICK, this, function () {
                        n.default.showVideoAd(function () {
                            s.default.diamond += t.coins, i.default.instance.startdiamondlabel.text = "" + s.default.diamond,
                                i.default.instance.diamondlabel.text = "" + s.default.diamond, i.default.instance.shop_label.text = "" + s.default.diamond,
                                s.default.show("Coin +" + String(t.coins)), t.showGifBagUI(!1);
                            Laya.stage.event("refreshCoin");
                        }, null, "getgifdiamond");
                    }), this.close_bt.on(Laya.Event.CLICK, this, function () {
                        t.showGifBagUI(!1);
                    }), this.openclick.on(Laya.Event.CLICK, this, function () {
                        t.proInit();
                    });
            }, e.prototype.showGifBagUI = function (t) {
                void 0 === t && (t = !1), this.GiftBagPanel.visible = t, t ? (this.isclick = !1,
                    this.newclick.visible = !0, this.bag.visible = !1, this.bar.width = .1, s.default.isopen ? (n.default.HideBanner(),
                        Laya.Browser.height / Laya.Browser.width >= 2.1 ? this.openclick.centerY = 690 : this.openclick.centerY = 560) : (n.default.ShowBanner(),
                            this.openclick.centerY = 156)) : (this.newclick.visible = !0, this.bag.visible = !1,
                                this.bar.width = .1, i.default.instance.isRandom = !0, this.close_bt.visible = !1,
                                this.gou.visible = !0, this.open_bt.skin = "GiftBag/open_bt.png", Laya.Tween.clearTween(this.open_bt),
                                "win" == this.str ? (i.default.instance.GameWin(), this.str = "") : "fail" == this.str && (i.default.instance.Lose(),
                                    this.str = ""));
            }, e.prototype.showBag = function () {
                var t = this;
                this.newclick.visible = !1, this.bag.visible = !0, this.bar.width = .1, i.default.instance.isRandom = !1,
                    i.default.instance.RandomStar(this.stars), Laya.timer.once(400, this, function () {
                        i.default.instance.RandomStar(t.stars);
                    }), Laya.timer.once(800, this, function () {
                        i.default.instance.RandomStar(t.stars);
                    });
                Math.random() <= 5.5 ? (this.coins = 20, this.diamondnum.skin = "GiftBag/20.png") : (this.coins = 40,
                    this.diamondnum.skin = "GiftBag/40.png"), i.default.instance.Breath(this.open_bt);
            }, e.prototype.proInit = function () {
                var t = this;
                if (Laya.timer.clearAll(this), this.bar.width += 88, this.bar.width / 630 >= .6 && s.default.isopen && 0 == this.isclick && (this.isclick = !0,
                    n.default.ShowBanner(), this.openclick.centerY = 156), this.bar.width >= 630) this.showBag(); else {
                    var e = this.bar.width;
                    Laya.timer.frameLoop(1, this, function () {
                        (e -= 1) <= .1 ? (e = .1, t.bar.width = e, Laya.timer.clearAll(t)) : t.bar.width = e;
                    });
                }
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = o;
    }, {
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43
    }],
    28: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("../UIScript/GameUI"), s = t("../3DScript/PlayerCtrl"), o = t("../WeChatManager"),
            l = t("./AddDiamondCtrl"), r = t("./BuryingPointCtr"), h = function (t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.cubeskin = ["ball/1.png", "ball/2.png", "ball/3.png", "ball/4.png", "ball/5.png", "ball/6.png", "ball/7.png", "ball/8.png", "ball/9.png", "ball/10.png", "ball/11.png", "ball/12.png", "ball/13.png", "ball/14.png", "ball/15.png", "ball/16.png"],
                        e.usenum = 0, e.isbreath = !1, e.isallskin = !1, e.str = "", e;
                }
                return __extends(e, t), e.prototype.onAwake = function () {
                    var t = this;
                    e.instance = this, this.SkingoodPanel = this.owner, this.goodskin_bg = this.SkingoodPanel.getChildByName("skinhead"),
                        this.gooduse_bt = this.SkingoodPanel.getChildByName("skingood_get"), this.goodclose_bt = this.SkingoodPanel.getChildByName("goodclose_bt"),
                        this.goodvideotip = this.SkingoodPanel.getChildByName("videotip"), this.gooduse_bt.on(Laya.Event.CLICK, this, function () {
                            o.default.showVideoAd(function () {
                                i.default.video_num += 1, i.default.SaveData(), t.GetSkin(), r.default.video_niceskin();
                            }, null, "video_xiandingskin")
                        }), this.goodclose_bt.on(Laya.Event.CLICK, this, function () {
                            t.goodclose_bt.visible = !1, t.showGoodskinUI(!1), r.default.close_niceskinPoint();
                        }), Laya.LocalStorage.getItem("Color-Fill-useskinnum") ? (this.usenum = Number(Laya.LocalStorage.getItem("Color-Fill-useskinnum")),
                            this.goodskin_bg.skin = this.cubeskin[this.usenum]) : (this.usenum = 0, this.RandomInit());
                }, e.prototype.showGoodskinUI = function (t) {
                    var e = this;
                    this.SkingoodPanel.visible = t, t ? (o.default.ShowBanner(), n.default.instance.Breath(this.gooduse_bt),
                        Laya.timer.once(3e3, this, function () {
                            e.goodclose_bt.visible = !0;
                        })) : (Laya.Tween.clearTween(this.gooduse_bt), "win" == this.str ? (s.default.instance.IsBoxOrTable(),
                            this.str = "") : "fail" == this.str && (l.default.instance.str = "fail", l.default.instance.showAddui(!0),
                                this.str = ""));
                }, e.prototype.skinInit = function () {
                    if (0 != i.default.video_num) for (t = 0; t < i.default.video_num; t++) this.goodvideotip.getChildAt(t).skin = "Goodskin/goodbar.png"; else for (var t = 0; t < 3; t++) this.goodvideotip.getChildAt(t).skin = "Goodskin/goodpro.png";
                }, e.prototype.GetSkin = function () {
                    if (0 != i.default.video_num) {
                        for (t = 0; t < i.default.video_num; t++) this.goodvideotip.getChildAt(t).skin = "Goodskin/goodbar.png";
                        if (3 == i.default.video_num) {
                            for (t = 0; t < i.default.shop.length; t++) if (2 == i.default.shop[t]) {
                                i.default.shop[t] = 1;
                                break;
                            }
                            i.default.shop[this.usenum] = 2, this.goodclose_bt.visible = !1, i.default.video_num = 0,
                                i.default.SaveData(), this.GetSkin(), i.default.show("Received"), this.showGoodskinUI(!1);
                        }
                    } else for (var t = 0; t < 3; t++) this.goodvideotip.getChildAt(t).skin = "Goodskin/goodpro.png";
                }, e.prototype.RandomInit = function () {
                    if (this.JudgeHaveNOskin()) {
                        for (var t = [], e = 0; e < i.default.shop.length; e++) 0 == i.default.shop[e] && t.push(e);
                        var a = t.length - 1, n = Math.floor(Math.random() * a);
                        this.goodskin_bg.skin = this.cubeskin[t[n]], this.usenum = t[n], Laya.LocalStorage.setItem("Color-Fill-useskinnum", String(this.usenum)),
                            this.isallskin = !1;
                    } else this.isallskin = !0;
                }, e.prototype.goodUseInit = function () {
                    1 == this.isallskin ? "win" == this.str ? this.showGoodskinUI(!1) : "fail" == this.str && this.showGoodskinUI(!1) : 2 == i.default.shop[this.usenum] || 1 == i.default.shop[this.usenum] ? (i.default.video_num = 0,
                        i.default.SaveData(), this.RandomInit(), this.isallskin ? this.showGoodskinUI(!1) : this.showGoodskinUI(!0)) : this.showGoodskinUI(!0);
                }, e.prototype.JudgeHaveNOskin = function () {
                    for (var t = !1, e = 0; e < i.default.shop.length; e++) if (0 == i.default.shop[e]) {
                        t = !0;
                        break;
                    }
                    return !!t;
                }, e.instance = null, e;
            }(Laya.Script);
        a.default = h;
    }, {
        "../3DScript/PlayerCtrl": 9,
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43,
        "./AddDiamondCtrl": 23,
        "./BuryingPointCtr": 24
    }],
    29: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("../WeChatManager"), s = t("../UIScript/GameUI"), o = t("../UIScript/StartManage"), l = t("../3DScript/MaterialCtrl"), r = t("./BuryingPointCtr"), h = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.cubeskin = ["ball/1.png", "ball/2.png", "ball/3.png", "ball/4.png", "ball/5.png", "ball/6.png", "ball/7.png", "ball/8.png", "ball/9.png", "ball/10.png", "ball/11.png", "ball/12.png", "ball/13.png", "ball/14.png", "ball/15.png", "ball/16.png"],
                    a.usenum = 0, a.isusetip = !0, a.isbreath = !1, e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                this.SkinusePanel = this.owner, this.use_bt = this.SkinusePanel.getChildByName("skinuse_bt"),
                    this.skin_bg = this.SkinusePanel.getChildByName("skin"), this.timeruse_bt = this.SkinusePanel.getChildByName("timeuse_bt"),
                    this.dian_bt = this.SkinusePanel.getChildByName("dian"), this.dianui = this.dian_bt.getChildAt(0).getChildByName("dian"),
                    this.diantip = this.dian_bt.getChildAt(0).getChildByName("tip"), this.close_bt = this.SkinusePanel.getChildByName("close_bt"),
                    this.dian_bt.on(Laya.Event.CLICK, this, function () {
                        1 == t.dianui.visible ? (t.dianui.visible = !1, "Main/novideo.png" == t.diantip.skin ? t.timeruse_bt.skin = "Main/yesuse.png" : t.timeruse_bt.skin = "Main/nouse.png") : (t.dianui.visible = !0,
                            "Main/novideo.png" == t.diantip.skin ? t.timeruse_bt.skin = "Main/nouse.png" : t.timeruse_bt.skin = "Main/yesuse.png");
                    }), this.close_bt.on(Laya.Event.CLICK, this, function () {
                        o.default.instance.SkinuseBackCall();
                    }), this.timeruse_bt.on(Laya.Event.CLICK, this, function () {
                        "Main/nouse.png" == t.timeruse_bt.skin ? o.default.instance.SkinuseBackCall() : t.UseBtnClick();
                    });
            }, e.prototype.InituseTip = function () {
                var t = this;
                this.timeruse_bt.visible = !1, this.dianui.visible = !0, this.isusetip ? (this.isusetip = !1,
                    this.diantip.skin = "Main/videotip.png", this.timeruse_bt.skin = "Main/yesuse.png") : (this.isusetip = !0,
                        this.diantip.skin = "Main/novideo.png", this.timeruse_bt.skin = "Main/nouse.png"),
                    Laya.timer.once(3e3, this, function () {
                        t.timeruse_bt.visible = !0;
                    });
            }, e.prototype.UseBtnClick = function () {
                var t = this;
                n.default.showVideoAd(function () {
                    r.default.video_skinusePoint(), l.default.instance.usingskin = t.usenum, t.SkinusePanel.visible = !1,
                        o.default.instance.SkinFuction(), i.default.SaveData();
                }, null, "video_skinuse");
            }, e.prototype.SkinInit = function () {
                for (var t = 0; t < i.default.skindate.length; t++) if (null != i.default.skindate[t] && new Date().getTime() - i.default.skindate[t] >= 864e5) {
                    i.default.skindate[t] = null, i.default.shop[t] = 0;
                    for (var e = 0; e < i.default.shop.length; e++) if (1 == i.default.shop[e]) {
                        i.default.shop[e] = 2;
                        break;
                    }
                }
            }, e.prototype.UseInit = function (t) {
                if (this.JudgeHaveNOskin()) {
                    for (var e = [], a = 0; a < i.default.shop.length; a++) 0 == i.default.shop[a] && e.push(a);
                    var o = e.length - 1, l = Math.floor(Math.random() * o);
                    this.skin_bg.skin = this.cubeskin[e[l]], this.usenum = e[l], this.SkinusePanel.visible = !0,
                        this.close_bt.visible = !1, this.dian_bt.visible = !1, this.timeruse_bt.visible = !0,
                        this.timeruse_bt.skin = "Main/nouse.png", 0 == this.isbreath && (this.isbreath = !0,
                            s.default.instance.Breath(this.use_bt)), n.default.ShowBanner();
                } else this.SkinusePanel.visible = !1, t && t();
            }, e.prototype.JudgeHaveNOskin = function () {
                for (var t = !1, e = 0; e < i.default.shop.length; e++) if (0 == i.default.shop[e]) {
                    t = !0;
                    break;
                }
                return !!t;
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = h;
    }, {
        "../3DScript/MaterialCtrl": 5,
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../UIScript/StartManage": 39,
        "../WeChatManager": 43,
        "./BuryingPointCtr": 24
    }],
    30: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("../UIScript/GameUI"), s = t("../WeChatManager"), o = t("../UIScript/RigisterCtr"), l = t("../UIScript/StartManage"), r = t("../3DScript/PlayerCtrl"), h = t("./BuryingPointCtr"), d = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.rewards = [20, 60, 60, 30, 50], a.cannum = [1, 6, 3, 2, 5], a.tasks = [],
                    a.getbts = [], e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                this.TaskPanel = this.owner, this.Panels = this.TaskPanel.getChildByName("Panels"),
                    this.close_bt = this.TaskPanel.getChildByName("close_bt");
                for (e = 0; e < this.Panels.numChildren; e++) this.tasks.push(this.Panels.getChildAt(e));
                for (var e = 0; e < this.tasks.length; e++) this.getbts.push(this.tasks[e].getChildByName("get_bt"));
                for (var a = function (e) {
                    d.getbts[e].on(Laya.Event.CLICK, d, function () {
                        null != i.default.taskdata[e] ? (i.default.taskdata[e] >= t.cannum[e] ? "TaskUI/get_bt.png" == t.getbts[e].skin && (i.default.diamond += t.rewards[e],
                            i.default.show("Diamond +" + String(t.rewards[e])), t.GetJiangli(e), n.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                            n.default.instance.diamondlabel.text = "" + i.default.diamond, n.default.instance.shop_label.text = "" + i.default.diamond) : 0 == e ? (t.TaskPanel.visible = !1,
                                i.default.isnottan = !1, o.default.instance.Init()) : 1 == e ? s.default.showVideoAd(function () {
                                    i.default.diamond += 10, i.default.show("Diamond +10"), t.TaskInit(); Laya.stage.event("refreshCoin");
                                }, null, "videoGetDiamond") : (t.TaskPanel.visible = !1, l.default.instance.StartGameClick(),
                                    3 == e && (n.default.instance.HandBg.visible = !0, r.default.instance.handTween1())),
                            i.default.SaveData(), t.TaskInit()) : 0 == i.default.taskvideo[e] ? "TaskUI/again_get.png" == t.getbts[e].skin &&
                                s.default.showVideoAd(function () {
                                    i.default.diamond += 20, n.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                                        n.default.instance.diamondlabel.text = "" + i.default.diamond, n.default.instance.shop_label.text = "" + i.default.diamond,
                                        i.default.show("Diamond +20"), i.default.taskvideo[e] = 1, i.default.SaveData(), t.TaskInit(),
                                        h.default.task_video_againgetPoint(); Laya.stage.event("refreshCoin");
                                }, null, "videoGetDiamond") : i.default.show("Received");
                    });
                }, d = this, c = 0; c < this.getbts.length; c++) a(c);
                this.close_bt.on(Laya.Event.CLICK, this, function () {
                    t.TaskPanel.visible = !1;
                }), this.TaskInit();
            }, e.prototype.Init = function () {
                null != i.default.taskdates && 0 != o.default.instance.IsSameDay(i.default.taskdates, new Date().getTime()) || (i.default.taskdates = new Date(),
                    i.default.taskdata = [0, 0, 0, 0, 0]);
            }, e.prototype.TaskInit = function () {
                for (var t = 0; t < this.tasks.length; t++) null == i.default.taskdata[t] ? (this.LabelInit(t, this.cannum[t]),
                    0 == i.default.taskvideo[t] ? this.tasks[t].getChildByName("get_bt").skin = "TaskUI/again_get.png" : (this.tasks[t].getChildByName("get_bt").skin = "TaskUI/get_bt.png",
                        this.tasks[t].getChildByName("get_bt").gray = !0)) : (i.default.taskdata[t] >= this.cannum[t] ? (this.LabelInit(t, this.cannum[t]),
                            this.tasks[t].getChildByName("get_bt").skin = "TaskUI/get_bt.png") : (this.LabelInit(t, i.default.taskdata[t]),
                                this.tasks[t].getChildByName("get_bt").skin = "TaskUI/gotask.png"), this.tasks[t].getChildByName("get_bt").gray = !1);
            }, e.prototype.GetJiangli = function (t) {
                i.default.taskdata[t] = null, this.TaskInit();
            }, e.prototype.LabelInit = function (t, e) {
                switch (t) {
                    case 0:
                        this.tasks[0].getChildByName("test").text = "签到1次(" + String(e) + "/1)";
                        break;

                    case 1:
                        this.tasks[1].getChildByName("test").text = "观看视频6次(" + String(e) + "/6)";
                        break;

                    case 2:
                        this.tasks[2].getChildByName("test").text = "开启宝箱3次(" + String(e) + "/3)";
                        break;

                    case 3:
                        this.tasks[3].getChildByName("test").text = "跳关2次(" + String(e) + "/2)";
                        break;

                    case 4:
                        this.tasks[4].getChildByName("test").text = "转盘抽奖5次(" + String(e) + "/5)";
                }
            }, e;
        }(Laya.Script);
        a.default = d;
    }, {
        "../3DScript/PlayerCtrl": 9,
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../UIScript/RigisterCtr": 37,
        "../UIScript/StartManage": 39,
        "../WeChatManager": 43,
        "./BuryingPointCtr": 24
    }],
    31: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("../WeChatManager"), s = t("../UIScript/GameUI"), o = t("./BuryingPointCtr"), l = t("./GiftBagPanelCtrl"), r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.rotateTime = 6, e.isluck = !1, e.luckindex = 0, e.rotationNum = 0, e.random_1 = 0,
                    e.turntabledate = null, e.str = "", e.isnew = !1, e.getstr = "", e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                e.instance = this, this.TurnTablePanel = this.owner, this.ZhuanPan = this.TurnTablePanel.getChildByName("turnui"),
                    this.videoget_bt = this.TurnTablePanel.getChildByName("videoget_bt"), this.turnback_bt = this.TurnTablePanel.getChildByName("turnback_bt"),
                    this.tips = this.TurnTablePanel.getChildByName("tips"), this.gou = this.tips.getChildByName("quan").getChildByName("gou"),
                    this.gou_bt = this.tips.getChildByName("quan").getChildByName("gou_bt"), this.turnback_bt.visible = !1,
                    this.isluck = !1, Laya.LocalStorage.getItem("Color-Fill-turntabledate") ? this.turntabledate = Laya.LocalStorage.getItem("Color-Fill-turntabledate") : this.turntabledate = null,
                    this.Init(), this.videoget_bt.on(Laya.Event.CLICK, this, function () {
                        "TurnTable/close.png" == t.videoget_bt.skin ? t.showTurnPanelUI(!1) : t.isluck || (
                            n.default.showVideoAd(function () {
                                t.onClickLucky(), o.default.video_turntablesPoint();
                            }, null, "video_luckbox"));
                    }), this.gou_bt.on(Laya.Event.CLICK, this, function () {
                        t.isluck || (1 == t.gou.visible ? (t.gou.visible = !1, t.videoget_bt.skin = "TurnTable/close.png") : (t.gou.visible = !0,
                            t.videoget_bt.skin = t.getstr));
                    }), this.turnback_bt.on(Laya.Event.CLICK, this, function () {
                        0 == t.isluck && t.showTurnPanelUI(!1);
                    });
            }, e.prototype.showTurnPanelUI = function (t) {
                var e = this;
                this.TurnTablePanel.visible = t, t ? (s.default.instance.Breath(this.videoget_bt),
                    i.default.isopen ? (this.turnback_bt.visible = !1, this.tips.visible = !1, Laya.timer.once(2e3, this, function () {
                        e.tips.visible = !0;
                    }), this.gou.visible = !0, this.isnew ? this.videoget_bt.skin = "TurnTable/free.png" : this.videoget_bt.skin = "TurnTable/videoget.png",
                        this.getstr = this.videoget_bt.skin) : (this.tips.visible = !1, this.turnback_bt.visible = !1,
                            Laya.timer.once(3e3, this, function () {
                                e.turnback_bt.visible = !0;
                            }), this.videoget_bt.skin = "TurnTable/get_video.png"), n.default.ShowBanner()) : (Laya.Tween.clearTween(this.videoget_bt),
                                this.turnback_bt.visible = !1, o.default.turntable_closePoint(), "win" == this.str ? (s.default.instance.GameWin(),
                                    this.str = "") : "fail" == this.str && (i.default.isopen ? (l.default.instance.str = "fail",
                                        l.default.instance.showGifBagUI(!0)) : s.default.instance.Lose(), this.str = ""));
            }, e.prototype.Init = function () {
                0 == this.isSameDay(this.turntabledate, new Date().getTime()) || null == this.turntabledate ? (console.log("初始化"),
                    this.turntabledate = new Date(), this.videoget_bt.skin = "TurnTable/free.png", this.getstr = this.videoget_bt.skin,
                    this.isnew = !0) : (this.videoget_bt.skin = "TurnTable/videoget.png", this.getstr = this.videoget_bt.skin,
                        this.isnew = !1);
            }, e.prototype.onClickLucky = function () {
                var t = this;
                if (!this.isluck) {
                    this.isluck = !0;
                    this.ZhuanPan.rotation > 360 && (this.ZhuanPan.rotation -= 2880), this.RandonCallBack(),
                        console.log("random_jiangli ======>抽奖结果= ", this.luckindex), this.rotationNum = 45 * this.luckindex,
                        this.random_1 = Math.floor(45 * Math.random() - 45);
                    var e = this;
                    Laya.Tween.to(this.ZhuanPan, {
                        rotation: 2880 + e.rotationNum
                    }, 1e3 * e.rotateTime, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        e.GetJiangli(e.luckindex), i.default.isopen && (t.videoget_bt.skin = "TurnTable/againget.png"),
                            t.getstr = t.videoget_bt.skin, t.turntabledate = new Date(), Laya.LocalStorage.setItem("Color-Fill-turntabledate", t.turntabledate),
                            e.isluck = !1;
                    }));
                }
            }, e.prototype.RandonCallBack = function () {
                var t = Math.random();
                t < .35 ? (this.luckindex = 1, console.log("10金币")) : t >= .35 && t < .62 ? (this.luckindex = 2,
                    console.log("20金币")) : t >= .62 && t < .8 ? (this.luckindex = 3, console.log("40币")) : t >= .8 && t < .9 ? (this.luckindex = 4,
                        console.log("60金币")) : t >= .9 && t < .97 ? (this.luckindex = 5, console.log("80")) : t >= .97 && t < .99 ? (this.luckindex = 6,
                            console.log("100")) : t >= .99 && t < .9975 ? (this.luckindex = 7, console.log("150")) : t >= .9975 && t <= 1 && (this.luckindex = 8,
                                console.log("200金币"));
            }, e.prototype.GetJiangli = function (t) {
                var e = 0;
                switch (t) {
                    case 1:
                        e = 20, console.log("-45°的奖励");
                        break;

                    case 2:
                        e = 40, console.log("-90°的奖励");
                        break;

                    case 3:
                        e = 60, console.log("-135°的奖励");
                        break;

                    case 4:
                        e = 80, console.log("-180°的奖励");
                        break;

                    case 5:
                        e = 100, console.log("-225°的奖励");
                        break;

                    case 6:
                        e = 150, console.log("-270°的奖励");
                        break;

                    case 7:
                        e = 200, console.log("-315°的奖励");
                        break;

                    case 8:
                        e = 10, console.log("0°的奖励");
                }
                i.default.diamond += e, s.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                    s.default.instance.diamondlabel.text = "" + i.default.diamond, s.default.instance.shop_label.text = "" + i.default.diamond,
                    i.default.show("Diamond +" + e), null != i.default.taskdata[4] && (i.default.taskdata[4] = i.default.taskdata[4] + 1), Laya.stage.event("refreshCoin");
                i.default.SaveData();
            }, e.prototype.isSameDay = function (t, e) {
                var a = new Date(t), i = new Date(e);
                return a.setHours(0, 0, 0, 0) == i.setHours(0, 0, 0, 0);
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = r;
    }, {
        "../DataManager": 11,
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43,
        "./BuryingPointCtr": 24,
        "./GiftBagPanelCtrl": 27
    }],
    32: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.lightIndex = 0, e.logoIndex = 0, e.jumpIndex = .1, e.scaleIndex = 1, e.rotation_num = 0,
                    e.timer = !1, e;
            }
            return __extends(e, t), e.prototype.onEnable = function () { }, e.prototype.onDisable = function () { },
                e.prototype.onUpdate = function () {
                    var t = this;
                    "logo" == this.owner.name || "tittle" == this.owner.name ? this.owner.visible ? this.jumpIndex >= 0 ? (this.logoIndex += .3,
                        this.jumpIndex -= .002, this.owner.scaleX = 1 + Math.sin(this.logoIndex) * this.jumpIndex,
                        this.owner.scaleY = 1 + Math.sin(this.logoIndex - Math.PI) * this.jumpIndex) : this.jumpIndex >= -.2 ? (this.logoIndex += .3,
                            this.jumpIndex -= .004, this.owner.scaleX = 1, this.owner.scaleY = 1) : 0 == this.timer && (this.timer = !0,
                                Laya.timer.frameOnce(100, this, function () {
                                    t.jumpIndex = .1, t.logoIndex = 0, t.timer = !1;
                                })) : (this.jumpIndex = .1, this.logoIndex = 0) : "zhuanpan_bg" == this.owner.name && (this.rotation_num += 1,
                                    this.rotation_num >= 360 && (this.rotation_num = 0), this.owner.rotation = this.rotation_num);
                }, e;
        }(Laya.Script);
        a.default = i;
    }, {}],
    33: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../WeChatManager"), n = t("../UIScript/GameUI"), s = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                e.instance = this, this.gongxiPanel = this.owner,
                    this.tiaoguo_bt = this.gongxiPanel.getChildByName("tiaoguo_bt");
            }, e.prototype.onStart = function () {
                var t = this;
                this.tiaoguo_bt.on(Laya.Event.CLICK, this, function () {
                    t.showUI(!1, t.callback);
                });
            }, e.prototype.backCall = function () {
                this.showUI(!1, this.callback);
            }, e.prototype.showUI = function (t, e) {
                var a = this;
                this.gongxiPanel.visible = t, t ? (i.default.ShowBanner(), this.callback = e,
                    this.tiaoguo_bt.visible = !1, Laya.timer.once(2e3, this, function () {
                        a.tiaoguo_bt.visible = !0;
                    })) : (e && e());
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../UIScript/GameUI": 35,
        "../WeChatManager": 43
    }],
    34: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.coinprefabs = [], a.coins = -1, a.num = 6, a.ischange = !1, e.instance = a,
                    a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                this.coins = -1, this.coinparent = this.owner;
            }, e.prototype.createCoin = function (t, e, a, i) {
                var n = this;
                void 0 === a && (a = null);
                var s = null;
                this.coinprefabs.length > 0 ? ((s = this.coinprefabs.pop()).x = t.x, s.y = t.y,
                    this.coinparent.addChild(s)) : ((s = new Laya.Image()).loadImage("Main/diamond.png", Laya.Handler.create(this, function () {
                        n.coinparent.addChild(s), s.x = t.x, s.y = t.y;
                    })), s.anchorX = .5, s.anchorY = .5, s.scaleX = .7, s.scaleY = .7), this.coins += 1,
                    5 == this.coins && (console.log("特效"), a && a()), console.log(this.coins), Laya.timer.once(40 * this.coins, this, function () {
                        n.GetPos(), Laya.Tween.to(s, {
                            x: n.dpos.x + t.x,
                            y: n.dpos.y + t.y
                        }, 300, null, Laya.Handler.create(n, function () {
                            Laya.timer.once(200, n, function () {
                                Laya.Tween.to(s, {
                                    x: e.x,
                                    y: e.y
                                }, 700, null, Laya.Handler.create(n, function () {
                                    n.RecoverCoin(s), n.ischange || (n.ischange = !0, Laya.Tween.to(i, {
                                        scaleX: 1.3,
                                        scaleY: 1.3
                                    }, 100, null, Laya.Handler.create(n, function () {
                                        Laya.Tween.to(i, {
                                            scaleX: 1,
                                            scaleY: 1
                                        }, 100, null, Laya.Handler.create(n, function () {
                                            n.ischange = !1;
                                        }));
                                    })));
                                }));
                            });
                        }));
                    });
            }, e.prototype.RecoverCoin = function (t) {
                this.coinprefabs.push(t), t.removeSelf();
            }, e.prototype.Flying = function (t, e, a, i) {
                void 0 === a && (a = null), this.coins = -1;
                for (var n = 0; n < 15; n++) this.createCoin(t, e, a, i);
            }, e.prototype.GetPos = function () {
                var t = 3 * Math.random(), e = Math.floor(40 * Math.random()), a = (e += 170) * Math.cos(t), i = e * Math.sin(t);
                this.dpos = new Laya.Vector2(a, i);
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = i;
    }, {}],
    35: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../../ui/layaMaxUI"), n = t("../3DScript/SceneControl"), s = t("../3DScript/ModelPool"), o = t("../3DScript/PlayerCtrl"),
            l = t("./StartManage"), r = t("../3DScript/MaterialCtrl"), h = t("../DataManager"), d = t("../WeChatManager"),
            c = t("../UIControl/TurnTableCtr"), u = t("../UIControl/SkinGoodCtrl"), f = t("../UIControl/BuryingPointCtr"),
            p = t("./bkPanelCtr"), g = function (t) {
                function e() {
                    var a = t.call(this) || this;
                    return a.iswin = !1, a.isgame = !1, a.isfirst1 = !1, a.isfirst2 = !1, a.isfirst3 = !1,
                        a.videotip = !1, a.sharetip = !0, a.ishuxi = !1, a.isnext = !1, a.isbox = !1, a.failbox = !1,
                        a.isRandom = !0, a.isfivehuxi = !1, a.failnum = 0, e.instance = a, new s.default(),
                        new h.default(), n.default.Instance().loadScene(), a;
                }
                return __extends(e, t), e.prototype.onAwake = function () {
                    var t = this;
                    l.default.instance.StartClickInit(), l.default.instance.GameLoseClickInit(), l.default.instance.GameClickInit(),
                        l.default.instance.GameWinClickInit(), this.RankClickInit(), this.GameUIInit(),
                        d.default.ShowShareMenu(), Laya.loader.load("res/atlas/obscale.atlas"),
                        Laya.loader.load("res/atlas/self.atlas"), Laya.loader.load("res/atlas/wall.atlas"),
                        this.Breathed(this.newskin), d.default.WxOnHide(function () {
                            d.default.isoutGame = !0;
                        }), d.default.WxOnShow(function () {
                            Laya.timer.once(3e3, t, function () {
                                d.default.isoutGame = !1;
                            });
                        }), l.default.instance.issound && d.default.PlayBGM("audio/BGM.mp3"),
                        d.default.ShowBanner(), d.default.WxOnHide(function () {
                            d.default.isoutGame = !0;
                        }), d.default.WxOnShow(function () {
                            Laya.timer.once(3e3, t, function () {
                                d.default.isoutGame = !1;
                            });
                        }), h.default.GameInit();
                    Laya.stage.on("refreshCoin", this, this.refreshCoin);
                    t.AddDiamondPanel0 = t.getChildByName("AddDiamondPanel0");
                    t.back_bt0 = t.AddDiamondPanel0.getChildByName("addbox").getChildByName("back_bt");
                    t.close_bt0 = t.AddDiamondPanel0.getChildByName("addbox").getChildByName("close_bt");
                    t.video_get0 = t.AddDiamondPanel0.getChildByName("addbox").getChildByName("diamond").getChildByName("video_get");
                    t.close_bt0.on(Laya.Event.CLICK, this, this.closeAddDiamondPanel0);
                    t.back_bt0.on(Laya.Event.CLICK, this, this.closeAddDiamondPanel0);
                    t.video_get0.on(Laya.Event.CLICK, this, this.getDiamod5);
                }, e.prototype.getDiamod5 = function () {
                    d.default.showVideoAd(() => {
                        h.default.diamond += 50, h.default.show("Diamond +" + String(50));
                        this.AddDiamondPanel0.visible = false;
                        Laya.stage.event("refreshCoin");
                    }, null, "videoGetDiamond");
                }, e.prototype.closeAddDiamondPanel0 = function () {
                    this.AddDiamondPanel0.visible = false;
                }, e.prototype.refreshCoin = function () {
                    this.startdiamondlabel.text = "" + h.default.diamond;
                    this.diamondlabel.text = "" + h.default.diamond;
                }, e.prototype.GameLose = function () {
                    var t = this;
                    this.failnum += 1, t.Lose();
                }, e.prototype.isFailBox = function () {
                    // 0 == this.failbox ? (this.failbox = !0, c.default.instance.str = "fail", c.default.instance.showTurnPanelUI(!0)) : 
                    (this.failbox = !1, u.default.instance.str = "fail", u.default.instance.showGoodskinUI(!0));
                }, e.prototype.Lose = function () {
                    var t = this;
                    this.isnext = !1, d.default.ShowBanner(),
                        (this.Freehuo_bt.skin = "Over/freehuo_video.png",
                            this.overtipui.visible = false,// this.Losebegain_bt.skin = "Over/nofuhuo.png",
                            this.Lose_close.visible = !1, this.Freehuo_bt.visible = !0, this.LoseTittle.visible = !0
                            // ,this.Losebegain_bt.centerY = 365
                        ),
                        this.GameOverUIPanel.visible = !0, window.scrollList.visible = true, this.LosePanel.visible = !0,
                        this.viewAction(this.Lose_back, 150, null), this.viewAction(this.LoseTittle, 200, null),
                        this.viewAction(this.Freehuo_bt, 300, function () {
                            t.ishuxi || (t.ishuxi = !0);
                        }), h.default.SaveData();
                }, e.prototype.GameWin = function () {
                    var t = this;
                    0 == this.iswin && (this.iswin = !0, l.default.instance.isgetdiamond = !1, l.default.instance.Restart_num = 0,
                        this.isnext = !1, o.default.instance.tween_next.clear(), e.instance.Nextlevel_bt.scaleX = 1,
                        e.instance.Nextlevel_bt.scaleY = 1, r.default.instance.usingskin = -1, l.default.instance.isgetfive = !1,
                        l.default.instance.isvideofive = !1, l.default.instance.issound && d.default.PlayerSound("audio/Vectory.mp3"),
                        d.default.ShowBanner(), this.overcoinlabel.text = "Get × " + h.default.overdiamond,
                        n.default.Instance().iscan = !1, this.GameUIPanel.visible = !1, this.GameOverUIPanel.visible = !0, window.scrollList.visible = true,
                        this.WinPanel.visible = !0, f.default.game_levelsPoint(String(h.default.level) + "-" + String(h.default.littlelevel)),
                        h.default.level += 1,
                        h.default.level >= 40 && (h.default.level = 1),
                        h.default.littlelevel = 1, this.viewAction(this.win_back, 150, null),
                        this.viewAction(this.win_tittle, 200, null), this.viewAction(this.overcoinlabel, 250, null),
                        this.viewAction(this.Fiveget_bt, 350, null), this.viewAction(this.luping_get, 350, function () {
                            0 == t.isfivehuxi && (t.isfivehuxi = !0, t.Breath(t.Fiveget_bt), t.Breath(t.luping_get));
                        }), this.nextgou.visible = !1, this.nexttip.visible = !1, h.default.SaveData());
                }, e.prototype.GamePro = function (t) {
                    1 == h.default.littlelevel ? this.pro1.width = 87 / n.default.Instance().color_num * t : 2 == h.default.littlelevel ? this.pro2.width = 87 / n.default.Instance().color_num * t : 3 == h.default.littlelevel && (this.pro3.width = 87 / n.default.Instance().color_num * t);
                }, e.prototype.viewAction = function (t, e, a) {
                    var i = this;
                    void 0 === a && (a = null), t.scaleX = .3, t.scaleY = .3, Laya.Tween.to(t, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, e, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t, {
                            scaleX: 1,
                            scaleY: 1
                        }, 100, null, Laya.Handler.create(i, function () {
                            a && a();
                        }));
                    }));
                }, e.prototype.RankClickInit = function () {
                    var t = this;
                }, e.prototype.RankAction = function (t) {
                    void 0 === t && (t = null), this.viewAction(this.rank_bg, 220, null),
                        this.viewAction(this.rank_share, 300, function () {
                            t && t();
                        });
                }, e.prototype.GameUIInit = function () {
                    Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2.1 && (this.diamondbg.top += 80,
                        this.Nextlevel_bt.top += 80, this.Gamepro.top += 80, this.diamondbgUI.top += 30,
                        this.diamondui.top += 30, this.Sound_bt.top += 30, this.handnext.top += 80);
                }, e.prototype.First1 = function () {
                    var t = this;
                    0 == this.isfirst1 && (h.default.Firstgame[1] = 1, this.isfirst1 = !0, this.FirstGame.visible = !0,
                        this.Firsttwo.visible = !0, this.ani = new Laya.Animation(), this.ani.x = this.tippic1.x,
                        this.ani.y = this.tippic1.y, this.ani.scaleX = .9, this.ani.scaleY = .9, this.ani.loadAnimation("wall.ani", Laya.Handler.create(this, function () {
                            t.Firsttwo.addChild(t.ani), t.tippic1.skin = "", t.ani.play(0, !0);
                        })), h.default.SaveData());
                }, e.prototype.First2 = function () {
                    var t = this;
                    0 == this.isfirst2 && (h.default.Firstgame[2] = 1, this.isfirst2 = !0, this.FirstGame.visible = !0,
                        this.Firstthree.visible = !0, this.ani = new Laya.Animation(), this.ani.x = this.tippic2.x,
                        this.ani.y = this.tippic2.y, this.ani.scaleX = .9, this.ani.scaleY = .9, this.ani.loadAnimation("obscale.ani", Laya.Handler.create(this, function () {
                            t.Firstthree.addChild(t.ani), t.tippic2.skin = "", t.ani.play(0, !0);
                        })), h.default.SaveData());
                }, e.prototype.First3 = function () {
                    var t = this;
                    0 == this.isfirst3 && (h.default.Firstgame[3] = 1, this.isfirst3 = !0, this.FirstGame.visible = !0,
                        this.Firstfour.visible = !0, this.ani = new Laya.Animation(), this.ani.x = this.tippic3.x,
                        this.ani.y = this.tippic3.y, this.ani.scaleX = .9, this.ani.scaleY = .9, this.ani.loadAnimation("wall.ani", Laya.Handler.create(this, function () {
                            t.Firstfour.addChild(t.ani), t.tippic3.skin = "", t.ani.play(0, !0);
                        })), h.default.SaveData());
                }, e.prototype.Breath = function (t) {
                    var e = this;
                    Laya.Tween.to(t, {
                        scaleX: .9,
                        scaleY: .9
                    }, 900, null, Laya.Handler.create(this, function () {
                        e.Breathed(t);
                    }));
                }, e.prototype.Breathed = function (t) {
                    var e = this;
                    Laya.Tween.to(t, {
                        scaleX: 1.05,
                        scaleY: 1.05
                    }, 900, null, Laya.Handler.create(this, function () {
                        e.Breath(t);
                    }));
                }, e.prototype.GameNextPanelUI = function () {
                    var t = this;
                    this.GameNextPanel.visible = !0, this.viewAction(this.nextbg, 300, null), this.viewAction(this.nextbt, 300, function () {
                        Laya.timer.once(2e3, t, function () {
                            t.Breath(t.nextbt), t.closebt.visible = !0, t.viewAction(t.closebt, 300, null);
                        });
                    });
                }, e.prototype.GameNextPanelUIClose = function () {
                    this.closebt.visible = !1, Laya.Tween.clearTween(this.nextbt), this.GameNextPanel.visible = !1;
                }, e.prototype.RandomStar = function (t) {
                    if (t) {
                        var e = Math.floor(Math.random() * (t.numChildren - 1));
                        this.starAct(e, t);
                    }
                }, e.prototype.starAct = function (t, e) {
                    var a = this, i = e.getChildAt(t);
                    1 != i.visible ? (i.visible = !0, Laya.Tween.to(i, {
                        scaleX: .5,
                        scaleY: .5,
                        rotation: 90
                    }, 800, null, Laya.Handler.create(this, function () {
                        i.visible = !1, i.scaleX = 1, i.scaleY = 1, i.rotation = 0, 0 == a.isRandom && a.RandomStar(e);
                    }))) : this.RandomStar(e);
                }, e;
            }(i.ui.test.MainSceneUI);
        a.default = g;
    }, {
        "../../ui/layaMaxUI": 44,
        "../3DScript/MaterialCtrl": 5,
        "../3DScript/ModelPool": 6,
        "../3DScript/PlayerCtrl": 9,
        "../3DScript/SceneControl": 10,
        "../DataManager": 11,
        "../UIControl/BuryingPointCtr": 24,
        "../UIControl/SkinGoodCtrl": 28,
        "../UIControl/TurnTableCtr": 31,
        "../WeChatManager": 43,
        "./StartManage": 39,
        "./bkPanelCtr": 40
    }],
    36: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameUI"), n = t("./FlyCoin"), s = t("../DataManager"), o = t("../WeChatManager"), l = t("../UIControl/GiftBagPanelCtrl"), r = t("../UIControl/BuryingPointCtr"), h = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.isget = !1, a.luckdiamond_num = 0, a.isshare = !1, a.ishuxi = !1, a.str = "",
                    e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                this.LuckBox = this.owner, this.Luck = this.LuckBox.getChildAt(0), this.boxui = this.Luck.getChildByName("boxui"),
                    this.openboxbt = this.Luck.getChildByName("openbox"), this.nothanks = this.Luck.getChildByName("nothanks"),
                    this.boxparent = this.Luck.getChildByName("boxparent"), this.light = this.Luck.getChildByName("light"),
                    this.lucktittle = this.Luck.getChildByName("lucktittle"), this.tips = this.Luck.getChildByName("tips"),
                    this.gou_bt = this.Luck.getChildByName("tips").getChildByName("gou_bt"), this.gou = this.Luck.getChildByName("tips").getChildByName("gou"),
                    this.close_bt = this.Luck.getChildByName("close_bt"), this.stars = this.Luck.getChildByName("star"),
                    this.openboxbt.on(Laya.Event.CLICK, this, function () {
                        Laya.Browser.onWeiXin ? o.default.ShowRewardAd("luckbox_video") : t.openbtn();
                    }), this.nothanks.on(Laya.Event.CLICK, this, function () {
                        t.isget || (t.CloseBox(), r.default.close_boxPoint());
                    }), this.close_bt.on(Laya.Event.CLICK, this, function () {
                        t.isget || (t.CloseBox(), r.default.close_boxPoint());
                    }), this.gou_bt.on(Laya.Event.CLICK, this, function () {
                        1 == t.gou.visible ? (t.gou.visible = !1, t.nothanks.visible = !0) : (t.gou.visible = !0,
                            t.nothanks.visible = !1);
                    });
            }, e.prototype.LuckDiamond = function () {
                var t = Math.random();
                this.luckdiamond_num = t <= .45 ? 20 : 40;
            }, e.prototype.LuckInit = function () {
                var t = this;
                this.isget = !1, this.LuckBox.visible = !0, s.default.isopen ? (this.tips.visible = !0,
                    this.close_bt.visible = !1) : (this.tips.visible = !1, this.close_bt.visible = !0),
                    i.default.instance.viewAction(this.boxui, 300, null), i.default.instance.viewAction(this.openboxbt, 400, function () {
                        i.default.instance.Breath(t.openboxbt), t.light.visible = !0, t.light.rotation = 0,
                            t.LightAct(t.light);
                    }), this.LuckDiamond(), i.default.instance.isRandom = !1, i.default.instance.RandomStar(this.stars),
                    Laya.timer.once(400, this, function () {
                        i.default.instance.RandomStar(t.stars);
                    }), Laya.timer.once(800, this, function () {
                        i.default.instance.RandomStar(t.stars);
                    });
            }, e.prototype.openbtn = function () {
                var t = this;
                this.isget || (this.isget = !0, Laya.timer.once(200, this, function () {
                    n.default.instance.Flying(new Laya.Vector2(t.boxui.x - 25, t.boxui.y - 50), new Laya.Vector2(i.default.instance.diamondbg.x - 22, i.default.instance.diamondbg.y - 21), function () {
                        s.default.diamond += t.luckdiamond_num, i.default.instance.startdiamondlabel.text = "" + s.default.diamond,
                            i.default.instance.diamondlabel.text = "" + s.default.diamond, i.default.instance.shop_label.text = "" + s.default.diamond,
                            s.default.show("Diamond +" + String(t.luckdiamond_num)), null != s.default.taskdata[2] && (s.default.taskdata[2] = s.default.taskdata[2] + 1,
                                Laya.stage.event("refreshCoin"),
                                s.default.SaveData()), Laya.timer.once(2e3, t, function () {
                                    t.CloseBox();
                                });
                    }, i.default.instance.diamondbg);
                }));
            }, e.prototype.LightAct = function (t) {
                var e = this;
                Laya.Tween.to(t, {
                    rotation: 360
                }, 2e3, null, Laya.Handler.create(this, function () {
                    t.rotation = 0, e.LightAct(t);
                }));
            }, e.prototype.CloseBox = function () {
                i.default.instance.isRandom = !0, Laya.Tween.clearTween(this.light), this.light.rotation = 0,
                    this.light.visible = !1, this.LuckBox.visible = !1, this.nothanks.visible = !1,
                    this.gou.visible = !0, Laya.Tween.clearTween(this.openboxbt), "win" == this.str ? (i.default.instance.GameWin(),
                        this.str = "") : "fail" == this.str && (l.default.instance.str = "fail", l.default.instance.showGifBagUI(!0),
                            this.str = "");
            }, e;
        }(Laya.Script);
        a.default = h;
    }, {
        "../DataManager": 11,
        "../UIControl/BuryingPointCtr": 24,
        "../UIControl/GiftBagPanelCtrl": 27,
        "../WeChatManager": 43,
        "./FlyCoin": 34,
        "./GameUI": 35
    }],
    37: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../WeChatManager"), n = t("./FlyCoin"), s = t("./GameUI"), o = t("../DataManager"), l = t("../UIControl/BuryingPointCtr"), r = function (t) {
            function e() {
                var a = t.call(this) || this;
                return a.haverecive = [], a.bottoms = [], a.getday = -1, a.skin = 0, a.coin_num = 0,
                    e.instance = a, a;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                this.rigisterUI = this.owner, this.guessYouLikeUI = this.rigisterUI.getChildByName("guessYouLikeUI"),
                    this.rigisterbox = this.owner.getChildAt(0), this.rigisterbg = this.rigisterbox.getChildAt(0),
                    this.haveBox = this.rigisterbox.getChildByName("haveBox"), this.bootombox = this.rigisterbox.getChildByName("days"),
                    this.recive_btn = this.rigisterbg.getChildByName("recive_bt"), this.tworecive_btn = this.rigisterbg.getChildByName("tworecive_bt"),
                    this.starpos = this.rigisterbox.getChildAt(1), this.choice_bt = this.rigisterbg.getChildByName("choiceui").getChildByName("choice_bt"),
                    this.choiceui = this.rigisterbg.getChildByName("choiceui"), this.yes = this.rigisterbg.getChildByName("choiceui").getChildByName("yes"),
                    this.GetBg = this.rigisterbox.getChildByName("GetBg"), this.getLight = this.GetBg.getChildByName("light"),
                    this.getstar = this.GetBg.getChildByName("starnum"), this.again_bt = this.GetBg.getChildByName("again"),
                    this.no_bt = this.GetBg.getChildByName("no"), this.tittle = this.GetBg.getChildByName("tittle"),
                    this.get_star = this.GetBg.getChildByName("star"), this.leftstar = this.get_star.getChildByName("left"),
                    this.rightstar = this.get_star.getChildByName("right");
                for (var e = 0; e < this.haveBox.numChildren; e++) this.haverecive.push(this.haveBox.getChildAt(e)),
                    this.bottoms.push(this.bootombox.getChildAt(e));
                this.recive_btn.on(Laya.Event.CLICK, this, function () {
                    t.ReciiveClick();
                }), this.tworecive_btn.visible = !0, this.recive_btn.visible = !1, this.yes.skin = "Rigister/yes.png",
                    this.tworecive_btn.on(Laya.Event.CLICK, this, this.TwoReciiveClick), this.choice_bt.on(Laya.Event.CLICK, this, function () {
                        "" != t.yes.skin ? (t.yes.skin = "", t.tworecive_btn.visible = !1, t.recive_btn.visible = !0) : 6 == t.getday ?
                            o.default.show("This reward cannot be doubled") : (t.yes.skin = "Rigister/yes.png",
                                t.tworecive_btn.visible = !0, t.recive_btn.visible = !1);
                    }), this.again_bt.on(Laya.Event.CLICK, this, function () {
                        Laya.Browser.onWeiXin ? i.default.ShowRewardAd("againcoin_video") : t.againGet();
                    }), this.no_bt.on(Laya.Event.CLICK, this, function () {
                        Laya.Tween.clearTween(t.LightAct), Laya.Tween.clearAll(t.leftstar), Laya.Tween.clearAll(t.rightstar),
                            l.default.rigister_againclosePoint(), t.owner.removeSelf();
                    });
            }, e.prototype.onStart = function () {
                ;
            }, e.prototype.Init = function () { }, e.prototype.RigisterInit = function () {
                for (var t = 0; t < 7; t++) 1 == o.default.days[t] ? this.haverecive[t].visible = !0 : this.haverecive[t].visible = !1;
            }, e.prototype.DayInit = function () {
                var t = this;
                if (0 == this.IsSameWeek(o.default.rigisterDate, new Date().getTime()) || null == o.default.rigisterDate) o.default.days = [0, 0, 0, 0, 0, 0, 0],
                    this.RigisterInit(), this.getday = 0, this.rigisterUI.visible = !0, s.default.instance.Breath(this.tworecive_btn),
                    o.default.isopen ? (this.tworecive_btn.skin = "Rigister/tworeceive1.png",
                        this.choiceui.visible = !1, Laya.timer.once(2e3, this, function () {
                            t.choiceui.visible = !0;
                        })) : this.tworecive_btn.skin = "Rigister/tworeceive.png"; else if (0 == this.IsSameDay(o.default.rigisterDate, new Date().getTime()) && null != o.default.rigisterDate) {
                            for (var e = 0; e < 7; e++) if (0 == o.default.days[e]) {
                                this.getday = e, this.rigisterUI.visible = !0, s.default.instance.Breath(this.tworecive_btn),
                                    o.default.isopen ? (this.tworecive_btn.skin = "Rigister/tworeceive1.png",
                                        this.choiceui.visible = !1, Laya.timer.once(2e3, this, function () {
                                            t.choiceui.visible = !0;
                                        })) : this.tworecive_btn.skin = "Rigister/tworeceive.png";
                                break;
                            }
                            6 == this.getday && (this.yes.skin = "", this.tworecive_btn.visible = !1, this.recive_btn.visible = !0);
                        } else this.rigisterUI.visible = !1, this.recive_btn.gray = !0, this.tworecive_btn.gray = !0,
                            null != o.default.taskdata[0] && (o.default.taskdata[0] = 1);
            }, e.prototype.IsSameWeek = function (t, e) {
                var a = new Date(t).setHours(0, 0, 0, 0), i = new Date(e).setHours(0, 0, 0, 0), n = parseInt(String(a / 864e5)), s = parseInt(String(i / 864e5));
                return parseInt(String((n + 4) / 7)) == parseInt(String((s + 4) / 7));
            }, e.prototype.IsSameDay = function (t, e) {
                var a = new Date(t), i = new Date(e);
                return a.setHours(0, 0, 0, 0) == i.setHours(0, 0, 0, 0);
            }, e.prototype.OpenInit = function () {
                var t = this;
                this.no_bt.visible = !1, this.GetBg.visible = !0, this.startween(this.leftstar),
                    Laya.timer.once(500, this, function () {
                        t.startween(t.rightstar);
                    }), s.default.instance.viewAction(this.tittle, 200, null), s.default.instance.viewAction(this.again_bt, 300, function () {
                        Laya.timer.once(1500, t, function () {
                            t.no_bt.visible = !0, s.default.instance.viewAction(t.no_bt, 200, null);
                        });
                    }), this.getstar.skin = "Rigister/" + String(this.getday) + ".png", this.getLight.rotation = 0,
                    this.LightAct(this.getLight);
            }, e.prototype.againGet = function () {
                var t = this;
                o.default.diamond += this.coin_num, s.default.instance.startdiamondlabel.text = "" + o.default.diamond, Laya.stage.event("refreshCoin");
                s.default.instance.diamondlabel.text = "" + o.default.diamond, s.default.instance.shop_label.text = "" + o.default.diamond,
                    o.default.SaveData(), o.default.show("Received"), o.default.SaveData(), Laya.timer.once(500, this, function () {
                        Laya.Tween.clearTween(t.LightAct), Laya.Tween.clearAll(t.leftstar), Laya.Tween.clearAll(t.rightstar),
                            Laya.Tween.clearTween(t.tworecive_btn), t.owner.removeSelf();
                    });
            }, e.prototype.ReciiveClick = function () {
                var t = this;
                if (0 == o.default.days[this.getday]) {
                    var e;
                    this.getday < 6 ? (e = 2 * (this.getday + 1) + 2, o.default.diamond += e, s.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                        s.default.instance.diamondlabel.text = "" + o.default.diamond, s.default.instance.shop_label.text = "" + o.default.diamond) : 6 == this.getday && 0 == o.default.rigistskin ? (o.default.shop[4] = 1,
                            o.default.rigistskin = 1, o.default.show("Received")) : 6 == this.getday && 1 == o.default.rigistskin && (e = 16,
                                o.default.diamond += e, s.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                s.default.instance.diamondlabel.text = "" + o.default.diamond, s.default.instance.shop_label.text = "" + o.default.diamond),
                        this.coin_num = e, this.recive_btn.gray = !0, this.tworecive_btn.gray = !0, o.default.days[this.getday] = 1,
                        o.default.rigisterDate = new Date(), o.default.taskdata[0] = 1, o.default.SaveData(),
                        l.default.rigisteronePoint(), this.getday < 6 ? n.default.instance.Flying(new Laya.Vector2(this.bootombox.getChildAt(this.getday).x - 35, this.bootombox.getChildAt(this.getday).y - 40), new Laya.Vector2(s.default.instance.diamondui.x - 15, s.default.instance.diamondui.y - 10), function () {
                            console.log("金币特效"), t.action(t.haverecive[t.getday], t.bottoms[t.getday], function () {
                                t.OpenInit();
                            });
                        }, s.default.instance.diamondui) : 16 == e ? n.default.instance.Flying(new Laya.Vector2(this.bootombox.getChildAt(this.getday).x - 35, this.bootombox.getChildAt(this.getday).y - 40), new Laya.Vector2(s.default.instance.diamondui.x - 15, s.default.instance.diamondui.y - 10), function () {
                            console.log("金币特效"), t.action(t.haverecive[t.getday], t.bottoms[t.getday], function () {
                                t.OpenInit();
                            });
                        }, s.default.instance.diamondui) : this.action(this.haverecive[this.getday], this.bottoms[this.getday], function () {
                            Laya.timer.once(1e3, t, function () {
                                Laya.Tween.clearTween(t.tworecive_btn), t.owner.removeSelf();
                            });
                        });
                    Laya.stage.event("refreshCoin");
                }
            }, e.prototype.TwoReciiveClick = function () {
                6 == this.getday && 0 == o.default.shop[4] ? o.default.show("This reward cannot be doubled") : Laya.Browser.onWeiXin ? i.default.ShowRewardAd("rigitervideo") : this.Link();
            }, e.prototype.Link = function () {
                var t, e = this;
                t = 2 * (this.getday + 1) + 2, o.default.diamond += 2 * t, s.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                    s.default.instance.diamondlabel.text = "" + o.default.diamond, s.default.instance.shop_label.text = "" + o.default.diamond,
                    this.recive_btn.gray = !0, this.tworecive_btn.gray = !0, o.default.days[this.getday] = 1,
                    o.default.taskdata[0] = 1, n.default.instance.Flying(new Laya.Vector2(this.bootombox.getChildAt(this.getday).x - 35, this.bootombox.getChildAt(this.getday).y - 40), new Laya.Vector2(s.default.instance.diamondui.x - 15, s.default.instance.diamondui.y - 10), function () {
                        e.action(e.haverecive[e.getday], e.bottoms[e.getday], function () {
                            Laya.timer.once(1e3, e, function () {
                                Laya.Tween.clearTween(e.tworecive_btn), e.owner.removeSelf();
                            });
                        });
                    }, s.default.instance.diamondui), o.default.rigisterDate = new Date(), o.default.SaveData();
                Laya.stage.event("refreshCoin");
            }, e.prototype.action = function (t, e, a) {
                var i = this, n = t.x, s = t.y, o = e.x;
                e.y;
                t.scaleX = 5, t.scaleY = 5, t.alpha = 0, t.y = 0, t.x = -200, Laya.timer.once(1500, this, function () {
                    i.RigisterInit(), Laya.timer.once(200, i, function () {
                        Laya.Tween.to(t, {
                            x: n,
                            y: s,
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 70, null, Laya.Handler.create(i, function () {
                            Laya.Tween.to(e, {
                                x: o + 1
                            }, 50, null, Laya.Handler.create(i, function () {
                                Laya.Tween.to(e, {
                                    x: o - 1
                                }, 50, null, Laya.Handler.create(i, function () {
                                    Laya.Tween.to(e, {
                                        x: o + 1
                                    }, 50, null, Laya.Handler.create(i, function () {
                                        Laya.Tween.to(e, {
                                            x: o
                                        }, 50, null, Laya.Handler.create(i, function () {
                                            a && a();
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    });
                });
            }, e.prototype.LightAct = function (t) {
                var e = this;
                Laya.Tween.to(t, {
                    rotation: 360
                }, 3e3, null, Laya.Handler.create(this, function () {
                    t.rotation = 0, e.LightAct(t);
                }));
            }, e.prototype.startween = function (t) {
                var e = this;
                Laya.Tween.to(t, {
                    rotation: 80,
                    scaleX: .1,
                    scaleY: .1
                }, 1e3, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(t, {
                        rotation: 0,
                        scaleX: 1,
                        scaleY: 1
                    }, 1e3, null, Laya.Handler.create(e, function () {
                        e.startween(t);
                    }));
                }));
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = r;
    }, {
        "../DataManager": 11,
        "../UIControl/BuryingPointCtr": 24,
        "../WeChatManager": 43,
        "./FlyCoin": 34,
        "./GameUI": 35
    }],
    38: [function (t, e, a) {//商店
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../DataManager"), n = t("./GameUI"), s = t("./StartManage"), o = t("../WeChatManager"),
            l = t("./getSkinPanelCtr"), r = function (t) {
                function e() {
                    var a = t.call(this) || this;
                    return a.LastSkin = 0, a.LastSkinKuang = 0, a.coins = [100, 100, 150, 180, 200, 250, 100, 150, 180, 200, 250, 100, 150, 180, 200, 250],
                        a.nowskinindex = 0, a.isgame = !1, a.slidervalue = 0, e.instance = a, a;
                }
                return __extends(e, t), e.prototype.onAwake = function () {
                    var t = this;
                    this.ShopBox = this.owner.getChildAt(0), this.coinlabel = this.ShopBox.getChildAt(0).getChildByName("cion").getChildAt(0),
                        this.coinadd_bt = this.ShopBox.getChildAt(0).getChildByName("cion").getChildByName("add_bt"),
                        this.haveuse_bt = this.ShopBox.getChildByName("haveuse"), this.haveskin_bt = this.ShopBox.getChildByName("haveskin_bt"),
                        this.shop_bt = this.ShopBox.getChildByName("shop_bt"), this.shop_back = this.ShopBox.getChildByName("shop_back"),
                        this.shopList = this.ShopBox.getChildAt(0).getChildByName("ShopList"), this.guessYouLikeUI = this.ShopBox.getChildByName("guessYouLikeUI"),
                        this.shopList.hScrollBarSkin = "", this.shopList.vScrollBarSkin = "", this.shopList.selectEnable = !0,
                        this.arr = [], this.shopList.scrollBar.value = 0, this.shopList.vScrollBarSkin = "";
                    for (var e = 0; e < 16; e++) this.arr.push({
                        listNumber: {
                            text: e
                        }
                    });
                    this.shopList.array = this.arr, this.skinShopList(), this.shopList.selectHandler = new Laya.Handler(this, this.onSelect),
                        this.shop_back.on(Laya.Event.CLICK, this, function () {
                            platform.getInstance().showInterstitial(() => {
                                s.default.instance.BtnSound();
                                for (var e = 0; e < i.default.shop.length; e++) 3 == i.default.shop[e] && (i.default.shop[e] = 0);
                                n.default.instance.StartUIPanel.visible = !0, t.owner.visible = !1, i.default.SaveData(),
                                    window.scrollList.visible = true;
                                o.default.ShowBanner();
                            })
                        }), this.shop_bt.on(Laya.Event.CLICK, this, function () {
                            if (i.default.diamond >= t.coins[t.nowskinindex]) {
                                i.default.diamond -= t.coins[t.nowskinindex], t.coinlabel.text = "" + i.default.diamond,
                                    n.default.instance.startdiamondlabel.text = "" + i.default.diamond, n.default.instance.diamondlabel.text = "" + i.default.diamond;
                                for (var e = 0; e < i.default.shop.length; e++) if (2 == i.default.shop[e]) {
                                    i.default.shop[e] = 1;
                                    break;
                                }
                                for (var a = 0; a < i.default.shop.length; a++) if (3 == i.default.shop[a]) {
                                    i.default.shop[a] = 0;
                                    break;
                                }
                                t.shopList.refresh(), i.default.shop[t.nowskinindex] = 2, t.shopInit()
                                // ,l.default.instance.showUI(!0);
                                Laya.stage.event("refreshCoin");
                            } else o.default.ShowModalGold();
                        }), this.coinadd_bt.on(Laya.Event.CLICK, this, function () {
                            n.default.instance.AddDiamondPanel0.visible = true;
                        });
                    Laya.stage.on("refreshCoin", this, this.refreshCoin);
                }, e.prototype.refreshCoin = function () {
                    this.coinlabel.text = "" + i.default.diamond;
                }, e.prototype.onStart = function () {
                    Laya.Browser.height / Laya.Browser.width >= 2.1 ? (this.ShopBox.top = 90) : (this.ShopBox.top = 0);
                }, e.prototype.shopInit = function () {
                    this.skinShopList();
                    this.haveuse_bt.visible = !0, this.haveskin_bt.visible = !1, this.shop_bt.visible = !1,
                        this.shopList.refresh(), this.coinlabel.text = "" + i.default.diamond;
                }, e.prototype._skin = function () {
                    for (var t = 0; t < i.default.shop.length; t++) if (2 == i.default.shop[t]) {
                        this.LastSkin = t;
                        break;
                    }
                }, e.prototype.skinShopList = function () {
                    null == this.shopList.renderHandler && (this.shopList.renderHandler = new Laya.Handler(this, this.onRender));
                }, e.prototype.onRender = function (t, e) {
                    if (!(e > 15)) {
                        this.arr[e];
                        var a = t.getChildByName("bg"), n = a.getChildByName("game"), s = a.getChildByName("nohave");
                        if (0 == i.default.shop[e]) a.skin = "", n.skin = "ball/" + (e + 1) + ".png",
                            s.visible = !0; else if (1 == i.default.shop[e]) a.skin = "", n.skin = "ball/" + (e + 1) + ".png",
                                s.visible = !1; else if (2 == i.default.shop[e]) {
                                    for (var o = !1, l = 0; l < i.default.shop.length; l++) if (3 == i.default.shop[l]) {
                                        o = !0;
                                        break;
                                    }
                                    a.skin = 0 == o ? "shop/haveuse.png" : "", n.skin = "ball/" + (e + 1) + ".png",
                                        s.visible = !1;
                                } else 3 == i.default.shop[e] && (a.skin = "shop/haveuse.png", n.skin = "ball/" + (e + 1) + ".png",
                                    s.visible = !0);
                    }
                }, e.prototype.onSelect = function (t) {
                    if (0 == i.default.shop[t]) {
                        for (e = 0; e < i.default.shop.length; e++) if (3 == i.default.shop[e]) {
                            i.default.shop[e] = 0;
                            break;
                        }
                        i.default.shop[t] = 3, this.shop_bt.visible = !0, this.haveuse_bt.visible = !1,
                            this.haveskin_bt.visible = !1, this.shop_bt.getChildByName("num").text = "" + this.coins[t];
                    } else if (1 == i.default.shop[t]) {
                        for (e = 0; e < i.default.shop.length; e++) if (2 == i.default.shop[e]) {
                            i.default.shop[e] = 1;
                            break;
                        }
                        for (e = 0; e < i.default.shop.length; e++) if (3 == i.default.shop[e]) {
                            i.default.shop[e] = 0;
                            break;
                        }
                        i.default.shop[t] = 2, this.shop_bt.visible = !1, this.haveuse_bt.visible = !0,
                            this.haveskin_bt.visible = !1;
                    } else if (2 == i.default.shop[t]) {
                        for (var e = 0; e < i.default.shop.length; e++) if (3 == i.default.shop[e]) {
                            i.default.shop[e] = 0;
                            break;
                        }
                        this.shop_bt.visible = !1, this.haveuse_bt.visible = !0, this.haveskin_bt.visible = !1;
                    }
                    this.nowskinindex = t;
                }, e.instance = null, e;
            }(Laya.Script);
        a.default = r;
    }, {
        "../DataManager": 11,
        "../WeChatManager": 43,
        "./GameUI": 35,
        "./StartManage": 39,
        "./getSkinPanelCtr": 41
    }],
    39: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameUI"), n = t("../3DScript/SceneControl"), s = t("../WeChatManager"), o = t("../DataManager"),
            l = t("../3DScript/PlayerCtrl"), r = t("./ShopManager"), h = t("../3DScript/MaterialCtrl"),
            d = t("../UIControl/SkinUseCtrl"), c = t("../UIControl/TaskController"), u = t("../UIControl/TurnTableCtr"),
            f = t("./RigisterCtr"), p = t("../UIControl/BuryingPointCtr"), g = function (t) {
                function e() {
                    var a = t.call(this) || this;
                    return a.issound = !0, a.isgetfive = !1, a.isvideofive = !1, a.fuhuonum = 0, a.Restart_num = 0,
                        a.isback = !1, a.istannext = !1, a.isgetdiamond = !1, a.isbreath = !1, a.isbaokuan = !1,
                        e.instance = a, a;
                }
                return __extends(e, t), e.prototype.StartClickInit = function () {
                    var t = this;
                    window.scrollList.visible = true,
                        i.default.instance.Sound_bt.skin = window.WebAudioEngine.pause ? "Main/nosound.png" : "Main/sound.png",
                        i.default.instance.shop_bt.on(Laya.Event.CLICK, this, function () {
                            platform.getInstance().showInterstitial(() => {
                                t.BtnSound(), i.default.instance.StartUIPanel.visible = !1, i.default.instance.ShopCtrPanel.visible = !0,
                                    window.scrollList.visible = false;
                                r.default.instance.shopInit();
                            })
                        }), i.default.instance.Start_bt.on(Laya.Event.CLICK, this, function () {
                            platform.getInstance().showInterstitial(() => {
                                0 == t.isbreath && (t.isbreath = !0, i.default.instance.Breath(i.default.instance.Nextlevel_bt)),
                                    t.StartGameClick();
                            })
                        }), i.default.instance.add_bt.on(Laya.Event.CLICK, this, function () {
                            t.BtnSound(), i.default.instance.AddDiamondPanel0.visible = true;
                            // p.default.main_video_getcoinPoint(), s.default.ShowRewardAd("videoGetDiamond");
                        }), i.default.instance.shopvideo_get.on(Laya.Event.CLICK, this, function () {
                            t.BtnSound(), p.default.shop_video_getcoinPoint(), s.default.ShowRewardAd("videoGetDiamond");
                        }), i.default.instance.Sound_bt.on(Laya.Event.CLICK, this, function () {
                            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                            Laya.LocalStorage.setItem("Color-Fill-musicState", JSON.stringify(window.WebAudioEngine.pause))
                            i.default.instance.Sound_bt.skin = window.WebAudioEngine.pause ? "Main/nosound.png" : "Main/sound.png"
                            // t.issound ? (t.issound = !1, i.default.instance.Sound_bt.skin = "Main/nosound.png",
                            //     s.default.BGM_PAUSE("audio/BGM.mp3")) : (t.issound = !0, i.default.instance.Sound_bt.skin = "Main/sound.png",
                            //         s.default.PlayBGM("audio/BGM.mp3"));
                        }), i.default.instance.zhuanpan_bt.on(Laya.Event.CLICK, this, function () {
                            platform.getInstance().showInterstitial(() => {
                                i.default.instance.TurnTablePanel.visible = !0, u.default.instance.showTurnPanelUI(!0);
                            })
                        }), i.default.instance.Firstone.on(Laya.Event.CLICK, this, function () {
                            console.log(o.default.Firstgame[0]), o.default.Firstgame[0] = 1, o.default.SaveData(),
                                l.default.instance.OnMouseCall(), i.default.instance.Firstone.visible = !1, i.default.instance.FirstGame.visible = !1,
                                Laya.Tween.clearTween(i.default.instance.hand);
                        }), i.default.instance.Firsttwo.on(Laya.Event.CLICK, this, function () {
                            l.default.instance.GameLose(), i.default.instance.ani.removeSelf(), i.default.instance.Firsttwo.visible = !1,
                                i.default.instance.FirstGame.visible = !1;
                        }), i.default.instance.Firstthree.on(Laya.Event.CLICK, this, function () {
                            l.default.instance.GameLose(), i.default.instance.ani.removeSelf(), i.default.instance.Firstthree.visible = !1,
                                i.default.instance.FirstGame.visible = !1;
                        }), i.default.instance.Firstfour.on(Laya.Event.CLICK, this, function () {
                            l.default.instance.GameLose(), i.default.instance.ani.removeSelf(), i.default.instance.Firstfour.visible = !1,
                                i.default.instance.FirstGame.visible = !1;
                        });
                }, e.prototype.GameLoseClickInit = function () {
                    var t = this;
                    i.default.instance.Losebegain_bt.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            "Over/fuhuo.png" == i.default.instance.Losebegain_bt.skin ? t.fuhuoCallBack() : (t.isbaokuan = !1,
                                p.default.close_lifePoint(), l.default.instance.tween_next.clear(), 1 == i.default.instance.HandBg.visible && t.hideHand(),
                                t.Restart_num += 1, 1 == t.Restart_num && (n.default.Instance().isskin = !1), 2 == t.Restart_num && (n.default.Instance().isskin = !0,
                                    i.default.instance.HandBg.visible = !0, l.default.instance.handTween1()), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                n.default.Instance().gameCamera.fieldOfView = 120, t.BtnSound(), o.default.littlelevel = 1,
                                t.fuhuonum = 0, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().onload());
                        })
                    }), i.default.instance.Lose_close.on(Laya.Event.CLICK, this, function () {
                        l.default.instance.tween_next.clear(), i.default.instance.Nextlevel_bt.scaleX = 1,
                            i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                            s.default.ShowBanner(), t.BtnSound(), t.fuhuonum = 0, o.default.littlelevel = 1,
                            i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                            n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                            i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                        i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                            o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                    }), i.default.instance.Lose_back.on(Laya.Event.CLICK, this, function () {
                        l.default.instance.tween_next.clear(), i.default.instance.Nextlevel_bt.scaleX = 1,
                            i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                            s.default.ShowBanner(), t.BtnSound(), t.fuhuonum = 0, o.default.littlelevel = 1,
                            i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                            n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                            i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                        i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                            o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                    }), i.default.instance.btn_replay0.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            (t.isbaokuan = !1, p.default.close_lifePoint(), l.default.instance.tween_next.clear(), 1 == i.default.instance.HandBg.visible && t.hideHand(),
                                t.Restart_num += 1, 1 == t.Restart_num && (n.default.Instance().isskin = !1), 2 == t.Restart_num && (n.default.Instance().isskin = !0,
                                    i.default.instance.HandBg.visible = !0, l.default.instance.handTween1()), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                n.default.Instance().gameCamera.fieldOfView = 120, t.BtnSound(), o.default.littlelevel = 1,
                                t.fuhuonum = 0, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().onload());
                        })
                    }), i.default.instance.btn_home0.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            l.default.instance.tween_next.clear(), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                s.default.ShowBanner(), t.BtnSound(), t.fuhuonum = 0, o.default.littlelevel = 1,
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                                i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                            i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                        })
                    }), i.default.instance.Freehuo_bt.on(Laya.Event.CLICK, this, function () {
                        t.BtnSound(), t.fuhuoCallBack();
                    }), i.default.instance.overtip_bt.on(Laya.Event.CLICK, this, function () {
                        // 1 == i.default.instance.overtip.visible ? (i.default.instance.overtip.visible = !1,
                        //     "Over/videofuhuotip.png" == i.default.instance.overtips.skin || "Over/sharefuhuotip.png" == i.default.instance.overtips.skin ? 
                        //     i.default.instance.Losebegain_bt.skin = "Over/nofuhuo.png" : "Over/novideofuhuotip.png" != i.default.instance.overtips.skin && 
                        //     "Over/nosharefuhuotip.png" != i.default.instance.overtips.skin ||
                        //      (i.default.instance.Losebegain_bt.skin = "Over/fuhuo.png")) : (i.default.instance.overtip.visible = !0,
                        //         "Over/videofuhuotip.png" == i.default.instance.overtips.skin || "Over/sharefuhuotip.png" == i.default.instance.overtips.skin ? 
                        //         i.default.instance.Losebegain_bt.skin = "Over/fuhuo.png" : "Over/novideofuhuotip.png" != i.default.instance.overtips.skin && 
                        //         "Over/nosharefuhuotip.png" != i.default.instance.overtips.skin 
                        //         || (i.default.instance.Losebegain_bt.skin = "Over/nofuhuo.png"));
                    });
                }, e.prototype.fuhuoCallBack = function () {
                    // Laya.Browser.onWeiXin ?
                    s.default.ShowRewardAd("video_fuhuo");
                    window.scrollList.visible = false;
                    // : (l.default.instance.PlayerFuhuo(),
                    //     i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                    //     e.instance.fuhuonum += 1, 1 == e.instance.fuhuonum || 2 == e.instance.fuhuonum && (i.default.instance.HandBg.visible = !0,
                    //         l.default.instance.handTween1()));
                }, e.prototype.GameWinClickInit = function () {
                    var t = this;
                    i.default.instance.win_next.on(Laya.Event.CLICK, this, function () {
                        p.default.click_over_nextPoint(), t.BtnSound(),
                            o.default.level >= 40 && (o.default.level = 1)
                        platform.getInstance().showInterstitial(() => {
                            (s.default.HideBanner(), n.default.Instance().gameCamera.fieldOfView = 120,
                                o.default.overdiamond = 0, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                                n.default.Instance().onload(), i.default.instance.GameUIPanel.visible = !0, i.default.instance.GameOverUIPanel.visible = !1,
                                window.scrollList.visible = false,
                                i.default.instance.WinPanel.visible = !1, t.isbaokuan = !1)
                        });
                    }), i.default.instance.btn_diamond.on(Laya.Event.CLICK, this, function () {
                        t.BtnSound(), s.default.showVideoAd(function () {
                            o.default.diamond += 2 * o.default.overdiamond, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                i.default.instance.diamondlabel.text = "" + o.default.diamond, i.default.instance.shop_label.text = "" + o.default.diamond,
                                o.default.show("Diamond +" + String(3 * o.default.overdiamond)), t.isvideofive = !0,
                                p.default.video_getmanycoinPoint();

                            (s.default.HideBanner(), n.default.Instance().gameCamera.fieldOfView = 120,
                                o.default.overdiamond = 0, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                                n.default.Instance().onload(), i.default.instance.GameUIPanel.visible = !0, i.default.instance.GameOverUIPanel.visible = !1,
                                window.scrollList.visible = false,
                                i.default.instance.WinPanel.visible = !1, t.isbaokuan = !1)

                            Laya.stage.event("refreshCoin");
                        }, null, "video_threeget");
                    }), i.default.instance.btn_home1.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            l.default.instance.tween_next.clear(), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                s.default.ShowBanner(), t.BtnSound(), t.fuhuonum = 0, o.default.littlelevel = 1,
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                                i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                            i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                        })
                    }), i.default.instance.nextgou_bt.on(Laya.Event.CLICK, this, function () {
                        1 == i.default.instance.nextgou.visible ? i.default.instance.nextgou.visible = !1 : i.default.instance.nextgou.visible = !0;
                    }), i.default.instance.win_back.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            s.default.HideBanner(), s.default.ShowBanner(), t.BtnSound(), o.default.overdiamond = 0,
                                i.default.instance.WinPanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                                i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                            i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                        })
                    }), i.default.instance.Fiveget_bt.on(Laya.Event.CLICK, this, function () {
                        t.BtnSound(), s.default.showVideoAd(function () {
                            o.default.diamond += 5 * o.default.overdiamond, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                i.default.instance.diamondlabel.text = "" + o.default.diamond, i.default.instance.shop_label.text = "" + o.default.diamond,
                                o.default.show("Diamond +" + String(5 * o.default.overdiamond)), t.isvideofive = !0,
                                p.default.video_getmanycoinPoint();
                            Laya.stage.event("refreshCoin");
                        }, null, "video_fiveget");
                    }), i.default.instance.luping_get.on(Laya.Event.CLICK, this, function () {
                        s.default.ShareGame();
                    });
                }, e.prototype.GameClickInit = function () {
                    var t = this;
                    i.default.instance.Game_backbt.on(Laya.Event.CLICK, this, function () {
                        n.default.Instance().iscan || (1 == i.default.instance.HandBg.visible && t.hideHand(),
                            h.default.instance.usingskin = -1, s.default.ShowBanner(), t.BtnSound(), o.default.overdiamond = 0,
                            o.default.littlelevel = 1, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                            i.default.instance.GameUIPanel.visible = !1, i.default.instance.GameBg.visible = !0,
                            i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true,
                            i.default.instance.startdiamondlabel.text = "" + o.default.diamond, l.default.instance.tween_next.clear(),
                            i.default.instance.Nextlevel_bt.scaleX = 1, i.default.instance.Nextlevel_bt.scaleY = 1,
                            o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init()));
                    }), i.default.instance.Nextlevel_ui.on(Laya.Event.CLICK, this, function () {
                        l.default.instance.canGoOtherView && 0 == l.default.instance.ish && 0 == l.default.instance.isv ? (p.default.click_skipbtnPoint(),
                            1 == i.default.instance.HandBg.visible && t.hideHand(), t.BtnSound(), //Laya.Browser.onWeiXin ?
                            s.default.ShowRewardAd("video_nextlevel")
                            //: (t.Restart_num = 0,
                            //     t.istannext = !1, n.default.Instance().isskin = !0, l.default.instance.Next(), l.default.instance.tween_next.clear(),
                            //     i.default.instance.Nextlevel_bt.scaleX = 1, i.default.instance.Nextlevel_bt.scaleY = 1)
                        ) :
                            o.default.show("The current status cannot be switched off temporarily. Please try again later");
                    }), i.default.instance.btn_replay.on(Laya.Event.CLICK, this, function () {
                        l.default.instance.canGoOtherView && 0 == l.default.instance.ish && 0 == l.default.instance.isv ? (platform.getInstance().showInterstitial(() => {
                            t.isbaokuan = !1, p.default.close_lifePoint(), l.default.instance.tween_next.clear(), 1 == i.default.instance.HandBg.visible && t.hideHand(),
                                t.Restart_num += 1, 1 == t.Restart_num && (n.default.Instance().isskin = !1), 2 == t.Restart_num && (n.default.Instance().isskin = !0,
                                    i.default.instance.HandBg.visible = !0, l.default.instance.handTween1()), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                n.default.Instance().gameCamera.fieldOfView = 120, t.BtnSound(), o.default.littlelevel = 1,
                                t.fuhuonum = 0, n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(),
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().onload();
                        })) : o.default.show("The current status cannot be switched off temporarily. Please try again later");
                    }), i.default.instance.btn_home.on(Laya.Event.CLICK, this, function () {
                        l.default.instance.canGoOtherView && 0 == l.default.instance.ish && 0 == l.default.instance.isv ? (platform.getInstance().showInterstitial(() => {
                            l.default.instance.tween_next.clear(), i.default.instance.Nextlevel_bt.scaleX = 1,
                                i.default.instance.Nextlevel_bt.scaleY = 1, h.default.instance.usingskin = -1, s.default.HideBanner(),
                                s.default.ShowBanner(), t.BtnSound(), t.fuhuonum = 0, o.default.littlelevel = 1,
                                i.default.instance.LosePanel.visible = !1, i.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                                n.default.Instance().MapInit(), n.default.Instance().allendfloorRecover(), i.default.instance.GameUIPanel.visible = !1,
                                i.default.instance.StartUIPanel.visible = !0, window.scrollList.visible = true;
                            i.default.instance.GameBg.visible = !0, i.default.instance.startdiamondlabel.text = "" + o.default.diamond,
                                o.default.isnottan && (o.default.isnottan = !1, f.default.instance.Init());
                        })) : o.default.show("The current status cannot be switched off temporarily. Please try again later");
                    }), i.default.instance.skinuse_bt.on(Laya.Event.CLICK, this, function () {
                        t.BtnSound(), d.default.instance.UseBtnClick();
                    }), i.default.instance.HandBg.on(Laya.Event.CLICK, this, function () {
                        i.default.instance.HandBg.visible = !1, l.default.instance.tween_hand.clear(), i.default.instance.handnext.scaleX = 1,
                            i.default.instance.handnext.scaleY = 1;
                    }), i.default.instance.nextbt.on(Laya.Event.CLICK, this, function () {
                        p.default.click_skipbtnPoint(), t.BtnSound(), Laya.Browser.onWeiXin ? s.default.ShowRewardAd("video_nextlevel") : (t.Restart_num = 0,
                            t.istannext = !1, n.default.Instance().isskin = !0, l.default.instance.Next(), l.default.instance.tween_next.clear(),
                            i.default.instance.Nextlevel_bt.scaleX = 1, i.default.instance.Nextlevel_bt.scaleY = 1,
                            i.default.instance.GameNextPanelUIClose());
                    }), i.default.instance.closebt.on(Laya.Event.CLICK, this, function () {
                        i.default.instance.GameNextPanelUIClose(), 0 == t.isback ? i.default.instance.Lose() : (t.isback = !1,
                            n.default.Instance().gameStart(), l.default.instance.MapStart());
                    }), i.default.instance.task_bt.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            i.default.instance.TaskPanel.visible = !0, c.default.instance.TaskInit();
                        })
                    });
                }, e.prototype.BtnSound = function () {
                    1 == this.issound && s.default.PlayerSound("audio/button.mp3");
                }, e.prototype.SkinFuction = function () {
                    h.default.instance.skinInit(), n.default.Instance().gameStart(), l.default.instance.MapStart();
                }, e.prototype.StartGameClick = function () {
                    o.default.level >= 40 && (o.default.level = 1)
                    1 == i.default.instance.isgame && (p.default.game_startPoint(),
                        this.istannext = !1, n.default.Instance().isskin = !0, this.fuhuonum = 0, this.Restart_num = 0,
                        h.default.instance.usingskin = -1, s.default.HideBanner(), n.default.Instance().gameCamera.fieldOfView = 120,
                        this.BtnSound(), i.default.instance.StartUIPanel.visible = !1, window.scrollList.visible = false,
                        i.default.instance.GameBg.visible = !1, i.default.instance.GameUIPanel.visible = !0,
                        i.default.instance.isnext = !1, n.default.Instance().onload());
                }, e.prototype.hideHand = function () {
                    i.default.instance.HandBg.visible = !1, l.default.instance.tween_hand.clear(), i.default.instance.handnext.scaleX = 1,
                        i.default.instance.handnext.scaleY = 1, i.default.instance.handnext.top = i.default.instance.Nextlevel_bt.top - 20;
                }, e.prototype.SkinuseBackCall = function () {
                    i.default.instance.SkinUsePanel.visible = !1, n.default.Instance().gameStart(),
                        l.default.instance.MapStart(), Laya.Tween.clearAll(i.default.instance.skinuse_bt),
                        p.default.close_skinusePoint();
                }, e;
            }(Laya.Script);
        a.default = g;
    }, {
        "../3DScript/MaterialCtrl": 5,
        "../3DScript/PlayerCtrl": 9,
        "../3DScript/SceneControl": 10,
        "../DataManager": 11,
        "../UIControl/BuryingPointCtr": 24,
        "../UIControl/SkinUseCtrl": 29,
        "../UIControl/TaskController": 30,
        "../UIControl/TurnTableCtr": 31,
        "../WeChatManager": 43,
        "./GameUI": 35,
        "./RigisterCtr": 37,
        "./ShopManager": 38
    }],
    40: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../WeChatManager"), n = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.isclick = !1, e.isone = !1, e;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                var t = this;
                e.instance = this, this.bkPanel = this.owner, this.back_bt = this.bkPanel.getChildByName("back_bt"),
                    this.back_bt.on(Laya.Event.CLICK, this, function () {
                        t.showBkPanelUI(!1, t.callback);
                    });
            }, e.prototype.showBkPanelUI = function (t, e, a) {
                var n = this;
                if (void 0 === a && (a = 0), this.bkPanel.visible = t, t) {
                    this.callback = e, i.default.HideBanner();
                    Math.random() > .5 ? (this.back_bt.centerY = 350, Laya.timer.once(1500, this, function () {
                        n.back_bt.centerY = 0;
                    })) : this.back_bt.centerY = 350;
                } else e && e();
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = n;
    }, {
        "../WeChatManager": 43
    }],
    41: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameUI"), n = t("../WeChatManager"), s = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                e.instance = this, this.getSkinPanel = this.owner,
                    this.tiaoguo_bt = this.getSkinPanel.getChildByName("tiaoguo_bt");
            }, e.prototype.onStart = function () {
                var t = this;
                this.tiaoguo_bt.on(Laya.Event.CLICK, this, function () {
                    t.showUI(!1);
                });
            }, e.prototype.backCall = function () {
                this.showUI(!1);
            }, e.prototype.showUI = function (t) {
                var e = this;
                this.getSkinPanel.visible = t, t && (this.tiaoguo_bt.visible = !1,
                    Laya.timer.once(2e3, this, function () {
                        e.tiaoguo_bt.visible = !0;
                    }), n.default.ShowBanner());
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../WeChatManager": 43,
        "./GameUI": 35
    }],
    42: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../WeChatManager"), n = t("./GameUI"), s = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return __extends(e, t), e.prototype.onAwake = function () {
                e.instance = this, this.helpPanel = this.owner,
                    this.tiaoguo_bt = this.helpPanel.getChildByName("tiaoguo_bt");
            }, e.prototype.onStart = function () {
                var t = this;
                this.tiaoguo_bt.on(Laya.Event.CLICK, this, function () {
                    t.showUI(!1, t.callBack);
                });
            }, e.prototype.backCall = function () {
                this.showUI(!1, this.callBack);
            }, e.prototype.showUI = function (t, e) {
                var a = this;
                this.helpPanel.visible = t, t ? (i.default.ShowBanner(), this.callBack = e,
                    this.tiaoguo_bt.visible = !1, Laya.timer.once(2e3, this, function () {
                        a.tiaoguo_bt.visible = !0;
                    })) : (e && e());
            }, e.instance = null, e;
        }(Laya.Script);
        a.default = s;
    }, {
        "../WeChatManager": 43,
        "./GameUI": 35
    }],
    43: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./DataManager"), n = t("./UIScript/GameUI"), s = t("./3DScript/PlayerCtrl"), o = t("./UIScript/StartManage"), l = t("./UIScript/RigisterCtr"), r = t("./UIScript/LuckBoxManage"), h = t("./3DScript/SceneControl"), d = t("./UIControl/TaskController"), c = t("./UIControl/gongxiPanelCtr"), u = t("./UIScript/helpPanelCtr"),
            f = t("./UIScript/getSkinPanelCtr"),
            p = "", //https://www.7cgames.cn/transfer.php?url=https://www.7cgames.cn/GameRes/7CGamesBoxWX/NewGameBox/7cgamesBoxData.json
            g = "adunit-82fcd42f824786fe", m = "adunit-a3bffe6a2e0cb3d0", y = function () {
                function t() { }
                return t.ShowShareMenu = function () {
                    var t = this;
                    Laya.Browser.onWeiXin && wx.showShareMenu({
                        withShareTicket: !0,
                        menus: ["shareAppMessage", "shareTimeline"],
                        success: function () {
                            wx.onShareAppMessage(function () {
                                var e = Math.floor(3 * Math.random());
                                return {
                                    title: t.share_string[e],
                                    imageUrl: t.share_path[e],
                                    query: "",
                                    success: function () { }
                                };
                            });
                        },
                        fail: function () { },
                        complete: function () { }
                    });
                }, t.ShareGame = function () {
                    var t = this;
                    if (console.log("分享"), Laya.Browser.onWeiXin && 0 == this.isshare) {
                        this.isshare = !0, Laya.timer.once(1e3, this, function () {
                            t.isshare = !1;
                        });
                        var e, a, i = Math.floor(3 * Math.random());
                        e = this.share_string[i], a = this.share_path[i], wx.shareAppMessage({
                            title: e,
                            imageUrl: a
                        });
                    }
                }, t.RewardShare = function (t) {
                    var e, a, i = Math.floor(3 * Math.random());
                    e = this.share_string[i], a = this.share_path[i], wx.shareAppMessage({
                        title: e,
                        imageUrl: a
                    }), this.group(t);
                }, t.group = function (t) {
                    var e, a, i = this;
                }, t.Gian = function (t) {
                    "share_fuhuo" == t ? (s.default.instance.PlayerFuhuo(),
                        n.default.instance.LosePanel.visible = !1, n.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false,
                        this.HideBanner()) : "share_nextlevel" == t ? (o.default.instance.Restart_num = 0,
                            o.default.instance.istannext = !1, h.default.Instance().isskin = !0, s.default.instance.Next(),
                            s.default.instance.tween_next.clear(), n.default.instance.Nextlevel_bt.scaleX = 1,
                            n.default.instance.Nextlevel_bt.scaleY = 1, n.default.instance.GameNextPanelUIClose()) : "share_useskin" == t ? o.default.instance.SkinFuction() : "againcoin_share" == t ? l.default.instance.againGet() : "luckbox_share" == t ? r.default.instance.openbtn() : "gongxishare" == t ? c.default.instance.backCall() : "helpShare" == t ? u.default.instance.backCall() :
                                "skinshare" == t && f.default.instance.backCall();
                }, t.ShowModalGold = function () {
                    platform.getInstance().prompt0("Diamond needed!");
                }, t.ShowModal = function (e, a) {
                    // platform.getInstance().showReward(() => {
                    switch (a) {
                        case "videoGetDiamond":
                            t.ShowRewardAd("videoGetDiamond");
                            break;

                        case "video_fuhuo":
                            t.ShowRewardAd("video_fuhuo");
                            break;

                        case "share_fuhuo":
                            t.RewardShare("share_fuhuo");
                            break;

                        case "share_nextlevel":
                            t.RewardShare("share_nextlevel");
                            break;

                        case "video_nextlevel":
                            t.ShowRewardAd("video_nextlevel");
                            break;

                        case "video_fiveget":
                            t.ShowRewardAd("video_fiveget");
                            break;
                        case "video_threeget":
                            t.ShowRewardAd("video_threeget");
                            break;
                        case "share_useskin":
                            t.RewardShare("share_useskin");
                            break;

                        case "video_useskin":
                            t.ShowRewardAd("video_useskin");
                            break;

                        case "againcoin_share":
                            t.RewardShare("againcoin_share");
                            break;

                        case "againcoin_video":
                            t.ShowRewardAd("againcoin_video");
                            break;

                        case "rigitervideo":
                            t.ShowRewardAd("rigitervideo");
                            break;

                        case "luckbox_video":
                            t.ShowRewardAd("luckbox_video");
                            break;

                        case "luckbox_share":
                            t.RewardShare("luckbox_share");
                    }
                    // })
                }, t.ShowModal2 = function (t, e) {
                    // void 0 === e && (e = null);
                    // wx.showModal({
                    //     title: "提示",
                    //     content: t,
                    //     success: function (t) {
                    //         t.confirm ? e && e() : t.cancel;
                    //     }
                    // });
                }, t.PostMessage = function (t) {
                    Laya.Browser.onWeiXin && wx.getOpenDataContext && (null == this.openDataContext && (this.openDataContext = wx.getOpenDataContext()),
                        this.openDataContext.postMessage(t));
                }, t.CreateUserInfoButton = function (t, e, a, i, n, s, o) {
                    var l = this;
                    if (void 0 === e && (e = ""), void 0 === a && (a = ""), void 0 === i && (i = 0),
                        void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === o && (o = 0), Laya.Browser.onWeiXin) if (wx.createUserInfoButton) {
                            var r = wx.createUserInfoButton({
                                type: t,
                                text: e,
                                image: a,
                                style: {
                                    left: wx.getSystemInfoSync().windowWidth * i - s / 2,
                                    top: wx.getSystemInfoSync().windowHeight * n - o / 2,
                                    width: s,
                                    height: o
                                }
                            });
                            r.onTap(function (t) {
                                r.destroy(), l.userInfo = t.userInfo, console.log("用户信息", l.userInfo), void 0 == l.userInfo && (l.userInfo = {
                                    nickName: "***",
                                    avatarUrl: ""
                                });
                            });
                        } else wx.authorize({
                            scope: "scope.userInfo",
                            success: function () {
                                var t = this;
                                wx.getUserInfo({
                                    success: function (e) {
                                        t.userInfo = e.userInfo, console.log("***用户信息", t.userInfo);
                                    },
                                    fail: function (t) {
                                        console.log("***用户信息获取失败", t);
                                    }
                                });
                            },
                            fail: function (t) {
                                console.log("***授权失败", t);
                            }
                        });
                }, t.LoadSubpackage = function (t, e) {
                    Laya.Browser.onWeiXin && (wx.loadSubpackage ? wx.loadSubpackage({
                        name: t,
                        success: function (t) {
                            console.log("分包加载成功", t), e();
                        },
                        fail: function (t) {
                            console.log("分包加载失败", t);
                        }
                    }) : (Laya.Browser.window.require(t + "/game.js"), Laya.timer.once(1e3, this, function () {
                        e();
                    })));
                }, t.MoreGameLink_Old = function (t) {
                    var e = this;
                    void 0 === t && (t = ""), Laya.Browser.onWeiXin && (null == this.gameListData ? Laya.loader.load(p, Laya.Handler.create(this, function () {
                        e.gameListData = Laya.loader.getRes(p), e.maxIndex = e.gameListData.data.length,
                            "" != t && "" == t && Laya.Browser.onAndroid && wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
                                appid: t
                            }) : (e.indexQR++, e.indexQR %= e.maxIndex, e.ShowQRCode(e.gameListData.data[e.indexQR].qrcode));
                    })) : (this.indexQR++, this.indexQR %= this.maxIndex, this.ShowQRCode(this.gameListData.data[this.indexQR].qrcode)));
                }, t.MoreGameLink = function (t, e) {
                    void 0 === e && (e = ""), Laya.Browser.onWeiXin && ("" != e && wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
                        appId: e
                    }) : this.ShowQRCode(t));
                }, t.ShowQRCode = function (t) {
                    Laya.Browser.onWeiXin && wx.previewImage && wx.previewImage({
                        current: null,
                        urls: [t]
                    });
                }, t.SetVibration = function (t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = null), Laya.Browser.onWeiXin && (t ? wx.vibrateShort && wx.vibrateShort({
                        success: function () { }
                    }) : wx.vibrateLong && wx.vibrateLong({
                        success: function () { }
                    }));
                }, t.WxOnShow = function (t) {
                    void 0 === t && (t = null), Laya.Browser.onWeiXin && wx.onShow && wx.onShow(function (e) {
                        t();
                    });
                }, t.WxOnHide = function (t) {
                    void 0 === t && (t = null), Laya.Browser.onWeiXin && wx.onHide && wx.onHide(function (e) {
                        t();
                    });
                }, t.CreateRewardAd = function () {
                    var t = this;
                    Laya.Browser.onWeiXin && wx.createRewardedVideoAd && (null == this.rewardAd && (this.rewardAd = wx.createRewardedVideoAd({
                        adUnitId: g
                    })), this.rewardAd.onLoad(function () {
                        console.log("拉取视频成功"), t.isHasAd = !0;
                    }), this.rewardAd.onError(function (t) {
                        console.log("拉取视频失败", t);
                    }));
                }, t.rewardAd_CallBack = function (e) {
                    console.log("用户点击了【关闭广告】按钮"), e && e.isEnded || void 0 === e ? (this.callBack_Success && this.callBack_Success(),
                        null != i.default.taskdata[1] && (i.default.taskdata[1] = i.default.taskdata[1] + 1,
                            i.default.SaveData(), 1 == n.default.instance.TaskPanel.visible && d.default.instance.TaskInit())) : (
                        this.callBack_Fail && this.callBack_Fail()), o.default.instance.issound && (t.BGM_PAUSE("audio/BGM.mp3"),
                            t.PlayBGM("audio/BGM.mp3"));
                }, t.showVideoAd = function (e, a, s) {
                    platform.getInstance().showReward(() => {
                        (e && (e(), null != i.default.taskdata[1] &&
                            (i.default.taskdata[1] = i.default.taskdata[1] + 1, i.default.SaveData(),
                                1 == n.default.instance.TaskPanel.visible && d.default.instance.TaskInit())))
                    });
                }, t.ShowRewardAd = function (t) {
                    var e = this;
                    this.showVideoAd(function () {
                        switch (t) {
                            case "videoGetDiamond":
                                i.default.diamond += 50, n.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                                    n.default.instance.diamondlabel.text = "" + i.default.diamond, n.default.instance.shop_label.text = "" + i.default.diamond,
                                    i.default.show("Diamonds +50");
                                Laya.stage.event("refreshCoin");
                                break;

                            case "video_fuhuo":
                                e.HideBanner(), s.default.instance.PlayerFuhuo(), n.default.instance.LosePanel.visible = !1,
                                    n.default.instance.GameOverUIPanel.visible = !1, window.scrollList.visible = false, i.default.fuhuo_num < 2 && (i.default.fuhuo_num += 1,
                                        i.default.SaveData());
                                break;

                            case "video_fiveget":
                                i.default.diamond += 5 * i.default.overdiamond, n.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                                    n.default.instance.diamondlabel.text = "" + i.default.diamond, n.default.instance.shop_label.text = "" + i.default.diamond,
                                    i.default.show("Diamonds +" + String(5 * i.default.overdiamond)), o.default.instance.isgetfive = !0;
                                Laya.stage.event("refreshCoin");
                                break;
                            case "video_threeget":
                                // i.default.diamond += 3 * i.default.overdiamond, n.default.instance.startdiamondlabel.text = "" + i.default.diamond,
                                //     n.default.instance.diamondlabel.text = "" + i.default.diamond, n.default.instance.shop_label.text = "" + i.default.diamond,
                                //     i.default.show("Diamonds +" + String(3 * i.default.overdiamond)), o.default.instance.isgetfive = !0;
                                // Laya.stage.event("refreshCoin");
                                break;

                            case "video_nextlevel":
                                o.default.instance.Restart_num = 0, o.default.instance.istannext = !1, h.default.Instance().isskin = !0,
                                    s.default.instance.Next(), s.default.instance.tween_next.clear(), n.default.instance.GameNextPanelUIClose();
                                break;

                            case "video_useskin":
                                o.default.instance.SkinFuction();
                                break;

                            case "rigitervideo":
                                l.default.instance.Link();
                                break;

                            case "againcoin_video":
                                l.default.instance.againGet();
                                break;

                            case "luckbox_video":
                                r.default.instance.openbtn();
                        }
                    }, null, "");
                }, t.CreateInterAd = function () {
                    wx.createInterstitialAd && (this.interstitial = wx.createInterstitialAd({
                        adUnitId: "adunit-edbe660239d51a8e"
                    }), this.interstitial.onError(function (t) {
                        console.log("条形广告 加载失败！"), console.log(t);
                    }));
                }, t.interstitial_show = function () {
                    this.interstitial && wx.createInterstitialAd && this.interstitial.show().catch(function (t) {
                        console.error(t);
                    });
                }, t.CreateBanner = function () {
                    var t = this;
                    if (Laya.Browser.onWeiXin && wx.createBannerAd) {
                        if (null != this.bannerAd) return;
                        this.bannerAd = wx.createBannerAd({
                            adUnitId: m,
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: 0,
                                width: Laya.Browser.width
                            }
                        }), this.bannerAd.onError(function (e) {
                            console.log("banner 加载失败", e), t.ClearBanner();
                        }), this.bannerAd.onLoad(function (t) {
                            console.log("banner 加载成功", t);
                        }), this.bannerAd.onResize(function (e) {
                            t.bannerAd.style.left = (wx.getSystemInfoSync().screenWidth - t.bannerAd.style.realWidth) / 2,
                                t.bannerAd.style.top = wx.getSystemInfoSync().screenHeight - t.bannerAd.style.realHeight,
                                Laya.Browser.onIOS && Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2.1 && (t.bannerAd.style.top = wx.getSystemInfoSync().screenHeight - t.bannerAd.style.realHeight - 20);
                        });
                    }
                }, t.ClearBanner = function () {
                    Laya.Browser.onWeiXin && null != this.bannerAd && (this.bannerAd.destroy && this.bannerAd.destroy(),
                        this.bannerAd = null);
                }, t.ShowBanner = function () {
                    Laya.Browser.onWeiXin && (null != this.bannerAd ? this.bannerAd.show && this.bannerAd.show() : this.CreateBanner());
                }, t.HideBanner = function () {
                    Laya.Browser.onWeiXin && this.bannerAd.hide && this.bannerAd.hide();
                }, t.CreatGridAd = function () {
                    var t = this;
                    Laya.Browser.window.wx && wx.createGridAd && ("" == this.gridAd && console.log("请检查 格子 广告id！"),
                        null == this.gridAd && (this.gridAd = wx.createGridAd({
                            adUnitId: "adunit-55a1708f9f9e21dc",
                            adTheme: "white",
                            gridCount: 5,
                            style: {
                                left: (wx.getSystemInfoSync().screenWidth - 300) / 2,
                                top: wx.getSystemInfoSync().screenHeight - 76,
                                width: Laya.Browser.width,
                                opacity: .8
                            }
                        }), this.gridAd.onError(function (e) {
                            t.isgrid = !1, console.log("格子广告加载失败", e);
                        }), this.gridAd.onLoad(function () {
                            t.isgrid = !0, console.log("格子加载成功");
                        }), this.gridAd.onResize(function (e) {
                            t.gridAd.style.left = (wx.getSystemInfoSync().screenWidth - t.gridAd.style.realWidth) / 2,
                                Laya.Browser.onIOS && Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2.004 ? t.gridAd.style.top = wx.getSystemInfoSync().screenHeight - 1.3 * t.gridAd.style.realHeight : t.gridAd.style.top = wx.getSystemInfoSync().screenHeight - t.gridAd.style.realHeight;
                        })));
                }, t.showGrid = function () {
                    Laya.Browser.onWeiXin && this.gridAd && this.gridAd.show();
                }, t.hideGrid = function () {
                    Laya.Browser.onWeiXin && this.gridAd && this.gridAd.hide();
                }, t.PlayerSound = function (t) {
                    if (!this.isMute && !this.isSoundMute) if (Laya.Browser.onWeiXin) switch (this.audioIndex++,
                        this.audioIndex >= 5 && (this.audioIndex = 0), this.audioIndex) {
                            case 0:
                                null == this.wxAudio1 && (this.wxAudio1 = wx.createInnerAudioContext()), this.wxAudio1.src = t,
                                    this.wxAudio1.play();
                                break;

                            case 1:
                                null == this.wxAudio2 && (this.wxAudio2 = wx.createInnerAudioContext()), this.wxAudio2.src = t,
                                    this.wxAudio2.play();
                                break;

                            case 2:
                                null == this.wxAudio3 && (this.wxAudio3 = wx.createInnerAudioContext()), this.wxAudio3.src = t,
                                    this.wxAudio3.play();
                                break;

                            case 3:
                                null == this.wxAudio4 && (this.wxAudio4 = wx.createInnerAudioContext()), this.wxAudio4.src = t,
                                    this.wxAudio4.play();
                                break;

                            case 4:
                                null == this.wxAudio5 && (this.wxAudio5 = wx.createInnerAudioContext()), this.wxAudio5.src = t,
                                    this.wxAudio5.play();
                        } else Laya.SoundManager.playSound(t);
                }, t.PlayBGM = function (t, e) {
                    void 0 === e && (e = !0), this.isMute || this.isBGMMute || (Laya.Browser.onWeiXin ? (null == this.wxBGMAudio && (this.wxBGMAudio = wx.createInnerAudioContext()),
                        this.wxBGMAudio.src = t, this.wxBGMAudio.loop = e, this.wxBGMAudio.play()) : Laya.SoundManager.playMusic(t));
                }, t.BGM_PAUSE = function (t) {
                    Laya.Browser.onWeiXin ? this.wxBGMAudio.pause() : Laya.SoundManager.stopMusic();
                }, t.BGM_PLAY = function (t) {
                    Laya.Browser.onWeiXin ? this.wxBGMAudio.play() : Laya.SoundManager.playMusic(t);
                }, t.onNetworkStatusChange = function () {
                    var t = this;
                    Laya.Browser.window.wx && Laya.Browser.window.wx.onNetworkStatusChange && Laya.Browser.window.wx.onNetworkStatusChange(function (e) {
                        console.log("当前是否有网络连接：", e.isConnected), console.log("网络类型：", e.networkType), console.log("在此可添加逻辑代码，并注释本行代码"),
                            t.netWorkType = e.networkType;
                    });
                }, t.showToast = function (t, e, a) {
                    void 0 === e && (e = "none"), void 0 === a && (a = 2e3), Laya.Browser.window.wx && tt.showToast && tt.showToast({
                        title: t,
                        icon: e,
                        duration: a
                    });
                }, t.isoutGame = !1, t.openDataContext = null, t.userInfo = null, t.gameListData = null,
                    t.maxIndex = 0, t.indexQR = 0, t.rewardAd = null, t.isHasAd = !1, t.bannerAd = null,
                    t.gridAd = null, t.wxAudio1 = null, t.wxAudio2 = null, t.wxAudio3 = null, t.wxAudio4 = null,
                    t.wxAudio5 = null, t.wxBGMAudio = null, t.isSoundMute = !1, t.isBGMMute = !1, t.isMute = !1,
                    t.audioIndex = 0, t.miniGameIndex = 0, t.next_num = 0, t.isgrid = !1, t.gameRecorder = null,
                    t.videoPath = "", t.startLuPingTime = 0, t.luPingTimes = [], t.isGold = !1, t.systemInfo = null,
                    t.share_string = ["看着方块在迷宫内疯狂逃窜，简直就是一种享受！", "探索斑斓的色彩迷宫，爱豆们能否成功逃出？", "误闯埃及法老墓，原来“他”是真实存在的！", "绝对没有人能走出这个迷宫，别不信！"],
                    t.share_path = ["share_image/1.jpg", "share_image/2.jpg", "share_image/3.jpg", "share_image/4.jpg"],
                    t.ispause = !1, t.iconIndex = 1, t.isHasVideoAd = !1, t.isLoadBannerAd = !1, t.isshare = !1,
                    t.callBack_Success = null, t.callBack_Fail = null, t;
            }();
        a.default = y;
    }, {
        "./3DScript/PlayerCtrl": 9,
        "./3DScript/SceneControl": 10,
        "./DataManager": 11,
        "./UIControl/TaskController": 30,
        "./UIControl/gongxiPanelCtr": 33,
        "./UIScript/GameUI": 35,
        "./UIScript/LuckBoxManage": 36,
        "./UIScript/RigisterCtr": 37,
        "./UIScript/StartManage": 39,
        "./UIScript/getSkinPanelCtr": 41,
        "./UIScript/helpPanelCtr": 42
    }],
    44: [function (t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = Laya.View, n = Laya.ClassUtils.regClass;
        !function (t) {
            !function (t) {
                var e = function (t) {
                    function e() {
                        return t.call(this) || this;
                    }
                    return __extends(e, t), e.prototype.createChildren = function () {
                        t.prototype.createChildren.call(this), this.loadScene("test/Loading");
                    }, e;
                }(i);
                t.LoadingUI = e, n("ui.test.LoadingUI", e);
                var a = function (t) {
                    function e() {
                        return t.call(this) || this;
                    }
                    return __extends(e, t), e.prototype.createChildren = function () {
                        t.prototype.createChildren.call(this), this.loadScene("test/MainScene");
                    }, e;
                }(i);
                t.MainSceneUI = a, n("ui.test.MainSceneUI", a);
            }(t.test || (t.test = {}));
        }(a.ui || (a.ui = {}));
    }, {}]
}, {}, [2]);