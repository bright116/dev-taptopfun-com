var __extends = this && this.__extends || function () {
    var i = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function (i, a) {
        i.__proto__ = a;
    } || function (i, a) {
        for (var t in a) a.hasOwnProperty(t) && (i[t] = a[t]);
    };
    return function (a, t) {
        function __() {
            this.constructor = a;
        }
        i(a, t), a.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __());
    };
}();

!function () {
    return function r(i, a, t) {
        function o(e, _) {
            if (!a[e]) {
                if (!i[e]) {
                    var l = "function" == typeof require && require;
                    if (!_ && l) return l(e, !0);
                    if (n) return n(e, !0);
                    var s = new Error("Cannot find module '" + e + "'");
                    throw s.code = "MODULE_NOT_FOUND", s;
                }
                var f = a[e] = {
                    exports: {}
                };
                i[e][0].call(f.exports, function (a) {
                    return o(i[e][1][a] || a);
                }, f, f.exports, r, i, a, t);
            }
            return a[e].exports;
        }
        for (var n = "function" == typeof require && require, e = 0; e < t.length; e++) o(t[e]);
        return o;
    };
}()({
    1: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.level = 0, this.policesNum = 3, this.policesPath = [];
            };
        }();
        t.Level_miniqiaoba_Data = n;
        var o = function () {
            return function () {
                this.pointNum = 0, this.pathPoint = [];
            };
        }();
        t.Path_miniqiaoba_Data = o;
        var e = function () {
            function Level_miniqiaoba_Config() {
                this._da_taolidafangzi_ta = new Array();
            }
            return Level_miniqiaoba_Config.Get_miniqiaoba_LevelData = function (i) {
                new n();
                return i < 38 ? Level_miniqiaoba_Config.Inst_taolidafangzi_ance._da_taolidafangzi_ta[i - 1] : Level_miniqiaoba_Config.Inst_taolidafangzi_ance._da_taolidafangzi_ta[i % 38 + 37];
            }, Level_miniqiaoba_Config.load_miniqiaoba_ = function () {
                for (var i = new Level_miniqiaoba_Config(), a = Laya.loader.getRes("json/levelConfig.json"), t = 0; t < a.length; ++t) {
                    var e = a[t], _ = new n();
                    _.level = e.level, _.policesNum = e.policesNum;
                    for (var l = 0; l < e.policesPath.length; l++) {
                        var r = new o();
                        r.pointNum = e.policesPath[l].pointNum;
                        for (var s = 0; s < e.policesPath[l].pathPoint.length; s++) r.pathPoint.push(new Laya.Vector3(e.policesPath[l].pathPoint[s][0], e.policesPath[l].pathPoint[s][1], e.policesPath[l].pathPoint[s][2]));
                        _.policesPath.push(r);
                    }
                    i._da_taolidafangzi_ta.push(_);
                }
                return i;
            }, Object.defineProperty(Level_miniqiaoba_Config, "Inst_taolidafangzi_ance", {
                get: function () {
                    return null == Level_miniqiaoba_Config._inst_taolidafangzi_ance && (Level_miniqiaoba_Config._inst_taolidafangzi_ance = Level_miniqiaoba_Config.load_miniqiaoba_()),
                        Level_miniqiaoba_Config._inst_taolidafangzi_ance;
                },
                enumerable: !0,
                configurable: !0
            }), Level_miniqiaoba_Config;
        }();
        t.default = e;
    }, {}],
    2: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), function (i) {
            i[i.None = 0] = "None", i[i.App_Close_miniqiaoba_FirstLoadingView = 500] = "App_Close_miniqiaoba_FirstLoadingView",
                i[i.Game_OnInput_miniqiaoba_Release = 10002] = "Game_OnInput_miniqiaoba_Release",
                i[i.Game_Re_taolidafangzi_live = 10003] = "Game_Re_taolidafangzi_live", i[i.Game_Try_taolidafangzi_Skin = 10004] = "Game_Try_taolidafangzi_Skin",
                i[i.Game_OnLevel_miniqiaoba_Complate = 1001] = "Game_OnLevel_miniqiaoba_Complate",
                i[i.Game_OnInput_miniqiaoba_Move = 1e4] = "Game_OnInput_miniqiaoba_Move", i[i.Game_OnView_miniqiaoba_Open = 600] = "Game_OnView_miniqiaoba_Open",
                i[i.Game_OnView_miniqiaoba_Close = 601] = "Game_OnView_miniqiaoba_Close", i[i.Game_OnLevel_miniqiaoba_Start = 1e3] = "Game_OnLevel_miniqiaoba_Start",
                i[i.Game_OnInput_miniqiaoba_Start = 10001] = "Game_OnInput_miniqiaoba_Start";
        }(t.Event_miniqiaoba_Def || (t.Event_miniqiaoba_Def = {}));
    }, {}],
    3: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Laya.EventDispatcher, o = function (i) {
            function Event_miniqiaoba_Mgr() {
                return i.call(this) || this;
            }
            return __extends(Event_miniqiaoba_Mgr, i), Event_miniqiaoba_Mgr.prototype.removeEvent_miniqiaoba_ = function (i, a, t, n) {
                Event_miniqiaoba_Mgr.event_miniqiaoba_Dispatcher.off(i, a, t);
            }, Event_miniqiaoba_Mgr.prototype.regEvemt_miniqiaoba_ = function (i, a, t, n) {
                Event_miniqiaoba_Mgr.event_miniqiaoba_Dispatcher.on(i, a, t, null == n ? null : [n]);
            }, Event_miniqiaoba_Mgr.prototype.regOnceEvent_miniqiaoba_ = function (i, a, t, n) {
                Event_miniqiaoba_Mgr.event_miniqiaoba_Dispatcher.once(i, a, t, null == n ? null : [n]);
            }, Event_miniqiaoba_Mgr.prototype.dispatch_miniqiaoba_ = function (i, a) {
                Event_miniqiaoba_Mgr.event_miniqiaoba_Dispatcher.event(i, a);
            }, Event_miniqiaoba_Mgr.event_miniqiaoba_Dispatcher = new n(), Event_miniqiaoba_Mgr.inst_taolidafangzi_ance = new Event_miniqiaoba_Mgr(),
                Event_miniqiaoba_Mgr;
        }(n);
        t.default = o;
    }, {}],
    4: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("./Mgr/GameMgr"), o = i("./View/TemplateViews/GameFail/GameFailViewTemplate"), e = i("./View/TemplateViews/GameWin/GameWinViewTemplate"), _ = i("./View/GamingView/GamingView"), l = i("./View/GuideView/GuideView"), r = i("./View/GamingView/Input"), s = i("./View/LoadingView/LoadingView"), f = function () {
            function GameConfig() { }
            return GameConfig.init = function () {
                var i = Laya.ClassUtils.regClass;
                i("Mgr/GameMgr.ts", n.default),
                    i("View/TemplateViews/GameFail/GameFailViewTemplate.ts", o.default),
                    i("View/TemplateViews/GameWin/GameWinViewTemplate.ts", e.default),
                    i("View/GamingView/GamingView.ts", _.default),
                    i("View/GuideView/GuideView.ts", l.default),
                    i("View/GamingView/Input.ts", r.default),
                    i("View/LoadingView/LoadingView.ts", s.default);
            }, GameConfig.width = 750, GameConfig.height = 1334, GameConfig.scaleMode = "showall",
                GameConfig.screenMode = "none", GameConfig.alignV = "middle", GameConfig.alignH = "center",
                GameConfig.startScene = "GameMain.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1,
                GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0,
                GameConfig;
        }();
        t.default = f, f.init();
    }, {
        "./Mgr/GameMgr": 20,
        "./View/GamingView/GamingView": 26,
        "./View/GamingView/Input": 27,
        "./View/GuideView/GuideView": 28,
        "./View/LoadingView/LoadingView": 30,
        "./View/TemplateViews/GameFail/GameFailViewTemplate": 31,
        "./View/TemplateViews/GameWin/GameWinViewTemplate": 32
    }],
    5: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Role/Role"), o = i("../Props/Door"), e = i("../Props/ButtonElectricity"), _ = i("../Props/ButtonPlank"), l = i("../Polices/Police"), r = i("../../Mgr/ViewMgr"), s = i("../Props/Key"), f = i("../Props/DoorLocked"), d = i("../Props/ButtonFan"), g = i("../Props/ButtonFloor"), u = i("../Props/ButtonRotationDoor"), h = i("../Props/Barrier"), m = function (i) {
            function Level_miniqiaoba_() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._elemen_taolidafangzi_tsDynamics = null, a._elem_taolidafangzi_ents = null,
                    a._elements_taolidafangzi_Statics = null, a._sc_taolidafangzi_ene = null, a._elemen_taolidafangzi_tsProps = null,
                    a._bAl_taolidafangzi_ive = !0, a._ro_taolidafangzi_le = null, a._pol_taolidafangzi_ices = null,
                    a._role_taolidafangzi_Sprite = null, a;
            }
            return __extends(Level_miniqiaoba_, i), Level_miniqiaoba_.prototype.ElementProps_miniqiaoba_Init = function () {
                for (var i = 0; i < this._elemen_taolidafangzi_tsProps.numChildren; i++) "DoorHorizontal" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name || "DoorVertical" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(o.default) : "ButtonElectricity" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(e.default) : "ButtonPlank" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(_.default) : "ButtonFan" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(d.default) : "ButtonFloor" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(g.default) : "ButtonRotationDoor" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(u.default) : "Key" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(s.default) : "DoorLocked" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name ? this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(f.default) : "Barrier" == this._elemen_taolidafangzi_tsProps.getChildAt(i).name && this._elemen_taolidafangzi_tsProps.getChildAt(i).addComponent(h.default);
            }, Level_miniqiaoba_.prototype.Role_miniqiaoba_Init = function () {
                this._ro_taolidafangzi_le = this._role_taolidafangzi_Sprite.addComponent(n.default);
            }, Level_miniqiaoba_.prototype.Over_miniqiaoba_ = function (i) {
                if (this._bAl_taolidafangzi_ive) {
                    this._bAl_taolidafangzi_ive = !1, Laya.stage.width = 750;
                    var a = this;
                    r.default.insta_taolidafangzi_nce.open_miniqiaoba_View(i, null, function () {
                        a.Destroy_miniqiaoba_Scene();
                    });
                }
            }, Level_miniqiaoba_.prototype.Destroy_miniqiaoba_Scene = function () {
                this._sc_taolidafangzi_ene.destroy();
            }, Level_miniqiaoba_.prototype.onAwake = function () {
                this._sc_taolidafangzi_ene = this.owner, this._role_taolidafangzi_Sprite = this.owner.getChildByName("Role"),
                    this._pol_taolidafangzi_ices = this.owner.getChildByName("Polices"), this._elem_taolidafangzi_ents = this.owner.getChildByName("Elements"),
                    this._elements_taolidafangzi_Statics = this._elem_taolidafangzi_ents.getChildByName("Statics"),
                    this._elemen_taolidafangzi_tsDynamics = this._elem_taolidafangzi_ents.getChildByName("Dynamics"),
                    this._elemen_taolidafangzi_tsProps = this._elem_taolidafangzi_ents.getChildByName("Props"),
                    this.Polices_miniqiaoba_Init(), this.ElementsDynamics_miniqiaoba_Init(), this.ElementProps_miniqiaoba_Init(),
                    this.Role_miniqiaoba_Init();
            }, Level_miniqiaoba_.prototype.Polices_miniqiaoba_Init = function () {
                for (var i = 0; i < this._pol_taolidafangzi_ices.numChildren; i++) this._pol_taolidafangzi_ices.getChildAt(i).addComponent(l.default);
            }, Level_miniqiaoba_.prototype.ElementsDynamics_miniqiaoba_Init = function () {
                for (var i = 0; i < this._elemen_taolidafangzi_tsDynamics.numChildren; i++) {
                    var a = this._elemen_taolidafangzi_tsDynamics.getChildAt(i).getChildAt(0).getComponent(Laya.Rigidbody3D);
                    a.angularFactor = new Laya.Vector3(0, 1, 0), a.linearFactor = new Laya.Vector3(1, 1, 1),
                        a.gravity = new Laya.Vector3(0, -10, 0), a.linearDamping = .6, a.angularDamping = .6,
                        "Box" == this._elemen_taolidafangzi_tsDynamics.getChildAt(i).name && (a.linearDamping = .4);
                }
            }, Level_miniqiaoba_;
        }(Laya.Script3D);
        t.default = m;
    }, {
        "../../Mgr/ViewMgr": 23,
        "../Polices/Police": 6,
        "../Props/Barrier": 7,
        "../Props/ButtonElectricity": 8,
        "../Props/ButtonFan": 9,
        "../Props/ButtonFloor": 10,
        "../Props/ButtonPlank": 11,
        "../Props/ButtonRotationDoor": 13,
        "../Props/Door": 14,
        "../Props/DoorLocked": 15,
        "../Props/Key": 17,
        "../Role/Role": 18
    }],
    6: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../../Utilit"), o = i("../Role/Role"), e = i("../../Config/LevelConfig"), _ = i("../../User/User"), l = function (i) {
            function Poli_taolidafangzi_ce() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._sprit_taolidafangzi_e3D = null, a._rig_taolidafangzi_id = null, a._line_taolidafangzi_End = new Laya.Vector3(4, .5, 0),
                    a._bAl_taolidafangzi_ive = !0, a._moveSp_taolidafangzi_eed = 3.5, a._lin_taolidafangzi_es = new Laya.PixelLineSprite3D(),
                    a._ani_taolidafangzi_mator = null, a._rota_taolidafangzi_tion = 0, a._rotati_taolidafangzi_onChange = 10,
                    a._line_taolidafangzi_Start = new Laya.Vector3(0, .5, 0), a._sc_taolidafangzi_ene = null,
                    a._pathPo_taolidafangzi_int = [], a._path_taolidafangzi_Index = 0, a._path_taolidafangzi_Dir = !0,
                    a._mov_taolidafangzi_eDir = new Laya.Vector3(0, 0, 0), a._rayL_taolidafangzi_ength = 3.5,
                    a._nMaxA_taolidafangzi_ngle = 6, a;
            }
            return __extends(Poli_taolidafangzi_ce, i), Poli_taolidafangzi_ce.prototype.RayC_taolidafangzi_hange = function () {
                this._line_taolidafangzi_Start = this._sprit_taolidafangzi_e3D.transform.position,
                    this._line_taolidafangzi_Start.y = this._sprit_taolidafangzi_e3D.transform.position.y + 1.5,
                    this._line_taolidafangzi_End.y = this._line_taolidafangzi_Start.y;
                for (var i = 0; i < this._nMaxA_taolidafangzi_ngle; i++) this._line_taolidafangzi_End.x = this._sprit_taolidafangzi_e3D.transform.position.x - this._rayL_taolidafangzi_ength * Math.cos((10 * i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._line_taolidafangzi_End.z = this._sprit_taolidafangzi_e3D.transform.position.z + this._rayL_taolidafangzi_ength * Math.sin((10 * i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this.RayC_taolidafangzi_heck(), this._line_taolidafangzi_End.x = this._sprit_taolidafangzi_e3D.transform.position.x - this._rayL_taolidafangzi_ength * Math.cos((10 * -i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._line_taolidafangzi_End.z = this._sprit_taolidafangzi_e3D.transform.position.z + this._rayL_taolidafangzi_ength * Math.sin((10 * -i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this.RayC_taolidafangzi_heck();
            }, Poli_taolidafangzi_ce.prototype.RayC_taolidafangzi_heck = function () {
                var i = new Array();
                if (this._sc_taolidafangzi_ene.physicsSimulation.raycastAllFromTo(this._line_taolidafangzi_Start, this._line_taolidafangzi_End, i, this._rayL_taolidafangzi_ength),
                    i.length > 0) for (var a = 0; a < i.length; a++) {
                        var t = i[a].collider.owner;
                        "Role" == t.name && (t.getComponent(o.default).Al_taolidafangzi_ive = !1, this._bAl_taolidafangzi_ive = !1,
                            this._rig_taolidafangzi_id.linearVelocity = new Laya.Vector3(0, 0, 0));
                    }
            }, Poli_taolidafangzi_ce.prototype.Init_taolidafangzi_Lines = function () {
                this._lin_taolidafangzi_es.maxLineCount = 2 * this._nMaxA_taolidafangzi_ngle + 2,
                    this._sc_taolidafangzi_ene.addChild(this._lin_taolidafangzi_es), this._line_taolidafangzi_Start = this._sprit_taolidafangzi_e3D.transform.position,
                    this._line_taolidafangzi_Start.y = this._sprit_taolidafangzi_e3D.transform.position.y + 1.5,
                    this._line_taolidafangzi_End.y = this._line_taolidafangzi_Start.y;
                for (var i = 0; i < this._nMaxA_taolidafangzi_ngle; i++) this._line_taolidafangzi_End.x = this._sprit_taolidafangzi_e3D.transform.position.x - this._rayL_taolidafangzi_ength * Math.cos((10 * i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._line_taolidafangzi_End.z = this._sprit_taolidafangzi_e3D.transform.position.z + this._rayL_taolidafangzi_ength * Math.sin((10 * i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._lin_taolidafangzi_es.addLine(this._line_taolidafangzi_Start, this._line_taolidafangzi_End, Laya.Color.WHITE, Laya.Color.WHITE),
                    this._line_taolidafangzi_End.x = this._sprit_taolidafangzi_e3D.transform.position.x - this._rayL_taolidafangzi_ength * Math.cos((10 * -i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._line_taolidafangzi_End.z = this._sprit_taolidafangzi_e3D.transform.position.z + this._rayL_taolidafangzi_ength * Math.sin((10 * -i + this._sprit_taolidafangzi_e3D.transform.rotationEuler.y) * Math.PI / 180),
                    this._lin_taolidafangzi_es.addLine(this._line_taolidafangzi_Start, this._line_taolidafangzi_End, Laya.Color.WHITE, Laya.Color.WHITE);
            }, Poli_taolidafangzi_ce.prototype.onCollisionEnter = function (i) {
                var a = i.other.owner;
                "Police" == a.name ? (this._path_taolidafangzi_Dir = !this._path_taolidafangzi_Dir,
                    this.Chang_taolidafangzi_eTarget()) : "Prop" == a.name && "ButtonElectricity" == a.parent.name ? this.Di_taolidafangzi_e() : "Role" == a.name && (console.log("Police Kill Role"),
                        a.getComponent(o.default).Al_taolidafangzi_ive = !1, this._bAl_taolidafangzi_ive = !1,
                        this._rig_taolidafangzi_id.linearVelocity = new Laya.Vector3(0, 0, 0));
            }, Poli_taolidafangzi_ce.prototype.Mo_taolidafangzi_ve = function () {
                if (!(this._pathPo_taolidafangzi_int.length < 1)) {
                    var i = n.default.get_miniqiaoba_UnitTwoVector3(this._pathPo_taolidafangzi_int[this._path_taolidafangzi_Index], this._sprit_taolidafangzi_e3D.transform.localPosition);
                    if (this._mov_taolidafangzi_eDir.x = i.x * this._moveSp_taolidafangzi_eed, this._mov_taolidafangzi_eDir.y = i.y * this._moveSp_taolidafangzi_eed,
                        this._mov_taolidafangzi_eDir.z = i.z * this._moveSp_taolidafangzi_eed, n.default.get_miniqiaoba_Vector3Distance(this._pathPo_taolidafangzi_int[this._path_taolidafangzi_Index], this._sprit_taolidafangzi_e3D.transform.localPosition) <= .1 && this.Chang_taolidafangzi_eTarget(),
                        this._rota_taolidafangzi_tion = 180 * Math.atan2(this._mov_taolidafangzi_eDir.z, -this._mov_taolidafangzi_eDir.x) / Math.PI,
                        Math.abs(this._sprit_taolidafangzi_e3D.transform.localRotationEulerY - this._rota_taolidafangzi_tion) < this._rotati_taolidafangzi_onChange) this._rig_taolidafangzi_id.linearVelocity = this._mov_taolidafangzi_eDir,
                            this._sprit_taolidafangzi_e3D.transform.localRotationEulerY = this._rota_taolidafangzi_tion; else {
                        this._rig_taolidafangzi_id.linearVelocity = new Laya.Vector3(0, 0, 0);
                        var a = this._sprit_taolidafangzi_e3D.transform.localRotationEulerY > this._rota_taolidafangzi_tion ? -this._rotati_taolidafangzi_onChange : this._rotati_taolidafangzi_onChange;
                        a = Math.abs(this._sprit_taolidafangzi_e3D.transform.localRotationEulerY - this._rota_taolidafangzi_tion) > 180 ? -a : a,
                            this._sprit_taolidafangzi_e3D.transform.localRotationEulerY += a;
                    }
                }
            }, Poli_taolidafangzi_ce.prototype.Di_taolidafangzi_e = function () {
                var i = this;
                this._ani_taolidafangzi_mator.enabled = !0, this._ani_taolidafangzi_mator.play(),
                    this._bAl_taolidafangzi_ive = !1, this._rig_taolidafangzi_id.linearVelocity = new Laya.Vector3(0, 0, 0),
                    this._rig_taolidafangzi_id.enabled = !1, this._sprit_taolidafangzi_e3D.getChildByName("Police").getChildByName("saomiao").active = !1,
                    Laya.timer.once(1e3, this, function () {
                        i && i._sprit_taolidafangzi_e3D && i._sprit_taolidafangzi_e3D.destroy();
                    });
            }, Poli_taolidafangzi_ce.prototype.Chang_taolidafangzi_eTarget = function () {
                this._path_taolidafangzi_Dir ? this._path_taolidafangzi_Index < this._pathPo_taolidafangzi_int.length - 1 ? this._path_taolidafangzi_Index++ : this._path_taolidafangzi_Index > 0 && (this._path_taolidafangzi_Index--,
                    this._path_taolidafangzi_Dir = !1) : this._path_taolidafangzi_Index > 0 ? this._path_taolidafangzi_Index-- : this._path_taolidafangzi_Index < this._pathPo_taolidafangzi_int.length - 1 && (this._path_taolidafangzi_Index++,
                        this._path_taolidafangzi_Dir = !0);
            }, Poli_taolidafangzi_ce.prototype.onAwake = function () {
                this._sprit_taolidafangzi_e3D = this.owner, this._sc_taolidafangzi_ene = this.owner.parent.parent,
                    this._rig_taolidafangzi_id = this.owner.getComponent(Laya.Rigidbody3D), this._rig_taolidafangzi_id.angularFactor = new Laya.Vector3(0, 0, 0),
                    this._rig_taolidafangzi_id.linearFactor = new Laya.Vector3(1, 0, 1), this._rig_taolidafangzi_id.angularDamping = .99,
                    this._rig_taolidafangzi_id.linearDamping = .8, this._rig_taolidafangzi_id.collisionGroup = 1e4,
                    this._ani_taolidafangzi_mator = this._sprit_taolidafangzi_e3D.getChildByName("Police").getComponent(Laya.Animator),
                    this._ani_taolidafangzi_mator.enabled = !1, this.Init_taolidafangzi_Path();
            }, Poli_taolidafangzi_ce.prototype.onUpdate = function () {
                this._bAl_taolidafangzi_ive && (this._rig_taolidafangzi_id.wakeUp(), this.Mo_taolidafangzi_ve(),
                    this.RayC_taolidafangzi_hange(), this._sprit_taolidafangzi_e3D.transform.position.y = .1);
            }, Poli_taolidafangzi_ce.prototype.Init_taolidafangzi_Path = function () {
                var i = this._sprit_taolidafangzi_e3D.parent.getChildIndex(this._sprit_taolidafangzi_e3D);
                this._pathPo_taolidafangzi_int = e.default.Get_miniqiaoba_LevelData(_.default.get_miniqiaoba_FakerLeveNum()).policesPath[i].pathPoint,
                    this._pathPo_taolidafangzi_int.length < 1 && (this._rig_taolidafangzi_id.angularDamping = 0,
                        this._rig_taolidafangzi_id.angularVelocity = new Laya.Vector3(0, 5, 0), this._rig_taolidafangzi_id.sleepAngularVelocity = .001);
            }, Poli_taolidafangzi_ce;
        }(Laya.Script3D);
        t.default = l;
    }, {
        "../../Config/LevelConfig": 1,
        "../../User/User": 24,
        "../../Utilit": 25,
        "../Role/Role": 18
    }],
    7: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Polices/Police"), o = function (i) {
            function Barr_taolidafangzi_ier() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._spr_taolidafangzi_ite3D = null, a._colli_taolidafangzi_der = null, a;
            }
            return __extends(Barr_taolidafangzi_ier, i), Barr_taolidafangzi_ier.prototype.onTriggerEnter = function (i) {
                if (console.log(i.owner.name), "Role" == i.owner.name && i.owner.getComponent(Laya.Rigidbody3D).applyImpulse(new Laya.Vector3(0, -15, 0)),
                    "Police" == i.owner.name) {
                    i.owner.getComponent(n.default)._bAl_taolidafangzi_ive = !1;
                    var a = i.owner.getComponent(Laya.Rigidbody3D);
                    a.isTrigger = !0, a.linearFactor = new Laya.Vector3(1, 1, 1), a.linearVelocity = new Laya.Vector3(0, -50, 0);
                }
            }, Barr_taolidafangzi_ier.prototype.onAwake = function () {
                this._spr_taolidafangzi_ite3D = this.owner, this._colli_taolidafangzi_der = this.owner.getComponent(Laya.PhysicsCollider);
            }, Barr_taolidafangzi_ier;
        }(Laya.Script3D);
        t.default = o;
    }, {
        "../Polices/Police": 6
    }],
    8: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("./Electricity"), o = function (i) {
            function ButtonE_taolidafangzi_lectricity() {
                return null !== i && i.apply(this, arguments) || this;
            }
            return __extends(ButtonE_taolidafangzi_lectricity, i), ButtonE_taolidafangzi_lectricity.prototype.ButtonT_taolidafangzi_rigger = function () {
                i.prototype.ButtonT_taolidafangzi_rigger.call(this), this._propS_taolidafangzi_prite3D.active = this._b_taolidafangzi_On;
            }, ButtonE_taolidafangzi_lectricity.prototype.onAwake = function () {
                i.prototype.onAwake.call(this), this._b_taolidafangzi_On = this._propS_taolidafangzi_prite3D.active,
                    this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._b_taolidafangzi_On ? this._nOn_taolidafangzi_PosY : this._nOf_taolidafangzi_fPosY,
                    this._propS_taolidafangzi_prite3D.addComponent(n.default);
            }, ButtonE_taolidafangzi_lectricity;
        }(i("./ButtonProp").default);
        t.default = o;
    }, {
        "./ButtonProp": 12,
        "./Electricity": 16
    }],
    9: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function Butt_taolidafangzi_onFan() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._li_taolidafangzi_nes = new Laya.PixelLineSprite3D(), a._lineS_taolidafangzi_tarts = [],
                    a._lin_taolidafangzi_eEnds = [], a._s_taolidafangzi_cene = null, a._effectS_taolidafangzi_prite3D = null,
                    a._rayL_taolidafangzi_ength = 40, a._anim_taolidafangzi_ator = null, a._rayN_taolidafangzi_um = 4,
                    a;
            }
            return __extends(Butt_taolidafangzi_onFan, i), Butt_taolidafangzi_onFan.prototype.InitL_taolidafangzi_ines = function () {
                this._li_taolidafangzi_nes.maxLineCount = this._rayN_taolidafangzi_um, this._s_taolidafangzi_cene.addChild(this._li_taolidafangzi_nes);
                for (var i = this._propS_taolidafangzi_prite3D.getChildByName("Points"), a = 0; a < this._rayN_taolidafangzi_um; a++) {
                    var t = i.getChildAt(a).transform.position.clone(), n = t.clone();
                    n.x = t.x - this._rayL_taolidafangzi_ength * Math.cos((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180),
                        n.z = t.z + this._rayL_taolidafangzi_ength * Math.sin((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180),
                        this._li_taolidafangzi_nes.addLine(t, t, Laya.Color.RED, Laya.Color.RED), this._lineS_taolidafangzi_tarts.push(t),
                        this._lin_taolidafangzi_eEnds.push(n);
                }
            }, Butt_taolidafangzi_onFan.prototype.ButtonT_taolidafangzi_rigger = function () {
                if (i.prototype.ButtonT_taolidafangzi_rigger.call(this), this._anim_taolidafangzi_ator.enabled = this._b_taolidafangzi_On,
                    this._effectS_taolidafangzi_prite3D.active = this._b_taolidafangzi_On, !this._b_taolidafangzi_On) for (var a = 0; a < this._rayN_taolidafangzi_um; a++) this._li_taolidafangzi_nes.setLine(a, Laya.Vector3._ZERO, Laya.Vector3._ZERO, Laya.Color.RED, Laya.Color.RED);
            }, Butt_taolidafangzi_onFan.prototype.onAwake = function () {
                i.prototype.onAwake.call(this), this._s_taolidafangzi_cene = this.owner.parent.parent.parent,
                    this._effectS_taolidafangzi_prite3D = this._propS_taolidafangzi_prite3D.getChildByName("Effect"),
                    this._b_taolidafangzi_On = this._effectS_taolidafangzi_prite3D.active, this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._b_taolidafangzi_On ? this._nOn_taolidafangzi_PosY : this._nOf_taolidafangzi_fPosY,
                    this.Anima_taolidafangzi_torInit(), this.InitL_taolidafangzi_ines();
            }, Butt_taolidafangzi_onFan.prototype.onLateUpdate = function () {
                this._b_taolidafangzi_On && this.RayC_taolidafangzi_hange();
            }, Butt_taolidafangzi_onFan.prototype.onTriggerEnter = function (i) {
                "Role" == i.owner.name && this.ButtonT_taolidafangzi_rigger();
            }, Butt_taolidafangzi_onFan.prototype.Anima_taolidafangzi_torInit = function () {
                this._anim_taolidafangzi_ator = this._propS_taolidafangzi_prite3D.getComponent(Laya.Animator),
                    this._anim_taolidafangzi_ator.enabled = this._b_taolidafangzi_On;
            }, Butt_taolidafangzi_onFan.prototype.RayC_taolidafangzi_hange = function () {
                for (var i = [], a = 0; a < this._rayN_taolidafangzi_um; a++) {
                    var t = [];
                    if (this._s_taolidafangzi_cene.physicsSimulation.raycastAllFromTo(this._lineS_taolidafangzi_tarts[a], this._lin_taolidafangzi_eEnds[a], t, this._rayL_taolidafangzi_ength)) for (var n = 0; n < t.length; n++) {
                        var o = t[n].collider.owner, e = o.getComponent(Laya.Rigidbody3D);
                        if (null == e) break;
                        var _ = 0, l = 0, r = new Laya.Vector3(0, 0, 0);
                        for (_ = 0; _ < i.length && e != i[_]; _++);
                        _ == i.length ? (l = .03, r = new Laya.Vector3(-Math.cos((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180) * l, 0, Math.sin((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180) * l),
                            "Role" == e.owner.name ? (r.x += e.linearVelocity.x / 150, r.z += e.linearVelocity.z / 150) : (r.x = 2 * r.x - e.linearVelocity.x / 150,
                                r.z = 2 * r.z - e.linearVelocity.z / 150), i.push(e)) : (l = .015, r = new Laya.Vector3(-Math.cos((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180) * l, 0, Math.sin((this._propS_taolidafangzi_prite3D.transform.rotationEuler.y - 90) * Math.PI / 180) * l)),
                            o.transform.translate(r, !1);
                    }
                }
            }, Butt_taolidafangzi_onFan;
        }(i("./ButtonProp").default);
        t.default = n;
    }, {
        "./ButtonProp": 12
    }],
    10: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("./ButtonProp"), o = i("./Barrier"), e = function (i) {
            function Butto_taolidafangzi_nFloor() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._anim_taolidafangzi_ator = null, a._prop_taolidafangzi_Collider = null,
                    a;
            }
            return __extends(Butto_taolidafangzi_nFloor, i), Butto_taolidafangzi_nFloor.prototype.Animat_taolidafangzi_orInit = function () {
                this._anim_taolidafangzi_ator = this._propS_taolidafangzi_prite3D.getComponent(Laya.Animator),
                    this._anim_taolidafangzi_ator.enabled = !1, this._prop_taolidafangzi_Collider = this._propS_taolidafangzi_prite3D.getComponent(Laya.PhysicsCollider),
                    this._prop_taolidafangzi_Collider.enabled = !1;
            }, Butto_taolidafangzi_nFloor.prototype.Colli_taolidafangzi_sionControl = function (i) {
                for (var a = 0; a < this._propS_taolidafangzi_prite3D.numChildren; a++) {
                    this._propS_taolidafangzi_prite3D.getChildAt(a).getComponent(Laya.PhysicsCollider).enabled = i;
                }
            }, Butto_taolidafangzi_nFloor.prototype.onAwake = function () {
                i.prototype.onAwake.call(this), this.Animat_taolidafangzi_orInit(), this._propS_taolidafangzi_prite3D.addComponent(o.default);
            }, Butto_taolidafangzi_nFloor.prototype.ButtonT_taolidafangzi_rigger = function () {
                var i = this;
                this._anim_taolidafangzi_ator.enabled || (this._b_taolidafangzi_On && this.Colli_taolidafangzi_sionControl(!1),
                    this._anim_taolidafangzi_ator.enabled = !0, this._prop_taolidafangzi_Collider.enabled = !0,
                    this._anim_taolidafangzi_ator.play(), Laya.timer.once(3550, this, function () {
                        i._anim_taolidafangzi_ator.enabled = !1, i._prop_taolidafangzi_Collider.enabled = !1,
                            i._b_taolidafangzi_On || i.Colli_taolidafangzi_sionControl(!0);
                    }));
            }, Butto_taolidafangzi_nFloor.prototype.onTriggerEnter = function (i) {
                this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._nOn_taolidafangzi_PosY,
                    this._b_taolidafangzi_On = !0, this.ButtonT_taolidafangzi_rigger();
            }, Butto_taolidafangzi_nFloor.prototype.onTriggerExit = function (i) {
                this._b_taolidafangzi_On = !1, this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._nOf_taolidafangzi_fPosY;
            }, Butto_taolidafangzi_nFloor;
        }(n.default);
        t.default = e;
    }, {
        "./Barrier": 7,
        "./ButtonProp": 12
    }],
    11: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function Butto_taolidafangzi_nPlank() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._anim_taolidafangzi_ator = null, a;
            }
            return __extends(Butto_taolidafangzi_nPlank, i), Butto_taolidafangzi_nPlank.prototype.ButtonT_taolidafangzi_rigger = function () {
                var i = this;
                this._anim_taolidafangzi_ator.enabled || (this._anim_taolidafangzi_ator.enabled = !0,
                    this._anim_taolidafangzi_ator.play(), Laya.timer.once(2e3, this, function () {
                        i._anim_taolidafangzi_ator.enabled = !1;
                    }));
            }, Butto_taolidafangzi_nPlank.prototype.onTriggerExit = function (i) {
                this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._nOf_taolidafangzi_fPosY;
            }, Butto_taolidafangzi_nPlank.prototype.Animat_taolidafangzi_orInit = function () {
                this._anim_taolidafangzi_ator = this._propS_taolidafangzi_prite3D.getComponent(Laya.Animator),
                    this._anim_taolidafangzi_ator.enabled = !1;
            }, Butto_taolidafangzi_nPlank.prototype.onAwake = function () {
                i.prototype.onAwake.call(this), this.Animat_taolidafangzi_orInit();
            }, Butto_taolidafangzi_nPlank.prototype.onTriggerEnter = function (i) {
                this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._nOn_taolidafangzi_PosY,
                    this.ButtonT_taolidafangzi_rigger();
            }, Butto_taolidafangzi_nPlank;
        }(i("./ButtonProp").default);
        t.default = n;
    }, {
        "./ButtonProp": 12
    }],
    12: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function But_taolidafangzi_tonProp() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._nOf_taolidafangzi_fPosY = 0, a._nOn_taolidafangzi_PosY = -.25, a._b_taolidafangzi_On = !1,
                    a._propS_taolidafangzi_prite3D = null, a._spr_taolidafangzi_ite3D = null, a._col_taolidafangzi_lider = null,
                    a._butto_taolidafangzi_nSprite3D = null, a;
            }
            return __extends(But_taolidafangzi_tonProp, i), But_taolidafangzi_tonProp.prototype.onTriggerStay = function (i) { },
                But_taolidafangzi_tonProp.prototype.onTriggerExit = function (i) { }, But_taolidafangzi_tonProp.prototype.ButtonT_taolidafangzi_rigger = function () {
                    this._b_taolidafangzi_On = !this._b_taolidafangzi_On, this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._b_taolidafangzi_On ? this._nOn_taolidafangzi_PosY : this._nOf_taolidafangzi_fPosY;
                }, But_taolidafangzi_tonProp.prototype.onAwake = function () {
                    this._spr_taolidafangzi_ite3D = this.owner, this._col_taolidafangzi_lider = this.owner.getComponent(Laya.PhysicsCollider),
                        this._butto_taolidafangzi_nSprite3D = this.owner.getChildByName("Button").getChildAt(0),
                        this._propS_taolidafangzi_prite3D = this.owner.getChildByName("Prop"), this._col_taolidafangzi_lider.isTrigger = !0,
                        this._butto_taolidafangzi_nSprite3D.transform.localPositionY = this._b_taolidafangzi_On ? this._nOn_taolidafangzi_PosY : this._nOf_taolidafangzi_fPosY;
                }, But_taolidafangzi_tonProp.prototype.onTriggerEnter = function (i) {
                    this.ButtonT_taolidafangzi_rigger();
                }, But_taolidafangzi_tonProp;
        }(Laya.Script3D);
        t.default = n;
    }, {}],
    13: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function ButtonR_taolidafangzi_otationDoor() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._ani_taolidafangzi_mator = null, a;
            }
            return __extends(ButtonR_taolidafangzi_otationDoor, i), ButtonR_taolidafangzi_otationDoor.prototype.ButtonT_taolidafangzi_rigger = function () {
                var a = this;
                this._ani_taolidafangzi_mator.enabled || (i.prototype.ButtonT_taolidafangzi_rigger.call(this),
                    this._ani_taolidafangzi_mator.enabled = !0, this._b_taolidafangzi_On ? this._ani_taolidafangzi_mator.play("xzdoor") : this._ani_taolidafangzi_mator.play("xzdoor2"),
                    Laya.timer.once(550, this, function () {
                        a._ani_taolidafangzi_mator.enabled = !1;
                    }));
            }, ButtonR_taolidafangzi_otationDoor.prototype.Animat_taolidafangzi_orInit = function () {
                this._ani_taolidafangzi_mator = this._propS_taolidafangzi_prite3D.getComponent(Laya.Animator),
                    this._ani_taolidafangzi_mator.enabled = !1;
            }, ButtonR_taolidafangzi_otationDoor.prototype.onAwake = function () {
                i.prototype.onAwake.call(this), this.Animat_taolidafangzi_orInit();
            }, ButtonR_taolidafangzi_otationDoor;
        }(i("./ButtonProp").default);
        t.default = n;
    }, {
        "./ButtonProp": 12
    }],
    14: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function D_taolidafangzi_oor() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._ri_taolidafangzi_gid = null, a._bS_taolidafangzi_tart = !0, a._sp_taolidafangzi_rite3D = null,
                    a._otherSpri_taolidafangzi_te3D = null, a._initRo_taolidafangzi_tationY = 0, a._bH_taolidafangzi_orizontal = !0,
                    a._bTrr_taolidafangzi_iger = !1, a._in_taolidafangzi_itPos = new Laya.Vector3(),
                    a;
            }
            return __extends(D_taolidafangzi_oor, i), D_taolidafangzi_oor.prototype.onCollisionStay = function (i) {
                Laya.timer.clearAll(this), this._bTrr_taolidafangzi_iger = !0;
            }, D_taolidafangzi_oor.prototype.onCollisionExit = function (i) {
                var a = this;
                Laya.timer.clearAll(this), Laya.timer.once(250, this, function () {
                    a._bTrr_taolidafangzi_iger = !1;
                }), this._otherSpri_taolidafangzi_te3D = i.other.owner;
            }, D_taolidafangzi_oor.prototype.Init_taolidafangzi_Door = function () {
                this._bH_taolidafangzi_orizontal = "DoorHorizontal" == this.owner.name, this._in_taolidafangzi_itPos = this._sp_taolidafangzi_rite3D.transform.localPosition.clone(),
                    this._initRo_taolidafangzi_tationY = this._sp_taolidafangzi_rite3D.transform.localRotationEulerY;
            }, D_taolidafangzi_oor.prototype.onCollisionEnter = function (i) {
                Laya.timer.clearAll(this), this._bTrr_taolidafangzi_iger = !0;
            }, D_taolidafangzi_oor.prototype.onAwake = function () {
                this._sp_taolidafangzi_rite3D = this.owner, this._ri_taolidafangzi_gid = this.owner.getComponent(Laya.Rigidbody3D),
                    this._ri_taolidafangzi_gid.angularFactor = new Laya.Vector3(0, 1, 0), this._ri_taolidafangzi_gid.linearFactor = new Laya.Vector3(0, 0, 0),
                    this._ri_taolidafangzi_gid.angularDamping = .9, this._ri_taolidafangzi_gid.canCollideWith = 1e4,
                    this._bH_taolidafangzi_orizontal = "DoorHorizontal" == this.owner.name, this.Init_taolidafangzi_Door();
            }, D_taolidafangzi_oor.prototype.onUpdate = function () {
                if (this._bS_taolidafangzi_tart && (this._sp_taolidafangzi_rite3D.transform.localRotationEulerY = this._initRo_taolidafangzi_tationY,
                    this._bS_taolidafangzi_tart = !1), this._sp_taolidafangzi_rite3D.transform.localPosition = this._in_taolidafangzi_itPos,
                    Math.abs(this._sp_taolidafangzi_rite3D.transform.localRotationEulerY - this._initRo_taolidafangzi_tationY) > 90 && (!this._bH_taolidafangzi_orizontal && this._sp_taolidafangzi_rite3D.transform.localRotationEulerY > 90 ? this._sp_taolidafangzi_rite3D.transform.localRotationEulerY = this._initRo_taolidafangzi_tationY - 90 : this._sp_taolidafangzi_rite3D.transform.localRotationEulerY = this._sp_taolidafangzi_rite3D.transform.localRotationEulerY > this._initRo_taolidafangzi_tationY ? this._initRo_taolidafangzi_tationY + 90 : this._initRo_taolidafangzi_tationY - 90),
                    !this._bTrr_taolidafangzi_iger && this._sp_taolidafangzi_rite3D.transform.localRotationEulerY != this._initRo_taolidafangzi_tationY) {
                    var i = 0;
                    this._sp_taolidafangzi_rite3D.transform.localRotationEulerY > this._initRo_taolidafangzi_tationY + 2 ? i = -2 : this._sp_taolidafangzi_rite3D.transform.localRotationEulerY < this._initRo_taolidafangzi_tationY - 2 ? i = 2 : (this._sp_taolidafangzi_rite3D.transform.localRotationEulerY = this._initRo_taolidafangzi_tationY,
                        this._bTrr_taolidafangzi_iger = !1), this._sp_taolidafangzi_rite3D.transform.localRotationEulerY += i;
                }
            }, D_taolidafangzi_oor;
        }(Laya.Script3D);
        t.default = n;
    }, {}],
    15: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Role/Role"), o = function (i) {
            function Doo_taolidafangzi_rLocked() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._bOp_taolidafangzi_en = !1, a._spr_taolidafangzi_ite3D = null, a._anim_taolidafangzi_ator = null,
                    a._col_taolidafangzi_lider = null, a;
            }
            return __extends(Doo_taolidafangzi_rLocked, i), Doo_taolidafangzi_rLocked.prototype.Ope_taolidafangzi_nDoor = function () {
                this._col_taolidafangzi_lider.enabled = !1, this._anim_taolidafangzi_ator.enabled = !0,
                    this._anim_taolidafangzi_ator.play();
            }, Doo_taolidafangzi_rLocked.prototype.onTriggerEnter = function (i) {
                if ("Role" == i.owner.name && 0 == this._bOp_taolidafangzi_en) {
                    var a = i.owner.getComponent(n.default);
                    a.Key_taolidafangzi_Num > 0 && (this.Ope_taolidafangzi_nDoor(), a.Key_taolidafangzi_Num = a.Key_taolidafangzi_Num - 1,
                        this._bOp_taolidafangzi_en = !0);
                }
            }, Doo_taolidafangzi_rLocked.prototype.onAwake = function () {
                this._spr_taolidafangzi_ite3D = this.owner, this._col_taolidafangzi_lider = this._spr_taolidafangzi_ite3D.getComponent(Laya.PhysicsCollider),
                    this._anim_taolidafangzi_ator = this._spr_taolidafangzi_ite3D.getComponent(Laya.Animator),
                    this._col_taolidafangzi_lider.isTrigger = !0, this._anim_taolidafangzi_ator.enabled = !1;
            }, Doo_taolidafangzi_rLocked;
        }(Laya.Script3D);
        t.default = o;
    }, {
        "../Role/Role": 18
    }],
    16: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function Elec_taolidafangzi_tricity() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._effect_taolidafangzi_Sprite3D = null, a._spr_taolidafangzi_ite3D = null,
                    a._bangSp_taolidafangzi_rite3D = null, a;
            }
            return __extends(Elec_taolidafangzi_tricity, i), Elec_taolidafangzi_tricity.prototype.onTriggerEnter = function (i) {
                var a = i.owner;
                if (("Role" == a.name || "Police" == a.name) && null == a.getChildByName("Effect")) {
                    var t = Laya.Sprite3D.instantiate(this._effect_taolidafangzi_Sprite3D, a);
                    t.transform.localPosition = new Laya.Vector3(0, 2.5, 0), t.active = !0;
                }
            }, Elec_taolidafangzi_tricity.prototype.onAwake = function () {
                this._spr_taolidafangzi_ite3D = this.owner, this._bangSp_taolidafangzi_rite3D = this.owner.getChildByName("bang"),
                    this._effect_taolidafangzi_Sprite3D = this.owner.getChildByName("Effect");
            }, Elec_taolidafangzi_tricity.prototype.onCollisionEnter = function (i) {
                var a = i.other.owner;
                if (("Role" == a.name || "Police" == a.name) && null == a.getChildByName("Effect")) {
                    var t = Laya.Sprite3D.instantiate(this._effect_taolidafangzi_Sprite3D, a);
                    t.transform.localPosition = new Laya.Vector3(0, 2.5, 0), t.active = !0;
                }
            }, Elec_taolidafangzi_tricity;
        }(Laya.Script3D);
        t.default = n;
    }, {}],
    17: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Role/Role"), o = function (i) {
            function Ke_taolidafangzi_y() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._nRotat_taolidafangzi_ionYChange = 2, a._spr_taolidafangzi_ite3D = null,
                    a._coll_taolidafangzi_ider = null, a;
            }
            return __extends(Ke_taolidafangzi_y, i), Ke_taolidafangzi_y.prototype.onTriggerEnter = function (i) {
                if ("Role" == i.owner.name) {
                    var a = i.owner.getComponent(n.default);
                    a.Key_taolidafangzi_Num = a.Key_taolidafangzi_Num + 1, this._spr_taolidafangzi_ite3D.destroy();
                }
            }, Ke_taolidafangzi_y.prototype.onAwake = function () {
                this._spr_taolidafangzi_ite3D = this.owner, this._coll_taolidafangzi_ider = this.owner.getComponent(Laya.PhysicsCollider),
                    this._coll_taolidafangzi_ider.isTrigger = !0;
            }, Ke_taolidafangzi_y.prototype.onUpdate = function () {
                this._spr_taolidafangzi_ite3D.transform.localRotationEulerY += this._nRotat_taolidafangzi_ionYChange;
            }, Ke_taolidafangzi_y;
        }(Laya.Script3D);
        t.default = o;
    }, {
        "../Role/Role": 18
    }],
    18: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../../Event/EventMgr"), o = i("../../Event/EventDef"), e = i("../../Mgr/GameMgr"), _ = i("../../Mgr/VibrateMgr"), l = i("../../Mgr/ViewMgr"), r = i("../../User/User"), s = function (i) {
            function Rol_taolidafangzi_e() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._moveS_taolidafangzi_peed = 1, a._rotati_taolidafangzi_onLast = 1e3, a._anima_taolidafangzi_tor = null,
                    a._bAl_taolidafangzi_ive = !0, a._rotat_taolidafangzi_ionEnd = 0, a._targetR_taolidafangzi_otation = 1e3,
                    a._key_taolidafangzi_Num = 0, a._spri_taolidafangzi_te3D = null, a._bB_taolidafangzi_lock = !1,
                    a._bUpd_taolidafangzi_ate = !0, a._mov_taolidafangzi_eDir = new Laya.Vector3(0, 0, 0),
                    a._roleR_taolidafangzi_igid = null, a._bW_taolidafangzi_in = !1, a;
            }
            return __extends(Rol_taolidafangzi_e, i), Object.defineProperty(Rol_taolidafangzi_e.prototype, "Al_taolidafangzi_ive", {
                set: function (i) {
                    this._bAl_taolidafangzi_ive = i;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Rol_taolidafangzi_e.prototype, "Key_taolidafangzi_Num", {
                get: function () {
                    return this._key_taolidafangzi_Num;
                },
                set: function (i) {
                    this._key_taolidafangzi_Num = i;
                },
                enumerable: !0,
                configurable: !0
            }), Rol_taolidafangzi_e.prototype.Check_taolidafangzi_State = function () {
                var i = this;
                this._bAl_taolidafangzi_ive && !this._bW_taolidafangzi_in || (this._bUpd_taolidafangzi_ate = !1,
                    this.onMo_taolidafangzi_veStop(), this._anima_taolidafangzi_tor.enabled = !0, this._roleR_taolidafangzi_igid.enabled = !1,
                    this._bAl_taolidafangzi_ive ? (this._spri_taolidafangzi_te3D.transform.localRotationEulerY = this._rotat_taolidafangzi_ionEnd,
                        this._anima_taolidafangzi_tor.play("Jump"), Laya.timer.once(3e3, this, function () {
                            if (i && i._spri_taolidafangzi_te3D) if (i._spri_taolidafangzi_te3D.destroy(), Laya.stage.width = 750,
                                r.default.set_miniqiaoba_LeveNum(r.default.get_miniqiaoba_LeveNum() + 1), Laya.Browser.onMiniGame) {
                                if (!i._bAl_taolidafangzi_ive) return;
                                i._bAl_taolidafangzi_ive = !1, e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel && e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel.Destroy_miniqiaoba_Scene(),
                                    platform.getInstance().showLoading(),
                                    l.default.insta_taolidafangzi_nce.open_miniqiaoba_View(l.View_miniqiaoba_Def.luffy_GameWinView),
                                    l.default.insta_taolidafangzi_nce.close_miniqiaoba_View(l.View_miniqiaoba_Def.Gamin_taolidafangzi_gView);
                            } else {
                                if (!i._bAl_taolidafangzi_ive) return;
                                i._bAl_taolidafangzi_ive = !1, e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel.Destroy_miniqiaoba_Scene(),
                                    platform.getInstance().showLoading(),
                                    l.default.insta_taolidafangzi_nce.open_miniqiaoba_View(l.View_miniqiaoba_Def.luffy_GameWinView),
                                    l.default.insta_taolidafangzi_nce.close_miniqiaoba_View(l.View_miniqiaoba_Def.Gamin_taolidafangzi_gView);
                            }
                        })) : (this._anima_taolidafangzi_tor.play("death 2"), Laya.timer.once(1e3, this, function () {
                            i && i._spri_taolidafangzi_te3D && (i._spri_taolidafangzi_te3D.destroy(), Laya.stage.width = 750,
                                Laya.Browser.onMiniGame ? (e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel && e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel.Destroy_miniqiaoba_Scene(),
                                    platform.getInstance().showLoading(),
                                    l.default.insta_taolidafangzi_nce.open_miniqiaoba_View(l.View_miniqiaoba_Def.luffy_GameFailView),
                                    l.default.insta_taolidafangzi_nce.close_miniqiaoba_View(l.View_miniqiaoba_Def.Gamin_taolidafangzi_gView)
                                ) : (e.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel.Destroy_miniqiaoba_Scene(),
                                    platform.getInstance().showLoading(),
                                    l.default.insta_taolidafangzi_nce.open_miniqiaoba_View(l.View_miniqiaoba_Def.luffy_GameFailView),
                                    l.default.insta_taolidafangzi_nce.close_miniqiaoba_View(l.View_miniqiaoba_Def.Gamin_taolidafangzi_gView)
                                ));
                        })));
            }, Rol_taolidafangzi_e.prototype.onUpdate = function () {
                this._bUpd_taolidafangzi_ate && (this._roleR_taolidafangzi_igid.wakeUp(), this.Role_taolidafangzi_Rotate(),
                    this.Check_taolidafangzi_State());
            }, Rol_taolidafangzi_e.prototype.onCollisionStay = function (i) {
                "Ground" != i.other.owner.name && (this._bB_taolidafangzi_lock = !0);
            }, Rol_taolidafangzi_e.prototype.Role_taolidafangzi_Rotate = function () {
                this._bB_taolidafangzi_lock && (0 != this._mov_taolidafangzi_eDir.x || 0 != this._mov_taolidafangzi_eDir.z) && this._spri_taolidafangzi_te3D.transform.localRotationEulerZ > -30 ? this._spri_taolidafangzi_te3D.transform.localRotationEulerZ -= 1.5 : (!this._bB_taolidafangzi_lock || 0 == this._mov_taolidafangzi_eDir.x && 0 == this._mov_taolidafangzi_eDir.z) && this._spri_taolidafangzi_te3D.transform.localRotationEulerZ < 0 && (this._spri_taolidafangzi_te3D.transform.localRotationEulerZ += 1),
                    this._spri_taolidafangzi_te3D.transform.localRotationEulerY > 180 && (this._spri_taolidafangzi_te3D.transform.localRotationEulerY = 360 - this._spri_taolidafangzi_te3D.transform.localRotationEulerY),
                    this._spri_taolidafangzi_te3D.transform.localRotationEulerY <= -180 && (this._spri_taolidafangzi_te3D.transform.localRotationEulerY = 360 + this._spri_taolidafangzi_te3D.transform.localRotationEulerY),
                    this._spri_taolidafangzi_te3D.transform.position.y < -5 && (console.log("Down"),
                        this.Al_taolidafangzi_ive = !1);
            }, Rol_taolidafangzi_e.prototype.onCollisionExit = function (i) {
                "Ground" != i.other.owner.name && (this._bB_taolidafangzi_lock = !1);
            }, Rol_taolidafangzi_e.prototype.onMov_taolidafangzi_eStart = function () { }, Rol_taolidafangzi_e.prototype.onMo_taolidafangzi_veStop = function () {
                this._mov_taolidafangzi_eDir = new Laya.Vector3(0, 0, 0), this._roleR_taolidafangzi_igid.linearVelocity = this._mov_taolidafangzi_eDir,
                    Laya.timer.clear(this, this.Rotatio_taolidafangzi_nChange);
            }, Rol_taolidafangzi_e.prototype.onCollisionEnter = function (i) {
                if ("Ground" != i.other.owner.name) {
                    this._bB_taolidafangzi_lock = !0;
                    var a = i.other.owner;
                    "Prop" == a.name && "ButtonElectricity" == a.parent.name ? (console.log("Electricity"),
                        this.Al_taolidafangzi_ive = !1) : "Terminus" == a.name ? (this._rotat_taolidafangzi_ionEnd = 180 * Math.atan2(a.transform.position.z - this._spri_taolidafangzi_te3D.transform.position.z - 1.5 * Math.cos(a.transform.rotationEuler.y * Math.PI / 180), -a.transform.position.x + this._spri_taolidafangzi_te3D.transform.position.x - 1.5 * Math.sin(a.transform.rotationEuler.y * Math.PI / 180)) / Math.PI,
                            this._spri_taolidafangzi_te3D.transform.localRotationEulerY = -this._rotat_taolidafangzi_ionEnd,
                            this._bW_taolidafangzi_in = !0) : "Ground" != a.name && _.default.vibrate_miniqiaoba_(75);
                }
            }, Rol_taolidafangzi_e.prototype.Rotatio_taolidafangzi_nChange = function (i) {
                if (Math.abs(this._spri_taolidafangzi_te3D.transform.localRotationEulerY - this._targetR_taolidafangzi_otation) <= 30) return this._spri_taolidafangzi_te3D.transform.localRotationEulerY = this._targetR_taolidafangzi_otation,
                    void Laya.timer.clear(this, this.Rotatio_taolidafangzi_nChange);
                this._spri_taolidafangzi_te3D.transform.localRotationEulerY += i;
            }, Rol_taolidafangzi_e.prototype.onMo_taolidafangzi_ving = function (i) {
                if (this._bUpd_taolidafangzi_ate) {
                    var a = i.dir;
                    this._targetR_taolidafangzi_otation = 180 * Math.atan2(-a.y, a.x) / Math.PI, this._mov_taolidafangzi_eDir = new Laya.Vector3(-a.x * this._moveS_taolidafangzi_peed, 0, -a.y * this._moveS_taolidafangzi_peed * 1.25),
                        this._roleR_taolidafangzi_igid.linearVelocity = this._mov_taolidafangzi_eDir;
                    var t = this._targetR_taolidafangzi_otation - this._spri_taolidafangzi_te3D.transform.localRotationEulerY;
                    if (Math.abs(t) > 180 && (t = t > 0 ? t - 360 : t + 360), Math.abs(t) <= 30) this._spri_taolidafangzi_te3D.transform.localRotationEulerY = this._targetR_taolidafangzi_otation; else {
                        var n = t > 0 ? 30 : -30;
                        Laya.timer.frameLoop(1, this, this.Rotatio_taolidafangzi_nChange, [n]);
                    }
                }
            }, Rol_taolidafangzi_e.prototype.onAwake = function () {
                this._spri_taolidafangzi_te3D = this.owner, this._roleR_taolidafangzi_igid = this.owner.getComponent(Laya.Rigidbody3D),
                    this._roleR_taolidafangzi_igid.angularFactor = new Laya.Vector3(0, 0, 0), this._roleR_taolidafangzi_igid.linearDamping = 0,
                    this._roleR_taolidafangzi_igid.collisionGroup = 1e4, this._roleR_taolidafangzi_igid.gravity = new Laya.Vector3(0, -10, 0),
                    this._roleR_taolidafangzi_igid.mass = .25, this.Chang_taolidafangzi_eSkin(r.default.curUsedItem);
            }, Rol_taolidafangzi_e.prototype.onEnable = function () {
                n.default.inst_taolidafangzi_ance.regEvemt_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start, this, this.onMov_taolidafangzi_eStart),
                    n.default.inst_taolidafangzi_ance.regEvemt_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Release, this, this.onMo_taolidafangzi_veStop),
                    n.default.inst_taolidafangzi_ance.regEvemt_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Move, this, this.onMo_taolidafangzi_ving),
                    n.default.inst_taolidafangzi_ance.regEvemt_miniqiaoba_(o.Event_miniqiaoba_Def.Game_Try_taolidafangzi_Skin, this, this.Try_taolidafangzi_Skin);
            }, Rol_taolidafangzi_e.prototype.Chang_taolidafangzi_eSkin = function (i) {
                for (var a = 0; a < this._spri_taolidafangzi_te3D.numChildren; a++) this._spri_taolidafangzi_te3D.getChildAt(a).active = !1;
                this._spri_taolidafangzi_te3D.getChildByName(i.toString()).active = !0, this._anima_taolidafangzi_tor = this._spri_taolidafangzi_te3D.getChildByName(i.toString()).getComponent(Laya.Animator),
                    this._anima_taolidafangzi_tor.enabled = !1;
            }, Rol_taolidafangzi_e.prototype.Try_taolidafangzi_Skin = function (i) {
                var a = i.SkinId;
                this.Chang_taolidafangzi_eSkin(a);
            }, Rol_taolidafangzi_e.prototype.onDisable = function () {
                n.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start, this, this.onMov_taolidafangzi_eStart),
                    n.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Release, this, this.onMo_taolidafangzi_veStop),
                    n.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Move, this, this.onMo_taolidafangzi_ving),
                    n.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(o.Event_miniqiaoba_Def.Game_Try_taolidafangzi_Skin, this, this.Try_taolidafangzi_Skin),
                    Laya.timer.clearAll(this);
            }, Rol_taolidafangzi_e;
        }(Laya.Script3D);
        t.default = s;
    }, {
        "../../Event/EventDef": 2,
        "../../Event/EventMgr": 3,
        "../../Mgr/GameMgr": 20,
        "../../Mgr/VibrateMgr": 22,
        "../../Mgr/ViewMgr": 23,
        "../../User/User": 24
    }],
    19: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("./GameConfig"), o = i("./User/User"), e = i("./ui/layaMaxUI"), _ = i("./View/LoadingView/LoadingView"), l = i("./Event/EventMgr"), r = i("./Event/EventDef"), s = i("./vivo/GameDefine");
        new (function () {
            function Main() {
                this._loa_taolidafangzi_dingUI = null, this._loadi_taolidafangzi_ngView = null,
                    this._preL_taolidafangzi_oadRes = new Array(), Config.isAntialias = !0, window.Laya3D ? Laya3D.init(n.default.width, n.default.height) :
                        Laya.init(n.default.width, n.default.height, Laya.WebGL),
                    Laya.stage.scaleMode = n.default.scaleMode,
                    Laya.stage.screenMode = n.default.screenMode,
                    Laya.stage.alignV = n.default.alignV,
                    Laya.stage.alignH = n.default.alignH,
                    Laya.URL.exportSceneToJson = n.default.exportSceneToJson,
                    Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return Main.prototype.onVersionLoaded = function () {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, Main.prototype.closelo_taolidafangzi_adingUI = function () {
                Laya.timer.loop(100, this, this.loadEnd);
            }, Main.prototype.loadEnd = function () {
                if (window.loadAniEnd) {
                    this._loa_taolidafangzi_dingUI && !this._loa_taolidafangzi_dingUI.destroyed && this._loa_taolidafangzi_dingUI.destroy();
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    window.scrollList.visible = true;
                    Laya.timer.clear(this, this.loadEnd);
                }
            }, Main.prototype.onConfigLoaded = function () {
                Laya.loader.maxLoader = 50, this.initLoa_taolidafangzi_dingView();
                this.loa_taolidafangzi_dRes(),
                    l.default.inst_taolidafangzi_ance.regOnceEvent_miniqiaoba_(r.Event_miniqiaoba_Def.App_Close_miniqiaoba_FirstLoadingView, this, this.closelo_taolidafangzi_adingUI);
            }, Main.prototype.initLoa_taolidafangzi_dingView = function () {
                this._loa_taolidafangzi_dingUI = new e.ui.View.LoadingUI(), Laya.stage.addChild(this._loa_taolidafangzi_dingUI),
                    this._loa_taolidafangzi_dingUI.width = Laya.stage.width, this._loa_taolidafangzi_dingUI.height = Laya.stage.height,
                    this._loadi_taolidafangzi_ngView = this._loa_taolidafangzi_dingUI.getComponent(_.default);
            }, Main.prototype.onLoadR_taolidafangzi_esComplate = function () {
                Laya.Browser.onMiniGame && webuzzSDK.loadSquareCustomAd(100), o.default.initi_miniqiaoba_User(s.GameD_chaojiguoshangche_efine.get_chaojiguoshangche_GameDate()),
                    n.default.startScene && Laya.Scene.open(n.default.startScene, !1, Laya.Handler.create(this, function () { }));
            }, Main.prototype.loa_taolidafangzi_dRes = function () {
                var i = this;
                this.preL_taolidafangzi_oad();
                var a = this._preL_taolidafangzi_oadRes, t = this;
                if (Laya.Browser.onMiniGame) Laya.Browser.window.wx.loadSubpackage({
                    name: "subRes",
                    success: function (n) {
                        a.length > 0 ? Laya.loader.load(a, Laya.Handler.create(i, function () {
                            t.onLoadR_taolidafangzi_esComplate();
                        }), Laya.Handler.create(i, function (i) { })) : t.onLoadR_taolidafangzi_esComplate();
                    },
                    fail: function (a) {
                        i.loa_taolidafangzi_dRes();
                    }
                }); else a.length > 0 ? Laya.loader.load(a, Laya.Handler.create(this, function () {
                    t.onLoadR_taolidafangzi_esComplate();
                }), Laya.Handler.create(this, function (i) { })) : t.onLoadR_taolidafangzi_esComplate();
            }, Main.prototype.preL_taolidafangzi_oad = function () {
                this._preL_taolidafangzi_oadRes.push({
                    url: "json/levelConfig.json",
                    type: Laya.Loader.JSON
                });
            }, Main;
        }())();
    }, {
        "./Event/EventDef": 2,
        "./Event/EventMgr": 3,
        "./GameConfig": 4,
        "./User/User": 24,
        "./View/LoadingView/LoadingView": 30,
        "./ui/layaMaxUI": 34,
        "./vivo/GameDefine": 35
    }],
    20: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Utilit"), o = i("./ViewMgr"), e = i("../User/User"), _ = i("../Event/EventMgr"), l = i("../Event/EventDef"), r = i("../GameControl/Level/Level"), s = function (i) {
            function Game_miniqiaoba_Mgr() {
                var a = i.call(this) || this;
                return Game_miniqiaoba_Mgr._insta_taolidafangzi_nce = a, a;
            }
            return __extends(Game_miniqiaoba_Mgr, i), Object.defineProperty(Game_miniqiaoba_Mgr, "Ins_taolidafangzi_tance", {
                get: function () {
                    return Game_miniqiaoba_Mgr._insta_taolidafangzi_nce;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Game_miniqiaoba_Mgr.prototype, "CurL_taolidafangzi_evel", {
                get: function () {
                    return this._curL_taolidafangzi_evel;
                },
                enumerable: !0,
                configurable: !0
            }), Game_miniqiaoba_Mgr.prototype.PreL_taolidafangzi_oadScene = function (i) {
                if (n.default.is_miniqiaoba_Iphone6()) console.log("is_ZMDGJ_Iphone6 不预加载远程场景关卡"); else {
                    var a = "LayaScene/Conventional/" + i + ".ls";
                    Laya.Scene3D.load(a, Laya.Handler.create(this, function (i) {
                        console.log("预加载远程场景关卡" + a + "  加载完成");
                    }));
                }
            }, Game_miniqiaoba_Mgr.prototype.onStart = function () {
                this.pre_miniqiaoba_CreateGame();
            }, Game_miniqiaoba_Mgr.prototype.pre_miniqiaoba_CreateGame = function () {
                Laya.MouseManager.multiTouchEnabled = !1,
                    platform.getInstance().puzzlegamestartup("Room-Escape-3d", () => {
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Room-Escape-3d-musicState") ?
                            JSON.parse(Laya.LocalStorage.getItem("Room-Escape-3d-musicState")) : false;
                        Laya.stage.addChild(window.scrollList);
                        window.scrollList.bottom = 20;
                        window.scrollList.setSize(200, 200, true);
                        window.scrollList.visible = false;
                        window.yad.right = 0;
                        this.EnterGa_taolidafangzi_meScene(function () { });
                    })
            }, Game_miniqiaoba_Mgr.prototype.EnterGa_taolidafangzi_meScene = function (i) {
                var a = this, t = "LayaScene/Conventional/" + e.default.get_miniqiaoba_FakerLeveNum().toString() + ".ls";
                console.log("加载场景,", t), Laya.Scene3D.load(t, Laya.Handler.create(this, function (t) {
                    t && (Laya.stage.addChild(t), null == t.getComponent(r.default) && (a._curL_taolidafangzi_evel = t.addComponent(r.default))),
                        _.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(l.Event_miniqiaoba_Def.App_Close_miniqiaoba_FirstLoadingView),
                        platform.getInstance().showLoading(),
                        o.default.insta_taolidafangzi_nce.open_miniqiaoba_View(o.View_miniqiaoba_Def.Gamin_taolidafangzi_gView, null, i);
                }));
            }, Game_miniqiaoba_Mgr.prototype.onAwake = function () {
                this.SetShare_wodexiaokonglong_Menu("", "", function () { }, function () { }, function () { });
            }, Game_miniqiaoba_Mgr.prototype.SetShare_wodexiaokonglong_Menu = function (i, a, t, n, o) {
                Laya.Browser.onMiniGame && (console.log("小游戏设置转发按钮"), Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !1,
                    success: t,
                    fail: n,
                    complete: o
                }), Laya.Browser.window.wx.onShareAppMessage(function () {
                    return {
                        title: i,
                        imageUrl: a
                    };
                }));
            }, Game_miniqiaoba_Mgr._insta_taolidafangzi_nce = null, Game_miniqiaoba_Mgr;
        }(Laya.Script);
        t.default = s;
    }, {
        "../Event/EventDef": 2,
        "../Event/EventMgr": 3,
        "../GameControl/Level/Level": 5,
        "../User/User": 24,
        "../Utilit": 25,
        "./ViewMgr": 23
    }],
    21: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            function Sound_miniqiaoba_Mgr() {
                this._enab_taolidafangzi_led = !0;
            }
            return Sound_miniqiaoba_Mgr.prototype.stop_miniqiaoba_BGM = function () {
                Laya.Browser.onMiniGame ? this.bg_taolidafangzi_m && this.bg_taolidafangzi_m.pause() : Laya.SoundManager.stopMusic();
            }, Sound_miniqiaoba_Mgr.prototype.play_miniqiaoba_Sound = function (i) {
                if (this._enab_taolidafangzi_led) {
                    var a = this.get_miniqiaoba_SoundUrl(i);
                    if (Laya.Browser.onMiniGame) {
                        var t = laya.utils.Pool.getItem(i);
                        null == t && ((t = wx.createInnerAudioContext()).src = Sound_miniqiaoba_Mgr.sound_taolidafangzi_ResPath + i + ".mp3",
                            t.onEnded(function () {
                                laya.utils.Pool.recover(i, t), t.offEnded();
                            })), t.play();
                    } else Laya.SoundManager.playSound(a, 1);
                }
            }, Sound_miniqiaoba_Mgr.prototype.play_miniqiaoba_BGM = function (i) {
                if (this._enab_taolidafangzi_led) {
                    var a = this.get_miniqiaoba_SoundUrl(i);
                    Laya.Browser.onMiniGame ? (this.bg_taolidafangzi_m || (this.bg_taolidafangzi_m = wx.createInnerAudioContext()),
                        this.bg_taolidafangzi_m.pause(), this.bg_taolidafangzi_m.src = a, this.bg_taolidafangzi_m.loop = !0,
                        this.bg_taolidafangzi_m.play()) : Laya.SoundManager.playMusic(a, 0);
                }
            }, Object.defineProperty(Sound_miniqiaoba_Mgr.prototype, "Enab_taolidafangzi_led", {
                get: function () {
                    return this._enab_taolidafangzi_led;
                },
                set: function (i) {
                    i || this.stop_miniqiaoba_BGM(), this._enab_taolidafangzi_led = i;
                },
                enumerable: !0,
                configurable: !0
            }), Sound_miniqiaoba_Mgr.prototype.get_miniqiaoba_SoundUrl = function (i) {
                return Sound_miniqiaoba_Mgr.sound_taolidafangzi_ResPath + i + ".mp3";
            }, Sound_miniqiaoba_Mgr.sound_taolidafangzi_ResPath = "sound/", Sound_miniqiaoba_Mgr.insta_taolidafangzi_nce = new Sound_miniqiaoba_Mgr(),
                Sound_miniqiaoba_Mgr;
        }();
        t.default = n;
    }, {}],
    22: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            function Vibrate_miniqiaoba_Mgr() { }
            return Vibrate_miniqiaoba_Mgr.vibrate_miniqiaoba_ = function (i) {
                if (Vibrate_miniqiaoba_Mgr.isEn_taolidafangzi_able) if (Laya.Browser.onMiniGame) {
                    var a = i / 15, t = 0, n = {
                        count: a,
                        index: t
                    };
                    Laya.timer.loop(16, n, function () {
                        Vibrate_miniqiaoba_Mgr.vibrate_miniqiaoba_Short(), ++t > a && Laya.timer.clearAll(n);
                    });
                } else if (Laya.Browser.onQGMiniGame) {
                    var o = i / 20, e = 0, _ = {
                        count: o,
                        index: e
                    };
                    Laya.timer.loop(21, _, function () {
                        Vibrate_miniqiaoba_Mgr.vibrate_miniqiaoba_Short(), ++e > o && Laya.timer.clearAll(_);
                    });
                }
            }, Vibrate_miniqiaoba_Mgr.vibrate_miniqiaoba_Short = function () {
                Vibrate_miniqiaoba_Mgr.isEn_taolidafangzi_able && (Laya.Browser.onMiniGame ? Laya.Browser.window.wx.vibrateShort() : Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.vibrateShort() : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateShort());
            }, Vibrate_miniqiaoba_Mgr.isEn_taolidafangzi_able = !0, Vibrate_miniqiaoba_Mgr;
        }();
        t.default = n;
    }, {}],
    23: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), function (i) {
            i.None = "", i.luffy_GameWinView = "View/GameWinViewTemplate.json", i.luffy_GameFailView = "View/GameFailViewTemplate.json",
                i.Gamin_taolidafangzi_gView = "View/GamingView.json";
        }(t.View_miniqiaoba_Def || (t.View_miniqiaoba_Def = {}));
        var n = function () {
            function View_miniqiaoba_Mgr() {
                this._loadi_taolidafangzi_ngList = new Array(), this._vie_taolidafangzi_ws = {};
            }
            return View_miniqiaoba_Mgr.prototype.Show_miniqiaoba_View = function (i) {
                var a = this._vie_taolidafangzi_ws[i];
                if (a) {
                    var t = a._components;
                    if (t) for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (o._viewBase) {
                            o.show();
                            break;
                        }
                    }
                }
            }, View_miniqiaoba_Mgr.prototype.close_miniqiaoba_View = function (i) {
                var a = this._vie_taolidafangzi_ws[i];
                if (a) {
                    var t = a._components;
                    if (t) for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (o._viewBase) {
                            o.onClose();
                            break;
                        }
                    }
                    a.removeSelf(), a.destroy(), this._vie_taolidafangzi_ws[i] = null;
                }
            }, View_miniqiaoba_Mgr.prototype.hide_miniqiaoba_View = function (i) {
                var a = this._vie_taolidafangzi_ws[i];
                if (a) {
                    var t = a._components;
                    if (t) for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (o._viewBase) {
                            o.hide();
                            break;
                        }
                    }
                }
            }, View_miniqiaoba_Mgr.prototype.open_miniqiaoba_View = function (i, a, t) {
                if (this._vie_taolidafangzi_ws[i]) {
                    var n = this._vie_taolidafangzi_ws[i]._components, o = null;
                    if (n) for (var e = 0; e < n.length; e++) {
                        var _ = n[e];
                        if (_._viewBase) {
                            (o = _).open_miniqiaoba_View(a);
                            break;
                        }
                    }
                    t && t(o);
                } else {
                    for (var l = 0; l < this._loadi_taolidafangzi_ngList.length; ++l) {
                        var r = this._loadi_taolidafangzi_ngList[l];
                        if (r == i) return void console.log("界面 : " + String(r) + " 正在加载中，请不要重复加载");
                    }
                    var s = String(i), f = this;
                    this._loadi_taolidafangzi_ngList.push(i), Laya.Scene.load(s, Laya.Handler.create(this, function (n) {
                        Laya.stage.addChild(n);
                        var o = n;
                        f._vie_taolidafangzi_ws[i] = o;
                        var e = n._components, _ = null;
                        if (e) for (var l = 0; l < e.length; l++) {
                            var r = e[l];
                            if (r._viewBase) {
                                _ = r, r._viewDef = i, _.open_miniqiaoba_View(a);
                                break;
                            }
                        }
                        for (var s = 0; s < this._loadi_taolidafangzi_ngList.length; ++s) {
                            if (this._loadi_taolidafangzi_ngList[s] == i) {
                                f._loadi_taolidafangzi_ngList.splice(s, 1);
                                break;
                            }
                        }
                        t && t(_);
                    }));
                }
            }, View_miniqiaoba_Mgr.prototype.get_miniqiaoba_View = function (i) {
                return this._vie_taolidafangzi_ws[i];
            }, View_miniqiaoba_Mgr.insta_taolidafangzi_nce = new View_miniqiaoba_Mgr(), View_miniqiaoba_Mgr;
        }();
        t.default = n;
    }, {}],
    24: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../vivo/GameDefine"), o = function () {
            return function () {
                this.levelNum = 2, this.usedItem = 3;
            };
        }();
        t.User_miniqiaoba_GameData = o;
        var e = function (i) {
            function User_miniqiaoba_() {
                return null !== i && i.apply(this, arguments) || this;
            }
            return __extends(User_miniqiaoba_, i), User_miniqiaoba_.get_miniqiaoba_FakerLeveNum = function () {
                //21 == User_miniqiaoba_._game_taolidafangzi_Data.levelNum && (User_miniqiaoba_._game_taolidafangzi_Data.levelNum = 22),
                return console.log("当前等级,", User_miniqiaoba_._game_taolidafangzi_Data.levelNum), User_miniqiaoba_._game_taolidafangzi_Data.levelNum <= 38 ? User_miniqiaoba_._game_taolidafangzi_Data.levelNum : User_miniqiaoba_._game_taolidafangzi_Data.levelNum / 38 == 0 ? 38 : User_miniqiaoba_._game_taolidafangzi_Data.levelNum % 38;
            }, Object.defineProperty(User_miniqiaoba_, "curUsedItem", {
                get: function () {
                    return User_miniqiaoba_._game_taolidafangzi_Data.usedItem;
                },
                set: function (i) {
                    User_miniqiaoba_._game_taolidafangzi_Data.usedItem = i;
                },
                enumerable: !0,
                configurable: !0
            }), User_miniqiaoba_.set_miniqiaoba_LeveNum = function (i) {
                // 21 == i && (i = 22),
                User_miniqiaoba_._game_taolidafangzi_Data.levelNum = i, this.set_miniqiaoba_FakerLeveNum(),
                    n.GameD_chaojiguoshangche_efine.saveGam_chaojiguoshangche_eDate();
            }, User_miniqiaoba_.get_miniqiaoba_FakerNextLeveNum = function () {
                return User_miniqiaoba_.fakerN_taolidafangzi_extLeveNum;
            }, User_miniqiaoba_.get_miniqiaoba_SaveData = function () {
                return JSON.stringify(User_miniqiaoba_._game_taolidafangzi_Data);
            }, User_miniqiaoba_.initi_miniqiaoba_User = function (i) {
                i && 0 != i && (User_miniqiaoba_._game_taolidafangzi_Data.levelNum = i.levelNum,
                    null != i.usedItem && (User_miniqiaoba_._game_taolidafangzi_Data.usedItem = i.usedItem)),
                    this.set_miniqiaoba_FakerLeveNum();
            }, User_miniqiaoba_.get_miniqiaoba_LeveNum = function () {
                return User_miniqiaoba_._game_taolidafangzi_Data.levelNum;
            }, User_miniqiaoba_.set_miniqiaoba_FakerLeveNum = function () { }, User_miniqiaoba_.fakerN_taolidafangzi_extLeveNum = 2,
                User_miniqiaoba_.leveN_taolidafangzi_umMax = 38, User_miniqiaoba_.fakerL_taolidafangzi_eveNum = 2,
                User_miniqiaoba_._game_taolidafangzi_Data = new o(), User_miniqiaoba_;
        }(Laya.Script);
        t.default = e;
    }, {
        "../vivo/GameDefine": 35
    }],
    25: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            function Uti_taolidafangzi_lit() { }
            return Uti_taolidafangzi_lit.get_miniqiaoba_Vector3Distance = function (i, a) {
                return Math.sqrt((i.x - a.x) * (i.x - a.x) + (i.y - a.y) * (i.y - a.y) + (i.z - a.z) * (i.z - a.z));
            }, Uti_taolidafangzi_lit.get_miniqiaoba_UnitVector3 = function (i) {
                new Laya.Vector3(0, 0, 0);
                var a = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z);
                return new Laya.Vector3(i.x / a, i.y / a, i.z / a);
            }, Uti_taolidafangzi_lit.is_miniqiaoba_Iphone = function () {
                return Laya.Browser.onIPhone;
            }, Uti_taolidafangzi_lit.for_miniqiaoba_EachChild = function (i, a) {
                for (var t = 0; t < i.numChildren; ++t) {
                    var n = i.getChildAt(t);
                    a(n), Uti_taolidafangzi_lit.for_miniqiaoba_EachChild(n, a);
                }
            }, Uti_taolidafangzi_lit.is_miniqiaoba_Iphone6 = function () {
                if (!Laya.Browser.onIPhone) return !1;
                if (Laya.Browser.onMiniGame && Laya.Browser.window.wx.getSystemInfoSync().model.indexOf("iPhone 6") > -1) return !0;
                return !1;
            }, Uti_taolidafangzi_lit.get_miniqiaoba_UnitTwoVector3 = function (i, a) {
                new Laya.Vector3(0, 0, 0);
                var t = Math.sqrt((i.x - a.x) * (i.x - a.x) + (i.y - a.y) * (i.y - a.y) + (i.z - a.z) * (i.z - a.z));
                return new Laya.Vector3((i.x - a.x) / t, (i.y - a.y) / t, (i.z - a.z) / t);
            }, Uti_taolidafangzi_lit.get_miniqiaoba_Child = function (i, a) {
                for (var t = 0; t < i.numChildren; ++t) {
                    var n = i.getChildAt(t);
                    if (n.name == a) return n;
                    var o = Uti_taolidafangzi_lit.get_miniqiaoba_Child(n, a);
                    if (o) return o;
                }
                return null;
            }, Uti_taolidafangzi_lit;
        }();
        t.default = n;
    }, {}],
    26: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../ViewBase"), o = i("../../User/User"), e = i("../../Event/EventMgr"), _ = i("../../Event/EventDef"), l = i("../../Mgr/SoundMgr"), r = i("../../Mgr/GameMgr"), s = i("../../Mgr/ViewMgr"), f = function (i) {
            function Gaming_taolidafangzi_View() {
                var a = null !== i && i.apply(this, arguments) || this;
                window.canStart = false;
                return a._gu_taolidafangzi_nBtn = null, a._auto_taolidafangzi_Zone = null, a._leve_taolidafangzi_lNum = null,
                    a._guid_taolidafangzi_eZone = null, a.tiaoguoBtn = null, a;
            }
            return __extends(Gaming_taolidafangzi_View, i),
                Gaming_taolidafangzi_View.prototype.Auto_taolidafangzi_Size = function () {
                    var i = Laya.Browser.width / 750, a = Laya.Browser.height / 1334;
                    this.owner.scale(i, a), this.owner.getChildByName("KRQ_Main").getChildByName("TopZone").scale(1, i / a),
                        this.owner.getChildByName("KRQ_Main").getChildByName("KRQ_HLoopAd").scale(1, i / a),
                        this.owner.getChildByName("KRQ_Main").getChildByName("KRQ_History").scale(1, i / a);
                }, Gaming_taolidafangzi_View.prototype.onDestroy = function () {
                    i.prototype.onDestroy.call(this), l.default.insta_taolidafangzi_nce.stop_miniqiaoba_BGM();
                }, Gaming_taolidafangzi_View.prototype.add_miniqiaoba_Event = function () {
                    e.default.inst_taolidafangzi_ance.regEvemt_miniqiaoba_(_.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start, this, this.Remov_taolidafangzi_eGuide);
                }, Gaming_taolidafangzi_View.prototype.Remov_taolidafangzi_eGuide = function () {
                    console.log("RemoveGuide"), e.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(_.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start, this, this.Remov_taolidafangzi_eGuide),
                        this._guid_taolidafangzi_eZone.removeSelf();
                }, Gaming_taolidafangzi_View.prototype.remove_miniqiaoba_Event = function () {
                    e.default.inst_taolidafangzi_ance.removeEvent_miniqiaoba_(_.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start, this, this.Remov_taolidafangzi_eGuide);
                }, Gaming_taolidafangzi_View.prototype.changeMusic = function () {
                    window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    this.img_music.skin = window.WebAudioEngine.pause ? "newRes/btn_sound_off.png" : "newRes/btn_sound_on.png";
                    Laya.LocalStorage.setItem("Room-Escape-3d-musicState", JSON.stringify(window.WebAudioEngine.pause));
                }, Gaming_taolidafangzi_View.prototype.luffy_tiaoguoBtn = function () {
                    platform.getInstance().showReward(() => {
                        (o.default.set_miniqiaoba_LeveNum(o.default.get_miniqiaoba_LeveNum() + 1),
                            r.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel && r.default.Ins_taolidafangzi_tance.CurL_taolidafangzi_evel.Destroy_miniqiaoba_Scene(),
                            platform.getInstance().showLoading(),
                            s.default.insta_taolidafangzi_nce.open_miniqiaoba_View(s.View_miniqiaoba_Def.luffy_GameWinView),
                            s.default.insta_taolidafangzi_nce.close_miniqiaoba_View(s.View_miniqiaoba_Def.Gamin_taolidafangzi_gView));
                    })
                }, Gaming_taolidafangzi_View.prototype.onAwake = function () {
                    this._auto_taolidafangzi_Zone = this.owner.getChildByName("AutoZone"), this._leve_taolidafangzi_lNum = this._auto_taolidafangzi_Zone.getChildByName("LevelNum"),
                        this._gu_taolidafangzi_nBtn = this._auto_taolidafangzi_Zone.getChildByName("GunBtn"),
                        this._guid_taolidafangzi_eZone = this.owner.getChildByName("GuideZone"),
                        this.tiaoguoBtn = this.owner.getChildByName("tiaoguo"),
                        this.img_music = this.owner.getChildByName("img_music"),
                        this.tiaoguoBtn.on(Laya.Event.CLICK, this, this.luffy_tiaoguoBtn),
                        this.img_music.on(Laya.Event.CLICK, this, this.changeMusic),
                        this._leve_taolidafangzi_lNum.text = "Level " + (o.default.get_miniqiaoba_LeveNum() - 1).toString(),
                        Laya.Browser.onMiniGame && webuzzSDK.showBottomAd(), l.default.insta_taolidafangzi_nce.play_miniqiaoba_BGM("BGM");
                    this.img_music.skin = window.WebAudioEngine.pause ? "newRes/btn_sound_off.png" : "newRes/btn_sound_on.png";
                    this._guid_taolidafangzi_eZone.visible = false;
                    window.scrollList.visible = window.loadAniEnd;
                    this.owner.getChildByName("btn_play").on(Laya.Event.CLICK, this, () => {
                        platform.getInstance().showInterstitial(() => {
                            window.canStart = true;
                            window.scrollList.visible = false;
                            this.owner.getChildByName("btn_play").visible = false;
                            if (o.default.get_miniqiaoba_LeveNum() == 2) {
                                this._guid_taolidafangzi_eZone.visible = true;
                            }

                        })
                    });
                    platform.getInstance().closeLoading();
                }, Gaming_taolidafangzi_View;
        }(n.default);
        t.default = f;
    }, {
        "../../Event/EventDef": 2,
        "../../Event/EventMgr": 3,
        "../../Mgr/GameMgr": 20,
        "../../Mgr/SoundMgr": 21,
        "../../Mgr/ViewMgr": 23,
        "../../User/User": 24,
        "../ViewBase": 33
    }],
    27: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../../Event/EventMgr"), o = i("../../Event/EventDef"), e = function (i) {
            function Inp_taolidafangzi_ut() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._center_taolidafangzi_Point = new Laya.Vector2(0, 0), a._pre_taolidafangzi_ss = !1,
                    a._owne_taolidafangzi_rSp = null, a._lastPo_taolidafangzi_int = [], a._move_taolidafangzi_Start = !1,
                    a;
            }
            return __extends(Inp_taolidafangzi_ut, i), Inp_taolidafangzi_ut.prototype.onM_taolidafangzi_ove = function () {
                var i = this._owne_taolidafangzi_rSp.globalToLocal(new Laya.Point(this._owne_taolidafangzi_rSp.mouseX, this._owne_taolidafangzi_rSp.mouseY)), a = i.x - this._center_taolidafangzi_Point.x, t = i.y - this._center_taolidafangzi_Point.y, e = new Laya.Vector2(a, t);
                a * a + t * t >= 100 && (e.x = 10 * Math.cos(Math.atan2(t, a)), e.y = 10 * Math.sin(Math.atan2(t, a)),
                    this._center_taolidafangzi_Point = new Laya.Vector2(i.x - e.x, i.y - e.y)), n.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Move, {
                        dir: e
                    });
            }, Inp_taolidafangzi_ut.prototype.onD_taolidafangzi_own = function () {
                if (!window.canStart) {
                    return;
                }
                var i = this._owne_taolidafangzi_rSp.globalToLocal(new Laya.Point(this._owne_taolidafangzi_rSp.mouseX, this._owne_taolidafangzi_rSp.mouseY));
                this._move_taolidafangzi_Start = !0, this._center_taolidafangzi_Point = new Laya.Vector2(i.x, i.y),
                    this._owne_taolidafangzi_rSp.on(Laya.Event.MOUSE_MOVE, this, this.onM_taolidafangzi_ove),
                    this._owne_taolidafangzi_rSp.on(Laya.Event.MOUSE_UP, this, this.onCli_taolidafangzi_ckUp),
                    this._owne_taolidafangzi_rSp.on(Laya.Event.MOUSE_OUT, this, this.onCli_taolidafangzi_ckUp),
                    n.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Start);
            }, Inp_taolidafangzi_ut.prototype.onCli_taolidafangzi_ckUp = function () {
                this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_MOVE, this, this.onM_taolidafangzi_ove),
                    this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_UP, this, this.onCli_taolidafangzi_ckUp),
                    this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_OUT, this, this.onCli_taolidafangzi_ckUp),
                    n.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Release);
            }, Inp_taolidafangzi_ut.prototype.onAwake = function () {
                this._owne_taolidafangzi_rSp = this.owner;
                for (var i = 0; i < 5; i++) this._lastPo_taolidafangzi_int.push(new Laya.Vector2(0, 0));
            }, Inp_taolidafangzi_ut.prototype.onEnable = function () {
                this._owne_taolidafangzi_rSp.on(Laya.Event.MOUSE_DOWN, this, this.onD_taolidafangzi_own);
            }, Inp_taolidafangzi_ut.prototype.onDisable = function () {
                this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_DOWN, this, this.onD_taolidafangzi_own),
                    this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_UP, this, this.onCli_taolidafangzi_ckUp),
                    this._owne_taolidafangzi_rSp.off(Laya.Event.MOUSE_MOVE, this, this.onM_taolidafangzi_ove),
                    n.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(o.Event_miniqiaoba_Def.Game_OnInput_miniqiaoba_Release);
            }, Inp_taolidafangzi_ut;
        }(Laya.Script);
        t.default = e;
    }, {
        "../../Event/EventDef": 2,
        "../../Event/EventMgr": 3
    }],
    28: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function Gui_taolidafangzi_deView() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._auto_taolidafangzi_Zone = null, a._mAr_taolidafangzi_mature = null, a;
            }
            return __extends(Gui_taolidafangzi_deView, i), Gui_taolidafangzi_deView.prototype.Ini_taolidafangzi_tAni = function () {
                this._mAr_taolidafangzi_mature = new Laya.Skeleton();
                this.owner;
                this._mAr_taolidafangzi_mature.scale(.6, .6), this._auto_taolidafangzi_Zone.getChildByName("Ani").addChild(this._mAr_taolidafangzi_mature),
                    this._mAr_taolidafangzi_mature.load("Ani/NewProject.sk", Laya.Handler.create(this, function (i) {
                        i.lock = !0;
                    }));
            }, Gui_taolidafangzi_deView.prototype.onAwake = function () {
                this._auto_taolidafangzi_Zone = this.owner.getChildByName("AutoZone"), this.Ini_taolidafangzi_tAni();
            }, Gui_taolidafangzi_deView;
        }(i("../ViewBase").default);
        t.default = n;
    }, {
        "../ViewBase": 33
    }],
    29: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isIViewSt_taolidafangzi_ateListener = function (i) {
            return null != i.onViewShow && "function" == typeof i.onViewShow && null != i.onViewHide && "function" == typeof i.onViewHide;
        };
    }, {}],
    30: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (i) {
            function luffy_LoadingView() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a._process_XIAOKONGLONG_Width = 0, a;
            }
            return __extends(luffy_LoadingView, i),
                luffy_LoadingView.prototype.set_Jiuyuan_Process = function (i) { },
                luffy_LoadingView.prototype.onEnable = function () {
                    i.prototype.onEnable.call(this);
                }, luffy_LoadingView.prototype.onAwake = function () {
                    this._process_XIAOKONGLONG_BarBg = this.owner.getChildByName("processBarBg"),
                        this._process_XIAOKONGLONG_Bar = this._process_XIAOKONGLONG_BarBg.getChildByName("processBar"),
                        this._process_XIAOKONGLONG_Bar.width = 1, this._process_XIAOKONGLONG_Width = this._process_XIAOKONGLONG_Bar.width,
                        Laya.Tween.to(this._process_XIAOKONGLONG_Bar, {
                            width: 750
                        }, 4500, null, Laya.Handler.create(this, () => {
                            window.loadAniEnd = true;
                        }));
                }, luffy_LoadingView;
        }(i("../ViewBase").default);
        t.default = n;
    }, {
        "../ViewBase": 33
    }],
    31: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../../../Mgr/GameMgr"), o = i("../../../User/User"), e = function (i) {
            function GameFailViewTemplate() {
                return null !== i && i.apply(this, arguments) || this;
            }
            return __extends(GameFailViewTemplate, i), GameFailViewTemplate.prototype.onAwake = function () {
                var a = this;
                i.prototype.onAwake.call(this), this.btnNext = this.owner.getChildByName("btnNext"),
                    this.btnVedio = this.owner.getChildByName("btnVedio"), Laya.Browser.onMiniGame && (webuzzSDK.showSquareCustomAd(100),
                        webuzzSDK.hideBottomAd()), this.btnNext.visible = !0, this.btnVedio.visible = !0
                // , Laya.timer.once(2e3, this, function () {
                //     a.btnNext.visible = !0, a.btnVedio.visible = !0;
                // });
            }, GameFailViewTemplate.prototype.onStart = function () {
                i.prototype.onStart.call(this);
                window.scrollList.visible = true;
                platform.getInstance().closeLoading();
            }, GameFailViewTemplate.prototype.add_miniqiaoba_Event = function () {
                i.prototype.add_miniqiaoba_Event.call(this), this.btnNext.on(Laya.Event.CLICK, this, this.luffy_onNextBtn),
                    this.btnVedio.on(Laya.Event.CLICK, this, this.luffy_onbtnVedio);
            }, GameFailViewTemplate.prototype.remove_miniqiaoba_Event = function () {
                i.prototype.remove_miniqiaoba_Event.call(this), this.btnNext.off(Laya.Event.CLICK, this, this.luffy_onNextBtn),
                    this.btnVedio.off(Laya.Event.CLICK, this, this.luffy_onbtnVedio);
            }, GameFailViewTemplate.prototype.luffy_onbtnVedio = function () {
                var i = this;
                platform.getInstance().showReward(() => {
                    platform.getInstance().showLoading();
                    (o.default.set_miniqiaoba_LeveNum(o.default.get_miniqiaoba_LeveNum() + 1),
                        this.close_miniqiaoba_View(), n.default.Ins_taolidafangzi_tance.EnterGa_taolidafangzi_meScene(function () { }));
                });
            }, GameFailViewTemplate.prototype.nextHandler = function () {
                window.scrollList.visible = false;
                platform.getInstance().showLoading();
                Laya.Browser.onMiniGame && webuzzSDK.hideSquareCustomAd(), this.close_miniqiaoba_View(),
                    n.default.Ins_taolidafangzi_tance.EnterGa_taolidafangzi_meScene(function () { });
            }, GameFailViewTemplate.prototype.luffy_onNextBtn = function () {
                platform.getInstance().showInterstitial(() => {
                    this.nextHandler();
                })
            }, GameFailViewTemplate;
        }(i("../../ViewBase").default);
        t.default = e;
    }, {
        "../../../Mgr/GameMgr": 20,
        "../../../User/User": 24,
        "../../ViewBase": 33
    }],
    32: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../../../Mgr/GameMgr"), o = i("../../../User/User"), e = function (i) {
            function luffy_GameWinViewTemplate() {
                return null !== i && i.apply(this, arguments) || this;
            }
            return __extends(luffy_GameWinViewTemplate, i), luffy_GameWinViewTemplate.prototype.onAwake = function () {
                var a = this;
                i.prototype.onAwake.call(this), this.btnNext = this.owner.getChildByName("btnNext"),
                    Laya.Browser.onMiniGame && (webuzzSDK.showSquareCustomAd(100), webuzzSDK.endLevelGame(o.default.get_miniqiaoba_LeveNum() - 1),
                        webuzzSDK.hideBottomAd()), this.btnNext.visible = !0
                // , Laya.timer.once(2e3, this, function () {
                //     a.btnNext.visible = !0;
                // });
            }, luffy_GameWinViewTemplate.prototype.onStart = function () {
                i.prototype.onStart.call(this);
                window.scrollList.visible = true;
                platform.getInstance().closeLoading();
            }, luffy_GameWinViewTemplate.prototype.add_miniqiaoba_Event = function () {
                i.prototype.add_miniqiaoba_Event.call(this), this.btnNext.on(Laya.Event.CLICK, this, this.luffy_onNextBtn);
            }, luffy_GameWinViewTemplate.prototype.remove_miniqiaoba_Event = function () {
                i.prototype.remove_miniqiaoba_Event.call(this), this.btnNext.off(Laya.Event.CLICK, this, this.luffy_onNextBtn);
            }, luffy_GameWinViewTemplate.prototype.nextHandler = function () {
                window.scrollList.visible = false;
                platform.getInstance().showLoading();
                Laya.Browser.onMiniGame && webuzzSDK.hideSquareCustomAd(), this.close_miniqiaoba_View(),
                    n.default.Ins_taolidafangzi_tance.EnterGa_taolidafangzi_meScene(function () { });
            }, luffy_GameWinViewTemplate.prototype.luffy_onNextBtn = function () {
                platform.getInstance().showInterstitial(() => {
                    this.nextHandler();
                })
            }, luffy_GameWinViewTemplate;
        }(i("../../ViewBase").default);
        t.default = e;
    }, {
        "../../../Mgr/GameMgr": 20,
        "../../../User/User": 24,
        "../../ViewBase": 33
    }],
    33: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../Mgr/ViewMgr"), o = i("../Event/EventMgr"), e = i("../Event/EventDef"), _ = i("../Utilit"), l = i("./IViewStateListener"), r = function (i) {
            function View_miniqiaoba_Base() {
                var a = null !== i && i.apply(this, arguments) || this;
                return a.onClose_taolidafangzi_Event = null, a.onOpen_taolidafangzi_Event = null,
                    a._viewBase = !0, a._viewDef = n.View_miniqiaoba_Def.None, a._data = {}, a;
            }
            return __extends(View_miniqiaoba_Base, i), Object.defineProperty(View_miniqiaoba_Base.prototype, "View", {
                get: function () {
                    return this.owner;
                },
                enumerable: !0,
                configurable: !0
            }), View_miniqiaoba_Base.prototype.show_miniqiaoba_ = function () {
                var i = this;
                this.View.visible = !0, this.onShow(), _.default.for_miniqiaoba_EachChild(this.owner, function (a) {
                    var t = a._components;
                    if (t) for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        l.isIViewSt_taolidafangzi_ateListener(o) && o.on_miniqiaoba_ViewShow(i);
                    }
                });
            }, View_miniqiaoba_Base.prototype.close_miniqiaoba_View = function () {
                n.default.insta_taolidafangzi_nce.close_miniqiaoba_View(this._viewDef);
            }, View_miniqiaoba_Base.prototype.hide_miniqiaoba_ = function () {
                var i = this;
                this.View.visible = !1, this.onHide(), _.default.for_miniqiaoba_EachChild(this.owner, function (a) {
                    var t = a._components;
                    if (t) for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        l.isIViewSt_taolidafangzi_ateListener(o) && o.on_miniqiaoba_ViewHide(i);
                    }
                });
            }, View_miniqiaoba_Base.prototype.view_miniqiaoba_IsHide = function () {
                return this.View.visible;
            }, View_miniqiaoba_Base.prototype.onHide = function () { }, View_miniqiaoba_Base.prototype.onShow = function () { },
                View_miniqiaoba_Base.prototype.onClose = function () {
                    Laya.timer.clearAll(this), Laya.Tween.clearAll(this),
                        o.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(e.Event_miniqiaoba_Def.Game_OnView_miniqiaoba_Close, {
                            view: this._viewDef
                        }), this.onClose_taolidafangzi_Event && this.onClose_taolidafangzi_Event();
                }, View_miniqiaoba_Base.prototype.onAwake = function () {
                    this.View.autoDestroyAtClosed = !0;
                }, View_miniqiaoba_Base.prototype.onEnable = function () {
                    this.add_miniqiaoba_Event();
                }, View_miniqiaoba_Base.prototype.onDisable = function () {
                    this.remove_miniqiaoba_Event();
                }, View_miniqiaoba_Base.prototype.onDestroy = function () {
                    this.remove_miniqiaoba_Event();
                }, View_miniqiaoba_Base.prototype.open_miniqiaoba_View = function (i) {
                    this._data = i, this.show_miniqiaoba_()
                    o.default.inst_taolidafangzi_ance.dispatch_miniqiaoba_(e.Event_miniqiaoba_Def.Game_OnView_miniqiaoba_Open, {
                        view: this._viewDef
                    }), this.onOpen_taolidafangzi_Event && this.onOpen_taolidafangzi_Event();
                }, View_miniqiaoba_Base.prototype.add_miniqiaoba_Event = function () { },
                View_miniqiaoba_Base.prototype.remove_miniqiaoba_Event = function () {
                    Laya.timer.clearAll(this);
                }, View_miniqiaoba_Base;
        }(Laya.Script);
        t.default = r;
    }, {
        "../Event/EventDef": 2,
        "../Event/EventMgr": 3,
        "../Mgr/ViewMgr": 23,
        "../Utilit": 25,
        "./IViewStateListener": 29
    }],
    34: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Laya.ClassUtils.regClass;
        !function (i) {
            !function (i) {
                var a = function (i) {
                    function LoadingUI() {
                        return i.call(this) || this;
                    }
                    return __extends(LoadingUI, i), LoadingUI.prototype.createChildren = function () {
                        i.prototype.createChildren.call(this), this.createView(LoadingUI.uiView);
                    }, LoadingUI.uiView = {
                        "x": 0,
                        "type": "View",
                        "selectedBox": 2,
                        "selecteID": 9,
                        "searchKey": "View",
                        "props": { "zOrder": 999, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                        "nodeParent": -1,
                        "maxID": 20,
                        "loadList3D": [
                        ],
                        "loadList": [
                            "Loading/loding1.png",
                            "Loading/loding4.png",
                            "Loading/loding2.png"],
                        "label": "View",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 2,
                        "child": [
                            {
                                "x": 15,
                                "type": "Box",
                                "searchKey": "Box",
                                "props": { "y": 0, "x": 0, "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#c0bfba" },
                                "nodeParent": 2,
                                "label": "Box",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 17,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 0, "x": 0, "skin": "Loading/jzy.png" },
                                "nodeParent": 2,
                                "label": "Image",
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
                                "searchKey": "Label,title",
                                "props": { "y": 324, "width": 750, "valign": "middle", "text": "Room Escape 3D", "strokeColor": "#ffffff", "stroke": 10, "runtime": "laya.display.Text", "name": "title", "italic": true, "fontSize": 80, "font": "Microsoft YaHei", "color": "#ff27ff", "bold": true, "align": "center" },
                                "nodeParent": 2,
                                "label": "title",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 19,
                                "child": [
                                ]
                            },
                            {
                                "x": 15,
                                "type": "Clip",
                                "searchKey": "Clip,processBarBg",
                                "props": { "width": 815, "skin": "Loading/loding4.png", "scaleY": 0.7, "scaleX": 0.7, "name": "processBarBg", "height": 105, "centerX": 1, "bottom": 160 },
                                "nodeParent": 2,
                                "label": "processBarBg",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 6,
                                "child": [
                                    {
                                        "type": "Clip",
                                        "searchKey": "Clip,processBar",
                                        "props": { "x": 27, "width": 75, "top": 14, "skin": "Loading/loding2.png", "sizeGrid": "0,35,0,35", "pivotY": 0, "name": "processBar" },
                                        "nodeParent": 6,
                                        "label": "processBar",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 5,
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
                                "props": { "runtime": "View/LoadingView/LoadingView.ts" },
                                "nodeParent": 2,
                                "label": "LoadingView",
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
                    }, LoadingUI;
                }(Laya.View);
                i.LoadingUI = a, n("ui.View.LoadingUI", a);
            }(i.View || (i.View = {}));
        }(t.ui || (t.ui = {}));
    }, {}],
    35: [function (i, a, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("../User/User"), o = function () {
            function GameD_chaojiguoshangche_efine() { }
            return GameD_chaojiguoshangche_efine.saveGam_chaojiguoshangche_eDate = function () {
                var i = n.default.get_miniqiaoba_SaveData();
                console.log("保存数据", i), Laya.LocalStorage.setItem("Room-Escape-3d-mndmm6", i);
            }, GameD_chaojiguoshangche_efine.get_chaojiguoshangche_GameDate = function () {
                var i = Laya.LocalStorage.getItem("Room-Escape-3d-mndmm6");
                return i ? JSON.parse(i) : null;
            }, GameD_chaojiguoshangche_efine;
        }();
        t.GameD_chaojiguoshangche_efine = o;
    }, {
        "../User/User": 24
    }]
}, {}, [19]);