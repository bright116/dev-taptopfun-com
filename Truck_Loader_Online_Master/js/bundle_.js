!function() {
    "use strict";
    class e extends Laya.Script {
        constructor() {
            super();
        }
        Init(e, i) {
            this.TFloop = e, this.MubiaoArr = i, this.TweenArr = [], this.ISDown = !1, this.DownArr = [], 
            this.TWen = null;
        }
        onEnable() {
            this.Rigidbody = this.owner.getComponent(Laya.RigidBody);
        }
        onTriggerEnter(e) {
            if (null != e.owner.msgSFZ && ("玩家" == e.owner.msgSFZ.type || "箱子" == e.owner.msgSFZ.type) && (this.DownArr.push(e), 
            0 == this.ISDown)) {
                if (this.ISDown = !0, Laya.Tween.to(this.owner.getChildAt(0).mask, {
                    x: 0
                }, 200, Laya.Ease.linearIn, null, 0, !0), this.MubiaoArr) for (var i = 0; i < this.MubiaoArr.length; i++) 
                if (1 != this.MubiaoArr[i].AniAoto && this.MubiaoArr[i].Animubiao) {

                    var t = new Laya.Point(this.MubiaoArr[i].Animubiao.x, this.MubiaoArr[i].Animubiao.y).distance(window.mythis.retrueOBJ(this.MubiaoArr[i].objID).x, window.mythis.retrueOBJ(this.MubiaoArr[i].objID).y) / new Laya.Point(this.MubiaoArr[i].Animubiao.x, this.MubiaoArr[i].Animubiao.y).distance(this.MubiaoArr[i].Anibegin.x, this.MubiaoArr[i].Anibegin.y) * this.MubiaoArr[i].AniTime;
                    Laya.Tween.to(window.mythis.retrueOBJ(this.MubiaoArr[i].objID), {
                        x: this.MubiaoArr[i].Animubiao.x,
                        y: this.MubiaoArr[i].Animubiao.y,
                        rotation: this.MubiaoArr[i].Animubiao.rotation
                    }, t, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoop, [ i, !1 ]), 0, !0, !1);
                }
                0 == this.TFloop && (this.owner.getComponent(Laya.BoxCollider).destroy(), this.owner.getComponent(Laya.RigidBody).destroy());
            }
        }
        TweenLoop(e, i) {
            1 == this.MubiaoArr[e].AniLoop && Laya.timer.once(2e3, this, function() {
                if (i) {
                    var t = new Laya.Point(this.MubiaoArr[e].Animubiao.x, this.MubiaoArr[e].Animubiao.y).distance(window.mythis.retrueOBJ(this.MubiaoArr[e].objID).x, window.mythis.retrueOBJ(this.MubiaoArr[e].objID).y) / new Laya.Point(this.MubiaoArr[e].Animubiao.x, this.MubiaoArr[e].Animubiao.y).distance(this.MubiaoArr[e].Anibegin.x, this.MubiaoArr[e].Anibegin.y) * this.MubiaoArr[e].AniTime;
                    Laya.Tween.to(window.mythis.retrueOBJ(this.MubiaoArr[e].objID), {
                        x: this.MubiaoArr[e].Animubiao.x,
                        y: this.MubiaoArr[e].Animubiao.y,
                        rotation: this.MubiaoArr[e].Animubiao.rotation
                    }, t, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoop, [ e, !1 ]), 0, !0, !1);
                } else {
                    t = new Laya.Point(this.MubiaoArr[e].Anibegin.x, this.MubiaoArr[e].Anibegin.y).distance(window.mythis.retrueOBJ(this.MubiaoArr[e].objID).x, window.mythis.retrueOBJ(this.MubiaoArr[e].objID).y) / new Laya.Point(this.MubiaoArr[e].Anibegin.x, this.MubiaoArr[e].Anibegin.y).distance(this.MubiaoArr[e].Animubiao.x, this.MubiaoArr[e].Animubiao.y) * this.MubiaoArr[e].AniTime;
                    Laya.Tween.to(window.mythis.retrueOBJ(this.MubiaoArr[e].objID), {
                        x: this.MubiaoArr[e].Anibegin.x,
                        y: this.MubiaoArr[e].Anibegin.y,
                        rotation: this.MubiaoArr[e].Anibegin.rotation
                    }, t, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoop, [ e, !0 ]), 0, !0, !1);
                }
            });
        }
        onDestroy() {
            for (var e = 0; e < this.TweenArr.length; e++) this.TweenArr[e].clear();
        }
        onTriggerExit(e) {
            if (1 == this.TFloop && ("玩家" == e.owner.msgSFZ.type || "箱子" == e.owner.msgSFZ.type)) {
                for (var i = 0; i < this.DownArr.length; i++) if (this.DownArr[i] == e) {
                    this.DownArr.splice(i, 1);
                    break;
                }
                if (this.DownArr.length > 0) ; else if (this.ISDown = !1, Laya.Tween.to(this.owner.getChildAt(0).mask, {
                    x: this.owner.width
                }, 200, Laya.Ease.linearIn, null, 0, !0, !1), this.MubiaoArr) for (i = 0; i < this.MubiaoArr.length; i++) if (1 != this.MubiaoArr[i].AniAoto && 1 != this.MubiaoArr[i].AniLoop) {
                    this.TweenArr[i] && this.TweenArr[i].clear();
                    var t = new Laya.Point(this.MubiaoArr[i].Anibegin.x, this.MubiaoArr[i].Anibegin.y).distance(window.mythis.retrueOBJ(this.MubiaoArr[i].objID).x, window.mythis.retrueOBJ(this.MubiaoArr[i].objID).y) / new Laya.Point(this.MubiaoArr[i].Animubiao.x, this.MubiaoArr[i].Animubiao.y).distance(this.MubiaoArr[i].Anibegin.x, this.MubiaoArr[i].Anibegin.y) * this.MubiaoArr[i].AniTime;
                    Laya.Tween.to(window.mythis.retrueOBJ(this.MubiaoArr[i].objID), {
                        x: this.MubiaoArr[i].Anibegin.x,
                        y: this.MubiaoArr[i].Anibegin.y,
                        rotation: this.MubiaoArr[i].Anibegin.rotation
                    }, t, Laya.Ease.linearIn, null, 0, !0, !1);
                }
            }
        }
        onTriggerStay(e) {}
    }
    class i extends Laya.Script {
        constructor() {
            super(), this.ARR = [];
        }
        onEnable() {
            this.owner.getComponent(Laya.RigidBody).allowSleep = !1, this.IDID = this.owner.WINid;
        }
        onTriggerEnter(e) {
            null != e.owner.msgSFZ && "箱子" == e.owner.msgSFZ.type && this.ARR.push({
                isOK: !1,
                other: e
            });
        }
        onTriggerExit(e) {
            for (var i = 0; i < this.ARR.length; i++) if (this.ARR[i].other == e) return void this.ARR.splice(i, 1);
        }
        onUpdate() {
            if (this.ARR.length > 0) {
                for (var e = !1, i = 0; i < this.ARR.length; i++) if (this.TriggerStay(this.ARR[i].other)) {
                    e = !0;
                    break;
                }
                window.WinArr[this.IDID] = 1 == e;
                var t = !0;
                for (i = 0; i < window.WinArr.length; i++) if (0 == window.WinArr[i]) {
                    t = !1;
                    break;
                }
                1 == t && window.mythis.player.x + 50 <= window.mythis.huoche.x - 143 && (window.mythis.huoche.getComponent(Laya.RigidBody).type = "dynamic", 
                window.mythis.GameWinFun(), this.ARR = []);
            }
        }
        TriggerStay(e) {
            if ("箱子" == e.owner.msgSFZ.type) {
                if (this.width1 = this.owner.width, this.height1 = this.owner.height, this.rotation1 = this.owner.rotation, 
                this.rotation1 > 360 ? this.rotation1 -= 360 : this.rotation1 && (this.rotation1 += 360), 
                1 == this.owner.typeID && (this.rotation1 >= 45 && this.rotation1 <= 135 || this.rotation1 >= 225 && this.rotation1 <= 315)) {
                    var i = this.width1;
                    this.width1 = this.height1, this.height1 = i;
                }
                var t, n, a;
                this.Top = {
                    x: this.owner.x - this.width1 / 2,
                    y: this.owner.y - this.height1 / 2
                };
                var o = e.owner.rotation;
                return o > 360 ? o -= 360 : o && (o += 360), t = e.owner.width, n = e.owner.height, 
                3 != e.owner.msgSFZ.sid && 6 != e.owner.msgSFZ.sid || (o >= 45 && o <= 135 || o >= 225 && o <= 315) && (t = e.owner.height, 
                n = e.owner.width), a = {
                    x: e.owner.x - t / 2,
                    y: e.owner.y - n / 2
                }, this.TFOver(t, n, a);
            }
        }
        TFOver(e, i, t) {
            var n = Math.abs(this.Top.x - t.x), a = Math.abs(this.Top.y - t.y);
            return Math.abs(this.width1 - n) * (this.height1 - a) / (this.width1 * this.height1) >= .6;
        }
    }
    class t extends Laya.Script {
        constructor() {
            super(), this.Inthis = [];
        }
        onEnable() {
            this.Rigidbody = this.owner.getComponent(Laya.RigidBody);
        }
        onTriggerEnter(e) {
            null != e.owner.msgSFZ && "箱子" == e.owner.msgSFZ.type && "xizhu" != e.owner.biaoshi1 && "xizhu" != e.owner.biaoshi2 && (this.Inthis[e.owner.msgSFZ.id] = e.owner);
        }
        onTriggerExit(e) {
            null != e.owner && null != e.owner.msgSFZ && "箱子" == e.owner.msgSFZ.type && "xizhu" != e.owner.biaoshi1 && "xizhu" != e.owner.biaoshi2 && (e.owner.getComponent(Laya.RigidBody).gravityScale = 1, 
            this.Inthis[e.owner.msgSFZ.id] = void 0);
        }
        onTriggerStay(e) {}
    }
    var n, a = Laya.Browser.window.wx, o = !1;
    window.RunListOpen = [];
    var s = {
        banbenID: "2.2.2",
        GameName: "小卡车",
        InitFBL: {
            width: 1334,
            height: 750
        }
    }, r = {
        appid: "wx2115168b4612d568",
        TPid: [ "adunit-62094d410025ac2a", "adunit-fbef2a46183e5904", "adunit-27ca906b13d4dbb9", "adunit-99aa49cac9ca8e3c", "adunit-79fa70b48fac03c8", "adunit-ada403ef89764484", "adunit-c989d04f19fb1472", "adunit-0d42468327fc28b8", "adunit-8e65089fdf240f85", "adunit-3aed3ddd5ccaae01" ],
        SPid: "adunit-6a44fa4aa400c375",
        shareBFB: 95,
        nowtp: 0,
        readtf: !1,
        TVorShare: !0,
        sharetime: null,
        shareNow: !1,
        banner: null,
        redio: null
    };
    window.serverUrlPre = "https://zzxkc.youdongxi.cn/v1.1/api", window.boxInfo, window.serverBox = "https://ad.geyian.ink", 
    window.serverBUY = "https://tj.geyian.ink";
    var h = !1, l = {
        env: "",
        login: "",
        GetInitPlayer: "",
        updatePlayer: "",
        getjson: ""
    };
    window.boxInfo = [ [ {
        appid: "",
        path: "",
        locationid: ""
    }, {
        appid: "",
        path: "",
        locationid: ""
    } ], [ {
        appid: "",
        path: "",
        locationid: ""
    }, {
        appid: "",
        path: "",
        locationid: ""
    } ] ];
    class d extends Laya.Script {
        constructor() {
            super(), window.P_RunTime_time = new Date(), this.inst = null, d.instance = this, 
            n = this, this.Player = {
                playerConfig: {
                    Name: this.GetRandName(),
                    HeadUrl: "",
                    FirstTime: "",
                    openid: "",
                    lastTime: "",
                    GKnow: 0,
                    GK: 0,
                    Sgin: "3.0"
                },
                sessid: "",
                TFUSE: !0,
                MoveJULIbiaoz: 60,
                Movespeed: 10,
                MovePOS: {
                    x: 0,
                    y: 0
                }
            }, this.GameLoadPath = "", this.MoveRot = 0, this.WXcloud_MSG = null, this.Player.playerConfig.openid = new Date().getTime() + "", 
            1 == h && this.initwxCloud(), this.MusicJson = [ {
                name: "主界面背景",
                URL: "music/bgm_zjm.mp3"
            }, {
                name: "游戏背景",
                URL: "music/bgm_game.mp3"
            }, {
                name: "按钮",
                URL: "music/but.mp3"
            }, {
                name: "胜利",
                URL: "music/win.mp3"
            }, {
                name: "吸铁石",
                URL: "music/xitieshi.mp3"
            } ], this.Open = {
                YX: !0,
                ZD: !0
            };
        }
        GetRandName() {
            var e = [ "小", "菜", "果", "心", "鬼", "白", "萌", "失", "微", "笑", "然", "云", "非", "宝", "窥", "范", "傻", "大", "龙", "云", "天", "甜", "莎", "阳", "懒", "笨", "生", "憩", "灰", "初", "王", "周", "赵", "毕" ];
            e = this.Randshuzhu(e);
            for (var i = this.GetRandNub(1, 3), t = "", n = 0; n < i; n++) t += e[this.GetRandNub(0, e.length - 1)];
            return t;
        }
        getInstance() {
            return this.inst || (this.inst = new d()), this.inst;
        }
        SaveMsgToJson(e, i) {
            var t = document.createElement("a");
            t.setAttribute("href", "data:text/plain;charset=utf-8," + JSON.stringify(e)), t.setAttribute("download", +i + ".json"), 
            t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
        }
        saveLocalData(e, i) {
            Laya.LocalStorage.setItem(e, JSON.stringify(i));
        }
        fetchLocalData(e) {
            return Laya.LocalStorage.getItem(e) ? JSON.parse(Laya.LocalStorage.getItem(e)) : null;
        }
        removeLocalData() {
            Laya.LocalStorage.clear();
        }
        getfangxiang(e, i) {
            var t = i.x - e.x, n = i.y - e.y;
            if (0 == t && 0 == n) return 0;
            var a = 360 * Math.atan(n / t) / (2 * Math.PI);
            return t >= 0 ? a : 180 + a;
        }
        InitYaoGan(e, i, t, n = Laya.stage, a, o, s) {
            this.TFHide = e, this.YaoGanRoat = s, this.bigCircle = i, this.smallCircle = t, 
            this.player_move = n, this.DownFun = o, this.HuaGan_Fun2 = a, this.TFHide ? (this.bigCircle.visible = !1, 
            this.smallCircle.visible = !1) : (this.bigCircle.visible = !0, this.smallCircle.visible = !0);
        }
        OpenYaoGan() {
            this.Player.TFUSE = !0, this.player_move.on(Laya.Event.MOUSE_DOWN, this, this.player_move_Down);
        }
        CloseYaoGan() {
            this.Player.TFUSE = !1, this.player_move.off(Laya.Event.MOUSE_DOWN, this, this.player_move_Down), 
            this.player_move.off(Laya.Event.MOUSE_MOVE, this, this.player_move_Move), this.player_move.off(Laya.Event.MOUSE_OUT, this, this.player_move_out), 
            this.player_move.off(Laya.Event.MOUSE_UP, this, this.player_move_up), this.HuaGan_Fun2 && this.HuaGan_Fun2(), 
            this.TFHide && (this.bigCircle.visible = !1, this.smallCircle.visible = !1);
        }
        player_move_Down() {
            this.Player.TFUSE && (this.DownFun && this.DownFun(), null != this.YaoGanRoat && (this.YaoGanRoat.rotation = 0), 
            this.TFHide ? (this.bigCircle.pos(Laya.stage.mouseX, Laya.stage.mouseY), this.smallCircle.pos(Laya.stage.mouseX, Laya.stage.mouseY), 
            this.bigCircle.visible = !0, this.smallCircle.visible = !0) : this.smallCircle.pos(this.bigCircle.x, this.bigCircle.y), 
            this.player_move.on(Laya.Event.MOUSE_MOVE, this, this.player_move_Move), this.player_move.on(Laya.Event.MOUSE_OUT, this, this.player_move_out), 
            this.player_move.on(Laya.Event.MOUSE_UP, this, this.player_move_up));
        }
        player_move_Move() {
            var e = this.getfangxiang(this.bigCircle, {
                x: Laya.stage.mouseX,
                y: Laya.stage.mouseY
            });
            this.MoveRot = e, isNaN(e) && (e = 0);
            var i = Laya.stage.mouseX - this.bigCircle.x, t = Laya.stage.mouseY - this.bigCircle.y, n = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
            if (n <= this.Player.MoveJULIbiaoz) n / this.Player.MoveJULIbiaoz, this.smallCircle.pos(Laya.stage.mouseX, Laya.stage.mouseY); else {
                var a = this.Player.MoveJULIbiaoz * i / n + this.bigCircle.x, o = this.Player.MoveJULIbiaoz * t / n + this.bigCircle.y;
                this.smallCircle.pos(a, o), 1;
                var s = this.GetMaxXXYY(e, this.Player.MoveJULIbiaoz);
                i = s.x, t = s.y;
            }
            null != this.YaoGanRoat && (this.YaoGanRoat.rotation = e), this.Player.MovePOS = this.DengbiZhuan(i, t);
        }
        player_move_out() {
            this.HuaGan_Fun2 && this.HuaGan_Fun2(), this.TFHide ? (this.bigCircle.visible = !1, 
            this.smallCircle.visible = !1) : this.smallCircle.pos(this.bigCircle.x, this.bigCircle.y), 
            this.player_move.off(Laya.Event.MOUSE_MOVE, this, this.player_move_Move), this.player_move.off(Laya.Event.MOUSE_OUT, this, this.player_move_out), 
            this.player_move.off(Laya.Event.MOUSE_UP, this, this.player_move_up);
        }
        player_move_up() {
            this.HuaGan_Fun2 && this.HuaGan_Fun2(), this.player_move.off(Laya.Event.MOUSE_MOVE, this, this.player_move_Move), 
            this.player_move.off(Laya.Event.MOUSE_OUT, this, this.player_move_out), this.player_move.off(Laya.Event.MOUSE_UP, this, this.player_move_up), 
            this.TFHide ? (this.bigCircle.visible = !1, this.smallCircle.visible = !1) : this.smallCircle.pos(this.bigCircle.x, this.bigCircle.y);
        }
        DengbiZhuan(e, i) {
            var t = this.Player.Movespeed / this.Player.MoveJULIbiaoz;
            return {
                x: e * t,
                y: i * t
            };
        }
        GetMaxXXYY(e, i) {
            var t = 0, n = 0, a = 0;
            return 0 == e ? n = i : -90 == e || 270 == e ? a = -1 * i : 180 == e ? n = -1 * i : 90 == e ? a = i : e < 0 ? (t = -1 * e * Math.PI / 180, 
            a = Math.sin(t) * i * -1, n = Math.cos(t) * i) : e > 180 && e < 270 ? (t = (90 - (270 - e)) * Math.PI / 180, 
            a = Math.sin(t) * i * -1, n = Math.cos(t) * i * -1) : e > 90 && e < 180 ? (t = (90 - (180 - e)) * Math.PI / 180, 
            n = Math.sin(t) * i * -1, a = Math.cos(t) * i) : e > 0 && e < 90 && (t = (90 - e) * Math.PI / 180, 
            n = Math.sin(t) * i, a = Math.cos(t) * i), {
                x: n,
                y: a
            };
        }
        butTween(e, i = new Laya.Handler(), t = !1) {
            e.offAll(), e.on(Laya.Event.MOUSE_DOWN, this, function() {
                this.TweenScalSim(e), !0;
            }.bind(this)), e.on(Laya.Event.MOUSE_UP, this, function() {
                this.TweenScalBig(e, i), 1 == t && this.ListRun(e.listID), !1;
            }.bind(this)), e.on(Laya.Event.MOUSE_OUT, this, function() {
                this.TweenScalBig(e, void 0), !1, 1 == t && this.ListRun(e.listID);
            }.bind(this));
        }
        TweenScalSim(e) {
            Laya.Tween.to(e, {
                scaleX: .8,
                scaleY: .8
            }, 100, Laya.Ease.linearOut);
        }
        TweenScalBig(e, i) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 100, Laya.Ease.linearOut), null != i && i.run();
        }
        Login(e) {

            platform.getInstance().startup("Truck-Loader-Online",()=>{
                let yad     = new Laya.Image();
                yad.scale(0.8,0.8);
                yad.skin    = "common/yad.png";
                yad.right   = 10;
                yad.top     = 10;
                yad.zOrder  = 2e3;
                yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                Laya.stage.addChild(yad);
                e&&e.run();
            })

            // n.LoadSuccess_Fun = e, a ? this.WXLogin() : console.log("当前不在微信环境下无法登录");
        }
        compareVersion(e) {
            var i = a.getSystemInfoSync().SDKVersion;
            i = i.split("."), e = e.split(".");
            for (var t = Math.max(i.length, e.length); i.length < t; ) i.push("0");
            for (;e.length < t; ) e.push("0");
            for (let n = 0; n < t; n++) {
                const t = parseInt(i[n]), a = parseInt(e[n]);
                if (t > a) return 1;
                if (t < a) return -1;
            }
            return 0;
        }
        WXLogin() {
            let e = a.getLaunchOptionsSync();
            e.query.inviter_id && e.query.inviter_id;
            window.sceneid = e.scene, n.Tongzhi("微信登录", "正在登录", null), 
            a.login({
                success: e => {
                    if (e.code) {
                        var i = e.code;
                        n.getcode(i);
                    }
                }
            });
        }
        getcode(e) {
            1 == h ? a.cloud.callFunction({
                name: l.login,
                data: {
                    code: "请求返回oppid"
                },
                success: e => {
                    n.Tongzhi("微信登录", "登录成功", null), n.Player.playerConfig.openid = e.result.openid, 
                    n.Tongzhi("获取用户信息", "正在获取", null), n.getplayer();
                },
                fail: e => {
                    n.Tongzhi("获取玩家code", "获取玩家code失败", {
                        err: e
                    });
                }
            }) : a.request({
                method: "POST",
                url: window.serverUrlPre + "/User/sendSessionCode.html",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: {
                    code: e
                },
                success: function(e) {
                    var i = e.data.result;
                    n.Player.playerConfig.openid = i.openid, n.Player.sessid = i.sessid, window.FistrUpdate = !1, 
                    n.getplayer();
                    var t = a.getLaunchOptionsSync();
                    console.log(t), null != n.fetchLocalData("P_buyPeople_Openid") && (window.P_buyPeople_Openid = n.fetchLocalData("P_buyPeople_Openid").id), 
                    null != t.query && null != t.query & "" != t.query && (window.P_key = t.query, window.P_GotoFromAppid = t.referrerInfo.appId, 
                    n.BUY_people_init());
                },
                fail: function() {
                    n.getcode(wxcode);
                }
            });
        }
        getplayer() {
            1 == h ? a.cloud.callFunction({
                name: l.GetInitPlayer,
                data: {
                    data: n.Player.playerConfig
                },
                success: e => {
                    console.log("获取登录用户信息"), console.log(e), "新注册" != e.result ? (n.playerConfig = e.result, 
                    null != n.LoadSuccess_Fun && n.LoadSuccess_Fun.run(), n.Tongzhi("获取用户信息", "新用户登录", null)) : n.Tongzhi("获取用户信息", "老用户登录", null);
                },
                fail: e => {
                    console.log(e), console.log("注册失败");
                },
                complete: () => {}
            }) : a.request({
                method: "POST",
                url: window.serverUrlPre + "/Utils/getData.html",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: {
                    sessid: n.Player.sessid
                },
                success: function(e) {
                    var i = e.data.result.data;
                    0 == window.FistrUpdate && ("3.0" == i.Sgin ? (console.log("已注册"), n.Player.playerConfig = i, 
                    null != n.LoadSuccess_Fun && n.LoadSuccess_Fun.runWith(i)) : (console.log("未注册"), 
                    n.UpdatePlayerMsg(), null != n.LoadSuccess_Fun && n.LoadSuccess_Fun.runWith(n.Player.playerConfig)), 
                    window.FistrUpdate = !0);
                },
                fail: function() {}
            });
        }
        UpdatePlayerMsg() {
            if (1 == h) a.cloud.callFunction({
                name: l.updatePlayer,
                data: {
                    data: n.Player.playerConfig
                },
                success: e => {
                    n.Tongzhi("更新玩家数据", "更新成功", null);
                },
                fail: e => {
                    n.Tongzhi("更新玩家数据", "更新失败", {
                        err: e
                    });
                },
                complete: () => {}
            }); else {
                var e = JSON.stringify(n.Player.playerConfig);
                a && a.request({
                    url: window.serverUrlPre + "/Utils/saveData.html",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        data: e,
                        sessid: n.Player.sessid
                    },
                    success(e) {
                        console.log("玩家数据上传成功");
                    },
                    complete(e) {}
                }), n.saveLocalData(s.GameName + s.banbenID, n.Player.playerConfig);
            }
        }
        TFYaoQinPeople() {
            var e = a.getLaunchOptionsSync();
            if (console.log(e.query), null != e.query.key) {
                console.log("你是被邀请人");
                var i = e.query.key;
                console.log("当前邀请kode：" + i), a.cloud.callFunction({
                    name: "yqjz",
                    data: {
                        opid: i
                    },
                    success: e => {
                        console.log(e);
                    },
                    fail: e => {
                        n.Tongzhi("判断key是否分享key", "判断失败", {
                            err: e
                        });
                    },
                    complete: () => {}
                });
            }
        }
        GetUserInfo(e = new Laya.Handler()) {
            a.getSetting({
                success(i) {
                    i.authSetting["scope.userInfo"] ? (a.getUserInfo({
                        success: i => {
                            n.Player.playerConfig.Name = i.userInfo.nickName, n.Player.playerConfig.HeadUrl = i.userInfo.avatarUrl, 
                            n.UpdatePlayerMsg(), e.run();
                        }
                    }), o = !0) : (o = !1, n.ShouQuan(e));
                }
            });
        }
        ShouQuan(e = new Laya.Handler()) {
            var i = a.createUserInfoButton({
                type: "text",
                text: "",
                style: {
                    left: 0,
                    top: 0,
                    width: 1920,
                    height: 1080,
                    lineHeight: 40,
                    backgroundColor: "",
                    color: "",
                    textAlign: "center",
                    fontSize: 16,
                    borderRadius: 4
                }
            });
            i.show(), i.onTap(t => {
                if (i.hide(), "getUserInfo:ok" == t.errMsg && 0 == o) o = !0, n.Player.playerConfig.Name = t.userInfo.nickName, 
                n.Player.playerConfig.HeadUrl = t.userInfo.avatarUrl, e.run(), n.UpdatePlayerMsg(), 
                n.BUY_people_shouQuan(), i.destroy(); else if ("getUserInfo:ok" != t.errMsg) return void a.showModal({
                    title: "是否重新授权",
                    content: "亲，接下来的游戏需要获取您的头像和姓名哟~",
                    success(e) {
                        e.confirm ? (i.destroy(), n.shouquan()) : e.cancel ? (console.log("已取消授权"), i.destroy()) : e.fail && i.destroy();
                    }
                });
            });
        }
        initwxCloud() {
            a.cloud.init(), this.WXcloud_MSG = a.cloud.database({
                env: l.env
            });
        }
        GetWXYjson(e, i, t, o) {
            a.cloud.callFunction({
                name: l.getjson,
                data: {
                    typeID: e
                },
                success: e => {
                    o(e.result);
                },
                fail: i => {
                    n.Tongzhi("获取json", "获取" + e + "失败", {
                        err: i
                    });
                },
                complete: () => {}
            });
        }
        GetCloudFileURL(e, i) {
            a.cloud.getTempFileURL({
                fileList: e,
                success: e => {
                    i(e);
                },
                fail: console.error
            });
        }
        InitTongZhi(e) {
            this.TongzhiTF = !0, this.TongzhiFun = e;
        }
        Tongzhi(e, i, t) {
            var n = {
                type: e,
                msg: i,
                otherDate: t
            };
            1 == this.TongzhiTF ? this.TongzhiFun(n) : console.log(n);
        }
        addScrollText(e) {
            this.ScrollText = e, this.ScrollText.overflow = Laya.Text.SCROLL, this.ScrollText.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText);
        }
        startScrollText(e) {
            this.ScrollText_prevX = this.ScrollText.mouseX, this.ScrollText_prevY = this.ScrollText.mouseY, 
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText), 
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.finishScrollText);
        }
        finishScrollText(e) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText), 
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.finishScrollText);
        }
        scrollText(e) {
            var i = this.ScrollText.mouseX, t = this.ScrollText.mouseY;
            this.ScrollText.scrollX += this.ScrollText_prevX - i, this.ScrollText.scrollY += this.ScrollText_prevY - t, 
            this.ScrollText_prevX = i, this.ScrollText_prevY = t;
        }
        Randshuzhu(e) {
            return e.sort((e, i) => Math.random() > .5 ? -1 : 1);
        }
        GetRandNub(e, i) {
            return Math.floor(Math.random() * (i - e + 1) + e);
        }
        PlayMusic(e) {
            YYGGames.audio.playMusic(this.GameLoadPath + this.MusicJson[e].URL, true);
            // this.Open.YX && (this.SoundManager = Laya.SoundManager.playMusic(this.GameLoadPath + this.MusicJson[e].URL, 0));
        }
        PlaySound(e, i = 1) {

            YYGGames.audio.play(this.GameLoadPath + this.MusicJson[e].URL, false);
            // Laya.SoundManager.playSound(this.GameLoadPath + this.MusicJson[e].URL, i)
        }
        wxZD(e) {
            a && this.Open.ZD && (e ? a.vibrateShort() : a.vibrateLong());
        }
        InitViewToView(e, i) {
            this.viewID = e, this.back_back = i;
        }
        ViewToView(e, i, t = !0, n = !1) {
            1 == t && (this.viewID[e].visible = !1), this.viewID[i].visible = !0, n ? (this.back_back.visible = !0, 
            this.back_back.on(Laya.Event.CLICK, this, function() {})) : (this.back_back.visible = !1, 
            this.back_back.offAll());
        }
        TiShiKuang(e, i = 2e3, t = !1) {
            null != a ? a.showToast({
                title: e,
                icon: "none",
                duration: i,
                mask: t
            }) : alert(e);
        }
        JiaoHukuang(e, i, t, n) {
            a && a.showModal({
                title: e,
                content: i,
                showCancel: !0,
                success(e) {
                    e.confirm ? t && t.run() : e.cancel ? n && n.run() : e.fail && n && n.run();
                }
            });
        }
        Main_Use() {
            window.begintime = Math.floor(new Date().getTime() / 1e3);
            var e = void 0;
            a ? e = Laya.Handler.create(this, function(e) {
                window.mythis.LoaderOverMuch++, n.Player.playerConfig = e, window.mythis.updateZJM();
            }) : n.fetchLocalData(s.GameName + s.banbenID) ? (n.Player.playerConfig = n.fetchLocalData(s.GameName + s.banbenID), 
            window.mythis.LoaderOverMuch++, window.mythis.updateZJM()) : window.mythis.LoaderOverMuch++, 
            this.Login(e), 
            window.shareInfo = [ {
                img: "",
                title: "快来吸箱子"
            }, {
                img: "",
                title: "全新游戏等你来玩"
            } ], a && (this.GetUpdate(), a.onShow(function(e) {
                console.log(e), console.log("回到游戏界面"), 1 == r.shareNow && (r.shareNow = !1, n.ShareGet());
            }), a.onHide(function(e) {
                n.BUY_people_StopMsg(), console.log(e), console.log("退出游戏"), n.UpdatePlayerMsg();
            })), this.SetCanLet();
        }
        initGG() {
            r.nowtp = Math.floor(Math.random() * (r.TPid.length - 1 - 0 + 1) + 0), window.showBannerTT = {
                weizhiID: 3,
                pos: {
                    x: 667,
                    y: 120
                }
            }, window.showBanner = !0, window.showBannerFun = Laya.Handler.create(this, function() {
                Laya.timer.once(1500, this, this.changgebanner);
            }), this.JtGG(), this.dtgg();
        }
        JtGG(e = 300) {
            null != r.TPid && (r.banner && (this.hidebanner(), r.banner.destroy()), r.nowtp > r.TPid.length - 1 && (r.nowtp = 0), 
            null != r.TPid && n.compareVersion("2.0.4") >= 0 && (r.banner = a.createBannerAd({
                adUnitId: r.TPid[r.nowtp],
                adIntervals: 30,
                style: {
                    left: 15,
                    top: 0,
                    width: e
                }
            }), r.banner.onResize(e => {
                r.banner.style.top = a.getSystemInfoSync().windowHeight - e.height - 20, r.banner.style.left = .5 * a.getSystemInfoSync().windowWidth - e.width / 2;
            }), r.banner.onLoad(e => {
                console.log("banner广告加载成功"), 1 == window.showBanner && (window.showBanner = !1, 
                n.bannershow(window.showBannerTT.weizhiID, window.showBannerTT.pos), null != window.showBannerFun && (window.showBannerFun.run(), 
                window.showBannerFun = void 0));
            }), r.banner.onError(e => {})), r.nowtp++);
        }
        dtgg() {
            null != r.SPid && (r.redio = a.createRewardedVideoAd({
                adUnitId: r.SPid,
                success: function(e) {}
            }), r.redio.onLoad(() => {
                r.readtf = !0, console.log("视频广告加载完毕");
            }), r.redio.onError(e => {
                r.readtf = !1, r.TVorShare = !1;
            }), r.redio.onClose(e => {
                e && e.isEnded || void 0 === e ? window.success_HanderUse && (window.success_HanderUse.run(), 
                window.success_HanderUse = void 0) : window.fail_HanderUse && (window.fail_HanderUse.run(), 
                window.fail_HanderUse = void 0);
            }));
        }
        ShareGet() {
            var e = parseInt(Date.parse(new Date()) - Date.parse(r.sharetime));
            if (e < 1e3) n.WXLog(!1, null); else if (e < 3e3) {
                Math.random() <= .2 ? n.GETshareGift() : n.WXLog(!1, null);
            } else {
                Math.random() <= r.shareBFB ? n.GETshareGift() : n.WXLog(!1, null);
            }
        }
        GETshareGift() {
            window.success_HanderUse && (window.success_HanderUse.run(), window.success_HanderUse = void 0);
        }
        WXLog(e, i) {
            e ? a.showModal({
                title: "分享成功",
                content: i,
                showCancel: !1,
                confiemText: "谢谢",
                success(e) {
                    e.confirm || e.cancel || e.fail;
                }
            }) : window.fail_HanderUse && (window.fail_HanderUse.run(), window.fail_HanderUse = void 0);
        }
        TVLog(e, i, t) {
            e ? a.showModal({
                title: "观影完毕",
                content: i,
                showCancel: !1,
                confiemText: "谢谢",
                success(e) {
                    e.confirm || e.cancel || e.fail;
                }
            }) : a.showModal({
                title: "观影失败",
                showCancel: !1,
                content: i,
                success(e) {
                    e.confirm || e.cancel || e.fail;
                }
            });
        }
        changgebanner(e, i) {
        }
        hidebanner() {
        }
        bannershow(e = 0, i = {
            x: 0,
            y: 0
        }) {
        }
        GG_all(e = 0, i, t) {
            i && (window.success_HanderUse = i), t && (window.fail_HanderUse = t), a ? (r.TVorShare = 0 == e ? !r.TVorShare : e, 
            r.TVorShare ? r.readtf && null != r.redio ? r.redio.show() : (r.readtf = !1, r.TVorShare = !1, 
            this.FXget(), r.shareNow = !0, r.sharetime = new Date()) : (this.FXget(), r.shareNow = !0, 
            r.sharetime = new Date())) : (window.success_HanderUse && window.success_HanderUse.run(), 
            window.fail_HanderUse && window.fail_HanderUse.run());
        }
        FXget() {
            if (a) {
                var e = Math.floor(Math.random() * (window.shareInfo.length - 1 - 0 + 1) + 0);
                a.aldShareAppMessage({
                    imageUrl: window.shareInfo[e].img,
                    title: window.shareInfo[e].title
                });
            }
        }
        GetUpdate() {
            var e = a.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                console.log("版本更新检测"), console.log(e);
            }), e.onUpdateReady(function() {
                a.showModal({
                    title: "更新提示",
                    content: "有新版本噢",
                    success(i) {
                        i.confirm && e.applyUpdate();
                    }
                });
            }), e.onUpdateFailed(function() {
                console.log("更新失败"), a.showModal({
                    title: "更新提示",
                    content: "更新失败,请检测网络，并重启小游戏~",
                    success(e) {}
                });
            });
        }
        GetGameInitConfig() {
            if (a) {
                a.updateShareMenu({
                    withShareTicket: !0
                }), a.showShareMenu({
                    withShareTicket: !0
                });
                var e = Math.floor(Math.random() * (window.shareInfo.length - 1 - 0 + 1) + 0);
                a.aldOnShareAppMessage(() => ({
                    title: window.shareInfo[e].title,
                    imageUrl: window.shareInfo[e].img,
                    success: function(e) {},
                    fail: function(e) {}
                })), this.initGG();
            }
        }
        GoGame(e, i = "", t = "", o, s, r = !1) {
            a ? ("none" != r && (this.bannerShow_tf = r), this.compareVersion("2.2.0") >= 0 && (n.boxShangChuan_WX_first(e, t, o), 
            a.navigateToMiniProgram({
                appId: e,
                path: i,
                extraData: {
                    path: "MGG游戏"
                },
                success(i) {
                    n.boxShangChuan_WX(e, t, o);
                },
                fail() {
                    null != s && s();
                }
            }))) : null != s && s();
        }
        ListRun(e) {
            var i = window.RunListOpen[e].time, t = window.RunListOpen[e].list, n = window.RunListOpen[e].boxid, a = window.RunListOpen[e].SCakboxTF, o = window.RunListOpen[e].much;
            if (0 != window.RunListOpen[e].Open) {
                var s = t.scrollBar.value / t.scrollBar.max;
                if (isNaN(s) && (s = 0), s > 1 ? s = 1 : s < 0 && (s = 0), a) {
                    if (1 == t.repeatY || 1 == t.repeatX) var r = window.boxInfo[n].length - o; else if (window.RunListOpen[e].repeatXTF) r = parseInt(window.boxInfo[n].length) - o * t.repeatY; else r = parseInt(window.boxInfo[n].length) - o * t.repeatX;
                    var h = parseInt(r * s) * i;
                    t.tweenTo(0, h, Laya.Handler.create(this, this.ListRun2, [ e ]));
                } else {
                    if (1 == t.repeatY || 1 == t.repeatX) r = window.boxInfo[n].length - o; else if (window.RunListOpen[e].repeatXTF) r = parseInt(window.boxInfo[n].length) - o * t.repeatY; else r = parseInt(window.boxInfo[n].length) - o * t.repeatX;
                    h = (r - parseInt(r * s)) * i;
                    t.tweenTo(r, h, Laya.Handler.create(this, this.ListRun2, [ e ]));
                }
            }
        }
        ListRun2(e) {
            window.RunListOpen[e].SCakboxTF ? window.RunListOpen[e].SCakboxTF = !1 : window.RunListOpen[e].SCakboxTF = !0, 
            this.ListRun(e);
        }
        OverQuanDao() {
            this.GotoWhere(0), this.hidebanner(), 
            // window.mythis.quandao_ceng.visible = !0, 
            // this.SetOpenCloseRunlist(window.mythis.quandao_list, !0), 
            // Laya.timer.once(2e3, this, function() {
            //     window.mythis.JX_btn.visible = !0;
            // });
            this.CloseQuanDao();
        }
        CloseQuanDao() {
            this.bannershow(0), window.mythis.JX_btn.visible = !1, window.mythis.quandao_ceng.visible = !1, 
            this.SetOpenCloseRunlist(window.mythis.quandao_list, !1);
        }
        OverQuanDao2() {
            this.GotoWhere(2), this.hidebanner(), window.mythis.quandao_2.visible = !0, this.SetOpenCloseRunlist(window.mythis.YX_list2, !0), 
            Laya.timer.once(2e3, this, function() {
                window.mythis.jixuYX2.visible = !0;
            });
        }
        CloseQuanDao2() {
            1 == this.bannerShow_tf && (console.log("重新打开"), this.bannershow(4), this.bannerShow_tf = !1), 
            window.mythis.jixuYX2.visible = !1, window.mythis.quandao_2.visible = !1, this.SetOpenCloseRunlist(window.mythis.YX_list2, !1);
        }
        GotoWhere(e) {
            if (null != window.boxInfo && null != window.boxInfo[e] && "" != window.boxInfo[e] && null != window.boxInfo[e] && window.boxInfo[e].length > 0) {
                var i = this.GetRandNub(0, window.boxInfo[e].length - 1), t = window.boxInfo[e][i];
                this.GoGame(t.appid, t.url, t.locationid, t.id, void 0, "none");
            }
        }
        SetOnceBOX(e, i, t, n = !1) {
            var a = Math.floor(Math.random() * (window.boxInfo[t].length - 1 - 0 + 1) + 0);
            e.texture = window.boxInfo[t][a].logo, e.offAll(), this.butTween(e, Laya.Handler.create(this, this.GoGame, [ window.boxInfo[t][a].appid, window.boxInfo[t][a].url, window.boxInfo[t][a].locationid, window.boxInfo[t][a].id, this.OverQuanDao2.bind(this), n ]), !1), 
            Laya.timer.once(i, this, this.SetOnceBOX, [ e, i, t ], !1);
        }
        SetOpenCloseRunlist(e, i) {
            if (null != window.boxInfo) for (var t = 0; t < window.RunListOpen.length; t++) if (e == window.RunListOpen[t].list) {
                if (window.boxInfo[window.RunListOpen[t].boxid].length <= window.RunListOpen[t].much) return;
                return window.RunListOpen[t].Open = i, void (i && this.ListRun(t));
            }
        }
        SetListJS(e, i = 1, t, n, a, o, s, r = !1, h = 2500) {
            if (null != window.boxInfo) {
            }
        }
        updateList(e, i) {
            2 == e.dataSource.type ? (e.getChildAt(0).texture = e.dataSource.boxInfo.logo, e.getChildAt(1).text = e.dataSource.boxInfo.title) : e.texture = e.dataSource.boxInfo.logo, 
            e.listID = e.dataSource.listID, this.butTween(e, Laya.Handler.create(this, this.GoGame, [ e.dataSource.boxInfo.appid, e.dataSource.boxInfo.url, e.dataSource.boxInfo.locationid, e.dataSource.boxInfo.id, e.dataSource.overFun, e.dataSource.TfOpenBanner ], !1), !0);
        }
        SetCanLet() {

        }
        GetboxAll() {
            window.boxinfo_id = [ {
                id: 283
            }, {
                id: 282
            }, {
                id: 281
            }, {
                id: 280
            }, {
                id: 279
            } ], window.boxInfo = [], window.boxInfo[0] = new Array(), window.boxInfo[1] = new Array(), 
            window.boxInfo[2] = new Array(), window.boxInfo[3] = new Array(), window.boxInfo[4] = new Array();
            for (var e = 0; e < window.boxinfo_id.length; e++) this.boxGetConfig2(window.boxinfo_id[e].id, e);
        }
        boxGetConfig2(e, i) {
            var t = new Laya.HttpRequest(), a = {
                softid: r.appid,
                locationid: e
            };
            a = this.PinJie_Fun(a), t.http.timeout = 1e4, t.once(Laya.Event.COMPLETE, this, function(e) {
                window.boxInfo[i] = JSON.parse(e).result, null != window.boxInfo[i] && "" != window.boxInfo[i] && null != window.boxInfo[i] && n.Setboxall(i);
            }), t.once(Laya.Event.ERROR, this, function(e) {}), t.send(window.serverBox + "/v1.1/api/getAdv.html", a, "POST", "application/x-www-form-urlencoded");
        }
        SetBoxOneOne(e, i, t = !1) {
            this.Randshuzhu(window.boxInfo[i]);
            var n = e.numChildren;
            window.boxInfo[i].length < n && (n = window.boxInfo[i].length);
            for (var a = 0; a < n; a++) e.getChildAt(a).texture = window.boxInfo[i][a].logo, 
            this.butTween(e.getChildAt(a), Laya.Handler.create(this, this.GoGame, [ window.boxInfo[i][a].appid, window.boxInfo[i][a].url, window.boxInfo[i][a].locationid, window.boxInfo[i][a].id, this.OverQuanDao2.bind(this), t ]), !1);
        }
        Setboxall(e) {
            if (1 == window.Cansetgg) switch (e) {
              case 0:
                this.SetListJS(window.mythis.quandao_list, 2, this.OverQuanDao2.bind(this), !1, 2, !1, e, "none", 1500);
                break;

              case 1:
                this.SetBoxOneOne(window.mythis.shibai_box, e, !0);
                break;

              case 2:
                this.SetListJS(window.mythis.YX_list2, 2, void 0, !0, 4, !1, e, "none"), this.SetListJS(window.mythis.YX_list, 1, this.OverQuanDao2.bind(this), !0, 4, !1, e);
                break;

              case 3:
                this.SetOnceBOX(window.mythis.zjm_gg1, 5e3, 3), this.SetOnceBOX(window.mythis.zjm_gg2, 5e3, 3), 
                this.SetOnceBOX(window.mythis.zjm_gg3, 5e3, 3), this.SetOnceBOX(window.mythis.zjm_gg4, 5e3, 3);
                break;

              case 4:
                this.SetListJS(window.mythis.zjm_dibu, 1, this.OverQuanDao2.bind(this), !0, 6, !1, e), 
                this.SetOpenCloseRunlist(window.mythis.zjm_dibu, !0);
                for (var i = 0; i < window.mythis.gk_ggall.numChildren; i++) this.SetOnceBOX(window.mythis.gk_ggall.getChildAt(i), 5e3, 4, !0);
            }
        }
        PinJie_Fun(e) {
            var i = "";
            for (var t in e) i += t + "=" + e[t] + "&";
            return i = i.substr(0, i.length - 1);
        }
        boxShangChuan_WX(e, i, t) {
            var a = new Laya.HttpRequest(), o = {
                softid: r.appid,
                uid: n.Player.playerConfig.openid,
                advid: e,
                locationid: i,
                id: t
            };
            o = n.PinJie_Fun(o), a.http.timeout = 1e4, a.once(Laya.Event.COMPLETE, n, function(e) {
                console.log("数据上报成功");
            }), a.once(Laya.Event.ERROR, n, function(e) {}), a.send(window.serverBox + "/v1.1/api/userclick.html", o, "POST", "application/x-www-form-urlencoded");
        }
        boxShangChuan_WX_first(e, i, t) {
            var a = new Laya.HttpRequest(), o = {
                softid: r.appid,
                uid: n.Player.playerConfig.openid,
                advid: e,
                locationid: i,
                id: t
            };
            o = n.PinJie_Fun(o), a.http.timeout = 1e4, a.once(Laya.Event.COMPLETE, n, function(e) {
                console.log("数据上报成功");
            }), a.once(Laya.Event.ERROR, n, function(e) {}), a.send(window.serverBox + "/v1.1/api/userpreclick.html", o, "POST", "application/x-www-form-urlencoded");
        }
        TimeCha(e, i) {
            if (null == e || null == i) return 0;
            var t = parseInt((Date.parse(e) - Date.parse(i)) / 1e3);
            return t < 0 && (t *= -1), t;
        }
        BUY_people_StopMsg() {
            var e = new Laya.HttpRequest(), i = {
                appid: r.appid,
                openid: window.P_buyPeople_Openid,
                posttime: Math.floor(new Date().getTime() / 1e3),
                time: n.TimeCha(new Date(), window.P_RunTime_time)
            };
            i = n.PinJie_Fun(i), e.http.timeout = 1e4, e.once(Laya.Event.COMPLETE, n, function(e) {}), 
            e.once(Laya.Event.ERROR, n, function(e) {}), e.send(window.serverBUY + "/v1.1/api/Activity/stay.html", i, "POST", "application/x-www-form-urlencoded");
        }
        BUY_people_shouQuan() {
            null == window.P_buyPeople_Openid && (window.P_buyPeople_Openid = "");
            var e = new Laya.HttpRequest(), i = {
                appid: r.appid,
                openid: window.P_buyPeople_Openid,
                posttime: Math.floor(new Date().getTime() / 1e3)
            };
            i = n.PinJie_Fun(i), e.http.timeout = 1e4, e.once(Laya.Event.COMPLETE, this, function(e) {}), 
            e.once(Laya.Event.ERROR, this, function(e) {}), e.send(window.serverBUY + "/v1.1/api/Activity/auth.html", i, "POST", "application/x-www-form-urlencoded");
        }
        BUY_people_init() {
            var e = new Laya.HttpRequest(), i = {
                appid: r.appid,
                posttime: Math.floor(new Date().getTime() / 1e3),
                auth: 0,
                wxopenid: n.Player.playerConfig.openid
            };
            null != window.P_key && null != window.P_key.key && (i.key = window.P_key.key), 
            null != window.P_GotoFromAppid && (i.fromapp = window.P_GotoFromAppid), i = n.PinJie_Fun(i), 
            e.http.timeout = 1e4, e.once(Laya.Event.COMPLETE, n, function(e) {
                JSON.parse(e).Result && (null == JSON.parse(e).Result.OpenId ? window.P_buyPeople_Openid = "" : window.P_buyPeople_Openid = JSON.parse(e).Result.OpenId);
                n.saveLocalData("P_buyPeople_Openid", {
                    id: window.P_buyPeople_Openid
                });
            }), e.once(Laya.Event.ERROR, n, function(e) {}), e.send(window.serverBUY + "/v1.1/api/Activity/uclick.html", i, "POST", "application/x-www-form-urlencoded");
        }
    }
    var u, w, y = Laya.Browser.window.wx, c = new d();
    window.CanJump = [ !0, !0 ], window.mythis;
    var g = [];
    window.IScomeFrom = !1;
    var p = 0;
    class m extends Laya.Scene {
        constructor() {
            if (super(), y) {
                var e = y.getLaunchOptionsSync().scene;
                1005 != e && 1006 != e || (window.IScomeFrom = !0);
            }
            this.tishiArr = [ "Try to absorb these boxes with magnet", "Push this box to the yellow cursor", "Press the button to open the gate of warehouse" ], this.wei2D = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384 ], 
            this.LoaderMuch = 5, this.LoaderOverMuch = 0;
            Laya.loader.create([ "prefab/kaiguan.prefab" ], Laya.Handler.create(this, function() {
                this.kaiguanPF = Laya.loader.getRes("prefab/kaiguan.prefab"), this.LoaderOverMuch++;
            })), Laya.loader.load("XML/MapConfig.json", Laya.Handler.create(this, function() {
                var e = Laya.loader.getRes("XML/MapConfig.json"), i = [];
                for (var t in e) i[t] = e[t];
                i && null == i[0] && i.splice(0, 1), w = i, this.LoaderOverMuch++;
            }), null, Laya.Loader.JSON);
        }
        getServerConfig() {
            var t = this;
            var complete = function(e) {
                var i = {
                    "share": [{
                        "title": "",
                        "img": ""
                    }],
                    "config": {
                        "version": 19,
                        "total": 1
                    }}
                i.share.length > 0 && (window.shareInfo = i.share, c.GetGameInitConfig());
                window.Config = i.config, 
                Laya.loader.load("game.json", Laya.Handler.create(this, function() {
                    u = Laya.loader.getRes("game.json"), 
                    c.saveLocalData("小卡车2" + window.Config.version, u), t.LoaderOverMuch++;
                }), null, Laya.Loader.JSON);
            }
            complete();
        }
        LoadOther() {
            this.XiFuAni = new Laya.Animation(), this.XiFuAni.loadAtlas("xifu/xi.atlas", Laya.Handler.create(this, function() {
                this.LoaderOverMuch++, this.shoubi3.addChild(this.XiFuAni), this.XiFuAni.rotation = 90, 
                this.XiFuAni.scaleX = 1.5, this.XiFuAni.scaleY = 1.5, this.XiFuAni.pos(120, -40), 
                this.XiFuAni.visible = !1;
            }));
        }
        updateZJM() {
            this.guanqiashu.value = c.Player.playerConfig.GK + 1;
        }
        onEnable() {
            window.mythis = this, this.getServerConfig(), c.Main_Use(), c.PlayMusic(0), this.LoadOther(), 
            this.SetUIAll(), this.InitBL(), this.SetAllSFZ();
        }
        UIMMP() {
            this.width = Laya.stage.width, this.player_move_ceng.width = Laya.stage.width / 5 * 3;
            for (var e = [ {
                node: this.zjm_back,
                x: 667
            }, 
            // {
            //     node: this.youxi_list,
            //     x: 661
            // }, 
            {
                node: this.back_back,
                x: 667
            }, {
                node: this.back,
                x: 667
            }, {
                node: this.win_ceng,
                x: 667
            }, {
                node: this.but_xifu,
                x: 1067
            }, {
                node: this.but_tiaoyue,
                x: 1230
            }, {
                node: this.game_GK,
                x: 667
            }, {
                node: this.fuhuo_,
                x: 667
            }, {
                node: this.game_Set,
                x: 113
            }, {
                node: this.zanting_,
                x: 667
            }, {
                node: this.zadan_,
                x: 667
            }, {
                node: this.quandao_x,
                x: 667
            }, {
                node: this.choose_x,
                x: 667
            }, {
                node: this.game_kazhu,
                x: 211
            }, {
                node: this.quandao2_,
                x: 667
            }, {
                node: this.back2_ceng,
                x: 667
            }, {
                node: this.smallYG,
                x: 220
            }, {
                node: this.bigYG,
                x: 220
            } ], i = 0; i < e.length; i++) e[i].node.x = e[i].x / 1334 * Laya.stage.width;
        }
        SetAllSFZ() {
            this.player.msgSFZ = {
                id: 0,
                type: "玩家",
                name: "小果粒"
            }, this.lun1.msgSFZ = {
                id: 1,
                type: "玩家",
                name: "轮子1"
            }, this.lun2.msgSFZ = {
                id: 2,
                type: "玩家",
                name: "轮子2"
            }, this.shoubi1.msgSFZ = {
                id: 3,
                type: "玩家",
                name: "手臂1"
            }, this.shoubi2.msgSFZ = {
                id: 4,
                type: "玩家",
                name: "手臂2"
            }, this.shoubi3.msgSFZ = {
                id: 5,
                type: "玩家",
                name: "手臂3"
            }, this.xixi_obj.msgSFZ = {
                id: 0,
                type: "玩家_吸附",
                name: "玩家_吸附"
            }, this.huoche.msgSFZ = {
                id: 0,
                type: "货车",
                name: "货车_底盘"
            }, this.lunz_h1.msgSFZ = {
                id: 1,
                type: "货车",
                name: "货车——轮子1"
            }, this.lunz_h2.msgSFZ = {
                id: 2,
                type: "货车",
                name: "货车——轮子2"
            };
        }
        SetUIAll() {
            this.viewID = [ this.ZJM_ceng, this.game_Ceng, this.zhanting_ceng, this.chenggong_ceng, this.fuhuo_ceng, this.choose_ceng ], 
            c.InitViewToView(this.viewID, this.back_back), this.AddBut(), this.UIMMP();
        }
        InitBL() {
            this.updateZJM(), c.InitYaoGan(!1, this.bigYG, this.smallYG, this.player_move_ceng, this.player_up.bind(this), void 0, this.bigYG.getChildAt(0)), 
            this.XIorNot = !1, this.huoche_rig = this.huoche.getComponent(Laya.RigidBody), this.shoubi1_rig = this.shoubi1.getComponent(Laya.RigidBody), 
            this.shoubi2_rig = this.shoubi2.getComponent(Laya.RigidBody), this.shoubi3_rig = this.shoubi3.getComponent(Laya.RigidBody), 
            this.xixiScrip = this.xixi_obj.getComponent(t), this.shoubi3_ = this.shoubi2.getComponent(Laya.RevoluteJoint), 
            this.player_rig = this.player.getComponent(Laya.RigidBody), this.shoubi1_ = this.player.getComponent(Laya.RevoluteJoint), 
            this.shoubi2_ = this.shoubi1.getComponent(Laya.RevoluteJoint), this.wheel = this.lun1.getComponent(Laya.WheelJoint), 
            this.whee2 = this.lun2.getComponent(Laya.WheelJoint), this.lunz_h1_ = this.lunz_h1.getComponent(Laya.WheelJoint), 
            this.lunz_h2_ = this.lunz_h2.getComponent(Laya.WheelJoint), this.whee1_rig = this.lun2.getComponent(Laya.RigidBody), 
            this.whee2_rig = this.lun2.getComponent(Laya.RigidBody), this.shoubi3_rig = this.shoubi3.getComponent(Laya.RigidBody), 
            this.shoubi3;
        }

        onVoice(){
            let v = platform.getInstance().getStorageSync("soundActive") || 1000;
            if(v===1000){
                platform.getInstance().setStorageSync("soundActive",10001) 
            }else{
                platform.getInstance().setStorageSync("soundActive",1000)  
            }
            this.refreshv();

        }

        refreshv(){
            let v = platform.getInstance().getStorageSync("soundActive") || 1000;
            if(v===1000){
                this.voice.skin = "qietu/qietu/stop/btn_sound_on.png";
                YYGGames.audio.pause = false
                // Laya.SoundManager.muted = false;
            }else{
                this.voice.skin = "qietu/qietu/stop/btn_sound_off.png";
                YYGGames.audio.pause = true;
            }
        }




        AddBut() {
            this.dev_open_gk = false;
            var t = this;
            Laya.stage.on(Laya.Event.KEY_DOWN,this,(e)=>{
                if(e.keyCode === Laya.Keyboard.U){
                    t.dev_open_gk = false;
                    t.gk_list.refresh();
                }
                if(e.keyCode === Laya.Keyboard.L){
                    t.dev_open_gk = true;
                    t.gk_list.refresh();
                }
            })

            this.BoomBF.on(Laya.Event.COMPLETE, this, function() {
                this.BoomBF.visible = !1;
            }), c.butTween(this.next_btn, Laya.Handler.create(this, this.GameNext, [], !1)), 
            c.butTween(this.game_begin, Laya.Handler.create(this, this.GameBegin, [], !1)), 
            c.butTween(this.but_xifu, Laya.Handler.create(this, this.GameXIfuOpenClose, [], !1)), 
            c.butTween(this.but_tiaoyue, Laya.Handler.create(this, this.PlayerJump, [], !1)), 
            c.butTween(this.game_Set, Laya.Handler.create(this, this.GameZT, [], !1)),

            this.voice.on(Laya.Event.CLICK,this, this.onVoice),
            
            
            
            c.butTween(this.jixuYX, Laya.Handler.create(this, this.GameJX, [], !1)), 
            c.butTween(this.new_YX, Laya.Handler.create(this, this.GameResut, [], !1)), c.butTween(this.back_shouye, Laya.Handler.create(this, this.GameReture, [], !1)), 
            c.butTween(this.jump_btn, Laya.Handler.create(this, this.AddDanDan, [], !1)), this.jump_btn.on(Laya.Event.MOUSE_DOWN, this, function() {
                Laya.Tween.to(this.cheche_tan, {
                    y: 100
                }, 100, Laya.Ease.linearIn, null, 0, !0);
            }), this.jump_btn.on(Laya.Event.MOUSE_UP, this, function() {
                Laya.Tween.to(this.cheche_tan, {
                    y: 160
                }, 100, Laya.Ease.linearIn, null, 0, !0);
            }), c.butTween(this.game_over_next, Laya.Handler.create(this, this.GameRecover, [], !1)), 
            c.butTween(this.wuxian_time, Laya.Handler.create(this, this.GameWuDiFun, [], !1)), 
            c.butTween(this.wuxian_time2, Laya.Handler.create(this, this.Fuhuo, [], !1)), 
            c.butTween(this.JX_btn, Laya.Handler.create(c, c.CloseQuanDao, [], !1)), 
            c.butTween(this.game_kazhu, Laya.Handler.create(this, this.GameKazhu, [], !1)), 
            c.butTween(this.jixuYX2, Laya.Handler.create(c, c.CloseQuanDao2, [], !1)), c.butTween(this.quandao2_goto, Laya.Handler.create(c, c.GotoWhere, [ 2 ], !1)), 
            c.butTween(this.quandao1_goto, Laya.Handler.create(c, c.GotoWhere, [ 0 ], !1)), 
            c.butTween(this.gk_last, Laya.Handler.create(this, this.GotoNext, [ -1 ], !1)), 
            c.butTween(this.gk_next, Laya.Handler.create(this, this.GotoNext, [ 1 ], !1));
        }
        GameKazhu() {
            this.closeTimer(), this.game_kazhu.visible = !1, this.Boom(), Laya.timer.once(1e3, this, function() {
                this.Gameover(), this.game_kazhu.visible = !0;
            });
        }
        SetChooseList() {
            null == this.gk_choose_list.renderHandler && (this.gk_choose_list.scrollBar.hide = !0, 
            this.gk_choose_list.renderHandler = new Laya.Handler(this, this.UpdateChooseList), 
            this.gk_choose_list.repeatX = Math.ceil(u.length / 10), p = Math.floor(c.Player.playerConfig.GKnow / 10)), 
            null == this.gk_list.renderHandler && (this.gk_list.scrollBar.hide = !0, this.gk_list.renderHandler = new Laya.Handler(this, this.Updategk_list)), 
            this.SetCooseSS(), this.SetGKSS();
        }
        SetGKSS() {
            var e = [], i = 21 - 10 * (p + 1);
            i > 0 ? i = 10 : i += 10;
            for (var t = 0; t < i; t++) e.push({
                a: "a"
            });
            this.gk_list.array = e;
        }
        SetCooseSS() {
            for (var e = [], i = 0; i < Math.ceil(u.length / 10); i++) e.push("1");
            this.gk_choose_list.array = e, this.gk_choose_list.tweenTo(p, 100);
        }
        GotoNext(e) {
            1 == e ? p < Math.ceil(u.length / 10) - 1 && (p++, this.SetCooseSS(), this.SetGKSS()) : -1 == e && p > 0 && (p--, 
            this.SetCooseSS(), this.SetGKSS());
        }
        Updategk_list(e, i) {
            var t = i + 1 + 10 * p;
            e.getChildAt(0).value = t;
            if( c.Player.playerConfig.GK >= t - 1 || this.dev_open_gk){
                e.skin = "gkye/12.png", 
                c.butTween(e, Laya.Handler.create(this, this.GotoGame, [ t - 1 ], !1))
            }else{
                e.offAll(), 
                e.skin = "gkye/14.png"
            }
        }





        UpdateChooseList(e, i) {
            e.texture = p == i ? "gkye/582.png" : "gkye/496.png", e.getChildAt(0).text = i + 1;
        }
        changgeBB() {
            c.changgebanner(300, !0), Laya.timer.once(1e4, this, this.changgeBB);
        }
        OpenChooseGK() {
            this.SetChooseList(), c.ViewToView(0, 5, !0, !1), Laya.timer.once(1e4, this, this.changgeBB), 
            c.SetOpenCloseRunlist(window.mythis.zjm_dibu, !1);
        }
        GotoGame(e) {
            c.PlayMusic(1), c.ViewToView(5, 1, !0, !1), c.Player.playerConfig.GKnow = e, this.CreateAllMap(), 
            this.OpenTimer(), Laya.timer.clear(this, this.changgeBB),
            Laya.timer.once(1500, c, c.changgebanner);
        }
        GameBegin() {
            c.PlaySound(2), 
            this.GameWuDi = !1;
            if(this.LoaderOverMuch == this.LoaderMuch){
                platform.getInstance().showInterstitial(()=>{
                    window.mythis.OpenChooseGK()
                });
            }else{
                c.TiShiKuang("LOADING:" + Math.floor(this.LoaderOverMuch / this.LoaderMuch * 100) + "%");
            }
        }
        PlayerRecover() {
            this.player.y = u[c.Player.playerConfig.GKnow].playerMsg.WanJia.y, 
            this.player.x = u[c.Player.playerConfig.GKnow].playerMsg.WanJia.x, 
            this.lun1.x = 137, this.lun1.y = 95, this.lun1.rotation = 0, this.lun2.x = 17, this.lun2.y = 95, 
            this.lun2.rotation = 0, this.shoubi1.x = 79, this.shoubi1.y = 28, this.shoubi1.rotation = -45, 
            this.shoubi2.x = 134, this.shoubi2.y = -26, this.shoubi2.rotation = 90, this.shoubi3.x = 134, 
            this.shoubi3.y = 95, this.shoubi3.rotation = 90, this.xixi_obj.x = 134, this.xixi_obj.y = 44, 
            this.xixi_obj.rotation = 90, this.huoche.x = u[c.Player.playerConfig.GKnow].playerMsg.Kache.x, 
            this.huoche.y = u[c.Player.playerConfig.GKnow].playerMsg.Kache.y, 
            this.lunz_h1.x = 334, 
            this.lunz_h1.y = 199, 
            this.lunz_h2.x = 105, this.lunz_h2.y = 199, 
            this.leaveCar.pos(this.huoche.x, this.huoche.y - 110), 
            c.Player.playerConfig.GKnow < 3 ? (this.tishi.visible = !0, this.tishi.x = this.player.x + 100, 
            this.tishi.y = this.player.y - 143, this.tishi.text = this.tishiArr[c.Player.playerConfig.GKnow]) : this.tishi.visible = !1, 
            this.player_rig.linearVelocity = {
                x: 0,
                y: 0
            };
            var e = this.shoubi3.localToGlobal(new Laya.Point(this.move_pos.x, this.move_pos.y));
            this.mouse_point.x = e.x, this.mouse_point.y = e.y, 
            window.PhySicsFunMove(e.x, e.y);
        }
        CreateAllMap() {
            if(c.Player.playerConfig.GKnow >= 21){
                c.Player.playerConfig.GKnow = 0;
            }

            null != u[c.Player.playerConfig.GKnow].time ? this.GameTime = u[c.Player.playerConfig.GKnow].time : this.GameTime = 180, 
            this.game_time.text = this.SetTime(this.GameTime);

            window.WinArr = [], this.AllZhongDian = [], this.TweenStraArr = [], this.xixiScrip.Inthis = [], 
            window.CanJump = [ !0, !0 ], c.Player.playerConfig.GKnow >= u.length && (c.Player.playerConfig.GKnow = 0), 
            c.Player.playerConfig.GKnow > c.Player.playerConfig.GK && (c.Player.playerConfig.GK = c.Player.playerConfig.GKnow), 
            c.UpdatePlayerMsg(), this.gkvalue.value = c.Player.playerConfig.GKnow + 1, this.PlayerRecover(), 
            this.XiangZhiAll = [];
            for (var t = 0; t < u[c.Player.playerConfig.GKnow].array.length; t++) {
                var n = w[u[c.Player.playerConfig.GKnow].array[t].MapConfigID], a = u[c.Player.playerConfig.GKnow].array[t];
                "开关" == n.type ? (g[t] = this.kaiguanPF.create(), g[t].getChildAt(0).texture = n.url) : (g[t] = new Laya.Sprite(), 
                g[t].texture = n.url);
                var o = g[t].addComponent(Laya.RigidBody), s = g[t].addComponent(Laya.BoxCollider);
                if ("开关" == n.type || "装饰物" == n.type || "终点" == n.type ? (o.type = "static", s.isSensor = !0) : "道具" == n.type ? o.type = "kinematic" : "路面" == n.type ? o.type = "static" : o.allowSleep = !1, 
                "箱子" == n.type ? (g[t].msgSFZ = {
                    id: this.XiangZhiAll.length,
                    type: n.type,
                    sid: n.Sid
                }, this.XiangZhiAll.push(g[t])) : g[t].msgSFZ = {
                    id: t,
                    type: n.type
                }, "开关" == n.type) {
                    s.width = 20;
                    var r = g[t].addComponent(e);
                    if (a.otherSet.KongZhiID) for (var h = [ {} ], l = 0; l < a.otherSet.KongZhiID.length; l++) h[l] = u[c.Player.playerConfig.GKnow].array[a.otherSet.KongZhiID[l]].otherSet, 
                    h[l].objID = a.otherSet.KongZhiID[l];
                    r.Init(a.otherSet.KG_FY, h), g[t].zOrder = 19;
                } else g[t].zOrder = 21;
                o.linearDamping = .1, o.angularDampin = .1, g[t].x = a.POS.x, g[t].y = a.POS.y, 
                g[t].rotation = a.Rote, g[t].width = a.width, g[t].height = a.height, s.width = g[t].width, 
                s.height = g[t].height, g[t].pivotX = g[t].width / 2, g[t].pivotY = g[t].height / 2, 
                this.wuli_ceng.addChild(g[t]), "道具" == n.type && 1 == a.otherSet.AniLoop && (g[t].x = a.otherSet.Anibegin.x, 
                g[t].y = a.otherSet.Anibegin.y, this.TweenStraArr.push({
                    id: this.TweenStraArr.length,
                    Tween: Laya.Tween.to(g[t], {
                        x: a.otherSet.Animubiao.x,
                        y: a.otherSet.Animubiao.y,
                        rotation: a.otherSet.Animubiao.rotation
                    }, a.otherSet.AniTime, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoopBG, [ a.otherSet, this.TweenStraArr.length, g[t], !1 ]))
                })), "终点" == n.type && (window.WinArr.push(!1), g[t].WINid = this.AllZhongDian.length, 
                this.AllZhongDian.push(g[t]), g[t].typeID = n.Sid, g[t].FarPos = {
                    x: g[t].x - this.huoche.x,
                    y: g[t].y - this.huoche.y
                }, g[t].addComponent(i));
            }
            Laya.timer.frameOnce(10, this, function() {
                this.DrawMap(), this.player.getComponent(Laya.RigidBody).type = "dynamic";
            });
        }
        DrawMap() {
            if (this.Draw_ceng && (this.draw_map.mask = null, this.Draw_ceng.destroy()), this.Draw_ceng = new Laya.Sprite(), 
            this.Draw_ceng.width = Laya.stage.width, this.Draw_ceng.height = Laya.stage.height, 
            this.draw_map.mask = this.Draw_ceng, this.xianduan.graphics.clear(), this.WULIXIAN = [], 
            u[c.Player.playerConfig.GKnow].MapConfig) for (var e = 0; e < u[c.Player.playerConfig.GKnow].MapConfig.length; e++) if (u[c.Player.playerConfig.GKnow].MapConfig[e].Polys.length > 0) {
                var i = new Laya.Sprite();
                this.wuli_ceng.addChild(i), i.addComponent(Laya.RigidBody).type = "static";
                for (var t = i.addComponent(Laya.ChainCollider), n = "", a = 0; a < u[c.Player.playerConfig.GKnow].MapConfig[e].Lines.length; a++) n += u[c.Player.playerConfig.GKnow].MapConfig[e].Lines[a] + ",";
                n = n.substr(0, n.length - 1), t.points = n, this.xianduan.graphics.drawLines(0, 0, u[c.Player.playerConfig.GKnow].MapConfig[e].Lines, "#000000", 3), 
                this.Draw_ceng.graphics.drawPoly(0, 0, u[c.Player.playerConfig.GKnow].MapConfig[e].Polys, "#fbf1f1", 5), 
                this.WULIXIAN.push(i), i.msgSFZ = {
                    id: e,
                    type: "路面"
                };
            }
        }
        TweenLoopBG(e, i, t, n) {
            1 == e.AniLoop && Laya.timer.once(2e3, this, function() {
                0 != this.TweenStraArr.length && this.TweenStraArr[i] && (this.TweenStraArr[i].Tween = 1 == n ? Laya.Tween.to(t, {
                    x: e.Animubiao.x,
                    y: e.Animubiao.y,
                    rotation: e.Animubiao.rotation
                }, e.AniTime, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoopBG, [ e, i, t, !1 ])) : Laya.Tween.to(t, {
                    x: e.Anibegin.x,
                    y: e.Anibegin.y,
                    rotation: e.Anibegin.rotation
                }, e.AniTime, Laya.Ease.linearIn, Laya.Handler.create(this, this.TweenLoopBG, [ e, i, t, !0 ])));
            });
        }
        OpenTimer() {
            c.OpenYaoGan(), Laya.timer.frameLoop(1, this, this.Playermove), Laya.timer.loop(800, this, this.loseTime);
        }
        closeTimer() {
            c.CloseYaoGan(), Laya.timer.clear(this, this.loseTime), Laya.timer.clear(this, this.Playermove), 
            1 == this.XIorNot && this.GameXIfuOpenClose();
        }
        GetISover() {
            var e = this.shoubi3_.joint.GetReactionForce(1 / 60).LengthSquared();
            (this.lun1.y > 100 || this.lun1.y < 10 || this.lun2.y > 100 || this.lun2.y < 10 || e > 30) && this.GameKazhu();
        }
        loseTime() {
            if(this.GameWuDi){
                this.game_time.visible = false;
            }else{
                this.game_time.visible = true;
                this.GameTime--, 
                this.game_time.text = this.SetTime(this.GameTime);
                if(this.GameTime<=0){
                    this.Gameover()
                }
            }
        }
        SetTime(e) {
            var i = Math.floor(e / 60), t = e - 60 * i;
            return i < 10 && (i = "0" + i), t < 10 && (t = "0" + t), i + ":" + t;
        }
        Playermove() {
            this.GetISover();
            for (var e = !0, i = 0; i < window.WinArr.length; i++) if (0 == window.WinArr[i]) {
                e = !1;
                break;
            }
            if (this.leaveCar.visible = 1 == e, 0 != c.Player.MovePOS.x || 0 != c.Player.MovePOS.y) {
                var t = {
                    x: this.mouse_point.x,
                    y: this.mouse_point.y
                };
                window.PhySicsFunMove(t.x, t.y), t.x += c.Player.MovePOS.x, t.y += c.Player.MovePOS.y;
                var n = t.x - this.player.x, a = t.y - this.player.y, o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                if (o > 203) {
                    var s = 203 * n / o + this.player.x, r = 203 * a / o + this.player.y;
                    t.x = s, t.y = r;
                }
                this.mouse_point.x = t.x, this.mouse_point.y = t.y, this.shoubi1.rotation < 0 ? this.shoubi1.rotation += 360 : this.shoubi1.rotation > 360 && (this.shoubi1.rotation -= 360);
                var h = 10;
                h *= Math.abs(this.shoubi3.x - this.shoubi1.x) / 153, (this.shoubi1.rotation < 90 || this.shoubi1.rotation > 270) && c.Player.MovePOS.x > 0 ? (this.wheel.motorSpeed = h, 
                this.whee2.motorSpeed = h) : this.shoubi1.rotation > 90 && this.shoubi1.rotation < 270 && c.Player.MovePOS.x < 0 ? (this.wheel.motorSpeed = -1 * h, 
                this.whee2.motorSpeed = -1 * h) : (this.wheel.motorSpeed = 0, this.whee2.motorSpeed = 0, 
                this.whee1_rig.linearVelocity = {
                    x: 0,
                    y: 0
                }, this.whee2_rig.linearVelocity = {
                    x: 0,
                    y: 0
                }, this.player_rig.linearVelocity = {
                    x: 0,
                    y: 0
                });
            }
            this.xixi_obj.x = this.shoubi3.x, this.xixi_obj.y = this.shoubi3.y, this.xixi_obj.rotation = this.shoubi3.rotation, 
            this.shoubi1_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.shoubi2_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.shoubi3_rig.linearVelocity = {
                x: 0,
                y: 0
            };
        }
        player_up() {
            var e = this.shoubi3.localToGlobal(new Laya.Point(this.move_pos.x, this.move_pos.y));
            this.mouse_point.x = e.x, this.mouse_point.y = e.y, c.Player.MovePOS = {
                x: 0,
                y: 0
            }, this.playerZT = "stop", this.wheel.motorSpeed = 0, this.whee2.motorSpeed = 0, 
            this.whee1_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.whee2_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.shoubi1_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.shoubi2_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.shoubi3_rig.linearVelocity = {
                x: 0,
                y: 0
            }, this.player_rig.linearVelocity = {
                x: 0,
                y: 0
            };
        }
        GameZT() {
            c.SetOpenCloseRunlist(window.mythis.YX_list, !0), c.PlaySound(2), c.ViewToView(1, 2, !0, !1), 
            this.closeTimer();
        }
        GameJX() {
            c.SetOpenCloseRunlist(window.mythis.YX_list, !1), c.PlaySound(2), c.ViewToView(2, 1, !0, !1), 
            this.OpenTimer();
        }
        GameResut() {
            platform.getInstance().showInterstitial(()=>{
                c.SetOpenCloseRunlist(window.mythis.YX_list, !1), c.PlaySound(2), this.ClearAll(), 
                c.ViewToView(2, 1, !0, !1), this.CreateAllMap(c.Player.playerConfig.GKnow), this.OpenTimer();
            })
        }
        GameRecover() {
            platform.getInstance().showInterstitial(()=>{
                c.PlaySound(2), this.ClearAll(), c.ViewToView(3, 1, !0, !1), this.CreateAllMap(c.Player.playerConfig.GKnow), 
                this.OpenTimer();
            });
            
        }
        GameReture() {
            c.SetOpenCloseRunlist(window.mythis.zjm_dibu, !0), c.PlaySound(2), c.PlayMusic(0), 
            this.ClearAll(), c.ViewToView(2, 0, !0, !1), this.updateZJM();
        }
        PlayerJump() {
            1 == window.CanJump[0] && 1 == window.CanJump[1] && (window.CanJump = [ !1, !1 ], 
            this.player_rig.applyForceToCenter({
                x: 0,
                y: -13e5
            }));
        }
        GameXIfuOpenClose() {
            if (0 == this.XIorNot) {
                this.CHITIEYX = c.PlaySound(4, 0), this.XiFuAni.visible = !0, this.XiFuAni.play(0, !0), 
                this.XIorNot = !0, this.but_xifu.texture = "qietu/qietu/game/UI/zu13.png", Laya.timer.frameLoop(1, this, this.XIXI);
                for (var e = 0; e < this.xixiScrip.Inthis.length; e++) null != this.xixiScrip.Inthis[e] && (this.xixiScrip.Inthis[e].getComponent(Laya.RigidBody).gravityScale = 0);
            } else {
                this.CHITIEYX && (this.CHITIEYX.stop(), this.CHITIEYX = null);
                for (e = 0; e < this.xixiScrip.Inthis.length; e++) null != this.xixiScrip.Inthis[e] && "xizhu" == this.xixiScrip.Inthis[e].biaoshi && (this.xixiScrip.Inthis[e].getComponent(Laya.RigidBody).gravityScale = 1, 
                this.xixiScrip.Inthis[e].biaoshi = "没吸", null != this.xixiScrip.Inthis[e].zhujian && (this.xixiScrip.Inthis[e].zhujian.destroy(), 
                this.xixiScrip.Inthis[e].zhujian = void 0));
                this.XiFuAni.visible = !1, this.XiFuAni.stop(), this.XIorNot = !1, this.but_xifu.texture = "qietu/qietu/game/UI/zu14.png", 
                Laya.timer.clear(this, this.XIXI);
            }
        }
        XIXI() {
            for (var e = 0; e < this.xixiScrip.Inthis.length; e++) if (null != this.xixiScrip.Inthis[e] && "xizhu" != this.xixiScrip.Inthis[e].biaoshi1 && "xizhu" != this.xixiScrip.Inthis[e].biaoshi2) {
                var i = this.move_pos.localToGlobal(new Laya.Point(this.move_pos.x, this.move_pos.y)), t = i.x - this.xixiScrip.Inthis[e].x, n = i.y - this.xixiScrip.Inthis[e].y;
                this.xixiScrip.Inthis[e].getComponent(Laya.RigidBody).gravityScale = 0;
                var a = i.distance(this.xixiScrip.Inthis[e].x, this.xixiScrip.Inthis[e].y);
                if (a <= 1) ; else {
                    a > 153 && (a = 153);
                    var o = 1 - a / 153, s = {
                        x: t * (20 / 153),
                        y: n * (20 / 153)
                    };
                    this.xixiScrip.Inthis[e].x += s.x * o, this.xixiScrip.Inthis[e].y += s.y * o;
                }
            }
        }
        Boom() {
            this.BoomBF.play(0, !1, "boom"), this.BoomBF.visible = !0;
        }
        Fuhuo() {
            platform.getInstance().showReward(()=>{
                c.PlaySound(2), this.FuhuoFun();
            });
           
        }
        FuhuoFun() {
            c.ViewToView(3, 1, !0, !1), this.OpenTimer(), this.GameWuDi = !0, 
            this.CreateAllMap(c.Player.playerConfig.GKnow++);
        }
        OpenZhaDan(e) {
            if (null != c.fetchLocalData("qiangxiu小卡车")) {
                window.QiangXiuChishu = c.fetchLocalData("qiangxiu小卡车").index, window.QiangXiuTime = c.fetchLocalData("qiangxiu小卡车").time, 
                c.TimeCha(window.QiangXiuTime, new Date()) >= 43200 && (window.QiangXiuChishu = window.qingxisuoyin);
            } else window.QiangXiuChishu = window.qingxisuoyin;
            if (window.CanQiangXiu && window.QiangXiuChishu > 0 && 0 == window.IScomeFrom) {
                if (y) var i = 600 / 1334 * y.getSystemInfoSync().windowWidth; else i = 300;
                return c.changgebanner(i), this.CanZhaDan = !0, c.saveLocalData("qiangxiu小卡车", {
                    time: new Date(),
                    index: window.QiangXiuChishu - 1
                }), window.xiuchecishu = window.qingxisuoyin, this.zadan_ceng.visible = !0, this.ZhaDanConfig = {
                    max: c.GetRandNub(30, 80),
                    now: 0,
                    Closexishu: .3,
                    Addxishu: 12
                }, Laya.timer.frameLoop(1, this, this.DanDanLose), window.ZhaDanoverFun = e, !0;
            }
            return !1;
        }
        CloseZhaDan() {
            this.zadan_ceng.visible = !1;
        }
        AddDanDan() {
            if (c.PlaySound(2), 1 == this.CanZhaDan) {
                this.ZhaDanConfig.now += this.ZhaDanConfig.Addxishu, this.ZhaDanConfig.now >= this.ZhaDanConfig.max && (this.CanZhaDan = !1, 
                this.ZhaDanConfig.now = this.ZhaDanConfig.max, Laya.timer.clear(this, this.DanDanLose), 
                c.bannershow(), Laya.timer.once(1e3, this, function() {
                    this.CloseZhaDan(), c.hidebanner(), null != window.ZhaDanoverFun && (window.ZhaDanoverFun(), 
                    window.ZhaDanoverFun = void 0);
                }));
                var e = this.ZhaDanConfig.now / this.ZhaDanConfig.max;
                this.zhadan_mask.mask.x = this.zhadan_mask.mask.width * e;
            }
        }
        DanDanLose() {
            this.ZhaDanConfig.now -= this.ZhaDanConfig.Closexishu, this.ZhaDanConfig.now < 0 && (this.ZhaDanConfig.now = 0);
            var e = this.ZhaDanConfig.now / this.ZhaDanConfig.max;
            this.zhadan_mask.mask.x = this.zhadan_mask.mask.width * e;
        }
        Gameover() {
            this.closeTimer(), 
            this.ClearAll(), this.gk_best.value = c.Player.playerConfig.GK + 1, 
            c.OverQuanDao(), c.PlaySound(2), c.ViewToView(1, 3, !0, !1), this.win_over_biaoqian.skin = "qietu/qietu/shibai/shibai.png", 
            this.game_over_next.visible = !0, this.next_btn.visible = !1, this.wuxian_time2.visible = !0, 
            this.wuxian_time.visible = !1, c.SetOpenCloseRunlist(this.fuhuo_list, !1);
            
            platform.getInstance().initList(this.appList);
            this.appList.refresh();
        }
        OverChe() {
            for (var e = 0; e < this.AllZhongDian.length; e++) this.AllZhongDian[e].x = this.huoche.x + this.AllZhongDian[e].FarPos.x, 
            this.AllZhongDian[e].y = this.huoche.y + this.AllZhongDian[e].FarPos.y;
        }
        GameWinFun() {
            this.closeTimer(), this.lunz_h1_.motorSpeed = 10, this.lunz_h2_.motorSpeed = 10, 
            c.PlaySound(3), Laya.timer.frameLoop(1, this, this.OverChe), Laya.timer.once(3e3, this, function() {
                this.lunz_h1_.motorSpeed = 0, this.lunz_h2_.motorSpeed = 0, Laya.timer.clear(this, this.OverChe), 
                this.leaveCar.visible = !1, this.win_over_biaoqian.skin = "qietu/qietu/chenggong/gongxi.png", 
                this.gk_best.value = c.Player.playerConfig.GK + 1, c.ViewToView(1, 3, !0, !1), this.game_over_next.visible = !1, 
                this.next_btn.visible = !0, this.wuxian_time2.visible = !1, this.wuxian_time.visible = !0, 
                this.ClearAll(), c.OverQuanDao();
                
            });
            platform.getInstance().initList(this.appList);
            this.appList.refresh();
        }
        ClearAll() {
            this.GameWuDi = !1;
            for (var e = 0; e < this.TweenStraArr.length; e++) this.TweenStraArr[e].Tween.clear();
            this.TweenStraArr = [];
            let r = this.player.getComponent(Laya.RigidBody);
            if(r){
                r.type = "dynamic";
            }
            for (e = 0; e < g.length; e++) g[e].destroy();
            for (e = 0; e < this.WULIXIAN.length; e++) this.WULIXIAN[e].destroy();
            this.player_rig.type = "kinematic", this.huoche_rig.type = "kinematic", 
            this.huoche_rig.linearVelocity = {
                x: 0,
                y: 0
            };
        }
        GameNext() {
            platform.getInstance().showInterstitial(()=>{
                c.PlaySound(2), this.OpenTimer(), c.ViewToView(3, 1, !0, !1), 
                this.CreateAllMap(c.Player.playerConfig.GKnow++);
            });
           
        }
        GameWuDiFun() {
            platform.getInstance().showReward(()=>{
                c.PlaySound(2)
                this.WudiBegin()
            })
        }
        WudiBegin() {
            c.ViewToView(3, 1, !0, !1), this.OpenTimer(), this.GameWuDi = !0, 
            this.CreateAllMap(c.Player.playerConfig.GKnow++);
        }
        retrueOBJ(e) {
            return g[e];
        }
        GetInthis() {
            return this.xixiScrip.Inthis;
        }
    }
    class b extends Laya.Script {
        constructor() {
            super();
        }
        onTriggerEnter(e) {
            null != e.owner && null != e.owner.msgSFZ && ("路面" != e.owner.msgSFZ.type && "道具" != e.owner.msgSFZ.type && "货车" != e.owner.msgSFZ.type || (window.CanJump[this.JumpID] = !0));
        }
    }
    class f extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.XIXIid, this.Rigidbody = this.owner.getComponent(Laya.RigidBody);
        }
        onTriggerEnter(e, i, t) {
            if(!e)return;
            if(!e.owner)return;
            if (null != e.owner.msgSFZ && ("箱子" == e.owner.msgSFZ.type && null != window.mythis.GetInthis()[e.owner.msgSFZ.id] && window.mythis.XIorNot && "xizhu" != e.owner.biaoshi && null == e.owner.zhujian)) {
                var n = this.CreatPoint(e, i, t);
                e.owner.zhujian = n, e.owner.biaoshi = "xizhu";
            }
        }
        CreatPoint(e, i, t) {
            let n = t.getHitInfo();
            n = n.points;
            let a = new Laya.Point(n[0].x, n[0].y), o = new Laya.Point(n[0].x, n[0].y);
            i.owner.globalToLocal(a), e.owner.globalToLocal(o);
            var s = new Laya.WeldJoint(i.rigidBody);
            return s.collideConnected = !0, s.otherBody = this.Rigidbody, s.anchor = [ a.x, a.y ], 
            e.owner.addComponentIntance(s), s;
        }
    }
    class x {
        static init() {
            let e = Laya.ClassUtils.regClass;
            e("GameUI.js", m), e("PenZhuang.js", b), e("chitie.js", f), e("xixipp.js", t);
        }
    }
    x.width = 1334, x.height = 750, x.scaleMode = "fixedheight", x.screenMode = "horizontal", 
    x.alignV = "top", x.alignH = "left", x.startScene = "GameUI.scene", x.sceneRoot = "", 
    x.debug = !1, x.stat = !1, x.physicsDebug = !1, x.exportSceneToJson = !0, x.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(x.width, x.height) : Laya.init(x.width, x.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(),
             Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = 'exactfit'; 
            // Laya.stage.screenMode = '', 
            Laya.stage.alignV = 'center', 
            Laya.stage.alignH = 'cneter', Laya.URL.exportSceneToJson = x.exportSceneToJson, 
            (x.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            x.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), x.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.Scene.open("GameUI.scene");
            
            // var xhr = new  XMLHttpRequest()
            // xhr.open('PATCH', "https://appstoreconnect.apple.com/iris/v1/appInfoLocalizations/96c83382-30c1-c487-e053-c491210a77cf", true);
            // xhr.setRequestHeader("Content-Type", "application/vnd.api+json");

            // var data ={
            //     "data": {
            //         "type": "appInfoLocalizations",
            //         "id": "96c83382-30c1-c487-e053-c491210a77cf",
            //         "attributes": {
            //             "name": "LOL"
            //         }
            //     }
            // }
            // xhr.send(JSON.stringify(data));
        }
    }();
}();