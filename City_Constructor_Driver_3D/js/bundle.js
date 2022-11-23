var __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function (e, t) {
        e.__proto__ = t;
    } || function (e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
    };
    return function (t, a) {
        function n() {
            this.constructor = t;
        }
        e(t, a), t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype,
            new n());
    };
}();

!function () {
    function e(t, a, n) {
        function i(r, s) {
            if (!a[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var d = new Error("Cannot find module '" + r + "'");
                    throw d.code = "MODULE_NOT_FOUND", d;
                }
                var c = a[r] = {
                    exports: {}
                };
                t[r][0].call(c.exports, function (e) {
                    return i(t[r][1][e] || e);
                }, c, c.exports, e, t, a, n);
            }
            return a[r].exports;
        }
        for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) i(n[r]);
        return i;
    }
    return e;
}()({
    1: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.SingleDatas = [];
            };
        }();
        a.default = n;
    }, {}],
    2: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.AreaDatas = [];
            };
        }();
        a.default = n;
    }, {}],
    3: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BuildData"), i = e("./BuildAreaData"), o = e("./BuildSingleData"), r = e("./BuildPosData"), s = function () {
            function e() { }
            return e.LoadData = function () {
                if (!(this.BuildDatas.length > 0)) for (var e = 0; e < 6; e++) {
                    var t = "SubPack/res/BuildData/B" + e.toString() + ".txt";
                    console.log(t);
                    var a = Laya.loader.getRes(t), s = new n.default();
                    a.split("=").forEach(function (e) {
                        if (e.length > 10) {
                            var t = new i.default();
                            e.split("@").forEach(function (e) {
                                if (e.length > 10) {
                                    var a = new o.default();
                                    e.split("#").forEach(function (e) {
                                        var t = e.split("&"), n = t[0].split(","), i = t[1].split(","), o = new r.default();
                                        o.Pos = new Laya.Vector3(-parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2])),
                                            o.Angle = new Laya.Vector4(-parseFloat(i[0]), parseFloat(i[1]), parseFloat(i[2]), -parseFloat(i[3])),
                                            a.BuildPoses.push(o);
                                    }), t.SingleDatas.push(a);
                                }
                            }), s.AreaDatas.push(t);
                        }
                    }), this.BuildDatas.push(s);
                }
            }, e.BuildDatas = [], e;
        }();
        a.default = s;
    }, {
        "./BuildAreaData": 1,
        "./BuildData": 2,
        "./BuildPosData": 9,
        "./BuildSingleData": 11
    }],
    4: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./BuildDataManager"), r = e("./BuildGameProgress"), s = e("./BuildWorld"), l = e("./BuildHouse"), d = e("./BuildPlayer"), c = e("./CarChoose"), u = e("../DanceBall/EffectManager"), h = e("../Tools/WxTool"), f = function () {
            function e() { }
            return e.Init = function () {
                this.m_IsGameLose = !1, this.m_IsGameStart = !1, this.m_IsGameWin = !1, this.m_World = null,
                    this.m_House = null, this.m_Player = null, this.m_ParkeBorder = null, o.default.LoadData(),
                    r.default.LoadProgress(), this.CreateWorld(), this.CreateHouse(), this.m_World.CreateGetStack(),
                    this.CreateParkeBorder(), this.CreatePlayer(), this.CreateBuidedHouse();
            }, e.GameWin = function () {
                this.m_IsGameWin = !0, i.default._instance.progressPower.visible = !1, h.default.vibrate(100),
                    r.default.Data.isGetCube ? r.default.Data.buildAreaIndex == o.default.BuildDatas[r.default.Data.houseTypeIndex].AreaDatas.length - 1 ? (i.default._instance.ShowCue("建造完成", 4),

                        Laya.SoundManager.playSound("Sound/胜利.mp3", 0), this.m_House.ShowEndAdd(), u.default.CreateEffect(i.default._instance.currentGameScene, "Effect_Win", new Laya.Vector3(this.m_Player.m_Root.transform.position.x, this.m_Player.m_Root.transform.position.y + .2, this.m_Player.m_Root.transform.position.z), 3),
                        Laya.timer.once(5e3, this, function () {
                            Laya.timer.once(1e3,this,()=>{
                                var di = new Laya.Image();
                                di.skin = "di.png";
                                di.anchorX = di.anchorY = 0.5;
                                di.centerX = 0;
                                di.centerY = -200;

                                var Logo = new Laya.Image();
                                Logo.skin = "chenggong.png";
                                Logo.anchorX = Logo.anchorY = 0.5;
                                Logo.centerX = 0;
                                Logo.centerY = 0;
                                Logo.scaleX = Logo.scaleY = 1.2;
                                di.addChild(Logo);
                                di.name = "di";
                                Laya.stage.addChild(di);

                                window.yad.visible = true;
                                window.scrollList.visible = true;
                            })
                            this.isStart = false
                            i.default._instance.GameWin();
                        })) : (i.default._instance.ShowCue("砖块不够了", 4), Laya.SoundManager.playSound("Sound/砖块不够.mp3", 0),
                            Laya.timer.once(2e3, this, function () {
                                Laya.timer.once(1e3,this,()=>{
                                    var di = new Laya.Image();
                                    di.skin = "di.png";
                                    di.anchorX = di.anchorY = 0.5;
                                    di.centerX = 0;
                                    di.centerY = -200;

                                    var Logo = new Laya.Image();
                                    Logo.skin = "banzhuan.png";
                                    Logo.anchorX = Logo.anchorY = 0.5;
                                    Logo.scaleX = Logo.scaleY = 1.2;
                                    Logo.centerX = 0;
                                    Logo.centerY = 0;
                                    di.addChild(Logo);
                                    di.name = "di";
                                    Laya.stage.addChild(di);

                                    window.yad.visible = true;
                                    window.scrollList.visible = true;
                                })
 
                                i.default._instance.GameWin();
                            })) : (Laya.SoundManager.playSound("Sound/搬砖成功.mp3", 0), i.default._instance.ShowCue("搬砖完成", 4),
                                Laya.timer.once(2e3, this, function () {
                                    Laya.timer.once(1e3,this,()=>{
                                        var di = new Laya.Image();
                                        di.skin = "di.png";
                                        di.anchorX = di.anchorY = 0.5;
                                        di.centerX = 0;
                                        di.centerY = -200;
    
                                        var Logo = new Laya.Image();
                                        Logo.skin = "banwanzhuan.png";
                                        Logo.anchorX = Logo.anchorY = 0.5;
                                        Logo.scaleX = Logo.scaleY = 1.2;
                                        Logo.centerX = 0;
                                        Logo.centerY = 0;
                                        di.addChild(Logo);
                                        di.name = "di";
                                        Laya.stage.addChild(di);
    
                                        window.yad.visible = true;
                                        window.scrollList.visible = true;
                                    })
                                    i.default._instance.GameWin();
                                })), r.default.LevelFinish();
            }, e.GameLose = function () {
                i.default._instance.progressPower.visible = !1, h.default.vibrate(100), this.m_IsGameLose = !0,
                    i.default._instance.ShowCue("撞车了", 4), Laya.timer.once(2e3, this, function () {
                        Laya.timer.once(1e3,this,()=>{
                            var di = new Laya.Image();
                            di.skin = "zcdi.png";
                            di.anchorX = di.anchorY = 0.5;
                            di.centerX = 0;
                            di.centerY = -200;

                            var Logo = new Laya.Image();
                            Logo.skin = "zc.png";
                            Logo.anchorX = Logo.anchorY = 0.5;
                            Logo.centerX = 0;
                            Logo.centerY = 0;
                            Logo.scaleX = Logo.scaleY = 1.2;
                            di.addChild(Logo);
                            di.name = "di";
                            Laya.stage.addChild(di);

                            window.yad.visible = true;
                            window.scrollList.visible = true;
                        })
                        this.isStart = false
                        i.default._instance.GameLose();
                    });
            }, e.CreateWorld = function () {
                var e = n.default.CloneModel("World", i.default._instance.currentGameScene);
                e.transform.position = new Laya.Vector3(0, 0, 0), this.m_World = e.addComponent(s.default),
                    this.m_World.Init();
            }, e.CreateBuidedHouse = function () {
                if (r.default.Data.builedHouse) for (var e = 0; e < r.default.Data.builedHouse.length; e++) {
                    var t = r.default.Data.builedHouse[e], a = n.default.CloneModelByParent("House", t.houseTypeIndex.toString(), i.default._instance.currentGameScene);
                    a.transform.position = this.m_World.m_BuildPoints[t.housePosIndex].transform.position,
                        a.transform.rotation = this.m_World.m_BuildPoints[t.housePosIndex].transform.rotation;
                    a.addComponent(l.default).Init(t.buildAreaIndex, o.default.BuildDatas[t.houseTypeIndex], !0, e),
                        this.m_World.m_BuildPoints[t.housePosIndex].active = !1;
                }
            }, e.CreateHouse = function () {
                var e = n.default.CloneModelByParent("House", r.default.Data.houseTypeIndex.toString(), i.default._instance.currentGameScene);
                e.transform.position = this.m_World.GetBuildPos().transform.position, e.transform.rotation = this.m_World.GetBuildPos().transform.rotation;
                var t = e.addComponent(l.default);
                t.Init(r.default.Data.buildAreaIndex, o.default.BuildDatas[r.default.Data.houseTypeIndex], !1),
                    this.m_House = t;
            }, e.CreatePlayer = function () {
                var e = n.default.CloneModelByParent("Player", "Player" + c.default.m_ChooseIndex.toString(), i.default._instance.currentGameScene), t = null;
                r.default.Data.isGetCube ? (t = this.m_World.m_GetStackPoint, i.default._instance.ShowCue("去建造吧", 4),
                    e.transform.rotation = new Laya.Quaternion(t.transform.rotation.x, t.transform.rotation.y, t.transform.rotation.z, t.transform.rotation.w),
                    e.transform.rotationEuler = new Laya.Vector3(e.transform.rotationEuler.x, e.transform.rotationEuler.y + 180, e.transform.rotationEuler.z)) : (0 == r.default.Data.buildAreaIndex ? (t = this.m_World.m_BeginPoint,
                        i.default._instance.ShowCue("去搬砖吧", 4)) : (t = this.m_World.m_ParkePoint, i.default._instance.ShowCue("去搬砖吧", 4)),
                        e.transform.rotation = t.transform.rotation), e.transform.position = t.transform.position,
                    this.m_Player = e.addComponent(d.default), this.m_Player.Init();
            }, e.CreateParkeBorder = function () {
                var e = n.default.CloneModel("ParkBorder", i.default._instance.currentGameScene);
                r.default.Data.isGetCube ? (e.transform.position = this.m_World.m_ParkePoint.transform.position,
                    e.transform.rotation = this.m_World.m_ParkePoint.transform.rotation) : (e.transform.position = this.m_World.m_GetStackPoint.transform.position,
                        e.transform.rotation = this.m_World.m_GetStackPoint.transform.rotation), this.m_ParkeBorder = e;
            }, e.GetTargetParkeBorder = function () {
                return this.m_ParkeBorder;
            }, e.HideParkeBorder = function () {
                this.m_ParkeBorder.active = !1;
            }, e.m_IsGameLose = !1, e.m_IsGameWin = !1, e.m_IsGameStart = !1, e.mouseEventAdded = !1,
                e.m_World = null, e.m_House = null, e.m_Player = null, e.m_ParkeBorder = null, e;
        }();
        a.default = f;
    }, {
        "../DanceBall/EffectManager": 17,
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "../Tools/WxTool": 33,
        "./BuildDataManager": 3,
        "./BuildGameProgress": 5,
        "./BuildHouse": 7,
        "./BuildPlayer": 8,
        "./BuildWorld": 14,
        "./CarChoose": 16
    }],
    5: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BuildDataManager"), i = e("./BuildProgressData"), o = e("../Tools/PlayerPrefsTool"), r = e("./BuildGame"), s = e("./BuildedHouseProgessData"), l = function () {
            function e() { }
            return e.LoadProgress = function () {
                var e = o.default.GetString("GameProgress");
                "" == e ? (this.Data = new i.default(), this.Data.houseTypeIndex = 0, this.Data.buildAreaIndex = 0,
                    this.Data.isGetCube = !0, this.Data.housePosIndex = 0, this.CreateHouseColor()) : this.Data = JSON.parse(e);
            }, e.SaveProgress = function () {
                var e = JSON.stringify(this.Data);
                Laya.LocalStorage.setItem("GameProgress", e);
            }, e.CreateHouseColor = function () {
                this.Data.housecolors = new Array();
                var e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                e.sort(function () {
                    return .5 - Math.random();
                });
                for (var t = 0, a = n.default.BuildDatas[this.Data.houseTypeIndex], i = 0; i < a.AreaDatas.length; i++) {
                    this.Data.housecolors.push([]);
                    for (var o = 0; o < a.AreaDatas[i].SingleDatas.length; o++) this.Data.housecolors[i].push(e[t]),
                        ++t == e.length && (t = 0);
                }
            }, e.GetColor = function (e, t) {
                return this.Data.housecolors[e][t];
            }, e.GetBuidedColor = function (e, t, a) {
                return this.Data.builedHouse[e].housecolors[t][a];
            }, e.LevelFinish = function () {
                this.Data.isGetCube ? (this.Data.buildAreaIndex == n.default.BuildDatas[this.Data.houseTypeIndex].AreaDatas.length - 1 ? (this.SaveBuildedHouse(),
                    this.Data.houseTypeIndex++, this.Data.houseTypeIndex == n.default.BuildDatas.length && (this.Data.houseTypeIndex = 0),
                    this.Data.housePosIndex++, this.Data.houseTypeIndex == r.default.m_World.m_BuildPoints.length && (this.Data.houseTypeIndex = 0),
                    this.Data.buildAreaIndex = 0, this.CreateHouseColor()) : this.Data.buildAreaIndex++,
                    this.Data.isGetCube = !1) : this.Data.isGetCube = !0, this.SaveProgress();
            }, e.SaveBuildedHouse = function () {
                var e = new s.default();
                e.houseTypeIndex = this.Data.houseTypeIndex, e.buildAreaIndex = this.Data.buildAreaIndex + 1,
                    e.housePosIndex = this.Data.housePosIndex, e.housecolors = this.Data.housecolors,
                    this.Data.builedHouse.length > 1 && this.Data.builedHouse.splice(0, 1), this.Data.builedHouse.push(e);
            }, e;
        }();
        a.default = l;
    }, {
        "../Tools/PlayerPrefsTool": 28,
        "./BuildDataManager": 3,
        "./BuildGame": 4,
        "./BuildProgressData": 10,
        "./BuildedHouseProgessData": 15
    }],
    6: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./BuildGame"), r = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_CubePoints = [], t.m_Cubes = [], t;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.m_Root = this.owner, this.m_CubePoints = this.m_Root._children, this.m_TargetHouse = o.default.m_House,
                    this.CreateSetCube();
            }, t.prototype.CreateSetCube = function () {
                this.m_CubePoints.reverse();
                for (var e = 0; e < this.m_CubePoints.length; e++) {
                    var t = n.default.CloneModelByParent("Cube", this.m_TargetHouse.GetIndexColor(e).toString(), i.default._instance.currentGameScene);
                    this.m_CubePoints[e].addChild(t), t.transform.position = this.m_CubePoints[e].transform.position,
                        t.transform.rotation = new Laya.Quaternion(this.m_CubePoints[e].transform.rotation.x, this.m_CubePoints[e].transform.rotation.y, this.m_CubePoints[e].transform.rotation.z, this.m_CubePoints[e].transform.rotation.w),
                        this.m_Cubes.push(t);
                }
                this.m_Cubes.reverse();
            }, t;
        }(Laya.Script3D);
        a.default = r;
    }, {
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "./BuildGame": 4
    }],
    7: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./BuildGameProgress"), r = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_AreaIndex = 0, t.m_SingleIndex = 0, t.m_CubeIndex = 0, t.m_IsBuilded = !1,
                    t.m_BuiledIndex = 0, t;
            }
            return __extends(t, e), t.prototype.Init = function (e, t, a, n) {
                this.m_Root = this.owner, this.m_EndAdd = this.owner.getChildByName("End"), this.m_EndAdd.active = !1,
                    this.m_AreaIndex = e, this.m_Data = t, this.m_Col = this.owner.getChildByName("Col"),
                    0 == e && (this.m_Col.active = !1), this.m_IsBuilded = a, this.m_IsBuilded && (this.m_BuiledIndex = n,
                        this.m_EndAdd.active = !0), this.CreateBuilded();
            }, t.prototype.CreateBuilded = function () {
                if (0 != this.m_AreaIndex) {
                    if (this.m_IsBuilded) for (e = 0; e < this.m_AreaIndex; e++) for (t = this.m_SingleIndex; t < this.m_Data.AreaDatas[e].SingleDatas.length; t++) for (a = this.m_CubeIndex; a < this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses.length; a++) {
                        r = n.default.CloneModelByParent("Cube", o.default.GetBuidedColor(this.m_BuiledIndex, e, t).toString(), i.default._instance.currentGameScene);
                        this.m_Root.addChild(r), r.transform.localPosition = this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Pos,
                            r.transform.localRotation = new Laya.Quaternion(this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.x, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.y, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.z, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.w);
                    } else for (var e = 0; e < this.m_AreaIndex; e++) for (var t = this.m_SingleIndex; t < this.m_Data.AreaDatas[e].SingleDatas.length; t++) for (var a = this.m_CubeIndex; a < this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses.length; a++) {
                        var r = n.default.CloneModelByParent("Cube", o.default.GetColor(e, t).toString(), i.default._instance.currentGameScene);
                        this.m_Root.addChild(r), r.transform.localPosition = this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Pos,
                            r.transform.localRotation = new Laya.Quaternion(this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.x, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.y, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.z, this.m_Data.AreaDatas[e].SingleDatas[t].BuildPoses[a].Angle.w);
                    }
                    Laya.StaticBatchManager.combine(this.m_Root);
                }
            }, t.prototype.GetIndexColor = function (e) {
                for (var t = this.m_Data.AreaDatas[this.m_AreaIndex], a = (t.SingleDatas[this.m_SingleIndex],
                    this.m_SingleIndex), n = this.m_CubeIndex + e + 1; n > t.SingleDatas[a].BuildPoses.length;) if (n -= t.SingleDatas[a].BuildPoses.length,
                        ++a == t.SingleDatas.length) return o.default.GetColor(this.m_AreaIndex, a - 1);
                return o.default.GetColor(this.m_AreaIndex, a);
            }, t.prototype.PopBuildPos = function () {
                for (var e = this.m_Data.AreaDatas[this.m_AreaIndex], t = (e.SingleDatas[this.m_SingleIndex],
                    []), a = this.m_SingleIndex; a < e.SingleDatas.length; a++) for (var n = this.m_CubeIndex; n < e.SingleDatas[a].BuildPoses.length && t.length < 70; n++) if (t.push(e.SingleDatas[a].BuildPoses[n]),
                        this.m_CubeIndex = n, this.m_SingleIndex = a, this.m_CubeIndex == e.SingleDatas[a].BuildPoses.length - 1) {
                        if (this.m_SingleIndex == e.SingleDatas.length - 1) return t;
                        this.m_CubeIndex = 0;
                    }
                return this.m_CubeIndex++, t;
            }, t.prototype.GetIsLastCubes = function () {
                var e = this.m_Data.AreaDatas[this.m_AreaIndex];
                return this.m_CubeIndex == e.SingleDatas[this.m_SingleIndex].BuildPoses.length - 1 && this.m_SingleIndex == e.SingleDatas.length - 1;
            }, t.prototype.ShowEndAdd = function () {
                this.m_EndAdd.transform.scale = new Laya.Vector3(0, this.m_EndAdd.transform.scale.y, this.m_EndAdd.transform.scale.z),
                    this.m_EndAdd.active = !0, Laya.timer.loop(1, this, function e() {
                        this && (this.m_EndAdd.transform.scale.x < 1 ? this.m_EndAdd.transform.scale = new Laya.Vector3(this.m_EndAdd.transform.scale.x + .015, this.m_EndAdd.transform.scale.y, this.m_EndAdd.transform.scale.z) : Laya.timer.clear(this, e));
                    });
            }, t;
        }(Laya.Script3D);
        a.default = r;
    }, {
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "./BuildGameProgress": 5
    }],
    8: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../GameScene"), i = e("../DanceBall/GameData"), o = e("./BuildUseStack"), r = e("../Tools/ModelManager"), s = e("./BuildGame"), l = e("./BuildGameProgress"), d = e("../DanceBall/EffectManager"), c = e("../Tools/WxTool"), u = e("../Tools/MathTool"), h = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_IsGetToPoint = !1, t.m_IsBuilding = !1, t.m_IsNearToPoint = !1, t.m_IsInputForward = !1,
                    t.m_IsInputHorizantol = 0, t.m_IsInputRotateGun = 0, t.m_IsInputBack = 0, t.m_currentForwardSpeed = 0,
                    t.m_Wheels = [], t.m_TargetFiledView = 60, t;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.m_Root = this.owner, this.m_Rig = this.m_Root.getComponent(Laya.Rigidbody3D),
                    this.m_CameraMoveFollow = this.m_Root.getChildByName("CameraMoveFollow"), this.m_CameraBuildFollow = this.m_Root.getChildByName("CameraBuildFollow"),
                    this.m_Wheels.push(this.m_Root.getChildByName("Wheel1")), this.m_Wheels.push(this.m_Root.getChildByName("Wheel2")),
                    this.m_Wheels.push(this.m_Root.getChildByName("Wheel3")), this.m_Wheels.push(this.m_Root.getChildByName("Wheel4")),
                    this.m_StackPoint = this.m_Root.getChildByName("StackPoint"), this.m_Arrow = this.m_Root.getChildByName("Arrow"),
                    n.default._instance.currentCamera.transform.position = this.m_CameraMoveFollow.transform.position,
                    this.m_Rig.friction = 0, this.m_Rig.mass = 10, this.m_Rig.rollingFriction = 0, this.m_Rig.restitution = 0,
                    this.m_Rig.linearDamping = 0, this.m_Rig.angularDamping = 0, this.m_Rig.angularFactor = new Laya.Vector3(0, 0, 0),
                    this.m_Rig.linearFactor = new Laya.Vector3(1, 0, 1), this.m_Rig.simulation.fixedTimeStep = .005;
                var e = r.default.CloneModel("CubeStack", n.default._instance.currentGameScene);
                this.m_StackPoint.addChild(e), e.transform.position = this.m_StackPoint.transform.position,
                    e.transform.rotation = this.m_StackPoint.transform.rotation, this.m_UseStack = e.addComponent(o.default),
                    this.m_UseStack.Init(), this.m_TargetFiledView = i.default.BuildFiledView[l.default.Data.houseTypeIndex];
            }, t.prototype.onUpdate = function () {
                this.Move(), this.CauculateToTarget();
            }, t.prototype.onLateUpdate = function () {
                this.CameraFollow(), this.m_Rig.linearVelocity = new Laya.Vector3(0, 0, 0), this.m_Rig.angularVelocity = new Laya.Vector3(0, 0, 0);
            }, t.prototype.Move = function () {
                if (!s.default.m_IsGameWin && !s.default.m_IsGameLose && !this.m_IsGetToPoint && (this.m_IsInputForward ? (this.m_currentForwardSpeed < i.default.Setting_CarForwardMaxSpeed && (this.m_currentForwardSpeed += i.default.Setting_CarAddForwardSpeed),
                    this.m_Root.transform.translate(new Laya.Vector3(0, 0, this.m_currentForwardSpeed)),
                    this.Rotate(!1)) : this.m_IsInputBack ? (this.m_currentForwardSpeed > -i.default.Setting_CarForwardMaxSpeed && (this.m_currentForwardSpeed -= i.default.Setting_CarAddForwardSpeed),
                        this.m_Root.transform.translate(new Laya.Vector3(0, 0, this.m_currentForwardSpeed)),
                        this.Rotate(!0)) : (this.m_currentForwardSpeed > 0 && (this.m_currentForwardSpeed -= i.default.Setting_CarAddForwardSpeed,
                            this.m_currentForwardSpeed <= 0 && (this.m_currentForwardSpeed = 0)), this.m_currentForwardSpeed < 0 && (this.m_currentForwardSpeed += i.default.Setting_CarAddForwardSpeed,
                                this.m_currentForwardSpeed >= 0 && (this.m_currentForwardSpeed = 0)), this.m_Root.transform.translate(new Laya.Vector3(0, 0, this.m_currentForwardSpeed))),
                    0 != this.m_currentForwardSpeed)) if (this.m_currentForwardSpeed > 0) for (e = 0; e < this.m_Wheels.length; e++) this.m_Wheels[e].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[e].transform.localRotationEuler.x + 5, this.m_Wheels[e].transform.localRotationEuler.y, this.m_Wheels[e].transform.localRotationEuler.z); else if (this.m_currentForwardSpeed < 0) for (var e = 0; e < this.m_Wheels.length; e++) this.m_Wheels[e].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[e].transform.localRotationEuler.x - 5, this.m_Wheels[e].transform.localRotationEuler.y, this.m_Wheels[e].transform.localRotationEuler.z);
            }, t.prototype.CameraFollow = function () {
                if (this.m_IsBuilding) {
                    i = new Laya.Vector3(0, 0, 0);
                    if (Math.abs(n.default._instance.currentCamera.fieldOfView - this.m_TargetFiledView) > .1) {
                        var e = new Laya.Vector3(0, 0, n.default._instance.currentCamera.fieldOfView), t = new Laya.Vector3(0, 0, this.m_TargetFiledView), a = new Laya.Vector3(0, 0, 0);
                        Laya.Vector3.lerp(e, t, .035, a), n.default._instance.currentCamera.fieldOfView = a.z;
                    }
                    Laya.Vector3.lerp(n.default._instance.currentCamera.transform.position, new Laya.Vector3(this.m_CameraBuildFollow.transform.position.x, this.m_CameraBuildFollow.transform.position.y, this.m_CameraBuildFollow.transform.position.z), .17, i),
                        n.default._instance.currentCamera.transform.position = new Laya.Vector3(i.x, i.y, i.z),
                        n.default._instance.currentCamera.transform.lookAt(new Laya.Vector3(s.default.m_World.GetBuildPos().transform.position.x, s.default.m_World.GetBuildPos().transform.position.y + .2, s.default.m_World.GetBuildPos().transform.position.z), new Laya.Vector3(0, 1, 0));
                } else {
                    var i = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.lerp(n.default._instance.currentCamera.transform.position, new Laya.Vector3(this.m_CameraMoveFollow.transform.position.x, this.m_CameraMoveFollow.transform.position.y, this.m_CameraMoveFollow.transform.position.z), .17, i),
                        n.default._instance.currentCamera.transform.position = i, n.default._instance.currentCamera.transform.lookAt(new Laya.Vector3(this.m_Root.transform.position.x, this.m_Root.transform.position.y + .15, this.m_Root.transform.position.z), new Laya.Vector3(0, 1, 0));
                }
            }, t.prototype.Rotate = function (e) {
                if (1 == this.m_IsInputHorizantol) {
                    t = -40;
                    e ? (t = -40, this.m_Root.transform.rotate(new Laya.Vector3(0, i.default.Setting_RotateSpeed, 0))) : this.m_Root.transform.rotate(new Laya.Vector3(0, -i.default.Setting_RotateSpeed, 0)),
                        this.m_Wheels[0].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, t, this.m_Wheels[0].transform.localRotationEuler.z),
                        this.m_Wheels[1].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, t, this.m_Wheels[0].transform.localRotationEuler.z);
                } else if (-1 == this.m_IsInputHorizantol) {
                    var t = 40;
                    e ? (t = 40, this.m_Root.transform.rotate(new Laya.Vector3(0, -i.default.Setting_RotateSpeed, 0))) : this.m_Root.transform.rotate(new Laya.Vector3(0, i.default.Setting_RotateSpeed, 0)),
                        this.m_Wheels[0].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, t, this.m_Wheels[0].transform.localRotationEuler.z),
                        this.m_Wheels[1].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, t, this.m_Wheels[0].transform.localRotationEuler.z);
                } else this.m_Rig.angularVelocity = new Laya.Vector3(0, 0, 0), this.m_Wheels[0].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, 0, this.m_Wheels[0].transform.localRotationEuler.z),
                    this.m_Wheels[1].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x, 0, this.m_Wheels[0].transform.localRotationEuler.z);
            }, t.prototype.CauculateToTarget = function () {
                if (!this.m_IsGetToPoint) {
                    var e = s.default.GetTargetParkeBorder();
                    this.m_Arrow.transform.lookAt(new Laya.Vector3(e.transform.position.x, this.m_Arrow.transform.position.y, e.transform.position.z), new Laya.Vector3(0, 1, 0)),
                        this.m_IsNearToPoint || Laya.Vector3.distance(e.transform.position, this.m_Root.transform.position) < .7 && (c.default.vibrate(60),
                            this.m_Arrow.active = !1, this.m_IsNearToPoint = !0, n.default._instance.ShowCue("停在区域内", 4));
                    var t = this.GetNotDirAng(e, 15);
                    Laya.Vector3.distance(e.transform.position, this.m_Root.transform.position) < .09 && t && (Laya.SoundManager.playSound("Sound/到达位置.mp3", 0),
                        l.default.Data.isGetCube ? (c.default.vibrate(60), this.m_IsBuilding = !0, this.m_UseStack.BuildHouse(s.default.m_House),
                            n.default._instance.ShowCue("点击屏幕建造", 99)) : (c.default.vibrate(60), this.m_UseStack.GetCube(s.default.m_World.m_GetStack),
                                n.default._instance.ShowCue("点击屏幕搬砖", 99)), s.default.HideParkeBorder(), this.m_IsGetToPoint = !0,
                        n.default._instance.ShowBuildUI(), n.default._instance.ShowPowerPorgressUI(this.m_UseStack.m_BuildSpeedTimer / i.default.BuildMaxAddSpeedTimer));
                }
            }, t.prototype.GetNotDirAng = function (e, t) {
                var a = u.default.GetForward(this.m_Root), n = u.default.GetForward(e), i = u.default.GetVecAngle(a, n);
                return i < t || i > 180 - t;
            }, t.prototype.SetInputForward = function (e) {
                this.m_IsInputForward = e;
            }, t.prototype.SetInputHorizontal = function (e) {
                this.m_IsInputHorizantol = e;
            }, t.prototype.SetInputBack = function (e) {
                this.m_IsInputBack = e;
            }, t.prototype.onCollisionEnter = function (e) {
                if (!s.default.m_IsGameWin && !s.default.m_IsGameLose) {
                    var t = null;
                    if (e._colliderA && -1 != e._colliderA.owner.name.indexOf("Player") && (t = e._colliderB),
                        e._colliderB && -1 != e._colliderB.owner.name.indexOf("Player") && (t = e._colliderA),
                        null != t && -1 != t.owner.name.indexOf("Building")) {
                        var a = e.contacts[0].positionOnA;
                        d.default.CreateEffect(n.default._instance.currentGameScene, "Effect_Hit", a, 1),
                            Laya.SoundManager.playSound("Sound/hit.mp3", 0), s.default.GameLose(), c.default.vibrate(80);
                    }
                }
            }, t;
        }(Laya.Script3D);
        a.default = h;
    }, {
        "../DanceBall/EffectManager": 17,
        "../DanceBall/GameData": 18,
        "../GameScene": 20,
        "../Tools/MathTool": 26,
        "../Tools/ModelManager": 27,
        "../Tools/WxTool": 33,
        "./BuildGame": 4,
        "./BuildGameProgress": 5,
        "./BuildUseStack": 13
    }],
    9: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.Pos = new Laya.Vector3(0, 0, 0), this.Angle = new Laya.Vector4(0, 0, 0, 0);
            };
        }();
        a.default = n;
    }, {}],
    10: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.isGetCube = !1, this.housePosIndex = 0, this.houseTypeIndex = 0, this.buildAreaIndex = 0,
                    this.housecolors = new Array(), this.builedHouse = [];
            };
        }();
        a.default = n;
    }, {}],
    11: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.BuildPoses = [];
            };
        }();
        a.default = n;
    }, {}],
    12: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../DanceBall/GameData"), i = function () {
            function e() { }
            return e.CubeMoveTo = function (e, t, a) {
                for (var i = [], o = [], r = 0; r < e.m_CubePoints.length; r++) o.push(1 * r), i.push(.1);
                var s = 0;
                Laya.timer.loop(1, this, function r() {
                    if (e.m_Speed > 0) {
                        s = 0;
                        for (var l = 0; l < e.m_CubePoints.length; l++) {
                            if (o[l] < 0) {
                                var d = new Laya.Vector3(0, 0, 0), c = new Laya.Vector4(0, 0, 0, 0);
                                Laya.Vector4.lerp(new Laya.Vector4(t.m_Cubes[l].transform.rotation.x, t.m_Cubes[l].transform.rotation.y, t.m_Cubes[l].transform.rotation.z, t.m_Cubes[l].transform.rotation.w), e.m_CubePoints[l].transform.rotation, 10 * e.m_Speed, c),
                                    Laya.Vector3.lerp(t.m_Cubes[l].transform.position, e.m_CubePoints[l].transform.position, 15 * e.m_Speed, d),
                                    t.m_Cubes[l].transform.position = new Laya.Vector3(d.x, d.y + i[l], d.z), t.m_Cubes[l].transform.rotation = new Laya.Quaternion(c.x, c.y, c.z, c.w),
                                    i[l] > 0 ? i[l] -= .01 : i[l] = 0;
                            } else o[l] -= e.m_Speed / n.default.BuildMaxSpeed * .3;
                            s += Laya.Vector3.distance(t.m_Cubes[l].transform.position, e.m_CubePoints[l].transform.position);
                        }
                        s < .001 && (a.call(this, t.m_Cubes), Laya.timer.clear(this, r));
                    }
                });
            }, e.CubeMoveToPos = function (e, t, a, i) {
                for (var o = [], r = [], s = 0; s < a.length; s++) r.push(s * n.default.BuildCubeDelayTime),
                    o.push(.1);
                for (var l = 0, s = 0; s < e.m_Cubes.length; s++) t.m_Root.addChild(e.m_Cubes[s]),
                    e.m_Cubes[s].transform.position = e.m_CubePoints[s].transform.position, e.m_Cubes[s].transform.rotation = e.m_CubePoints[s].transform.rotation;
                var d = [];
                e.m_Cubes.forEach(function (e) {
                    d.push(e);
                });
                var c = !1, u = !1;
                Laya.timer.loop(1, this, function t() {
                    if (e.m_Speed > 0) {
                        l = 0;
                        for (var s = 0; s < a.length; s++) {
                            if (r[s] < 0) {
                                var h = new Laya.Vector3(0, 0, 0), f = new Laya.Vector4(0, 0, 0, 0);
                                Laya.Vector4.lerp(new Laya.Vector4(d[s].transform.localRotation.x, d[s].transform.localRotation.y, d[s].transform.localRotation.z, d[s].transform.localRotation.w), a[s].Angle, 25 * e.m_Speed, f),
                                    Laya.Vector3.lerp(d[s].transform.localPosition, a[s].Pos, 10 * e.m_Speed, h), d[s].transform.localPosition = new Laya.Vector3(h.x, h.y + o[s], h.z),
                                    d[s].transform.localRotation = new Laya.Quaternion(f.x, f.y, f.z, f.w), o[s] > 0 ? o[s] -= .01 : o[s] = 0;
                            } else r[s] -= e.m_Speed / n.default.BuildMaxSpeed * .3;
                            l += Laya.Vector3.distance(d[s].transform.localPosition, a[s].Pos);
                        }
                        c || l < n.default.BuildCubeGetDistance && (i.call(this), c = !0), u || l < .001 && (Laya.timer.clear(this, t),
                            u = !0);
                    }
                }, null, !1);
            }, e.BuildHouse = function (t, a, n) {
                var i = !0;
                this.currentUseStack = t, Laya.timer.loop(1, this, function o() {
                    if (!t.m_IsPushingCube && i) {
                        var r = a.PopBuildPos();
                        if (r.length <= 1) return console.log("建完"), n.call(this), void Laya.timer.clear(this, o);
                        i = !1, e.CubeMoveToPos(t, a, r, function () {
                            a.GetIsLastCubes() || e.currentUseStack.PushFullCube(!1), i = !0;
                        });
                    }
                });
            }, e.currentUseStack = null, e;
        }();
        a.default = i;
    }, {
        "../DanceBall/GameData": 18
    }],
    13: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./BuildToolFunc"), r = e("./BuildGameProgress"), s = e("./BuildGame"), l = e("../DanceBall/GameData"), d = e("../Tools/WxTool"), c = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_CubePoints = [], t.m_Cubes = [], t.m_Speed = 0, t.m_State = "", t.m_IsPushingCube = !1,
                    t.m_TargetHuose = null, t.m_BuildSpeedTimer = 0, t.m_ClickOffTimer = 0, t;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.m_Root = this.owner, this.m_CubePoints = this.m_Root._children, this.m_TargetHuose = s.default.m_House,
                    r.default.Data.isGetCube && this.PushFullCube(!0);
            }, t.prototype.onUpdate = function () {
                this.m_BuildSpeedTimer > 0 ? (this.m_BuildSpeedTimer -= Laya.timer.delta / 1e3,
                    i.default._instance.ShowPowerPorgressUI(this.m_BuildSpeedTimer / l.default.BuildMaxAddSpeedTimer),
                    this.m_Speed = l.default.BuildMaxSpeed) : this.m_Speed = l.default.BuildMaxSpeed * l.default.BuildCubeNoInputSpeedPercent,
                    s.default.m_IsGameWin && (this.m_Speed = l.default.BuildMaxSpeed), this.m_ClickOffTimer > 0 && (this.m_ClickOffTimer -= Laya.timer.delta / 1e3);
            }, t.prototype.PushFullCube = function (e) {
                this.m_IsPushingCube = !0, this.m_Cubes = [];
                for (var t = 0; t < this.m_CubePoints.length; t++) {
                    var a = n.default.CloneModelByParent("Cube", this.m_TargetHuose.GetIndexColor(t).toString(), i.default._instance.currentGameScene);
                    this.m_CubePoints[t].addChild(a), a.transform.position = this.m_CubePoints[t].transform.position,
                        a.transform.rotation = new Laya.Quaternion(this.m_CubePoints[t].transform.rotation.x, this.m_CubePoints[t].transform.rotation.y, this.m_CubePoints[t].transform.rotation.z, this.m_CubePoints[t].transform.rotation.w),
                        e || (a.active = !1), this.m_Cubes.push(a);
                }
                if (e) this.m_IsPushingCube = !1; else {
                    var o = this.m_CubePoints.length - 1;
                    Laya.timer.loop(l.default.BuildCubePushTime, this, function e() {
                        if (o - 8 <= 0) {
                            for (t = o; t >= 0; t--) this.m_Cubes[t].active = !0;
                            o = 0, this.m_IsPushingCube = !1, Laya.timer.clear(this, e);
                        } else {
                            for (var t = o; t >= o - 8; t--) this.m_Cubes[t].active = !0;
                            o -= 8;
                        }
                    });
                }
            }, t.prototype.GetCube = function (e) {
                this.m_State = "Get", this.m_CurrentGetStack = e, this.ReverseCubePoints();
                o.default.CubeMoveTo(this, e, function () {
                    s.default.GameWin();
                });
            }, t.prototype.BuildHouse = function (e) {
                o.default.BuildHouse(this, e, function () {
                    s.default.GameWin();
                });
            }, t.prototype.ReverseCubePoints = function () {
                this.m_CubePoints.reverse();
            }, t.prototype.AddBuildSpeedTimer = function () {
                this.m_ClickOffTimer > 0 || (Laya.SoundManager.playSound("Sound/加速.mp3", 0), d.default.vibrate(40),
                    this.m_ClickOffTimer = .05, this.m_BuildSpeedTimer + l.default.BuildAddSpeedTimer < l.default.BuildMaxAddSpeedTimer ? this.m_BuildSpeedTimer += l.default.BuildAddSpeedTimer : this.m_BuildSpeedTimer = l.default.BuildMaxAddSpeedTimer);
            }, t;
        }(Laya.Script3D);
        a.default = c;
    }, {
        "../DanceBall/GameData": 18,
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "../Tools/WxTool": 33,
        "./BuildGame": 4,
        "./BuildGameProgress": 5,
        "./BuildToolFunc": 12
    }],
    14: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BuildGetStack"), i = e("../Tools/ModelManager"), o = e("../GameScene"), r = e("./BuildGameProgress"), s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_BuildPosIndex = 0, t;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.m_Root = this.owner, this.m_BeginPoint = this.m_Root.getChildByName("BeginPoint"),
                    this.m_BuildPoints = this.m_Root.getChildByName("BuildPoint")._children, this.m_GetStackPoint = this.m_Root.getChildByName("GetStackPoint"),
                    this.m_BuildPosIndex = r.default.Data.housePosIndex, this.m_ParkePoint = this.m_BuildPoints[this.m_BuildPosIndex].getChildByName("ParkPoint"),
                    this.m_BuildPoints[this.m_BuildPosIndex].active = !1, Laya.StaticBatchManager.combine(this.m_Root);
            }, t.prototype.GetBuildPos = function () {
                return this.m_BuildPoints[this.m_BuildPosIndex];
            }, t.prototype.CreateGetStack = function () {
                if (!r.default.Data.isGetCube) {
                    var e = i.default.CloneModel("CubeStack", o.default._instance.currentGameScene), t = this.m_GetStackPoint.getChildByName("CubeStackPoint").transform.position, a = this.m_GetStackPoint.getChildByName("CubeStackPoint").transform.rotation;
                    e.transform.position = t, e.transform.rotation = a, this.m_GetStack = e.addComponent(n.default),
                        this.m_GetStack.Init();
                }
            }, t;
        }(Laya.Script3D);
        a.default = s;
    }, {
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "./BuildGameProgress": 5,
        "./BuildGetStack": 6
    }],
    15: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.housePosIndex = 0, this.houseTypeIndex = 0, this.buildAreaIndex = 0, this.housecolors = new Array();
            };
        }();
        a.default = n;
    }, {}],
    16: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("../DanceBall/GameData"), r = e("../Tools/PlayerPrefsTool"), s = e("./BuildGame"), l = e("../WxTool/WxADTool"), d = e("../Tools/WxTool"), c = function () {
            function e() { }
            return e.Show = function () {
                this.CreateChoose(), this.m_Cars = [], this.m_Choose.getChildByName("View").active = !1,
                    i.default._instance.currentCamera.transform.position = this.m_Choose.getChildByName("View").transform.position,
                    i.default._instance.currentCamera.transform.rotationEuler = this.m_Choose.getChildByName("View").transform.rotationEuler,
                    this.m_Cars.push(this.m_Choose.getChildByName("Player0")), this.m_Cars.push(this.m_Choose.getChildByName("Player1")),
                    this.m_Cars.push(this.m_Choose.getChildByName("Player2"));
                for (var t = 0; t < this.m_Cars.length; t++) t != this.m_ChooseIndex && (this.m_Cars[t].active = !1);
                Laya.timer.clearAll(this), Laya.timer.loop(1, this, function () {
                    e.Rotate();
                }), this.UpdateCurrentCar(), this.CreateBeginChoose();
            }, e.ChooseFinish = function () {
                this.m_Choose.active = !1, s.default.Init();
            }, e.Rotate = function () { }, e.CreateChoose = function () {
                var e = n.default.CloneModel("Choose", i.default._instance.currentGameScene);
                this.m_Choose = e;
            }, e.LastCar = function () {
                this.m_ChooseIndex--, this.m_ChooseIndex < 0 && (this.m_ChooseIndex = this.m_Cars.length - 1);
                for (var e = 0; e < this.m_Cars.length; e++) e != this.m_ChooseIndex ? this.m_Cars[e].active = !1 : this.m_Cars[e].active = !0;
                this.UpdateCurrentCar();
            }, e.NextCar = function () {
                this.m_ChooseIndex++, this.m_ChooseIndex > this.m_Cars.length - 1 && (this.m_ChooseIndex = 0);
                for (var e = 0; e < this.m_Cars.length; e++) e != this.m_ChooseIndex ? this.m_Cars[e].active = !1 : this.m_Cars[e].active = !0;
                this.UpdateCurrentCar();
            }, e.UpdateCurrentCar = function () {
                r.default.GetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), 0) == o.default.Data_ADUnlockTime[this.m_ChooseIndex] ? i.default._instance.UpdateCarChoose(!0, (50 * this.m_ChooseIndex).toString()) : i.default._instance.UpdateCarChoose(!1, (50 * this.m_ChooseIndex).toString());
            }, e.UnlockCar = function () {
         

                    r.default.SetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), r.default.GetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), 0) + 1),
                    this.UpdateCurrentCar(), this.UpdateADIcon();
           
                
            }, e.CreateBeginChoose = function () {
                i.default._instance.btnLastCar.visible = !1, i.default._instance.btnNextCar.visible = !1,
                    i.default._instance.btnADUnlock.scale(0, 0), this.m_Choose.transform.position = new Laya.Vector3(this.m_Choose.transform.position.x, this.m_Choose.transform.position.y, this.m_Choose.transform.position.z - .2);
                for (t = 0; t < this.m_Cars.length; t++) this.m_Cars[t].transform.rotationEuler = new Laya.Vector3(this.m_Cars[t].transform.rotationEuler.x, -90, this.m_Cars[t].transform.rotationEuler.z);
                for (var e = [], t = 0; t < this.m_Cars.length; t++) {
                    var a = {
                        iconclip: {
                            skin: "Choose/Choose" + t.toString() + ".png",
                            clipX: 1,
                            clipY: 1,
                            autoPlay: !1,
                            index: 0
                        },
                        adicon: {}
                    };
                    e.push(a);
                }
                i.default._instance.listBeginChoose.array = e, i.default._instance.listBeginChoose.refresh(),
                    i.default._instance.listBeginChoose.vScrollBarSkin = "", i.default._instance.listBeginChoose.scrollBar.value = .5,
                    i.default._instance.listBeginChoose.scrollBar.slider.max += 100, i.default._instance.listBeginChoose.selectEnable = !0,
                    i.default._instance.listBeginChoose.selectHandler = new Laya.Handler(this, this.OnMatSelect),
                    this.UpdateADIcon();
            }, e.OnMatSelect = function (t) {
                this.m_ChooseIndex = t;
                for (var a = 0; a < this.m_Cars.length; a++) a != this.m_ChooseIndex ? this.m_Cars[a].active = !1 : this.m_Cars[a].active = !0;
                Laya.SoundManager.playSound("Sound/qhcl.mp3", 1), 
                this.UpdateCurrentCar(), 
                r.default.GetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), 0) != o.default.Data_ADUnlockTime[this.m_ChooseIndex] &&  
                
                platform.getInstance().showReward(
                    ()=>{
                        // for (var a = 0; a < this.m_Cars.length; a++) a != this.m_ChooseIndex ? this.m_Cars[a].active = !1 : this.m_Cars[a].active = !0;
                        (e.UnlockCar(), d.default.ShowToast("解锁成功！")); 
                    },
                    ()=>{
                        this.m_ChooseIndex = 0;
                        for (var a = 0; a < this.m_Cars.length; a++) a != this.m_ChooseIndex ? this.m_Cars[a].active = !1 : this.m_Cars[a].active = !0;
       
                        this.UpdateCurrentCar() 
                        for (var a = 0; a < this.m_Cars.length; a++) a != 0 ? this.m_Cars[a].active = !1 : this.m_Cars[a].active = !0;
                        i.default._instance.listBeginChoose._selectedIndex = 4;
                        
                    }
                )
                
            }, e.UpdateADIcon = function () {
                for (var e = 0; e < this.m_Cars.length; e++) r.default.GetInt("CarUnlockTime" + e.toString(), 0) == o.default.Data_ADUnlockTime[e] && (i.default._instance.listBeginChoose.array[e].adicon.visible = !1);
                i.default._instance.listBeginChoose.refresh();
            }, e.GetPhoto = function () {
                this.m_Choose._children.forEach(function (e) {
                    -1 == e.name.indexOf("Player") && (e.active = !1);
                });
            }, e.m_Cars = [], e.m_ChooseIndex = 0, e;
        }();
        a.default = c;
    }, {
        "../DanceBall/GameData": 18,
        "../GameScene": 20,
        "../Tools/ModelManager": 27,
        "../Tools/PlayerPrefsTool": 28,
        "../Tools/WxTool": 33,
        "../WxTool/WxADTool": 35,
        "./BuildGame": 4
    }],
    17: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ResPool"), i = e("../Main"), o = function () {
            function e() { }
            return e.EffectInit = function (e) {
                this.ResPath = i.default.ModelRes;
            }, e.CreateEffect = function (t, a, i, o, r) {
                this.isInit || (this.isInit = !0, this.Parent = Laya.loader.getRes(this.ResPath));
                var s = n.default.GetObject(this.ResPath, a);
                {
                    if (null != s) return s.transform.position = i, void 0 != r && (s.transform.rotation = r),
                        t.addChild(s), Laya.timer.once(1e3 * o, this, e.RemoveEffect, [s], !1), s;
                    console.log("特效不存在");
                }
            }, e.CreateEffectAndGet = function (t, a, i, o) {
                this.isInit || (this.isInit = !0, this.Parent = Laya.loader.getRes(this.ResPath));
                var r = n.default.GetObject(this.ResPath, a);
                {
                    if (null != r) return r.transform.position = i, t.addChild(r), Laya.timer.once(1e3 * o, this, e.RemoveEffect, [r], !1),
                        r;
                    console.log("特效不存在");
                }
            }, e.RemoveEffect = function (e) {
                e.destroy();
            }, e.isInit = !1, e.EffectNamePool = [], e.EffectPool = [], e;
        }();
        a.default = o;
    }, {
        "../Main": 21,
        "../Tools/ResPool": 30
    }],
    18: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.LoadLevelData = function () { }, e.BuildMaxSpeed = .033, e.BuildAddSpeed = .00105,
                e.BuildAddSpeedTimer = .5, e.BuildMaxAddSpeedTimer = 1.5, e.BuildCubeDelayTime = .55,
                e.BuildCubePushTime = 10, e.BuildCubeGetDistance = 7, e.BuildCubeNoInputSpeedPercent = .2,
                e.BuildFiledView = [50, 50, 70, 60, 83, 65], e.BannerID = "adunit-256cd12093e542d6",
                e.RewardID = "adunit-05152eebfce66959", e.IntersitialID = "adunit-90e80b533d1b6038",
                e.appkey = "c5ae0616a355366bbd2430f7d3f33c44", e.SoundVol = .15, e.Setting_CarForwardMaxSpeed = .01,
                e.Setting_CarAddForwardSpeed = 2e-4, e.Setting_RotateSpeed = .015, e.Setting_PushSpeed = .08,
                e.Setting_PushTimeMax = 4, e.Setting_MinNPCDis = 10, e.Setting_MaxNPCDis = 30, e.Setting_MinNPCDoubleDis = 3,
                e.Setting_MaxNPCDoubleDis = 5, e.Setting_LowerSpeed = .3, e.Data_CarName = ["雷文顿", "亨尼西", "特斯塔罗萨", "阿文泰德", "风神", "牛头", "巨石", "黑魔鬼", "大师"],
                e.Data_CarSpeed = [.65, .7, .85, .9, .9, .9, 1, 1, 1], e.Data_CarTurn = [.85, .85, .85, .85, .85, .85, .85, .85, .85],
                e.Data_CarStop = [.65, .7, .7, .85, .8, .8, .9, .9, 1], e.Data_ADUnlockTime = [0, 1, 1, 1, 1, 1, 1, 1, 1],
                e;
        }();
        a.default = n;
    }, {}],
    19: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.init = function () {
                Laya.ClassUtils.regClass;
            }, e.width = 1280, e.height = 720, e.scaleMode = "exactfit", e.screenMode = "none",
                e.alignV = "middle", e.alignH = "center", e.startScene = "Load.scene", e.sceneRoot = "",
                e.debug = !1, e.stat = !1, e.physicsDebug = !1, e.exportSceneToJson = !0, e;
        }();
        a.default = n, n.init();
    }, {}],
    20: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./ui/layaMaxUI"), i = e("./Tools/ModelManager"), o = e("./Tools/PlayerPrefsTool"), r = e("./Tools/WxTool"), s = e("./Tools/SceneManager"), l = e("./Tools/RandTool"), d = e("./Tools/aldSDK"), c = e("./DanceBall/EffectManager"), u = e("./DanceBall/GameData"), h = e("./WxTool/WxADTool"), f = e("./Tools/BananaSDK"), p = e("./CarBasic/CarChoose"), m = e("./Tools/Common"), g = e("./CarBasic/BuildGame"), _ = e("./CarBasic/BuildToolFunc"), y = function (e) {
            function t() {
                var a = e.call(this) || this;
                return a.isBackLive = !1, a.currentRewardMessage = "", a.isSelectSongCold = !1,
                    a.isJumpmattotop = !1, a.isBackUpmattotop = !1, a.isBackDownmattotop = !1, a.currentScaleCueScaleTime = 0,
                    a.currentScaleCueDire = !1, t.randToTouch = l.default.RandNumber(.6, .85), (t._instance = a).HideMat(),
                    t.isSecondRound ? a.Init() : t.isSecondRound = !0, a.InitUI(), a.btnForward.alpha = 1,
                    a;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.currentGameScene = new Laya.Scene3D(), this.currentCamera = i.default.CloneModel("Camera", this.currentGameScene),
                    this.currentGameScene.ambientColor = new Laya.Vector3(.51, .56, .59), this.currentCamera.clearColor = new Laya.Vector4(.64, .85, .93, 0),
                    this.currentCamera.nearPlane = .01, Laya.stage.addChild(this.currentGameScene),
                    Laya.stage.setChildIndex(this.currentGameScene, 0);
                i.default.CloneModel("Light", this.currentGameScene);
                this.currentGameScene.enableFog = !0, this.currentGameScene.fogColor = new Laya.Vector3(.64, .85, .93),
                    this.currentGameScene.fogStart = 2, this.currentGameScene.fogRange = 20, c.default.EffectInit(this.currentGameScene),
                    p.default.Show(), Laya.timer.clearAll(_.default), Laya.timer.clearAll(g.default.m_House);
            }, t.prototype.InitUI = function () {
                this.SoundArray = [0, 0, 0, 0]
                this.isplay = true;
                this.isStart = false;


                if(Laya.Browser.onPC)
                {

                    this.btnForward.visible = this.btnBack.visible = this.btnLeft.visible = this.btnRight.visible = false;
                    
                }
                else
                {

                    this.btnForward.visible = this.btnBack.visible = this.btnLeft.visible = this.btnRight.visible = true;
                }



                this.btnForward.on(Laya.Event.MOUSE_DOWN, this, t._instance.OnAddForceIn), this.btnForward.on(Laya.Event.MOUSE_UP, this, t._instance.OnAddForceOut),
                    this.btnBack.on(Laya.Event.MOUSE_DOWN, this, t._instance.OnBackForceIn), this.btnBack.on(Laya.Event.MOUSE_UP, this, t._instance.OnBackForceOut),
                    this.btnLeft.on(Laya.Event.MOUSE_DOWN, this, t._instance.OnRotateForceLeftIn), this.btnLeft.on(Laya.Event.MOUSE_UP, this, t._instance.OnRotateForceOut),
                    this.btnRight.on(Laya.Event.MOUSE_DOWN, this, t._instance.OnRotateForceRightIn),
                    this.btnRight.on(Laya.Event.MOUSE_UP, this, t._instance.OnRotateForceOut), this.btnLastCar.on(Laya.Event.CLICK, this, t._instance.OnChooseLastClick),
                    this.btnNextCar.on(Laya.Event.CLICK, this, t._instance.OnChooseNextClick), this.btnCoinUnlock.on(Laya.Event.CLICK, this, t._instance.OnCoinUnlockClick),
                    this.btnADUnlock.on(Laya.Event.CLICK, this, t._instance.OnADUnlockClick), this.btnStartGame.on(Laya.Event.CLICK, this, t._instance.OnStartGameClick),
                    this.btnPause.on(Laya.Event.CLICK, this, t._instance.OnPauseClick), this.btnPassEnd.on(Laya.Event.CLICK, this, t._instance.OnPassEndClick),
                    this.btnADFiveGetCoin.on(Laya.Event.CLICK, this, t._instance.OnADFiveGetCoinClick),
                    this.btnADPassLevel.on(Laya.Event.CLICK, this, t._instance.OnADPassLevelClick),
                    this.btnCloseBackMat1.on(Laya.Event.CLICK, this, this.OnCloseBackMat1Click), this.btnCloseBackMat2.on(Laya.Event.CLICK, this, this.OnCloseBackMat2Click),
                    this.btnBackMat2RandOne.on(Laya.Event.CLICK, this, this.OnRandOneMatClick), this.btnMoreGame1.on(Laya.Event.CLICK, this, this.OnOpenBackMat2Click),
                    this.btnMoreGame2.on(Laya.Event.CLICK, this, this.OnOpenBackMat2Click), this.btnMoreGame3.on(Laya.Event.CLICK, this, this.OnOpenBackMat2Click),
                    this.btnExit1.on(Laya.Event.CLICK, this, this.OnOpenBackMat1Click), this.btnExit2.on(Laya.Event.CLICK, this, this.OnOpenBackMat1Click),
                    this.btnExit3.on(Laya.Event.CLICK, this, this.OnOpenBackMat1Click), this.btnToTouch.on(Laya.Event.CLICK, this, this.OnToTouchClick),
                    this.btnPush.on(Laya.Event.CLICK, this, this.OnPushClick), this.btnAddBuildSpeed.on(Laya.Event.CLICK, this, this.OnAddBuildSpeedClick)
                    var isSound = Laya.LocalStorage.getItem("isSound")

                    if(isSound)
                    {
                        if(isSound == "true")
                        {
                            this.btnSound.skin = "SoundOn.png";
                        }
                        else
                        {
                            this.btnSound.skin = "SoundOff.png";
                        }
                    }
                    this.btnSound.on(Laya.Event.CLICK, this, this.OnsoundClick)
                    t.AlredyKeyEvent || (t.AlredyKeyEvent = !0,
                        
                        
                        
                        
                        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown),
                        Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp)
                        
                        
                        
                        
                        
                        
                        
                        ), this.ResetStartUI(), this.listBackMat1.hScrollBarSkin = "",
                    this.listBackMat1.scrollBar.value = .5, this.listBackMat2.hScrollBarSkin = "", this.listBackMat2.scrollBar.value = .5,


                    f.default.GetMat(this.listBackMat1, "remen_game", !0),
                    f.default.GetMat(this.listBackMat2, "remen_game", !0), Laya.timer.loop(25, this, function () {
                        t._instance.listStartMat1.length <= 0 && (f.default.GetMat(this.listStartMat1, "remen_game"),
                            f.default.GetMat(this.listStartMat2, "remen_game"), f.default.GetMat(this.listEndMat1, "remen_game", !0),
                            f.default.GetMat(this.listEndMat2, "remen_game", !0)), t._instance.listBackMat1.length <= 0 && (f.default.GetMat(this.listBackMat1, "remen_game", !0),
                                f.default.GetMat(this.listBackMat2, "remen_game", !0));
                    }, null, !0), Laya.timer.loop(2e3, this, function () {
                        f.default.GetRandMat(this.listStartMat1, "remen_game"),
                            f.default.GetRandMat(this.listStartMat2, "remen_game");
                    }), Laya.timer.loop(1, this, function () {
                        t._instance.panelToTouch.visible && t._instance.progressToTouch.value > 0 && (t._instance.progressToTouch.value -= .01,
                            this.imgToTouchProgress.alpha = 1 - this.progressToTouch.value), t._instance.AutoSlideList(t._instance.listBackMat1),
                            t._instance.AutoSlideList(t._instance.listBackMat2), t._instance.AutoSlideList(t._instance.listEndMat1),
                            t._instance.AutoSlideList(t._instance.listEndMat2);
                    }), f.default.ExposureMat("gamelist"), f.default.isOpenBombBanner && (this.btnMoreGame1.visible = !0,
                        this.btnMoreGame2.visible = !0, this.btnMoreGame3.visible = !0);
                //         console.log(g.default.m_IsGameWin)
                //         console.log(g.default.m_IsGameLose)
                // const loop = function () {
                //     if (this.isStart == true) {
                //         if (this.isStay == true) {
                //             Laya.SoundManager.playSound("Sound/car-lock.mp3", 0)
                //             this.isStay = false;
                //         }
                //     }
     
                // }
                // Laya.timer.loop(1, this, loop)
                

            },
            t.prototype.OnsoundClick = function (e) {
                var isSound = Laya.LocalStorage.getItem("isSound")

                if(isSound)
                {
                    if(isSound == "true")
                    {
                        this.btnSound.skin = "SoundOff.png";
                        Laya.SoundManager.stopMusic();
                        isSound = false;
                        Laya.LocalStorage.setItem("isSound",isSound)
                    }
                    else
                    {
                        this.btnSound.skin = "SoundOn.png";
                        Laya.SoundManager.playMusic("Sound/BG.mp3");
                       
                        isSound = true;
                        Laya.LocalStorage.setItem("isSound",isSound)
                    }
                }
            },
            
                t.prototype.onKeyDown = function (e) {
                    // console.log("this.isStartt",this.isStartt)
                    // console.log("this.isStay",this.isStay)
                    // if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39) {
                    //     if ( this.isStartt == true) {
                    //         this.isStartt = false;
                    //         Laya.SoundManager.playSound("Sound/start.mp3", 1)
                    //     }
                    // }
            
                    if(this.isStart == true)
                    {
                        38 == e.keyCode||87 == e.keyCode ? (g.default.m_Player.SetInputForward(!0), this.SoundArray[0] = 1) :
                        40 == e.keyCode||83 == e.keyCode ? (g.default.m_Player.SetInputBack(!0), this.SoundArray[1] = 1) :
                            37 == e.keyCode||65==e.keyCode ? (g.default.m_Player.SetInputHorizontal(-1), this.SoundArray[2] = 1) :
                                39 == e.keyCode||68==e.keyCode ? (g.default.m_Player.SetInputHorizontal(1), this.SoundArray[3] = 1):
                                e.keyCode
                        if (e.keyCode == 38 || e.keyCode == 40 ||e.keyCode == 87 || e.keyCode == 83)
                        {
                            if(this.isplay == true)
                            {
                                if (this.SoundArray[0] ==1||this.SoundArray[1] ==1) {
                                    Laya.SoundManager.playSound("Sound/start.mp3", true)
                                    this.isplay = false;
                                }
                            }
             
                        }
          
                        // if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39) {
                        //     for (let i = 0; i < this.SoundArray.length; i++) {
                        //         if (this.SoundArray[i] != 0) {
    
                        //             Laya.SoundManager.stopSound("Sound/car-lock.mp3")
                        //         }
                        //     }
                        // }
                    }

                },


                t.prototype.onKeyUp = function (e) {
                    if(this.isStart == true)
                    {
                        38 == e.keyCode||87 == e.keyCode ? (g.default.m_Player.SetInputForward(!1), this.SoundArray[0] = 0) :
                        40 == e.keyCode||83 == e.keyCode ? (g.default.m_Player.SetInputBack(!1), this.SoundArray[1] = 0) :
                            37 == e.keyCode||65 == e.keyCode ? (g.default.m_Player.SetInputHorizontal(-2), this.SoundArray[2] = 0) :
                                39 == e.keyCode||68 == e.keyCode ? (g.default.m_Player.SetInputHorizontal(2), this.SoundArray[3] = 0) :
                                    e.keyCode;
                                    if (e.keyCode == 38 || e.keyCode == 40 ||e.keyCode == 87 || e.keyCode == 83)
                                    {
                                        if (this.SoundArray[0] == this.SoundArray[1] ) {
                                            Laya.SoundManager.stopSound("Sound/start.mp3")
                                            // Laya.SoundManager.playSound("Sound/car-lock.mp3", 1)
                                            this.isplay = true
                                        }
                                    }
  
                    // if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39) {                    if (this.SoundArray[0] == this.SoundArray[1] == this.SoundArray[2] == this.SoundArray[3]) {
                    //     // this.isStay = true;
                    //     this.isStartt = true;
                    //     Laya.SoundManager.playSound("Sound/car-lock.mp3", 0)
                    //     Laya.SoundManager.stopSound("Sound/start.mp3")
                    // }}
                                }
                },









                t.prototype.OnPushClick = function () {
                    Laya.SoundManager.playSound("Sound/push.mp3",0);
                }, t.prototype.OnAddForceIn = function () {
                    g.default.m_Player.SetInputForward(!0);
                }, t.prototype.OnAddForceOut = function () {
                    g.default.m_Player.SetInputForward(!1);
                }, t.prototype.OnRotateForceRightIn = function () {
                    g.default.m_Player.SetInputHorizontal(1);
                }, t.prototype.OnRotateForceLeftIn = function () {
                    g.default.m_Player.SetInputHorizontal(-1);
                }, t.prototype.OnRotateForceOut = function () {
                    g.default.m_Player.SetInputHorizontal(0);
                }, t.prototype.OnBackForceIn = function () {
                    g.default.m_Player.SetInputBack(!0);
                }, t.prototype.OnBackForceOut = function () {
                    g.default.m_Player.SetInputBack(!1);
                }, t.prototype.OnAddBuildSpeedClick = function () {
                    g.default.m_IsGameWin || g.default.m_IsGameLose || g.default.m_Player && g.default.m_Player.m_UseStack.AddBuildSpeedTimer();
                }, t.prototype.OnChooseLastClick = function () {
                    Laya.SoundManager.playSound("Sound/qhcl.mp3", 0), p.default.LastCar();
                }, t.prototype.OnChooseNextClick = function () {
                    Laya.SoundManager.playSound("Sound/qhcl.mp3", 0), p.default.NextCar();
                }, t.prototype.OnChoosePlayClick = function () {
                    p.default.ChooseFinish();
                }, t.prototype.OnCoinUnlockClick = function () {
                    o.default.GetInt("Coin", 0) >= 50 * p.default.m_ChooseIndex && (o.default.SetInt("Coin", o.default.GetInt("Coin", 0) - 50 * p.default.m_ChooseIndex),
                        p.default.UnlockCar(), this.ResetStartUI());
                }, t.prototype.OnADUnlockClick = function () {
                    Laya.SoundManager.playSound("Sound/qhcl.mp3", 0), Laya.Browser.onMiniGame ? (t._instance.currentRewardMessage = "UnlockCar",
                        h.default.ShowRewarded()) : (p.default.UnlockCar(), r.default.ShowToast("解锁成功！"));
                }, t.prototype.OnStartGameClick = function () {
                    platform.getInstance().showInterstitial(()=>{
                        if(o.default.GetInt("Level") == 0)
                        {
                            if(Laya.Browser.onPC)
                            {
                                platform.getInstance().prompt("Arrow keys to move");
                            }
                           
                        }
    
                        this.isStart = true;
                        window.box_adTwo.visible = false;
                        window.yad.visible = false;
                        m.default.OnStartGameClick();
                    })
       

                }, t.prototype.OnToTouchClick = function () {
                    this.progressToTouch.value < .9 && (this.progressToTouch.value += .2, this.progressToTouch.value > t.randToTouch && 0 == t.isToTouch && (t.isToTouch = !0,
                        h.default.BombBannerSplit(this.btnToTouch, 2), Laya.timer.once(2e3, this, function () {
                            t._instance.panelToTouch.visible = !1, t._instance.StartGame();
                        })));
                }, t.prototype.OnPassEndClick = function () {
                    platform.getInstance().showInterstitial(()=>{
                        console.log("aa")
                        h.default.SwitchBanner(), s.default.ExitScene(this), s.default.LoadScene(t);
                        window.scrollList.visible = false;
                        window.box_adTwo.visible = true;
                        Laya.stage.getChildByName("di").removeSelf()
                    })
                   
                }, t.prototype.OnPauseClick = function () {
                    platform.getInstance().showInterstitial(()=>{
                        window.box_adTwo.visible = true;
                        Laya.timer.clearAll(_.default), Laya.timer.clearAll(g.default.m_House), g.default.m_IsGameLose = !0,
                            s.default.ExitScene(this), s.default.LoadScene(t);
                    })
         
                }, t.prototype.OnRandOneMatClick = function () {
                    var e = l.default.RandNumberINT(0, this.listBackMat1.array.length);
                    f.default.OnMatSelect(this.listBackMat1, e);
                }, t.prototype.OnADFiveGetCoinClick = function () { }, t.prototype.OnADPassLevelClick = function () {
                    Laya.Browser.onMiniGame ? (t._instance.currentRewardMessage = "PassLevel", h.default.ShowRewarded()) : (o.default.SetInt("Level", o.default.GetInt("Level") + 1),
                        t._instance.OnPassEndClick(), r.default.ShowToast("跳过关卡成功！"));
                }, t.prototype.OnOpenBackMat1Click = function () {
                    f.default.isOpenExitMode && (1 == this.panelStart.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("右上角返回按钮点击", "1", "1"),
                        1 == this.panelEnd.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("右上角返回按钮点击", "1", "1"),
                        Laya.Browser.onMiniGame && (h.default.HideBanerDondes(), f.default.ExposureMat("gamelist_back"),
                            t._instance.panelBackMat1.visible = !0));
                }, t.prototype.OnOpenBackMat2Click = function () {
                    f.default.isOpenExitMode && (1 == this.panelStart.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("更多游戏按钮点击", "1", "1"),
                        1 == this.panelEnd.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("更多游戏按钮点击", "1", "1"),
                        Laya.Browser.onMiniGame && (h.default.HideBanerDondes(), f.default.ExposureMat("gamelist_back_two"),
                            t._instance.panelBackMat2.visible = !0));
                }, t.prototype.OnCloseBackMat1Click = function () {
                    t._instance.panelBackMat1.visible = !1;
                }, t.prototype.OnCloseBackMat2Click = function () {
                    m.default.OnCloseBackMat2Click();
                }, t.prototype.ResetStartUI = function () {
                    this.txtStartCoin.text = o.default.GetInt("Coin", 0).toString(), this.txtStartLeve.text = (o.default.GetInt("Level", 0) + 1).toString();
                }, t.prototype.ResetGamingUI = function () {
                    this.txtGamingCoin.text = o.default.GetInt("Coin", 0).toString();
                }, t.prototype.ShowBuildUI = function () {
                    this.btnLeft.visible = !1, this.btnRight.visible = !1, this.btnForward.visible = !1,
                        this.btnBack.visible = !1, this.btnAddBuildSpeed.visible = !0;
                }, t.prototype.ShowPowerPorgressUI = function (e) {
                    g.default.m_IsGameWin || g.default.m_IsGameLose || (0 == this.progressPower.visible && (this.progressPower.visible = !0),
                        this.progressPower.value = e);
                }, t.prototype.ShowCue = function (e, t) {
                    Laya.timer.clear(this, this.ScaleCueLogic), this.imgShowCueText._children.forEach(function (e) {
                        e.visible = !1;
                    }), this.imgShowCueText.visible = !0;
                    var a = this.imgShowCueText.getChildByName(e);
                    a.scale(1, 1), a.visible = !0, this.currentScaleCueScaleTime = t, this.currentScaleCueDire = !1,
                        this.currentScaleCueText = a, Laya.timer.loop(1, this, this.ScaleCueLogic);
                }, t.prototype.ScaleCueLogic = function () {
                    this.currentScaleCueText && (this.currentScaleCueScaleTime > 0 ? (99 != this.currentScaleCueScaleTime && (this.currentScaleCueScaleTime -= Laya.timer.delta / 1e3),
                        this.currentScaleCueDire ? this.currentScaleCueText.scaleX < 1.1 ? (this.currentScaleCueText.scaleX += .0025,
                            this.currentScaleCueText.scaleY += .0025) : this.currentScaleCueDire = !1 : this.currentScaleCueText.scaleX > 1 ? (this.currentScaleCueText.scaleX -= .0025,
                                this.currentScaleCueText.scaleY -= .0025) : this.currentScaleCueDire = !0) : (this.currentScaleCueText.visible = !1,
                                    this.imgShowCueText.visible = !1, Laya.timer.clear(this, this.ScaleCueLogic)));
                }, t.prototype.StartGame = function () {
                    d.default.AldRecord("正式开始游戏", "关卡", o.default.GetInt("Level").toString()), h.default.HideBanner(),
                        p.default.ChooseFinish(), this.ResetGamingUI(), this.panelStart.visible = !1, this.panelGaming.visible = !0;
                }, t.prototype.UpdateCarChoose = function (e, t) {
                    e ? (this.btnADUnlock.visible = !1, this.btnCoinUnlock.visible = !1, this.txtCoinUnlock.text = t + "金币",
                        this.btnStartGame.visible = !0) : (this.btnADUnlock.visible = !0, this.btnCoinUnlock.visible = !0,
                            this.txtCoinUnlock.text = t + "金币", this.btnStartGame.visible = !1), this.labelProCarName.text = u.default.Data_CarName[p.default.m_ChooseIndex],
                        this.progressProSpeed.value = u.default.Data_CarSpeed[p.default.m_ChooseIndex],
                        this.progressProTurn.value = u.default.Data_CarTurn[p.default.m_ChooseIndex], this.progressProStop.value = u.default.Data_CarStop[p.default.m_ChooseIndex],
                        this.labelADUnockTime.text = "解锁 " + o.default.GetInt("CarUnlockTime" + p.default.m_ChooseIndex.toString(), 0) + "/" + u.default.Data_ADUnlockTime[p.default.m_ChooseIndex];
                }, t.prototype.UpdatePushButton = function (e) {
                    this.clipPush.clipHeight = 142 * e, this.clipPush.clipHeight < 0 && (this.clipPush.clipHeight = 1);
                }, t.prototype.UpdateDashSpeed = function (e) { }, t.prototype.GameLose = function () {
                    f.default.ExposureMat("gamelist_over"), o.default.GetInt("Level") < 7 && d.default.AldRecord("失败", "关卡", o.default.GetInt("Level").toString()),
                        this.panelGaming.visible = !1, this.btnADPassLevel.visible = !0, Laya.timer.once(1e3, this, function () {
                            this.panelEnd.visible = !0, this.OnOpenBackMat2Click(), this.OnOpenBackMat1Click();
                        });
                }, t.prototype.GameWin = function () {
                    f.default.ExposureMat("gamelist_over"), o.default.GetInt("Level") < 7 && d.default.AldRecord("胜利", "关卡", o.default.GetInt("Level").toString()),
                        this.panelGaming.visible = !1, this.btnADFiveGetCoin.visible = !0, Laya.timer.once(1e3, this, function () {
                            this.panelEnd.visible = !0, o.default.SetInt("Level", o.default.GetInt("Level") + 1),
                                this.OnOpenBackMat2Click(), this.OnOpenBackMat1Click();
                        });
                }, t.prototype.HideMat = function () {
                    m.default.HideMat();
                }, t.prototype.AutoSlideList = function (e) {
                    e && e.array && e.array.length > 0 && 1 == e.visible && ("top" != e.name ? (e.scrollBar.value += 2,
                        e.scrollBar.value >= e.scrollBar.slider.max - 10 && (e.name = "top")) : (e.scrollBar.value -= 2,
                            e.scrollBar.value <= .5 && (e.name = "down")));
                }, t.prototype.SwitchListIndex = function (e) {
                    if (e && e.array && e.array.length > 0) {
                        var t = l.default.RandNumberINT(0, e.array.length), a = e.array[0];
                        e.array[0] = e.array[t], e.array[t] = a, e.refresh();
                    }
                }, t.prototype.OnWxRewardedADFinshed = function () {
                    d.default.AldRecord("广告成功", "类型", t._instance.currentRewardMessage), -1 != t._instance.currentRewardMessage.indexOf("UnlockCar") ? (p.default.UnlockCar(),
                        r.default.ShowToast("解锁成功！")) : -1 != t._instance.currentRewardMessage.indexOf("PassLevel") && (o.default.SetInt("Level", o.default.GetInt("Level") + 1),
                            t._instance.OnPassEndClick(), r.default.ShowToast("跳过关卡成功！"));
                }, t.prototype.OnWxRewardedADFailed = function () {
                    t._instance.currentRewardMessage = "", r.default.ShowToast("请看完广告！");
                }, t.prototype.OnMatClickRecord = function () {
                    1 == this.panelStart.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("首页导出位—总点击数", "1", "1"),
                        1 == this.panelEnd.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("结算导出位—总点击数", "1", "1"),
                        1 != this.panelBackMat1.visible && 1 != this.panelBackMat2.visible || d.default.AldRecord("全屏导出位—总点击数", "1", "1");
                }, t.prototype.OnMatJumpRecoid = function () {
                    1 == this.panelStart.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("首页导出位—总成功跳转数", "1", "1"),
                        1 == this.panelEnd.visible && 0 == this.panelBackMat1.visible && 0 == this.panelBackMat2.visible && d.default.AldRecord("结算导出位—总成功跳转数", "1", "1"),
                        1 != this.panelBackMat1.visible && 1 != this.panelBackMat2.visible || d.default.AldRecord("全屏导出位—总成功跳转数", "1", "1");
                }, t.AlredyKeyEvent = !1, t.isFirst = !0, t.isToTouch = !1, t.isSheildSlectSongIndex = -1,
                t.isSecondRound = !1, t.randToTouch = 0, t.isTotcRewarded = !1, t;
        }(n.ui.GameUI);
        a.default = y;
    }, {
        "./CarBasic/BuildGame": 4,
        "./CarBasic/BuildToolFunc": 12,
        "./CarBasic/CarChoose": 16,
        "./DanceBall/EffectManager": 17,
        "./DanceBall/GameData": 18,
        "./Tools/BananaSDK": 22,
        "./Tools/Common": 24,
        "./Tools/ModelManager": 27,
        "./Tools/PlayerPrefsTool": 28,
        "./Tools/RandTool": 29,
        "./Tools/SceneManager": 31,
        "./Tools/WxTool": 33,
        "./Tools/aldSDK": 34,
        "./WxTool/WxADTool": 35,
        "./ui/layaMaxUI": 37
    }],
    21: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./GameConfig"), i = e("./Tools/PlayerPrefsTool"), o = e("./Tools/SceneManager"), r = e("./Tools/GlobalProperty"), s = e("./Tools/WxTool"), l = e("./Tools/SoundTool"), d = e("./Tools/BitMapFntTool"), c = e("./GameScene"), u = e("./Tools/aldSDK"), h = e("./DanceBall/GameData"), f = e("./Tools/BananaSDK"), p = function () {
            function e() {
                window.Laya3D ? Laya3D.init(n.default.width, n.default.height) : Laya.init(n.default.width, n.default.height, Laya.WebGL),
                    Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                    Laya.URL.exportSceneToJson = n.default.exportSceneToJson, Laya.stage.screenMode = "none",
                    Laya.stage.scaleMode = "exactfit",
                    Laya.stage.alignV = "middle", Laya.stage.alignH = "center"


             
                e.LoadGameVersion();
            }
            return e.LoadGameVersion = function () {
                Laya.loader.load(["GameVersion.json"], Laya.Handler.create(this, function () {
                    var t = Laya.loader.getRes("GameVersion.json");
                    e.GameVersion = t.GameVersion, console.log("------------------------------游戏版本 " + e.GameVersion + " ------------------------------"),
                        s.default.InitTool(), d.default.LoadFnt(), l.default.Init(), f.default.Init(), u.default.Init(),
                        Laya.Browser.onMiniGame ? (e.LoadUI(), s.default.wx.loadSubpackage({
                            name: "SubPack",
                            success: function (t) {
                                console.log("分包加载成功"), e.LoadData();
                            },
                            fail: function (e) {
                                console.log(e);
                            }
                        })) : (e.LoadUI(), e.LoadData());
                }));
            }, e.LoadUI = function () {

                d.default.LoadFnt();
                Laya.loader.load(["atlas/MainUI.atlas"], Laya.Handler.create(this, this.UILoaded));
            }, e.UILoaded = function () {
                f.default.Loaded(), console.log("UI Loaded!"), h.default.LoadLevelData(), e.isFirstTimeGameLogic(),
                     o.default.LoadScene(c.default),
                     c.default._instance.visible = false;
                    c.default._instance.panelLoading.visible = !0, Laya.timer.loop(1, this, function () {
                        c.default._instance && c.default._instance.imgWaitModel && (c.default._instance.imgWaitModel.rotation += 1.5,c.default._instance.imgWaitModel.scaleX = -0.8);
                    });
            
            }, e.LoadData = function () {
                Laya.loader.load(["SubPack/res/BuildData/B0.txt", "SubPack/res/BuildData/B1.txt", "SubPack/res/BuildData/B2.txt", "SubPack/res/BuildData/B3.txt", "SubPack/res/BuildData/B4.txt", "SubPack/res/BuildData/B5.txt"], Laya.Handler.create(this, this.LoadModel));
            }, e.LoadModel = function () {

                Laya.SoundManager.musicVolume = .4
                    // Laya.Browser.onMiniGame && Laya.Browser.window.wx.onShow(function() {

                        
                // });
                var t = [e.ModelRes = e.ModelRes];
                Laya.loader.create(t, Laya.Handler.create(this, this.OnModelLoaded), Laya.Handler.create(this, null, null, !1));
            }, e.OnModelLoaded = function () {
                platform.getInstance().cargamesstartup("City-Constructor-Driver-3d", () => {
                    // 起始页
                    c.default._instance.visible = true;
                    var isSound = Laya.LocalStorage.getItem("isSound");
                    if(!isSound)
                    {
                        isSound = true;
                        Laya.LocalStorage.setItem("isSound",isSound);
                        Laya.SoundManager.playMusic("Sound/BG.mp3");
                    }
                    else
                    {
                        if(isSound == "true")
                        {
                            Laya.SoundManager.playMusic("Sound/BG.mp3");
                        }
                    }
                    Laya.stage.addChild(window.box_adTwo);
                    window.box_adTwo.setSpaceX(230);
                    window.box_adTwo.bottom = 250;
                    window.box_adTwo.visible = false;
                    window.box_adTwo.getChildByName("img_ad0").scaleX = window.box_adTwo.getChildByName("img_ad0").scaleY = 0.8; 
                    window.box_adTwo.getChildByName("img_ad0").x = -595;
                    window.box_adTwo.getChildByName("img_ad0").y = 60;
                    window.box_adTwo.getChildByName("img_ad1").scaleX = window.box_adTwo.getChildByName("img_ad1").scaleY = 0.8; 
                    window.box_adTwo.getChildByName("img_ad1").x = -185;
                    window.box_adTwo.getChildByName("img_ad1").y = 60;
                    window.yad.scaleX = 0.3;
                    window.yad.scaleY = 0.3;
                    window.yad.right = 10;
                
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    Laya.stage.addChild(window.scrollList);
                    window.scrollList.scale(1, 1);
                    window.scrollList.bottom = 0;
                    window.scrollList.getChildByName("img_ListBg").alpha = 0.5;
                    window.scrollList.getChildByName("img_ListBg").width = Laya.stage.width;
                    window.scrollList.width = Laya.stage.width;
                    window.scrollList.visible = false;
                  
                    
                    Laya.timer.once(4000,this,()=>{
                        
                        c.default._instance.panelLoading.visible = !1, c.default._instance.Init();

                     
                        window.box_adTwo.visible = true;
                    })
                })

             
            }, e.isFirstTimeGameLogic = function () {
                0 == i.default.GetInt(r.PlayerPrefsType.FirstTimeGame) && i.default.SetInt(r.PlayerPrefsType.FirstTimeGame, 1);
            }, e.isModelLoaded = !1, e.GameVersion = "1.0.0", e.ModelRes = "SubPack/res/LayaScene_Res/Conventional/Res.ls",
                e.loadsecond = 0, e;
        }();
        a.default = p, new p();
    }, {
        "./DanceBall/GameData": 18,
        "./GameConfig": 19,
        "./GameScene": 20,
        "./Tools/BananaSDK": 22,
        "./Tools/BitMapFntTool": 23,
        "./Tools/GlobalProperty": 25,
        "./Tools/PlayerPrefsTool": 28,
        "./Tools/SceneManager": 31,
        "./Tools/SoundTool": 32,
        "./Tools/WxTool": 33,
        "./Tools/aldSDK": 34
    }],
    22: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../GameScene"), i = e("../Tools/WxTool"), o = e("../Tools/RandTool"), r = function () {
            function e() { }
            return e.Init = function () {
                this.isOpenRreshMoreBannaer = !1, this.ismp = !1, this.openGuideThree = !0, this.isOpenExitMode = !0,
                    this.isOpenBombBanner = !1, this.KDCount = 3, e.GetData(), console.log("99 初始化");
            }, e.Loaded = function () { }, e.ExposureMat = function (e) { }, e.ClickMat = function (e) {
                n.default._instance.OnMatClickRecord();
            }, e.NavMat = function (e) {
                n.default._instance.OnMatJumpRecoid();
            }, e.GetData = function () {
                if (Laya.Browser.onMiniGame) try {
                    Laya.Browser.window.JJGameConfigs().then(function (t) {
                        console.log(t.data), e.ReciveConfig(t.data);
                    }), Laya.Browser.window.JJGameAds().then(function (t) {
                        console.log(t.data), e.ReciveMat(t.data);
                    }), Laya.Browser.window.JJGameShares().then(function (t) {
                        console.log(t.data), e.ReciveShare(t.data);
                    }), Laya.timer.loop(1e3, this, function () {
                        e.isConfigInited || Laya.Browser.window.JJGameConfigs().then(function (t) {
                            console.log(t.data), e.ReciveConfig(t.data);
                        }), e.isInited || Laya.Browser.window.JJGameAds().then(function (t) {
                            console.log(t.data), e.ReciveMat(t.data);
                        });
                    });
                } catch (e) {
                    console.log(e);
                }
            }, e.ReciveShare = function (e) {
                try {
                    i.default.wx.onShareAppMessage(function () {
                        return {
                            title: e.data[0].share_content,
                            imageUrl: e.data[0].share_img
                        };
                    });
                } catch (e) { }
            }, e.ReciveConfig = function (t) {
                var a = this;
                if (!e.isConfigInited) try {
                    this.sence = [], t.front_wuchu_scene.split("|").forEach(function (e) {
                        a.sence.push(parseInt(e));
                    }), 1 == t.is_allow_area && -1 != this.sence.indexOf(1 * i.default.wx.getLaunchOptionsSync().scene) && (this.isOpenBombBanner = !0),
                        e.Configs = t.configs, e.KDCount = e.GetConfigSetting("front_pass_gate"), e.isOpenExitMode = e.GetConfigSetting("front_all_export_switch"),
                        e.RefreshBannerValue = e.GetConfigSetting("front_banner_refresh"), e.BannerRfreshTimer = e.GetConfigSetting("front_banner_change_time"),
                        0 == e.isConfigInited && n.default._instance && n.default._instance.HideMat(), e.isConfigInited = !0;
                } catch (e) { }
            }, e.GetConfigSetting = function (t) {
                for (var a in e.Configs) if (a == t) return console.log("获取后台配置 " + t + " " + e.Configs[a].config_val),
                    "front_ad_scene_switch" == t ? !e.Configs[a].config_val || e.IsInSence() : e.Configs[a].config_val;
                return 0;
            }, e.IsInSence = function () {
                return !(this.sence.length <= 0) && -1 != this.sence.indexOf(1 * i.default.wx.getLaunchOptionsSync().scene);
            }, e.ReciveMat = function (t) {
                if (!this.isInited) try {
                    e.bananaMats.push({
                        name: "remen_game",
                        mat: []
                    }), t.forEach(function (t) {
                        e.ReturnMatObjByName("remen_game").mat.push({
                            title: t.originality.copywriting,
                            iconorigin: t.originality.material,
                            iconclip: {
                                skin: t.originality.material,
                                clipX: 1,
                                clipY: 1,
                                autoPlay: !1,
                                index: 0,
                                interval: 200
                            },
                            appid: t.channel_game_appid,
                            path: t.path,
                            extra: "",
                            icontype: "",
                            iconlist: "",
                            iconindex: 0,
                            id: t.originality.id
                        });
                    }), e.isexpoMat.push({
                        name: "remen_game",
                        ex: !1
                    }), this.isInited = !0;
                } catch (e) { }
            }, e.processHandler = function (e) {
                console.log(e);
            }, e.errorHandler = function (e) {
                console.log(e);
            }, e.completeHandler = function (e) {
                e = JSON.parse(e), console.log("-----------------"), console.log(e), e.key;
            }, e.ReturnMatObjByName = function (e) {
                for (var t = 0; t < this.bananaMats.length; t++) if (this.bananaMats[t].name == e) return this.bananaMats[t];
            }, e.GetMat = function (t, a, n) {
                if (Laya.Browser.onMiniGame) try {
                    var i = e.ReturnMatObjByName(a);
                    if (!i) return;
                    if (i.mat.length <= 0) return;
                    var r = [];
                    i.mat.forEach(function (e) {
                        e.rand = o.default.RandNumberINT(70, 160) + "万人在玩", r.push(e);
                    }), t.array = r;
                    var s = [];
                    t.array.forEach(function (e) {
                        s.push(e);
                    }), t.array = s, t.refresh(), t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.OnMatSelect, [t]),
                        n && t.scrollBar.slider && Laya.timer.once(1e3, this, function () {
                            t.scrollBar.slider.max += 200;
                        });
                } catch (e) {
                    console.log(e);
                }
            }, e.GetRandMat = function (t, a, n) {
                if (Laya.Browser.onMiniGame) try {
                    var i = e.ReturnMatObjByName(a);
                    if (!i) return;
                    if (i.mat.length <= 0) return;
                    var r = [];
                    i.mat.forEach(function (e) {
                        e.rand = o.default.RandNumberINT(70, 160) + "万人在玩", r.push(e);
                    }), t.array = r;
                    var s = [];
                    t.array.forEach(function (e) {
                        s.push(e);
                    }), s.sort(function () {
                        return Math.random() - Math.random();
                    }), t.array = s, t.refresh(), t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.OnMatSelect, [t]),
                        n && t.scrollBar.slider && Laya.timer.once(1e3, this, function () {
                            t.scrollBar.slider.max += 200;
                        });
                } catch (e) {
                    console.log(e);
                }
            }, e.RandMat = function () {
                if (Laya.Browser.onMiniGame) try {
                    this.bananaMats.forEach(function (e) {
                        var t = e.mat;
                        if (!(t.length <= 0)) {
                            var a = [];
                            t.forEach(function (e) {
                                a.push(e);
                            }), a.sort(function () {
                                return Math.random() - Math.random();
                            }), t = a;
                        }
                    });
                } catch (e) { }
            }, e.OnMatSelect = function (t, a) {
                try {
                    var n = t.array[a];
                    e.ClickMat(n.id), i.default.NavigateOtherGame(n.appid, n.path, n.title, n.iconorigin, n.id),
                        t.selectedIndex = -1;
                } catch (e) { }
                this.OnMatrixSelectRecord();
            }, e.OnMatrixSelectRecord = function () {
                Laya.Browser.onMiniGame;
            }, e.isInited = !1, e.isConfigInited = !1, e.isOpenBombBanner = !1, e.isOpenFirstMat = !0,
                e.isOpenSecondMat = !0, e.isOpenExitMode = !1, e.bananaMats = [], e.isexpoMat = [],
                e.isOpenRreshMoreBannaer = !0, e.ismp = !1, e.openGuideThree = !0, e.KDCount = 2,
                e.RefreshBannerValue = -1, e.LevelToTouchCount = 0, e.LevelEndTouchCount = 0, e.GameTimeCount = 0,
                e.sence = [], e.BannerRfreshTimer = 999999, e;
        }();
        a.default = r;
    }, {
        "../GameScene": 20,
        "../Tools/RandTool": 29,
        "../Tools/WxTool": 33
    }],
    23: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.LoadFnt = function () {
                for (var e = 0; e < this.fntRes.length; e++) {
                    var t = new Laya.BitmapFont();
                    this.bitMapFnts.push(t), t.loadFont(this.fntRes[e], new Laya.Handler(this, this.OnLoaded, [e]));
                }
            }, e.OnLoaded = function (e) {
                Laya.Text.registerBitmapFont(this.fntName[e], this.bitMapFnts[e]), this.count++;
            }, e.fntRes = [], e.fntName = ["getscore", "score"],
                e.bitMapFnts = new Array(), e.count = 0, e;
        }();
        a.default = n;
    }, {}],
    24: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BananaSDK"), i = e("../WxTool/WxADTool"), o = e("../GameScene"), r = e("./PlayerPrefsTool"), s = e("./aldSDK"), l = e("./WxTool"), d = function () {
            function e() { }
            return e.HideMat = function () {
                if (console.log("Common : HideMat"), !n.default.Configs) return console.log("Common：正在初始化"),
                    o.default._instance.listStartMat1.visible = !1, o.default._instance.listStartMat2.visible = !1,
                    void (o.default._instance.btnMoreGame1.visible = !1);
                o.default._instance.listStartMat1.visible = !0, o.default._instance.listStartMat2.visible = !0,
                    o.default._instance.btnMoreGame1.visible = !0, console.log("Common：初始化完成"), this.CreateTimeAndGameCountLabel(),
                    this.CheckIsInGameAPPID(), n.default.isOpenExitMode ? (o.default._instance.listBackMat1.visible = !0,
                        o.default._instance.listBackMat2.visible = !0,

                        o.default._instance.listStartMat1.visible = !0,
                        o.default._instance.listStartMat2.visible = !0, o.default._instance.btnMoreGame1.visible = !0,
                        o.default._instance.btnMoreGame2.visible = !0, o.default._instance.btnMoreGame3.visible = !0,
                        n.default.GameTimeCount >= n.default.GetConfigSetting("front_game_number_official") - 1 && (o.default._instance.btnExit1.visible = !0,
                            o.default._instance.btnExit2.visible = !0, o.default._instance.btnExit3.visible = !0),
                        n.default.GetConfigSetting("front_ad_scene_switch") ? n.default.GameTimeCount < n.default.GetConfigSetting("front_homepage_ad_gate") && Laya.timer.once(10, o.default._instance, function () {
                            o.default._instance.listStartMat1.visible = !1, o.default._instance.listStartMat2.visible = !1,
                                o.default._instance.btnMoreGame1.visible = !1, o.default._instance.btnExit1.visible = !1;
                        }) : Laya.timer.once(10, o.default._instance, function () {
                            o.default._instance.listStartMat1.visible = !1, o.default._instance.listStartMat2.visible = !1,
                                o.default._instance.btnMoreGame1.visible = !1, o.default._instance.btnExit1.visible = !1;
                        }), n.default.isOpenBombBanner ? n.default.GetConfigSetting("front_ad_scene_switch") && n.default.GetConfigSetting("front_homepage_ad_switch") && (o.default._instance.OnOpenBackMat2Click(),
                            o.default._instance.OnOpenBackMat1Click()) : Laya.timer.once(10, o.default._instance, function () {
                                o.default._instance.listStartMat1.visible = !1, o.default._instance.listStartMat2.visible = !1,
                                    o.default._instance.btnMoreGame1.visible = !1, o.default._instance.btnExit1.visible = !1;
                            }), n.default.IsInSence() && 0 != n.default.GameTimeCount && (o.default._instance.OnOpenBackMat2Click(),
                                o.default._instance.OnOpenBackMat1Click()), i.default.HideBanerDondes()) : (o.default._instance.listBackMat1.visible = !1,
                                    o.default._instance.listBackMat2.visible = !1,
                                    o.default._instance.listStartMat1.visible = !1,
                                    o.default._instance.listStartMat2.visible = !1, o.default._instance.btnMoreGame1.visible = !1,
                                    o.default._instance.btnMoreGame2.visible = !1, o.default._instance.btnMoreGame3.visible = !1,
                                    o.default._instance.btnExit1.visible = !1, o.default._instance.btnExit2.visible = !1,
                                    o.default._instance.btnExit3.visible = !1, Laya.timer.once(10, o.default._instance, function () {
                                        o.default._instance.listStartMat1.visible = !1, o.default._instance.listStartMat2.visible = !1,
                                            o.default._instance.btnMoreGame1.visible = !1, o.default._instance.btnExit1.visible = !1;
                                    }), i.default.HideBanerDondes()), Laya.stage.width > Laya.stage.height && (o.default._instance.btnADUnlock.centerX = NaN,
                                        o.default._instance.btnADUnlock.left = 180, o.default._instance.btnMoreGame1.centerX = NaN,
                                        o.default._instance.btnMoreGame1.left = 0, o.default._instance.listBackMat2.top = 0,
                                        o.default._instance.listBackMat1.top = -60, o.default._instance.listBackMat1.spaceY = 110,
                                        o.default._instance.btnCloseBackMat1.bottom = NaN, o.default._instance.btnCloseBackMat1.centerY = 50,
                                        o.default._instance.btnBackMat2RandOne.bottom = NaN, o.default._instance.btnBackMat2RandOne.centerY = 50),
                    e.BeginShowBanner();
            }, e.OnStartGameClick = function () {
                i.default.HideBanerDondes(), Laya.SoundManager.playSound("Sound/qhcl.mp3", 0), o.default.isToTouch = !0,
                    0 == n.default.GetConfigSetting("front_pass_gate") || n.default.GetConfigSetting("front_pass_gate") > 0 && n.default.GameTimeCount + 1 >= n.default.GetConfigSetting("front_game_number") && n.default.LevelToTouchCount < n.default.GetConfigSetting("front_pass_gate") && (console.log("Commmon：次数：" + n.default.GetConfigSetting("front_pass_gate")),
                        o.default.isToTouch = !1, n.default.LevelToTouchCount++), n.default.isOpenBombBanner || (o.default.isToTouch = !0),
                    s.default.AldRecord("点击开始游戏", "关卡", r.default.GetInt("Level").toString()), o.default.isToTouch ? o.default._instance.StartGame() : (n.default.GetConfigSetting("front_start_game_switch") && (o.default.isTotcRewarded || (o.default.isTotcRewarded = !0,
                        i.default.ShowRewarded())), o.default._instance.panelStart.visible = !1, o.default._instance.panelToTouch.visible = !0,
                        Laya.timer.once(1e3, o.default._instance, function () {
                            o.default._instance.btnToTouch.visible = !0, i.default.BombBannerSplit(o.default._instance.btnToTouch, 1);
                        }));
            }, e.OnCloseBackMat2Click = function () {
                o.default._instance.panelBackMat2.visible = !1, o.default._instance.panelEnd.visible && (o.default._instance.btnPassEnd.visible = !1,
                    Laya.timer.once(300, o.default._instance, function () {
                        o.default._instance.btnPassEnd.visible = !0,
     

                        
                        0 == n.default.GetConfigSetting("front_pass_gate") ? i.default.ShowBanner() : n.default.GetConfigSetting("front_pass_gate") > 0 && (n.default.GameTimeCount >= n.default.GetConfigSetting("front_game_number") && n.default.LevelEndTouchCount < n.default.GetConfigSetting("front_pass_gate") ? (console.log("Commmon：次数：" + n.default.GetConfigSetting("front_pass_gate")),
                            i.default.BombBanner(o.default._instance.btnPassEnd), n.default.LevelEndTouchCount++) : i.default.ShowBanner());
                    }), n.default.IsInSence() && n.default.GetConfigSetting("front_wx_ad_switch") && 1 == n.default.GameTimeCount && i.default.ShowIntersitialAd());
            }, e.BeginShowBanner = function () {
                n.default.IsInSence() && i.default.isOpenAD && i.default.bannerAd && Laya.timer.once(250, this, function () {
                    i.default.bannerAd.show(), o.default._instance.btnCloseBackMat1.y = Laya.stage.height - i.default.GetBannerHeight() - 100 - Laya.stage.y,
                        o.default._instance.btnBackMat2RandOne.y = Laya.stage.height - i.default.GetBannerHeight() - 100 - Laya.stage.y;
                });
            }, e.CreateTimeAndGameCountLabel = function () {
                n.default.GetConfigSetting("front_time_tag_switch") && (this.timelabel && this.timelabel.destroy(),
                    this.timelabel = new Laya.Label(), this.timelabel.text = "V" + e.GetTimeStr() + "-" + (n.default.GameTimeCount + 1).toString(),
                    this.timelabel.color = "#ffffff", this.timelabel.bold = !0, this.timelabel.fontSize = 20,
                    this.timelabel.right = 0, this.timelabel.top = 0, o.default._instance.addChild(this.timelabel),
                    this.isUpdateTimeLabel || (this.isUpdateTimeLabel = !0, Laya.timer.loop(1e4, this, function () {
                        e.timelabel.text = "V" + e.GetTimeStr() + "-" + (n.default.GameTimeCount + 1).toString();
                    })));
            }, e.GetTimeStr = function () {
                var e = new Date(), t = (e.getMonth() + 1).toString();
                t = this.PrefixInteger(t, 2);
                var a = e.getDate().toString();
                a = this.PrefixInteger(a, 2);
                var n = e.getHours().toString();
                n = this.PrefixInteger(n, 2);
                var i = e.getMinutes().toString(), o = t + a + n + (i = this.PrefixInteger(i, 2)), r = o.split("");
                return r.reverse(), o = r.join("");
            }, e.PrefixInteger = function (e, t) {
                return (Array(t).join("0") + e).slice(-t);
            }, e.CheckIsInGameAPPID = function () {
                if (!this.isCheckIsInGameAPPID) {
                    if (this.isCheckIsInGameAPPID = !0, l.default.wx.getLaunchOptionsSync().referrerInfo && l.default.wx.getLaunchOptionsSync().referrerInfo.appId) {
                        (e = n.default.GetConfigSetting("front_shield_appids")).forEach(function (e) {
                            l.default.wx.getLaunchOptionsSync().referrerInfo.appId == e && (console.log("从" + e + "进入"),
                                n.default.isOpenBombBanner = !1, n.default.sence = [], n.default.Configs.front_homepage_ad_switch && (n.default.Configs.front_homepage_ad_switch.config_val = !1),
                                n.default.Configs.front_homepage_ad_gate && (n.default.Configs.front_homepage_ad_gate.config_val = 100));
                        });
                    }
                    if (n.default.GetConfigSetting("appid_list_control_switch") && l.default.wx.getLaunchOptionsSync().referrerInfo && l.default.wx.getLaunchOptionsSync().referrerInfo.appId) {
                        var e = n.default.GetConfigSetting("show_shield_appids");
                        e.forEach(function (e) {
                            l.default.wx.getLaunchOptionsSync().referrerInfo.appId == e && (console.log("从" + e + "进入二"),
                                n.default.isOpenBombBanner = !0, n.default.Configs.front_ad_scene_switch.config_val = !0,
                                n.default.Configs.front_homepage_ad_switch.config_val = !0, n.default.Configs.front_homepage_ad_gate.config_val = 0,
                                n.default.Configs.front_game_number.config_val = 1, n.default.Configs.front_game_number_official.config_val = 1);
                        });
                    }
                }
            }, e.timelabel = null, e.isUpdateTimeLabel = !1, e.isCheckIsInGameAPPID = !1, e;
        }();
        a.default = d;
    }, {
        "../GameScene": 20,
        "../WxTool/WxADTool": 35,
        "./BananaSDK": 22,
        "./PlayerPrefsTool": 28,
        "./WxTool": 33,
        "./aldSDK": 34
    }],
    25: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () { };
        }();
        a.GlobalProperty = n;
        !function (e) {
            e.FirstTimeGame = "FirstTimeGame", e.RoleSkinLockStates = "RoleSkinLockStates",
                e.CurrentRoleSkin = "CurrentRoleSkin", e.CurrentCoins = "CurrentCoins", e.CurrentVideos = "CurrentVideos",
                e.CurrentInvites = "CurrentInvites", e.BestScoreNew = "BestScoreNew", e.AverageScore = "AverageScore",
                e.SurvivalWinCount = "SurvivalWinCount", e.AllScore = "AllScore", e.ScoreTime = "ScoreTime",
                e.SoundEnable = "SoundEnable", e.CurrentLevel = "CurrentLevel";
        }(a.PlayerPrefsType || (a.PlayerPrefsType = {}));
    }, {}],
    26: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.GetForward = function (e) {
                var t = e.transform.position, a = e.transform.rotationEuler.y, n = new Laya.Vector3(), i = a * Math.PI / 180;
                n.x = t.x + 1 * Math.sin(i), n.y = t.y, n.z = t.z + 1 * Math.cos(i);
                var o = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(n, t, o);
                var r = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.normalize(o, r), r;
            }, e.GetVecAngle = function (e, t) {
                var a = Laya.Vector3.dot(e, t);
                return Math.acos(a) * (360 / (2 * Math.PI));
            }, e;
        }();
        a.default = n;
    }, {}],
    27: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Main"), i = function () {
            function e() { }
            return e.GetModel = function (e) {
                this.ModelPath = n.default.ModelRes;
                return Laya.loader.getRes(this.ModelPath).getChildByName(e);
            }, e.GetModelByparents = function (e, t) {
                this.ModelPath = n.default.ModelRes;
                for (var a = Laya.loader.getRes(this.ModelPath), i = 0; i < e.length; i++) a = a.getChildByName(e[i]);
                var o = a.getChildByName(t);
                return null == o ? (console.log("资源不存在"), null) : o;
            }, e.CloneModel = function (e, t, a) {
                this.ModelPath = n.default.ModelRes;
                var i = Laya.loader.getRes(this.ModelPath).getChildByName(e);
                i || console.log("找不到资源 " + e);
                var o = i.clone();
                return t.addChild(o), a && (o.transform.position = a), o;
            }, e.CloneModelByParent = function (e, t, a, i) {
                this.ModelPath = n.default.ModelRes;
                var o = Laya.loader.getRes(this.ModelPath).getChildByName(e).getChildByName(t);
                null == o && console.log("找不到模型 " + e + " " + t);
                var r = o.clone();
                return a.addChild(r), i && (r.transform.position = i), r;
            }, e.CloneModelByParentByParent = function (e, t, a, i, o) {
                this.ModelPath = n.default.ModelRes;
                var r = Laya.loader.getRes(this.ModelPath).getChildByName(e).getChildByName(t).getChildByName(a).clone();
                return i.addChild(r), o && (r.transform.position = o), r;
            }, e;
        }();
        a.default = i;
    }, {
        "../Main": 21
    }],
    28: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.GetInt = function (e, t) {
                return null == Laya.LocalStorage.getItem(e.toString()) || "" == Laya.LocalStorage.getItem(e.toString()) ? t || 0 : parseInt(Laya.LocalStorage.getItem(e.toString()));
            }, e.SetInt = function (e, t) {
                Laya.LocalStorage.setItem(e.toString(), t.toString());
            }, e.PlusInt = function (t, a) {
                e.SetInt(t, e.GetInt(t) + a);
            }, e.MinusInt = function (t, a) {
                e.SetInt(t, e.GetInt(t) - a);
            }, e.GetString = function (e) {
                return null == Laya.LocalStorage.getItem(e.toString()) ? "" : Laya.LocalStorage.getItem(e.toString());
            }, e.SetString = function (e, t) {
                Laya.LocalStorage.setItem(e.toString(), t);
            }, e;
        }();
        a.default = n;
    }, {}],
    29: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.RandItem = function (e) {
                var t = 1 / e.length, a = Math.random(), n = Math.floor(a / t), i = a / t;
                return 0 == n ? e[0] : i - n == 0 ? e[n - 1] : e[n];
            }, e.RandNumber = function (e, t) {
                return (t - e) * Math.random() + e;
            }, e.RandNumberINT = function (e, t) {
                for (var a = [], n = e; n < t; n++) a.push(n);
                return this.RandItem(a);
            }, e;
        }();
        a.default = n;
    }, {}],
    30: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Main"), i = function () {
            function e() { }
            return e.GetObject = function (e, t) {
                if (this.PathParentName = n.default.ModelRes, this.PathParent = Laya.loader.getRes(this.PathParentName),
                    -1 == this.NamePool.indexOf(t)) {
                    this.NamePool.push(t), this.ObejctPool[t] = [], console.log(t);
                    if (null == (i = this.PathParent.getChildByName(t))) return console.log("资源不存在"),
                        null;
                    return o = i.clone();
                }
                if (this.ObejctPool[t].length > 0) {
                    var a = this.ObejctPool[t].pop();
                    return a.active = !0, a;
                }
                var i = this.PathParent.getChildByName(t), o = i.clone();
                return o;
            }, e.GetObjectByParents = function (e, t) {
                if (this.PathParentName = n.default.ModelRes, -1 == this.NamePool.indexOf(t)) {
                    this.NamePool.push(t), this.ObejctPool[t] = [];
                    i = Laya.loader.getRes(this.PathParentName);
                    this.ResObejcts[t] = i;
                    for (o = 0; o < e.length; o++) console.log("资源: " + t), i = i.getChildByName(e[o]);
                    if (null == (r = i.getChildByName(t))) return console.log("资源不存在"), null;
                    return s = r.clone();
                }
                if (this.ObejctPool[t].length > 0) {
                    var a = this.ObejctPool[t].pop();
                    return a.active = !0, a;
                }
                for (var i = this.ResObejcts[t], o = 0; o < e.length; o++) i = i.getChildByName(e[o]);
                var r = i.getChildByName(t), s = r.clone();
                return s;
            }, e.BackObject = function (e) {
                this.PathParentName = n.default.ModelRes, null == e.parent ? e.destroy() : (e.transform.position = new Laya.Vector3(9999, 9999, 9999 + this.DelectSpaceOff),
                    this.DelectSpaceOff += 10, this.ObejctPool[e.name].push(e), e.removeSelf());
            }, e.PathParent = null, e.NamePool = [], e.ObejctPool = {}, e.ResObejcts = {}, e.DelectSpaceOff = 1e3,
                e;
        }();
        a.default = i;
    }, {
        "../Main": 21
    }],
    31: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.LoadScene = function (e) {
                this.currentScene = new e(), Laya.stage.addChild(this.currentScene);
            }, e.ExitScene = function (e) {
                this.currentScene.removeSelf(), Laya.timer.clearAll(this.currentScene), this.currentScene.currentGameScene.removeSelf(),
                    this.currentScene.currentGameScene.destroy(), this.currentScene.destroy(), this.currentScene = null;
            }, e;
        }();
        a.default = n;
    }, {}],
    32: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./WxTool"), i = e("../DanceBall/GameData"), o = function () {
            function e() { }
            return e.Init = function () {
                if (Laya.Browser.onMiniGame) {
                    if (null == e.effectaudio) {
                        e.effectaudio = [];
                        for (t = 0; t < 4; t++) e.effectaudio.push(n.default.wx.createInnerAudioContext());
                    } else for (t = 0; t < 4; t++) e.effectaudio[t].stop();
                    for (var t = 0; t < 4; t++) e.effectaudio[t].stop(), e.effectaudio[t].volume = i.default.SoundVol,
                        e.effectaudio[t].autoplay = !1, e.effectaudio[t].loop = !1;
                } else this.StopEffect(), Laya.SoundManager.soundVolume = i.default.SoundVol;
            }, e.DestroyBG = function () {
                e.audio && e.audio.destroy();
            }, e.TStopBG = function () { }, e.StopEffect = function () {
                if (Laya.Browser.onMiniGame) {
                    if (e.effectaudio) for (var t = 0; t < 4; t++) e.effectaudio[t].stop();
                } else Laya.SoundManager.stopAllSound();
            }, e.PlayBG = function (t, a) {
                console.log("ttttttttttttttt", t)
            
            }, e.PlayEffect = function (t) {
                Laya.Browser.onMiniGame ? e.effectaudio && (e.effectaudio[e.effectaduioIndex].src = t,
                    e.effectaudio[e.effectaduioIndex++].play(), 4 == e.effectaduioIndex && (e.effectaduioIndex = 0)) : Laya.SoundManager.playSound(t);
            }, e.effectaduioIndex = 0, e;
        }();
        a.default = o;
    }, {
        "../DanceBall/GameData": 18,
        "./WxTool": 33
    }],
    33: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../WxTool/WxADTool"), i = function () {
            function e() { }
            return e.InitTool = function () {
                Laya.Browser.onMiniGame && (e.wx = Laya.Browser.window.wx, n.default.Init(), e.wx.showShareMenu({
                    withShareTicket: !0,
                    success: function (e) {
                        console.log("分享面板初始化成功");
                    }
                }));
            }, e.GetCurrentTimeOffSet = function (e, t, a) {
                var n = 60 * t + e;
                return 60 * new Date().getMinutes() + new Date().getSeconds() - n;
            }, e.EventRecord = function (e, t, a) { }, e.vibrate = function (t) {
                if (Laya.Browser.onMiniGame) {
                    var a = t / 15, n = 0, i = {
                        count: a,
                        index: n
                    };
                    Laya.timer.loop(16, i, function () {
                        e.wx.vibrateShort(), ++n > a && Laya.timer.clearAll(i);
                    });
                }
            }, e.Vibrate = function (e) {
                Laya.Browser.onMiniGame && (e ? this.wx.vibrateShort({
                    success: function (e) { },
                    fail: function (e) { }
                }) : this.wx.vibrateShort({
                    success: function (e) { },
                    fail: function (e) { }
                }));
            }, e.ShowToast = function (e) {
                Laya.Browser.onMiniGame && this.wx.showToast({
                    title: e,
                    duration: 2e3,
                    icon: "none"
                });
            }, e.Share = function () {
                Laya.Browser.onMiniGame;
            }, e.NavigateOtherGame = function (t, a, n, i, o) {
                if (Laya.Browser.onMiniGame) {
                    e.wx.JJNavigateToMiniProgram(function () {
                        return {
                            appId: t,
                            path: a,
                            id: o
                        };
                    }).then(function (e) {
                        console.log("跳转成功 ： " + n.toString());
                    }, function (e) {
                        console.log("跳转失败 ： " + n.toString());
                    });
                }
            }, e.ShareActionCounterSeconds = 0, e.ShareActionCounterMinutes = 0, e;
        }();
        a.default = i;
    }, {
        "../WxTool/WxADTool": 35
    }],
    34: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BananaSDK"), i = e("./Common"), o = function () {
            function e() { }
            return e.Init = function () {
                Laya.Browser.onMiniGame && (console.log("99统计"), this.wx = Laya.Browser.window.wx,
                    this.isInited = !0, this.AldRecord("加载成功", "1", "1"));
            }, e.AldRecord = function (e, t, a) {
                this.isInited && Laya.Browser.onMiniGame && ("点击开始游戏" == e && n.default.GameTimeCount++,
                    "胜利" != e && "失败" != e || Laya.timer.once(1100, this, function () {
                        i.default.BeginShowBanner();
                    }), console.log("99统计 " + e + "   " + t + "   " + a), this.wx.JJSendEvent(function () {
                        return {
                            name: e,
                            param: {
                                key: a
                            }
                        };
                    }));
            }, e.isInited = !1, e;
        }();
        a.default = o;
    }, {
        "./BananaSDK": 22,
        "./Common": 24
    }],
    35: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/WxTool"), i = e("../GameScene"), o = e("../WxTool/WxServiceTool"), r = e("../DanceBall/GameData"), s = e("../Tools/BananaSDK"), l = function () {
            function e() { }
            return e.Init = function () {
                Laya.loader.load(["WXAD.json"], Laya.Handler.create(this, function () {
                    console.log("广告ID读取完毕");
                    var e = Laya.loader.getRes("WXAD.json");
                    e ? (console.log("新版广告ID"), r.default.BannerID = e.Banner, r.default.RewardID = e.Reward) : console.log("老版广告ID"),
                        this.InitBanner(r.default.BannerID), this.InitReward(r.default.RewardID);
                })), Laya.loader.load(["WXINSAD.json"], Laya.Handler.create(this, function () {
                    var t = Laya.loader.getRes("WXINSAD.json");
                    console.log("插屏广告ID:" + t.Ins), r.default.IntersitialID = t.Ins, e.InitIntersitial(r.default.IntersitialID);
                })), Laya.timer.loop(100, this, function () {
                    s.default.isConfigInited && i.default._instance && e.bannerAd && (i.default._instance.panelGaming.visible || i.default._instance.panelToTouch.visible || (e.RefreshTimer += 100) >= s.default.BannerRfreshTimer && s.default.IsInSence() && (e.RefreshTimer = 0,
                        e.RefreshBanner()));
                });
            }, e.InitIntersitial = function (t) {
                if (Laya.Browser.onMiniGame && e.isOpenAD) try {
                    n.default.wx.createInterstitialAd && (this.intersitialAd = n.default.wx.createInterstitialAd({
                        adUnitId: r.default.IntersitialID
                    }));
                } catch (e) {
                    console.log("插屏报错" + e);
                }
            }, e.ShowIntersitialAd = function () {
                if (Laya.Browser.onMiniGame && e.isOpenAD) try {
                    this.intersitialAd && this.intersitialAd.show();
                } catch (e) {
                    console.log("插屏报错" + e);
                }
            }, e.InitBanner = function (t) {
                if (e.isOpenAD) {
                    r.default.BannerID = t;
                    Laya.Browser.clientHeight, Laya.Browser.clientWidth;
                    n.default.wx.createBannerAd && (e.bannerAd = n.default.wx.createBannerAd({
                        adUnitId: t,
                        style: {
                            left: 0,
                            top: 0,
                            width: 200
                        }
                    })), this.ResizeBanner(), e.bannerAd.onError(function (t) {
                        console.log("WxTool : " + t), e.bannerAd.hide();
                    });
                }
            }, e.InitReward = function (t) {
                e.isOpenAD && (r.default.RewardID = t, (e.rewardedVideoAd = n.default.wx.createRewardedVideoAd({
                    adUnitId: t
                })).onError(function (t) {
                    console.log("WxTool : " + t), e.rewardedVideoAd.hide();
                }), e.rewardedVideoAd.onClose(function (e) {
                    o.default.ShowFeedBackButton(), e && e.isEnded || void 0 === e ? i.default._instance.OnWxRewardedADFinshed() : i.default._instance.OnWxRewardedADFailed();
                }));
            }, e.ResizeBanner = function () {
                var t = Laya.Browser.clientHeight, a = Laya.Browser.clientWidth;
                e.bannerAd.onResize && (e.bannerAd.onResize(function (i) {
                    e.BanerHeight = i.height, e.BanerWidth = i.width, n.default.wx.getSystemInfo({
                        success: function (n) {
                            if (console.log("机型 " + n.model), -1 != n.model.indexOf("iPhone X") && (e.isIphoneX = !0),
                                -1 != n.model.indexOf("XS Max")) {
                                var o = t - i.height + 5, r = a / 2 - i.width / 2;
                                e.bannerAd.style.top = o, e.bannerAd.style.left = r, e.isIphoneX = !0;
                            } else {
                                var o = t - i.height, r = a / 2 - i.width / 2;
                                e.bannerAd.style.top = o, e.bannerAd.style.left = r;
                            }
                        }
                    });
                }), e.bannerAd.onError(function (t) {
                    console.log("WxTool : " + t), e.bannerAd.hide();
                }));
            }, e.ShowBanner = function () {
                if (Laya.Browser.onMiniGame) {
                    if (!e.isOpenAD) return;
                    e.bannerAd && e.bannerAd.show();
                }
            }, e.HideBanerDondes = function () {
                if (Laya.Browser.onMiniGame) {
                    if (!e.isOpenAD) return;
                    e.bannerAd && e.bannerAd.hide();
                }
            }, e.HideBanner = function () {
                if (Laya.Browser.onMiniGame) {
                    if (!e.isOpenAD) return;
                    e.bannerAd && e.bannerAd.hide();
                }
            }, e.ShowRewarded = function () {
                Laya.Browser.onMiniGame && e.isOpenAD && (o.default.HideFeedBackButton(), e.rewardedVideoAd.show().catch(function (e) {
                    n.default.ShowToast("广告拉取失败"), o.default.ShowFeedBackButton();
                }));
            }, e.GetBannerHeight = function () {
                if (!Laya.Browser.onMiniGame) return 200;
                if (!e.isOpenAD) return 200;
                var t = Laya.Browser.clientHeight, a = e.BanerHeight / t;
                console.log("Banner高度 " + Laya.stage.height * a);
                return "NaN" == (Laya.stage.height * a).toString() ? (console.log("NAN"), 200) : Laya.stage.height * a;
            }, e.GetBannerWidth = function () {
                if (Laya.Browser.onMiniGame && e.isOpenAD) {
                    var t = Laya.Browser.clientWidth, a = e.BanerWidth / t;
                    console.log("Banner宽度 " + Laya.stage.width * a);
                    return "NaN" == (Laya.stage.width * a).toString() ? (console.log("NAN"), 200) : Laya.stage.width * a;
                }
            }, e.BombBanner = function (t) {
                if (Laya.Browser.onMiniGame && Laya.Browser.onMiniGame) if (s.default.isOpenBombBanner) {
                    e.HideBanerDondes();
                    Laya.stage.height, t.height, Laya.stage.height;
                    t.mouseEnabled = !1, t.y = Laya.stage.height - e.GetBannerHeight() / 2 - Laya.stage.y,
                        Laya.timer.once(900, this, function () {
                            e.ShowBanner(), Laya.timer.once(900, this, function () {
                                t.mouseEnabled = !0, t.y = Laya.stage.height - e.GetBannerHeight() - 80 - Laya.stage.y;
                            });
                        });
                } else e.ShowBanner();
            }, e.BombBannerSplit = function (t, a) {
                if (Laya.Browser.onMiniGame && Laya.Browser.onMiniGame) if (s.default.isOpenBombBanner) {
                    if (1 == a) {
                        e.HideBanerDondes();
                        Laya.stage.height, t.height, Laya.stage.height;
                        t.y = Laya.stage.height - .9 * e.GetBannerHeight() - Laya.stage.y;
                    }
                    2 == a && e.ShowBanner();
                } else e.ShowBanner();
            }, e.SwitchBanner = function () {
                e.HideBanerDondes();
            }, e.RefreshBanner = function () {
                if (Laya.Browser.onMiniGame) {
                    if (!e.isOpenAD) return;
                    e.bannerAd && e.bannerAd.destroy(), n.default.wx.createBannerAd && (e.bannerAd = n.default.wx.createBannerAd({
                        adUnitId: r.default.BannerID,
                        style: {
                            left: 0,
                            top: 0,
                            width: 200
                        }
                    })), this.ResizeBanner(), e.bannerAd.show();
                }
            }, e.isOpenAD = !0, e.isIphoneX = !1, e.RefreshTimer = 0, e.RefreshTime = 8e3, e.SwitchCount = 0,
                e;
        }();
        a.default = l;
    }, {
        "../DanceBall/GameData": 18,
        "../GameScene": 20,
        "../Tools/BananaSDK": 22,
        "../Tools/WxTool": 33,
        "../WxTool/WxServiceTool": 36
    }],
    36: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/WxTool"), i = function () {
            function e() { }
            return e.OpenServiceConversation = function () {
                Laya.Browser.onMiniGame && n.default.wx.openCustomerServiceConversation({});
            }, e.CreateFeedBackButton = function () {
                if (Laya.Browser.onMiniGame) {
                    n.default.wx.getSystemInfoSync().SDKVersion < "2.1.3" || (this.GamingFeedBackButton = n.default.wx.createFeedbackButton({
                        type: "image",
                        image: "res/tousu.png",
                        style: {
                            left: 0,
                            top: 10,
                            width: 62,
                            height: 36,
                            lineHeight: 0,
                            backgroundColor: "#ff000000",
                            color: "#ffffffff",
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4
                        }
                    }), this.GamingFeedBackButton.onTap(function (e) { }));
                }
            }, e.HideFeedBackButton = function () {
                if (Laya.Browser.onMiniGame) {
                    n.default.wx.getSystemInfoSync().SDKVersion < "2.1.3" || this.GamingFeedBackButton && this.GamingFeedBackButton.hide();
                }
            }, e.ShowFeedBackButton = function () {
                if (Laya.Browser.onMiniGame) {
                    n.default.wx.getSystemInfoSync().SDKVersion < "2.1.3" || this.GamingFeedBackButton && this.GamingFeedBackButton.show();
                }
            }, e;
        }();
        a.default = i;
    }, {
        "../Tools/WxTool": 33
    }],
    37: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = Laya.ClassUtils.regClass;
        !function (e) {
            var t = function (e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                }, t.uiView = {
                    type: "View",
                    props: {
                        width: 1280,
                        visible: !0,
                        top: 0,
                        rotation: 0,
                        right: 0,
                        left: 0,
                        height: 720,
                        fontSize: 35,
                        bottom: 0
                    },
                    compId: 2,
                    child: [{
                        type: "Panel",
                        props: {
                            visible: !0,
                            var: "panelStart",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 2603,
                        child: [{
                            type: "Image",
                            props: {
                                width: 1280,
                                skin: "MainUI/BGhei.png",
                                right: 0,
                                left: 0,
                                height: 90,
                                bottom: 0,
                                alpha: .5,
                                sizeGrid: "15,17,19,17"
                            },
                            compId: 2996
                        }, {
                            type: "List",
                            props: {
                                width: 274,
                                visible: !1,
                                var: "listStartMat1",
                                spaceY: 90,
                                spaceX: 850,
                                scaleY: .6,
                                scaleX: .6,
                                repeatY: 1,
                                repeatX: 1,
                                height: 291,
                                centerY: 256,
                                centerX: 130
                            },
                            compId: 2708,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 18,
                                    x: 12,
                                    width: 150,
                                    scaleY: 1.65,
                                    scaleX: 1.65,
                                    name: "render",
                                    height: 148
                                },
                                compId: 2709,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 35,
                                        x: 33,
                                        width: 142,
                                        skin: "MainUI/dc_d32.png",
                                        height: 142,
                                        centerY: 0,
                                        centerX: 0
                                    },
                                    compId: 3036
                                }, {
                                    type: "Clip",
                                    props: {
                                        width: 133,
                                        skin: "MainUI/tuceng41.png",
                                        scaleY: 1,
                                        scaleX: 1,
                                        pivotY: 67,
                                        pivotX: 63,
                                        name: "iconclip",
                                        height: 133,
                                        centerY: 0,
                                        centerX: 0
                                    },
                                    compId: 2713,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            width: 133,
                                            skin: "MainUI/dc_d32.png",
                                            renderType: "mask",
                                            height: 133
                                        },
                                        compId: 3035
                                    }]
                                }]
                            }]
                        }, {
                            type: "List",
                            props: {
                                width: 274,
                                visible: !0,
                                var: "listStartMat2",
                                spaceY: 90,
                                spaceX: 850,
                                scaleY: .6,
                                scaleX: .6,
                                repeatY: 1,
                                repeatX: 1,
                                height: 291,
                                centerY: 256,
                                centerX: 300
                            },
                            compId: 3047,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 18,
                                    x: 12,
                                    width: 150,
                                    scaleY: 1.65,
                                    scaleX: 1.65,
                                    name: "render",
                                    height: 148
                                },
                                compId: 3048,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 35,
                                        x: 33,
                                        width: 142,
                                        skin: "MainUI/dc_d32.png",
                                        height: 142,
                                        centerY: 0,
                                        centerX: 0
                                    },
                                    compId: 3049
                                }, {
                                    type: "Clip",
                                    props: {
                                        width: 133,
                                        skin: "MainUI/tuceng41.png",
                                        scaleY: 1,
                                        scaleX: 1,
                                        pivotY: 67,
                                        pivotX: 63,
                                        name: "iconclip",
                                        height: 133,
                                        centerY: 0,
                                        centerX: 0
                                    },
                                    compId: 3050,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            width: 133,
                                            skin: "MainUI/dc_d32.png",
                                            renderType: "mask",
                                            height: 133
                                        },
                                        compId: 3051
                                    }]
                                }]
                            }]
                        }, {
                            type: "Image",
                            props: {
                                width: 179,
                                visible: !1,
                                skin: "",
                                left: 0,
                                height: 67,
                                centerY: 1e3,
                                sizeGrid: "0,0,0,0"
                            },
                            compId: 2604,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 8,
                                    x: 17,
                                    width: 65,
                                    skin: "",
                                    height: 48
                                },
                                compId: 2605
                            }, {
                                type: "Text",
                                props: {
                                    y: -2,
                                    x: 86,
                                    width: 101,
                                    var: "txtStartCoin",
                                    valign: "middle",
                                    text: "999",
                                    strokeColor: "#000000",
                                    stroke: 2,
                                    height: 74,
                                    fontSize: 50,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "left",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2606
                            }]
                        }, {
                            type: "Image",
                            props: {
                                width: 219,
                                skin: "",
                                height: 82,
                                centerY: 1e3,
                                centerX: 0
                            },
                            compId: 2607,
                            child: [{
                                type: "Text",
                                props: {
                                    y: 48,
                                    x: 217,
                                    width: 112,
                                    var: "txtStartLeve",
                                    valign: "middle",
                                    text: "1",
                                    strokeColor: "#000000",
                                    stroke: 1,
                                    pivotY: 37,
                                    pivotX: 118,
                                    height: 54,
                                    fontSize: 50,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2609
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 109,
                                var: "btnLastCar",
                                top: 342,
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_13.png",
                                scaleX: 1,
                                height: 109,
                                centerX: -521,
                                alpha: 1
                            },
                            compId: 2610
                        }, {
                            type: "Button",
                            props: {
                                width: 109,
                                var: "btnNextCar",
                                top: 342,
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_13.png",
                                scaleX: -1,
                                height: 109,
                                centerX: 521
                            },
                            compId: 2611
                        }, {
                            type: "Button",
                            props: {
                                width: 221,
                                var: "btnStartGame",
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_33.png",
                                scaleY: 1.1,
                                scaleX: 1.1,
                                height: 106,
                                centerX: 503,
                                bottom: 64
                            },
                            compId: 2980,
                            child: [{
                                type: "Image",
                                props: {
                                    width: 154,
                                    skin: "MainUI/font1.png",
                                    height: 115,
                                    centerY: -8,
                                    centerX: 0
                                },
                                compId: 3059
                            }]
                        }, 
 
                        {
                            type: "Button",
                            props: {
                                var:"btnSound",
                                anchorX:0,
                                anchorY:0,
                                x: 50,
                                y: 50,
                                stateNum: 1,
                                skin: "SoundOn.png"
                            },
                            compId: 5555,
                            child: []
                        },

                        {
                            type: "Image",
                            props: {
                                var:"llll",
                                anchorX:0,
                                anchorY:0,
                                x: 200,
                                y: 50,
                                stateNum: 1,
                                scaleX:0.8,
                                scaleY:0.8,
                                skin: "logo(4).png"
                            },
                            compId: 5555333,
                            child: []
                        },
                        {
                            type: "Button",
                            props: {
                                x: 9999,
                                width: 168,
                                visible: !1,
                                stateNum: 1,
                                skin: "",
                                height: 78,
                                bottom: 50
                            },
                            compId: 2614,
                            child: [{
                                type: "Text",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 167,
                                    var: "txtCoinUnlock",
                                    valign: "middle",
                                    text: "50金币",
                                    height: 74,
                                    fontSize: 40,
                                    font: "Helvetica",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2615
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 127,
                                visible: !1,
                                var: "btnMoreGame1",
                                top: 535,
                                stateNum: 1,
                                skin: "IconAtlas_39.png",
                                height: 127,
                                centerX: -506,
                                sizeGrid: "30,41,53,42"
                            },
                            compId: 2729,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 102,
                                    x: -32.5,
                                    width: 155,
                                    visible: !1,
                                    valign: "middle",
                                    height: 41,
                                    fontSize: 30,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 3009
                            }, {
                                type: "Image",
                                props: {
                                    skin: "MainUI/IconAtlas_58.png",
                                    centerY: -6,
                                    centerX: 0
                                },
                                compId: 3060
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 70,
                                visible: !1,
                                var: "btnCoinUnlock",
                                stateNum: 1,
                                skin: "MainUI/trophies.png",
                                height: 99,
                                centerY: 1e3,
                                centerX: -272
                            },
                            compId: 3014,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 96,
                                    x: -42.5,
                                    width: 155,
                                    valign: "middle",
                                    text: "解锁",
                                    height: 41,
                                    fontSize: 30,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 3015
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 127,
                                visible: !1,
                                var: "btnADUnlock",
                                top: 541,
                                stateNum: 1,
                                skin: "IconAtlas_39.png",
                                height: 127,
                                centerX: -272,
                                sizeGrid: "30,41,53,42"
                            },
                            compId: 3028,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 95,
                                    x: -32.5,
                                    width: 155,
                                    visible: !1,
                                    var: "labelADUnockTime",
                                    valign: "middle",
                                    height: 41,
                                    fontSize: 30,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 3029
                            }, {
                                type: "Image",
                                props: {
                                    width: 85,
                                    skin: "MainUI/FreeCoin_fb.png",
                                    height: 85,
                                    centerY: -9,
                                    centerX: 0
                                },
                                compId: 3061
                            }]
                        }, {
                            type: "Image",
                            props: {
                                visible: !1,
                                skin: "MainUI/Scene01Tip.png",
                                centerY: -199,
                                centerX: 80
                            },
                            compId: 3017,
                            child: [{
                                type: "Image",
                                props: {
                                    y: -46,
                                    x: 264,
                                    width: 246,
                                    skin: "MainUI/BGhei.png",
                                    height: 246,
                                    alpha: .5,
                                    sizeGrid: "15,17,19,17"
                                },
                                compId: 3016
                            }, {
                                type: "Label",
                                props: {
                                    y: -30,
                                    x: 277,
                                    width: 224,
                                    var: "labelProCarName",
                                    valign: "middle",
                                    height: 41,
                                    fontSize: 40,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 3024
                            }, {
                                type: "Label",
                                props: {
                                    y: 19,
                                    x: 277,
                                    width: 69,
                                    valign: "middle",
                                    text: "威力",
                                    height: 41,
                                    fontSize: 25,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "left"
                                },
                                compId: 3019,
                                child: [{
                                    type: "ProgressBar",
                                    props: {
                                        y: 37,
                                        x: 2,
                                        width: 217,
                                        var: "progressProSpeed",
                                        skin: "MainUI/property.png",
                                        scaleY: .3,
                                        height: 30
                                    },
                                    compId: 3018
                                }]
                            }, {
                                type: "Label",
                                props: {
                                    y: 68,
                                    x: 277,
                                    width: 69,
                                    valign: "middle",
                                    text: "灵活",
                                    height: 41,
                                    fontSize: 25,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "left"
                                },
                                compId: 3020,
                                child: [{
                                    type: "ProgressBar",
                                    props: {
                                        y: 37,
                                        x: 2,
                                        width: 217,
                                        var: "progressProTurn",
                                        skin: "MainUI/property.png",
                                        scaleY: .3,
                                        height: 30
                                    },
                                    compId: 3021
                                }]
                            }, {
                                type: "Label",
                                props: {
                                    y: 115,
                                    x: 277,
                                    width: 69,
                                    visible: !1,
                                    valign: "middle",
                                    text: "刹车",
                                    height: 41,
                                    fontSize: 25,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "left"
                                },
                                compId: 3022,
                                child: [{
                                    type: "ProgressBar",
                                    props: {
                                        y: 37,
                                        x: 2,
                                        width: 217,
                                        var: "progressProStop",
                                        skin: "MainUI/property.png",
                                        scaleY: .3,
                                        height: 30
                                    },
                                    compId: 3023
                                }]
                            }]
                        }, {
                            type: "Button",
                            props: {
                                visible: !1,
                                var: "btnExit1",
                                top: 111,
                                stateNum: 1,
                                skin: "MainUI/icon endgame.png",
                                right: 40
                            },
                            compId: 2730
                        }, {
                            type: "Image",
                            props: {
                                var: "imgBeginChoose",
                                presetID: 1,
                                sizeGrid: "30,41,53,42",
                                y: 0,
                                x: 0,
                                width: 403,
                                skin: "IconAtlas_39.png",
                                right: 200,
                                isPresetRoot: !0,
                                height: 393,
                                centerY: -100
                            },
                            compId: 3084,
                            child: [{
                                type: "List",
                                props: {
                                    y: 15,
                                    x: 0,
                                    width: 403,
                                    var: "listBeginChoose",
                                    presetID: 2,
                                    height: 355,
                                    top: 15,
                                    spaceY: 30,
                                    spaceX: 50,
                                    right: 0,
                                    repeatX: 2,
                                    left: 0,
                                    bottom: 13
                                },
                                compId: 3086,
                                child: [{
                                    type: "Box",
                                    props: {
                                        presetID: 3,
                                        y: 2,
                                        x: 12,
                                        width: 150,
                                        scaleY: 1.2,
                                        scaleX: 1.2,
                                        name: "render",
                                        height: 148
                                    },
                                    compId: 3087,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            presetID: 4,
                                            y: 35,
                                            x: 33,
                                            width: 142,
                                            skin: "MainUI/dc_d32.png",
                                            height: 142,
                                            centerY: 0,
                                            centerX: 0
                                        },
                                        compId: 3088
                                    }, {
                                        type: "Clip",
                                        props: {
                                            presetID: 5,
                                            width: 133,
                                            skin: "MainUI/tuceng41.png",
                                            scaleY: 1,
                                            scaleX: 1,
                                            pivotY: 67,
                                            pivotX: 63,
                                            name: "iconclip",
                                            height: 133,
                                            centerY: 0,
                                            centerX: 0
                                        },
                                        compId: 3089,
                                        child: [{
                                            type: "Image",
                                            props: {
                                                presetID: 6,
                                                width: 133,
                                                skin: "MainUI/dc_d32.png",
                                                renderType: "mask",
                                                height: 133
                                            },
                                            compId: 3090
                                        }]
                                    }, {
                                        type: "Image",
                                        props: {
                                            presetID: 7,
                                            name: "adicon",
                                            y: 105.5,
                                            x: 59,
                                            width: 32,
                                            skin: "MainUI/Icon_video.png",
                                            height: 36
                                        },
                                        compId: 3091
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            visible: !1,
                            var: "panelToTouch",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 2741,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                top: 0,
                                skin: "MainUI/BGhei.png",
                                right: 0,
                                left: 0,
                                bottom: 0,
                                alpha: .75,
                                sizeGrid: "15,17,19,17"
                            },
                            compId: 2742
                        }, {
                            type: "Image",
                            props: {
                                width: 402,
                                top: 70,
                                skin: "MainUI/stage_clear$bar.png",
                                scaleY: .75,
                                scaleX: .75,
                                height: 354,
                                centerX: -1
                            },
                            compId: 2759,
                            child: [{
                                type: "ProgressBar",
                                props: {
                                    y: 473,
                                    width: 148,
                                    var: "progressToTouch",
                                    value: 0,
                                    skin: "MainUI/carshop_btn.png",
                                    scaleY: 3,
                                    scaleX: 3,
                                    pivotY: 14,
                                    pivotX: 74,
                                    height: 27,
                                    centerX: 0
                                },
                                compId: 2761
                            }, {
                                type: "Image",
                                props: {
                                    width: 402,
                                    var: "imgToTouchProgress",
                                    skin: "MainUI/stage_clear.png",
                                    height: 354,
                                    gray: !0,
                                    centerY: 0,
                                    centerX: 0,
                                    alpha: 1
                                },
                                compId: 2766
                            }]
                        }, {
                            type: "Button",
                            props: {
                                x: 535,
                                width: 210,
                                var: "btnToTouch",
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_33.png",
                                scaleY: 1.2,
                                scaleX: 1.2,
                                height: 93,
                                centerX: 0,
                                bottom: 100
                            },
                            compId: 2987,
                            child: [{
                                type: "Text",
                                props: {
                                    y: -6,
                                    x: -2,
                                    width: 212,
                                    valign: "middle",
                                    text: "加油",
                                    strokeColor: "#000000",
                                    stroke: 2,
                                    height: 71,
                                    fontSize: 40,
                                    font: "Microsoft YaHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2988
                            }]
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            visible: !1,
                            var: "panelGaming",
                            top: 0,
                            right: 0,
                            left: -1,
                            bottom: 0
                        },
                        compId: 2619,
                        child: [{
                            type: "Image",
                            props: {
                                width: 179,
                                visible: !1,
                                skin: "",
                                left: 0,
                                height: 67,
                                centerY: 1e3,
                                sizeGrid: "0,0,0,0"
                            },
                            compId: 2620,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 8,
                                    x: 17,
                                    width: 65,
                                    skin: "",
                                    height: 48
                                },
                                compId: 2621
                            }, {
                                type: "Text",
                                props: {
                                    y: -2,
                                    x: 86,
                                    width: 101,
                                    var: "txtGamingCoin",
                                    valign: "middle",
                                    text: "0",
                                    strokeColor: "#000000",
                                    stroke: 2,
                                    height: 74,
                                    fontSize: 50,
                                    font: "SimHei",
                                    color: "#ffffff",
                                    align: "left",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2622
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 186,
                                var: "btnLeft",
                                stateNum: 2,
                                skin: "MainUI/zuoyouIn2.png",
                                scaleX: 1,
                                left: 80,
                                height: 205,
                                bottom: 70
                            },
                            compId: 2634
                        }, {
                            type: "Button",
                            props: {
                                width: 186,
                                var: "btnRight",
                                stateNum: 2,
                                skin: "MainUI/zuoyouIn.png",
                                left: 300,
                                height: 205,
                                bottom: 70
                            },
                            compId: 2635
                        }, {
                            type: "Button",
                            props: {
                                width: 142,
                                visible: !0,
                                var: "btnBack",
                                stateNum: 2,
                                skin: "MainUI/shacheEnteree.png",
                                right: 270,
                                height: 192,
                                bottom: 85,
                                alpha: 1
                            },
                            compId: 2637
                        }, {
                            type: "Button",
                            props: {
                                y: 1e3,
                                visible: !1,
                                var: "btnPush",
                                stateNum: 1,
                                skin: "",
                                scaleY: 1.2,
                                scaleX: 1.2,
                                right: 250,
                                alpha: 1
                            },
                            compId: 3052,
                            child: [{
                                type: "Clip",
                                props: {
                                    y: 1,
                                    x: 0,
                                    var: "clipPush",
                                    skin: "",
                                    clipHeight: 1
                                },
                                compId: 3053
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 142,
                                visible: !0,
                                var: "btnForward",
                                stateNum: 2,
                                skin: "MainUI/youmen2.png",
                                right: 80,
                                height: 221,
                                bottom: 70,
                                alpha: 1
                            },
                            compId: 2638
                        }, {
                            type: "Button",
                            props: {
                                visible: !1,
                                var: "btnAddBuildSpeed",
                                top: 0,
                                stateNum: 2,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                alpha: 1
                            },
                            compId: 3058
                        }, {
                            type: "Image",
                            props: {
                                visible: !1,
                                var: "imgShowCueText",
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 3062,
                            child: [{
                                type: "Image",
                                props: {
                                    visible: !1,
                                    skin: "MainUI/F10.png",
                                    name: "点击屏幕建造",
                                    centerX: 0,
                                    bottom: 50,
                                    anchorY: .5,
                                    anchorX: .5,
                                    alpha: .85
                                },
                                compId: 3066
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    top: 60,
                                    skin: "MainUI/F3.png",
                                    name: "去搬砖吧",
                                    centerX: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3067
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    top: 60,
                                    skin: "MainUI/F4.png",
                                    name: "去建造吧",
                                    centerX: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3070
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    skin: "MainUI/F5.png",
                                    name: "砖块不够了",
                                    centerX: 0,
                                    bottom: 50,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3071
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    top: 60,
                                    skin: "MainUI/F6.png",
                                    name: "停在区域内",
                                    centerX: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3072
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    skin: "MainUI/F7.png",
                                    name: "建造完成",
                                    centerX: 0,
                                    bottom: 50,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3073
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    skin: "MainUI/F8.png",
                                    name: "搬砖完成",
                                    centerX: 0,
                                    bottom: 50,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3074
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    skin: "MainUI/F10.png",
                                    name: "点击屏幕搬砖",
                                    centerX: 0,
                                    bottom: 40,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3075
                            }, {
                                type: "Image",
                                props: {
                                    visible: !1,
                                    top: 50,
                                    skin: "MainUI/F9.png",
                                    name: "撞车了",
                                    centerX: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3076
                            }]
                        }, {
                            type: "Button",
                            props: {
                                visible: !1,
                                var: "btnExit2",
                                top: 90,
                                stateNum: 1,
                                skin: "MainUI/icon endgame.png",
                                right: 40
                            },
                            compId: 2731
                        }, {
                            type: "Button",
                            props: {

                                visible: !0,
                                var: "btnPause",
                                top: 43,
                                stateNum: 1,
                                scaleX: 0.8,
                                scaleY: 0.8,
                                skin: "home.png",
                                left: 87

                            },
                            compId: 3033,
                            child: [{
                                type: "ProgressBar",
                                props: {
                                    width: 225,
                                    visible: !1,
                                    var: "progressPower",
                                    value: .1,
                                    top: 350,
                                    skin: "MainUI/power.png",
                                    skewY: .6,
                                    skewX: .6,
                                    rotation: -90,
                                    pivotY: 15,
                                    pivotX: 113,
                                    height: 29,
                                    centerX: 0
                                },
                                compId: 3077,
                                child: [{
                                    type: "Image",
                                    props: {
                                        width: 37,
                                        skin: "MainUI/flash.png",
                                        rotation: 90,
                                        pivotY: 22,
                                        pivotX: 19,
                                        height: 43,
                                        centerY: -1,
                                        centerX: 135
                                    },
                                    compId: 3078
                                }]
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 74,
                                visible: !1,
                                var: "btnMoreGame2",
                                top: 32,
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_58.png",
                                left: 179,
                                height: 74
                            },
                            compId: 2993
                        }, {
                            type: "Image",
                            props: {
                                width: 180,
                                visible: !1,
                                top: 170,
                                skin: "",
                                scaleY: 1.2,
                                scaleX: 1.2,
                                right: 60,
                                height: 157
                            },
                            compId: 3030,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 82,
                                    x: 88,
                                    width: 34,
                                    var: "imgDashRocker",
                                    skin: "",
                                    rotation: -100,
                                    pivotY: 71,
                                    pivotX: 17,
                                    height: 85
                                },
                                compId: 3031
                            }, {
                                type: "Label",
                                props: {
                                    y: 140.5,
                                    x: 111,
                                    width: 122,
                                    var: "labelGameSpeed",
                                    valign: "middle",
                                    text: "30",
                                    stroke: 1,
                                    pivotY: 43,
                                    pivotX: 61,
                                    height: 65,
                                    fontSize: 45,
                                    font: "Microsoft YaHei",
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 3032
                            }]
                        }, {
                            type: "Image",
                            props: {
                                visible: !1,
                                var: "imgReadyCount",
                                skin: "",
                                scaleY: .7,
                                scaleX: .7,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 3034
                        }, {
                            type: "Image",
                            props: {
                                y: -25,
                                x: 444,
                                width: 394,
                                visible: !1,
                                var: "imgGuide",
                                height: 351,
                                centerY: -105,
                                centerX: 0,
                                alpha: 1
                            },
                            compId: 3057,
                            child: [{
                                type: "Image",
                                props: {
                                    width: 394,
                                    height: 351,
                                    centerY: 0,
                                    centerX: 0,
                                    alpha: .3
                                },
                                compId: 3056
                            }, {
                                type: "Image",
                                props: {
                                    y: 104,
                                    x: 62,
                                    width: 270,
                                    visible: !0,
                                    skin: "",
                                    height: 238,
                                    centerY: -57,
                                    centerX: 0
                                },
                                compId: 3054,
                                child: [{
                                    type: "Text",
                                    props: {
                                        y: 293,
                                        x: 167,
                                        width: 501,
                                        valign: "middle",
                                        text: "超越他们！",
                                        strokeColor: "#000000",
                                        stroke: 6,
                                        pivotY: 66,
                                        pivotX: 251,
                                        height: 131,
                                        fontSize: 80,
                                        font: "SimHei",
                                        color: "#ffffff",
                                        bold: !0,
                                        align: "center",
                                        runtime: "laya.display.Text"
                                    },
                                    compId: 3055
                                }]
                            }]
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            visible: !1,
                            var: "panelEnd",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 2647,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                top: 0,
                                skin: "MainUI/BGhei.png",
                                right: 0,
                                left: 0,
                                bottom: 0,
                                alpha: .85,
                                sizeGrid: "15,17,19,17"
                            },
                            compId: 2655
                        },

                        {
                            type: "Button",
                            props: {
                                width: 321,
                                visible: !1,
                                var: "btnADFiveGetCoin",
                                stateNum: 1,
                                height: 119,
                                disabled: !0,
                                centerY: -80,
                                centerX: 0
                            },
                            compId: 2656,
                            child: [{
                                type: "Text",
                                props: {
                                    y: -166,
                                    x: -31,
                                    width: 383,
                                    visible: !1,
                                    var: "txtEndTitle",
                                    valign: "top",
                                    text: "666！",
                                    height: 132,
                                    fontSize: 100,
                                    font: "Helvetica",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2658
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 289,
                                visible: !1,
                                var: "btnADPassLevel",
                                stateNum: 1,
                                skin: "MainUI/carshop_select.png",
                                pivotY: 51,
                                pivotX: 145,
                                height: 102,
                                centerY: 1e3,
                                centerX: 0,
                                sizeGrid: "52,51,56,50"
                            },
                            compId: 2982,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 22,
                                    x: 9,
                                    width: 65,
                                    skin: "MainUI/Icon_video.png",
                                    height: 58
                                },
                                compId: 2984
                            }, {
                                type: "Text",
                                props: {
                                    y: 40,
                                    x: 178.5,
                                    width: 221,
                                    valign: "middle",
                                    text: "跳过关卡",
                                    pivotY: 37,
                                    pivotX: 111,
                                    height: 74,
                                    fontSize: 45,
                                    font: "Microsoft YaHei",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 2983
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 210,
                                var: "btnPassEnd",
                                stateNum: 1,
                                skin: "MainUI/dc_jxyx.png",
                                scaleY: 1,
                                scaleX: 1,
                                pivotY: 47,
                                pivotX: 105,
                                height: 93,
                                centerY: 30,
                                centerX: 0
                            },
                            compId: 2985
                        }, {
                            type: "Button",
                            props: {
                                visible: !1,
                                var: "btnExit3",
                                top: 110,
                                stateNum: 1,
                                skin: "MainUI/icon endgame.png",
                                right: 40
                            },
                            compId: 2733
                        }, {
                            type: "Button",
                            props: {
                                width: 100,
                                visible: !1,
                                var: "btnMoreGame3",
                                top: 310,
                                stateNum: 1,
                                skin: "MainUI/IconAtlas_58.png",
                                right: 71,
                                height: 100
                            },
                            compId: 2994
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            var: "panelLoading",
                            presetID: 1,
                            y: 0,
                            x: 0,
                            visible: !1,
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            isPresetRoot: !0
                        },
                        compId: 2773,
                        child: [{
                            type: "Image",
                            props: {
                                
                                skin: "LoadBg.png",
                                width:3000,
                                height:3000,
                                x:0,
                                y:0
                                
                            },
                            compId: 2974
                        }
                        , 
                        {
                            type: "Image",
                            props: {
                                var: "Logo",
                                skin: "logo(4).png",
                                presetID: 3,
                                pivotY: 161,
                                pivotX: 111,
                                centerY: -150,
                                centerX: -3
                            },
                            compId: 2973
                        },
                        
                        {
                            type: "Image",
                            props: {
                                width: 201,
                                var: "imgWaitModel",
                                skin: "MainUI/car.png",
                                scaleX: -1,
                                presetID: 3,
                                pivotY: 161,
                                pivotX: 111,
                                height: 79,
                                scaleX:0.8,
                                scaleY:0.8,
                                centerY: 100,
                                centerX: -3
                            },
                            compId: 2973
                        }, {
                            type: "Label",
                            props: {
                                text: "Loading",
                                presetID: 4,
                                fontSize: 40,
                                centerY: 220,
                                centerX: 0,
                                align: "center",
                                width: 300,
                                height: 86,
                                font: "Microsoft YaHei",
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 2976
                        }, {
                            type: "Button",
                            props: {
                                presetID: 5,
                                top: 0,
                                skin: "",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 2977
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            y: 0,
                            x: 0,
                            visible: !1,
                            var: "panelBackMat2",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 2695,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                top: 0,
                                skin: "MainUI/bbgg.png",
                                right: 0,
                                left: 0,
                                bottom: 0,
                                alpha: 1,
                                sizeGrid: "20,16,16,24"
                            },
                            compId: 2696
                        }, {
                            type: "List",
                            props: {
                                width: 1280,
                                visible: !0,
                                var: "listBackMat2",
                                top: 89,
                                spaceY: 50,
                                spaceX: 80,
                                right: 0,
                                repeatY: 2,
                                left: 0,
                                height: 631,
                                bottom: 0
                            },
                            compId: 2697,
                            child: [{
                                type: "Box",
                                props: {
                                    y: -25,
                                    x: -1,
                                    width: 150,
                                    scaleY: 1.65,
                                    scaleX: 1.65,
                                    name: "render",
                                    height: 218
                                },
                                compId: 2698,
                                child: [{
                                    type: "Image",
                                    props: {
                                        width: 125,
                                        skin: "MainUI/kuang2.png",
                                        pivotY: 89,
                                        pivotX: 82,
                                        name: "bg",
                                        height: 155,
                                        centerY: 10,
                                        centerX: 0
                                    },
                                    compId: 2699
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 185,
                                        x: 76,
                                        width: 718,
                                        visible: !0,
                                        valign: "middle",
                                        strokeColor: "#000000",
                                        scaleY: .175,
                                        scaleX: .175,
                                        pivotY: 108,
                                        pivotX: 359,
                                        overflow: "hidden",
                                        name: "title",
                                        height: 144,
                                        fontSize: 120,
                                        color: "#000000",
                                        align: "center"
                                    },
                                    compId: 2701
                                }, {
                                    type: "Clip",
                                    props: {
                                        width: 119,
                                        scaleY: 1,
                                        scaleX: 1,
                                        pivotY: 58,
                                        pivotX: 61,
                                        name: "iconclip",
                                        height: 115,
                                        centerY: -6,
                                        centerX: 0
                                    },
                                    compId: 2702
                                }]
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 300,
                                var: "btnCloseBackMat2",
                                top: 5,
                                stateNum: 1,
                                skin: "MainUI/fanhui.png",
                                scaleY: .8,
                                scaleX: .8,
                                pivotY: 52,
                                pivotX: 130,
                                left: 66,
                                height: 104
                            },
                            compId: 2705
                        }, {
                            type: "Button",
                            props: {
                                var: "btnBackMat2RandOne",
                                stateNum: 1,
                                skin: "MainUI/md_mfsw.png",
                                scaleY: .8,
                                scaleX: .8,
                                pivotY: 60,
                                pivotX: 161,
                                centerX: 0,
                                bottom: 80
                            },
                            compId: 2978
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                top: 5,
                                skin: "MainUI/hot.png",
                                centerX: 0
                            },
                            compId: 2992
                        }]
                    }, {
                        type: "Panel",
                        props: {
                            visible: !1,
                            var: "panelBackMat1",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 2682,
                        child: [{
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "MainUI/bbgg.png",
                                right: 0,
                                left: 0,
                                bottom: 0,
                                alpha: 1,
                                sizeGrid: "20,16,16,24"
                            },
                            compId: 2683
                        }, {
                            type: "List",
                            props: {
                                visible: !0,
                                var: "listBackMat1",
                                top: 0,
                                spaceY: 130,
                                spaceX: 100,
                                right: 0,
                                repeatY: 2,
                                pivotY: 304,
                                pivotX: 660,
                                left: 0,
                                bottom: 0
                            },
                            compId: 2689,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 26,
                                    x: -1,
                                    width: 150,
                                    scaleY: 1.85,
                                    scaleX: 1.85,
                                    name: "render",
                                    height: 196
                                },
                                compId: 2690,
                                child: [{
                                    type: "Image",
                                    props: {
                                        width: 125,
                                        skin: "MainUI/kuang2.png",
                                        pivotY: 89,
                                        pivotX: 82,
                                        name: "bg",
                                        height: 163,
                                        centerY: 6,
                                        centerX: 0
                                    },
                                    compId: 2691
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 170,
                                        x: 75,
                                        width: 718,
                                        visible: !0,
                                        valign: "middle",
                                        strokeColor: "#000000",
                                        scaleY: .175,
                                        scaleX: .175,
                                        pivotY: 108,
                                        pivotX: 359,
                                        overflow: "hidden",
                                        name: "title",
                                        height: 189,
                                        fontSize: 120,
                                        color: "#000000",
                                        bold: !1,
                                        align: "center"
                                    },
                                    compId: 2693
                                }, {
                                    type: "Clip",
                                    props: {
                                        width: 114,
                                        scaleY: 1,
                                        scaleX: 1,
                                        pivotY: 60,
                                        pivotX: 57,
                                        name: "iconclip",
                                        height: 119,
                                        centerY: -10,
                                        centerX: 0
                                    },
                                    compId: 2694
                                }]
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 275,
                                var: "btnCloseBackMat1",
                                stateNum: 1,
                                skin: "MainUI/dc_jxyx.png",
                                scaleY: .8,
                                scaleX: .8,
                                pivotY: 60,
                                pivotX: 161,
                                height: 124,
                                centerX: 0,
                                bottom: 80
                            },
                            compId: 2684
                        }, {
                            type: "Image",
                            props: {
                                top: 5,
                                skin: "MainUI/hot.png",
                                centerX: 0
                            },
                            compId: 2989
                        }]
                    }],
                    loadList: ["MainUI/BGhei.png", "MainUI/dc_d32.png", "MainUI/tuceng41.png", "", "", "", "MainUI/IconAtlas_13.png", "MainUI/IconAtlas_33.png", "MainUI/font1.png", "", "IconAtlas_39.png", "MainUI/IconAtlas_58.png", "MainUI/trophies.png", "MainUI/FreeCoin_fb.png", "MainUI/Scene01Tip.png", "MainUI/property.png", "MainUI/icon endgame.png", "BeginChoose.prefab", "MainUI/stage_clear$bar.png", "MainUI/carshop_btn.png", "MainUI/stage_clear.png", "MainUI/zuoyouIn2.png", "MainUI/zuoyouIn.png", "MainUI/shacheEnteree.png", "", "", "MainUI/youmen2.png", "MainUI/F10.png", "MainUI/F3.png", "MainUI/F4.png", "MainUI/F5.png", "MainUI/F6.png", "MainUI/F7.png", "MainUI/F8.png", "MainUI/F9.png", "MainUI/pause.png", "MainUI/power.png", "MainUI/flash.png", "MainUI/图层 2.png", "MainUI/图层 3.png", "MainUI/3.png", "", "MainUI/bg_shop.png", "MainUI/carshop_select.png", "MainUI/Icon_video.png", "MainUI/dc_jxyx.png", "Panel.prefab", "MainUI/car.png", "MainUI/bbgg.png", "MainUI/kuang2.png", "MainUI/fanhui.png", "MainUI/md_mfsw.png", "MainUI/hot.png"],
                    loadList3D: []
                }, t;
            }(Laya.View);
            e.GameUI = t, n("ui.GameUI", t);
            var a = function (e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                }, t.uiView = {
                    type: "View",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        height: 1280
                    },
                    compId: 2,
                    child: [{
                        type: "Box",
                        props: {
                            y: -5,
                            x: 1,
                            width: 720,
                            name: "LoadPanel",
                            height: 1280
                        },
                        compId: 4
                    }],
                    loadList: [],
                    loadList3D: []
                }, t;
            }(Laya.View);
            e.LoadUI = a, n("ui.LoadUI", a);
        }(a.ui || (a.ui = {}));
    }, {}]
}, {}, [21]);