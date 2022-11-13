var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
    };
    return function(t, s) {
        function __() {
            this.constructor = t;
        }
        e(t, s), t.prototype = null === s ? Object.create(s) : (__.prototype = s.prototype, 
        new __());
    };
}();

!function() {
    return function r(e, t, s) {
        function o(i, a) {
            if (!t[i]) {
                if (!e[i]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(i, !0);
                    if (n) return n(i, !0);
                    var c = new Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var h = t[i] = {
                    exports: {}
                };
                e[i][0].call(h.exports, function(t) {
                    return o(e[i][1][t] || t);
                }, h, h.exports, r, e, t, s);
            }
            return t[i].exports;
        }
        for (var n = "function" == typeof require && require, i = 0; i < s.length; i++) o(s[i]);
        return o;
    };
}()({
    1: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./script/CheKu"), i = e("./module/CCWidget"), a = e("./module/Banner"), o = e("./script/PlatformShow"), r = e("./core/FlowTeamChange"), l = e("./script/FalseExit"), c = e("./script/ClickReward"), h = e("./core/UIProgress"), d = e("./module/FlowManager"), u = e("./script/DengLu"), f = e("./script/FullFlows"), g = e("./script/FuHuo"), m = e("./script/Invite"), p = e("./script/JieSuan"), y = e("./script/LackCoin"), w = e("./script/LeftPull"), S = e("./script/Loading"), L = e("./script/Message"), C = e("./core/MessageBox"), v = e("./script/PauseUI"), _ = e("./script/PlayUI"), b = e("./core/GameControl"), I = e("./script/Rank"), x = e("./script/SignIn"), k = e("./core/Toast"), T = e("./script/TuiJian"), M = e("./script/LvJing"), D = e("./script/WechatPack"), P = e("./core/FlowSpriteTeam");
        class A {
            constructor() {}
            static init() {
                var e = Laya.ClassUtils.regClass;
                e("script/CheKu.ts", n.default), e("module/CCWidget.ts", i.default), e("module/Banner.ts", a.default), 
                e("script/PlatformShow.ts", o.default), e("core/FlowTeamChange.ts", r.default), 
                e("script/FalseExit.ts", l.default), e("script/ClickReward.ts", c.default), e("core/UIProgress.ts", h.default), 
                e("module/FlowManager.ts", d.default), e("script/DengLu.ts", u.default), e("script/FullFlows.ts", f.default), 
                e("script/FuHuo.ts", g.default), e("script/Invite.ts", m.default), e("script/JieSuan.ts", p.default), 
                e("script/LackCoin.ts", y.default), e("script/LeftPull.ts", w.default), e("script/Loading.ts", S.default), 
                e("script/Message.ts", L.default), e("core/MessageBox.ts", C.default), e("script/PauseUI.ts", v.default), 
                e("script/PlayUI.ts", _.default), e("core/GameControl.ts", b.default), e("script/Rank.ts", I.default), 
                e("script/SignIn.ts", x.default), e("core/Toast.ts", k.default), e("script/TuiJian.ts", T.default), 
                e("script/LvJing.ts", M.default), e("script/WechatPack.ts", D.default), e("core/FlowSpriteTeam.ts", P.default);
            }
        }
        A.width = 720, A.height = 1280, A.scaleMode = "fixedwidth", A.screenMode = "vertical", 
        A.alignV = "top", A.alignH = "left", A.startScene = "scenes/DengLu.scene", A.sceneRoot = "", 
        A.debug = !1, A.stat = !1, A.physicsDebug = !1, A.exportSceneToJson = !0, s.default = A, 
        A.init();
    }, {
        "./core/FlowSpriteTeam": 8,
        "./core/FlowTeamChange": 9,
        "./core/GameControl": 11,
        "./core/MessageBox": 13,
        "./core/Toast": 16,
        "./core/UIProgress": 17,
        "./module/Banner": 18,
        "./module/CCWidget": 20,
        "./module/FlowManager": 24,
        "./script/CheKu": 32,
        "./script/ClickReward": 33,
        "./script/DengLu": 34,
        "./script/FalseExit": 35,
        "./script/FuHuo": 36,
        "./script/FullFlows": 37,
        "./script/Invite": 38,
        "./script/JieSuan": 39,
        "./script/LackCoin": 40,
        "./script/LeftPull": 41,
        "./script/Loading": 42,
        "./script/LvJing": 43,
        "./script/Message": 44,
        "./script/PauseUI": 45,
        "./script/PlatformShow": 47,
        "./script/PlayUI": 48,
        "./script/Rank": 49,
        "./script/SignIn": 51,
        "./script/TuiJian": 52,
        "./script/WechatPack": 53
    } ],
    2: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./GameConfig"), i = e("./module/Center"), a = e("./script/PlatformConfig");
        new class {
            constructor() {
                Laya3D.init(n.default.width, n.default.height)
                Laya.stage.scaleMode = "showall";
                Laya.stage.alignH = "center";
                //n.default.scaleMode, Laya.stage.screenMode = n.default.screenMode, 
                Laya.URL.exportSceneToJson = n.default.exportSceneToJson, 
                Laya.alertGlobalError = !0, 
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION), 
                i.default._init(a.PlatformConfig.config);
                // Laya.stage.useRetinalCanvas = !0
            }
            onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
            onConfigLoaded() {
                n.default.startScene && Laya.Scene.open(n.default.startScene);
            }
        }();
    }, {
        "./GameConfig": 1,
        "./module/Center": 21,
        "./script/PlatformConfig": 46
    } ],
    3: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Game");
        s.default = class extends Laya.Script3D {
            constructor() {
                super();
            }
            getLatelyCity() {
                let e = this.owner._children[0];
                for (let t = 1; t < this.owner._children.length; t++) this.owner._children[t].transform.localPositionZ < e.transform.localPositionZ && (e = this.owner._children[t]);
                return e;
            }
            getFurthestCity() {
                let e = this.owner._children[0];
                for (let t = 1; t < this.owner._children.length; t++) this.owner._children[t].transform.localPositionZ > e.transform.localPositionZ && (e = this.owner._children[t]);
                return e;
            }
            onUpdate() {
                let e = n.default.Instance.player.transform.localPositionZ;
                for (let t = 0; t < this.owner._children.length; t++) {
                    let s = this.owner._children[t];
                    s.transform.position.z < e - 120 && (s.transform.localPositionZ += 99 * this.owner._children.length, 
                    n.default.Instance.roadMgr.moveRoad());
                }
            }
        };
    }, {
        "./Game": 10
    } ],
    4: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Component");
        s.default = class extends n.default {
            constructor() {
                super(...arguments), this.targetNode = null, this.targetInit = null, this.selfInit = null;
            }
            onAwake() {
                super.onAwake();
            }
            startFollow(e) {
                this.targetNode = e;
                var t = this.transform.position, s = this.targetNode.transform.position;
                this.targetInit = new Laya.Vector3(s.x, s.y, s.z), this.selfInit = new Laya.Vector3(t.x, t.y, t.z);
            }
            onUpdate() {
                var e = this.targetNode.transform.position, 
                t = new Laya.Vector3(e.x - this.targetInit.x + this.selfInit.x, e.y - this.targetInit.y + this.selfInit.y, e.z - this.targetInit.z + this.selfInit.z);
                this.transform.position = t;
            }
        };
    }, {
        "../module/Component": 22
    } ],
    5: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Enum"), i = e("./GuaiWu"), a = e("./Game");
        s.default = class {
            constructor(e, t, s) {
                this.rid = 0, this.roadDirection = n.Enum.RoadDirection.Forward, this.roadMgr = null, 
                this.cars = [], this.revertTime = 0, this.freeRoadClearance = 0, this.rid = e, this.roadMgr = t, 
                this.roadDirection = s, this.updateRevertTime(), this.init();
            }
            init() {
                if (this.roadDirection == n.Enum.RoadDirection.Forward) {
                    let e = a.default.Instance.bgMgr.getFurthestCity(), t = a.default.Instance.player.transform.position.z + 15;
                    for (;;) {
                        let s = 12 * Math.random() + t;
                        if (this.addCar(a.default.Instance.getXFromRid(this.rid), t), (t = s + 8) > e.transform.position.z - 100) break;
                    }
                } else {
                    let e = a.default.Instance.bgMgr.getFurthestCity(), t = a.default.Instance.player.transform.position.z + 8;
                    for (;;) {
                        let s = 12 * Math.random() + t, i = this.addCar(a.default.Instance.getXFromRid(this.rid), t);
                        if (i.setRuningData(1.3, .3, 8 * -Math.random() - 10), i._roadIndex = this.rid, 
                        i.RuningDirection = this.roadDirection, i.transform.localRotationEulerY = 180, this.roadDirection == n.Enum.RoadDirection.Stop) {
                            if (this.freeRoadClearance--, this.freeRoadClearance <= 0) {
                                s += 15;
                                let e = Math.random();
                                this.freeRoadClearance = e < .33 ? 2 : e < .66 ? 3 : 4;
                            }
                            t = s + 5, i.transform.localRotationEulerY = 160 + 20 * Math.random();
                        } else t = s + 30;
                        if (t > e.transform.position.z - 50) break;
                    }
                }
            }
            updateRevertTime() {
                this.revertTime = 2 * Math.random() + 3;
            }
            addCar(e, t) {
                let s = Math.floor(Math.random() * a.default.Instance.enemys.length), o = Laya.Sprite3D.instantiate(a.default.Instance.enemys[s]);
                this.roadMgr.target.addChild(o), o.name = "car";
                let r = o.addComponent(i.default);
                return this.roadDirection == n.Enum.RoadDirection.Revert ? (r.transform.localRotationEulerY = 180, 
                r.setRuningData(1.3, .3, 8 * -Math.random() - 10)) : this.roadDirection == n.Enum.RoadDirection.Forward ? (r.setRuningData(1.3, .3, 10 * Math.random() + 6), 
                r.transform.localRotationEulerY = 0) : r.setRuningData(1.3, .3, 0), r.setAutoRun(this.roadDirection != n.Enum.RoadDirection.Stop), 
                r._roadIndex = this.rid, r.RuningDirection = this.roadDirection, this.cars.push(r), 
                o.transform.position = new Laya.Vector3(e, 0, t), r;
            }
            moveCar(e) {
                -1 == this.cars.indexOf(e) && (this.cars.push(e), this.updateCar());
            }
            removeCar(e) {
                let t = this.cars.indexOf(e);
                t >= 0 && this.cars.splice(t, 1);
            }
            updateCar() {
                if (this.roadDirection == n.Enum.RoadDirection.Revert) return;
                this.cars.sort(function(e, t) {
                    return e.transform.position.z - t.transform.position.z;
                });
                let e = this.cars[this.cars.length - 1], t = a.default.Instance.player.transform.position.z;
                if (e && e.transform.position.z - t < 80) {
                    let t = 30 * Math.random() + e.transform.position.z + 15, s = this.addCar(a.default.Instance.getXFromRid(this.rid), t);
                    e.runingStatus == n.Enum.RuningStatus.STOP && e.trafficTime > 0 && (s.transform.position = new Laya.Vector3(s.transform.position.x, s.transform.position.y, e.transform.position.z + 10), 
                    s.setRuningStatus(n.Enum.RuningStatus.STOP, e.trafficTime));
                }
                let s = !1;
                for (let e = this.cars.length - 1; e >= 0; e--) {
                    let n = this.cars[e];
                    n.transform.position.z < t - 15 && (s ? (this.removeCar(n), n.owner.destroy()) : s = !0);
                }
                let i = this.cars[0];
                if (i == a.default.Instance.player || i.transform.position.z - t > -3) {
                    let e = this.addCar(a.default.Instance.getXFromRid(this.rid), t - 11), s = this.cars.pop();
                    this.cars.splice(0, 0, s), e.setRuningStatus(n.Enum.RuningStatus.ACCELERATE, 3);
                }
                for (let e = this.cars.length - 2; e >= 0; e--) {
                    let t = this.cars[e], s = this.cars[e + 1];
                    s == a.default.Instance.player ? t.lookUp(this.cars[e + 2], 9) : t.lookUp(s, 2), 
                    0 == e && 0 == this.rid && (t.carId = 1);
                }
            }
            updateRevertCar() {
                this.cars.sort(function(e, t) {
                    return t.transform.position.z - e.transform.position.z;
                });
            }
            addNewRoadCar() {
                let e = a.default.Instance.bgMgr.getFurthestCity();
                this.cars.sort(function(e, t) {
                    return e.transform.position.z - t.transform.position.z;
                }), e.transform.position.z, this.cars.length && this.cars[this.cars.length - 1].transform.position.z;
            }
            onGameUpdate(e) {
                this.cars.sort(function(e, t) {
                    return e.transform.position.z - t.transform.position.z;
                });
                for (let t = 0; t < this.cars.length; t++) this.cars[t].onGameUpdate(e);
                if (a.default.Instance.bgMgr.getFurthestCity(), this.roadDirection !== n.Enum.RoadDirection.Forward) {
                    if (this.roadDirection == n.Enum.RoadDirection.Stop) {
                        let e = this.cars[this.cars.length - 1];
                        if (e.transform.position.z - a.default.Instance.player.transform.position.z < 100) {
                            let t = e.transform.position.z + 8;
                            if (this.freeRoadClearance--, this.freeRoadClearance <= 0) {
                                t += 15;
                                let e = Math.random();
                                this.freeRoadClearance = e < .33 ? 2 : e < .66 ? 3 : 4;
                            }
                            let s = this.addCar(a.default.Instance.getXFromRid(this.rid), t);
                            s.setRuningData(1.3, .3, 8 * -Math.random() - 10), s._roadIndex = this.rid, s.RuningDirection = this.roadDirection, 
                            s.transform.localRotationEulerY = 160 + 20 * Math.random();
                        }
                    } else if (this.revertTime -= e, this.revertTime <= 0) {
                        this.updateRevertTime();
                        let e = a.default.Instance.bgMgr.getFurthestCity(), t = Math.floor(Math.random() * a.default.Instance.enemys.length), s = Laya.Sprite3D.instantiate(a.default.Instance.enemys[t]);
                        this.roadMgr.target.addChild(s), s.name = "car";
                        let o = s.addComponent(i.default);
                        return o.setRuningData(1.3, .3, 8 * -Math.random() - 10), o.setAutoRun(!0), o._roadIndex = this.rid, 
                        o.RuningDirection = n.Enum.RoadDirection.Revert, o.transform.localRotationEulerY = 180, 
                        this.cars.push(o), s.transform.position = new Laya.Vector3(a.default.Instance.getXFromRid(this.rid), 0, e.transform.position.z), 
                        o;
                    }
                } 
                else this.updateCar();
            }
        };
    }, {
        "./Enum": 7,
        "./Game": 10,
        "./GuaiWu": 12
    } ],
    6: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Component"), i = e("./Enum"), a = e("./DaoLu");
        s.default = class extends n.default {
            constructor() {
                super(), this.roads = [], this.roadStatus = i.Enum.RoadStatus.Normal, this.hitResult = new Laya.HitResult(), 
                this.firstMonster = [];
            }
            onAwake() {
                super.onAwake();
            }
            initRoadNum(e) {
                for (let t = 0; t < e; t++) this.roads.push(new a.default(t, this, 0 == t ? i.Enum.RoadDirection.Stop : t <= 2 ? i.Enum.RoadDirection.Revert : i.Enum.RoadDirection.Forward));
            }
            changeStatus(e) {
                this.roadStatus = e;
            }
            destroyCar(e) {
                this.roads[e.roadIndex].removeCar(e);
            }
            changeRoad(e, t, s) {
                this.roads[t].removeCar(e), this.roads[s].moveCar(e);
            }
            moveRoad() {
                for (let e = 0; e < this.roads.length; e++) this.roads[e].addNewRoadCar();
            }

            onGameUpdate(e) {
                for (let t = 0; t < this.roads.length; t++) this.roads[t].onGameUpdate(e);
            }
        };
    }, {
        "../module/Component": 22,
        "./DaoLu": 5,
        "./Enum": 7
    } ],
    7: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), function(e) {
            let t, s, n;
            !function(e) {
                e[e.STOP = 0] = "STOP", e[e.ACCELERATE = 1] = "ACCELERATE", e[e.SLOW_DOWN = 2] = "SLOW_DOWN", 
                e[e.VELOCITY = 3] = "VELOCITY";
            }(t = e.RuningStatus || (e.RuningStatus = {})), function(e) {
                e[e.Forward = 0] = "Forward", e[e.Stop = 1] = "Stop", e[e.Revert = 2] = "Revert";
            }(s = e.RoadDirection || (e.RoadDirection = {})), function(e) {
                e[e.Normal = 0] = "Normal", e[e.Traffic = 1] = "Traffic";
            }(n = e.RoadStatus || (e.RoadStatus = {}));
        }(s.Enum || (s.Enum = {}));
    }, {} ],
    8: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Statics"), i = e("../module/Center");
        s.default = class extends Laya.Script {
            constructor() {
                super(), this.sceneName = "", this.friendArr = null;
            }
            onAwake() {
                let e = n.default.flows;
                if (!e) return !1;
                var t = e.filter(function(e) {
                    return e.sceneName == this.sceneName;
                }.bind(this));
                this.friendArr = t;
                let s = 0;
                for (;;) {
                    let e = this.owner.getChildByName("" + s);
                    if (!e) break;
                    let n = t[s];
                    if (!n) return void (e.visible = !1);
                    {
                        let t = e.getChildByName("icon");
                        t.skin = n.imgUrl, e.getChildByName("name").text = n.showName, t.on(Laya.Event.CLICK, this, this.onClickImg, [ s ]);
                    }
                    s++;
                }
            }
            onClickImg(e) {
            }
        };
    }, {
        "../module/Center": 21,
        "../module/Statics": 26
    } ],
    9: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Statics"), i = e("../module/Center");
        s.default = class extends Laya.Script {
            constructor() {
                super(...arguments), this.sceneName = "", this.canelScene = "", this.interval = 5, 
                this.friendArr = [], this.friendIndex = [], this.runTime = 0, this.isReturn = !1;
            }
            onEnable() {
                for (let e = 0; e < this.owner._children.length; e++) {
                    let t = this.owner._children[e];
                    t.on(Laya.Event.CLICK, this, this.onClickImg, [ e ]);
                    let s = t.getChildByName("button");
                    s && s.on(Laya.Event.CLICK, this, this.onClickImg, [ e ]);
                }
                this.onGetFlows() || i.default.Event.on("flows", this.onGetFlows, this);
            }
            onDestroy() {
                i.default.Event.off("flows", this.onGetFlows, this);
            }
            onGetFlows() {
                let e = n.default.flows;
                if (!e) return !1;
                var t = e.filter(function(e) {
                    return e.sceneName == this.sceneName;
                }.bind(this));
                this.friendArr = t;
            }
            updateChild() {
                let e = [];
                for (let t = 0; t < this.friendArr.length; t++) e.push(t);
                e.sort(function(e, t) {
                    return Math.random() - .5;
                }), this.friendIndex = e;
                for (let t = 0; t < this.owner._children.length; t++) {
                    let s = this.owner._children[t], n = e[t];
                    if (t >= this.friendArr.length) break;
                    let i = this.friendArr[n];
                    this.friendIndex.push(n), s.skin = i.imgUrl;
                }
            }
            onClickImg(e) {
            }
            onUpdate() {
                if (this.isReturn) return;
                let e = Laya.timer.delta / 1e3;
                this.runTime -= e, this.runTime <= 0 && (this.updateChild(), this.runTime = this.interval, 
                0 == this.interval && (this.isReturn = !0));
            }
        };
    }, {
        "../module/Center": 21,
        "../module/Statics": 26
    } ],
    10: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Player"), i = e("../module/Component"), a = e("./CameraFollow"), o = e("./BGScroll"), r = e("./DaoLuGuanLi"), l = e("../script/RunData"), c = e("./GuaiWu"), h = e("../module/Center");
        class d extends i.default {
            constructor() {
                super(), this.player = null, this.roadMgr = null, this.bgMgr = null, this.cameraFollow = null, 
                this.isRuning = !1, this.enemys = [], this.isWaitingStart = !1, this.playUI = null, 
                this._isPause = !1, this.reliveCount = 1, this.collider = null, d._sInstance = this;
            }
            static get Instance() {
                return d._sInstance;
            }
            set Pause(e) {
                this._isPause = e;
            }
            get Pause() {
                return this._isPause;
            }
            get Distance() {
                return this.player.transform.position.z;
            }
            onAwake() {
                super.onAwake();
                let e = this.target.getChildByName("enemy");
                for (let t = 0; t < e._children.length; t++) this.enemys.push(e._children[t]);
                this.FindChild("review").destroy();
                let t = this.FindChild("root");
                this.player = this.FindChild("root/Player").addComponent(n.default), this.cameraFollow = this.target.getChildByName("Main Camera").addComponent(a.default), 
                this.cameraFollow.startFollow(this.player.target), this.cameraFollow.transform.localPositionX = -3.2, 
                this.bgMgr = this.FindChild("root/road").addComponent(o.default), this.roadMgr = t.getChildByName("monster").addComponent(r.default), 
                this.roadMgr.initRoadNum(5), this.isWaitingStart = !0, this.player.roadIndex = 3;
                let s = this.player.FindChild("model"), i = s._children.length;
                for (let e = 0; e < i; e++) {
                    let t = s.getChildByName("" + e);
                    e == h.default.ShuJu.car ? t.active = !0 : t.destroy();
                }
                let l = this.player.rigidbody.colliderShape;
                this.player.rigidbody.colliderShape = new Laya.BoxColliderShape(l.sizeX, l.sizeY, [ 6, 4.2, 4.2, 6, 4, 5.5 ][h.default.ShuJu.car]);
            }
            setGameUI(e) {
                this.playUI = e;
            }
            touchStartGame() {
                this.isWaitingStart && (this.isRuning = !0, this.playUI.hintBox.visible = !1), this.isWaitingStart = !1;
            }
            onGameFail(e) {
                if (!this.isRuning) return;
                let t = [ "Practice More", "Wanna New One", " Call 911", "God Bless You！", "Safety First", "Too Slippery", "Hey Man", "WOW"];
                this.playUI.hintBg.visible = !0, this.playUI.hintText.text = t[Math.floor(Math.random() * t.length)], 
                this.collider = e.getComponent(c.default), this.isRuning = !1, 1 == this.reliveCount ? (Laya.timer.once(2e3, this, () => {
                    Laya.Scene.open("scenes/FuHuo.scene", !1, () => {
                        e.destroy(), this.relive();
                    });
                    if(this.roadMgr){
                        this.roadMgr.destroyCar(this.collider);
                    }
                    const rig= e.getComponent(Laya.Rigidbody3D);
                    if(rig){
                        rig.linearVelocity = new Laya.Vector3(0, 0, 0);
                    }
                }), this.reliveCount--) : Laya.Scene.open("scenes/JieSuan.scene", !1), Laya.timer.once(3e3, this, () => {
                    this.playUI.hintBg.visible = !1;
                });
                let s = this.cameraFollow.owner, n = new Laya.Vector3(0, 0, 0);
                s.viewport.project(e.transform.position, s.projectionViewMatrix, n), this.playUI.hintBg.pos(n.x / Laya.stage.clientScaleX, n.y / Laya.stage.clientScaleY - 150);
            }
            relive() {
                let e = this.player.roadIndex, t = this.roadMgr.roads[e], s = null, n = 9999, i = this.player.transform.position.z;
                for (let e = 0; e < t.cars.length; e++) {
                    let a = t.cars[e].transform.position.z - i;
                    a > 0 && a < n && (s = t.cars[e], n = a);
                }
                let a = t.cars.indexOf(this.player);
                if (a >= 0 && t.cars[a + 1]) {
                    let e = t.cars[a + 1];
                    i - e.transform.position.z < 5 && (d.Instance.roadMgr.destroyCar(e), e.target.destroy());
                }
                let o = s ? s.transform.position.z - 4 : this.player.transform.position.z;
                this.player.transform.position = new Laya.Vector3(this.getXFromRid(e), this.player.transform.position.y, o), 
                this.player.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this.player.relive(), 
                d.Instance.roadMgr.destroyCar(this.collider), this.isWaitingStart = !0, this.isRuning = !1, 
                this.playUI.hintBox.visible = !0;
            }
            getXFromRid(e) {
                return (2 - e) * l.default.roadWidth;
            }
            destroyScene() {
                this.owner.scene.destroy();
            }
            onUpdate() {
                if(this._isPause){
                    return
                }
                let e = Laya.timer.delta / 1e3;
                this.playUI.lbSpeed.text = this.player.rigidbody.linearVelocity.z.toFixed(1) + "m/h", 
                this.isRuning && !this._isPause && (this.roadMgr.onGameUpdate(e), this.playUI.lbDistance.text = Math.floor(this.player.transform.position.z) + "m");
            }
        }
        d._sInstance = null, s.default = d;
    }, {
        "../module/Center": 21,
        "../module/Component": 22,
        "../script/RunData": 50,
        "./BGScroll": 3,
        "./CameraFollow": 4,
        "./DaoLuGuanLi": 6,
        "./GuaiWu": 12,
        "./Player": 14
    } ],
    11: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        class n extends Laya.Script {
            constructor() {
                super(), this.event = new Laya.EventDispatcher(), this.lastMoveX = 0, this.lastMoveY = 0, 
                this.direction = 0, n._sInstance = this;
                this.touched = false;
            }
            static get Instance() {
                return n._sInstance;
            }
            get Direction() {
                return this.direction;
            }
            onStart() {}
            onMouseDown() {
                this.touched = true;
                console.log("onMouseDown"), this.lastMoveX = Laya.stage.mouseX, this.lastMoveY = Laya.stage.mouseY, 
                this.event.event(Laya.Event.MOUSE_DOWN);
            }
            onMouseMove() {
                if(this.touched ){
                    let e = Laya.stage.mouseX - this.lastMoveX;
                    e < -80 ? (this.direction = -1, this.lastMoveX = Laya.stage.mouseX) : e > 80 ? (this.direction = 1, 
                    this.lastMoveX = Laya.stage.mouseX) : this.direction = 0;
                }
            }
            onMouseUp() {
                this.touched = false;
                console.log("onMouseUp"), this.direction = 0, this.event.event(Laya.Event.MOUSE_UP);
            }
            onDisable() {}
        }
        n._sInstance = null, s.default = n;
    }, {} ],
    12: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Component"), i = e("./Enum"), a = e("./Game");
        class o {
            constructor(e, t, s) {
                this.accelerateTime = 1, this.maxSpeed = 1, this.slowTime = 1, this.accelerateTime = e, 
                this.maxSpeed = s, this.slowTime = t;
            }
        }
        s.RuningData = o;
        s.default = class extends n.default {
            constructor() {
                super(), this.runingStatus = i.Enum.RuningStatus.STOP, this._roadIndex = 0, this.linearVelocity = new Laya.Vector3(0, 0, 0), 
                this.speedZ = 0, this.isAutoRun = !1, this.isValid = !0, this.trafficTime = 0, this.lookUpMonster = null, 
                this.lookUpDistance = 0, this.selfTime = 0, this.carId = 0, this.runingDirection = i.Enum.RoadDirection.Forward, 
                this.runingData = null;
            }
            get roadIndex() {
                return this._roadIndex;
            }
            set roadIndex(e) {
                e != this._roadIndex && (a.default.Instance.roadMgr.changeRoad(this, this._roadIndex, e), 
                this._roadIndex = e);
            }
            set RuningDirection(e) {
                this.runingDirection = e;
            }
            onStart() {
                this.rigidbody.angularFactor = new Laya.Vector3(0, 0, 0);
            }
            setRuningData(e, t, s) {
                this.runingData = new o(e, t, s);
            }
            setAutoRun(e) {
                this.isAutoRun = e;
            }
            checkVaild() {
                this.transform.position.y < -2 && (a.default.Instance.roadMgr.destroyCar(this), 
                this.isValid = !1, this.target.destroy());
            }
            setRuningStatus(e, t) {
                this.runingStatus = e, this.trafficTime = t;
            }
            onUpdate() {
                this.checkVaild();
            }
            lookUp(e, t) {
                this.lookUpMonster != e && (this.trafficTime = 0), this.lookUpMonster = e, this.lookUpDistance = t;
            }
            onGameUpdate(e) {
                if (!this.isAutoRun) return;
                let t = this.linearVelocity;
                if (this.runingDirection == i.Enum.RoadDirection.Revert) if (this.lookUpMonster) {
                    let s = this.lookUpMonster.transform.position.z, n = this.transform.position.z;
                    if (n - s < this.lookUpDistance + 6) t.z = 0; else if (n - s < this.lookUpDistance + 10) t.z > 0 && (t.z >= this.runingData.maxSpeed / 3 ? t.z = Math.min(t.z - this.runingData.maxSpeed * e, this.runingData.maxSpeed / 2) : t.z = Math.max(t.z + this.runingData.maxSpeed * e, this.runingData.maxSpeed / 2)); else if (n - s < this.lookUpDistance + 15) {
                        if (0 == t.z && (this.selfTime = 1 * Math.random() + .5, t.z = .1), this.selfTime > 0) return void (this.selfTime -= e);
                        t.z = Math.max(t.z + this.runingData.maxSpeed * e, .4 * this.runingData.maxSpeed);
                    } else t.z = Math.min(t.z + this.runingData.maxSpeed * e, this.runingData.maxSpeed);
                } else this.linearVelocity.z = this.runingData.maxSpeed, t = this.linearVelocity; else if (this.runingDirection == i.Enum.RoadDirection.Forward) if (this.lookUpMonster) {
                    let s = this.lookUpMonster.transform.position.z, n = this.transform.position.z;
                    if (s - n < this.lookUpDistance + 6) t.z = 0; else if (s - n < this.lookUpDistance + 10) t.z > 0 && (t.z >= this.runingData.maxSpeed / 3 ? t.z = Math.max(t.z - this.runingData.maxSpeed * e, this.runingData.maxSpeed / 2) : t.z = Math.min(t.z + this.runingData.maxSpeed * e, this.runingData.maxSpeed / 2)); else if (s - n < this.lookUpDistance + 15) {
                        if (0 == t.z && (this.selfTime = 1 * Math.random() + .5, t.z = .1), this.selfTime > 0) return void (this.selfTime -= e);
                        t.z = Math.min(t.z + this.runingData.maxSpeed * e, .4 * this.runingData.maxSpeed);
                    } else t.z = Math.min(t.z + this.runingData.maxSpeed * e, this.runingData.maxSpeed);
                } else this.trafficTime >= 0 ? this.trafficTime -= e : this.runingStatus == i.Enum.RuningStatus.STOP ? (this.runingStatus = i.Enum.RuningStatus.ACCELERATE, 
                this.trafficTime = 2 * Math.random() + 3) : this.runingStatus == i.Enum.RuningStatus.ACCELERATE && (this.runingStatus = i.Enum.RuningStatus.STOP, 
                this.trafficTime = 2 * Math.random() + 5), this.runingStatus == i.Enum.RuningStatus.STOP ? t.z = 0 : this.runingStatus == i.Enum.RuningStatus.ACCELERATE && (t.z = Math.max(t.z - this.runingData.maxSpeed * e, .5 * this.runingData.maxSpeed));
                this.rigidbody.linearVelocity = t;
            }
        };
    }, {
        "../module/Component": 22,
        "./Enum": 7,
        "./Game": 10
    } ],
    13: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI");
        s.default = class extends n.ui.scenes.MessageBoxUI {
            constructor() {
                super(), this.options = null;
            }
            onAwake() {
                this.btnCancel.clickHandler = new Laya.Handler(this, this.onClick, [ 0 ]), 
                this.btnConfirm.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), 
                this.bgImg.height = Laya.stage.height;
            }
            onClick(e) {
                !e && this.options.noFunc ? this.options.noFunc() : e && this.options.okFunc && this.options.okFunc(), 
                Laya.Scene.close("scenes/MessageBox.scene");
            }
            onOpened(e) {
                this.options = e;
            }
        };
    }, {
        "../ui/layaMaxUI": 54
    } ],
    14: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/TweenTime"), i = e("./GuaiWu"), a = e("./Enum"), o = e("../script/RunData"), r = e("./GameControl"), l = e("./Game"), c = e("../module/Center");
        s.default = class extends i.default {
            constructor() {
                super(), this.accelerateTween = new n.Tween.TweenTime(), this.slowDownTween = new n.Tween.TweenTime(), 
                this.changeRoadDir = 0, console.log("Player constructor");
            }
            onStart() {
                super.onStart(), this.rigidbody.angularFactor = new Laya.Vector3(0, 0, 0), 
                r.default.Instance.event.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), 
                r.default.Instance.event.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp), this.FindChild("SideCollisionFx"), 
                this.setRuningData(2, 2, 40);
            }
            OnMouseDown() {
                if (console.log("鼠标按下:", this.linearVelocity, this.runingStatus), l.default.Instance.touchStartGame(), 
                this.runingStatus != a.Enum.RuningStatus.ACCELERATE) {
                    if (this.accelerateTween.clean(), this.runingStatus == a.Enum.RuningStatus.STOP) this.accelerateTween.addControl(new n.Tween.TweenData(this.runingData.accelerateTime, 0, this.runingData.maxSpeed)); else {
                        if (this.runingStatus != a.Enum.RuningStatus.SLOW_DOWN) return;
                        this.slowDownTween.tweens.length > 0 ? this.accelerateTween.addControl(new n.Tween.TweenData(this.runingData.accelerateTime, this.slowDownTween.update(0), this.runingData.maxSpeed)) : this.accelerateTween.addControl(new n.Tween.TweenData(this.runingData.accelerateTime, 0, this.runingData.maxSpeed));
                    }
                    l.default.Instance.isRuning && Laya.SoundManager.playSound("res/audio/runing.mp3"), 
                    this.runingStatus = a.Enum.RuningStatus.ACCELERATE;
                }
            }
            OnMouseUp() {
                this.slowDownTween.clean(), this.slowDownTween.addControl(new n.Tween.TweenData(this.runingData.slowTime, this.linearVelocity.z, 0)), 
                this.slowDownTween.reStart(function() {
                    this.runingStatus = a.Enum.RuningStatus.STOP;
                }.bind(this)), console.log("开始减速:", this.linearVelocity), this.runingStatus = a.Enum.RuningStatus.SLOW_DOWN, 
                l.default.Instance.isRuning && (Laya.SoundManager.stopSound("res/audio/runing.mp3"), 
                Laya.SoundManager.playSound("res/audio/shache.mp3"));
            }
            onCollisionEnter(e) {
                "car" == e.other.owner.name && (Laya.SoundManager.stopSound("res/audio/runing.mp3"), 
                l.default.Instance.onGameFail(e.other.owner), this.rigidbody.linearVelocity = new Laya.Vector3(0, 0, 0), 
                Laya.SoundManager.playSound("res/audio/carsColl.mp3"), c.default.PingTai.vibrateLong());
            }
            relive() {
                0 != this.changeRoadDir && (this.animator.play(this.changeRoadDir > 0 ? "changeroadrightend" : "changeroadleftend"), 
                this.changeRoadDir = 0), this.linearVelocity = new Laya.Vector3(0, 0, 0);
            }
            onDestroy() {}
            onGameUpdate(e) {
                let t = this.linearVelocity;
                this.runingStatus == a.Enum.RuningStatus.ACCELERATE ? t.z = Math.min(this.runingData.maxSpeed / this.runingData.accelerateTime * e + t.z, this.runingData.maxSpeed) : this.runingStatus == a.Enum.RuningStatus.SLOW_DOWN ? t.z = Math.max(0, t.z - this.runingData.maxSpeed / this.runingData.slowTime * e) : 0 == t.z && (this.runingStatus = a.Enum.RuningStatus.STOP);
                let s = r.default.Instance.Direction;
                if (0 == this.changeRoadDir && 0 != s && this.roadIndex + s >= 0 && this.roadIndex + s <= 4 && (this.changeRoadDir = s, 
                this.animator.play(-1 == this.changeRoadDir ? "changeroadleft" : "changeroadright")), 
                0 != this.changeRoadDir) {
                    let e = (this.roadIndex + this.changeRoadDir - 2) * o.default.roadWidth * -1;
                    (this.changeRoadDir < 0 ? this.transform.localPositionX > e : this.transform.localPositionX < e) ? (this.roadIndex += this.changeRoadDir, 
                    0 != s && this.roadIndex + s >= 0 && this.roadIndex + s <= 4 ? (this.changeRoadDir != s && (this.animator.play(-1 == s ? "changeroadleft" : "changeroadright"), 
                    this.changeRoadDir = s), t.x = -1 == this.changeRoadDir ? 4 : -4) : (t.x = 0, this.transform.localPositionX = e, 
                    this.animator.play(this.changeRoadDir > 0 ? "changeroadrightend" : "changeroadleftend"), 
                    this.changeRoadDir = 0)) : t.x = -1 == this.changeRoadDir ? 15 : -15;
                } else t.x = 0;
                this.rigidbody.linearVelocity = new Laya.Vector3(t.x, t.y, t.z);
            }
        };
    }, {
        "../module/Center": 21,
        "../module/TweenTime": 27,
        "../script/RunData": 50,
        "./Enum": 7,
        "./Game": 10,
        "./GameControl": 11,
        "./GuaiWu": 12
    } ],
    15: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        class n {
            static load(e, t) {
                if (this.textures[e]) return void t(this.textures[e]);
                let s = this;
                Laya.loader.load(e, new Laya.Handler(this, function(n) {
                    s.textures[e] = n, t(n);
                }));
            }
        }
        n.textures = {}, s.default = n;
    }, {} ],
    16: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI");
        s.default = class extends n.ui.scenes.ToastUI {
            constructor() {
                super();
            }
            onAwake() {
                this.bg.height = Laya.stage.height / 2;
            }
            onOpened(e) {
                this.label.text = e.message, Laya.Tween.to(this.bg, {
                    y: Laya.stage.height / 2 - 60
                }, .5, null, new Laya.Handler(this, function() {
                    Laya.Scene.close("scenes/Toast.scene");
                }));
            }
        };
    }, {
        "../ui/layaMaxUI": 54
    } ],
    17: [ function(e, t, s) {
        "use strict";
        var n;
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), function(e) {
            e[e.HORIZONTAL = 0] = "HORIZONTAL", e[e.VECTIACAL = 1] = "VECTIACAL", e[e.RADIAN = 2] = "RADIAN";
        }(n = s.ProgressType || (s.ProgressType = {}));
        s.default = class extends Laya.Script {
            constructor() {
                super(), this._progress = .5, this._type = n.HORIZONTAL, this._bar = null;
            }
            onAwake() {
                this._bar = this.owner.getChildByName("bar"), console.log("UIProgress:", this._progress, "type:", this._type);
            }
            get progress() {
                return this._progress;
            }
            set progress(e) {
                this._progress = Math.max(Math.min(1, e), 0);
                let t = this.owner;
                this._type == n.HORIZONTAL ? this._bar.width = this._progress * t.width : this._type == n.VECTIACAL ? this._bar.height = this._progress * t.height : (this._type, 
                n.RADIAN);
            }
        };
    }, {} ],
    18: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Center");
        s.default = class extends Laya.Script {
            constructor() {
                super(), this.adUnitId = "", this.isDestroy = !1;
            }
            onBannerShow(e) {
                let t = this.owner;
                var s = wx.getSystemInfoSync();
                t.width = e.width * Laya.stage.width / s.screenWidth, t.height = e.height * Laya.stage.height / s.screenHeight;
                let i = (this.owner.bottom || 0) / Laya.stage.height * s.screenHeight;
                n.default.PingTai.bannerAD.style.top = s.screenHeight - i - e.height, t.y = n.default.PingTai.bannerAD.style.top / s.screenHeight * Laya.stage.height, 
                n.default.PingTai.Event.emit("bannerresize", t), n.default.PingTai.Event.off("bannershow", this.onBannerShow, this);
            }
            onEnable() {
                console.log("banner onEnable:", this.adUnitId, this.owner.visible), this.adUnitId && Laya.Browser.onWeiXin && this.owner.visible && (console.log("banner onEnable1:", this.adUnitId), 
                Laya.Browser.pixelRatio, n.default.PingTai.Event.on("bannershow", this.onBannerShow, this), 
                n.default.PingTai.showBanner(this.adUnitId, this.owner.width, this.owner.height));
            }
            onDisable() {
                this.isDestroy || (n.default.PingTai.Event.removeAllListeners(this), n.default.PingTai.destroyBanner());
            }
            onDestroy() {
                this.isDestroy || (this.isDestroy = !0, n.default.PingTai.Event.removeAllListeners(this), 
                n.default.PingTai.destroyBanner());
            }
        };
    }, {
        "./Center": 21
    } ],
    19: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        let n = 0;
        !function(e) {
            let t;
            !function(e) {
                e[e.DelayTime = 0] = "DelayTime", e[e.Move = 1] = "Move", e[e.Rotation = 2] = "Rotation", 
                e[e.Scale = 3] = "Scale";
            }(t || (t = {}));
            class s {
                constructor(e, s, i) {
                    this.actionType = t.DelayTime, this.target = null, this.id = 0, this.iTime = 0, 
                    this.endTime = 0, this.isLocal = !1, this.startPosition = Laya.Vector3._ZERO, this.endPosition = Laya.Vector3._ZERO, 
                    this.startRotation = Laya.Quaternion.DEFAULT, this.endRotation = Laya.Quaternion.DEFAULT, 
                    this.iTime = 0, this.endTime = e, this.actionType = s, this.isLocal = i, this.id = n++;
                }
                _initTarget(e) {
                    this.target = e;
                    let t = (this.isLocal, e.transform.localPosition);
                    this.startPosition = new Laya.Vector3(t.x, t.y, t.z);
                    let s = (this.isLocal, e.transform.localRotation);
                    this.startRotation = new Laya.Quaternion(s.z, s.y, s.z, s.w);
                }
                _clampTime() {
                    if (this.iTime >= this.endTime) return 1;
                    let e = this.iTime / this.endTime;
                    return Math.max(Math.min(e, 1), 0);
                }
                _finish() {
                    i.Instance.stop(this);
                }
                update(e) {
                    this.iTime += e;
                }
            }
            e.BaseAction = s;
            e.MoveTo = class extends s {
                constructor(e, s, n = !1) {
                    super(e, t.Move, n), this.endPosition = s;
                }
                update(e) {
                    super.update(e);
                    let t = this._clampTime(), s = (this.endPosition.x - this.startPosition.x) * t + this.startPosition.x, n = (this.endPosition.y - this.startPosition.y) * t + this.startPosition.y, i = (this.endPosition.z - this.startPosition.z) * t + this.startPosition.z;
                    this.isLocal ? this.target.transform.localPosition = new Laya.Vector3(s, n, i) : this.target.transform.position = new Laya.Vector3(s, n, i), 
                    t >= 1 && this._finish();
                }
            };
            e.RotationTo = class extends s {};
            class i {
                constructor() {
                    this.deltaTime = 0, this.runActions = [], this.finishActions = [], i._sInstance = this, 
                    this.deltaTime = Date.now(), Laya.timer.frameLoop(1, this, this.onUpdate);
                }
                static get Instance() {
                    return i._sInstance || (i._sInstance = new i()), i._sInstance;
                }
                push(e, t) {
                    t.target ? console.warn("已经有对象了") : (t._initTarget(e), e._actions.push(t), this.runActions.push(t));
                }
                stop(e) {
                    this.finishActions.push(e);
                }
                onUpdate() {
                    let e = Date.now(), t = (e - this.deltaTime) / 1e3;
                    this.deltaTime = e;
                    for (let e = 0; e < this.runActions.length; e++) this.runActions[e].update(t);
                    for (let e = 0; e < this.finishActions.length; e++) {
                        let t = this.finishActions[e], s = this.runActions.indexOf(t);
                        -1 != s && this.runActions.splice(s, 1), -1 != (s = t.target._actions.indexOf(t)) && t.target._actions.splice(s, 1);
                    }
                    this.finishActions = [];
                }
            }
            i._sInstance = null, e.ActionManager = i;
        }(s.CCAction || (s.CCAction = {}));
    }, {} ],
    20: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        s.default = class extends Laya.Script {
            constructor() {
                super(...arguments), this.left = "", this.right = "", this.up = "", this.down = "";
            }
            onAwake() {
                let e = this.owner, t = e.width, s = e.height, n = e.x, i = e.y;
                this.left && (n = parseInt(this.left) || 0);
                let a = 0, o = 0;
                if (!this.owner.parent || this.owner.parent instanceof Laya.Scene) a = Laya.stage.width, 
                o = Laya.stage.height; else {
                    let e = this.owner.parent;
                    a = e.width, o = e.height;
                }
                if (this.right && (this.left ? t = a - n - (parseInt(this.right) || 0) : n = a - e.width - (parseInt(this.right) || 0)), 
                this.down && (this.up ? s = o - i - (parseInt(this.down) || 0) : i = o - e.height - (parseInt(this.down) || 0)), 
                this.owner instanceof Laya.Box) {
                    let e = this.owner;
                    e.left = n, e.right = n + t;
                } else e.autoSize = !1, e.width = t, e.height = s, e.x = n, e.y = i;
            }
        };
    }, {} ],
    21: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./platform/Platform"), i = e("./platform/PlatformWechat"), a = e("../module/Http"), o = e("./Event"), r = e("./platform/PlatformQQ"), l = e("./platform/PlatformVivo");
        class c {
            static _init(e) {
                let t = Laya.Browser.userAgent.indexOf("Mozilla") > -1;
                if (Laya.Browser.onWeiXin) this.PingTai = new i.default(e.wechat); else if (t) this.PingTai = new n.default(e.web);  else if (qg) {
                    let t = qg.getSystemInfoSync();
                    "vivo" == t.brand && (this.PingTai = new l.default(e[t.brand]));
                }
                console.log("this.Platform:", this.PingTai.__className__);
            }
            static isNewUser() {
                return !!this.ShuJu.registerTimeTick && (Date.now() - this.ShuJu.registerTimeTick < 864e5 || void 0);
            }
            static attrNumber(e, t, s) {
                a.default.get("attrNumber", {
                    key: e,
                    value: t
                }, s);
            }
            static attrString(e, t, s) {
                a.default.get("attrString", {
                    key: e,
                    value: t
                }, s);
            }
            static attrObject(e, t) {
                a.default.get("attrMore", {
                    params: JSON.stringify(e)
                }, t);
            }

            static save(){
                platform.getInstance().setStorageSync("gameinfo",this.ShuJu);
            }
        }
        c.PingTai = null, c.ShuJu = {}, c.Event = new o.default(), s.default = c;
    }, {
        "../module/Http": 25,
        "./Event": 23,
        "./platform/Platform": 28,
        "./platform/PlatformQQ": 29,
        "./platform/PlatformVivo": 30,
        "./platform/PlatformWechat": 31
    } ],
    22: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./CCAction");
        s.default = class extends Laya.Script3D {
            constructor() {
                super(), this.target = null, this.transform = null, this.rigidbody = null, this.animator = null, 
                this._actions = [];
            }
            onAwake() {
                this.target = this.owner, this.transform = this.target.transform, this.rigidbody = this.owner.getComponent(Laya.Rigidbody3D), 
                this.animator = this.owner.getComponent(Laya.Animator);
            }
            runAction(e) {
                n.CCAction.ActionManager.Instance.push(this, e);
            }
            FindChild(e) {
                let t = e.split("/"), s = this.target;
                for (let e = 0; e < t.length && (s = s.getChildByName(t[e])); e++) ;
                return s;
            }
        };
    }, {
        "./CCAction": 19
    } ],
    23: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        s.default = class {
            constructor() {
                this.events = [];
            }
            on(e, t, s) {
                this.events.push({
                    eventName: e,
                    fun: t,
                    target: s
                });
            }
            off(e, t, s) {
                if ("object" == typeof e) return this.removeAllListeners(e);
                this.events = this.events.filter(n => n.eventName != e || n.fun !== t || n.target != s);
            }
            emit(e, ...t) {
                this.events.filter(t => t.eventName == e).map(e => {
                    e.fun.apply(e.target, t);
                }), this.events = this.events.filter(t => t.eventName != e || t.eventName == e && !t.isOnce);
            }
            removeAllListeners(e) {
                this.events = "object" == typeof e ? this.events.filter(t => t.target != e) : this.events.filter(t => t.eventName != e);
            }
            once(e, t, s) {
                this.events.push({
                    eventName: e,
                    fun: t,
                    target: s,
                    isOnce: !0
                });
            }
            clean() {
                this.events = [];
            }
        };
    }, {} ],
    24: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Center"), i = e("./Statics"), a = e("../core/TextureCache");
        s.default = class extends Laya.Script {
            constructor() {
                super(), this.sceneName = "", this.line = -1, this.column = -1, this.width = 100, 
                this.height = 100, this.spaceX = 10, this.spaceY = 10, this.canelScene = "", this.scrollY = 0, 
                this.friendArr = null, this.scrollBar = null, this.pic = 1;
            }
            onEnable() {
                this.onGetFlows() || n.default.Event.on("flows", this.onGetFlows, this);
            }
            onGetFlows() {
                let e = i.default.flows;
                if (!e) return !1;
                var t = e.filter(function(e) {
                    return e.sceneName == this.sceneName;
                }.bind(this));
                this.friendArr = t;
                let s = this.owner, n = t.length, a = 1;
                -1 != this.line && -1 != this.column ? (n = this.line, a = this.column) : -1 != this.line ? (n = this.line, 
                a = Math.ceil(t.length / n)) : -1 != this.column && (a = this.column, n = Math.ceil(t.length / a)), 
                s.repeatX = n, s.repeatY = a, s.array = t, s.spaceX = this.spaceX, s.spaceY = this.spaceY, 
                s.selectHandler = new Laya.Handler(this, this.onClickImg), s.selectEnable = !0, 
                s.renderHandler = new Laya.Handler(this, this.onListRender);
                let o = (this.width + this.spaceX) * s.repeatX > s.width + 5, r = (this.height + this.spaceY) * s.repeatY > s.height + 5;
                return console.log("overstepy:", a, (this.height + this.spaceY) * s.repeatY, s.height), 
                o && (s.hScrollBarSkin = ""), r && (s.vScrollBarSkin = ""), o || r ? (this.scrollBar = s.scrollBar, 
                this.scrollBar.isVertical = r, s.timerLoop(16, this, this.autoScroll)) : this.scrollY && (s.vScrollBarSkin = "", 
                this.scrollBar = s.scrollBar, this.scrollBar.isVertical = !0, s.timerLoop(16, this, this.autoScroll)), 
                !0;
            }
            onDestroy() {
                n.default.Event.off("flows", this.onGetFlows, this);
            }
            onClickImg(e) {
            }
            autoScroll() {
                if (this.pic + this.scrollBar.value >= this.scrollBar.max || this.pic + this.scrollBar.value <= 0) {
                    this.pic *= -1;
                    let e = this.owner;
                    e.clearTimer(this, this.autoScroll), e.timerOnce(2e3, this, function() {
                        e.timerLoop(16, this, this.autoScroll);
                    });
                } else this.scrollBar.value += this.pic;
            }
            onListRender(e, t) {
                let s = e, n = s.getChildByName("icon");
                n = n || s, a.default.load(e.dataSource.imgUrl, function(e) {
                    n.texture = e;
                }), n.width = this.width, n.height = this.height;
                let i = s.getChildByName("name");
                i && (i.text = e.dataSource.showName);
                let o = s.getChildByName("player");
                o && (o.text = Math.floor(100 * Math.random()) + "万人在玩");
            }
            onDisable() {}
        };
    }, {
        "../core/TextureCache": 15,
        "./Center": 21,
        "./Statics": 26
    } ],
    25: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = "";
        function convertString(e) {
            var t = "";
            for (let s in e) t && (t += "&"), t += s + "=" + e[s];
            return t;
        }
        let i = {
            _id: "",
            token: ""
        };
        s.default = class {
            static setData(e, t) {
                i = {
                    _id: e,
                    token: t
                };
            }
            static get(e, t, s, a = "/user") {
                // var o = new Laya.HttpRequest();
                // o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, this, function(e) {
                //     s && s(null, JSON.parse(e).data);
                // }), o.once(Laya.Event.ERROR, this, function(t) {
                //     console.warn("request " + e + " error:", t), s && s(t, null);
                // }), o.on(Laya.Event.PROGRESS, this, function(e) {}), i._id && (t._id = i._id, t.token = encodeURIComponent(i.token)), 
                // t.router = e;
                // let r = convertString(t);
                // o.send(n + a + "?" + r, "", "get", "text");
            }
            static post(e, t, s, a = "/user") {
                // var o = new Laya.HttpRequest();
                // o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, this, function(e) {
                //     s && s(null, JSON.parse(e).data);
                // }), o.once(Laya.Event.ERROR, this, function(t) {
                //     console.warn("request " + e + " error:", t), s && s(t, null);
                // }), o.on(Laya.Event.PROGRESS, this, function(e) {}), i._id && (t._id = i._id, t.token = encodeURIComponent(i.token)), 
                // t.router = e;
                // let r = convertString(t);
                // o.send(n + a, r, "POST", "text");
            }
        };
    }, {} ],
    26: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Center");
        var i = "";
        const a = 5, o = "";
        class r {
            static register(e, t, s, i) {
                this.openid = e, this.version = t;
                let a = this;
                this.get("", {
                    openid: e,
                    version: t,
                    referrerInfoAppId: s
                }, (e, s) => {
                    if (console.log("注册结果:", s), s) {
                        a.flows = s.flows;
                        s.subscribe;
                        if (n.default.Event.emit("flows"), s.dictionary) for (let e = 0; e < s.dictionary.length; e++) s.dictionary[e].version == t && (a.dictionary[s.dictionary[e].key] = s.dictionary[e].value);
                    }
                    i(e, s);
                }, "/gameRegister");
            }
            static login(e, t, s) {
                this.openid = e, this.version = t;
                var i = this;
                this.get("login", {
                    openid: e,
                    version: t
                }, (e, a) => {
                    if (console.log("统计服务器登陆结果:", a), a) {
                        i.flows = a.flows;
                        a.subscribe;
                        if (n.default.Event.emit("flows"), n.default.ShuJu.channelName = a.channelName, 
                        a.dictionary) for (let e = 0; e < a.dictionary.length; e++) a.dictionary[e].version == t && (i.dictionary[a.dictionary[e].key] = a.dictionary[e].value);
                    }
                    s && s(e, a);
                });
            }
            static addFlowCount(e) {
                e.openid = this.openid, this.get("addFlowCount", e, (e, t) => {
                    console.log("addFlowCount:", t);
                });
            }
            static addFlowOpenCount(e) {
                e.openid = this.openid, this.get("addFlowOpenCount", e, (e, t) => {
                    console.log("addFlowCount:", t);
                });
            }
            static addEvent(e) {
                var t = {
                    openid: this.openid,
                    eventName: e
                };
                this.get("addEvent", t, (e, t) => {
                    console.log("addEvent:", t);
                });
            }
            static get(e, t, s, n = "/game") {
                var r = new Laya.HttpRequest();
                r.http.timeout = 1e4, r.once(Laya.Event.COMPLETE, this, function(e) {
                    s(null, JSON.parse(e).data);
                }), r.once(Laya.Event.ERROR, this, function(t) {
                    console.warn("request " + e + " error:", t), s(t, null);
                }), r.on(Laya.Event.PROGRESS, this, function(e) {}), t.gameid = a, t.route = e, 
                t.secret = o;
                let l = function(e) {
                    var t = "";
                    for (let s in e) t && (t += "&"), t += s + "=" + e[s];
                    return t;
                }(t);
                r.send(i + n + "?" + l, "", "get", "text");
            }
        }
        r.dictionary = {}, r.openid = "", r.version = "", r.flows = [], s.default = r;
    }, {
        "./Center": 21
    } ],
    27: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), function(e) {
            e.TweenData = class {
                constructor(e, t, s) {
                    this.time = 0, this.start = 0, this.end = 0, this.time = e, this.start = t, this.end = s;
                }
            };
            e.TweenTime = class {
                constructor() {
                    this.isRuning = !1, this.time = 0, this.tweens = [], this.index = 0, this.finishCB = null, 
                    this.time = 0;
                }
                clean() {
                    this.time = 0, this.tweens = [], this.index = 0, this.isRuning = !1;
                }
                reset() {
                    this.time = 0, this.index = 0, this.isRuning = !1;
                }
                addControl(e) {
                    this.tweens.push(e);
                }
                reStart(e = null) {
                    this.reset(), this.isRuning = !0, this.finishCB = e;
                }
                getRemainTime() {
                    let e = 0;
                    for (let t = this.index; t < this.tweens.length; t++) e += this.tweens[t].time;
                    return e - this.time;
                }
                update(e) {
                    if (!this.tweens.length) return 0;
                    if (this.index >= this.tweens.length) return this.tweens[this.tweens.length - 1].end;
                    for (this.time += e; ;) {
                        let e = this.tweens[this.index];
                        if (this.index >= this.tweens.length) return this.isRuning = !1, this.finishCB && this.finishCB(), 
                        this.tweens[this.tweens.length - 1].end;
                        if (this.time <= e.time) {
                            let t = this.time / e.time;
                            return (e.end - e.start) * t + e.start;
                        }
                        this.time -= e.time, this.index++;
                    }
                    return this.tweens[this.tweens.length - 1].end;
                }
            };
        }(s.Tween || (s.Tween = {}));
    }, {} ],
    28: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../Event");
        s.default = class {
            constructor(e) {
                this.__className__ = "Platform", this.isWeb = !1, this.isWehcat = !1, this.isQQ = !1, 
                this.isVivo = !1, this.Event = null, this.config = {}, this.bannerAD = null, this.interstitialAd = null, 
                this.videoAd = null, this.config = e, this.isWeb = !0, this.Event = new n.default();
            }
            getLaunchData() {
                return {};
            }
            getReferrer() {
                return {};
            }
            autoLogin(e) {
                e({
                    openid: "1"
                });
            }
            updateVersion() {}
            getUserInfo(e, t, s, n, i, a) {}
            destroyLoginButton() {}
            share(e) {}
            vibrateLong() {}
            vibrateShort() {}
            showBanner(e, t, s) {}
            destroyBanner() {}
            toVideo(e, t) {
                Laya.Scene.open("scenes/Toast.scene", !1, {
                    message: "未开通广告"
                });
            }
        };
    }, {
        "../Event": 23
    } ],
    29: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./PlatformWechat");
        s.default = class extends n.default {
            constructor(e) {
                super(e), this.isQQ = !0, this.isWehcat = !1;
            }
            showBanner(e, t, s) {}
            toVideo(e, t) {
                wx.showToast({
                    message: "未开通广告"
                });
            }
        };
    }, {
        "./PlatformWechat": 31
    } ],
    30: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Platform"), i = e("../Http");
        s.default = class extends n.default {
            constructor(e) {
                super(e), this.public = "PlatformVivo", this.isWeb = !1, this.isVivo = !0;
            }
            autoLogin(e) {
                var t = this;
                qg.login ? qg.login({
                    pkgName: "",
                    success: function(s) {
                        i.default.get("", {}, function(s, n) {
                            s ? (console.log("登陆失败即将再次自动登陆"), setTimeout(function() {
                                t.autoLogin(e);
                            }, 3e3)) : e && e(n);
                        }, "/game/gameUser/vivoLogin");
                    },
                    fail: function() {
                        console.log("qglog登陆失败");
                    },
                    complete: function() {}
                }) : qg.authorize({
                    type: "code",
                    success: function(t) {
                        e(t);
                    },
                    fail: function() {
                        qg.showToast({
                            message: "授权失败，请重新授权"
                        }), t.autoLogin(e);
                    },
                    complete: function() {}
                });
            }
        };
    }, {
        "../Http": 25,
        "./Platform": 28
    } ],
    31: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./Platform"), i = e("../Center"), a = e("../Http"), o = e("../Statics");
        let r = {
            "adunit-ca6df2f341ffb9cb": "补充金币",
            "adunit-7384b7997fee8f5a": "多倍领取",
            "adunit-b541d44469922b07": "复活",
            "adunit-43d1dc4f1bd48c7d": "签到"
        };
        s.default = class extends n.default {
            constructor(e) {
                super(e), this.__className__ = "PlatformWechat", this.luanchData = null, this.referrerInfo = null, 
                this.videoCB = null, this.onVideoError = null, this.onVideoClose = null, this.autoLoginCB = null, 
                this.isCheckNewVersion = !1, this.btnLogin = null, this.bannerCanShow = !1, this.videoName = "", 
                this.isWatchVideoing = !1, this.isWeb = !1;
                var t = wx.getLaunchOptionsSync();
                this.luanchData = t.query, this.referrerInfo = t.referrerInfo || {}, wx.onShareAppMessage(() => {
                }), 
                this.isWehcat = !0;
            }
            _openIdLogin(e, t) {
                console.log("_openIdLogin:", e), this.luanchData;
                let s = this.referrerInfo.channel;
                !s && this.referrerInfo.extraData && this.referrerInfo.extraData.channel && (s = this.referrerInfo.extraData.channel);
                let n = this;
                a.default.get("checkLogin", {
                    openid: e.openid,
                    referrerInfoAppId: s || ""
                }, function(s, i) {
                    s ? (console.log("登陆失败即将再次自动登陆"), setTimeout(function() {
                        n._openIdLogin(e, t);
                    }, 3e3)) : t && t(i);
                }, "/game/gameUser/openidLogin");
            }
            autoLogin(e) {
                let t = this;
                wx.cloudLogin(function(s) {
                    t._openIdLogin(s, e);
                });
            }
            _checkNewVersion() {
            }
            getUserInfo(e, t, s, n, i, a) {
                console.log("getUserInfo:", e, t, s, n), this.btnLogin && this.btnLogin.destroy();
                let o = !0;
                wx.getSystemInfoSync(), this.btnLogin = wx.createUserInfoButton({
                    type: "image",
                    imgage: i,
                    style: {
                        left: e,
                        top: t,
                        width: s,
                        height: n
                    },
                    withCredentials: !0
                });
                let r = this, l = "";
                wx.login({
                    success: function(e) {
                        l = e.code;
                    },
                    fail: function() {
                        r.destroyLoginButton(), r.getUserInfo(e, t, s, n, i, a);
                    }
                }), this.btnLogin.onTap(function(e) {
                    if (!e.iv) return o && a(e), void (o = !1);
                    let t = {
                        code: l,
                        iv: encodeURIComponent(e.iv),
                        encryptedData: encodeURIComponent(e.encryptedData),
                        signature: e.signature
                    };
                    o && a(t), o = !1;
                }), this.btnLogin.show();
            }
            destroyLoginButton() {
                this.btnLogin && this.btnLogin.destroy(), this.btnLogin = null;
            }
            share(e) {
            }
            showBanner(e, t, s) {
            }
            vibrateLong() {
            }
            vibrateShort() {
            }
            destroyBanner() {
            }
            _onVideoClose(e) {
            }
            _onVideoError() {
            }
            toVideo(e, t) {
            }
        };
    }, {
        "../Center": 21,
        "../Http": 25,
        "../Statics": 26,
        "./Platform": 28
    } ],
    32: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Component"), i = e("../module/CCAction"), a = e("../module/Center"), o = e("../module/Http"), r = e("./ClickReward");
        var l;
        !function(e) {
            e[e.START_GAME = 0] = "START_GAME", e[e.SHARE = 1] = "SHARE", e[e.Garage = 2] = "Garage", 
            e[e.Rank = 3] = "Rank", e[e.Sign = 4] = "Sign", e[e.Email = 5] = "Email";
        }(l || (l = {}));
        class c extends Laya.Scene {
            constructor() {
                super(), this.models = null, this.lastMouseX = 0, this.selectIndex = 0, this.scene3D = null,
                this.touched = false; 
                this.names = [ "Van", "Ambulance", "Sport Car", "Tanker Truck", "Mountain bike", "Tank" ], this.pics = [ 0, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5 ];
            }
            static get Instance() {
                return c._instance;
            }
            onAwake() {
                c._instance = this, 
                this.btnStart.on(Laya.Event.CLICK, this, this.onClick, [ l.START_GAME ]), 
                this.selectIndex = a.default.ShuJu.car, 
                this.getChildByName("3DScene").height = Laya.stage.height, this.getChildByName("bg").height = Laya.stage.height, 
                a.default.ShuJu.cars[0] = 1, this.getChildByName("bg").height = Laya.stage.height, 
                this.updateUI(), a.default.Event.on("coin", this.updateUI, this), 
                this._lc();
            }
            _lc() {
                let e = this, t = this.getChildByName("3DScene");
                if (Laya.Browser.onMiniGame) {
                } else Laya.Scene3D.load("res/3d/scenes/Main.ls", new Laya.Handler(this, function(s) {
                    t.addChild(s), e.init3DScene(s, t);
                }));
            }
            onClick(e) {
                switch (console.log("arg:", e), e) {
                  case l.START_GAME:
                    platform.getInstance().showInterstitial(()=>{
                        this.scene3D.destroy(), 
                        Laya.Scene.open("scenes/Play.scene", !0);
                    })
                    break;
                  case l.SHARE:
                    break;
                  case l.Rank:
                    break;
                  case l.Sign:
                    Laya.Scene.open("scenes/SignIn.scene", !1), Laya.Browser.onMiniGame && wx.aldSendEvent && wx.aldSendEvent("打开签到");
                    break;
                }
            }
            onOpened(e) {
                // console.log("onOpened:", e), e && e.showClick && r.default.canShow() && ( 
                // Laya.Scene.open("scenes/ClickReward.scene", !1, {
                //     cb: () => {
                //     }
                // }));
            }
            onClickClose() {
                a.default.Event.off(this), this.scene3D && this.scene3D.destroy(), Laya.Scene.open("scenes/Lobby.scene", !0);
            }
            onClickUse() {
                a.default.ShuJu.cars[this.selectIndex] ? a.default.ShuJu.car != this.selectIndex && (a.default.ShuJu.car = this.selectIndex, 
                a.default.attrNumber("car", this.selectIndex), this.updateUI()) : a.default.ShuJu.coin >= this.pics[this.selectIndex] ? (
                    a.default.ShuJu.coin -= this.pics[this.selectIndex], 
                a.default.ShuJu.car = this.selectIndex, a.default.ShuJu.cars[this.selectIndex] = 1, 
                a.default.attrObject({
                    coin: a.default.ShuJu.coin,
                    car: a.default.ShuJu.car,
                    cars: JSON.stringify(a.default.ShuJu.cars)
                }), 
                this.updateUI()
                ) : Laya.Scene.open("scenes/LackCoin.scene", !1);
               
            }
            updateUI() {
                this.coinLabel.text = "" + a.default.ShuJu.coin, this.lbCarName.text = this.names[this.selectIndex];
                let e = !1;
                this.btnStart.visible = !1, a.default.ShuJu.cars[this.selectIndex] ? a.default.ShuJu.car == this.selectIndex ? (this.btnUse.skin = "", 
                this.btnStart.visible = !0) : this.btnUse.skin = "garage/use.png" : (this.btnUse.skin = "garage/buy.png", 
                this.lbLabel.text = "" + this.pics[this.selectIndex], e = !0), this.btnUse.getChildByName("spCoin").visible = e, 
                this.lbLabel.visible = e;
                a.default.save();
            }
            onClickSelect(e) {
                let t = this.selectIndex + e;
                if (t < 0 || t >= 6) return;
                let s = this.models.getChildByName("" + this.selectIndex);
                s.active = !0;
                let a = s.getComponent(n.default);
                e < 0 ? a.runAction(new i.CCAction.MoveTo(.3, new Laya.Vector3(5.74, 0, -3.27), !0)) : a.runAction(new i.CCAction.MoveTo(.3, new Laya.Vector3(-5.74, 0, 3.27), !0)), 
                Laya.timer.once(300, this, function() {
                    s.active = !1;
                });
                let o = this.models.getChildByName("" + t);
                o.active = !0;
                let r = o.getComponent(n.default);
                r.transform.localPosition = e < 0 ? new Laya.Vector3(-5.74, 0, 3.27) : new Laya.Vector3(5.74, 0, -3.27), 
                r.runAction(new i.CCAction.MoveTo(.3, new Laya.Vector3(0, 0, 0), !0)), this.selectIndex = t, 
                this.lbCarName.text = this.names[this.selectIndex], this.updateUI();
            }
            init3DScene(e, t) {
                this.scene3D = e, e.getChildByName("root").active = !1;
                let s = e.getChildByName("Main Camera");
                s.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, s.transform.localPositionX = 0, 
                t.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), 
                t.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
                t.on(Laya.Event.MOUSE_UP, this, this.onTouchUp);
                t.on(Laya.Event.MOUSE_OUT, this, this.onTouchUp);
                let i = e.getChildByName("review");
                i.active = !0, i.transform.localPositionX = 0, this.models = i.getChildByName("model");
                for (let e = 0; e < this.models._children.length; e++) {
                    let t = this.models.getChildByName("" + e);
                    t.addComponent(n.default), t.active = e == this.selectIndex, console.log(e, ":", t.active);
                }
                this.btnLeft.on(Laya.Event.CLICK, this, this.onClickSelect, [ -1 ]), this.btnRight.on(Laya.Event.CLICK, this, this.onClickSelect, [ 1 ]), 
                this.btnClose.clickHandler = new Laya.Handler(this, this.onClickClose, [ 0 ]), this.btnUse.on(Laya.Event.CLICK, this, this.onClickUse, [ 1 ]);
            }
            onTouchStart() {
                this.touched = true;
                this.lastMouseX = this.mouseX;
            }
            onTouchMove() {
                if(this.touched ){
                    let e = this.mouseX - this.lastMouseX;
                    this.models.getChildByName("" + this.selectIndex).transform.localRotationEulerY += .5 * e, 
                    this.lastMouseX = this.mouseX;
                }
            }

            onTouchUp(){
                this.touched = false;
            }

            
            onDestroy() {
            }
            onDisable() {
                this.touched = false;
            }
        }
        c._instance = null, s.default = c;
    }, {
        "../module/CCAction": 19,
        "../module/Center": 21,
        "../module/Component": 22,
        "../module/Http": 25,
        "./ClickReward": 33
    } ],
    33: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../core/UIProgress"), i = e("../module/Center");
        s.default = class extends Laya.Scene {
            constructor() {
                super(), this.isClicking = !0, this._currentProgress = 0, this.clickCB = null;
            }
            static canShow() {
                let e = new Date(), t = Laya.LocalStorage.getItem("click-" + e.toLocaleDateString());
                return !i.default.ShuJu.isClick && !t;
            }
            onAwake() {
                this.progress = this.click.getChildByName("progress").getComponent(n.default), this.bg.height = Laya.stage.height, 
                this.button.y += Laya.stage.height - 1280, this.shou.y += Laya.stage.height - 1280, 
                this.finish.visible = !1, this.button.clickHandler = new Laya.Handler(this, this.onClickOpen), 
                this.btnGet.clickHandler = new Laya.Handler(this, this.onClickClose), this.timerLoop(1, this, this.onUpdate), 
                i.default.PingTai.Event.on("bannershow", this.onBannerShow, this), i.default.PingTai.showBanner("lobby"), 
                this.handMove();
            }
            handMove() {
                let e = this.shou.y;
                Laya.Tween.to(this.shou, {
                    y: e + 40
                }, 1e3, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(this.shou, {
                        y: e
                    }, 1e3, null, new Laya.Handler(this, this.handMove));
                }));
            }
            onBannerShow(e) {
                i.default.PingTai.bannerAD.hide();
            }
            onOpened(e) {
                this.clickCB = e ? e.cb : null;
            }
            onClickOpen() {
                this._currentProgress += 15, this.progress.progress = this._currentProgress / 100, 
                this._currentProgress >= 70 && (this.isClicking = !1, this.click.visible = !1, this.finish.visible = !0, 
                i.default.PingTai.bannerAD && i.default.PingTai.bannerAD.show());
            }
            onClickClose() {
                i.default.PingTai.Event.off(this), i.default.ShuJu.coin += 2e3, this.clickCB && this.clickCB(), 
                i.default.save();
                let e = new Date();
                Laya.LocalStorage.setItem("click-" + e.toLocaleDateString(), "1"), Laya.Scene.close("scenes/ClickReward.scene");
            }
            onUpdate() {
                this.isClicking && this._currentProgress > 0 && (this._currentProgress -= .3, this.progress.progress = this._currentProgress / 100);
            }
        };
    }, {
        "../core/UIProgress": 17,
        "../module/Center": 21
    } ],
    34: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Center"), i = e("../module/Http"), a = e("../module/Statics");
        var o = [  ];
        s.default = class extends Laya.Scene {
            constructor() {
                super(), this.loadSuccess = !1, this.loginSuccess = !1, this.sdkSuccess = !1;
            }
            onEnable() {
                this.bgImg.height = Laya.stage.height, this._lc(), this._al(), Laya.SoundManager.playMusic("res/audio/main.mp3", 0), 
                Laya.Stage.SCALE_FIXED_WIDTH;
            }
            _lc() {
                let e = this.progress, t = this;
                Laya.loader.create("res/3d/scenes/Main.ls", new Laya.Handler(this, function() {
                    t.loadSuccess = !0, t._af();
                }), new Laya.Handler(this, function(s) {
                    e.value = s, t.imgChe.x = 53 + 505 * s;
                }));
            }
            _af() {
                this.loadSuccess && this.loginSuccess && (n.default.ShuJu.isCheck = n.default.PingTai.isWehcat ? parseInt(a.default.dictionary.isCheck) : 0, 
                n.default.ShuJu.isClick = n.default.PingTai.isWehcat ? parseInt(a.default.dictionary.isClick) : 0, 
                console.log("isCheck:", n.default.ShuJu.isCheck), Laya.Scene.open("scenes/CheKu.scene", !0));
            }
            _al() {
                this.toHttpLogin(o[0], !0)
            }
            toHttpLogin(e, t = !1) {

                let ret = {
                    "isCheck":false,
                    "_id":"5dfcc3b10764a106c2345b60",
                    "isGuest":1,
                    "nickname":"测试用户0",
                    "headImgUrl":"",
                    "registerTimeTick":0,"openid":"0","token":"0","sex":0,"coin":0,"maxGate":208,"cars":[1],"inviteGet":[],"car":0,
                "signIn":{"signCount":1,"lastSignTime":1577069437812},"offlineTime":85484}
                try {
                    ret = platform.getInstance().getStorageSync("gameinfo")|| ret;
                } catch (error) {
                    
                }


                
                n.default.ShuJu = ret, this.loginSuccess = !0;
                platform.getInstance().cargamesstartup("Mini-Truck-Diver",()=>{
                    let cargames     = new Laya.Image();
                    cargames.scale(0.8,0.8);
                    cargames.skin    = "common/cargames.png";
                    cargames.centerX = 0;
                    cargames.bottom  = 10;
                    cargames.zOrder  = 2e3;
                    cargames.on(Laya.Event.MOUSE_DOWN,cargames,()=>{platform.getInstance().navigate("GAME","LOGO")})
                    Laya.stage.addChild(cargames);
                    window.cargames  = cargames;
                    this._af()
                });
            }
            sdkLogin(e, t) {
                let s = this, n = Laya.Browser.onWeiXin ? wx.getLaunchOptionsSync() : {
                    query: {},
                    referrerInfo: {}
                }, i = n.query.channel ? n.query.channel : "", o = Laya.Browser.onWeiXin ? wx.dataversion : "1.0.50";
                a.default.register(e, o, i, function(t, n) {
                    n ? (s.sdkSuccess = !0, s._af()) : s.sdkLogin(e, !1);
                });
            }
            onDisable() {}
        };
    }, {
        "../module/Center": 21,
        "../module/Http": 25,
        "../module/Statics": 26
    } ],
    35: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Center");
        s.default = class extends Laya.Script {
            constructor() {
                super();
            }
            onAwake() {
                let e = this.owner;
                n.default.ShuJu.isCheck ? e.visible = !1 : e.clickHandler = new Laya.Handler(this, function() {
                    Laya.Scene.open("scenes/TuiJian.scene", !1);
                });
            }
            onDisable() {}
        };
    }, {
        "../module/Center": 21
    } ],
    36: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Center");
        s.default = class extends n.ui.scenes.FuHuoUI {
            constructor() {
                super(), this.reliveCB = null;
            }
            onAwake() {
                this.lbGiveUp.on(Laya.Event.CLICK, this, this.onClick, [ 0 ]),
                this.btnRelive.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), 
                this.bgPanel.height = Laya.stage.height;

                platform.getInstance().initList(this.appList);
            }
            onClick(e) {
                if(0 == e ){
                    Laya.Scene.close("scenes/FuHuo.scene"), Laya.Scene.open("scenes/JieSuan.scene", !1)
                }else{
                    platform.getInstance().showReward(()=>{
                        Laya.Scene.close("scenes/FuHuo.scene"), this.reliveCB()
                    })
                }
            }
            onOpened(e) {
                this.reliveCB = e;
            }
        };
    }, {
        "../module/Center": 21,
        "../ui/layaMaxUI": 54
    } ],
    37: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Center"), a = e("../module/Statics");
        s.default = class extends n.ui.scenes.FlowsUI {
            constructor() {
                super(), this.friendArr = null, this.closeCb = null, this.scrollBar = null, this.pic = 1, 
                this.lasthasBanner = !1;
            }
            onAwake() {
                this.lasthasBanner = !!i.default.PingTai.bannerAD, i.default.PingTai.destroyBanner();
            }
            onEnable() {
                this.onGetFlows(), this.bgImg.height = Laya.stage.height, this.listBg.height = Laya.stage.height - this.listBg.y - 250, 
                this.mList.height = this.listBg.height - 22, this.btnContinue.clickHandler = new Laya.Handler(this, this.onClick);
            }
            onOpened(e) {
                this.closeCb = e;
            }
            onClick() {
                this.closeCb && this.closeCb();
            }
            onGetFlows() {
                let e = a.default.flows;
                if (!e) return !1;
                var t = e.filter(function(e) {
                    return "big" == e.sceneName;
                }.bind(this));
                return this.friendArr = t, this.mList.array = t, this.mList.repeatX = 2, this.mList.repeatY = t.length / 2, 
                this.mList.vScrollBarSkin = "", this.mList.renderHandler = new Laya.Handler(this, this.updateItem), 
                this.mList.selectEnable = !0, this.mList.selectHandler = new Laya.Handler(this, this.selectHander), 
                this.scrollBar = this.mList.scrollBar, this.mList.timerLoop(16, this, this.autoScroll), 
                !0;
            }
            autoScroll() {
                if (this.pic + this.scrollBar.value >= this.scrollBar.max || this.pic + this.scrollBar.value <= 0) {
                    this.pic *= -1, this.mList.clearTimer(this, this.autoScroll);
                    let e = this.mList;
                    e.clearTimer(this, this.autoScroll), e.timerOnce(2e3, this, function() {
                        e.timerLoop(16, this, this.autoScroll);
                    });
                } else this.scrollBar.value += this.pic;
            }
            selectHander(e) {
                if (-1 == e) return;
                console.log("selectHander:", e);
                let t = this.friendArr[e];
                if (t.channelName = i.default.ShuJu.channelName, i.default.PingTai.isWehcat && (a.default.addFlowCount(t), 
                wx.aldSendEvent && wx.aldSendEvent("点击导流", t)), Laya.Browser.onWeiXin) {
                    let e = {
                        appId: t.appId,
                        envVersion: "release",
                        path: t.path,
                        extraData: {},
                        fail: function() {
                            console.log("跳转失败:");
                        },
                        success: function() {
                            console.log("跳转成功"), a.default.addFlowOpenCount(t), wx.aldSendEvent && wx.aldSendEvent("打开导流", t);
                        },
                        complete: function() {}
                    };
                    console.log("navigateToMiniProgram", e), wx.navigateToMiniProgram(e);
                }
                this.mList.selectedIndex = -1;
            }
            updateItem(e, t) {
                e.getChildByName("icon").skin = e.dataSource.imgUrl, e.getChildByName("name").text = e.dataSource.showName;
            }
            onDisable() {}
        };
    }, {
        "../module/Center": 21,
        "../module/Statics": 26,
        "../ui/layaMaxUI": 54
    } ],
    38: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Http"), a = e("../module/Center"), o = e("./CheKu");
        s.default = class extends n.ui.scenes.InviteUI {
            constructor() {
                super(), this.inviteCount = 0;
            }
            onAwake() {
                let e = this;
                this.inviteCount = 0, i.default.get("inviteInfo", {}, function(t, s) {
                    e.inviteCount = s, e._acc();
                }), this.btnBack.clickHandler = new Laya.Handler(this, this.onClick, [ 0 ]), this.btnInvite.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), 
                this.btnGet1.clickHandler = new Laya.Handler(this, this._aget, [ this.btnGet1, 0 ]), 
                this.btnGet2.clickHandler = new Laya.Handler(this, this._aget, [ this.btnGet2, 1 ]), 
                this.btnGet3.clickHandler = new Laya.Handler(this, this._aget, [ this.btnGet3, 2 ]), 
                this.btnGet4.clickHandler = new Laya.Handler(this, this._aget, [ this.btnGet4, 3 ]), 
                this.btnGet5.clickHandler = new Laya.Handler(this, this._aget, [ this.btnGet5, 4 ]);
            }
            onClick(e) {
                0 == e ? ( Laya.Scene.close("scenes/Invite.scene")) : a.default.PingTai.share();
            }
            _aget(e, t) {
                if (t + 1 > this.inviteCount) return;
                let s = {};
                t < 2 ? (
                    a.default.ShuJu.coin += 500, s.coin = a.default.ShuJu.coin,
                    a.default.save()
                    
                ) : t < 4 ? (a.default.ShuJu.coin += 1e3, 
                s.coin = a.default.ShuJu.coin) : 4 == t && (a.default.ShuJu.cars[5] = 1, s.cars = JSON.stringify(a.default.ShuJu.cars)), 
                a.default.ShuJu.inviteGet[t] = 1, s.inviteGet = JSON.stringify(a.default.ShuJu.inviteGet), 
                a.default.attrObject(s), this._acc();
            }
            onOpened() {
                a.default.PingTai.share();
            }
            _acc() {
                let e = [ this.btnGet1, this.btnGet2, this.btnGet3, this.btnGet4, this.btnGet5 ];
                for (let t = 0; t < e.length; t++) {
                    let s = a.default.ShuJu.inviteGet[t];
                    e[t].disabled = !!s, e[t].label = void 0 === s ? this.inviteCount > t ? "领 取" : "未完成" : "已领取";
                }
            }
        };
    }, {
        "../module/Center": 21,
        "../module/Http": 25,
        "../ui/layaMaxUI": 54,
        "./CheKu": 32
    } ],
    39: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../core/Game"), a = e("../module/Center");
        s.default = class extends n.ui.scenes.JieSuanUI {
            constructor() {
                super(), this.coin = 0;
            }
            onAwake() {
                Laya.SoundManager.playSound("res/audio/lose.mp3"), 
                this.btnDouble.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), 
                this.coin = Math.floor(i.default.Instance.Distance), 
                console.log(i.default.Instance.Distance)
                this.lbDistance.text = Math.floor(i.default.Instance.Distance) + "m", 
                this.bgPanel.height = Laya.stage.height, this.lbExit.on(Laya.Event.CLICK, this, this.onClick, [ 0 ]), 
                this.lbCoin.text = "x" + this.coin;
                let e = i.default.Instance.Distance;
                a.default.ShuJu.maxGate < e && (a.default.ShuJu.maxGate = Math.floor(e), a.default.attrNumber("maxGate", e));

                platform.getInstance().initList(this.appList);
                
            }
            onClick(e) {
                if(0 == e){
                    i.default.Instance.destroyScene(), Laya.Scene.open("scenes/CheKu.scene", !0, {
                        showClick: !0
                    }), 
                    a.default.ShuJu.coin += this.coin, a.default.attrNumber("coin", a.default.ShuJu.coin);
                    
                }else{
                    platform.getInstance().showReward(()=>{
                        a.default.ShuJu.coin += 3 * this.coin, a.default.attrNumber("coin", a.default.ShuJu.coin), 
                        i.default.Instance.destroyScene(), Laya.Scene.open("scenes/CheKu.scene", !0, {
                            showClick: !0
                        })
                    })
                }
                a.default.save();
            }
        };
    }, {
        "../core/Game": 10,
        "../module/Center": 21,
        "../ui/layaMaxUI": 54
    } ],
    40: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Center");
        s.default = class extends n.ui.scenes.LackCoinUI {
            constructor() {
                super();
            }
            onAwake() {
                this.btnVideo.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), this.btnClose.on(Laya.Event.CLICK, this, this.onClick, [ 0 ]);
            }
            onClick(e) {
                if( 1 == e){
                    platform.getInstance().showReward(()=>{
                        i.default.ShuJu.coin += 1e3, Laya.Scene.close("scenes/LackCoin.scene"), i.default.Event.emit("coin");
                        i.default.save();
                    })
                }else{
                    Laya.Scene.close("scenes/LackCoin.scene");
                }
            }
        };
    }, {
        "../module/Center": 21,
        "../ui/layaMaxUI": 54
    } ],
    41: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI");
        s.default = class extends n.ui.scenes.LeftPullUI {
            constructor() {
                super(...arguments), this.isShow = !1;
            }
            onAwake() {
                this.btnClick.clickHandler = new Laya.Handler(this, this.onClickChange), this.bgPanel.height = Laya.Browser.height, 
                this.bgPanel.visible = !1;
            }
            onClickChange() {
                this.isShow ? (Laya.Tween.to(this.flowPanel, {
                    x: -this.flowPanel.width
                }, 1), Laya.Tween.to(this.btnClick, {
                    x: 30
                }, 1)) : (Laya.Tween.to(this.flowPanel, {
                    x: 0
                }, 1), Laya.Tween.to(this.btnClick, {
                    x: this.flowPanel.width + 30
                }, 1)), this.isShow = !this.isShow, this.btnClick.scaleX = this.isShow ? -1 : 1, 
                this.bgPanel.visible = this.isShow, this.redPoint.visible = !this.isShow;
            }
        };
    }, {
        "../ui/layaMaxUI": 54
    } ],
    42: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../core/UIProgress");
        class i extends Laya.Scene {
            constructor() {
                super();
            }
            static loadScene(e, t, s, n) {
                Laya.Scene.open("scenes/Loading.scene", !1, {
                    scene: e,
                    close: t || !1,
                    params: s || {}
                }), this.loadSuccessFunction = n;
            }
            onOpened(e) {
                let t = this.getChildByName("progress").getComponent(n.default);
                Laya.loader.load(e.scene, new Laya.Handler(this, function() {
                    Laya.Scene.open(e.scene, e.close, e.params, new Laya.Handler(this, function() {
                        Laya.Scene.close("scenes/Loading.scene");
                    })), this.loadSuccessFunction && this.loadSuccessFunction();
                }), new Laya.Handler(this, function(e, s) {
                    t.progress = e, console.log("progress:", e, s);
                }));
            }
        }
        i.loadSuccessFunction = null, s.default = i;
    }, {
        "../core/UIProgress": 17
    } ],
    43: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        s.default = class extends Laya.Script {
            constructor() {
                super();
            }
            onEnable() {
                let e = [ .8 * Math.random(), 0, 0, 0, 0, .8 * Math.random(), 0, 0, 0, 0, .8 * Math.random(), 0, 0, 0, 0, 0, 0, 0, 1, 0 ];
                var t = new Laya.ColorFilter(e);
                this.owner.filters = [ t ];
            }
            onDisable() {}
        };
    }, {} ],
    44: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Statics"), i = e("../module/Center"), a = "妖月紫殇,給本宫跪下,凉心女神,花祭♀离殇,冷艳红唇,老娘来巡山,凉忆亦凉心,傲娇污女,沫沫浅言,凤舞玉雪,姐无人阻挡,硬妹女王心,奇葩拽妹,南宫若星,锁骨女神,本宫微胖,少女霸主,虐心女王,持刀女将,战神美女,倾城祸世,冰寒雪凰,盖世仙女,依情飘雪,烈性辣妹,傲无霜,冷月如霜,野味仙女,北巷寒雪";
        s.default = class extends Laya.Scene {
            constructor() {
                super(...arguments), this.friendArr = [], this.friendIndex = 0, this.cb = null;
            }
            onAwake() {
                let e = a.split(","), t = Math.floor(8 * Math.random());
                console.log("iconIdx:", t), this.usericon.skin = "icons/" + t + ".png", this.username.text = "我是:" + e[t], 
                this.desc.text = "你的好友" + e[t] + "邀请您加入";
                var s = n.default.flows.filter(function(e) {
                    return "lobby" == e.sceneName;
                }.bind(this));
                this.friendArr = s;
                let o = Math.floor(Math.random() * s.length);
                this.friendIndex = o;
                let r = s[o];
                this.flowicon.skin = r.imgUrl, this.flowName.text = r.showName;
                let l = {
                    fid: r.fid,
                    sceneName: r.sceneName,
                    channelName: ""
                }, c = this;
                this.btnComfirm.clickHandler = new Laya.Handler(this, () => {
                }), this.btnCancel.clickHandler = new Laya.Handler(this, () => {
                    c.destroy();
                });
            }
        };
    }, {
        "../module/Center": 21,
        "../module/Statics": 26
    } ],
    45: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../core/Game");
        s.default = class extends n.ui.scenes.PauseUI {
            constructor() {
                super();
            }
            onAwake() {
                this.btnContinue.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), this.btnBack.clickHandler = new Laya.Handler(this, this.onClick, [ 0 ]), 
                this.bgImg.height = Laya.stage.height;
            }
            onClick(e) {
                Laya.Scene.close("scenes/Pause.scene"), 
                i.default.Instance && (i.default.Instance.Pause = !1)
            }
            onDisable() {}
        };
    }, {
        "../core/Game": 10,
        "../ui/layaMaxUI": 54
    } ],
    46: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        class n {}
        n.config = {
            web: {
                shareCfg: [],
                banner: [],
                video: []
            },
            wechat: {
                shareCfg: [ {
                    title: "想要跟我一起飙车吗",
                    imageUrl: "",
                    imageUrlId: "0c0cF+4LTZGMbnfOB81aSg=="
                } ],
                banner: {
                    garage: "adunit-e645a75323b961f4",
                    game: "adunit-72704c2f688362e8",
                    result: "adunit-aa209470d3db99bc",
                    relive: "adunit-1021301b071634dd",
                    lobby: "adunit-06c73c0e179b7487"
                },
                video: {
                    lackCoin: "adunit-dd016f03d8ed866c",
                    relive: "adunit-6d2e3de06c0c04bf",
                    result: "adunit-a9050483e7a8c68b",
                    signin: "adunit-b17fcccff7aac6e4"
                }
            },
            qq: {
                shareCfg: [ {
                    title: "想要跟我一起飙车吗",
                    imageUrl: "",
                    imageUrlId: "0c0cF+4LTZGMbnfOB81aSg=="
                } ],
                banner: {
                    garage: "adunit-e645a75323b961f4",
                    game: "adunit-72704c2f688362e8",
                    result: "adunit-aa209470d3db99bc",
                    relive: "adunit-1021301b071634dd",
                    lobby: "adunit-06c73c0e179b7487"
                },
                video: {
                    lackCoin: "adunit-dd016f03d8ed866c",
                    relive: "adunit-6d2e3de06c0c04bf",
                    result: "adunit-a9050483e7a8c68b",
                    signin: "adunit-b17fcccff7aac6e4"
                }
            },
            vivo: {
                shareCfg: [ {
                    title: "想要跟我一起飙车吗",
                    imageUrl: "",
                    imageUrlId: "0c0cF+4LTZGMbnfOB81aSg=="
                } ],
                banner: {
                    garage: "",
                    game: "",
                    result: "",
                    relive: "",
                    lobby: ""
                },
                video: {
                    lackCoin: "",
                    relive: "",
                    result: "",
                    signin: ""
                }
            }
        }, s.PlatformConfig = n;
    }, {} ],
    47: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Center");
        s.default = class extends Laya.Script {
            constructor() {
                super(), this.wechat = !0, this.web = !0, this.vivo = !0;
            }
            onEnable() {
                let e = !1;
                n.default.PingTai.isWeb ? e = this.web : n.default.PingTai.isWehcat ? e = this.wechat : n.default.PingTai.isVivo && (e = this.vivo), 
                this.owner.visible = e;
            }
        };
    }, {
        "../module/Center": 21
    } ],
    48: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("./../ui/layaMaxUI"), i = e("../core/Game"), a = e("../module/Center");
        s.default = class extends n.ui.scenes.PlayUI {
            constructor() {
                super(), this.GameMgr = null, this.isNormal = !1, this.scene3D = null, this._instance = null;
            }
            onAwake() {
                this.autoDestroyAtClosed = !0, this.btnPause.clickHandler = new Laya.Handler(this, this._opause, [ 0 ]), 
                Laya.SoundManager.playMusic("res/audio/game.mp3", 0), this._acc(), this._bcc(), 
                this._ccc(), this._dcc();
            }
            _acc() {
                let e = this;
                Laya.Tween.to(this.hintStartLabel, {
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 1e3, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(e.hintStartLabel, {
                        scaleX: 1,
                        scaleY: 1
                    }, 1e3, null, new Laya.Handler(e, e._acc));
                }));
            }
            _bcc() {
                let e = this;
                Laya.Tween.to(this.handLeft, {
                    x: -151
                }, 1e3, null, new Laya.Handler(this, function() {
                    this.handLeft.x = 34, e._bcc();
                }));
            }
            _ccc() {
                let e = this;
                Laya.Tween.to(this.handRight, {
                    x: 392
                }, 1e3, null, new Laya.Handler(this, function() {
                    this.handRight.x = 233, e._ccc();
                }));
            }
            _dcc() {
                let e = this.layerGame;
                Laya.Scene3D.load("res/3d/scenes/Main.ls", new Laya.Handler(this, function(t) {
                    e.addChild(t), this._ecc(t);
                }));
            }
            _ecc(e) {
                this.scene3D = e, e.getChildByName("review").active = !1, e.getChildByName("root").active = !0, 
                this.GameMgr = e.addComponent(i.default), this.GameMgr.setGameUI(this);
            }
            _opause() {
                i.default.Instance.Pause = !0, Laya.Scene.open("scenes/Pause.scene", !1);
            }
        };
    }, {
        "../core/Game": 10,
        "../module/Center": 21,
        "./../ui/layaMaxUI": 54
    } ],
    49: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Center"), a = e("../module/Http"), o = e("./CheKu");
        s.default = class extends n.ui.scenes.RankUI {
            constructor() {
                super(), this.rankIndex = 0, this.rankData = [];
            }
            onAwake() {
                this.mList.renderHandler = new Laya.Handler(this, this.updateItem), this.btnClose.clickHandler = new Laya.Handler(this, this.onClick, [ 0 ]), 
                this.btnShare.clickHandler = new Laya.Handler(this, this.onClick, [ 1 ]), this.bgImg.height = Laya.stage.height, 
                this._acc();
            }
            _acc() {
            }
            onClick(e) {
                0 == e ? (Laya.Scene.close("scenes/Rank.scene")) : i.default.PingTai.share();
            }
            _bcc(e, t) {
                if (!Laya.Browser.onWeiXin) return void (t.skin = e);
                let s = wx.createImage();
                s.src = e, s.onload = function(e) {
                    let n = new Laya.Texture2D();
                    n.loadImageSource(s, !0), t.texture = new Laya.Texture(n);
                };
            }
            updateItem(e, t) {
                console.log("updateItem:", e.dataSource.nickname, "->", e.dataSource.headImgUrl), 
                this._bcc(e.dataSource.headImgUrl, e.getChildByName("avatarUrl"));
            }
            onDisable() {}
        };
    }, {
        "../module/Center": 21,
        "../module/Http": 25,
        "../ui/layaMaxUI": 54,
        "./CheKu": 32
    } ],
    50: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        class n {}
        n.maxLoad = 3, n.roadWidth = 3.25, s.default = n;
    }, {} ],
    51: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../ui/layaMaxUI"), i = e("../module/Center"), a = e("../module/Http"), o = e("./CheKu");
        class r extends n.ui.scenes.SignInUI {
            constructor() {
                super(), this.signCoin = [ 1e3, 0, 2e3, 3e3, 4e3, 5e3, 0 ];
            }
            onAwake() {
                this.bgImg.height = Laya.stage.height, this.refershItem(), this.btnBack.clickHandler = new Laya.Handler(this, this.onClickBack, [ 0 ]), 
                this.btnSign.clickHandler = new Laya.Handler(this, this.onClickSign, [ 0 ]);
            }
            onClickBack() {
                Laya.Scene.close("scenes/SignIn.scene");
            }
            onClickSign() {
            }
            httpGet(e) {
            }
            static cday(e, t) {
                var s = new Date(e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()).getTime(), n = new Date(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()).getTime();
                return Math.floor((n - s) / 864e5);
            }
            refershItem() {
            }
            onDisable() {}
        }
        s.default = r;
    }, {
        "../module/Center": 21,
        "../module/Http": 25,
        "../ui/layaMaxUI": 54,
        "./CheKu": 32
    } ],
    52: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Center");
        s.default = class extends Laya.Scene {
            constructor() {
                super(), this.lasthasBanner = !1;
            }
            onAwake() {
                this.lasthasBanner = !!n.default.PingTai.bannerAD, n.default.PingTai.destroyBanner();
            }
            onEnable() {
                this.btnBack1.visible = !1, this.bg.height = Laya.stage.height, this.scrollList.height += Laya.stage.height - 1334, 
                n.default.PingTai.Event.on("bannershow", this.onBannerShow, this), this.frameOnce(100, this, () => {
                    n.default.PingTai.showBanner("lobby"), n.default.PingTai.isWeb && this.onBannerShow(), 
                    this.frameOnce(120, this, () => {
                        this.btnBack1.visible = !0;
                    });
                }), this.btnBack1.clickHandler = new Laya.Handler(this, this.onClick);
            }
            onClick() {
                this.destroy(), n.default.PingTai.Event.off(this), n.default.PingTai.destroyBanner(), 
                this.lasthasBanner && n.default.PingTai.showBanner("lobby");
            }
            onBannerShow() {
                this.frameOnce(60, this, () => {
                    this.btnEaseBack.visible = !1, this.frameOnce(120, this, () => {
                        this.btnBack1.visible = !0;
                    });
                });
            }
            onDisable() {}
        };
    }, {
        "../module/Center": 21
    } ],
    53: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../module/Center");
        s.default = class extends Laya.Scene {
            constructor() {
                super();
            }
            onAwake() {
                this.width = Laya.stage.width, this.height = Laya.stage.height;
                let e = !!n.default.PingTai.bannerAD;
                n.default.PingTai.destroyBanner(), this.backText.on(Laya.Event.CLICK, this, () => {
                    this.close(), e && n.default.PingTai.showBanner("lobby");
                });
            }
            onEnable() {}
            onDisable() {}
        };
    }, {
        "../module/Center": 21
    } ],
    54: [ function(e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var n = Laya.ClassUtils.regClass;
        !function(e) {
            !function(e) {
                class t extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Flows");
                    }
                }
                e.FlowsUI = t, n("ui.scenes.FlowsUI", t);
                class s extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/FuHuo");
                    }
                }
                e.FuHuoUI = s, n("ui.scenes.FuHuoUI", s);
                class i extends Laya.Scene {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Invite");
                    }
                }
                e.InviteUI = i, n("ui.scenes.InviteUI", i);
                class a extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/JieSuan");
                    }
                }
                e.JieSuanUI = a, n("ui.scenes.JieSuanUI", a);
                class o extends Laya.Dialog {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/LackCoin");
                    }
                }
                e.LackCoinUI = o, n("ui.scenes.LackCoinUI", o);
                class r extends Laya.Dialog {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/LeftPull");
                    }
                }
                e.LeftPullUI = r, n("ui.scenes.LeftPullUI", r);
                class l extends Laya.Dialog {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Loading");
                    }
                }
                e.LoadingUI = l, n("ui.scenes.LoadingUI", l);
                class c extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/MessageBox");
                    }
                }
                e.MessageBoxUI = c, n("ui.scenes.MessageBoxUI", c);
                class h extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Pause");
                    }
                }
                e.PauseUI = h, n("ui.scenes.PauseUI", h);
                class d extends Laya.Scene {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Play");
                    }
                }
                e.PlayUI = d, n("ui.scenes.PlayUI", d);
                class u extends Laya.Scene {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Rank");
                    }
                }
                e.RankUI = u, n("ui.scenes.RankUI", u);
                class f extends Laya.Scene {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Scenes");
                    }
                }
                e.ScenesUI = f, n("ui.scenes.ScenesUI", f);
                class g extends Laya.Dialog {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Setting");
                    }
                }
                e.SettingUI = g, n("ui.scenes.SettingUI", g);
                class m extends Laya.View {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/SignIn");
                    }
                }
                e.SignInUI = m, n("ui.scenes.SignInUI", m);
                class p extends Laya.Dialog {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/Toast");
                    }
                }
                e.ToastUI = p, n("ui.scenes.ToastUI", p);
            }(e.scenes || (e.scenes = {}));
        }(s.ui || (s.ui = {}));
    }, {} ]
}, {}, [ 2 ]);