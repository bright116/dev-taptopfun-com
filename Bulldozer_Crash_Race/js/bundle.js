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
window["GameScore"] = 0;
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
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./CarGame"), r = e("../DanceBall/GameData"), s = e("../Tools/PlayerPrefsTool"), l = function () {
            function e() { }
            return e.Show = function () {
                i.default._instance.currentCamera.nearPlane = .01, i.default._instance.currentCamera.farPlane = 15,
                    i.default._instance.currentGameScene.enableFog = !0, this.CreateChoose(), this.m_Cars = [],
                    this.m_Cars.push(this.m_Choose.getChildByName("Player0")), this.m_Cars.push(this.m_Choose.getChildByName("Player1")),
                    this.m_Cars.push(this.m_Choose.getChildByName("Player2")), this.m_Cars.push(this.m_Choose.getChildByName("Player3")),
                    this.m_Cars.push(this.m_Choose.getChildByName("Player4")), this.m_Cars.push(this.m_Choose.getChildByName("Player5")),
                    this.m_Cars.push(this.m_Choose.getChildByName("Player6")), this.m_Cars.push(this.m_Choose.getChildByName("Player7")),
                    this.m_Cars.push(this.m_Choose.getChildByName("Player8"));
                for (var t = 0; t < this.m_Cars.length; t++) t != this.m_ChooseIndex && (this.m_Cars[t].active = !1);
                Laya.timer.clearAll(this), Laya.timer.loop(1, this, function () {
                    e.Rotate();
                }), this.UpdateCurrentCar();
            }, e.ChooseFinish = function () {
                this.m_Choose.active = !1, o.default.Init(this.m_ChooseIndex);
            }, e.Rotate = function () {
                if (this.m_Choose && this.m_Choose.active) for (var e = 0; e < this.m_Cars.length; e++) this.m_Cars[e].transform && (this.m_Cars[e].transform.rotationEuler = new Laya.Vector3(this.m_Cars[e].transform.rotationEuler.x, this.m_Cars[e].transform.rotationEuler.y + .15, this.m_Cars[e].transform.rotationEuler.z));
            }, e.CreateChoose = function () {
                var e = n.default.CloneModel("Choose", i.default._instance.currentGameScene);
                e.transform.position = new Laya.Vector3(.1, .3, -.5), this.m_Choose = e;
            }, e.LastCar = function () {
                this.m_ChooseIndex--, this.m_ChooseIndex < 0 && (this.m_ChooseIndex = this.m_Cars.length - 1);
                for (e = 0; e < this.m_Cars.length; e++) e != this.m_ChooseIndex ? this.m_Cars[e].active = !1 : this.m_Cars[e].active = !0;
                for (var e = 0; e < this.m_Cars.length; e++) this.m_Cars[e].transform && (this.m_Cars[e].transform.rotationEuler = new Laya.Vector3(this.m_Cars[e].transform.rotationEuler.x, 180, this.m_Cars[e].transform.rotationEuler.z));
                this.UpdateCurrentCar();
            }, e.NextCar = function () {
                this.m_ChooseIndex++, this.m_ChooseIndex > this.m_Cars.length - 1 && (this.m_ChooseIndex = 0);
                for (e = 0; e < this.m_Cars.length; e++) e != this.m_ChooseIndex ? this.m_Cars[e].active = !1 : this.m_Cars[e].active = !0;
                for (var e = 0; e < this.m_Cars.length; e++) this.m_Cars[e].transform && (this.m_Cars[e].transform.rotationEuler = new Laya.Vector3(this.m_Cars[e].transform.rotationEuler.x, 180, this.m_Cars[e].transform.rotationEuler.z));
                this.UpdateCurrentCar();
            }, e.UpdateCurrentCar = function () {
                s.default.GetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), 0) >= r.default.Data_ADUnlockTime[this.m_ChooseIndex] ?
                    i.default._instance.UpdateCarChoose(!0, (50 * this.m_ChooseIndex).toString(), this.m_ChooseIndex) :
                    i.default._instance.UpdateCarChoose(!1, (50 * this.m_ChooseIndex).toString(), this.m_ChooseIndex);
            }, e.UnlockCar = function () {
                s.default.SetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), s.default.GetInt("CarUnlockTime" + this.m_ChooseIndex.toString(), 0) + 1),
                    this.UpdateCurrentCar();
            }, e.UnlockCarIndex = function (ChooseIndex) {
                s.default.SetInt("CarUnlockTime" + ChooseIndex, r.default.Data_ADUnlockTime[ChooseIndex] + 1),
                    this.UpdateCurrentCar();
            }, e.m_Cars = [], e.m_ChooseIndex = 0, e;
        }();
        a.default = l;
    }, {
        "../DanceBall/GameData": 6,
        "../GameScene": 8,
        "../Tools/ModelManager": 14,
        "../Tools/PlayerPrefsTool": 15,
        "./CarGame": 2
    }],
    2: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ModelManager"), i = e("../GameScene"), o = e("./CarPlayer"), r = e("../Tools/RandTool"), s = e("../DanceBall/GameData"), l = e("../Tools/PlayerPrefsTool"), d = e("./CarChoose"), c = e("./CarNpc"), h = e("../Tools/WxTool"), u = function () {
            function e() { }
            return e.Init = function (e) {
                i.default._instance.currentCamera.farPlane = 20, i.default._instance.currentGameScene.enableFog = !0,
                    i.default._instance.currentGameScene.fogColor = new Laya.Vector3(.64, .85, .93),
                    i.default._instance.currentGameScene.fogStart = 0, i.default._instance.currentGameScene.fogRange = 20,
                    this.m_CurrentCarIndex = e, this.m_CurrentCoins = [], this.m_CurrentRoadIndex = 0,
                    this.m_RoadCreateIndex = 0, this.m_Player = null, this.m_IsGameWin = !1, this.m_IsGameLose = !1,
                    this.m_IsGameStart = !1, this.m_SceneIndex = l.default.GetInt("Level", 0) % 3, this.m_CurrentRoadIndex = 0,
                    this.m_Roads = [], this.m_NPCs = [], this.m_NPCSpeeds = [], this.m_NPCWheels = [],
                    this.m_OverTakingCarsIndex = [], this.m_NPCProperties = [], this.CreateCar(), this.CreateLevel();
            }, e.GameWin = function () {
                i.default._instance.GameWin(), this.m_Finish.active = !1;
            }, e.GameLose = function () {
                i.default._instance.GameLose();
            }, e.GameStart = function () {
                Laya.SoundManager.playSound("Sound/dh.mp3", 1), this.m_IsGameStart = !0;
            }, e.CreateLevel = function () {
                for (var e = 0; e < 5; e++) this.CreateRoad();
                this.CreateNPCCar(l.default.GetInt("Level", 0));
            }, e.CreateNPCCar = function (e) {
                var t = 3, a = 2 * e + 9;
                a > 50 && (a = 50);
                var o = .7;
                s.default.Data_CarSpeed[d.default.m_ChooseIndex] < .7 ? o = .65 : s.default.Data_CarSpeed[d.default.m_ChooseIndex] < .85 ? o = .6 : s.default.Data_CarSpeed[d.default.m_ChooseIndex] < 1 && (o = .55);
                for (var l = [this.m_Player.GetProMaxSpeed() * r.default.RandNumber(.5, o), this.m_Player.GetProMaxSpeed() * r.default.RandNumber(.5, o), this.m_Player.GetProMaxSpeed() * r.default.RandNumber(.5, o), this.m_Player.GetProMaxSpeed() * r.default.RandNumber(.5, o)], h = [-.5, -.15, .15, .5], u = 0; u < a; u++) {
                    var f = 0;
                    f = this.LastRandX == h[0] ? r.default.RandItem([h[1], h[2], h[3]]) : this.LastRandX == h[1] ? r.default.RandItem([h[0], h[2], h[3]]) : this.LastRandX == h[2] ? r.default.RandItem([h[0], h[1], h[3]]) : this.LastRandX == h[2] ? r.default.RandItem([h[0], h[1], h[2]]) : r.default.RandItem(h),
                        this.LastRandX = f;
                    (p = n.default.CloneModelByParent("NPC", "NPC" + r.default.RandNumberINT(0, 7).toString(), i.default._instance.currentGameScene)).transform.position = new Laya.Vector3(f, 0, t),
                        t += r.default.RandNumber(s.default.Setting_MinNPCDis, s.default.Setting_MaxNPCDis),
                        this.m_NPCs.push(p), this.m_OverTakingCarsIndex.push(!1);
                    var m = new c.default();
                    m.speed = l[h.indexOf(f)], this.m_NPCProperties.push(m), this.m_NPCWheels.push(p.getChildByName("KoloPL")),
                        this.m_NPCWheels.push(p.getChildByName("KoloPP")), this.m_NPCWheels.push(p.getChildByName("KoloTL")),
                        this.m_NPCWheels.push(p.getChildByName("KoloTP"));
                }
                var p = n.default.CloneModel("Finish", i.default._instance.currentGameScene);
                p.transform.position = new Laya.Vector3(0, 0, t + 5), this.m_Finish = p;
            }, e.CreateRoad = function () {
                var e = n.default.CloneModelByParent("Scene" + this.m_SceneIndex.toString(), r.default.RandNumberINT(0, 4).toString(), i.default._instance.currentGameScene);
                e.transform.position = new Laya.Vector3(0, 0, 7.9 * this.m_CurrentRoadIndex), this.m_CurrentRoadIndex++,
                    this.m_Roads.push(e);
            }, e.CreateCar = function () {
                var e = n.default.CloneModelByParent("Player", "Player" + this.m_CurrentCarIndex.toString(), i.default._instance.currentGameScene), t = r.default.RandItem([-.5, -.15, .15, .5]);
                e.transform.position = new Laya.Vector3(t, 0, 0), e.addComponent(o.default), this.m_Player = e.getComponent(o.default),
                    this.m_Player.Init();
            }, e.CheckRoad = function () {
                this.m_Player && this.m_Player.m_Root.transform.position.z >= this.m_Roads[1].transform.position.z && (this.m_Roads[0].destroy(),
                    this.m_Roads[0] = this.m_Roads[1], this.m_Roads[1] = this.m_Roads[2], this.m_Roads[2] = this.m_Roads[3],
                    this.m_Roads[3] = this.m_Roads[4], this.m_Roads.splice(4, 5), this.CreateRoad());
            }, e.MoveNpc = function () {
                if (this.m_IsGameStart && !this.m_IsGameLose && !this.m_IsGameWin) {
                    for (var e = 0, t = 0; t < this.m_NPCs.length; t++) this.m_NPCProperties[t].isHit || this.m_NPCProperties[t].isOverTake || (Math.abs(this.m_NPCs[t].transform.position.z - this.m_Player.m_Root.transform.position.z) < 20 ? (this.m_NPCs[t].active || (this.m_NPCs[t].active = !0),
                        this.m_NPCs[t].transform.translate(new Laya.Vector3(0, 0, this.m_NPCProperties[t].speed))) : (this.m_NPCs[t].active = !1,
                            Math.abs(this.m_NPCs[e].transform.position.z - this.m_Player.m_Root.transform.position.z) < 20 && this.m_NPCs[t].transform.translate(new Laya.Vector3(0, 0, this.m_NPCProperties[t].speed)))),
                        this.m_NPCProperties[t].isHit && (this.m_NPCProperties[t].isBoom || (this.m_NPCs[t].transform.position = new Laya.Vector3(this.m_NPCs[t].transform.position.x + .01 * this.m_NPCProperties[t].horizontalpercent, this.m_NPCs[t].transform.position.y + this.m_NPCProperties[t].gravity, this.m_NPCs[t].transform.position.z + (this.m_Player.m_currentForwardSpeed + this.m_Player.m_PushSpeed) * this.m_NPCProperties[t].hitforce)),
                            this.m_NPCProperties[t].isBoom || this.m_NPCs[t].transform.rotate(new Laya.Vector3(this.m_NPCProperties[t].hitRotate, 0, this.m_NPCProperties[t].horizontalRotate)),
                            this.m_NPCProperties[t].gravity -= 75e-5, this.m_NPCProperties[t].hitforce > 1.3 && (this.m_NPCProperties[t].hitforce -= .1),
                            this.m_NPCProperties[t].gravity < -.025 && !this.m_NPCProperties[t].isBoom && (h.default.vibrate(40),
                                Laya.SoundManager.playSound("Sound/boom" + r.default.RandItem(["1", "2"]) + ".mp3", 1),
                                this.m_NPCProperties[t].isBoom = !0, this.m_NPCs[t].getChildAt(0).active = !1, this.m_NPCs[t].getChildAt(1).active = !1,
                                this.m_NPCs[t].getChildAt(2).active = !1, this.m_NPCs[t].getChildAt(3).active = !1,
                                this.m_NPCs[t].getChildAt(4).active = !1, this.m_NPCs[t].getChildAt(5).active = !0)),
                        this.m_NPCs[e].transform.position.z < this.m_NPCs[t].transform.position.z && (e = t);
                    for (t = 0; t < this.m_NPCWheels.length; t++) this.m_NPCWheels[t].transform.position.z - this.m_Player.m_Root.transform.position.z < 15 && this.m_NPCWheels[t].transform.rotate(new Laya.Vector3(1.5, 0, 0));
                    this.m_Finish.transform.position = new Laya.Vector3(this.m_Finish.transform.position.x, this.m_Finish.transform.position.y, this.m_NPCs[e].transform.position.z + 2.5);
                }
            }, e.CollisionCheck = function () {
                if (!e.m_IsGameLose && !e.m_IsGameWin && this.m_Player.m_Root) {
                    for (var t = 0; t < this.m_NPCs.length; t++) if (!this.m_NPCProperties[t].isHit) {
                        var a = new Laya.Vector3(.2, 0, .5), n = new Laya.Vector3(.2, 0, .7), i = .5 * a.x + .5 * n.x, o = .5 * a.z + .5 * n.z, s = Math.abs(this.m_Player.m_Root.transform.position.x - this.m_NPCs[t].transform.position.x), l = Math.abs(this.m_Player.m_Root.transform.position.z - this.m_NPCs[t].transform.position.z);
                        s <= i && l <= o && (h.default.vibrate(70), Laya.SoundManager.playSound("Sound/hit" + r.default.RandItem(["1", "2", "3"]) + ".mp3", 1),
                            this.m_NPCProperties[t].isHit = !0, this.m_NPCProperties[t].horizontalpercent = (this.m_NPCs[t].transform.position.x - this.m_Player.m_Root.transform.position.x) / .15,
                            this.m_NPCProperties[t].hitRotate = r.default.RandNumber(.1, .13), this.m_NPCProperties[t].horizontalRotate = r.default.RandNumber(-.1, .1),
                            this.m_NPCProperties[t].hitforce = r.default.RandNumber(1.8, 2.3), this.m_NPCProperties[t].gravity = r.default.RandNumber(.03, .06),
                            this.m_Player.AddPushTimer()), 0 == this.m_NPCProperties[t].isOverTake && this.m_Player.m_Root.transform.position.z > this.m_NPCs[t].transform.position.z + .6 && (this.m_NPCProperties[t].isOverTake = !0);
                    }
                    this.m_Player.m_Root.transform.position.z > this.m_Finish.transform.position.z && this.m_Player.TriWin();
                }
            }, e.m_IsGameLose = !1, e.m_IsGameWin = !1, e.m_IsGameStart = !1, e.m_RoadCreateIndex = 0,
                e.m_CurrentCoins = [], e.m_CurrentCarIndex = 0, e.m_SceneIndex = 2, e.m_CurrentRoadIndex = 0,
                e.m_Roads = [], e.m_NPCs = [], e.m_NPCSpeeds = [], e.m_NPCWheels = [], e.m_NPCProperties = [],
                e.m_OverTakingCarsIndex = [], e.LastRandX = -1, e;
        }();
        a.default = u;
    }, {
        "../DanceBall/GameData": 6,
        "../GameScene": 8,
        "../Tools/ModelManager": 14,
        "../Tools/PlayerPrefsTool": 15,
        "../Tools/RandTool": 16,
        "../Tools/WxTool": 20,
        "./CarChoose": 1,
        "./CarNpc": 3,
        "./CarPlayer": 4
    }],
    3: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            return function () {
                this.isHit = !1, this.isOverTake = !1, this.isBoom = !1, this.speed = 0, this.gravity = .04,
                    this.hitforce = 2.3, this.horizontalpercent = 1, this.horizontalRotate = .05, this.hitRotate = -.12,
                    this.hitdir = new Laya.Vector3(0, 0, 0);
            };
        }();
        a.default = n;
    }, {}],
    4: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("../DanceBall/GameData"), i = e("../GameScene"), o = e("./CarGame"), r = e("../DanceBall/EffectManager"),
            s = e("../Tools/PlayerPrefsTool"), l = e("../Tools/WxTool"), d = e("./CarChoose"), c = e("../Tools/ModelManager"), h = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.m_Wheels = [], t.m_IsInputForward = !1, t.m_IsInputHorizantol = 0, t.m_IsInputBack = 0,
                        t.m_currentForwardSpeed = 0, t.m_PushSaveTimer = 0, t.m_PushSpeedTimer = 0, t.m_PushSpeed = 0,
                        t.m_GetCoins = 0, t.m_hitTimeScaleTimer = 0, t.soundindex = 0, t.looptimer = 0,
                        t.lastSpeed = 0, t;
                }
                return __extends(t, e), t.prototype.Init = function () {
                    this.m_Root = this.owner, this.m_CameraFollow = this.m_Root.getChildByName("CameraPoint"),
                        i.default._instance.currentCamera.transform.position = this.m_CameraFollow.transform.position,
                        this.m_Wheels.push(this.m_Root.getChildByName("Wheel1")), this.m_Wheels.push(this.m_Root.getChildByName("Wheel2")),
                        this.m_Wheels.push(this.m_Root.getChildByName("Wheel3")), this.m_Wheels.push(this.m_Root.getChildByName("Wheel4")),
                        this.m_EffectPush = this.m_Root.getChildByName("Effect_Push"), this.m_Sky = c.default.CloneModel("Skybox", i.default._instance.currentGameScene),
                        this.m_Sky.transform.position = new Laya.Vector3(0, this.m_Sky.transform.position.y, this.m_Root.transform.position.z),
                        this.m_currentForwardSpeed = .2 * n.default.Setting_CarForwardMaxSpeed;
                }, t.prototype.onUpdate = function () {
                    this.m_hitTimeScaleTimer, o.default.CollisionCheck(), o.default.CheckRoad(), o.default.MoveNpc(),
                        this.m_PushSpeedTimer > 0 ? (this.m_PushSpeed < n.default.Setting_PushSpeed && (this.m_PushSpeed += 2 * this.GetProAddSpeed()),
                            this.m_PushSpeedTimer -= Laya.timer.delta / 1e3, this.m_PushSpeedTimer <= 0 && (this.m_EffectPush.active = !1),
                            i.default._instance.UpdatePushButton(this.m_PushSpeedTimer / n.default.Setting_PushTimeMax)) :
                            this.m_PushSpeed > 0 ? this.m_PushSpeed -= 2 * this.GetProAddSpeed() : this.m_PushSpeed = 0,
                        this.m_IsInputForward || this.m_PushSpeedTimer > 0 ? o.default.m_IsGameLose || o.default.m_IsGameWin || this.m_currentForwardSpeed < this.GetProMaxSpeed() && (this.m_currentForwardSpeed += this.GetProAddSpeed()) : this.m_IsInputBack ? (o.default.m_IsGameLose || o.default.m_IsGameWin || this.m_currentForwardSpeed > .2 * this.GetProMaxSpeed() && (this.m_currentForwardSpeed -= 2 * this.GetProStop()),
                            this.m_PushSpeedTimer = 0) : this.m_currentForwardSpeed > .2 * this.GetProMaxSpeed() && (this.m_currentForwardSpeed -= this.GetProAddSpeed()),
                        o.default.m_IsGameStart && (this.m_Root.transform.position = new Laya.Vector3(this.m_Root.transform.position.x, this.m_Root.transform.position.y, this.m_Root.transform.position.z + this.m_currentForwardSpeed + this.m_PushSpeed)),
                        o.default.m_IsGameLose || o.default.m_IsGameWin || this.Rotate(!1), i.default._instance.currentCamera.fieldOfView = 60 + 20 * ((this.m_currentForwardSpeed + this.m_PushSpeed) / this.GetProMaxSpeed() + n.default.Setting_PushSpeed),
                        i.default._instance.UpdateDashSpeed(this.m_currentForwardSpeed), o.default.m_IsGameStart && (this.m_currentForwardSpeed > .001 || this.m_currentForwardSpeed < -.001) && (this.m_Wheels[0].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.localRotationEuler.x + this.m_currentForwardSpeed / this.GetProMaxSpeed() * 15, this.m_Wheels[0].transform.localRotationEuler.y, this.m_Wheels[0].transform.localRotationEuler.z),
                            this.m_Wheels[1].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.localRotationEuler.x + this.m_currentForwardSpeed / this.GetProMaxSpeed() * 15, this.m_Wheels[1].transform.localRotationEuler.y, this.m_Wheels[1].transform.localRotationEuler.z),
                            this.m_Wheels[2].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[2].transform.localRotationEuler.x + this.m_currentForwardSpeed / this.GetProMaxSpeed() * 15, this.m_Wheels[2].transform.localRotationEuler.y, this.m_Wheels[2].transform.localRotationEuler.z),
                            this.m_Wheels[3].transform.localRotationEuler = new Laya.Vector3(this.m_Wheels[3].transform.localRotationEuler.x + this.m_currentForwardSpeed / this.GetProMaxSpeed() * 15, this.m_Wheels[3].transform.localRotationEuler.y, this.m_Wheels[3].transform.localRotationEuler.z)),
                        this.m_Sky.transform.position = new Laya.Vector3(0, this.m_Sky.transform.position.y, this.m_Root.transform.position.z);
                }, t.prototype.onLateUpdate = function () {
                    var e = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.lerp(i.default._instance.currentCamera.transform.position, new Laya.Vector3(this.m_Root.transform.position.x, this.m_Root.transform.position.y, this.m_Root.transform.position.z - .7), .02, e),
                        i.default._instance.currentCamera.transform.position = new Laya.Vector3(e.x, this.m_Root.transform.position.y + .35, this.m_Root.transform.position.z - .7);
                }, t.prototype.Rotate = function (e) {
                    o.default.m_IsGameStart && (1 == this.m_IsInputHorizantol ? this.m_Root.transform.rotationEuler.y > -20 && (this.m_Root.transform.rotationEuler = new Laya.Vector3(this.m_Root.transform.rotationEuler.x, this.m_Root.transform.rotationEuler.y - 1, this.m_Root.transform.rotationEuler.z),
                        this.m_Wheels[0].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.rotationEuler.x, this.m_Wheels[0].transform.rotationEuler.y - 1, this.m_Wheels[0].transform.rotationEuler.z),
                        this.m_Wheels[1].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.rotationEuler.x, this.m_Wheels[1].transform.rotationEuler.y - 1, this.m_Wheels[1].transform.rotationEuler.z)) : -1 == this.m_IsInputHorizantol ? this.m_Root.transform.rotationEuler.y < 20 && (this.m_Root.transform.rotationEuler = new Laya.Vector3(this.m_Root.transform.rotationEuler.x, this.m_Root.transform.rotationEuler.y + 1, this.m_Root.transform.rotationEuler.z),
                            this.m_Wheels[0].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.rotationEuler.x, this.m_Wheels[0].transform.rotationEuler.y + 1, this.m_Wheels[0].transform.rotationEuler.z),
                            this.m_Wheels[1].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.rotationEuler.x, this.m_Wheels[1].transform.rotationEuler.y + 1, this.m_Wheels[1].transform.rotationEuler.z)) : this.m_Root.transform.rotationEuler.y > .5 ? (this.m_Root.transform.rotationEuler = new Laya.Vector3(this.m_Root.transform.rotationEuler.x, this.m_Root.transform.rotationEuler.y - 1, this.m_Root.transform.rotationEuler.z),
                                this.m_Wheels[0].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.rotationEuler.x, this.m_Wheels[0].transform.rotationEuler.y - 1, this.m_Wheels[0].transform.rotationEuler.z),
                                this.m_Wheels[1].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.rotationEuler.x, this.m_Wheels[1].transform.rotationEuler.y - 1, this.m_Wheels[1].transform.rotationEuler.z)) : this.m_Root.transform.rotationEuler.y < -.5 ? (this.m_Root.transform.rotationEuler = new Laya.Vector3(this.m_Root.transform.rotationEuler.x, this.m_Root.transform.rotationEuler.y + 1, this.m_Root.transform.rotationEuler.z),
                                    this.m_Wheels[0].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.rotationEuler.x, this.m_Wheels[0].transform.rotationEuler.y + 1, this.m_Wheels[0].transform.rotationEuler.z),
                                    this.m_Wheels[1].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.rotationEuler.x, this.m_Wheels[1].transform.rotationEuler.y + 1, this.m_Wheels[1].transform.rotationEuler.z)) : (this.m_Root.transform.rotationEuler = new Laya.Vector3(this.m_Root.transform.rotationEuler.x, 0, this.m_Root.transform.rotationEuler.z),
                                        this.m_Wheels[0].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[0].transform.rotationEuler.x, 0, this.m_Wheels[0].transform.rotationEuler.z),
                                        this.m_Wheels[1].transform.rotationEuler = new Laya.Vector3(this.m_Wheels[1].transform.rotationEuler.x, 0, this.m_Wheels[1].transform.rotationEuler.z)),
                        (this.m_currentForwardSpeed > .001 || this.m_currentForwardSpeed < -.001) && (this.m_Root.transform.position.x + this.m_Root.transform.rotationEuler.y / 20 * this.GetProTurn() > .5 ? this.m_Root.transform.position = new Laya.Vector3(.5, this.m_Root.transform.position.y, this.m_Root.transform.position.z) : this.m_Root.transform.position.x + this.m_Root.transform.rotationEuler.y / 20 * this.GetProTurn() < -.5 ? this.m_Root.transform.position = new Laya.Vector3(-.5, this.m_Root.transform.position.y, this.m_Root.transform.position.z) : this.m_Root.transform.translate(new Laya.Vector3(this.m_Root.transform.rotationEuler.y / 20 * this.GetProTurn(), 0, 0))));
                }, t.prototype.SetInputForward = function (e) {
                    o.default.m_IsGameLose || o.default.m_IsGameWin ? this.m_IsInputForward = !1 : this.m_IsInputForward = e;
                }, t.prototype.SetInputHorizontal = function (e) {
                    o.default.m_IsGameLose || o.default.m_IsGameWin || (-2 == e && -1 == this.m_IsInputHorizantol ? this.m_IsInputHorizantol = 0 : 2 == e && 1 == this.m_IsInputHorizantol ? this.m_IsInputHorizantol = 0 : this.m_IsInputHorizantol = e);
                }, t.prototype.SetInputBack = function (e) {
                    o.default.m_IsGameLose || o.default.m_IsGameWin || (this.m_IsInputBack = e);
                }, t.prototype.PushSpeedTo = function () {
                    if (this.m_PushSpeedTimer > 0 || this.m_PushSaveTimer <= 0) {
                        return;
                    }
                    (this.m_PushSpeedTimer = this.m_PushSaveTimer,
                        this.m_PushSaveTimer = 0, this.m_EffectPush.active = !0, Laya.SoundManager.playSound("Sound/push.mp3", 1));
                }, t.prototype.AddPushTimer = function () {
                    window["GameScore"] += 10, i.default._instance.lab_score.text = "Score:" + window["GameScore"],
                        this.m_PushSpeedTimer > 0 || this.m_PushSaveTimer <= n.default.Setting_PushTimeMax && (this.m_PushSaveTimer += 1,//.1 * n.default.Setting_PushTimeMax,
                            i.default._instance.UpdatePushButton(this.m_PushSaveTimer / n.default.Setting_PushTimeMax));
                }, t.prototype.HitDead = function (e) {
                    o.default.m_IsGameLose || o.default.m_IsGameWin || (Laya.SoundManager.playSound("Sound/zc.mp3", 1),
                        this.m_currentForwardSpeed = .1 * -n.default.Setting_CarForwardMaxSpeed, this.m_PushSpeedTimer = 0,
                        this.m_PushSaveTimer = 0, this.SetInputBack(!1), this.SetInputForward(!1), l.default.vibrate(100),
                        o.default.m_IsGameLose = !0, o.default.GameLose());
                }, t.prototype.TriWin = function () {
                    o.default.m_IsGameWin || o.default.m_IsGameLose || (Laya.SoundManager.playSound("Sound/sl.mp3", 1),
                        l.default.vibrate(100), o.default.m_IsGameWin = !0, o.default.GameWin(), this.m_PushSpeedTimer = 0,
                        this.m_PushSaveTimer = 0, this.SetInputBack(!1), this.SetInputForward(!1));
                }, t.prototype.GetCoin = function (e) {
                    s.default.SetInt("Coin", s.default.GetInt("Coin") + 1), i.default._instance.ResetGamingUI(),
                        r.default.CreateEffect(i.default._instance.currentGameScene, "Effect_CoinGet", new Laya.Vector3(e.transform.position.x, e.transform.position.y, e.transform.position.z), 1),
                        this.m_GetCoins++, e.destroy();
                }, t.prototype.GetProAddSpeed = function () {
                    return n.default.Data_CarSpeed[d.default.m_ChooseIndex] * n.default.Setting_CarAddForwardSpeed;
                }, t.prototype.GetProMaxSpeed = function () {
                    return n.default.Setting_CarForwardMaxSpeed;
                }, t.prototype.GetProTurn = function () {
                    return n.default.Data_CarSpeed[d.default.m_ChooseIndex] * n.default.Setting_RotateSpeed;
                }, t.prototype.GetProStop = function () {
                    return n.default.Data_CarStop[d.default.m_ChooseIndex] * n.default.Setting_CarAddForwardSpeed;
                }, t;
            }(Laya.Script3D);
        a.default = h;
    }, {
        "../DanceBall/EffectManager": 5,
        "../DanceBall/GameData": 6,
        "../GameScene": 8,
        "../Tools/ModelManager": 14,
        "../Tools/PlayerPrefsTool": 15,
        "../Tools/WxTool": 20,
        "./CarChoose": 1,
        "./CarGame": 2
    }],
    5: [function (e, t, a) {
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
        "../Main": 9,
        "../Tools/ResPool": 17
    }],
    6: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.LoadLevelData = function () { }, e.BannerID = "",
                e.RewardID = "", e.IntersitialID = "",
                e.appkey = "", e.SoundVol = .15, e.Setting_CarForwardMaxSpeed = .1,
                e.Setting_CarAddForwardSpeed = 4e-4, e.Setting_RotateSpeed = .025, e.Setting_PushSpeed = .08,
                e.Setting_PushTimeMax = 6, e.Setting_MinNPCDis = 5, e.Setting_MaxNPCDis = 8, e.Setting_MinNPCDoubleDis = 3,
                e.Setting_MaxNPCDoubleDis = 5, e.Data_CarName = ["Snidget", "Slime", "Flash", "Monster", "Flame", "Minotaur", "Megalith", "Black Demon", "Master"],
                e.Data_CarSpeed = [.65, .7, .85, .9, .9, .9, 1, 1, 1], e.Data_CarTurn = [.85, .85, .85, .9, .9, 1, 1, .9, 1],
                e.Data_CarStop = [.65, .7, .7, .85, .8, .8, .9, .9, 1], e.Data_ADUnlockTime = [0, 1, 1, 1, 1, 2, 2, 2, 3],
                e.LevelData = [], e;
        }();
        a.default = n;
    }, {}],
    7: [function (e, t, a) {
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
    8: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./ui/layaMaxUI"), i = e("./Tools/ModelManager"), o = e("./Tools/PlayerPrefsTool"), r = e("./Tools/WxTool"), s = e("./Tools/SceneManager"), l = e("./Tools/RandTool"), d = e("./Tools/aldSDK"), c = e("./DanceBall/EffectManager"), h = e("./DanceBall/GameData"), u = e("./WxTool/WxADTool"), f = e("./Tools/BananaSDK"), m = e("./CarBasic/CarGame"), p = e("./CarBasic/CarChoose"), _ = e("./Tools/Common"), y = function (e) {
            function t() {
                var a = e.call(this) || this;
                return a.isBackLive = !1, a.currentRewardMessage = "", a.isSelectSongCold = !1,
                    a.isJumpmattotop = !1, a.isBackUpmattotop = !1, a.isBackDownmattotop = !1, t.randToTouch = l.default.RandNumber(.6, .85),
                    (t._instance = a).HideMat(), t.isSecondRound ? a.Init() : t.isSecondRound = !0,
                    a.InitUI(), a.btnForward.alpha = 1, a;
            }
            return __extends(t, e), t.prototype.Init = function () {
                this.currentGameScene = new Laya.Scene3D(), this.currentCamera = i.default.CloneModel("Camera", this.currentGameScene),
                    this.currentGameScene.ambientColor = new Laya.Vector3(.51, .56, .59), this.currentCamera.clearColor = new Laya.Vector4(.64, .85, .93, 0),
                    Laya.stage.addChild(this.currentGameScene), Laya.stage.setChildIndex(this.currentGameScene, 0);
                i.default.CloneModel("Light", this.currentGameScene).intensity = 1, c.default.EffectInit(this.currentGameScene),
                    p.default.Show();
            }, t.prototype.InitUI = function () {
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
                    this.btnPush.on(Laya.Event.CLICK, this, this.OnPushClick), t.AlredyKeyEvent || (t.AlredyKeyEvent = !0,
                        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp)),
                    this.ResetStartUI(),
                    f.default.ExposureMat("gamelist");
                this.btn_music.skin = window.WebAudioEngine.pause ? "MainUI/btn_sound_off.png" : "MainUI/btn_sound_on.png";
                this.btn_music.on(Laya.Event.CLICK, this, this.changeMusic)
            }, t.prototype.changeMusic = function (e) {
                window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                Laya.LocalStorage.setItem("Bulldozer-Crash-Race-musicstate", JSON.stringify(window.WebAudioEngine.pause));
                this.btn_music.skin = window.WebAudioEngine.pause ? "MainUI/btn_sound_off.png" : "MainUI/btn_sound_on.png";
            }, t.prototype.onKeyDown = function (e) {
                if (!m.default || !m.default.m_Player || !m.default.m_Player.SetInputForward) {
                    return;
                }
                38 == e.keyCode ? m.default.m_Player.SetInputForward(!0)
                    : 40 == e.keyCode ? m.default.m_Player.SetInputBack(!0)
                        : 37 == e.keyCode ? m.default.m_Player.SetInputHorizontal(-1)
                            : 39 == e.keyCode ? m.default.m_Player.SetInputHorizontal(1) :
                                Laya.Keyboard.SPACE == e.keyCode && this.OnPushClick();
            }, t.prototype.onKeyUp = function (e) {
                if (!m.default || !m.default.m_Player || !m.default.m_Player.SetInputForward) {
                    return;
                }
                38 == e.keyCode ? m.default.m_Player.SetInputForward(!1) :
                    40 == e.keyCode ? m.default.m_Player.SetInputBack(!1) :
                        37 == e.keyCode ? m.default.m_Player.SetInputHorizontal(-2) :
                            39 == e.keyCode ? m.default.m_Player.SetInputHorizontal(2) : e.keyCode;
            }, t.prototype.OnPushClick = function () {
                m.default.m_Player.PushSpeedTo();
            }, t.prototype.OnAddForceIn = function () {
                m.default.m_Player.SetInputForward(!0);
            }, t.prototype.OnAddForceOut = function () {
                m.default.m_Player.SetInputForward(!1);
            }, t.prototype.OnRotateForceRightIn = function () {
                m.default.m_Player.SetInputHorizontal(1);
            }, t.prototype.OnRotateForceLeftIn = function () {
                m.default.m_Player.SetInputHorizontal(-1);
            }, t.prototype.OnRotateForceOut = function () {
                m.default.m_Player.SetInputHorizontal(0);
            }, t.prototype.OnBackForceIn = function () {
                Laya.SoundManager.playSound("Sound/sc.mp3", 1), m.default.m_Player.SetInputBack(!0);
            }, t.prototype.OnBackForceOut = function () {
                m.default.m_Player.SetInputBack(!1);
            }, t.prototype.OnChooseLastClick = function () {
                Laya.SoundManager.playSound("Sound/qhcl.mp3", 1), p.default.LastCar();
            }, t.prototype.OnChooseNextClick = function () {
                Laya.SoundManager.playSound("Sound/qhcl.mp3", 1), p.default.NextCar();
            }, t.prototype.OnChoosePlayClick = function () {
                p.default.ChooseFinish();
            }, t.prototype.OnCoinUnlockClick = function () {
                o.default.GetInt("Coin", 0) >= 50 * p.default.m_ChooseIndex && (o.default.SetInt("Coin", o.default.GetInt("Coin", 0) - 50 * p.default.m_ChooseIndex),
                    p.default.UnlockCar(), this.ResetStartUI());
            }, t.prototype.OnADUnlockClick = function () {
                Laya.SoundManager.playSound("Sound/qhcl.mp3", 1), platform.getInstance().showReward(() => { p.default.UnlockCar(), r.default.ShowToast("unlock!") });
            }, t.prototype.OnStartGameClick = function () {
                _.default.OnStartGameClick();
            }, t.prototype.OnToTouchClick = function () {
                this.progressToTouch.value < .9 && (this.progressToTouch.value += .2, this.progressToTouch.value > t.randToTouch && 0 == t.isToTouch && (t.isToTouch = !0,
                    u.default.BombBannerSplit(this.btnToTouch, 2), Laya.timer.once(2e3, this, function () {
                        t._instance.StartGame();
                    })));
            }, t.prototype.OnPassEndClick = function () {
                platform.getInstance().showInterstitial(() => {
                    u.default.SwitchBanner(), s.default.ExitScene(this), s.default.LoadScene(t);
                })
            }, t.prototype.OnPauseClick = function () {
                m.default.m_IsGameStart && (platform.getInstance().showInterstitial(() => {
                    m.default.m_IsGameLose = !0, s.default.ExitScene(this),
                        s.default.LoadScene(t)
                }));
            }, t.prototype.OnRandOneMatClick = function () {

            }, t.prototype.OnADFiveGetCoinClick = function () {
                (o.default.SetInt("Coin", o.default.GetInt("Coin") + 4 * m.default.m_Player.m_GetCoins),
                    t._instance.OnPassEndClick(), r.default.ShowToast("金币翻倍成功！"));
            }, t.prototype.OnADPassLevelClick = function () {

                (o.default.SetInt("Level", o.default.GetInt("Level") + 1),
                    t._instance.OnPassEndClick(), r.default.ShowToast("跳过关卡成功！"));
            }, t.prototype.OnOpenBackMat1Click = function () {

            }, t.prototype.OnOpenBackMat2Click = function () {

            }, t.prototype.OnCloseBackMat1Click = function () {

            }, t.prototype.OnCloseBackMat2Click = function () {
                _.default.OnCloseBackMat2Click();
            }, t.prototype.ResetStartUI = function () {
                this.txtStartCoin.text = o.default.GetInt("Coin", 0).toString(), this.txtStartLeve.text = (o.default.GetInt("Level", 0) + 1).toString();
            }, t.prototype.ResetGamingUI = function () {
                this.txtGamingCoin.text = o.default.GetInt("Coin", 0).toString();
            }, t.prototype.StartGame = function () {
                window["GameScore"] = 0;
                0 == o.default.GetInt("Level", 0) ? t._instance.spr_tipMask.visible = !0 : t._instance.lab_tips.visible = !1;
                this.lab_pctips.visible = Laya.Browser.onPC ? true : false;
                d.default.AldRecord("正式开始游戏", "关卡", o.default.GetInt("Level").toString()), u.default.HideBanner(),
                    p.default.ChooseFinish(), this.ResetGamingUI(), this.panelStart.visible = !1, this.panelGaming.visible = !0,
                    this.lab_level.text = "Level " + (o.default.GetInt("Level") + 1), this.lab_score.text = "Score:0",
                    Laya.timer.once(500, this, function () {
                        Laya.SoundManager.playSound("Sound/count.mp3", 1), this.imgReadyCount.skin = "MainUI/3.png";
                    }), Laya.timer.once(1e3, this, function () {
                        Laya.SoundManager.playSound("Sound/count.mp3", 1), this.imgReadyCount.skin = "MainUI/2.png";
                    }), Laya.timer.once(1500, this, function () {
                        Laya.SoundManager.playSound("Sound/count.mp3", 1), this.imgReadyCount.skin = "MainUI/1.png";
                    }), Laya.timer.once(2e3, this, function () {
                        Laya.SoundManager.playSound("Sound/go.mp3", 1), this.imgReadyCount.skin = "MainUI/go.png",
                            0 == o.default.GetInt("Level", 0) ? (Laya.timer.once(500, this, function () {
                                t._instance.spr_tipMask.visible = !0, t._instance.imgReadyCount.visible = !1, t._instance.imgGuide.visible = !0;
                            }), Laya.timer.once(2e3, this, function () {
                                t._instance.lab_tips.visible = !0, t._instance.spr_tipMask.visible = !1,
                                    t._instance.imgGuide.visible = !1, m.default.GameStart(),
                                    Laya.timer.once(2e3, this, function () {
                                        t._instance.lab_tips.visible = !1;
                                    })
                            })) : (t._instance.spr_tipMask.visible = !1, Laya.timer.once(500, this, function () {
                                t._instance.imgReadyCount.visible = !1, m.default.GameStart();
                            }));
                    });
            }, t.prototype.UpdateCarChoose = function (e, t, index) {
                this.lab_tip.visible = false;
                e ? (this.btnADUnlock.visible = !1, this.btnCoinUnlock.visible = !1, this.txtCoinUnlock.text = t + " Coins",
                    this.btnStartGame.visible = !0, this.lab_tip.visible = !1) :
                    (this.btnADUnlock.visible = !0, this.btnCoinUnlock.visible = !0,
                        this.txtCoinUnlock.text = t + " Coins", this.btnStartGame.visible = !1, index == 1 ? (this.lab_tip.visible = true,
                            this.btnADUnlock.visible = !1, this.btnCoinUnlock.visible = !1, this.lab_tip.text = "Unlock by Level 3"
                        ) : index == 2 && (this.lab_tip.visible = true,
                            this.btnADUnlock.visible = !1, this.btnCoinUnlock.visible = !1, this.lab_tip.text = "Unlock by Level 5"
                        )), this.labelProCarName.text = h.default.Data_CarName[p.default.m_ChooseIndex],
                    this.progressProSpeed.value = h.default.Data_CarSpeed[p.default.m_ChooseIndex],
                    this.progressProTurn.value = h.default.Data_CarTurn[p.default.m_ChooseIndex], this.progressProStop.value = h.default.Data_CarStop[p.default.m_ChooseIndex],
                    this.labelADUnockTime.text = "unlock " + o.default.GetInt("CarUnlockTime" + p.default.m_ChooseIndex.toString(), 0) + "/" + h.default.Data_ADUnlockTime[p.default.m_ChooseIndex];
            }, t.prototype.UpdatePushButton = function (e) {
                this.clipPush.clipHeight = 142 * e, this.clipPush.clipHeight < 0 && (this.clipPush.clipHeight = 1);
            }, t.prototype.UpdateDashSpeed = function (e) {
                var t = (m.default.m_Player.m_currentForwardSpeed + m.default.m_Player.m_PushSpeed) / m.default.m_Player.GetProMaxSpeed() + h.default.Setting_PushSpeed;
                this.labelGameSpeed.text = parseInt((180 * t).toString()).toString(), this.imgDashRocker.rotation = 210 * t - 130;
            }, t.prototype.GameLose = function () {
                platform.getInstance().initList(this.list_showList);
                f.default.ExposureMat("gamelist_over"), o.default.GetInt("Level") < 7 && d.default.AldRecord("失败", "关卡", o.default.GetInt("Level").toString()),
                    this.panelGaming.visible = !1, this.btnADPassLevel.visible = !0, Laya.timer.once(1e3, this, function () {
                        this.panelEnd.visible = !0, this.OnOpenBackMat2Click(), this.OnOpenBackMat1Click();
                    });
                let highScore = Laya.LocalStorage.getJSON("Bulldozer-Crash-Race-HighScore") ? Laya.LocalStorage.getJSON("Bulldozer-Crash-Race-HighScore") : 0;
                if (highScore < window["GameScore"]) {
                    highScore = window["GameScore"];
                }
                Laya.LocalStorage.setJSON("Bulldozer-Crash-Race-HighScore", highScore);
                this.lab_endHighScore.text = "HighScore:" + highScore;
                this.lab_endScore.text = "Score:" + window["GameScore"];
            }, t.prototype.GameWin = function () {
                platform.getInstance().initList(this.list_showList);
                f.default.ExposureMat("gamelist_over"), o.default.GetInt("Level") < 7 && d.default.AldRecord("胜利", "关卡", o.default.GetInt("Level").toString()),
                    this.panelGaming.visible = !1, this.btnADFiveGetCoin.visible = !0, Laya.timer.once(1e3, this, function () {
                        this.panelEnd.visible = !0, o.default.SetInt("Level", o.default.GetInt("Level") + 1);
                        if (o.default.GetInt("Level") == 3) {
                            p.default.UnlockCarIndex(1)
                        }
                        if (o.default.GetInt("Level") == 5) {
                            p.default.UnlockCarIndex(2)
                        }
                        this.OnOpenBackMat2Click(), this.OnOpenBackMat1Click();
                    });
                let highScore = Laya.LocalStorage.getJSON("Bulldozer-Crash-Race-HighScore") ? Laya.LocalStorage.getJSON("Bulldozer-Crash-Race-HighScore") : 0;
                if (highScore < window["GameScore"]) {
                    highScore = window["GameScore"];
                }
                Laya.LocalStorage.setJSON("Bulldozer-Crash-Race-HighScore", highScore);
                this.lab_endHighScore.text = "HighScore:" + highScore;
                this.lab_endScore.text = "Score:" + window["GameScore"];
            }, t.prototype.HideMat = function () {
                _.default.HideMat();
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
                    r.default.ShowToast("unlock!")) : -1 != t._instance.currentRewardMessage.indexOf("GetFiveCoin") ? (o.default.SetInt("Coin", o.default.GetInt("Coin") + 4 * m.default.m_Player.m_GetCoins),
                        t._instance.OnPassEndClick(), r.default.ShowToast("金币翻倍成功！")) : -1 != t._instance.currentRewardMessage.indexOf("PassLevel") && (o.default.SetInt("Level", o.default.GetInt("Level") + 1),
                            t._instance.OnPassEndClick(), r.default.ShowToast("跳过关卡成功！"));
            }, t.prototype.OnWxRewardedADFailed = function () {
                t._instance.currentRewardMessage = "", r.default.ShowToast("请看完广告！");
            }, t.prototype.OnMatClickRecord = function () {

            }, t.prototype.OnMatJumpRecoid = function () {

            }, t.AlredyKeyEvent = !1, t.isFirst = !0, t.isToTouch = !1, t.isSheildSlectSongIndex = -1,
                t.isSecondRound = !1, t.randToTouch = 0, t.isTotcRewarded = !1, t;
        }(n.ui.GameUI);
        a.default = y;
    }, {
        "./CarBasic/CarChoose": 1,
        "./CarBasic/CarGame": 2,
        "./DanceBall/EffectManager": 5,
        "./DanceBall/GameData": 6,
        "./Tools/BananaSDK": 10,
        "./Tools/Common": 12,
        "./Tools/ModelManager": 14,
        "./Tools/PlayerPrefsTool": 15,
        "./Tools/RandTool": 16,
        "./Tools/SceneManager": 18,
        "./Tools/WxTool": 20,
        "./Tools/aldSDK": 21,
        "./WxTool/WxADTool": 22,
        "./ui/layaMaxUI": 24
    }],
    9: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./GameConfig"), i = e("./Tools/PlayerPrefsTool"), o = e("./Tools/SceneManager"), r = e("./Tools/GlobalProperty"), s = e("./Tools/WxTool"),
            l = e("./Tools/SoundTool"), d = e("./Tools/BitMapFntTool"), c = e("./GameScene"), h = e("./Tools/aldSDK"), u = e("./DanceBall/GameData"),
            f = e("./Tools/BananaSDK"), m = function () {
                function e() {
                    window.Laya3D ? Laya3D.init(n.default.width, n.default.height) : Laya.init(n.default.width, n.default.height, Laya.WebGL),
                        Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                        Laya.URL.exportSceneToJson = n.default.exportSceneToJson, Laya.stage.screenMode = "none",
                        Laya.stage.alignV = "middle", Laya.stage.alignH = "center",
                        Laya.stage.scaleMode = n.default.scaleMode;
                    window.yad = platform.getInstance().createLogo();
                    window.yad.centerX = 0;
                    window.yad.bottom = 0;
                    e.LoadGameVersion();
                    // htmlfs.saveui();
                }
                return e.LoadGameVersion = function () {
                    // Laya.loader.load([ "GameVersion.json" ], Laya.Handler.create(this, function() {
                    var t = { "GameVersion": "1.0.1" };
                    e.GameVersion = t.GameVersion, console.log("------------------------------游戏版本 " + e.GameVersion + " ------------------------------"),
                        s.default.InitTool(), d.default.LoadFnt(), l.default.Init(), f.default.Init(), h.default.Init(),
                        (e.LoadUI(), e.LoadModel());
                    // }));
                }, e.LoadUI = function () {
                    d.default.LoadFnt();
                    Laya.loader.load(["atlas/MainUI.atlas"], Laya.Handler.create(this, this.UILoaded));
                }, e.UILoaded = function () {
                    f.default.Loaded(), console.log("UI Loaded!"), u.default.LoadLevelData(), e.isFirstTimeGameLogic(),
                        o.default.LoadScene(c.default),
                        c.default._instance.panelLoading.visible = !0, Laya.timer.loop(1, this, function () {
                            c.default._instance && c.default._instance.imgWaitModel && (c.default._instance.imgWaitModel.rotation += 1.5);
                        });
                }, e.LoadModel = function () {
                    platform.getInstance().showSplash();
                    platform.getInstance().cargamesstartup("Bulldozer-Crash-Race", () => {
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Bulldozer-Crash-Race-musicstate") ? JSON.parse(Laya.LocalStorage.getItem("Bulldozer-Crash-Race-musicstate")) : false;
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                        Laya.SoundManager.musicVolume = .4, Laya.Browser.onMiniGame && Laya.SoundManager.playMusic("Sound/BG.mp3", 0)
                        var t = [e.ModelRes = e.ModelRes];
                        Laya.loader.create(t, Laya.Handler.create(this, this.OnModelLoaded), Laya.Handler.create(this, null, null, !1));
                    })
                }, e.OnModelLoaded = function () {
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    c.default._instance.panelLoading.visible = !1, c.default._instance.Init();
                    c.default._instance.btn_music.skin = window.WebAudioEngine.pause ? "MainUI/btn_sound_off.png" : "MainUI/btn_sound_on.png";
                }, e.isFirstTimeGameLogic = function () {
                    0 == i.default.GetInt(r.PlayerPrefsType.FirstTimeGame) && i.default.SetInt(r.PlayerPrefsType.FirstTimeGame, 1);
                }, e.isModelLoaded = !1, e.GameVersion = "1.0.0", e.ModelRes = "SubPack/res/LayaScene_Res/Conventional/Res.ls",
                    e.loadsecond = 0, e;
            }();
        a.default = m, new m();
    }, {
        "./DanceBall/GameData": 6,
        "./GameConfig": 7,
        "./GameScene": 8,
        "./Tools/BananaSDK": 10,
        "./Tools/BitMapFntTool": 11,
        "./Tools/GlobalProperty": 13,
        "./Tools/PlayerPrefsTool": 15,
        "./Tools/SceneManager": 18,
        "./Tools/SoundTool": 19,
        "./Tools/WxTool": 20,
        "./Tools/aldSDK": 21
    }],
    10: [function (e, t, a) {
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
        "../GameScene": 8,
        "../Tools/RandTool": 16,
        "../Tools/WxTool": 20
    }],
    11: [function (e, t, a) {
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
    12: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("./BananaSDK"), i = e("../WxTool/WxADTool"), o = e("../GameScene"), r = e("./PlayerPrefsTool"), s = e("./aldSDK"), l = function () {
            function e() { }
            return e.HideMat = function () {
                if (console.log("Common : HideMat"), !n.default.Configs) return console.log("Common：正在初始化")
                console.log("Common：初始化完成"), n.default.isOpenExitMode ? (
                    n.default.isOpenBombBanner ? n.default.GetConfigSetting("front_ad_scene_switch") && n.default.GetConfigSetting("front_homepage_ad_switch") && (o.default._instance.OnOpenBackMat2Click(),
                        o.default._instance.OnOpenBackMat1Click()) : null,
                    n.default.IsInSence() && 0 != n.default.GameTimeCount && (o.default._instance.OnOpenBackMat2Click(),
                        o.default._instance.OnOpenBackMat1Click()), i.default.HideBanerDondes()) : (
                    i.default.HideBanerDondes()),
                    o.default._instance.btnADUnlock.centerX = NaN, o.default._instance.btnADUnlock.left = 180, e.BeginShowBanner();
            }, e.OnStartGameClick = function () {
                platform.getInstance().showInterstitial();
                i.default.HideBanerDondes(), Laya.SoundManager.playSound("Sound/qhcl.mp3", 1), o.default.isToTouch = !0,
                    0 == n.default.GetConfigSetting("front_pass_gate") || n.default.GetConfigSetting("front_pass_gate") > 0 && n.default.GameTimeCount + 1 >= n.default.GetConfigSetting("front_game_number") && n.default.LevelToTouchCount < n.default.GetConfigSetting("front_pass_gate") && (console.log("Commmon：次数：" + n.default.GetConfigSetting("front_pass_gate")),
                        o.default.isToTouch = !1, n.default.LevelToTouchCount++), n.default.isOpenBombBanner || (o.default.isToTouch = !0),
                    s.default.AldRecord("点击开始游戏", "关卡", r.default.GetInt("Level").toString()), o.default.isToTouch ? o.default._instance.StartGame() : (n.default.GetConfigSetting("front_start_game_switch") && (o.default.isTotcRewarded || (o.default.isTotcRewarded = !0,
                        i.default.ShowRewarded())), o.default._instance.panelStart.visible = !1,
                        Laya.timer.once(1e3, o.default._instance, function () {
                            o.default._instance.btnToTouch.visible = !0, i.default.BombBannerSplit(o.default._instance.btnToTouch, 1);
                        }));
            }, e.OnCloseBackMat2Click = function () {
                o.default._instance.panelEnd.visible && (o.default._instance.btnPassEnd.visible = !1,
                    Laya.timer.once(300, o.default._instance, function () {
                        o.default._instance.btnPassEnd.visible = !0, 0 == n.default.GetConfigSetting("front_pass_gate") ? i.default.ShowBanner() : n.default.GetConfigSetting("front_pass_gate") > 0 && (n.default.GameTimeCount >= n.default.GetConfigSetting("front_game_number") && n.default.LevelEndTouchCount < n.default.GetConfigSetting("front_pass_gate") ? (console.log("Commmon：次数：" + n.default.GetConfigSetting("front_pass_gate")),
                            i.default.BombBanner(o.default._instance.btnPassEnd), n.default.LevelEndTouchCount++) : i.default.ShowBanner());
                    }));
            }, e.BeginShowBanner = function () {
                n.default.IsInSence() && i.default.isOpenAD && i.default.bannerAd && Laya.timer.once(250, this, function () {
                    i.default.bannerAd.show();
                });
            }, e;
        }();
        a.default = l;
    }, {
        "../GameScene": 8,
        "../WxTool/WxADTool": 22,
        "./BananaSDK": 10,
        "./PlayerPrefsTool": 15,
        "./aldSDK": 21
    }],
    13: [function (e, t, a) {
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
    14: [function (e, t, a) {
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
        "../Main": 9
    }],
    15: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function () {
            function e() { }
            return e.GetInt = function (e, t) {
                return null == Laya.LocalStorage.getItem("Bulldozer-Crash-Race-" + e.toString()) || "" == Laya.LocalStorage.getItem("Bulldozer-Crash-Race-" + e.toString()) ?
                    t || 0 : parseInt(Laya.LocalStorage.getItem("Bulldozer-Crash-Race-" + e.toString()));
            }, e.SetInt = function (e, t) {
                Laya.LocalStorage.setItem("Bulldozer-Crash-Race-" + e.toString(), t.toString());
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
    16: [function (e, t, a) {
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
    17: [function (e, t, a) {
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
        "../Main": 9
    }],
    18: [function (e, t, a) {
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
    19: [function (e, t, a) {
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
                Laya.Browser.onMiniGame ? (e.audio && e.audio.destroy(), (e.audio = n.default.wx.createInnerAudioContext()).src = t,
                    e.audio.autoplay = !1, e.audio.loop = !1, e.audio.play()) : Laya.SoundManager.playMusic(t);
            }, e.PlayEffect = function (t) {
                Laya.Browser.onMiniGame ? e.effectaudio && (e.effectaudio[e.effectaduioIndex].src = t,
                    e.effectaudio[e.effectaduioIndex++].play(), 4 == e.effectaduioIndex && (e.effectaduioIndex = 0)) : Laya.SoundManager.playSound(t);
            }, e.effectaduioIndex = 0, e;
        }();
        a.default = o;
    }, {
        "../DanceBall/GameData": 6,
        "./WxTool": 20
    }],
    20: [function (e, t, a) {
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
        "../WxTool/WxADTool": 22
    }],
    21: [function (e, t, a) {
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

            }, e.isInited = !1, e;
        }();
        a.default = o;
    }, {
        "./BananaSDK": 10,
        "./Common": 12
    }],
    22: [function (e, t, a) {
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
                    s.default.isConfigInited && i.default._instance && e.bannerAd && (i.default._instance.panelGaming.visible ||
                        (e.RefreshTimer += 100) >= s.default.BannerRfreshTimer && s.default.IsInSence() && (e.RefreshTimer = 0,
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
        "../DanceBall/GameData": 6,
        "../GameScene": 8,
        "../Tools/BananaSDK": 10,
        "../Tools/WxTool": 20,
        "../WxTool/WxServiceTool": 23
    }],
    23: [function (e, t, a) {
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
        "../Tools/WxTool": 20
    }],
    24: [function (e, t, a) {
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
                    "x": 0,
                    "type": "View",
                    "selectedBox": 2619,
                    "selecteID": 3071,
                    "searchKey": "View",
                    "props": { "width": 1280, "visible": true, "top": 0, "rotation": 0, "right": 0, "left": 0, "height": 720, "fontSize": 35, "bottom": 0 },
                    "nodeParent": -1,
                    "maxID": 3072,
                    "loadList3D": [
                    ],
                    "loadList": [
                        "MainUI/BGblack.png",
                        "MainUI/dcd32.png",
                        "MainUI/tuceng41.png",
                        "MainUI/jiantou.png",
                        "MainUI/zhishijiantou01.png",
                        "MainUI/button1.png",
                        "MainUI/GAMECONTROLLER.png",
                        "MainUI/trophies.png",
                        "MainUI/AD.png",
                        "MainUI/Scene01Tip.png",
                        "MainUI/property.png",
                        "MainUI/iconendgame.png",
                        "MainUI/stage_clear$bar.png",
                        "MainUI/stageclear.png",
                        "MainUI/carshopselect.png",
                        "MainUI/zuoyouIn2.png",
                        "MainUI/zuoyouIn.png",
                        "MainUI/shacheEnteree.png",
                        "MainUI/danqi.png",
                        "MainUI/danqil.png",
                        "MainUI/youmen2.png",
                        "MainUI/pause.png",
                        "MainUI/biaopan.png",
                        "MainUI/zhizhen.png",
                        "MainUI/3.png",
                        "MainUI/icocollisionhd.png",
                        "MainUI/bgshop.png",
                        "MainUI/Iconvideo.png",
                        "MainUI/dcjxyx.png",
                        "Panel.prefab",
                        "MainUI/car.png",
                        "MainUI/bbgg.png",
                        "MainUI/kuang.png",
                        "MainUI/backbtn.png",
                        "MainUI/mdmfsw.png",
                        "MainUI/hot.png"],
                    "label": "View",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 2,
                    "child": [
                        {
                            "x": 15,
                            "type": "Panel",
                            "searchKey": "Panel,panelStart",
                            "props": { "visible": true, "var": "panelStart", "top": 0, "right": 0, "left": 0, "bottom": 0 },
                            "nodeParent": 2,
                            "label": "panelStart",
                            "isOpen": false,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 2603,
                            "child": [
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "width": 1280, "skin": "MainUI/BGblack.png", "sizeGrid": "15,17,19,17", "right": 0, "left": 31, "height": 90, "bottom": -358, "alpha": 0.5 },
                                    "nodeParent": 2603,
                                    "label": "Image",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2996,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "width": 179, "visible": false, "sizeGrid": "0,0,0,0", "left": 0, "height": 67, "centerY": 1000 },
                                    "nodeParent": 2603,
                                    "label": "Image",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2604,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": 8, "x": 17, "width": 65, "skin": "", "height": 48 },
                                            "nodeParent": 2604,
                                            "label": "Image",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2605,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Text",
                                            "searchKey": "Text,txtStartCoin",
                                            "props": { "y": -2, "x": 86, "width": 101, "var": "txtStartCoin", "valign": "middle", "text": "999", "strokeColor": "#000000", "stroke": 2, "runtime": "laya.display.Text", "height": 74, "fontSize": 50, "font": "SimHei", "color": "#ffffff", "align": "left" },
                                            "nodeParent": 2604,
                                            "label": "txtStartCoin",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2606,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "width": 219, "skin": "", "height": 82, "centerY": 1000, "centerX": 0 },
                                    "nodeParent": 2603,
                                    "label": "Image",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2607,
                                    "child": [
                                        {
                                            "type": "Text",
                                            "searchKey": "Text,txtStartLeve",
                                            "props": { "y": 48, "x": 217, "width": 112, "var": "txtStartLeve", "valign": "middle", "text": "1", "strokeColor": "#000000", "stroke": 1, "runtime": "laya.display.Text", "pivotY": 37, "pivotX": 118, "height": 54, "fontSize": 50, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" },
                                            "nodeParent": 2607,
                                            "label": "txtStartLeve",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2609,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnLastCar",
                                    "props": { "width": 109, "var": "btnLastCar", "top": 342, "stateNum": 1, "skin": "MainUI/jiantou.png", "scaleX": 1, "height": 109, "centerX": -521, "alpha": 0.85 },
                                    "nodeParent": 2603,
                                    "label": "btnLastCar",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2610,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnNextCar",
                                    "props": { "width": 109, "var": "btnNextCar", "top": 342, "stateNum": 1, "skin": "MainUI/jiantou.png", "scaleX": -1, "height": 109, "centerX": 521 },
                                    "nodeParent": 2603,
                                    "label": "btnNextCar",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2611,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnStartGame",
                                    "props": { "width": 221, "var": "btnStartGame", "stateNum": 1, "scaleY": 1.1, "scaleX": 1.1, "height": 183, "centerX": 512, "bottom": 15 },
                                    "nodeParent": 2603,
                                    "label": "btnStartGame",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2980,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": 23.5, "x": 10, "width": 201, "skin": "MainUI/zhishijiantou01.png", "height": 68 },
                                            "nodeParent": 2980,
                                            "label": "Image",
                                            "isOpen": true,
                                            "isDirectory": true,
                                            "isAniNode": true,
                                            "hasChild": true,
                                            "compId": 3012,
                                            "child": [
                                                {
                                                    "type": "Label",
                                                    "searchKey": "Label",
                                                    "props": { "y": 81, "x": 23, "width": 155, "valign": "middle", "text": "Start", "height": 66, "fontSize": 50, "font": "SimHei", "color": "#01ccff", "align": "center" },
                                                    "nodeParent": 3012,
                                                    "label": "Label",
                                                    "isDirectory": false,
                                                    "isAniNode": true,
                                                    "hasChild": false,
                                                    "compId": 3013,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button",
                                    "props": { "x": 9999, "width": 168, "visible": false, "stateNum": 1, "height": 78, "bottom": 50 },
                                    "nodeParent": 2603,
                                    "label": "Button",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2614,
                                    "child": [
                                        {
                                            "type": "Text",
                                            "searchKey": "Text,txtCoinUnlock",
                                            "props": { "y": 0, "x": 0, "width": 167, "var": "txtCoinUnlock", "valign": "middle", "text": "50金币", "runtime": "laya.display.Text", "height": 74, "fontSize": 40, "font": "Helvetica", "color": "#ffffff", "bold": true, "align": "center" },
                                            "nodeParent": 2614,
                                            "label": "txtCoinUnlock",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2615,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnCoinUnlock",
                                    "props": { "width": 70, "visible": false, "var": "btnCoinUnlock", "stateNum": 1, "skin": "MainUI/trophies.png", "height": 99, "centerY": 1000, "centerX": -272 },
                                    "nodeParent": 2603,
                                    "label": "btnCoinUnlock",
                                    "isOpen": null,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3014,
                                    "child": [
                                        {
                                            "type": "Label",
                                            "searchKey": "Label",
                                            "props": { "y": 96, "x": -42.5, "width": 155, "valign": "middle", "text": "解锁", "height": 41, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "align": "center" },
                                            "nodeParent": 3014,
                                            "label": "Label",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3015,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnADUnlock",
                                    "props": { "width": 70, "visible": false, "var": "btnADUnlock", "top": 545, "stateNum": 1, "skin": "MainUI/AD.png", "height": 79, "centerX": -272 },
                                    "nodeParent": 2603,
                                    "label": "btnADUnlock",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3028,
                                    "child": [
                                        {
                                            "type": "Label",
                                            "searchKey": "Label,labelADUnockTime",
                                            "props": { "y": 86, "x": -42.5, "width": 155, "var": "labelADUnockTime", "valign": "middle", "text": "unlock 3/3", "height": 41, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "align": "center" },
                                            "nodeParent": 3028,
                                            "label": "labelADUnockTime",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3029,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "skin": "MainUI/Scene01Tip.png", "centerY": -200, "centerX": 80 },
                                    "nodeParent": 2603,
                                    "label": "Image",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3017,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": -46, "x": 264, "width": 246, "skin": "MainUI/BGblack.png", "sizeGrid": "15,17,19,17", "height": 246, "alpha": 0.5 },
                                            "nodeParent": 3017,
                                            "label": "Image",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3016,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Label",
                                            "searchKey": "Label,labelProCarName",
                                            "props": { "y": -30, "x": 277, "width": 224, "var": "labelProCarName", "valign": "middle", "height": 41, "fontSize": 40, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" },
                                            "nodeParent": 3017,
                                            "label": "labelProCarName",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3024,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Label",
                                            "searchKey": "Label",
                                            "props": { "y": 19, "x": 277, "width": 69, "valign": "middle", "text": "Power", "height": 41, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "align": "left" },
                                            "nodeParent": 3017,
                                            "label": "Label",
                                            "isOpen": null,
                                            "isDirectory": true,
                                            "isAniNode": true,
                                            "hasChild": true,
                                            "compId": 3019,
                                            "child": [
                                                {
                                                    "type": "ProgressBar",
                                                    "searchKey": "ProgressBar,progressProSpeed",
                                                    "props": { "y": 37, "x": 2, "width": 217, "var": "progressProSpeed", "skin": "MainUI/property.png", "scaleY": 0.3, "height": 30 },
                                                    "nodeParent": 3019,
                                                    "label": "progressProSpeed",
                                                    "isDirectory": false,
                                                    "isAniNode": true,
                                                    "hasChild": false,
                                                    "compId": 3018,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Label",
                                            "searchKey": "Label",
                                            "props": { "y": 68, "x": 277, "width": 69, "valign": "middle", "text": "Steering", "height": 41, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "align": "left" },
                                            "nodeParent": 3017,
                                            "label": "Label",
                                            "isOpen": null,
                                            "isDirectory": true,
                                            "isAniNode": true,
                                            "hasChild": true,
                                            "compId": 3020,
                                            "child": [
                                                {
                                                    "type": "ProgressBar",
                                                    "searchKey": "ProgressBar,progressProTurn",
                                                    "props": { "y": 37, "x": 2, "width": 217, "var": "progressProTurn", "skin": "MainUI/property.png", "scaleY": 0.3, "height": 30 },
                                                    "nodeParent": 3020,
                                                    "label": "progressProTurn",
                                                    "isDirectory": false,
                                                    "isAniNode": true,
                                                    "hasChild": false,
                                                    "compId": 3021,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Label",
                                            "searchKey": "Label",
                                            "props": { "y": 115, "x": 277, "width": 69, "visible": false, "valign": "middle", "text": "Brake", "height": 41, "fontSize": 25, "font": "SimHei", "color": "#ffffff", "align": "left" },
                                            "nodeParent": 3017,
                                            "label": "Label",
                                            "isOpen": null,
                                            "isDirectory": true,
                                            "isAniNode": true,
                                            "hasChild": true,
                                            "compId": 3022,
                                            "child": [
                                                {
                                                    "type": "ProgressBar",
                                                    "searchKey": "ProgressBar,progressProStop",
                                                    "props": { "y": 37, "x": 2, "width": 217, "var": "progressProStop", "skin": "MainUI/property.png", "scaleY": 0.3, "height": 30 },
                                                    "nodeParent": 3022,
                                                    "label": "progressProStop",
                                                    "isDirectory": false,
                                                    "isAniNode": true,
                                                    "hasChild": false,
                                                    "compId": 3023,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btn_music",
                                    "props": { "y": 78, "x": 74, "var": "btn_music", "stateNum": "1", "skin": "MainUI/btn_sound_on.png" },
                                    "nodeParent": 2603,
                                    "label": "btn_music",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3061,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label,lab_tip",
                                    "props": { "y": 499, "x": 353, "width": 573, "visible": false, "var": "lab_tip", "valign": "middle", "text": "Unlock by 3 Level", "height": 41, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "align": "center" },
                                    "nodeParent": 2603,
                                    "label": "lab_tip",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3066,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                }],
                            "$HIDDEN": false
                        },
                        {
                            "x": 15,
                            "type": "Panel",
                            "searchKey": "Panel,panelGaming",
                            "props": { "visible": false, "var": "panelGaming", "top": 0, "right": 0, "left": -1, "bottom": 0 },
                            "nodeParent": 2,
                            "label": "panelGaming",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 2619,
                            "child": [
                                {
                                    "x": 30,
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "width": 179, "visible": false, "skin": "", "sizeGrid": "0,0,0,0", "left": 0, "height": 67, "centerY": 1000 },
                                    "nodeParent": 2619,
                                    "label": "Image",
                                    "isOpen": null,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2620,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": 8, "x": 17, "width": 65, "skin": "", "height": 48 },
                                            "nodeParent": 2620,
                                            "label": "Image",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2621,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Text",
                                            "searchKey": "Text,txtGamingCoin",
                                            "props": { "y": -2, "x": 86, "width": 101, "var": "txtGamingCoin", "valign": "middle", "text": "0", "strokeColor": "#000000", "stroke": 2, "runtime": "laya.display.Text", "height": 74, "fontSize": 50, "font": "SimHei", "color": "#ffffff", "align": "left" },
                                            "nodeParent": 2620,
                                            "label": "txtGamingCoin",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2622,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnLeft",
                                    "props": { "width": 186, "var": "btnLeft", "stateNum": 2, "skin": "MainUI/zuoyouIn2.png", "scaleX": 1, "left": 80, "height": 205, "bottom": 70 },
                                    "nodeParent": 2619,
                                    "label": "btnLeft",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2634,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnRight",
                                    "props": { "width": 186, "var": "btnRight", "stateNum": 2, "skin": "MainUI/zuoyouIn.png", "left": 300, "height": 205, "bottom": 70 },
                                    "nodeParent": 2619,
                                    "label": "btnRight",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2635,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnBack",
                                    "props": { "y": 1000, "width": 142, "visible": false, "var": "btnBack", "stateNum": 2, "skin": "MainUI/shacheEnteree.png", "right": 270, "height": 192, "alpha": 1 },
                                    "nodeParent": 2619,
                                    "label": "btnBack",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2637,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnPush",
                                    "props": { "var": "btnPush", "stateNum": 1, "skin": "MainUI/danqi.png", "scaleY": 1.2, "scaleX": 1.2, "right": 250, "bottom": 100, "alpha": 1 },
                                    "nodeParent": 2619,
                                    "label": "btnPush",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3052,
                                    "child": [
                                        {
                                            "type": "Clip",
                                            "searchKey": "Clip,clipPush",
                                            "props": { "y": 1, "x": 0, "var": "clipPush", "skin": "MainUI/danqil.png", "clipHeight": 1 },
                                            "nodeParent": 3052,
                                            "label": "clipPush",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3053,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnForward",
                                    "props": { "width": 142, "visible": true, "var": "btnForward", "stateNum": 2, "skin": "MainUI/youmen2.png", "right": 80, "height": 221, "bottom": 70, "alpha": 1 },
                                    "nodeParent": 2619,
                                    "label": "btnForward",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2638,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Button",
                                    "searchKey": "Button,btnPause",
                                    "props": { "visible": true, "var": "btnPause", "top": 43, "stateNum": 1, "skin": "MainUI/iconendgame.png", "left": 87 },
                                    "nodeParent": 2619,
                                    "label": "btnPause",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3033,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "width": 180, "visible": true, "top": 170, "skin": "MainUI/biaopan.png", "scaleY": 1.2, "scaleX": 1.2, "right": 60, "height": 157 },
                                    "nodeParent": 2619,
                                    "label": "Image",
                                    "isOpen": null,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3030,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image,imgDashRocker",
                                            "props": { "y": 82, "x": 88, "width": 34, "var": "imgDashRocker", "skin": "MainUI/zhizhen.png", "rotation": -100, "pivotY": 71, "pivotX": 17, "height": 85 },
                                            "nodeParent": 3030,
                                            "label": "imgDashRocker",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3031,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Label",
                                            "searchKey": "Label,labelGameSpeed",
                                            "props": { "y": 140.5, "x": 111, "width": 122, "var": "labelGameSpeed", "valign": "middle", "text": "30", "stroke": 1, "pivotY": 43, "pivotX": 61, "height": 65, "fontSize": 45, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center" },
                                            "nodeParent": 3030,
                                            "label": "labelGameSpeed",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3032,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Image",
                                    "searchKey": "Image,imgReadyCount",
                                    "props": { "var": "imgReadyCount", "skin": "MainUI/3.png", "scaleY": 0.7, "scaleX": 0.7, "centerY": 0, "centerX": 0 },
                                    "nodeParent": 2619,
                                    "label": "imgReadyCount",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3034,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Sprite",
                                    "searchKey": "Sprite,spr_tipMask",
                                    "props": { "y": 0, "x": 0, "visible": false, "var": "spr_tipMask", "texture": "MainUI/Tutorials.png" },
                                    "nodeParent": 2619,
                                    "label": "spr_tipMask",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3071,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Image",
                                    "searchKey": "Image,imgGuide",
                                    "props": { "width": 394, "visible": false, "var": "imgGuide", "height": 351, "centerY": -65, "centerX": 0, "alpha": 1 },
                                    "nodeParent": 2619,
                                    "label": "imgGuide",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3057,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "width": 394, "height": 351, "centerY": 0, "centerX": 0, "alpha": 0.3 },
                                            "nodeParent": 3057,
                                            "label": "Image",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 3056,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": 104, "x": 62, "width": 270, "visible": true, "skin": "MainUI/icocollisionhd.png", "height": 238, "centerY": -57, "centerX": 0 },
                                            "nodeParent": 3057,
                                            "label": "Image",
                                            "isOpen": true,
                                            "isDirectory": true,
                                            "isAniNode": true,
                                            "hasChild": true,
                                            "compId": 3054,
                                            "child": [
                                                {
                                                    "type": "Text",
                                                    "searchKey": "Text",
                                                    "props": { "y": 293, "x": 135, "width": 614, "valign": "middle", "text": "Knock them off!", "strokeColor": "#000000", "stroke": 4, "runtime": "laya.display.Text", "pivotY": 66, "pivotX": 307, "height": 131, "fontSize": 80, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" },
                                                    "nodeParent": 3054,
                                                    "label": "Text",
                                                    "isDirectory": false,
                                                    "isAniNode": true,
                                                    "hasChild": false,
                                                    "compId": 3055,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Label",
                                    "searchKey": "Label,lab_level",
                                    "props": { "y": 54, "x": 640, "var": "lab_level", "text": "Level 1", "fontSize": 50, "color": "#ffffff", "bgColor": "#000000", "anchorY": 0.5, "anchorX": 0.5 },
                                    "nodeParent": 2619,
                                    "label": "lab_level",
                                    "isOpen": true,
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3062,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Label",
                                    "searchKey": "Label,lab_pctips",
                                    "props": { "y": 650, "x": 961.76953125, "var": "lab_pctips", "text": "Space", "fontSize": 50, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5 },
                                    "nodeParent": 2619,
                                    "label": "lab_pctips",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3064,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Text",
                                    "searchKey": "Text,lab_tips",
                                    "props": { "y": 348, "x": 145, "width": 991, "visible": false, "var": "lab_tips", "valign": "middle", "text": "Crash cars to charge N2O", "strokeColor": "#000000", "stroke": 4, "runtime": "laya.display.Text", "height": 80, "fontSize": 80, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" },
                                    "nodeParent": 2619,
                                    "label": "lab_tips",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3065,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "x": 30,
                                    "type": "Label",
                                    "searchKey": "Label,lab_score",
                                    "props": { "y": 108, "x": 640, "var": "lab_score", "text": "Score:0", "fontSize": 50, "color": "#ffffff", "bgColor": "#000000", "anchorY": 0.5, "anchorX": 0.5 },
                                    "nodeParent": 2619,
                                    "label": "lab_score",
                                    "isOpen": true,
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3068,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                }],
                            "$HIDDEN": false
                        },
                        {
                            "x": 15,
                            "type": "Panel",
                            "searchKey": "Panel,panelEnd",
                            "props": { "visible": false, "var": "panelEnd", "top": 0, "right": 0, "left": 0, "bottom": 0 },
                            "nodeParent": 2,
                            "label": "panelEnd",
                            "isOpen": false,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 2647,
                            "child": [
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "y": 0, "x": 0, "top": 0, "skin": "MainUI/BGblack.png", "sizeGrid": "15,17,19,17", "right": 0, "left": 0, "bottom": 0, "alpha": 0.85 },
                                    "nodeParent": 2647,
                                    "label": "Image",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2655,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnADFiveGetCoin",
                                    "props": { "width": 321, "visible": false, "var": "btnADFiveGetCoin", "stateNum": 1, "height": 119, "disabled": true, "centerY": -80, "centerX": 0 },
                                    "nodeParent": 2647,
                                    "label": "btnADFiveGetCoin",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2656,
                                    "child": [
                                        {
                                            "type": "Text",
                                            "searchKey": "Text,txtEndTitle",
                                            "props": { "y": -166, "x": -31, "width": 383, "visible": false, "var": "txtEndTitle", "valign": "top", "text": "LoL", "runtime": "laya.display.Text", "height": 132, "fontSize": 100, "font": "Helvetica", "color": "#ffffff", "bold": true, "align": "center" },
                                            "nodeParent": 2656,
                                            "label": "txtEndTitle",
                                            "isOpen": true,
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2658,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnADPassLevel",
                                    "props": { "width": 289, "visible": false, "var": "btnADPassLevel", "stateNum": 1, "skin": "MainUI/carshopselect.png", "sizeGrid": "52,51,56,50", "pivotY": 51, "pivotX": 145, "height": 102, "centerY": 1000, "centerX": 0 },
                                    "nodeParent": 2647,
                                    "label": "btnADPassLevel",
                                    "isOpen": false,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 2982,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image",
                                            "props": { "y": 22, "x": 9, "width": 65, "skin": "MainUI/Iconvideo.png", "height": 58 },
                                            "nodeParent": 2982,
                                            "label": "Image",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2984,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        },
                                        {
                                            "type": "Text",
                                            "searchKey": "Text",
                                            "props": { "y": 40, "x": 178.5, "width": 221, "valign": "middle", "text": "跳过关卡", "runtime": "laya.display.Text", "pivotY": 37, "pivotX": 111, "height": 74, "fontSize": 45, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" },
                                            "nodeParent": 2982,
                                            "label": "Text",
                                            "isDirectory": false,
                                            "isAniNode": true,
                                            "hasChild": false,
                                            "compId": 2983,
                                            "child": [
                                            ],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button,btnPassEnd",
                                    "props": { "width": 210, "var": "btnPassEnd", "stateNum": 1, "skin": "MainUI/dcjxyx.png", "scaleY": 1, "scaleX": 1, "pivotY": 47, "pivotX": 105, "height": 93, "centerY": 153, "centerX": 0 },
                                    "nodeParent": 2647,
                                    "label": "btnPassEnd",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2985,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "List",
                                    "searchKey": "List,list_showList",
                                    "props": { "y": 198, "x": 160, "width": 1200, "var": "list_showList", "scaleY": 0.8, "scaleX": 0.8, "repeatY": 1, "repeatX": 3, "height": 300 },
                                    "nodeParent": 2647,
                                    "label": "list_showList",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": true,
                                    "hasChild": true,
                                    "compId": 3058,
                                    "child": [
                                        {
                                            "type": "Box",
                                            "searchKey": "Box",
                                            "props": { "renderType": "render" },
                                            "nodeParent": 3058,
                                            "label": "Box",
                                            "isOpen": true,
                                            "isDirectory": true,
                                            "isAniNode": false,
                                            "hasChild": true,
                                            "compId": 3059,
                                            "child": [
                                                {
                                                    "type": "Image",
                                                    "searchKey": "Image,thumb",
                                                    "props": { "width": 400, "name": "thumb", "height": 300 },
                                                    "nodeParent": 3059,
                                                    "label": "thumb",
                                                    "isDirectory": false,
                                                    "isAniNode": false,
                                                    "hasChild": false,
                                                    "compId": 3060,
                                                    "child": [
                                                    ],
                                                    "$HIDDEN": false
                                                }],
                                            "$HIDDEN": false
                                        }],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Text",
                                    "searchKey": "Text",
                                    "props": { "y": 0, "x": 450, "width": 383, "valign": "top", "text": "Great", "runtime": "laya.display.Text", "height": 96, "fontSize": 100, "font": "Helvetica", "color": "#ffffff", "bold": true, "align": "center" },
                                    "nodeParent": 2647,
                                    "label": "Text",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3063,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label,lab_endHighScore",
                                    "props": { "y": 117, "x": 640, "var": "lab_endHighScore", "text": "HighScore:0", "fontSize": 50, "color": "#ffffff", "bgColor": "#000000", "anchorY": 0.5, "anchorX": 0.5 },
                                    "nodeParent": 2647,
                                    "label": "lab_endHighScore",
                                    "isOpen": true,
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3069,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label,lab_endScore",
                                    "props": { "y": 172, "x": 640, "var": "lab_endScore", "text": "Score:0", "fontSize": 50, "color": "#ffffff", "bgColor": "#000000", "anchorY": 0.5, "anchorX": 0.5 },
                                    "nodeParent": 2647,
                                    "label": "lab_endScore",
                                    "isOpen": true,
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 3070,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                }],
                            "$HIDDEN": true
                        },
                        {
                            "x": 15,
                            "type": "Panel",
                            "searchKey": "Panel,panelLoading",
                            "props": { "y": 0, "x": 0, "visible": false, "var": "panelLoading", "top": 0, "right": 0, "presetID": 1, "left": 0, "isPresetRoot": true, "bottom": 0 },
                            "nodeParent": 2,
                            "label": "panelLoading",
                            "isOpen": false,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 2773,
                            "child": [
                                {
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": { "top": 0, "skin": "MainUI/BGblack.png", "sizeGrid": "15,17,19,17", "right": 0, "presetID": 2, "left": 0, "bottom": 0, "alpha": 0.85 },
                                    "nodeParent": 2773,
                                    "label": "Image",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2974,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image,imgWaitModel",
                                    "props": { "width": 201, "var": "imgWaitModel", "skin": "MainUI/car.png", "scaleX": -1, "presetID": 3, "pivotY": 161, "pivotX": 111, "height": 79, "centerY": -120, "centerX": -3 },
                                    "nodeParent": 2773,
                                    "label": "imgWaitModel",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2973,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label",
                                    "props": { "width": 300, "text": "Loading", "presetID": 4, "height": 86, "fontSize": 40, "font": "Microsoft YaHei", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "align": "center" },
                                    "nodeParent": 2773,
                                    "label": "Label",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2976,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                },
                                {
                                    "type": "Button",
                                    "searchKey": "Button",
                                    "props": { "top": 0, "right": 0, "presetID": 5, "left": 0, "bottom": 0 },
                                    "nodeParent": 2773,
                                    "label": "Button",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 2977,
                                    "child": [
                                    ],
                                    "$HIDDEN": false
                                }],
                            "$HIDDEN": true
                        }],
                    "animations": [
                        {
                            "nodes": [
                            ],
                            "name": "ani1",
                            "id": 1,
                            "frameRate": 24,
                            "action": 0
                        }],
                    "$HIDDEN": false
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
}, {}, [9]);